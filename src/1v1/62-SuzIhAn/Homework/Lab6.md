---
title: Lab 6
icon: python
date: 2023-10-29 00:18:56
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

For this lab period, please do the following exercise.

## Making a rocket

For this exercise, you'll do a little more ascii art! In this exercise, you'll need to pull some of the functionality out of `main()` into its own functions.

You'll write a program called `make_a_rocket.py` that prints out a rocket consisting of a nose cone, a fuselage, and a tail fin structure. The program will take 2 required arguments and one optional argument. The two required arguments are numbers representing the width of the rocket in characters, and the length of the rocket's fuselage in square segments. The third argument will be either left blank (not given) or will be the word "striped". The nose cone and tail structure are composed of `*` characters. The fuselage is made up of `X` characters by default. If the `striped` argument is passed when the program is executed, each segment of the fuselage will be drawn half with `X`s and half with `_` characters, resulting in a striped appearance.

For the tail, the tapered portion will range from approximately half the width (within asterisk one over or under half the width), to the full width. The bottom of the tail is always 2 rows at full width. The tail should be centered.

For example, with the arguments 7 and 2, the rocket is 7 characters wide, and its fuselage is made up of 2 7x7 squares, all drawn with `X` characters:

```python
$ python make_a_rocket.py 7 2
   *
  ***
 *****
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
XXXXXXX
  ***
 *****
*******
*******
```

In the case of 11 and 3 with the `striped` option passed, the result is:

```python
$ python make_a_rocket.py 11 3 striped
     *
    ***
   *****
  *******
 *********
___________
___________
___________
___________
___________
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
___________
___________
___________
___________
___________
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
___________
___________
___________
___________
___________
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
XXXXXXXXXXX
   *****
  *******
 *********
***********
***********
```

If an even value is passed for the width, the tip will be 2 asterisks wide.

```python
$ python make_a_rocket.py 8 2 striped

   **
  ****
 ******
________
________
________
________
XXXXXXXX
XXXXXXXX
XXXXXXXX
XXXXXXXX
________
________
________
________
XXXXXXXX
XXXXXXXX
XXXXXXXX
XXXXXXXX
  ****
 ******
********
********
```

### Implementation

You'll need to have a conditional to check for the length of `sys.argv` array, so that you can treat the optional argument properly.

In the definition of a function, an argument can be made optional by setting a default for its value in the definition of the function. For example the function

```python
def my_function(optional_argument="Nothing"):
    print(optional_argument)
```

will print the string "Nothing" if it is called with no argument, but if it is called with a string argument it will print that string instead.

Python has a special value `None` which has a false boolean value and is sometimes used as a null default for optional arguments.

You should define at least three functions in addition to `main()`: one function should probably define the nose cone configuration, one function should probably define the tail configuration, and one (or more) functions will be necessary to define the segment structure for the fuselage. Try to minimize code duplication and break the functionality down to its minimal units by using functions. The `main()` function should be as minimal as you can make it.

### Submission

Submit `make_a_rocket.py` on Canvas.



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

