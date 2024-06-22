---
title: MATH 1MP3 * TEST 1
icon: python
date: 2023-10-15 10:18:17
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - python 1v1
    - 留学生辅导
    - 留学生作业辅导
tag:
    - avenue
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

(a) [2] Consider the string `s="February"`

Determine which of the following are true when Python executes the command.

(I) `print(s[:3])` prints the string `Feb`

(II) `print(s[-1])` prints the string `r`

(III) `print('a' in s)` prints `True`

(A) none

(B) I only

(C) II only

(D) III only

(E) I and II

(F) I and III

(G) II and III

(H) all three

(b) [2] What is the outcome of the following Python code?

```python
x = 3
def add_x(x):
    print(x + 3)
    return x + 2
print(add_x(2))
print(x)
```

2. (a) [3] Write a code that computes the sum of all numbers between 1 and 100 that are divisible by 8.

```python
sum_of_numbers = 0

for i in range(1, 101):
    if i % 8 == 0:
        sum_of_numbers += i

print(sum_of_numbers)
```

(b) [3] Write a function partial sum(max) that computes the partial sum of the harmonic series $\sum_{i=1}^{\infty} \frac{1}{i}$, but stops if the sum ever exceeds some maximum number max .

```python
def partial_sum(max_value):
    total = 0
    i = 1
    while True:
        total += 1/i
        if total > max_value:
            break
        i += 1
    return total

# 示例使用:
result = partial_sum(3)
print(result)
```



3. (a) [2] Using list comprehension, create a list L1 of all numbers between 1 and 100 that are divisible by both 3 and 5.















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
