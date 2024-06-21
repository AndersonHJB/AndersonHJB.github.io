---
title: C 语言函数练习专题
date: 2023-09-05 17:09:10
author: AI悦创
isOriginal: true
category: 
    - C教程
tag:
    - C教程
icon: c
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true
---

## Question 1

**题目：** 数字分隔与求和

编写一个 C 语言函数，实现以下功能：

1. 从用户那里接受一个不超过10位的正整数。
2. 使用函数对该数字进行分隔，输出每一位数字。
3. 对这些数字求和并输出。

**函数原型：**

```c
void processAndSumDigits(long num);
```

**示例：**

输入：
```
12345
```

输出：
```
Digits: 1 2 3 4 5
Sum: 15
```

**提示：**

你可以使用循环来遍历整数的每一位，并进行相应的运算。

祝你编码愉快！

```c
#include <stdio.h>

// 声明函数原型
void processAndSumDigits(long num);

int main() {
    long number;

    // 从用户那里接受一个不超过10位的正整数
    printf("Enter a positive integer (up to 10 digits): ");
    scanf("%ld", &number);

    // 处理数字并求和
    processAndSumDigits(number);

    return 0;
}

// 函数定义
void processAndSumDigits(long num) {
    int digits[10]; // 存储最多10位的整数
    int count = 0;  // 计数器用于确定数字的位数
    int sum = 0;    // 初始化和为0

    // 分隔数字并存储在数组中
    while (num > 0) {
        digits[count] = num % 10;  // 获取数字的最后一位
        sum += digits[count];      // 将该数字添加到总和中
        num /= 10;                 // 移除数字的最后一位
        count++;                   // 递增计数器
    }

    // 输出每一位数字
    printf("Digits: ");
    for (int i = count - 1; i >= 0; i--) {
        printf("%d ", digits[i]);
    }
    printf("\n");

    // 输出数字的和
    printf("Sum: %d\n", sum);
}
```

**注释解释：**

1. `int digits[10];` 这行定义了一个数组，用于存储整数的每一位。
2. 我们使用 `while` 循环来逐位处理整数。
3. 在 `while` 循环中，我们使用 `num % 10` 来获取整数的最后一位，并将其添加到数组中。
4. 之后，我们将整数除以10，以便移除其最后一位。
5. 在 `for` 循环中，我们从数组的最后一个元素开始遍历（即整数的第一位），并输出每一位。

此代码将接受用户输入的整数，然后输出它的每一位和这些数字的总和。













::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web、Sql」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
