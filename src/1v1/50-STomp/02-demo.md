---
title: 英文版
date: 2023-08-23 18:06:51
icon: python
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - Monash University
    - Monash University Python
    - Monash University Python作业代写
tag:
    - Python 一对一教学
    - Monash University
    - Monash University Python
    - Monash University Python作业代写
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

## 2. Context Information

For this assignment, you will be required to create a Python program that simulates the board game [Gomoku](https://www.wikihow.com/Play-Gomoku). *Gomoku*, also referred to as *Five in a Row*, is a popular board game originating from East Asia. Two players strategically play on a square grid. The objective for both players is to be the first one to create a continuous line of five stones either horizontally, vertically or diagonally. The players alternate turns to place stones on vacant intersections of the grid, where they need to create their line of five stones while stopping the opponent from achieving the same.

### 2.1. The Game Board

This game involves a rectangle board with different board settings. An example 9 * 9 board is shown below :

```text
A  B  C  D  E  F  G  H  I
 -- -- -- -- -- -- -- --   0
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   1
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   2
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   3
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   4
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   5
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   6
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   7
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   8
```

We will use the same coordinate system as indicated in the above example:

1. Rows increase from the top to the bottom and numerical indices are used (e.g., for a 9 * 9 board, the top row is row 0 and the bottom row is row 8);

2. Columns increase from left to right and uppercase letters are used as indices(e.g., for a 9 * 9 board, the leftmost column is column A and the rightmost column is column I).


Please note that, stones are placed at the intersections (e.g., 0A, 0B, 1A, 1B).

### 2.2. Taking Turns

Players take turns dropping a coloured stone (i.e., black/white) onto one of the intersections as shown below:

```text
A  B  C  D  E  F  G  H  I
 -- -- -- -- -- -- -- --   0
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   1
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   2
|  |  |  |  |  |  |  |  |
 -- -- -- --●--○-- -- --   3
|  |  |  |  |  |  |  |  |
 -- -- -- --●-- -- -- --   4
|  |  |  |  |  |  |  |  |
 -- -- -- --○-- -- -- --   5
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   6
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   7
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   8
```

By convention, the player using the **black** stones begins the game by placing one of their pieces on the board. Here, the same convention is followed.

### 2.3. Ending a Game

Players take turns to place stones on the board until either:

- One player has an unbroken line of five stones of their colour. The line can be either horizontal, vertical or diagonal.

- The board is completely filled (i.e. all spots have been occupied) and both players are unable to make a continuous line of five stones. In this case, the game ends in a draw.

Some examples of winning states:

```text
Player 1 (black) has a vertical win in column E, row 0 - row 4 (i.e., all stones in these spots are black)
A  B  C  D  E  F  G  H  I
 -- -- -- --●-- -- -- --   0
|  |  |  |  |  |  |  |  |
 -- -- -- --●-- -- -- --   1
|  |  |  |  |  |  |  |  |
 -- -- -- --●-- -- -- --   2
|  |  |  |  |  |  |  |  |
 -- -- -- --●-- --○-- --   3
|  |  |  |  |  |  |  |  |
 -- -- -- --●--○-- -- --   4
|  |  |  |  |  |  |  |  |
 -- -- -- --○-- -- -- --   5
|  |  |  |  |  |  |  |  |
 -- -- --○-- -- -- -- --   6
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   7
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   8
```

```text
Player 2 (white) has a diagonal win in row 2 column H, row 3 column G, row 4 column F, row 5 column E and row 6 column D (i.e., all stones in these spots are white)
A  B  C  D  E  F  G  H  I
 -- -- -- -- -- -- -- --   0
|  |  |  |  |  |  |  |  |
 -- -- -- --●-- -- -- --   1
|  |  |  |  |  |  |  |  |
 -- -- -- --●-- -- --○--   2
|  |  |  |  |  |  |  |  |
 -- -- -- --●-- --○-- --   3
|  |  |  |  |  |  |  |  |
 -- -- -- --●--○-- -- --   4
|  |  |  |  |  |  |  |  |
 -- -- -- --○-- -- -- --   5
|  |  |  |  |  |  |  |  |
 -- -- --○-- -- -- -- --   6
|  |  |  |  |  |  |  |  |
 -- --●-- -- -- -- -- --   7
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   8
```

```text
Player 1 (black) has a horizontal win in row 2, columns D-H (i.e., all stones in these spots are black)
A  B  C  D  E  F  G  H  I
 -- -- -- --○-- -- -- --   0
|  |  |  |  |  |  |  |  |
 -- -- -- --●-- -- -- --   1
|  |  |  |  |  |  |  |  |
 -- -- --●--●--●--●--●--○  2
|  |  |  |  |  |  |  |  |
 -- -- -- --●--○--○-- --   3
|  |  |  |  |  |  |  |  |
 -- -- -- --●--○-- -- --   4
|  |  |  |  |  |  |  |  |
 -- -- -- --○--○-- -- --   5
|  |  |  |  |  |  |  |  |
 -- -- --○-- -- -- -- --   6
|  |  |  |  |  |  |  |  |
 -- --●-- -- -- -- -- --   7
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   8
```

### 2.4. Your Task

You will eventually construct a program that simulates the players playing this game but it will be broken into small stages to help you develop your program.

### 2.5. Video Description

This video gives a good description of the game: Link to [video](https://www.youtube.com/watch?v=-KD743yNDHc).

## 3. Implementation Instructions

Your implementation **must include a text interface with all necessary functionalities** as detailed below. Your program will be evaluated based on its ease of use and clarity, including the provision of clear information and error messages for the player.

The objective of your implemented *Gomoku* game is to allow 1) a player to play against a simple computer player; and 2) a player to play against another player. Victory is attained by the first player who achieves an unbroken line of five stones of their colour. The task at hand requires the creation of functions to facilitate the entire gameplay process. It is imperative to carefully review the following comprehensive regulations and prerequisites for each function and aim to execute them.

**To ensure that your code can be properly evaluated by the teaching team:**

1. **Please ensure that your implemented functions use the same names and function signatures (i.e. number and type of input arguments and the type of the return value) as required,**

2. **Please ensure that your code is properly formatted, such as proper variable naming conventions, consistent indentations, proper line length, etc.,**

3. **Please ensure that you provide clear and coherent comments on your code to aid with the graders’ interpretation of your code,**

4. **For more details regarding formatting and commenting, see the [PEP 8 Style Guideline](https://peps.python.org/pep-0008/)**.

### 3.1. Game menu function

The **`game_menu()`** function is responsible for displaying the game menu at the start of the game, as well as during the game process to provide instructional suggestions. The menu should at least include the following five options:

1. Start a Game

2. Print the Board

3. Place a Stone

4. Reset the Game

5. Exit


### 3.2. Creating the Board

The purpose of this function is to create a data structure which will be used to keep track of the states of the boards. 

Your task here is to write the **`create_board(size)`** function, where **`size`** is the size of the board (e.g. to create a 9 by 9 board, we call **`create_board(9)`**). 

You should carefully decide the data structure to be used as well as the values to be stored to represent the unoccupied intersections of the grid.

This function returns the data structure which will be used to keep track of the occupancy status of the intersections on the board. The occupancy status of the intersections for the newly created board should all be unoccupied.

### 3.3. Is the target position occupied?

The purpose of this function is to examine whether a specific position on the board is occupied by a stone. Your task is to write a function **`is_occupied(board, x, y)`** where **`board`** is the current state of the board, **`x`** is the row index and **`y`** is the column index.

Here, you can assume that **`x`** and **`y`** are both valid numeric indices (i.e., both **`x`** and **`y`** are greater than or equal to 0 and smaller than the size of the board).

This function returns a boolean value of either **`True`** or **`False`**.

### 3.4. Placing a Stone at a Specific Intersection

Now we want to replicate placing a stone on the board. Your task is to write a function **`place_on_board(board, stone, position)`** which:

- Takes the following parameters:

    - A board

    - A stone value (either "●" or "○")

    - A position (a tuple of **strings** (a, b) where a is the row index, e.g., “0”, and b is the column index, e.g., “A”)

- If the move is successfully performed, return a boolean value of **True**

- If the move is impossible (e.g., invalid or occupied position), return a boolean value of  **False**


You will need to invoke functions implemented in previous steps.

### 3.5. Printing the Board

In order for players to know the states of the current boards, there needs to be a way to visualise the board. Your task here is to write a function **print_board(board)**:

- The parameter **board** can be the ones created and manipulated in previous steps

- “**`--`**” and “**`|`**” should be used to represent the grid of the board.

- Apart from the board, the indices of the board need to be presented to enhance user friendliness as indicated in the examples below

- This function does not return any value.

- Examples:


```text
An empty 9 * 9 board printed by this function
A  B  C  D  E  F  G  H  I
 -- -- -- -- -- -- -- --   0
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   1
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   2
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   3
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   4
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   5
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   6
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   7
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   8
```

```text
A 9 * 9 board with both players placing two stones printed by this function
A  B  C  D  E  F  G  H  I
 -- -- -- -- -- -- -- --   0
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   1
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   2
|  |  |  |  |  |  |  |  |
 -- -- --○-- -- -- -- --   3
|  |  |  |  |  |  |  |  |
 -- --○--●--●-- -- -- --   4
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   5
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   6
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   7
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   8
```



### 3.6. Check Available Moves

The purpose of this function is to find out whether there are available moves on the board. Your task is to write a function **`check_available_moves(board)`** where **`board`** is the current state of the board. 

This function returns the available moves as a list of tuples where each tuple represents a position on the board, e.g., **`[(“0”, “A”), (“3”, “D”)]`**. If the board is full, return an empty list.

You will need to invoke functions implemented in previous steps.

### 3.7. Check for the Winner

The purpose of this function is to identify the winner of the game. A winning condition is achieved when one of the players successfully forms a continuous line of five stones in their colour, either horizontally, vertically or diagonally. Your task is to write a function **`check_for_winner(board)`** :

- The parameter **`board`** can be the ones created and manipulated in previous steps

- If a continuous line of five stones in the same colour has been achieved, return the corresponding stone

- If the board is full but none of the players achieves a continuous line of five stones, return a string value of “**`Draw`**”

- If none of the players achieve the winning condition and there are still available moves on the board, return **`None`**

- You will need to invoke functions implemented in previous steps.


### 3.8. Random Computer Player

The purpose of this function is to implement a computer opponent. The computer opponent will counter the player by randomly selecting one of the available moves around the player’s previous move. For example:

```text
A  B  C  D  E  F  G  H  I
 -- -- -- -- -- -- -- --   0
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   1
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   2
|  |  |  |  |  |  |  |  |
 -- -- --○--○--○-- -- --   3
|  |  |  |  |  |  |  |  |
 -- -- --○--●--○-- -- --   4
|  |  |  |  |  |  |  |  |
 -- -- --○--○--○-- -- --   5
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   6
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   7
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   8
```

When the player places the stone at (“4”, “E”), the green spots surrounding the player stone suggest the moves the computer player can choose from. **From these white spots, the computer player can only choose one of the spots that are unoccupied.**

```text
A  B  C  D  E  F  G  H  I
●--○-- -- -- -- -- -- --   0
|  |  |  |  |  |  |  |  |
○--○-- -- -- -- -- -- --   1
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   2
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   3
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   4
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   5
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   6
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   7
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   8
```

When the player places the stone at (“0”, “A”), the green spots surrounding the player stone suggest the available moves for the computer player to choose from. Note that, same as previously mentioned, the computer player can only choose one of the white spots that are unoccupied.

```text
A  B  C  D  E  F  G  H  I
 -- -- -- -- -- -- -- --   0
|  |  |  |  |  |  |  |  |
○--○-- -- -- -- -- -- --   1
|  |  |  |  |  |  |  |  |
●--○-- -- -- -- -- -- --   2
|  |  |  |  |  |  |  |  |
○--○-- -- -- -- -- -- --   3
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   4
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   5
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   6
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   7
|  |  |  |  |  |  |  |  |
 -- -- -- -- -- -- -- --   8
```

When the player places the stone at (“2”, “A”), the computer player can only choose one of unoccupied spots from the white spots surrounding the player stone as shown in the figure.

The available moves for the computer player are based on both the player’s previous move and the availability of that move’s surrounding positions. Your task here is to implement the function **`random_computer_player(board,player_move)`**:

- The **`player_move`** isinthesamepositionformat,e.g., **`(“0”, “B”)`**

- Seeing the position of the player’s previous move as the centroid, the function needs to find all the available **`valid`** positions within a 3 * 3 square and randomly select one of these positions

- If all positions within the 3 * 3 square are invalid, the function should randomly select from one of the available positions on the board

- When randomly selecting the moves, you need to ensure all identified positions have the same likelihood of being selected

- This function should return a tuple of **`strings`** which represents the next played position for the computer player, e.g., **`(“1”, “D”)`**


You will need to invoke functions implemented in previous steps.

### 3.9. Play Game

The purpose of this function is to manage all aspects of the game play. You should invoke all functions implemented in previous steps here. Your task is to implement the function **`play_game()`**:

- This function accepts zero parameters.

- When the function is invoked, it should display a menu to display all possible options for the user

- Once the user selects an option, the program should execute the relevant function(s) or display additional prompts/ask for additional inputs as needed

- **The user should be able to return to the main menu at any time**

- When the user input option “1”, the function should:

    - Ask for a board size value from the user, the program should at least support size values of 9, 13 and 15.

    - Then, ask for a mode from the user, the mode should be either **Player vs. Player** or **Player vs. Computer**

    - Create a board based on the user specified size

- When the user input option “2”, the function should visualise the current state of the board to the user

- When the user input option “3”, the function should:

    - Ask the user to place a stone at a position, the expected input format for the position should be “**`[row_index] [column_index]`**”(e.g., “**`2 F`**”)

    - The user should open the game with the black stone (i.e., "●"). You may need to keep track of the turns to determine the colour of stones to be placed next.

    - Whenever the user successfully places a stone on the board, you should check if any of the players has achieved one of the winning conditions

    - For **Player vs. Player** mode, only one stone from the corresponding player will be placed on the board

    - For **Player vs. Computer** mode, after playing and checking the player’s move, the computer player should play the move as described in section 3.8 and conduct similar checking of the winning conditions

    - If an ending condition is achieved (i.e., either one of the players win, or no more move is available), the game needs to automatically print the result (either print the stone value of the winner or inform the player of a draw game). Subsequently, both the board and the mode need to be reset

- When the user input option “4”, the function should reset the game (i.e., reset the board and the selected mode)

- When the user input option “5”, the function should exit the program. **This is the only situation when the program terminates. The program should continue to run infinitely unless the user selects this option.**


For this function, you will need to validate the inputs from the users and provide meaningful instructional messages. You will need to ensure a clear logic for the implemented function.









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
