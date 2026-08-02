---
title: Assignment 2：Painting a Winner, Part 1：Solo Red
date: 2024-09-25 07:02:49
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

- **Implementation: Thu, Sep. 26 at 8:59pm**
- **Self-evaluation: Fri, Sep. 27 at 11:59pm**

Starter files: [code.zip](https://course.khoury.northeastern.edu/cs3500/hw/redseven/01/code.zip)

**Note:** The description may make assignments seem longer than they are. Distilling the description to make a list of all the tasks, classes, and methods you are actually supposed to implement will go a long way in having a good plan to tackle it. Read the description several times to confirm this list before acting on it!

## 1. Purpose

The primary goal of this assignment is to practice implementing an interface based on given specifications, and by choosing an appropriate data representation that helps in providing the functionality promised by the interface.

**Please ensure all of your \*source\* code is in the `cs3500.solored.model.hw02` and `cs3500.solored.view.hw02` packages.** Note that the model package refers to `hw02`, and the view does not. (See [Package Management](https://course.khoury.northeastern.edu/cs3500/hw_redseven_01_assignment.html#(part._.Package._management)) below.)

There will be two submissions for this assignment:

- Your *actual implementation* and full test suite
- A *self-evaluation*, due *one day plus three hours later* than the actual implementation, where we will ask you to reflect on your implementation and testing choices.

**The Handins assignment will be delayed by for a little while** This is to encourage you to focus on design and planning testing of your code *before* implementing a representation. It is tempting to get lost in the Handins tests because that is a quantitative measure of progress, but a wrong-headed design can lead to many lost hours of frustration. Please plan ahead before writing your code.

**A reminder about late days:** Each submission is a *distinct* submission, and each one will independently use up your late days if you submit after the deadline. (Submitting late for the implementation does not mean you automatically get a “free” late day for the assignment as well – submitting both parts late will use *two* late days.) The 27-hour window for the self-evaluation is deliberate, so that even if you submit your assignment late, you can still submit your self-evaluation on time.

Read below for more details of each submission.

## 2. The game of Solo Red

### 2.1 Context

In the next three assignments, you will implement a solitaire variation of the party card matching game called “Red7.” The goal of the game is to play cards in such a way that you are constantly winning according to an ever changing ruleset.

**A video showing the solitaire game of Solo Red is coming shortly!** In the meantime, here is an image of the game being played.

![](https://blog.images.bornforthis.cn/docs-images/sha256/b0/b070e4267f7530dcd5ba54a479c00014b73a902dc6b6f13f60078049d4a3d331.jpg)

Note that our version will have some differences to the real version of the game. **Furthermore, a future assignment might involve adding more features to this game.** Keep the above in mind when thinking about your representation in this assignment. However, read this assignment *carefully and from beginning to the end* for what features you are required to implement in this assignment.



### 2.2 Cards in the Game

Our game uses a special set of playing cards for the game. Each card consists of a color and a number. The valid colors are as follows

- Red (R)
- Orange (O)
- Blue (B)
- Indigo (I)
- Violet (V)

The numbers are the integers 1 to 7, inclusive. For example, Red 3, Blue 1, and Violet 7, are all possible cards. We will present cards as two character strings, a letter for the color and the number itself. So Red 3 is printed as R3, Blue as B1 and so on.

### 2.3 Layout of the Game

The game consists of 4 structures of cards:

- the *deck*: the cards a player will draw from
- the `n` *palettes* where `n` is decided on game start: face-up cards that the player will interact with
- the *canvas*: the face-up card that details the current rule for a palette to win
- a *hand*: the cards a player can use to change the canvas or update a palette

### 2.4 The Concept of Winning

Before we explain the rules of the game, we need to explain the concept of a palette "winning". Palettes can either be winning or losing, depending on the current rule for winning. The current rule is dictated by the canvas, specifically the *color* of the card on the top of the canvas. In other words, colors have rules.

Each color represents a different rule. For example, define the following palettes P and Q

- P has the cards Red 4, Blue 5, Red 6
- Q has the cards Orange 6, Violet 7, Blue 3, Indigo 3

The rules for the colors are defined below and we use the above palettes as a way to explain who is winning under that color’s rule.

- Red: The palette with the highest card wins. Let C, D be cards. C is higher than D if the number of C is greater than the number of D OR if the numbers are equal, C’s color is closer to Red than D’s color. We use the rainbow ordering when it comes to declaring closeness. So this means R > O > B > I > V.

    For example, Blue 7 is higher than Red 1 because 7 is greater than 1. With our example palettes, that means Q is winning. Q has a Violet 7 as it’s highest card and P has a Red 6 as it’s highest card. Since 7 > 6, Violet 7 is higher.

- Orange: The palette with the most of a single number wins. With our example palettes, Q is winning because it has two cards with the number 3. P has one card with the same number.

- Blue: The palette with the most cards of different colors wins. With our example palettes, Q is winning because it has 4 cards with different colors. P only has 2 cards with different colors.

- Indigo: The palette with the cards that form the longest run wins. A run is an unbroken increasing sequence of consecutive numbers. For instance 1-2-3 is a run as is the single number 4. However, 4-6 is not a run because it is missing the number 5 and 2-2 is not a run because it is not increasing. With our current example, P is winning because it has a run of length 3 made of Red 4, Green 5, and Red 6. Q only has a run of length 2 made of the colors Orange 6 and Violet 7.

- Violet: The palette with the most cards below the value of 4 wins. With our example palettes, Q wins. Q has 2 cards with a number below 4: Blue 3 and Indigo 3. P has none.

#### 2.4.1 Ties under the Color’s Rule

Note that it is possible that with the color rule alone, there can be a tie. For example, define the following pair of palettes

- P1 has the cards Red 1, Blue 5, Red 6
- Q1 has the cards Violet 4, Blue 2, Orange 6

Under Violet’s rule, P1 and Q1 are tied: both have a single card below 4. P1 has a Red 1 and Q1 has a Blue 2.

If there is a tie under the current rule, focus on only the tied palettes. For each palette, look at the cards that help the palette win under the current rule. Choose the highest card amongst only those cards according to the Red rule. The palette with the highest card wins. Since all cards are unique, this ruling will always break a tie.

Returning to the example, P1 has a Red 1 and Q1 has a Blue 2. By the rules of breaking ties, Q1 wins because blue 2 is a higher card than Red 1.

### 2.5 Game setup

To play, we need a deck of unique cards, enough to fill the palettes with one card and give the player a full hand. The game can be played with two or more palettes and the maximum hand size must be positive (e.g. greater than 0)

First, the palettes are created, from first to last. Each palette is created by putting the current top card of the deck face-up on the palette.

Next, the canvas is created by assuming it is Red. Note it does *not* use a card from the deck but a special card separate from the deck that is Red. (In the packaging, it is an actual separate card but you will improvise in your implementation.)

Finally, draw cards from the deck to the hand until the hand is full.

### 2.6 Game play

With the game setup, the game starts. The player must perform one of the following actions

- Play one card from their hand to a palette that is losing.
- Play one card from their hand to the canvas to change the rule and then play one card from their hand to a palette that is losing.

After the player plays a card from their hand to the current palette, the player checks if the current palette is winning under the current rule. If so,

- The player draws from the deck until either their hand is full or the deck is empty.

There used to be a statement about shifting palettes here. That is not possible in this version of the game.

### 2.7 Examples of Playing a Card to A Palette

Consider the game state displayed below for a 4-palette, 7-card hand game. At this point, P3 is winning under the current rule.

```java
Canvas: R
P1: B2
P2: R1 B5
> P3: O1 V7
P4: O4
Hand: R2 B4 V6 B7 I1 O3 R3
```

The player needs to make a palette win, so they play the B7 card to P1. Since B7 is now the highest card on P1 and it is higher than the B5. So now palette 1 is winning. The player then draws a card from the deck. The visualization below reflects the state of the game. Also notice that every card to the right of where B7 was has slid down!

```java
Canvas: R
> P1: B2 B7
P2: R1 B5
P3: O1 V7
P4: O4
Hand: R2 B4 V6 I1 O3 R3 R4
```

Notice the player’s hand. There is nothing in their hand higher than a B7. In this scenario, the player decides to play the R2 to P3. Notice this means the palette P3, which is now losing, continues to lose. This ends the game, resulting in the final state below. Notice no card has been drawn because the player does not have the chance to do so.

```java
Canvas: R
> P1: B2 B7
P2: R1 B5
P3: O1 V7 R2
P4: O4
Hand: B4 V6 I1 O3 R3 R4
```

### 2.8 Examples of Changing the Canvas and then Playing a Card to a Palette

As seen in the above section, if the player could only play cards to a palette, then it is pretty simple to lose. However, that is where the second possible action occurs. Suppose the game is in the state below

```java
Canvas: R
P1: B2 B7
> P2: R1 R7
P3: O1 V7
P4: O4
Hand: R2 B4 V6 I1 O3 R3 R4
```

The player then decides to play I1 to the canvas, changing the rule from Red to Indigo and giving us the state below. Notice a couple of changes.

- The canvas has changed to I to reflect the indigo color
- The winning palette has not changed because P2 is still winning under this rule. It has the a run of 1 card and the B7, part of the best run, is the highest card amongst all palettes with a run of 1 card.
- The hand has NOT been replenished because the player does not draw yet.
- Also notice that every card to the right of where I1 was has slid down in the hand!

```java
Canvas: I
P1: B2 B7
> P2: R1 R7
P3: O1 V7
P4: O4
Hand: R2 B4 V6 O3 R3 R4
```

Now the player can play a new card to a losing palette and thus make it win. They will play R3 to P4. This will give P4 a run of 2 cards, making it the palette with the longest run. The game continues and the player draws enough cards to fill their hand if possible.

```java
Canvas: I
P1: B2 B7
P2: R1 B5
P3: O1 V7
> P4: O4 R3
Hand: R2 B4 V6 O3 R4 B1 I5
```

Now the player can choose from one of the two actions as the game has continued.

If you look at the first state again, this is not the only way the player could have proceeded. They could have instead played V6 to the Canvas to change the rule first. That results in a new state depicted below. Notice that the winning palette *changed* under the current rule to P1.

```java
Canvas: V
> P1: B2 R7
P2: R1 B5
P3: O1 V7
P4: O4
Hand: R2 B4 I1 O3 R3 B3 R4
```

Now the player must make another palette the winner by playing a card to a losing palette. Since P2 is not winning, P2 is a viable candidate. The player plays I1 to P2, which means P2 is winning because there are 2 cards below 4 there. Again, notice that every card to the right of where I1 was has slid down in the hand!

```java
Canvas: V
P1: B2 R7
> P2: R1 B5 I1
P3: O1 V7
P4: O4
Hand: R2 B4 O3 R3 B3 R4
```

The move changed the winning palette again and so the game continues. Note the player must now draw cards to fill their hand.

### 2.9 Drawing a card when the deck is empty

If the deck runs out of cards during a draw, then the hand is as full as it is going to get. Consider the following state

```
Canvas: R
> P1: B2 B7
P2: R1 B5
P3: O1 V7
P4: O4
Hand: R2 B4 V6 O3 R3 B3 R4 B1
```

Say the player plays V6 to the canvas and then plays R2 to P3. We get the following state.

```java
Canvas: V
P1: B2 B7
P2: R1 B5
> P3: O1 V7 R2
P4: O4
Hand: B4 O3 R3 B3 R4 B1
```

Now the player must draw cards to fill the hand. If the deck has no cards left, the state does not change but the game continues. If the deck has exactly one card left, then the player draws the last card, resulting in the following state. Note that the game continues because the hand is not yet empty and the player was able to successfully change the winning palette.

```java
Canvas: V
P1: B2 B7
P2: R1 B5
> P3: O1 V7 R2
P4: O4
Hand: B4 O3 R3 B3 R4 B1 O2
```

### 2.10 Ending the game

The game continues at this pace until the game ends. The game ends under one of two conditions

- The player played to a losing palette, but that palette did not win. In this case, the player has *lost*.
- The player has no cards in hand and the deck is empty. In this case, the player has *won*.

Below are some examples of game states, annotated with whether the game is over in that state. These examples are not exhaustive, but provide some idea of when the game is over and when it is not. Assume for each of these, the deck is empty.

```java
State A: Game is over

Canvas: R
P1: R1
P2: R2
> P3: R3
Hand:
```

```java
State B: Game is NOT over

Canvas: V
P1: R1 B7
> P2: R2 B2
P3: V1
Hand: B1
```

```java
State C: Game is NOT over
    
Canvas: R
P1: R1
P2: R2
> P3: R3
Hand: B2
```

Notice that it can be difficult to tell from looking at the state if the game has ended in a loss because that condition only occurs after the player plays a card to the palette.

Below are the same three examples, but captioned as to whether the game has been won, can be won, or can only result in a loss.

```java
State A: Game is won

Canvas: R
P1: R1
P2: R2
> P3: R3
Hand:
```

```java
State B: Game can be won

Canvas: V
P1: R1 B7
> P2: R2 B2
P3: V1
Hand: B3
```

```java
State C: Game can only lose
    
Canvas: R
P1: R1
P2: R2
> P3: R3
Hand: B2
```



## 3. Building SoloRed

In this assignment you will design the model for this game. The model will maintain the state of the game and update itself when a client specifies moves. You are *not* required to make the game playable by a user at this point: only you-the-programmer can manipulate the model right now, and there is no mechanism yet for you-the-player to actually specify moves and play the game.

Finally, **no method in your implementation should exceed 50 lines. This hampers clarity of your code.**

### 3.1 Cards

Start by modeling a card in the game. You are free to name the class and its methods whatever you want, but it must implement the Card interface. You *cannot modify* the Card interface, but you may create a new interface that extends the Card interface to define new public methods your model can rely on. Then your Card implementation can implement the new interface. This is how we can extend the functionality of code without changing existing code!

Your card implementation should behave like a proper “good citizen of Java”, and implement its own `toString`, `equals` and `hashCode` methods. (See below for some hints.) The `toString` method should render the card as described above in the Cards section: e.g. Red 4 is printed as `"R4"`, etc.

**Note:** If you realize you do not need to implement an `equals` method, state in the Java documentation of your Card concrete class why it is not necessary. We want to know the reason for this design decision.

### 3.2 Expected operations

In order to play the game, the client would expect the following operations: start a new game, make a move, get the current state of the game, get the current score and know when the game has ended. These operations have been specified and documented in the provided `RedGameModel` interface. You are **not** allowed to change the interface in any way!

A short explanation of most of the interface follows (the explanation here supplements the documentation provided in the interface):

- The `RedGameModel` interface itself takes in a type parameter representing the type of your piece. Your implementation will state what concrete type that is.
- `getAllCards()` should return a `List` containing all the concrete `Card`s the game can be played with. This is exposed so others can create decks to play or test your game (see `startGame(List<C>, boolean, int, int)` for more information).
- `startGame(List<C> deck, boolean shuffle, int numPalettes, int handSize)` follows the description above, and lets the caller specify the cards to play with, the number of palettes, and the maximum hand size. It also specifies whether the model should shuffle the deck prior to setting up the game.
- `playToPalette` and `playToCanvas` implement the player moves described above. Whenever present, any indices in the parameters are assumed to be zero-based.
- `drawForHand` is what fills the player’s hand and allows the player to play cards to the canvas again.
- `numPalettes()` is useful for determining the setup of the game.
- `numOfCardsInDeck()`, `getCanvas()`, `getPalette(int)`, `winningPaletteIndex()`, and `getHand()` allow the client to peek into the state of the game.
- `isGameOver()` returns `true` if the game is over, and `false` otherwise.
- `isGameWon()` returns `true` if the player won the game and `false` otherwise.

### 3.3 Your Model Implementation

Implement the `RedGameModel` interface in a class called `SoloRedGameModel`:

1. When defining the class and implementing the interface, fill the type parameter in the `extends` clause with the name of your concrete card class. This will replace the type parameter in your class with your card type. Do *not* make your class fully generic. This will break the Handins tests.

2. Design a suitable representation of this game. Think carefully about what fields and types you will need, and how possible values of the fields correspond to game states. Remember that a data representation makes it easy to implement behaviors.

3. Instantiating the game: Your class should define at least two constructors:

    - One with zero arguments which initializes your game into a state that’s ready for someone to call one of the `startGame` methods and begin playing. Note the game has *not* started yet.
    - One with a single argument, a `Random` object that you use to perform the shuffling. If the object is null, this constructor must throw an `IllegalArgumentException`. This will be useful for testing randomness related properties.

    You may define whatever other constructors you wish on top of those; consider carefully all the methods you are expected to implement, and design your code to avoid as much duplication as possible. Keep in mind that a client should not be able to start a game without calling either `startGame` method!

4. Encapsulation: Your `SoloRedGameModel` class should not have *any* public fields, nor any public methods other than constructors and the public methods required by the `RedGameModel` interface.

Be sure to properly document your code with Javadoc as appropriate. Method implementations that inherit Javadoc need not provide their own **unless** they implement something different or in addition to what is specified in the inherited documentation.

### 3.4 Viewing the model

Our game should have some way of showing us the game board during game play. You have been provided with an empty `RedGameView` interface that represents a view — we will add meaningful methods to this interface later. In this assignment, you should implement a class called `SoloRedGameTextView` in the `cs3500.solored.view.hw02` package.

```java
public interface RedGameView {

}

public class SoloRedGameTextView implements RedGameView{
  private final RedGameModel<?> model;
  // ... any other fields you need

  public SoloRedGameTextView(RedGameModel<?> model) {
    this.model = model;
  }

  // your implementation goes here
}
```

1. Notice the wildcard generic. That is intentional since your view does not need to know the model is filled with Card objects.

2. Your class should at least have a constructor with exactly one argument of type `RedGameModel` — this model provides all the information the view needs in order to be rendered.

3. The `toString()` method of this class returns a `String` that may be used to display the state of the game. Here is an example rendering of a recently-started 4 palette, 6 hand size game; your `toString()` method should reproduce this:

    ```java
    Canvas: R
    P1: B2
    P2: R1 B5
    > P3: O1 V7
    P4: V4
    Hand: R2 B4 V6 I1 O3 R3 V3
    ```

    Every line should end with a newline character, **except** the final line — in this example, the first character of output is the `'C'` in Canvas on the first line and the final character is the last `'3'` on the last line.

    If the hand is ever empty, there will be no cards printed after the colon in "Hand:".

4. When writing toString, you may need to observe a card in the model. The wildcard type argument means you don’t know the dynamic type, but you do know it is still an *Object*. Can you still call *toString* on such an object? If you are unsure, look up the Object java documentation.

### 3.5 Testing

You will need to add tests to assess whether your model implementation implements the behavior specified by both the interfaces, this assignment description, and possibly interesting interactions that are not entirely specified by the interface (e.g., that `createListOfPieces` returns pieces in a particular order and no more than what is needed to make a board).

To do that, you should create *two test classes*. One of them should go in the `cs3500.solored` package of the test directory, and it should test properties of the *public* model interface. To test implementation-specific details (i.e. protected or package-private details), you should create one last test class that you would place in the `cs3500.solored.model.hw02` package itself, so that you can check protected and package-private implementation details if needed. Note if you do not have anything with protected or default access modifiers, then this test file is unnecessary.

**Note:** When writing tests with the public interface, you *cannot* assume you have access to your Card class. After all, those are implementation-specific. Instead, use the methods on the model’s interface. Is there a method you can use to get a set of cards that the game allows you to use? Can you then rearrange those cards and pass them into the `startGame` method to start the game?

Be mindful of which test cases you place in which test class! *Technically,* you could run all the tests from a single class. But using multiple classes like this helps convey to the reader of your code some of your thought processes behind each test: the reader should understand the examples first, then look at the tests of public behavior, and finally look at implementation-specific fiddly details.

**Note:** When you submit your full implementation, you will see automated tests that *I* wrote and run against *your* code. I gave some of my test methods long but specific names, so that you can try to deduce what my tests are checking for. Just because *I* have a test for a given scenario, though, does not mean that you shouldn’t write your own test case to confirm your understanding!

## 4. Package Management

To make sure that your packages are in the correct layout, you should tell IntelliJ to do the following. Do this early, before you’ve written much code, to ensure that your files wind up in the right locations automatically, instead of having to fix it afterward:

When you create a new project, you should see something like this:

![](https://blog.images.bornforthis.cn/docs-images/sha256/37/3709a621417031419d0d6cc70745c8487c9971df05b9ce63c19938d8d21e82b5.png)

Notice that the `src` directory is marked blue, which means IntelliJ believes that this directory contains the source files of your project. *If it isn’t marked blue,* you need to tell IntelliJ that it should be: right-click on the `src` folder and select *Mark Directory As -> Sources root*. To create a new package, right-click on the `src` directory, select *New -> Package*. In the dialog box that pops up, enter the new package name

- To create new files within a particular package, right-click on the package folder and select *New -> Java Class*. If you want to create a new file in the *default* package, then select the `src` directory itself.
- To create a test directory, right-click on the *project* itself, and select *New -> Directory*. In the dialog box that pops up, enter “test” as the name. Right-click on the directory, select *Mark Directory As -> Test Sources root*. Henceforth, you should add any test classes in this folder. See the tutorial video for a demo of this.
- The `src/` and `test/` directories can parallel each other in structure. However, keeping your sources and tests separated is always a good idea, so you don’t inadvertently release your tests as part of your source!

## 5. Suggestions on Tackling the Assignment

- Read through the assignment and consider what objects exist. Can you use separate classes to keep your design cohesive while giving each object a single purpose? This will help decrease the complexity of the implementation as there are a lot of parts working together.
- I suggest getting key observations working and then finishing the view. Being able to see the model makes debugging the operations much easier.
- Before implementing the rules for colors, make an example and break down how you would do this by hand. Create a list of steps and use that to guide your implementation.
- Do the same for finding a winning palette, but also start with the *simplest* version of the problem. Break down the steps you would go through to find the winning palette under to the canvas alone. Then consider what breaking ties looks like. A plan goes a long way when designing large code.

## 6. What to submit

- For your implementation: submit [a properly-structured zip](https://course.khoury.northeastern.edu/cs3500/hw_testing-fs_01_assignment.html#(part._good-zip-format)) containing

    - The model interface (`RedGameModel.java`)
    - Implementation of the model interface (`SoloRedGameModel.java`)
    - The view interface (`RedGameView.java`)
    - Implementation of the view (`SoloRedGameTextView.java`)
    - Any additional classes you saw fit to write
    - All your tests in one or more JUnit test classes

    Note the src folder cannot be empty this time as our tests need your source code.

**Again, please ensure all of your project’s** **sources** **are in the** **`cs3500.solored.model.hw02`** **and** **`cs3500.solored.view.hw02`** **packages, accordingly. Please ensure that your project’s** **test cases** **are in the packages explained above. The autograder will give you an automatic 0 if it cannot compile your code!**



- [https://course.khoury.northeastern.edu/cs3500/hw_redseven_01_assignment.html](https://course.khoury.northeastern.edu/cs3500/hw_redseven_01_assignment.html)

**下面代码 25.5分**

::: code-tabs

@tab Card.java

```java
package cs3500.solored.model.hw02;

/**
 * Behaviors for a Card in the Game of RedSeven.
 * Any additional behaviors for cards must be made
 * creating a new interface that extends this one.
 */
public interface Card {

  /**
   * Prints the color and number of the card.
   * The colors are printed R, O, B, I, or V.
   * The numbers are printed as 1-7.
   * As an example, a blue 5 is printed as B5.
   * @return a two character representation of the card
   */
  String toString();
}
```

@tab CardImpl.java

```java
package cs3500.solored.model.hw02;

/**
 * Card接口的实现，表示游戏中的卡牌。
 */
public class CardImpl implements Card {

    private final Color color;
    private final int number;

    /**
     * 构造函数，创建一张指定颜色和数字的卡牌。
     *
     * @param color  卡牌的颜色
     * @param number 卡牌的数字
     * @throws IllegalArgumentException 如果颜色为null，或数字不在1到7之间
     */
    public CardImpl(Color color, int number) {
        if (color == null) {
            throw new IllegalArgumentException("颜色不能为空");
        }
        if ((number < 1 || number > 7) && number != -1) {
            throw new IllegalArgumentException("数字必须在1到7之间，除非是特殊的画布卡牌");
        }
        this.color = color;
        this.number = number;
    }

    /**
     * 获取卡牌的颜色。
     *
     * @return 卡牌的颜色
     */
    public Color getColor() {
        return color;
    }

    /**
     * 获取卡牌的数字。
     *
     * @return 卡牌的数字
     */
    public int getNumber() {
        return number;
    }

    @Override
    public String toString() {
        if (number == -1) {
            // 特殊处理画布卡牌的显示，只显示颜色代码
            return color.getCode();
        }
        return color.getCode() + String.valueOf(number);
//        return color.getCode() + number;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CardImpl card = (CardImpl) o;

        if (number != card.number) return false;
        return color == card.color;
    }

    @Override
    public int hashCode() {
        int result = color != null ? color.hashCode() : 0;
        result = 31 * result + number;
        return result;
    }
}
```

@tab Color.java

```java
package cs3500.solored.model.hw02;

/**
 * 表示游戏中使用的颜色枚举。
 */
public enum Color {
    RED("R", 5),
    ORANGE("O", 4),
    BLUE("B", 3),
    INDIGO("I", 2),
    VIOLET("V", 1);

    private final String code;
    private final int rank;

    Color(String code, int rank) {
        this.code = code;
        this.rank = rank;
    }

    /**
     * 获取颜色的代码表示。
     * @return 颜色的代码表示
     */
    public String getCode() {
        return code;
    }

    /**
     * 获取颜色的等级，用于比较颜色的顺序。
     * @return 颜色的等级
     */
    public int getRank() {
        return rank;
    }
}
```

@tab RedGameModel.java

```java
package cs3500.solored.model.hw02;

import java.util.List;

/**
 * Behaviors for a solo game of RedSeven.
 * The game consists of four structures:
 * <ul>
 *   <li>A deck of cards to draw from</li>
 *   <li>A hand to play from</li>
 *   <li>Four palettes to play to</li>
 *   <li>A canvas that dictates the winning rule</li>
 * </ul>
 * The goal of the game is to use all the cards in the deck
 * while ensuring exactly one palette is winning each round.
 * @param <C> the type of cards used
 */
public interface RedGameModel<C extends Card> {

  //Operations

  /**
   * Play the given card from the hand to the losing palette chosen.
   * The card is removed from the hand and placed at the far right
   * end of the palette.
   *
   * @param paletteIdx a 0-index number representing which palette to play to
   * @param cardIdxInHand a 0-index number representing the card to play from the hand
   * @throws IllegalStateException if the game has not started or the game is over
   * @throws IllegalArgumentException if paletteIdx < 0 or more than the number of palettes
   * @throws IllegalArgumentException if cardIdxInHand < 0
   *     or greater/equal to the number of cards in hand
   * @throws IllegalStateException if the palette referred to by paletteIdx is winning
   */
  void playToPalette(int paletteIdx, int cardIdxInHand);

  /**
   * Play the given card from the hand to the canvas.
   * This changes the rules of the game for all palettes.
   * The method can only be called once per turn.
   *
   * @param cardIdxInHand a 0-index number representing the card to play from the hand
   * @throws IllegalStateException if the game has not started or the game is over
   * @throws IllegalArgumentException if cardIdxInHand < 0
   *     or greater/equal to the number of cards in hand
   * @throws IllegalStateException if this method was already called once in a given turn
   * @throws IllegalStateException if there is exactly one card in hand
   */
  void playToCanvas(int cardIdxInHand);

  /**
   * Draws cards from the deck until the hand is full
   * OR until the deck is empty, whichever occurs first. Newly drawn cards
   * are added to the end of the hand (far-right conventionally).
   * SIDE-EFFECT: Allows the player to play to the canvas again.
   *
   * @throws IllegalStateException if the game has not started or the game is over
   */
  void drawForHand();

  /**
   * Starts the game with the given options. The deck given is used
   * to set up the palettes and hand. Modifying the deck given to this method
   * will not modify the game state in any way.
   *
   * @param deck the cards used to set up and play the game
   * @param shuffle whether the deck should be shuffled prior to setting up the game
   * @param numPalettes number of palettes in the game
   * @param handSize the maximum number of cards allowed in the hand
   * @throws IllegalStateException if the game has started or the game is over
   * @throws IllegalArgumentException if numPalettes < 2 or handSize <= 0
   * @throws IllegalArgumentException if deck's size is not large enough to setup the game
   * @throws IllegalArgumentException if deck has non-unique cards or null cards
   */
  void startGame(List<C> deck, boolean shuffle, int numPalettes, int handSize);

  //Observations

  /**
   * Returns the number of cards remaining in the deck used in the game.
   * @return the number of cards in the deck
   * @throws IllegalStateException if the game has not started
   */
  int numOfCardsInDeck();

  /**
   * Returns the number of palettes in the running game.
   * @return the number of palettes in the game
   * @throws IllegalStateException if the game has not started
   */
  int numPalettes();

  /**
   * Returns the index of the winning palette in the game.
   * @return the 0-based index of the winning palette
   * @throws IllegalStateException if the game has not started
   */
  int winningPaletteIndex();

  /**
   * Returns if the game is over as specified by the implementation.
   * @return true if the game has ended and false otherwise
   * @throws IllegalStateException if the game has not started
   */
  boolean isGameOver();

  /**
   * Returns if the game is won by the player as specified by the implementation.
   * @return true if the game has been won or false if the game has not
   * @throws IllegalStateException if the game has not started or the game is not over
   */
  boolean isGameWon();

  /**
   * Returns a copy of the hand in the game. This means modifying the returned list
   * or the cards in the list has no effect on the game.
   * @return a new list containing the cards in the player's hand in the same order
   *     as in the current state of the game.
   * @throws IllegalStateException if the game has not started
   */
  List<C> getHand();

  /**
   * Returns a copy of the specified palette. This means modifying the returned list
   * or the cards in the list has no effect on the game.
   * @param paletteNum 0-based index of a particular palette
   * @return a new list containing the cards in specified palette in the same order
   *     as in the current state of the game.
   * @throws IllegalStateException if the game has not started
   * @throws IllegalArgumentException if paletteIdx < 0 or more than the number of palettes
   */
  List<C> getPalette(int paletteNum);

  /**
   * Return the top card of the canvas.
   * Modifying this card has no effect on the game.
   * @return the top card of the canvas
   * @throws IllegalStateException if the game has not started or the game is over
   */
  C getCanvas();

  /**
   * Get a NEW list of all cards that can be used to play the game.
   * Editing this list should have no effect on the game itself.
   * Repeated calls to this method should produce a list of cards in the same order.
   * Modifying the cards in this list should have no effect on any returned list
   * or the game itself.
   * @return a new list of all possible cards that can be used for the game
   */
  List<C> getAllCards();
}
```

@tab SoloRedGameModel.java

```java
package cs3500.solored.model.hw02;

import java.util.*;

/**
 * RedGameModel接口的实现，表示Solo Red游戏的模型。
 */
public class SoloRedGameModel implements RedGameModel<CardImpl> {

    private List<CardImpl> deck;
    private List<CardImpl> hand;
    private List<List<CardImpl>> palettes;
    private CardImpl canvas;
    private int handSize;
    private int numPalettes;
    private Random rand;
    private boolean gameStarted;
    private boolean gameOver;
    private boolean gameWon;
    private boolean canPlayToCanvas;

    /**
     * 无参数构造函数，初始化游戏，准备开始。
     */
    public SoloRedGameModel() {
        this.rand = new Random();
        this.gameStarted = false;
    }

    /**
     * 带有随机数生成器的构造函数，用于测试随机性相关的属性。
     *
     * @param rand 随机数生成器
     * @throws IllegalArgumentException 如果rand为null
     */
    public SoloRedGameModel(Random rand) {
        if (rand == null) {
            throw new IllegalArgumentException("Random对象不能为空");
        }
        this.rand = rand;
        this.gameStarted = false;
    }

    @Override
    public List<CardImpl> getAllCards() {
        List<CardImpl> allCards = new ArrayList<>();
        for (Color color : Color.values()) {
            for (int number = 1; number <= 7; number++) {
                allCards.add(new CardImpl(color, number));
            }
        }
        return allCards;
    }

    @Override
    public void startGame(List<CardImpl> deck, boolean shuffle, int numPalettes, int handSize) {
        if (gameStarted) {
            throw new IllegalStateException("游戏已经开始");
        }
        if (gameOver) {
            throw new IllegalStateException("游戏已经结束");
        }
        if (numPalettes < 2) {
            throw new IllegalArgumentException("调色板数量必须至少为2");
        }
        if (handSize <= 0) {
            throw new IllegalArgumentException("手牌数量必须为正数");
        }
        if (deck == null) {
            throw new IllegalArgumentException("牌堆不能为空");
        }

        // 检查牌堆中是否有重复或null卡牌
        Set<CardImpl> cardSet = new HashSet<>(deck);
        if (cardSet.size() != deck.size()) {
            throw new IllegalArgumentException("牌堆中包含重复的卡牌");
        }
        for (CardImpl card : deck) {
            if (card == null) {
                throw new IllegalArgumentException("牌堆中包含null卡牌");
            }
        }

        int requiredCards = numPalettes + handSize;
        if (deck.size() < requiredCards) {
            throw new IllegalArgumentException("牌堆中的卡牌数量不足以设置游戏");
        }

        this.deck = new ArrayList<>(deck);
        if (shuffle) {
            Collections.shuffle(this.deck, rand);
        }

        this.numPalettes = numPalettes;
        this.handSize = handSize;
        this.palettes = new ArrayList<>();

        // 初始化调色板
        for (int i = 0; i < numPalettes; i++) {
            List<CardImpl> palette = new ArrayList<>();
            palette.add(this.deck.remove(0));
            palettes.add(palette);
        }

        // 初始化画布为红色（特殊卡）
        this.canvas = new CardImpl(Color.RED, -1);

        // 初始化手牌
        this.hand = new ArrayList<>();
        while (hand.size() < handSize && !deck.isEmpty()) {
//            hand.add(deck.remove(0));
            hand.add(this.deck.remove(0));
        }

        this.gameStarted = true;
        this.gameOver = false;
        this.gameWon = false;
        this.canPlayToCanvas = true;
    }

    @Override
    public void playToPalette(int paletteIdx, int cardIdxInHand) {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }
        if (gameOver) {
            throw new IllegalStateException("游戏已经结束");
        }
        if (paletteIdx < 0 || paletteIdx >= numPalettes) {
            throw new IllegalArgumentException("无效的调色板索引");
        }
        if (cardIdxInHand < 0 || cardIdxInHand >= hand.size()) {
            throw new IllegalArgumentException("手牌中无效的卡牌索引");
        }

        int winningPaletteIdx = winningPaletteIndex();
        if (paletteIdx == winningPaletteIdx) {
            throw new IllegalStateException("该调色板已经是赢家");
        }

        // 从手牌中移除卡牌
        CardImpl cardToPlay = hand.remove(cardIdxInHand);
        // 将卡牌添加到调色板的最右端
        palettes.get(paletteIdx).add(cardToPlay);

        // 检查该调色板是否现在赢得了比赛
        winningPaletteIdx = winningPaletteIndex();
//        if (paletteIdx == winningPaletteIdx) {
        if (paletteIdx != winningPaletteIdx) {
            gameOver = true;
            gameWon = false;
            // 调色板现在是赢家
            // 补充手牌
//            drawForHand();
            // 重置canPlayToCanvas
//            canPlayToCanvas = true;
//
//            // 检查游戏是否已经赢了
//            if (hand.isEmpty() && deck.isEmpty()) {
//                gameOver = true;
//                gameWon = true;
//            }
        } // else {
//            // 调色板仍然未获胜，游戏结束，玩家失败
//            gameOver = true;
//            gameWon = false;
//        }
    }

    @Override
    public void playToCanvas(int cardIdxInHand) {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }
        if (gameOver) {
            throw new IllegalStateException("游戏已经结束");
        }
        if (!canPlayToCanvas) {
            throw new IllegalStateException("每回合只能一次更改画布");
        }
        if (hand.size() == 1) {
            throw new IllegalStateException("手牌只剩一张时不能更改画布");
        }
        if (cardIdxInHand < 0 || cardIdxInHand >= hand.size()) {
            throw new IllegalArgumentException("手牌中无效的卡牌索引");
        }

        // 从手牌中移除卡牌
        CardImpl cardToPlay = hand.remove(cardIdxInHand);
        // 将卡牌放置在画布上
        canvas = cardToPlay;
        // 设置canPlayToCanvas为false
        canPlayToCanvas = false;
    }

    @Override
    public void drawForHand() {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }
        if (gameOver) {
            throw new IllegalStateException("游戏已经结束");
        }
        // 从牌堆中抽牌直到手牌满或牌堆为空
        while (hand.size() < handSize && !deck.isEmpty()) {
            hand.add(deck.remove(0));
        }
        // 重置canPlayToCanvas
        canPlayToCanvas = true;
    }

    @Override
    public int numOfCardsInDeck() {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }
        return deck.size();
    }

    @Override
    public int numPalettes() {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }
        return numPalettes;
    }

    @Override
    public int winningPaletteIndex() {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }

        List<Integer> winningPalettes = new ArrayList<>();

        // 根据当前规则，找到所有可能的赢家调色板索引
        for (int i = 0; i < palettes.size(); i++) {
            if (isWinningPalette(i)) {
                winningPalettes.add(i);
            }
        }

        // 如果只有一个赢家，返回其索引
        if (winningPalettes.size() == 1) {
            return winningPalettes.get(0);
        } else if (winningPalettes.size() > 1) {
            // 如果有平局，根据红色规则打破平局
            return breakTie(winningPalettes);
        } else {
            // 如果没有赢家，返回-1
            return -1;
        }
    }

    private boolean isWinningPalette(int paletteIdx) {
        List<CardImpl> palette = palettes.get(paletteIdx);
        String ruleColorCode = canvas.getColor().getCode();

        // 根据规则颜色，判断调色板是否获胜
        switch (ruleColorCode) {
            case "R":
                return isHighestCard(paletteIdx);
            case "O":
                return isMostOfOneNumber(paletteIdx);
            case "B":
                return isMostColors(paletteIdx);
            case "I":
                return isLongestRun(paletteIdx);
            case "V":
                return isMostBelowFour(paletteIdx);
            default:
                return false;
        }
    }

    // 判断是否为最高卡牌
    private boolean isHighestCard(int paletteIdx) {
        CardImpl highestCard = getHighestCard(palettes.get(paletteIdx));
        for (int i = 0; i < palettes.size(); i++) {
            if (i != paletteIdx) {
                CardImpl otherHighest = getHighestCard(palettes.get(i));
                if (compareCards(otherHighest, highestCard) > 0) {
                    return false;
                } else if (compareCards(otherHighest, highestCard) == 0) {
                    // 平局，继续
                    continue;
                }
            }
        }
        return true;
    }

    // 判断是否拥有最多相同数字的卡牌
    private boolean isMostOfOneNumber(int paletteIdx) {
        Map<Integer, Integer> countMap = getNumberCountMap(palettes.get(paletteIdx));
        int maxCount = Collections.max(countMap.values());

        for (int i = 0; i < palettes.size(); i++) {
            if (i != paletteIdx) {
                Map<Integer, Integer> otherCountMap = getNumberCountMap(palettes.get(i));
                int otherMaxCount = Collections.max(otherCountMap.values());
                if (otherMaxCount > maxCount) {
                    return false;
                } else if (otherMaxCount == maxCount) {
                    // 平局，继续
                    continue;
                }
            }
        }
        return true;
    }

    // 判断是否拥有最多不同颜色的卡牌
    private boolean isMostColors(int paletteIdx) {
        Set<Color> colors = getColorsSet(palettes.get(paletteIdx));
        int colorCount = colors.size();

        for (int i = 0; i < palettes.size(); i++) {
            if (i != paletteIdx) {
                Set<Color> otherColors = getColorsSet(palettes.get(i));
                int otherColorCount = otherColors.size();
                if (otherColorCount > colorCount) {
                    return false;
                } else if (otherColorCount == colorCount) {
                    // 平局，继续
                    continue;
                }
            }
        }
        return true;
    }

    // 判断是否拥有最长的连续序列
    private boolean isLongestRun(int paletteIdx) {
        int maxRunLength = getLongestRunLength(palettes.get(paletteIdx));

        for (int i = 0; i < palettes.size(); i++) {
            if (i != paletteIdx) {
                int otherMaxRunLength = getLongestRunLength(palettes.get(i));
                if (otherMaxRunLength > maxRunLength) {
                    return false;
                } else if (otherMaxRunLength == maxRunLength) {
                    // 平局，继续
                    continue;
                }
            }
        }
        return true;
    }

    // 判断是否拥有最多小于4的卡牌
    private boolean isMostBelowFour(int paletteIdx) {
        int count = getBelowFourCount(palettes.get(paletteIdx));

        for (int i = 0; i < palettes.size(); i++) {
            if (i != paletteIdx) {
                int otherCount = getBelowFourCount(palettes.get(i));
                if (otherCount > count) {
                    return false;
                } else if (otherCount == count) {
                    // 平局，继续
                    continue;
                }
            }
        }
        return true;
    }

    // 获取调色板中最高的卡牌
    private CardImpl getHighestCard(List<CardImpl> palette) {
        return palette.stream().max(this::compareCards).orElse(null);
    }

    // 比较两张卡牌，返回负数表示c1<c2，零表示相等，正数表示c1>c2
    private int compareCards(CardImpl c1, CardImpl c2) {
        if (c1.getNumber() != c2.getNumber()) {
            return c1.getNumber() - c2.getNumber();
        } else {
            return c1.getColor().getRank() - c2.getColor().getRank();
        }
    }

    // 获取数字出现次数的映射
    private Map<Integer, Integer> getNumberCountMap(List<CardImpl> palette) {
        Map<Integer, Integer> countMap = new HashMap<>();
        for (CardImpl card : palette) {
            countMap.put(card.getNumber(), countMap.getOrDefault(card.getNumber(), 0) + 1);
        }
        return countMap;
    }

    // 获取颜色集合
    private Set<Color> getColorsSet(List<CardImpl> palette) {
        Set<Color> colors = new HashSet<>();
        for (CardImpl card : palette) {
            colors.add(card.getColor());
        }
        return colors;
    }

    // 获取最长连续序列的长度
    private int getLongestRunLength(List<CardImpl> palette) {
        if (palette.isEmpty()) {
            return 0;
        }
        Set<Integer> numberSet = new HashSet<>();
        for (CardImpl card : palette) {
            numberSet.add(card.getNumber());
        }
        List<Integer> numbers = new ArrayList<>(numberSet);
        Collections.sort(numbers);
        int maxRun = 1;
        int currentRun = 1;
        for (int i = 1; i < numbers.size(); i++) {
            if (numbers.get(i) == numbers.get(i - 1) + 1) {
                currentRun++;
                maxRun = Math.max(maxRun, currentRun);
            } else {
                currentRun = 1;
            }
        }
        return maxRun;
    }

    // 获取小于4的卡牌数量
    private int getBelowFourCount(List<CardImpl> palette) {
        int count = 0;
        for (CardImpl card : palette) {
            if (card.getNumber() < 4) {
                count++;
            }
        }
        return count;
    }

    // 打破平局，返回赢家调色板的索引
    private int breakTie(List<Integer> tiedPalettes) {
        List<CardImpl> winningCards = new ArrayList<>();
        for (int idx : tiedPalettes) {
            List<CardImpl> palette = palettes.get(idx);
            List<CardImpl> winningCardsInPalette = getWinningCardsInPalette(palette);
            CardImpl highestCard = winningCardsInPalette.stream().max(this::compareCards).orElse(null);
            winningCards.add(highestCard);
        }

        CardImpl highestCardOverall = winningCards.stream().max(this::compareCards).orElse(null);
        int winningIdx = -1;
        for (int i = 0; i < winningCards.size(); i++) {
            if (compareCards(winningCards.get(i), highestCardOverall) == 0) {
                winningIdx = tiedPalettes.get(i);
                break;
            }
        }
        return winningIdx;
    }

    // 获取调色板中用于获胜的卡牌（根据当前规则）
    private List<CardImpl> getWinningCardsInPalette(List<CardImpl> palette) {
        String ruleColorCode = canvas.getColor().getCode();
        List<CardImpl> winningCards = new ArrayList<>();

        switch (ruleColorCode) {
            case "R":
                CardImpl highestCard = getHighestCard(palette);
                winningCards.add(highestCard);
                break;
            case "O":
                Map<Integer, Integer> countMap = getNumberCountMap(palette);
                int maxCount = Collections.max(countMap.values());
                for (CardImpl card : palette) {
                    if (countMap.get(card.getNumber()) == maxCount) {
                        winningCards.add(card);
                    }
                }
                break;
            case "B":
                // 所有不同颜色的卡牌
                Set<Color> colors = getColorsSet(palette);
                for (Color color : colors) {
                    for (CardImpl card : palette) {
                        if (card.getColor() == color) {
                            winningCards.add(card);
                            break;
                        }
                    }
                }
                break;
//                Set<Color> colorsB = getColorsSet(palette);
//                for (Color color : colorsB) {
//                    CardImpl highestCardOfColor = null;
//                    for (CardImpl card : palette) {
//                        if (card.getColor() == color) {
//                            if (highestCardOfColor == null || compareCards(card, highestCardOfColor) > 0) {
//                                highestCardOfColor = card;
//                            }
//                        }
//                    }
//                    if (highestCardOfColor != null) {
//                        winningCards.add(highestCardOfColor);
//                    }
//                }
//                break;
            case "I":
                // 最长连续序列中的卡牌
                Set<Integer> numberSet = new HashSet<>();
                for (CardImpl card : palette) {
                    numberSet.add(card.getNumber());
                }
                List<Integer> numbers = new ArrayList<>(numberSet);
                Collections.sort(numbers);
                int maxRun = getLongestRunLength(palette);
                for (int i = 0; i <= numbers.size() - maxRun; i++) {
                    boolean isRun = true;
                    for (int j = 1; j < maxRun; j++) {
                        if (numbers.get(i + j) != numbers.get(i + j - 1) + 1) {
                            isRun = false;
                            break;
                        }
                    }
                    if (isRun) {
                        for (int k = i; k < i + maxRun; k++) {
                            int num = numbers.get(k);
                            for (CardImpl card : palette) {
                                if (card.getNumber() == num) {
                                    winningCards.add(card);
                                    break;
                                }
                            }
                        }
                        break;
                    }
                }
                break;
            case "V":
                // 小于4的卡牌
                for (CardImpl card : palette) {
                    if (card.getNumber() < 4) {
                        winningCards.add(card);
                    }
                }
                break;
            default:
                break;
        }

        return winningCards;
    }

    @Override
    public boolean isGameOver() {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }
        return gameOver;
    }

    @Override
    public boolean isGameWon() {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }
        if (!gameOver) {
            throw new IllegalStateException("游戏尚未结束");
        }
        return gameWon;
    }

    @Override
    public List<CardImpl> getHand() {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }
        return new ArrayList<>(hand);
    }

    @Override
    public List<CardImpl> getPalette(int paletteNum) {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }
        if (paletteNum < 0 || paletteNum >= numPalettes) {
            throw new IllegalArgumentException("无效的调色板索引");
        }
        return new ArrayList<>(palettes.get(paletteNum));
    }

    @Override
    public CardImpl getCanvas() {
        if (!gameStarted) {
            throw new IllegalStateException("游戏尚未开始");
        }
        if (gameOver) {
            throw new IllegalStateException("游戏已经结束");
        }
        return canvas;
    }
}
```

@tab RedGameView.java

```java
package cs3500.solored.view.hw02;

/**
 * Behaviors needed for a view of the RedSeven implementation
 * that transmits information to the user.
 */
public interface RedGameView {

  /**
   * Creates a String with state of the game.
   * This rendering includes
   * <ul>
   *   <li>The color of the card on the Canvas</li>
   *   <li>Each palette from P1 to Pn, where n is the number of palettes, where each palette
   *   has all of its card printed with one space between them</li>
   *   <li>A greater than symbol indicating the winning palette</li>
   *   <li>The hand, where all cards are printed with one space between them</li>
   * </ul>
   * An example below for a 4-palette, 7-hand game in-progress
   * Canvas: R
   * P1: R6 B1
   * > P2: R7
   * P3: V1
   * P4: I2
   * Hand: V2 I3 R1 O2 G6 R5 O1
   * @return
   */
  String toString();
}
```

@tab SoloRedGameTextView.java

```java
package cs3500.solored.view.hw02;

import cs3500.solored.model.hw02.RedGameModel;

import java.util.List;

/**
 * RedGameView接口的实现，用于以文本形式显示游戏状态。
 */
public class SoloRedGameTextView implements RedGameView {
    private final RedGameModel<?> model;

    public SoloRedGameTextView(RedGameModel<?> model) {
        this.model = model;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        try {
            sb.append("Canvas: ").append(model.getCanvas().toString()).append("\n");
            int winningPaletteIdx = model.winningPaletteIndex();
            for (int i = 0; i < model.numPalettes(); i++) {
                if (i == winningPaletteIdx) {
                    sb.append("> ");
                } // else {
//                    sb.append("  ");
//                }
                sb.append("P").append(i + 1).append(": ");
                List<?> palette = model.getPalette(i);
                for (int j = 0; j < palette.size(); j++) {
                    sb.append(palette.get(j).toString());
                    if (j < palette.size() - 1) {
                        sb.append(" ");
                    }
                }
                sb.append("\n");
            }
            sb.append("Hand: ");
            List<?> hand = model.getHand();
            for (int i = 0; i < hand.size(); i++) {
                sb.append(hand.get(i).toString());
                if (i < hand.size() - 1) {
                    sb.append(" ");
                }
            }
        } catch (IllegalStateException e) {
            return "游戏尚未开始。";
        }
        return sb.toString();
    }
}
```

@tab Main.java

```java
package cs3500.solored;

import cs3500.solored.model.hw02.*;
import cs3500.solored.view.hw02.SoloRedGameTextView;

import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // 创建游戏模型
        SoloRedGameModel model = new SoloRedGameModel();
        // 获取所有卡牌
        List<CardImpl> allCards = model.getAllCards();
        // 开始游戏
//        model.startGame(allCards, true, 4, 7);
//        model.startGame(allCards, false, 4, 7);
        model.startGame(allCards, false, 4, 1);
        // 创建视图
        SoloRedGameTextView view = new SoloRedGameTextView(model);
        // 显示游戏状态
        System.out.println(view.toString());

        // 模拟游戏进行
        Scanner scanner = new Scanner(System.in);
        while (!model.isGameOver()) {
            System.out.println("\n请选择操作：");
            System.out.println("1. 将手牌打到调色板");
            System.out.println("2. 将手牌打到画布并将手牌打到调色板");
            System.out.print("请输入选项（1或2）：");
            int choice = scanner.nextInt();

            if (choice == 1) {
                System.out.print("请输入要打出的手牌索引（从0开始）：");
                int handIdx = scanner.nextInt();
                System.out.print("请输入要打到的调色板索引（从0开始）：");
                int paletteIdx = scanner.nextInt();
                try {
                    model.playToPalette(paletteIdx, handIdx);
                    System.out.println("操作成功！");
                } catch (Exception e) {
                    System.out.println("操作失败：" + e.getMessage());
                }
            } else if (choice == 2) {
                System.out.print("请输入要打到画布的手牌索引（从0开始）：");
                int canvasHandIdx = scanner.nextInt();
                System.out.print("请输入要打出的手牌索引（从0开始）：");
                int handIdx = scanner.nextInt();
                System.out.print("请输入要打到的调色板索引（从0开始）：");
                int paletteIdx = scanner.nextInt();
                try {
                    model.playToCanvas(canvasHandIdx);
                    model.playToPalette(paletteIdx, handIdx);
                    System.out.println("操作成功！");
                } catch (Exception e) {
                    System.out.println("操作失败：" + e.getMessage());
                }
            } else {
                System.out.println("无效的选项，请重试。");
                continue;
            }

            // 更新视图并显示
            System.out.println(view.toString());
        }

        if (model.isGameWon()) {
            System.out.println("\n恭喜！你赢得了游戏！");
        } else {
            System.out.println("\n游戏结束，你输了。");
        }
    }
}

```



:::







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

