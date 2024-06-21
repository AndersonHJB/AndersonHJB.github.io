---
title: 理解*args和**kwargs
icon: python
date: 2023-02-06 21:50:21
author: AI悦创
isOriginal: true
category: 
    - Python 进阶
    - 小白补充
tag:
    - Python 进阶
    - 小白补充
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

你好，我是悦创。

星号 (`*`) 可用于 Python 中的不同情况：

- 乘法和幂运算
- 创建具有重复元素的列表、元组或字符串
- `*args` ， `**kwargs` 和关键字参数
- 为函数参数解包列表/元组/字典
- 拆包容器
- 将容器合并到列表/合并字典

## 1. 乘法和幂运算

```python
print(7 * 5)
print(2**4)

# ---output---
35
16
```

## 2. 创建具有重复元素的列表、元组或字符串

```python
# 列表
zeros = [0] * 10
onetwos = [1, 2] * 5
print(zeros)
print(onetwos)
# 元组
zeros = (0,) * 10
onetwos = (1, 2) * 5
print(zeros)
print(onetwos)
# 字符串
A_string = "A" * 10
AB_string = "AB" * 5
print(A_string)
print(AB_string)

# ---output---
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
(1, 2, 1, 2, 1, 2, 1, 2, 1, 2)
AAAAAAAAAA
ABABABABAB
```

## 3. `*args` , `**kwargs` 和关键字参数

在 Python 中，`*args` 和 `**kwargs` 都代表 1个 或 多个 参数的意思。`*args` 传入 tuple 类型的无名参数，而 `**kwargs` 传入的参数是 dict 类型。下文举例说明。

- 将 `*args` 用于可变长度参数
- 将 `**kwargs` 用于可变长度的关键字参数
- 使用 `*` 后跟更多函数参数来强制仅使用关键字参数

```python
#可变参数
def my_function(*args, **kwargs):
    for arg in args:
        print(arg)
    for key in kwargs:
        print(key, kwargs[key])
my_function("Hey", 3, [0, 1, 2], name="Alex", age=8)

#强制关键词参数
def my_function2(name, *, age):
    print(name)
    print(age)
my_function2("Michael", age=5)

# ---output---
Hey
3
[0, 1, 2]
name Alex
age 8
Michael
5
```

## 4. 参数解包

- 如果长度与参数匹配，则列表/元组/集合/字符串可以使用一个 `*` 解压缩为函数参数。
- 如果长度和键与参数匹配，字典可以用两个 `**` 解包。

```python
def foo(a, b, c):
    print(a, b, c)
my_list = [1, 2, 3]
foo(*my_list) # *list传参
my_string = "ABC"
foo(*my_string)
my_dict = {'a': 4, 'b': 5, 'c': 6}
foo(**my_dict) # **dict传参

# ---output---
1 2 3
A B C
4 5 6
```

## 5. 拆分容器

将列表、元组或集合的元素解包为单个和多个剩余元素。

```python
numbers = (1, 2, 3, 4, 5, 6, 7, 8)
print("*在开始:")
*beginning, last = numbers
print(beginning, last)
print("*在末尾:")
first, *end = numbers
print(first, end)
print("*在中间位置:")
first, *middle, last = numbers
print(first, middle, last)

# ---output---
*在开始:
[1, 2, 3, 4, 5, 6, 7] 8
*在末尾:
1 [2, 3, 4, 5, 6, 7, 8]
*在中间位置:
1 [2, 3, 4, 5, 6, 7] 8
```

## 6. 将迭代元素合并到列表/字典

```python
# 合并列表
my_tuple = (1, 2, 3)
my_set = {4, 5, 6}
my_list = [*my_tuple, *my_set]
print(my_list)
# 合并字典
dict_a = {"one": 1, "two": 2}
dict_b = {"three": 3, "four": 4}
dict_c = {**dict_a, **dict_b}
print(dict_c)


# ---output---
[1, 2, 3, 4, 5, 6]
{'one': 1, 'two': 2, 'three': 3, 'four': 4}
```

## 7. 更多测试代码

```python
def p(url, *args):
    print(url)
    print(args[0])
p(1, 2, 3, 4)
```

```python
def test(*args):
    print("test-args", args)
    for i in args:
        print("test-i", i)
 
test(1,2,3)
 
 
def p(a, *args, **kwargs):
    print("p-a", a)
    print("p-*args", *args)
    print("p-**kwargs", **kwargs)
 
p(1, 2, 3, 4)
```

运行结果：

```python
test-args (1, 2, 3)
test-i 1
test-i 2
test-i 3
p-a 1
p-*args 2 3 4
p-**kwargs
```

```python
def test(**kwargs):
    print(kwargs)
    keys = kwargs.keys()
    value = kwargs.values()
    print(keys)
    print(value)
 
test(a=1,b=2,c=3,d=4)
 
# 输出值分别为
# {'a': 1, 'b': 2, 'c': 3, 'd': 4}
# dict_keys(['a', 'b', 'c', 'd'])
# dict_values([1, 2, 3, 4])
```

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



















