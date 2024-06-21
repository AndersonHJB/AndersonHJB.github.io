---
title: 07-class 专项练习
date: 2023-05-05 11:56:21
author: AI悦创
isOriginal: true
category: Python 私教练习题【基础】
tag:
    - Python 基础练习题
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
editLink: true
prev: special_for.md
next: special_yunsuanfu.md
backToTop: true
toc: true
---

## 1. Person

创建一个名为 `Person` 的类，具有 `name` 和 `age` 属性。为这个类编写一个方法 `introduce()`，当调用时输出 "Hello, my name is {name} and I am {age} years old."。

::: code-tabs

@tab 测试

```python
# 测试
person = Person("Alice", 30)
person.introduce()
```

@tab 答案

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")


# 测试
person = Person("Alice", 30)
person.introduce()
```

@tab 注释

```python
# 定义Person类
class Person:
    # 初始化方法，设置name和age属性
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # 定义introduce方法，输出个人信息
    def introduce(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")

# 测试
person = Person("Alice", 30)  # 创建一个Person对象
person.introduce()  # 调用introduce方法输出个人信息
```

:::



## 2. BankAccount

创建一个名为 `BankAccount` 的类，具有 `account_number`, `balance`, 和 `account_holder` 属性。为这个类编写三个方法：`deposit(amount)`（向账户中存入指定金额）、`withdraw(amount)`（从账户中取出指定金额，如果余额不足则输出提示信息），和 `check_balance()`（打印当前余额信息）。

::: code-tabs

@tab 测试

```python
# 测试
account = BankAccount("123456", 1000, "John Doe")
account.deposit(500)
account.withdraw(200)
account.check_balance()
```

@tab 答案

```python
class BankAccount:
    def __init__(self, account_number, balance, account_holder):
        self.account_number = account_number
        self.balance = balance
        self.account_holder = account_holder

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient balance")
        else:
            self.balance -= amount

    def check_balance(self):
        print(f"Current balance: {self.balance}")


# 测试
account = BankAccount("123456", 1000, "John Doe")
account.deposit(500)
account.withdraw(200)
account.check_balance()
```

@tab 注释

```python
# 定义BankAccount类
class BankAccount:
    # 初始化方法，设置account_number, balance和account_holder属性
    def __init__(self, account_number, balance, account_holder):
        self.account_number = account_number
        self.balance = balance
        self.account_holder = account_holder

    # 定义deposit方法，实现存款功能
    def deposit(self, amount):
        self.balance += amount

    # 定义withdraw方法，实现取款功能
    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient balance")
        else:
            self.balance -= amount

    # 定义check_balance方法，查看当前余额
    def check_balance(self):
        print(f"Current balance: {self.balance}")

# 测试
account = BankAccount("123456", 1000, "John Doe")  # 创建一个BankAccount对象
account.deposit(500)  # 存入500
account.withdraw(200)  # 取出200
account.check_balance()  # 查看当前余额
```

:::

## 3. Circle

创建一个名为 `Circle` 的类，具有 `radius` 属性。为这个类编写两个方法：`area()`（返回圆的面积）和 `circumference()`（返回圆的周长）。注意：圆的面积计算公式为 A = π * r²，周长计算公式为 C = 2 * π * r。

::: code-tabs

@tab 测试

```python
# 测试
circle = Circle(5)
print(circle.area())
print(circle.circumference())
```

@tab 答案

```python
import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2

    def circumference(self):
        return 2 * math.pi * self.radius


# 测试
circle = Circle(5)
print(circle.area())
print(circle.circumference())
```

@tab 注释

```python
import math  # 导入math库以使用圆周率

# 定义Circle类
class Circle:
    # 初始化方法，设置radius属性
    def __init__(self, radius):
        self.radius = radius

    # 定义area方法，计算圆的面积
    def area(self):
        return math.pi * self.radius ** 2

    # 定义circumference方法，计算圆的周长
    def circumference(self):
        return 2 * math.pi * self.radius

# 测试
circle = Circle(5)  # 创建一个Circle对象
print(circle.area())  # 输出圆的面积
print(circle.circumference())  # 输出圆的周长
```

:::

## 4. Student

创建一个名为 `Student` 的类，继承自 `Person` 类（题目1中的类）。为 `Student` 类添加一个新的属性 `grades`（一个字典，包含课程名称和对应的分数）。为这个类编写一个方法 `average_grade()`，计算并返回该学生所有课程的平均分。

::: code-tabs

@tab 测试

```python
# 测试
student = Student("Bob", 20, {"Math": 85, "Physics": 90, "Chemistry": 78})
print(student.average_grade())
```

@tab 答案

```python
class Student(Person):
    def __init__(self, name, age, grades):
        super().__init__(name, age)
        self.grades = grades

    def average_grade(self):
        return sum(self.grades.values()) / len(self.grades)


# 测试
student = Student("Bob", 20, {"Math": 85, "Physics": 90, "Chemistry": 78})
print(student.average_grade())
```

@tab 注释

```python
# 定义Student类，继承自Person类
class Student(Person):
    # 初始化方法，设置name, age和grades属性
    def __init__(self, name, age, grades):
        super().__init__(name, age)  # 调用父类的初始化方法
        self.grades = grades

    # 定义average_grade方法，计算学生的平均分
    def average_grade(self):
        return sum(self.grades.values()) / len(self.grades)

# 测试
student = Student("Bob", 20, {"Math": 85, "Physics": 90, "Chemistry": 78})  # 创建一个Student对象
print(student.average_grade())  # 输出学生的平均分
```



:::

## 5. Car

创建一个名为 `Car` 的类，具有 `make`, `model`, `year`, 和 `mileage` 属性。为这个类编写一个方法 `age()`，计算并返回汽车的年龄。编写另一个方法 `drive(miles)`，增加汽车的里程数。

::: code-tabs

@tab 测试

```python
# 测试
car = Car("Toyota", "Camry", 2015, 60000)
print(car.age())
car.drive(1000)
print(car.mileage)
```

@tab 答案

```python
from datetime import datetime

class Car:
    def __init__(self, make, model, year, mileage):
        self.make = make
        self.model = model
        self.year = year
        self.mileage = mileage

    def age(self):
        current_year = datetime.now().year
        return current_year - self.year

    def drive(self, miles):
        self.mileage += miles


# 测试
car = Car("Toyota", "Camry", 2015, 60000)
print(car.age())
car.drive(1000)
print(car.mileage)
```

@tab 注释

```python
from datetime import datetime  # 导入datetime库以获取当前年份


# 定义Car类
class Car:
    # 初始化方法，设置make, model, year和mileage属性
    def __init__(self, make, model, year, mileage):
        self.make = make
        self.model = model
        self.year = year
        self.mileage = mileage

    # 定义age方法，计算汽车的年龄
    def age(self):
        current_year = datetime.now().year
        return current_year - self.year

    # 定义drive方法，增加汽车的里程数
    def drive(self, miles):
        self.mileage += miles


# 测试
car = Car("Toyota", "Camry", 2015, 60000)  # 创建一个Car对象
print(car.age())  # 输出汽车的年龄
car.drive(1000)  # 行驶1000英里
print(car.mileage)  # 输出汽车的里程数
```



:::

## 6. Vector2D

创建一个名为 `Vector2D` 的类，具有 `x` 和 `y` 属性。为这个类编写以下方法：`add(another_vector)`（将两个向量相加并返回一个新的 `Vector2D` 对象）、`subtract(another_vector)`（将两个向量相减并返回一个新的 `Vector2D` 对象）、`dot_product(another_vector)`（计算两个向量的点积并返回结果）。

::: code-tabs

@tab 测试

```python
# 测试
vector1 = Vector2D(2, 3)
vector2 = Vector2D(4, 1)
vector3 = vector1.add(vector2)
vector4 = vector1.subtract(vector2)
dot_product = vector1.dot_product(vector2)

print(f"vector3: ({vector3.x}, {vector3.y})")
print(f"vector4: ({vector4.x}, {vector4.y})")
print(f"dot_product: {dot_product}")
```

@tab 答案

```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def add(self, another_vector):
        return Vector2D(self.x + another_vector.x, self.y + another_vector.y)

    def subtract(self, another_vector):
        return Vector2D(self.x - another_vector.x, self.y - another_vector.y)

    def dot_product(self, another_vector):
        return self.x * another_vector.x + self.y * another_vector.y


# 测试
vector1 = Vector2D(2, 3)
vector2 = Vector2D(4, 1)
vector3 = vector1.add(vector2)
vector4 = vector1.subtract(vector2)
dot_product = vector1.dot_product(vector2)

print(f"vector3: ({vector3.x}, {vector3.y})")
print(f"vector4: ({vector4.x}, {vector4.y})")
print(f"dot_product: {dot_product}")
```

@tab 注释

```python
# 定义Vector2D类
class Vector2D:
    # 初始化方法，设置x和y属性
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # 定义add方法，实现向量相加
    def add(self, another_vector):
        return Vector2D(self.x + another_vector.x, self.y + another_vector.y)

    # 定义subtract方法，实现向量相减
    def subtract(self, another_vector):
        return Vector2D(self.x - another_vector.x, self.y - another_vector.y)

    # 定义dot_product方法，计算向量的点积
    def dot_product(self, another_vector):
        return self.x * another_vector.x + self.y * another_vector.y

# 测试
vector1 = Vector2D(2, 3)  # 创建一个Vector2D对象
vector2 = Vector2D(4, 1)  # 创建另一个Vector2D对象
vector3 = vector1.add(vector2)  # 计算向量相加的结果
vector4 = vector1.subtract(vector2)  # 计算向量相减的结果
dot_product = vector1.dot_product(vector2)  # 计算向量的点积

print(f"vector3: ({vector3.x}, {vector3.y})")  # 输出向量相加的结果
print(f"vector4: ({vector4.x}, {vector4.y})")  # 输出向量相减的结果
print(f"dot_product: {dot_product}")  # 输出向量的点积
```

:::



::: info 悦创金句

程序员就是连接人与机器之间的桥梁——AI悦创

:::

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

