---
title: 01-变量专项练习
date: 2022-05-20 10:35:00
author: AI悦创
isOriginal: true
category: Python 私教练习题【基础】
tag:
    - Python 基础练习题
icon: python
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
editLink: true
prev: special_for.md
next: special_yunsuanfu.md
backToTop: true
toc: true
---

## 1. 交换果汁

假如你有两个小孩，哥哥叫：Austin，弟弟叫：Jaden。

Austin 想喝**果汁**，Jaden 想喝**可乐**。**哥哥和弟弟都有专属的杯子，不喜欢用对方的杯子。**

家中仅剩一杯果汁、一杯可乐，你不小心把哥哥的杯子装了可乐，弟弟的杯子装了果汁。

**问：如何交换哥哥与弟弟杯中的果汁？**

::: info zh

Suppose you have two children, the elder brother is named Austin, and  the younger brother is named Jaden. Austin wants to drink juice, and  Jaden wants to drink cola. Both brothers have their own exclusive cups  and don't like to use each other's cups. There is only one cup of juice  and one cup of cola left at home, and you accidentally filled the elder  brother's cup with cola and the younger brother's cup with juice. How  can you swap the juice in the brothers' cups?

:::

::: code-tabs

@tab 样例代码

```python
Austin = "Coke"  # 该赋值可以理解为倒果汁的过程
Jaden = "juice"  # 该赋值可以理解为倒果汁的过程
print("Austin", Austin)
print("Jaden", Jaden)
# 待补充代码
print("Austin", Austin)
print("Jaden", Jaden)
```

输出结果如下：

```python
Austin Coke
Jaden juice
-------------
Austin juice
Jaden Coke
```

@tab 提示

```text
两种方法思路：

方法一： 联想现实生活，现实生活中你会如何解决？

> 现实生活中，我想你会引入一个空杯子来操作，那你会如何操作？思考后再思考代码中如何实现？

方法二： Python 多个变量赋予不同值。
a, b, c = 1, 2, 3
```

@tab answer１

```python
Austin = "Coke"
Jaden = "juice"
print("Austin", Austin)
print("Jaden", Jaden)
Empty_cup = Austin
Austin = Jaden
Jaden = Empty_cup
print("-" * 12)
print("Austin", Austin)
print("Jaden", Jaden)
```

@tab answer2

```python
Austin = "Coke"
Jaden = "juice"
print("Austin", Austin)
print("Jaden", Jaden)
Austin, Jaden = Jaden, Austin
print("-" * 12)
print("Austin", Austin)
print("Jaden", Jaden)
```

:::

:::: caution 警告！！！

::: details 不要出现如下方法！！！

```python
Austin = "Coke"
Jaden = "juice"
print("Austin", Austin)
print("Jaden", Jaden)
# 待补充代码
print("Austin", Jaden)
print("Jaden", Austin)
```

:::

::::

## 2. 创建变量并输出

1. 输出效果：

```python
Austin Jaden Alex Cava
```

2. 输出效果如下：

```python
Austin$Jaden$Alex$Cava%
```



::: info 悦创金句

程序员就是连接人与机器之间的桥梁——AI悦创

:::

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

