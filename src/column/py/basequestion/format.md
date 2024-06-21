---
title: 03-format 解析【Python String format() Method】
date: 2022-06-25 13:01:53
author: AI悦创
isOriginal: true
category: Python 补充知识
tag:
    - Python 补充知识
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
editLink: true
prev: requirements.md
next: false
backToTop: true
toc: true
---

你好，我是悦创。

对输出格式的控制不只是打印空格分隔的值，还需要更多方式。格式化输出包括以下几种方法。

- 使用 [格式化字符串字面值](https://docs.python.org/zh-cn/3/tutorial/inputoutput.html#tut-f-strings) ，要在字符串开头的引号/三引号前添加 `f` 或 `F` 。在这种字符串中，可以在 `{` 和 `}` 字符之间输入引用的变量，或字面值的 Python 表达式。

```python
In [56]: year = 2016

In [57]: event = 'Referendum'

In [58]: s = f'Results of the {year} {event}'

In [59]: s
Out[59]: 'Results of the 2016 Referendum'
```

- 字符串的 [`str.format()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str.format) 方法需要更多手动操作。该方法也用 `{` 和 `}` 标记替换变量的位置，虽然这种方法支持详细的格式化指令，但需要提供格式化信息。

```python
In [62]: yes_votes = 42_572_654

In [63]: no_votes = 43_132_495

In [64]: percentage = yes_votes / (yes_votes + no_votes)

In [65]: s = '{:-9} YES votes  {:2.2%}'.format(yes_votes, percentage)

In [66]: s
Out[66]: ' 42572654 YES votes  49.67%'
```

- 最后，还可以用字符串切片和合并操作完成字符串处理操作，创建任何排版布局。字符串类型还支持将字符串按给定列宽进行填充，这些方法也很有用。

如果不需要花哨的输出，只想快速显示变量进行调试，可以用 [`repr()`](https://docs.python.org/zh-cn/3/library/functions.html#repr) 或 [`str()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str) 函数把值转化为字符串。

[`str()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str) 函数返回供人阅读的值，[`repr()`](https://docs.python.org/zh-cn/3/library/functions.html#repr) 则生成适于解释器读取的值（如果没有等效的语法，则强制执行 [`SyntaxError`](https://docs.python.org/zh-cn/3/library/exceptions.html#SyntaxError)）。对于没有支持供人阅读展示结果的对象， [`str()`](https://docs.python.org/zh-cn/3/library/stdtypes.html#str) 返回与 [`repr()`](https://docs.python.org/zh-cn/3/library/functions.html#repr) 相同的值。一般情况下，数字、列表或字典等结构的值，使用这两个函数输出的表现形式是一样的。字符串有两种不同的表现形式。

示例如下：

```python
In [79]: x = 10 * 3.25

In [80]: y = 200 * 200

In [81]: s = 'The value of x is ' + repr(x) + ', and y is ' + repr(y) + '...'

In [82]: s
Out[82]: 'The value of x is 32.5, and y is 40000...'
```

[`string`](https://docs.python.org/zh-cn/3/library/string.html#module-string) 模块包含 [`Template`](https://docs.python.org/zh-cn/3/library/string.html#string.Template) 类，提供了将值替换为字符串的另一种方法。该类使用 `$x` 占位符，并用字典的值进行替换，但对格式控制的支持比较有限。

## 7.1.1. 格式化字符串字面值

[格式化字符串字面值](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#f-strings) （简称为 f-字符串）在字符串前加前缀 `f` 或 `F`，通过 `{expression}` 表达式，把 Python 表达式的值添加到字符串内。

格式说明符是可选的，写在表达式后面，可以更好地控制格式化值的方式。下例将 pi 舍入到小数点后三位：

```python
In [42]: import math

In [43]: print(f'The value of pi is approximately {math.pi:.3f}.')
The value of pi is approximately 3.142.
```

在 `':'` 后传递整数，为该字段设置最小字符宽度，常用于列对齐：







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



