---
title: Lab Participation 7
date: 2024-04-11 21:06:18
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

## **Checkpoint 1: Implement Simplified Battleship Game (2pt)** 

Let's do some more coding! Your task is to create a simplified version of the Battleship game ([What is Battleship Game?](https://en.wikipedia.org/wiki/Battleship_(game))) using object-oriented programming (OOP) principles. In this game, you'll work with a 5x5 2D list representing the game board and 3 ships placed on the board. The objective is for the player to guess the ships' locations correctly within 10 attempts.

Here's what you need to do:

- Ship class implementation: Define the constructor and all necessary methods of the Ship class. This includes checking hits (when the player guesses correctly) and updating the ship's status when hit.
- is_finish function implementation : This function takes a 2D list representing the game board as input and returns True if all ships on the board are sunk; otherwise, it returns False. You'll need to loop through the 2D list to check the status of each ship.
- main function implementation : This function runs the game. Follow the provided instructions in the comments to create three instances of the Ship class and a 2D list board. Continue prompting the user for input until all ships are sunk ***or*** there are no turns remaining (i.e., the player fails to guess the locations of all ships within 10 attempts).

Example outputs of the programs are as follows:

```python
$ python3 battleship.py
Game started. Fire at will!
Enter X, Y coordinate [1/10]: #3, 4
Miss!
Enter X, Y coordinate [2/10]: #2, 5
Invalid coordinates. Try again.
Enter X, Y coordinate [3/10]: #1, 4
You sank ShipA!
Enter X, Y coordinate [4/10]: #3, 2
You sank ShipB!
Enter X, Y coordinate [5/10]: #6, 5
Invalid coordinates. Try again.
Enter X, Y coordinate [6/10]: #3, 3
You sank ShipC!
Congratulations! All ships are sunk.
```

```python
$ python3 battleship.py
Game started. Fire at will!
Enter X, Y coordinate [1/10]: #3, 4
Miss!
Enter X, Y coordinate [2/10]: #2, 5
Invalid coordinates. Try again.
Enter X, Y coordinate [3/10]: #2, 6
Invalid coordinates. Try again.
Enter X, Y coordinate [4/10]: #1, 4
You sank ShipA!
Enter X, Y coordinate [5/10]: #3, 2
You sank ShipB!
Enter X, Y coordinate [6/10]: #3, 4
Miss!
Enter X, Y coordinate [7/10]: #6, 5
Invalid coordinates. Try again.
Enter X, Y coordinate [8/10]: #5, 6
Invalid coordinates. Try again.
Enter X, Y coordinate [9/10]: #4, 7
Invalid coordinates. Try again.
Enter X, Y coordinate [10/10]: #7, 4
Invalid coordinates. Try again.
Game over after 10 attempts! Try again next time!
```

> The following keywords and functions are banned from this task, any use of them will lead to a zero mark.

Keywords: `for`, `in`, `import`, `global`, `lambda`, `nonlocal`

Builtin functions: `any`, `all`, `filter`,  `eval`, `locals`, `exec`, `globals`, `map`, `open`, `__import__`, `__contains__`. `enumerate`, `sum`, `min`, `max`

template code:

```python
class Ship:
    def __init__(self, x: int, y: int, name: str) -> None:
        """
        Initialize a ship object with given coordinates and name.

        There are 4 attributes of the the ship:
        x (int): The x coordinate of the ship.
        y (int): The y coordinate of the ship.
        name (str): The name or type of the ship.
        sunk (bool): Indicates whether the ship has sunk.
        """
        
    def got_hit(self):
        """
        Update the status of the ship when it gets hit.
        If the ship is hit, it is marked as sunk.
        """
        
    def has_sunk(self) -> bool:
        """Get the status of the ship"""

    def get_name(self) -> str:
        """Get the name of the ship"""

    def get_coord(self) -> tuple[int, int]:
        """Get the coordinate of the ship"""

    def __repr__(self) -> str:
        """
        Return a formatted string representation of the ship.

        The formatted string includes the ship's name followed by its status:
        - If the ship has sunk, the format is "{name}: Sunk".
        - If the ship hasn't sunk, the format is "{name}: Afloat".
        """

    def create_ships() -> list["Ship"]:
        """Create the following Ships in a list and return the list.

        * ShipA at (1, 4)
        * ShipB at (3, 2)
        * ShipC at (3, 3)
        """


def is_finished(board: list[list[Ship | None]]):
    """
    Check if all ships on the 2D list game board are sunk.
    Return True if all ships are sunk, otherwise False.
    """

def create_board() -> list[list[Ship | None]]:
    """Create a 5x5 2D list representing the game board.

    You should fill all slots with None."""

def main():
    # 1. Create the list of 3 ships
    ships = ...

    # 2. Create the 5x5 board with the function you just completed
    board = create_board()

    # 3. Place your ships in the board with based on their coordinates
    # You will have the following board after you placed your ships.
    # [
    #     [None  , None  , None  , None  , None ],
    #     [None  , None  , None  , None  , ShipA],
    #     [None  , None  , None  , None  , None ],
    #     [None  , None  , ShipB , ShipC , None ],
    #     [None  , None  , None  , None  , None ],
    # ]


    # 4. Continuously prompt the user for input until all ships are sunk
    # or the player has attempted 10 times.
    # Whenever a ship is sunk, update the ship's status accordingly.
    max_attempt = 10 
    print("Game started. Fire at will!")
    while ...:
        user_input = input("Enter X, Y coordinate: ")
        ...

    print("Congratulations! All ships are sunk.")


if __name__ == "__main__":
    main()
```



## Checkpoint 2: Classes and Instances (1pt)

1. Which tutorial exercise demonstrates the varied usage of methods, including those that are independent of the instance and those that depend on specific instances? Give some examples.
2. What are the notable issues when modifying the value of an instance's attribute directly? 
3. In the Battleship game, Which methods are independent of the instance, and which ones are dependent on a specific instance?



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

:::: details Code

::: code-tabs

@tab Code1

```python
class Ship:
    def __init__(self, x: int, y: int, name: str) -> None:
        self.x = x
        self.y = y
        self.name = name
        self.sunk = False

    def got_hit(self):
        self.sunk = True

    def has_sunk(self) -> bool:
        return self.sunk

    def get_name(self) -> str:
        return self.name

    def get_coord(self) -> tuple[int, int]:
        return self.x, self.y

    def __repr__(self) -> str:
        status = "Sunk" if self.sunk else "Afloat"
        return f"{self.name}: {status}"

    @staticmethod
    def create_ships() -> list:
        return [
            Ship(1, 4, "ShipA"),
            Ship(3, 2, "ShipB"),
            Ship(3, 3, "ShipC"),
        ]


def is_finished(board: list):
    row_index = 0
    while row_index < 5:
        col_index = 0
        while col_index < 5:
            if board[row_index][col_index] is not None and not board[row_index][col_index].has_sunk():
                return False
            col_index += 1
        row_index += 1
    return True


def create_board() -> list:
    # return [[None for _ in range(5)] for _ in range(5)]
    board = []
    row = 0
    while row < 5:
        current_row = []
        col = 0
        while col < 5:
            current_row.append(None)
            col += 1
        board.append(current_row)
        row += 1
    return board

def main():
    ships = Ship.create_ships()
    board = create_board()

    # Placing ships on the board
    index = 0
    while index < len(ships):
        ship = ships[index]
        x, y = ship.get_coord()
        board[x-1][y-1] = ship
        index += 1

    attempts = 0
    max_attempts = 10
    print("Game started. Fire at will!")
    while attempts < max_attempts:
        user_input = input(f"Enter X, Y coordinate [{attempts+1}/{max_attempts}]: ")
        try:
            x, y = user_input.split(",")
            x = int(x.strip()) - 1
            y = int(y.strip()) - 1
            if x < 0 or x >= 5 or y < 0 or y >= 5:
                print("Invalid coordinates. Try again.")
            else:
                if board[x][y] is not None:
                    if not board[x][y].has_sunk():
                        board[x][y].got_hit()
                        print(f"You sank {board[x][y].get_name()}!")
                        if is_finished(board):
                            print("Congratulations! All ships are sunk.")
                            return
                    else:
                        print("Miss!")
                        attempts += 1
                else:
                    print("Miss!")
                    attempts += 1
        except ValueError:
            print("Invalid input. Please enter coordinates in X, Y format.")

    if not is_finished(board):
        print("Game over after 10 attempts! Try again next time.")


if __name__ == "__main__":
    main()

```

@tab Code2

```python
# 定义船只类，表示游戏中的单个船只
class Ship:
    # 构造函数，初始化船只的位置、名称和沉没状态
    def __init__(self, x: int, y: int, name: str) -> None:
        self.x = x  # 船只的 x 坐标
        self.y = y  # 船只的 y 坐标
        self.name = name  # 船只的名称
        self.sunk = False  # 船只的沉没状态，初始为未沉没(False)

    # 船只被击中时调用此方法，标记船只为沉没
    def got_hit(self):
        self.sunk = True

    # 返回船只的沉没状态
    def has_sunk(self) -> bool:
        return self.sunk

    # 返回船只的名称
    def get_name(self) -> str:
        return self.name

    # 返回船只的坐标
    def get_coord(self) -> tuple[int, int]:
        return self.x, self.y

    # 用于打印船只对象时的格式化输出
    def __repr__(self) -> str:
        status = "Sunk" if self.sunk else "Afloat"  # 根据沉没状态选择输出
        return f"{self.name}: {status}"

    # 静态方法，创建并返回游戏中的所有船只列表
    @staticmethod
    def create_ships() -> list:
        return [
            Ship(1, 4, "ShipA"),  # 创建并添加 ShipA
            Ship(3, 2, "ShipB"),  # 创建并添加 ShipB
            Ship(3, 3, "ShipC"),  # 创建并添加 ShipC
        ]


# 判断游戏是否结束，即所有船只是否都已沉没
def is_finished(board: list):
    row_index = 0
    while row_index < 5:  # 遍历游戏板的每一行
        col_index = 0
        while col_index < 5:  # 遍历当前行的每一列
            # 如果找到一个未沉没的船只，则游戏尚未结束
            if board[row_index][col_index] is not None and not board[row_index][col_index].has_sunk():
                return False
            col_index += 1
        row_index += 1
    return True  # 所有船只都已经沉没，游戏结束


# 创建游戏板，初始化为 5x5 的空格（None 表示无船只）
def create_board() -> list:
    # return [[None for _ in range(5)] for _ in range(5)]
    board = []
    row = 0
    while row < 5:
        current_row = []
        col = 0
        while col < 5:
            current_row.append(None)
            col += 1
        board.append(current_row)
        row += 1
    return board


# 游戏的主要逻辑
def main():
    ships = Ship.create_ships()  # 创建游戏中的船只
    board = create_board()  # 创建游戏板

    # Placing ships on the board
    # 在游戏板上放置船只
    index = 0
    while index < len(ships):  # 遍历船只列表
        ship = ships[index]
        x, y = ship.get_coord()  # 获取船只坐标
        board[x - 1][y - 1] = ship  # 将船只放置在游戏板的相应位置
        index += 1

    attempts = 0  # 已尝试的次数
    max_attempts = 10  # 最大尝试次数
    print("Game started. Fire at will!")
    while attempts < max_attempts:  # 当尝试次数未达到最大值时循环
        user_input = input(f"Enter X, Y coordinate [{attempts + 1}/{max_attempts}]: ")
        try:
            # 从用户输入中提取 X，Y 坐标
            x, y = user_input.split(",")
            x = int(x.strip()) - 1  # 清理并转换 X 坐标
            y = int(y.strip()) - 1  # 清理并转换 Y 坐标
            # 检查坐标是否有效
            if x < 0 or x >= 5 or y < 0 or y >= 5:
                print("Invalid coordinates. Try again.")
            else:
                if board[x][y] is not None:
                    if not board[x][y].has_sunk():  # 如果击中船
                        board[x][y].got_hit()  # 标记船只为沉没
                        print(f"You sank {board[x][y].get_name()}!")
                        # 如果所有船只都已沉没，结束游戏
                        if is_finished(board):
                            print("Congratulations! All ships are sunk.")
                            return
                    else:
                        print("Miss!")  # 未击中船只
                        attempts += 1
                else:
                    print("Miss!")  # 未击中船只
                    attempts += 1
        except ValueError:
            # 用户输入格式错误
            print("Invalid input. Please enter coordinates in X, Y format.")

    if not is_finished(board):
        # 若尝试次数用完游戏仍未结束，打印游戏结束信息
        print("Game over after 10 attempts! Try again next time.")


if __name__ == "__main__":
    main()

```



::::
