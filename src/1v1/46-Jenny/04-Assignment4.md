---
title: Assignment 4
date: 2023-06-07 10:37:55
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

## Exercise 1 (1 point)

Position yourself in `/home/OMIS107/Lecture7`. Print the lines of students.txt relative to those students in MGMT that completed 2, 3, or 4 courses.

> 将自己定位在`/home/OMIS107/Lecture7`目录下。打印与MGMT学生完成2、3或4门课程相关的 students.txt 文件中的行。

```bash
awk -F"," '{if ($3=="MGMT" && $4>=2 && $4<=4) print $0}' students.txt
awk -F"," '{if ($3=="MGMT" && ($4==2 || $4==3 || $4==4)) print $0}' students.txt
awk -F"," '{if ($3=="MGMT" && $4~/^[234]$/) print $0}' students.txt
```

::: details

这三条命令在功能上是等价的，都用来从文件 "students.txt" 中选择特定的行进行输出，使用的工具是awk，这是一种文本处理语言，常常用于数据抽取和报告生成。让我们一起来详细分析一下这三条命令：

1. `awk -F"," '{if ($3=="MGMT" && $4>=2 && $4<=4) print $0}' students.txt`
2. `awk -F"," '{if ($3=="MGMT" && ($4==2 || $4==3 || $4==4)) print $0}' students.txt`
3. `awk -F"," '{if ($3=="MGMT" && $4~/^[234]$/) print $0}' students.txt`

首先，每条命令都包含 `-F","`，这告诉 awk以逗号（`,`）为字段分隔符，这是处理CSV文件或者其他以逗号分隔的数据文件常用的方式。

`'{if ($3=="MGMT" && $4>=2 && $4<=4) print $0}'` 是 awk 的脚本部分，它告诉awk要执行的动作。这部分的含义是：如果第三个字段（$3）等于 "MGMT" 且第四个字段（$4）的值在2到4之间（包括2和4），那么就打印（print）整行（$0）。

然后，`students.txt` 是命令的输入文件，awk会从这个文件中读取数据。

这三条命令的区别主要在于判断第四个字段值的方式：
- 第一条命令使用 `>=` 和 `<=` 运算符进行数值比较。
- 第二条命令则是列举出所有满足条件的可能值，用 `||`（或）运算符连接。
- 第三条命令使用正则表达式（`$4~/^[234]$/`）来匹配符合条件的字段值。这里，`/^[234]$/` 是一个正则表达式，表示只含有单个字符且该字符为2、3、4的字符串。

总的来说，这三条命令的功能是：从 "students.txt" 文件中查找第三个字段是 "MGMT" 且第四个字段的值为2、3或4的所有行，然后输出这些行。

:::



## Exercise 2 (1 point)

Position yourself in `/home/OMIS107/Lecture7`. Print the lines of students.txt relative to those students whose first name and last name are both composed of at least 8 letters.

> 将自己定位在`/home/OMIS107/Lecture7`目录下。打印与名字和姓氏均由至少8个字母组成的学生相关的students.txt文件中的行。

```python
awk -F"," '{if ($2 ~ /[A-Za-z]{8,} [A-Za-z]{8,}/) print $0}' students.txt
```





## Exercise 3 (1 point)

Position yourself in `/home/OMIS107/Lecture7`. We want to find the average GPA of the best students in students.txt. Write a command that computes the average GPA computed only among those students whose GPA is greater than 3. Your code must return only a number; do not print anything else.

> 将自己定位在`/home/OMIS107/Lecture7`目录下。我们想要找到students.txt文件中最好的学生的平均GPA。编写一个命令，只计算GPA大于3的学生的平均GPA。您的代码只能返回一个数字，不要打印其他任何内容。

```bash
awk -F"," 'BEGIN{n=0;sum=0} {if (NR>1 && $5>3) {n+=1;sum+=$5 } } END{print sum/n}' students.txt
awk -F"," 'BEGIN{n=0;sum=0} {if (NR>1 && $5>3) n+=1;sum+=$5  } END{print sum/n}' students.txt (WRONG, because sum is modified regardless of the student’s GPA)
awk -F"," 'BEGIN{n=0;sum=0} {if ( $5>3) {n+=1;sum+=$5 } } END{print sum/n}' students.txt (WRONG, because it counts the header)
```











::: details 

在 `awk` 语言中，`~` 是一个运算符，它用于进行正则表达式匹配。如果某个字符串（在这个例子中是 `$2`，即第二个字段的内容）匹配到了某个正则表达式（在这个例子中是 `/[A-Za-z]{8,} [A-Za-z]{8,}/`），那么 `~` 运算符就会返回 `true`。

所以，`$2 ~ /[A-Za-z]{8,} [A-Za-z]{8,}/` 的意思是，“如果第二个字段的内容匹配正则表达式 `[A-Za-z]{8,} [A-Za-z]{8,}/`，则返回 `true`”。

这个正则表达式要求字符串至少包含两个由空格分隔的部分，每个部分至少有8个字母。如果这个条件满足，那么 `awk` 就会执行 `{print $0}`，打印出整行的内容。

因此，整个命令的意思就是，对于 `students.txt` 文件中的每一行，如果其第二个字段的内容包含至少两个由空格分隔的部分，每个部分至少有8个字母，那么就打印出这一行。

:::



::: details 

- `awk '{`：这一行启动了一个 `awk` 程序，`awk` 是一种用于处理文本的语言，非常适合处理表格和数据库等结构化的文本数据。

- `for (i = 1; i <= NF; i++)`：这一行开始一个循环，从第一个字段开始，一直到最后一个字段（在 `awk` 中，字段的数量存储在 `NF` 变量中）。假设输入是一个由空格分隔的文本文件，那么每个字段就对应于一个单词。

- `words[$i]++`：这行代码将字段（也就是单词）作为 `words` 数组的键，并将其值增加1。如果这个单词之前没有出现过，那么 `awk` 将会创建一个新的数组元素，初始值为0，然后增加1。如果这个单词之前已经出现过，那么 `awk` 就会找到相应的数组元素，然后增加1。

- `}`：这一行结束了主体部分，主体部分的代码将会对输入文件的每一行执行一次。

- `END {`：这一行开始了一个特殊的代码块，只在 `awk` 处理完输入文件的所有行之后执行一次。

- `for (w in words)`：这一行开始一个循环，遍历 `words` 数组的所有元素。`awk` 的数组是关联数组，这意味着元素的键可以是任何字符串，而不仅仅是数字。在这个例子中，键是单词，值是单词出现的次数。

- `print w, words[w]`：这一行打印每个单词以及其出现的次数。

- `}' filename`：这一行结束了 `awk` 程序，并指定了输入文件的名称。

综上所述，这个 `awk` 脚本读取输入文件，统计每个单词的出现次数，然后打印结果。

:::





















































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

