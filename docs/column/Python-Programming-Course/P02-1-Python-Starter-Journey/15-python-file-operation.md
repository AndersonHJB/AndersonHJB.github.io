---
title: 15-文件基础操作
icon: yongyan
date: 2024-07-04 11:22:29
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true
comment: true

backToTop: true
toc: true
watermark: true
---

## 1. 手动创建 bornforthis.txt

文件内容如下：

```bash
1,2,3,4,5,6,7,8,9,0
0,9,8,7,6,5,4,3,2,1

python,c++,c,java,c#,html,css,javascript,php
社会,公正,民主,法制,文明,友善,和谐
```

**注意**：文件要和代码放在同一个文件夹下。

## 2. 基础的 open() 操作

`open()` 默认是读取模式，后面会系统讲解。

```python
file = open('bornforthis.txt')
```

注意⚠️：文件有打开，就有关闭，在文件操作完成后，都要添加一行 `file.close()`

### 2.1 read()

**用途**：`read(size)` 方法用来从文件中读取指定数量的字符（如果未指定 `size`，则读取整个文件）。

#### 2.1.1 不指定 size

```python
file = open('bornforthis.txt')
content = file.read()
print(content)
file.close()
```

输出：

```bash
1,2,3,4,5,6,7,8,9,0
0,9,8,7,6,5,4,3,2,1

python,c++,c,java,c#,html,css,javascript,php
社会,公正,民主,法制,文明,友善,和谐
```

#### 2.1.2 Windows 报错相关

如果你使用的是 Windows 电脑，在运行时有可能会遇到如下情况：

![情况 1：乱码](https://blog.images.bornforthis.cn/docs-images/sha256/99/99456ff947454f39f4d80db4bd5ca88330bb2e5d47fb0be5432764e984678d4c.png)

情况 2：报错【图片后期补充】【下面的类似报错】

```bash
Traceback (most recent call last):
  File "/Users/huangjiabao/Books/code.py", line 2, in <module>
    file.read()
  File "<frozen codecs>", line 322, in decode
UnicodeDecodeError: 'utf-8' codec can't decode byte 0xce in position 0: invalid continuation byte
```

可以先在 open 函数中添加 `encoding='utf-8'` ，即可实现运行。对于 `encoding='utf-8'`，我们后会具体与你探讨。代码示例如下：

```python
file = open('bornforthis.txt', encoding='utf-8')
content = file.read()
print(content)
file.close()
```

#### 2.1.3 指定 size

```python
file = open('bornforthis.txt')
content = file.read(10)  # 读取 10 个字符
print(content)
file.close()
```

输出：

```bash
1,2,3,4,5,
```

> 可以思考一下，各种字符的提取情况。

### 2.2 read() 优缺点

#### 2.2.1 优点

1. **简单易用：** `read()` 方法使用非常简单，不需要复杂的循环或条件语句。只需调用一次 `read()` 方法，即可将整个文件的内容读取到一个字符串中。~~这种简单性使得它非常适合快速读取小文件或配置文件的内容。~~
2. **便于一次性读取和处理（配置）小文件：** 对于较小的文件（例如只有几 KB 到几十 KB 的文件），使用 `read()` 方法可以快速方便地获取文件的所有内容。然后，可以一次性对这些数据进行处理，而无需担心内存占用问题。
3. **适用于不需要逐行处理的场景：** 如果文件的内容是一个整体而不需要逐行处理（例如 JSON、XML、HTML 文件或任何其他格式化文本），`read()` 方法可以一次性读取整个文件内容并直接传递给解析器或处理函数。
4. **方便字符串操作：** 由于 `read()` 返回的是一个字符串，Python 的字符串方法（如 `split()`、`replace()`、`find()` 等）可以直接用于处理文件内容。这样，在读取文件后可以立即进行字符串操作，而不必担心文件内容的逐行处理或分割。
5. **适合处理整个文档的内容：** 当需要在内存中操作整个文档（例如搜索和替换操作）时，`read()` 方法能够方便地将文件加载为一个单一的字符串对象，便于在内存中进行各种操作。
6. **兼容性好：** `read()` 方法适用于各种文件类型（文本文件、二进制文件等），并且兼容所有 Python 版本。
7. **总结：** `read()` 方法在处理小文件时非常高效和方便，适合快速读取和处理文件的所有内容。当文件内容是一个整体且需要一次性处理时，`read()` 方法显得尤为有用。在使用场景中，了解文件大小和处理需求，可以帮助选择合适的文件读取方法。

#### 2.2.2 缺点

1. **内存消耗大：** `read()` 方法会将整个文件的内容一次性读取到内存中。如果文件非常大，这会占用大量内存，可能导致内存溢出或系统性能下降。在处理大型文件（例如几百 MB 或更大的文件）时，使用 `read()` 是非常不明智的，因为它会导致程序的内存使用量急剧上升，甚至可能崩溃。

    现如今的数据文件量都很大，所以在实际应用中不推荐使用 `read()`。

    辅助例子🌰：「当你电脑打开很大的文件时，有时候需要好一会才能打开，稍微差点的电脑都有可能卡死～电脑卡死之后，只能强制关闭或者无限期的等待⌛️，但你打开的文件的数据有可能就丢失了。」

2. **缺乏对大型文件的处理控制：** 当使用 `read()` 方法时，程序没有机会在读取文件的过程中对数据进行任何处理。整个文件在读取之前必须被完全加载到内存中，这意味着在大文件场景下，无法分批处理文件内容。

3. **无法逐行处理数据：** `read()` 返回整个文件的内容作为一个字符串。如果文件内容是逐行的记录（例如日志文件或 CSV 文件），那么使用 `read()` 读取后需要手动对字符串进行拆分和处理。而使用其他方法（如 `readline()` 或 `for line in file`）可以逐行读取文件，允许在读取的同时进行处理。

4. **不适合流式读取：** `read()` 不是一种流式读取的方法。流式读取指的是在需要的时候读取文件的部分内容，并进行相应的处理，而不是一次性读取整个文件的内容。这对于需要实时处理大数据文件的应用（如数据分析、日志处理）非常重要。

5. **文件结束符（EOF）处理问题：** 使用 `read()` 读取文件后，如果需要继续读取文件或操作文件的指针，需要手动重置文件指针到文件开头或指定位置。否则，再次调用读取方法可能会返回空值或抛出异常。

    举个例子🌰：文件读取一遍之后（下面第 2 行代码），后续代码重复读取文件（下面第 5 行代码）则无法继续读取到文件内容。

    ```python {2,5}
    file = open('bornforthis.txt')
    content = file.read()
    print(f'第一次读取: {content}')
    
    content = file.read()
    print(f'第二次读取: {content}')  # 读取完毕后，文件指针在文件末尾，所以第二次读取不到内容
    file.close()
    
    # ---output---
    第一次读取: 1,2,3,4,5,6,7,8,9,0
    0,9,8,7,6,5,4,3,2,1
    
    Python,C++,c,Java,C#,html,css,javascript,php
    社会,公正,民主,法制,文明,友善,和谐
    第二次读取: 
    ```
    
    思考一下如何解决？解决的方法早已写在问题当中：**读取完毕后，文件指针在文件末尾，所以第二次读取不到内容**。既然是这样的一个问题，那么我们的解决方法也很直白：**想法把指针指向文件的开头**。
    
    有些读者有可能会说：那我直接搜索浏览器找答案不就行了，那么你要怎么问浏览器呢？是否可以表述清楚呢？（两个 read 如何读取成功文件内容？）不论如何提问，只有表述清楚才可以更快的得到想要的解决方案。
    
    而分析之后，就可以搜索：**Python open 如何把指针移到文件开头**。——这样就可以知道如何搜索了，不然我估计你连怎么搜索都不知道！（就算是问 AI 也是如此～）
    
    **解决方法 1**：再次 open 文件
    
    ```python {6-9}
    file = open('bornforthis.txt')
    content = file.read()
    print(f'第一次读取: {content}')
    file.close()
    
    file = open('bornforthis.txt')  # 再一次 open
    content = file.read()
    print(f'第二次读取: {content}')
    file.close()
    
    # ---output---
    第一次读取: 1,2,3,4,5,6,7,8,9,0
    0,9,8,7,6,5,4,3,2,1
    
    Python,C++,c,Java,C#,html,css,javascript,php
    社会,公正,民主,法制,文明,友善,和谐
    第二次读取: 1,2,3,4,5,6,7,8,9,0
    0,9,8,7,6,5,4,3,2,1
    
    Python,C++,c,Java,C#,html,css,javascript,php
    社会,公正,民主,法制,文明,友善,和谐
    ```
    
    **解决方法 2**：使用 seek 控制指针回到文件开头
    
    ```python
    file = open('bornforthis.txt')
    content = file.read()
    print(f"第一次读取: {content}")
    
    file.seek(0)  #  将文件指针移动到文件开头
    
    content = file.read()
    print(f"第二次读取: {content}")  # 第二次读取时，文件指针已经在文件开头，所以会重新读取整个文件
    file.close()
    
    # ---output---
    第一次读取: 1,2,3,4,5,6,7,8,9,0
    0,9,8,7,6,5,4,3,2,1
    
    Python,C++,c,Java,C#,html,css,javascript,php
    社会,公正,民主,法制,文明,友善,和谐
    第二次读取: 1,2,3,4,5,6,7,8,9,0
    0,9,8,7,6,5,4,3,2,1
    
    Python,C++,c,Java,C#,html,css,javascript,php
    社会,公正,民主,法制,文明,友善,和谐
    ```
    

### 2.3 read 的分块读取

既然 read 函数有缺点（一次性读取文件过大，会导致系统崩溃卡死），那么我们就要解决此缺点。

#### 2.3.1 手动分块读取

由前面的内容可知：读取大文件时，直接使用 `read()` 会一次性加载全部内容到内存，容易导致**卡顿、内存占用高**等问题。

**分块读取（chunked reading）** 是解决这一问题的常用方式。

下面是常见的实现方式：

```python
file = open('bornforthis.txt')
content = file.read(10)
print(f"first 10 characters: {content}")

content = file.read(10)
print(f"next 10 characters: {content}")

content = file.read(10)
print(f"next 10 characters: {content}")
file.close()
```

#### 2.3.2 任务：解决大文件读取问题

- **目标**：使用函数+循环的方式实现 read 的分块读取；
- **需求**：给你一个大文件，你要实现一个函数来分块读取文件所有内容。换句话说：实现的函数最后输出的内容是文件的全部内容，但是实际实现则是分块读取！

#### 2.3.3 问题拆解「思路」

要解决上面的任务，首先先把问题进行拆解：

- **拆解 1**：大问题是使用函数进行封装，实现大文件的分块读取；
- **拆解 2**：使用函数之前，要先考虑不使用函数的情况；
    - 因为有无函数不是重点，函数只是为了点复用；
    - 使用函数和不使用函数的核心代码是一致的；
- **拆解 3**：既然要实现分块读取，那么肯定会使用到循环；
- **拆解 4**：在正式实现循环分块读取之前，我们要先实现手动分块代码，探查读取最后一行时的特点，以此找到循环边界；

上面我们进行了拆解，接下来一起来看看具体的问题与思考：

- **问题 1**：手动编写块读取代码，那具体什么时候结束？——主要看内容的长短；
- **思考 1**：先实现不使用循环，分步实现。然后再考虑使用循环实现：重复的部分；
- 对于上面代码中，重复的部分：看见重复的代码：`content = file.read(10)`；
- 再考虑边界问题，循环都需要考虑边界问题，边界是什么意思？——**什么时候停止循环（停止循环的条件）**；
- 读取到最终没有文字内容为止！——下一步的问题：没有文字内容，返回什么？有什么特点？如何探究出此特点？——**空字符串**；

持续编写读取代码，直至文件末尾，后再次观察最后输出结果，无非三种结果：报错、空字符串、正常输出；

具体探究代码：

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/5/19 21:10
# @Author  : AI悦创
# @FileName: file_opt.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
file = open('bornforthis.txt')
content = file.read(10)
print(f"first 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
content = file.read(10)
print(f"next 10 characters: {content}")
file.close()

# ---output---
first 10 characters: 1,2,3,4,5,
next 10 characters: 6,7,8,9,0

next 10 characters: 0,9,8,7,6,
next 10 characters: 5,4,3,2,1

next 10 characters: 
python,c+
next 10 characters: +,c,java,c
next 10 characters: #,html,css
next 10 characters: ,javascrip
next 10 characters: t,php
社会,公
next 10 characters: 正,民主,法制,文明
next 10 characters: ,友善,和谐
next 10 characters: 
next 10 characters: 
```

成功输出结果，我们从输出结果可知：读取到最后没有内容之后，并没有报错。而是正常输出**空字符**，所以边界条件就是：**使用布尔判断读取到的内容是否为空**。

#### 2.3.4 补充：提取文件中的“回车↩︎”

这里需要着重补充的是：换行符。

为了进一步验证、证明上面的结论：最终文件末尾是“**空字符**”，我们需要排除原文件中的“**回车↩︎**”影响。

我们就需要想方法把原文件中的换行可视化输出出来，而不是被 Python 输出时渲染出来。（也就是渲染成换行效果）

换行符在输出时虽然和空字符类似：“**不体现出来**”，并且在布尔运算中，换行符会得到 `True`，空字符会得到 `False`。代码示例如下：

~~并且换行符在布尔运算中，得到的会是 True：~~

```python
# 空的和空行是否一样？——空行是有内容的，空的没有内容；（空行是有：\n）
print(bool("\n"))  # True
print(bool(""))    # False

# 补充
print(bool(" "))  # True
```

接下来的问题就自然而然了：**如何使从文件中读取到的换行，不进行渲染出来呢？**

> 文件当中是会存在回车的，如何把回车读取出来，并输出体现出来。——日期：2025 年 12 月 8 日 MR

创建一个文件 `test.txt` 放入三个回车，我们来想方法把文件中的换行符读取出来。

::: tip 南京理工大学研究生 MR 的想法，看看她的实现有没有改进之处～——日期：2025 年 12 月 8 日 15:03:15

```python
file = open('test.txt.txt', encoding='utf-8')

content = True
while content:
    content = file.read(10)
    if '\n' in content:
        s = r"\n"
        print(content.replace('\n', s))
    else:
        print(content, end='')

file.close()
```

:::

最简化实现代码如下：

```python
f = open("test.txt")
content = f.read()
visible_string = content.replace('\n', '\\n')
print(visible_string)
f.close()

# ---output---
\n\n\n
```

#### 2.3.5 私教学员提问

- **私教学员提问 1：为什么 Python 不提供直接访问文件长度的方法？**

    **答**：因为如果是大文件，功能虽然是获取文件总长度，但是大文件要获取到总长度，“可能”需要读取整个文件，读取整个文件的时间是非常长的；（和直接读取整个大文件，没什么区别）「透过现象看本质」（知道长度，不就可以解决循环次数问题。）

- **私教学员提问 2：我们现在研究的终极目的是什么？**

    **答**：不是为了得到一个具体的长度，哪天真遇到一个大问题，我们也要如此测试吗？——那会麻掉的；

    肯定不是的，我们现在通过小文件，找到规律，自然可以反哺（反射）到大文件上；

    > 也就是大文件，套用小文件的规律。
    >
    > 有时候操作大文件需要很长的时间才能得到结果，并且在等待大文件操作的过程中，是有可能出现错误的，意味着：一出现错误，前面的等待⌛️都白费了。
    >
    > 这也是为什么在大模型、数据处理等相关任务中，我们往往会选择分块处理的根本原因。每个小块训练完成后，组合成一个整体即可。——MR 分享师弟师妹们的模型训练日常心得，日期：2025 年 12 月 8 日 15:19:26

    **核心思想**：问题拆分思想。

    > **大问题**：大文件如何分块读取？
    >
    > **拆解成小问题**：小文件如何分块读？>>> 小文件手动分块，如何读取？>>> 小文件最末尾数据拥有什么特点？>>> 那就手动的编写分块代码进行测试研究，一直分块写到文件末尾。>> 最终得到小文件末尾没有数据的情况结论。>> 复用结论到循环当中。

#### 2.3.6 代码编写与分析

所以，我们最终的分块研究代码如下：

```python
file = open('bornforthis.txt')
# Q1:具体什么时候结束，主要看内容的长短；
# Q2:分步实现，先实现不使用循环，然后再考虑使用循环实现：重复的部分；
# Q3:对于上面代码中，重复的部分：看见重复的代码：content = file.read(10)；
# Q4:再考虑边界问题，循环都需要考虑边界问题，边界是什么意思？——什么停止循环；
# Q5:读取到最终没有文字内容为止！——下一步的问题：没有文字内容，返回什么？有什么特点？如何探究出此特点？——空字符串；
# Q6:持续编写读取代码，直至文件末尾，后再次观察最后输出结果，无非就三种结果：报错、空字符串、正常输出；
content = file.read(10).replace('\n', '\\n')
print(f"first 10 characters: {content}")

content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")

content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")
content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")
content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")
content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")
content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")
content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")
content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")
content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")
content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")
content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")
content = file.read(10).replace('\n', '\\n')
print(f"next 10 characters: {content}")

file.close()
```

**结论和前面所说的一样，读取超过文件内容后，得到的是空字符串。**

#### 2.3.7 分块读取循环实现

while 循环实现：

::: code-tabs

@tab 方法一：变量作为条件

```python
file = open('bornforthis.txt')

content = file.read(10)
while content:
    print(content)
    content = file.read(10).replace('\n', '\\n')

file.close()

# ---output---
1,2,3,4,5,
6,7,8,9,0\n
0,9,8,7,6,
5,4,3,2,1\n
\npython,c+
+,c,java,c
#,html,css
,javascrip
t,php\n社会,公
正,民主,法制,文明
,友善,和谐
```

@tab tab 这么写有什么问题

```python
file = open('bornforthis.txt')

while True:
    content = file.read(10).replace('\n', '\\n')
    print(content)
    if not content:
        break

file.close()

# ---output---（最后会多一个换行，print 会做执行一次）
1,2,3,4,5,
6,7,8,9,0\n
0,9,8,7,6,
5,4,3,2,1\n
\npython,c+
+,c,java,c
#,html,css
,javascrip
t,php\n社会,公
正,民主,法制,文明
,友善,和谐

```

@tab MR 代码，代码不同问题相同

```python
# 先读取内容输出，在下一次循环判断条件，也会多执行一次 print 函数
file = open('bornforthis.txt')

content =' '
while content:
    content = file.read(10)
    print(f'第xx次读取: {content}')
file.close()

# 这个代码这么还存在另一个问题：content 充当条件，写成 content =' '，不便于维护与后期理解。
# 既然最后 content 都会改变，只是做条件。所以最后我们可以把 content 改成：True。更直观，更明确！
```

@tab 方法二：无变量实现

```python
file = open('bornforthis.txt')

while True:
    content = file.read(10).replace('\n', '\\n')
    if not content:
        break
    print(content)

file.close()

# ---output---
1,2,3,4,5,
6,7,8,9,0\n
0,9,8,7,6,
5,4,3,2,1\n
\npython,c+
+,c,java,c
#,html,css
,javascrip
t,php\n社会,公
正,民主,法制,文明
,友善,和谐
```

:::

::: important 为什么不适用 for 循环实现？

通过上面的分析，我们只能知道什么时候应该结束。但不知道实际要执行几次，故而不适合。

:::



### 2.4 使用循环进行读取

使用 open 打开文件后，可以直接使用循环读取。本质上是逐行读取，我们往下阅读看看。

#### 2.4.1 使用 for 读取

```python
file = open('bornforthis.txt')
for content in file:
    print(content)
file.close()
```

- `open('bornforthis.txt')`: 打开一个文本文件。
- `for content in file`: Python 当中的文件操作，“文件对象”是可迭代的，这里会**一行一行读取文件内容**，每次迭代读取一行，内存占用较低，适合处理大文件。

- `print(content)`: 打印每一行内容。

- `file.close()`: 关闭文件。

上面的代码运行后，观察一下输出结果会有什么问题？

```python
1,2,3,4,5,6,7,8,9,0

0,9,8,7,6,5,4,3,2,1



python,c++,c,java,c#,html,css,javascript,php

社会,公正,民主,法制,文明,友善,和谐

```

只想要得到和原文件相同的结构，应该如何解决？用心对比一下原文件，看看有没有什么问题？（训练你自己的观察力！）







——多了一些换行。

「**找到真凶**」那多余的换行是谁导致的呢？只有找到“罪魁祸首”，才能真正的解决！

1. 原文件中原本每行都有换行，但现在多出换行，我们稍加思索可知：print 导致的多余换行！
2. print 默认输出结尾是换行的。

找到问题后，我们该如何处理呢？使用 end 来修改：

```python
```





**问题**：探究本质，上面多余的换行，不处理的话，实际上会影响我们后续的数据处理吗？

会影响阅读或者观察，实际上对原始数据没有任何影响。（不改变文件中的数据）



#### 2.4.2 使用 while 读取

```python
```





### 2.5 readline()

**用途**：`readline()` 方法用来读取文件的一行。

```python
file = open('data.txt')
content = file.readline()
print(content)
file.close()

# ---output---
1,2,3,4,5,6,7,8,9,0
```

可以多次使用 readline 来读取，下一个 readline 会读取文件的下一行内容：

```python
file = open('data.txt')
content = file.readline()  # 第一行
print(content)

content = file.readline()  # 第二行
print(content)

content = file.readline()  # 第三行
print(content)

content = file.readline()  # 第四行
print(content)

content = file.readline()  # 第五行
print(content)
file.close()
```

输出：

```bash
1,2,3,4,5,6,7,8,9,0

0,9,8,7,6,5,4,3,2,1



python,c++,c,java,c#,html,css,javascript,php

社会,公正,民主,法制,文明,友善,和谐

```

我们可以看见上面空行有点多，这是什么原因导致的呢？

1. 首先是文件中，每行数据末尾带有换行；

    ```python
    ```

2. 其次 `print` 函数默认换行；

按如下代码编写，就可以去掉多余的换行：

```python
file = open('data.txt')
content = file.readline()  # 第一行
print(content, end='')

content = file.readline()  # 第二行
print(content, end='')

content = file.readline()  # 第三行
print(content, end='')

content = file.readline()  # 第四行
print(content, end='')

content = file.readline()  # 第五行
print(content, end='')
file.close()
```

输出：

```python
1,2,3,4,5,6,7,8,9,0
0,9,8,7,6,5,4,3,2,1

python,c++,c,java,c#,html,css,javascript,php
社会,公正,民主,法制,文明,友善,和谐
```

#### 2.2.4 readline() 存在的问题

虽然，`readline()` 实现了逐行读取，但还是如果文件行数较多时，按上面编写是比较麻烦的。

此时使用 loop 是个不错的选择。

1. 观察👀读取到最后一行时的特点

```python
file = open('data.txt')
content = file.readline()  # 第一行
print(content, end='')

content = file.readline()  # 第二行
print(content, end='')

content = file.readline()  # 第三行
print(content, end='')

content = file.readline()  # 第四行
print(content, end='')

content = file.readline()  # 第五行
print(content, end='')

# 文件没有六行数据，超过第五行会有什么效果呢？
content = file.readline()  # 第“六”行
print(content, end='')
file.close()
```

输出：

```bash
1,2,3,4,5,6,7,8,9,0
0,9,8,7,6,5,4,3,2,1

python,c++,c,java,c#,html,css,javascript,php
社会,公正,民主,法制,文明,友善,和谐
```

从输出我们可以看出没有任何反应是：空的。

![](https://blog.images.bornforthis.cn/docs-images/sha256/25/25e9c7ca119a93a44387f691f446c6ee078b864098f5a89b00e88e28096ec0e1.png)

2. 编写 loop 实现：

::: code-tabs

@tab 方法一

```python
file = open('data.txt')

while True:
    line = file.readline()
    if not line:
        break
    print(line, end='')
file.close()
```

@tab 方法二

```python
file = open('data.txt')

line = file.readline()
while line:
    print(line, end='')
    line = file.readline()
file.close()
```

:::

上面是 while 实现，那 for 如何实现呢？

```python
file = open('data.txt')

for _ in range(6):
    line = file.readline()
    if not line:
        break
    print(line, end='')
file.close()
```

显然，上面不简洁还需要自己编写循环次数。优化如下：

::: code-tabs

@tab 方法一

```python
# 打开文件
file = open('data.txt')

# 使用for循环逐行读取文件
for line in file:
    # 处理并打印每一行，使用 end 去除行尾的换行符
    print(line, end='')
file.close()
```

@tab 方法二

```python
# 打开文件
file = open('logs.txt')

# 使用for循环逐行读取文件
for line in file:
    # 处理并打印每一行，使用 strip() 去除行尾的换行符
    print(line.strip())
file.close()
```

:::

#### 2.2.5 readline() 的优缺点

##### 2.2.5.1 优点

1. **逐行读取**：`readline()` 每次只读取一行，这对于大文件特别有用。因为它不会一次性将整个文件加载到内存中，而是逐行处理，节省内存空间。

2. **易于控制**：使用 `readline()` 可以更好地控制读取的内容。你可以逐行读取文件，进行必要的处理或检查条件，决定是否继续读取下一行。

3. **便于处理特定格式的数据**：对于逐行格式化的数据文件（如日志文件、CSV文件等），`readline()` 非常方便，可以按行读取并处理每行数据。

4. **简单易用**：`readline()` 的使用方法非常简单，尤其适合初学者。你只需要调用 `file.readline()` 就能读取文件的一行内容。

##### 2.2.5.2 缺点

1. **速度较慢**：与一次性读取整个文件的方法（如 `readlines()` 或 `read()`）相比，`readline()` 的速度可能较慢，尤其是在需要频繁调用的情况下。这是因为每次调用 `readline()` 都会进行一次 I/O 操作。

2. **容易出现无限循环**：如果在读取文件时没有正确处理结束条件（如到达文件末尾），可能会导致无限循环，特别是在文件内容未知或文件较大时。

3. **不适用于所有场景**：对于需要随机访问文件内容或处理非文本文件的情况，`readline()` 并不合适。它主要用于顺序读取文本文件。

4. **需手动处理换行符**：`readline()` 读取的每一行末尾通常包含一个换行符（`\n`），在处理数据时需要手动去除这些换行符，可能会增加额外的代码和复杂性。

总结来说，`readline()` 适用于逐行读取和处理大文件的场景，能够有效节省内存并提供更好的读取控制，但它可能会导致速度较慢并需要额外处理换行符。根据具体应用场景，选择合适的文件读取方法是非常重要的。

#### 2.2.6 readlines()



`readlines()` 是 Python 中用于读取文件内容的一个方法，它会读取文件中的所有行，并将它们作为一个列表返回。每个元素都是文件中的一行，包括换行符（`\n`）。

#### readlines() 优缺点

优点

1. **易于使用**：`readlines()` 方法使用简单，可以快速地将文件的所有内容读取到内存中，这对于小型文件或简单的文本处理任务非常方便。

2. **按行处理**：返回的列表按行分割文件内容，方便逐行处理文件数据。例如，处理 CSV 文件或日志文件时，可以逐行进行解析和处理。

3. **代码简洁**：相比于使用循环逐行读取文件，`readlines()` 使代码更加简洁，因为它只需要一行代码就可以读取所有行。

缺点

1. **高内存消耗**：`readlines()` 会将文件的所有行一次性加载到内存中，如果文件非常大（例如，数百兆或几个 G），会导致内存消耗过大，甚至导致内存溢出。因此，它不适合处理非常大的文件。

2. **不适合大文件**：由于 `readlines()` 会一次性将整个文件读取到内存中，所以在处理大文件时，不仅占用大量内存，还会影响程序的性能和响应时间。

3. **潜在的性能问题**：对于特别大的文件，`readlines()` 的性能可能较差，因为 Python 需要花费额外的时间将文件内容加载到内存中并转换为一个列表。

适用场景

- **适合**：`readlines()` 适合小型文件的处理场景，或者在明确知道文件大小不会影响内存的情况下使用。它适合快速读取文件内容并逐行处理的简单场景。
- **不适合**：对于大型文件或内存敏感的应用，`readlines()` 并不合适。更好的选择是使用 `for` 循环或者 `readline()` 方法逐行读取，或者使用 `file` 对象作为迭代器。







## 3. 读取模式

### 3.1 所有文件读取模式「表」

| 模式  | 英文解释                                                     | 中文翻译                             |
| ----- | ------------------------------------------------------------ | ------------------------------------ |
| `'r'` | open for reading (default)                                   | 以读取方式打开（默认）               |
| `'w'` | open for writing, truncating the file first                  | 以写入方式打开，先清空文件           |
| `'x'` | create a new file and open it for writing                    | 创建一个新文件并以写入方式打开       |
| `'a'` | open for writing, appending to the end of the file if it exists | 以写入方式打开，若文件存在则追加内容 |
| `'b'` | binary mode                                                  | 二进制模式                           |
| `'t'` | text mode (default)                                          | 文本模式（默认）                     |
| `'+'` | open a disk file for updating (reading and writing)          | 打开磁盘文件用于更新（读写）         |

### 3.2 读模式（`r`）

以读取模式打开文件，文件必须存在，否则会抛出 `FileNotFoundError`。

~~**注意**：读取模式 `r` 也是我们在不指定具体操作模式时的默认模式。~~

**提示**：如果未指定具体的操作模式，文件将默认以读取模式 r 打开。

::: code-tabs

@tab 代码一：文件存在并正确读取

```python
file = open('data.txt', mode='r')
content = file.read()
print(content)
file.close()

# ---output---
1,2,3,4,5,6,7,8,9,0
0,9,8,7,6,5,4,3,2,1

python,c++,c,java,c#,html,css,javascript,php
社会,公正,民主,法制,文明,友善,和谐

```

@tab 代码二：不写 `mode='r'`，等价代码一

```python
file = open('data.txt')
content = file.read()
print(content)
file.close()

# ---output---
1,2,3,4,5,6,7,8,9,0
0,9,8,7,6,5,4,3,2,1

python,c++,c,java,c#,html,css,javascript,php
社会,公正,民主,法制,文明,友善,和谐

```

@tab 代码三：文件不存在则报错

```python
file = open('data_st.txt', mode='r')
content = file.read()
print(content)
file.close()

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/70-liu/fopt.py", line 1, in <module>
    file = open('data_st.txt', mode='r')
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
FileNotFoundError: [Errno 2] No such file or directory: 'data_st.txt'
```

:::

### 3.3 写模式（`w`）

- 以写模式打开文件，如果文件不存在，会创建一个新文件；

- 如果文件存在，先清空内容文件内容，然后写入新内容。

#### 3.3.1 文件不存在的情况

1. 把字符串 `string_content = 'Hi! Python write.'` 写入文件 `data_st.txt`

```python
# 待写入文本
string_content = 'Hi! Python write.'

file = open('data_st.txt', mode='w')
file.write(string_content)
file.close()
```

执行上面代码后，会在当前代码的同目录（同路径）下创建文件 `'data_st.txt'` 并写入内容 `Hi! Python write.`

![](https://blog.images.bornforthis.cn/docs-images/sha256/e4/e4fd89a5f2dddc61de96caa3554fb4fe562074310d1f11998945e28120103a47.png)

#### 3.3.2 文件存在的情况

上面已经创建了 `data_st.txt` 文件，并且已经写入：`Hi! Python write.`。

接下来，我们操作文件 `data_st.txt` 并写入新内容。

```python
# 待写入文本
string_content = '来这世上，时间稍纵即逝，我想留下意义！'

file = open('data_st.txt', mode='w')
file.write(string_content)
file.close()
```

上面代码中 “`来这世上，时间稍纵即逝，我想留下意义！`” 会覆盖掉原本文件中 “`Hi! Python write.`”。

![](https://blog.images.bornforthis.cn/docs-images/sha256/0c/0c07567326ca1609e719dd7a49868349f0179a9960c59e78e59af5e2c5ef2e2a.png)

#### 3.3.3 写入多行内容

1. 待写内容

```text
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

2. 代码实现

第一种方法就是一行一行写✍️入文件，代码如下：

```python
file = open('data_st.txt', mode='w')
file.write('我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创')
file.write('浅者见浅，深者见深——黄家宝')
file.write('起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。')
file.write('先实现功能，再去优化，否则一切会很乱。——AI悦创')
file.write('凡是你不能清晰写下来的东西，都是你还没有真正理解的东西')
file.close()
```

上面代码虽然成功写入多行内容，但是存在一些问题。

可以运行后，观察结果：

```text
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

发现，都写成一行了！

![都写成一行了！](https://blog.images.bornforthis.cn/docs-images/sha256/3c/3ce26fcdc5e58794784838022dedcf01c769c567aa8e1bb4320193dcca18c53e.png)

如何解决呢？

- 解决方法一：使用字符串的转义 `\n` 来解决

```python
file = open('data_st.txt', mode='w')
file.write('我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创\n')
file.write('浅者见浅，深者见深——黄家宝\n')
file.write('起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\n')
file.write('先实现功能，再去优化，否则一切会很乱。——AI悦创\n')
file.write('凡是你不能清晰写下来的东西，都是你还没有真正理解的东西\n')
file.close()
```

这样就成功解决并存储：

```text
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
浅者见浅，深者见深——黄家宝
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。
先实现功能，再去优化，否则一切会很乱。——AI悦创
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西

```

- 解决方法二：直接使用三引号把需要写入的内容引号起来

```python
# 待写入文本
string_content = """我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
"""

file = open('data_st.txt', mode='w')
file.write(string_content)
file.close()
```

3. 思考🤔

当你看到**解决方法二**时，有可能会想：一行一行写入没必要编写，也没必要学习。但是需要注意的是：上面多行写入，虽然看起来麻烦，且充满了“不必要”，但是在使用循环写入时，就非常有必要注意写入的内容是否有换行等。（也就是，写入的格式是否符合我们的预期）

> ~~Tips：应该先写一行一行编写，再写解决方法 \n 和三引号。~~

举个例子🌰：把 `content_lst` 内容写入文件

```python
content_lst = ['我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。', '浅者见浅，深者见深', '起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。', '先实现功能，再去优化，否则一切会很乱。', '凡是你不能清晰写下来的东西，都是你还没有真正理解的东西']
```

思考一下，代码如何实现？

你有可能会如下实现：

```python
content_lst = ['我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。', '浅者见浅，深者见深',
               '起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。',
               '先实现功能，再去优化，否则一切会很乱。', '凡是你不能清晰写下来的东西，都是你还没有真正理解的东西']
file = open('data_st.txt', 'w')
for content in content_lst:
    file.write(content)
file.close()
```

上面的代码，看起来貌似没有问题，但是运行后一看存储结果就发现问题了：

```python
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。浅者见浅，深者见深起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

没错，又存储成了一行，该如何解决呢？

```python
content_lst = ['我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。', '浅者见浅，深者见深',
               '起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。',
               '先实现功能，再去优化，否则一切会很乱。', '凡是你不能清晰写下来的东西，都是你还没有真正理解的东西']
file = open('data_st.txt', 'w')
for content in content_lst:
    file.write(content + '\n') # 手动给每一个字符串末尾添加 \n 换行
file.close()
```

运行结果如下：

```text
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。
浅者见浅，深者见深
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。
先实现功能，再去优化，否则一切会很乱。
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西

```

当然，还可以这么写：

```python
content_lst = ['我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。', '浅者见浅，深者见深',
               '起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。',
               '先实现功能，再去优化，否则一切会很乱。', '凡是你不能清晰写下来的东西，都是你还没有真正理解的东西']
file = open('data_st.txt', 'w')
for content in content_lst:
    file.write(content)
    file.write('\n')  # 手动写入 \n 来实现换行
file.close()
```

输出和上面是一样的，这样我们就成功解决了逐行存储需要注意的换行问题。当然“换行”这个问题只是众多问题中的一小个，其它格式都需要我们自己编写代码时，注意和解决的。

::: note

你的数据是不是有可能会以列表或者其它形式而来，会直接是规范的三引号吗？显然不会，除非你自己存储的时候构造了三引号。但是你都构造了三引号，还不如直接写入。（拖脱裤子放屁，多此一举）（当然，有时候我们也需要提前构造好一定格式的字符串，填入字符串后再写入，这样也是允许的）

:::



write 只接受字符串，不接受其它类型！

### 3.4 追加模式（`a`）

以追加模式打开文件，如果文件不存在，会创建一个新文件；如果文件存在，写入的内容将追加到文件末尾。

```python
file = open('data_st.txt', mode='a')
file.write('\n这是追加的新内容。')
file.write('\n文件原有内容将被保留。')
file.close()
```

### 3.5 读写模式（`r+`）

以读写模式打开文件，文件必须存在。可以同时进行读写操作，但不会自动清空文件内容。

```python
file = open('data_st.txt', mode='r+')
content = file.read()
print(f"原有内容：{content}")
file.write('\n这是在文件末尾添加的新内容。')
file.close()
```

### 3.6 写入和读写模式（`w+`）

- 以读写模式打开文件，如果文件不存在，会创建一个新文件；

- 如果文件存在，会清空文件内容。适用于需要重新开始读写的场景。

```python
file = open('data_st.txt', mode='w+')
file.write('这是新的内容，覆盖原有内容。\n')
file.seek(0)  # 将指针移到文件开头
content = file.read()
print(f'当前内容: {content}')
file.close()
```

### 3.7 二进制模式

除了以上文本模式，Python 还支持二进制模式，如果 `rb`、`wb`、`ab`、`rb+`、`wb+` 和 `ab+`。二进制模式主要用于处理非文本，如图片、音频等。



```python
import requests

url = 'https://github.com/AndersonHJB/AndersonHJB.github.io/releases/download/V0.0.1/ride_bike_2024_08_31.1.mp4'

html = requests.get(url)
file = open('test.mp4', 'wb')
file.write(html.content)
file.close()
```



## 4. 文件编码

### 4.1 编码解码不一致导致的问题

1. 写入文件，编码为 `gbk`

```python
file = open('write_file.txt', mode='w', encoding='gbk')
file.write('我在AI悦创学编程')
file.close()
```

我们会得到如下结果：

```python
����AI�ô�ѧ���
```

上面的文本结果我们无法直接阅读，并且看不懂——这种情况我们称之为：乱码。

![](https://blog.images.bornforthis.cn/docs-images/sha256/75/75de332de350dafd49fb3f3eefea220b8700da56b252ff4a3b6dfb181a2757a0.png)

上面是直接使用 Pycharm 查看写入文件的，我们再试一试 Python 读取文件，有没有问题：

```python
file = open('write_file.txt', mode='r')
content = file.read()
print(content)
file.close()
```

我们会得到报错：

```python
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/fileopt/fopt.py", line 2, in <module>
    file.read()
  File "<frozen codecs>", line 322, in decode
UnicodeDecodeError: 'utf-8' codec can't decode byte 0xce in position 0: invalid continuation byte
```

从上面的报错可知：`utf-8` 不能解码文件内容，因为我们的文件写入时使用的编码是 `gbk`。编码和解码不一致会导致报错或者乱码。

**原理详解：**

市面上现在有很多编码，例如：ISO8859、GBK、GBK2312、UTF-8……

那么：

1. 为什么需要编码？

    国民党

2. 不同编码有什么区别？

Python open 默认编码是使用 utf-8，而我们写入使用 gbk，就导致不一致报错。





第一种方法是改变我们 Pycharm 的编码来改正这个显示问题：

![](https://blog.images.bornforthis.cn/docs-images/sha256/ae/ae1d4f67450d6f2d48da41791b545ef170ff01561dbe0e02be051911a81c859a.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/a5/a53071eaaf46c6248942328f19d542c3e76410417a920a3c6ce43b74175c31c1.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/2f/2fad542053bfe94b25e7094a8a927618f153e3d0ba72be61a4df5a1108a424f0.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/88/886df6173c96ec61a57f15e2a4b64c7d9ba8d1bb1002473260912df8a1084f76.png)

上面的操作，仅仅是让 Pycharm 以我们存储文件时的编码来显示正确我们的文本。

我们需要的不仅仅是显示，我们需要代码操作时可以正常读取。

















- 明确：为什么需要一定的编程基础，才更好的使用 ChatGpt 呢？



- 文件大小计算





### 2.4 小试牛刀 1：对文件中数字求和

文件 `numbers.txt` 数据：

```bash
1,2,3,4,5,6,7,8,9,0
0,9,8,7,6,5,4,3,2,1
```

执行如下操作：

- 求上下行相加之和；
- 

1. 求和

```python
1,2,3,4,5,6,7,8,9,0
0,9,8,7,6,5,4,3,2,1
```

2. 求上下数字之和，输出一个列表



思路：

1. 报错：超出索引范围：i or j 超出的列表的大小；
2. 正确思路：
    1. 使用一个 for 循环就可以解决；
    2. 思考一下：两行数据有什么特点；
    3. 两行数据有什么相关性；
    4. len 从数字几开始？





### 2.4 readlines()

**用途**：`readlines()` 方法用来读取整个文件，并将文件的每一行作为一个字符串元素存储在列表中。

```python
file = open('data.txt')

content = file.readlines()
print(content)
```

输出：

```python
['1,2,3,4,5,6,7,8,9,0\n', '0,9,8,7,6,5,4,3,2,1\n', '\n', 'python,c++,c,java,c#,html,css,javascript,php\n', '社会,公正,民主,法制,文明,友善,和谐']
```







## 编程题目：日志文件分析

**题目描述：**

有一个名为 `server.log` 的日志文件，文件中的每一行记录了服务器的访问日志。每一行的格式如下：

```bash
<IP地址> - - [<访问日期>] "GET <URL> HTTP/1.1" <状态码> <返回字节数>
```

示例内容：
```bash
192.168.1.1 - - [28/Aug/2024:10:23:11 +0000] "GET /index.html HTTP/1.1" 200 1043
192.168.1.2 - - [28/Aug/2024:10:24:03 +0000] "GET /about.html HTTP/1.1" 404 0
192.168.1.3 - - [28/Aug/2024:10:25:45 +0000] "GET /contact.html HTTP/1.1" 200 512
192.168.1.1 - - [28/Aug/2024:10:26:50 +0000] "GET /index.html HTTP/1.1" 200 1043
```

请你编写一个 Python 程序，读取 `server.log` 文件，并完成以下任务：

1. **统计每个IP地址的访问次数**，并将结果按访问次数从高到低排序。
2. **统计返回状态码为404的URL及其出现的次数**，并将结果按出现次数从高到低排序。
3. **计算返回状态码为200的总字节数**。

**输入文件：** `server.log`

**输出要求：**

1. 输出每个IP地址的访问次数，格式如下：
   ```
   IP地址 访问次数
   ```
   
2. 输出状态码为404的URL及其出现的次数，格式如下：
   ```
   URL 出现次数
   ```

3. 输出状态码为200的总字节数，格式如下：
   ```
   总字节数: <字节数>
   ```

**示例输出：**

```
192.168.1.1 2
192.168.1.3 1
192.168.1.2 1

/about.html 1

总字节数: 1555
```

**编程要求：**

- 请使用 `readlines()` 方法读取文件内容。
- 你的程序应具有良好的可读性，并包含适当的注释。
- 考虑可能的异常情况，例如文件不存在等。

**提示：**

- 可以使用 Python 的 `collections.Counter` 来统计访问次数。
- 对于每一行，使用字符串的 `split()` 方法提取所需信息。

```python
# ✅ 任务 1：统计每个 IP 地址的访问次数，并按访问次数降序排列
def count_ip_visits(filename):
    # 创建一个空字典，用来记录每个 IP 的访问次数
    ip_counts = {}

    # 打开日志文件，逐行读取
    with open(filename, 'r', encoding='utf-8') as f:
        for line in f:
            parts = line.split()  # 按空格分割日志行
            if len(parts) < 1:
                continue  # 如果行内容不完整，则跳过
            ip = parts[0]  # 第一个字段就是 IP 地址

            # 将该 IP 的访问次数加 1（如果是第一次出现就设置为 1）
            if ip in ip_counts:
                ip_counts[ip] += 1
            else:
                ip_counts[ip] = 1

    # 将字典按访问次数从高到低排序，返回一个列表：[(ip1, 次数1), (ip2, 次数2), ...]
    sorted_ips = sorted(ip_counts.items(), key=lambda x: x[1], reverse=True)

    # 输出每个 IP 和对应的访问次数
    for ip, count in sorted_ips:
        print(f"{ip} {count}")

# 调用函数处理 server-ip.log 文件
print("=== 每个 IP 的访问次数 ===")
count_ip_visits('server-ip.log')



# ✅ 任务 2：统计状态码为 404 的 URL 及其出现次数，并按次数降序排列
def count_404_urls(filename):
    # 创建一个空字典，用来记录返回 404 状态的 URL 和对应次数
    url_counts = {}

    # 打开日志文件并逐行读取
    with open(filename, 'r', encoding='utf-8') as f:
        for line in f:
            # 按双引号分割整行，可以将请求部分提取出来
            parts = line.split('"')
            if len(parts) < 3:
                continue  # 不符合预期格式的行跳过

            try:
                request = parts[1]  # GET /example.html HTTP/1.1
                url = request.split()[1]  # 提取出 URL（第二部分）
                status_code = parts[2].strip().split()[0]  # 取状态码（双引号后的部分）

                # 如果状态码是 404，则计数
                if status_code == '404':
                    if url in url_counts:
                        url_counts[url] += 1
                    else:
                        url_counts[url] = 1

            except IndexError:
                # 如果某一行结构不完整，避免程序崩溃，跳过该行
                continue

    # 将字典按出现次数从高到低排序，返回 [(url1, 次数1), (url2, 次数2), ...]
    sorted_urls = sorted(url_counts.items(), key=lambda x: x[1], reverse=True)

    # 输出每个 URL 和它的 404 出现次数
    for url, count in sorted_urls:
        print(f"{url} {count}")

# 调用函数处理 server-url.log 文件
print("\n=== 状态码为 404 的 URL 统计 ===")
count_404_urls('server-url.log')

```













- 文件打开就要有关闭 `close()`，解释原因和必要性
- 文件的路径讲解
- 讲解 seek()
- 路径讲解
- 编码讲解



















