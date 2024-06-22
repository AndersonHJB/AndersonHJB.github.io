---
title: NYU CS-UY 1134 Practice
date: 2023-10-21 23:41:01
author: AI悦创
isOriginal: true
category: 
    - python 1v1
tag:
    - NYU – Tandon School of Engineering
icon: a-jibijilianxibianji
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

### 题目

给定以下 Python 代码：

```python
import copy

list1 = [1, [2, 3], 4]
list2 = list1.copy()
list3 = copy.deepcopy(list1)

list2[0] = 0
list2[1][0] = 0

list3[1][1] = 0
```

请问在以上代码执行完后：

1. `list1` 的值是多少？
2. `list2` 的值是多少？
3. `list3` 的值是多少？

### 答案

1. `list1`  的值是 `[1, [0, 3], 4]`

解释: 对 `list2` 做的更改会影响 `list1` 中的内部列表，因为 `list2` 只是浅拷贝。

2. `list2` 的值是 `[0, [0, 3], 4]`

解释: 修改 `list2` 的第一个元素和第二个元素的内部元素不会影响其他列表。

3. `list3` 的值是 `[1, [2, 0], 4]`

解释: 使用 `deepcopy` 进行的拷贝，所以对 `list3` 的任何更改都不会影响原始列表 `list1`。

## Question 2

### 题目

考虑以下 Python 代码：

```python
import copy

a = [1, 2, [3, 4, [5, 6]], 7]

b = a.copy()
c = copy.deepcopy(a)

b[0] = 0
b[2][1] = 0
b[2][2][0] = 0

c[2][2][1] = 0
c[3] = 0
```

在上述代码执行后：

1. `a` 的值是多少？
2. `b` 的值是多少？
3. `c` 的值是多少？

### 答案

1. `a` 的值是 `[1, 2, [3, 0, [0, 6]], 7]`

解释: 修改 `b` 会导致 `a` 的部分子元素被更改，因为 `b` 是 `a` 的浅拷贝。

2. `b` 的值是 `[0, 2, [3, 0, [0, 6]], 7]`

解释: 对 `b` 的任何直接更改不会影响其他列表，但是对 `b` 中的子列表的更改会影响 `a`。

3. `c` 的值是 `[1, 2, [3, 4, [5, 0]], 0]`

解释: 使用 `deepcopy` 拷贝，所以对 `c` 的任何更改都不会影响原始列表 `a`。

这个问题在深浅拷贝的基础上添加了更多的嵌套层次，以此考察对浅拷贝和深拷贝如何在多级嵌套数据结构中工作的理解。

## Question 3

### 题目

编写一个函数 `modify_lists`，接受一个列表作为参数，然后返回两个列表。一个是这个列表的浅拷贝，并且进行了某些修改；另一个是这个列表的深拷贝，并且也进行了某些修改。函数定义如下：

```python
def modify_lists(lst: list) -> (list, list):
    pass
```

**要求**：

1. 浅拷贝的列表需要做以下更改：
   - 如果列表的第一个元素是数字，则将其乘以2。
   - 如果列表中有子列表，则将子列表的最后一个元素改为字符串"modified"。

2. 深拷贝的列表需要做以下更改：
   - 如果列表的最后一个元素是数字，则将其除以2（结果为浮点数）。
   - 如果列表中有子列表，则将子列表的第一个元素改为字符串"deepcopy"。

例如：

```python
input_list = [1, [2, 3], 4]
shallow, deep = modify_lists(input_list)
```

`shallow` 的值应为 `[2, ["modified", 3], 4]`
`deep` 的值应为 `[1, ["deepcopy", 3], 2.0]`

**注意**：原始 `input_list` 可能会由于浅拷贝而被部分修改。

---

这个题目需要对深浅拷贝的特点有深入的理解，尤其是如何通过修改拷贝来间接或直接修改原始列表。同时，考生需要注意如何识别列表和子列表中的元素类型，并根据这些特点进行适当的修改。

### 答案

```python
import copy

def modify_lists(lst: list) -> (list, list):
    # 创建一个浅拷贝
    shallow_copy = lst.copy()
    
    # 如果列表的第一个元素是数字，则将其乘以2。
    if isinstance(shallow_copy[0], int) or isinstance(shallow_copy[0], float):
        shallow_copy[0] *= 2

    # 如果列表中有子列表，则将子列表的最后一个元素改为字符串"modified"。
    for item in shallow_copy:
        if isinstance(item, list) and item:
            item[-1] = "modified"

    # 创建一个深拷贝
    deep_copy = copy.deepcopy(lst)

    # 如果列表的最后一个元素是数字，则将其除以2。
    if isinstance(deep_copy[-1], int) or isinstance(deep_copy[-1], float):
        deep_copy[-1] /= 2

    # 如果列表中有子列表，则将子列表的第一个元素改为字符串"deepcopy"。
    for item in deep_copy:
        if isinstance(item, list) and item:
            item[0] = "deepcopy"

    return shallow_copy, deep_copy

input_list = [1, [2, 3], 4]
shallow, deep = modify_lists(input_list)

print("Shallow Copy:", shallow)  # 输出: [2, ['modified', 3], 4]
print("Deep Copy:", deep)        # 输出: [1, ['deepcopy', 3], 2.0]
```

## Question 4

Let *lst* be a list of integers. We define `prefix_sum(i)` to be the sum of the first `(i+1)` elements of *lst*. That is: `prefix_sum(i) = lst[0] + lst[1] + ... + lst[i]`.

For example, if `lst = [-1, 1, 4, -2, -3]`,

- `prefix_sum(0) is -1`
- `prefix_sum(1)` is 0, since `(-1) + 1 = 0`
- `prefix_sum(2)` is 4, since `(-1) + 1 + 4 = 4`
- `prefix_sum(3)` is 2,since `(-1)+1+4+(-2)=2`
- `prefix_sum(4)` is -1,since `(-1)+1+4+(-2)+(-3)=-1`

Complete the definition below for the function:

`def positive_prefix_sum(lst)`

This function is given a list of integers, lst. When called, it creates and returns a list with all the indices of which their prefix-sum is positive.

For example, if `lst = [-1, 1, 4, -2, -3]` , calling `positive_prefix_sum(lst)` should return `[2, 3]`.

Notes:

1. Your implementation should all be in the return line.That is, you are not allowed to add lines to this function, define an additional function, etc.
2. You may want to use the build-in sum function.

3. The indices should come in an ascending order.

4. In this question, don’t worry about the runtime of your implementation.

```python
def positive_prefix_sum(lst):
    return 
```

### 答案

```python
def positive_prefix_sum(lst):
    positive_indices = []  # 用来保存前缀和为正的索引

    for i in range(len(lst)):  # 遍历lst的所有索引
        current_prefix_sum = sum(lst[:i+1])  # 计算到索引i为止的前缀和

        if current_prefix_sum > 0:  # 如果前缀和为正
            positive_indices.append(i)  # 将该索引添加到positive_indices列表中

    return positive_indices  # 返回所有前缀和为正的索引
```

```python
def positive_prefix_sum(lst):
    return [i for i in range(len(lst)) if sum(lst[:i+1]) > 0]
```



## Question 5

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

1. If lst is a list of *n* integers,what is the worst case running time of reverse1(lst)? Give a short explanation of your answer.

**Your Answer:**  ( _________ )

If lst is a list of *n* integers,what is the worst case running time of reverse2(lst)? Give a short explanation of your answer.

**Your Answer:**  ( _________ )

### 答案

在 `reverse1` 函数中，每次使用 `insert(0, lst[i])` 方法在列表的首部插入元素。在 Python 的列表中，首部的插入操作需要 O(n) 的时间复杂度，因为它需要移动整个列表的元素。由于对列表的每个元素都执行这一操作，所以这会导致 $O(n^2)$ 的时间复杂度。

**Your Answer:**  $O(n^2)$ 因为在每次迭代中，都在列表的开始位置插入一个元素，这是一个 $O(n)$ 的操作，而这个操作将被执行 n 次。

接下来看 `reverse2` 函数：

在 `reverse2` 函数中，使用 `append` 方法在列表的尾部插入元素。在 Python 的列表中，尾部的插入操作是 $O(1)$ 的平均时间复杂度。对列表的每个元素都执行这一操作，所以整体的时间复杂度是 $O(n)$。

**Your Answer:**  $O(n)$ 因为在每次迭代中，都在列表的末尾添加一个元素，这是一个 $O(1)$ 的操作，而这个操作将被执行 n 次。

## Question 6

::: tabs

@tab EN

Below, you are given a recursive implementation for the function: `def min_in_lst(lst, low, high)`

This function gets the list of integers lst, as well as two indices: low and high (`low ≤ high`), which indicate the range of indices of the elements that should to be considered.

When called, the function would return the **minimum value** out of all of elements in the low, low+1, ..., high positions.

```python
def min_in_lst(lst, low, high):
    if(low == high):
        return lst[low]
    else:
        mid_ind = (low + high) // 2
        min1 = min_in_lst(lst, low, mid_ind)
        min2 = min_in_lst(lst, mid_ind + 1, high)
        if(min1 < min2):
            return min1
        else:
            return min2
```

Assuming lst is a list of *n* elements, analyze the worst case running time of the implementation above:

1) Draw the recursion tree that traces the recursive calls of the function.
2) Conclude the total (asymptotic) running time of the function.

Note: Write your answers in the next page.

i. Draw the **recursion tree** for `min_in_lst(lst, 0, n-1)`

ii. **Conclude the running time** of `min_in_lst(lst, 0, n-1)`

**Your Answer:** Θ( _________ )

Calculations:

@tab ZH

下面给出了一个函数的递归实现：`def min_in_lst(lst, low, high)`

这个函数接收一个整数列表`lst`，以及两个索引：`low`和`high` (`low ≤ high`)，这两个索引表示需要考虑的元素的索引范围。

当调用该函数时，它会返回low, low+1, ..., high位置上的所有元素中的**最小值**。

```python
def min_in_lst(lst, low, high):
    if(low == high):
        return lst[low]
    else:
        mid_ind = (low + high) // 2
        min1 = min_in_lst(lst, low, mid_ind)
        min2 = min_in_lst(lst, mid_ind + 1, high)
        if(min1 < min2):
            return min1
        else:
            return min2
```

假设`lst`是一个包含*n*个元素的列表，分析上述实现的最坏情况运行时间：

1) 绘制追踪函数递归调用的递归树。
2) 得出函数的总的（渐进的）运行时间。

注意：在下一页写下你的答案。

i. 为`min_in_lst(lst, 0, n-1)`绘制**递归树**。

ii. **得出运行时间** `min_in_lst(lst, 0, n-1)`

**你的答案:** $\Theta$( _________ )

计算：

:::





## Question 7

::: tabs

@tab EN

Implement the function: `def remove_all_evens(lst)`

This function gets a list of positive integers, lst. When called, it should remove all the even numbers from lst, and keep only the odd ones.

Note: The relative order of the odd numbers that are left in lst at the end, doesn’t matter.

For example, if `lst = [2, 3, 5, 2, 16, 13]`, after calling `remove_all_evens(lst)`, lst could be the following 3-element list: `[13, 5, 3].`

**Implementation requirements:**

1. Your implementation should bein-place.
2. At the end,your list will contain only the odd numbers.
3. Your function should run in **worst case linear time**.That is,if there are *n*  items in lst, calling `remove_all_evens(lst)` will run in $\theta(n)$.
4. For the memory used, in addition to `lst`, you are allowed to use only $\theta(1)$ memory. That is, for example, you could **not** use an additional non-constant sized list. But, you could have a few variables.

Note: Write your implementation on the next page.

@tab ZH

实现以下函数：`def remove_all_evens(lst)`

此函数接收一个正整数列表 `lst`。当调用此函数时，它应从 `lst` 中移除所有偶数，并仅保留奇数。

注意：最后留在 `lst` 中的奇数的相对顺序不重要。

例如，如果 `lst = [2, 3, 5, 2, 16, 13]`，调用 `remove_all_evens(lst)`后，`lst` 可能会变为以下的3个元素列表：`[13, 5, 3]`。

**实现要求：**

1. 你的实现应该是原地的。
2. 最后，你的列表中应该只包含奇数。
3. 你的函数应在**最坏情况下的线性时间**内运行。也就是说，如果`lst`中有*n*个项目，调用`remove_all_evens(lst)`应在$\theta(n)$时间内运行。
4. 对于使用的内存，除了`lst`外，你只允许使用$\theta(1)$的内存。也就是说，例如，你**不能**使用一个额外的非常量大小的列表。但是，你可以有几个变量。

:::

## Question 8

::: tabs

@tab EN

Give a **recursive** implementation for the function:

```python
def is_sorted(lst, low, high)
```

This function is given a list of numbers, lst, as well as two indices: low and high (low ≤ high), which indicate the range of the indices for the elements that should to be considered.

When called, the function should determine if the elements that are placed at the low, low+1, ..., high positions, are in an (ascending) sorted order. That is, it should return **True** if-and-only-if lst[low] ≤ lst[low+1] ≤ ... ≤ lst[high]

For example, if lst = [1, 3, 6, 8, 12, 15, 31], the call is_sorted(lst, 0, 6), will return **True**.

**Implementation requirements:** 

Your function should run in **worst case linear time**. That is, if *n* is the size of the range low, low+1, ..., high, calling is_sorted(lst, low, high) will run in $\theta(𝑛)$.

Note: Write your implementation on the next page.

```python
def is_sorted(lst, low, high):
```

**EXTRA PAGE IF NEEDED**

Note question numbers of any questions or part of questions that you are answering here.

Also, write “ANSWER IS ON LAST PAGE” near the space provided for the answer.

@tab ZH

为一个函数提供**递归**的实现：

```python
def is_sorted(lst, low, high)
```

该函数接收一个数字列表`lst`，以及两个索引：`low`和`high`（满足 low ≤ high），它们指示应考虑的元素的索引范围。

当调用此函数时，它应确定位于 low, low+1, ..., high 位置的元素是否按照（升序）排序。也就是说，当且仅当 lst[low] ≤ lst[low+1] ≤ ... ≤ lst[high] 时，它应返回 **True**。

例如，如果 lst = [1, 3, 6, 8, 12, 15, 31]，调用 is_sorted(lst, 0, 6) 将返回 **True**。

**实现要求：**

你的函数应在**最坏情况下线性时间**内运行。也就是说，如果 *n* 是范围 low, low+1, ..., high 的大小，调用 is_sorted(lst, low, high) 将在 $(\theta𝑛)$ 时间内运行。

注意：在下一页上编写你的实现。

```python
def is_sorted(lst, low, high):
```

**如有需要，请使用额外的页面**

请在此处注明你正在回答的任何问题或问题的部分编号。

同时，在为答案提供的空间附近写上“答案在最后一页”。

@tab Solution

```python
def is_sorted(lst,low,high):
    if low >= high:
        return True # which means the lst just have negative length or length of 1:
    else:
        return lst[low]<=lst[low+1] and is_sorted(lst,low+1,high)
        #前一段代码的目的是：如果boolean不成立直接return false
        #后一段代码进入递归，但是low指针+1，


lst = [1, 3, 6, 8, 12, 15, 31]
print(is_sorted(lst, 0, 6))  # True
```

为了满足题目中提到的要求，我们可以使用递归的方式逐一检查列表中的元素是否有序。具体地，我们可以查看当前下标`low`的元素和`low+1`的元素，如果`lst[low]`大于`lst[low+1]`，则说明序列不是有序的，直接返回`False`。否则，我们继续递归地调用函数，检查从`low+1`到`high`的子序列。当`low`大于或等于`high`时，我们返回`True`。

以下是具体的实现：

```python
def is_sorted(lst, low, high):
    # 基本情况：当low大于或等于high时，返回True
    if low >= high:
        return True
    # 检查当前下标low的元素和low+1的元素
    if lst[low] > lst[low+1]:
        return False
    # 递归地检查下一个元素
    return is_sorted(lst, low + 1, high)
```

对于这种递归实现，其时间复杂度为$\theta(𝑛)$，其中$n$为`low`到`high`的范围大小。这是因为我们每次只检查一个元素，然后递归地检查下一个元素，直到达到`high`为止。

:::

## Question 9

### 题目：嵌套列表展平

给定一个嵌套的整数列表，请使用递归编写一个函数，将其展平为一个单一的整数列表。

例如：

输入：`[1, [2, 3, [4, 5]], 6, [[7]], [8, 9]]`

输出：`[1, 2, 3, 4, 5, 6, 7, 8, 9]`

**要求**:
- 列表内可以有任意多级的嵌套。
- 保持原始列表的元素顺序不变。
- 不能使用内置的库函数来完成任务。

**提示**:
- 如果当前的元素是整数，你可以直接添加到结果列表中。
- 如果当前的元素是列表，你可以递归处理这个列表。

这题的关键在于判断每一个元素是一个整数还是一个列表，并根据这个信息决定是将其直接添加到结果中，还是继续递归展开。

---

### 答案

```python
def flatten_list(nested_list):
    if not isinstance(nested_list, list):  # 基本情况：如果是一个整数
        return [nested_list]
    
    result = []  # 用于存放结果的列表
    for item in nested_list:  # 遍历嵌套列表的每一个元素
        result.extend(flatten_list(item))  # 递归展开每一个元素，并将结果添加到result中
    return result

# 测试
print(flatten_list([1, [2, 3, [4, 5]], 6, [[7]], [8, 9]]))  # 输出：[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**递归分析**:

1. **递归公式**:
    - 如果当前元素是整数，直接返回这个整数作为列表的一个元素。
    - 如果当前元素是列表，遍历这个列表并对每一个元素递归调用 `flatten_list`，然后将递归调用的结果添加到当前的结果中。

2. **递归边界**:
    - 当传入的 `nested_list` 不是列表时（即是整数时），这就是递归的基本情况，此时应直接返回这个整数作为列表的一个元素。

这个问题的核心思想是分解：如果你有一个元素，你知道如何处理它（无论是整数还是另一个列表）。对于整数，你只需将其添加到结果中。对于列表，你只需遍历它并处理其内容，不断重复这个过程，直到你只剩下整数。



## Question 10

For each of the following, state if it is true or false (circle your choice):

I. $\sqrt{3n^2 + 4n - 5} = \Theta(n)$                                 TRUE / FALSE

II. $\log_2(n^2) = O(\log_2(n))$                                  TRUE / FALSE

III. $\log_2(n) = \Omega(\sqrt{n})$                                           TRUE / FALSE

---

For each of the following, state if it is true or false (circle your choice):

I. $2n^3 + 5n^2 - 3n = \Theta(n^3)$                                TRUE / FALSE

II. $\log_2(3n) = O(\log_2(n))$                                   TRUE / FALSE

III. $n\log_2(n) = \Omega(n)$                                             TRUE / FALSE

请注意，给出的题目是为了练习和考察复杂度分析的理解，并不保证每个等式都是真的或假的。需要通过对复杂度分析的知识进行分析来确定答案。

## Question 11

### 题目

1. **神秘的列表操作**
   
   Alice 有一个由数字和列表组成的嵌套列表 `lst1`。她决定使用以下方式创建 `lst2`：`lst2 = lst1.copy()`  然后，她改变了 `lst1` 中的一个子列表的元素，并且注意到 `lst2` 中的相应元素也发生了变化。请解释为什么会这样，并说明这种拷贝是深拷贝还是浅拷贝。
   
2. **变形的拷贝**

   Bob 想从一个已有的列表 `lst1` 中拷贝其前三个元素，并创建一个新列表 `lst2`。他使用了以下代码： `lst2 = lst1[:3]`  他改变了 `lst2` 中的一个元素的值，但是发现 `lst1` 中的相应元素并没有发生变化。然而，当他尝试修改 `lst2` 中的一个子列表，`lst1` 也发生了变化。请解释为什么会这样，并指出这种切片操作是深拷贝还是浅拷贝。
   
3. **难题中的拷贝**

   Carol 写了以下代码：  
   ```python
   import copy
   lst1 = [1, 2, [3, 4], [5, [6, 7]]]
   lst2 = copy.deepcopy(lst1)
   lst1[2][0] = 8
   lst1[3][1][0] = 9
   ```
   请问 `lst2` 的值是什么？并解释为什么。

### 答案

1. **神秘的列表操作**

   答案：`lst2 = lst1.copy()` 这里使用的是浅拷贝。这意味着，虽然 `lst1` 和 `lst2` 是不同的对象，但它们中的子对象（例如嵌套的列表）仍然指向相同的内存位置。因此，当 Alice 改变了 `lst1` 中的一个子列表的元素时，`lst2` 中的相应元素也会发生变化，因为它们都引用同一个子列表对象。
   
2. **变形的拷贝**

   答案： `lst2 = lst1[:3]` 这里使用的也是浅拷贝。当 Bob 改变了 `lst2` 中的一个元素的值时，因为这个元素是一个基本数据类型（如整数或字符串），所以 `lst1` 中的相应元素不会受到影响。但是，当 Bob 修改 `lst2` 中的一个子列表时，`lst1` 中的对应子列表也会发生变化，因为这两个列表引用的是同一个子列表对象。
   
3. **难题中的拷贝**

   答案： 使用 `copy.deepcopy(lst1)` 进行了深拷贝，这意味着 `lst2` 是 `lst1` 的一个完全独立的副本，包括所有嵌套的子对象。所以，即使 Carol 修改了 `lst1` 中的值，`lst2` 的内容也不会发生任何变化。
   
   因此，`lst2` 的值仍然是 `[1, 2, [3, 4], [5, [6, 7]]]`。

## Question 12

### 题目

1. **自定义深拷贝函数** 

   要求：不使用 `copy` 模块，编写一个函数 `custom_deepcopy`，该函数接受一个可能包含多层嵌套列表的列表，并返回这个列表的一个深拷贝。测试您的函数以确保深拷贝的正确性。

2. **检测列表中的循环引用** 

   有时，列表可能包含循环引用。例如：

   ```python
   lst = [1, 2, 3]
   lst.append(lst)
   ```
   `lst` 现在引用了自身，形成了一个循环引用。编写一个函数 `detect_loop`，检测一个列表是否包含循环引用。如果包含，返回 `True`，否则返回 `False`。

3. **嵌套列表的浅拷贝** 

   考虑以下列表：

   ```python
   nested_lst = [[1, 2, 3], [4, 5, [6, 7]], [8, 9]]
   ```
   编写一个函数 `shallow_copy_nested`，为这样的多层嵌套列表创建一个浅拷贝。注意：您应该返回一个新的外部列表，但其中的嵌套列表应该引用原始列表中的相应嵌套列表。

### 答案

1. **自定义深拷贝函数**

   ```python
   def custom_deepcopy(lst):
       if not isinstance(lst, list):
           return lst
       return [custom_deepcopy(item) for item in lst]

   # 测试
   original = [1, [2, 3], [4, [5, 6]]]
   copied = custom_deepcopy(original)
   print(copied == original)  # True (内容相同)
   print(copied is original)  # False (但它们是不同的对象)
   ```

   该函数递归地处理列表，确保每一层都是一个新的对象。

2. **检测列表中的循环引用**

   ```python
   def detect_loop(lst, seen=None):
       if seen is None:
           seen = set()
       if id(lst) in seen:
           return True
       seen.add(id(lst))
       for item in lst:
           if isinstance(item, list) and detect_loop(item, seen):
               return True
       return False

   # 测试
   lst1 = [1, 2, 3]
   print(detect_loop(lst1))  # False
   lst1.append(lst1)
   print(detect_loop(lst1))  # True
   ```

   该函数使用一个集合 `seen` 来跟踪已检查的列表对象。它通过列表的 id 来查找循环引用。

3. **嵌套列表的浅拷贝**

   ```python
   def shallow_copy_nested(lst):
       return lst[:]
   
   # 测试
   original = [[1, 2, 3], [4, 5, [6, 7]], [8, 9]]
   copied = shallow_copy_nested(original)
   print(copied == original)  # True (内容相同)
   print(copied is original)  # False (外部列表是不同的对象)
   print(copied[1] is original[1])  # True (内部列表是相同的对象)
   ```

   使用切片方法可以为外部列表创建一个浅拷贝。但内部的嵌套列表仍然指向原始列表中的相应嵌套列表。

























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
