---
title: 04-【例4.3】温度对应表1(沪版)
date: 2022-07-14 20:16:25
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

计算华氏100度到105度所对应的摄氏温度。精确到小数点后2位。

换算公式 C=5×(F−32)÷9(其中C表示摄氏温度，F表示华氏温度)。

### 【输入】

(无)

### 【输出】

若干行每行两个数，表示华氏温度（整数，占8个字符宽度）与摄氏温度（占10个字符宽度，保留两位小数）。

## 【输入样例】

```
（无）
```

## 【输出样例】

```
     100     37.78
     101     38.33
     102     38.89
     103     39.44
     104     40.00
     105     40.56
```

## 解析

for 循环枚举摄氏温度，并运用公式换算即可。

## 代码

```python
for f in range(100, 106):
	c = 5 * (f - 32) / 9
	print("%8.0f%10.2f" % (f, c))
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





