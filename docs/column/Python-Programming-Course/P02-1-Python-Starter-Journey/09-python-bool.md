---
title: 09-布尔型
icon: yongyan
date: 2024-01-25 07:05:07
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

## 1. 布尔值

~~意义：表示判断中的是与否。一般用于条件测试中。~~

布尔值（Boolean）是编程中用于表示“真”（是）与“假”（否）的基本数据类型。在 Python 中，布尔值主要用在条件判断、流程控制等场景中，帮助程序决定执行哪些代码块。

~~下面，我们也适用 IPython 工具来测试编写。如果你不习惯使用 IPython，你也可以使用原本的代码编辑器来编辑。~~

下面给出一个贴近日常场景、同时展示布尔值基本用法的代码示例，通过温度和天气条件判断是否适合游泳：

```python
temperature = 30
is_hot = temperature > 25
print(f"Is it hot? {is_hot}")

weather = "sunny"
is_sunny = (weather == "sunny")
print(f"Is it sunny? {is_sunny}")

should_go_swimming = is_hot and is_sunny
print(f"Should go swimming? {should_go_swimming}")

# ---output---
Is it hot? True
Is it sunny? True
Should go swimming? True
```

也可以直接给变量赋值布尔值：

```python
condition = True
print(condition)

# ---output---
True
```



## 2. 布尔运算中的空

看下图：

![](https://blog.images.bornforthis.cn/docs-images/sha256/9a/9aeaa437d6b7b33f24fab9cab36493c7e6a9dc3f76f0b32aeabe3dc309a635ad.png)

如果是当作正常的变量值使用时，虽然数据是空的，但都是原有的数据类型：

```python
string = ''
dictionary = {}
lst = []
tup = ()
set_1 = set()

print(f"空字符串: '{string}', type: {type(string)}")
print(f"空字典: {dictionary}, type: {type(dictionary)}")
print(f"空列表: {lst}, type: {type(lst)}")
print(f"空元组: {tup}, type: {type(tup)}")
print(f"空集合: {set_1}, type: {type(set_1)}")


# ---output---
空字符串: '', type: <class 'str'>
空字典: {}, type: <class 'dict'>
空列表: [], type: <class 'list'>
空元组: (), type: <class 'tuple'>
空集合: set(), type: <class 'set'>
```

只有在布尔运算或者强制转换中，空序列等都会得到 False：

```python
# 空数据结构通过 bool() 转换后的类型和值
string = bool('')
print(f"'' → type: {type(string)}, value: {string}")

dictionary = bool({})
print(f"{{}} → type: {type(dictionary)}, value: {dictionary}")

lst = bool([])
print(f"[] → type: {type(lst)}, value: {lst}")

tup = bool(())
print(f"() → type: {type(tup)}, value: {tup}")

set_1 = bool(set())
print(f"set() → type: {type(set_1)}, value: {set_1}")

# ---output---
'' → type: <class 'bool'>, value: False
{} → type: <class 'bool'>, value: False
[] → type: <class 'bool'>, value: False
() → type: <class 'bool'>, value: False
set() → type: <class 'bool'>, value: False
```





## 3. 逻辑运算符

~~逻辑运算符：用于检测两个或两个以上的条件是否满足。~~

逻辑运算符用于组合多个条件表达式，检测两个或两个以上的条件是否满足，并根据逻辑关系返回一个布尔值。它们在条件测试中非常有用，能够让你编写更复杂的判断逻辑。

注意：逻辑运算符只存在于布尔类型中。

### 3.1 常见逻辑运算符

| 逻辑运算符        | 描述                                                         |
| ----------------- | ------------------------------------------------------------ |
| `and`（逻辑“与”） | 当运算符两边的条件都为 `True` 时，整个表达式返回 `True`；如果任一条件为 `False`，则返回 `False`。此外，`and` 运算符具有短路求值特性（见下文）。 |
| `or`（逻辑“或”）  | 当运算符两边至少有一个条件为 `True` 时，整个表达式返回 `True`；只有当所有条件都为 `False` 时，才返回 `False`。同样，`or` 也具有短路求值特性。 |
| `not`（逻辑“非”） | 用于反转运算符对象的状态，将 `True` 变为 `False`，将 `False` 变为 `True`。 |

### 3.2 逻辑表达式实例与求值解析

#### 3.2.1 示例 1：表达式 `not False and True and False`

```python
result = not False and True and False
print(result)
```

**讲解：**

1. **求值顺序**：`not` 的优先级最高，因此先计算 `not False`，结果为 `True`。（你得先有结果，才能进行下一步）
2. 接下来表达式变为：`True and True and False`。
3. 按照从左到右计算：
    - `True and True` 得到 `True`
    - 然后 `True and False` 得到 `False`
4. **最终结果**：`False`

#### 3.2.2 示例 2：表达式 `not True or False and True`

```python
result = not True or False and True
print(result)
```

**讲解：**

1. **先计算 `not True`**，结果为 `False`。
2. 表达式此时变为：`False or False and True`。
3. **接下来计算 `and`**（优先级高于 `or`）：`False and True` 得到 `False`。
4. 最后计算 `or`：`False or False` 得到 `False`。
5. **最终结果**：`False`

#### 3.2.3 示例 3：表达式 `(not False and True) or False`

```python
result = (not False and True) or False
print(result)
```

**讲解：**

1. 括号内先计算：`not False` 得到 `True`。
2. 括号内继续：`True and True` 得到 `True`。
3. 整个表达式变为：`True or False`，结果为 `True`。
4. **最终结果**：`True`

#### 3.2.4 示例 4：表达式 `not (False or False) and True`

```python
result = not (False or False) and True
print(result)
```

**讲解：**

1. **先计算括号内**：`False or False` 得到 `False`。
2. 然后计算 `not False`，结果为 `True`。
3. 最后计算 `True and True` 得到 `True`。
4. **最终结果**：`True`

#### 3.2.5 示例 5：表达式 `not (True and False) and (False or True)`

```python
result = not (True and False) and (False or True)
print(result)
```

**讲解：**

1. **计算括号内**：
    - `(True and False)` 得到 `False`
    - `(False or True)` 得到 `True`
2. 计算 `not (True and False)`，即 `not False` 得到 `True`。
3. 最后，计算 `True and True` 得到 `True`。
4. **最终结果**：`True`

#### 3.2.6 小结

- **逻辑运算符优先级**：`not` 优先于 `and`，而 `and` 又高于 `or`。
- **短路求值**：在 `and` 中，如果左侧为 `False`，右侧不会被求值；在 `or` 中，如果左侧为 `True`，右侧不会被求值。（后续会讲解证明）
- 通过加括号可以明确表达式的求值顺序，从而使代码更易读、更不容易出错。

### 3.3 运算结果与短路求值

#### 3.3.1 填充下方表格的运算结果

在开始讲解之前，请你填写下表格：


| expression  | bool | Value | Return value |
| ----------- | ---- | ----- | ------------ |
| 3 and 5     |      |       |              |
| 3 or 5      |      |       |              |
| 0 or 5      |      |       |              |
| 3 and not 5 |      |       |              |

这里我先带你写表格的第一行，第一行学会之后。你填写表格之后的内容。

1. **第一步**：（bool 列）首先表达式是 `3 and 5` ，3 和 5 都是非空，所以都为 True。此时 bool 表达式可以写为：`True and True`；
2. **第二步**：（Value 列）这一步猜猜最终的 value 是什么？——是 True。因为 and 的左右两侧都为 True。
3. **第三步**：（Return value 列）返回的会是什么数字？——是 5，为什么不是 3？只有返回 and 右侧的才能证明全部为 True。而如果返回 3，并不能百分之百保证全部为 True。

所以第一行表格全部填写完成，后面几行交给你。


| Expression  | bool          | Value | Return value |
| ----------- | ------------- | ----- | ------------ |
| 3 and 5     | True and True | True  | 5            |
| 3 or 5      |               |       |              |
| 0 or 5      |               |       |              |
| 3 and not 5 |               |       |              |

到这你应该填写完成，我来一行一行解析。

1. 表达式：`3 or 5` ：3 和 5 都是非空，所以 bool 列答案是：`True or True`。因为 or 是其中一个为 True 即可，故而 Value 列答案则是：True。对于最终返回的值为 3。在 or 运算中，只要第一个为 True，or 右侧的则不在运行或者说无所谓右侧什么结果。故而 Return value 列则是：3。
2. 表达式：`0 or 5`：0 位空、5位非空，所以最终得到的 bool 列答案为：False or True。因为 or 只要有一个 True 即可，故而 Value 列的答案是：True。不用想，最终 Return value 列的答案是 5。
3. 表达式：`3 and not 5`：3 和 5 都为非空，所以目前表达式为：`Ture and not True`，而 and 要运行，需要得到左右侧结果。则先运行右侧 `not True` 结果为 False。所以 bool 列的答案是：`True and False` 。and 运算需要左右侧都为 True 才可以，故而 Value 列最终答案为：False。那么有趣的来了，Return value 列还有结果吗？——没有。因为你返回 3 的话会让人误解结果是 True，所以只能是 False。

最终表格如下：


| Expression  | bool           | Value | Return value |
| ----------- | -------------- | ----- | ------------ |
| 3 and 5     | True and True  | True  | 5            |
| 3 or 5      | True and True  | True  | 3            |
| 0 or 5      | False or True  | True  | 5            |
| 3 and not 5 | True and False | Fasle |              |

#### 3.3.2 短路求值

接下来，我们将详细探究短路求值。Python 的逻辑运算符不仅返回布尔值，还会返回参与运算的具体值。这是因为它们采用“短路求值”的机制：

1. **`and` 运算符**：如果左侧表达式为真（True），则返回右侧表达式的值；如果左侧为假，则直接返回左侧的值，不再计算右侧。例如前面表格中的表达式 `3 and 5`：3 为真，故返回 5。`0 and 5`：0 为假，直接返回 0。

2. **`or` 运算符**：如果左侧表达式为真，则直接返回左侧的值；如果左侧为假，则返回右侧表达式的值。例如：`3 or 5`：3 为真，返回 3。`0 or 5`：0 为假，返回 5。

上方表格，我再此论述讲解，总结例子：

| 表达式        | 解释                                               | 返回值 |
| ------------- | -------------------------------------------------- | ------ |
| `3 and 5`     | 3 为真，继续判断，返回右侧 5                       | 5      |
| `3 or 5`      | 3 为真，短路求值，不再计算右侧，返回 3             | 3      |
| `0 or 5`      | 0 为假，计算右侧表达式，返回 5                     | 5      |
| `3 and not 5` | 3 为真，`not 5` 的结果为 `False`，因此返回 `False` | False  |

可以看出，这种机制能提高程序的效率，同时在某些情况下帮助我们避免不必要的计算（例如避免错误）。

#### 3.3.3 短路求值的验证与示例

接下来还是老样子，本书要带你学会研究这个技能。

**待研究的问题**：上面所提到两个点：

1. `3 and 5`：如果 and 的第一个元素为 False 时，则右侧直接不执行。
2. `3 or 5`：如果 or 的第一个元素为 True，则右边直接不执行。

如何证明上面的结论呢？（证明右侧有无执行）要证明有无执行，在 and、or 右侧放一个表达式，这个表达式必须要有：执行的特点，就是执行时会出现明显的展示。（说的大白话一点：执行与没执行应该是两种能直接看出来的状态）

此时，如果是常规的表达式明显不符合上面的特点。我们可以设计一些包含潜在错误的表达式。在正式验证之前，我来给你分享一下我一个学生编写的证明方法，你看看有什么问题：

```python
print(False and [])
print([] and 5)
```

上面的代码可以证明右侧未执行吗？不行，不论是第一行代码 `print(False and [])` 输出 False，还是第二行代码 `print([] and True)` 输出 `[]` 都不能直接证明右侧的 5 没有被运行过。没有显著的执行依据来证明，所以上面的方法无效！

这里呢，我在写本片段时想到了两个方法：

1. **方法一**：利用除零错误证明；
2. **方法二**：使用 `print()` 函数带字符串输出证明；（总觉得不是那么恰当，但又是那么实用）

##### 3.3.3.1 方法一

我们先来看看方法一，首先在 Python 当中如果一个被除数是 0 时，语法没有错误，但在运行时会报错：

```python
print(10 / 0) # 会报错，只有在执行的时候才会报错

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/bornforthis.cn/demo.py", line 1, in <module>
    print(10 / 0)
          ~~~^~~
ZeroDivisionError: division by zero
```

哎，这不就来了吗！符合语法并且在执行时会报错，这不就是拥有执行的特点吗！这时候我有个学员很激动，老师这个我会，我会！写了如下的代码测试：

```python
print(10/0 and 6)
```

我还一下子比他还激动，当我定睛一看：错，我脱口而出。为什么上面的代码依然不能证明右侧有没有被执行过呢？——因为，代码是从左执行的。在 and 左侧执行 `10/0` 时程序直接报错，怎么能证明右侧没有被执行过呢！

我们马上编写如下代码进行测试：

```python
condition = False and (10 / 0)
print(condition)  

# ---output---
False
```

运行之后你会发现，没有报错！足以证明当 and 左侧为 False 时，右侧不会被运行。因为，如果右侧运行必然得到的是报错而不是 False。如果不相信，你可以自己编写如下代码测试：

```python
condition = True and (10 / 0)
print(condition)

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/bornforthis.cn/demo.py", line 1, in <module>
    condition = True and (10 / 0)
                          ~~~^~~
ZeroDivisionError: division by zero
```

到此，方法一讲解完毕！至于 or，验证代码如下：

```python
condition = 3 or (10 / 0)
print(condition)


# ---output---
3
```





##### 3.3.3.2 方法二

接下来，我们一起来看看方法二。虽然我写的时候感觉不恰当，但我相信足以让你一下子理解！

```python
condition = True or print("我被执行了！")
print(condition)

# ---output---
True
```

这个我想很简单，如果 or 右侧被执行，就会输出字符串：`"我被执行了！"`。如果没有输出，则没被执行！右侧被执行的情况是 or 左侧为 False：

```python
condition = False or print("我被执行了！") 
print(condition)

# ---output---
我被执行了！
None
```

**注意**：输出中你会疑惑的是 None，我这里稍微讲一下。对于输出中 “`我被执行了！`” 这个结果是 or 右侧的代码的功能：`print("我被执行了！")`。而这个 None，是因为当执行 or 右侧代码时，是没有返回值的。所以 condition 被赋值的结果为 None。被代码 `print(condition)` 输出。

#### 3.3.4 形象类比

1. **游戏比喻**：想象你在玩游戏，有人拿出“普通小兵”的成绩（人头）跟你说通过了那个关卡，你会相信吗？这显然缺乏说服力；而如果有人展示了击败游戏中最后 boss 人头，跟你说通过了那个关卡，你会信吗？显然可信。都看见 boss 的人头了，还有必要在意是否有小弟吗？能打赢 boss 打不赢小弟吗？肯定是能打赢 boss 肯定可以（证明）打赢小弟，但是可以打赢小弟不一定可以证明打的赢 boss！

    同理，在逻辑判断中，如果左侧条件已经足以决定结果（比如 `False and ...` 或 `True or ...`），右侧表达式就没有必要再执行。（反之也是一样的）

2. **录取比喻**：比如在大学录取中，有两种途径：特招和高考。如果小棠同学通过了特招（一个更高层次的评判标准）进清华大学，那么清华大学可能根本不会再去关注他的高考成绩。逻辑上，特招（左侧条件）已经决定了录取结果，而高考成绩（右侧条件）就不会被考虑。（反之也是一样的）

- ~~一个人拿着游戏小弟的人头跟你说，他打赢了这把游戏，可信吗？显然不可信。这时如果有个人拿着 boss 的人头说，我打赢了这个游戏，可信吗？——可信，boss 都拿到了，肯定也通关了！~~
- ~~上大学的方式：特招、高考。如果小悦被特招进清华大学，清华大学还有必要看小悦的高考成绩吗？~~

### 3.4 小结

如果上面学习后，还是不理解（不存在真的），那你就直接死记硬背：and 在左右全为 True 的情况下，是返回右侧值。or 在左侧为 True 时返回左侧，左侧 False 时，右侧 True 时，返回右侧值。

不过，还是需要你理解，看似结论简单。但是最需要的是你可以独立研究、思考得出这个结论。掌握原理也很重要，加油！

## 4. 表达式应用——条件测试

在编程中，表达式常用于条件测试，帮助我们根据不同情况执行不同代码。常见的应用场景包括：

- **比较操作**：检查一个变量是否等于或不等于某个特定值，或比较两个数字的大小。
- **成员资格测试**：判断一个特定的值是否存在于某个序列（如列表、字符串、元组）中。

### 4.1 使用 `and` 检查多个条件

当需要多个条件同时满足时，可以使用 `and` 运算符。例如：

```python
age_lilei = 17
age_hanmeimei = 18
result1 = age_lilei >= 18 and age_hanmeimei >= 18
print(result1)

result2 = age_lilei >= 15 and age_hanmeimei >= 15
print(result2)


# ---output---
False  # 因为李雷未满 18 岁 
True   # 两人都至少 15 岁
```

### 4.2 使用 `or` 检查多个条件

当只需要其中一个条件成立时，可以使用 `or` 运算符。例如：

```python
age_lilei = 17
age_hanmeimei = 18
result1 = age_lilei >= 18 or age_hanmeimei >= 15
print(result1)

result2 = age_lilei >= 20 or age_hanmeimei >= 20
print(result2)


# ---output---
True    # 韩梅梅满足条件，所以整体结果为 True
False   # 两人均未达到 20 岁，因此结果为 False
```

在实际应用中，你可以根据需求灵活组合不同的逻辑运算符，实现对复杂条件的判断，从而控制程序的流程。













