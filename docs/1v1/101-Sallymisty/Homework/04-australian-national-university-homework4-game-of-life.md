---
title: 「Australian National University」Homework 4：Game of Life
icon: blog
date: 2025-09-19 09:14:10
author: AI悦创
isOriginal: true
sticky: false
category: 
    - Python一对一答疑帖
    - 留学生Python辅导
    - Australian National University一对一辅导
tag:
    - Python一对一答疑帖
    - 留学生Python辅导
    - Australian National University一对一辅导
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

Your goal in this assignment is to implement a famous mathematical "game" (or *cellular automata* to use the correct term) the [**Game of Life**](https://en.wikipedia.org/wiki/Conway's_Game_of_Life), also known as **Life**. It was devised by the British mathematician John Conway in 1970.

## 1. Practical information

The assignment must be submitted in Ed Lessons before **Sunday the 28th of September, at 11:55PM** (5 min before midnight). **This deadline is hard!** Unlike other courses, we do not give partial mark for late submission. We will only grant extension in exceptional circumstances, see [our policy](https://comp.anu.edu.au/courses/comp1730/assessments/#late-submissions-and-extensions) on the course assessment page.

You can submit it as many times as you like and only the mark of the last submission will be used. You can submit it as many times as you like and only the mark of the last submission will be used. To submit: Click the **Start Attempt** button in blue at the top right, then click **Submit**. Clicking Run or Test does NOT submit your work.

::: warning

We do not accept any excuses about technical problems like internet connection or computer issues, as you have plenty of time from the release of the assignment to the deadline. **Do not wait until the last minute!**

:::

**The homework is individual**. You must write your own solution and you are expected to be able to explain every aspect of it. You are not allowed to share your solution (code) with other students; this includes posting it (or parts of it) to the discussion forum, or to any other online platforms. **You may be contacted for an additional oral assessment**, which may result in a change of mark.

If you have questions: ask the tutor in your lab or look up Ed Discussion forum for similar question (only post your question if not found).

## 2. The problem

The Game of Life is "played" on a board, which is a **2D (two-dimensional) grid of cells**. Cells are either dead (represented as an integer `0` on the board) or alive (an integer `1` on the board). Life runs over several steps (generations). At each step we start from a given configuration of the board (i.e., distribution of live and dead cells), and we generate the next board according to the following rules:

1. A live cell with zero or one live neighbours dies (underpopulation),
2. A live cell with two or three live neighbours survives (i.e., remains alive in the next generation),
3. A live cell with more than three live neighbours dies (overpopulation),
4. A dead cell with exactly three live neighbours becomes a live cell (reproduction).

![](https://blog.images.bornforthis.cn/docs-images/sha256/fe/fec8d64a3b4cec0154e2b0cb5adf1bc7c6b75c29814107a9d0cc3aafeb4b532d.png)



 Fig 1. The blue cell has eight neighbours (C-Centre, N-North, S-South, E-East, W-West etc). Cells at the edge of the board will have less than 8 neighbours.

## 3. How to represent the board in Python

There are several possible choices to represent the 2D grid of numbers. From the data structures we have seen so far we may either use a **list of lists** (Lectures 5 and 6) or a **2D NumPy array** (Lecture 7). You may choose which one of the two data structures you prefer. We have provided you with two scaffold code files:

- if you choose to use a **list of lists** data structure then use `game_of_life.py`, or
- if you choose to use a **NumPy array** data structure then use `game_of_life_numpy.py`.

**You must fill in your UID and name in the python file you chose to proceed, and only that file will be marked. Do NOT update the other file.**

::: warning

You MUST write your functions solely in one of the two files, i.e., the one you chose, and leave the other file untouched.  **If you fail to do that, we may incorrectly mark your submission!**

:::

**Task 1.** Write a function `count_live_neighbours(board, row, column)` which returns the number of **live** neighbours of a cell, given a `board` and the coordinates of the cell on the board given by `row` and `column`, i.e., the cell at `board[row][column]`. You can assume that `row` and `column` are non-negative integers and within the boundaries of the board. Write your implementation of `count_live_neighbours` in the scaffold code file. The template function has only a `pass` statement which you should replace with your code. 

**Task 2.** Write a function `generate_next_board(board)` in the scaffold file that, given the current board, generates the next board. Both `board` and the returned value are Life boards. **You must NOT modify `board`**. Instead, you should work with a copy of `board` which can be modified and returned. (Think why!).

For both tasks 1 and 2 you can assume that:

- All values on the board are either an integer `0` or an integer `1`.
- The board is rectangular. (you cannot assume that the board is square).
- In the case of a *list of lists*, you can also assume that all sub-lists in the list of lists have the same length.

For both tasks 1 and 2 you must follow this restriction:

- **You must not import any modules except `copy`, `numpy` and `matplotlib`.**

To test your code, click the "Test" button at the bottom right of the workspace. The scaffold file also has two testing functions `test_count_live_neighbors()` and `test_generate_next_board()` that will run the same tests as when you click the Test button. In case you use your "favorite" IDE to implement the function, you can run this function to test the code yourself. To submit your code, click the "Submit" button at the top right corner:

![](https://blog.images.bornforthis.cn/docs-images/sha256/47/479f832837c5d8e2c83bfa6caab894e1cfb1da20ee56512cbf063bd0e7715a08.jpeg)



## 4. Animated Evolution

We have provided other functions in the scaffold code file for your pleasure: `draw_board(board)` will be useful when you start designing your own boards, and `evolve_life(initial_generation, number_steps, filename)` which will run your `generate_next_board` for `number_steps` and will generate a GIF animated file ! To generate the animated file with an evolution, you can call one of the provided `evolve_life_pattern(...)` functions. For example calling `evolve_life_beacon(10)` will generate a file named `beacon.gif` with an oscillating pattern of periodicity 2 called "Beacon": 

![](https://blog.images.bornforthis.cn/docs-images/sha256/d4/d4cb0c40bf9d4d6d296c844dad96f0d9297fe00405c5af9014029636e235cacd.gif)

In the scaffold code file you will also find functions for the well known ["Glider Gun"](https://en.wikipedia.org/wiki/Conway's_Game_of_Life#/media/File:Gospers_glider_gun.gif), and "line" and "box" which display simpler boards that you can easily experiment with.  

Ask your tutor if you're not sure how to use these functions.

And there are many other interesting boards in the Wikipedia [**Game of Life**](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) reference. Check them out. Sorry no bonus marks, but lots of fun if you can get them going!

::: warning

Submit your code with the calls to `evolve_life` commented out. Otherwise, the automarking scripts may fail to provide to mark your assignment.

:::

::: warning

Some students have reported issues with Safari web browser on MacOsX in regards to the GIF file generation. The workaround is to use Google Chrome web browser instead.

:::

## 5. Testing and Marking

Like homework 3, we will be marking your submission on *both code quality and correctness*. 

**Code quality**

Code quality has been covered in the week 4 lecture. It includes aspects such as:

- Using meaningful and intention-revealing function, parameter and variable names. The names of some functions in the homework are fixed, but if you define additional functions (to decompose the problem) then they should be given descriptive names.
- *Appropriate* use of comments and docstrings. This means not too little comments but also not too much. Comments should be accurate, relevant, and readable. Docstrings should be used only as the first statement in a function definition.
- Good code organisation. This includes appropriate use of functions to decompose a problem and avoid code repetition.

To earn a good score, you **must** demonstrate your understanding of code quality by introducing at least one well-structured new function to reduce repetition, including some appropriate comments to clarify your logic, and adding docstrings to all functions required in the tasks and any helper functions created.

**Code correctness**

Your code will be marked with auto-testing. Clicking on the "Test" button will only test it on a limited number of test cases, which will show you which test cases you passed or failed. Failing at least one test case means that your code is wrong.

::: warning

Passing all the tests does not necessarily means that your code is correct, as only a small number of test cases are done. In the final marking of your assignment we will use a much larger set of test cases, and your code might fail additional tests.

:::

Your code must meet the following requirements:

- You must not change the file name `game_of_life.py` and `game_of_life_numpy.py`.
- It must be syntactically correct python code.
- It must contain only function definitions and import statements; comments, including docstrings (if they are used appropriately) are of course ok to include. **Anything else such as the use of global variables may be penalised when we check your submission**.
- You must keep the first 12 lines of the python file exactly as they are, except that you must replace the dummy value "u1234567" with your own ANU ID, and "Firstname Lastname" with your first and last names.

In marking this assignment we will consider the following:

- Did you put your name and uID at the top of the file for the selected implementation, and **ONLY** that file?
- Does your submitted file satisfy the requirements specified above?
- Are your functions correct for all valid arguments?
- Do your functions always return a value of the correct type?
- The quality of your code (see above).

We will apply penalties for submissions that do not fulfill formal aspects, such as missing name and/or uID.

The assignment is worth 5% of your final mark, including 3% for code correctness and 2% for code quality.

## 6. Scaffold files

These might be useful either for working offline or if you want to start fresh after an initial failed attempt

::: code-tabs

@tab game_of_life.py

```python
## COMP1730/6730 Homework 4

"""
ANU ID: u1234567
NAME: Firstname Lastname

By inputting my UID and name, I declare that this submission is my own work.
I have not used any AI tools to generate any part of this code or assist with the completion of this assignment.
I understand that doing so constitutes academic misconduct.
I am able to explain and justify all parts of this submission if asked.
https://www.anu.edu.au/students/academic-skills/academic-integrity
"""


## You should implement the functions `count_live_neighbours` and `generate_next_board`
## below. You can define new function(s) if it helps you decompose the problem
## into smaller problems.

## Note this is the version of game_of_life that uses a lists of lists and NOT NumPy.

def count_live_neighbours(board, row, column):
    pass

def generate_next_board(board):
    pass


################################################################################
#                  VISUALISATION AND EXAMPLE BOARDS
################################################################################

import numpy as np
from matplotlib import pyplot as plt
from matplotlib.animation import FuncAnimation, PillowWriter

def draw_board(board):
    """Draws the given board in a new figure. The figure and lines plot are also returned."""
    fig  = plt.figure()
    plot = plt.imshow(board)
    return fig, plot

def evolve_life(initial_generation, number_steps, filename):
    """
    Generates a GIF animated file with the evolution of the board.

    The function does not return any object.

    Parameters
    ----------
    initial_generation : list of lists
        The initial/starting board
    number_steps : int
        How many times the board is to be evolved/updated.
        Should be greater than 0
    filename: str
        The name of the GIF file to be generated, e.g., 'animation.gif'

    Returns
    -------
    None
    """
    def animate(i):
        plot.set_data(generations[i])
        return [plot]
    fig, plot = draw_board(initial_generation)
    generations = [initial_generation]
    for i in range(1, number_steps):
        generations.append(generate_next_board(generations[i-1]))
    anim = FuncAnimation(fig, animate, frames=number_steps, interval=100, blit=True)
    writer = PillowWriter(fps=15,metadata=dict(artist='Me'),bitrate=1800)
    anim.save(filename, writer=writer)

def evolve_life_beacon(steps):
    """Generate a GIF animated file of the Beacon board (a period 2 oscillator) being evolved the specified number of steps."""
    beacon = [[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]]
    return evolve_life(beacon, steps, "beacon.gif")

def evolve_life_glider_gun(steps):
    """Generate a GIF animated file of the Glider board being evolved the specified number of steps."""
    glider_gun_inner = \
        [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
         [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
         [1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
    glider_gun = np.zeros((100, 100))
    glider_gun[3:12,3:39] = glider_gun_inner
    glider_gun = glider_gun.tolist()
    return evolve_life(glider_gun, steps, "glider_gun.gif")

def evolve_life_line(steps):
    """Generate a GIF animated file of the Line board (a simple board) being evolved the specified number of steps."""
    line_inner = [[1,1,1,1,1,1,1,1,1,1]]
    line = np.zeros((50, 50), dtype=int)
    line[25:26,20:30] = line_inner
    line = line.tolist()
    return evolve_life(line, steps, "line.gif")

def evolve_life_box(steps):
    """Generate a GIF animated file of the Box board (another simple board) being evolved the specified number of steps."""
    box_inner = \
        [[1,0,1,0,1],
         [1,0,0,0,1],
         [1,0,0,0,1],
         [1,0,0,0,1],
         [1,0,1,0,1]]
    box = np.zeros((50, 50), dtype=int)
    box[23:28,23:28] = box_inner
    box = box.tolist()
    return evolve_life(box, steps, "box.gif")

## Un-comment one or more of the lines below to generate a 
## GIF animated file of the evolution of different board types.
# evolve_life_beacon(10)
# evolve_life_glider_gun(100)
# evolve_life_line(100)
# evolve_life_box(100)

################################################################################
#               DO NOT MODIFY ANYTHING BELOW THIS POINT
################################################################################

def test_count_live_neighbours():
    """
    Run tests for the `count_live_neighbours` function.

    If all tests pass you will just see "all count_live_neighbours tests passed".
    If any test fails there will be an error message.

    **NOTE:**
        The tests we provide are intentionally not comprehensive and only cover a few of the simplest cases.
        Passing all the tests here does not automatically mean that your code is completely correct.
        Code that does not pass the basic tests included here will get 0 for functionality.

    You are expected to rerun this function before submitting.
    Carelessness and other similar excuses will **NOT** be accepted.
    """
    board = [[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]]
    assert count_live_neighbours(board,0,0) == 1
    assert count_live_neighbours(board,1,1) == 3
    assert count_live_neighbours(board,2,2) == 4
    assert count_live_neighbours(board,3,5) == 2
    assert count_live_neighbours(board,5,3) == 2
    print("all count_live_neighbours tests passed")

def test_generate_next_board():
    """
    Run tests for the `generate_next_board` function.

    If all tests pass you will just see "all generate_next_board tests passed".
    If any test fails there will be an error message.

    **NOTE:**
        The tests we provide are intentionally not comprehensive and only cover a few of the simplest cases.
        Passing all the tests here does not automatically mean that your code is completely correct.
        Code that does not pass the basic tests included here will get 0 for functionality.

    You are expected to rerun this function before submitting.
    Carelessness and other similar excuses will **NOT** be accepted.
    """
    boards = [([[0,0,0],[0,0,0],[0,0,0]],
               [[0,0,0],[0,0,0],[0,0,0]]),

              ([[1,1,1],[1,1,1],[1,1,1]],
               [[1,0,1],[0,0,0],[1,0,1]]),

              ([[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,0,0],
                [0,0,0,0,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]],
               [[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,1,0,0,0],
                [0,0,0,1,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]])]
    for board, next_board in boards:
        next_computed = generate_next_board(board)
        assert next_computed == next_board
    print("all generate_next_board tests passed")
```

@tab game_of_life_numpy.py

```python
## COMP1730/6730 Homework 4

"""
ANU ID: u1234567
NAME: Firstname Lastname

By inputting my UID and name, I declare that this submission is my own work.
I have not used any AI tools to generate any part of this code or assist with the completion of this assignment.
I understand that doing so constitutes academic misconduct.
I am able to explain and justify all parts of this submission if asked.
https://www.anu.edu.au/students/academic-skills/academic-integrity
"""

## You should implement the functions `count_live_neighbours` and `generate_next_board`
## below. You can define new function(s) if it helps you decompose the problem
## into smaller problems.

## Note this is the version of game_of_life that uses NumPy and NOT a lists of lists.

import numpy as np


def count_live_neighbours(board, row, column):
    pass


def generate_next_board(board):
    pass


################################################################################
#                  VISUALISATION AND EXAMPLE BOARDS
################################################################################

from matplotlib import pyplot as plt
from matplotlib.animation import FuncAnimation, PillowWriter


def draw_board(board):
    """Draws the given board in a new figure. The figure and lines plot are also returned."""
    fig = plt.figure()
    plot = plt.imshow(board)
    return fig, plot


def evolve_life(initial_generation, number_steps, filename):
    """
    Generates a GIF animated file with the evolution of the board.

    The function does not return any object.

    Parameters
    ----------
    initial_generation : ndarray
        The initial/starting board
    number_steps : int
        How many times the board is to be evolved/updated.
        Should be greater than 0
    filename: str 
        The name of the GIF file to be generated, e.g., 'animation.gif'
    
    Returns
    -------
    None

    """

    def animate(i):
        plot.set_data(generations[i])
        return [plot]

    fig, plot = draw_board(initial_generation)
    generations = [initial_generation]
    for i in range(1, number_steps):
        generations.append(generate_next_board(generations[i - 1]))
    anim = FuncAnimation(fig, animate, frames=number_steps, interval=100, blit=True)
    writer = PillowWriter(fps=15, metadata=dict(artist='Me'), bitrate=1800)
    anim.save(filename, writer=writer)


def evolve_life_beacon(steps):
    """Generate a GIF animated file of the Beacon board (a period 2 oscillator) being evolved the specified number of steps."""
    beacon = [[0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 1, 1, 0],
              [0, 0, 0, 0, 0, 0]]
    beacon = np.array(beacon)
    return evolve_life(beacon, steps, "beacon.gif")


def evolve_life_glider_gun(steps):
    """Generate a GIF animated file of the Glider board being evolved the specified number of steps."""
    glider_gun_inner = \
        [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    glider_gun = np.zeros((100, 100), dtype=int)
    glider_gun[3:12, 3:39] = glider_gun_inner
    return evolve_life(glider_gun, steps, "glider_gun.gif")


def evolve_life_line(steps):
    """Generate a GIF animated file of the Line board (a simple board) being evolved the specified number of steps."""
    line_inner = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
    line = np.zeros((50, 50), dtype=int)
    line[25:26, 20:30] = line_inner
    return evolve_life(line, steps, "line.gif")


def evolve_life_box(steps):
    """Generate a GIF animated file of the Box board (another simple board) being evolved the specified number of steps."""
    box_inner = \
        [[1, 0, 1, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 1, 0, 1]]
    box = np.zeros((50, 50), dtype=int)
    box[23:28, 23:28] = box_inner
    return evolve_life(box, steps, "box.gif")


## Un-comment one or more of the lines below to generate a
## GIF animated file of the evolution of different board types.
# evolve_life_beacon(10)
# evolve_life_glider_gun(100)
# evolve_life_line(100)
# evolve_life_box(100)

################################################################################
#               DO NOT MODIFY ANYTHING BELOW THIS POINT
################################################################################

def test_count_live_neighbours():
    """
    Run tests for the `count_live_neighbours` function.

    If all tests pass you will just see "all count_live_neighbours tests passed".
    If any test fails there will be an error message.

    **NOTE:**
        The tests we provide are intentionally not comprehensive and only cover a few of the simplest cases.
        Passing all the tests here does not automatically mean that your code is completely correct.
        Code that does not pass the basic tests included here will get 0 for functionality.

    You are expected to rerun this function before submitting.
    Carelessness and other similar excuses will **NOT** be accepted.
    """
    board = [[0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 0],
             [0, 0, 0, 0, 0, 0]]
    board = np.array(board)
    assert count_live_neighbours(board, 0, 0) == 1
    assert count_live_neighbours(board, 1, 1) == 3
    assert count_live_neighbours(board, 2, 2) == 4
    assert count_live_neighbours(board, 3, 5) == 2
    assert count_live_neighbours(board, 5, 3) == 2
    print("all count_live_neighbours tests passed")


def test_generate_next_board():
    """
    Run tests for the `generate_next_board` function.

    If all tests pass you will just see "all generate_next_board tests passed".
    If any test fails there will be an error message.

    **NOTE:**
        The tests we provide are intentionally not comprehensive and only cover a few of the simplest cases.
        Passing all the tests here does not automatically mean that your code is completely correct.
        Code that does not pass the basic tests included here will get 0 for functionality.

    You are expected to rerun this function before submitting.
    Carelessness and other similar excuses will **NOT** be accepted.
    """
    boards = [([[0, 0, 0], [0, 0, 0], [0, 0, 0]],
               [[0, 0, 0], [0, 0, 0], [0, 0, 0]]),

              ([[1, 1, 1], [1, 1, 1], [1, 1, 1]],
               [[1, 0, 1], [0, 0, 0], [1, 0, 1]]),

              ([[0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0], [0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0]],
               [[0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0]])]
    for board, next_board in boards:
        board = np.array(board)
        next_board = np.array(next_board)
        next_computed = generate_next_board(board)
        assert np.all(next_computed == next_board)
    print("all generate_next_board tests passed")
```

:::



## 7. Solution

::: code-tabs

@tab 1. game_of_life.py

```python
## COMP1730/6730 Homework 4

"""
ANU ID: u1234567
NAME: Firstname Lastname

By inputting my UID and name, I declare that this submission is my own work.
I have not used any AI tools to generate any part of this code or assist with the completion of this assignment.
I understand that doing so constitutes academic misconduct.
I am able to explain and justify all parts of this submission if asked.
https://www.anu.edu.au/students/academic-skills/academic-integrity
"""


## You should implement the functions `count_live_neighbours` and `generate_next_board`
## below. You can define new function(s) if it helps you decompose the problem
## into smaller problems.

## Note this is the version of game_of_life that uses a lists of lists and NOT NumPy.

def _in_bounds(r, c, n_rows, n_cols):
    """Return True if (r,c) is a valid coordinate inside the board."""
    return 0 <= r < n_rows and 0 <= c < n_cols

def count_live_neighbours(board, row, column):
    n_rows = len(board)
    n_cols = len(board[0]) if n_rows > 0 else 0
    total = 0
    # 8 directions around (row, column)
    for dr in (-1, 0, 1):
        for dc in (-1, 0, 1):
            if dr == 0 and dc == 0:
                continue  # skip the cell itself
            rr, cc = row + dr, column + dc
            if _in_bounds(rr, cc, n_rows, n_cols):
                total += 1 if board[rr][cc] == 1 else 0
    return total
    

def generate_next_board(board):
    n_rows = len(board)
    n_cols = len(board[0]) if n_rows > 0 else 0
    
    next_board = [[0 for _ in range(n_cols)] for _ in range(n_rows)]
    for r in range(n_rows):
        for c in range(n_cols):
            live_nei = count_live_neighbours(board, r, c)
            cell = board[r][c]
            if cell == 1:
                next_board[r][c] = 1 if (live_nei == 2 or live_nei == 3) else 0
            else:
                next_board[r][c] = 1 if live_nei == 3 else 0
    return next_board
    


################################################################################
#                  VISUALISATION AND EXAMPLE BOARDS
################################################################################

import numpy as np
from matplotlib import pyplot as plt
from matplotlib.animation import FuncAnimation, PillowWriter

def draw_board(board):
    """Draws the given board in a new figure. The figure and lines plot are also returned."""
    fig  = plt.figure()
    plot = plt.imshow(board)
    return fig, plot

def evolve_life(initial_generation, number_steps, filename):
    """
    Generates a GIF animated file with the evolution of the board.

    The function does not return any object.

    Parameters
    ----------
    initial_generation : list of lists
        The initial/starting board
    number_steps : int
        How many times the board is to be evolved/updated.
        Should be greater than 0
    filename: str
        The name of the GIF file to be generated, e.g., 'animation.gif'

    Returns
    -------
    None
    """
    def animate(i):
        plot.set_data(generations[i])
        return [plot]
    fig, plot = draw_board(initial_generation)
    generations = [initial_generation]
    for i in range(1, number_steps):
        generations.append(generate_next_board(generations[i-1]))
    anim = FuncAnimation(fig, animate, frames=number_steps, interval=100, blit=True)
    writer = PillowWriter(fps=15,metadata=dict(artist='Me'),bitrate=1800)
    anim.save(filename, writer=writer)

def evolve_life_beacon(steps):
    """Generate a GIF animated file of the Beacon board (a period 2 oscillator) being evolved the specified number of steps."""
    beacon = [[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]]
    return evolve_life(beacon, steps, "beacon.gif")

def evolve_life_glider_gun(steps):
    """Generate a GIF animated file of the Glider board being evolved the specified number of steps."""
    glider_gun_inner = \
        [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
         [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
         [1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
    glider_gun = np.zeros((100, 100))
    glider_gun[3:12,3:39] = glider_gun_inner
    glider_gun = glider_gun.tolist()
    return evolve_life(glider_gun, steps, "glider_gun.gif")

def evolve_life_line(steps):
    """Generate a GIF animated file of the Line board (a simple board) being evolved the specified number of steps."""
    line_inner = [[1,1,1,1,1,1,1,1,1,1]]
    line = np.zeros((50, 50), dtype=int)
    line[25:26,20:30] = line_inner
    line = line.tolist()
    return evolve_life(line, steps, "line.gif")

def evolve_life_box(steps):
    """Generate a GIF animated file of the Box board (another simple board) being evolved the specified number of steps."""
    box_inner = \
        [[1,0,1,0,1],
         [1,0,0,0,1],
         [1,0,0,0,1],
         [1,0,0,0,1],
         [1,0,1,0,1]]
    box = np.zeros((50, 50), dtype=int)
    box[23:28,23:28] = box_inner
    box = box.tolist()
    return evolve_life(box, steps, "box.gif")

## Un-comment one or more of the lines below to generate a 
## GIF animated file of the evolution of different board types.
# evolve_life_beacon(10)
# evolve_life_glider_gun(100)
# evolve_life_line(100)
# evolve_life_box(100)

################################################################################
#               DO NOT MODIFY ANYTHING BELOW THIS POINT
################################################################################

def test_count_live_neighbours():
    """
    Run tests for the `count_live_neighbours` function.

    If all tests pass you will just see "all count_live_neighbours tests passed".
    If any test fails there will be an error message.

    **NOTE:**
        The tests we provide are intentionally not comprehensive and only cover a few of the simplest cases.
        Passing all the tests here does not automatically mean that your code is completely correct.
        Code that does not pass the basic tests included here will get 0 for functionality.

    You are expected to rerun this function before submitting.
    Carelessness and other similar excuses will **NOT** be accepted.
    """
    board = [[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]]
    assert count_live_neighbours(board,0,0) == 1
    assert count_live_neighbours(board,1,1) == 3
    assert count_live_neighbours(board,2,2) == 4
    assert count_live_neighbours(board,3,5) == 2
    assert count_live_neighbours(board,5,3) == 2
    print("all count_live_neighbours tests passed")

def test_generate_next_board():
    """
    Run tests for the `generate_next_board` function.

    If all tests pass you will just see "all generate_next_board tests passed".
    If any test fails there will be an error message.

    **NOTE:**
        The tests we provide are intentionally not comprehensive and only cover a few of the simplest cases.
        Passing all the tests here does not automatically mean that your code is completely correct.
        Code that does not pass the basic tests included here will get 0 for functionality.

    You are expected to rerun this function before submitting.
    Carelessness and other similar excuses will **NOT** be accepted.
    """
    boards = [([[0,0,0],[0,0,0],[0,0,0]],
               [[0,0,0],[0,0,0],[0,0,0]]),

              ([[1,1,1],[1,1,1],[1,1,1]],
               [[1,0,1],[0,0,0],[1,0,1]]),

              ([[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,0,0,0,0],
                [0,0,0,0,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]],
               [[0,0,0,0,0,0],[0,1,1,0,0,0],[0,1,1,0,0,0],
                [0,0,0,1,1,0],[0,0,0,1,1,0],[0,0,0,0,0,0]])]
    for board, next_board in boards:
        next_computed = generate_next_board(board)
        assert next_computed == next_board
    print("all generate_next_board tests passed")
```

@tab `game_of_life.py`（list of lists 版本）

```python
## COMP1730/6730 Homework 4

"""
ANU ID: u1234567
NAME: Firstname Lastname

By inputting my UID and name, I declare that this submission is my own work.
I have not used any AI tools to generate any part of this code or assist with the completion of this assignment.
I understand that doing so constitutes academic misconduct.
I am able to explain and justify all parts of this submission if asked.
https://www.anu.edu.au/students/academic-skills/academic-integrity
"""


## You should implement the functions `count_live_neighbours` and `generate_next_board`
## below. You can define new function(s) if it helps you decompose the problem
## into smaller problems.

## Note this is the version of game_of_life that uses a lists of lists and NOT NumPy.

def _in_bounds(r, c, n_rows, n_cols):
    """Return True if (r,c) is a valid coordinate inside the board."""
    return 0 <= r < n_rows and 0 <= c < n_cols


def count_live_neighbours(board, row, column):
    """
    Count the number of live (1) neighbours around board[row][column].

    Neighbours are the 8 surrounding cells (less on edges/corners).
    The input board is a rectangular list of lists containing only 0/1.
    """
    n_rows = len(board)
    n_cols = len(board[0]) if n_rows > 0 else 0

    total = 0
    # 8 directions around (row, column)
    for dr in (-1, 0, 1):
        for dc in (-1, 0, 1):
            if dr == 0 and dc == 0:
                continue  # skip the cell itself
            rr, cc = row + dr, column + dc
            if _in_bounds(rr, cc, n_rows, n_cols):
                total += 1 if board[rr][cc] == 1 else 0
    return total


def generate_next_board(board):
    """
    Generate the next Life board from the current one without modifying the input.

    Rules:
    1) Live cell with 0 or 1 live neighbours dies.
    2) Live cell with 2 or 3 live neighbours survives.
    3) Live cell with >3 live neighbours dies.
    4) Dead cell with exactly 3 live neighbours becomes live.
    """
    n_rows = len(board)
    n_cols = len(board[0]) if n_rows > 0 else 0

    # create a fresh board (same shape) to avoid mutating input
    next_board = [[0 for _ in range(n_cols)] for _ in range(n_rows)]

    for r in range(n_rows):
        for c in range(n_cols):
            live_nei = count_live_neighbours(board, r, c)
            cell = board[r][c]
            if cell == 1:
                # survives if 2 or 3 neighbours
                next_board[r][c] = 1 if (live_nei == 2 or live_nei == 3) else 0
            else:
                # reproduction
                next_board[r][c] = 1 if live_nei == 3 else 0

    return next_board
"""
说明：
- count_live_neighbours 逐方向检查并计数；
- generate_next_board 新建 next_board，确保不修改输入 board；
- 命名、注释、函数分解满足代码质量要求。
"""
```

@tab `game_of_life_numpy.py`（NumPy 版本）

```python
## COMP1730/6730 Homework 4

"""
ANU ID: u1234567
NAME: Firstname Lastname

By inputting my UID and name, I declare that this submission is my own work.
I have not used any AI tools to generate any part of this code or assist with the completion of this assignment.
I understand that doing so constitutes academic misconduct.
I am able to explain and justify all parts of this submission if asked.
https://www.anu.edu.au/students/academic-skills/academic-integrity
"""

## You should implement the functions `count_live_neighbours` and `generate_next_board`
## below. You can define new function(s) if it helps you decompose the problem
## into smaller problems.

## Note this is the version of game_of_life that uses NumPy and NOT a lists of lists.

import numpy as np


def _neighbour_counts(board: np.ndarray) -> np.ndarray:
    """
    Compute the number of live neighbours for every cell using rolls (no wrap-around in rules;
    rolls just help sum the 8 shifted boards; edges are handled correctly because we never
    wrap the board state back — board is finite, but np.roll wraps. To avoid toroidal wrap,
    we will mask out contributions that originated from wrapped positions.)
    """
    # To prevent toroidal wrapping, we build a padded board and sum 3x3 windows.
    # This avoids any wrap-around artefacts and stays within allowed imports.
    padded = np.pad(board, pad_width=1, mode='constant', constant_values=0)
    # sum 3x3 neighbourhoods then subtract the center cell
    kernel_sum = (
        padded[0:-2, 0:-2] + padded[0:-2, 1:-1] + padded[0:-2, 2:] +
        padded[1:-1, 0:-2] +                     padded[1:-1, 2:] +
        padded[2:  , 0:-2] + padded[2:  , 1:-1] + padded[2:  , 2:]
    )
    return kernel_sum  # same shape as board


def count_live_neighbours(board, row, column):
    """
    Return the number of live neighbours around board[row, column].
    `board` is a 2D NumPy array of 0/1.
    """
    board = np.asarray(board)
    counts = _neighbour_counts(board)
    return int(counts[row, column])


def generate_next_board(board):
    """
    Generate the next Life board from the current one without modifying the input.
    Returns a new NumPy array of the same shape with 0/1.
    """
    board = np.asarray(board)
    counts = _neighbour_counts(board)

    survive = (board == 1) & ((counts == 2) | (counts == 3))
    born    = (board == 0) & (counts == 3)
    next_board = np.where(survive | born, 1, 0).astype(int)

    return next_board
```





:::









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