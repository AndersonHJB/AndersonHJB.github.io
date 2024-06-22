---
title: Assessed coursework 4
date: 2023-11-24 23:09:13
author: AI悦创
isOriginal: true
category: 
    - 英国-布里斯托尔
tag:
    - 英国-布里斯托尔
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

## Introduction

This document contains the questions for Part 3 of your assessed coursework for the unit Algorithms and Machine Learning (MATH20017). The marks for this coursework will count 10% towards your final grade.

Please contact henry.reeve@bristol.ac.uk with any questions regarding this document. Whilst I am unable to provide solutions in advance of all work being handed in, I can provide clarification.

The contents of this document should **not** be distributed without permission.

There are 5 sections to this coursework and you are encouraged to attempt to complete all sections.



## Handing in your coursework

How you present your coursework is important. You should complete your coursework using either Google Colab, a Jupyter notebook, or an Rmarkdown. Whichever approach you take you must submit both (1) the notebook itself (typically either a .ipynb file or a .rmd file) and (2) an HTML file in which all of the blocks of code have been run. If in doubt, use the the suggested approach described in Assessed Coursework 1.

Important: Ensure that you use the correct format to submit your report as failure to do so can lead to a substantial loss of marks.

## Section A (20 marks)

We begin with by implementing an adjacency list data structure for representing a graph.

```python
class GraphNode:
    # simple graph node class for adjacency list representation
    def __init__(self, name):
        self.name = name
        self.adjacency_list = []
    def __lt__(self, other):
        return True
    def __le__(self, other):
        return True
    
class GraphEdge:
    # graph edge class with from and to nodes
    def __init__(self, from_node, to_node):
        self.from_node = from_node
        self.to_node = to_node
        
class Graph:
    # simple graph class for adjacency list representation
    def __init__(self):
        self.num_nodes = 0
        self.num_edges = 0
        self.node_array = []
        self.node_dictionary = {}
    def add_node(self,name):
        new_node = GraphNode(name)
        self.node_array.append(new_node)
        self.node_dictionary[name] = new_node
        self.num_nodes += 1
        
    def print_nodes(self):
        if self.num_nodes == 0:
            print("Empty graph")
            
        for i in range(self.num_nodes):
            print(self.node_array[i].name)
            
    def add_edge_by_node(self, from_node, to_node):
        from_node.adjacency_list.append(GraphEdge(from_node,to_node))
        self.num_edges += 1
        
    def add_edge(self, from_name, to_name):
        from_node = self.node_dictionary[from_name]
        to_node = self.node_dictionary[to_name]
        self.add_edge_by_node(from_node, to_node)
        
    def print_graph(self):
        if self.num_nodes == 0:
            print("Empty graph")
            return
        print("The graph structure is:")
        
        for i in range(self.num_nodes):
            node = self.node_array[i]
            print("{node} : {direct_descendants}".format(node=node.name, direct_descendants=[edge.to_node.name for edge in node.adjacency_list]))
```

We also introduce a function `graph_from_adjacency_matrix` which takes as input a length $n$ list of strings called `names_array` and an $n \times n$  matrix `adjacency_matrix` represented as a two-dimensional NumPy array where all entries are either 0 or 1. We view `names_array` as a list of names for nodes in a graph and `adjacency_matrix` an adjacency matrix for that graph. Hence, `adjacency_matrix[i,j]=1` if there is an edge between the node names `names_array[i]` and that with name `names_array[j]`, and `adjacency_matrix[i,j]=0` if there is no such edge. The function takes `names_array` and `adjacency_matrix` as inputs and return the corresponding graph data structure as an object belonging to the Graph class.

```python
import numpy as np

def graph_from_adjacency_matrix(names_array:list, adjacency_matrix:np.array):
    # function which takes as input a name vector and an adjacency matrix
    # and returns a Graph with adjacency list representation
    
    # check inputs
    n = len(names_array)
    if adjacency_matrix.shape != (n, n):
        print("Incongruent inputs")
        return None
    # initialise graph
    G = Graph()
    
    # add nodes with names given in name vector
    for name in names_array:
        G.add_node(str(name))
        
    # add edges based upon adjacency matrix
    for i in range(len(names_array)):
        for j in range(len(names_array)):
            if adjacency_matrix[i, j] > 0:
                G.add_edge(str(names_array[i]), str(names_array[j]))
    return G
```

We then check performance based upon the test cases:

```python
import numpy as np
np.random.seed(2023) # set random seed

adj_mat = np.random.choice([0, 1], size=(5,5), p=[1./3, 2./3])
names_v = ("Alpha", "Beta", "Gamma", "Delta", "Epsilon")

G = graph_from_adjacency_matrix(names_v, adj_mat)
G.print_graph()
```

```python
## The graph structure is:
## Alpha : ['Beta', 'Gamma']
## Beta : ['Alpha', 'Gamma', 'Delta', 'Epsilon']
## Gamma : ['Alpha', 'Beta', 'Gamma', 'Epsilon']
## Delta : ['Beta', 'Delta']
## Epsilon : ['Alpha', 'Delta']
```

Recall that by default, the Graph class represents directed graphs. However, we can also use objects from this class to represent undirected graphs.Recall that for an undirected graph $G=(V,E)$ each edge $e=\{x,y\}$ corresponds to a set of two distinct nodes $x,y \in V$ . Unlike directed graphs, for undirected graphs there is no ordering between the nodes for a specific edge. We can represent an undirected graph $G=(V,E)$ via an associated directed graph $\tilde{G}=(\tilde{V}, \tilde{E})$ with the same set of nodes $\tilde{V}=V$ and for each undirected edge $e=\{x,y\}=\{y,x\} \in E$ we include both of the corresponding directed edges $\tilde{e}_0=(x,y)$ (from $x$ to $y$) and $\tilde{e}_1=(y,x)$ (from $y$ to $x$) in the set $\tilde{E}$. As an example, consider an undirected graph $G=(V,E)$ with $V=\{a,b,c,d\}$ and $E=\{\{a,b\},\{b,c\},\{a,c\}\}$. We can represent $G$ via the directed graph $\tilde{G}=(\tilde{V},\tilde{E})$ where $\tilde{V}=V$ and $\tilde{E}=\{(a,b),(b,a),(b,c),(c,b),(a,c),(c,a)\}$.Note that this representation doubles the number of edges. We use the adjacency list representation within the class Graph for the associated graph $\tilde{G}=(\tilde{V},\tilde{E})$ to represent the undirected graph $G=(V,E)$.

Note that graphs of this form correspond to symmetric adjacency matrices with zeros along the diagonal (since there are no self-edges in an undirected graph). The following code can be used to create a random adjacency matrix of this form:

```python
def generate_random_symmetric_matrix_zero_diagonal(n:int, prob:float) -> np.array:
    vect = np.random.choice([0, 1], size=(n*(n-1)//2), p=[1-prob,prob])
    out_mat = np.zeros((n,n))
    k = 0
    for i in range(n):
        for j in range(i+1, n):
            out_mat[i, j] = vect[k]
            out_mat[j, i] = vect[k]
            k += 1
    return out_mat
```

Hence, we can generate a representation for a random undirected graph as follows:

```python
import numpy as np
np.random.seed(2023) # set random seed

num_nodes = 6
symmetric_adj_mat = generate_random_symmetric_matrix_zero_diagonal(num_nodes, 0.4)
names_v = [chr(ord('A') + i) for i in range(num_nodes)]
print(symmetric_adj_mat)
```

```python
## [[0. 0. 1. 0. 0. 0.] 
## [0.0.0.0.1.0.] 
## [1.0.0.0.0.0.] 
## [0.0.0.0.0.0.] 
## [0.1.0.0.0.0.] 
## [0. 0. 0. 0. 0. 0.]]
```

```python
G = graph_from_adjacency_matrix(names_v, symmetric_adj_mat)
G.print_graph()
```

```python
## The graph structure is:
## A : ['C']
## B : ['E']
## C : ['A']
## D : []
## E : ['B']
## F : []
```

We now consider the problem of computing the number of connected components in an undirected graph.

Recall that given an undirected graph $G=(V,E)$, and given a node $u \in V$ , the connected component $S(u)$ is the set of all nodes $w \in V$ such that there is a path from $u$ to $w$.

**(Q1)** Write a function called `number_connected_components_bfs` which adapts ideas from the breadth-first-search algorithm to compute the number of connected components in an undirected graph. Your function should take as input the graph object $G$ belonging to the Graph class implemented corresponding to an undirected graph. In particular, this means that given any pair of nodes $x,y \in V$ there exists an edge from $x$ to $y$ if and only if there is an edge from $y$ to $x$. Your function should return an integer corresponding to the number of distinct connected components.

You are encouraged to make use of the Python deque data structure.

```python
from collections import deque
```

You can use the following incomplete code as a starting point.

```python
def number_connected_components_bfs(graph:Graph, print_val:bool=False) -> int:
    # initialisation
    num_connected_components = 0
    for node in graph.node_array:
        node.visited = False
    current_connected_components_lists = []
    
    # iterate over node array
    for node in graph.node_array:
        ### remove pass and add in details
        pass
    return num_connected_components
```

Apply your function to the graph generated previously.

```python
print("The number of connected components is "+ str(number_connected_components_bfs(G)))
```

```python
## The number of connected components is 4
```

**(Q2)** write a function called `number_connected_components_dfs` which adapts ideas from the depth-first-search algorithm to compute the number of connected components in an undirected graph.

```python
def number_connected_components_dfs(graph:Graph, print_val:bool=False) -> int:
    pass ### remove pass and add in details
```

Apply your function to the graph generated previously.

```python
print("The number of connected components is "+ str(number_connected_components_dfs(G)))
```

```python
## The number of connected components is 4
```

**(Q3)** In the final task in this question is to create a function `compute_number_lakes`. Your function will take as input an $n \times n$ NumPy matrix consisting of zeroes and ones called `grid_map` and output an non-negative integer.

For each $(i,j) \in {0,...,n-1}$, `grid_map[i,j]` corresponds to square metre on a map with the interpretation that `grid_map[i,j]=0` means that the corresponding square metre is mostly water, and `grid_map[i,j]=1` means that the corresponding square metre is mostly land. The outer square of our grid map will consist entirely of land,i.e. `grid_map[i,j]=1` whenever $i \in {0,n-1}$ or $j \in {0, n−1}$. We shall assume that a fish can occupy a grid square $(i,j) \in \{0,...,n-1\}^2$ if and only if the corresponding square metre is mostly water `grid_map[i,j]=0`. A fish can also move from any grid square $(i,j)\in \{0,...,n − 1\}^2$ they are currently occupying to any of the grid squares $(i$′,$j$′) $\in \{(i-1,j),(i+1,j),(i,j-1),(i,j+1)\}$, provided that the corresponding square metre is also mostly water `grid_map[i',j']=0`. Thus, the fish can move directly to any grid square which is` "up"`,`"down"`,`"left"` or `"right"`, but not along the diagonal. We then define a lake as a maximal collection of grid squares $(i,j) \in \{0,...,n-1\}^2$ consisting of mostly water `grid_map[i,j]=0`, such that a fish can move from one grid square in the lake to any other grid square in the lake. Your function `compute_number_lakes` should take as input the matrix `grid_map` and output the total number of lakes.

You may wish to start with the following outline code.

```python
def compute_number_lakes(grid_map):
    n=grid_map.shape[0]
    if grid_map.shape[0] != grid_map.shape[1]:
        print("The grid map must be a square array")
        return None
    # initialise lake graph
    lake_graph = Graph()
    # add additional steps to construct graph
    # apply a connected component counting function to the graph
    return number_connected_components_bfs(lake_graph)
```

To test our function `compute_number_lakes` we shall make use of the following function produces random grid maps of the required format. Don’t worry about the details of this function itself.

```python
from scipy import signal

def random_grid_map(grid_width, land_propensity=0.5,interaction_strength=2):
    # generate random grid map
    grid_map=np.random.choice([0, 1], size=(grid_width,grid_width), p=[land_propensity, 1-land_propensity])
    grid_map = (1.5-signal.convolve2d(grid_map, np.ones((interaction_strength,interaction_strength)))/(interaction_strength*interaction_strength)).astype(int)
    
    # ensure outer squares are all land
    grid_map[0, :] = 1
    grid_map[-1,:] = 1
    grid_map[:,0] = 1
    grid_map[:, -1] = 1
    return grid_map
```

We generate a random grid map and test our `compute_number_lakes` function as follows:

```python
np.random.seed(2023) # set random seed
grid_map = random_grid_map(10)
print("The grid map looks as follows:")
```

```python
## The grid map looks as follows:
```

```python
print(grid_map)
```

```python
## [[1 1 1 1 1 1 1 1 1 1 1] 
## [11011111111] 
## [11111111111] 
## [10111111111] 
## [11000001011] 
## [11001111111] 
## [10011111101] 
## [10111111001] 
## [10111111001] 
## [10010011101] 
## [11111111111]]
```

```python
print("By applying our function we see that there are {num_lakes} lakes.".format(num_lakes=compute_number_lakes(grid_map)))
```

```python
## By applying our function we see that there are 6 lakes.
```

As we can see, by inspecting the matrix or by applying our function, in this example there are six lakes.

Now apply your `compute_number_lakes` function to the following test cases as follows:

```python
np.random.seed(2023) # set random seed

num_lakes_list = []

for i in range(10):
    grid_map = random_grid_map(100, interaction_strength=10)
    num_lakes_list.append(compute_number_lakes(grid_map))
print(num_lakes_list)
```

## Solution A

### Q1

```python
from collections import deque

def number_connected_components_bfs(graph: Graph, print_val: bool = False) -> int:
    # 初始化连通分量计数器
    num_connected_components = 0

    # 遍历图中的每个节点，将它们的访问状态设为未访问
    for node in graph.node_array:
        node.visited = False

    # 初始化一个列表来存储每个连通分量中的节点名称
    current_connected_components_lists = []
    
    # 再次遍历图中的每个节点
    for node in graph.node_array:
        # 如果当前节点尚未被访问
        if not node.visited:
            # 初始化当前连通分量的列表
            current_component = []
            # 使用队列进行BFS
            queue = deque([node])
            # 标记当前节点为已访问
            node.visited = True

            # 当队列不为空时
            while queue:
                # 从队列中弹出一个节点
                current_node = queue.popleft()
                # 将这个节点添加到当前连通分量列表中
                current_component.append(current_node.name)

                # 遍历当前节点的所有邻居
                for edge in current_node.adjacency_list:
                    neighbor = edge.to_node
                    # 如果邻居节点未被访问
                    if not neighbor.visited:
                        # 标记邻居为已访问并将其加入队列
                        neighbor.visited = True
                        queue.append(neighbor)

            # 完成当前连通分量的搜索后，增加连通分量的数量
            num_connected_components += 1
            # 将当前连通分量的节点列表添加到总列表中
            current_connected_components_lists.append(current_component)
    
    # 如果需要打印连通分量的详细信息
    if print_val:
        for i, component in enumerate(current_connected_components_lists):
            print(f"Component {i + 1}: {component}")

    # 返回总的连通分量数量
    return num_connected_components
```

### Q2

```python
def number_connected_components_dfs(graph: Graph, print_val: bool = False) -> int:
    # 创建一个集合来存储已访问的节点
    visited = set()

    # 定义深度优先搜索的辅助函数
    # 它接收一个节点和当前连通分量的列表
    def dfs(node, component):
        # 将当前节点标记为已访问
        visited.add(node)
        # 将当前节点添加到连通分量列表中
        component.append(node)
        # 遍历当前节点的所有邻接节点
        for edge in node.adjacency_list:
            neighbor = edge.to_node
            # 如果邻接节点未被访问，递归调用dfs
            if neighbor not in visited:
                dfs(neighbor, component)

    # 初始化连通分量的数量
    num_connected_components = 0
    # 用于存储所有连通分量的列表
    components = []

    # 遍历图中的每个节点
    for node in graph.node_array:
        # 对于每个未访问的节点，开始一个新的连通分量搜索
        if node not in visited:
            # 创建一个新的连通分量列表
            current_component = []
            # 使用dfs搜索连通分量
            dfs(node, current_component)
            # 将当前连通分量添加到总列表中
            components.append(current_component)
            # 增加连通分量的计数
            num_connected_components += 1
            # 如果print_val为True，打印当前连通分量的信息
            if print_val:
                print(f"Connected Component {num_connected_components}: {[n.name for n in current_component]}")

    # 返回连通分量的总数
    return num_connected_components
```

### Q3

```python
def compute_number_lakes(grid_map: np.array) -> int:
    # 获取网格地图的尺寸
    n = grid_map.shape[0]
    # 检查网格地图是否为正方形
    if grid_map.shape[0] != grid_map.shape[1]:
        print("The grid map must be a square array")
        return None

    # 初始化用于湖泊计算的图结构
    lake_graph = Graph()

    # 定义一个函数，将网格坐标转换为图中的节点名称
    def coord_to_name(i, j):
        return f"{i}_{j}"

    # 遍历网格地图，添加表示水域的节点到图中
    for i in range(n):
        for j in range(n):
            if grid_map[i, j] == 0:  # 0 表示水域
                lake_graph.add_node(coord_to_name(i, j))

    # 遍历网格地图，添加边以连接相邻的水域节点
    for i in range(n):
        for j in range(n):
            if grid_map[i, j] == 0:  # 只对水域单元格处理
                # 检查左、右、上、下四个方向的相邻单元格
                if i > 0 and grid_map[i - 1, j] == 0:  # 上
                    lake_graph.add_edge(coord_to_name(i, j), coord_to_name(i - 1, j))
                if i < n - 1 and grid_map[i + 1, j] == 0:  # 下
                    lake_graph.add_edge(coord_to_name(i, j), coord_to_name(i + 1, j))
                if j > 0 and grid_map[i, j - 1] == 0:  # 左
                    lake_graph.add_edge(coord_to_name(i, j), coord_to_name(i, j - 1))
                if j < n - 1 and grid_map[i, j + 1] == 0:  # 右
                    lake_graph.add_edge(coord_to_name(i, j), coord_to_name(i, j + 1))

    # 使用广度优先搜索算法计算连通分量的数量，即湖泊的数量
    return number_connected_components_bfs(lake_graph)
```



## Section B (35 marks)

In this question we will investigate the binary heap data structure.

In order to insert new key value tuples (k,v), where k is a numerical key and v is a value, into the heap data structure we leverage the following algorithm.

**Algorithm 1:** insert

**Input:** Heap data structure $X$ and a key-value tuple (k, v)

1 X.append((k, v)) // append the new tuple at end of array

2 index = len(X ) − 1

3 parent_index = ⌊(index − 1)/2⌋

4 **while** parent_index $\geq$ 0 and X [parent_index].key > X [index].key **do**

5     swap(X, index, parent_index)

6     index = parent_index

7     parent_index = ⌊(index − 1)/2⌋

This algorithm calls a sub-routine swap which takes as input an array $X$ and two indices $i,j \in \{0,...,len(X)-1\}$ and swaps the two entries at positions i and j within the array X, in place.

The following lemma bounds the run-time of the insert algorithm.

**Lemma:** If the insert algorithm reaches line 4, then the algorithm will return to line 4 at most $1+log_2(i+1)$ more times, where i denotes the current value of index.

**(Q1)** Prove the lemma. You may wish to prove this lemma by induction on i with a base case of `i=0`.

**(Q2)** Deduce bound on the worst-case run-time complexity of the insert algorithm as function of n, the number of elements in the heap data structure $X$. Use big O notation express your answer. You may assume that each of the lines 1-7 of the insert algorithm can be executed once in a constant amount of time which does not depend upon n.

---

The following Python code implements a binary heap data structure by leveraging dynamic arrays (Python lists). However, there are important details missing which you will complete shortly.

```python
class MinHeap:
    # implementation of the binary heap data structure
    def __init__(self, input_array=[]):
        # constructor method
        self.data = []
        self.size = 0
        self.simple_heapify(input_array)
    def insert(self, key, value):
        # insert method for heap
        
        self.data.append((key, value))
        self.size += 1
        index = self.size - 1
        parent_index = (index-1)//2
        
        while(parent_index >= 0 and self.data[parent_index][0] > self.data[index][0]):
            self.swap(parent_index, index)
            index = parent_index
            parent_index = (index-1)//2
    def swap(self, i, j):
        # performs an in place swap of the elements at positions i and j in the heap's array
        u = self.data[i]
        self.data[i] = self.data[j]
        self.data[j] = u
    def simple_heapify(self, input_array):
        for x in input_array:
            if type(x) == int or type(x) == float:
                self.insert(x, 0)
            else:
                self.insert(x[0], x[1])
                
    def extract_min(self):
        # method for returning and removing the tuple from the heap with minimal key
        pass
```

**(Q3)** Update the MinHeap class to include an `extract_min` method.

You may wish to leverage the following pseudo-code:

**Algorithm 2:** extract_min

**Input:** Heap data structure X containing at least one element

1 swap(X, 0, −1)

2 min_element = X.pop() // retrieve and remove last array element

3 **if** len(X ) > 0 **then**

4     min_heap_restore(X, 0)

**Output:** min_element

The extract_min pseudo-code leverages the following min_heap_restore subroutine.



**Algorithm 3:** min_heap_restore

**Input:** An array X and an index index

1 min_index = index;

2 **for** j∈[2·index+1,2·index+2]**do**

3     **if** j < len(X) and X[j].key < X[min_index].key **then**

4         min_index = j

5 **if** min_index $\neq$ index **then**

6     swap(X, min_index, index)

7     min_heap_restore(X, min_index) // Recursive function call

Use the following Python code to test your updated MinHeap class:

```python
h = MinHeap()
h.insert(95, "Alice")
h.insert(82, "Bob")
h.insert(98, "Charlie")

for i in range(3):
    print(h.extract_min())
```

```python
## (82, 'Bob')
## (95, 'Alice')
## (98, 'Charlie')
```

**(Q4)** Now write a Python function called `heap_sort` which leverages the heap data structure to sort an array. Your function should take as input an unsorted array $X$ (a Python list) containing integers and outputs the a sorted copy of the input array $X$. The output should be sorted in ascending order.

Use the following Python code to test your heap_sort function.

```python
np.random.seed(2023) # set random seed
for i in range(5):
    X = list(np.random.randint(100, size=10))
    print(heap_sort(X))
```

```python
## [3, 25, 33, 52, 55, 70, 86, 87, 92, 96]
## [3, 17, 22, 39, 47, 53, 58, 69, 77, 88]
## [28, 29, 32, 48, 49, 49, 49, 63, 71, 81]
## [15, 38, 47, 49, 53, 65, 70, 71, 72, 88]
## [7, 22, 25, 34, 45, 49, 53, 77, 87, 91]
```

**(Q5)** Write pseudo-code for an algorithm called online_median which leverages the heap data structure for the following task. Your algorithm should take as input an array $X=[X_0,X_1,X_2,...,X_n-1]$ a length $n \geq 1$ consisting of distinct numerical values. Your function should return a vector $Z=[Z_0,Z_1,...,Z_{⌊(n+1)/2⌋−1}]$  of length $⌊(n+1)/2⌋$, where for each $\ell \in \{0,...,⌊(n+1)/2⌋−1\}$, the $Z\ell$ is the median element of the set $\{X_0,..., X_{2\ell}\}$ consisting of the first $2\ell+1$ values within the array $X$.

Can you think of a method with a worst-case time complexity of $O(n log(n))$

You may wish to compare with the following (relatively inefficent) method:

```python
def naive_online_median(X):
    num_outputs = (len(X)+1)//2
    Z = []
    for l in range(num_outputs):
        Z.append(int(np.median(X[0:2*l+1])))
    return Z
```

Use the following code to test your method:

```python
np.random.seed(2023) # set a random seed

for i in range(10):
    X = list(np.random.randint(100, size=20))
    print(online_median(X))
```

```python
## [87, 70, 55, 55, 55, 55, 53, 53, 53, 53]
## [28, 71, 63, 48, 49, 49, 49, 49, 49, 49]
## [22, 22, 25, 34, 45, 45, 45, 34, 34, 34]
## [69, 43, 31, 31, 31, 31, 43, 43, 43, 40]
## [82, 82, 79, 79, 72, 66, 66, 60, 66, 67]
## [40, 40, 71, 56, 56, 56, 56, 71, 71, 56]
## [42, 42, 42, 37, 42, 42, 42, 42, 44, 44]
## [18, 18, 18, 18, 29, 58, 48, 58, 58, 48]
## [45, 60, 45, 44, 44, 44, 41, 44, 45, 47]
## [76, 83, 76, 59, 51, 59, 59, 71, 71, 71]
```

---

The final question in this section is optional.

**(Q6)** (Optional and non-assessed) (⋄) The simple_heapify method in the MinHeap class takes as input an array $input\_array=[(k_0,v_0),...,(k_{n−1},v_{n−1})]$ consisting of n key-value tuples ($k\ell$, $v\ell$) and the heap into one containing the set of tuples $\{(k_0,v_0),...,(k_{n−1},v_{n−1})\}$ within input_array. The worst-case run-time complexity of the `simple_heapify` method is $O(nlog(n))$ where n is the number of tuples within `input_array`. Can you find a method with a worst-case time complexity of $O(n)$?

Implement a function called `linear_time_heapify` which takes as input an array $input_array = [(k_0,v_0),...,(k_{n−1},v_{n−1})]$ consisting of n key-value tuples ($k\ell$,$v\ell$) and returns an object belonging to the MinHeap class containing containing the set of tuples $\{(k_0, v_0),...,(k_{n−1},v_{n−1})\}$ and satisfying the ‘’heap property” in O(n) time.

**算法 3:** online_median

**输入:** 一个数组 X

1 初始化一个最小堆 min_heap，用于存储较大的一半元素

2 初始化一个最大堆 max_heap，用于存储较小的一半元素

3 初始化一个列表 medians，用于存储每次插入后的中位数

4 **for** 每个元素 x 在 X 中**do**

5     **if** max_heap 为空 或者 x < max_heap 的最大值 **then**

6         将 x 插入 max_heap

7     **else**

8         将 x 插入 min_heap

9     // 平衡两个堆的大小

10    **while** max_heap 的大小 > min_heap 的大小 + 1 **do**

11        从 max_heap 提取最大值并插入到 min_heap

12    **while** min_heap 的大小 > max_heap 的大小 **do**

13        从 min_heap 提取最小值并插入到 max_heap

14    // 计算中位数

15    **if** 当前是偶数个元素 **then**

16        **if** max_heap 和 min_heap 的大小相等 **then**

17            计算两个堆顶元素的平均值作为中位数

18        **else**

19            选择较大堆的堆顶元素作为中位数

20        将中位数添加到 medians

21 返回 medians

## Solution B

### Q1

1. 引理

如果插入算法到达第 4 行，则算法最多再返回到第 4 行 $1+\log_2(i+1)$  次，其中 $i$ 为当前的 `index` 值。

2. 证明方法

使用数学归纳法进行证明。

**基础情况**：当 $i=0$  时，我们正在插入的元素是堆中的第一个元素。由于它没有父节点，因此无需上移（也就是不执行循环），这符合 $1+\log_2(1)=1$（即执行 0 次循环）。

**归纳假设**：假设对于所有 $i<k$，引理成立。即对于小于 $k$ 的任意 $i$ ，算法最多返回到第 4 行 $1+\log_2(i+1)$ 次。

**归纳步骤**：考虑 $i=k$ 的情况。在循环中，每次迭代 `index` 至少减半（因为每次都移动到父节点位置），即 `index` 的值变为 $\lfloor (index-1)/2 \rfloor$。这意味着，从 $i$  开始，`index` 的值会变为 $i, \lfloor (i-1)/2 \rfloor, \lfloor ((i-1)/2-1)/2 \rfloor, \ldots$ ，直到它变为 0（根节点位置）。

每次迭代减少的 `index` 值形成了一个几何级数，其中每个项都是前一个项的一半。这个级数的长度就是循环执行的次数。由于 $i$  可以表示为 $2^m$  的形式（对于某个整数 $m$ ），迭代将在大约 $m$  次之后结束，其中 $m=\log_2(i+1)$ 。因此，最多执行 $1+\log_2(i+1)$  次循环。

**结论**：因此，根据数学归纳法，证明了对于任意的 $i$ ，当插入算法到达第 4 行时，最多再返回到第 4 行 $1+\log_2(i+1)$  次，从而证明了引理。

### Q2

目标是确定将一个新的键值对插入到堆中的时间复杂度。关键步骤是算法中的 while 循环，它确定了该算法的效率。

1. **初始化和附加新元素**： 
   - 第 1 行和第 2 行执行的是初始化和将新元素添加到堆的末尾，这些操作都是常数时间操作，即 $O(1)$。

2. **计算父节点索引**： 
   - 第3行计算新添加元素的父节点索引，也是一个常数时间操作。

3. **while 循环**： 
   - 核心在于第 4 到第 7 行的 while 循环。这个循环检查新添加的元素是否小于其父节点的键值，如果是，就交换它们的位置。

4. **while 循环的迭代次数**：
   - 在最坏的情况下，新添加的元素会一直上浮至堆的根部。这意味着它需要通过堆中所有的层级。因为二叉堆是一种完全二叉树，所以树的高度是 $\log_2(n)$，其中 $n$  是堆中元素的数量。
   - 但是，由于我们的索引是从 0 开始的，实际的层数是 $\log_2(n+1)$。

5. **计算总的循环次数**： 
   - 每一次迭代，元素至少上浮一层。因此，在最坏的情况下，新元素从最底层上浮到根部，迭代的总次数是 $\log_2(n+1)$。

6. **考虑常数因子和大 O 表示法**：
   - 每次迭代都涉及常数时间的操作，如比较和交换。所以，循环中的每一步都可以认为是 $O(1)$。
   - 因此，整个 while 循环的时间复杂度是 $O(\log_2(n+1))$。

7. **总时间复杂度**：
   - 结合所有步骤，总的时间复杂度是 $O(1) + O(\log_2(n+1)) = O(\log n)$。
   - 在大 O 表示法中，我们通常省略常数因子和加法项中的次要部分，因此最终结果简化为 $O(\log n)$。

总结：插入算法的最坏情况运行时间复杂度是 $O(\log n)$，主要受到堆高度（即树的深度）的影响。

### Q3

```python
class MinHeap:
    # implementation of the binary heap data structure
    def __init__(self, input_array=[]):
        self.data = []  # 存储堆元素的数组
        self.size = 0   # 堆中元素的数量
        self.simple_heapify(input_array)  # 使用输入数组构建堆

    def insert(self, key, value):
        # 插入方法
        self.data.append((key, value))  # 在数组末尾添加新元素
        self.size += 1
        index = self.size - 1
        parent_index = (index - 1) // 2
        
        # 向上调整元素直到恢复最小堆性质
        while parent_index >= 0 and self.data[parent_index][0] > self.data[index][0]:
            self.swap(parent_index, index)
            index = parent_index
            parent_index = (index - 1) // 2

    def swap(self, i, j):
        # 交换堆中两个元素的位置
        self.data[i], self.data[j] = self.data[j], self.data[i]

    def simple_heapify(self, input_array):
        # 堆化输入数组
        for x in input_array:
            if isinstance(x, (int, float)):
                self.insert(x, None)
            else:
                self.insert(x[0], x[1])

    def extract_min(self):
        # 移除并返回最小元素
        if self.size == 0:
            raise Exception("Heap is empty")
        self.swap(0, self.size - 1)  # 将堆顶元素与数组最后一个元素交换
        min_element = self.data.pop()  # 弹出并保存最小元素
        self.size -= 1
        if self.size > 0:
            self.min_heap_restore(0)  # 恢复最小堆性质
        return min_element

    def min_heap_restore(self, index):
        # 恢复最小堆性质
        min_index = index
        left_child = 2 * index + 1  # 左子节点的索引
        right_child = 2 * index + 2  # 右子节点的索引

        # 寻找三者中的最小值
        if left_child < self.size and self.data[left_child][0] < self.data[min_index][0]:
            min_index = left_child
        if right_child < self.size and self.data[right_child][0] < self.data[min_index][0]:
            min_index = right_child

        # 如果找到更小的子节点，则交换并递归调用
        if min_index != index:
            self.swap(index, min_index)
            self.min_heap_restore(min_index)
h = MinHeap()
h.insert(95, "Alice")
h.insert(82, "Bob")
h.insert(98, "Charlie")

for i in range(3):
    print(h.extract_min())
```

### Q4

```python
def heap_sort(X):
    # 创建一个最小堆实例
    heap = MinHeap()

    # 遍历输入数组 X 中的每个元素
    # 将每个元素插入到最小堆中
    # 这里的 None 表示每个元素的值（与键无关，所以设置为 None）
    for x in X:
        heap.insert(x, None)

    # 创建一个空数组用于存储排序后的元素
    sorted_array = []

    # 当堆的大小大于0时，循环执行以下操作
    while heap.size > 0:
        # 从堆中提取最小元素（即堆顶元素）
        # extract_min 函数返回的是一个 (key, value) 元组
        # 我们只关心 key（即数组 X 中的元素），所以取 [0]
        sorted_array.append(heap.extract_min()[0])

    # 返回排序后的数组
    return sorted_array
```

### Q5

```python
import numpy as np
import heapq

class MaxHeap:
    def __init__(self):
        self.data = []  # 初始化一个空的列表，用于存储堆的元素

    def insert(self, item):
        # 将元素插入最大堆中
        heapq.heappush(self.data, -item)  # Python的heapq模块提供的是最小堆，通过插入元素的相反数来模拟最大堆

    def extract_max(self):
        # 从最大堆中取出最大元素
        return -heapq.heappop(self.data)  # 取出时将元素的相反数取反，得到原始的最大值

    def peek_max(self):
        # 查看最大堆中的最大元素
        return -self.data[0] if self.data else None  # 如果堆不为空，则返回最大元素；否则返回None

    def __len__(self):
        # 返回堆中元素的数量
        return len(self.data)

    def is_empty(self):
        # 检查堆是否为空
        return len(self.data) == 0

class MinHeap:
    def __init__(self):
        self.data = []  # 初始化一个空的列表，用于存储堆的元素

    def insert(self, key):
        # 将元素插入最小堆中
        heapq.heappush(self.data, key)  # 使用heapq模块的heappush方法插入元素

    def extract_min(self):
        # 从最小堆中取出最小元素
        return heapq.heappop(self.data) if self.data else None  # 如果堆不为空，则取出最小元素；否则返回None

    def peek_min(self):
        # 查看最小堆中的最小元素
        return self.data[0] if self.data else None  # 如果堆不为空，则返回最小元素；否则返回None

    def __len__(self):
        # 返回堆中元素的数量
        return len(self.data)

def online_median(X):
    min_heap = MinHeap()  # 创建一个最小堆，用于存储较大的一半元素
    max_heap = MaxHeap()  # 创建一个最大堆，用于存储较小的一半元素
    medians = []  # 初始化一个列表，用于存储每次插入后的中位数

    for i, x in enumerate(X):
        # 遍历输入数组
        if max_heap.is_empty() or x < max_heap.peek_max():
            max_heap.insert(x)  # 如果最大堆为空或元素小于最大堆的最大元素，则插入最大堆
        else:
            min_heap.insert(x)  # 否则，插入最小堆

        # 平衡两个堆的大小
        while len(max_heap) > len(min_heap) + 1:
            min_heap.insert(max_heap.extract_max())
        while len(min_heap) > len(max_heap):
            max_heap.insert(min_heap.extract_min())

        # 计算中位数
        if i % 2 == 0:
            # 每插入两个元素计算一次中位数
            if len(max_heap) == len(min_heap):
                median = (max_heap.peek_max() + min_heap.peek_min()) / 2
            else:
                median = max_heap.peek_max() if len(max_heap) > len(min_heap) else min_heap.peek_min()
            medians.append(median)  # 将计算出的中位数添加到列表中

    return medians  # 返回所有计算出的中位数
```





## Section C (30 marks)

In this section we will consider the application of the heap data structure to Dijkstra’s algorithm.

Whilst we have implemented a heap data structure in the previous section a more standard approach is to utilise the heapq Python library.

We import the library as follows:

```python
import heapq
```

The heapq implementation of a heap instantiates min-heaps as Python lists. Hence, we can create an empty heap by creating an empty list as follows:

```python
my_heap = []
```

To insert a new key-value tuple into our heap we apply the heapq.heappush function from the heapq library. Notice that this function is not a method of a heap object, so provide our heap as an input to the heapq.heappush function within the brackets.

```python
# inserting three tuples within the heap
heapq.heappush(my_heap, (0, "A")) 
heapq.heappush(my_heap, (-10, "B")) 
heapq.heappush(my_heap, (-5, "C")) 
```

We can also extract the minimum i.e. remove and return the key-value tuple with minimal key by calling the heapq.heappull function from the heapq library as follows:

```python
# remove and return the element within minimal key
heapq.heappop(my_heap)
```

```python
## (-10, 'B')
```

For the remainder of this section you can either the heapq Python library or use the MinHeap class you built in the previous section.

**(Q1)** Your first goal is to complete the following implementation of Dijkstra’s algorithm. Here you can use either the heapq Python library or use the MinHeap class you built in the previous section if you prefer. Your final function `dijkstras_algorithm` takes as input a graph with an adjacency list representation such that every edge edge within the graph has a `edge.length` attribute, as well as an initial node object. Your function should modify the existing graph data structure in-place so that every node node has an additional attribute `node.distance_from_start` which is equal to the shortest path distance from the initial node to the node itself. Here the path distance is defined to be the sum of the edge lengths along the path.

```python
def dijkstras_algorithm(graph:Graph, initial_node:GraphNode):
    # assign infinite distance from start to each node
    for node in graph.node_array:
        node.distance_from_start = np.Inf
    # initialise heap with initial node
    min_dists_heap = []
    heapq.heappush(min_dists_heap, (0, initial_node))
    while len(min_dists_heap) > 0:
        # important detail missing here
        #
        #
        #
        pass
```

Now test your implementation with the following code and check that you get the same output.

```python
def assign_random_edge_lengths(graph:Graph, edge_length_max:int):
    for i in range(graph.num_nodes):
        node = graph.node_array[i]
        for edge in node.adjacency_list:
            edge.length = np.random.randint(edge_length_max) + 1
```

```python
def print_dijkstra_output(graph:Graph, initial_node_name:str):
    initial_node = graph.node_dictionary[initial_node_name]
    dijkstras_algorithm(graph, initial_node)
    for i in range(graph.num_nodes):
        node = graph.node_array[i]
        print("{node} : {direct_descendants}".format(node=node.name,direct_descendants=[(edge.to_node.name,edge.length) for edge in node.adjacency_list]))
    for i in range(graph.num_nodes):
        node = graph.node_array[i]
        print("The distance from node {init_node} to node {node} is {dist} ".format(node=node.name,dist=node.distance_from_start,init_node=initial_node_name))
```

```python
np.random.seed(2023) # set random seed
num_nodes=10
adj_mat=np.random.choice([0, 1], size=(num_nodes,num_nodes), p=[0.7,0.3])
names_v=[chr(ord('A') + i) for i in range(num_nodes)]
G=graph_from_adjacency_matrix(names_v,adj_mat)
assign_random_edge_lengths(G,5)
print_dijkstra_output(G,"A")
```

```python
## A : [(’B’, 3), (’H’, 3)]
## B : []
## C : [(’J’, 5)]
## D : [(’A’, 1), (’B’, 4), (’D’, 3), (’E’, 4), (’F’, 4), (’G’, 4), (’I’, 5)]
## E : [(’F’, 1), (’H’, 5)]
## F : [(’B’, 2), (’C’, 5), (’F’, 4)]
## G : [(’A’, 4), (’B’, 4), (’D’, 5), (’I’, 5), (’J’, 4)]
## H : [(’I’, 1)]
## I : [(’A’, 2), (’G’, 4), (’I’, 1)]
## J : [(’D’, 3), (’H’, 2), (’J’, 5)]
## The distance from node A to node A is 0
## The distance from node A to node B is 3
## The distance from node A to node C is 22
## The distance from node A to node D is 13
## The distance from node A to node E is 17
## The distance from node A to node F is 17
## The distance from node A to node G is 8
## The distance from node A to node H is 3
## The distance from node A to node I is 4
## The distance from node A to node J is 12
```

**(Q2)**

Now suppose each edge in your graph has an additional attribute bandwidth. We then define the bandwidth of the path $p=(e_0,e_1,...,e_{q-1})$ as the minimum bandwidth overall all of its edges. That is, the bandwidth of $p=(e_0,e_1,...,e_{q−1})$ is the minimum min{$e_0$.bandwidth,$e_1$.bandwidth,...,$e_{q−1}$.bandwidth}. To gain some intuition here, imagine the nodes in your graph are cities, the edges correspond to roads, and the bandwidth of an edge is the largest width of a truck which can travel along that road. Continuing the example, the bandwidth of a path is the path is the largest width of a truck which can travel along the entire path, so the minimum bandwidth of an edge within the path.

Your goal in this question is to create a function called `dijkstras_max_bandwidth_algorithm` which takes as in- put a graph with an adjacency list representation such that every edge within the graph has a bandwidth attribute, edge.bandwidth, as well as an initial node object `initial_node`. Your function should modify the existing graph data structure in-place so that every node node has an additional attribute `node.max_path_bandwidth` which is equal to the maximum bandwidth over all possible paths from `initial_node` to node. If there is no path from initial_node to node then we have `node.max_path_bandwidth=0`. Conversely, we define the maximum path bandwidth for `initial_node` to be infinite `initial_node.max_path_bandwidth=np.Inf`.

As in part 1, you can use either the heapq Python library or use the MinHeap class you built in the previous section if you prefer.

You may wish to utilise the NumPy minimum function `np.min`.

Now test your implementation with the following code and check that you get the same output.

```python
def assign_random_edge_bandwidths(graph:Graph, edge_bandwidth_max:int):
    for i in range(graph.num_nodes):
        node = graph.node_array[i]
        for edge in node.adjacency_list:
            edge.bandwidth = np.random.randint(edge_bandwidth_max)+1
```

```python
def print_dijkstras_max_bandwidth_algorithm_output(graph:Graph, initial_node_name:str):
    initial_node = graph.node_dictionary[initial_node_name]
    dijkstras_max_bandwidth_algorithm(graph, initial_node)
    for i in range(graph.num_nodes):
        node = graph.node_array[i]
        print("{node} : {direct_descendants}".format(node=node.name,direct_descendants=[(edge.to_node.name,edge.bandwidth) for edge in node.adjacency_list]))
    for i in range(graph.num_nodes):
        node = graph.node_array[i]
        print("The maximum bandwidth path from node {init_node} to node {node} is {bandwidth} ".format(node=node.name,bandwidth=node.max_path_bandwidth,init_node=initial_node_name))
```

```python
np.random.seed(2023) # set random seed
num_nodes = 10
adj_mat = np.random.choice([0, 1], size=(num_nodes,num_nodes), p=[0.7,0.3])
names_v = [chr(ord('A') + i) for i in range(num_nodes)]
G = graph_from_adjacency_matrix(names_v, adj_mat)
assign_random_edge_bandwidths(G, 15)
print_dijkstras_max_bandwidth_algorithm_output(G,"A")
```

```python
## A : [(’B’, 8), (’H’, 11)]
## B : []
## C : [(’J’, 14)]
## D : [(’A’, 6), (’B’, 14), (’D’, 3), (’E’, 5), (’F’, 1), (’G’, 7), (’I’, 4)]
## E : [(’F’, 8), (’H’, 11)]
## F : [(’B’, 6), (’C’, 7), (’F’, 14)]
## G : [(’A’, 4), (’B’, 4), (’D’, 12), (’I’, 14), (’J’, 13)]
## H : [(’I’, 1)]
## I : [(’A’, 14), (’G’, 13), (’I’, 10)]
## J : [(’D’, 13), (’H’, 12), (’J’, 4)]
## The maximum bandwidth path from node A to node A is inf
## The maximum bandwidth path from node A to node B is 8.0
## The maximum bandwidth path from node A to node C is 1.0
## The maximum bandwidth path from node A to node D is 1.0
## The maximum bandwidth path from node A to node E is 1.0
## The maximum bandwidth path from node A to node F is 1.0
## The maximum bandwidth path from node A to node G is 1.0
## The maximum bandwidth path from node A to node H is 11.0
## The maximum bandwidth path from node A to node I is 1.0
## The maximum bandwidth path from node A to node J is 1.0
```

## Solution C

### Q1

```python
def dijkstras_algorithm(graph: Graph, initial_node: GraphNode):
    # 初始化所有节点的最短路径距离为无穷大
    for node in graph.node_array:
        node.distance_from_start = np.Inf
    # 将初始节点的最短路径距离设置为0
    initial_node.distance_from_start = 0
    # 初始化一个空的最小堆（min-heap）
    min_dists_heap = []
    # 将初始节点和其距离（0）加入到堆中
    heapq.heappush(min_dists_heap, (0, initial_node))

    # 创建一个集合来跟踪已访问的节点
    visited = set()

    # 当堆不为空时，继续执行循环
    while len(min_dists_heap) > 0:
        # 从堆中弹出当前最小距离的节点及其距离
        current_dist, current_node = heapq.heappop(min_dists_heap)
        
        # 如果当前节点已经被访问过，则跳过后续操作
        if current_node in visited:
            continue
        # 将当前节点标记为已访问
        visited.add(current_node)

        # 遍历当前节点的所有邻居
        for edge in current_node.adjacency_list:
            neighbor = edge.to_node
            # 计算到达该邻居节点的新距离
            new_dist = current_dist + edge.length
            # 如果新的距离小于邻居节点当前的最短路径距离，则进行更新
            if new_dist < neighbor.distance_from_start:
                neighbor.distance_from_start = new_dist
                # 将更新后的邻居节点和新的距离加入到堆中
                heapq.heappush(min_dists_heap, (new_dist, neighbor))
```

### Q2

::: code-tabs

@tab code1

```python
def dijkstras_max_bandwidth_algorithm(graph: Graph, initial_node: GraphNode):
    for node in graph.node_array:
        node.max_path_bandwidth = 0
    initial_node.max_path_bandwidth = np.Inf
    max_bw_heap = []
    heapq.heappush(max_bw_heap, (-np.Inf, initial_node))

    while max_bw_heap:
        current_bw, current_node = heapq.heappop(max_bw_heap)
        current_bw = -current_bw

        for edge in current_node.adjacency_list:
            neighbor = edge.to_node
            path_bw = min(current_bw, edge.bandwidth)
            if path_bw > neighbor.max_path_bandwidth:
                neighbor.max_path_bandwidth = path_bw
                heapq.heappush(max_bw_heap, (-path_bw, neighbor))
```

@tab code2

```python
def dijkstras_max_bandwidth_algorithm(graph: Graph, initial_node: GraphNode):
    for node in graph.node_array:
        node.max_path_bandwidth = 0.0  # 初始化为浮点数0
    initial_node.max_path_bandwidth = float(np.Inf)  # 确保起始节点的带宽是浮点数
    max_bw_heap = []
    heapq.heappush(max_bw_heap, (-float(np.Inf), initial_node))  # 使用浮点数

    while max_bw_heap:
        current_bw, current_node = heapq.heappop(max_bw_heap)
        current_bw = -current_bw

        for edge in current_node.adjacency_list:
            neighbor = edge.to_node
            path_bw = min(current_bw, edge.bandwidth)
            if path_bw > neighbor.max_path_bandwidth:
                neighbor.max_path_bandwidth = float(path_bw)  # 更新为浮点数
                heapq.heappush(max_bw_heap, (-path_bw, neighbor))
```

@tab code3

```python
def dijkstras_max_bandwidth_algorithm(graph: Graph, initial_node: GraphNode):
    # 初始化每个节点的最大带宽为0.0（浮点数）
    for node in graph.node_array:
        node.max_path_bandwidth = 0.0

    # 将起始节点的最大带宽设置为无限大（浮点数）
    initial_node.max_path_bandwidth = float(np.Inf)

    # 创建一个优先队列（最小堆），用于存储节点和它们的最大带宽
    # Python的heapq实现的是最小堆，因此我们通过存储负值来模拟最大堆的行为
    max_bw_heap = []
    heapq.heappush(max_bw_heap, (-float(np.Inf), initial_node))

    # 循环直到优先队列为空
    while max_bw_heap:
        # 从队列中弹出当前最大带宽的节点（由于我们存储的是负值，因此需要取反）
        current_bw, current_node = heapq.heappop(max_bw_heap)
        current_bw = -current_bw

        # 遍历当前节点的所有邻居节点
        for edge in current_node.adjacency_list:
            neighbor = edge.to_node
            # 计算到邻居节点的路径的带宽，这是当前节点的带宽和边的带宽中较小的一个
            path_bw = min(current_bw, edge.bandwidth)

            # 如果计算出的路径带宽大于邻居节点当前的最大带宽，则更新邻居节点的最大带宽
            if path_bw > neighbor.max_path_bandwidth:
                neighbor.max_path_bandwidth = float(path_bw)  # 以浮点数形式更新
                # 将更新后的邻居节点和其带宽重新加入优先队列（最小堆）中
                heapq.heappush(max_bw_heap, (-path_bw, neighbor))
```

:::

## Section D (15 marks)

In this question we consider the problem of designing a Python function called `square_plus` which takes as input an array of integers $X=[x_0,...,x_{n−1}]$ and a target t and outputs the Boolean True if there exists a pair of numbers $a,b \in \{x_0,..., x_{n−1}\}$ with $t=a^2+b$ and outputs the Boolean False otherwise.

```python
def naive_square_plus(input_array:list, target:int):
    for i in range(len(input_array)):
        for j in range(len(input_array)):
            if input_array[i]**2+input_array[j] == target:
                return True
    return False
```

A more efficient approach leverages the Python dictionaries. Recall that you can initialise a dictionary as follows:

```python
my_dictionary = {}
```

You can insert key value tuples into the dictionary as follows:

```python
my_dictionary["A"] = 25
my_dictionary["B"] = 32
```

You can also check if there is a key value tuple within the dictionary with any given key:

```python
"A" in my_dictionary
```

```python
## True
```

```python
"C" in my_dictionary
```

```python
## False
```

**(Q1)** Write a Python function called `square_plus` which takes as input an array of integers $X=[x_0,...,x_{n-1}]$ and a target t and outputs the Boolean True if there exists a pair of numbers $a,b \in \{x_0,...,x_{n−1}\}$ with $t=a^2+b$ and outputs the Boolean False otherwise. Your approach should have expected time complexity O(n). Here we assume that both inserting into a dictionary and checking if a dictionary contains a tuple with a given key are both constant time $\theta(1)$ operations.

Use the following test code to evaluate your function:

```python
import random
random.seed(0)

num_rounds = 1000
array_size = 10 
num_max = 20
num_differences = 0

for i in range(num_rounds):
    X = [x-num_max for x in random.sample(range(2*num_max), array_size)]
    t = random.randint(-num_max, num_max)
    if naive_square_plus(X, t) != square_plus(X, t):
        num_differences += 1
print("The two methods differed on {nd} cases.".format(nd=num_differences))
```

## Solution D

```python
def square_plus(input_array: list, target: int) -> bool:
    # 初始化一个空字典，用于存储数组中每个元素的平方值。
    # 字典的键是元素的平方值，值是元素本身。
    squares_dict = {}

    # 遍历输入数组中的每个元素。
    for num in input_array:
        # 计算当前元素的平方，并将其作为键存储在字典中。
        # 由于我们只关心是否存在满足条件的a和b，而不关心它们是什么，
        # 因此这里不需要存储每个平方值对应的原始数值。
        squares_dict[num ** 2] = num

    # 再次遍历输入数组。
    for num in input_array:
        # 检查字典中是否存在键为 target - num 的项。
        # 如果存在，这意味着存在两个元素 a 和 b，使得 t = a^2 + b，
        # 其中 a 是字典中平方值对应的元素，b 是当前遍历的元素。
        if target - num in squares_dict:
            # 如果找到符合条件的键，返回 True。
            return True

    # 如果遍历了整个数组也没有找到符合条件的元素对，返回 False。
    return False
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
