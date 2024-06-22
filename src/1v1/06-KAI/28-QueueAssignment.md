---
title: QueueAssignment
icon: java
date: 2023-03-18 23:21:43
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 留学生辅导
    - 留学生作业辅导
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

## Queue Programming Assignment

> 队列编程分配

This assignment will help you further understand how and when to use queues. You will write a program that computes all the prime numbers up to some number n. For this purpose, you will use an algorithm developed by Eratosthenes (276 BC), a Greek mathematician, poet and astronomer. This algorithm is known as the Sieve of Eratosthenes.

> 这个作业将帮助您进一步理解如何以及何时使用队列。你将编写一个程序，计算所有素数直到某个数字n。为此，你将使用埃拉托色尼(公元前276年)开发的算法，埃拉托色尼是希腊数学家、诗人和天文学家。这种算法被称为埃拉托色尼筛法。

The following pseudocode describes the algorithm:

> 下面的伪代码描述了算法:

1. Instantiate a queue, call this "numbers" and fill it with all integers from 2 to n

> 实例化一个队列，称其为“numbers”，并将其填充为从 2 到 n 的所有整数

2. Instantiate a second queue, call this "primes"

> 实例化第二个队列，命名为primesaiyc

3. Let p = First value of queue of numbers

> 设p =数字队列的第一个值

4. `While (p <= sqrt(n))`

    1. Push p into "primes"

    > 将 p 输入质数

    2. Go through "numbers" and eliminate numbers divisible by p (you might want to use an additional queue for this)

    > 遍历“numbers”并删除能被p整除的数字(你可能想为此使用一个额外的队列)

5. Add allt he elements of "number" to "primes". These should all be prime numbers.

> 将“数”的所有元素加到“质数”中。这些都是质数。

These are the requirements:

> 这些是要求:

- You should use the Queue implementation of the book.

> 您应该使用本书的Queue实现。

- You should write a class called Sieve. You should be able to construct a Sieve object by calling: Sieve `newSieve = new Sieve();`

> 您应该编写一个名为Sieve的类。你应该能够通过调用:newSieve = newSieve ();

- The sieve class should have a "void primesTo(int n)" method. It should print all the primes from 2 to *n* to System.out. please format the result so that the primes are separated by a space or a comma.

> sieve类应该有一个“void primesTo(int n)”方法。它应该把从2到*n*的所有质数打印到System.out。请格式化结果，使质数之间用空格或逗号分隔。

- You should read in the input from the user via stdin (scanner)

> 你应该通过stdin(扫描器)读入用户的输入

- Feel free to write other helper methods.

> 请随意编写其他帮助方法。

- Please check that if the user tries to call primesTo(int n) with n < 2, a proper Exception/Error message is thrown.

> 请检查用户是否尝试使用n &lt调用primesTo(int n);2，抛出正确的异常/错误消息。

Here are some sample runs of the program (user input in italics):

> 下面是程序的一些运行示例(斜体为用户输入):

```java
Please enter upper bound
20
Primes up to 20 are: 2, 3, 5, 7, 11, 13, 17, 19
Please enter upper bound
2
Primes up to 2 are: 2
Please enter upper bound
0
Error: Input must be a number greater than 2.
```

### Answer

```java
import java.util.*;

/**
 * 输出指定数字范围内的所有素数
 */
public class Sieve {

    /**
     * numbers: 用于存储待筛选的数字
     */
    private Queue<Integer> numbers;

    /**
     * primes: 用于存储筛选出的素数
     */
    private final Queue<Integer> primes;

    /**
     * 构造函数
     * 初始化numbers和primes
     *
     */
    public Sieve() {
        numbers = new LinkedList<>();
        primes = new LinkedList<>();
    }

    /**
     * 输出指定数字范围内的所有素数
     * @param n
     */
    public void primesTo(int n) {
        //当输入的数字小于2时，抛出异常
        if (n < 2) {
            throw new IllegalArgumentException("Input must be a number greater than 2.");
        }else{
            // 将2到n之间的数字依次入numbers队列
            for (int i = 2; i <= n; i++) {
                numbers.offer(i);
            }
            // 从numbers队列中取出第一个数字，即2，将其入primes队列
            int p = numbers.peek();
            // =====埃拉托斯特尼筛法 执行=====
            // 当p的平方小于等于n时，执行循环
            while (p <= Math.sqrt(n)) {
                // 将p入primes队列
                primes.offer(p);
                // 引入一个新的队列newNumbers，用于存储筛选后的数字
                Queue<Integer> newNumbers = new LinkedList<Integer>();
                // 从numbers队列中取出数字，如果该数字不能被p整除，则将其入newNumbers队列
                while (!numbers.isEmpty()) {
                    int num = numbers.poll();
                    if (num % p != 0) {
                        newNumbers.offer(num);
                    }
                }
                // 将newNumbers赋值给numbers
                numbers = newNumbers;
                // 取出numbers队列中的第一个数字，作为下一次循环的p
                p = numbers.peek();
            }
            // =====埃拉托斯特尼筛法 执行结束=====
            // 将numbers队列中剩余的数字入primes队列
            primes.addAll(numbers);
            // 输出primes队列中的数字
            System.out.print("Primes up to " + n + " are: ");
            // 从primes队列中取出数字，直到队列为空
            while (!primes.isEmpty()) {
                System.out.print(primes.poll());
                if (!primes.isEmpty()) {
                    System.out.print(", ");
                }
            }
            System.out.println();
        }

    }

    /**
     * 测试主函数
     * @param args
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // 输入上界
        System.out.println("Please enter upper bound:");
        int n = scanner.nextInt();
        Sieve sieve = new Sieve();
        sieve.primesTo(n);
        scanner.close();


      // 测试用例：
        // 1. 输入小于2的数字
//        Please enter upper bound:
//        1
//        Exception in thread "main" java.lang.IllegalArgumentException: Input must be a number greater than 2.

        // 2. 输入大于2的数字
//        Please enter upper bound:
//        10
//        Primes up to 10 are: 2, 3, 5, 7

//
//        Please enter upper bound:
//        20
//        Primes up to 20 are: 2, 3, 5, 7, 11, 13, 17, 19


        // 3. 输入等于2的数字：
//        Please enter upper bound:
//        2
//        Primes up to 2 are: 2


    }
}
```





欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！


::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)