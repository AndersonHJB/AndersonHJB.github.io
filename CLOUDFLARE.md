# Cloudflare 发布

项目：`andersonhjb-github-io`

临时地址：https://andersonhjb-github-io.pages.dev

源码：`AndersonHJB/AndersonHJB.github.io` 的 `main` 分支。

推送 `main` 后，GitHub Actions 使用 Node.js 24、pnpm 11.22.0 构建站点，将完整产物提交到 `gh-pages`。Cloudflare Pages 绑定同一仓库的 `gh-pages` 分支，自动发布该分支的根目录。Cloudflare 的构建命令和输出目录均留空，环境变量 `SKIP_DEPENDENCY_INSTALL=1`。域名配置单独处理。

站点页面较多，单个进程生成全站会耗尽托管构建环境的内存。工作流先统一编译客户端和 SSR 资源，再把页面分成 16 批，最多同时执行 8 批，每批使用 10 GB Node 堆上限。各批复用相同的编译结果，保留完整路由、站点地图和订阅信息，只生成分配给自己的 HTML。精确版本的 VuePress bundler 补丁负责共享编译缓存和按输出路径分配页面。

编译缓存只在同一次工作流内共享，编译和页面生成使用相同的源码提交与构建目录。

合并脚本校验同一源码提交、全部批次、页面覆盖、资源冲突、必需的脚本和样式以及 Cloudflare 文件限制。通过后才更新 `gh-pages`；中间清单不会进入网站。构建产物在发布后自动清理，失败时最多保留一天。工作流也支持手动运行。

日常本地构建仍可运行 `pnpm install --frozen-lockfile` 和 `pnpm run docs:build`。设置 `VUEPRESS_RENDER_SHARD_COUNT`、`VUEPRESS_RENDER_SHARD_INDEX` 后只会生成单批页面；完整站点需要经过合并脚本，不能直接发布单批目录。

构建配置位于 `.github/workflows/deploy-docs.yml`，合并逻辑位于 `scripts/merge-site-shards.mjs`。升级 `@vuepress/bundler-vite` 时，需要同时更新 `patches/` 中的补丁和 pnpm 锁文件。
