---
title: Programming Assignment 2
date: 2023-04-27 11:50:23
icon: a-jibijilianxibianji
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - uic
    - UIC Information Space
tag:
    - Python 一对一教学
    - uic
    - UIC Information Space
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

## Question - Warm up
Define a function ``front_times(str1, n)`` that **returns** n copies of the `front`. n is a non-negative int. The `front` of the string is the first 3 chars, or whatever is there if the string is less than length 3. 

**Example**

```python
str1 = 'Chocolate'
front_times(str1, 2) → 'ChoCho'

Expected output:
'ChoCho'
```

题目要求定义一个名为 `front_times` 的函数，该函数接受一个字符串 `str1` 和一个非负整数 `n` 作为输入参数。该函数的目标是返回字符串 `str1` 的前 3 个字符（或者如果字符串的长度小于 3，则返回整个字符串）重复 `n` 次的结果。

下面是详细注释的代码：

```python
def front_times(str1, n):
    # 判断字符串 str1 的长度是否大于等于 3
    if len(str1) >= 3:
        # 如果字符串长度大于等于 3，则截取前 3 个字符作为 front
        front = str1[:3]
    else:
        # 如果字符串长度小于 3，则整个字符串作为 front
        front = str1
    
    # 返回 front 重复 n 次的结果
    return front * n

str1 = 'Chocolate'
print(front_times(str1, 2))  # 预期输出: 'ChoCho'
```

这段代码首先检查字符串 `str1` 的长度是否大于等于 3。如果是，则将前 3 个字符作为 `front`。如果长度小于 3，则将整个字符串作为 `front`。最后，函数返回 `front` 重复 `n` 次的结果。

## Main Question

Create a Python class named `teacher` that has a constructor `__init__`. The constructor takes arguments `(self, first_name, last_name, year_birth, student_rating)` and initiate an instance with the following **attributes**:

```python
    first_name
    last_name
    year_birth
    student_rating
    email = first_name.lower() + last_name.lower() + "@uic.edu.cn"
    courses = []
    age = self.this_year - year_birth
    friendliness = 50
```

`this_year` is a **class attribute** and it has the integer value 2023.

The class has the following methods with description in the comments below:

```python
   def quality_class(self):
        # Create a new variable called quality, and return quality according to the following conditions:
        # if student_rating is above or equal 80, assign "excellent" to the variable quality;
        # if student_rating is between 60 (include 60) and 80, assign "good" to the variable quality;
        # if student_rating is between 40 (include 40) and 60, assign "average" to the variable quality;
        # if student_rating is lower than 40, assign "bad" to the variable quality.
        # return the variable quality
    
    
    def introduce(self):
        # Return the message: "Hi, my name is {}. I am your teacher. Students think that I am a(n) {} teacher.".format(self.first_name, quality) 
        # The variable quality is the output of method quality_class(self)
    
    
    def add_course(self, new_course_name): 
        # This method adds the new_course_name to the courses list and returns a message. 
        # The max number of courses a teacher can teach is 5.
        # When the number of course exceed the limit, return the message: "Course limit reached: {} not added.".format(new_course_name)
        # Otherwise, return the message: "{} added. Total courses to teach is {}.".format(new_course_name, n_courses+1)
    
    
    def scold_student(self):
        # student_rating should not be below 0.
        # Decrease student_rating by 10 and return the message: "teacher {} scold the students because they do not submit the assignment. His/her rating decreased to {}.".format(self.last_name, self.student_rating)
    
    
    def help_student(self):
        # student_rating should not be above 100.
        # Increase student_rating by 10 and return the message: "teacher {} help the students to work on the assignment. His/her rating increased to {}.".format(self.last_name,  self.student_rating)
    
    
    def friendly_score(self):
        # Return the friendly score of the teacher and assign the score to self.friendliness attribute.
        # The score is calculated using the formula below.
        # n_courses = len(self.courses)
        # score = 0.5 * self.student_rating + 50*(1 - n_courses/5)
```

```python
# Important notes to receive full score
# 1. Do not change the name of the class.
# 2. The constructor does not need to return anything.
# 3. All other methods returns either a string message or a numeric variable (do not print).

class teacher:
    # You code:
```

```python
# Test your code
instance = teacher("Mike", "Li", 1985, 80)
print(instance.introduce())
print(instance.help_student())
print(instance.scold_student())
print(instance.friendly_score())
print(instance.courses)
print(instance.add_course("Python"))
print(instance.add_course("Communication"))
```

```python
# Test your code
print(instance.age)
print(instance.email)
print(instance.friendliness)
print(instance.this_year)
```

```python
# The following should run without error messages
try:
    instance = teacher("Amy", "Liang", 1975, 10)
except:
    raise("exception")
```



## 题目解析

### 1. 题目解释

题目要求创建一个名为 `teacher` 的 Python 类，该类具有一个名为 `__init__` 的构造函数。构造函数接受参数 `(self, first_name, last_name, year_birth, student_rating)` 并使用以下属性初始化一个实例：

```py
    first_name
    last_name
    year_birth
    student_rating
    email = first_name.lower() + last_name.lower() + "@uic.edu.cn"
    courses = []
    age = self.this_year - year_birth
    friendliness = 50
```

`this_year` 是一个类属性，其整数值为 2023。

该类具有以下方法，注释中描述了方法的功能：

要求不要改变类名，构造函数不需要返回任何内容，其他方法返回字符串消息或数值变量，而不是打印输出。

以下是题目的中文翻译：

创建一个名为 `teacher` 的 Python 类，该类有一个名为 `__init__` 的构造函数。构造函数接受参数 `(self, first_name, last_name, year_birth, student_rating)` 并使用以下属性初始化一个实例：

```py
    first_name
    last_name
    year_birth
    student_rating
    email = first_name.lower() + last_name.lower() + "@uic.edu.cn"
    courses = []
    age = self.this_year - year_birth
    friendliness = 50
```

`this_year` 是一个类属性，其整数值为 2023。

该类具有以下方法，注释中描述了方法的功能：

请注意以下几点以获得满分：

1. 不要更改类名。
2. 构造函数不需要返回任何内容。
3. 所有其他方法要么返回字符串消息，要么返回数值变量（不要打印）。

抱歉，我的上一条回答没有完整地翻译题目。下面是关于类的方法的详细翻译和解释。

该类具有以下方法，注释中描述了方法的功能：

```py
    def quality_class(self):
        # 创建一个新变量 quality，根据以下条件返回 quality：
        # 如果 student_rating 大于或等于 80，将变量 quality 赋值为 "excellent"；
        # 如果 student_rating 在 60（包括 60）和 80 之间，将变量 quality 赋值为 "good"；
        # 如果 student_rating 在 40（包括 40）和 60 之间，将变量 quality 赋值为 "average"；
        # 如果 student_rating 小于 40，将变量 quality 赋值为 "bad"。
        # 返回变量 quality

    def introduce(self):
        # 返回消息："Hi, my name is {}. I am your teacher. Students think that I am a(n) {} teacher.".format(self.first_name, quality)
        # 变量 quality 是方法 quality_class(self) 的输出

    def add_course(self, new_course_name):
        # 此方法将 new_course_name 添加到 courses 列表中，并返回一条消息。
        # 老师最多可以教授 5 门课程。
        # 当课程数量超过限制时，返回消息："Course limit reached: {} not added.".format(new_course_name)
        # 否则，返回消息："{} added. Total courses to teach is {}.".format(new_course_name, n_courses + 1)

    def scold_student(self):
        # student_rating 不应低于 0。
        # 将 student_rating 减少 10，并返回消息："teacher {} scold the students because they do not submit the assignment. His/her rating decreased to {}.".format(self.last_name, self.student_rating)

    def help_student(self):
        # student_rating 不应高于 100。
        # 将 student_rating 增加 10，并返回消息："teacher {} help the students to work on the assignment. His/her rating increased to {}.".format(self.last_name,  self.student_rating)

    def friendly_score(self):
        # 返回教师的友好得分，并将得分赋给 self.friendliness 属性。
        # 使用以下公式计算得分。
        # n_courses = len(self.courses)
        # score = 0.5 * self.student_rating + 50 * (1 - n_courses / 5)
```

在我之前的回答中，我已经提供了详细的代码实现以及注释。同时，我也提供了测试代码来帮助验证代码是否正确实现了题目要求的功能。请参考前面的回答以获取完整的代码实现。

### 2. 注意点

```python
# Important notes to receive full score
# 1. Do not change the name of the class.
# 2. The constructor does not need to return anything.
# 3. All other methods returns either a string message or a numeric variable (do not print).
```

这个要求的意思是：

1. 构造函数（`__init__` 方法）不需要有 `return` 语句，因为它的目的是初始化一个实例，而不是返回一个值。
2. 对于其他方法，它们应当返回字符串消息或数值变量，而不是直接打印出结果。这意味着你需要使用 `return` 语句来返回一个值，而不是在方法内部使用 `print` 语句。

在我们之前提供的代码中，已经满足了这个要求。例如：

- `introduce` 方法返回一个字符串消息，包含教师的名字和质量等级。
- `add_course` 方法返回一个字符串消息，描述课程是否被成功添加或课程数量超过限制。
- `friendly_score` 方法返回一个数值变量，表示教师的友好程度得分。

这样设计的好处是，这些方法的返回值可以被其他部分的代码（如主程序或其他函数）使用和处理。如果这些方法直接打印出结果，它们的输出将无法被其他代码方便地使用。

::: code-tabs

@tab 1

```python
# Important notes to receive full score
# 1. Do not change the name of the class.
# 2. The constructor does not need to return anything.
# 3. All other methods returns either a string message or a numeric variable (do not print).

class teacher:
    this_year = 2023  # 类属性

    def __init__(self, first_name, last_name, year_birth, student_rating):
        self.first_name = first_name
        self.last_name = last_name
        self.year_birth = year_birth
        self.student_rating = student_rating
        self.email = first_name.lower() + last_name.lower() + "@uic.edu.cn"
        self.courses = []
        self.age = self.this_year - year_birth
        self.friendliness = 50

    def quality_class(self):
        # 根据 student_rating 的值，返回 quality 变量
        if self.student_rating >= 80:
            quality = "excellent"
        elif self.student_rating >= 60:
            quality = "good"
        elif self.student_rating >= 40:
            quality = "average"
        else:
            quality = "bad"
        return quality

    def introduce(self):
        # 返回一条包含姓名和 quality 变量值的信息
        quality = self.quality_class()
        return "Hi, my name is {}. I am your teacher. Students think that I am a(n) {} teacher.".format(self.first_name, quality)

    def add_course(self, new_course_name):
        # 向课程列表中添加新课程，最多可添加 5 门课程
        n_courses = len(self.courses)
        if n_courses >= 5:
            return "Course limit reached: {} not added.".format(new_course_name)
        else:
            self.courses.append(new_course_name)
            return "{} added. Total courses to teach is {}.".format(new_course_name, n_courses + 1)

    def scold_student(self):
        # student_rating 不得低于 0
        self.student_rating = max(0, self.student_rating - 10)
        return "teacher {} scold the students because they do not submit the assignment. His/her rating decreased to {}.".format(self.last_name, self.student_rating)

    def help_student(self):
        # student_rating 不得高于 100
        self.student_rating = min(100, self.student_rating + 10)
        return "teacher {} help the students to work on the assignment. His/her rating increased to {}.".format(self.last_name, self.student_rating)

    def friendly_score(self):
        # 计算并返回教师的友好程度得分
        n_courses = len(self.courses)
        score = 0.5 * self.student_rating + 50 * (1 - n_courses / 5)
        self.friendliness = score
        return score
```

@tab 2

```python
class teacher:
    this_year = 2023  # 类属性

    def __init__(self, first_name, last_name, year_birth, student_rating):
        self.first_name = first_name
        self.last_name = last_name
        self.year_birth = year_birth
        self.student_rating = student_rating
        self.email = first_name.lower() + last_name.lower() + "@uic.edu.cn"
        self.courses = []
        self.age = self.this_year - year_birth
        self.friendliness = 50

    def quality_class(self):
        if self.student_rating >= 80:
            quality = "excellent"
        elif self.student_rating >= 60:
            quality = "good"
        elif self.student_rating >= 40:
            quality = "average"
        else:
            quality = "bad"
        return quality

    def introduce(self):
        quality = self.quality_class()
        return "Hi, my name is {}. I am your teacher. Students think that I am a(n) {} teacher.".format(self.first_name, quality)

    def add_course(self, new_course_name):
        n_courses = len(self.courses)
        if n_courses >= 5:
            return "Course limit reached: {} not added.".format(new_course_name)
        else:
            self.courses.append(new_course_name)
            return "{} added. Total courses to teach is {}.".format(new_course_name, n_courses + 1)

    def scold_student(self):
        self.student_rating = max(0, self.student_rating - 10)
        return "teacher {} scold the students because they do not submit the assignment. His/her rating decreased to {}.".format(self.last_name, self.student_rating)

    def help_student(self):
        self.student_rating = min(100, self.student_rating + 10)
        return "teacher {} help the students to work on the assignment. His/her rating increased to {}.".format(self.last_name, self.student_rating)

    def friendly_score(self):
        n_courses = len(self.courses)
        score = 0.5 * self.student_rating + 50 * (1 - n_courses / 5)
        self.friendliness = score
        return score
```

@tab 3

```python
class teacher:
    this_year = 2023  # 类属性，表示当前年份

    def __init__(self, first_name, last_name, year_birth, student_rating):
        self.first_name = first_name  # 教师的名字
        self.last_name = last_name  # 教师的姓氏
        self.year_birth = year_birth  # 教师出生的年份
        self.student_rating = student_rating  # 教师的学生评分
        self.email = first_name.lower() + last_name.lower() + "@uic.edu.cn"  # 教师的电子邮件地址
        self.courses = []  # 教师教授的课程列表
        self.age = self.this_year - year_birth  # 计算教师的年龄
        self.friendliness = 50  # 教师的友好程度初始值

    def quality_class(self):
        # 根据教师的学生评分确定教师的质量等级
        if self.student_rating >= 80:
            quality = "excellent"
        elif self.student_rating >= 60:
            quality = "good"
        elif self.student_rating >= 40:
            quality = "average"
        else:
            quality = "bad"
        return quality  # 返回教师的质量等级

    def introduce(self):
        quality = self.quality_class()  # 调用 quality_class 方法获取教师的质量等级
        # 返回教师的自我介绍信息
        return "Hi, my name is {}. I am your teacher. Students think that I am a(n) {} teacher.".format(self.first_name, quality)

    def add_course(self, new_course_name):
        n_courses = len(self.courses)  # 当前教师教授的课程数量
        # 判断课程数量是否超过限制
        if n_courses >= 5:
            return "Course limit reached: {} not added.".format(new_course_name)  # 返回课程添加失败的信息
        else:
            self.courses.append(new_course_name)  # 将新课程添加到课程列表中
            # 返回课程添加成功的信息，包括新课程名称和更新后的课程数量
            return "{} added. Total courses to teach is {}.".format(new_course_name, n_courses + 1)

    def scold_student(self):
        # 更新教师的学生评分，确保它不会低于 0
        self.student_rating = max(0, self.student_rating - 10)
        # 返回教师批评学生后的信息，包括教师姓氏和更新后的学生评分
        return "teacher {} scold the students because they do not submit the assignment. His/her rating decreased to {}.".format(self.last_name, self.student_rating)

    def help_student(self):
        # 更新教师的学生评分，确保它不会超过 100
        self.student_rating = min(100, self.student_rating + 10)
        # 返回教师帮助学生后的信息，包括教师姓氏和更新后的学生评分。
                return "teacher {} help the students to work on the assignment. His/her rating increased to {}.".format(self.last_name, self.student_rating)

    def friendly_score(self):
        n_courses = len(self.courses)  # 当前教师教授的课程数量
        # 根据公式计算教师的友好程度得分
        score = 0.5 * self.student_rating + 50 * (1 - n_courses / 5)
        self.friendliness = score  # 将计算出的得分赋值给 friendliness 属性
        return score  # 返回友好程度得分

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

