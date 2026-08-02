---
title: Assignment 3 All In a Row, Part 2 The Controller
date: 2025-02-06 06:07:52
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

### 1. Purpose

The goal of this assignment is to practice writing a controller. While the model in a program represents the game state, the controller “runs” the program, effectively facilitating it through a sequence of operations. This assignment mimics the style of the previous assignment, in that you are provided an interface that you must implement and adequately test. The class you implement will act as the controller and work with the model that you created in the previous assignment. This controller will “run” a game of PokerPolygons, asking for input and outputting the game state. Since the game will still be text-based and the input/output will be limited to the console and keyboard, the notion of a “view” will be minimal in this assignment.

There will be three submissions for this assignment:

- Your *actual implementation* and full test suite
- A *self-evaluation*, released *one day after* the actual implementation;s deadline and due *one day and three hours after that*, where we will ask you to reflect on your implementation and testing choices.

The same late-day policy as on the previous homework applies: each of these three submissions independently may use up to one late day, and you are still able to submit your self-evaluation on time even if you submit your implementation late.

You are expected to use your code from the previous assignment as the starting point for this assignment. **However, please ensure all of your new code is in the `cs3500.pokerpolygons.controller` package. Additionally, your code from the previous assignment should remain in the `cs3500.pokerpolygons.model.hw02` and `cs3500.pokerpolygons.view` packages.**

For all of your implementation, **no method in your source code should exceed 50 lines. This hampers clarity of your code.**

### 2. Preliminaries: Improving your view

In the previous assignment, you implemented a `PokerPolygonsTextualView` class, such that its `toString` method provided the desired output. This was not ideal design, but it was convenient at the time. For this assignment, you will refine that view to be slightly more flexible. Enhance your class such that it now implements the following interface, which should replace the one given in the previous assignment:

```java
public interface PokerPolygonsTextualView {
  /**
   * Renders a model in some manner (e.g. as text, or as graphics, etc.)
   * to the given appendable.
   * @param out where to send the model information to
   * @throws IOException if the rendering fails for some reason
   */
  void render(Appendable out) throws IOException;
}
```

This view interface is tiny, but it abstracts away the idea that views are intrinsically `String`-based.

Implement `render` such that it appends the current textual output to the given `Appendable`. *You should preserve* your `toString` method, since it is useful, but you should *also* implement this `render` method — it should be very short!

### 3. The Controller interface

The interface for the Poker Polygons controller must support the following functionality (as an interface `PokerPolygonsController` that you should place in the `cs3500.pokerpolygons.controller` package):

1. A method `void <C> playGame(PokerPolygons<C> model, PokerPolygonsTextualView view, List<C> deck, boolean shuffle, int handSize)`. This method should play a new game of Poker Polygons using the provided model using the `startGame` method on the model. It should throw an `IllegalArgumentException` if the model or the view are `null`. It should throw an `IllegalStateException` **only** if the controller is unable to successfully receive input or transmit output, or if the game cannot be started. The nature of input/output will be an implementation detail (see below).

Notice that only the method is generic, not the interface! Before you implement your controller (see [The Controller implementation](https://course.ccs.neu.edu/cs3500/hw_pokersquare_02_assignment.html#(part._implementation)) below), you should first work through examples for it.

A suggestion about workload management: You should spend a *reasonable* amount of effort trying to test your controller. If you find yourself getting stuck, switch gears and start working on the implementation, and maybe new testing ideas will occur to you as you work through that implementation. For your own learning, keep notes of which ideas occurred to you before implementing anything, vs which ideas only occured as a result of trying to implement the controller: is there a pattern of “things you only noticed later” that you might try to deliberately look for sooner, on future projects?

### 4. The Controller implementation

Design a class `PokerPolygonsTextualController` that implements the `PokerPolygonsController` interface above (also in the `cs3500.pokerpolygons.controller` package). You will need to:

1. Think about which additional fields and types it needs to implement the promised functionality.
2. Design a constructor `PokerPolygonsTextualController(Readable rd, Appendable ap) throws IllegalArgumentException`. Recall from [Lecture 8: Controllers and Mock Objects](https://course.ccs.neu.edu/cs3500/lec_controllers_mocks_notes.html) that `Readable` and `Appendable` are two existing interfaces in Java that abstract input and output respectively. The constructor should throw the `IllegalArgumentException` if and only if any of its arguments are `null`. Your controller should accept and store them for doing input and output. Any input coming from the user will be received via the `Readable` object, and any output sent to the user should be written to the `Appendable` object by way of the provided `PokerPolygonsTextualView`. *Hint:* Look at the `Readable` and `Appendable` interfaces to see how to read from and write to them. Ultimately you must figure out a way to transmit a `String` to an `Appendable` and read suitable data from a `Readable` object. The [`Scanner`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Scanner.html) class will likely be useful, as will the lecture notes on controllers.
3. The `void <C> playGame(PokerPolygons<C> model, PokerPolygonsTextualView view, List<C> deck, boolean shuffle, int handSize)` method should play a game. It should “run” the game in the following sequence until the game is over. **Note:** Each *transmission* described below should end with a newline.
    1. *Transmit* game state to the `Appendable` object by way of the given view of the model.
    2. *Transmit* `"Score: N"`, replacing N with the actual score.
    3. If the game is ongoing (i.e. there is more user input and the user hasn’t quit yet), obtain the next user input from the `Readable` object. A user input consists of a “move” specified by a move type followed by a sequence of values (separated by any type of whitespace):
        - `place` followed by three natural numbers. The first is the index of the card in the hand to place; the next is the *row* to place in; and the last is the *column* to place in. For example, an input of `place 4 5 2` should cause the controller to call the `placeCardInPosition` method on your model with appropriate inputs to move the fourth card of the hand to the correct position (see note below).
        - `discard` followed by a natural number. The number is the index of the card in the hand to discard. For example, `discard 4` should cause your controller to call the `discardCard` method on your model to *attempt* to discard the fourth card of the hand and draw a new card from the top of the deck.
    4. If the game is over, the method should *transmit* the final game state one last time and the message `"Game over. Score: N"`. The method should then end.

**Key points:**

- **User input numbering:** To make the inputs more user-friendly, all indices in the user provided input begin from 1. This will affect the inputs that your controller passes along to your model.

- **Quitting:** If at *any* point, the next value is either the letter `'q'` or the letter `'Q'`, the controller should *transmit* the following in order: the message `"Game quit!"`, the message `"State of game when quit:"`, the current game state, and the message `"Score: N"` with *N* replaced by the final score. The method should then end. For example:

    ```
    Game quit!
    State of game when quit:
     2♢
     3♠  8♢
     4♡  __  5♢
     5♣  4♣ 10♢  3♣
     __  8♠  __  9♡  7♡
     K♣  9♢  J♡  6♣  K♠  __
     Q♠  J♠  A♡  2♣  8♠ 9♠ 10♠
    Deck: 33
    Hand: 3♡, 10♡
    Score: 77
    ```

- **Bad inputs:** If any individual value is unexpected (i.e. something other than `'q'`, `'Q'` or a number) it should wait for the user to re-enter that value again without transmitting anything. For example, if the user is trying to place a card and has entered the index of the card correctly, but entered row incorrectly, the controller should continue attempting to read a value for the row to move before moving on to read the value for the column. You should behave similarly for the other commands. Once all the numbers are successfully read, if the model indicates the move is invalid, the controller should *transmit* a message to the `Appendable` object saying `"Invalid move. Play again. X"` where *X* is any informative message about why the move was invalid (all on one line), and resume waiting for valid input. It should transmit the game state and score again as it is waiting for a new command! *Hint:* You should probably design a helper method to retry reading inputs until you get a number or a `'q'`/`'Q'`. Using that helper consistently will make it much easier to implement the desired retrying behavior described here. That helper probably should *not* be responsible for determining if a number is a valid coordinate — that’s the model’s job — but that helper does need to return either the user’s number *or* their desired to quit the game. Think carefully about the signature of this method before you start implementing it... If the command is invalid (i.e. something other than `"place"`, `"discard"`, `'q'` or `'Q`), the controller should *transmit* a message to the `Appendable` object saying `"Invalid move. Play again. X"` where *X* is any informative message about the input and resume wiating for valid input. Of note, the controller should *not* transmit the game state or score again. It should simply wait for another command.

- **Error handling:** The `playGame` method should throw an `IllegalArgumentException` if a `null` model or view is passed to it. If the game cannot be started, `Appendable` object is unable to transmit output or the `Readable` object is unable to provide inputs (for whatever reason), the `playGame` method should throw an `IllegalStateException` to its caller. The `playGame` method **must not** throw any other exceptions, nor should it propagate *any* exceptions thrown by the model.

- **Write sufficient tests** to be confident that your code is correct. **Note:** once the model has been tested thoroughly (which you hopefully did in the previous assignment), all that remains to be tested is whether the controller works correctly in all cases. [Lecture 8: Controllers and Mock Objects](https://course.ccs.neu.edu/cs3500/lec_controllers_mocks_notes.html) will prove to be helpful.

Be sure to properly document your code with Javadoc as appropriate. Method implementations that inherit Javadoc need not provide their own unless their contract differs from the inherited documentation.

**If you had to change your implementation from the previous assignment, please document your changes in a README file (a plain text file) that explains what you changed and why. This doesn’t have to be long; a simple bullet-point list of the changes made in which files and why will suffice. This file should be outside of both src and test, but zipped together with the two folders. Having this documentation will make your TAs’ grading job a lot easier!**

### 5` `Testing

You will need to add additional tests to assess whether your controller works *regardless of whether your model works*. (Again, if you’ve sufficiently tested your model in the previous assignment, then you can rely on your model working here.) You will likely need to use the techniques in [Lecture 8: Controllers and Mock Objects](https://course.ccs.neu.edu/cs3500/lec_controllers_mocks_notes.html).

You should create your primary test class in the `cs3500.pokerpolygons` package. This test is outside your controller package, and so can only test the public-facing behaviors of your controller. If you want to test internal implementation details as well, you should create one more test class in the `cs3500.pokerpolygons.controller` package, so that you can check package-private implementation details if needed.

Be mindful of which test cases you place in which test class! *Technically,* you could run all the tests from a single class. But using multiple classes like this helps convey to the reader of your code some of your thought processes behind each test: the reader should understand the examples first, then look at the tests of public behavior, and finally look at implementation-specific fiddly details.

**Note:** When you submit your full implementation, you will see automated tests that *we* wrote and run against *your* code. We give some of our test methods mnemonic names, so that you can try to deduce what our tests are checking for. Just because *we* have a test for a given scenario, though, does not mean that you shouldn’t write your own test case to confirm your understanding!

### 6. What to submit

- For your implementation: submit a properly-structured zip containing at minimum
    - The model interface (`PokerPolygons.java`)
    - Your implementation of the model (`PokerTriangles.java`)
    - The view interface (`PokerPolygonsTextualView.java`)
    - Your implementation of the view (`PokerTrianglesTextualView.java`)
    - The controller interface (`PokerPolygonsController.java`)
    - Your implementation of the controller (`PokerPolygonsTextualController.java`)
    - Any additional classes necessary to compile your code
    - All your tests for all your implementations in one or more JUnit test classes. You should include at least all your tests from the previous assignment, and add to them...
    - A brief README file (a plain text file) explaining what changes from the previous assignment you made, and why. This file exists outside of the src and test folders

As with the previous assignment, please submit a zip containing *only* the `src/` and `test/` directories and the README file with *no surrounding directories*, so that the autograder recognizes your package structure. **Please do not include your `output/` or `.idea/` directories — they’re not useful!**

### 7. Grading standards

For this assignment, you will be graded on

- Whether your interfaces specify all necessary operations with appropriate method signatures,
- Whether your code implements the specifications (functional correctness),
- The clarity of your code,
- How well your code follows the design principles discussed so far,
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

