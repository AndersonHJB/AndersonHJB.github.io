---
title: 04-判断闰年(粤版)
date: 2022-07-13 20:02:56
author: AI悦创
isOriginal: true
category: 一本通 Python 题解
tag:
    - 一本通 Python 题解
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

给出年份 x，判断是否是闰年。是闰年则输出“x年是闰年”，否则输出“x年不是闰年”。

### 【输入】

一个整数表示年份 x

### 【输出】

是闰年则输出“x年是闰年”，否则输出“x年不是闰年”。

## 【输入样例】

```python
1996
```

## 【输出样例】

```python
1996年是闰年
```

## 题目分析

闰年是 4 的倍数并且遇到整百的年份时，闰年是 400 的倍数。

> 普通闰年：公历年份是4的倍数，且不是100的倍数的，为闰年（如2004年、2020年等就是闰年）。
>
> 世纪闰年：公历年份是整百数的，必须是400的倍数才是闰年（如1900年不是闰年，2000年是闰年）。

## 答案

```python
# 输入给定 1 个整数 n
x = int(input())
if x % 400 == 0 or (x % 100 > 0 and x % 4 == 0):  # 判断是否为闰年
    print("%d年是闰年" % x)
else:
    print("%d年不是闰年" % x)
```

```python
# 输入给定 1 个整数 n
x = int(input())
if x % 400 == 0 or (x % 100 > 0 and x % 4 == 0):  # 判断是否为闰年
    print("{}年是闰年".format(x))
else:
    print("{}年不是闰年".format(x))
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





