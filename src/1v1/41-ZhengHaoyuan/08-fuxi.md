---
title: NYU CS-UY 1134 复习
date: 2023-12-18 08:01:05
author: AI悦创
isOriginal: true
category: 
    - python 1v1
tag:
    - NYU – Tandon School of Engineering
icon: a-jibijilianxibianji
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

**Question 3 (25 points)**

In this question, you should implement the following function:

```python
def remove_duplicates(lnk_lst)
```

The function is given `lnk_lst`, a `DoublyLinkedList` object. When called, it will mutate the object, and remove all the duplicate values, keeping only the first occurrence of each unique value.

For example:

if `lnk_lst=[1 <--> 7 <--> 3 <--> 3 <--> 1 <--> 5 <--> 7]`, after calling: `remove_duplicates(lnk_lst)`, `lnk_lst` should be:`[1 <--> 7 <--> 3 <--> 5].`

**Notes:**

1. Your function must run in **average linear time**. That is,if `lnk_lst` hasn n items, the **average** run time for the call `remove_duplicates(lnk_lst)` should be $\theta(n)$. 
2. You may use objects of any type learned in class (ArrayStack, ArrayQueue, DoublyLinkedList, HashTableMap, etc.). You should use the interface of these types as black boxes. That is, you may not assume anything about their inner implementation.

```python
def remove_dups(lst):
    map = ChainingHashTableMap()
    ptr = lst.header.next
    while ptr is not lst.trailer:
        num = ptr.data
        if num not in map:
            map[num] = None
            ptr = ptr.next
        else:
            node_to_delete = ptr
            ptr = ptr.next
            lst.delete_node(node_to_delete)
```

```python
def remove_dups(lst):
    # 定义函数 remove_dups，它接收一个参数 lst，这是一个 DoublyLinkedList 对象

    map = ChainingHashTableMap()
    # 创建一个 ChainingHashTableMap 实例。
    # 这个哈希表用于存储已遍历的元素，以便快速检查元素是否为重复

    ptr = lst.header.next
    # 初始化一个指针 ptr，从链表的头部哨兵节点的下一个节点开始，即链表的第一个实际节点

    while ptr is not lst.trailer:
        # 遍历链表直到 ptr 指向尾部哨兵节点，这保证了每个节点都被检查

        num = ptr.data
        # num 存储当前节点的数据

        if num not in map:
            # 如果当前节点的数据不在哈希表中，表示这是该数据的第一次出现

            map[num] = None
            # 将当前数据添加到哈希表中，值为 None。这是为了标记该值已经出现过

            ptr = ptr.next
            # 将指针移动到链表的下一个节点

        else:
            # 如果当前节点的数据已在哈希表中，表示这是一个重复的值

            node_to_delete = ptr
            # 将当前节点标记为待删除节点

            ptr = ptr.next
            # 在删除当前节点之前，先将指针移动到下一个节点，以免破坏链表的遍历

            lst.delete_node(node_to_delete)
            # 删除标记为待删除的节点
"""
以上代码中，使用哈希表来追踪已经出现过的元素，
这样可以在 O(1) 时间内检查一个元素是否重复。

由于每个元素只被访问一次，且哈希表操作平均是常数时间，
因此整个函数的平均运行时间是线性的，即 O(n)。
"""
```













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
