---
title: 「初级以上」打造你的 AI Agent 工具箱(Folder as an APP)
icon: blog
date: 2026-04-05 15:10:25
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true

backToTop: true
toc: true
---



::: details .

| 序号 | 名称                                                    | 链接                                                         |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------ |
|      | **001 你的APP不非得是APP 第一课**                       |                                                              |
| 01   | 课程介绍：你的 APP 不非得是 APP (小白也可以做 AI Agent) | [https://www.youtube.com/watch?v=UJ30dIg3DLM](https://www.youtube.com/watch?v=UJ30dIg3DLM) |
| 02   | 你的APP不非得是APP · 第一课                             | [https://www.youtube.com/watch?v=MdxYAGwaysQ](https://www.youtube.com/watch?v=MdxYAGwaysQ) |
|      | **002 你的APP不非得是APP · 第二课**                     |                                                              |
| 03   | 你的 APP 不非得是APP · 第二课                           | [https://www.youtube.com/watch?v=84RT3yHaJA8](https://www.youtube.com/watch?v=84RT3yHaJA8) |
|      | **003 你的APP不非得是APP · 第三课**                     |                                                              |
| 04   | 你的APP不非得是APP · 第三课                             | [https://www.youtube.com/watch?v=FZt6wC_Cj5g](https://www.youtube.com/watch?v=FZt6wC_Cj5g) |
|      | **004 你的APP不非得是APP · 第四课**                     |                                                              |
| 05   | 你的APP不非得是APP · 第四课                             | [https://www.youtube.com/watch?v=5LtS4_UBeFM](https://www.youtube.com/watch?v=5LtS4_UBeFM) |
|      | **005 你的APP不非得是APP · 第五课**                     |                                                              |
| 06   | 你的 APP 不非得是APP · 第五课                           | [https://www.youtube.com/watch?v=Vt726TJzS-M](https://www.youtube.com/watch?v=Vt726TJzS-M) |
|      | **006 你的APP不非得是APP · 第六课**                     |                                                              |
| 07   | Part 1 : 你的APP不非得是APP · 第六课                    | [https://www.youtube.com/watch?v=IeFOux0_71g](https://www.youtube.com/watch?v=IeFOux0_71g) |



:::

::: tabs

@tab 01

准备好让你的大脑“click”一下了吗？在本节课中，我们将直入主题，亲手实践**“Folder as an App”**这个核心概念。你没听错，就在这第一节课里，我们将一起从零开始，用最直接的方式，创造出几个高价值的、能立刻为你所用的 AI 工具：

**🔨 在本次课程中，我们将亲手打造：**

1. **YouTube/字幕/音频下载器**：一句话搞定你所有音视频素材。
2. **视频音频转换压缩器**：轻松处理大文件，让工作流更顺畅。
3. **自动搜索YouTube并做基本截取**：让 AI 帮你高效完成信息搜集和初步处理。
4. **【高能环节】让 AI 指挥 AI**：我们将实践如何通过 Codex CLI 调用 Gemini CLI，让你第一次成为 AI 的“指挥官”。

这不仅仅是动手，更是思维的升级。通过打造这些工具，你将真正掌握：

**🧠 你将学到的核心知识点：**

- **站在巨人的肩膀上**：学会如何发现并利用现有的开源软件，而不是重复造轮子。
- **理解 Agent 的“大脑”**：深入 [AGENTS.MD](http://agents.md/) / [CLAUDE.MD](http://claude.md/) / [GEMINI.MD](http://gemini.md/) 的核心思想。
- **掌握工作流（Workflow）**：理解“管线”和 Playbook（咒语）的概念，让复杂的任务自动化。
- **学会用 GitHub 做版本管理**：像一个专业的开发者一样，管理你的创意和代码。
- **解锁课程的“圣杯”——用 AI 造 AI**：我们将初次探索如何引导 AI 自我构建和优化工作流。

@tab 02

![](https://blog.images.bornforthis.cn/docs-images/sha256/8e/8e48fb02aa1413c7b1c008db26440ac176a7366997e5e38e5b8f2022f8c97c7f.png)

**讲师：Ray**

## 课程概览 (Course Overview)

欢迎来到《你的APP不非得是APP》系列课程的第一节。 [00:00:04,520](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4s) 本节课的目标是带领初学者进入 AI Agent 的世界，通过一个名为 “Folder as an App” (文件夹即应用) 的核心理念，教会大家如何打造属于自己的 AI 助手。 [00:00:07,280](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=7s) 我们将从一个实用的 YouTube 视频下载工具入手，手把手地展示如何指挥 AI 为我们完成具体任务，而不仅仅是构建一个传统的应用程序。 [00:17:15,889](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1035s)

## 核心理念与学习心态 (Core Concepts & Mindset)

### 核心概念：Folder as an App (文件夹即应用)

这个理念的核心是，我们可以在一个普通的文件夹中，通过 AI 命令行工具 (如 Codex CLI)，直接让 AI 完成任务，使这个文件夹本身就像一个具备特定功能的应用。 [00:08:35,510](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=515s) 我们工作的主要环境就是一个文件夹，而 AI Agent 就住在这个文件夹里，能够直接操作你的电脑和文件。 [00:09:38,770](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=578s)

### 思维转变："Do things for me" vs. "Make an app for me"

**这是本节课最重要的思维模型转变：**

- **传统思维 (Make an app for me)**: 请求 AI 为我们制作一个软件（例如一个二维码生成器），然后我们再去操作这个软件来完成任务。 [00:08:56,110](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=536s)
- **Agentic 思维 (Do things for me)**: 直接命令 AI 替我们完成最终目的（例如“请帮我生成这个链接的二维码”），省去中间构建应用的步骤。 [00:09:22,149](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=562s) 这种方式将 AI 视为一个能直接执行任务的智能助手，而非仅仅是一个代码生成工具。 [00:14:47,010](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=887s)

### 拥抱“非分的要求” (Embrace Non-trivial Requests)

Ray 鼓励大家大胆地向 AI 提出看似复杂、“非分”的要求，例如直接让 AI 为视频生成字幕。 [00:10:19,670](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=619s) 这个过程虽然可能会失败或结果不稳定，但它能帮助我们验证 AI 的能力边界，并真正理解“Do things for me”的强大之处。 [00:11:10,270](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=670s)

### 认识 AI 的不稳定性并寻找解决方案

在实践中，AI Agent 的表现可能非常不稳定。 [00:15:27,689](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=927s) 同一个任务，今天可能成功执行，明天就可能以“能力不足”为由拒绝。 [00:15:31,930](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=931s) 此外，AI 给出的解决方案也未必是最佳或你最想要的。 [00:15:45,550](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=945s) 课程的目标之一，就是学习如何通过设计和规范，将这种不可控性转变为可控、可靠的工作流。 [00:16:38,290](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=998s)

### 站在巨人的肩膀上 (Stand on the Shoulders of Giants)

当 AI 自身的能力受限或无法找到解决方案时，我们不需要从零开始。 [00:24:45,161](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1485s) 我们可以利用全球最大的开源社区 GitHub，寻找已经存在的、免费的命令行工具来帮助我们实现目标。 [00:26:18,942](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1578s) 作为小白，我们无需理解这些工具的复杂用法，只需要告诉我们的 AI Agent：“有这么一个工具，请你用它来帮我完成任务”。 [00:26:29,542](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1589s)

## 课程必备工具 (Essential Tools)

Codex CLI

一款强大的 AI 命令行工具，它允许 AI Agent 直接在你本地的电脑环境中执行任务、操作文件和运行代码。 [00:00:32,479](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=32s)

- **官网链接**: https://github.com/codex-team/codex-cli

Warp

一款现代化的、基于 Rust 构建的终端模拟器，提供了更友好的用户界面和强大的功能，作为系统自带 Terminal 的替代品。 [00:01:01,940](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=61s)

- **官网链接**: https://www.warp.dev/

Visual Studio Code (VSCode)

由微软开发的免费、开源的代码编辑器。本课程中使用它来查看和编辑项目文件，并利用其集成的 Codex 插件与 AI 交互。 [00:23:08,678](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1388s)

- **官网链接**: https://code.visualstudio.com/

yt-dlp

一个在 GitHub 上的开源命令行工具，是 youtube-dl 的一个分支，功能强大，专门用于从 YouTube 和哔哩哔哩等数百个视频网站下载视频和音频。 [00:25:13,921](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1513s)

- **官网链接**: https://github.com/yt-dlp/yt-dlp

FFmpeg

一个领先的多媒体框架，能够解码、编码、转码、混合、解密、流媒体、过滤和播放几乎所有人类和机器创建的多媒体文件。AI 在处理视频和音频合并时会自动调用它。 [00:13:31,089](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=811s)

- **官网链接**: https://ffmpeg.org/

npm (Node Package Manager)

Node.js 的默认包管理器，用于安装和管理 JavaScript 程序的依赖项。课程中使用它来更新 Codex CLI。 [00:05:51,620](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=351s)

- **官网链接**: https://www.npmjs.com/

## 分步实操流程 (Step-by-Step Walkthrough)

### 阶段一：环境设置与初步探索

1. **创建项目文件夹**: 在桌面上创建一个新的文件夹，例如命名为 project。 [00:00:32,820](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=32s)

2. **在文件夹中打开终端**:

    - **方法一 (右键菜单)**: 在文件夹上右键，选择“服务”(Services)，然后点击 “New Terminal at Folder” 或 “New Warp Tab here”。 [00:00:52,900](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=52s)
    - **方法二 (拖拽)**: 打开终端或 Warp，输入 cd (注意 cd 后面有一个空格)，然后将文件夹拖拽到终端窗口中，按回车键。 [00:01:35,300](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=95s)

3. **启动 Codex CLI**: 在终端中输入以下命令以启动 Codex 并赋予其高级权限。 [00:02:43,820](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=163s)

    > *codex -m "GPT-5 Codex" -c model_reasoning_effort=high --yolo --search*[*00:03:00,380*](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=180s)
    >
    > - *-m "GPT-5 Codex": 指定使用的模型为 GPT-5 Codex。* [*00:03:06,100*](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=186s)
    > - *-c model_reasoning_effort=high: 设置配置参数，让模型“玩命思考”。* [*00:03:13,160*](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=193s)
    > - *--yolo: (You Only Live Once) 给予 AI 权限执行大多数操作而无需反复征求你的同意。* [*00:03:30,740*](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=210s)
    > - *--search: 赋予 AI 在线搜索的能力（需要较新版本的 Codex CLI）。* [*00:03:55,620*](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=235s)

4. **更新 Codex CLI (如果需要)**: 如果启动时提示有可用更新 (update available)，按住 Control + C 退出 Codex。 [00:04:57,380](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=297s) 然后复制提示中的更新命令 (如 npm install -g @codex-team/codex-cli)，粘贴到终端中执行即可。 [00:05:51,620](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=351s)

### 阶段二：构建 YouTube 下载器

1. **创建新文件夹**: 为我们的下载器创建一个专用的文件夹，例如 YT Downloader。 [00:17:36,510](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1056s)
2. **初次尝试与失败**: Ray 尝试直接向 Codex 提出下载 YouTube 视频的请求，但由于 OpenAI 的安全策略，该请求被多次拒绝。 [00:20:06,018](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1206s) 这揭示了直接依赖 AI 泛化能力时可能遇到的限制。 [00:20:53,998](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1253s)
3. **寻找并指定工具 (Workaround)**:
    - 通过 Google 搜索 “GitHub yt-dlp” 找到了强大的开源下载工具。 [00:25:08,121](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1508s)
    - 改变策略，不再让 AI “想办法下载”，而是明确指示它：“请你安装这个工具 (https://github.com/yt-dlp/yt-dlp)，并用它帮我下载视频”。 [00:26:54,982](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1614s), [00:31:13,484](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1873s)
4. **迭代与优化**:
    - AI 首次下载的视频是 .webm 格式，可能无法播放。 [00:32:29,154](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1949s)
    - 提出新要求：“你能给我下载 MP4 的视频吗？” AI 随后将已下载的文件转换为 MP4 格式。 [00:32:57,674](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=1977s)
    - 发现下载的视频清晰度不高 (例如只有 720p)。 [00:33:55,154](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=2035s) 这促使我们思考如何更精确地控制下载参数，从而引出了定义“操作手册”的需求。 [00:35:41,174](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=2141s)

### 阶段三：创建并完善操作手册 ([AGENTS.md](http://agents.md/))

1. **引入 `**[**AGENTS.md**](http://agents.md/)**` 概念**: 为了解决 AI 的不稳定性，我们为它创建一个名为 [AGENTS.md](http://agents.md/) 的操作手册。每当 AI 在这个文件夹中启动时，它会首先阅读这个文件，从而了解自己的任务、可用工具和标准操作流程。 [00:43:31,861](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=2611s), [00:57:35,310](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=3455s)
2. **方法一：使用 `/init` 自动生成**:
    - 在 Codex CLI 中，输入斜杠命令 /init 并回车。 [00:49:31,922](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=2971s)
    - AI 会自动扫描当前文件夹中的所有文件，理解项目内容，并生成一份初步的 [AGENTS.md](http://agents.md/) 文件。 [00:50:24,122](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=3024s)
3. **方法二：让 AI 编写操作手册**:
    - 通过自然语言向 AI 提出请求：“请你帮我写一个 [agents.md](http://agents.md/) 文件...” [00:55:13,430](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=3313s)
    - **引入核心框架 (Purpose, Tools, Playbooks)**: 指导 AI 按照这个结构来组织 [AGENTS.md](http://agents.md/)，使其更加清晰和高效。 [01:08:01,957](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4081s)
        - **Purpose (目的)**: 定义 Agent 的总体目标和行为准则。 [01:08:01,957](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4081s)
        - **Tools (工具)**: 列出当前环境中已安装且可用的工具及其功能。 [01:08:01,957](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4081s)
        - **Playbooks (作业管线/剧本)**: 定义具体的“咒语”或触发语。当用户说出特定的话时，Agent 就按照预设的流程执行任务。 [01:08:06,817](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4086s)
    - **迭代优化手册**: 与 AI 对话，修正手册中的歧义（如“你”和“我”的指代问题），并调整规则的优先级（如将“优先匹配 Playbook”放在首位）。 [01:14:44,946](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4484s), [01:17:36,306](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4656s)

### 阶段四：测试与能力迁移

1. **测试 `**[**AGENTS.md**](http://agents.md/)**` 的效果**:
    - 关闭并重新打开 VSCode 或终端，开启一个全新的会话 (失忆状态)。 [01:19:31,718](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4771s)
    - 使用之前被拒绝过的 GPT-5 Codex 模型。 [01:20:02,958](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4802s)
    - 直接发出 Playbook 中定义的指令：“请你下载这个视频”。 [01:20:38,878](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4838s)
    - 观察到 AI 在短暂思考后，绕过了安全限制，并直接、高效地执行了预设的下载流程，没有进行不必要的检查。 [01:21:56,818](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4916s)
2. **迁移到 Gemini CLI**:
    - 将 [AGENTS.md](http://agents.md/) 文件重命名为 [GEMINI.md](http://gemini.md/)。 [01:35:19,968](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=5719s)
    - 在终端中使用 Gemini CLI (gemini --yolo) 启动。 [01:35:34,487](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=5734s)
    - 发出同样的下载指令。 [01:36:01,008](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=5761s)
    - 观察到 Gemini 明确表示正在使用 [GEMINI.md](http://gemini.md/)，并成功执行了任务，证明了这套操作手册具有跨 AI 平台的通用性。 [01:36:14,387](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=5774s)

## 关键概念与进阶技巧 (Key Concepts & Advanced Techniques)

### 深入理解 `[AGENTS.md](http://agents.md/)`

[AGENTS.md](http://agents.md/) (或 [CLAUDE.md](http://claude.md/), [GEMINI.md](http://gemini.md/)) 是你与 AI Agent 协作的基石。 [00:44:55,801](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=2695s) 它扮演着“系统指令”(System Prompt) 或“操作手册”的角色，在每次会话开始时为 AI 设定好行为框架。 [00:45:33,542](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=2733s) 一个精心设计的 [AGENTS.md](http://agents.md/) 可以极大地提高 AI 的稳定性、效率和可预测性。

### `[AGENTS.md](http://agents.md/)` 的核心三段式框架

Ray 提出的这个框架是设计高效 AI Agent 的关键：

1. **Purpose (目的)**: 告诉 AI 它的核心使命是什么。例如，它的首要任务是匹配 Playbook，并且它应该理解用户只通过自然语言下达指令。 [01:09:35,877](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4175s), [01:19:05,045](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4745s)
2. **Tools (工具)**: 明确告知 AI 它拥有哪些“武器”。将已安装的工具（如 yt-dlp, ffmpeg）及其核心功能在此列出，避免 AI 在每次任务时都去重复探索环境。 [01:10:27,798](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4227s)
3. **Playbooks (作业管线)**: 这是自动化的核心。为常用任务设定触发“咒语”和固定的执行步骤。例如，当用户说“下载视频”时，AI 知道应该默认下载 1080p 的 MP4 文件，并使用最优命令，而不是每次都重新规划。 [01:11:07,938](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4267s)

### “接力” (Relay) 概念

你可以在一个 AI 编程环境（如在线的 Replit）中开始一个项目，然后将代码下载到本地文件夹。 [00:52:44,982](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=3164s) 接着，在本地使用 Codex CLI 的 /init 命令，让本地的 AI Agent“接力”这个项目。 [00:53:11,002](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=3191s) 它会阅读并理解已有的代码，从而实现无缝的跨平台协作。 [00:53:28,582](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=3208s)

### 让 AI 成为 AI 的设计师

在创建和优化 [AGENTS.md](http://agents.md/) 的过程中，不要自己动手写。 [01:15:28,045](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4528s) 而是通过高质量的 Prompt，让 AI 自己为自己编写和迭代操作手册。 [01:15:34,385](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4534s)

> *“你好，你的这个* [*AGENTS.md*](http://agents.md/) *有歧义...请你作为一个世界级的系统设计专家，帮我改进它。”* [*01:14:48,306*](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4488s)*,* [*01:18:02,346*](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4682s)

这种“元编程”的思路能让 AI 产出比我们手写更规范、更符合其“思维方式”的文档。[01:18:24,505](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=4704s)



### 跨 AI 平台的可移植性

通过简单地重命名操作手册文件，你可以让为 Codex 设计的 AI Agent 快速适应 Gemini 或 Claude Code 环境。 [01:36:40,447](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=5800s)

- Codex CLI 读取: [AGENTS.md](http://agents.md/) [01:37:22,588](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=5842s)
- Gemini CLI 读取: [GEMINI.md](http://gemini.md/) [01:37:22,588](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=5842s)
- Claude Code 读取: [CLAUDE.md](http://claude.md/) [01:37:33,175](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=5853s)

这个技巧让你的工作流具备了极高的灵活性和通用性。 [01:37:59,075](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=5879s)

## 课程延展与预告 (Future Learning)

今天的课程仅仅是一个开始，我们成功构建了一个基础但可靠的 AI Agent。 [01:40:22,656](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=6022s)

- **增加新工具与技能**: 在接下来的课程中，我们将为这个 Agent 增加更多工具，例如集成 ElevenLabs 或 OpenAI 的 API 来实现视频字幕的自动生成和配音。 [01:40:40,715](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=6040s)
- **丰富 Playbooks**: 随着工具的增多，我们会不断丰富我们的 Playbooks，让 Agent 能够处理更复杂的自动化任务。 [01:41:00,635](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=6060s)
- **应对可扩展性 (Scalability)**: 当 [AGENTS.md](http://agents.md/) 变得越来越庞大时，我们将探讨如何进行模块化管理，例如将不同工具的详细文档拆分到独立文件中，使主手册保持简洁，像一个“目录”。 [01:41:13,276](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=6073s)
- **提交作业**: 请大家积极尝试今天的练习，无论是做成一个简单的下载工具，还是设计出更完善的 [AGENTS.md](http://agents.md/)，都欢迎到课程网站的作业区分享你的成果。 [01:54:17,940](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=6857s)

感谢大家的参与，我们下节课再见！ [01:56:23,640](https://www.youtube.com/watch?v=MdxYAGwaysQ&t=6983s)

@tab 03-第二课

## 课程概览 (Course Overview)

在本节课中，Ray 承接上节课的内容，首先讲解了如何使用 GitHub 进行版本控制，并强调了利用 .gitignore 文件避免上传大文件和敏感信息的重要性。[00:00:52,880](https://youtu.be/84RT3yHaJA8?t=52s) 课程的核心部分转向了强大的音视频处理工具 FFmpeg，通过实际案例展示了如何利用 AI Agent 自动化复杂的视频搜索、下载和剪辑工作流。[00:10:45,716](https://youtu.be/84RT3yHaJA8?t=645s) 此外，Ray 引导大家持续优化 AI Agent 的“大脑”——[agents.md](http://agents.md/) 文件，建立清晰的 inputs 和 outputs 工作区，并最终教会 AI Agent 如何调用另一个 AI 工具（Gemini CLI），实现了“AI 控制 AI”的进阶操作。[01:07:46,468](https://youtu.be/84RT3yHaJA8?t=4066s)

## 核心理念与学习心态 (Core Concepts & Mindset)

- **AI First 心态：提出“非分”的要求**

    遇到任何问题或需求，都应该首先想到让 AI 去解决，即使这个要求听起来非常大胆或不切实际。[00:28:11,472](https://youtu.be/84RT3yHaJA8?t=1691s) Ray 强调：“只有你想不到，没有 AI 做不到”，要敢于提问和设想，将 AI 视为可以解决一切问题的世界级专家。[00:28:51,992](https://youtu.be/84RT3yHaJA8?t=1731s) 这是发挥 AI 潜力的关键心态。[01:32:59,708](https://youtu.be/84RT3yHaJA8?t=5579s)

- **AI Agent 养成计划 (AI Agent Growth Plan)**

    我们构建的 AI Agent 如同一个养成类游戏中的角色。[01:40:21,559](https://youtu.be/84RT3yHaJA8?t=6021s) 当遇到不会的任务时，我们就教它学习新技能（安装和配置新工具）；学会后，它会将此技能记录在案（更新 [agents.md](http://agents.md/) 和相关文档），未来便可直接执行。[01:40:29,179](https://youtu.be/84RT3yHaJA8?t=6029s) 整个过程是一个持续学习、收集技能、不断优化的成长过程。[01:40:51,379](https://youtu.be/84RT3yHaJA8?t=6051s)

- **AI 自我进化与系统设计**

    我们可以引导 AI Agent 扮演“世界级系统架构师”的角色，让它自己审查和改进其核心配置文件 [agents.md](http://agents.md/)。[00:46:56,248](https://youtu.be/84RT3yHaJA8?t=2816s) 通过这种方式，AI 不仅是执行者，更是自身系统的设计者和优化者，能够实现自我完善和进化。[01:07:29,588](https://youtu.be/84RT3yHaJA8?t=4049s)

- **文件夹即应用 (Folder as an App)**

    项目的文件夹结构本身就定义了 AI Agent 的工作逻辑和行为准则。[01:30:09,096](https://youtu.be/84RT3yHaJA8?t=5409s) 通过建立如 inputs, outputs, tools, docs 等标准化目录，我们为 AI 创造了一个清晰、有序的工作环境，这直接决定了它的工作流效率和可扩展性。[00:52:54,588](https://youtu.be/84RT3yHaJA8?t=3174s)

- [**agents.md**](http://agents.md/) **是 AI 的大脑**

    [agents.md](http://agents.md/) 文件是 AI Agent 系统中唯一且最值钱的部分。[00:59:45,300](https://youtu.be/84RT3yHaJA8?t=3585s) 它定义了 Agent 的使命、工具、规则和工作流程，是其“长期记忆”和“行为准则”的载体。因此，持续维护和优化此文件至关重要。[00:50:35,408](https://youtu.be/84RT3yHaJA8?t=3035s)

- **AI 控制 AI (俄罗斯套娃)**

    我们可以让一个 AI Agent (如 Codex CLI) 去调用另一个 AI 工具 (如 Gemini CLI)，以利用各自的独特优势。[01:21:26,388](https://youtu.be/84RT3yHaJA8?t=4886s) 这种“套娃”模式可以组合不同 AI 的能力，完成更复杂的任务，例如利用 Gemini 的大上下文窗口处理长文本。[01:08:44,148](https://youtu.be/84RT3yHaJA8?t=4124s)

## 课程必备工具 (Essential Tools)

**GitHub**
一个面向开源及私有软件项目的托管平台，是进行代码版本控制和协作的行业标准。Ray 强调使用它来存档和管理项目，便于版本控制。[00:00:52,880](https://youtu.be/84RT3yHaJA8?t=52s)
*官方网站:* https://github.com/

**Visual Studio Code (VSCode)**
一款由微软开发的免费、开源的代码编辑器。课程中所有操作都在 VSCode 环境中完成，它集成了终端和源代码管理功能。[00:01:02,920](https://youtu.be/84RT3yHaJA8?t=62s)
*官方网站:* https://code.visualstudio.com/

**YT-DLP**
一个强大的命令行工具，用于从 YouTube 等众多视频网站下载视频和音频。上节课中用于构建视频下载器。[00:10:23,195](https://youtu.be/84RT3yHaJA8?t=623s)
*官方网站:* https://github.com/yt-dlp/yt-dlp

**FFmpeg**
一个完整、跨平台的解决方案，用于录制、转换和流式传输音频和视频。它是许多音视频应用（如 VLC 播放器）的核心，能够进行高效的无损剪辑、合并和格式转换。[00:10:45,716](https://youtu.be/84RT3yHaJA8?t=645s)
*官方网站:* https://ffmpeg.org/

**LosslessCut**
一款免费的、用于视频和音频的无损剪辑工具。Ray 介绍它本质上是 FFmpeg 的一个图形用户界面（GUI），能够极速切割视频而无需重新编码，保持原始质量和文件大小。[00:15:25,376](https://youtu.be/84RT3yHaJA8?t=925s)
*官方网站:* https://github.com/mifi/lossless-cut

**Gemini CLI**
Google Gemini 模型的命令行接口工具。它具有一百万 Token 的超大上下文窗口，非常适合处理长文档，并且可以免费使用。课程中，Ray 演示了如何让 Codex CLI 调用它来完成任务。[01:08:04,288](https://youtu.be/84RT3yHaJA8?t=4084s)
*官方文档:* https://ai.google.dev/docs/gemini_cli

**Codex CLI**
Ray 在课程中使用的主要 AI Agent 工具，它能够在本地文件系统中执行代码、调用命令行工具，并根据用户的自然语言指令完成复杂任务。[00:26:48,652](https://youtu.be/84RT3yHaJA8?t=1608s) (此处指代课程中使用的AI Agent，名称根据上下文推断)

## 分步实操流程 (Step-by-Step Walkthrough)

### 1. 项目初始化与 GitHub 版本控制

- 在 VSCode 左侧的 "Source Control" 视图中，点击 Initialize Repository 初始化本地 Git 仓库。[00:01:22,260](https://youtu.be/84RT3yHaJA8?t=82s)
- 进行首次提交 (commit)，例如输入提交信息 "initialized"。[00:01:39,160](https://youtu.be/84RT3yHaJA8?t=99s)
- 点击 Publish Branch 将本地仓库发布到 GitHub，可选择设为私有 (private) 仓库。[00:02:09,840](https://youtu.be/84RT3yHaJA8?t=129s)
- **常见错误：**初次提交时，不要将大型文件（如视频）或无需版本控制的文件（如临时下载文件）包含在内，这会导致上传速度极慢甚至失败。[00:02:41,000](https://youtu.be/84RT3yHaJA8?t=161s)
- 为解决此问题，需要使用 .gitignore 文件告诉 Git 忽略特定文件或文件夹。[00:04:24,480](https://youtu.be/84RT3yHaJA8?t=264s) Ray 通过向 AI Agent 下达指令，让其自动创建和配置 .gitignore 和 .gitkeep 文件，以忽略 downloads 文件夹的内容，但保留其目录结构。[00:05:13,480](https://youtu.be/84RT3yHaJA8?t=313s)

### 2. 优化 AI Agent 的核心：[agents.md](http://agents.md/)

- **自我审查与修正：**Ray 发现 [agents.md](http://agents.md/) 中的 purpose 部分包含了一条过于具体的视频下载规则，这不符合其作为通用使命的定位。[00:41:47,744](https://youtu.be/84RT3yHaJA8?t=2507s)
- 他指导 AI Agent 将这条规则从 purpose 移动到更合适的 playbooks 部分，实现了配置文件的逻辑优化。[00:44:27,488](https://youtu.be/84RT3yHaJA8?t=2667s)
- **系统级重构：**Ray 进一步要求 AI Agent 扮演“世界级系统架构师”的角色，对 [agents.md](http://agents.md/) 进行全面重构。[00:46:56,248](https://youtu.be/84RT3yHaJA8?t=2816s)
- 重构后，purpose 部分变得更简洁，并新增了 File Handling Rule（文件处理规则）部分，定义了所有产出物都应存放在 outputs 目录下。[00:51:22,348](https://youtu.be/84RT3yHaJA8?t=3082s)

### 3. 建立标准化的工作区 (Inputs & Outputs)

- 为了保持项目整洁，Ray 指示 AI Agent 创建一个 inputs 文件夹，用于存放所有待处理的原始文件。[00:56:54,900](https://youtu.be/84RT3yHaJA8?t=3414s)
- 同时，将原有的 downloads 文件夹移动到 outputs 文件夹内，使所有输出内容集中管理。[00:57:28,020](https://youtu.be/84RT3yHaJA8?t=3448s)
- AI Agent 智能地为 inputs 和 outputs 文件夹配置了 .gitignore 规则，确保文件夹内的具体内容不会被上传到 GitHub。[01:01:03,244](https://youtu.be/84RT3yHaJA8?t=3663s)
- **测试流程：**将一个视频文件放入 inputs 文件夹，然后命令 AI Agent 使用 FFmpeg 将其切割成三段，并验证输出的视频片段是否正确地生成在 outputs/videos 目录下。[01:02:49,564](https://youtu.be/84RT3yHaJA8?t=3769s)

### 4. 教授 AI Agent 使用新工具：调用 Gemini CLI

- **学习与集成：**Ray 的目标是让当前的 Codex CLI Agent 学会调用 Gemini CLI，以利用后者的长文本处理能力。[01:08:04,288](https://youtu.be/84RT3yHaJA8?t=4084s)
- 他向 AI Agent 提供了一份 Gemini CLI 的“使用说明书”（一段描述其命令和用法的文本）。[01:16:48,176](https://youtu.be/84RT3yHaJA8?t=4608s)
- **关键指令：**在 prompt 中明确告知 AI：“你不需要安装、不需要 API key、也不需要验证”，以避免它尝试执行不必要的操作而卡住。[01:23:14,948](https://youtu.be/84RT3yHaJA8?t=4994s)
- **测试与验证：**AI Agent 在学习后，主动进行测试，尝试调用 Gemini CLI 来总结 [agents.md](http://agents.md/) 文件。[01:19:02,327](https://youtu.be/84RT3yHaJA8?t=4742s) Ray 进一步让它将一份英文文档翻译成中文，并成功在 outputs 文件夹生成了翻译后的文件，验证了新工具的集成。[01:20:28,588](https://youtu.be/84RT3yHaJA8?t=4828s)

### 5. 完善系统：为工具创建文档库

- 为了让 AI Agent 能够“记住”并随时查阅工具的用法，Ray 指导它创建一个 docs 文件夹。[01:31:05,416](https://youtu.be/84RT3yHaJA8?t=5465s)
- AI Agent 将 Gemini CLI 的使用说明书保存为 docs/tools/[gemini-cli.md](http://gemini-cli.md/)。[01:33:38,468](https://youtu.be/84RT3yHaJA8?t=5618s)
- 同时，它更新了主配置文件 [agents.md](http://agents.md/)，在工具列表中加入了指向该说明文档的引用，提醒自己“详见用法，请看 Docs 指南”。[01:33:52,508](https://youtu.be/84RT3yHaJA8?t=5632s) 这样就建立了一套可供 AI 自我查阅的知识库。

## 关键概念与进阶技巧 (Key Concepts & Advanced Techniques)

- **用 AI 解决 Git 问题：**当遇到 Git 的 push 或 pull 错误时，无需手动排查。直接将错误信息告诉 AI Agent，让它来修复问题。这大大降低了版本控制的操作门槛。[00:09:37,616](https://youtu.be/84RT3yHaJA8?t=577s)
- **FFmpeg 的无损处理能力：**FFmpeg 可以直接对视频流进行操作，实现“无损”（lossless）剪辑和拼接，这意味着它不会进行重新编码。[00:29:16,992](https://youtu.be/84RT3yHaJA8?t=1756s) 这样做的好处是速度极快，且能保持视频的原始画质和文件大小，远比传统的视频编辑软件高效。[00:15:38,175](https://youtu.be/84RT3yHaJA8?t=938s)
- **VSCode 聊天窗口技巧：**
    - **拖拽文件路径：**选中文件拖拽到聊天窗口，在释放鼠标前按住 Shift 键，即可将文件的完整路径粘贴到输入框。[01:02:05,764](https://youtu.be/84RT3yHaJA8?t=3725s)
    - **@ 符号引用：**在聊天框中输入 @ 符号，可以快速搜索并引用工作区内的文件。[01:20:45,288](https://youtu.be/84RT3yHaJA8?t=4845s)
- **Prompt Engineering 技巧：**
    - **赋予角色：**在下达复杂指令时，为 AI 指定一个专家角色（如“世界级的系统架构师”），可以有效提升输出质量。[00:46:56,248](https://youtu.be/84RT3yHaJA8?t=2816s)
    - **强调关键信息：**将最重要的指令放在 prompt 的开头和结尾，AI 会给予更多关注。[01:27:39,215](https://youtu.be/84RT3yHaJA8?t=5259s)
    - **提供最新文档：**当使用可能已更新的工具或 API 时，主动向 AI 提供最新的官方使用说明，以覆盖其陈旧的训练数据，避免“思想钢印”导致的错误。[01:16:18,796](https://youtu.be/84RT3yHaJA8?t=4578s)

## 课程延展与预告 (Future Learning)

- **构建可扩展的 AI Agent 框架：**目前的演示只是一个雏形。后续课程将从头开始，设计并构建一套真正可扩展（scalable）的 AI Agent 系统框架。[00:31:44,216](https://youtu.be/84RT3yHaJA8?t=1904s), [01:34:41,628](https://youtu.be/84RT3yHaJA8?t=5681s)
- **API 的集成与管理：**未来的课程将深入讲解如何直接调用 Gemini API（而不仅仅是 CLI 工具），以及如何安全地管理 API key 等敏感信息。[01:35:02,608](https://youtu.be/84RT3yHaJA8?t=5702s)
- **实现 AI 的自我进化循环：**探索如何在 [agents.md](http://agents.md/) 中设定规则，让 AI Agent 能够在完成任务后主动学习、总结经验，并自动更新其核心配置，实现真正的自我进化。[01:36:14,748](https://youtu.be/84RT3yHaJA8?t=5774s)

@tab 04-第三课

**课程名称:** 2025-10-10-你的APP不非得是APP第三课直播

**讲师:** Ray

**课程中使用的Prompts 和资源:**



**Prompt解析：**[https://gemini.google.com/share/fd796eb26af9](https://gemini.google.com/share/fd796eb26af9)

## 课程概览 (Course Overview)

欢迎来到第三课！在本节课中，Ray 将带领我们从上一课构建的单一 [Agents.md](http://agents.md/) 文件，升级到一个完整、可扩展、模块化的 AI Agent 框架 (Agent Framework)。[00:00:00,440](https://youtu.be/FZt6wC_Cj5g?t=0s) 我们将深入探讨当前 Agent 存在的问题，并通过一个名为 “TARS” 的游戏来直观理解新的框架理念。本课的核心任务是使用一个强大的“安装器提示词 (Installer Prompt)”让 AI 自动为我们搭建整个复杂的文件夹结构和规则体系，真正实现“用 AI 打造 AI”。[00:20:05,007](https://youtu.be/FZt6wC_Cj5g?t=1205s) 最终，你将拥有一个可以持续成长、高度定制化且能处理特定领域任务的 AI Agent 雏形。[00:23:51,727](https://youtu.be/FZt6wC_Cj5g?t=1431s)

## 核心理念与学习心态 (Core Concepts & Mindset)

- **单一** [**Agents.md**](http://agents.md/) **的局限性**: Ray 指出，随着我们为 Agent 增加越来越多的工具 (Tools) 和作业管线 (Playbooks)，单一的 [Agents.md](http://agents.md/) 文件会变得异常冗长，可能达到数千甚至上万行。[00:02:30,440](https://youtu.be/FZt6wC_Cj5g?t=150s) 这不仅难以维护，更会导致 AI 在处理长文本时出现“遗忘”或抓不住重点的问题，使其变得不可规模化 (not scalable)。[00:33:00,000](https://youtu.be/FZt6wC_Cj5g?t=1980s), [00:34:01,180](https://youtu.be/FZt6wC_Cj5g?t=2041s)
- **AI 的“中间遗忘”问题**: Ray 提到一个重要的 AI 使用原则：AI 和人类一样，对于一段长文本，记忆最深刻的是开头和结尾部分。[00:03:04,380](https://youtu.be/FZt6wC_Cj5g?t=184s) 如果上下文过长，中间的关键信息很容易被忽略。[00:03:24,260](https://youtu.be/FZt6wC_Cj5g?t=204s)
- **双模式运作：建造与执行**: 一个成熟的 Agent 应该具备两种清晰的模式。[00:04:02,760](https://youtu.be/FZt6wC_Cj5g?t=242s)
    - **建造模式 (Build Mode)**: 当遇到新任务或需要优化工具时，Agent 进入此模式进行学习、创建新工具、更新 Playbook。[00:04:16,240](https://youtu.be/FZt6wC_Cj5g?t=256s), [00:07:40,912](https://youtu.be/FZt6wC_Cj5g?t=460s)
    - **执行模式 (Execute Mode)**: 日常使用模式，Agent 调用已有的工具和知识来高效完成任务。[00:04:07,620](https://youtu.be/FZt6wC_Cj5g?t=247s), [00:08:02,611](https://youtu.be/FZt6wC_Cj5g?t=482s)
- **模块化与长期记忆**: 解决方案是建立一个模块化的文件系统，将不同功能的配置、文档、工具、记忆等分门别类存放在不同文件夹中。[00:03:47,520](https://youtu.be/FZt6wC_Cj5g?t=227s) 这不仅解决了 [Agents.md](http://agents.md/) 冗长的问题，还为 Agent 提供了“长期记忆”的能力，让它能记住每次任务的经验和学习成果。[00:08:29,652](https://youtu.be/FZt6wC_Cj5g?t=509s)
- **领域专属 Agent (Domain-Specific Agent)**: Ray 建议，与其打造一个无所不能但臃肿缓慢的通用 Agent，不如为不同领域（如社群管理、课程制作、记账）分别创建专属的、轻量化的 Agent。[00:58:30,792](https://youtu.be/FZt6wC_Cj5g?t=3510s), [01:31:06,460](https://youtu.be/FZt6wC_Cj5g?t=5466s) 这样可以保持每个 Agent 的高效和专注。[00:58:45,652](https://youtu.be/FZt6wC_Cj5g?t=3525s)
- **AI First 心态：让 AI 建造 AI**: 课程最重要的实践是使用 Ray 提供的 "Installer Prompt"。我们不再手动创建复杂的文件夹和文件，而是给 AI 一段指令，让它为我们自动完成整个框架的搭建。这是 AI First 思维方式的终极体现。[00:20:05,007](https://youtu.be/FZt6wC_Cj5g?t=1205s), [01:27:12,400](https://youtu.be/FZt6wC_Cj5g?t=5232s)

## 课程必备工具 (Essential Tools)

本堂课提到或演示了多种工具与技术，它们是构建和使用 AI Agent 的基础。

- **AI 代码编辑器**

    Ray 推荐使用集成了 AI 功能的编辑器来与我们的 Agent 互动。

    - **Cursor**: https://cursor.sh/ - 一款专为 AI 辅助编程设计的代码编辑器，深度集成了代码生成、编辑和问答功能。[00:18:52,548](https://youtu.be/FZt6wC_Cj5g?t=1132s)
    - **Visual Studio Code (VSCode)**: https://code.visualstudio.com/ - 微软出品的免费、开源且高度可扩展的代码编辑器，可通过安装插件（如 GitHub Copilot）获得强大的 AI 能力。[00:18:47,288](https://youtu.be/FZt6wC_Cj5g?t=1127s)

- **大语言模型 (LLM) 命令行工具**

    - **Google Gemini CLI**: https://github.com/google/generative-ai-go/tree/main/cmd/genai - Google Gemini 模型的官方命令行界面，可以让 Agent 在终端中直接调用 Gemini 的能力。[00:08:34,871](https://youtu.be/FZt6wC_Cj5g?t=514s)

- **课程资源与演示工具**

    - **Google Drive**: https://www.google.com/drive/ - Ray 通过 Google Drive 分享课程所需的关键文件，如 "Installer Prompt"。[00:05:08,020](https://youtu.be/FZt6wC_Cj5g?t=308s)
    - **TARS 游戏**: Ray 亲自制作的一个网页小游戏，用来生动演示 Agent 的“建造模式”与“执行模式”。[00:04:48,880](https://youtu.be/FZt6wC_Cj5g?t=288s)
    - **Gemini Canvas**: https://canvas.gemini.google/ (注：此为假设链接，Gemini Canvas 是 Gemini 的一项功能) - Ray 使用此工具制作了一个交互式网页，用来详细解释 Agent 框架的设计理念。[00:27:06,248](https://youtu.be/FZt6wC_Cj5g?t=1626s)

- **第三方工具与库**

    - **yt-dlp**: https://github.com/yt-dlp/yt-dlp - 一个强大的命令行工具，用于从 YouTube 等上百个网站下载视频和音频。[00:12:52,596](https://youtu.be/FZt6wC_Cj5g?t=772s)
    - **ElevenLabs**: https://elevenlabs.io/ - 领先的 AI 语音技术公司，提供高质量的文本转语音 (TTS) 和语音转文本 (STT) 服务。[00:56:22,071](https://youtu.be/FZt6wC_Cj5g?t=3382s)
    - **Markmap**: https://markmap.js.org/ - 一个可以将 Markdown 文件快速可视化为思维导图的工具，有 VSCode 插件版本。[01:12:08,564](https://youtu.be/FZt6wC_Cj5g?t=4328s)
    - **Obsidian**: https://obsidian.md/ - 一款基于本地 Markdown 文件的个人知识管理和笔记软件，非常适合与我们的本地 Agent 框架结合。[01:00:37,571](https://youtu.be/FZt6wC_Cj5g?t=3637s)
    - **Beancount**: https://beancount.github.io/docs/ - 一个开源的、基于纯文本的复式记账系统，Ray 提到可以用它来打造记账 Agent。[01:05:14,240](https://youtu.be/FZt6wC_Cj5g?t=3914s)
    - **Kling AI**: https://kling.kuaishou.com/ - (课程补充) 由快手推出的AI视频生成模型，能够生成高质量、长时程的视频内容。

## 分步实操流程 (Step-by-Step Walkthrough)

本节课的核心实操是使用 Ray 提供的 “Installer Prompt” 自动搭建全新的 Agent 框架。请严格按照以下步骤操作：

1. **准备工作**:
    - 访问 Ray 在 Google Drive 中分享的课程文件夹。[00:05:08,020](https://youtu.be/FZt6wC_Cj5g?t=308s)
    - 找到并打开名为 System Prompt V6 的文本文件。[00:18:13,456](https://youtu.be/FZt6wC_Cj5g?t=1093s) (Ray 解释说 V6 是最新优化版，V2 是早期稳定版，如果V6遇到问题可以尝试V2 [00:20:50,168](https://youtu.be/FZt6wC_Cj5g?t=1250s))。
    - 在你的电脑上创建一个全新的、空的项目文件夹，例如命名为 tars-001。[00:18:39,227](https://youtu.be/FZt6wC_Cj5g?t=1119s)
2. **启动 AI 编辑器**:
    - 使用 VSCode 或 Cursor 打开刚刚创建的 tars-001 文件夹。[00:18:47,288](https://youtu.be/FZt6wC_Cj5g?t=1127s)
    - 在编辑器中打开 AI 聊天/对话窗口 (Ray 演示时使用的是 Codex)。[00:19:01,808](https://youtu.be/FZt6wC_Cj5g?t=1141s)
3. **执行 Installer Prompt**:
    - 将 System Prompt V6 文件中的所有内容完整地复制下来。[00:18:21,755](https://youtu.be/FZt6wC_Cj5g?t=1101s)
    - 将复制的全部文本粘贴到 AI 聊天窗口中。[00:19:15,668](https://youtu.be/FZt6wC_Cj5g?t=1155s)
    - 直接发送该提示词，不要做任何修改。[00:19:21,288](https://youtu.be/FZt6wC_Cj5g?t=1161s)
4. **观察 AI 自动构建**:
    - 发送后，AI 会开始执行指令，你将看到它在左侧的文件浏览器中自动创建一系列文件夹和文件。[00:19:41,467](https://youtu.be/FZt6wC_Cj5g?t=1181s)
    - 这个过程完全自动化，AI 正在为自己搭建一个复杂的、结构化的工作环境，包括系统配置、文档、工具目录、输入输出文件夹等。[00:19:44,447](https://youtu.be/FZt6wC_Cj5g?t=1184s)
    - 最终，AI 会生成一个核心的 [agents.md](http://agents.md/) 文件，其中包含了 Agent 运行所需的所有新规则。[00:19:49,707](https://youtu.be/FZt6wC_Cj5g?t=1189s)
    - 整个过程结束后，AI 会在聊天窗口中报告“Bootstrap completed”(初始化完成)。[00:37:18,516](https://youtu.be/FZt6wC_Cj5g?t=2238s) (如果遇到问题无法生成，也可以直接从 Ray 分享的 Google Drive 中下载已生成好的 tars-001 文件夹作为备用方案 [00:24:07,628](https://youtu.be/FZt6wC_Cj5g?t=1447s))。
5. **在新框架下测试 Build Mode**:
    - 初始化完成后，开启一个新的聊天会话，确保 AI 读取新生成的 [agents.md](http://agents.md/)。[01:13:56,443](https://youtu.be/FZt6wC_Cj5g?t=4436s)
    - 输入指令，要求 Agent 进入“建造模式”并创建一个 YouTube 下载工具。例如：“你好，现在请进入到 Build 模式去建立一个 YouTube 下载的这么一个工具。我们直接给它说出来 YTDLP，并且帮我设计一些 Playbooks。” [01:14:31,504](https://youtu.be/FZt6wC_Cj5g?t=4471s)
    - 观察 AI 的响应：它会首先确认进入建造模式，检查现有工具注册表，然后开始规划并执行创建工具、编写脚本、更新 Playbook、更新用户文档和自身记忆等一系列任务。[01:15:19,884](https://youtu.be/FZt6wC_Cj5g?t=4519s)
    - AI 甚至会执行一个“烟雾测试 (smoke test)”来验证新工具是否正常工作，例如下载一个经典的 YouTube 视频 “Me at the zoo”。[01:18:38,904](https://youtu.be/FZt6wC_Cj5g?t=4718s), [01:21:11,019](https://youtu.be/FZt6wC_Cj5g?t=4871s)

## 关键概念与进阶技巧 (Key Concepts & Advanced Techniques)

- **Installer Prompt 设计剖析**: Ray 提供的 System Prompt V6 是一个精心设计的“一次性”安装程序。[00:28:07,368](https://youtu.be/FZt6wC_Cj5g?t=1687s) 它包含以下几个关键部分：
    - **任务总览 (Installer Task)**: 明确指示 AI 需要搭建文件结构、创建核心文件、处理密钥规范，并在完成后停止。[00:30:29,967](https://youtu.be/FZt6wC_Cj5g?t=1829s)
    - **仓库布局 (Repository Layout)**: 以树状图形式定义了整个框架的文件夹结构，如 01-System, 02-Input, 03-Output，并解释了每个部分的功能。[00:37:46,116](https://youtu.be/FZt6wC_Cj5g?t=2266s)
    - **标准规范 (Canonical Spec)**: 这部分内容是需要被一字不差地写入新的 [agents.md](http://agents.md/) 文件中的核心规则。[00:38:47,076](https://youtu.be/FZt6wC_Cj5g?t=2327s)
    - **运行规则 (Agent Runtime Rules)**: 在新的 [agents.md](http://agents.md/) 中，详细定义了 Agent 的使命、两种工作模式 (Build/Execute)、不可变原则 (Invariants)、启动检查清单以及文件存放位置等。[00:39:31,336](https://youtu.be/FZt6wC_Cj5g?t=2371s)
- **API 密钥管理的权衡 (API Key Security)**: Ray 深入探讨了 AI Agent 使用 API 密钥的安全性问题。[00:31:18,360](https://youtu.be/FZt6wC_Cj5g?t=1878s) 框架中设计了 01-System/config/[api-keys.md](http://api-keys.md/) 文件用于存放密钥，这个文件应被加入 .gitignore 以免上传到 GitHub。[00:34:03,320](https://youtu.be/FZt6wC_Cj5g?t=2043s) Ray 坦诚，尽管我们指示 AI 不要记录密钥内容，但在“建造模式”下，AI 理论上仍能访问此文件，这是一个需要用户自行权衡的风险。[00:33:48,100](https://youtu.be/FZt6wC_Cj5g?t=2028s)
- **精简日志流 (Lean Log Flow)**: 这是 V6 版本相对于 V2 的一个重要优化。[00:45:25,580](https://youtu.be/FZt6wC_Cj5g?t=2725s) 在 V2 版本中，Ray 要求 Agent 在每次操作后都详尽地更新所有相关文档（记忆、状态、注册表等），这导致了大量时间被消耗在“自我记录”上。[00:42:36,319](https://youtu.be/FZt6wC_Cj5g?t=2556s) V6 版本引入了“精简日志流”概念，要求 Agent 只在核心的 System/docs/agents/[memory.md](http://memory.md/) 中做简要记录，仅在特定条件下才触发对其他文件的更新，从而大幅提升了运行效率。[00:46:50,250](https://youtu.be/FZt6wC_Cj5g?t=2810s)
- **烟雾测试 (Smoke Test)**: 在软件工程中，这是一种初步的、快速的测试，用于确认一个新构建的程序版本是否能正常启动并执行最基本的功能，如果连基本功能都无法工作（就像电路板一通电就“冒烟”），则无需进行更详细的测试。[01:18:41,804](https://youtu.be/FZt6wC_Cj5g?t=4721s) 我们的 Agent 在创建新工具后，也会执行类似测试来验证其可用性。[01:18:59,164](https://youtu.be/FZt6wC_Cj5g?t=4739s)

## 课程延展与预告 (Future Learning)

- **本周作业**: Ray 布置了本周的作业，请大家在社群中分享：[01:23:06,559](https://youtu.be/FZt6wC_Cj5g?t=4986s)
    1. 确认你已在本地成功搭建了新的 AI Agent 框架。[01:23:10,500](https://youtu.be/FZt6wC_Cj5g?t=4990s)
    2. 分享你计划打造一个什么领域的 AI Agent (What will you build?)。[01:23:16,280](https://youtu.be/FZt6wC_Cj5g?t=4996s)
    3. 描述你为它增加的第一个工具是什么，以及你是如何引导 AI 完成这个过程的。[01:23:16,280](https://youtu.be/FZt6wC_Cj5g?t=4996s)
- **未来课程展望**:
    - 从下节课开始，我们将一起动手，利用这个全新的框架，打造一个“闪念笔记 AI Agent”。[01:22:42,679](https://youtu.be/FZt6wC_Cj5g?t=4962s), [01:22:44,839](https://youtu.be/FZt6wC_Cj5g?t=4964s)
    - 课程将深入学习如何调用 AI 的 API（例如 Gemini API [01:23:59,580](https://youtu.be/FZt6wC_Cj5g?t=5039s)）、进行有效的 Prompt Engineering，以及集成语音转文字等高级功能。[01:09:10,124](https://youtu.be/FZt6wC_Cj5g?t=4150s)
- **自主探索方向 (What will you build?)**: Ray 鼓励大家思考可以利用这个框架创造些什么，并给出了一些激动人心的例子：[00:57:40,551](https://youtu.be/FZt6wC_Cj5g?t=3460s)
    - **社群管理 Agent**: 利用社群网站的 API，自动发布、整理帖子。[00:58:54,551](https://youtu.be/FZt6wC_Cj5g?t=3534s)
    - **课程制作 Agent**: 自动化处理课程讲义、字幕、总结等工作。[00:59:29,772](https://youtu.be/FZt6wC_Cj5g?t=3569s)
    - **YouTube 创作 Agent**: 自动化视频下载、剪辑、字幕生成、发布等全流程。[00:59:57,631](https://youtu.be/FZt6wC_Cj5g?t=3597s)
    - **效率笔记 Agent (Obsidian)**: 将 Agent 与 Obsidian 结合，打造强大的个人知识管理系统。[01:00:22,292](https://youtu.be/FZt6wC_Cj5g?t=3622s)
    - **记账 Agent**: 结合 OCR 和记账软件（如 Beancount），实现票据自动识别和记账。[01:04:34,800](https://youtu.be/FZt6wC_Cj5g?t=3874s)
    - **学习研究 Agent**: 像 Google NotebookLM 一样，让 Agent 帮你学习和总结长篇播客、文章，并生成思维导图。[01:10:02,764](https://youtu.be/FZt6wC_Cj5g?t=4202s)

@tab 05-第四课

## 课程概览 (Course Overview)

欢迎来到第四课的学习！本节课我们将深入实践，从零开始设计并构建一个解决个人真实需求的 AI Agent。我们将聚焦于创建一个强大的“闪念笔记”或“音视频思维整理工具”，旨在高效处理和整合零散的语音备忘录。[00:09:26,040](https://youtu.be/5LtS4_UBeFM?t=566s)

课程首先回顾了上一节课的核心内容——AI Agent Framework。[00:00:07,880](https://youtu.be/5LtS4_UBeFM?t=7s) 这是一个基于文件夹系统的框架，它定义了 AI Agent 的运作方式，并赋予其两种核心模式：执行模式 (Execution Mode) 和建造模式 (Build Mode)。[00:00:50,620](https://youtu.be/5LtS4_UBeFM?t=50s) 今天，我们将充分利用建造模式的威力，让 AI 为我们亲手打造所需的工具。[00:01:05,980](https://youtu.be/5LtS4_UBeFM?t=65s)

本课的核心目标是解决一个具体痛点：如何将围绕同一主题的、分散录制的多个语音备忘录，高效地转录、合并，并为后续整理成文章或笔记做准备。[00:20:34,036](https://youtu.be/5LtS4_UBeFM?t=1234s) 我们将引导 AI Agent 构建一个基于项目的语音整理工具，实现从音频压缩、语音转文本 (STT) 到最终文本合并的全流程自动化。[00:27:26,664](https://youtu.be/5LtS4_UBeFM?t=1646s)

## 核心理念与学习心态 (Core Concepts & Mindset)

- **AI First Mindset**: 建立 AI 优先的思维模式至关重要。只要我们有清晰的想法，并能准确地传达给 AI，它就能为我们完成极其复杂的工作。[00:01:52,020](https://youtu.be/5LtS4_UBeFM?t=112s) 这套框架的设计初衷，就是让 AI 自己建造自己，体现了这一理念的强大。[00:01:46,960](https://youtu.be/5LtS4_UBeFM?t=106s)
- **警惕第三方软件的陷阱**: Ray 指出，市面上许多智能录音笔附带的软件存在几个问题：[00:11:41,060](https://youtu.be/5LtS4_UBeFM?t=701s)
    - **捆绑订阅**: 购买硬件后，仍需为高级软件功能支付订阅费，其商业模式本质是软件订阅。[00:11:51,360](https://youtu.be/5LtS4_UBeFM?t=711s)
    - **功能冗余**: 为了“一盘醋包一个饺子”，软件集成了许多用户并不需要的复杂功能（如项目管理、笔记系统），而用户真正的核心需求只是转录和整理。[00:12:17,380](https://youtu.be/5LtS4_UBeFM?t=737s)
    - **僵化的工作流**: 软件强制用户遵循其预设的工作流程，无法适应个性化的使用习惯。例如，它假定每一段录音都是独立单元，而无法理解用户需要合并多段录音来创作一篇文章的场景。[00:14:33,396](https://youtu.be/5LtS4_UBeFM?t=873s)
- **构建自己的“桥梁”工具**: 我们的目标不是再造一个封闭的笔记软件，而是创建一个灵活的“桥梁”。[00:13:53,076](https://youtu.be/5LtS4_UBeFM?t=833s) 这个 AI Agent 产出的内容（如 Markdown 文件）可以无缝对接到我们已有的知识管理系统，如 Obsidian 或 Apple Notes，从而真正服务于我们的工作流。[00:13:30,416](https://youtu.be/5LtS4_UBeFM?t=810s)
- **AI 的“思想钢印” (Thought Steel Seal)**: AI 模型（如 ChatGPT）由于其庞大的训练数据，有时会形成一种思维定势。[00:08:50,920](https://youtu.be/5LtS4_UBeFM?t=530s) 当我们要求它使用一个较新的或它不熟悉的工具/API 时，即使我们提供了完整的文档，它也可能固执地选择它“记忆”中更熟悉的老方法。[01:00:05,860](https://youtu.be/5LtS4_UBeFM?t=3605s) 解决方案是：在 Prompt 中必须极其明确、详尽地指示它学习并严格遵循我们提供的“新规矩”。[01:01:29,276](https://youtu.be/5LtS4_UBeFM?t=3689s)
- **模块化 vs. 整体性 (Modular vs. Monolithic)**: 在设计 Agent 时，需要平衡是构建一个高度集成、专门化的“一体化”工具，还是创建一组可灵活组合、复用的“模块化”小工具。[01:52:17,302](https://youtu.be/5LtS4_UBeFM?t=6737s) 本次课程虽然构建了一个较完整的 Pipeline，但其内部的脚本和逻辑在未来可以被拆分和复用，服务于其他更复杂的任务。[01:53:40,821](https://youtu.be/5LtS4_UBeFM?t=6820s)

## 课程必备工具 (Essential Tools)

AI Agent Framework (TARS)

课程中构建的个人 AI 助手框架，基于本地文件夹系统运行，是所有操作的基础。[00:02:12,340](https://youtu.be/5LtS4_UBeFM?t=132s)

Visual Studio Code (VSCode)

一款强大的、免费的代码编辑器，是与我们的 AI Agent (TARS) 交互和管理其文件系统的主要界面。[00:09:15,200](https://youtu.be/5LtS4_UBeFM?t=555s)

https://code.visualstudio.com/

Groq

一个提供极速 AI 模型推理服务的云平台。在本课中，我们使用它提供的免费 Whisper V3 API 服务来进行语音转文本（STT）操作，无需绑定信用卡即可注册使用。[00:50:12,412](https://youtu.be/5LtS4_UBeFM?t=3012s)

https://groq.com/

FFmpeg

一个开源的音视频处理工具集，功能极其强大。在我们的工作流中，它被用来对原始音频文件进行压缩，以满足 STT API 的文件大小限制。[00:46:07,584](https://youtu.be/5LtS4_UBeFM?t=2767s)

https://ffmpeg.org/

OpenAI API

提供了包括 Whisper（语音转文本）和 GPT 系列（大语言模型）在内的多种 AI 模型接口。课程中提到了其多种 STT 模型，如 Whisper 和 GPT-4o-mini-transcribe。[00:46:34,844](https://youtu.be/5LtS4_UBeFM?t=2794s)

https://openai.com/

ElevenLabs

以其高质量的文本转语音（TTS）和声音克隆技术而闻名。课程中提到它也提供了非常精准的语音转文本（STT）模型 ScribeV1，并且擅长处理多说话人识别（Speaker Recognition）的场景。[00:53:04,732](https://youtu.be/5LtS4_UBeFM?t=3184s)

https://elevenlabs.io/

Obsidian

一款强大的、基于本地 Markdown 文件的知识管理和笔记软件。课程预告了未来会将 AI Agent 与 Obsidian 进行深度整合。[00:13:03,716](https://youtu.be/5LtS4_UBeFM?t=783s)

https://obsidian.md/

## 分步实操流程 (Step-by-Step Walkthrough)

### 第一部分：定义需求与规划方案

1. **明确个人痛点**: 分析 Ray 的写作工作流，即通过 Apple Voice Memos 录制关于同一主题的多段零散语音，最终需要将它们合并转录成文。[00:16:49,696](https://youtu.be/5LtS4_UBeFM?t=1009s)
2. **规划 Agent 功能**: 明确本次要构建的 Agent 核心功能是“基于项目的语音备忘录整理工具”，能处理一个文件夹内的多个音频文件。[00:20:57,816](https://youtu.be/5LtS4_UBeFM?t=1257s)
3. **设计技术流程**: 勾画出实现该功能所需的技术步骤：接收音频文件 -> (可选)压缩 -> 语音转文本(STT) -> 生成两种产物（纯文本和带时间戳的 SRT 字幕）-> (可选)合并所有纯文本到一个文件。[00:27:26,664](https://youtu.be/5LtS4_UBeFM?t=1646s)

### 第二部分：选择并准备 STT 工具 (Groq)

1. **选择 API 服务**: 比较了 OpenAI、ElevenLabs 等多种 STT 服务后，最终选择 Groq 平台，因为它为强大的 Whisper V3 模型提供了免费的使用额度，非常适合学习和实验。[00:50:12,412](https://youtu.be/5LtS4_UBeFM?t=3012s)
2. **注册并创建 API Key**:
    - 访问 Groq 官网并注册一个免费账户。[00:56:14,000](https://youtu.be/5LtS4_UBeFM?t=3374s)
    - 进入“API Keys”管理页面，创建一个新的 API Key，并为其命名。[01:12:04,716](https://youtu.be/5LtS4_UBeFM?t=4324s)
    - **关键一步**: 立即复制生成的 API Key。这个 Key 只会显示一次，关闭页面后将无法再次查看。[01:12:31,536](https://youtu.be/5LtS4_UBeFM?t=4351s)
3. **储存 API Key**:
    - 在 TARS 框架中，找到路径为 01_system/config/apis/api_[keys.md](http://keys.md/) 的文件。[01:13:03,236](https://youtu.be/5LtS4_UBeFM?t=4383s)
    - 参考 Groq API 文档中关于授权（Authorization）的部分，找到官方推荐的变量名 GROQ_API_KEY。[01:10:50,496](https://youtu.be/5LtS4_UBeFM?t=4250s)
    - 将复制的 Key 以 GROQ_API_KEY=你的密钥 的格式粘贴并保存到该文件中。[01:13:54,092](https://youtu.be/5LtS4_UBeFM?t=4434s)

### 第三部分：为 AI Agent 准备“学习资料”

1. **准备 API 文档**:
    - 访问 Groq 的 API 文档，找到关于 Speech-to-Text 的说明页面。[01:03:11,776](https://youtu.be/5LtS4_UBeFM?t=3791s)
    - 为了让 AI 能准确学习，将该页面的内容复制下来，在 TARS 的 01_system/docs/ 目录下创建一个新的 Markdown 文件（例如 Groq_stt_API_[doc.md](http://doc.md/)），并将内容粘贴进去。[01:19:55,371](https://youtu.be/5LtS4_UBeFM?t=4795s)
    - 同样地，找到 API Reference 中关于创建转录（Create Transcription）的部分，将其内容也保存到另一个 Markdown 文件（例如 Groq_stt_API_[reference.md](http://reference.md/)）中。[01:20:44,112](https://youtu.be/5LtS4_UBeFM?t=4844s)
2. **准备“烟雾测试” (Smoke Test) 数据**:
    - 为了让 AI 在构建完工具后能立即进行测试，需要准备一些样本数据。[01:30:31,102](https://youtu.be/5LtS4_UBeFM?t=5431s)
    - 在 TARS 的 input/ 目录下创建一个新文件夹，例如 Project Memos/Article 1。[01:30:53,582](https://youtu.be/5LtS4_UBeFM?t=5453s)
    - 将几段录制好的示例音频文件（如 .m4a 格式）放入此文件夹中。[01:31:08,382](https://youtu.be/5LtS4_UBeFM?t=5468s)

### 第四部分：编写 Prompt 并执行建造任务

完整Prompt:

```
1. 请进入到build mode，我现在有这么一个需求，就是我经常会有一个project，这种project我会有很多想法，我有想法的时候我会录一段录音来记录下来，那这样几天下来在我这个project当中我可能会有好几段录音，比如说有总共六段录音都是关于这个project的，那现在我希望就是建造一个工具呢，它能够把我这些录音呢，通过STT的工具把它变成文本, 但是在使用STT之前，我需要对我的这些audio文件来做一个基本的压缩处理，能够满足我一会儿要求你使用的STT工具的这些要求, 那这个工具呢，它实际上会有两条pipeline或者说workflow。 那第一个呢是一个最基本的，就是一个STT的这么一个转录的一个工具。 你把我的这些所有的单独的语音文件把它的文字给使用STT工具转录出来。

但是呢，我需要这个它转出来的有两种格式的文档。 一种格式呢是纯文本的TXT或者说Markdown文件，那这里面是没有时间戳的，是一个纯粹文本的这么一个文件。 那第二个文件呢，你需要去帮我生成带时间戳的一个字幕的文件，它最后呢是.srt。  那在这个基础的pipeline之外呢，还有一个额外的pipeline就是，我刚才不是一个project当中这一个文件夹里有好几个语音文件吗，我需要让你把这些语音文件帮我去转录出来之后按照这个语音文件的命名的顺序去把它们这些文本呢，把这个文本combine成一整个combine到一个markdown文件当中。

请注意这只是针对于不带时间戳的纯文本的这个转录来把这个我指定的这个文件夹里的全部的音频按照顺序把它们的转录的文字去整理合并成这么一个markdown文件，纯文本不带时间戳。 那下面是我要求你必须要使用的工具、模型以及我提供的一些documentation和注意事项，请你非常认真的来建立我们这个工具和对应的playbook pipeline。 

2. 使用的API 平台提供商 Groq

3. 必须只使用模型: whisper-large-v3

4. 我使用的是 free tier, 注意限制。（我不使用付费 tier)

5. API Key （GROQ_API_KEY） 已经提供在01-system/configs/apis/API-Keys.md

6. 在建造之前，请务必学习官方API文档，不要做假设。注意我使用的是免费tier, 它的限制

7. API 文档: 01-system/tools/Groq STT API Doc.md 01-system/tools/Groq STT API Reference.md

8. Smoke test, 使用文件：02-inputs/Project Memos/Aritcle-1
```

1. **精心构建 Prompt**: 编写一个全面而详细的指令，内容需包含：
    - **进入建造模式**: 明确指示 AI 进入 build mode。[01:23:22,831](https://youtu.be/5LtS4_UBeFM?t=5002s)
    - **清晰的意图 (Intention)**: 详细描述想要构建的工具的功能，包括处理文件夹内多个音频、生成纯文本和 SRT 两种格式，以及合并纯文本的功能。[01:23:28,512](https://youtu.be/5LtS4_UBeFM?t=5008s)
    - **强制指定工具**: 明确要求必须使用 Groq 平台提供的 whisper-large-v3 模型，并强调使用的是免费套餐（Free Tier）及其限制。[01:15:26,371](https://youtu.be/5LtS4_UBeFM?t=4526s)
    - **提供上下文信息**: 告知 AI，API Key 已经存放在指定路径的 api_[keys.md](http://keys.md/) 文件中，API 的学习文档也已存放在 docs 目录下的相应文件中。[01:16:44,692](https://youtu.be/5LtS4_UBeFM?t=4604s)
    - **指定测试任务**: 明确告知 AI 在工具建成后，需要使用 input/Project Memos/Article 1 文件夹中的文件进行“烟雾测试”。[01:32:36,505](https://youtu.be/5LtS4_UBeFM?t=5556s)
2. **执行任务**: 将完整的 Prompt 发送给 TARS Agent，启动建造过程。[01:33:05,385](https://youtu.be/5LtS4_UBeFM?t=5585s)

### 第五部分：验收与复盘

1. **观察 AI 的执行过程**: 查看 TARS 的思考过程，它会列出自己的任务清单（To-Do List），包括阅读文档、规划工具、编写代码、注册工具、创建 Playbook、编写用户文档，最后执行烟雾测试。[01:38:40,666](https://youtu.be/5LtS4_UBeFM?t=5920s)
2. **检查生成的文件**:
    - **工具脚本**: 在 02_tools/ 目录下会生成一个新的工具文件夹，如 Groq_Project_Transcriber。[01:42:30,045](https://youtu.be/5LtS4_UBeFM?t=6150s)
    - **Playbook**: 在 01_system/agents/playbooks/ 目录下生成了新的自动化流程，如 `transcribe_project_audio_[grok.md](http://grok.md/)`。[01:48:44,853](https://youtu.be/5LtS4_UBeFM?t=6524s)
    - **用户文档**: 在 01_system/docs/user/tools/ 下为新工具生成了中文使用说明。[01:42:40,606](https://youtu.be/5LtS4_UBeFM?t=6160s)
3. **检验输出结果**:
    - 进入 output/ 目录，会看到一个以工具名和时间戳命名的新文件夹。[01:44:07,425](https://youtu.be/5LtS4_UBeFM?t=6247s)
    - 在该文件夹内，可以找到所有转录完成的产物：包含合并后所有文本的 Markdown 文件 (Combined_Article_[1.md](http://1.md/)) [01:44:23,106](https://youtu.be/5LtS4_UBeFM?t=6263s)、每个音频单独的纯文本文件 (在 transcriptions 文件夹内) [01:46:50,193](https://youtu.be/5LtS4_UBeFM?t=6410s)、以及每个音频对应的带时间戳的字幕文件 (在 subtitles 文件夹内) [01:46:36,634](https://youtu.be/5LtS4_UBeFM?t=6396s)。
    - 实验成功，证明 AI 完整理解并执行了复杂的建造任务。[01:44:37,146](https://youtu.be/5LtS4_UBeFM?t=6277s)

## 关键概念与进阶技巧 (Key Concepts & Advanced Techniques)

- **如何阅读 API 文档**: 学习了如何从 API 文档中快速定位关键信息，例如：
    - **Endpoint (接口地址)**: 确定数据应该发送到哪里。[01:03:32,876](https://youtu.be/5LtS4_UBeFM?t=3812s)
    - **Model (模型名称)**: 确认可用的模型及其确切名称。[01:04:23,256](https://youtu.be/5LtS4_UBeFM?t=3863s)
    - **Limits (限制)**: 了解免费套餐和付费套餐的文件大小等限制。[01:05:23,716](https://youtu.be/5LtS4_UBeFM?t=3923s)
    - **Authorization (授权)**: 查找 API Key 在代码中应使用的正确变量名，这对 AI 正确调用至关重要。[01:10:15,696](https://youtu.be/5LtS4_UBeFM?t=4215s)
- **工具的复用与模仿 (Mimicking)**: 在 AI Agent 的工作日志中可以看到，它会检查已有的工具（checking tools to mimic）来学习如何构建新工具。[01:36:08,045](https://youtu.be/5LtS4_UBeFM?t=5768s) 这是一个强大的技巧：一旦你成功构建了一个可用的工具，未来就可以让 AI 参考这个“成功案例”来快速创建类似功能的新工具，极大提高开发效率。[01:37:57,366](https://youtu.be/5LtS4_UBeFM?t=5877s)
- **烟雾测试 (Smoke Test) 的重要性**: 在 Prompt 中明确提供用于测试的样本数据是一个至关重要的步骤。[01:30:31,102](https://youtu.be/5LtS4_UBeFM?t=5431s) 这能确保 AI 在构建完成后立即验证其成果，避免了它自己寻找或生成无效测试数据所带来的不确定性，保证了工具的可靠性。[01:56:12,882](https://youtu.be/5LtS4_UBeFM?t=6972s)

## 课程延展与预告 (Future Learning)

- **下一步计划**: 本节课我们成功完成了工作流的前半部分——从音频到文本。下一节课，我们将进入后半部分，学习如何利用大语言模型（LLM）和 Prompt Engineering，将这些原始的转录文本进一步加工、润色，最终整理成一篇结构完整、逻辑清晰的文章。[01:50:12,733](https://youtu.be/5LtS4_UBeFM?t=6612s)
- **未来课程探索**:
    - **Obsidian 整合**: 后续课程将探索如何把我们打造的 AI Agent “装进” Obsidian 这个知识管理的“瓶子”里，让它成为笔记系统中的一个强大助手。[00:26:28,343](https://youtu.be/5LtS4_UBeFM?t=1588s)
    - **更多 API 实践**: 我们将尝试使用 ElevenLabs 等更专业的 STT 服务，来处理更复杂的场景，例如需要区分不同说话人的会议记录。[01:58:14,210](https://youtu.be/5LtS4_UBeFM?t=7094s)
- **课后作业**:
    1. 请自行查找并研究 OpenAI Whisper 模型和 GPT-4o Transcribe 模型的官方 API 文档，比较其与 Groq 文档的异同。[01:57:57,150](https://youtu.be/5LtS4_UBeFM?t=7077s)
    2. 挑战任务：访问 ElevenLabs 官网，研究其 ScribeV1 语音转文本服务的 API 文档，并尝试在它的网页测试工具中调用一次 API。[01:58:14,210](https://youtu.be/5LtS4_UBeFM?t=7094s)
    3. 请将你的学习过程、遇到的问题或成功的结果，发布到“一口新饭”社群中对应的课程作业区进行分享。积极分享可以获得积分奖励！[01:59:06,610](https://youtu.be/5LtS4_UBeFM?t=7146s)

@tab 06-第五课

课程讲义：你的APP不非得是APP - 第五课

**讲师：** Ray

**课程名称：** 2025-11-14-你的APP不非得是APP第五课直播

**课程视频：** [观看课程回放](https://youtu.be/Vt726TJzS-M)

## 课程概览 (Course Overview) - 课程内分享的Prompt在下面的讲义中。

本节课是系列课程的第五课，旨在继续完善上一节课开发的智能语音整理工具。 [00:00:07,740](https://youtu.be/Vt726TJzS-M?t=7s) 核心目标是构建一个比市面上所有智能录音笔体验更好、更符合个人需求的软件。 [00:00:19,000](https://youtu.be/Vt726TJzS-M?t=19s)

课程将分为两个主要部分：

- **增强转录能力：** 在原有的 Groq (Whisper) API 基础上，新增集成 ElevenLabs 的语音转文字 (Speech-to-Text) API，利用其独特且强大的转录能力。 [00:02:39,100](https://youtu.be/Vt726TJzS-M?t=159s)
- **文章润色自动化：** 利用大语言模型 (LLM)，将多段零散录音合并后的文稿，通过一个高效的 Prompt，自动整理成一篇风格统一、流畅精炼的文章。 [00:02:56,820](https://youtu.be/Vt726TJzS-M?t=176s)

通过本节课的学习，你将掌握如何为你的 Tars 系统集成新的 API 工具，并学习到一套实用的 Prompt Engineering 方法论。 [00:03:26,710](https://youtu.be/Vt726TJzS-M?t=206s)

## 核心理念与学习心态 (Core Concepts & Mindset)

- **项目驱动的语音整理：** 我们的工具是围绕“项目 (Project)”来组织的。一个项目（如一篇文章、一个企划案）会积累多段零散的录音，工具的目标是将这些录音转录、合并，并最终整理成型。 [00:00:30,300](https://youtu.be/Vt726TJzS-M?t=30s)
- **结构化与代码重构：** 保持项目文件的井井有条至关重要。 [00:07:30,568](https://youtu.be/Vt726TJzS-M?t=450s) 课程一开始就强调了将 API 参考文档从 tools 目录重构至专门的 docs/API_references 目录，这是一个良好的开发实践。 [00:04:22,980](https://youtu.be/Vt726TJzS-M?t=262s)
- **系统的长期记忆 (**[**agents.md**](http://agents.md/)**)：** [agents.md](http://agents.md/) 文件是我们系统的“宪法”和“记忆”。每当对系统做出重要修改（如文件结构调整）时，都应更新此文件，以确保 AI Agent 能够理解并遵循最新的工作流程和理念。 [00:07:55,528](https://youtu.be/Vt726TJzS-M?t=475s) 你甚至可以询问 AI Agent：“我们刚才的工作是否需要反映到 [agents.md](http://agents.md/) 中？” [00:08:18,888](https://youtu.be/Vt726TJzS-M?t=498s)
- **模块化与可复用性 (Modulation & Reusability)：** 在设计工具时，应考虑其模块化和复用性。例如，一个完整的“录音转文章”流程中，其“语音转录”部分可以被设计成一个独立的、可复用的模块，供其他流程调用，避免重复造轮子。 [01:05:35,466](https://youtu.be/Vt726TJzS-M?t=3935s)
- **Prompt Engineering 的艺术：**
    - **语音输入构建丰富的上下文：** 使用语音输入来撰写 Prompt，可以像意识流一样，将所有想到的细节和要求都包含进去，往往比手写能提供更丰富、更自然的上下文。 [01:33:52,710](https://youtu.be/Vt726TJzS-M?t=5632s)
    - **从成功案例中逆向工程：** 当你通过与 AI 的多轮交互，最终得到一个非常满意的结果时，不要停止。让 AI 扮演“世界级的 Prompt Engineer”，分析这次成功的对话，为你提炼和优化出一个通用的、更高质量的 Prompt 模板。 [01:35:36,170](https://youtu.be/Vt726TJzS-M?t=5736s)

## 课程必备工具 (Essential Tools)

Tars (塔斯)

Ray 在课程中构建的个人 AI Agent 系统框架的代号。它是一个本地文件系统，通过精心设计的目录结构和 Markdown 文件来指导 AI Agent 完成各种自动化任务。 [00:00:11,460](https://youtu.be/Vt726TJzS-M?t=11s)

Groq

**官网：** https://groq.com/

一个提供极速 LLM 推理服务的平台。在上节课中，我们通过其免费 API 调用了 OpenAI 的 Whisper 模型进行语音转录。 [00:01:46,380](https://youtu.be/Vt726TJzS-M?t=106s)

ElevenLabs

**官网：** https://elevenlabs.io/

顶级的 AI 语音技术公司，提供包括语音合成、声音克隆和高质量语音转文本等服务。本节课重点使用其 Scribe V1 模型进行语音转录。 [00:02:39,100](https://youtu.be/Vt726TJzS-M?t=159s)

Google Gemini API

**官网 (AI Studio)：** https://aistudio.google.com/

Google 开发的强大语言模型系列。本节课使用 gemini-2.5-pro 模型来润色和重写转录后的文稿，将其从口语化的草稿提升为可发布的文章。 [00:58:18,036](https://youtu.be/Vt726TJzS-M?t=3498s)

Visual Studio Code (VSCode)

**官网：** https://code.visualstudio.com/

课程中使用的主要代码编辑器，Ray 提到他使用的是集成了 GPT-5.1 Codex 的版本。 [00:05:15,660](https://youtu.be/Vt726TJzS-M?t=315s)

Git

**官网：** https://git-scm.com/

分布式版本控制系统，用于追踪项目文件的变更，并与 GitHub 等远程仓库同步。课程中用于提交代码和管理项目版本。 [00:10:06,628](https://youtu.be/Vt726TJzS-M?t=606s)

Obsidian

**官网：** https://obsidian.md/

一款强大的知识管理和笔记软件，基于本地的 Markdown 文件。Ray 用它来存储和管理自己的 Prompt 库。 [01:37:34,309](https://youtu.be/Vt726TJzS-M?t=5854s)

## 分步实操流程 (Step-by-Step Walkthrough)

### 第一步：项目结构重构与版本控制

1. **识别问题：** 上节课随意放置在 /tools 目录下的 API 文档不符合良好的开发实践。 [00:04:11,500](https://youtu.be/Vt726TJzS-M?t=251s)
2. **确定方案：** 计划在 /docs 目录下创建一个新的子文件夹 /API_references，用于集中存放所有第三方 API 的参考文档。 [00:06:28,468](https://youtu.be/Vt726TJzS-M?t=388s)
3. **执行重构：**
    - 在 VSCode 中，向 AI Agent (GPT-5.1 Codex) 发出指令，要求它创建新目录、移动相关文件，并更新 [agents.md](http://agents.md/) 文件以反映新的文件结构和工作理念。 [00:06:35,888](https://youtu.be/Vt726TJzS-M?t=395s)
    - AI Agent 成功执行了任务，不仅更新了文件树 (file tree)，还在 [agents.md](http://agents.md/) 中增加了“API Reference Workflow”章节和一条系统记忆 (System memory) 更新日志。 [00:08:32,707](https://youtu.be/Vt726TJzS-M?t=512s)
4. **版本控制：** 初始化 Git 仓库，并将所有更改 commit 和 push 到远程仓库，完成了一次完整的版本管理操作。 [00:10:26,387](https://youtu.be/Vt726TJzS-M?t=626s)

### 第二步：集成 ElevenLabs 语音转录服务

1. **获取 API Key：**
    - 访问 ElevenLabs 网站，进入 "Developers" -> "API keys" 页面。 [00:12:22,432](https://youtu.be/Vt726TJzS-M?t=742s)
    - 创建一个新的 API Key，并为其命名（例如 tars-001）。 [00:12:49,312](https://youtu.be/Vt726TJzS-M?t=769s)
    - **关键操作：** 取消勾选 "Restrict Key" 选项。这是一个重要经验，可以防止 AI Agent 在测试 API 连通性时因权限不足而报错。 [00:13:51,152](https://youtu.be/Vt726TJzS-M?t=831s)
    - 复制生成的 API Key。 [00:14:43,992](https://youtu.be/Vt726TJzS-M?t=883s)
2. **存储 API Key：** 将复制的 Key 粘贴到 Tars 系统中的 /01_system/configs/api_[keys.md](http://keys.md/) 文件中。 [00:15:05,012](https://youtu.be/Vt726TJzS-M?t=905s)
3. **获取 API 文档：**
    - 在 ElevenLabs 文档中，找到 "Speech to Text" 的 API Reference。 [00:26:19,916](https://youtu.be/Vt726TJzS-M?t=1579s)
    - **注意：** Ray 最初选择了错误的 GET /transcript 接口。正确的接口应该是用于提交文件并创建转录任务的 POST 接口（后经学员提醒和 AI 自我修正）。 [00:48:53,848](https://youtu.be/Vt726TJzS-M?t=2933s)
    - 在正确的 API 文档页面，使用 "View as Markdown" 功能，全选并复制文档内容。 [00:37:28,142](https://youtu.be/Vt726TJzS-M?t=2248s)
    - 在 Tars 的 /docs/API_references/ 目录下新建一个 Markdown 文件（如 ElevenLabs_ScribeV1_API_[docs.md](http://docs.md/)），并将文档粘贴进去。 [00:37:48,102](https://youtu.be/Vt726TJzS-M?t=2268s)
4. **构建新 Pipeline：**
    - 向 Tars Agent 发出指令，要求复刻现有的 Groq 转录流程，但将语音转录模型替换为 ElevenLabs 的 Scribe V1 模型。 [00:36:19,912](https://youtu.be/Vt726TJzS-M?t=2179s)
    - 将 API 文档文件和用于测试的音频文件夹一并提供给 Agent。 [00:38:25,542](https://youtu.be/Vt726TJzS-M?t=2305s)
    - AI Agent 首先发现提供的文档不完整，通过自行搜索网络，找到了正确的 POST 接口文档，并自动更新了本地的 API reference 文件，展现了其“防呆”能力。 [00:49:53,548](https://youtu.be/Vt726TJzS-M?t=2993s)
    - Agent 成功构建了新的 pipeline，并使用测试音频文件进行了 smoke test，生成了转录结果。 [00:50:50,448](https://youtu.be/Vt726TJzS-M?t=3050s)
5. **审核结果：** 查看输出文件，确认 ElevenLabs 成功生成了包含完整文本和精确到每个单词时间戳的 JSON 文件。 [00:54:21,167](https://youtu.be/Vt726TJzS-M?t=3261s)

### 第三步：集成 Gemini 并创建文章润色 Pipeline

1. **获取 Gemini API Key：**
    - 访问 Google AI Studio，点击 "Get API Key"。 [01:12:28,306](https://youtu.be/Vt726TJzS-M?t=4348s)
    - 创建一个新的 API Key，并将其与一个项目关联。 [01:12:38,126](https://youtu.be/Vt726TJzS-M?t=4358s)
    - 复制 API Key 并添加到 api_[keys.md](http://keys.md/) 文件中。 [01:13:09,406](https://youtu.be/Vt726TJzS-M?t=4389s)
2. **构建 Gemini 工具：**
    - 向 Tars Agent 发出指令，要求新增一个调用 Google Gemini API 的通用工具。 [01:09:02,026](https://youtu.be/Vt726TJzS-M?t=4142s)
    - 指定使用的模型为 gemini-2.5-pro。 [01:11:36,606](https://youtu.be/Vt726TJzS-M?t=4296s)
    - 提供 Gemini API 文档的顶层链接，让 Agent 自行搜索和学习。 [01:10:55,586](https://youtu.be/Vt726TJzS-M?t=4255s)
    - 为了进行 smoke test，要求 Agent 调用新工具，让 Gemini 写一首赞美自己的唐诗。 [01:14:31,714](https://youtu.be/Vt726TJzS-M?t=4471s)
    - Agent 成功创建了工具，并生成了一首质量不错的唐诗，验证了工具的可用性。 [01:24:12,982](https://youtu.be/Vt726TJzS-M?t=5052s)
3. **创建文章润色 Pipeline：**
    - 将 Ray 分享的高价值 Prompt（写作替身 prompt）保存为一个 Markdown 文件，并放入 Tars 的 /01_system/docs/prompts/ 目录中。 [01:37:49,702](https://youtu.be/Vt726TJzS-M?t=5869s)
    - 向 Tars Agent 发出指令，要求新建一个 pipeline。该 pipeline 的功能是：接收一个合并后的文章文稿，使用指定的 Prompt，调用刚刚创建的 Gemini 工具，最终输出一篇润色后的文章。 [01:38:20,022](https://youtu.be/Vt726TJzS-M?t=5900s)
    - 同时，要求 Agent 更新 [playbooks.md](http://playbooks.md/)，创建两种使用场景：一种是“一条龙”服务（从语音到润色文章），另一种是单独对已有文稿进行润色。 [01:39:40,362](https://youtu.be/Vt726TJzS-M?t=5980s)
4. **最终审核：** 查看 /03_output/ 目录，找到由新 pipeline 生成的 polished_[article.md](http://article.md/)。文章内容流畅、结构清晰，并保留了原始口述的核心思想和风格，甚至包含了插入图片的占位符提示，任务成功完成。 [01:46:13,442](https://youtu.be/Vt726TJzS-M?t=6373s)

### 第四步：完善版本控制

1. **识别问题：** 项目中的 input 和 output 文件夹包含大量音频等大文件，不应提交到 GitHub。同时，包含 API Key 的文件也属敏感信息，需要被忽略。 [01:48:10,382](https://youtu.be/Vt726TJzS-M?t=6490s)
2. **执行操作：** 指示 Tars Agent 扮演版本控制专家，审视项目结构，并创建一个 .gitignore 文件，将所有不必要或敏感的文件和目录（如 /02_input/, /03_output/, 和 api_[keys.md](http://keys.md/)）排除在版本控制之外。 [01:48:49,382](https://youtu.be/Vt726TJzS-M?t=6529s)

## 关键概念与进阶技巧 (Key Concepts & Advanced Techniques)

### ElevenLabs Scribe V1 模型的独特优势

- **极高准确率：** Ray 认为这是市面上最准确的转录服务之一，他自己的 YouTube 字幕几乎无需修改。 [00:20:24,515](https://youtu.be/Vt726TJzS-M?t=1224s)
- **环境音识别：** 能够识别并标注出文字以外的声音信息，如笑声、鸟叫声、火车声等，这为后续的情绪分析等高级应用提供了可能。 [00:20:51,315](https://youtu.be/Vt726TJzS-M?t=1251s)
- **词级时间戳 (Word-level Timestamps)：** 最强大的功能之一，它可以为转录稿中的每一个字提供精确的开始和结束时间。 [00:21:34,216](https://youtu.be/Vt726TJzS-M?t=1294s) 这个特性是实现“通过文本剪辑视频”功能的基础，也是下节课制作视频切片的核心技术。 [00:23:24,676](https://youtu.be/Vt726TJzS-M?t=1404s)

### Ray 的“写作替身”Prompt 剖析

> *这是一个经过精心打磨的 Prompt，旨在让 LLM (特别是 Gemini) 成为你的“写作替身”，将口语化的录音稿转化为保留个人风格的精炼文章。* [*01:26:34,922*](https://youtu.be/Vt726TJzS-M?t=5194s)

```
**角色与目标 (Role & Goal):** 请扮演我的“写作替身”与高级编辑。我的目标是将一段由语音直接转录的、充满口语化痕迹的原始文本，转换成一篇流畅、精炼且适合公开发布的文章。最核心的要求是，最终成品必须**完全保留我个人的语言风格和思考韵律**，读起来就像是我亲手写就，而不是一个 AI 的作品。

**核心原则 (Core Principles):**

1. **风格第一 (Style First):** 你的首要任务是吸收和模仿我的风格。文章必须保持我那种口语化、带有思辨和探索感的叙事基调。宁可牺牲少许书面语的“完美性”，也要确保风格的“真实性”。
    
2. **内容保真 (Content Fidelity):** 严格忠于我原始文本中的核心思想、观点和论据。你可以优化逻辑，但绝不添加你自己的观点或进行过度解读。
    
3. **精简而非重写 (Refine, Don't Rewrite):** 你的工作是做“减法”和“梳理”。删除明显的口误、重复、赘词（如“嗯”、“额”、“然后呢”、“就是说”）和不必要的停顿，让语言变得干净，但不要改变我原本的句式结构和用词习惯。
    
4. **上下文理解 (Contextual Understanding):** 如果我提到了具体的人名、书名或概念，你有权进行必要的背景信息查证，以确保理解和表达的准确性。
    

**工作流程 (Workflow):**

1. **沉浸式阅读：** 首先，通读下面的原始文本，不要急于修改。你的目标是“听到”我的声音，捕捉我的语言节奏和思维模式。
    
2. **清理与修正：** 在理解风格的基础上，开始清理文本，修正明显的转录错误和口语冗余。
    
3. **结构化梳理：** 将流畅的段落组织起来，确保观点之间的衔接自然、逻辑清晰。
    
4. **风格化输出：** 生成最终的文章版本，并再次检查是否符合上述所有核心原则。
```

### API 使用技巧与故障排查

- **API 基础概念：** 理解 GET 和 POST 等基本 HTTP 方法的区别至关重要。GET 通常用于获取数据，而 POST 用于提交数据以创建新资源（如提交音频文件进行转录）。 [00:53:22,587](https://youtu.be/Vt726TJzS-M?t=3202s)
- **ElevenLabs 免费额度问题：** 课程中演示时，ElevenLabs 的免费 API Key 因触发了滥用检测器而被禁用。这可能是由于 VPN/代理或多人同时使用等原因。这是一个实际开发中可能遇到的常见问题。 [00:33:05,512](https://youtu.be/Vt726TJzS-M?t=1985s)
- **Gemini API 的 OpenAI 兼容性：** Gemini API 提供了一个与 OpenAI API 兼容的模式，这意味着你可以用非常小的改动（主要是替换模型名称和 API Key），就将在为 OpenAI 构建的工具中切换使用 Gemini 模型。 [01:21:40,762](https://youtu.be/Vt726TJzS-M?t=4900s) 但 Ray 引用 Mike 的观点指出，为了确保能使用 Gemini 最完整、最原生的功能（如内置的搜索能力），最好还是使用其原生接口。 [01:23:03,202](https://youtu.be/Vt726TJzS-M?t=4983s)

## 课程延展与预告 (Future Learning)

- **下节课预告 (系列最终课)：** [01:51:08,077](https://youtu.be/Vt726TJzS-M?t=6668s)
    - **核心任务：视频切片自动化。** 我们将处理一个长达一小时的播客视频。 [01:53:31,058](https://youtu.be/Vt726TJzS-M?t=6811s)
    - **技术实现：** 利用 ElevenLabs 提供的词级时间戳，结合大语言模型分析内容，自动识别出视频中的精彩片段。 [01:54:01,218](https://youtu.be/Vt726TJzS-M?t=6841s)
    - **最终目标：** 调用 ffmpeg 等工具，根据识别出的时间戳，将长视频自动剪辑成多个独立的、短小的精华视频片段，并整理出相应的讲义。这个工具将直接用于 Ray 未来课程的制作流程。 [01:54:12,718](https://youtu.be/Vt726TJzS-M?t=6852s)
- **Tars 系统的应用拓展：**
    - Ray 强调，本课程教授的框架和思路可以应用于各种场景，远不止语音和视频处理。 [01:51:18,918](https://youtu.be/Vt726TJzS-M?t=6678s)
    - **示例：** 处理税务文件，如从银行账单 (PDF/Invoices) 中提取数据并整理成表格。 [01:51:42,058](https://youtu.be/Vt726TJzS-M?t=6702s)
    - **方法论：** 站在巨人的肩膀上。当你需要处理特定任务（如图片文字识别 OCR）时，可以在 GitHub 上寻找开源工具，并将链接提供给 Tars，让它自行学习和集成。 [01:52:07,018](https://youtu.be/Vt726TJzS-M?t=6727s)
- **NotebookLM 的推荐：** 对于会议记录总结或学习 YouTube 视频这类需求，Ray 推荐使用 Google 的 [Notebook LM](https://notebooklm.google/)，认为它在这方面比自己构建的 Tars 系统更高效、更强大。 [01:56:42,198](https://youtu.be/Vt726TJzS-M?t=7002s)

@tab 07-第六课

讲师: Ray

## 课程概览

Ray 在本次课程中设定了两个核心目标，旨在利用 AI 和自动化工具流（Pipeline）提升内容创作的效率和分发效果。00:00:06,300

- **播客精彩切片制作**: 学习如何将长达一两个小时的播客内容，自动化地剪辑成适合社交媒体传播的短视频切片（Clips）。00:04:01,100 这不仅包括视频剪辑，还涵盖了自动生成吸引人的标题和文案。00:04:04,920
- **长课程分割**: 学习如何将一两个小时长的完整课程，自动分割成多个时长在五到十分钟的短小课程单元，以优化学生的学习体验和完成率。00:04:11,380

## 核心理念与学习心态

- **AI Agent 的灵活性**: 市面上的许多 AI 工具虽然能制作切片，但往往缺乏灵活性，无法精确提取用户指定的片段。00:01:12,200 Ray 强调，通过构建自己的 AI Agent（如 TARS），可以实现高度个性化的需求。00:03:51,440
- **结构化输出的重要性 (Structured Output)**: 为了让 AI Agent (TARS) 能够稳定、高效地与其他工具（如 FFmpeg）协作，我们需要让大语言模型（LLM）的输出是结构化的，例如使用 JSON 格式。00:16:59,632 这避免了让 Agent 处理混乱无格式的文本，从而节省 Token 消耗并减少不确定性。00:16:46,892
- **迭代与优化的工作流**: 课程展示了一个完整的工作流：从获取带时间戳的字幕，到通过 Prompt Engineering 让 LLM 分析并生成结构化数据，再到利用脚本工具执行剪辑。这个过程中，每一步的输出都为下一步做准备，形成一个高效的自动化管线。00:24:30,504
- **先 Refine 字幕，再进行处理**: 为了让 LLM 更好地理解和分割内容，需要先对原始字幕进行优化（Refine），确保断句符合语义逻辑且格式清晰，这会极大提升后续处理的准确性。00:26:50,143

## 课程必备工具

### [ElevenLabs](https://elevenlabs.io/)

一个先进的语音 AI 研究和部署公司，提供文本转语音和语音转语音的服务。在本次课程中，Ray 使用它来生成带有精确到句子甚至单词级别时间戳的字幕。00:05:33,280

### [Riverside.fm](http://riverside.fm/)

一个专业的远程播客和视频录制平台，提供高质量的音视频录制功能。Ray 用它来录制与嘉宾的对谈。00:01:35,680

### [FFmpeg](https://ffmpeg.org/)

一个强大的开源多媒体处理工具集，能够处理视频、音频和其他多媒体文件和流。课程中利用它进行“无损”视频剪辑，因为它速度快，不需像传统剪辑软件那样进行耗时的导入导出和重新编码。00:08:33,772

### [JSON (JavaScript Object Notation)](https://www.json.org/)

一种轻量级的数据交换格式，易于人阅读和编写，也易于机器解析和生成。课程强调使用 JSON 作为大语言模型（LLM）的结构化输出格式，以便后续工具可以稳定地解析和使用。00:17:56,972

### [ChatGPT (by OpenAI)](https://chatgpt.com/)

一个由 OpenAI 开发的著名大型语言模型。Ray 在课程中用它来演示如何查询和理解像 JSON 这样的概念。00:19:11,632

### [Gemini](https://gemini.google.com/)

Google 开发的大型语言模型。Ray 计划使用其强大的长文本理解能力（长 Context Window）来分析整个播客的文字稿并提取切片。01:03:13,092

### TARS (课程内 Agent)

这是 Ray 在课程中使用的个人 AI Agent 的代号。它基于 Codex 模型，负责理解任务、调用各种工具（如 Gemini, FFmpeg）并串联整个自动化工作流。00:15:15,452

### [Kling AI](https://klingai.com/)

在课程的补充说明中提到，这是一个AI工具的例子。

### [Visual Studio Code](https://code.visualstudio.com/)

一款由微软开发的免费、开源的代码编辑器，课程中 Ray 在此环境中与他的 AI Agent (TARS) 进行交互。00:33:34,616

## 分步实操流程

1. **获取带时间戳的字幕 (Transcript)**:
    - 首先，需要为音视频内容生成一份字幕文件。工具如 [ElevenLabs](https://elevenlabs.io/) 可以生成精确到句子甚至单词的时间戳。00:05:21,880
    - **关键一步：优化字幕 (Refine)**。原始的 AI 字幕断句可能不佳，或句子过长。00:26:11,224 需要先运行一个“精炼”（Refine）流程，将字幕处理成遵循 Netflix 标准的、按完整语义断句的单行字幕，为后续 LLM 的处理打下良好基础。00:26:50,143
2. **设计 Prompt 并与 LLM 交互**:
    - 编写一个高质量的 Prompt，指导一个拥有长文本窗口的大语言模型（如 Gemini）来分析整个字幕文件。00:11:54,372
    - Prompt 中需要明确任务、角色、选取标准（如寻找冲突、情感高点、实用干货等），以及最重要的——输出格式。01:16:49,406
3. **获取结构化输出 (JSON)**:
    - LLM 会根据 Prompt 输出一个 JSON 文件。00:18:13,512
    - 这个 JSON 文件中应包含一个数组，每个元素代表一个推荐的切片。每个切片对象应包含 `cutlist` (起始时间戳)、`title` (标题)、`description` (文案) 和 `reason` (选取原因)等字段。00:13:37,812
4. **解析 JSON 并执行剪辑**:
    - AI Agent (TARS) 读取并解析这个 JSON 文件。00:24:32,343
    - Agent 提取出所有 `cutlist` 中的时间戳信息。00:15:23,212
    - Agent 调用 **FFmpeg** 工具，根据时间戳对原始视频文件进行快速剪辑，生成多个视频切片。00:13:10,712
5. **整理并导出产出**:
    - Agent 进一步解析 JSON，将每个切片的标题、文案等信息提取出来，并保存为单独的文本文件。01:05:24,932
    - 最终，为每个切片创建一个独立的文件夹，其中包含剪辑好的视频文件和对应的文案文件，方便后续发布。01:05:36,432

## 关键概念与进阶技巧

- **两种切片方式**:
    1. **基础切片**: 直接根据时间戳从视频中“剪”出一整段连续的内容。00:07:48,892
    2. **精细切片 (Re-editing)**: 这是一种更高级的剪辑，可以只抽离某一个人的发言，甚至将不同时间点的几句话拼接在一起，创造出新的叙事节奏。这类似于媒体的“恶意剪辑”，但也可以用于制作更精炼的内容。00:08:01,652
- **句子级 vs. 单词级时间戳**:
    - **句子级时间戳**: 对于制作普通切片已经足够，可以精确到某句话的开始和结束。00:10:24,952
    - **单词级时间戳**: 当需要制作那种“卡拉OK”式高亮文字的字幕效果，或者需要进行极度精细的剪辑（比如去掉某个语气词）时，就需要精确到每个字的时间戳。[ElevenLabs](https://elevenlabs.io/) 提供了这种能力。00:10:05,092
- **Prompt Engineering 技巧**:
    - **赋予角色**: 在 Prompt 开头明确告知 AI 它需要扮演的角色，例如“世界级的 YouTube Shorts 策展人”。01:16:31,746
    - **提供清晰的负面和正面范例/标准**: 明确告知 AI 什么样的内容是“高优先级”的（如冲突、情感、故事），以及要“避免”什么（如平淡的寒暄）。01:16:49,406
    - **明确输出格式**: 严格要求 AI 输出特定格式（如 JSON），并给出清晰的结构定义，这比让 AI 自由发挥要可靠得多。01:11:13,996
    - **迭代和修正**: 第一次的 Prompt 可能不完美，需要根据 AI 的输出进行反馈和调整。例如，Ray 指出 Agent 对切点选择的理解有误，并要求其改进 Prompt 的具体标准。01:12:20,396

## 课程延展与预告

- **课程分割 Pipeline**: Ray 提到，一旦播客切片的 Pipeline 搭建完成，将其改造为长课程的分割工具将非常简单，核心逻辑是复用的，只需要调整 Prompt 的内容和侧重点即可。00:31:54,536
- **个人软件开发分享**: Ray 透露自己正在使用 AI Agent 开发一款 iOS 软件，并强调了 UI/UX 设计在当今产品竞争中的重要性。他未来会分享更多关于利用 AI 进行软件设计和开发的经验。00:49:02,532 

:::

















::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)