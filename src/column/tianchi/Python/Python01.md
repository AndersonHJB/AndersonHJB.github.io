---
title: 01-Python入门上
icon: python
date: 2022-08-30 00:15:50
author: AI悦创
isOriginal: true
category: 
    - Python
    - AI悦创·天池计划
tag:
    - Python
    - AI悦创·天池计划
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 6
comment: true
lastUpdated: true
editLink: false
prev: Python01.md
next: Python02.md
backToTop: true
toc: true
---

[[toc]]

## 0. 简介

Python 是一种通用编程语言，其在科学计算和机器学习领域具有广泛的应用。如果我们打算利用 Python 来执行机器学习，那么对 Python 有一些基本的了解就是至关重要的。本 Python 入门系列体验就是为这样的初学者精心准备的。

AI悦创官方为大家准备知识星球，在学习过程中，大家有任何教程内容或者平台使用问题都可以在知识星球内提出，扫码即可加入：

![](/zsxq.jpg)

本实验包括以下内容：
- 变量、运算符与数据类型
    - 注释
    - 运算符
    - 变量和赋值
    - 数据类型与转换
    - print() 函数
- 位运算
    - 原码、反码和补码
    - 按位非操作 ~
    - 按位与操作 &
    - 按位或操作 |
    - 按位异或操作 ^
    - 按位左移操作 <<
    - 按位右移操作 >>
    - 利用位运算实现快速计算
    - 利用位运算实现整数集合
- 条件语句
    - if 语句
    - if - else 语句
    - if - elif - else 语句
    - assert 关键词
- 循环语句
    - while 循环
    - while - else 循环
    - for 循环
    - for - else 循环
    - range() 函数
    - enumerate() 函数
    - break 语句
    - continue 语句
    - pass 语句
    - 推导式
- 异常处理
    - Python 标准异常总结
    - Python 标准警告总结
    - try - except 语句
    - try - except - finally 语句
    - try - except - else 语句
    - raise 语句

## 1. 变量、运算符与数据类型

### 1.1 注释

- 在 Python 中，`#` 表示注释，作用于整行。

#### 1.1.1【例子】单行注释

```python
# 这是一个注释
print("Hello world")

# Hello world
```

输出：

```python
Hello world
```

- `''' '''` 或者 `""" """` 表示区间注释，在三引号之间的所有内容被注释

#### 1.1.2【例子】多行注释

```python
'''
这是多行注释，用三个单引号
这是多行注释，用三个单引号
这是多行注释，用三个单引号
'''
print("Hello china") 
# Hello china

"""
这是多行注释，用三个双引号
这是多行注释，用三个双引号 
这是多行注释，用三个双引号
"""
print("hello china") 
# hello china
```

输出：

```python
Hello china
hello china
```

#### 1.1.3【我是测试题1】请在下方代码块中打印 (print) 出 hello+你的姓名

如：print("hello 老表")

```python
# 写下你的答案

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