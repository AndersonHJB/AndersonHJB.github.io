---
title: Math 1MP3 * Assignment 3
icon: python
date: 2023-11-28 11:13:22
author: AI悦创
isOriginal: true
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

Given two dictionaries `d1` and `d2`, create a new dictionary `d3` according to the fol-lowing rule (think of transitivity): the entry a:c is in `d3` if and only if there is an entry `a:b` in d1, and an entry `b:c` in `d2`.

Forinstance: if `d1={2: 3,8: 19,6: 4,5: 3}` and `d2={2: 5,4: 3,3: 9}` your code should create the dictionary `d3={2 : 9, 6 : 3, 5 : 9}`.

```python
#Question 5

def transitive_dict(d1,d2):
    """ create a dictionary by transitivity
    """
  



    
print(transitive_dict({2:3, 8:19, 6:4, 5:3},{2:5, 4:3, 3:9}))  #should return {2: 9, 6: 3, 5: 9}
print(transitive_dict({2:3, 6:4, 5:3},{2:5, 6:9}))  #should return empty dictionary  
print(transitive_dict({2:3, 3:3, 4:3},{3:2, 5:3, 6:9}))  #should return {2: 2, 3: 2, 4: 2}
```







创建一个函数 opt_num，获取用户输入 num1 和 num2，num1 和 num2 分别为列表，用户必须传入参数 num1，num2 参数传入可选（可以传入也可以不传入，num2 默认 [1, 2, 3, 4]。得到结果为两个列表内部各个元素平方之后的拼接。

[1, 2, 3] [3, 4, 5]

[1, 4, 9, 9, 16, 25]











::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
