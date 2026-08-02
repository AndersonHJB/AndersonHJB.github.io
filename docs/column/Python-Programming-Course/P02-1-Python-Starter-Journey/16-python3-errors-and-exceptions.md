---
title: 16-Python3 错误与异常详解
icon: blog
date: 2025-10-29 20:23:02
author: AI悦创
isOriginal: true
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

你好，我是悦创。

作为 Python 初学者，在刚学习 Python 编程时，经常会看到一些报错信息，在前面我们没有提及，这章节我们会专门介绍。

Python 有两种错误很容易辨认：**语法错误和异常**。

Python assert（断言）用于判断一个表达式，在表达式条件为 False 的时候触发异常。

![](https://blog.images.bornforthis.cn/docs-images/sha256/f0/f0c81781b55a3de0a27aadec1f79b24b10f7971940f1d78db23c8e8683a5dfec.webp)

## 1. 语法错误

Python 的语法错误或者称之为解析错，是初学者经常碰到的，如下实例：

```python
>>> while True print('Hello world')
  File "<stdin>", line 1, in ?
    while True print('Hello world')
                   ^
SyntaxError: invalid syntax
```

这个例子中，函数 `print()` 被检查到有错误，是它前面缺少了一个冒号` :` 。

语法分析器指出了出错的一行，并且在最先找到的错误的位置标记了一个小小的箭头。

## 2. 异常

即便 Python 程序的语法是正确的，在运行它的时候，也有可能发生错误。运行期检测到的错误被称为异常。

大多数的异常都不会被程序处理，都以错误信息的形式展现在这里：

```python
>>> 10 * (1/0)             # 0 不能作为除数，触发异常
Traceback (most recent call last):
  File "<stdin>", line 1, in ?
ZeroDivisionError: division by zero
>>> 4 + spam*3             # spam 未定义，触发异常
Traceback (most recent call last):
  File "<stdin>", line 1, in ?
NameError: name 'spam' is not defined
>>> '2' + 2               # int 不能与 str 相加，触发异常
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
```

> 上面的代码是为了演示异常，故意这么写出符合语法，但是运行会报错。在实际开发当中，有时候忽略了实际的某种特殊情况，当用户输入了超出我们开发时预计的问题，程序则会报错。

异常以不同的类型出现，这些类型都作为信息的一部分打印出来：例子中的类型有 ZeroDivisionError，NameError 和 TypeError。

> 有些读者会问：老师你怎么知道这些报错的，是要记下来吗？——报错类型众多，无需特意去记忆，只需要在遇到时，直接查看报错类型，接着使用 try/except 进行匹配处理即可！

错误信息的前面部分显示了异常发生的上下文，并以调用栈的形式显示具体信息。

## 3. 异常处理

### 3.1 try/except

异常捕捉可以使用 **try/except** 语句。

![](https://blog.images.bornforthis.cn/docs-images/sha256/ea/eab850129ed51323f61d178be253bf18506883cfde987658f95415c0791e15c5.png)

以下例子中，让用户输入一个合法的整数，但是允许用户中断这个程序（使用 Control-C 或者操作系统提供的方法）。用户中断的信息会引发一个 KeyboardInterrupt 异常。

```python
while True:
    try:
        x = int(input("请输入一个数字: "))
        break
    except KeyboardInterrupt:
        print("您输入的不是数字，请再次尝试输入！")
```

当程序使用 `python main.py` 运行时，你会发现用户使用 Ctrl + C 并不能结束程序，而是会死循环。

#### 3.1.1 原生避免报错方法

`int()` 函数在把字符串强制转换成数字型时，什么情况下会报错？——非纯数字时，就会触发报错！

接下来，编写代码试试：如果在不使用 try/except 的情况下，我们是如何处理或者避免这类报错呢？

```python
while True:
    x = input("请输入一个数字: ")
    if x.isdigit():
        x_int = int(x)
        break
    else:
        print("您输入的不是数字，请再次尝试输入！")
```

向上面这样的代码实现，本质上需要考察：**预判+避免**，也就是把有可能的错误进行预判，预判之后进行规避（避免）。

::: tip 小贴士

- **预判**：我们预判用户输入的有可能不是纯数字；
- **避免**：使用 if 来判断是否是纯数字的情况；
- **缺点**：总有意想不到、百密一疏，造成报错，则会停止🤚。（总有你考虑不到的情况）

:::

#### 3.1.2 try/except 匹配单个错误实现

except 需要匹配报错类型，如何获取呢？——直接编写一个代码，进行故意报错，就可以得到报错类型：

```python
int("1a")

# --output---
Traceback (most recent call last):
  File "/Users/huangjiabao/code.py", line 1, in <module>
    int("1a")
ValueError: invalid literal for int() with base 10: '1a'
```

得到 `ValueError`  错误类型后，使用 try/except 实现如下：

```python
while True:
    try:
        x = int(input("请输入一个数字: "))
        break
    except ValueError:
        print("您输入的不是数字，请再次尝试输入！")
```

try 语句按照如下方式工作；

- 首先，执行 try 子句（在关键字 try 和关键字 except 之间的语句）。
- 如果没有异常发生，忽略 except 子句，try 子句执行后结束。
- 如果在执行 try 子句的过程中发生了异常，那么 try 子句余下的部分将被忽略。如果异常的类型和 except 之后的名称相符，那么对应的 except 子句将被执行。
- 如果一个异常没有与任何的 except 匹配，那么这个异常将会传递给上层的 try 中。

::: tip 小贴士

- **接纳与控制**：try/except 可以接受程序出现报错，并对匹配到的报错进行特定操作！
- **全面**：也可以实现不论什么报错，都可以匹配控制，防止没有预料到的错误导致程序停止；

:::

#### 3.1.3 try/except 多个错误匹配

一个 try 语句可能包含多个 except 子句，分别来处理不同的特定的异常，最多只有一个分支会被执行。

**处理程序将只针对对应的 try 子句中的异常进行处理，而不是其他的 try 的处理程序中的异常。** 👇

::: info 上面👆一句的解释

在 Python 中，每一个 try 语句都与其后面的 except 子句形成一个独立的异常处理结构。

当程序在某个 try 块中运行出现异常时，Python 会仅在这个 try 对应的 except 子句中查找匹配的异常类型，并执行相应的处理逻辑。

如果该异常在当前 try 的所有 except 子句中都没有被捕获处理，它就会继续向外层传播（也就是“冒泡”），由外层的 try...except 块尝试进行处理。

而不会跳过当前层级，直接被其他并列或不相关的 `try...except` 块捕获。

因此，**每个 except 只负责处理它所属的 try 块中的异常，不会处理来自其他 try 块的错误。**

:::

##### 3.1.3.1 使用元组捕获多个异常

一个 except 子句可以同时处理多个异常，这些异常将被放在一个括号里成为一个元组，例如：

```python
except (RuntimeError, TypeError, NameError):
    pass
```

我们来看一个实际的代码：

```python
print("程序开始运行")

try:
    # 下面的语句会触发 NameError
    result = x + 5  # x 未定义
    print(result)

except (RuntimeError, TypeError, NameError):
    # 捕获三种异常之一，这里是 NameError
    print("捕获到错误，但程序继续执行。")

print("程序继续执行")
```

这种写法主要取决于想要把多种错误，汇总并统一处理，不做每种错误的特殊处理。如果想要每种错误的特殊处理，则需要拆开编写代码。

##### 3.1.3.2 多个 except 捕获异常

接下来，我们可以尝试拆开编写：

::: code-tabs

@tab 代码

```python
print("程序开始运行")

try:
    # 这里可以依次修改触发不同错误
    result = x + 5        # 会触发 NameError
    # result = 10 / 0     # 会触发 ZeroDivisionError
    # result = 'a' + 1    # 会触发 TypeError
    print(result)

except RuntimeError:
    print("捕获到 RuntimeError：运行时错误")

except TypeError:
    print("捕获到 TypeError：类型错误")

except NameError:
    print("捕获到 NameError：变量未定义")

print("程序继续执行")
```

@tab 补充

```python
import sys

print("程序开始运行")

try:
    # 模拟不同的错误
    result = x + 5        # 会触发 NameError
    # result = 'a' + 1    # 会触发 TypeError
    # raise RuntimeError("运行时错误")  # 手动触发 RuntimeError

except (RuntimeError, TypeError, NameError) as err:
    print("捕获到错误：", err)

except:
    print("Unexpected error:", sys.exc_info()[0])
    raise

print("程序继续执行")
```

:::

最后一个 except 子句可以忽略异常的名称，它将被当作通配符使用。你可以使用这种方法打印一个错误信息，然后再次把异常抛出。

```python
import sys

print("程序开始运行")

try:
    # 模拟不同的错误
    result = x + 5        # 会触发 NameError
    # result = 'a' + 1    # 会触发 TypeError
    # raise RuntimeError("运行时错误")  # 手动触发 RuntimeError

except RuntimeError as err:  # err 是变量名，可以自行随意设置
    print("RuntimeError:", err)

except TypeError as err:
    print("TypeError: 类型错误，详情：", err)

except NameError as err:
    print("NameError: 变量未定义，详情：", err)

except:
    # 捕获所有未被上面 except 匹配的其他异常
    print("Unexpected error:", sys.exc_info()[0])
    raise   # 重新抛出异常（不隐藏错误）

print("程序继续执行")
```

- `import sys` 是为了调用 `sys.exc_info()` 获取当前异常类型。
- 每个 `except` 独立处理一种错误类型。
- 最后的 `except`: 是**兜底**（相当于“其他错误”），建议只在确实需要时使用。
- `raise` 语句用于**重新抛出异常**，便于调试时追踪错误。

##### 3.1.3.3 对比总结表

| 特点     | 拆开写法                 | 合并写法                         |
| -------- | ------------------------ | -------------------------------- |
| 可读性   | 清晰、易区分             | 简洁、紧凑                       |
| 可定制性 | 可对每种错误打印不同提示 | 所有错误同一处理逻辑             |
| 使用场景 | 需要区分不同错误时       | 错误处理逻辑相同或简单时         |
| 示例语法 | `except NameError:`      | `except (NameError, TypeError):` |

### 3.2 try/except...else

**try/except** 语句还有一个可选的 **else** 子句，如果使用这个子句，那么必须放在所有的 except 子句之后。

else 子句将在 try 子句没有发生任何异常的时候执行。

![](https://blog.images.bornforthis.cn/docs-images/sha256/50/50aec7bd272e46d0de2047942ff6a2cfd307eab2c2a0916dbeb7fc9dd75260d5.png)

::: tip 类似于，一群人去探险找宝物。一个公子哥就让随身的手下，先去探路👩‍🦯。并很自大的跟其他队友说道：咱们先原地休整一下，前面探路没问题了之后，咱们再一同前往。

- **try**：探路的手下，没死并且活着回来；
- **else**：公子哥与其他队友，一起继续向前走；

:::

以下实例在 try 语句中判断文件是否可以打开，如果打开文件时正常的没有发生异常则执行 else 部分的语句，读取文件内容。

::: code-tabs

@tab **file1.txt**

```text
Hello
World
Python
```

@tab **file2.txt**

```text
AI悦创
bornforthis.cn
```

@tab **count_lines.py**

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/11/3 15:10
# @Author  : AI悦创
# @FileName: count_lines.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
# 导入sys模块，用来处理命令行参数
import sys

'''
- sys.argv: 是一个列表，包含运行 Python 脚本时的命令行参数。
- sys.argv[0] 是脚本名。
- sys.argv[1:] 是脚本后面跟的文件名列表。
'''
# 遍历命令行参数（从sys.argv[1:]开始，跳过第一个参数，即脚本名）
for arg in sys.argv[1:]:
    try:
        # sys.argv: 是一个列表，包含运行 Python 脚本时的命令行参数。
        f = open(arg, 'r')
    except IOError:
        # 如果文件无法打开（例如文件不存在或权限问题），捕获 IOError 异常
        # 打印错误信息，告知无法打开哪个文件
        print('cannot open', arg)
    else:
        # 如果文件成功打开，执行 else 中的代码
        # 使用 readlines() 方法读取文件的所有行，并计算其长度（即行数）
        print(arg, 'has', len(f.readlines()), 'lines')
        # 读取完成后，关闭文件以释放资源
        f.close()
```

:::



#### 3.2.1 解释说明

::: details 🧑‍💻 详细解释

1. **`import sys`**

    这行代码导入 Python 的 `sys` 模块，它提供了与 Python 解释器紧密相关的功能，比如 `sys.argv` 用来获取命令行参数。

2. **`for arg in sys.argv[1:]:`**

    这里的 `sys.argv` 是一个列表，包含了所有从命令行传入的参数。

    - `sys.argv[0]` 是当前脚本的名称，所以从 `sys.argv[1:]` 开始遍历，处理实际传入的文件名。

3. **`try:`**

     `try` 块用于捕获可能引发异常的代码。如果在 `try` 块中发生异常，Python 会跳到相应的 `except` 块进行处理。

4. **`f = open(arg, 'r')`**

    该行尝试以只读模式 (`'r'`) 打开 `arg` 指定的文件。

    - `arg` 是从命令行传入的文件名。
    - 如果文件存在并且没有权限问题，则会成功打开。

5. **`except IOError:`**

    如果在 `try` 块中打开文件时发生了 `IOError`（比如文件不存在、无法读取或权限问题），程序将跳到 `except` 块。

6. **`print('cannot open', arg)`**

    捕获到 `IOError` 后，打印错误信息，告知用户哪个文件无法打开。

7. **`else:`**

    如果没有异常发生，程序将跳到 `else` 块，执行文件打开成功后的操作。

8. **`print(arg, 'has', len(f.readlines()), 'lines')`**

    - `f.readlines()` 读取文件中的所有行，并返回一个列表。
    - `len(f.readlines())` 计算文件中的行数。
    - 打印文件名和行数，告诉用户该文件有多少行。

9. **`f.close()`**

    读取完文件后，调用 `f.close()` 关闭文件。

    关闭文件是一个良好的编程习惯，确保资源被释放，不会占用系统资源。

:::

::: details 🧑‍💻 进阶优化建议

如果你希望代码更简洁且现代，可以使用 `with open()` 来自动管理文件的打开和关闭，而不需要手动调用 `f.close()`。这样即使发生异常，文件也会在退出 `with` 块时自动关闭。

```python
import sys

for arg in sys.argv[1:]:
    try:
        # 使用with语句，Python会自动管理文件的关闭
        with open(arg, 'r') as f:
            # 读取文件并计算行数
            print(arg, 'has', len(f.readlines()), 'lines')
    except IOError:
        # 如果文件无法打开，捕获IOError并打印错误信息
        print('cannot open', arg)
```

在这个优化版本中，`with open` 会在 `with` 语句块结束时自动关闭文件。这样可以确保即使发生异常，文件也会被正确关闭，避免资源泄漏。

:::

1. **`sys.argv`**

    是一个列表，包含运行 Python 脚本时的命令行参数。

    - `sys.argv[0]` 是脚本名。
    - `sys.argv[1:]` 是脚本后面跟的文件名列表。

2. **循环部分**

    对命令行传入的每个文件名（`arg`）执行：

    - 尝试 `open(arg, 'r')` 打开文件；
    - 如果无法打开（比如文件不存在），捕获 `IOError` 并打印 `"cannot open"`；
    - 否则，统计该文件的行数（用 `len(f.readlines())`），打印结果；
    - 最后关闭文件。

#### 3.2.2 运行示例（命令行操作）

在终端中输入（假设文件都在同一目录）：

```python
python count_lines.py file1.txt file2.txt nofile.txt
```

其中：

- `count_lines.py` 是你的 Python 文件（保存上面那段代码）。
- `file1.txt`、`file2.txt` 是存在的文件。
- `nofile.txt` 是一个**不存在的文件**，用来触发异常。

#### 3.2.3 运行结果示例

```bash
file1.txt has 3 lines
file2.txt has 2 lines
cannot open nofile.txt
```



#### 3.2.4 Other 代码

具体来说，在代码中传入的文件名 `file1.txt`、`file2.txt` 等仅仅是文件名，而不是文件的**绝对路径**，因此 Python 无法在**当前工作目录**中找到这些文件。

- **方案一：使用绝对路径**

    除非在运行的时候，把文件的绝对路径也写出来：

    ```bash
    python /Users/huangjiabao/Book/count_lines.py /Users/huangjiabao/Book/file1.txt /Users/huangjiabao/Book/file2.txt
    ```

- **方案二：代码中处理相对路径问题**

    修改代码以使用绝对路径

    ```python
    import sys
    import os
    
    # 获取当前脚本的路径
    current_directory = os.path.dirname(os.path.abspath(__file__))
    
    for arg in sys.argv[1:]:
        file_path = os.path.join(current_directory, arg)  # 将文件名与当前路径拼接
        try:
            f = open(file_path, 'r')
        except IOError:
            print('cannot open', file_path)
        else:
            print(arg, 'has', len(f.readlines()), 'lines')
            f.close()
    ```

    **解释**：

    1. `os.path.abspath(__file__)` 获取当前脚本文件的绝对路径。

    2. `os.path.dirname()` 获取当前脚本所在目录。

    3. 使用 `os.path.join(current_directory, arg)` 将传入的文件名与当前目录拼接，得到绝对路径。

        这样，无论你从哪里运行脚本，都会自动处理相对路径问题，确保能找到文件。

    **总结**：

    - 如果你使用相对路径运行脚本时出现找不到文件的问题，请确保文件与脚本在同一目录，或者在运行命令时提供文件的绝对路径。
    - 如果你想更健壮地处理路径问题，可以修改代码，自动拼接文件路径。

::: tip 现在的代码是需要终端运行，请思考如何修改成不使用终端运行，达到同样的输出结果。

:::

::: code-tabs

@tab 非命令行版本

```python
# 文件名：count_lines_no_argv.py

# 假设我们不从命令行获取参数，而是自己定义文件列表
files = ['file1.txt', 'file2.txt', 'nofile.txt']

for arg in files:
    try:
        f = open(arg, 'r')
    except IOError:
        print('cannot open', arg)
    else:
        print(arg, 'has', len(f.readlines()), 'lines')
        f.close()
```

@tab 交互式版本（用户手动输入）

```python
# 文件名：count_lines_input.py

# 用户输入文件名，用空格分隔
files = input("请输入要统计的文件名（空格分隔）：").split()

for arg in files:
    try:
        f = open(arg, 'r')
    except IOError:
        print('cannot open', arg)
    else:
        print(arg, 'has', len(f.readlines()), 'lines')
        f.close()

```

:::



### 3.3 try-finally 语句

![](https://blog.images.bornforthis.cn/docs-images/sha256/5a/5a5bfc56349fd9ed7651a29abdb2770de0e30841c53c6d66ff0128a43f260380.png)

`try-finally` 语句无论是否发生异常都将执行最后的代码。

::: tip 举个例子🌰

**保命的手段**：如果我们在处理文件时，系统发生错误或者文件数据出现不可预料的异常。为防止异常导致数据丢失，往往我们会在处理异常时添加 finally 进行最后的操作，例如：程序出现报错时，执行文件保存操作。

:::

以下实例中 finally 语句无论异常是否发生都会执行：

```python
try:
    bornforthis()  # 故意写错，此函数不存在
except AssertionError as error:
    print(error)
else:
    # 下面代码在这个例子当中，其实是多余的，不过为了稍微演示一下文件操作。
    try:
        with open('file.log') as file:
            read_data = file.read()
    except FileNotFoundError as fnf_error:
        print(fnf_error)
finally:
    print('这句话，无论异常是否发生都会执行。')
```

## 4. 抛出异常

### 4.1 基础语法

Python 使用 raise 语句抛出一个指定的异常。

raise 语法格式如下：

```python
raise [Exception [, args [, traceback]]]
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/34/34857ab30b1d8fa3ad5f3d21f18a2b9ad7bc757ce2b2ea19b068aa09309b8f72.png)

以下实例如果 x 大于 5 就触发异常：

```python
x = 10
if x > 5:
    raise Exception('x 不能大于 5。x 的值为: {}'.format(x))
```

执行以上代码会触发异常：

```python
Traceback (most recent call last):
  File "test.py", line 3, in <module>
    raise Exception('x 不能大于 5。x 的值为: {}'.format(x))
Exception: x 不能大于 5。x 的值为: 10
```

如果没有 Exception 会出现什么情况的结果？

```python {10}
x = 10
if x > 5:
    raise 'x 不能大于 5。x 的值为: {}'.format(x)
    

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/Book/code.py", line 3, in <module>
    raise 'x 不能大于 5。x 的值为: {}'.format(x)
TypeError: exceptions must derive from BaseException
```

而使用 Exception 则可以实现指定输出报错内容：

```python
x = 10
if x > 5:
    raise Exception('x 不能大于 5。x 的值为: {}'.format(x))

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/84-辛泽承/code.py", line 3, in <module>
    raise Exception('x 不能大于 5。x 的值为: {}'.format(x))
Exception: x 不能大于 5。x 的值为: 10
```



### 4.2 思考🧐

::: tip 思考一下为什么会存在 raise？

- **思考一**：Python 提供的报错主要是给程序员看的，raise 是程序员写给用户看的。
- **思考二**：程序运行时，并不是所有错误都能自动被检测出来。有时候我们知道某种情况“不合理”，就需要**主动抛出错误**来提醒或中断程序。

:::



### 4.3 补充例子：输入校验

```python
def divide(a, b):
    if b == 0:
        raise ValueError("分母不能为0")  # 主动抛出异常
    return a / b
```

如果用户输入 `divide(10, 0)`，程序不会继续执行，而是立即抛出：

```python
ValueError: 分母不能为0
```

这可以防止程序做出错误的计算。

::: tip 

raise 的存在是为了让程序能够**主动发现问题、明确失败原因、优雅地处理错误**。

:::

### 4.4 raise 补充说明

raise 唯一的一个参数，指定了要被抛出的异常。它必须是一个异常的实例或者是异常的类（也就是 Exception 的子类）。

```python
raise ValueError("分母不能为0")  # 主动抛出异常
```

例如上面的代码中 raise 指定了 BaseException 子类 ValueError 异常。（其它子类：Exception、ValueError……）

如果你只想知道这是否抛出了一个异常，并不想去处理它，那么一个简单的 raise 语句就可以再次把它抛出。

> **换句话说**：只想知道程序有没有出现问题，有没有遇到报错时，可以直接写一个 raise 即可，类似实现一个提醒。
>
> **专业说法**：raise 用在 except 块中，**不带参数**，表示重新抛出当前捕获的异常。（也就是抛出 try 遇到的错误，这样既能保证继续正常执行，又能了解遇到的错误！）

```python
try:
    raise NameError('HiThere')  # 模拟一个异常。
except NameError:
    print('An exception flew by!')
    raise
   
Traceback (most recent call last):
  File "/Users/huangjiabao/Book/code.py", line 2, in <module>
    raise NameError('HiThere')  # 模拟一个异常。
NameError: HiThere
An exception flew by!
```



## 5. 补充说明

想象它就像一个“紧急刹车”：

- `raise Exception` = “立刻刹车停下”
- 没有 `raise` = “正常行驶”
- `try/except` = “踩了刹车但又重新启动”



## 6. assert（断言）

![](https://blog.images.bornforthis.cn/docs-images/sha256/72/72dc86bfb138494c1329dffc1e3f4d2869cf8ab3cd20f78bfadddb314ecb5a2f.png)

Python assert（断言）用于判断一个表达式，在表达式条件为 false 的时候触发异常。

断言可以在条件不满足程序运行的情况下直接返回错误，而不必等待程序运行后出现崩溃的情况，例如我们的代码只能在 Linux 系统下运行，可以先判断当前系统是否符合条件。（后面会有具体例子）

### 6.1 基础语法

语法格式如下：

```python
assert expression
```

等价于：

```python
if not expression:
    raise AssertionError
```

assert 后面也可以紧跟参数:

```python
assert expression [, arguments]
```

等价于：

```python
if not expression:
    raise AssertionError(arguments)
```

以下为 assert 使用实例：

```python
>>> assert True     # 条件为 True 正常执行
>>> assert False    # 条件为 False 触发异常
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AssertionError
>>> assert 1==1    # 条件为 True 正常执行
>>> assert 1==2    # 条件为 False 触发异常
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AssertionError

>>> assert 1==2, '1 不等于 2'
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AssertionError: 1 不等于 2
>>>
```

### 6.2 实际例子

以下实例判断当前系统是否为 Linux，如果不满足条件则直接触发异常，不必执行接下来的代码：

```python
import sys
assert ('linux' in sys.platform), "该代码只能在 Linux 下执行"

# 接下来要执行的代码
```

输出结果如下：

```python
Traceback (most recent call last):
  File "/Users/huangjiabao/Book/code.py", line 2, in <module>
    assert ('linux' in sys.platform), "该代码只能在 Linux 下执行"
AssertionError: 该代码只能在 Linux 下执行
```

不写 `, "该代码只能在 Linux 下执行"` 则输出：

```python
Traceback (most recent call last):
  File "/Users/huangjiabao/Book/code.py", line 2, in <module>
    assert ('linux' in sys.platform)
AssertionError
```

### 6.3 sys.platform 各个常见平台的值

| 操作系统                                        | `sys.platform` 返回值      | 备注                                               |
| ----------------------------------------------- | -------------------------- | -------------------------------------------------- |
| **Linux (各发行版，如 Ubuntu, Debian, CentOS)** | `'linux'`                  | 旧版本 Python 可能返回 `'linux2'`（Python 2 时代） |
| **Windows (包括 Win10 / Win11)**                | `'win32'`                  | 无论 32 位还是 64 位 Python，始终是 `'win32'`      |
| **macOS (含 Intel / Apple Silicon)**            | `'darwin'`                 | 取自 Darwin 内核名称                               |
| **WebAssembly (Pyodide / Emscripten 环境)**     | `'emscripten'` 或 `'wasi'` | 浏览器或 WASI 环境中运行 Python                    |

你可以改写成根据系统类型执行不同的代码，例如：

```python
import sys

if 'linux' in sys.platform:
    print("当前系统：Linux")
    # Linux 专属代码
elif 'win' in sys.platform:
    print("当前系统：Windows")
    # Windows 专属代码
elif 'darwin' in sys.platform:
    print("当前系统：macOS")
    # macOS 专属代码
else:
    raise RuntimeError("不支持的系统平台")
```

如果只是想允许所有系统运行：

```python
import sys
print(f"当前系统: {sys.platform}")
# 后续代码...
```

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)