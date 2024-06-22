---
title: Question01
date: 2023-03-06 18:20:13
author: AI悦创
isOriginal: true
category: 
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
tag:
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
icon: python
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

## 1. Loose Change

> 零钱

Because we don't use 1 cent coins anymore, when you use cash to buy things like groceries, the amount is rounded up or down to the nearest 5 cents. For example if you buy \$5.57 worth of carrots, it would get rounded down and you would pay \$5.55 in cash (saving 2 cents!). But \$5.58 worth of carrots would get rounded up and cost \$5.60.

> 因为我们不再使用1美分的硬币了，当你用现金买东西，比如杂货，金额会四舍五入到最接近的5美分。例如，如果你买了价值5.57美元的胡萝卜，它将被四舍五入，你将支付5.55美元的现金(节省2美分!)但是价值5.58美元的胡萝卜会被四舍五入到5.60美元。

Life hack: Always go for the option which is rounded down!

> 生活小贴士:总是选择四舍五入的选项!

Write a program that takes the cost of an item and tells you whether the cost stays the same/is rounded down (good, pay in cash), or was rounded up (bad, you should pay by card).

> 编写一个程序，计算物品的成本，并告诉你成本是保持不变/四舍五入(好的，用现金支付)，还是四舍五入(坏的，你应该刷卡支付)。

The output of your program should look like this:

> 程序的输出应该是这样的:

```python
How much does it cost? 5.57
The price didn't change or was rounded down! Pay cash!
```

```python
How much does it cost? 5.58
The price was rounded up! Pay card.
```

```python
How much does it cost? 3.23
The price was rounded up! Pay card.
```

### 1.1 Hint

Think about multiplying the price by 100.

> 考虑一下价格乘以100。

### 1.2 Did you know

This technique is called [Salami Slicing](https://en.wikipedia.org/wiki/Salami_slicing), and can be applied in many other circumstances.

> 这种技术被称为香肠切片，可以应用在许多其他情况下。

### 1.3 Answer

```python
cost = float(input("How much does it cost? "))

rounded_cost = round(cost / 0.05) * 0.05
if cost < rounded_cost:
    print("The price was rounded up! Pay card.")
else:
    print("The price didn't change or was rounded down! Pay cash!")
```

### 1.4 解析

当我们使用现金购买商品时，由于现在不再使用一分钱硬币，因此交易金额会被四舍五入到最接近的五分钱。例如，如果您购买了价值 5.57 美元的胡萝卜，则会向下舍入，您将支付 5.55 美元（节省 2 美分！）。但是，价值 5.58 美元的胡萝卜将向上舍入并花费 5.60 美元。因此，我们的目标是要确定价格是向上舍入还是向下舍入，以便我们可以决定是用现金购买商品还是用信用卡购买商品。

以下是一个 Python 程序，该程序以商品价格作为输入，并告诉您价格是否向上舍入：

```python
cost = float(input("How much does it cost? "))

# 四舍五入
rounded_cost = round(cost / 0.05) * 0.05

if cost <= rounded_cost:
    print("The price didn't change or was rounded down! Pay cash!")
else:
    print("The price was rounded up! Pay card.")
```

### 1.5 知识点

`round()` 是 Python 内置函数之一，用于将一个数字四舍五入到指定的小数位数或到最接近的整数。它的语法如下：

```python
round(number[, ndigits])
```

其中，`number` 是要舍入的数字，`ndigits` 是保留的小数位数，默认值为 0，表示将 `number` 舍入到最接近的整数。

下面是一些使用 `round()` 函数的示例：

```python
print(round(3.14159))  # 输出 3
print(round(3.14159, 2))  # 输出 3.14
print(round(3.14159, 3))  # 输出 3.142
```

在这些示例中，第一个调用将 3.14159 四舍五入到最接近的整数 3，第二个调用将其舍入到保留 2 个小数位的值 3.14，第三个调用将其舍入到保留 3 个小数位的值 3.142。

对于本题，我们可以使用 `round()` 函数将商品价格四舍五入到最接近的五分钱。具体来说，我们可以将商品价格除以 0.05，使用 `round()` 函数将结果四舍五入到最接近的整数，然后将结果乘以 0.05 以获取舍入后的价格。

以下是一个演示程序，展示了如何使用 `round()` 函数将一个数字四舍五入到最接近的五分钱：

```python
cost = 5.57
rounded_cost = round(cost / 0.05) * 0.05
print(rounded_cost)  # 输出 5.55

cost = 5.58
rounded_cost = round(cost / 0.05) * 0.05
print(rounded_cost)  # 输出 5.6
```

在这个演示程序中，我们首先定义了一个商品价格 `cost`，然后使用 `round()` 函数将其四舍五入到最接近的五分钱。对于 5.57 美元的商品，舍入后的价格为 5.55 美元，对于 5.58 美元的商品，舍入后的价格为 5.6 美元。

### 1.6 补充

在美国和一些其他国家，硬币面值中最小的单位是五分钱（0.05美元）。因此，如果我们要将价格舍入到最接近的硬币面值，那么最小的单位就是五分钱。

当我们将价格除以 0.05，我们得到的是价格相对于五分钱的比率。例如，5.57 美元除以 0.05 等于 111.4。我们使用 `round()` 函数将这个比率四舍五入到最接近的整数，然后再将整数乘以 0.05，就可以得到最接近的五分钱的价格。

因此，使用 0.05 作为舍入单位是因为这是美元中最小的硬币面值单位。





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
