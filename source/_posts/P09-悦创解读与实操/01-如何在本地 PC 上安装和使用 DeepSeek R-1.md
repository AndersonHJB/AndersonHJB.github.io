---
title: 如何在本地 PC 上安装和使用 DeepSeek R-1
tags:
  - DeepSeek
categories:
  - 悦创解读与实操
keywords:
  - AI悦创解读与实操,编程一对一辅导,留学生一对一辅导
description: 这篇文章介绍了如何在本地安装和使用 DeepSeek R-1，一个开源 AI 语言模型。通过使用 Ollama 工具，用户可以下载并在本地运行模型，保护隐私并实现离线使用。文章还强调了本地运行的优势，如数据安全和灵活性。
top_img: /img/posts/01-如何在本地 PC 上安装和使用 DeepSeek R-1/01-如何在本地 PC 上安装和使用 DeepSeek R-1.png
comments: true
cover: /img/posts/01-如何在本地 PC 上安装和使用 DeepSeek R-1/01-如何在本地 PC 上安装和使用 DeepSeek R-1.png
toc: true
mathjax: false
katex: false
highlight_shrink: false
aside: true
swiper_index: 1
top_group_index: 1
background: '#fff'
ai: 这篇文章介绍了如何在本地安装和使用 DeepSeek R-1，一个开源 AI 语言模型。通过使用 Ollama 工具，用户可以下载并在本地运行模型，保护隐私并实现离线使用。文章还强调了本地运行的优势，如数据安全和灵活性。
abbrlink: 81489b64
date: 2025-02-10 11:34:29
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
aplayer:
---

你好，我是悦创。

最近一直在做开源项目以及 Hexo 开源主题，当然编程私教是一直在做的。有需要的可以添加我微信联系我：Jiabcdefh。

接下来几天我会主要 DeepSeek 相关的知识点或者文章，敬请期待！

最新最全的文章可以访问我的网站：

- [https://bornforthis.cn/](https://bornforthis.cn/)
- [https://blog.bornforthis.cn/](https://blog.bornforthis.cn/)

![](<01-如何在本地 PC 上安装和使用 DeepSeek R-1/image.png>)


最近，大家似乎都在讨论 [DeepSeek](https://www.deepseek.com/) R-1，这是由中国 AI 公司 DeepSeek 开发的全新开源 AI 语言模型。一些用户表示，它的推理能力可以与 OpenAI 的 o1 相媲美，甚至更胜一筹。

目前，DeepSeek R-1 仍然是免费使用的，这对用户来说是个好消息，但也引发了一些疑问。在用户量激增的情况下，他们是如何管理服务器成本的？

毕竟，运行 AI 模型的硬件成本可不便宜，对吧？

唯一合理的解释就是——**数据**。数据是 AI 模型的生命线。他们很可能以某种方式收集用户数据，以优化他们的量化交易模型或进行其他形式的盈利。

因此，如果你关心数据隐私，但仍然想使用 R-1 而不共享数据，**最佳方式就是在本地运行模型**。

# 1. 什么是 DeepSeek R-1？

几天前，DeepSeek R-1 被正式发布为一个完全开源的模型，这意味着任何人都可以获取其底层代码库，对其进行修改，甚至进行微调以满足自己的需求。

从技术角度来看，DeepSeek R-1（通常缩写为 R1）是基于一个大型基础模型 **DeepSeek-V3** 发展而来的。DeepSeek 研究团队通过 **高质量人工标注数据的监督微调（SFT）** 和 **强化学习（RL）** 对该模型进行了优化。

最终的结果是，一个能够处理复杂提示、清晰地展示复杂问题推理步骤（有时比其他模型更透明）、甚至可以在聊天界面直接运行代码的对话 AI。

对于一个开源模型来说，这已经非常令人惊艳了。

# 2. 如何在本地运行 DeepSeek R-1

要在本地运行 DeepSeek R-1，我们将使用一个名为 [Ollama](https://ollama.com/) 的工具。

Ollama 是一个**免费的开源工具**，允许用户在本地计算机上运行大语言模型（LLM）。它支持 **macOS、Linux 和 Windows**。

## 2.1 安装 Ollama

前往官方 Ollama 网站，点击 **“Download”** 按钮，并在你的系统上安装它。


![](<01-如何在本地 PC 上安装和使用 DeepSeek R-1/image-1.png>)


安装完成后，打开终端并运行以下命令，以确认安装是否成功：

```bash
ollama -v
```


![](<01-如何在本地 PC 上安装和使用 DeepSeek R-1/image-2.png>)


如果返回 Ollama 版本号，而不是错误信息，则表示安装成功。

## 2.2 下载 DeepSeek R-1 模型

在 Ollama 的 **Models** 选项卡下，搜索 **deepseek**，你会看到 **deepseek-r1** 出现在搜索列表的第一项。


![](<01-如何在本地 PC 上安装和使用 DeepSeek R-1/image-3.png>)


点击它后，你会发现有多个不同规模的模型，参数范围从 **5 亿** 到 **671 亿** 不等。通常来说，**模型越大，对 GPU 的要求也越高**。

- [https://ollama.com/library/deepseek-r1](https://ollama.com/library/deepseek-r1)


![](<01-如何在本地 PC 上安装和使用 DeepSeek R-1/image-4.png>)


## 2.3 运行 DeepSeek R-1

小型模型（如 **8B 参数** 版本）可以在 **8GB VRAM 的 GPU** 上运行，而更大的模型则需要更强大的硬件支持（详细的 VRAM 和 GPU 要求见下方）。

若要下载并运行 **8B 参数** 版本的模型，运行以下命令：

```bash
ollama run deepseek-r1:8b
```

模型会开始下载（大小约 **4.9GB**）。请确保你的磁盘空间充足。


![](<01-如何在本地 PC 上安装和使用 DeepSeek R-1/image-5.png>)


下载完成后，模型将**在本地运行**，你可以立即与它进行对话。


![](<01-如何在本地 PC 上安装和使用 DeepSeek R-1/image-6.png>)


## 2.4 测试示例

我们来试试看：


![](<01-如何在本地 PC 上安装和使用 DeepSeek R-1/image-7.png>)


> **提示：** What is DeepSeek R-1?  
> **回答：** DeepSeek-R-1 是由中国公司 DeepSeek 开发的 AI 助手。它可以处理各种主题，包括数学、编程、自然语言处理等。如果你有任何问题或需要帮助，欢迎随时咨询！

很棒！它**运行速度很快**，而且即使你断开 WiFi 也依然可以使用。不过需要注意，即使你的设备连接了互联网，**DeepSeek R-1 仍然无法访问网页数据**。


![](<01-如何在本地 PC 上安装和使用 DeepSeek R-1/image-8.png>)


> **提示：** What’s the latest price of AAPL?  
> **回答：** 作为一个 AI 助手，我无法访问实时数据，因此无法提供 Apple Inc. (AAPL) 的最新股价。建议你访问金融新闻平台或你的证券经纪商获取最新信息。

## 2.5 DeepSeek R-1 运行所需的 GPU 和 VRAM

DeepSeek R-1 的 VRAM 需求取决于模型大小、参数数量和量化技术。以下是不同版本的 DeepSeek R-1 及其精简模型的 VRAM 需求，以及推荐的 GPU 规格：


![](<01-如何在本地 PC 上安装和使用 DeepSeek R-1/image-9.png>)


# 3. 为什么要在本地运行？

虽然 DeepSeek 提供了**网页版聊天机器人**和**移动应用**，它们非常方便，甚至支持 DeepThink 和网页搜索，但本地运行模型依然有以下几个优势：

- **隐私保护**：本地运行意味着**你的数据不会上传到服务器**，更加安全。  
- **离线可用**：即使没有互联网，也可以与 AI 进行对话。  
- **未来保障**：即便官方停止提供免费访问，你仍然可以继续使用本地模型。  
- **更灵活**：你可以自定义模型，甚至微调它以适应自己的需求。

# 4. 总结

目前，DeepSeek 如何处理用户数据仍然不太明确。如果你对隐私问题不太在意，网页版或移动端可能是更便捷的选择，毕竟它们提供了 **DeepThink** 和 **网页搜索** 功能。但如果你希望**完全掌控自己的数据**，那么在本地运行模型是一个不错的选择。

DeepSeek 模型的优化使其可以在**相对普通的硬件**上运行。虽然更大的模型（如 DeepSeek-R1-Zero）需要分布式 GPU 集群，但**精简版**允许单 GPU 运行，并且对硬件要求较低。

如果你不喜欢使用终端，也可以通过 [Gradio](https://github.com/AK391/ai-gradio) 或 [Chatbox AI](https://chatboxai.app/en) 添加一个简单的 UI。我将在下一篇文章中介绍如何设置它。

希望这篇文章能帮你入门！如果你有任何问题或遇到困难，欢迎在评论区讨论。

{% span center log large blue, 🪧 %}

{% folding blue close, 公众号：AI悦创【二维码】 %}

![](https://bornforthis.cn/gzh.jpg)

{% endfolding %}

{% tip info %}AI悦创·编程一对一

> AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh
>
> C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh

{% endtip %}
