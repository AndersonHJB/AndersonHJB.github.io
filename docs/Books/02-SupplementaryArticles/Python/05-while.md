---
title: 05-while 循环内容补充
icon: python
date: 2025-05-07 16:33:36
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: false
sidebarIcon: true
comment: true

backToTop: true
toc: true
contributors: true
watermark:
  width: 200
  height: 200
  content: 《编程启蒙：思维与代码》作者：黄家宝
  opacity: 0.5
---

## 1. 起始值的重要性

::: details 点击展开阅读

前面我们提到的起始值非常重要。如果我们现在不再是从 0 开始，而是从一个更重要的数值（比如业务中的关键参数）开始，并且这个值必须要包含在计算的结果中，那你就不能先进行 `num += 1` 操作了。

下面几个例子说明起始值可能的重要性：

## 1. 例子 1：进一步求和

例如，假设我们要计算从起始值 50 到 100 的和，这个起始值 50 是非常重要的，必须要被包含在结果内。

如果一开始就把次数 +1 放在求和操作之前，会出现什么问题？

```python
start = 50       # 起始值，从 50 开始
total = 0        # 保存累加结果

num = start
while num <= 100:
    num += 1
    total += num    

print(f"从 {start} 到 100 的整数之和是：{total}")
```

运行后输出如下结果：

```python
从 50 到 100 的整数之和是：3876
```

待会统一分析，正确的代码实现应该是这样的：

```python
start = 50       # 起始值，从 50 开始
total = 0        # 保存累加结果

num = start
while num <= 100:
    total += num  # 必须首先使用起始值
    num += 1      # 然后才对 num 进行递增

print(f"从 {start} 到 100 的整数之和是：{total}")
```

输出如下结果：

```python
从 50 到 100 的整数之和是：3825
```

在第一个代码块中，循环体内先执行了 `num += 1`，这导致了两个主要变化：

1. **起始值跳过**：第一次循环时，`num` 从 50 变成 51，然后将 51 加入总和，因而初始的 50 没有被累加。
2. **多加了一个数**：当 `num` 达到 100 时，循环内先将其增加到 101，再将 101 加入总和，因而最终累加的数列是 51 到 101，而不是 50 到 100。
3. 并且因为 `num += 1` 的提前，导致在循环内得到的 101 没有经过循环的判断。

因此，第一个代码块累加的是 51 到 101 的整数，其总和比第二个代码块（累加 50 到 100）的总和多了 $101 - 50 = 51$ 。

简单来说，就是因为递增操作的位置不同导致了累加的区间不同，最终结果也不同。在未来操作时一定要注意 +1 的位置。



## 2. 例子 2：业务上的关键初始值

下面这个例子，和例子一很像。但是我在写的时候感觉，例子1好理解。例子2也有自身的特点，故而留着。

假设起始值是某个账户的初始余额 100 元，你想计算累计增加到 150 元的总金额：

```python
initial_balance = 100
target_balance = 150
total_balance = 0

balance = initial_balance
while balance <= target_balance:
    total_balance += balance
    balance += 1

print(f"账户余额从 {initial_balance} 元到 {target_balance} 元的累计金额是：{total_balance}")
```

## 3. 例子 3：需要进行某些操作的依赖

比如记录某事件发生的第一天到第 7 天的总次数需要如何变写呢？具体来说，操作顺序不同会造成完全不同的结果：如果 `day += 1` 放在输入事件次数之前，那么第一天的事件数据就被跳过了。

**错误示范：**

```python
day = 1
total_events = 0

while day <= 7:
    day += 1    # 提前增加日期，导致跳过第一天的输入
    events_today = int(input(f"请输入第 {day} 天的事件次数: "))
    total_events += events_today

print(f"7天内事件总次数是：{total_events}")
```

正确的顺序应该是先记录事件数据再增加日期，这样第一天的记录才能正常被统计进去。

**正确示范：**

```python
day = 1
total_events = 0

while day <= 7:
    events_today = int(input(f"请输入第 {day} 天的事件次数: "))
    total_events += events_today
    day += 1     # 记录完成后再增加日期

print(f"7天内事件总次数是：{total_events}")
```

## 4. 例子 4：打卡签到

假设你每天打卡签到，一旦错过了第一天，就会影响到连续打卡奖励。

**错过第一天的版本：**

```python
day = 1
consecutive_days = 0

while day <= 7:
    day += 1
    sign_in = input(f"第 {day} 天，你打卡了吗？(yes/no): ")
    if sign_in.lower() == 'yes':
        consecutive_days += 1
    else:
        consecutive_days = 0  # 一旦错过一天，连续打卡数清零

print(f"你连续打卡了 {consecutive_days} 天！")
```

运行后输出如下：

```python
第 2 天，你打卡了吗？(yes/no): yes
第 3 天，你打卡了吗？(yes/no): yes
第 4 天，你打卡了吗？(yes/no): yes
第 5 天，你打卡了吗？(yes/no): yes
第 6 天，你打卡了吗？(yes/no): yes
第 7 天，你打卡了吗？(yes/no): yes
第 8 天，你打卡了吗？(yes/no): yes
你连续打卡了 7 天！
```

一周 7 天，还出现了 8 天。显然是不对的，原因也是很明显的把 `day += 1`，放在前面跳过了第一天。

**正确代码如下**：

```python
day = 1
consecutive_days = 0

while day <= 7:
    sign_in = input(f"第 {day} 天，你打卡了吗？(yes/no): ")
    if sign_in.lower() == 'yes':
        consecutive_days += 1
    else:
        consecutive_days = 0  # 一旦错过一天，连续打卡数清零
    day += 1

print(f"你连续打卡了 {consecutive_days} 天！")
```

这些例子清楚地展示了初始值的必要性和关键性，特别是操作顺序的重要性，提醒我们在循环设计时一定要谨慎对待起始值和操作顺序的问题。

## 5. 实现更灵活的数字转换

### 5.1 题目描述

~~获取用户输入，把用户输入的数据转换成对应的类型。此题只需要考虑数据：整数、浮点数即可。~~

1. ~~循环~~
2. ~~用户输入整数——>整数~~
3. ~~用户输入浮点数——>转换成小数~~
4. ~~Other——>提示❌不合法，重新输入或退出程序~~
5. ~~split、count、replace~~

编写程序，通过循环的方式，不断从用户处获取输入的数据，并根据输入内容自动判断并转换为对应的数字类型（整数或浮点数）。具体实现要求如下：

1. **使用循环**持续接收用户的输入，直至用户选择退出程序。

2. **判断与转换逻辑：**
    1. 若用户输入整数（如：`10`、`-5`），则将其转换成整数类型。
    2. 若用户输入浮点数（如：`3.14`、`-0.01`），则将其转换成浮点数类型。
    3. 若用户输入非数字类型的数据（如：字母或其他字符），则提示用户输入不合法，并要求重新输入或退出程序。

3. 提示与反馈要清晰易懂，使用户明确知道输入是否有效。

4. **建议实现提示：** 可以使用字符串方法，如 `split()`、`count()` 或 `replace()`，帮助识别并判断输入内容的类型。

**示例交互效果**：

```python
请输入一个数字（输入 q 退出）：10
你输入的是整数：10

请输入一个数字（输入 q 退出）：3.14
你输入的是浮点数：3.14

请输入一个数字（输入 q 退出）：hello
输入不合法，请重新输入！

请输入一个数字（输入 q 退出）：q
退出程序。
```

### 5.2 从思路到完整代码

#### 5.2.1 先汇总问题及其难点和步骤

1. **题目**：从题目可知，我们需要获取用户输入，并且可以进行强制转换，把字符串转换成数字和浮点数。
2. **难点 1**：如何判断用户输入的是合法的数字型？
3. **难点 2**：如何判断用户输入的是合法浮点数？
4. **难点 3**：如何判断除题目之外的字符？核心解决方案在解决：难点1、难点2。
5. 代码开发流程：
    1. 先实现基础版本，不一次性实现循环；
    2. 在基础版的情况下，添加循环；

#### 5.2.2 解决难点 1-1

获取用户输入肯定是使用 `input()` 函数，而 `input()` 函数得到的肯定是字符串。既然要判断是否是合法的整数，这个应该是所有问题中最简单的：直接判断字符串是不是纯数字字符串，如果是纯数字字符串必然是合法的整数！

不过上面的策略还不够全面，我们还需要考虑负数的情况。对于负数的字符串，在判断是否是纯数字时可以通过吗？我们来使用代码测试一下：

```python
numbers = '-12'
print(numbers.isdigit())
```

运行后输出如下：

```python
False
```

显然，无法通过 `.isdigit()` 函数判断。对于这种情况，我们必须手动实现判断。

#### 5.2.3 解决难点 1-2

那么，我们人是如何判断一个字符串是一个合法的负数整数呢？

例如下面字符串负数整数：

```python
numbers = '-12'
```

我们大脑是怎么确定变量 `numbers` 是合格的负整数呢？

1. **要点一**：字符串中只有负数符号和数字，除此之外再无其它；（空格都不行）
2. **要点二**：字符串中负数符号在数字前面，数字在负数符号后面；
3. **核心点**：去除负号之后，应该只剩下数字！

那么我们代码中就可以使用什么来判断这两个条件呢？

1. Python 中没有现成的函数支持上面的要点一、要点二，想要实现只能我们自己实现；
2. 再思考一下：为什么不能使用 `.isdigit()` 函数进行判断呢？因为有其它必要的符号存在，故而解决方案也很简单：我们就把用户输入的字符串拆开，然后分别判断。
3. 首先使用 `.startswith('-')` 判断字符串开头，接着再提取出除开头的负号后，使用 `.isdigit()` 判断剩下的字符串是不是纯数字字符串。如果这两个条件都得到 True，表明是标准且合法的负整数。

#### 5.2.4 解决难点 2

如何判断用户输入的是合法的浮点数呢？这个我们可以借助浮点数拥有的特点来实现，我们先来看一下浮点数有几种类型：

```python
# 类型一：
numbers = '12.22'

# 类型二：
numbers = '-12.22'
```

在继续阅读之前，你先自己思考一下：作为一个人，我们是如何判断一个浮点数是否合法？

不管是类型一还是类型二，有什么共同的特点？合法的浮点数拥有如下特点：

1. **特点一**：字符串中只有小数点、负号、数字之外再无其它；（空格都不行）
2. **特点二**：浮点数的小数点在字符串中，只出现一次。一旦出现一次以上，则不是合法浮点数；
3. **特点三**：负号只出现一次，并且负号只存在字符串开头；
4. **核心点**：去除小数点和负号之后，只剩下纯数字；

为什么我们无法直接使用 `.isdigit()` 来判断是否是纯数字字符串呢？——因为，小数点的存在和符号的存在。那么我们就拆开！

1. 首先，根据特点一。我们先判断字符串中的小数点数量，是否为 1，如果超出 1 直接不是合法浮点数；
2. 接着我们利用核心点，使用 `.replace()` 去除小数点之后，查看是否为纯数字。
3. 如果上一步得到的结果不是纯数字，则再判断左侧是不是存在负号开头。左侧如果是负号开头，则继续判断字符串中负号之后是不是纯数字字符串。（已经去除小数点的字符串）

#### 5.2.5 解决难点三

难点1、难点2已经解决。只要不符合，直接使用 else 即可。

#### 5.2.6 实现单次程序判断

先实现单次的判断（程序），再实现循环。循环只是重复：单次的判断逻辑（程序）。

1. **获取用户输入**

    ```python
    user_input = input("请输入一个数字（输入 q 退出）：")
    ```

2. **判断用户输入的数据，是否是整数**

    1. 代码是否是纯数字字符串：`user_input.isdigit()`；
    2. 代码是否以负号开头，且负号之后是否为纯数字字符串：`user_input.startswith('-') and user_input[1:].isdigit())`；

    ```python
    if user_input.isdigit() or (user_input.startswith('-') and user_input[1:].isdigit()):
        number = int(user_input)
        print(f"你输入的是整数：{number}")
    ```

3. **判断用户输入的数据，是否是浮点数**

    1. 字符串是否只含有一个小数点：`user_input.count('.') == 1`；
    2. 字符串是否在去除小数点后是纯数字：`user_input.replace('.', '').isdigit()`；
    3. 字符串是否是负号开头并且负号之后是纯数字（去除小数点后）：`user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()`；

    ```python
    elif user_input.count('.') == 1:
        if user_input.replace('.', '').isdigit() or (user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()):
            number = float(user_input)
            print(f"你输入的是浮点数：{number}")
        else:
            print("输入不合法，请重新输入！")
    ```

4. **完成单次判断程序**

    ```python
    user_input = input("请输入一个数字（输入 q 退出）：")
    
    if user_input.isdigit() or (user_input.startswith('-') and user_input[1:].isdigit()):
        number = int(user_input)
        print(f"你输入的是整数：{number}")
    elif user_input.count('.') == 1:
        if user_input.replace('.', '').isdigit() or (user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()):
            number = float(user_input)
            print(f"你输入的是浮点数：{number}")
        else:
            print("输入不合法，请重新输入！")
    else:
        print("输入不合法，请重新输入！")
    ```

5. **运行测试如下**

    ```python
    # 测试一
    请输入一个数字（输入 q 退出）：12
    你输入的是整数：12
    
    # 测试二
    请输入一个数字（输入 q 退出）：-12
    你输入的是整数：-12
    
    # 测试三
    请输入一个数字（输入 q 退出）：-12.3
    你输入的是浮点数：-12.3
    
    # 测试四
    请输入一个数字（输入 q 退出）：12.343
    你输入的是浮点数：12.343
    ```

**小提示**：在未来你独自开发程序时，如果你可以一次性从循环代码开始写，那么祝贺你达到一定水平了。但是如果，你刚刚入门。那我现在带你实现的步骤就很适合你学习：先实现单次运行的程序，才考虑添加循环。学到此，你应该要有体会：从 if 开始，现在这些都类似框架，框架内部的代码都使用 if 之前所学的知识，故而前面的基础知识很重要。建立的基础逻辑也很重要。

#### 5.2.7 添加外层循环

添加循环很简单，此时只需要考虑以下点：

1. 循环的终止条件是什么？
2. 如何实现循环条件改变？

循环终止条件是：在用户输入 q 时退出，循环条件的改变使用变量。

1. **添加循环外壳**

    其实，学到这你应该要慢慢有所感受。从 if 开始，前面都是基本语法。if 之后都是框架，只要前面基础语法学的好。框架语法都能理解，框架都不难。重点是如何巧妙利用 if 之前的基础语法。好好感受和去悟！

    ```python
    condition = False
    while not condition:
        user_input = input("请输入一个数字（输入 q 退出）：")
    
        if user_input.isdigit() or (user_input.startswith('-') and user_input[1:].isdigit()):
            number = int(user_input)
            print(f"你输入的是整数：{number}")
        elif user_input.count('.') == 1:
            if user_input.replace('.', '').isdigit() or (user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()):
                number = float(user_input)
                print(f"你输入的是浮点数：{number}")
            else:
                print("输入不合法，请重新输入！")
        else:
            print("输入不合法，请重新输入！")
    ```

2. **实现判断用户输入是否为 q 并退出**

    ```python
    condition = False
    while not condition:
        user_input = input("请输入一个数字（输入 q 退出）：")
        if user_input.lower() == 'q':
            condition = True
        elif user_input.isdigit() or (user_input.startswith('-') and user_input[1:].isdigit()):
            number = int(user_input)
            print(f"你输入的是整数：{number}")
        elif user_input.count('.') == 1:
            if user_input.replace('.', '').isdigit() or (user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()):
                number = float(user_input)
                print(f"你输入的是浮点数：{number}")
            else:
                print("输入不合法，请重新输入！")
        else:
            print("输入不合法，请重新输入！")
    ```



下面代码是我之前上课时每每带学生敲打实现的思路，不是非常完整。但我还是想贴在本文后面，如同围棋看别人棋谱。代码我想也是如此，下面的代码不是最优实现。但其中思路是值得查阅思考的：

代码一：

```python
number = input("Enter a number: ")
num_to_lst = number.split('.')
if len(num_to_lst) == 1:
    if num_to_lst[0].isdigit():
        print(f"number is {int(number)} and type is {int(number)}")
elif len(num_to_lst) == 2:
    if num_to_lst[0].isdigit() and num_to_lst[1].isdigit():
        print(f"number is {float(number)} and type is {float(number)}")
else:
    print("input is not a number")
```

代码二：

```python
while True:
    user_input = input("Enter a number: ")
    count_point = user_input.count(".")
    if user_input.isdigit():
        integer = int(user_input)
        break
    elif count_point == 1:
        index = user_input.index(".")
        pre_point = user_input[:index]
        post_point = user_input[index:]
        if pre_point.isdigit() and post_point.isdigit():
            float_point = float(user_input)
            break
    else:
        print("Invalid input")
```

:::
