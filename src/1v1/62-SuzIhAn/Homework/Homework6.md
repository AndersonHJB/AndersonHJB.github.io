---
title: Homework 6
icon: python
date: 2023-10-29 00:20:59
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

### Homework 6

## Part 1: Book questions

Create a text file called `hw6_book_exercises.txt`. Answer 7.7 Exercises 1 through 10 from the textbook.

## Part 2: Programming exercises

### Programming exercise 1: Triangular number list

This program will revisit the concept of ["triangular numbers"Links to an external site.](https://en.wikipedia.org/wiki/Triangular_number) from a previous assignment. You may re-use code from your solution to that assignment if you wish.

This time, you'll write a program called `triangular_number_list.py` that repeatedly prompts the user for numbers (until the user inputs `done`) and adds the corresponding triangular number to a list. When the user finally inputs `done` the full list is printed out. You do not have to check for ill-formed input. You can assume that the user will always either input an integer or the word `done`.

A sample interactive session of this program could look like this:

```python
$ python triangular_number_list.py
Enter a number, or enter 'done': 5
The triangular number for 5 is 15
Enter another number, or enter 'done': 2
The triangular number for 2 is 3
Enter another number, or enter 'done': 10
The triangular number for 10 is 55
Enter another number, or enter 'done': 3
The triangular number for 3 is 6
Enter another number, or enter 'done': done
[15, 3, 55, 6]
```

The calculation of the triangular numbers themselves should be familiar from your previous work. This time, however, remove the code that calculates these values into its own function, called `triangular_number()`.

Read [this documentationLinks to an external site.](https://docs.python.org/3.7/tutorial/datastructures.html) for lists if you're unsure how to add elements to a list.

Wrap your program in a `main` function, as always.

### Programming exercise 2: Primary arithmetic

For this exercise you'll write a program called `carry.py` that prompts the user for two positive integers of any length and adds them together. In addition to adding them, it also counts the number of times the "carry" operation needs to be carried out.

For example, in this case, none of the column additions exceed 9, so no digits need to be carried:

```python
$ python carry.py
Enter the first number: 16
Enter the second number: 21
16 + 21 = 37
Number of carries: 0
```

In this case, the 5 and the 8 exceed 9, so a 1 is carried into the next column:

```python
$ python carry.py
Enter the first number: 275
Enter the second number: 18
275 + 18 = 293
Number of carries: 1
```

In this example, all columns add up to 10 or greater, so there is a carry on each column:

```python
$ python carry.py
Enter the first number: 981
Enter the second number: 999999
981 + 999999 = 1000980
Number of carries: 6
```

#### Hints

Counting carries is not something that is built in to Python's integer arithmetic functionality, so you'll have to implement this manually, adding the numbers column by column. To do this, you will want to represent digits in a sequentially accessible way (lists!). It may be helpful to think of the problem in terms of four rows of digits, each represented by a list. The two original numbers are each rows, the solution is a row, and the sequence of carries can be thought of as another row. By using list indices, you can easily access corresponding digits in each of the four relevant rows.

String casting can also be useful. If you want to easily break a multi-digit integer into a list of digits, you can cast it first to a string and then to a list (it won't work to try to cast a number straight to a list).

For this exercise, you must define at least two functions aside from `main()`. From now on, try to think about minimizing the amount of functionality you leave to `main()`. Ideally, `main()` should only be a few lines of code. Break as many operations as you can into their own functions.

### Programming exercise 3: Printing a cube

More ascii art! Having exhausted the 2D primitive shapes, you'll take it to the next dimension with this excercise. Write a program called `print_cube.py` that prompts the user for a numerical value that is a multiple of 2 and prints out a cube as shown below.

In the case of 4:

```bash
$ python print_cube.py
Input cube size (multiple of 2): 4
   +--------+
  /        /|
 /        / |
+--------+  |
|        |  |
|        |  +
|        | /
|        |/
+--------+
```

In the case of 2:

```bash
$ python print_cube.py
Input cube size (multiple of 2): 2
  +----+
 /    /|
+----+ |
|    | +
|    |/
+----+
```

In the case of 10:

```bash
$ python print_cube.py
Input cube size (multiple of 2): 10
      +--------------------+
     /                    /|
    /                    / |
   /                    /  |
  /                    /   |
 /                    /    |
+--------------------+     |
|                    |     |
|                    |     |
|                    |     |
|                    |     |
|                    |     +
|                    |    /
|                    |   /
|                    |  /
|                    | /
|                    |/
+--------------------+
```

#### Drawing the cube

You'll draw the cube using the following characters: `+` for cube corners, `-` for horizontal lines, `|` for vertical lines, and `/` for diagonals. Specifically, for a cube of size *n*, draw the cube as follows:

- A horizontal edge is drawn with `-` and requires 2*n* characters.
- A vertical edge is drawn with `|` and requires *n* characters.
- A vertical edge is drawn with `/` and requires *n*/2 characters.
- Corners are drawn with `+`. Corners should line up with vertical and horizontal edges.

Use at least one function defined in addition to `main()`. From now on, try to think about minimizing the amount of functionality you leave to `main()`. Ideally, `main()` should only be a few lines of code.

## Style Guide

Please familiarize yourself with the [PEP 8 Python Style guideLinks to an external site.](https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds). These are excellent tips for writing clear Python code and you should follow this style.

Before you submit your assignment, go through the checklist below and make sure your code conforms to the style guide.

- No unused variables or commented-out code is left in the class
- Your code is appropriately commented
- All numbers have been replaced with constants (i.e. no "magic numbers").
- Proper capitalization of any names used: snake_case for ordinary variables and functions, CapWords for class names, and ALL_CAPS for constants
- Use white space to separate different sections of your code (follow the PEP8 linter's guidance)

### Using the Pycodestyle linter

In addition to the checklist above, use the Pycodestyle linter in your editor to make sure you're catching small style issues of spacing and consistency. The graders will use the PEP8 linter as a guide for enforcing PEP8 style, which should simplify the process for them and you. It's easy to track down issues with the linter and you should make sure that the linter report is completely error and warning free before submitting.

## Submitting

Please submit `hw6_book_exercises.txt`, `triangular_number_list.py`, `carry.py`, and `print_cube.py` to Canvas.











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

