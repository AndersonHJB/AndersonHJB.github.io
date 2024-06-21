---
title: 08-【例4.7】数字反转(沪版)
date: 2022-07-20 20:00:07
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

给定一个正整数，请将该数各位上数字反转得到一个新数。得到的新数的最高位数字不应为零，例如输入380，反转后得到的新数为83。

### 【输入】

一行一个正整数。

### 【输出】

一行一个正整数，表示反转后的新数。

## 【输入样例】

```
726
```

## 【输出样例】

```
627 
```

## 代码「耍流氓代码」

```python
n = input()
n = int(n[::-1])
print(n)
```

## 正常考点代码

每次将原数对 10 取模，可以求出末位数，并除 10 取整消除末位数。

将新数 10 + 此数，即可将其添加至新数末尾，反复执行至原数为 0 即可。

```python
num = int(input())
# reverseNum 是逆序数
reverseNum = 0
while num > 0:
    # 取出 num 的最后一位，放在 reverseNum 的末尾
    reverseNum = reverseNum * 10 + num % 10
    num = num // 10
print(reverseNum)
```

## 作业

```python
scorels = {
    'Homer': [3, 7, 15, 13],
    'Maggie': [20, 23, 25, 20],
    'Bart': [12, 5, 8, 7],
    "Herman": [21, 23, 22, 24]
}
# 1. 求每个学员的平均分。
# 2. 输出整体平均分。
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





