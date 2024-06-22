---
title: comp10002 Foundations of Algorithms
date: 2023-08-22 08:30:19
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

::: center

## School of Computing and Information Systems

计算机与信息系统学院

#### comp10002 Foundations of Algorithms

《算法基础》

#### Mid-Semester Practice Test, August 2023

2023年8月的期中实践测试

:::

**Time Allowed**: Forty-five minutes.

> 时间限制:45分钟。

**Authorized Materials**: None.

> 授权材料:无。

**Instructions to Students**: This paper contains 30 marks, and counts for 15% of your final grade.

> 给学生的指导:这篇论文包含30分，占你最终成绩的15%。

Be sure to write your student number clearly on the hand-in answer page.

> 一定要把你的学号写清楚在答卷上。

This assessment is **closed book,** and you may **not** make use of any printed, written, electronic, or online resources.

> 此评估是保密的，您不得使用任何印刷、书面、电子或在线资源。

All questions should be answered in the spaces provided on the separate hand-in sheet. *This page is not the hand-in sheet, and will not be marked.*

> 所有问题应在单独的交卷纸上提供的空白处作答。这一页不是交卷纸，不会被标记。

You must remain in the test venue until the end of the test, and may not leave early.

> 考生必须在考试结束前留在考场，不得提前离开。

You must not communicate with any other student in any way from the moment you enter the test venue until after you have left the test venue. All phones and other network, communication, and electronic devices must be switched completely off while you are in the test room.

> 从进入考场到离开考场，不得以任何方式与其他考生交流。当你在考场时，所有的电话和其他网络、通讯和电子设备必须完全关闭。

All material that is submitted as part of this assessment must be completely your own unassisted work, and undertaken during the time period allocated to the assessment.

> 作为本次评估的一部分提交的所有材料必须完全是您自己的独立工作，并在分配给评估的时间段内进行。

Calculators and dictionaries are not permitted.

> 不允许使用计算器和字典。

In your answers you may make use of library functions, but if you do you must also provide suitable \#include lines.

> 在你的答案中，你可以使用库函数，但如果你这样做，你也必须提供合适的
>
> \# include。

You may use this sheet to prepare drafts of your answers, but you must copy all answers on to the hand-in page before the end of the test.

> 你可以用这张纸来准备你的答案草稿，但是你必须在考试结束前把所有的答案抄写在交卷页上。

Only work that is on the hand-in page will be marked. This sheet is NOT the hand-in page.

> 只有在交卷页上的作业才会被标记。这张纸不是交卷页。

*This is the specification for the function required in Question 3. Study this specification carefully, and then write your answer in the space provided on the back of the separate hand-in answer page.*

> 这是问题3中所需功能的规范。仔细研究此规范，然后在单独的交卷答案页背面提供的空白处写下您的答案。

The *root mean square distance* between two sequences $X = <x_1···x_n>$ and $Y = <y_1···y_n>$ each containing $n$ values is given by

> $X = <x_1···x_n>$ 和 $Y = <y_1···y_n>$ 两个包含 $n$ 个值的序列之间的*均方根距离*由式给出

::: center

$\large RMS(X,Y) = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i - y_i)^2}$

:::

Write a function

```c
int calc_rms(double X[], double Y[], int n, double *rms)
```

that calculates the value $RMS(X, Y)$ for the arguments $X$ and $Y$, where the sequences are stored in arrays following the usual $C$ approach, and the argument n indicates the number of values in $X$ and $Y$ that are valid.

Your function should handle two distinct cases:

- if n is negative or zero, the return value of the function should be the constant `RMS_INVALID`, and the variable indicated by the pointer rms should not be changed in any way;
- otherwise, the return value of the function should be the constant `RMS_VALID`, and the computed RMS value should be assigned to the variable indicated by the pointer rms.

Note that you do not need to define the integer constants RMS_INVALID and RMS_VALID, and you do not need to know their values. Just assume that they are predefined and available for use in your function. You may make use of functions in math.h if you wish.

You may use the remainder of this page to draft your answer if you wish. But you must **copy that draft to the hand-in answer page** before the end of the Test is announced. Only work that is on the hand-in page will be marked. **This sheet is NOT the hand-in page.**

::: details zh

这是问题3中要求的函数的说明。请仔细阅读这个说明，然后在另一张答案页的背面写下你的答案。

题目定义了一种计算两个数列之间的**均方根距离**的方法。数列 \( X \) 为 ( $<x_1, x_2, ... , x_n>$ \) ，数列 \( Y \) 为 ( $<y_1, y_2, ... , y_n>$) 。两个数列都包含 ( $n$ ) 个值。均方根距离计算公式为：

$\large \text{RMS}(X,Y) = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i - y_i)^2}$

请你为此问题写一个函数：

```c
int calc_rms(double X[], double Y[], int n, double *rms)
```

这个函数的目的是计算 ( $RMS(X, Y)$) 的值。其中，( $X$) 和 ( $Y$) 是用数组存储的数列，使用常规的C语言数组表示。参数 ( $n$ \) 表示 ( $X$ ) 和 ( $Y$ ) 中有效的数值个数。

你的函数应该处理两种不同的情况：

1. 如果 ( $n$ ) 是负数或零，函数的返回值应该是一个常量 `RMS_INVALID`，并且 `rms` 指针指向的变量不应该有任何改变。
2. 在其他情况下，函数的返回值应该是一个常量 `RMS_VALID`，并且计算出的 RMS 值应该赋值给 `rms` 指针指向的变量。

需要注意的是，你不需要定义整数常量 `RMS_INVALID` 和 `RMS_VALID`，也不需要知道它们的值。只需要假设它们已经被预先定义，并且可以在你的函数中使用。如果你想的话，你可以使用 `math.h` 中的函数。

---

基本上，题目要求你写一个函数来计算两个数组之间的均方根距离，并且考虑到某些特定的边界条件，例如当数组长度为负数或零时应该返回一个特定的常量值。

:::

::: details Answer

根据给定的题目描述，你需要为两个数组计算均方根距离（RMS）。下面是这个任务的步骤指南以及代码实现。

### 步骤指南：
1. 首先，需要检查 `n` 的值。如果 `n` 是负数或零，直接返回 `RMS_INVALID`。
2. 初始化一个叫做 `sum` 的变量为 0，用于存储两序列间的差的平方的总和。
3. 循环遍历两个数组的每个元素，并计算它们之间的差的平方。
4. 将差的平方累加到 `sum` 中。
5. 循环结束后，计算均方根距离：$\sqrt{\frac{sum}{n}}$。
6. 把计算得到的 RMS 值赋给 `*rms`。
7. 返回 `RMS_VALID`。

### 代码实现：

```c
#include <math.h>

#define RMS_INVALID ???   // 这里的 ??? 表示我们不知道这个常量的具体值，但可以假设它已经被定义。
#define RMS_VALID   ???

int calc_rms(double X[], double Y[], int n, double *rms) {
    // 检查 n 的值
    if (n <= 0) {
        return RMS_INVALID;
    }

    double sum = 0;

    // 循环遍历数组并计算差的平方
    for (int i = 0; i < n; i++) {
        double diff = X[i] - Y[i];
        sum += diff * diff;  // 计算差的平方并累加到 sum 中
    }

    // 计算均方根距离
    *rms = sqrt(sum / n);

    return RMS_VALID;
}
```

这个函数现在可以正确地计算两个数组之间的均方根距离（RMS）。如果 `n` 是非正的，则返回 `RMS_INVALID`；否则，计算 RMS 值并返回 `RMS_VALID`。

:::

## Question 1 (8 marks)

Give the value and type of each of the following C expressions. If you think the expression is not legal according to the rules of C, write error in the box.

::: warning

- true: 的本质是 1
- false: 的本质是 0
- 所有非空的都是 true，所有空的（空序列）都为 false。
- `!`: 反转，`!false == true == 1`
- `!true == false == 0`

:::

a. `11-17%3*2`

b. `2+3*4/5/2.0`

c. `-5*!0+3>2`

d. `9>8<9`

::: details 答案

a. `11-17%3*2`

计算过程如下：

```c
17%3 = 2 (余数为2)
2*2 = 4
11-4 = 7
```

结果：值是 7，类型是 `int`。

b. `2+3*4/5/2.0`

计算过程如下：

```c
3*4 = 12
12/5 = 2 (整数除法)
2/2.0 = 1.0
2+1.0 = 3.0
```

结果：值是 3.0，类型是 `double`。

c. `-5*!0+3>2`

先看 `!0`，这是逻辑非运算，结果为 `1`  (因为 0 是 false, `!0` 就是 true)。

计算过程如下：

```c
-5*1 = -5
-5+3 = -2
```

接着，我们有：

```c
-2>2
```

这是一个关系表达式，结果为 `0`（表示 false）。

结果：值是 0，类型是 `int`。

d. `9>8<9`

这是一个有趣的表达式。在 C 语言中，关系运算符是从左到右结合的。这意味着此表达式等价于 `(9>8)<9`。

计算过程如下：

```c
9>8 返回 1 (true)
然后：
1<9 也是 true，所以结果是 1。
```

结果：值是1，类型是 `int`。

总结：

- a. 值：7，类型：`int`
- b. 值：3.0，类型：`double`
- c. 值：0，类型：`int`
- d. 值：1，类型：`int`

:::

::: warning

在 C 语言中，当你试图打印一个 `bool` 类型的变量时，它实际上会被转化为整数，其中 `true` 转化为 `1`，`false` 转化为 `0`。

:::

::: warning

在 C 语言中，浮点数的默认类型确实是 `double`，而不是 `float`。当你使用一个没有后缀的浮点数常量（如 2.0）时，它的类型是 `double`。

如果你想要一个 `float` 常量，你需要在数字后加上一个 `f` 或 `F` 后缀。例如，`2.0f` 是一个 `float`。

因此，当表达式中出现 `2.0`（一个 `double` 类型）时，任何与它相关的整数或浮点数都会提升（或转换）为 `double` 类型以进行运算。结果也将是 `double` 类型。

:::

## Question 2 (8 marks)

Consider the following code sketch in which all variables are of type int, and in which n has been given a positive initial value.

```c
sum1 = sum2 = sum3 = 0;
for (i = 0; i < n; i++) {
    sum1 += 1;                  /* line1 */
    for (j = 1; j <= i - j; j++) {
        sum2 += 1;              /* line2 */
        for (k = 1; k <= j; k++) {
            sum3 += 1;          /* line3 */
        }
    }
}
```

Using the “big-Oh” notation, what is the *asymptotic* relationship between the final value of each of the variables sum1, sum2, sum3 and the starting value of n, in each case giving the simplest and most precise answer that applies.

a. Variable sum1 grows as:

b. Variable sum2 grows as:

c. Variable sum3 grows as:

d. Overall, the execution time grows as:

::: details 答案

我们将使用大 O 表示法来描述上述代码中每个 sum 变量与初始值 n 之间的渐近关系。首先，我们需要对每个循环进行分析。

首先考虑外部循环：

这是一个简单的 for 循环，从 0 到 n-1。因此，`sum1` 将增加 n 次。

a. **Variable sum1 grows as:** ($O(n)$)

接下来，考虑第二个循环：

这个循环稍微复杂一点。对于 `i = 0` , j 循环不会执行；对于 `i = 1 ` , j 也不执行；对于 `i = 2` , j执行一次，以此类推。因此，`sum2` 的增长与等差数列的和成正比，即

$\large [ 1 + 2 + ... + \frac{n}{2}]$



b. **Variable sum2 grows as:**   \($O(n^2)$)

对于最内层的循环，k 循环对于每个 j 值都会执行 j 次。因此，`sum3` 的增长是与 1 到 j 的和成正比，这也是一个等差数列的和。但由于这是一个三层的循环结构，所以 `sum3` 的增长是与立方数列成正比。

c. **Variable sum3 grows as:**  ($O(n^3)$ \)

d. **Overall, the execution time grows as:**

由于内部循环总是占据了总体执行时间的主导地位（因为它们被执行的次数最多），所以总的执行时间与最内层循环的时间复杂度成正比。[$O(n^3)$]

总结：

- a. ($O(n)$)
- b. ($O(n^2)$)
- c. ($O(n^3)$)
- d. ($O(n^3)$)

:::

### 知识点讲解

大 O 表示法（Big O notation）是计算机科学中用来描述算法复杂度的一种表示方法，尤其是在算法分析领域。它用于描述算法的最坏情况下的执行时间或所需空间与输入数据大小之间的关系。

大 O 表示法所描述的并不是算法的确切运行时间，而是随着输入大小的增长，算法的运行时间或所需空间的增长趋势。这使得我们可以比较不同算法在处理大数据时的相对效率。

一些常见的大 O 复杂度包括：
- \($O(1)$)：常数时间复杂度，表示无论输入数据有多大，算法的执行时间都是恒定的。
- \($O(\log n)$)：对数时间复杂度，例如二分搜索。
- ($O(n)$)：线性时间复杂度，表示算法的执行时间与输入数据的大小成正比，例如简单搜索。
- ($O(n \log n)$)：如归并排序或快速排序。
- ($O(n^2$))：平方时间复杂度，例如简单排序算法如冒泡排序。
- ($O(n^3)$)：立方时间复杂度，出现在三层嵌套循环的算法中。
- \($O(2^n)$)：指数时间复杂度，例如某些递归算法。
- ($O(n!)$)：阶乘时间复杂度，例如旅行商问题的暴力解法。

在大 O 表示法中，我们通常只关心最高次项，因为当输入数据非常大时，最高次项将占据主导地位，其他较小的项和常数项可以被忽略。例如，对于时间复杂度为\($O(n^2 + n + 100)$)的算法，我们通常只说它是\($O(n^2)$)。

### 基础讲解

#### 1. 什么是大O表示法？

大O表示法是一种描述算法复杂度的方式，允许我们理解算法的运行时间如何随着输入数据的增长而变化。其目的不是为了精确地计算运行时间，而是为了描述这个增长的“形状”。

#### 2. 为什么我们关心大O表示法？

当我们处理大量数据时，算法的效率变得非常重要。即使算法 A 比算法 B 在小数据集上稍快一些，但如果算法 A 的复杂度为\($O(n^2)$)，而 B 的复杂度为\($O(n \log n)$)，那么在大数据集上，B 可能远远超过 A。

#### 3. 基本的大O表示法

##### 3.1 常数时间：\(O(1)\)

无论输入数据有多大，执行时间都是恒定的。

```c
#include <stdio.h>

int main() {
    int n = 1000;
    printf("This is a constant time operation.\n");
    return 0;
}
```

在上面的代码中，不论 `n` 是多少，都只执行一次 `printf`。

##### 3.2 线性时间：\(O(n)\)

执行时间与输入数据的大小成正比。

```c
#include <stdio.h>

int main() {
    int n = 1000;
    for(int i = 0; i < n; i++) {
        printf("This operation will run 'n' times.\n");
    }
    return 0;
}
```

上面的代码中，`printf` 会被执行 `n` 次。

##### 3.3 平方时间：\($O(n^2)$)

常见于嵌套循环。

```c
#include <stdio.h>

int main() {
    int n = 100;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            printf("This operation will run 'n^2' times.\n");
        }
    }
    return 0;
}
```

上述代码中，内部 `printf` 会被执行 `n * n` 次。

#### 4. 怎样分析代码的复杂度？

##### 4.1 基于循环

- 单个循环：根据循环次数确定，如 `n` 次则为\(O(n)\)。
- 嵌套循环：将循环相乘，如两个都为 `n` 次的嵌套循环，则为 ($O(n^2)$)。

##### 4.2 基于操作

- 初始化、赋值或返回操作通常为 (O(1))。
- 基本数学运算，如加、减、乘、除，通常为 (O(1))。
  









## Question 3 (14 marks)

*The function that you are asked to write is described on the back of the Test Cover Sheet.*

### 1. 公式解读

这个公式定义了 RMS 误差（Root Mean Square Error），它是衡量两组数据之间差异的一种方法。

给定：
- \( X \) 和 \( Y \) 为两组数据，它们具有相同的数据点数目。
- \( $x_i$ \) 和 \( $y_i$ \) 是(X) 和 (Y)中的第i个数据点。
- (n) 是数据点的数量。

公式的各个部分的含义如下：
1. ($(x_i - y_i)$)：计算第i个数据点之间的差异。
2. ($(x_i - y_i)^2$)：将差异平方，这样所有的差异都是正值，并且大的差异会受到更多的惩罚。
3. ($\sum_{i=1}^{n}$)：对所有数据点的平方差异求和。
4. ($\frac{1}{n}$)：求平均值。
5. ($\sqrt{}$)：开方，恢复差异的原始尺度。

RMS 误差通常用于估计、预测和实际观测值之间的差异。值越小，表示预测或估计的数据与实际观测数据越接近；值越大，表示两者之间的差异越大。



::: details MD

````c
## Question 3 (14 marks)
*This is the specification for the function required in Question 3. Study this specification carefully, and then write your answer in the space provided on the back of the separate hand-in answer page.*

The *root mean square distance* between two sequences $X = <x_1···x_n>$ and $Y = <y_1···y_n>$ each containing $n$ values is given by

$\large RMS(X,Y) = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i - y_i)^2}$

Write a function

```c
int calc_rms(double X[], double Y[], int n, double *rms)
```

that calculates the value $RMS(X, Y)$ for the arguments $X$ and $Y$, where the sequences are stored in arrays following the usual $C$ approach, and the argument n indicates the number of values in $X$ and $Y$ that are valid.

Your function should handle two distinct cases:

- if n is negative or zero, the return value of the function should be the constant `RMS_INVALID`, and the variable indicated by the pointer rms should not be changed in any way;
- otherwise, the return value of the function should be the constant `RMS_VALID`, and the computed RMS value should be assigned to the variable indicated by the pointer rms.

Note that you do not need to define the integer constants RMS_INVALID and RMS_VALID, and you do not need to know their values. Just assume that they are predefined and available for use in your function. You may make use of functions in math.h if you wish.
````



````c
*This is the specification for the function required in Question 3. Study this specification carefully, and then write your answer in the space provided on the back of the separate hand-in answer page.*

The *root mean square distance* between two sequences $X = <x_1···x_n>$ and $Y = <y_1···y_n>$ each containing $n$ values is given by

$\large RMS(X,Y) = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i - y_i)^2}$

Write a function

```c
int calc_rms(double X[], double Y[], int n, double *rms)
```

that calculates the value $RMS(X, Y)$ for the arguments $X$ and $Y$, where the sequences are stored in arrays following the usual $C$ approach, and the argument n indicates the number of values in $X$ and $Y$ that are valid.

Your function should handle two distinct cases:

- if n is negative or zero, the return value of the function should be the constant `RMS_INVALID`, and the variable indicated by the pointer rms should not be changed in any way;
- otherwise, the return value of the function should be the constant `RMS_VALID`, and the computed RMS value should be assigned to the variable indicated by the pointer rms.

Note that you do not need to define the integer constants RMS_INVALID and RMS_VALID, and you do not need to know their values. Just assume that they are predefined and available for use in your function. You may make use of functions in math.h if you wish.

You may use the remainder of this page to draft your answer if you wish. But you must **copy that draft to the hand-in answer page** before the end of the Test is announced. Only work that is on the hand-in page will be marked. **This sheet is NOT the hand-in page.**

## Question 1 (8 marks)

Give the value and type of each of the following C expressions. If you think the expression is not legal according to the rules of C, write error in the box.

a. `11-17%3*2`

b. `2+3*4/5/2.0`

c. `-5*!0+3>2`

d. `9>8<9`



## Question 2 (8 marks)

Consider the following code sketch in which all variables are of type int, and in which n has been given a positive initial value.

```c
sum1 = sum2 = sum3 = 0;
for (i = 0; i < n; i++) {
    sum1 += 1;                  /* line1 */
    for (j = 1; j <= i - j; j++) {
        sum2 += 1;              /* line2 */
        for (k = 1; k <= j; k++) {
            sum3 += 1;          /* line3 */
        }
    }
}
```

Using the “big-Oh” notation, what is the *asymptotic* relationship between the final value of each of the variables sum1, sum2, sum3 and the starting value of n, in each case giving the simplest and most precise answer that applies.

a. Variable sum1 grows as:

b. Variable sum2 grows as:

c. Variable sum3 grows as:

d. Overall, the execution time grows as:

## Question 3 (14 marks)

*The function that you are asked to write is described on the back of the Test Cover Sheet.*
````



```c
习题:考察文档/视图结构，鼠标、键盘、定时器消息处理、图形文字绘制等
    
    
1、设计基于单文档/视图结构的程序。在文档类中声明一个人事结构，包括姓名、年龄、工资三个成员，定义长度为5的结构数组，并初始化;添加鼠标左键消息处理函数，按工资由高到低排序，并在客户区输出排序后的信息。
2、设计基于单文档/视图结构的程序。绘制一条直的道路，然后设计一个球体(圆代替，有车号)，使其沿道路匀速行走，到终点自动返回，来回行走;单击鼠标左键/右键，球体开始/停止运动;按键H、M、L，分别调整球体速度为高速中速、低速，道路的宽度、长度由设定菜单完成。
```

:::



## 类似题型

考察的公式是*平均绝对误差*（Mean Absolute Error, MAE）。

**题目：**

给定两个序列 $A = <a_1, ... , a_n>$ 和 $B = <b_1, ... , b_n>$，每个都包含 $n$ 个值。它们之间的*平均绝对误差*由下式给出：

::: center

$\large MAE(A,B) = \frac{1}{n}\sum_{i=1}^{n}|a_i - b_i|$

:::

编写一个函数：

```c
int calc_mae(double A[], double B[], int n, double *mae)
```

该函数应计算参数 $A$ 和 $B$ 的 $MAE(A, B)$ 值，其中序列存储在数组中，遵循通常的 C 语言方式，参数 n 表示在 $A$ 和 $B$ 中有效的值的数量。

你的函数应处理两种不同的情况：

- 如果 n 是负数或零，则函数的返回值应为常数 `MAE_INVALID`，由指针 mae 指示的变量不应以任何方式更改；
- 否则，函数的返回值应为常数 `MAE_VALID`，并且应将计算得出的 MAE 值分配给由指针 mae 指示的变量。

注意，你不需要定义整数常量 `MAE_INVALID` 和 `MAE_VALID`，也不需要知道它们的值。只需假设它们已预定义并可在你的函数中使用。你可以根据需要使用 math.h 中的函数。

```c
#include <math.h>

#define MAE_INVALID ???   // 这里的 ??? 表示我们不知道这个常量的具体值，但可以假设它已经被定义。
#define MAE_VALID   ???

/**
 * 计算两个数组之间的平均绝对误差 (MAE)。
 *
 * @param A 指向第一个数组的指针
 * @param B 指向第二个数组的指针
 * @param n 数组中有效的元素数量
 * @param mae 用于存放计算得到的 MAE 值的指针
 * @return 如果 n 为非正值则返回 MAE_INVALID，否则返回 MAE_VALID
 */
int calc_mae(double A[], double B[], int n, double *mae) {
    // 如果 n 是非正值，直接返回 MAE_INVALID
    if (n <= 0) {
        return MAE_INVALID;
    }

    double sum = 0;  // 初始化累加器

    // 循环遍历数组
    for (int i = 0; i < n; i++) {
        // 计算当前索引下两数组元素之间的差的绝对值
        double diff = fabs(A[i] - B[i]);
        
        sum += diff;  // 将绝对值差加到累加器中
    }

    // 计算平均绝对误差
    *mae = sum / n;

    return MAE_VALID;
}
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
