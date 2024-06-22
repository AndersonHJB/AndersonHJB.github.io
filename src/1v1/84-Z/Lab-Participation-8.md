---
title: Lab Participation 8
date: 2024-04-17 09:02:16
author: AI悦创
isOriginal: true
icon: python
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 3
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

You have started to grow bored of the battleship game that you developed over the last week. You decided you want to spice it up a notch. You decide you want to allow the user to make their own ships and choose where they place it on the board, as well as display the board when firing missiles.

## Checkpoint 1: Customised Battleship Game (2 pts)

We have provided a finished scaffold for last week's battleship game. We have separated the ship class to `ship.py`, and all other functionalities to a new file `run.py`. Firstly, have a read of the solution and run the program. Become familiar with what you've been given. In real world programming, you are often enhancing and modifying existing code.

## create_ships (ship.py)

Our first step is allowing the user to create their own ships. This involves specifying the name and position of each ship, as well as how many ships will be on the board (maximum of 10). Hence, we will be modifying the `create_ships` method in the `Ship` class, as this method is responsible for creating the ships.

This method will now ask for the user to create ships by asking for a symbol, `x` and `y` coordinate. The symbol will be used for the ship's name e.g. a symbol `A`  will result in the name `ShipA`. A correct input is in the format `<symbol> <x> <y>` where symbol is a letter from `A` to `J` , and `x` and `y` are valid coordinates that can fit the ship onto the board.

A maximum of 10 ships can be made. If this maximum is reached, it will stop and return the ships made. However, if the user has not hit the maximum but is finished, the user can enter `END SHIPS` which will also stop and return the ships made.

When an input is given, the following must be checked in order:

1. There are 3 tokens (single space-separated inputs).
2. `symbol` is between `A` to `J`.
3. `x` and `y` are integers.
4. `(x, y)` is out-of-bounds on the board.
5. The coordinates aren't already occupied by another ship.
6. The symbol isn't already occupied by another ship.

An example below shows calling `Ship.create_ships`, showing all errors that can possibly come up.

```bash
Creating ships...
> #3 3
Error: <symbol> <x> <y>
> #Z 3 3
Error: symbol must be between 'A'-'J'
> #A 3 3
Success! ShipA added at (3, 3)
> #C a 3
Error: (a, 3) is an invalid coordinate
> #C 4 -2
Error: (4, -2) is out-of-bounds on 5x5 board
> #C 3 3
Error: (3, 3) is already occupied by ShipA
> #A 0 0
Error: symbol 'A' is already taken
> #C 0 0
Success! ShipC added at (0, 0)
> #I 2 2
Success! ShipI added at (2, 2)
> #END SHIPS
3 ships added.
```

The return value in this scenario would be a list of 3 ships, the first ship `ShipA` with coordinates `(3, 3)`, the second ship `ShipC` with coordinates `(0, 0)`, and lastly `ShipI` with coordinates `(2, 2)`.

## print_board (run.py)

This is a new function we will be implementing that will take in one argument `board` which is the game board and print it in a specific format to the user.

Ships that are afloat are represented by their symbol (the last character in its name). Ships that have been sunk appear as a capital `X`. 

Let us see an example with a `board` where `ShipA` is at `(1, 3)` and `ShipB` is at `(4, 4)` and are both afloat, while `ShipJ` is at `(0, 0)` but has sunk.

```bash
-------
|X    |
|     |
|     |
| A   |
|    B|
-------
```

> To access position `(x, y)` on the board, it is `board[y][x]` as the first index represents the row (height) and the second index represents the column (width).

## main (run.py)

Each time a ship is sunk, the board should be printed immediately after.

## Output Example

```bash
Creating ships...
> #A 0 0
Success! ShipA added at (0, 0)
> #B 0 0
Error: (0, 0) is already occupied by ShipA
> #B 2 3
Success! ShipB added at (2, 3)
> #C 4 4 
Success! ShipC added at (4, 4)
> #D 3 1
Success! ShipD added at (3, 1)
> #END SHIPS
4 ships added.
Game started. Fire at will!
Enter X, Y coordinate [1/10]: 0, 0
You sank ShipA!
-------
|X    |
|   D |
|     |
|  B  |
|    C|
-------
Enter X, Y coordinate [2/10]: 2, 3
You sank ShipB!
-------
|X    |
|   D |
|     |
|  X  |
|    C|
-------
Enter X, Y coordinate [3/10]: 0, 4
Miss!
Enter X, Y coordinate [4/10]: 5, 5
Invalid coordinates. Try again.
Enter X, Y coordinate [5/10]: 3, 1
You sank ShipD!
-------
|X    |
|   X |
|     |
|  X  |
|    C|
-------
Enter X, Y coordinate [6/10]: 4, 4
You sank ShipC!
-------
|X    |
|   X |
|     |
|  X  |
|    X|
-------
Congratulations! All ships are sunk.
```

> **Hint:**  You may find it helpful to modify the value of the keyword parameter `end` when printing the board.

The following keywords and functions are banned from this task, any use of them will lead to a zero mark.

**Keywords**: 
`for`, `in`, `import` *, `global`, `lambda`, `nonlocal`

*: except `from ship import Ship`

Built-in functions: 
`any`, `all`, `filter`,  `eval`, `locals`, `exec`, `globals`, `map`, `open`, `__import__`, `__contains__`. `enumerate`, `sum`, `min`, `max`

## Template Code

```python
# filename: run.py
from ship import Ship


def create_board() -> list[list[Ship | None]]:
    '''
    Create a 2D list representing the game board. The size will be
    5x5 with all slots set to None.
    '''
    board = [
        [None] * 5,
        [None] * 5,
        [None] * 5,
        [None] * 5,
        [None] * 5
    ]
    return board


def print_board(board: list[list[Ship | None]]) -> None:
    '''
    Prints the game board with the ships.
    You can assume the board is 5x5.
    '''
    pass


# you will need to modify the implementation of this function
def is_finished(board: list[list[Ship | None]]):
    '''
    Check if all ships on the 2D list game board are sunk.
    Returns True if all ships are sunk, otherwise False.
    '''
    i = 0
    while i < 5:
        row = board[i]
        j = 0
        while j < 5:
            ship = row[j]
            if isinstance(ship, Ship):
                # if a ship has not sunk, we know the game is not done
                if not ship.has_sunk():
                    return False
            j += 1
        i += 1
    # if we reach here, all ships have sunk
    return True


def main():
    '''Runs the game.'''
    # 1. Create the list of ships
    ships = Ship.create_ships()

    # 2. Create the 5x5 board
    board = create_board()

    # 3. Place your ships in the board based on their coordinates
    i = 0
    while i < len(ships):
        ship = ships[i]
        x, y = ship.get_coord()
        board[y][x] = ship
        i += 1

    # 4. Continuously prompt the user for input until all ships are sunk.
    #    Whenever a ship is sunk, update the ship's status accordingly.
    print("Game started. Fire at will!")
    attempts = 0
    while attempts < 10:
        user_input = input(f"Enter X, Y coordinate [{attempts+1}/10]: ")
        # fetch the inputs
        tokens = user_input.split(', ')
        x = int(tokens[0])
        y = int(tokens[1])
        # check if the coordinates are valid
        if x < 0 or x >= 5 or y < 0 or y >= 5:
            # go back to the input
            print('Invalid coordinates. Try again.')
            attempts += 1
            continue
         
        # we reach here if valid coordinates are given
        ship = board[y][x]
        if not isinstance(ship, Ship):
            print('Miss!')
            attempts += 1
            continue

        # we reach here if it is a ship
        if ship.has_sunk():
            print('Miss!')
        else:
            ship.got_hit()
            print(f'You sank {ship.get_name()}!')

        if is_finished(board):
            print("Congratulations! All ships are sunk.")
            return

        attempts += 1

    # if we reach here, it means we exited the loop, meaning we've used all attempts
    print('Game over after 10 attempts! Try again next time!')


if __name__ == "__main__":
    main()
```

```python
# filename: ship.py
class Ship:


    def __init__(self, x: int, y: int, name: str) -> None:
        '''
        Initialize a ship object with given coordinates and name.

        There are 4 attributes of the the ship:
        x (int): The x coordinate of the ship.
        y (int): The y coordinate of the ship.
        name (str): The name or type of the ship.
        sunk (bool): Indicates whether the ship has sunk.
        '''
        self.x = x
        self.y = y
        self.name = name
        self.sunk = False


    def got_hit(self):
        '''
        Update the status of the ship when it gets hit.
        If the ship is hit, it is marked as sunk.
        '''
        self.sunk = True

       
    def has_sunk(self) -> bool:
        '''Get the status of the ship.'''
        return self.sunk


    def get_name(self) -> str:
        '''Get the name of the ship.'''
        return self.name


    def get_coord(self) -> tuple[int, int]:
        '''Get the coordinate of the ship.'''
        return self.x, self.y


    def __repr__(self) -> str:
        '''
        Returns a formatted string representation of the ship.

        The formatted string includes the ship's name followed by its status:
        - If the ship has sunk, the format is "{name}: Sunk".
        - If the ship hasn't sunk, the format is "{name}: Afloat".
        '''
        if self.sunk:
            return f'{self.name}: Sunk'
        else:
            return f'{self.name}: Afloat'

    
    # you will need to modify the implementation of this method
    def create_ships() -> list["Ship"]:
        '''
        Creates a list of ships and returns it.

        Currently, the implementation returns a static list of ships. 
        You will need to change it so the ships are created by the
        user through inputs.       
        '''
        # this is the solution for the previous battleship game
        # however, it requires modification to fit the new description 
        return [
            Ship(1, 4, 'ShipA'),
            Ship(3, 2, 'ShipB'),
            Ship(3, 3, 'ShipC')
        ]
```

```python
Your program produced the incorrect output.

Creating ships...
> A 0 0
Success! ShipA added at (0, 0)
> B 2 2
Success! ShipB added at (2, 2)
> C 0 0
Error: (0, 0) is already occupied by ShipA
> A 1 1
- Success! ShipA added at (1, 1)
+ Error: symbol 'A' is already taken
> C 2 2
Error: (2, 2) is already occupied by ShipB
> B 3 3
- Success! ShipB added at (3, 3)
+ Error: symbol 'B' is already taken
> END SHIPS
4 ships added.
Traceback (most recent call last):
  File "/home/test_create_ships.py", line 47, in <module>
    test_ships_eq(ships, values)
  File "/home/test_create_ships.py", line 24, in test_ships_eq
    assert len(ships) == len(values), f'number of ships is incorrect.\nExpected: {len(values)}\nGot: {len(ships)}'
           ^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: number of ships is incorrect.
Expected: 2
Got: 4
2 ships added.
```



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

