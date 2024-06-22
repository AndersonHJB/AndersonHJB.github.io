---
title: COMP10002 2023 Semester 期中模拟题
date: 2023-08-28 15:19:19
author: AI悦创
isOriginal: true
category: 
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
tag:
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
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
editLink: false
backToTop: true
toc: true
---

## 1. Question 1

请给出以下 C 语言表达式的值和类型。如果你认为根据 C 的规则这个表达式是非法的，请在框内写上"错误"。

a. `13+25%4*3`

答案:

::: details Answer

值: 16

类型: int 

解释:

取模运算 (`%`) 的优先级高于加法。所以，25 % 4 是 1。 

1 乘以 3 是 3。

13 + 3 = 16。

:::

b. `6-2*5/4/2.5`

::: details Answer

答案:

值: 5.0

类型: double

解释:

乘法 (`*`) 和除法 (`/`) 的优先级高于减法。 

2 乘以 5 是 10。 

10 除以 4 是 2.5。

2.5 除以 2.5 是 1。

6 - 1 = 5。

:::

c. `-7*!2+4<=5`

::: details Answer

答案:
值: 1
类型: int

解释:
逻辑非 (`!`) 运算首先被执行。`!2` 是 0，因为任何非零值在C中都被视为真，其否定是假 (也就是 0)。
接下来是乘法: -7 乘以 0 是 0。
然后是加法: 0 + 4 是 4。
最后，小于或等于 (`<=`) 运算: 4 确实小于或等于 5，所以该表达式为真，返回值为 1。

:::

d. `12>=11>10`

::: details Answer

答案: 0

解释:

在 C 语言中，关系运算符可以从左到右链接。这与一些其他语言（例如 Python）不同，其中这种表达式将被视为错误。对于这样的表达式在 C 中，我们可以分解它：

`12>=11>10`

可以被分解为：

`(12>=11) > 10`

首先，我们计算内部的关系表达式：

`12>=11` 返回 `1` (在C中，真为 `1`)

然后，我们有：

`1 > 10`

这返回 `0` （在C中，假为 `0`）。

所以，`12>=11>10` 在C中的值是 `0`，类型是 `int`。

:::





::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
