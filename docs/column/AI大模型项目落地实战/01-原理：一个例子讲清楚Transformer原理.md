---
title: 01｜ 原理：一个例子讲清楚 Transformer 原理
date: 2025-02-10 17:50:57
icon: rengongzhineng
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

![](https://blog.images.bornforthis.cn/docs-images/sha256/76/76a2d911db3299509228b53456308ee59d6d0613e896d198bfe9a2771bc37630.jpg)

你好，我是悦创。

相信很多同学都看到过类似下面的 GPT 介绍。

> GPT-3 是强大的生成式语言模型，拥有 1750 亿个参数。它使用 Transformer 架构，通过大规模的无监督学习从海量文本数据中学习了语言的统计规律和语义表示。GPT-3 可以应用于多种自然语言处理 (NLP) 任务，包括文本生成、文本分类、问答系统等……

你有没有想过，为什么这里面的概念不管在哪种介绍里都会被反复提及？它们是什么意思？每个概念之间有什么关系？如果我们想入局大模型，需要搞清楚这些概念吗？

我的答案是，需要。想学习大模型开发的朋友，只有通盘搞清楚这些问题，才能把概念落实到程序中。

接下来，我会从一个典型的例子出发，采用抽丝剥茧的方式，分析这个例子在 Transformer 架构下的具体程序流程以及数据结构。

相信通过这节课，你一定能达成三个目标。

1. 跟着这个 Transformer 程序流程图，把所有 Transformer 里的概念串联起来，并理解清楚流程。
2. 理解 Token，Embedding 和 Self-Attention 这 3 个最核心的算法和数据结构，解释 Transformer 为何可以达到人类智力级别。
3. 从业务层看待 Transformer 程序流程图，理解上述所有大模型的相关概念。

这也正是我自己理解 Transformer 的方式，如果你也觉得不错，那就花 20 分钟跟着我的思路来试一试吧。

## 1. 一个 GPT 会话例子

我先把上面说的典型例子抛出来。

先看例 1，用明确的指令“翻译”让 GPT 做一个翻译。

![](https://blog.images.bornforthis.cn/docs-images/sha256/99/99f83862508ff34c1d3b659d5a82eb3b5c91b6e27ebba4b34311b64ce9781959.png)



接着是例 2，如果接着输入，GPT 就会继续翻译，不再需要额外的指令。

![](https://blog.images.bornforthis.cn/docs-images/sha256/a7/a71d20035ec6145d11ca322c032d66606d50b80a1530a7e6c2aa56fc499d6e0f.png)



GPT 的实现原理可以用一句话表述：**通过输入一段文本，GPT 模型会预测出最可能成为下一个字的字**。在例 1 中，因为字符串是以“翻译：”开头的，所以，虽然没有指明翻译成什么语言，GPT 模型也就能据此推测出“我们想翻译成英文”并给出结果。后续我们再输入中文，它也能准确地预测这是一个翻译任务。

把这个过程画成流程图，会更加清晰。

![](https://blog.images.bornforthis.cn/docs-images/sha256/03/031396c4f4324138ad84f9bc7fbf9b4273a61511d5e470a2b8f9cbde1ecf1c34.png)

接下来，我们的任务是进一步理解 GPT（核心是 Transformer）的具体程序流程。

当然，要一口气吃透 Transformer 的流程并不容易，因此我会采用“**农村包围城市**”的策略，通过一个经典概率模型的解析，先帮你扫盲重要的外围辅助概念，**输入，输出，词表**。这些概念的理解可以在 Transformer 里直接继承，理解了它们，再集中精力搞清 3 个最核心的算法和数据结构就行了。

## 2. 串联概念：经典概率模型

这个经典概率模型比 Transformer 简单 10 倍，非常易于理解。

假设我们要做一个汪星人的大模型，汪星人只有睡觉、跑步、吃饭三个行为，汪星语也只有下面这一种句式。

```text
我 刚才 跑步，我 现在 吃饭
我 刚才 睡觉，我 现在 吃饭
……
```

我们的目标和 GPT 是一样的，都是用已有的文本预测下一个字，比如下面的例子。

```text
我 刚才 跑步，我 现在 ___
```

要预测上面例子的横线里应该填什么，只要计算“跑步”这个行为之后哪个行为的概率最大就可以了。比如：P(吃饭|跑步) 表示汪星人在“跑步”之后，下一个行为是“吃饭”的概率。











欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)



