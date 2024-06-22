---
title: Assignment 8
date: 2023-06-04 10:06:18
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

**Problem 1 (4 points)**

Write a Python program that asks the user for a number and store it in the variable n. Then, the main process creates two child processes (both must be children of the main process). One child exits successfully if n>10 and unsuccessfully otherwise, whereas the other child exits successfully if n>20 and unsuccessfully otherwise. The main process must print how many of its children ended successfully. The children must be allowed to run in parallel.

> 编写一个Python程序，要求用户输入一个数字并将其存储在变量n中。然后，主进程创建两个子进程（两个子进程都必须是主进程的子进程）。一个子进程如果n>10则成功退出，否则不成功退出；另一个子进程如果n>20则成功退出，否则不成功退出。主进程必须打印出有多少个子进程成功结束。子进程必须允许并行运行。

Use the following template:

```python
from os import waitpid,fork
n=float(input('Give me a number: '))
# write your code here
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

