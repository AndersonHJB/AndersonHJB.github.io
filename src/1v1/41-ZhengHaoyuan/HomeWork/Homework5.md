---
title: NYU, Tandon School of Engineering Algorithms — Fall 2023 Homework #5
date: 2023-11-04 23:13:29
author: AI悦创
isOriginal: true
category: 
    - NYU – Tandon School of Engineering
tag:
    - NYU – Tandon School of Engineering
icon: readingandwritingabookwithinkandafeather
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

## Question 1

Implement an interpreter-like **postfix calculator**. Your program should repeatedly:

- Print a prompt to the user. The prompt should be: ‘`-->`’
- Read an expression from the user
- Evaluate that expression
- Print the result

Your calculator should support 2 kinds of expressions:

1. **Arithmetic expressions** – are given in postfix notation. The tokens of the expression are separated by a space.
2. **Assignment expressions** – are expression of the form:

```python
variable_name = arithmetic_expression
```

When evaluated, it first evaluates the *arithmetic_expression* (given in postfix notation), and then it associates that value with *variable_name* (in a data structure of your choice).

Notes:

- The value of an assignment expression, is the name of the variable being assigned.
- Assume that the *variable_name*, the ‘=’ symbol, and the *arithmetic_expression* are separated by a space.

Notes:

1. Arithmetic expressions can contain variable names, for referencing to values associated with variables that were defined before.
2. You may assume that the input the user enters, is valid. That is, the arithmetic expressions are legal; all variables used in an expression were already defined; etc.

3. The program should keep reading, and evaluating expressions until the user types ‘done( )’.

Your program should interact with the user **exactly** as demonstrated in the example below:

```python
--> 4
4
--> 5 1 -
4
--> x = 5 1 -
x
--> x
4
--> x x +
8
--> y = 1 x + 3 4 * - 2 /
y
--> y
-3.5
--> done()
```

### 思路

1. 一共有几种计算模式？——2 种；
2. 再开始计算之前，我们需要先实现用户是想实现哪种的计算模式「后缀计算、赋值运算」；
3. 判断好用户想要计算的方式后，再进行具体的计算逻辑；

---

为了实现一个后缀表达式的计算器，我们需要按照以下逻辑来处理用户的输入：

1. 初始化一个空字典 `variables` 用于存储变量名及其对应的值。

2. 进入一个循环，不断地提示用户输入表达式：

   - 显示提示符 `--> `。
   - 读取用户的输入表达式。

3. 检查用户的输入：

   - 如果用户输入 `done()`，则退出循环，结束程序。
   - 如果输入包含等号 `=`，说明是一个赋值表达式：
     - 将输入按等号分割为变量名和算术表达式两部分。
     - 计算算术表达式的值。
     - 将计算结果与变量名相关联，存储到 `variables` 字典中。
     - 输出变量名，表示赋值操作成功。
   - 如果输入不包含等号，说明是一个纯算术表达式：
     - 直接计算该算术表达式的值。
     - 输出计算结果。

4. 计算后缀表达式：

   - 对于算术表达式的每个元素（数字或操作符），按顺序进行处理。
   - 如果元素是数字，就将其转换为整数并压入栈中。
   - 如果元素是变量名，就从 `variables` 字典中取出对应的值并压入栈中。
   - 如果元素是操作符（如 `+`, `-`, `*`, `/`），则从栈中弹出两个数作为操作数，执行对应的运算，并将结果压回栈中。
   - 当表达式结束时，栈顶的元素就是整个表达式的计算结果。

通过以上步骤，我们可以实现一个后缀表达式计算器，它可以处理用户输入的算术表达式和赋值表达式，并输出计算结果。在实际实现中，需要确保输入是有效的后缀表达式，并且所有的变量在使用前都已被定义和赋值。

::: code-tabs

@tab zhy



:::





## Question 2

Give a Python implementation for the *MaxStack* ADT. The *MaxStack* ADT supports the following operations:

- `MaxStack()`: initializes an empty MaxStack object
- `maxS.is_empty()`:returns True if maxS does not contain any elements, or False otherwise.
- `len(maxS)`:Returns the number of elements in maxS
- `maxS.push(e)`:adds element e to the top of maxS. 
- `maxS.top()`:returns a reference to the top element of maxS,without removing it; an exception is raised if maxS is empty.
- `maxS.pop()`:removes and return the top element from maxS;an exception is raised if maxS is empty.
- `maxS.max()`:returns the element in maxS with the largest value,without removing it; an exception is raised if maxS is empty.

**Note**: Assume that the user inserts only integers to this stack (so they could be compared to one another, and a maximum data is well defined).

For example, your implementation should follow the behavior below:

```python
>>> maxS = MaxStack()
>>> maxS.push(3)
>>> maxS.push(1)
>>> maxS.push(6)
>>> maxS.push(4)
>>> maxS.max()
6
>>> maxS.pop()
4
>>> maxS.pop()
6
>>> maxS.max()
3
```

**Implementation Requirements**:

1. For the representation of MaxStack objects, your data members should be:
    - A Stack – of type ArrayStack
    - Additional $\theta(1)$ space - for additional data members, if needed
2. Your implementation should support the max operation in $\theta(1)$ worst-case time. For all other Stack operation, the running time should remain as it was in the original implementation.

**Hint**: You may want to store a tuple, as elements of the ArrayStack. That is, to attach to every “real” data in this stack some additional information.

::: code-tabs

@tab code1

```python
class MaxStack:
    def __init__(self):
        self.stack = []  # 主栈，用于存储元素和与之对应的最大值

    def is_empty(self):
        return len(self.stack) == 0

    def __len__(self):
        return len(self.stack)

    def push(self, e):
        # 如果栈为空，或者新元素比当前最大值大，则新元素即为新的最大值
        # 否则，最大值不变
        current_max = e if self.is_empty() else max(e, self.stack[-1][1])
        self.stack.append((e, current_max))

    def top(self):
        if self.is_empty():
            raise IndexError("MaxStack is empty")
        return self.stack[-1][0]  # 返回元素值，不是元素和最大值的元组

    def pop(self):
        if self.is_empty():
            raise IndexError("MaxStack is empty")
        return self.stack.pop()[0]  # 返回元素值，不是元素和最大值的元组

    def max(self):
        if self.is_empty():
            raise IndexError("MaxStack is empty")
        return self.stack[-1][1]  # 返回与栈顶元素对应的最大值

# 下面是如何使用这个 MaxStack 类的示例
maxS = MaxStack()
maxS.push(3)
maxS.push(1)
maxS.push(6)
maxS.push(4)
print(maxS.max())  # 应该输出 6
print(maxS.pop())  # 应该输出 4
print(maxS.pop())  # 应该输出 6
print(maxS.max())  # 应该输出 3
```

@tab zhy

```python
class MaxStack:
    def __init__(self):
        self.item = []
        self.length = 0

    def is_empty(self):
        return self.length == 0

    def push(self,e):
        self.item.append(e)
        self.length += 1


    def __len__(self):
        return self.length

    def top(self):
        if self.is_empty():
            raise Exception("MAXS is EMPTY")
        else:
            return self.item[-1]

    def pop(self):
        if self.is_empty():
            raise Exception("EMPTY STACK")
        else:
            return self.item.pop()

    def max(self):
        if self.is_empty():
            raise Exception("Empty")
        else:
            return max(self.item)


maxS = MaxStack()
maxS.push(3)
maxS.push(1)
maxS.push(6)
maxS.push(4)
print(maxS.max())
print(maxS.pop())
print(maxS.pop())
print(maxS.max())
```

@tab 方法二

```python
class MaxStack:
    """使用列表存储元素来实现 MaxStack ADT。"""

    def __init__(self):
        """初始化一个空的 MaxStack 对象。"""
        self._data = []  # 使用列表来存储堆栈元素，元素形式为元组 (element, current_max)

    def is_empty(self):
        """如果堆栈为空返回 True，否则返回 False。"""
        return len(self._data) == 0

    def __len__(self):
        """返回堆栈中元素的数量。"""
        return len(self._data)

    def push(self, e):
        """将元素 e 添加到堆栈顶部。"""
        # 计算新的最大值
        current_max = e if self.is_empty() else max(e, self._data[-1][1])
        # 将元素与当前最大值作为元组添加到堆栈中
        self._data.append((e, current_max))

    def top(self):
        """返回堆栈顶部元素的引用，但不移除它。如果堆栈为空，则抛出异常。"""
        if self.is_empty():
            raise IndexError('堆栈为空')
        return self._data[-1][0]  # 返回实际的堆栈元素

    def pop(self):
        """移除并返回堆栈顶部的元素。如果堆栈为空，则抛出异常。"""
        if self.is_empty():
            raise IndexError('堆栈为空')
        return self._data.pop()[0]  # 返回实际的堆栈元素

    def max(self):
        """返回堆栈中最大值的元素，但不移除它。如果堆栈为空，则抛出异常。"""
        if self.is_empty():
            raise IndexError('堆栈为空')
        return self._data[-1][1]  # 返回堆栈的最大值

# 示例使用：
maxS = MaxStack()
maxS.push(3)
maxS.push(1)
maxS.push(6)
maxS.push(4)
```





:::

## Question 3

Give a Python implementation for the *MidStack* ADT. The *MidStack* ADT supports the following operations:

- `MidStack()`:initializes an empty MidStack object
- `midS.is_empty()`:returns True if S does not contain any elements,or False otherwise.
- `len(midS)`:Returns the number of elements midS
- `midS.push(e)`:adds element e to the top of midS.  
- `midS.top()`:returns a reference to the top element of midS,without removing it; an exception is raised if S is empty.
- `midS.pop()`:removes and returns the top element from midS;an exception is raised if midS is empty.
- `midS.mid_push(e)`:adds element e in the middle of midS.
- That is, assuming there are $n$ elements in S: In the case $n$ is even, e would go exactly in the middle.If n is odd,e will go after the $\frac{n+1}{2}$th element.

For example, your implementation should follow the behavior as demonstrated in the two execution examples below:

```python
>>> midS = MidStack()
>>> midS.push(2)
>>> midS.push(4)
>>> midS.push(6)
>>> midS.push(8)
>>> midS.mid_push(10)
>>> midS.pop()
8
>>> midS.pop()
6
>>> midS.pop()
10
>>> midS.pop()
4
>>> midS.pop()
2
```

```python
>>> midS = MidStack()
>>> midS.push(2)
>>> midS.push(4)
>>> midS.push(6)
>>> midS.push(8)
>>> midS.push(10)
>>> midS.mid_push(12)
>>> midS.pop()
10
>>> midS.pop()
8
>>> midS.pop()
12
>>> midS.pop()
6
>>> midS.pop()
4
>>> midS.pop()
2
```

**Implementation Requirements**:

1. For the representation of MidStack objects, your data members should be:

- A Stack – of type ArrayStack
- A double ended queue – of type ArrayDeque
- Additional $\theta(1)$ space - for additional data members, if needed
- Your implementation should support the `mid_push` operation in $\theta(1)$ amortized time. For all other Stack operation, the running time should remain as it was in the original implementation (That is, $\theta(1)$ amortized for push and pop,and $\theta(1)$ worst-case for top, len and `is_empty`).



## Question 4

Give an alternative implementation for the *Queue* ADT.

**Implementation Requirements**:

1. For the representation of Queue objects, your data members should be:
    - **Two** Stacks – of type ArrayStack
    - Additional $\theta(1)$ space - for additional data members, if needed
2. Any sequence of *n* enqueue and dequeue operations (starting with an empty queue) should run in worst-case of $\theta(𝑛)$ altogether.

::: code-tabs

@tab code1

```python
class ArrayStack:
    def __init__(self):
        self.data = []

    def push(self, e):
        self.data.append(e)

    def pop(self):
        if self.is_empty():
            raise Empty('Stack is empty')
        return self.data.pop()

    def is_empty(self):
        return len(self.data) == 0

    def top(self):
        if self.is_empty():
            raise Empty('Stack is empty')
        return self.data[-1]


class QueueUsingStacks:
    def __init__(self):
        self.inputStack = ArrayStack()
        self.outputStack = ArrayStack()

    def enqueue(self, item):
        self.inputStack.push(item)

    def dequeue(self):
        if self.outputStack.is_empty():
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():
            raise Empty('Queue is empty')
        return self.outputStack.pop()
```

@tab code2

```python
class ArrayStack:
    def __init__(self):
        self.data = []

    def push(self, e):
        self.data.append(e)

    def pop(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data.pop()

    def is_empty(self):
        return len(self.data) == 0

    def top(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data[-1]


class QueueUsingStacks:
    def __init__(self):
        self.inputStack = ArrayStack()
        self.outputStack = ArrayStack()

    def enqueue(self, item):
        self.inputStack.push(item)

    def dequeue(self):
        if self.outputStack.is_empty():
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        return self.outputStack.pop()
```

@tab code3

```python
class ArrayStack:
    def __init__(self):
        self.data = []  # 初始化一个空列表，用于存储栈的元素

    def push(self, e):
        self.data.append(e)  # push操作，将元素e添加到列表的末尾

    def pop(self):
        if self.is_empty():  # 在尝试pop前检查栈是否为空
            raise Exception('Stack is empty')  # 如果空，则抛出异常
        return self.data.pop()  # 移除列表的最后一个元素并返回

    def is_empty(self):
        return len(self.data) == 0  # 如果栈为空（列表长度为0），返回True

    def top(self):
        if self.is_empty():  # 获取栈顶元素前检查栈是否为空
            raise Exception('Stack is empty')  # 如果空，则抛出异常
        return self.data[-1]  # 返回列表的最后一个元素，但不移除它


class QueueUsingStacks:
    def __init__(self):
        self.inputStack = ArrayStack()  # 用于入队操作的栈
        self.outputStack = ArrayStack()  # 用于出队操作的栈

    def enqueue(self, item):
        self.inputStack.push(item)  # 入队操作，将元素压入inputStack

    def dequeue(self):
        if self.outputStack.is_empty():  # 如果outputStack为空，需要反转inputStack到outputStack
            while not self.inputStack.is_empty():  # 将inputStack中的所有元素移动到outputStack
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():  # 如果outputStack仍然为空，则抛出异常
            raise Exception('Queue is empty')  # 表示队列为空
        return self.outputStack.pop()  # 从outputStack中弹出栈顶元素，即为最先入队的元素
```

@tab code4

```python
class ArrayStack:
    def __init__(self):
        self.data = []

    def push(self, e):
        self.data.append(e)

    def pop(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data.pop()

    def is_empty(self):
        return len(self.data) == 0

    def top(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data[-1]


class QueueUsingStacks:
    def __init__(self):
        self.inputStack = ArrayStack()
        self.outputStack = ArrayStack()

    def enqueue(self, item):
        self.inputStack.push(item)

    def dequeue(self):
        if self.outputStack.is_empty():
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        return self.outputStack.pop()

```

@tab code5

```python
class ArrayStack:
    def __init__(self):
        self.data = []

    def push(self, e):
        self.data.append(e)

    def pop(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data.pop()

    def is_empty(self):
        return len(self.data) == 0

    def top(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data[-1]

    def __len__(self):
        return len(self.data)


class Queue:
    def __init__(self):
        self.inputStack = ArrayStack()
        self.outputStack = ArrayStack()

    def enqueue(self, item):
        self.inputStack.push(item)

    def dequeue(self):
        if self.outputStack.is_empty():
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        return self.outputStack.pop()

    def first(self):
        if self.outputStack.is_empty():
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        return self.outputStack.top()

    def is_empty(self):
        return self.inputStack.is_empty() and self.outputStack.is_empty()

    def __len__(self):
        return len(self.inputStack) + len(self.outputStack)
```

@tab code6

```python
class ArrayStack:
    def __init__(self):
        self.data = []

    def push(self, e):
        self.data.append(e)

    def pop(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data.pop()

    def is_empty(self):
        return len(self.data) == 0

    def top(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data[-1]

    def __len__(self):
        return len(self.data)


class Queue:
    def __init__(self):
        self.inputStack = ArrayStack()
        self.outputStack = ArrayStack()

    def enqueue(self, item):
        self.inputStack.push(item)

    def dequeue(self):
        if self.outputStack.is_empty():
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        return self.outputStack.pop()

    @property
    def first(self):
        if self.outputStack.is_empty():
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        return self.outputStack.top()

    def is_empty(self):
        return self.inputStack.is_empty() and self.outputStack.is_empty()

    def __len__(self):
        return len(self.inputStack) + len(self.outputStack)

```

@tab code7

```python
class ArrayStack:
    def __init__(self):
        self.data = []

    def push(self, e):
        self.data.append(e)

    def pop(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data.pop()

    def is_empty(self):
        return len(self.data) == 0

    def top(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data[-1]

    def __len__(self):
        return len(self.data)


class Queue:
    def __init__(self):
        self.inputStack = ArrayStack()
        self.outputStack = ArrayStack()

    def enqueue(self, item):
        self.inputStack.push(item)

    def dequeue(self):
        if self.outputStack.is_empty():
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        return self.outputStack.pop()

    @property
    def first(self):
        if self.outputStack.is_empty():
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        return self.outputStack.top()

    def is_empty(self):
        return self.inputStack.is_empty() and self.outputStack.is_empty()

    def __len__(self):
        return len(self.inputStack) + len(self.outputStack)

```

@tab code8

```python
class ArrayStack:
    # ... (其他部分保持不变)

class Queue:
    def __init__(self):
        self.inputStack = ArrayStack()
        self.outputStack = ArrayStack()

    def enqueue(self, item):
        self.inputStack.push(item)

    def dequeue(self):
        if self.outputStack.is_empty():
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        return self.outputStack.pop()

    @property
    def first(self):
        # ... (方法内容保持不变)

    @property
    def is_empty(self):
        return self.inputStack.is_empty() and self.outputStack.is_empty()

    def __len__(self):
        return len(self.inputStack) + len(self.outputStack)

```

@tab code9

```python
class ArrayStack:
    def __init__(self):
        # 初始化栈为空列表
        self.data = []

    def push(self, e):
        # 入栈操作，将元素添加到列表末尾
        self.data.append(e)

    def pop(self):
        # 出栈操作，移除并返回列表末尾元素
        # 如果栈为空，则抛出异常
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data.pop()

    def is_empty(self):
        # 返回栈是否为空
        return len(self.data) == 0

    def top(self):
        # 查看栈顶元素，不移除
        # 如果栈为空，则抛出异常
        if self.is_empty():
            raise Exception('Stack is empty')
        return self.data[-1]

    def __len__(self):
        # 返回栈中元素数量
        return len(self.data)


class Queue:
    def __init__(self):
        # 队列初始化包括两个栈：inputStack和outputStack
        self.inputStack = ArrayStack()
        self.outputStack = ArrayStack()

    def enqueue(self, item):
        # 入队操作，将元素添加到inputStack
        self.inputStack.push(item)

    def dequeue(self):
        # 出队操作
        if self.outputStack.is_empty():
            # 如果outputStack为空，则将inputStack中所有元素逆序放入outputStack
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        # 如果outputStack仍为空，表示队列中没有元素，抛出异常
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        # 否则，从outputStack中移除并返回顶部元素，即为最先入队的元素
        return self.outputStack.pop()

    @property
    def first(self):
        # 查看队首元素，不移除
        if self.outputStack.is_empty():
            # 如果outputStack为空，将inputStack中所有元素逆序放入outputStack
            while not self.inputStack.is_empty():
                self.outputStack.push(self.inputStack.pop())
        # 如果outputStack为空，则队列无元素，抛出异常
        if self.outputStack.is_empty():
            raise Exception('Queue is empty')
        # 返回outputStack顶部元素，即队列中的第一个元素
        return self.outputStack.top()

    @property
    def is_empty(self):
        # 判断队列是否为空
        # 如果inputStack和outputStack都为空，则队列为空
        return self.inputStack.is_empty() and self.outputStack.is_empty()

    def __len__(self):
        # 计算队列长度
        # 队列长度为两个栈的元素总和
        return len(self.inputStack) + len(self.outputStack)

```



:::

## Question 5

Implement the following function:

`def permutations(lst)`

The function is given a list `lst` of integers, and returns a list containing all the different permutations of the elements in `lst`. Each such permutation should be represented as a list.

For example, if `lst = [1, 2, 3]`, the call `permutations(lst)` could return `[[1, 2, 3], [2, 1, 3], [1, 3, 2], [3, 2, 1], [3, 1, 2], [2, 3, 1]]`

**Implementation Requirements**:

1. Your implementation should be **non-recursive**.
2. Your implementation is allowed to use a Stack, a Queue, and $\theta(1)$ additional space.

**Hint:** Use the stack to store the elements yet to be used to generate the permutations and use the queue to store the (partial) collection of permutations generated so far.  

::: code-tabs

@tab code1

```python
from collections import deque

def permutations(lst):
    """
    This function returns all the permutations of a list of integers using a non-recursive approach.
    It uses a queue to manage the sequence of operations and a stack (implemented as a list) to build the permutations.

    :param lst: List of integers to permute
    :return: A list of lists, where each sublist is a unique permutation of 'lst'
    """
    # 如果列表为空，则没有排列可计算
    if not lst:
        return []

    # 使用队列来管理排列组合的操作序列
    queue = deque()
    
    # 初始情况：从一个空排列开始，并将整个列表作为剩余元素
    queue.append(([], lst))

    # 结果列表，用来保存所有完成的排列组合
    result = []

    # 当队列不为空时继续处理
    while queue:
        # 出队一个元组，包含当前排列和剩余元素
        current_permutation, remaining_elements = queue.popleft()
        
        # 如果没有剩余元素，那么current_permutation是一个完整的排列
        if not remaining_elements:
            result.append(current_permutation)
        else:
            # 否则，对于每一个剩余元素，创建一个新的排列
            for i in range(len(remaining_elements)):
                # 新排列将当前元素添加到当前排列中
                new_permutation = current_permutation + [remaining_elements[i]]
                # 通过移除当前元素来计算新的剩余元素
                new_remaining = remaining_elements[:i] + remaining_elements[i+1:]
                # 将新状态添加到队列中
                queue.append((new_permutation, new_remaining))

    # 返回完整的排列组合列表
    return result

# 示例使用：
# 这应该返回[1, 2, 3]的所有排列
print(permutations([1, 2, 3]))
```

@tab code2

```python
def permutations(lst):
    # 如果列表为空，那么没有排列存在
    if len(lst) == 0:
        return []

    # 初始排列仅包含第一个元素
    result = [[lst[0]]]

    # 从第二个元素开始遍历列表中的所有元素
    for i in range(1, len(lst)):
        new_result = []
        # 遍历到目前为止的所有排列
        for perm in result:
            # 将当前元素插入到排列的每个可能位置
            for j in range(len(perm)+1):
                new_perm = perm[:j] + [lst[i]] + perm[j:]
                new_result.append(new_perm)
        result = new_result

    return result

# 示例使用：
# 这应该返回[1, 2, 3]的所有排列
print(permutations([1, 2, 3]))
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
