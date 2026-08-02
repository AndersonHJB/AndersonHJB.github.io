---
title: Python 系统教程待做优化
icon: yongyan
date: 2024-08-14 22:55:38
author: AI悦创
isOriginal: true
category: 
    - Python notebook
tag:
    - Python 1v1
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true
comment: true

backToTop: true
toc: true
watermark: true
---

## 0. link

| 序号 | 名称      | 链接                                                         |
| ---- | --------- | ------------------------------------------------------------ |
| 01   | 知乎      | [https://www.zhihu.com/people/aiyuechuang](https://www.zhihu.com/people/aiyuechuang) |
| 02   | 掘金      | [https://juejin.cn/user/2305051222344061](https://juejin.cn/user/2305051222344061) |
| 03   | instagram | [https://www.instagram.com/coding1v1/](https://www.instagram.com/coding1v1/) |
| 04   | CSDN      | [https://blog.csdn.net/qq_33254766](https://blog.csdn.net/qq_33254766) |
| 05   | X         | [https://x.com/huangjiarongbao](https://x.com/huangjiarongbao) |
| 06   | 微博      | [https://weibo.com/u/5673898686](https://weibo.com/u/5673898686) |



## 1. 知识点

::: tabs

@tab 待编写

1. 异常处理；
2. 文件读取

@tab 01-变量

- [ ] 变量的特点需要讲解；

@tab 04-String

- [x] 字符串 split ，如果指定分隔符号不存在，则直接返回整个待分隔的数据
- [ ] 在讲 input 时用到 ipython，为什么用？看规律，直不直观！——直观的才可以看见规律

@tab 05-列表

@tab 06-元组

- [ ] 待增加题目

    ```python
    tup = ('毒药', '感冒药', '解药', "aiyc")
    # 在元组的中间插入元素：迷药，应该如何实现
    
    
    # tup = ('毒药', '感冒药', '解药', "aiyc")
    # # 在元组的中间插入元素：迷药，应该如何实现
    #
    # position = len(tup)
    # lst = list(tup)
    # lst.insert(position // 2, '迷药')
    # tup = tuple(lst)
    # print(tup)
    tup = ('毒药', '感冒药', '迷药', '解药', 'aiyc')
    # 在元组的中间插入元素：迷药，应该如何实现
    
    position = len(tup)
    lst = list(tup)
    lst.insert(position // 2, '迷药2')
    tup = tuple(lst)
    print(tup)
    ```

    

@tab 11. while 循环

- [x] while 循环基础

- [ ] 整数翻转题目：`153 -> 351`
- [x] 补充 while 循环演示 continue 的代码演示

@tab 12. for 循环

- [x] for 循环基础

- [ ] for 循环生成式

- [ ] 列表生成式

- [x] break、continue 只能处理当前循环

- [ ] 单次循环找到多个最大值下标补充，使用 index、pop 结合实现！

    ```python
    numbers = [12, 43, 5, 2, 66, 74, 91, 70, 56, 91, 91]  # 6、9、10
    max_value = numbers[0]
    
    for num in numbers:
        if num > max_value:
            max_value = num
    
    max_indices = []
    # current_p = numbers.index(max_value)
    # max_indices.append(current_p)
    # numbers.pop(current_p)
    
    for num in numbers:
        if num == max_value:
            current_p = numbers.index(num)
            max_indices.append(current_p)
            numbers[current_p] = -1  # Mark as visited
    
    
    max_indices_tuple = tuple(max_indices)
    print(max_indices_tuple)
    ```

    ```python
    numbers = [12, 43, 5, 2, 66, 74, 91, 70, 56, 91, 91]
    max_value = numbers[0]
    
    # 找最大值
    for num in numbers:
        if num > max_value:
            max_value = num
    
    # 拷贝副本用于 pop，原始列表保留用来查 index
    temp = numbers[:]
    max_indices = []
    start = 0
    
    for _ in range(temp.count(max_value)):
        current_p = numbers.index(max_value, start)
        max_indices.append(current_p)
        start = current_p + 1
        temp.pop(temp.index(max_value))  # 从副本中 pop 掉一个最大值（可选，实际上此时已经没影响）
    
    max_indices_tuple = tuple(max_indices)
    print(max_indices_tuple)
    ```

    

    

- [ ] 生成字典的反面教材补充！

![](https://blog.images.bornforthis.cn/docs-images/sha256/5a/5a7f60f62d293efa31904be42a8fe5b9bf33e7732c4f7b91da46e7340715f0ce.png)



@tab 14. 函数

- [x] pass 知识点补充（if 当中编写）

- [ ] 各个文件之间的导入也需要函数

- [ ] 各个独立函数之间的调用

    ```python
    def add_sum(a, b):
        """
        This function takes two numbers and returns their sum.
        """
        return a + b
    
    def main():
        """
        Main function to demonstrate the add_sum function.
        """
        num1 = 5
        num2 = 10
        result = add_sum(num1, num2)
        print(f"The sum of {num1} and {num2} is: {result}")
    
    main()
    ```

    



:::

- [ ] 题目类型
    - [ ] 循环中
        - [ ] 需要添加代码缩进所产生的问题
            - [ ] 比如：print 在循环内会每次循环执行，导致输出问题，如何改正等等

- [ ] 变量
    - [ ] 当中需要添加多变量赋值元组知识点；

- [ ] 适当的使用 time.sleep 来辅助了理解循环嵌套；

- [ ] 编写文章：

    - [ ] 介绍终端
    - [ ] 编码变量名要规范

- [ ] 循环中 break 与使用变量退出的区别：break 可以直接退出，不用等后续代码，变量则需要等后续执行完成，等待下一次条件判断。

- [ ] **写一篇列表和元组的内置函数汇总和区别**

- [x] 元组：

    ```python
    lst = [('a', 5, 'Apple'), ('c', 3, 'Cat'), ('b', 4, 'Blue'), ('e', 1, 'Eye'), ('d', 2, 'Dog')]
    ```

    ```python
    day1_tup = ("aiyc",)
    day2_tup = day1_tup + ("Me",) # 讲解不可变带来的危害
    ```

- [ ] Class:

    - [ ] 按之前的讲解，拥有了 self 之后，就不用等待函数的 return，可以直接 self.xxx 去调用，当然内部也还是需要的

- [ ] is 和 == 的区别：

    ::: details

    在Python中，`is`和`==`虽然都可以用于比较，但它们的作用和工作原理是不同的。

    1. **`==`（相等性比较）**：
       - `==` 用于判断两个对象的值是否相等。
       - 无论两个对象是否是不同的实例，只要它们的值相等，`==` 都会返回 `True`。

       **例子：**
       ```python
       a = [1, 2, 3]
       b = [1, 2, 3]
       print(a == b)  # 输出 True，因为 a 和 b 的值是相同的
       ```

    2. **`is`（身份比较）**：
       - `is` 用于判断两个对象是否是同一个对象（即它们是否指向同一块内存）。
       - 即使两个对象的值相等，但如果它们不是同一个实例，`is` 也会返回 `False`。

       **例子：**
       ```python
       a = [1, 2, 3]
       b = [1, 2, 3]
       print(a is b)  # 输出 False，因为 a 和 b 是不同的列表对象，尽管它们的值相等
       ```

       **进一步说明**：
       ```python
       c = a
       print(a is c)  # 输出 True，因为 c 和 a 指向同一个对象
       ```

    ### 总结：
    - `==` 比较的是**值**，用于判断两个对象的值是否相等。
    - `is` 比较的是**引用**，用于判断两个对象是否是同一个实例（即是否指向同一个内存地址）。

    :::




## 2. 设想





## 3. 待添加的题目

### 3.1 整数、浮点转换

::: tabs

@tab 草稿

```python
"""
获取用户输入数字，用户输入数字不一定规范。将用户输入的数字转换成对应的类型。需要输出数字和该数据的类型。

请使用所学语法解决。
基础要求：
测试1:
user_num:>>>1
out:1, <class 'int'>
测试2:
user_num:>>>1.8
out:1.8, <class 'float'>
测试3:
user_num:>>>1.8a
out:Error
测试4:
user_num:>>>1..8
out:Error

plus 要求：输出如下格式：
测试1:
user_num:>>>1
out:1, int
测试2:
user_num:>>>1.8
out:1.8, float
测试3:
user_num:>>>1.8a
out:Error
测试4:
user_num:>>>1..8
out:Error
"""
user_input = input(":>>>")
if user_input.isdigit():
    pass
```

@tab Question

**题目描述：**

编写一个 Python 程序，接收用户输入的字符串形式的数字，并尝试将其转换为合适的数字类型（整数或浮点数）。程序需要根据输入的内容输出该数字及其类型。如果输入不能被正确解析为数字类型，则输出 "Error"。

**基本要求：**
1. 如果输入可以转换为整数，则输出该整数和类型 `int`。
2. 如果输入可以转换为浮点数，则输出该浮点数和类型 `float`。
3. 如果输入不能转换为数字，则输出 "Error"。

**输入格式：**
- 用户输入可以是任意字符串形式的数字。

**输出格式：**
- 如果输入可以成功转换为数字，输出格式为：`数字, 类型`（例如：`1, int` 或 `1.8, float`）。
- 如果输入不能转换为数字，输出 `Error`。

**测试用例：**
- 测试1:
  ```
  user_num:>>>1
  out:1, int
  ```
- 测试2:
  ```
  user_num:>>>1.8
  out:1.8, float
  ```
- 测试3:
  ```
  user_num:>>>1.8a
  out:Error
  ```
- 测试4:
  ```
  user_num:>>>1..8
  out:Error
  ```

@tab xiao

```python
# 获取用户输入一个数，需要得到用户输入的数据类型，是整数还是浮点数。
# user_input:>>> 1
# out: 1, <class 'int'>
# user_input:>>> 1.5
# out: 1.5, <class 'float'>
# user_input: 1..5
# out: error
# 如何实现程序判断用户输入的浮点数，并转换成标准的浮点数
```



:::

### 3.2 for 循环嵌套

数字矩阵输出





### 3.3 乘法表的非对角线和

编写一个程序，计算并输出九九乘法表中非对角线元素的和。非对角线元素指 (i != j) 的乘法结果。



## 学生代码

::: code-tabs

@tab 字典作通讯录

```python
name = [ 123456, 132456, 154389, 131452, 180595, 131559,
        "hanmeimei", "dawei", "dawei",
        "Mr.liu", "Mr.liu", "Mr.liu",
         "bornforthis", "bornforthis", "bornforthis", "bornforthis",
         "alexa", "alexa", "alexa", "alexa", "alexa"]
a = input("enter your search name:")
b = int(name.count(a))
number = name[b]
print(f"the {a} phone number is: {number}")
```





:::

下面的代码有什么问题：

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

index = 0
for i in lst:
    print(f"{index}: \tlst: {lst}")
    lst.append(i ** 2)
    lst.remove(i)
    index += 1
print(lst)
```

::: details

这个代码的问题主要出在循环时对列表的修改。`for` 循环使用的是迭代器，直接操作列表（例如添加或删除元素）会导致迭代器的行为不可预测，从而引发逻辑错误或意外行为。

### 问题分析：

1. `lst.append(i ** 2)` 会在列表末尾添加元素，改变列表长度。
2. `lst.remove(i)` 会在每次迭代中删除当前的元素。
3. 由于循环基于初始列表的长度和顺序，修改列表会导致某些元素被跳过或重复处理。

### 改进目标：

- 输出内容应清晰展示当前迭代和修改操作。
- 使用复制列表避免直接修改正在迭代的对象。

### 改进代码：

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
index = 0

# 使用列表的副本进行迭代
original_lst = lst[:]
for i in original_lst:
    print(f"Before Modification -> Index: {index}, List: {lst}")
    lst.append(i ** 2)
    lst.remove(i)
    print(f"After Modification -> Index: {index}, List: {lst}\n")
    index += 1

print("Final List:", lst)
```

### 输出示例解释：

1. 每次迭代会显示当前的索引和列表状态。
2. 修改操作（添加和删除）在每次迭代后都会明确展示。
3. 最终列表的状态会在循环结束后打印。

### 改进效果：

学生小白通过输出可以清晰理解：

- 为什么直接修改列表会导致意外行为。
- 如何通过复制列表的方式安全地操作和迭代列表。

:::

