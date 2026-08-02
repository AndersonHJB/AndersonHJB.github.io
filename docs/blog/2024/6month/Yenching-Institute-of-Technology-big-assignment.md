---
title: 燕京理工学院2023——2024学年第2学期《Python程序设计基础》期末大作业
date: 2024-06-11 09:22:40
author: AI悦创
isOriginal: true
icon: python
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

你好，开始接外包啦！

![](https://blog.images.bornforthis.cn/docs-images/sha256/d8/d832e96dfecb07379196a31dcc6aae11c8fddb17591522cdb56db501f0cd2983.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/02/028164f71516290c8a37389a361898dbc3be816091304f7523bdebe496a1f74d.png)

## 1. 大作业总体要求

设计实现一个管理系统类项目。

1、编程语言为 Python 语言

2、建议采用图形用户界面（GUI）

3、建议采用类设计

4、功能不少于 5 项，具备基本的数据增删改查功能，以及数据统计功能。

5、系统数据持久化存储，建议采用数据库技术。

6、以学生独立思考解决问题为主，教师指导为辅，若引用他人成果，请标明出处。

7、撰写设计报告。

 管理系统类题目项目示例：（只作为示例，同学也可以选做其它管理系统）

## 2. 学籍管理系统

要求：

1) 学生的信息（学号 id、学生姓名 sname、性别 xb、年龄 age、学生籍贯 jg、班级 bj，成绩 score）采用类设计。
2) 能够录入学生信息，能够显示所有学生信息。
3) 能够按学号、姓名查询并显示单个学生的信息，能够按性别、籍贯、班级进行类别查询并显示，查询方式可以自己补充。
4) 能够按类统计每个班级或性别等的平均成绩。
5) 能够按成绩进行排序，并输出排序结果，能够查询某班成绩前10名的学生。
6) 能够添加、删除、修改学生的信息。
7) 学生的信息要实现永久化存储。

提示：

编写主菜单函数，返回相应的功能选项数字，主函数根据此数字调用相应的功能函数。编写各功能模块函数。最后进行综合调试。 

管理系统类题目项目具体管理什么方面的数据，由同学们根据自己的兴趣决定。

## 3. 完整代码

::: code-tabs

@tab All Code

```python
import sqlite3
import tkinter as tk
from tkinter import messagebox, simpledialog


# 初始化数据库
def init_db():
    conn = sqlite3.connect('student.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY,
            sname TEXT,
            xb TEXT,
            age INTEGER,
            jg TEXT,
            bj TEXT,
            score REAL
        )
    ''')
    conn.commit()
    conn.close()


# 学生类
class Student:
    def __init__(self, id, sname, xb, age, jg, bj, score):
        self.id = id
        self.sname = sname
        self.xb = xb
        self.age = age
        self.jg = jg
        self.bj = bj
        self.score = score


# 添加学生信息
# 添加学生信息
def add_student():
    def submit():
        student = Student(
            id_entry.get(),
            sname_entry.get(),
            xb_entry.get(),
            age_entry.get(),
            jg_entry.get(),
            bj_entry.get(),
            score_entry.get()
        )
        insert_student(student)
        messagebox.showinfo("操作结果", "添加成功")
        add_window.destroy()

    add_window = tk.Toplevel()
    add_window.title("添加学生信息")

    tk.Label(add_window, text="学号").grid(row=0, column=0)
    id_entry = tk.Entry(add_window)
    id_entry.grid(row=0, column=1)

    tk.Label(add_window, text="姓名").grid(row=1, column=0)
    sname_entry = tk.Entry(add_window)
    sname_entry.grid(row=1, column=1)

    tk.Label(add_window, text="性别").grid(row=2, column=0)
    xb_entry = tk.Entry(add_window)
    xb_entry.grid(row=2, column=1)

    tk.Label(add_window, text="年龄").grid(row=3, column=0)
    age_entry = tk.Entry(add_window)
    age_entry.grid(row=3, column=1)

    tk.Label(add_window, text="籍贯").grid(row=4, column=0)
    jg_entry = tk.Entry(add_window)
    jg_entry.grid(row=4, column=1)

    tk.Label(add_window, text="班级").grid(row=5, column=0)
    bj_entry = tk.Entry(add_window)
    bj_entry.grid(row=5, column=1)

    tk.Label(add_window, text="成绩").grid(row=6, column=0)
    score_entry = tk.Entry(add_window)
    score_entry.grid(row=6, column=1)

    submit_btn = tk.Button(add_window, text="提交", command=submit)
    submit_btn.grid(row=7, columnspan=2)


# 查看所有学生信息
def view_students():
    students = query_students()
    view_window = tk.Toplevel()
    view_window.title("所有学生信息")
    text = tk.Text(view_window)
    text.pack()
    for student in students:
        text.insert(tk.END,
                    f"学号：{student[0]}, 姓名：{student[1]}, 性别：{student[2]}, 年龄：{student[3]}, 籍贯：{student[4]}, 班级：{student[5]}, 成绩：{student[6]}\n")


# 数据库插入学生信息
def insert_student(student):
    conn = sqlite3.connect('student.db')
    c = conn.cursor()
    c.execute('INSERT INTO students (id, sname, xb, age, jg, bj, score) VALUES (?, ?, ?, ?, ?, ?, ?)',
              (student.id, student.sname, student.xb, student.age, student.jg, student.bj, student.score))
    conn.commit()
    conn.close()


# 查询所有学生信息
def query_students():
    conn = sqlite3.connect('student.db')
    c = conn.cursor()
    c.execute('SELECT * FROM students')
    students = c.fetchall()
    conn.close()
    return students


# 主菜单 GUI
def main_menu():
    root = tk.Tk()
    root.title("学籍管理系统")

    tk.Button(root, text='添加学生信息', command=add_student).pack()
    tk.Button(root, text='查看所有学生信息', command=view_students).pack()
    root.mainloop()


if __name__ == "__main__":
    init_db()
    main_menu()
```

@tab 部分注释

```python
import sqlite3
import tkinter as tk
from tkinter import messagebox, simpledialog

# 初始化数据库，如果数据库文件不存在则创建数据库和学生表
def init_db():
    conn = sqlite3.connect('student.db')  # 连接到 SQLite 数据库，数据库文件名为 student.db
    c = conn.cursor()  # 创建一个游标对象，用于执行 SQL 命令
    # 创建一个新表 students，如果表已存在则忽略该命令
    c.execute('''
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY,   # 学生 ID，作为主键
            sname TEXT,               # 学生姓名
            xb TEXT,                  # 性别
            age INTEGER,              # 年龄
            jg TEXT,                  # 籍贯
            bj TEXT,                  # 班级
            score REAL                # 成绩
        )
    ''')
    conn.commit()  # 提交数据库事务
    conn.close()  # 关闭数据库连接

# 学生类定义，用于存储学生信息
class Student:
    def __init__(self, id, sname, xb, age, jg, bj, score):
        self.id = id
        self.sname = sname
        self.xb = xb
        self.age = age
        self.jg = jag
        self.bj = bj
        self.score = score

# 添加学生信息的功能
def add_student():
    def submit():
        # 创建学生对象，并从输入字段获取数据
        student = Student(
            id_entry.get(),
            sname_entry.get(),
            xb_entry.get(),
            age_entry.get(),
            jg_entry.get(),
            bj_entry.get(),
            score_entry.get()
        )
        insert_student(student)  # 调用函数插入数据到数据库
        messagebox.showinfo("操作结果", "添加成功")
        add_window.destroy()  # 关闭窗口

    # 创建一个新窗口用于输入学生数据
    add_window = tk.Toplevel()
    add_window.title("添加学生信息")

    # 设置输入字段和标签
    tk.Label(add_window, text="学号").grid(row=0, column=0)
    id_entry = tk.Entry(add_window)
    id_entry.grid(row=0, column=1)

    tk.Label(add_window, text="姓名").grid(row=1, column=0)
    sname_entry = tk.Entry(add_window)
    sname_entry.grid(row=1, column=1)

    tk.Label(add_window, text="性别").grid(row=2, column=0)
    xb_entry = tk.Entry(add_window)
    xb_entry.grid(row=2, column=1)

    tk.Label(add_window, text="年龄").grid(row=3, column=0)
    age_entry = tk.Entry(add_window)
    age_entry.grid(row=3, column=1)

    tk.Label(add_window, text="籍贯").grid(row=4, column=0)
    jg_entry = tk.Entry(add_window)
    jg_entry.grid(row=4, column=1)

    tk.Label(add_window, text="班级").grid(row=5, column=0)
    bj_entry = tk.Entry(add_window)
    bj_entry.grid(row=5, column=1)

    tk.Label(add_window, text="成绩").grid(row=6, column=0)
    score_entry = tk.Entry(add_window)
    score_entry.grid(row=6, column=1)

    # 提交按钮
    submit_btn = tk.Button(add_window, text="提交", command=submit)
    submit_btn.grid(row=7, columnspan=2)

# 查看所有学生信息的功能
def view_students():
    students = query_students()  # 查询数据库中所有学生数据
    view_window = tk.Toplevel()
    view_window.title("所有学生信息")
    text = tk.Text(view_window)  # 创建文本区域以显示学生信息
    text.pack()
    for student in students:
        # 将每个学生的信息添加到文本区域
        text.insert(tk.END, f"学号：{student[0]}, 姓名：{student[1]}, 性别：{student[2]}, 年龄：{student[3]}, 籍贯：{student[4]}, 班级：{student[5]}, 成绩：{student[6]}\n")

# 数据库插入学生信息
def insert_student(student):
    conn = sqlite3.connect('student.db')
    c = conn.cursor()
    # 插入一条学生信息到数据库
    c.execute('INSERT INTO students (id, sname, xb, age, jg, bj, score) VALUES (?, ?, ?, ?, ?, ?, ?)',
              (student.id, student.sname, student.xb, student.age, student.jg, student.bj, student.score))
    conn.commit()  # 提交事务
    conn.close()  # 关闭连接

# 查询所有学生信息
def query_students():
    conn = sqlite3.connect('student.db')
    c = conn.cursor()
    c.execute('SELECT * FROM students')  # 执行查询所有学生的 SQL 命令
    students = c.fetchall()  # 获取查询结果
    conn.close()
    return students

# 主菜单 GUI 设置
def main_menu():
    root = tk.Tk()
    root.title("学籍管理系统")

    # 创建按钮并连接到相应的功能
    tk.Button(root, text='添加学生信息', command=add_student).pack()
    tk.Button(root, text='查看所有学生信息', command=view_students).pack()
    root.mainloop()

if __name__ == "__main__":
    init_db()  # 初始化数据库
    main_menu()  # 启动 GUI
```



:::

## 4. Python 学籍管理系统教程

接下来，我将提供一个完整的学籍管理系统编写教程，基于 Python 和 tkinter，使用 SQLite 数据库。

### 4.1 系统需求

本系统旨在通过图形用户界面(GUI)来管理学生信息，包括添加、查看、搜索、更新和删除学生信息。系统将使用 Python 的标准库 tkinter 来构建 GUI，使用 SQLite 数据库进行数据存储。

### 4.2 环境准备

确保你的 Python 环境中包含了 `tkinter` 和 `sqlite3`。这些通常是 Python 标准库的一部分，不需要额外安装。

### 4.3 数据库初始化

首先，我们需要设置一个 SQLite 数据库，用来存储学生信息。

```python
import sqlite4

def init_db():
    conn = sqlite3.connect('student.db')  # 创建或连接到数据库
    c = conn.cursor()
    # 创建一个新表 students，如果尚不存在
    c.execute('''
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY,
            sname TEXT,
            xb TEXT,
            age INTEGER,
            jg TEXT,
            bj TEXT,
            score REAL
        )
    ''')
    conn.commit()
    conn.close()
```

### 4.4 学生类设计

我们定义一个 `Student` 类，用于表示学生信息。

```python
class Student:
    def __init__(self, id, sname, xb, age, jg, bj, score):
        self.id = id
        self.sname = sname
        self.xb = xb
        self.age = age
        self.jg = jg
        self.bj = bj
        self.score = score
```

### 4.5 图形用户界面设计

使用 tkinter 创建一个基本的 GUI，包括按钮用于触发各种功能。

```python
import tkinter as tk
from tkinter import messagebox

def main_menu():
    root = tk.Tk()
    root.title("学籍管理系统")

    tk.Button(root, text='添加学生信息', command=add_student).pack()
    tk.Button(root, text='查看所有学生信息', command=view_students).pack()

    root.mainloop()
```

### 4.6 功能实现

#### 4.6.1 添加学生信息

创建一个弹出窗口，用于输入学生信息并将其保存到数据库。

```python
def add_student():
    def submit():
        student = Student(
            id_entry.get(),
            sname_entry.get(),
            xb_entry.get(),
            age_entry.get(),
            jg_entry.get(),
            bj_entry.get(),
            score_entry.get()
        )
        insert_student(student)
        messagebox.showinfo("操作结果", "添加成功")
        add_window.destroy()

    add_window = tk.Toplevel()
    add_window.title("添加学生信息")
    # 这里添加各种输入框和标签
    # 略去详细代码，与之前示例相似

    submit_btn = tk.Button(add_window, text="提交", command=submit)
    submit_btn.grid(row=7, columnspan=2)
```

#### 4.6.2 查看所有学生信息

实现一个功能，显示一个新窗口，列出数据库中所有学生的信息。

```python
def view_students():
    students = query_students()
    view_window = tk.Toplevel()
    view_window.title("所有学生信息")
    text = tk.Text(view_window)
    text.pack()
    for student in students:
        text.insert(tk.END, f"学号：{student[0]}, 姓名：{student[1]}, 性别：{student[2]}, 年龄：{student[3]}, 籍贯：{student[4]}, 班级：{student[5]}, 成绩：{student[6]}\n")
```

### 4.7 运行和测试

在你的 Python 环境中运行上述代码。确保所有功能都能正确执行，并对每个功能进行测试以验证其正确性。

### 4.8 总结

通过本教程，你应该能够建立一个基本的学籍管理系统，具备基础的数据库操作和 GUI。这只是一个起点，你可以根据具体需求扩展和改进系统功能。

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



