---
title: MATH20017 Lab 1 A matrix class「Lab 1 Matrix algorithms and OO with Python」
date: 2023-10-02 07:50:44
author: AI悦创
isOriginal: true
category: 
    - 英国-布里斯托尔
tag:
    - 英国-布里斯托尔
icon: employee-rank
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

In this short notebook we will implement implement a matrix class and implement some fundamental matrix operations. You may wish to consult the following guide to object oriented programming in Python:
https://realpython.com/python3-object-oriented-programming/.

> 在这个简短的笔记本中，我们将实现一个矩阵类并实现一些基本的矩阵操作。你可能希望参考以下关于 Python 中面向对象编程的指南：
> [Object-Oriented Programming (OOP) in Python 3 – Real Python](https://realpython.com/python3-object-oriented-programming/)。

First, let's create a simple 2-dimensional array class which stores numbers in a list as follows:

> 首先，我们创建一个简单的二维数组类，该类将数字存储在列表中，如下所示：

::: code-tabs

@tab 1

```python
class TwoDimArray:

  def __init__(self, num_rows: int, num_cols: int):

    '''
    the constructor creates a representation of a 2-dimensional array
    with the specified number of rows and columns
    '''

    self.num_rows=num_rows
    self.num_cols=num_cols
    self.data = [0]*(self.num_rows*self.num_cols)

  # a method to extract array items
  def get(self, i: int, j: int) -> float:

    return self.data[i*self.num_cols+j]

  # a method to update array items
  def set(self, i: int,j: int, val: float) -> None:

    self.data[i*self.num_cols+j]=val

  # a method to print out the array
  def __str__(self) -> str:

    output=""
    for i in range(self.num_rows):
      output+="\n"+str(self.data[i*self.num_cols:(i+1)*self.num_cols])

    return output
```

@tab 2

```python
class TwoDimArray:
    
    def __init__(self, num_rows: int, num_cols: int):
        '''
        构造函数，初始化一个两维数组。
        :param num_rows: 二维数组的行数。
        :param num_cols: 二维数组的列数。
        '''
        # 初始化行数和列数
        self.num_rows = num_rows  
        self.num_cols = num_cols  
        
        # 用一维列表初始化数据，长度为行数乘以列数，所有元素初始值为0
        self.data = [0] * (self.num_rows * self.num_cols)  

    def get(self, i: int, j: int) -> float:
        '''
        获取二维数组中指定位置的元素。
        :param i: 指定的行索引。
        :param j: 指定的列索引。
        :return: 返回在位置(i, j)的元素。
        '''
        # 计算一维列表中的索引，并返回对应的元素。
        return self.data[i * self.num_cols + j]  

    def set(self, i: int, j: int, val: float) -> None:
        '''
        更新二维数组中指定位置的元素。
        :param i: 指定的行索引。
        :param j: 指定的列索引。
        :param val: 新的值。
        '''
        # 计算一维列表中的索引，并设置对应的元素为新的值。
        self.data[i * self.num_cols + j] = val  

    def __str__(self) -> str:
        '''
        返回二维数组的字符串表示。
        :return: 二维数组的字符串表示。
        '''
        # 初始化 output 字符串，用于存储二维数组的字符串表示。
        output = ""  
        for i in range(self.num_rows):  
            # 每一行的元素转换为字符串，并添加到 output 字符串。
            output += "\n" + str(self.data[i * self.num_cols: (i + 1) * self.num_cols])  
        # 返回二维数组的字符串表示。
        return output  
```



:::



























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
