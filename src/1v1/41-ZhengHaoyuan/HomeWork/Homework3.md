---
title: NYU, Tandon School of Engineering Algorithms — Fall 2023 Homework #3
date: 2023-10-11 21:48:58
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

**Submission instructions:**

a) Youshouldturnin6files:

- 3 ‘.py’ files: one, with all the code related, to each of the questions 2-4.Name your files: ‘YourNetID_hw3_q2.py’, ‘YourNetID_hw3_q3.py’, and

    ‘YourNetID_hw3_q4.py’.

- A ‘.pdf’ file with all your written answers. Name your file: ‘YourNetID_hw3.pdf’ Note: your netID follows an abc123 pattern, not N12345678.

- YoushouldsubmityourhomeworkviaGradescope.

For Gradescope’s autograding feature to work:

1. Name all classes, functions and methods **exactly as they are in the** **assignment specifications**.
2. Make sure there are **no print statements** in your code. If you have tester code, please put it in a “main” function and **do not call it**.

## Question 1

::: tabs

@tab EN

Consider the following two implementations of a function that if given a list, lst, create and return a new list containing the elements of lst in reverse order.

```python
def reverse1(lst):
    rev_lst = []
    i = 0
    while i < len(lst):
        rev_lst.insert(0, lst[i])
        i += 1
    return rev_lst


def reverse2(lst):
    rev_lst = []
    i = len(lst) - 1
    while i >= 0:
        rev_lst.append(lst[i])
        i -= 1
    return rev_lst
```

If lst is a list of *n* integers,

1. What is the worst case running time of `reverse1(lst)`? Explain of your answer.
2. What is the worst case running time of `reverse2(lst)`?Expla in of your answer.

@tab ZH

考虑以下两种实现，它们是一个函数。如果给定一个列表 lst，该函数将创建并返回一个新的列表，其中包含 lst 中的元素，但是顺序是反向的。

```python
def reverse1(lst):
    rev_lst = []
    i = 0
    while i < len(lst):
        rev_lst.insert(0, lst[i])
        i += 1
    return rev_lst


def reverse2(lst):
    rev_lst = []
    i = len(lst) - 1
    while i >= 0:
        rev_lst.append(lst[i])
        i -= 1
    return rev_lst
```

如果 lst 是一个包含*n*个整数的列表，

1. `reverse1(lst)`的最坏情况运行时间是多少？解释你的答案。
2. `reverse2(lst)`的最坏情况运行时间是多少？解释你的答案。

@tab Answer1

1. `reverse1(lst)` 的最坏情况运行时间：

函数 `reverse1` 使用 `insert` 方法将每个元素插入到新列表的开头。这种插入操作在最坏的情况下具有 $O(n)$ 的时间复杂度，因为每次插入都可能需要移动现有的所有元素以为新元素腾出空间。因为 `reverse1` 对原始列表的每个元素都执行这种插入操作，所以整个函数的时间复杂度是 $O(n^2)$。

解释：每次插入操作都需要移动现有元素，所以插入n个元素需要的时间为$1 + 2 + ... + n$，这是一个等差数列，它的和是 $O(n^2)$。因此，`reverse1(lst)` 的最坏情况运行时间为 $O(n^2)$ 。

2. `reverse2(lst)` 的最坏情况运行时间：

函数 `reverse2` 通过从原始列表的末尾开始，使用 `append` 方法将元素添加到新列表的末尾。`append` 操作具有 $O(1)$ 的时间复杂度。因为`reverse2` 对原始列表的每个元素都执行这种添加操作，所以整个函数的时间复杂度是 $O(n)$。

解释：每次添加操作都是常数时间，所以为 n 个元素添加需要的时间为 $n * O(1) = O(n)$。因此，`reverse2(lst)` 的最坏情况运行时间为 $O(n)$。

总结：`reverse1` 的实现由于使用了在列表开头插入元素的方法，其效率较低；而 `reverse2` 的实现则明显更加高效。

@tab Answer2

1. `reverse1(lst)` 的最坏情况运行时间：

当我们考虑 `rev_lst.insert(0, lst[i])` 这个操作时，需要理解列表在位置0插入一个元素的代价。每当我们在列表的开头插入一个元素，它都需要将所有现有的元素向右移动一位以腾出位置。因此，该操作的时间复杂度是 $O(n)$。因为我们对每个元素都执行此操作，所以总的时间复杂度是 $O(n^2)$。

答案：`reverse1(lst)` 的最坏情况运行时间是 $O(n^2)$。因为对于每个元素，我们都在结果列表的开头插入，这是一个线性操作。

2. `reverse2(lst)` 的最坏情况运行时间：

这个函数中，我们使用了 `rev_lst.append(lst[i])`。列表的append操作通常是O(1)的常数时间。我们对列表中的每个元素都执行了这个操作，所以总的时间复杂度是 $O(n)$ 。

答案：`reverse2(lst)` 的最坏情况运行时间是 $O(n)$。因为对于列表中的每个元素，我们都执行了一个常数时间的 append 操作。

:::

## Question 2

::: tabs

@tab EN

Consider the implementation we made in class for ArrayList, and its extensions you did in the lab.

In this question, we will add two more methods to this class: the insert method and the pop method. For this question, please submit the modified ArrayList Class.

a) Implement the method `insert(self, index, val)` that inserts `val` before `index` (shifting the elements to make room for `val`).  

**For example, your implementation should follow the behavior below:**

```python
>>> arr_lst = ArrayList()
>>> for i in range(1, 4+1):
...     arr_lst.append(i)
>>> arr_lst.insert(2, 30)
>>> arr_lst
[1, 2, 30, 3, 4]
```

Notes:

1. Make sure to double the capacity of the array, if there is no room for an additional element.
2. Your function should raise an IndexError exception in any case the index (positive or negative) is out of range.

b) Implement the method `pop(self)`, that removes the last element from the list. The pop method should return the element removed from the list, and put `None` in its place in the array. If `pop` was called on an empty list, an `IndexError` exception should be raised.

In order to maintain the linear memory usage of the list data structure, and its efficient amortized performance, we use the following shrinking strategy: When the number of elements in the list goes strictly below a quarter of the array’s capacity, we shrink its capacity by half.

For example, your implementation should follow the behavior below:

```python
>>> arr_lst = ArrayList()
>>> for i in range(1, 5+1):
...     arr_lst.append(i)
>>> arr_lst.pop()
5
>>> arr_lst.pop()
4
>>> arr_lst.pop()
3
>>> arr_lst.pop()
2
>>> arr_lst
[1]
```

Note: After the executing the code above, the capacity of the array in `ArrayList` will be 4.

c) Extra Credit (You don’t need to submit): The extending and shrinking strategies we use in our ArrayList implementation (doubling the capacity of the array each time there is no room to add an element, and shrinking the capacity of the array by a factor of 2 each time the number of elements is less than a quarter of the array’s capacity), guarantees two important things:

i. In any given time, the memory used to store the elements is linear. That is, if there are *n* elements in the array, then: 𝑛 ≤ (𝑐𝑎𝑝𝑎𝑐𝑖𝑡𝑦 𝑜𝑓 𝑡h𝑒 𝑎𝑟𝑟𝑎𝑦) ≤ 4𝑛.

ii. Any sequence of *n* append and/or pop operations on an initially empty ArrayList object, takes *O(n)* time.

Proving these properties is out of the scope of this assignment, but we will show two supporting insights:

1. Show that the following series of *2n* operations takes *O(n)* time: *n* append operations on an initially empty array, followed by *n* pop operations.
2. Consider a variant to our shrinking strategy, in which an array of capacity *N*,is resized to capacity precisely that of the number of elements, any time the number of elements in the array goes strictly below *N/2*.Show that there exists a sequence of *n* append and/or pop operations on an initially empty ArrayList object, that requires $Ω(𝑛^2)$ time to execute.

d) Modify the pop method,so it could optionally get an index as a parameter.This index indicates the position of the element that is to be removed from the list.

Notes:

1. Make sure to use the same shrinking strategy described above in section (b).
2. Your function should raise an IndexError exception in any case the index (positive or negative) is out of range.

@tab ZH

考虑我们在课堂上为`ArrayList`进行的实现，以及您在实验室中所做的扩展。

在此问题中，我们将向此类添加两个方法：`insert`方法和`pop`方法。对于此问题，请提交修改后的`ArrayList`类。

a) 实现方法`insert(self, index, val)`，在`index`前插入`val`（移动元素为`val`腾出空间）。

例如，您的实现应遵循以下行为：

```python
>>> arr_lst = ArrayList()
>>> for i in range(1, 4+1):
...     arr_lst.append(i)
>>> arr_lst.insert(2, 30)
>>> arr_lst
[1, 2, 30, 3, 4]
```

注意：

1. 如果没有多余的空间放置新的元素，请确保将数组的容量加倍。
2. 如果索引（正数或负数）超出范围，您的函数应引发`IndexError`异常。

b) 实现方法`pop(self)`，从列表中移除最后一个元素。`pop`方法应返回从列表中移除的元素，并在数组中将其位置替换为`None`。如果在空列表上调用`pop`，则应引发`IndexError`异常。

为了保持列表数据结构的线性内存使用，并保持其高效的均摊性能，我们使用以下缩小策略：当列表中的元素数量严格低于数组容量的四分之一时，我们将其容量缩小一半。

例如，您的实现应遵循以下行为：

```python
>>> arr_lst = ArrayList()
>>> for i in range(1, 5+1):
...     arr_lst.append(i)
>>> arr_lst.pop()
5
>>> arr_lst.pop()
4
>>> arr_lst.pop()
3
>>> arr_lst.pop()
2
>>> arr_lst
[1]
```

注意：执行上述代码后，`ArrayList`中的数组容量将为4。

c) 额外加分（无需提交）：我们在`ArrayList`实现中使用的扩展和缩小策略（每次没有空间添加元素时将数组的容量加倍，以及每次数组中的元素数量少于数组容量的四分之一时，将数组的容量缩小2倍）保证了两件重要的事情：

i. 任何给定时间，用于存储元素的内存都是线性的。也就是说，如果数组中有*n*个元素，那么：𝑛 ≤ (𝑐𝑎𝑝𝑎𝑐𝑖𝑡𝑦 𝑜𝑓 𝑡h𝑒 𝑎𝑟𝑟𝑎𝑦) ≤ 4𝑛。

ii. 在初始为空的`ArrayList`对象上，任何*n*个append和/或pop操作的序列需要*O(n)*时间。

证明这些性质超出了此任务的范围，但我们将展示两个支持的见解：

1. 显示以下*2n*个操作需要*O(n)*时间的序列：对初始为空的数组进行*n*次append操作，然后进行*n*次pop操作。
2. 考虑我们的缩小策略的一个变体，其中容量为*N*的数组，每次数组中的元素数量严格低于*N/2*时，都调整为元素数量的精确容量。显示存在一个序列，在初始为空的`ArrayList`对象上执行*n*个append和/或pop操作，需要$Ω(𝑛^2)$时间来执行。

d) 修改`pop`方法，使其可以选择性地获取索引作为参数。此索引指示要从列表中移除的元素的位置。

注意：

1. 请确保使用上述第(b)部分中描述的相同缩小策略。
2. 如果索引（正数或负数）超出范围，您的函数应引发`IndexError`异常。

@tab A1

```python
import ctypes  # provides low-level arrays


def make_array(n):
    return (n * ctypes.py_object)()


class ArrayList:
    def __init__(self):
        self.data = make_array(1)
        self.capacity = 1
        self.n = 0

    def __len__(self):
        return self.n

    def append(self, val):
        if self.n == self.capacity:
            self.resize(2 * self.capacity)
        self.data[self.n] = val
        self.n += 1

    def resize(self, new_size):
        new_array = make_array(new_size)
        for i in range(self.n):
            new_array[i] = self.data[i]
        self.data = new_array
        self.capacity = new_size

    def extend(self, iter_collection):
        for elem in iter_collection:
            self.append(elem)

    def __getitem__(self, ind):
        if not (-self.n <= ind <= self.n - 1):
            raise IndexError("invalid index")
        if ind < 0:
            ind = self.n + ind
        return self.data[ind]

    def __setitem__(self, ind, val):
        if not (-self.n <= ind <= self.n - 1):
            raise IndexError("invalid index")
        if ind < 0:
            ind = self.n + ind
        self.data[ind] = val

    def __repr__(self):
        data_as_strings = [str(self.data[i]) for i in range(self.n)]
        return "[" + ", ".join(data_as_strings) + "]"

    def __add__(self, other):
        res = ArrayList()
        res.extend(self)
        res.extend(other)
        return res

    def __iadd__(self, other):
        self.extend(other)
        return self

    def __mul__(self, times):
        res = ArrayList()
        for i in range(times):
            res.extend(self)
        return res

    def __rmul__(self, times):
        return self * times

    def insert(self, index, val):
        if not (-self.n <= index <= self.n):
            raise IndexError("invalid index")
        if self.n == self.capacity:
            self.resize(2 * self.capacity)
        if index < 0:
            index += self.n
        for i in range(self.n, index, -1):
            self.data[i] = self.data[i - 1]
        self.data[index] = val
        self.n += 1

    def pop(self, index=None):
        if self.n == 0:
            raise IndexError("pop from empty list")
        if index is None:
            index = self.n - 1
        elif not (-self.n <= index < self.n):
            raise IndexError("invalid index")
        if index < 0:
            index += self.n
        val = self.data[index]
        for i in range(index, self.n - 1):
            self.data[i] = self.data[i + 1]
        self.data[self.n - 1] = None
        self.n -= 1
        if self.n < self.capacity // 4:
            self.resize(self.capacity // 2)
        return val
```

@tab A1-注释

```python
import ctypes  # 用于提供低级数组


def make_array(n):
    """创建一个长度为n的低级数组。"""
    return (n * ctypes.py_object)()


class ArrayList:
    def __init__(self):
        """初始化方法。"""
        self.data = make_array(1)  # 初始化一个容量为1的数组
        self.capacity = 1  # 初始化数组的容量
        self.n = 0  # 初始化当前列表中的元素数为0

    def __len__(self):
        """返回列表的长度。"""
        return self.n

    def append(self, val):
        """在列表的末尾添加一个元素。"""
        if self.n == self.capacity:  # 如果数组已满
            self.resize(2 * self.capacity)  # 扩大数组的容量
        self.data[self.n] = val  # 将值添加到数组的末尾
        self.n += 1  # 增加元素数

    def resize(self, new_size):
        """调整数组的大小。"""
        new_array = make_array(new_size)  # 创建一个新的数组
        for i in range(self.n):
            new_array[i] = self.data[i]  # 复制旧数组的数据到新数组
        self.data = new_array  # 将新数组设置为当前数组
        self.capacity = new_size  # 更新容量值

    def extend(self, iter_collection):
        """将一个可迭代集合的元素添加到列表中。"""
        for elem in iter_collection:
            self.append(elem)

    def __getitem__(self, ind):
        """获取指定索引的元素。"""
        if not (-self.n <= ind <= self.n - 1):  # 如果索引超出范围
            raise IndexError("invalid index")
        if ind < 0:  # 如果索引是负数
            ind = self.n + ind  # 转换为正数索引
        return self.data[ind]

    def __setitem__(self, ind, val):
        """设置指定索引的元素值。"""
        if not (-self.n <= ind <= self.n - 1):  # 如果索引超出范围
            raise IndexError("invalid index")
        if ind < 0:  # 如果索引是负数
            ind = self.n + ind  # 转换为正数索引
        self.data[ind] = val

    def __repr__(self):
        """返回列表的字符串表示形式。"""
        data_as_strings = [str(self.data[i]) for i in range(self.n)]
        return "[" + ", ".join(data_as_strings) + "]"

    def __add__(self, other):
        """合并两个列表并返回新列表。"""
        res = ArrayList()
        res.extend(self)
        res.extend(other)
        return res

    def __iadd__(self, other):
        """在现有列表中添加另一个列表的元素。"""
        self.extend(other)
        return self

    def __mul__(self, times):
        """重复列表多次并返回新列表。"""
        res = ArrayList()
        for i in range(times):
            res.extend(self)
        return res

    def __rmul__(self, times):
        """允许使用整数乘以列表。"""
        return self * times

    def insert(self, index, val):
        """在指定的位置插入值。"""
        if not (-self.n <= index <= self.n):  # 如果索引超出范围
            raise IndexError("invalid index")
        if self.n == self.capacity:  # 如果数组已满
            self.resize(2 * self.capacity)  # 扩大数组的容量
        if index < 0:  # 如果索引是负数
            index += self.n  # 转换为正数索引
        for i in range(self.n, index, -1):
            self.data[i] = self.data[i - 1]  # 向右移动元素以为新值腾出空间
        self.data[index] = val  # 插入新值
        self.n += 1  # 增加元素数

    def pop(self, index=None):
        """删除并返回列表中的最后一个元素或指定索引的元素。"""
        if self.n == 0:  # 如果列表是空的
            raise IndexError("pop from empty list")
        if index is None:  # 如果没有提供索引
            index = self.n - 1  # 使用默认值（最后一个元素的索引）
        elif not (-self.n <= index < self.n):  # 如果索引超出范围
            raise IndexError("invalid index")
        if index < 0:  # 如果索引是负数
            index += self.n  # 转换为正数索引
        val = self.data[index]  # 获取需要删除的元素的值
        for i in range(index, self.n - 1):
            self.data[i] = self.data[i + 1]  # 将后续的元素向左移动以填充删除的位置
        self.data[self.n - 1] = None  # 将最后一个位置设置为None
        self.n -= 1  # 减少元素数
        if self.n < self.capacity // 4:  # 如果当前元素数小于容量的四分之一
            self.resize(self.capacity // 2)  # 减少数组容量的一半
        return val  # 返回被删除的元素的值
```

@tab A2

```python
import ctypes  # provides low-level arrays


def make_array(n):
    return (n * ctypes.py_object)()


class ArrayList:
    def __init__(self):
        self.data = make_array(1)
        self.capacity = 1
        self.n = 0

    def __len__(self):
        return self.n

    def append(self, val):
        if self.n == self.capacity:
            self.resize(2 * self.capacity)
        self.data[self.n] = val
        self.n += 1

    def resize(self, new_size):
        new_array = make_array(new_size)
        for i in range(self.n):
            new_array[i] = self.data[i]
        self.data = new_array
        self.capacity = new_size

    def extend(self, iter_collection):
        for elem in iter_collection:
            self.append(elem)

    def __getitem__(self, ind):
        if not (-self.n <= ind <= self.n - 1):
            raise IndexError("invalid index")
        if ind < 0:
            ind = self.n + ind
        return self.data[ind]

    def __setitem__(self, ind, val):
        if not (-self.n <= ind <= self.n - 1):
            raise IndexError("invalid index")
        if ind < 0:
            ind = self.n + ind
        self.data[ind] = val

    def __repr__(self):
        data_as_strings = [str(self.data[i]) for i in range(self.n)]
        return "[" + ", ".join(data_as_strings) + "]"

    def __add__(self, other):
        res = ArrayList()
        res.extend(self)
        res.extend(other)
        return res

    def __iadd__(self, other):
        self.extend(other)
        return self

    def __mul__(self, times):
        res = ArrayList()
        for i in range(times):
            res.extend(self)
        return res

    def __rmul__(self, times):
        return self * times

    def insert(self, index, val):
        if not (-self.n <= index <= self.n):
            raise IndexError("invalid index")
        if self.n == self.capacity:
            self.resize(2 * self.capacity)
        for i in range(self.n, index, -1):
            self.data[i] = self.data[i-1]
        self.data[index] = val
        self.n += 1

    def pop(self, index=None):
        if self.n == 0:
            raise IndexError("pop from empty list")
        if index is None:
            index = self.n - 1
        elif not (-self.n <= index < self.n):
            raise IndexError("invalid index")
        if index < 0:
            index += self.n
        val = self.data[index]
        for i in range(index, self.n-1):
            self.data[i] = self.data[i+1]
        self.n -= 1
        if self.n < self.capacity // 4:
            self.resize(self.capacity // 2)
        return val

```



@tab A2-Q

```markdown
1. **insert方法**
   - 你正确地检查了数组是否需要扩展，并实施了扩展策略。
   - 你在插入时移动了元素以使其在给定的索引位置之前。
   - 你正确地处理了负索引，并为超出范围的索引引发了`IndexError`异常。

2. **pop方法**
   - 如果`ArrayList`为空，你正确地引发了`IndexError`异常。
   - 你正确地处理了没有给出索引的情况，并默认删除了最后一个元素。
   - 你正确地移动了元素，以移除给定索引处的元素。
   - 当元素数量小于数组容量的1/4时，你减少了数组的容量。
   - 你返回了被删除的元素。

在上述实现中，有几点可以优化或考虑：

- **insert方法中**，当索引为负数时，需要将其转换为对应的正索引。

- **pop方法中**，你用了一个for循环来左移所有后面的元素。这在最坏的情况下是O(n)。如果是从末尾pop一个元素，那么这是O(1)。但如果是从开始或中间位置pop，那么这将是O(n)。这是符合题目要求的。
```

@tab A2-优化

```python
import ctypes  # provides low-level arrays


def make_array(n):
    return (n * ctypes.py_object)()


class ArrayList:
    def __init__(self):
        self.data = make_array(1)
        self.capacity = 1
        self.n = 0

    def __len__(self):
        return self.n

    def append(self, val):
        if self.n == self.capacity:
            self.resize(2 * self.capacity)
        self.data[self.n] = val
        self.n += 1

    def resize(self, new_size):
        new_array = make_array(new_size)
        for i in range(self.n):
            new_array[i] = self.data[i]
        self.data = new_array
        self.capacity = new_size

    def extend(self, iter_collection):
        for elem in iter_collection:
            self.append(elem)

    def __getitem__(self, ind):
        if not (-self.n <= ind <= self.n - 1):
            raise IndexError("invalid index")
        if ind < 0:
            ind += self.n  # Convert negative index to positive
        return self.data[ind]

    def __setitem__(self, ind, val):
        if not (-self.n <= ind <= self.n - 1):
            raise IndexError("invalid index")
        if ind < 0:
            ind += self.n  # Convert negative index to positive
        self.data[ind] = val

    def __repr__(self):
        data_as_strings = [str(self.data[i]) for i in range(self.n)]
        return "[" + ", ".join(data_as_strings) + "]"

    def __add__(self, other):
        res = ArrayList()
        res.extend(self)
        res.extend(other)
        return res

    def __iadd__(self, other):
        self.extend(other)
        return self

    def __mul__(self, times):
        res = ArrayList()
        for i in range(times):
            res.extend(self)
        return res

    def __rmul__(self, times):
        return self * times

    def insert(self, index, val):
        if not (-self.n <= index <= self.n):
            raise IndexError("invalid index")
        
        if index < 0:
            index += self.n  # Convert negative index to positive
        
        if self.n == self.capacity:
            self.resize(2 * self.capacity)
            
        for i in range(self.n, index, -1):
            self.data[i] = self.data[i-1]
        
        self.data[index] = val
        self.n += 1

    def pop(self, index=None):
        if self.n == 0:
            raise IndexError("pop from empty list")
        
        if index is None:
            index = self.n - 1
        elif not (-self.n <= index < self.n):
            raise IndexError("invalid index")
        
        if index < 0:
            index += self.n  # Convert negative index to positive
        
        val = self.data[index]
        for i in range(index, self.n-1):
            self.data[i] = self.data[i+1]
        self.data[self.n-1] = None  # Clear the last position
        
        self.n -= 1
        if self.n < self.capacity // 4:
            self.resize(self.capacity // 2)
        
        return val

```

@tab A2-注释

```python
import ctypes  # 提供底层数组


def make_array(n):
    """创建一个大小为n的新数组"""
    return (n * ctypes.py_object)()


class ArrayList:
    def __init__(self):
        """初始化函数"""
        self.data = make_array(1)  # 初始化一个大小为1的数组
        self.capacity = 1  # 初始化数组的容量
        self.n = 0  # 初始化数组的元素数量

    def __len__(self):
        """返回数组的元素数量"""
        return self.n

    def append(self, val):
        """在数组末尾添加一个元素"""
        if self.n == self.capacity:  # 如果数组已满
            self.resize(2 * self.capacity)  # 扩大数组的容量
        self.data[self.n] = val  # 添加元素
        self.n += 1

    def resize(self, new_size):
        """调整数组的大小"""
        new_array = make_array(new_size)  # 创建一个新数组
        for i in range(self.n):  # 将旧数组的元素复制到新数组
            new_array[i] = self.data[i]
        self.data = new_array  # 更新data为新数组
        self.capacity = new_size  # 更新容量

    def extend(self, iter_collection):
        """将一个集合的元素添加到数组中"""
        for elem in iter_collection:
            self.append(elem)

    def __getitem__(self, ind):
        """获取给定索引处的元素"""
        if not (-self.n <= ind <= self.n - 1):
            raise IndexError("invalid index")  # 如果索引无效，抛出异常
        if ind < 0:  # 处理负索引
            ind = self.n + ind
        return self.data[ind]

    def __setitem__(self, ind, val):
        """设置给定索引处的元素"""
        if not (-self.n <= ind <= self.n - 1):
            raise IndexError("invalid index")  # 如果索引无效，抛出异常
        if ind < 0:  # 处理负索引
            ind = self.n + ind
        self.data[ind] = val

    def __repr__(self):
        """返回数组的字符串表示"""
        data_as_strings = [str(self.data[i]) for i in range(self.n)]
        return "[" + ", ".join(data_as_strings) + "]"

    def __add__(self, other):
        """重载+操作符，连接两个数组"""
        res = ArrayList()
        res.extend(self)
        res.extend(other)
        return res

    def __iadd__(self, other):
        """重载+=操作符，将另一个数组的元素添加到当前数组"""
        self.extend(other)
        return self

    def __mul__(self, times):
        """重载*操作符，重复当前数组"""
        res = ArrayList()
        for i in range(times):
            res.extend(self)
        return res

    def __rmul__(self, times):
        """重载右乘操作符"""
        return self * times

    def insert(self, index, val):
        """在给定索引处插入一个元素"""
        if not (-self.n <= index <= self.n):
            raise IndexError("invalid index")  # 如果索引无效，抛出异常
        if self.n == self.capacity:  # 如果数组已满
            self.resize(2 * self.capacity)  # 扩大数组的容量
        for i in range(self.n, index, -1):  # 移动索引及其后面的所有元素，为新元素腾出空间
            self.data[i] = self.data[i - 1]
        self.data[index] = val
        self.n += 1

    def pop(self, index=None):
        """删除并返回数组中的一个元素"""
        if self.n == 0:
            raise IndexError("pop from empty list")  # 如果数组为空，抛出异常
        if index is None:  # 如果没有给出索引，则删除最后一个元素
            index = self.n - 1
        elif not (-self.n <= index < self.n):
            raise IndexError("invalid index")  # 如果索引无效，抛出异常
        if index < 0:  # 处理负索引
            index += self.n
        val = self.data[index]
        for i in range(index, self.n - 1):
            # 从指定的索引开始，将后面的元素都向前移动一个位置
            self.data[i] = self.data[i + 1]

        self.n -= 1  # 更新数组的元素数量

        if self.n < self.capacity // 4:
            # 如果数组的元素数量少于容量的1/4
            self.resize(self.capacity // 2)  # 缩小数组的容量

        return val  # 返回被删除的元素

    # 注意：此实现中的insert和pop方法可能不是最高效的，因为它们涉及到在数组中移动多个元素。但是为了满足题目的要求和确保代码的简洁性，我们使用了这种方法。
```

:::

## Question 3

::: tabs

@tab EN

a) Give a **linear implementation** of the following function:

`def find_duplicates(lst)`

The function is given a list lst of *n* integers. All the elements of lst are from the domain: *{1, 2, ..., n-1}*. Note that this restricted domain implies that there are element/s appearing in lst more than once.

The function should return a list containing all the elements that appear in lst more than once.

For example, if `lst = [2, 4, 4, 1, 2]` , the call `find_duplicates(lst)` could return  `[2, 4]`.

b) Analyze the worst-case running time of your implementation in (a).

@tab ZH

Here's the translation to Chinese:

a) 为下面的函数给出一个**线性实现**：

`def find_duplicates(lst)`

该函数接收一个列表 lst，其中包含 *n* 个整数。lst 的所有元素来自于这个范围：*{1, 2, ..., n-1}*。请注意，这个有限的范围意味着 lst 中有一个或多个元素出现不止一次。

函数应该返回一个列表，包含在 lst 中出现不止一次的所有元素。

例如，如果 `lst = [2, 4, 4, 1, 2]`，调用 `find_duplicates(lst)` 可能返回 `[2, 4]`。

b) 分析在(a)中你的实现的最坏情况运行时间。

Would you also like the solution to the problem?

@tab A1

好的。先给出解答的思路，然后是代码。

**思路**:

既然我们知道列表中的所有整数都在 {1, 2, ..., n-1} 这个范围内，我们可以使用这个信息来在 O(n) 的时间内找到重复的数字。一种方法是原地修改这个列表。对于每个元素 lst[i]，我们可以将其视为一个索引，并将 lst[lst[i] - 1] 乘以 -1。如果我们在乘以 -1 之前发现 lst[lst[i] - 1] 已经是负数了，那么这意味着 lst[i] 是一个重复的数字。

**代码**:

```python
def find_duplicates(lst):
    duplicates = []
    
    for i in lst:
        # 由于元素范围是从 1 到 n-1，所以我们需要减 1 来得到正确的索引
        if lst[abs(i) - 1] < 0:
            duplicates.append(abs(i))
        else:
            lst[abs(i) - 1] = -lst[abs(i) - 1]
    
    # 恢复原列表，虽然这一步不是必须的，但可以确保列表在函数调用后不被改变
    for i in range(len(lst)):
        lst[i] = abs(lst[i])
    
    return duplicates

# 测试
lst = [2, 4, 4, 1, 2]
print(find_duplicates(lst))  # [2, 4]
```

**最坏情况运行时间分析**:
- 循环列表，进行索引检查和取反操作的时间复杂度为 $O(n)$。
- 恢复原始列表的时间复杂度为 O(n)。

因此，整体的最坏情况运行时间为 $O(n) + O(n) = O(n)$。

@tab A2

使用集合来找到重复数字的方法。

这种方法的思想是利用集合的特性（即元素的唯一性）来检查和记录重复的数字。

**思路**:

1. 遍历列表中的每一个数字。
2. 对于每一个数字，检查它是否已经在一个临时的集合中。如果已经存在，那么这是一个重复的数字，我们把它添加到结果的集合中。
3. 如果这个数字不在临时的集合中，我们把它添加到临时的集合里面。

这种方法的优势是不修改原始列表，但它使用了额外的存储空间。

**代码**:

```python
def find_duplicates(lst):
    seen = set()         # 用来检查数字是否已经出现过
    duplicates = set()   # 用来存储重复的数字
    
    for i in lst:
        if i in seen:
            duplicates.add(i)
        else:
            seen.add(i)
    
    return list(duplicates)

# 测试
lst = [2, 4, 4, 1, 2]
print(find_duplicates(lst))  # [2, 4]
```

**最坏情况运行时间分析**:
- 遍历列表并检查/插入集合的操作的时间复杂度为 $O(n)$。
- 而集合的插入和查找操作的平均时间复杂度都是 $O(1)$。

因此，整体的最坏情况运行时间仍然是 $O(n)$，但这种方法使用了 $O(n)$ 的额外空间来存储临时集合。

:::

## Question 4

::: tabs

@tab EN

The `remove(value)` method of the `list` class, removes the **first** occurrence of `value` from the list it was called on, or raises a `ValueError`  exception, if `value` is not present.

Note: Since remove needs to shift elements, its worst-case running time is linear.

In this question we will look into the function `remove_all(lst, value)`, that removes **all** occurrences of value from lst.

a)  Consider the following implementation of `remove_all` :

```python
def remove_all(lst, value):
    end = False
    while(end == False):
        try:
            lst.remove(value)
        except ValueError:
            end = True
```

Analyze the worst-case running time of the implementation above.

b)  Give an implementation to `remove_all` that runs in worst-case linear time.

Notes:

1. Your implementation should **mutate the given list object** (in-place), without using an additional data structure.
2. Your implementation **should keep the relative order** of the elements that remain in the list

c)  Analyze the worst-case running time of your implementation in (b).

@tab ZH

`list` 类的 `remove(value)` 方法，从调用它的列表中移除 `value` 的**第一个**出现。如果 `value` 不在列表中，则会抛出 `ValueError` 异常。

注意：由于remove需要移动元素，所以它的最坏情况的运行时间是线性的。

在这个问题中，我们将研究函数 `remove_all(lst, value)`，它从 lst 中移除 `value` 的**所有**出现。

a) 考虑以下的 `remove_all` 实现：

```python
def remove_all(lst, value):
    end = False
    while(end == False):
        try:
            lst.remove(value)
        except ValueError:
            end = True
```

分析上面实现的最坏情况的运行时间。

b) 给出一个`remove_all`的实现，它在最坏的情况下的运行时间是线性的。

注意事项：

1. 你的实现应该**就地修改给定的列表对象**，而不使用额外的数据结构。
2. 你的实现**应该保持列表中剩余元素的相对顺序**。

c) 分析你在(b)部分中的实现的最坏情况的运行时间。

@tab A1

a) 分析： `remove(value)` 方法在最坏情况下具有线性的运行时间。在上面的 `remove_all` 实现中，如果 `value` 在列表中多次出现，那么我们可能需要多次调用 `remove` 方法。因此，最坏情况的运行时间是 $O(n^2)$（其中 n 是列表的长度）。

b) 实现：

```python
def remove_all(lst, value):
    index_to_insert = 0
    for i in range(len(lst)):
        if lst[i] != value:
            if index_to_insert != i:  # This check is to avoid unnecessary assignments
                lst[index_to_insert] = lst[i]
            index_to_insert += 1
    del lst[index_to_insert:]
```

c) 分析： 我们遍历列表一次，所以时间复杂度是 $O(n)$。`del lst[index_to_insert:]` 操作也是 $O(n)$。因此，总的时间复杂度仍然是线性的，即 $O(n)$。

@tab A2

当然可以。为了让逻辑更加清晰，我们可以使用以下方法：

**实现**：

1. 初始化一个指针 `write_index` 为 0，表示即将写入的位置。
2. 遍历列表的每一个元素。
3. 如果当前元素不等于 `value`，则将其复制到 `write_index` 位置，并增加 `write_index` 。
4. 完成遍历后，使用切片操作来删除 `write_index` 之后的所有元素。

以下是具体实现：

```python
def remove_all(lst, value):
    write_index = 0
    for read_index in range(len(lst)):
        if lst[read_index] != value:
            lst[write_index] = lst[read_index]
            write_index += 1
    del lst[write_index:]
```

**分析**：

1. 我们只遍历列表一次，所以时间复杂度是 $O(n)$。
2. 切片操作`del lst[write_index:]`在最坏的情况下也是 $O(n)$。
3. 因此，整个操作的时间复杂度是 $O(n)$。

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
