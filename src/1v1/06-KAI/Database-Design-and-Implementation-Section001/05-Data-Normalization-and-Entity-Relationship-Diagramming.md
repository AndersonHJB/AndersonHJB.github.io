---
title: Data Normalization and Entity-Relationship Diagramming
icon: icon_SQL
date: 2023-10-30 13:09:55
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - php
    - 留学生作业辅导
tag:
    - 纽约大学一对一
    - NYU 1v1
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

The following table, representing students' grades in courses at a university, is already in [first normal form](https://knowledge.kitchen/A_Simple_Guide_to_Five_Normal_Forms_in_Relational_Database_Theory#FIRST_NORMAL_FORM) (1NF) - all records have the same number of fields, and there is only one value per field.

| assignment_id | student_id | due_date | professor | assignment_topic                | classroom | grade | relevant_reading    | professor_email   |
| :------------ | :--------- | :------- | :-------- | :------------------------------ | :-------- | :---- | :------------------ | :---------------- |
| 1             | 1          | 23.02.21 | Melvin    | Data normalization              | WWH 101   | 80    | Deumlich Chapter 3  | l.melvin@foo.edu  |
| 2             | 7          | 18.11.21 | Logston   | Single table queries            | 60FA 314  | 25    | Dümmlers Chapter 11 | e.logston@foo.edu |
| 1             | 4          | 23.02.21 | Melvin    | Data normalization              | WWH 101   | 75    | Deumlich Chapter 3  | l.melvin@foo.edu  |
| 5             | 2          | 05.05.21 | Logston   | Python and pandas               | 60FA 314  | 92    | Dümmlers Chapter 14 | e.logston@foo.edu |
| 4             | 2          | 04.07.21 | Nevarez   | Spreadsheet aggregate functions | WWH 201   | 65    | Zehnder Page 87     | i.nevarez@foo.edu |
| ...           | ...        | ...      | ...       | ...                             | ...       | ...   | ...                 | ...               |

## Assumptions

This data represents information about students' grades in courses at a university. The dependencies reflect the reality of how courses work in most universities.

- each course can be taught by multiple professors in different sections
- each professor might teach multiple sections of the same course
- each section meets in a specific classroom with a specific professor
- different sections of the same course may meet in different classrooms, even if the professor is the same
- professors give assignments, with specific due dates
- professors give readings that are relevant and helpful to a given assignment.
- a professor might give the same assignment to different sections of the same course, but with different due dates
- professors give readings to help with the assignments
- students complete assignments and receive a grade

Further assumptions:

- Assume there are many rows of data following this structure... only 5 sample rows have been shown for brevity. The number of rows is not important to this assignment.

## Requirements

### Convert to 4NF

Convert this table to the [fourth normal form](https://knowledge.kitchen/A_Simple_Guide_to_Five_Normal_Forms_in_Relational_Database_Theory#Fourth_Normal_Form) (4NF) using the techniques we have learned in this class.

Notes:

- There is no indication of which field is the primary key.
- Use your own judgment as to which fields might be good candidate key(s).
- Feel free to add any additional "surrogate key" fields you believe are necessary to make this data 4NF-compliant.

### Draw an Entity-Relationship Diagram

Draw an Entity-Relationship Diagram(s) of your 4NF-compliant data tables. Use the tool, [draw.io](https://draw.io) (also known as diagrams.net) to create these diagrams. A [sample .drawio file](./images/example-er-diagrams.drawio) has been included in this repository for example.

- export the diagram(s) in SVG format into the directory named `images`.
- publish the diagram(s) to your report, as described below.

### Write a report

Write a wonderfully-formatted Markdown report in the file named `README.md`. Make sure your document renders nicely as a web page, with clear headings, sub-headings, and text. Include a full description of your solution explaining what about the original data set was not 4NF compliant and what changes you made to make it 4NF-compliant. Be specific, and include at a minimum:

- a table containing the original data set (research how to write tables in Markdown or simply see the example table in this document's source code)
- your description of what makes this data set not compliant with 4NF
- tables containing the 4NF-compliant version of the data set
- the ER diagram(s) you created of your 4NF-compliant version of the data set (this diagram must be visible on the `README.md` document, not simply linked from there - research how to publish images to your pages in Markdown or simply see the example image in this document's source code)
- your description of what changes you made and how these changes make the data 4NF-compliant

## Submit your work

Each student must submit this assignment individually. Use Visual Studio Code to perform git `stage`, `commit` and `push` actions to submit. These actions are all available as menu items in Visual Studio Code's Source Control panel.

1. Type a short note about what you have done to the files in the `Message` area, and then type `Command-Enter` (Mac) or `Control-Enter` (Windows) to perform git `stage` and `commit` actions.
1. Click the `...` icon next to the words, "Source Control" and select "Push" to perform the git `push` action. This will upload your work to your repository on GitHub.com.

---

## Solution





## 原始数据集

以下是原始数据集，该数据集表示大学学生的课程成绩：

```markdown
| assignment_id | student_id | due_date | professor | assignment_topic                | classroom | grade | relevant_reading    | professor_email   |
| :------------ | :--------- | :------- | :-------- | :------------------------------ | :-------- | :---- | :------------------ | :---------------- |
| 1             | 1          | 23.02.21 | Melvin    | Data normalization              | WWH 101   | 80    | Deumlich Chapter 3  | l.melvin@foo.edu  |
| 2             | 7          | 18.11.21 | Logston   | Single table queries            | 60FA 314  | 25    | Dümmlers Chapter 11 | e.logston@foo.edu |
| ...           | ...        | ...      | ...       | ...                             | ...       | ...   | ...                 | ...               |
```

## 为什么它不符合第四范式（4NF）

原始数据集中存在多值依赖性。例如，一个教授可以为同一课程的不同小节分配相同的作业，但截止日期可能不同。此外，相同的作业可能有不同的相关阅读材料。

## 转换后的数据集

为了消除多值依赖性，我们将原始数据集分解为以下几个表：

### 1. 学生表
```markdown
| student_id | ... |
| :--------- | :-- |
| 1          | ... |
| 2          | ... |
| ...        | ... |
```

### 2. 教授表
```markdown
| professor_id | professor | professor_email   |
| :----------- | :-------- | :---------------- |
| 1            | Melvin    | l.melvin@foo.edu  |
| 2            | Logston   | e.logston@foo.edu |
| ...          | ...       | ...               |
```

### 3. 课程表
```markdown
| course_id | assignment_topic        | classroom |
| :-------- | :---------------------- | :-------- |
| 1         | Data normalization      | WWH 101   |
| 2         | Single table queries    | 60FA 314  |
| ...       | ...                     | ...       |
```

### 4. 作业表
```markdown
| assignment_id | course_id | professor_id | due_date |
| :------------ | :-------- | :----------- | :------- |
| 1             | 1         | 1            | 23.02.21 |
| 2             | 2         | 2            | 18.11.21 |
| ...           | ...       | ...          | ...      |
```

### 5. 学生作业表
```markdown
| student_assignment_id | student_id | assignment_id | grade |
| :-------------------- | :--------- | :------------ | :---- |
| 1                    | 1          | 1             | 80    |
| 2                    | 7          | 2             | 25    |
| ...                  | ...        | ...           | ...   |
```

### 6. 阅读材料表
```markdown
| reading_id | assignment_id | relevant_reading    |
| :--------- | :------------ | :------------------ |
| 1         | 1             | Deumlich Chapter 3  |
| 2         | 2             | Dümmlers Chapter 11 |
| ...       | ...           | ...                 |
```

## 实体关系图（ER图）

![img](https://files.oaiusercontent.com/file-YkkdiNpuQN53ZzfaoB3mvwPI?se=2023-10-31T00%3A10%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D3599%2C%20immutable&rscd=attachment%3B%20filename%3D59cbde17-f763-41e5-a987-b2ebb14fc97b&sig=Cp%2BqDQF2V06vF//9G/8R99HgmTkr3QAVGOGTp4rVgvk%3D)

## 如何使数据满足第四范式（4NF）

我们通过将原始数据集分解为多个小的、互不重叠的表来消除多值依赖性。这确保了每个表只表示一个实体，并且每个实体的所有相关信息都存储在同一个表中。



















欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！


::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)