---
title: Lab 3
icon: python
date: 2023-10-28 23:52:10
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - northeastern一对一辅导
    - 东北大学Python辅导
    - 东北大学Python一对一辅导
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

For Lab 3, complete each of the following exercises.

### Exercise 1: Capitalized vowels

Write a short program called `cap_vowels.py` that takes a string of input from the user with any capitalization and prints out the string, but with all consonants in lower case and all vowels in upper case. Read about string methods in the [Python 3 docsLinks to an external site.](https://docs.python.org/3/library/stdtypes.html#string-methods) and to see a full list of operations you can use on string. Try to do it in the fewest function calls you can.

### Tutorial: Working with Random

 In the exercises below, you'll need to generate some random numbers. This can be done using the `random` library. The library is standard with Python but must be imported (similarly to the `math` library we looked at in class. The documentation can be found here: [https://docs.python.org/3/library/random.htmlLinks to an external site.](https://docs.python.org/3/library/random.html)

The `random` library has a variety of methods. The `random()` method on its own generates a random floating point number between 0.0 and 1.0. Other methods can be used to generate random integers or even to select an item randomly from a string or list. Copy and paste the following code into a local Python program and run it to see several ways that the `random` library can be used:

```python
import random

num = random.random()
print("Random number between 0.0 and 1.0:", num)

num = random.randint(5, 20)
print("Random integer between 5 and 20: ", num)

my_string = "Hello World!"
print("A random character picked from", my_string + ":",
 random.choice(my_string))

print(random.choice(["red", "yellow", "green", "blue"]))
```

This should give you enough of an introduction to the library to be able to use it in the following exercises.

### Exercise 2: DMV

The Department of Motor Vehicles (DMV) is responsible for issuing driver’s licenses. This question asks you to write a program called `dmv.py` that prompts the user to enter their full name (first, middle, and last) and their date of birth and then produces a “driver’s license”. The license should have the following pieces of information:

```python
* A random driver’s license number that consists of 7 random digits
* The user’s last name
* The user’s first and middle name
* An expiration date which is the user’s birth date except for the year which should be 2021
```

Here is an example of what my program produces when run:

```python
Welcome to the DMV (estimated wait time is 3 hours)
Please enter your first, middle, and last name:
Anthony James Mullen
Enter date of birth (MM/DD/YY):
05/15/71
-------------------------------------
Washington Driver License
DL 8704266
LN Mullen
FN Anthony James
DOB 05/15/71
EXP 05/15/21
-------------------------------------
```

### Exercise 3: Number guessing game

For this exercise, you will create a simple number guessing game called `guessing_game.py`. The computer will pick a random number between 1 and 50 (inclusive), and then the player will try to guess it in as few guesses as possible.

The player will enter guesses through the command line interface, using the input function. The program will let the player know how close their guess is (if they are "hot" or "cold", and whether their guess was too high or too low). When finished, your program's output might look something like the following:

```python
Welcome to the Guessing Game!
I picked a number between 1 and 50. Try and guess!
25
You guessed 25
Your guess is very cold
20
Your guess is extremely cold
40
Your guess is very warm
45
Your guess is cold
35
Your guess is extremely warm
33
Your guess is warm
32
Your guess is warm
37
Congratulations. You figured it out in 8 tries.
```

#### Instructions

For the guessing game, use an if-else block to print a different message depending on how far off the guess was:

| Within 1          | "scalding hot"                |
| ----------------- | ----------------------------- |
| Within 2          | "extremely warm"              |
| Within 3          | "very warm"                   |
| Within 5          | "warm"                        |
| Within 8          | "cold"                        |
| Within 13         | "very cold"                   |
| Within 20         | "extremely cold"              |
| More than 20 away | "icy freezing miserably cold" |

Use a while loop to determine whether to stop the game. As long as the user's guess is not equal to the secret number, keep the game going. So you'll want a block beginning something like:

```python
while (random_number != user_guess):
```

For counting tries, use a variable (maybe called something like `tries` and increment it with `tries = tries + 1` every time the user takes another attempt at guessing. (Another way to increment a variable like this is the `+=` operator, which would look like `tries += 1` in context).

Remember to handle both positive and negative differences! For example, if the secret number is 35, and the user guesses either 34 or 36, then they should both print out "scalding hot." Hint: There are many ways to handle this. You can either get the absolute value of the difference, or you can use boolean operators like `and` and `or` to check both cases. For example,

```python
if (age >= 18 and age <= 21):
    # do something when you know
    # age is between 18 and 21
else:
    # do something when you know
    # age is outside the range of 18 to 21
```

Although there are many ways to organize the conditions, some are better than others. Try to keep your conditional block as simple, concise, and clear as possible. Don't forget about `elif` blocks.

You should avoid writing the same print statement more than once--it makes it difficult to change the message later!

- Debugging strategy: Be sure to test and retest your code at each step of the process! You may want to (temporarily) print out the secret number so you know what you are looking for, then you can guess numbers that are within a certain range to test your conditionals.
- Double-check that your program works perfectly by playing multiple games. If there is ever any behavior that seems wrong, stop and figure out what caused that!

**Upgrading the Game (NOT required)**

If time allows in the lab, upgrade your program to include the following functionality.

1. When the user guesses the answer correctly, we now want to either mock or compliment them depending on the number of guesses it took. Recall that you already have a field that remembers this value. Using the table below, print out the appropriate message when the guess is correct: 

    | Guesses    | Message to print                            |
    | ---------- | ------------------------------------------- |
    | 1          | "That was lucky!"                           |
    | 2-4        | "That was amazing!"                         |
    | 5-6        | "That was okay."                            |
    | 7          | "Meh."                                      |
    | 8-9        | "This is not your game."                    |
    | 10 or more | "You are the worst guesser I've ever seen." |

### Submitting

Push all your code to GitHub, and submit `cap_vowels.py`, `dmv.py` and `guessing_game.py` to Canvas.











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

