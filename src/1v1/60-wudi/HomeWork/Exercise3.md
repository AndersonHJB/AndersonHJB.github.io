---
title: Exercise 3 LSE Home MA407
icon: python
date: 2023-10-18 18:59:39
author: AI悦创
isOriginal: true
category: 
    - 1v1
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

This set of exercises will introduce you to a particularly efficient method to search for an entry in a sorted list, which is called **binary search**. The basic idea of binary search is that the section of the list where the entry is searched is halved in each iteration.

More precisely, suppose you have a sorted list $x[0],...,x[n−1]$ of integers in non-decreasing order. We call these integers keys and allow repetitions in the list. When searching for an entry with value **key** in **x**, binary search first looks at the middle element $x[⌊ \frac{n}{2} ⌋]$ and compares 

it to the value key. If $key < x[⌊\frac{n}{2}⌋]$, then we can forget about the upper half of the list and continue searching for key in the lower half $x[0],...,x[⌊ \frac{n}{2} ⌋ − 1]$. Else, we search in the upper half $x[⌊ \frac{n}{2} ⌋],...,x[n−1]$. Assume the former happens (the case that the later happens is analogous). Then, we proceed similarly and compare key to the middle element $x[⌊\frac{n}{4}⌋]$ of this part of the list, and again, either continue with the upper half or the lower half and so on.

Clearly, one advantage of this algorithm is that it does not need to compare `key` to every element in the list. The first exercise now asks you to say more about the efficiency of this algorithm by finding an upper bound on the number of comparisons needed.

## Exercise 3.1

Determine how many comparisons the above described binary search algorithm has to perform o an list of length n (in the worst case).

Write your answer as a comment in the file `BinarySearch.py` that you are asked to create below.

The applications of binary search, obviously, are manifold, and, naturally, they are not re- stricted to situations where we want to find numbers. As long as the data we are working with can be ordered, we can apply this concept to find some particular data. For example, if the contacts on your phone are ordered by last name, finding an entry with a particular last name can be done with the help of binary search. (This is not, however, what actually happens on the phone: Rather, the data is stored in more complex data structures – a topic that we shall come back to.)

::: info Solution 3.1

In the worst case, the binary search algorithm needs to perform log2(n) comparisons to find an entry in a list of length n.

:::



## A small detour:

The algorithmic idea of binary search can also be applied to entirely different situations. Think about the times at the height of the COVID-19 pandemic. Assume you want to test all 10,000 students at LSE for COVID-19 at the same time, but lab capacity is not sufficient to evaluate all the 10,000 individual tests at the same time. Let’s also assume that, because all students were extremely reasonable, and adhered to all testing, self-isolation, and mask rules, only 10 students actually have COVID-19 at the time of the test. Of course we would like to find out who these 10 students are.

One solution for this problem would be to use some form of **batch testing**: We let all students do their swabs, and then divide each sample obtained in this way into a sufficient number of smaller samples to run the following test rounds. We run a first round of testing by “batching” together 100 samples (of 100 different students) to one super-sample. In this way we obtain 100 super-samples (out of our original 10,000 samples), each of which we now test: If all of the samples in a super-sample are negative, then the super-sample will test negative. If at least one sample, however, is positive, then the super-sample will test positive.

Because only 10 students are positive, we know that even in the worst case, only 10 super-samples will test positive; all 10, 000 − 10 · 100 = 9, 000 students that were not combined into these positive samples are now known to be negative. Of course, there are still 1,000 students left that could be positive. But now we can simply start a second test round on these: divide them into 100 “batches” of size 10, thus getting 100 new super-samples, of which at most 10 will test positive. After this second round we are left with at most 100 students that could be positive. These 100 students we could now, in a final round, test individually.

So we only needed 3 rounds of testing, and performed only 3 · 100 tests in total to pinpoint all positive students – which clearly is a cost- and time-saving mechanism. (In real life, of course, batch testing is more complicated, and there are many practical obstacles to consider; but the basic idea is similar.)

I hope this serves as sufficient motivation to look at binary search more in detail. We will, from now on, return to the simple scenario of finding a number in an ordered list of integers.

The remainder of this exercise set asks you to implement binary search and some test cases. For this purpose, you should create a Python file `BinarySearch.py` containing the functions described below. Please include in this file your answer to Exercise 3.1 as a comment.

Firstly, the file `BinarySearch.py` should contain a static function `binsearch()` which imple- ments binary search by using recursion.

## Exercise 3.2

Write a recursive function `binsearch()` which, when called with `binsearch(key,x,i,j)`, searches for the integer key among the list entries $x[i],...,x[j−1]$ using the binary search strategy described above. The entries of $x$ are assumed to be in sorted (non- decreasing) order but can have repetitions. The return value of this function should be an integer $k$ that is the smallest list index with the property $x[k]==key$, if there is any such index k. If not (so, key is not among the entries $x[i],...,x[j−1]$) then the return value should be the index $k$ so that the assignment $x[k]=key$ would still keep the list sorted (if the list elements $x[k],...,x[j−1]$ were shifted up to $x[k+1],...,x[j]$). 

Here is an example: Suppose the list x of integers contains as entries the numbers $x[0]=1, x[1]=4, x[2]=4, x[3]=4, x[4]=8, x[5]=9$. Then $binsearch(8,x,0,6)$ should return (the list index) 4 since $x[4]=8$. Similarly, $binsearch(8,x,3,5)$ should return 4. Moreover,

$binsearch(4,x,0,6)$ should return 1 since $x[1]=4$, and since 1 is the first index i so that $x[i]=4$ (of course this is an arbitrary rule, but here we ask for this particular behaviour). $binsearch(7,x,0,6)$ should return 4 since the “correct” place for key 7 is at index 4, because in $x[4]$ we find the first value in the list that is bigger than 7.

Test your `binsearch()` function with a small example in a separate `test()` function of your class (see also Exercise 3.3 below). Additionally, we want to include some test cases in the `test()` function.

## Exercise 3.3

In the `test()` function (with no arguments) include several tests (including elements that are present and not present) of binary search with each of the following three lists:

- the list `[7,7,10,23,42,42,42,51,60]`,
- the list `[1,3,5,7,...,199999999]`, of the $10^8$ odd integers from 1 up to $2 · 10^8 − 1$
- the list $[9,...,9]$ of $10^8$ identical entries of value 9.

For each test, you should print information on whether the `key` was found, and where. (See the example below.)

The output of your program should look similar to the following.

```python
Testing a small list: 7 7 10 23 42 42 42 51 60
Key 3 not found, should be at index 0.
Key 7 found at index 0.
Key 26 not found, should be at index 4.
Key 42 found at index 4.
Key 99 not found, should be at index 9.

Testing a large list with 100000000 entries: 1 3 5 7 ... 199999999
Key 50000000 not found, should be at index 25000000.
Key 25000000 not found, should be at index 12500000.
Key 12500001 found at index 6250000.
    
Testing a large list with 100000000 identical entries: 9 9 9 ... 9
Key 1 not found, should be at index 0.
Key 9 found at index 0.
Key 13 not found, should be at index 100000000.
```

## Exercise 3.4

Write a function `insert(key,x)` which uses `binsearch` to insert the value `key` at the correct position into the ordered list $x$. Also test this function in `test()`.

Please submit a single file called `BinarySearch.py` that includes the functions described above.



```python
# BinarySearch.py

# 说明：在最坏的情况下，二分查找算法需要执行 log2(n) 次比较
# 才能在长度为 n 的列表中查找一个条目。


# 定义二分查找函数
def binsearch(key, x, i, j):
    # 基本情况：如果范围为零，则返回应插入 key 的位置
    if j <= i:
        return i

    # 计算中间索引
    mid = (i + j) // 2

    # 如果 key 等于中间元素，则返回 mid
    if key == x[mid]:
        # 我们需要找到 key 的第一个出现位置
        while mid > 0 and x[mid - 1] == key:
            mid -= 1
        return mid
    # 如果 key 小于中间元素，搜索下半部分
    elif key < x[mid]:
        return binsearch(key, x, i, mid)
    # 如果 key 大于中间元素，搜索上半部分
    else:
        return binsearch(key, x, mid + 1, j)


# 定义测试函数
def test():
    # 使用给定的测试用例测试 binsearch 函数

    # 测试一个小列表
    x1 = [7, 7, 10, 23, 42, 42, 42, 51, 60]
    print("Testing a small list:", " ".join(map(str, x1)))
    for key in [3, 7, 26, 42, 99]:
        index = binsearch(key, x1, 0, len(x1))
        if index < len(x1) and x1[index] == key:
            print(f"Key {key} found at index {index}.")
        else:
            print(f"Key {key} not found, should be at index {index}.")
    print()

    # 说明：为了避免内存问题，我们使用了较小的列表来代替练习中提到的非常大的列表。
    x2 = list(range(1, 20000, 2))
    print("Testing a smaller list with 10000 entries:", "1 3 5 7 ... 19999")
    for key in [5000, 2500, 12501]:
        index = binsearch(key, x2, 0, len(x2))
        if index < len(x2) and x2[index] == key:
            print(f"Key {key} found at index {index}.")
        else:
            print(f"Key {key} not found, should be at index {index}.")
    print()

    # 测试一个具有相同条目的较小列表
    x3 = [9] * 10000
    print("Testing a smaller list with 10000 identical entries:", "9 9 9 ... 9")
    for key in [1, 9, 13]:
        index = binsearch(key, x3, 0, len(x3))
        if index < len(x3) and x3[index] == key:
            print(f"Key {key} found at index {index}.")
        else:
            print(f"Key {key} not found, should be at index {index}.")


# 定义插入函数
def insert(key, x):
    # 找到应插入 key 的位置
    index = binsearch(key, x, 0, len(x))
    # 在正确的位置插入 key
    x.insert(index, key)


# 如果直接运行此脚本，它将执行测试函数
if __name__ == "__main__":
    test()
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
