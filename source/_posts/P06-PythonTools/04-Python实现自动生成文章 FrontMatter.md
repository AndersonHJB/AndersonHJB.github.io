---
title: Python 实现自动生成文章 FrontMatter
tags:
  - hexo
  - 书写技巧
categories:
  - AI悦创·Vlog
keywords:
  - AI悦创
  - Vlog
  - Python一对一教学
description: 本篇是 AI悦创编写的文章
top_img: /img/posts/P04-Vlog/01-为什么学习编程推荐记笔记/IMG_3061.JPG
comments: true
cover: /img/posts/P04-Vlog/01-为什么学习编程推荐记笔记/01-为什么学习编程推荐记笔记.webp
toc: true
mathjax: false
katex: false
highlight_shrink: false
aside: true
swiper_index: 1
top_group_index: 1
background: '#fff'
abbrlink: 2192c1f3
date: 2025-03-11 17:13:19
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
aplayer:
ai:
---
# 1. 前言

你好，我是悦创。

我现在有多个网站，主要写文章的有两个：

- [https://bornforthis.cn/](https://bornforthis.cn/)
- [https://blog.bornforthis.cn/](https://blog.bornforthis.cn/)

头文件要复制这比较麻烦，特别是其中当下日期每次都是要**新鲜**的。所以，我一开始一直用的是点击开始然后生成最新日期：

- [https://bornforthis.cn/python/#/](https://bornforthis.cn/python/#/)

![](<04-Python实现自动生成文章 FrontMatter/image.png>)

虽然，我这么操作了。但我还是觉得麻烦，每次鼠标要滑动到那块输出框，并选择复制。（说实话：操作的时候我很是烦躁😫）

今天给南京大学理工学院研究生（MR）上课的时候，我就感觉异常强烈。我也是建议她跟我系统学习的过程中，使用自己搭建的网站写文章时，时间使用我原先的方法来生成。

最后，我就想着趁着学生记笔记的时间，使用 Flask 快速搭建一个 API 来使用。OK，当你看见这篇文章时，代表我已经写完并且部署成功！

# 2. 代码实现

- 完整代码已经开源：[https://github.com/AndersonHJB/Auto-Time-FrontMatter](https://github.com/AndersonHJB/Auto-Time-FrontMatter)




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
