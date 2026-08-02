---
title: 01-Variables, String, input
date: 2024-06-19 15:47:07
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
watermark: true
---

::: tip 主题

Variables, Literals, and Expressions - Core Concepts in Computer Programming

:::

## 1. 变量

### 1.1 变量的创建方法

```python
name = 'hanmeimei'
print(name)  #  在覆盖之前输出

name = "aiyuechuang"
print(name)  # name 被覆盖
```

### 1.2 print 探究

1. 添加提示输出

```python
name = 'hanmeimei'
print("name value is:>>>", name)

name = "aiyuechuang"
print("name 被覆盖:>>>", name)  # name 被覆盖
```

2. 多个变量输出

```python
a = 1
b = 2
c = 3
print(a)
print(b)
print(c)

print(a, b, c)
```

3. end 控制换行

```python
a = 1
b = 2
c = 3
print(a, end="\n\n")  # \n newline
print(b, end="\nlook")
print(c)

print(a, b, c)
```

4. sep 控制多个输出间隔

```python
a = 1
b = 2
c = 3
print(a, b, c, sep="    aiyc")
```

5. 多个变量同时赋予相同的值

```python
a = b = c = 1
print(a, b, c)
```

6. 多个变量同时赋予不同的值

```python
a, b, c = 1, 2, 3
print(a, b, c)
```

7. 变量的命名规则
    1. 大小写英文、数字和 `_` 的结合，且不能用数字开头；
    2. 系统关键词不能做变量名使用「获取关键词列表：`help('keywords')`
    3. Python 中的变量名区分大小写；
    4. 变量名不能包含空格，但是可以使用下划线来分隔其中的单词；
    5. 不要使用 Python 的内置函数名称做变量；

## 2. 运算符

1. `+、-、*、/、**、//、%`

```python
a = 2
b = 3
print(a + b)
print(a - b)
print(a * b)
print(a / b)
a = 9
b = 2
print(a // b)
print(a % b)
print(a ** b)
```

## 3. 数据类型

### 3.1 数字型

```python
num1 = 1
num2 = 1.1
print(num1, num2)
print(type(num1), type(num2))
```

### 3.2 字符串

1. 定义

```python
string = "aiyuechuang"
print(string)
```

````python
string = """### 3.1 数字型

```python
num1 = 1
num2 = 1.1
print(num1, num2)
print(type(num1), type(num2))
```

### 3.2 字符串

```python
string = "aiyuechuang"
print(string)
```

"""
print(string)
````

- 从左到右 0 开始
- 从右到左 -1 

```python
string = "aiyuechuang"
print(string[0])
print(string[-1])
```

```python
string = "aiyuechuang hello"
print(string[0:11])
```

```python
string = "0123456789"
print(string[0:10:2])
print(string[1:10:2])


string = "0123456789"
print(string[0:10:3])  # 等价 print(string[::3])


string = "0123456789"
print(string[::-2])
```

```python
string = "0123456789"
print(string[-3:-6:-1])  # 不写 -1 没有结果
```



2. 长度

```python
string = "aiyuechuang"
print(len(string))  # 从数字 1 开始数
```

::: tip

下标：从 0 开始；

数量：从 1 开始数；

:::

## 4. input

```python
s = input('please enter a string: ')
print(s)
```

Input 得到的都是字符串

## 5. 列表

### 5.1 数据提取

```python
student1 = ['lilei', 18, 'class01', 201901]
student2 = ['hanmeimei', 19, 'class02', 201902]
print(student1)
print(student2)
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/84/84a8f8381f84b887e3569b73ab48385117ff5e37be413fbcfb461ca323988e0e.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/df/dfc036cdfda1ac8ba0bc32727735d27cfe175ab20ea55e11cbb22b469f93ebd8.png)



![](https://blog.images.bornforthis.cn/docs-images/sha256/c6/c6c5a7bc70dae8fb3a5fc0d12f66ece2d13693ca42b24925895c6503e344586a.png)

### 5.2 切片赋值

```python
In [1]: name = 'Python'

In [2]: lst = list(name)

In [3]: lst
Out[3]: ['P', 'y', 't', 'h', 'o', 'n']

In [4]: lst[2:]
Out[4]: ['t', 'h', 'o', 'n']

In [5]: list('abc')
Out[5]: ['a', 'b', 'c']

In [6]: lst[2:] = list('abc')

In [7]: lst
Out[7]: ['P', 'y', 'a', 'b', 'c']
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/a0/a0bea3305a11bf96659bc74f265d0885030bb63d638eeafdb908adfe9ea337be.png)

![img](https://blog.images.bornforthis.cn/docs-images/sha256/f0/f0c2b7675562b54a4f3cc50e71734dadfe0b1038783346c4fd678b2adc44c513.png)

```python
In [8]: numbers = [1, 5]

In [9]: numbers[1:1]
Out[9]: []

In [10]: numbers[1:1] = [2, 3, 4]

In [11]: numbers
Out[11]: [1, 2, 3, 4, 5]

In [12]: numbers[1:4] = []

In [13]: numbers
Out[13]: [1, 5]
```

### 5.8 .append()

```python

```



### 5.3 小试牛刀

![](https://blog.images.bornforthis.cn/docs-images/sha256/2d/2d2585dc6f3ff5f1a9cc75c58a50e4d4c2c839e0378dc2eda005c34774baadbd.png)

```python
numbers = [1, 2, 3, 5, 6]
position = int(input('Enter position: '))
value = int(input('Enter value: '))
numbers[position: position] = [value]
print(numbers)

numbers = [1, 2, 3, 5, 6]
position = int(input('Enter position: '))
value = int(input('Enter value: '))
result = numbers[:position] + [value] + numbers[position:]
print(result)
```

### 5.4 insert

```python
numbers = [1, 2, 3, 5, 6]
numbers.insert(3, 4)
print(numbers)  # [1, 2, 3, 4, 5, 6]
```

### 5.5 len

```python
student_list = ['李雷', '韩梅梅', '马冬梅']
print(len(student_list))

# ---output---
3
```

### 5.6 列表修改

```python
name = ['lilei', 'hanmeimei']
print('before:', name)

name[0] = 'madongmei'
print('after:', name)


# ---output---
before: ['lilei', 'hanmeimei']
after: ['madongmei', 'hanmeimei']
```

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print('before:', numbers)

numbers[1:5] = ['one', 'two', 'three', 'four']
print('after:', numbers)

# ---output---
原本: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
修改后: [0, 'one', 'two', 'three', 'four', 5, 6, 7, 8, 9, 10]
```

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print('before:', numbers)

# 元素数量不一样
numbers[1:5] = ['one', 'two']
print('after:', numbers)

# ---output---
before: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
after: [0, 'one', 'two', 5, 6, 7, 8, 9, 10]
```

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print('before:', numbers)

# 元素数量不一样 & 字符串自动拆开成列表
numbers[1:5] = 'bornforthis'
print('after:', numbers)

# ---output---
before: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
after: [0, 'b', 'o', 'r', 'n', 'f', 'o', 'r', 't', 'h', 'i', 's', 5, 6, 7, 8, 9, 10]
```

```python
lst = ['钥匙', '毒药']
print('before:', lst)
lst.append('解药')
print('after:', lst)

# ---output---
before: ['钥匙', '毒药']
after: ['钥匙', '毒药', '解药']
```

```python
numbers1 = [0, 1, 2, 3, 4]
numbers2 = [5, 6, 7, 8, 9]
print(numbers1 + numbers2)

# ---output---
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```python
inventory = ['钥匙', '毒药', '解药']
print('解药' in inventory)
print('迷药' in inventory)
```

### 5.7 sort

```python
numbers = [2, 1, 4, 3, 7, 6, 5, 0, 9, 8]
numbers.sort(reverse=False)
print(numbers)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers = [2, 1, 4, 3, 7, 6, 5, 0, 9, 8]
numbers.sort(reverse=True)
print(numbers)  # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
# 排序
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/a7/a780fb86760a4e4ce9e45d88b32ef3c89bda4ba87a05ef9c97c26704317fe131.png)

```python
str_to_list = list('132569874')
print(str_to_list)

even_position = str_to_list[::2]
even_position.sort(reverse=True)
str_to_list[::2] = even_position
print(str_to_list)
```

### 5.8 列表内置函数

1. index：查找元素第一次出现的下标，不存在则报错

```python
lst = [1, 2, 3, 4]
lst.append(10)
print(lst)

# 查询 1 的下标
r = lst.index(1)
print(r)
r = lst.index(30)
print(r)
```

2. remove: 删除指定的值

```python
lst = [1, 2, 3, 4, 3]
lst.remove(3)
print(lst)

lst.remove(4)

print(lst)
```

3. pop

```python
lst = [1, 2, 3, 4, 3]
lst.pop()  # 默认删除最后一个元素
print(lst)

# 指定删除的下标
lst.pop(2)
print(lst)
```





## 6. 比较运算符

![](https://blog.images.bornforthis.cn/docs-images/sha256/5d/5dbadb1580b804e4db089768f4aee4cc9f3235f17d417736940086e2ee3383b0.png)

## 7. input & print



## 8. function

### 8.1 语法

![](https://blog.images.bornforthis.cn/docs-images/sha256/2e/2eb4cc5571440b173fdecd6c7842731d3223d0bdb4cee651838866020e7183cb.png)

```python
def HelloUser(username):
    print(f"Hello {username}")
HelloUser("SYQ")
```

::: code-tabs

@tab Q1

```python
def reverse_string(string):
    """接收变量 string 并翻转返回"""
    result = string[::-1]
    # print(result)
    return result


string = 'bornforthis'
# 我存储函数操作后的结果 = reverse_string(string)
# print(我存储函数操作后的结果)
assert reverse_string(string) == 'sihtrofnrob'



string = 'aiyc'
assert reverse_string(string) == 'cyia'
```

@tab Q2

```python
def total_sum(n):
    """接收一个参数 n，计算总和"""
    pass

n = 10
print(total_sum(n))

n = 100
print(total_sum(n))
assert 5050 == total_sum(n)

n = 1000
print(total_sum(n))
```

@tab Q2-A

```python
def total_sum(n):
    """接收一个参数 n，计算总和"""
    total = 0  # 每次计算的值
    for i in range(1, n + 1):
        total = total + i
    print(total)
    return total


n = 10
print(total_sum(n))

n = 100
print(total_sum(n))
assert 5050 == total_sum(n)

n = 1000
print(total_sum(n))
```

@tab Q3

```python
def calculator(a, b, c):
    if c == '+':
        pass


assert calculator(1, 2, "+") == 3
assert calculator(1, 2, "*") == 3

```

@tab Q

```python
def calculator(a, b, c):
    if c == '+':
        pass


assert calculator(a=1, c="+", b=2) == 3
# assert calculator(1, 2, "*") == 3
```





:::

**检查括号有效性** 

编写一个函数`validate_parentheses(s)`，它接受一个字符串作为参数，并返回一个布尔值，表示字符串中的圆括号是否有效。有效的圆括号意味着每一个“("都必须有一个对应的")"来闭合，且括号的顺序正确。

例如，`validate_parentheses("(())()")` 应返回 `True`，而 `validate_parentheses("(()")`或 `validate_parentheses(")(")`应返回 `False`。

```python
# 测试函数
print(validate_parentheses("(())()"))  # 输出: True
print(validate_parentheses("(()"))     # 输出: False
print(validate_parentheses(")("))      # 输出: False
```

```python
def is_subsequence(s, t):
    # 初始化 s 和 t 的索引为 0
    # index_s, index_t = 0, 0
    index_s = index_t = 0
    # 获取 s 和 t 的长度
    len_s, len_t = len(s), len(t)
    while index_s < len_s and index_t < len_t:
        # index_s 用来提取 s 这个字符中的字符
        # index_t = 10000000
        if s[index_s] == t[index_t]:
            index_s += 1  # 移动s的索引
        index_t += 1  # 不管找到与否，t的索引都向前移动
    result = index_s == len_s
    return result
```

### 8.2 变量作用域

![](https://blog.images.bornforthis.cn/docs-images/sha256/fd/fd617190c9eada96e6310324940552628dabb852e93274980bdff8cd291ef5fd.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/50/500802732173d99c672fbfb4a231992b2bff50d27cc8c41763878c9fbea0f6a2.png)





## 9. 字典

### 9.1 如何创建一个电话簿

![](https://blog.images.bornforthis.cn/docs-images/sha256/c9/c92440ca1be1af75cfe787d6e3e9433faa1ef41efa98181d217507102589af84.png)

### 9.2 电话本

```python
d = {'lilei': '123456', 'hanmeimei': '1234'}
check = input(":>>>")
print(d[check])
```



### 9.3 字典结构

![](https://blog.images.bornforthis.cn/docs-images/sha256/da/da9d434fb1043d1e462fddac8c8d986725912486f18880f6761b1351eea4e478.png)

### 9.4 字典结构 key & value

![](https://blog.images.bornforthis.cn/docs-images/sha256/44/44276545aa9066aa862939d92381859569f322612fd295ac3b180057a02f7cbe.png)

### 9.5 用字典 dict 函数创建字典

- 不可变的数据类型才能当作字典的 key
- value 是任意数据类型

![](https://blog.images.bornforthis.cn/docs-images/sha256/81/8108728a8ff8d9232ba4c84d479942cfb4f6dadf1636b1d01f1f6af4ae440baf.png)

### 9.6 提取数据

![](https://blog.images.bornforthis.cn/docs-images/sha256/1f/1f6cb291e03159aa659ef2cf84d2aa7dac3a9128ee82024504c711be84f5c269.png)

- 上面的提取方法存在问题，在提取不存在的 key 的时候，会报错：

```python
grade = {'李雷': '98', '韩梅梅': '99'}
print(grade['马冬梅']) 

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/44-liuchengyang/look.py", line 9, in <module>
    print(grade['马冬梅'])
KeyError: '马冬梅'
```

就像我们查询电话簿的时候，没找到会返回：未找到。

![](https://blog.images.bornforthis.cn/docs-images/sha256/df/dfa3df502ae74edbb965ed6183b1afde0d66ce4e2beaa7e757282f0f52674427.png)

### 9.7 使用 .get() 解决

当使用 `get` 方法时，需要提供一个键（key），方法会返回与该键关联的值。如果该键在字典中不存在，`get` 方法将返回 `None`，或者你可以指定一个默认值，如果键不存在，则返回这个默认值。

这是 `get` 方法的基本语法：

```python
value = dictionary.get(key, default_value)
```

- `key`：你想要检索的键。
- `default_value`：（可选）如果键不存在时返回的值。如果未提供此参数，默认值为 `None`。

下面是一个使用 `get` 方法的例子：

```python
# 创建一个简单的字典
my_dict = {'name': 'Alice', 'age': 25}

# 使用 get 访问一个存在的键
print(my_dict.get('name'))  # 输出: Alice

# 使用 get 访问一个不存在的键，并提供默认值。
# 如果没有提供第二个参数，则返回 None
print(my_dict.get('gender', 'Not Specified'))  # 输出: Not Specified
```

在第一个 `get` 调用中，我们访问了键 `'name'`，它在字典中存在，因此返回了对应的值 `'Alice'`。在第二个调用中，我们试图访问键 `'gender'`，它在字典中不存在，因此返回了我们指定的默认值 `'Not Specified'`。

### 9.8 字典更新数据

![](https://blog.images.bornforthis.cn/docs-images/sha256/57/571495ffd6ff2d4a20806be5d4b26a2a8a6cab7449a7b40ac0afe52e7a05d26e.png)



### 9.9 字典删除

![](https://blog.images.bornforthis.cn/docs-images/sha256/a6/a64decd172484a57e13de6b84c73f3fe9d573ef3e4f91cd99cde70b17b857daa.png)

### 9.10 字典的编程题

1. **统计字符出现频率** 

   编写一个函数 `count_characters(s)` ，它接受一个字符串 `s` 作为参数，并返回一个字典，字典的键是字符串中出现的每个字符，值是该字符在字符串中出现的次数。 

   例如，`count_characters("hello world")`应返回`{'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}`。

   ```python
   lst = ['name', 'name', 'aiyc', 19]
   empty_dict = dict()
   
   for word in lst:
       print(word)
       if word in empty_dict:
           empty_dict[word] = empty_dict[word] + 1
       else:
           empty_dict[word] = 1
   #
   print(empty_dict)
   ```

   

2. **合并字典，值相加**

   编写一个函数`merge_dictionaries(d1, d2)`，它接受两个字典`d1`和`d2`作为参数，这两个字典的键都是字符串，值是整数。函数应返回一个新字典，其中包含两个字典的所有键，如果某个键在两个字典中都存在，其值应为两个字典中该键值的和。 

   例如，`merge_dictionaries({'a': 1, 'b': 2}, {'b': 3, 'c': 4})` 应返回 `{'a': 1, 'b': 5, 'c': 4}`。

   ```python
   def merge_dictionaries(d1, d2):
       lst1 = list(d1.keys())
       lst2 = list(d2.keys())
       for d1_key in lst1:
           if d1_key in lst2:
               d2[d1_key] = d2[d1_key] + d1[d1_key]
           elif d1_key not in lst2:
               # d2[d1_key] = d1[d1_key]
               d2.update({d1_key: d1[d1_key]})
       print(d2)
   ```

   

3. **键按值排序**

   编写一个函数 `sort_keys_by_value(d)` ，它接受一个字典 `d` 作为参数，该字典的值都是整数。函数应返回一个列表，列表中的元素是按它们在字典中的值排序的键（从高到低）。 

   例如，`sort_keys_by_value({'a': 3, 'b': 1, 'c': 2})` 应返回 `['a', 'c', 'b']`。

## 10. for and while

### 10.1 for 循环基本语句

![](https://blog.images.bornforthis.cn/docs-images/sha256/22/2208fdfcb29a7f03b5337b41c4e95502ed8affd1ea34f69c07e618f93d0a5715.png)

### 10.2 range

![](https://blog.images.bornforthis.cn/docs-images/sha256/e7/e7ef69a3d3e6ca20e4917a5d14cded7290a66cc92305cf07bf6fec433175960f.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/c2/c2dd6995b81384d7f461b16248e9625fe30dc2c973b94c0e90f997da8eaafdce.png)

### 10.3 for 循环通过索引遍历序列元素

![](https://blog.images.bornforthis.cn/docs-images/sha256/85/85a517309308a002d9785934026c3650881abd3729906f70472566d77c7fd17f.png)

### 10.4 break 跳出循环

![](https://blog.images.bornforthis.cn/docs-images/sha256/7d/7da885f0997796d842b21593e7ef254ec9e17d731745627ee3c29a2f0cdfff19.png)



![](https://blog.images.bornforthis.cn/docs-images/sha256/c1/c1bfe688875cd5721a6e11a3b20fa738168769d05a4b79a492c80babb217e632.png)



### 10.5 pass 啥都不干，占位语句

![](https://blog.images.bornforthis.cn/docs-images/sha256/2e/2ed663b98a1eef264ba70f36c9e97536b3b6aa8be3897827aac2115a7d4e43d1.png)



```python
"""
def merge_dictionaries(d1, d2):
    lst1 = list(d1.keys())
    lst2 = list(d2.keys())
    lst1_value = list(d1.value())

    for key in lst1:
        if lst2[index_lst2] in key:
           index_lst1_value + index_lst2_value
"""
"""
def merge_dictionaries(d1, d2):
    lst1 = list(d1.keys())
    lst2 = list(d2.keys())
    lst1_value = list(d1.value())
    index_lst1 = 0
    index_lst1_value = 0

    for key in lst1:
        if lst2[index_lst1] in lst1:
            index_lst1_value += 1
"""


# def merge_dictionaries(d1, d2):
#     lst1 = list(d1.keys())
#     lst2 = list(d2.keys())
#     for d1_key in lst1:
#         if d1_key in lst2:
#             d2[d1_key] = d2[d1_key] + d1[d1_key]
#         elif d1_key not in lst2:
#             # d2[d1_key] = d1[d1_key]
#             d2.update({d1_key: d1[d1_key]})
#     print(d2)
#
#
# merge_dictionaries({'a': 1, 'b': 2}, {'b': 3, 'c': 4})

# merge_dictionaries({'a': 1, 'b': 2}, {'b': 3, 'c': 4})


# def power(lst):
#     """ your code here """
#     index = 0
#     for i in lst:
#         lst[index] = i ** 2
#         index += 1
#     return lst
#
# lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# r = power(lst)
# print(r)

# student_list = ["李雷", "韩梅梅", "马冬梅"]
# phone = [123, 3333, 444]
# for i in range(len(student_list)):
#     print(student_list[i], phone[i])

# for i in range(10):
#     if i > 5:
#         break
#     print(i)
# user_answer_correct = False
# while not user_answer_correct:
#     user_gender = input("请输入您的性别(F/M):")
#     if user_gender == "F":
#         print("你是萌妹子学生")
#         user_answer_correct = True
#     elif user_gender == "M":
#         print("你是糙汉子")
#         user_answer_correct = True
#     else:
#         print("输入不正确，请输入 F 或 M")

# user_answer_correct = False
# a = True
# while a:
#     # 这个程序停止的依据
#     # 这个程序什么时候停止，停止的依据是什么？
#     user_gender = input("请输入您的性别(F/M):")
#     if user_gender == "F":
#         print("你是萌妹子学生")
#         a = False
#     elif user_gender == "M":
#         print("你是糙汉子")
#         a = False
#     else:
#         print("输入不正确，请输入 F 或 M")

user_answer_correct = True
while user_answer_correct:
    # 这个程序停止的依据
    # 这个程序什么时候停止，停止的依据是什么？
    user_gender = input("请输入您的性别(F/M):")
    if user_gender == "F":
        print("你是萌妹子学生")
        user_answer_correct = False
    elif user_gender == "M":
        print("你是糙汉子")
        user_answer_correct = False
    else:
        print("输入不正确，请输入 F 或 M")
# while condition == True:
#     pass

user_answer_correct = False
while not user_answer_correct:
    # 这个程序停止的依据
    # 这个程序什么时候停止，停止的依据是什么？
    user_gender = input("请输入您的性别(F/M):")
    if user_gender == "F":
        print("你是萌妹子学生")
        user_answer_correct = True
    elif user_gender == "M":
        print("你是糙汉子")
        user_answer_correct = True
    else:
        print("输入不正确，请输入 F 或 M")

user = int(input(":>>>"))
lst = [1, 2, 3, 4, 5, 6]
if user in lst:
    pass
else:
    lst.append(user)
print(lst)

user = int(input(":>>>"))
lst = [1, 2, 3, 4, 5, 6]
if user not in lst:
    lst.append(user)

print(lst)
```





## 补充

1. 变量创建要见名知意；「看见这个变量，我们就大概知道它是做什么的」

```python
def a(n1, n2, char):
    if char == '+':
        return n1 + n2
    elif char == '-':
        return n1 - n2
    elif char == '*':
        return n1 * n2
    elif char == '/':
        return n1 / n2
```

2. 字符串不能被改变；
3. append 直接在原本的列表里面添加数据，不会返回数据；

```python
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lst = lst.append(10000)
print(lst)
```

4. Value in seq

```python
In [6]: 1 in [1, 2]
Out[6]: True

In [7]: 2 in [1, 2]
Out[7]: True

In [8]: 100 in [1, 2]
Out[8]: False
```

5. 解题思路

```python
lst = ['name', 'name', 'aiyc', 19]
empty_dict = dict()

for word in lst:
    print(word)
    if word in empty_dict:
        empty_dict[word] = empty_dict[word] + 1
    else:
        empty_dict[word] = 1
#
print(empty_dict)
```

6. 求和

```python
total_odd = 0
total_even = 0
# n = 0
# while n <= 100:
#     if n % 2 == 0:
#         total_even += n
#     else:
#         total_odd += n
#     n += 1
# print(total_odd, total_even)
# even_n = 0
# while even_n <= 100:
#     total_even = total_even + even_n
#     even_n = even_n + 2
# print(total_even)


# even_n = 0
# odd_n = 1
# while even_n <= 100:
#     total_even = total_even + even_n
#     even_n = even_n + 2
#     if odd_n <= 100:
#         total_odd = total_odd + odd_n
#         odd_n = odd_n + 2
# print(total_even)
# print(total_odd)


# even_n = 0
# odd_n = 1
# while even_n <= 100:
#     total_even = total_even + even_n
#     even_n = even_n + 2
#     if odd_n <= 100:
#         total_odd = total_odd + odd_n
#         odd_n = odd_n + 2
# print(total_even)
# print(total_odd)

even_n = 0
odd_n = 1
while True:
    if even_n <= 100:
        total_even = total_even + even_n
        even_n = even_n + 2
    if odd_n <= 100:
        total_odd = total_odd + odd_n
        odd_n = odd_n + 2
    if even_n > 100 and odd_n > 100:
        break
print(total_even)
print(total_odd)

```



## Question

### Question 1

**字符串为什么有三种创建方法？**



### Question 2

**数学中的向上向下取整？**



::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)











