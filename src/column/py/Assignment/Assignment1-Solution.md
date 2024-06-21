---
title: Assignment1 Solution
icon: python
date: 2023-12-23 20:47:14
author: AI悦创
isOriginal: true
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

## Submission instructions

1. You should submit your homework on [GitHub](https://github.com/CodeClass1v1).
2. For this assignment you should turn in 4 separate `.py` files named according to the following pattern:
`hw1_q1.py`, `hw1_q2.py`, etc.
3. Each Python file you submit should contain a header comment block as follows:

```text
"""
Author: [Your name here]
Assignment / Part: HW1 - Q1 (etc.)
Date due: 2023-02-09, 11:59pm
I pledge that I have completed this assignment without
collaborating with anyone else, in conformance with the
Bornforthis 1v1 School of Computer Science and Procedures on
Academic Misconduct.
"""
```

**No late submissions will be accepted.**

**REMINDER**: Do not use any Python structures that we have not learned in class.

## Question 01: Hello,You!

Write a program that asks for the user's name, their age and prints a personalized welcome message for them.

For example, an execution could look like this:

```python
Please enter your name: Aika
Please enter your age: 29
Aika, 29, is taking CS-UY 1114.
```

The format of your output need not look exactly the same as ours, but it must still ask the user for their name and age, and print them out as part of some sort of sentence.

```python
# 请求用户输入他们的名字
name = input("Please enter your name: ")

# 请求用户输入他们的年龄
age = input("Please enter your age: ")

# 打印出个性化的欢迎信息
print(f"{name}, {age}, welcome to our community!")
```



## Question 02: Some Have Gone and Some Remain

The U.S. Census provides information on its [web page Census.gov](https://www.census.gov/) about the current U.S. population as well as approximate rates of change. Four rates of change are provided:
- There is a birth every 7 seconds.
- There is a death every 15 seconds.
- There is a new immigrant every 42 seconds.
- There is a new emigration (i.e. somebody moves out of the country) every 1.25 minutes.

These are, naturally, approximations of birth, death, and immigration rates, but they can assist in providing population estimates in the near term.

Write a program that takes a year as input (an integer—you may assume that this will value will always be greater than or equal to 2023) and prints out an estimated population (as an integer). Assume that the current population is 330,109,174, and assume that there are always exactly 365 days in a year.

Sample execution:

```text
Please enter a year greater than 2023:
2042
The population in year 2042 will be 382038453
```

The format of your output need not look exactly the same as ours, but it must still ask the user to enter an integer representing a year, and it must always output the estimated population of that year.

::: code-tabs

@tab Code1

```python
# 获取用户输入的年份
year = int(input("Please enter a year greater than 2023:\n"))
# 常量定义
current_population = 330109174  # 当前人口
seconds_in_year = 365 * 24 * 60 * 60  # 一年中的秒数，假设每年有365天
current_year = 2023  # 当前年份

# 变化率
birth_rate = seconds_in_year / 7  # 每7秒出生一个人，计算每年的出生人数
death_rate = seconds_in_year / 15  # 每15秒死亡一个人，计算每年的死亡人数
immigration_rate = seconds_in_year / 42  # 每42秒有一个新移民，计算每年的移民人数
emigration_rate = seconds_in_year / 75  # 每1.25分钟有一个人移出国外，计算每年的移民人数（1.25分钟等于75秒）

# 计算每年的人口变化量
annual_change = birth_rate - death_rate + immigration_rate - emigration_rate

# 根据年份计算预估人口
estimated_population = current_population + (year - current_year) * annual_change
estimated_population = int(estimated_population)  # 将结果转换为整数并返回

# 调用函数并打印结果
print(f"The population in year {year} will be {estimated_population}")
```

@tab Code2

```python
# 获取用户输入的年份
year = int(input("Please enter a year greater than 2023:\n"))

# 常量定义
current_population = 330109174  # 当前人口
seconds_in_year = 365 * 24 * 60 * 60  # 一年中的秒数，假设每年有365天
current_year = 2023  # 当前年份

# 变化率
number_of_seconds = (year - current_year) * seconds_in_year  # 得到一共多少秒
birth_rate = number_of_seconds // 7  # 每7秒出生一个人，计算总的出生人数
death_rate = -number_of_seconds // 15  # 每15秒死亡一个人，计算总的死亡人数
immigration_rate = number_of_seconds // 42  # 每42秒有一个新移民，计算总的移民人数
emigration_rate = -number_of_seconds // (1.25 * 60)  # 每1.25分钟有一个人移出国外，计算总的移民人数（1.25分钟等于75秒）
new_population = int(330109174 + birth_rate + death_rate + immigration_rate + emigration_rate)
print(f"The population in year {year} will be {new_population}")
```



@tab Code3

```python
user_message = input("Please enter a year greater than 2023: ")
number_of_seconds = (int(user_message) - 2023) * 365 * 24 * 3600
new_birth = number_of_seconds // 7
death = -number_of_seconds // 15
new_immigrant = number_of_seconds // 42
emigration = -number_of_seconds // (1.25 * 60)
new_population = int(330109174 + new_birth + death + new_immigrant + emigration)
print(f"The population in year {user_message} will be {new_population}")

#output
Please enter a year greater than 2023: 2042
The population in year 2042 will be 382038453
```

@tab Code4

```python
def estimate_population(year):
    """
    估计特定年份美国的人口。

    参数:
    year (int): 需要估计人口的年份。

    返回:
    int: 给定年份的估计人口。
    """

    # 常量定义
    current_population = 330109174  # 当前人口
    seconds_in_year = 365 * 24 * 60 * 60  # 一年中的秒数，假设每年有365天
    current_year = 2023  # 当前年份

    # 变化率
    birth_rate = seconds_in_year / 7  # 每7秒出生一个人，计算每年的出生人数
    death_rate = seconds_in_year / 15  # 每15秒死亡一个人，计算每年的死亡人数
    immigration_rate = seconds_in_year / 42  # 每42秒有一个新移民，计算每年的移民人数
    emigration_rate = seconds_in_year / 75  # 每1.25分钟有一个人移出国外，计算每年的移民人数（1.25分钟等于75秒）

    # 计算每年的人口变化量
    annual_change = birth_rate - death_rate + immigration_rate - emigration_rate

    # 根据年份计算预估人口
    estimated_population = current_population + (year - current_year) * annual_change

    return int(estimated_population)  # 将结果转换为整数并返回


# 获取用户输入的年份
user_input_year = int(input("Please enter a year greater than 2023:\n"))

# 调用函数并打印结果
print(f"The population in year {user_input_year} will be {estimate_population(user_input_year)}")
```

:::

## Question 03: Penny Pinching

Write a program that asks the user to enter a number of quarters, dimes, nickels and pennies and then outputs the monetary value of the coins in the format of dollars and remaining cents.

Your program should interact with the user, and output its results, **exactly** as it is shown in the following example:

```text
Please enter number of coins:
Number of quarters: 13
Number of dimes: 4
Number of nickels: 11
Number of pennies: 17
The total is 4 dollar(s) and 37 cent(s)
```

```python
# 定义一个交互式函数来计算硬币的总价值
def calculate_total_interactive():
    # 向用户打印提示信息，要求输入硬币数量
    print("Please enter number of coins:")
    
    # 请求用户输入25美分硬币的数量，并将输入转换为整数
    quarters = int(input("Number of quarters: "))
    # 请求用户输入10美分硬币的数量，并将输入转换为整数
    dimes = int(input("Number of dimes: "))
    # 请求用户输入5美分硬币的数量，并将输入转换为整数
    nickels = int(input("Number of nickels: "))
    # 请求用户输入1美分硬币的数量，并将输入转换为整数
    pennies = int(input("Number of pennies: "))

    # 定义每种硬币的价值（单位：美分）
    QUARTER_VALUE = 25  # 25美分硬币的价值
    DIME_VALUE = 10     # 10美分硬币的价值
    NICKEL_VALUE = 5    # 5美分硬币的价值
    PENNY_VALUE = 1     # 1美分硬币的价值

    # 根据硬币数量和各自的价值计算总价值（单位：美分）
    total_cents = (quarters * QUARTER_VALUE) + (dimes * DIME_VALUE) + \
                  (nickels * NICKEL_VALUE) + (pennies * PENNY_VALUE)

    # 将总美分数转换为美元和剩余的美分数
    dollars = total_cents // 100  # 计算总美元数
    remaining_cents = total_cents % 100  # 计算剩余的美分数

    # 打印计算出的总金额（美元和美分）
    print(f"The total is {dollars} dollar(s) and {remaining_cents} cent(s)")

calculate_total_interactive()
```





## Question 04: Mad as a Hatter, Thin as a Dime

Write a program that asks the user to enter an amount of money in the format of dollars and remaining cents. The program should calculate and print the minimum number of coins (quarters, dimes, nickels and pennies) that are equivalent to the amount input by the user.

Your program should interact with the user, and display its results, **exactly** as it shows in the following example:

```text
Please enter your amount of dollars and cents, in two separate lines.
4
37
4 dollars and 37 cents are: 17 quarters, 1 dimes, 0 nickels and 2 pennies
```

**Hint**: In order to find the minimum number of coins, first find the maximum number of quarters that fit within the amount of money input by the user, then find the maximum number of dimes that fit in the remaining amount, and so on.

::: code-tabs

@tab Code1

```python
# 提示用户输入美元和美分
print("Please enter your amount of dollars and cents, in two separate lines.")
dollars = int(input())
cents = int(input())

# 首先将美元转换为美分
total_cents = dollars * 100 + cents

# 计算四种硬币的数量
quarters = total_cents // 25
remaining = total_cents % 25

dimes = remaining // 10
remaining = remaining % 10

nickels = remaining // 5
pennies = remaining % 5

# 输出结果
# print(f"{dollars} 美元和 {cents} 美分可以兑换为：{quarters} 个25美分，{dimes} 个10美分，{nickels} 个5美分和 {pennies} 个1美分")
print(f"{dollars} dollars and {cents} cents are: {quarters} quarters, {dimes} dimes, {nickels} nickels and {pennies} pennies")
```

@tab Code2

```python
# 定义一个函数用于计算最少硬币数量
def calculate_coins(dollars, cents):
    # 首先将美元转换为美分
    total_cents = dollars * 100 + cents
    # 定义硬币的面值：25美分、10美分、5美分和1美分
    coin_values = {"quarters": 25, "dimes": 10, "nickels": 5, "pennies": 1}
    # 初始化一个字典来存储每种硬币的数量
    coin_counts = {}

    # 遍历每种硬币，计算所需数量
    for coin, value in coin_values.items():
        # 使用 divmod 函数计算每种硬币的数量和剩余的美分
        coin_counts[coin], total_cents = divmod(total_cents, value)

    # 返回各种硬币的数量
    return coin_counts

# 定义主函数
def main():
    # 提示用户输入美元和美分
    print("Please enter your amount of dollars and cents, in two separate lines.")
    dollars = int(input())
    cents = int(input())

    # 调用 calculate_coins 函数计算硬币数量
    coins = calculate_coins(dollars, cents)

    # 格式化输出结果
    print(f"{dollars} dollars and {cents} cents are: {coins['quarters']} quarters, {coins['dimes']} dimes, {coins['nickels']} nickels and {coins['pennies']} pennies")

# 当程序作为主程序运行时，执行 main 函数
if __name__ == "__main__":
    main()
```

@tab Code3

```python
# 测试 calculate_coins 函数以确保其正确性

# 测试用例
test_cases = [
    (0, 99),  # 99美分
    (1, 15),  # 1美元15美分
    (2, 50),  # 2美元50美分
    (0, 1),   # 1美分
    (5, 0),   # 5美元
]

# 测试并打印结果
for dollars, cents in test_cases:
    coins = calculate_coins(dollars, cents)
    print(f"{dollars} dollars and {cents} cents are: {coins['quarters']} quarters, {coins['dimes']} dimes, {coins['nickels']} nickels and {coins['pennies']} pennies")

# 输出
0 dollars and 99 cents are: 3 quarters, 2 dimes, 0 nickels and 4 pennies
1 dollars and 15 cents are: 4 quarters, 1 dimes, 1 nickels and 0 pennies
2 dollars and 50 cents are: 10 quarters, 0 dimes, 0 nickels and 0 pennies
0 dollars and 1 cents are: 0 quarters, 0 dimes, 0 nickels and 1 pennies
5 dollars and 0 cents are: 20 quarters, 0 dimes, 0 nickels and 0 pennies
```

:::





## Question 05: BMI Calculator

Body mass index (BMI) is a number calculated from a person’s weight and height. The BMI is a convenient rule of thumb used to broadly categorize the weight of a person based on tissue mass (muscle, body fat, and bone) and height (although it's really rather unreliable otherwise). The formula for BMI is the following:

::: tip BMI calculation formula 

BMI = weight / height - squared

:::

### PART A:

Write a program that prompts for metric weight and height and outputs the BMI. For example, an execution could look like this:

```text
Please enter weight in kilograms: 50
Please enter height in meters: 1.58
BMI is: 20.0288415
```

```python
# 定义一个计算BMI的函数，接受体重（千克）和身高（米）作为参数
def calculate_bmi_metric(weight_kg, height_m):
    # 根据BMI的计算公式，体重除以身高的平方
    return weight_kg / (height_m ** 2)


# 主函数
def main():
    # 请求用户输入体重（千克）
    weight_kg = float(input("Please enter weight in kilograms: "))
    # 请求用户输入身高（米）
    height_m = float(input("Please enter height in meters: "))
    # 调用函数计算BMI
    bmi = calculate_bmi_metric(weight_kg, height_m)
    # 打印BMI值
    print(f"BMI is: {bmi}")


# Python程序的入口点
if __name__ == "__main__":
    main()
```





### PART B:

Write a program that prompts for weight in pounds and height in inches, converts the values to metric, and then calculates the BMI.

**Note**: 1 pound is equal to 0.453592 kilograms and 1 inch is equal to 0.0254 meters.

For example, an execution could look like this:

```text
Please enter weight in pounds: 135
Please enter height in inches: 71
BMI is: 18.82849431
```

Both part A and part B must be written in two separate py files.

```python
# bmi_calculator_imperial.py

# 定义一个函数将英制单位转换为公制单位
def convert_to_metric(weight_lbs, height_in):
    # 将磅转换为千克，1磅等于0.453592千克
    weight_kg = weight_lbs * 0.453592
    # 将英寸转换为米，1英寸等于0.0254米
    height_m = height_in * 0.0254
    # 返回转换后的体重和身高
    return weight_kg, height_m


# 定义一个计算BMI的函数，接受体重（千克）和身高（米）作为参数
def calculate_bmi_metric(weight_kg, height_m):
    # 根据BMI的计算公式，体重除以身高的平方
    return weight_kg / (height_m ** 2)


# 主函数
def main():
    # 请求用户输入体重（磅）
    weight_lbs = float(input("Please enter weight in pounds: "))
    # 请求用户输入身高（英寸）
    height_in = float(input("Please enter height in inches: "))
    # 调用函数将英制单位转换为公制单位
    weight_kg, height_m = convert_to_metric(weight_lbs, height_in)
    # 调用函数计算BMI
    bmi = calculate_bmi_metric(weight_kg, height_m)
    # 打印BMI值
    print(f"BMI is: {bmi}")


# Python程序的入口点
if __name__ == "__main__":
    main()
```





## Question 06: Don't Believe The Gacha

In certain video games, you can spend either in-game currency or real money to get a series of often-random items to "improve" your gameplay experience. These mechanics are commonly referred to as **[gacha](https://en.wikipedia.org/wiki/Gacha_game)**, or **[loot boxes](https://en.wikipedia.org/wiki/Loot_box)**, and are some of the most **[controversial](https://www.theverge.com/2019/2/19/18226852/loot-boxes-gaming-regulation-gambling-free-to-play)** topics in video game development.

Let's pretend that the chances of getting a rare item in a video game are from **0% to 100%**, and our video game has a player start at level 1 and end at level 5 . At level 1 , the player has an **100%** chance of getting a rare item. At level 2 the player has an **80%** chance of getting a rare item. At level 3 , **60%**. At level 4 , **40%**, and at level 5 , only **20%**.

Write a program that asks the user for their current level in the video game, determines whether they have received a rare item in a loot box, and lets them know in a message.

```text
What is your level? 1
Your loot box contains a rare item: True

What is your level? 2
Your loot box contains a rare item: False

What is your level? 3
Your loot box contains a rare item: True

What is your level? 4
Your loot box contains a rare item: False

What is your level? 5
Your loot box contains a rare item: False
```

::: code-tabs

@tab Code1

```python
import random

def gacha_result(level):
    # 根据等级计算获得稀有物品的概率（每升一级，减少20%概率）
    chance = 120 - 20 * level

    # 随机生成一个1到100的数字，如果这个数字小于或等于计算出的概率，则返回True（表示获得稀有物品）
    return random.randint(1, 100) <= chance

# 获取用户输入的等级
user_level = int(input("What is your level? "))

# 调用函数判断是否获得稀有物品
got_rare_item = gacha_result(user_level)

# 输出结果
print(f"Your loot box contains a rare item: {got_rare_item}")
```

@tab Code2

```python
import random


def gacha_result(level):
    # 定义每个等级获得稀有物品的概率
    chances = {1: 100, 2: 80, 3: 60, 4: 40, 5: 20}

    # 随机生成一个1到100的数字，如果这个数字小于或等于当前等级的概率，则返回True（表示获得稀有物品）
    return random.randint(1, 100) <= chances[level]


# 获取用户输入的等级
user_level = int(input("What is your level? "))

# 调用函数判断是否获得稀有物品
got_rare_item = gacha_result(user_level)

# 输出结果
print(f"Your loot box contains a rare item: {got_rare_item}")

example_levels = [1, 2, 3, 4, 5]  # 定义示例等级列表
results = {level: gacha_result(level) for level in example_levels}  # 对每个等级调用gacha_result函数，并存储结果
print(results)
```

@tab Coder ZY

```python
import random
"""
Author: [Alexa]
Assignment / Part: HW1 - Q5
Due Date: 30 Dec 2023, 8:00 am
I pledge that I have completed this assignment without collaborating with anyone else,
in conformance with the Bornforthis 1v1 School of Computer Science and Procedures on Academic Misconduct.
"""
level = int(input("What is your current level? >>> "))
# 1 - 100% (5/5), 2 - 80% (4/5), 3 - 60% (3/5), 4 - 40% (2/5), 5 -20% (1/5)
target = random.randint(1, 6)
result = target % 5 > (level - 1)
print(f"Your hoot box contains a rare item: {result}")
```

@tab Coder WRYH

```python
import random
random_num = random.randint(1, 100)
user_message =int(input("What is your level? "))
possibility = (5 - user_message + 1) * 20
camparison = random_num <= possibility
user_message_1 = print(f"Your loot box contains a rare item: {camparison}")

#output
What is your level? 2
Your loot box contains a rare item: False
```



:::







## Question 07: Collective Timetables

Suppose Semi and Ollie worked for some time, and we want to calculate the total time both of them worked.

Write a program that reads a number of days, hours, and minutes minutes each of them worked,and prints the total time both of them worked together as days, hours, and minutes.

For example, an execution could look like this:

```text
Please enter the number of days Semi has worked: 2
Please enter the number of hours Semi has worked: 12
Please enter the number of minutes Semi has worked: 15
Please enter the number of days Ollie has worked: 3
Please enter the number of hours Ollie has worked: 15
Please enter the number of minutes Ollie has worked: 20
The total time both of them worked together is: 6 days, 3 hours and 35 minutes.
```

**Note**: There are 24 hours in a day and 60 minutes in an hour.

```python
# 获取Semi工作的天数，并将输入转换为整数
days_semi = int(input("Please enter the number of days Semi has worked: "))
# 获取Semi工作的小时数，并将输入转换为整数
hours_semi = int(input("Please enter the number of hours Semi has worked: "))
# 获取Semi工作的分钟数，并将输入转换为整数
minutes_semi = int(input("Please enter the number of minutes Semi has worked: "))

# 获取Ollie工作的天数，并将输入转换为整数
days_ollie = int(input("Please enter the number of days Ollie has worked: "))
# 获取Ollie工作的小时数，并将输入转换为整数
hours_ollie = int(input("Please enter the number of hours Ollie has worked: "))
# 获取Ollie工作的分钟数，并将输入转换为整数
minutes_ollie = int(input("Please enter the number of minutes Ollie has worked: "))

# 将Semi的工作时间全部转换为分钟
total_minutes_semi = days_semi * 24 * 60 + hours_semi * 60 + minutes_semi
# 将Ollie的工作时间全部转换为分钟
total_minutes_ollie = days_ollie * 24 * 60 + hours_ollie * 60 + minutes_ollie

# 计算Semi和Ollie的总工作时间（以分钟为单位）
total_minutes = total_minutes_semi + total_minutes_ollie

# 将总分钟数转换为天数
total_days = total_minutes // (24 * 60)
# 计算剩余的分钟数，并将其转换为小时数
total_hours = (total_minutes % (24 * 60)) // 60
# 计算剩余的分钟数
total_minutes = (total_minutes % (24 * 60)) % 60

# 打印Semi和Ollie总共工作的时间，格式为天数、小时数和分钟数
print(
    f"The total time both of them worked together is: {total_days} days, {total_hours} hours and {total_minutes} minutes.")
```







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

![](/zsxq.jpg)

