---
title: CPP 考试记录
date: 2024-10-12 18:57:04
author: AI悦创
isOriginal: true
icon: python
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
---









Suppose we have created two user-defined types, using the following code.

```c++
enum Colour
{
    red, green, blue
};

enum class Activity
{
    run, walk, cycle, swim
};
```

Select the correct variable initialisation from the following options.

A.

```c++
Colour signal = Colour::red;
Activity activity = run; 
```

B.

```c++
Colour signal = red;
Activity activity = Activity::run; 
```

C. 

```c++
Colour signal = red;
Activity activity = run; 
```



  

The following code looks like it should output the powers of three less than 100,000. Alas it doesn't. Click on the location of the problem. 

```c++
#include <iostream>

int main() {
    int i = 1;
    while (i < 100000) {
        std::cout << i << std::endl;
        i *= 3;
    }
    return 0;
}
```





问题出在第 5 行的变量声明 `int i = 1;`。

由于 `int` 类型可能无法存储超过 32,767（在某些系统上）的值，当 `i` 乘以 3 后，可能会发生整数溢出，导致程序不能正确输出小于 100,000 的所有 3 的幂。

**解决方法：**

将变量 `i` 的类型从 `int` 改为 `long` 或 `long long`，以确保它能存储更大的值。

```cpp
#include <iostream>

int main() {
    long i = 1; // 将 int 改为 long
    while (i < 100000) {
        std::cout << i << std::endl;
        i *= 3;
    }
    return 0;
}
```



这段代码首先将变量 `i` 初始化为 1。然后进入一个 `while` 循环，循环的条件是 `i` 小于等于 100,000。

在每次循环中，代码会执行以下操作：

1. 输出当前 `i` 的值到控制台。
2. 将 `i` 的值乘以 3。

具体来说，这段代码会输出以下数字序列：

- 1
- 3
- 9
- 27
- 81
- 243
- 729
- 2187
- 6561
- 19683
- 59049

这些数字是 3 的幂次（即 3 的 0 次方到 10 次方），并且都小于等于 100,000。因为当 `i` 乘以 3 后超过 100,000 时，循环条件不再满足，循环结束。

**因此，这段代码的作用是：**

输出所有小于等于 100,000 的 3 的幂次。

上述代码的作用是**输出所有小于等于 100,000 的 3 的幂次**。具体原因如下：

- **初始化**：变量 `i` 被初始化为 1。
- **循环条件**：`while (i <= 100000)`，表示当 `i` 小于等于 100,000 时继续循环。
- **循环体**：
  - `std::cout << i << std::endl;` 输出当前 `i` 的值。
  - `i *= 3;` 将 `i` 的值乘以 3，准备下一个循环的值。

**为什么会输出 3 的幂次？**

因为在每次循环中，`i` 都被乘以 3，这意味着 `i` 的值依次是 1、3、9、27、81......这些数正是 3 的连续幂次（3^0, 3^1, 3^2, ...）。循环会持续进行，直到 `i` 的值超过 100,000。

因此，代码实际上是在计算并输出 3 的幂次，只要这些值不超过 100,000，就会被输出。

---



The vector class has a member function, data(), that returns a pointer to the underlying (dynamically allocated) array that holds vector's contents. Hence, if v is a vector of doubles, v.data() is of type double*.

We initialise a vector of ints and apply the function data() as follows:

```c++
vector<int> donutIntake {1, 0, 2, 0, 4, 0};
int* p = donutIntake.data();
```

Which of the following quantities might have the value zero? (Select all options that apply.)

A. donutIntake[2] 

B. p[1] 

C. *p-1 

D. *(p+2) 

E. donutIntake[7] 






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
