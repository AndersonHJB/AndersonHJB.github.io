---
title: 04-字典内容补充
icon: python
date: 2025-05-06 10:51:24
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: false
sidebarIcon: true
comment: true

backToTop: true
toc: true
watermark:
  width: 200
  height: 200
  content: 《编程启蒙：思维与代码》作者：黄家宝
  opacity: 0.5
---

## 1. `.update()`：批量更新字典

::: details 点击展开阅读

原本对于字典添加数据，只能一次操作一个键值对添加：

```python
student = {'name': '李雷', 'age': 19}

student["gender"] = "male"
student["class"] = "class1"
print(student)
```

只能像上面的代码一样，一次添加一组键值对，不能批量。（这里回应“杠精”：先不考虑循环添加情况）。

所以 `update()` 方法应运而生， 这个方法可以把另一个字典的内容**合并**进当前字典，已有的键会被覆盖，新键会被添加。

## 1. 方法一：用另一个字典更新

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

## 2. 方法二：使用关键字参数更新

你也可以使用关键字参数来更新字典，代码示例如下。

```python
dict1 = {'name': '李雷', 'age': 19}
dict1.update(name="AI悦创", age=28)
print(dict1)

# ---output---
{'name': 'AI悦创', 'age': 28}
```

这里，使用关键字参数 name 和 age 直接更新了 dict1。

## 3. 方法三：使用键值对组成的可迭代对象更新

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

## 4. 方法四：使用 zip() 创建可更新的数据结构

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

## 5. 注意事项

- 当使用 `update()` 方法时，如果键已存在，则其值将被新的值覆盖。
- 如果键不存在，则将添加新的键值对。
- `update()` 方法不返回任何值（即返回 `None`），是直接修改字典本身。
- 当使用 `update()` 方法时，如果键的值是一个可变数据类型（如列表或字典），需要注意，如果通过 `update()` 方法修改了这个键的值，原来对应的值也会被更改，除非进行深拷贝。（这个会在后面讲解）

这种方法特别有用，在你需要合并两个字典或者在已有字典中添加新的信息时。例如，当你处理来自不同来源的数据并希望将它们合并为一个统一的数据结构时，`update()` 方法非常方便。

## 6. 应用场景

### 6.1 场景 1：**合并配置** —— 覆盖默认设置

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

### 6.2 场景 2：**数据聚合** —— 汇总多个来源的数据

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

### 6.3 场景 3：更新用户个人信息表单

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

### 6.4 场景 4：汇总多个购物车

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

#### 6.5 场景 5：从表格或数据库中加载数据

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

:::







## 2. 字典的深浅拷贝

::: details 点击展开阅读

## 1. 常规赋值的问题

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

## 2. 浅拷贝（Shallow Copy）

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

## 3. 深拷贝（Deep Copy）

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

## 4. 深浅拷贝总结

- **浅拷贝**：复制对象，但不复制对象中的嵌套对象。修改浅拷贝的嵌套对象会影响到原始对象。（只复制第一层数据，嵌套数据引用相同。）

- **深拷贝**：递归复制对象及其所有嵌套对象，修改深拷贝的任何部分都不会影响原始对象。（完全复制，包括所有嵌套数据，彼此互不影响。）

学习时建议多实践，帮助理解不同拷贝方式的区别。

:::

## 2. 字典的练习

::: details 点击展开阅读

## 1. 为学生成绩排序

### 1.1 题目描述

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

### 1.2 思路提示

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

## 2. 找到成绩最高的学生

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

## 3. 找到人口最少的城市

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

## 4. 移除字典数据

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



:::