---
title: 03-网购笔记本(粤教)
date: 2022-07-14 20:02:02
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

某小组决定网购单价为1元至10元的十种笔记本各一本，求一共要花多少钱?

### 【输入】

(无)

### 【输出】

一行一个整数，表示答案。

## 【输入样例】

```python
(无)
```

## 【输出样例】

```python
(无)
```

## 解析

程序需要有一个循环变量从 1 变化到 10，将该变量设为 i，i 每次加到累加和 sum 中；变量 i 每增加 1 时，就和变量 sum 进行一次加法运算，变量 sum 记录的是累加的结果。

## 代码

```python
sum_num = 0
# 枚举 i 是 1～10 之间的数
for i in range(1, 11):
	sum_num += i
print(sum_num)
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





