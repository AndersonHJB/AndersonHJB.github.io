---
title: 08-集合
icon: yongyan
date: 2024-01-23 07:49:34
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

在前面的章节中，我们已经学习了字典的基本用法。接下来，我们将介绍另一种非常实用的数据结构——集合（set）。集合是 Python 内置的数据结构之一，主要特点是**无序**且**不重复**。这使得集合非常适合用于去重以及执行数学中的集合运算，如交集、并集、差集等。下面我们就一步步来学习集合的创建和常用操作。

## 1. 如何创建集合？

集合的创建主要有两种方式，后续可以看具体情况选择使用。

### 1.1 直接使用花括号 `{}` 创建集合

当我们知道集合中的元素时，可以直接用花括号来定义集合。需要注意的是，集合中的元素是**无序**的，每次打印时显示的顺序可能不同。

```python
set1 = {1, 2, 4, 5, 8}
print(set1)  # 输出可能为 {1, 2, 4, 5, 8}，但顺序并不固定
```

### 1.2 使用 `set()` 函数创建集合

如果我们有一个列表或其他可迭代对象，想要将其转换为集合，可以使用 `set()` 函数。这样做不仅可以创建集合，还能自动去除重复的元素。

```python
set1 = set([1, 2, 4, 1, 2, 8, 5, 5])
set2 = set((1, 9, 3, 2, 5))

print(set1)  # 输出: {1, 2, 4, 5, 8}
print(set2)  # 输出: {1, 2, 3, 5, 9}
```

**注意**：传入 `set()` 的必须是一个可迭代对象，所以需要使用 `[]` 来包裹多个元素。你可以理解为，`set()` 函数只能接收一个参数，接收多个参数就会报错。

```python
set1 = set(1, 2, 4, 1, 2, 8, 5, 5)
```

上面的代码就是传入多个参数，运行会报错：

```python
Traceback (most recent call last):
  File "/Users/huangjiabao/bornforthis.cn/demo.py", line 1, in <module>
    set1 = set(1, 2, 4, 1, 2, 8, 5, 5)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: set expected at most 1 argument, got 8
```

**注意**：在之前的代码中，这个代码 `set([1, 2, 4, 1, 2, 8, 5, 5])` 只有一个列表参数，不是多个参数！



## 2. 集合的交集

~~交集（Intersection）：求两个集合中都出现了的元素。用 `&` 运算符实现。~~

**交集（Intersection）**：交集操作返回两个集合中**都出现**的元素，Python 中集合的交集使用 `&` 运算符来实现。

```python
set1 = {1, 2, 4, 5, 8}
set2 = {1, 2, 3, 5, 9}
print(set1 & set2)


# ---output---
{1, 2, 5}
```

**注意**：交集运算会返回一个全新的集合，其中的元素顺序可能与原始集合不同，因为集合本身是无序的。

举个实际例子：你可以理解成你的人生和女神（男神）的人生，哪些部分是共同拥有的。例如，你和你的心仪对象各自经历了一段难忘的旅行或共同经历了某个重要时刻，这些相同的经历就构成了你们人生的交集。

```python
# 定义两个集合，分别表示你的人生经历和心仪对象的人生经历
your_life = {"上学", "第一次旅行", "大学生活", "毕业"}
crush_life = {"第一次旅行", "创业", "毕业", "参加马拉松"}

# 使用 & 运算符计算交集，得到共同经历
common_experiences = your_life & crush_life
print(common_experiences)

# ---output---
{'第一次旅行', '毕业'}
```



## 3. 集合的并集

~~并集（Union）：求两个集合中共有的元素。用 `|` 运算符实现。~~

**并集（Union）**：并集操作返回两个集合中**所有不同**的元素，我们可以使用 `|` 运算符来求并集。先看个简单的示例：

```python
set1 = {1, 2, 4, 5, 8}
set2 = {1, 2, 3, 5, 9}
print(set1 | set2)

# ---output---
{1, 2, 3, 4, 5, 8, 9}
```

举个实际例子：你可以理解成面前有两筐花生，每一筐里装着不同口味的花生。比如：

- 第一筐有：生花生、盐焗花生、蜂蜜花生
- 第二筐有：盐焗花生、香辣花生、烤花生

这里注意，盐焗花生在两筐中都出现了。当你把这两筐花生全部倒在一起，再去掉重复的种类时，最终你会得到所有不同口味的花生。这个过程就是集合中的 **并集（Union）** 操作。

用代码表示如下：

```python
basket1 = {"生花生", "盐焗花生", "蜂蜜花生"}
basket2 = {"盐焗花生", "香辣花生", "烤花生"}
all_peanuts = basket1 | basket2  # 使用 | 运算符计算并集
print(all_peanuts)


# ---output---
{'生花生', '盐焗花生', '蜂蜜花生', '香辣花生', '烤花生'}
```



## 4. 集合的差集

~~差集（Difference）：求 set1 和 set2 的差集时，会返回在 set1 中但不在 set2 中的元素。用 `-` 运算符实现。~~

**差集（Difference）**：差集操作返回存在于第一个集合中，但不存在于第二个集合中的元素。用 `-` 运算符实现差集运算。

```python
set1 = {1, 2, 4, 5, 8}
set2 = {1, 2, 3, 5, 9}
print(set1 - set2)

# ---output---
{8, 4}
```

**提示**：集合差集运算通常用于过滤掉在某一集合中存在的元素。

举个实际的例子：

假设你面前有两筐花生，第一筐中的花生种类你都很喜欢，而第二筐中也有一些花生种类。如果你只想挑选出第一筐中那些第二筐没有出现的独特口味，这就是差集的效果。也类似在淘宝买东西，你要比较各种不同型号的产品。

```python
basket1 = {"生花生", "盐焗花生", "蜂蜜花生"}
basket2 = {"盐焗花生", "香辣花生", "烤花生"}

# 使用 - 运算符计算差集，得到只在 basket1 中存在的花生种类
unique_to_basket1 = basket1 - basket2
print(unique_to_basket1)

# ---output---
{'生花生', '蜂蜜花生'}
```





## 5. 对称差集

~~对称差集（Sysmetric Difference）：求 set1 和 set2 的对称差集时，会返回在 set1 中或在 set2 中，但不同时存在于两个集合中的元素。用 `^` 运算符实现。~~

**对称差集（Symmetric Difference）**：对称差集返回那些**只存在于其中一个集合中**的元素（即不同时出现在两个集合中的元素）。使用 `^` 运算符来求对称差集。

```python
set1 = {1, 2, 4, 5, 8}
set2 = {1, 2, 3, 5, 9}
print(set1 ^ set2)


# ---output---
{3, 4, 8, 9}
```

举个实际例子：~~你可以理解为，需要找到各集合中的最忠诚的，而不是墙头草各个集合都出现的。~~ 你可以将它理解为在两个群体中找到最忠诚的成员——那些只属于一个群体的，而不是那些左右逢源、在两个群体都出现的“墙头草”。

举个实际例子，假设你管理两个粉丝团，分别代表偶像 A 和偶像 B。忠实的粉丝往往只支持其中一个偶像，而那些既出现在偶像A的粉丝团又出现在偶像B的粉丝团的人，就可以看作是不够专一的“墙头草”。我们希望找出的正是那些忠实粉丝。

```python
# 偶像A的粉丝团
fans_A = {"张三", "李四", "王五", "赵六"}

# 偶像B的粉丝团
fans_B = {"王五", "赵六", "孙七", "周八"}

# 使用 ^ 运算符计算对称差集，
# 得到只在一个粉丝团中出现的忠实粉丝，而排除了那些同时出现在两个粉丝团中的“墙头草”
loyal_fans = fans_A ^ fans_B
print(loyal_fans)


# ---output---
{'张三', '李四', '孙七', '周八'}
```

在这个例子中，"张三"和"李四"只在偶像 A 的粉丝团中，而"孙七"和"周八"只在偶像 B 的粉丝团中，因此它们构成了对称差集的结果，代表了最忠实的粉丝。



## 6. 拓展思考：对称差集的另一种实现方式

对称差集可以用其他三种集合操作来实现吗？如何实现？对称差集的含义就是不要有墙头草，那就把两个集合汇总在一起（并集）再用并集减去墙头草（差集）即可得到对称差集。

具体流程如下：

1. 求两个集合的并集（包含所有不同的元素）；
2. 求它们的交集（即共同存在的元素）；
3. 用并集减去交集，就得到了对称差集。

```python
set1 = {1, 2, 4, 5, 8}
set2 = {1, 2, 3, 5, 9}
U = set1 | set2  # 并集
N = set1 & set2  # 交集

# 对称差集 = 并集 - 交集
print(U - N)

# ---output---
{8, 9, 3, 4}
```

上面的实现不是唯一方法，要记住：代码解决问题都是有多种实现方法，你可以想想你自己会如何实现。

**小结**：这种方法充分展示了集合运算之间的关系，有助于理解集合的数学原理。

## 7. 如何创建空集合

我们之前可以创建空列表、空字典、空字符串等，那么空集合该如何创建？你有可能第一时间想到的是，直接使用花括号创建：

```python
set1 = {}
```

可是上面这么创建正确吗？实现的类型到底是什么？可以使用 `.add()` 看看能不能操作：

```python
set1 = {}
set1.add('book')
```

运行之后会报错：

```python
Traceback (most recent call last):
  File "/Users/huangjiabao/bornforthis.cn/demo.py", line 2, in <module>
    set1.add('book')
    ^^^^^^^^
AttributeError: 'dict' object has no attribute 'add'
```

从报错可知：字典没有 add 函数，那么可知直接使用 `{}` 会创建一个空字典，而非集合。还有什么可以直观的知道，创建的变量是什么类型呢？——`type()`。

```python
set1 = {}
print(type(set1))

# ---output---
<class 'dict'>
```

我们回到一开始的问题：要创建一个空集合，该怎么创建呢？——必须使用 `set()`：

```python
set1 = set()
print(set1)  # 输出: set()
```



## 8. 集合常见的方法

### 8.1 使用 `.add()` 方法添加集合元素

集合是可变的数据结构，可以通过 `.add()` 方法在集合中添加新元素。若添加的元素已经存在，则集合不发生变化。

```python
set1 = {1, 2, 4, 5, 8}
set1.add(10)
print(set1)

# ---output---
{1, 2, 4, 5, 8, 10}
```

### 8.2 使用 `.update(iterable)` 方法批量添加元素

将其他可迭代对象（如列表、集合、元组等）中的所有元素添加到原集合中。

**特点**：

- 自动去重：如果目标集合中已经存在某个元素，则不会重复添加。
- 操作原地修改，即修改后的结果直接保存在原集合中，而不返回新的集合。

例如：

```python
s = {1, 2, 3}
s.update([4, 5, 6])  
print(s)

# ---output---
{1, 2, 3, 4, 5, 6}
```

在上面的例子中，集合 `s` 最初包含 1, 2, 3，通过 `update()` 将列表 `[3, 4, 5, 6]` 的元素加入后，重复的 3 不会重复出现，最终得到 `{1, 2, 3, 4, 5, 6}`。



### 8.3 使用 `.remove()` 方法移除集合元素

`.remove()` 方法可以从集合中移除指定元素。如果该元素不存在，则会抛出 `KeyError` 异常，因此在使用前可以先判断元素是否存在，或者使用 `discard()` 方法以避免异常。

```python
set1 = {1, 2, 3, 4, 5}
set1.remove(2)
print(set1)

# ---output---
{1, 3, 4, 5}
```

如果不确定元素是否存在于集合中，建议使用 `discard()` 方法，它在移除不存在的元素时不会抛出异常。

### 8.4 使用 `.discard()` 方法移除集合元素

在 Python 的集合操作中，`.discard()` 方法用于从集合中移除指定元素。如果元素存在，就将其删除；如果元素不存在，则不会报错，也不会对集合产生任何影响。这一点与 `.remove()` 方法形成了鲜明对比，后者在删除不存在的元素时会抛出 `KeyError` 异常。

**主要特点**：

- **无异常风险**：使用 `.discard()` 时，不必担心删除一个不存在的元素而导致程序中断，非常适合在不确定元素是否存在时使用。
- **原地修改**：调用 `.discard()` 方法会直接修改原集合，不会返回一个新的集合。
- **无返回值**：该方法返回值始终为 `None`，它的作用仅仅是对集合进行修改。

```python
# 示例 1：删除存在的元素
s = {1, 2, 3, 4}
s.discard(3)
print(s)  # 输出: {1, 2, 4}

# 示例 2：尝试删除一个不存在的元素，不会报错
s.discard(5)
print(s)  # 输出依然为: {1, 2, 4}
```

**使用场景**：

- **安全删除**：当你不确定集合中是否包含某个元素，但又需要尝试删除它时，使用 `.discard()` 能够避免额外的异常处理代码。
- **清理数据**：在数据处理中，常常需要去除重复或不需要的元素，`.discard()` 可以让代码更加简洁、健壮。

总的来说，`.discard()` 提供了一种更加安全和灵活的方式来删除集合中的元素，是集合操作中非常实用的方法。

### 8.5 使用 `.pop()` 方法随机删除元素

随机删除并返回集合中的一个元素。如果集合为空，则抛出 `KeyError`。实际上不是很推荐，因为集合是无序的，我们无法确定会删除哪个数据：

```python
my_set = {1, 2, 3}
item = my_set.pop()
print(item)     # 随机输出一个元素，如 1
print(my_set)   # 输出集合剩余元素
```

#### 8.5.1 一些 `.pop()` 使用场景

下面代码不一定现在要全部理解，可以学完后面的循环后再来看这部分，场景是为了让你在未来更好的结合实际场景去选择使用。

##### 8.5.1.1 场景一：随机提取并移除集合中的元素

当你想从集合中随机抽取元素进行后续处理，并确保元素不会被重复使用时，就可以用 `pop()`。例如：

```python
tasks = {'任务A', '任务B', '任务C'}

while tasks:
    task = tasks.pop()
    print(f"正在处理：{task}")
```

**输出示例（顺序随机）：**

```python
正在处理：任务A
正在处理：任务B
正在处理：任务C
```

这种情况适用于随机化处理任务的场景，如随机抽奖、随机任务分配等。

##### 8.5.1.2 场景二：逐一处理并清空集合内元素

有时，你可能需要逐个处理并从集合中删除元素，而不关心具体的处理顺序，直到集合为空时：

```python
tasks = {"吃饭", "睡觉", "打代码", "看电影"}

while tasks:
    task = tasks.pop()
    print(f"正在处理任务: {task}")

print(f"所有任务处理完毕: {tasks}")  # tasks 最终为空集合 set()
```

这种用法尤其适合数据处理、清理临时数据、去重等场景。

##### 8.5.1.3 场景三：用于元素去重后的随机选择

如果你想要在去重后的元素集合里随机选择一项且不重复选取，`pop()` 就是一种便利的实现：

```python
students = ['张三', '李四', '王五', '张三', '李四']

unique_students = set(students)
random_student = unique_students.pop()

print(f"随机选中的学生：{random_student}")
```

##### 8.5.1.4 场景四：随机抽取不重复的元素（抽奖、随机选择）

例如：从集合中随机选取若干元素且不重复。

```python
import random

names = {"Alice", "Bob", "Charlie", "David", "Eva"}

# 假设需要随机抽取3人作为幸运观众
selected = set()
while len(selected) < 3:
    selected.add(names.pop())

print(f"中奖观众：{selected}")
# names 中元素被抽取后减少
print(f"剩余观众：{names}")
```

**注意**：实际中，用集合的 `pop()` 方法随机抽取元素虽然可行，但无法控制抽取的随机性，更推荐用标准库 `random.sample()`:

```python
import random

names = {"Alice", "Bob", "Charlie", "David", "Eva"}
selected = set(random.sample(list(names), 3))

print(f"中奖观众：{selected}")
```



#### 8.5.2 注意点

1. `pop()` 会修改原集合。
2. 集合无序性决定了`pop()`随机性，因此无法预知哪个元素会被删除。
3. 需要按特定顺序删除元素时，请不要使用集合的 `pop()`，而应选择列表或其它有序结构。
4. 如果集合为空，在调用 `pop()` 会触发`KeyError`，要提前判断。因此在使用时，通常需要提前检查集合是否非空，或者用 `try-except` 捕获异常。

```python
items = set()

try:
    item = items.pop()
except KeyError:
    print("集合为空，无法执行 pop 操作。")

```

### 8.6 `.clear()` 清空集合

清空集合中所有的元素，变成一个空集合。

```python
s = {1, 2, 3}
s.clear()  
print(s)


# ---output---
set()
```

## 9. 集合间的数学运算（返回新集合）

这里有点重复讲解了其实，前面其实已经讲解的集合的交集、并集、差集、对称差集。但有些人有时会喜欢使用集合的操作函数来实现交集、并集、差集。这里也稍微讲解一下，原理和之前讲的一样。

这些方法主要用于集合之间的关系运算，返回新的集合或修改原集合。

### 9.1 并集 `.union()` 或运算符 `|`

返回一个新集合，包含所有参与运算集合中的元素（并集）。

```python
a = {1, 2, 3}
b = {3, 4, 5}
c = a.union(b)  # 等价 c = a | b
print(c)

# ---output---
{1, 2, 3, 4, 5
```

### 9.2 交集 `.intersection()` 或运算符 `&`

返回多个集合的交集，即所有集合共有的元素。

```python
a = {1, 2, 3}
b = {2, 3, 4}
c = a.intersection(b)  # 等价 c = a & b
print(c)


# ---output---
{2, 3}
```

### 9.3 差集 `.difference()` 或运算符 `-`

返回集合与其它集合的差集，即只在该集合中存在而不在其它集合中的元素。

```python
a = {1, 2, 3, 4}
b = {3, 4, 5}
c = a.difference(b)  # 等价 c = a - b
print(c)


# ---output---
{1, 2}
```

### 9.4 对称差集 `.symmetric_difference()` 或运算符 `^`

返回两个集合的对称差集，即那些只出现在其中一个集合中的元素。

```python
a = {1, 2, 3}
b = {3, 4, 5}
c = a.symmetric_difference(b)  # 等价 c = a ^ b
print(c)


# ---output---
{1, 2, 4, 5}
```

## 10. 集合关系判断

### 10.1 使用 `.issubset()` 判断子集

判断当前集合是否为其他集合的子集，即集合中所有元素是否都包含在另一个集合中。

```python
a = {1, 2}
b = {1, 2, 3}
result = a.issubset(b)
print(result)

# ---output---
True
```

### 10.2 使用 `.issuperset()` 判断超集

判断当前集合是否为其他集合的超集，即是否包含另一个集合的所有元素。

```python
a = {1, 2, 3}
b = {1, 2}
result = a.issuperset(b)
print(result)

# ---output---
True
```

### 10.3 使用 `isdisjoint()` 判断是否有交集

判断两个集合是否没有交集（即交集为空），没有交集则为 False。

```python
a = {1, 2}
b = {3, 4}
result = a.isdisjoint(b)  # 集合 a 与 集合 b 没有交集，返回 True
print(result)

# ---output---
True
```



## 11. 集合运算函数（修改原集合）

Python 中集合提供了几种修改原集合的运算函数，这些函数直接改变调用它们的集合，而不是返回一个新的集合。这种方式可以提高内存使用效率，特别是在处理大型数据集时。下面详细介绍这几种方法，但就算没有这几个函数，我们也可以以来原生的集合操作方法实现。

### 11.1 intersection_update()

**功能**：用来更新原集合，使其只保留与指定集合（或可迭代对象）中相同的元素（即求交集）。

**特点**：

- 操作原地修改：原集合中只剩下与另一个集合共有的元素。
- 如果没有共同元素，原集合最终会变成空集合。

**示例代码**：

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
set1.intersection_update(set2)
print(set1)  


# ---output---
{3, 4}
```

在这个例子中，只有 3 和 4 在两个集合中都有，因此 `set1` 被更新为 `{3, 4}`。

### 11.2 difference_update()

**功能**：更新原集合，移除与指定集合中共有的元素，只保留原集合中独有的元素（即求差集）。

**特点**：

- 操作原地修改：从原集合中删除与另一个集合中重复的元素。
- 如果原集合的所有元素都在指定集合中，那么最终结果为空集合。

**示例代码**：

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
set1.difference_update(set2)
print(set1) 


# ---output---
{1, 2}
```

这里 `set1` 中的 3 和 4 被删除，只保留 `{1, 2}`。

### 11.3 symmetric_difference_update()

**功能**：更新原集合，保留在两个集合中只出现一次的元素，即删除两个集合中共同存在的元素（即求对称差集）。

**特点**：

- 操作原地修改：原集合被更新为两个集合中不重叠的部分。
- 如果两个集合完全相同，那么更新后原集合会变为空集合。
- 如果两个集合没有交集，那么更新结果和 `update()` 类似，即合并两个集合。

**示例代码**：

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
set1.symmetric_difference_update(set2)
print(set1)

# ---output---
{1, 2, 5, 6}
```

在这个例子中，共同元素 3 和 4 被移除，留下 1、2（仅在 `set1` 中）和 5、6（仅在 `set2` 中）。

### 11.4 小结

- **update()**：实现集合的并集，添加新元素到原集合中。
- **intersection_update()**：实现集合的交集，保留原集合中与另一集合共有的元素。
- **difference_update()**：实现集合的差集，从原集合中去除与另一集合中相同的元素。
- **symmetric_difference_update()**：实现集合的对称差集，删除两个集合中共同存在的元素，只保留各自独有的部分。

这些修改原集合的操作在需要就地更新集合数据时非常有用，避免了额外创建新集合的开销，同时也使代码更加直观和易读。



## 10. 寻找不重复的单词数

### 10.1 题目描述

编写一个程序，接收用户输入的英文句子，计算并输出该句子中不重复的单词数量。程序应忽略单词的大小写，并且只考虑字母和数字，忽略标点符号和空格。

### 10.2 输入描述

用户输入的字符串，其中可能包含多个单词、空格、标点符号以及大小写字母。

### 10.3 输出描述

一个整数，表示该句子中不重复的单词数量。

### 10.4 程序操作示例

#### 10.4.1 示例 1

**输入：**

```
请输入一个英文句子: The quick brown fox jumps over the lazy dog. . . , !
```

**输出：**

```
8
```

**解释：**

去掉重复的单词后，剩下的单词有：`"the"`, `"quick"`, `"brown"`, `"fox"`, `"jumps"`, `"over"`, `"lazy"`, `"dog"`，共8个。

#### 10.4.2 示例 2

**输入：**

```
请输入一个英文句子: Hello, hello! How are you? Are you doing well? ? ?
```

**输出：**

```
6
```

**解释：**

去掉重复的单词后，剩下的单词有：`"hello"`, `"how"`, `"are"`, `"you"`, `"doing"`, `"well"`，共6个。



### 10.6 思考

那么上面的程序如何实现呢？我们来一步步思考分析一下：

1. **第一步**：大问题是获取用户输入并计算不重复的单词数，忽略大小写、标点符号；

2. **第二步**：获取用户输入很简单，直接实现即可：

    ```python
    # 获取用户输入的字符串
    sentence = input("请输入一个英文句子: ")
    ```

3. **第三步**：需要忽略大小写，改如何忽略？首先，先要了解 `input()` 函数会得到什么结果？——字符串类型。那么字符串有啥忽略大小写的吗？——直接使用 `.upper()` 使用户输入的字符串全部大写，或者使用 `.lower()` 使之全部变成小写。这里选择 `.upper()`、`.lower()` 都可以：

    ```python
    # 转换成小写
    sentence_lower = sentence.lower()
    ```

4. **第四步**：如何去掉多余的标点符号呢？字符串本身不能被改变，只能创建一个新的字符串，那么有什么可以去掉字符串中目标标点符号并返回去掉之后的字符串呢？——使用 `.replace()` 函数即可。

    ```python
    # 移除标点符号，并将字符串转换为小写
    clean_sentence = sentence_lower.replace(",", "")
    clean_sentence = clean_sentence.replace(".", "")
    clean_sentence = clean_sentence.replace("!", "")
    clean_sentence = clean_sentence.replace("?", "")
    clean_sentence = clean_sentence.replace(";", "")
    clean_sentence = clean_sentence.replace(":", "")
    clean_sentence = clean_sentence.replace("-", "")
    ```

    因为 `.replace()` 替换之后返回的也是字符串，上面的代码可以直接写成一行：

    ```python
    clean_sentence = sentence_lower.replace(",", "").replace(".", "").replace("!", "").replace("?", "").replace(";", "").replace(":", "").replace("-", "")
    ```

5. **第五步**：要统计单词数量，肯定是使用 `len()` 函数，但是直接检查字符串的长度并不是单词数量。要检测单词数量，需要先把字符串进行拆分得到每个单词。如何拆分呢？我们观察可知英文语句中，每个单词都是以空格间隔，把握这个规律我们可以想到使用字符串的 `.split()` 函数进行分割。

    ```python
    # 将句子分割成单词列表
    words = clean_sentence.split()  # 默认以空格分割
    ```

    思考🤔：这个地方 split 里面可以写成这样吗：`clean_sentence.split(' ')`。答案是不行的，或者准确来说不推荐。如果出现连续的被分割的空格，会出现如下问题：

    ```python
    string = "Hello    Bornforthis! Welcome   to    bornforthis.cn"
    print(string.split(' '))
    
    
    # ---output---
    ['Hello', '', '', '', 'Bornforthis!', 'Welcome', '', '', 'to', '', '', '', 'bornforthis.cn']
    ```

    从上面的输出结果可知，列表中会出现多个空字符串。这样才统计单词数时出现数量问题，并且空字符串不好去除。就算转换成集合还是会保留一个空字符：

    ```python
    string = "Hello    Bornforthis! Welcome   to    bornforthis.cn"
    print(set(string.split(' ')))
    
    # ---output---
    {'', 'Hello', 'to', 'Bornforthis!', 'Welcome', 'bornforthis.cn'}
    ```

6. **第六步**：接下来在统计单词数之前，需要去掉重复的单词。这个不用想，肯定直接利用集合的互异性来实现去重：

    ```python
    # 使用集合移除重复的单词
    unique_words = set(words)
    ```

7. **第七步**：使用 `len()` 解决即可

    ```python
    # 输出不重复单词的数量
    print(len(unique_words))
    ```

8. **完整代码**

    ```python
    # 获取用户输入的字符串
    sentence = input("请输入一个英文句子: ")
    
    # 移除标点符号，并将字符串转换为小写
    sentence = sentence.replace(",", "").replace(".", "").replace("!", "").replace("?", "").replace(";", "").replace(":", "").replace("-", "").lower()
    
    # 将句子分割成单词列表
    words = sentence.split()  # 思考🤔：这个地方 split 里面可以写成这样吗：sentence.split(' ')
    
    # 使用集合移除重复的单词
    unique_words = set(words)
    
    # 输出不重复单词的数量
    print(len(unique_words))
    ```

思考部分来了，上面如果在分割每个单词时，非要写成：`clean_sentence.split(' ')` 你改如何正确统计出现的不重复单词呢？

上面也带你分析了，如果这么写在转换集合去重时还会保留一个空字符串，那么该怎么办？

很简单，两种比较直观简单的方法：

1. **方法一**：把多余的空字符先使用 `len()` 计算在内，计算完成之后 `-1` 即可；
2. **方法二**：使用集合的方法去掉特定的空字符串（`.remove()`）

直接给你代码，你自己要多思考思考，再看我提供的代码。

**方法一**：

```python
# 获取用户输入的字符串
sentence = input("请输入一个英文句子: ")

# 移除标点符号，并将字符串转换为小写
sentence = sentence.replace(",", "").replace(".", "").replace("!", "").replace("?", "").replace(";", "").replace(":", "").replace("-", "").lower()

# 将句子分割成单词列表
words = sentence.split(' ')

# 使用集合移除重复的单词
unique_words = set(words)

# 输出不重复单词的数量
print(len(unique_words) - 1)
```

**方法二**：

```python
# 获取用户输入的字符串
sentence = input("请输入一个英文句子: ")

# 移除标点符号，并将字符串转换为小写
sentence = sentence.replace(",", "").replace(".", "").replace("!", "").replace("?", "").replace(";", "").replace(":", "").replace("-", "").lower()

# 将句子分割成单词列表
words = sentence.split(' ')

# 使用集合移除重复的单词
unique_words = set(words)
unique_words.remove('')

# 输出不重复单词的数量
print(len(unique_words))
```







## 11. 对集合进行合并

**描述**：获取用户输入两个序列，转换成集合后，输出：只存在于集合 `A` 而不在 `B` 中的元素集合。

**示例输入**：

```python
Enter set1: 1, 2, 3, 4, 5
Enter set2: 4, 5, 6, 7
```

**示例输出**：
```python
{1, 2, 3}
```

**答案：**

```python
# Step1: 获取用户输入
s1 = input("Enter set1: ")
s2 = input("Enter set2: ")

# Step2: 去掉多余的空格
s1 = s1.replace(' ', '')
s2 = s2.replace(' ', '')

# Step3: 以逗号分割
set1 = s1.split(',')
set2 = s2.split(',')

# Step4: 使用 map 批量转换成数字型并转换回集合
set1 = set(map(int, set1))
set2 = set(map(int, set2))

# Step5: 计算只存在于集合A而不在B中的元素
result = set1 - set2

# Step6: 输出结果
print(result)


# ---output---
Enter set1: 1, 2, 3, 4, 5
Enter set2: 4, 5, 6, 7
{1, 2, 3}
```



## 12. 找寻集合的最大值与最小值

**描述**：给定一个集合 `numbers`，返回一个元组，包含集合中最大和最小的元素。

**示例输入**：
```python
numbers = {2, 5, 9, 1, 7}
```

**示例输出**：

```python
(1, 9)
```

**答案：**

```python
# 示例
numbers = {2, 5, 9, 1, 7}

# 使用内置的 min 和 max 函数找到集合中的最小值和最大值
result_tup = (min(numbers), max(numbers))
print(result_tup)

# ---output---
(1, 9)
```

还有很多种其它方法，比如先排序后操作，自行思考尝试。



















