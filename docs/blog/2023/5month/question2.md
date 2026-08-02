---
title: Python期末考答疑2
date: 2023-05-11 19:19:50
author: AI悦创
isOriginal: true
category: 
    - Python期末辅导
    - Python期末1v1辅导
tag:
    - Python毕业设计辅导
    - Python毕业设计1v1辅导
icon: python
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
---

## Question 1

::: tabs

@tab 题目

从键盘输入数字 10，以下程序的输出结果是？

```python
try:
    n = input("请输入一个整数：")


    def pow2(n):
        return n * n


    pow(n)
except:
    print("程序执行错误")
```

A.100

B. 10

C. 程序执行错误

D. 程序没有任何输出

@tab 详细解答

题目是关于 Python 语言中的异常处理（Exception handling）和函数调用的。代码中展示了一个简单的 Python 程序，尝试调用一个函数并处理可能出现的异常。

让我们来逐步解释这段代码：

1. 首先，程序试图从键盘获取一个输入，这里假设我们输入的是数字 10。

2. 然后，程序定义了一个函数 `pow2(n)`，该函数接受一个参数 n，然后返回 n 的平方。在我们的情况下，如果 n 是 10，那么返回的值应该是 100。

3. 接下来，程序试图调用函数 `pow(n)`，但是注意这里并没有定义过 `pow` 这个函数。程序实际上应该调用的是刚刚定义的 `pow2(n)` 函数。**当然就算程序调用的是 `pow2(n)` 也还是会报错，因为 `input()` 得到的都是字符串类型，字符串类型不能相乘。**

由于 `pow(n)` 函数并没有在程序中定义，所以在执行时会引发一个 `NameError` 异常，Python 解释器将找不到这个名字。这就引出了异常处理部分：程序使用 `try/except` 块来尝试执行一段代码，并处理可能出现的异常。

当 `try` 块中的代码引发异常时，程序立即跳到 `except` 块中，执行那里的代码，然后继续执行 `try/except` 块之后的代码。在这个例子中，`except` 块将打印出"程序执行错误"。

现在我们可以逐个看一下每个选项：

A. 100 - 这个答案假设 `pow2(n)` 函数被正确调用并返回了 10 的平方。但实际上，由于程序试图调用未定义的 `pow(n)`，所以这个答案是错误的。**当然就算程序调用的是 `pow2(n)` 也还是会报错，因为 `input()` 得到的都是字符串类型，字符串类型不能相乘。**

B. 10 - 这个答案可能假设输入的数字被直接打印出来，但实际上在这个程序中并没有这样的操作。

C. 程序执行错误 - 这个答案是正确的。由于程序试图调用未定义的 `pow(n)` 函数，程序会引发 `NameError` 异常，然后跳到 `except` 块中，打印出"程序执行错误"。

D. 程序没有任何输出 - 这个答案假设程序没有打印任何内容。但是由于 `NameError` 异常被触发，程序将执行 `except` 块中的代码，打印出"程序执行错误"。

因此，正确答案是C。"程序执行错误"。

这道题目考察的知识点主要有两个：函数的定义和调用，以及 Python 的异常处理，input 得到的数据都是字符串。

@tab 类似题

从键盘输入数字 5，以下程序的输出结果是？

```python
try:
    m = input("请输入一个整数：")

    def div2(m):
        return int(m) / 2

    div(m)
except:
    print("出现错误")
```

A. 2.5

B. 5

C. 出现错误

D. 程序没有任何输出

@tab 类似题讲解

这道题目与之前的题目类似，同样涉及到 Python 的异常处理（Exception handling）以及函数调用的知识。让我们一步步来解析这段代码：

1. 首先，程序从键盘获取一个输入，假设我们输入的数字是 5。

2. 然后，程序定义了一个名为 `div2(m)` 的函数，该函数接收一个参数 m，将其转化为整数后除以 2。在我们的例子中，如果 m 是 5，那么返回的值应该是 2.5。

3. 接下来，程序试图调用函数 `div(m)`。然而请注意，在代码中并没有定义过名为 `div` 的函数。这里的意图应该是调用刚刚定义的 `div2(m)` 函数。

由于 `div(m)` 函数并没有在程序中定义，所以在运行时会引发一个 `NameError` 的异常，Python 解释器会因找不到这个名字而报错。这就引出了异常处理的部分：程序使用了 `try/except` 代码块来尝试执行一段代码，并处理可能出现的异常。

当 `try` 代码块中的代码引发异常时，程序立即跳到 `except` 代码块，执行其中的代码，然后继续执行 `try/except` 代码块之后的代码。在这个例子中，`except` 代码块将打印出"出现错误"。

现在我们来逐个看一下每个选项：

A. 2.5 - 这个答案假设 `div2(m)` 函数被正确调用并返回了5除以2的结果。但实际上，由于程序试图调用未定义的 `div(m)`，所以这个答案是错误的。

B. 5 - 这个答案可能假设输入的数字被直接打印出来，但在这个程序中并没有这样的操作。

C. 出现错误 - 这个答案是正确的。由于程序试图调用未定义的 `div(m)` 函数，程序会引发 `NameError` 异常，然后跳到 `except` 代码块，打印出"出现错误"。

D. 程序没有任何输出 - 这个答案假设程序没有打印任何内容。但实际上，由于 `NameError` 异常被触发，程序将执行 `except` 代码块中的代码，打印出"出现错误"。

因此，正确答案是C。"出现错误"。

这道题目的考点主要是函数的定义和调用，以及 Python 的异常处理。

:::

## Question 2

::: tabs

@tab 题目

以下关于 Python 二维数据的描述中,错误的是：

A. 列表中保存的二维数据,可以通过循环用 `writelines()` 写入 CSV 文件

B. CSV 文件的每一行是一维数据,可以用列表、元组表示

C. 从 CSV 文件获得数据内容后,可以用 `replace()` 来去掉每行最后的换行符

D.若一个列表变量里的元素都是字符串类型,则可以用 `join()` 合成字符串

@tab 详细解答

本题考察的是 Python 中二维数据处理与 CSV 文件操作的知识。我们将逐个选项进行分析并解释该题目的考点。

A. 列表中保存的二维数据,可以通过循环用 `writelines()` 写入 CSV 文件

此选项是错误的。`writelines` 方法通常用于写入文本文件，而不是 CSV 文件。

下面是 CSV 的处理，自行认真观察代码和运行代码：

```python
import csv

# 准备要写入 CSV 文件的数据
data = [
    ['姓名', '年龄', '城市'],
    ['张三', 28, '北京'],
    ['李四', 24, '上海'],
    ['王五', 34, '深圳'],
]

# 打开一个新的 CSV 文件并写入数据
with open('output.csv', mode='w', newline='', encoding='utf-8') as csvfile:
    csv_writer = csv.writer(csvfile)

    for row in data:
        csv_writer.writerow(row)

print("数据已成功写入 output.csv 文件")
```

```python
import csv

# 准备要写入 CSV 文件的数据
data = [
    ['姓名', '年龄', '城市'],
    ['张三', 28, '北京'],
    ['李四', 24, '上海'],
    ['王五', 34, '深圳'],
]

# 打开一个新的 CSV 文件并写入数据
with open('output.csv', mode='w', encoding='utf-8') as csvfile:
    csv_writer = csv.writer(csvfile)
    csv_writer.writerows(data)
    # for row in data:
    #     csv_writer.writerow(row)

print("数据已成功写入 output.csv 文件")
```

writelines 的演示「可以写，但是没必要」：

```python
# 准备要写入 CSV 文件的数据
data = [
    ['姓名', '年龄', '城市'],
    ['张三', 28, '北京'],
    ['李四', 24, '上海'],
    ['王五', 34, '深圳'],
]

# 将数据转换为逗号分隔的字符串，并添加换行符
data_str = ""
for row in data:
    data_str += ",".join([str(item) for item in row]) + "\n"

# 打开一个新的 CSV 文件并写入数据
with open('output.csv', mode='w', encoding='utf-8') as csvfile:
    csvfile.writelines(data_str)

print("数据已成功写入 output.csv 文件")

```

**所以说，这个题目存在问题。**

B. CSV 文件的每一行是一维数据,可以用列表、元组表示

此选项是正确的。CSV 文件（Comma-Separated Values，逗号分隔值）是一种简单的文件格式，用于存储表格数据。CSV 文件的每一行是一维数据，可以用列表或元组表示。在 Python 中，我们通常使用列表来表示 CSV 文件中的每一行数据。

C. 从 CSV 文件获得数据内容后,可以用 `replace()` 来去掉每行最后的换行符

此选项是正确的。当我们从 CSV 文件读取数据时，每行数据末尾通常包含一个换行符（'\n'）。可以使用 Python 中的字符串方法 `replace()` 来去除每行数据中的换行符。例如，`line = line.replace('\n', '')` 可以将 `line` 字符串中的换行符替换为空字符。

D. 若一个列表变量里的元素都是字符串类型,则可以用 `join()` 合成字符串

此选项是正确的。在 Python 中，`join()` 是一个字符串方法，用于将列表或元组中的字符串元素连接成一个字符串。例如，如果列表 `words` 包含字符串元素，那么 `''.join(words)` 可以将 `words` 中的所有字符串连接成一个字符串。

:::



## Question 3

::: tabs

@tab 题目

下面代码的输出结果是：

```python
for i in "PYTHON":
    for k in range(2):
        print(i, end="")
        if i == 'H':
            break
```

A. PPYYTTHHOONN 

B. PPYYTTOONN

C. PPYYTTHOONN

D. PPYYTTH

@tab 详细解析

首先，让我们理解这个代码是如何工作的。

1. 外层循环 `for i in "PYTHON":` 遍历字符串 "PYTHON" 中的每个字符。
2. 对于每个字符，内层循环 `for k in range(2):` 会运行两次，这意味着每个字符会打印两次。由于 `print` 函数中使用了 `end=""` 参数，所以打印出的字符之间没有换行符。
3. 当 `i == 'H'` 时，`break` 语句会终止最近的循环，也就是内层循环。这意味着在打印了一个 'H' 之后，内层循环会被终止，然后程序会进入下一个外层循环的迭代。

现在我们再次考虑选项：

A. PPYYTTHHOONN: 这个答案没有理解 `break` 的作用。在字符 'H' 时，`break` 语句应该阻止打印第二个 'H'。

B. PPYYTTOONN: 这个答案错误地认为 `break` 语句会跳出所有循环，所以在字符 'H' 之后的字符都没有被打印。

C. PPYYTTHOONN: 这个答案是正确的。它正确地理解了 `break` 语句只会跳出最近的循环（也就是内部循环），并且在打印了一个 'H' 之后，程序会继续执行下一个外部循环的迭代。

D. PPYYTTH: 这个答案错误地认为 `break` 语句会跳出所有循环，所以在字符 'H' 之后的字符都没有被打印。

所以，对不起我的错误。正确答案是 C: PPYYTTHOONN。

:::



## Question 4

::: tabs

@tab 题目

以下代码执行后，`book.txt` 文件的内容是:

```python
fo = open("book.txt", "w")
ls = ["book", "23", "20100", "20"]
fo.write(str(ls))
fo.close()
```

A. `[book, 23, 20100, 20]`

B. `['book', '23', '20100', '20']`

C. `book,23,20100,20`

D. `book232010020`

@tab 详细解答

这个问题的考点是 Python 中的文件操作和 `str()` 函数的应用。

首先，让我们看一下这段代码。代码首先打开了一个名为 `book.txt` 的文件进行写入操作（如果文件不存在，它会创建一个）。然后，它创建了一个列表 `ls`，包含四个元素："book", "23", "20100", "20"。接着，它使用 `str()` 函数将这个列表转换为字符串，并将这个字符串写入到文件中。最后，它关闭了这个文件。

让我们来看一下这四个选项：

A. `[book, 23, 20100, 20]`

这个选项有误。Python 中的字符串表示会将字符串的引号也包括在内，所以列表的字符串表示不会省略引号。

B. `['book', '23', '20100', '20']`

这个选项是正确的。`str()` 函数会将列表转换为字符串，这包括了列表的所有元素，元素之间的逗号和空格，以及列表的开头和结尾的方括号。对于字符串元素，它们会被包括在引号内。

C. `book,23,20100,20`

这个选项有误。Python 的 `str()` 函数在处理列表时，会保留列表的格式，包括元素之间的逗号和空格，以及元素的引号（对于字符串元素）。因此，这个选项缺少了方括号和字符串元素的引号。

D. `book232010020`

这个选项也有误。虽然 `str()` 函数会将列表转换为字符串，但它不会移除元素之间的逗号和空格，也不会移除字符串元素的引号。因此，这个选项没有正确地表示出列表转换为字符串后的格式。

因此，这个代码执行后，`book.txt` 文件的内容应该是 `['book', '23', '20100', '20']`。

:::

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)





