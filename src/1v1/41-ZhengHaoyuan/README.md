---
title: NYU – Tandon School of Engineering Final Exam – 16 December 2021
date: 2023-05-06 07:06:51
author: AI悦创
isOriginal: true
category: 
    - python 1v1
tag:
    - NYU – Tandon School of Engineering
icon: a-jibijilianxibianji
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
editLink: false
backToTop: true
toc: true
---

Final Exam – 16 December 2021

1. **(15 Points) Provide the value of the variable “var” (use python form to show the appropriate data type, e.g. “str” , [list], etc). Note**: following code snippets will not produce errors.

**Value of var after code runs**

::: code-tabs

@tab 1

```python
In [1]: var = 0

In [2]: for i in range (2, 5, 3):
   ...:     for j in range(i, 0, -1):
   ...:         var += j
   ...:

In [3]: var
Out[3]: 3
```

@tab 2

```python
In [4]: var = []

In [5]: ls = [1, 2, 3]

In [6]: for ii in ls:
   ...:     ls.pop()
   ...:     var.append(ls[:])
   ...:

In [7]: var
Out[7]: [[1, 2], [1]]
```

@tab 3

```python
In [17]: ls=[5, 10, 15, 20]

In [18]: var = ls

In [19]: ls.pop()
Out[19]: 20

In [20]: var[0] += 1

In [21]: var
Out[21]: [6, 10, 15]
```

@tab 4

```python
In [22]: quote = "a wse man can see the mssng lttrs"

In [23]: message = quote[10:17] + " " + quote[-5:]

In [24]: var = message.split(" ")

In [25]: var
Out[25]: ['can', 'see', 'lttrs']
```

@tab 5

```python
In [26]: area_codes = {"NY": "212", "NJ": "201", "DC": "202"}

In [27]: del area_codes["DC"]

In [28]: var = area_codes

In [29]: var
Out[29]: {'NY': '212', 'NJ': '201'}
```

:::

2. (**10 Points)** Evaluate the code below and write its output.

```python
In [30]: def make_alphanum_codes(chars, num_list):
    ...:     i = 10
    ...:     for num in num_list[::-1]:
    ...:         for pos in range(len(chars)):
    ...:             code = chars[pos] + ',' + str(num)
    ...:             print(i, ':', code, sep='') #sep is empty str
    ...:             i - 1
    ...:

In [31]: n_list = [1, 2, 3]

In [32]: alphas = "abc"
```

Output

```python
In [33]: make_alphanum_codes(alphas, n_list)
10:a,3
10:b,3
10:c,3
10:a,2
10:b,2
10:c,2
10:a,1
10:b,1
10:c,1
```

3. **Given the two data structures, NUMBERS_LIST and VEHICLES_DICT, use list comprehension to construct new_list for each one of the following questions:** 

```python
You are given, as an example:
    # a list of integers
    NUMBERS_LIST = [4, 5, 6, 7, 9, 10, 13, 15, 20, 45, 50, 80]
    # a dictionary of vehicle names and their weights in Kg
    VEHICLES_DICT = {"Sedan": 1500, "SUV": 2000, "Pickup": 2500, "Minivan": 1600, "Van": 2400, "Semi": 13600, "Bicycle": 7, "Motorcycle": 110}
```

**Question**

Construct **new_list** adding 5 to each item of **NUMBERS_LIST**.

::: code-tabs

@tab 题目

```python
# Type your answer here. 
new_list = _
```

@tab Answer

```python
# Construct new_list adding 5 to each item of NUMBERS_LIST.
new_list = [number + 5 for number in NUMBERS_LIST]
```

:::

Construct **new_list** from the squares of each element in **NUMBERS_LIST**, but only if the square is less than 50. 

::: code-tabs

@tab 题目

```python
# Type your answer here. 
new_list = _
```

@tab Answer

```python
# Construct new_list from the squares of each element in NUMBERS_LIST, but only if the square is less than 50.
new_list = [number**2 for number in NUMBERS_LIST if number**2 < 50]
```

:::

Construct **new_list** from the elements of **NUMBERS_LIST** that are less than 50, and are evenly divisible by 3 **and** 5. 

::: code-tabs

@tab 题目

```python
# Type your answer here. 
new_list =
```

@tab Answer

```python
# Construct new_list from the elements of NUMBERS_LIST that are less than 50, and are evenly divisible by 3 and 5.
new_list = [number for number in NUMBERS_LIST if number < 50 and number % 3 == 0 and number % 5 == 0]
```

:::

Construct **new_list** from the names of vehicles in **VEHICLES_DICT** that have weights within the range 2000 - 3000, inclusive on both ends. 

::: code-tabs

@tab 题目

```python
# Type your answer here. 
new_list = _
```

@tab Answer

```python
# Construct new_list from the names of vehicles in VEHICLES_DICT that have weights within the range 2000 - 3000, inclusive on both ends.
new_list = [vehicle for vehicle, weight in VEHICLES_DICT.items() if 2000 <= weight <= 3000]
```

:::

**4. (15 Points)** Write a class named Airplane that represents each airplane in an airport. Each airplane has the following **attributes**:

- make (make of plain. Example: “Boeing”)
- model (model number. Example: 707)
- capacity (seating capacity. Example: 400)
- pilot (name of pilot) 

The Airplane class should have an **initializer** (constructor) that accepts the airplane’s make, model, capacity, and pilot as arguments. The class should also implement the `__str__()` method that returns a string describing airplanes in this format:

```python
Airplane description: 						Airplane description:
Aircraft: Boeing 707 						Aircraft: Airbus A380
Capacity: 400 seats							Capacity: 853 seats
Pilot: William Edward Boeing				Pilot: Chesley Burnett
```

a) Airplane class implementation: 

b) Write code (you do not need to define any functions) to instantiate two airplane class objects.

::: code-tabs

@tab a

```python
class Airplane:
    def __init__(self, make, model, capacity, pilot):
        self.make = make
        self.model = model
        self.capacity = capacity
        self.pilot = pilot

    def __str__(self):
        return f"Aircraft: {self.make} {self.model}\nCapacity: {self.capacity} seats\nPilot: {self.pilot}"
```

@tab b

```python
# Instantiate two airplane objects
airplane1 = Airplane("Boeing", "707", 400, "William Edward Boeing")
airplane2 = Airplane("Airbus", "A380", 853, "Chesley Burnett")

# Print the airplane objects using their __str__() method
print(airplane1)
print("\n")
print(airplane2)
```

:::

5. **(25 points)** A popular movie site provides a data feed with pairings of movie stars with the movies in which the star has appeared. This data has been processed to create a list of tuples where each tuple contains a movie star's name and the movie in which the star has appeared. An example of the data in this structure is shown below.

```python
pairings = [
    ("Cate Blanchett", "Babel"),
    ("Johnny Depp", "Edward Scissorhands"),
    ("Jack Nicholson", "One Flew Over the Cuckoo's Nest"),
    ("Angela Bassett", "Waiting to Exhale"),
    ("Jack Nicholson", "Batman"),
    ("Jack Nicholson", "The Departed"),
    ("Cate Blanchett", "The Lord of the Rings: The Two Towers"),
    ("Angela Bassett", "Black Panther"),
    ("Brad Pitt", "Fight Club"),
    ("Jodie Foster", "The Silence of the Lambs"),
    ("Edward Norton", "American History X")
]
```

You can assume the following about the code that you implement:

- the list of movie star/movie title pairings will exist and will not be empty

- no main function is needed

a) First, we’d like to be able to search this list of pairings for actors that appear in a given movie (the cast). Define a function named `get_cast()` that accepts two parameters: the pairings list as described above, and a string with the name of a movie. The function will return a list of the names (i.e. a list of strings) of the actors that appeared in that movie. If the movie title doesn’t appear in the list of pairings, return an empty list.

Function implementation:

```python
def get_cast(pairings, movie_title):
    cast = []
    for actor, movie in pairings:
        if movie == movie_title:
            cast.append(actor)
    return cast
```

b) In order to more easily work with the data, we would like to convert it to a dictionary. Define a function named **convert**() that accepts a single parameter: a list of pairings as described above (i.e. a list of tuples where each tuple contains a movie star's name and the movie in which the star has appeared). This function will return a dictionary where each movie star name that appears in the list is a key in a dictionary. The value associated with each key is a list of strings of the movie titles in which the star has appeared. (For example, “Angela Bassett” would be associated with “Waiting to Exhale” and “Black Panther”; “Jodie Foster” would be associated with “The Silence of the Lambs”, et cetera)

Function implementation:

```python
def convert(pairings):
    star_movies = {}
    for actor, movie in pairings:
        if actor not in star_movies:
            star_movies[actor] = []
        star_movies[actor].append(movie)
    return star_movies
```

c) Define a function named **get_average**() that accepts one parameter: a dictionary with movie star names (a string) and the movies in which the star has appeared (a list of strings) as produced from the **convert**() function above . Calculate and return the average number of movies each star appears in. You can calculate this by finding the total number of movies and dividing by the total number of actors. You do not have to worry about duplication of movie titles. In the above example, there are 11 movies and 7 stars so the average would be 11/7.

```python
def get_average(star_movies):
    total_movies = 0
    total_stars = len(star_movies)
    for movies in star_movies.values():
        total_movies += len(movies)
    return total_movies / total_stars
```



---

这个题目包含了三个编程问题。给定一个包含演员和电影配对的列表，我们需要完成以下三个任务：

a) 编写一个名为 `get_cast()` 的函数，该函数接受两个参数：一个配对列表（包含演员名和电影名的元组）和一个电影名字符串。函数将返回出现在该电影中的演员名称列表。如果电影名未出现在配对列表中，则返回一个空列表。

b) 编写一个名为 `convert()` 的函数，该函数接受一个参数：一个配对列表（包含演员名和电影名的元组）。函数将返回一个字典，其中每个出现在列表中的演员名都作为字典的键。每个键对应的值是一个字符串列表，包含该演员出现过的电影标题。

c) 编写一个名为 `get_average()` 的函数，该函数接受一个参数：一个字典，其中包含演员名称（字符串）和该演员出现过的电影（字符串列表），该字典是由上面的 `convert()` 函数生成的。计算并返回每个演员平均出现在多少部电影中。通过找到总电影数量并除以演员总数来计算这个平均数。无需担心电影标题的重复。在上面的示例中，有11部电影和7位演员，因此平均值是11/7。



::: tabs 

@tab EN

6. **(27 points)** We will be creating a class that simulates a round of *mad lib*. A mad lib is a word game where you are given a paragraph such as this one:

```python
This is a [N] of a [AJ] [N] that I will complete [AV] now.
Don't [V] it isn't [AJ] ok?
With [N] and [N] to you,
good night, [N]
```

This paragraph is missing a series of **nouns** (represented by **[N]**), **verbs** (represented by **[V]**), **adjectives** (represented by **[AJ]**), and **adverbs** (represented by **[AV]**). Your goal as a player is to fill these missing words in with any random noun, verb, adjective, or adverb.

For example, the mad lib below could be filled-in in the following way:

```python
This is a fence of a delicious chair that I will complete quickly now. Don't slice it isn't benign ok?
With fence and chair to you,
good night, cart
```

Define a class, **MadLib**, that accepts one parameter (filepath, a string) when instantiating.

The **MadLib** class will have a single instance attribute, **contents**, which will store the lines in the file pointed to by filepath **as elements of a list** (i.e. each line will be an element). No further processing is necessary.

To do this, the **MadLib** class must **attempt to safely open the file** to extract its contents. If anything goes wrong while attempting to open the file, contents will remain an empty string.

**MadLib** objects will have a single method associated with them: **populate_madlib**(). **populate_madlib**() will accept a single parameter, word_bank, a **WordBank** object.

**You can assume that the** **WordBank** **class is already defined and imported into your file**, and will have the following methods:

- **get_verb**(): Returns a string containing a random verb.
- **get_noun**(): Returns a string containing a random adjective.
- **get_adjv**(): Returns a string containing a random adjective.
- **get_advb**(): Returns a string containing a random adverb.

**WordBank** objects don't require any arguments in order to be properly instantiated.

**populate_madlib**() must use these methods to replace the four word tokens (**[N]**, **[V]**, **[AV]**, and **[AJ]**) with words from the **WordBank** object that was passed into it. After **populate_madlib**() is called, the **contents** attribute will contain the completed mad lib (i.e. the tokens are replaced by the appropriate words) instead of the version with the tokens.

You may assume that all tokens (**[N]**, **[V]**, **[AV]**, and **[AJ]**) will always be uppercase, and that they will **always** have a space character before and after them..

Add functionality to your **MadLib** class so that, when passed into the **print**() function, it will print the current contents of the **MadLib** object's contents attribute **as they would appear in the txt file**.

To finish your file, define a **main**() function to show the **MadLib** class in action.

The **main**() function must extract the name of the txt file that will be used to create the **MadLib** object from the following command line/Terminal command:

*Mac / Linux*:

```python
python3 madlib.py madlib.txt
```

*Windows*:

```python
py madlib.py madlib.txt
```

The **main**() must then create a **MadLib** object, make a call to **populate_madlib**(), and pass the **MadLib** object into a **print**() function call. You can assume that the user will always enter a valid command into the Terminal (i.e. the correct number of arguments, no typos, etc.).

The output on your console, provided everything was properly implemented and went well, could look like this:

```python
This is a chair of a benign fence that I will complete slovenly now. Don't dry it isn't ostentatious ok?
With cart and chair to you,
good night, chair
```

Problem 5 Implementation:

```python
from wordbank import WordBank
```

@tab ZH

这个问题要求你创建一个名为“MadLib”的类，用于模拟一个填词游戏。填词游戏是一种文字游戏，给定一个段落，段落中有一些空缺的单词，需要玩家用随机的名词（用[N]表示）、动词（用[V]表示）、形容词（用[AJ]表示）和副词（用[AV]表示）来填补。

你需要为“MadLib”类定义一个构造函数，接受一个参数（filepath，字符串类型）。

当实例化“MadLib”类时，它将有一个实例属性“contents”，该属性将存储文件中的行作为列表的元素（即每行将是一个元素）。不需要进行进一步处理。

为此，“MadLib”类必须尝试安全地打开文件以提取其内容。如果在尝试打开文件时出现任何问题，contents将保持为空字符串。

“MadLib”对象将与它们关联有一个方法：populate_madlib()。populate_madlib()将接受一个参数，word_bank，一个WordBank对象。

你可以假设WordBank类已经定义并导入到你的文件中，并且将具有以下方法：

- get_verb()：返回一个包含随机动词的字符串。
- get_noun()：返回一个包含随机名词的字符串。
- get_adjv()：返回一个包含随机形容词的字符串。
- get_advb()：返回一个包含随机副词的字符串。

WordBank对象在实例化时不需要任何参数。

populate_madlib()必须使用这些方法将word_bank对象中的单词替换为四个单词标记（[N]、[V]、[AV]和[AJ]）。在调用populate_madlib()之后，contents属性将包含已完成的mad lib（即用适当的单词替换了标记），而不是带有标记的版本。

你可以假设所有标记（[N]、[V]、[AV]和[AJ]）始终为大写，并且它们之前和之后始终有一个空格字符。

为你的“MadLib”类添加功能，当将其传递给print()函数时，它将按照txt文件中显示的内容打印“MadLib”对象的contents属性。

最后，定义一个main()函数来展示“MadLib”类的功能。

main()函数必须从以下命令行/终端命令中提取用于创建MadLib对象的txt文件名：

*Mac / Linux*:

```python
python3 madlib.py madlib.txt
```

*Windows*:

```python
py madlib.py madlib.txt
```

然后，main()函数必须创建一个 MadLib对象，调用populate_madlib()，并将MadLib对象传递给print()函数调用。你可以假设用户总是在终端中输入有效的命令（即参数数量正确，没有拼写错误等）。

:::

### Answer

```python
import sys  # 导入sys模块以访问命令行参数
from wordbank import WordBank  # 导入WordBank类

class MadLib:
    def __init__(self, filepath):
        self.contents = []  # 初始化实例属性contents为空列表
        try:
            with open(filepath, 'r') as file:  # 尝试安全地打开文件
                self.contents = file.readlines()  # 读取文件的每一行并将其作为列表元素存储在contents中
        except:
            self.contents = ""  # 如果在尝试打开文件时出错，将contents设置为空字符串

    def populate_madlib(self, word_bank):
        for idx, line in enumerate(self.contents):  # 遍历contents中的每一行
            # 使用WordBank对象中的方法替换对应的词汇标记
            line = line.replace("[N]", word_bank.get_noun())
            line = line.replace("[V]", word_bank.get_verb())
            line = line.replace("[AJ]", word_bank.get_adjv())
            line = line.replace("[AV]", word_bank.get_advb())
            self.contents[idx] = line  # 更新contents列表中的当前行

    def __str__(self):
        return ''.join(self.contents)  # 当将MadLib对象传递给print()函数时，将contents属性中的元素连接为一个字符串并返回

def main():
    filepath = sys.argv[1]  # 从命令行参数中提取文件路径
    madlib = MadLib(filepath)  # 创建MadLib对象
    word_bank = WordBank()  # 创建WordBank对象
    madlib.populate_madlib(word_bank)  # 使用WordBank对象填充MadLib对象的contents
    print(madlib)  # 打印填充后的MadLib对象

if __name__ == "__main__":
    main()  # 如果是作为脚本运行，则调用main()函数
```

这段代码首先导入`sys`模块以访问命令行参数，然后导入`WordBank`类。接下来，定义了一个名为`MadLib`的类，其中包含一个构造函数（`__init__`方法）。构造函数接受一个参数`filepath`，并尝试安全地打开该文件，将文件中的行作为列表元素存储在`contents`属性中。如果在尝试打开文件时出现任何问题，将`contents`属性保持为空字符串。

然后，定义了一个名为`populate_madlib`的方法，该方法接受一个名为`word_bank`的参数。`populate_madlib`方法遍历`contents`属性中的每一行，并使用`word_bank`对象的方法替换相应的词汇标记。完成后，更新`contents`列表中的当前行。

接下来，定义了一个名为`__str__`的方法，它将`contents`属性中的元素连接为一个字符串并返回。这样，在将`MadLib`对象传递给`print()`函数时，它将打印`contents`属性中的文本。













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
