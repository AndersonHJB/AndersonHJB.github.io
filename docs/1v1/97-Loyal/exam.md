---
title: THE HONG KONG POLYTECHNIC UNIVERSITY DEPARTMENT OF COMPUTING EXAMINATION comp final exam 23-24
date: 2024-12-05 17:31:10
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

> 香港理工大学计算机系模拟考试卷

## Section B: Fill in the Blanks Questions

### Question 17

What is the output of the following program?

```python
str1 = "COMP1012"
print(str1[1:4], str1[:2], str1[2:], str1[0:-2], str1[:-1])
```



### Question 18

Fill in the blanks in the program to output the following pattern.

To help you understand the format, we VISUALIZED the SPACES using a marker ▓.

```python
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

::: code-tabs

@tab Code1

```python
n = __________
num = 1
for i in range(__________):
    num = 1
    for j in range(__________):
        print(__________, end=__________)
        num = num + 1
    print("\r")
```

@tab Solution

```python
n = 5
num = 1
for i in range(n):
    num = 1
    for j in range(i + 1):
        print(num, end=" ")
        num = num + 1
    print("\r")
```

@tab Code2

```python
"""
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
"""
n = 5
num = 1
for i in range(n):  # 控制层数
    for j in range(1, i + 2):
        print(j, end=' ')
    print("\r")
```

@tab Code3

```python
n = 5
num = 1
for i in range(n):  # 控制层数
    for j in range(i + 1):
        print(j, end=' ')
    print("\r")
```

:::



### Question 19

Write a Python program to get a user-defined input (input from the user) of temperature and convert a given temperature to Celsius or Fahrenheit. The user should input the temperature in the format `{d} {s}`.

**For the output:**

The input temperature and the temperature converted to Celsius should be stored in a file called `file1.txt` and the input temperature and the temperature converted to Fahrenheit should be stored in a file called `file2.txt`.

**Rules:**

1. The input format for `{s}` could be lower or upper case letters.  
   **Example**: F or f and C or c.

2. You should use appropriate equations as from the below figure and you should only write one program which incorporates all the above features.

3. You must implement all the logic by yourself instead of using third-party libraries (e.g., NumPy). Otherwise, you will get a zero mark for this task even if the result is correct.

**Equation:**  


$$
\frac{C}{5} = \frac{F - 32}{9}
$$

$$
C = \frac{5 \cdot (F - 32)}{9}
\\
F = \frac{9 \cdot C + (32 \cdot 5)}{5}
$$



**Sample Input and Output 1**

```python
The input temperature is 45f  
The temperature in Celsius is 7 degrees.

# output
Input the temperature you like to convert?  
45f
```



**Sample Input and Output 2**

```python
The input temperature is 60C  
The temperature in Fahrenheit is 140 degrees.

# output
Input the temperature you like to convert?  
60C
```

**答案：**

::: code-tabs

@tab Code1

```python
# 提示用户输入温度
user_input = input("Input the temperature you like to convert (e.g., 45f or 60C): ").strip()

# 提取温度值和单位
value_part = user_input[:-1]  # 温度值部分
unit_part = user_input[-1].lower()  # 单位部分（小写）

# 检查输入是否有效
if value_part.replace('.', '', 1).isdigit() or (value_part[0] == '-' and value_part[1:].replace('.', '', 1).isdigit()):
    value = float(value_part)  # 转换为浮点数
    if unit_part == 'f':
        # 如果输入是华氏温度
        celsius = (5 * (value - 32)) / 9
        print(f"The input temperature is {value}F")
        print(f"The temperature in Celsius is {celsius:.2f} degrees.")
        
        # 将结果写入 file1.txt
        with open("file1.txt", "w") as file1:
            file1.write(f"Input: {value}F\nConverted: {celsius:.2f}C\n")
    elif unit_part == 'c':
        # 如果输入是摄氏温度
        fahrenheit = (9 * value + (32 * 5)) / 5
        print(f"The input temperature is {value}C")
        print(f"The temperature in Fahrenheit is {fahrenheit:.2f} degrees.")
        
        # 将结果写入 file2.txt
        with open("file2.txt", "w") as file2:
            file2.write(f"Input: {value}C\nConverted: {fahrenheit:.2f}F\n")
    else:
        print("Invalid unit. Please use 'C' for Celsius or 'F' for Fahrenheit.")
else:
    print("Invalid input format. Please enter a numeric temperature followed by 'C' or 'F'.")
```



:::





### Question 20

Design a function named `function1` to calculate how many different purchase options are there to buy 200 chickens for 200 dollars?

- It is known that each rooster costs \$5, hen \$3, and chicks \$0.50. $\text{Money} \geq 10$.

**Rules:**

1. Assume that Money is always greater than to 10.
2. Print the final number of options and print the detailed number of roosters, hen, and chicks of every option.

**Sample Input and Output 1:**

```python
print(f'options: {function1(money=50, number=50)}')
```

**Output:**

```
rooster: 0; hen: 10; chicks: 40  
rooster: 5; hen: 1; chicks: 44  
options: 2
```

There are two options to buy 50 chickens for 50 dollars.

**Sample Input and Output 2:**

```python
print(f'options: {function1(money=100, number=100)}')
```

**Output:**

```
rooster: 0; hen: 20; chicks: 80  
rooster: 5; hen: 11; chicks: 84  
rooster: 10; hen: 2; chicks: 88  
options: 3
```

There are three options to buy 100 chickens for 100 dollars.

**代码：**

::: code-tabs

@tab Code1

```python
def function1(money, number):
    options = 0  # 记录满足条件的方案数
    result = []  # 用于存储每种方案的详细信息

    # 鸡的数量满足：公鸡 x + 母鸡 y + 小鸡 z = number
    # 鸡的花费满足：5x + 3y + 0.5z = money
    for roosters in range(money // 5 + 1):  # 公鸡最多为 money // 5
        for hens in range(money // 3 + 1):  # 母鸡最多为 money // 3
            chicks = number - roosters - hens  # 剩余的小鸡数量
            if chicks >= 0 and 5 * roosters + 3 * hens + 0.5 * chicks == money:
                options += 1
                result.append(f"rooster: {roosters}; hen: {hens}; chicks: {chicks}")
    
    # 打印每种方案
    for r in result:
        print(r)
    
    return options

# 示例用法
print(f"options: {function1(money=50, number=50)}")
print(f"options: {function1(money=100, number=100)}")
```

@tab Code2

```python
def function1(money, number):
    """
    计算在指定金额和鸡的总数量限制下，有多少种购买公鸡、母鸡和小鸡的方案。
    
    参数：
    money: int 或 float，总金额（单位：美元）
    number: int，总鸡的数量
    
    返回：
    int，总共满足条件的购买方案数。
    """
    options = 0  # 用于记录满足条件的购买方案总数
    result = []  # 用于存储每种满足条件的购买方案的详细描述

    # 遍历所有可能的公鸡数量，公鸡单价为5美元，所以最大可能的数量是 money // 5
    for roosters in range(money // 5 + 1):
        # 遍历所有可能的母鸡数量，母鸡单价为3美元，所以最大可能的数量是 money // 3
        for hens in range(money // 3 + 1):
            # 小鸡的数量可以通过总数减去公鸡和母鸡的数量计算
            chicks = number - roosters - hens
            # 如果小鸡数量非负且满足金额的限制（5*公鸡 + 3*母鸡 + 0.5*小鸡 = 总金额）
            if chicks >= 0 and 5 * roosters + 3 * hens + 0.5 * chicks == money:
                options += 1  # 方案数加一
                # 将当前方案的详细信息（公鸡数量、母鸡数量、小鸡数量）存入结果列表
                result.append(f"rooster: {roosters}; hen: {hens}; chicks: {chicks}")
    
    # 遍历结果列表，逐行打印每种满足条件的购买方案
    for r in result:
        print(r)
    
    # 返回总的方案数
    return options

# 示例用法1：计算购买50只鸡且花费50美元的所有购买方案
print(f"options: {function1(money=50, number=50)}")

# 示例用法2：计算购买100只鸡且花费100美元的所有购买方案
print(f"options: {function1(money=100, number=100)}")
```

:::

## comp final exam 22-23

### Question 16

Please fill in the blank so that we can print the output in the following format:

```python 
for x in range(1, 11):
    print('{0: _______} {1: _______} {2: _______}'.format(x, x*x, x*x*x))
```

```python 
1   1   1
2   4   8
3   9   27
4   16  64
5   25  125
6   36  216
7   49  343
8   64  512
9   81  729
10  100 1000
```

::: tabs

@tab Code

```python 
for x in range(1, 11):
    print('{0: <2} {1: <3} {2: <4}'.format(x, x*x, x*x*x))
```

**解释：**

- `{0: <2}`：`x` 占用 2 个字符宽度，左对齐。
- `{1: <3}`：`x*x` 占用 3 个字符宽度，左对齐。
- `{2: <4}`：`x*x*x` 占用 4 个字符宽度，左对齐。

:::

### Question 17:

What is the output of the following program?

```python 
str1 = "abcde"

print(str1[1:4], str1[:2], str1[2:], str1[0:-2], str1[-1])
```





## Grammar

### 1. for loop

::: tabs

@tab 基础语法

### 1. 循环遍历列表

```python
lst = ['a', 'b', 'c', 'd', 'e']
for i in lst:
    print(i)
```

### 2. 把列表里面的所有元素进行平方

```python
lst = [10, 221, 302, 41, 5, 6]
n = 0
for i in lst:
    # print(i)
    lst[n] = i ** 2
    n = n + 1
print(lst)
```

@tab range

### 1. range 基本语法

```python
# for i in range(10):
#     print(i)
# for i in range(3, 10):
#     print(i)
for i in range(0, 10, 2):
    print(i)
```

### 2. 0~100 之和

```python
n = 0
for i in range(101):
    n += i
print(n)
```

:::

### 2. if

::: tabs

@tab 基础语法

```python
user_gender = input("请输入您的性别(F/M):")

if user_gender == "F":
    print("你是萌妹子")
elif user_gender == "M":
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
```

@tab 多个if

```python
user_gender = input("请输入您的性别(F/M):")

if user_gender == "F":
    print("你是萌妹子")
if user_gender == "M":
    print("你是糙汉子")
if user_gender == "M":
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
```

@tab 0～100奇偶分别之和

```python
m = 0
n = 0
for i in range(101):
    if i % 2 != 0:
        m += i

    elif i % 2 == 0:
        n += i
print(m, n)
```

@tab 判断用户输入的数据是否是奇数 or 偶数

```python
# 获取用户输入
number = int(input("请输入一个整数: "))

# 使用模运算符来判断奇数还是偶数
if number % 2 == 0:
    print(f"{number} 是偶数。")
else:
    print(f"{number} 是奇数。")
```

上面不是纯数字字符串会报错，我们如何优化代码呢？

```python
# 获取用户输入
number = input("请输入一个整数: ")

# 使用模运算符来判断奇数还是偶数
if number.isdigit() == True:
    if number % 2 == 0:
        print(f"{number} 是偶数。")
    else:
        print(f"{number} 是奇数。")
elif number.isdigit() == False:
    print("不是纯数字")
```

```python
# 获取用户输入
number = input("请输入一个整数: ")

# 使用模运算符来判断奇数还是偶数
if number.isdigit():
    if number % 2 == 0:
        print(f"{number} 是偶数。")
    else:
        print(f"{number} 是奇数。")
else:
    print("不是纯数字")
```

```python
# 获取用户输入
number = input("请输入一个整数: ")

# 使用模运算符来判断奇数还是偶数
if not number.isdigit():
    print("不是纯数字")
elif number % 2 == 0:
    print(f"{number} 是偶数。")
else:
    print(f"{number} 是奇数。")
```

```python
# 获取用户输入的年份
year = int(input("请输入一个年份："))

# 判断是否是闰年
if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
    # 检查是否是世纪年
    if year % 100 == 0:
        print(f"{year}是世纪闰年")
    else:
        print(f"{year}是闰年")
else:
    print(f"{year}是平年")
```





:::



### 3. 文件操作

::: tabs

@tab 文件读取

### 一次性读取全部内容

```python
f = open("text.txt", mode="r")
content = f.read()  # 一次性读取全部内容
print(content)
f.close()
```

```python
The input temperature is 45f  
The temperature in Celsius is 7 degrees.

# output
Input the temperature you like to convert?  
45f
```

### 逐行读取

```python
f = open("text.txt", mode="r")
content = f.readlines()
print(content)
f.close() 
```

```python
['The input temperature is 45f  \n', 'The temperature in Celsius is 7 degrees.\n', '\n', '# output\n', 'Input the temperature you like to convert?  \n', '45f']
```

@tab 文件写入

```python
f = open("text.txt", mode="w", encoding="utf-8")
f.write("哈哈哈哈\n\n")
f.write("黑河\n\n")
f.write("呵呵呵")

f.close()

"""
哈哈哈哈哈


黑河

呵呵呵
"""
```

:::

### 4. function

::: tabs

@tab 基础语法

1. 函数基础语法

```python
def 函数名称():
    函数内代码
```

2. 函数调用

```python
def hello():
    print("Hello World!")

# 函数调用
hello()  # 函数名称+() 即可调用函数
```

3. 函数传入参数

```python
def hello(name):
    print("Hello World!{}".format(name))

# 函数调用
hello("Loyal") 
```

4. 多个参数

```python
def hello(name, age):
    print("Hello World!{}-{}".format(name, age))

# 函数调用
hello("Loyal", 19)
```

5. 计算机

```python
# 使用函数创建一个计算器
# cacle(1, 2, '+')
# 3
# cacle(2, 2, '*')
```

6. return

```python
def hello(name, age):
    print("Hello World!{}-{}".format(name, age))
    return "Hello World!{}-{}".format(name, age)
# 函数调用
r = hello("Loyal", 19)
print(r)
```

@tab 小练习

1. 创建一个函数 circle，接收用户输入的半径，返回此半径的面积以及周长、直径。

```python 
def circle(radius):
    S = 3.12 * radius**2
    C = 2 * 3.14 * radius
    D = 2 * radius
    return S,C,D
X = circle(5)
print(X)
```



:::

### 5. while

::: tabs

@tab 1. 基本语法

1. 基本语法

```python 
while 条件:
    循环内的代码
```

2. 循环输出

```python 
n = 6
while n > 0:
    print(n)
    n -= 1
print(n)
```

3. while 实现0～100的和

```python 
n = 0
total = 0
while n <= 100:
    total += n
    n += 1

print(total)
```



:::















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
