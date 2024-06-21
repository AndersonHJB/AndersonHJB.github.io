---
title: 09-数据统计
date: 2022-08-09 13:33:43
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

输入一些整数，求出它们的最小值、最大值和平均值（保留3位小数）。输入保证这些数都是不超过1000的整数。

## 【输入】

一行，若干个整数。

## 【输出】

一行，即，最小值、最大值和平均值（保留3位小数）。

## 【输入样例】

```
1 2 3
```

## 【输出样例】

```
1 3 2.000
```

## 代码

```python
s = input().split()
# 最小值、最大值和平均值
l = []
for i in s:
    l.append(int(i))
print(min(l), end=" ")
print(max(l), end=" ")
print("%.3f" % (sum(l) / len(l)))
# print()
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





