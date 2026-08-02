---
title: Simon Fraser University（Python Assignment 1）
date: 2024-09-24 11:05:33
author: AI悦创
isOriginal: true
icon: blog
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
watermark: true
---

This assignment is a set of practice problems to help you get familiar with Python and its environment. 

Please copy the following files to your computer, and for each question write your answers in the corresponding file: [q1.py](q1.py), [q2.py](q2.py),
[q3.py](q3.py), and [q4.py](q4.py). To get all the files at once, download [a1_starting_files.zip](a1_starting_files.zip) and extract them to your computer.

When you are ready to submit your answers, compress [q1.py](q1.py), [q2.py](q2.py), [q3.py](q3.py), and [q4.py](q4.py) into a.zip file named `a1.zip`, and submit just `a1.zip` on Canvas.

> If you are unsure how to zip/unzip files, check here:[Windows](https://support.microsoft.com/en-us/windows/zip-and-unzip-files-8d28fa72-f2f9-712f-67df-f80cf89fd4e5), [Mac](https://support.apple.com/en-ca/guide/mac-help/mchlp2528/mac)
> 
> If you run into problems, please talk to a TA, or post a question to the Tech Support discussion in the 120 Canvas course.

**Hint** f-strings and string arithmetic are need in some questions, and are explained at the end of this assignment.

## Question 1

Put your answer to this question in [q1.py](q1.py).

Write a program that asks the user for their name and age, and then prints a message saying how old they'll be in 25 years. Use **f-strings** to print the output.

For example:

```python
What's your name? Elon

How old are you? 51

Hi Elon! In 25 years it will be 2049 and you'll be 76 years old.
```

You don't need to do any error checking: assume a sensible name and integer age are entered.



## Question 2

Put your answer to this question in [q2.py](q2.py).

Write a program that converts feet $f$ to meters $m$ using the formula $m =0.3048 \cdot f$. Ask the user to enter a measurement in feet, and then print it in meters:

```python
How many feet? 21

21.0 is about 6.4 meters
```

Use f-strings to format your output. It should work for any number the user enters. Make your output the same as shown. The value for both the feet and meters should be printed to **exactly** 1 decimal place.

You can assume the user enters a valid number.

**答案：**

```python
# q2.py

# Ask the user to input the number of feet
feet = float(input("How many feet? "))

# Convert feet to meters using the formula
meters = 0.3048 * feet

# Print the result formatted to 1 decimal place using f-strings
print(f"{feet:.1f} is about {meters:.1f} meters")
```



## Question 3

Put your answer to this question in [q3.py](q3.py).

Write a program that asks the user to enter a message and a box character, and then prints the message in a box made from that character. Print it in exactly the style shown in the examples.

For example:

```python
What do you want your sign to say? Code Carefully
What character do you want for the box? !

!!!!!!!!!!!!!!!!!!
! Code Carefully !
!!!!!!!!!!!!!!!!!!
```

Or:

```python
What do you want your sign to say? SFU
What character do you want for the box? %

%%%%%%%
% SFU %
%%%%%%%
```

Make sure your box has *exactly* the same format as shown. Note that there is one space before the message, and one space after the message.

Assume the user enters a single character for the box character.

**答案：**

::: code-tabs

@tab Code1

```python
# q3.py

# Ask the user to input the message and the box character
message = input("What do you want your sign to say? ")
box_char = input("What character do you want for the box? ")

# Calculate the length of the box based on the message length
box_length = len(message) + 4

# Print the top border of the box
print(box_char * box_length)

# Print the message with spaces around it
print(f"{box_char} {message} {box_char}")

# Print the bottom border of the box
print(box_char * box_length)
```

@tab Code2

```python
# q3.py

# 询问用户输入想要显示的消息
message = input("What do you want your sign to say? ")
# 询问用户输入用于制作盒子的字符
box_char = input("What character do you want for the box? ")

# 计算盒子边框的长度。边框的长度是消息长度加上4，
# 因为需要在消息前后各加一个空格和一个盒子字符。
box_length = len(message) + 4

# 打印盒子的顶部边框。使用输入的字符重复box_length次，形成顶部边框。
print(box_char * box_length)

# 打印消息行。格式为盒子字符、一个空格、消息、一个空格、再加一个盒子字符。
print(f"{box_char} {message} {box_char}")

# 打印盒子的底部边框。与顶部边框相同，重复输入的字符box_length次。
print(box_char * box_length)
```

:::



## Question 4

Put your answer to this question in [q4.py](q4.py).

You are the programmer for the *CyberCone*, a company started by unemployed CyberTruck engineers. *CyberCone* sells *cybercones*, which are robot-assembled ice cream cones with any cone height and any number of scoops of ice cream. Part of the appeal is that the scoops are perfect spheres, and the cone is a perfect cone.

For example, a 3-scoop cone with would look like this:

![3-scoop cone](https://blog.images.bornforthis.cn/docs-images/sha256/3f/3fc6c5833f4ce0c9c7ba62fa11c577cdd9edc49a45d3d04a4ccd032a2eb32e2c.png)

The total height is the height of the cone plus the height of the scoops and is given by this formula:
$$
\begin{align*}
\text{total-height} &= \text{cone-height} + (\text{num-scoops} \times 2 \times \text{scoop-radius})
\end{align*}
$$

It's assumed that each scoop has the same radius. 

The purchase cost, in dollars, of the cone is given by this formula:

$$
\begin{align*}
\text{cost} &= (\text{num-scoops} \times \text{scoop-volume} \times 0.75) + (\text{cone-volume} \times 0.25)
\end{align*}
$$

$\text{scoop-volume}$ is the volume of one scoop (all scoops have the same volume), and $\text{cone-volume}$ is the volume of the cone.

Your task is to write a program that asks the customer the following questions, and then prints the total height of the cone and the purchase cost:

- **How many scoops do they want?** The choices are 1 or more.
- **What is the radius of a scoop?** The scoops are perfect spheres, and the radius is in centimeters. All scoops for this cone have the same radius.
- **What is the height of the cone?** The height is in centimeters and greater than 0.

After getting this information the program then prints the total height and the purchase cost of the cone.

Here is a sample run:

```python
+-----------------------+
| Welcome to CyberCone! |
+-----------------------+

How many scoops do you want? 3
Ok, 3 scoops it is.

What is the radius of a scoop in cm? 2.1
Each scoop is radius 2.10cm

What is the height of the cone in cm? 4.22
Cone height is 4.22cm

        Cost of your 3-scoop cone: $92.16
Total height of your 3-scoop cone: 16.82cm
```

Some important details:

- Print the title box at the top exactly as shown.
- You can assume that the numbers entered by the user are always sensible, i.e. the number of scoops is an integer greater than 0, and the scoop radius and cone height are greater than 0.
- The scoop radius, cone height, and cost should all be printed to *exactly* 2 decimal digits, as shown in the example. 
- The formulas for the volumes of spheres and cones can be found online.

```python
# q4.py

import math

# Print the welcome message with the box
print("+-----------------------+")
print("| Welcome to CyberCone! |")
print("+-----------------------+\n")

# Get inputs from the user
num_scoops = int(input("How many scoops do you want? "))
print(f"Ok, {num_scoops} scoops it is.\n")

scoop_radius = float(input("What is the radius of a scoop in cm? "))
print(f"Each scoop is radius {scoop_radius:.2f}cm\n")

cone_height = float(input("What is the height of the cone in cm? "))
print(f"Cone height is {cone_height:.2f}cm\n")

# Formula for total height
total_height = cone_height + (num_scoops * 2 * scoop_radius)

# Volume formulas
scoop_volume = (4/3) * math.pi * (scoop_radius ** 3)  # Volume of a sphere
cone_volume = (1/3) * math.pi * (scoop_radius ** 2) * cone_height  # Volume of a cone

# Cost calculation
cost = (num_scoops * scoop_volume * 0.75) + (cone_volume * 0.25)

# Print the results with the appropriate formatting
print(f"        Cost of your {num_scoops}-scoop cone: ${cost:.2f}")
print(f"Total height of your {num_scoops}-scoop cone: {total_height:.2f}cm")
```



## Question 5

The `rand_char()` function **returns** either a `/` or `\` character:

```python
def rand_char():
    import random
    return random.choice('/\\')

print(rand_char(), end='')
print(rand_char(), end='')
print(rand_char(), end='')
print(rand_char(), end='')
```

The `end=''` part of of the print statement is how you print without a newline. 

Write a program that asks the user to enter an integer $n > 0$, and then prints $n$ rows of characters, where each row of characters consists of $2n$ characters from `rand_char()`.

For example, if the user enters 3, then the output would be 3 lines of 6 characters each:

```python
///\\\
\/\\\/
\\\\\/
```

Every time you run it you will get a different pattern:

```python
\//\\/
\\////
//\\\/
```

For $n=10$ there should be 10 lines each with 20 characters:

```python
\//\//////\/\\///\/\
////\/\\/\\/\//\////
\\/\//\\//\/\\\\\//\
\//\//\//\///\\//\\/
\\/\//\///\\\/\\//\/
/\/\\\///\\\/\/\\\\/
\//\\/////\/\/\\\\\\
\/\/\////////\\////\
\\\\\\\////\/\\\\//\
////\\/\//////\\\/\\
```

**答案：**

```python
import random

# 定义一个函数，返回随机字符'/'或'\'
def rand_char():
    return random.choice('/\\')

# 询问用户输入一个大于0的整数n
n = int(input("请输入一个大于0的整数n: "))

# 循环打印n行，每行2n个随机字符
for _ in range(n):
    for _ in range(2 * n):
        # 输出随机字符，并在行末不换行
        print(rand_char(), end='')
    # 每行输出完成后换行
    print()
```









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

