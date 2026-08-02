---
title: CCC 08 S4 - Twenty-four
date: 2025-01-08 13:24:24
author: AI悦创
isOriginal: true
icon: blog
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

- [https://dmoj.ca/problem/ccc08s4](https://dmoj.ca/problem/ccc08s4)

##### Canadian Computing Competition: 2008 Stage 1, Senior #4

Twenty-four is a popular card game designed to be played by four players. Each player is dealt a deck of cards, which are kept face down. On every turn, each of the four players turns over the top card of his or her deck, so that it is visible to all. The goal is to find an arithmetic expression using the values of the cards (with A meaning 1, J meaning 11, Q meaning 12, and K meaning 13) that evaluates to the number 24. For example, for the example in the illustration, one possible expression would be:

$((A * K) - J) * Q$

$((1 * 13) - 11) * 12$

The first player to find such an expression wins the turn, and adds all four cards to the bottom of his or her deck.

Each valid arithmetic expression must use all four cards, and must combine their values using addition, subtraction, multiplication, or division. Parentheses are allowed to specify precedence of operations. Juxtaposing cards to make multiple-digit decimal numbers is not allowed (e.g. you cannot place the cards 2 and 4 beside each other to make 24).

Non-integer quotients of division are also not allowed, even as a partial result (of a subexpression of the overall expression).

In some cases, the players may take a very long time to find an expression evaluating to 24. In fact, in some cases, no such expression exists. Your task is to determine, given four cards, an expression that evaluates to the largest number less than or equal to 24.

#### Input Specification

The first line contains an integer $1 \leq N \leq 5$ indicating the number of card hands that follow. Each hand consists of four lines. Each of these lines is an integer $1 \leq C \leq 13$ indicating the value of a card.

#### Output Specification

For each hand, output a line containing an integer $n$ if the cards can be combined using arithmetic operators to evaluate to $n$. The value n should be the largest possible value amongst all possible arithmetic expressions using these 4 cards, so long as $n \leq 24$.

#### Sample Input

```
3
3
3
3
3
1
1
1
1
12
5
13
1
```

#### Output for Sample Input

```
24
4
21
```

```java
import java.util.*;

public class Main {
    // 保存当前最大的、且不超过 24 的结果
    static int best;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();  // 手数（1<=T<=5）
        for (int t = 0; t < T; t++) {
            List<Integer> cards = new ArrayList<>();
            // 读入四张牌的数值
            for (int i = 0; i < 4; i++) {
                cards.add(sc.nextInt());
            }
            best = Integer.MIN_VALUE;  // 初始化为极小值
            solve(cards);
            System.out.println(best);
        }
    }

    // 递归求解：nums 中存放当前待合并的数字
    static void solve(List<Integer> nums) {
        // 当只剩下一个数字时，就是一种表达式的计算结果
        if (nums.size() == 1) {
            int result = nums.get(0);
            if (result <= 24 && result > best) {
                best = result;
            }
            return;
        }
        // 枚举所有两个不同的数字组合
        for (int i = 0; i < nums.size(); i++) {
            for (int j = i + 1; j < nums.size(); j++) {
                int a = nums.get(i);
                int b = nums.get(j);
                // 构造一个新的列表，去除选中的 a 和 b
                List<Integer> next = new ArrayList<>();
                for (int k = 0; k < nums.size(); k++) {
                    if (k != i && k != j) {
                        next.add(nums.get(k));
                    }
                }
                
                // 尝试所有可能的运算
                List<Integer> possible = new ArrayList<>();
                possible.add(a + b);
                possible.add(a * b);
                possible.add(a - b);
                possible.add(b - a);
                // 除法只有在除尽的情况下才合法
                if (b != 0 && a % b == 0)
                    possible.add(a / b);
                if (a != 0 && b % a == 0)
                    possible.add(b / a);
                
                // 将运算结果加入列表继续递归
                for (int val : possible) {
                    next.add(val);
                    solve(next);
                    next.remove(next.size() - 1);
                }
            }
        }
    }
}
```

**递归思想**

利用递归枚举所有可能的运算顺序。每一次从列表中选取两个数字，并尝试所有合法的运算，然后把结果与剩余数字合并继续递归。这样就枚举了所有不同的运算树（即所有可能的括号方式）。

**运算合法性判断**

对于除法运算，只有当分子能够被分母整除时才认为是合法的运算，从而保证中间结果均为整数。

**答案更新**

当递归到只剩下一个数字时，若其小于等于 24，则更新全局变量 best 为当前最大值。













欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)