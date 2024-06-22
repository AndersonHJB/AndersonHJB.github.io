---
title: AI程序设计练习题II
icon: python
date: 2023-12-12 22:14:10
author: AI悦创
isOriginal: true
category: 
    - python 1v1
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









## 排兵布阵

### 题目背景

小未带领队伍参加了一个比赛，这个比赛需要进行排兵布阵。

### 题目描述

小未的队伍共有 $n$ 位选手，第 $i$ 位选手的能力值为 $a_i$。对于小未的对手而言，能力值相同的选手是没有区别的。一场比赛由 $m$ 小局构成，每一小局只能派一位选手上场，且一位选手只能参加一小局。

请问，对于小未的对手而言，小未有多少种排兵布阵的方式？

### 输入格式

输入共两行：

第一行输入两个用空格分隔的正整数，依次表示 $n$ 和 $m$；

第二行输入 $n$ 个用空格分隔的正整数，依次表示 $n$ 位选手的能力值。

### 输出格式

输出一个正整数，表示答案。

### 样例 #1

#### 样例输入 #1

```
4 3
8 2 7 7
```

#### 样例输出 #1

```
12
```

### 提示

样例解释：对于小未的对手而言，$12$ 种排兵布阵的方式对应的上场选手的能力值分别是：
* $2, 7, 7$
* $2, 7, 8$
* $2, 8, 7$
* $7, 2, 7$
* $7, 2, 8$
* $7, 7, 2$
* $7, 7, 8$
* $7, 8, 2$
* $7, 8, 7$
* $8, 2, 7$
* $8, 7, 2$
* $8, 7, 7$

本题共有十组测试数据：
* 对于前四组测试数据，满足 $n = 4, m = 3, 0 < a_i \le 100$；
* 对于前八组测试数据，满足 $m = 3 \le n \le 10, 0 < a_i \le 100$；
* 对于所有的测试数据，满足 $0 < m \le n \le 10, 0 < a_i \le 100$。

::: code-tabs

@tab Code1

```python
from collections import Counter


def count_arrangements(n, m, abilities):
    ability_counts = Counter(abilities)

    def calculate_arrangements(counts, m):
        if m == 0:
            return 1
        if not counts:
            return 0

        total = 0
        for ability in list(counts.keys()):
            if counts[ability] > 0:
                counts[ability] -= 1
                total += calculate_arrangements(counts, m - 1)
                counts[ability] += 1
        return total

    return calculate_arrangements(ability_counts, m)


# n, m = 4, 3
# abilities = [8, 2, 7, 7]
n, m = map(int, input().split())
abilities = list(map(int, input().split()))
a = count_arrangements(n, m, abilities)
print(a)
```

@tab Code2

```python
from collections import Counter
from math import factorial

# 解析输入数据
n, m = 4, 3  # 选手总数和小局数
abilities = [8, 2, 7, 7]  # 各选手的能力值

# 统计每个能力值的选手数量
abilities_count = Counter(abilities)

# 计算排列数
def calculate_arrangements(n, m, counts):
    # 如果小局数大于选手数，没有有效的排列方式
    if m > n:
        return 0
    
    # 排列数初始化为总排列数
    total_arrangements = factorial(n) // factorial(n - m)

    # 对于每个能力值的重复选手，我们需要除以它们的排列数来去除重复
    for count in counts.values():
        if count > 1:
            total_arrangements //= factorial(count)

    return total_arrangements

# 计算排列组合数
arrangements = calculate_arrangements(n, m, abilities_count)
arrangements
```

@tab Code3

```python
# 输入
n, m = map(int, input().split())
abilities = list(map(int, input().split()))

# 手动统计每个能力值的选手数量
abilities_count = {}
for ability in abilities:
    if ability in abilities_count:
        abilities_count[ability] += 1
    else:
        abilities_count[ability] = 1

# 计算阶乘
def factorial(num):
    if num == 0 or num == 1:
        return 1
    result = 1
    for i in range(2, num + 1):
        result *= i
    return result

# 计算排列数
def calculate_arrangements(n, m, counts):
    if m > n:
        return 0
    
    total_arrangements = factorial(n) // factorial(n - m)
    for count in counts.values():
        if count > 1:
            total_arrangements //= factorial(count)

    return total_arrangements

# 计算排列组合数
arrangements = calculate_arrangements(n, m, abilities_count)
print(arrangements)
```

@tab Code4

```python
# 输入部分：从用户那里接收输入数据
n, m = map(int, input().split())  # n 是选手总数，m 是小局数
abilities = list(map(int, input().split()))  # abilities 是一个列表，包含每个选手的能力值

# 手动统计每个能力值的选手数量
abilities_count = {}  # 初始化一个空字典来存储能力值及其对应的选手数量
for ability in abilities:
    if ability in abilities_count:
        abilities_count[ability] += 1  # 如果该能力值已存在，则增加其计数
    else:
        abilities_count[ability] = 1   # 如果该能力值不存在，则添加到字典中并设置计数为1

# 定义一个计算阶乘的函数
def factorial(num):
    if num == 0 or num == 1:
        return 1  # 0的阶乘和1的阶乘都是1
    result = 1
    for i in range(2, num + 1):
        result *= i  # 计算num的阶乘
    return result

# 定义一个计算排列数的函数
def calculate_arrangements(n, m, counts):
    if m > n:
        return 0  # 如果小局数大于选手数，没有有效的排列方式
    
    total_arrangements = factorial(n) // factorial(n - m)  # 计算总排列数
    for count in counts.values():
        if count > 1:
            total_arrangements //= factorial(count)  # 对于重复的能力值，需要除以它们的排列数来去除重复

    return total_arrangements

# 计算并打印排列组合数
arrangements = calculate_arrangements(n, m, abilities_count)
print(arrangements)
```

:::









































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

::: details old

````markdown
好的，我将详细解释我刚才编写的代码的每一行，以便您更好地理解它是如何工作的。

```python
from collections import Counter
from math import factorial
```
这两行导入了所需的 Python 模块。`Counter` 用于统计每个不同能力值的选手数量，而 `factorial` 用于计算阶乘，这对于计算排列数是必需的。

```python
# 解析输入数据
n, m = 4, 3  # 选手总数和小局数
abilities = [8, 2, 7, 7]  # 各选手的能力值
```
这里我手动设置了示例输入数据。在实际应用中，这些数据会从外部输入获得。`n` 是选手总数，`m` 是小局数，`abilities` 是一个列表，包含每位选手的能力值。

```python
# 统计每个能力值的选手数量
abilities_count = Counter(abilities)
```
使用 `Counter` 对象统计每个不同能力值的选手数量。例如，如果有两个选手的能力值为 7，那么 `Counter` 对象将包含一个键值对 `7: 2`。

```python
# 计算排列数
def calculate_arrangements(n, m, counts):
    # 如果小局数大于选手数，没有有效的排列方式
    if m > n:
        return 0
    
    # 排列数初始化为总排列数
    total_arrangements = factorial(n) // factorial(n - m)

    # 对于每个能力值的重复选手，我们需要除以它们的排列数来去除重复
    for count in counts.values():
        if count > 1:
            total_arrangements //= factorial(count)

    return total_arrangements
```
这个函数是核心。它计算了在给定条件下的不同排阵方式的数量。首先，如果小局数 `m` 大于选手数 `n`，则直接返回 0，因为不可能有有效的排列。然后，计算总排列数，这是从 `n` 个选手中选择 `m` 个进行排列的方式数。接下来，对于每个重复的能力值，我们需要除以它们的排列数来去除重复的排列。最后，返回计算出的总排列数。

```python
# 计算排列组合数
arrangements = calculate_arrangements(n, m, abilities_count)
arrangements
```
最后，调用 `calculate_arrangements` 函数，并传入相应的参数，以计算并返回不同排阵方式的总数。这个数字就是我们的最终答案。在这个例子中，答案是 12，意味着有 12 种不同的排兵布阵方式。
````



:::





