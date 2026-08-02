---
title: Assignment 2：All In a Row, Part 1：The Model
date: 2025-01-27 23:27:16
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

- **Implementation: Thursday, Jan 30 at 8:59pm**
- **Self-evaluation: Released Friday, Feb 01 at 9:05pm, Due Saturday, Feb 02 at 11:59pm**

**Note:** The description may make assignments seem longer than they are. Distilling the description to make a list of all the things you are actually supposed to do will go a long way in having a good plan to tackle it. Read the description several times to confirm this list before acting on it!

## 1. Purpose

The primary goal of this assignment is to practice implementing an interface based on given specifications, and by choosing an appropriate data representation that helps in providing the functionality promised by the interface.

**Please ensure all of your source code is in the `cs3500.pokerpolygons.model.hw02` and `cs3500.pokerpolygons.view` packages.** Note that the model package refers to `hw02`, and the view does not. (See [Package Management](https://course.ccs.neu.edu/cs3500/hw_pokersquare_01_assignment.html#(part._.Package._management)) below.)

There will be two submissions for this assignment:

- Your *actual implementation* and full test suite
- A *self-evaluation*, released *one day after* the actual implementation;s deadline and due *one day and three hours after that*, where we will ask you to reflect on your implementation and testing choices.

**A reminder about late days:** Each submission is a *distinct* submission, and each one will independently use up your late days if you submit after the deadline. (Submitting late for the implementation does not mean you automatically get a “free” late day for the self-eval as well – submitting both parts late will use *two* late days.) The 24-hour delay for the self-evaluation is deliberate, so that even if you submit your assignment late, you can still submit your self-evaluation on time.

Read below for more details of each submission.

## 2. Poker Polygon Game

### 2.1 Context

![](https://blog.images.bornforthis.cn/docs-images/sha256/fa/fa6deb03bb796b13194d2827c467c9f3b15d95670f08a928886a54fbaa8c5d8e.jpeg)

In the next three assignments, you will implement the common single-player card game called “Poker Polygon”, a more general version of the older game “Poker Squares”. You can play the game of Poker Squares [here](https://www.solitaireparadise.com/games_list/poker-solitaire.html) to get a sense of the game in its most basic form.

In the first two assignments, you will focus on implementing “Poker Triangles” where the polygon to fill with cards is right-angle equilateral triangle. The image above shows a Poker Triangle layout at the start of a game.

#### 2.1.1 Cards for the Game

Poker Triangles uses the standard suit-rank playing cards for its game. There are four suits: clubs (`♣`), diamonds (`♢`), hearts (`♡`), and spades (`♠`). Hearts and diamonds are colored red; clubs and spades are colored black.[1](https://course.ccs.neu.edu/cs3500/hw_pokersquare_01_assignment.html#(counter-()._(gentag._1._assignmentpokersquare%2F01))) There are thirteen ranks: ace (written `A`), two through ten (written `2` through `10`), jack (`J`), queen (`Q`) and king (`K`). Note that two cards are the same if they have the same suit and rank.

In the game itself, the rank of a card is associated with a numerical value. The ranks two through ten have the numerical values 2 through 10 respectively. Jacks have a numerical value of 11, Queens a numerical value of 12, and Kings a numerical value of 13. Aces are special in that their numerical value can either be 1 or 14 depending on the poker hand. [2](https://course.ccs.neu.edu/cs3500/hw_pokersquare_01_assignment.html#(counter-()._(gentag._2._assignmentpokersquare%2F01))) These numerical values will come into play when determining the score of the game.

There are two areas of the game play. First, there is the board itself, a right-angle equilateral triangle of empty positions. The triangle can have any side length greater than or equal to five cards. Then there is the hand itself, a collection of cards the player can choose from to fill the empty positions on the board.

In a standard game, there are 52 cards: one complete set of all possible ranks in each possible suit. Our game will be more flexible to accommodate the arbitrary size of the board: it will allow for any deck of cards, which may have duplicate cards, as long as there are at least enough cards to fill the polygon. Furthermore, the size of the hand can be any positive size less than or equal to the number of cards needed to fill the triangle at the start of the game.

As an example, suppose we are working with a board where the triangle side’s length is 5 cards. Then the following decks are valid for starting the game:

- standard 52 card deck
- a 104 card deck that contains 2 of every card from the standard deck
- a deck of all 13 spade cards and any 2 club cards
- a deck of 15 cards where every card is the A`♡`

### 2.2 Flow of the game

Play starts by dealing a full hand to the player and an empty polygon. The hands are drawn from the top of the deck, one after the other.

A player must make one of two moves:

- Play one of the cards in the hand to an empty position in the polygon. Then draw a new card from the top of the deck and place it at the rightmost end of the hand (e.g. the back).
- Discard one of the cards from their hand and draw another. The discarded card is removed from the game. This can only be done if there are at least enough cards in the hand and the deck to fill every empty position remaining on the board. If that is not the case, the discard cannot be performed.

The player continues to make their moves until the game is over. The game is over when the board has no empty positions left. In other words, the player has filled each position on the board with a card.

The *score* of the game is determined by the poker hands developed along the internal rows, columns, and outer sides of the triangle that have 5 or more cards.

#### 2.2.1 Poker Hands

Before we can describe scoring, we must first describe the types of poker hands that will be used in scoring. We list the poker hands in the order they are evaluated. In other words, if the hand is not a straight flush, then we see if the hand is a four of a kind. This continues until we reach high card, which *every* hand satisfies the definition for.

- Straight Flush: The hand has 5 cards of the same suit and those 5 cards, if sorted, form a run: a sequence of ranks that can be ordered such that each rank increases by 1 in numerical value. Here are some examples of straight flushes:

    - 3♣,4♣,5♣,6♣,7♣: The next rank is always one more than the previous rank, making this a run.
    - 4♣,5♣,2♣,3♣,6♣: Still a straight because when *sorted*, it fits the definition.
    - 8♠,9♠,10♠,J♠,Q♠: J has a numerical value of 11, Q a numerical value of 12, and K a numerical value of 13.
    - A♢,2♢,3♢,4♢,5♢: A can have the numerical value of 1, which allows this straight to be formed.
    - 10♠,J♠,K♠,Q♠,A♠: A can also be the highest numerical value of 14, which allows this straight to be formed.

    

    It is worth noting that straights cannot wrap around (e.g. K♠,Q♠,A♠,2♠,3♠) because then the sequence of ranks is not always increasing by 1.

- Four of a Kind: The hand has 5 cards, at least 4 of which have the same rank. Here are some examples of four of a kinds:

    - 3♣,3♢,3♡,2♣,3♠
    - Q♢,Q♢,J♢,Q♢,Q♢: Recall the game can be played with *any deck* and can contain duplicate cards, so this is a possible hand.
    - 9♡,10♡,9♡,9♢,9♠: Similar with this hand.
    - 3♣,3♢,3♡,3♣,3♠: Notice that even though there are five of the same rank, this is considered a four of a kind.

- Full House: The hand 5 cards, 3 cards of the same rank and 2 cards of a different single rank. Here are some examples of full houses:

    - 3♣,3♢,3♡,2♣,2♠
    - J♢,Q♢,J♢,Q♢,Q♢: Recall the game can be played with *any deck* and can contain duplicate cards, so this is a possible hand.
    - 10♡,9♡,9♡,9♢,10♠: Similar with this hand.

- Flush: The hand has 5 cards, all of which have the same suit. Here are some examples of flushes:

    - 3♣,8♣,5♣,6♣,7♣
    - 4♢,9♢,2♢,8♢,6♢
    - 10♡,3♡,K♡,2♡,A♡

- Straight: The hand has 5 cards and those cards, if sorted, form a run: a sequence of ranks that can be ordered such that the numerical value of each card’s rank increases by 1. Here are some examples of straights:

    - 3♣,4♡,5♢,6♠,7♡: The next numerical value is always one more than the previous numerical value, making this a run.
    - 4♠,5♢,2♠,3♡,6♢: Still a straight because when *sorted*, it fits the definition.
    - 8♣,9♣,10♠,J♡,Q♢: J has a numerical value of 11, Q a numerical value of 12, and K a numerical value of 13.
    - A♣,2♠,3♣,4♢,5♡: A can have the numerical value of 1, which allows this straight to be formed.
    - 10♡,J♡,K♠,Q♠,A♡: A can also be the highest numerical value of 14, which allows this straight to be formed.

    It is worth noting that straights cannot wrap around (e.g. K♠,Q♠,A♠,2♠,3♠) because then the sequence of ranks is not always increasing by 1.

- Three of a Kind: The hand has 5 cards, 3 of which have the same rank and the remaining two cards do not share ranks. Here are some examples of three of a kinds:

    - 3♣,3♢,A♡,2♣,3♠
    - Q♢,8♢,J♠,Q♢,Q♢: Recall the game can be played with *any deck* and can contain duplicate cards, so this is a possible hand.
    - 4♡,10♡,4♡,4♢,9♠: Similar with this hand.

- Two Pair: The hand has 5 cards, 2 pairs of which each the same rank and the remaining card does not share a ranks with either pair. Here are some examples of two pairs:

    - 3♣,3♢,A♡,2♣,2♠
    - J♢,8♢,J♠,Q♢,Q♢: Recall the game can be played with *any deck* and can contain duplicate cards, so this is a possible hand.
    - 4♡,10♠,4♡,10♠,9♠: Similar with this hand.

- Pair: The hand has 5 cards, 2 of which share the same value and the remaining three do not share any values. Here are some examples of pairs:

    - 3♣,3♢,A♡,4♣,2♠
    - 9♢,8♢,J♠,Q♢,Q♢: Recall the game can be played with *any deck* and can contain duplicate cards, so this is a possible hand.

- High Card: The hand has 5 cards and does not match the above criteria. Here are some examples of high cards:

    - 2♣,A♢,10♣,9♡,3♣
    - 4♢,9♠,J♢,8♢,6♢

### 2.3 Scoring with the Triangular Polygon

To determine the score of a Poker Triangles game, the player must look at the sides of the triangle and any row or column that has 5 or more cards. (Recall that the side length must be at greater than or equal to 5, so the sides of the triangle are guaranteed to have 5 or more cards). Of note, the same card can be used in multiple different types of hands. In other words, even if a card helps make up the best poker hand for one row, column, or diagonal, it does not prevent that card from being used in *another* row, column, or diagonal’s best poker hand.

Consider the following triangle with a side length of 7.

```
2♢
3♠  8♢
4♡  3♡  5♢
5♣  4♣ 10♢  3♣
6♠  8♠  5♡  9♡  7♡
K♣  9♢  J♡  6♣  K♠  J♢
Q♠  J♠  A♡  2♣  8♠ 9♠ 10♠
```

The side of the triangle are naturally scored (first column, last row, and the diagonal) alongside the last three rows and the first three columns.

For each of these collections of cards, which may contain more than 5 cards, the player find the 5 cards in that collection that create the highest scoring poker hand as determined by the table below.

- Straight Flush: 75 pts
- Four of a Kind: 50 pts
- Full House: 25 pts
- Flush: 20 pts
- Straight: 15 pts
- Three of a Kind: 10 pts
- Two Pair: 5 pts
- Pair: 2 pts
- High Card: 0 pts

For example, say we had a row with the cards 3♡,6♠,A♡,4♡,6♡,7♡. We would score this as a flush because the highest scoring poker hand is made of 3♡,A♡,4♡,6♡,7♡. Notice we did not count the possible pair of rank 6 cards in the hand. That means this row adds 20 pts to the score.

For another example, say in a second game, we had a triangle side with J♡,6♠,A♡,K♡,Q♡,10♡. We would score this as a straight flush because of the poker hand made of J♡,A♡,K♡,Q♡,10♡. Notice we did not count this hand as a straight *or* a flush. That means this side adds 75 pts to the score.

For a final example, say in a third game, we had another triangle side with 2♣,A♢,10♣,9♡,3♣,4♡. Then we would say this is a high card, because with *any* poker hand that can be made from these 6 cards, the best poker hand possible is a high card. That means this side adds 0 pts to the score.

Putting this all together reveals the score of the board given at the start of this section is 114 due to the following poker hands found in each row, column, and diagonal:

- The first column is scored as a straight.
- The second and third columns are each scored as a pair.
- The fifth row is scored as a straight.
- The sixth row is scored as a two pair.
- The seventh row is scored as a straight flush.
- The diagonal is scored as a high card.

## 3. Building Poker Triangles

In this assignment you will design the model for this game. The model will maintain the state of the game and update itself when a client specifies moves. You are *not* required to make the game playable by a user at this point: only you-the-programmer can manipulate the model right now, and there is no mechanism yet for you-the-player to actually specify moves and play the game.

Finally, **no method in your source code should exceed 50 lines. This hampers clarity of your code.**

### 3.1 Cards

Start by modeling a card in the game of Poker Triangles. You are free to name the class and its methods whatever you want, but it must implement the `Card` interface given to you. You *cannot modify* the Card interface, but you may create a new interface that extends the Card interface to define new public methods other classes can rely on. Then your Card implementation can implement the new interface. This is how we can extend the functionality of code without changing existing code!

Your card implementation should behave like a proper “good citizen of Java”, and implement its own `toString`, `equals` and `hashCode` methods. Note that equality should work regardless of the `Card` implementation passed into `equals`. The `toString` method should render the cards as described above: e.g. `"A♡"` or `"10♠"`, etc.

### 3.2 Expected operations

In order to play the game, the client would expect the following operations: start a new game, make a move, get the current state of the game, get the current score and know when the game has ended. These operations have been specified and documented in the provided `PokerPolygons` interface. You are **not** allowed to change the interface in any way!

A short explanation of most of the interface follows (the explanation here supplements the documentation provided in the interface):

- The `PokerPolygons` interface itself takes in a type parameter representing what type your card is. Notice the type parameter is bound by the `Card` interface, ensuring it only understands `Card` types and all subtypes of `Card` — you will need to implement that `Card` interface to represent cards, as described above.
- `getNewDeck()` should return a deck containing a full 52 card deck that your model knows how to work with. This is *not* the deck the game is playing with at the moment.
- `startGame(List<Card> deck, boolean shuffle, int handSize)` follows the description above, and lets the caller specify ~~the number of cards on each side of the triangle and~~ the maximum number of cards in the hand at any given time. Additionally, to make the game more easily testable, this method supplies a deck of cards to be used, and specifies whether the model should shuffle the cards before dealing them, or should use the order given by that deck.
- `placeCardInPosition` and `discardCard` implement the player moves described above. Whenever present, any indices in the parameters are assumed to be zero-based, counting from the left.
- At any point during the game, the triangle “fits” into a rectangle that is `getWidth()` columns wide and `getHeight()` rows tall. For the triangle board, both of these numbers are the length of the sides of the triangle.
- `getCardAt(int row, int col)` returns the card at the given coordinates, if that position exists on the polygon. If the position exists and there is no card, the method return `null` as we cannot guess the type of card used in the game when making the interface. If the position does not exist on the polygon, the model throws an `IllegalArgumentException`.
- `getHand()` returns a copy of the cards in the player’s hand.
- `isGameOver()` returns `true` if the game is over, and `false` otherwise.
- `getRemainingDeckSize()` returns the number of cards remaining in the deck that is being used to play the current game.
- `getScore()` returns the current score in the game.

### 3.3 Your Model Implementation

Implement the `PokerPolygons` interface by filling in the stubs in the `PokerTriangles` class:

1. Design a suitable representation of this game. Think carefully about what fields and types you will need, and how possible values of the fields correspond to game states.

2. Instantiating the game: Your class should define at least two constructors

    - A constructor with one argument that is the length of the sides of the triangular board. Note that invalid lengths should cause the constructor to throw an `IllegalArgumentException`
    - A constructor with two arguments, one that is the length of the sides of the triangular board and another that is a `Random` object to seed any random operations. Note that invalid lengths should cause the constructor to throw an `IllegalArgumentException` and a null `Random` object should throw an `IllegalArgumentException`

    Both constructors must initialize the game in a state that’s ready for someone to call `startGame` and begin playing. You may define whatever other constructors you wish; consider carefully all the methods you are expected to implement, and design your code to avoid as much duplication as possible. Keep in mind that a client should not be able to start a game without calling the `startGame` method!. This means there are methods, like those `placeCardInPosition` that will thrown an `IllegalStateException` if they are called before `startGame` is called and successfully completes.

3. Encapsulation: Your `PokerTriangles` class should not have *any* public fields, nor any public methods other than constructors and the public methods required by the `PokerPolygons` interface.

Be sure to properly document your code with Javadoc as appropriate. Method implementations that inherit Javadoc need not provide their own unless they implement something different or in addition to what is specified in the inherited documentation.

### 3.4 Viewing the model

Our game should have some way of showing us the game board during game play. You have been provided with an empty `PokerPolygonsTextualView` interface that represents a view — we will add meaningful methods to this interface later. In this assignment, you must implement a class called `PokerTrianglesTextualView` in the `cs3500.pokerpolygons.view` package.

```java
public interface PokerPolygonsTextualView {
 ...
}

public class PokerTrianglesTextualView implements PokerPolygonsTextualView{
  private final PokerPolygons<?> model;
  // ... any other fields you need

  public PokerTrianglesTextualView(PokerPolygons<?> model) {
    this.model = model;
  }

  // your implementation goes here
}
```

1. Your class should at least have a constructor with exactly one argument of type `PokerPolygons<?>` — this model provides all the information the view needs in order to be rendered. If this model given is null, a `IllegalArgumentException` should be thrown.

2. The `toString()` method of this class returns a `String` that may be used to display the board. Here is an example rendering of a recently-started game with a side length of 5 and a hand size of 4; your `toString()` method should reproduce this:

    ```
     __
     __  __
     __  __  __
     __  __  __  __
     __  __  __  __  __
    Deck: 48
    Hand: 10♡, Q♡, 3♣, 7♠
    ```

    First, the board is shown. Each position is three characters wide and space separated. Filled positions are shown as the card placed there. If the card has two characters, then a space must be prepended (e.g. `" 7♠"`). Empty positions are shown as a space followed by two underscores `" __"`. Then the deck’s size is shown in a single line. Finally, the player’s current hand is shown. Again, the cards are three characters wide and comma and space separated like the board.

    In this view, every line should end with a newline character, ***except\*** the final line — in this example, the first character of output is the `'_'` of the topmost position of the board and the final character is the `'♠'` of the `"7♠"`.

### 3.5 Testing

You will need tests that assess whether your model implementation implements the behavior specified by the interfaces given and this assignment description.

To do that, you should create *two new test classes*. One of them should go in the `cs3500.pokerpolygons` package of the test directory, and it should contain tests for properties of the *public* model interface. To test implementation-specific details (e.g. details the client should not be aware of), you should create one last test class that you would place in the `cs3500.pokerplygons.model.hw02` package itself, so that you can check package-private implementation details if needed.

Be mindful of which test cases you place in which test class! *Technically,* you could run all the tests from a single class. But using multiple classes like this helps convey to the reader of your code some of your thought processes behind each test: the reader should understand the examples first, then look at the tests of public behavior, and finally look at implementation-specific fiddly details.

**Note:** When you submit your full implementation, you will see automated tests that *we* wrote and run against *your* code. We give some of our test methods mnemonic names, so that you can try to deduce what our tests are checking for. Just because *we* have a test for a given scenario, though, does not mean that you shouldn’t write your own test case to confirm your understanding!







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

