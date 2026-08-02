---
title: SCIF30005：Forest Fire Mini Project
date: 2025-03-14 10:58:32
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

comment: true

backToTop: true
toc: true
---

## Overview

The topic of the project is the forest fire model, a type of cellular automaton which is introduced in the ‘Forest Fire’ video, found on Blackboard under week 19. The rules are briefly explained below, but you should watch the video for a more detailed explanation.

The deadline for submission is 12:30pm, on Wednesday of week 23. You should submit:

- your C++ code
- a 5-6 page report

You will not be penalised for going slightly over the page limit, but if you are significantly over, you should consider whether you are e.g. including more graphs than is necessary to justify your conclusions. You do not need to submit any code used to generate graphs or otherwise post-process your output, or any bash scripts that you may have used.

## Model Rules

A square grid of size $N$ is randomly filled with trees, with probability $p$ that any given cell contains a tree. To start the fire, any living trees in the top row are then set on fire. Then, for each point on the grid at time step $t$:

- any living tree next to a tree which was burning at step $t− 1$ starts burning
- any tree which was burning at step $t− 1$ is now dead
- all other sites stay in the same state (i.e. empty sites remain empty, living trees with no burning neighbours remain alive, dead trees remain dead).

A neighbour is defined as a cell to the left, right, above or below the cell we are interested in, with diagonal cells $not$ considered to be neighbours (i.e. we are using a Von Neumann neighbourhood). The simulation proceeds until no more trees are burning.

## Implementation

You should implement the forest fire model in C++, using $MPI$ to parallelise a $single$ $run$ of the model, i.e. it should be possible to run the code for a single starting grid, grid size $N$ , and probability $p$, while using multiple $MPI$ tasks.

The C++ code should contain the following features:

- the ability to read in an initial grid from a text file, for which an example will be supplied
- the ability to generate a random starting grid of size $N$ with probability $p$
- the ability to average over $M$ independent runs, e.g. for $M$ starting grids which were initialised with different random seeds

- the code should output:
    - the number of steps before the fire stops burning
    - whether or not the fire reached the bottom of the grid
    - the time taken to run a given simulation

You will also need to run the code for different probabilities $p$ and grid sizes $N$ . It is up to you whether you do this within your C++ code (e.g. using a loop over probabilities $p$), or by using a bash script to run your code repeatedly with different inputs.

## Model Convergence

In the video introducing the forest fire model, we talked about convergence with respect to a) the number of random starting grids, $M$ (i.e. the number of repeat runs) and b) the size of the grid, $N$. For example, if you run the code once with a given random starting grid, and then run it again with a different starting grid, the number of steps the simulation runs for may not be the same, even for the same $N$ and $p$ values, due to the effects of randomness. If, however, you run the code $M$ times and average the results, for a large enough value of $M$ the average number of steps taken will no longer change significantly. I.e. for a large enough value of $M$ , further increases in $M$ will result in only negligible changes to the average behaviour. In other words, the model has converged.

For this project, we will focus only on convergence with respect to the number of repeat runs, $M$ . You may use a fixed grid size of $N = 100$. Using your code, you should answer the following questions:

- is $M = 50$ a sufficient number of repeats to reach convergence?
- does the answer depend on the initial probability $p$, and if so, how?

Your answer should be backed up by data, and you should describe how you came to this conclusion,as well as any strengths and/or limitations of your approach. For example, did you have to make any compromises about the number of calculations performed, and given unlimited time, would you therefore do any further calculations?



## Performance Analysis

The final aspect of the project is to explore the parallel performance of the model using BlueCrystal4. For this part of the project, we are not interested in the behaviour of the model itself, only the time taken to complete a run, and how this varies with the number of $MPI$ tasks.

Since the performance is intrinsically linked to the problem size, you should generate timing data for three different values of $N$ :

- $N = 50$
- $N = 100$
- $N = 500$

You may run these calculations using $p = 0.6$, averaging over $M = 50$ runs.

Present and comment on your results, including a discussion of how the grid size influences the performance and why, as well as the metrics you have used to assess the performance (walltime, speedup etc.). State the maximum number of $MPI$ tasks you would use for each of the three grid sizes, and why. Your discussion should also include any factors from your $MPI$ implementation which impact on performance, e.g. your choice of $MPI$ communication scheme and data distribution.

## input_grid.txt

```text
1 0 1 0 1 1
0 1 1 0 0 0
0 0 1 1 1 0
1 1 0 0 0 1
0 0 1 1 0 1
1 1 0 1 0 1
```



## Report

This is a mini project, and so the mark scheme takes into account both technical aspects, i.e. your code, including correctness, use of C++, choice of $MPI$ implementation etc., and how you have used your code to answer the questions, i.e. your report. Make sure you read the instructions carefully and answer all questions in your report. You should also include sufficient data to backup your conclusions,as well as a discussion of any limitations, including potential future work that could be performed to address any of these limitations or extend the project.

代码全在仓库中：[https://github.com/AndersonHJB/SCIF30005-Forest-Fire-Mini-Project](https://github.com/AndersonHJB/SCIF30005-Forest-Fire-Mini-Project)

## Try

### 1. 环境调试

::: code-tabs

@tab mai.h

```bash
brew install openmpi  # 无效
brew install mpich  # 无效
```

@tab MacOS 成功配置

```bash
# 1. 安装 Open MPI
brew install open-mpi
# 2. 检查安装是否成功
mpicc --version
mpirun --version  # 如果命令能正确返回 Open MPI 版本，则安装成功
# 3. 检查 mpi.h 路径
find /usr/local -name "mpi.h" 2>/dev/null
find /opt/homebrew -name "mpi.h" 2>/dev/null  # M1/M2 芯片可能在此路径
# 4. 通常它会安装在：
/usr/local/include/mpi.h  # Intel Mac
/opt/homebrew/include/mpi.h  # Apple Silicon (M1/M2)
```

@tab 编译 MPI 代码

```bash
# 创建一个简单的 MPI C 程序 hello_mpi.c：
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv);
    int rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    printf("Hello from process %d\n", rank);
    MPI_Finalize();
    return 0;
}
# 编译：
mpicc hello_mpi.c -o hello_mpi
# 运行：
mpirun -np 4 ./hello_mpi
```



:::

## V0.1

::: code-tabs

@tab Code

```cpp
#include <mpi.h>
#include <iostream>
#include <fstream>
#include <vector>
#include <cstdlib>
#include <ctime>
#include <cmath>
#include <random>
#include <sstream>

// 状态常量：EMPTY=0, TREE=1, BURNING=2, BURNT=-1(或3亦可)
static const int EMPTY   = 0;
static const int TREE    = 1;
static const int BURNING = 2;
static const int BURNT   = -1;

// 使用的结构体，用于收集某次模拟的结果
struct SimulationResult {
    int steps;
    bool reachedBottom;
    double timeUsed;
};

// 在局部网格里（含边界幽灵行）计算某个格点在下一步的状态
int nextState(int currentState, int up, int down, int left, int right) {
    // 如果当前是树（TREE），并且四邻中任意一个为 BURNING，则该树变为 BURNING
    if (currentState == TREE) {
        if (up == BURNING || down == BURNING || left == BURNING || right == BURNING) {
            return BURNING;
        } else {
            return TREE;
        }
    }
    // 如果当前是 BURNING，则下一步就变成 BURNT
    else if (currentState == BURNING) {
        return BURNT;
    }
    // 其余情况不变（EMPTY 或 BURNT 都保持原样）
    else {
        return currentState;
    }
}

// 从文本文件读入一个 N×N 网格（只在 rank=0 上读）
bool readGridFromFile(const std::string &filename, std::vector<int> &grid, int N) {
    std::ifstream fin(filename.c_str());
    if (!fin.is_open()) {
        return false;
    }
    // 按行列顺序读取
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            int val;
            fin >> val;
            grid[i*N + j] = val;
        }
    }
    fin.close();
    return true;
}

// 根据概率 p 随机生成 N×N 网格
void generateRandomGrid(std::vector<int> &grid, int N, double p, unsigned int seed) {
    std::mt19937 gen(seed);
    std::uniform_real_distribution<double> dist(0.0, 1.0);
    for (int i = 0; i < N*N; i++) {
        double r = dist(gen);
        if (r < p) {
            grid[i] = TREE;
        } else {
            grid[i] = EMPTY;
        }
    }
}

// 在网格顶部点燃所有树
void igniteTopRow(std::vector<int> &grid, int N) {
    for (int j = 0; j < N; j++) {
        if (grid[j] == TREE) {
            grid[j] = BURNING;
        }
    }
}

// 单次模拟（单次 run）：给定初始 grid，在并行环境下进行森林火灾模拟
SimulationResult runSimulationParallel(const std::vector<int> &initialGrid, int N, 
                                       MPI_Comm comm) 
{
    int rank, size;
    MPI_Comm_rank(comm, &rank);
    MPI_Comm_size(comm, &size);

    // 计算行块划分：每个进程负责 localRows 行（除最后一个进程外，可能刚好分配或略有差异）
    int baseRows = N / size;       // 每个进程至少要分多少行
    int remainder = N % size;      // 剩余行数
    int localRows = (rank < remainder) ? (baseRows + 1) : baseRows;

    // 确定本进程实际负责的起始行号和结束行号（在全局坐标系中）
    int startRow = 0;
    for (int r = 0; r < rank; r++) {
        startRow += (r < remainder) ? (baseRows + 1) : baseRows;
    }
    int endRow = startRow + localRows - 1;  // inclusive

    // 分配本地存储空间（localRows * N），以及更新时多出的两行“幽灵行”（ghost rows）
    std::vector<int> currentLocal((localRows+2)*N, EMPTY); 
    std::vector<int> nextLocal((localRows+2)*N, EMPTY);

    // rank=0 收集或持有整个初始网格 initialGrid，将其按行分发给各进程
    // 按照行划分，将对应行发送给各进程
    if (rank == 0) {
        // 先把自己的数据拷贝
        for (int i = 0; i < localRows; i++) {
            for (int j = 0; j < N; j++) {
                currentLocal[(i+1)*N + j] = initialGrid[(startRow + i)*N + j];
            }
        }
        // 给其他进程发送
        for (int r = 1; r < size; r++) {
            int sRow = 0;
            for (int rr = 0; rr < r; rr++) {
                sRow += (rr < remainder) ? (baseRows + 1) : baseRows;
            }
            int lRows = (r < remainder) ? (baseRows + 1) : baseRows;
            if (lRows > 0) {
                MPI_Send(&initialGrid[sRow*N], lRows*N, MPI_INT, r, 0, comm);
            }
        }
    } else {
        // 非 0 号进程接收自己的数据
        MPI_Recv(&currentLocal[N], localRows*N, MPI_INT, 0, 0, comm, MPI_STATUS_IGNORE);
    }

    // 在迭代前，各进程先将自己边界初始化：
    // 幽灵行清空，因为还没有从邻居进程更新过
    // 这里置为 EMPTY 即可，或者保留为 0
    for (int j = 0; j < N; j++) {
        currentLocal[j] = EMPTY; // top ghost row
        currentLocal[(localRows+1)*N + j] = EMPTY; // bottom ghost row
    }

    // 准备开始迭代
    int steps = 0;
    bool fireContinuing = true;  // 是否还存在火在燃烧

    // 记录起始时间
    double tStart = MPI_Wtime();

    // 只要任一进程还有火，就要继续模拟
    while (true) {
        // 先与邻居交换边界行，以获得最新的 BURNING 状态
        // 上邻居
        if (rank > 0) {
            MPI_Send(&currentLocal[N], N, MPI_INT, rank-1, 1, comm);  // 发本地第一行
            MPI_Recv(&currentLocal[0], N, MPI_INT, rank-1, 2, comm, MPI_STATUS_IGNORE); // 收到上幽灵行
        }
        // 下邻居
        if (rank < size - 1) {
            MPI_Send(&currentLocal[localRows*N], N, MPI_INT, rank+1, 2, comm); // 发本地最后一行
            MPI_Recv(&currentLocal[(localRows+1)*N], N, MPI_INT, rank+1, 1, comm, MPI_STATUS_IGNORE);
        }

        // 更新 nextLocal
        for (int i = 1; i <= localRows; i++) {
            for (int j = 0; j < N; j++) {
                int idx = i*N + j;
                int curr = currentLocal[idx];
                // 取四邻
                int up    = currentLocal[idx - N];       // 同列，上一行
                int down  = currentLocal[idx + N];       // 同列，下一行
                int left  = (j > 0) ? currentLocal[idx - 1] : EMPTY;
                int right = (j < N-1) ? currentLocal[idx + 1] : EMPTY;

                nextLocal[idx] = nextState(curr, up, down, left, right);
            }
        }

        // 判断本进程是否还有 BURNING 细胞
        int localBurningCount = 0;
        for (int i = 1; i <= localRows; i++) {
            for (int j = 0; j < N; j++) {
                if (nextLocal[i*N + j] == BURNING) {
                    localBurningCount++;
                }
            }
        }

        // 全局通信，判断是否还有火
        int globalBurningCount = 0;
        MPI_Allreduce(&localBurningCount, &globalBurningCount, 1, MPI_INT, MPI_SUM, comm);

        // 拷贝 nextLocal -> currentLocal
        // 注意保留幽灵行
        for (int i = 1; i <= localRows; i++) {
            for (int j = 0; j < N; j++) {
                currentLocal[i*N + j] = nextLocal[i*N + j];
            }
        }

        steps++;

        // 如果全局没有 BURNING，退出循环
        if (globalBurningCount == 0) {
            break;
        }
    }

    double tEnd = MPI_Wtime();

    // 判断是否到达底部：只需要检查全局“实际最下方那几行”内有没有 BURNT 或 BURNING 的树
    // 但是题目中要求“是否到达底部”，指的是火是否烧到过最底行。我们可以看最终状态最底行是否有 BURNT。
    bool localReachedBottom = false;
    // 本进程若负责 N-1（最后一行），检查那行
    if (endRow == N-1) {
        // endRow 对应的本地行是 (endRow - startRow + 1)
        int localIndex = endRow - startRow + 1; // 本地块里底部行的下标(1-based)
        for (int j = 0; j < N; j++) {
            if (currentLocal[localIndex*N + j] == BURNT) {
                localReachedBottom = true;
                break;
            }
        }
    }

    // 全局 OR
    bool globalReachedBottom = false;
    MPI_Allreduce(&localReachedBottom, &globalReachedBottom, 1, MPI_C_BOOL, MPI_LOR, comm);

    // 汇总结果
    SimulationResult result;
    result.steps = steps;
    result.reachedBottom = globalReachedBottom;
    result.timeUsed = tEnd - tStart;

    return result;
}

// 主函数
int main(int argc, char* argv[]) {
    MPI_Init(&argc, &argv);

    int rank, size;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    // 命令行参数解析（简单示例）：
    // 用法： mpirun -n <np> ./forest_fire N p M seed [input_file(optional)]
    //   N: 网格尺寸
    //   p: 随机生成时，种树的概率
    //   M: 重复运行次数
    //   seed: 随机数种子（用于生成不同网格）
    //   input_file(可选): 如果提供该文件名，则从文件读入初始网格（只执行1次，不会随机）
    if (argc < 5) {
        if (rank == 0) {
            std::cerr << "Usage: mpirun -n <np> ./forest_fire N p M seed [input_file]" << std::endl;
        }
        MPI_Finalize();
        return 1;
    }

    int N = std::atoi(argv[1]);
    double p = std::atof(argv[2]);
    int M = std::atoi(argv[3]);
    unsigned int seed = (unsigned int)std::atoi(argv[4]);
    std::string filename = (argc > 5) ? argv[5] : "";

    // 如果提供了文件名，则仅执行一次模拟，并从文件读入初始网格
    bool useFile = !filename.empty();

    // 准备收集所有重复运行的结果（仅 rank=0 用）
    std::vector<SimulationResult> allResults(M);

    // 如果使用文件输入，就只跑一次，不再做随机多次
    int actualRuns = useFile ? 1 : M;

    // 对每一次独立运行：
    for (int runIdx = 0; runIdx < actualRuns; runIdx++) {

        // rank=0 生成/读入网格
        std::vector<int> grid(N*N, EMPTY);
        if (rank == 0) {
            if (useFile) {
                // 从文件读入初始网格
                bool ok = readGridFromFile(filename, grid, N);
                if (!ok) {
                    std::cerr << "Failed to open or read file: " << filename << std::endl;
                    MPI_Abort(MPI_COMM_WORLD, 1);
                }
            } else {
                // 随机生成
                // 这里为保证多次run不重复，可以加上 (seed + runIdx*12345) 做种子偏移
                generateRandomGrid(grid, N, p, seed + runIdx*12345);
            }
            // 点燃顶部的树
            igniteTopRow(grid, N);
        }

        // 并行运行模拟
        SimulationResult res = runSimulationParallel(grid, N, MPI_COMM_WORLD);

        // 将结果收集到 rank=0
        if (!useFile) {
            // 如果是多次随机运行，需要收集到0进程
            if (rank == 0) {
                allResults[runIdx] = res;
            }
        } else {
            // 如果使用文件输入，只跑一次
            if (rank == 0) {
                allResults[0] = res;
            }
        }
    }

    // 输出结果
    if (rank == 0) {
        // 如果使用文件输入：直接输出那一次的结果
        if (useFile) {
            const SimulationResult &r = allResults[0];
            std::cout << "=== Single run (from file) ===" << std::endl;
            std::cout << "N = " << N << "\n";
            std::cout << "Steps until fire stops = " << r.steps << "\n";
            std::cout << "Fire reached bottom? " << (r.reachedBottom ? "Yes" : "No") << "\n";
            std::cout << "Time used (s) = " << r.timeUsed << "\n";
        } else {
            // 多次随机运行：计算平均步数、烧到底部几次、平均耗时
            double avgSteps = 0.0;
            int bottomCount = 0;
            double avgTime = 0.0;
            for (int i = 0; i < M; i++) {
                avgSteps += allResults[i].steps;
                if (allResults[i].reachedBottom) {
                    bottomCount++;
                }
                avgTime += allResults[i].timeUsed;
            }
            avgSteps /= (double)M;
            avgTime  /= (double)M;

            std::cout << "=== Forest Fire Simulation (MPI) ===" << std::endl;
            std::cout << "N = " << N << ", p = " << p << ", M = " << M << std::endl;
            std::cout << "Average steps until fire stops = " << avgSteps << std::endl;
            std::cout << "Fraction of runs that reached bottom = "
                      << bottomCount << "/" << M << std::endl;
            std::cout << "Average time used (s) = " << avgTime << std::endl;
        }
    }

    MPI_Finalize();
    return 0;
}
```

@tab Makefile

```cpp
# 编译器设置
CXX = mpicxx
CXXFLAGS = -O2 -Wall

# 可执行文件名
TARGET = forest_fire

# 源代码文件
SRC = forest_fire_mpi.cpp

# 生成目标文件
OBJ = $(SRC:.cpp=.o)

# 默认目标
all: $(TARGET)

# 链接生成最终可执行文件
$(TARGET): $(OBJ)
	$(CXX) $(CXXFLAGS) -o $(TARGET) $(OBJ)

# 生成目标文件
%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $<

# 清理编译生成的文件
clean:
	rm -f $(TARGET) $(OBJ)

# 提供帮助
help:
	@echo "Makefile for forest fire simulation with MPI"
	@echo "Usage:"
	@echo "  make       - Build the program"
	@echo "  make clean - Remove the compiled files"
	@echo "  make help  - Show this help message"
```

@tab run

```cpp
mpirun -n 4 ./forest_fire_mpi 6 0.6 1 12345 input_grid.txt
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
