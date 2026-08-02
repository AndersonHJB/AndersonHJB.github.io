---
title: Assignment 6： Pawns on the World Stage – Pawns Board, part 2
icon: blog
date: 2025-03-24 13:03:54
author: Bornforthis
isOriginal: true
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

## 1. Purpose

In this portion of the project, you will be building a visual view of your game, and also start building the computer strategies for playing the game. This assignment has several parts. Look over the outline on the left, and skim through the whole assignment, before diving deeply into any one section. The assignment lists requirements in the recommended order you should do them, but future tasks might give you ideas for how to improve earlier ones.

## 2. Preparation: fixing up your models

### 2.1 Making your models read-only

As we discussed in class, views should not have the ability to mutate the models they are viewing: this would bypass the controller, making it impossible to reliably control the model.

Refactor your model interface, if necessary, into two interfaces: your `PawnsBoardModel` interface (or whatever you named it) should now extend a `ReadonlyPawnsBoardModel` interface (again, choose a name that matches your existing model). The read-only interface should contain all the observation methods of your model, while the mutable sub-interface should contain all the mutator methods.

### 2.2 Adding missing functionality

The following is a non-exhaustive checklist of functionality that is necessary for Pawns Board to work properly. Your model interface(s) may not yet expose all of these as methods, or might not make it easy to use.

- Model setup:
    - The ability to create a game using the configuration files for the decks
    - The ability to create a copy of the board (and any mutable contents therein)
- Observations:
    - How big is the grid?
    - What are the contents of a cell at a given coordinate?
    - What are the contents of a player’s hand?
    - Which player owns the card or pawns in a cell at a given coordinate?
    - Is it legal for the current player to play a given card (via an actual card or an index) at a given coordinate?
    - Given a row index, what is a player’s row-score in the game for that row?
    - What is a player’s current score in the game?
    - Is the game over?
    - Which player won, if any?
- Operations:
    - The current player plays a card from their hand to a given coordinate on the board
    - The current player passes their turn

Reexamine the design and implementation of your model from the previous assignment, and improve it to include the functionality above. Document whatever changes you made in a *new section of your README*, entitled “Changes for part 2” — explain what functionality was missing, and why, and how you chose to add it.

## 3. Visualizing the game

To implement your view, you will need to use Java Swing. (You are *not* permitted to use the `javalib` library we used in Fundies 2, as it conflates the notions of model, view and controller into a single `World` class. You are also not permitted to use JavaFX, as that has been deprecated and is overly complicated as well.) The code provided with the [MVC code](https://course.ccs.neu.edu/cs3500/lec/gui_basics/code.zip) and the [Turtles activity](https://course.ccs.neu.edu/cs3500/lec/12-turtles-activity/code.zip) from class give you a basic beginning using Swing, as well as the exercises in [Lab 7](https://course.ccs.neu.edu/cs3500/labs_gui_tutorial_lab.html).

You have also been provided with an extensive list of different Swing layouts, components, and their uses in the code linked at the start of the assignment. If you need a more visual way of seeing Swing things done, here is a video covering a lot of basic [Java Swing components and listeners](https://youtu.be/Kmgo00avvEw?si=7sJTwb8MuAoDciRl). Note that if you try to write your code in the way shown in the video or in the way shown in the given code above, you will not do well on the assignment. The video does not follow our design rules nor style rules nor separates code properly into the three components. The code given has no helpers at all nor follows any of our design considerations.

- You will likely need to look up documentation on [`Graphics`](https://docs.oracle.com/javase/tutorial/2d/) class, and you may need to explicitly cast `Graphics` objects to `Graphics2D` objects. Also look at the “transform” methods available in the `Graphics2D` class to use the rendering canvas appropriately.
- Here are links to documentation on [`Panel`s](https://docs.oracle.com/javase/tutorial/uiswing/components/panel.html) and [`Frame`s](https://docs.oracle.com/javase/tutorial/uiswing/components/frame.html).
- Swing defines three template methods by which you can customize the size of panels or frames: `getMinimumSize`, `getPreferredSize` and `getMaximumSize`. Of these, the most common to override is `getPreferredSize`.

You will likely need to design at least one, and possibly three, interfaces for your view: one should describe what the *frame* ought to be capable of, and one for each panel might be needed to describe what the *panel* ought to be capable of. (These may be empty interfaces for now, if you do not see a need for any methods in them yet...but keep reading below for additional ideas.) Note that your textual rendering from the previous assignment does not have to implement this new GUI view interface, and you do not have to force it to do so.

### 3.1 Required appearance

Your view should give as much information as the screenshots below, but the physical appearance is up to you. Consider the following screenshot which shows the start of the game. Notice we can see the board and the pawns on each, row-scores, and the hand of the Red player.

![](https://blog.images.bornforthis.cn/docs-images/sha256/dd/dd8fac73088d8a91d9965382d7ef612f0d086cce144a4df4e10afc58c0bd7d6b.png)

Here is a view of the game mid-game, also on Red’s turn:

![](https://blog.images.bornforthis.cn/docs-images/sha256/a4/a49b61db3297db60d606c77cc25054bb1879401327870f267769964fcc01fc3b.png)

Here is a view of the same game mid-game, but on Blue’s turn. Notice that Blue’s cards have their influence grid already mirrored.

![](https://blog.images.bornforthis.cn/docs-images/sha256/5d/5d19cb67d417f3c9173cdc6c273ac819c7cf8f0ee32c616bbf6ca397845afac1.png)

And reminder that the game can be more than 3 rows with 5 columns. Here is an example with 7 rows and 11 columns with a starting hand size of 10 cards, totaling 77 cells PLUS the 11 cards that must be displayed at once (remember the red player draws one card at the start of their turn).

![](https://blog.images.bornforthis.cn/docs-images/sha256/ca/ca60bb7ecafeb7b7986f66e54f2008e92642f712fa0cae60b528db6b6879d8ce.png)

You may decorate the image if you wish, or adjust the color palette, or even change the font, or change how the cards themselves are displayed, but it should still contain the same information as the above. That means a user can easily identify the following:

- which player is playing
- what cards are in their hand along with influence grids of those cards
- where the board is
- what cells belong to the red player, which to the blue player, and which to neither
- how many pawns are on a cell without a card
- the value scores of any card already on the board
- the row-scores for each player

Here is an example of an alternative view that shows the same information without the same level of polish as the above.

![](https://blog.images.bornforthis.cn/docs-images/sha256/42/4258a1e0df7231424b3e63dc13617c5cd228856ccb99a39af4de9e100ed3f14b.png)

You will notice the following

- There is no gap between the hand and the board.
- The pawns are just numbers on the board telling us how many pawns are there. Ownership of the pawns is shown by the color of the text itself.
- The cards on the board look the same as the cards in the hand, just a little squished.
- The influence grids look exactly like the influence grids from the configuration file.
- The cards owned by blue still have their influence mirrored, but in text instead.
- Row-scores are not displayed on their own as the player can calculate that information themselves from the cards owned by each player.

The point is your view doesn’t need to be *exactly* the same as the fancier one and do as much drawing. You can get away with drawing much, much less and then add the polishing features as you please.

Looking through the documentation of the `Graphics2D` class, you’ll find several useful methods for drawing text, lines, ovals, images, and shapes; and for transforming the coordinate system (scaling, translating and rotating) to affect where drawings are placed. We recommend building a subclass of `Path2D.Double` that represents “a card” of whatever size makes sense in your view. You can then draw multiple such cards wherever needed to make up your rendering: this will be much easier than attempting to draw all the individual edges of the cards separately.

The size of drawn strings is controlled by the size of the font used in the `Graphics2D` object. I suggest reading up on the `Font` class to find methods to help change the font size to whatever works best as you resize the window. Furthermore, you *cannot* print newlines with `drawString`. Instead, take a look at this [Stack Overflow question](https://stackoverflow.com/questions/4413132/problems-with-newline-in-graphics2d-drawstring) on how to visualize a newline.

### 3.2 Required behavior

Your view should have a constructor that takes in a `ReadonlyPawnsBoardModel` — *not* the mutable interface! — to ensure that your view is incapable of modifying the model even accidentally.

In preparation for the next assignment (where you will build a controller that delegates to the model and view), you should equip your view with the ability to handle mouse clicks and key presses. This means you will need a *stub controller* to stand in for the real thing and respond to the events. In particular,

- a user should be able to click on a card in the hand, and it should highlight that card somehow. In the image below, the highlight is indicated by changing the card to cyan. You may choose another way of highlighting if you wish so long as it is obvious it is selected.

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/9e/9ea75ca0ef26d97bb9b74c0bdb73784c474827b6c4367d2e314c3be1ab864336.png)

    - Additionally, your stub controller should print a message (using `System.out`) containing the index of the card that was clicked on as well as which player owns that hand.

- a user should be able to click on a cell in the grid, and it should highlight that cell somehow. In the image below, the highlight is indicated by changing the cell background to cyan. You may choose another way of highlighting if you wish so long as it is obvious it is selected.

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/40/409ef5ecd54def2f0c01db2d185de2a7ce9587fd81569416b11beb5c69064e48.png)

    - Additionally, the stub controller should print a message (using `System.out`) containing the coordinates of the cell that was clicked on, in whatever coordinate system you used in your model. **Note:** this is not the same thing as the physical *mouse* coordinates of the mouse event!

- a user should be able to indicate they want to confirm their move or pass by handling keyboard input. You may choose what keyboard interactions correspond to confirming or passing, but be sure to document them in you README.

    Additionally, the stub controller should print a message (using `System.out`) printing whether the key press indicated a confirmation or a pass.

Your view should let the user deselect a selected card in hand or cell on the board by

- clicking on it again OR
- clicking on another card (in which case you should select that new card)

Clicking outside the boundary of the grid or the hand *must not* cause your view to crash, throw an exception, or otherwise break.

You may want to revisit the discussion of the observer pattern from [Lecture 14: The Observer Pattern](https://course.ccs.neu.edu/cs3500/lec_observer_pattern_notes.html), and this may influence your view interface designs. This will also help you plan out your true controller ahead of the next assignment.

Finally, we should be able to resize your window larger and smaller and all of the above functionality should still work correctly. Note you are not responsible for the visual artifacting (read: anything that *looks* weird) that can occur at extremely small or large sizes.

### 3.3 Running your view

Add the following placeholder class to your project:

```java
package cs3500.pawnsboard;

public final class PawnsBoardGame {
  public static void main(String[] args) {
    YourModel model = ...create an example model...
    YourView view = new YourView(model);
    ...whatever other setup you need...
    view.setVisible(true); //or the equivalent in your system
  }
}
```

As we’ve done several times, our `main()` method simply instantiates a model, instantiates a view using that model, instantiates anything else needed, and tells the view to get started. In later assignments we will augment this to create controllers, players, and make the game playable.

### 3.4 Testing your view

Testing views can be quite tricky, since you cannot simply use JUnit assertions to check them for “equality”. For this assignment, you do not need to unit-test your visual view, but you should include in your submission at least four screenshots of your view, each screenshot being of a 5 row and 7 column game:

- At the start of the game
- With a card and cell selected from the Red Player’s hand on their turn during the start of the game
- With a card selected from the Blue Player’s hand on their turn during their first turn of the game
- At a non-trivial intermediate point of the game, meaning cards have been played by both players

Name the screenshots appropriately, so you and graders can easily tell what they represent. Also, make sure the screenshots are reasonably sized (e.g 600 px height is the height used for the screenshots on this page). There is no reason to have a 4K png of your view.

## 4. Strategic computer players

Playing Pawns Board for any amount of time quickly leads to noticing two aspects of the strategies required for key play: which card to choose and then where to place the card.

1. Fill first: Choose the first card and location that can be played on and play there.
2. Maximize row-score: Choose a card and location that will allow the current player to win a particular row by making their row-score higher than the opponent’s row-score. Rows are visited from top-down. If the current player has a lower or equal row-score than their opponent on that row, this strategy chooses the first card and location option that increases their row-score to be greater than ~~or equal to~~ the opponent’s row-score. If there is no play that would make the current player's row-score greater than the opponent's, move on to the next row. If after visitng all rows, there is still no move to make, report there is no move to make (meaning the player should pass).
3. Control the board: choose a card and location that will give the current player ownership of the most cells. In a tie between positions, choose the uppermost-leftmost (so uppermost first, then leftmost). In a tie between cards, choose the leftmost (or closest to first) card.
4. A fancier approach might choose the move that leaves their opponent in a situation with no good moves. (This approach *minimizes* the *maximum* move the opponent can make, and is known as a *minimax strategy*.) To calculate the "best" move an opponent can make, you must make some guess as to what strategy that opponent is using...and it might be any of these strategies we’ve seen so far.

(There are far more sophisticated strategies than these, but these will do for now!)

### 4.1 Required behavior

Implement the first *two* of these strategies. Note that those two strategies cannot have tied choices. If there are no valid moves, your player should pass.

*Hint:* Keep in mind that a strategy needs to know which player it’s trying to pick a move for!

You must test these strategies, and in particular demonstrate that it resolves ties correctly.

*Hint:* You may have an easier time implementing your strategies if you generalize their signature somewhat: Unlike the Tic Tac Toe strategies, where moves didn’t have a numerical value, moves here do have a potential score. The possibility of ties in *some* strategies implies that your strategy’s signature should return more than just a single move possibility...

### 4.2 Extra credit

As we discussed with [Tic Tac Toe](https://course.ccs.neu.edu/cs3500/lec_strategies_decorators_notes.html), you can *chain* these strategies to form strategies of varying sophistication. A simplistic strategy would just use option 1; a smarter strategy might stack on options 2 and 3, as well to further break ties in option 1. Some of these strategies may result in multiple, equally-good options: in case of such ties, again choose the move with the uppermost-leftmost location first and then the leftmost card in the hand.

Some of these strategies may result in no valid moves: you must figure out how to represent such situations and what they should (eventually) do in the model.

**Your task to get extra credit:**

- Implement the other two strategies mentioned in the prior subsection.
- Fix your strategy implementations such that they can be recombined in various ways (and not just hard-coded in a fixed combination like our `HybridMergeSorter` from class.)
- Write tests that show your new strategies work solo and you can recombine strategies to make more complex ones.

In your README, explain what the extra credit strategies you implemented were and where we can find their implementations and tests. **If your README does not state this, you will get no extra credit.**

#### 4.3` `Testing your strategies

The elegant feature of strategies is that they are simply function objects, and so they are eminently testable. Build a collection of example games in known configurations, ask each strategy where it would choose to move for a given player, and check that the result is as expected.

If you’ve implemented multiple strategies, test them thoroughly: in particular, make sure you test scenarios that demonstrate the differences between them.

#### 4.3.1 Mocking your model

One of the challenges of testing your strategies is that they depend on your model working correctly: the model needs to implement the complicated game logic of legality checking and scoring, and if those are buggy, your strategies may give unexpected results. But obviously, you can’t execute a strategy without *some* model object to examine!

In class we discussed *mocks*, that are stub implementations of interfaces that can give simulated answers and that can record a transcript of what methods were used. Here are two ideas for mocking your model; you should use these (and probably several more) to test your strategies:

- How can you tell if Strategy 2 actually looked at the rows from top to bottom? Or if Strategy 1 actually stopped at the first possible location when looking for potential moves? Mock your model to record a transcript of which coordinates were inspected by your strategy, and then test whether that transcript contains all the necessary coordinates.
- How can you tell if Strategy 2 chose a valid location to get a higher row-score than the opponent? Mock your model to lie about the legality of certain locations or the value of such moves, to force your strategy to think that only only a pre-determined move is valid, and then test that it indeed returns that move.

## 5. What to do

1. Refactor your model to split it into read-only and mutable interfaces.
2. Design your view interfaces, and then begin implementing your views.
3. Design your strategy interface(s) and implementation(s). Test them, using mocks of your models as necessary.
4. Update your README file to include explanations of all the new classes you’ve designed. Be sure to include a “Changes for part 2” section documenting what you changed from your initial design.







































::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)