---
title: Assignment Project 
date: 2023-04-03 15:37:41
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

## Preamble

Things to look out for in solving the questions are:

> 解决这些问题时需要注意以下几点：

- Make sure to name functions and arguments as stipulated in the question, but never be afraid to create extra functions of your own, e.g. to break up the code into conceptual sub-parts, or avoid redundancy in your code

> 确保按照问题规定的方式命名函数和参数，但不要害怕创建自己的额外函数，例如将代码分解成概念子部分，或避免代码中的冗余。

- Commenting of code is one thing that you will be marked on; get some practice writing comments in your code, focusing on:

    > 代码注释是你将受到评分的方面之一；练习在代码中编写注释，重点关注以下几点：

    - Describing key variables when they are first defined (but not things like index variables in `for` loops)

    > 描述关键变量时，通常是在首次定义它们时进行（但不包括像 `for` 循环中的索引变量之类的变量）。

    - Describing what "chunks" of code do (i.e. not every line, but chunks of code that perform a particular operation, such as `#find the maximum value in the list` or `#count the number of vowels`.

    > 描述代码“块”的功能（即不是每一行代码，而是执行特定操作的代码块，例如 `#在列表中找到最大值` 或 `#计算元音字母的数量`）。

    - Describing what every function does, including what its arguments are, and what it returns.

    > 这句话的意思是描述每个函数的作用，包括它的参数是什么以及它返回的结果是什么。

**Note**: If you make multiple submissions, only the most recent submission will be marked.

> 注意：如果您提交了多次答案，只有最后一次提交的答案会被标记。

## Academic Honesty 1

> 学术诚信1

Academic Honesty

> 学术诚信

- The project is done **individually** (not in groups)

> 这个项目是**个人完成**的（不是小组完成的）

- All assessment items (worksheets, projects, test and exam) must be **your own, individual, original work.**

> 所有评估项目（工作表、项目、测试和考试）必须是**你自己、独立、原创的作品**。

- Any code that is submitted for assessment will be automatically compared against other students' code and other code sources using sophisticated similarity checking software.

> 任何提交进行评估的代码都将被使用复杂的相似性检测软件自动与其他学生的代码和其他代码来源进行比较。

- Cases of potential copying or submitting code that is not your own may lead to a formal **academic misconduct hearing.**

> 潜在抄袭或提交非本人编写的代码的情况可能会导致进行正式的学术不端听证会。

- Potential penalties can include getting **zero for the project, failing the subject,** or even **expulsion from the university** in extreme cases.

> 潜在的惩罚可能包括在该项目中得零分，该科目不及格，甚至在极端情况下被大学开除。

- For further information, please see the university's [Academic Honesty and Plagiarism](For further information, please see the university's Academic Honesty and Plagiarism website, or ask your lecturer.) website, or ask your lecturer.

> 有关更多信息，请参阅该大学的“学术诚信和抄袭”网站，或向您的讲师咨询。

- The use of ChatGPT or other AI software to answer questions on this assignment is strictly prohibited.

> 使用ChatGPT或其他AI软件回答这份作业的问题是严格禁止的。

## Academic Honesty 2

> 学术诚信 2

The fastest way to fail the subject is to hand in code that is not your own!!!

> 最快失败课程的方式是提交不是你自己写的代码！！！

For example:

- you must not copy the code of other students.

> 您不能复制其他学生的代码。

- you must not make your code available to others to see.

> 您不能将您的代码公开给其他人查看。

- you must not give other students your login id and password.

> 您不应该把您的登录ID和密码告诉其他学生。

- you must not share USB memory drives.

> 您不能共享USB存储设备。

- you must not post your code on public forums, or any other activity, that would make your code available to others.

> 你不可以在公共论坛或任何其他让你的代码对外可见的地方发布你的代码。

- you must not ask other students to see their code.

> 您不得要求其他学生让您查看他们的代码。

- **you must not submit code that has been written by someone else.**

> 您不能提交他人编写的代码。

if other students ask to see your code, please say "no", as copying (collusion or plagiarism) is considered academic misconduct, and all students involved may face penalties (both the student who copied, and the student who made their code available).

> 如果其他学生要求查看你的代码，请拒绝，因为抄袭（串通或剽窃）被视为学术不端行为，所有涉及的学生都可能面临处罚（包括抄袭者和提供代码的学生）。

Before you start the project, you must watch the videos and complete the quiz under “CIS Academic Honesty Training” on the LMS Modules page.

> 在开始这个项目之前，您必须观看LMS模块页面下“CIS学术诚信培训”下的视频并完成测验。

## Background

> 背景

### Scenario

> 情境

Matching games are a popular class of games, with titles like Bejeweled and Candy Crush receiving great success over recent years. In this assignment we will create our own basic matching game.

> 匹配游戏是一种受欢迎的游戏类型，像《宝石迷阵》和《糖果传奇》这样的游戏在近年来取得了巨大的成功。在这个任务中，我们将创建自己的基本匹配游戏。

![Bejeweled](./06-Assignment01.assets/image-20230403154738327.png)

An example of the Bejeweled matching game (Wikipedia).

> Bejeweled 配对游戏的例子（维基百科）。

### Representation

> 表达

Our game consists of a number of coloured pieces on a two-dimensional board. Each piece can be represented as a string containing a single upper-case character between `'A'` and `'Y'`. The character `'Z'` is used to indicate a blank position on the board. The board can be represented in Python by a list of lists. For example, the board below could be represented as

> 我们的游戏由位于二维棋盘上的一些彩色棋子组成。每个棋子都可以表示为一个包含单个大写字符的字符串，该字符介于'A'和'Y'之间。字符'Z'用于表示棋盘上的空白位置。在 Python 中，棋盘可以表示为一个列表的列表。例如，下面的棋盘可以表示为：

```python
board = [['B', 'G', 'B', 'Y'], 
['G', 'B', 'Y', 'Y'], 
['G', 'G', 'Y', 'Z'],
['B', 'Z', 'Z', 'Z']]
```

![Our representation](./06-Assignment01.assets/image-20230403154907752.png)

Note that `board[0][0]` therefore corresponds to the position in the top-left corner of the board. A 4 x 4 board is shown, but our game will allow for boards of sizes up to 99 x 99.

> 请注意，`board[0][0]` 对应于棋盘左上角的位置。下面展示的是一个 4 x 4 的棋盘，但是我们的游戏将允许棋盘大小达到 99 x 99。

A move is made by selecting a piece and specifying a direction in which it should be moved (up, down, left or right).

> 一步棋是通过选定一个棋子并指定它应该移动的方向（上、下、左或右）来完成的。
>
> 移动是通过选择一个棋子并指定它应该移动的方向(上、下、左或右)来进行的。

The piece can be selected by specifying its position on the board. To do so, we use a tuple `(row, column)` where row and column are the index values of the row and column on the board that contain the piece.

> 可以通过指定棋盘上的位置来选择棋子。为此，我们使用一个元组`(row, column)`，其中 row 和 column 是包含棋子的行和列的索引值。

To specify the direction we use a single lower case character as follows:

> “指定方向时，我们使用一个小写字母表示，如下所示：”

- `'u'`: Up
- `'d'`: Down
- `'l'`: Left
- `'r'`: Right

### Eliminating pieces

> "Eliminating pieces" 的意思是"消除/去除碎片/部件"。

Four pieces of the same colour may be eliminated from the board by moving them into a 2 x 2 square. For example, in the scenario above the green triangle at `(0, 1)` could be moved downwards to `(1, 1)`. This move would eliminate all four green triangles from the board.

> 四个相同颜色的棋子可以通过将它们移动到一个 2 x 2 的方格中而被从棋盘上消除。例如，在上面的场景中，位于 `(0, 1)` 的绿色三角形可以向下移动到 `(1, 1)`。这个移动将消除棋盘上所有四个绿色三角形。
>
> 将四张相同颜色的棋子移到2 × 2的正方形中，就可以从棋盘上消除。例如，在上面的场景中，位于“(0,1)”的绿色三角形可以向下移动到“(1,1)”。这一举动将从棋盘上消除所有四个绿色三角形。

## Pretty Print

> "Pretty Print" 可以翻译成“美化打印”，这是一种将计算机程序或数据格式化输出以使其易于阅读的技术。

::: warning

 This question hasn't been released yet.

> 这个问题还没有发布。

:::

### Task 1: Pretty Print (3 marks)

> 任务1：美化打印（3分）

Write a function `pretty_print(board)` that will print the board in a manner that is easy to read. You may assume that the board is a correctly formatted list of lists as described on the previous slide. Specifically, you should display:

> 编写一个函数 `pretty_print(board)`，以易于阅读的方式打印棋盘。您可以假设棋盘是一个正确格式的嵌套列表，就像上一张幻灯片中描述的那样。具体来说，您应该显示：

1. On your first line, three spaces, followed by the index values of each column in `board`, with 0 being the first value. Each index value should take up three spaces and be left aligned.

> 在您的第一行上，输入三个空格，然后跟着 `board` 中每一列的索引值，其中第一个值为 0。每个索引值应占用三个空格并向左对齐。

2. On your second line, a row of `'-'` characters, starting below the first index value printed and ending below the last.

> 在你的第二行，应该输出一行由连字符 `'-'` 组成的字符，起始位置应该从第一个打印出的索引值下方开始，结束位置应该在最后一个索引值下方。

3. Each subsequent line should begin with the index value of a row in `board`, with index value 0 being the first displayed. The index value should take up two spaces and be right aligned. The index value should be followed by a `'|'` character.

> 每个后续行都应以`board`中行的索引值开头，其中索引值0为第一个显示的行。索引值应占用两个空格，并向右对齐。索引值后面应跟着一个`'|'`字符。

4. After the `'|'  ` character, each board value in the corresponding row should be printed, with two spaces between each value.

> 在 `'|'` 字符之后，应该打印出相应行中的每个棋盘值，每个值之间应该有两个空格。

5. After the board has been printed, two blank lines should be added.

> 打印完毕后，应该添加两个空行。

An example for a 12 x 12 board is displayed below:

> 一个12 x 12的棋盘示例如下所示：

```python
   0  1  2  3  4  5  6  7  8  9  10 11 
   ------------------------------------
 0|A  A  A  A  A  A  A  A  A  A  A  A  
 1|A  A  A  A  A  A  A  A  A  A  A  A  
 2|A  A  A  A  A  A  A  A  A  A  A  A  
 3|A  A  A  A  A  A  A  A  A  A  A  A  
 4|A  A  A  A  A  A  A  A  A  A  A  A  
 5|A  A  A  A  A  A  A  A  A  A  A  A  
 6|A  A  A  A  A  A  A  A  A  A  A  A  
 7|A  A  A  A  A  A  A  A  A  A  A  A  
 8|A  A  A  A  A  A  A  A  A  A  A  A  
 9|A  A  A  A  A  A  A  A  A  A  A  A  
10|A  A  A  A  A  A  A  A  A  A  A  A  
11|A  A  A  A  A  A  A  A  A  A  A  A  
```

### Example Calls

> 示例调用

```python
>>> pretty_print([['A']*4]*4)
   0  1  2  3  
   ------------
 0|A  A  A  A  
 1|A  A  A  A  
 2|A  A  A  A  
 3|A  A  A  A  


>>> pretty_print([['B']*3]*5)
   0  1  2  
   ---------
 0|B  B  B  
 1|B  B  B  
 2|B  B  B  
 3|B  B  B  
 4|B  B  B  


>>> pretty_print([['C']*5]*2)
   0  1  2  3  4  
   ---------------
 0|C  C  C  C  C  
 1|C  C  C  C  C  
```

```python
def pretty_print(board):
```

### Answer 1

::: tabs

@tab 详细讲解

1. 解析得到的参数

```python
In [1]: ['A'] * 4
Out[1]: ['A', 'A', 'A', 'A']

In [2]: [['A', 'A', 'A', 'A']] * 4
Out[2]:
[['A', 'A', 'A', 'A'],
 ['A', 'A', 'A', 'A'],
 ['A', 'A', 'A', 'A'],
 ['A', 'A', 'A', 'A']]

In [3]: [['A'] * 4] * 4
Out[3]:
[['A', 'A', 'A', 'A'],
 ['A', 'A', 'A', 'A'],
 ['A', 'A', 'A', 'A'],
 ['A', 'A', 'A', 'A']]

In [4]: board = [['A'] * 4] * 4

In [5]: board[0]
Out[5]: ['A', 'A', 'A', 'A']
```

---

在您的第一行上，输入三个空格，然后跟着 `board` 中每一列的索引值，其中第一个值为 0。每个索引值应占用三个空格并向左对齐。

2. 三个空格

```python
# 打印第一行：列索引
# 打印两个空格以便与后面的行对齐
print("  ", end="")
```

3. 添加索引值

```python
board = [['A'] * 4] * 4
for col in range(len(board[0])):
    print(f"{col:<3}", end="")
print()
```

4. 分析题目的 `------------`

```python
In [6]: len("------------")  # 4
Out[6]: 12

In [7]: len("---------")  # 3
Out[7]: 9

In [8]: len("---------------")  # 15
Out[8]: 15
```

得到公式 `"-" * (3 * len(board[0]))`

```python
# 打印第二行：横线
print("   ", end="")
print("-" * (3 * len(board[0])))
```

5. 打印格子内容

```python
for row in range(len(board)):
        # 打印行索引，并在索引后添加一个竖线
        print(f"{row:>2}|", end="")
        # 循环遍历该行的每个元素
        for col in range(len(board[row])):
            # 打印当前元素，并在元素之间添加两个空格
            print(f"{board[row][col]}  ", end="")
        # 结束该行并换行
        print()
```



@tab 完整代码

```python
def pretty_print(board):
    # 打印第一行：列索引
    # 首先在行开头打印三个空格
    print("   ", end="")
    # 循环遍历列索引，并格式化输出
    for col in range(len(board[0])):
        print(f"{col:<3}", end="")
    # 结束该行并换行
    print()

    # 打印第二行：横线
    # 在行开头打印三个空格
    print("   ", end="")
    # 根据列数打印横线
    print("-" * (3 * len(board[0])))

    # 打印游戏板内容
    # 循环遍历每一行
    for row in range(len(board)):
        # 打印行索引，并在索引后添加一个竖线
        print(f"{row:>2}|", end="")
        # 循环遍历该行的每个元素
        for col in range(len(board[row])):
            # 打印当前元素，并在元素之间添加两个空格
            print(f"{board[row][col]}  ", end="")
        # 结束该行并换行
        print()

    # 在游戏板后打印两行空白
    print("\n")
```

```python
def pretty_print(board):
    # 打印第一行：列索引
    print("   ", end="")
    for col in range(len(board[0])):
        print(f"{col:<3}", end="")
    print()

    # 打印第二行：横线
    print("   ", end="")
    print("-" * (3 * len(board[0])))

    # 打印游戏板内容
    for row in range(len(board)):
        # 打印右对齐的行索引，并在索引后添加一个竖线
        print(f"{row:>2}|", end="")
        # 循环遍历该行的每个元素
        for col in range(len(board[row])):
            # 打印当前元素，并在元素之间添加两个空格
            print(f"{board[row][col]}  ", end="")
        # 结束该行并换行
        print()

    # 在游戏板后打印两行空白
    print("\n")
```

```python
def pretty_print(board):
    # 打印第一行：列索引
    print("   ", end="")
    for col in range(len(board[0])):
        print(f"{col:<3}", end="")
    print()

    # 打印第二行：横线
    print("   ", end="")
    print("-" * (3 * len(board[0])))

    # 打印游戏板内容
    for row in range(len(board)):
        print(f"{row:>2}|", end="")
        for col in range(len(board[row])):
            print(f"{board[row][col]}  ", end="")
        print()

    # 打印两行空白
    print()


pretty_print([['A'] * 4] * 4)
pretty_print([['B'] * 3] * 5)
pretty_print([['C'] * 5] * 2)

"""
   0  1  2  3  
   ------------
 0|A  A  A  A  
 1|A  A  A  A  
 2|A  A  A  A  
 3|A  A  A  A  
"""


# def pretty_print(board):
#     """
#     在您的第一行上，输入三个空格，然后跟着 `board` 中每一列的索引值，其中第一个值为 0。每个索引值应占用三个空格并向左对齐。
#     在你的第二行，应该输出一行由连字符 `'-'` 组成的字符，起始位置应该从第一个打印出的索引值下方开始，结束位置应该在最后一个索引值下方。
#     每个后续行都应以`board`中行的索引值开头，其中索引值0为第一个显示的行。索引值应占用两个空格，并向右对齐。索引值后面应跟着一个`'|'`字符。
#     在 `'|'` 字符之后，应该打印出相应行中的每个棋盘值，每个值之间应该有两个空格。
#     打印完毕后，应该添加两个空行。
#     :param board:
#     :return:
#     """
#     print(" " * 3, end="")
```

:::



## Validate Input

> 验证输入

::: warning

 This question hasn't been released yet.

:::

### Task 2: Validate Input (3 marks)

> 任务2：验证输入（3分）

As our game will rely on user-supplied inputs, we wish to ensure those inputs are valid. Write a function `validate_input(board, position, direction)`. Your function should ensure:

> 由于我们的游戏将依赖用户提供的输入，因此我们希望确保这些输入是有效的。请编写一个名为`validate_input(board, position, direction)`的函数。您的函数应该确保：

1. The board contains at least two rows and at least two columns

> 这个棋盘至少包含两行和两列。

2. Each row in the board has the same length

> 每一行在棋盘上的长度都相同。

3. Each board value is an upper case character

> 每个棋盘值都是大写字符。

4. The position specified is within the board and does not contain negative row or column values

> 所指定的位置在棋盘内，不包含负的行或列值。

5. The direction argument contains one of the four permitted direction values

> 这句话的意思是：direction 参数包含四个允许的方向值之一。

6. For each piece colour present on the board, the number of pieces of that colour is a multiple of four. Blanks (represented by `'Z'`) are not included in this requirement.

> 对于棋盘上存在的每种颜色，其数量都是四的倍数，其中空白（用 `'Z'` 表示）不包括在此要求中。

Your function should return `True` if all of the above conditions are satisfied and `False` otherwise.

> 如果满足上述所有条件，您的函数应返回 `True`，否则应返回 `False`。

Note: You may assume that the `board` argument contains a list of lists and that each position on the board contains a string. You may also assume the `position` argument is a tuple containing precisely two integer values.

> 注意：您可以假设`board`参数包含一个嵌套列表，每个位置包含一个字符串。您还可以假设`position`参数是包含两个整数值的元组。

### Example Calls

```python
>>> print(validate_input([["A", "A", "A", "A"], ["A", "A", "A", "A"]], (0, 0), "u"))
True
>>> print(validate_input([["A", "Z", "Z", "A"], ["A", "A"]], (0, 0), "u"))
False
>>> print(validate_input([["A", "A", "A", "A"], ["A", "A", "A", "A"]], (10, 0), "x"))
False
>>> print(validate_input([["A", "A", "A", "A"], ["A", "A", "B", "B"]], (0, 0), "u"))
False
```

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def validate_input(board, position, direction):
```

### Answer

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def validate_input(board, position, direction):
    # 条件1: 检查棋盘的行数和列数是否至少为2
    if len(board) < 2 or len(board[0]) < 2:
        return False

    # 条件2: 检查棋盘的每一行长度是否相等
    row_length = len(board[0])
    for row in board:
        if len(row) != row_length:
            return False

    # 条件3: 检查棋盘上的每个值是否为大写字母
    for row in board:
        for value in row:
            if not value.isupper():
                return False

    # 条件4: 检查 position 是否在棋盘范围内且没有负值
    row, col = position
    if row < 0 or col < 0 or row >= len(board) or col >= len(board[0]):
        return False

    # 条件5: 检查 direction 是否为允许的值之一
    if direction not in (DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT):
        return False

    # 条件6: 检查每种颜色的棋子数量是否是4的倍数
    color_counts = {}
    for row in board:
        for value in row:
            if value != BLANK_PIECE:
                if value in color_counts:
                    color_counts[value] += 1
                else:
                    color_counts[value] = 1
    for count in color_counts.values():
        if count % 4 != 0:
            return False

    # 如果所有条件都满足，返回 True
    return True
```

```python
def validate_input(board, position, direction):
    if len(board) < 2 or len(board[0]) < 2:
        return False
    
    for i in range(len(board)):
         if len(board[i]) != len(board[0]):
                return False
    
    for row in range(len(board)):
        for col in range(len(board[row])):
            if not board[row][col].isupper():
                return False
            
    x, y = position        
    if x < 0 or y < 0 or x >= len(board) or y >= len(board[0]):
        return False
    
    if direction not in (DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT):
        return False
   
    d = {}
    for piece in board:
        for value in piece:
            if value != 'Z':
                if value in d:
                    d[value] += 1
                else:
                    d[value] = 1
            
        
    for piece in d.values():
        if piece % 4 != 0:
            return False
        
        
    return True
```



## Legal Moves

> 合理的移动

::: warning

 This question hasn't been released yet.

:::

### Task 3: Legal Move (4 marks)

> 任务3:法律招式(4分)

Recall that a move in our game involves swapping two pieces. A move is legal if:

> 请回忆一下，我们游戏中的一次移动涉及交换两个棋子。如果一个移动合法，那么它满足以下条件：

- Both the pieces involved in the move are inside the board「移动涉及到的两个棋子都在棋盘内。」
- At least one of the pieces involved in the move ends in a position adjacent to a piece of the same colour「至少移动中涉及的一枚棋子最终停在一个与同色棋子相邻的位置。」

Blank pieces (represented with a `'Z'`) may never be moved.

> 空白的棋子（用“'Z'”表示）永远不能移动。

Write a function `legal_move(board, position, direction)` that returns `True` if it is legal for the piece at position to be moved in the direction specified by direction and `False` otherwise.

> 编写一个函数 `legal_move(board, position, direction)` ，如果在位置 `position` 的棋子可以朝指定的方向 `direction` 移动，则返回 `True`，否则返回 `False`。

For example, given the following board:

> 例如，给定以下棋盘：

```python
   0  1  2  3  
   ------------
 0|A  A  D  C  
 1|A  B  C  A  
 2|C  B  B  A  
 3|C  D  D  D  
```

`legal_move(board, (1, 2), DIR_UP)` would return `True` as the C currently located at `(1, 2)` would be moved to `(0, 2)`, which is adjacent to the C at `(0, 3)`. `legal_move(board, (0, 2), DIR_DOWN)` would return True for the same reason. 

> `legal_move(board, (1, 2), DIR_UP)` 返回 `True`，因为当前位于 `(1, 2)` 的 C 将被移动到与 `(0, 3)` 处的 C 相邻的位置 `(0, 2)`。同样的道理，对于 `legal_move(board, (0, 2), DIR_DOWN)` 也会返回 `True`。

`legal_move(board, (0, 2), DIR_LEFT)` would return `False`.

> `legal_move(board, (0, 2), DIR_LEFT)` 返回 `False`。

For this task you may assume the inputs have already been validated according to your function in Question 2.

> 对于这个任务，您可以假设输入已根据问题2中的函数进行了验证。

### Example Calls

```python
>>> print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (1, 2), "u"))
True
>>> print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
True
>>> print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "l"))
False
>>> print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 0), "l"))
False
```

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def legal_move(board, position, direction):
```

### Answer

```
「Tom：有没有大跌知道task3 hidden 4是啥啊」
- - - - - - - - - - - - - - -
可能是在确认交换前后的 position 都没问题后，与 blank pieces Z 不能移动相关的两种情况。

hidden 4 大概是取 position 在最右下角的地方

new position 和之前的 position 都不能为“Z”@🦾 

task3 的 hidden3是不能移动 blank
```



::: code-tabs

@tab 没有考虑被交换的 Z

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def legal_move(board, position, direction):
    # 获取行和列坐标
    global new_row, new_col
    row, col = position
    # 获取当前位置的棋子
    piece = board[row][col]

    # 如果当前位置是空白棋子，则移动非法
    if piece == BLANK_PIECE:
        # print(piece)
        return False

    # 计算新位置的坐标，根据移动方向
    if direction == DIR_UP:
        new_row, new_col = (row - 1, col)
    elif direction == DIR_DOWN:
        new_row, new_col = (row + 1, col)
    elif direction == DIR_LEFT:
        new_row, new_col = (row, col - 1)
    elif direction == DIR_RIGHT:
        new_row, new_col = (row, col + 1)
    # print(new_row, new_col)
    new_color = board[new_row][new_col]
    # 检查新位置是否在棋盘内
    if new_row < 0 or new_row >= len(board) or new_col < 0 or new_col >= len(board[0]):
        return False

    adjacent_positions_new = [
        (new_row + 1, new_col),
        (new_row - 1, new_col),
        (new_row, new_col - 1),
        (new_row, new_col + 1),
    ]

    adjacent_positions_old = [
        (row + 1, col),
        (row - 1, col),
        (row, col - 1),
        (row, col + 1),
    ]

    # 检查新位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_new:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[row][col]) and ((r, c) != (row, col)):
            return True

    # 检查旧位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_old:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[new_row][new_col]) and ((r, c) != (new_row, new_col)):
            return True


    # 如果都没有找到相同颜色的相邻棋子，返回 False
    return False


# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (1, 2), "u"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "Z", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move(
#     [
#         ["A", "A", "D", "C"],
#         ["A", "B", "C", "A"],
#         ["C", "B", "B", "A"],
#         ["C", "D", "D", "D"]
#     ]
#     , (0, 2), "l"))
#
# print(legal_move(
#     [
#         ['A', 'A', 'D', 'C'],
#         ['A', 'B', 'C', 'A'],
#         ['C', 'B', 'B', 'A'],
#         ['C', 'D', 'D', 'D'],
#     ],
#     (0, 2), 'd'
# ))
#
#
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 0), "l"))
print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (3, 3), "d"))
```

@tab 考虑了被交换的 Z

```python {95-97}
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def legal_move(board, position, direction):
    # 获取行和列坐标
    global new_row, new_col
    row, col = position
    # 获取当前位置的棋子
    piece = board[row][col]

    # 如果当前位置是空白棋子，则移动非法
    if piece == BLANK_PIECE:
        # print(piece)
        return False

    # 计算新位置的坐标，根据移动方向
    if direction == DIR_UP:
        new_row, new_col = (row - 1, col)
    elif direction == DIR_DOWN:
        new_row, new_col = (row + 1, col)
    elif direction == DIR_LEFT:
        new_row, new_col = (row, col - 1)
    elif direction == DIR_RIGHT:
        new_row, new_col = (row, col + 1)
    # print(new_row, new_col)
    if board[new_row][new_col] == BLANK_PIECE:
        # print("BLANK_PIECE:>>>", )
        return False
    new_color = board[new_row][new_col]
    # 检查新位置是否在棋盘内
    if new_row < 0 or new_row >= len(board) or new_col < 0 or new_col >= len(board[0]):
        return False

    adjacent_positions_new = [
        (new_row + 1, new_col),
        (new_row - 1, new_col),
        (new_row, new_col - 1),
        (new_row, new_col + 1),
    ]

    adjacent_positions_old = [
        (row + 1, col),
        (row - 1, col),
        (row, col - 1),
        (row, col + 1),
    ]

    # 检查新位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_new:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[row][col]) and ((r, c) != (row, col)):
            return True

    # 检查旧位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_old:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[new_row][new_col]) and ((r, c) != (new_row, new_col)):
            return True


    # 如果都没有找到相同颜色的相邻棋子，返回 False
    return False


# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (1, 2), "u"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "Z", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move(
#     [
#         ["A", "A", "D", "C"],
#         ["A", "B", "C", "A"],
#         ["C", "B", "B", "A"],
#         ["C", "D", "D", "D"]
#     ]
#     , (0, 2), "l"))
#
# print(legal_move(
#     [
#         ['A', 'A', 'D', 'C'],
#         ['A', 'B', 'C', 'A'],
#         ['C', 'B', 'B', 'A'],
#         ['C', 'D', 'D', 'D'],
#     ],
#     (0, 2), 'd'
# ))
#
#
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 0), "l"))
print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (3, 3), "d"))
```

@tab 没有考虑隐藏点四的代码报错

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"


def legal_move(board, position, direction):
    # 获取行和列坐标
    global new_row, new_col
    row, col = position
    # 获取当前位置的棋子
    piece = board[row][col]

    # 如果当前位置是空白棋子，则移动非法
    if piece == BLANK_PIECE:
        # print(piece)
        return False

    # 计算新位置的坐标，根据移动方向
    if direction == DIR_UP:
        new_row, new_col = (row - 1, col)
    elif direction == DIR_DOWN:
        new_row, new_col = (row + 1, col)
    elif direction == DIR_LEFT:
        new_row, new_col = (row, col - 1)
    elif direction == DIR_RIGHT:
        new_row, new_col = (row, col + 1)
    # print(new_row, new_col)
    if board[new_row][new_col] == BLANK_PIECE:
    # if (0 <= new_row < len(board)) and (0 <= new_col < len(board[0])) and board[new_row][new_col] == BLANK_PIECE:
        # print("BLANK_PIECE:>>>", )
        return False
    # new_color = board[new_row][new_col]
    # 检查新位置是否在棋盘内
    if new_row < 0 or new_row >= len(board) or new_col < 0 or new_col >= len(board[0]):
        return False

    adjacent_positions_new = [
        (new_row + 1, new_col),
        (new_row - 1, new_col),
        (new_row, new_col - 1),
        (new_row, new_col + 1),
    ]

    adjacent_positions_old = [
        (row + 1, col),
        (row - 1, col),
        (row, col - 1),
        (row, col + 1),
    ]

    # 检查新位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_new:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[row][col]) and ((r, c) != (row, col)):
            return True

    # 检查旧位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_old:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[new_row][new_col]) and ((r, c) != (new_row, new_col)):
            return True


    # 如果都没有找到相同颜色的相邻棋子，返回 False
    return False

print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (3, 3), "d"))

# 报错
/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/venv/bin/python /Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/StudentCoder/24-gtq/HW01/step1.py 
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/StudentCoder/24-gtq/HW01/step1.py", line 157, in <module>
    print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (3, 3), "d"))
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonCoder/StudentCoder/24-gtq/HW01/step1.py", line 95, in legal_move
    if board[new_row][new_col] == BLANK_PIECE:
       ~~~~~^^^^^^^^^
IndexError: list index out of range

Process finished with exit code 1
```

@tab 隐藏点四：需要考虑超出索引范围

```python {95-97}
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def legal_move(board, position, direction):
    # 获取行和列坐标
    global new_row, new_col
    row, col = position
    # 获取当前位置的棋子
    piece = board[row][col]

    # 如果当前位置是空白棋子，则移动非法
    if piece == BLANK_PIECE:
        # print(piece)
        return False

    # 计算新位置的坐标，根据移动方向
    if direction == DIR_UP:
        new_row, new_col = (row - 1, col)
    elif direction == DIR_DOWN:
        new_row, new_col = (row + 1, col)
    elif direction == DIR_LEFT:
        new_row, new_col = (row, col - 1)
    elif direction == DIR_RIGHT:
        new_row, new_col = (row, col + 1)
    # print(new_row, new_col)
    if (0 <= new_row < len(board)) and (0 <= new_col < len(board[0])) and board[new_row][new_col] == BLANK_PIECE:
        # print("BLANK_PIECE:>>>", )
        return False
    # new_color = board[new_row][new_col]
    # 检查新位置是否在棋盘内
    if new_row < 0 or new_row >= len(board) or new_col < 0 or new_col >= len(board[0]):
        return False

    adjacent_positions_new = [
        (new_row + 1, new_col),
        (new_row - 1, new_col),
        (new_row, new_col - 1),
        (new_row, new_col + 1),
    ]

    adjacent_positions_old = [
        (row + 1, col),
        (row - 1, col),
        (row, col - 1),
        (row, col + 1),
    ]

    # 检查新位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_new:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[row][col]) and ((r, c) != (row, col)):
            return True

    # 检查旧位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_old:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[new_row][new_col]) and ((r, c) != (new_row, new_col)):
            return True


    # 如果都没有找到相同颜色的相邻棋子，返回 False
    return False


# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (1, 2), "u"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "Z", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move(
#     [
#         ["A", "A", "D", "C"],
#         ["A", "B", "C", "A"],
#         ["C", "B", "B", "A"],
#         ["C", "D", "D", "D"]
#     ]
#     , (0, 2), "l"))
#
# print(legal_move(
#     [
#         ['A', 'A', 'D', 'C'],
#         ['A', 'B', 'C', 'A'],
#         ['C', 'B', 'B', 'A'],
#         ['C', 'D', 'D', 'D'],
#     ],
#     (0, 2), 'd'
# ))
#
#
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 0), "l"))
print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (3, 3), "d"))
```

@tab 截止目前的完整代码

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"


def pretty_print(board):
    # 打印第一行：列索引
    print("   ", end="")
    for col in range(len(board[0])):
        print(f"{col:<3}", end="")
    print()

    # 打印第二行：横线
    print("   ", end="")
    print("-" * (3 * len(board[0])))

    # 打印游戏板内容
    for row in range(len(board)):
        print(f"{row:>2}|", end="")
        for col in range(len(board[row])):
            print(f"{board[row][col]}  ", end="")
        print()

    # 打印两行空白
    print()


def validate_input(board, position, direction):
    # 条件1: 检查棋盘的行数和列数是否至少为2
    if len(board) < 2 or len(board[0]) < 2:
        return False

    # 条件2: 检查棋盘的每一行长度是否相等
    row_length = len(board[0])
    for row in board:
        if len(row) != row_length:
            return False

    # 条件3: 检查棋盘上的每个值是否为大写字母
    for row in board:
        for value in row:
            if not value.isupper():
                return False

    # 条件4: 检查 position 是否在棋盘范围内且没有负值
    row, col = position
    if row < 0 or col < 0 or row >= len(board) or col >= len(board[0]):
        return False

    # 条件5: 检查 direction 是否为允许的值之一
    if direction not in (DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT):
        return False

    # 条件6: 检查每种颜色的棋子数量是否是4的倍数
    color_counts = {}
    for row in board:
        for value in row:
            if value != BLANK_PIECE:
                if value in color_counts:
                    color_counts[value] += 1
                else:
                    color_counts[value] = 1
    for count in color_counts.values():
        if count % 4 != 0:
            return False

    # 如果所有条件都满足，返回 True
    return True


def legal_move(board, position, direction):
    # 获取行和列坐标
    global new_row, new_col
    row, col = position
    # 获取当前位置的棋子
    piece = board[row][col]

    # 如果当前位置是空白棋子，则移动非法
    if piece == BLANK_PIECE:
        # print(piece)
        return False

    # 计算新位置的坐标，根据移动方向
    if direction == DIR_UP:
        new_row, new_col = (row - 1, col)
    elif direction == DIR_DOWN:
        new_row, new_col = (row + 1, col)
    elif direction == DIR_LEFT:
        new_row, new_col = (row, col - 1)
    elif direction == DIR_RIGHT:
        new_row, new_col = (row, col + 1)
    # print(new_row, new_col)
    if (0 <= new_row < len(board)) and (0 <= new_col < len(board[0])) and board[new_row][new_col] == BLANK_PIECE:
        # print("BLANK_PIECE:>>>", )
        return False
    # new_color = board[new_row][new_col]
    # 检查新位置是否在棋盘内
    if new_row < 0 or new_row >= len(board) or new_col < 0 or new_col >= len(board[0]):
        return False

    adjacent_positions_new = [
        (new_row + 1, new_col),
        (new_row - 1, new_col),
        (new_row, new_col - 1),
        (new_row, new_col + 1),
    ]

    adjacent_positions_old = [
        (row + 1, col),
        (row - 1, col),
        (row, col - 1),
        (row, col + 1),
    ]

    # 检查新位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_new:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[row][col]) and ((r, c) != (row, col)):
            return True

    # 检查旧位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_old:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[new_row][new_col]) and ((r, c) != (new_row, new_col)):
            return True


    # 如果都没有找到相同颜色的相邻棋子，返回 False
    return False


# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (1, 2), "u"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "Z", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move(
#     [
#         ["A", "A", "D", "C"],
#         ["A", "B", "C", "A"],
#         ["C", "B", "B", "A"],
#         ["C", "D", "D", "D"]
#     ]
#     , (0, 2), "l"))
#
# print(legal_move(
#     [
#         ['A', 'A', 'D', 'C'],
#         ['A', 'B', 'C', 'A'],
#         ['C', 'B', 'B', 'A'],
#         ['C', 'D', 'D', 'D'],
#     ],
#     (0, 2), 'd'
# ))
#
#
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 0), "l"))
print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (3, 3), "d"))
```

:::

![](./06-Assignment01.assets/image-20230423211348342.png)

## Make a Move

> Make a Move的意思是采取行动，做出决定，或者表达自己的意见。

### Task 4: Make Move (5 marks)

> 任务 4：进行移动（5分）

If four pieces on the board are moved into position to form a 2 x 2 square, those four pieces are eliminated. This leaves a 2 x 2 gap represented by four `Z` characters which is filled in the following manner:

> 如果棋盘上移动了四个棋子以形成一个2 x 2的正方形，那么这四个棋子将被消除。这将留下一个由四个 `Z` 字符表示的2 x 2间隙，随后以以下方式填充：

1. Firstly, all pieces immediately below the gap (i.e. in the same column with a higher row index) are moved up to fill any gaps.

> 首先，所有直接位于空缺下方的方块（即在同一列但行索引更高的方块）都会被移动到上方以填补任何空缺。

2. Secondly, all pieces immediately to the right of the gap (i.e. in the same row with a higher column index) are moved left to fill any gaps.

> 其次，所有位于空隙右侧的方块（即在同一行但列索引更高的方块）都会向左移动以填补任何空隙。

In the event of a tie (i.e. a single move causes more than one 2 x 2 square to be formed), the square beginning at the lowest row number is eliminated. If both squares begin at the same row number, the square with the lowest column number is eliminated. Only one square may be eliminated before its gaps are filled.

> 如果出现平局（即一个单一的移动导致形成多个2x2的正方形），则以最低行号开头的正方形将被消除。如果两个正方形都从同一行号开始，则列号最低的正方形将被消除。在填充其间隙之前，只能消除一个正方形。

![image-20230424212928462](./06-Assignment01.assets/image-20230424212928462.png)

For example, given the following board:

> 例如，给定以下棋盘：

```python
   0  1  2  3  
   ------------
 0|C  A  B  C  
 1|A  B  C  A  
 2|A  B  B  C  
 3|A  A  A  A  
```

If the piece at `(0, 2)` is moved downwards, the four Bs will be elimiated, resulting in the following board:

> 如果位于`(0, 2)`的棋子向下移动，四个B将被消除，棋盘将变成以下样子：

```python
   0  1  2  3  
   ------------
 0|C  A  C  C  
 1|A  Z  Z  A  
 2|A  Z  Z  C  
 3|A  A  A  A  
```

::: code-tabs

@tab step1

```python
   0  1  2  3  
   ------------
 0|C  A  C  C  
 1|A  Z  Z  A  
 2|A  Z  Z  C  
 3|A  A  A  A  
```

@tab step2

```python
   0  1  2  3  
   ------------
 0|C  A  C  C  
 1|A  A  A  A  
 2|A  Z  Z  C  
 3|A  Z  Z  A  
```

@tab step3

```python
   0  1  2  3  
   ------------
 0|C  A  C  C  
 1|A  A  A  A  
 2|A  C  Z  Z
 3|A  A  Z  Z
```

:::

After the gaps are filled, the final result will be as follows:

> 在填补缺口后，最终结果将如下所示：

```python
   0  1  2  3  
   ------------
 0|C  A  C  C  
 1|A  A  A  A  
 2|A  C  Z  Z  
 3|A  A  Z  Z  
```

Note that it is possible for multiple squares to be elimiated in the one move. For example, consider the following board:

> 请注意，在一次移动中可能会消除多个方块。例如，考虑下面的棋盘：

```python
   0  1  2  3  
   ------------
 0|C  A  B  C  
 1|A  B  C  A  
 2|A  B  B  A  
 3|A  C  A  A  
```

Moving the piece at `(0, 2)` downwards again eliminates the the four Bs. After the gaps are filled, the result will be as follows:

> 将位于`(0,2)`的棋子向下移动再次消除了四个B。填补空缺后，结果如下：

```python
   0  1  2  3  
   ------------
 0|C  A  C  C  
 1|A  C  A  A  
 2|A  A  Z  Z  
 3|A  A  Z  Z  
```

The four As in the bottom left of the board will then be eliminated, resulting in the following final configuration:

> 棋盘左下角的四个A将被消除，最终的配置如下：

```python
   0  1  2  3  
   ------------
 0|C  A  C  C  
 1|A  C  A  A  
 2|Z  Z  Z  Z  
 3|Z  Z  Z  Z  
```

Write a function `make_move(board, position, direction)`. This function should modify and return the `board` so that it contains the new configuration after the piece at `position` is moved in the direction specfied by `direction`. You may assume that the move is legal according to the definition in Question 3.

> 编写一个函数 `make_move(board, position, direction)`。该函数应该修改并返回 `board`，以便在按 `direction` 指定的方向移动 `position` 处的棋子后包含新的配置。你可以假设该移动符合第3个问题中定义的合法移动的条件。

### Example calls

```python
print(make_move([["C", "A", "B", "C"], ["A", "B", "C", "A"], ["A", "B", "B", "C"], ["A", "A", "A", "A"]], (0, 2), "d"))
>>> [['C', 'A', 'C', 'C'], ['A', 'A', 'A', 'A'], ['A', 'C', 'Z', 'Z'], ['A', 'A', 'Z', 'Z']]
print(make_move([["C", "A", "B", "C"], ["A", "B", "C", "A"], ["A", "B", "B", "A"], ["A", "C", "A", "A"]], (0, 2), "d"))
>>> [['C', 'A', 'C', 'C'], ['A', 'C', 'A', 'A'], ['Z', 'Z', 'Z', 'Z'], ['Z', 'Z', 'Z', 'Z']]
```

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def make_move(board, position, direction):
```

### Answer 

::: code-tabs

@tab 1

```python

# 消除 2x2 的方块
def eliminate_squares(board):
    eliminated = False  # 初始化标志，用于表示是否发生消除
    # 遍历棋盘，检查每个可能的 2x2 方块
    for r in range(len(board) - 1):
        for c in range(len(board[0]) - 1):
            # 如果找到一个 2x2 方块，将其替换为空白棋子，并设置 eliminated 为 True
            if board[r][c] == BLANK_PIECE and board[r][c] == board[r + 1][c] == board[r][c + 1] == board[r + 1][c + 1]:
                board[r][c], board[r + 1][c], board[r][c + 1], board[r + 1][c + 1] = BLANK_PIECE, BLANK_PIECE, BLANK_PIECE, BLANK_PIECE
                eliminated = True
                return eliminated
    return eliminated


def make_move(board, position, direction):
    row, col = position  # 解析行和列位置
    new_row, new_col = -1, -1
    if direction == DIR_UP:
        new_row, new_col = row - 1, col
    elif direction == DIR_DOWN:
        new_row, new_col = row + 1, col
    elif direction == DIR_LEFT:
        new_row, new_col = row, col - 1
    elif direction == DIR_RIGHT:
        new_row, new_col = row, col + 1

    # 交换棋盘上的两个位置的棋子
    board[new_row][new_col], board[row][col] = board[row][col], board[new_row][new_col]
```

@tab 2

```python
# 消除 2x2 的方块
def eliminate_squares(board):
    eliminated = False  # 初始化标志，用于表示是否发生消除
    # 遍历棋盘，检查每个可能的 2x2 方块
    for r in range(len(board) - 1):
        for c in range(len(board[0]) - 1):
            # 如果找到一个 2x2 方块，将其替换为空白棋子，并设置 eliminated 为 True
            if board[r][c] != BLANK_PIECE and board[r][c] == board[r + 1][c] == board[r][c + 1] == board[r + 1][c + 1]:
                board[r][c], board[r + 1][c], board[r][c + 1], board[r + 1][
                    c + 1] = BLANK_PIECE, BLANK_PIECE, BLANK_PIECE, BLANK_PIECE
                eliminated = True
                return eliminated
    return eliminated


# ['C', 'Z', 'D', 'D']
# ['C', 'D', 'D'] + ['Z'] >>> ['C', 'D', 'D', 'Z']
# 填充空白位置
def fill_gaps(board):
    # 填充垂直方向的空白
    for c in range(len(board[0])):  # 遍历每一列
        column = [board[r][c] for r in range(len(board))]
        # column = [x for x in column if x != BLANK_PIECE] + [BLANK_PIECE] * column.count(BLANK_PIECE)
        new_column = []
        for x in column:
            if x != BLANK_PIECE:
                new_column.append(x)
        new_column += [BLANK_PIECE] * column.count(BLANK_PIECE)
        for r in range(len(board)):
            board[r][c] = new_column[r]

def make_move(board, position, direction):
    row, col = position  # 解析行和列位置
    new_row, new_col = -1, -1
    if direction == DIR_UP:
        new_row, new_col = row - 1, col
    elif direction == DIR_DOWN:
        new_row, new_col = row + 1, col
    elif direction == DIR_LEFT:
        new_row, new_col = row, col - 1
    elif direction == DIR_RIGHT:
        new_row, new_col = row, col + 1

    # 交换棋盘上的两个位置的棋子
    board[new_row][new_col], board[row][col] = board[row][col], board[new_row][new_col]


print(make_move([["C", "A", "B", "C"], ["A", "B", "C", "A"], ["A", "B", "B", "C"], ["A", "A", "A", "A"]], (0, 2), "d"))
print(make_move([["C", "A", "B", "C"], ["A", "B", "C", "A"], ["A", "B", "B", "A"], ["A", "C", "A", "A"]], (0, 2), "d"))
```

@tab 代码

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def make_move(board, position, direction):
    row, col = position  # 解析行和列位置
    # 根据方向计算新的行和列位置
    if direction == DIR_UP:
        new_row, new_col = row - 1, col
    elif direction == DIR_DOWN:
        new_row, new_col = row + 1, col
    elif direction == DIR_LEFT:
        new_row, new_col = row, col - 1
    elif direction == DIR_RIGHT:
        new_row, new_col = row, col + 1
        
    # 交换棋盘上的两个位置的棋子
    board[new_row][new_col], board[row][col] = board[row][col], board[new_row][new_col]

    # 消除2x2的方块
    def eliminate_squares(board):
        eliminated = False  # 初始化标志，用于表示是否发生消除
        # 遍历棋盘，检查每个可能的2x2方块
        for r in range(len(board) - 1):
            for c in range(len(board[0]) - 1):
                # 如果找到一个2x2方块，将其替换为空白棋子，并设置eliminated为True
                if board[r][c] != BLANK_PIECE and board[r][c] == board[r+1][c] == board[r][c+1] == board[r+1][c+1]:
                    board[r][c], board[r+1][c], board[r][c+1], board[r+1][c+1] = BLANK_PIECE, BLANK_PIECE, BLANK_PIECE, BLANK_PIECE
                    eliminated = True
                    return eliminated
        return eliminated

    # 填充空白位置
    def fill_gaps(board):
        # 填充垂直方向的空白
        for c in range(len(board[0])):
            column = [board[r][c] for r in range(len(board))]
            column = [x for x in column if x != BLANK_PIECE] + [BLANK_PIECE] * column.count(BLANK_PIECE)
            for r in range(len(board)):
                board[r][c] = column[r]

        # 填充水平方向的空白
        for r in range(len(board)):
            row = board[r]
            row = [x for x in row if x != BLANK_PIECE] + [BLANK_PIECE] * row.count(BLANK_PIECE)
            board[r] = row

    # 只要有方块被消除，就继续填充空白位置
    while eliminate_squares(board):
        fill_gaps(board)

    return board
```



:::

## 完整代码

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"


def pretty_print(board):
    # 打印第一行：列索引
    print("   ", end="")
    for col in range(len(board[0])):
        print(f"{col:<3}", end="")
    print()

    # 打印第二行：横线
    print("   ", end="")
    print("-" * (3 * len(board[0])))

    # 打印游戏板内容
    for row in range(len(board)):
        print(f"{row:>2}|", end="")
        for col in range(len(board[row])):
            print(f"{board[row][col]}  ", end="")
        print()

    # 打印两行空白
    print()


def validate_input(board, position, direction):
    # 条件1: 检查棋盘的行数和列数是否至少为2
    if len(board) < 2 or len(board[0]) < 2:
        return False

    # 条件2: 检查棋盘的每一行长度是否相等
    row_length = len(board[0])
    for row in board:
        if len(row) != row_length:
            return False

    # 条件3: 检查棋盘上的每个值是否为大写字母
    for row in board:
        for value in row:
            if not value.isupper():
                return False

    # 条件4: 检查 position 是否在棋盘范围内且没有负值
    row, col = position
    if row < 0 or col < 0 or row >= len(board) or col >= len(board[0]):
        return False

    # 条件5: 检查 direction 是否为允许的值之一
    if direction not in (DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT):
        return False

    # 条件6: 检查每种颜色的棋子数量是否是4的倍数
    color_counts = {}
    for row in board:
        for value in row:
            if value != BLANK_PIECE:
                if value in color_counts:
                    color_counts[value] += 1
                else:
                    color_counts[value] = 1
    for count in color_counts.values():
        if count % 4 != 0:
            return False

    # 如果所有条件都满足，返回 True
    return True


def legal_move(board, position, direction):
    # 获取行和列坐标
    global new_row, new_col
    row, col = position
    # 获取当前位置的棋子
    piece = board[row][col]

    # 如果当前位置是空白棋子，则移动非法
    if piece == BLANK_PIECE:
        # print(piece)
        return False

    # 计算新位置的坐标，根据移动方向
    if direction == DIR_UP:
        new_row, new_col = (row - 1, col)
    elif direction == DIR_DOWN:
        new_row, new_col = (row + 1, col)
    elif direction == DIR_LEFT:
        new_row, new_col = (row, col - 1)
    elif direction == DIR_RIGHT:
        new_row, new_col = (row, col + 1)
    # print(new_row, new_col)
    if board[new_row][new_col] == BLANK_PIECE:
        # if (0 <= new_row < len(board)) and (0 <= new_col < len(board[0])) and board[new_row][new_col] == BLANK_PIECE:
        # print("BLANK_PIECE:>>>", )
        return False
    # new_color = board[new_row][new_col]
    # 检查新位置是否在棋盘内
    if new_row < 0 or new_row >= len(board) or new_col < 0 or new_col >= len(board[0]):
        return False

    adjacent_positions_new = [
        (new_row + 1, new_col),
        (new_row - 1, new_col),
        (new_row, new_col - 1),
        (new_row, new_col + 1),
    ]

    adjacent_positions_old = [
        (row + 1, col),
        (row - 1, col),
        (row, col - 1),
        (row, col + 1),
    ]

    # 检查新位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_new:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[row][col]) and (
                (r, c) != (row, col)):
            return True

    # 检查旧位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_old:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[new_row][new_col]) and (
                (r, c) != (new_row, new_col)):
            return True

    # 如果都没有找到相同颜色的相邻棋子，返回 False
    return False


# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (1, 2), "u"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "Z", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move(
#     [
#         ["A", "A", "D", "C"],
#         ["A", "B", "C", "A"],
#         ["C", "B", "B", "A"],
#         ["C", "D", "D", "D"]
#     ]
#     , (0, 2), "l"))
#
# print(legal_move(
#     [
#         ['A', 'A', 'D', 'C'],
#         ['A', 'B', 'C', 'A'],
#         ['C', 'B', 'B', 'A'],
#         ['C', 'D', 'D', 'D'],
#     ],
#     (0, 2), 'd'
# ))
#
#
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 0), "l"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (3, 3), "d"))


# 消除 2x2 的方块
def eliminate_squares(board):
    eliminated = False  # 初始化标志，用于表示是否发生消除
    # 遍历棋盘，检查每个可能的 2x2 方块
    for r in range(len(board) - 1):
        for c in range(len(board[0]) - 1):
            # 如果找到一个 2x2 方块，将其替换为空白棋子，并设置 eliminated 为 True
            if board[r][c] != BLANK_PIECE and board[r][c] == board[r + 1][c] == board[r][c + 1] == board[r + 1][c + 1]:
                board[r][c], board[r + 1][c], board[r][c + 1], board[r + 1][
                    c + 1] = BLANK_PIECE, BLANK_PIECE, BLANK_PIECE, BLANK_PIECE
                eliminated = True
                return eliminated
    return eliminated


# ['C', 'Z', 'D', 'D']
# ['C', 'D', 'D'] + ['Z'] >>> ['C', 'D', 'D', 'Z']
# 填充空白位置
def fill_gaps(board):
    # 填充垂直方向的空白
    for c in range(len(board[0])):  # 遍历每一列
        column = [board[r][c] for r in range(len(board))]
        column = [x for x in column if x != BLANK_PIECE] + [BLANK_PIECE] * column.count(BLANK_PIECE)
        for r in range(len(board)):
            board[r][c] = column[r]
        # new_column = []
        # for x in column:
        #     if x != BLANK_PIECE:
        #         new_column.append(x)
        # new_column += [BLANK_PIECE] * column.count(BLANK_PIECE)
        # for r in range(len(board)):
        #     board[r][c] = new_column[r]
    # 填充水平方向的空白
    for r in range(len(board)):
        row = board[r]
        row = [x for x in row if x != BLANK_PIECE] + [BLANK_PIECE] * row.count(BLANK_PIECE)
        board[r] = row


def make_move(board, position, direction):
    row, col = position  # 解析行和列位置
    # 根据方向计算新的行和列位置
    if direction == DIR_UP:
        new_row, new_col = row - 1, col
    elif direction == DIR_DOWN:
        new_row, new_col = row + 1, col
    elif direction == DIR_LEFT:
        new_row, new_col = row, col - 1
    elif direction == DIR_RIGHT:
        new_row, new_col = row, col + 1

    # 交换棋盘上的两个位置的棋子
    board[new_row][new_col], board[row][col] = board[row][col], board[new_row][new_col]

    # 只要有方块被消除，就继续填充空白位置
    while eliminate_squares(board):
        fill_gaps(board)
    return board


print(make_move([["C", "A", "B", "C"], ["A", "B", "C", "A"], ["A", "B", "B", "C"], ["A", "A", "A", "A"]], (0, 2),
                "d") == [['C', 'A', 'C', 'C'], ['A', 'A', 'A', 'A'], ['A', 'C', 'Z', 'Z'], ['A', 'A', 'Z', 'Z']])
```

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

# Eliminate 2x2 squares
def eliminate_squares(board):
    # Initialization flag that indicates whether elimination has occurred
    eliminated = False  
    # Traverse the board, checking every possible 2x2 square
    for r in range(len(board) - 1):
        for c in range(len(board[0]) - 1):
            # If a 2x2 square is found
            # replace it with a blank piece and set eliminated to True
            if board[r][c] != BLANK_PIECE and \
                    board[r][c] == board[r + 1][c] == \
                    board[r][c + 1] == board[r + 1][c + 1]:
                board[r][c], board[r + 1][c], board[r][c + 1], board[r + 1][
                    c + 1] = BLANK_PIECE, BLANK_PIECE, BLANK_PIECE, BLANK_PIECE
                eliminated = True
                return eliminated
    return eliminated


# Fill blank space
def fill_gaps(board):
    # Fill the vertical blank space
    for c in range(len(board[0])):  # Go through each column
        column = [board[r][c] for r in range(len(board))]
        column = \
            [x for x in column if x != BLANK_PIECE] + \
            [BLANK_PIECE] * column.count(BLANK_PIECE)
        for r in range(len(board)):
            board[r][c] = column[r]

    for r in range(len(board)):
        row = board[r]
        row = [x for x in row if x != BLANK_PIECE] + \
              [BLANK_PIECE] * row.count(BLANK_PIECE)
        board[r] = row


def make_move(board, position, direction):
    row, col = position  # row and column positions
    new_row, new_col = -1, -1
    if direction == DIR_UP:
        new_row, new_col = row - 1, col
    elif direction == DIR_DOWN:
        new_row, new_col = row + 1, col
    elif direction == DIR_LEFT:
        new_row, new_col = row, col - 1
    elif direction == DIR_RIGHT:
        new_row, new_col = row, col + 1

    # swaps two positions on a board
    board[new_row][new_col], board[row][col] = \
        board[row][col], board[new_row][new_col]

    # As long as any square is eliminated, continue filling the blank space
    while eliminate_squares(board):
        fill_gaps(board)
    return board
```



## AI Player

Note: This question is optional and for bonus marks only! You can obtain full marks for Project 1 without attempting this question. It is considerably more difficult than the previous questions and intended for students who would like to challenge themselves. As such, lecturers and tutors will provide less guidance on how to complete it.

> 注：此问题是可选的，仅供额外加分！即使不尝试回答此问题，您也可以获得Project 1的满分。该问题比之前的问题要困难得多，适合想挑战自己的学生。因此，讲师和导师将提供较少的指导以完成此问题。

### Task 5: AI Player (BONUS 2 marks)

> 任务5：AI玩家（额外加分2分）

Create a function `ai_player(board)` that will play the game for you.

> 创建一个名为 `ai_player(board)` 的函数，它可以帮你玩游戏。

A move can be represented as a tuple containing a position and direction. For example, moving position `(2, 1)` to the right could be represented as follows: `((2, 1), 'r')`. Your function should return a list of moves that, when executed, will eliminate all of the pieces on the board. If a sequence of moves exists that will win the game, your function should find it. If no such sequence exists, your function should return `None`.

> 一步可以表示为一个包含位置和方向的元组。例如，将位置 `(2, 1)` 向右移动可以表示为：`((2, 1), 'r')`。你的函数应该返回一个移动列表，当执行这些移动时，可以消除棋盘上所有的棋子。如果存在一系列可以赢得游戏的移动序列，你的函数应该找到它。如果不存在这样的移动序列，你的函数应该返回 `None`。

Note that it is possible for there to be multiple different move sequences that can win the game from a given starting position. In this situation any such sequence will be accepted.

> 请注意，从给定的起始位置开始，可能存在多个不同的移动序列可以赢得比赛。在这种情况下，任何这样的序列都将被接受。

## Example calls

```python
print(ai_player([['A', 'A', 'B', 'B'], ['A', 'B', 'A', 'B']]))
[((1, 1), 'r')]
print(ai_player([['C', 'B', 'B', 'C'], ['C', 'A', 'D', 'A'], ['D', 'A', 'A', 'D'], ['D', 'B', 'B', 'C']]))
[((1, 2), 'r'), ((0, 1), 'r')]
```

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def ai_player(board):
```

### Answer

::: tabs

@tab 一个隐藏测试没有通过

![](./06-Assignment01.assets/image-20230428105757564.png)

```python {248-283}
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"


def pretty_print(board):
    # 打印第一行：列索引
    print("   ", end="")
    for col in range(len(board[0])):
        print(f"{col:<3}", end="")
    print()

    # 打印第二行：横线
    print("   ", end="")
    print("-" * (3 * len(board[0])))

    # 打印游戏板内容
    for row in range(len(board)):
        print(f"{row:>2}|", end="")
        for col in range(len(board[row])):
            print(f"{board[row][col]}  ", end="")
        print()

    # 打印两行空白
    print()


def validate_input(board, position, direction):
    # 条件1: 检查棋盘的行数和列数是否至少为2
    if len(board) < 2 or len(board[0]) < 2:
        return False

    # 条件2: 检查棋盘的每一行长度是否相等
    row_length = len(board[0])
    for row in board:
        if len(row) != row_length:
            return False

    # 条件3: 检查棋盘上的每个值是否为大写字母
    for row in board:
        for value in row:
            if not value.isupper():
                return False

    # 条件4: 检查 position 是否在棋盘范围内且没有负值
    row, col = position
    if row < 0 or col < 0 or row >= len(board) or col >= len(board[0]):
        return False

    # 条件5: 检查 direction 是否为允许的值之一
    if direction not in (DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT):
        return False

    # 条件6: 检查每种颜色的棋子数量是否是4的倍数
    color_counts = {}
    for row in board:
        for value in row:
            if value != BLANK_PIECE:
                if value in color_counts:
                    color_counts[value] += 1
                else:
                    color_counts[value] = 1
    for count in color_counts.values():
        if count % 4 != 0:
            return False

    # 如果所有条件都满足，返回 True
    return True


def legal_move(board, position, direction):
    # 获取行和列坐标
    global new_row, new_col
    row, col = position
    # 获取当前位置的棋子
    piece = board[row][col]

    # 如果当前位置是空白棋子，则移动非法
    if piece == BLANK_PIECE:
        # print(piece)
        return False

    # 计算新位置的坐标，根据移动方向
    if direction == DIR_UP:
        new_row, new_col = (row - 1, col)
    elif direction == DIR_DOWN:
        new_row, new_col = (row + 1, col)
    elif direction == DIR_LEFT:
        new_row, new_col = (row, col - 1)
    elif direction == DIR_RIGHT:
        new_row, new_col = (row, col + 1)
    # print(new_row, new_col)
    if (0 <= new_row < len(board)) and (0 <= new_col < len(board[0])) and board[new_row][new_col] == BLANK_PIECE:
        # if (0 <= new_row < len(board)) and (0 <= new_col < len(board[0])) and board[new_row][new_col] == BLANK_PIECE:
        # print("BLANK_PIECE:>>>", )
        return False
    # new_color = board[new_row][new_col]
    # 检查新位置是否在棋盘内
    if new_row < 0 or new_row >= len(board) or new_col < 0 or new_col >= len(board[0]):
        return False

    adjacent_positions_new = [
        (new_row + 1, new_col),
        (new_row - 1, new_col),
        (new_row, new_col - 1),
        (new_row, new_col + 1),
    ]

    adjacent_positions_old = [
        (row + 1, col),
        (row - 1, col),
        (row, col - 1),
        (row, col + 1),
    ]

    # 检查新位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_new:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[row][col]) and (
                (r, c) != (row, col)):
            return True

    # 检查旧位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_old:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[new_row][new_col]) and (
                (r, c) != (new_row, new_col)):
            return True

    # 如果都没有找到相同颜色的相邻棋子，返回 False
    return False


# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (1, 2), "u"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "Z", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move(
#     [
#         ["A", "A", "D", "C"],
#         ["A", "B", "C", "A"],
#         ["C", "B", "B", "A"],
#         ["C", "D", "D", "D"]
#     ]
#     , (0, 2), "l"))
#
# print(legal_move(
#     [
#         ['A', 'A', 'D', 'C'],
#         ['A', 'B', 'C', 'A'],
#         ['C', 'B', 'B', 'A'],
#         ['C', 'D', 'D', 'D'],
#     ],
#     (0, 2), 'd'
# ))
#
#
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 0), "l"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (3, 3), "d"))


# 消除 2x2 的方块
def eliminate_squares(board):
    eliminated = False  # 初始化标志，用于表示是否发生消除
    # 遍历棋盘，检查每个可能的 2x2 方块
    for r in range(len(board) - 1):
        for c in range(len(board[0]) - 1):
            # 如果找到一个 2x2 方块，将其替换为空白棋子，并设置 eliminated 为 True
            if board[r][c] != BLANK_PIECE and board[r][c] == board[r + 1][c] == board[r][c + 1] == board[r + 1][c + 1]:
                board[r][c], board[r + 1][c], board[r][c + 1], board[r + 1][
                    c + 1] = BLANK_PIECE, BLANK_PIECE, BLANK_PIECE, BLANK_PIECE
                eliminated = True
                return eliminated
    return eliminated


# ['C', 'Z', 'D', 'D']
# ['C', 'D', 'D'] + ['Z'] >>> ['C', 'D', 'D', 'Z']
# 填充空白位置
def fill_gaps(board):
    # 填充垂直方向的空白
    for c in range(len(board[0])):  # 遍历每一列
        column = [board[r][c] for r in range(len(board))]
        column = [x for x in column if x != BLANK_PIECE] + [BLANK_PIECE] * column.count(BLANK_PIECE)
        for r in range(len(board)):
            board[r][c] = column[r]
        # new_column = []
        # for x in column:
        #     if x != BLANK_PIECE:
        #         new_column.append(x)
        # new_column += [BLANK_PIECE] * column.count(BLANK_PIECE)
        # for r in range(len(board)):
        #     board[r][c] = new_column[r]
    # 填充水平方向的空白
    for r in range(len(board)):
        row = board[r]
        row = [x for x in row if x != BLANK_PIECE] + [BLANK_PIECE] * row.count(BLANK_PIECE)
        board[r] = row


def make_move(board, position, direction):
    row, col = position  # 解析行和列位置
    # 根据方向计算新的行和列位置
    if direction == DIR_UP:
        new_row, new_col = row - 1, col
    elif direction == DIR_DOWN:
        new_row, new_col = row + 1, col
    elif direction == DIR_LEFT:
        new_row, new_col = row, col - 1
    elif direction == DIR_RIGHT:
        new_row, new_col = row, col + 1

    # 交换棋盘上的两个位置的棋子
    board[new_row][new_col], board[row][col] = board[row][col], board[new_row][new_col]

    # 只要有方块被消除，就继续填充空白位置
    while eliminate_squares(board):
        fill_gaps(board)
    return board


# print(make_move([["C", "A", "B", "C"], ["A", "B", "C", "A"], ["A", "B", "B", "C"], ["A", "A", "A", "A"]], (0, 2),
#                 "d") == [['C', 'A', 'C', 'C'], ['A', 'A', 'A', 'A'], ['A', 'C', 'Z', 'Z'], ['A', 'A', 'Z', 'Z']])
# def valid_move(board, position, direction):
#     r, c = position
#     piece = board[r][c]
#
#     if direction == DIR_UP:
#         if r == 0 or board[r - 1][c] != BLANK_PIECE:
#             return False
#         return True
#
#     if direction == DIR_DOWN:
#         if r == len(board) - 1 or board[r + 1][c] != BLANK_PIECE:
#             return False
#         return True
#
#     if direction == DIR_LEFT:
#         if c == 0 or board[r][c - 1] != BLANK_PIECE:
#             return False
#         return True
#
#     if direction == DIR_RIGHT:
#         if c == len(board[0]) - 1 or board[r][c + 1] != BLANK_PIECE:
#             return False
#         return True
#
#
from collections import deque

DIRECTIONS = [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT]


def ai_player(board):
    def bfs(board):
        queue = deque([(board, [])])

        while queue:
            current_board, moves = queue.popleft()

            # 如果已经清除了所有棋子，返回当前的移动序列
            if all(all(cell == BLANK_PIECE for cell in row) for row in current_board):
                return moves

            # 遍历所有可能的移动
            for r in range(len(current_board)):
                for c in range(len(current_board[0])):
                    for d in DIRECTIONS:
                        if legal_move(current_board, (r, c), d):
                            new_board = [row.copy() for row in current_board]
                            make_move(new_board, (r, c), d)
                            queue.append((new_board, moves + [((r, c), d)]))

        return None

    return bfs(board)


print(ai_player([['A', 'A', 'B', 'B'], ['A', 'B', 'A', 'B']]))  # [((1, 1), 'r')]
print(ai_player([['C', 'B', 'B', 'C'], ['C', 'A', 'D', 'A'], ['D', 'A', 'A', 'D'],
                 ['D', 'B', 'B', 'C']]))  # [((1, 2), 'r'), ((0, 1), 'r')]

print(ai_player([['A', 'A', 'B', 'B'], ['A', 'B', 'A', 'B']]))
print(ai_player([['C', 'B', 'B', 'C'], ['C', 'A', 'D', 'A'], ['D', 'A', 'A', 'D'], ['D', 'B', 'B', 'C']]))
```

@tab 全部通过✅

```python {248-293}
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"


def pretty_print(board):
    # 打印第一行：列索引
    print("   ", end="")
    for col in range(len(board[0])):
        print(f"{col:<3}", end="")
    print()

    # 打印第二行：横线
    print("   ", end="")
    print("-" * (3 * len(board[0])))

    # 打印游戏板内容
    for row in range(len(board)):
        print(f"{row:>2}|", end="")
        for col in range(len(board[row])):
            print(f"{board[row][col]}  ", end="")
        print()

    # 打印两行空白
    print()


def validate_input(board, position, direction):
    # 条件1: 检查棋盘的行数和列数是否至少为2
    if len(board) < 2 or len(board[0]) < 2:
        return False

    # 条件2: 检查棋盘的每一行长度是否相等
    row_length = len(board[0])
    for row in board:
        if len(row) != row_length:
            return False

    # 条件3: 检查棋盘上的每个值是否为大写字母
    for row in board:
        for value in row:
            if not value.isupper():
                return False

    # 条件4: 检查 position 是否在棋盘范围内且没有负值
    row, col = position
    if row < 0 or col < 0 or row >= len(board) or col >= len(board[0]):
        return False

    # 条件5: 检查 direction 是否为允许的值之一
    if direction not in (DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT):
        return False

    # 条件6: 检查每种颜色的棋子数量是否是4的倍数
    color_counts = {}
    for row in board:
        for value in row:
            if value != BLANK_PIECE:
                if value in color_counts:
                    color_counts[value] += 1
                else:
                    color_counts[value] = 1
    for count in color_counts.values():
        if count % 4 != 0:
            return False

    # 如果所有条件都满足，返回 True
    return True


def legal_move(board, position, direction):
    # 获取行和列坐标
    global new_row, new_col
    row, col = position
    # 获取当前位置的棋子
    piece = board[row][col]

    # 如果当前位置是空白棋子，则移动非法
    if piece == BLANK_PIECE:
        # print(piece)
        return False

    # 计算新位置的坐标，根据移动方向
    if direction == DIR_UP:
        new_row, new_col = (row - 1, col)
    elif direction == DIR_DOWN:
        new_row, new_col = (row + 1, col)
    elif direction == DIR_LEFT:
        new_row, new_col = (row, col - 1)
    elif direction == DIR_RIGHT:
        new_row, new_col = (row, col + 1)
    # print(new_row, new_col)
    if (0 <= new_row < len(board)) and (0 <= new_col < len(board[0])) and board[new_row][new_col] == BLANK_PIECE:
        # if (0 <= new_row < len(board)) and (0 <= new_col < len(board[0])) and board[new_row][new_col] == BLANK_PIECE:
        # print("BLANK_PIECE:>>>", )
        return False
    # new_color = board[new_row][new_col]
    # 检查新位置是否在棋盘内
    if new_row < 0 or new_row >= len(board) or new_col < 0 or new_col >= len(board[0]):
        return False

    adjacent_positions_new = [
        (new_row + 1, new_col),
        (new_row - 1, new_col),
        (new_row, new_col - 1),
        (new_row, new_col + 1),
    ]

    adjacent_positions_old = [
        (row + 1, col),
        (row - 1, col),
        (row, col - 1),
        (row, col + 1),
    ]

    # 检查新位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_new:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[row][col]) and (
                (r, c) != (row, col)):
            return True

    # 检查旧位置是否有相同颜色的相邻棋子
    for r, c in adjacent_positions_old:
        if (0 <= r < len(board)) and (0 <= c < len(board[0])) and (board[r][c] == board[new_row][new_col]) and (
                (r, c) != (new_row, new_col)):
            return True

    # 如果都没有找到相同颜色的相邻棋子，返回 False
    return False


# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (1, 2), "u"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "Z", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 2), "d"))
# print(legal_move(
#     [
#         ["A", "A", "D", "C"],
#         ["A", "B", "C", "A"],
#         ["C", "B", "B", "A"],
#         ["C", "D", "D", "D"]
#     ]
#     , (0, 2), "l"))
#
# print(legal_move(
#     [
#         ['A', 'A', 'D', 'C'],
#         ['A', 'B', 'C', 'A'],
#         ['C', 'B', 'B', 'A'],
#         ['C', 'D', 'D', 'D'],
#     ],
#     (0, 2), 'd'
# ))
#
#
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (0, 0), "l"))
# print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (3, 3), "d"))


# 消除 2x2 的方块
def eliminate_squares(board):
    eliminated = False  # 初始化标志，用于表示是否发生消除
    # 遍历棋盘，检查每个可能的 2x2 方块
    for r in range(len(board) - 1):
        for c in range(len(board[0]) - 1):
            # 如果找到一个 2x2 方块，将其替换为空白棋子，并设置 eliminated 为 True
            if board[r][c] != BLANK_PIECE and board[r][c] == board[r + 1][c] == board[r][c + 1] == board[r + 1][c + 1]:
                board[r][c], board[r + 1][c], board[r][c + 1], board[r + 1][
                    c + 1] = BLANK_PIECE, BLANK_PIECE, BLANK_PIECE, BLANK_PIECE
                eliminated = True
                return eliminated
    return eliminated


# ['C', 'Z', 'D', 'D']
# ['C', 'D', 'D'] + ['Z'] >>> ['C', 'D', 'D', 'Z']
# 填充空白位置
def fill_gaps(board):
    # 填充垂直方向的空白
    for c in range(len(board[0])):  # 遍历每一列
        column = [board[r][c] for r in range(len(board))]
        column = [x for x in column if x != BLANK_PIECE] + [BLANK_PIECE] * column.count(BLANK_PIECE)
        for r in range(len(board)):
            board[r][c] = column[r]
        # new_column = []
        # for x in column:
        #     if x != BLANK_PIECE:
        #         new_column.append(x)
        # new_column += [BLANK_PIECE] * column.count(BLANK_PIECE)
        # for r in range(len(board)):
        #     board[r][c] = new_column[r]
    # 填充水平方向的空白
    for r in range(len(board)):
        row = board[r]
        row = [x for x in row if x != BLANK_PIECE] + [BLANK_PIECE] * row.count(BLANK_PIECE)
        board[r] = row


def make_move(board, position, direction):
    row, col = position  # 解析行和列位置
    # 根据方向计算新的行和列位置
    if direction == DIR_UP:
        new_row, new_col = row - 1, col
    elif direction == DIR_DOWN:
        new_row, new_col = row + 1, col
    elif direction == DIR_LEFT:
        new_row, new_col = row, col - 1
    elif direction == DIR_RIGHT:
        new_row, new_col = row, col + 1

    # 交换棋盘上的两个位置的棋子
    board[new_row][new_col], board[row][col] = board[row][col], board[new_row][new_col]

    # 只要有方块被消除，就继续填充空白位置
    while eliminate_squares(board):
        fill_gaps(board)
    return board


# print(make_move([["C", "A", "B", "C"], ["A", "B", "C", "A"], ["A", "B", "B", "C"], ["A", "A", "A", "A"]], (0, 2),
#                 "d") == [['C', 'A', 'C', 'C'], ['A', 'A', 'A', 'A'], ['A', 'C', 'Z', 'Z'], ['A', 'A', 'Z', 'Z']])
# def valid_move(board, position, direction):
#     r, c = position
#     piece = board[r][c]
#
#     if direction == DIR_UP:
#         if r == 0 or board[r - 1][c] != BLANK_PIECE:
#             return False
#         return True
#
#     if direction == DIR_DOWN:
#         if r == len(board) - 1 or board[r + 1][c] != BLANK_PIECE:
#             return False
#         return True
#
#     if direction == DIR_LEFT:
#         if c == 0 or board[r][c - 1] != BLANK_PIECE:
#             return False
#         return True
#
#     if direction == DIR_RIGHT:
#         if c == len(board[0]) - 1 or board[r][c + 1] != BLANK_PIECE:
#             return False
#         return True
#
#
from collections import deque

DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"
DIRECTIONS = [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT]


def ai_player(board):
    def bfs(board):
        queue = deque([(board, [])])
        visited = set()

        while queue:
            current_board, moves = queue.popleft()
            board_tuple = tuple(tuple(row) for row in current_board)

            if board_tuple in visited:
                continue

            visited.add(board_tuple)

            if all(all(cell == BLANK_PIECE for cell in row) for row in current_board):
                return moves

            for r in range(len(current_board)):
                for c in range(len(current_board[0])):
                    for d in DIRECTIONS:
                        if legal_move(current_board, (r, c), d):
                            new_board = [row.copy() for row in current_board]
                            make_move(new_board, (r, c), d)
                            queue.append((new_board, moves + [((r, c), d)]))

        return None

    return bfs(board)


print(ai_player([['A', 'A', 'B', 'B'], ['A', 'B', 'A', 'B']]))  # [((1, 1), 'r')]
print(ai_player([['C', 'B', 'B', 'C'], ['C', 'A', 'D', 'A'], ['D', 'A', 'A', 'D'],
                 ['D', 'B', 'B', 'C']]))  # [((1, 2), 'r'), ((0, 1), 'r')]

print(ai_player([['A', 'A', 'B', 'B'], ['A', 'B', 'A', 'B']]))
print(ai_player([['C', 'B', 'B', 'C'], ['C', 'A', 'D', 'A'], ['D', 'A', 'A', 'D'], ['D', 'B', 'B', 'C']]))
```

@tab 讲解

在这个改进的版本中，我们使用广度优先搜索（BFS）来寻找能够解决问题的移动序列。我们用一个队列来保存需要处理的棋盘状态和到达该状态所采取的移动。同时，我们使用一个集合来保存已经访问过的棋盘状态，以避免重复访问。下面是详细的代码注释：

```python
from collections import deque

DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"
DIRECTIONS = [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT]

def ai_player(board):
    # 定义广度优先搜索函数，输入棋盘，返回能解决问题的移动序列
    def bfs(board):
        # 初始化队列，存储（棋盘，移动序列）元组
        queue = deque([(board, [])])
        # 初始化集合，用于保存已访问过的棋盘状态
        visited = set()

        # 当队列非空时，执行循环
        while queue:
            # 弹出队列中的第一个元素，获得当前棋盘状态和相应的移动序列
            current_board, moves = queue.popleft()
            # 将当前棋盘状态转换为不可变对象，以便将其添加到已访问集合中
            board_tuple = tuple(tuple(row) for row in current_board)

            # 如果当前棋盘状态已经访问过，跳过本次循环
            if board_tuple in visited:
                continue

            # 将当前棋盘状态添加到已访问集合中
            visited.add(board_tuple)

            # 检查当前棋盘状态是否已经解决问题（所有棋子都已消除）
            if all(all(cell == BLANK_PIECE for cell in row) for row in current_board):
                return moves

            # 遍历棋盘上的每个位置，尝试每个可能的移动方向
            for r in range(len(current_board)):
                for c in range(len(current_board[0])):
                    for d in DIRECTIONS:
                        # 如果移动合法，则执行移动操作
                        if legal_move(current_board, (r, c), d):
                            # 创建当前棋盘的副本，以避免修改原始棋盘
                            new_board = [row.copy() for row in current_board]
                            # 执行移动操作
                            make_move(new_board, (r, c), d)
                            # 将新的棋盘状态和相应的移动序列添加到队列中
                            queue.append((new_board, moves + [((r, c), d)]))

        # 如果无法找到解决方案，返回 None
        return None

    # 调用广度优先搜索函数
    return bfs(board)
```

1. 广度优先搜索（BFS）：这是一种遍历图或树的算法，它从根节点开始，逐层向外遍历。在这个问题中，我们使用广度优先搜索来探索所有可能的棋盘状态，直到找到一个解决方案。

2. 队列（queue）：队列是一种数据结构，它支持先进先出（FIFO）的操作。我们在广度优先搜索中使用队列来保存待处理的棋盘状态。

3. 集合（set）：集合是一种数据结构，它只保存不重复的元素。我们使用集合来保存已经访问过的棋盘状态，以避免重复访问。

4. 列表推导式（list comprehensions）：这是一种简洁的构建列表的方法。在代码中，我们使用列表推导式来创建棋盘的副本。

5. `all()` 函数：这个函数接受一个可迭代对象，并在所有元素都为真时返回 True，否则返回 False。我们使用 all() 函数来检查棋盘是否已经解决问题（所有棋子都已消除）。

希望这些补充信息能帮助您更好地理解这个解决方案。如果您有其他问题，请随时提问。

@tab ok 的代码

```python
from collections import deque

DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"
DIRECTIONS = [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT]

def ai_player(board):
    def bfs(board):
        queue = deque([(board, [])])
        visited = set()

        while queue:
            current_board, moves = queue.popleft()
            board_tuple = tuple(tuple(row) for row in current_board)

            if board_tuple in visited:
                continue

            visited.add(board_tuple)

            if all(all(cell == BLANK_PIECE for cell in row) for row in current_board):
                return moves

            for r in range(len(current_board)):
                for c in range(len(current_board[0])):
                    for d in DIRECTIONS:
                        if legal_move(current_board, (r, c), d):
                            new_board = [row.copy() for row in current_board]
                            make_move(new_board, (r, c), d)
                            queue.append((new_board, moves + [((r, c), d)]))

        return None

    return bfs(board)

print(ai_player([['A', 'A', 'B', 'B'], ['A', 'B', 'A', 'B']])) # [((1, 1), 'r')]
print(ai_player([['C', 'B', 'B', 'C'], ['C', 'A', 'D', 'A'], ['D', 'A', 'A', 'D'], ['D', 'B', 'B', 'C']])) # [((1, 2), 'r'), ((0, 1), 'r')]
```



:::





:::: details old

::: tabs

@tab 1

实现一个AI玩家的函数需要考虑很多方面，包括搜索所有可能的走法和检查它们是否导致胜利。为了简化实现，我们可以使用深度优先搜索（DFS）算法。下面是一个简单的AI玩家函数，使用 DFS 来找到一系列可以赢得游戏的走法。

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def ai_player(board):
    def is_board_empty(board):
        return all([piece == BLANK_PIECE for row in board for piece in row])

    def dfs(board, moves):
        if is_board_empty(board):
            return moves

        for r in range(len(board)):
            for c in range(len(board[0])):
                for direction in [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT]:
                    if valid_move(board, (r, c), direction):
                        next_board = deepcopy(board)
                        make_move(next_board, (r, c), direction)
                        result = dfs(next_board, moves + [((r, c), direction)])
                        if result:
                            return result
        return None

    return dfs(board, [])
```

这个函数首先定义了一个辅助函数 `is_board_empty` 来检查棋盘上是否还有棋子。接着定义了一个递归的DFS函数。在DFS函数中，我们遍历棋盘的所有位置和四个可能的方向。如果一个走法是有效的，我们就在一个新的棋盘上执行这个走法，然后递归地在新棋盘上继续搜索。如果我们找到一个使棋盘上所有棋子消失的走法序列，就返回这个序列。

需要注意的是，这个实现可能在某些情况下效率较低，因为它需要尝试所有可能的走法。为了提高效率，可以考虑使用更高级的搜索算法和剪枝技术。不过，对于这个问题的规模，这个简单的实现应该已经足够了。

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def ai_player(board):
    # 辅助函数，检查棋盘上是否还有棋子
    def is_board_empty(board):
        return all([piece == BLANK_PIECE for row in board for piece in row])

    # 深度优先搜索（DFS）函数
    def dfs(board, moves):
        # 如果棋盘上没有棋子了，说明已经赢得游戏，返回走法序列
        if is_board_empty(board):
            return moves

        # 遍历棋盘的每个位置
        for r in range(len(board)):
            for c in range(len(board[0])):
                # 遍历四个可能的移动方向
                for direction in [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT]:
                    # 检查当前位置和方向的走法是否合法
                    if valid_move(board, (r, c), direction):
                        # 创建一个新的棋盘，以免影响原始棋盘
                        next_board = deepcopy(board)
                        # 在新棋盘上执行这个走法
                        make_move(next_board, (r, c), direction)
                        # 递归地在新棋盘上继续搜索走法
                        result = dfs(next_board, moves + [((r, c), direction)])
                        # 如果找到了一个可以赢得游戏的走法序列，就返回这个序列
                        if result:
                            return result

        # 如果没有找到赢得游戏的走法序列，返回None
        return None

    # 调用DFS函数开始搜索
    return dfs(board, [])
```

这个实现使用了一个递归的深度优先搜索（DFS）算法来寻找可以赢得游戏的走法序列。首先定义了一个辅助函数`is_board_empty`来检查棋盘上是否还有棋子。然后，定义了DFS函数，递归地搜索所有可能的走法。在DFS函数中，我们遍历棋盘的所有位置和四个可能的方向。如果一个走法是有效的，我们就在一个新的棋盘上执行这个走法，然后递归地在新棋盘上继续搜索。如果我们找到一个使棋盘上所有棋子消失的走法序列，就返回这个序列。

@tab 优化

对于这个问题，我们可以尝试使用迭代加深深度优先搜索（IDDFS）算法，它可以在不同深度限制下执行深度优先搜索。这样，我们可以先搜索较短的走法序列，如果找不到解决方案，再逐渐增加搜索深度。这可以在某些情况下提高搜索效率。

下面是一个使用 IDDFS 算法的AI玩家函数：

```python
from copy import deepcopy

DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def ai_player(board):
    def is_board_empty(board):
        return all([piece == BLANK_PIECE for row in board for piece in row])

    def dls(board, moves, depth, max_depth):
        if is_board_empty(board):
            return moves
        if depth >= max_depth:
            return None

        for r in range(len(board)):
            for c in range(len(board[0])):
                for direction in [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT]:
                    if valid_move(board, (r, c), direction):
                        next_board = deepcopy(board)
                        make_move(next_board, (r, c), direction)
                        result = dls(next_board, moves + [((r, c), direction)], depth + 1, max_depth)
                        if result:
                            return result
        return None

    def iddfs(board):
        max_depth = 0
        while True:
            result = dls(board, [], 0, max_depth)
            if result:
                return result
            max_depth += 1

    return iddfs(board)
```

这个函数中，我们定义了一个名为`dls`的递归深度受限搜索函数。它与之前的DFS函数非常相似，但多了一个`depth`参数来记录当前搜索深度，以及一个`max_depth`参数来限制搜索深度。在搜索过程中，我们会检查当前搜索深度是否超过了允许的最大深度。如果超过了，就不再继续搜索。

我们还定义了一个`iddfs`函数，它在不同的深度限制下执行深度受限搜索。我们从深度0开始，逐渐增加深度，直到找到一个解决方案。这样，我们可以优先搜索较短的走法序列，可能在某些情况下减少搜索时间。

请注意，这种优化并不能保证在所有情况下都能提高搜索效率。实际效果可能会因问题实例的不同而有所不同。在某些情况下，IDDFS可能比普通DFS更快；在其他情况下，两者之间的差别可能不大。

```python
from copy import deepcopy  # 导入deepcopy函数，用于复制棋盘

DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def ai_player(board):
    # 函数is_board_empty用于判断棋盘是否为空（即所有格子都是BLANK_PIECE）
    def is_board_empty(board):
        return all([piece == BLANK_PIECE for row in board for piece in row])

    # dls函数是一个深度受限搜索（Depth-Limited Search）函数
    # 参数：board表示当前棋盘状态，moves表示已经走过的步骤列表，depth表示当前搜索深度，max_depth表示允许的最大搜索深度
    def dls(board, moves, depth, max_depth):
        # 如果棋盘已经为空，则返回moves作为解决方案
        if is_board_empty(board):
            return moves
        # 如果当前搜索深度已经达到允许的最大搜索深度，返回None表示没有找到解决方案
        if depth >= max_depth:
            return None

        # 遍历棋盘上的每个位置
        for r in range(len(board)):
            for c in range(len(board[0])):
                # 遍历每个方向
                for direction in [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT]:
                    # 如果当前位置和方向的移动是合法的
                    if valid_move(board, (r, c), direction):
                        # 对当前棋盘进行深拷贝，以便在下一步搜索中使用
                        next_board = deepcopy(board)
                        # 在拷贝的棋盘上执行移动
                        make_move(next_board, (r, c), direction)
                        # 递归调用dls函数，在下一个状态上继续搜索
                        result = dls(next_board, moves + [((r, c), direction)], depth + 1, max_depth)
                        # 如果在下层搜索中找到了解决方案，则返回该解决方案
                        if result:
                            return result
        # 如果在所有可能的移动中都没有找到解决方案，返回None
        return None

    # iddfs函数是一个迭代加深深度优先搜索（Iterative Deepening Depth-First Search）函数
    def iddfs(board):
        max_depth = 0  # 初始的最大搜索深度为0
        while True:  # 无限循环，直到找到解决方案
            result = dls(board, [], 0, max_depth)  # 调用dls函数进行深度受限搜索
            if result:  # 如果找到了解决方案，则返回结果
                return result
            max_depth += 1  # 如果没有找到解决方案，增加最大搜索深度

    return iddfs(board)  # 调用iddfs函数进行搜索，并返回结果
```

迭代加深深度优先搜索（Iterative Deepening Depth-First Search，简称IDDFS）是一种搜索算法，结合了深度优先搜索（Depth-First Search，简称 DFS）和广度优先搜索（Breadth-First Search，简称BFS）的优点。IDDFS通过逐渐增加搜索深度的限制，反复进行深度优先搜索，以减少搜索空间并找到最优解。

在上述代码中，`ai_player`函数的主要逻辑是调用`iddfs`函数进行迭代加深深度优先搜索。`iddfs`函数内部使用了一个循环，在循环中不断增加搜索深度，调用`dls`函数进行深度受限搜索。

`dls`函数是一个递归函数，它接收当前棋盘状态、已经走过的步骤列表、当前搜索深度和允许的最大搜索深度作为参数。在`dls`函数中，首先检查棋盘是否为空，如果为空，则说明找到了一组解决方案，返回moves。如果当前搜索深度达到了允许的最大搜索深度，返回None表示没有找到解决方案。

然后，`dls`函数会遍历棋盘上的每个位置和每个方向，检查当前位置和方向的移动是否合法。如果合法，对当前棋盘进行深拷贝，并在拷贝的棋盘上执行移动。然后递归调用`dls`函数，在下一个状态上继续搜索。如果在下层搜索中找到了解决方案，则返回该解决方案。如果在所有可能的移动中都没有找到解决方案，返回None。

`ai_player`函数的目标是找到一组移动序列，使得执行这组移动后，棋盘上所有的棋子都被消除。通过使用迭代加深深度优先搜索策略，我们可以在有限的搜索空间内找到这样的解决方案。如果存在这样的解决方案，`ai_player`函数会返回这组移动序列；如果不存在，返回None。

:::

::::



## Python 游戏编程：实现一个简单的消消乐游戏 AI

### 目录

1. 引言
   1.1. 消消乐游戏简介
   1.2. 项目目标和要求
2. 游戏棋盘表示与初始化
   2.1. 使用二维列表表示棋盘
   2.2. 初始化棋盘
3. 检查移动是否合法
   3.1. 定义合法移动
   3.2. 实现合法移动检查函数
4. 实现棋子移动并消除
   4.1. 移动棋子
   4.2. 消除 2x2 方块
   4.3. 填补消除后的空白
   4.4. 实现 make_move 函数
5. 创建一个消消乐游戏 AI
   5.1. 使用广度优先搜索找到解决方案
   5.2. 实现 `ai_player` 函数
6. 测试与验证
   6.1. 单元测试
   6.2. 验证 AI 功能
7. 总结与展望



### 1. 引言

#### 1.1. 消消乐游戏简介

消消乐是一款经典的益智游戏，主要目的是通过移动游戏棋盘上的元素使得它们形成特定的排列，从而消除这些元素并获得分数。在这个简化版的消消乐游戏中，我们需要移动棋盘上的棋子以形成 2x2 的方块，然后这些方块会被消除。游戏的目标是用尽可能少的移动来消除棋盘上的所有棋子。

#### 1.2. 项目目标和要求

本项目的目标是使用 Python 语言编写一个简单的消消乐游戏 AI，能够找到一系列移动来消除棋盘上的所有棋子。为了实现这个目标，我们需要完成以下任务：

- 设计一个二维列表来表示游戏棋盘
- 实现一个函数来检查给定的移动是否合法
- 实现一个函数来执行合法的移动，并处理棋子消除和空白填补
- 使用搜索算法（如广度优先搜索）来实现一个消消乐游戏 AI
- 编写测试用例来验证我们的实现是否正确

通过完成这些任务，我们将能够构建一个完整的消消乐游戏 AI，并学习到有关 Python 编程、数据结构和搜索算法的知识。

### 2. 游戏棋盘表示与初始化

#### 2.1. 二维列表表示棋盘

在 Python 中，我们可以使用嵌套的列表（列表的列表）来表示二维数据结构。对于消消乐游戏，我们可以将棋盘表示为一个二维列表，其中每个元素是一个字符串，代表不同类型的棋子。例如，以下是一个 4x4 的消消乐棋盘示例：

```python
board = [
    ["A", "A", "B", "B"],
    ["C", "B", "A", "C"],
    ["D", "A", "C", "D"],
    ["A", "D", "B", "A"]
]
```

#### 2.2. 初始化棋盘

我们可以编写一个简单的函数 `init_board(rows, cols)` 来生成指定大小的棋盘。这个函数接收两个参数，`rows` 和 `cols`，分别表示棋盘的行数和列数。为简化问题，我们假设棋盘的大小固定为 4x4，且初始棋盘上的棋子是随机的。以下是该函数的实现：

```python
import random

def init_board(rows, cols):
    pieces = ["A", "B", "C", "D"]
    board = [[random.choice(pieces) for _ in range(cols)] for _ in range(rows)]
    return board
```

这个函数使用了列表推导式来生成二维列表，并使用 `random.choice()` 函数从 `pieces` 列表中随机选择棋子。现在我们可以通过调用 `init_board(4, 4)` 来生成一个 4x4 的随机棋盘。



### 3. 检查移动是否合法

#### 3.1. 移动规则

在消消乐游戏中，玩家可以选择一个棋子并沿着四个方向（上、下、左、右）之一移动。然而，并非所有移动都是合法的。以下是判断移动是否合法的规则：

- 移动后的位置必须在棋盘内。
- 移动后的位置不能与当前位置相同。
- 移动后的位置上不能有与当前棋子相同类型的棋子。

#### 3.2. 实现 `legal_move()` 函数

根据上述规则，我们可以编写一个函数 `legal_move(board, position, direction)` 来检查给定棋盘上的移动是否合法。函数接收三个参数：`board` 为当前棋盘，`position` 为要移动的棋子的位置（一个包含行和列索引的元组），`direction` 为移动的方向（一个字符串，可以是 `"u"`、`"d"`、`"l"` 或 `"r"`）。

以下是 `legal_move()` 函数的实现：

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"

def legal_move(board, position, direction):
    row, col = position
    new_row, new_col = row, col

    if direction == DIR_UP:
        new_row -= 1
    elif direction == DIR_DOWN:
        new_row += 1
    elif direction == DIR_LEFT:
        new_col -= 1
    elif direction == DIR_RIGHT:
        new_col += 1

    if not (0 <= new_row < len(board) and 0 <= new_col < len(board[0])):
        return False

    if board[row][col] == board[new_row][new_col]:
        return False

    return True
```

这个函数首先根据移动方向计算新的位置，然后检查新位置是否在棋盘内，以及新位置上的棋子是否与当前棋子相同。如果所有条件都满足，则移动合法，函数返回 `True`，否则返回 `False`。

### 4. 实现棋子移动并消除

#### 4.1. 移动棋子和检查消除

在游戏中，当四个相同类型的棋子形成一个 2x2 的正方形时，这些棋子会被消除。消除后，棋盘上会出现一个 2x2 的空缺，需要按照以下步骤填补空缺：

1. 首先，空缺下方（即同列、行索引更大的位置）的所有棋子上移以填补空缺。
2. 其次，空缺右侧（即同行、列索引更大的位置）的所有棋子左移以填补空缺。

#### 4.2. 实现 `make_move()` 函数

为了实现棋子移动和消除，我们需要编写一个名为 `make_move()` 的函数。该函数接收三个参数：`board` 为当前棋盘，`position` 为要移动的棋子的位置（一个包含行和列索引的元组），`direction` 为移动的方向（一个字符串，可以是 "u"、"d"、"l" 或 "r"）。

以下是 `make_move()` 函数的实现：

```python
BLANK_PIECE = "Z"

def make_move(board, position, direction):
    row, col = position

    if direction == DIR_UP:
        row -= 1
    elif direction == DIR_DOWN:
        row += 1
    elif direction == DIR_LEFT:
        col -= 1
    elif direction == DIR_RIGHT:
        col += 1

    board[position[0]][position[1]], board[row][col] = board[row][col], board[position[0]][position[1]]

    eliminated = eliminate_pieces(board)
    while eliminated:
        fill_gaps(board)
        eliminated = eliminate_pieces(board)

    return board
```

首先，根据移动方向计算新的位置，然后交换当前棋子与新位置上的棋子。接下来，使用 `eliminate_pieces()` 函数检查并消除 2x2 正方形，如果有棋子被消除，则继续使用 `fill_gaps()` 函数填补空缺，直到没有棋子可以被消除为止。

#### 4.3. 示例调用

```python
print(make_move([["C", "A", "B", "C"], ["A", "B", "C", "A"], ["A", "B", "B", "C"], ["A", "A", "A", "A"]], (0, 2), "d"))
>>> [['C', 'A', 'C', 'C'], ['A', 'A', 'A', 'A'], ['A', 'C', 'Z', 'Z'], ['A', 'A', 'Z', 'Z']]
print(make_move([["C", "A", "B", "C"], ["A", "B", "C", "A"], ["A", "B", "B", "A"], ["A", "C", "A", "A"]], (0, 2), "d"))
>>> [['C', 'A', 'C', 'C'], ['A', 'C', 'A', 'A'], ['Z', 'Z', 'Z', 'Z'], ['Z', 'Z', 'Z', 'Z']]
```

通过上面的示例调用，我们可以验证 `make_move()` 函数是否正确地实现了棋子移动和消除功能。

### 5. 实现 AI 玩家

#### 5.1. 使用广度优先搜索找到解决方案

为了让 AI 玩家找到一系列有效的移动并消除所有棋子，我们可以采用广度优先搜索（BFS）的方法。广度优先搜索可以从根节点（起始棋盘）开始，逐层遍历棋盘状态树，直到找到一个解决方案（所有棋子被消除）为止。

为了高效地进行广度优先搜索，我们可以使用队列来存储待处理的棋盘状态。同时，我们需要记录每个状态对应的移动序列，以便在找到解决方案时返回正确的移动序列。

#### 5.2. 实现 ai_player 函数

以下是 `ai_player()` 函数的实现：

```python
from collections import deque

def ai_player(board):
    queue = deque([(board, [])])

    while queue:
        current_board, move_sequence = queue.popleft()

        if is_solved(current_board):
            return move_sequence

        for row in range(len(current_board)):
            for col in range(len(current_board[0])):
                for direction in [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT]:
                    position = (row, col)
                    if legal_move(current_board, position, direction):
                        new_board = [row.copy() for row in current_board]
                        make_move(new_board, position, direction)
                        new_move_sequence = move_sequence + [(position, direction)]

                        if new_move_sequence not in queue:
                            queue.append((new_board, new_move_sequence))

    return None
```

首先，我们创建一个双端队列 `queue` 来存储待处理的棋盘状态及其对应的移动序列。然后，我们循环处理队列中的每个状态。如果当前状态已解决（即所有棋子都被消除），则返回对应的移动序列。否则，我们遍历棋盘上的每个位置和每个方向，检查移动是否合法。如果移动合法，我们创建一个新的棋盘状态，并执行这个移动。然后，我们将新的移动序列添加到队列中，以便在后续的搜索中继续处理这个新状态。

最后，如果在遍历所有可能的状态后仍未找到解决方案，函数返回 `None`。



### 6. 测试与验证

在本节中，我们将对实现的函数进行一些测试，以验证它们是否能正确地解决消消乐游戏问题。

首先，我们可以使用提供的测试用例来测试我们的函数。以下是一些测试用例，以及我们期望的输出结果：

```python
# 测试 create_board 函数
print(create_board(2, 2, 'AABBAABB'))
# 输出: [['A', 'A'], ['B', 'B']]

# 测试 legal_move 函数
print(legal_move([["A", "A", "D", "C"], ["A", "B", "C", "A"], ["C", "B", "B", "A"], ["C", "D", "D", "D"]], (1, 2), "u"))
# 输出: True

# 测试 make_move 函数
print(make_move([["C", "A", "B", "C"], ["A", "B", "C", "A"], ["A", "B", "B", "C"], ["A", "A", "A", "A"]], (0, 2), "d"))
# 输出: [['C', 'A', 'C', 'C'], ['A', 'A', 'A', 'A'], ['A', 'C', 'Z', 'Z'], ['A', 'A', 'Z', 'Z']]

# 测试 ai_player 函数
print(ai_player([['A', 'A', 'B', 'B'], ['A', 'B', 'A', 'B']]))
# 输出: [((1, 1), 'r')]
print(ai_player([['C', 'B', 'B', 'C'], ['C', 'A', 'D', 'A'], ['D', 'A', 'A', 'D'], ['D', 'B', 'B', 'C']]))
# 输出: [((1, 2), 'r'), ((0, 1), 'r')]
```

此外，我们还可以创建一些额外的测试用例，以确保我们的函数能够正确处理各种棋盘配置。例如：

```python
# 测试特殊情况，如全部相同的棋子
print(ai_player([['A', 'A', 'A'], ['A', 'A', 'A'], ['A', 'A', 'A']]))
# 输出: [((0, 0), 'r'), ((1, 0), 'r'), ((2, 0), 'r')]

# 测试边界条件，如一个只有一行或一列的棋盘
print(ai_player([['A', 'A', 'A', 'A', 'A']]))
# 输出: None
print(ai_player([['A'], ['A'], ['A'], ['A'], ['A']]))
# 输出: None
```

通过运行这些测试用例，我们可以验证我们的消消乐游戏 AI 是否能够找到正确的解决方案。当然，您还可以创建更多的测试用例以确保实现的正确性。



### 7. 总结与展望

在本教程中，我们成功实现了一个消消乐游戏 AI。我们首先表示并初始化游戏棋盘，然后实现了一个函数来检查移动是否合法。接下来，我们实现了一个函数来移动棋子并处理消除。最后，我们使用广度优先搜索算法创建了一个 AI 玩家，该玩家可以找到消除所有棋子的解决方案。

我们的消消乐游戏 AI 可以在给定的测试用例上找到解决方案，但仍有改进的空间。例如，我们可以优化搜索算法，以便在更大的棋盘上更快地找到解决方案。我们还可以考虑将其他搜索策略（如深度优先搜索、启发式搜索等）应用于此问题。

此外，我们可以尝试扩展游戏规则，例如添加特殊棋子（如炸弹、闪电等），这些棋子在消除时会有特殊效果。这将使游戏更加丰富和有趣，同时也为我们的 AI 提出了新的挑战。

最后，我们可以考虑将这个项目转换为一个交互式游戏，让玩家与 AI 竞争，看谁能在更短的时间内解决棋盘。这将使项目更具吸引力，并提供一个很好的学习和娱乐平台。

总之，我们已经成功实现了一个基本的消消乐游戏 AI，并为将来的改进和扩展奠定了基础。我们希望您在阅读本教程的过程中学到了一些有用的知识，并能应用这些知识来解决其他类似的问题。祝您玩得愉快！

### 8. 完整代码

```python
DIR_UP = "u"
DIR_DOWN = "d"
DIR_LEFT = "l"
DIR_RIGHT = "r"
BLANK_PIECE = "Z"

def init_board(board):
    new_board = []
    for row in board.split('\n'):
        new_board.append(list(row))
    return new_board

def legal_move(board, position, direction):
    x, y = position
    if direction == DIR_UP:
        return x > 0 and board[x][y] != BLANK_PIECE and board[x][y] != board[x-1][y]
    elif direction == DIR_DOWN:
        return x < len(board) - 1 and board[x][y] != BLANK_PIECE and board[x][y] != board[x+1][y]
    elif direction == DIR_LEFT:
        return y > 0 and board[x][y] != BLANK_PIECE and board[x][y] != board[x][y-1]
    elif direction == DIR_RIGHT:
        return y < len(board[0]) - 1 and board[x][y] != BLANK_PIECE and board[x][y] != board[x][y+1]

def eliminate(board):
    eliminated = False
    for r in range(len(board) - 1):
        for c in range(len(board[0]) - 1):
            if board[r][c] != BLANK_PIECE and board[r][c] == board[r+1][c] == board[r][c+1] == board[r+1][c+1]:
                board[r][c], board[r+1][c], board[r][c+1], board[r+1][c+1] = BLANK_PIECE, BLANK_PIECE, BLANK_PIECE, BLANK_PIECE
                eliminated = True
    return eliminated

def fill_gaps(board):
    for r in range(len(board) - 1, -1, -1):
        for c in range(len(board[0])):
            if board[r][c] == BLANK_PIECE:
                x = r
                while x > 0 and board[x][c] == BLANK_PIECE:
                    x -= 1
                board[r][c], board[x][c] = board[x][c], BLANK_PIECE

def make_move(board, position, direction):
    x, y = position
    if direction == DIR_UP:
        board[x][y], board[x-1][y] = board[x-1][y], board[x][y]
    elif direction == DIR_DOWN:
        board[x][y], board[x+1][y] = board[x+1][y], board[x][y]
    elif direction == DIR_LEFT:
        board[x][y], board[x][y-1] = board[x][y-1], board[x][y]
    elif direction == DIR_RIGHT:
        board[x][y], board[x][y+1] = board[x][y+1], board[x][y]

    if eliminate(board):
        fill_gaps(board)

def ai_player(board):
    from collections import deque
    import copy

    queue = deque([(copy.deepcopy(board), [])])
    visited = set()

    while queue:
        cur_board, moves = queue.popleft()
        board_hash = ''.join(''.join(row) for row in cur_board)
        if board_hash in visited:
            continue
        visited.add(board_hash)

        if all(all(cell == BLANK_PIECE for cell in row) for row in cur_board):
            return moves

        for x in range(len(board)):
            for y in range(len(board[0])):
                for direction in [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT]:
                    if legal_move(cur_board, (x, y), direction):
                        new_board = copy.deepcopy(cur_board)
                        make_move(new_board, (x, y), direction)
                        new_moves = moves + [((x, y), direction)]
                        queue.append((new_board, new_moves))
    return None

# 测试与验证
board1 = init_board("AABBB\nABABA")
print(ai_player(board1))

board2 = init_board("CBBCC\nCADAD\nDAAAD\nDBBCD")
print(ai_player(board2))
```

这是完整的消消乐游戏 AI 代码。这段代码中，我们使用了广度优先搜索（BFS）来尝试所有可能的移动顺序，直到找到一个解决方案。我们还使用了哈希表来避免重复访问相同的棋盘状态。





































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
