---
title: Zoomerbinis
date: 2024-05-17 10:36:51
author: AI悦创
isOriginal: true
icon: java
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

## Background

Zoomerbinis are mystical creatures known for their brilliant minds, particularly in solving logic puzzles. Like their [forebearers](https://en.wikipedia.org/wiki/Zoombinis), each one has a distinct combination of attributes that defines their style and unique character. Unfortunately, while brimming with potential, they're a bit of a shy bunch. They're struggling to form optimal study groups for their university subjects, and require a (would you guess it) *Python programmer* to come to their rescue!

Thankfully, the Zoomerbinis have your help and guidance. Your challenge in this project is to write some Python code to help them compute an optimal set of study groups, thus enabling them to reach their full potential!

![Three Zoomerbinis](https://blog.images.bornforthis.cn/docs-images/sha256/1e/1e198a4c496afc6f99e8627d6b1213f8f780f3b859eaa82edb14c9ed0b689b55.png)

## Zoomerbinis

There are 256 "types" of Zoomerbinis, each having a corresponding numeric identifier (a "type ID") represented as an integer between 0 and 255 inclusive. The figure below depicts the full mapping. You can also view an enlarged version of the same figure [here](https://2024s1-comp10001-d7ccc59f4734fd6399530ec2572d0fddd929b27d8ca441.pages.gitlab.unimelb.edu.au/).

![Zoomerbini Type ID Mapping (click ](https://blog.images.bornforthis.cn/docs-images/sha256/f3/f3141cf5b919ea63ca3f19ed40822588d8c2f598d303acbdec0f88a5678fee7e.png)

If you study the mapping closely, you'll notice that it is far from random – there are certain attributes that different subsets of Zoomerbini types share, and these can be inferred from the type ID numbers themselves. Indeed, it is the unique *combination* of features that defines any one type.

Specifically, there are **four** attributes, each of which can take exactly one of four values to uniquely define a Zoomerbini type. First, each one will have a unique hair style or choice of hat. Second, each has a favourite colour (note that a Zoomerbini will always either dye their hair that colour or wear a hat of that same colour!). Third, each has a preferred social media platform. Finally, each has a "fashion accessory" for some extra flair!

Here are the possible values and corresponding visualisations for each attribute:

**Hair (or hat) style** 

![Hair/Hat Attribute](https://blog.images.bornforthis.cn/docs-images/sha256/c3/c32772cb28367f5bd17c5482dea21269279092cda8a472affee3b3612262567c.png)

**Favourite colour**

![Favourite Colour Attribute](https://blog.images.bornforthis.cn/docs-images/sha256/10/10ae989ff05b5b69ab9764c27f9ef377ba42a3fef8de9f01e054fcdad635e7fd.png)

**Preferred social media**

![Social Attribute](https://blog.images.bornforthis.cn/docs-images/sha256/72/728d6f77dd47e806a1b6381327e7c186c3877abaafd6cbade9ff81d405125531.png)

**Fashion accessory**

![Fashion Accessory Attribute](https://blog.images.bornforthis.cn/docs-images/sha256/4e/4e636e64ff77295073e117ba0d3428efb7bfe8f7eb42d3d99398b46c4a61b0a5.png)

## Task 1: Decoding Attributes (3 marks)

Write a function `zbini_attrs(type_id)` that converts a Zoomerbini type ID to a tuple of strings representing the four underlying attributes in the following order: Hair/hat style, favourite colour, fashion accessory and preferred social media platform.

Here are the possible values (as string literals) for each attribute:

- Hair/Hat: `"wavy"`, `"curly"`, `"cap"` or `"beanie"`
- Colour: `"red"`, `"blue"`, `"yellow"` or `"green"`
- Accessory: `"sneakers"`, `"bowtie"`, `"scarf"` or `"sunglasses"`
- Social: `"tiktok"`, `"instagram"`, `"snapchat"` or `"discord"`

The parameter `type_id` may be assumed to be a numeric whole number value (integer). The returned attributes for a given ID should match those shown in the full [mapping table](https://2024s1-comp10001-d7ccc59f4734fd6399530ec2572d0fddd929b27d8ca441.pages.gitlab.unimelb.edu.au/) in all cases.

If a `type_id` outside the valid range is given, the function should instead return `None`.

***Hint:** There are multiple ways to solve this problem, but regardless of which one you pick, ensure that it is not overly redundant. In particular, you should be trying to identify pattern(s) in the way that type ID numbers map to Zoomerbini attributes and computing a result based on these in a concise and well structured manner.*

*Example Calls:*

```python
>>> print(zbini_attrs(0))
('wavy', 'red', 'sneakers', 'tiktok')
>>> print(zbini_attrs(96))
('curly', 'yellow', 'sneakers', 'tiktok')
>>> print(zbini_attrs(351))
None
```

```python
def zbini_attrs(type_id):
    # Define the list of attribute
    hats=["wavy", "curly", "cap", "beanie"]
    colors=["red", "blue", "yellow", "green"]
    accessories=["sneakers", "bowtie", "scarf", "sunglasses"]
    social_apps=["tiktok", "instagram", "snapchat", "discord"]
    # Generate all possible combinations
    combinations=[
        (hat, color, accessory, social)
        for hat in hats
        for color in colors
        for accessory in accessories
        for social in social_apps
    ]
    if type_id<0 or type_id >255:  # Set input number range
        return None
    return combinations[type_id]
```



## Task 2: Checking Group Validity (3 marks)

While Zoomerbinis are usually quite amicable with one another, they have a rather specific set of preferences when it comes to forming study groups! Specifically, a study group is **valid** if for **each** of the four attributes:

- All members have the same attribute value, *or*;
- All members have unique attribute values, i.e. no two members share the same attribute value.

Additionally,

- A valid group can only have either 3 or 4 members, *and*;
- Each member must study at least one subject in common with every other member of the group.

Write a function `valid_study_group(zbinis, group)` that computes the validity of a given study group of Zoomerbinis, as per the above definition.

The parameter `zbinis` will be a list of Zoomerbinis, each represented as a `(type_id, subjects)` tuple, where `type_id` is a Zoomerbini type ID (0 to 255 inclusive) and `subjects` is a list of non-empty strings denoting the subjects the respective Zoomerbini is studying.

The parameter `group` will be a tuple of *indices* into the `zbinis` list and reflects the group of Zoomerbinis being checked for validity (`zbinis` may be of a different length to `group`). Note that while Zoomerbinis in a group may share the same type IDs, they must be *distinct* individuals in `zbinis`. In other words, if an index appears more than once in `group`, the group is invalid.

Your function should return a tuple containing two elements:

- A boolean value denoting the *validity* of the respective group (`True` if the group is valid or `False` if not).
- A positive integer representing the number of subjects all members of the group share in common with one another, or otherwise `None` if the group is not valid.

A working version of the `zbini_attrs(type_id)` function from Task 1 has been provided to help you with this task.

*Example Calls:*

```python
>>> example_zbinis = [(0, ['FoC', 'Calc 1', 'Logic']), (108, ['FoA', 'Calc 2', 'Logic']), (148, ['FoC', 'Calc 1', 'Logic']), (248, ['FoC', 'Calc 1', 'Logic']), (0, ['Calc 2', 'History', 'Politics']), (108, ['FoC', 'Calc 1', 'Logic'])]
>>> valid_study_group(example_zbinis, (0, 1, 3))
(True, 1)
>>> valid_study_group(example_zbinis, (0, 1, 5))
(False, None)
>>> valid_study_group(example_zbinis, (0, 1, 2, 3))
(True, 1)
>>> valid_study_group(example_zbinis, (1, 2, 3, 4))
(False, None)
```

```python
from hidden import zbini_attrs

def valid_study_group(zbinis, group):
   
  # Inspect if all members have same attribute value or unique values
    type_ids = set(zbinis[i][0] for i in group)
    if len(type_ids) != 1 and len(type_ids) != len(group):
        return False, None
    
 # Check if the quantity of group is valid
    if len(group) not in [3, 4]:
        return False, None
  # Check if each member own at least one same subject with other person
    subjects = set(zbinis[group[0]][1])
    for i in group[1:]:
        subjects = subjects.intersection(zbinis[i][1])
        if not subjects:
            return False, None

    return True, len(subjects)
```



## Task 3: Possible Study Groups (4 marks)

Write a function `possible_study_groups(zbinis)`. The parameter `zbinis` is a list of Zoomerbinis of the same form as in Task 2.

The function should return a list representing all the possible ways a **valid** study group could be chosen from `zbinis`. Each element is a tuple where:

- The first element is a tuple of indices representing a group. This tuple should contain exactly three or four unique indices into the `zbinis` list in ascending order.
- The second element is a **score** for the group, derived using a "points" system (described below).

For example, if `zbinis` was of length four, there could be *up to* five tuples of indices in the result with the first element in each being: `(0, 1, 2, 3)`, `(0, 1, 2)` , `(0, 1, 3)` , `(0, 2, 3)` and `(1, 2, 3)`

Each group's score (the second element in each returned tuple) is derived using a "points" system according to the following rules:

- Add **three** points for each subject shared by all members of the group, *and*;
- Add **one** point if the group has three members, or **two** points if the group has four members.

The returned groups should be sorted in **descending** order using the above scoring system, that is, higher scored groups should come before lower scored groups in the resulting list.

If there is ever a tie in scores, the group's indices should be used as a tiebreaker. Each index should be considered in turn (left to right) until one facilitates a tiebreak. For example, the grouping `(0, 2, 3)` should come before `(1, 2, 3)`, and `(0, 1, 2)` should come before `(0, 1, 3)`.

Groups that are invalid as per the same rules as in Task 2 should be excluded from the returned list altogether. A working version of the respective `valid_study_group(zbinis, group)` function has been provided to help you with this task.

*Example Calls:*

```python
>>> print(possible_study_groups([(198, ['FoC']), (138, ['FoC', 'Calc 1']), (14, ['FoC', 'Calc 1']), (66, ['Calc 1'])]))
[((0, 1, 2), 4), ((1, 2, 3), 4)]
>>> print(possible_study_groups([(198, ['FoC']), (138, ['FoC', 'Calc 1']), (14, ['FoC']), (66, ['FoC'])]))
[((0, 1, 2, 3), 5), ((0, 1, 2), 4), ((0, 1, 3), 4), ((0, 2, 3), 4), ((1, 2, 3), 4)]
>>> print(possible_study_groups([(198, ['FoC']), (138, ['Calc 1']), (14, ['Calc 1']), (66, ['FoC'])]))
[]
```

```python
from hidden import valid_study_group

def possible_study_groups(zbinis):
```



## Task 4: Allocating Study Groups (5 marks)

In this task you will finally allocate the Zoomerbinis to their study groups!

Write a function `alloc_study_groups(zbinis)` where the parameter `zbinis` is a list of Zoomerbinis, each represented as a `(type_id, subjects)` tuple (this is again of the same form as in the previous two tasks). The function should compute a set of groups of `zbinis` such that the number of Zoomerbinis without a group is **minimised**. We call this an *optimal* grouping.

The return value must be a list of tuples of indices into the `zbinis` list, where each tuple corresponds to a valid group in descending score order (following the same ordering rules as in Task 3). Importantly, a Zoomerbini cannot be allocated to more than one group, that is, any index in the result should appear at most once.

In the case that there are multiple optimal groupings, the grouping with the highest *combined score* out of these should be returned. This score is computed by summing up all the individual group scores that make up a given grouping (each group should be scored using the same points system as described in Task 3).

If there is still a tie between optimal groupings after considering combined scores, your function should preference the grouping with the smallest *minimum index*. For example, in the grouping `[(2, 3, 4), (6, 7, 9)]` the minimum index is 2, and hence should be preferred over `[(3, 4, 5), (6, 7, 9)]` which has a minimum index of 3. If more than one optimal grouping has the same minimum index, the second-to-minimum index should be used to tiebreak instead (or the third-to-minimum if there's a tie on both the minimum and second-to-minimum indices, etc). No further tiebreaking beyond this point is required.

Since this is a computationally expensive problem to solve, you may assume the length of `zbinis` will be at most 10. A working version of the `possible_study_groups(zbinis)` function has been provided to help you with this task.

*Example Calls:*

```python
>>> print(alloc_study_groups([(198, ['FoC']), (198, ['FoC']), (138, ['FoC']), (14, ['FoC'])]))
[(0, 2, 3)]
>>> print(alloc_study_groups([(198, ['FoC']), (138, ['FoC', 'Calc 1']), (14, ['FoC', 'Calc 1']), (66, ['FoC', 'Calc 1'])]))
[(0, 1, 2, 3)]
>>> print(alloc_study_groups([(198, ['FoC', 'Logic']), (138, ['Calc 1']), (14, ['Calc 1']), (66, ['FoC', 'Logic']), (10, ['FoC', 'Logic']), (142, ['FoC', 'Logic']), (66, ['Calc 1'])]))
[(0, 3, 4, 5), (1, 2, 6)]
```

```python
from hidden import possible_study_groups

def alloc_study_groups(zbinis):
```



```python
def zbini_attrs(type_id):
    # Define the list of attribute
    hats = ["wavy", "curly", "cap", "beanie"]
    colors = ["red", "blue", "yellow", "green"]
    accessories = ["sneakers", "bowtie", "scarf", "sunglasses"]
    social_apps = ["tiktok", "instagram", "snapchat", "discord"]
    # Generate all possible combinations
    combinations = [
        (hat, color, accessory, social)
        for hat in hats
        for color in colors
        for accessory in accessories
        for social in social_apps
    ]
    if type_id < 0 or type_id > 255:  # Set input number range
        return None
    return combinations[type_id]


def valid_study_group(zbinis, group):
    # Inspect if all members have same attribute value or unique values
    type_ids = set(zbinis[i][0] for i in group)
    if len(type_ids) != 1 and len(type_ids) != len(group):
        return False, None

    # Check if the quantity of group is valid
    if len(group) not in [3, 4]:
        return False, None
    # Check if each member own at least one same subject with other person
    subjects = set(zbinis[group[0]][1])
    for i in group[1:]:
        subjects = subjects.intersection(zbinis[i][1])
        if not subjects:
            return False, None

    return True, len(subjects)


from itertools import combinations


def possible_study_groups(zbinis):
    results = []
    # 生成所有可能的 3 或 4 人组合
    for group_size in [3, 4]:
        for group in combinations(range(len(zbinis)), group_size):
            valid, common_subjects_count = valid_study_group(zbinis, group)
            if valid:
                # 计算得分: 每个共同科目三分，三人小组额外一分，四人小组额外两分
                score = 3 * common_subjects_count + (1 if group_size == 3 else 2)
                results.append((group, score))
    # 根据得分和索引降序排序
    results.sort(key=lambda x: (-x[1], x[0]))
    return results


# print(possible_study_groups([(198, ['FoC']), (138, ['FoC', 'Calc 1']), (14, ['FoC', 'Calc 1']), (66, ['Calc 1'])]))
# print(possible_study_groups([(198, ['FoC']), (138, ['FoC', 'Calc 1']), (14, ['FoC']), (66, ['FoC'])]))
# print(possible_study_groups([(198, ['FoC']), (138, ['Calc 1']), (14, ['Calc 1']), (66, ['FoC'])]))
#
# def alloc_study_groups(zbinis):
#     possible_groups = possible_study_groups(zbinis)
#
#     dp = {}  # 动态规划存储最优结果
#     backtrace = {}  # 回溯最优路径
#
#     def search(remaining_indices):
#         if not remaining_indices:
#             return 0, []
#         if remaining_indices in dp:
#             return dp[remaining_indices]
#
#         best_score = 0
#         best_combo = []
#
#         # 遍历所有有效小组
#         for group_tuple in possible_groups:
#             group, score = group_tuple
#             group_set = set(group)
#             if group_set.issubset(remaining_indices):
#                 new_remaining_indices = tuple(sorted(set(remaining_indices) - group_set))
#                 current_score, combo = search(new_remaining_indices)
#                 current_score += score
#                 if current_score > best_score:
#                     best_score = current_score
#                     best_combo = [group] + combo
#
#         dp[remaining_indices] = (best_score, best_combo)
#         return dp[remaining_indices]
#
#     all_indices = tuple(range(len(zbinis)))
#     _, result = search(all_indices)
#
#     # 需要调整排序逻辑，使用得分和组合的详细内容进行排序
#     result.sort(
#         key=lambda x: (-sum(group_score for group in x for _, group_score in possible_groups if group == group), x))
#     return result
#
# def alloc_study_groups(zbinis):
#     possible_groups = possible_study_groups(zbinis)
#     # 初始化 dp 表，key 为成员组合的集合，value 为 (最高分数, 最佳组合)
#     dp = {frozenset(): (0, [])}
#
#     # 遍历所有可能的组合
#     for group, score in possible_groups:
#         # 将当前的组合转换为集合
#         group_set = frozenset(group)
#         # 遍历已经计算过的组合
#         new_dp = dp.copy()
#         for existing in dp:
#             # 如果当前组合与已有组合不冲突，则尝试添加
#             if group_set.isdisjoint(existing):
#                 new_comb = existing | group_set
#                 new_score = dp[existing][0] + score
#                 if new_comb not in dp or new_score > dp[new_comb][0]:
#                     new_dp[new_comb] = (new_score, dp[existing][1] + [group])
#         dp = new_dp
#
#     # 找到包含所有成员的最优解
#     all_indices = frozenset(range(len(zbinis)))
#     if all_indices in dp:
#         return sorted(dp[all_indices][1], key=lambda x: (-len(x), x))
#     return []


def alloc_study_groups(zbinis):
    # 获取所有可能的有效小组及其得分
    possible_groups = possible_study_groups(zbinis)

    # 存储最优解
    best_solution = None
    best_score = float('-inf')

    # 使用回溯法找到最佳的小组组合
    def backtrack(used_indices, current_solution, current_score):
        nonlocal best_solution, best_score
        if len(used_indices) == len(zbinis):  # 如果覆盖了所有成员
            if current_score > best_score:  # 如果当前得分更高
                best_solution = current_solution[:]
                best_score = current_score
            return

        for group, score in possible_groups:
            if all(idx in used_indices for idx in group):
                continue  # 如果小组的所有成员已经在已用列表中，跳过

            # 尝试添加这个小组
            new_used_indices = used_indices | set(group)
            backtrack(new_used_indices, current_solution + [group], current_score + score)

    # 开始回溯
    backtrack(set(), [], 0)

    if best_solution:
        return sorted(best_solution, key=lambda x: (-len(x), x))
    return []



print(alloc_study_groups([(198, ['FoC']), (198, ['FoC']), (138, ['FoC']), (14, ['FoC'])]))

print(alloc_study_groups([(198, ['FoC']), (138, ['FoC', 'Calc 1']), (14, ['FoC', 'Calc 1']), (66, ['FoC', 'Calc 1'])]))

print(alloc_study_groups(
    [(198, ['FoC', 'Logic']), (138, ['Calc 1']), (14, ['Calc 1']), (66, ['FoC', 'Logic']), (10, ['FoC', 'Logic']),
     (142, ['FoC', 'Logic']), (66, ['Calc 1'])]))
```



## Task: Time Series Forecasting on a Synthetic Data Set
- **Data**: Available on Brightspace `train.csv`

### Specifications:
- **Model Requirement**: Implement a recurrent neural network (RNN) in PyTorch, which takes as input:
  - A recent history of time steps (e.g., $t, t-1, t-2, t-3$) to predict five future time steps ($t+1, t+2, t+3, t+4, t+5$).
  - You can use any RNN models taught in the class.
  - You may determine the length of the history fed into the model.

- **Code Structure**:
  1. Your own RNN model implementation (`model.py`).
  2. Training code executable from the command line (`train.py`).
  3. A list of Python packages and versions used (`requirements.txt`).

- **Submission**:
  - Submit your source code and a dumpy file of the best model you've trained.
  - The model and source code should be in the same folder, named by your group ID (e.g., `SUBMISSION_NC_PA_24_1`).
  - For information on how to save/load the model, see [PyTorch Tutorial on Saving & Loading Models](https://pytorch.org/tutorials/beginner/saving_loading_models.html).







欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
