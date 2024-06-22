---
title: 07-NYU Tandon School of Engineering Homework05
date: 2023-03-21 12:14:46
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

- [HW05.pdf](/1v1/04-TommyTian/07-Homework05/HW05.pdf)

<PDF url="/1v1/04-TommyTian/07-Homework05/HW05.pdf" />

## NYU Tandon School of Engineering

> 纽约大学坦顿工程学院

CS-UY 1114 Spring 2023 

> CS-UY 1114 2023年春季

## Submission instructions 

> 提交说明

1. You should submit your homework on Gradescope. 

> 你应该在Gradescope上提交作业。

2. For this assignment you should turn in 5 separate .py files named according to the following pattern:

    hw5_q1.py, hw5_q2.py, etc. 

> 对于这个任务，你应该提交5个独立的.py文件，按照以下模式命名:
> Hw5_q1.py, hw5_q2.py等。

3. Each Python file you submit should contain a header comment block as follows:

> 你提交的每个Python文件都应该包含一个头注释块，如下所示:

```python
"""
Author: [Your name here]
Assignment / Part: HW5 - Q1 (etc.)
Date due: 2023-03-22, 11:59pm
I pledge that I have completed this assignment without
collaborating with anyone else, in conformance with the
NYU School of Engineering Policies and Procedures on
Academic Misconduct.
"""
```

No late submissions will be accepted. 

> 逾期提交的资料恕不受理。

REMINDER: Do not use any Python structures that we have not learned in class. 

> 提醒:不要使用任何我们在课堂上没有学过的Python结构。

For this specific assignment, you may use everything we have learned up to, and including, variables, types, mathematical and boolean expressions, user IO (i.e. print() and input()), number systems, and the math / random modules, selection statements (i.e. if, elif, else), and for- and while-loops. Please reach out to us if you're at all unsure about any instruction or whether a Python structure is or is not allowed. 

> 对于这个特定的作业，你可以使用我们学到的所有东西，包括变量、类型、数学和布尔表达式、用户IO(即print()和input())、数字系统和数学/
> 随机模块，选择语句(即if, elif, else)，以及for-和while-循环。如果您不确定任何指令或Python结构是否被允许，请与我们联系。

Do not use, for example, user-defined functions (except for main() if your instructor has covered it during lecture), string methods, file i/o, exception handling, dictionaries, lists, tuples, and/or object-oriented programming.

> 例如，不要使用用户定义的函数(main()除外，如果你的导师在课堂上讲过)、字符串方法、文件i/o、异常处理、字典、列表、元组和/或面向对象编程。

Failure to abide by any of these instructions will make your submission subject to point deductions.

> 如不遵守上述任何一项规定，您的投稿将被扣分。

Problems：

1. Working With Limitations (**hw5_q1.py**) 

2. Complementary Service (**hw5_q2.py**) 

3. Lexicographical Trends (**hw5_q3.py**) 

4. Read Between The Lines (**hw5_q4.py1**) 

5. So It Goes When You Do Your Scales And Your Arpeggios (**hw5_q5.py**) 

## Problem 1: Working With Limitations

> 问题1:工作有局限性

Write a program that prompts the user for a string and prints the string in lowercase without using the lower(), upper(), islower() and isupper() string methods. 

> 编写一个程序，提示用户输入字符串，并以小写形式打印字符串，而不使用lower()、upper()、islower()和isupper()字符串方法。

Your program must also tell the user how many letter were made lowercase, how many letters were left untouched, how many whitespace characters there were (i.e. ' ' and '\n'), and how many non-alphabetic characters the string contained. You must do this without using isalnum(), isdigit(), isalpha(), or any other method that checks for the type of character you are considering. In other words, all of these checks must be made manually.

> 你的程序还必须告诉用户有多少字母是小写的，有多少字母是没有改变的，有多少空格字符(即。' '和'\n')，以及该字符串包含多少个非字母字符。您必须在不使用isalnum()、isdigit()、isalpha()或任何其他检查您正在考虑的字符类型的方法的情况下完成此操作。换句话说，所有这些检查都必须手动进行。

For example, an execution of this program could look like this:

> 例如，这个程序的执行可以是这样的:

```python
Say something: New Romantic Sailors!
new romantic sailors!
Number of changed letters: 3
Number of unchanged letters: 15
Number of whitespace characters: 2
Number of non-alphabetic characters: 3
```

```python
Say something:aiAi yc 111
aiai yc 111
Number of changed letters:1
Number of unchanged letters:5
Number of whitespace characters:2
Number of non-alphabetic characters:5
```



### Answer 1

::: code-tabs

@tab Tommy

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/3/22 00:52
# @Author  : AI悦创
# @FileName: test.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
def string_judgment():
    user_input_str = input("Say something:")
    # lowercase_count = 0  # 有多少字母是小写的
    changed_letters = 0  # 改变的字母
    unchanged_letters = 0  # 没有改变的的字母/也就是小写字母
    whitespace_characters = 0  # 空字符
    non_alphabetic_characters = 0  # 非字母字符
    lowercase_str = ""  # 变成小写的变量
    for char in user_input_str:
        if 65 <= ord(char) <= 90:
            changed_letters += 1
            lowercase_str += chr(ord(char) + 32)
        elif 97 <= ord(char) <= 122:
            lowercase_str += char
            # lowercase_count += 1
            unchanged_letters += 1
        elif char == " " or char == "\n":
            lowercase_str += char
            whitespace_characters += 1
        else:
            lowercase_str += char
            non_alphabetic_characters += 1
    print(lowercase_str)
    print("Number of changed letters:" + str(changed_letters))
    print("Number of unchanged letters:" + str(unchanged_letters))
    print("Number of whitespace characters:" + str(whitespace_characters))
    print("Number of non-alphabetic characters:" + str(non_alphabetic_characters + whitespace_characters))


string_judgment()
```

@tab Tommy 注释版本

```python
def main():
    input_str = input("Say something: ")

    # 初始化计数器
    changed_letters = 0
    unchanged_letters = 0
    whitespace_characters = 0
    non_alphabetic_characters = 0

    # 创建一个空字符串，用于存储小写结果
    lowercase_str = ""

    # 遍历输入字符串中的每个字符
    for char in input_str:
        # 检查字符是否为大写字母（ASCII范围65-90）
        if 65 <= ord(char) <= 90:
            # 将大写字母转换为小写（偏移32）
            lowercase_str += chr(ord(char) + 32)
            changed_letters += 1
        # 检查字符是否为小写字母（ASCII范围97-122）
        elif 97 <= ord(char) <= 122:
            lowercase_str += char
            unchanged_letters += 1
        # 检查字符是否为空格字符（' '或'\n'）
        elif char == ' ' or char == '\n':
            lowercase_str += char
            whitespace_characters += 1
        # 如果字符不是大写字母、小写字母或空格字符，那么它是非字母字符
        else:
            lowercase_str += char
            non_alphabetic_characters += 1

    # 打印结果
    print(lowercase_str)
    print("Number of changed letters:", changed_letters)
    print("Number of unchanged letters:", unchanged_letters)
    print("Number of whitespace characters:", whitespace_characters)
    print("Number of non-alphabetic characters:", non_alphabetic_characters + whitespace_characters)


if __name__ == "__main__":
    main()
```

@tab DYH

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/3/21 12:30
# @Author  : AI悦创
# @FileName: q1.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/

def string_judgment():
    user_input_str = input("Say something:")
    # lowercase_count = 0  # 有多少字母是小写的
    changed_letters = 0  # 改变的字母
    unchanged_letters = 0  # 没有改变的的字母/也就是小写字母
    whitespace_characters = 0  # 空字符
    non_alphabetic_characters = 0  # 非字母字符
    lowercase_str = ""  # 变成小写的变量
    for char in user_input_str:
        if 'A' <= char <= 'Z':
            changed_letters += 1
            lowercase_str += chr(ord(char) + 32)
        elif 'a' <= char <= 'z':
            lowercase_str += char
            # lowercase_count += 1
            unchanged_letters += 1
        elif char in " \n":
            lowercase_str += char
            whitespace_characters += 1
        else:
            lowercase_str += char
            non_alphabetic_characters += 1
    print(lowercase_str)
    print("Number of changed letters:" + str(changed_letters))
    print("Number of unchanged letters:" + str(unchanged_letters))
    print("Number of whitespace characters:" + str(whitespace_characters))
    print("Number of non-alphabetic characters:" + str(non_alphabetic_characters + whitespace_characters))

string_judgment()
```

@tab 方法三

```python
def main():
    input_str = input("Say something: ")

    changed_letters = 0
    unchanged_letters = 0
    whitespace_chars = 0
    non_alphabetic_chars = 0
    output_str = ""

    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lowercase = "abcdefghijklmnopqrstuvwxyz"

    for char in input_str:
        if char in uppercase:
            output_str += lowercase[uppercase.index(char)]
            changed_letters += 1
        elif char in lowercase:
            output_str += char
            unchanged_letters += 1
        elif char == ' ' or char == '\n':
            output_str += char
            whitespace_chars += 1
        else:
            output_str += char
            non_alphabetic_chars += 1

    print(output_str)
    print("Number of changed letters:", changed_letters)
    print("Number of unchanged letters:", unchanged_letters)
    print("Number of whitespace characters:", whitespace_chars)
    print("Number of non-alphabetic characters:", non_alphabetic_chars + whitespace_chars)


if __name__ == "__main__":
    main()
```

@tab Toomy 自己写的

```python
something = input("Say something: ")
new_string = ''  # 小写后的字符串
change_count = 0  # 修改的字母
same_count = 0  # 没有修改的字母
white_count = 0  # 空字符
nonalpha_count = 0  # 非字母字符
for i in something:
    if 65 <= ord(i) <= 90:
        i = chr(ord(i) + 32)
        new_string += i
        change_count += 1
    elif 97 <= ord(i) <= 122:
        new_string += i
        same_count += 1
    else:
        new_string += i
print(new_string)

for j in new_string:
    if j == " " or j == "\n":
        white_count += 1
    elif not ((65 <= ord(j) <= 90) or (97 <= ord(j) <= 122)):
        nonalpha_count += 1

print("Number of changed letters:", change_count)
print("Number of unchanged letters:", same_count)
print("Number of whitespace characters:", white_count)
print("Number of non-alphabetic characters:", nonalpha_count + white_count)
```

:::

## Problem 2: Complementary Service

> 问题2:互补服务

Given two DNA sequences represented as string values, write a program that will: 

> 给定两个以字符串值表示的 DNA 序列，编写一个程序，将:

1. Fuse the two sequences by adding a nucleotide from each in alternating order (i.e. ACT + CA = ACCAT). If any invalid nucleotides (i.e., not A, C, T, or G) are found in either sequence, you should not include them in the fused sequence. Instead, just keep track of how many of those invalid nucleotides you encountered.

> 通过交替添加两个序列中的一个核苷酸来融合两个序列(即ACT + CA = ACCAT)。如果在任意一个序列中发现任何无效核苷酸(即不是A、C、T或G)，则不应将它们包含在融合序列中。相反，只要记录你遇到了多少无效核苷酸就可以了。

2. Create a complement sequence from the new, fused sequence. (i.e ACCAT complements to TGGTA) 

> 从新的融合序列中创建一个补体序列。(即ACCAT对TGGTA的补充)

3. Print that complement sequence, as well all the amount of invalid nucleotides that we encountered. 

> 打印出这个补体序列，以及我们遇到的所有无效核苷酸的数量。

Recall the DNA complements: 

> 回忆一下DNA补体:

| Nucleotide<br />核苷酸 | Complement<br />补充 |
| ---------------------- | -------------------- |
| A                      | T                    |
| C                      | G                    |
| T                      | A                    |
| G                      | C                    |

Figure 1: Nucleotide Complements. 

> 图1:核苷酸补体。

Here's an example to make it clearer:

> 下面是一个例子，让它更清楚:

::: code-tabs

@tab en

```python
Enter a DNA sequence: ACTGGGTAV
Enter a second DNA sequence: TTZAG
Fused sequence: TAGAACTCCCAT | Invalid characters: 2
```

@tab zh

```python
输入一个DNA序列:ACTGGGTAV
输入第二个DNA序列:TTZAG
融合序列:TAGAACTCCCAT |无效字符:2
```

:::

::: details zh

题目要求编写一个程序，根据给定的两个表示为字符串值的DNA序列，执行以下操作：

1. 将两个序列通过交替添加一个碱基的方式进行融合（例如，ACT + CA = ACCAT）。在任一序列中，如果发现无效的碱基（即，不是A、C、T或G），则不应将它们包含在融合序列中。相反，只需记录遇到的无效碱基的数量。
2. 从新的融合序列创建一个互补序列（例如，ACCAT的互补序列是TGGTA）。
3. 打印互补序列以及遇到的无效碱基的数量。

回顾DNA互补规则： 碱基 互补碱基 A T C G T A G C

提供一个示例以使问题更清晰： 输入： Enter a DNA sequence: ACTGGGTAV Enter a second DNA sequence: TTZAG

输出： Fused sequence: TAGAACTCCCAT | Invalid characters: 2

在这个示例中，用户输入了两个DNA序列，程序将它们融合成一个新序列，同时跳过无效的碱基（V和Z），并计算出融合序列的互补序列。输出结果显示融合序列、互补序列以及遇到的无效碱基的数量。

:::

::: tip 思路

先替换对应的碱基对，然后去掉无效字符，再进行交叉合并即可。

:::

### Answer 2

::: code-tabs

@tab DYH

```python
def is_valid_nucleotide(nucleotide):
    return nucleotide in "ACTG"


def complement_nucleotide(nucleotide):
    if nucleotide == "A":
        return "T"
    elif nucleotide == "C":
        return "G"
    elif nucleotide == "T":
        return "A"
    elif nucleotide == "G":
        return "C"


def main():
    # 获取用户输入的两个 DNA 序列
    sequence1 = input("Enter a DNA sequence: ")
    sequence2 = input("Enter a second DNA sequence: ")

    fused_sequence = ""  # 初始化一个空字符串用于存储融合序列
    invalid_count = 0  # 初始化一个计数器，用于记录无效的碱基个数

    sequence1_length = len(sequence1)
    sequence2_length = len(sequence2)
    loop_count = sequence2_length
    if sequence1_length > sequence2_length:
        loop_count = sequence1_length
    for i in range(loop_count):
        if i < sequence1_length:
            if is_valid_nucleotide(sequence1[i]):
                fused_sequence += sequence1[i]
            else:
                invalid_count += 1

        if i < sequence2_length:
            if is_valid_nucleotide(sequence2[i]):
                fused_sequence += sequence2[i]
            else:
                invalid_count += 1
    # print(fused_sequence)
    new_fused_sequence = ""
    for char in fused_sequence:
        new_fused_sequence += complement_nucleotide(char)
    print("Fused sequence: " + new_fused_sequence + " | Invalid characters:" + str(invalid_count))


if __name__ == '__main__':
    main()
```

@tab 给 Tommy 参考

```python
def is_valid_nucleotide(nucleotide):
    return nucleotide in "ACTG"

def complement_nucleotide(nucleotide):
    if nucleotide == "A":
        return "T"
    elif nucleotide == "C":
        return "G"
    elif nucleotide == "T":
        return "A"
    elif nucleotide == "G":
        return "C"

def main():
    sequence1 = input("Enter a DNA sequence: ")
    sequence2 = input("Enter a second DNA sequence: ")

    fused = ""
    complement = ""
    invalid_count = 0

    for i in range(max(len(sequence1), len(sequence2))):
        if i < len(sequence1):
            if is_valid_nucleotide(sequence1[i]):
                fused += sequence1[i]
                complement += complement_nucleotide(sequence1[i])
            else:
                invalid_count += 1

        if i < len(sequence2):
            if is_valid_nucleotide(sequence2[i]):
                fused += sequence2[i]
                complement += complement_nucleotide(sequence2[i])
            else:
                invalid_count += 1

    print("Fused sequence:", complement, "| Invalid characters:", invalid_count)
    print("Complement sequence:", fused)

if __name__ == "__main__":
    main()
```

@tab Tommy 答案

```python
dna_one = input("Enter a DNA sequence: ")
dna_two = input("Enter a second DNA sequence: ")
# new_sequence = ''
invalid_count = 0
# if len(dna_one) > len(dna_two):
new_dna_one = ""
for char in dna_one:
    if char in "ACTG":
        new_dna_one += char
    else:
        new_dna_one += " "
        invalid_count += 1
new_dna_two = ""
for char in dna_two:
    if char in "ACTG":
        new_dna_two += char
    else:
        new_dna_two += " "
        invalid_count += 1

trs_dna_one = ""
for char in new_dna_one:
    if char == "A":
        trs_dna_one += "T"
    elif char == "C":
        trs_dna_one += "G"
    elif char == "T":
        trs_dna_one += "A"
    elif char == "G":
        trs_dna_one += "C"
    elif char == " ":
        trs_dna_one += " "
trs_dna_two = ""
for char in new_dna_two:
    if char == "A":
        trs_dna_two += "T"
    elif char == "C":
        trs_dna_two += "G"
    elif char == "T":
        trs_dna_two += "A"
    elif char == "G":
        trs_dna_two += "C"
    elif char == " ":
        trs_dna_two += " "
# print(trs_dna_one)
# print(trs_dna_two)
loop_count = 0
if len(trs_dna_one) > len(trs_dna_two):
    loop_count = len(trs_dna_one)
else:
    loop_count = len(trs_dna_two)

result_dna = ""
for i in range(loop_count):
    if i < len(trs_dna_one):
        if trs_dna_one[i] == " ":
            pass
        else:
            result_dna += trs_dna_one[i]
    if i < len(trs_dna_two):
        if trs_dna_two[i] == " ":
            pass
        else:
            result_dna += trs_dna_two[i]

print(invalid_count)
print(result_dna)
```

@tab Tommy 老师不让用 pass

```python {11,18,31-32,43-44,56-57,59-60}
dna_one = input("Enter a DNA sequence: ")
dna_two = input("Enter a second DNA sequence: ")
# new_sequence = ''
invalid_count = 0
# if len(dna_one) > len(dna_two):
new_dna_one = ""
for char in dna_one:
    if char in "ACTG":
        new_dna_one += char
    else:
        new_dna_one += " "
        invalid_count += 1
new_dna_two = ""
for char in dna_two:
    if char in "ACTG":
        new_dna_two += char
    else:
        new_dna_two += " "
        invalid_count += 1

trs_dna_one = ""
for char in new_dna_one:
    if char == "A":
        trs_dna_one += "T"
    elif char == "C":
        trs_dna_one += "G"
    elif char == "T":
        trs_dna_one += "A"
    elif char == "G":
        trs_dna_one += "C"
    elif char == " ":
        trs_dna_one += " "
trs_dna_two = ""
for char in new_dna_two:
    if char == "A":
        trs_dna_two += "T"
    elif char == "C":
        trs_dna_two += "G"
    elif char == "T":
        trs_dna_two += "A"
    elif char == "G":
        trs_dna_two += "C"
    elif char == " ":
        trs_dna_two += " "
# print(trs_dna_one)
# print(trs_dna_two)
loop_count = 0
if len(trs_dna_one) > len(trs_dna_two):
    loop_count = len(trs_dna_one)
else:
    loop_count = len(trs_dna_two)

result_dna = ""
for i in range(loop_count):
    if i < len(trs_dna_one):
        if not (trs_dna_one[i] == " "):
            result_dna += trs_dna_one[i]
    if i < len(trs_dna_two):
        if not (trs_dna_two[i] == " "):
            result_dna += trs_dna_two[i]

print(invalid_count)
print(result_dna)
```



:::

## Problem 3: Lexicographic Trends

::: tabs

@tab en

> 问题3:词典趋势

Write a program that asks the user to input a string containing only lower case letters (you may assume that they will do so). Your program should determine if the input is ordered in lexicographic decreasing order. If it is not in decreasing order, then your program must also print the location at which the string stops being ordered in decreasing order. 

For example, an execution would look like:

```python
Please enter a string of lowercase letters: pkgba
pkgba is decreasing.
```

```python
Please enter a string: abgcp
abgcp is not decreasing
It stopped being lexicographically decreasing at location 1
```

@tab zh

问题3：字典序趋势

编写一个程序，要求用户输入一个仅包含小写字母的字符串（可以假设用户会按要求输入）。您的程序应该判断输入字符串是否按字典序递减顺序排列。如果不是递减顺序，那么您的程序还必须输出字符串不再按递减顺序排列的位置。

例如，程序执行结果如下：

示例1：

```python
Please enter a string of lowercase letters: pkgba
pkgba is decreasing.
```

示例2：

```python
Please enter a string: abgcp
abgcp is not decreasing
It stopped being lexicographically decreasing at location 1
```

:::

### Answer 3

::: code-tabs

@tab DYH

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/3/22 01:57
# @Author  : AI悦创
# @FileName: q3.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
def main():
    input_str = input("Please enter a string of lowercase letters: ")

    decreasing = True
    location = -1

    # 遍历字符串中的字符，检查是否按字典递减顺序排列
    for i in range(1, len(input_str)):
        if input_str[i] > input_str[i - 1]:
            decreasing = False
            location = i
            break

    if decreasing:
        print(f"{input_str} is decreasing.")
    else:
        print(f"{input_str} is not decreasing")
        print(f"It stopped being lexicographically decreasing at location {location}")


if __name__ == "__main__":
    main()
```

@tab DYH 不使用 break

```python
def main():
    input_str = input("Please enter a string of lowercase letters: ")

    decreasing = True
    location = -1
    found = False

    # 遍历字符串中的字符，检查是否按字典递减顺序排列
    for i in range(1, len(input_str)):
        if not found and input_str[i] > input_str[i-1]:
            decreasing = False
            location = i
            found = True

    if decreasing:
        print(f"{input_str} is decreasing.")
    else:
        print(f"{input_str} is not decreasing")
        print(f"It stopped being lexicographically decreasing at location {location}")

if __name__ == "__main__":
    main()
```

@tab Tommy

```python
# 结束循环可以使用 return 实现 or while 实现
```

:::





## Problem 4: Read Between The Lines

Let's say you wanted to decode a message that used the following encryption: Starting from the last character of the sentence, you must read every X-th letter. If the character that you land on is a number, you must skip it. For instance:

> 假设您想要解码一条使用以下加密方法的消息:从句子的最后一个字符开始，必须读取每一个x个字母。如果您着陆的字符是一个数字，则必须跳过它。例如:

```python
Enter an encoded string: !thnsdosdhdft7g68yyrop
Enter a key: 2
Your message is 'python!'
```

Above, we start at the last character, **p**, skip 2 (as denoted by the decryption key), and ignore the one numeric character we landed on (**6**):

> 上面，我们从最后一个字符**p**开始，跳过2(由解密密钥表示)，并忽略我们停留的一个数字字符(**6**):

```python
STEP 0:
!thnsdosdhdft7g68yyrop
STEP 1:
! [th] n [sd] o [sd] h [df] t [7g 6 8y] y [ro] p
STEP 2:
! n o h t y p
STEP 3
!nohtyp
STEP 4:
python!
```

You may assume that both user inputs will always be valid ones. You may not use the **reverse()** string method.

::: details zh

问题4：读取行间信息

假设您想解码一条使用以下加密方式的信息：从句子的最后一个字符开始，您必须阅读每个 X-th 字母。如果你停留在的字符是一个数字，你必须跳过它。例如：

输入一个编码字符串：!thnsdosdhdft7g68yyrop 输入密钥：2 您的信息是 'python!' 在上面的例子中，我们从最后一个字符 **p** 开始，跳过 2（由解密密钥表示），并忽略我们停留在的一个数字字符（**6**）： 步骤0： !thnsdosdhdft7g68yyrop 步骤1： ! [th] n [sd] o [sd] h [df] t [7g 6 8y] y [ro] p 步骤2： ! n o h t y p 步骤3： !nohtyp 步骤4： python!

您可以假设用户输入的两个值都是有效的。您不可以使用 **reverse()** 字符串方法。

:::

### Answer 4

::: code-tabs

@tab DYH

```python
def decode_message():
    # Get user inputs
    encoded_string = input("Enter an encoded string: ")[::-1]
    key = int(input("Enter a key: "))
    # reversed_str = encoded_string
    middle = encoded_string[::key + 1]
    target = ""
    for char in middle:
        if char not in "0123456789":
            target += char
    print("Your message is", target)
```

@tab Tommy

```python
def decode_message():
    # Get user inputs
    encoded_string = input("Enter an encoded string: ")[::-1]
    key = int(input("Enter a key: "))
    # reversed_str = encoded_string
    middle = encoded_string[::key + 1]
    target = ""
    for char in middle:
        if not char.isdigit():
            target += char
    print("Your message is", target)

decode_message()
```

:::



## Problem 5: So it goes when you do your scales and your arpeggios

> 问题5:当你弹奏音阶和琶音的时候

Note: The instructions for this problem might look really long, but the actual code that you need to write isn't long. 

> 注意:这个问题的指令可能看起来很长，但实际需要编写的代码并不长。

An arpeggio is a musical structure wherein one plays a series of notes, one after the other, usually at even intervals. For example, if you wanted to play an arpeggio based on the C-major chord, you would play the following notes, one after the other:

> 琶音是一种音乐结构，其中演奏一系列音符，一个接一个，通常间隔均匀。例如，如果你想演奏基于c大调和弦的琶音，你可以一个接一个地演奏以下音符:

```python
C -> E -> G -> C -> E -> G -> C -> E -> G
```

Figure 1: The C-major chord being arpeggiated in the "up" direction 3 times. 

> 图1:c大调和弦向上琶音3次。

In music production, an arpeggiator is a type of synthesiser that collection a number of notes from the user and plays those notes over and over again, in any direction and as many times that the user may choose. A great example that makes awesome use of arpeggiators is the track Resurrections by Lena Raine, from the Celeste original soundtrack. 

> 在音乐制作中，琶音器是一种合成器，它收集用户的许多音符，并一遍又一遍地播放这些音符，用户可以选择任何方向和次数。一个很好的例子就是来自Celeste原版配乐的Lena Raine的《resurrection》。

We will be simulating a user entering notes into an arpeggiator, which will then arpeggiate those notes either up or down as many times as the user wants. For this, we will use a module that we have created for you, included in the file arpeggiator.py, which you can download here. You do not need to know how this module works—you only need to use its contents, and it must be in the same folder as your hw5_q5.py file. Note that, on IDLE, importing arpeggiator may not work. If this happens to you, ask your CAs during office hours on how to fix it. 

> 我们将模拟用户在琶音器中输入音符，然后该琶音器将按用户需要的次数向上或向下琶音这些音符。为此，我们将使用为您创建的模块，包含在arpeggiator.py文件中，您可以在这里下载该文件。您不需要知道这个模块是如何工作的—您只需要使用它的内容，并且它必须与hw5_q5.py文件在同一个文件夹中。注意，在IDLE状态下，导入arpeggiator可能不起作用。如果这种情况发生在您身上，请在办公时间询问ca如何修复它。

You can find the arpeggiator module documentation here. 

> 你可以在这里找到arpeggiator模块文档。

Our goal is the following: 

> 我们的目标是:

1. Ask the user to enter any notes into the arpeggiator. The arpeggiator will check whether these notes are actual valid musical notes, so you don't need to worry about checking yourself. When the user is done entering notes, they should enter the word "DONE" (caps-sensitive). The user must do this to proceed. 

> 要求用户在琶音器中输入任何音符。琶音师会检查这些音符是否是真正有效的音符，所以你不需要担心自己检查。当用户完成输入笔记时，他们应该输入单词“done”(大小写敏感)。用户必须这样做才能继续。

2. Next, the user will enter a direction in which they would like the arpeggiator to play. Their choices are limited to the characters 'U' for "up" and 'D' for "down". The user must enter either of these characters to proceed. 

> 接下来，用户将输入他们希望琶音器演奏的方向。他们的选择仅限于“U”代表“上”，“D”代表“下”。用户必须输入这两个字符中的任意一个才能继续。

3. Next, the user must enter how many times they would like their arpeggiator to play. The user must enter a positive, non-zero number to proceed.

> 接下来，用户必须输入他们希望琶音器播放多少次。用户必须输入一个正的、非零的数字才能继续。

4. Finally, the program should play the arpeggiator as many times and in the direction that the user selected. 

> 最后，程序应该在用户选择的方向上尽可能多地播放琶音器。

Once you're entire solution is complete, sample executions might look like this (note that I added some print() statements for clarity; you may format your output however you like):

> 一旦您完成了整个解决方案，示例执行可能如下所示(注意，为了清晰起见，我添加了一些print()语句;你可以选择你喜欢的格式输出):

::: code-tabs

@tab en

```python
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: C
Note 'C' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: E
Note 'E' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: G
Note 'G' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: E
Note 'E' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: C
Note 'C' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: DONE
Arpeggiator (notes: C, E, G, E, C)
Enter an arpeggiator direction [U/D] u
Enter an arpeggiator direction [U/D] d
Enter an arpeggiator direction [U/D] U
How many times do you want your arpeggiator to play? 5
~C
~~~E
~~~~~G
~~~E
~C
~C
~~~E
~~~~~G
~~~E
~C
~C
~~~E
~~~~~G
~~~E
~C
~C
~~~E
~~~~~G
~~~E
~C
~C
~~~E
~~~~~G
~~~E
~C
```

@tab zh

```python
输入一个音符(如a, Db, c#等)或“DONE”结束:C
注‘C’加了!
输入一个音符(如a, Db, c#等)或“DONE”结束:E
注意加了“E”!
输入一个音符(如a, Db, c#等)或“DONE”结束:G
注‘G’加了!
输入一个音符(如a, Db, c#等)或“DONE”结束:E
注意加了“E”!
输入一个音符(如a, Db, c#等)或“DONE”结束:C
注‘C’加了!
输入一个音符(如a, Db, c#等)或“DONE”来结束:DONE
琶音师(音符:C, E, G, E, C)
输入琶音方向[U/D] U
输入琶音方向[U/D] D
输入琶音方向[U/D] U
你想让你的琶音琴演奏几次?5
```

:::



::: code-tabs

@tab en

```python
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: A
Note 'A' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: Fb
WARNING: 'Fb' is not a valid note.
VALID NOTES: Ab, A#, A, Bb, B, C#, C, Db, D#, D, Eb, E, F#, F, Gb, G#, G
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: D#
Note 'D#' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: Gb
Note 'Gb' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: L#
WARNING: 'L#' is not a valid note.
VALID NOTES: Ab, A#, A, Bb, B, C#, C, Db, D#, D, Eb, E, F#, F, Gb, G#, G
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: B-Sharp
WARNING: 'B-Sharp' is not a valid note.
VALID NOTES: Ab, A#, A, Bb, B, C#, C, Db, D#, D, Eb, E, F#, F, Gb, G#, G
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: D
Note 'D' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: E
Note 'E' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: F
Note 'F' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: E
Note 'E' added!
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: END
WARNING: 'END' is not a valid note.
VALID NOTES: Ab, A#, A, Bb, B, C#, C, Db, D#, D, Eb, E, F#, F, Gb, G#, G
Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: DONE
Arpeggiator (notes: A, D#, Gb, D, E, F, E)
Enter an arpeggiator direction [U/D] D
How many times do you want your arpeggiator to play? -4
How many times do you want your arpeggiator to play? (Must be positive amount)
3
~E
~~~F
~~~~~E
~~~~~~~D
~~~~~Gb
~~~D#
~A
~A
~~~D#
~~~~~Gb
~~~~~~~D
~~~~~E
~~~F
~E
~E
~~~F
~~~~~E
~~~~~~~D
~~~~~Gb
~~~D#
~A
```

@tab zh

```python
输入一个音符(如a, Db, c#等)或“DONE”结束:a
加了“A”!
输入一个音符(如a, Db, c#等)或“DONE”结束:Fb
警告:'Fb'不是有效的注释。
#有效注:Ab, A, B, C #, Bb, C, Db, D #, D, Eb, E, f#, F, G, G #, G
输入一个音符(如a, Db, c#等)或“DONE”结束:d#
注意“D#”已添加!
输入一个音符(如a, Db, c#等)或“DONE”结束:Gb
注意添加了“Gb”!
输入一个音符(如a, Db, c#等)或“DONE”以l#结尾
警告:“l#”不是有效的注释。
#有效注:Ab, A, B, C #, Bb, C, Db, D #, D, Eb, E, f#, F, G, G #, G
输入一个音符(如a, Db, c#等)或“DONE”结束:升b调
警告:“升b调”不是有效的音符。
#有效注:Ab, A, B, C #, Bb, C, Db, D #, D, Eb, E, f#, F, G, G #, G
输入一个音符(如a, Db, c#等)或“DONE”结束:D
注“D”加了!
输入一个音符(如a, Db, c#等)或“DONE”结束:E
注意加了“E”!
输入一个音符(如a, Db, c#等)或“DONE”结束:F
注意加了“F”!
输入一个音符(如a, Db, c#等)或“DONE”结束:E
注意加了“E”!
输入一个音符(如a, Db, c#等)或“DONE”结束:end
警告:'END'不是有效的注释。
#有效注:Ab, A, B, C #, Bb, C, Db, D #, D, Eb, E, f#, F, G, G #, G
输入一个音符(如a, Db, c#等)或“DONE”来结束:DONE
琶音师(音符:A, d#， Gb, D, E, F, E)
输入琶音方向[U/D] D
你想让你的琶音琴演奏几次?4
你想让你的琶音琴演奏几次?(必须为正数)
```

:::

How on earth do we do this? Check the documentation for the arpeggiator module in the next page.

> 我们到底要怎么做?在下一页中查看 arpeggiator 模块的文档。

### Setting Up Your File 

At the top of your hw5_q5.py file, type the following four lines:

> 在hw5_q5.py文件的顶部，输入以下四行代码:

```python
import arpeggiator
ARPEGGIATOR = arpeggiator.Arpeggiator()
UP = arpeggiator.Direction.UP
DOWN = arpeggiator.Direction.DOWN
```

You don't have to worry about how ARPEGGIATOR, UP, and DOWN work behind the hood—you simply have to use them in your solution. 

> 您不必担心ARPEGGIATOR、UP和DOWN在背后是如何工作的—您只需在解决方案中使用它们即可。

### The **add_note()** Method

You can use ARPEGGIATOR the way you use math or random (i.e. you can use its methods). For example, if you want to input a note into the arpeggiator, you would use its add_note() method:

> 你可以使用ARPEGGIATOR的方式，你使用数学或随机(即，你可以使用它的方法)。例如，如果你想在arpeggiator中输入一个音符，你可以使用它的add_note()方法:

```python
ARPEGGIATOR.add_note("Eb") # Adding an E-flat into the arpeggiator
ARPEGGIATOR.add_note("Bb") # Adding a B-flat into the arpeggiator
ARPEGGIATOR.add_note('C') # Adding a C into the arpeggiator
ARPEGGIATOR.add_note("G#") # Adding a G-sharp into the arpeggiator
ARPEGGIATOR.add_note('G') # Adding a G into the arpeggiator
ARPEGGIATOR.add_note(("D-minor")) # Adding an invalid note to the arpeggiator
```

Output (this output is generated by ARPEGGIATOR—you do NOT need to print this yourself):

> 输出(此输出由arpeggiator生成-您不需要自己打印):

```python
Note 'Eb' added!
Note 'Bb' added!
Note 'C' added!
Note 'G#' added!
Note 'G' added!
WARNING: 'D-minor' is not a valid note.
VALID NOTES: Ab, A#, A, Bb, B, C#, C, Db, D#, D, Eb, E, F#, F, Gb, G#, G
```

You can confirm which notes you have added to your arpeggiator by printing ARPEGGIATOR:

> 你可以通过打印arpeggiator来确认哪些音符已经添加到arpeggiator:

```python
print(ARPEGGIATOR)
```

Output:

```python
Arpeggiator (notes: Eb, Bb, C, G#, G)
```

### The **play()** Method

You can also play your arpeggiator by using its play() method:

> 你也可以使用它的play()方法来播放你的琶音器:

```python
ARPEGGIATOR.play()
```

Output:

```python
In order:
~G
~~~G#
~~~~~C
~~~Bb
~Eb
```

The default direction of the play() method is UP,but you can also ask it to play it backwards by passing DOWN into its parentheses:

> play()方法的默认方向是UP，但你也可以通过将DOWN传递到它的括号中来要求它向后播放:

```python
print("In order:")
ARPEGGIATOR.play()
print("\nIn Order:")
ARPEGGIATOR.play(UP)
print("\nBackwards:")
ARPEGGIATOR.play(DOWN)
```

Output:

```python
In order:
~G
~~~G#
~~~~~C
~~~Bb
~Eb
In Order:
~G
~~~G#
~~~~~C
~~~Bb
~Eb
Backwards:
~Eb
~~~Bb
~~~~~C
~~~G#
~G
```

### Answer 5

::: code-tabs

@tab DYH

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/3/21 23:53
# @Author  : AI悦创
# @FileName: q5.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
import arpeggiator

ARPEGGIATOR = arpeggiator.Arpeggiator()
UP = arpeggiator.Direction.UP
DOWN = arpeggiator.Direction.DOWN


def main():
    condition = True
    while condition != "DONE":
        Add_Musical_Note = input("Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: ")
        if Add_Musical_Note == "DONE":
            condition = "DONE"
            print(ARPEGGIATOR)
        else:
            ARPEGGIATOR.add_note(Add_Musical_Note)

    condition = True
    UP_OR_DOWN = ""
    while condition != "UD":
        UP_OR_DOWN = input("Enter an arpeggiator direction [U/D] ")
        if UP_OR_DOWN == "U" or UP_OR_DOWN == "D":
            condition = "UD"

    condition = False
    play_num = 0
    template = "How many times do you want your arpeggiator to play? "
    while not condition:
        play_num = input(template)
        if play_num.isdigit():
            play_num = int(play_num)
            condition = True
        template = "How many times do you want your arpeggiator to play? (Must be positive amount)"

    for i in range(play_num):
        if UP_OR_DOWN == "U":
            ARPEGGIATOR.play(UP)
        elif UP_OR_DOWN == "D":
            ARPEGGIATOR.play(DOWN)


if __name__ == '__main__':
    main()
```

@tab 不使用 isdigit()

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/3/21 23:53
# @Author  : AI悦创
# @FileName: q5.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
import arpeggiator

ARPEGGIATOR = arpeggiator.Arpeggiator()
UP = arpeggiator.Direction.UP
DOWN = arpeggiator.Direction.DOWN


def main():
    condition = True
    while condition != "DONE":
        Add_Musical_Note = input("Enter a musical note (i.e. A, Db, C#, etc.) or 'DONE' to end: ")
        if Add_Musical_Note == "DONE":
            condition = "DONE"
            print(ARPEGGIATOR)
        else:
            ARPEGGIATOR.add_note(Add_Musical_Note)

    condition = True
    UP_OR_DOWN = ""
    while condition != "UD":
        UP_OR_DOWN = input("Enter an arpeggiator direction [U/D] ")
        if UP_OR_DOWN == "U" or UP_OR_DOWN == "D":
            condition = "UD"

    condition = False
    play_num = 0
    template = "How many times do you want your arpeggiator to play? "
    while not condition:
        play_num = input(template)
        # if play_num.isdigit():
        #     play_num = int(play_num)
        #     condition = True
        # for n in play_num:
        #     if n not in "0123456789":
        #         condition = True
        #         break
        if play_num.count(".") == 0:
            if int(play_num) > 0:
                play_num = int(play_num)
                condition = True

        template = "How many times do you want your arpeggiator to play? (Must be positive amount)"

    for i in range(play_num):
        if UP_OR_DOWN == "U":
            ARPEGGIATOR.play(UP)
        elif UP_OR_DOWN == "D":
            ARPEGGIATOR.play(DOWN)


if __name__ == '__main__':
    main()
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
