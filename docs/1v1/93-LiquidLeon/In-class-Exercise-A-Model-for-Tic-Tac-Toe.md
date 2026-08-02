---
title: Lecture 9 In-class Exercise A Model for Tic Tac Toe
date: 2025-02-04 18:00:44
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

### 1. A Controller for Tic Tac Toe

The purpose of this exercise is to give you practice with implementing the Controller component of the Model-View-Controller design pattern, by means of a textual, console-based controller.

*You may work freely with other students on this exercise!*

In the starter code, you are given an interface representing a controller for Tic Tac Toe, with a single method, `playGame()`. Your task is to implement the `TicTacToeController` interface. Put your new controller code in the same package alongside your Tic Tac Toe model as it will depend on the model. You are also given a class `Main` with a `main` method that will allow you to test your game interactively.

You will need to create one additional class: a public class named `TicTacToeConsoleController` that implements `TicTacToeController`, with a single public constructor that takes two arguments, a `Readable` and an `Appendable` (in that order). You will fill in the fields and the method definitions as appropriate. You may also define other classes at your option as needed.

The controller will output game state and prompts to the `Appendable`, and read inputs from the `Readable` corresponding to user moves. The `append()` method on `Appendable` throws a checked exception, `IOException`. Your `playGame()` method should not throw this exception. If it occurs, your `playGame()` should catch it and throw an `IllegalStateException`.

A single move consists of two numbers, specifying the row and column of the intended move position. Board positions for these moves are numbered from 1. For example, to mark **X** in the upper left cell, the user would enter `"1 1"` at the first prompt. To mark **O** in the upper right cell on the second move, the user would enter `"1 3"`. To quit a game in progress, the user can enter `q` or `Q` at any time.

The game state is the output of the model’s `toString()` method, followed by a carriage return (`\n`). The move prompt is

```
"Enter a move for " + model.getTurn().toString() + ":\n"
```

(where `model` is an instance of your Tic Tac Toe Model).

If a non-integer value is entered, it should be rejected with an error message. If an invalid move is entered, namely, two valid integers, but the proposed move was deemed invalid by the model, the controller should give an error message. The message text is up to you, but should end with a carriage return.

At the end of the game, the controller should output, in order on separate lines:

- A final game state
- `"Game is over!"` followed by `"X wins."` or `"O wins."` or `"Tie game."` depending on the outcome

If the user quits, the controller should output

```
"Game quit! Ending game state:\n" + model.toString() + "\n"
```

and end the `playGame()` method.

### 2. Testing

We have supplied you with some basic JUnit tests as part of the starter code. Use these to verify that your implementation is correct. **Write additional tests of your own**: Assignment 3 is a testing-heavy assignment. Some of the additional cases you should implement are listed as comments in the test class you are given. Implement those tests at the least.

### 3. Notes to Keep in Mind

- You will likely need a `while()` loop; be aware that you can use the `break` statement to break out of a loop prematurely (before the loop condition is false).
- You will need to use the built-in `Scanner` class. See the lecture notes examples and explore the Oracle JavaDoc for this class for more information on how to use it.
- Avoid duplicating code as much as possible. Consider using non-public methods as means of creating reusable pieces of functionality.
- Be sure to use access modifiers, `private` and `public`, as well as `final`, appropriately.
- Include JavaDoc for your classes and constructors as appropriate. You do not need to repeat JavaDoc already existing in a superclass or interface when you override a method. This is true for the course in general.

### 4. To Turn In

Submit your zip containing only your src and test directories to In-class Exercise 2 on the handin server. There is no self-evalulation for this exercise. Your grade will be determined by code style ~~(70%) and JUnit correctness (30%)~~; this assignment is simply for your practice. We will not be doing manual grading, but if you would like feedback on your design, and **specifically your test coverage**, contact a member of the course staff and we will review it.

















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

