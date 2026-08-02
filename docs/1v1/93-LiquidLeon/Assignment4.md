---
title: Assignment 4：Painting a Winner, Part 3：Changing the Game
date: 2024-10-15 10:51:59
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
watermark: true
---

```
Starter files: code.zip
```

[https://course.khoury.northeastern.edu/cs3500/hw_redseven_03_assignment.html](https://course.khoury.northeastern.edu/cs3500/hw_redseven_03_assignment.html)

**Note: Homeworks 5 through 8 will begin a new project, and you will be working with a partner for them. Start thinking about who you’d like to partner with. You will sign up with your partner on the handin server, and you will not be able to submit subsequent assignments until you are part of a team on the handin server. If you do not know (or remember) how to request teams, follow [these instructions](https://www.khoury.northeastern.edu/home/blerner/handin-server/handin-server-guide.html#(part._request-teammates)). Please request teams no later than the start of homework 5, which is \*Oct 20\* — if you have not requested a teammate by then, we will randomly assign you one. You only need to request a partner for Assignment 5; we will copy the teams to the remaining assignments.**

## 1. Purpose

The benefits of the model-view-controller architecture shine when we need to add new features, by isolating relevant parts of our design and changing them independently. In this assignment we will see those benefits pay off by supporting other forms of Solo Red. The goal of this assignment is to give you a chance to critically examine your earlier design choices, and either leverage or revise them to enable adding variations of this game with minimal change and duplication of code.

**With one exception (main), all** **new** **classes and interfaces for this homework should be in the** **`cs3500.solored.model.hw04`** **package. All classes written in previous assignments, even if improved upon, should remain in their respective packages.**

There will be two submissions for this assignment:

- Your *actual implementation* and full test suite
- A *self-evaluation*, due *one day plus one hour later* than the actual implementation, where we will ask you to reflect on your implementation and testing choices.

The same late-day policy as on the previous homework applies: each of these submissions independently may use up to one late day, and you are still able to submit your self-evaluation on time even if you submit your implementation late.

You are expected to use your code from the previous assignment as the starting point for this assignment. **However, please ensure all of your new code is in the `cs3500.solored.model.hw04` package. Additionally, your code from the previous assignment should remain in the `cs3500.solored.model.hw02`, `cs3500.solored.view.hw02` and `cs3500.solored.controller` packages.**

## 2. How much of the controller and view do I need working now?

To pass the public tests specific to this assignment, you need a controller that can handle a single input: the quit command. So just the input "q". The view’s render method and toString method should also be fully working. That is the bare minimum you need to start this assignment.

You will also need a view that uses only the observations of `RedGameModel` to create the toString and render the game state to an `Appendable`.

Of course, for the hidden tests, you will need a fully working controller, view, and models.

## 3. A more advanced Solo Red game

Traditionally, the multi=player game Red7 has advanced rules that give more meaning to playing to a canvas or playing cards to a palette. You will implement a lighter variant of the advance rules with the following changes

- The player now draws a single card from the deck after they play to the palette. Naturally, if the deck is empty, no drawing occurs.
- The player can draw an additional card after playing to a palette if they play a card to the canvas and the number on the card played to the canvas is strictly greater than the number of cards in the now currently winning palette. If they fulfill this condition, they draw two cards from the deck instead of one after they play to the palette. After they draw, the number of cards they can draw resets to one.

Consider the state below with a non-empty deck and a max hand size of 5.

```java
Canvas: R
> P1: B2 B7
P2: R1 B5
P3: O1 V7 R2
P4: O4 I1
Hand: B1 O7 O3 R3 R4
```

If they play B1 to the canvas, the game state changes to the following

```java
Canvas: B
P1: B2 B7
P2: R1 B5
> P3: O1 V7 R2
P4: O4 I1
Hand: O7 O3 R3 R4
```

Since the number of the card played to the canvas is 1 and the winning palette has 3 cards, the player does not get to draw an additional card at the end of the turn. Therefore, the player will only be able to draw a single card after playing to palette. If they then play O7 to palette P2 and draw for their hand, we get the following state. Notice the hand gets one new card from drawing.

```java
Canvas: B
P1: B2 B7
> P2: R1 B5 O7
P3: O1 V7 R2
P4: O4 I1
Hand: O3 R3 R4 I7
```

Suppose instead of playing B1 to the canvas, they played O7 to the canvas at the start. Then the game state becomes as follows.

```java
Canvas: O
> P1: B2 B7
P2: R1 B5
P3: O1 V7 R2
P4: O4 I1
Hand: B1 O3 R3 R4
```

Since the 7 of O7 is greater than the number of cards in the winning palette P1, the player will get to draw an additional card at the end of their turn. Say they play B1 to P4, then the state becomes as follows.

```java
Canvas: O
P1: B2 B7
P2: R1 B5
P3: O1 V7 R2
> P4: O4 I1 B1
Hand: O3 R3 R4 I7 R5
```

Again, noticed they drew two cards for their hand thanks to the canvas play!

Note that if they never changed the canvas and just played a card to a palette, then if the player is not losing, they only get to draw a single card.

Everything else about the game stays unchanged: the rules of the colors remain the same and drawing can only occur if the game has started and still going after playing to a palette.

## 4. Assignment Requirements and Design Constraints

1. Design a class implementing the Advanced variant of Solo Red as the class `AdvancedSoloRedGameModel`. This new class should clearly implement `RedGameModel`, and clearly shares some commonalities with the existing `SoloRedGameModel`. In your implementation, strive to avoid as much code-duplication as possible among the two models, while making sure that both fully work properly. If done correctly, none of your code from before should break or be affected. You may need to refactor your earlier code, though, to make it more flexible and enable better code reuse for these new classes.
2. Design a *factory* class, named `RedGameCreator`, as described below.
3. Implement a `main` method to allow you to choose different game variants from the command line, when running your program. (This is described below.)
4. If you had to change any part of your design from prior assignments, document those changes in a README file. (This must be a plain-text file.)
5. Test everything thoroughly: make sure the new models work properly, and that the controller can control them as well as it could the original model. You do not need to test your `main` method.

You must complete these requirements while respecting the following constraints:

- You are not allowed to change the interface of the model (`RedGameModel`) at all from before.
- You are not allowed to change the controller interface (`RedGameController`) at all from before.
- As before, you are not allowed to add any additional public methods in your classes, with the exception of any expected constructors.
- You must create separate model implementations, without eliminating `SoloRedGameModel` from before. That is, models that represent all variations of the game must co-exist.

In this assignment it is important not only to have a correctly working model, but also a design that uses interfaces and classes appropriately. Make sure you minimize replication of code. You *may* refactor your earlier designs to do this. You may also have to change earlier implementations to remove bugs. This is OK, but *must* be properly documented and justified.

## 5. Hints

- You should always plan out things in detail before you code. But this assignment is **designed** to be significantly more difficult if you jump into the code prematurely and try to figure out things as you code!
- For each variant, go through each operation of the model interface, and think about how that operation works for this variant of the game. Planning out every operation before coding will save you a lot of time!
- Recall that your view needs to be able to work with any model implementation, without knowing which one!
- You may be tempted to discover all possible abstractions beforehand. Make sure you minimize code repetition, but not over-abstract so much that some methods lose meaning. Even private helper methods should have a specific purpose! While it is good to anticipate abstraction, there is nothing wrong with thinking about abstraction after implementing all the code. It’s the end result that counts!

## 6. Testing

When testing your new models, you may find that a lot of your old model tests should also pass under the new models. This means you will end up creating a lot of duplicate tests. Make sure to abstract your test code appropriately (Hint: Test classes are just Java classes. So how do we deduplicate code between classes?). Make a test file for each variant in the `cs3500.solored` package in your test folder and make sure to deduplicate code as necessary.

A really good test class for your new models will be reusing a bunch of the old model tests and then’ the only new code in your model test classes will be any factory methods you need to make and tests that only apply to that particular model

## 7. The `RedGameCreator` class

Design a class with the above name. The class should define a `public enum GameType` with two possible values: `BASIC` and `ADVANCED`. It should offer one static method `createGame(GameType)` that returns an instance of (an appropriate subclass of) `RedGameModel`, depending on the `GameType` given. ] (Note: What class/pattern am I asking you to design/follow?)

## 8. The `main()` method

Add the following class to your project. Notice what package the class is in!

```java
package cs3500.solored;

public final class SoloRed {
  public static void main(String[] args) {
    // FILL IN HERE
  }
}
```

This `main()` method will be the entry point for your program. Your program needs to take inputs as command-line arguments (available in your program through the argument `args` above). Review the [documentation for command-line arguments in a Java program](https://docs.oracle.com/javase/tutorial/essential/environment/cmdLineArgs.html).

- The first command-line argument must be a string, specifically one of `basic`, or `advanced`. This argument will decide which game variant (and hence which model) you should use.
- You may optionally pass one or two more arguments `P` and `H`, both of which should be parsed as integers, where P specifies the number of palettes, and H specifies the max hand size. If unspecified, you should use 4 palettes and a hand size of 7 as the defaults.

The following are some examples of valid command lines, and their meanings:

- `basic` produces a basic game of Solo Red with default number of palettes and max hand size
- `basic 4 7` achieves the same thing, but explicitly sets the number of palettes and the max hand size.
- `advanced 8` produces an Advanced Solo Red game with 8 palettes and the default max hand size.
- `advanced 7 8` produces an Advanced Solo Red game with 7 palettes and a max hand size of 8.

All games created must start with all 35 possible cards and must be shuffled.

You may add additional methods to your `RedGameCreator` class, but you must maintain the methods specified above for my tests to compile against your code.

> This command-line specification also does not allow for customizing the deck of cards to be dealt. It is an interesting challenge to think how you might design such configuration options.

This is *not* an exhaustive list; other command lines are possible.

When you specify command-line arguments, they are always treated as strings, even if they are not within quotes. However, quotes are necessary if you want to pass a string that contains spaces in it.

These arguments will appear in the `String[] args` parameter to your `main` method; you can use them however you need to, to configure your models. For this assignment, your main method should throw an IllegalArgumentException if the game type specified is not a valid game type. However, you do *not* need to explicitly handle invalid command lines (e.g. by producing an informative error message) for the number arguments. However, your code should not *crash* in that case (e.g. by specifying -1 as the number of rows, and causing an `IndexOutOfBounds` exception).



### Q4 Simplifying regular expressions
**16 Points**

A regular expression is said to be simpler than another if it involves less operations than the other. For example, `a` (0 operations) is simpler than `(a*)*` (2 operations) and `(a ∪ b)c` (2 operations) is simpler than `ac ∪ bc` (3 operations). Rewrite each of the following regular expressions as a simpler regular expression describing the same language. (For full credit, simplify as much as possible). Show your work.

**Question 1:** $\emptyset^* \cup a^* \cup a^*b^*$

**Question 2**：$(\varepsilon \cup a^*)b$

**Question 3**：$(a^* \cup ba)^*$

**Question 4**：$(a(bb^*)) \cup a$

**Question 5**：$(aa)^* \cup a(aa)^*$

**Question 6**：$(ab^*)^* \cup (ba^*)^*$

**Question 7**：$(a \cup b)^* a (a \cup b)^*$











**Q8 Proving that languages aren't regular** 

Use the Pumping Lemma to show that the following languages over Σ = {a, b} are not regular. In each case, carefully describe the string that will be pumped and explain why pumping it leads to a contradiction.

**Question 1** $\{ a^n b^{2n} \mid n \geq 0 \}$

**Question 2** $\{ a^i b^j \mid i \geq 2j \text{ and } i, j \geq 0 \}$



**问题1：**

**证明：**

假设语言 $L_1 = \{ a^n b^{2n} \mid n \geq 0 \}$ 是正则的。根据抽档引理，存在一个抽档长度 $p$，使得对于任何 $s \in L_1$，且 $|s| \geq p$，都可分解为 $s = xyz$，满足：

1. $|y| > 0$，
2. $|xy| \leq p$，
3. 对于所有 $i \geq 0$，$xy^i z \in L_1$。

取 $s = a^p b^{2p}$。由于 $|xy| \leq p$，$xy$ 只能包含 $a$，且 $y \neq \varepsilon$，所以设 $y = a^k$，其中 $k \geq 1$。

考虑 $i = 0$，得到 $s' = x y^0 z = a^{p - k} b^{2p}$。

此时，$s'$ 中 $a$ 的数量为 $p - k$，$b$ 的数量为 $2p$。显然 $2(p - k) \neq 2p$，因此 $s' \notin L_1$，与条件3矛盾。

**结论：**因此，$L_1$ 不是正则语言。

---

**问题2：**

**证明：**

假设语言 $L_2 = \{ a^i b^j \mid i \geq 2j,\ i, j \geq 0 \}$ 是正则的。根据抽档引理，存在一个抽档长度 $p$，使得对于任何 $s \in L_2$，且 $|s| \geq p$，都可分解为 $s = xyz$，满足：

1. $|y| > 0$，
2. $|xy| \leq p$，
3. 对于所有 $i \geq 0$，$xy^i z \in L_2$。

取 $s = a^{2p} b^p$。由于 $|xy| \leq p$，$xy$ 只能包含 $a$，且 $y \neq \varepsilon$，所以设 $y = a^k$，其中 $k \geq 1$。

考虑 $i = 0$，得到 $s' = x y^0 z = a^{2p - k} b^p$。

检验是否满足 $i' \geq 2j'$：

$$
2p - k \geq 2 \times p \\
2p - k \geq 2p \\
-k \geq 0 \\
k \leq 0
$$

这与 $k \geq 1$ 矛盾，因此 $s' \notin L_2$，与条件3矛盾。

**结论：**因此，$L_2$ 不是正则语言。



**Q7 Pumping in regular languages** 

For each of the following languages (over Σ = {0, 1}), give its minimum pumping length and justify your answer.

**Question 1**: $0^*1^*$

**Question 2**: $0^*10^*$

**Question 3**: $\varepsilon$

**Question 4**: $(010)^*$





**Question 1** $\{ w \in \Sigma^* \mid \text{each 1 in } w \text{ is followed by at least two 0's} \}$

**Question 2** $\{ w \in \Sigma^* \mid w \text{ contains neither } 0000 \text{ nor } 1111 \text{ as substring} \}$







**解答1：**

对于语言 $L = \{ w \in \Sigma^* \mid \text{每个} 1 \text{后至少跟着两个} 0 \}$，我们需要找到最小的泵长度 $p$。

首先，构造最小状态数的确定有限自动机（DFA）。为了确保每个 1 后至少跟两个 0，自动机需要跟踪是否有未被满足的 1。

构造的 DFA 需要至少 **4个状态**：

1. 初始状态 $q_0$：未读取到 1 或已满足条件。
2. 状态 $q_1$：刚读取到一个 $1$，需要跟两个 0 。
3. 状态 $q_2$：已读取一个 1 和一个 0，还需一个 0。
4. 拒绝状态 $q_3$：条件未被满足。

因此，最小的泵长度 p = 4。

然而，我们需要验证在 p = 4  时，泵引理是否成立。

取字符串 w = 1000，长度为 4，属于 L。根据泵引理，w 可以分为 xyz ，满足：

- $|xy| \leq p$

- $|y| \geq 1$
- 对所有 $i \geq 0$，$xy^i z \in L$

尝试分割 $w = 1|00|0$，其中 y = "00"。当 i = 0 时，$xy^0 z = 1 + 0 = 10$，此字符串不在 L 中，因为 1 后只跟了一个 0。

因此，在 p = 4 时，泵引理不成立。

当 p = 5 时，任何长度大于等于 5 的字符串都满足泵引理。因此，**最小泵长度为 5**。

---

**解答2：**

对于语言 $L = \{ w \in \Sigma^* \mid w \text{不包含子串} 0000 \text{或} 1111 \}$，我们需要找到最小的泵长度 p。

为了检测是否存在连续的四个 0 或 1，DFA 需要记忆最近的三个字符。因此，最小的DFA需要 **8个状态**（包括初始状态和拒绝状态）。

因此，最小的泵长度 p = 8。

验证：

取字符串 $w = 0001000$，长度为 7。根据泵引理，尝试任何符合条件的分割 $w = xyz$ 都会导致泵引理失败，因为无论如何分割，重复  y 后都会产生连续的四个 0。

因此，必须取 p = 8 才能确保泵引理成立。

**因此，最小泵长度为 8。**





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

