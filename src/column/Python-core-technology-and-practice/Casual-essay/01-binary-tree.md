---
title: 二叉树基础
icon: tree1
date: 2023-08-27 23:05:47
author: AI悦创
isOriginal: true
category: Python 进阶
tag:
    - Python 进阶
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

## 1. 初识二叉树

你好，我是悦创。

**二叉树**是一个有限元素的集合，这个集合要么是空集，要么是由一个称为根的元素以及两个不相交的、分别称为左子树和右子树的二叉树组成。

让我们使用文本来表示一个二叉树。

考虑这样一个简单的二叉树：

```text
    1
   / \
  2   3
 / \ / \
4  5 6  7
```

- 这棵树的根是 1。
- 1 的左子树是以 2 为根的二叉树，右子树是以 3 为根的二叉树。
- 2 的左子节点是 4，右子节点是 5；3 的左子节点是 6，右子节点是 7。

**前序遍历** (根-左-右)：1 -> 2 -> 4 -> 5 -> 3 -> 6 -> 7

**中序遍历** (左-根-右)：4 -> 2 -> 5 -> 1 -> 6 -> 3 -> 7

**后序遍历** (左-右-根)：4 -> 5 -> 2 -> 6 -> 7 -> 3 -> 1

这种以文本方式表示的二叉树可以帮助你在没有图形界面的情况下更好地理解二叉树的结构和遍历方式。不过，当树结构更复杂时，这种方式可能不如图形直观。

## 2. 探究前中后序遍历

前序、中序和后序遍历是二叉树的三种基本的遍历方式，它们描述了访问树的节点的顺序。具体来说：

1. **前序遍历 (Pre-order Traversal)**

   - 先访问根节点。
   - 再递归地遍历左子树。
   - 最后递归地遍历右子树。

   对于之前的示例：

   ```
       1
      / \
     2   3
    / \ / \
   4  5 6  7
   ```

   前序遍历的结果是：1 -> 2 -> 4 -> 5 -> 3 -> 6 -> 7

2. **中序遍历 (In-order Traversal)**

   - 先递归地遍历左子树。
   - 然后访问根节点。
   - 最后递归地遍历右子树。

   对于上述示例，中序遍历的结果是：4 -> 2 -> 5 -> 1 -> 6 -> 3 -> 7

   注意：当二叉树是一个二叉搜索树时，中序遍历将输出升序的值。

3. **后序遍历 (Post-order Traversal)**

   - 先递归地遍历左子树。
   - 再递归地遍历右子树。
   - 最后访问根节点。

   对于上述示例，后序遍历的结果是：4 -> 5 -> 2 -> 6 -> 7 -> 3 -> 1

理解这三种遍历方式的关键是观察根节点的访问顺序相对于其左右子树的顺序。在实际应用中，这三种遍历方式根据需要有各自的应用场景，例如在某些算法和问题求解中。

## 3. 二叉树的基本实现

### 3.1 构建 Node 类

```python
# 定义二叉树的节点
class Node:
    def __init__(self, key):
        # 左子节点
        self.left = None
        # 右子节点
        self.right = None
        # 当前节点的值
        self.val = key
```

### 3.2 创建 BinaryTree 类

```python
class BinaryTree:
    def __init__(self):
        # 初始化时树是空的，根节点为 None
        self.root = None
```

### 3.3 编写插入函数 insert

```python
    # 插入一个新的值到二叉搜索树中
    def insert(self, key):
        # 如果树是空的，则直接创建一个新的根节点
        if not self.root:
            self.root = Node(key)
        else:
            # 如果树不是空的，递归地插入新值
            self._insert_recursive(self.root, key)
```

### 3.4 编写递归插入子树 _insert_recursive

```python
    # 递归地将新值插入到二叉搜索树的适当位置
    def _insert_recursive(self, node, key):
        # 如果新值小于当前节点的值，插入到左子树
        if key < node.val:
            # 如果左子节点是空的，直接在该位置创建新节点
            if node.left is Node:
                node.left = Node(key)
            else:
                # 如果左子节点不是空的，递归地插入到左子树
                self._insert_recursive(node.left, key)
        else:
            # 如果新值大于或等于当前节点的值，插入到右子树
            if node.right is None:
                node.right = Node(key)
            else:
                # 如果右子节点不是空的，递归地插入到右子树
                self._insert_recursive(node.right, key)
```

### 3.5 编写可遍历的 inorder

```python
    # 返回二叉搜索树的中序遍历结果
    def inorder(self):
        return self._inorder_recursive(self.root, [])
```

### 3.6 实现中序遍历 _inorder_recursive

```python
    # 递归地进行中序遍历
    def _inorder_recursive(self, node, result):
        # 如果当前节点不是空的
        if node:
            # 首先遍历左子树
            self._inorder_recursive(node.left, result)
            # 然后访问当前节点
            result.append(node.val)
            # 最后遍历右子树
            self._inorder_recursive(node.right, result)
        return result
```

### 3.7 主程序

```python
# 主程序
if __name__ == "__main__":
    # 创建一个空的二叉搜索树
    bt = BinaryTree()
    # 向树中插入一些值
    for val in [20, 10, 30, 5, 15, 25, 35]:
        bt.insert(val)
    # 打印树的中序遍历结果
    print(bt.inorder())  # 预期输出: [5, 10, 15, 20, 25, 30, 35]
```

### 3.8 完整代码

```python
# 定义二叉树的节点
class Node:
    def __init__(self, key):
        # 左子节点
        self.left = None
        # 右子节点
        self.right = None
        # 当前节点的值
        self.val = key

# 定义二叉搜索树
class BinaryTree:
    def __init__(self):
        # 初始化时树是空的，根节点为None
        self.root = None

    # 插入一个新的值到二叉搜索树中
    def insert(self, key):
        # 如果树是空的，则直接创建一个新的根节点
        if not self.root:
            self.root = Node(key)
        else:
            # 如果树不是空的，递归地插入新值
            self._insert_recursive(self.root, key)

    # 递归地将新值插入到二叉搜索树的适当位置
    def _insert_recursive(self, node, key):
        # 如果新值小于当前节点的值，插入到左子树
        if key < node.val:
            # 如果左子节点是空的，直接在该位置创建新节点
            if node.left is None:
                node.left = Node(key)
            else:
                # 如果左子节点不是空的，递归地插入到左子树
                self._insert_recursive(node.left, key)
        else:
            # 如果新值大于或等于当前节点的值，插入到右子树
            if node.right is None:
                node.right = Node(key)
            else:
                # 如果右子节点不是空的，递归地插入到右子树
                self._insert_recursive(node.right, key)

    # 返回二叉搜索树的中序遍历结果
    def inorder(self):
        return self._inorder_recursive(self.root, [])

    # 递归地进行中序遍历
    def _inorder_recursive(self, node, result):
        # 如果当前节点不是空的
        if node:
            # 首先遍历左子树
            self._inorder_recursive(node.left, result)
            # 然后访问当前节点
            result.append(node.val)
            # 最后遍历右子树
            self._inorder_recursive(node.right, result)
        return result

# 主程序
if __name__ == "__main__":
    # 创建一个空的二叉搜索树
    bt = BinaryTree()
    # 向树中插入一些值
    for val in [20, 10, 30, 5, 15, 25, 35]:
        bt.insert(val)
    # 打印树的中序遍历结果
    print(bt.inorder())  # 预期输出: [5, 10, 15, 20, 25, 30, 35]
```





























欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

