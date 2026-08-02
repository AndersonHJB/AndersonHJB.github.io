---
title: 流程图「多伦多电影学院」
date: 2024-12-12 09:01:44
author: AI悦创
isOriginal: true
icon: blog
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

Create a flowchart would allow a teacher to create a class list of student names stored in an array. 

The teacher should be able to individually add each student's name, and indicate when they have finished. 

At the end of the teacher's input, the program should print a list of all student's names in the class.

Create a flowchart would allow a teacher to create a class list of student names stored in an array. 

The teacher should be able to individually add each student's name, and indicate when they have finished. 

At the end of the teacher's input, the program should print a list of all student's names in the class

## 答案

```markdown
          ┌───────────────────┐
          │       开始         │
          └───────┬──────────┘
                  │
                  v
          ┌───────────────────┐
          │   初始化空数组     │
          │   students = []    │
          └───────┬──────────┘
                  │
                  v
          ┌───────────────────┐
          │ 提示输入学生姓名   │
          └───────┬──────────┘
                  │
                  v
          ┌───────────────────┐
          │ 输入姓名(name)     │
          └───────┬──────────┘
                  │
                  v
          ┌───────────────────┐
          │ 是否输入为空？     │ ——→ 否 ——→ ┐
          │ (例如输入"完毕")  │            │
          └───────┬──────────┘            v
              是   │                 ┌───────────────────┐
                  v                 │  数组中追加name     │
          ┌───────────────────┐    │  students.push(name)│
          │  跳转到输出名单步骤│    └───────┬──────────┘
          └───────┬──────────┘            │
                  │                         v
                  │               回到“提示输入学生姓名”步骤
                  │
                  v
          ┌───────────────────┐
          │   输出所有学生姓名 │
          │   遍历students数组 │
          └───────┬──────────┘
                  │
                  v
          ┌───────────────────┐
          │        结束        │
          └───────────────────┘
```

**流程解释：**

1. 程序开始后，先初始化一个空的数组 `students`，用于储存学生姓名。
2. 程序提示教师输入学生姓名。教师逐一输入学生姓名。
3. 程序判断输入的内容是否为空或为特定的结束标识(例如教师输入“完毕”表示不再继续添加学生)。
    - 若教师输入了实际的学生姓名，则将该姓名添加到 `students` 数组中，然后再次提示下一个学生姓名的输入。
    - 若教师在此处输入了空值或指定的结束标记，则表示姓名输入结束。
4. 当教师完成输入（即出现结束标记）后，程序遍历 `students` 数组，将所有学生姓名输出。
5. 程序结束。

通过上述流程，教师可以动态地添加学生姓名，并最终由程序打印出整班的学生名单。

## 流程图中使用的框体说明

在标准的流程图中，常用以下符号：

1. **起止框（终端框）**：
    - 形状：通常为矩形的圆角框或者椭圆形框
    - 用途：标志流程的开始点和结束点。
        在图中，“开始”与“结束”就是此类框。
2. **处理框（过程框）**：
    - 形状：长方形
    - 用途：表示一个处理步骤，如赋值操作、对变量进行初始化、数据存储操作等。
        在图中，“初始化空数组”、“数组中追加name”、“输出所有学生姓名”等就是使用的处理框。
3. **输入/输出框（I/O框）**：
    - 形状：平行四边形
    - 用途：表示输入或输出操作，如从键盘输入数据或在屏幕上显示数据。
        在图中，“提示输入学生姓名”、“输入姓名(name)”以及最终“输出所有学生姓名”都可视为I/O操作。虽然在示意中使用了矩形来表示，但在严格的标准中，输入输出操作可用平行四边形表示。
4. **判断/决策框（菱形）**：
    - 形状：菱形
    - 用途：用于表示一个判断过程，决定流程的分支走向（是或否）。
        在图中，“是否输入为空？”即用到菱形的决策框。
5. **流程线（箭头）**：
    - 用途：表示流程的进行方向。
        图中所有的线段和箭头用于连接各个框，表明流程的走向，从上至下或由决策点分叉。

### 补充

在本示例中，输入/输出框在文本表示中与处理框可能未严格区分（都以矩形表示），在正式流程图绘制中应使用标准的平行四边形来代表I/O操作。剩余逻辑与流程基本符合标准流程图规范。





















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
