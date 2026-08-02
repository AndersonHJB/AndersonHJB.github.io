---
title: 06-元组
icon: yongyan
date: 2024-01-02 08:38:05
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

前面我们讲解了列表类型，接下来我们要讲解元组类型。在 Python 当中列表和元组是非常相似的，接下来我们一起探究一下元组的特性。

## 1. 创建元组

创建元组时，我们使用小括号 `()`，其中的元素用英文逗号隔开，下面我们编写代码创建一个元组，并输出检测类型：

```python
tup = ('毒药', '感冒药', '解药')
print(tup, type(tup))

# ---output---
('毒药', '感冒药', '解药') <class 'tuple'>
```

## 2. 列表和元组的对比

一图胜千言，先看下图：

![](https://blog.images.bornforthis.cn/docs-images/sha256/17/17b00d353628ea7c444611434faded220aa00bb246e82b8d01e518f73b2743cb.png)

在 Python 中，**列表**和**元组**都可以存储多个元素，但它们有几个显著的区别：

- ~~列表中：元素用方括号 `[]` 包裹；在元组中，元素用圆括号 `()` 包裹。~~
- ~~列表中的元素可以被修改、添加、删除，即列表是可变的数据类型，元组是不可变的数据类型。~~
- **括号**：列表的元素用方括号 `[]` 包裹，元组的元素用圆括号 `()` 包裹。
- **可变性**：列表是可变的数据类型，即其元素可以修改、添加或删除；而元组是不可变的，创建后无法修改。

## 3. 元组的拼接

我们可以使用 `+` 运算符来拼接两个元组：

```python
tup1 = (1, 2, 3)
tup2 = (4, 5, 6)
new_tup = tup1 + tup2
print(new_tup)  # 输出： (1, 2, 3, 4, 5, 6)
```



## 4. 元组的取值与分片操作

### 4.1 题目

我们可以像列表一样通过索引访问元组中的元素，也可以使用切片操作来提取部分元素。

这里给定如下元组：

```python
tup = (3, 'bornforthis', 22, 'aiyuechuang', 12, 'huangjiarongbao', 8)
```

请提取：

**Question 1**：提取字符串 `'bornforthis'`；

**Question 2**：提取 `8` ，并使用三种方法实现；

**Question 3**：提取 `('bornforthis', 22)`；

**Question 4**：提取 `(3, 22, 12, 8)`；

**Question 5**：提取 `('bornforthis', 'aiyuechuang', 'huangjiarongbao')`；

**Question 6**：提取 `(22, 'huangjiarongbao')`；

**Question 7**：提取 `(8, 'huangjiarongbao', 12, 'aiyuechuang', 22, 'bornforthis', 3)`

**Question 8**：提取 `('huangjiarongbao', 12, 'aiyuechuang')`

自己在代码编辑器中编辑后，再看我提供的答案。多思考，多编写代码。为了方便理解和提取，我把此元组的双向下标做了一个索引：

![](https://blog.images.bornforthis.cn/docs-images/sha256/c6/c6694d1ee9b5696e54b872d9c31e001f86d48c7d4607e3b89732200f8e300686.png)

### 4.2 答案

#### 4.2.1 Question 1

原理: 使用索引1直接访问元组中的第二个元素（索引从0开始计数）

```python
# Question 1: 提取字符串 'bornforthis'
q1_answer = tup[1]
print(f"Q1: {q1_answer}")
```

#### 4.2.2 Question 2

原理:

- **方法1**：使用索引 `6` 访问元组中的第七个元素

- **方法2**：使用负索引 `-1` 访问元组中的最后一个元素

- **方法3**：使用 `len()` 获取元组的长度，再进行 `-1`，就可以代表最后一个元素的下标（索引）

```python
# Question 2: 提取 8（三种方法）
# 方法1：使用正向索引
q2_answer1 = tup[6]
# 方法2：使用负向索引
q2_answer2 = tup[-1]
# 方法3：len 获取元组长度，再进行 -1
q2_answer3 = tup[len(tup) - 1]
print(q2_answer3)
# 方法4：
q2_answer4 = tup[-1:]
print(f"Q2: 方法1: {q2_answer1}, 方法2: {q2_answer2}, 方法3: {q2_answer3}")
```

#### 4.2.3 Question 3

原理: 使用切片 `[1:3]` 提取索引 `1` 到 `2` 的元素（左闭右开区间）

```python
# Question 3: 提取 ('bornforthis', 22)
q3_answer = tup[1:3]
print(f"Q3: {q3_answer}")
```

#### 4.2.4 Question 4

原理: 使用切片 `[0::2]` 或 `[::2]`，从索引 0 开始，步长为 2，提取所有偶数索引位置的元素

```python
# Question 4: 提取 (3, 22, 12, 8)
q4_answer = tup[0::2]  # 或者可以写作 tup[::2]
print(f"Q4: {q4_answer}")
```

#### 4.2.5 Question 5

原理: 使用切片 `[1::2]`，从索引 1 开始，步长为 2，提取所有奇数索引位置的元素

```python
# Question 5: 提取 ('bornforthis', 'aiyuechuang', 'huangjiarongbao')
q5_answer = tup[1::2]
print(f"Q5: {q5_answer}")
```

#### 4.2.6 Question 6

原理: 通过索引 2 和 5 分别访问元素，然后创建一个新元组

```python
# Question 6: 提取 (22, 'huangjiarongbao')
q6_answer = (tup[2], tup[5])
print(f"Q6: {q6_answer}")
```

#### 4.2.7 Question 7

原理: 使用切片 `[::-1]` ，步长为 `-1`，实现元组反转

```python
# Question 7: 提取 (8, 'huangjiarongbao', 12, 'aiyuechuang', 22, 'bornforthis', 3)
q7_answer = tup[::-1]
print(f"Q7: {q7_answer}")
```

#### 4.2.8 Question 8

原理:

- **方法一**：使用负数索引 `[-2:-5:-1]`，从倒数第二个元素开始，到倒数第五个元素结束（不包含倒数第五个元素），步长为 `-1`，实现倒序提取；

- **方法二**：使用切片 `[5:2:-1]`，从索引5开始，到索引3结束（不包含索引2），步长为-1。

- **剖析**：实现倒序提取不论是方法一还是方法二，主要保证方向相同，就是与 `-1` 的方向相同即可正确提取出倒序数据。

    一图胜千言，全在图里了：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/d3/d3fc333c9863bdc9caf942d84f8f534a52857571c3531585251d25a60e378c18.png)

```python
# Question 8: 提取 ('huangjiarongbao', 12, 'aiyuechuang')
q8_answer = tup[-2:-5:-1] # or tup[5:2:-1]
print(f"Q8: {q8_answer}")
```





## 5. 元组的特点

**思考一下**：如果元组只有一个元素，是什么类型？可以结合 `type()` 函数来检查数据类型。

```python
tup = (1)
print(type(tup))
```

代码运行后，输入如下结果：

```python
<class 'int'>
```

咦，怎么是 int 而不是元组呢？此刻，不要一棍打死。要激发我们的研究性，多测试测试其它数据类型，再去总结出结论。

```python
tup = (12.1)
print(type(tup))

tup = ("bornforthis.cn")
print(type(tup))

tup = ([3, 22, 12, 8, 11, 26])
print(type(tup))

tup = ({11, 26, 12, 9, 3, 22})
print(type(tup))

tup = ({'name': 'bornforthis', 'age': 28})
print(type(tup))

tup = (True)
print(type(tup))
```

想一想上面的代码输出什么结果，不知道你有没有思考或者猜出来，输出如下：

```python
<class 'float'>
<class 'str'>
<class 'list'>
<class 'set'>
<class 'dict'>
<class 'bool'>
```

哇哦！居然放什么是什么的类型！不是元组，所以基于上面这个研究我们可知：如果元组（tup）只有一个元素，这个变量（tup）的类型就是该元素本身的类型，而不是元组类型。这是因为在数学运算中，括号有时仅仅用于改变运算的优先级，而不代表元组。

~~那么此变量的类型，就是元素本身的类型。~~

~~为什么会是这个结果呢？~~

举个例子：

例如，数学表达式 `(1 + 2) * (2 + 1)` 中，`(3)` 实际上并没有改变其数值结构，因此 `1` 后面没有逗号时会被认为是数字本身，而不是元组。

- 我们常规在数学计算中括号是在运算的时候用来保证优先级，在适当的情况下是可以直接去掉。
- 比如数学表达式：`(1 + 2) * (2 + 1) => (3) * (3) => 3 * 3 = 9` 所以，你可以发现 `(3) * (3) => 3 * 3` 左边的 `(3)` 不就是上面所说的“元组只有一个元素的情况”。也就类似于数学表达式中括号可以直接省去。

如何解决这个问题？如果元组只有一个元素，可以在元素后加上逗号来明确表示它是一个元组：

```python
tup = (1,)  # 如果元组只有一个元素，加个逗号以此区分
print(type(tup))

tup = (12.1,)
print(type(tup))

tup = ("bornforthis.cn",)
print(type(tup))

tup = ([3, 22, 12, 8, 11, 26],)
print(type(tup))

tup = ({11, 26, 12, 9, 3, 22},)
print(type(tup))

tup = ({'name': 'bornforthis', 'age': 28},)
print(type(tup))

tup = (True,)
print(type(tup))

```

输出如下：

```python
<class 'tuple'>
<class 'tuple'>
<class 'tuple'>
<class 'tuple'>
<class 'tuple'>
<class 'tuple'>
<class 'tuple'>
```

可以看到，完美！清一色的元组类型。



## 6. 元组是不可变的

~~但凡我们想修改元组，是会报错：~~

元组的最大特点就是不可变。一旦创建，元组中的元素不能被修改。如果尝试修改元组中的元素，会抛出 `TypeError` 错误：

```python
tup = ('毒药', '感冒药', '解药')
tup[0] = 1

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/bornforthis.cn/demo.py", line 2, in <module>
    tup[0] = 1
TypeError: 'tuple' object does not support item assignment
```

### 6.1 元组的“修改”

::: tip 添加日期：2025 年 7 月 16 日

:::

在正式讲解修改之前，我们先放出一个思考题。

待修改的元组如下：

```python
tup = ('毒药', '感冒药', '解药')
```

**要求**：获取用户输入，把 `'毒药'` 改成用户输入的内容。

好好的，花足够的时间思考一下吧。

ok，我们接着往下阅读。

元组是不可变的，所以想要对元组进行特定元素修改，我们无法就两种方法：

- **方法一**：把元组转换成其它可变的数据类型进行修改，修改完成后再转换回元组；
- **方法二**：使用元组的拼接，其实当你想到或看到这个方法时，应该要有一个感受（感悟）：元组的拼接，本质上是创建新的元组；

接下来，我们来一起看看两种方法的具体实现。

**方法一实现**：

```python
tup = ('毒药', '感冒药', '解药')
tup_to_list = list(tup)
tup_to_list[0] = '泻药'
tup = tuple(tup_to_list)
print(tup)
```

**方法二实现**：

对于不可变的元组，如果要修改还是添加元组的数据我们只能使用元组的拼接。

比如我要对下面的元组进行修改，把元组中的 `'毒药'` 改成 `'泻药'` 那我们应该如何操作呢？使用切片赋值加元组的加法拼接，代码示例如下：

```python
tup = ('毒药', '感冒药', '解药')
new_tup = ('泻药',) + tup[1:]
print(new_tup)
```

输出如下：

```python
('泻药', '感冒药', '解药')
```

### 6.2 元组的“添加”

而如果想要对已有的元组进行添加元素，直接使用元组的拼接即可，比如想要对元组添加 `'迷药'` 则使用如下代码实现：

```python
tup = ('毒药', '感冒药', '解药')
new_tup = tup + ('迷药',)
print(new_tup)
```

输出如下：

```python
('毒药', '感冒药', '解药', '迷药')
```

不论是元组的“修改”或“添加”，其实本质上都是在创建一个新的元组存储，在实际应用中需要考虑好使用何种类型。否则使用元组存储的数据，在需要添加数据时，需要把已有数据和新添加数据拼接在一起后，再赋值给一个新变量。

此时，有些读者有可能觉得：新建元组就新建呗，反正可以实现就行。「添加日期：2025 年 7 月 23 日」

乍眼一看貌似没什么问题，可如果已有数据的量很大呢？岂不是操作耗费的时间会逐步增加，不仅仅是时间，资源也会浪费。所以，请在选用何种类型去实现功能前，选好合适的数据类型很重要！



## 7. 元组的排序

由于元组是不可变的，我们不能直接对元组进行排序。但往往有时在某些场景中，我们是需要对元组进行排序的。那么你作为一个新晋开发者，如何对元组排序呢？

~~但可以通过先将元组转换为列表，然后对列表进行排序，再将列表转换回元组的方式来实现排序。~~

### 7.1 小试牛刀

利用现有的知识对元组进行排序，给定以下元组：

```python
tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)
```

在我给你提示之前，你需要好好思考如何实现。用到现在为止所学习的知识，是完全足够解决这个题目的。

想必你已经花费足够的时间思考和编写代码了，我们先来分析分析思路。

因为元组是不可变，想要使用现成的方法去排序肯定是不行的。这个问题行不通，咱们就换一个方向：元组不能被改变，那么我们就先把元组转换成在 Python 中可以排序的数据类型——列表。

当我们转换成列表后，那么排序不是轻而易举的。可列表排序后得到的是列表，我们还需要把列表转换成元组。这就是这个练习的完整四路。我来归整一下：

- **步骤一**：因为元组不可变，所以先把元组转换成列表；

- **步骤二**：对转换成功的列表进行排序；
- **步骤三**：排序完成之后，使用 `tuple()` 转换回来。

代码如下：

```python
tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)
tup_to_list = list(tup)
tup_to_list.sort()
list_to_tup = tuple(tup_to_list)
print(list_to_tup)
```

输出如下：

```python
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```

我们成功对元组进行排序了，怎么样有时候或许已经学的不能直接解决我们遇到的问题（需求），但是我们可以把这个问题转换成另一种方法，就可以解决。这就是我所说的**问题转换思想**，把一个问题转换成另一个问题。因为，我们不论怎么学都是不可能直接解决未来所要遇到的所有问题。我必须学会利用已经学会的知识，去创造无限可能（也就是新的事物）。

不然编程的基础语法都是那些，怎么可能创造出现在各种各样的产品呢？所以，这个思维也是我要在本书带给你的。

### 7.2 使用 sorted()

Python 的内置函数 `sorted()` 提供了更简洁的排序方式。`sorted()` 函数会返回一个排序后的列表，因此我们需要将其转换为元组。所以实际上 sorted 实现的也就是上面的流程，这里设计不直接讲解 `sorted()` ，而把 `sorted()` 放在 `.sort()` 之后来讲。有两个意图：‘

- **意图一**：设置情景，体现问题转换思想的方法；
- **意图二**：先讲 `.sort()` 再讲 `sorted()` 逻辑上是通顺的，并且 `sorted()` 可以直接快速理解。（本质上：sorted 实现的不就是：先把数据转换成列表后，再进行排序，最终得到列表结果。｜学代码也需要悟性）

```python
tup = (9, 7, 5, 3, 1, 2, 4, 6, 8, 0)
lst = sorted(tup)
print(lst)
tup = tuple(lst)
print(tup)

# ---output---
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```



## 8. zip()

`zip()` 是一个内置函数，用于将多个可迭代对象（如列表、元组或字符串）的相应元素配对并返回一个元组的迭代器。如果你有两个或更多的列表，并且想要根据它们的相应元素创建一个新的迭代器，那么 `zip()` 函数就非常有用。

1. 假设有两个列表：

```python
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
```

可以使用 `zip()` 来配对这些列表的元素，可以达到什么样的效果呢？我们一起来看看：

```python
zipped = zip(list1, list2)
```

~~`zipped` 现在是一个包含元组的迭代器，每个元组都由两个列表的相应元素组成。例如：~~

`zipped` 现在是一个迭代器，包含的元素是由两个列表相应位置的元素组成的元组。我们可以将其转换为列表（称为：解包）查看结果：

```python
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
zipped = zip(list1, list2)
print(zipped)  # 是一个 zip 对象、迭代器地址
print(list(zipped))  # 转换成列表查看，也可以转换成元组
```

输出结果如下：

```python
<zip object at 0x102eba500>
[(1, 'a'), (2, 'b'), (3, 'c')]
```

当然，我们也可以使用 `tuple()` 函数来转换：

```python
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
zipped = zip(list1, list2)
print(zipped)  # 是一个 zip 对象、迭代器地址
print(tuple(zipped))  # 转换成元组查看
```

输出如下：

```python
<zip object at 0x104d96440>
((1, 'a'), (2, 'b'), (3, 'c'))
```

但是这里有个注意点：同一个代码块中，一个变量只能被解包一次，后出现解包的则会得到**空**数据。代码示例如下：

```python
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
zipped = zip(list1, list2)
print(zipped)  # 是一个 zip 对象、迭代器地址
print(tuple(zipped))  # 先使用元组解包
print(list(zipped))  # 后使用列表解包，得到空列表，因为数据已经被提取走了。
```

运行后输出如下：

```python
<zip object at 0x104ae6440>
((1, 'a'), (2, 'b'), (3, 'c'))
[]
```

从上面的输出可知，后转换的列表得到的数据为**空列表**。

当然也可以用循环，但是目前不涉及。我这里就先稍微提供一下 for 循环实现获取迭代器数据的代码，参考即可：

```python
for num, letter in zipped:
    print(f"Number: {num}, Letter: {letter}")
```

这将会输出：

```python
Number: 1, Letter: a
Number: 2, Letter: b
Number: 3, Letter: c
```

上面讲解和演示，我特地使用列表演示。为的就是留出元组，让你自己写一遍元组的 zip 代码，自行编写后参考下面的代码：

```python
tup1 = (1, 2, 3)
tup2 = ('a', 'b', 'c')
zipped = zip(tup1, tup2)
print(zipped)  # 是一个迭代器地址
print(list(zipped))  # 转换成列表查看，也可以转换成元组


# ---output---
<zip object at 0x104f0d400>
[(1, 'a'), (2, 'b'), (3, 'c')]
```

## 9. 小试牛刀

### 9.1 题目

计算下面元组（tup）中每一列的总和，元组数据如下：

```python
tup = (
    (1, 2, 3),
    (4, 5, 6),
    (7, 8, 9),
)
```

举例说明：

- `1 + 4 + 7`
- `2 + 5 + 8`
- `3 + 8 + 9`

一图胜千言，图片中的红色虚线就是每一列要求和的数据：

![](https://blog.images.bornforthis.cn/docs-images/sha256/27/27354da158aed67167002db863791de7a9603524e362ee68a06898e8d10d255b.png)

还需要在代码编写完成后输出如下格式：

```python
col1:12	col2:15	col3:18
```

开始思考吧，想想如何实现。

### 9.2 方法一

既然是要每一列，那么我们需要把元组 tup 中的三个子元组进行使用 zip 组合。

```python
tup = (
    (1, 2, 3),
    (4, 5, 6),
    (7, 8, 9),
)
zipdata = zip(tup[0], tup[1], tup[2])
zip_to_tuple = tuple(zipdata)
print("组合之后的结果：", zip_to_tuple)
```

输出结果如下：

```python
组合之后的结果： ((1, 4, 7), (2, 5, 8), (3, 6, 9))
```

从上面的结果可知，我们已经成功组合在一起了。现在只需要对元组 `zip_to_tuple` 里面的每个元组单独求和即可。

此时，我们就可以引入我们的求和函数 `sum()`：

```python
col1 = sum(zip_to_tuple[0])
col2 = sum(zip_to_tuple[1])
col3 = sum(zip_to_tuple[2])
```

接着在进行格式化输出即可，就可以符合题目的所有要求：

```python
print(f"col1:{col1}\tcol2:{col2}\tcol3:{col3}")
```

到此，此题全部解决。我来汇总一下代码：

```python
tup = (
    (1, 2, 3),
    (4, 5, 6),
    (7, 8, 9),
)
zipdata = zip(tup[0], tup[1], tup[2])
zip_to_tuple = tuple(zipdata)
# print("组合之后的结果：", zip_to_tuple)

col1 = sum(zip_to_tuple[0])
col2 = sum(zip_to_tuple[1])
col3 = sum(zip_to_tuple[2])

print(f"col1:{col1}\tcol2:{col2}\tcol3:{col3}")
```

输出结果如下：

```python
col1:12	col2:15	col3:18
```

### 9.3 方法二

::: tip 添加日期：2025-07-03 19:20:46

在给 Wu Jiangyue 博士上课时添加。

:::

结合 map 函数进行便捷实现，但其实两种方法都差不多，核心逻辑是一样的。

```python
tup = (
    (1, 2, 3),
    (4, 5, 6),
    (7, 8, 9),
)
zipdata = zip(tup[0], tup[1], tup[2])
zip_to_tuple = tuple(zipdata)
# print("组合之后的结果：", zip_to_tuple)

# cols = tuple(map(sum, zipdata))
cols = tuple(map(sum, zip_to_tuple))
print(f"col1:{cols[0]}\tcol2:{cols[1]}\tcol3:{cols[2]}")
```







## 10. 元组的常见内置函数表

前面主要核心点在于讲解元组，但是其实很多内置函数是相通，这里我提供一个元组常用的内置函数的表格，便于后期查阅。

| 函数                                     | 作用                                                      | 示例                                                     |
| ---------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------- |
| `len(tuple)`                             | 获取元组的长度（元素个数）                                | `len((1, 2, 3))  # 3`                                    |
| `max(tuple, key=func)`                   | 获取元组中的最大值，可指定 `key` 进行自定义比较           | `max((1, 2, 3))  # 3`                                    |
| `min(tuple, key=func)`                   | 获取元组中的最小值，可指定 `key` 进行自定义比较           | `min((1, 2, 3))  # 1`                                    |
| `sum(tuple, start=0)`                    | 计算元组中所有数值元素的和，可指定起始值                  | `sum((1, 2, 3), 10)  # 16`                               |
| `tuple(iterable)`                        | 将可迭代对象转换为元组                                    | `tuple([1, 2, 3])  # (1, 2, 3)`                          |
| `tuple.count(x)`                         | 统计元素 `x` 在元组中出现的次数                           | `(1, 2, 2, 3).count(2)  # 2`                             |
| `tuple.index(x, start, end)`             | 查找元素 `x` 在元组中的索引位置，可指定起始和结束索引     | `(1, 2, 3, 2).index(2)  # 1`                             |
| `any(tuple)`                             | 只要元组中有一个元素为真（非零、非空），返回 `True`       | `any((0, 0, 1))  # True`                                 |
| `all(tuple)`                             | 只有所有元素都为真（非零、非空）时才返回 `True`           | `all((1, 2, 3))  # True`                                 |
| `sorted(tuple, key=func, reverse=False)` | 返回排序后的元组（以列表形式返回），可指定 `key` 进行排序 | `sorted((3, 1, 2))  # [1, 2, 3]`                         |
| `reversed(tuple)`                        | 反转元组，返回迭代器                                      | `tuple(reversed((1, 2, 3)))  # (3, 2, 1)`                |
| `enumerate(tuple, start=0)`              | 返回元组中元素的索引和值的迭代器                          | `list(enumerate(('a', 'b')))  # [(0, 'a'), (1, 'b')]`    |
| `zip(tuple1, tuple2, ...)`               | 将多个元组对应位置的元素组合成新的元组                    | `tuple(zip((1, 2), ('a', 'b')))  # ((1, 'a'), (2, 'b'))` |
| `map(func, tuple)`                       | 对元组的每个元素应用 `func`，返回迭代器                   | `tuple(map(str, (1, 2, 3)))  # ('1', '2', '3')`          |
| `filter(func, tuple)`                    | 过滤元组中的元素，返回迭代器                              | `tuple(filter(lambda x: x > 1, (0, 1, 2, 3)))  # (2, 3)` |

其他相关函数：

- `hash(tuple)`：返回元组的哈希值（仅当元组内元素都是不可变类型时可哈希）

    ```python
    hash((1, 2, 3))  # 529344067295497451
    ```

- `set(tuple)`：将元组转换为集合（去重）

    ```python
    set((1, 2, 2, 3))  # {1, 2, 3}
    ```

- `frozenset(tuple)`：将元组转换为不可变集合

    ```python
    frozenset((1, 2, 3))  # frozenset({1, 2, 3})
    ```

bingo！恭喜你完成元组的学习！

























