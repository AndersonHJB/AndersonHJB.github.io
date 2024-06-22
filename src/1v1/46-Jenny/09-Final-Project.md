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

## Problem 1 (1 pt)

Make a subdirectory myfinal inside your own directory

### Solution:

```bash
mkdir myfinal
```

## Problem 2 (5 pts)

Positionyourselfinmyfinal. Copyfrom/home/OMIS107/practice_final/filesto your myfinal directory the files whose name contains the letter “t”, followed later on (not necessarily right after) by the string “99”. Use only one command and use relative pathnames only (i.e., do not use absolute pathnames).

Linux 命令行以及很多脚本语言（包括 sed、awk、bash 等）中，单引号 (`' '`) 和双引号 (`" "`) 的使用有着一些重要的区别。

1. 单引号 (`' '`)
   - 单引号中的任何字符都会原样输出，它们都被认为是字符串的一部分。
   - 单引号字符串中的变量是不会被扩展或解析的。
   - 例如，在 bash 中，`echo '$USER'` 将输出字符串 `$USER`，而不是你的用户名。

2. 双引号 (`" "`)
   - 双引号中的字符串可以进行变量替换或命令替换。
   - 双引号字符串中的变量会被解析并替换为它们的值。
   - 例如，在 bash 中，`echo "$USER"` 将输出你的用户名。

当使用 sed、awk 等工具时，这些规则仍然适用。例如，如果你在 awk 命令中使用双引号，那么 bash 将会在 awk 命令运行之前解析任何变量。如果你不希望这样，就可以使用单引号来阻止变量扩展。例如：

```bash
name='world'
echo 'Hello, $name' | awk '{print $1}'  # 输出 "Hello,"
echo "Hello, $name" | awk '{print $1}'  # 输出 "Hello,"
```

在第一个例子中，`$name` 仍然是 `$name`，而在第二个例子中，`$name` 在 awk 命令运行之前就已经被替换为 `world` 了。

请注意，这些规则可能会根据你使用的具体工具或脚本语言略有不同。总的来说，使用单引号和双引号的主要区别在于是否允许变量替换。

## 4

Position yourself in /home/OMIS107/practice_final. Replace the occurrences in alice.txt as in the examples below:

- Nothing can be clearer than THAT → Nothing can be more clear than THAT
- And sooner than → And more soon than
- Better to say than → Better to say than (unchanged because “better” is not immediately followed by “than”)







1. `ps aux`：这是一个常用的命令，用来查看系统中所有的运行中的进程。这个命令的输出有很多列，其中包括进程的 PID、CPU 和内存使用率、命令等。其中的 `aux` 参数的含义是：
   - `a`：显示所有用户的进程；
   - `u`：显示进程的详细状态；
   - `x`：显示没有控制终端的进程。

2. `| awk '{if ($8 ~ /^S/ && NR > 1) print $0}'`：这是一个管道命令，将 `ps aux` 的输出传递给 `awk` 命令。`awk` 是一种编程语言，常常用于处理文本和数据。在这里，`awk` 的命令是 `{if ($8 ~ /^S/ && NR > 1) print $0}`，其含义是：
   - `$8 ~ /^S/`：如果第 8 列（即进程状态列）的开始部分是 `S`（代表睡眠状态）；
   - `NR > 1`：从第二行开始处理，因为第一行是标题行；
   - `print $0`：如果以上两个条件都满足，就打印整行。

3. `| wc -l`：这是另一个管道命令，将 `awk` 的输出传递给 `wc -l`。`wc` 是 "word count" 的缩写，用于计算文本中的字节数、字数或行数。`-l` 参数表示只计算行数。

所以，整个命令的意思是“计算当前系统中处于睡眠状态的进程数量”，并且这个数量是不包括标题行的。





`whoami | wc -c，外面为什么需要$()？`

`$()` 是 Bash shell 中的一个命令替换（command substitution）操作符。它的作用是执行括号内的命令，并将命令的结果替换到当前位置。

在你给出的命令 `head -$(($(whoami | wc -c)-1)) alice.txt | tail -1` 中，你会看到两个 `$()`。最内层的 `$(whoami | wc -c)` 是获取用户名长度的命令。外层的 `$((...-1))` 是做数学运算，即将用户名长度减1。这里外面的 `$()` 是必须的，因为 `$((...))` 是执行数学运算的 Bash 语法，它需要一个可以运算的数字，这个数字是由内层的 `$()` 执行命令并提供的。

因此，这里的 `$(whoami | wc -c)` 在执行后会被替换为用户名的长度（一个数字），然后 `$(($(whoami | wc -c)-1))` 在执行后就会被替换为用户名长度减一的结果，这个结果又作为 `head` 命令的参数。

所以说，外面的 `$()` 是为了能够将内层命令执行的结果用作数学运算的输入。

## Problem 8 (35 pts)

Among the users in /home/OMIS107/practice_final/list, find those who belong to at least two groups. Who are these users? How many files/directories in /home do they own (each and in total)? Your code MUST work even if this file is changed. Write a bash script that answers these questions formatting the output as follows:

```bash
#!/bin/bash
# 定义解释器为 Bash

n=0
# 初始化变量 n，用于存储符合条件的用户在 /home 目录下的文件总数

u=0
# 初始化变量 u，用于存储符合条件的用户的数量

for user in $(cat /home/OMIS107/practice_final/list)
# 对 /home/OMIS107/practice_final/list 文件中的每一行进行循环，每一行都应该是一个用户名

do
# 循环的开始

        ngr=$(($(groups $user | wc -w)-2))
        # 计算指定用户的组数（减去 groups 命令的输出中的用户名和冒号）

        if [ $ngr -ge 2 ]
        # 检查用户是否属于至少两个组

        then
        # 条件语句的开始

                u=$((u+1))
                # 如果用户属于至少两个组，那么符合条件的用户数量加 1

                m=$(ls -l /home | awk -v u="$user" '{if ($3==u) print $0}' | wc -l)
                # 计算 /home 目录下属于当前用户的文件数量
                
                echo $user owns $m files in /home
                # 输出当前用户在 /home 目录下拥有的文件数量

                n=$((n+m))
                # 累加 /home 目录下属于所有符合条件的用户的文件数量

        fi
        # 条件语句的结束
done
# 循环的结束

echo Number of  users in list with at least two groups = $u
# 输出列表中属于至少两个组的用户数量

echo Total number of their files in /home = $n
# 输出 /home 目录下属于这些用户的文件总数

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

