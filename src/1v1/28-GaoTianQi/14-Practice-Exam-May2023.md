---
title: School of Computing and Information Systems Practice Exam, May 2023
date: 2023-05-30 15:45:00
author: AI悦创
isOriginal: true
category: 
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
tag:
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
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

## Question 1 (20 marks)

Each subquestion is worth 2 marks. To get full marks you must specify both the correct *value* and be clear in your answer that you understand what the *type* will be. If you think an expression is not legal according to the rules of Python, you should write “Error” in the box. If you want to include any blanks in output strings, draw one symbol for each blank character.

(a) `3 * 2 - 11 / 4`

(b) `2 ** 3 * 3 ** 2`

(c) `[1, 3, 4, 6][2: 4] * 2`

(d) `2 * "three"`

(e) `max("minimum")`

(f) `"[1, 3, 8]"[::-1]`

(g) `"chromosome".split("o")`

(h) `set("green") & set("grass")`

(i) `[y>3 for y in range(1, 5)]`

(j) `3 * (True or True and "5")`

## Question 2 (20 marks)

Each subquestion is worth 4 marks. There are two lines provided for each answer, but you should give a *single* Python assignment statement if you can. If your answer requires more than one assignment statement you will be eligible for partial marks.

(a) Suppose that lst is a non-empty Python list. Give a Python assignment statement that assigns True to ends same if the fifirst and last item in lst are the same, and assigns False if not.

> 假设 lst 是一个非空的 Python 列表。给出一个 Python 赋值语句，如果 lst 中的第一个和最后一个项目相同，则将 ends_same 分配为 True，否则分配为 False。

::: details Answer

在Python中，你可以使用索引来访问列表的元素。索引0表示列表的第一个元素，而索引-1表示列表的最后一个元素。所以，你可以通过比较这两个元素来确定列表的第一个元素和最后一个元素是否相同。以下是相应的Python语句：

```python
ends_same = lst[0] == lst[-1]
```

这行代码首先会计算`lst[0] == lst[-1]`的值，这是一个布尔表达式，表示列表的第一个元素和最后一个元素是否相同。如果相同，表达式的值为True，否则为False。然后，这个布尔值被赋值给`ends_same`变量。

:::

(b) Suppose that nums is a non-empty Python list of numbers. Give a Python assignment statement that assigns to averg the average of the numbers in nums.

> 假设 nums 是一个非空的 Python 数字列表。给出一个 Python 赋值语句，将 nums 中数字的平均值分配给 averg。

::: details Answer

在Python中，你可以使用`sum()`函数和`len()`函数来计算一个数字列表的平均值。`sum()`函数可以求列表的和，而`len()`函数可以求列表的长度（即元素的数量）。所以，平均值可以通过列表的和除以元素的数量来计算。以下是相应的Python语句：

```python
averg = sum(nums) / len(nums)
```

这行代码首先计算`sum(nums)`，得到列表`nums`中所有数字的和，然后除以`len(nums)`，得到列表的长度。这样，就得到了这些数字的平均值，然后将这个平均值赋值给`averg`变量。

:::

(c) Suppose that n is a non-negative integer. Give a Python assignment statement that assigns to zzs a list of n strings, where each string is n repetitions of the letter  ’z’.

> 假设 n 是一个非负整数。给出一个 Python 赋值语句，将 zzs 分配为一个由 n 个字符串组成的列表，其中每个字符串是字母“z”的n次重复。

::: details Answer

在Python中，你可以使用字符串的乘法运算符来重复一个字符串。例如，'z' * 3的结果是'zzz'。然后，你可以使用列表推导式创建一个列表，其中每个元素都是n个'z'的重复。以下是相应的Python语句：

```python
zzs = ['z' * n for _ in range(n)]
```

这行代码中，`'z' * n`将生成一个由n个'z'组成的字符串。`for _ in range(n)`将执行这个操作n次，生成一个长度为n的列表。然后这个列表被赋值给`zzs`变量。请注意，我们在这里使用了占位符 `_` ，因为我们不需要在列表推导式中使用这个循环变量。

:::

(d) Suppose that str1 and str2 are Python strings. Give a Python assignment statement that assigns to match len the number of initial characters for which str1 and str2 are the same.

> 假设 str1 和 str2 是 Python 字符串。给出一个 Python 赋值语句，将匹配长度分配为 str1 和 str2 相同的初始字符数。

str1 = "hello" 和 str2 = "heaven"

str1 = "car" 和 str2 = "cat"

str1 = "tree" 和 str2 = "free" 0

(e) Suppose that nums is a list of Python numbers. Give a Python assignment statement that creates a list cum sums the same length as nums that contains the corresponding cumulative sums formed by adding up prefifixes of nums, starting with a prefifix of length one, so that if nums has the value [2, 4, 3, -1], then cum sums will be assigned [2, 6, 9, 8].

> 假设 nums 是一个 Python 数字列表。请给出一个 Python 赋值语句，创建一个与 nums 长度相同的 cum_sums 列表，其中包含通过将 nums 的前缀相加而形成的相应累计和，从长度为1的前缀开始，因此如果 nums 的值为 [2, 4, 3, -1]，则 cum_sums 将被赋值为 [2, 6, 9, 8]。

::: details Answer

题目的要求是：给定一个数字列表`nums`，计算其累积和列表`cum_sums`。"累积和"意味着列表`cum_sums`中的第i个元素是列表`nums`中的前i个元素的总和。例如，如果`nums`是`[2, 4, 3, -1]`，那么`cum_sums`就应该是`[2, 6, 9, 8]`，因为：

- `2`是`nums`的前1个元素的总和
- `2 + 4 = 6`是`nums`的前2个元素的总和
- `2 + 4 + 3 = 9`是`nums`的前3个元素的总和
- `2 + 4 + 3 - 1 = 8`是`nums`的前4个元素的总和

不使用`itertools.accumulate()`的话，可以使用Python列表的`append()`方法来逐一计算每个累积和，然后将其添加到结果列表中。以下是相应的Python语句：

```python
cum_sums = []
for i in range(len(nums)):
    if i == 0:
        cum_sums.append(nums[i])
    else:
        cum_sums.append(cum_sums[i - 1] + nums[i])
```

这段代码首先创建一个空列表`cum_sums`。然后，它遍历`nums`列表的每个元素。对于`nums`的第一个元素，直接将其添加到`cum_sums`列表中。对于`nums`的后续元素，将其与`cum_sums`列表的最后一个元素相加，然后将结果添加到`cum_sums`列表中。这样，当遍历结束时，`cum_sums`列表中的每个元素就是`nums`列表中的前N个元素的总和，满足题目要求。

---

**代码使用列表推导式实现：**

如果你想使用列表推导式来实现这个任务，那么可以将问题分解为两部分：第一部分是生成前i个数字的切片，第二部分是对这些切片求和。下面是如何使用列表推导式来实现这个功能：

```python
cum_sums = [sum(nums[:i+1]) for i in range(len(nums))]
```

这行代码使用了列表推导式，这是一个强大的Python特性，可以用一行代码创建一个新的列表。列表推导式中的`for i in range(len(nums))`部分表示对`nums`列表中的每一个元素都执行一次操作。而`sum(nums[:i+1])`部分则是这个操作的具体内容，它计算了`nums`列表中前`i+1`个元素的和（`nums[:i+1]`是一个切片，包含了`nums`的前`i+1`个元素）。所以，整个列表推导式的结果就是一个新的列表，其中每个元素是`nums`的前N个元素的总和。

:::

## Question 3 (15 marks)

The following function searches a set of lines of text to fifind the ones in which some set of words all arise, with repeat appearances also possibly required.

> 下面的函数搜索一组文本行，以找到其中一些包含某些单词集合的行，可能需要重复出现。

```python
def word_finder(lines, words):                   # 01
    """
    Processes a set of ‘lines‘ to retain only the ones that contain
    each word in a set of ‘words‘ that are given as a query. If a
    word appears multiple times in the query, it must appear at least
    that many times in any retained lines. Word comparisons are
    case-insensitive.
    """
    # first build a dictionary for the query words
    query_d = {w.lower(): 0 for w in words}         # 02
    # XXXXXXXXXX                                    # 03
        query_d[w.lower()] += 1                     # 04
    retained = []                                   # 05

    # then process the input lines one at a time
    for line in lines:                              # 06
        include_line = True                         # 07
        # build a dictionary for this line
        # XXXXXXXXXX                                # 08
        line_d = {w.lower(): 0 for w in line_words} # 09
        for w in line_words:                        # 10
            line_d[w.lower()] += 1                  # 11
        # now check the query word freqs against the line freqs
        for w in query_d:                           # 12
            # XXXXXXXXXX                            # 13
            	# XXXXXXXXXX                        # 14
        # and add to the output lines if passed that test
        if include_line:                            # 15
            # XXXXXXXXXX                            # 16
        # all lines have been considered, we have the ones that match
        return retained                             # 17
```

There are fifive locations in the function where one line of Python code has been replaced by XXXX symbols. The number of X’s should *not* be used as an indication of the length of the text that has been covered up.

In the boxes below, write the Python statement that has been covered up at each of the named locations. Each subquestion is worth 3 marks.

(a) What has been covered up at line 03?



(b) What has been covered up at line 08?



(c) What has been covered up at line 13?



(d) What has been covered up at line 14?



(e) What has been covered up at line 16?

## Question 5

Recall the Matching Game from Assignment 1, which featured a number of colored pieces on a two-dimensional board, with the board represented in Python by a list of lists. Each piece was represented as a string containing a single upper-case character between ’A’ and ’Y’. The character ’Z’ was used to indicate a blank position on the board. For example, a board might have four columns and three rows and look like this:

> 回忆一下作业1中的匹配游戏，它在一个二维棋盘上展示了许多彩色棋子，在Python中，棋盘由一个列表的列表表示。每个片段都被表示为一个字符串，其中包含' a '和' Y '之间的一个大写字符。字符' Z '用来表示棋盘上的空白位置。例如，一个看板可能有4列3行，看起来像这样:

```python
board = [['B', 'G', 'B', 'Y'],
         ['G', 'B', 'Y', 'Y'],
         ['G', 'G', 'Y', 'Z']]
```

In this question you will implement a number of “powerups” – functions that manipulate the board in ways that would not normally be permitted by the rules of the game. You are *not* required to include comments or docstrings in your functions, but may if you wish.

> 在这个问题中，你将执行一些“升级道具”——以游戏规则通常不允许的方式操纵棋盘的功能。你* *不需要* *在你的函数中包含注释或文档字符串，但如果你愿意，可以这样做。

### (a) [6 marks] Write a Python function

> (a) [6 marks]编写一个Python函数

```python
corner_destroyer(board)
```

that takes one parameter: board, a list of lists representing a game board. Your function should manipulate the board such that the pieces in the top-left, top-right, bottom-left and bottom-right positions are replaced by blanks (i.e. character ’Z’).

> 这个函数需要一个形参:board，一个表示游戏棋盘的列表的列表。你的函数应该操作棋盘，使左上角、右上角、左下角和右下角位置的棋子被空白替换(即字符' Z ')。

For example:

```python
>>> board = [['B', 'G', 'B'], ['G', 'B', 'Y'], ['G', 'G', 'Y']]
>>> corner_destroyer(board)
>>> print(board)
>>> [['Z', 'G', 'Z'], ['G', 'B', 'Y'], ['Z', 'G', 'Z']]
```

::: details

记得我们在作业1中的Matching Game吗？它在一个二维的棋盘上有许多颜色的棋子，棋盘在Python中是由一个列表的列表来表示的。每个棋子都是由一个大写字符（介于'A'和'Y'之间）的字符串表示的。字符'Z'用来表示棋盘上的空位置。例如，一个棋盘可能有四列三行，像这样：

```python
board = [['B', 'G', 'B', 'Y'],
         ['G', 'B', 'Y', 'Y'],
         ['G', 'G', 'Y', 'Z']]
```

在这个问题中，你将实现一些“powerups”——能以不受游戏规则限制的方式操控棋盘的函数。你*不需要*在你的函数中包含注释或docstrings，但如果你想的话可以加。

(a) [6分] 编写一个Python函数
```python
corner_destroyer(board)
```
这个函数只有一个参数：board，一个表示游戏棋盘的列表的列表。你的函数应该操控棋盘，使得位于左上角，右上角，左下角和右下角的棋子被空白（即字符'Z'）所取代。

例如：

```python
>>> board = [['B', 'G', 'B'], ['G', 'B', 'Y'], ['G', 'G', 'Y']]
>>> corner_destroyer(board)
>>> print(board)
>>> [['Z', 'G', 'Z'], ['G', 'B', 'Y'], ['Z', 'G', 'Z']]
```

在这个例子中，corner_destroyer函数改变了棋盘上的四个角的棋子，将它们替换为字符'Z'。

根据给定的需求，我们可以通过如下方式实现`corner_destroyer`函数：

```python
def corner_destroyer(board):
    # 修改左上角
    board[0][0] = 'Z'
    # 修改右上角
    board[0][-1] = 'Z'
    # 修改左下角
    board[-1][0] = 'Z'
    # 修改右下角
    board[-1][-1] = 'Z'
```

在这个函数中，我们直接使用Python列表的索引来访问和修改棋盘上四个角的元素。在Python中，索引-1表示最后一个元素，因此我们可以用它来访问每一行的最后一个元素。

:::

### (b) [8 marks] Write a Python function

```python
board_combiner(board1, board2)
```

that takes two parameters: board1 and board2. Both parameters are lists of lists representing game boards and both of those two game boards have the same number of rows and columns. Your function should return a new board which contains the columns from board1 interleaved with the columns from board2. For example, if board1 and board2 contained two columns then:

> 这个函数需要两个参数:board1和board2。这两个参数都是表示游戏棋盘的列表的列表，并且这两个游戏棋盘的行数和列数相同。你的函数应该返回一个新的板，其中包含board1的列和board2的列相互交错。例如，如果board1和board2包含两列，则:

- The fifirst column of the new board is the fifirst column of board1;
- The second column of the new board is the fifirst column of board2; 
- The third column of the new board is the second column of board1;
- The fourth column of the new board is the second column of board2.

For example:

```python
>>> board1 = [['A', 'A'], ['C', 'C']]
>>> board2 = [['B', 'D'], ['B', 'D']]
>>> new_board = board_combiner(board1, board2)
>>> print(new_board)
[['A', 'B', 'A', 'D'], ['C', 'B', 'C', 'D']]
```

::: details

这个问题要求你编写一个名为`board_combiner`的Python函数，它接受两个参数：board1和board2。这两个参数都是表示游戏棋盘的列表的列表，并且这两个棋盘都有相同数量的行和列。

你的函数需要返回一个新的棋盘，它包含了来自board1和board2的交错列。例如，如果board1和board2都包含两列，则新棋盘的列应按照以下顺序排列：

- 新棋盘的第一列是board1的第一列；
- 新棋盘的第二列是board2的第一列；
- 新棋盘的第三列是board1的第二列；
- 新棋盘的第四列是board2的第二列。

:::

```python
def board_combiner(board1, board2):
    # 初始化一个新的棋盘
    new_board = []
    
    # 遍历棋盘的每一行
    for row1, row2 in zip(board1, board2):
        new_row = []
        # 遍历每一行的每个元素，同时获取来自board1和board2的元素
        for cell1, cell2 in zip(row1, row2):
            # 先添加来自board1的元素，再添加来自board2的元素
            new_row.append(cell1)
            new_row.append(cell2)
        # 将新的行添加到新的棋盘中
        new_board.append(new_row)

    # 返回新的棋盘
    return new_board
```















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
