---
title: 02-飞船速度(教科)
date: 2022-07-12 19:21:47
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

当飞船的速度大等于 7.91 千米/秒时飞船能成功飞行，给出飞船速度，请判断飞船是否能够成功飞行。

### 【输入】

一个实数 x，表示飞船速度是 x 千米/秒。

### 【输出】

如果飞船能成功飞行，则输出“飞船成功飞行！”，否则输出“飞船不能升空！”

## 【输入样例】

```python
8.01
```

## 【输出样例】

```python
飞船成功飞行！
```

## 代码

```python
v = float(input())  # 输入飞船速度
if v >= 7.91:  # 判断飞船能否飞行成功的速度
	print("飞船成功飞行!")
else:
	print("飞行不能升空!")
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





