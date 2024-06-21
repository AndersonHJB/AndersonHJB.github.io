---
title: 02-HJ2 计算某字符出现次数
date: 2022-06-24 17:12:10
author: AI悦创
isOriginal: true
category: 华为机试题解
tag:
    - 华为机试题解
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

## 描述

写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字符，然后输出输入字符串中该字符的出现次数。（不区分大小写字母）

数据范围： 1≤n≤1000 

### 输入描述：

第一行输入一个由字母和数字以及空格组成的字符串，第二行输入一个字符。

### 输出描述：

输出输入字符串中含有该字符的个数。（不区分大小写字母）

## 示例1

### 输入：

```python
ABCabc
A
```

### 输出：

```python
2
```

## 链接

[https://www.nowcoder.com/practice/a35ce98431874e3a820dbe4b2d0508b1](https://www.nowcoder.com/practice/a35ce98431874e3a820dbe4b2d0508b1)

## 答案

```python
s1 = input().lower()
s2 = input().lower()
print(s1.count(s2))
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





