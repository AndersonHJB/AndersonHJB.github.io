---
title: Exercise 7 LSE Home MA407
icon: python
date: 2023-11-14 22:28:17
author: AI悦创
isOriginal: true
category: 
    - python 1v1
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 伦敦政经
    - LSE Home
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

Please submit your solutions to these questions on Gradescope in a PDF file.

## Exercise 7.1

(a) Explain how to implement a queue using two stacks. Analyse the running time of the queue operations `enqueue` and `dequeue`.

(b) Explain how to implement a stack using two queues. Analyse the running time of the stack operations `pop` and `push`.

## Solution 7.1

### (a)

- **`enqueue` 操作**：在这个操作中，我们将元素压入第一个栈。时间复杂度是 $O(1)$。
- **`dequeue` 操作**：为了执行出队操作，我们首先检查第二个栈是否为空。如果为空，我们将第一个栈中的所有元素弹出并压入第二个栈，这样第一个元素现在在第二个栈的顶部。然后，我们从第二个栈中弹出元素。如果第二个栈不为空，我们直接从第二个栈中弹出顶部元素。在最坏的情况下，时间复杂度是 $O(n)$，但平摊时间复杂度是 $O(1)$。

### (b)

- **`push` 操作**：将元素加入到一个空的队列中，然后将另一个队列中的所有元素依次出队并入队到这个包含新元素的队列中。这样，新元素就被放在了队列的前面，模拟了栈的顶部。时间复杂度是 $O(n)$。
- **`pop` 操作**：由于新元素总是在队列的前面，我们可以直接从队列中出队一个元素，这就模拟了栈的弹出操作。时间复杂度是 $O(1)$。



## Exercise 7.2

Suppose you need to insert unique 3-character IDs into a hash table, where each ID is made up of some combination of two of the capital letters A-D, followed by one of the lower case letters x-z, such as: ABx, DCy, BBz, etc. Repeat letters are allowed in an ID.

(a)  How many unique 3-character IDs are there?

(b)  What is the smallest length of the `keys` list for which we can guarantee that no LinkedList in `keys` has length more than 2?

(c)  Describe a hash function for this setting that guarantees that no key collides with more than one other key.

## Solution 7.2

### (a)

- 有 4 个大写字母（A, B, C, D），可以形成 4 x 4 = 16 种不同的两字母组合。
- 有 3 个小写字母（x, y, z）可以添加到每个两字母组合后。
- 所以：共有 16 种组合（AA, AB, AC, AD, BA, BB, BC, BD, CA, CB, CC, CD, DA, DB, DC, DD），每种组合可以跟随 3 个小写字母之一（x, y, z）；
- 因此，总的唯一 ID 数量为 16（两字母组合）x 3（小写字母选择）= 48。

### (b)

- 要求每个链表长度不超过 2，哈希表的大小至少应该是唯一 ID 数量的一半。
- 因为有 48 个唯一 ID，所以哈希表的最小长度应该是 48 / 2 = 24。
- 由于哈希表长度必须是整数，所以向上取整为 24。

- 因此，最小长度为 $⌈\frac{48}{2}⌉=24$ 。

### (c)

- 将大写字母对应到一个 0-15 的数字。例如，AA 可以是 0，AB 是 1，依此类推，直到 DD 是 15。
- 将小写字母 x, y, z 映射为 0, 1, 2。
- 哈希函数计算方式：`哈希值 = 大写字母数字 * 3 + 小写字母数字`。
- 这种方式确保每个 ID 的哈希值唯一，并且每个键最多只与一个其他键冲突。

> 一个可能的哈希函数是先将两个大写字母转换为一个 0-15 之间的数字（例如，通过查找表或计算），然后将小写字母 x, y, z 映射为 0, 1, 2。然后计算哈希值为 $\text{大写字母数字} \times 3 + \text{小写字母数字}$，这样可以保证每个键最多与一个其他键冲突。



## Exercise 7.3

In this question, you are asked to implement a binary search tree (See Chapter 12 in the course textbook).A binary search tree is organised in the form of a binary tree, where each node stores a `value` attribute (say, an integer) and two links, to the left and the right child of the current node. Both children of a leaf node are None. In addition, a binary search tree satisfies the following property:

Let `x` be a node in a binary search tree. If y is a node in the left subtree of `x`, then `y`.$value \leq x$.value. If y is a node in the right subtree of x, then `y`.$value > x$.value. (Here we broke the ties towards the left, differently from the textbook.)

Below is a template code for a binary search tree implementation.

```python
class Node:
    def __init__(self, val):
        self.left = None
        self.right = None
        self.value = val
        
class BinarySearchTree:
    def __init__(self):
        self.root = None
    # returns the minimum, which is in the left-most item;
    # returns None if the tree is empty
    def min(self):
    # Part (a)
    
    # inserts x in the tree unless present;
    # returns pointer to Node with value x
    def insert(self, x):
    # Part (b)
    
    # finds value x in the tree, returns Node containing it;
    # if not present , returns None
    def find(self, x):
    # Part (c)
    
    def delete(self, x):
    # Extra
```

(a)  Implement a Python function `min()` that returns the minimim value stored in the current binary search tree.

(b)  Implement a Python function `insert(x)` that inserts the value x into the binary search tree (unless it already exists) and returns a pointer to the Node with value x.

(c)  Implement a Python function `find(x)` that finds the value x in the binary search tree and returns a pointer to the Node containing it (if it exists). If x is not present in the tree, than it returns `None`.

**Extra**: Note that deleting a value from a binary search tree is slightly more tricky: for example, consider deleting a node with two children. What should we do with the subtrees? 

This is a useful exercise to increase your understanding of dynamic data structures and, in particular, binary search trees. You are strongly encouraged to work on this!

To start with, it is very helpful to also have a parent pointer for each node in this case. So, add a `parent` attribute to the `Node` class and make sure to maintain them correctly when inserting a new node to the tree. The parent of the root should be `None`.

Deleting a leaf is easy! Now, consider how you would delete a node `p` with no left child. As there is only one child, as we remove `p`, we can carefully attach the only child of `p` to the parent of p (with case distinction on whether p is a left or a right child). Deleting a node with no right child is analogous, but must be handled separately. So, we can have two separate functions `deleteWithoutLeft(node)` and `deleteWithoutRight(node)`.

Finally, in general, deleting a value `x` will first require finding the node `p` that contains it (as we have done above). Then if this node has a single child, we can use `deleteWithoutLeft(p)` or `deleteWithoutRight(p)`. In the case the node has two children, we can replace `p.value` with the “smallest” value in the right subtree of p: that is, in the left-most node `q` of the subtree. That takes care of deleting the value `x`. What we have to do at the end is to delete node `q`, which has no left child, using `DeleteWithoutLeft(q)`.

## Solution 7.3

::: code-tabs

@tab Code1

```python
class Node:
    def __init__(self, val):
        self.left = None   # 左子节点
        self.right = None  # 右子节点
        self.parent = None # 父节点
        self.value = val   # 节点值

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def min(self, node=None):
        """返回树中最小值。"""
        if node is None:
            node = self.root

        if node is None:
            return None

        while node.left is not None:
            node = node.left
        return node

    def insert(self, x):
        """插入值x到二叉搜索树。如果x不存在，则创建新节点。"""
        if self.root is None:
            self.root = Node(x)
            return self.root

        current = self.root
        while True:
            if x < current.value:
                if current.left is None:
                    current.left = Node(x)
                    current.left.parent = current
                    return current.left
                current = current.left
            elif x > current.value:
                if current.right is None:
                    current.right = Node(x)
                    current.right.parent = current
                    return current.right
                current = current.right
            else:
                return current  # x已存在

    def find(self, x):
        """在树中查找值为x的节点。如果存在，返回节点，否则返回None。"""
        current = self.root
        while current is not None:
            if x < current.value:
                current = current.left
            elif x > current.value:
                current = current.right
            else:
                return current
        return None

    def deleteWithoutLeft(self, node):
        """删除一个没有左子节点的节点。"""
        if node.parent is None:
            self.root = node.right
            if self.root is not None:
                self.root.parent = None
        elif node.parent.left == node:
            node.parent.left = node.right
        else:
            node.parent.right = node.right
        if node.right is not None:
            node.right.parent = node.parent

    def deleteWithoutRight(self, node):
        """删除一个没有右子节点的节点。"""
        if node.parent is None:
            self.root = node.left
            if self.root is not None:
                self.root.parent = None
        elif node.parent.left == node:
            node.parent.left = node.left
        else:
            node.parent.right = node.left
        if node.left is not None:
            node.left.parent = node.parent

    def delete(self, x):
        """删除值为x的节点。"""
        node_to_delete = self.find(x)
        if node_to_delete is None:
            return

        if node_to_delete.left is not None and node_to_delete.right is not None:
            # 对于有两个子节点的节点，找到右子树中最小的节点
            successor = self.min(node_to_delete.right)
            node_to_delete.value = successor.value
            if successor.right is not None:
                self.deleteWithoutLeft(successor)
            else:
                self.deleteWithoutRight(successor)
        elif node_to_delete.left is None and node_to_delete.right is not None:
            self.deleteWithoutLeft(node_to_delete)
        elif node_to_delete.right is None and node_to_delete.left is not None:
            self.deleteWithoutRight(node_to_delete)
        else:
            # 删除叶子节点
            if node_to_delete.parent is None:
                self.root = None
            elif node_to_delete.parent.left == node_to_delete:
                node_to_delete.parent.left = None
            else:
                node_to_delete.parent.right = None
```

@tab Code2

```python
# Let's execute the provided code to verify its correctness and functionality.

class Node:
    def __init__(self, val):
        self.left = None   # Left child
        self.right = None  # Right child
        self.parent = None # Parent node
        self.value = val   # Node value

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def min(self, node=None):
        """Returns the minimum value in the tree."""
        if node is None:
            node = self.root

        if node is None:
            return None

        while node.left is not None:
            node = node.left
        return node

    def insert(self, x):
        """Inserts value x into the binary search tree. If x does not exist, a new node is created."""
        if self.root is None:
            self.root = Node(x)
            return self.root

        current = self.root
        while True:
            if x < current.value:
                if current.left is None:
                    current.left = Node(x)
                    current.left.parent = current
                    return current.left
                current = current.left
            elif x > current.value:
                if current.right is None:
                    current.right = Node(x)
                    current.right.parent = current
                    return current.right
                current = current.right
            else:
                return current  # x already exists

    def find(self, x):
        """Finds a node with value x in the tree. If it exists, returns the node, otherwise returns None."""
        current = self.root
        while current is not None:
            if x < current.value:
                current = current.left
            elif x > current.value:
                current = current.right
            else:
                return current
        return None

    def deleteWithoutLeft(self, node):
        """Deletes a node that does not have a left child."""
        if node.parent is None:
            self.root = node.right
            if self.root is not None:
                self.root.parent = None
        elif node.parent.left == node:
            node.parent.left = node.right
        else:
            node.parent.right = node.right
        if node.right is not None:
            node.right.parent = node.parent

    def deleteWithoutRight(self, node):
        """Deletes a node that does not have a right child."""
        if node.parent is None:
            self.root = node.left
            if self.root is not None:
                self.root.parent = None
        elif node.parent.left == node:
            node.parent.left = node.left
        else:
            node.parent.right = node.left
        if node.left is not None:
            node.left.parent = node.parent

    def delete(self, x):
        """Deletes a node with value x."""
        node_to_delete = self.find(x)
        if node_to_delete is None:
            return

        if node_to_delete.left is not None and node_to_delete.right is not None:
            # For a node with two children, find the smallest node in the right subtree
            successor = self.min(node_to_delete.right)
            node_to_delete.value = successor.value
            if successor.right is not None:
                self.deleteWithoutLeft(successor)
            else:
                self.deleteWithoutRight(successor)
        elif node_to_delete.left is None and node_to_delete.right is not None:
            self.deleteWithoutLeft(node_to_delete)
        elif node_to_delete.right is None and node_to_delete.left is not None:
            self.deleteWithoutRight(node_to_delete)
        else:
            # Deleting a leaf node
            if node_to_delete.parent is None:
                self.root = None
            elif node_to_delete.parent.left == node_to_delete:
                node_to_delete.parent.left = None
            else:
                node_to_delete.parent.right = None

# Creating a binary search tree and testing the methods
bst = BinarySearchTree()
bst.insert(15)
bst.insert(10)
bst.insert(20)
bst.insert(8)
bst.insert(12)
bst.insert(17)
bst.insert(25)

# Testing find, min, and delete functions
min_node = bst.min()
found_node = bst.find(12)
bst.delete(12)
deleted_node = bst.find(12)

(min_node.value if min_node else None, found_node.value if found_node else None, deleted_node)
```

@tab Code3

```python
class Node:
    def __init__(self, val):
        self.left = None   # 左子节点，初始化为 None
        self.right = None  # 右子节点，初始化为 None
        self.parent = None # 父节点，初始化为 None
        self.value = val   # 节点值，初始化为传入的 val

class BinarySearchTree:
    def __init__(self):
        self.root = None  # 根节点，初始化为 None

    def min(self, node=None):
        """返回树中最小值的节点。"""
        if node is None:
            node = self.root  # 如果未指定起始节点，则从根节点开始

        if node is None:
            return None  # 如果树为空，返回 None

        while node.left is not None:
            node = node.left  # 沿着左子树一直往下寻找，直到找到最左侧节点
        return node  # 返回最小值节点

    def insert(self, x):
        """插入值x到二叉搜索树。如果x不存在，则创建新节点。"""
        if self.root is None:
            self.root = Node(x)  # 如果树为空，将新节点设置为根节点
            return self.root

        current = self.root
        while True:
            if x < current.value:
                if current.left is None:
                    current.left = Node(x)  # 如果左子节点为空，创建新节点并插入
                    current.left.parent = current  # 设置新节点的父节点
                    return current.left
                current = current.left  # 否则继续在左子树中查找插入位置
            elif x > current.value:
                if current.right is None:
                    current.right = Node(x)  # 如果右子节点为空，创建新节点并插入
                    current.right.parent = current  # 设置新节点的父节点
                    return current.right
                current = current.right  # 否则继续在右子树中查找插入位置
            else:
                return current  # 如果找到值相等的节点，直接返回该节点

    def find(self, x):
        """在树中查找值为x的节点。如果存在，返回节点，否则返回None。"""
        current = self.root
        while current is not None:
            if x < current.value:
                current = current.left  # 如果x小于当前节点值，继续在左子树中查找
            elif x > current.value:
                current = current.right  # 如果x大于当前节点值，继续在右子树中查找
            else:
                return current  # 如果找到值相等的节点，返回该节点
        return None  # 如果未找到，返回None

    def deleteWithoutLeft(self, node):
        """删除一个没有左子节点的节点。"""
        if node.parent is None:
            self.root = node.right  # 如果要删除的是根节点，将右子节点设为新的根节点
            if self.root is not None:
                self.root.parent = None  # 更新新根节点的父节点为None
        elif node.parent.left == node:
            node.parent.left = node.right  # 如果要删除的节点是左子节点，用其右子节点替换它
        else:
            node.parent.right = node.right  # 如果要删除的节点是右子节点，用其右子节点替换它
        if node.right is not None:
            node.right.parent = node.parent  # 更新右子节点的父节点

    def deleteWithoutRight(self, node):
        """删除一个没有右子节点的节点。"""
        if node.parent is None:
            self.root = node.left  # 如果要删除的是根节点，将左子节点设为新的根节点
            if self.root is not None:
                self.root.parent = None  # 更新新根节点的父节点为None
        elif node.parent.left == node:
            node.parent.left = node.left  # 如果要删除的节点是左子节点，用其左子节点替换它
        else:
            node.parent.right = node.left  # 如果要删除的节点是右子节点，用其左子节点替换它
        if node.left is not None:
            node.left.parent = node.parent  # 更新左子节点的父节点

    def delete(self, x):
        """删除值为x的节点。"""
        node_to_delete = self.find(x)  # 先查找值为x的节点
        if node_to_delete is None:
            return  # 如果节点不存在，直接返回

        if node_to_delete.left is not None and node_to_delete.right is not None:
            # 如果要删除的节点有两个子节点
            successor = self.min(node_to_delete.right)  # 找到右子树中最小的节点
            node_to_delete.value = successor.value  # 将后继节点的值复制到当前节点
            # 删除后继节点
            if successor.right is not None:
                self.deleteWithoutLeft(successor)
            else:
                self.deleteWithoutRight(successor)
        elif node_to_delete.left is None and node_to_delete.right is not None:
            self.deleteWithoutLeft(node_to_delete)  # 如果只有右子节点，使用deleteWithoutLeft
        elif node_to_delete.right is None and node_to_delete.left is not None:
            self.deleteWithoutRight(node_to_delete)  # 如果只有左子节点，使用deleteWithoutRight
        else:
            # 删除叶子节点
            if node_to_delete.parent is None:
                self.root = None  # 如果是根节点，将树的根设为None
            elif node_to_delete.parent.left == node_to_delete:
                node_to_delete.parent.left = None  # 如果是左子节点，将父节点的左指针设为None
            else:
                node_to_delete.parent.right = None  # 如果是右子节点，将父节点的右指针设为None

```





:::











### (a) 实现 `min()` 函数

```python
def min(self):
    # 从根节点开始
    current = self.root
    # 沿着左子树不断向下移动
    while current.left is not None:
        current = current.left
    # 当没有更多的左子节点时，当前节点即为最小值所在的节点
    return current.value
```

### (b) 实现 `insert(x)` 函数

```python
def insert(self, x):
    # 如果树是空的，直接在根处插入新节点
    if self.root is None:
        self.root = Node(x)
        return self.root

    # 否则，从根节点开始查找插入位置
    current = self.root
    while True:
        # 如果x小于当前节点的值，去左子树
        if x < current.value:
            # 如果左子树为空，就在这里插入新节点
            if current.left is None:
                current.left = Node(x)
                return current.left
            current = current.left
        # 如果x大于当前节点的值，去右子树
        elif x > current.value:
            # 如果右子树为空，就在这里插入新节点
            if current.right is None:
                current.right = Node(x)
                return current.right
            current = current.right
        else:
            # 如果x已经存在，不再插入，直接返回该节点
            return current
```

### (c) 实现 `find(x)` 函数

```python
def find(self, x):
    # 从根节点开始搜索
    current = self.root
    while current is not None:
        # 如果x小于当前节点的值，去左子树
        if x < current.value:
            current = current.left
        # 如果x大于当前节点的值，去右子树
        elif x > current.value:
            current = current.right
        else:
            # 找到了x，返回当前节点
            return current
    # 如果未找到，返回None
    return None
```





```python
class Node:
    def __init__(self, val):
        self.left = None
        self.right = None
        self.parent = None  # 添加父节点引用
        self.value = val

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def min(self):
        """
        返回树中存储的最小值。
        如果树为空，返回 None。
        """
        if self.root is None:
            return None

        current = self.root
        while current.left is not None:
            current = current.left
        return current.value

    def insert(self, x):
        """
        将值 x 插入二叉搜索树（除非它已存在）。
        返回包含值 x 的节点的指针。
        """
        parent = None
        current = self.root
        while current is not None:
            parent = current
            if x < current.value:
                current = current.left
            elif x > current.value:
                current = current.right
            else:
                # x 已经存在
                return current

        new_node = Node(x)
        new_node.parent = parent

        if parent is None:
            self.root = new_node
        elif x < parent.value:
            parent.left = new_node
        else:
            parent.right = new_node

        return new_node

    def find(self, x):
        """
        在树中查找值 x，返回包含它的节点。
        如果未找到，则返回 None。
        """
        current = self.root
        while current is not None:
            if x < current.value:
                current = current.left
            elif x > current.value:
                current = current.right
            else:
                return current
        return None

    def delete(self, x):
        """
        删除值 x。如果 x 存在于树中，则删除该节点。
        否则不执行任何操作。
        """
        def transplant(node1, node2):
            """
            用 node2 替换 node1。node1 的父节点现在变成 node2 的父节点。
            """
            if node1.parent is None:
                self.root = node2
            elif node1 == node1.parent.left:
                node1.parent.left = node2
            else:
                node1.parent.right = node2

            if node2 is not None:
                node2.parent = node1.parent

        node_to_delete = self.find(x)
        if node_to_delete is None:
            return

        if node_to_delete.left is None:
            transplant(node_to_delete, node_to_delete.right)
        elif node_to_delete.right is None:
            transplant(node_to_delete, node_to_delete.left)
        else:
            min_right_subtree = node_to_delete.right
            while min_right_subtree.left is not None:
                min_right_subtree = min_right_subtree.left

            if min_right_subtree.parent != node_to_delete:
                transplant(min_right_subtree, min_right_subtree.right)
                min_right_subtree.right = node_to_delete.right
                min_right_subtree.right.parent = min_right_subtree

            transplant(node_to_delete, min_right_subtree)
            min_right_subtree.left = node_to_delete.left
            min_right_subtree.left.parent = min_right_subtree

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
