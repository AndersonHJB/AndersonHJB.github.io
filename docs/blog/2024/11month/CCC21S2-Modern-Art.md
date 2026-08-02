---
title: CCC '21 S2 - Modern Art
date: 2024-11-24 09:15:44
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
---

##### Canadian Computing Competition: 2021 Stage 1, Junior #5, Senior #2

A new and upcoming artist has a unique way to create checkered patterns. The idea is to use an $M$-by-$N$ canvas which is initially entirely black. Then the artist repeatedly chooses a row or column and runs their magic brush along the row or column. The brush changes the colour of each cell in the row or column from black to gold or gold to black. Given the artist's choices, your job is to determine how much gold appears in the pattern determined by these choices.

## Input Specification

The first line of input will be a positive integer $M$. The second line of input will be a positive integer $N$. The third line of input will be a positive integer $K$. The remaining input will be $K$ lines giving the choices made by the artist. Each of these lines will either be `R` followed by a single space and then an integer which is a row number, or `C` followed by a single space and then an integer which is a column number. Rows are numbered top down from $1$ to $M$. Columns are numbered left to right from $1$ to $N$.

The following table shows how the available $15$ marks are distributed.

| Subtask |        M        |        N        |       K        |                         Description                          |
| :-----: | :-------------: | :-------------: | :------------: | :----------------------------------------------------------: |
| 1 mark  |      $M=1$      |      $N=1$      |  $K\leq 100$   |      only one cell, and up to 100 choices by the artist      |
| 4 marks |      $M=1$      |   $N\leq100$    |   $K\leq100$   |      only one row, and up to 100 choices by the artist       |
| 5 marks |   $M\leq100$    |   $N\leq100$    |   $K\leq100$   | up to 100 rows, up to 100 columns, and up to 100 choices by the artist |
| 5 marks | $MN\leq5000000$ | $MN\leq5000000$ | $K\leq1000000$ | up to 5000000 cells, and up to 1000000 choices by the artist |

## Output Specification

Output one non-negative integer which is equal to the number of cells that are gold in the pattern determined by the artist's choices.

### Sample Input 1

```java
3
3
2
R 1
C 1
```

### Output for Sample Input 1

```java
4
```

### Explanation of Output for Sample Input 1

After running the brush along the first row, the canvas looks like this:

```java
GGG
BBB
BBB
```

Then after running the brush along the first column, four cells are gold in the final pattern determined by the artist's choices:

```java
BGG
GBB
GBB
```

### Sample Input 2

```java
4
5
7
R 3
C 1
C 2
R 2
R 2
C 1
R 4
```

### Output for Sample Input 2

```java
10
```

### Explanation of Output for Sample Input 2

Ten cells are gold in the final pattern determined by the artist's choices:

```java
BGBBB
BGBBB
GBGGG
GBGGG
```



## Solution

题目要求根据艺术家的操作，计算最终画布上变成金色的格子数。我们可以通过模拟每次操作来解决这个问题。

### 关键思路：

1. **初始状态：** 我们的画布一开始是全黑的，每个格子的初始颜色为黑色（B）。
2. **每次操作：** 有两种操作，分别是选择一行（`R`）或选择一列（`C`）。每个操作会改变对应行或列的所有格子的颜色。如果格子是黑色，就变为金色（G），如果是金色，就变回黑色。
3. **优化：** 为了避免直接操作每个格子，我们可以记录每行和每列被操作的次数。每行或每列操作的次数是奇数次的话，最终该行或列的颜色是反转的，偶数次则没有改变。
4. **计算金色格子：** 最后，我们根据行和列的操作次数来判断每个格子的颜色。通过行和列的操作次数判断是否是金色格子，然后统计金色格子的数量。

### 步骤：

1. 初始化一个数组 `row_ops` 和 `col_ops` 分别记录每行和每列的操作次数。
2. 遍历每次操作，更新 `row_ops`或`col_ops`。
3. 根据行和列的操作次数，判断最终颜色是否为金色。如果行操作次数为奇数，列操作次数为奇数，则该格子为金色。
4. 统计所有金色格子的数量。

::: code-tabs

@tab Code

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 读取输入
        int M = sc.nextInt(); // 行数
        int N = sc.nextInt(); // 列数
        int K = sc.nextInt(); // 操作次数

        // 记录每一行和每一列的操作次数
        int[] row_ops = new int[M];
        int[] col_ops = new int[N];

        // 读取每个操作
        for (int i = 0; i < K; i++) {
            String type = sc.next(); // 操作类型 ("R" 或 "C")
            int index = sc.nextInt() - 1; // 行或列的索引（0-based）

            if (type.equals("R")) {
                row_ops[index]++; // 该行操作次数加1
            } else if (type.equals("C")) {
                col_ops[index]++; // 该列操作次数加1
            }
        }

        // 计算金色格子的数量
        int goldCells = 0;

        // 遍历所有格子，判断其是否是金色
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                // 判断该格子是否是金色
                if ((row_ops[i] + col_ops[j]) % 2 == 1) {
                    goldCells++; // 该格子是金色的，计数
                }
            }
        }

        // 输出结果
        System.out.println(goldCells);
    }
}
```

@tab Code2

```java
import java.util.Scanner;

public class CheckeredPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        // 输入 M, N, K
        int M = sc.nextInt();
        int N = sc.nextInt();
        int K = sc.nextInt();
        
        // 初始化行列翻转次数数组
        int[] row_flips = new int[M];
        int[] col_flips = new int[N];
        
        // 处理 K 次操作
        for (int i = 0; i < K; i++) {
            String type = sc.next();
            int index = sc.nextInt() - 1; // 输入行列的索引是从1开始，所以要减去1
            
            if (type.equals("R")) {
                row_flips[index]++; // 记录第 index 行翻转次数
            } else if (type.equals("C")) {
                col_flips[index]++; // 记录第 index 列翻转次数
            }
        }
        
        // 计算金色单元格数量
        int goldCells = 0;
        
        // 遍历每个单元格，判断是否是金色
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                // 如果行翻转次数和列翻转次数的和是奇数，则该单元格为金色
                if ((row_flips[i] + col_flips[j]) % 2 == 1) {
                    goldCells++;
                }
            }
        }
        
        // 输出结果
        System.out.println(goldCells);
    }
}
```

@tab 打印格子的状态

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 读取输入
        int M = sc.nextInt(); // 行数
        int N = sc.nextInt(); // 列数
        int K = sc.nextInt(); // 操作次数

        // 创建一个 M x N 的画布，初始状态全是 'B'
        char[][] canvas = new char[M][N];
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                canvas[i][j] = 'B'; // 初始全部是黑色
            }
        }

        // 读取每个操作
        for (int i = 0; i < K; i++) {
            String type = sc.next(); // 操作类型 ("R" 或 "C")
            int index = sc.nextInt() - 1; // 行或列的索引（0-based）

            if (type.equals("R")) {
                // 执行行操作
                for (int j = 0; j < N; j++) {
                    canvas[index][j] = (canvas[index][j] == 'B') ? 'G' : 'B'; // 改变颜色
                }
            } else if (type.equals("C")) {
                // 执行列操作
                for (int j = 0; j < M; j++) {
                    canvas[j][index] = (canvas[j][index] == 'B') ? 'G' : 'B'; // 改变颜色
                }
            }

            // 打印当前画布状态
            System.out.println("After operation " + (i + 1) + ":");
            for (int j = 0; j < M; j++) {
                System.out.println(new String(canvas[j]));
            }
            System.out.println(); // 输出空行，方便分隔
        }

        // 计算金色格子的数量
        int goldCells = 0;
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                if (canvas[i][j] == 'G') {
                    goldCells++;
                }
            }
        }

        // 输出金色格子的数量
        System.out.println(goldCells);
    }
}
```

:::











欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
