---
title: Assignment 2：Automatic Crowds
date: 2024-10-03 23:25:58
author: AI悦创
isOriginal: true
icon: blog
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true
 

backToTop: true
toc: true
watermark: true
---

*Nobody goes there anymore. It's too crowded.*

Yogi Berra

You've probably seen movies with crowds of people. While they might sometimes use real people, nowadays crowds are often computer-generated. This gives the film-makers more control over the size and behaviour of the crowd, and probably saves them money as well.

In this assignment, we'll explore how to make a crowd scene using turtle graphics.

**Answer the questions below in order**: later questions depend upon earlier ones. Use *exactly* the function name and parameters as given in the question, and put all your functions into a single Python file named `a2.py`. Please include your name and email at the top of `a2.py` formatted like this:

```python
#
# Full Name:
#  SFU ID #:
# SFU Email:
#
```

When you're done, submit your finished `a2.py` file on Canvas.

## Note on Turtle Graphics

**Don't** use Google Colab for this assignment. The turtle graphics in Colab are different to set up and don't have the same functionality as the standard Python turtle graphics.

Please use IDLE or VS Code to write code with turtle graphics.

## Question 1: Regular Polygons

Write a function called `polygon(n, size)` that uses turtle graphics to draw an $n$-sided [regular polygon](https://en.wikipedia.org/wiki/Regular_polygon) with each side of length `size`.

Use this algorithm:

- Set the turning $\mathit{angle}$ to be $\frac{360}{n}$
- Do the following $n$ times:
    + draw a line of length `size`
    + turn left $\mathit{angle}$ degrees

In addition, please add error checking to your function:
- If $n < 3$, print a helpful error message and return without drawing anything.
- If $size <= 0$, print a helpful error message and return without drawing
  anything.

Here is a pentagon (a 5-sided polygon):

![a pentagon](https://blog.images.bornforthis.cn/docs-images/sha256/f4/f45be2ca007a214f5f8aa8e5d3910a88f2f58fec9a3838fcc6601fdbe5cb44ed.gif)



```python
import turtle

def polygon(n, size):
    # 错误检查：n 必须大于等于 3
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    # 错误检查：size 必须是正数
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    
    angle = 360 / n  # 计算每个内角的度数
    for _ in range(n):
        turtle.forward(size)  # 向前绘制一条边
        turtle.left(angle)    # 左转指定的角度

# 示例：绘制一个五边形
polygon(5, 100)
turtle.done()
```

## Question 2: Jumping

Write a function called `jump_to(x, y)` that moves the turtle to position (`x`, `y`) **without** drawing a line. After the turtle has jumped to (`x`, `y`) its pen should be down and ready to draw.

`turtle.goto(x, y)` will move the turtle to (`x`, `y`), but if the pen is down it will draw a line.

Also, write a function called `jump_to_test()` that uses `jump_to` and `polygon` to draw this picture:

![four pentagons](https://blog.images.bornforthis.cn/docs-images/sha256/55/55d95b0146b00e90172c57f4b31b6b8c102988456ff8a023a84d3162a88b2fec.gif)





```python
import turtle

def jump_to(x, y):
    # 提起画笔，不绘制线条
    turtle.penup()
    # 移动到指定位置
    turtle.goto(x, y)
    # 放下画笔，准备绘制
    turtle.pendown()

def jump_to_test():
    # 清屏并重置海龟状态
    turtle.reset()
    # 定义四个位置坐标
    positions = [(-100, -100), (100, -100), (-100, 100), (100, 100)]
    # 在每个位置绘制一个五边形
    for x, y in positions:
        jump_to(x, y)
        polygon(5, 50)  # 使用之前定义的 polygon 函数，绘制边长为50的五边形
    # 完成绘制
    turtle.done()

def polygon(n, size):
    # 错误检查：n 必须大于等于 3
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    # 错误检查：size 必须是正数
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    
    angle = 360 / n  # 计算每个内角的度数
    for _ in range(n):
        turtle.forward(size)  # 向前绘制一条边
        turtle.left(angle)    # 左转指定的角度

# 运行测试函数
jump_to_test()
```

## Question 3: Circles

Write a function called `circle(radius)` that draws a circle whose radius is `radius`. To draw a circle in turtle graphics, just draw a polygon with lots of sides, say 50 - 100.

**Important** Don't call the `turtle.circle(r)` to draw this circle. Use just your `polygon` function.

To calculate the size (length) of the polygon edges, use this formula inside your `circle` function:

$$\mathit{size} = 2 \mathit{r} \sin \frac{\pi}{n}$$

Here, $r$ is the radius passed to `circle`, and $n$ is the number sides of the polygon.

The `sin` function, and `pi`, are in Python's `math` module.

![a circle](https://blog.images.bornforthis.cn/docs-images/sha256/33/335f72ab190484ae50e7e5c3424f12a74ed37212c3b75fda2161782e7695de79.gif)

Also, write a function called `circle_test()` that uses your `circle` function to draw 10 concentric circles like this:

![ten circles](https://blog.images.bornforthis.cn/docs-images/sha256/a3/a35163a925cc985628b4b1472c23dd947c68b203a9d495508b17043c3ceac67f.gif)





```python
import turtle
import math

def circle(radius):
    n = 100  # 多边形的边数，边数越多，圆越光滑
    # 错误检查：半径必须是正数
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    # 计算边长
    size = 2 * radius * math.sin(math.pi / n)
    # 移动到圆的起始位置，确保圆心在 (0, 0)
    turtle.penup()
    turtle.goto(0, -radius)
    turtle.pendown()
    turtle.setheading(0)  # 设置初始方向为东
    # 绘制多边形近似的圆
    polygon(n, size)
    # 返回到圆心位置
    turtle.penup()
    turtle.goto(0, 0)
    turtle.pendown()

def circle_test():
    turtle.reset()  # 重置绘图窗口
    for i in range(1, 11):
        circle(i * 10)  # 绘制半径从10到100的同心圆
    turtle.done()  # 保持窗口打开

def polygon(n, size):
    # 错误检查：n 必须大于等于 3
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    # 错误检查：size 必须是正数
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    
    angle = 360 / n  # 计算每个角的度数
    for _ in range(n):
        turtle.forward(size)  # 向前绘制一条边
        turtle.left(angle)    # 左转指定的角度

# 运行测试函数
circle_test()
```



## Question 4: Eyes

Write a function called `eye(radius)` that draws one (cartoon) eye using two circles: a big circle, and a filled-in smaller circle inside the big one (representing the pupil).

Use the `turtle.begin_fill()` and `turtle.end_fill()` functions to fill-in the smaller circle.

Here's an example:

![an eye](https://blog.images.bornforthis.cn/docs-images/sha256/6e/6e77a479466bee74026c8a8b24350b17668617645e6e65d5d143d3f637b7271d.gif)

Also, write a function called `eye_test()` that draws a pair of eyes of size 50 like this:

![a pair of eyes](https://blog.images.bornforthis.cn/docs-images/sha256/60/60e930f7cbb3fa57fb9b13bbba86f35fad38a5d380c3b5dceb042801aaa16479.gif)

```python
import turtle
import math

def polygon(n, size):
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    angle = 360 / n
    for _ in range(n):
        turtle.forward(size)
        turtle.left(angle)

def circle(radius):
    n = 100
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    size = 2 * radius * math.sin(math.pi / n)
    turtle.penup()
    turtle.forward(radius)
    turtle.left(90)
    turtle.pendown()
    polygon(n, size)
    turtle.penup()
    turtle.right(90)
    turtle.backward(radius)
    turtle.pendown()

def eye(radius):
    # 绘制外圈（眼睛）
    circle(radius)
    
    # 绘制内圈（瞳孔），将其位置向下移动
    pupil_radius = radius / 2  # 瞳孔半径为眼睛半径的一半
    # 移动到瞳孔的起始位置（眼睛中心向下移动）
    turtle.penup()
    turtle.right(90)
    turtle.forward(radius / 2)  # 向下移动半个半径
    turtle.left(90)
    turtle.pendown()
    turtle.fillcolor('black')  # 设置填充颜色为黑色
    turtle.begin_fill()
    circle(pupil_radius)
    turtle.end_fill()
    # 返回到眼睛中心位置
    turtle.penup()
    turtle.left(90)
    turtle.backward(radius / 2)
    turtle.right(90)
    turtle.pendown()

def eye_test():
    turtle.reset()
    turtle.speed(0)
    # 绘制左眼
    turtle.penup()
    turtle.goto(-60, 0)
    turtle.pendown()
    eye(50)
    # 绘制右眼
    turtle.penup()
    turtle.goto(60, 0)
    turtle.pendown()
    eye(50)
    turtle.hideturtle()  # 隐藏海龟
    turtle.done()

# 运行测试函数
eye_test()
```



## Question 5: Noses

Write a function called `nose(size)` that draws a (cartoon) nose that consists of, at least, two different shapes. The exact style and look of the nose is up to you. It could be as simple as an upside-down 7.

Make it so that the bigger `size` is, the bigger the nose.

![a nose](https://blog.images.bornforthis.cn/docs-images/sha256/bc/bc76b159a329a3a573e59d1e8a16425d6371ff949d3d3b58dd2a878783547331.gif)

```python {76-86, 90}
import turtle
import math


def polygon(n, size):
    turtle.speed(0)
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    angle = 360 / n
    for _ in range(n):
        turtle.forward(size)
        turtle.left(angle)


def circle(radius):
    turtle.speed(0)
    n = 100
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    size = 2 * radius * math.sin(math.pi / n)
    turtle.penup()
    turtle.forward(radius)
    turtle.left(90)
    turtle.pendown()
    polygon(n, size)
    turtle.penup()
    turtle.right(90)
    turtle.backward(radius)
    turtle.pendown()


def eye(radius):
    turtle.speed(0)
    # 绘制外圈（眼睛）
    circle(radius)
    pupil_radius = radius / 2
    turtle.penup()
    turtle.right(90)
    turtle.forward(radius / 2)
    turtle.left(90)
    turtle.pendown()
    turtle.fillcolor('black')
    turtle.begin_fill()
    circle(pupil_radius)
    turtle.end_fill()
    turtle.penup()
    turtle.left(90)
    turtle.backward(radius / 2)
    turtle.right(90)
    turtle.pendown()




def eye_test():
    turtle.reset()
    turtle.speed(0)
    # 绘制左眼
    turtle.penup()
    turtle.goto(-60, 0)
    turtle.pendown()
    eye(50)
    # 绘制右眼
    turtle.penup()
    turtle.goto(60, 0)
    turtle.pendown()
    eye(50)
    # turtle.hideturtle()  # 隐藏海龟
    # turtle.done()

def nose(size):
    turtle.speed(0)
    turtle.pensize(3)
    turtle.penup()
    turtle.goto(0, -100)
    turtle.pendown()
    turtle.left(15)
    turtle.forward(size / 2)
    turtle.left(125)
    turtle.forward(size)
    turtle.done()

# 运行测试函数
eye_test()
nose(60)
```

## Question 6: Mouths

Write a function called `mouth(size, style)` that draws a (cartoon) mouth as follows:

- If `style == 'happy'`, the mouth is drawn smiling. 
- If `style == 'sad'`, the mouth is drawn frowning.
- If `style == 'surprised'`, the mouth is drawn as a circle.
- For any other value of `style`, the mouth is drawn as a neutral expression,
  e.g. a straight line.

Make it so that the bigger `size` is, the bigger the mouth.

Here are examples of the four mouths:

![four mouths](https://blog.images.bornforthis.cn/docs-images/sha256/3d/3dcc33e9ee85c3b78bc39807608cc452a4e78400d8425ed4fcbd5ba7a7f80b81.gif)





```python {96-134}
import turtle
import math


def polygon(n, size):
    turtle.speed(0)
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    angle = 360 / n
    for _ in range(n):
        turtle.forward(size)
        turtle.left(angle)


def circle(radius):
    turtle.speed(0)
    n = 100
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    size = 2 * radius * math.sin(math.pi / n)
    turtle.penup()
    turtle.forward(radius)
    turtle.left(90)
    turtle.pendown()
    polygon(n, size)
    turtle.penup()
    turtle.right(90)
    turtle.backward(radius)
    turtle.pendown()


def eye(radius):
    turtle.speed(0)
    # 绘制外圈（眼睛）
    circle(radius)
    pupil_radius = radius / 2
    turtle.penup()
    turtle.right(90)
    turtle.forward(radius / 2)
    turtle.left(90)
    turtle.pendown()
    turtle.fillcolor('black')
    turtle.begin_fill()
    circle(pupil_radius)
    turtle.end_fill()
    turtle.penup()
    turtle.left(90)
    turtle.backward(radius / 2)
    turtle.right(90)
    turtle.pendown()




def eye_test():
    turtle.reset()
    turtle.speed(0)
    # 绘制左眼
    turtle.penup()
    turtle.goto(-60, 0)
    turtle.pendown()
    eye(50)
    # 绘制右眼
    turtle.penup()
    turtle.goto(60, 0)
    turtle.pendown()
    eye(50)
    # turtle.hideturtle()  # 隐藏海龟
    # turtle.done()

def nose(size):
    # turtle.reset()
    turtle.speed(0)
    turtle.pensize(3)
    turtle.penup()
    turtle.goto(0, -100)
    turtle.pendown()
    turtle.left(15)
    turtle.forward(size / 2)
    turtle.left(125)
    turtle.forward(size)

def jump_to(x, y):
    # 提起画笔，不绘制线条
    turtle.penup()
    # 移动到指定位置
    turtle.goto(x, y)
    # 放下画笔，准备绘制
    turtle.pendown()

def mouth(size, style):
    turtle.speed(0)
    turtle.pensize(3)
    turtle.hideturtle()
    if style == 'happy':
        jump_to(0, -130)
        turtle.setheading(0)
        turtle.left(25)
        turtle.forward(size)
        
        jump_to(0, -130)
        turtle.setheading(180)
        turtle.right(25)
        turtle.forward(size)
        
        turtle.done()
    elif style == 'sad':
        jump_to(0, -120)
        turtle.setheading(0)
        turtle.right(20)
        turtle.forward(size)
        
        jump_to(0, -120)
        turtle.setheading(180)
        turtle.left(20)
        turtle.forward(size)
        turtle.done()
    elif style == 'surprised':
        jump_to(0, -140)
        circle(30)
        turtle.done()
    else:
        jump_to(0, -125)
        turtle.setheading(0)
        turtle.forward(size)
        jump_to(0, -125)
        turtle.setheading(180)
        turtle.forward(size)
        turtle.done()
        
        

# 运行测试函数
eye_test()
nose(60)
# mouth(60, 'happy')
# mouth(60, 'sad')
mouth(60, 'surprisssed')
```



## Question 7: Heads

Write a function called `head(size)` that draws a (cartoon) head that consists of, at least, two eyes, a random mouth, a nose, and a head (e.g. a circle) all around it. Use the functions you wrote above to draw the eyes, mouth, nose, and

head.

Choose the mouth style at random to be one of the 4 mouth shapes. Remember to put `import random` at the top of your file to get access to the `random` module.

The size of the head should be controllable using `size`, e.g. a small value of `size` should draw a small head, and a big value should draw a big head. Make sure all the eyes, nose, and mouth fit into it snugly and are proportional to the size.

For instance, a head with a surprised face could look like this:

![surprised face](https://blog.images.bornforthis.cn/docs-images/sha256/19/1918ce9e278d26975d6c60d0a11a546beb256b25705edb70361420918a49e135.gif)

::: code-tabs

@tab Code1

```python
import turtle
import math
import random


def polygon(n, size):
    turtle.speed(0)
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    angle = 360 / n
    for _ in range(n):
        turtle.forward(size)
        turtle.left(angle)


def circle(radius):
    turtle.speed(0)
    n = 100
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    size = 2 * radius * math.sin(math.pi / n)
    turtle.penup()
    turtle.forward(radius)
    turtle.left(90)
    turtle.pendown()
    polygon(n, size)
    turtle.penup()
    turtle.right(90)
    turtle.backward(radius)
    turtle.pendown()


def eye(radius):
    turtle.speed(0)
    # 绘制外圈（眼睛）
    circle(radius)
    pupil_radius = radius / 2
    turtle.penup()
    turtle.right(90)
    turtle.forward(radius / 2)
    turtle.left(90)
    turtle.pendown()
    turtle.fillcolor('black')
    turtle.begin_fill()
    circle(pupil_radius)
    turtle.end_fill()
    turtle.penup()
    turtle.left(90)
    turtle.backward(radius / 2)
    turtle.right(90)
    turtle.pendown()


def eye_test():
    turtle.reset()
    turtle.speed(0)
    # 绘制左眼
    turtle.penup()
    turtle.goto(-60, 0)
    turtle.pendown()
    eye(50)
    # 绘制右眼
    turtle.penup()
    turtle.goto(60, 0)
    turtle.pendown()
    eye(50)
    # turtle.hideturtle()  # 隐藏海龟
    # turtle.done()


def nose(size):
    # turtle.reset()
    turtle.speed(0)
    turtle.pensize(3)
    turtle.penup()
    turtle.goto(0, -100)
    turtle.pendown()
    turtle.left(15)
    turtle.forward(size / 2)
    turtle.left(125)
    turtle.forward(size)


def jump_to(x, y):
    # 提起画笔，不绘制线条
    turtle.penup()
    # 移动到指定位置
    turtle.goto(x, y)
    # 放下画笔，准备绘制
    turtle.pendown()


def mouth(size, style):
    turtle.speed(0)
    turtle.pensize(3)
    turtle.hideturtle()
    if style == 'happy':
        jump_to(0, -130)
        turtle.setheading(0)
        turtle.left(25)
        turtle.forward(size)

        jump_to(0, -130)
        turtle.setheading(180)
        turtle.right(25)
        turtle.forward(size)
    elif style == 'sad':
        jump_to(0, -120)
        turtle.setheading(0)
        turtle.right(20)
        turtle.forward(size)

        jump_to(0, -120)
        turtle.setheading(180)
        turtle.left(20)
        turtle.forward(size)
    elif style == 'surprised':
        jump_to(0, -140)
        circle(30)
    else:
        jump_to(0, -125)
        turtle.setheading(0)
        turtle.forward(size)
        jump_to(0, -125)
        turtle.setheading(180)
        turtle.forward(size)


def head(size):
    emote = random.choice(['happy', 'sad', 'surprised', 'other'])
    # print(emote)
    mouth(size / 2, emote)
    jump_to(0, -50)
    circle(size)
    turtle.done()


# 运行测试函数
eye_test()
nose(60)
# mouth(60, 'happy')
# mouth(60, 'sad')
# mouth(60, 'surprisssed')
head(150)

```



@tab Code2

```python {137-143, 152}
import turtle
import math
import random


def polygon(n, size):
    turtle.speed(0)
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    angle = 360 / n
    for _ in range(n):
        turtle.forward(size)
        turtle.left(angle)


def circle(radius):
    turtle.speed(0)
    n = 100
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    size = 2 * radius * math.sin(math.pi / n)
    turtle.penup()
    turtle.forward(radius)
    turtle.left(90)
    turtle.pendown()
    polygon(n, size)
    turtle.penup()
    turtle.right(90)
    turtle.backward(radius)
    turtle.pendown()


def eye(radius):
    turtle.speed(0)
    # 绘制外圈（眼睛）
    circle(radius)
    pupil_radius = radius / 2
    turtle.penup()
    turtle.right(90)
    turtle.forward(radius / 2)
    turtle.left(90)
    turtle.pendown()
    turtle.fillcolor('black')
    turtle.begin_fill()
    circle(pupil_radius)
    turtle.end_fill()
    turtle.penup()
    turtle.left(90)
    turtle.backward(radius / 2)
    turtle.right(90)
    turtle.pendown()




def eye_test():
    turtle.reset()
    turtle.speed(0)
    # 绘制左眼
    turtle.penup()
    turtle.goto(-60, 0)
    turtle.pendown()
    eye(50)
    # 绘制右眼
    turtle.penup()
    turtle.goto(60, 0)
    turtle.pendown()
    eye(50)
    # turtle.hideturtle()  # 隐藏海龟
    # turtle.done()

def nose(size):
    # turtle.reset()
    turtle.speed(0)
    turtle.pensize(3)
    turtle.penup()
    turtle.goto(0, -100)
    turtle.pendown()
    turtle.left(15)
    turtle.forward(size / 2)
    turtle.left(125)
    turtle.forward(size)

def jump_to(x, y):
    # 提起画笔，不绘制线条
    turtle.penup()
    # 移动到指定位置
    turtle.goto(x, y)
    # 放下画笔，准备绘制
    turtle.pendown()

def mouth(size, style):
    turtle.speed(0)
    turtle.pensize(3)
    turtle.hideturtle()
    if style == 'happy':
        jump_to(0, -130)
        turtle.setheading(0)
        turtle.left(25)
        turtle.forward(size)
        
        jump_to(0, -130)
        turtle.setheading(180)
        turtle.right(25)
        turtle.forward(size)
        
        turtle.done()
    elif style == 'sad':
        jump_to(0, -120)
        turtle.setheading(0)
        turtle.right(20)
        turtle.forward(size)
        
        jump_to(0, -120)
        turtle.setheading(180)
        turtle.left(20)
        turtle.forward(size)
        turtle.done()
    elif style == 'surprised':
        jump_to(0, -140)
        circle(30)
        turtle.done()
    else:
        jump_to(0, -125)
        turtle.setheading(0)
        turtle.forward(size)
        jump_to(0, -125)
        turtle.setheading(180)
        turtle.forward(size)
        turtle.done()

def head(size):
    emote = random.choice(['happy', 'sad', 'surprised', 'other'])
    # print(emote)
    mouth(size / 2, emote)
    jump_to(0, -50)
    circle(size)
    turtle.done()


# 运行测试函数
eye_test()
nose(60)
# mouth(60, 'happy')
# mouth(60, 'sad')
# mouth(60, 'surprisssed')
head(150)
```

:::



## Question 8: Stick Figures

Write a function called `stick_figure(size)` that draws a stick figure with a head and body. It should have, at least, a head (using your `head` function), a torso (maybe just a line), arms, and legs. They can be simple stick figures if you like, or more elaborate.

**Include some randomness in the body beyond just the mouth randomness**. For example, you could chose the color at random, or make the arms point in random directions, etc.

![a stick figure](https://blog.images.bornforthis.cn/docs-images/sha256/84/84915586a163535ce07ed1a4d9d8da6b9ce2980d570461599109b6d05e811392.png)



::: code-tabs

@tab 1. 基本实现

```python
pass
```

@tab 2. 随机动作

```python
import turtle
import math
import random


# turtle.hideturtle()
def polygon(n, size):
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    angle = 360 / n
    for _ in range(n):
        turtle.forward(size)
        turtle.left(angle)


def circle(radius):
    n = 100
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    size = 2 * radius * math.sin(math.pi / n)
    turtle.penup()
    turtle.forward(radius)
    turtle.left(90)
    turtle.pendown()
    polygon(n, size)
    turtle.penup()
    turtle.right(90)
    turtle.backward(radius)
    turtle.pendown()


def eye(radius):
    # 绘制外圈（眼睛）
    circle(radius)
    pupil_radius = radius / 2
    turtle.penup()
    turtle.right(90)
    turtle.forward(radius / 2)
    turtle.left(90)
    turtle.pendown()
    turtle.fillcolor('black')
    turtle.begin_fill()
    circle(pupil_radius)
    turtle.end_fill()
    turtle.penup()
    turtle.left(90)
    turtle.backward(radius / 2)
    turtle.right(90)
    turtle.pendown()


def eye_test():
    turtle.reset()
    # 绘制左眼
    turtle.penup()
    turtle.goto(-60, 0)
    turtle.pendown()
    eye(50)
    # 绘制右眼
    turtle.penup()
    turtle.goto(60, 0)
    turtle.pendown()
    eye(50)
    # turtle.hideturtle()  # 隐藏海龟
    # turtle.done()


def nose(size):
    # turtle.reset()
    turtle.pensize(3)
    turtle.penup()
    turtle.goto(0, -100)
    turtle.pendown()
    turtle.left(15)
    turtle.forward(size / 2)
    turtle.left(125)
    turtle.forward(size)


def jump_to(x, y):
    # 提起画笔，不绘制线条
    turtle.penup()
    # 移动到指定位置
    turtle.goto(x, y)
    # 放下画笔，准备绘制
    turtle.pendown()


def mouth(size, style):
    turtle.pensize(3)
    if style == 'happy':
        jump_to(0, -130)
        turtle.setheading(0)
        turtle.left(25)
        turtle.forward(size)

        jump_to(0, -130)
        turtle.setheading(180)
        turtle.right(25)
        turtle.forward(size)
    elif style == 'sad':
        jump_to(0, -120)
        turtle.setheading(0)
        turtle.right(20)
        turtle.forward(size)

        jump_to(0, -120)
        turtle.setheading(180)
        turtle.left(20)
        turtle.forward(size)
    elif style == 'surprised':
        jump_to(0, -140)
        circle(30)
    else:
        jump_to(0, -125)
        turtle.setheading(0)
        turtle.forward(size)
        jump_to(0, -125)
        turtle.setheading(180)
        turtle.forward(size)


def head(size):
    emote = random.choice(['happy', 'sad', 'surprised', 'other'])
    # print(emote)
    mouth(size / 2, emote)
    jump_to(0, -50)
    circle(size)


def stick_figure(size):
    turtle.hideturtle()
    jump_to(0, -205)
    turtle.setheading(270)
    turtle.forward(size)

    posture = random.choice([(-240, 270, 45, 45), (-260, 90, -135, 45)])
    # posture = [(-240, 270, 45, 45), (-260, 90, -135, 35)][1]
    print(posture)

    jump_to(0, posture[0])
    turtle.left(posture[2])
    turtle.forward(size / 2)

    turtle.setheading(posture[1])
    jump_to(0, posture[0])
    turtle.right(posture[3])
    turtle.forward(size / 2)


# 运行测试函数
turtle.speed(0)
eye_test()
nose(60)
# mouth(60, 'happy')
# mouth(60, 'sad')
# mouth(60, 'surprisssed')
head(150)
stick_figure(150)
```

@tab 3. 随机颜色

```python
import turtle
import math
import random


# turtle.hideturtle()
def polygon(n, size):
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    angle = 360 / n
    for _ in range(n):
        # if _ == 0:
        #     turtle.penup()
        #     turtle.forward(size)
        #     turtle.left(angle)
        # else:
        #     turtle.pendown()
        #     turtle.forward(size)
        #     turtle.left(angle)
        turtle.forward(size)
        turtle.left(angle)


def circle(radius):
    n = 100
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    size = 2 * radius * math.sin(math.pi / n)
    turtle.penup()
    turtle.forward(radius)
    turtle.left(90)
    turtle.pendown()
    polygon(n, size)
    turtle.penup()
    turtle.right(90)
    turtle.backward(radius)
    turtle.pendown()


def eye(radius):
    # 绘制外圈（眼睛）
    circle(radius)
    pupil_radius = radius / 2
    turtle.penup()
    turtle.right(90)
    turtle.forward(radius / 2)
    turtle.left(90)
    turtle.pendown()
    turtle.fillcolor('black')
    turtle.begin_fill()
    circle(pupil_radius)
    turtle.end_fill()
    turtle.penup()
    turtle.left(90)
    turtle.backward(radius / 2)
    turtle.right(90)
    turtle.pendown()


def eye_test():
    # turtle.reset()
    # 绘制左眼
    turtle.penup()
    turtle.goto(-60, 0)
    turtle.pendown()
    eye(50)
    # 绘制右眼
    turtle.penup()
    turtle.goto(60, 0)
    turtle.pendown()
    eye(50)
    # turtle.hideturtle()  # 隐藏海龟
    # turtle.done()


def nose(size):
    # turtle.reset()
    turtle.pensize(3)
    turtle.penup()
    turtle.goto(0, -100)
    turtle.pendown()
    turtle.left(15)
    turtle.forward(size / 2)
    turtle.left(125)
    turtle.forward(size)


def jump_to(x, y):
    # 提起画笔，不绘制线条
    turtle.penup()
    # 移动到指定位置
    turtle.goto(x, y)
    # 放下画笔，准备绘制
    turtle.pendown()


def mouth(size, style):
    turtle.pensize(3)
    if style == 'happy':
        jump_to(0, -130)
        turtle.setheading(0)
        turtle.left(25)
        turtle.forward(size)

        jump_to(0, -130)
        turtle.setheading(180)
        turtle.right(25)
        turtle.forward(size)
    elif style == 'sad':
        jump_to(0, -120)
        turtle.setheading(0)
        turtle.right(20)
        turtle.forward(size)

        jump_to(0, -120)
        turtle.setheading(180)
        turtle.left(20)
        turtle.forward(size)
    elif style == 'surprised':
        jump_to(0, -140)
        circle(30)
    else:
        jump_to(0, -125)
        turtle.setheading(0)
        turtle.forward(size)
        jump_to(0, -125)
        turtle.setheading(180)
        turtle.forward(size)


def head(size):
    emote = random.choice(['happy', 'sad', 'surprised', 'other'])
    # print(emote)
    mouth(size / 2, emote)
    jump_to(0, -50)
    circle(size)


def stick_figure(size):
    posture = random.choice([(-240, 270, 45, 45), (-260, 90, -135, 45), (-240, 90, -135, 30), (-260, 90, -175, 50)])
    # posture = (-260, 90, -175, 50)
    # print(posture)
    color = random.choice(['black', 'red', 'purple', 'orange', 'blue'])

    turtle.pencolor(color)  # 统一橘色线条
    # turtle.fillcolor(color)  # 统一黑色填充

    turtle.hideturtle()
    jump_to(0, -205)
    turtle.setheading(270)
    turtle.forward(size)

    jump_to(0, posture[0])
    turtle.left(posture[2])
    turtle.forward(size / 2)

    turtle.setheading(posture[1])
    jump_to(0, posture[0])
    turtle.right(posture[3])
    turtle.forward(size / 2)


# 运行测试函数

turtle.speed(0)
eye_test()
nose(60)
# mouth(60, 'happy')
# mouth(60, 'sad')
# mouth(60, 'surprisssed')
head(150)
stick_figure(150)
```

@tab 最后

```python
import turtle
import math
import random


# turtle.hideturtle()
def polygon(n, size):
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    angle = 360 / n
    for _ in range(n):
        # if _ == 0:
        #     turtle.penup()
        #     turtle.forward(size)
        #     turtle.left(angle)
        # else:
        #     turtle.pendown()
        #     turtle.forward(size)
        #     turtle.left(angle)
        turtle.forward(size)
        turtle.left(angle)


def circle(radius):
    n = 100
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    size = 2 * radius * math.sin(math.pi / n)
    turtle.penup()
    turtle.forward(radius)
    turtle.left(90)
    turtle.pendown()
    polygon(n, size)
    turtle.penup()
    turtle.right(90)
    turtle.backward(radius)
    turtle.pendown()


def eye(radius):
    # 绘制外圈（眼睛）
    circle(radius)
    pupil_radius = radius / 2
    turtle.penup()
    turtle.right(90)
    turtle.forward(radius / 2)
    turtle.left(90)
    turtle.pendown()
    turtle.fillcolor('black')
    turtle.begin_fill()
    circle(pupil_radius)
    turtle.end_fill()
    turtle.penup()
    turtle.left(90)
    turtle.backward(radius / 2)
    turtle.right(90)
    turtle.pendown()


def eye_test():
    # turtle.reset()
    # 绘制左眼
    turtle.penup()
    turtle.goto(-60, 0)
    turtle.pendown()
    eye(50)
    # 绘制右眼
    turtle.penup()
    turtle.goto(60, 0)
    turtle.pendown()
    eye(50)
    # turtle.hideturtle()  # 隐藏海龟
    # turtle.done()


def nose(size):
    # turtle.reset()
    turtle.pensize(3)
    turtle.penup()
    turtle.goto(0, -100)
    turtle.pendown()
    turtle.left(15)
    turtle.forward(size / 2)
    turtle.left(125)
    turtle.forward(size)


def jump_to(x, y):
    # 提起画笔，不绘制线条
    turtle.penup()
    # 移动到指定位置
    turtle.goto(x, y)
    # 放下画笔，准备绘制
    turtle.pendown()


def mouth(size, style):
    turtle.pensize(3)
    if style == 'happy':
        jump_to(0, -130)
        turtle.setheading(0)
        turtle.left(25)
        turtle.forward(size)

        jump_to(0, -130)
        turtle.setheading(180)
        turtle.right(25)
        turtle.forward(size)
    elif style == 'sad':
        jump_to(0, -120)
        turtle.setheading(0)
        turtle.right(20)
        turtle.forward(size)

        jump_to(0, -120)
        turtle.setheading(180)
        turtle.left(20)
        turtle.forward(size)
    elif style == 'surprised':
        jump_to(0, -140)
        circle(30)
    else:
        jump_to(0, -125)
        turtle.setheading(0)
        turtle.forward(size)
        jump_to(0, -125)
        turtle.setheading(180)
        turtle.forward(size)


def head(size):
    emote = random.choice(['happy', 'sad', 'surprised', 'other'])
    # print(emote)
    mouth(size / 2, emote)
    jump_to(0, -50)
    circle(size)


def stick_figure(size):
    turtle.speed(0)
    eye_test()
    nose(60)
    head(size)
    posture = random.choice([(-240, 270, 45, 45), (-260, 90, -135, 45), (-240, 90, -135, 30), (-260, 90, -175, 50)])
    # posture = (-260, 90, -175, 50)
    # print(posture)
    color = random.choice(['black', 'red', 'purple', 'orange', 'blue'])
    foot = random.choice([(76, 67), (80, 91), (60, 60), (70, 70)])
    turtle.pencolor(color)  # 统一橘色线条
    # turtle.fillcolor(color)  # 统一黑色填充
    print(foot)

    turtle.hideturtle()
    jump_to(0, -205)
    turtle.setheading(270)
    turtle.forward(size)

    jump_to(0, posture[0])
    turtle.left(posture[2])
    turtle.forward(size / 2)

    turtle.setheading(posture[1])
    jump_to(0, posture[0])
    turtle.right(posture[3])
    turtle.forward(size / 2)
    
    jump_to(0, -(size*2.35))
    turtle.setheading(270)
    turtle.left(foot[0])
    turtle.forward(size / 2)
    
    jump_to(0, -(size*2.35))
    turtle.setheading(270)
    turtle.right(foot[1])
    turtle.forward(size / 2)
    
    
    


# 运行测试函数


# mouth(60, 'happy')
# mouth(60, 'sad')
# mouth(60, 'surprisssed')

stick_figure(150)
```

:::



## Question 9: Crowds

Write a function called `crowd(n, min_size, max_size)` that draws `n` stick figures (using your `stick_figure` function) at random locations on the screen.

The size of each stick figure should be chosen at random in the range `min_size` to `max_size`.

For example, here is a result of `crowd(100, 5, 20)`:

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/ab/abba8c1d0d06c56b1238fd163f8b8e1e80477352aac600151df5caae9c671bcb.png" alt="a random crowd of 100 stick figures" style="width:200px;"/>



::: code-tabs

@tab Code-同学代码 好笑

```python
#
# Full Name:Zhihao-Jason Zhang 
#  SFU ID :301625986
# SFU Email:zza324@sfu.ca
#



Q1.
import turtle

def polygon(n, size):
    if n < 3:
        print("Error: A polygon must have at least 3 sides.")
        return
    if size <= 0:
        print("Error: The size of each side must be greater than 0.")
        return
    angle = 360 / n
    for _ in range(n):
        turtle.forward(size)  
        turtle.left(angle)     
 turtle.done()

Q2.
import turtle
def jump_to(x, y):
    turtle.penup()          
    turtle.goto(x, y)      
    turtle.pendown()        
def polygon(n, size):
    if n < 3:
        print("Error: A polygon must have at least 3 sides.")
        return
    if size <= 0:
        print("Error: The size of each side must be greater than 0.")
        return
    angle = 360 / n
    for _ in range(n):
        turtle.forward(size)  
        turtle.left(angle)     
def jump_to_test():
    turtle.speed(1)  
    jump_to(0, 0)     
    polygon(5, 100)   
      jump_to(150, 150) 
    polygon(6, 80)    
    jump_to(-150, 150) 
    polygon(4, 120)    
        jump_to(-150, -150) 
    polygon(3, 100)    
      jump_to(150, -150) 
    polygon(8, 70)     
    turtle.done()
jump_to_test()

Q3.
import turtle
import math
def polygon(sides, length):
    for _ in range(sides):
        turtle.forward(length)
        turtle.left(360 / sides)
def circle(radius):
    sides = 100  
    length = 2 * radius * math.sin(math.pi / sides)  
    polygon(sides, length)
def circle_test():
    turtle.speed(0)  
    for i in range(10):
        circle(20 * (i + 1))  
        turtle.penup()
        turtle.sety(turtle.ycor() - 20)  
        turtle.pendown()
turtle.penup()
turtle.goto(0, 0) 
turtle.pendown()
circle_test()
turtle.done()

Q4.
import turtle
def draw_circle(radius, fill_color=None):
    turtle.begin_fill() if fill_color else None
    turtle.fillcolor(fill_color) if fill_color else None
    turtle.circle(radius)
    turtle.end_fill() if fill_color else None
def eye(radius):
    draw_circle(radius, fill_color='white')
    turtle.penup()
    turtle.goto(0, -radius / 2)  
    turtle.pendown()
    draw_circle(radius / 4, fill_color='black') 
    turtle.goto(0, 0)  
    turtle.pendown()
def eye_test():
    turtle.speed(0)  
    turtle.penup()
    turtle.goto(-60, 0) 
    turtle.pendown()
    eye(50) 
    turtle.penup()
    turtle.goto(60, 0) 
    turtle.pendown()
    eye(50)  
turtle.bgcolor("lightblue") 
turtle.speed(0) 
turtle.penup()
turtle.goto(0, 0) 
turtle.pendown()
eye_test()
turtle.done()

Q5.
import turtle
def draw_triangle(size):
     for _ in range(3):
        turtle.forward(size)
        turtle.left(120)
def draw_semicircle(radius):
     turtle.circle(radius, 180)
def nose(size):
    turtle.fillcolor('saddlebrown') 
    turtle.begin_fill()
    draw_triangle(size)
     turtle.end_fill()
    turtle.penup()
    turtle.goto(0, -size / 3)  
    turtle.pendown()
    turtle.setheading(0)  
    turtle.fillcolor('tan')  
    turtle.begin_fill()
    draw_semicircle(size / 2)  
    turtle.end_fill()
turtle.bgcolor("lightblue")  
turtle.speed(0)
turtle.penup()
turtle.goto(0, 0)  
turtle.pendown()
nose(50) 
turtle.hideturtle()  
turtle.done()


Q6.
import turtle

def draw_smile(size):
    turtle.penup()
    turtle.goto(-size / 2, 0)
    turtle.setheading(-60)
    turtle.pendown()
    turtle.circle(size / 2, 120)

def draw_frown(size):
    turtle.penup()
    turtle.goto(-size / 2, 0)
    turtle.setheading(60)
    turtle.pendown()
    turtle.circle(-size / 2, 120)

def draw_circle_mouth(size):
    turtle.penup()
    turtle.goto(0, -size / 2)
    turtle.setheading(0)
    turtle.pendown()
    turtle.circle(size / 2)
def draw_neutral(size):
    turtle.penup()
    turtle.goto(-size / 2, 0)
    turtle.setheading(0)
    turtle.pendown()
    turtle.forward(size)
def mouth(size, style):
    turtle.pensize(3)
    
    if style == 'happy':
        draw_smile(size)
    elif style == 'sad':
        draw_frown(size)
    elif style == 'surprised':
        draw_circle_mouth(size)
    else:
        draw_neutral(size)
turtle.speed(0) 
turtle.penup()
turtle.goto(0, 0)  
turtle.pendown()
mouth(100, 'happy') 
turtle.penup()
turtle.goto(0, -150)  
turtle.pendown()
mouth(100, 'sad')  
turtle.penup()
turtle.goto(0, -300)  
turtle.pendown()
mouth(100, 'surprised')  
turtle.penup()
turtle.goto(0, -450) 
turtle.pendown()
mouth(100, 'neutral') 
turtle.hideturtle() 
turtle.done()

Q7.
import turtle
import random


def draw_head_circle(size):
    turtle.penup()
    turtle.goto(0, -size)  
    turtle.setheading(0)
    turtle.pendown()
    turtle.circle(size)

def head(size):
    turtle.speed(0)
    turtle.pensize(2)
    draw_head_circle(size)
    eye_size = size / 3
    turtle.penup()
    turtle.goto(-eye_size, size / 2)  # Position for the left eye
    turtle.pendown()
    eye(eye_size)
    
    turtle.penup()
    turtle.goto(eye_size, size / 2)  # Position for the right eye
    turtle.pendown()
    eye(eye_size)
    nose_size = size / 4
    turtle.penup()
    turtle.goto(0, size / 6) 
    turtle.pendown()
    nose(nose_size)
    mouth_styles = ['happy', 'sad', 'surprised', 'neutral']
    chosen_style = random.choice(mouth_styles)
    mouth_size = size / 2 
    turtle.penup()
    turtle.goto(0, -size / 4) 
    turtle.pendown()
    mouth(mouth_size, chosen_style)
turtle.bgcolor("lightblue")
turtle.speed(0)
turtle.penup()
turtle.goto(0, 0)
turtle.pendown()
head(150) 
turtle.hideturtle()  
turtle.done()

Q8.
import turtle
import random

def draw_torso(length):
    turtle.penup()
    turtle.goto(0, -length / 2)  
    turtle.pendown()
    turtle.setheading(-90)  
    turtle.forward(length)

def draw_arm(length, angle):
    turtle.penup()
    turtle.goto(0, -length / 4)  # Positioning from the torso
    turtle.setheading(angle)
    turtle.pendown()
    turtle.forward(length)

def draw_leg(length, angle):
    turtle.penup()
    turtle.goto(0, -length) 
    turtle.setheading(angle)
    turtle.pendown()
    turtle.forward(length)

def stick_figure(size):
   head_color = random.choice(['blue', 'green', 'red', 'yellow'])
    body_color = random.choice(['black', 'brown', 'purple', 'orange'])
    turtle.pensize(2)
    turtle.pencolor(head_color)
    head(size)
    torso_length = size * 2
    turtle.pensize(3)
    turtle.pencolor(body_color)
    draw_torso(torso_length)
    arm_length = size
    left_arm_angle = random.randint(120, 150)  
    right_arm_angle = random.randint(30, 60)   
    draw_arm(arm_length, left_arm_angle)
    draw_arm(arm_length, right_arm_angle)
    leg_length = size * 1.5
    left_leg_angle = random.randint(210, 240)  
    right_leg_angle = random.randint(300, 330)  
    draw_leg(leg_length, left_leg_angle)
    draw_leg(leg_length, right_leg_angle)
turtle.bgcolor("lightblue")
turtle.speed(0)
turtle.penup()
turtle.goto(0, 0)
turtle.pendown()
stick_figure(50)  
turtle.hideturtle() 
turtle.done()


Q9.
import turtle
import random

def random_position():
    x = random.randint(-turtle.window_width() // 2, turtle.window_width() // 2)
    y = random.randint(-turtle.window_height() // 2, turtle.window_height() // 2)
    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()

def crowd(n, min_size, max_size):
    turtle.speed(0)  
    turtle.bgcolor("lightblue")  
    for _ in range(n):
        random_position()  
        size = random.randint(min_size, max_size)  # Choose a random size
        stick_figure(size)  
turtle.speed(0) 
crowd(100, 5, 20)  
turtle.hideturtle() 
turtle.done()
```

@tab 眼睛随机部分代码

```python
import turtle, math

def polygon(n, size):
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    angle = 360 / n
    for _ in range(n):
        turtle.forward(size)
        turtle.left(angle)

def circle(radius):
    n = 100
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    size = 2 * radius * math.sin(math.pi / n)
    turtle.penup()
    turtle.forward(radius)
    turtle.left(90)
    turtle.pendown()
    polygon(n, size)
    turtle.penup()
    turtle.right(90)
    turtle.backward(radius)
    turtle.pendown()
def eye(radius):
    # 绘制外圈（眼睛）
    circle(radius)
    pupil_radius = radius / 2
    turtle.penup()
    turtle.right(90)
    turtle.forward(radius / 2)
    turtle.left(90)
    turtle.pendown()
    turtle.fillcolor('black')
    turtle.begin_fill()
    circle(pupil_radius)
    turtle.end_fill()
    turtle.penup()
    turtle.left(90)
    turtle.backward(radius / 2)
    turtle.right(90)
    turtle.pendown()


def eye_test():
    # turtle.reset()
    # 绘制左眼
    turtle.penup()
    turtle.goto(-60, 0)
    turtle.pendown()
    eye(50)
    # 绘制右眼
    turtle.penup()
    turtle.goto(60, 0)
    turtle.pendown()
    eye(50)

eye_test()
```
@tab Code3

```python
import turtle
import math
import random


def polygon(n, size):
    if n < 3:
        print("错误：n 必须大于等于 3 才能形成多边形。")
        return
    if size <= 0:
        print("错误：size 必须是正数。")
        return
    angle = 360 / n
    for _ in range(n):
        turtle.forward(size)
        turtle.left(angle)


def circle(radius):
    n = 100
    if radius <= 0:
        print("错误：半径必须是正数。")
        return
    size = 2 * radius * math.sin(math.pi / n)
    turtle.penup()
    turtle.forward(radius)
    turtle.left(90)
    turtle.pendown()
    polygon(n, size)
    turtle.penup()
    turtle.right(90)
    turtle.backward(radius)
    turtle.pendown()


def eye(radius):
    # 绘制外圈（眼睛）
    circle(radius)
    pupil_radius = radius / 2
    turtle.penup()
    turtle.right(90)
    turtle.forward(radius / 2)
    turtle.left(90)
    turtle.pendown()
    turtle.fillcolor('black')
    turtle.begin_fill()
    circle(pupil_radius)
    turtle.end_fill()
    turtle.penup()
    turtle.left(90)
    turtle.backward(radius / 2)
    turtle.right(90)
    turtle.pendown()


def eye_test(x, y):
    # 绘制左眼
    jump_to(x - 60, y)
    eye(50)
    # 绘制右眼
    jump_to(x + 60, y)
    eye(50)


def nose(x, y, size):
    turtle.pensize(3)
    jump_to(x, y - 100)
    turtle.setheading(0)
    turtle.left(15)
    turtle.forward(size / 2)
    turtle.left(125)
    turtle.forward(size)


def jump_to(x, y):
    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()


def mouth(x, y, size, style):
    turtle.pensize(3)
    if style == 'happy':
        jump_to(x, y - 130)
        turtle.setheading(0)
        turtle.left(25)
        turtle.forward(size)

        jump_to(x, y - 130)
        turtle.setheading(180)
        turtle.right(25)
        turtle.forward(size)
    elif style == 'sad':
        jump_to(x, y - 120)
        turtle.setheading(0)
        turtle.right(20)
        turtle.forward(size)

        jump_to(x, y - 120)
        turtle.setheading(180)
        turtle.left(20)
        turtle.forward(size)
    elif style == 'surprised':
        jump_to(x, y - 140)
        circle(30)
    else:
        jump_to(x, y - 125)
        turtle.setheading(0)
        turtle.forward(size)
        jump_to(x, y - 125)
        turtle.setheading(180)
        turtle.forward(size)


def head(x, y, size):
    emote = random.choice(['happy', 'sad', 'surprised', 'other'])
    mouth(x, y, size / 2, emote)
    jump_to(x, y - 50)
    circle(size)


def stick_figure(x, y, size):
    turtle.speed(0)
    eye_test(x, y)
    nose(x, y, 60)
    head(x, y, size)
    posture = random.choice([(-240, 270, 45, 45), (-260, 90, -135, 45), (-240, 90, -135, 30), (-260, 90, -175, 50)])
    color = random.choice(['black', 'red', 'purple', 'orange', 'blue'])
    foot = random.choice([(76, 67), (80, 91), (60, 60), (70, 70)])
    turtle.pencolor(color)
    turtle.hideturtle()

    # 绘制身体
    jump_to(x, y - 205)
    turtle.setheading(270)
    turtle.forward(size)

    # 绘制左臂
    jump_to(x, y + posture[0])
    turtle.setheading(0)
    turtle.left(posture[2])
    turtle.forward(size / 2)

    # 绘制右臂
    turtle.setheading(posture[1])
    jump_to(x, y + posture[0])
    turtle.right(posture[3])
    turtle.forward(size / 2)

    # 绘制左腿
    jump_to(x, y - (size * 2.35))
    turtle.setheading(270)
    turtle.left(foot[0])
    turtle.forward(size / 2)

    # 绘制右腿
    jump_to(x, y - (size * 2.35))
    turtle.setheading(270)
    turtle.right(foot[1])
    turtle.forward(size / 2)


def pair_of_eyes(radius, gap, x, y):
    """
    radius: 半径
    gap: 两个眼睛的间距
    x，y：坐标
    """
    # 随机生成屏幕位置
    # x = random.randint(-200, 200)
    # y = random.randint(-200, 200)

    # 左眼
    turtle.penup()
    turtle.goto(x - radius - gap / 2, y)
    turtle.pendown()
    eye(radius)

    # 右眼
    turtle.penup()
    turtle.goto(x + radius + gap / 2, y)
    turtle.pendown()
    eye(radius)


def crowd(n, min_size, max_size):
    screen = turtle.Screen()
    width, height = screen.window_width(), screen.window_height()
    for _ in range(n):
        size = random.uniform(min_size, max_size)
        x = random.randint(-width // 2 + int(size), width // 2 - int(size))
        y = random.randint(-height // 2 + int(size * 3), height // 2 - int(size))
        stick_figure(x, y, size)


# 示例调用
turtle.speed(0)
turtle.hideturtle()
crowd(5, 50, 100)
turtle.done()
```




:::



::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)

