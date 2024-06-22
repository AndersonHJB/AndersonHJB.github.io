---
title: 墨尔本大学C语言期中考
date: 2023-08-23 11:39:00
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

## 1. Ex7.04: Integer frequencies

### 1.1 Task

Write a program that reads as many as 1,000 integer values, and counts the frequency of each value in the input.

> 编写一个程序，读取多达 1000 个整数值，并计算输入中每个值的频率。

### 1.2 Sample output

There are no tabs in the output.

> 输出中没有制表符。

```c
Enter as many as 1000 values, ^D to end
1 3 4 6 4 3 6 10 3 5 4 3 1 6 4 3 1
17 values read into array
Value   Freq
   1      3
   3      5
   4      4
   5      1
   6      3
  10      1
```

::: warning Hints

There are two quite different algorithms for this problem. Can you identify both of them? One of them imposes an upper limit on the input values so is less general than the other. Does it have any compensating advantages?

:::

::: info `arrayops.h` available

The `arrayops.h` library provides the functions `read_int_array`, `int_swap`, `sort_int_array` and `print_int_array`. You may use it if needed.

:::

### 1.3 解析

::: code-tabs

@tab 学员代码

```c
#include <stdio.h>

int main() {
    int input_number[1000];
    int input_frequence[1000] = {0};
    int count = 0;
    printf("Enter up to 1000 integer values, Ctrl+D to end:\n");
    while (scanf("%d", &input_number[count]) == 1) {
        count++;
    }
    for (int i = 0; i < count; i++) {
        input_frequence[input_number[i]]++;
        if (input_frequence[input_number[i]] != 0) {

            printf("%d\t%d\n", input_number[i], input_frequence[input_number[i]]);
        }
    }
}
```

:::

::: code-tabs

@tab main.c

```c
#include <stdio.h>
#include "arrayops.h"  // 导入arrayops.h库，这个库提供了数组操作的函数。

int main(void) {
    int values[1000];  // 定义一个可以存放最多1000个整数的数组。
    int n, i, current, count;  // 定义变量：n用于存放实际读取的整数数量，i用于循环，current存放当前正在处理的整数，count存放current的频率。

    // 提示用户输入数据
//    printf("Enter as many as 1000 values, ^D to end\n");

    // 使用read_int_array函数读取输入的整数并存放到values数组中。
    // 返回值是实际读取的整数数量。
    n = read_int_array(values, 1000);
    // 输出实际读取的整数数量。
//    printf("%d values read into array\n", n);

    // 对读取的整数进行排序，这样相同的整数将位于数组中连续的位置。
    // 这使得计算每个整数的频率变得简单。
    sort_int_array(values, n);

    // 输出列标题。
    printf("Value   Freq\n");

    // 初始化i为0开始遍历数组。
    i = 0;
    while (i < n) {
        current = values[i];  // 记录当前正在处理的整数。
        count = 0;  // 初始化该整数的频率为0。

        // 如果数组中的当前整数与我们正在处理的整数相同，
        // 则增加频率计数并移动到数组的下一个位置。
        while (i < n && values[i] == current) {
            count++;
            i++;
        }

        // 输出当前整数及其频率。
        printf("%4d%7d\n", current, count);
    }

    return 0;  // 程序结束，返回0。
}
```

@tab arrayops.c

```c
/* array operations
 * Alistair Moffat, PPSAA, Chapter 7, December 2012
 * (c) University of Melbourne */
#include <stdio.h>

#include "arrayops.h"

/* ****
 * These functions are very slightly modified from insertionsort.c in Figure 7.4
 * Fig 7.4 on pg107 in PPSAA by Alistair Moffat, updating style and comments.
 * **** */

/* sorts n elements of array A in increasing order (2, 3, 4, 5)
 * using insertion sort (insertionsort.c, Figure 7.4 PPSAA) */
void
sort_int_array(int A[], int n) {
    /* assume that A[0] to A[n-1] have valid values */

    for (int i = 1; i < n; i++) {
        /* swap A[i] left into correct position (increasing order). */
        for (int j = i - 1; j >= 0 && A[j] > A[j + 1]; j--) {
            /* not there yet */
            int_swap(&A[j], &A[j + 1]);
        }
    }
}

/* exchange the values of the two variables indicated
 * by the arguments (insertionsort.c, Figure 7.4 PPSAA) */
void
int_swap(int *p1, int *p2) {
    int tmp = *p1;
    *p1 = *p2;
    *p2 = tmp;
}

/* read integers from input and store them in an array.
 * maxvals is the maximum number of elements that can be read in to the array,
 * all other values are discarded
 * returns the number of elements successfully read in
 * (insertionsort.c, Figure 7.4 PPSAA) */
int
read_int_array(int A[], int maxvals) {
    int n = 0, excess = 0, next;

    printf("Enter as many as %d values, ^D to end\n", maxvals);
    while (scanf("%d", &next) == 1) {
        if (n == maxvals) {
            excess += 1;
        } else {
            A[n] = next;
            n += 1;
        }
    }

    printf("%d values read into array", n);
    if (excess) {
        printf(", %d excess values discarded", excess);
    }
    printf("\n");
    return n;
}

/* print the elements of an array on one line
 * (insertionsort.c, Figure 7.4 PPSAA) */
void
print_int_array(int A[], int n) {
    for (int i = 0; i < n; i++) {
        printf(" %3d", A[i]);
    }
    printf("\n");
}
```

@tab arrayops.h

```c
/* arrayops.h: array operations
 * Alistair Moffat, PPSAA, Chapter 7, December 2012
 * (c) University of Melbourne */

/* read integers from input and store them in an array.
 * maxvals is the maximum number of elements that can be read in to the array,
 * all other values are discarded
 * returns the number of elements successfully read in
 * (insertionsort.c, Figure 7.4 PPSAA) */
int read_int_array(int A[], int n);

/* exchange the values of the two variables indicated
 * by the arguments (insertionsort.c, Figure 7.4 PPSAA) */
void int_swap(int *p1, int *p2);

/* sorts n elements of array A in increasing order (2, 3, 4, 5)
 * using insertion sort (insertionsort.c, Figure 7.4 PPSAA) */
void sort_int_array(int A[], int n);

/* print the elements of an array on one line
 * (insertionsort.c, Figure 7.4 PPSAA) */
void print_int_array(int A[], int n);

// see arrayops.c for implementation
```

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
