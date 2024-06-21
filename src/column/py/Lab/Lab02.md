---
title: CS-PY101 Lab 2｜Introduction to Data Types
icon: employee-rank
date: 2023-06-27 00:17:29
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - Python Lab
    - CS-PY101 Lab
    - Python 1v1
tag:
    - 1v1
    - Python Lab
    - CS-PY101 Lab
    - Python 1v1
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 6
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

::: center

# Introduction to Data Types

:::

在提前离开实验室前，你必须让实验室助教确认你的情况。如果未经确认就离开，你将无法获得本次实验的学分。

在你做好准备之后，请联系我获取此 Lab 的密码，你需要在 1h 内完成此。

::: warning 注意⚠️

CS-PY101 Lab 系列针对 Python 1v1 私教系列专门制定的练习，但是！也会有部分专门特意“超出已经教学过的知识，此时你需要的做的：思考🤔️、查资料等来解决。

> 目的在于：我所讲解的知识或许很细很让你理解，但终究是有限的，并且技术是会更新，所以最终的目的还是**引导**你学会独立思考和学习。——带你掌握方法，教师是一个淡出的角色。
>
> 对于超出的知识，不用担心，在之后的课程中，会一一解决。

:::

## 1. 概念题

> 此题属于概念性问题，没有明确的答案标准，请您根据你所学的知识进行回答。

1. 描述以下数据类型的主要特点：int、float、bool、list、dict、str、tuple、set。

    > 提示🔔：
    >
    > 1. 给出具体的每种数据类型的特点「有的情况下」
    > 2. 给出创建示例，也就是编写创建示例；
    > 3. 适当的描述，例如：`int：这是一个整数类型，可以是正数、负数或零。`

2. 给定以下语句：
   ```python
   a = 123
   b = '123'
   c = [123]
   ```
   使用 `type()` 函数，你会如何检测变量 `a`、`b` 和 `c` 的数据类型？

3. Python 字符串有哪些主要的特点？请谈谈你对字符串不可变、任意字符、有序性的理解。

4. Python 字典的键有什么特殊要求？所有数据类型都可以作为字典的键吗？请解释。

5. 给定一个字典，如何检查其某个特定的键是否存在？

6. 比较列表和元组在性质和用途上的不同。为什么元组可以作为字典的键，但是列表不能？

7. 描述 Python 的 bool 数据类型，并给出一些将其他数据类型转换为 bool 类型的例子。

8. 解释什么是集合（set）数据类型，它与列表和字典有什么不同？

9. 在 Python 中，什么是可变类型，什么是不可变类型？请提供一些例子。

10. 阐述 Python 中字符串的有序性，尤其是索引从左到右 0 开始，从右到左 -1 开始的特性，这种特性在其他数据类型中也存在吗？如何有效地利用这种特性？

11. 在 Python 中，怎样判断一个变量是浮点数类型（float）？

12. 列举并解释 Python 字符串（str）的三大特性。

13. Python 列表（list）可以包含哪些类型的数据？请举例说明。

14. 描述 Python 中列表（list）的特性，并比较它与字符串（str）的异同。

15. 在 Python 中，元组（tuple）与列表（list）有何相似之处和不同之处？请提供至少两个点。

16. 当存储的数据和数量不变时，为什么选择使用元组（tuple）而不是列表（list）？请给出具体的应用场景。

17. 解释 Python 中字典（dict）的特性，并描述 key 和 value 的性质。

18. 在 Python 中，集合（set）的特性是什么？它与列表（list）和元组（tuple）有何不同？

19. 描述 Python 中各种数据类型之间的转换方法，例如如何将字符串转化为整数或浮点数。



## 2. 选择题

1. 使用 `type()` 函数，以下哪个不是 Python 的数据类型：

   A. int

   B. float

   C. str

   D. arr

2. 以下哪个 Python 数据类型是可变的：

   A. str

   B. list

   C. tuple

   D. int

   E. float

3. 在 Python 中，一个字符串的首个字符的下标是：

   A. 0

   B. 1

   C. -1

   D. 2

   E. -2

4. 在 Python 中，一个字符串的最后一个字符的下标是：

   A. 0

   B. 1

   C. -1

   D. 2

   E. -2

5. Python 中字符串的哪个特性表示，一旦字符串被创建，就不能改变：

   A. 有序性

   B. 不可变性

   C. 任意字符

   D. None of the above

6. Python 列表和字符串都具有哪个特性：

   A. 可变性

   B. 有序性

   C. 不可变性

   D. None of the above

7. Python 中列表和元组的区别是什么：

   A. 列表是可变的，元组是不可变的

   B. 列表是不可变的，元组是可变的

   C. 列表和元组都是可变的

   D. 列表和元组都是不可变的

8. 在以下情况中，哪个更适合使用元组：

   A. 需要频繁修改的数据

   B. 数据需要排序

   C. 存储的数据和数量不变

   D. None of the above

9. 下列哪个数据类型在 Python 中是有序的：

   A. bool

   B. str

   C. int

   D. float

10. Python 中的 list 可以包含哪些类型的元素：

    A. 字符串

    B. 整数

    C. 浮点数

    D. 元组

    E. 所有以上选项

11. （多选）在 Python 中，以下哪个表达式可以用于创建一个空的列表：

    A. `[]`

    B. `list{}`

    C. `list[]`

    D. `list()`

    E. None of the above

12. 在 Python 中，以下哪个表达式可以用于创建一个空的元组：

    A. `()`

    B. `tuple{}`

    C. `tuple[]`

    D. `tuple()`

    E. None of the above

13. Python 中字符串的不可变性意味着什么：

    A. 在代码运行过程中，不能对字符串进行修改、添加、删除等操作

    B. 字符串一旦创建就不能被删除

    C. 字符串的长度可以被改变

    D. 字符串不能包含空格或其他特殊字符

    E. None of the above

14. 在 Python 中，以下哪个表达式可以用于创建一个包含多个元素的元组：

    A. `(1 2 3)`

    B. `tuple(1, 2, 3)`

    C. `(1, 2, 3)`

    D. `1, 2, 3`

    E. None of the above
15. 在 Python 中，列表的哪个特性使得它可以添加、删除和修改元素：

    A. 可变性

    B. 有序性

    C. 不可变性

    D. None of the above
16. 对于一个列表，如 `lst = [1, 2, 3, 4]`，哪个选项可以用来获取最后一个元素：

    A. `lst[-0]`

    B. `lst[4]`

    C. `lst[-1]`

    D. `lst[3]`

    C. None of the above

17. 对于一个元组，如 `tup = (1, 2, 3, 4)`，哪个选项可以用来获取第一个元素：

    A. `tup[0]`

    B. `tup[-0]`

    C. `tup[1]`

    D. `tup[-1]`

    E. None of the above
18. 在 Python 中，元组的哪个特性使得它一旦创建就不能被修改：

    A. 不可变性

    B. 可变性

    C. 有序性

    D. None of the above
19. 在 Python 中，`1.0` 是哪种类型的数据：

    A. int

    B. float

    C. str

    D. list

    E. tuple
20. 在 Python 中，`'Hello World'` 是哪种类型的数据：

    A. int

    B. float

    C. str

    D. list

    E. tuple

21. Python 中 `str` 和 `list` 的主要区别是：

    A. `str` 是有序的，`list` 是无序的

    B. `str` 是无序的，`list` 是有序的

    C. `str` 是不可变的，`list` 是可变的

    D. `str` 是可变的，`list` 是不可变的

22. 在 Python 中，对于一个非空的字符串 `s`，下面哪个表达式不能正确地返回字符串的最后一个字符：

    A. `s[-1]`

    B. `s[len(s)]`

    C. `s[-len(s)]`

23. 在 Python 中，以下哪个表达式不能创建一个有效的列表：

    A. `[1; 2; 3]`

    B. `[1, 2, 3]`

    C. `list((1, 2, 3))`

    D. `[]`

24. 在 Python 中，下面哪个操作不能在列表 `l = [1, 2, 3]` 上执行：

    A. `l[0] = []`

    B. `l.append(4)`

    C. `l.insert(0, 0)`

    D. `l.pop()`

25. 在 Python 中，以下哪个选项不是有效的元组创建方式：

    A. `(1, 2, 3)`

    B. `1, 2, 3`

    C. `()`

    D. `tuple[1, 2, 3]`

26. 在 Python 中，以下哪个操作不能对字符串 `s = 'Hello'` 执行：

    A. `len(s)`

    B. `s.lower()`

    C. `s[0] = 'h'`

    D. `s.replace('H', 'h')`

27. 对于一个列表 `lst = [1, 'a', [2, 'b']]`，如果想要得到 'b'，应该使用哪个表达式：

    A. `lst[1][1]`

    B. `lst[2][1][1]`

    C. `lst[2][1]`

    D. `lst['b']`

28. 如果有一个元组 `tup = (1, 2, [3, 4])`，下面哪个操作是不允许的：

    A. `tup[2] = [5, 6]`

    B. `tup[2][0] = 5`

    C. `tup[2].append(5)`

    D. `tup[2].remove(3)`

29. 在 Python 中，下面哪个操作不能在一个元组 `t = (1, 2, 3)` 上执行：

    A. `t[0]`

    B. `t[0] = 4`

    C. `len(t)`

    D. `t.count(2)`

30. 在 Python 中，以下哪种方式不能将一个字符串转换为整数：

    A. `int('123')`

    B. `float('123')`

    C. `str(123).int()`

    D. `'123'.__int__()`

## 3. 填空题

> （提高）代表难度有所稍微的提高

1. \_\_\_\_ 是 Python 的整数类型，\_\_\_\_ 是 Python 的浮点数类型。

2. `string = "Hello Python"` 在这段代码中，`type(string)`  的结果是 \_\_\_\_。

3. 字符串的三大特性是有序性，\_\_\_\_ 和任意字符。

4. 一个 Python 列表可以存储\_\_\_\_类型的数据。

5. 对于 `lst = ["aiyuechuang", 12]`，`lst[0]` 的结果是 \_\_\_\_，`lst[-1]` 的结果是\_\_\_\_。（提高）

6. 元组的三大特性包括有序性，\_\_\_\_ 和可以包含任意数据类型。

7. 在程序运行期间，一个元组的元素\_\_\_\_。

8. 对于 `d = {"name": "aiyc", "age": 18, 1: "int", 1.1: 1, "tup": (1, 2, 3)}`，`type(d)` 的结果是 \_\_\_\_。

9. 在 Python 字典中，键必须是 \_\_\_\_的数据类型。

10. 集合的一个主要特性是\_\_\_\_。



## 4. 编程题

> （提高）代表难度有所稍微的提高

1. 编写一个程序，创建一个整型变量并输出其类型。
2. 编写一个程序，创建一个浮点型变量并输出其类型。
3. 编写一个程序，创建一个字符串变量并输出其类型。
4. 编写一个程序，输出字符串 "Hello, Python!" 的前五个字符和最后一个字符。（提高）
5. 编写一个程序，创建一个列表，其中包含一个字符串，一个整型，一个浮点型，然后输出列表的第一个元素和最后一个元素。（提高）
6. 编写一个程序，创建一个元组，其中包含三个元素，然后输出元组的第一个元素和最后一个元素。（提高）



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)

::: details

```
出 10到 Python概念题，考察的知识点如下：

1. 数据类型各个关键词：int、float、bool、list、dict、str、tuple、set；
2. 检测数据类型 type；
3. 各种数据类型的特点，比如：字符串不可变、任意字符、有序性（从左到右0开始，从右到左-1开始）其它类型也是如此；
4. 能当作字典 key、value 的条件等；
```

:::
