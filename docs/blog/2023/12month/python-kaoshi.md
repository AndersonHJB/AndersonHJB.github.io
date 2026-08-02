---
title: Python期末考试代考
date: 2023-12-23 13:35:45
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

你好，我是悦创。

## 三数之和

### 题目描述

给出三个实数 $a$、 $b$ 和 $c$，请你输出 $a + b + c$ 的值，结果保留两位小数。

### 输入格式

输入共三行：

第一行输入一个实数，表示 $a$；

第二行输入一个实数，表示 $b$；

第三行输入一个实数，表示 $c$。

### 输出格式

输出一个浮点数，表示答案。

### 样例 #1

#### 样例输入 #1

```
1
20.23
12.23
```

#### 样例输出 #1

```
33.46
```

### Solution

```python
# 读取输入
a = float(input("请输入实数 a: "))
b = float(input("请输入实数 b: "))
c = float(input("请输入实数 c: "))

# 计算和
sum = a + b + c

# 输出结果，保留两位小数
print(f"{sum:.2f}")
```







## 两数之和

### 题目描述

请按照要求编写 `Python` 代码：
1. 定义一个类，名为 `Add`，该类的初始化方法没有任何参数，该类有一个属性，名为 `value`，初始值为 `None`；
2. 为类 `Add` 实现一个方法，名为 `add`，需要传入两个参数，该方法将这两个参数的和赋值给 `value` 属性；
3. 定义一个类，名为 `AddInt`，该类继承自 `Add` 类，初始化方法没有任何参数，该类有一个属性，名为 `value`，初始值为 `None`；
4. 重写 `AddInt` 类的 `add` 方法，该方法需要传入两个参数，如果这两个参数都为整数，则将这两个参数的和赋值给 `value` 属性，否则不做任何操作；
5. 定义一个类，名为 `AddN`，该类继承自 `Add` 类，初始化方法有一个参数，该类有两个属性，分别为 `value` 和 `n`，`value` 的初始值为 `None`，`n` 的初始值为传入的参数的值；
6. 重写 `AddN` 类的 `add` 方法，只需传入一个参数，该方法把这个参数与属性 `n` 的和赋值给 `value` 属性。

为了与判题程序交互，请在你的代码最后加上以下内容：
```python
while True:
  eval(input())
```

### 输入格式

无需关心输入格式，按照题目要求实现对应的类，并在代码最后附上题目给出的交互代码即可。

你可以使用测试样例检查自己的代码是否可以与判题程序正常交互。

### 输出格式

无需关心输出格式，在代码最后附上题目给出的交互代码即可。

### 样例 #1

#### 样例输入 #1

```
a = Add()
a.add(2023, 1223)
print(a.value)
```

#### 样例输出 #1

```
3246
```

### 样例 #2

#### 样例输入 #2

```
a = AddInt()
a.add(2023, 12.23)
print(a.value is None)
```

#### 样例输出 #2

```
True
```

### 样例 #3

#### 样例输入 #3

```
a = AddN(-1)
a.add(1)
print(a.value)
```

#### 样例输出 #3

```
0
```

### Solution 2

::: code-tabs

@tab Code1

```python
class Add:
    def __init__(self):
        self.value = None

    def add(self, a, b):
        self.value = a + b

class AddInt(Add):
    def add(self, a, b):
        if isinstance(a, int) and isinstance(b, int):
            self.value = a + b

class AddN(Add):
    def __init__(self, n):
        super().__init__()
        self.n = n

    def add(self, a):
        self.value = self.n + a

# 用于判题程序的交互部分
while True:
    eval(input())
```

@tab Code2

```python
class Add:
    def __init__(self):
        self.value = None

    def add(self, a, b):
        self.value = a + b


class AddInt(Add):
    def add(self, a, b):
        if isinstance(a, int) and isinstance(b, int):
            self.value = a + b


class AddN(Add):
    def __init__(self, n):
        super().__init__()
        self.n = n

    def add(self, a):
        self.value = self.n + a


a = Add()
a.add(2023, 1223)
print(a.value)

a = AddInt()
a.add(2023, 12.23)
print(a.value is None)

a = AddN(-1)
a.add(1)
print(a.value)
```



:::

## 向量之和

### 题目描述

请按照要求使用 `Python` 编写代码：
1. 定义一个类表示向量，名为 `Vector`，该类的初始化方法传入一个列表，列表的第 $i$ 个元素表示该向量的第 $i$ 个值；
2. 重载该类的 `__str__` 方法，以列表的字符串形式返回向量的值；
3. 重载该类的 `__len__` 方法，返回一个整数表示向量的长度；
4. 重载该类的加法运算方法，当两个向量相加时，如果它们的长度相同，则返回一个 `Vector` 实例，表示这两个向量相加的结果，否则，请抛出 `ValueError` 异常，异常内容自定义，请注意，实数可以视为长度为 $1$ 的 `Vector` 对象。

为了与判题程序交互，请在你的代码最后加上以下内容：
```python
try:
  eval(input())
except ValueError:
  eval(input())
```

### 输入格式

无需关心输入格式，按照题目要求实现对应的类，并在代码最后附上题目给出的交互代码即可。

你可以使用测试样例检查自己的代码是否可以与判题程序正常交互。

### 输出格式

无需关心输出格式，在代码最后附上题目给出的交互代码即可。

### 样例 #1

#### 样例输入 #1

```
print(len(Vector([])))
```

#### 样例输出 #1

```
0
```

### 样例 #2

#### 样例输入 #2

```
print(5 + Vector([1, 2, 3, 4]))
print("HelloWorld")
```

#### 样例输出 #2

```
HelloWorld
```

### 样例 #3

#### 样例输入 #3

```
print(Vector([1, 2, 3]) + Vector([4, 5, 6]))
```

#### 样例输出 #3

```
[5, 7, 9]
```

### 提示

在 `Python` 中，执行表达式 `a + b` 时，程序会先尝试调用 `a.__add__(b)`，如果失败，则会调用 `b.__radd__(a)`。
4.# 两数之星

### Solution

```python
class Vector:
    def __init__(self, values):
        self.values = values

    def __str__(self):
        return str(self.values)

    def __len__(self):
        return len(self.values)

    def __add__(self, other):
        if isinstance(other, Vector):
            if len(self) != len(other):
                raise ValueError("Vectors are of different lengths.")
            return Vector([a + b for a, b in zip(self.values, other.values)])
        elif isinstance(other, (int, float)):
            if len(self) != 1:
                raise ValueError("Cannot add scalar to vector of length != 1.")
            return Vector([self.values[0] + other])

    def __radd__(self, other):
        return self.__add__(other)

# 用于判题程序的交互部分
try:
    eval(input())
except ValueError:
    eval(input())

class Vector:
    def __init__(self, values):
        # 如果values是单一的数字，将其转换为长度为1的列表
        if isinstance(values, (int, float)):
            values = [values]
        self.values = values

    def __str__(self):
        return str(self.values)

    def __len__(self):
        return len(self.values)

    def __add__(self, other):
        # 处理与实数的加法，将实数转换为长度为1的向量
        if isinstance(other, (int, float)):
            if len(self) != 1:
                raise ValueError("Cannot add scalar to Vector of length other than 1.")
            return Vector([self.values[0] + other])

        if isinstance(other, Vector):
            if len(self) != len(other):
                raise ValueError("Vectors are of different lengths.")
            return Vector([a + b for a, b in zip(self.values, other.values)])

        raise ValueError("Can only add Vector or scalar to Vector.")

    def __radd__(self, other):
        return self.__add__(other)

# 用于判题程序的交互部分
try:
    eval(input())
except ValueError:
    eval(input())


# print(len(Vector([])))
# print(5 + Vector([1, 2, 3, 4]))
# print("HelloWorld")
```



## 两数之星

### 题目描述

假设 $a$ 和 $b$ 都是非负整数，定义一种新的二元运算符 $\star$，满足以下运算规则：
* $0 \star 0 = 0$；
* 如果 $a$ 和 $b$ 都是偶数，则 $a \star b = 2 \times \left(\dfrac{a}{2} \star \dfrac{b}{2} \right)$；
* 如果 $a$ 和 $b$ 都是奇数，则 $a \star b = 2 \times \left(\dfrac{a-1}{2} \star \dfrac{b-1}{2} \right)$；
*  如果 $a$ 是偶数，$b$ 是奇数，则 $a \star b = 1 + 2 \times \left(\dfrac{a}{2} \star \dfrac{b-1}{2} \right)$；
* 其他情况，$a \star b = b \star a$。

给出两个非负整数 $x$ 和 $y$，请你输出 $x \star y$ 的结果。

### 输入格式

输入共两行：

第一行输入一个非负整数，表示 $x$；

第二行输入一个非负整数，表示 $y$。

### 输出格式

输出一个整数，表示答案。

### 样例 #1

#### 样例输入 #1

```
12
23
```

#### 样例输出 #1

```
27
```

### 提示

本题共有十组测试数据：
* 对于前四组测试数据，满足 $x \le 1$ 且 $y \le 1$；
* 对于前八组测试数据，满足 $x \le 100$ 且 $y \le 100$；
* 对于所有的测试数据，满足 $x \le 10^{1000}$ 且 $y \le 10^{1000}$。

提示：
1. 可以使用 `sys` 模块中的 `setrecursionlimit` 函数设置最大递归深度；
3. 递归法无法通过最后一个测试数据。

### Solution

```python
def two_numbers_star(x, y):
    if x == 0 or y == 0:
        return 0
    if x % 2 == 0 and y % 2 == 0:
        return 2 * two_numbers_star(x // 2, y // 2)
    elif x % 2 == 1 and y % 2 == 1:
        return 2 * two_numbers_star((x - 1) // 2, (y - 1) // 2)
    elif x % 2 == 0 and y % 2 == 1:
        return 1 + 2 * two_numbers_star(x // 2, (y - 1) // 2)
    else:
        return two_numbers_star(y, x)

# 测试样例
x = 12
y = 23
result = two_numbers_star(x, y)
result

```



## 数列之和

### 题目描述

给出 $n$ 个整数 $a_1$, $a_2$, $\cdots$, $a_n$，请问：是否存在不大于 $n$ 的两个不相等的正整数 $i$ 和 $j$，使得 $a_i + a_j = a_1 + a_2 + \cdots + a_n$？

如果不存在，请输出 $0$，如果存在，请输出 $j+(n+1) \times i$ 的最小值。

### 输入格式

输入共 $n + 1$ 行：

第一行输入一个正整数，表示 $n$；

接下来的 $n$ 行，每行输入一个整数，依次表示 $a_1$, $a_2$, $\cdots$, $a_n$。

### 输出格式

输出一个非负整数，表示答案。

### 样例 #1

#### 样例输入 #1

```
5
15
-11
2
7
-4
```

#### 样例输出 #1

```
22
```

### 提示

本题共有五组测试数据：
* 对于第一组测试数据，满足 $n = 2$，$|a_k| \le 10$；
* 对于前三组测试数据，满足 $n \le 10^3$, $|a_k| \le 10^4$；
* 对于所有的测试数据，满足 $n \le 10^5$, $|a_k| \le 10^6$。

#### 样例解释

$a_3 + a_4 = a_1 + a_2 + a_3 + a_4 + a_5 = 9$，所以 $i = 3$，$j = 4$，或 $i = 4$，$j = 3$，答案是 $4 + 6 \times 3 = 22$ 和 $3 + 6 \times 4 = 27$ 中的较小者，即 $22$。

### Solution

```python
def find_minimal_sum_revised(n, numbers):
    # 计算总和
    total_sum = sum(numbers)

    # 使用字典记录每个数值以及它最早出现的位置
    index_dict = {}

    # 初始化最小值为无穷大
    min_value = float('inf')

    # 遍历数组中的每个元素
    for i in range(n):
        # 计算配对的数值
        pair_num = total_sum - numbers[i]

        # 检查这个配对数值是否在字典中，且它的索引不同于当前的索引
        if pair_num in index_dict and index_dict[pair_num] != i:
            # 如果是，则计算j+(n+1)*i的值
            current_value = i + 1 + (index_dict[pair_num] + 1) * (n + 1)
            # 更新最小值
            min_value = min(min_value, current_value)

        # 如果这个数值还不在字典中，将其加入字典
        if numbers[i] not in index_dict:
            index_dict[numbers[i]] = i

    # 如果没有找到合适的对，则返回0
    return min_value if min_value != float('inf') else 0

# 重新测试样例
n = 5
numbers = [15, -11, 2, 7, -4]
find_minimal_sum_revised(n, numbers)
```



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
