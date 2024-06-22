---
title: Assessed coursework 3 for Algorithms and Machine Learning (MATH20017), Autumn 2023
date: 2023-11-13 16:21:11
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

There are 4 sections to this coursework and you are encouraged to attempt to complete all sections.

## Handing in your coursework

How you present your coursework is important. You should complete your coursework using either Google Colab, a Jupyter notebook, or an Rmarkdown. Whichever approach you take you must submit both (1) the notebook itself (typically either a .ipynb file or a .rmd file) and (2) an HTML file in which all of the blocks of code have been run. If in doubt, use the the suggested approach described in Assessed Coursework 1.

Important: Ensure that you use the correct format to submit your report as failure to do so can lead to a substantial loss of marks.

## Section A (20 marks)

In this section you will look at how to build a simple linked list data structure within Python, and then apply this data structure to create a stack and a queue.

Let’s first look at how to create a simple linked list data structure in Python.

We begin by defining our linked list node class.

```python
class LinkedListNode:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next
```

Next we create our linked list class as follows:

```python
class LinkedList:
    def __init__(self, dynamic_array=[]):
        """
        the constructor takes as input a Python list dynamic_array
        and converts this into a linked list
        """
        if len(dynamic_array) > 0:
            self.tail = LinkedListNode(dynamic_array[-1])
            node = self.tail
            
            for i in range(len(dynamic_array)-2, -1, -1):
                node = LinkedListNode(dynamic_array[i], node)
            self.head = node
        else:
            self.head = None
            self.tail = None
    def convert_to_array(self):
        node = self.head
        out_array = []
        
        while node is not None:
            out_array.append(node.data)
            node=node.next
        return out_array
    
    def print(self):
        out_array = self.convert_to_array()
        if len(out_array) > 0:
            linked_list_representation = " node(" + str(out_array[0]) + ")"
            
            for i in range(1, len(out_array)):
                linked_list_representation += ", node(" + str(out_array[i]) + ")"
            print("Linked list: " + linked_list_representation)
        else:
            print("Empty linked list")
            
    def insert_at_head(self, data):
        self.head = LinkedListNode(data, self.head)
        
        if self.tail is None:
            self.tail = self.head
    
    def insert_at_tail(self, data):
        node = LinkedListNode(data)
        
        if self.tail is None:
            self.head = node
        else:
            self.tail.next = node
        
        self.tail=node
    
    def pop_head(self):
        if self.head is None:
            return None
        else:
            out_val = self.head.data
            self.head = self.head.next
            if self.head is None:
                self.tail = None
            return out_val
```

**(Q1)** Use the above approach to implement a linked list data structure. Add some comments explaining what each of the methods does. Next try out each of the following operations:

- Use the linked list constructor method to create an empty linked list called `ll_0`;
- Use the linked list constructor method to create a linked list containing 2,7,1 called `ll_1`;
- Apply the print method to both linked lists `ll_0` and `ll_1`;
- Apply the `pop_head` method to the linked list `ll_1`;
- Apply the print method to the linked list `ll_1`;
- Apply the `insert_at_head` method to the linked list `ll_0` with `data=5`;
- Apply the `insert_at_tail` method to the linked list `ll_0` with `data=15`;
- Apply the print method to the linked list `ll_0`;

**(Q2)** Next apply the linked list data structure to create a stack data structure. Your data structure should have at least two methods:

(1)  Push: You can add a new element to the stack;

(2)  Pop: You can remove and return the element from the stack which was last added, out of those yet to be removed.

You can use the following template to start designing your class.

```python
class Stack:
    def __init__(self, dynamic_array=[]):
        self.latent_linked_list = LinkedList(dynamic_array)
    def push(self, data):
        pass # EDIT here!
    def pop(self):
        pass # EDIT here!
    def print(self):
        print("Stack: " + str(self.latent_linked_list.convert_to_array()[::-1]))
```

Check the functionality of your stack data structure by running the following commands:

```python
A = Stack()
A.push(5)
A.push(10)
A.push(15)
A.pop() 
A.pop() 
A.pop()
```

**Remark** You may wish to compare with Python’s doubly-linked list data structure, the doubly-ended queue from Pythons collections library.

```python
from collections import deque

B = deque([])
```

We can add an element to the left end of the queue via the appendleft method and remove and return an element from the left-end of the queue via the `popleft()` method.

```python
B.appendleft(5)
B.appendleft(10)
B.appendleft(15)
B.popleft()
B.popleft()
B.popleft()
```

**(Q3)** Next apply the linked list data structure to create a queue data structure.

Your data structure should have two methods:

(1) Push: You can add a new element to the queue;

(2) Pop: You can remove and return the element from the queue which was first added, out of those yet to be removed.

You can use the following template to start designing your class.

```python
class Queue:
    def __init__(self, dynamic_array=[]):
        pass # EDIT here!
    
    def push(self,data):
        pass # EDIT here!
    
    def pop(self):
        pass # EDIT here!
    
    def print(self):
        print("Queue: " + str(self.latent_linked_list.convert_to_array()))
```

Check the functionality of your stack data structure by running the following commands:

```python
A=Queue() 
A.push(5) 
A.push(10) 
A.push(15) 
A.pop() 
A.pop() 
A.pop()
```

**Remark** You may wish to compare with Python’s doubly-linked list data structure, the doubly-ended queue from Pythons collections library.

```python
from collections import deque

B=deque([])
```

We can add an element to the right-end of the queue via the append method and remove and return an element from the left-end of the queue via the `popleft()` method.

```python
B.append(5)
B.append(10)
B.append(15)
B.popleft()
B.popleft()
B.popleft()
```



## Solution A

### Q1

::: code-tabs

@tab 答案

```python
ll_0 = LinkedList()  # 创建空链表
ll_1 = LinkedList([2, 7, 1])  # 创建含有2, 7, 1的链表
ll_0.print()  # 打印空链表
ll_1.print()  # 打印ll_1
ll_1.pop_head()  # 移除ll_1头部节点
ll_1.print()  # 再次打印ll_1
ll_0.insert_at_head(5)  # 在ll_0头部插入5
ll_0.insert_at_tail(15)  # 在ll_0尾部插入15
ll_0.print()  # 打印ll_0
```

@tab LinkedListNode 注释

```python
class LinkedListNode:
    def __init__(self, data, next=None):
        """
        初始化链表节点。
        :param data: 节点存储的数据。
        :param next: 指向下一个节点的指针，默认为None。
        """
        self.data = data  # 节点存储的数据
        self.next = next  # 指向下一个节点的引用

```

@tab LinkedList 注释

```python
class LinkedList:
    def __init__(self, dynamic_array=[]):
        """
        初始化链表。
        :param dynamic_array: 一个数组，用于初始化链表，默认为空数组。
        """
        if len(dynamic_array) > 0:  # 如果数组非空
            self.tail = LinkedListNode(dynamic_array[-1])  # 初始化尾节点
            node = self.tail
            
            # 逆序遍历数组，构建链表
            for i in range(len(dynamic_array)-2, -1, -1):
                node = LinkedListNode(dynamic_array[i], node)
            self.head = node  # 设置头节点
        else:
            self.head = None  # 空链表的头节点
            self.tail = None  # 空链表的尾节点

    def convert_to_array(self):
        """
        将链表转换成数组。
        :return: 包含链表所有元素的数组。
        """
        node = self.head  # 从头节点开始
        out_array = []
        
        # 遍历链表，将数据添加到数组
        while node is not None:
            out_array.append(node.data)
            node = node.next
        return out_array
    
    def print(self):
        """
        打印链表的内容。
        """
        out_array = self.convert_to_array()  # 将链表转换为数组
        if len(out_array) > 0:
            linked_list_representation = " node(" + str(out_array[0]) + ")"
            
            # 遍历数组，生成链表的字符串表示
            for i in range(1, len(out_array)):
                linked_list_representation += ", node(" + str(out_array[i]) + ")"
            print("Linked list: " + linked_list_representation)
        else:
            print("Empty linked list")  # 空链表的情况

    def insert_at_head(self, data):
        """
        在链表头部插入一个新节点。
        :param data: 新节点的数据。
        """
        self.head = LinkedListNode(data, self.head)  # 创建新节点，设置为头节点
        
        if self.tail is None:  # 如果链表原本为空
            self.tail = self.head  # 新节点同时也是尾节点
    
    def insert_at_tail(self, data):
        """
        在链表尾部插入一个新节点。
        :param data: 新节点的数据。
        """
        node = LinkedListNode(data)
        
        if self.tail is None:  # 如果链表为空
            self.head = node  # 新节点既是头节点也是尾节点
        else:
            self.tail.next = node  # 将新节点添加到链表尾部
        
        self.tail = node  # 更新尾节点
    
    def pop_head(self):
        """
        移除并返回链表头部的节点数据。
        :return: 头节点的数据，如果链表为空返回None。
        """
        if self.head is None:  # 如果链表为空
            return None
        else:
            out_val = self.head.data  # 保存头节点的数据
            self.head = self.head.next  # 将头节点指向下一个节点
            if self.head is None:  # 如果移除后链表变为空
                self.tail = None  # 更新尾节点为None
            return out_val
```

:::

### Q2

```python {14,21}
class Stack:
    def __init__(self, dynamic_array=[]):
        """
        初始化堆栈。
        :param dynamic_array: 用于初始化堆栈的数组，默认为空数组。
        """
        self.latent_linked_list = LinkedList(dynamic_array)  # 使用链表实现堆栈

    def push(self, data):
        """
        在堆栈顶部添加一个元素。
        :param data: 要添加的数据。
        """
        self.latent_linked_list.insert_at_head(data)  # 在链表头部插入元素，实现堆栈的push操作

    def pop(self):
        """
        移除并返回堆栈顶部的元素。
        :return: 堆栈顶部的元素，如果堆栈为空则返回None。
        """
        return self.latent_linked_list.pop_head()  # 移除并返回链表头部的元素，实现堆栈的pop操作

    def print(self):
        """
        打印堆栈的内容。
        """
        print("Stack: " + str(self.latent_linked_list.convert_to_array()[::-1]))  # 逆序打印链表元素，以显示堆栈的顺序

A = Stack()
A.push(5)
A.push(10)
A.push(15)
A.pop()  # 移除15
A.pop()  # 移除10
A.pop()  # 移除5
```

### Q3

```python {7,14,21}
class Queue:
    def __init__(self, dynamic_array=[]):
        """
        初始化队列。
        :param dynamic_array: 用于初始化队列的数组，默认为空数组。
        """
        self.latent_linked_list = LinkedList(dynamic_array)  # 使用链表实现队列
    
    def push(self, data):
        """
        在队列尾部添加一个新元素。
        :param data: 要添加的数据。
        """
        self.latent_linked_list.insert_at_tail(data)  # 在链表尾部插入元素，实现队列的push操作
    
    def pop(self):
        """
        移除并返回队列头部的元素。
        :return: 队列头部的元素，如果队列为空则返回None。
        """
        return self.latent_linked_list.pop_head()  # 移除并返回链表头部的元素，实现队列的pop操作
    
    def print(self):
        """
        打印队列的内容。
        """
        print("Queue: " + str(self.latent_linked_list.convert_to_array()))  # 打印链表元素，以显示队列的顺序
```





## Section B (20 marks)

The following Python code implements a data structure in Python for representing graphs by adjacency lists.

```python
class GraphNode:
    # simple graph node class for adjacency list representation
    def __init__(self, name):
        self.name = name
        self.adjacency_list = []
        
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
        
    def add_node(self, name):
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
        from_node.adjacency_list.append(GraphEdge(from_node, to_node))
        self.num_edges += 1
        
    def add_edge(self, from_name, to_name):
        from_node = self.node_dictionary[from_name]
        to_node = self.node_dictionary[to_name]
        self.add_edge_by_node(from_node, to_node)
        
    def print_graph(self):
        if self.num_nodes == 0:
            print("Empty graph")
        print("The graph structure is:")
        
        for i in range(self.num_nodes):
            node = self.node_array[i]
            print("{node} : {direct_descendants}".format(node=node.name, direct_descendants=[edge.to_node.name for edge in node.adjacency_list]))
```

**Important:** Please see next page for questions.

**(Q1)** Copy the above code in your notebook. Try understand the functionality.

**(Q2)** Write a Python function called `graph_from_adjacency_matrix` which takes as input a length n list of strings called `names_array` and an $n \times n$ matrix `adjacency_matrix` represented as a two-dimensional NumPy array where all entries are either 0 or 1. We view `names_array` as a list of names for nodes in a graph and `adjacency_matrix` an adjacency matrix for that graph. Hence, `adjacency_matrix[i, j]=1` if there is an edge between the node names `names_array[i]` and that with name `names_array[j]`, and `adjacency_matrix[i,j]=0` if there is no such edge. Your function should take `names_array` and `adjacency_matrix` as inputs and return the corresponding graph data structure as an object belonging to the Graph class implemented above.

Use the following code to check if your function works as expected:

```python
import numpy as np
np.random.seed(2023) # set random seed

adj_mat = np.random.choice([0, 1], size=(5,5), p=[1./3, 2./3])
names_v = ("Alpha", "Beta", "Gamma", "Delta", "Epsilon")
G = graph_from_adjacency_matrix(names_v,adj_mat)
G.print_graph()
```

## Solution B

### Q1

这段代码实现了一个简单的图数据结构，通过邻接表的方式表示图。

- `GraphNode` 类表示图中的一个节点。每个节点有一个名字 (`name`) 和一个邻接列表 (`adjacency_list`)，后者用于存储与该节点相连的边。
- `GraphEdge` 类表示图中的一条边。每条边有一个起始节点 (`from_node`) 和一个目标节点 (`to_node`)。
- `Graph` 类表示整个图。它包含节点数量 (`num_nodes`)、边的数量 (`num_edges`)、一个包含所有节点的数组 (`node_array`) 和一个将节点名映射到节点对象的字典 (`node_dictionary`)。

    - `add_node`: 向图中添加一个新节点。
    - `print_nodes`: 打印出图中所有节点的名字。
    - `add_edge_by_node`: 通过节点对象添加一条边。
    - `add_edge`: 通过节点名字添加一条边。
    - `print_graph`: 打印出整个图的结构，显示每个节点及其直接后代节点。

::: code-tabs

@tab GraphNode 注释

```python
class GraphNode:
    def __init__(self, name):
        """
        初始化一个图节点。
        :param name: 节点的名称。
        """
        self.name = name  # 节点的名称
        self.adjacency_list = []  # 节点的邻接表，存储与该节点相连的所有边
```

@tab GraphEdge 注释

```python
class GraphEdge:
    def __init__(self, from_node, to_node):
        """
        初始化一条图边。
        :param from_node: 边的起始节点。
        :param to_node: 边的目标节点。
        """
        self.from_node = from_node  # 边的起始节点
        self.to_node = to_node      # 边的目标节点
```

@tab Graph 注释

```python
class Graph:
    def __init__(self):
        """
        初始化一个图。
        """
        self.num_nodes = 0  # 图中的节点数
        self.num_edges = 0  # 图中的边数
        self.node_array = []  # 存储图中所有节点的数组
        self.node_dictionary = {}  # 将节点名称映射到节点对象的字典

    def add_node(self, name):
        """
        向图中添加一个新的节点。
        :param name: 新节点的名称。
        """
        new_node = GraphNode(name)  # 创建一个新节点
        self.node_array.append(new_node)  # 将新节点添加到节点数组
        self.node_dictionary[name] = new_node  # 将节点名称与节点对象关联
        self.num_nodes += 1  # 节点数量增加

    def print_nodes(self):
        """
        打印图中所有节点的名称。
        """
        if self.num_nodes == 0:
            print("Empty graph")  # 如果图为空，则打印空图信息
        for i in range(self.num_nodes):
            print(self.node_array[i].name)  # 打印每个节点的名称
            
    def add_edge_by_node(self, from_node, to_node):
        """
        通过节点对象向图中添加一条边。
        :param from_node: 边的起始节点。
        :param to_node: 边的目标节点。
        """
        from_node.adjacency_list.append(GraphEdge(from_node, to_node))  # 在起始节点的邻接表中添加这条边
        self.num_edges += 1  # 边的数量增加
        
    def add_edge(self, from_name, to_name):
        """
        通过节点名称向图中添加一条边。
        :param from_name: 边的起始节点的名称。
        :param to_name: 边的目标节点的名称。
        """
        from_node = self.node_dictionary[from_name]  # 获取起始节点对象
        to_node = self.node_dictionary[to_name]      # 获取目标节点对象
        self.add_edge_by_node(from_node, to_node)    # 添加边
        
    def print_graph(self):
        """
        打印整个图的结构。
        """
        if self.num_nodes == 0:
            print("Empty graph")  # 如果图为空，则打印空图信息
        print("The graph structure is:")
        for i in range(self.num_nodes):
            node = self.node_array[i]
            # 打印每个节点及其直接后代节点
            print("{node} : {direct_descendants}".format(
                node=node.name, 
                direct_descendants=[edge.to_node.name for edge in node.adjacency_list]
            ))
```

:::

### Q2

```python
import numpy as np

def graph_from_adjacency_matrix(names_array, adjacency_matrix):
    """
    根据邻接矩阵创建图。
    :param names_array: 节点名称的数组。
    :param adjacency_matrix: 邻接矩阵，一个二维 NumPy 数组。
    :return: 构建好的 Graph 对象。
    """
    graph = Graph()  # 创建一个新的Graph对象
    n = len(names_array)  # 获取节点数量

    # 添加所有节点到图
    for name in names_array:
        graph.add_node(name)

    # 遍历邻接矩阵，添加边
    for i in range(n):
        for j in range(n):
            if adjacency_matrix[i, j] == 1:  # 如果邻接矩阵在(i, j)位置的值为1
                graph.add_edge(names_array[i], names_array[j])  # 添加一条边

    return graph

# 测试代码
np.random.seed(2023)  # 设置随机种子

adj_mat = np.random.choice([0, 1], size=(5, 5), p=[1./3, 2./3])
names_v = ("Alpha", "Beta", "Gamma", "Delta", "Epsilon")
G = graph_from_adjacency_matrix(names_v, adj_mat)
G.print_graph()
```





## Section C (30 marks)

In this section we shall explore the breadth-first-search algorithm and its applications.

The following code is for function called `bfs_search` which implements a variant of the breadth-first-search algorithm. The function takes as input a graph object G belonging to the Graph class implemented above, along with a string initial_node_name corresponding to the name of a node within the graph. Given a graph with n nodes, the function then returns the same graph, but modified so that each node node has an additional attributed node.visited so that node.visited is True if the node is reachable from the node initial_node with name initial_node_name, and node.visited is False otherwise.

Note that in the following code we make use of use the doubly-ended queue data structure from Pythons collections library. We can add an element to the right-end of the queue via the append method. We can also remove and return an element from the left-end of the queue via the `popleft()` method.

```python
from collections import deque

def bfs_search(graph:Graph, initial_node_name:str)-> list:
    # initialisation
    initial_node = None
    for node in graph.node_array:
        if node.name == initial_node_name:
            initial_node = node
            node.visited = True
        else:
            node.visited = False
    if initial_node is None:
        print("Start node {sn} not found. ".format(sn=initial_node_name))
        return None
    
    node_queue = deque([initial_node]) # initialise queue data structure
    # bfs search
    while len(node_queue) > 0:
        current_node = node_queue.popleft()
        for edge in current_node.adjacency_list:
            next_node = edge.to_node
            if not next_node.visited:
                node_queue.append(next_node)
                next_node.visited = True
    return graph
```

Let’s see how our code behaves on a simple example.

```python
import numpy as np
np.random.seed(2023) # set random seed

num_nodes = 10

adj_mat = np.random.choice([0, 1], size=(num_nodes,num_nodes), p=[0.7,0.3])
names_v = [chr(ord('A') + i) for i in range(num_nodes)]

G = graph_from_adjacency_matrix(names_v, adj_mat)
G.print_graph()
```

```python
## The graph structure is:
## A : ['B', 'H']
## B : []
## C : ['J']
## D : ['A', 'B', 'D', 'E', 'F', 'G', 'I']
## E : ['F', 'H']
## F : ['B', 'C', 'F']
## G : ['A', 'B', 'D', 'I', 'J']
## H : ['I']
## I : ['A', 'G', 'I']
## J : ['D', 'H', 'J']
```

```python
G = bfs_search(G, "A")

reachable_nodes = []

for node in G.node_array:
    if node.visited:
        reachable_nodes.append(node.name)

print("\nThe reachable nodes are: ")
```

```python
##
## The reachable nodes are:
```

```python
print(*reachable_nodes, sep=', ')
```

```python
## A, B, C, D, E, F, G, H, I, J
```

**(Q1)** Suppose that a graph $G = (V, E)$ has $n = |V |$ vertices and $m = |E|$ edges. What is the worst-case run-time complexity of the algorithm implemented by `bfs_search`. Express your answer in big “O” notation as a function of `n` and m?

**(Q2)** Write a Python called `find_shortest_paths` which takes as input a graph object $G$ belonging to the Graph class implemented above, along with a string `initial_node_name` corresponding to the name of an initial node within the graph. If there is no node with the same name as the string `initial_node_name` then your function should print “Node not found’’. Otherwise, your function should return the same graph but with the following additional attributes for each node in the graph:

1. For each node “w“ within the graph we have an attribute `w.reachable_from_initial` containing con-taining either 0 or a 1. If there is a directed path from the initial node to the node itself “w“, then we should have `w.reachable_from_initial = 1` and if there is no such path then we should have `w.reachable_from_initial = 0`.
2. For each node “w“ within the graph we have an attribute `w.distance_from_initial` which gives the distance of the shortest path within the directed graph from the initial node to $w$, if $w$ is reachable from the initial. If w is not reachable from the initial then `w.distance_from_initial` is “None“.
3. For each node “w“ we have an attribute `w.parent`. If w is reachable from the initial, and is not the initial itself, then `w.parent` is another node u such that there is path with vertex sequence $[v_0, v_1, . . . , v_q]$ within the graph where $v_0$ is the initial node, $v_q−1 = u$, $v_q = w$ and $q$ is the shortest path distance from the initial to $w$. If $w$ is either not reachable from the initial, or is the initial node itself, then `w.parent` is “None“.

Use the following code to test your function:

```python
def find_and_print_shortest_paths(graph:Graph, initial_node_name:str):
    # compute shortest paths
    graph = find_shortest_paths(graph, initial_node_name)
    if graph is None:
        return None
    
    print("The initial node is {s}".format(s=initial_node_name))
    print("\n")
    
    for i in range(graph.num_nodes):
        node = graph.node_array[i]
        if node.name == initial_node_name:
            print("{node} is the initial node.".format(node=node.name))
        
        elif node.reachable_from_initial:
            path_back_to_initial = deque([node.name])
            v = node
            while(not(v.parent is None)):
                path_back_to_initial.appendleft(v.parent.name)
                v = v.parent
            print("{node} : The distance from the initial node is {dist} along the path with vertex sequence ".format(node=node.name, dist = node.distance_from_initial))
            print("{path}".format(path=list(path_back_to_initial)))
        else:
            print("{node} : Not reachable from the initial node ".format(node=node.name))
            
import numpy as np
np.random.seed(2023) # set random seed

num_nodes=20
adj_mat = np.random.choice([0, 1], size=(num_nodes,num_nodes), p=[0.85,0.15])
names_v = [chr(ord('A') + i) for i in range(num_nodes)]
G = graph_from_adjacency_matrix(names_v, adj_mat)

G.print_graph()

find_and_print_shortest_paths(G, "A")
```

## Solution C

### Q1

在分析广度优先搜索（BFS）算法的时间复杂度时，关键是考虑两个主要方面：节点的访问和边的遍历。

- **节点访问**：在最坏情况下，算法需要访问图中的每个节点一次。因此，节点访问的复杂度为 $O(n)$，其中 $n$ 是节点的数量。
- **边的遍历**：在 BFS 中，每条边至多被考虑一次（当从一个节点到其邻接节点时）。因此，边的遍历复杂度为 $O(m)$，其中 $m$ 是边的数量。

综上所述，`bfs_search` 函数的最坏情况时间复杂度是 $O(n+m)$。

### Q2

::: code-tabs

@tab Code1

```python
def find_shortest_paths(graph: Graph, initial_node_name: str):
    # 初始化
    initial_node = None
    for node in graph.node_array:
        node.reachable_from_initial = 0
        node.distance_from_initial = None
        node.parent = None
        if node.name == initial_node_name:
            initial_node = node
            node.reachable_from_initial = 1
            node.distance_from_initial = 0
    if initial_node is None:
        print("Node not found")
        return None

    node_queue = deque([initial_node])  # 使用队列进行BFS

    # BFS算法
    while len(node_queue) > 0:
        current_node = node_queue.popleft()
        for edge in current_node.adjacency_list:
            next_node = edge.to_node
            if next_node.reachable_from_initial == 0:
                next_node.reachable_from_initial = 1
                next_node.distance_from_initial = current_node.distance_from_initial + 1
                next_node.parent = current_node
                node_queue.append(next_node)

    return graph
```

@tab Code2

```python
def find_shortest_paths(graph: Graph, initial_node_name: str) -> Graph:
    """
    通过广度优先搜索找到从初始节点到图中其他节点的最短路径。
    :param graph: 图对象，属于上面实现的Graph类。
    :param initial_node_name: 初始节点的名称。
    :return: 修改后的图对象，包含了最短路径的附加信息。
    """

    # 初始化
    initial_node = None
    for node in graph.node_array:
        node.reachable_from_initial = 0  # 初始化可达性为不可达
        node.distance_from_initial = None  # 初始化距离为None
        node.parent = None  # 初始化父节点为None
        if node.name == initial_node_name:
            initial_node = node  # 找到初始节点
            node.reachable_from_initial = 1  # 设置初始节点为可达
            node.distance_from_initial = 0  # 初始节点到自身的距离为0

    # 如果没有找到初始节点，返回None
    if initial_node is None:
        print("Node not found")
        return None

    # 使用deque创建队列用于BFS
    node_queue = deque([initial_node])

    # 广度优先搜索
    while node_queue:
        current_node = node_queue.popleft()  # 从队列中取出当前节点
        for edge in current_node.adjacency_list:  # 遍历当前节点的邻接列表
            next_node = edge.to_node
            if next_node.reachable_from_initial == 0:  # 如果下一个节点未被访问
                next_node.reachable_from_initial = 1  # 标记为可达
                next_node.distance_from_initial = current_node.distance_from_initial + 1  # 更新距离
                next_node.parent = current_node  # 设置父节点
                node_queue.append(next_node)  # 将下一个节点加入队列

    return graph  # 返回修改后的图
```



:::









## Section D (30 marks)

In this section you will implement a toplogical sort function.

**(Q1)** Write a Python called topological_sort which takes as input a graph object G belonging to the Graph which represents directed acyclic graph. Your function should return a standard Python list containing the nodes within the graph. Each node in the graph should be included in the list exactly once. Moreover, the ordering of the nodes within the returned list should be a topological ordering, so if there is an edge $e = (u, w)$ in the graph, then the node $w$ should not occur earlier than the node $u$ within the list.

You may wish to utilise Python’s doubly-linked list data structure, the doubly-ended queue from Pythons collections library.

```python
from collections import deque
```

You can create an empty doubly-linked-list as follows:

```python
A = deque([])
```

We can add an element to the left end of the queue via the appendleft method:

```python
A.appendleft(5)
A.appendleft(15)
```

We can remove and return an element from the left-end of the queue via the `popleft()` method.

```python
A.popleft()
```

```python
## 15
```

**Important:** Once you have written the topological_sort function use the following code to test your function:

```python
np.random.seed(2023) # set random seed

for j in range(6, 30, 2):
    names_v = [chr(ord('A') + i) for i in range(j)]
    np.random.shuffle(names_v)
    G = graph_from_adjacency_matrix(names_v,np.triu(np.ones((j,j)), 1))
    np.random.shuffle(G.node_array)
    top_order = topological_sort(G)
    print(*(node.name for node in top_order), sep=',')
```

## Solution D

### Q1

::: code-tabs

@tab Code1

```python
def topological_sort(graph: Graph) -> list:
    """
    对有向无环图执行拓扑排序。
    :param graph: 图对象，属于上面实现的Graph类。
    :return: 按拓扑排序的节点列表。
    """
    def dfs(node, visited, stack):
        """
        深度优先搜索辅助函数。
        :param node: 当前节点。
        :param visited: 已访问节点集合。
        :param stack: 存储排序结果的栈。
        """
        visited.add(node)
        for edge in node.adjacency_list:
            if edge.to_node not in visited:
                dfs(edge.to_node, visited, stack)
        stack.appendleft(node)  # 将节点添加到栈的左侧

    visited = set()  # 初始化已访问节点集合
    stack = deque()  # 初始化双端队列

    # 对每个未访问的节点执行DFS
    for node in graph.node_array:
        if node not in visited:
            dfs(node, visited, stack)

    return list(stack)  # 返回栈中的节点列表

# 测试代码
np.random.seed(2023)  # 设置随机种子

for j in range(6, 30, 2):
    names_v = [chr(ord('A') + i) for i in range(j)]
    np.random.shuffle(names_v)
    G = graph_from_adjacency_matrix(names_v, np.triu(np.ones((j, j)), 1))
    np.random.shuffle(G.node_array)
    top_order = topological_sort(G)
    print(*(node.name for node in top_order), sep=',')
```

@tab Coder 2

```python
from collections import deque

def topological_sort(graph: Graph) -> list:
    """
    对有向无环图进行拓扑排序。
    :param graph: 图对象，属于上面实现的Graph类。
    :return: 拓扑排序的结果，是一个包含图中所有节点的列表。
    """
    # 计算所有节点的入度
    in_degree = {node: 0 for node in graph.node_array}
    for node in graph.node_array:
        for edge in node.adjacency_list:
            in_degree[edge.to_node] += 1

    # 初始化队列，将所有入度为0的节点加入队列
    queue = deque()
    for node in in_degree:
        if in_degree[node] == 0:
            queue.append(node)

    # 进行拓扑排序
    top_order = []
    while queue:
        node = queue.popleft()
        top_order.append(node)

        # 减少所有邻接节点的入度
        for edge in node.adjacency_list:
            in_degree[edge.to_node] -= 1
            if in_degree[edge.to_node] == 0:
                queue.append(edge.to_node)

    return top_order
```

@tab 注释

```python
from collections import deque

def topological_sort(graph: Graph) -> list:
    """
    对有向无环图进行拓扑排序。
    :param graph: 图对象，属于上面实现的Graph类。
    :return: 拓扑排序的结果，是一个包含图中所有节点的列表。
    """

    # 步骤1: 计算所有节点的入度
    # 初始化所有节点的入度为0
    in_degree = {node: 0 for node in graph.node_array}
    for node in graph.node_array:
        for edge in node.adjacency_list:
            in_degree[edge.to_node] += 1  # 对每个节点的邻接节点，增加它们的入度

    # 步骤2: 初始化队列，将所有入度为0的节点加入队列
    queue = deque()
    for node in in_degree:
        if in_degree[node] == 0:
            queue.append(node)  # 入度为0的节点加入队列

    # 步骤3: 进行拓扑排序
    top_order = []  # 存储拓扑排序的结果
    while queue:
        node = queue.popleft()  # 从队列中取出一个节点
        top_order.append(node)  # 将该节点添加到拓扑排序结果中

        # 减少所有邻接节点的入度
        for edge in node.adjacency_list:
            in_degree[edge.to_node] -= 1  # 减少邻接节点的入度
            if in_degree[edge.to_node] == 0:
                queue.append(edge.to_node)  # 如果邻接节点的入度变为0，将其加入队列

    # 返回拓扑排序的结果
    return top_order
```

:::





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
