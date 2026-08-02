---
title: 「Australian National University」Lab 6：Lists (advanced) and tuples. Data analysis. 
icon: blog
date: 2025-09-17 09:11:49
author: AI悦创
isOriginal: true
category: 
    - Python一对一答疑帖
    - 留学生Python辅导
    - Australian National University一对一辅导
tag:
    - Python一对一答疑帖
    - 留学生Python辅导
    - Australian National University一对一辅导
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

## 1. Introduction

The purpose of this week's lab is to:

- Review Python's built-in sequence types: lists and tuples.
- Contrast a reference to an object with a copy of an object, in the context of lists.
- Write our first data analysis programs operating on CSV data files with the help of list comprehensions. 

> If you do not have time to finish all exercises (in particular, the programming problems) during the lab time, you can continue working on them later.

> If you have any questions about or difficulties with any of the material covered in the course so far, ask your tutor for help during the lab.

## 2. Warm-up exercise: Lists are mutable BUT strings are not

Operations on python's built-in sequence types are summarised in [this section of the python library reference](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range). You may want to revisit [Lab 5](https://edstem.org/au/courses/17427/lessons/59826/) to remind yourself of how indexing and slicing work on sequences, as well as the operations available on sequences.

Because lists are mutable but strings are not, you can assign a new element to an index in the list, or a list to a slice of the list, but you **cannot** do this with strings. Try the following on a python interpreter to convince yourself this is the case:

```python
In [1]: a_str = "acd"

In [2]: a_str[1]
Out [2]: ...

In [3]: a_str[1] = 'b'

In [4]: a_str
Out [4]: ...

In [5]: a_list = [1,3,2,4]

In [6]: a_list[1] = 2

In [7]: a_list
Out [7]: ...

In [8]: a_list[2:4] = [5,7]

In [9]: a_list
Out [9]: ...
```



## 3. Mutable objects and references

In python, every value computed by the interpreter is an **object**. An object in python has:

- An identity: This is a number assigned by the python interpreter when an object is created. You can access this number using the `id` function. Examining the identity of an object is typically not useful in the programs you write, but it will sometimes help you to understand what is happening.
- Some attributes: This is information about the object. An attribute that every object has is a **type**, which tells us (and the python interpreter) what kind of object it is. Other attributes tell us something about the "content" of the object (for example, if the object is of type `int`, that is, an integer, what integer it is).

When we assign a value to variable, the variable name is associated with a **reference** to the object; that is, essentially, the object's identity. Several variables can refer to the same object.

A **mutable** object is one that can be modified. This means that we can change the object's attributes. The object's identity remains unchanged.

> Downey's book describes mutable objects (specifically, lists) and aliasing (multiple names referring to the same object) in Chapter 10.

## 4. Exercise 1: Mutable objects and references (I)

The following code attempts to construct a table containing the first three rows of the [periodic table](https://en.wikipedia.org/wiki/Periodic_table). Run the following commands in the python shell:

```python
In [1]: row1=["H","He"]
In [2]: row2=["Li","Be","B","C","N","O","F","Ar"]
In [3]: row3=["Na","Mg","Al","Si","P","S","Cl","Ne"]
In [4]: ptable=row1
In [5]: ptable.extend(row2)
In [6]: ptable.extend(row3)
```

- What is the value of `ptable` now?
- What is the value of `row1` now? Is this what you expected?
- Correct the error in `row2` ("Ar" should be "Ne") by executing a command of the form `row2[?] = ?`. (The question mark means it is for you to figure out what is the right index to change. You should **not** write a literal `?`) What happens to `ptable` as a result of this assignment?
- Correct the error in `row3` ("Ne" should be "Ar") by executing a command of the form `ptable[?] = ?`. What happens to `row3` as a result of this assignment?

Give the above a try yourself first.

After that, [try stepping through and visualising the example using the on-line tool pythontutor.com here](https://pythontutor.com/python-debugger.html#code=row1%3D["H","He"] row2%3D["Li","Be","B","C","N","O","F","Ar"] row3%3D["Na","Mg","Al","Si","P","S","Cl","Ne"] ptable%3Drow1 ptable.extend(row2) ptable.extend(row3)&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=3&rawInputLstJSON=[]&textReferences=false). We have already copied the code in and set the right settings for you in the link above. Just click the "Visualize Execution" button to start. See if what is happening matches what you expected to happen.

To help explain what is happening, you can also use the `id` function to see the identities of the objects referenced by each of the variables:

```python
In [7]: id(row1)
Out [7]: ...
In [8]: id(row2)
Out [8]: ...
In [9]: id(row3)
Out [9]: ...
In [10]: id(ptable)
Out [10]: ...
```

You should find that `row1` and `ptable` both reference the same object (a list), but that the contents of `row2` and `row3` were copied into `ptable`.

## 5. Exercise 2: Mutable objects and references (II)

Now execute the following commands (make sure you redefine the rows):

```python
In [1]: row1 = ["H","He"]
In [2]: row2 = ["Li","Be","B","C","N","O","F","Ar"]
In [3]: row3 = ["Na","Mg","Al","Si","P","S","Cl","Ne"]
In [4]: ptable = [row1]
In [5]: ptable.append(row2)
In [6]: ptable.append(row3)
```

- What is the value of `ptable` now? How does this differ from what you had in Exercise 1?
- What is the value of `row1` now? How does it differ from what you had in Exercise 1?
- To get the first element of the first row from `ptable`, you would use the expression `ptable[0][0]`. Write the expressions to get the sixth element from the second row ("O") and the second element from the third row ("Mg"). Use only the `ptable` variable, not `row2` or `row3`.
- Correct the error in row 2 ("Ar" should be "Ne") by executing a command of the form `row2[?] = ?`. Does this also change `ptable`?
- Correct the error in row 3 ("Ne" should be "Ar") by executing a command of the form `ptable[?][?] = ?`. Does this change `row3`? And `ptable`?

Again, you can use the `id` function to see the identities of the objects involved (try both `id(ptable)` and `id(ptable[0])`). You should find that each element in `ptable` is a reference to one of the row lists.

Again, if you want to visualise what is going on, try [pythontutor.com](http://pythontutor.com/). Copy the code you want to test into the text box and click the "Visualize Execution" button. Remember to make sure you have selected "Python 3" in the menu above where you enter the code.

## 6. Exercise 3: Shallow and deep copies (I)

In Exercise 1, you assigned `ptable` the list referenced by `row1` via the statement `ptable = row1`. Subsequent operations showed that `ptable` and `row1` referenced the same object (list). How do we actually make a copy of a list?

Execute the following commands:

```python
In [1]: row2=['Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ar']
In [2]: ptable1=["H","Xe",row2]
In [3]: ptable2=ptable1[:]
```

- Is `ptable1` a list, a list of lists or a mix of both? (Print it out!)
- Correct element "Xe" in `ptable2` to be "He". Is the change propagated to `ptable1`?
- Correct element "Ar" in `ptable2` to be "Ne". Is the change propagated to `ptable1` and to `row2`?

You should find that after executing `ptable2=ptable1[:]` `ptable2` is a copy of `ptable1` (not having the same `id`) but the third element is a reference to `row2`. The effect of adding `[:]` to the `ptable2=ptable1` assignment is to create a so-called **shallow copy** of `ptable1`.

Unclear? Visualize the code in [pythontutor.com](http://pythontutor.com/), or ask your tutor for help.

## 7. Exercise 4: Shallow and deep copies (II)

Execute the following commands

```python
In [1]: row2=['Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ar']
In [2]: ptable1=["H","Xe",row2]
In [3]: import copy
In [4]: ptable2=copy.deepcopy(ptable1)
```

- Now correct the "Ar" to "Ne" by assigning the right element of `ptable2`. Inspect to see whether the elements of `ptable1` or `row2` have changed. (You should find no changes.)

> Think carefully before using `deepcopy`: it is much slower and consumes more memory than shallow copy; it may also cause problems with circular references (such as list containing a reference to itself). Any problems with shared references can always be avoided by thinking more carefully about how you have structured your code.



## 8. Exercise 5: Sequence type: tuples

Python has another built-in sequence type, called a `tuple`. Like a list, tuples can contain any type of value, including a mix of value types. The difference between type `list` and type `tuple` is that tuples are **immutable**.

To create a tuple, you only need to write its elements separated by commas:

```python
In [1]: aseq = 1,2,3,4

In [2]: type(aseq)
Out [2]: ...
```

It is common practice to write a tuple in parentheses, like this:

```python
In [1]: aseq = (1,2,3,4)

In [2]: type(aseq)
Out [2]: ...
```

and the python interpreter will usually print tuples enclosed in parentheses. However, it is the comma that creates the tuple, not the parentheses! To see this, try the following:

```python
In [1]: x = (1)

In [2]: type(x)
Out [2]: ...

In [3]: x = 1,

In [4]: type(x)
Out [4]: ...
```

There is one exception: To create an empty tuple (a tuple with length zero), you have to put a comma between nothing and nothing! Typing `x = ,` does not work. Instead, use an empty pair of parentheses to create an empty tuple, like this: `x = ()`.

## 9. Exercise 6: Practice with tuples

Retry the tests you did in [Exercise 2 in Lab 5](https://edstem.org/au/courses/17427/lessons/59826/slides/407652) with tuple values (instead of lists):

```python
In [1]: aseq = (1,2,3,4)

In [2]: bseq = 1,3,2,4

In [3]: type(aseq)        # 1. what type of sequence is this?
Out [3]: ...
                          # 2 - 9 as before.
```

Also try assigning to an element and to a slice of the tuple, as in Exercise 0: this should give you an error, because the tuple type is immutable.

## 10. Exercise 7: Debugging (optional)

Just like strings, the `list` data type has several useful methods. For example, read `help(list.append)`, `help(list.insert)` and `help(list.extend)` to see the documentation of some of the methods that modify lists. Modifying methods and operations for mutable sequence types (i.e., list) are summarised in [this section of the python documentation](https://docs.python.org/3/library/stdtypes.html#mutable-sequence-types).

On the right, the are two attempts to write a function, `make_list_of_lists`. This function creates a list of `n` lists of increasing ranges of integers. The first entry in the returned list should be an empty list, the second a list of length one, ending with the number 1, and so on. For example, `make_list_of_lists(3)` should return `[ [], [1], [1, 2] ]`. (Note that `n` must be a non-negative integer.) However, both functions are incorrect. Locate the error in each function, explain why it goes wrong and fix it.

```python
# The function below does not work as 
# intended. Find the error and fix it.
def make_list_of_lists_attempt1(n):
	the_list = []
	sublist = []
	while n > 0:
		the_list.append(sublist)
		sublist.append(len(sublist) + 1)
		n = n - 1
	return the_list

# The function below does not work as 
# intended. Find the error and fix it.
def make_list_of_lists_attempt2(n):
	the_list = []
	sublist = []
	for i in range(n):
		the_list.extend(sublist)
		sublist = sublist.insert(len(sublist), i)
	return the_list
```

### 10.1 Solution 

```python
# The function below does not work as 
# intended. Find the error and fix it.
def make_list_of_lists_attempt1(n):
	the_list = []
	sublist = []
	while n > 0:
		the_list.append(sublist.copy())
		sublist.append(len(sublist) + 1)
		n = n - 1
	return the_list

# The function below does not work as 
# intended. Find the error and fix it.
def make_list_of_lists_attempt2(n):
	the_list = []
	sublist = []
	for i in range(n):
		the_list.append(sublist.copy())
        sublist.append(i + 1)
	return the_list
```





## 11. Data analysis with CSV files and list comprehensions

Data analysis problems will typically require you to:

- read data from one or more files;
- organise the data into a table and convert it to the correct type; and
- deal with entries in the table where some data is missing.

Ways to do these steps were covered in the lecture of week 6. Below is a quick recap.

### 11.1 CSV files

The file format we will be using in the lab is *Comma-Separated Values*, or CSV, files. To read in a CSV file, the following steps suffice:

```python
import csv
with open("filename.csv") as csvfile:
    reader = csv.reader(csvfile)
    table = [ row for row in reader ]
```

After this piece of code is executed, the variable `table` is a list of lists, with one entry per row in the file. Two things to remember are:

- After reading the file, all entries in all rows will be strings.
- If the file contains a header (that is, the entries in the first row are the names or descriptions of the columns rather than values), the first row in `table` will contain this header. You can use, e.g., list slicing to get a table without the header.

### 11.2 List comprehensions

List comprehensions are a mechanism in python that allows you to create new lists from a sequence in a very convenient way.

In this lab, you can use list comprehensions to

- Convert selected entries in all rows to a type other than string (such as a number).
- Extract a single column from the table as a list.
- Select only rows from the table (or entries from a column) that satisfy some criterion, for example not having any blank fields.

For example, the expression

```python
col3 = [ row[3] for row in table ]
```

creates a list with the entries in column 3 (i.e., the fourth column, since columns are also zero-indexed in this representation), and the expression

```python
table_non_empty_col3 = [ row for row in table if row[3] != '' ]
```

creates a new table containing only the rows in `table` that have a non-empty value in column 3.

The built-in `range` function creates an iterable collection of integers, which can be very useful together with list comprehension (and also `for` loops). For example,

```python
ind_non_empty_col3 = [ i for i in range(len(table)) if table[i][3] != '' ]
```

creates a list of the **indices** of rows in `table` that have a non-empty value in column 3.

The `range` function can take both a start and stop value. For example,

```python
years = range(2008, 2022)
```

creates a range of the integers from 2008 to 2021 (note that the range is up to, but not including, the stop value). For more details, read the documentation with `help(range)`.

The selection condition used in a list comprehension can be any expression that evaluates to a truth value. For example, if you have written a function `is_prime(n)` that returns `True` if the number `n` is a prime number, then you can create a list of all the prime numbers between 1 and 100 with the expression

```python
list_of_primes = [ i for i in range(1,101) if is_prime(i) ]
```

The expression that creates the values in the new list can also be of any kind (as long as it is an expression). For example,

```python
[ [ row[0], row[1], float(row[2]), int(row[3]) ] for row in table ]
```

creates a new table where all entries in column 2 have been converted to floating point numbers and all entries in column 3 have been converted to integers, while columns 0 and 1 have been left as they are (strings). Remember that trying to convert an empty string into a number (`int` or `float`) will cause a runtime error. One way to solve this is to filter out rows with empty entries first (as shown above) and then convert those that remain. However, you can also use a function that you have defined. For example,

```python
[ my_fun(row[3]) for row in table ]
```

returns a list with the result of applying `my_fun` to every entry in column 3, where `my_fun` can be any function (of one argument).

## 12. Programming problems

In the rest of the lab, you will have to solve four more advanced programming problems. We don't expect everyone to finish all these problems during the lab time. If you do not have time to finish them in the lab, you should continue working on them later.

### 12.1 Programming problem 1: Pop and slice

The list method `pop(position)` removes the element in the given position from the list (read `help(list.pop)` or [the on-line documentation](https://docs.python.org/3/library/stdtypes.html#mutable-sequence-types)).

**Task 1.** Write a function `allbut(a_list, index)`, which takes as arguments a list and an index, and returns a **new list** with all elements of the argument list (in the order they were) except for the element at `index`. The argument list should **not be modified** by the function.

Example:

```python
In [1]: my_list = [1,2,3,4]
In [2]: my_short_list = allbut(my_list, 2)
In [3]: print(my_short_list) 
[1, 2, 4]
In [4]: print(my_list) 
[1, 2, 3, 4]
```

**Task 2.** A slice expression, `a_list[start:end]`, returns a new list with the elements from `start` to `end - 1` of the list. Write a function `slice_in_place(a_list, start, end)`, which takes as arguments a list and two non-negative indices, and modifies the argument list so that it is equal to the result of the slice expression `a_list[start:end]`. The function should **not** return any value.

Example:

```python
In [1]: my_list = [1, 2, 3, 4]
In [2]: slice_in_place(my_list, 1, 3)
In [3]: print(my_list) 
[2, 3]
```

You may want to address, as an optional take-home exercise (that won't be tested/assessed), how to modify your `slice_in_place` function such that it is able to work with both positive and negative indices (like slicing does).

```python
def allbut(a_list, index):
    #TODO: implement this function
    pass

def slice_in_place(a_list, start, end):
    # TODO: implement this function
    pass
```

#### 12.1.1 Solution

```python
def allbut(a_list, index):
    n = len(a_list)
    # 规范化负索引
    if index < 0:
        index += n
    if index < 0 or index >= n:
        raise IndexError("list index out of range")
    return a_list[:index] + a_list[index+1:]

def slice_in_place(a_list, start, end):
    a_list[:] = a_list[start:end]
```





### 12.2 Programming problem 2: List shuffle

Sorting a list puts the elements in order; shuffling it puts them in (more or less) disorder. The python module `random` implements a function called `shuffle` which randomly shuffles a list. Here, we will look at a deterministic (non-random) shuffle of a list. A "perfect shuffle" ([also known by many other names](https://en.wikipedia.org/wiki/Faro_shuffle)) cuts the list in two parts, as evenly sized as possible, then interleaves the elements of the two parts to form the shuffled list.

**Task 1.** Write a function `perfect_shuffle(a_list)` which takes as argument a list and returns the perfect shuffle of the list. The function should **not** modify the argument list.

Example:

```python
In [1]: my_list = [1, 2, 3, 4, 5, 6]
In [2]: my_shuffled_list = perfect_shuffle(my_list)
In [3]: print(my_shuffled_list) 
[1, 4, 2, 5, 3, 6]
In [4]: print(my_list) 
[1, 2, 3, 4, 5, 6]
```

**Task 2.**  Write a function `perfect_shuffle_in_place(a_list)` which takes as argument a list and performs the perfect shuffle on the list. The function should modify the list, and **not** return any value. After the function call, the argument list should have the same length and contain the same elements; only the order of them should change.

Example:

```python
In [1]: my_list = [1, 2, 3, 4, 5, 6]
In [2]: perfect_shuffle_in_place(my_list)
In [3]: print(my_list)
[1, 4, 2, 5, 3, 6]
```

**Task 3.** Write a function `count_perfect_shuffle_in_place(a_list)` that repeatedly shuffles a list using the function developed in Task 2 and counts how many shuffles are done before the list becomes equal to the original list.

```python
def perfect_shuffle(a_list):
   #TODO: implement this function
   pass

def perfect_shuffle_in_place(a_list):
   #TODO: implement this function
   pass

def count_shuffles(a_list):
   #TODO: implement this function
   pass
```

#### 12.2.1 Solution

```python
def perfect_shuffle(a_list):
    n = len(a_list)
    mid = (n + 1) // 2  # 前半多一个（当 n 为奇数）
    left = a_list[:mid]
    right = a_list[mid:]
    out = []
    for i in range(max(len(left), len(right))):
        if i < len(left):
            out.append(left[i])
        if i < len(right):
            out.append(right[i])
    return out

def perfect_shuffle_in_place(a_list):
    a_list[:] = perfect_shuffle(a_list)

def count_shuffles(a_list):
    original = a_list[:]
    count = 0
    while True:
        perfect_shuffle_in_place(a_list)
        count += 1
        if a_list == original:
            return count
```



### 12.3 Programming problem 3: Nested lists

A list that contains lists is sometimes called **nested**. We define the **nesting depth** of a list as follows:

- A list that does not contain any list has a nesting depth of zero
- A list that contains lists has a nesting depth equal to the maximum nesting depth of the lists it contains, plus one.

Note that "a list that contains lists" can also contain values that are not lists.

For example, the nesting depth of `[[1,2], [2,4]]` is 1, while the nesting depth of `[1, [2], [[3], [[4], 5]]]` is 3.

**Write a function that takes as argument a list and returns its nesting depth.**

What does your function return when called with the list `[[[]]]`? (and is that what it should return?)

> Hint: you can check whether a value is a list (or another type) with `isinstance(value, list)` .
>
> Hint: this question is well suited to a recursive solution - where a function calls itself to find the solution to a problem. i.e., how would you find the maximum nesting depth of an inner list?

```python
def nesting_depth(a_list):
    #TODO: implement this function
    pass
```

#### 12.3.1 Solution

```python
def nesting_depth(a_list):
    if not isinstance(a_list, list):
        raise TypeError("argument must be a list")

    max_child = -1  # 若没有子列表则保持 -1，最后返回 0
    for x in a_list:
        if isinstance(x, list):
            max_child = max(max_child, nesting_depth(x))
    return 0 if max_child < 0 else max_child + 1
```

### 12.4 Solution

```python
from typing import List, Any

# ------------- 12.1 Programming problem 1: Pop and slice -------------

def allbut(a_list: List[Any], index: int) -> List[Any]:
    """
    返回一个新列表，包含 a_list 中除 index 位置以外的所有元素。
    - 不修改 a_list 本身
    - 支持负索引（与 Python 列表索引一致）
    - 若索引越界，抛出 IndexError（与 list.pop 一致）
    """
    n = len(a_list)
    # 规范化负索引
    if index < 0:
        index += n
    if index < 0 or index >= n:
        raise IndexError("list index out of range")
    # 切片拼接生成新列表
    return a_list[:index] + a_list[index+1:]


def slice_in_place(a_list: List[Any], start: int, end: int) -> None:
    """
    将 a_list 就地修改为切片 a_list[start:end] 的结果（不返回）。
    - 题面要求 start/end 为非负；此实现也与切片一致地“自动夹取”越界：
      start > len -> 变为空，end > len -> 视为 len
    - 支持 start > end（结果为空），与切片语义一致
    """
    a_list[:] = a_list[start:end]


# 示例
# my_list = [1, 2, 3, 4]
# print(allbut(my_list, 2))  # [1, 2, 4]
# print(my_list)             # [1, 2, 3, 4]
# slice_in_place(my_list, 1, 3)
# print(my_list)             # [2, 3]


# ------------- 12.2 Programming problem 2: List shuffle -------------

def perfect_shuffle(a_list: List[Any]) -> List[Any]:
    """
    返回列表的 perfect shuffle（不修改实参）：
    - 将列表尽可能平均切成两半 L、R，其中 L 取前半（长度为 ceil(n/2)）
    - 交错为 L0, R0, L1, R1, ...
    例： [1,2,3,4,5,6] -> [1,4,2,5,3,6]
        [1,2,3,4,5]   -> [1,4,2,5,3]
    """
    n = len(a_list)
    mid = (n + 1) // 2  # 前半多一个（当 n 为奇数）
    left = a_list[:mid]
    right = a_list[mid:]
    out = []
    # 交错拼接
    for i in range(max(len(left), len(right))):
        if i < len(left):
            out.append(left[i])
        if i < len(right):
            out.append(right[i])
    return out


def perfect_shuffle_in_place(a_list: List[Any]) -> None:
    """
    就地对 a_list 做 perfect shuffle（不返回）。
    允许使用中间拷贝，但通过切片赋值保证“就地修改”的效果。
    """
    a_list[:] = perfect_shuffle(a_list)


def count_shuffles(a_list: List[Any]) -> int:
    """
    反复对列表做 perfect shuffle（就地），
    直到列表回到最初状态，返回所需的 shuffle 次数。
    注意：该函数会修改传入列表的顺序。
    对于长度 0 或 1 的列表，结果为 1（一次洗牌即回到原样）。
    """
    original = a_list[:]          # 记录初态
    count = 0
    while True:
        perfect_shuffle_in_place(a_list)
        count += 1
        if a_list == original:
            return count


# 示例
# my_list = [1, 2, 3, 4, 5, 6]
# print(perfect_shuffle(my_list))   # [1, 4, 2, 5, 3, 6]
# perfect_shuffle_in_place(my_list)
# print(my_list)                    # [1, 4, 2, 5, 3, 6]
# print(count_shuffles(my_list))    # 对长度 6 的列表通常为 4


# ------------- 12.3 Programming problem 3: Nested lists -------------

def nesting_depth(a_list: List[Any]) -> int:
    """
    返回列表的嵌套深度（递归定义）：
    - 不含任何列表 -> 深度 0
    - 含有列表    -> max(子列表深度) + 1
    """
    # 若自身不是列表（题面假定参数为列表，这里给出健壮性处理）
    if not isinstance(a_list, list):
        raise TypeError("argument must be a list")

    max_child = -1  # 若没有子列表则保持 -1，最后返回 0
    for x in a_list:
        if isinstance(x, list):
            max_child = max(max_child, nesting_depth(x))
    return 0 if max_child < 0 else max_child + 1


# 示例与边界说明：
# print(nesting_depth([[1,2], [2,4]]))                 # 1
# print(nesting_depth([1, [2], [[3], [[4], 5]]]))      # 3
# print(nesting_depth([]))                              # 0
# print(nesting_depth([[[]]]))                          # 2
# 解释：最内层 [] 深度 0；其外层 [ [] ] 深度 1；再外一层 [[[]]] 深度 2 ——这正是应有结果。

```







::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)