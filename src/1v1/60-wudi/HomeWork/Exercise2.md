---
title: Exercise 2 LSE Home MA407
icon: python
date: 2023-10-09 11:03:39
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - python 1v1
    - MA407
    - 伦敦政经
    - LSE Home
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

Consider the following Python function which takes a list A of integers as input.

```python
def process(A):
    for i in range(len(A) - 1):
        m = i
        for j in range(i + 1, len(A)):
            if A[m] < A[j]:
                m = j
        A[i], A[m] = A[m], A[i]
```

In this exercise, you will provide a proof of correctness for this algorithm, and briefly discuss its running time.

(a)  What does **process(A)** do to a list A?

(b)  Show that the inner for loop in lines 4–6 satisfies the following loop invariant: 

$$A[m] \geq A[x] for \space  all \space x = i,...,j=1.$$

Use this to make a conclusion about m after execution of line 6 in the last iteration of the inner for loop for a fixed value of i.

(c)  Formulate a loop invariant for the outer for loop in lines 2–7 and use your loop invariant together with part (b) to prove that `process(A)` does what you stated in part (a).

(d)  Describe the best- and the worst-case running time of the algorithm for a list A of length n in an asymptotic sense or, even better, in big-O notation.

For this exercise set, your submission to Gradescope should be a PDF file.You can either scan your handwritten solutions into PDF format, or type them to start with. (This could be a great opportunity to teach yourself LATEX, which you will later need for project reports or dissertations anyway.)

At the time of the submission, Gradescope will ask you to identify the pages that relate to each part, (a)–(d). Please do follow this step, which makes the marking process a bit easier.

---

(a) **process(A)** 对列表 A 做了什么？

**答案**：

`process(A)` 实际上是对列表 A 进行了降序排序，使用的算法是选择排序。

---

(b) 证明内部 for 循环（第 4-6 行）满足以下循环不变式：

$$\large A[m] \geq A[x] \space \text{对于所有} \space x = i,...,j-1.$$

基于此，讨论在固定的i值下，内部 for 循环最后一次迭代执行第 6 行后的 m 的结论。

**答案**：

1. **初始化**：在内部循环的每次开始，我们有 `m = i`，这意味着在第一次迭代（即 j=i+1）前，不等式 $A[m] \geq A[x]$  对所有 $i \leq x \leq i$ 均成立。

2. **保持**：如果对于某个 j 值，有 $A[m] < A[j]$ ，那么我们会更新 m 为 j。此时 $A[m] = A[j]$ ，对于所有 $i \leq x \leq j-1$ 的 x 值，因为 $A[j]$ 是目前最大的，所以不等式成立。

3. **终止**：当循环结束时，m 的位置将是从i到 len(A)-1中最大的元素的位置。因为在内循环的每次迭代中，我们都在寻找[i,j]范围内的最大值。

结论：在固定的i值下，内部 for 循环的最后一次迭代后，m 将指向 $[i,len(A)-1]$ 范围内的最大值。

---

(c) 为外部 for 循环（第 2-7 行）制定一个循环不变式，并使用你的循环不变式与部分(b)一起证明 `process(A)` 完成了你在部分(a)中所说的操作。

**答案**：

循环不变式：在每次外部循环的迭代结束后，子列表A[0:i]包含原列表中的最大的i个元素，并按降序排列。

证明：

1. **初始化**：在 i=0 之前，子列表 `A[0:i]` 是空的，所以不变式成立。
2. **保持**：根据部分(b)，在内循环结束时，m 指向 `[i,len(A)-1]` 范围内的最大值。交换 `A[i]` 与 `A[m]` ，确保 `A[i]` 是当前最大值。由于 `A[0:i-1]` 已经是有序的，并且A[i]现在是 `[i, len(A)-1]` 范围内的最大值，所以 `A[0:i+1]` 也是有序的。
3. **终止**：在外部循环结束时，A[0:len(A)-1]或简单地说A，是按降序排列的。

---

(d) 描述算法对于长度为 n 的列表A的最佳和最差情况的运行时间，最好以大 O 表示法表示。

**答案**：

这是一个典型的选择排序算法，无论输入如何，其时间复杂度始终为：

$O(n^2)$

分析：

因为每个元素都要与其后的所有元素进行比较，所以外部循环运行 n 次，而内部循环平均运行 n/2 次，因此总的运行次数是 $O(n^2)$。

**无论最好情况还是最坏情况，它都需要比较所有的元素来找到最大的元素。**



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
