---
title: Codex Skills 制作教程：把对话流程保存成 Skill，下次直接复用
icon: blog
date: 2026-11-15 23:53:22
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
head:
  - - meta
    - name: keywords
      content: Codex Skills,Skill 制作教程,创建 Codex Skill,对话转 Skill,AI 工作流,视频剪辑自动化
---

制作 Skill，可以从一次满意的对话开始：**先让 Codex 把事情做好，再让它把做法保存下来，下次直接复用。**

以口播视频剪辑为例，照着下面三步操作。

![把反复交代的做法保存成 Skill](https://blog.images.one.bornforthis.cn/docs-images/sha256/d1/d1a388cb20fc34a3e30dddf5ac5d644688a3e33be5333c030a93fdbc270e6f35.png)

*AI 生成配图 · Bornforthis 风格*

## 1. 先通过对话，把视频剪满意

把视频文件交给 Codex，说清你想要的效果：

```text
请把这段口播视频剪成 9:16 竖屏，删掉明显的停顿和重复表达，保留原意，加上清晰的中文字幕，导出 MP4。
```

看完成片后，继续提修改意见，比如“字幕再大一点”“开头更紧凑一些”，直到你满意。这一步，就是和 Codex 一起确定你的做法。

## 2. 满意后，说一句：把流程做成 Skill

在**同一个聊天**中发送：

```text
把上面已经确认的剪辑流程做成一个 Skill，命名为 my-video-edit。下次我提供新视频，就按这套做法剪辑。请实际创建并保存，告诉我保存位置和调用方式。
```

让 Codex 负责整理步骤、保留最终确认的字幕样式和导出设置，并创建文件。看到实际保存位置与调用说明，这一步才算完成。

**小技巧：长对话，提前保存一版。** 对话较长时，早期细节可能被压缩或遗漏。不必等到最后才整理：先说“把目前已确认的流程做成 Skill，未确定的部分先不要写死”；等效果满意后，再说“把最终确认的做法更新到这个 Skill”。

## 3. 下次提供新视频，直接调用

在能使用这个 Skill 的 Codex 会话中，提供新视频，然后说：

```text
请使用 my-video-edit 这个 Skill，剪辑我这次提供的视频，沿用保存的字幕样式、剪辑节奏和导出设置。
```

这样就不用每次重新交代整套要求。以后偏好变了，再告诉 Codex：“把这次确认的修改更新到这个 Skill。”

**值得保存的是你已经确认的做法，而不是整段聊天记录。** 比如保存字幕样式，不要把上一条视频的文件名写死。

下次复用时，原来使用的剪辑工具和素材模板也需要可用；Skill 保存流程，具体成片仍要看新视频的内容。
