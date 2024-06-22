---
title: 2023SM1-Midterm 刷题
date: 2023-08-26 16:46:32
icon: c
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - 墨尔本大学C语言辅导
    - 墨尔本大学C语言一对一辅导
    - 墨尔本大学C语言期中考
tag:
    - Python 一对一教学
    - 墨尔本大学C语言辅导
    - 墨尔本大学C语言一对一辅导
    - 墨尔本大学C语言期中考
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

## Exercise 1:

::: tabs

@tab EN

Write a main function that reads a line from keyboard as the input and prints the number of vowels in that line. A line is a sequence of characters that ends with a newline character (`\n`) The vowels are `'a'`, `'e'`, `'i'`. `'o'`. and `'u'`.

The characters can be either lower-case or upper-case letters.Some examples of the inputs and outputs are:

```c
./program
Enter a line: Mary had a little lamb
Number of vowels: 6
./program
Enter a line: HEllO world
Number of vowels: 3
./program
Enter a line: 1234
Number of vowels: 0
```

Hint: You do not need string operations for this question.

@tab ZH

以下是翻译：

## 练习1:

编写一个主函数，从键盘读取一行作为输入，并打印该行中的元音字母数量。一行是一个以换行字符 (`\n`) 结束的字符序列。元音字母包括 `'a'`, `'e'`, `'i'`, `'o'` 和 `'u'`。

字符可以是小写或大写字母。以下是输入和输出的一些示例：

```c
./program
输入一行: Mary had a little lamb
元音数量: 6
./program
输入一行: HEllO world
元音数量: 3
./program
输入一行: 1234
元音数量: 0
```

提示：在这个问题中，你不需要使用字符串操作。

:::

```c
#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>  // 用于tolower函数

bool is_vowel(char c) {
    c = tolower(c);  // 转为小写，以便处理大小写情况
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int main() {
    char ch;
    int count = 0;  // 用于统计元音的数量

    printf("Enter a line: ");
    while ((ch = getchar()) != '\n') {  // 逐个读取字符，直到读到换行符为止
        if (is_vowel(ch)) {
            count++;
        }
    }

    printf("Number of vowels: %d\n", count);
    return 0;
}
```



## Exercise 6:

Given a number N, in cryptography and number theory, we often check if the factors of N that are prime are less thanor equal to K. If yes, we will call N a K-secret number.

Note that i is always the first K-secret number given any K.

For example, The factors of 11 are 1, 11. Both 1 and 11 are prime, while 11 is not less than or equal to 7. Therefore 11 is not 7-secret.

The factors of 44 are i, 2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 36, 48, 72, 144. Of these, 2, and 3 are prime. Both 2 and 3 are less than7, so 144 is 7-secret.

题目中介绍了一个概念叫做`K-secret`数字。一个数字被称为`K-secret`数字，如果它的所有质数因子都小于或等于`K`。

**质数因子**是指这个数字可以被一个质数整除，而这个质数也是这个数字的因子。

题目给出了一些例子：
1. 11的因子有1和11，这两个都是质数。但是11不小于或等于7，所以11不是7-secret数字。
2. 144的因子有很多，其中质数因子是2和3。2和3都小于7，所以144是7-secret数字。

题目要求您编写一个函数`secret_math`，这个函数接受四个参数`i`、`j`、`K1`和`K2`，并返回第`i`个`K1-secret`数字与第`j`个`K2-secret`数字的和。

为了更好地完成这个任务，您可能还需要编写另一个支持的函数`secret`，它返回第`i`个`K-secret`数字。

例如，函数调用`secret_math(5, 2, 3, 7)`应该返回8。因为第5个3-secret数字是6，第2个7-secret数字是2，所以6 + 2 = 8。

您还可以假设已经为您提供了一个函数`isprime`，这个函数可以检查一个数字是否为质数。如果是质数，它返回1，否则返回0。

您的任务是根据上述要求编写`secret`和`secret_math`函数。



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
