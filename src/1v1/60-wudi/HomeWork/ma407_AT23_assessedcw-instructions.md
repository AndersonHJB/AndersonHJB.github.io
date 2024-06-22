---
title: MA407 Algorithms and Computation
icon: python
date: 2023-12-11 14:45:32
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 伦敦政经
    - LSE Home
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

## Assessed Coursework

This set of exercises is Assessed Coursework, constituting 25% of the final mark for this course. It is due on Wednesday, 10 January 2024 at 4:00pm (GMT). 

The work should be yours only. You may not work in groups or even discuss these problems with anyone else. You have to upload your work on Moodle at the Gradescope links that will be provided. By submitting your solutions, you would be confirming that you have read and understood the School’s rules on Plagiarism and Assessment Offences, which can be found here and here.

Your submission for this coursework should consist of two files: A Python file `CompactList.py` for Question 1 and `SumFreeLists.pdf`, for your solution to Question 2. The contents of your work must remain anonymous, so do not include your name or your student number in the files. Do not submit anything directly to your lecturer or class teacher. Instead, please put your candidate number in both files, for example, in a comment at the top of your Python code. 

The deadline is sharp. Late work carries an automatic penalty of 5 deducted marks (out of 100) for every 24-hour period that the coursework is late. Submission of answers to this coursework is mandatory. Without any submission, your mark for this course is incomplete, and you may not be eligible for the award of a degree. 

**Use of Python Facilities**

In the Python implementations of the algorithms, you are not allowed to use any Python library functions beyond what might be explicitly stated in the questions. The aim of this assessment is not to measure your proficiency in using Python facilities to solve problems. The questions test your algorithm design and analysis skills, as well as your ability to implement algorithms in Python.

**Question 1: Compact List Data Structure**

In this task, you have to implement a data structure called a compact list. Compact lists are compact ways of representing large sets of integers, where the set contains long runs of consecutive integers. For example, the set of integers 
$$
\{-1000, -999, -998, \ldots, -10\} \cup \{100, 101, 102, \ldots, 200\} \cup \{1001, 1002, 1003, \ldots, 1999\}
$$
is represented by the compact list $\langle -1000, -9, 100, 201, 1001, 2000 \rangle$ . The meaning of this list is that the numbers start at −1000, then the first number that is not in the list is −9, then the first number after −9 that is again in the set is 100, then the first number after 100 that is not in the set is 201, then the first number after 201 that is in the set is 1001, and the first number after 1001 that is not in the set is 2000. Since the list ends here, no number from 2000 and onwards is in the set.

As another example, the set $\{−5, −4, −3, 0, 1, 2, 7, 8, 9, 10\}$ is represented by the compact list $\langle -5, -2, 0, 3, 7, 11 \rangle$ Compact lists can also have an odd length. For example, the compact list $\langle 5,70,80 \rangle$ rep- resents the set $\{5, 6, 7,\dots, 69, 80,\dots\}$ . Thus, we understand a compact list of odd length as representing a set which after a certain value (in this case 80) contains all integers from that value on. In practice, such as when we implement compact lists for integers, we let the set go up to a maximum value, which will fix as a variable MAX. We also set $MIN$ as the minimum value of an integer included in a set. In other words, the sets that we represent as compact lists will be subsets of the universal set $\{MIN, MIN+1,\dots,MAX\}$.

In general, a compact list of integers represents a set of integers as a list $\langle x_0,x_1,x_2 \rangle$  of integers such that $x_0 < x_1 < x_2 < \dots,$ with the meaning that all integers from $x_0$ to $x_1 − 1$, as well as all from $x_2$ to $x_3-1$, and so on, are included in the set. Thus, the included integers start at $x_0$, then the first integer larger than $x_0$ not to be included is $x_1$, then the next integer after $x_1$ to be included is $x_2$ and so on. The empty set is represented as an empty list (of length 0). If the compact list has an odd length, it contains all values from the last entry in the list up to the maximum value $MAX$. As a final example, the set of all integers is represented by the one-element compact list $\langle MIN \rangle$: that is, it consists of the single number $MIN$. 

You have to implement a class called `CompactList` which implements various set operations,as described below. Before we describe the various functionalities, we quickly review the basic set operations and relations, to establish notation. Given sets A and B,

- their union is the set $A \cup B$ defined as the set of all elements that are in A or in B or in both A and B,
- their intersection is the set $A \cap B$ defined as the set of all elements that are in A and in B,
- their `difference` is the set $A \text{\\} B$ defined as the set of all elements that are in A but not in B.

The set $A$ is a subset of set $B$, written $A \subseteq B$, if each element of $A$ is also an element of $B$. The sets $A$ and $B$ are considered to be equal if they have the same elements.

If all the sets that we consider are contained in some universal set $U$, then the complement of set $A$ is the set $A^c = U \text{\\} A.$ Below, whenever we mention union, intersection, difference or complement, we always refer to the sets represented by compact lists of integers. For example,the union of the set $A = \{10,\dots,19\}$ represented by the compact list $\langle 10,20 \rangle$, and the set $B=\{30,\dots, 39\}$ represented by the compact list $\langle 30, 40 \rangle$, is the set $A \cup  B$ represented by the compact list $\langle 10, 20, 30, 40 \rangle$. As another example, the intersection of the set A with the set $C=\{15,\dots,24\}$, represented by the compact list $\langle 15,25 \rangle$, is the set $A \cap C=\{15,16,17,18,19\}$ represented by the compact list $\langle 15, 20 \rangle$. 

For the purposes of our set operations, the universal set is the set ${MIN,MIN+1,\dots,MAX}$ of integers, and so we take complements with respect to this set. For example, the complement of set $A$ is the set $\{MIN,\dots,9\}\cup \{20,\dots\}$, represented by the compact list $\langle MIN,10,20\rangle$.

The following list (a)–(m) describes the functionalities that you have to implement. You can use the template file `CompactList.py` on Moodle.

(a) Constructor for a compact list from a Python list: `__init__(alist)` 

Creates a compact list to represent the set of integers given by the Python list alist.As an example, `CompactList([8,3,5,4])` initialises the compact list $\langle 3, 6, 8, 9 \rangle$. 

(b) Instance method: `cardinality()` 

Returns the number of elements in the set represented by this compact list.The worst-case time should be $O(n)$ where n is the length of the compact list.

(c) Instance method: `insert(value)` 

Inserts `value` into the set represented by this compact list if value is not already contained in the set.The worst-case time should be $O(n)$ where n is the length of the compact list.

(d) Instance method: `delete(value)` 

Removes `value` from the set represented by this compact list if `value` is in the set, otherwise does nothing.The worst-case time should be $O(n)$ where n is the length of the compact list.

(e) Instance method: `contains(value)` 

Returns `True` if `value` is an element of the set represented by this compact list, otherwise returns False.The worst-case time should be $O(log \space n)$, where n is the length of this compact list.

(f) Instance method: `subsetOf(cl)` 

Returns True if the set represented by this compact list is a subset of the set represented by cl, otherwise returns False. The worst-case time should be $O(m + n)$ where m is the length of this compact list and n is the length of cl.

(g) Instance method: `equals(cl) ` 

Returns True if the set represented by this compact list has the same elements as the set represented by cl, otherwise False. The worst-case time should be $O(m + n)$ where m is the length of this compact list and n is the length of **cl**.

(h) Instance method: `isEmpty()` 

Returns True if the compact list represents the empty set, False if not.The worst-case running time should be $O(1)$.

(i) Instance method: `complement()` 

Returns the complement of the set represented by this compact list, also represented as a compact list, where the complement is with respect to the universal set of integers determined by MIN and MAX.The worst-case time should be $O(n)$ where n is the length of the compact list.

(j) Instance method: `union(cl)` 

Returns the union of the set represented by this compact list with the set represented by the compact list **cl**. The method does not alter the current compact list or **cl**.The worst-case time should be $O(m + n)$ where m is the length of this compact list and n is the length of **cl**.

(k) Instance method: `intersection(cl)`

Returns the intersection of the set represented by this compact list with the set represented by the compact list **cl**. The method does not alter the current compact list or **cl**.The worst-case time should be $O(m + n)$ where m is the length of this compact list and n is the length of **cl**.

(l) Instance method: `difference(cl)`

Returns the set difference $this \text{\\} cl$ of the set represented by this compact list with the set represented by cl removed. The method does not alter the current compact list or **cl**.The worst-case time should be $O(m + n)$ where m is the length of this compact list and n is the length of **cl**. 

(m) Instance method: `__str__()` 

Returns a string representation of this compact list $\langle x_0, x_1, x_2,\dots \rangle$ in the form $[x_0,x_1 - 1] \cup [x_2,x_3 - 1] U \dots$ (that is, as a union of closed intervals of integers).If this compact list is empty, it returns **empty**.

**Hints:**

1. Finding the union or the intersection of two compact lists is similar to the `Merge()` method that we saw when we looked at Merge Sort.
2. Once you have implemented `union(cl)` and `complement()` and you have made sure that they work, then it is very simple to implement `intersection(cl)`, `difference(cl)`, `subsetOf(cl)`,`equals(cl)`, as well as `insert(value)` and `delete(value)`, by writing these set operations and relations in terms of `union(cl)` and `complement()`. For example, $A \cap B = (A^c \cup B^c)^c$ and $A \text{\\} B = A \cap B^c$.

Remember to explain all your code with comments, when needed, and to indent properly. Do not use any Python modules or libraries, except the standard functionalities of Python lists.

**Question 2: Sum-Free Lists**

Given three sets A, B, and C, we would like to determine whether there exists a triple (a,b,c) such that $a \in A$, $b \in B$, $c \in C$, and $a + b + c = 0$.

The following Python function receives three lists representing these sets as input and claims to output such a triple as a list $[a,b,c]$, if it exists, or `None` otherwise.

```python
def SumFreeLists(list1, list2, list3):
    list2.sort()
    list3.sort()
    for i in range(0, len(list1)):
        j = 0
        k = len(list3)-1
        while j < len(list2) and k >= 0:
            if list1[i] + list2[j] + list3[k] < 0:
                j += 1
            elif list1[i] + list2[j] + list3[k] > 0:
                k -= 1
            else:
                return [list1[i], list2[j], list3[k]]
    return None
```

Prove that the algorithm is correct using loop invariants. Note that you will need two separate loop-invariant arguments: one for the inner loop and one for the outer loop.

::: code-tabs

@tab Code1

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/12/14 22:15
# @Author  : AI悦创
# @FileName: hw4.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# Created by Bornforthis.
class CompactList:
    def __init__(self, alist):
        """初始化函数，根据给定的列表创建紧凑列表"""
        alist.sort()
        self.compact_list = []
        if alist:
            self.compact_list.append(alist[0])
            for i in range(1, len(alist)):
                if alist[i] != alist[i - 1] + 1:
                    self.compact_list.extend([alist[i - 1] + 1, alist[i]])
            self.compact_list.append(alist[-1] + 1)

    def cardinality(self):
        """返回集合的元素个数"""
        count = 0
        for i in range(0, len(self.compact_list), 2):
            count += self.compact_list[i + 1] - self.compact_list[i]
        return count

    def insert(self, value):
        """插入一个值到集合中"""
        if not self.contains(value):
            self.compact_list.append(value)
            self.compact_list.append(value + 1)
            self.compact_list.sort()

    def delete(self, value):
        """从集合中删除一个值"""
        if self.contains(value):
            index = self.compact_list.index(value)
            if index % 2 == 0:
                if self.compact_list[index] == self.compact_list[index + 1] - 1:
                    del self.compact_list[index:index + 2]
                else:
                    self.compact_list[index] += 1
            else:
                self.compact_list[index] -= 1

    def contains(self, value):
        """检查集合是否包含某个值"""
        for i in range(0, len(self.compact_list), 2):
            if self.compact_list[i] <= value < self.compact_list[i + 1]:
                return True
        return False

    def subsetOf(self, cl):
        """检查当前集合是否为另一个集合的子集"""
        for i in range(0, len(self.compact_list), 2):
            if not cl.contains(self.compact_list[i]) or not cl.contains(self.compact_list[i + 1] - 1):
                return False
        return True

    def equals(self, cl):
        """检查两个集合是否相等"""
        return self.compact_list == cl.compact_list

    def isEmpty(self):
        """检查集合是否为空"""
        return len(self.compact_list) == 0

    def complement(self):
        """返回集合的补集"""
        complement_list = []
        for i in range(1, len(self.compact_list), 2):
            complement_list.extend([self.compact_list[i], self.compact_list[i + 1] if i + 1 < len(self.compact_list) else MAX])
        return CompactList(complement_list)

    def union(self, cl):
        """返回两个集合的并集"""
        return CompactList(self.compact_list + cl.compact_list)

    def intersection(self, cl):
        """返回两个集合的交集"""
        return self.complement().union(cl.complement()).complement()

    def difference(self, cl):
        """返回两个集合的差集"""
        return self.intersection(cl.complement())

    def __str__(self):
        """返回集合的字符串表示"""
        if self.isEmpty():
            return "empty"
        result = ""
        for i in range(0, len(self.compact_list), 2):
            result += f"[{self.compact_list[i]},{self.compact_list[i + 1] - 1}] "
        return result.strip()

# 使用示例：
# cl = CompactList([1, 2, 3, 5, 6, 7])
# print(cl)  # 输出：[1,3] [5,7]
```

@tab Code1-注释

```python
class CompactList:
    def __init__(self, alist):
        """
        构造函数：根据给定的整数列表创建紧凑列表。
        alist: 一个整数列表，列表中的元素将被转换成紧凑列表形式。
        """
        alist.sort()  # 首先对列表进行排序
        self.compact_list = []  # 初始化紧凑列表
        if alist:
            self.compact_list.append(alist[0])  # 添加列表的第一个元素
            for i in range(1, len(alist)):
                # 如果当前元素与前一个元素不连续，则在紧凑列表中添加两个元素
                if alist[i] != alist[i - 1] + 1:
                    self.compact_list.extend([alist[i - 1] + 1, alist[i]])
            self.compact_list.append(alist[-1] + 1)  # 添加最后一个元素的下一个值

    def cardinality(self):
        """
        返回集合的元素个数。
        """
        count = 0
        # 遍历紧凑列表的偶数索引，计算每一对的差值并累加
        for i in range(0, len(self.compact_list), 2):
            count += self.compact_list[i + 1] - self.compact_list[i]
        return count

    def insert(self, value):
        """
        向集合中插入一个值。
        value: 要插入的整数值。
        """
        if not self.contains(value):
            self.compact_list.append(value)
            self.compact_list.append(value + 1)
            self.compact_list.sort()  # 插入后重新排序

    def delete(self, value):
        """
        从集合中删除一个值。
        value: 要删除的整数值。
        """
        if self.contains(value):
            index = self.compact_list.index(value)
            # 根据元素在紧凑列表中的位置来删除
            if index % 2 == 0:
                # 如果删除的元素是区间的开始，则调整区间的开始
                if self.compact_list[index] == self.compact_list[index + 1] - 1:
                    del self.compact_list[index:index + 2]
                else:
                    self.compact_list[index] += 1
            else:
                # 如果删除的元素是区间的结束，则调整区间的结束
                self.compact_list[index] -= 1

    def contains(self, value):
        """
        检查集合是否包含某个值。
        value: 要检查的整数值。
        """
        # 遍历紧凑列表的偶数索引，检查值是否在某个区间内
        for i in range(0, len(self.compact_list), 2):
            if self.compact_list[i] <= value < self.compact_list[i + 1]:
                return True
        return False

    def subsetOf(self, cl):
        """
        检查当前集合是否为另一个集合的子集。
        cl: 另一个紧凑列表实例。
        """
        # 遍历当前紧凑列表的区间
        for i in range(0, len(self.compact_list), 2):
            # 检查每个区间的开始和结束是否都在另一个集合中
            if not cl.contains(self.compact_list[i]) or not cl.contains(self.compact_list[i + 1] - 1):
                return False
        return True

    def equals(self, cl):
        """
        检查两个集合是否相等。
        cl: 另一个紧凑列表实例。
        """
        # 直接比较两个紧凑列表的内容
        return self.compact_list == cl.compact_list

    def isEmpty(self):
        """
        检查集合是否为空。
        """
        # 空集合的紧凑列表长度为0
        return len(self.compact_list) == 0

    def complement(self):
        """
        返回集合的补集。
        """
        complement_list = []
        # 遍历紧凑列表的奇数索引，构建补集
        for i in range(1, len(self.compact_list), 2):
            complement_list.extend([self.compact_list[i], self.compact_list[i + 1] if i + 1 < len(self.compact_list) else MAX])
        return CompactList(complement_list)

    def union(self, cl):
        """
        返回两个集合的并集。
        cl: 另一个紧凑列表实例。
        """
        # 直接合并两个紧凑列表，并创建一个新的紧凑列表
        return CompactList(self.compact_list + cl.compact_list)

    def intersection(self, cl):
        """
        返回两个集合的交集。
        cl: 另一个紧凑列表实例。
        """
        # 交集可通过两个集合的补集的并集的补集来计算
        return self.complement().union(cl.complement()).complement()

    def difference(self, cl):
        """
        返回两个集合的差集。
        cl: 另一个紧凑列表实例。
        """
        # 差集可通过交集和补集的操作计算
        return self.intersection(cl.complement())

    def __str__(self):
        """
        返回集合的字符串表示。
        """
        # 空集合特殊处理
        if self.isEmpty():
            return "empty"
        result = ""
        # 将紧凑列表转换为区间的字符串形式
        for i in range(0, len(self.compact_list), 2):
            result += f"[{self.compact_list[i]},{self.compact_list[i + 1] - 1}] "
        return result.strip()

# 使用示例：
# cl = CompactList([1, 2, 3, 5, 6, 7])
# print(cl)  # 输出：[1,3] [5,7]
```

@tab Code2-优先考虑

```python
# Candidate No: 

MIN = -1000
MAX = 1000


class CompactList:
    def __init__(self, inlist=[]):
        """初始化函数，根据给定的列表创建紧凑列表"""
        inlist.sort()
        self.compact_list = []
        if inlist:
            self.compact_list.append(inlist[0])
            for i in range(1, len(inlist)):
                if inlist[i] != inlist[i - 1] + 1:
                    self.compact_list.extend([inlist[i - 1] + 1, inlist[i]])
            self.compact_list.append(inlist[-1] + 1)

    def cardinality(self):
        """返回集合的元素个数"""
        count = 0
        for i in range(0, len(self.compact_list), 2):
            count += self.compact_list[i + 1] - self.compact_list[i]
        return count

    def insert(self, value):
        """插入一个值到集合中"""
        if not self.contains(value):
            if value == MIN:
                if self.compact_list and self.compact_list[0] == MIN + 1:
                    self.compact_list[0] = MIN
                else:
                    self.compact_list = [MIN, MIN + 1] + self.compact_list
            elif value == MAX:
                if self.compact_list and self.compact_list[-1] == MAX:
                    self.compact_list[-1] = MAX + 1
                else:
                    self.compact_list += [MAX, MAX + 1]
            else:
                self.compact_list.append(value)
                self.compact_list.append(value + 1)
                self.compact_list.sort()
                self._merge_intervals()

    def _merge_intervals(self):
        # Helper function to merge overlapping intervals
        merged = []
        for i in range(0, len(self.compact_list), 2):
            if not merged or merged[-1] < self.compact_list[i]:
                merged.extend([self.compact_list[i], self.compact_list[i + 1]])
            else:
                merged[-1] = max(merged[-1], self.compact_list[i + 1])
        self.compact_list = merged

    def delete(self, value):
        """从集合中删除一个值"""
        if self.contains(value):
            index = self.compact_list.index(value)
            if index % 2 == 0:
                if self.compact_list[index] == self.compact_list[index + 1] - 1:
                    del self.compact_list[index:index + 2]
                else:
                    self.compact_list[index] += 1
            else:
                self.compact_list[index] -= 1

    def contains(self, value):
        """检查集合是否包含某个值"""
        for i in range(0, len(self.compact_list), 2):
            if self.compact_list[i] <= value < self.compact_list[i + 1]:
                return True
        return False

    def subsetOf(self, cl):
        """检查当前集合是否为另一个集合的子集"""
        for i in range(0, len(self.compact_list), 2):
            if not cl.contains(self.compact_list[i]) or not cl.contains(self.compact_list[i + 1] - 1):
                return False
        return True

    def equals(self, cl):
        """检查两个集合是否相等"""
        return self.compact_list == cl.compact_list

    def isEmpty(self):
        """检查集合是否为空"""
        return len(self.compact_list) == 0

    def complement(self):
        """返回集合的补集"""
        complement_list = [MIN]
        for i in range(0, len(self.compact_list), 2):
            complement_list.append(self.compact_list[i])
            if i + 1 < len(self.compact_list):
                complement_list.append(self.compact_list[i + 1])
            else:
                complement_list.append(MAX)
        if complement_list[-1] != MAX:
            complement_list.append(MAX)
        return CompactList(complement_list)

    def union(self, cl):
        """返回两个集合的并集"""
        return CompactList(self.compact_list + cl.compact_list)

    def intersection(self, cl):
        """返回两个集合的交集"""
        return self.complement().union(cl.complement()).complement()

    def difference(self, cl):
        """返回两个集合的差集"""
        return self.intersection(cl.complement())

    def __str__(self):
        """返回集合的字符串表示"""
        if self.isEmpty():
            return "empty"
        result = ""
        for i in range(0, len(self.compact_list), 2):
            result += f"[{self.compact_list[i]},{self.compact_list[i + 1] - 1}] "
        return result.strip()


if __name__ == "__main__":
    mycl1 = CompactList([])
    print(mycl1)
    print(mycl1.cardinality())

    mycl2 = CompactList([9, 8, 3, 4, 5])
    print(mycl2)
    print(mycl2.cardinality())
    print(mycl2, "contains 4:", mycl2.contains(4))

    mycl1 = CompactList([10, 1, 11])
    mycl3 = mycl1.union(mycl2)
    print(mycl3)
    print(mycl3.cardinality())

    mycl1 = mycl2.complement()
    print(mycl1)
    print(mycl1.cardinality())

    mycl1 = CompactList([MAX])
    print(mycl1)
    print(mycl1.cardinality())
```

@tab Code3-middle

```python
# Candidate No: 

MIN = -1000
MAX = 1000


class CompactList:
    def __init__(self, inlist=[]):
        """初始化函数，根据给定的列表创建紧凑列表"""
        inlist.sort()
        self.compact_list = []
        if inlist:
            self.compact_list.append(inlist[0])
            for i in range(1, len(inlist)):
                if inlist[i] != inlist[i - 1] + 1:
                    self.compact_list.extend([inlist[i - 1] + 1, inlist[i]])
            self.compact_list.append(inlist[-1] + 1)

    def cardinality(self):
        """返回集合的元素个数"""
        count = 0
        for i in range(0, len(self.compact_list), 2):
            count += self.compact_list[i + 1] - self.compact_list[i]
        return count

    # def insert(self, value):
    #     """插入一个值到集合中"""
    #     if not self.contains(value):
    #         if value == MIN:
    #             if self.compact_list and self.compact_list[0] == MIN + 1:
    #                 self.compact_list[0] = MIN
    #             else:
    #                 self.compact_list = [MIN, MIN + 1] + self.compact_list
    #         elif value == MAX:
    #             if self.compact_list and self.compact_list[-1] == MAX:
    #                 self.compact_list[-1] = MAX + 1
    #             else:
    #                 self.compact_list += [MAX, MAX + 1]
    #         else:
    #             self.compact_list.append(value)
    #             self.compact_list.append(value + 1)
    #             self.compact_list.sort()
    #             self._merge_intervals()
    def insert(self, value):
        # 插入一个值到集合中
        if not self.contains(value):
            if value == MIN:
                if self.compact_list and self.compact_list[0] == MIN + 1:
                    self.compact_list[0] = MIN
                else:
                    self.compact_list = [MIN, MIN + 1] + self.compact_list
            elif value == MAX:
                if self.compact_list and self.compact_list[-1] == MAX:
                    self.compact_list[-1] = MAX + 1
                else:
                    self.compact_list += [MAX, MAX + 1]
            else:
                inserted = False
                for i in range(0, len(self.compact_list), 2):
                    if self.compact_list[i] - 1 == value:
                        self.compact_list[i] = value
                        inserted = True
                        break
                    elif self.compact_list[i + 1] == value:
                        self.compact_list[i + 1] = value + 1
                        inserted = True
                        break
                if not inserted:
                    self.compact_list.extend([value, value + 1])
                self.compact_list.sort()
                self._merge_intervals()

    def _merge_intervals(self):
        # Helper function to merge overlapping intervals
        merged = []
        for i in range(0, len(self.compact_list), 2):
            if not merged or merged[-1] < self.compact_list[i]:
                merged.extend([self.compact_list[i], self.compact_list[i + 1]])
            else:
                merged[-1] = max(merged[-1], self.compact_list[i + 1])
        self.compact_list = merged

    # def delete(self, value):
    #     """从集合中删除一个值"""
    #     if self.contains(value):
    #         index = self.compact_list.index(value)
    #         if index % 2 == 0:
    #             if self.compact_list[index] == self.compact_list[index + 1] - 1:
    #                 del self.compact_list[index:index + 2]
    #             else:
    #                 self.compact_list[index] += 1
    #         else:
    #             self.compact_list[index] -= 1
    def delete(self, value):
        # 从集合中删除一个值
        if self.contains(value):
            for i in range(0, len(self.compact_list), 2):
                if self.compact_list[i] <= value < self.compact_list[i + 1]:
                    if self.compact_list[i] == value:
                        if self.compact_list[i] == self.compact_list[i + 1] - 1:
                            del self.compact_list[i:i + 2]
                        else:
                            self.compact_list[i] += 1
                    elif self.compact_list[i + 1] - 1 == value:
                        self.compact_list[i + 1] -= 1
                    else:
                        self.compact_list.insert(i + 1, value)
                        self.compact_list.insert(i + 2, value + 1)
                    break

    def contains(self, value):
        """检查集合是否包含某个值"""
        for i in range(0, len(self.compact_list), 2):
            if self.compact_list[i] <= value < self.compact_list[i + 1]:
                return True
        return False

    def subsetOf(self, cl):
        """检查当前集合是否为另一个集合的子集"""
        for i in range(0, len(self.compact_list), 2):
            if not cl.contains(self.compact_list[i]) or not cl.contains(self.compact_list[i + 1] - 1):
                return False
        return True

    def equals(self, cl):
        """检查两个集合是否相等"""
        return self.compact_list == cl.compact_list

    def isEmpty(self):
        """检查集合是否为空"""
        return len(self.compact_list) == 0

    # def complement(self):
    #     """返回集合的补集"""
    #     complement_list = [MIN]
    #     for i in range(0, len(self.compact_list), 2):
    #         complement_list.append(self.compact_list[i])
    #         if i + 1 < len(self.compact_list):
    #             complement_list.append(self.compact_list[i + 1])
    #         else:
    #             complement_list.append(MAX)
    #     if complement_list[-1] != MAX:
    #         complement_list.append(MAX)
    #     return CompactList(complement_list)
    def complement(self):
        # 返回集合的补集
        complement_list = [MIN]
        for i in range(0, len(self.compact_list), 2):
            complement_list.append(self.compact_list[i])
            if i + 1 < len(self.compact_list):
                complement_list.append(self.compact_list[i + 1])
            else:
                if self.compact_list[i] != MAX + 1:  # 确保不超过 MAX
                    complement_list.append(MAX + 1)
        if complement_list[-1] != MAX + 1:
            complement_list.append(MAX + 1)
        return CompactList(complement_list)

    # def union(self, cl):
    #     """返回两个集合的并集"""
    #     return CompactList(self.compact_list + cl.compact_list)
    def union(self, cl):
        # 返回两个集合的并集
        union_list = CompactList(self.compact_list + cl.compact_list)
        union_list._merge_intervals()
        return union_list

    def intersection(self, cl):
        """返回两个集合的交集"""
        return self.complement().union(cl.complement()).complement()

    def difference(self, cl):
        """返回两个集合的差集"""
        return self.intersection(cl.complement())

    def __str__(self):
        """返回集合的字符串表示"""
        if self.isEmpty():
            return "empty"
        result = ""
        for i in range(0, len(self.compact_list), 2):
            result += f"[{self.compact_list[i]},{self.compact_list[i + 1] - 1}] "
        return result.strip()


if __name__ == "__main__":
    mycl1 = CompactList([])
    print(mycl1)
    print(mycl1.cardinality())

    mycl2 = CompactList([9, 8, 3, 4, 5])
    print(mycl2)
    print(mycl2.cardinality())
    print(mycl2, "contains 4:", mycl2.contains(4))

    mycl1 = CompactList([10, 1, 11])
    mycl3 = mycl1.union(mycl2)
    print(mycl3)
    print(mycl3.cardinality())

    mycl1 = mycl2.complement()
    print(mycl1)
    print(mycl1.cardinality())

    mycl1 = CompactList([MAX])
    print(mycl1)
    print(mycl1.cardinality())
```

@tab Code3-注释

```python
MIN = -1000  # 设置最小值常量
MAX = 1000   # 设置最大值常量

class CompactList:
    def __init__(self, inlist=[]):
        """
        初始化函数，根据给定的列表创建紧凑列表。
        对输入列表进行排序，并转换为紧凑列表的格式。
        """
        inlist.sort()  # 对输入列表进行排序
        self.compact_list = []  # 初始化紧凑列表
        if inlist:  # 如果输入列表不为空
            self.compact_list.append(inlist[0])  # 添加第一个元素
            # 遍历列表，找出不连续的元素，并在紧凑列表中适当添加标记
            for i in range(1, len(inlist)):
                if inlist[i] != inlist[i - 1] + 1:
                    self.compact_list.extend([inlist[i - 1] + 1, inlist[i]])
            self.compact_list.append(inlist[-1] + 1)  # 添加最后一个元素的下一个整数

    def cardinality(self):
        """
        返回集合的元素个数。
        遍历紧凑列表，通过计算区间长度来确定元素数量。
        """
        count = 0  # 初始化计数器
        for i in range(0, len(self.compact_list), 2):
            count += self.compact_list[i + 1] - self.compact_list[i]
        return count  # 返回总数

    def insert(self, value):
        """
        插入一个值到集合中。
        如果值不在集合中，则将其插入；如果值已存在，则不作任何操作。
        """
        if not self.contains(value):
            if value == MIN:
                # 处理插入值为最小值的情况
                if self.compact_list and self.compact_list[0] == MIN + 1:
                    self.compact_list[0] = MIN
                else:
                    self.compact_list = [MIN, MIN + 1] + self.compact_list
            elif value == MAX:
                # 处理插入值为最大值的情况
                if self.compact_list and self.compact_list[-1] == MAX:
                    self.compact_list[-1] = MAX + 1
                else:
                    self.compact_list += [MAX, MAX + 1]
            else:
                # 处理一般情况
                inserted = False
                for i in range(0, len(self.compact_list), 2):
                    if self.compact_list[i] - 1 == value:
                        self.compact_list[i] = value
                        inserted = True
                        break
                    elif self.compact_list[i + 1] == value:
                        self.compact_list[i + 1] = value + 1
                        inserted = True
                        break
                if not inserted:
                    self.compact_list.extend([value, value + 1])
                self.compact_list.sort()  # 对紧凑列表排序
                self._merge_intervals()  # 合并重叠的区间

    def _merge_intervals(self):
        """
        辅助函数：合并重叠的区间。
        用于维护紧凑列表的完整性。
        """
        merged = []  # 初始化合并后的列表
        for i in range(0, len(self.compact_list), 2):
            if not merged or merged[-1] < self.compact_list[i]:
                merged.extend([self.compact_list[i], self.compact_list[i + 1]])
            else:
                merged[-1] = max(merged[-1], self.compact_list[i + 1])
        self.compact_list = merged  # 更新紧凑列表

    def delete(self, value):
        """
        从集合中删除一个值。
        如果值存在于集合中，则从紧凑列表中移除；否则不作任何操作。
        """
        if self.contains(value):
            for i in range(0, len(self.compact_list), 2):
                if self.compact_list[i] <= value < self.compact_list[i + 1]:
                    if self.compact_list[i] == value:
                        if self.compact_list[i] == self.compact_list[i + 1] - 1:
                            del self.compact_list[i:i + 2]
                        else:
                            self.compact_list[i] += 1
                    elif self.compact_list[i + 1] - 1 == value:
                        self.compact_list[i + 1] -= 1
                    else:
                        # 如果值在区间中间，则分割区间
                        self.compact_list.insert(i + 1, value)
                        self.compact_list.insert(i + 2, value + 1)
                    break

    def contains(self, value):
        """
        检查集合是否包含某个值。
        遍历紧凑列表中的区间，判断值是否在其中。
        """
        for i in range(0, len(self.compact_list), 2):
            if self.compact_list[i] <= value < self.compact_list[i + 1]:
                return True
        return False

    def subsetOf(self, cl):
        """
        检查当前集合是否为另一个集合的子集。
        遍历当前紧凑列表的区间，检查每个区间是否在另一个集合中。
        """
        for i in range(0, len(self.compact_list), 2):
            if not cl.contains(self.compact_list[i]) or not cl.contains(self.compact_list[i + 1] - 1):
                return False
        return True

    def equals(self, cl):
        """
        检查两个集合是否相等。
        通过比较紧凑列表来判断两个集合是否有相同的元素。
        """
        return self.compact_list == cl.compact_list

    def isEmpty(self):
        """
        检查集合是否为空。
        如果紧凑列表长度为0，则集合为空。
        """
        return len(self.compact_list) == 0

    def complement(self):
        """
        返回集合的补集。
        通过紧凑列表中的区间来计算补集。
        """
        complement_list = [MIN]  # 初始化补集列表
        for i in range(0, len(self.compact_list), 2):
            complement_list.append(self.compact_list[i])
            if i + 1 < len(self.compact_list):
                complement_list.append(self.compact_list[i + 1])
            else:
                # 确保补集不超过 MAX
                if self.compact_list[i] != MAX + 1:  
                    complement_list.append(MAX + 1)
        if complement_list[-1] != MAX + 1:
            complement_list.append(MAX + 1)
        return CompactList(complement_list)

    def union(self, cl):
        """
        返回两个集合的并集。
        将两个紧凑列表合并，然后调用_merge_intervals方法来合并重叠的区间。
        """
        union_list = CompactList(self.compact_list + cl.compact_list)  # 合并列表
        union_list._merge_intervals()  # 合并重叠区间
        return union_list

    def intersection(self, cl):
        """
        返回两个集合的交集。
        使用补集和并集的概念来计算交集。
        """
        return self.complement().union(cl.complement()).complement()

    def difference(self, cl):
        """
        返回两个集合的差集。
        计算当前集合与另一个集合的补集的交集。
        """
        return self.intersection(cl.complement())

    def __str__(self):
        """
        返回集合的字符串表示。
        将紧凑列表转换为区间的字符串形式。
        """
        if self.isEmpty():
            return "empty"
        result = ""
        for i in range(0, len(self.compact_list), 2):
            result += f"[{self.compact_list[i]},{self.compact_list[i + 1] - 1}] "
        return result.strip()

# 测试代码
if __name__ == "__main__":
    # 各种测试用例

```





:::



### 外部循环不变式

**不变式:** 在第 i 次迭代的开始时，不存在一个元素对 (a, b, c)，其中 $a \in A[0:i]$, $b \in B$, $c \in C$ 且满足 $a + b + c = 0$。

**初始化:** 在第一次迭代之前，$i=0$，这意味着 A[0:i] 为空。因此，不存在任何元素对 (a, b, c) 满足条件，因为没有 a 元素可以选择。

**保持:** 如果在第 i 次迭代之前不变式为真，那么在第 i+1 次迭代之前它也将为真。这是因为如果存在这样的元组 (a, b, c)，其中 $a \in A[0:i+1]$, $b \in B$, $c \in C$ 且 $a + b + c = 0$，那么算法已经在第 i 次迭代返回了这个元组。如果没有找到，说明不存在满足条件的元组，因此不变式保持不变。

**终止:** 当外部循环结束时，我们已经检查了所有属于 A 的元素。如果算法没有返回任何元组，这意味着不存在满足条件的元组 (a, b, c)。

### 内部循环不变式
**不变式:** 在每次内部循环的迭代中，对于固定的 a（来自 A 的当前元素），没有任何元素对 (b, c)，其中 $b \in B[0:j]$, $c \in C[k+1:len(C)]$ 且满足 $a + b + c = 0$。

**初始化:** 在内部循环的第一次迭代之前，$j=0$ 且 $k=len(C)-1$。这意味着 B[0:j] 为空，C[k+1:len(C)] 也为空，因此没有元素对 (b, c) 可以选。

**保持:** 如果在某次迭代中不变式为真，那么在下一次迭代中它也为真。这是因为内部循环通过调整 j 和 k 的值来搜索可能的 b 和 c，使得 $a + b + c = 0$。如果在当前迭代找不到这样的 b 和 c，那么不变式保持为真。

**终止:** 当内部循环结束时，要么找到了满足条件的元组 (a, b, c)，要么确定对于当前的 a，不存在满足条件的 b 和 c。

### 结论
由于这两个循环不变式在循环的每次迭代中都保持为真，并且外部循环的不变式确保所有可能的 a 都被考虑，内部循环的不变式确保了对于每个固定的 a，所有可能的 b 和 c 都被考虑，我们可以得出结论，该算法正确地找到了满足条件的元组 (a, b, c)，或者正确地得出不存在这样的元组。

```python
MIN = -1000 # define the minimum integer of the universal set
MAX = 1000  # define the maximum integer of the universal set

class CompactList:
    def __init__(self, inlist=[]):
        """
        Initializer for CompactList class
        Creates a compact list based on the given list
        Sorts the input list and converts it to compact list format
        """
        self.inlist = inlist  # initialize input list
        inlist.sort()  # sort the input list
        self.compact_list = []  # initialize compact list
        if inlist:  # if input list is not empty
            self.compact_list.append(inlist[0])  # add the first element to compact list
            for i in range(1, len(inlist)):
                if inlist[i] != inlist[i - 1] + 1:
                    self.compact_list.extend([inlist[i - 1] + 1, inlist[i]])
            self.compact_list.append(inlist[-1] + 1)  # add the last element to compact list

    def cardinality(self):
        """return the number of elements in the set"""
        count = 0
        for i in range(0, len(self.compact_list), 2): # the running time is O(n)
            count += self.compact_list[i + 1] - self.compact_list[i]
        return count

    def insert(self, value):
        """
        Insert a value into the set, maintaining sorted order and merging intervals.
        Utilizes the `union` method for insertion.
        """
        if not self.contains(value):
            newlist = self.union(CompactList([value]))
            self.inlist = newlist.inlist
            self.compact_list = newlist.compact_list

    def delete(self, value):
        if self.contains(value): #use the contains method to justify whether the set contains the value
            newlist = self.difference(CompactList([value]))
            self.inlist = newlist.inlist
            self.compact_list = newlist.compact_list

    def contains(self, value):
        """justify whether the set contains a value"""
        for i in range(0, len(self.compact_list), 2):
            if self.compact_list[i] <= value < self.compact_list[i + 1]: # the running time is O(n)
                return True
        return False

    def subsetOf(self, cl):
        """exmaine whether the set is a subset of another set"""
        for i in range(0, len(self.compact_list), 2):
            if not cl.contains(self.compact_list[i]) or not cl.contains(self.compact_list[i + 1] - 1):
                return False
        return True

    def equals(self, cl):
        """exmaine whether the set is equal to another set"""
        return self.compact_list == cl.compact_list

    def isEmpty(self):
        """exmaine whether the set is empty"""
        return len(self.compact_list) == 0

    def complement(self):
        result = []
        for i in range(MIN, MAX + 1): #the running time is O(n)
            if i not in self.inlist:
                result.append(i)
        return CompactList(result)

    def union(self, cl):
        result = []
        i, j = 0, 0

        while i < len(self.inlist) and j < len(cl.inlist):
            if self.inlist[i] < cl.inlist[j]:
                result.append(self.inlist[i])
                i += 1
            elif self.inlist[i] > cl.inlist[j]:
                result.append(cl.inlist[j])
                j += 1
            else:  # Equal elements, add one and skip both
                result.append(self.inlist[i])
                i += 1
                j += 1

        # Add remaining elements from both lists, avoiding duplicates
        for remaining in [self.inlist[i:], cl.inlist[j:]]:
            for item in remaining:
                if not result or item != result[-1]:
                    result.append(item)

        return CompactList(result)

    def intersection(self, cl):
        return self.complement().union(cl.complement()).complement()

    def difference(self, cl):
        return self.intersection(cl.complement())

    def __str__(self):
        """return a string representation of the set"""
        if self.isEmpty():
            return "empty"
        result = ""
        for i in range(0, len(self.compact_list), 2):
            result += f"[{self.compact_list[i]},{self.compact_list[i + 1] - 1}] "
            if i < len(self.compact_list) - 2:
                result += "U "
        return result.strip()

if __name__ == "__main__":
    l = CompactList([9, 8, 3, 4, 5])
    l1 = CompactList([1, 3, 5, 7, 9])
    # print(l.union(l1))
    l1.insert(2)
    print(l1)
    print(l.intersection(l1))
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
