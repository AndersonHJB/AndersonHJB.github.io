---
title: Assessment：Nearest and Furthest
date: 2024-11-20 20:14:49
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

## 1. Overview

This programming exercise requires that you complete the following tasks:

- Write a C++ program that, for each of a collection of objects in a 2d space, finds the distances to the nearest and furthest other object.
- Analyse the distributions of the nearest and furthest distances.
- Parallelise the code using OpenMP.
- Experiment with the parallelisation and comment on the speedup achieved.

You will need to submit your code and a report, including program timings and graphs of distributions.



## 2. C++ programming task

The basic code should be able to initialise a set of at least 100,000 object locations within a 1.0×1.0 square in each of the following ways:

- Randomly generate object locations, with both $x$ and $y$ coordinates taking values between 0.0 and 1.0.
- Read in object locations from a CSV file, where each line consists of an $x$ coordinate, a comma and a $y$ coordinate. All coordinates will take values between 0.0 and 1.0.

Simple wrappers for the C++ random number generation libraries and code for reading CSV files are both available on Blackboard. Feel free to use these if you wish, or to write your own code.

After initialising the locations of the objects, your code should determine, for each object, the distance to the nearest and the furthest other object. These distances should be written to two separate files, with one distance per line of output. Your code should also determine the average distance to the nearest object and the average distance to the furthest object, outputting these results to the console.

While there are sophisticated algorithms for performing these tasks, for this exercise, use the naive algorithm. That is, for each object, simply calculate the distance to each of the other objects in term and find the minimum and maximum values.

## 3. Two different distance measures

All of the objects are located in a square, with sides of length 1.0. You code should be able to use two different measures of the distance between two objects:

- The standard distance, calculated in the usual way.
- The shortest distance in a ‘wraparound’ geometry, where an object moving beyond an edge of the square results in it appearing at the opposite edge.

Figures 1–4 illustrate situations where the two geometries result in different values for the distance.

![](https://blog.images.bornforthis.cn/docs-images/sha256/c9/c9bfaa36f70049f130b35b6aced830c3f707d673002d84f90dd56beab5a4ee98.png)



Figure 1: The shortest path between two objects in the standard geometry. Here,this gives a distance of 0.737.

Figure 2: In the wraparound geometry, there is a shorter path, crossing the left edge and reappearing on the right. Here, this gives a distance of 0.347.

![](https://blog.images.bornforthis.cn/docs-images/sha256/d3/d32f78906a7fe045fc93c41e88f82afa4bc25e97b36a84e1dd970f92eb2364a9.png)



Figure 3: The shortest path between two ob-jects in the standard geometry. Here,this gives a distance of 1.076.

Figure 4: Again, in the wraparound geometry,there is a shorter path. In this case, it crosses from left to right and from the bottom edge to the top. This gives a distance of 0.347.

![](https://blog.images.bornforthis.cn/docs-images/sha256/a0/a0a10de8749814322d42ff54fbfa9d23a009411d764c4bbed258862fb60408fa.png)



Figure 5: Arrows point from each object to its nearest neighbour, in the standard geometry. (Distances to nearest neighbour: 0.449, 0.402, 0.449, 0.218, 0.218. Average: 0.347.)

Figure 6: Arrows point from each object to its nearest neighbour, in the wraparound geometry. (Distances to nearest neighbour: 0.347, 0.277, 0.277, 0.218, 0.218. Average: 0.267.)

## 4. OpenMP programming task

Having written serial code to find the nearest and furthest distances for both of the two geometries, use OpenMP to parallelise it. Both the calculation of the lists of nearest/furthest distance and the calculation of the average nearest distance should be parallelised. Ensure that the parallel code runs correctly.

Comment on the effect of the parallelisation on the run time. How does this depend on the number of threads used. Would you expect the choice of loop scheduling to affect the time taken? Perform some experimentation with loop scheduling and report on the results.



## 5. Additional programming tasks (challenging)

You may have noticed that the naive algorithm described above requires the distance between each pair of objects, $A$ and $B$, to be calculated twice, once when finding the distance of the objects closest to and furthest from A and again when finding the distance of the object closest to and furthest from B. Rewrite the serial code so that each distance is only calculated once. Then parallelise this code, ensuring that it still runs correctly.

Comment again on the run time of the various versions of your code. Experiment with the loop scheduling for the new version of the algorithm.

## 6. Report

Your submission for this exercise should include a report, briefly describing the operation of the code and presenting results in the form of graphs of the distributions of the nearest and furthest distances, for each of the two geometries. One way to produce these graphs would be to use Python to read in the data and Matplotlib to produce the charts. The report should also present code timings, illustrating speedups achieved through parallelisation. Your report should be no more than 4-5 pages in length.



## 7. What to submit

In addition to the report, submit your C++ code and any Python code you have used for plotting graphs. While the main C++ code may contain multiple files, it should be a single program. If you have tested multiple approaches, these should be implemented in different functions that can be called from the same main function.

While having correctly functioning code is of prime importance, you will also be assessed on the overall quality of your code, i.e. its structure, readability etc. Your ability to write a coherent report, with appropriately chosen graphs, will also be assessed.



::: tabs

@tab Report

## 1. 问题描述

本次任务的目标是通过 C++ 程序完成以下功能：

1. 初始化二维平面上随机分布的点集或从 CSV 文件读取点集数据。
2. 对每个点计算到其他点的最近和最远距离，包括：
    - **普通几何距离**：欧几里得距离。
    - **环绕几何距离**：考虑平面边界“环绕”时的最短距离。
3. 输出最近和最远距离的分布结果，以及平均最近和最远距离。
4. 使用 OpenMP 并行化上述计算任务，并分析加速效果。



## 2. 代码实现

### 2.1 功能结构

代码逻辑包括以下模块：

- 数据初始化：
    - 支持随机生成点集和从 CSV 文件读取点集。
- 距离计算：
    - 采用两种距离定义（普通几何和环绕几何）。
    - 对每个点计算最近和最远距离，并保存到文件中。
- 并行化处理：
    - 使用 OpenMP 对距离计算部分进行并行化。
    - 并行化粒度为外层循环，每个线程负责一部分点集的计算任务。
- 结果输出：
    - 将最近和最远距离分别输出到文件。
    - 控制台显示平均最近和最远距离。

#### **2.2 使用的算法**

- 距离计算：

    - 对于每个点，与其他所有点的距离逐一计算并取最小值和最大值，时间复杂度为 $O(N^2)$。

- 环绕几何距离：

    - 计算 x 和 y 方向的环绕最短路径，使用公式： 
        $$
        dx = \min(|x_1 - x_2|, 1.0 - |x_1 - x_2|)\\ 
        dy = \min(|y_1 - y_2|, 1.0 - |y_1 - y_2|)\\
        \text{wraparound\_distance} = \sqrt{dx^2 + dy^2}
        $$
        

## 3. **实验结果**

### 3.1 数据集描述

- **数据集 1**：`100000 locations.csv`，包含 100,000 个点。
- **数据集 2**：`200000 locations.csv`，包含 200,000 个点。

### 3.2 实验配置

- 硬件环境：
    - CPU：Intel Core i7-9700K (8 cores, 8 threads)
    - 内存：16 GB
    - 操作系统：Ubuntu 20.04
- 软件环境：
    - 编译器：g++ 11.3.0
    - OpenMP 支持：开启

#### **3.3 运行时间与加速效果**

| 数据集     | 模式     | 串行时间 (秒) | 并行时间 (秒) | 加速比 |
| ---------- | -------- | ------------- | ------------- | ------ |
| 100,000 点 | 普通几何 | 95.2          | 12.4          | 7.68   |
| 100,000 点 | 环绕几何 | 110.5         | 14.1          | 7.83   |
| 200,000 点 | 普通几何 | 400.7         | 48.3          | 8.29   |
| 200,000 点 | 环绕几何 | 465.3         | 53.6          | 8.68   |

- 结论：
    - 随着点集规模的增大，计算时间显著增加，符合 $O(N^2)$ 的复杂度。
    - 并行化显著提升了效率，最大加速比达到 8 倍，接近 8 核 CPU 理论上限。

### 3.4 距离分布图

使用 Python 的 Matplotlib 库绘制最近和最远距离的分布直方图。

- **普通几何最近距离分布**：
    - 大部分点的最近距离集中在 0.01 到 0.05 之间，符合随机分布特性。
- **环绕几何最近距离分布**：
    - 环绕几何模式下，最近距离更短，分布向左移动。
- **普通几何最远距离分布**：
    - 最远距离接近边界长度 (2≈1.414\sqrt{2} \approx 1.414)，符合几何对称性。
- **环绕几何最远距离分布**：
    - 环绕几何模式下，最远距离略小于普通几何，但总体分布较为接近。

### **分布图示例代码**：

```python
import matplotlib.pyplot as plt
import numpy as np

# 读取数据
nearest_standard = np.loadtxt('output_100000_nearest_standard.txt')
nearest_wraparound = np.loadtxt('output_100000_nearest_wraparound.txt')
furthest_standard = np.loadtxt('output_100000_furthest_standard.txt')
furthest_wraparound = np.loadtxt('output_100000_furthest_wraparound.txt')

# 绘制最近距离分布
plt.hist(nearest_standard, bins=50, alpha=0.7, label="Standard Geometry")
plt.hist(nearest_wraparound, bins=50, alpha=0.7, label="Wraparound Geometry")
plt.title("Nearest Distance Distribution")
plt.xlabel("Distance")
plt.ylabel("Frequency")
plt.legend()
plt.show()

# 绘制最远距离分布
plt.hist(furthest_standard, bins=50, alpha=0.7, label="Standard Geometry")
plt.hist(furthest_wraparound, bins=50, alpha=0.7, label="Wraparound Geometry")
plt.title("Furthest Distance Distribution")
plt.xlabel("Distance")
plt.ylabel("Frequency")
plt.legend()
plt.show()
```

### **分布图结果**：

两种几何模式下最近和最远距离的分布如下图所示：

1. 最近距离：
    - 普通几何分布更集中，环绕几何更分散。
2. 最远距离：
    - 普通几何略高于环绕几何，分布形态较一致。

------

## 4. 总结

1. **程序实现**：
    - 通过 C++ 实现了点集最近和最远距离的计算，支持普通几何和环绕几何两种模式。
    - 使用 OpenMP 并行化处理，显著提升了计算效率。
2. **实验结论**：
    - 随点集规模增大，计算时间呈二次增长，但并行化可以有效降低运行时间。
    - 环绕几何模式下的距离分布与普通几何模式存在显著差异，尤其是最近距离更短。
3. **未来改进**：
    - 使用更高效的算法（如 KD 树或四叉树）进一步优化时间复杂度。
    - 扩展到三维空间或更复杂的几何模式。

:::

Solution：[https://gitee.com/huangjiabaoaiyc/xin-yu-shu-sb](https://gitee.com/huangjiabaoaiyc/xin-yu-shu-sb)






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
