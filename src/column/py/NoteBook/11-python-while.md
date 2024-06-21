---
title: 11-while NoteBook
icon: yongyan
date: 2024-05-08 12:28:11
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
watermark: true
---

## 1. 判断用户输入

```python
user_gender = input("请输入您的性别(F/M):")

if user_gender == "F":
    print("你是萌妹子")
elif user_gender == "M":
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
```

当用户没有正确输入时如何重新获取用户输入？——有些人会想着在 else 里面嵌套一组判断。

```python
```

用户输错一次可以，几次都输错呢？



## 2. while 循环

### 2.1 问题

```python
user_answer_correct = False
while not user_answer_correct:
    user_gender = input("请输入您的性别 (F/M): ")
    if user_gender == 'F':
        print("你是萌妹子学生")
        user_answer_correct = True
    elif user_gender == 'M':
        print("你是糙汉子")
        user_answer_correct = True
    else:
        print("输入不正确，请输入正确的性别 (F/M)")
```

> while 循环：当满足条件时一直执行里面的代码块

根据上面的代码回答下面的问题：

- Question 1：为什么一开始需要一个单独的变量 `user_answer_correct` 来实现 while 循环的条件呢？直接 while True 不行吗？「直接 while 条件不行吗」
- Question 2：上面程序循环的终止条件是什么？
- Question 3：为什么变量一开始赋值为 False 而不是直接 True 呢？

### 2.2 Question 1

如果没有没有 `user_answer_correct` 变量，那程序会变成什么？

```python
while True:
    user_gender = input("请输入您的性别 (F/M): ")
    if user_gender == 'F':
        print("你是萌妹子学生")
        user_answer_correct = True
    elif user_gender == 'M':
        print("你是糙汉子")
        user_answer_correct = True
    else:
        print("输入不正确，请输入正确的性别 (F/M)")
```

我们不知道如何改变 while 循环的条件。

### 2.3 Question 2

- 从代码层面上或者说语法层面上：while 后面的条件变成 False 才可以；
- 从逻辑上讲：程序应该在用户正确输入 F 或 M 的时候才结束；

### 2.4 Question 3

```python
user_answer_correct = True
while user_answer_correct:
    user_gender = input("请输入您的性别 (F/M): ")
    if user_gender == 'F':
        print("你是萌妹子学生")
        user_answer_correct = False
    elif user_gender == 'M':
        print("你是糙汉子")
        user_answer_correct = False
    else:
        print("输入不正确，请输入正确的性别 (F/M)")
```

逻辑问题，一开始条件为 True 的话，那么循环内部就要改成 `user_answer_correct = False`，但这样显然不符合逻辑。明明用户输入了 F 或 M，但紧接着出现 ` user_answer_correct = False ` 就很凸匹，很奇怪。

## 3. while 循环输出

```python
i = 1

while i < 10:
    print(i)
    i = i + 1
```

while 循环：当满足条件时一直执行里面的代码块，上面代码输出是什么？

## 4. 练习

### 4.1 while 循环求和

1. 求 0～100 的和

```python
i = 0
total = 0
while i <= 100:
    total += i
    i = i + 1
print(total)
```

2. 获取用户输入一个整数 n，计算 0～n 之和

```python
```

### 4.2 猜数字游戏

编写一个 Python 程序，使用 `while` 循环来实现一个简单的文本猜数字游戏。游戏的规则如下：

1. 程序首先生成一个1到100之间的随机整数，让用户来猜测这个数字是多少。
2. 用户每次输入他们的猜测后，程序需要告诉用户猜测是太高了、太低了还是正确。
3. 如果用户猜对了数字，程序应打印出用户尝试的次数，并结束循环。
4. 用户有机会在放弃前最多猜测10次。如果10次都没猜对，程序应告诉用户正确的数字，并结束。

**程序要求：**
- 使用 `while` 循环来处理猜测过程。
- 确保程序能够处理非法输入，如非数字输入，应提示用户重新输入有效数字。
- 使用 Python 的 `random` 模块来生成随机数字。

```python
import random

num = random.randint(1, 100)  # 生成1到100之间的随机整数
```

**答案：**

```python
import random

# 生成一个1到100之间的随机整数
number_to_guess = random.randint(1, 100)
guess_count = 0
max_tries = 10

print("猜数字游戏开始！尝试猜测一个在1到100之间的数字。你有10次机会。")

while guess_count < max_tries:
    try:
        # 让用户输入他们的猜测
        guess = int(input("请输入你的猜测："))
        guess_count += 1

        # 检查用户的猜测
        if guess < number_to_guess:
            print("太低了！再试一次。")
        elif guess > number_to_guess:
            print("太高了！再试一次。")
        else:
            print(f"恭喜！你猜对了数字 {number_to_guess}！你总共猜了 {guess_count} 次。")
            break
    except ValueError:
        print("请输入一个有效的整数！")

if guess != number_to_guess:
    print(f"很遗憾，你的机会已用完。正确的数字是 {number_to_guess}。")
```



### 5.3 ATM 机系统

编写一个Python程序，使用 `while` 循环实现一个基础的ATM机系统。程序应该具备以下功能：

1. **初始设定：** 程序开始时，要求用户设定初始的账户余额。
2. **交互菜单：** 用户可以通过输入选择查看余额、存款、取款或退出。
3. **存款功能：** 用户选择存款后，输入存款金额并更新余额。
4. **取款功能：** 用户选择取款时，先检查账户余额是否足够，足够则扣除相应金额，不够则提示余额不足。
5. **查看余额：** 允许用户随时查看当前余额。
6. **退出系统：** 用户选择退出时，打印一条消息确认并结束程序。

**程序要求：**
- 使用 `while` 循环处理用户的多次交互直到用户选择退出。
- 确保所有输入均为有效数字，非数字输入时应提示错误并要求重新输入。
- 实现至少一种方式的用户身份验证，比如初始设定一个PIN码，每次操作前需验证。

**运行演示：**

```bash
/Users/huangjiabao/anaconda3/envs/Pycharm/bin/python /Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/51-lujiux/code.py 
请设定您的初始账户余额: 9999999
请输入您的PIN码以继续：1314
PIN码错误，请重试。
请输入您的PIN码以继续：1234

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：1
您的账户余额为：$9999999.00

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：2
请输入存款金额：1
存款成功！您的新余额为：$10000000.00

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：3
请输入取款金额：1
取款成功！您的新余额为：$9999999.00

欢迎使用ATM机系统
1. 查看余额
2. 存款
3. 取款
4. 退出
请输入您的选择（1-4）：4
感谢使用我们的ATM服务，再见！

Process finished with exit code 0
```



**答案：**

::: code-tabs

@tab Code1

```python
import sys  # 导入sys模块用于退出程序

def main():
    # 设置一个初始的PIN码和账户余额
    pin = "1234"
    balance = float(input("请设定您的初始账户余额: "))
    
    # 验证用户输入的PIN码
    if not validate_pin(pin):
        print("PIN码错误次数过多，程序退出。")
        sys.exit()
    
    while True:  # 使用while循环来持续接受用户操作
        print("\n欢迎使用ATM机系统")
        print("1. 查看余额")
        print("2. 存款")
        print("3. 取款")
        print("4. 退出")
        choice = input("请输入您的选择（1-4）：")
        
        if choice == "1":
            # 查看余额
            print(f"您的账户余额为：${balance:.2f}")
        elif choice == "2":
            # 存款操作
            amount = get_positive_number("请输入存款金额：")
            balance += amount
            print(f"存款成功！您的新余额为：${balance:.2f}")
        elif choice == "3":
            # 取款操作
            amount = get_positive_number("请输入取款金额：")
            if amount > balance:
                print("余额不足，无法完成取款。")
            else:
                balance -= amount
                print(f"取款成功！您的新余额为：${balance:.2f}")
        elif choice == "4":
            # 退出系统
            print("感谢使用我们的ATM服务，再见！")
            break
        else:
            # 输入错误处理
            print("无效输入，请输入1-4之间的数字。")

def validate_pin(stored_pin):
    """ 验证用户输入的PIN码是否正确 """
    max_attempts = 3
    for _ in range(max_attempts):
        entered_pin = input("请输入您的PIN码以继续：")
        if entered_pin == stored_pin:
            return True
        print("PIN码错误，请重试。")
    return False

def get_positive_number(prompt):
    """ 请求用户输入一个正数，持续请求直到得到有效输入 """
    while True:
        try:
            number = float(input(prompt))
            if number >= 0:
                return number
            else:
                print("请输入一个正数。")
        except ValueError:
            print("无效输入，请输入一个数字。")

if __name__ == "__main__":
    main()
```

@tab Code2

```python
import sys  # 导入sys模块用于退出程序

# 设置一个初始的PIN码和账户余额
pin = "1234"
balance = float(input("请设定您的初始账户余额: "))

# 验证用户输入的PIN码
attempts = 0
while attempts < 3:
    entered_pin = input("请输入您的PIN码以继续：")
    if entered_pin == pin:
        break
    print("PIN码错误，请重试。")
    attempts += 1
else:
    print("PIN码错误次数过多，程序退出。")
    sys.exit()

# 主交互循环
while True:
    print("\n欢迎使用ATM机系统")
    print("1. 查看余额")
    print("2. 存款")
    print("3. 取款")
    print("4. 退出")
    choice = input("请输入您的选择（1-4）：")
    
    if choice == "1":
        # 查看余额
        print(f"您的账户余额为：${balance:.2f}")
    elif choice == "2":
        # 存款操作
        while True:
            try:
                amount = float(input("请输入存款金额："))
                if amount >= 0:
                    balance += amount
                    print(f"存款成功！您的新余额为：${balance:.2f}")
                    break
                else:
                    print("请输入一个正数。")
            except ValueError:
                print("无效输入，请输入一个数字。")
    elif choice == "3":
        # 取款操作
        while True:
            try:
                amount = float(input("请输入取款金额："))
                if amount >= 0:
                    if amount > balance:
                        print("余额不足，无法完成取款。")
                    else:
                        balance -= amount
                        print(f"取款成功！您的新余额为：${balance:.2f}")
                    break
                else:
                    print("请输入一个正数。")
            except ValueError:
                print("无效输入，请输入一个数字。")
    elif choice == "4":
        # 退出系统
        print("感谢使用我们的ATM服务，再见！")
        break
    else:
        # 输入错误处理
        print("无效输入，请输入1-4之间的数字。")
```

@tab Code3

```python
# 设置一个初始的PIN码和账户余额
pin = "1234"
balance = float(input("请设定您的初始账户余额: "))

# 验证用户输入的PIN码
attempts = 0
while attempts < 3:
    entered_pin = input("请输入您的PIN码以继续：")
    if entered_pin == pin:
        break
    print("PIN码错误，请重试。")
    attempts += 1
if attempts == 3:
    print("PIN码错误次数过多，程序退出。")
else:
    # 主交互循环
    while True:
        print("\n欢迎使用ATM机系统")
        print("1. 查看余额")
        print("2. 存款")
        print("3. 取款")
        print("4. 退出")
        choice = input("请输入您的选择（1-4）：")
        
        if choice == "1":
            # 查看余额
            print(f"您的账户余额为：${balance:.2f}")
        elif choice == "2":
            # 存款操作
            while True:
                try:
                    amount = float(input("请输入存款金额："))
                    if amount >= 0:
                        balance += amount
                        print(f"存款成功！您的新余额为：${balance:.2f}")
                        break
                    else:
                        print("请输入一个正数。")
                except ValueError:
                    print("无效输入，请输入一个数字。")
        elif choice == "3":
            # 取款操作
            while True:
                try:
                    amount = float(input("请输入取款金额："))
                    if amount >= 0:
                        if amount > balance:
                            print("余额不足，无法完成取款。")
                        else:
                            balance -= amount
                            print(f"取款成功！您的新余额为：${balance:.2f}")
                        break
                    else:
                        print("请输入一个正数。")
                except ValueError:
                    print("无效输入，请输入一个数字。")
        elif choice == "4":
            # 退出系统
            print("感谢使用我们的ATM服务，再见！")
            break
        else:
            # 输入错误处理
            print("无效输入，请输入1-4之间的数字。")
```

@tab Code4

```bash
# 设置一个初始的PIN码和账户余额。用户在程序启动时被要求输入。
pin = "1234"
balance = float(input("请设定您的初始账户余额: "))

# 验证用户输入的PIN码。用户有三次机会输入正确的PIN码。
attempts = 0
while attempts < 3:
    entered_pin = input("请输入您的PIN码以继续：")
    if entered_pin == pin:
        break  # 如果PIN码正确，退出循环。
    print("PIN码错误，请重试。")
    attempts += 1  # 增加尝试次数。
if attempts == 3:
    print("PIN码错误次数过多，程序退出。")
else:
    # 如果PIN码验证通过，进入主功能菜单的循环。
    while True:
        print("\n欢迎使用ATM机系统")
        print("1. 查看余额")
        print("2. 存款")
        print("3. 取款")
        print("4. 退出")
        choice = input("请输入您的选择（1-4）：")
        
        if choice == "1":
            # 查看余额的选项。
            print(f"您的账户余额为：${balance:.2f}")
        elif choice == "2":
            # 存款的选项。用户输入存款金额。
            while True:
                try:
                    amount = float(input("请输入存款金额："))
                    if amount >= 0:
                        balance += amount
                        print(f"存款成功！您的新余额为：${balance:.2f}")
                        break  # 成功存款后退出内部循环。
                    else:
                        print("请输入一个正数。")  # 引导用户输入正数金额。
                except ValueError:
                    print("无效输入，请输入一个数字。")  # 引导用户输入有效数字。
        elif choice == "3":
            # 取款的选项。检查账户余额并进行取款操作。
            while True:
                try:
                    amount = float(input("请输入取款金额："))
                    if amount >= 0:
                        if amount > balance:
                            print("余额不足，无法完成取款。")
                        else:
                            balance -= amount
                            print(f"取款成功！您的新余额为：${balance:.2f}")
                        break  # 完成取款或显示余额不足信息后退出循环。
                    else:
                        print("请输入一个正数。")
                except ValueError:
                    print("无效输入，请输入一个数字。")
        elif choice == "4":
            # 退出选项。结束程序。
            print("感谢使用我们的ATM服务，再见！")
            break  # 退出主循环，结束程序。
        else:
            # 如果输入非1-4的选项，提示无效输入。
            print("无效输入，请输入1-4之间的数字。")
```



:::





















