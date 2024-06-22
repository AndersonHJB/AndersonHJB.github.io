---
title: Final Project
date: 2023-06-05 11:29:52
icon: code
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - SCU CS
    - Santa Clara University
    - 圣克拉拉大学
tag:
    - Python 一对一教学
    - SCU CS
    - Santa Clara University
    - 圣克拉拉大学
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

## **Problem 2 (5 pts)**

Position yourself in /home/OMIS107 before solving this problem. Copy into your directory myexam (example: /home/fakestudent/myexam) all of the files in /home/OMIS107/final/files whose name satisfies both conditions:

> 在解决这个问题之前，请先定位到/home/OMIS107。将/home/ omis107 /final/files目录下所有满足以下两个条件的文件复制到你的目录myexam(例如:/home/fakestudent/myexam):

1. The name contains at most 3 characters,

    > 名称最多包含3个字符，

2. The name ends with “2”.

    > 名称以“2”结尾。

Use relative pathnames only (i.e., do not use absolute pathnames to solve this problem)

> 仅使用相对路径名(即，不要使用绝对路径名来解决此问题)

## **Problem 5 (6 pts)**:

Show the details of the existing processes, sorted by decreasing priority (field PRI of ps -efl) and, in case of ties, increasing PID. Make sure to exclude the header from your output.

> 显示现有进程的详细信息，按优先级递减排序(ps -efl的字段PRI)，如果并列，则增加PID。确保从输出中排除头信息。

```bash
ps -efl --no-headers | sort -k7nr -k4n
```

## **Problem 6 (6 pts)**:

How many `files/directories` in `/usr/lib` are regular files? Recall that the lines of ls -l corresponding to regular files start with a hyphen (-). Your code must return just one number.

> 在`/usr/lib`中有多少个`files/ directory `是普通文件?回想一下，ls -l对应于普通文件的每一行都以连字符(-)开头。代码必须只返回一个数字。



## **Problem 7 (6 pts)**

The file /home/OMIS107/final/grouplist reports the name of a few user groups, with a different group in each line. Is the current user’s second group (the one listed second when executing groups) present in that file? Print 0 for no and 1 for yes. Your code must work for any user and even if the content of the directory files is changed.

> /home/OMIS107/final/grouplist文件报告了一些用户组的名称，每一行都有一个不同的组。当前用户的第二个组(执行组时列出的第二个组)是否存在于该文件中?打印0表示no，打印1表示yes。你的代码必须适用于任何用户，即使目录文件的内容发生了更改。





## **Scripting (35 pts)**

**Problem 8 (35 pts)**

Count the number of sessions opened (i.e., lines in who) for each user (even for those users with no active connection). The list of all users can be found in the file `/etc/passwd` (the characters before the first “:”). Format your output differently, depending on whether the user has 0 active sessions (first line below), between 1 and 3 active sessions (second line below), or more than 3 active sessions (third and fourth line below).

> 统计每个用户(甚至是那些没有活动连接的用户)打开的会话数(即who中的线路数)。所有用户的列表可以在文件`/etc/passwd`中找到(第一个":"之前的字符)。根据用户是否有0个活动会话(下面第一行)，1到3个活动会话(下面第二行)，或者超过3个活动会话(下面第三行和第四行)，以不同的方式格式化输出。

At the end, your code must also print how many users have more than 3 active sessions (last line below).

> 最后，你的代码还必须打印出有多少用户的活动会话超过3个(下面的最后一行)。

```bash
User samo is not connected
User msamorani has between 1 and 3 sessions
User labinstructor has more than 3 sessions
User fakestudent has more than 3 sessions
There are 2 users with more than 3 sessions
```



::: code-tabs

@tab 1

```bash
#!/bin/bash

declare -A user_sessions
over_3_users=0

while IFS=: read -r username _; do
    sessions=$(who | grep -c "^$username ")
    user_sessions[$username]=$sessions
done </etc/passwd

for user in "${!user_sessions[@]}"; do
    if [[ ${user_sessions[$user]} -eq 0 ]]; then
        echo "User $user is not connected"
    elif [[ ${user_sessions[$user]} -gt 0 && ${user_sessions[$user]} -le 3 ]]; then
        echo "User $user has between 1 and 3 sessions"
    else
        echo "User $user has more than 3 sessions"
        ((over_3_users++))
    fi
done

echo "There are $over_3_users users with more than 3 sessions"
```

@tab 2

```bash
#!/bin/bash

declare -A user_sessions
over_3_users=0

# Save the output of `who` command
who_output=$(who)

while IFS=: read -r username _; do
    sessions=$(echo "$who_output" | grep -c "^$username ")
    user_sessions[$username]=$sessions
done </etc/passwd

for user in "${!user_sessions[@]}"; do
    if [[ ${user_sessions[$user]} -eq 0 ]]; then
        echo "User $user is not connected"
    elif [[ ${user_sessions[$user]} -gt 0 && ${user_sessions[$user]} -le 3 ]]; then
        echo "User $user has between 1 and 3 sessions"
    else
        echo "User $user has more than 3 sessions"
        ((over_3_users++))
    fi
done

echo "There are $over_3_users users with more than 3 sessions"
```

:::



## **Memory Management (5 pts)**

**Problem 9 (5 pts)**

::: code-tabs

@tab 1

```cpp
#include <stdio.h>

void main(void) {
    int n = 5;
    char s[3] = "no";
    int m = 6;
    printf("The address of n is %p\n", &n);
    printf("The address of s[0] is %p\n", &s[0]);
    printf("The address of s[1] is %p\n", &s[1]);
    printf("The address of s[2] is %p\n", &s[2]);
    printf("The address of m is %p\n", &m);
}
```

@tab 2

```cpp
#include <stdio.h>

int main(void) {
    int n = 5;
    char s[3] = "no";
    int m = 6;
    printf("The address of n is %p\n", &n);
    printf("The address of s[0] is %p\n", &s[0]);
    printf("The address of s[1] is %p\n", &s[1]);
    printf("The address of s[2] is %p\n", &s[2]);
    printf("The address of m is %p\n", &m);
}
```



:::

Which one is a possible output of the code above? (No need to write an explanation)

(a)

The address of n is 0x7ffe27591d1c

The address of s[0] is 0x7ffe27591d19

The address of s[1] is 0x7ffe27591d1a

The address of s[2] is 0x7ffe27591d1b

The address of m is 0x7ffe27591d1f

(b)

The address of n is 0x7ffe27591d1c

The address of s[0] is 0x7ffe27591d19

The address of s[1] is 0x7ffe27591d1a

The address of s[2] is 0x7ffe27591d1b

The address of m is 0x7ffe27591d14

(c)

The address of n is 0x7ffe27591d1c

The address of s[0] is 0x7ffe27591d1b

The address of s[1] is 0x7ffe27591d1a

The address of s[2] is 0x7ffe27591d19

The address of m is 0x7ffe27591d14



## **Process Management (25 pts)**

Using only the function that we have seen in class (fork, wait, waitpid, exit), write a Python program that asks the user for two floats *n1 and n2*, and then it computes and prints their sum (n1+n2), their product (n1*n2), and their difference (n1-n2). However, the execution order depends on n1 and n2, as follows.

> 请使用我们在课堂上见过的函数（fork、wait、waitpid、exit）编写一个Python程序，程序会要求用户输入两个浮点数*n1和n2*，然后计算并打印它们的和（n1+n2）、积（n1*n2）和差（n1-n2）。然而，执行顺序取决于n1和n2的值，如下所示。

If n1>n2:

1. Sum and Product must be computed first and in parallel (i.e., so that the two outputs can theoretically be printed in any order),

> 求和和乘积必须首先并行计算（即两个输出理论上可以以任何顺序打印）。

2. Afterwards, compute the difference (n1-n2)

> 之后，计算差值（n1-n2）。

Otherwise (n1 <= n2):

1. Sum and difference must be computed first and in parallel (i.e., so that the two outputs can theoretically be printed in any order),

> 求和和差必须首先并行计算（即，两个输出理论上可以以任意顺序打印）。

2. Afterwards, compute the product

> 之后，计算乘积。

Use the smallest number of processes possible. Your processes must never be in zombie state. Use the code below to get started.

> 尽量使用最少数量的进程。你的进程绝不能处于僵尸状态。使用下面的代码开始工作。

### **Template:**

```bash
from os import wait,fork
n1=float(input('Give me a n1: '))
n2=float(input('Give me a n2: '))
```

::: code-tabs

@tab 1

```python
import os

# input
n1 = float(input('Give me a n1: '))
n2 = float(input('Give me a n2: '))

# Create child processes to handle the parallel tasks
if n1 > n2:
    pid = os.fork()
    
    if pid == 0:  # Child Process
        print('Sum: ', n1+n2)
        os._exit(0)
    else:  # Parent Process
        pid2 = os.fork()
        if pid2 == 0:  # Child Process
            print('Product: ', n1*n2)
            os._exit(0)
        else:  # Parent Process
            os.waitpid(pid, 0)  # wait for first child process
            os.waitpid(pid2, 0)  # wait for second child process
            print('Difference: ', n1-n2)
else:
    pid = os.fork()

    if pid == 0:  # Child Process
        print('Sum: ', n1+n2)
        os._exit(0)
    else:  # Parent Process
        pid2 = os.fork()
        if pid2 == 0:  # Child Process
            print('Difference: ', n1-n2)
            os._exit(0)
        else:  # Parent Process
            os.waitpid(pid, 0)  # wait for first child process
            os.waitpid(pid2, 0)  # wait for second child process
            print('Product: ', n1*n2)
```

@tab 2

```python
import os

# input
n1 = float(input('Give me a n1: '))
n2 = float(input('Give me a n2: '))

if n1 > n2:
    pid = os.fork()

    if pid == 0:  # Child Process
        print('Sum: ', n1+n2)
        print('Product: ', n1*n2)
        os._exit(0)
    else:  # Parent Process
        os.waitpid(pid, 0)  # wait for child process
        print('Difference: ', n1-n2)
else:
    pid = os.fork()

    if pid == 0:  # Child Process
        print('Sum: ', n1+n2)
        print('Difference: ', n1-n2)
        os._exit(0)
    else:  # Parent Process
        os.waitpid(pid, 0)  # wait for child process
        print('Product: ', n1*n2)

```

@tab 3

```python
import os

# 输入两个浮点数
n1 = float(input('Give me a n1: '))
n2 = float(input('Give me a n2: '))

# 根据题目要求，当n1大于n2时
if n1 > n2:
    # 创建第一个子进程来计算和
    pid1 = os.fork()

    # 在子进程中计算和并打印结果，然后使用os._exit(0)结束子进程
    # 避免创建僵尸进程
    if pid1 == 0:
        print('Sum: ', n1 + n2)
        os._exit(0)

    # 创建第二个子进程来计算乘积
    pid2 = os.fork()

    # 在子进程中计算乘积并打印结果，然后使用os._exit(0)结束子进程
    # 避免创建僵尸进程
    if pid2 == 0:
        print('Product: ', n1 * n2)
        os._exit(0)

    # 等待子进程完成，这个函数调用会阻塞父进程，直到指定的子进程结束
    os.waitpid(pid1, 0)
    os.waitpid(pid2, 0)

    # 所有子进程结束后，计算并打印差
    print('Difference: ', n1 - n2)

# 当n1小于或等于n2时
else:
    # 创建第一个子进程来计算和
    pid1 = os.fork()

    # 在子进程中计算和并打印结果，然后使用os._exit(0)结束子进程
    # 避免创建僵尸进程
    if pid1 == 0:
        print('Sum: ', n1 + n2)
        os._exit(0)

    # 创建第二个子进程来计算差
    pid2 = os.fork()

    # 在子进程中计算差并打印结果，然后使用os._exit(0)结束子进程
    # 避免创建僵尸进程
    if pid2 == 0:
        print('Difference: ', n1 - n2)
        os._exit(0)

    # 等待子进程完成，这个函数调用会阻塞父进程，直到指定的子进程结束
    os.waitpid(pid1, 0)
    os.waitpid(pid2, 0)

    # 所有子进程结束后，计算并打印乘积
    print('Product: ', n1 * n2)
```

:::

关于 3 的代码讲解：

关于如何符合题目要求的部分：

1. **使用了我们在课堂上看到的函数**：该程序使用了`fork`、`waitpid`和`os._exit`函数。`fork`用于创建新的进程，`waitpid`用于等待子进程结束，而`os._exit`则用于结束当前的子进程。

2. **计算和打印指定的数学运

算**：程序会根据用户输入的两个浮点数（n1和n2）以及n1和n2之间的关系，来决定先计算和打印哪两个运算（和与积或和与差）。

3. **并行计算两个运算**：对于需要并行计算的两个运算，程序会为每个运算创建一个子进程，这样它们就可以并行执行，而不需要等待另一个运算完成。

4. **没有僵尸进程**：通过使用`os.waitpid`函数等待每个子进程结束，程序可以确保没有僵尸进程。此外，子进程在完成其任务后会调用`os._exit`函数立即结束，这也有助于防止僵尸进程的产生。

5. **使用了最少的进程**：每个需要并行执行的运算都有一个对应的子进程，这是实现并行计算的最小进程数量。总共使用了两个子进程，加上主进程，一共三个进程。



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

