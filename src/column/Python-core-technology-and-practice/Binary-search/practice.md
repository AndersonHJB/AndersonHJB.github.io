---
title: 二分查找专项练习
icon: python
date: 2023-08-21 00:27:38
author: AI悦创
isOriginal: true
category: Python 进阶
tag:
    - Python 进阶
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

## 0. 二分查找代码

```python
# 定义二分查找函数，接受一个有序列表 arr 和一个目标值 x 作为参数
def binary_search(arr, x):
    # 初始化两个指针 low 和 high
    # low 指向数组的开始，high 指向数组的结束
    low, high = 0, len(arr) - 1
    
    # 当 low 指针不大于 high 指针时，循环继续
    while low <= high:
        # 计算中间索引 mid
        mid = (low + high) // 2
        
        # 如果 mid 位置的元素小于目标值 x
        # 说明目标值在 mid 右边，所以更新 low 指针到 mid + 1
        if arr[mid] < x:
            low = mid + 1
        # 如果 mid 位置的元素大于目标值 x
        # 说明目标值在 mid 左边，所以更新 high 指针到 mid - 1
        elif arr[mid] > x:
            high = mid - 1
        # 如果 mid 位置的元素等于目标值 x，直接返回 mid 索引
        else:
            return mid

    # 如果循环结束还没有返回，说明目标值 x 不在列表中，返回 -1
    return -1

# 示例测试
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # 一个已排序的数组
result = binary_search(arr, 5)  # 在数组中查找数字5

# 输出查找结果
if result != -1:
    print(f"元素在数组中的索引为 {result}")
else:
    print("元素不在数组中")
```

## 1. 基础题

> 请注意，这些题目可能需要对二分查找进行一些修改和调整，以满足特定的查找需求，例如查找最接近的值，而不仅仅是精确匹配的值。

### 1.1 电影播放时长查找

假设你有一个有序的电影时长列表（以分钟为单位），现在你想找到一个电影，其播放时长接近于你现在的空闲时间。写一个函数，使用二分查找来找到与你的空闲时间最接近的电影时长，并返回该电影的索引。

```python
def find_closest_movie_duration(durations, free_time):
    # ... 你的二分查找代码 ...

movie_durations = [80, 95, 105, 123, 138, 150, 165, 176, 188, 210]
free_time = 130
print(find_closest_movie_duration(movie_durations, free_time))
```

### 1.2 书籍页数查找

假设你在一个大型图书馆，这个图书馆的书按页数从少到多进行了有序排列。现在，你只记得你要找的书有大约 `n` 页，但你不确定具体是多少。写一个函数，使用二分查找来帮助你快速定位到那本书的大致位置。

```python
def find_book_by_pages(books, target_pages):
    # ... 你的二分查找代码 ...

book_pages = [100, 150, 200, 250, 300, 350, 400, 450, 500]
target = 340
print(find_book_by_pages(book_pages, target))
```

### 1.3 理想温度查找

你有一个按日期排序的气温记录列表，你想知道在过去的某一段时间内，何时的气温最接近你的理想温度。写一个函数，使用二分查找来帮助你找到与你的理想温度最接近的那一天的日期。

```python
def find_ideal_temperature(temperatures, ideal_temp):
    # ... 你的二分查找代码 ...

recorded_temperatures = [15, 17, 19, 21, 22, 23, 24, 25, 27, 29]
ideal = 24
print(find_ideal_temperature(recorded_temperatures, ideal))
```

## 答案

:::: details 1. 基础题目答案

::: tabs

@tab 1.1 电影播放时长查找

```python
def find_closest_movie_duration(durations, free_time):
    # 初始化两个指针
    low, high = 0, len(durations) - 1
    closest_index = -1
    
    # 当 low 不大于 high 时，继续查找
    while low <= high:
        mid = (low + high) // 2
        # 如果找到准确的时长，直接返回
        if durations[mid] == free_time:
            return mid
        # 如果当前时长小于目标时长，更新 low
        if durations[mid] < free_time:
            low = mid + 1
        # 否则更新 high
        else:
            high = mid - 1
        
        # 更新最接近的时长索引
        if closest_index == -1 or abs(durations[mid] - free_time) < abs(durations[closest_index] - free_time):
            closest_index = mid

    return closest_index

movie_durations = [80, 95, 105, 123, 138, 150, 165, 176, 188, 210]
free_time = 130
print(find_closest_movie_duration(movie_durations, free_time))
```

@tab 郑同学代码

```python
def find_closest_movie_duration(durations, free_time):
    low, high = 0, len(durations) - 1
    
    while low <= high:
        mid = (low + high) // 2

        # If the mid duration is less than free_time, increase low
        if durations[mid] < free_time:
            low = mid + 1
        # If the mid duration is greater than free_time, decrease high
        else:
            high = mid - 1

    # After the loop, we will have two candidates: low and high. 
    # Compare the gaps between free_time and the durations at these indices to determine which one is closer.

    # In case low is out of bounds, return high
    if low == len(durations):
        return high
    # In case high is out of bounds (or -1), return low
    if high == -1:
        return low
    
    gap_low = abs(durations[low] - free_time)
    gap_high = abs(durations[high] - free_time)

    # Return the index with the smallest gap
    if gap_low < gap_high:
        return low
    else:
        return high

movie_durations = [80, 95, 105, 123, 138, 150, 165, 176, 188, 210]
free_time = 130
print(find_closest_movie_duration(movie_durations, free_time))
```

@tab 1.2 书籍页数查找

```python
def find_book_by_pages(books, target_pages):
    low, high = 0, len(books) - 1
    while low <= high:
        mid = (low + high) // 2
        # 如果找到相应的页数，直接返回
        if books[mid] == target_pages:
            return mid
        # 如果当前页数小于目标页数，更新 low
        if books[mid] < target_pages:
            low = mid + 1
        # 否则更新 high
        else:
            high = mid - 1

    # 如果没有找到，返回 -1
    return -1

book_pages = [100, 150, 200, 250, 300, 350, 400, 450, 500]
target = 340
print(find_book_by_pages(book_pages, target))
```

@tab 1.3 理想温度查找

```python
def find_ideal_temperature(temperatures, ideal_temp):
    low, high = 0, len(temperatures) - 1
    closest_index = -1
    
    while low <= high:
        mid = (low + high) // 2
        # 如果找到准确的温度，直接返回
        if temperatures[mid] == ideal_temp:
            return mid
        # 如果当前温度低于理想温度，更新 low
        if temperatures[mid] < ideal_temp:
            low = mid + 1
        # 否则更新 high
        else:
            high = mid - 1
        
        # 更新最接近的温度索引
        if closest_index == -1 or abs(temperatures[mid] - ideal_temp) < abs(temperatures[closest_index] - ideal_temp):
            closest_index = mid

    return closest_index

recorded_temperatures = [15, 17, 19, 21, 22, 23, 24, 25, 27, 29]
ideal = 24
print(find_ideal_temperature(recorded_temperatures, ideal))
```

:::

::::





欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

