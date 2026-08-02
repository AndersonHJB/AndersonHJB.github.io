---
title: Week 5 ASSESSED LAB TASK ADV_1
date: 2024-11-05 09:07:05
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

## Introduction (Recap)

CUH500CMD is assessed by coursework and exam. 

For the coursework, you need to submit a portfolio of work you’ve completed each week in the labs (and in your own time outside the labs). 

Each week, there will be up to 4 types of task: 

| Non-assessed  Standard | Assessed  Standard |
| ---------------------- | ------------------ |
| Non-assessed  Advanced | Assessed  Advanced |

In Week 12, you’ll need to submit the 3 standard assessed tasks and 2 advanced assessed tasks. The selected standard assessed tasks and advanced assessed tasks are provided on the coursework brief. There are FIVE standard assessed tasks and THREE advanced assessed tasks to select from. 

We will give solutions to some or all of the non-assessed standard and non-assessed advanced tasks a week after they were set. And we may give one of the solutions at the end of the current session. We will (for obvious reasons) give no solutions for the assessment standard and assessed advanced tasks. However, those tasks will always be related in some way to the non-assessed tasks. 

## ASSESSED ADVANCED TASK 1/3

**Assessed Advanced Task 1/3:** **Remove method for Binary Tree class**                 **Advanced**

From the partial pseudocode given below (one case is omitted), implement an iterative method called remove which deletes a node and reorganises the tree. There are indications where the pseudocode is missing. NB the pseudocode crosses pages. 

Add comments to show your understanding. 

Implement your solution into the python Binary Tree class given on this week’s Aula in the zip folder, ‘BST-class’. 

Make sure that remove works correctly; that is, not only is the target node deleted, but the tree is also correctly re-organised. If not, it may mean the pseudocode needs some detail adding. 

You may decide, if you wish, to implement the entire class and solution in C++ instead of, or in addition to, the python solution, but this is not mandatory for this task. 

::: code-tabs

@tab 伪代码1

```python
REMOVE(tree, target)
	IF tree.root IS None											//if no tree
		RETURN False
	ELSE IF tree.root.data = target								//if tree root is target
		IF tree.root.left IS None AND tree.root.right IS None
			tree.root ← None
		ELSE IF tree.root.left AND tree.root.right IS None
			tree.root ← tree.root.left
		ELSE IF tree.root.left IS None AND tree.root.right
			tree.root ← tree.root.right
		ELSE IF tree.root.left AND tree.root.right
			IF_LEFT_AND_RIGHT(tree.root)

(continues over)
																	//if root is not target
	parent ← None
	node ← tree.root

	WHILE node and node.data != target
		parent ← node
		IF target < node.data
			node ← node.left
		ELSE IF target > node.data
			node ← node.right

	IF node IS None OR node.data != target					//CASE 1: Target not found
		RETURN False											//for info only (we could not find it)

	ELSE IF node.left IS None AND node.right IS None		//CASE 2: Target has no children
		IF target < parent.data
			parent.left ← None
		ELSE
			parent.right ← None
		RETURN True												//info only
	
	ELSE IF node.left AND node.right IS None					//CASE 3: Target has left child only
		IF target < parent.data
			parent.left ← node.left
		ELSE
			parent.right ← node.left
		RETURN True												//info only

	NOT IMPLEMENTED											//CASE 4: Target has right child only

	ELSE															//CASE 5: Target has left and right children
		IF_LEFT_AND_RIGHT(node)










(continues over)
IF_LEFT_AND_RIGHT(node)								//called if delete node whether root or otherwise
	delNodeParent ← node									//has left and right children
	delNode = node.right
	
	WHILE delNode.left
		delNodeParent ← delNode
		delNode ← delNode.left

	node.data ← delNode.data
	
	IF delNode.right
		IF delNodeParent.data > delNode.data
			delNodeParent.left ← delNode.right
		ELSE
			delNodeParent.right ← delNode.right
	
	ELSE
		IF delNode.data < delNodeParent.data
			delNodeParent.left ← None
		ELSE
			delNodeParent.right ← None
```



@tab 伪代码2

```python
REMOVE(tree, target)
	IF tree.root IS None											//if no tree
		RETURN False
	ELSE IF tree.root.data = target								//if tree root is target
		IF tree.root.left IS None AND tree.root.right IS None
			tree.root ← None
		ELSE IF tree.root.left AND tree.root.right IS None
			tree.root ← tree.root.left
		ELSE IF tree.root.left IS None AND tree.root.right
			tree.root ← tree.root.right
		ELSE IF tree.root.left AND tree.root.right
			IF_LEFT_AND_RIGHT(tree.root)

(continues over)
																	//if root is not target
	parent ← None
	node ← tree.root

	WHILE node and node.data != target
		parent ← node
		IF target < node.data
			node ← node.left
		ELSE IF target > node.data
			node ← node.right

	IF node IS None OR node.data != target					//CASE 1: Target not found
		RETURN False											//for info only (we could not find it)

	ELSE IF node.left IS None AND node.right IS None		//CASE 2: Target has no children
		IF target < parent.data
			parent.left ← None
		ELSE
			parent.right ← None
		RETURN True												//info only
	
	ELSE IF node.left AND node.right IS None					//CASE 3: Target has left child only
		IF target < parent.data
			parent.left ← node.left
		ELSE
			parent.right ← node.left
		RETURN True												//info only

	NOT IMPLEMENTED											//CASE 4: Target has right child only

	ELSE															//CASE 5: Target has left and right children
        IF_LEFT_AND_RIGHT(node)								//called if delete node whether root or otherwise
            delNodeParent ← node									//has left and right children
            delNode = node.right

            WHILE delNode.left
                delNodeParent ← delNode
                delNode ← delNode.left

            node.data ← delNode.data

            IF delNode.right
                IF delNodeParent.data > delNode.data
                    delNodeParent.left ← delNode.right
                ELSE
                    delNodeParent.right ← delNode.right

            ELSE
                IF delNode.data < delNodeParent.data
                    delNodeParent.left ← None
                ELSE
                    delNodeParent.right ← None

```

@tab 题目代码

```python
""" Basic BST code for inserting (i.e. building) and printing a tree

    Your ***second standard viva task*** (of 5) will be to implement a find method into
    the class BinaryTree from pseudocode. See the lab task sheet for Week 5. 

    Your ***first advanced viva task*** (of 3) will be to implement a remove (delete) method
    into the class Binary Tree from partial pseudocode. See the lab task sheet for Week 5 (available in Week 5).

    There will be some ***introductory challenges*** in Week 4, with solutions released in Week 5.
    It is STRONGLY RECOMMENDED you attempt these!

    Since the given code is in python it is strongly suggested you stay with python; but
    if you want to reimplement as C++ this is also OK (see the Week 5 lab sheet guidance). 
"""

import math

""" Node class
"""

class Node:
    def __init__(self, data = None):
        self.data = data
        self.left = None
        self.right = None

""" BST class with insert and display methods. display pretty prints the tree
"""

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, data):
        if self.root is None:
            self.root = Node(data)
        else:
            self._insert(data, self.root)

    def _insert(self, data, cur_node):
        if data < cur_node.data:
            if cur_node.left is None:
                cur_node.left = Node(data)
            else:
                self._insert(data, cur_node.left)
        elif data > cur_node.data:
            if cur_node.right is None:
                cur_node.right = Node(data)
            else:
                self._insert(data, cur_node.right)
        else:
            print("Value already present in tree")

    def display(self, cur_node):
        lines, _, _, _ = self._display(cur_node)
        for line in lines:
            print(line)


    def _display(self, cur_node):
        
        if cur_node.right is None and cur_node.left is None:
            line = '%s' % cur_node.data
            width = len(line)
            height = 1
            middle = width // 2
            return [line], width, height, middle

        if cur_node.right is None:
            lines, n, p, x = self._display(cur_node.left)
            s = '%s' % cur_node.data
            u = len(s)
            first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s
            second_line = x * ' ' + '/' + (n - x - 1 + u) * ' '
            shifted_lines = [line + u * ' ' for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, n + u // 2
        
        if cur_node.left is None:
            lines, n, p, x = self._display(cur_node.right)
            s = '%s' % cur_node.data
            u = len(s)
            first_line = s + x * '_' + (n - x) * ' '
            second_line = (u + x) * ' ' + '\\' + (n - x - 1) * ' '
            shifted_lines = [u * ' ' + line for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, u // 2

        left, n, p, x = self._display(cur_node.left)
        right, m, q, y = self._display(cur_node.right)
        s = '%s' % cur_node.data
        u = len(s)
        first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s + y * '_' + (m - y) * ' '
        second_line = x * ' ' + '/' + (n - x - 1 + u + y) * ' ' + '\\' + (m - y - 1) * ' '
        if p < q:
            left += [n * ' '] * (q - p)
        elif q < p:
            right += [m * ' '] * (p - q)
        zipped_lines = zip(left, right)
        lines = [first_line, second_line] + [a + u * ' ' + b for a, b in zipped_lines]
        return lines, n + m + u, max(p, q) + 2, n + u // 2

#example calls, which construct and display the tree       
bst = BinaryTree()
bst.insert(4)
bst.insert(2)
bst.insert(6)
bst.insert(1)
bst.insert(3)
bst.insert(5)
bst.insert(7)
bst.insert(8)
bst.insert(9)
bst.insert(10)
bst.insert(11)
bst.insert(12)
bst.insert(13)
bst.insert(14)
bst.insert(15)
bst.insert(100)
bst.insert(200)

bst.display(bst.root)
```

@tab 肖

```python
import math

""" Node class
"""


class Node:
    def __init__(self, data=None):
        self.data = data
        self.left = None
        self.right = None


""" BST class with insert and display methods. display pretty prints the tree
"""


class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, data):
        if self.root is None:
            self.root = Node(data)
        else:
            self._insert(data, self.root)

    def _insert(self, data, cur_node):
        if data < cur_node.data:
            if cur_node.left is None:
                cur_node.left = Node(data)
            else:
                self._insert(data, cur_node.left)
        elif data > cur_node.data:
            if cur_node.right is None:
                cur_node.right = Node(data)
            else:
                self._insert(data, cur_node.right)
        else:
            print("Value already present in tree")

    def display(self, cur_node):
        lines, _, _, _ = self._display(cur_node)
        for line in lines:
            print(line)

    def _display(self, cur_node):

        if cur_node.right is None and cur_node.left is None:
            line = '%s' % cur_node.data
            width = len(line)
            height = 1
            middle = width // 2
            return [line], width, height, middle

        if cur_node.right is None:
            lines, n, p, x = self._display(cur_node.left)
            s = '%s' % cur_node.data
            u = len(s)
            first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s
            second_line = x * ' ' + '/' + (n - x - 1 + u) * ' '
            shifted_lines = [line + u * ' ' for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, n + u // 2

        if cur_node.left is None:
            lines, n, p, x = self._display(cur_node.right)
            s = '%s' % cur_node.data
            u = len(s)
            first_line = s + x * '_' + (n - x) * ' '
            second_line = (u + x) * ' ' + '\\' + (n - x - 1) * ' '
            shifted_lines = [u * ' ' + line for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, u // 2

        left, n, p, x = self._display(cur_node.left)
        right, m, q, y = self._display(cur_node.right)
        s = '%s' % cur_node.data
        u = len(s)
        first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s + y * '_' + (m - y) * ' '
        second_line = x * ' ' + '/' + (n - x - 1 + u + y) * ' ' + '\\' + (m - y - 1) * ' '
        if p < q:
            left += [n * ' '] * (q - p)
        elif q < p:
            right += [m * ' '] * (p - q)
        zipped_lines = zip(left, right)
        lines = [first_line, second_line] + [a + u * ' ' + b for a, b in zipped_lines]
        return lines, n + m + u, max(p, q) + 2, n + u // 2

    def remove(self, target):
        if self.root is None:  # If the tree is empty, return immediately.
            return False
        elif self.root.data == target:  # if tree root is target
            if self.root.left is None or self.root.right is None:
                # If the tree root has no children, then `root_child = None`.
                root_child = self.root.left or self.root.right
                self.root = root_child  # Directly delete the root node.
        else:
            self.root = self.if_left_and_right(self.root)

        """The tree root is not the target"""
        cur, parent = self.root, None
        while cur is not None and cur.data != target:
            parent = cur
            if target < parent.data:
                cur = cur.left
            elif target > parent.data:
                cur = cur.right
        # The while loop has ended, and the target node has been found and stored in `cur`.
        if cur is None:  # case 1:Target not found
            return  # end the function

        elif cur.left is None or cur.right is None:
            # If `cur` has no children, then `child = None`.
            child = cur.right or cur.left
            # Delete the node `cur` and replace it with its left or right subtree in its position.
            if target < parent.data:
                parent.left = child
            else:
                parent.right = child
        else:
            self.if_left_and_right(cur)

    def if_left_and_right(self, node):  # called if delete node whether root or otherwise
        pre = node
        re_node = node.right

        while re_node.left is not None:
            pre = re_node
            re_node = re_node.left

        node.data = re_node.data

        if re_node.right is not None:
            if pre.data > re_node.data:
                pre.left = re_node.right
            else:
                pre.right = re_node.right

        else:
            if pre.data > re_node.data:
                pre.left = None
            else:
                pre.right = None


# example calls, which construct and display the tree
bst = BinaryTree()
bst.insert(4)
bst.insert(2)
bst.insert(6)
bst.insert(1)
bst.insert(3)
bst.insert(5)
bst.insert(7)
bst.insert(8)
bst.insert(9)
bst.insert(10)
bst.insert(11)
bst.insert(12)
bst.insert(13)
bst.insert(14)
bst.insert(15)
bst.insert(100)
bst.insert(200)

bst.remove(7)
bst.display(bst.root)
```

@tab 修正代码

```python
import math

""" Node class
"""


class Node:
    def __init__(self, data=None):
        self.data = data
        self.left = None
        self.right = None


""" BST class with insert and display methods. display pretty prints the tree
"""


class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, data):
        if self.root is None:
            self.root = Node(data)
        else:
            self._insert(data, self.root)

    def _insert(self, data, cur_node):
        if data < cur_node.data:
            if cur_node.left is None:
                cur_node.left = Node(data)
            else:
                self._insert(data, cur_node.left)
        elif data > cur_node.data:
            if cur_node.right is None:
                cur_node.right = Node(data)
            else:
                self._insert(data, cur_node.right)
        else:
            print("Value already present in tree")

    def display(self, cur_node):
        lines, _, _, _ = self._display(cur_node)
        for line in lines:
            print(line)

    def _display(self, cur_node):

        if cur_node.right is None and cur_node.left is None:
            line = '%s' % cur_node.data
            width = len(line)
            height = 1
            middle = width // 2
            return [line], width, height, middle

        if cur_node.right is None:
            lines, n, p, x = self._display(cur_node.left)
            s = '%s' % cur_node.data
            u = len(s)
            first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s
            second_line = x * ' ' + '/' + (n - x - 1 + u) * ' '
            shifted_lines = [line + u * ' ' for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, n + u // 2

        if cur_node.left is None:
            lines, n, p, x = self._display(cur_node.right)
            s = '%s' % cur_node.data
            u = len(s)
            first_line = s + x * '_' + (n - x) * ' '
            second_line = (u + x) * ' ' + '\\' + (n - x - 1) * ' '
            shifted_lines = [u * ' ' + line for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, u // 2

        left, n, p, x = self._display(cur_node.left)
        right, m, q, y = self._display(cur_node.right)
        s = '%s' % cur_node.data
        u = len(s)
        first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s + y * '_' + (m - y) * ' '
        second_line = x * ' ' + '/' + (n - x - 1 + u + y) * ' ' + '\\' + (m - y - 1) * ' '
        if p < q:
            left += [n * ' '] * (q - p)
        elif q < p:
            right += [m * ' '] * (p - q)
        zipped_lines = zip(left, right)
        lines = [first_line, second_line] + [a + u * ' ' + b for a, b in zipped_lines]
        return lines, n + m + u, max(p, q) + 2, n + u // 2

    def remove(self, target):
        if self.root is None:  # If the tree is empty, return immediately.
            return False
        elif self.root.data == target:  # if tree root is target
            # if self.root.left is None or self.root.right is None:
            #     # If the tree root has no children, then `root_child = None`.
            #     root_child = self.root.left or self.root.right
            #     self.root = root_child  # Directly delete the root node.
            if self.root.left is None and self.root.right is None:
                self.root = None
            elif self.root.left and self.root.right is None:
                self.root = self.root.left
            elif self.root.left is None and self.root.right:
                self.root = self.root.right
            else:
                self.if_left_and_right(self.root)
            return True
        else:
            cur, parent = self.root, None
            while cur is not None and cur.data != target:
                parent = cur
                if target < parent.data:
                    cur = cur.left
                elif target > parent.data:
                    cur = cur.right
            if cur is None:  # case 1:Target not found
                return  # end the function

            elif cur.left is None or cur.right is None:
                # If `cur` has no children, then `child = None`.
                child = cur.right or cur.left
                # Delete the node `cur` and replace it with its left or right subtree in its position.
                if target < parent.data:
                    parent.left = child
                else:
                    parent.right = child
            else:
                self.if_left_and_right(cur)

    def if_left_and_right(self, node):  # called if delete node whether root or otherwise
        pre = node
        re_node = node.right

        while re_node.left is not None:
            pre = re_node
            re_node = re_node.left

        node.data = re_node.data

        if re_node.right is not None:
            if pre.data > re_node.data:
                pre.left = re_node.right
            else:
                pre.right = re_node.right

        else:
            if pre.data > re_node.data:
                pre.left = None
            else:
                pre.right = None


# example calls, which construct and display the tree
bst = BinaryTree()
bst.insert(4)
bst.insert(2)
bst.insert(6)
bst.insert(1)
bst.insert(3)
bst.insert(5)
bst.insert(7)
bst.insert(8)
bst.insert(9)
bst.insert(10)
bst.insert(11)
bst.insert(12)
bst.insert(13)
bst.insert(14)
bst.insert(15)
bst.insert(100)
bst.insert(200)

bst.remove(200)
bst.display(bst.root)
```



:::

```python
class BinaryTree:
    # 其他现有代码

    def remove(self, target):
        # 辅助函数：处理有两个子节点的节点
        def if_left_and_right(node):
            del_node_parent = node
            del_node = node.right

            # 找到右子树中最左边的节点（即中序后继）
            while del_node.left:
                del_node_parent = del_node
                del_node = del_node.left

            # 将目标节点的数据替换为中序后继节点的数据
            node.data = del_node.data

            # 从其父节点中移除中序后继节点
            if del_node.right:
                # 如果中序后继节点有右子节点，将其右子节点移到它的位置
                if del_node_parent.data > del_node.data:
                    del_node_parent.left = del_node.right
                else:
                    del_node_parent.right = del_node.right
            else:
                # 如果中序后继节点没有子节点，直接移除它
                if del_node.data < del_node_parent.data:
                    del_node_parent.left = None
                else:
                    del_node_parent.right = None

        # 步骤1：检查树是否为空，如果为空则返回False
        if self.root is None:
            return False

        # 步骤2：处理目标节点为根节点的情况
        if self.root.data == target:
            # 如果根节点没有子节点，直接将根设为None
            if self.root.left is None and self.root.right is None:
                self.root = None
            # 如果根节点只有左子节点，将左子节点设为新的根
            elif self.root.left and self.root.right is None:
                self.root = self.root.left
            # 如果根节点只有右子节点，将右子节点设为新的根
            elif self.root.left is None and self.root.right:
                self.root = self.root.right
            # 如果根节点有左右子节点，调用if_left_and_right辅助函数
            else:
                if_left_and_right(self.root)
            return True

        # 步骤3：处理目标节点不在根节点的情况
        parent = None
        node = self.root

        # 查找目标节点及其父节点
        while node and node.data != target:
            parent = node
            if target < node.data:
                node = node.left
            else:
                node = node.right

        # 情况1：未找到目标节点，返回False
        if node is None or node.data != target:
            return False

        # 情况2：目标节点没有子节点
        elif node.left is None and node.right is None:
            if target < parent.data:
                parent.left = None
            else:
                parent.right = None
            return True

        # 情况3：目标节点只有左子节点
        elif node.left and node.right is None:
            if target < parent.data:
                parent.left = node.left
            else:
                parent.right = node.left
            return True

        # 情况4：目标节点只有右子节点
        elif node.left is None and node.right:
            if target < parent.data:
                parent.left = node.right
            else:
                parent.right = node.right
            return True

        # 情况5：目标节点有左右子节点，调用if_left_and_right辅助函数
        else:
            if_left_and_right(node)
            return True
```




























::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

C:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)