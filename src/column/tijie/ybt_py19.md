---
title: 01-字符三角形
date: 2022-12-12 21:32:28
author: AI悦创
isOriginal: true
category: 
    - 一本通 Python 题解
    - 华为机考
    - 华为机考内部题目
tag:
    - 一本通 Python 题解
    - 华为机考
    - 华为机考内部题目
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

给定一个字符，用它构造一个底边长5个字符，高3个字符的等腰字符三角形。

## 【输入】

输入只有一行， 包含一个字符。

## 【输出】

该字符构成的等腰三角形，底边长5个字符，高3个字符。

## 【输入样例】

```python
#
```

## 【输出样例】

```python
  #
 ###
#####
```

## 答案

```python
a = input()
print("  " + a)
print(" " + a*3)
print(a*5)
```

## 学员代码「仅供参考」

::: details Dannie

```python
a = str(input())
print("  ",a)
print("",a,a,a)
print(a,a,a,a,a)
```

修订后的代码

```python
a = str(input())
print(" ", a)
print(" ", a, a, a, sep="")
print(a, a, a, a, a, sep="")
```

:::

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





