---
title: Linear Search
date: 2024-09-21 21:14:25
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

## 1. 介绍

你好，我是悦创。

Python 中的线性查找（Linear Search）是一种简单的查找算法，用于在列表或数组中查找特定元素。

线性查找的基本思想是从列表的第一个元素开始，逐一比较每个元素，直到找到目标元素或遍历完整个列表为止。



## 2. 线性查找的基本步骤

1. **从第一个元素开始**，将其与目标值进行比较。
2. **如果找到目标值**，则返回该元素所在的索引。
3. **如果没有找到目标值**，继续比较列表中的下一个元素。
4. 如果遍历完整个列表仍然没有找到目标值，表示目标值不存在于列表中。（一般返回 `-1`）。



## 3. 线性查找的代码实现

### 3.1 只有一个符合目标值的情况

```python
def linear_search(arr, target):
    """
    在线性查找中，逐个元素与目标值比较，直到找到目标或遍历结束。

    参数:
    arr -- 需要查找的列表
    target -- 需要查找的目标值

    返回:
    如果找到目标值，返回其索引；如果未找到，返回-1。
    """
    # 遍历列表中的每个元素
    for index in range(len(arr)):
        # 比较当前元素是否与目标值相等
        if arr[index] == target:
            return index  # 找到目标值，返回其索引
    return -1  # 如果未找到，返回-1表示目标值不存在

# 示例使用
numbers = [10, 23, 45, 70, 11, 15]
target = 70

# 调用线性查找函数
result = linear_search(numbers, target)

# 打印结果
if result != -1:
    print(f"找到目标值 {target}，它的索引是 {result}")
else:
    print(f"未找到目标值 {target}")
```

### 3.2 有多个目标值的情况

```python
def linear_search(arr, target):
    positions = []
    # 遍历列表中的每个元素
    for index in range(len(arr)):
        # 比较当前元素是否与目标值相等
        if arr[index] == target:
            positions.append(index)
    if positions:
        return -1
    return positions


# 示例使用
numbers = [10, 23, 45, 70, 11, 15]
target = 70

# 调用线性查找函数
result = linear_search(numbers, target)

# 打印结果
if result != -1:
    print(f"找到目标值 {target}，它的索引是 {result}")
else:
    print(f"未找到目标值 {target}")
```



## 4. 小试牛刀

::: tabs

@tab 题目1：森林里的隐藏宝藏

你被困在一片神秘的森林里，传说森林里隐藏着一块能指引方向的宝藏石。森林被划分为一系列的区域，每个区域都有一块石头，但只有一块是真正的宝藏石。每块石头上都有一个刻印编号。已知这些编号的列表 `stones`，你的任务是通过线性查找找到宝藏石的编号 `treasure_stone`。

**要求：**
1. 编写一个线性查找算法，找到宝藏石的编号位置。
2. 输出宝藏石所在区域的索引。

**输入：**

一个列表 `stones`，包含区域的石头编号；一个整数 `treasure_stone` 表示宝藏石的编号。

**输出：**

找到宝藏石编号的位置，或者输出“未找到”。

**示例：**
```python
stones = [14, 52, 89, 33, 71, 26]
treasure_stone = 71
```
**期望输出：**
```
宝藏石位于区域 4
```

**答案：**

```python
def find_treasure_stone(stones, treasure_stone):
    """
    在列表中查找宝藏石的位置。
    
    参数:
    stones -- 一个包含石头编号的列表
    treasure_stone -- 宝藏石的编号
    
    返回:
    宝藏石所在的索引，如果未找到，返回-1
    """
    for index in range(len(stones)):
        if stones[index] == treasure_stone:
            return index + 1  # 返回区域索引(从1开始计数)
    return -1  # 如果未找到，返回-1

# 示例使用
stones = [14, 52, 89, 33, 71, 26]
treasure_stone = 71

result = find_treasure_stone(stones, treasure_stone)

if result != -1:
    print(f"宝藏石位于区域 {result}")
else:
    print("未找到宝藏石")
```

@tab 题目2：机器人迷宫寻路

一个机器人在迷宫中迷路了，迷宫由一系列格子组成。格子用一个列表表示，每个格子可以是空的（用0表示）或有障碍物（用1表示）。机器人需要从起点找到终点，并穿越最短的无障碍路径。你的任务是通过线性查找找到连续的、没有障碍物的最长路径，并返回该路径的起始和结束索引。

**要求：**
1. 使用线性查找算法找到迷宫中最长的连续无障碍路径。
2. 返回最长路径的起始索引和结束索引。

**输入：**

一个列表 `maze`，由 0 和 1 组成，0 代表空格，1 代表障碍物。

**输出：**

返回最长连续无障碍路径的起始和结束索引。

**示例：**

```python
maze = [1, 0, 0, 1, 0, 0, 0, 1, 0]
```
**期望输出：**
```
最长无障碍路径的起点为 4，终点为 6
```

**答案：**

```python
def find_longest_path(maze):
    """
    查找迷宫中最长的无障碍路径。

    参数:
    maze -- 由0（无障碍）和1（有障碍）组成的列表

    返回:
    最长无障碍路径的起始和结束索引
    """
    # 初始化最长路径的长度和起始、结束索引
    max_length = 0
    start_index = -1
    end_index = -1

    # 当前连续无障碍路径的起点和长度
    current_start = 0
    current_length = 0

    # 遍历迷宫列表中的每个格子
    for i in range(len(maze)):
        if maze[i] == 0:  # 如果格子是无障碍
            if current_length == 0:  # 如果当前路径长度为0，开始新路径
                current_start = i  # 记录新的起点
            current_length += 1  # 增加当前路径的长度
        else:  # 如果遇到障碍
            # 如果当前路径比之前记录的最长路径还长，更新最长路径信息
            if current_length > max_length:
                max_length = current_length
                start_index = current_start
                end_index = i - 1  # 障碍物前一格是路径的终点
            current_length = 0  # 重置当前路径长度为0

    # 处理最后一段无障碍路径（如果最后没有障碍，可能是最长路径）
    if current_length > max_length:
        max_length = current_length
        start_index = current_start
        end_index = len(maze) - 1  # 最后一段无障碍路径的终点

    return start_index, end_index  # 返回最长无障碍路径的起始和结束索引

# 示例使用
maze = [1, 0, 0, 1, 0, 0, 0, 1, 0]  # 迷宫格子，1是障碍，0是无障碍

# 调用函数查找最长的无障碍路径
start, end = find_longest_path(maze)

# 输出结果
if start != -1 and end != -1:
    print(f"最长无障碍路径的起点为 {start}，终点为 {end}")
else:
    print("未找到无障碍路径")  # 如果没有无障碍路径，输出提示
```

```python
def treasure_searching(maze):
    consistant_i = []
    count_i = []
    for i in range(len(maze)):
        if maze[i] == 0:
            consistant_i.append(i)
        else:
            if len(consistant_i) > 0:
                count_i.append(consistant_i.copy())
                consistant_i.clear()
    if len(consistant_i) > 0:
        count_i.append(consistant_i.copy())
        consistant_i.clear()

    max_lst = count_i[0]
    for lst in count_i:
        if len(lst) > len(max_lst):
            max_lst = lst
    return max_lst


max_len_lst = treasure_searching(maze)
print(f'最长无障碍路径的起点为 {max_len_lst[0]}，终点为 {max_len_lst[-1]}')
```

@tab 题目3：寻找怪兽足迹

在一个幻想世界中，猎人们正在追踪怪兽的足迹。猎人手里有一张记录足迹的纸条 `tracks`，上面显示了每个时间点怪兽的出现位置（以编号表示）。你的任务是找到怪兽第一次和最后一次出现的位置。你需要编写一个线性查找算法，分别查找出怪兽在列表 `tracks` 中首次和最后一次出现的索引。

**要求：**
1. 使用线性查找分别找到怪兽首次和最后一次出现的位置。
2. 输出首次和最后一次出现的索引。

**输入：**

一个列表 `tracks`，表示怪兽在不同时间点的出现位置。

**输出：**

首次和最后一次出现的索引。

**示例：**
```python
tracks = [5, 2, 7, 8, 5, 7, 2, 5]
```
**期望输出：**
```
怪兽首次出现的位置是 0，最后一次出现的位置是 7
```

**答案：**

```python
def find_first_and_last_occurrence(tracks, target):
    """
    找到目标值首次和最后一次出现的位置。

    参数:
    tracks -- 一个列表，表示怪兽在不同时间点的出现位置
    target -- 要查找的目标值

    返回:
    首次出现的索引和最后一次出现的索引
    """
    # 初始化首次和最后一次出现的位置
    first_occurrence = -1
    last_occurrence = -1

    # 遍历整个列表
    for index in range(len(tracks)):
        if tracks[index] == target:  # 如果当前值等于目标值
            if first_occurrence == -1:  # 如果首次出现的位置还没被设置
                first_occurrence = index  # 记录首次出现的位置
            last_occurrence = index  # 不断更新最后一次出现的位置

    return first_occurrence, last_occurrence  # 返回首次和最后一次出现的索引

# 示例使用
tracks = [5, 2, 7, 8, 5, 7, 2, 5]  # 怪兽出现位置列表
target = 5  # 要查找的怪兽足迹编号

# 调用函数查找目标值的首次和最后一次出现位置
first, last = find_first_and_last_occurrence(tracks, target)

# 输出结果
if first != -1 and last != -1:
    print(f"怪兽首次出现的位置是 {first}，最后一次出现的位置是 {last}")
else:
    print("未找到怪兽足迹")  # 如果没找到目标值，输出提示
```



:::

**这三道题的创新点：**

1. **题目1**：模拟了寻找宝藏的过程，结合冒险和线性查找算法。
2. **题目2**：将迷宫的路径搜索与线性查找结合，强调算法在实际问题中的应用。
3. **题目3**：引入了足迹追踪的情景，探索首次和最后一次出现的情况，通过线性查找解决时间上的定位问题。

















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
