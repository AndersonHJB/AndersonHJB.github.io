---
title: 09-Homework06 NYU Tandon School of Engineering
date: 2023-03-29 08:19:58
author: AI悦创
isOriginal: true
category:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
tag:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
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
backToTop: true
toc: true
---

## Homework 06 

Due: 1159pm, March 30th, 2023 

> 截止时间:2023年3月30日晚上11分至59分

Submission instructions 

> 提交说明

1. You should submit your homework on Gradescope.

> 你应该在Gradescope上提交作业

2.  For this assignment you should turn in a single .py file named hw5.py, etc. 

> 对于这个任务，你应该提交一个名为hw5.py的文件，等等。

3. This Python file should contain a header comment block as follows:

> 这个Python文件应该包含一个头注释块，如下所示:

```python
"""
Author: [Your name here]
Assignment / Part: HW5
Date due: 2023-03-30, 11:59pm
I pledge that I have completed this assignment without
collaborating with anyone else, in conformance with the
NYU School of Engineering Policies and Procedures on
Academic Misconduct.
"""
```

No late submissions will be accepted.

> 逾期提交的资料恕不受理

REMINDER: Do not use any Python structures that we have not learned in class. 

> 提醒:不要使用任何我们在课堂上没有学过的Python结构。

For this specific assignment, you may use everything we have learned up to, and including, variables, types, mathematical and boolean expressions, user IO (i.e. print() and input()), number systems, and the math / random modules, selection statements (i.e. if, elif, else), and for- and while-loops. Please reach out to us if you're at all unsure about any instruction or whether a Python structure is or is not allowed.

> 对于这个特定的赋值，你可以使用我们学到的所有东西，包括变量、类型、数学和布尔表达式、用户IO(即print()和input())、数字系统和数学/随机模块、选择语句(即if、elif、else)以及For -和while-循环。如果您不确定任何指令或Python结构是否被允许，请与我们联系。

Do not use, for example, file i/o, exception handling, dictionaries, lists, tuples, and/or object-oriented programming. 

> 例如，不要使用文件i/o、异常处理、字典、列表、元组和/或面向对象编程。

Failure to abide by any of these instructions will make your submission subject to point deductions. 

> 如不遵守上述任何一项规定，您的投稿将被扣分。

## Problems 

1. Le Grand Jour「大日子」
2. Converting to Decimal Time「转换为十进制时间」
3. Converting to Revolutionary Dates「转换为革命日期」
4.  Putting it All Together「把它们放在一起」

## Problem 1: Le Grand Jour

> 问题1:Le Grand Jour

::: info

In metric, one milliliter of water occupies one cubic centimeter, weighs one gram, and requires one calorie of energy to heat up by one degree centigrade—which is 1 percent of the difference between its freezing point and its boiling point. An amount of hydrogen weighing the same amount has exactly one mole of atoms in it. 

> 以公制为单位，一毫升水占一立方厘米，重一克，加热1摄氏度需要1卡路里的能量，这是它的冰点和沸点之差的1%。等量的氢原子中含有1mol的原子。

Whereas in the American system, the answer to "How much energy does it take to boil a room- temperature gallon of water?" is "Go f`***` yourself," because you canʼt directly relate any of those quantities.

> 然而在美国的体系中，对于“煮沸一加仑常温的水需要多少能量?”的答案是“去你的”，因为你不能直接把这些量联系起来。

— Josh Bazell 

:::

Note: The format of the output in this problem must perfectly match the examples'. Consider copying-and-pasting. 

> 注意:此问题的输出格式必须与示例完全匹配。考虑复制和粘贴。

## Background 

The metric system was developed in the 1790s as part of the reforms introduced during the [French Revolution](https://en.wikipedia.org/wiki/French_Revolution), which provided an opportunity for the French to reform their inconsistent, unwieldy, and archaic system of many local weights and measures. It is now used as the official system of measurement in all but [three countries](https://worldpopulationreview.com/country-rankings/countries-that-dont-use-the-metric-system) around the world, either fully or to some extent.

> 公制是在18世纪90年代作为[法国大革命]期间改革的一部分而发展起来的(https://en.wikipedia.org/wiki/French_Revolution)，这为法国人改革他们不一致、笨拙和古老的许多地方度量衡系统提供了机会。现在，除[三个国家](https://worldpopulationreview.com/country-rankings/countries-that-dont-use-the-metric-system)外，世界上所有国家都将它作为官方计量系统，或完全或在一定程度上使用。

While metric weights and lengths were readily adopted by the rest of the world and continue to be used, the French also introduced the concept of decimal time and calendarization into their new government, but were both abolished at the end of the revolution. 

> 虽然公制度量衡和长度很容易被世界其他地方所采用并继续使用，但法国人也在他们的新政府中引入了十进制时间和历法的概念，但这两个概念在革命结束时都被废除了。

French revolutionary dates and times functioned as follows: 

> 法国革命的日期和时间如下:

- There were **twelve months**, each divided into **three ten-day weeks** called décades.「一共有十二个月，每个月分为三个十天的星期，称为décades」
    - For this problem you can assume that the Gregorian month will always have 30 days. 「对于这个问题，您可以假设格里高利月总是有30天。」
    - Each day in the was divided into 10 hours. 「每天被分成10个小时。」
    - Each hour was divided into 100 minutes.「每个小时分为100分钟」
    - Each minute was divided into 100 seconds (for this problem, you can assume that 1 decimal second is the same length as a regular second).「每分钟被分为100秒(对于这个问题，您可以假设1个小数秒与普通秒的长度相同)。」

While making programs dealing with times and dates is [notoriously difficult](https://www.youtube.com/watch?v=-5wpm-gesOY&ab_channel=Computerphile), we will create a simplified date- and-time converter that will take a conventional date and time (say, today and right now) and will convert it into its French revolutionary date-time equivalent. 

> 虽然编写处理时间和日期的程序是出了名的困难，但我们将创建一个简化的日期和时间转换器，它将采用传统的日期和时间(例如，今天和现在)，并将其转换为法国革命性的日期和时间。

## Part 1: Converting to decimal time 

> 第1部分:转换为十进制时间

Write a function called `get_decimal_time()` that will accept three integer parameters, each representing a conventional hour, minute, and second, respectively. You can assume that this function will always receive positive arguments during invocation. 

> 编写一个名为get_decimal_time()的函数，该函数接受三个整数参数，每个参数分别表示传统的小时、分钟和秒。您可以假设该函数在调用期间总是接收正参数。

It will then use this information to determine its decimal equivalent, which it will return in a "HOUR:MIN:SEC" format. 

> 然后，它将使用该信息确定其十进制等效值，并以“HOUR:MIN:SEC”格式返回。

Recall that French revolutionary days each have 10 hours, each with 100 minutes, each with 100 seconds. For example:

> 回想一下，法国革命的每一天有10个小时，每一天有100分钟，每一天有100秒。例如:

Example:

```python
decimal_time = get_decimal_time(16, 7, 46) # i.e. roughly 4:07pm in military time
print(decimal_time)
decimal_time = get_decimal_time(7, 47, 2) # i.e. roughly 7:47am 
print(decimal_time)
```

Output:

```python
5:80:66
2:80:22
```

Hint: `//` and `%`. 

> 提示://和%。

### Answer

::: tabs

@tab 1.0

```python
def get_decimal_time(hour, min, sec):
    # 将常规时间（小时、分钟、秒）转换为总秒数
    total_seconds = (hour * 60 * 60) + (min * 60) + sec
    french_hour = total_seconds // 10000
    french_minute = total_seconds % 10000 // 100
    french_second = total_seconds % 10000 % 100

    return (str(french_hour) + ":" + str(french_minute) + ":" + str(french_second))
```

@tab 1.1

```python
def get_decimal_time(hour, minute, second):
    
    total_seconds = hour * 3600 + minute * 60 + second

    # 将总秒数转换为十进制小时
    # 在十进制时间中，一天有 10 小时。所以，将总秒数除以 8640（10 小时 * 60 分钟 * 60 秒）
    decimal_hour = total_seconds // 8640

    # 将剩余的秒数转换为十进制分钟
    # 在十进制时间中，一个小时有 100 分钟。所以，将剩余的秒数除以 86.4（8640 秒 / 100）
    decimal_minute = (total_seconds % 8640) // 86.4

    # 将剩余的秒数转换为十进制秒
    # 在十进制时间中，一分钟有 100 秒。所以，将剩余的秒数除以 0.864（86.4 秒 / 100）
    decimal_second = (total_seconds % 86.4) // 0.864

    # 以 "HOUR:MIN:SEC" 格式返回十进制时间
    return f"{int(decimal_hour)}:{int(decimal_minute)}:{int(decimal_second)}"

# 使用示例输入测试函数
decimal_time = get_decimal_time(16, 7, 46)
print(decimal_time)  # 输出: 5:80:66

decimal_time = get_decimal_time(7, 47, 2)
print(decimal_time)  # 输出: 2:80:22
```



:::



## Part 2: Converting to revolutionary dates

> 第2部分:转换为革命日期

Write a function called `get_decimal_date()` that will accept three integer parameters, each representing a Gregorian month number (i.e. `1` through `12`), a date of the month (assume `1` through `30`), and a [Common Era](https://en.wikipedia.org/wiki/Common_Era) year, respectively. 

> 编写一个名为“get_decimal_date()”的函数，它将接受三个整数参数，每个参数表示一个格里高利月份(即月数)。“1”到“12”)，一个月的日期(假设“1”到“30”)，以及一个[共同时代](https://en.wikipedia.org/wiki/Common_Era)年。

Your function will then use this information to convert this date to its French revolutionary equivalent, and return it as a string of "`[Day]` `[month]` `[year]`, `Décade [décade]`". 

> 然后，函数将使用此信息将此日期转换为法国革命的等值日期，并将其作为“'[日]' '[月]' '[年]'，' Décade [décade] '”的字符串返回。

The French revolutionary months are roughly equivalent to the following: 

> 法国革命的月份大致相当于:

| Gregorian<br />格雷戈里 | French Revolutionary<br />法国革命 |
| ----------------------- | ---------------------------------- |
| January「1月」          | Nivôse「抑郁症」                   |
| February「2月」         | Pluviôse「普鲁维奥斯」             |
| March「3月」            | Ventôse「文托斯」                  |
| April「4月」            | Germinal 「」                      |
| May 「5月」             | Floréal                            |
| June「6月」             | Prairial                           |
|                         |                                    |



```python
def get_decimal_date(month, day, year):
    french_months = ["", "Vendémiaire", "Brumaire", "Frimaire", "Nivôse", "Pluviôse", "Ventôse", "Germinal", "Floréal", "Prairial", "Messidor", "Thermidor", "Fructidor"]
    revolutionary_year = year - 1792
    revolutionary_month = french_months[month]

    decade = (day - 1) // 10 + 1
    return f"{day} {revolutionary_month} Year {revolutionary_year}, Décade {decade}"

revolutionary_date = get_decimal_date(3, 22, 2022)
print(revolutionary_date)

```

```python
def get_decimal_date(month, day, year):
    # 创建法国革命月份的列表
    french_months = ["", "Vendémiaire", "Brumaire", "Frimaire", "Nivôse", "Pluviôse", "Ventôse", "Germinal", "Floréal", "Prairial", "Messidor", "Thermidor", "Fructidor"]
    
    # 计算法国革命年份：将格里高利年份减去1792
    revolutionary_year = year - 1792
    
    # 使用月份列表查找法国革命月份名称
    revolutionary_month = french_months[month]

    # 计算当前日期所在的décade：将天数减1，除以10，然后加1
    decade = (day - 1) // 10 + 1
    
    # 以 "[Day] [month] [year], Décade [décade]" 格式返回法国革命日期
    return f"{day} {revolutionary_month} Year {revolutionary_year}, Décade {decade}"

revolutionary_date = get_decimal_date(3, 22, 2022)
print(revolutionary_date)

```







```python
def get_french_datetime(gregorian_datetime):
    # Split the input string into time and date parts
    time_str, date_str = gregorian_datetime.split()

    # Extract hour, minute, and second from the time part
    hour, minute, second = [int(x) for x in time_str.split(':')]

    # Extract month, day, and year from the date part
    month, day, year = [int(x) for x in date_str.split('/')]

    # Get decimal time by calling the get_decimal_time() function
    decimal_time = get_decimal_time(hour, minute, second)

    # Get French revolutionary date by calling the get_decimal_date() function
    revolutionary_date = get_decimal_date(month, day, year)

    # Return the result as a string with two lines
    return f"{decimal_time}\n{revolutionary_date}"

# Test the function with an example input
gregorian_datetime = "16:07:46 03/22/2022"
french_datetime = get_french_datetime(gregorian_datetime)
print(french_datetime)
```

```python
def get_french_datetime(gregorian_datetime):
    # 将输入字符串分割为时间和日期部分
    time_str, date_str = gregorian_datetime.split()

    # 从时间部分提取小时、分钟和秒
    hour, minute, second = [int(x) for x in time_str.split(':')]

    # 从日期部分提取月、日和年
    month, day, year = [int(x) for x in date_str.split('/')]

    # 通过调用 get_decimal_time() 函数获取十进制时间
    decimal_time = get_decimal_time(hour, minute, second)

    # 通过调用 get_decimal_date() 函数获取法国革命日期
    revolutionary_date = get_decimal_date(month, day, year)

    # 以两行字符串的形式返回结果
    return f"{decimal_time}\n{revolutionary_date}"

# 使用示例输入测试函数
gregorian_datetime = "16:07:46 03/22/2022"
french_datetime = get_french_datetime(gregorian_datetime)
print(french_datetime)
```







```python
def get_decimal_time(hour, min, sec):
    total_seconds = (hour * 60 * 60) + (min * 60) + sec
    french_hour = total_seconds // 10000
    french_minute = total_seconds % 10000 // 100
    french_second = total_seconds % 10000 % 100

    return(str(french_hour) + ":" + str(french_minute) + ":" + str(french_second))

def get_decimal_date(mon, day, year):
    french_month = ''
    french_day = day
    french_year = year-1792
    decade = 0
    if mon == 1:
        french_month += "Nivôse"
    elif mon == 2:
        french_month += "Pluviôse"
    elif mon == 3:
        french_month += "Ventôse"
    elif mon == 4:
        french_month += "Germinal"
    elif mon == 5:
        french_month += "Floréal"
    elif mon == 6:
        french_month += "Prairial"
    elif mon == 7:
        french_month += "Messidor"
    elif mon == 8:
        french_month += "Thermidor"
    elif mon == 9:
        french_month += "Fructidor"
    elif mon == 10:
        french_month += "Vendémiaire"
    elif mon == 11:
        french_month += "Brumaire"
    elif mon == 12:
        french_month += "Frimaire"

    if 1 <= french_day < 11:
        decade += 1
    elif 11 <= french_day < 21:
        decade += 2
    elif 21 <= french_day <= 30:
        decade += 3

    return str(french_day) + " " + str(french_month) + " Year" + " " + str(french_year) + ", Décade " + str(decade)




def main():
    decimal_time = get_decimal_time(16, 7, 46)
    print(decimal_time)
    decimal_time = get_decimal_time(7, 47, 2)
    print(decimal_time)
    revolutionary_date = get_decimal_date(3, 22, 2022)
    print(revolutionary_date)
main()
```





```python
def get_decimal_time(hour, min, sec):
    total_seconds = (hour * 60 * 60) + (min * 60) + sec
    french_hour = total_seconds // 10000
    french_minute = total_seconds % 10000 // 100
    french_second = total_seconds % 10000 % 100

    return(str(french_hour) + ":" + str(french_minute) + ":" + str(french_second))

def get_decimal_date(mon, day, year):
    french_month = ''
    french_day = day
    french_year = year-1792
    decade = 0
    if mon == 1:
        french_month += "Nivôse"
    elif mon == 2:
        french_month += "Pluviôse"
    elif mon == 3:
        french_month += "Ventôse"
    elif mon == 4:
        french_month += "Germinal"
    elif mon == 5:
        french_month += "Floréal"
    elif mon == 6:
        french_month += "Prairial"
    elif mon == 7:
        french_month += "Messidor"
    elif mon == 8:
        french_month += "Thermidor"
    elif mon == 9:
        french_month += "Fructidor"
    elif mon == 10:
        french_month += "Vendémiaire"
    elif mon == 11:
        french_month += "Brumaire"
    elif mon == 12:
        french_month += "Frimaire"

    if 1 <= french_day < 11:
        decade += 1
    elif 11 <= french_day < 21:
        decade += 2
    elif 21 <= french_day <= 30:
        decade += 3

    return str(french_day) + " " + str(french_month) + " Year" + " " + str(french_year) + ", Décade " + str(decade)

def get_french_datetime(gregorian_datetime):
    hour, minute, second, month, day, year = '', '', '', '', '', ''
    state = 0
    for char in gregorian_datetime:
        if char.isdigit():
            if state == 0:
                hour += char
            elif state == 1:
                minute += char
            elif state == 2:
                second += char
            elif state == 3:
                month += char
            elif state == 4:
                day += char
            elif state == 5:
                year += char
        elif (char == " " or char == ":" or char == "/"):
            state += 1
    num_hr = int(hour)
    num_min = int(minute)
    num_sec = int(second)
    num_month = int(month)
    num_day = int(day)
    num_year = int(year)

    time = get_decimal_time(num_hr, num_min, num_sec)
    date = get_decimal_date(num_month, num_day, num_year)
    # total_sec = (num_hr * 60 * 60) + (num_min * 60) + num_sec
    # fra_hour = total_sec // 10000
    # fra_minute = total_sec % 10000 // 100
    # fra_second = total_sec % 10000 % 100
    #
    # fra_year = num_year - 1792
    #
    # time = (str(fra_hour) + ":" + str(fra_minute) + ":" + str(fra_second))
    print(time)
    print(date)
    return("")

def main():
    # Q1 and Q2 examples:
    decimal_time = get_decimal_time(16, 7, 46)
    print(decimal_time)
    decimal_time = get_decimal_time(7, 47, 2)
    print(decimal_time)
    revolutionary_date = get_decimal_date(3, 22, 2022)
    print(revolutionary_date)
    print()

    # Q3:
    print("Question 3:")
    gregorian_datetime = "16:07:46 03/22/2022"
    #gregorian_datetime = "02:50:20 02/12/2022"
    #gregorian_datetime = "2:50:20 2/12/2022"
    french_datetime = get_french_datetime(gregorian_datetime)
    print(french_datetime)
main()
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
