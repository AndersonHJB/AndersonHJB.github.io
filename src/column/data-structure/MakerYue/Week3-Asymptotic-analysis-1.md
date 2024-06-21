---
title: Week3：渐进分析1
icon: shujujiegou-01
date: 2024-01-18 09:47:01
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

::: warning 

本系列，你可以在我网站免费学习，但是切勿 copy 分发。本系列为书稿，我的爬虫系统会全天检索。被我找到，我必维权和告之，不死不休。

你学习本系列有问题，可以评论区和加我微信，拉你进交流群。微信：Jiabcdefh

:::

你好，我是悦创。

今天的话题，会有有些枯燥：使用渐进分析，我们就可以判断一段代码是高效率还是低效率。

在上节课，我们特意创建了一个使用 Python 列表创建的 set ADT。但是我们也知道，那是非常低效的代码。这种实现方法可以，但是运行的不快。

美国有句老话：An engineer will do for a dime what any fool will do for a dollar.

> 工程师与傻瓜相比，其高明之处在于能省钱省力。

这句话的意思是：有些事情，很多人都有能力做，比如修水管、安装房子的大门或者修车，但是只有一部分人，真正能称得上做得好。编程也是这样，任何人，哪怕只有非常基础的编程知识，都能写出非常庞大的程序。但你会发现，缺少专业知识的人，只能写出不好的代码。

——什么样的代码算不好的呢？

「数据结构不佳的代码，就是不好。」

这样的代码会非常复杂，很难读懂。运行起来缓慢，占内存大。

反之，如果你养成了很好的编程习惯，你就能写出运用正确数据结构的代码。

这样的代码简单优雅，运行起来非常快捷。占用合理的内存大小，我把数据结构拿到最前面讲，是有原因的。——这是写好代码的最重要的环节之一。

如果数据结构不错，代码就更容易写。更有效率，人生都美好了。

比如：我们之前看到用 Python 列表数据结构，建立抽象数据类型的集。「人生太痛苦了」

我们今天要学习一种叫做 Big-Theta，一种严密的方法，并以此来判断。

一段代码运行起来，是快是慢。

这种方法必须在数学上具有严密性。













欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
