---
title: 关卡二：数字型与字符串
icon: blog
date: 2026-04-19 10:15:08
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

## 1. 数字型

### 1.1 数字型的特点

```python
In [2]: 1 + 1
Out[2]: 2

In [3]: 1 + 1.0
Out[3]: 2.0

In [4]: 2 - 1
Out[4]: 1

In [5]: 2 - 1.0
Out[5]: 1.0

In [6]: 2 * 1
Out[6]: 2

In [7]: 2 * 1.0
Out[7]: 2.0

In [8]: 2 * 1
Out[8]: 2

In [9]: 9 / 3
Out[9]: 3.0
```

观察上面的所有代码和相对应的运行结果可知：

- 结论1：如果其中有一个元素是浮点数，结果就会得到浮点数（优先级最高）；
- 结论2：除法涉及精度问题，所以最后的结果类型：就是浮点数；

### 1.2 算术运算符

**算术运算符：** 用于算术计算，这个很简单所以直接观看一下自行编写例子即可。

| 运算符 | 描述                                   | 例子          |
| ------ | -------------------------------------- | ------------- |
| `+`    | 加法运算符                             | `1 + 1 = 2`   |
| `-`    | 减法运算符                             | `2 - 1 = 1`   |
| `*`    | 乘法运算符                             | `2 * 3 = 6`   |
| `/`    | 除法运算符                             | `9 / 3 = 3.0` |
| `**`   | 指数运算符                             | `2 ** 3 = 8`  |
| `%`    | 取余运算符，计算余数                   | `9 % 2 = 1`   |
| `//`   | 除法取整运算符，计算商并去除其小数部分 | `9 // 2 = 4`  |

### 1.3 小试牛刀：生成新数字

给定一个两位整数，按照以下规则生成两个新数字：

- Q1：第一个新数字是原整数的十位数字和个位数字之和；
- Q2：第二个新数字是原整数的数字反转（如原整数为 `21`，反转后为 `12`）；

请你编写 Python 代码，输出这两个新数字。

**给定如下初始化代码：**

```python
num = 92
```

**输出示例：**

```python
Q1: 11
Q2: 29
```

**更多的示例：**

示例1：当 `num = 91`，输出：

```python
Q1: 10
Q2: 19
```

示例2：当 `num = 26`，输出：

```python
Q1: 8
Q2: 62
```

示例3：当 `num = 18`，输出：

```python
Q1: 9
Q2: 81
```

### 1.4 比较运算符：比较值的大小

对于比较运算符，你只需要知道运行结果会得到布尔类型即可。

| 运算符 | 描述                                           | 例子            |
| ------ | ---------------------------------------------- | --------------- |
| `>`    | 判断第一个运算对象是否大于第二个运算对象       | `print(1 > 2)`  |
| `<`    | 判断第一个运算对象是否小于第二个运算对象       | `print(1 < 2)`  |
| `>=`   | 判断第一个运算对象是否大于或等于第二个运算对象 | `print(3 >= 3)` |
| `<=`   | 判断第一个运算对象是否小于或等于第二个运算对象 | `print(3 <= 4)` |
| `==`   | 判断两个运算对象是否相同                       | `print(2 == 2)` |
| `!=`   | 判断两个运算对象是否不相同                     | `print(2 != 1)` |

```python
print(1 > 2)
print(1 < 2)
print(3 >= 3)
print(3 <= 4)
print(2 == 2)
print(2 != 1)

# ---output---
False
True
True
True
True
True
```

### 1.5 赋值运算符

接下来是 Python 的运算符，直接查看下表格：

| 运算符 | 描述                                 | 例子       |
| ------ | ------------------------------------ | ---------- |
| `=`    | 把右侧的运算对象赋值给左侧的运算对象 | `a = 1`    |
| `+=`   | `a += b` 等同于 `a = a + b`          | `a += 10`  |
| `-=`   | `a -= b` 等同于 `a = a - b`          | `a -= 10`  |
| `*=`   | `a *= b` 等同于 `a = a * b`          | `a *= 10`  |
| `/=`   | `a /= b` 等同于 `a = a / b`          | `a /= 10`  |
| `**=`  | `a **= b` 等同于 `a = a ** b`        | `a **= 10` |
| `//=`  | `a //= b` 等同于 `a = a // b`        | `a //= 10` |
| `%=`   | `a %= b` 等同于 `a = a % b`          |            |

```python
a = 1
a += 10
a -= 10
a *= 10
a /= 10
a **= 10
a //= 10
print(a)  # 输出 0.0
```

### 1.6 小试牛刀

下面程序输出上面结果？

```python
x = 4.5
y = 2
print(x // y)
```



## 2. 字符串

### 2.1 字符串的创建

```python
name = 'bornforthis'
number = "18"
paragraph = '''Hello,Bornforthis!
Hello,World!'''
paragraph_two = """Hello,Bornforthis!
Hello,World!"""
```

- **单双引号混用，是第一个解决方案。**
- **三个单引号或三个双引号，可以实现原样输出。**
- **用于多行注释。**
- **单双引号和三引号可以混合使用。**

### 2.2 检测字符串长度

`len()` **说明：返回字符串中的字符数。**

```python
paragraph = "Hello,Bornforthis!"
print(len(paragraph))
```



### 2.3 字符串中的字符获取

::: code-tabs

@tab 提取单个字符

```python
string = "bornforthis"
select = string[0]
print(select)
```

@tab 提取多个连续字符

```python
select = string[0:3]  # bor
print(select)
```

@tab 提取不连续的字符

```python
string = "0123456789"
select = string[0:len(string):2]
print(select)
```

:::

### 2.4 字符串提取优化

```python
string = "0123456789"
"""
语法: string = "0123456789"
select = string[::step]
PS: 步长 (step) 可以直接设置，且不需要指定 start 和 end，Python 默认会取到字符串的开始和结尾。
"""
# 获取字符 02468（从索引 0 开始，每隔 2 个字符提取一个）
select = string[::2]
print(select)  # 输出：02468

# 提取字符 13579（从索引 1 开始，每隔 2 个字符提取一个）
select = string[1::2]
print(select)  # 输出：13579

# 提取字符串中的特定字符
string = "bornforthis"

# 获取 bnri（从索引 0 开始，每隔 3 个字符提取一个）
select = string[::3]
print(select)  # 输出：bnri

# 获取 ofts（从索引 1 开始，每隔 3 个字符提取一个）
select = string[1::3]
print(select)  # 输出：ofts
```

### 2.5 字符串倒序

字符串的第三个位置，控制的是字符提取的方向。默认为正数 1，如果我们改成 -1，则会变成反方向。

```python
string = "bornforthis"
reverse = string[::-1]
print(reverse)

# 输出
sihtrofnrob
```

### 2.6 小试牛刀： 获取 `rofn`

```python
string = "bornforthis"
select = string[-5:-9:-1]
print(select)  # rofn
```



### 2.7 字符串内置方法

::: code-tabs

@tab .upper()

```python
# 将字符串内容，全部转成大写。
string = "bornforthis"
upper_string = string.upper()
print(upper_string)

# ---output---
BORNFORTHIS
```

@tab .lower()

```python
# 将字符串中的所有字母转换为小写。
string = "BORNFORTHIS"
lower_string = string.lower()
print(lower_string)

# ---output---
bornforthis
```

@tab .capitalize()

```python
# 将字符串首字母转换成大写。「只对第一个字母大写，其它后面的字符会变成小写」
string = "bornForthis To Aiyc"
capitalize_string = string.capitalize()
print(capitalize_string)

# ---output---
Bornforthis to aiyc
```

@tab .title()

```python
# 将字符串中的每个单词的首字母转换成大写，其余的字符都转换成小写。
# 示例 1: 将每个单词的首字母大写
string = "bornforthis to aiyc"
title_string = string.title()
print(title_string)

# 示例 2: 不管是什么分隔符，都会将单词的首字母大写
string = "bornforthis-to-aiyc"
title_string = string.title()
print(title_string)

# 示例 3: 大小写字母混合的情况下，除了首字母外其余字母转为小写
string = "bornforThis to aiYc"
title_string = string.title()
print(title_string)
```

@tab .startswith()

```python
# 检测字符串是否以特定字符或单词开头，返回布尔值。
# 示例 1: 检测字符串是否以 "b" 开头？
string = "bornforthis"
startswith_string = string.startswith("b")
print(startswith_string)

# 示例 2: 检测字符串是否以 "bo" 开头？
string = "bornforthis"
startswith_string = string.startswith("bo")
print(startswith_string)

# 示例 3: 检测字符串是否以 "p" 开头？
string = "bornforthis"
startswith_string = string.startswith("p1")  # 显然不是，则结果肯定为 False
print(startswith_string)
```

@tab .endswith()

```python
# 检测字符串是否以特定字符或单词结尾，返回布尔值。
# 示例 1: 检测字符串是否以 "s" 结尾？
string = "bornforthis"
endswith_string = string.endswith("s")
print(endswith_string)

# 示例 2: 检测字符串是否以 "is" 结尾？
string = "bornforthis"
endswith_string = string.endswith("is")
print(endswith_string)

# 示例 3: 检测字符串是否以 "i" 结尾？
string = "bornforthis"
endswith_string = string.endswith("i")
print(endswith_string)

# 示例 4: 检测字符串是否以 "s6" 结尾？
string = "bornforthis"
endswith_string = string.endswith("s6")
print(endswith_string)
```

@tab .count()

```python
# 计算特定字符或单词在目标字符串中存在的次数。
# 示例 1: 计算字符 "r" 在字符串中出现的次数
count_string = string.count('r')
print(count_string)

# 示例 2: 计算子字符串 "or" 在字符串中出现的次数
string = "bornforthis"
count_string = string.count('or')
print(count_string)

# 示例 3: 计算字符 "a" 在字符串中出现的次数（测试不在字符串中的字符，count 会给我们返回什么结果呢？
string = "bornforthis"
count_string = string.count('a')
print(count_string)

# 示例 4: 计算子字符串 "ap" 在字符串中出现的次数
string = "bornforthis"
count_string = string.count('ap')
print(count_string)
```

@tab .find()

```python
string = "bornforthis"
find_string = string.find('o')
print(find_string)

# ---output---
1
```

@tab .index()

```python
string = "bornforthis"
index_result = string.index('o')
print(index_result)

# ---output---
1
```

@tab .isdigit()

```python
# 判断字符串是不是纯数字字符串，字符串中但凡有一个字符是非数字，则返回 False。
string = "12345678"
isdigit_result = string.isdigit()
print(isdigit_result)

# ---output---
True
```

@tab .isalpha()

```python
# 判断字符串是不是纯字母字符串，字符串中但凡有一个非字母的，则返回 False。
string = "bornforthis"
isalpha_result = string.isalpha()
print(isalpha_result)

# ---output---
True
```

@tab .isalnum()

```python
string = "bornforthis"
boolean = string.isalnum()
print(boolean)

# ---output---
True
```

@tab .isupper()

```python
string = "BORNFORTHIS"
isupper_result = string.isupper()
print(isupper_result)

# ---output---
True
```

@tab .islower()

```python
string = "bornforthis"
islower_result = string.islower()
print(islower_result)

# ---output---
True
```

@tab .isspace()

```python
string = "   "
isspace_result = string.isspace()
print(isspace_result)

# ---output---
True
```

@tab .strip()

```python
string = "   bornforthis   "
strip_result = string.strip()
print("原本的字符串:", string)
print("去掉前后空白字符后:", strip_result)

# ---output---
原本的字符串:    bornforthis   
去掉前后空白字符后: bornforthis
```

@tab .replace()

```python
string = "ai-bornforthis-ai"
replace_result = string.replace('ai', 'love', 1)  # 替换一次
print("原本的字符串:", string)
print("替换后:", replace_result)

# ---output---
原本的字符串: ai-bornforthis-ai
替换后: love-bornforthis-ai
```

@tab .split()

```python
string = "ai bornforthis ai"
split_result = string.split()
print("原本的字符串:", string)
print("分割后:", split_result)

# ---output---
原本的字符串: ai bornforthis ai
分割后: ['ai', 'bornforthis', 'ai']
```

@tab .join()

```python
string = "bornforthis"  # 如果是待拼接对象是字符串，则字符串内可以包含全部字符种类
join_result = '-'.join(string)
print("原本的字符串:", string)
print("拼接后:", join_result)
```



:::









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