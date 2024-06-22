---
title: Homework 1
icon: python
date: 2023-10-28 20:29:57
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

## Create a new directory

Start up Visual Studio Code and open your `cs5001` directory. Create a new directory called `hw01`.

Again, if you navigate to your `cs5001` folder on your system, you'll see the newly created folder called `hw01` and inside of this new folder will be all of the code your write for this assignment.

## Programming exercises

### 1. Student Info

Create a new file called `student_info.py`. In this file, write a Python program that prints, on separate lines, your name, your birthday, your hobbies, your favorite book, and your favorite movie. Label each piece of information in the output so that a person reading the output would understand what the information means.

### 2. Swap words

Below is a program called `swap.py` that attempts to swap the contents in the variables `word1` and `word2`.

```python
# Get input.
word1 = input("Enter word #1: ")
word2 = input("Enter word #2: ")

# Enter your code here to swap what’s 
# in the variables word1 and word2.

# Print results.
print () # prints blank line

print("Swapping results")
print("word #1:", word1)
print("word #2:", word2)
```

Modify the above program so that what’s in the variable `word1` is now in the variable `word2` and what’s in variable `word2` is now in variable `word1`. You may not remove any lines of code from this program. *You may only add assignment statements between lines 6 and 8 to get the desired result*.

In the example below, boldfaced text represents user input:

```python
> Enter word #1: apple
> Enter word #2: orange
> word #1: orange
> word #2: apple
```

### 3. A drawing function

#### Defining functions with `def`

The `def` keyword (short for *define*) enables you to write a block of code that can be executed later as many times as you like. In Python, this is called a *function*. The important thing to be aware of is that *defining* a function and *calling* (or *executing*) the function are two separate steps. Defining it is where you write the code that says what the function does. Calling it is where you actually tell the function to do its stuff. A function must be defined before it can be called.

For example. The following function prints the string "Hello Function!" to the terminal:

```python
def my_function():
    print("Hello Function!")
```

The first part of this definition is the `def` keyword. The second part is the function name, which can be any legal name you choose (subject to the same rules that govern variable names). The name is followed by parentheses. In general, this is where the function's parameters can be defined, if we want to pass data to the function when we call it. For now, we'll focus on the case where there are no parameters, so these parentheses are empty. The last thing on the first line of the function definition is the colon (`:`) that tells Python that a block of code will follow.

The second line must be indented, and this is where the block of code begins that the function will consist of. In this case, it's just one line, a print statement.

If you put the code above in a `.py` file on its own and run the file from the command line, what do you think will happen? Try it and see.

You should have found that the code doesn't do anything. The reason is that although you defined the behavior of the function, you never actually told Python to *carry out* the behavior. You do this by calling the function. So the following modified code will print "Hello Function!":

```python
def my_function():
    print("Hello Function!")

my_function()
```

Notice that in the last line we call `my_function()`. This is where the instruction to print the string is finally carried out. A Python program with the code above will behave exactly like a program with just the print statement; putting code in functions is optional in Python. But as you'll see soon in this course, being able to group blocks of commands together in this way is very valuable for programming.

#### Drawing a picture

For this exercise, create another file called `asterisk_picture.py`. In the program, write **a function** that prints out the shape of a tree. Use the `def` keyword to define the function. You can give the function whatever name you like. Call the function after you've defined it, so that the program draws the tree when you run it.

You are completely free to use your imagination and draw any sort of tree, but the picture should be made up of a minimum of 15 lines of asterisks. You do not need to use any loops or functionality that we haven't discussed yet in class, but you are free to if you wish to experiment.

## Commit and push your changes

Don't forget to commit and push your changes to GitHub. Remember that the following commands must be executed from within the `cs5001` directory, so make sure that's your present working directory (not the homework directory you just created). To refresh your memory, the commands are:

```bash
git add .
git commit -m "Completes homework 1"
git push
```

## Submitting to Canvas

In addition to committing on GitHub, please upload the files `student_info.py`, `swap.py`, and `asterisk_picture.py` to the Homework 1 submission point on Canvas.





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

