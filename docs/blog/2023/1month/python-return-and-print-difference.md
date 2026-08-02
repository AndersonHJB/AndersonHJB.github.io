---
title: Python 中 return 和 print 的作用及区别
date: 2023-01-03 18:31:30
author: AndersonHJB
isOriginal: true
category: 
    - Python一对一答疑帖
    - 留学生Python辅导
tag:
    - Python一对一答疑帖
    - 留学生Python辅导
icon: python
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
head:
  - - meta
    - name: keywords
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
  - - meta
    - name: description
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
---

## 一图胜千里

![img](https://blog.images.bornforthis.cn/docs-images/sha256/00/006989dca5151981fe74c973c86d3ebca8f9e242ba99ac4cf6216407c14a12c4.png)

## print 的作用是输出数据到控制端,就是打印在你能看到的界面上

- print 的作用还是比较容易理解的

```python
print (1)
print('asdfghj')
 
输出结果
1
asdfghj
```

如上就是输出数据到控制端

## return 的作用之一是返回计算的值

- 没有 return 语句

```python
x = 1
y = 2
def add(x, y):
    z = x + y
print(add(x,y))
 
输出结果
None
```

没有 return 语句，所以没能给函数 `add()` 赋值，打印出来也就是空值(None)。

- 有 return 语句

```python
x = 1
y = 2
def add(x, y):
    z = x + y
    return z
print(add(x,y))
 
输出结果
3
```

**注意：return 返回值只能通过 print 打印才会显示出来，但在交互式模式下不需要 print 打印**

```python
def func1():
    for i in range(1, 5):
        return (i)
 
print(func1())
print("......")
func1()
 
输出结果
1
......
```

如上，直接调用 `func1()` ,是没有输出结果的。

## 来个复杂的 print 和 return 相结合

```python
x = 1
y = 2
def add(x, y):
    z = x + y
    print(z)
print(add(x,y))
 
输出结果
3
None
```

在打印函数 `add (x, y)` 时，函数 `add (x, y)` 会执行 `print(z)` 语句得到 3 的，但 `add(x,y)` 返回值是 None，所以打印输出结果应为 3,None

## print 和 return 程序执行方面

```python
def func1():
    for i in range(1, 5):
        print (i)
 
def func2():
    for i in range(1, 5):
        return (i)
 
func1()
 
print("..............")
print(func2())
 
输出结果
1
2
3
4
..............
1
```

程序读到 `return()` 语句,其后的语句不会再被执行，所以打印 `func2()`,只输出"1"这个结果就退回了。

而 `print()` 语句不同，其后的语句依然会被执行，所以调用 `func1()` 时，值"1"、"2"、"3"、"4"都输出了。





欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)





















