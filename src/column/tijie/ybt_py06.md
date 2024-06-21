---
title: 03-最大优惠价(粤版)
date: 2022-07-12 19:22:48
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

三款笔记本的优惠价不同，请给出优惠价最大值。

### 【输入】

一行三个实数，分别表示三款笔记本的优惠价。

### 【输出】

输出一个实数，表示优惠价最大值。

## 【输入样例】

```python
32.5 63.4 78
```

## 【输出样例】

```python
78.0
```

## 代码

```python
# 读入一行字符串，split() 将字符串以空格分开
a, b, c = input().split()
# float(a) 将字符串 a 转化为浮点数
a, b, c = float(a), float(b), float(c)
if a > b:  # 比较 a, b 价钱，大的赋值给 m
	m = a
else:
	m = b

if c > m:  # 若 c 比 a, b 大，则 m 等于 c
	m = c
print(m)
```

```python
a, b, c = input().split()  # 列表->
a, b, c = float(a), float(b), float(c)

max_num = a  # 存最大值

# if max_num > b:
# 	pass
# elif max_num < b:
# 	max_num = b
if max_num < b:
	max_num = b
if max_num < c:
	max_num = c
print(max_num)
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





