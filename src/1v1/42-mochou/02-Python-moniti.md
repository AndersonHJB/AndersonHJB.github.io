---
title: 2023 年 NOC 初赛-Python 模拟练习题(初中组-卷 1)
date: 2023-05-13 08:28:55
author: AI悦创
isOriginal: true
category: 
    - NOC
    - NOC 初赛
    - NOC Python辅导
    - NOC Python一对一辅导
    - Python NOC辅导
tag:
    - NOC
    - NOC 初赛
    - NOC Python辅导
    - NOC Python一对一辅导
    - Python NOC辅导
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

## 一、单选题

::: tabs

@tab 题目

1. 以下哪种输入结果不可能得到以下反馈: `重要的事情说三遍:安全第一!安全第一!安全第一!`( )

A、`print("重要事情说三遍:"+"安全第一!"*3)`

B、`print("重要事情说三遍:"+"安全第一!“+”安全第一!"*2)`

C、`print("重要事情说三遍:"+"安全第一!"+"安全第一!"+"安全第一!")`

D、`print("重要事情说三遍:"+"安全第一!"/3)`

@tab 解析

A: `print("重要事情说三遍:"+"安全第一!"*3)` 这个选项会输出 `重要的事情说三遍:安全第一!安全第一!安全第一!`，因为字符串 `"安全第一!"` 重复了3次。

B: `print("重要事情说三遍:"+"安全第一!“+”安全第一!"*2)` 这个选项也会输出 `重要的事情说三遍:安全第一!安全第一!安全第一!`，因为字符串 `"安全第一!"` 加上字符串 `"安全第一!"` 重复2次。

C: `print("重要事情说三遍:"+"安全第一!"+"安全第一!"+"安全第一!")` 这个选项同样会输出 `重要的事情说三遍:安全第一!安全第一!安全第一!`，因为字符串 `"安全第一!"` 连续拼接了3次。

D: `print("重要事情说三遍:"+"安全第一!"/3)` 这个选项会抛出一个错误，因为字符串不能直接与数字进行除法运算。所以，这个选项无法得到期望的输出。

综上，选项D不可能得到 `重要的事情说三遍:安全第一!安全第一!安全第一!` 的输出。

:::

2. 运行下列程序后，绘制出以下哪个图形?( )

```python
import turtle

turtle.pensize(3)
turtle.forward(150)
turtle.circle(50, 180)
turtle.forward(180)
turtle.circle(48, 180)
turtle.forward(150)
turtle.circle(45, 180)
turtle.forward(120)
turtle.done()
```













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



