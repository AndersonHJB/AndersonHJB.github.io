---
title: 01-猜数游戏(浙版)
date: 2022-07-12 19:22:05
author: AI悦创
isOriginal: true
icon: code
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

## 【题目描述】

请设计一个猜数游戏平台，有两个玩家 Alice 和 Bob。Alice 给定一个数，请 Bob 猜这个数是多少。猜数方法是交互的：Bob 输入猜测的数字，平台给出相应的提示：“偏大”“偏小”或“正确”。若所猜数字正确，则游戏结束；否则继续猜数。

请你实现这个猜数游戏平台。

### 【输入】

第一行输入一个数，表示 Alice 给定的数。

接着输入若干行，表示 Bob 的猜数过程。每行一个整数，表示 Bob 猜测的数字。

### 【输出】

对于每一行输入，输出一行。输出偏大”“偏小”或“正确”。

## 【输入样例】

```python
23
300
20
100
25
23
```

### 【输出样例】

```python
偏大
偏小
偏大
偏大
正确
```

## 代码

```python
number = int(input())
running = False
while not running:
    # Bob 猜测数字 guess
    guess = int(input())
    if guess == number:
        print("正确")
        running = True
    elif guess < number:
        print("偏小")
    else:
        print("偏大")
```



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发，华为 Python 机试」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)





