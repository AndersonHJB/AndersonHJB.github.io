---
title: Assignment 2
date: 2023-05-31 11:08:50
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

## Instructions:

Write the commands needed to solve the following exercises on mis01.scu.edu. **Do not worry about upper/lower case.**

## Problem 1

First, make a directory temp inside your personal directory. Then, position yourself in directory temp. Use relative pathnames to copy into temp all of the files in `/home/OMIS107/HW2` whose name ends with 120, 121, 122, ..., up to 180 included. (one or two cp commands)

> 首先，在你的个人目录中创建一个目录 temp。然后，定位到目录 temp中，使用相对路径名将`/home/OMIS107/HW2`中所有以120、121、122、…结尾的文件复制到temp中。，包括180个。(一个或两个cp命令)

### Solution with two commands

```bash
cp ../../OMIS107/HW2/*1[2-7][0-9] .
cp ../../OMIS107/HW2/*180 .
```

### Solution with one command

```shell
cp ../../OMIS107/HW2/*180 ../../OMIS107/HW2/*1[2-7][0-9] .
```





## Problem 2

Position yourself in `/home/OMIS107/Lecture2`. Print the lines of alice.txt where the word “Alice” appears *shortly* before an exclamation point. Here, we say that Alice appears “shortly” before an exclamation mark if there are at most 7 other characters between the “e” of Alice and “!”.

> 将自己定位在`/home/OMIS107/Lecture2`目录下。打印出alice.txt中在感叹号前“不久之前”出现单词“Alice”的行。在此，我们认为如果在“Alice”的“e”和“!”之间最多只有7个其他字符，则Alice出现“不久之前”在感叹号之前。

### Solution

```bash
grep -Ein "\bAlice.?.?.?.?.?.?.?!" alice.txt
grep -Ein "alice.?.?.?.?.?.?.?!" alice.txt
grep -Ein "alice.{0,7}!" alice.txt
grep -Ein "alice.{,7}!" alice.txt
```

## Problem 3

Position yourself in /home/OMIS107/Lecture2. Print the lines of *alice.txt* that contain the string “form” as part of a longer word.

> 将自己定位在`/home/OMIS107/Lecture2`目录下。打印出alice.txt中包含字符串“form”作为较长单词的一部分的行。

Examples of line to retrieve:

> 可检索的示例行：

- “I need more information”

    > “我需要更多的信息。”

- “Who did you inform about it?”

    > “你向谁通报了这件事？”

- “Nice formation”

    > “好的阵型”

Example of line NOT to retrieve: “you first form a line” (form is not part of a longer word)

> 不需要检索的行的示例：“你们先排成一列”（form不是较长单词的一部分）

```shell
grep -Ein "[a-z]form|form[a-z]" alice.txt
grep -Ein "[a-z]+form|form[a-z]+" alice.txt
grep -Ein "[a-z]+form|form[a-z]+|[a-z]+form[a-z]+" alice.txt
```

## Problem 4

Position yourself in /home/OMIS107/Lecture2. Print the lines of *alice.txt* where both “q” and “a” appear in the same word.

```shell
grep -Ein "q[a-z]*a|a[a-z]*q" alice.txt
```

**Extra Problem in class**

Position yourself in /home/OMIS107/Lecture2. Replace all words where both “q” and “a” appear with -----. 

**Solution**

```shell
sed -r "s/[a-z]*q[a-z]*a[a-z]*|[a-z]*a[a-z]*q[a-z]*/-----/g" alice.txt
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

