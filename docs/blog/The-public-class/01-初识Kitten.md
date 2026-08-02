---
title: 01-初识Kitten「公益直播课」
date: 2022-11-06 10:05:27
author: AI悦创
isOriginal: true
icon: network
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

## 目录

- 图形化编程的起源与发展
- 认识源码编辑器 Kitten
- 如何利用 Kitten 创建作品

## 图形化编程的起源与发展

你好，我是悦创。

20 世纪 60 年代，美国麻省理工学院，人工智能实验室的西蒙·派普特 Seymour Papert（1928～2016）专为孩子们设计了一门叫：LOGO 的计算机语言。**LOGO 语言是一种易懂易学的结构化程序设计语言**

> **Logo** 是一种计算机[程式设计语言](https://zh.m.wikipedia.org/wiki/程序设计语言)，在 1966 年由[西摩尔·派普特](https://zh.m.wikipedia.org/wiki/西摩爾·派普特)和 Wally Feurzeig 设计[[2\]](https://zh.m.wikipedia.org/zh-hans/Logo_(程序语言)#cite_note-2)，Logo 一词源自希腊语[逻各斯](https://zh.m.wikipedia.org/wiki/邏各斯)（logos）。Logo 是一种[直译语言](https://zh.m.wikipedia.org/wiki/直譯語言)，和其他语言不同的是，它内置一套海龟绘图（Turtle Graphics）系统[[3\]](https://zh.m.wikipedia.org/zh-hans/Logo_(程序语言)#cite_note-mit.edu-3)，通过向海龟发送命令，用户可以直观地学习程序的运行过程，因此很适于初学者特别是儿童学习程序设计。
>
> Logo 的[原型](https://zh.m.wikipedia.org/wiki/原型)来自另一个计算机语言[LISP](https://zh.m.wikipedia.org/wiki/LISP)[[4\]](https://zh.m.wikipedia.org/zh-hans/Logo_(程序语言)#cite_note-cslsPreface-4)，派普特修改了 LISP 的[语法](https://zh.m.wikipedia.org/wiki/语法)使其更易于阅读。Logo 常被称作没有括号的 Lisp。Logo 继承了 Lisp 的“表”的概念，所以在函数处理等方面拥有强大的能力，也是有特殊需求的计算机科学家的好帮手[[5\]](https://zh.m.wikipedia.org/zh-hans/Logo_(程序语言)#cite_note-csls-5)。

目的在于枯燥的编程语言，形象化给小朋友们带来。

![image-20221106101334491](https://blog.images.bornforthis.cn/docs-images/sha256/23/235126f753cef79351c82dda9bc9577d7825f85de49f750a82e3f0270262addf.png)

希望学生不要机械的记忆事实，希望掌握一些原始语言命令的之后，进行探索学习。通过操作屏幕上的海龟来编写程序。

强调学生计算思维和有趣的学习体验。

它具有三部分功能：

1. 编辑功能「命令与过程的编辑，使学生了解成年人，如何通过文字编辑工作的。」
2. 驱使海龟移动「绘出各种海龟的功能」

![1968年发明LOGO语言](https://blog.images.bornforthis.cn/docs-images/sha256/c8/c8359a33f05bb275aa9a62f1a32eeb17478c0754b42b3a718cada4b6eba8b162.png)

3. 制表处理 and 数值处理的功能

## 图形化编程语言进一步降低了学生学习编程的门槛

1984年时任乐高 CEO，在电视上看见了西蒙·派普特的采访节目，当时西蒙·派普特在电视中演示实体海龟，乐高 CEO 认为，LOGO 海龟和乐高的产品哲学有相通之处，二者如果能结合起来，肯定是个不错的新产品。

在与乐高接洽后，西蒙·派普特提出了一个与以往不同的想法。——能够创建一个替代电脑的乐高零部件。一个不仅具有计算功能，又能跟乐高一样小巧，且足够便宜的零部件。在当时，这是一个巨大的挑战。然而，这也将是一个巨大革命式的创新。

这个设想，直到 1998年才得已实现。那年，乐高发布了全新的可编程机器人产品：

![img](https://blog.images.bornforthis.cn/docs-images/sha256/98/982400dac6d261b2cac835025a18e041be3093a194d2e46bf5dccd84d0e0836d.jpeg)

为了纪念西蒙·派普特，用了他思维风暴的书名，做了注册商标，从此乐高掀起了全球机器人风暴。

在 80 年代，同样收到 西蒙·派普特启发的还有一个青年记者，一次偶然的机会，他听到了西蒙·派普特的演讲，也由此改变了他对计算机的认知。

第二年，这个年轻记者拿着 MIT 的奖学金，参加了西蒙·派普特的研讨班，这个青年记者，就是后来的 Scratch 之父米切尔·瑞斯尼克

![img](https://blog.images.bornforthis.cn/docs-images/sha256/39/3961e8948ba1707fbeefa309c6a9f7f4eaaaefc6bd3d569954eee559c1978fe0.png)



<img src="https://blog.images.bornforthis.cn/docs-images/sha256/49/49f93222723512bdf468e304f05d47eb87cd5d13a77a3a24156c726a9496ccd2.jpeg" alt="img" style="zoom:33%;" />

工具的进步让越来越多的孩子学习编程：

![image-20221106121853619](https://blog.images.bornforthis.cn/docs-images/sha256/cd/cdeaafa9f228c71f369fb910ccdab73cc4556f992910e5b40ff625a9f191c426.png)

![image-20221106122204671](https://blog.images.bornforthis.cn/docs-images/sha256/2f/2fb5352d1c664bc2c983d7b023aedd57216fb76a732d39cbd2214959918e3105.png)

很多图形化编程平台，都是基于谷歌 Blockly。

## Kitten

![源码编辑器 Kitten](https://blog.images.bornforthis.cn/docs-images/sha256/52/528c8d13ad828eb521f794f36d79454626d4a65edbf3a55684018d28eabef196.png)

![1](https://blog.images.bornforthis.cn/docs-images/sha256/4d/4dbd2a2804ec3a673b2284f2fd7645a8cd16bf427012a4af035f6342a1851bbe.gif)

Kitten 是点猫科技自主研发的一款面向青少儿的图形化编程工具，于 2015 年发布。用鼠标拖到程序模块到脚本区并进行组合，就能进行编程，可以创作游戏、音乐、动画、故事等。

![image-20221106122604113](https://blog.images.bornforthis.cn/docs-images/sha256/2f/2f9040f16e92340a384d3317c09d79877664cad03d2ed414ae3540d6a40aaa3f.png)

> 其实，很多时候 Scratch 也是足够使用的，我个人还是挺推荐直接使用 Scratch。竞赛啥的，大部分也是直接操作 Scratch。

- [https://scratch.mit.edu/](https://scratch.mit.edu/)

## Kitten 的不同版本

- Kitten2.0：[https://old-kitten.codemao.cn](https://old-kitten.codemao.cn)

![img](https://blog.images.bornforthis.cn/docs-images/sha256/d2/d20506ef05ea18a8f97d8c6153ef50e0127b902eff97696d532646d2f449f5d1.png)

- Kitten3.0：[https://kitten.codemao.cn](https://kitten.codemao.cn)

![image-20221106123048519](https://blog.images.bornforthis.cn/docs-images/sha256/45/4576471d903ebc2e0b0f813d7a01eb6ffc633e58a65a81ce5dc2312ace022a1e.png)

![image-20221106123111628](https://blog.images.bornforthis.cn/docs-images/sha256/84/84b11aeda1d0485822e841cc29d03e97fe3ec9a6f83d35ba0342a43fd1878b9d.png)

## 源码编辑器介绍

![image-20221106123200416](https://blog.images.bornforthis.cn/docs-images/sha256/4e/4e7ccc9a1e969ad7784714628c9a2e37fb97f92e9ad974ed53dbb372f04dce81.png)



- 事件：程序（效果）的开始、暂停和结束
- 控制：控制运行流程
- 侦测：返回侦测的结果
- 数据：变量、列表
- 函数：自定义

**相似功能的积木放在同一个分类里，并且同一个分类下的积木颜色相同。**



## 如何利用 Kitten 创建作品

1. 新建空白作品
2. 添加背景
3. 添加角色
4. 添加声音

![img](https://blog.images.bornforthis.cn/docs-images/sha256/16/164209df5ea486a4bbf7154a6308156729424f227b9c869359bd2e2173852052.png)

> 01.脚本区-声音；02.音乐画板-创作-保存；0.3素材库

5. 画板绘制图形「画板-绘制-保存（角色）」
6. 添加造型

![img](https://blog.images.bornforthis.cn/docs-images/sha256/3c/3cfb8c36340e17e8d52a572afa2c8751df806e82f984d7b6445b1fc1021a0359.png)

> 脚本区-造型区-添加/绘制/导入

7. 保存和分享

![img](https://blog.images.bornforthis.cn/docs-images/sha256/21/218ce35c24b3c18ca7c135f96cf012f241b97454edeb0a7f314c89b5e89c695b.png)

![img](https://blog.images.bornforthis.cn/docs-images/sha256/27/27033a30418b75d03c67a8e6f46761962a0a06526e954fdf51f8f32be4f3d9a0.png)

![img](https://blog.images.bornforthis.cn/docs-images/sha256/5b/5b3ad1613caaab7966e759c6f788f78d240417130a86b13d732946eca2626b71.png)

> 菜单栏-手机图标-扫码-分享作品

8. 打开与拖入

![img](https://blog.images.bornforthis.cn/docs-images/sha256/14/1400478246f90db8d00a13b24b9be8d13c1f11d852b04fa0b970882d9ecd2194.png)

> 菜单栏-文件-打开/打开本地作品

![img](https://blog.images.bornforthis.cn/docs-images/sha256/5a/5a3f1093a6a1c328c405b4bf90071ed3e96389abf909b702273c40cf96ddb3a5.png)

> 快捷操作-拖入图片/bcm文件

## 练一练

新建空白作品，添加任意角色和背景，给角色添加脚本，实现任意效果

![img](https://blog.images.bornforthis.cn/docs-images/sha256/c1/c1d2a4646665d78042bb243f82921e94c8fc2e667108c11ea3860a8bab3eb0b8.gif)





## 课程回放&课程资源

- [https://www.yuque.com/aiyuechuang/scratch](https://www.yuque.com/aiyuechuang/scratch)



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
