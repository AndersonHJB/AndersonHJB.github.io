---
title: CSCA20 - Lab 3
date: 2024-11-20 21:30:47
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

::: center

## CSCA20 - Lab 3

#### Loops & Lists

:::

## 1. Learning Objectives

This lab focuses on looping and lists, and in particular getting comfortable with the 3 types of loops (elemental for, counted for, and while loops)



## 2. Quiz

Normally we won’t remind you about the quiz... but just a reminder that you will be writing your lab2 quiz at the start of tutorial. So make sure you show up on time with your completed lab 2 ready to go (if you need help, we can help you on Piazza even after your tutorial is done)

## 3. Prelab

We’ve provided you with some starter code that lets you enter runners and times. Make sure you can run this code, and understand how it’s adding to the two relevant lists.

## 4. Demonstration & Evaluation

This lab will allow you to demonstrate the skills of Variables and Loops. We’ve taken care of the user Input/Output for you, but don’t worry, you’ll get chances to demonstrate user I/O again in later labs if you haven’t demonstrated it thus far.

This is also the first lab where it is likely that some students may struggle to complete the lab before the end of tutorial. If you can’t complete it: don’t panic. You will have the opportunity to demonstrate loops in future labs. So if you can’t finish during your tutorial, work on it at home, ask for help on Piazza if you need it, and make sure you come to next week’s tutorial with your completed code, ready for the quiz.

## 5. The Scenario

The Ultramarathon of Tokyo in Season of Cold (UTSC) is the premier winter-time long distance running race in Japan. They have asked you to build them a tool to track and calculate times for runners in the qualifying race. They aren’t sure how to decide who qualifies in a way that has the right number of people, but still keeps a good average time.

## 6. Data Input

We have already provided you with code to get the names and finishing times of the runners. You may assume that the data is entered as the runners finish (i.e., the times will always be increasing). Make sure you understand what that code is doing and how it works.



## 7. Total Average

The first thing UTSC wants you to do is to calculate the average time for all the runners in the qualifying race. So you need to add up all the times, and divide by the number of runners.



## 8. Option 1: Number of Qualifiers

UTSC would like to know what the results would look like if they set a specific number of runners who would qualify for the race. So your code should prompt for that number, and print out the names of everyone who would qualify, as well as the average time for qualifiers.

## 9. Option 2: Qualifying Time

Another way of deciding who qualifies would be to set a cutoff time, and only runners whose time is below this mark would qualify. So your code should prompt for that time, and print out the names of everyone who would qualify, as well as the average time for qualifiers

## 10. Hints

Here are a few hints that might help you with this assignment:

- We’re testing you on the 3 types of loop. So you’re going to have to write one of each loop. Take a moment before you start to think about which task will require an elemental for, a counted for, or a while loop.
- Remember that you can assume that all runner data will be entered in order, so the first runner will have the lowest time, and the times will steadily increase from there.
- You are not responsible for bad input. So if there are 5 runners, and the user sets the number of runners to be 10, your code is allowed to crash. You may also assume that the cutoff time is such that at least some runners will qualify and some won’t. (we’ll worry about building more error-proof code later)
- There are many ways you can go about this, some of which don’t actually require loops at all (e.g., there is a way to get the total of a list using a built in function of python), but the goal here isn’t just to get working code, it’s to practice and learn how to use loops.



## 11. Extra Practice

If you finish early and want to practice more, here are a few things you can try:

- Find different qualification cutoff methods. Can you write code that lets the user input the name of the last qualifying runner? What about code that lets runners qualify until the average time goes above a certain point? What about code that lets the user specify multiple possible cutoffs and stops when it hits the first one? (e.g., I want to qualify runners until the time hits X or the number of runners hits Y)
- You can try to make the code more error-proof, so that if the user enters bad input, the code doesn’t crash. If they enter a time greater than any runner took, or less than the fastest runner, it would be nice if the code did something sensible instead of just crashing.
- Try to add another field. Maybe name, time, and age, and then lets the user do advanced stuff like setting a maximum number in a specific age category, or printing out the average time for runners over a certain age (this one will likely require you to read ahead to learn about IF statements)

## 12. 知识点

1. for 循环遍历出列表每个元素

    ```python
    lst = [1, 2, 3, 4, 5]
    for i in lst:
        print(i) d
    ```

2. range() 左闭右开

    ```python
    for i in range(10):
        print(i)
    ```

3. 使用 range 生成的数字提取列表内的元素

    ```python
    lst = ['李雷', '韩梅梅', '马冬梅']
    for i in range(3):
        print(lst[i])
    ```

4. len 获取列表长度

    ```python
    lst = ['李雷', '韩梅梅', '马冬梅']
    for i in range(len(lst)):
        print(lst[i])
    ```

5. for 循环里面的会重复执行！

6. while 循环语法

    ```python
    while 条件: # 条件为 True 的时候才可以执行
        while 循环内的代码
    ```

    ```python
    while 2 > 1:
        print("hello")
    ```

    ```python
    num = 10
    while num > 0:
        print(f"hello,{num}")
        num -= 1
    ```

7. while 循环实现 0～100 和

    ```python
    total = 0
    n = 0
    while n <= 100:
        total = total + n
        n = n + 1
    print(total)
    ```

8. append() 添加列表元素

    ```python
    lst = [1, 2, 3]
    lst.append(5)
    print(lst)
    lst.append([1, 2, 3])
    print(lst)
    ```

9. 列表删除

    ```python
    lst = [1, 2, 3]
    lst.pop()
    print(lst)
    lst.pop(0)
    print(lst)
    ```

    ```python
    lst = [1, 2, 3, 4]
    del lst[0]
    print(lst)
    del lst[0]
    print(lst)
    ```

    ```python
    lst = [1, 2, 3, 4]
    lst.remove(3)
    print(lst)
    ```

10. 列表的修改元素

    ```python
    lst = [1, 2, 3, 4, 5, 6]
    lst[0] = 100
    print(lst)
    ```

    ```python
    lst = [1, 2, 3, 4, 5, 6]
    for i in range(len(lst)):
        lst[i] = lst[i] ** 2
    print(lst)
    ```

    



























::: code-tabs

@tab 模版

```python
#this will be our continue flag... if it's set to 'N', we're done, if it's
#set to 'Y' (or anything else really), we add more runners
cont = "Y"
#lists to hold our runners and their times, so runner[n] will be the name of
#the n'th place finisher and times[n] will be their time (in minutes)
runners = []
times = []
#loop until the user says they're out of runners to process
while(cont != "N"):
#get the name and time of the next runner
runner_name = input("Please enter name of next runner: ")
runner_time = float(input("Please enter runner time: "))
#add the name and time to their respective lists
runners.append(runner_name)
times.append(runner_time)
#ask if the user is done
cont = input("Any more runners to add? (Y/N)")
#------ DO NOT EDIT ANYTHING ABOVE THIS LINE-----#
#NEED A LOOP HERE
average_time = 0
print("Average time of all runners: " + str(average_time))
num_qualifiers = int(input("Enter number of runners who qualified: "))
average_time = 0
#NEED A LOOP HERE
print("Average time for qualified runners: " + str(average_time))
cutoff_time = float(input("Enter cutoff time to qualify: "))
average_time = 0
#NEED A LOOP HERE
print("Average for qualifying runners: " + str(average_time))
```

@tab Code

```python
# This will be our continue flag... if it's set to 'N', we're done. 
# If it's set to 'Y' (or anything else), we add more runners.
cont = "Y"

# Lists to hold our runners and their times, so runners[n] will be the name of
# the n'th place finisher and times[n] will be their time (in minutes).
runners = []
times = []

# Loop until the user says they're out of runners to process.
while cont != "N":
    # Get the name and time of the next runner.
    runner_name = input("Please enter the name of the next runner: ")
    runner_time = float(input("Please enter the runner's time: "))
    
    # Add the name and time to their respective lists.
    runners.append(runner_name)
    times.append(runner_time)
    
    # Ask if the user is done.
    cont = input("Any more runners to add? (Y/N): ")

# Calculate the average time of all runners.
total = 0
num_runners = 0
for next_time in times:
    total += next_time
    num_runners += 1
print("Average time of all runners: " + str(total / num_runners))

# Calculate the average time and list of qualified runners.
total = 0
max_num_runners = int(input("Enter the number of runners who qualified: "))

# Loop over the positions (0, 1, 2, etc.) to access both lists (names and times).
for runner_num in range(0, max_num_runners):
    total += times[runner_num]
    print(runners[runner_num] + " qualified")
print("Average time for qualified runners: " + str(total / max_num_runners))

# Handle cutoff time to qualify.
cutoff_time = float(input("Enter cutoff time to qualify: "))
total = 0

# We need to keep track of our own position and values this time.
num_runners = 0
next_runner = runners[0]
next_time = times[0]

# Keep looping until we hit a time that doesn't qualify.
while next_time < cutoff_time:
    print(next_runner + " qualified")
    total += next_time
    
    # Update the counter and fetch the next runner.
    num_runners += 1
    if num_runners >= len(runners):  # Ensure we don't exceed the list size.
        break
    next_runner = runners[num_runners]
    next_time = times[num_runners]
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

