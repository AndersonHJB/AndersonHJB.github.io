---
title: Python字典推导式详解与应用实例
icon: python
date: 2023-10-07 21:57:51
author: AI悦创
isOriginal: true
category: 
    - Python 进阶
    - 小白补充
tag:
    - Python 进阶
    - 小白补充
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

你好，我是悦创。

Python字典表达式（也叫字典推导式）是一种简洁的方法来创建字典。它类似于列表推导式，但是用于生成字典对象。

以下是一个简单的例子。假设我们想要基于一个列表生成一个字典，其中列表的元素作为字典的键，并且值是该元素的平方：

```python
numbers = [1, 2, 3, 4, 5]
squared_dict = {x: x**2 for x in numbers}
print(squared_dict)
```

输出:
```python
{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

字典表达式还可以结合条件来生成字典。例如，只生成奇数的平方：

```python
odd_squared_dict = {x: x**2 for x in numbers if x % 2 == 1}
print(odd_squared_dict)
```

输出:
```python
{1: 1, 3: 9, 5: 25}
```

还可以使用双重循环。例如，假设我们有两个列表，并希望将其中一个列表的每个元素与另一个列表的每个元素结合生成一个字典：

```python
keys = ['a', 'b', 'c']
values = [1, 2, 3]
combined_dict = {k: v for k in keys for v in values}
print(combined_dict)
```

这样做实际上是不太有用的，因为它会重复覆盖字典的值，但这只是为了展示如何结合多个循环。

更实际的用途可能是将两个列表结合为一个字典，其中一个列表的元素作为键，另一个列表的元素作为值：

```python
keys = ['a', 'b', 'c']
values = [1, 2, 3]
combined_dict = {keys[i]: values[i] for i in range(len(keys))}
print(combined_dict)
```

输出:
```python
{'a': 1, 'b': 2, 'c': 3}
```

这只是一些基本的例子，你可以根据需要进一步扩展和定制字典表达式。







欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)













