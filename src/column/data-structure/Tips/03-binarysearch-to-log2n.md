---
title: 03-二分查找的对半为何对应log2n
date: 2023-12-23 18:34:15
author: AI悦创
isOriginal: true
icon: shujujiegou-01
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

## 对数的定义

对数是指数的逆运算。举个例子，如果我们有 $2^3 = 8$，那么我们可以说 $\log_2 8 = 3$。这里的意思是“2需要乘以自己多少次才能得到8？”答案是3次。

## 二分查找的工作原理

在二分查找中，我们每次将搜索范围减少一半。假设我们有一个包含 $n$ 个元素的有序数组，我们要查找一个特定的元素。

1. 在第一步中，我们检查中间的元素。此时，搜索范围是整个数组，即 $n$ 个元素。
2. 如果我们没有找到元素，我们排除一半的元素，剩下 $\frac{n}{2}$ 个元素。
3. 如果在下一步中仍未找到，我们再次减半，剩下 $\frac{n}{4}$ 个元素，依此类推。

## 对应到对数时间复杂度

我们的目标是确定需要多少步骤才能将初始的 $n$ 个元素减少到1（或者减少到我们找到我们的目标元素）。每一步都将搜索范围减半，所以问题变成了：“我们需要将 $n$ 除以2多少次才能得到1？”

这正是对数运算的定义。在这种情况下，我们正在问 $\log_2 n$ 是多少。因此，二分查找的时间复杂度为 $O(\log n)$（这里的底数2通常省略，因为在大O记法中，底数不影响复杂度的类别）。



















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
