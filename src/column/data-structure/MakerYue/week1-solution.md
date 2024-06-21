---
title: Week1：HomeWork
icon: shujujiegou-01
date: 2023-12-05 20:25:46
author: AI悦创
isOriginal: true
category: 数据结构与算法
tag:
    - 数据结构与算法
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

::: warning 

本系列，你可以在我网站免费学习，但是切勿 copy 分发。本系列为书稿，我的爬虫系统会全天检索。被我找到，我必维权和告之，不死不休。

你学习本系列有问题，可以评论区和加我微信，拉你进交流群。微信：Jiabcdefh

:::

## 1. A+B 问题

### 描述

输入A、B，输出 A+B。

说明：在**描述**这里，会给出试题的意思，以及所要求的目标。

### 输入

输入的第一行包括两个整数，由空格分隔，分别表示A、B。

说明：**输入描述**是描述在测试你的程序时，所给的输入一定满足的格式。

做题时你应该假设所给的输入是一定满足输入格式的要求的，所以你不需要对输入的格式进行检查。多余的格式检查可能会适得其反，使用你的程序错误。

在测试的时候，系统会自动将输入数据输入到你的程序中，你不能给任何提示。比如，你在输入的时候提示“请输入A、B”之类的话是不需要的，这些多余的输出会使得你的程序被判定为错误。

### 输出

输出一行，包括一个整数，表示 A+B 的值。A、B 以及  A+B 的和均在 Int 范围内。

说明：**输出描述**是要求你的程序在输出结果的时候必须满足的格式。

在输出时，你的程序必须满足这个格式的要求，不能少任何内容，也不能多任何内容。如果你的内容和输出格式要求的不一样，你的程序会被判断为错误，包括你输出了提示信息、中间调试信息、计时或者统计的信息等。

### 测试

输入样例 1 

```
12 34
```

输出样例 1

```python
46
```

### Solution 1

```python
# 读取两个整数
a, b = map(int, input().split())
# 输出它们的和
print(a + b)
```



## 2. 链表添加元素

### 描述

给定一组数字，将他们用链表的形式进行存储。另外再给一个数字，将它插入到链表的末尾。输出这个链表。

（记住是用链表来存储，所有人的程序我们都会查看的哦）

### 输入

一共有两行，第一行是多个数字，以空格隔开，最多 100000 个数字。

第二行是一个数字。

数字均在 int 范围内。

### 输出

一行输出，数字之间用“`->`”来表示链表方向。比如：`1->2->3->4`

输入样例 1 

```
1 2 3
4
```

输出样例 1

```
1->2->3->4
```

### 提示

请谨慎考虑是否要使用递归来解决问题

### Solution 2

```python
# -*- coding: utf-8 -*-
# @Author: AndersonHJB
# @Date:   2018-08-11 17:26:45
# @Last Modified by:   AndersonHJB
# @Last Modified time: 2018-08-15 11:47:48
class IntNode(object):
    """docstring for IntNode"""

    def __init__(self, i, n):
        self.item = i
        self.next = n


class SLList(object):
    """docstring for SLList"""

    def __init__(self, x):
        self.__first = IntNode(x, None)
        self.__last = self.__first
        self.__second_last = None
        self.__size = 1

    def add_last(self, x):
        self.__second_last = self.__last
        self.__last = IntNode(x, None)
        self.__second_last.next = self.__last
        self.__size += 1

    def size(self):
        return self.__size

    def output(self):
        s = ''
        p = self.__first
        count = 0
        while count < self.__size - 1:
            s += p.item + '->'
            p = p.next
            count += 1
        s += p.item
        print(s)


s = input()
last_item = input()
s_list = s.split(' ')
l = SLList(s_list[0])
for item in s_list[1:]:
    l.add_last(item)
l.add_last(last_item)
l.output()
```





## 3. 链表中翻转

### 描述

给定一个**单向**链表，要求将第 m 位到第 n 位（从 0 开始编号位数）的元素翻转过来。

注1：m 和 n 一定都在链表长度内

注2：待翻转的元素包括第 m 和 n 位

### 输入

两行数据

第一行为链表元素，用空格隔开各个元素

第二行有两个数字，分别是 m 和 n

注：链表元素个数最大为 1000

### 输出

翻转后的链表结果

元素之间用 `->` 表示连接方向

输入样例 1 

```
1 2 3 4 5 6 7
2 5
```

输出样例 1

```
1->2->6->5->4->3->7
```

输入样例 2 

```
1 2 3 4 5 6 7
0 1
```

输出样例 2

```
2->1->3->4->5->6->7
```

### 提示

一定注意各种边界情况

### Solution 3

```python
# -*- coding: utf-8 -*-
# @Author: AndersonHJB
# @Date:   2018-08-11 17:26:45
# @Last Modified by:   AndersonHJB
# @Last Modified time: 2018-08-15 11:50:30
class IntNode(object):
    """docstring for IntNode"""

    def __init__(self, i, n):
        self.item = i
        self.next = n


class SLList(object):
    """docstring for SLList"""

    def __init__(self, x):
        self.__first = IntNode(x, None)
        self.__size = 1

    def add_first(self, x):
        self.__first = IntNode(x, self.__first)
        self.__size += 1

    def get_first(self):
        return self.__first.item

    def add_last(self, x):
        self.__size += 1
        p = self.__first
        while p.next is not None:
            p = p.next

        p.next = IntNode(x, None)

    def size(self):
        return self.__size

    def output(self):
        s = ''
        p = self.__first
        count = 0
        while count < self.__size - 1:
            s += p.item + '->'
            p = p.next
            count += 1
        s += p.item
        print(s)

    def reverse(self, m, n):
        p1 = self.__first
        count = 0
        while count < m - 1:
            p1 = p1.next
            count += 1
        if m == 0:
            left_tail = None
            new_tail = p1
        else:
            left_tail = p1
            p1 = p1.next
            new_tail = p1
            count += 1

        pre = p1
        if p1.next is not None:
            current = p1.next
            p1 = current.next
            count += 1
            while count <= n:
                current.next = pre
                pre = current
                current = p1
                if p1 is not None:
                    p1 = p1.next
                count += 1
            if left_tail is not None:
                left_tail.next = pre
            else:
                self.__first = pre
            new_tail.next = current


s = input()
s_list = s.split(' ')

start_end = input()
start_end = start_end.split(' ')

start_reverse_pos = int(start_end[0])
end_reverse_pos = int(start_end[1])

l = SLList(s_list[0])
for item in s_list[1:]:
    l.add_last(item)

l.reverse(start_reverse_pos, end_reverse_pos)
l.output()
```





## 4. 小明买东西

### 描述

小明去商店买东西，他手里有一些零花钱，他希望能通过购买商店里的不同商品来正好花完他的零花钱（不然回家就要上交给老妈了）。

现在已知商店里各个商品的价格以及小明手里零花钱的总数，请问小明能够正好花完他的零花钱吗？

### 输入

一共两行数据。

第一行为一组数字，用空格隔开，表示商店里不同商品的价格。

第二行为小明手里零花钱的总数。

注1：商品和小明零花钱的金额都是整数。

注2：商品数量不超过 25 个。

注3：每个数字代表的商品数量有且只有一个。

### 输出

如果能够正好花完零花钱输出 True，否则输出 False。

输入样例 1 

```
1 2 3 4 5 6 7 8 9
12
```

输出样例 1

```
True
```

输入样例 2 

```
10 20 30 40
33
```

输出样例 2

```python
False
```

### Solution 4

```python
# -*- coding: utf-8 -*-
# @Author: AndersonHJB
# @Date:   2018-08-11 17:26:45
# @Last Modified by:   AndersonHJB
# @Last Modified time: 2018-08-15 11:52:01
def sub_sum(arr, index, target):
    if target == 0:
        return True
    elif index == 0:
        return arr[0] == target
    elif arr[index] > target:
        return sub_sum(arr, index - 1, target)
    else:
        return sub_sum(arr, index - 1, target - arr[index]) or sub_sum(arr, index - 1, target)


s = input().split(' ')
target = int(input())
array = [int(i) for i in s]
index = len(array) - 1
print(sub_sum(array, index, target))
```









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
