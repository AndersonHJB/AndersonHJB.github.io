---
title: TicTacToe Code
date: 2024-04-12 08:21:17
icon: time
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true

prev: false
next: false
backToTop: true
toc: true
---

你好，我是悦创。

下面的是井字棋的代码：

::: code-tabs

@tab V1.0

```java
import java.util.Scanner;

public class TicTacToe {
    // 主函数
    public static void main(String[] args) {
        // 初始化棋盘，使用二维数组表示。' ' 表示空格，'|' 和 '+' 表示棋盘的分隔线
        char[][] board = {
                {' ', '|', ' ', '|', ' '},
                {'-', '+', '-', '+', '-'},
                {' ', '|', ' ', '|', ' '},
                {'-', '+', '-', '+', '-'},
                {' ', '|', ' ', '|', ' '}
        };
        printBoard(board); // 打印初始棋盘

        Scanner scanner = new Scanner(System.in); // 创建Scanner对象，用于读取玩家输入

        System.out.println("Welcome to Tic Tac Toe!");
        System.out.println("Player X and Player O, please place your marks on the board.");
        System.out.println();

        char currentPlayerMark = 'X'; // 设置当前玩家标记，默认从'X'开始

        // 游戏主循环，最多9轮（井字棋棋盘9个格子）
        while (true) {
            System.out.println("Player " + currentPlayerMark + ", enter your move (1-9):");
            int move = scanner.nextInt(); // 读取玩家的移动

            // 检查玩家选择的位置是否有效
            if (isValidMove(board, move)) {
                // 更新棋盘
                updateBoard(board, move, currentPlayerMark);
                printBoard(board); // 打印更新后的棋盘

                // 检查是否胜利
                if (isWin(board)) {
                    System.out.println("Player " + currentPlayerMark + " wins!");
                    break; // 跳出循环，结束游戏
                } else if (isTie(board)) {
                    // 检查是否平局
                    System.out.println("The game is a tie!");
                    break; // 跳出循环，结束游戏
                }

                // 切换玩家
                currentPlayerMark = (currentPlayerMark == 'X') ? 'O' : 'X';
            } else {
                // 如果移动无效（位置已被占用或不在范围内），提示玩家重新输入
                System.out.println("Invalid move, the position is already taken or out of range. Please try again.");
            }
        }
    }

    // 打印棋盘的方法
    public static void printBoard(char[][] board) {
        for (char[] row : board) {
            for (char c : row) {
                System.out.print(c);
            }
            System.out.println();
        }
    }

    // 检查移动是否有效（即选择的位置是否为空）的方法
    public static boolean isValidMove(char[][] board, int move) {
        switch (move) {
            case 1: return board[0][0] == ' ';
            case 2: return board[0][2] == ' ';
            case 3: return board[0][4] == ' ';
            case 4: return board[2][0] == ' ';
            case 5: return board[2][2] == ' ';
            case 6: return board[2][4] == ' ';
            case 7: return board[4][0] == ' ';
            case 8: return board[4][2] == ' ';
            case 9: return board[4][4] == ' ';
            default: return false; // 对于超出1-9范围的输入，返回false
        }
    }

    // 更新棋盘的方法，将当前玩家的标记放在选择的位置上
    public static void updateBoard(char[][] board, int move, char currentPlayerMark) {
        switch (move) {
            case 1: board[0][0] = currentPlayerMark; break;
            case 2: board[0][2] = currentPlayerMark; break;
            case 3: board[0][4] = currentPlayerMark; break;
            case 4: board[2][0] = currentPlayerMark; break;
            case 5: board[2][2] = currentPlayerMark; break;
            case 6: board[2][4] = currentPlayerMark; break;
            case 7: board[4][0] = currentPlayerMark; break;
            case 8: board[4][2] = currentPlayerMark; break;
            case 9: board[4][4] = currentPlayerMark; break;
        }
    }

    // 检查是否胜利的方法
    public static boolean isWin(char[][] board) {
        // 检查所有可能的胜利情况（横线、竖线、对角线）
        return (checkRowsForWin(board) || checkColumnsForWin(board) || checkDiagonalsForWin(board));
    }

    // 检查是否平局的方法
    public static boolean isTie(char[][] board) {
        // 如果棋盘上没有空位，则为平局
        for (int i = 0; i < board.length; i += 2) { // 只检查实际游戏格子，跳过分隔线
            for (int j = 0; j < board[i].length; j += 2) {
                if (board[i][j] == ' ') {
                    return false; // 还有空位，游戏继续
                }
            }
        }
        return true; // 没有空位，游戏平局结束
    }

    // 检查行是否胜利
    private static boolean checkRowsForWin(char[][] board) {
        for (int i = 0; i < board.length; i += 2) {
            if (board[i][0] != ' ' && board[i][0] == board[i][2] && board[i][2] == board[i][4]) {
                return true; // 发现有一行三个相同的非空标记，即胜利
            }
        }
        return false;
    }

    // 检查列是否胜利
    private static boolean checkColumnsForWin(char[][] board) {
        for (int j = 0; j < board[0].length; j += 2) {
            if (board[0][j] != ' ' && board[0][j] == board[2][j] && board[2][j] == board[4][j]) {
                return true; // 发现有一列三个相同的非空标记，即胜利
            }
        }
        return false;
    }

    // 检查对角线是否胜利
    private static boolean checkDiagonalsForWin(char[][] board) {
        // 检查两个对角线
        return (board[0][0] != ' ' && board[0][0] == board[2][2] && board[2][2] == board[4][4]) ||
               (board[0][4] != ' ' && board[0][4] == board[2][2] && board[2][2] == board[4][0]);
    }
}
```

@tab 学生自己写

```java
import java.util.Scanner;
public class tictac {
    public static void main(String[] args) {
        char[][] board = {
                {' ', '|', ' ', '|', ' '},
                {'-', '+', '-', '+', '-'},
                {' ', '|', ' ', '|', ' '},
                {'-', '+', '-', '+', '-'},
                {' ', '|', ' ', '|', ' '}
        };
        printBoard(board);
        Scanner scanner = new Scanner(System.in);

        System.out.println("Hello, " +
                "Please pick X or O as your game piece and place your choice on the board!");
        System.out.println();
        char currentPlayerMark = 'X';

        for (int plays = 1; plays <= 9; plays++) {
            int play;
            boolean validPlay;
            do {
                System.out.println("Player " + currentPlayerMark + ", enter your pick (1-9):");
                play = scanner.nextInt();
                validPlay = false;

                switch (play) {
                    case 1:
                        if (board[0][0] == ' ') {
                            board[0][0] = currentPlayerMark;
                            validPlay = true;
                        }
                        break;
                    case 2:
                        if (board[0][2] == ' ') {
                            board[0][2] = currentPlayerMark;
                            validPlay = true;
                        }
                        break;
                    case 3:
                        if (board[0][4] == ' ') {
                            board[0][4] = currentPlayerMark;
                            validPlay = true;
                        }
                        break;
                    case 4:
                        if (board[2][0] == ' ') {
                            board[2][0] = currentPlayerMark;
                            validPlay = true;
                        }
                        break;
                    case 5:
                        if (board[2][2] == ' ') {
                            board[2][2] = currentPlayerMark;
                            validPlay = true;
                        }
                        break;
                    case 6:
                        if (board[2][4] == ' ') {
                            board[2][4] = currentPlayerMark;
                            validPlay = true;
                        }
                        break;
                    case 7:
                        if (board[4][0] == ' ') {
                            board[4][0] = currentPlayerMark;
                            validPlay = true;
                        }
                        break;
                    case 8:
                        if (board[4][2] == ' ') {
                            board[4][2] = currentPlayerMark;
                            validPlay = true;
                        }
                        break;
                    case 9:
                        if (board[4][4] == ' ') {
                            board[4][4] = currentPlayerMark;
                            validPlay = true;
                        }
                        break;
                    default:
                        System.out.println("Invalid input. Please select a number between 1-9.");
                }
                if (!validPlay) {
                    System.out.println("stupid try again");
                }
            } while (!validPlay);

            printBoard(board);

            if (board[0][0] != ' ' && board[0][0] == board[0][2] && board[0][2] == board[0][4]) {
                if (board[0][0] == 'X') {
                    System.out.println("X wins!");
                } else {
                    System.out.println("O wins!");
                }
                break;
            }
            if (board[2][0] != ' ' && board[2][0] == board[2][2] && board[2][2] == board[2][4]) {
                if (board[2][0] == 'X') {
                    System.out.println("X wins!");
                } else {
                    System.out.println("O wins!");
                }
                break;
            }
            if (board[4][0] != ' ' && board[4][0] == board[4][2] && board[4][2] == board[4][4]) {
                if (board[4][0] == 'X') {
                    System.out.println("X wins!");
                } else {
                    System.out.println("O wins!");
                }
                break;
            }

// Check vertically
            if (board[0][0] != ' ' && board[0][0] == board[2][0] && board[2][0] == board[4][0]) {
                if (board[0][0] == 'X') {
                    System.out.println("X wins!");
                } else {
                    System.out.println("O wins!");
                }
                break;
            }
            if (board[0][2] != ' ' && board[0][2] == board[2][2] && board[2][2] == board[4][2]) {
                if (board[0][2] == 'X') {
                    System.out.println("X wins!");
                } else {
                    System.out.println("O wins!");
                }
                break;
            }
            if (board[0][4] != ' ' && board[0][4] == board[2][4] && board[2][4] == board[4][4]) {
                if (board[0][4] == 'X') {
                    System.out.println("X wins!");
                } else {
                    System.out.println("O wins!");
                }
                break;
            }

// Check diagonally
            if (board[0][0] != ' ' && board[0][0] == board[2][2] && board[2][2] == board[4][4]) {
                if (board[0][0] == 'X') {
                    System.out.println("X wins!");
                } else {
                    System.out.println("O wins!");
                }
                break;
            }
            if (board[0][4] != ' ' && board[0][4] == board[2][2] && board[2][2] == board[4][0]) {
                if (board[0][4] == 'X') {
                    System.out.println("X wins!");
                } else {
                    System.out.println("O wins!");
                }
                break;
            }
            if (board[2][0] != ' ' && board[0][0] == board[0][2] && board[0][2] == board[0][4]) {
                if (board[0][0] == 'X') {
                    System.out.println("X wins!");
                } else {
                    System.out.println("O wins!");
                }
                break;
            }

            currentPlayerMark = (currentPlayerMark == 'X') ? 'O' : 'X';

            if (board[0][0] != ' ' && board[0][2] != ' ' && board[0][4] != ' ' &&
                    board[2][0] != ' ' && board[2][2] != ' ' && board[2][4] != ' ' &&
                    board[4][0] != ' ' && board[4][2] != ' ' && board[4][4] != ' ') {
                System.out.println("It's a tie!");
            }
        }
    }

    public static void printBoard(char[][] board) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                System.out.print(board[i][j]);
            }
            System.out.println();
        }
    }
}
```

:::











欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
