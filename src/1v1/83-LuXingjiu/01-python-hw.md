---
title: 爬虫2
date: 2024-03-13 14:47:20
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
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## 一. 程序题（共20题，100分）

### 1. (程序题)定义函数计算水费

定义函数，计算水费。某地按照年度用水量，对水费实行阶梯计费：

用水量不超过 180 立方米，水价为 5 元/立方米；用水量在 181～260 立方米，水价为 7 元/立方米；用水量超过 260 立方米，水价为 9 元/立方米。

使用 input 语句输入用水量（整数），然后调用该函数计算阶梯水费并输出计算结果。

输入示例： 200 输出示例： 1040

```python
def calculate_water_bill(water_usage):
    if water_usage <= 180:
        return water_usage * 5
    elif water_usage <= 260:
        return 180 * 5 + (water_usage - 180) * 7
    else:
        return 180 * 5 + 80 * 7 + (water_usage - 260) * 9

# Example input
water_usage = 200
# Calculate and print the bill
bill = calculate_water_bill(water_usage)
print(bill)
```



### 2. 定义函数求 n 的阶乘

定义函数，求 n 的阶乘，默认 n=10。调用该函数，分别计算 5 和 10 的阶乘并输出计算结果（使用2条输出语句）。

输入示例： 无 

输出示例： 1203628800

```python
# 定义求阶乘的函数
def factorial(n=10):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)

# 调用函数计算5和10的阶乘
factorial_5 = factorial(5)
factorial_10 = factorial(10)

print(factorial_5, factorial_10)
```



### 3. 利用 Lambda 表达式实现排序功能

有以下水果价格字典，使用lambda表达式，按价格从高到低对字典排序，并输出排序结果。

`{'apple': 12.6, 'grape': 21.0, 'orange': 8.8, 'banana': 10.8, 'pear': 6.5}`

输入示例： 无 

输出示例： `[('grape', 21.0), ('apple', 12.6), ('banana', 10.8), ('orange', 8.8), ('pear', 6.5)]`

```python
# 定义水果价格字典
fruits = {'apple': 12.6, 'grape': 21.0, 'orange': 8.8, 'banana': 10.8, 'pear': 6.5}

# 使用lambda表达式对字典按价格从高到低排序
sorted_fruits = sorted(fruits.items(), key=lambda item: item[1], reverse=True)

print(sorted_fruits)
```



### 4. 交换两个数

交换两个数使用 input 语句分别输入两个数，然后交换两个数的值，并输出交换结果。

输入示例： 

4

3

输出示例：4 3

```python
a = int(input())
b = int(input())

a, b = b, aa = int(input())
b = int(input())

a, b = b, a

print(a, b)

print(a, b)
```





### 5. 构建列表推导式并统计数量

利用循环语句，依次从键盘输入 6 个整数，并添加到列表 nums 中。然后，完成下列操作。

（1）使用列表推导式建立 3 个列表 pos_list、neg_list、zero_list 分别保存正数、负数和零。

（2）统计正数、负数和零的个数，并依次输出统计结果。输入示例：

输入示例： 

3

-2

0

-5

10

15 

输出示例： 

3

2

1

```python
# 创建一个空列表用于存储用户输入的整数
nums = []

# 提示用户输入 6 个整数，并添加到列表 nums 中
for _ in range(6):
    num = int(input("请输入一个整数："))
    nums.append(num)

# 列表推导式分别生成正数列表、负数列表和零列表
pos_list = [num for num in nums if num > 0]
neg_list = [num for num in nums if num < 0]
zero_list = [num for num in nums if num == 0]

# 分别统计正数、负数和零的个数
pos_count = len(pos_list)
neg_count = len(neg_list)
zero_count = len(zero_list)

# 输出统计结果
print(pos_count)
print(neg_count)
print(zero_count)
```



### 6. 求 1～100 内所有奇数之和

使用 while 循环加条件语句实现。

计算并输出1～100的奇数之和。

输入示例： 无 

输出示例： 2500

```python
# 初始化变量
num = 1  # 起始数字
sum_odd = 0  # 奇数和

# 使用 while 循环加条件语句计算1～100内所有奇数之和
while num <= 100:
    if num % 2 != 0:
        sum_odd += num
    num += 1

# 输出结果
print(sum_odd)
```



### 7. 温度统计

使用元组记录某地一周的最高温度和最低温度，统计这一周的最高温度、最低温度和每日平均温度，并依次输出统计结果。

最高温度：30, 28, 29, 31, 33, 35, 32

最低温度：20, 21, 19, 22, 23, 24, 20

输入示例： 无 

输出示例： 

35

19

[25.0, 24.5, 24.0, 26.5, 28.0, 29.5, 26.0]

```python
# 定义一周的最高温度和最低温度
high_temps = (30, 28, 29, 31, 33, 35, 32)
low_temps = (20, 21, 19, 22, 23, 24, 20)

# 计算一周的最高温度
max_temp = max(high_temps)

# 计算一周的最低温度
min_temp = min(low_temps)

# 计算每日平均温度
average_temps = [(high + low) / 2 for high, low in zip(high_temps, low_temps)]

print(max_temp, min_temp, average_temps)
```



### 8. 列表排序

将 2 个列表 list1 和 list2 合并为一个列表 alist，并对 alist 降序排序。

list1 = [57, 71, 78, 73, 85, 90, 65, 87]

list2 = [78, 90, 68, 82, 71, 89, 93, 82]

输入示例： 无 

输入示例： [93, 90, 90, 89, 87, 85, 82, 82, 78, 78, 73, 71, 71, 68, 65, 57]

```python
# Given lists
list1 = [57, 71, 78, 73, 85, 90, 65, 87]
list2 = [78, 90, 68, 82, 71, 89, 93, 82]

# Merging and sorting the lists in descending order
alist = sorted(list1 + list2, reverse=True)
print(alist)
```



### 9. 定义函数查询价格

有以下水果价格字典，定义函数，可以同时查询多种水果的价格。调用该函数，显示查询结果。

`{'apple': 12.6, 'grape': 21.0, 'orange': 8.8, 'banana': 10.8, 'pear': 6.5}`

输入示例： 无 

输出示例：

`[('grape', 21.0)]`

`[('apple', 12.6), ('orange', 8.8)]`

`[('apple', 12.6), ('peach', -1), ('pear', 6.5)]`







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





