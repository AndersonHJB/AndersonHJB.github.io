---
title: Lab 4
icon: python
date: 2023-10-29 00:02:03
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - northeastern一对一辅导
    - 东北大学Python辅导
    - 东北大学Python一对一辅导
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

### Programming exercise 1: Drawing a rectangle

For this exercise, you'll use one or more `for` loops. Write a program called `rectangle.py` that asks the user for a symbol they would like to use to make a rectangle. Here, the symbol can be any single character (e.g., &, #, +, n, s, 3). Also, ask the user for the rectangle’s width and height. For example, if the user enters `+` for the symbol, `10` for the width, and `5` for the height, your program should print the following rectangle to the output:

```python
++++++++++
+        +
+        +
+        +
++++++++++
```

If the user enters `&`, `20` and `4` the triangle will look like this:

```python
&&&&&&&&&&&&&&&&&&&&
&                  &
&                  &
&&&&&&&&&&&&&&&&&&&&
```

If the user enters a value that is lower than 2 for either width or height, your program should give a message indicating that the value is too small.

### Programming exercise 2: Christmas tree

Write a program called `christmas_tree.py` that uses a `for` loop to draw a Christmas tree along the lines of the following:

```python
   *
  / \
 /   \
/_____\
```

The left edge of the tree is made up of `/` characters and the right edge is made up of `\` characters, the base (between the two edge characters) is made up of underscores (`_`), and the top of the tree is an asterisk.

Take an odd-valued input of 3 or greater from the user representing the width if the base of the tree. For the example above, the value would be 7. If the user inputs an even number, give them another chance to input a different (odd) number.

An input of 3 would yield the following tree:

```python
 *
/_\
```

An input of 9 would yield:

```python
    *
   / \
  /   \
 /     \
/_______\
```

### Programming exercise 3: Magic square validator

A 3x3 magic square is a 3 by 3 square arrangement of digits between 1 and 9 (without duplicates) such that the sum of any 3 digits horizontally, vertically, or diagonally equals 15. You can read more about these on [the Wikipedia page for magic squaresLinks to an external site.](https://en.wikipedia.org/wiki/Magic_square).

Your program will take a potential magic square from user input and validate whether the input is a magic square.

Take the input as three separate lines from the user (you can use a loop to get three lines one after the other. Using `input()` without an argument will let the user input another line without any printed prompt.) Each line should consist of three numerical characters. Once all three lines have been entered the program will evaluate whether or not the three rows form a magic square and report the result. For example, in this case, the numbers do add up to 15 in all 8 directions (three horizontal rows, three vertical columns, and two corner-to-corner diagonals):

```python
$ python magic_square_validator.py
Enter a magic number
492
357
816
This is a magic square!
```

If the input values do not add up to 15 in all 8 directions, your program will report that the input square is not a magic square.

```python
$ python magic_square_validator.py
Enter a magic number
123
456
789
Not a magic square!
```

Consider what would need to change to generalize this validator to squares of arbitrary sizes (you don't need to code this for the lab, but please think about what you would do differently). Name the program `magic_square_validator.py`.

### Programming exercise 4: Drawing a circle

Similarly to the examples above, write a short script called `circle.py` that takes a value from the command line and prints out a circle with the radius corresponding to that value. For example, for the value 20, it would print something like this output (Okay, yes, this really renders more as an oval, because vertical spacing makes the characters we're using as pixels taller than they are wide. But the height and the width are the same number of characters, so we'll call it a circle):

```python
$ python circle.py 20

             ooooooooooooo
           ooooooooooooooooo
         ooooooooooooooooooooo
        ooooooooooooooooooooooo
      ooooooooooooooooooooooooooo
     ooooooooooooooooooooooooooooo
    ooooooooooooooooooooooooooooooo
    ooooooooooooooooooooooooooooooo
   ooooooooooooooooooooooooooooooooo
  ooooooooooooooooooooooooooooooooooo
  ooooooooooooooooooooooooooooooooooo
 ooooooooooooooooooooooooooooooooooooo
 ooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooooooooo
 ooooooooooooooooooooooooooooooooooooo
 ooooooooooooooooooooooooooooooooooooo
  ooooooooooooooooooooooooooooooooooo
  ooooooooooooooooooooooooooooooooooo
   ooooooooooooooooooooooooooooooooo
    ooooooooooooooooooooooooooooooo
    ooooooooooooooooooooooooooooooo
     ooooooooooooooooooooooooooooo
      ooooooooooooooooooooooooooo
        ooooooooooooooooooooooo
         ooooooooooooooooooooo
           ooooooooooooooooo
             ooooooooooooo
```

In order to determine where to draw `o`s and where to draw spaces, you'll want to think of each character's position in terms of an *x* and *y* position in a grid. The grid will be about twice the radius high and twice the radius wide (depending on how you handle the center of the circle it may be one off of twice the radius). Use the [Pythagorean theoremLinks to an external site.](https://en.wikipedia.org/wiki/Pythagorean_theorem) to determine whether the distance of each character to the center of the grid is less than the value of the radius. If the distance is less than the radius, then the `o` character will be rendered in that position, otherwise the (empty space) will be rendered in that position. You can use the `sqrt` function from the `math` library (you must import math). Another function you might find useful is the `abs` function (absolute value). This function is built into Python's standard library, so you don't need to import anything to use it.

### Submitting the lab

Submit `rectangle.py`, `christmas_tree.py`, `magic_square_validator.py` and `circle.py` on Canvas.



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

