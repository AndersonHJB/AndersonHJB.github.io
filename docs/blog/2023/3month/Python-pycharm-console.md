---
title: 02-Python 中运行取消 Python console 模式
date: 2023-03-14 19:57:46
author: AI悦创
isOriginal: true
icon: python
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

## 关闭 Python Console 运行模式

你好，我是悦创。

::: info

我是在写代码的过程中，无意间打开这个模式的，但是真的很烦。

:::

在 Python 里 run 的时候突然会发现，进入的不是 run 模式，而是 console 模式，这种运行模式能保留你每次的运行历史，因为会重开一个运行小页面，对于强迫症来说，甚是不爽啊，比如 🔽

Python console 运行模式如下：

![](https://blog.images.bornforthis.cn/docs-images/sha256/8d/8d5ab11c924ec41c3c6ab6083e0b416303692a2b41792c8cddd9b8c007f925ab.png)

**看到这种不爽的情况，我立马嘶吼：还我 Run 模式！**

来，跟我一起，讨回 run！

本人使用的是 Pycharm 编辑器，所以，以这个为例图解一下关闭流程：

1. 点击右上角配置，如图，在 Pycharm 右上角运行文件地方，打开下拉列表，点击第一个

::: center

![](https://blog.images.bornforthis.cn/docs-images/sha256/c1/c17ba85d7e75bb6a0f45bbdc1367065a40a462d0e93f52ef637932161daa592f.png)

:::

当前文件操作界面，右侧如图位置，取消勾选后点击 Apply 应用

::: center

![](https://blog.images.bornforthis.cn/docs-images/sha256/63/63650a5670b3e800da8e23cb4de3954fdb18c8e5efb74d2d5fb3c28a87cf6056.jpg)

:::

<span style="color:orange">**注：此时当前 py 文件的 console 模式已经关闭了，关闭此页面运行即可**</span>

##### 但是！！！咱们要彻底解决问题，瓦碎地方一切基础，那就看下图

3. 点击下图位置，进行设置：

![](https://blog.images.bornforthis.cn/docs-images/sha256/0d/0de8c7ef9b69938d95fb26169a19e1ad53b42bc5704998451f637288a8958241.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/68/68b9ed79481457cfafd1891d9ccdf466cfcfd8f1149e0c70cf038b6c7280a26a.png)

然后关闭此页面，重新右键 run 一下，ok，你会发现，恢复正常的 run 界面了，如图↓

![](https://blog.images.bornforthis.cn/docs-images/sha256/bc/bceb359a1818adb5209707aa427ff8be46127c1951e8d4c68c6a628643f37aed.jpg)

**嘿！大获全胜，给力！**

::: center

![](https://blog.images.bornforthis.cn/docs-images/sha256/bc/bce797ed621649caddbab05bff94ffdc344a08614a78230e4c6d3575d921552a.jpg)

:::

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
