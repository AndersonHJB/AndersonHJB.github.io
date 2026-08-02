---
title: bogosort-sorting-algorithms
date: 2024-09-09 20:07:23
author: AI悦创
isOriginal: true
icon: python
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true
 

backToTop: true
toc: true
---

## 1. 前置知识

- 随机库：`random`

    - `random.randint(a, b)`

        ```python
        import random
        
        r = random.randint(1,2) # 左闭右闭
        print(r)
        ```

- 内置函数：

    - `len()` ✅
    - `range()` ✅

- 语法：

    - `for` ✅
    - `function`
    - `比较运算符` ✅
    - 多个变量同时赋予不同值 ｜ 引入多一个变量

## 2. 排序原理

- 这是一个笑话算法
- 随机打乱列表，判断列表是否有序，无序则继续打乱，继续判断……

## 3. 功能拆解

### 3.1 Step1: 是否有序问题

**问题：** 如何判断一个列表是否有序？

> 思考🤔一下，类似之前讲到: 如何判断用户输入的是否的浮点数是否合法？
>
> - Solution 1: 先用内置函数 `count()` 算出输入中有几个小数点（`.`），再 `replace()`小数点判断其是否为纯数字。
> - Solution 2: 直接 `replace('.', 1)` 控制替换次数为 1，接着判断是否是数字字符串；

测试1：

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8]
result = is_sorted(lst)
print(result)

# ---out---
True
```

测试2:

```python
lst = [0, 2, 1, 4, 5, 6, 7, 8]
result = is_sorted(lst)
print(result)

# ---out---
False
```

### 3.2 Step2: 解决 Step1

1. 不使用函数语法实现

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8]
first = lst[0]
is_sorted = True  # 假设列表是升序的

for i in lst:
    if first <= i:
        first = i  # 更新 first 为当前元素
    else:
        is_sorted = False  # 一旦发现不满足条件，标记为 False
        break  # 终止循环

print(is_sorted)  # 输出 True 或 False
```

2. 使用函数语法实现

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8]

def is_sorted(lst):
    first = lst[0]
    for i in lst:
        if first <= i:
            first = i
        else:
            return False  # 借助：函数一遇到 return 就会结束，无论后面是否还有代码
    return True
```

3. 更优雅实现

    存在问题：上面为什么还需要引入一个变量？不可以去掉吗？——可以

```python
def is_sorted(lst):
    # 从第二个元素开始遍历，因为第一个元素没有前一个元素可以比较
    for i in range(1, len(lst)):
        # 如果前一个元素大于当前元素，说明不是升序排列
        if lst[i - 1] > lst[i]:
            return False
    # 如果没有发现任何不符合升序的情况，返回True
    return True

lst = [1, 2, 3, 4, 5, 6, 7, 8]
print(is_sorted(lst))  # 输出 True
```

### 3.3 Step3: 如何打乱列表

::: tabs

@tab 1. 使用 `random.shuffle()` (推荐)

这是最直接的方法，Python 自带的 `random` 模块已经实现了对列表的就地随机打乱。

```python
import random

mylist = [1, 2, 3, 4, 5]
random.shuffle(mylist)  # 就地打乱列表
print(mylist)
```

**特点**：

- 这是官方提供的标准方法，简单且高效。
- 原地打乱，不返回新列表，直接修改原始列表。

@tab 2. 使用 `random.sample()`（不修改原列表）

如果不想修改原列表，而是想创建一个新的打乱顺序的列表，可以使用 `random.sample()`。

```python
import random

mylist = [1, 2, 3, 4, 5]
shuffled_list = random.sample(mylist, len(mylist))  # 返回打乱后的新列表
print(shuffled_list)
```

@tab 3. 使用 Fisher-Yates 洗牌算法（手动实现 shuffle）

## 1. Fisher-Yates 洗牌算法简介

Fisher-Yates 洗牌算法，也称为 **Knuth 洗牌算法**，是一种用于随机打乱一个列表或数组的经典算法。它通过将每个元素与未打乱部分的元素随机交换，确保每个元素在打乱后的列表中有相同的概率出现在任何位置。

## 2. 算法的原理

Fisher-Yates 算法的核心思想是，从未打乱的部分中随机选取一个元素与当前元素进行交换，并逐步缩小未打乱的范围，直到整个列表都被随机打乱。

步骤如下：

1. **从后向前遍历**：从列表的最后一个元素开始，遍历到列表的第一个元素。
2. **随机选择一个索引**：在当前未打乱的部分中随机选择一个索引，范围是从 0 到当前元素的索引。
3. **交换元素**：将当前元素与随机选择的索引对应的元素交换位置。
4. **继续遍历**：然后继续向前移动，直到所有元素都被遍历并交换过。

这种方式可以保证每个元素被选择和交换的概率是均匀的，因此打乱后的列表是完全随机的。

## 3. Fisher-Yates 算法步骤详解

假设我们有一个包含 5 个元素的列表 `mylist = [1, 2, 3, 4, 5]`，我们使用 Fisher-Yates 算法打乱它。

1. **初始列表**：

```python
mylist = [1, 2, 3, 4, 5]
```

2. **从后往前遍历**：

- 第一次，`i = 4`（列表的最后一个元素 `5`），我们在 `[0, 4]` 范围内随机选择一个索引，比如 `j = 2`，然后交换 `mylist[4]` 和 `mylist[2]`：

    ```python
    mylist = [1, 2, 5, 4, 3]  # 交换 5 和 3
    ```

- 第二次，`i = 3`（元素 `4`），我们在 `[0, 3]` 范围内随机选择一个索引，比如 `j = 0`，然后交换 `mylist[3]` 和 `mylist[0]`：

    ```python
    mylist = [4, 2, 5, 1, 3]  # 交换 4 和 1
    ```

- 第三次，`i = 2`（元素 `5`），我们在 `[0, 2]` 范围内随机选择一个索引，比如 `j = 1`，然后交换 `mylist[2]` 和 `mylist[1]`：

    ```python
    mylist = [4, 5, 2, 1, 3]  # 交换 5 和 2
    ```

- 第四次，`i = 1`（元素 `5`），我们在 `[0, 1]` 范围内随机选择一个索引，比如 `j = 0`，然后交换 `mylist[1]` 和 `mylist[0]`：

    ```python
    mylist = [5, 4, 2, 1, 3]  # 交换 5 和 4
    ```

- 到此为止，列表已经被打乱。

3. **最终打乱的列表**：

```python
mylist = [5, 4, 2, 1, 3]
```

## 4. Fisher-Yates 洗牌算法的代码实现

下面是 Fisher-Yates 算法的 Python 实现：

```python
import random

def fisher_yates_shuffle(mylist):
    n = len(mylist)  # 获取列表的长度
    # 从列表的最后一个元素开始，逐步向前遍历，i 是当前元素的索引
    for i in range(n-1, 0, -1):  # i 从 n-1 到 1（不包含 0），步长为 -1
        # 在索引范围 [0, i] 之间随机选择一个整数 j
        j = random.randint(0, i)
        # 将当前元素 mylist[i] 与随机选择的元素 mylist[j] 交换位置
        mylist[i], mylist[j] = mylist[j], mylist[i]
    return mylist  # 返回已经打乱顺序的列表
```

**特点**：

- 这种方法可以手动控制打乱过程，理解 shuffle 的底层逻辑。
- 和 `random.shuffle()` 效果一致。

## 5. 时间复杂度和随机性分析

- **时间复杂度**：Fisher-Yates 洗牌算法的时间复杂度是 O(n)，因为每次循环我们只进行一次随机选择和一次交换操作，并且只遍历一次列表。
- **随机性**：Fisher-Yates 算法能保证列表中的每个元素在打乱后的任意位置上出现的概率是均等的。通过逐步缩小范围，避免了重复选择或无效操作。

## 6. 为什么 Fisher-Yates 算法更高效？

相较于一些简单的随机交换算法（比如遍历每个元素然后随机交换），Fisher-Yates 算法的高效性体现在：

1. 每次交换都只会选择未打乱的部分，这避免了已经打乱的元素被再次选择的情况。
2. 算法的操作次数与列表的长度成线性关系，因此在处理大规模数据时，性能也非常出色。

## 7. 总结

Fisher-Yates 洗牌算法是一种高效且随机性强的算法，能够保证在 $O(n)$ 时间复杂度内打乱一个列表。通过避免重复选择或无效交换，它确保了打乱的均匀性，是现代编程中最常用的洗牌算法。

@tab 4. 使用 `sorted()` + 随机键

通过给 `sorted()` 函数传入一个随机排序键，可以打乱列表顺序：

```python
import random

mylist = [1, 2, 3, 4, 5]
shuffled_list = sorted(mylist, key=lambda x: random.random())  # 根据随机键排序
print(shuffled_list)
```

**特点**：

- 使用 `sorted()` 函数通过随机键进行打乱。
- 虽然能实现，但效率较低，因为 `sorted()` 的复杂度为 $O(n \space log \space n)$，而 shuffle 操作的复杂度应该是 $O(n)$。

@tab 5. 使用 NumPy 的 `np.random.shuffle()`

如果在处理的是 NumPy 数组，也可以使用 NumPy 提供的 `shuffle` 方法：

```python
import numpy as np

myarray = np.array([1, 2, 3, 4, 5])
np.random.shuffle(myarray)  # 就地打乱 NumPy 数组
print(myarray)
```

**特点：**

- 适合处理大规模的数值型数据，尤其是在科学计算中常用。
- 原地打乱 NumPy 数组，操作与 `random.shuffle()` 类似。

:::

**汇总：**

- `random.shuffle()`：推荐，最常用的原地打乱列表的方法。
- `random.sample()`：返回一个打乱后的新列表，不修改原列表。
- **Fisher-Yates 洗牌算法**：手动实现的打乱列表算法。
- `sorted()` + 随机键：通过随机键打乱列表，效率不高。
- NumPy 的 `np.random.shuffle()`：适合打乱 NumPy 数组，用于大规模数值计算。

在一般情况下，使用 `random.shuffle()` 是最推荐的方式，它简洁且高效。如果需要保留原列表顺序，可以选择 `random.sample()`。

## 4. 实现 Bogosort

::: code-tabs

@tab 1. 使用库

```python
import random  # 导入 Python 的随机模块

# 定义一个 BogoSort 排序算法
def bogoSort(mylist): 
    # 当列表没有排序完成时，不断循环
    while not is_sorted(mylist):  # 如果列表没有排序好...
        random.shuffle(mylist)  # 使用 random.shuffle() 直接打乱列表
    return mylist  # 如果列表排序好了，返回结果

# 定义一个函数用于检查列表是否已经排序
def is_sorted(mylist): 
    n = len(mylist)  # 获取列表的长度
    for i in range(0, n-1):  # 遍历列表的每一个元素
        if mylist[i] > mylist[i+1]:  # 如果当前元素比下一个元素大
            return False  # 则说明列表没有排序好，返回 False
    return True  # 如果循环结束后没有找到任何不符合顺序的情况，则返回 True

# 定义一个待排序的列表
mylist = [3, 2, 4, 1, 0, 5]  # 一个无序列表
# 打印通过 BogoSort 排序后的结果
print(bogoSort(mylist))  # 调用 bogoSort 函数并打印结果
```

@tab 2. 使用洗牌法

```python
```

@tab 3. Other

```python
import random


def bogoSort(mylist):
    while (is_sorted(mylist) == False):  # if the list is not sorted...
        shuffle(mylist)  # ...shuffle again
    return (mylist)  # if sorted, return


# check if list is sorted
def is_sorted(mylist):
    n = len(mylist)
    for i in range(0, n - 1):  # iterate through list
        if (mylist[i] > mylist[i + 1]):  # if number is bigger than the number to the right
            return False  # list is not sorted so return False


# shuffle the list
def shuffle(mylist):
    n = len(mylist)
    for i in range(0, n):
        r = random.randint(0, n - 1)  # go through list, swapping each
        mylist[i], mylist[r] = mylist[r], mylist[i]  # item with another randomly chosen
    # item


mylist = [3, 2, 4, 1, 0, 5]  # define a list to sort
print(bogoSort(mylist))  # function call
```

@tab Other 注释

```python
import random  # 导入 Python 的随机模块

# 定义一个 BogoSort 排序算法
def bogoSort(mylist): 
    # 当列表没有排序完成时，不断循环
    while (is_sorted(mylist) == False):  # 如果列表没有排序好...
        shuffle(mylist)  # ...就随机打乱列表重新排列
    return(mylist)  # 如果列表排序好了，返回结果

# 定义一个函数用于检查列表是否已经排序
def is_sorted(mylist): 
    n = len(mylist)  # 获取列表的长度
    for i in range(0, n-1):  # 遍历列表的每一个元素
        if (mylist[i] > mylist[i+1]):  # 如果当前元素比下一个元素大
            return False  # 则说明列表没有排序好，返回 False
    return True  # 如果循环结束后没有找到任何不符合顺序的情况，则返回 True

# 定义一个函数用于随机打乱列表
def shuffle(mylist): 
    n = len(mylist)  # 获取列表的长度
    for i in range(0, n):  # 遍历列表的每一个元素
        r = random.randint(0, n-1)  # 随机生成一个索引 r
        mylist[i], mylist[r] = mylist[r], mylist[i]  # 将当前元素与随机索引的元素交换位置

# 定义一个待排序的列表
mylist = [3, 2, 4, 1, 0, 5]  # 一个无序列表
# 打印通过 BogoSort 排序后的结果
print(bogoSort(mylist))  # 调用 bogoSort 函数并打印结果
```

:::

**Other 解释：**

- BogoSort 是一种非常低效的排序算法，原理是不断随机打乱列表，直到列表变得有序。
- `is_sorted` 函数用来检查列表是否按照从小到大的顺序排列。
- `shuffle` 函数会随机打乱列表中的元素。
- 这个算法的效率极其低下，因为它完全依赖于随机性来完成排序。

















- AI提高效率就不用
- AI实现其它领域需要



















::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
