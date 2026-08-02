---
title: 关卡一：变量和数据类型
icon: blog
date: 2026-04-17 16:27:43
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

## 1. 变量

### 1.1 从字面快速理解

- **变**：变化
- **量**：大小

### 1.2 变量的定义

变量就是在计算机的**内存**当中开辟空间，用来存储数据。顺便取一个变量名称，方便后续调用。

- **内存**：存储在内存上的数据都是临时存储；
- **硬盘**：只有把内存上的数据写入到硬盘当中，才不会数据丢失；

### 1.3 变量拥有的特点

**特点：** 变量的值会被覆盖，只会记着最后一个值。

### 1.4 如何创建变量&程序运行逻辑

- 初始化赋值语句: **变量名 = 表达式** 「`=` 叫做：赋值运算符」
    - **变量名**：就是这个空间，我们叫它什么名字；
    - **表达式**：类似数学表达式；
- **程序的运行逻辑**：代码有很多行，在众多代码当中，每行代码的执行顺序是什么？
    - **从上到下，从右到左（这里的右，指的是先执行 = “右边的整体”），最后才是赋值。**
    - **补充**：如果右侧是明确的结果（值），那就直接执行赋值操作。

### 1.5 代码编写

::: code-tabs

@tab code1

```python
x = 1 # 1 赋值给了 x，x 代表 1
x = x + 10 # x + 10 等价于 1 + 10 最后得出 11，11 赋值给 x
print(x)  # print 打印、输出
# 井号是用来注释、注解，解释某一行代码的功能或者作用
# 注释就是你看的见，我看的见，但是 Python 看不见。
```

@tab code2

```python
name1 = "lilei"
name2 = name1
print(name2)
```

@tab code3

```python
name1 = "lilei"
name1 = "hanmeimei"
print(name1)
```

:::

### 1.6 print 的常见用法

::: tip **学习思维分享：我给你提供的例子，是我觉得你学习或者掌握这个知识必须要理解的。而你自己提出的疑惑（问题），才是你真正需要解决的！**

:::

**Question**：老师这个部分有什么用？——为了输出按照某种格式来进行输出。

> end、sep 都需要是字符串类型。

::: code-tabs

@tab 同时输出多个数据

```python
a = 1
b = 2
c = 3
# print(a)
# print(b)
# print(c)
print(a, b, c)  # 使用 print 同时输出多个变量

# ---output---
1 2 3
```

@tab 使用 sep 修改多个变量同时输出的间隔

```python
a = 1
b = 2
c = 3
print(a, b, c, sep=' 间隔 ')
# print(a, b, c, sep=' ') 与 print(a, b, c) 是等价的！写不写 sep 都是存在的！
# sep 仅限在多个变量同时输出的情况下生效

# ---output---
1 间隔 2 间隔 3
```

:::

::: code-tabs

@tab end 修改 print 输出结尾方式

```python
a = 1
b = 2
c = 3
print(a, end='\n\n\n')  # 多换行几个，\n 是换行的意思，\n 就是 newline
print(b)
print(c)


a = 1
b = 2
c = 3
print(a, end='jjjjjj\njsjsjjs\n')  # 多换行几个，\n 是换行的意思，\n 就是 newline
print(b)
print(c)
```

@tab end 与 sep 可以同时使用

```python
a = 1
b = 1
c = 1
print(a, b, c, sep="~", end=" love Python")

# ---output---
1~1~1 love Python
```

:::

::: code-tabs

@tab 测试

```python
a = 1
b = 2
c = 10
print(a, sep="~~~")
print(b, a, sep="and", end=" bornfor\nthis\n")
print(c, end="good")
```

@tab print 输出可以有提示

```python
# 我们想要把变量 a 输出如下结果，应该如何操作：
# a = 1
# 输出结果如下：
# a 的值是: 1
# 输出时可以添加提示，其实就是基于 print 同时输出多个变量
a = 1
print('a 的值是:', a)
```



:::

### 1.7 进阶的赋值方法

::: code-tabs

@tab 多个变量同时赋予相同的值

```python
a = b = c = 1
print(a, b, c)

# ---output---
1 1 1
```

@tab 多个变量同时赋予不同的值

```python
a, b, c = 1, 2, 3
print(a, b, c)

# ---output---
1 2 3
```

:::

### 1.8 小试牛刀：交换果汁

假如现在有两个小孩，哥哥叫：Austin，弟弟叫：Jaden。

Austin 想喝**果汁**，Jaden 想喝**可乐**。**哥哥和弟弟都有专属的杯子，不喜欢用对方的杯子。**

哥哥的杯子：`Austin_cup`、弟弟的杯子：`Jaden_cup`。

家中可乐饮料、果汁饮料瓶，只能倒出来一杯果汁、一杯可乐（**倒出之后，饮料瓶空了**），他们的妈妈不小心把哥哥的杯子装了可乐，弟弟的杯子装了果汁。

**问：如何交换哥哥与弟弟杯中的果汁？**

待修改的代码如下：

```python
Austin_cup = "Coke"  # 该赋值可以理解为从饮料瓶倒果汁的过程
Jaden_cup = "juice"  # 该赋值可以理解为从饮料瓶倒果汁的过程
print("Austin 杯子现在装的饮料", Austin_cup)
print("Jaden 杯子现在装的饮料", Jaden_cup)
# ---------------
# 这里编写什么代码才能使上下相同输出的 print 代码，输出的结果是交换过来的。
# ---------------
print("交换之后......")
print("Austin 杯子现在装的饮料", Austin_cup)
print("Jaden 杯子现在装的饮料", Jaden_cup)

# ---目标输出结果---
Austin 杯子现在装的饮料 Coke
Jaden 杯子现在装的饮料 juice
交换之后......
Austin 杯子现在装的饮料 juice
Jaden 杯子现在装的饮料 Coke
```

### 1.9 变量命名规则

规则如下：

- 大小写英文、数字和 `_` 的结合，且不能用数字开头；
- 系统关键词不能做变量名使用「获取关键词列表：`help('keywords')`
- Python 中的变量名区分大小写；
- 变量名不能包含空格，但是可以使用下划线来分隔其中的单词；
- 不要使用 Python 的内置函数名称做变量；

```python
Here is a list of the Python keywords.  Enter any keyword to get more help.

False               class               from                or
None                continue            global              pass
True                def                 if                  raise
and                 del                 import              return
as                  elif                in                  try
assert              else                is                  while
async               except              lambda              with
await               finally             nonlocal            yield
break               for                 not
```

变量名需要见名知意，故而我们看到 print 就知道是输出函数。那么我们的变量名也是如此，那现在我就觉得一个变量使用 as 做变量名非常到位。如何解决报错？就是要使用 as 作为变量名：

```python
as = 1888
```

```python
As = "aiyc"
aS = "aiyc"
AS = "aiyc"
```



## 2. 数据类型

![Python 基础数据类型](https://blog.images.bornforthis.cn/docs-images/sha256/fb/fb0f776f955965c1053991280df99abd6baa209cde6818f2476e6e563eb2ba21.png)

### 2.1 数字型「int、float」

::: tabs

@tab 整型

```python
int_num = 1
t = type(int_num)
print(int_num)
print("int num type is:>>>", t)
print("直接检测数据类型，并输出:>>>", type(int_num))

# output
1
int num type is:>>> <class 'int'>
直接检测数据类型，并输出:>>> <class 'int'>
```

@tab 浮点型

```python
float_num = 1.5
t = type(float_num)  # 检测数据类型并把检测结果赋值给变量 t
print(float_num)  # 输出并查看原本的数据
print("float num type is:>>>", t)  # 输出检测结果
print("直接检测数据类型，并输出:>>>", type(float_num))  # 直接检测数据类型，并输出

# output
1.5
float num type is:>>> <class 'float'>
直接检测数据类型，并输出:>>> <class 'float'>
```

:::

### 2.2 字符串「str」

::: tabs

@tab 代码示例

```python
string = "Hello Bornforthis"
t = type(string)
print(string)
print("string type is:>>>", t)
print("直接检测数据类型，并输出:>>>", type(string))

# output
Hello Bornforthis
string type is:>>> <class 'str'>
直接检测数据类型，并输出:>>> <class 'str'>
```

@tab 字符串的三大特性

1. **有序性**：
    1. 从左到右，下标是从 0 开始；
    2. 从右到左，下标是从 -1 开始；
    3. 引号里面出现的每个字符串都算一个下标；
2. **不可变性**：
    1. 不同的编程语言处理字符串的方式可能有所不同，但在大多数语言中，**字符串都是不可变的，这意味着一旦创建，字符串的内容就不能改变**。（辅助记忆：字符串被创建出来之后，就不能被改变）
    2. 注意⚠️：我们说的不可变，是指在**代码运行**的过程当中，不能有对字符串修改、添加、删除之类的操作；
3. **任意字符**：
    1. 键盘上可以输入的字符，都可以是字符串的元素；
    2. 字符放到字符串中，都将成为字符串类型。「也就是：里面的每一个元素都可以称为：子字符（子字符串）」；

:::

### 2.3 列表「list」

::: tabs

@tab 代码示例

```python
lst = ["Hello Bornforthis", 1, 1.1, ("look", "book", 11), [12, "汉堡包"], True, False]
t = type(lst)

print(lst)
print("lst type is:>>>", t)

print("直接检测数据类型，并输出:>>>", type(lst))

# output
['Hello Bornforthis', 1, 1.1, ('look', 'book', 11), [12, '汉堡包'], True, False]
lst type is:>>> <class 'list'>
直接检测数据类型，并输出:>>> <class 'list'>
```

@tab 列表的三大特性

1. **有序性**：
    1. 从左到右，下标是从 0 开始；
    2. 从右到左，下标是从 -1 开始；
    3. 列表里面的每个元素算一个；
    4. **思考一下**：列表的下标和字符串的下标有什么区别？

2. **可变性**：在程序运行的过程当中，列表可以改变添加、删除、修改；

3. **任意数据类型**：注意这里所说的任意数据类型，指的是 Python 所拥有的数据类型。

4. **具象化可变性概念**：

    ```python
    # original_list = [1, 2, 3, 4, 5, 6]
    print("原本的列表:>>>", original_list)
    user_input = input("请输入：>>>")
    # 将用户输入的内容，添加到列表中
    original_list.append(user_input)
    print("添加用户输入后的列表:>>>", original_list)
    ```

    

:::

### 2.4 元组「tuple」

::: tabs

@tab 代码示例

```python
tup = (1, 2, 3, 4, "aiyc", 1.1, [1, 2, 3, 4])
t = type(tup)
print(tup)
print("tup type is:>>>", t)
print("直接检测数据类型，并输出:>>>", type(tup))

# output
(1, 2, 3, 4, 'aiyc', 1.1, [1, 2, 3, 4])
tup type is:>>> <class 'tuple'>
直接检测数据类型，并输出:>>> <class 'tuple'>
```

@tab 三大特性

1. **有序性**：
    1. 从左到右，下标是从 0 开始；
    2. 从右到左，下标是从 -1 开始；
    3. 元组里面每一个元素都是一个下标；
2. **不可变性**：
    1. 元组被创建出来之后，就不能被改变；
    2. 注意⚠️：我们说的不可变，是在代码运行的过程当中，不能有对元组修改、添加、删除之类的操作；
3. **任意数据类型**：注意⚠️这里所说的任意数据类型，是指 Python 所拥有的数据类型；

:::

### 2.5 探究👀「列表 & 元组」

::: tip 为什么🧐有列表后，还需要元组？

列表和元组到底用哪一个呢？

:::

- 如果存储的数据或数量是可变的，比如社交平台上的一个日志功能，是统计一个用户在一周之内看了哪些用户的帖子——那么则用列表更合适。
- 如果存储的数据和数量不变，比如你有一个系统（软件），需要返回的是一个地点的经纬度，然后直接传给用户查看——那么肯定选用元组更合适。
- 列表会比元组更加费资源，特别是在数据量特别大的时候尤为明显。

### 2.6 字典「dict」

::: tabs

@tab 代码示例

```python
d = {"name": "aiyc", "age": 18, 1: "int", 1.1: 1, "tup": (1, 2, 3)}
t = type(d)
print(d)
print("d type is:>>>", t)
print("直接检测数据类型，并输出:>>>", type(d))

# output
{'name': 'aiyc', 'age': 18, 1: 'int', 1.1: 1, 'tup': (1, 2, 3)}
d type is:>>> <class 'dict'>
直接检测数据类型，并输出:>>> <class 'dict'>
```

@tab 字典的特性

1. **无序性「Python 3.6+ 之后有序」**：
    1. 先以无序理解即可；
    2. 字典的有序，并不是上面（字符串、列表、元组……）那种常规有序；
    3. 字典的有序是指：字典中的键值对是有序的，有序前期基本用不到；（在同一个代码运行过程中，字典的键值对的顺序是固定的；）
2. **字典的组成**：是由一系列的 key 和 value 组成。`d = {"key1": "value1", "key2": "value2".....}`
3. **key**：
    1. 不可变的数据类型，才可以当作字典的 key；
    2. 比如：字符串、数字、元组、布尔都可以做 key；
    3. 列表、字典、集合都不可以做 key；
4. **value**：任意数据类型，Python 所拥有的数据类型；
5. **可变性**：可以添加、修改、删除键值对；

:::

### 2.7 集合「set」

::: tabs

@tab 代码示例

```python
set1 = {1, 2, "aiyc", 1.1, "book", (1, 2, 3), False}
t = type(set1)
print(set1)
print("set1 type is:>>>", t)
print("直接检测数据类型，并输出:>>>", type(set1))

# output
{False, 1, 2, 1.1, 'book', 'aiyc', (1, 2, 3)}
set1 type is:>>> <class 'set'>
直接检测数据类型，并输出:>>> <class 'set'>
```

@tab 集合特性

1. **无序性**：集合是没有顺序的，也就是：没有下标；

    ```python
    set1 = {1, 2, "aiyc", 1.1, "book", (1, 2, 3), False}
    print(set1)
    
    # output
    {False, 1, 2, 1.1, 'book', 'aiyc', (1, 2, 3)}
    ```

    **注意：** 如果你运行集合很多次，或者其中某一次，集合顺序没有改变，我们也不能说集合是有序的。Why？你掷骰子，500 次都是 6 点，你能说掷骰子是确定性事件吗？——显然是不行的🙅。

2. **确定性：**

    1. 集合的每一个值都是确定的；（也就是需要不可变的数据类型）
    2. 比如：数字型、布尔、元组、字符串；
    3. 举个例子🌰：列表为什么不行？——列表可变，所以造成不确定性，故：不行🙅。

    ```python
    set1 = {1, 2, [1, 2, 3]}
    
    print(set1)
    
    # output
    Traceback (most recent call last):
      File "/Users/huangjiabao/books/demo.py", line 7, in <module>
        set1 = {1, 2, [1, 2, 3]}
    TypeError: unhashable type: 'list'
    ```

3. **互异性**：出现重复的不会报错，会自动去掉重复的；

    ```python
    set1 = {1, 2, 1, 1, 2, 1, 1}
    
    print(set1)
    
    # output
    {1, 2}
    ```

    

:::

### 2.8 布尔型「bool」

```python
condition = True  # False
print(condition)
print(type(condition))

# output
True
<class 'bool'>
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