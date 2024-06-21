---
title: 06-练3.3最适宜运动心率2(科教)
date: 2022-07-14 19:35:11
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

最适宜运动心率的公式有性别差异，试问最适宜运动心率？

男性最适宜运动心率 = (220-年龄-安静心率)×(60%~80%)+安静心率

女性最适宜运动心率 = (210-年龄-安静心率)×(60%~80%)+安静心率

### 【输入】

三行，第一行输入年龄（实数），第二行输入安静心率（实数）,第三行输入“male”或“female”表示性别。

### 【输出】

输出最适宜的运动心率的范围。

## 【输入样例】

```python
16
71 
male
```

## 【输出样例】

```python
150.8~177.4
```

## 代码

```python
age = float(input())  # 输入年龄
HRrest = float(input())  # 输入安静心率
gender = input()  # 输入性别
if gender == "male":  # 性别是否是男性 male
	low = (220 - age - HRrest) * 0.6 + HRrest  # 计算男性 male 最适宜运动心率低值
	high = (220 - age - HRrest) * 0.8 + HRrest  # 计算男性 male 最适宜运动心率高值
else:
	low = (210 - age - HRrest) * 0.6 + HRrest  # 计算女性 female 最适宜运动心率低值
	high = (210 - age - HRrest) * 0.8 + HRrest  # 计算女性 female 最适宜运动心率高值
print(low, high, sep="~")  # 输出最适合运动心率的范围
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





