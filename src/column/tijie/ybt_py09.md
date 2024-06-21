---
title: 05-区间测速2(浙版)
date: 2022-07-13 20:26:44
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

现有两个相距 25km 的监测点，给定汽车经过两个监测点的时间。请判断汽车是否超速，以及超速的严重程度。

### 【输入】

一个整数 t，表示汽车经过两个监测点的时间差是 t 秒。

### 【输出】

输出有两行。第一行输出平均车速，用 `round()` 函数保留一位小数。

第二行判断超速情况。如果汽车没有超速，则输出“正常”；否则根据情况输出：

(1)、`100<v<120`，输出“超过规定时速且不足20%”

(2)、`120≤v<150`，输出 “超过规定时速20%以上且不足50%”

(3)、`150≤v<170`，输出  “超过规定时速50%以上且不足70%”

(4)、`v≥170`，输出“超过规定时速70%以上”。

## 【输入样例】

```python
720
```

## 【输出样例】

```python
125.0 
超过规定时速20%以上且不足50%
```

## 答案

```python
s = 25  # 两个监测点相距 25km
t = int(input())  # 输入通过监测点的时间
# v = s / t
# 1h = 60min
# 1min = 60s
# 1h = 3600s
# s -> h = t / 3600
v = s * 3600 / t  # 3600 是秒和小时的单位换算系数
# v1 = s / (t / 3600)
# print(v, v1)
print(round(v, 1))
if v <= 100:  # 车速小于等于 100 千米/时
	print("正常")
elif v < 120:
	print("超过规定时速且不足20%")
elif v < 150:
	print("超过规定时速20%以上且不足50%")
elif v < 170:
	print("超过规定时速50%以上且不足70%")
else:
	print("超过规定时速70%以上")
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





