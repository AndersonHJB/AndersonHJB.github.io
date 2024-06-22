---
title: NYU Tandon School of Engineering Homework 08
date: 2023-04-12 07:14:30
author: AI悦创
isOriginal: true
category:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
tag:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
icon: python
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
backToTop: true
toc: true
---

NOTE: The use of Python dictionaries is not allowed in this problem. At least not if you want any credit for it.

> 注意：在这个问题中不允许使用 Python 字典。如果您想得到任何积分，就不能使用字典。

Remember them good ol' DNA sequences? In this case we want to create a function `update_frequencies()`, that will do just that: receive a list containing an existing list of frequencies, as well as a string representing a new DNA sequence, and update the previous numbers to reflect their added frequencies. Your function program must also print the nucleotides being added to each frequency.

> 还记得那些 DNA 序列吗？在这种情况下，我们想创建一个名为`update_frequencies()`的函数，它将执行以下操作：接收包含现有频率列表的列表和表示新的 DNA 序列的字符串，然后更新之前的数字以反映它们的添加频率。您的函数程序还必须打印被添加到每个频率中的核苷酸。

That is, the following code:

> 也就是说，下面这段代码：

```python
def main():
    old_frequencies = [("A", 20), ("C", 23), ("T", 125), ("G", 4)]
    new_sequence = "ACCCGTTA"
    new_frequencies = update_frequencies(old_frequencies, new_sequence)
    print(new_frequencies)
main()
```

will result in the following output:

> 将产生以下输出：

```python
Number of nucleotides added: A -> 2 | C -> 3 | T -> 2 | G -> 1
[('A', 22), ('C', 26), ('T', 127), ('G', 5)]
```

You may assume that the list of old frequencies will be in that exact format and ordering (i.e. As come first, etc.). 

> 您可以假设旧频率列表的格式和顺序完全相同（例如，A先出现，等等）。

### Answer1

::: tabs

@tab me 自行考虑不使用 enumerate 的代码

```python
def update_frequencies(old_frequencies, new_sequence):
    # 初始化一个列表，用于存储每个碱基的计数
    counts = [0, 0, 0, 0]  # 顺序为 A, C, T, G

    # 遍历新的 DNA 序列，并更新每个碱基的计数
    for nucleotide in new_sequence:
        if nucleotide == "A":
            counts[0] += 1
        elif nucleotide == "C":
            counts[1] += 1
        elif nucleotide == "T":
            counts[2] += 1
        elif nucleotide == "G":
            counts[3] += 1

    new_frequencies = []

    # 输出添加的碱基及其数量
    print("Number of nucleotides added:", end=" ")

    # 更新旧频率列表，并将新频率添加到新列表中
    for i, freq_tuple in enumerate(old_frequencies):
        nucleotide, old_count = freq_tuple
        new_count = old_count + counts[i]
        new_frequencies.append((nucleotide, new_count))

        # 逐个打印输出，而非使用 join
        if i == 0:
            print(f"{nucleotide} -> {counts[i]}", end="")
        else:
            print(f" | {nucleotide} -> {counts[i]}", end="")

    print()  # 打印换行
    return new_frequencies


def main():
    old_frequencies = [("A", 20), ("C", 23), ("T", 125), ("G", 4)]
    new_sequence = "ACCCGTTA"
    new_frequencies = update_frequencies(old_frequencies, new_sequence)
    print(new_frequencies)


main()
```

@tab AI

```python
def update_frequencies(old_frequencies, new_sequence):
    counts = {"A": 0, "C": 0, "T": 0, "G": 0}
    
    for nucleotide in new_sequence:
        counts[nucleotide] += 1
    
    new_frequencies = []
    for freq_tuple in old_frequencies:
        nucleotide, old_count = freq_tuple
        new_count = old_count + counts[nucleotide]
        new_frequencies.append((nucleotide, new_count))
    
    added_counts_str = " | ".join([f"{n} -> {c}" for n, c in counts.items()])
    print(f"Number of nucleotides added: {added_counts_str}")
    
    return new_frequencies

def main():
    old_frequencies = [("A", 20), ("C", 23), ("T", 125), ("G", 4)]
    new_sequence = "ACCCGTTA"
    new_frequencies = update_frequencies(old_frequencies, new_sequence)
    print(new_frequencies)

main()
```

:::

## Problem 2: Of Code And Poetry 

> 问题2：关于代码和诗歌

**NOTE**: Problems 2 and 3 should both be written in the same file, `hw8_q2_3.py`. Your header's second line should thus look like 

> 注意：问题2和问题3都应该写在同一个文件`hw8_q2_3.py`中。因此，您的文件头的第二行应该是这样的：

this `Assignment / Part: HW8 - Q2, Q3`.

**Haiku** are poems that follow a 5-7-5 syllabic structure. That is, the first line contains 5 syllables, the second contains 7 syllables, and the last contains 5 syllables: 

> **俳句**是遵循5-7-5音节结构的诗歌。也就是说，第一行包含5个音节，第二行包含7个音节，最后一行包含5个音节：

> Clouds murmur darkly 
>
> it is a blinding habit— 
>
> gazing at the moon 



## Problem 4: Gradescope™ Logic 

> 问题4：Gradescope™逻辑

We've prepared a (completely anonymous) CSV file containing the midterm 1 grades–you can download it here. 

> 我们已经准备了一个（完全匿名的）CSV文件，其中包含期中考试1的成绩 - 您可以在这里下载它。

Write a function called `get_list_of_grades()` that will: 

> 编写一个名为 `get_list_of_grades()` 的函数，它将：

- Accept a single parameter, `grades_filepath(str)`: The address of the CSV file containing the grades data.

> 接受一个单一参数 `grades_filepath(str)`：包含成绩数据的 CSV 文件的地址。

- Return a **list of lists**, where each nested list corresponds to a question the exam, and itself contains the grade each student got on that question.

> 返回一个**嵌套列表**，其中每个嵌套列表对应于考试中的一个问题，并包含每个学生在该问题上得到的成绩。

```python
def main():
    grades = get_list_of_grades("Midterm1_scores.csv")
    print(grades)


main()
```

Output (note that the output here was heavily abbreviated using `...`, since the actual output is much larger):

> 输出（请注意，此处的输出已经使用“...”进行了大幅缩写，因为实际输出要大得多）：

```python
[[0.0, 3.0, 3.0, ..., 3.0], [0.0, 3.0, 0.0, ..., 3.0], ..., [25.0, 25.0, 25.0, ..., 30.0]]
```

For this function: 

> 对于此函数：

1. As usual with questions that involve files, you may not assume that the file exists. If, for whatever reason, the grades file fails to open, your function should simply end. 

> 与涉及文件的问题一样，您不能假设文件存在。如果由于任何原因成绩文件无法打开，则您的函数应该简单地结束。

2. You may assume that at least one grade exists per question, but not that each data point will be numerical (see last few lines of the midterm grades CSV file). 

> 您可以假设每个问题至少有一个成绩存在，但不能保证每个数据点都是数值型的（请参见期中考试成绩CSV文件的最后几行）。

3. Your function must work for any grades file of this format, regardless of how many questions the exam has. You can assume that the question score columns always come last. (i.e. you will never have a column containing any other kind of data after the grade columns).

> 您的函数必须适用于此格式的任何成绩文件，无论考试有多少个问题。您可以假设问题分数列始终出现在最后。 （即您永远不会在成绩列之后包含任何其他类型的数据列）。

Now, write a second function, `generate_statistics_report()` that will:

> 现在，编写第二个函数`generate_statistics_report()`，它将：

- Accept two parameters:「接受两个参数：」

    - `grades_filepath(str)`: The address of the CSV file containing the grades data.

    > `grades_filepath(str)`：包含成绩数据的 CSV 文件的地址。

    - `stats_filepath(str)`: The address of a file to be created containing the statistics of the exam. This parameter should default to `score_stats.csv` if the user does not specify a path. 

    > `stats_filepath(str)`：要创建包含考试统计信息的文件的地址。如果用户没有指定路径，则此参数应默认为`score_stats.csv`。

    - Use `get_list_of_grades()` to get a list of grades of each question from the `grades_filepath` file. 

    > 使用`get_list_of_grades()`函数从`grades_filepath`文件中获取每个问题的成绩列表。

    - Use this list of lists to calculate the **mean, standard deviation**, and **median** of **each of the questions on the exam** (`Q1_a` to `Q6`). To make this easier, import the `statistics` **Python module**, which contains functions to calculate the **mean, standard deviation**, and **median** of a list of numbers. 

    > 使用这个嵌套列表来计算考试中**每个问题**（`Q1_a`到`Q6`）的**平均值，标准差**和**中位数**。为了简化计算，导入`statistics` **Python模块**，其中包含计算一组数字的**平均值，标准差**和**中位数**的函数。

    - Print these statistics onto a file (`stats_filepath`) in the following format:
    
    > 将这些统计数据以以下格式打印到文件（`stats_filepath`）中：

```python
Mean,Standard Deviation,Median
```

I.e. line 1 will contain the mean, standard deviation, and median of `Q1_a`, line 2 of `Q1_b`, and so on. So, the following:

> 也就是说，第1行将包含`Q1_a`的均值、标准差和中位数，第2行包含`Q1_b`的均值、标准差和中位数，依此类推。因此，具体格式如下：

```python
def main():
    generate_statistics_report("Midterm1_scores.csv", "stats.csv")


main()
```

Will create the following file, called `stats.csv`, in your working directory (note that here, we've rounded the values to the second decimal point–this is optional):

> 将在您的工作目录中创建名为 `stats.csv` 的文件（请注意，在此处，我们将值舍入到第二个小数点，这是可选的）：

```python
Mean,Standard Deviation,Median
2.89,0.56,3.0
1.75,1.48,3.0
1.85,0.53,2.0
1.84,0.55,2.0
1.78,0.62,2.0
1.76,0.66,2.0
1.86,0.52,2.0
1.87,0.49,2.0
1.81,0.59,2.0
1.49,0.87,2.0
1.8,0.6,2.0
1.61,0.79,2.0
1.94,0.35,2.0
1.93,0.37,2.0
11.19,4.08,13.0
23.93,3.31,25.0
20.26,8.24,22.0
```

Or, in tabulated form:

> 或者，以表格形式呈现：

| Mean  | Standard Deviation | Median |
| ----- | ------------------ | ------ |
| 2.89  | 0.56               | 3.0    |
| 1.75  | 1.48               | 3.0    |
| 1.85  | 0.53               | 2.0    |
| 1.84  | 0.55               | 2.0    |
| 1.78  | 0.62               | 2.0    |
| 1.76  | 0.66               | 2.0    |
| 1.86  | 0.52               | 2.0    |
| 1.87  | 0.49               | 2.0    |
| 1.81  | 0.59               | 2.0    |
| 1.49  | 0.87               | 2.0    |
| 1.8   | 0.6                | 2.0    |
| 1.61  | 0.79               | 2.0    |
| 1.94  | 0.35               | 2.0    |
| 1.93  | 0.37               | 2.0    |
| 11.19 | 4.08               | 13.0   |
| 23.93 | 3.31               | 25.0   |
| 20.26 | 8.24               | 22.0   |

Please note that both functions must be defined in the same file. 

> 请注意，这两个函数必须定义在同一个文件中。

### Answer

::: code-tabs

@tab me

```python
def get_list_of_grades(grades_filepath):
    try:
        csvfile = open(grades_filepath, "r")
        header = csvfile.readline()  # Skip the header row
        lines = []
        line = csvfile.readline()
        while line:
            lines.append(line.strip().split(","))
            line = csvfile.readline()
        csvfile.close()
        # Initialize an empty list for each question
        num_questions = len(lines[0]) - 5
        grades = [[] for _ in range(num_questions)]
        # grades = []
        # for _ in range(num_questions):
        #     grades.append([])
        # grades = [[]] * num_questions
        # Add grades to the lists
        for line in lines:
            # print(line)
            for i, score in enumerate(line[5:]):
                # print(i, score)
                try:
                    score = float(score)
                    grades[i].append(score)
                except ValueError:
                    pass
        return grades
    except FileNotFoundError as e:
        print(e)
        return []


def main():
    grades = get_list_of_grades("Midterm1_scores.csv")
    print(grades)


main()
```

@tab Tommy

```python
def get_list_of_grades(grades_filepath):
    try:
        csvfile = open(grades_filepath, "r")
        header = csvfile.readline()  # Skip the header row
        lines = []
        line = csvfile.readline()
        while line:
            lines.append(line.strip().split(","))
            line = csvfile.readline()
        csvfile.close()
        # Initialize an empty list for each question
        num_questions = len(lines[0]) - 5
        grades = [[] for _ in range(num_questions)]
        # grades = []
        # for _ in range(num_questions):
        #     grades.append([])
        # grades = [[]] * num_questions
        # Add grades to the lists
        for line in lines:
            index = 0
            for score in line[5:]:
                try:
                    score = float(score)
                    grades[index].append(score)
                    index += 1
                except ValueError:
                    index += 1
                    pass
        return grades
    except FileNotFoundError as e:
        print(e)
        return []


def main():
    grades = get_list_of_grades("Midterm1_scores.csv")
    print(grades)


main()
```

@tab 1

```python
import csv
import statistics

def get_list_of_grades(grades_filepath):
    try:
        with open(grades_filepath, "r") as csvfile:
            grades_reader = csv.reader(csvfile)
            next(grades_reader)  # Skip header row
            
            grades = list(zip(*grades_reader))[5:]  # Transpose rows and columns, starting from the 6th column (Q1_a)
            grades = [[float(score) for score in question] for question in grades]
            return grades
    except:
        return []

def generate_statistics_report(grades_filepath, stats_filepath="score_stats.csv"):
    grades = get_list_of_grades(grades_filepath)
    with open(stats_filepath, "w") as csvfile:
        stats_writer = csv.writer(csvfile)
        stats_writer.writerow(["Mean", "Standard Deviation", "Median"])
        
        for question in grades:
            mean = round(statistics.mean(question), 2)
            stdev = round(statistics.stdev(question), 2)
            median = round(statistics.median(question), 2)
            stats_writer.writerow([mean, stdev, median])

def main():
    generate_statistics_report("Midterm1_scores.csv", "stats.csv")

if __name__ == "__main__":
    main()
```

@tab 2

```python
import statistics

def get_list_of_grades(grades_filepath):
    try:
        csvfile = open(grades_filepath, "r")
        lines = csvfile.readlines()
        csvfile.close()

        # Skip header row and split lines
        lines = [line.strip().split(',') for line in lines[1:]]

        # Transpose rows and columns, starting from the 6th column (Q1_a)
        grades = list(zip(*lines))[5:]
        grades = [[float(score) for score in question] for question in grades]
        return grades
    except:
        return []

def generate_statistics_report(grades_filepath, stats_filepath="score_stats.csv"):
    grades = get_list_of_grades(grades_filepath)
    
    csvfile = open(stats_filepath, "w")
    csvfile.write("Mean,Standard Deviation,Median\n")

    for question in grades:
        mean = round(statistics.mean(question), 2)
        stdev = round(statistics.stdev(question), 2)
        median = round(statistics.median(question), 2)
        csvfile.write(f"{mean},{stdev},{median}\n")

    csvfile.close()

def main():
    generate_statistics_report("Midterm1_scores.csv", "stats.csv")

if __name__ == "__main__":
    main()
```

@tab 3

```python
import statistics

def get_list_of_grades(grades_filepath):
    try:
        csvfile = open(grades_filepath, "r")
        header = csvfile.readline()  # Skip the header row
        
        lines = []
        line = csvfile.readline()
        while line:
            lines.append(line.strip().split(','))
            line = csvfile.readline()
        
        csvfile.close()

        # Initialize an empty list for each question
        num_questions = len(lines[0]) - 5
        grades = [[] for _ in range(num_questions)]

        # Add grades to the lists
        for line in lines:
            for i, score in enumerate(line[5:]):
                try:
                    score = float(score)
                    grades[i].append(score)
                except ValueError:
                    pass

        return grades
    except:
        return []

def generate_statistics_report(grades_filepath, stats_filepath="score_stats.csv"):
    grades = get_list_of_grades(grades_filepath)
    
    csvfile = open(stats_filepath, "w")
    csvfile.write("Mean,Standard Deviation,Median\n")

    for question in grades:
        mean = round(statistics.mean(question), 2)
        stdev = round(statistics.stdev(question), 2)
        median = round(statistics.median(question), 2)
        csvfile.write(f"{mean},{stdev},{median}\n")

    csvfile.close()

def main():
    generate_statistics_report("Midterm1_scores.csv", "stats.csv")

if __name__ == "__main__":
    main()
```

@tab 4

```python
friends = {}    # create an empty dictionary

print('----- create a dictionary -----')
friends = {
    'friend1': 'friend1@NYU.edu',
    'friend2': 'friend2@NYU.edu',
    'friend3': 'friend3@NYU.edu',
    'friend4': 'friend4@NYU.edu',
    'friend5': 'friend5@NYU.edu'
}

print(friends)  # notice that items are printed in any order

print('\n ----- retrieve value using [key] -----')
print(friends['friend3'])
print(friends['friend2'])
# print(friends['friend6'])  # what's wrong?

print('\n ----- add more items -----')
friends['friend91'] = 'friend91@virginia.edu'
friends['friend92'] = 'friend92@virginia.edu'
print(friends)

print('\n ----- reassign value to the key -----')
friends['friend2'] = 'friend-new2@virginia.edu'
print(friends)


print('\n ----- del item -----')
del friends['friend3']
# del friends['friend6']     # what's wrong?
print(friends)

print('\n ----- pop an item (and also remove it) -----')
friend4_info = friends.pop('friend4')   # return value and remove item
print('friend4 info =', friend4_info)
print(friends)

# nonexist_friend = friends.pop('noone')   # what's wrong?
nonexist_friend = friends.pop('noone', 'KeyError - return default msg')
print('try to pop a nonexistent key, provided optional message:', nonexist_friend)

print('\n ----- get number of items -----')
print(len(friends))


print('\n ----- retrieve value with get(key) -----')
print(friends.get('friend5'))   # return value
print(friends.get('friend6'))   # not found, get() returns None
print(friends.get('friend7', 'friend7 cannot be found'))   # if not found, returns default value


print('\n ----- retrieve all keys,values with items() -----')
print(friends.items())


print('\n ----- retrieve all keys with keys() -----')
print(friends.keys())


print('\n ----- retrieve all values with values() -----')
print(friends.values())


print('\n ----- work with dictionary with mixed types of content -----')
favoritefriends = {}
favoritefriends['friend1'] = ['Naruto', 'Pokemon', 'Dragon ball']
favoritefriends['friend2'] = ['Curious George', 'Pokemon']
favoritefriends['friend3'] = ['SpongeBob SquarePants', 'Pokemon']
print(favoritefriends)
print(favoritefriends['friend2'])
print(favoritefriends['friend3'])
# print(favoritefriends['noone'])
# another way to get the item's value
print(favoritefriends.get('friend2'))
print(favoritefriends.get('friend3'))

print('\n -- loop through a list of values --')
list_of_values = favoritefriends.values()
for v in list_of_values:
    print(v)

print('\n -- loop through a list of keys --')
list_of_keys = favoritefriends.keys()
for k in list_of_keys:
    print(k)

print('\n -- loop through a list of key-value pairs --')
list_of_items = favoritefriends.items()
for pair in list_of_items:
    print(pair)

print('\n -- loop through a list of key-value pairs, print key and value --')
# list_of_items = favoritefriends.items()
for somevarforkey, somevarforvalue in favoritefriends.items():
    print('key =', somevarforkey, ':', 'value =', somevarforvalue)


print('\n ----- empty the dictionary -----')
favoritefriends.clear()
print(favoritefriends)




# wrap up
dict = {}
dict[1] = 'cat'
dict['dog'] = -8
dict[False] = 'squirrel'

print(dict.keys())
print(dict.values())
print(dict)

if 'dog' in dict.keys():
    print('dog has a mapping!')
if 'cat' in dict.keys():
    print('cat has a mapping!')

dict['dog'] = 5
print(dict)


print("==== let's do an exercise ====")
# exercise
experience = {}
more_input = 'Y'
# You can do input validation to check if more_input is entered properly.
# However, let's skip that for now.
while more_input == 'Y' or  more_input == 'y':
    name_of_experience = input('Enter name of experience : ')
    company = input('Enter company : ')
    year = input('Enter year : ') # let's make this a string
    experience[year] = [name_of_experience, company]
    #print(experience)
    more_input = input('Do you want to enter more experience ? (Y/N) :')

print(experience)

# What happens if a user enters
# 'software engineer', 'IBM', '1996'
# 'manager', 'Target', '1996'


#-----------------------------------#

experience[1990] = ['sale', 'Walmart']
experience[1996] = ['software engineer', 'IBM']
experience[1995] = ['manager', 'Target']
experience[2000] = ['senior software engineer', 'Microsoft']

print("==== example for pair in dict ====")
for k in experience:
    print("key=", k, "value=", experience[k])

print("==== example for k in dict.keys() ====")
for k in experience.keys():
    print("key=", k, "value=", experience[k])

print("==== example for v in dict.values() ====")
for v in experience.values():
    print("value=", v)

print("==== example for k,v in dict.items() ====")
for k, v in experience.items():
    print("key=", k, "value=", v)

print("==== example nested loops ====")
for k, v in experience.items():     # v is a list 
    print("key =", k)
    for ele in v:
        print("   element in value =", ele)
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
