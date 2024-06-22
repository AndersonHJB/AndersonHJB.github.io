---
title: Lab 2
icon: python
date: 2023-10-28 20:33:21
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

### Topics

1. Basic arithmetic operations and expressions
2. "Casting" types (converting values from one type to another)

To get started, create a directory called `lab02` inside your `cs5001` directory.

### Programming exercises

1. Click [hereLinks to an external site.](https://www.wunderground.com/weather/us/wa/seattle) to go to Weather Underground for Seattle, WA. This website compiles a variety of climate data such as high and low temperatures, pressure, visibility, precipitation, etc.

    Use the data provided on this website to perform arithmetic computations using the four operators: +, −, ∗, and /. Create a program called `weather.py` which calculates the following and prints out the results (you can enter the input values into your program by hand):

    - What is the difference between the highest and the lowest temperature values predicted for the 10 day forecast?
    - What is the average temperature at noon predicted for the 10 day forecast?
    - What is the highest temperature predicted for the 10 day forecast, converted from Fahrenheit to Celsius?

2. Using `input` you can prompt the user for input on the command line. Write a program called `adder.py` which takes input from the user in the form of numerical values, and prints out a sentence reporting the sum of the values, like this:

```python
 tmullen$ python adder.py
 Enter a first value: 5
 Enter a second value: 6
 The sum of 5 + 6 is 11
```

Make sure that the `+` operator treats your numerical values as integers where necessary, but that it concatenates strings appropriately where it should. The numerical values you input on the command line will be strings, and you'll need to cast them appropriately to do arithmetic operations on them. Use the appropriate built-in type constructor (listed [hereLinks to an external site.](https://docs.python.org/3/library/functions.html)) to create values of the appropriate types.

3. Defining functions is a way to organize the behavior of a program. One useful approach to encapsulating a program's behavior is to define a function called `main` containing the program's instructions, and tell Python to call this function as soon as it executes the program. Try this with your `adder.py` code. Refactor your adder so that it is called from within the body of `main`, shown below. The code as written will run but it won't do anything. `pass` is a special word in Python that does nothing, but ensures that Python regards a single line indented block as syntactically acceptable (without `pass` here, this would be a syntax error).

    The code following the `#` sign is comment code. Any time the `#` appears in a python program, the interpreter simply ignores everything to the right of the symbol until the end of the line. So you can write human-readable comments that are ignored by the program.

```python
 def main():
     pass # Delete the 'pass' and replace it with your code

 main() 
```

4. You can call the program in the same way you did previously. It should behave exactly like the previous version of the program behaved.

5. Write a program called `euclidean_distance.py` that prompts the user for four numerical values representing two 2-dimensional points (so, `x1`, `y1`, `x2`, and `y2`) and then calculates the Euclidean distance between the two points using the [Pythagorean theoremLinks to an external site.](https://en.wikipedia.org/wiki/Pythagorean_theorem).

    You'll need to calculate square roots. This is possible to do in a couple of ways. You could use `**` (the exponentiation operator) to the power of 0.5. This may not be the most readable and intuitive way to represent square roots, though. I'd recommend using `sqrt()` from the [`math`Links to an external site.](https://docs.python.org/3/library/math.html) library. In order to do this, you'll need to call `import math` at the beginning of your program. Read the Python docs for more details about `math`.

    As in the previous example, wrap this code in a `main` function, and call it with `main()` at the bottom of the code.

6. For a bit more practice reading the docs for `math`, write a program called `trig_functions.py` that prompts the user for an angle in degrees, and prints out the [sine and cosine valuesLinks to an external site.](https://en.wikipedia.org/wiki/Trigonometric_functions) for the angle. Don't calculate/derive these by hand, that's what computers are for! Use the built in functions in `math` to calculate the answers for you based on the angle. Once again, wrap your code in a `main` function and call it with `main()`.

    Below are some sample correct inputs and outputs. Make sure you test your program on these values to make sure the solution is correct.

```python
 tmullen$ python trig_functions.py
 Enter an angle: 0
 The cosine of 0.0 is 1.0
 The sine of 0.0 is 0.0
 tmullen$ python trig_functions.py
 Enter an angle: 90
 The cosine of 90.0 is 6.123233995736766e-17
 The sine of 90.0 is 1.0
 tmullen$ python trig_functions.py
 Enter an angle: 45
 The cosine of 45.0 is 0.7071067811865476
 The sine of 45.0 is 0.7071067811865475
```

But wait a minute! The cosine of 90 is zero! Why is Python telling us that it's 6.123233995736766e-17? What does that even mean? First, the notation. Python uses scientific (exponent) notation by default for very large and very small numbers. Exponent notation consists of a number followed by `e`, followed by the power of ten necessary to represent the intended value. For example, if we type the following values into the Python REPL console:

```python
 >>> 5e+0
 5.0
 >>> 5e-0
 5.0
 >>> 5e+1
 50.0
 >>> 5e-1
 0.5
```

These can be read as "five times 10 to the power of...". The first two cases are both zero (10 to the power of zero is 1). The second two cases 5 times 10 and 5 times 10 to the power of -1 (i.e. 5/10).

So we can now see that 6.123233995736766e-17 is a *very small* number. In fact, it's approximately zero, and it's the number that Python arrives at when it uses the `math` library's cosine function on 90 degrees (pi/2 radians). The problem in this case is the approximation of pi that Python uses.

This underscores a sometimes inconvenient truth: Computers deal with finite, fixed approximations of numbers. They don't deal directly with real numbers. When dealing with real numbers, we often need to make choices about the degree of precision we are interested in. If you need to test for a zero-valued cosine in a program, for example, you might need to specify some very small value and assume that if the result is less than this value it is close enough to zero for your purposes.

### Submission

Make the usual commit to GitHub, and upload `weather.py`, `adder.py`, `euclidean_distance.py`, and `trig_functions.py` to Canvas.











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

