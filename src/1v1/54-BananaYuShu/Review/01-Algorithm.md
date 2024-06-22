---
title: MATH20017KeyConcepts
date: 2023-12-29 16:44:39
author: AI悦创
isOriginal: true
icon: MathOperations
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
---

## Introductory material

The definition of an algorithm

Bachmann-Landau notation. The meaning of ``big O’’, ``big Omega’’, ``big Theta’’ notation. The concepts of ``worst-case’’ and ``asymptotic’’ time-complexity.

Be able to give the asymptotic complexity of simple algorithms involving for loops.

The iterative and recursive formulations of binary search.

Proof of correctness and time complexity bounds for binary search.



## Divide and conquer algorithms

What is a divide and conquer algorithm?

The merge sort algorithm

The counting inversions algorithm

The statement of the master method bound

How to apply the master method to bound the time complexity of an algorithm.

The proof of the master method bound including all three cases. Think very carefully about this proof and what are the key ideas.



## Basic data structures

What is data? What is a data structure?「数据和数据结构是什么？」

- **数据** 是可以通过某种方式存储和操作的任何信息或详情。在计算机科学中，数据通常指的是可以通过算法处理的数值、字符或其他形式的信息。
- **数据结构** 是一种存储和组织数据的方式，以便可以有效地访问和修改数据。它是算法的基础，决定了数据的存储、表示和管理方式。

What are the key operations supported by a dynamic array and their time complexity. 「动态数组的关键操作及其时间复杂度」

- **插入**：平均时间复杂度为 O(1)，但在最坏情况下（例如，数组需要扩容时）为 O(n)。
- **删除**：平均时间复杂度为 O(1)，如果需要移动元素则为 O(n)。
- **访问**：通过索引直接访问任何元素的时间复杂度为 O(1)。

What are the key operations supported by a linked list and what is their time complexity. 「链表的关键操作及其时间复杂度」

- **插入**：在链表头或已知节点之后插入的时间复杂度为 O(1)，但在特定位置插入（需要搜索）的时间复杂度为 O(n)。
- **删除**：删除头节点的时间复杂度为 O(1)，删除特定位置的节点（需要搜索）为 O(n)。
- **搜索**：时间复杂度为 O(n)。

What is the stack data structure and what operations does it support?「栈数据结构及其支持的操作」

- **栈** 是一种后进先出（LIFO）的数据结构。
- 支持的主要操作包括：
    - **push**（入栈）：将元素添加到栈顶，时间复杂度为 O(1)。
    - **pop**（出栈）：移除并返回栈顶元素，时间复杂度为 O(1)。
    - **peek**（查看栈顶元素）：返回栈顶元素但不移除，时间复杂度为 O(1)。

How can you implement a stack data structure via a dynamic array and a linked list.「通过动态数组和链表实现栈」

- **动态数组**：使用数组的末尾作为栈顶，实现 push 和 pop 操作。
- **链表**：使用链表的头部作为栈顶，插入和删除操作都在头部进行，以保证 O(1) 的时间复杂度。

What is the queue data structure and what operations does it support?「队列数据结构及其支持的操作」

- **队列** 是一种先进先出（FIFO）的数据结构。
- 支持的主要操作包括：
    - **enqueue**（入队）：在队尾添加元素，时间复杂度为 O(1)。
    - **dequeue**（出队）：移除并返回队首元素，时间复杂度为 O(1)。
    - **peek**（查看队首元素）：返回队首元素但不移除，时间复杂度为 O(1)。

How can you implement a queue via a linked list which stores the tail node?「通过存储尾节点的链表实现队列」

- 使用链表实现队列时，保持对头节点和尾节点的引用。
- **入队**（enqueue）操作在尾节点进行，**出队**（dequeue）操作在头节点进行。
- 保持尾节点引用使得入队操作的时间复杂度保持为 O(1)。

How can you represent a graph via an adjacency list representation?「通过邻接表表示法表示图」

- 图可以通过一系列的**邻接表**来表示，其中每个节点都对应一个列表，列表中包含与该节点直接相连的所有其他节点。
- 对于无向图，每条边在两个相关节点的列表中各出现一次。
- 对于有向图，边从起点指向终点，只在起点的列表中出现。



## MATH20017_past_exam_J23

### Question 5 (4 marks)

Suppose we have a directed graph $G = (V, E)$ with n = |V| nodes and $m =|E|$ edges. We wish to use a breadth-first-search algorithm to determine all nodes $v \in V$ which are reachable from a source node $s \in V$ .

(i) (2 marks) Use big $O$ notation to describe the worst-case time-complexity of the breadth first search algorithm as a function of $n$ and $m$.

Answer: (i) $O(n + m)$

(ii) (2 marks) Briefly describe an example of a problem which can be solved by adapting the breadth-first-search algorithm.

Answer: Computing shortest paths from an initial node in a directed graph where every edge has unit length, computing connected components. Other answers are also valid.

::: details

这个题目涉及到图论中的广度优先搜索算法（Breadth-First Search, BFS）。

**(i) 时间复杂度**

在这个问题中，我们有一个有向图 $G = (V, E)$，其中 $n = |V|$ 是节点的数量，$$m = |E|$$ 是边的数量。我们使用广度优先搜索算法来确定从源节点 $s \in V$ 可以到达的所有节点 $v \in V$。

对于广度优先搜索算法的最坏情况时间复杂度，使用大 \( O \) 记号表示为 \( O(n + m) \)。这是因为在算法的执行过程中，每个节点和每条边至多被访问一次。对于节点而言，我们需要访问所有的 $n$ 个节点来确定它们是否可达；对于边而言，我们需要考虑所有的 $m$ 条边来从一个节点移动到另一个节点。因此，总的时间复杂度是它们的和，即  $O(n + m)$。

**(ii) 应用实例**

广度优先搜索算法可以适用于多种问题。例子：

- **计算有向图中从初始节点到其他节点的最短路径**：如果图中的每条边都有单位长度，那么广度优先搜索可以用来计算从某个初始节点到图中其他所有节点的最短路径。在这种情况下，算法会逐层（按距离初始节点的边数）遍历所有节点，确保找到的每条路径都是最短的。

除此之外，广度优先搜索也可以用来计算连通分量、实现图的层次遍历等。总的来说，广度优先搜索是解决图相关问题的一个非常有用的工具，特别是在需要按层次或最短路径顺序遍历节点时。

:::

### Question 6 (4 marks)

(i) (2 marks) Which linear classification algorithm identifies the decision boundary which max- imises the geometric margin?

Answer:A support vector machine.

(ii) (2 marks) What technique can we apply to modify this classification algorithm so that it can be effectively applied to problems in which the two classes cannot be separated by linear decision boundary?

Answer: We can use the kernel trick.

::: details

(i) 问：哪种线性分类算法可以确定最大化几何边距的决策边界？

答：支持向量机（Support Vector Machine, SVM）。

支持向量机（SVM）是一种强大的线性分类算法。它的目标是在数据集中找到一个最佳的决策边界（也叫做超平面），这个边界能够最大化不同类别数据点之间的间隔。这种间隔被称为几何边距。SVM 通过最大化边距来提高模型的泛化能力，从而在未见数据上表现更好。

(ii) 问：当两个类别不能通过线性决策边界分开时，我们可以应用什么技术来修改这种分类算法？

答：我们可以使用核技巧（Kernel Trick）。

在处理非线性可分的数据时，核技巧是一种有效的方法。这种技术允许支持向量机在更高维度的空间中处理数据，这样即使在原始空间中数据是非线性可分的，它们在新的高维空间中可能变得线性可分。通过将数据映射到高维空间，核技巧可以帮助 SVM 找到复杂的非线性决策边界。常用的核函数包括高斯径向基函数（RBF），多项式核，和sigmoid核等。

:::

### Question 7 (5 marks)

Suppose we have a directed graph $G=(V, E)$ with nodes $V$ and edges $E$ where $n =|V|$.

(i) (2 marks) What name is given to a function $f:V \rarr {0,\dots,n − 1}$ such that $f(v) < f(w)$ whenever $(v, w)$ is an edge in the graph.

Answer: A topological ordering.

(ii) (3 marks) Give an example of a directed graph in which no function of this form exists. Your example should be a directed graph with no more than three nodes. You can either write down expressions for the set of vertices and the set of edges for your example, or you can draw a diagram.

Answer: Any graph with at least one cycle, e.g. the graph $G=(V,E)$ with $V=\{a,b\}$ and $E = \{(a, b), (b, a)\}$.

::: details

这个题目涉及到有向图和拓扑排序的概念。

(i) 题目问的是：在一个有向图 $G=(V, E)$ 中，节点集为 $V$、边集为 $E$，其中 $n =|V|$。如果存在一个函数  $f:V \rightarrow \{0,\dots,n - 1\}$，使得对于图中的任何一条边 $(v, w)$，都有 $f(v) < f(w)$，那么这个函数被称为什么？

答案是：拓扑排序。拓扑排序是有向图中的一个概念，用于将图中的节点按照先后关系排列，使得对于图中的任何一条从节点 $v$ 到节点  $w$ 的边，$v$ 在排序中都出现在 $w$  之前。

(ii) 题目接着要求提供一个不超过三个节点的有向图的例子，这个图中不存在这样的函数。

答案是：任何含有至少一个循环的图都无法形成这样的函数。例如，可以构造一个有向图 $G=(V,E)$，其中 $V=\{a,b\}$，$E = \{(a, b), (b, a)\}$。这个图中存在一个循环，因为你可以从 $a$ 出发，经过 $b$ 又回到 $a$，因此无法进行拓扑排序。

:::

### Question 8 (5 marks)

(i) (2 marks) Write down the formula for the ReLu (Rectified linear unit) activation function.

Answer: $x \mapsto \max\{x, 0\}$.

(ii) (3 marks) What is the purpose of activation functions in neural networks?

Answer: To introduce non-linearity. Any brief explanation closely related to the idea of non-linearity will suffice.

::: details

(i) ReLU（修正线性单元）激活函数的公式是 $x \mapsto \max\{x, 0\}$。这个函数的作用是将输入值x转换为输出值，其中当 x 为正数或零时，输出 x；当 x 为负数时，输出 0。

(ii) 激活函数在神经网络中的作用主要是引入非线性。如果没有激活函数，无论神经网络有多少层，最终的输出都只是输入的线性组合，这限制了网络处理复杂数据的能力。通过引入非线性激活函数，神经网络能够学习和模拟更加复杂的函数和数据分布，从而提高模型的表达能力和学习能力。简而言之，激活函数使神经网络能够处理非线性问题，增强其在各种任务上的性能和适用性。

:::

### Question 9 (5 marks)

(i) (2 marks) Give an example of a method for unsupervised dimensionality reduction.

Answer: The expected answer is SVD or PCA. Any example of such a technique is fine.

(ii) (3 marks) Briefly describe a possible limitation of using unsupervised dimensionality reduction method as pre-processing step for supervised learning problems.

Answer: Using an unsupervised dimensionality reduction method could lead to us disregarding a useful feature.

::: details

(i) 一个用于无监督降维的方法的例子

答案：期望的答案是奇异值分解（SVD）或主成分分析（PCA）。任何此类技术的例子都是可接受的。

(ii) 简要描述在监督学习问题中使用无监督降维方法作为预处理步骤的可能限制

答案：使用无监督降维方法可能导致我们忽略了一个有用的特征。

### 奇异值分解（SVD）

1. **定义**：奇异值分解是一种线性代数中的因子分解方法。

    它将任何一个矩阵分解为三个特殊矩阵的乘积，即 $A = U\Sigma V^T$，其中: A 是待分解的矩阵， U 和 V 是正交矩阵，$\Sigma$ 是对角矩阵。

2. **应用**：在数据处理中，SVD 常用于噪声数据的降维，推荐系统。

3. **降维方式**：通过保留矩阵 $\Sigma$ 中最大的几个奇异值（和对应的奇异向量），可以实现数据的有效压缩，这样可以去除噪声或不重要的信息，同时保留最重要的数据结构。

### 主成分分析（PCA）

1. **定义**：主成分分析是一种统计方法，通过正交变换将一组可能相关的变量转换成一组线性不相关的变量，这组新的变量称为主成分。

2. **步骤**：PCA 首先计算数据的协方差矩阵，然后找到这个协方差矩阵的特征值和特征向量。数据在这些特征向量定义的新空间中被重新表示，通常只保留对应于最大特征值的特征向量，从而达到降维的目的。

3. **应用**：PCA 广泛用于数据探索和预处理。它可以简化数据的复杂度，同时保留大部分有用信息。

:::



### Question 10 (5 marks)

Suppose we wish to devise a search strategy to solve the problem of searching within a sorted array.

More precisely, we seek a method which takes as input a sorted array $X$ of length $n$ consisting of distinct numerical values, a numerical target $z$, $a$ left index $l$ and a right index

r with $l,r \in \{0,\dots,n-1\}$ and $l \leq r$. Here the numerical values within X are assumed to occur within ascending order. Our function should return a number $i \in \{l,\dots, r\} \cup \{−1\}$  for any input of this form. If there exists an index $i \in  \{l,\dots,r\}$ with $X[i] = z$, then our function should return an index i such an $X[i] = z$. Otherwise, our function should return −1.

Suppose a software engineer proposes the following strategy as a solution:

Strategy 2: search strategy

Input: A length n sorted array X and a target z.

1 l=0 and r=n−1

2 while l $\leq$ r do

3     m = ⌊(l + r)/2⌋

4     if X[m] < z then

5         l=m+1

6     else if X[m] > z then

7         r=m−1

8 return −1.

Our software engineer claims that it should return the correct answer with a worst-case run-time complexity of $O(log(n))$ where n is the length of the array. When we implement the strategy it seems to be taking a very long time to run on some inputs. What, if anything, is wrong with the described strategy?

Answer: The while loop will not terminate if X contains the target z. Indeed, if we ever have X[m] = z then the while loop will have no effect on l or r and hence repeat indefinitely.

::: details

这个问题涉及到在已排序数组中查找特定元素的算法。题目中描述了一种查找策略，我们来详细分析一下。

首先，这个策略是基于二分查找算法的。二分查找算法的基本思想是将数组分为两部分，比较中间值与目标值，然后根据比较结果缩小查找范围，重复这个过程直到找到目标值或确定目标值不存在。这种策略在最坏情况下的时间复杂度是 \(O(\log n)\)，其中 \(n\) 是数组的长度。

在给定的策略中，算法的输入是一个长度为 \(n\) 的已排序数组 \(X\) 和一个目标值 \(z\)。算法初始化两个指针，\(l = 0\) 和 \(r = n - 1\)，分别代表查找范围的左右边界。然后，算法进入一个循环，在 \(l \leq r\) 的条件下执行。在循环内部，计算中点 \(m = \lfloor (l + r) / 2 \rfloor\)，然后根据 \(X[m]\) 与 \(z\) 的比较结果来调整 \(l\) 和 \(r\)。

具体来说：

1. 如果 \(X[m] < z\)，则将 \(l\) 设置为 \(m + 1\)。
2. 如果 \(X[m] > z\)，则将 \(r\) 设置为 \(m - 1\)。

如果循环结束时还没找到目标值，算法返回 \(-1\)。

问题在于，这个策略没有处理 \(X[m] = z\) 的情况。如果 \(X[m]\) 等于目标值 \(z\)，那么循环中的条件不会改变 \(l\) 或 \(r\) 的值，因此会导致无限循环。换句话说，当找到目标值时，算法应该终止并返回相应的索引值 \(m\)。但在给定的策略中，这种情况没有得到妥善处理，从而导致算法在某些输入上运行时间过长。

为了修正这个问题，我们应该在循环中添加一个条件来检查是否 \(X[m] = z\)，如果是，则直接返回 \(m\)。这样就可以确保算法在找到目标值时能够正确终止。

:::

## Section B

### Question 1 (15 marks)

(i) (2 marks) Which data structure stores tuples $(k,v)$, consisting of a numerical key k a value v, and allows for the following two key operations to be performed in $O(log(n))$ time, where n denotes the number of elements currently stored in the data structure?

insert: You can insert a new tuple $(k, v)$ into the data structure.

extract min: You can remove and return an element $(k, v)$ within the data structure with minimal key k.

(ii) (5 marks) Write pseudo-code for an algorithm which leverages this data structure for the array sorting problem. That is, your algorithm should take as input an array X consisting of n distinct numerical values and return an array Z containing the same set of numerical values but in ascending order. Your method should have a worst-case time complexity of $O(n log(n)).$

You may wish to adapt the following template with important details missing.

Algorithm 3: heap_sort (incomplete)

Input: An array X.

h = Heap([]) // initialise an empty data structure

for i = 0 to len(X) − 1 do

​    // details missing here

Z=[] // initialise empty list

for i = 0 to len(X) − 1 do

​    // details missing here

return Z.

(iii) (8 marks) Next, write pseudo-code for an algorithm called qth min sequence which leverages this data structure for the following task: Your algorithm should take as input a length n array $X = [X_0, X_1, X_2,\dots, X_n−1]$ consisting of $n \in \mathbb{N}$ distinct numerical values as well as a natural number $q \in \mathbb{N}$ where $1 \leq q \leq n$. Your algorithm should return a vector $Z = [Z_0,Z_1,\dots,Z_n−q]$ of length $n - q + 1$, where for each $\ell \in \{0,\dots,n − q\}$, the $Z_{\ell}$ is the q-th largest element of the set ${X_0,\dots, X_{\ell+q−1}}$ consisting of the first $\ell + q$ values within the array $X$. Your algorithm should have a worst-case time complexity of $O(nlog(q))$.

Example: Suppose that the input is $X=[5,4,2,7,8,9,2,1,3,10]$ and $q=3$. Then,the $3-rd$ largest element of $[5, 4, 2]$ is 2, the 3-rd largest element of $[5, 4, 2, 7]$ is 4,the 3-rd largest element of $[5,4,2,7,8]$ is 5, the 3-rd largest element of $[5,4,2,7,8,9]$,$[5,4,2,7,8,9,2]$, $[5,4,2,7,8,9,2,1]$ and $[5,4,2,7,8,9,2,1,3]$ is 7, and the 3-rd largest el-ement of $[5, 4, 2, 7, 8, 9, 2, 1, 3, 10]$ is 8. Hence, our algorithm should return the array $Z=[2,4,5,7,7,7,7,8]$. 

You may wish to adapt the following template with important details missing.

Algorithm 4: qth_min_sequence

Input: An array $X$ and a natural number q.

if len(X) < q then

​    return []

h = Heap([]) // initialise an empty data structure

for i = 0 to q − 1 do

​    insert(h,(X[i],0)) // insert into data structure

(qth_max, v) = extract_min(h) // remove and retrieve the q-th largest element

Z = [qth_max] // initialise list with current minimum

for i = q to len(X) − 1 do

​    // details missing here

return Z.

### Answer 1

(i) A min-heap. Other acceptable answers include simply heap, binary heap or priority queue.

(ii) Pseudo-code for the heap sort algorithm:

Algorithm 5: heap_sort

Input: An array X.

h = Heap([]) // initialise an empty heap

for i = 0 to len(X) − 1 do

​    insert(h, (X[i], 0))   // insert into heap. The value 0 is arbitrary

Z=[] // initialise empty list

for i = 0 to len(X) − 1 do

​    (k, v) = extract_min(h) // retrieve i-th minimal element

​    Z.append(k) // add to list

return Z.

(iii) Pseudo-code for returning the sequence of k-th largest elements.

Algorithm 6: qth_min_sequence

Input: An array X and a natural number q.

if len(X) < q then

​    return []

h = Heap([]) // initialise an empty heap

for i = 0 to q − 1 do

​    insert(h,(X[i],0)) // insert into heap

(qth_max, v) = extract_min(h) // remove and retrieve the q-th largest element

Z = [qth_max] // initialise list with current minimum

for i = q to len(X) − 1 do

​    if X[i] < qth_max then

​        Z.append(qth_max) // q-th maximum element is unchanged

​    else

​        insert(h,(X[i],0)) // insert X[i] into heap

​        (qth_max, v) = extract_min(h) // remove and return the q-th largest element

​        Z.append(qth_max) // add to list

return Z.

---

### Question 2 (15 marks)

Suppose that $T$ is the time-complexity of a divide-and-conquer algorithm. Suppose further that there exist parameters $a \in \mathbb{N}, b \in \mathbb{N} \setminus \{1\}$ ,$n_0 \geq b$ and $c > 0$ such that with $T(n) \leq c$ for $n \leq n_0$, and for all $n > n_0$,
$$
T(n) \leq a \cdot T(\left\lceil \frac{n}{b} \right\rceil) + c \cdot n^{\log_b(a)}
$$


(i) (10 marks) Prove that for all $n \in N$ we have 
$$
T(n) \leq c \cdot a^{\lceil \log_b(n) \rceil} \cdot (1 + \lceil \log_b(n) \rceil)
$$
Here you could consider a proof by induction with a base case where $n \leq n_0$.

(ii)(5marks) Deduce that $T(n) \in O(n^{\log_b(a)} \cdot \log(n))$.

### Answer 2









---



## Illustrative answers for MATH20017 mock exam

## Section A

### Question 1 (3 marks)

Name a method for mitigating the curse of dimensionality in high-dimensional regression problems.

Answer: Either regularisation or dimensionality reduction are acceptable answers.



### Question 2 (3 marks)

Give the formula for the hinge loss function used in the soft margin support vector machine.

Answer: The hinge loss function $\ell_{Hinge} : \mathbb{R} \rightarrow \mathbb{R}$ is defined by $\ell_{Hinge}(s) := \max\{0, 1 - s\}$ for $s \in \mathbb{R}$.



### Question 3 (3 marks)

Name an ensemble technique for combining many simple classifiers to tackle a complex classification problem.

Answer: The expected answer is AdaBoost. Other ensemble methods would potentially be acceptable.









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



























