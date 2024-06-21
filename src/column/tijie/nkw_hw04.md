---
title: 04-HJ4 字符串分隔
date: 2022-06-25 08:10:01
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

- 输入一个字符串，请按长度为 8 拆分每个输入字符串并进行输出；

- 长度不是 8 整数倍的字符串请在后面补数字 0，空字符串不处理。

### 输入描述：

连续输入字符串(每个字符串长度小于等于100)

### 输出描述：

依次输出所有分割后的长度为 8 的新字符串

## 示例1

### 输入：

```python
abc
```

### 输出：

```python
abc00000
```

## 答案

```python
s = input()
while True:
    length_s = len(s)
    if not s:
        break
    elif length_s <= 8:
        num_0 = 8 - length_s
        s += num_0 * "0"
        print(s)
        break
    else:
        select = s[:8]
        print(select)
        s = s.replace(select, "")
```

```python
while True:
    try:
        l = input()
        for i in range(0, len(l), 8):
            print("{0:0<8s}".format(l[i:i+8]))
    except:
        break
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





