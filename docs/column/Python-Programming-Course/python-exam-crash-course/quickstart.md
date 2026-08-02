---
title: if、for、class 精简版教程「非正式版·初稿」
icon: blog
date: 2026-04-27 22:11:10
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

## 1. if：条件判断

`if` 的作用是：

> 如果某个条件成立，就执行某段代码。

### 1.1 基本语法

```python
if 条件:
    条件成立时执行的代码
```

例如：

```python
age = 18

if age >= 18:
    print("你已经成年了")
```

输出：

```python
你已经成年了
```

**注意**：Python 用 **缩进** 表示代码属于谁。



### 1.2 if...else

如果条件成立，执行一段代码；否则执行另一段代码。

```python
age = 16

if age >= 18:
    print("可以进入网吧")
else:
    print("未成年，不能进入")
```

输出：

```python
未成年，不能进入
```



### 1.3 if...elif...else

多个条件判断时，用 `elif`。

```python
score = 85

if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")
```

输出：

```python
良好
```

`elif` 可以理解为：否则如果……



### 1.4 常见比较符号

```python
>    大于
<    小于
>=   大于等于
<=   小于等于
==   等于
!=   不等于
```

示例：

```python
password = "123456"

if password == "123456":
    print("登录成功")
else:
    print("密码错误")
```



### 1.5 多条件判断

可以使用：

```python
and   并且
or    或者
not   不是
```

::: code-tabs

@tab and：两个条件都成立

```python
age = 20
money = 100

if age >= 18 and money >= 50:
    print("可以买票进场")
else:
    print("不能进场")
```

@tab or：满足一个条件即可

```python
vip = True
money = 20

if vip == True or money >= 50:
    print("可以进场")
else:
    print("不能进场")
```

@tab not：取反

```python
is_banned = False

if not is_banned:
    print("可以登录")
else:
    print("账号被封禁")
```

:::

## 2. for：循环

`for` 的作用是：重复执行一段代码。

### 2.1 遍历列表

```python
names = ["小明", "小红", "小刚"]

for name in names:
    print(name)
```

输出：

```python
小明
小红
小刚
```

可以理解为：依次把列表里的每一个元素取出来，放到 `name` 里面。



### 2.2 使用 `range()`

`range()` 常用于生成一组数字。

```python
for i in range(5):
    print(i)
```

输出：

```python
0
1
2
3
4
```

注意：

```python
range(5)
```

表示从 `0` 到 `4`，不包括 `5`。



### 2.3 指定开始和结束

```python
for i in range(1, 6):
    print(i)
```

输出：

```python
1
2
3
4
5
```



### 2.4 指定步长

```python
for i in range(1, 10, 2):
    print(i)
```

输出：

```python
1
3
5
7
9
```

格式是：

```python
range(开始, 结束, 步长)
```



### 2.5 循环中使用 `if`

```python
for i in range(1, 11):
    if i % 2 == 0:
        print(i, "是偶数")
    else:
        print(i, "是奇数")
```

输出：

```python
1 是奇数
2 是偶数
3 是奇数
4 是偶数
...
```

`%` 是取余数。

```python
4 % 2 == 0
```

说明 4 能被 2 整除，是偶数。



### 2.6 `break`：结束循环

```python
for i in range(1, 10):
    if i == 5:
        break
    print(i)
```

输出：

```python
1
2
3
4
```

当 `i == 5` 时，循环直接结束。



### 2.7 `continue`：跳过本次循环

```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```

输出：

```python
1
2
4
5
```

当 `i == 3` 时，跳过这一次，不打印 3。



### 3. `class`：类

`class` 是面向对象编程的核心。

可以简单理解为：`class` 是用来创建“对象模板”的。

比如现实中有很多学生：

```text
学生1：小明，12岁
学生2：小红，13岁
学生3：小刚，14岁
```

他们都有共同特点：

```text
姓名
年龄
学习
自我介绍
```

我们就可以用 `class` 定义一个“学生模板”。



### 3.1 定义一个类

```python
class Student:
    pass
```

这里定义了一个类，名字叫 `Student`。

类名一般使用大驼峰命名法：

```python
Student
Car
Dog
Book
```

### 3.2 创建对象

```python
class Student:
    pass

s1 = Student()
s2 = Student()

print(s1)
print(s2)
```

`Student()` 表示根据 `Student` 这个模板创建一个对象。



### 3.3 给对象添加属性

```python
class Student:
    pass

s1 = Student()
s1.name = "小明"
s1.age = 12

print(s1.name)
print(s1.age)
```

输出：

```python
小明
12
```

但是这种写法不够规范。更常用的是 `__init__()`。



### 3.4 `__init__()` 初始化方法

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

解释一下：

```python
def __init__(self, name, age):
```

表示创建对象时，会自动执行这个方法。

```python
self.name = name
self.age = age
```

表示把传进来的数据保存到对象自己身上。

完整例子：

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

s1 = Student("小明", 12)
s2 = Student("小红", 13)

print(s1.name)
print(s1.age)

print(s2.name)
print(s2.age)
```

输出：

```python
小明
12
小红
13
```



### 3.5 `self` 是什么？

`self` 表示：当前这个对象自己。

例如：

```python
s1 = Student("小明", 12)
```

此时 `self` 指的就是 `s1`。

```python
s2 = Student("小红", 13)
```

此时 `self` 指的就是 `s2`。

所以：

```python
self.name = name
```

意思是：**把 name 保存到当前对象自己的 name 属性里**。



### 3.6 类里面定义方法

类里面的函数，叫做方法。

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print("大家好，我叫", self.name, "今年", self.age, "岁")
```

使用：

```python
s1 = Student("小明", 12)
s1.introduce()
```

输出：

```python
大家好，我叫 小明 今年 12 岁
```



### 3.7 方法可以接收参数

```python
class Student:
    def __init__(self, name):
        self.name = name

    def study(self, subject):
        print(self.name, "正在学习", subject)
```

使用：

```python
s1 = Student("小明")
s1.study("Python")
s1.study("数学")
```

输出：

```python
小明 正在学习 Python
小明 正在学习 数学
```

## 4. 综合案例：学生成绩系统

下面把 `if`、`for`、`class` 放在一起使用。

### 4.1 需求

我们要创建几个学生，然后判断他们的成绩等级。

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def get_level(self):
        if self.score >= 90:
            return "优秀"
        elif self.score >= 80:
            return "良好"
        elif self.score >= 60:
            return "及格"
        else:
            return "不及格"

    def show_info(self):
        level = self.get_level()
        print(self.name, "的成绩是", self.score, "等级是", level)


students = [
    Student("小明", 95),
    Student("小红", 82),
    Student("小刚", 58),
    Student("小美", 76)
]

for student in students:
    student.show_info()
```

输出：

```python
小明 的成绩是 95 等级是 优秀
小红 的成绩是 82 等级是 良好
小刚 的成绩是 58 等级是 不及格
小美 的成绩是 76 等级是 及格
```



### 4.2 代码拆解

1. 定义学生类

    ```python
    class Student:
    ```

    表示创建一个学生模板。

2. 初始化学生信息

    ```python
    def __init__(self, name, score):
        self.name = name
        self.score = score
    ```

3. 创建学生对象时，需要传入：

    ```python
    姓名
    成绩
    ```

    例如：

    ```python
    Student("小明", 95)
    ```

4. 判断成绩等级

    ```python
    def get_level(self):
        if self.score >= 90:
            return "优秀"
        elif self.score >= 80:
            return "良好"
        elif self.score >= 60:
            return "及格"
        else:
            return "不及格"
    ```

    这里用到了 `if` 判断。

5. 遍历所有学生

    ```python
    for student in students:
        student.show_info()
    ```

    这里用到了 `for` 循环。

    意思是：**把 students 里面的每一个学生都拿出来，执行 `show_info` 方法**。





## 5. 练习题

::: tabs

@tab 练习 1：判断成年人

要求：输入一个年龄，如果大于等于 18，输出“成年人”，否则输出“未成年人”。

参考代码：

```python
age = int(input("请输入年龄："))

if age >= 18:
    print("成年人")
else:
    print("未成年人")
```

@tab 练习 2：打印 1 到 100

```python
for i in range(1, 101):
    print(i)
```

@tab 练习 3：打印 1 到 100 的偶数

```python
for i in range(1, 101):
    if i % 2 == 0:
        print(i)
```

@tab 练习 4：定义一个 Dog 类

要求：

狗有：

```text
名字
年龄
```

狗会：

```text
自我介绍
叫
```

参考代码：

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print("我是一只狗，我叫", self.name, "今年", self.age, "岁")

    def bark(self):
        print(self.name, "汪汪汪！")


dog1 = Dog("旺财", 3)
dog1.introduce()
dog1.bark()
```



## 6. 核心总结

```python
if
```

用来做条件判断。

```python
for
```

用来重复执行代码。

```python
class
```

用来创建对象模板。

三者合起来，就可以写出比较完整的小程序：

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

students = [
    Student("小明", 90),
    Student("小红", 70)
]

for student in students:
    if student.score >= 80:
        print(student.name, "成绩不错")
    else:
        print(student.name, "还需要努力")
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