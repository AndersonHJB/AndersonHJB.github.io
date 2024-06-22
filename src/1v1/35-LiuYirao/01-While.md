---
title: While
date: 2023-04-15 23:48:30
icon: a-jibijilianxibianji
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - uic
    - UIC Information Space
tag:
    - Python 一对一教学
    - uic
    - UIC Information Space
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

1. 编写一个程序，要求用户输入一个正整数，并使用 while 循环计算该数的阶乘。
2. 编写一个程序，要求用户输入一个整数，使用 while 循环计算并输出该数的所有正因子。
3. 编写一个程序，生成一个介于1和100之间的随机数，然后让用户不断尝试猜测这个数，直到猜对为止。使用 while 循环，并给出提示（猜大了或猜小了）。
4. 编写一个程序，使用 while 循环计算并输出斐波那契数列的前20个数字。
5. 编写一个程序，使用 while 循环计算并输出一个用户输入的正整数的二进制表示。
6. 编写一个程序，使用 while 循环实现一个简单的计数器。要求用户输入开始值、结束值和步长，然后从开始值开始计数，每次增加步长，直到到达或超过结束值。
7. 编写一个程序，要求用户输入一个整数，使用 while 循环计算并输出该数的所有素数因子。
8. 编写一个程序，使用 while 循环计算并输出一个用户输入的整数的所有位数之和。例如，输入 12345，输出 15（1+2+3+4+5）。
9. 编写一个程序，使用 while 循环实现一个简单的倒计时。要求用户输入一个正整数作为起始值，然后从该值开始倒计时，每秒减1，直到0。
10. 编写一个程序，使用 while 循环模拟一个简单的石头、剪刀、布游戏。让用户与计算机进行对战，游戏会一直进行，直到用户输入“退出”。游戏过程中要记录并输出双方的胜负情况。

::: code-tabs

@tab 1

```python
n = int(input("请输入一个正整数："))
factorial = 1
i = 1
while i <= n:
    factorial *= i
    i += 1
print(f"{n}的阶乘为：{factorial}")
```

@tab 2

```python
num = int(input("请输入一个整数："))
i = 1
print(f"{num}的正因子：")
while i <= num:
    if num % i == 0:
        print(i)
    i += 1
```

@tab 3

```python
import random

random_number = random.randint(1, 100)
user_guess = None

while user_guess != random_number:
    user_guess = int(input("请猜一个介于1和100之间的整数："))

    if user_guess < random_number:
        print("猜小了，请再试一次！")
    elif user_guess > random_number:
        print("猜大了，请再试一次！")
    else:
        print("恭喜你，猜对了！")
```

@tab 3-2

```python
import random

random_number = random.randint(1, 100)
guess = int(input("猜一个1到100之间的整数："))

while guess != random_number:
    if guess > random_number:
        print("猜大了！")
    else:
        print("猜小了！")
    guess = int(input("再猜一个1到100之间的整数："))

print("恭喜你，猜对了！")
```

@tab 4

```python
# 定义一个函数，名为 fibonacci_sequence，接受一个参数 n
def fibonacci_sequence(n):
    # 初始化两个变量 a 和 b，分别表示斐波那契数列中的前两个数字
    a, b = 0, 1
    # 初始化计数器 count，用于记录当前输出的斐波那契数的个数
    count = 0

    # 使用 while 循环，当 count 小于 n 时，循环继续
    while count < n:
        # 输出当前的斐波那契数 a，并在数字之间添加空格
        print(a, end=" ")
        
        # 更新 a 和 b 的值，使 a 等于原来的 b，b 等于原来的 a + b
        # 这样可以得到斐波那契数列的下一个数字
        a, b = b, a + b
        
        # 将计数器 count 的值加1，表示已经输出了一个斐波那契数
        count += 1

# 调用 fibonacci_sequence 函数，输出前20个斐波那契数
fibonacci_sequence(20)
```

@tab 5

```python
num = int(input("请输入一个正整数："))
binary = ""

while num > 0:
    remainder = num % 2
    num = num // 2
    binary = str(remainder) + binary

print(f"二进制表示为：{binary}")
```

@tab 6

```python
start = int(input("请输入开始值："))
end = int(input("请输入结束值："))
step = int(input("请输入步长："))

while start <= end:
    print(start)
    start += step
```

@tab 7

```python
def is_prime(x):
    if x <= 1:
        return False
    for i in range(2, int(x**0.5) + 1):
        if x % i == 0:
            return False
    return True

num = int(input("请输入一个整数："))
i = 2

print(f"{num}的素数因子：")
while i <= num:
    if num % i == 0 and is_prime(i):
        print(i)
    i += 1
```

@tab 8

```python
num = int(input("请输入一个整数："))
sum_of_digits = 0

while num > 0:
    digit = num % 10
    sum_of_digits += digit
    num = num // 10

print(f"各位数之和：{sum_of_digits}")
```

@tab 9

```python
import time

countdown = int(input("请输入倒计时的起始值（秒）："))

while countdown >= 0:
    print(countdown)
    time.sleep(1)
    countdown -= 1

print("倒计时结束！")
```

@tab 10

```python
import random

def get_computer_choice():
    choices = ["石头", "剪刀", "布"]
    return random.choice(choices)

def game_result(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "平局"
    elif (user_choice == "石头" and computer_choice == "剪刀") or (user_choice == "剪刀" and computer_choice == "布") or (user_choice == "布" and computer_choice == "石头"):
        return "用户胜"
    else:
        return "计算机胜"

user_wins = 0
computer_wins = 0
draws = 0

while True:
    user_choice = input("请输入石头、剪刀、布或退出：")
    if user_choice == "退出":
        break
    computer_choice = get_computer_choice()
    result = game_result(user_choice, computer_choice)
    print(f"用户：{user_choice}，计算机：{computer_choice}，结果：{result}")

    if result == "用户胜":
        user_wins += 1
    elif result == "计算机胜":
        computer_wins += 1
    else:
        draws += 1

    print(f"胜负情况：用户胜{user_wins}局，计算机胜{computer_wins}局，平局{draws}局")
```

@tab 10-2

```python
import random

user_wins = 0
computer_wins = 0
draws = 0

while True:
    user_choice = input("请输入石头、剪刀、布或退出：")
    if user_choice == "退出":
        break

    choices = ["石头", "剪刀", "布"]
    computer_choice = random.choice(choices)

    if user_choice == computer_choice:
        result = "平局"
    elif (user_choice == "石头" and computer_choice == "剪刀") or (user_choice == "剪刀" and computer_choice == "布") or (user_choice == "布" and computer_choice == "石头"):
        result = "用户胜"
    else:
        result = "计算机胜"

    print(f"用户：{user_choice}，计算机：{computer_choice}，结果：{result}")

    if result == "用户胜":
        user_wins += 1
    elif result == "计算机胜":
        computer_wins += 1
    else:
        draws += 1

    print(f"胜负情况：用户胜{user_wins}局，计算机胜{computer_wins}局，平局{draws}局")
```

:::



## Question

```python
k = 96
w = int(input("输入："))
while not (w == k):  # not 96 == k False
    if w < k:
        print("猜小了")
        ww = int(input("重新输入"))
        w = ww
    elif w > k:
        print("猜大了")
        ww = int(input("重新输入"))
        w = ww
else:
    print("猜对了")
```

::: tip

为什么这个代码的 else 可以正常运行？不应该报错吗？

:::

这个代码是正确的，不会报错。在这个代码中，`else` 语句是与 `while` 循环配对的，而不是与 `if` 语句配对的。这意味着，只有当 `while` 循环的条件为 `False` 时，`else` 语句才会执行。在这种情况下，这意味着当 `w == k` 时，`else` 语句会被执行，然后输出 "猜对了"。

当你在 `while` 循环中使用 `else` 语句时，它的作用类似于一个 "正常结束" 的标志。换句话说，如果 `while` 循环没有被 `break` 语句中断，而是因为条件不满足而自然结束，那么 `else` 语句会被执行。在这个例子中，我们没有使用 `break` 语句，所以 `else` 语句会在 `w == k` 时被执行。













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

