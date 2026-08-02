---
title: COMP1730-6730-S2/2025-Ed-Lessons
icon: blog
date: 2026-02-10 22:48:55
author: AI悦创
isOriginal: true
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

## 1. Mid-term test information

The mid-term test in week 6 has the maximum mark is 20 and a **hurdle of 7.** That means, you need to obtain a mark of at least 7 to continue the course. **If you didn't achieve 7, you should withdraw from the course before the** **census date 31/8**, so that you don't have to pay the fee. We will of course notify your mark by Friday of week 6 at the latest. 

### Time

The mid-term test will take place at your same lab time in week 6 (25-29/8). 

### Location

The labs in Hanna Neumann building will stay in the same venue. But those labs in CSIT building may have different venues but will still be in the same CSIT area (the difference will be highlighted in bold):

- Mon 13-15, 25/8: N112_CSIT 
- Mon 15-17, 25/8: N111_CSIT
- Tue 11-13, 26/8: **N115/116** (instead of N111_CSIT)
- Tue 13-15, 26/8: **N115/116** (instead of N111_CSIT)
- Wed 9-11, 27/8: **N115/116** (instead of N112_CSIT)
- Wed 10-12, 27/8: **N109 and N114_CSIT**
- Wed 14-16, 27/8: **N109 and N113_CSIT**
- Wed 15-17, 27/8: 1.23_Hanna
- Thu 11-13, 28/8: 1.23_Hanna
- Thu 16-18, 28/8: **N115/116** (instead of N112_CSIT)
- Fri 11-13, 29/8: 1.24_Hanna

### Further information

Please read this [Ed discussion post](https://edstem.org/au/courses/25182/discussion/2827976).

### Test instructions

Please read the on the day instructions for the test at [Mid-term test instructions](https://edstem.org/au/courses/25182/lessons/90204/slides/618902) before the test. A copy of the instructions will be included in the test.

## 2. Instructions

::: tip

**Read all instructions carefully!**

:::

### Test Structure

The mid-term test has **three programming questions**. Each question asks you to write a piece of Python code to solve a certain problem. 

The questions are not equally weighted. The maximum marks for each question is specified in the question title. Questions are not ordered by difficulty: you can read through the questions first, then decide the order in which you want to attempt them.

The total sum of marks is 20. It has a **hurdle** **of 7 mark out of 20**. If you don't pass the hurdle, please withdraw from the course before the census date (31th August). 

> **If you failed the hurdle but didn't withdraw, then at the end of the semester:** 
>
> • If your total mark (sum of assignments, mid-term test and final exam) is < 45, you will receive NCN grade. 
>
> • If your total mark is >= 45 (and no matter how high it is), you will receive a PX grade and be offered a supplementary exam: passing it will result in 50PS, and failing it will result in NCN grade.
>
> That means, **you would get either NCN or 50PS (at best) if you failed the hurdle, and that's why you are strongly advised to withdraw.**

The test is 90 minutes, with no extra time for reading or submitting. Your remaining time is shown in the timer in the top left, like below.

![Test timer](https://blog.images.bornforthis.cn/docs-images/sha256/be/be19fc5b0998e1f45fa4673cbc636572d56c44db0733b681525d3eca796e8e03.png)



### Writing your solution

**For each programming question, you must write your solution into the scaffold file, on Ed**. You may choose to edit this file directly in Ed, or edit outside of Ed in an IDE of your choice by downloading the file (instructions provided below; or you can also copying its contents manually). If you choose to edit the file outside of Ed however, you must upload your completed file back into Ed (or transfer your solution into the file on Ed) before the exam time is over (no extra time is given for uploading/transfer and checking your upload). Solutions not submitted in Ed will not be marked. **The name of the scaffold file also must not be changed** (regardless of whether you are editing in Ed or outside of Ed; if uploading to Ed you should overwrite the existing file).

If you wish to edit the scaffold file outside of Ed in an IDE of your choice, you can download a copy of the scaffold file from the link provided at the bottom of the question text, or from the "Files" tab in the Ed editor

![Scaffold file download link and files tab location](https://blog.images.bornforthis.cn/docs-images/sha256/ba/ba48018402cfa0f409d4f7d5807f423b2430e376094e07ce57e75c6049e4afc3.jpeg)

In the "Files" tab, you can download the scaffold file by right clicking on the file then clicking "Download".

![Download button location](https://blog.images.bornforthis.cn/docs-images/sha256/9b/9b9df79f11476d1bae5fcd66c98e9b8c296f75f425d190daeb8d90323c9ed63e.jpeg)

For the download link, if the file contents is displayed instead of a download dialog, you may need to right click and click "Save page as" or similar in order to save the file (use the "Files" tab download button if this doesn't work).

To upload your completed file, you should press the "+" button beside the "Files" button, then click the "Upload" button in the menu that opens.

![Upload button location](https://blog.images.bornforthis.cn/docs-images/sha256/c5/c584384be8bfcf589490565b3115e2e25710b9a2f8fe66866379c6b30c3f34d0.jpeg)

Note that when you upload a file, it will overwrite any existing file in Ed with the same file name. There will be no warning or confirmation prompt. Please be careful when uploading if you have an existing version of your solution already in Ed that you wish to retain.

If you need to reset the scaffold file on Ed for whatever reason, click the "..." button at the top right, located beside the "Submit" button. You can reset the scaffold file using the "Reset to Scaffold" button in the drop-down menu that opens.

![Reset to scaffold button location](https://blog.images.bornforthis.cn/docs-images/sha256/31/31002fe3dae6e7b68b33680708e5af520730a7065ff5ed55ba45663276976845.jpeg)

You will be warned in a confirmation dialog that this action will reset your scaffold file (and delete any other files that you have uploaded or created in Ed). The reset will only reset for that question, it will not reset your other questions.

![Reset to scaffold confirmation dialog](https://blog.images.bornforthis.cn/docs-images/sha256/05/05036cfd7bd2f56ee948320cf236b2a80acdc0fe033a9956b7f0d88983a44607.png)

If you are sure you have saved any work you want to save elsewhere, or are okay with losing work, continue to press the "Reset" button to reset your scaffold file.

An alternative to the "Reset to Scaffold" button above is to download the scaffold file via the link in the question text and manually restore the scaffold file contents.

### Question requirements

Each programming question will describe a function you must write, and any other requirements your function must meet. You may also be told what assumptions you may make. Your function will only be tested with valid arguments for marking, and you are not required to check that the arguments do not violate the provided assumptions.

Unless otherwise disallowed or restricted by the question, you are allowed to import any module that is installed in Ed's python environment. All questions are designed to be solvable without using any modules however.

Code will be **marked on the basis of functionality only** **i.e. code quality is not marked.** To be fully functional means the function returns the correct value for all valid arguments.

You are provided a minimal set of basic tests in each question to aid in checking your understanding of the problem and in debugging your solution. The examples included in the question text are usually included in this set of provided tests, but not always all; and the provided tests can include additional cases not included in the examples. The provided tests can be ran by calling the test function in the scaffold file in a console (on Ed or in your IDE), or by clicking the "Test" button on Ed (on Ed only). You can click the "Test" button on Ed as many times as you want. Clicking the "Test" button also does not submit your exam -- you are still able to edit your solutions after clicking it.

![Test button location](https://blog.images.bornforthis.cn/docs-images/sha256/ad/adfec93ea124e0ed832dce94a7f81c2406e8e0f4e15bd08d12e8a5e3c5d37ea5.jpeg)

The provided minimal set of basic tests is not at all comprehensive and does not cover all edge cases. **Passing the provided set of tests does not prove that your solution is fully correct.** The marks shown when you click the "Test" button is not the marks that your solution will receive, and should be ignored. 

![Marks shown when tests are ran should be ignored](https://blog.images.bornforthis.cn/docs-images/sha256/2f/2f1eeb9a8504b5cc93b7fea88878e569b20e0377e8c2213f3f96ff2d15b0ebe7.jpeg)

For marking, your code will be tested with additional hidden test sets. An equivalent but not identical variant of the provided test set is one of the set of tests in the hidden test sets. Marks will be awarded in relation to, but not proportional to, the number of sets of hidden tests passed (each set of test may have different mark value). **Code that does not pass the provided test set equivalent will receive zero marks** regardless of number of other hidden test sets passed. A submission that does not run (for example, due to syntax errors), that violates the format instructions, or that fails every test case will also receive zero marks.

*The hidden provided test set equivalent is meant to defeat cases of hard coding all of the provided test case returns only. If you have solved the question normally you do not need to worry about whether you will pass the equivalent if you have passed the original provided test set.*

### Submitting

Once you are done with all questions, have checked your solutions, and that they have all been uploaded/transferred into Ed correctly (if applicable), and are ready to submit, press the "Submit" button in the top right corner.

![img](https://blog.images.bornforthis.cn/docs-images/sha256/9b/9b450f495d08b3aec7240846048bf464e2ff8f3215aff822575361957900301d.png)

A dialog will pop up asking you to confirm whether you want to submit your test. If you have yet to press "Test" on any of your questions, you will be warned in the dialog that some of your slides may be incomplete.

![Submit confirmation dialog (test not ran for some questions)](https://blog.images.bornforthis.cn/docs-images/sha256/68/68048ada85fb16bd94d7ef29d37ef076026d13b564a8417f6bbf469d9771a9fb.png)



![Submit confirmation dialog](https://blog.images.bornforthis.cn/docs-images/sha256/e8/e8f91a7658540e5a5b348c867134e88b54166b7f215e9f7c782a1b48d2242540.png)

If you are sure you want to submit, tick the "I'm ready to submit" box to enable the "Submit" button, then click the "Submit" button in the to submit your test. 

> **Once you submit you will not be able to change your solutions or view the test anymore.**
>
> Note that you will not be allowed to leave the test venue until at least 1 hour has passed since the start of the test even if you submit early.
>
> If you do not submit via the "Submit" button before the end of your test time, your test will be automatically submitted as-is at the end of the test time. You should ensure sufficient time to upload/transfer your solutions before the end of your test time if working off of Ed.

## 3. Practice mid-term test 1 — Submissions

### 3.1 Question 1: Interval intersection (7/20)

A closed interval of the real number line is defined by its lower and upper end points. Write a function `interval_intersection(lower_a, upper_a, lower_b, upper_b)` that returns the length of the intersection of two intervals *A* and *B*. Arguments `lower_a` and `upper_a` are the lower and upper end points of interval *A*, and `lower_b` and `upper_b` are the lower and upper end points of interval *B*. If the intervals do not intersect, the function should return 0.

For example, `interval_intersection(0, 3, 1, 5)` should return `2`, because the intersection of the two intervals `(0,3)` and `(1,5)` is `(1,3)`, which has a length of `3 - 1 = 2`.

A scaffold file `interval_intersection.py` is provided. You must write your solution into this file.

Requirements:

- The function that you write must be named `interval_intersection` and it must have four parameters.
- You can assume that the parameters are numbers such as `int`, `float`.
- The function must return a number.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You can test it by either clicking the "Test" button in Ed or running `test_interval_intersection` provided in the scaffold file. Passing the tests does not prove that your solution is correct. **Failing any test proves that your function is wrong.** Code that does not run (for example due to syntax errors) or that fails every test case will receive **zero marks**.

```python
def interval_intersection(lower_a, upper_a, lower_b, upper_b):
     start = max(lower_a , lower_b)
     end = min(upper_a , upper_b)
     if start >= end:
        return 0
     return end - start



def test_interval_intersection():
    """
    This function runs a number of tests of the interval_intersection function.
    If some test fails, there will be an error message.
    """

    assert abs(interval_intersection(0, 2, 4, 7.5)) < 1e-6, "no intersection (upper_a < lower_b)"
    assert abs(interval_intersection(1, 3, 2.5, 6) - 0.5) < 1e-6, "intersection is [2.5, 3]"
    assert abs(interval_intersection(1, 3, 1.5, 5) - 1.5) < 1e-6, "intersection is [1.5, 3]"
    assert abs(interval_intersection(0, 2, -2, 1.5) - 1.5) < 1e-6, "intersection is [0, 1.5]"
    assert abs(interval_intersection(1, 3, 0, 3.5) - 2.0) < 1e-6, "A is contained in B"
    assert abs(interval_intersection(1.5, 3.5, 0, 3.5) - 2.0) < 1e-6, "A is contained in B"

    print("Current tests passed. Note that in final marking we may use different test cases.")
```

::: tabs

@tab 练习 1：Interval Union Length（区间并集长度）

#### 🧠 题目

编写函数：

```python
interval_union(lower_a, upper_a, lower_b, upper_b)
```

返回两个**闭区间** A 和 B 的并集长度。

如果区间不相交，则返回两个区间长度之和。如果区间相交，则返回合并后的总长度。

#### 📌 示例

```python
interval_union(0, 3, 1, 5) 
```

区间：

```
A = [0, 3]
B = [1, 5]
```

并集为：

```
[0, 5]
```

返回：

```
5
```

再例如：

```python
interval_union(0, 2, 4, 6)
```

无交集：

```
长度 = 2 + 2 = 4
```

#### 🎯 要求

- 必须处理所有情况
- 参数保证为数字
- 返回数值

@tab 练习 2：Interval Overlap Ratio（区间重叠比例）

#### 🧠 题目

写函数：

```python
interval_overlap_ratio(lower_a, upper_a, lower_b, upper_b)
```

返回：

```
交集长度 / 并集长度
```

如果没有交集，返回 0。

#### 📌 示例

```python
interval_overlap_ratio(0, 4, 2, 6)
```

交集：

```
[2,4] → 长度 2
```

并集：

```
[0,6] → 长度 6
```

返回：

```
2/6 = 0.333333...
```

#### 📌 再例如

```python
interval_overlap_ratio(0, 2, 4, 6)
```

无交集 → 返回：

```
0
```

#### 🎯 要求

- 返回浮点数
- 不允许除以 0
- 所有情况必须正确处理

👉 这题本质是把“交集逻辑 + 并集逻辑”组合起来。

@tab 练习 3：Interval Containment（区间包含判断）

#### 🧠 题目

编写函数：

```python
interval_relation(lower_a, upper_a, lower_b, upper_b)
```

返回字符串表示两个区间的关系：

| 情况         | 返回值              |
| ------------ | ------------------- |
| A 完全包含 B | `"A contains B"`    |
| B 完全包含 A | `"B contains A"`    |
| 部分重叠     | `"Partial overlap"` |
| 无交集       | `"No overlap"`      |

#### 📌 示例

```python
interval_relation(0, 5, 1, 3)
```

返回：

```
"A contains B"
```

```python
interval_relation(0, 3, 2, 6)
```

返回：

```
"Partial overlap"
```

```python
interval_relation(0, 2, 3, 5)
```

返回：

```
"No overlap"
```

#### 🎯 要求

- 必须逻辑严谨
- 不能出现重复分类
- 所有情况必须覆盖

#### 📌 难度梯度说明

| 题目   | 训练点          |
| ------ | --------------- |
| 练习 1 | 并集逻辑        |
| 练习 2 | 综合计算 + 边界 |
| 练习 3 | 分类判断逻辑    |

@tab code

```python
# -*- coding: utf-8 -*-
# @Time    : 2024/11/16 09:07
# @Author  : AI悦创
# @FileName: app.py
# @Software: CodeMark
# @Blog    ：https://bornforthis.cn/
# 欢迎👏使用 CodeMark✨✨✨
# 此编辑器你可以编辑和分享代码!
# PS:注释部分你可以保留或者删除
def interval_intersection_len(lower_a, upper_a, lower_b, upper_b):
    """
    计算两个闭区间 A=[lower_a, upper_a] 与 B=[lower_b, upper_b] 的交集长度。
    若无交集，返回 0。

    注意：
    - 这里按“长度”的常见定义：length = max(0, end - start)
    - 即使是闭区间，长度仍然按端点差值计算（单点交集长度为 0）
    """
    # 交集的起点：两个区间左端点中较大的那个
    start = max(lower_a, lower_b)

    # 交集的终点：两个区间右端点中较小的那个
    end = min(upper_a, upper_b)

    # 如果 start >= end，说明交集为空 或 仅交于一点（长度为0）
    if start >= end:
        return 0

    # 否则交集长度为 end - start
    return end - start


def interval_union(lower_a, upper_a, lower_b, upper_b):
    """
    计算两个闭区间的并集长度。

    并集长度的思路：
    - 如果两区间不相交：并集长度 = len(A) + len(B)
    - 如果相交：并集长度 = len(A) + len(B) - len(intersection)

    这里 len(A) = upper_a - lower_a
    """
    # 区间 A 的长度
    len_a = upper_a - lower_a

    # 区间 B 的长度
    len_b = upper_b - lower_b

    # 两个区间交集长度
    inter = interval_intersection_len(lower_a, upper_a, lower_b, upper_b)

    # 并集长度 = 两段长度之和 - 交集（避免重复计算交集部分）
    return len_a + len_b - inter


def interval_overlap_ratio(lower_a, upper_a, lower_b, upper_b):
    """
    计算 “重叠比例” = 交集长度 / 并集长度

    特殊情况：
    - 如果没有交集，直接返回 0（题目要求）
    - 并集长度理论上 > 0（只要区间长度不是 0）
      但为了鲁棒性，也可以防止并集为 0 的情况（例如两个都是[2,2]）
    """
    # 交集长度
    inter = interval_intersection_len(lower_a, upper_a, lower_b, upper_b)

    # 若交集长度为0，按题意返回0
    if inter == 0:
        return 0

    # 并集长度
    uni = interval_union(lower_a, upper_a, lower_b, upper_b)

    # 防止极端情况：并集长度为0（两个都是零长度区间且完全重合）
    if uni == 0:
        return 0

    # 返回交集 / 并集（浮点数）
    return inter / uni


def interval_relation(lower_a, upper_a, lower_b, upper_b):
    """
    判断两个闭区间的关系，并返回字符串：

    - "A contains B" : A 完全包含 B
    - "B contains A" : B 完全包含 A
    - "Partial overlap" : 部分重叠（有交集但互不完全包含）
    - "No overlap" : 无交集

    判定顺序很关键：
    1) 先判断无交集（最快排除）
    2) 再判断包含关系（更具体）
    3) 剩下的就是部分重叠
    """
    # 先用交集长度判断是否相交
    # 注意：交于一点时交集长度为0，这里也视为 "No overlap"（常见长度定义下）
    inter = interval_intersection_len(lower_a, upper_a, lower_b, upper_b)
    if inter == 0:
        return "No overlap"

    # 判断 A 是否包含 B：
    # A 的左端点 <= B 的左端点 且 A 的右端点 >= B 的右端点
    if lower_a <= lower_b and upper_a >= upper_b:
        return "A contains B"

    # 判断 B 是否包含 A：
    if lower_b <= lower_a and upper_b >= upper_a:
        return "B contains A"

    # 能走到这里，说明：
    # - 有交集
    # - 但没有包含关系
    # => 部分重叠
    return "Partial overlap"


# --------------------------
# 测试函数（你可以直接运行）
# --------------------------
def test_all():
    # ---- interval_union tests ----
    assert abs(interval_union(0, 3, 1, 5) - 5) < 1e-9      # [0,5] 长度 5
    assert abs(interval_union(0, 2, 4, 6) - 4) < 1e-9      # 不相交 2+2=4
    assert abs(interval_union(1, 3, 1, 3) - 2) < 1e-9      # 完全重合
    assert abs(interval_union(-2, 1.5, 0, 2) - 4.0) < 1e-9 # [-2,2] 长度4

    # ---- interval_overlap_ratio tests ----
    r = interval_overlap_ratio(0, 4, 2, 6)                # 交集2 并集6 => 1/3
    assert abs(r - (2/6)) < 1e-9
    assert interval_overlap_ratio(0, 2, 4, 6) == 0         # 无交集
    assert abs(interval_overlap_ratio(0, 3, 1, 5) - (2/5)) < 1e-9  # inter=2 union=5 => 0.4

    # ---- interval_relation tests ----
    assert interval_relation(0, 5, 1, 3) == "A contains B"
    assert interval_relation(1, 3, 0, 10) == "B contains A"
    assert interval_relation(0, 3, 2, 6) == "Partial overlap"
    assert interval_relation(0, 2, 3, 5) == "No overlap"

    print("✅ All tests passed!")


if __name__ == "__main__":
    test_all()
```

:::

### 3.2 Question 2: Increasing triplets (7/20)

For three sequences, `seq1`, `seq2`, and `seq3`, a triplet `(e1,e2,e3)` is a combination of 3 elements such that `e1`, `e2`, `e3` come from `seq1`, `seq2`, `seq3`, respectively. The index of these elements in their respective sequence does not need to be the same.  Write a function `increasing_triplets` that takes three sequences, `seq1`, `seq2`, and `seq3` as input, counts how many triplets there are such that `e1 < e2 < e3`. If any of the sequences are empty, then the function must return 0.

Examples:

- `increasing_triplets([3,1,2],[3,7],[5,6])` should return 4 as there are four increasing triplets `(1,3,5)`, `(1,3,6)`, `(2,3,5`), `(2,3,6`). The other triplets do not fulfill this condition.
- `increasing_triplets(["a","bb"],("cc","eax"),"cdx")` should return 6.

A scaffold file `increasing_triplets.py` is provided. You must write your solution into this file.

Requirements:

- The function that you write must be named `increasing_triplets` and it must have three parameters.
- You can assume that the parameters are of built-in sequence types (i.e., `list`, `str` or `tuple`).
- The sequences may be of different types, but you can assume that all the elements of all sequences are of the same type.
- You can assume that the type of the elements is such that it is legal to use comparison operators among them.
- The function must return an integer.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You can test it by either clicking the "Test" button in Ed or running `test_increasing_triplets` provided in the scaffold file. Passing the tests does not prove that your solution is correct. **Failing any test proves that your function is wrong.** Code that does not run (for example due to syntax errors) or that fails every test case will receive **zero marks**.

```python
def increasing_triplets(seq1,seq2,seq3):
    count = 0
    for e1 in seq1:
        for e2 in seq2:
            for e3 in seq3:
                if e1 < e2 <e3:
                    count = count + 1
    return count

def test_increasing_triplets():
    """
    This function runs a number of tests of the increasing_triplets function.
    If some test fails, there will be an error message.
    """
    assert increasing_triplets([1,2,3],[5,6],[7])==6
    assert increasing_triplets([1,2,3],[7],[5,6])==0
    assert increasing_triplets([3,1,2],[3,7],[5,6])==4
    print("Current tests passed. Note that in final marking we may use different test cases.")
```

::: tabs

@tab 练习题 1：Decreasing Triplets（递减三元组）

#### 🧠 题目说明

对于三个序列 `seq1`, `seq2`, `seq3`，定义三元组 `(e1, e2, e3)`：

- `e1` 来自 `seq1`
- `e2` 来自 `seq2`
- `e3` 来自 `seq3`

要求统计满足：

```
e1 > e2 > e3
```

的三元组个数，如果任一序列为空，返回 0。

#### 📄 模板文件：`decreasing_triplets.py`

```python
def decreasing_triplets(seq1, seq2, seq3):
    count = 0
    
    # TODO: Write your solution here
    
    return count


def test_decreasing_triplets():
    """
    This function runs a number of tests of the decreasing_triplets function.
    If some test fails, there will be an error message.
    """
    assert decreasing_triplets([5,4,3],[3,2],[1]) == 5
    assert decreasing_triplets([1,2,3],[1],[1]) == 0
    assert decreasing_triplets([], [1], [1]) == 0
    print("Current tests passed.")
```

@tab 练习题 2：Non-decreasing Triplets（允许相等）

### 🧠 题目说明

统计满足：

```
e1 <= e2 <= e3
```

的三元组个数。

#### 📄 模板文件：`non_decreasing_triplets.py`

```python
def non_decreasing_triplets(seq1, seq2, seq3):
    count = 0
    
    # TODO: Write your solution here
    
    return count


def test_non_decreasing_triplets():
    """
    This function runs a number of tests of the non_decreasing_triplets function.
    """
    assert non_decreasing_triplets([1,2],[2,3],[3]) == 4
    assert non_decreasing_triplets([1],[1],[1]) == 1
    assert non_decreasing_triplets([3],[2],[1]) == 0
    print("Current tests passed.")
```



@tab 练习题 3：Sum Triplets（和值满足条件）

#### 🧠 题目说明

统计满足：

```
e1 + e2 + e3 > target
```

的三元组数量。

函数增加一个参数 `target`。

#### 📄 模板文件：`sum_triplets.py`

```python
def sum_triplets(seq1, seq2, seq3, target):
    count = 0
    
    # TODO: Write your solution here
    
    return count


def test_sum_triplets():
    """
    This function runs a number of tests of the sum_triplets function.
    """
    assert sum_triplets([1,2],[3],[4], 6) == 2
    assert sum_triplets([1],[1],[1], 5) == 0
    assert sum_triplets([], [1], [1], 1) == 0
    print("Current tests passed.")
```

@tab Code1

```python
def decreasing_triplets(seq1, seq2, seq3):
    """
    统计满足 e1 > e2 > e3 的三元组数量
    e1 来自 seq1, e2 来自 seq2, e3 来自 seq3
    若任一序列为空，返回 0
    """

    # 如果任意一个序列为空，就不可能组成三元组，直接返回 0
    if len(seq1) == 0 or len(seq2) == 0 or len(seq3) == 0:
        return 0

    count = 0  # 用来累计满足条件的三元组数量

    # 遍历 seq1 中每一个元素，作为 e1
    for e1 in seq1:
        # 遍历 seq2 中每一个元素，作为 e2
        for e2 in seq2:
            # 遍历 seq3 中每一个元素，作为 e3
            for e3 in seq3:
                # 判断是否满足严格递减：e1 > e2 > e3
                if e1 > e2 > e3:
                    # 如果满足，则计数 +1
                    count += 1

    # 返回最终统计结果（整数）
    return count


def test_decreasing_triplets():
    """
    This function runs a number of tests of the decreasing_triplets function.
    If some test fails, there will be an error message.
    """
    assert decreasing_triplets([5, 4, 3], [3, 2], [1]) == 4
    # 解释：
    # e3 只能是 1
    # e2 可选 3 或 2
    # e1 可选 5,4,3
    # 满足 e1 > e2 > 1 的共有 4 组

    assert decreasing_triplets([1, 2, 3], [1], [1]) == 0
    # 因为要求严格递减，e2=1, e3=1 不能满足 e2 > e3

    assert decreasing_triplets([], [1], [1]) == 0
    # seq1 为空，直接 0

    print("Current tests passed.")

```

@tab Code2

```python
def non_decreasing_triplets(seq1, seq2, seq3):
    """
    统计满足 e1 <= e2 <= e3 的三元组数量（允许相等）
    若任一序列为空，返回 0
    """

    # 任一序列为空，无法组成三元组
    if len(seq1) == 0 or len(seq2) == 0 or len(seq3) == 0:
        return 0

    count = 0  # 计数器

    # 遍历 seq1 的每个元素作为 e1
    for e1 in seq1:
        # 遍历 seq2 的每个元素作为 e2
        for e2 in seq2:
            # 遍历 seq3 的每个元素作为 e3
            for e3 in seq3:
                # 判断是否满足非递减：e1 <= e2 <= e3
                if e1 <= e2 <= e3:
                    # 满足就累加
                    count += 1

    return count


def test_non_decreasing_triplets():
    """
    This function runs a number of tests of the non_decreasing_triplets function.
    """
    assert non_decreasing_triplets([1, 2], [2, 3], [3]) == 3
    # 解释：
    # e3 固定为 3
    # e2 可为 2 或 3
    # e1 可为 1 或 2
    # 满足 e1 <= e2 <= 3 的三元组共 3 个：
    # (1,2,3), (2,2,3), (1,3,3)

    assert non_decreasing_triplets([1], [1], [1]) == 1
    # (1,1,1) 满足 1<=1<=1，因此为 1

    assert non_decreasing_triplets([3], [2], [1]) == 0
    # 3<=2 不成立，直接 0

    print("Current tests passed.")
```

@tab Code3

```python
def sum_triplets(seq1, seq2, seq3, target):
    """
    统计满足 e1 + e2 + e3 > target 的三元组数量
    若任一序列为空，返回 0
    """

    # 空序列直接返回 0
    if len(seq1) == 0 or len(seq2) == 0 or len(seq3) == 0:
        return 0

    count = 0  # 计数器

    # 遍历 seq1 的元素作为 e1
    for e1 in seq1:
        # 遍历 seq2 的元素作为 e2
        for e2 in seq2:
            # 遍历 seq3 的元素作为 e3
            for e3 in seq3:
                # 计算三元组和值
                total = e1 + e2 + e3

                # 如果和值大于 target，则计数 +1
                if total > target:
                    count += 1

    return count


def test_sum_triplets():
    """
    This function runs a number of tests of the sum_triplets function.
    """
    assert sum_triplets([1, 2], [3], [4], 6) == 2
    # 解释：
    # 可能组合：
    # (1,3,4) sum=8 > 6 ✔
    # (2,3,4) sum=9 > 6 ✔
    # 所以结果为 2

    assert sum_triplets([1], [1], [1], 5) == 0
    # 1+1+1=3，不大于 5

    assert sum_triplets([], [1], [1], 1) == 0
    # seq1 为空，0

    print("Current tests passed.")
```



:::

### 3.3 Question 3: Count isograms (6/20)

An isogram is a string where each of its characters occurs the same number of times. A lower-case letter is different from an upper-case letter and the function should work with non-letter characters. For example, the string `"abaCCb"` is an isogram as the characters `"a"`, `"b"`, `"C"` occur two times each. The string `"aBaCCb"` is not an isogram because `"a"`, `"B"`, `"C"`, and `"b"` occur twice, once, twice, and once, respectively (`"B"` is different from `"b"`).

Write a function `count_isograms` that takes a list of strings as input and returns the number of strings in the list are isograms.

A scaffold file `count_isograms.py` is provided. You must write your solution into this file.

Requirements:

- The function that you write must be named `count_isograms` and it must have a single parameter.
- You can assume that the parameter is of type`list.`
- You can assume that all elements in the list are of type `str.`
- The function must return an integer.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You can test it by either clicking the "Test" button in Ed or running `test_count_isograms` provided in the scaffold file. Passing the tests does not prove that your solution is correct. **Failing any test proves that your function is wrong.** Code that does not run (for example due to syntax errors) or that fails every test case will receive **zero marks**.

::: code-tabs

@tab Code1

```python
def count_isograms(strings):
    

def test_count_isograms():
    """
    This function runs a number of tests of the count_isograms function.
    If some test fails, there will be an error message.
    """
    assert count_isograms([])==0
    assert count_isograms(["a"])==1
    assert count_isograms(["aa","abC"])==2
    assert count_isograms(["abaCCb","abaCCb"])==2
    print("Current tests passed. Note that in final marking we may use different test cases.")
```

@tab Code2

```python
def count_isograms(strings):
    count = 0
    
    for s in strings:
        freq = {}
        
        # 统计字符出现次数
        for ch in s:
            if ch in freq:
                freq[ch] += 1
            else:
                freq[ch] = 1
        
        # 取所有出现次数
        values = list(freq.values())
        
        # 判断是否所有次数相同
        if len(values) > 0 and all(v == values[0] for v in values):
            count += 1
        # 方法二：运行时自己选择注释掉一个
        # 判断是否所有次数相同
        if len(values) > 0 and set(values) == 1:
            count += 1
    
    return count


def test_count_isograms():
    """
    This function runs a number of tests of the count_isograms function.
    If some test fails, there will be an error message.
    """
    assert count_isograms([]) == 0
    assert count_isograms(["a"]) == 1
    assert count_isograms(["aa", "abC"]) == 2
    assert count_isograms(["abaCCb", "abaCCb"]) == 2
    print("Current tests passed. Note that in final marking we may use different test cases.")

```



:::





::: tabs

@tab 练习题 1：Count Exactly-Twice Strings（每种字符恰好出现 2 次）

#### 题目说明

给定一个字符串 `s`：

- 统计 `s` 中每个**不同字符**出现的次数（字符可以是任意字符：字母、数字、空格、标点、emoji 等）。
- 字符大小写敏感：`"a"` 和 `"A"` 是两个不同字符。
- 若 `s` 中**每一种不同字符都恰好出现 2 次**，则称 `s` 为 **exactly-twice string**。

例如：

- `"aa"` ✅（`a` 出现 2 次）
- `"aabb"` ✅（`a`、`b` 都出现 2 次）
- `"abab"` ✅（`a`、`b` 都出现 2 次，不要求连续、不要求对称）
- `"abcabc"` ✅（`a`、`b`、`c` 都出现 2 次）
- `"aabbc"` ❌（`c` 只出现 1 次）
- `"aaa"` ❌（`a` 出现 3 次）
- `""`（空串）✅ 约定为真：因为“所有不同字符”集合为空，没有任何字符违背“出现 2 次”（真空真）。

#### 任务

编写函数 `count_exactly_twice(strings)`：

- 输入：字符串列表 `strings`
- 输出：其中满足 exactly-twice 定义的字符串数量（整数）

#### 模板代码 + 测试

##### 题目

```python
def count_exactly_twice(strings):
    # TODO: write your solution here
    pass


def test_count_exactly_twice():
    """
    Tests for count_exactly_twice.
    """
    assert count_exactly_twice([]) == 0

    # empty string is considered valid by convention
    assert count_exactly_twice([""]) == 1

    assert count_exactly_twice(["aa"]) == 1
    assert count_exactly_twice(["aabb", "abab"]) == 2
    assert count_exactly_twice(["abcabc"]) == 1

    # case-sensitive
    assert count_exactly_twice(["aA"]) == 0      # 'a':1, 'A':1
    assert count_exactly_twice(["aAaA"]) == 1    # 'a':2, 'A':2

    # non-letter characters
    assert count_exactly_twice(["11!!", "1122!!"]) == 2
    assert count_exactly_twice(["  "]) == 1      # space appears twice

    # invalid examples
    assert count_exactly_twice(["aab", "aaa", "aabbc"]) == 0

    print("Current tests passed.")
```

##### My「错误」

```python
def count_exactly_twice(strings):
    # TODO: write your solution here
    if strings == []:
        return 0
    count = 0
    for string in strings:
        for char in string:
            if string.count(char) != 2:
                return 0  # 会直接结束整个函数
        count += 1
    return count
```

```python
def count_exactly_twice(strings):
    # TODO: write your solution here
    if strings == []:
        return 0
    count = 0
    for string in strings:
        condition = True
        for char in string:
            if string.count(char) != 2:
                condition = False
                break
        if condition:
            count += 1
    return count
```



##### 答案

```python
def count_exactly_twice(strings):
    """
    统计列表中有多少个字符串满足：每一种不同字符都恰好出现 2 次。

    关键点：
    1) 大小写敏感（'a' != 'A'）
    2) 非字母字符也算（数字、符号、空格都算字符）
    3) 空串 "" 约定为 True（因为没有字符违反“出现 2 次”的条件，属于真空真）
    """
    count = 0  # 计数器：记录满足条件的字符串数量

    # 遍历列表中的每一个字符串
    for s in strings:
        # 用字典统计每个字符出现的次数
        freq = {}  # key: 字符, value: 出现次数

        for ch in s:
            # 如果 ch 没出现过，就从 0 开始；否则在原来的次数上 +1
            freq[ch] = freq.get(ch, 0) + 1

        # 判断是否“每一种不同字符都恰好出现 2 次”
        # all(...)：只要有一个不是 2，就返回 False
        # 对空串来说：freq.values() 是空的，all([]) 返回 True（真空真）
        if all(times == 2 for times in freq.values()):
            count += 1

    return count


def test_count_exactly_twice():
    """
    本函数用于测试 count_exactly_twice 的正确性。
    注意：通过这些测试不代表最终一定全对，但失败代表一定有问题。
    """
    assert count_exactly_twice([]) == 0

    # 空串按约定为 True
    assert count_exactly_twice([""]) == 1

    assert count_exactly_twice(["aa"]) == 1
    assert count_exactly_twice(["aabb", "abab"]) == 2
    assert count_exactly_twice(["abcabc"]) == 1  # a,b,c 都出现 2 次

    # 大小写敏感测试
    assert count_exactly_twice(["aA"]) == 0      # a:1, A:1（不是2）
    assert count_exactly_twice(["aAaA"]) == 1    # a:2, A:2

    # 非字母字符测试
    assert count_exactly_twice(["11!!", "1122!!"]) == 2
    assert count_exactly_twice(["  "]) == 1      # 空格出现两次

    # 不满足条件的情况
    assert count_exactly_twice(["aab", "aaa", "aabbc"]) == 0

    print("count_exactly_twice: Current tests passed.")


if __name__ == "__main__":
    # 直接运行该文件时，会自动执行测试
    test_count_exactly_twice()

```

@tab 练习题 2：Count All-Unique Strings（所有字符都不重复）

#### 题目说明

给定字符串 `s`：

- 若 `s` 中**每个字符都只出现 1 次**（即没有任何重复字符），则称 `s` 为 **all-unique string**。
- 大小写敏感：`"a"` 与 `"A"` 不同，因此 `"aA"` 是 all-unique。
- 允许任意字符（非字母也算字符）。
- 空串 `""` ✅ 也属于 all-unique（没有重复字符）。

例如：

- `"abc"` ✅
- `"aA"` ✅
- `"abca"` ❌（`a` 重复）
- `"112"` ❌（`1` 重复）
- `"!@#"` ✅

#### 任务

编写函数 `count_all_unique(strings)`：

- 输入：字符串列表 `strings`
- 输出：其中 all-unique 字符串的数量（整数）

#### 模板代码 + 测试

```python
def count_all_unique(strings):
    # TODO: write your solution here
    pass


def test_count_all_unique():
    """
    Tests for count_all_unique.
    """
    assert count_all_unique([]) == 0
    assert count_all_unique([""]) == 1

    assert count_all_unique(["a"]) == 1
    assert count_all_unique(["abc", "abca"]) == 1

    # case-sensitive
    assert count_all_unique(["aA"]) == 1
    assert count_all_unique(["AaA"]) == 0  # 'A' repeats

    # non-letter characters
    assert count_all_unique(["!@#", "112", "12 3"]) == 2  # "12 3" includes space, all unique
    assert count_all_unique(["  "]) == 0  # space repeats

    print("Current tests passed.")
```

#### 答案

```python
def count_all_unique(strings):
    """
    统计列表中有多少个字符串满足：每个字符都只出现 1 次（不允许重复）。

    关键点：
    1) 大小写敏感（'a' != 'A'）
    2) 任意字符都算（包括空格、标点等）
    3) 空串 "" 约定为 True（没有重复字符）
    """
    count = 0  # 计数器：记录满足 all-unique 的字符串数量

    for s in strings:
        # 方法：用 set 记录已经出现过的字符
        seen = set()
        ok = True  # 假设当前字符串满足条件，遇到重复再改为 False

        for ch in s:
            if ch in seen:
                # 如果字符已经出现过，说明重复了
                ok = False
                break
            # 没出现过就加入集合
            seen.add(ch)

        if ok:
            count += 1

    return count


def test_count_all_unique():
    """
    本函数用于测试 count_all_unique 的正确性。
    """
    assert count_all_unique([]) == 0
    assert count_all_unique([""]) == 1

    assert count_all_unique(["a"]) == 1
    assert count_all_unique(["abc", "abca"]) == 1

    # 大小写敏感
    assert count_all_unique(["aA"]) == 1
    assert count_all_unique(["AaA"]) == 0  # 'A' 重复

    # 非字母字符
    assert count_all_unique(["!@#", "112", "12 3"]) == 2  # "!@#" + "12 3" 都是唯一
    assert count_all_unique(["  "]) == 0  # 两个空格，空格重复

    print("count_all_unique: Current tests passed.")


if __name__ == "__main__":
    test_count_all_unique()
```

@tab 练习题 3：Count Strict Isograms（严格等频 isogram：必须>1）

#### 题目说明

给定字符串 `s`：

- 统计每个不同字符的出现次数（任意字符、大小写敏感）。
- 若所有不同字符的出现次数**完全相同**，并且这个次数 **必须大于 1**，则称 `s` 为 **strict isogram**。

解释：

- “出现次数相同”是核心：比如都出现 2 次、都出现 3 次……
- 但 **不允许所有字符都只出现 1 次**（也就是不允许普通“全不重复”的那种情况）。

约定：

- 空串 `""` ❌ 不算 strict isogram（因为不存在一个“>1 的共同频次”）。

例如：

- `"aabb"` ✅（a,b 都 2 次）
- `"abcabc"` ✅（a,b,c 都 2 次）
- `"aaa"` ✅（a 都 3 次；只有一种字符也算：所有字符频次相同）
- `"abc"` ❌（都 1 次，但不允许 1）
- `"aab"` ❌（a=2, b=1 不相同）
- `"aAaA"` ✅（a=2, A=2）

#### 任务

编写函数 `count_strict_isograms(strings)`：

- 输入：字符串列表
- 输出：其中 strict isogram 的数量（整数）

#### 模板代码 + 测试

```python
def count_strict_isograms(strings):
    # TODO: write your solution here
    pass


def test_count_strict_isograms():
    """
    Tests for count_strict_isograms.
    """
    assert count_strict_isograms([]) == 0

    # empty string is NOT strict isogram
    assert count_strict_isograms([""]) == 0

    # valid
    assert count_strict_isograms(["aabb"]) == 1
    assert count_strict_isograms(["abcabc"]) == 1
    assert count_strict_isograms(["aaa"]) == 1
    assert count_strict_isograms(["aAaA"]) == 1

    # invalid (frequency 1 not allowed)
    assert count_strict_isograms(["abc", "aA", "!@#"]) == 0

    # invalid (not uniform frequency)
    assert count_strict_isograms(["aab", "abcc"]) == 0

    # multiple
    assert count_strict_isograms(["aabb", "abc", "111222", "1122", "1!1!"]) == 4
    # "111222"(3 & 3) yes, "1122"(2 &2) yes, "1!1!" (1:2, !:2) yes, "aabb" yes, "abc" no

    print("Current tests passed.")
```

#### 代码

```python
def count_strict_isograms(strings):
    """
    统计列表中有多少个字符串满足 strict isogram：

    strict isogram 定义：
    1) 所有不同字符的出现次数必须完全相同
    2) 并且这个出现次数必须 > 1
    3) 大小写敏感
    4) 允许非字母字符
    5) 空串 "" 不算 strict isogram（因为不存在一个共同的 >1 频次）
    """
    count = 0  # 计数器：记录满足 strict isogram 的字符串数量

    for s in strings:
        # 空串直接判定为 False
        if s == "":
            continue

        # 统计频次
        freq = {}
        for ch in s:
            freq[ch] = freq.get(ch, 0) + 1

        # 取出所有字符出现次数（例如 [2,2,2] 或 [3]）
        times_list = list(freq.values())

        # 统一频次判断：
        # 如果所有次数都等于 times_list[0]，则说明频次一致
        same_frequency = all(t == times_list[0] for t in times_list)

        # strict 额外要求：频次必须 > 1
        greater_than_one = times_list[0] > 1

        if same_frequency and greater_than_one:
            count += 1

    return count


def test_count_strict_isograms():
    """
    本函数用于测试 count_strict_isograms 的正确性。
    """
    assert count_strict_isograms([]) == 0

    # 空串不算 strict isogram
    assert count_strict_isograms([""]) == 0

    # 合法
    assert count_strict_isograms(["aabb"]) == 1
    assert count_strict_isograms(["abcabc"]) == 1
    assert count_strict_isograms(["aaa"]) == 1  # 只有一种字符也算：频次一致且>1
    assert count_strict_isograms(["aAaA"]) == 1

    # 不合法：频次为 1 不允许
    assert count_strict_isograms(["abc", "aA", "!@#"]) == 0

    # 不合法：频次不一致
    assert count_strict_isograms(["aab", "abcc"]) == 0

    # 多个混合
    assert count_strict_isograms(["aabb", "abc", "111222", "1122", "1!1!"]) == 4
    # aabb ✅
    # abc ❌（频次=1）
    # 111222 ✅（1和2都出现3次）
    # 1122 ✅（1和2都出现2次）
    # 1!1! ✅（1和!都出现2次）

    print("count_strict_isograms: Current tests passed.")


if __name__ == "__main__":
    test_count_strict_isograms()
```

:::

## 4. Instructions

### 4.1 Question 1: Even double factorial [7/20]

::: warning

**Do not close the browser tab you have the test open in at any point in the test**, or you will need to call the invigilating tutor to help you get back in, causing you to lose some test time.

:::

Write a function `even_double_factorial(n)` that takes an even positive integer `n` as input, and returns the product of all even integers between 2 and n. Even number is any integer that is divisible by 2. In other words, the function should return the result of `2*4*6*...*n`.

Examples:

- `even_double_factorial(2)` should return 2
- `even_double_factorial(4)` should return 8 as `2*4=8`
- `even_double_factorial(8)` should return 384 as `2*4*6*8=384`.

You can (additionally)  assume:

- You can assume that `n` is an `int` and its value will be positive and even. (0 is not positive)

Other requirements:

- The function that you write must be named `even_double_factorial` and it must have one parameter.
- The function must return an `int`.

A scaffold file `even_double_factorial.py` is provided in Ed and for download via link at the bottom. You must write your solution into the copy of **this file in Ed** (or upload or transfer your solution into it if working outside of Ed). You must not change the name of the file in Ed.

Your solution will be marked on functionality only (no code quality considered). To be fully functional means that it returns the correct value for all valid arguments. You are not required to check that arguments your function is called with are valid. A non-comprehensive set of minimal basic tests is provided, you can test your code on this set of tests by either clicking the "Test" button (on Ed) or by calling the function `test_even_double_factorial`  in the provided scaffold file in a console (on Ed or in an IDE). Passing the provided test set does not prove that your solution is fully correct. Code that does not pass the provided test set (or equivalent) will receive zero marks however. Code that does not run (for example, due to syntax errors), that violates the format instructions, or that fails every test case will also receive zero marks.

Scaffold file:

::: code-tabs

@tab even_double_factorial.py

```python
def even_double_factorial(n):
    pass

def test_even_double_factorial():
    assert even_double_factorial(2) == 2
    assert even_double_factorial(4) == 8
    assert even_double_factorial(8) == 384
    print("All tests in provided minimal set of basic tests passed")
    print("Reminder: Passing the provided test set does not prove that your function is fully correct")
```

```python
def even_double_factorial(n):
    result = 1
    for i in range(2, n + 1, 2):
        result *= i
    return result


def test_even_double_factorial():
    assert even_double_factorial(2) == 2
    assert even_double_factorial(4) == 8
    assert even_double_factorial(8) == 384
    print("All tests in provided minimal set of basic tests passed")
    print("Reminder: Passing the provided test set does not prove that your function is fully correct")
```

:::

::: tabs

@tab 题目 1：奇数双阶乘（odd double factorial）

#### 题目描述

编写函数 `odd_double_factorial(n)`：输入一个**正奇整数** `n`，返回从 `1` 到 `n` 之间所有**奇数**的乘积。

也就是计算： `1 * 3 * 5 * ... * n`

> 奇数：不能被 2 整除的整数。

#### 示例

- `odd_double_factorial(1)` → `1`

- `odd_double_factorial(3)` → `3`（`1*3=3`）
- `odd_double_factorial(5)` → `15` (`1*3*5`)

- `odd_double_factorial(7)` → `105`（`1*3*5*7=105`）

#### 额外假设

- 可以假设 `n` 是 `int`

- 可以假设 `n` 一定是**正数且为奇数**

- 函数必须返回 `int`

#### 🧩 Scaffold file：`odd_double_factorial.py`

```python
def odd_double_factorial(n):
    pass


def test_odd_double_factorial():
    # 基础边界：最小正奇数
    assert odd_double_factorial(1) == 1

    # 基础用例
    assert odd_double_factorial(3) == 3
    assert odd_double_factorial(5) == 15
    assert odd_double_factorial(7) == 105

    # 更大用例
    assert odd_double_factorial(9) == 945  # 1*3*5*7*9

    print("odd_double_factorial: 所有测试通过")
```

```python
def odd_double_factorial(n):
    pass


def test_odd_double_factorial():
    # basic cases
    assert odd_double_factorial(1) == 1
    assert odd_double_factorial(3) == 3
    assert odd_double_factorial(5) == 15
    assert odd_double_factorial(7) == 105
    
    # larger case
    assert odd_double_factorial(9) == 945  # 1*3*5*7*9
    
    print("All tests passed for odd_double_factorial")
```

@tab 练习 2：Alternating Product（交替符号乘积）

#### 题目说明

Write a function `alternating_product(n)` that takes a positive integer `n` and returns:

> 编写一个函数 `alternating_product(n)`，它接收一个正整数 `n`，并返回：

```python
1 * (-2) * 3 * (-4) * 5 * (-6) * ... * n
```

Rules:

- Odd numbers are positive「奇数为正数」
- Even numbers are negative「偶数为负数」

#### Examples

- `alternating_product(1)` → `1`
- `alternating_product(2)` → `-2`
- `alternating_product(3)` → `-6`
- `alternating_product(4)` → `24`
- `alternating_product(5)` → `120`

解释：

```python
1 * (-2) * 3 * (-4) = 24
```

#### Assumptions

- `n` is a positive integer

#### Scaffold File: `alternating_product.py`

```python
def alternating_product(n):
    pass


def test_alternating_product():
    assert alternating_product(1) == 1
    assert alternating_product(2) == -2
    assert alternating_product(3) == -6
    assert alternating_product(4) == 24
    assert alternating_product(5) == 120
    assert alternating_product(6) == -720
    
    print("All tests passed for alternating_product")
```

```python
def alternating_product(n):
    """
    计算交替符号乘积：
    1 * (-2) * 3 * (-4) * 5 * (-6) * ... * n

    规则：
    - 奇数项为正
    - 偶数项为负

    题目保证：n 为正整数 int，无需做合法性检查。
    返回值为 int。
    """

    # result 用来累乘保存最终结果
    result = 1

    # 从 1 遍历到 n（包含 n）
    for x in range(1, n + 1):
        # 如果 x 是偶数，则变成负数参与乘积
        # x % 2 == 0 表示 x 能被 2 整除，即偶数
        if x % 2 == 0:
            result *= -x
        else:
            # 否则 x 是奇数，保持正号
            result *= x

    return result


def test_alternating_product():
    # 最小边界
    assert alternating_product(1) == 1

    # 逐步验证符号交替是否正确
    assert alternating_product(2) == -2          # 1*(-2)
    assert alternating_product(3) == -6          # 1*(-2)*3
    assert alternating_product(4) == 24          # 1*(-2)*3*(-4)
    assert alternating_product(5) == 120         # ...*5
    assert alternating_product(6) == -720        # ...*(-6)

    print("All tests passed for alternating_product")
```

@tab 练习 3：Multiple Step Product（步长乘积）

#### 题目说明

Write a function `step_product(n, step)` that returns the product:

> 编写一个函数 `step_product(n, step)`，返回下面的乘积：

```python
1 * (1+step) * (1+2*step) * ... <= n
```

也就是说，从 1 开始，每次增加 `step`，直到不超过 `n`，然后求乘积。

#### Examples

##### Example 1

```python
step_product(10, 2)
= 1 * 3 * 5 * 7 * 9
= 945
```

##### Example 2

```python
step_product(10, 3)
= 1 * 4 * 7 * 10
= 280
```

##### Example 3

```python
step_product(5, 10)
= 1
```

（因为 1+10 已经超过 5）

#### Assumptions

- `n` is positive integer
- `step` is positive integer

#### 🧩 Scaffold File: `step_product.py`

```python
def step_product(n, step):
    pass


def test_step_product():
    # step 2 (odd sequence)
    assert step_product(10, 2) == 945
    assert step_product(9, 2) == 945
    assert step_product(8, 2) == 105
    
    # step 3
    assert step_product(10, 3) == 280
    assert step_product(7, 3) == 28
    
    # step larger than n
    assert step_product(5, 10) == 1
    
    # minimal case
    assert step_product(1, 5) == 1
    
    print("All tests passed for step_product")
```

```python
def step_product(n, step):
    """
    计算步长乘积：
    从 1 开始，每次加 step，直到不超过 n，然后把这些数全部相乘。

    形式：
    1 * (1+step) * (1+2*step) * ... （最后一项 <= n）

    例：
    step_product(10, 2) = 1*3*5*7*9
    step_product(10, 3) = 1*4*7*10

    题目保证：
    - n 为正整数
    - step 为正整数
    因此无需做合法性检查。
    返回值为 int。
    """

    # result 用来保存累乘结果
    result = 1

    # current 表示当前要乘的数，初始为 1（题目规定从 1 开始）
    current = 1

    # 只要 current 还没有超过 n，就继续乘
    while current <= n:
        # 把 current 乘进结果
        result *= current

        # 下一项：在当前值基础上加 step
        current += step

    # 循环结束说明 current 已经 > n，result 即最终乘积
    return result


def test_step_product():
    # step=2：生成 1,3,5,7,9（不超过 10）
    assert step_product(10, 2) == 945
    # n=9：依然是 1,3,5,7,9
    assert step_product(9, 2) == 945
    # n=8：只能到 7（1,3,5,7）
    assert step_product(8, 2) == 105

    # step=3：生成 1,4,7,10
    assert step_product(10, 3) == 280
    # n=7：生成 1,4,7
    assert step_product(7, 3) == 28

    # step 比 n 大：只能乘到第一项 1
    assert step_product(5, 10) == 1

    # 最小边界：n=1 时，仍然只有 1
    assert step_product(1, 5) == 1

    print("All tests passed for step_product")
```



:::







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