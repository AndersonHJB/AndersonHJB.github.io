---
title: 06-练4.3 输出奇偶数之和
date: 2022-07-20 19:40:41
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

利用 for 循环，分别输出 `1∼n` 之间的所有奇数的和、偶数的和。

### 【输入】

输入 n。

### 【输出】

输出为一行，两个数(用一个空格隔开)，偶数之和与奇数之和。

## 【输入样例】

```python
10
```

## 【输出样例】

```python
30 25
```

## 代码

```python
n = int(input())
even_number = 0
odd_number = 0
for i in range(1, n + 1):
    if i % 2 == 0:
        even_number += i
    else:
        odd_number += i
print(even_number, odd_number)
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





