---
title: 01-初探 Python 数据类型
date: 2023-02-02 15:13:38
author: AI悦创
isOriginal: true
category: 
    - 轻松入门 Python—玩中学
tag:
    - 轻松入门 Python—玩中学
icon: python
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

## 1. 一图胜千言

![DataType](./02-Preliminary-DataType.assets/image-20230202151555438.png)

## 2. 数字型

### 2.1 整型「int」

```python
x = 1
# 检测数据类型方法一
t = type(x)
print(t)

# 检测数据类型方法二
print(type(x))

# ------output------
<class 'int'>
<class 'int'>
```



### 2.2 浮点型「float」



## 3. 字符串「str」



## 4. 列表「list」



## 5. 元组「tuple」



## 6. 字典「dict」

字典是由一系列的 key 与 value 组成的，`d = {key1: value1, key2: value2}`。我们可以创建如下字典：

```python
d1 = {"name": "bornforthis", "age": 18, "gender": "F"}
d2 = {1: "number", (1, 2, 3): "tuple", True: "bool"}

# 检测数据类型
d1_type = type(d1)
d2_type = type(d2)
print("d1_type:", d1_type)
print("d2_type:", d2_type)

print(d1)
print(d2)

# ------output------
d1_type: <class 'dict'>
d2_type: <class 'dict'>
{'name': 'bornforthis', 'age': 18, 'gender': 'F'}
{1: 'bool', (1, 2, 3): 'tuple'}
```

### 6.1 字典创建规则

1. key：字典中，key 需使用不可变的数据类型。如果使用可变数据类型，将会报错：<span style="color:red">`TypeError: unhashable type: 'list'`</span>
    1. 列表、字典、集合皆不能做字典的 key
2. value：任意数据类型

::: tabs

@tab 代码

```python
d3 = {[1, 2, 3]: "number"}
print(d3)
```

@tab 报错输出

```python
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/StudentCoder/15-WUlili/lesson01/demo.py", line 8, in <module>
    d3 = {[1, 2, 3]: "number"}
TypeError: unhashable type: 'list'
```

:::



### 6.2 字典的特性：

- 字典是一系列由键（key）和值（value）配对组成的元素的集合；
- 在 Python3.7+，字典被确定为有序（注意：在 3.6 中，字典有序是一个 implementation detail，在 3.7 才正式成为语言特性，因此 3.6 中无法 100% 确保其有序性），而 3.6 之前是无序的；
- 字典长度大小可变，元素可以任意地删减和改变。

::: tip 提示

字典有序性和以往（列表、字符串、元组等）有序性不同。零基础小白，前期理解为无序即可。「因为，你目前用不到此特性」

:::

## 7. 集合「set」

```python
set1 = {1, 2, 3, "aiyc", (1, 2, 3), True, False, 1.1}
print(type(set1))
print(set1)

# ------output------
<class 'set'>
{False, 1, 2, 3, 1.1, 'aiyc', (1, 2, 3)}
```

### 7.1 集合的特性

- 确定性：每一个值都必须是确定的
- 无序性：没有顺序
- 互异性：不能相同，相同的会自动去除「去重」

:::: tabs

@tab 集合确定性解析

::: info 集合确定性解析

列表可变，所以导致列表不确定。

举个例子🌰：

- 在 1s 的时，列表数据为：`lst = [1, 2, 3]`；
- 在 1.6s 时，列表数据为：`lst = [1, 2]`；

那我们是否可以说：我确定，列表数据一直都是 `[1, 2, 3]` 。——这句话显然是不合理。

:::

@tab 集合无序性解析

::: info 集合无序性解析

```python
set1 = {1, 2, 3, "aiyc", (1, 2, 3), True, False, 1.1}

print(set1)

# ------output------
{False, 1, 2, 3, 1.1, 'aiyc', (1, 2, 3)}
```

有可能你运行多次结果一样，但集合就是无序性。例如：你抛骰子或者硬币，你一直得到骰子6或者硬币上，真的就说抛骰子或者硬币就是确定的吗？

:::

@tab 集合互异性解析

::: info 集合互异性解析

```python
set1 = {1, 2, 3, 1, 1, 1, 1, 1, 1, 1}

print(set1)

# ------output------
{1, 2, 3}
```

:::

::::



## 8. 布尔型「bool」

```python
a = True
b = False
print(type(a))
print(type(b))

print(a)
print(b)

# ------output------
<class 'bool'>
<class 'bool'>
True
False
```









