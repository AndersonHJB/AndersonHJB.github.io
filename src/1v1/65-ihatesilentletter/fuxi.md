---
title: MATH 1MP3 * TEST 2
icon: python
date: 2023-11-21 09:20:02
author: AI悦创
isOriginal: true
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

1. Multiple choice questions: circle ONE answer. No justification is needed.

(a) [2] For which of the following does Python return **True** when the command is executed.

(I) `print({1, 2, 3} == {3, 3, 2, 3, 1})`

(II) `print(1 <= {1, 2, 3})`

(III) `print({3, 2} <= {1, 2, 3})`

(A) none

(B) I only

(C) II only

(D) III only

(E) I and II

(F) I and III

(G) II and III

(H) all three

::: details ANswer

(I) `print({1, 2, 3} == {3, 3, 2, 3, 1})` - 这个命令返回 True，因为 Python 中的集合是无序的，且自动删除重复元素。所以两个集合是相等的。

(II) `print(1 <= {1, 2, 3})` - 这个命令执行时会发生错误，因为在 Python 中不能将整数与集合进行比较。

(III) `print({3, 2} <= {1, 2, 3})` - 这个命令返回 True，因为集合 `{3, 2}` 是集合 `{1, 2, 3}` 的子集。

因此，正确答案是 (F) I 和 III。

:::

(b) [2] What is the output of the following Python code?

```python
p = [1, 2, 3]
a = 4

def eval(p, a):
    result = 0
    for i in range(0, len(p)):
        result += p[i] * a ** i
    return result

print(eval(p, a))
```

(A) 49

(B) 57

(C) 24

(D) 33

(E) 47

(F) 53

(G) 29

(H) none of these

2. The geometric series $\sum_{i=0}^{\infty} ar^i = a + ar + ar^2 + ...$ converges to $s = \frac{a}{1 - r}$ when $|r| < 1$.

(a) [2] Write a code that computes the partial sum of the geometric series when $a = 1$ and $r = \frac{1}{4}$, stopping when the number of terms reaches `max_terms` (i.e., if `max_terms=15`, then you would compute the sum of the first 15 terms in the series).

(b) [1] Determine the exact sum of the series in part (a).

(c) [2] Write a code to compute the partial sum of the series in part (a), stopping when either `max_terms` is reached or the difference between the partial sum and the theoretical sum from part (b) is less than 0.001.



3. Look at the following code:

```python
import numpy as np

def f(x):
    return np.log(x) + x

a = 0.1
b = 0.9

while abs(b - a) >= 0.1:
    mid = (a + b) / 2
    if f(mid) == 0:
        print('solution is', mid)
    if f(a) * f(mid) = 0:
        b = mid
    if f(mid) * f(b) = 0:
        a = mid

print(a, b)
```

(a) [2] How many times will the while loop be executed? Support your answer with appro- priate calculations.

(b) [2] What does the output in line 17 represent in the context of the task this code is trying to accomplish?



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
