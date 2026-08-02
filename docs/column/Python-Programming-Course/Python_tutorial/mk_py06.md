---
title: 06-一串数据怎么存—列表和字符串
date: 2022-07-17 22:29:59
author: AI悦创
isOriginal: true
category: Python 合集
tag:
    - Python 合集
icon: python
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true

prev: mk_py05.md
next: mk_py07.md
backToTop: true
toc: true
---

![img](https://blog.images.bornforthis.cn/docs-images/sha256/c0/c0fe614e2dd60918bc2350ffc844670c046566094dde2cb9228b48ad7c8857d6.jpg)

> 知识犹如人体的血液一样宝贵。——高士其

上一节中讲了数据类型，有一个问题，之前所介绍的数据类型大多是用来表示单个数据的。比如整数型，一个整数型的变量只能保存一个整数。又如布尔型，一个布尔型的变量只能保存一个布尔值。浮点型和 None 型也是如此。要是此刻有一系列的数据，那该怎么在程序里保存和使用呢？

举个栗子：当我的只有一个电话号码的时候，我可以使用整数型来表示，并保存在变量里：

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
