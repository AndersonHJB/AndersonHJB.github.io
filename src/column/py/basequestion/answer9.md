---
title: 09-章节测试九答案
date: 2023-04-02 12:35:03
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
backToTop: true
toc: true
---

1. Python 使用\_\_\_\_\_\_\_\_\_\_\_\__\_\_\_\_关键字来定义类。

::: tip 答案解析

正确答案：class

:::

2. 类的概念体现了\_\_\_\_\_\_\_\_\_\_\_\_\__\_\_\_(面向对象/面向过程)的程序设计思想。

::: tip 答案解析

正确答案：面向对象

:::

3. \_\_\_\_\_\_\_\_\_\_\_\_\__\_\_\_、\_\_\_\_\_\_\_\_\_\_\_\_\__\_\_\_、\_\_\_\_\_\_\_\_\_\_\_\_\__\_\_\_是面向对象的三大特点。

::: tip 答案解析

正确答案：封装、继承、多态

:::

4. 类的函数里必须有\_\_\_\_\_\_\_\_\_\_\_\_\__\_\_\_参数。

::: tip 答案解析

正确答案：self

:::

5. 实例化的过程就是类到对象的过程。

A. √

B. X

::: tip 答案解析

正确答案：A 易错项：B

:::

6. 修改类会影响到所有的实例。

A. √

B. X

::: tip 答案解析

正确答案：A 易错项：B

:::

7. 修改某个实例里的属性，也会影响到类里的属性。

A. √

B. X

::: tip 答案解析

正确答案：B 易错项：A

:::

8. 实例是根据类创建出来的具体对象，每个对象都拥有相同的方法和数据。

A. √

B. X

::: tip 答案解析

正确答案：B 易错项：A

每个对象方法相同，但数据可能会不同。

:::

9. 请写出以下代码的执行结果：

![right](./answer9.assets/e03ba1393f8de35de9c139cd9d7e4940.png)

::: tip 答案解析

正确答案：输出为“Tom Sunny”

Test 类定义了 name 属性为 Tom，随后建立了 Test 类的实例：a，a 中 name 的值为 Sunny。但 `a.name = 'Sunny'` 只是对实例中的属性进行了修改，并没有改变 Test 类中 name 属性的原值。所以 `Test.name` 的值依旧为 Tom，但 `a.name` 的值已修改为 Sunny。

:::

10. 请定义一个学生类。

    1. **有以下三个类属性：**

        1. 姓名
        2. 年龄
        3. 成绩(语文，数学，英语)[每课成绩的类型为整数]

    2. **类方法：**

        1. 获取学生的姓名：`get_name()` 返回类型: str
        2. 获取学生的年龄：`get_age()` 返回类型: int
        3. 返回 3 门科目中最高的分数。`get_course()` 返回类型: int

    3. **以下为测试结果：**

        ```python
        zm = Student('zhangming',20,[69,88,100])
        ```

    4. **返回结果：**

        ```python
        zhangming
        20
        100
        ```

::: tip 答案解析

```python
class Student(object):
    def __init__(self, name, age, scores):
        self.name = name
        self.age = age
        self.scores = scores
    def get_name(self):
        return self.name
    def get_age(self):
        return self.age
    def get_course(self):
        return max(self.scores)
 
zm = Student('zhangming', 20, [69, 88, 100])
print(zm.get_name())
print(zm.get_age())
print(zm.get_course())
```

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

