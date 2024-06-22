---
title: Exercise 1 LSE Home MA407
icon: python
date: 2023-10-04 11:04:16
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - python 1v1
    - MA407
    - 伦敦政经
    - LSE Home
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 伦敦政经
    - LSE Home
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
---

Since the times of the Ancient Greeks, prime numbers have held much fascination for math- ematicians. Although today we know quite a lot about them, many questions remain open and they are still a topic under intensive study. (For example, only in 2004 it was proved by Green and Tao that the primes contain arbitrarily long arithmetic progressions.)

In the following two exercises we look at computational aspects of the primes. This topic is important, for example because prime numbers play an important role in cryptography. In fact, it has also seen relatively recent breakthroughs: In 2002 Agrawal, Kayal and Saxena developed a particularly efficient algorithm that reliably tests whether a number is prime.

Such advanced algorithms are beyond what we will cover in this exercise and course (it needs a fair amount of mathematics to understand their approach). But how can one generate prime numbers? How can one test whether a number is prime? It is your task to answer these questions (through simple algorithms).

::: details zh

自古希腊时代以来，质数一直吸引着数学家们的兴趣。尽管我们今天对它们已经有了很多了解，但仍有很多问题尚未解决，它们仍然是一个受到密集研究的话题。（例如，直到2004年，Green和Tao才证明了质数包含任意长的等差数列。）

在接下来的两个练习中，我们将探讨质数的计算方面。这一话题非常重要，例如因为质数在密码学中扮演着重要的角色。实际上，它也在相对近期取得了重大突破：2002年，Agrawal, Kayal和Saxena开发了一个特别高效的算法，可以可靠地测试一个数字是否为质数。

这样的先进算法超出了我们在这个练习和课程中将要涵盖的内容（要理解他们的方法需要大量的数学知识）。但是如何生成质数呢？如何测试一个数字是否是质数呢？回答这些问题（通过简单的算法）是你的任务。

:::

## Exercise 1.1

(a)  Describe (in words or pseudocode) an algorithm to determine for a given integer n the next prime number p after or equal to n, that is, the prime number p ≥ n such that p − n is minimised.

(b)  Argue that your algorithm is correct.

(c)  Very roughly, estimate how efficient your algorithm is: That is, look at the loops used in your algorithm and estimate roughly how many iterations in each loop your algorithm needs for a given number n.

::: details

练习 1.1。

(a) 描述（用文字或伪代码）一个算法，用于确定给定的整数 n 之后或等于 n 的下一个质数 p，即满足 p − n 最小化的质数 p ≥ n。

(b) 证明你的算法是正确的。

(c) 大致估算你的算法的效率：即查看算法中使用的循环，并粗略估计对于给定的数字 n，你的算法在每个循环中需要多少次迭代。

:::

## Solution 1

::: tabs

@tab 理解题目 a

假设我们要找到大于或等于 10 的下一个质数。

算法步骤如下：

1. 设置一个变量，比如叫它`current`，并让它的值为n（在这个例子中，`current`的初始值为10）。
2. 检查`current`是否为质数。
3. 如果`current`是质数，则停止，返回`current`为答案。
4. 如果`current`不是质数，增加`current`的值（例如+1）。
5. 返回步骤2。

按照这个算法，我们将得到以下结果：

开始时，`current` = 10。10不是质数（因为它可以被2和5整除），所以我们加1，现在`current` = 11。

再次检查，11是质数。所以答案是11。

即，大于或等于10的下一个质数是11。

@tab 详解题意

这个描述的意思是找到大于或等于 \( n \) 的第一个质数 \( p \) ，使得 \( p - n \) 的值尽可能小。

换句话说，您想找到最接近 \( n \)（但仍然大于或等于 \( n \)）的质数。这就是为什么我们从 \( n \) 开始并逐步递增的原因，直到我们找到一个质数为止。

为了进一步解释这一点，让我们使用一个实例：

假设 \( n = 14 \)。

你的任务是找到第一个大于或等于 14 的质数，这意味着你正在寻找一个质数 \( p \)，使得 \( p - 14 \) 的值最小。

开始时，我们会检查 14，但 14 不是质数。

接下来，我们会检查 15，但 15 也不是质数。

然后，我们会检查 16，它还不是质数。

继续这样，当我们检查 17 时，我们发现 17 是质数。

所以，答案是 17。并且 \( $p - n = 17 - 14 = 3$ \)。在所有大于或等于 14 的质数中，这是最接近 14 的一个，因此 \( $p - n$ \) 的值最小。

这就是“满足 \( $p - n$ \) 最小化的质数 \( $p \geq n$ \)”的含义。

@tab Answer

Exercise 1.1.

(a) 

算法描述：
1. 如果 n 小于 2，返回 2。
2. 如果 n 是偶数，增加 1 使其变为奇数。
3. 开始一个无限循环：
   1. 对于每一个整数 i 从 2 到 $\sqrt{(n)}$：
      1. 如果 n 能被 i 整除，说明 n 不是质数，增加 n 两个单位（使其仍然是奇数）然后跳到循环的下一个迭代。
   2. 如果循环结束后没有找到整除 n 的 i ，则 n 是一个质数，返回 n。

(b) 

为了验证算法的正确性，首先注意到所有大于2的质数都是奇数。因此，我们首先检查n是否小于2（在这种情况下答案是2），然后确保n是奇数。

之后，我们检查所有小于等于$\sqrt{(n)}$ 的整数，看看它们是否是 n 的因子。这是因为如果 n 有一个大于 $\sqrt{(n)}$ 的因子 a，那么它必定有一个小于等于 sqrt(n) 的配对因子 b，使得 $a * b = n$。如果我们找不到这样的因子，那么 n 是质数。

每当我们发现 n 不是质数时，我们增加2（因为加1可能会导致偶数，而所有大于2的偶数都不是质数）并继续搜索。

(c)

为了估算效率：

外部循环是一个无限循环，但对于每个非质数的 n，它只迭代一次并增加2。

内部循环最多迭代到 $\sqrt{(n)}$。

因此，对于一个给定的数 n，算法最坏情况下的迭代次数可以粗略估计为 O($\sqrt{(n)}$)。

但这只是为了找到一个单一的非质数的 n。在最坏的情况下，我们可能需要尝试多次，但平均来说，随着 n 的增加，质数并不是非常稀疏，所以总体效率大致为 O($\sqrt{(n)}$)。

@tab 什么是质数？

质数是一个大于 1 的自然数，它只能被 1 和它自身整除，而不能被其他正整数整除。换句话说，如果一个数只有两个正整数因子—— 1 和它自己——那么它就是一个质数。例如，2、3、5、7、11和13都是质数。而4、6、8和9不是质数，因为它们还有其他的因子。

值得注意的是，2是唯一的偶数质数。其他所有的偶数都可以被2整除，因此它们不是质数。

:::

Parts (b) and (c) of the exercise above are demanding at this point, because we did not yet cover this kind of analysis of algorithms in the course (but will do so very shortly). Nevertheless, it is hopefully obvious that these are important questions when designing an algorithm. So see what you can do for now.

Submit this part of this exercise sheet in the Gradescope assignment “Exercise 1.1,” where you can type your answer as text. (You might first want to prepare your answers by writing them down in a file in plain text; you can then paste your answers into Gradescope.)

The next exercise asks you to turn your algorithm into a Python program.

## Exercise 1.2

Write a Python function `primeAtLeast(n)` in a file called Primes.py that expects one argument (the number n from above) and implements your algorithm (thus, returns the next prime after n).

Do not forget to test your program with some small and some large numbers, to see whether it works correctly. (It is easy to find primes tables on the internet.) If your program has some flaw and you cannot fix this, then note this in a comment in your file.

Submit your Python file on Gradescope, under the assignment “Exercise 1.2 (PrimeAtLeast)”.

## Solution 2

```python
# Primes.py

def primeAtLeast(n):
    def is_prime(num):
        """Check if a number is prime."""
        if num < 2:
            return False
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                return False
        return True

    # 如果 n 小于 2，直接返回 2
    if n < 2:
        return 2

    # 如果 n 是偶数，加 1 使其变为奇数
    if n % 2 == 0:
        n += 1

    # 检查 n 是否是质数，如果不是，则加 2 并继续检查
    while not is_prime(n):
        n += 2

    return n

# 用于测试的代码
if __name__ == "__main__":
    test_nums = [1, 2, 3, 15, 20, 100, 1000, 10000]
    for num in test_nums:
        print(f"The prime number at least {num} is: {primeAtLeast(num)}")

# 注：此代码适用于小到中等大小的 n。对于非常大的 n，可能需要更高效的算法。
```

## 补充

### Q1 为什么：i * i <= n？

使用 `i * i <= n` 作为循环条件是基于数学上的一个性质和计算上的一个优化。

1. **数学性质**：如果一个数 \( n \) 不是素数，那么它必然可以表示为两个因子的乘积，即 \( $n = a \times b$ \)。而这两个因子，如果它们都大于 \( $\sqrt{n}$ \)，那么它们的乘积 \( $a \times b$ \) 就会大于 \( n \)，这与前提是矛盾的。反之，如果它们都小于 \( $\sqrt{n}$ \)，那么它们的乘积 \( $a \times b$ \) 也会小于 \( n \)。因此，对于 \( $n = a \times b$ \) 这样的分解，其中一个因子必然小于或等于 \( $\sqrt{n}$ \)，而另一个因子必然大于或等于 \( $\sqrt{n}$ \)。

2. **计算优化**：由上述性质，我们知道，只需检查到 \( $\sqrt{n}$ \) 就足够了。如果 \( n \) 在 2 到 \( $\sqrt{n}$ \) 之间没有因子，那么 \( n \) 在 \( $\sqrt{n}$ \) 到 \( n \) 之间也不会有因子。因此，我们可以大大减少需要检查的因子的数量，从而提高算法的效率。

基于这两点，我们通常在检查素数时使用 `i * i <= n` 作为循环条件，这样可以在效率上得到优化，同时也确保了正确性。

### Q2

1. **返回值问题**：当 `n == 2` 时，你的代码返回了 `2`。但是，`is_prime` 函数应当返回布尔值（`True` 或 `False`），而不是数字，以表示输入的数是否为素数。所以，应当返回 `True` 而不是 `2`。

2. **循环条件问题**：你的 `while` 循环条件 `while i>1` 仍然是错误的。这意味着循环条件总是成立，但由于循环内部你有两个返回语句，所以它不会进入无限循环。但是这个循环条件本身是没有意义的。你应该设置循环条件为 `while i * i <= n`。

3. **循环逻辑问题**：你的循环内部的逻辑是：只要 `n` 不被 `i` 整除，就返回 `n`。但是这不是检查一个数是否为素数的正确逻辑。正确的逻辑应当是：只要 `n` 能被 2 到 $\sqrt{(n)}$ 之间的任何数整除，那么 `n` 就不是素数。如果在循环结束后仍然没有找到一个可以整除 `n` 的数，那么 `n` 就是素数。

4. **循环内未更新 `i`**：你需要在循环的结尾更新 `i` 的值，否则它会永远检查相同的 `i` 值。

以下是修复后的代码：

```python
def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True
```

使用这个修复后的函数，你可以正确地检查一个数是否为素数。



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
