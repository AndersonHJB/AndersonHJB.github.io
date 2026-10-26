<script setup lang="ts">
import { useScrollLock } from "@vueuse/core";
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watch } from "vue";
import { withBase } from "vuepress/client";

// Keep the legacy PDF API used by existing articles without requiring
// the new media plugin's EmbedPDF viewer and its cross-origin fetches.
const props = withDefaults(defineProps<{
  url: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  ratio?: string | number;
  page?: string | number;
  zoom?: string | number;
  noToolbar?: boolean;
  toolbar?: boolean;
  noFullscreen?: boolean;
}>(), {
  title: "PDF 文档",
  width: "100%",
  ratio: 16 / 9,
  page: 1,
  toolbar: true,
});

const body = shallowRef<HTMLElement>();
const fullscreen = ref(false);
const scrollLocked = useScrollLock(body);

onMounted(() => { body.value = document.body; });
watch(fullscreen, (value) => { scrollLocked.value = value; });
onBeforeUnmount(() => { scrollLocked.value = false; });

const pdfUrl = computed(() => {
  const url = withBase(props.url);
  const [source, fragment = ""] = url.split("#");
  const options = new URLSearchParams(fragment);
  options.set("page", String(props.page));
  if (props.noToolbar || !props.toolbar) options.set("toolbar", "0");
  if (props.zoom !== undefined) options.set("zoom", String(props.zoom));
  return `${source}#${options}`;
});

const size = (value?: string | number) => typeof value === "number" ? `${value}px` : value;
const aspectRatio = computed(() => String(props.ratio).replace(":", " / "));
</script>

<template>
  <div
    class="pdf-viewer-wrapper"
    :class="{ fullscreen }"
    :style="fullscreen ? {} : { width: size(width), height: size(height), aspectRatio }"
    @keydown.esc="fullscreen = false"
  >
    <iframe class="pdf-viewer" :src="pdfUrl" :title="title" />
    <a class="pdf-open-link" :href="withBase(url)" target="_blank" rel="noopener noreferrer">打开 PDF</a>
    <button
      v-if="!noFullscreen"
      type="button"
      class="pdf-fullscreen-button"
      :aria-label="fullscreen ? '退出全屏' : '全屏查看 PDF'"
      :aria-pressed="fullscreen"
      @click="fullscreen = !fullscreen"
    >
      {{ fullscreen ? "退出全屏" : "全屏" }}
    </button>
  </div>
</template>

<style scoped>
.pdf-viewer-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.pdf-viewer-wrapper.fullscreen {
  position: fixed;
  inset: 0;
  z-index: 9998;
  border-radius: 0;
}

.pdf-viewer {
  width: 100%;
  height: 100%;
  border: 0;
}

.pdf-open-link,
.pdf-fullscreen-button {
  position: absolute;
  bottom: 1rem;
  padding: 0.25rem 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-accent);
  font: inherit;
  cursor: pointer;
}

.pdf-open-link { inset-inline-start: 1rem; }
.pdf-fullscreen-button { inset-inline-end: 1.5rem; }
</style>
