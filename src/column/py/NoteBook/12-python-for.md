---
title: 12-for NoteBook
icon: yongyan
date: 2024-05-09 15:29:29
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

## 1. for 循环遍历列表每个元素

```python
students_list = ["李雷", "韩梅梅", "马冬梅"]
for student in students_list:
    print(student)

# ---output---
李雷
韩梅梅
马冬梅
```

## 2. 遍历列表元素平方放回

1. 操作如下列表

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

2. 平方放回

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

position = 0
for num in lst:
    lst[position] = num ** 2
    position += 1
print(lst)
```

## 3. enumerate()

`enumerate` 是 Python 中的一个内置函数，非常实用，它用于在遍历序列（比如列表、元组或字符串）时，同时获取每个元素的索引和值。这样做可以让循环中的迭代更直观，也更易于处理。

使用 `enumerate` 函数可以替代传统的通过索引访问元素的方法。它返回一个枚举对象，这个对象生成一系列包含每个元素的索引和值的元组。

### 3.1 基本用法

假设有一个列表，你想遍历它并同时获取每个元素的索引和值，你可以这样使用 `enumerate`：

```python
fruits = ['apple', 'banana', 'cherry']
for index, fruit in enumerate(fruits):
    print(index, fruit)
```

这段代码会输出：
```
0 apple
1 banana
2 cherry
```

### 3.2 一步步拆分学习

1. 给定如下列表

```python
In [1]: fruits = ['apple', 'banana', 'cherry']
```

2. 使用 enumerate 后，直接输出

```python
In [2]: enumerate(fruits)
Out[2]: <enumerate at 0x102cc2200>
```

3. 上面输出不直观，直接使用 `list()` 转换

```python
In [3]: list(enumerate(fruits))
Out[3]: [(0, 'apple'), (1, 'banana'), (2, 'cherry')]
```

4. 直接 for 循环查看结果

```python
In [4]: fruits_list = list(enumerate(fruits))

In [5]: for fruits in fruits_list:
   ...:     print(fruits)
   ...:
(0, 'apple')
(1, 'banana')
(2, 'cherry')
```

5. 元组支持多个变量同时赋值

```python
In [6]: index, fruit  = (0, 'apple')

In [7]: index
Out[7]: 0

In [8]: fruit
Out[8]: 'apple'

In [9]: index, fruit = (1, 'banana')

In [10]: index
Out[10]: 1

In [11]: fruit
Out[11]: 'banana'

In [12]: index, fruit = (2, 'cherry')

In [13]: index
Out[13]: 2

In [14]: fruit
Out[14]: 'cherry'
```

6. 所以 for 循环中的代码可以进行第一步优化

```python
In [15]: for fruits in fruits_list:
    ...:     index, fruit = fruits
    ...:     print(index, fruit)
    ...:
0 apple
1 banana
2 cherry
```

7. for 循环代码进行第二次优化

```python
In [16]: for index, fruit in fruits_list:
    ...:     print(index, fruit)
    ...:
0 apple
1 banana
2 cherry
```

8. 最后，我们来汇总一下，常规会直接写出如下代码：

```python
In [17]: for index, fruit in enumerate(fruits):
    ...:     print(index, fruit)
    ...:
0 2
1 cherry
```

9. 上面原本的列表数据已经被使用过枚举「enumerate」，所以需要重新创建列表：

```python
In [18]: fruits = ['apple', 'banana', 'cherry']

In [19]: for index, fruit in enumerate(fruits):
    ...:     print(index, fruit)
    ...:
0 apple
1 banana
2 cherry
```

### 3.3 指定起始索引

默认情况下，`enumerate` 从 0 开始计数，但你可以通过添加一个可选的 `start` 参数来指定一个不同的起始索引：

```python
fruits = ['apple', 'banana', 'cherry']
for index, fruit in enumerate(fruits, start=1):
    print(index, fruit)
```

这段代码将从 1 开始索引，输出：
```
1 apple
2 banana
3 cherry
```

### 3.4 实用场景

`enumerate` 特别有用于以下几种场景：

- 当你需要对元素进行索引操作时，例如修改原列表或数组。
- 在循环中同时需要索引和元素值，而无需使用 `range(len(sequence))`。
- 使代码更加简洁、可读性更强。

总之，`enumerate` 是 Python 编程中用来增强循环结构的一个非常有用的工具。

## 4. range()

在Python中，`range` 函数是一个非常实用的工具，用于生成一个不可变的数字序列。通常，在循环中用来进行迭代，尤其是在 `for` 循环中。

### 4.1 基本用法

`range` 函数可以有三个参数：`start`, `stop`, `step`。

- `start`: 序列开始的值，默认为 0。
- `stop`: 序列结束的值，不包括这个值。
- `step`: 序列中每个值之间的差（步长），默认为1。

下面是 `range` 函数的一些使用示例：

1. **只有停止参数**:
   ```python
   for i in range(5):
       print(i)
   ```
   这将打印数字从 0 到 4。

2. **起始和停止参数**:
   ```python
   for i in range(2, 6):
       print(i)
   ```
   这将打印数字从 2 到 5。

3. **起始、停止和步长参数**:
   ```python
   for i in range(1, 10, 2):
       print(i)
   ```
   这将打印数字 1, 3, 5, 7, 9。

### 4.2 特性和注意事项

- `range` 生成的是一个惰性序列，这意味着它只在需要时才生成数字。这有助于节约内存。
- `range` 对象不支持任意切片，但你可以转换为列表（如 `list(range(10))`）来获得更多的操作能力。
- 在 Python 3 中，`range` 替代了 Python 2 中的 `xrange`，后者在旧版本中用于生成大的数字序列，因为它更节省内存。

`range` 的这些特性使其在处理循环和其他需要数字序列的场景中非常有用。

## 5. for 循环嵌套

在 Python 中，嵌套的 `for` 循环是指一个 `for` 循环内部包含另一个 `for` 循环。这种结构通常用于处理多维数据结构，比如列表、元组或字典的组合，或者在需要执行多层次的迭代任务时使用。

### 5.1 基本结构

嵌套的 `for` 循环的基本结构如下：

```python
for 变量1 in 可迭代对象1:
    for 变量2 in 可迭代对象2:
        # 执行代码块
```

每个 `for` 循环工作原理如下：
- 外层循环从`可迭代对象1`中取出一个元素赋值给`变量1`。
- 然后，内层循环开始执行，从`可迭代对象2`中逐一取出元素赋值给`变量2`。
- 对于外层循环的每一个单独的迭代，内层循环都会完整地执行一次。

### 5.2 示例：处理二维列表

假设我们有一个二维列表（即列表的列表），我们可以使用嵌套的 `for` 循环来遍历每一个元素。

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for item in row:
        print(item)
```

这段代码首先遍历 `matrix` 中的每一行（外层循环），然后遍历该行中的每个元素（内层循环），并打印出来。

### 5.3 示例：生成乘法表

嵌套循环也常用于生成乘法表等需要行和列计算的场景。

```python
for i in range(1, 10):  # 从1到9
    for j in range(1, 10):  # 同样从1到9
        print(f"{i} * {j} = {i * j}\t", end='')
    print()  # 每完成一行乘法后换行
```

在这个例子中，外层循环和内层循环都使用 `range(1, 10)`，分别代表乘法表的行和列。每内层循环结束后，使用 `print()` 函数来创建一个新行。

接下来，我们再来优化一下上面的九九乘法表。

```python
for i in range(1, 10):  # 从1到9
    for j in range(1, i + 1):  # 同样从1到9
        print(f"{j} * {i} = {i * j}\t", end='')
    print()  # 每完成一行乘法后换行
```

::: detail Code

```python
for i in range(1, 10):
    # 在每行的开头添加足够的制表符，以形成缩进
    print("\t\t\t" * (i - 1), end='')
    for j in range(i, 10):
        print(f"{i} * {j} = {i * j}\t", end='')
    print()  # 每完成一行乘法后换行
```

:::

### 5.4 注意事项

- 嵌套循环可以使代码复杂度增加，尤其是当循环层数增多时。需要注意代码的可读性和性能。
- 在可能的情况下，尽量避免使用太多层的嵌套循环，以免造成代码的运行效率降低。

嵌套循环是编程中常见的一个概念，通过适当使用可以解决很多复杂的问题，但也需要注意其对性能的影响。

## 6. 通过索引遍历序列元素

```python
student_list = ['李雷', '韩梅梅', '马冬梅']
for index in range(len(student_list)):
    print(student_list[index])
```

## 7. break 跳出循环

在 Python 中，`break` 语句用于立即退出当前正在执行的循环，无论循环条件是否仍然为真。使用 `break` 可以提前结束循环，常用于当满足某个条件时不需要继续执行循环体的剩余部分。

```python
for i in range(10):
    print(i)
    if i > 5:
        break  # 循环遇到 break 就会结束
```

想想上面输出的结果是什么？

```python
0
1
2
3
4
5
6
```

下面程序输出什么结果呢？

```python
i = 0
while True:
    print(i)
    i = i + 1
    if i > 5:
        break
```

这段代码展示了一个无限循环（`while True`），它会一直执行，直到遇到 `break` 语句。这里，当变量 `i` 大于 5 时，循环会被中断。循环会打印从 0 到 5 的数字。













































