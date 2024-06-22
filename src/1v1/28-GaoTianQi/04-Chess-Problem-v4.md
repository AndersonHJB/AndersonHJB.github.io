---
title: Chess Problem v4
date: 2023-03-17 16:06:25
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

## Chess Problem v4

> 象棋问题v4

OK, final stop in chess land, extending `check_move()` again. Previously, your function took two separate arguments: a column and a row value. Now you will rewrite the function to accept the board position as a single `str` argument. In other words, the input to `check_move(position)` will now be a single position string such as `'B5'`, that encodes both the column and the row designator.

> 好的，象棋世界的最后一站，再次扩展' check_move() '。以前，函数有两个单独的参数:一个列值和一个行值。现在您将重写函数，以接受董事会位置作为单个' str '参数。换句话说，' check_move(position) '的输入现在将是一个单一的位置字符串，例如" B5' '，它对列指示符和行指示符进行了编码。

- When both the coordinates in `position` are valid, for example, `'c4'`, the function returns `'The piece is moved to C4.'`.
- 当“position”中的两个坐标都有效时，例如，“c4”，函数返回“the piece is moved to c4 .' '”。
- If `position` has too many or too few characters, return `'The position is not valid.'`
- 如果“position”字符过多或过少，则返回“位置无效”。
- If the column designator is out of range (regardless of whether the row designator is valid or not) return `'The column value is not in the range a-h or A-H!'`.
- 如果列指示符超出范围(不管行指示符是否有效)，返回“列值不在范围a-h或a-h !”
- Otherwise, if the row designator is out of range, return `'The row value is not in the range 1 to 8!'`.
- 否则，如果行指示符超出范围，则返回“行值不在1到8的范围内!”

Note that, irrespective of the casing of the column value, your code should output the value in upper case. Also note that there is no guarantee that the input is made up of exactly two characters.

> 请注意，无论列值的大小写如何，代码都应该以大写输出值。还要注意，不能保证输入恰好由两个字符组成。

Your function should work like this:

> 你的函数应该像这样工作:

```python
>>> check_move('B4')
'The piece is moved to B4.'
>>> check_move('b4')
'The piece is moved to B4.'
```

and like this with an invalid input:

> 像这样输入无效:

```python
>>> check_move('I4')
'The column value is not in the range a-h or A-H!'
>>> check_move('F9')
'The row value is not in the range 1 to 8!'
>>> check_move('A')
'The position is not valid.'
```

## Answer

```python
def check_move(position):
    # 如果位置字符串长度不是2个字符，返回无效位置错误
    if len(position) != 2:
        return 'The position is not valid.'
    
    # 分别将位置字符串中的第一个字符作为列，第二个字符作为行
    column, row = position[0], position[1]

    # 如果列值不在 a-h 或 A-H 的范围内，返回列值范围错误
    if not (column.lower() >= 'a' and column.lower() <= 'h'):
        return 'The column value is not in the range a-h or A-H!'
    # 如果行值不在1到8的范围内，返回行值范围错误
    elif not (row >= '1' and row <= '8'):
        return 'The row value is not in the range 1 to 8!'
    # 如果列和行值都在有效范围内，返回移动到指定位置的消息
    else:
        return f'The piece is moved to {column.upper()}{row}.'

# Test cases
print(check_move('B4'))  # 'The piece is moved to B4.'
print(check_move('b4'))  # 'The piece is moved to B4.'
print(check_move('I4'))  # 'The column value is not in the range a-h or A-H!'
print(check_move('F9'))  # 'The row value is not in the range 1 to 8!'
print(check_move('A'))   # 'The position is not valid.'
```



```python
def check_move(position):
    if len(position) > 2 or len(position) < 2:
        return 'The position is not valid.'
    elif position[0].lower() in ['a','b','c','d','e','f','g','h'] and 1 <= int(position[1]) <= 8:
        return f'The piece is moved to {position[0].upper()}{position[1]}.'
    elif position[0].lower() not in ['a','b','c','d','e','f','g','h'] and 1 <= int(position[1]) <= 8:
        return 'The column value is not in the range a-h or A-H!'
    elif position[0].lower() in ['a','b','c','d','e','f','g','h'] and int(position[1]) not in (1,8):
        return 'The row value is not in the range 1 to 8!'
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
