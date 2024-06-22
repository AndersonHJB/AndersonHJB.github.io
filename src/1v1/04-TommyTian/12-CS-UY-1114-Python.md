---
title: NYU – Tandon School of Engineering CS-UY 1114 / Python
date: 2023-04-17 08:46:17
author: AI悦创
isOriginal: true
category:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
tag:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
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
backToTop: true
toc: true
---

## (20 points; 2 each) For each of the following, show the value of var after the code runs or write ERROR if an error occurs.

| Code fragment                                | Value of var after the code runs Or ERROR if an error occurs |
| -------------------------------------------- | ------------------------------------------------------------ |
| `s='abc'` <br />`var=s[1:2]`                 |                                                              |
| `s='ab'` <br />`var=s*len(s)`                |                                                              |
| `s='abcdefg'` <br />`var=s[5:1:-2]`          |                                                              |
| `s='abcdefg'`<br />`var=s[-2]`               |                                                              |
| `var=[1,2]` <br />`var.append(3)`            |                                                              |
| `ls = [1,2]` <br />`var = ls.find('2')`      |                                                              |
| `ls = [1,2,3,4]` <br />`var = ls[2]`         |                                                              |
| `ls =["ab", "cd"]` <br />`var = ls + "exam"` |                                                              |
| `ls = ["ab"]` <br />`var = ls+ ["cd"]`       |                                                              |
| `ls = [1,2,3,4]` <br />`var = ls.pop(2)`     |                                                              |

::: code-tabs

@tab 1

```python
In [5]: s = 'abc'

In [6]: var = s[1:2]

In [7]: var
Out[7]: 'b'
```

@tab 2

```python
In [8]: s = 'ab'

In [9]: var = s * len(s)

In [10]: var
Out[10]: 'abab'
```

@tab 3

```python
In [11]: s = 'abcdefg'

In [12]: var = s[5:1:-2]

In [13]: var
Out[13]: 'fd'
```

@tab 4

```python
In [14]: s = 'abcdefg'

In [15]: var = s[-2]

In [16]: var
Out[16]: 'f'
```

@tab 5

```python
In [17]: var = [1, 2]

In [18]: var.append(3)

In [19]: var
Out[19]: [1, 2, 3]
```

@tab 6

```python
In [20]: lst = [1, 2]

In [21]: var = lst.find("2")
---------------------------------------------------------------------------
AttributeError                            Traceback (most recent call last)
Cell In[21], line 1
----> 1 var = lst.find("2")

AttributeError: 'list' object has no attribute 'find'
```

@tab 7

```python
In [23]: ls = [1, 2, 3, 4]

In [24]: var = ls[2]

In [25]: var
Out[25]: 3
```

@tab 8

```python
In [26]: lst = ["ab", "cd"]

In [27]: var = lst + "exam"
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
Cell In[27], line 1
----> 1 var = lst + "exam"

TypeError: can only concatenate list (not "str") to list
```

@tab 9

```python
In [28]: ls = ["ab"]

In [29]: var = ls + ["cd"]

In [30]: var
Out[30]: ['ab', 'cd']
```

@tab 10

```python
In [33]: lst = [1, 2, 3, 4]

In [34]: var = lst.pop(2)

In [35]: var
Out[35]: 3
```

:::

## (10 Points) What is the output from the following code?

> 2)(10分)以下代码的输出是什么?

```python
def first_func(a):
    print("first 1:", a)
    a = a * 2
    print("first 2:", a)


def second_func(a, b):
    print("Second 1:", a, b)
    first_func(a)
    print("Second 2:", a, b)
    first_func(b)
    print("Second 3:", a, b)
    a.append(3)


b = 5


def main():
    print("Main 1")
    ls = [1, 2]
    x = 5
    second_func(ls, x)
    print("Main 2: ", ls, x)


if __name__ == '__main__':
    main()
```

**Output:**



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
