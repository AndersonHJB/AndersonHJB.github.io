---
title: Exercise 6 LSE Home MA407
icon: python
date: 2023-11-08 21:38:44
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

Please submit the solutions to these questions on Gradescope in two separate Python files: LinkedList.py and SortedDLL.py.

## Exercise 6.1

Consider the implementation of a singly linked list `LinkedList.py`, discussed in the lecture and available from Moodle. This implementation just has a head pointer. It also comes with just two methods: `isEmpty(self)` and `add(self,item)`. The first one checks whether the linked list is empty; the latter one adds an item at the front of the linked list.

```python
class Node:
    def __init__(self, item, next):
        self.item = item
        self.next = next
class LinkedList:
    def __init__(self):
        self.head = None
    def isEmpty(self):
        return self.head == None
    def add(self ,item):
        temp = Node(item, self.head)
        self.head = temp
```

(a)  Suppose we want to have an additional tail pointer in our data structure. Implement the necessary changes in Python.

(b)  Implement a method `remove()` to remove an element from the front of a singly linked list in Python. What is the time complexity of this method?

(c)  Implement a method `removeAtEnd()` to remove the element at the end of the singly linked list in Python. What is the time complexity of this method?

## Solution 6.1

::: code-tabs

@tab code1

```python
class Node:
    # 链表节点的初始化
    def __init__(self, item):
        self.item = item  # 节点存储的数据
        self.next = None  # 指向下一个节点的引用

class LinkedList:
    # 链表的初始化
    def __init__(self):
        self.head = None  # 头指针
        self.tail = None  # 尾指针

    # 判断链表是否为空
    def isEmpty(self):
        return self.head is None

    # 在链表前端添加一个元素
    def add(self, item):
        temp = Node(item)
        if self.isEmpty():
            # 如果链表为空，新节点既是头节点也是尾节点
            self.head = self.tail = temp
        else:
            # 如果链表不为空，新节点成为新的头节点
            temp.next = self.head
            self.head = temp

    # 从链表前端移除一个元素
    def remove(self):
        if self.isEmpty():
            raise Exception("List is empty")
        item = self.head.item
        self.head = self.head.next
        if self.head is None:  # 如果链表只有一个元素
            self.tail = None
        return item

    # 从链表末端移除一个元素
    def removeAtEnd(self):
        if self.isEmpty():
            raise Exception("List is empty")
        if self.head.next is None:  # 如果只有一个元素
            item = self.head.item
            self.head = self.tail = None
            return item
        else:
            current = self.head
            while current.next.next is not None:  # 查找倒数第二个节点
                current = current.next
            item = self.tail.item
            current.next = None
            self.tail = current
            return item
```

@tab code2

```python
class Node:
    def __init__(self, item):
        self.item = item
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def isEmpty(self):
        return self.head is None

    def add(self, item):
        temp = Node(item)
        if self.isEmpty():
            self.head = self.tail = temp
        else:
            temp.next = self.head
            self.head = temp

    def remove(self):
        if self.isEmpty():
            raise Exception("List is empty")
        item = self.head.item
        self.head = self.head.next
        if self.head is None:  # If the list had only one item
            self.tail = None
        return item

    def removeAtEnd(self):
        if self.isEmpty():
            raise Exception("List is empty")
        if self.head.next is None:  # If there is only one item
            item = self.head.item
            self.head = self.tail = None
            return item
        else:
            current = self.head
            while current.next.next is not None:  # Find the second to last item
                current = current.next
            item = self.tail.item
            current.next = None
            self.tail = current
            return item

# Test LinkedList implementation
# Create a linked list and add some elements
ll = LinkedList()
ll.add(1)
ll.add(2)
ll.add(3)

# Remove an element from the front and the end
removed_from_front = ll.remove()
removed_from_end = ll.removeAtEnd()

(removed_from_front, removed_from_end, ll.head.item)  # Should show the middle element left in the list
```



:::

## Exercise 6.2

This exercise asks you to implement a doubly linked list that is always sorted and allows multiple entries with the same value. Consider the implementation of the following functionalities of a sorted doubly linked list in file SortedDoublyLinkedList.py.

(a) Each item in the list stores an integer value, a pointer to the next item in the list and a pointer to the previous item in the list. Use a Node class to implement the list items and a `Sdll` class to represent a sorted doubly linked list object.

(b) Add a method `insert(int x)` (to `Sdll` class) inserts a new item with value `x` into the list, so that the list remains sorted (and each item keeps correct pointers to the next and previous items). Multiple entries in the list with the same value are allowed.

(c) Add a method `delete(int x)` (to `Sdll` class) deletes all items in the list with value `x`. (Use that the list is sorted to avoid scanning through the whole list if possible.)

(d) Add a method `__str__`  (to `Sdll` class) which returns a string representation of the list, in order from the start to the end. Also implement a method `reverseString()` which returns a string representation of the list, in reverse order, from the end to the start. (Having both of these methods allows you to check that your insert/delete operations keep the pointers in your list structure intact.)

The following code

```python
mysortedlist = Sdll()
mysortedlist.insert(3)
mysortedlist.insert(1)
mysortedlist.insert(6)
mysortedlist.insert(3)
mysortedlist.insert(1)
mysortedlist.insert(3)
print(mysortedlist)
print(mysortedlist.reverseString())
mysortedlist.delete(3)
print(mysortedlist)
print(mysortedlist.reverseString())
```

should print

```python
None <- 1 <-> 1 <-> 3 <-> 3 <-> 3 <-> 6 -> None
None <- 6 <-> 3 <-> 3 <-> 3 <-> 1 <-> 1 -> None

None <- 1 <-> 1 <-> 6 -> None
None <- 6 <-> 1 <-> 1 -> None
```

## Solution 6.2

::: code-tabs

@tab code1

```python
class Node:
    # 双向链表节点的初始化
    def __init__(self, item):
        self.item = item  # 节点存储的数据
        self.prev = None  # 指向前一个节点的引用
        self.next = None  # 指向下一个节点的引用

class Sdll:
    # 双向链表的初始化
    def __init__(self):
        self.head = None  # 头指针
        self.tail = None  # 尾指针

    # 插入一个元素，保持链表排序
    def insert(self, x):
        new_node = Node(x)
        if self.head is None:  # 如果链表为空
            self.head = self.tail = new_node
        elif x <= self.head.item:  # 如果新元素小于等于头节点的值
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        else:
            current = self.head
            # 查找插入位置
            while current.next and current.next.item < x:
                current = current.next
            new_node.next = current.next
            new_node.prev = current
            if current.next:
                current.next.prev = new_node
            else:
                self.tail = new_node
            current.next = new_node

    # 删除值为 x 的所有元素
    def delete(self, x):
        current = self.head
        while current:
            if current.item == x:
                if current.prev:
                    current.prev.next = current.next
                else:  # 如果元素在头部
                    self.head = current.next
                if current.next:
                    current.next.prev = current.prev
                else:  # 如果元素在尾部
                    self.tail = current.prev
                temp = current
                current = current.next
                del temp  # 释放节点内存
            else:
                current = current.next

    # 返回链表的字符串表示
    def __str__(self):
        items = []
        current = self.head
        while current:
            items.append(str(current.item))
            current = current.next
        return 'None <- ' + ' <-> '.join(items) + ' -> None'

    # 返回链表的逆向字符串表示
    def reverseString(self):
        items = []
        current = self.tail
        while current:
            items.append(str(current.item))
            current = current.prev
        return 'None <- ' + ' <-> '.join(items) + ' -> None'
```

@tab code2

```python
class Node:
    def __init__(self, item):
        self.item = item
        self.prev = None
        self.next = None

class Sdll:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert(self, x):
        new_node = Node(x)
        if self.head is None:  # If the list is empty
            self.head = self.tail = new_node
        elif x <= self.head.item:  # If the new item is smaller than the head item
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        else:
            current = self.head
            while current.next and current.next.item < x:
                current = current.next
            new_node.next = current.next
            new_node.prev = current
            if current.next:
                current.next.prev = new_node
            else:
                self.tail = new_node
            current.next = new_node

    def delete(self, x):
        current = self.head
        while current:
            if current.item == x:
                if current.prev:
                    current.prev.next = current.next
                else:  # If the item is at the head
                    self.head = current.next
                if current.next:
                    current.next.prev = current.prev
                else:  # If the item is at the tail
                    self.tail = current.prev
                temp = current
                current = current.next
                del temp  # Free up the memory
            else:
                current = current.next

    def __str__(self):
        items = []
        current = self.head
        while current:
            items.append(str(current.item))
            current = current.next
        return 'None <- ' + ' <-> '.join(items) + ' -> None'

    def reverseString(self):
        items = []
        current = self.tail
        while current:
            items.append(str(current.item))
            current = current.prev
        return 'None <- ' + ' <-> '.join(items) + ' -> None'

# Test SortedDoublyLinkedList implementation
mysortedlist = Sdll()
mysortedlist.insert(3)
mysortedlist.insert(1)
mysortedlist.insert(6)
mysortedlist.insert(3)
mysortedlist.insert(1)
mysortedlist.insert(3)

# Print list as a string in normal and reverse order
list_str = str(mysortedlist)
reverse_list_str = mysortedlist.reverseString()

# Delete all occurrences of '3' and print again
mysortedlist.delete(3)
list_str_after_delete = str(mysortedlist)
reverse_list_str_after_delete = mysortedlist.reverseString()

(list_str, reverse_list_str, list_str_after_delete, reverse_list_str_after_delete)
```

:::



````python
Please submit the solutions to these questions on Gradescope in two separate Python files: LinkedList.py and SortedDLL.py.

## Exercise 6.1

Consider the implementation of a singly linked list `LinkedList.py`, discussed in the lecture and available from Moodle. This implementation just has a head pointer. It also comes with just two methods: `isEmpty(self)` and `add(self,item)`. The first one checks whether the linked list is empty; the latter one adds an item at the front of the linked list.

```python
class Node:
    def __init__(self, item, next):
        self.item = item
        self.next = next
class LinkedList:
    def __init__(self):
        self.head = None
    def isEmpty(self):
        return self.head == None
    def add(self ,item):
        temp = Node(item, self.head)
        self.head = temp
```

(a)  Suppose we want to have an additional tail pointer in our data structure. Implement the necessary changes in Python.

(b)  Implement a method `remove()` to remove an element from the front of a singly linked list in Python. What is the time complexity of this method?

(c)  Implement a method `removeAtEnd()` to remove the element at the end of the singly linked list in Python. What is the time complexity of this method?

## Solution 6.1


```python
class Node:
    # 链表节点的初始化
    def __init__(self, item):
        self.item = item  # 节点存储的数据
        self.next = None  # 指向下一个节点的引用

class LinkedList:
    # 链表的初始化
    def __init__(self):
        self.head = None  # 头指针
        self.tail = None  # 尾指针

    # 判断链表是否为空
    def isEmpty(self):
        return self.head is None

    # 在链表前端添加一个元素
    def add(self, item):
        temp = Node(item)
        if self.isEmpty():
            # 如果链表为空，新节点既是头节点也是尾节点
            self.head = self.tail = temp
        else:
            # 如果链表不为空，新节点成为新的头节点
            temp.next = self.head
            self.head = temp

    # 从链表前端移除一个元素
    def remove(self):
        if self.isEmpty():
            raise Exception("List is empty")
        item = self.head.item
        self.head = self.head.next
        if self.head is None:  # 如果链表只有一个元素
            self.tail = None
        return item

    # 从链表末端移除一个元素
    def removeAtEnd(self):
        if self.isEmpty():
            raise Exception("List is empty")
        if self.head.next is None:  # 如果只有一个元素
            item = self.head.item
            self.head = self.tail = None
            return item
        else:
            current = self.head
            while current.next.next is not None:  # 查找倒数第二个节点
                current = current.next
            item = self.tail.item
            current.next = None
            self.tail = current
            return item
```


## Exercise 6.2

This exercise asks you to implement a doubly linked list that is always sorted and allows multiple entries with the same value. Consider the implementation of the following functionalities of a sorted doubly linked list in file SortedDoublyLinkedList.py.

(a) Each item in the list stores an integer value, a pointer to the next item in the list and a pointer to the previous item in the list. Use a Node class to implement the list items and a `Sdll` class to represent a sorted doubly linked list object.

(b) Add a method `insert(int x)` (to `Sdll` class) inserts a new item with value `x` into the list, so that the list remains sorted (and each item keeps correct pointers to the next and previous items). Multiple entries in the list with the same value are allowed.

(c) Add a method `delete(int x)` (to `Sdll` class) deletes all items in the list with value `x`. (Use that the list is sorted to avoid scanning through the whole list if possible.)

(d) Add a method `__str__`  (to `Sdll` class) which returns a string representation of the list, in order from the start to the end. Also implement a method `reverseString()` which returns a string representation of the list, in reverse order, from the end to the start. (Having both of these methods allows you to check that your insert/delete operations keep the pointers in your list structure intact.)

The following code

```python
mysortedlist = Sdll()
mysortedlist.insert(3)
mysortedlist.insert(1)
mysortedlist.insert(6)
mysortedlist.insert(3)
mysortedlist.insert(1)
mysortedlist.insert(3)
print(mysortedlist)
print(mysortedlist.reverseString())
mysortedlist.delete(3)
print(mysortedlist)
print(mysortedlist.reverseString())
```

should print

```python
None <- 1 <-> 1 <-> 3 <-> 3 <-> 3 <-> 6 -> None
None <- 6 <-> 3 <-> 3 <-> 3 <-> 1 <-> 1 -> None

None <- 1 <-> 1 <-> 6 -> None
None <- 6 <-> 1 <-> 1 -> None
```

## Solution 6.2


```python
class Node:
    def __init__(self, item):
        self.item = item
        self.previous = None
        self.next = None

class Sdll:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert(self, value):
        new_node = Node(value)
        if self.head is None and self.tail is None:
            self.head = self.tail = new_node
        elif value <= self.head.item:
            new_node.next = self.head
            self.head.previous = new_node
            self.head = new_node
        else:
            a = self.head
            while a.next is not None and a.item <= value:
                a = a.next
            if a.next is None and a.item <= value:
                new_node.previous = a
                new_node.next = None
                self.tail = new_node
            elif a.next is None and a.item > value:
                new_node.previous = a.previous
                new_node.next = a
                self.tail=a
            elif a.next is not None:
                new_node.next = a
                new_node.previous = a.previous



mysortedlist = Sdll()
mysortedlist.insert(3)
mysortedlist.insert(1)
mysortedlist.insert(6)
mysortedlist.insert(3)
mysortedlist.insert(1)
mysortedlist.insert(3)


current = mysortedlist.head
while current is not None:
    print(current.item, end=" ")
    current = current.next
```
````







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
