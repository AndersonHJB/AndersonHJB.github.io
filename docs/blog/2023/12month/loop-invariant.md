---
title: Python循环不变式「Loop Invariant」
date: 2023-12-22 12:48:54
author: AI悦创
isOriginal: true
icon: python
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true

comment: true

backToTop: true
toc: true
---

你好，我是悦创。

## 0. 什么是循环不变式？

循环不变式是在循环的每次迭代中都保持为真的性质或条件。它是用来帮助我们证明循环的正确性（即循环按照预期执行）的一种工具。

## 1. 为什么需要循环不变式？

在编写循环时，我们通常有一个目的，比如寻找一个元素、计算一个总和或者排序一个列表。循环不变式帮助我们理解循环的每一步是如何逐渐接近这个目标的。

## 2. 算法正确性证明

算法正确性证明是计算机科学中的一个重要部分，它涉及到证明算法按预期工作并正确解决了特定的问题。这通常包括两个主要方面：

- **完整性（Completeness）**：算法能找到问题的所有正确解决方案。
- **正确性（Correctness）**：算法找到的解决方案确实是正确的。

在上述问题中，我们关注的是证明算法能正确地找到一个满足条件的元素组合（如果存在的话），或者正确地判断出不存在这样的组合。

## 3. 循环不变式（Loop Invariant）

循环不变式是用于证明循环正确性的一个重要工具。它是一个在循环的每次迭代中都保持为真的性质，对于理解循环的行为和证明其正确性至关重要。在证明过程中，通常需要证明以下三个方面：

- **初始化（Initialization）**：在循环开始之前，不变式是成立的。
- **保持（Maintenance）**：如果不变式在某次迭代开始时为真，则在下一次迭代开始时也为真。
- **终止（Termination）**：当循环终止时，不变式的真实性给出了一些有用的性质，这些性质通常帮助证明算法的正确性。

在你的问题中，使用了两个循环不变式来分别证明外部循环和内部循环的正确性，这是算法证明中的一个典型应用。

了解这些概念有助于理解和设计有效且正确的算法，特别是在处理复杂数据结构和算法设计时。

## 4. 例子：计算列表中元素的总和

假设我们有一个整数列表 `nums`，我们想计算其所有元素的总和。

```python
def compute_sum(nums):
    total = 0
    for num in nums:
        total += num
    return total
```

在这个例子中，我们可以定义循环不变式为：“在每次迭代开始时，`total` 变量是迄今为止已处理元素的总和”。

1. **初始化**：在循环开始前，我们没有处理任何元素，因此 `total = 0` 是正确的，满足我们的不变式。
2. **保持**：在每次迭代中，我们把当前元素 `num` 加到 `total` 上。这确保了在这次迭代结束时，`total` 仍然是所有已处理元素的总和。
3. **终止**：当循环结束时，我们已经处理了所有元素。此时，不变式告诉我们 `total` 是列表中所有元素的总和，这正是我们想要证明的。

## 5. 如何应用循环不变式？

1. **理解循环的目的**：在编写或分析循环时，首先要明确循环的目标是什么。
2. **定义不变式**：根据循环的目的，定义一个在每次迭代中都应该保持真实的性质。
3. **证明不变式**：通过上述三个步骤（初始化、保持、终止）证明你的不变式。

## 6. 总结

理解和应用循环不变式是一个强大的技巧，它不仅帮助你证明算法的正确性，而且还提高了你对问题的理解和解决问题的能力。随着实践的增多，你会发现循环不变式是理解复杂算法的关键。


## Question 2: Sum-Free Lists

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





欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
