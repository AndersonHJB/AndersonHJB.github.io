---
title: COMP1012_Assignment 3
date: 2023-11-03 10:49:47
author: AI悦创
isOriginal: true
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

## Task 1

**Task 1:** For a sequence **a** consisting of *n* ($1 \leq n \leq 30$) positive integers, it is *beautiful* if the following condition is held for every element (*e.g.*, $a_i$) of **a**: either $a_i=1$, or at least one of the numbers $a_i-1$ and $a_i-2$ exists in the sequence.

The prompt should be

`"Please enter a sequence: "`

The output should be formatted as either

`"It is a beautiful sequence."`

or

`"It is not a beautiful sequence."`

NOTE: you should strictly follow the prompt/output format to get full marks, and it is recommended to copy the prompt from OnlineGDB.

**Example1**

(*The contents highlighted in blue are inputs from the user*):

Please enter a sequence: 1

It is a beautiful sequence.

**Example2**

(*The contents highlighted in blue are inputs from the user*):

It is a beautiful sequence.

**Example3**

(*The contents highlighted in blue are inputs from the user*): 

Please enter a string: 3 6 1

It is not a beautiful sequence.

```python
# 定义一个检查序列是否为“美丽序列”的函数
def is_beautiful_sequence(sequence):
    # 将输入的字符串序列通过空格分割，转换为整数列表
    sequence = list(map(int, sequence.split()))

    # 遍历列表中的每个数字
    for num in sequence:
        # 如果数字不是1且比它小1或2的数字都不在序列中，则不满足条件
        if num != 1 and (num - 1 not in sequence) and (num - 2 not in sequence):
            return False  # 返回 False 表示不是“美丽序列”
    return True  # 所有数字都满足条件，返回 True 表示是“美丽序列”

# 定义一个模拟输入交互的函数，用于测试
def simulate_input_interaction(input_sequence):
    print("Please enter a sequence: ", end="")  # 输出提示信息
    print(input_sequence)  # 模拟用户输入的序列
    # 调用 is_beautiful_sequence 函数检查序列是否“美丽”
    if is_beautiful_sequence(input_sequence):
        return "It is a beautiful sequence."  # 如果是，返回对应的提示信息
    else:
        return "It is not a beautiful sequence."  # 如果不是，返回对应的提示信息

# 示例用法，模拟输入序列 "3 6 1"
r1 = simulate_input_interaction("1")
print(r1)
r2 = simulate_input_interaction("3 4 1")
print(r2)
r3 = simulate_input_interaction("3 6 1")
print(r3)

```

## Task 3

Get two $n \times n$ ($1 \leq n \leq 30$) square matrices **a** and **b** from the user, then calculate the result of **a** @ **b**. The elements are all integers, and @ means matrix multiplication. Each matrix will be given in one input, and we separate rows and columns by “; ” and “, ”, respectively.

The prompt should be:

"Please enter the first matrix: " 

"Please enter the second matrix: "

The output prompt should be formatted as

"The result is:\n"

After which there should be *n* rows of outputs, each row contains *n* integers and adjacent elements should be separated by spaces.

**NOTE**: you should strictly follow the prompt/output format to get full marks, and it is recommended to copy the prompt from OnlineGDB.

Rules: You should implement the logic by yourself instead of calling functions built in other libraries (*e.g.*, numpy). Otherwise you will get zero mark for this task even the result is correct.

**Example**

(*The contents highlighted by blue are inputs from the user*):

Please enter the first matrix: **1, 2; 3, 4**

Please enter the second matrix: **2, 2; 3, 4**

The result is:

8 10 

18 22

```python
def parse_matrix(matrix_str):
    """
    解析输入字符串为一个矩阵（列表的列表）
    """
    # 使用分号分隔字符串来获取矩阵的每一行，然后对每一行使用逗号分隔来获取单个数字
    # 最后将这些数字转换成整数，并且将它们存储在一个列表中
    return [[int(num) for num in row.split(',')] for row in matrix_str.split(';')]

def matrix_multiply(matrix_a, matrix_b):
    """
    两个矩阵相乘
    """
    # 获取矩阵的维度
    n = len(matrix_a)
    # 初始化结果矩阵，填充0
    result = [[0] * n for _ in range(n)]
    # 使用三重循环计算矩阵乘法的结果
    for i in range(n):
        for j in range(n):
            for k in range(n):
                # 累加第一个矩阵的行元素与第二个矩阵的列元素的乘积
                result[i][j] += matrix_a[i][k] * matrix_b[k][j]
    # 返回结果矩阵
    return result

def format_matrix(matrix):
    """
    格式化矩阵为字符串输出
    """
    # 使用列表推导式和字符串方法将矩阵格式化为多行字符串，
    # 每行数字之间以空格分隔
    return '\n'.join(' '.join(str(num) for num in row) for row in matrix)

# 定义一个函数来处理输入/输出过程
def handle_matrices_input_output():
    # 从用户输入中获取矩阵
    matrix_a_str = input("请输入第一个矩阵: ")
    matrix_b_str = input("请输入第二个矩阵: ")

    # 将输入的字符串解析成实际的矩阵
    matrix_a = parse_matrix(matrix_a_str)
    matrix_b = parse_matrix(matrix_b_str)

    # 执行矩阵乘法
    result_matrix = matrix_multiply(matrix_a, matrix_b)

    # 格式化并输出结果
    result_str = format_matrix(result_matrix)
    print("结果是:\n" + result_str)

# 为了实际运行输入/输出过程，请取消下面这行的注释
handle_matrices_input_output()
# 1,2;3,4
# 2,2;3,4
```



## Task 4

**Task 4:** Given a file FILE1, the content of the file is separated by spaces or “\n”. Please read the file and show all valid numbers, then give the sum of these numbers (preserve 4 digits after the decimal point). You should write the results to FILE2. Note that the files have been opened for you (as handles of **fin** and **fout**). You just have to write the code for reading and writing. Please do not reopen the files.

Words following one of the rules can be regarded as valid numbers:

1) All characters are digits, *e.g.*, “0”, “1012”;
2) There is one and only one dot (decimal point), *e.g.*, “3.14”;
3) There is one and only one “+” or “-” at the beginning of the word, and the remaining part follows rule 1) or 2).

There is no need to consider other numbers like “0xFF”, “2.3e4”, and you should ignore the words partially composed of digits, *e.g.*, “3D”.

The output should be formatted as

`"The numbers are: {:s} ... {:s}, the sum is {:.4f}."`

**NOTE**: you should strictly follow the prompt/output format to get full marks, and it is recommended to copy the prompt from OnlineGDB. The number of `{:s}` can be changed as appropriate. You have to use a `'\n'` to move to a new line when calling `file.write()`. It is different from the `print()` which adds a '`\n`' as the ending char by default.

**Example1**

Suppose the file contains:

This is a text file with 11 words and 10 spaces 

`The numbers are: 11 10, the sum is 21.0000.`

**Example2**

Suppose the file contains:

- The value of pi should be more accurate than 3.14159 but I can only remember the first 6 numbers
- Cool! I can only remember 3.14

`The numbers are: 3.14159 6 3.14, the sum is 12.2816.`

::: code-tabs

@tab Code

```python
import re

# 假设 fin 和 fout 已经是打开的文件句柄
fin = open('FILE1.txt', 'r')
fout = open('FILE2.txt', 'w')

# 读取FILE1文件内容
content = fin.read()

# 定义正则表达式来匹配有效数字
valid_number_pattern = re.compile(r'(?:\+|-)?\d+(?:\.\d+)?')

# 找到所有匹配的有效数字
valid_numbers = valid_number_pattern.findall(content)

# 计算数字的总和，并保留四位小数
sum_of_numbers = sum(map(float, valid_numbers))
sum_of_numbers_rounded = round(sum_of_numbers, 4)

# 格式化输出结果
output = "The numbers are: {:s}, the sum is {:.4f}.\n".format(' '.join(valid_numbers), sum_of_numbers_rounded)

# 写入FILE2文件
fout.write(output)

fin.close()
fout.close()
```

@tab FILE1.txt

```txt
- The value of pi should be more accurate than 3.14159 but I can only remember the first 6 numbers
- Cool! I can only remember 3.14
```



:::

**Task 5:** Given `counting.csv` in the Data folder, please write a Python program to estimate the counts 2 minutes and 30 seconds after each timestamp. Then, store the counts for every 2 minutes and 30 seconds in a csv file named **`results_T1.csv`** in the Results folder. Plot the counts for every 2 minutes and 30 seconds and save as a png file named **`result_plot_T1.png`** in the results folder.

For example, supposed we have:

| Time                  | Counts |
| --------------------- | ------ |
| 26/10/2023 7:35:00 AM | 6      |
| 26/10/2023 7:40:00 AM | 8      |
| 26/10/2023 7:45:00 AM | 10     |

We are going to estimate the counts at 26/10/2023 7:37:30 AM, 26/10/2023 7:42:30 AM, and 26/10/2023 7:47:30 AM, respectively, and store it as a csv file.

| Time                  | Counts           |
| --------------------- | ---------------- |
| 26/10/2023 7:35:00 AM | 6                |
| 26/10/2023 7:37:30 AM | Estimated counts |
| 26/10/2023 7:40:00 AM | 8                |
| 26/10/2023 7:42:30 AM | Estimated counts |
| 26/10/2023 7:45:00 AM | 10               |
| 26/10/2023 7:47:30 AM | Estimated counts |

**Requirements:** Please use pandas to read and write the csv file.

**Tips:** You can use interpolation methods provided by NumPy or SciPy to estimate the counts. You can also try using linear regression in scikit-learn for the estimation (see the reference: [https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html) and [https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html](https://scikit-learn.org/stable/auto_examples/linear_model/plot_ols.html)).

- 差值：为了实现连续的数值序列
- 我们可以直接使用线性回归模型：sklearn.linear.LinearRegression
    - 转换成时间类型（自变量 X）
    - 原始的计数因变量（y）
    - .fit











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
