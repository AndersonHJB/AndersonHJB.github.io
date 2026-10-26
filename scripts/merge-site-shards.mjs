import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const [input = 'site-shards', output = 'site-output', count = '16'] = process.argv.slice(2);
const inputRoot = path.resolve(input);
const outputRoot = path.resolve(output);
const shardCount = Number(count);
const manifestName = 'render-shard-manifest.json';
assert(Number.isInteger(shardCount) && shardCount > 0 && shardCount <= 64, 'Invalid shard count');
const contains = (parent, child) => {
  const relative = path.relative(parent, child);
  return relative === '' || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative));
};
assert(!contains(inputRoot, outputRoot) && !contains(outputRoot, inputRoot), 'Input and output must be separate directories');
assert(outputRoot !== process.cwd() && outputRoot !== path.parse(outputRoot).root, 'Refusing unsafe output directory');

function safePath(value) {
  assert(typeof value === 'string' && value.length > 0, 'Empty manifest path');
  assert(!value.includes('\\') && !value.includes('\0'), `Invalid manifest path: ${value}`);
  assert(!path.posix.isAbsolute(value) && path.posix.normalize(value) === value, `Non-relative manifest path: ${value}`);
  assert(!value.split('/').some(part => part === '..' || part === '.' || part === ''), `Unsafe manifest path: ${value}`);
  return value;
}

function pathList(values, label) {
  assert(Array.isArray(values), `Missing ${label}`);
  // Existing tag/category routes can resolve to the same file within one shard.
  return [...new Set(values.map(safePath))];
}

async function* files(root, relative = '') {
  for (const entry of await fs.readdir(path.join(root, relative), { withFileTypes: true })) {
    const name = relative ? `${relative}/${entry.name}` : entry.name;
    assert(!entry.isSymbolicLink(), `Unexpected symlink: ${name}`);
    if (entry.isDirectory()) yield* files(root, name);
    else if (entry.isFile()) yield name;
  }
}

const shards = [];
for (const entry of await fs.readdir(inputRoot, { withFileTypes: true })) {
  if (!entry.isDirectory() || !/^site-shard-\d+$/.test(entry.name)) continue;
  const root = path.join(inputRoot, entry.name);
  const manifest = JSON.parse(await fs.readFile(path.join(root, manifestName), 'utf8'));
  assert.equal(manifest.schemaVersion, 1, `Unsupported manifest in ${entry.name}`);
  assert.equal(manifest.shardCount, shardCount, `Wrong shard count in ${entry.name}`);
  assert(Number.isInteger(manifest.shardIndex) && manifest.shardIndex >= 0 && manifest.shardIndex < shardCount, 'Invalid shard index');
  assert.equal(entry.name, `site-shard-${manifest.shardIndex}`, 'Artifact name does not match manifest');
  assert(typeof manifest.sourceCommit === 'string', 'Missing source commit');
  if (process.env.GITHUB_SHA) assert.equal(manifest.sourceCommit, process.env.GITHUB_SHA, 'Artifact belongs to a different source commit');
  shards.push({
    root,
    index: manifest.shardIndex,
    commit: manifest.sourceCommit,
    expected: pathList(manifest.expectedPages, 'expected pages').sort(),
    rendered: pathList(manifest.renderedPages, 'rendered pages'),
    clientFiles: pathList(manifest.clientFiles, 'client files'),
  });
}
shards.sort((a, b) => a.index - b.index);
assert.equal(shards.length, shardCount, `Expected ${shardCount} artifacts`);
assert.deepEqual(shards.map(shard => shard.index), Array.from({ length: shardCount }, (_, i) => i), 'Missing or repeated shard');
const expected = new Set(shards[0].expected);
assert(expected.has('index.html') && expected.has('404.html'), 'Site index or 404 page is missing from the manifest');
assert(!expected.has(manifestName), 'Manifest name conflicts with a page');
const rendered = new Set();
for (const shard of shards) {
  assert.equal(shard.commit, shards[0].commit, 'Artifacts came from different commits');
  assert.deepEqual(shard.expected, shards[0].expected, 'Artifacts disagree on the complete page list');
  for (const page of shard.rendered) {
    assert(expected.has(page), `Unexpected rendered page: ${page}`);
    const owner = createHash('sha256').update(page).digest().readUInt32BE(0) % shardCount;
    assert.equal(owner, shard.index, `Page belongs to a different shard: ${page}`);
    assert(!rendered.has(page), `Page rendered by multiple shards: ${page}`);
    rendered.add(page);
  }
}
assert.equal(rendered.size, expected.size, 'Shards do not cover every expected page');

await fs.rm(outputRoot, { recursive: true, force: true });
await fs.mkdir(outputRoot, { recursive: true });
const knownHashes = new Map();
async function copyFile(shard, relative, compare = false) {
  const source = path.join(shard.root, relative);
  const target = path.join(outputRoot, relative);
  const sourceStat = await fs.lstat(source);
  assert(sourceStat.isFile(), `Artifact file is not regular: ${relative}`);
  await fs.mkdir(path.dirname(target), { recursive: true });
  if (compare) {
    const targetStat = await fs.stat(target).catch(error => {
      if (error.code !== 'ENOENT') throw error;
      return null;
    });
    if (targetStat) {
      assert.equal(sourceStat.size, targetStat.size, `Conflicting client asset: ${relative}`);
      const digest = buffer => createHash('sha256').update(buffer).digest('hex');
      let targetHash = knownHashes.get(relative);
      if (!targetHash) {
        targetHash = digest(await fs.readFile(target));
        knownHashes.set(relative, targetHash);
      }
      assert.equal(digest(await fs.readFile(source)), targetHash, `Conflicting client asset: ${relative}`);
      return;
    }
  }
  await fs.copyFile(source, target);
}

const firstRendered = new Set(shards[0].rendered);
for await (const relative of files(shards[0].root)) {
  if (relative === manifestName || (expected.has(relative) && !firstRendered.has(relative))) continue;
  await copyFile(shards[0], relative);
}
for (const shard of shards) {
  for (const relative of shard.clientFiles) {
    // A Vite HTML shell must never replace an owning shard's rendered page.
    if (!expected.has(relative) && relative !== manifestName) await copyFile(shard, relative, true);
  }
  for (const relative of shard.rendered) await copyFile(shard, relative);
}
await fs.writeFile(path.join(outputRoot, '.nojekyll'), '');

const publishedFiles = new Set();
let totalBytes = 0;
for await (const relative of files(outputRoot)) {
  const { size } = await fs.stat(path.join(outputRoot, relative));
  assert(size <= 25 * 1024 * 1024, `File exceeds Cloudflare's 25 MiB limit: ${relative}`);
  publishedFiles.add(relative);
  totalBytes += size;
}
assert(publishedFiles.size <= 20000, `Site exceeds Cloudflare's 20,000-file limit: ${publishedFiles.size}`);
assert(!publishedFiles.has(manifestName), 'Internal manifest must not be published');
for (const relative of expected) assert(publishedFiles.has(relative), `Missing page: ${relative}`);

function decodeAttribute(value) {
  return value.replace(/&#(x[0-9a-f]+|\d+);|&(amp|quot|apos|lt|gt);/gi, (_, number, named) => {
    if (number) return String.fromCodePoint(number[0].toLowerCase() === 'x' ? Number.parseInt(number.slice(1), 16) : Number(number));
    return { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' }[named.toLowerCase()];
  });
}

function attributes(tag) {
  const result = {};
  for (const match of tag.matchAll(/([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)) {
    result[match[1].toLowerCase()] = decodeAttribute(match[2] ?? match[3] ?? match[4] ?? '');
  }
  return result;
}

const missingAssets = [];
for (const relative of expected) {
  const html = await fs.readFile(path.join(outputRoot, relative), 'utf8');
  for (const match of html.matchAll(/<(script|link)\b[^>]*>/gi)) {
    const attr = attributes(match[0]);
    const rel = (attr.rel || '').toLowerCase().split(/\s+/);
    let resource;
    if (match[1].toLowerCase() === 'script') resource = attr.src;
    else if (rel.includes('stylesheet') || rel.includes('modulepreload') || (rel.includes('preload') && ['style', 'script'].includes((attr.as || '').toLowerCase()))) resource = attr.href;
    if (!resource) continue;
    const url = new URL(resource, `https://static.invalid/${relative}`);
    if (url.origin !== 'https://static.invalid') continue;
    const encoded = url.pathname.slice(1);
    let decoded = encoded;
    try { decoded = decodeURIComponent(encoded); } catch { /* Literal percent signs can be valid filenames. */ }
    if (!publishedFiles.has(encoded) && !publishedFiles.has(decoded)) missingAssets.push(`${relative}: ${resource}`);
  }
}
assert.equal(missingAssets.length, 0, `Missing required scripts or styles:\n${missingAssets.slice(0, 20).join('\n')}`);
console.log(`Verified ${shardCount} shards, ${expected.size} rendered pages, ${publishedFiles.size} files, ${totalBytes} bytes from ${shards[0].commit || 'local build'}.`);
