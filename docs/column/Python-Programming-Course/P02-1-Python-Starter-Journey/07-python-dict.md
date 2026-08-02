---
title: 07-字典
icon: yongyan
date: 2024-01-02 09:27:44
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

前面我们学习了，变量、数字型、字符串、列表、元组，不知不觉学了这么多知识。现在我们就来一个场景来看看，自己学的怎么样吧！

我们经常会用到手机的电话薄功能，毕竟除了重要的联系人之外，甚至有人夸张到，一个电话都没记住。我们都是记不住许多人的电话的，所以需要手机有存储电话和名称的功能——电话薄（通讯簿）就此诞生。

想想电话薄有哪些功能？——存储、查找、删除、找不到则返回“未找到”等功能。今天我们主要来实现电话薄的查找和找不到返回“未找到”功能。

以及很多学员在上课时，常常问我：老师，Python 已经有列表、元组这样的容器了，为什么还需要有字典？存在的意义是什么？这个你可以思考一下。

下面的题目就是解决这个问题：字典为什么需要存在？以及在已学的有限语法中，解决无限的未知问题。我们不论何时，学的语法终归是有限的，不可能未来的所有需求都有现成的语法来直接解决，就算你把 Python 语法完全学完也是如此！所以，我把未来会遇到的这个情况提前让你遇到，让本书陪同你一同修习。

## 1. 如何创建一个电话簿

### 1.1 项目需求

我们现在有下面的联系人，请好好思考和编写创建一个电话薄，这个电话薄要实现存储下面的联系人（名称、手机号），以及查询功能：用户输入查询的联系人名称，输出查询到的电话号码。

完成此任务需要注意如下：

- **注意一**：只能使用已学的知识的来构建（本书目前已教学的语法：变量、数字型、字符串、列表、元组）；
- **注意二**：只需要实现查询功能即可，如果用户输入查询的联系人不存在，报错无妨）；
- **注意三**：联系人数据直接编写存储，无须实现获取用户输入姓名、手机号存储（就是这个存储功能不用实现）；
- **注意四**：不考虑重复用户；

| 姓名        | 手机号      |
| ----------- | ----------- |
| 蓉儿        | 18003220428 |
| 棠棠        | 18312080107 |
| 小悦        | 18211261225 |
| 蓉宝        | 18211260322 |
| Bornforthis | 18105021208 |
| aiyuechuang | 18712080502 |

下面给出程序运行示例，方便你更好理解程序所要实现的功能。

- **测试一**：

```python
Enter your search name: 蓉儿
The 蓉儿 phone number is: 18003220428
```

- **测试二**：

```python
Enter your search name: Bornforthis
The Bornforthis phone number is: 18105021208
```

好好思考一下，投入足够的时间思考后并进行代码编写。再继续阅读下去！

### 1.2 逐步分析

想必你已经耗费足够的时间来让自己思考，现在我们来一起想想如何解决上面的开发需求。首先，我们要先捋清楚具体的流程。

#### 1.2.1 大问题

我们要实现电话薄的创建并且拥有查询功能，无需实现查询不到联系人，返回未找到且报错无需处理，也无需考虑是否有重复联系人；

#### 1.2.2 第一步

在实现所有电话薄功能之前，需要考虑联系人数据如何存储。想要存储数据并且数据不是单条，而是多条。从我们已学的语法中仅有：列表、元组符合。虽然列表和元组都可以实现并解决此电话薄项目，但是哪个更加合适呢？显然是列表，为什么不是元组呢？——因为，我们电话薄上的联系人不是一层不变的，是随时有可能增加。如果使用元组则无法随时添加新联系人，每次添加则需把已有联系人加上新的联系人，再赋值给新变量存储，耗费时间不说，还不便利并且有重复操作之嫌。故而使用列表存储，是为最佳！

选完列表和元组，我们再来看看对于具体数据所选择使用的数据类型，应该是什么呢？——联系人名称应该用字符串，这个应该都没有异议。但是手机号呢？用字符串还是数字存储呢，思考一下。手机号应该用字符串而不是数字，因为手机号的一串数字不代表数字的大小，只是一串号码，所以手机号也要用字符串存储。

#### 1.2.3 第二步

选择使用列表存储后，则需要考虑数据存储的格式，如何存储才能便利的查询手机号。此时有两种方法可以选：

**方法一**：使用两个列表实现一个列表存储，一个列表存名称，另一个列表存手机号。这样存储有个先决条件两个列表数据存储的顺序要一致，也就是用户名顺序和对应的手机号顺序要一致，如下图：

![](https://blog.images.bornforthis.cn/docs-images/sha256/5b/5b967f61e659b172b04721b802dc27bb7fe3b9a60b8188d6dcc1f68abaa2f716.png)

**方法二**：使用一个列表实现，此时相较于两个列表，最大的不同在于：一个列表中的数据存储要如何制造规律，这个规律可以是**奇数存名称，偶数存手机号**，还可以是**名称按顺序存储在列表前面，手机号统一存储在列表尾部**，当然还有别的方法你可以自行去设计这个存放规律。（自己设置规律一下，一定要自己设置一下，这样才能真正触发思考。）**学习是需要找到自己，而不是丢掉自己！**

![](https://blog.images.bornforthis.cn/docs-images/sha256/15/153716d26490351e4f20e60a1987e37cb56fe8d9d6716eede87dd97df2231e81.png)



#### 1.2.3 第三步

既然存储结构已经设置好了，那接下来需要思考：如何获取元素出现在列表中的下标呢？——`.index()` 可以获取元素在列表中第一次出现的下标，但是如果元素不存在列表中时则会报错。获取到下标之后就可以借助列表的数据提取方式提取即可。

#### 1.2.4 第四步

这里需要说明的是，上面提供的两种结构方法，在提取数据时需要利用结构规律了。

**方法一**：对于两个列表实现时，提取数据比较简单：获取到用户输入的联系人名字在列表 names 对应的下标（索引）后，并赋值给变量 `position` 后，直接使用此下标（`position`）对列表 phones 去提取即可，因为两个列表数据是一一对应的，名称和手机号的下标是相同的。

**方法二**：对于一个列表实现时，当结构是**奇数存名称，偶数存手机号**时，获取名称在列表 `names_phones` 中的下标（索引）并赋值给变量 `position` 后，不能像方法一一样直接提取，而是需要对此下标进行 `position + 1` 后，再去列表 `names_phones` 中提取。如果结构是**名称按顺序存储在列表前面，手机号统一存储在列表尾部**时，需要在获取到名称在列表 `names_phones` 的下标并赋值给变量 `position` 后，使用联系人的数量为基数（6），加上 `position` 即可提取。（`position + 6`）

#### 1.2.5 第五步

到此，所有的设计、思路全部带你走完了。接下来就是要观察题目给出的示例：

```python
Enter your search name: 蓉儿
The 蓉儿 phone number is: 18003220428
```

所以得出，输入要有提示：`Enter your search name: `，输出要有特定的格式化：`The name phone number is: phones`。

### 1.3 代码实现

#### 1.3.1 方法一：两个列表实现

这里我也是按上面的步骤带你实现，注意思路一步步跟随，在这个方法最后，我还会提供 zip 实现的代码。

1. **构造数据列表**

    ```python
    names = ['蓉儿', '棠棠', '小悦', '蓉宝', 'Bornforthis', 'aiyuechuang']
    phones = ['18003220428', '18312080107', '18211261225', '18211260322', '18105021208', '18712080502']
    ```

2. **获取用户输入**

    ```python
    # 获取用户输入
    search_name = input("Enter your search name: ")
    ```

3. **获取用户输入的联系人名称对应的下标**

    ```python
    position = names.index(search_name)
    ```

4. **提取目标联系电话**

    ```python
    phone_number = phones[position]
    ```

5. **按格式化输出**

    ```python
    print(f"The {search_name} phone number is: {phone_number}")
    ```

6. **最终代码**

    ```python
    names = ['蓉儿', '棠棠', '小悦', '蓉宝', 'Bornforthis', 'aiyuechuang']
    phones = ['18003220428', '18312080107', '18211261225', '18211260322', '18105021208', '18712080502']
    
    search_name = input("Enter your search name: ")
    
    position = names.index(search_name)
    phone_number = phones[position]
    print(f"The {search_name} phone number is: {phone_number}")
    ```

Ok，到此方法一的实现成功完成。

接下来，我会提供 zip 函数实现的代码，按照惯例：你依然先自己思考一下，然后再继续阅读我提供的 zip 代码。控制自己，克制自己不去阅读我下面的代码：

```python
names = ['蓉儿', '棠棠', '小悦', '蓉宝', 'Bornforthis', 'aiyuechuang']
phones = ['18003220428', '18312080107', '18211261225', '18211260322', '18105021208', '18712080502']
phonebooks = list(zip(names, phones))

# 获取用户输入
search_name = input("Enter your search name: ")

position = names.index(search_name)
phone_number = phonebooks[position][1]

print(f"The {search_name} phone number is: {phone_number}")
```

这里额外讲解分析一下：`phone_number = phonebooks[position][1]`，这个代码提取的原理是：虽然我们使用 zip 进行了数据整合。但实际上每个联系人原本存在列表 names 的下标，也对应着 zip 之后列表 phonebooks 当中的下标，下标（索引）是一致的。

是不是有点绕，来给你做了一张图，一图胜千言全在图里了：

![](https://blog.images.bornforthis.cn/docs-images/sha256/a1/a1dbcca7abb29e461dae3d0decb61dd929076a3ae5285485c3cc8eb745dd2bdb.png)

所以，代码 `phonebooks[position]` 提取到联系人对应所在的元组，`[1]` 提取元组对应的联系电话（手机号）。

#### 1.3.2 方法二实现

##### 1.3.2.1 奇数存名称，偶数存手机号

1. **构造数据列表**

    ```python
    phonebooks = ['蓉儿', '18003220428', '棠棠', '18312080107', '小悦', '18211261225', '蓉宝', '18211260322', 'Bornforthis', '18105021208', 'aiyuechuang', '18712080502']
    ```

2. **获取用户输入**

    ```python
    # 获取用户输入
    search_name = input("Enter your search name: ")
    ```

3. **获取用户输入的联系人名称对应的下标**

    ```python
    position = phonebooks.index(search_name)
    ```

4. **提取目标联系电话**

    ```python
    phone_numbers = phonebooks[position + 1]
    ```

5. **按格式化输出**

    ```python
    print(f"The {search_name} phone number is: {phone_numbers}")
    ```

6. **最终代码**

    ```python
    phonebooks = ['蓉儿', '18003220428', '棠棠', '18312080107', '小悦', '18211261225', '蓉宝', '18211260322', 'Bornforthis', '18105021208', 'aiyuechuang', '18712080502']
    
    search_name = input("Enter your search name: ")
    
    position = phonebooks.index(search_name)
    phone_numbers = phonebooks[position + 1]
    
    print(f"The {search_name} phone number is: {phone_numbers}")
    ```

    

##### 1.3.2.2 名称按顺序存储在列表前面，手机号统一存储在列表尾部

1. **构造数据列表**

    ```python
    phonebooks = ['蓉儿', '棠棠', '小悦', '蓉宝', 'Bornforthis', 'aiyuechuang', '18003220428', '18312080107', '18211261225', '18211260322', '18105021208', '18712080502']
    ```

2. **获取用户输入**

    ```python
    search_name = input("Enter your search name: ")
    ```

3. **获取用户输入的联系人名称对应的下标**

    ```python
    position = phonebooks.index(search_name)
    ```

4. **提取目标联系电话**

    ```python
    phone_numbers = phonebooks[position + 6]
    ```

5. **按格式化输出**

    ```python
    print(f"The {search_name} phone number is: {phone_numbers}")
    ```

6. **最终代码**

    ```python
    phonebooks = ['蓉儿', '棠棠', '小悦', '蓉宝', 'Bornforthis', 'aiyuechuang', '18003220428', '18312080107', '18211261225', '18211260322', '18105021208', '18712080502']
    
    search_name = input("Enter your search name: ")
    
    position = phonebooks.index(search_name)
    phone_numbers = phonebooks[position + 6]
    
    print(f"The {search_name} phone number is: {phone_numbers}")
    ```

### 1.4 小结

由上面的问题应该要了解两个要点：

1. 如何用已有的知识去完成未知的新任务，毕竟 Python 不可能包含全部各种需求所需要的数据类型类型。这个情况，只是把未来会遇到的情况提前揪出来，便于本书现在陪同你实现，避免未来你第一次遇到所学知识之外的功能实现时，一个人面对的手足无措之感。
2. 字典存在意义，从上面题目完成后应该要 get 到。

如果，使用字典只需要如下实现：

```python
# 使用字典存储用户名和手机号
phonebooks = {
    '蓉儿': '18003220428',
    '棠棠': '18312080107',
    '小悦': '18211261225',
    '蓉宝': '18211260322',
    'Bornforthis': '18105021208',
    'aiyuechuang': '18712080502'
}

search_name = input("Enter your search name: ")

phones = phonebooks[search_name]

print(f"The {search_name} phone number is: {phones}")
```

上面的实现是不是很简单呢，不要着急把上面的代码一次性理解。学完本章节后，你再回来看这个代码即可。

从网易离职后，做编程私教。平时会遇到形形色色的国内外各个年龄段的学生，有个学生就把电话薄用如下方法实现，我当时看见真是眼前一亮。方法虽然不推荐，但至少思考和实现了！所以还是那句话，多独立思考，而不是着急获取答案。代码如下：

```python
# 创建电话簿变量
aiyuechuang = "18712080502"
Bornforthis = "18105021208"
蓉儿 = "18003220428"
棠棠 = "18312080107"
小悦 = "18211261225"
蓉宝 = "18211260322"

# 获取用户输入
search_name = input("Enter your search name: ")  # 用户输入用户名

# 使用 eval() 查找并输出对应的手机号
# 如何既保留用户输入，又得到变量对应的值？
phones = eval(search_name)  # eval() 动态解析用户输入的变量名
print(f"The {search_name} phone number is: {phones}")
```

怎么样，是不是很有想法的方法。不过 eval 还是不推荐的。祝你在阅读本书时，也找到了属于你自己的实现方法。





## 2. 字典结构

下面我们来一起看看字典的结构，但早在前面初识数据类型当中也讲解过了，接下来我们专门探究一下。

- 字典使用 **<span style="color:orange">花括号</span>** `{}` 来表示。
- ~~字典内每一项都有两个元素组成：**<span style="color:orange">key 和 value</span>**~~
- 字典中的每一项由 **<span style="color:orange">键（key）和值（value）</span>** 组成，格式为： `{key: value, key: value}`。
- ~~各个项用 **<span style="color:orange">逗号</span>** 隔开~~
- 各个键值对之间使用 **<span style="color:orange">逗号</span>** `,` 隔开。

```python
phone_numbers = {'蓉儿': '18003220428', '棠棠': '18312080107', '小悦': '18211261225'}
```

## 3. 字典的键（key）和值（value）

1. 每个键（key）都对应一个值（value），它们是一一对应关系，且一个键只能对应一个值。

2. 字典中的键（key）必须是不可变类型，如字符串、数字或元组等。

3. 字典中的值（value）可以是任何类型，包括可变类型（如列表、数字、布尔型、甚至是另一个字典等）。

4. 字典的有序是指：字典中的键值对是有序的。

5. 如果在字典中出现重复的键，后出现的键值对会覆盖前一个相同键的值。

下面给出字典出现相同的 key name 时，会出现的效果，代码如下：

```python
dictionary = {'name': '李雷', 'numbers': '0322', 'name': 'AI悦创', True: 'bool', 2: 'int'}
print(dictionary)
```

上面的代码运行输出如下：

```python
{'name': 'AI悦创', 'numbers': '0322', True: 'bool', 2: 'int'}
```

从输出结果中，我们也可以看出后面的键值对（`'name': 'AI悦创'`）会覆盖前面的 `'name': '李雷'`。并且在输出时，你会发现：原本的键值对（`'name': '李雷'`）在字典开头，在被后面的键值对（`'name': 'AI悦创'`）覆盖后依然在开头。这就是上面第四点说的：**字典中的键值对是有序的**。

顺便我也给你演示一下，如果 key 用的是可变的数据类型，是会报错的，例如使用列表：

```python
dictionary = {['name']: 'AI悦创', 'numbers': '0322', True: 'bool', 2: 'int'}
print(dictionary)

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/all/demo.py", line 1, in <module>
    names = {['name']: 'AI悦创', 'numbers': '0322', True: 'bool', 2: 'int'}
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: unhashable type: 'list'
```

为什么使用列表就会导致字典报错呢？因为列表是可变的，可变意味着不确定，而 key 需要不可变的数据类型，所以会报错。

## 4. 多种字典创建方法

### 4.1 使用花括号 {} 创建字典

字典的创建方法，除了直接创建之外，直接创建就是直接打出下面的字典：

```python
dictionary = {'name': 'AI悦创', 'numbers': '0322', True: 'bool', 2: 'int'}
```

就是字典需要什么数据，直接打成字典语法格式。

**优点**：语法简单直观、运行速度最快（字典的字面量创建）、适用于静态或手动定义键值对。

**缺点**：不适合动态或程序化生成字典的情况。（不适合，不代表不行）

当然，Python 为了应付不同场景需要，提供了多种创建方法，一起来看看常见的几种。

### 4.2 使用 `dict()` 构造函数

#### 4.2.1 方法一：使用键值对序列（列表、元组等）

```python
message1 = [('分数', 98), ('性别', '男')]
message2 = (('姓名', 'Bornforthis'), ('班级', 1))
list_to_dict1 = dict(message1)
list_to_dict2 = dict(message2)
print(f"list_to_dict1: {list_to_dict1}")
print(f"list_to_dict2: {list_to_dict2}")

# ---output---
list_to_dict1: {'分数': 98, '性别': '男'}
list_to_dict2: {'姓名': 'Bornforthis', '班级': 1}
```

上面的创建方法中，列表中元组的 0 号位成为字典的 key，元组的 1 号位成为字典的 value。

#### 4.2.2 方法二：根据关键字参数新建字典

```python
d = dict(lilei=98, hanmeimei=99)
print(d)

# ---output---
{'lilei': 98, 'hanmeimei': 99}
```

需要注意的是，第二种方法的键会自动转换为字符串类型。

#### 4.2.3 方法三：使用 `zip()` 函数

```python
keys = ['a', 'b']
values = [1, 2]
d = dict(zip(keys, values))  
print(d)  # 输出: {'a': 1, 'b': 2}
```

**优点**：适合把两个列表或元组合并为一个字典，简洁明了，常见于数据处理。

**缺点**：如果两个列表长度不一致，多余部分会被截断。

```python
d = dict(zip(['a', 'b'], [1]))  
print(d)  # 输出: {'a': 1}
```

此 zip 方法得已实现的原因是在于上面方法一的实现，方法一实现的就是列表嵌套元组或者元组嵌套。而两个列表或元组经过 zip 操作就可以得出方法一种的嵌套结构，代码示例如下：

```python
keys = ['a', 'b']
values = [1, 2]
zipped = zip(keys, values)
print(list(zipped))

# ---output---
[('a', 1), ('b', 2)]
```

#### 4.2.4 思考方法一、二优缺点

思考一下，上面的方法一、方法二两种创建字典的方法，有什么优缺点？

**方法一**：可以更灵活的适配字典的各种数据类型情况。Why？——因为结构是列表里面放元组，而元组的 0 号位放 key，1 号位放 value。所以，只要是不可变的数据类型都可以放在 0 号位（如字符串、数字、元组等）。至于其它任意 Python 类型，都可以放在元组的 1 号位。

**方法二**：~~反之对比上面方法二：~~这种方法限制了键必须是变量名，不能使用字符串、数字等字面值。~~第一个位置必须是“变量”，不能是其它数据类型。~~举几个例子一起来看看。

下面这个看起来怎么样，正常吧：

```python
d = dict(lilei=98, hanmeimei=99)  # 看起来正常
```

那再看看下面的代码，感觉是否正常？

```python
d = dict('lilei'=98, 'hanmeimei'=99)  # 看起来怎么样？
d = dict(12=98, 12.1=99)
d = dict((1, 2, 3)='tuple', True = 'bool')
```

上面代码看起来就很奇怪了，一共有两个值：一个值是 `'lilei'` 另一个值 `98` 两个都是值，可以用 `98` 赋值给另一个值吗？——显然是不行的，它们都是字面值。例如：`'lilei'`、`'hanmeimei'` 都不能作为变量。

我们的赋值是需要把一个值赋予给一个变量「有空间」，即符合 Python 变量命名规则的字符串。剩下的其它行代码也是如此，而且再认真看看我 `=` 做侧的代码都是放符合字典 key 要求的，但是运行后还是会报错。如何证明我这个说法呢？

接下来我就带你看看我是如何证明的，以及另一个你需要掌握的原则是：在学习编程的过程当中，如何去写代码佐证你的想法呢，不论想法对错！对于上面我说“都是放符合字典 key 要求的”，我就会用如下代码证明：

```python
dictionary = {'lilei': 98, 'hanmeimei': 99, 12: 98, 12.1: 99, (1, 2, 3): 'tuple', True: 'bool'}
print(dictionary)

# ---output---
{'lilei': 98, 'hanmeimei': 99, 12: 98, 12.1: 99, (1, 2, 3): 'tuple', True: 'bool'}
```

可以看到，上面的代码可以正常输出。而使用方法二就无法支持，佐证成功！

学习要拿自己已经会的，去辅助理解未知的，例如上面：把一个值赋值给一个变量「有空间」，实际上是要拿这个你已经理解的变量知识点，来辅助理解现在存在的问题。而这种 `lilei=98` 形式最终会变成 `{'lilei': 98}` ，故而得到结论：方法二创建的字典**键必须是字符串，且不能带空格或特殊符号。**

这样整个流程就思考完成，方法二虽然可以实现创建字典，并且看起来比方法一便捷，但是对于字典 key 的各种情况并不能完全支持。



## 5. 访问字典数据

### 5.1 中括号 `[]` 访问

你可以通过键（key）来访问字典中的值（value），使用中括号语法：

```python
grade = {'李雷': '98', '韩梅梅': '99'}
print(grade['李雷'])  # 98
```

### 5.2 上面的提取方法存在问题

前面中括号提取看起来很直观，也很方便。但存在一个问题：在提取不存在的 key 的时，会报错：

```python
grade = {'李雷': '98', '韩梅梅': '99'}
print(grade['马冬梅']) 

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/44-liuchengyang/look.py", line 9, in <module>
    print(grade['马冬梅'])
KeyError: '马冬梅'
```

上面代码尝试对字典 grade 提取不存在的 `马冬梅` 时，出现了报错。回顾本章节一开始的情景，电话薄的需求使用字典实现是非常便捷的。但现在遇到一个问题：~~像我们平时查询电话簿时，没找到对应的联系人会返回：未找到（无结果）。~~就像我们查找电话簿时，如果找不到某个人的电话号码，系统会提示“未找到”。

![](https://blog.images.bornforthis.cn/docs-images/sha256/df/dfa3df502ae74edbb965ed6183b1afde0d66ce4e2beaa7e757282f0f52674427.png)

那有没有方法解决呢？

### 5.3 使用 `.get()` 避免错误

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
my_dict = {'name': 'Bornforthis', 'age': 25}

# 使用 get 访问一个存在的键
print(my_dict.get('name'))  # 输出: Bornforthis

# 访问不存在的键，如果没有提供第二个参数，则返回 None
print(my_dict.get('Alex'))  # 输出: None

# 使用 get 访问一个不存在的键，并提供默认值。
print(my_dict.get('gender', '无结果'))  # 输出: 无结果
```

在第一个 `get` 调用中，我们访问了键 `'name'`，它在字典中存在，因此返回了对应的值 `'Bornforthis'`。在第二个调用中，我们试图访问键 `'Alex'`，它在字典中不存在，因此返回了 `.get()` 函数的默认值 `None`。在第三个调用中，我们指定的默认值 `'Not Specified'`，并查询不存在的键 `'gender'`，最终输出：`'无结果'`。

成功解决，查询不到 key 时产生的报错。

### 5.4 小结

- 如果你确信键一定存在，使用中括号访问。比如，你在自己写代码时调用查询字典时，就可以优先考虑中括号访问。
- 如果你不确定键是否存在，使用 `.get()` 方法来避免错误。比如，你的程序要提供给他（她）人使用，用户不确定字典有什么数据，你也不确定用户会查询字典哪个 key，这个 key 还有可能不存在目标字典中，此时考虑使用 `.get()` 函数节课。

## 6. 更新字典的数据

字典是 **可变的**，这意味着你可以修改字典中的元素。~~如果你尝试修改一个已存在的键，它将更新其对应的值；如果该键不存在，它将添加新的键值对。~~

字典修改或添加数据原则：有则改之，无则加勉「无则添加」。这句话其实很贴切，意思是：这个键在字典当中的时，就修改键对应的值。如果修改的键不存在字典时，就添加这组 key 与 value。

再想想这句：有则改之，无则加勉。原意：有缺点错误就改正，没有就用以自勉。是不是和上面我说字典的添加方法一样呢，多类比多思考，学习会更舒适。

![](https://blog.images.bornforthis.cn/docs-images/sha256/d1/d1e0f17a08972585bba16fd275c52d606a99a0652e927353bc8dd98956f2258c.png)

代码实际编写之后，如下：

```python
grade = {'李雷': '98', '韩梅梅': '99'}
grade['韩梅梅'] = 100  # 更新已有的键
print(grade)

grade['马冬梅'] = '95'  # 添加新的键值对
print(grade) 
```

运行结果如下：

```python
{'李雷': '98', '韩梅梅': 100}
{'李雷': '98', '韩梅梅': 100, '马冬梅': '95'}
```

### 6.1 小结

- **修改**：如果键已经存在，直接更新其对应的值。
- **添加**：如果键不存在，则会创建一个新的键值对。

## 7. 字典删除

你可以使用 `del` 语句或 `clear()` 方法删除字典中的元素。先创建一个字典，便于后续操作：

```python
grade = {'李雷': '98', '韩梅梅': '99', '马冬梅': '95'}
print(grade)

# ---output---
{'李雷': '98', '韩梅梅': '99', '马冬梅': '95'}
```



### 7.1 删除单个元素

使用 del 删除字典元素时，需要指定要删除的键（key）。

```python
grade = {'李雷': '98', '韩梅梅': '99', '马冬梅': '95'}

del grade['李雷'] # 删除李雷
print(grade)

# ---output---
{'韩梅梅': '99', '马冬梅': '95'}
```

### 7.2 删除整个字典

如果不指定特定要删除的键（key），则会删除整个字典。在删除整个字典后，尝试访问字典时会抛出 `NameError`，因为字典已经不存在。

当你使用 `del grade` 删除字典后，字典不再存在，任何对该字典的访问都会引发 `NameError`。

```python
grade = {'李雷': '98', '韩梅梅': '99', '马冬梅': '95'}
del grade
print(grade)

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/bornforthis.cn/book.py", line 12, in <module>
    print(grade)
NameError: name 'grade' is not defined
```

### 7.3 清空字典

如果想要把已有的字典清空，可以使用字典的内置函数 `.clear()` 。

```python
grade = {'李雷': '98', '韩梅梅': '99', '马冬梅': '95'}
grade.clear()  # 清空字典
print(grade)


# ---output---
{}
```

#### 7.3.1 字典清空使用部分场景

下面提供几种常用的场景，但代码可以不用现在理解，等后续学完循环、函数语法，再回过头来看也不迟。

1. **循环处理数据时的重复利用**

    当你在一个程序中循环处理某种任务时，可能需要每一轮循环都用到一个字典作为临时存储空间。在每轮循环结束时清空字典，以便下一次循环继续使用，避免创建新的字典、节省内存开销。例如：

    ```python
    user_info = {}
    users = ['李雷', '韩梅梅', '马冬梅']
    
    for user in users:
        user_info['name'] = user
        user_info['score'] = get_user_score(user)
        process(user_info)  # 处理该用户信息
        user_info.clear()  # 每次循环结束时清空字典，以便复用
    ```

2. **保留字典变量名、重置其内容**

    在程序运行中，你可能需要保留字典变量名（因为有其他代码引用该变量名），但希望删除字典中的所有内容，重新向其中添加新的数据。这种场景下用 `clear()` 更合适，而不是 `del` 后重新创建字典。例如：

    ```python
    settings = {'volume': 10, 'brightness': 70, 'language': 'Chinese'}
    
    # 用户重置设置为默认值
    settings.clear()
    settings.update({'volume': 5, 'brightness': 50, 'language': 'English'})
    ```

上面的例子有点不好理解，我来几个小白便于理解的例子：

1. **购物车清空**：比如你在写一个购物车程序，顾客结账后需要清空购物车：

    ```python
    # 用户购物车
    shopping_cart = {'苹果': 2, '香蕉': 3, '西瓜': 1}
    
    print('购物车中有:', shopping_cart)
    
    # 用户结账后，购物车需要清空
    shopping_cart.clear()
    
    print('结账后购物车变成了:', shopping_cart)
    
    # ---output---
    购物车中有: {'苹果': 2, '香蕉': 3, '西瓜': 1}
    结账后购物车变成了: {}
    ```

    购物车清空后，等待着它下一位顾客。

2. **成绩字典清空重用**：比如你记录了班级学生的考试成绩，每门考试之后，需要清空旧的成绩记录，重新记录下一门考试：

    ```python
    # 第一场考试成绩
    grades = {'李雷': 90, '韩梅梅': 95, '马冬梅': 88}
    print('第一次考试成绩:', grades)
    
    # 成绩已经统计完毕，清空字典以便下一次记录
    grades.clear()
    
    # 第二场考试成绩重新记录
    grades['李雷'] = 92
    grades['韩梅梅'] = 96
    grades['马冬梅'] = 89
    print('第二次考试成绩:', grades)
    
    # ---output---
    第一次考试成绩: {'李雷': 90, '韩梅梅': 95, '马冬梅': 88}
    第二次考试成绩: {'李雷': 92, '韩梅梅': 96, '马冬梅': 89}
    ```

3. **游戏玩家数据重置**：假设你在开发一个小游戏，每局游戏结束之后需要清空玩家数据，重新开始游戏：

    ```python
    player = {'名字': '李雷', '生命值': 100, '分数': 2000}
    print('游戏结束前:', player)
    
    # 游戏结束后重置玩家数据
    player.clear()
    
    # 下一局游戏开始时重新初始化数据
    player['名字'] = '李雷'
    player['生命值'] = 100
    player['分数'] = 0
    print('新一局游戏开始:', player)
    
    # ---output---
    游戏结束前: {'名字': '李雷', '生命值': 100, '分数': 2000}
    新一局游戏开始: {'名字': '李雷', '生命值': 100, '分数': 0}
    ```



## 8. 字典结构嵌套字典

在字典当中，我们不仅可以将单一的键值对存储在字典中，还可以将**更复杂的数据结构**放入字典，比如列表、另一个字典，甚至是字典的列表。这种结构被称为“嵌套”。

Python 中的嵌套结构主要包括：

- **字典列表**：将多个字典放在一个列表中。
- **字典中存储列表**：字典的某个键对应的值是一个列表。
- **字典中存储字典**：字典的某个键对应的值是另一个字典。

### 8.1 字典列表：多个字典放在一个列表中

当我们要表示一组相似的数据时（比如多个学生的信息），可以把每个学生的信息用一个字典表示，然后把这些字典组合成一个列表。

```python
student1 = {'name': '李雷', 'age': 18, 'grade': 98}
student2 = {'name': '韩梅梅', 'age': 19, 'grade': 99}
student3 = {'name': '马冬梅', 'age': 18, 'grade': 95}
students = [student1, student2, student3]
print(students)


# ---output---
[{'name': '李雷', 'age': 18, 'grade': 98}, {'name': '韩梅梅', 'age': 19, 'grade': 99}, {'name': '马冬梅', 'age': 18, 'grade': 95}]
```

这就是一个典型的“字典列表”结构：每个字典表示一个学生，列表则容纳了所有学生。

**小试牛刀：提取韩梅梅的分数**

上面我们创建了学生列表 students，现在需要你通过这个列表提取出韩梅梅的分数，思考一下如何提取。

可以使用列表索引和字典的键来提取特定信息，有两种实现方式。

方式一：使用中括号

```python
print(students[1]['grade'])  # 输出：99
```

方式二：使用 get 方法

```python
print(students[1].get('grade'))  # 输出：99
```

📌 **选择建议：**

- 如果你确定这个键一定存在，优先建议使用中括号 `[]`。
- 如果不确定该键是否存在，建议使用 `.get()` 方法，更安全，不会抛出错误。

~~中括号和 get 的选择依据：看数据是否是确定的，如果是确定的优先使用中括号提取。否则，使用 get。~~



### 8.2 在字典中存储列表：一个人喜欢多个事物

有时候，一个键对应的值可能不止一个，比如一个学生喜欢多门课程。这种情况下，可以将值设置为一个列表。

```python
favorite_class = {
    '李雷': ['数学', '英语'],
    '韩梅梅': ['语文'],
    '马冬梅': ['计算机', '物理', '数学'],
}
print(favorite_class['李雷'])       # 输出：['数学', '英语']
print(favorite_class['李雷'][0])    # 输出：数学
```

你可以先获取对应的列表，再通过索引访问其中的具体元素。

这种存储方式，还可以存储每位学生的兴趣爱好：

```python
hobbies = {
    '李雷': ['打篮球', '看电影', '编程'],
    '韩梅梅': ['弹钢琴'],
    '马冬梅': ['画画', '跳舞', '旅行'],
}

print(hobbies['李雷'])        # 输出：['打篮球', '看电影', '编程']
print(hobbies['李雷'][1])     # 输出：看电影
```

📌 **说明：**

- 字典的键是人的名字。
- 值是一个列表，表示这个人喜欢的多个事物（爱好），而且类型可以是不同的。
- 你可以访问整个列表，也可以通过索引访问具体的兴趣。

### 8.3 在字典中存储字典

```python
# 用一个字典表示一个学生信息
student1 = {'name': 'lilei', '成绩': '98', '实验班': True}

# 用一个字典表示全班学生信息
class1 = {
    '李雷': {'成绩': '98', '实验班': True},
    '韩梅梅': {'成绩': '95', '实验班': False},
}
print(class1['李雷'])
print(class1['李雷']['成绩'])
```

## 9. 字典的常见方法

Python 字典自带一些常用方法，可以帮助我们更高效地操作和管理数据。

### 9.1 `.pop(key)`：删除指定键值对

`.pop(key)` 方法用于从字典中删除指定的键，并返回该键对应的值。

1. 如果指定的键存在，它会将该键值对从字典中移除，并返回该键对应的值。
2. 如果指定的键不存在，会抛出 `KeyError` 异常（除非你提供默认值）。

- 正常使用示例：

    ```python
    # 用一个字典表示一个学生信息
    student = {'name': 'lilei', '成绩': '98', '实验班': True}
    print(f"原始字典是：{student}")
    
    pop_value = student.pop('实验班')  # 必须填写要删除的 key
    print(f"删除的值是：{pop_value}")
    print(f"删除后的字典是：{student}")
    
    # ---output---
    原始字典是：{'name': 'lilei', '成绩': '98', '实验班': True}
    删除的值是：True
    删除后的字典是：{'name': 'lilei', '成绩': '98'}
    ```

- 删除不存在的键（会报错）：

    ```python
    student = {'name': 'lilei', '成绩': 98}
    student.pop('性别')
    
    # ---output---
    Traceback (most recent call last):
      File "/Users/huangjiabao/bornforthis.cn/books.py", line 2, in <module>
        student.pop('性别')
    KeyError: '性别'
    ```

- 使用默认值避免报错：

    ```python
    student = {'name': 'lilei', '成绩': 98}
    result = student.pop('性别', '未知')  # 如果 '性别' 不存在，返回默认值
    print(result)  # 输出：未知
    
    # ---output---
    未知
    ```

- 使用 try-except 捕获异常（这里先提供，语法后面再讲）

    ```python
    try:
        student.pop('性别')
    except KeyError as e:
        print("键不存在，错误信息：", e)
    ```

📌 **小结：**

- 想安全地删除一个键时，推荐提供默认值或使用异常捕获。
- 如果你**确定键一定存在**，可以直接使用 `pop(key)`。
- 如果你**不确定键是否存在**，使用 `pop(key, default)` 更安全。



### 9.2 popitem()

`popitem` 是用于移除并返回字典中的最后一个键值对。该方法会修改原字典，且删除的是最后插入的键值对。

**关键点：**

1. **删除最后一个项**：`popitem` 从字典中移除并返回最后插入的键值对。
2. **返回值**：返回一个包含键和值的元组 `(key, value)`。
3. **修改原字典**：使用 `popitem` 会修改原字典。
4. **空字典报错**：如果字典为空，调用 `popitem` 会引发 `KeyError` 异常。

`popitem` 方法是处理字典中最后插入的项的有效工具，特别适用于需要按插入顺序删除和访问键值对的情况。需要注意的是，如果字典为空，调用此方法会引发异常，因此在使用前最好检查字典是否为空或使用 try-except 进行错误处理。

```python
student = {'name': 'lilei', '成绩': '98', '实验班': True}
# 使用 popitem 移除并返回最后一个键值对
del_val = student.popitem()
print(f"删除的键值对是：{del_val}")
print(f"删除后的字典是：{student}")

# ---output---
删除的键值对是：('实验班', True)
删除后的字典是：{'name': 'lilei', '成绩': '98'}
```

上面的代码成功删除字典的最后一个键值对，现在我们再来操作一次，看看输出结果是什么，代码是接着上面的代码继续的：

```python
# 再次调用 popitem
del_val2 = student.popitem()
print(f"再次删除的键值对是：{del_val2}")
print(f"再次删除后的字典是：{student}")
```

输出结果如下：

```python
再次删除的键值对是：('成绩', '98')
再次删除后的字典是：{'name': 'lilei'}
```

如果字典为空，则会报错：

```python
student = {}
student.popitem()
```

上面的代码报错如下：

```python
Traceback (most recent call last):
  File "/Users/huangjiabao/bornforthis/books.py", line 2, in <module>
    student.popitem()
KeyError: 'popitem(): dictionary is empty'
```





### 9.3 `.keys()`：获取字典所有键

如果想要获取字典中所有的键（key），则可以使用字典内置函数 `.keys()`。

```python
student = {'name': 'lilei', '成绩': '98', '实验班': True}
keys = student.keys()
print(keys)
print(list(keys))

# ---output---
dict_keys(['name', '成绩', '实验班'])  # 这里的 dict_keys 前期无需纠结
['name', '成绩', '实验班']
```

### 9.4 `.values()`：获取所有值

获取字典中所有的值。

```python
student = {'name': 'lilei', '成绩': '98', '实验班': True}
values = student.values()
print(values)
print(list(values))


# ---output---
dict_values(['lilei', '98', True])
['lilei', '98', True]
```

### 9.5 `.items()`：获取所有“键值对”元组

如果要把字典里所有的键值对提取出来，则需要使用字典内置函数 `.items()`，会得到键值对以元组存储：

```python
student = {'name': 'lilei', '成绩': '98', '实验班': True}
student_items = student.items()
print(student_items)
print(list(student_items))


# ---output---
dict_items([('name', 'lilei'), ('成绩', '98'), ('实验班', True)])  # 这里的 dict_items 前期无需纠结
[('name', 'lilei'), ('成绩', '98'), ('实验班', True)]
```

观察上面代码 `print(list(student_items))` 输出的结果，有没有一种似曾相识的感觉？其实就是上面讲到使用 `dict()` 函数进行构建字典的方法，我把代码放在下面：

```python
message1 = [('分数', 98), ('性别', '男')]
message2 = (('姓名', 'Bornforthis'), ('班级', 1))
list_to_dict1 = dict(message1)
list_to_dict2 = dict(message2)
print(f"list_to_dict1: {list_to_dict1}")
print(f"list_to_dict2: {list_to_dict2}")

# ---output---
list_to_dict1: {'分数': 98, '性别': '男'}
list_to_dict2: {'姓名': 'Bornforthis', '班级': 1}
```

看到上面的代码，恢复记忆了么，认真观察总结，我们可以得出：`.items()` 函数和我们最开始用来创建字典的 `(key, value)` 结构是一样的，非常适合用在 `for` 循环中遍历字典。其实就类似上面字典创建的逆方法。



### 9.6 `in` 操作符：判断字典中是否包含某个键或值

其实，在列表章节中也用到了 in。这其实和列表原理用法一致，抓住核心点：`Value in Sequence`。

#### 9.6.1 默认情况判断键（key）是否存在字典中

```python
dict1 = {'name': '李雷', 'age': 19}
print('name' in dict1)

# ---output---
True
```

上面的代码输出得到 `True` 表明，`'name'` 这个键存在字典 `dict1` 当中。如果不存在则会返回 `False`，如下示例：

```python
dict1 = {'name': '李雷', 'age': 19}
print('gender' in dict1)

# ---output---
False
```

上面提到默认只是判断字典的键（key）是否存在字典当中，我们来写个代码测试一下。判断值19 是否在字典当中，代码如下：

```python
dict1 = {'name': '李雷', 'age': 19}
print(19 in dict1)

# ---output---
False
```

从上面的代码结果可知，确实只能判断字典的键（key）是否存在字典当中。因为值19本就是属于字典 dict1 中的值，但是运行代码得到的是 False，故而证明：默认情况下只能判断字典的键是否存在。

#### 9.6.2 判断值（value）是否存在字典中

那么我们应该如何实现判断一个值是否存在字典当中呢？请好好思考编写一下。

既然默认情况是判断键，那么我们能不能把字典的值全部提取出来并存储到变量 `values_list`，接着直接判断值（value）是否存在咱们得到的 `values_list` 当中。思路有了，那么接下来要解决的问题变成：我们如何提取字典当中所有的值（value）呢？

答案也很简单，就是我们前面说的字典内置函数 `.values()` 可以获取字典的全部值。获取全部字典值之后，直接判断即可。代码示例如下：

```python
dict1 = {'name': '李雷', 'age': 19}
values_list = dict1.values()
print(f"获取字典的值列表: {values_list}")

# 判断 '李雷' 是否在字典的值列表中
condition1 = '李雷' in values_list
print(f"李雷 in dict1: {condition1}")

# 判断 19 是否在字典的值列表中
condition2 = 19 in values_list
print(f"19 in dict1: {condition2}")


# ---output---
获取字典的值列表: dict_values(['李雷', 19])
李雷 in dict1: True
19 in dict1: True
```

从上面输出可知，我们成功实现了判断值是否存在目标字典当中。这其实利用了问题转换思想：把判断值是否存在字典当中这个问题，转换成字典的值是否存在字典值的列表当中。当值在字典值列表当中时，也反向意味着值在字典当中。

#### 9.6.2 补充

使用 `.keys()` 可以实现纯粹判断键在不在字典当中：

```python
dict1 = {'name': '李雷', 'age': 19}
print('name' in dict1.keys())

# ---output---
True
```

上面有点抽象，其实等价列表的 `Value in Sequence`，我们来一起看看下面的代码示例：

```python
dict1 = {'name': '李雷', 'age': 19}
keys = list(dict1.keys())
print(f"keys: {keys}")

condition = 'name' in keys
print(f"name in dict1: {condition}")

# ---output---
True
```

在学习的过程中，要学会联系以往学会的知识，实现适当的举一反三，可以让你的学习事半功倍！



### 9.7 `.update()`：批量更新字典

原本对于字典添加数据，只能一次操作一个键值对添加：

```python
student = {'name': '李雷', 'age': 19}

student["gender"] = "male"
student["class"] = "class1"
print(student)
```

只能像上面的代码一样，一次添加一组键值对，不能批量。（这里回应“杠精”：先不考虑循环添加情况）。

所以 `update()` 方法应运而生， ~~`update()` 是字典对象的一个重要方法，它允许你更新字典的内容，通过添加新的键值对或修改现有的键值对。~~ 这个方法可以把另一个字典的内容**合并**进当前字典，已有的键会被覆盖，新键会被添加。

#### 9.7.1 方法一：用另一个字典更新

你可以使用另一个字典来更新一个字典，这将添加新的键值对到原始字典中，并覆盖任何现有的键的值。

**示例一：**

```python
dict1 = {'name': '李雷', 'age': 19}
dict2 = {'age': 20, 'class': '1班', 'gender': 'male'}
dict1.update(dict2)
print(dict1)

# ---output---
{'name': '李雷', 'age': 20, 'class': '1班', 'gender': 'male'}
```

**示例二：** 在这个例子中，dict1 使用 dict2 的内容进行了更新。键 `'b'` 的值从 `2` 更新为 `3`，键 `'c'` 被添加到了字典中。

```python
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
dict1.update(dict2)
print(dict1)  # 输出：{'a': 1, 'b': 3, 'c': 4}
```

#### 9.7.2 方法二：使用关键字参数更新

你也可以使用关键字参数来更新字典，代码示例如下。

```python
dict1 = {'name': '李雷', 'age': 19}
dict1.update(name="AI悦创", age=28)
print(dict1)

# ---output---
{'name': 'AI悦创', 'age': 28}
```

这里，使用关键字参数 name 和 age 直接更新了 dict1。

#### 9.7.3 方法三：使用键值对组成的可迭代对象更新

可以传递一个可迭代对象（比如元组列表），其中每个元素都是一个键值对。

**示例一：** 列表嵌套元组

```python
student = {'name': '李雷', 'age': 19}
data_lst = [('age', 20), ('class', '1班'), ('gender', 'male')]
student.update(data_lst)
print(student)

# ---output---
{'name': '李雷', 'age': 20, 'class': '1班', 'gender': 'male'}
```

**示例二：** 元组嵌套元组

```python
student = {'name': '李雷', 'age': 19}
data_lst = (('age', 20), ('class', '1班'), ('gender', 'male'))
student.update(data_lst)
print(student)

# ---output---
{'name': '李雷', 'age': 20, 'class': '1班', 'gender': 'male'}
```

**示例三：** 元组嵌套列表

```python
student = {'name': '李雷', 'age': 19}
data_lst = (['age', 20], ['class', '1班'], ['gender', 'male'])
student.update(data_lst)
print(student)

# ---output---
{'name': '李雷', 'age': 20, 'class': '1班', 'gender': 'male'}
```

其实怎么嵌套都可以，你可以自行思考和尝试。

#### 9.7.4 方法四：使用 zip() 创建可更新的数据结构

`update()` 还支持通过迭代器提供的键值对进行更新。如果迭代器产生的是两项的元组，则第一项将被视为键，第二项视为值。

```python
dict1 = {'a': 1}
pairs = zip(['b', 'c'], [2, 3])
dict1.update(pairs)
print(dict1)

# ---output---
{'a': 1, 'b': 2, 'c': 3}
```

在这个例子中，`zip()` 函数生成了一个元组列表，这些元组被用来更新 `dict1`。

#### 9.7.5 注意事项

- 当使用 `update()` 方法时，如果键已存在，则其值将被新的值覆盖。
- 如果键不存在，则将添加新的键值对。
- `update()` 方法不返回任何值（即返回 `None`），是直接修改字典本身。
- 当使用 `update()` 方法时，如果键的值是一个可变数据类型（如列表或字典），需要注意，如果通过 `update()` 方法修改了这个键的值，原来对应的值也会被更改，除非进行深拷贝。（这个会在后面讲解）

这种方法特别有用，在你需要合并两个字典或者在已有字典中添加新的信息时。例如，当你处理来自不同来源的数据并希望将它们合并为一个统一的数据结构时，`update()` 方法非常方便。

#### 9.7.6 应用场景

##### 9.7.6.1 场景 1：**合并配置** —— 覆盖默认设置

在软件开发中，我们经常会设置一份**默认配置（default_config）**，比如默认主题、字体、语言等。如果用户手动设置了配置（user_config），我们就使用用户的优先，这时候 `update()` 就非常合适。

```python
# 默认配置
default_config = {
    'theme': 'light',
    'font_size': 12,
    'language': 'zh-cn',
    'auto_save': True,
}

# 用户配置（可能来自用户设置、配置文件等）
user_config = {
    'theme': 'dark',
    'font_size': 14
}

# 合并配置：用户配置覆盖默认配置
default_config.update(user_config)

print(default_config)
```

输出：

```python
{'theme': 'dark', 'font_size': 14, 'language': 'zh-cn', 'auto_save': True}
```

📌 **说明：**

- `theme` 和 `font_size` 被用户更新了；
- `language` 和 `auto_save` 使用默认值保留；

**小结：** `.update()` 是实现“默认 + 自定义”组合的理想工具。

##### 9.7.6.2 场景 2：**数据聚合** —— 汇总多个来源的数据

假设你在做数据分析，有多个部门提交了各自的销售数据，我们希望将这些数据整合到一个总表中：

```python
# 各部门上报的数据
sales_dept1 = {'一月': 12000, '二月': 15000}
sales_dept2 = {'二月': 10000, '三月': 18000}
sales_dept3 = {'一月': 5000, '三月': 7000}

# 创建一个汇总字典
total_sales = {}

# 把所有数据累加进来
for dept_data in [sales_dept1, sales_dept2, sales_dept3]:
    for month, amount in dept_data.items():
        if month in total_sales:
            total_sales[month] += amount
        else:
            total_sales[month] = amount

print(total_sales)
```

输出：

```python
{'一月': 17000, '二月': 25000, '三月': 25000}
```

📌 **说明：**

- 相同月份的销售额通过累加实现“聚合”；
- 这是数据分析场景中非常常见的处理方式；

##### 9.7.6.3 场景 3：更新用户个人信息表单

假设你正在做一个用户注册系统，用户第一次注册时填写了部分信息，以后登录后可以继续补全或修改这些信息：

```python
user_info = {'name': '小明', 'age': 18}

# 用户后续填写了更多信息
new_data = {'gender': '男', 'city': '北京'}

# 用 update 方法更新用户信息
user_info.update(new_data)

print(user_info)
```

输出：

```python
{'name': '小明', 'age': 18, 'gender': '男', 'city': '北京'}
```

**小结：** 用 `.update()` 把用户后续填写的信息合并到原始资料中，是不是很方便？

##### 9.7.6.4 场景 4：汇总多个购物车

小红和小刚分别在网上购物，各自有自己的购物车，现在他们决定合并下单：

```python
cart_xiaohong = {'苹果': 3, '香蕉': 2}
cart_xiaogang = {'香蕉': 1, '橙子': 4}

# 合并购物车
cart_xiaohong.update(cart_xiaogang)
print(cart_xiaohong)
```

输出：

```python
{'苹果': 3, '香蕉': 1, '橙子': 4}
```

⚠️ **注意**：同样的商品（例如“香蕉”），后加入的会覆盖前面的数量。

📝 **小结：** 如果你希望数量相加，而不是覆盖，可以使用别的处理方式，比如循环 + `+=`。

##### 9.7.6.5 场景 5：从表格或数据库中加载数据

假设你从 Excel 或数据库中一次性加载一条学生记录，想把它合并进已有的数据结构中：

```python
student = {'name': '李雷', 'age': 18}

# 从数据库查询的新字段
db_data = {'grade': 95, 'class': '1班'}

student.update(db_data)
print(student)
```

输出：

```python
{'name': '李雷', 'age': 18, 'grade': 95, 'class': '1班'}
```

📝 **小结：** 在数据处理场景中，`update()` 可以帮你“拼接”完整信息。

上面是我尽可能想到的具体例子和简易代码示例，便于你对这部分知识点的理解。



### 9.8 小试牛刀

在本节中，我们将结合所学的字典操作知识，通过一个小练习来巩固。

你将学习如何：

- 获取用户输入并处理成列表或元组；
- 使用 `zip()` 函数将两个序列合并为一个字典；
- 使用 `update()` 方法将新字典合并进已有字典中；

#### 9.8.1 题目要求

1. 获取用户输入的两组数据：一个列表和一个元组。
2. 列表数据的输入格式为：`a/b/c`，表示列表 `['a', 'b', 'c']`。
3. 元组数据的输入格式为：`13-14-19`，表示元组 `(13, 14, 19)`。
4. 将用户输入的列表作为字典的键，元组作为对应的值，创建一个新的字典。
5. 将新字典与给定的字典 `dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}` 进行合并，更新 `dict1` 中对应键的值。

#### 9.8.2 输入输出格式

- **输入：**
  - `Enter your list:`  用户输入类似 `a/b/c`
  - `Enter your value:` 用户输入类似 `13-14-19`

- **输出：**
  - 更新后的字典 `dict1`。

#### 9.8.3 示例：

输入：
```python
Enter your list:>>>a/b/c
Enter your value:>>>13-14-19
```

输出：
```python
Updated dictionary: {'a': 13, 'b': 14, 'c': 19, 'd': 4, 'e': 5, 'f': 6}
```

#### 9.8.4 要求：

- 不允许使用 `eval` 函数。
- 列表和元组的长度必须一致，否则抛出错误。「可选」

#### 9.8.5 提示

在你实在写不出来时，再来看此提示。

老样子，我还是带你思考一下，看看具体的思维链是什么样的。

我按步骤带你分析：

1. **大问题**：获取用户输入的两组数据：一个列表和一个元组。并转换成字典后添加到目标字典 dict1 当中。

2. **第一步**：在解决整个大问题之前，我们得先获取用户输入。所以，我们使用 `input()`：

    ```python
    # 获取用户输入
    user_list_input = input()
    user_tuple_input = input()
    ```

3. **第二步**：但直接使用 `input()` 太不直观。按照题目要求需要有提示，我们加上提示：

    ```python
    user_list_input = input("Enter your list:")
    user_tuple_input = input("Enter your value:")
    ```

    如果觉得输入不够直观，咱们可以自己再添加一点：

    ```python
    user_list_input = input("Enter your list (use '/' to separate items): ")  # 中文意思：请输入列表内容（用 '/' 分隔各项）：
    user_tuple_input = input("Enter your value (use '-' to separate items): ")  # 中文意思：请输入数值（用 '-' 分隔各项）：
    ```

4. **第三步**：我们已经成功获取到用户输入，接下来就要对用户输入的数据继续处理。把用户输入的数据处理成目标格式，怎么处理呢？我们发现目标列表数据是以斜杠（`/`）间隔，元组数据是以减号（`-`）间隔。一旦看见这种有特定间隔的数据，我们就需要想到“分割”这个词，而字符串中的分割就是 `.split()` 函数。

5. **第四步**：确定使用 `.split()` 函数分割后，我们需要知道： `.split()` 分割会得到列表，很好第一条列表数据转换成功，但是第二条元组数据还没有完成。怎么办呢？——直接使用 tuple 即可转换。

    ```python
    # 将用户输入的字符串转换为列表和元组
    user_list = user_list_input.split('/')
    user_tuple = tuple(user_tuple_input.split('-'))
    ```

6. **第五步**：现在成功处理了用户给的数据，并且达到任务要求。我们接下来要把这两个数据组合成字典，字典键使用列表数据，字典的值使用元组的数据。那应该如何构建呢？此时，需要怎么思考？不是单纯的思考发呆，要激发自己大脑的思考。如何激发？

    1. 问自己：问题是用列表和元组构建字典；

    2. 那么问自己：字典可以怎么构造？字典可以使用：花括号直接构造、`dict()` 函数构造；

    3. 使用花括号直接构造肯定不行，因为用户输入的数据不是确定的，`dict()` 还是比较方便的。但是 `dict()` 函数有多种创建形式，哪种更好呢？一种的列表嵌套另一种是 `zip()` 函数。显然：如果使用列表嵌套，数据层面我们还是不能实现自动化添加，反而 `zip()` 函数可以实现相同长度的列表和元组进行组合，直接构建创建字典所需的格式。

        ```python
        zipped = zip(user_list, user_tuple)
        dict_data = dict(zipped)
        ```

7. **第六步**：上面已经构造好字典数据，接下来进行添加到字典当中，字典添加数据怎么添加？一种是使用中括号来添加，另一种是使用 `.update()` 来实现。应该怎么选择呢？——中括号一次只能添加一组键值对，不合适。`.update()`可以批量添加，代码如下：

    ```python
    # 给定的初始字典
    dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}
    # 更新目标字典
    dict1.update(dict_data)
    ```

8. **第七步**：最简单，直接使用 `print()` 函数按题目要求输出即可：

    ```python
    # 输出更新后的字典
    print("Updated dictionary:", dict1)
    ```

9. 到此，完整的思考结束。认真对待本书每次带你逐步思考的机会，这是训练你思维的难得时刻！

#### 9.8.6 完整代码

```python
# 给定的初始字典
dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}

# 获取用户输入
user_list_input = input("Enter your list (use '/' to separate items): ")
user_tuple_input = input("Enter your value (use '-' to separate items): ")

# 将用户输入的字符串转换为列表和元组
user_list = user_list_input.split('/')
user_tuple = tuple(user_tuple_input.split('-'))
# user_tuple = tuple(map(int, user_tuple_input.split('-')))  # 批量把元素转换成数字型

# 创建新的字典并更新目标字典
zipped = zip(user_list, user_tuple)
dict_data = dict(zipped)
dict1.update(dict_data)

# 输出更新后的字典
print("Updated dictionary:", dict1)
```

### 9.9 字典的排序

在前面的章节中，我们学习了如何对列表和元组进行排序，那么字典是否也能排序呢？答案是肯定的。本节将介绍字典排序的两种主要方式：按照键（key）排序和按照值（value）排序。

#### 9.9.1 按照 key 排序

字典排序时默认按照字典的键（key）进行升序排序。

```python
dict1 = {'a': 1, 'd': 4, 'b': 2, 'c': 3}
sorted_dict = sorted(dict1.items())  # 默认升序排序
print(sorted_dict)

# ---output---
[('a', 1), ('b', 2), ('c', 3), ('d', 4)]
```

上面虽然排序成功，但得到的数据是列表。我们还需要转换回字典，如何操作呢？利用字典的 `dict()` 函数创建方法，代码如下：

```python
to_dict = dict(sorted_dict)
print(to_dict)

# ---output---
{'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

bingo！到这里排序完成，但是我们标题写着：按照 key 来排序，那么我们如何证明这个观点呢？也就是如何证明上面的排序是依照键（key）还是依照值（value）排序呢？你会去如何探究：`sorted()` 以上面来排序字典的呢？

#### 9.9.2 如何证明是以 key 排序的？

~~那我们就可以制作一个特殊的字典，来看排序后的字典元素是以键（key）为标准排序，还是以值（value）为标准排序。字典使字典的 key 和 value 不是一一对应的数据，也就是至少key 和 value 要两种不同的排列，并且不论是以键排序还是以值排序，都应该是不想关的。比如键是按字母表顺序（ASCII 顺序），value 按数字顺序。如下字典：~~

那我们就可以制作一个特殊的字典，而为了更清楚地观察字典排序时是以键（key）为标准，还是以值（value）   为标准，我们可以专门构造一个“有区别”的字典。这个字典的特点是：**键和值之间不是一一对应的**，也就是说，它们各自的排列顺序应该明显不同或者说键和值是具有两种不同的排列方式。

例如，我们可以让有如下特性：

1. **特性一**：字典的键是按字母顺序排列（比如 ASCII 字母表顺序）时，值是打乱顺序的数字。
2. **特性二**：当字典以值排序时，键是打乱顺序的字母。

这样一来，不管是按键排序还是按值排序，排序结果都会非常明显，便于我们判断以什么为条件来排序。

下面是一个示例字典：

```python
dict1 = {'a': 5, 'd': 2, 'b': 4, 'c': 3, 'e': 1}
```

这个字典中，键是 `a` 到 `e`，值是 `1` 到 `5` 的一组打乱顺序的数字。当我们对字典分别以键或值排序时，就能清楚地看到不同的排序结果，从而验证排序依据到底是 key 还是 value。

上面的字典 dict1 通过不同的排序策略可以得到两种独立的有序结构：

1. **键序排列**（按ASCII码升序）

    ```python
    [('a', 5), ('b', 4), ('c', 3), ('d', 2), ('e', 1)]
    ```

2. **值序排列**（按数值升序）

    ```python
    [('e', 1), ('d', 2), ('c', 3), ('b', 4), ('a', 5)]
    ```

接下来，我们就可以用它来测试不同的排序方法，我们直接因此字典排序看看：

```python
# 验证是以什么为排序
dict1 = {'a': 5, 'd': 2, 'b': 4, 'c': 3, 'e': 1}
sorted_lst = sorted(dict1.items())
print(sorted_lst)


# ---output---
[('a', 5), ('b', 4), ('c', 3), ('d', 2), ('e', 1)]
```

从排序结果可知：键（key）在结果的列表中是有序的，而数字是打乱无序的。接着再使用 `dict()` 函数即可得到排序好的字典：

```python
sorted_dict = dict(sorted_lst)
print(sorted_dict)

# ---output---
{'a': 5, 'b': 4, 'c': 3, 'd': 2, 'e': 1}
```

虽然，上面的排序已经是默认以字典的键（key）来排序。那么我们来明确指定一下：

```python
# 指定为 key 排序
dict1 = {'a': 1, 'd': 4, 'b': 2, 'c': 3}
sorted_dict = sorted(dict1.items(), key=lambda x: x[0])
print(sorted_dict)

to_dict = dict(sorted_dict)
print(to_dict)

# ---output---
[('a', 1), ('b', 2), ('c', 3), ('d', 4)]
{'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

我稍微解释一下，上面的明确指定排序的原理。

1. 第一步：使用 `sorted()` 进行排序时，有两个参数：`dict1.items()`、`key=lambda x: x[0]`。
2. 第二步：分析上面提到的两个参数，对于第一个参数 `dict1.items()` 是把字典转换为列表嵌套元组（就按这么理解即可，不用管 `dict_items` 这个类型），而里面的元组则是字典的键和值，0号位是键，1号位是值。对于第二个参数 `key=lambda x: x[0]` 可以理解为：x 就是代表列表里面的元组，也就是字典 `.items()` 之后组成的列表嵌套元组中的元组。所以，`x[0]` 其实就代表以字典的键（key）来排序。
3. 上面代码 `key=lambda x: x[0]` 中的 x，可以设置成任何变量，可以是 y，也可以是 tup。总之只要符合变量创建规则即可。

##### 9.9.2.1 小结

这个案例清晰地展示了字典排序的三个关键特性：

- 键值对的原始对应关系在排序过程中始终保持不变
- 键的排列顺序与值的排列顺序是完全独立的两个序列
- 排序结果生成的是新的有序列表（而非原生字典对象，因字典类型本身是无序结构）

#### 9.9.3 以 value 排序

现在我们要按字典的值来排序就很简单了，把代码中的索引改成 1 即可，也就是：`x[1]`。

```python
dict1 = {'a': 1, 'd': 4, 'b': 2, 'c': 3}
sorted_dict = sorted(dict1.items(), key=lambda x: x[1])
print(sorted_dict)

to_dict = dict(sorted_dict)
print(to_dict)

# ---output---
[('a', 1), ('b', 2), ('c', 3), ('d', 4)]
{'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

#### 9.9.4 降序排序

上面不论是对字典以键（key）排序，还是以值（value）排序，都是升序排序。那么如何降序排序呢？

1. **第一步**：降序意味着要把原本的从小到达反过来；
2. **第二步**：`sorted()` 排序后得到的是列表，那么这个降序问题就可以变成：如何把列表反过来？
3. **第三步**：列表反过来有两种方法：在排序的时候直接使用 `reverse=True` 进行降序排序，或者在排序完成之后，对排序得到的列表进行 `[::-1]` 也可以达到降序。（问题转换思想）

代码示例：

```python
dict1 = {'a': 1, 'd': 4, 'b': 2, 'c': 3}
sorted_dict1 = sorted(dict1.items(), key=lambda x: x[1], reverse=True)
sorted_dict2 = sorted(dict1.items(), key=lambda x: x[0])[::-1]

to_dict1 = dict(sorted_dict1)
to_dict2 = dict(sorted_dict2)
print(to_dict1)
print(to_dict2)

# ---output---
{'d': 4, 'c': 3, 'b': 2, 'a': 1}
{'d': 4, 'c': 3, 'b': 2, 'a': 1}
```



#### 9.9.5 拓展练习

##### 9.9.5.1 排序下面的列表

如何对下面的列表进行排序，以元组的第二个元素进行排序。

```python
lst = [('a', 'Dog'), ('c', 'Blue'), ('b', 'Cat'), ('e', 'Eye'), ('d', 'Apple')]
```

好好思考一下如何实现，其实用的也就是 `sorted()` 函数，不过需要引入上面字典用到的排序方法。那么问题来了，我们还需要像字典那样 `dict1.items()` 吗？——不需要！接下来，我给你分享和分析具体原因。

我之前带的学生，为了参考字典的使用方法，把题目给的列表 lst 试图转换成字典再使用 `.items()`。不知道你发现或者意识到了没，有没有什么地方不对？我先给你看看他的代码：

```python
lst = [('a', 'Dog'), ('c', 'Blue'), ('b', 'Cat'), ('e', 'Eye'), ('d', 'Apple')]
lst_to_dict = dict(lst)
print(lst_to_dict)

dict_sorted = sorted(lst_to_dict.items(), key=lambda x: x[1])
print(dict_sorted)

# ---output---
{'a': 'Dog', 'c': 'Blue', 'b': 'Cat', 'e': 'Eye', 'd': 'Apple'}
[('d', 'Apple'), ('c', 'Blue'), ('b', 'Cat'), ('a', 'Dog'), ('e', 'Eye')]
```

虽然成功排序了，但是有一些没用的过程代码。首先，题目给的就是列表嵌套元组结构的数据，还有必要转换成字典和使用 `.items()`. 吗？显然是没有必要的，因为字典排序都需要使用 `.items()` 一下，把字典转换成列表嵌套元组。那为什么要把已经符合要求的数据，再经过字典一边呢？原因，我想到这你已经聊熟于心了。一图胜千言！

![](https://blog.images.bornforthis.cn/docs-images/sha256/eb/eb6dab3e3af49d4f9f4bf27028348f6fad487c722ab02ba6fd490f1c2038c58b.png)

最终代码应该如下：

```python
lst = [('a', 'Dog'), ('c', 'Blue'), ('b', 'Cat'), ('e', 'Eye'), ('d', 'Apple')]

lst_sorted = sorted(lst, key=lambda x: x[1])
print(lst_sorted)

# ---output---
[('d', 'Apple'), ('c', 'Blue'), ('b', 'Cat'), ('a', 'Dog'), ('e', 'Eye')]
```

**小结**：上面的讲的有点多，来总结一句：`.items()` 可以把字典 `{'a': 1, 'b': 2}` 的形式转换成列表中放元组的形式 `[('a', 1),('b', 2)]` 。而这里题目已经给的是列表中放元组的形式。则不需要再用 `.items()` 进行转换了，何况本身数据是列表，也无法使用字典的内置函数 `.items()`。逻辑需要简化，有时不要多此一举。

##### 9.9.5.2 小试牛刀：自定义排序

下面列表如何以元组的第三个元素排序呢？

```python
lst = [('a', 5, 'Apple'), ('c', 3, 'Cat'), ('b', 4, 'Blue'), ('e', 1, 'Eye'), ('d', 2, 'Dog')]
```

输出结果如下：

```python
[('b', 2, 'a1'), ('c', 3, 'b2'), ('a', 1, 'c3')]
```

此时，如果你想要转换字典，而且元组中有三个元素，也无法转换成字典。那应该怎么办呢？字典方法使用不了，我们可以使用参考字典排序的方法。既然代码 `key=lambda x: x[1]` 的 1 既然代表元组的 1号位，那么我们的第三个元素就是 2 号位。排序代码如下：

```python
lst = [('a', 5, 'Apple'), ('c', 3, 'Cat'), ('b', 4, 'Blue'), ('e', 1, 'Eye'), ('d', 2, 'Dog')]
sorted_data = sorted(lst, key=lambda item: item[2])
print(sorted_data)

# ---output---
[('a', 5, 'Apple'), ('b', 4, 'Blue'), ('c', 3, 'Cat'), ('d', 2, 'Dog'), ('e', 1, 'Eye')]
```





## 10. 字典的深浅拷贝

### 10.1 常规赋值的问题

~~下面的代码中，字典常规的赋值所存在的问题则是：修改变量 after 字典中值时，也会影响变量 original 字典中原本的值。~~

我们通常使用赋值操作来创建新的变量。但对于字典而言，这样赋值会导致新变量与原变量指向同一个内存地址，因此修改一个变量会同时影响另一个变量。（具体探究可以参考列表的分析，到字典这里应学会举一反三）

下面代码我们把字典 original 赋值给变量 after，并修改 after 中键为 `'a'` 的值为 19。看看下面代码有什么情况：

```python
original = {'a': 1, 'b': [2, 3]}
after = original
after['a'] = 19
print(f'original = {original}')
print(f'after = {after}')

# ---output---
original = {'a': 19, 'b': [2, 3]}
after = {'a': 19, 'b': [2, 3]}
```

从输出可知，修改 after 字典键 `'a'` 对应的值时，也会影响原本字典 original 的值。正常情况变量 original 应该需要达到不受影响才对，我们来稍微用可视化分析一下。从图中，也可以发现两个变量指向同一个值。

![](https://blog.images.bornforthis.cn/docs-images/sha256/c5/c5f6124f83203e4d91962eef856995156c15e0ee8231571e6197015335b2f41f.png)

使用可视化网站：[https://pythontutor.bornforthis.cn/visualize.html#mode=edit](https://pythontutor.bornforthis.cn/visualize.html#mode=edit)

从列表章节可知，我们还可以使用 `id()` 来检查变量的物理地址，物理地址相同则表明时同一个变量：

```python
original = {'a': 1, 'b': [2, 3]}
after = original
original_id = id(original)
after_id = id(after)
print(f"original_id: {original_id}, after_id: {after_id}")
print(f"original == after: {original == after}")

# ---output---
original_id: 4373111808, after_id: 4373111808
original == after: True
```

从上面输出可知，两个字典的物理地址相同，则为同一个变量——两个变量实际上是同一个字典。

### 10.2 浅拷贝（Shallow Copy）

为了避免上述问题，可以使用字典自带的 `.copy()` 方法，这被称为浅拷贝。

```python
original = {'a': 1, 'b': [2, 3]}
after = original.copy()
after['a'] = 19
print(f'original = {original}')
print(f'after = {after}')

# ---output---
original = {'a': 1, 'b': [2, 3]}
after = {'a': 19, 'b': [2, 3]}
```

`copy()` 函数虽然解决了上面的问题，但是对于值是一个可修改的数据时，还是会有影响。因为浅拷贝只解决了顶层问题，嵌套数据仍然共用同一个地址，看图：

![](https://blog.images.bornforthis.cn/docs-images/sha256/a4/a4da0b4239c760650aed4a22c1b99c948ba968305bde22719ff509402757e459.png)

从图中可知，两个字典虽然独立了。但是两个字典中键 `'b'` 对应的值还是指向同一个列表，意味着修改其中一个字典对应的列表，另外一个字典也会被影响。

下面的代码我们修改字典 `shallow_copy` 中键 `'b'` 对应的值列表，使用 `.append()` 函数添加一个数字 4。一起来看看代码：

```python
original = {'a': 1, 'b': [2, 3]}
shallow_copy = original.copy()
shallow_copy['b'].append(4)
print(f'original = {original}')
print(f'shallow_copy = {shallow_copy}')

# ---output---
original = {'a': 1, 'b': [2, 3, 4]}
shallow_copy = {'a': 1, 'b': [2, 3, 4]}
```

从代码输出结果可知，两个字典的数据均被影响。

![](https://blog.images.bornforthis.cn/docs-images/sha256/cc/ccb604ca5422ed030d6c91c0fb4f902983975cfa57c1b89b882dfbb9378db7cc.png)



再次强调分析：由上面的图可以观察出，两个字典中键 `'b'` 对应的值还是指向的是同一个，所以修改这个值里面的数据，对于两个字典都会有影响。**我们对于这种使用了 `.copy()` 实现的赋值，但复制的却不彻底，称之为：浅拷贝**。

### 10.3 深拷贝（Deep Copy）

为了解决浅拷贝存在的嵌套数据共用问题，可以使用深拷贝。深拷贝会递归复制所有层次的对象。

```python
import copy

original = {'a': 1, 'b': [2, 3]}
deep_copy = copy.deepcopy(original)
deep_copy['b'].append(4)
print(f'original = {original}')
print(f'deep_copy = {deep_copy}')

# ---output---
original = {'a': 1, 'b': [2, 3]}
deep_copy = {'a': 1, 'b': [2, 3, 4]}
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/14/14b9b2af18f440256ce2eeb982a94b17b7eb7aac42a4eaae5a247882c57d452c.png)

通过上面的图，可以发现现在已经完完全全的实现 copy 了，这才是备份思想。

### 10.4 深浅拷贝总结

- **浅拷贝**：复制对象，但不复制对象中的嵌套对象。修改浅拷贝的嵌套对象会影响到原始对象。（只复制第一层数据，嵌套数据引用相同。）

- **深拷贝**：递归复制对象及其所有嵌套对象，修改深拷贝的任何部分都不会影响原始对象。（完全复制，包括所有嵌套数据，彼此互不影响。）

学习时建议多实践，帮助理解不同拷贝方式的区别。

## 11. 练习

### 11.1 为学生成绩排序

#### 11.1 题目描述

**描述**：给定一个字典，其中键是学生的名字，值是一个元组，包含学生的年龄和他们的成绩。编写一个程序，该程序返回按成绩（grade）从小到大排序的学生名单。

**题目描述**：给定一个字典，其中**键**是学生的姓名，**值**是一个元组，包含学生的年龄和成绩。请编写一个程序，按照**成绩（grade）从小到大**的顺序返回学生的姓名列表。

**示例输入**：

```python
students = {
    'Alice': (20, 85), # name: (age, grade)
    'Bob': (22, 90),
    'Charlie': (21, 88)
}
```

**示例输出**：

```python
['Alice', 'Charlie', 'Bob']
```

这个题目是我做私教这么多年精心设计的，请你务必要认真思考，不要直接继续阅读。

#### 11.2 思路提示

想必你已经耗费足够的时间思考，接下来我依然是带你一步步思考和分析。跟上来，我带你一起建立属于你自己的思维链。

1. **第一步**：要以字典中值中元组中的成绩来排序，首先需要获取字典中的所有键值对，例如使用 `students.items()`。

    ```python
    students = {
        'Alice': (20, 85),
        'Bob': (22, 90),
        'Charlie': (21, 88)
    }
    
    students_items = students.items()
    print(f"学生信息：{students_items}")
    
    # ---output---
    学生信息：dict_items([('Alice', (20, 85)), ('Bob', (22, 90)), ('Charlie', (21, 88))])
    ```

2. **第二步**：按照值中的成绩进行排序。在元组 `(age, grade)` 中，`grade` 对应索引为 1。那么代码如何编写呢？想想字典中排序的关键是哪个，是这个：`key=lambda x: x[1]` ，我们只要构建出 key 这个参数就可以成功排序。

    ~~其中 x 代表列表中的每个元组，我们先拿出上面输出的一个元组来观察：`('Alice', (20, 85))`，我们需要以元组的 1 号位中的元组来排序，我们再来看里面那个元组 `(20, 85)` 。grade 是在列表的 1 号位。所以 grade 最终的提取格式应该是：`x[1][1]`，这样就是以 grade 来排序的。（有点绕，多阅读几遍）~~

    其中 x 代表列表中的每个元组，我们先拿出上面输出的一个元组来观察：`('Alice', (20, 85))`，名字 `'Alice'` 是键，对应的值是一个元组 `(20, 85)`，其中 `20` 是年龄（age），`85` 是成绩（grade）。我们的目标是按照成绩进行排序，也就是每个值中元组的第二个元素（`grade`），来对整个字典排序。（有点绕，多阅读几遍）

    那怎么写代码呢？关键在于指定排序的依据（即 key 参数）。这里我们使用：

    ```python
    key=lambda x: x[1][1]
    ```

    来解释一下：

    - `x` 表示字典转换成列表后，每一个键值对组成的元组，比如 `('Alice', (20, 85))`；
    - `x[1]` 取出的是元组中的值，也就是 `(20, 85)`；
    - `x[1][1]` 再往里取，就是成绩 `85`；

    所以，`key=lambda x: x[1][1]` 就表示“按成绩排序”。

    我在添加个字符演示，来辅助你理解：

    ```python
     ('Alice', (20, 85))
        ├── [0] → 'Alice'            (姓名)
        └── [1] → (20, 85)           (年龄与成绩)
                     ├── [0] → 20    (年龄)
                     └── [1] → 85    (成绩) ← 就是它，我们的排序依据！
    ```

    这个过程看起来有点绕，特别是嵌套的索引，多读几遍、多动手试试，很快你就能理解透彻了！

    ```python
    # 使用 sorted 函数对字典按年龄进行排序
    sorted_students = sorted(students_items, key=lambda x: x[1][1])
    ```

3. **第三步**：最后只要排序成功的学生姓名，那么直接使用 `.keys()` 即可并，并使用 `list()` 函数转换成列表即可。

    ```python
    # 提取排序后的学生名字
    sorted_names = list(dict(sorted_students).keys())
    
    # 打印结果
    print(sorted_names)
    ```

现在可以试一试按学生年龄来排序并输出学生姓名看看，看看有没有什么奇妙的发现。这里我直接给出代码：

```python
students = {
    'Alice': (20, 85),
    'Bob': (22, 90),
    'Charlie': (21, 88)
}

students_items = students.items()
sorted_ages1 = sorted(students_items, key=lambda student: student[1])
print(sorted_ages1)

sorted_ages2 = sorted(students_items, key=lambda student: student[1][0])
print(sorted_ages2)
```

输出如下：

```python
[('Alice', (20, 85)), ('Charlie', (21, 88)), ('Bob', (22, 90))]
[('Alice', (20, 85)), ('Charlie', (21, 88)), ('Bob', (22, 90))]
```

有趣点：`sorted(students_items, key=lambda x: x[1])` 和 `sorted(students.items(), key=lambda x: x[1][0])` 都是正确的，因为不指定一个序列具体的排序数字，默认会以第一个元素进行比较。

### 11.2 找到成绩最高的学生

给定一个字典 `scores`，其中存放了学生的姓名（键）和对应的成绩（值）。请编写一个程序，找出成绩最高的学生姓名，并返回这个学生的名字。

注意：只能使用字典的基础方法或 Python 内置函数（例如 `max()`、`.get()` 等），**不可使用任何循环语句**。

**示例字典**：

```python
scores = {
    'Alice': 78,
    'Bob': 85,
    'Charlie': 92,
    'Diana': 88
}
```

**示例输出**：

```python
'Charlie'
```

这部分题目都比较简单，直接贴出答案：

```python
scores = {
    'Alice': 78,
    'Bob': 85,
    'Charlie': 92,
    'Diana': 88
}

scores_items = scores.items()
# 降序排序，最大值在排序后列表的 0 号位
sorted_scores = sorted(scores_items, key=lambda x: x[1], reverse=True)  
print(sorted_scores[0][0])
```

### 11.3 找到人口最少的城市

给定一个字典 `population`，其中键是城市名，值是该城市的人口数量。请编写一个程序，找出人口最少的城市，并返回由该城市名与人口数量组成的元组。

注意：只能使用字典的基础方法或 Python 内置函数（例如 `min()`、`.items()` 等），**不可使用任何循环语句**。

**示例字典**：

```python
population = {
    'CityA': 15000,
    'CityB': 30000,
    'CityC': 12000
}
```

**示例输出**：

```python
('CityC', 12000)
```

实现代码如下：

```python
population = {
    'CityA': 15000,
    'CityB': 30000,
    'CityC': 12000
}

sorted_population = sorted(population.items(), key=lambda x: x[1])
print(sorted_population[0])
```

### 11.4 移除字典数据

给定一个字典 `prices`，其中键是商品名称，值是价格。请只使用字典和 Python 内置函数，将价格最高的商品从字典中移除，并返回移除后的字典。

注意：只能使用字典的基础方法或 Python 内置函数（例如 `max()`、`.pop()`），**不可使用任何循环语句**。

**示例字典**：

```python
prices = {
    'Apple': 10,
    'Banana': 8,
    'Cherry': 12,
    'Date': 6
}
```

**示例输出**：

```python
{'Apple': 10, 'Banana': 8, 'Date': 6}
```

代码实现如下：

```python
prices = {
    'Apple': 10,
    'Banana': 8,
    'Cherry': 12,
    'Date': 6
}

sorted_prices = sorted(prices.items(), key=lambda x: x[1])
# 排序后最大值在最右侧，直接使用 pop() 方法即可
sorted_prices.pop()
to_dict = dict(sorted_prices)  # 转换回字典
print(to_dict)
```

如果要输出原顺序的字典该如何实现呢？

```python
prices = {
    'Apple': 10,
    'Banana': 8,
    'Cherry': 12,
    'Date': 6
}

sorted_prices = sorted(prices.items(), key=lambda x: x[1])
# 排序后最大值在最右侧，直接使用 pop() 方法即可
max_price = sorted_prices.pop()

del prices[max_price[0]]
print(prices)
```





