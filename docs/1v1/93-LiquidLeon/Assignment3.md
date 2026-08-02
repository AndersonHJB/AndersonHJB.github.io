---
title: Assignment 3： Painting a Winner, Part 2： The Controller
date: 2024-10-03 06:05:03
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

**Due dates:**

- **Implementation: Tuesday 10/08 at 8:59pm**
- **Self-evaluation: Wednesday 10/09 at 11:59pm**

Starter files: [code.zip](https://course.khoury.northeastern.edu/cs3500/hw/redseven/02/code.zip)

## 1. Purpose

The goal of this assignment is to practice writing a controller. While the model in a program represents the game state, the controller “runs” the program, effectively facilitating it through a sequence of operations. This assignment mimics the style of the previous assignment, in that you are provided an interface that you must implement and adequately test. The class you implement will act as the controller and work with the model that you created in the previous assignment. This controller will “run” a game of Solo Red, asking for input and outputting the game state. Since the game will still be text-based and the input/output will be limited to the console and keyboard, the notion of a “view” will be minimal in this assignment.

There will be two submissions for this assignment:

- Your *actual implementation* of the controller and full test suite
- A *self-evaluation*, due *one day plus three hours later* than the actual implementation, where we will ask you to reflect on your implementation and testing choices.

The same late-day policy as on the previous homework applies: each of these three submissions independently may use up to one late day, and you are still able to submit your self-evaluation on time even if you submit your implementation late.

You are expected to use your code from the previous assignment as the starting point for this assignment. **However, please ensure all of your new code is in the `cs3500.solored.controller` package. Additionally, your code from the previous assignment should remain in the `cs3500.solored.model.hw02` and `cs3500.solored.view.hw02` packages.**

## 2. Preliminaries: Fixing the model

In HW2, the method `getCanvas` was documented as throwing an exception when the game is over. In the controller, this is a *hindrance*. You must edit the interface to remove that exception and then remove the relevant code from the implementation. Otherwise the client can never see the final state of the game.

## 3. Preliminaries: Improving your view

In the previous assignment, you implemented a `SoloRedGameTextView` class, such that its `toString` method provided the desired output. This was not ideal design, but it was convenient at the time. For this assignment, you will refine that view to be slightly more flexible. Enhance your class such that it now implements the following interface, which should replace the one given in the previous assignment:

```java
public interface RedGameView {
  /**
   * Renders a model in some manner (e.g. as text, or as graphics, etc.).
   * @throws IOException if the rendering fails for some reason
   */
  void render() throws IOException;
}
```

This view interface is tiny, but it abstracts away the idea that views are intrinsically `String`-based.

You should then add a second constructor to your `SoloRedGameTextView` class, that takes in both a model and an `Appendable` (see below), and implement `render` such that it appends the current textual output to that `Appendable`. *You should preserve* your `toString` method, since it is useful, but you should *also* implement this `render` method — it should be very short!



## 4.  The Controller interface

The interface for the Solo Red controller must support the following functionality (as an interface `RedGameController` that you should place in the `cs3500.solored.controller` package):

1. A method `void <C extends Card> playGame(RedGameModel<C> model, List<C> deck, boolean shuffle, int numPalettes, int handSize)`. This method should play a new game of Solo Red using the provided model, using the `startGame` method on the model. It should throw an `IllegalArgumentException` if the provided model is `null`. It should throw an `IllegalStateException` **only** if the controller is unable to successfully receive input or transmit output. The nature of input/output will be an implementation detail (see below). It should also throw an `IllegalArgumentException` if the game cannot be started.

Before you implement your controller (see [The Controller implementation](https://course.khoury.northeastern.edu/cs3500/hw_redseven_02_assignment.html#(part._implementation)) below), you should first work through examples for it.

A suggestion about workload management: You should spend a *reasonable* amount of effort trying to test your controller. If you find yourself getting stuck, switch gears and start working on the implementation, and maybe new testing ideas will occur to you as you work through that implementation. For your own learning, keep notes of which ideas occurred to you before implementing anything, vs which ideas only occurred as a result of trying to implement the controller: is there a pattern of “things you only noticed later” that you might try to deliberately look for sooner, on future projects?



## 5. The Controller implementation

Design a class `SoloRedTextController` that implements the `RedGameController` interface above (also in the `cs3500.solored.controller` package). You will need to:

1. Think about which additional fields and types it needs to implement the promised functionality.

2. Design a constructor `SoloRedTextController(Readable rd, Appendable ap) throws IllegalArgumentException`. Recall from [Lecture 8: Controllers and Mock Objects](https://course.khoury.northeastern.edu/cs3500/lec_controllers_mocks_notes.html) that `Readable` and `Appendable` are two existing interfaces in Java that abstract input and output respectively. The constructor should throw the `IllegalArgumentException` if and only if either of its arguments are `null`. Your controller should accept and store these objects for doing input and output. Any input coming from the user will be received via the `Readable` object, and any output sent to the user should be written to the `Appendable` object by way of a `RedGameView`. *Hint:* Look at the `Readable` and `Appendable` interfaces to see how to read from and write to them. Ultimately you must figure out a way to transmit a `String` to an `Appendable` and read suitable data from a `Readable` object. The [`Scanner`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Scanner.html) class will likely be useful, as will the lecture notes on controllers.

3. `playGame` method should play a game. It should “run” the game in the following sequence until the game is over. **Note:** Each *transmission* described below should end with a newline.

    a. *Transmit* game state to the `Appendable` object exactly as the view of the model provides it.

    b. *Transmit* `"Number of cards in deck: N"`, replacing N with the actual number of cards left in the deck.

    c. If the game is ongoing (i.e. there is more user input and the user hasn’t quit yet), obtain the next user input from the `Readable` object. **Do not prompt them with a message.** A user input consists of a “move” specified by a move command followed by a sequence of values (separated by any type of whitespace):

    - `palette` followed by two natural numbers.

        > A natural number is a whole number greater than or equal to zero.

        The first number is the index of the palette you want to paint to; and the second number is the index of the card in the hand you want to play. For example, an input of `palette 1 3` should cause the controller to call the `playToPalette` method on your model with appropriate inputs to try and play the third card to the first palette. **If the game is not over, the controller should draw until the hand is full or the deck is empty** (see note below).

    - `canvas` followed by one natural number. The number represents the index of the card in the hand you want to play. For example, `canvas 2` should cause your controller to call the `playToCanvas` method on your model to play the second card from the hand.

    d. If the game is over, the method should do the following

    - *transmit* the message `"Game lost."` if the player lost or the message `"Game won."` if the player won.
    - *transmit* the final game state one last time
    - *transmit* the message `"Number of cards in deck: N"` as before

    The method should then end.

**Key points:**

- **User input numbering:** To make the inputs more user-friendly, all indices in the user provided input begin from 1. This will affect the inputs that your controller passes along to your model.
- **Quitting:** If at *any* point, the next value is either the letter `'q'` or the letter `'Q'`, the controller should *transmit* the following in order: the message `"Game quit!"`, the message `"State of game when quit:"`, the current game state, and the message `"Number of cards in deck: N"` with *N* replaced by the remaining number of cards left in the deck. The method should then end. For example:

```java
Game quit!
State of game when quit:
Canvas: R
P1: R1
> P2: O2 R7
P3: V2
Hand: V1 I2 O6 R3
Number of cards in deck: 4
```

- **Bad inputs:** If any individual value is unexpected (i.e. something other than `'q'`, `'Q'` or a number) it should wait for the user to re-enter that value again. For example, if the user is trying to play to a palette , and has entered the palette index correctly, but entered the card index incorrectly, the controller should continue attempting to read a value for the card index before continuing. For another example, if the user is trying to play to a palette and has entered the palette index incorrectly, the controller should continue attempting to read a value for the palette index before moving on to reading for the card index. The controller should behave similarly for the other commands. Once all the numbers are successfully read, if the model indicates the move is invalid, the controller should *transmit* a message to the `Appendable` object saying `"Invalid move. Try again. X"` where *X* is any informative message about why the move was invalid (all on one line), and resume waiting for valid input. *Hint:* You should probably design a helper method to retry reading inputs until you get a number or a `'q'`/`'Q'`. Using that helper consistently will make it much easier to implement the desired retrying behavior described here. That helper probably should *not* be responsible for determining if a number is a valid coordinate — that’s the model’s job — but that helper does need to return either the user’s number *or* their desired to quit the game. Think carefully about the signature of this method before you start implementing it...

    If an input is not a valid command for the game (i.e. something other than `'q'`, `'Q'`, `'palette'`, or `'canvas'`), the controller should *transmit* a message to the `Appendable` object saying `"Invalid command. Try again. X"` where *X* is some helpful message (all in one line). Then the controller should try reading the next value for a command.

- **Error handling:** The `playGame` method should throw an `IllegalArgumentException` if a `null` model is passed to it. If the `Appendable` object is unable to transmit output or the `Readable` object is unable to provide inputs (for whatever reason), the `playGame` method should throw an `IllegalStateException` to its caller. The `playGame` method **must not** throw any other exceptions, nor should it propagate *any* exceptions thrown by the model.

- **Write sufficient tests** to be confident that your code is correct. **Note:** once the model has been tested thoroughly (which you hopefully did in the previous assignment), all that remains to be tested is whether the controller works correctly in all cases. [Lecture 8: Controllers and Mock Objects](https://course.khoury.northeastern.edu/cs3500/lec_controllers_mocks_notes.html) will prove to be helpful.

Be sure to properly document your code with Javadoc as appropriate. Method implementations that inherit Javadoc need not provide their own unless their contract differs from the inherited documentation. Finally, **no method in your implementation should exceed 50 lines. This hampers clarity of your code.**

**If you had to change your implementation from the previous assignment, please document your changes in a README file (a plain text file) that explains what you changed and why. This doesn’t have to be long; a simple bullet-point list will suffice. But having this documentation will make your TAs’ grading job a lot easier!**

## 6. Testing

You will need to add additional tests to assess whether your controller works *regardless of whether your model works*. (Again, if you’ve sufficiently tested your model in the previous assignment, then you can rely on your model working here.) You will likely need to use the techniques in [Lecture 8: Controllers and Mock Objects](https://course.khoury.northeastern.edu/cs3500/lec_controllers_mocks_notes.html).

You should create your primary test class in the `cs3500.solored` package. This test is outside your controller package, and so can only test the public-facing behaviors of your controller. If you want to test internal implementation details as well, you should create one more test class in the `cs3500.solored.controller` package, so that you can check protected and package-private implementation details if needed.

Be mindful of which test cases you place in which test class! *Technically,* you could run all the tests from a single class. But using multiple classes like this helps convey to the reader of your code some of your thought processes behind each test: the reader should understand the examples first, then look at the tests of public behavior, and finally look at implementation-specific fiddly details.

**Note:** When you submit your full implementation, you will see automated tests that *I* wrote and run against *your* code. I gave some of my test methods mnemonic names, so that you can try to deduce what my tests are checking for. Just because *I* have a test for a given scenario, though, does not mean that you shouldn’t write your own test case to confirm your understanding!

## 7. What to submit

- For your implementation: submit a properly-structured zip containing at minimum
    - The model interface (`RedGameModel.java`)
    - Your implementation of the model (`SoloRedGameModel.java`)
    - The view interface (`RedGameView.java`)
    - Your implementation of the view (`SoloRedGameTextView.java`)
    - The controller interface (`RedGameController.java`)
    - Your implementation of the controller (`SoloRedTextController.java`)
    - Any additional classes necessary to compile your code
    - All your tests for all your implementations in one or more JUnit test classes. You should include at least all your tests from the previous assignment, and add to them...
    - A brief README file (a plain text file) explaining what changes from the previous assignment you made, and why.

As with the previous assignment, please submit a zip containing *only* the `src/` and `test/` directories with *no surrounding directories*, so that the autograder recognizes your package structure. **Please do not include your `output/`, `out`, or `.idea/` directories — they’re not useful and we will deduct points if you do!**



## 8. Grading standards

For this assignment, you will be graded on

- Whether your interfaces specify all necessary operations with appropriate method signatures,
- Whether your code implements the specifications (functional correctness),
- the clarity of your code, including length of your methods as established in this assignment and documentation
- How well your code follows the design principles discussed so far and the relevant principles in the Design Principles Masterlist,
- The comprehensiveness of your test coverage, and
- How well you follow the [style guide](https://google.github.io/styleguide/javaguide.html).

Please submit your homework by the above deadline. Then be sure to complete your self evaluation by the second deadline.





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

