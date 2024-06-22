---
title: 01-CISC-235 Data Structures W23「Assignment 1」
icon: python
date: 2023-01-17 00:04:34
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - Python 1v1
    - python数据结构与算法一对一辅导
tag:
    - 1v1
    - Python 1v1
    - python数据结构与算法一对一辅导
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

- [CISC235_W23_A1.pdf](/1v1/20-Frank/CISC235_W23_A1.pdf)

## Assignment 1

January 14, 2023

## General Instructions

> 一般的用法说明

Show your solution steps with your findings to the questions in a pdf file named “235-1234-Assn1.pdf”, where 1234 stands for the last 4 digits of your student ID. If you cannot save your file as pdf, you may save it and submit it as a Word document and name it “235-1234-Assn1.docx”.

> 在一个名为“235-1234-Assn1.pdf”的 pdf 文件中展示你对问题的解决步骤和发现，其中 1234 代表你的学生证的后4位数字。如果您无法将文件另存为pdf格式，您可以将其另存为Word文档并将其命名为" 235-1234-Assn1.docx "。

Write your own program(s) using Python. Once you complete your assign- ment, place all Python files in a zip file and name it according to the same method, i.e., “235-1234-Assn1.zip”. Unzip this file should get all your Python file(s).

> 使用 Python 编写自己的程序。完成作业后，将所有 Python 文件放在一个zip文件中，并按照相同的方法命名，即“235-1234-Assn1.zip”。解压缩这个文件应该会得到所有的 Python 文件。

Then upload 235-1234-Assn1.zip and 235-1234-Assn1.pdf into Assignment 1’s entry on onQ. You may upload several times if you wish. However, onQ keeps only the last uploaded file. The newly uploaded file will overwrite the old file. Please check your files after uploading. We will check the latest submission you made following the required naming.

> 然后上传235-1234-Assn1.zip和235-1234-Assn1.pdf到onQ上Assignment 1的条目中。如果你愿意，你可以上传几次。但是，onQ只保留最后上传的文件。新上传的文件将覆盖旧文件。上传后请检查文件。我们将检查您在要求命名后提交的最新文件。

You must ensure your code is executable and document your code to help TA mark your solution. We suggest you follow PEP81 style to improve the readability of your code.[https://realpython.com/python-pep8/](https://realpython.com/python-pep8/)

> 你必须确保你的代码是可执行的，并记录你的代码，以帮助TA标记你的解决方案。我们建议您遵循PEP81风格来提高代码的可读性。[https://realpython.com/python-pep8/](https://realpython.com/python-pep8/)

All data structures involved must be implemented by yourself, except for the built-in data types, i.e., List in Python.

> 所有涉及的数据结构必须由自己实现，除了内置的数据类型，如 Python 中的 List。

An “I uploaded the wrong file” excuse will result in a mark of zero.

> 一个“我上传了错误的文件”的借口会导致零分。

## 1 Algorithm Complexity Analysis (20 points)

> 1算法复杂度分析(20分)

### 1.1 Count the Number of Operations (10 points)

> 1.1计算操作次数(10分)

Analyze the time complexity of the program shown in Figure 1, briefly describe how you calculate the number of operations and provide the final program com- plexity function.

> 分析图1所示程序的时间复杂度，简要描述如何计算运算次数，并提供最终的程序复杂度函数。

```python
def function(seq):
    d = 0
    n = len(seq)
    for i in range(n - 1):
        for j in range(i + 1, n):
            d += seq[i] * seq(j)
    return d
```

Figure 1: Python Function for Question 1.1

> 图1:1.1问题的 Python 函数



### 1.2 Big-Θ Proof (10 points)

Use the definition of big-Θ to prove that the following operation function T(n)∈ Θ(n4).

> 利用大-Θ的定义来证明下面的运算函数T(n)∈Θ(n4)。

::: center

T(n)=$n^{4} − 10n^{2} + 50$

:::

## 2 Binary Search or Linear Search? 50 points

> 二叉搜索还是线性搜索? 50 分

Let us analyze the time complexity of two algorithms, i.e., linear search and binary search, using the experimental method.

> 我们用实验方法分析线性搜索和二分搜索两种算法的时间复杂度。

Our goal is to compare linear and binary search efficiency for a general search scenario, i.e., search a list of integers from another list of integers. We can implement the search using a function search(list target, list source) - it searches each of the integers in list target in another list named list source. For instance, search([1,3], [1,5,6]) means searching for 1 in [1,5,6] and searching for 3 in [1,5,6]. If the length of list target equals 1, it means searching for one integer in a list.

> 我们的目标是比较一般搜索场景下的线性和二进制搜索效率，即从另一个整数列表中搜索一个整数列表。我们可以使用函数搜索(list target, list source)来实现搜索——它在另一个名为list source的列表中搜索list target中的每个整数。例如，search([1,3]，[1,5,6])表示在[1,5,6]中搜索1，在[1,5,6]中搜索3。如果list target的长度等于1，则意味着在列表中搜索一个整数。

We know that when using linear search, searching for a value from n values will require an average of n/2 comparisons, while in the worst case, searching for a value that is not in the list will require n comparisons. Searching for any value will require an average of logn comparisons when using binary search. However, before applying binary search, you should sort the list source once and then perform several searches, and sorting the list will take O(nlogn) time.

> 我们知道，当使用线性搜索时，从n个值中搜索一个值将需要平均n/2次比较，而在最坏的情况下，搜索一个不在列表中的值将需要n次比较。在使用二分搜索时，搜索任何值都需要logn个比较的平均值。但是，在应用二进制搜索之前，您应该对列表源进行一次排序，然后执行几次搜索，对列表进行排序将花费O(nlogn)时间。

If we are doing a very small number of searches, linear search is preferable. However, if we are doing many searches of the same list, binary search is prefer- able since the time required to sort the list once is more than offset by the reduced time for the searches. This is what complexity theory tells us.

> 如果我们做的搜索量很小，线性搜索是更好的选择。然而，如果我们对同一个列表进行多次搜索，二进制搜索是更可取的，因为对列表进行一次排序所需的时间超过了搜索减少的时间。这就是复杂性理论告诉我们的。

Your task is to conduct experiments to explore the relationship between the size of the list and the number of searches required to make binary search preferable to linear search. See the detailed requirement below:

> 您的任务是进行实验，以探索列表的大小和所需的搜索次数之间的关系，从而使二进制搜索优于线性搜索。具体要求如下:

1) Implement two algorithms for the general search scenario using Python. You must write your own code for binary search and linear search. For the sorting algorithm, you may choose any sorting algorithm that has complexity in O(nlogn). If your sorting code is modified from an online resource, you need to add a reference in the comment.

> 使用Python为一般搜索场景实现两种算法。您必须为二进制搜索和线性搜索编写自己的代码。对于排序算法，可以选择复杂度为O(nlogn)的任意排序算法。如果您的排序代码是从在线资源中修改的，则需要在注释中添加引用。

2. For n = 100, 1000, and 10,000, conduct the following experiment:

- Use Python library random to create a list named list source containing n integers, with seed = 12345. You can call “random.seed(12345)” to control the seed value. We use the seed to make sure the TA can reproduce your results.

> 对于n = 100、1000和10,000，进行以下实验:
> -使用Python库random创建一个名为list source的列表，包含n个整数，其中seed = 12345。你可以调用" random.seed(12345) "来控制种子值。我们使用种子，以确保助教可以重现你的结果。

- Choose k target values to form list target, make sure 50% of the values in list target are in list source and the rest 50% are not in list source. You can round the number up if 50% * k does not result in a integer.

> 选择k个目标值组成列表目标，确保列表目标中50%的值在列表源中，其余50%不在列表源中。如果50% * k没有得到整数，则可以将数字四舍五入。

- Use binary search and linear search separately to search list target in list source. Note, when recording the time for the binary search algorithm, you must include the time for sorting the list source once.

> 分别使用二分搜索和线性搜索在列表源中搜索列表目标。注意，在记录二进制搜索算法的时间时，必须包括对列表源排序一次的时间。

- Design and conduct experiments to determine the approximate small- est value of k for which binary search becomes faster than linear search. This means you should try different k values, starting from a small one, and increase it until you observe that the binary search method is faster than the linear search method.

> 设计并进行实验来确定k的近似最小值，使二分搜索比线性搜索更快。这意味着您应该尝试不同的k值，从一个小的k值开始，然后增加k值，直到您观察到二分搜索方法比线性搜索方法快。

- Provide a short description in your written report (the pdf file) on how you generate the list source and list target, how you determine the smallest value of k, and what is the smallest value of k you find.

> 在你的书面报告(pdf文件)中提供一个简短的描述，说明你如何生成列表源和列表目标，你如何确定k的最小值，以及你找到的k的最小值是多少。

Hint: When generating the list source, you can use random.sample(range(0, m), n) to generate n random values in the range of 0 to m. When generating list target, you can randomly pick 50% of the k values from the list source, and then randomly generate the rest values in a range that does not overlap with 0 to m. For instance, you can generate integers larger than m or smaller than 0. There could be other methods as well. You do not need to follow this hint.

> 提示:在生成列表源时，可以使用random。sample(range(0, m)， n)生成0到m范围内的n个随机值。在生成列表目标时，可以从列表源中随机选取k个值的50%，然后在不与0到m重叠的范围内随机生成其余的值。例如，可以生成大于m或小于0的整数。也可能有其他方法。你不需要遵循这个提示。

## 3 Develop a Special Bot Leveraging Stack: 30 points

Let us implement a special bot using a Stack data structure. This bot holds an empty sequence of data named data items when initialized. It then reads a list of string operations as input and performs the corresponding manipulation on`_data` items.

> 让我们使用Stack数据结构实现一个特殊的机器人。这个机器人在初始化时持有一个名为数据项的空数据序列。然后读取字符串操作列表作为输入，并对其执行相应的操作
> 数据项。

The i-th item in the input list represents one operation that the bot needs to perform. The types of the operations are the follows:

> 输入列表中的第i项表示机器人需要执行的一个操作。操作类型如下:

1. “A”: add a new integer to data items that is the sum of the previous two integer values in data items

> A:在数据项中增加一个新的整数，为数据项中前两个整数值的和

2. ”T”: add a new integer to data items that is the triple of the previous integer value in data items.

> 2。”T”:在数据项中增加一个新的整数，该整数是数据项中上一个整数值的三倍。

3. ”D”: Delete the previous integer value from data items.

> D:删除数据项中先前的整数值。

4. An integer: Add the integer to data items.

> 4. 整数:在数据项中添加整数。

Your goal is to implement a Stack and use it to implement the special bot described above. The bot should have a function that takes a valid list of strings asinputandreturnthesequenceofintegersthatthebotcollectedin dataitems. Write your own test case to demo how your algorithm works. For simplicity, you can assume that the input list is always valid. However, we encourage you to think about how to handle invalid cases.

> 您的目标是实现一个Stack，并使用它来实现上面描述的特殊机器人。机器人应该有一个函数，该函数以一个有效的字符串列表作为输入，并将机器人在数据项中收集到的fintegers依次转换。编写您自己的测试用例来演示您的算法是如何工作的。为简单起见，可以假设输入列表总是有效的。但是，我们鼓励您考虑如何处理无效案例。

Hint: I can give you one test case. Input: operations = [“10”,“3”,“D”, “T”,“A”], your bot should output [10, 30, 40]. data items could be a Stack.

> 提示:我可以给您一个测试用例。输入:operations = [" 10 "， " 3 "， " D "， " T "， " A "]，你的bot应该输出[10,30,40]。数据项可以是一个堆栈。



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
