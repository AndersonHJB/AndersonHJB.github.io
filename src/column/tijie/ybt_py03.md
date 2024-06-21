---
title: 01-购买笔记本(粤版)
date: 2022-07-06 19:41:51
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

某商店笔记本有促销活动，规定购买 6 本以上（含 6 本）10 本以下（含 10 本）打九折，购买 11 本以上（含 11 本）打八折。给定笔记本单价和购买数量，请问购买总费用。

### 【输入】

第一行一个整数 s，表示购买 s 本笔记本。

第二行一个实数 p，表示笔记本单价是 p。

### 【输出】

输出一行，表示总费用。保留小数点后一位。

### 【输入样例】

```python
100 3.2
```

### 【输出样例】

```python
256.0
```

## 代码

```python
s = int(input())
p = float(input())

if s < 6:
    j = 1.0
elif s <= 10:
    j = 0.9
else:
    j = 0.8
# 数量*单价*打折数
t = s * p * j
print("%.1f" %t)
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





