---
title: CS-UY 1ll4 Intro to Programming & Problem Solving NYU Tandon School of Engineering Second Midterm Exam - l8 April 2023
date: 2023-05-09 06:19:28 
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

## Question 1

（15 pts；3 pts each；circle your anser）Assuming the following function calls are written in main where indicated. Which lines of code are valid and which will produce an error (either syntax or runtime)? Assume each line is written by itself inside main; these lines are not sequential.

> 假设以下函数调用在 main 函数中被写入了指定的位置。哪些代码行是有效的，哪些将产生错误（无论是语法错误还是运行时错误）？假设每行代码都是在 main 函数内单独编写的；这些行不是连续的。

```python
def func1(var):
    return var + 1

def func2():
    return 57 + func1(42)

def func3(var):
    if func2() >= var:
        return func1() + func2()
    else:
        return 0
    
def func4(var):
    print(var + func3(50))
    
def main():
    n = 10
    # (line of code inserted here)
```

| Line of code               | Valid/Error? |
| -------------------------- | ------------ |
| `funcl(n) `                | True         |
| `n = func2()`              | True         |
| `print(func4(func3(100)))` | Fasle        |
| `func4(n)`                 | Fasle        |
| `n = func3(200)`           |              |

---

```python
def funcA(var):
    return var - 1

def funcB():
    return 100 - funcA(23)

def funcC(var):
    if funcB() <= var:
        return funcA() + funcB()
    else:
        return 0

def funcD(var):
    print(var + funcC(30))

def main():
    m = 20
    # (line of code inserted here)

```

| Line of code               | Valid/Error? |
| -------------------------- | ------------ |
| `funcA(m)`                 |              |
| `m = funcB()`              |              |
| `print(funcD(funcC(120)))` |              |
| `funcD(m)`                 | True         |
| `m = funcC(150)`           | Fasle        |

原题目解释及答案：

题目要求判断每一行代码插入到`main()`函数中时是否合法，以及是否会产生错误（语法错误或运行时错误）。我们逐行分析每个代码：

1. `funcl(n)`: 这是一个合法的调用，因为`funcl`需要一个参数，`n`是一个整数，满足条件。**答案：True**

2. `n = func2()`: 这是一个合法的调用，因为`func2`不需要参数。`func2()`的返回值是一个整数，可以赋值给`n`。**答案：True**

3. `print(func4(func3(100)))`: 这是一个非法的调用，因为`func4`函数需要一个参数，而`func4`函数的返回值是`None`（没有明确的返回值，只执行了`print`语句）。所以`func4(func3(100))`会导致运行时错误。**答案：False**

4. `func4(n)`: 这是一个非法的调用，原因同上。虽然`func4`函数需要一个参数，但它的返回值是`None`。`func4(n)`会导致运行时错误。**答案：False**

5. `n = func3(200)`: 这是一个合法的调用。`func3`需要一个参数，这里提供了一个整数`200`。`func3`的返回值是一个整数，可以赋值给`n`。**答案：True**

新题目解释及答案：

1. `funcA(m)`: 这是一个合法的调用，因为`funcA`需要一个参数，`m`是一个整数，满足条件。**答案：True**

2. `m = funcB()`: 这是一个合法的调用，因为`funcB`不需要参数。`funcB()`的返回值是一个整数，可以赋值给`m`。**答案：True**

3. `print(funcD(funcC(120)))`: 这是一个非法的调用，因为`funcD`函数需要一个参数，而`funcD`函数的返回值是`None`（没有明确的返回值，只执行了`print`语句）。所以`funcD(funcC(120))`会导致运行时错误。**答案：False**

4. `funcD(m)`: 这是一个非法的调用，原因同上。虽然`funcD`函数需要一个参数，但它的返回值是`None`。`funcD(m)`会导致运行时错误。**答案：False**

5. `m = funcC(150)`: 这是一个合法的调用。`funcC`需要一个参数，这里提供了一个整数`150`。`funcC`的返回值是一个整数，可以赋值给`m`。**答案：True**

## Question 2

(12 pts; 4 pts each) You are given the following function definition. For each of the following code segments show what is printed. If nothing is printed, then write "NO OUTPUT".

```python
def trace_code(values):
    info = []
    for idx in range(len(values)):
        try:
            if values[idx] > 5:
                new_val = (values[idx] // idx)
                info.append(new_val)
            else:
                info.append(str(idx) * values[idx])
        except TypeError:
            print("TE")  # Uses a list of non-negative integers.
        except ZeroDivisionError:
            print("ZDE")  # Division by zero.
        except FileExistsError:
            print("FNFE")  # File not found.
        except:
            print("Other")  # Another exception occurred
    return info
```

| Code segment                                                 | Output                |
| ------------------------------------------------------------ | --------------------- |
| `trace_code(["file.txt"])`                                   | `TE`                  |
| `my_list = trace_code([6, 5])`<br />`print(my_list)`         | `ZDE`<br/>`['11111']` |
| `my_list.extend(trace_code([3, "file.txt"]))`<br/>`print(my_list)` |                       |



::: tabs

@tab 1

在Python中，`ValueError`是一种常见的异常，当函数的参数类型正确，但值不符合预期时会引发这种异常。例如，当你尝试将一个字符串转换为整数，但字符串并不是一个有效的整数表示时，就会引发ValueError。以下是一个例子：

```python
try:
    # 这个字符串不能被解析为整数
    number = int("abc")
except ValueError as ve:
    print(f"发生了ValueError异常: {ve}")
```

在这个例子中，我们尝试将字符串 "abc" 转换为整数，但因为它不是一个有效的整数表示，所以会引发`ValueError`异常。我们用`try-except`语句来捕获这个异常并打印错误信息。

@tab 2

`TypeError` 和 `ValueError` 都是 Python 中的异常类型，它们表示程序中出现的不同类型的错误。让我们详细了解它们之间的功能和区别。

**TypeError**

`TypeError` 通常在操作或函数应用于不适当类型的对象时引发。换句话说，当你尝试在不兼容类型的对象上执行操作时，就会出现 `TypeError`。例如：

```python
try:
    result = "Hello, world!" + 42
except TypeError as te:
    print(f"发生了TypeError异常: {te}")
```

在这个例子中，我们尝试将一个字符串与一个整数相加，由于这两种类型不兼容，因此会引发 `TypeError` 异常。

**ValueError**

`ValueError` 通常在操作或函数的参数类型正确，但值不符合预期时引发。换句话说，当你传递了正确的类型的参数，但参数的值不在有效范围内时，就会出现 `ValueError`。例如：

```python
try:
    number = int("abc")
except ValueError as ve:
    print(f"发生了ValueError异常: {ve}")
```

在这个例子中，我们尝试将字符串 "abc" 转换为整数，但因为它不是一个有效的整数表示，所以会引发 `ValueError` 异常。

**总结**

- `TypeError` 是由于类型不兼容导致的错误。例如，尝试将字符串与整数相加。
- `ValueError` 是由于参数值不在有效范围内导致的错误。例如，尝试将非数字字符串转换为整数。

两者之间的主要区别在于，`TypeError` 与操作或函数应用的对象的类型有关，而 `ValueError` 与传递给操作或函数的值有关。在处理这些异常时，可以使用 `try-except` 语句来捕获异常并采取适当的措施。

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
