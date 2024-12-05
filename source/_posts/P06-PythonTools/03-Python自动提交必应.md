---
title: Python自动提交必应收录
tags:
  - 小想法
  - Python 工具
categories:
  - Python小项目
description: "为增加必应的收录，我选择注册并提交链接，垃圾百度给我的提交额为0！简直无法忍受emmmm～"
top_img: /img/posts/P06-PythonTools/03-Python自动提交必应/03-Python自动提交必应.png
cover: /img/posts/P06-PythonTools/03-Python自动提交必应/03-Python自动提交必应.webp
comments: true
toc: true
mathjax: false
katex: false
highlight_shrink: false
swiper_index: 1
top_group_index: 1
background: '#fff'
aside: true
ai:
  - "为增加必应的收录，我选择注册并提交链接，垃圾🗑️百度给我的提交额为0！简直无法忍受😓emmmm～"
abbrlink: 3fceba58
date: 2024-12-05 09:56:58
toc_number:
toc_style_simple:
aplayer:
---

# 1. 背景

你好，我是悦创。

添加到必应是很简单的，我就不赘述了～

我这里主要记录📝的是，如何使用必应的 API 提交链接，至于定时提交有很多方法，可以选择使用宝塔、MacOS、Windows 等定时任务即可。「有需要可以评论留言，我后期补上教程」

## 2. 实现

必应官方提供了两种方案：`URL Submission` 、`Content Submission` 那肯定是选择 `URL Submission`。

> 官方链接：[https://www.bing.com/webmasters/url-submission-api#APIs](https://www.bing.com/webmasters/url-submission-api#APIs)

但是官方提供的都不是 Python 代码，很有局限性。只提供了 Json 和 XML 的代码，对于不熟悉和重复执行来说，不是非常方便。我就需要使用 Python 来便于我运行和定时，当然也可以使用 sh 的命令行，会更简单「或许，改天试一试然后代码加入到文字后面。」

