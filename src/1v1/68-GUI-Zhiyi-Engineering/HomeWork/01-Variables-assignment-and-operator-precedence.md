---
title: 01-Variables, assignment and operator precedence
icon: python
date: 2023-10-13 19:30:05
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 留学生作业辅导
tag:
    - 剑桥大学
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

## Exercise 01.1

::: tabs

@tab EN

Degrees Fahrenheit ($T_F$) are converted to degrees Celsius ($T_c$) using the formula:

$$
T_c = 5(T_f - 32)/9
$$

Write a program to convert 46 degrees Fahrenheit to degrees Celsius and print the result.
Write your program such that you can easily change the temperature in Fahrenheit that you are converting from.

Use the variable name `T_c` for the temperature in degrees Celsius.

```python
T_f = 46
...
```

```python
## test ##
import math
assert math.isclose(T_c, 7.77777777777777)
```

@tab ZH

华氏度（$T_F$）转摄氏度（$T_c$）的公式为：

$$
T_c = 5(T_f - 32)/9
$$

编写一个程序，将 46 华氏度转换为摄氏度并打印结果。

编写您的程序，使您可以轻松更改您要转换的华氏温度。

摄氏温度使用变量名 `T_c`。

@tab Answer

```python
# 定义华氏度温度
T_f = 46

# 使用公式进行转换
T_c = 5 * (T_f - 32) / 9

# 打印结果
print(f"{T_f}华氏度等于{round(T_c, 2)}摄氏度")
```

```python
def fahrenheit_to_celsius(T_f):
    T_c = 5 * (T_f - 32) / 9
    return T_c

# Temperature in Fahrenheit to be converted
T_f = 46

T_c = fahrenheit_to_celsius(T_f)
print(f"{T_f} degrees Fahrenheit is {T_c:.2f} degrees Celsius.")
```

:::

## Exercise 01.2

::: tabs

@tab EN

You have been tasked with developing a mortgage affordability test tool. A component is to compute the monthly 
interest payments for a range of scenarios.

Interest on a particular mortgage is charged at fixed rate above the Bank of England (BoE) 'official Bank Rate'. 
Interest is computed per annum, and interest payments spread equally over each month of the year.
Write a program that computes the interest payable each month, with variables for:

1. Loan principal (amount borrowed, fixed)
1. Official Bank Rate (percentage, expressed per annum)
1. Rate over the official Bank Rate (percentage, expressed per annum)

Test your program with a loan principal of £172,000, BoE rate of 2.25%, and rate over the 
BoE rate of 1.49%. Use the variable name `interest` for the monthly interest amount.

@tab ZH

你的任务是开发一个按揭负担能力测试工具。其中一个组件是为一系列情境计算每月的利息支付。

对于特定的按揭，利息按照高于英国银行 (BoE) 的“官方银行利率”的固定利率收取。利息按年计算，每年的利息支付均分到每个月。
编写一个程序，计算每月应支付的利息，变量包括：

1. 贷款本金（借款金额，固定）
2. 官方银行利率（百分比，按年表示）
3. 高于官方银行利率的利率（百分比，按年表示）

使用贷款本金为£172,000、BoE 利率为 2.25%、以及高于 BoE 利率的 1.49% 的利率来测试你的程序。请使用变量名 `interest` 表示每月的利息金额。

@tab Answer

```python
def compute_monthly_interest(principal, official_rate, extra_rate):
    annual_rate = official_rate + extra_rate
    annual_interest = principal * annual_rate
    monthly_interest = annual_interest / 12
    return monthly_interest

# 贷款本金
principal = 172000
# 官方银行利率
official_rate = 0.0225
# 高于官方银行利率的额外利率
extra_rate = 0.0149

interest = compute_monthly_interest(principal, official_rate, extra_rate)
print(f"每月的利息金额是：£{interest:.2f}")
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
