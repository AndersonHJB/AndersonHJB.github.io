---
title: Python实现对比文件夹内容，找出不同进行升级
tags:
  - 小想法
  - Python 工具
categories:
  - Python小项目
description: "Python 实现对比文件夹内容是否相同，以及具体不同的区别！适合解决跟随原项目选择性更新，找出不同的进行针对性的覆盖。特别是 hexo 主题魔改太多，但又想和开发者同步升级的人。"
top_img: /img/posts/P06-PythonTools/01-Python对比文件夹内容/01-Python对比文件夹内容.jpg
cover: /img/posts/P06-PythonTools/01-Python对比文件夹内容/01-Python对比文件夹内容.webp
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
  - "Python 实现对比文件夹内容是否相同，以及具体不同的区别！适合解决跟随原项目选择性更新，找出不同的进行针对性的覆盖。特别是 hexo 主题魔改太多，但又想和开发者同步升级的人。"
abbrlink: 20a844b2
date: 2024-10-09 21:25:54
toc_number:
toc_style_simple:
aplayer:
---

# 1. 背景

你好，我是悦创。

最近呢，新建了这个 hexo 博客生活网站，对就是这么计划和想的。结果......除了说说，文章都是技术类文章，实属草率了。因为技术类我写了太多太多。主要在这个网站：[https://bornforthis.cn/Memoirs.html](https://bornforthis.cn/Memoirs.html)，但是主网站文章太多，每次发布要 1h 左右，这个网站发布可以做到“实时”。

用了 hexo 的安知鱼主题，魔改了一部分。如果直接一键覆盖是可以做到升级，但是自身魔改的就会消失。

估计很多魔改的小伙伴，一开始魔改就做好了不升级或者小魔改不修改源码，进行升级。

我比较贪心，想要实现自己魔改，又能实时跟随大佬开源进行升级，这样就可以实时更新和修复 bug。

这时想到使用 Python 编写实现小程序，进行对比文件夹内不同的部分。选择把不同的部分进行覆盖升级，达到无损升级。

待定：「想法还没确认」对于无损升级的核心就是：自己修改过的进行手动修改，对于自己没有修改过的进行一键覆盖。对比效果使用命令行显示或者

目前，先找出不同，手动修改。

# 2. 代码实现

