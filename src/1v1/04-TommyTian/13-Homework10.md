---
title: NYU Tandon School of Engineering Homework 10
date: 2023-05-01 08:09:18
author: AI悦创
isOriginal: true
category:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
tag:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - NYU编程辅导
    - NYU Python辅导
icon: python
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
backToTop: true
toc: true
---

Due: 1159pm, May 4th, 2023

## Problem 1: Tools Of The Trade

> 行业工具

The whole point of this assignment is to simulate two musicians having a battle (think [Scott Pilgrim vs The World's bass battle](https://www.youtube.com/watch?v=PkYDQQmN4ng&t=14s)). To do this, we're going to create two classes, an Instrument class (i.e. their instrument of choice) and the `Musician` class (i.e. the musician using the instrument). 

> 这个任务的整个目的是模拟两个音乐家进行一场比拼（可以想象[《斯科特·皮尔格林》中的低音吉他比赛](https://www.youtube.com/watch?v=PkYDQQmN4ng&t=14s)）。为此，我们将创建两个类，一个是乐器类（即他们选择的乐器），另一个是“音乐家”类（即使用乐器的音乐家）。

Let's start with `Instrument` class, since this one is simpler. 

> 让我们从 `Instrument` 类开始，因为这个类比较简单。

### 1.1: Creating `Instrument` Objects

Start with the initializer method, which will accept three parameters from the user: 

> 从初始化方法开始，该方法将从用户接受三个参数。

| Attribute   | Type    | Comments                                                     |
| ----------- | ------- | ------------------------------------------------------------ |
| `model . `  | `str `  | `The model of our instrument.`<br />"我们仪器的模型。"       |
| `brand`     | `str `  | `The brand of this instrument.`<br />这个工具的品牌。        |
| `strength ` | `float` | `It's "strength" value, represented by a float from 0.0 to 1.0.`<br />它的“strength”值表示为一个从0.0到1.0的浮点数。 |

**Table 1**: Attributes of the **Instrument** class. Please make sure the spelling of your attributes matches those given here. You can assume that the user will always enter a valid value for `strength`. 

> **表1**： **Instrument（乐器）**类的属性。请确保您的属性拼写与此处给出的相匹配。您可以假设用户始终会输入有效的`strength（力度）`值。

If you implement your initializer method correctly, your **Instrument** objects should behave as follows:

> 如果你正确实现了初始化方法，你的乐器对象应该表现如下：

```python
def main():
    fender_vi = Instrument("VI Bass", "Fender", 0.99)
    print(fender_vi.model)
    print(fender_vi.brand)
    print(fender_vi.strength)


main()
```

Output:

```python
VI Bass
Fender
0.99
```

#### Answer

```python
class Instrument():
    def __init__(self, model, brand, strength):
        self.model = model
        self.brand = brand
        self.strength = strength


def main():
    fender_vi = Instrument("VI Bass", "Fender", 0.99)
    print(fender_vi.model)
    print(fender_vi.brand)
    print(fender_vi.strength)


main()
```



### 1.2: Printing `Instrument` Objects

> 1.2：打印仪器对象

Here, your goal is to simply make sure that the following behavior occurs when printing objects of the `Instrument` class:

> 在这里，你的目标就是确保在打印 Instrument 类的对象时发生以下行为：

```python
fender_vi = Instrument("VI Bass", "Fender", 0.99)
four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)

print(fender_vi)
print(four_double_o_one)
```

Output:

```python
Fender VI Bass (99.0 / 100 strength)
Rickenbacker 4001C64 Bass (85.6 / 100 strength)
```

Note that your output format must match the examples' exactly. 

> 请注意，您的输出格式必须与示例完全匹配。

#### Answer

```python {7-9}
class Instrument():
    def __init__(self, model, brand, strength):
        self.model = model
        self.brand = brand
        self.strength = strength

    def __str__(self):
        strength_percentage = self.strength * 100
        return f"{self.brand} {self.model} ({strength_percentage:.1f} / 100 strength)"


def main():
    fender_vi = Instrument("VI Bass", "Fender", 0.99)
    print(fender_vi.model)
    print(fender_vi.brand)
    print(fender_vi.strength)

    fender_vi = Instrument("VI Bass", "Fender", 0.99)
    four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)
    print(fender_vi)
    print(four_double_o_one)


main()
```

## 1.3: The **`does_break()`** Method

> 1.3：`does_break()` 方法

This method will do the following: 

> 这种方法将会执行以下操作：

- If a randomly-generated float value from 0.0 to 1.0 is smaller than 1/2 of the `strength` attribute of this **Instrument** object, **does_break()** will return `True`, meaning the instrument has broken.

    > 如果从0.0到1.0随机生成的浮点值小于这个**乐器（Instrument）**对象的`strength`属性的1/2，**does_break()**将返回`True`，表示该乐器已经损坏了。

- Otherwise, return `False`, meaning the instrument has stood the test of time and not broken.

    > 否则返回`False`，表示该仪器经受住了时间的考验并没有损坏。

- That is, the stronger a **Instrument** object is, the more likely it is to break.

    > 也就是说，一个 Instrument 对象越强大，就越有可能损坏。

- Consider the following possible sample behavior:

    > 请考虑以下可能的样本行为：

```python
def main():
    danelectro = Instrument("Stock '59", "Danelectro", 0.25)

    number_of_tests = 100
    number_of_breaks = 0

    # I'm testing does_break() 100 times and keeping track of how many times it breaks

    for i in range(number_of_tests):
        if danelectro.does_break():
            number_of_breaks += 1

    percentage = (number_of_breaks / number_of_tests) * 100
    print(f"The {danelectro.model} broke {round(percentage)}% of the time in {number_of_tests} tests!")


main()
```

Possible output:

```python
The Stock '59 broke 16% of the time in 100 tests!
```

Please make sure you understand and have gotten it to work perfectly before moving on to the next part, as we'll be making use of **Instrument** objects. 

> 请确保您理解并已经完美地使其正常工作，然后再继续下一部分，因为我们将会使用 **Instrument** 对象。

#### Answer

```python {14-16,34-50}
import random


class Instrument():
    def __init__(self, model, brand, strength):
        self.model = model
        self.brand = brand
        self.strength = strength

    def __str__(self):
        strength_percentage = self.strength * 100
        return f"{self.brand} {self.model} ({strength_percentage:.1f} / 100 strength)"

    def does_break(self):
        random_value = random.random()
        return random_value < self.strength / 2


# def main():
#     fender_vi = Instrument("VI Bass", "Fender", 0.99)
#     print(fender_vi.model)
#     print(fender_vi.brand)
#     print(fender_vi.strength)
#
#     fender_vi = Instrument("VI Bass", "Fender", 0.99)
#     four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)
#     print(fender_vi)
#     print(four_double_o_one)
#
#
# main()


def main():
    danelectro = Instrument("Stock '59", "Danelectro", 0.25)

    number_of_tests = 100
    number_of_breaks = 0

    # I'm testing does_break() 100 times and keeping track of how many times it breaks

    for i in range(number_of_tests):
        if danelectro.does_break():
            number_of_breaks += 1

    percentage = (number_of_breaks / number_of_tests) * 100
    print(f"The {danelectro.model} broke {round(percentage)}% of the time in {number_of_tests} tests!")


main()
```

## Problem 2: Artist of The Year

> 问题2：年度艺术家

Next up, we'll be creating our musicians. Simply start defining this next class underneath the Instrument class definition.

> 接下来，我们将创建我们的音乐家。只需在乐器类定义下面开始定义这个下一个类即可。

Your new class will be called **Musician**, and will contain the following methods: 

> 你的新类将被称为“Musician”，并包含以下方法：

### 2.1: Creating **Musician** Objects

> 2.1：创建音乐家对象

Similar to our **Instrument** class, define the initializer for our **Musician** class, which will create the following attributes:

> 与我们的 **Instrument** 类相似，为我们的 **Musician** 类定义初始化函数，该函数将创建以下属性：

| Attribute               | Type               | Comments                                                     |
| ----------------------- | ------------------ | ------------------------------------------------------------ |
| `stage_name .`          | `str`              | The name of our musician.<br />我们音乐家的名字。            |
| `instruments . `        | `list[Instrument]` | That is, a list of `Instrument` objects.<br />也就是说，一个 `Instrument` 对象的列表。 |
| `number_of_instruments` | `int`              | That is, the number of `Instrument` objects inside `instruments`<br />`instruments` 中包含的 `Instrument` 对象的数量。 |



### Table 2: Attributes of the **Musician** class.

> 表2：音乐家类的属性。

Of these three attributes, the user will only pass in values for `stage_name` and `instruments`. Your initializer must create `number_of_instruments` using information from `instruments`. 

> 在这三个属性中，用户只会传递 `stage_name` 和 `instruments` 的值。您的初始化程序必须使用 `instruments` 中的信息创建 `number_of_instruments`。

If you implement your initializer correctly, your **Musician** objects should behave as follows:

> 如果你正确地实现了你的初始化器，你的Musician对象应该表现如下：

```python
# Creating our Instrument objects
danelectro = Instrument("Stock '59", "Danelectro", 0.25)
fender_vi = Instrument("VI Bass", "Fender", 0.99)
four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)

gear = [danelectro, fender_vi, four_double_o_one]

# Creating our Musician object
sad_musician = Musician("Robert Smith", gear)

# Checking the Musician object's attributes
print(sad_musician.stage_name)
print(sad_musician.number_of_instruments)

for instrument in sad_musician.instruments:
    print(instrument)
```

Output:

```python
Robert Smith
3
Danelectro Stock '59 (25.0 / 100 strength)
Fender VI Bass (99.0 / 100 strength)
Rickenbacker 4001C64 Bass (85.6 / 100 strength)
```



#### Answer

```python
from step1 import Instrument


class Musician:
    def __init__(self, stage_name, instruments):
        self.stage_name = stage_name
        self.instruments = instruments
        self.number_of_instruments = len(instruments)


# Creating our Instrument objects
danelectro = Instrument("Stock '59", "Danelectro", 0.25)
fender_vi = Instrument("VI Bass", "Fender", 0.99)
four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)

gear = [danelectro, fender_vi, four_double_o_one]

# Creating our Musician object
sad_musician = Musician("Robert Smith", gear)

# Checking the Musician object's attributes
print(sad_musician.stage_name)
print(sad_musician.number_of_instruments)

for instrument in sad_musician.instruments:
    print(instrument)
```

### 2.2: Printing **Musician** Objects

> 2.2：打印音乐家对象

Implement the **Musician** class such that you get the following behavior when printing objects of its class:

> 实现Musician类，使得在打印其类的对象时，能够得到以下行为：

```python
# Creating our Instrument objects
danelectro = Instrument("Stock '59", "Danelectro", 0.25)
fender_vi = Instrument("VI Bass", "Fender", 0.99)
four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)

gear = [danelectro, fender_vi, four_double_o_one]

# Creating our Musician object
sad_musician = Musician("Robert Smith", gear)

print(sad_musician)
```

Output:

```python
Musician object 'Robert Smith', owning a Danelectro Stock '59 (25.0 / 100 strength), Fender VI Bass (99.0 / 100 strength), and a Rickenbacker 4001C64 Bass (85.6 / 100 strength)
```

The output format must match exactly as the one above. Note that the number of instruments for any `Musician` object may be more, or less, than 3. 

> 输出格式必须与上面的格式完全匹配。请注意，任何`Musician`对象的乐器数量可能比3多，也可能比3少。

#### Answer

::: code-tabs

@tab join

```python
class Musician:
    def __init__(self, stage_name, instruments):
        self.stage_name = stage_name
        self.instruments = instruments
        self.number_of_instruments = len(instruments)

    def __str__(self):
        instrument_strings = ", ".join(str(instrument) for instrument in self.instruments[:-1])
        last_instrument_string = str(self.instruments[-1])
        return f"Musician object '{self.stage_name}', owning a {instrument_strings}, and a {last_instrument_string}"

# Creating our Instrument objects
danelectro = Instrument("Stock '59", "Danelectro", 0.25)
fender_vi = Instrument("VI Bass", "Fender", 0.99)
four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)

gear = [danelectro, fender_vi, four_double_o_one]

# Creating our Musician object
sad_musician = Musician("Robert Smith", gear)

print(sad_musician)
```

@tab join 注释

```python
class Musician:
    # 初始化方法
    def __init__(self, stage_name, instruments):
        self.stage_name = stage_name  # 乐手的名字
        self.instruments = instruments  # 乐手拥有的乐器列表
        self.number_of_instruments = len(instruments)  # 乐手拥有的乐器数量

    # 定义字符串表示方法
    def __str__(self):
        # 将除最后一个乐器之外的所有乐器转换为字符串，并用逗号和空格连接
        instrument_strings = ", ".join(str(instrument) for instrument in self.instruments[:-1])
        # 将最后一个乐器转换为字符串
        last_instrument_string = str(self.instruments[-1])
        # 返回包含乐手名字、拥有的乐器列表和每个乐器详细信息的字符串
        return f"Musician object '{self.stage_name}', owning a {instrument_strings}, and a {last_instrument_string}"

# 创建 Instrument 对象
danelectro = Instrument("Stock '59", "Danelectro", 0.25)
fender_vi = Instrument("VI Bass", "Fender", 0.99)
four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)

# 将 Instrument 对象放入列表中
gear = [danelectro, fender_vi, four_double_o_one]

# 创建 Musician 对象
sad_musician = Musician("Robert Smith", gear)

# 打印 Musician 对象
print(sad_musician)
```

@tab not use join

```python
class Musician:
    def __init__(self, stage_name, instruments):
        self.stage_name = stage_name
        self.instruments = instruments
        self.number_of_instruments = len(instruments)

    def __str__(self):
        instrument_strings = ""
        for i, instrument in enumerate(self.instruments):
            if i < len(self.instruments) - 2:
                instrument_strings += f"{str(instrument)}, "
            elif i == len(self.instruments) - 2:
                instrument_strings += f"{str(instrument)}, and a "
            else:
                instrument_strings += f"{str(instrument)}"

        return f"Musician object '{self.stage_name}', owning a {instrument_strings}"

# Creating our Instrument objects
danelectro = Instrument("Stock '59", "Danelectro", 0.25)
fender_vi = Instrument("VI Bass", "Fender", 0.99)
four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)

gear = [danelectro, fender_vi, four_double_o_one]

# Creating our Musician object
sad_musician = Musician("Robert Smith", gear)

print(sad_musician)
```

@tab not use join 注释

```python
class Musician:
    def __init__(self, stage_name, instruments):
        self.stage_name = stage_name
        self.instruments = instruments
        self.number_of_instruments = len(instruments)

    def __str__(self):
        instrument_strings = ""
        # 使用 enumerate 遍历 instruments 列表，同时获得索引 i 和 instrument 对象
        for i, instrument in enumerate(self.instruments):
            # 如果当前 instrument 不是倒数第二个，我们添加 instrument 字符串和一个逗号
            if i < len(self.instruments) - 2:
                instrument_strings += f"{str(instrument)}, "
            # 如果当前 instrument 是倒数第二个，我们添加 instrument 字符串和 "and a"
            elif i == len(self.instruments) - 2:
                instrument_strings += f"{str(instrument)}, and a "
            # 如果当前 instrument 是最后一个，我们只添加 instrument 字符串
            else:
                instrument_strings += f"{str(instrument)}"

        # 返回包含 stage_name 和 instrument_strings 的字符串
        return f"Musician object '{self.stage_name}', owning a {instrument_strings}"

# 创建 Instrument 对象
danelectro = Instrument("Stock '59", "Danelectro", 0.25)
fender_vi = Instrument("VI Bass", "Fender", 0.99)
four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)

gear = [danelectro, fender_vi, four_double_o_one]

# 创建 Musician 对象
sad_musician = Musician("Robert Smith", gear)

# 打印 Musician 对象
print(sad_musician)
```

:::

### 2.3: The **pick_instrument()** Method

> 2.3：pick_instrument() 方法

Define a method for the `Musician` class `called pick_instrument()` that: 

> 为 Musician 类定义一个名为 pick_instrument() 的方法，该方法应具有以下特点：

- Accepts a single parameter, `instrument_index`, representing a location within the `Musician` object's `instruments` list. 

    > 接受一个单一参数 `instrument_index`，表示在 `Musician` 对象的 `instruments` 列表中的位置。

- Returns the `Instrument` object at location `instrument_index`. 

    > 返回位于instrument_index位置的乐器（Instrument）对象。

    - If the value of `instrument_index` is larger than the size of `instruments`, this method will return the last `Instrument` object in `instruments`.

        > 如果`instrument_index`的值大于`instruments`的大小，那么此方法将返回`instruments`中的最后一个`Instrument`对象。

    - `instrument_index` will have a default value of `None`. If the user chooses not to pass in a value for `instrument_index`, `pick_instrument()` will return a random *Instrument* object from `instruments`. 

        > `instrument_index`将有一个默认值`None`。如果用户选择不为`instrument_index`传递一个值，`pick_instrument()`将从`instruments`中返回一个随机的 Instrument 对象。

    - If `instruments` is an empty list, return `None`. 

        > 如果`instruments`是一个空列表，就返回`None`。

In other words, all of the following invocations of `pick_instrument()` must work and return either an `Instrument` object or `None`:

```python
instrument = sad_musician.pick_instrument(2)
instrument = sad_musician.pick_instrument(100000000)
instrument = sad_musician.pick_instrument()
```

### Answer

```python
import random

class Musician:
    def __init__(self, stage_name, instruments):
        self.stage_name = stage_name
        self.instruments = instruments
        self.number_of_instruments = len(instruments)

    def __str__(self):
        instrument_strings = ", ".join(str(instrument) for instrument in self.instruments[:-1])
        last_instrument_string = str(self.instruments[-1])
        return f"Musician object '{self.stage_name}', owning a {instrument_strings}, and a {last_instrument_string}"

    def pick_instrument(self, instrument_index=None):
        # 如果 instruments 为空，返回 None
        if not self.instruments:
            return None

        # 如果 instrument_index 为 None，选择一个随机的 Instrument 对象
        if instrument_index is None:
            return random.choice(self.instruments)

        # 如果 instrument_index 大于 instruments 列表的大小，返回最后一个 Instrument 对象
        if instrument_index >= len(self.instruments):
            return self.instruments[-1]

        # 否则，返回 instrument_index 位置的 Instrument 对象
        return self.instruments[instrument_index]

# 测试 pick_instrument() 方法
sad_musician = Musician("Robert Smith", gear)

instrument = sad_musician.pick_instrument(2)
print(instrument)

instrument = sad_musician.pick_instrument(100000000)
print(instrument)

instrument = sad_musician.pick_instrument()
print(instrument)
```





### Problem 3: Battle of The Bands

Write a standalone function called **get_name_of_battle_winner()**, which will do the following:

> 编写一个独立的函数，名为 get_name_of_battle_winner()，它将执行以下操作：

- Accept two parameters, both of which you can assume will always be `Musician` objects. 

> 接受两个参数，你可以假定这两个参数总是Musician对象。

- The function will then pick a random `Instrument` object from each of the `Musician` objects in this duel. Be sure to check that each `Musician` object has at least one instrument. If either of them don't have any instruments, the other `Musician` automatically wins. 

    > 该函数将从此次决斗中的每个音乐家对象中随机选择一个`乐器（Instrument）`对象。请确保检查每个`音乐家（Musician）`对象至少拥有一种乐器。如果他们中的任何一个都没有任何乐器，则另一个`音乐家（Musician）`自动获胜。

- If both players don't have any instruments, return the string `"NO CONTEST"`. 

    > 如果两个玩家都没有任何乐器，则返回字符串“NO CONTEST”。

- Finally, `get_name_of_battle_winner()` will first check which `Instrument` object's `strength` attribute is larger. Let's say musician A's instrument is stronger than musician B's. If so, our program will call musician **A's** `Instrument` object's `does_break()` method. If it returns True (that is, if it breaks), Musician B wins in an upset. Otherwise, musician A wins. If musician B's instrument was stronger than musician A's, we do the same process, but instead calling musician B's Instrument object's does_break() method. If both Instrument objects happen to have the same strength value, the winner will be decided by a 50/50 random coin-toss. 

- Whichever **Musician** wins, return their **stage_name** attribute. 

WARNING: When picking Instrument objects from each Musician object in the duel, make sure not to remove it from that Musician object's instruments list. In other words, each Musician object's instruments list must never change once it is initialized.

If you successfully implement this method, you should see similar behavior to the following example. I added a few print() function calls in my **get_name_of_battle_winner()** method to better illustrate what is happening behind the scenes. Feel free to do this as well if it helps you, but it is not necessary. As long as the function returns the correct name, that is enough:

```python
def main():
    danelectro = Instrument("Stock '59", "Danelectro", 0.25)
    fender_vi = Instrument("VI Bass", "Fender", 0.99)
    four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)

    gear = [danelectro, fender_vi, four_double_o_one]

    # Let's say both musicians have access to the same gear
    sad_musician = Musician("Robert Smith", gear)
    less_sad_musician = Musician("Miki Berenyi", gear)

    # Testing the get_name_of_battle_winner method a few times
    number_of_duels = 10

    for duel_number in range(number_of_duels):
        winner_name = get_name_of_battle_winner(sad_musician, less_sad_musician)
        print(f"THE WINNER OF DUEL #{duel_number + 1} IS {winner_name}!", end="\n\n")


main()
```

Possible output:

```python
Robert Smith picked a Fender VI Bass (99.0 / 100 strength)!
Miki Berenyi picked a Fender VI Bass (99.0 / 100 strength)!
Both musician's instruments are the same strength. The winner will be decided
by the whim of chance.
THE WINNER OF DUEL #1 IS Robert Smith!

Robert Smith picked a Danelectro Stock '59 (25.0 / 100 strength)!
Miki Berenyi picked a Rickenbacker 4001C64 Bass (85.6 / 100 strength)!
THE WINNER OF DUEL #2 IS Miki Berenyi!

Robert Smith picked a Danelectro Stock '59 (25.0 / 100 strength)!
Miki Berenyi picked a Danelectro Stock '59 (25.0 / 100 strength)!
Both musician's instruments are the same strength. The winner will be decided
by the whim of chance.
THE WINNER OF DUEL #3 IS Miki Berenyi!

Robert Smith picked a Fender VI Bass (99.0 / 100 strength)!
Miki Berenyi picked a Rickenbacker 4001C64 Bass (85.6 / 100 strength)!
THE WINNER OF DUEL #4 IS Robert Smith!

Robert Smith picked a Rickenbacker 4001C64 Bass (85.6 / 100 strength)!
Miki Berenyi picked a Fender VI Bass (99.0 / 100 strength)!
THE WINNER OF DUEL #5 IS Miki Berenyi!

Robert Smith picked a Fender VI Bass (99.0 / 100 strength)!
Miki Berenyi picked a Fender VI Bass (99.0 / 100 strength)!
Both musician's instruments are the same strength. The winner will be decided
by the whim of chance.
THE WINNER OF DUEL #6 IS Miki Berenyi!

Robert Smith picked a Fender VI Bass (99.0 / 100 strength)!
Miki Berenyi picked a Danelectro Stock '59 (25.0 / 100 strength)!

Robert Smith's VI Bass broke!
THE WINNER OF DUEL #7 IS Miki Berenyi!

Robert Smith picked a Rickenbacker 4001C64 Bass (85.6 / 100 strength)!
Miki Berenyi picked a Danelectro Stock '59 (25.0 / 100 strength)!
Robert Smith's 4001C64 Bass broke!
THE WINNER OF DUEL #8 IS Miki Berenyi!

Robert Smith picked a Rickenbacker 4001C64 Bass (85.6 / 100 strength)!
Miki Berenyi picked a Fender VI Bass (99.0 / 100 strength)!
Miki Berenyi's VI Bass broke!
THE WINNER OF DUEL #9 IS Robert Smith!

Robert Smith picked a Danelectro Stock '59 (25.0 / 100 strength)!
Miki Berenyi picked a Rickenbacker 4001C64 Bass (85.6 / 100 strength)!
Miki Berenyi's 4001C64 Bass broke!
THE WINNER OF DUEL #10 IS Robert Smith!
```

### Answer

```python
import random


class Instrument():
    def __init__(self, model, brand, strength):
        self.model = model
        self.brand = brand
        self.strength = strength

    def __str__(self):
        strength_percentage = self.strength * 100
        return f"{self.brand} {self.model} ({strength_percentage:.1f} / 100 strength)"

    def does_break(self):
        random_value = random.random()
        return random_value < self.strength / 2


class Musician:
    def __init__(self, stage_name, instruments):
        self.stage_name = stage_name
        self.instruments = instruments
        self.number_of_instruments = len(instruments)

    def __str__(self):
        instrument_strings = ", ".join(str(instrument) for instrument in self.instruments[:-1])
        last_instrument_string = str(self.instruments[-1])
        return f"Musician object '{self.stage_name}', owning a {instrument_strings}, and a {last_instrument_string}"

    def pick_instrument(self, instrument_index=None):
        # 如果 instruments 为空，返回 None
        if not self.instruments:
            return None

        # 如果 instrument_index 为 None，选择一个随机的 Instrument 对象
        if instrument_index is None:
            return random.choice(self.instruments)

        # 如果 instrument_index 大于 instruments 列表的大小，返回最后一个 Instrument 对象
        if instrument_index >= len(self.instruments):
            return self.instruments[-1]

        # 否则，返回 instrument_index 位置的 Instrument 对象
        return self.instruments[instrument_index]


def get_name_of_battle_winner(musician1, musician2):
    if not musician1.instruments and not musician2.instruments:
        return "NO CONTEST"
    elif not musician1.instruments:
        return musician2.stage_name
    elif not musician2.instruments:
        return musician1.stage_name

    instrument1 = musician1.pick_instrument()
    instrument2 = musician2.pick_instrument()

    print(f"{musician1.stage_name} picked a {instrument1.model} ({instrument1.strength * 100:.1f} / 100 strength)!")
    print(f"{musician2.stage_name} picked a {instrument2.model} ({instrument2.strength * 100:.1f} / 100 strength)!")

    if instrument1.strength == instrument2.strength:
        print("Both musician's instruments are the same strength. The winner will be decided by the whim of chance.")
        return random.choice([musician1.stage_name, musician2.stage_name])
    elif instrument1.strength > instrument2.strength:
        stronger_instrument = instrument1
        winner = musician1
        loser = musician2
    else:
        stronger_instrument = instrument2
        winner = musician2
        loser = musician1

    if stronger_instrument.does_break():
        print(f"{winner.stage_name}'s {stronger_instrument.model} broke!")
        return loser.stage_name
    else:
        return winner.stage_name


def main():
    danelectro = Instrument("Stock '59", "Danelectro", 0.25)
    fender_vi = Instrument("VI Bass", "Fender", 0.99)
    four_double_o_one = Instrument("4001C64 Bass", "Rickenbacker", 0.856)

    gear = [danelectro, fender_vi, four_double_o_one]

    # Let's say both musicians have access to the same gear
    sad_musician = Musician("Robert Smith", gear)
    less_sad_musician = Musician("Miki Berenyi", gear)

    # Testing the get_name_of_battle_winner method a few times
    number_of_duels = 10

    for duel_number in range(number_of_duels):
        winner_name = get_name_of_battle_winner(sad_musician, less_sad_musician)
        print(f"THE WINNER OF DUEL #{duel_number + 1} IS {winner_name}!", end="\n\n")


main()
```

```python
import random


class Instrument():
    def __init__(self, model, brand, strength):
        self.model = model
        self.brand = brand
        self.strength = strength

    def __str__(self):
        strength_percentage = self.strength * 100
        return f"{self.brand} {self.model} ({strength_percentage:.1f} / 100 strength)"

    # 定义乐器是否会在决斗中损坏的方法
    def does_break(self):
        random_value = random.random()
        return random_value < self.strength / 2


class Musician:
    def __init__(self, stage_name, instruments):
        self.stage_name = stage_name
        self.instruments = instruments
        self.number_of_instruments = len(instruments)

    def __str__(self):
        instrument_strings = ", ".join(str(instrument) for instrument in self.instruments[:-1])
        last_instrument_string = str(self.instruments[-1])
        return f"Musician object '{self.stage_name}', owning a {instrument_strings}, and a {last_instrument_string}"

    # 乐手选择乐器的方法
    def pick_instrument(self, instrument_index=None):
        if not self.instruments:
            return None
        if instrument_index is None:
            return random.choice(self.instruments)
        if instrument_index >= len(self.instruments):
            return self.instruments[-1]
        return self.instruments[instrument_index]


def get_name_of_battle_winner(musician1, musician2):
    # 如果两位乐手都没有乐器，那么没有决斗
    if not musician1.instruments and not musician2.instruments:
        return "NO CONTEST"
    # 如果其中一个乐手没有乐器，那么另一个乐手获胜
    elif not musician1.instruments:
        return musician2.stage_name
    elif not musician2.instruments:
        return musician1.stage_name

    # 两位乐手分别选择一个乐器
    instrument1 = musician1.pick_instrument()
    instrument2 = musician2.pick_instrument()

    # 输出乐手选择的乐器和实力
    print(f"{musician1.stage_name} picked a {instrument1.model} ({instrument1.strength * 100:.1f} / 100 strength)!")
    print(f"{musician2.stage_name} picked a {instrument2.model} ({instrument2.strength * 100:.1f} / 100 strength)!")

    # 判断决斗胜利者
    if instrument1.strength == instrument2.strength:
        print("Both musician's instruments are the same strength. The winner will be decided by the whim of chance.")
        return random.choice([musician1.stage_name, musician2.stage_name])
    elif instrument1.strength > instrument2.strength:
        stronger_instrument = instrument1
        winner = musician1
        loser = musician2
    else:
        stronger_instrument = instrument2
        winner = musician2
        loser = musician1

    # 如果获胜者的乐器损坏，那么输家获胜，否则胜利者获胜
    if stronger_instrument.does_break():
        print(f"{winner.stage_name}'s {stronger_instrument.model} broke!")
        return loser.stage_name
    else:
        return winner.stage_name
```



问题3：乐队之战

编写一个名为 **get_name_of_battle_winner()** 的独立函数，该函数将执行以下操作：

- 接受两个参数，都可以假定始终是 `Musician` 对象。
- 然后，该函数将从这场对决中的每个 `Musician` 对象中随机选择一个 `Instrument` 对象。确保检查每个 `Musician` 对象至少有一个乐器。如果其中任何一个没有乐器，另一个 `Musician` 就会自动获胜。
- 如果两个玩家都没有任何乐器，请返回字符串 `"NO CONTEST"`。
- 最后，`get_name_of_battle_winner()` 将首先检查哪个 `Instrument` 对象的 `strength` 属性更大。假设音乐家A的乐器比音乐家B的乐器更强。如果是这样，我们的程序将调用音乐家 **A** 的 `Instrument` 对象的 `does_break()` 方法。如果返回True（即，如果它破裂了），音乐家B在一场惊人的比赛中获胜。否则，音乐家A获胜。如果音乐家B的乐器比音乐家A的乐器更强，我们进行相同的过程，但是调用音乐家B的乐器对象的 `does_break()` 方法。如果两个乐器对象恰好具有相同的强度值，获胜者将由50/50随机硬币抛掷决定。
- 无论哪个 **Musician** 获胜，都返回他们的 **stage_name** 属性。
警告：从对决中的每个 Musician 对象中选择 Instrument 对象时，请确保不要从该 Musician 对象的 instruments 列表中将其删除。换句话说，每个 Musician 对象的 instruments 列表在初始化后必须保持不变。

如果您成功实现此方法，您应该看到类似于以下示例的行为。我在 **get_name_of_battle_winner()** 方法中添加了一些 `print()` 函数调用，以更好地说明幕后发生了什么。如果这对您有帮助，请随意执行此操作，但这不是必需的。只要函数返回正确的名称，那就足够了。







::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
