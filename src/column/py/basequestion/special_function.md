---
title: 06-函数专项练习
date: 2023-08-17 13:57:39
author: AI悦创
isOriginal: true
category: Python 私教练习题【基础】
tag:
    - Python 基础练习题
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
backToTop: true
toc: true
---

## 1. 斐波那契序列生成器

编写一个函数 `fibonacci(n)`，返回一个包含n个数字的斐波那契序列。斐波那契序列的前两个数字为0和1，后续的每一个数字都是其前两个数字的和。

**例如：**

输入：`5`

输出：`[0, 1, 1, 2, 3]`

::: details Answer

```python
def fibonacci(n):
    # 初始的两个数字
    a, b = 0, 1
    result = []
    
    # 生成斐波那契序列
    for _ in range(n):
        result.append(a)
        a, b = b, a + b  # 这里使用了Python的多重赋值，同时更新a和b的值
        
    return result

# 测试
print(fibonacci(5))  # 输出: [0, 1, 1, 2, 3]
```

:::

## 2. 字符串逆序

编写一个函数 `reverse_string(s)`，它会接受一个字符串并返回一个反转后的字符串。

**例如：**

输入：`"Hello"`

输出：`"olleH"`

::: details Answer

```python
def reverse_string(s):
    # 使用Python的切片来实现字符串反转
    return s[::-1]

# 测试
print(reverse_string("Hello"))  # 输出: "olleH"
```

:::

## 3. 找到列表中的最大和最小值

编写一个函数 `find_max_min(lst)`，它会接受一个数字列表，并返回一个元组，其中第一个元素是最小值，第二个元素是最大值。

例如：

输入：`[3, 5, 2, 8, 1]`

输出：`(1, 8)`

::: details Answer

```python
def find_max_min(lst):
    # 使用 Python 内置函数 min 和 max 来找到列表中的最小值和最大值
    return (min(lst), max(lst))

# 测试
print(find_max_min([3, 5, 2, 8, 1]))  # 输出: (1, 8)
```

:::





::: info 悦创金句

程序员就是连接人与机器之间的桥梁——AI悦创

:::

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

