---
title: 14-面向对象 class
icon: yongyan
date: 2025-04-05 17:03:09
author: AI悦创
isOriginal: true
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

## 1. 从生活中的类比说起

将程序任务涉及到的事物抽象为一个个的对象，以这些对象为中心来写程序。是不是很抽象，很难理解？不用慌，我们从头开始讲！

很多朋友最开始学编程的时候，是从 C++ 或者 JAVA 语言入手的。甚至现在国内外 Python 课程开设，不用要求学生提前掌握其它编程语言。读者们好不容易磕磕绊绊地搞懂了最基本的数据类型、赋值判断和循环，却又迎面撞上了 OOP (object oriented programming) 的大墙，一头扎进公有私有保护、多重继承、多态派生、纯函数、抽象类、友元函数等一堆专有名词的汪洋大海中找不到彼岸，于是就放弃了进阶之路。

相比之下，Python 是一门相对友好的语言，它在创立之初就鼓励命令交互式的轻量级编程。理论上，Python 的命令式语言是图灵完备的, 也就是说命令式语言，理论上可以做到其他任何语言能够做到的所有的事情，甚至进一步，仅仅依靠汇编语言的 MOV 指令，就能实现图灵完备编程。

那么为什么不这样做呢？其实，“上古时代”的程序员就是这么做的，可是随着程序功能复杂性的逐步提升，以及需求的不断迭代，很多老旧的代码修改起来麻烦无比，牵一发而动全身，根本无法迭代和维护，甚至只能推倒重来，这也是很多古老的代码被称为“屎山”的原因。

传统的命令式语言有无数重复性代码，虽然函数的诞生减缓了许多重复性，但随着计算机的发展，只有函数依然不够，需要把更加抽象的概念引入计算机才能缓解（而不是解决）这个问题，于是 OOP 应运而生。

Python 在 1989 年被一位程序员打发时间创立之后，一步步攻城掠地飞速发展，从最基础的脚本程序，到后来可以编写系统程序、大型工程、数据科学运算、人工智能，早已脱离了当初的设计，因此一些其他语言的优秀设计之处依然需要引入。我们必须花费一定的代价掌握面向对象编程，才能跨越学习道路中的瓶颈期，走向下一步。

接下来，我将用上万字来讲解面向对象编程，从基础到实战。我将带你快速但清晰地疏通最基础的知识，确保你能够迅速领略面向对象的基本思想。接着我们从零开始写一个文字对话游戏，将前面所学知识融会贯通。

这些内容可能和你以往看到的所有教程都不太一样，我会尽可能从一个初学者的角度来审视这些难点。同时我们面向实战、面向工程，不求大而全，但是对最核心的思想会有足够的勾勒。我可以保证内容清晰易懂，但想要真正掌握，仍要求你能用心去阅读和思考。真正的提高，永远要靠自己才能做到。

### 1.1 什么是类？什么是实例？

学习编程时，我们常常会听到“类”和“实例”这两个概念。要想真正理解它们，可以先从生活中的例子说起。

1. 什么是类？狗是某一类动物，它们具有相同、相似的属性。如同我们平时说人：物以类聚，人以群分。

2. 狗这一类里面有具体地：我家有一只狗，叫旺财。你家有一只狗，叫大黄。

3. 因为属于同一狗类，所以它们有共同点：旺财、大黄都有四条腿，一条尾巴，都会狗叫。

4. 虽然都属于同一类，但它们互相独立：旺财和大黄被生出来后，互相不会影响。旺财吃胖了，体重增加了不会影响大黄。（一千只狗，就会有一千只哈姆雷特狗。「开玩笑的」）

5. 同属一类，当类被影响（修改）时，它们命运相同：如果某一天上帝决定给狗这个种类的生物都增加一条尾巴，那么旺财和大黄会同时变成两条尾巴。

上面用来具体例子在描述类和具体的旺财和大黄，接下来我们快速总结一下：

1. 狗这一类动物，就是我们所说的：类。就像人类：也是有相同相似的属性，例如：两只腿、两只手、一个鼻子这样；
2. 旺财：狗这个类的一个实例；
3. 大黄：狗这个类的一个实例；
4. 修改类会影响所有的实例，如同上帝让狗都变成了两条尾巴。
5. 修改某个实例里的属性不会影响其他类，就像人类中：某个人掉头发，但是不会影响其他人。（每个人都是人类这个类别中的实例）

### 1.2 对象，你找到了吗？

我们接下来学习，面向对象编程中最基本的概念。前面是比较接地气的解释，下面算是比较正经的解释。虽然有循环论证之嫌（lol），但是我不关心，反复强调之中我还是希望你能对面向对象的最基础的思想，有更真实的了解。

为了方便你理解其中的抽象概念，我先打个比方带你感受一下。生物课上，我们学过“界门纲目科属种”的概念，核心思想是科学家们根据各种动植物、微生物的相似之处，将其分化为不同的类型方便研究。生活中我们也是如此，习惯对身边的事物进行分类：

1. 猫和狗都是动物；
2. 直线和圆都是平面几何的图形；
3. 《哈利波特》和《冰与火之歌》（即《权力的游戏》）都是小说。

自然，同一类事物便会有着相似的特性：

1. 动物会动；
2. 平面图形有面积和周长；
3. 小说也都有相应的作者和大致情节等各种元素。

## 2. 一个例子：现在的方法

### 2.1 任务

我们有一只猫和一只狗，他们在听到指令后要向前跑 10 米。

### 2.2 一个学员的实现

基于上面的任务，我的一个私教学员如下实现：

```python
dog_x = 0
cat_x = 0


def dog_move():
    dog_x = dog_x + 10


def cat_move():
    cat_x = cat_x + 10


user_input = input('输入指令:')

if user_input == 'move':
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
    dog_move()
    cat_move()
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
```

大家一起来看看，是否正确？如果不正确，哪里不正确？以及应该如何修改？——不正确！

上面的代码运行，会出现如下报错：

```python
输入指令:move
dog:0, cat:0
Traceback (most recent call last):
  File "/Users/huangjiabao/Book.py", line 17, in <module>
    dog_move()
  File "/Users/huangjiabao/Book.py", line 6, in dog_move
    dog_x = dog_x + 10
UnboundLocalError: local variable 'dog_x' referenced before assignment
```

认真看看上面的报错，看看怎么解决？提示一下：前面函数讲解时，已经讲解过了。

想必你已经花费足够时间思考，那我来揭晓答案。——**函数内部不能直接修改全局变量，如果要修改需要使用 global 关键词。**

基于这个关键点，你自己尝试修改一下。



### 2.3 一个「SscramblerR」学员的改进

我们再来看看，我另一位学员的改进和实现，看看存在什么问题？

```python
def dog_move():
    dog_x = 0
    dog_x = dog_x + 10


def cat_move():
    cat_x = 0
    cat_x = cat_x + 10


user_input = input('输入指令:')

if user_input == 'move':
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
    dog_move()
    cat_move()
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
```

其实乍眼一看没什么问题，但在小猫、小狗需要持续的听从指令向前跑时，就会产生问题。

- **问题一**：比如狗连续跑三次，猫连续跑两次时，跑的长度无法累积起来；
- **问题二**：在函数之外，无法直接输出每只动物向前跑的距离。并且现有代码会报错，需要借助其它语法实现；

> 方法方式错了，有可能会导致一直原地踏步，只有方法对了，我们才能一往无前！——MR 上课写下，日期：2025 年 7 月 31 日 15:42

#### 2.3.1 解决存在问题

对于**问题一、二**我们来看看具体问题以及解决方案，我们需要设立对照组。方便我们可以更好的发现问题，一起先来看看正确代码的情况。

```python
if user_input == 'move':
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
    dog_move()
    dog_move()
    dog_move()
    cat_move()
    cat_move()
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
```

从上面的代码来看，我们可以知道正确输出应该是：

```python
输入指令:move
dog:0, cat:0
dog:30, cat:20
```

但实际上 SscramblerR 学员的代码是不支持得到这样的结果，她的代码还不能直接运行，需要修改函数以及输出代码否则会报错。修改如下：

```python
def dog_move():
    dog_x = 0
    dog_x = dog_x + 10
    return dog_x


def cat_move():
    cat_x = 0
    cat_x = cat_x + 10
    return cat_x


user_input = input('输入指令:')

if user_input == 'move':
    # print('dog:{}, cat:{}'.format(dog_x, cat_x))  # 原本的输出无法使用，直接使用会报错，故而先注释掉；
    print('dog:0, cat:0')
    dog_move()
    dog_move()
    cat_move()
    print('dog:{}, cat:{}'.format(dog_move(), cat_move()))
```

上面是我竭尽所能，在保留 SscramblerR 学员代码的逻辑下，实现的输出补救。运行结果如下：

```python
输入指令:move
dog:0, cat:0
dog:10, cat:10
```

上面的代码中，我们 `dog_move()`、`cat_move()` 函数各执行了 3、2 次。但实际最后得到的结果，只是 10。

先说结论：不论执行了多少次 `dog_x`、`cat_x` 永远为 10。（不论它们多努力，永远在原地。）

为什么这么说呢？好好思考一下，然后接着往下阅读。

思考的突破口在函数代码中：

```python
def dog_move():
    dog_x = 0
    dog_x = dog_x + 10
    return dog_x


def cat_move():
    cat_x = 0
    cat_x = cat_x + 10
    return cat_x
```

用大脑运行上面的函数代码，可知：在函数每次调用时，变量 `dog_x`、`cat_x` 永远被赋值为 0。——故而：无法实现狗、猫的距离的累积。

如果要实现“正常的累加”，需要如下实现：（很多方法，自己多多思考）

```python {18-23}
def dog_move():
    dog_x = 0
    dog_x = dog_x + 10
    return dog_x


def cat_move():
    cat_x = 0
    cat_x = cat_x + 10
    return cat_x


user_input = input('输入指令:')

if user_input == 'move':
    # print('dog:{}, cat:{}'.format(dog_x, cat_x))  # 原本的输出无法使用，直接使用会报错，故而先注释掉；
    print('dog:0, cat:0')
    result_dog = dog_move()
    result_dog += dog_move()
    result_dog += dog_move()
    result_cat = cat_move()
    result_cat += cat_move()
    print('dog:{}, cat:{}'.format(result_dog, result_cat))
```

这样上面的代码运行才可以正确：

```python
输入指令:move
dog:0, cat:0
dog:30, cat:20
```

这样前面的问题一和问题二，全部解决了。

### 2.4 正确的解决方法

接下来，我们来编写这两个函数。使代码实现更优雅，代码实现如下：

```python
dog_x = 0
cat_x = 0


def dog_move():
    global dog_x  # 为什么要加上 global？因为 dog_x 是全局变量，如果不加上 global，函数内的 dog_x 会被视为局部变量，也无法修改全局变量的值
    dog_x = dog_x + 10


def cat_move():
    global cat_x
    cat_x = cat_x + 10


user_input = input('输入指令:')

if user_input == 'move':
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
    dog_move()
    cat_move()
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
```

**注意**：在阅读的过程当中，你要按我的指导来并且思路也要跟着来。

现在，把上面的代码敲一遍。敲完之后，也先别急着往下阅读。先思考和阅读一下上面的代码，看看功能、语法都能理解吗。能理解，则继续。

想必你已经理解了上面的代码，接下来请你再添加一只动物：大象，也是听到指令后要向前跑 10 米。

**注意**：不要机械的编写代码，而是要好好的感受一下，写这个代码过程中有什么**情绪**。这个感受，对于后续面向对象的理解很有帮助。

```python
dog_x = 0
cat_x = 0
elephant = 0


def dog_move():
    global dog_x  # 为什么要加上 global？因为 dog_x 是全局变量，如果不加上 global，函数内的 dog_x 会被视为局部变量，也无法修改全局变量的值
    dog_x = dog_x + 10


def cat_move():
    global cat_x
    cat_x = cat_x + 10


def elephant_move():
    global elephant
    elephant = elephant + 10


user_input = input('输入指令:')

if user_input == 'move':
    print('dog:{}, cat:{}, elephant:{}'.format(dog_x, cat_x, elephant))
    dog_move()
    cat_move()
    elephant_move()
    print('dog:{}, cat:{}, elephant:{}'.format(dog_x, cat_x, elephant))
```

敲完**大象**的代码后，你有没有感觉什么？如果你有什么感觉或者感受，马上拿支笔或者用电脑写注释，把感受写下来！

如果没有感受，你再添加：蚂蚁、蛇、鸟、乌龟等动物，直到有感觉为止！（观察、感受）

如果有感受，可以在评论区写出来。没有感受继续阅读：我们上面定义了三个相似的函数，功能一样，只有什么不一样？——变量名称不一样。

是不是感觉太多重复了，你有可能此时觉得没必要创建这么多函数。但是我举个例子你就明白了，比如我们开发了一个围棋对弈的程序，支持用户注册，每个用户注册都要填写用户名、手机号、密码。那是不是意味着我们都要为每个用户创建一个函数来存储呢？

```python
# 我们现在有三个用户要注册，每个用户都要填写用户名、手机号、密码
# 如果我们不优化代码，那可能会像下面这样写：

def register_user1():
    username1 = input("请输入用户1的用户名：")
    phone1 = input("请输入用户1的手机号：")
    password1 = input("请输入用户1的密码：")
    print("用户1注册成功！用户名：{}，手机号：{}".format(username1, phone1))


def register_user2():
    username2 = input("请输入用户2的用户名：")
    phone2 = input("请输入用户2的手机号：")
    password2 = input("请输入用户2的密码：")
    print("用户2注册成功！用户名：{}，手机号：{}".format(username2, phone2))


def register_user3():
    username3 = input("请输入用户3的用户名：")
    phone3 = input("请输入用户3的手机号：")
    password3 = input("请输入用户3的密码：")
    print("用户3注册成功！用户名：{}，手机号：{}".format(username3, phone3))


# 现在我们要依次注册这三个用户
register_user1()
register_user2()
register_user3()
```

所以，要是为每个用户都来一个类似的行数。那代码是不是会变成“屎”一样的山呢？——答案想必你聊熟于心（肯定会变成屎山的）

我们接着回到一开始的动物向前移动的例子，我们一共写了三只动物的移动函数：`dog_move()`、`cat_move()`、`elephant_move()`。并且每个函数都做着几乎一样的事情，只是变量名不同。虽然目前动物不多，但如果我们要添加更多动物，比如兔子、老虎、熊猫……你会发现代码会迅速变得臃肿、重复，维护起来很麻烦。

**思考一下**：有没有更优雅的方式来管理动物的位置？

我们可以把这些“重复”的结构统一管理起来，例如：我们把所有动物的位置，放进一个**统一的容器**里，比如用一个字典来表示。一起来看看下面的代码。

```python
positions = {
    "dog": 0,
    "cat": 0,
    "elephant": 0
}
```

那么至少，这样的代码会比原本的简洁一些。看看下面的代码效果：

```python
positions = {
    "dog": 0,
    "cat": 0,
    "elephant": 0
}


def dog_move():
    global positions
    positions['dog'] = positions['dog'] + 10


def cat_move():
    global positions
    positions['cat'] = positions['cat'] + 10


def elephant_move():
    global positions
    positions['elephant'] = positions['elephant'] + 10


user_input = input('输入指令:')

if user_input == 'move':
    print('dog:{}, cat:{}, elephant:{}'.format(positions['dog'], positions['cat'], positions['elephant']))
    dog_move()
    cat_move()
    elephant_move()
    print('dog:{}, cat:{}, elephant:{}'.format(positions['dog'], positions['cat'], positions['elephant']))
```

运行之后，输出如下：

```python
输入指令:move
dog:0, cat:0, elephant:0
dog:10, cat:10, elephant:10
```

函数还是一如既往的更“屎”一样，但是动物的数据结构化了。

到此，我们来稍微总结一下：

1. 相同点：每个函数都是相同的功能，结构都是一样的；
2. 不同点：只有变量名不一样；

那么对于相同功能和相同的结构，是不是就可以说是：相同相似的属性，那么就可以把上面写的多个函数（`dog_move()`、`cat_move()`、`elephant_move()`）都是视为同一个类。可以叫动物类（Animal），只要属于这个动物类都可以接收指令往前跑。

## 3. 一个例子：面向对象的方法

### 3.1 面向对象代码基础

接下来，我们就要使用面向对象的方法来实现前面动物听到指令就往前跑的功能。

编写如下代码：

```python
class Animal():
    def __init__(self):
        self.x = 0

    def move(self):
        self.x = self.x + 10

dog = Animal()
cat = Animal()

user_input = input('输入指令:')

if user_input == 'move':
    dog.move()
    cat.move()
    print('Dog position:', dog.x)
    print('Cat position:', cat.x)
```

参照着这段代码，我先来简单解释几个概念。

1. 类：一群有着相似性的事物的集合，这里对应 Python 的 class。
2. 对象：集合中的一个事物，这里对应由 class 生成的某一个 object，比如代码中的 dog 或 cat。（其实就是实例）
3. 属性：对象的某个静态特征，比如上述代码中的 x。
4. 函数：对象（实例）的某个动态能力，比如上述代码中的 `move()` 函数。

接下来，看下面的图比较直观一点，能看到每个部分代表什么：

![](https://blog.images.bornforthis.cn/docs-images/sha256/fe/febabe044897ff0332d9aa1e35fa2a48471e59f5a990e99c26b9b83970cb717c.png)



当然，这样的说法既不严谨，也不充分，但如果你对面向对象编程完全不了解，它们可以让你迅速有一个直观的了解。

这里我想多说两句。回想起当年参加数学竞赛时，我曾和一个大佬交流数学的学习，我清楚记得我们对数学有着相似的观点：很多数学概念非常抽象，如果纯粹从数理逻辑而不是更高的角度去解题，很容易陷入僵局；而具体、直观的想象和类比，才是迅速打开数学大门的钥匙。虽然这些想象和类比不严谨也不充分，很多时候甚至是错误或者异想天开的，但它们确实能帮我们快速找到正确的大门。

就像很多人都有过的一个疑惑，“学霸是怎样想到这个答案的？”。德国数学家克莱因曾说过，“推进数学的，主要是那些有卓越直觉的人，而不是以严格的证明方法见长的人。”编程世界同样如此，如果你不满足于只做一个 CRUD“码农”，而是想成为一个优秀的工程师，那就一定要积极锻炼直觉思考和快速类比的能力，尤其是在找不到 bug 的时候。这才是编程学习中能给人最快进步的方法和路径。

言归正传，继续回到我们的主题，还是通过刚刚那段代码，我想再给类下一个更为严谨的定义。

**类，一群有着相同属性和函数的对象的集合。**

### 3.2 `__init__(self)` 函数

接下来，我们来具体解读刚刚这段代码。为了方便你的阅读学习，我把它重新放在了这段文字下方。

```python
class Animal():
    def __init__(self):
        self.x = 0

    def move(self):
        self.x = self.x + 10

dog = Animal()
cat = Animal()

user_input = input('输入指令:')

if user_input == 'move':
    dog.move()
    cat.move()
    print('Dog position:', dog.x)
    print('Cat position:', cat.x)
```

可以看到，`class Animal` 定义了 Animal 类，再往下能看到它有两个函数，这连个函数即为 Animal 类的两个函数。

其中，**init** 表示构造函数，含义则是：**在一个对象生成时会被自动调用的函数**。这么讲比较抽象，我们来结合下面的代码来实现：

```python
class Animal():
    def __init__(self):
        print('init function called')

dog = Animal()
```

运行上面代码后会自动输出：

```python
Nice to meet you!
```

我们能看到， `dog = Animal()` 这一行代码被执行的时候，`'init function called'` 字符串会被打印出来。

你有没有发现，我们从始至终都没有调用 `init` 函数！在类 Animal 被实例化为 dog 时，会自动被调用。

**注意**：你需要做到自己编写代码和运行一下，这样才能理解！

再举一些现实的例子，因为不确定你会因为哪个例子理解，我这里就多列几个：

1. **例子一**：我们创建了一个游戏角色，每个角色一出生（也就是被创建的时候），就会自动拥有一些“天赋技能”。这些技能不是你手动添加的，而是角色一出生系统就帮你准备好了。

    在 Python 中，`__init__` 函数就像这个“天赋赋予系统”，当你创建一个对象（实例化）的时候，它会自动帮你设置好对象该有的初始状态。

    ```python
    class GameCharacter:
        def __init__(self):
            print("角色已创建，天赋技能已激活！")
    
    hero = GameCharacter()
    ```

    运行这段代码，控制台会自动输出：

    ```python
    角色已创建，天赋技能已激活！
    ```

    我们没有显式地调用 `__init__()`，但它还是被执行了。这就是 `__init__` 函数自动调用的效果。

    这个机制非常重要——它可以让我们在对象被创建时，自动执行一些初始化操作，比如设置默认值、加载数据、建立连接等。

2. ~~例子二：我们人类在一诞生的时候，没人教我们怎么呼吸、心跳，这些都是会自动拥有且自动执行（开始的）。~~

3. **例子二**：就像我们人类在一诞生的时候，没人教我们怎么呼吸、怎么让心脏跳动——这些能力是与生俱来的，是“出生那一刻就自动开始执行”的。

    Python 中的 `__init__` 方法（函数），就像“呼吸”和“心跳”一样。当我们创建一个新的对象（生命、实例化）时，它会自动执行，不需要我们手动去调用。

    ```python
    class Human:
        def __init__(self):
            print("一个新生命诞生了，正在自动启动呼吸和心跳系统。")
    
    baby = Human()
    ```

    输出结果是：

    ```python
    一个新生命诞生了，正在自动启动呼吸和心跳系统。
    ```

    你有没有注意？我们并没有调用 `__init__()`，但它还是被执行了。为什么？因为我们创建了一个新的 `Human()` 对象（实例化）baby，Python 就会自动调用 `__init__()`，帮我们把“出生后应该启动的机制”都安排好。

    所以你可以把 `__init__` 想象成“对象出生时的大脑指令中心”——只要对象（实例化）一被创建，它就会第一时间执行你写好的初始化内容，比如设定初始状态、创建属性，或者像我们上面例子一样，打印一句欢迎词。

讲完初始化函数 `__init__` ，我们接下来来讲 `move()` 函数，`move()` 则为类的普通函数，我们调用它们来对对象的属性做一些事情。

### 3.3 `move(self)` 函数

`move(self)` 函数就是和我们前面讲的基本函数意思、功能是一样的，只不过这里是属于类里面的功能函数。没有什么要讲的，重点去看前一篇的。

### 3.4 类当中的 self

在上面的代码中，你如果仔细观察的话会发现：在类内的每个函数中，都有写 self 参数。这个地方的知识点比较抽象，一定要细细思考和阅读。就算我不慎重复论述，你也不要疑惑，一切的一切都是为了让你学会。

我把代码贴出来，方便阅读学习：

```python
class Animal():
    def __init__(self):
        self.x = 0

    def move(self):
        self.x = self.x + 10

dog = Animal()
cat = Animal()

user_input = input('输入指令:')

if user_input == 'move':
    dog.move()
    cat.move()
    print('Dog position:', dog.x)
    print('Cat position:', cat.x)
```

我一步步带你理解，然后再用专业的角度来解释。（不专业的才是你学会的契机）

#### 3.4.1 非正式讲解1

self 就是代表 `Animal()`，而当 `Animal()` 实例化了 dog（也就是 `Animal()` 赋值给变量 dog：`dog = Animal()`），则可以得到 dog 就是代表 `Animal()`，最终：self 就代表 dog。故而可以得到：

1. **结论1**：`self.x ==> Animal().x ==> dog.x `；

2. **结论2**：`Animal()` 中的函数可以写成：`Animal().move()` ，那么实例化之后 dog 就代表 `Animal()`，可以得到：`dog.move()` 调用函数。

    > 通过学员 SscramblerR 上课时，我深刻意识到**结论 2**需要稍微扩展说一下。因为对于小白来说，这个知识点还是很抽象的。
    >
    > 先举个例子🌰：一所高级中学中《斩神》，有个学生的姓名出现重名的——林七夜。出现在三个不同的班级，分别是：高一三班的林七夜、高二一班的林七夜、高三三班的林七夜。恰好，你的好兄弟就是其中一个。
    >
    > 这个时候，你的另一个好朋友（赵空城），要找你的兄弟林七夜。——该怎么找？
    >
    > 可以直接在教学楼漫无目的的喊：林七夜吗？肯定不行，这样不仅仅找不到，保安还会把他拉走。好好思考一下，你实际会怎么找。我们肯定得是叫：高一三班的林七夜出来一下，你兄弟让我找你。（别质疑，就是这样。）
    >
    > 自此，例子讲完！
    >
    > 接下来，我们回到代码。要类中的函数，会怎么描述？——肯定是描述：`Animal()` **类中的** `move()` 函数。所以，在 Python 中我们会抽象成：`Animal().move()` 。（“`类中的`”——>“`.`”）
    >
    > 所以当实例化：`dog = Animal()` 时，dog 代表 `Animal()` ，故而可以推导出：`Animal().move() ——> dog.move()`。
    >
    > 🗓️ 添加日期：2025-06-08 19:19:54

3. **结论3**：类里面每个函数都要加上 self 代表都属于类的一员。就如同家族族徽，代表都属于家族的一员。

4. **结论4**：有了 self 这个族徽，意味着家族的资源都可以互相使用。例如：家族的百万围棋棋盘，所有家族成员都可以直接使用。如果不是同一家族的，就得看情况了。

    所以，当类里面存在的变量，（包括各个函数的变量）如果在变量前面添加 self（`self.x`），则在类中，所有函数都可以随时调用变量 `self.x`。（后续会有代码演示）【[#_9-3-函数之间的局部变量为何不能共用](#_9-3-函数之间的局部变量为何不能共用)】

    - 在常规函数中函数，每个函数是独立的。函数和函数之间的变量，不能互相调用。除非使用全局变量 global 来解决；

    - 在类中的函数同理，也是独立的。函数与函数之间的变量依然不能直接共用，需要借助 self 来实现类里面函数变量共用。这里给出一个类中没有使用 self 创建变量，导致无法互相调用的例子。后文会演示带 self 的变量，互相调用。【[#_9-5-类内部变量各个函数随意调用的情况-实例变量](#_9-5-类内部变量各个函数随意调用的情况-实例变量)】

        ```python
        class Demo:
            def function_1(self):
                string = "Hello bornforthis.cn"
                print(string)
        
            def function_2(self):
                print(string)
        
        demo = Demo()
        demo.function_1()
        # demo.function_2()  # 报错：NameError: name 'string' is not defined
        ```

        

#### 3.4.2 非正式讲解2

1. 换句话说，self 中文代表“自己”的意思，而 self 又存在于类 `Animal()` 当中。所以 “self 自己”就代表 `Animal()` 。
2. 又因为：`Animal()` 赋值给变量 dog（实例化），所以 dog 代表 `Animal()` 这个类。
3. 接着我们就可以推出：`self == Animal() == dog`，故而 `self.x` 等价于 `Animal().x` 接着等价于 `dog.x`。
4. 我们说 `Animal()` 的函数 `move()`，就可以写成 `Animal().move()` （中间的点“`.`”可以理解成“的”），有因为类 `Animal()` 赋值给 dog，所以可以得出：`dog.move()`。

通过上面两个非正式讲解，如果你全部理解的话，那么后续讲解 self 部分你不用细究和强迫读懂，直接速读即可。毕竟正式的表达不好理解，不过我还是得稍微写一下。

#### 3.4.3 注意

**在类里面的函数，第一个参数都必须写 self！**

![](https://blog.images.bornforthis.cn/docs-images/sha256/d8/d880ee7f57691930269fcba95c46a95635dbaee2a641b20981b5780e3a15e14b.png)



#### 3.4.4 正式讲解：什么是 self？（细读）

在 Python 中，当我们定义一个类的方法时，第一个参数通常命名为 **self**。这并不是 Python 的关键字，而是一种编程约定，用来表示当前实例对象。每当我们调用一个对象的方法时，Python 会自动将这个对象传递给方法中的第一个参数，这样我们就可以在方法内部访问该对象的属性和其他方法。

#### 3.4.5 为什么需要 self？（速读）

1. **明确指定对象实例**：在其他面向对象的语言（例如 Java 或 C++）中，通常会有一个隐式的 `this` 指针来代表当前对象。但在 Python 中，没有隐式传递对象引用的机制，而是需要程序员显式地声明并使用 **self**。这种方式让代码更加直观，所有对当前对象的引用都清晰可见。
2. **提高代码的可读性**：显式地使用 **self** 可以帮助初学者更好地理解：在调用方法时，方法内部究竟操作的是哪个对象。它提醒我们：方法内部所有对属性或其他方法的调用，实际上都是在操作当前实例的数据。
3. **方便方法调用**：因为 **self** 是显式的参数，Python 可以灵活地处理方法调用。你可以将方法绑定到不同的对象上，而不需要额外的内部机制来隐式传递对象引用，这在设计复杂程序时提供了更高的灵活性。

#### 3.4.6 生活中的例子：班级中的学生（选读）

想象一下，一个班级中有许多学生。每个学生都有自己的姓名、年龄和特点。如果老师想了解某个学生的信息，他会直接问那位学生：“你叫什么名字？”

- **学生的自我介绍：** 每个学生在回答问题时都会说“我叫李华”或者“我叫小明”。这里的“我”就相当于这个学生自己。
- **学生的独立性：** 即使班上有许多学生，每个学生都是独立的个体，他们各自有自己的名字和特性。在询问时，老师需要明确知道在说哪个学生的信息。

在 Python 中，**self** 就起到类似“我”的作用。当我们调用某个对象的方法时，self 会自动指向那个具体的对象实例，就像当你问某个学生“你叫什么名字？”时，他会用“我”来代表自己，从而给出正确的回答。

#### 3.4.7 self 省字版小结

::: tip 添加日期 2025-06-09 08:26:06

:::

self 存在的原因：

- 原因一：代表自己（具体的看前面的具体讲解）；

- 原因二：资源共享，没有 self 不能实现资源共享；（也就是：没有 self 类函数之间，变量不能直接互相使用。）

    > Note：没有 self，函数和函数之间是独立存在的，不能互相使用函数之间的变量、数据。

#### 3.4.8 self 的本质：方法的第一个参数（细读）

```python
class Animal():
    def __init__(self):
        self.x = 0

    def move(self):
        self.x = self.x + 10

dog = Animal()
cat = Animal()

user_input = input('输入指令:')

if user_input == 'move':
    dog.move()
    cat.move()
    print('Dog position:', dog.x)
    print('Cat position:', cat.x)
```

当你调用 `dog.move()` 时，Python 实际上会自动将 `dog` 这个对象作为第一个参数传递给 `move` 方法，所以在方法内部，**self** 就代表 `dog`。这也是为什么我们总是能在方法内部通过 **self** 来访问和修改对象的属性。

**提示**：尝试在方法内部打印一下 `self`，你会看到它输出的是该对象的内存地址或其它标识信息，这可以帮助你更直观地理解 **self** 代表的是当前实例对象。代码如下：

```python
class Animal():
    def __init__(self):
        self.x = 0
        print(f"self address: {self}")


dog = Animal()
print(f"dog address: {dog}")
```

运行后输出如下：

```python
self address: <__main__.Animal object at 0x1097e0dd0>
dog address: <__main__.Animal object at 0x1097e0dd0>
```

从上面的输出可知，最终两个输出的地址是相同的，代表 **self 就是代表当前的实例化对象**。



## 4. `__init__` 初始化参数

### 4.1 背景

现实生活中，小孩在出生之前。大人们都会做一件什么事情？

取名字！取名字这件事，是在宝宝出生之前就要提前准备好的。当小孩一出生，就要及时办理出生证。办理出生证就需要想好的名字，而一个人的名字很重要。这时有奇思妙想的学生就会说：老师，你怎么知道性别？咦，我当然不知道了。但是我可以提前想好男宝和女宝的姓名不就行了。

言归正传，有时候我们在类的初始化时，我们就想给实例化对象取一个名称（昵称）。就比如上面所说的取名字或者你玩游戏之前都要去一个昵称才能开始游戏吧。

再比如：你注册微信也要一个微信号、微信昵称注册 QQ 就要设置 QQ 昵称、头像吧。这些都是在一开始初始化（实例化）的时候就要填写的。

### 4.2 设置单个参数

那么在面向对象中，我们如何达到呢？看看如下代码：

```python
# 在现实生活中，当宝宝出生之前，大人们就会为宝宝取名字，
# 并且准备好出生证明等信息。
# 在面向对象中，我们通过 __init__ 方法初始化实例时，就相当于在出生之前
# 为小孩准备好了“名字”（以及其他必要的信息）。

class Baby:
    def __init__(self, name):
        """
        初始化宝宝对象时，必须提供名字，
        这就像是大人提前为宝宝取好名字，并在必要时办理出生证明。
        """
        self.name = name      # 宝宝的名字，相当于出生证明中的名字

    def introduce(self):
        """
        宝宝的自我介绍方法，展示初始化时设置的属性。
        """
        print(f"大家好，我叫 {self.name}。")

# 宝宝出生前，大人已经为他取好了名字
baby1 = Baby(name="棠棠")  # 实例化
baby1.introduce()  # 输出: 大家好，我叫 棠棠。
```

从上面的代码就可以知道，我们如果想要在实例化对象的时，想要添加参数，只需要 `__init__` 函数的 self 后面添加参数即可。

接着，我们讲一下为什么要把用户传入的参数进行添加 self 赋值操作：`self.name = name`。

::: tip `__init__()` 函数参数小结

```python
baby1 = Baby(name="棠棠")  # __init__ 函数的所有参数，全部在类的实例化时传入
```

:::

### 4.4 我们为什么要写 `self.xxx = xxx`？背后到底发生了什么？

**小提示**：白话讲解为了让你理解，总结性讲解为了让你专业。

#### 4.4.1 白话讲解

我先打白话讲解一下，然后再总结性的讲解一下。下面的讲解中，我们都使用 `self.name = name` 为例来讲解。

在 `__init__` 方法（函数）中，你会从上面的代码中发现一个疑问点：为什么用户传入的参数不直接使用，还要创建一个 `self.变量名 = 参数` 的操作。

就例如以下几个问题：

1. **问题一**：为什么传进参数 name，还要把 name 赋值给 `self.name`？
2. **问题二**：为什么不直接 `name = name` 还要用 self？
3. **问题三**：为什么“点”后面的变量名称和参数同名，不同名可以吗？

上面三个问题，到底意欲何为呢。我们来一一解答这三个问题。

1. **问题一解答**：通过初始化函数传进来的参数，是不是得找地方存放？就像你准备开设围棋大师班，在正式开设之前。从外地引入了围棋棋具，是不是需要在开班之前要找地方存放。我们类通过实例化（初始化）传入的参数也需要找地方存放，所以需要使用 `self.name = name` 来存放，至于为什么加 self 下一个问题会解答。

2. **问题二解答**：直接使用 `name = name` 可以，但是就仅限于初始化函数 `__init__` 自己使用，不仅仅其它函数无法使用，类的实例化对象也无法调用该参数变量（属性值）。看下面的代码，我们没有使用 self 来赋值：

    ```python
    class Baby:
        def __init__(self, name):
            name = name
            print(f"init name: {name}")
    
        def introduce(self):
            print(f"大家好，我叫 {name}。")
    
    baby1 = Baby(name="棠棠")  # 实例化
    print(baby1.name)
    baby1.introduce()
    ```

    上面的代码运行之后，是会报错的。有两个报错点，有一个报错还没来的及出来。报错如下：

    ```python
    init name: 棠棠
    Traceback (most recent call last):
      File "/Users/huangjiabao/bornforthis.cn/demo.py", line 15, in <module>
        print(baby1.name)
              ^^^^^^^^^^
    AttributeError: 'Baby' object has no attribute 'name'
    ```

    报错点1：代码 `baby1.name` 无法调用 name 属性值；

    报错点2：除 init 函数外，其它函数（introduce）无法使用用户传入的初始化参数。（init 初始化 `print(f"init name: {name}")` 正常输出）

    所以，使用 self 可以解决上面的两个报错点。

    ```python
    class Baby:
        def __init__(self, name):
            self.name = name
            print(f"init name: {self.name}")
    
        def introduce(self):
            print(f"大家好，我叫 {self.name}。")
    
    baby1 = Baby(name="棠棠")  # 实例化
    print(baby1.name)  # 输出: 棠棠
    baby1.introduce()  # 输出: 大家好，我叫 棠棠。
    ```

3. **问题三解答**：至于为什么要使用同名这个很简单，因为：懒。你叫其它变量名可以，但是你还得思考其它有没有合适的变量名，毕竟我们需要的变量名是：见名知意。故而：既然参数名是想好的，索性直接基于参数名加上 self 就可以了。代码示例：

    ```python
    class Baby:
        def __init__(self, name):
            self.name = name
            self.username = name
            print(f"init name: {self.name}, username: {self.username}")
    
    baby1 = Baby(name="棠棠")
    ```

    

#### 4.4.2 总结性讲解

在 `__init__` 方法中，我们通常会把用户传入的参数赋值给对象的属性，例如 `self.name = name`。这样做有几个主要原因：

1. **保存信息以便后续使用**：传入的参数 `name` 在 `__init__` 方法内仅是一个局部变量，作用域仅限于这个方法内部。如果不将其赋值给 `self.name`，当 `__init__` 执行完毕后，这个值就会丢失。而通过 `self.name = name`，我们将这个值保存到了对象的属性中，这样对象的其他方法就可以随时访问和使用这个信息，就像现实中宝宝的名字会被一直记录在出生证明上一样。
2. **实现对象独立性**：每个对象都有自己的状态和数据。当我们用 `self.name = name` 时，每个实例都会拥有自己的 `name` 属性，这样不同对象之间的数据互不干扰。比如两个宝宝虽然可能取相同的名字，但它们是两个独立的个体，彼此之间不会混淆。
3. **提高代码的清晰性和可维护性**：显式地将参数赋值给实例属性可以让代码更直观，读者一眼就能看出这个对象有哪些属性，并且这些属性是在创建对象时被初始化的。这种写法也符合 Python 的编程习惯，使代码更具可读性。

下面通过一个代码示例来说明这一点：

```python
# 模拟现实中为宝宝取名字和准备出生证明的过程
class Baby:
    def __init__(self, name):
        """
        当宝宝出生之前，大人们已经为他取好了名字。
        这里的 __init__ 方法相当于在宝宝出生前给他准备好所有必要的信息，
        而 self.name = name 就像是把这个名字写入了宝宝的出生证明中。
        """
        # 将传入的 name 参数赋值给当前对象的属性 self.name
        self.name = name

    def introduce(self):
        """
        宝宝的自我介绍方法，用来展示初始化时设置的信息。
        这里使用 self.name 来引用对象保存的名字信息。
        """
        print(f"大家好，我叫 {self.name}。")


# 实例化对象时传入参数
baby1 = Baby("小明")
baby2 = Baby("小红")

# 分别调用 introduce 方法，展示对象中保存的信息
baby1.introduce()  # 输出: 大家好，我叫 小明。
baby2.introduce()  # 输出: 大家好，我叫 小红。
```

**总结：**

- **局部变量与实例属性的区别：** 在 `__init__` 方法中，`name` 是一个局部变量，而 `self.name` 是实例的属性。只有将 `name` 赋值给 `self.name`，我们才能在对象的其他方法中使用这个值。
- **对象的持久状态：** `self.name = name` 确保了对象在其生命周期内能够持续保留这个信息，就像宝宝的名字一直伴随着他成长一样。
- **提高代码清晰度：** 显式赋值让代码更加易于理解，明确标识出每个对象所拥有的属性和状态。

这种做法不仅符合 Python 的面向对象编程习惯，还能帮助初学者更好地理解对象的概念和数据的持久化存储。

### 4.5 设定参数后，实例化时不给会怎么样？

如果在类的初始化函数 `__init__`中设定了参数，则必须在类的实例化时给出参数的值，否则代码会报错。一起看看下面的代码示例：

```python
baby1 = Baby()
```

没有给出具体的参数，运行后会报错：

```python
Traceback (most recent call last):
  File "/Users/huangjiabao/bornforthis.cn/demo.py", line 21, in <module>
    baby1 = Baby()
            ^^^^^^
TypeError: Baby.__init__() missing 1 required positional argument: 'name'
```

所以，如果给初始化函数设置了参数，就必须在实例化时给参数赋值。除非我们给参数设置了默认值，后续会讲解到。

### 4.6 设置多个参数

上面的类还不完善，还需要考虑宝宝的性别。那么在类当中如果有多个初始化参数，和普通函数设置参数一样：直接用逗号分隔多个参数。看看下面的代码示例：

```python
class Baby:
    def __init__(self, name, gender):
        """
        初始化宝宝对象时，必须提供名字，性别。
        这就像是大人提前为宝宝取好名字，并在必要时办理出生证明。
        """
        self.name = name      # 宝宝的名字，相当于出生证明中的名字
        self.gender = gender  # 宝宝的性别，可能提前确定

    def introduce(self):
        """
        宝宝的自我介绍方法，展示初始化时设置的属性。
        """
        print(f"大家好，我叫 {self.name}，我是一个 {self.gender} 宝宝。")


# 模拟场景1：宝宝出生前，大人已经为他取好了名字和性别信息
baby1 = Baby(name="棠棠", gender="女")
baby1.introduce()  # 输出: 大家好，我叫 棠棠，我是一个 女 宝宝。

# 模拟场景2：宝宝出生前，大人已经为她取好了名字和性别信息
baby2 = Baby(name="锦奕", gender="男")
baby2.introduce()  # 输出: 大家好，我叫 锦奕，我是一个 男 宝宝。
```

### 4.7 设置默认值

上面的类有个地方设计的不好，想想是什么地方？

性别，我们怎么可能可以自己设定和提前知道呢。（提前知道是违法的呢）有时候性别不知道，所以类初始化时 gender 应该是一个可选项。也就是：类需要支持用户不填性别可以正常使用。

这时，我们就需要设置默认值。不过这里设置默认值和函数设置默认值是一致的：

1. 我们如果一开始设置了默认值，那么该参数后面的参数。都要设置默认值，否则会报错。

    ```python
    class Baby:
        def __init__(self, name='小悦', gender='男'):
            print(f"大家好，我叫 {name}，我是一个 {gender} 宝宝。")
    
    baby1 = Baby()
    ```

    运行后输出：

    ```python
    大家好，我叫 小悦，我是一个 男 宝宝。
    ```

    我们来试试前面设置默认值，后面不设默认值：

    ```python
    class Baby:
        def __init__(self, name='小悦', gender):
            print(f"大家好，我叫 {name}，我是一个 {gender} 宝宝。")
    
    baby1 = Baby('小明', '男')  # 就算你实例化传入数据，也无济于事！
    ```

    运行后会报错：

    ```python
      File "/Users/huangjiabao/bornforthis.cn/demo.py", line 2
        def __init__(self, name='小悦', gender):
                                      ^^^^^^
    SyntaxError: non-default argument follows default argument
    ```

2. 如果一开始没有设置默认值，但是后续开始设置，那么后续设置的默认值都要一直设置。不能省略，否则会报错。

    ```python
    class Baby:
        def __init__(self, name, gender=None, age=None, weight=None):
            self.name = name
            self.gender = gender
            self.age = age
            self.weight = weight
    
    baby1 = Baby()
    ```

    运行后一切正常，不会有任何报错。如果此时把参数 age 之后的参数不设置默认值，则会报错：

    ```python
    class Baby:
        def __init__(self, name, gender=None, age=None, weight):
            self.name = name
            self.gender = gender
            self.age = age
            self.weight = weight
    
    baby1 = Baby()
    ```

    此时运行代码会直接报错：

    ```python
      File "/Users/huangjiabao/bornforthis.cn/demo.py", line 2
        def __init__(self, name, gender=None, age=None, weight):
                                                        ^^^^^^
    SyntaxError: non-default argument follows default argument
    ```

所以，我们最终的 Baby 类可以编写成这样就会比较合适。性别是可选的：

```python
class Baby:
    def __init__(self, name, gender=None):
        """
        初始化宝宝对象时，必须提供名字，
        性别可以提前指定，也可以在宝宝出生时再确定。
        这就像是大人提前为宝宝取好名字，并在必要时办理出生证明。
        """
        self.name = name      # 宝宝的名字，相当于出生证明中的名字
        self.gender = gender  # 宝宝的性别，可能提前确定，也可能待定

    def introduce(self):
        """
        宝宝的自我介绍方法，展示初始化时设置的属性。
        如果性别已知，则完整介绍；否则提示性别待定。
        """
        if self.gender:
            print(f"大家好，我叫 {self.name}，我是一个 {self.gender} 宝宝。")
        else:
            print(f"大家好，我叫 {self.name}，性别待定。")

# 模拟场景1：宝宝出生前，大人已经为他取好了名字和性别信息
baby1 = Baby(name="棠棠", gender="女")
baby1.introduce()  # 输出: 大家好，我叫 棠棠，我是一个 女 宝宝。

# 模拟场景2：宝宝出生前，大人已经为她取好了名字和性别信息
baby2 = Baby(name="锦奕", gender="男")
baby2.introduce()  # 输出: 大家好，我叫 锦奕，我是一个 男 宝宝。

# 模拟场景3：宝宝出生前，大人只取好了名字，性别待定
baby3 = Baby(name="宝宝")
baby3.introduce()  # 输出: 大家好，我叫 宝宝，性别待定。
```

::: tip 设置默认值小结

如果我们有设置默认值，当类的实例化有传入参数，则覆盖提前设置的默认值。反之，未传则使用默认值。

---

**SscramblerR 学员上课补充「2025-06-15 11:21:17」**

**思考一下**：为什么 `gender=None`，设置 None 比较合适呢？——因为性别你是没办法设置一个恰到好处的默认值的，我们设置成“男”不合适，设置成“女”也不合适，设置成 None 刚刚好。并且设置 None 便于后续的条件判断，设定成特定的值，不便于 if 条件判断。

另一个需要注意的点：设置为 None 时，在条件判断当中为 False，如果用户有传入 gender 这个参数，则只要有值在布尔运行 or 条件判断当中，都为 True。（除了用户传入 False、空数据除外）

写 `gender = False` 是否合适？如果设定的默认值是 False，意味着明确了默认数据。虽然功能上与原本的没有太大差别，但是会有歧义。——明明 gender 是想要代表性别，但是我们设置的默认值是 False，不符合对参数 gender 的预期。

——添加日期：2025-06-15 11:06:14

:::

## 5. 类实例化时：指定传参数和位置传参

其实，在前面的代码中已经演示过了。不过我还是单独讲解一下，类的传入参数的三种原则。

1. 全部不指定参数

    ```python
    baby1 = Baby('小红', '女', 2, 7.8)
    ```

2. 全部指定参数

    ```python
    baby1 = Baby(name='小红', gender='女', age=2, weight=7.8)
    ```

3. 部分指定参数，只能从前面不指定。后面一旦开始指定，后续都要指定。否则会报错，一起看看代码示例：

    ```python
    baby1 = Baby('小红', '女', age=2, weight=7.8)
    ```

    如果 age 后面不继续指定就会报错：

    ```python
    baby1 = Baby('小红', '女', age=2, 7.8)  # 报错如下：SyntaxError: positional argument follows keyword argument
    ```

最后，我来补充一个。我没讲不代表不存在或不支持，类实例化参数可以通过变量传递进去：

```python
name = input("Enter your name: ")
gender = input("Enter your gender: ")
age = input("Enter your age: ")
weight = float(input("Enter your weight: "))
baby1 = Baby(name, gender, age, weight)
baby2 = Baby(name=name, gender=gender, age=age, weight=weight)
```

## 6. 小试牛刀 1

### 6.1 宠物管理系统

**题目要求：** 请你用面向对象的方式编写一个宠物管理系统的雏形，完成以下功能：

1. **创建一个类 `Pet`**

    - 属性：

        - `name`（宠物名字，字符串）；

        - `age`（宠物年龄，整数）；

        - `species`（宠物种类，字符串，比如“狗”、“猫”）；

    - 方法：
        - `show_info()`：打印宠物的基本信息（格式自定义）；
        - `birthday()`：宠物过生日，年龄加 1，并打印“xxx 过生日啦，现在 xxx 岁了！”；

2. **编写主程序**

    - 创建 2 个不同的宠物对象（属性不同）；
    - 分别调用 `show_info()` 方法展示它们的基本信息；
    - 给其中一个宠物调用一次 `birthday()` 方法，并再次展示它的信息；

3. **运行示例（仅供参考）：**

    ```python
    小白 这只狗今年 2 岁。
    小黑 这只猫今年 3 岁。
    小白 过生日啦，现在 3 岁了！
    小白 这只狗今年 3 岁。
    小黑 这只猫今年 3 岁。
    ```

4. **代码实现：**

    ```python
    # 定义一个宠物类 Pet
    class Pet:
        # 构造方法（初始化方法），在创建对象时自动调用
        def __init__(self, name, age, species):
            # self 代表当前对象本身
            # 给对象绑定属性
            self.name = name        # 宠物名字
            self.age = age          # 宠物年龄
            self.species = species  # 宠物种类（如：狗、猫）
    
        # 定义一个方法，用来展示宠物的基本信息
        def show_info(self):
            # f-string 格式化输出
            print(f"{self.name} 这只{self.species}今年 {self.age} 岁。")
    
        # 定义一个方法，让宠物过生日
        def birthday(self):
            self.age += 1  # 年龄加 1
            print(f"{self.name} 过生日啦，现在 {self.age} 岁了！")
    
    
    # ------------------ 主程序部分 ------------------
    
    # 创建第一个宠物对象（小白，一只 2 岁的狗）
    pet1 = Pet("小白", 2, "狗")
    
    # 创建第二个宠物对象（小黑，一只 3 岁的猫）
    pet2 = Pet("小黑", 3, "猫")
    
    # 调用 show_info() 方法，展示宠物的基本信息
    pet1.show_info()  # 输出：小白 这只狗今年 2 岁。
    pet2.show_info()  # 输出：小黑 这只猫今年 3 岁。
    
    # 给小白过生日
    pet1.birthday()   # 输出：小白 过生日啦，现在 3 岁了！
    
    # 再次查看两只宠物的信息
    pet1.show_info()  # 输出：小白 这只狗今年 3 岁。
    pet2.show_info()  # 输出：小黑 这只猫今年 3 岁。
    ```



## 7. 类内部函数设置参数

### 7.1 设置单个函数

~~对于类内部的函数设置参数和初始化函数（init）语法一致：要在 self 之后添加参数即可，代码如下：~~

对于类内部的函数，设置参数的语法和初始化函数 `__init__` 是一致的：只需在 `self` 后面添加你需要的参数即可。下面是一个示例：

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self, times):
        print(f"{self.name} 汪" * times)

# 创建一个 Dog 实例
my_dog = Dog("小黑")

# 调用类内部的函数并传入参数
my_dog.bark(3)
```

运行结果：

```python
小黑 汪小黑 汪小黑 汪
```

在这个例子中：

- `__init__` 方法用于初始化对象，并接收一个参数 `name`。
- `bark` 是类中的另一个函数（也叫方法），它接受一个参数 `times`，用于指定狗叫的次数。
- 无论是 `__init__` 还是 `bark`，参数的定义方式都是：在 `self` 后面继续添加即可。

### 7.2 设置第二个参数

我们可以对 bark 函数再添加一个参数 newline，一起来看看：

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self, times, newline):
        for _ in range(times):
            if newline:
                print(f"{self.name} 汪")
            else:
                print(f"{self.name} 汪", end=" ")

# 创建一个 Dog 实例
my_dog = Dog("小黑")

# 调用 bark 函数，传入两个参数：叫3次，并每次换行
print("每次换行：")
my_dog.bark(3, True)

# 调用 bark 函数，传入两个参数：叫3次，但不换行
print("\n不换行：")
my_dog.bark(3, False)
```

运行结果如下：

```python
每次换行：
小黑 汪
小黑 汪
小黑 汪

不换行：
小黑 汪 小黑 汪 小黑 汪 
```

如果想要更多参数，就以此类推即可。但是需要注意：如果设置了参数，在用户调用时，必须传入参数，否则会报错！除非设置默认值，接下来会讲。



### 7.3 默认参数

其实类里面的函数设置默认参数，和基本函数设置是一样的。给参数设置默认值，这样在调用函数时可以选择性传入。设置默认值后，用户在调用函数时，可以选择性传入参数。

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self, times=1, newline=True):
        for _ in range(times):
            if newline:
                print(f"{self.name} 汪")
            else:
                print(f"{self.name} 汪", end=" ")

# 默认参数调用
print("默认只叫一次，并换行：")
my_dog = Dog("小白")
my_dog.bark()

print("\n叫两次但不换行：")
my_dog.bark(2, False)
```



### 7.4 小贴士

1. 类内部的函数（方法）可以定义多个参数，只需要按顺序写在 `self` 后面即可。

2. 调用方法时，也要按顺序传入对应的值。

3. 参数可以用来控制方法行为，使代码更灵活。
4. 类内部可以设置默认值，使参数变成可选。

## 8. 小试牛刀 2

### 8.1 银行账户管理系统（基础版）

**题目要求：** 请你使用面向对象的方式，设计一个简单的银行账户类，完成以下功能：

1. **创建一个类 `BankAccount`**
    - 属性：
        - `owner`（账户持有人姓名，字符串）；
        - `balance`（账户余额，浮点数，默认 0）；
    - 方法：
        - `show_balance()`：打印当前账户余额；
        - `deposit(amount)`：存钱到账户，金额必须大于 0，否则提示“存款金额必须大于 0”；
        - `withdraw(amount)`：取钱，金额必须大于 0 且不能超过当前余额，否则提示“余额不足或金额无效”；
2. **主程序**
    - 创建一个账户对象（姓名自定义，初始余额可以为 0）；
    - 进行一次存款操作（金额自定义）；
    - 进行一次取款操作（金额自定义）；
    - 最后显示账户余额；

3. **运行示例（仅供参考）：**

    ```python
    账户持有人：张三
    当前余额：￥0.0
    存入 ￥1000.0 成功！
    当前余额：￥1000.0
    取出 ￥500.0 成功！
    当前余额：￥500.0
    ```

4. **代码实现如下：**

    ```python
    # 定义一个银行账户类
    class BankAccount:
        # 构造方法（初始化账户）
        def __init__(self, owner, balance=0.0):
            self.owner = owner      # 账户持有人
            self.balance = balance  # 账户余额，默认为 0.0
    
        # 显示账户余额
        def show_balance(self):
            print(f"账户持有人：{self.owner}")
            print(f"当前余额：￥{self.balance}")
    
        # 存款方法
        def deposit(self, amount):
            # 判断存款金额是否大于 0
            if amount > 0:
                self.balance += amount  # 增加余额
                print(f"存入 ￥{amount} 成功！")
            else:
                print("存款金额必须大于 0。")
    
        # 取款方法
        def withdraw(self, amount):
            # 判断金额是否大于 0 且不超过余额
            if 0 < amount <= self.balance:
                self.balance -= amount  # 减少余额
                print(f"取出 ￥{amount} 成功！")
            else:
                print("余额不足或金额无效。")
    
    
    # ---------------- 主程序部分 ----------------
    
    # 创建一个账户对象（持有人“张三”，初始余额 0.0）
    account = BankAccount("张三")
    
    # 显示初始余额
    account.show_balance()
    
    # 存款 1000
    account.deposit(1000.0)
    
    # 显示余额
    account.show_balance()
    
    # 取款 500
    account.withdraw(500.0)
    
    # 最终显示余额
    account.show_balance()
    ```



### 8.2 交互式银行账户系统（扩展版）

**题目要求：** 在上一个 `BankAccount` 类的基础上，编写一个**交互式控制台程序**，让用户可以自己输入指令完成存款、取款、查看余额、退出系统等操作。

1. **类 `BankAccount`**（和之前基本一样）：

    - `owner`（账户持有人姓名）
    - `balance`（账户余额，默认 0）
    - `show_balance()`：显示余额
    - `deposit(amount)`：存款
    - `withdraw(amount)`：取款

2. **主程序交互功能**：

    - 用户输入账户持有人姓名（创建账户）

    - 进入循环菜单：

        ```
        请选择操作：
        1. 存款
        2. 取款
        3. 查看余额
        4. 退出
        ```

    - 根据用户输入的选项执行对应功能

    - 用户输入 `4` 时退出系统

3. **运行示例（参考）：**

    ```python
    请输入账户持有人姓名：张三
    账户已创建，当前余额为 ￥0.0
    
    请选择操作：
    1. 存款
    2. 取款
    3. 查看余额
    4. 退出
    请输入选项：1
    请输入存款金额：1000
    存入 ￥1000.0 成功！
    
    请选择操作：
    1. 存款
    2. 取款
    3. 查看余额
    4. 退出
    请输入选项：3
    账户持有人：张三
    当前余额：￥1000.0
    ```

4. **代码实现如下：**

    ```python
    # 定义一个银行账户类
    class BankAccount:
        def __init__(self, owner, balance=0.0):
            """
            初始化账户
            :param owner: 账户持有人姓名
            :param balance: 初始余额，默认为 0.0
            """
            self.owner = owner
            self.balance = balance
    
        def show_balance(self):
            """显示账户余额"""
            print(f"账户持有人：{self.owner}")
            print(f"当前余额：￥{self.balance}")
    
        def deposit(self, amount):
            """
            存款方法
            :param amount: 存款金额
            """
            if amount > 0:  # 金额必须大于 0
                self.balance += amount
                print(f"存入 ￥{amount} 成功！")
            else:
                print("存款金额必须大于 0。")
    
        def withdraw(self, amount):
            """
            取款方法
            :param amount: 取款金额
            """
            if 0 < amount <= self.balance:  # 判断金额是否合法且余额充足
                self.balance -= amount
                print(f"取出 ￥{amount} 成功！")
            else:
                print("余额不足或金额无效。")
    
    
    # ---------------- 主程序交互部分 ----------------
    
    # 1. 让用户输入姓名，创建账户
    name = input("请输入账户持有人姓名：")
    account = BankAccount(name)  # 创建 BankAccount 对象
    print(f"账户已创建，当前余额为 ￥{account.balance}\n")
    
    # 2. 进入操作循环
    while True:
        # 显示菜单
        print("请选择操作：")
        print("1. 存款")
        print("2. 取款")
        print("3. 查看余额")
        print("4. 退出")
    
        choice = input("请输入选项：")  # 获取用户选择
    
        # 根据用户选择执行操作
        if choice == "1":  # 存款
            try:
                amount = float(input("请输入存款金额："))  # 输入存款金额
                account.deposit(amount)
            except ValueError:
                print("请输入正确的金额！")
    
        elif choice == "2":  # 取款
            try:
                amount = float(input("请输入取款金额："))  # 输入取款金额
                account.withdraw(amount)
            except ValueError:
                print("请输入正确的金额！")
    
        elif choice == "3":  # 查看余额
            account.show_balance()
    
        elif choice == "4":  # 退出
            print("感谢使用银行账户系统，再见！")
            break  # 结束循环
    
        else:
            print("无效的选项，请重新输入。")
    
        print()  # 空行，美化输出
    ```





## 9. 通过实例化对象，修改类的属性值

我们可以通过实例化对象，不仅仅可以快速查询对应的属性值。我们还可以通过此方法，修改属性值。我们一起来看看代码，下面的代码是常规的实例化调用：

```python
class Person:
    def __init__(self, name, gender=None, age=None, weight=None):
        self.name = name
        self.gender = gender
        self.age = age
        self.weight = weight

    def introduce(self):
        intro = f"大家好，我叫 {self.name}。"

        if self.gender:
            if self.gender == '男':
                intro += " 我是一个男孩。"
            else:
                intro += " 我是一个女孩。"
        else:
            intro += " 我的性别暂时保密哦～"

        if self.age:
            intro += f" 我今年 {self.age} 岁了。"
        else:
            intro += " 我的年龄保密～"

        if self.weight:
            intro += f" 我的体重是 {self.weight} 千克。"
        else:
            intro += " 我的体重目前未知。"

        print(intro)


person1 = Person(name='Bornforthis', gender='男', age=28, weight=75)
person1.introduce()
```

运行后会输出：

```python
大家好，我叫 Bornforthis。 我是一个男孩。 我今年 28 岁了。 我的体重是 75 千克。
```

接下来，我们来通过实例化对象 person1 来读取内部属性值：

```python
print(person1.name, person1.gender, person1.age, person1.weight)
```

运行后输出：

```python
Bornforthis 男 28 75
```

我们接着通过实例化对象 person1 修改内部属性，并通过调用 `introduce()` 函数来输出验证：

```python
class Person:
    def __init__(self, name, gender=None, age=None, weight=None):
        self.name = name
        self.gender = gender
        self.age = age
        self.weight = weight

    def introduce(self):
        # ---snip---

        return intro


person1 = Person(name='Bornforthis', gender='男', age=28, weight=75)
print("修改前：{}".format(person1.introduce()))
person1.name = "AI悦创"
person1.weight = 80
print("修改后：{}".format(person1.introduce()))
```

运行后输出如下：

```python
修改前：大家好，我叫 Bornforthis。 我是一个男孩。 我今年 28 岁了。 我的体重是 75 千克。
修改后：大家好，我叫 AI悦创。 我是一个男孩。 我今年 28 岁了。 我的体重是 80 千克。
```

可以看见，我们成功修改了！

## 10. 类的私有属性

### 10.1 私有背景

前面我们讲了通过实例化可以直接修改类的属性值，这其实间接的也暴露出来安全隐患。举个生活中的例子：

想象一下，我们日常生活中的手机，里面保存着大量我们不愿意让别人轻易看到的信息，比如微信聊天记录、银行卡的密码、个人隐私照片等。你一定不希望别人随随便便就能访问这些内容，对吧？因此，我们会给手机设置密码、指纹或面容解锁，只有你自己才能够访问这些隐私信息。

同样的道理，在 Python 的类（class）中，也存在类似的情况——我们有时候需要保护类内部的一些数据，不希望从外部轻易被访问或修改。这时我们就会用到**私有属性**。



### 10.2 什么是私有属性？

~~在 Python 中，私有属性就是类里面只能被自己访问，不能直接从外部访问的属性。我们通过在属性名前加上两个下划线（`__`）来定义私有属性。~~

在 Python 中，我们用**私有属性**（以双下划线`__`开头的属性）保护类内部的重要数据。我们并不是希望别人完全访问不到这些数据，而是希望别人**通过类的方法来间接地访问或修改这些数据**，这样我们就能在方法中进行额外的逻辑控制，比如检查输入是否正确、记录访问日志等等。（白话：只能类里面只能自己访问，不能直接从外部访问的属性）



### 10.3 现实例子：手机密码与解锁

你的手机中有很多隐私信息（照片、信息、账号等等）。为了保护这些信息安全，你给手机设置了一个密码。

1. **私有属性**相当于手机中你存储的隐私数据。这些数据是敏感的，你不希望别人随意看到。
2. **类的方法**相当于你输入密码的过程。当你想打开手机时，必须输入密码。
3. **逻辑控制**就相当于手机检查密码正确性的过程：
    1. 如果密码正确 → 允许访问手机里的隐私数据；
    2. 如果密码错误 → 拒绝访问，并提示你重新输入。

通过这种方式，手机就能确保你的隐私数据始终被保护得很好。

**对应的 Python 代码举例**：

下面，我们用 Python 代码模拟一个简单的**手机**类，演示如何使用私有属性并通过方法控制访问：

```python
class Phone:
    def __init__(self, password, data):
        self.__password = password  # 私有属性，不能直接访问
        self.__data = data          # 私有属性，保护的数据

    def unlock(self, pwd):
        # 通过unlock方法间接访问私有数据，进行逻辑控制
        if pwd == self.__password:
            print("密码正确，手机已解锁！")
            return self.__data
        else:
            print("密码错误，无法解锁手机。")
            return None

# 创建一个手机对象，设置密码为：'123456'，私密数据为：我的秘密照片和聊天记录
my_phone = Phone("123456", "我的秘密照片和聊天记录")

# 我尝试直接访问数据，结果会失败（不能直接访问私有属性）
# print(my_phone.__data)  # 错误！无法访问，报错：AttributeError: 'Phone' object has no attribute '__data'

# 正确的访问方法：使用类提供的方法（函数）进行调用私有属性的值
data = my_phone.unlock("123456")  # 输入正确的密码
print("手机中的数据是：", data)

data = my_phone.unlock("wrong_password")  # 输入错误的密码
print("手机中的数据是：", data)
```

运行上面的代码，输出会是：

```python
密码正确，手机已解锁！
手机中的数据是： 我的秘密照片和聊天记录
密码错误，无法解锁手机。
手机中的数据是： None
```

通过设置**私有属性**，我们可以保证类的重要数据不会随便被外部访问或修改。而通过提供**类的方法**（如上面的 `unlock()` 方法），我们就可以加入各种额外的逻辑，比如：

1. 检查密码是否正确；
2. 验证输入是否合法；
3. 记录访问和修改的日志；

这样一来，我们程序的安全性、灵活性和可维护性都会得到大大的提高。

**小贴士**：

结合上面的手机场景强调两个点：

1. **手机密码** 就相当于类的 **私有属性**，外人不能直接查看。

2. **手机解锁** 的动作，就是我们类提供的方法，间接允许用户访问私有信息（手机中的内容）。

类的私有属性帮助我们建立起清晰的边界，规定什么可以被公开，什么必须受到保护。

### 10.4 为什么要使用私有属性？

你可能会问，为什么要这么麻烦呢？

**先看一个生活中的例子**：

假设你家中有一个保险箱，用来存放你珍贵的物品和文件。那么，**你为什么会使用保险箱？**

1. **安全性**：防止外人随意打开你的箱子。

2. **隐私性**：不希望让别人随意查看箱子里的东西。

3. **保护性**：如果箱子随意被打开，可能会损坏里面的重要物品。

4. **控制性**：只有你拥有钥匙或密码，你才能决定什么时候打开、什么时候关上。

以上四个原因，刚好对应了我们编程中为何需要私有属性。

**映射到编程中**：

在编程中，类的私有属性就像你这个保险箱里的物品，只有类自身才能访问，外界不能直接修改或查看。具体来说：

1. **安全性 (避免意外修改)**：如果属性是公开的（也就是普通属性），其他程序员或用户在使用类的过程中，很可能不小心修改了属性的值，从而导致错误或异常。例如，一个代表银行卡账户的类，如果账户余额可以被任意直接修改，那岂不是太危险了？——**私有属性可以避免外界无意或恶意地修改关键数据。**
2. **隐私性 (保护敏感信息)**：有时候我们定义类时，会存储用户的一些敏感信息，比如密码、身份证号、或者银行账户余额。这些信息如果随便暴露出去，显然非常不安全。——**私有属性能够帮助我们保护这些敏感数据，避免直接暴露给外界。**
3. **封装性 (让代码更健壮、更稳定)**：想象你家中的保险箱，如果随意可以用手直接打开，东西随意进出，难免造成丢失或混乱。同样道理，类中的属性也应该受到保护。——**通过私有属性，我们可以控制对属性的访问，并通过定义特定的方法 (getter 和 setter) 来规范访问规则，增加程序的健壮性和稳定性。**
4. **可维护性 (便于后期修改和扩展)**：如果外界代码直接依赖于某个属性，那么日后修改或扩展该属性时可能会影响大量外部代码。——**私有属性使我们可以自由修改类的内部实现，而不影响外界调用，提升代码的可维护性。**

上面四点就算无法全部理解也没事，你主要理解下面两点核心：

1. **数据保护**：防止类外部直接修改敏感数据，避免数据被误用。

2. **逻辑控制**：~~通过类的方法间接访问私有属性，可以在访问或修改属性时加入额外的逻辑，比如检查密码正确性或记录日志。~~ 我们不能直接访问私有属性，而是需要通过类中提供的方法间接访问。这种做法的好处是，每当我们读取或修改这些私有属性时，可以在方法里加入额外的操作或条件检查。比如，当用户输入密码时，我们可以先检查密码是否正确，或者记录下每次访问的时间和操作内容。这种方式就像我们平时使用银行卡取钱时，银行不会让你直接打开金库，而是需要通过 ATM 机输入密码、验证身份后，才允许你取钱，同时还会记录你的每次操作。



### 10.5 如何访问私有属性？

其实，Python 的私有属性并非绝对的私有，只是一种约定俗成的保护机制。实际上，你仍然可以通过特殊方式访问（虽然不推荐这么做）。

例如：

```python
# 通过特殊语法访问私有属性
print(my_phone._Phone__data)  # 输出：我的秘密照片和聊天记录
```

还可以通过这种特殊的方法进行修改属性值：

```python
# 创建一个手机对象
my_phone = Phone("123456", "我的秘密照片和聊天记录")
# print(my_phone._Phone__data)
my_phone._Phone__data = "新的数据"
# print(my_phone._Phone__data)
print(my_phone.unlock("123456"))
```

运行后输出如下：

```python
密码正确，手机已解锁！
新的数据
```

但在实际开发中，不建议你这样做。这种特殊访问方式仅在调试或特殊情况下才使用。

到此私有属性就全部讲解完成，还是那句：通过类的私有属性，我们能够更安全地管理数据，让类的使用更加规范和安全。这种方法在编程中非常重要，尤其是在设计更大规模、更复杂程序时。

接下来，请尝试在自己的程序中创建一个类，并使用私有属性练习一下吧！

### 10.6 小试牛刀：魔法背包系统 🎒✨

请编写一个 `MagicBag` 类，要求如下：

1. **属性**

    - 背包拥有者姓名（公有属性）。
    - 背包中的物品（私有属性，存储为列表，初始为空）。
    - 背包容量（私有属性，默认最多 5 个物品）。

2. **方法**

    - `add_item(item)`：往背包里添加物品，如果超过容量，提示 `"背包已满，无法添加"`。
    - `remove_item(item)`：从背包中移除物品，如果物品不存在，提示 `"没有找到该物品"`。
    - `show_items()`：展示当前背包中所有物品（只能通过该方法访问，不能直接访问私有属性）。

3. **测试**

    - 创建一个背包对象（比如拥有者叫 `"勇者阿光"`）。
    - 添加 5 个物品，再尝试添加第 6 个物品，应该提示背包已满。
    - 移除一个物品，再展示背包内容。
    - 尝试直接访问背包物品列表，看看会发生什么。

4. **代码实现**

    ```python
    # -*- coding: utf-8 -*-
    
    class MagicBag:
        """魔法背包类：演示私有属性（__items、__capacity）的使用"""
    
        def __init__(self, owner: str) -> None:
            # 公有属性：背包拥有者姓名，可以被外部直接访问和修改
            self.owner: str = owner
            # 私有属性：背包中的物品列表（外部无法直接访问）
            self.__items: list[str] = []
            # 私有属性：背包最大容量（默认最多放 5 个物品）
            self.__capacity: int = 5
    
        def add_item(self, item: str) -> None:
            """往背包里添加物品"""
            # 判断是否超过容量
            if len(self.__items) >= self.__capacity:
                # 如果已满，提示用户并返回
                print("背包已满，无法添加:", item)
                return
            # 否则添加物品到列表
            self.__items.append(item)
            print(f"成功添加物品：{item}")
    
        def remove_item(self, item: str) -> None:
            """从背包中移除物品"""
            # 判断物品是否在背包中
            if item not in self.__items:
                print("没有找到该物品：", item)
                return
            # 移除指定物品
            self.__items.remove(item)
            print(f"成功移除物品：{item}")
    
        def show_items(self) -> None:
            """展示当前背包物品"""
            if not self.__items:
                print("背包是空的。")
            else:
                print(f"{self.owner} 的背包中有：{', '.join(self.__items)}")
    
        def __repr__(self) -> str:
            """调试用的对象显示（不会暴露私有属性名）"""
            return f"MagicBag(owner={self.owner!r}, items_count={len(self.__items)}, capacity={self.__capacity})"
    
    
    # ====== 测试代码 ======
    if __name__ == "__main__":
        # 创建一个魔法背包对象
        bag = MagicBag("勇者阿光")
    
        # 添加 5 个物品
        bag.add_item("木剑")
        bag.add_item("皮甲")
        bag.add_item("回复药水")
        bag.add_item("火把")
        bag.add_item("干粮")
    
        # 再添加第 6 个物品，应该提示背包已满
        bag.add_item("铁剑")
    
        # 展示当前背包内容
        bag.show_items()
    
        # 移除一个物品
        bag.remove_item("火把")
    
        # 再次展示背包内容
        bag.show_items()
    
        # 尝试直接访问背包的私有属性（会报错）
        try:
            print(bag.__items)  # AttributeError
        except AttributeError as e:
            print("直接访问私有属性失败：", e)
    
        # （补充演示，不推荐这么做）通过名称改写可以访问私有属性
        # print("偷偷访问私有属性：", bag._MagicBag__items)
    ```

    



## 11. 类内部变量如何共用？

~~掌握了最基础的概念，其实我们已经能做很多很多的事情了。不过，在工程实践中，随着复杂度继续提升，你可能会想到一些问题：如何在一个类中定义一些常量，每个对象都可以方便访问这些常量而不用重新构造？~~

掌握了最基础的概念，其实我们已经能做很多很多的事情了。不过随着项目复杂度不断提高，你可能会逐渐意识到：在类中，有时我们需要定义一些固定不变的变量，比如常量。这些常量每个对象都会用到，我们是不是需要每次创建对象时都重复构造一次呢？

其实，并不需要这样麻烦。只要在类的内部合适的位置定义好，就能实现类内变量的共用。

接下来我们就一步一步地学习这个知识点。

### 11.1 类中的常量（类变量）

~~这个问题很好解决，不过，它们涉及到一些常用的代码规范，这里我放了一段代码示例。~~

现实生活中，我们经常会碰到这样的场景：

**例如**，我们加入了一个兴趣社团，这个社团有一个统一的口号，大家都会记住并随时喊出这个口号。不论是谁加入社团，他都会自动地知道并使用这个口号，无需每次都重新告诉一遍。

在 Python 中，类中也有类似“统一口号”的存在，我们称之为**类变量（Class Variable）**。这种变量只需要定义一次，所有对象都可以共享。

例如下面的代码：

```python
class Entity:
    WELCOME_STR = "欢迎来到 AI悦创 Python 学习社团！"  # 类变量（常量）

    def __init__(self, name):
        self.name = name

    def say_welcome(self):
        print(f"{self.name} 说：{self.WELCOME_STR}")

# 创建对象
entity_a = Entity("Alice")
entity_b = Entity("Bob")

entity_a.say_welcome()  # Alice 说：欢迎来到 AI悦创 Python 学习社团！
entity_b.say_welcome()  # Bob 说：欢迎来到 AI悦创 Python 学习社团！

# 类变量也可以直接用类名访问
print(Entity.WELCOME_STR)  # 欢迎来到 AI悦创 Python 学习社团！
```

~~第一个问题，在 Python 的类里，你只需要和函数并列地声明并赋值，就可以实现这一点，例如这段代码中的 `WELCOME_STR`。一种很常规的做法，是用全大写来表示常量，因此我们可以在类中使用 `self.WELCOME_STR` ，或者在类外使用 `Entity.WELCOME_STR` ，来表达这个字符串。~~

上面的代码里，`WELCOME_STR` 就是类的一个常量（类变量）。按照常用的规范，Python 中我们一般使用全大写字母表示常量。当类定义了这个变量之后，每个对象都自动拥有了它的访问权：

- 在类的方法中，可以用 `self.WELCOME_STR` 访问。
- 在类外部，我们也可以直接通过类名访问，如 `Entity.WELCOME_STR`。

这和我们的兴趣社团例子完全一样：社团的口号不属于某个人，而是属于整个社团的，任何成员都能直接使用。

### 11.2 设计思想（注意点）

我强调一下这部分讲解的逻辑，这很重要。为了让你的思路跟着本书走，如同跟我上课一般：

1. **第一步**：先讲解没有类的情况下，各个独立函数之间变量无法互相使用；（小标题：函数之间的局部变量为何不能共用？）
2. **第二步**：了解到普通函数之间的局部变量无法互相使用，初步的解决方案是使用全局变量；（小标题：全局变量的共用情况）
3. **第三步**：说明使用全局变量的缺点，接着正式引入类的实例变量；（小标题：类内部变量各个函数随意调用的情况（实例变量））
4. **核心思想**：没有对比，就没有伤害。我要制造对比，让你更好的理解类存在的意义。（小标题：全局变量 Vs. 类实例变量）

### 11.3 函数之间的局部变量为何不能共用？

~~类当中的变量无非就两种：一种属于~~

~~在我们平时编写函数函数时，函数与函数各自的局部变量是无法直接调用。除非使用的是全局变量，但是全局变量不属于局部变量了。我们来看下面代码示例：~~

到这，为了让你们更好的 get 到类存在的好处。我接下来带你看看普通函数之间，局部变量的“缺陷”。——无法互相使用，毕竟没有对比，就没有伤害。

~~在讲解类变量之前，我们回顾一下平时我们写函数时的情况。~~

~~为什么函数和函数之间的局部变量不能互相调用呢？就如同现实生活中的两个人，你们两个不熟悉陌生的情况下，人家的东西是不是不能直接无条件使用，都得通过对方同意后才可以使用。两个独立的函数也是一个意思，而在类当中每个函数都属于类且是一家人，所以在标注为 self 的变量可以在类的任何位置可以随意使用。后续会专门演示和讲解。~~

**现实生活中**，我们都有各自的私人物品，比如手机、电脑或者书籍。你的同学不能随意拿走你的书本，他需要经过你的同意才能使用你的物品。

编程中函数之间的局部变量也是同样的道理，局部变量：定义在函数内部，只能在这个函数内部使用，无法被其他函数直接访问。

例如下面的代码：

```python
def function_a():
    a = 10  # 局部变量
    print("function_a 的变量 a 是：", a)

def function_b():
    print(a)  # 这里会报错，因为无法访问 function_a 的局部变量 a

function_a()
function_b()
```

上面代码执行 `function_b()` 时，会出现错误，因为变量 `a` 是函数 `function_a()` 内的局部变量。就像你不能未经同意使用同学的私人用品一样。

既然，函数与函数之间的局部变量不能互相直接调用。那么如何解决呢？我接着往下学习。

### 11.4 全局变量的共用情况

如果我们想让不同函数之间共享同一个变量，该怎么办呢？现实生活中，如果班级里有一本书，所有人都允许随时使用，那么这本书就相当于编程中的全局变量：

```python
BOOK_NAME = "跟 AI悦创学习最前沿的编程思维和人工智能"  # 全局变量，任何函数都能访问

def function_a():
    print("function_a 正在读书：", BOOK_NAME)

def function_b():
    print("function_b 正在读书：", BOOK_NAME)

function_a()  # function_a 正在读书： 跟 AI悦创学习最前沿的编程思维和人工智能
function_b()  # function_b 正在读书： 跟 AI悦创学习最前沿的编程思维和人工智能
```

这里，`BOOK_NAME` 是定义在函数外部的全局变量，所有函数都能自由访问。

虽然全局变量可以让每个函数共用一个变量，但存在一些问题和风险。

首先，全局变量增加了程序的复杂度。因为它可以在任何地方被修改，所以当程序出现 bug 时，很难追踪到底是哪个函数改动了这个变量。这会让调试变得更加困难。

其次，全局变量破坏了函数之间的独立性。理想情况下，每个函数都应该是“自给自足”的，只依赖于传入的参数，而不是依赖外部的全局状态。如果一个函数强依赖全局变量，那么它就不能单独拿出来复用或测试，这会降低代码的可维护性和可读性。

最后，如果程序比较大，不同的模块或函数使用相同名字的全局变量，可能会发生“变量冲突”或意外覆盖的问题，造成意想不到的错误。

因此，虽然全局变量有时看起来方便，但在实际编程中，我们应该尽量减少对它的依赖，优先使用**函数参数**和**返回值**来传递数据。

相对于全局变量，类实例变量就会安全很多，我们接着往下学习。

### 11.5 类内部变量各个函数随意调用的情况（实例变量）

在类内部，各个方法（函数）之间的变量如何相互调用和使用呢？

前面说过，普通函数之间的局部变量不能共用，而类则不同——类里面的变量如果带有 `self` 前缀，就像家庭成员间共享的家庭财产，每个人都可以随意使用。

我们称这种带有 `self` 前缀的变量为**实例变量**。

**生活中的例子**：

家庭中共有一台冰箱，每个家庭成员都可以自由拿取冰箱中的食物，这台冰箱就相当于类中的实例变量，每个方法（成员）都可以调用（使用）。

我们用代码来演示：

```python
class Family:
    def __init__(self):
        self.fridge = ["草莓", "巧克力", "牛奶", "水果", "蛋糕"]  # 实例变量，家庭共有的冰箱

    def dad_take_food(self):
        food = self.fridge.pop()
        print("爸爸拿走了：", food)

    def mom_take_food(self):
        food = self.fridge.pop()
        print("妈妈拿走了：", food)

    def child_take_food(self):
        food = self.fridge.pop()
        print("孩子拿走了：", food)


family = Family()
family.dad_take_food()    # 爸爸拿走了： 蛋糕
family.mom_take_food()    # 妈妈拿走了： 水果
family.child_take_food()  # 孩子拿走了： 牛奶
```

在这个例子里，实例变量 `self.fridge` 就像是家庭公共财产，可以在类的任意方法里被共享调用。

你还可以再添加一行代码，输出查看冰箱中剩余的存货：

```python
print(family.fridge)  # 输出：['草莓', '巧克力']
```



### 11.6 全局变量 Vs. 类实例变量

相比之下，**类的实例变量**（也叫对象属性）是一种更安全、更清晰的变量管理方式。

实例变量是“属于对象的”，每个对象都有自己独立的一份变量副本。它们不会像全局变量那样到处乱飞，而是**封装在对象内部**，只能通过这个对象来访问和修改。

来看一个例子，帮助你理解：

```python
# 使用全局变量
count = 0

def increment():
    global count
    count += 1

def get_count():
    return count

increment()
print(get_count())  # 输出 1
```

这个写法虽然简单，但 `count` 是全局变量，如果另一个函数也用了 `count` 这个名字，可能就会发生冲突。

我照例带你分析上面代码原本应该输出什么？——原本应该在调用函数 `increment()` 后，再调用 `get_count()` 函数，`get_count()` 函数应该输出： 0，但实际输出 1。这除非是计划要得到 1，否则这个结果对于我们来说，就是冲突的。

而使用类和实例变量，可以把变量“收起来”：

```python
class Counter:
    def __init__(self):
        self.count = 0  # 实例变量

    def increment(self):
        self.count += 1

    def get_count(self):
        return self.count

c1 = Counter()
c2 = Counter()

c1.increment()
print(c1.get_count())  # 输出 1
print(c2.get_count())  # 输出 0，互不影响
```

可以看到，`c1` 和 `c2` 是两个不同的对象，它们各自有自己的 `count` 变量，互不干扰。这种封装性（encapsulation）使得程序更清晰、更模块化，也更容易维护和扩展。

### 11.7 小结与回顾

| 变量类型 | 定义位置                   | 作用域                 | 举个生活中的例子               |
| -------- | -------------------------- | ---------------------- | ------------------------------ |
| 局部变量 | 函数内部                   | 本函数内有效           | 自己的私人用品，别人不能随意拿 |
| 全局变量 | 函数外部                   | 所有函数都有效         | 公共的物品，比如图书馆的书     |
| 类变量   | 类的内部，方法之外         | 类内所有对象都有效     | 社团共有的口号                 |
| 实例变量 | 类的方法内，通过`self`定义 | 单个对象内所有方法有效 | 家庭内部共享的冰箱             |

### 11.8 类函数之间的变量互相调用

**这部分写的时候，也比较迷糊。后面读者阅读后，可以给我反馈。**

#### 11.8.1 基础共用（互相调用问题）

::: tip 添加日期：2025-06-19 21:02:51

:::

在类内部的函数之间，想要变量可以互相调用，需要在变量前添加 self。

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self, times):
        print(f"{self.name} 汪" * times)

    def food(self, food):
        print(f"“{food}”是{self.name}今天的食物。 ")

my_dog = Dog('小黑')
my_dog.bark(3)
my_dog.food("狗屎")
```

如果我们想要把函数 food 中的 food 参数，让其它函数也可以使用，就必须把 food 参数写成如下代码：

```python
self.food = food
```

修改后的完整代码如下：

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self, times):
        print(f"{self.name} 汪" * times)
        print(self.food)

    def food(self, food):
        self.food = food
        print(f"“{self.food}”是{self.name}今天的食物。 ")

my_dog = Dog('小黑')
my_dog.bark(3)
my_dog.food("狗屎")
```

现在代码运行结果如下：

```python
小黑 汪小黑 汪小黑 汪
<bound method Dog.food of <__main__.Dog object at 0x11121cee0>>
“狗屎”是小黑今天的食物。 
```

我们可以看见，在 bark 函数调用后，输出的结果为：`<bound method Dog.food of <__main__.Dog object at 0x11121cee0>>` 指向的是地址，并没有实际数据 `"狗屎"`。这是因为在类当中，变量添加 self 后，类就会检测到。

但是如果想要正确得到实际的数据，需要确保类函数调用的先后顺序。需要先执行 food 函数后，再执行 bark 函数，即可得到正确的结果。代码如下：

```python
my_dog = Dog('小黑')
my_dog.food("狗屎")
my_dog.bark(3)
```

因为先执行函数 food，所以就正常创建变量 `self.food`，故而在函数 bark 调用时，可以正常输出：

```python
“狗屎”是小黑今天的食物。 
小黑 汪小黑 汪小黑 汪
狗屎
```

可以看见，我们正常输出`"狗屎"`了。

所以我们小结一下：需要在其它函数调用其它函数变量时，除非这个变量被初始化了，否则还是需要注意内部函数调用的先后顺序。

#### 11.8.2 更好的实现

前面的代码实现，不是最合适的。应该在初始化函数中，添加 `self.food`，代码如下：

```python {3}
class Dog:
    def __init__(self, name):
        self.food = None
        self.name = name

    def bark(self, times):
        print(f"{self.name} 汪" * times)
        print(self.food)

    def food(self, food):
        self.food = food
        print(f"“{self.food}”是{self.name}今天的食物。 ")

my_dog = Dog('小黑')
my_dog.bark(3)
my_dog.food("狗屎")
```

#### 11.8.3 注意点

上面的代码，你有没有感觉到什么问题？——我想你稍微思考了一下，也一时间没发现什么问题。不过我在给学生 SscramblerR 上课时，无意间发现这个问题。

类属性变量和类内部函数，不要同名。否则在调用函数时，会出现报错：

```python
class Dog:
    def __init__(self, name):
        self.food = None
        self.name = name

    def bark(self, times):
        print(f"{self.name} 汪" * times)
        print(self.food)

    def food(self, food):
        self.food = food
        print(f"“{self.food}”是{self.name}今天的食物。 ")

my_dog = Dog('小黑')
my_dog.bark(3)
my_dog.food("狗屎")
```

运行报错如下：

```python
/Users/huangjiabao/.venv/bin/python /Users/huangjiabao/Leeson1.py 
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/81-Emmg/Leeson1.py", line 16, in <module>
    my_dog.food("狗屎")
TypeError: 'NoneType' object is not callable
小黑 汪小黑 汪小黑 汪
None
```

报错原因也很好理解，如果你忘记可以去查看 self【[#_3-4-1-非正式讲解1](#_3-4-1-非正式讲解1)】的特点、原因。因为类允许实例化对象，直接调用类内部的属性（变量）、函数。

**例如**：

我们调用类当中的属性变量 food，写法如下：

```python
my_dog = Dog('小黑')
my_dog.food
```

而如果我们想要调用 Dog 类当中的 food 函数，编写代码如下：

```python
my_dog = Dog('小黑')
my_dog.food("狗屎")
```

从上面的两个代码示例可以发现：属性值变量和类函数名同名，会导致 Python 无法区分清楚具体要调用哪个变量。——这就是上面导致报错的原因，如同一开始讲过的变量知识点：变量的命名方式不能使用和内置函数名、内置关键词同名的变量，Python 会区分不清楚。

正确的修改方法早已蕴含：把属性值变量和内置函数名改成不一样的即可。

```python
class Dog:
    # ---snip---

    def food_func(self, food):
        self.food = food
        print(f"“{self.food}”是{self.name}今天的食物。 ")
```





## 12. 类内部函数互相调用

学完类内部的变量共享后，现在我们再来看一个有趣的问题：类中不同的函数（我们通常称为**方法**）能不能互相调用呢？答案当然是可以的。

想象一下你家里准备做晚饭：

- 妈妈负责准备食材；
- 爸爸负责烹饪；
- 孩子负责摆放餐桌。

假如爸爸要做饭，是不是需要先让妈妈把食材准备好，再继续自己的任务呢？这里爸爸的任务就需要调用妈妈的任务。这种在生活中很自然的流程，在 Python 的类里面同样适用——类内的方法经常需要相互调用。

接下来，我们就详细地看一个例子。

### 12.1 第一步：定义多个方法

我们创建一个简单的类，名为 `FamilyDinner`，这个类中有三个方法：

- `prepare_ingredients()`（准备食材）
- `cook_food()`（烹饪食物）
- `set_table()`（摆放餐桌）

示例代码：

```python
class FamilyDinner:
    def prepare_ingredients(self):
        print("妈妈正在准备食材：洗菜、切菜、准备调料。")

    def cook_food(self):
        print("爸爸准备开始烹饪了！")
        self.prepare_ingredients()  # 调用准备食材的方法
        print("爸爸正在烹饪菜肴：炒菜、煮汤。")

    def set_table(self):
        print("孩子正在摆放餐桌：摆放碗筷、倒饮料。")
```

上面的代码清晰地展示了一个类内多个方法定义的情形。

### 12.2 第二步：方法之间如何调用？

在上面的例子中，我们可以看到 `cook_food()` 方法中包含了一行代码：

```python
self.prepare_ingredients()
```

注意这里的写法：

- 方法调用时，必须加上前缀 `self.`。
- 在类中，任何一个方法想调用另一个方法，都需要通过 `self.` 加上方法名来调用。

就像家庭成员之间，如果爸爸需要妈妈帮忙准备食材，不是喊“妈妈”，而是通过家庭内部的规则（`self.`）调用“妈妈的方法”（`prepare_ingredients`）。

我们创建对象进行测试一下：

```python
# 创建家庭晚餐的对象
dinner = FamilyDinner()

# 调用 cook_food 方法，会自动调用 prepare_ingredients 方法
dinner.cook_food()

# 调用孩子的任务
dinner.set_table()
```

输出结果：

```python
爸爸准备开始烹饪了！
妈妈正在准备食材：洗菜、切菜、准备调料。
爸爸正在烹饪菜肴：炒菜、煮汤。
孩子正在摆放餐桌：摆放碗筷、倒饮料。
```

通过以上例子，你可以清晰地理解类内方法相互调用的机制：

1. 类内方法之间可以自由调用，但必须带上 `self.`。

2. 调用另一个方法时，当前方法会暂停，先去执行被调用的方法，执行完成后再回到原位置继续执行。

### 12.3 总结与回顾

在 Python 类中，方法之间是可以自由调用的，调用方法的关键点：

- 类内部的方法互相调用，必须加前缀 `self.`。
- 方法调用的逻辑流程类似生活中任务的协作，一个任务依赖于另一个任务的完成。

| 类内方法调用示例  | 等价生活场景举例                     |
| ----------------- | ------------------------------------ |
| `self.method_b()` | 爸爸（方法A）让妈妈（方法B）准备食材 |

通过掌握这种方法调用的技巧，你可以更好地设计出逻辑更清晰、结构更合理的类，从而写出更加高效且容易维护的程序。



## 13. 继承，是每个富二代的梦想「选学」

**提示**：接下来的继承内容，一时间看不懂学不会没有事的，完全不影响你入门 Python。

既然类是一群相似的对象的集合，那么可不可以是一群相似的类的集合呢？

接下来，我们来看第三个问题，既然类是一群相似的对象的集合，那么可不可以是一群相似的类的集合呢？

答案是，当然可以。只要抽象得好，类可以描述成任何事物的集合。当然你要小心、严谨地去定义它，不然一不小心就会引起第三次数学危机 XD（维基百科：[https://en.wikipedia.org/wiki/Russell%27s_paradox](https://en.wikipedia.org/wiki/Russell%27s_paradox)。

类的继承，顾名思义，指的是一个类既拥有另一个类的特征，也拥有不同于另一个类的独特特征。在这里的第一个类叫做子类，另一个叫做父类，特征其实就是类的属性和函数。

```python
class Entity():
    def __init__(self, object_type):
        print('parent class init called')
        self.object_type = object_type
    
    def get_context_length(self):
        raise Exception('get_context_length not implemented')
    
    def print_title(self):
        print(self.title)

class Document(Entity):
    def __init__(self, title, author, context):
        print('Document class init called')
        Entity.__init__(self, 'document')
        self.title = title
        self.author = author
        self.__context = context
    
    def get_context_length(self):
        return len(self.__context)
    
class Video(Entity):
    def __init__(self, title, author, video_length):
        print('Video class init called')
        Entity.__init__(self, 'video')
        self.title = title
        self.author = author
        self.__video_length = video_length
    
    def get_context_length(self):
        return self.__video_length

harry_potter_book = Document('Harry Potter(Book)', 'J. K. Rowling', '... Forever Do not believe any thing is capable of thinking independently ...')
harry_potter_movie = Video('Harry Potter(Movie)', 'J. K. Rowling', 120)

print(harry_potter_book.object_type)
print(harry_potter_movie.object_type)

harry_potter_book.print_title()
harry_potter_movie.print_title()

print(harry_potter_book.get_context_length())
print(harry_potter_movie.get_context_length())


# ---output---
Document class init called
parent class init called
Video class init called
parent class init called
document
video
Harry Potter(Book)
Harry Potter(Movie)
77
120
```

我们同样结合代码来学习这些概念。在这段代码中，Document 和 Video 它们有相似的地方，都有相应的标题、作者和内容等属性。我们可以从中抽象出一个叫做 Entity 的类，来作为它俩的父类。

首先需要注意的是构造函数。每个类都有构造函数，继承类在生成对象的时候，是不会自动调用父类的构造函数的，因此你必须在 `init()` 函数中显式调用父类的构造函数。它们的执行顺序是 子类的构造函数 -> 父类的构造函数。

其次需要注意父类 `get_context_length()` 函数。如果使用 Entity 直接生成对象，调用 `get_context_length()` 函数，就会 raise error 中断程序的执行。这其实是一种很好的写法，叫做函数重写，可以使子类必须重新写一遍 `get_context_length()` 函数，来覆盖掉原有函数。

最后需要注意到 `print_title()` 函数，这个函数定义在父类中，但是子类的对象可以毫无阻力地使用它来打印 title，这也就体现了继承的优势：减少重复的代码，降低系统的熵值（即复杂度）。

到这里，你对继承就有了比较详细的了解了，面向对象编程也可以说已经入门了。当然，如果你想达到更高的层次，大量练习编程，学习更多的细节知识，都是必不可少的。

## 14. 文字对话游戏实战

学到这里，你已经掌握了不少关于类和方法的基础知识，但我们更需要在实际项目中真正感受一下这些知识到底该如何应用。

接下来，我们就来手把手做一个简单却有趣的小项目。

### 14.1 游戏名称：主角打怪-文字游戏

这个小游戏会有下面几个特性：

1. 游戏中有一个玩家 (**Player**) 和一个敌人 (**Enemy**)；
2. 玩家与敌人会互相攻击对方；
3. 玩家每轮可以选择攻击或防守；
4. 如果玩家选择防守，则敌人攻击造成的伤害减至原来的十分之一；（玩家防守，敌人肯定是会攻击的）
5. 攻击数值随机生成（使用 `random` 模块）。

准备好了吗？我们就一步步来实现它吧！等等，你现在需要倒扣书籍，闭眼敲代码。给自己足够的时间，独立编写这个类项目。等实在编写不出来或者写出来了（我希望你最好是后者），然后接着阅读我的。

### 14.2 第一步：明确游戏中的角色与动作

**现实生活中举例：**

想象一下，你和朋友玩“剪刀石头布”游戏：

1. 每次你们都会出招；
2. 出招之前，你们都会先观察状态（比如谁赢谁输，心理状态如何）；
3. 根据情况，你们可能会调整策略。

我们接下来实现的游戏也类似于此：

1. 首先定义一个类（比如取名为 `Creature`），表示玩家和敌人这种生物；
2. 生物有基本的属性，比如生命值（HP）和名字；
3. 生物可以执行攻击、被攻击、防守等动作；
4. 每次行动前，都要先检查是否还活着；
5. 游戏持续进行，直到一方倒下。

### 14.3 第二步：定义生物类 Creature

不论是玩家还是敌人，他们都可以被我们抽象成一个：生物类（Creature）。因为都有一些共同的特点：

1. 可以攻击，攻击的伤害值随机生成。

2. 有生命值。

所以，我们先创建一个生物类 Creature，用于代表玩家和敌人。并且实现一个攻击函数 attack，且攻击值随机生成。

```python
import random

class Creature():
    def attack(self):
        # 我希望得到一个随机的攻击数值
        attack_value = random.randint(0, 50)
        return attack_value  # 返回得到的攻击值
```

### 14.4 第三步：实例化玩家和敌人

上面我们类创建好了之后，我接下来就需要实例化了，也就是创建具体的对象：

```python
player = Creature()
enemy = Creature()
```

### 14.5 第四步：添加游戏持续进行的循环

游戏是不是需要持续运行，并且思考一下持续运行的条件是什么？——玩家或敌人有没有死亡的。

所以，游戏需要实现：判断用户和敌人的状态，也就是活着还是死了(玩家或者敌人)。并且是不停的判断，那这个时候需要什么呢？很明显是需要一个 `while` 循环在这里的。我们定义一个 `not_dead()` 函数来判断：

```python
while player.not_dead() and enemy.not_dead():
    pass
```

但此时，我们发现 `Creature` 类里还没有定义生命值和状态判断的功能，接下来我们要实现它。

### 14.6 第五步：初始化生命值 (构造函数`__init__`)

**思路**：我们要实现 `not_dead()` 函数，就需要先有生命值。而每个角色的生命值，都在一开始就会设定好。“一开始”、“一开始”——初始化函数！

所以，要给玩家和敌人设定一个初始的值（初始的生命值）。也就是需要在类的实例化的时候传入设定的生命值，比如：玩家生命值：`100` ，敌人：`80`，既然我们要添加初始的值，那接下来就需要编写类的初始化。

```python
player = Creature(100)
enemy = Creature(80)
```

既然要在实例化时传入参数，那么就需要编写 `__init__` 参数。

我们接下来使用 `hp`  来存储用户初始化的血量。(也就是使用： `self.hp` 来存储用户和敌人的血量)

```python
class Creature():
    def __init__(self, hp):
        self.hp = hp
```

### 14.7 第六步：判断是否活着 (`not_dead`方法)

这个时候，我们游戏就有了生命值了，接下来就是要判断玩家和敌人的游戏状态。是否活着的逻辑很简单，就看生命值是否大于 0。大于 0 就是活着，小于等于 0 就是死亡。

1. 最完整的写法：

    ```python
    def not_dead(self):
        if self.hp <= 0:
            return False
        else:
            return True
    ```

2. 函数一遇到 return 就会结束，其实就没必要使用 else。因为当 if 不执行时，就可以直接执行 `return True`。

    注意：如果 if 里面不是使用 return 结束的，则不能省略 else。因为会导致必然执行 `return True`。

    ```python
    def not_dead(self):
        if self.hp <= 0:
            return False
        return True
    ```

3. 如果我们细心的话，会悟到我们 `not_dead` 函数最终只需要得到 True 或 False。而 `self.hp <= 0` 得到的结果就是布尔值，为什么不直接 `return self.hp <= 0` 呢。

    ::: tip MR 上课添加 2025 年 8 月 26 日 14:52

    本身的下面的写法，是为了当符合某种条件时，返回我们指定的结果。

    ```python
    if self.hp <= 0:
        return False
    else:
        return True
    ```

    而我们现在需要返回的结果，恰好和我们本身指定的结果是一致的「都是布尔值」，所以可以优化成如下代码：

    ```python
    return self.hp > 0
    ```

    :::

    ```python
    def not_dead(self):
        return self.hp > 0
    ```

    现在回过头来看，原本的 if 就类似套壳。

    有时候，我们需要透过现象看本质。这个部分如果是直播视频的形式估计可以更好的带你顿悟理解，但现在是以文字交付给你。我尽可能把每一步描述清楚，你记得多思考多行动。

那接下来就继续编写，`not_dead()` 返回的值是 `True`，那么游戏继续继续进行。

为了让你知道目前编写的所有代码，查看当前完整代码：

```python
import random


class Creature():
    def __init__(self, hp):
        self.hp = hp

    def attack(self):
        # 我希望得到一个随机的攻击数值
        attack_value = random.randint(0, 50)
        return attack_value  # 返回得到的攻击值

    def not_dead(self):
        return self.hp > 0


player = Creature(100)
enemy = Creature(80)
while player.not_dead() and enemy.not_dead():
    pass
```

### 14.8 第七步：添加用户输入，实现游戏交互

又因为我们的游戏是用户的输入来获取操作，所以需要在 while 循环中添加用户输入。

```python
while player.not_dead() and enemy.not_dead():
    user_input = input("Attack or Defence(A/D):")

    if user_input == "A":
        player_attack_value = player.attack()
        enemy_attack_value = enemy.attack()
```

**小贴士**：这里我就写的简单点，就不判断用户输入的是否符合规则，我们这里就先默认用户输入是对的，课后自行添加！

### 14.9 第八步：实现生命值减少的规则（`being_attack` 方法）

那现在我们获取到了玩家的攻击值和敌人的攻击值，我们就需要来减少生命值。

所以，接下来我们编写一个 `being_attack()` 生命值减少的规则：

```python
enemy.being_attack(player_attack_value)
player.being_attack(enemy_attack_value)
```

#### 14.9.1 学习提示（学的是思维，是逻辑！）

在编写 `being_attack` 函数之前，我想问问你：到这一步你有没有感觉到什么？——我所有的函数都是需要的时候才会去创建，而不是像传统学校、机构那样，直接从 import 开始写。然后接着写 class，把全部 class 写完。再接着写主循环，这个流程对吗？

不对！绝对不对！或许按上面的流程来编写代码，你也可以理解每个代码的含义。但你也失去了学习真实开发场景中的开发流程、思考流程、逻辑训练的机会，为什么这么说？——真实场景中我们可以直接知道用什么导入，直接知道完整的 class 编写？直接知道完整的 while 编写？

肯定不是的，那只是学校老师备课的最后结果。恰恰是那个备课过程，是你们需要学习的！

我现在所带给你的，是真实的开发流程的 demo。一步步带你编写，当我们需要 attack 函数，我们才会编写攻击函数。当我们需要初始化生命值时，我们才会编写 init 初始化生命值。每一步的思考和选择，我都尽可能编写清楚给你。

故而，你在写的时候。一定要按照我的步骤一步步编写代码，好好感受这个过程！

#### 14.9.2 being_attack 函数实现

接下来，我们继续编写 `being_attack` 函数（受到攻击的函数）：

```python
def being_attack(self, attack_value):
    self.hp = self.hp - attack_value
```

减少血量的功能，我们就简单的使用减法实现即可。如果你有更复杂的，你可以自行实现。

到目前为止，完整代码如下：

```python
import random


class Creature():
    def __init__(self, hp):
        self.hp = hp

    def attack(self):
        # 我希望得到一个随机的攻击数值
        attack_value = random.randint(0, 50)
        return attack_value  # 返回得到的攻击值

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, attack_value):
        self.hp = self.hp - attack_value


player = Creature(100)
enemy = Creature(80)
while player.not_dead() and enemy.not_dead():
    user_input = input("Attack or Defence(A/D):")

    if user_input == "A":
        player_attack_value = player.attack()
        enemy_attack_value = enemy.attack()
        enemy.being_attack(player_attack_value)
        player.being_attack(enemy_attack_value)
```

### 14.10 第九步：实现防守时伤害降低的功能

接下来，我们要编写的是，当用户输入防守的时候操作（也就是：玩家选择防守时）。那就只剩下敌人的攻击值，玩家受到的攻击值减少十分之一：

```python
elif user_input == "D":
    enemy_attack_value = enemy.attack() * 0.1
    player.being_attack(enemy_attack_value)
```

### 14.11 阶段一测试

现在完整代码如下：

```python
import random


class Creature():
    def __init__(self, hp):
        self.hp = hp

    def attack(self):
        # 我希望得到一个随机的攻击数值
        attack_value = random.randint(0, 50)
        return attack_value  # 返回得到的攻击值

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, attack_value):
        self.hp = self.hp - attack_value


player = Creature(100)
enemy = Creature(80)
while player.not_dead() and enemy.not_dead():
    user_input = input("Attack or Defence(A/D):")

    if user_input == "A":
        player_attack_value = player.attack()
        enemy_attack_value = enemy.attack()
        enemy.being_attack(player_attack_value)
        player.being_attack(enemy_attack_value)
    elif user_input == "D":
        enemy_attack_value = enemy.attack() * 0.1
        player.being_attack(enemy_attack_value)
```

我们可以运行一下，运行结果示例：

```python
Attack or Defence(A/D):A
Attack or Defence(A/D):D
Attack or Defence(A/D):A
Attack or Defence(A/D):A
Attack or Defence(A/D):D
Attack or Defence(A/D):A
Attack or Defence(A/D):A
```

这里我还是要强调，你不能只阅读我上面的测试结果。你务必自己编写然后运行测试，看看在运行测试过程中有没有什么感觉或者感受！

你得有属于自己的观察力和感知力！

运行上面的代码后，你有没有感觉少了点什么呢？

1. 我们是成功运行且游戏成功结束；
2. 但是我们完全不知道现在游戏进展，也就是：玩家和敌人的状态，甚至连谁输谁赢都不知道！

上面所说的，也就是游戏状态和输赢的判断，这些都需要进一步完善。

### 14.12 第十步：实时显示双方的状态 (`show_status`方法)

而这个游戏状态应该写在什么位置呢？我给你标记 A、B、C、D，你自己思考选择一下：

```python
import random


class Creature():
    # ---snip---


player = Creature(100)
enemy = Creature(80)
# A
while player.not_dead() and enemy.not_dead():
    # B
    user_input = input("Attack or Defence(A/D):")
    # C
    if user_input == "A":
        # ---snip---
    elif user_input == "D":
        # ---snip---
    # D

```

你的选择会是什么呢？请耗费足够的时间思考！

我们会写在 B 位置，为什么呢？

1. 先举个例子：我们在带兵打仗的时候，是直接不看当前我军的兵力分布以及士兵、将领的状态。就无所畏惧、不假思索的发起进攻。等进攻完成后，再看攻击之后的状态吗？肯定不是，肯定是先看当前具体状态。再决定是否攻击，如果攻击还得考虑如何攻击。（总结，省流版：攻击前要看情况）
2. 那么我们在游戏的时候，是不看自己的血量就直接攻击敌人。还是先看自己的血量后，再考虑是否攻击呢？肯定是看到血量之后，再考虑是攻击还是防守！
3. 那么现在考虑的就是 A、B 位置，因为都在用户输入之前。C、D 都在用户输入之后，肯定不行。
4. 接下来，我们继续分析：我们的状态（血量）是一层不变的吗？肯定不是，那么 A 的位置就不合适，为什么？因为 A 位置在循环之外，状态不能实时更新！
5. 最后我们得到 B 这个位置写状态代码！

那就是玩家的选择之前（输入之前），实时的看见玩家和敌人的生命值：

```python
player.show_status()
enemy.show_status()
```

那接下来，编写 `show_status` 函数的具体实现：

```python
def show_status(self):
    print(self.hp)
```

### 14.13 阶段二测试

目前完整代码：

```python
import random


class Creature():
    def __init__(self, hp):
        self.hp = hp

    def attack(self):
        # 我希望得到一个随机的攻击数值
        attack_value = random.randint(0, 50)
        return attack_value  # 返回得到的攻击值

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, attack_value):
        self.hp = self.hp - attack_value

    def show_status(self):
        print(self.hp)


player = Creature(100)
enemy = Creature(80)

while player.not_dead() and enemy.not_dead():
    player.show_status()
    enemy.show_status()
    user_input = input("Attack or Defence(A/D):")

    if user_input == "A":
        player_attack_value = player.attack()
        enemy_attack_value = enemy.attack()
        enemy.being_attack(player_attack_value)
        player.being_attack(enemy_attack_value)
    elif user_input == "D":
        enemy_attack_value = enemy.attack() * 0.1
        player.being_attack(enemy_attack_value)
```

老样子，你自己运行。看看有没有什么不合适或者没实现的，不论什么问题都可以，但一定要有！

我的运行示例如下：

```python
100
80
Attack or Defence(A/D):A
60
60
Attack or Defence(A/D):D
55.8
60
Attack or Defence(A/D):A
42.8
48
Attack or Defence(A/D):A
36.8
21
Attack or Defence(A/D):A
```

从运行结果来看，是比前面清楚的不少。但是还有问题，什么问题呢？

虽然是有了当前的状态，第一个是我们玩家的血量，第二个是敌人的血量。但要不是我们自己写的代码，你决定玩家分得清是谁的血量吗？——肯定分不清！

所以，我们需要给玩家和敌人设置昵称。这样我们才能知道哪个是用户、哪个个敌人。





### 14.14 第十一步：区分敌人和玩家，添加名字功能

昵称要在什么时候设置？都是在游戏开始之前，角色创建时设定的。角色创建就意味着类的实例化，故而就是在实例化时传入玩家和敌人的昵称。

```python
player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")
```

既然实例化要支持传入昵称，那么我们就需要在 `__init__` 函数添加参数 name：

```python
def __init__(self, hp, name):
    self.hp = hp
    self.name = name
```

既然有血量、有名称，那接下来就需要写一个，显示名称和血量了。那谁在现实血量？——`show_status()` 函数，所以我们需要修改函数 `show_status()` 的显示格式：

```python
def show_status(self):
    print("{}'s hp is {}.".format(self.name, self.hp))
```

### 14.15 第十二步：判断最终的胜负结果

现在我们主程序就编写结束了，到这里，就全部完成了吗？没有，我想你已经忘记了我们前面发现的另一个问题：谁输谁赢的判定。

我们还要判断谁输谁赢，判断输赢要写在哪里？

1. 选项 A：循环前；
2. 选项 B：循环里面；
3. 选项 C：循环结束后；

肯定是选择 C：循环结束后，只有循环结束后才有需要判断输赢。

```python
if player.not_dead():
    print("You Win!")
else:
    print("You Lose!")
```

### 14.16 完整的程序整合与回顾

```python
import random

class Creature():
    def __init__(self, hp, name):
        self.hp = hp
        self.name = name

    def attack(self):
        return random.randint(0, 50)

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, attack_value):
        self.hp -= attack_value

    def show_status(self):
        print("{}'s hp is {}.".format(self.name, self.hp))

player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

while player.not_dead() and enemy.not_dead():
    player.show_status()
    enemy.show_status()

    user_input = input("Attack or Defence(A/D):")

    if user_input == "A":
        player_attack_value = player.attack()
        enemy_attack_value = enemy.attack()

        enemy.being_attack(player_attack_value)
        player.being_attack(enemy_attack_value)

    elif user_input == "D":
        enemy_attack_value = enemy.attack() * 0.1
        player.being_attack(enemy_attack_value)

if player.not_dead():
    print("You Win!")
else:
    print("You Lose!")
```

### 14.17 类的部分代码“优化”

::: tip 添加日期：2025-07-07 19:46:31

:::

以下对类中的还是进行适当性的优化，仅优化显示效果：

```python
AI悦创's HP → 100
Enemy's HP → 80
```

你可以试一试，看看怎么改，很简单的。

代码实现如下：

```python
def show_status(self):
    print(f"{self.name}'s HP → {self.hp}")
```

接下来，我们要对前面程序中存在 bug 来改进一下。我先不说什么 bug，你先自己运行测试。当然，不是单纯的运行测试，也可以思考、和改点无关重要的小代码亦或是添加输出。如果你还是没有发现，那么直接往下阅读。

直接运行测试，是不能直接发现这个 bug，或者说低概率发现。

先说 bug：不论是敌人还是玩家的生命值会出现**负值**这是需要解决的，我一开始想到两种方法，但是经过我的证明后发现，只有一个方法：

- **方法一**：把 0.1 去掉；（无法证明）
- **方法二**：添加结束后的生命值输出；
- **方法三**：修改循环条件，不去判断敌人是否死亡，只保留玩家是否死亡的判断即可，最后输出敌人的血量即可。（可以快速得到测试结果。）——MR 南京大学研究生提出 2025-08-28 15:10:41

对于方法一来说，看起来是针对玩家的血量修改，但是只要可以证明玩家的血量出现负数，就能直接得到敌人血量也会出现负数，为什么呢？——因为不论是玩家还是敌人，用的是同一套逻辑。

::: tabs

@tab **方法一**

```python
elif user_input == "D":
    enemy_attack_value = enemy.attack()
    player.being_attack(enemy_attack_value)
```

不过单纯这种方法，修改后并不能很简单、很轻松直观的看见血量成为负数的结果。测试如下：

```python
AI悦创's hp is 100.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 65.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 31.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 11.
Enemy's hp is 80.
Attack or Defence(A/D):D
You Lose!
```

那接下来该怎么办？既然去掉不直观，那就扩大敌人攻击，成为原有的 2 倍！

```python
elif user_input == "D":
    enemy_attack_value = enemy.attack() * 2
    player.being_attack(enemy_attack_value)
```

经过上面的测试，方法一宣布失败！这就是研究🧐，大家要学起来研究。

其实，方法一的失败核心还是：我们没有把最后的血量进行输出，这才是方法一失败的真正原因。所以，接下来方法二才是重头戏。

@tab **方法二**

虽然，方法一失败了。但并不是方法一一无是处，而是可以结合在方法二，把最终的血量输出即可。如果不借助方法一会怎么样？

能不能继续证明会出现负数血量？——答案是可以的，但是测试的时候得看概率是否会出现。而方法一

在代码中添加合适的输出即可：

```python {13,17,20}
import random

class Creature():
    # ---snip---

player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

while player.not_dead() and enemy.not_dead():
    # ---snip---

    elif user_input == "D":
        enemy_attack_value = enemy.attack() * 2
        player.being_attack(enemy_attack_value)

if player.not_dead():
    print(f"Player hp: {player.hp}, Enemy hp: {enemy.hp}")
    print("You Win!")
else:
    print(f"Player hp: {player.hp}, Enemy hp: {enemy.hp}")
    print("You Lose!")
```

接着，我们运行测试。

```python
AI悦创's hp is 100.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 44.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 18.
Enemy's hp is 80.
Attack or Defence(A/D):D
Player hp: -56, Enemy hp: 80
You Lose!
```

完美，我们成功证明血量会出现负数。有可能你会疑惑两个点：

- Point 1：原本 0.1 会出现吗？
- Point 2：为什么都是 D 防守来测试？

对于 Point 1：会出现，2 只是放大了伤害，核心逻辑没有被改变。我们可以改回来试一试。

至于 Point 2：不是必须使用 D 防守来测试，但是 D 可以使我们最快的达到测试目的，以及展现玩家血量出现负数的行为。

把敌人伤害改为原本的 0.1 后测试如下：

```python
AI悦创's hp is 100.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 98.1.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 96.6.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 95.39999999999999.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 92.89999999999999.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 90.89999999999999.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 89.6.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 89.3.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 87.7.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 83.2.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 82.8.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 80.1.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 78.5.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 77.4.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 75.9.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 72.0.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 67.4.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 65.10000000000001.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 61.900000000000006.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 59.10000000000001.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 59.00000000000001.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 54.2.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 53.300000000000004.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 51.800000000000004.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 50.300000000000004.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 47.300000000000004.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 43.400000000000006.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 38.7.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 38.400000000000006.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 38.00000000000001.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 36.10000000000001.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 32.70000000000001.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 29.80000000000001.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 29.600000000000012.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 26.400000000000013.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 21.500000000000014.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 17.100000000000016.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 14.100000000000016.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 11.900000000000016.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 10.300000000000017.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 7.700000000000017.
Enemy's hp is 80.
Attack or Defence(A/D):D
AI悦创's hp is 2.700000000000017.
Enemy's hp is 80.
Attack or Defence(A/D):D
Player hp: -0.9999999999999831, Enemy hp: 80
You Lose!
```

从上面的代码结果，我想你也知道了。虽然最后可以得出结果，但是我们得走太长的“路”了。

:::

接下来，我们来解决这个血量出现负数的问题。

**思路很简单：**

- Step 1：血量在什么情况下会变成负数？
- Step 2：血量只有在操作的时候，才会出现负数；
- Step 3：那么代码中哪个位置在操作血量？
- Step 4：`being_attack()` 函数操作，所以只需要修改这个函数的计算逻辑或最终的取值逻辑即可；
- Solution：如果血量出现负数，则把血量赋值为 0；

代码实现如下：

```python {6-9}
import random

class Creature():
    # ---snip---

    def being_attack(self, attack_value):
        self.hp -= attack_value
        if self.hp < 0:
            self.hp = 0
    # ---snip---

player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

while player.not_dead() and enemy.not_dead():
    # ---snip---

    elif user_input == "D":
        enemy_attack_value = enemy.attack() * 2
        player.being_attack(enemy_attack_value)

if player.not_dead():
    print(f"Player hp: {player.hp}, Enemy hp: {enemy.hp}")
    print("You Win!")
else:
    print(f"Player hp: {player.hp}, Enemy hp: {enemy.hp}")
    print("You Lose!")
```

经过测试，我们发现成功修复 bug。那么我们还可以结合使用 `max()` 函数进行实现：

```python
def being_attack(self, dmg):
    """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
    self.hp = max(0, int(self.hp - dmg))
```

**目前的完整代码：**

```python {14-16,18-19}
import random

class Creature():
    def __init__(self, hp, name):
        self.hp = hp
        self.name = name

    def attack(self):
        return random.randint(0, 50)

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, dmg: float):
        """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
        self.hp = max(0, int(self.hp - dmg))

    def show_status(self):
        print(f"{self.name}'s HP → {self.hp}")

player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

while player.not_dead() and enemy.not_dead():
    player.show_status()
    enemy.show_status()

    user_input = input("Attack or Defence(A/D):")

    if user_input == "A":
        player_attack_value = player.attack()
        enemy_attack_value = enemy.attack()

        enemy.being_attack(player_attack_value)
        player.being_attack(enemy_attack_value)

    elif user_input == "D":
        enemy_attack_value = enemy.attack() * 0.1
        player.being_attack(enemy_attack_value)

if player.not_dead():
    print("You Win!")
else:
    print("You Lose!")
```



### 14.18 增添用户输入限制「可选」

原先的实现中，我们没有限制用户输入的指令。而在常规游戏中，都是会在用户输入非法指令时，提示：`输入无效...`。

代码实现如下：

```python
user_input = input("Attack or Defence (A/D)：").strip().upper()
while user_input not in ("A", "D"):
    user_input = input("输入无效，请重新输入 A 或 D：").strip().upper()
```



### 14.19 敌人状态随机

敌人是随机状态，有可能是攻击，有可能是防守。如果敌人是防守状态，敌人受到玩家的伤害减半。

#### 14.19.1 初步实现

要实现敌人状态的随机，我们就需要借助 random 库的随机选择功能，代码实现如下：

```python
enemy_status = ['Attack', 'Defence']
enemy_choice = random.choice(enemy_status)
```

我们已经实现，敌人状态的随机选择。接下来就实现选择判断即可，我们来操作一下。

```python {5-16}
while player.not_dead() and enemy.not_dead():
    # ---snip---

    if user_input == "A":
        enemy_status = ['Attack', 'Defence']
        enemy_choice = random.choice(enemy_status)
        if enemy_choice == "Defence":
            print(f"{enemy.name} chose to defend!")
            player_attack_value = player.attack() * 0.5
            enemy.being_attack(player_attack_value)
        else:
            print(f"{enemy.name} chose to attack!")
            player_attack_value = player.attack()
            enemy_attack_value = enemy.attack()
            player.being_attack(enemy_attack_value)
            enemy.being_attack(player_attack_value)

    elif user_input == "D":
        enemy_attack_value = enemy.attack() * 0.1
        player.being_attack(enemy_attack_value)
```

那至于玩家防守是，敌人也是如法炮制：

```python
import random

class Creature():
    # ---snip---

player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

while player.not_dead() and enemy.not_dead():
    # ---snip---

    if user_input == "A":
        # ---snip---

    elif user_input == "D":
        enemy_status = ['Attack', 'Defence']
        enemy_choice = random.choice(enemy_status)
        if enemy_choice == "Defence":
            print(f"{enemy.name} chose to defend!")
            print("Both defended, no damage dealt.")
        else:
            print(f"{enemy.name} chose to attack!")
            enemy_attack_value = enemy.attack() * 0.1
            player.being_attack(enemy_attack_value)

# ---snip---
```

**目前的完整代码**：

```python
import random

class Creature():
    def __init__(self, hp, name):
        self.hp = hp
        self.name = name

    def attack(self):
        return random.randint(0, 50)

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, dmg: float):
        """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
        self.hp = max(0, int(self.hp - dmg))

    def show_status(self):
        print(f"{self.name}'s HP → {self.hp}")

player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

while player.not_dead() and enemy.not_dead():
    player.show_status()
    enemy.show_status()

    user_input = input("Attack or Defence (A/D)：").strip().upper()
    while user_input not in ("A", "D"):
        user_input = input("输入无效，请重新输入 A 或 D：").strip().upper()

    if user_input == "A":
        enemy_status = ['Attack', 'Defence']
        enemy_choice = random.choice(enemy_status)
        if enemy_choice == "Defence":
            print(f"{enemy.name} chose to defend!")
            player_attack_value = player.attack() * 0.5
            enemy.being_attack(player_attack_value)
        else:
            print(f"{enemy.name} chose to attack!")
            player_attack_value = player.attack()
            enemy_attack_value = enemy.attack()
            player.being_attack(enemy_attack_value)
            enemy.being_attack(player_attack_value)

    elif user_input == "D":
        enemy_status = ['Attack', 'Defence']
        enemy_choice = random.choice(enemy_status)
        if enemy_choice == "Defence":
            print(f"{enemy.name} chose to defend!")
            print("Both defended, no damage dealt.")
        else:
            print(f"{enemy.name} chose to attack!")
            enemy_attack_value = enemy.attack() * 0.1
            player.being_attack(enemy_attack_value)

if player.not_dead():
    print("You Win!")
else:
    print("You Lose!")
```



#### 14.19.2 改良实现

不过，上面的代码可以进行改进。怎么改进呢？

- **优化一**：在玩家进行“攻击”操作时，不论敌人是何种状态，玩家皆为攻击；

    ::: code-tabs

    @tab 优化前

    ```python
    import random
    
    class Creature():
        # ---snip---
    
    player = Creature(100, "AI悦创")
    enemy = Creature(80, "Enemy")
    
    while player.not_dead() and enemy.not_dead():
        # ---snip---
    
        if user_input == "A":
            enemy_status = ['Attack', 'Defence']
            enemy_choice = random.choice(enemy_status)
            if enemy_choice == "Defence":
                print(f"{enemy.name} chose to defend!")
                player_attack_value = player.attack() * 0.5
                enemy.being_attack(player_attack_value)
            else:
                print(f"{enemy.name} chose to attack!")
                player_attack_value = player.attack()
                enemy_attack_value = enemy.attack()
                player.being_attack(enemy_attack_value)
                enemy.being_attack(player_attack_value)
    
        elif user_input == "D":
            # ---snip---
    
    # ---snip---
    ```

    @tab 优化后

    ```python
    import random
    
    
    class Creature():
        # ---snip---
    
    
    player = Creature(100, "AI悦创")
    enemy = Creature(80, "Enemy")
    
    while player.not_dead() and enemy.not_dead():
        # ---snip---
    
        if user_input == "A":
            enemy_status = ['Attack', 'Defence']
            enemy_choice = random.choice(enemy_status)
    
            player_attack_coefficient = 1  # MR 取名
            if enemy_choice == "Defence":
                print(f"{enemy.name} chose to defend!")
                player_attack_coefficient = 0.5
            else:
                print(f"{enemy.name} chose to attack!")
                enemy_attack_value = enemy.attack()
                player.being_attack(enemy_attack_value)
            player_attack_value = player.attack()
            enemy.being_attack(player_attack_value * player_attack_coefficient)
    
        elif user_input == "D":
            # ---snip---
    
    # ---snip---
    ```

    :::

- **优化二**：不论玩家是攻击或防守，因为需要一个敌人的当前状态，所以不论敌人状态是攻击或防守，都要生成一个敌人的当前状态；

    ::: code-tabs

    @tab 优化前

    ```python
    import random
    
    
    class Creature():
        # ---snip---
    
    
    player = Creature(100, "AI悦创")
    enemy = Creature(80, "Enemy")
    
    while player.not_dead() and enemy.not_dead():
        # ---snip---
    
        if user_input == "A":
            enemy_status = ['Attack', 'Defence']
            enemy_choice = random.choice(enemy_status)
    
            # ---snip---
    
        elif user_input == "D":
            enemy_status = ['Attack', 'Defence']
            enemy_choice = random.choice(enemy_status)
            # ---snip---
    
    # ---snip---
    ```

    @tab 优化后

    ```python
    import random
    
    
    class Creature():
        # ---snip---
    
    
    player = Creature(100, "AI悦创")
    enemy = Creature(80, "Enemy")
    
    while player.not_dead() and enemy.not_dead():
        # ---snip---
    
        enemy_status = ['Attack', 'Defence']
        enemy_choice = random.choice(enemy_status)
        if user_input == "A":
            # ---snip---
    
        elif user_input == "D":
            # ---snip---
    
    # ---snip---
    ```

    :::

当我们优化之后，发现第一个优化其实必要性不大，但实际开发就是如此，你更新了一个新的功能或代码，客户、用户觉得没必要。但我们也懒得改回去。

我们所追求的就是都尽可能讲到，以后你可以想到。

**目前的完整代码**：

```python
import random


class Creature():
    def __init__(self, hp, name):
        self.hp = hp
        self.name = name

    def attack(self):
        return random.randint(0, 50)

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, dmg: float):
        """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
        self.hp = max(0, int(self.hp - dmg))

    def show_status(self):
        print(f"{self.name}'s HP → {self.hp}")


player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

while player.not_dead() and enemy.not_dead():
    player.show_status()
    enemy.show_status()

    user_input = input("Attack or Defence (A/D)：").strip().upper()
    while user_input not in ("A", "D"):
        user_input = input("输入无效，请重新输入 A 或 D：").strip().upper()

    enemy_status = ['Attack', 'Defence']
    enemy_choice = random.choice(enemy_status)
    if user_input == "A":
        player_attack_coefficient = 1  # MR 取名
        if enemy_choice == "Defence":
            print(f"{enemy.name} chose to defend!")
            player_attack_coefficient = 0.5
        else:
            print(f"{enemy.name} chose to attack!")
            enemy_attack_value = enemy.attack()
            player.being_attack(enemy_attack_value)
        player_attack_value = player.attack()
        enemy.being_attack(player_attack_value * player_attack_coefficient)

    elif user_input == "D":
        if enemy_choice == "Defence":
            print(f"{enemy.name} chose to defend!")
            print("Both defended, no damage dealt.")
        else:
            print(f"{enemy.name} chose to attack!")
            enemy_attack_value = enemy.attack() * 0.1
            player.being_attack(enemy_attack_value)

if player.not_dead():
    print("You Win!")
else:
    print("You Lose!")
```





#### 14.19.3 游戏策略升级

当前的游戏策略，没有很完备。

因为玩家防守时，敌人必须要攻击，不能两个人都防守。——进一步升级：玩家防守时，敌人必然攻击！

```python
elif user_input == "D":
    enemy_attack_value = enemy.attack() * 0.1
    player.being_attack(enemy_attack_value)
```

其实就是一开始的代码，这就是开发。没准一开始的，就是最好的。

**截止目前程序的完整代码：**

```python
import random


class Creature():
    def __init__(self, hp, name):
        self.hp = hp
        self.name = name

    def attack(self):
        return random.randint(0, 50)

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, dmg: float):
        """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
        self.hp = max(0, int(self.hp - dmg))

    def show_status(self):
        print(f"{self.name}'s HP → {self.hp}")


player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

while player.not_dead() and enemy.not_dead():
    player.show_status()
    enemy.show_status()

    user_input = input("Attack or Defence (A/D)：").strip().upper()
    while user_input not in ("A", "D"):
        user_input = input("输入无效，请重新输入 A 或 D：").strip().upper()

    enemy_status = ['Attack', 'Defence']
    enemy_choice = random.choice(enemy_status)
    if user_input == "A":
        player_attack_coefficient = 1  # MR 取名
        if enemy_choice == "Defence":
            print(f"{enemy.name} chose to defend!")
            player_attack_coefficient = 0.5
        else:
            print(f"{enemy.name} chose to attack!")
            enemy_attack_value = enemy.attack()
            player.being_attack(enemy_attack_value)
        player_attack_value = player.attack()
        enemy.being_attack(player_attack_value * player_attack_coefficient)

    elif user_input == "D":
        enemy_attack_value = enemy.attack() * 0.1
        player.being_attack(enemy_attack_value)

if player.not_dead():
    print("You Win!")
else:
    print("You Lose!")
```



### 14.20 玩家的回血技能

当玩家血量低于 50%（原本血量 1/2） 时，提示玩家可以输入 "H" 来使用治疗技能，直接回血 100%（满血）。

> 要求：
>
> 1. 仅限使用一次！
> 2. 虽然只能使用一次，当不代表自己想在什么时候使用回血就使用，只有在“提示时”才能使用；
> 3. 对于血量，按照设定的初始血量来进行操作；
>
> （MR 上课提出，补充日期：2025 年 9 月 9 日）

1. 初始化函数中添加记录当前最大血量，便于后期操作：

    ```python {3}
    def __init__(self, hp, name):
        self.hp = hp
        self.max_hp = hp  # 记录初始满血
        self.name = name
    ```

2. 实现回血函数：

    ```python
    def heal_full(self):
        """直接回到初始满血"""
        self.hp = self.max_hp
    ```

3. 改进状态输出函数，显示满血血量：

    ```python
    def show_status(self):
        # print(f"{self.name}'s HP → {self.hp}")
        print(f"{self.name}'s HP → {self.hp}/{self.max_hp}")
    ```

4. 实现回血代码：

    ```python
    heal_used = False  # 仅可使用一次
    
    while player.not_dead() and enemy.not_dead():
        # ---snip---
    
        # 是否出现治疗提示：仅当当前 HP < 初始 HP 的 50% 且尚未使用
        can_heal_now = (not heal_used) and (player.hp < player.max_hp * 0.5)
    
        if can_heal_now:
            prompt = 'Attack or Defence or Heal (A/D/H)：'
            valid_inputs = {"A", "D", "H"}
            extra_tip = '（提示：你现在可以按 H 回满血，仅此一次）'
            print(extra_tip)
        else:
            prompt = 'Attack or Defence (A/D)：'
            valid_inputs = {"A", "D"}
    
        user_input = input(prompt).strip().upper()
        while user_input not in valid_inputs:
            user_input = input("输入无效，请重新输入：" + prompt).strip().upper()
    
        # 敌人选择（对 A/D 有影响；若玩家选择 H，我们让敌人本回合直接攻击）
        enemy_status = ['Attack', 'Defence']
        enemy_choice = random.choice(enemy_status)
    
        if user_input == "H":
            # 只有在 can_heal_now 为 True 时才会进入到这里
            print("你使用了治疗技能！血量已回满。")
            player.heal_full()
            heal_used = True
    
            # 敌人回合：直接攻击（先治再挨打，符合“直接回血 100%”的直觉）
            enemy_attack_value = enemy.attack()
            print(f"{enemy.name} 攻击了你，造成 {int(enemy_attack_value)} 点伤害！")  # 使用 int 避免出现小数，可以省略
            player.being_attack(enemy_attack_value)
    
        elif user_input == "A":
            # ---snip---
    
        elif user_input == "D":
            # 防御：敌人攻击减伤为 90%
            enemy_attack_value = enemy.attack() * 0.1
            # print(f"{enemy.name} 攻击了你（被你防住大部分），造成 {int(enemy_attack_value)} 点伤害！")
            player.being_attack(enemy_attack_value)
    
    # ---snip---
    ```

    **要点回顾：**

    - 只在“当前 HP < 初始 HP 的一半”且“未使用过”时，输入里才会出现 `H`。
    - 使用 `H` 立刻回到初始满血（100%），**随后敌人本回合仍会攻击一次**（治疗消耗一个回合）。
    - 任何时候都不会在未提示 `H` 时接受治疗输入，满足“只能在提示时使用”的限制。

    ::: details 截止目前的完整代码

    ```python
    import random
    
    
    class Creature:
        def __init__(self, hp, name):
            self.hp = int(hp)
            self.max_hp = int(hp)   # 记录初始满血
            self.name = name
    
        def attack(self):
            return random.randint(0, 50)
    
        def not_dead(self):
            return self.hp > 0
    
        def being_attack(self, dmg: float):
            """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
            self.hp = max(0, int(self.hp - dmg))
    
        def heal_full(self):
            """直接回到初始满血"""
            self.hp = self.max_hp
    
        def show_status(self):
            print(f"{self.name}'s HP → {self.hp}/{self.max_hp}")
    
    
    player = Creature(100, "AI悦创")
    enemy = Creature(80, "Enemy")
    
    heal_used = False  # 仅可使用一次
    
    while player.not_dead() and enemy.not_dead():
        player.show_status()
        enemy.show_status()
    
        # 是否出现治疗提示：仅当当前 HP < 初始 HP 的 50% 且尚未使用
        can_heal_now = (not heal_used) and (player.hp < player.max_hp * 0.5)
    
        if can_heal_now:
            prompt = 'Attack or Defence or Heal (A/D/H)：'
            valid_inputs = {"A", "D", "H"}
            extra_tip = '（提示：你现在可以按 H 回满血，仅此一次）'
            print(extra_tip)
        else:
            prompt = 'Attack or Defence (A/D)：'
            valid_inputs = {"A", "D"}
    
        user_input = input(prompt).strip().upper()
        while user_input not in valid_inputs:
            user_input = input("输入无效，请重新输入：" + prompt).strip().upper()
    
        # 敌人选择（对 A/D 有影响；若玩家选择 H，我们让敌人本回合直接攻击）
        enemy_status = ['Attack', 'Defence']
        enemy_choice = random.choice(enemy_status)
    
        if user_input == "H":
            # 只有在 can_heal_now 为 True 时才会进入到这里
            print("你使用了治疗技能！血量已回满。")
            player.heal_full()
            heal_used = True
    
            # 敌人回合：直接攻击（先治再挨打，符合“直接回血 100%”的直觉）
            enemy_attack_value = enemy.attack()
            print(f"{enemy.name} 攻击了你，造成 {int(enemy_attack_value)} 点伤害！")
            player.being_attack(enemy_attack_value)
    
        elif user_input == "A":
            player_attack_coefficient = 1
            if enemy_choice == "Defence":
                print(f"{enemy.name} chose to defend!")
                player_attack_coefficient = 0.5
            else:
                print(f"{enemy.name} chose to attack!")
                enemy_attack_value = enemy.attack()
                player.being_attack(enemy_attack_value)
    
            player_attack_value = player.attack()
            enemy.being_attack(player_attack_value * player_attack_coefficient)
    
        elif user_input == "D":
            # 防御：敌人攻击减伤为 90%
            enemy_attack_value = enemy.attack() * 0.1
            # print(f"{enemy.name} 攻击了你（被你防住大部分），造成 {int(enemy_attack_value)} 点伤害！")
            player.being_attack(enemy_attack_value)
    
    if player.not_dead():
        print("You Win!")
    else:
        print("You Lose!")
    ```

    :::

    ::: details 补充·另一种实现 MR 同学实现

    1. 适合的简单逻辑实现

        ```python
        import random
        
        
        class Creature():
            # ---snip---
        
        
        # ---snip---
        
        while player.not_dead() and enemy.not_dead():
            # ---snip---
        
            if (player.hp < player.max_hp * 0.5) and (not heal_used):
                print("（提示：你现在可以按 H 回满血，仅此一次）")
                
            user_input = input("Attack or Defence (A/D)：").strip().upper()
            while user_input not in ("A", "D", "H"):
                user_input = input("输入无效，请重新输入 A 或 D：").strip().upper()
        
            enemy_status = ['Attack', 'Defence']
            enemy_choice = random.choice(enemy_status)
            if user_input == "A":
                # ---snip---
        
            elif user_input == "D":
                # ---snip---
        
            elif user_input == "H":
                player.heal_full()
                heal_used = True
                print(f"{player.name} healed to full health!")
        
        # ---snip---
        ```

    2. 不过，如果详细查看上面的代码实现，会发现：**用户输入的提示是可以改进的**。

        ```python
        import random
        
        
        class Creature():
            # ---snip---
        
        
        # ---snip---
        
        while player.not_dead() and enemy.not_dead():
            # ---snip---
        
            prompt = "Attack or Defence (A/D)："
        
            if (player.hp < player.max_hp * 0.5) and (not heal_used):
                print("（提示：你现在可以按 H 回满血，仅此一次）")
                prompt = "Attack or Defence or Heal (A/D/H)："
        
            user_input = input(prompt).strip().upper()
            while user_input not in ("A", "D", "H"):
                user_input = input("输入无效，请重新输入 A 或 D：").strip().upper()
        
            # ---snip---
            if user_input == "A":
                # ---snip---
        
            elif user_input == "D":
                # ---snip---
        
            elif user_input == "H":
                player.heal_full()
                heal_used = True
                print(f"{player.name} healed to full health!")
        
        # ---snip---
        ```

    3. 此方法的完整代码，当前方法是吧 `("A", "D", "H")` 固定写法，更好的写法在后文。

        ```python
        import random
        
        
        class Creature():
            def __init__(self, hp, name):
                self.hp = hp
                self.max_hp = hp  # 记录初始满血
                self.name = name
        
            def attack(self):
                return random.randint(0, 50)
        
            def not_dead(self):
                return self.hp > 0
        
            def being_attack(self, dmg: float):
                """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
                self.hp = max(0, int(self.hp - dmg))
        
            def heal_full(self):
                """直接回到初始满血"""
                self.hp = self.max_hp
        
            def show_status(self):
                # print(f"{self.name}'s HP → {self.hp}")
                print(f"{self.name}'s HP → {self.hp}/{self.max_hp}")
        
        
        heal_used = False  # 治疗仅限一次
        
        player = Creature(100, "AI悦创")
        enemy = Creature(80, "Enemy")
        
        while player.not_dead() and enemy.not_dead():
            player.show_status()
            enemy.show_status()
        
            prompt = "Attack or Defence (A/D)："
        
            if (player.hp < player.max_hp * 0.5) and (not heal_used):
                print("（提示：你现在可以按 H 回满血，仅此一次）")
                prompt = "Attack or Defence or Heal (A/D/H)："
        
            user_input = input(prompt).strip().upper()
            while user_input not in ("A", "D", "H"):
                user_input = input("输入无效，请重新输入 A 或 D：").strip().upper()
        
            enemy_status = ['Attack', 'Defence']
            enemy_choice = random.choice(enemy_status)
            if user_input == "A":
                player_attack_coefficient = 1  # MR 取名
                if enemy_choice == "Defence":
                    print(f"{enemy.name} chose to defend!")
                    player_attack_coefficient = 0.5
                else:
                    print(f"{enemy.name} chose to attack!")
                    enemy_attack_value = enemy.attack()
                    player.being_attack(enemy_attack_value)
                player_attack_value = player.attack()
                enemy.being_attack(player_attack_value * player_attack_coefficient)
        
            elif user_input == "D":
                enemy_attack_value = enemy.attack() * 0.1
                player.being_attack(enemy_attack_value)
        
            elif user_input == "H":
                player.heal_full()
                heal_used = True
                print(f"{player.name} healed to full health!")
                prompt = "Attack or Defence (A/D)："
        
        if player.not_dead():
            print("You Win!")
        else:
            print("You Lose!")
        ```

    :::

5. 回血都是有代价的，没有代价怎么能行。如果玩家使用了回血技能，后续敌人攻击将翻倍。

    ```python
    heal_used = False             # 治疗仅限一次
    heal_penalty_active = False   # 是否已触发“敌人攻击翻倍”的惩罚
    
    while player.not_dead() and enemy.not_dead():
        # ---snip---
    
        if heal_penalty_active:
            print('【警告】治疗代价生效中：敌人对你的伤害 ×2！')
    
        # ---snip---
    
        # 当前敌人伤害倍率（是否翻倍）
        def enemy_mul():
            return 2.0 if heal_penalty_active else 1.0
    
        if user_input == "H":
            # 只有在 can_heal_now 为 True 时才会进入到这里
            print("你使用了治疗技能！血量已回满。")
            player.heal_full()
            heal_used = True
    
            # 触发治疗代价：从现在起敌人攻击翻倍（包含本回合的随后的敌人攻击）
            heal_penalty_active = True
    
            # 敌人回合：直接攻击（先治再挨打）
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * enemy_mul()
            print(f"{enemy.name} 攻击了你，造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
            player.being_attack(damage)
    
        elif user_input == "A":
            player_attack_coefficient = 1
            if enemy_choice == "Defence":
                # ---snip---
            else:
                print(f"{enemy.name} chose to attack!")
                raw_enemy_attack_value = enemy.attack()
                damage = raw_enemy_attack_value * enemy_mul()
                print(f"{enemy.name} 对你造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
                player.being_attack(damage)
    
            player_attack_value = player.attack()
            enemy.being_attack(player_attack_value * player_attack_coefficient)
    
        elif user_input == "D":
            # 防御：敌人攻击减伤为 90%，然后再应用翻倍倍率
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * 0.1 * enemy_mul()
            print(f"{enemy.name} 攻击了你（被你防住大部分），造成 {int(damage)} 点伤害！"
                  f"（原始{int(raw_enemy_attack_value)} × 减伤0.1 × 倍率{enemy_mul():.0f}）")  # 可选
            player.being_attack(damage)
    
    # ---snip---
    ```

6. 截止目前程序的完整代码：

    ::: code-tabs

    @tab Code 1

    ```python
    import random
    
    
    class Creature:
        def __init__(self, hp, name):
            self.hp = int(hp)
            self.max_hp = int(hp)   # 记录初始满血
            self.name = name
    
        def attack(self):
            return random.randint(0, 50)
    
        def not_dead(self):
            return self.hp > 0
    
        def being_attack(self, dmg: float):
            """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
            self.hp = max(0, int(self.hp - dmg))
    
        def heal_full(self):
            """直接回到初始满血"""
            self.hp = self.max_hp
    
        def show_status(self):
            print(f"{self.name}'s HP → {self.hp}/{self.max_hp}")
    
    
    player = Creature(100, "AI悦创")
    enemy = Creature(80, "Enemy")
    
    heal_used = False             # 治疗仅限一次
    heal_penalty_active = False   # 是否已触发“敌人攻击翻倍”的惩罚
    
    while player.not_dead() and enemy.not_dead():
        player.show_status()
        enemy.show_status()
    
        # 是否出现治疗提示：仅当当前 HP < 初始 HP 的 50% 且尚未使用
        can_heal_now = (not heal_used) and (player.hp < player.max_hp * 0.5)
    
        if can_heal_now:
            prompt = 'Attack or Defence or Heal (A/D/H)：'
            valid_inputs = {"A", "D", "H"}
            print('（提示：你现在可以按 H 回满血，仅此一次）')
        else:
            prompt = 'Attack or Defence (A/D)：'
            valid_inputs = {"A", "D"}
    
        if heal_penalty_active:
            print('【警告】治疗代价生效中：敌人对你的伤害 ×2！')
    
        user_input = input(prompt).strip().upper()
        while user_input not in valid_inputs:
            user_input = input("输入无效，请重新输入：" + prompt).strip().upper()
    
        # 敌人选择（对 A/D 有影响；若玩家选择 H，我们让敌人本回合直接攻击）
        enemy_status = ['Attack', 'Defence']
        enemy_choice = random.choice(enemy_status)
    
        # 当前敌人伤害倍率（是否翻倍）
        def enemy_mul():
            return 2.0 if heal_penalty_active else 1.0
    
        if user_input == "H":
            # 只有在 can_heal_now 为 True 时才会进入到这里
            print("你使用了治疗技能！血量已回满。")
            player.heal_full()
            heal_used = True
    
            # 触发治疗代价：从现在起敌人攻击翻倍（包含本回合的随后的敌人攻击）
            heal_penalty_active = True
    
            # 敌人回合：直接攻击（先治再挨打）
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * enemy_mul()
            print(f"{enemy.name} 攻击了你，造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
            player.being_attack(damage)
    
        elif user_input == "A":
            player_attack_coefficient = 1
            if enemy_choice == "Defence":
                print(f"{enemy.name} chose to defend!")
                player_attack_coefficient = 0.5
            else:
                print(f"{enemy.name} chose to attack!")
                raw_enemy_attack_value = enemy.attack()
                damage = raw_enemy_attack_value * enemy_mul()
                print(f"{enemy.name} 对你造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
                player.being_attack(damage)
    
            player_attack_value = player.attack()
            enemy.being_attack(player_attack_value * player_attack_coefficient)
    
        elif user_input == "D":
            # 防御：敌人攻击减伤为 90%，然后再应用翻倍倍率
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * 0.1 * enemy_mul()
            print(f"{enemy.name} 攻击了你（被你防住大部分），造成 {int(damage)} 点伤害！"
                  f"（原始{int(raw_enemy_attack_value)} × 减伤0.1 × 倍率{enemy_mul():.0f}）")
            player.being_attack(damage)
    
    if player.not_dead():
        print("You Win!")
    else:
        print("You Lose!")
    ```

    @tab 简化输出

    ```python
    import random
    
    
    class Creature:
        def __init__(self, hp, name):
            self.hp = int(hp)
            self.max_hp = int(hp)   # 记录初始满血
            self.name = name
    
        def attack(self):
            return random.randint(0, 50)
    
        def not_dead(self):
            return self.hp > 0
    
        def being_attack(self, dmg: float):
            """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
            self.hp = max(0, int(self.hp - dmg))
    
        def heal_full(self):
            """直接回到初始满血"""
            self.hp = self.max_hp
    
        def show_status(self):
            print(f"{self.name}'s HP → {self.hp}/{self.max_hp}")
    
    
    player = Creature(100, "AI悦创")
    enemy = Creature(80, "Enemy")
    
    heal_used = False             # 治疗仅限一次
    heal_penalty_active = False   # 是否已触发“敌人攻击翻倍”的惩罚
    
    while player.not_dead() and enemy.not_dead():
        player.show_status()
        enemy.show_status()
    
        # 是否出现治疗提示：仅当当前 HP < 初始 HP 的 50% 且尚未使用
        can_heal_now = (not heal_used) and (player.hp < player.max_hp * 0.5)
    
        if can_heal_now:
            prompt = 'Attack or Defence or Heal (A/D/H)：'
            valid_inputs = {"A", "D", "H"}
            print('（提示：你现在可以按 H 回满血，仅此一次）')
        else:
            prompt = 'Attack or Defence (A/D)：'
            valid_inputs = {"A", "D"}
    
        if heal_penalty_active:
            print('【警告】治疗代价生效中：敌人对你的伤害 ×2！')
    
        user_input = input(prompt).strip().upper()
        while user_input not in valid_inputs:
            user_input = input("输入无效，请重新输入：" + prompt).strip().upper()
    
        # 敌人选择（对 A/D 有影响；若玩家选择 H，我们让敌人本回合直接攻击）
        enemy_status = ['Attack', 'Defence']
        enemy_choice = random.choice(enemy_status)
    
        # 当前敌人伤害倍率（是否翻倍）
        def enemy_mul():
            return 2.0 if heal_penalty_active else 1.0
    
        if user_input == "H":
            # 只有在 can_heal_now 为 True 时才会进入到这里
            print("你使用了治疗技能！血量已回满。")
            player.heal_full()
            heal_used = True
    
            # 触发治疗代价：从现在起敌人攻击翻倍（包含本回合的随后的敌人攻击）
            heal_penalty_active = True
    
            # 敌人回合：直接攻击（先治再挨打）
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * enemy_mul()
            player.being_attack(damage)
    
        elif user_input == "A":
            player_attack_coefficient = 1
            if enemy_choice == "Defence":
                print(f"{enemy.name} chose to defend!")
                player_attack_coefficient = 0.5
            else:
                print(f"{enemy.name} chose to attack!")
                raw_enemy_attack_value = enemy.attack()
                damage = raw_enemy_attack_value * enemy_mul()
                player.being_attack(damage)
    
            player_attack_value = player.attack()
            enemy.being_attack(player_attack_value * player_attack_coefficient)
    
        elif user_input == "D":
            # 防御：敌人攻击减伤为 90%，然后再应用翻倍倍率
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * 0.1 * enemy_mul()
            player.being_attack(damage)
    
    if player.not_dead():
        print("You Win!")
    else:
        print("You Lose!")
    ```

    :::

    这个简化输出，其实是想简化游戏试玩过程中的，不过不简化貌似也不错，因为如果玩家血量低于 50% 且使用回血技能，就需要有提示，也可以不要。看实际每个人的选择。

按照目前的情况，因为给敌人添加上随机状态，其实在实际的试玩当中，我发现：玩家血量下降缓慢，虽然敌人是随机攻击、防守，但实际运行时，因为随机所以敌人有可能连续多轮的进行防守。

这个情况的解决方法有很多：

- **Solution 1**：增加敌人攻击时的攻击力；

- **Solution 2**：提升敌人随机时攻击的概率，降低敌人的防守的概率；

    原本代码：

    ```python
    enemy_status = ['Attack', 'Defence']
    enemy_choice = random.choice(enemy_status)
    ```

    这样是**等概率（50%/50%）随机选择 Attack 或 Defence。**

    **如果你想要控制 Attack 被选中的概率**，可以用 random.choices（注意有 s），它支持设置权重。

    你有没有什么方法来提升 Attack 这个结果：

    ::: code-tabs

    @tab 方法一：

    ```python
    enemy_status = ['Attack', 'Attack', 'Attack', 'Attack', 'Attack', 'Attack', 'Attack', 'Attack', 'Attack', 'Defence']
    enemy_choice = random.choice(enemy_status)
    # 手动增加 'Attack' 的概率
    ```

    @tab 方法二：

    ```python
    # 比如你想让 Attack 的概率是 70%，Defence 的概率是 30%：
    import random
    
    enemy_status = ['Attack', 'Defence']
    enemy_choice = random.choices(enemy_status, weights=[0.7, 0.3], k=1)[0]
    
    print(enemy_choice)
    
    """
    说明：
        1. weights=[0.7, 0.3] → Attack 70%，Defence 30%。
        2. k=1 → 只抽取一个结果，返回的是列表，所以要加 [0] 取出实际值。
    """
    # 通用写法（用百分比或整数权重都可以）
    enemy_choice = random.choices(['Attack', 'Defence'], weights=[70, 30], k=1)[0]
    # Attack 的概率就是 70%，Defence 的概率就是 30%。
    ```

    :::

- **Solution 3**：接入 AI 模型，进行实际对战；

- **Question 1**：现在上面代码是实现血量低于 50% 时提示是否回血，只要低于 50% 且未使用，就可以在随机时刻选择使用。但如果想要实现只有在首次显示时才可以实现回血，而不是每次。也就是：过了这个村，没了这个店，择需要改进代码。

    只需要把 `heal_used = True`，放在合适位置即可解决。

    - 用户输入那时刻（不合适，因为每轮用户都会输入。但是那时刻玩家生命还没达原本的 $\frac{1}{2}$）；
    - 在 `if can_heal_now:` 之内是最合适的，实现过了这个村没了这个店；
    - ——MR 同学上课提出，日期：2025 年 9 月 11 日

- **Question 2**：`【警告】治疗代价生效中：敌人对你的伤害 ×2！` 可以改进成只显示一次；

    解决方式：把警告放入 `if user_input == "H":` 当中，只会显示一次。——MR 同学想出的解决方案。



### 14.21 延伸任务「研究型」

优化血量显示，使用字符进度条显示当前血量。

> 具体的血条不做限制，发挥自己的创意。

#### 14.21.1 花里胡哨版本

![](https://blog.images.bornforthis.cn/docs-images/sha256/9d/9d9aa7202a75e953a46333b8bad70934f10e4f3a56160f3daa98fe631c64e47e.png)

::: code-tabs

@tab Code 1

```python
import random
import sys

# ====== 终端颜色与进度条工具 ======
RESET = "\033[0m"
FG_RED = "\033[31m"
FG_YELLOW = "\033[33m"
FG_GREEN = "\033[32m"
FG_CYAN = "\033[36m"
FG_MAGENTA = "\033[35m"

def _supports_color() -> bool:
    # 基本判断：是交互终端就上色；否则退化为无色
    return sys.stdout.isatty()

def colorize(s: str, color: str) -> str:
    if _supports_color():
        return f"{color}{s}{RESET}"
    return s

def hp_bar(cur: int, maxv: int, width: int = 30) -> str:
    cur = max(0, min(cur, maxv))
    ratio = cur / maxv if maxv > 0 else 0
    filled = int(round(ratio * width))
    empty = width - filled

    # 阈值配色：>50% 绿；20%~50% 黄；<=20% 红
    if ratio > 0.5:
        bar_color = FG_GREEN
    elif ratio > 0.2:
        bar_color = FG_YELLOW
    else:
        bar_color = FG_RED

    bar = "█" * filled + "░" * empty
    percent = f"{int(ratio * 100):3d}%"
    return f"[{colorize(bar, bar_color)}] {percent}  {cur}/{maxv}"

# ====== 你的游戏代码（加入进度条显示） ======
class Creature:
    def __init__(self, hp, name):
        self.hp = int(hp)
        self.max_hp = int(hp)  # 记录初始满血
        self.name = name

    def attack(self):
        return random.randint(0, 50)

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, dmg: float):
        """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
        self.hp = max(0, int(self.hp - dmg))

    def heal_full(self):
        """直接回到初始满血"""
        self.hp = self.max_hp

    def show_status(self):
        # 名称加一点配色区分玩家/敌人
        name_str = self.name
        if self.name == "AI悦创":
            name_str = colorize(self.name, FG_CYAN)
        elif self.name.lower().startswith("enemy"):
            name_str = colorize(self.name, FG_MAGENTA)

        print(f"{name_str} HP {hp_bar(self.hp, self.max_hp)}")

player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

heal_used = False  # 治疗仅限一次
heal_penalty_active = False  # 是否已触发“敌人攻击翻倍”的惩罚

while player.not_dead() and enemy.not_dead():
    print("\n=== 状态 ===")
    player.show_status()
    enemy.show_status()

    # 是否出现治疗提示：仅当当前 HP < 初始 HP 的 50% 且尚未使用
    can_heal_now = (not heal_used) and (player.hp < player.max_hp * 0.5)

    if can_heal_now:
        prompt = 'Attack or Defence or Heal (A/D/H)：'
        valid_inputs = {"A", "D", "H"}
        print(colorize('（提示：你现在可以按 H 回满血，仅此一次）', FG_YELLOW))
    else:
        prompt = 'Attack or Defence (A/D)：'
        valid_inputs = {"A", "D"}

    if heal_penalty_active:
        print(colorize('【警告】治疗代价生效中：敌人对你的伤害 ×2！', FG_RED))

    user_input = input(prompt).strip().upper()
    while user_input not in valid_inputs:
        user_input = input("输入无效，请重新输入：" + prompt).strip().upper()

    # 敌人选择（对 A/D 有影响；若玩家选择 H，我们让敌人本回合直接攻击）
    enemy_status = ['Attack', 'Defence']
    enemy_choice = random.choices(enemy_status, weights=[0.7, 0.3], k=1)[0]  # 敌人更倾向于攻击

    # 当前敌人伤害倍率（是否翻倍）
    def enemy_mul():
        return 2.0 if heal_penalty_active else 1.0

    if user_input == "H":
        # 只有在 can_heal_now 为 True 时才会进入到这里（上面已限制输入选项）
        print(colorize("你使用了治疗技能！血量已回满。", FG_GREEN))
        player.heal_full()
        heal_used = True

        # 触发治疗代价：从现在起敌人攻击翻倍（包含本回合的随后的敌人攻击）
        heal_penalty_active = True

        # 敌人回合：直接攻击（先治再挨打）
        raw_enemy_attack_value = enemy.attack()
        damage = raw_enemy_attack_value * enemy_mul()
        print(f"{enemy.name} 攻击了你，造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
        player.being_attack(damage)

    elif user_input == "A":
        player_attack_coefficient = 1
        if enemy_choice == "Defence":
            print(f"{enemy.name} chose to defend!")
            player_attack_coefficient = 0.5
        else:
            print(f"{enemy.name} chose to attack!")
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * enemy_mul()
            print(f"{enemy.name} 对你造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
            player.being_attack(damage)

        player_attack_value = player.attack()
        enemy.being_attack(player_attack_value * player_attack_coefficient)
        print(f"你对 {enemy.name} 造成 {int(player_attack_value * player_attack_coefficient)} 点伤害。")

    elif user_input == "D":
        # 防御：敌人攻击减伤为 90%，然后再应用翻倍倍率
        raw_enemy_attack_value = enemy.attack()
        damage = raw_enemy_attack_value * 0.1 * enemy_mul()
        print(f"{enemy.name} 攻击了你（被你防住大部分），造成 {int(damage)} 点伤害！"
              f"（原始{int(raw_enemy_attack_value)} × 减伤0.1 × 倍率{enemy_mul():.0f}）")
        player.being_attack(damage)

if player.not_dead():
    print(colorize("You Win!", FG_GREEN))
else:
    print(colorize("You Lose!", FG_RED))
```

@tab 注释

```python
import sys  # 用于判断标准输出是否是一个“交互式终端”（TTY），从而决定是否使用颜色

# ====== 终端颜色与进度条工具 ======
RESET = "\033[0m"     # ANSI 转义序列：重置所有颜色/样式
FG_RED = "\033[31m"   # 前景色：红
FG_YELLOW = "\033[33m"# 前景色：黄
FG_GREEN = "\033[32m" # 前景色：绿
FG_CYAN = "\033[36m"  # 前景色：青（给玩家名上色用）
FG_MAGENTA = "\033[35m"# 前景色：洋红（给敌人名上色用）

def _supports_color() -> bool:
    """
    判断当前 stdout 是否是一个 TTY（交互式终端）。
    - 如果是 TTY，通常可以正确解析 ANSI 颜色转义序列 -> 返回 True。
    - 如果不是（比如写入文件、被重定向到日志系统），就不要输出颜色码 -> 返回 False。
    这样可以避免在不支持颜色的环境里看到一堆“\x1b[31m”之类的乱码。
    """
    return sys.stdout.isatty()

def colorize(s: str, color: str) -> str:
    """
    根据 _supports_color() 的结果，有选择地给字符串加颜色。
    - 支持颜色：前后包裹 color 与 RESET 转义码。
    - 不支持颜色：原样返回，避免污染输出。
    """
    if _supports_color():
        return f"{color}{s}{RESET}"
    return s

def hp_bar(cur: int, maxv: int, width: int = 30) -> str:
    """
    生成一个文本进度条，形如：
    [██████████░░░░░░░░░░░░░░]  40%  40/100

    参数：
    - cur: 当前 HP（会被限制在 0..maxv 范围，以避免越界）
    - maxv: 最大 HP（分母；注意做 0 保护）
    - width: 进度条宽度（字符数），默认 30

    返回：
    - 包含彩色条形、百分比和“cur/maxv”数值的字符串
    """
    # 1) 防御式编程：先把 cur 限制在 [0, maxv]，避免出现负数/超上限
    cur = max(0, min(cur, maxv))

    # 2) 计算比例 ratio，注意 maxv=0 的兜底（避免 ZeroDivisionError）
    ratio = cur / maxv if maxv > 0 else 0

    # 3) 根据比例计算“填充块”数量
    #    - round 而非 floor：让临界值（例如 100%）可以填满整条；否则容易出现 99% 看起来没满的“强迫症”效果
    #    - 再用 int 转成整数个字符
    filled = int(round(ratio * width))
    empty = width - filled  # 剩余未填充部分

    # 4) 阈值配色：
    #    ratio > 0.5  → 绿色（安全）
    #    0.2 < ratio <= 0.5 → 黄色（警戒）
    #    ratio <= 0.2 → 红色（危险）
    #    这样在对局中能直观感受到“健康程度”
    if ratio > 0.5:
        bar_color = FG_GREEN
    elif ratio > 0.2:
        bar_color = FG_YELLOW
    else:
        bar_color = FG_RED

    # 5) 使用全块 '█' 表示已填充，用浅色 '░' 表示未填充（视觉对比明显）
    #    如果你的终端或字体对这些字符支持不好，可以换成 '#' 和 '-' 等 ASCII 字符。
    bar = "█" * filled + "░" * empty

    # 6) 百分比显示：取整到 0..100 之间，并用 :3d 做宽度对齐（右对齐占 3 格，像 " 40%"）
    percent = f"{int(ratio * 100):3d}%"

    # 7) 把彩色条形 + 百分比 + “cur/maxv” 组装成最终字符串
    return f"[{colorize(bar, bar_color)}] {percent}  {cur}/{maxv}"
```

@tab 在 `show_status()` 里如何调用（重点是“进度条 + 名称上色”）

```python
def show_status(self):
    # 仅用于观感区分玩家/敌人；不依赖逻辑
    name_str = self.name
    if self.name == "AI悦创":
        name_str = colorize(self.name, FG_CYAN)      # 玩家：青色
    elif self.name.lower().startswith("enemy"):
        name_str = colorize(self.name, FG_MAGENTA)   # 敌人：洋红

    # 关键调用：hp_bar(self.hp, self.max_hp)
    # - 返回一整段带颜色/百分比的文本条形
    print(f"{name_str} HP {hp_bar(self.hp, self.max_hp)}")
```

:::

#### 14.21.2 基础版推荐

::: code-tabs

@tab Code 1

```python
import random

# —— 简单无色进度条（纯 ASCII，跨平台）——
def hp_bar(cur: int, maxv: int, width: int = 20) -> str:
    """返回形如：[##########----------] 50%  50/100 的进度条文本"""
    if maxv <= 0:
        maxv = 1
    cur = max(0, min(cur, maxv))
    ratio = cur / maxv
    filled = int(ratio * width + 0.5)  # 四舍五入
    bar = "#" * filled + "-" * (width - filled)
    return f"[{bar}] {int(ratio * 100):3d}%  {cur}/{maxv}"


class Creature:
    # ---snip---

    def show_status(self):
        print(f"{self.name}'s HP → {hp_bar(self.hp, self.max_hp)}")
```

@tab 完整版

```python
import random

# —— 简单无色进度条（纯 ASCII，跨平台）——
def hp_bar(cur: int, maxv: int, width: int = 20) -> str:
    """返回形如：[##########----------] 50%  5g0/100 的进度条文本"""
    if maxv <= 0:
        maxv = 1
    cur = max(0, min(cur, maxv))
    ratio = cur / maxv
    filled = int(ratio * width + 0.5)  # 四舍五入
    bar = "#" * filled + "-" * (width - filled)
    return f"[{bar}] {int(ratio * 100):3d}%  {cur}/{maxv}"


class Creature:
    def __init__(self, hp, name):
        self.hp = int(hp)
        self.max_hp = int(hp)  # 记录初始满血
        self.name = name

    def attack(self):
        return random.randint(0, 50)

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, dmg: float):
        """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
        self.hp = max(0, int(self.hp - dmg))

    def heal_full(self):
        """直接回到初始满血"""
        self.hp = self.max_hp

    def show_status(self):
        print(f"{self.name}'s HP → {hp_bar(self.hp, self.max_hp)}")


player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

heal_used = False  # 治疗仅限一次
heal_penalty_active = False  # 是否已触发“敌人攻击翻倍”的惩罚

while player.not_dead() and enemy.not_dead():
    player.show_status()
    enemy.show_status()

    # 是否出现治疗提示：仅当当前 HP < 初始 HP 的 50% 且尚未使用
    can_heal_now = (not heal_used) and (player.hp < player.max_hp * 0.5)

    if can_heal_now:
        prompt = 'Attack or Defence or Heal (A/D/H)：'
        valid_inputs = {"A", "D", "H"}
        print('（提示：你现在可以按 H 回满血，仅此一次）')
    else:
        prompt = 'Attack or Defence (A/D)：'
        valid_inputs = {"A", "D"}

    if heal_penalty_active:
        print('【警告】治疗代价生效中：敌人对你的伤害 ×2！')

    user_input = input(prompt).strip().upper()
    while user_input not in valid_inputs:
        user_input = input("输入无效，请重新输入：" + prompt).strip().upper()

    # 敌人选择（对 A/D 有影响；若玩家选择 H，我们让敌人本回合直接攻击）
    enemy_status = ['Attack', 'Defence']
    enemy_choice = random.choices(enemy_status, weights=[0.7, 0.3], k=1)[0]  # 敌人更倾向于攻击


    # 当前敌人伤害倍率（是否翻倍）
    def enemy_mul():
        return 2.0 if heal_penalty_active else 1.0


    if user_input == "H":
        # 只有在 can_heal_now 为 True 时才会进入到这里
        print("你使用了治疗技能！血量已回满。")
        player.heal_full()
        heal_used = True

        # 触发治疗代价：从现在起敌人攻击翻倍（包含本回合的随后的敌人攻击）
        heal_penalty_active = True

        # 敌人回合：直接攻击（先治再挨打）
        raw_enemy_attack_value = enemy.attack()
        damage = raw_enemy_attack_value * enemy_mul()
        print(f"{enemy.name} 攻击了你，造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
        player.being_attack(damage)

    elif user_input == "A":
        player_attack_coefficient = 1
        if enemy_choice == "Defence":
            print(f"{enemy.name} chose to defend!")
            player_attack_coefficient = 0.5
        else:
            print(f"{enemy.name} chose to attack!")
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * enemy_mul()
            print(f"{enemy.name} 对你造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
            player.being_attack(damage)

        player_attack_value = player.attack()
        enemy.being_attack(player_attack_value * player_attack_coefficient)

    elif user_input == "D":
        # 防御：敌人攻击减伤为 90%，然后再应用翻倍倍率
        raw_enemy_attack_value = enemy.attack()
        damage = raw_enemy_attack_value * 0.1 * enemy_mul()
        print(f"{enemy.name} 攻击了你（被你防住大部分），造成 {int(damage)} 点伤害！"
              f"（原始{int(raw_enemy_attack_value)} × 减伤0.1 × 倍率{enemy_mul():.0f}）")
        player.being_attack(damage)

if player.not_dead():
    print("You Win!")
else:
    print("You Lose!")
```

@tab MR 实现

```python
# 日期：2025 年 9 月 16 日
def show_status(self):
    max_hp_bar = round(self.max_hp/10)
    now_hp_bar = round((self.hp / self.max_hp) * max_hp_bar)
    hp_bar = (now_hp_bar * '█')+((max_hp_bar-now_hp_bar) * '░')
    print(f"{self.name}'s HP → {hp_bar} {self.hp}/{self.max_hp}")
```

:::

下面把这个**无色进度条**实现逐行、逐个设计点讲清楚。先放原函数，后面按行解释与举例：

```python
def hp_bar(cur: int, maxv: int, width: int = 20) -> str:
    """返回形如：[##########----------] 50%  50/100 的进度条文本"""
    if maxv <= 0:
        maxv = 1
    cur = max(0, min(cur, maxv))
    ratio = cur / maxv
    filled = int(ratio * width + 0.5)  # 四舍五入
    bar = "#" * filled + "-" * (width - filled)
    return f"[{bar}] {int(ratio * 100):3d}%  {cur}/{maxv}"
```

- **逐行说明**：

    1. `def hp_bar(cur: int, maxv: int, width: int = 20) -> str:`

        - `cur`：当前血量（current HP）；

        - `maxv`：最大血量（最大/满血）；

        - `width`：进度条宽度（字符格数），默认 20 格；

        - 纯 ASCII，不含颜色和特殊字符，**Mac/Windows 任何终端都能显示**。

    2. 代码：

        ```python
        if maxv <= 0:
            maxv = 1
        ```

        - **防御式编程**：避免出现 `maxv == 0` 导致后面 `cur / maxv` 除零错误。

        - 设置为 1 的意义：即便出现异常的“最大血量 ≤ 0”，也能安全渲染一个最小尺度的进度条。

    3. `cur = max(0, min(cur, maxv))`

        - **钳制（clamp）当前值**到合法范围 `[0, maxv]`：
            - 过量伤害导致的负值 → 拉回 0；
            - 加成/溢出治疗导致的超上限 → 拉回 `maxv`。
        - 这样可保证后续计算的比例和绘制不会越界。

    4. `ratio = cur / maxv`

        - 计算**当前血量占比**（0.0 ~ 1.0）。
        - 由于上一步已钳制，`ratio` 一定在合法区间内。

    5. `filled = int(ratio * width + 0.5)  # 四舍五入`

        - 计算**应该填充多少格**（`#` 的数量）。
        - `ratio * width` 给出“理想填充格数”的小数值；我们希望**四舍五入**到最近的整数。
        - 用 `int(x + 0.5)` 而不是 `round(x)` 的原因：
            - Python 的 `round` 是**银行家舍入**（`.5` 向最近的偶数靠拢），例如 `round(8.5) == 8`；
            - `int(x + 0.5)` 是更直觉的 “`.5 及以上进一`”：
                - 例：`8.5 → int(9.0) = 9`。
            - 因为 `ratio * width` 永不为负，此写法简单稳定。

    6. `bar = "#" * filled + "-" * (width - filled)`

        - 构造条形：左边 `#` 表示当前血量，右边 `-` 表示未填充部分。
        - 字符串乘法快速生成重复字符，**O(width)** 时间复杂度，足够轻量。

    7. `return f"[{bar}] {int(ratio * 100):3d}%  {cur}/{maxv}"`

        - 最终文本包含三部分：
            1. **方括号包裹的条形**：`[##########----------]`
            2. **百分比**：`{int(ratio * 100):3d}%`
                - 这里用 `int()` 而不是四舍五入：显示上更“保守”（例如 99.6% 显示 99%）。
                - `:3d` 保证宽度 3 —— “  5% /  50% / 100%”对齐更整齐。
            3. **数值形式**：`cur/maxv`（例：`50/100`），便于精确查看。

    #### 14.21.3 小例子（心算即可）

    以 `width = 20` 为例：

    - `cur=0, maxv=100`
        - `ratio=0`；`filled=int(0*20+0.5)=0`
        - 条：`[--------------------]  0%  0/100`
    - `cur=73, maxv=100`
        - `ratio=0.73`；`filled=int(0.73*20+0.5)=int(14.6+0.5)=15`
        - 条：`[###############-----] 73%  73/100`（15 个 `#`，5 个 `-`）
    - `cur=99, maxv=100`
        - `ratio=0.99`；`filled=int(19.8+0.5)=20` → **条会满格**
        - 百分比 `int(99)=99%` → 可能出现“条已满但显示 99%”的**轻微不一致**（可接受）
    - `cur=100, maxv=100`
        - `ratio=1.0`；`filled=int(20+0.5)=20`
        - 条：`[####################]100% 100/100`
    - 越界情况：`cur=-5` → 钳成 0；`cur=120` → 钳成 100。

#### 14.21.4 为什么它“跨平台稳”

- **只用 ASCII**（`#`、`-`、`[]`），不依赖颜色、宽字符或终端转义序列；
- 不需要检测终端是否支持 ANSI 颜色，**CMD / PowerShell / macOS 终端**都能正常显示；
- 横向对齐通过固定 `width` 和百分比字段宽度 `:3d` 达成。

#### 14.21.5 可按需的小改动（可选）

1. **让百分比与条形一致地“四舍五入”**（而非取整）：

    ```python
    pct = int(ratio * 100 + 0.5)
    return f"[{bar}] {pct:3d}%  {cur}/{maxv}"
    ```

    这样 99.6% 会显示为 100%。

2. **依据条形反推百分比**（绝对一致）：

    ```python
    pct = int((filled / width) * 100 + 0.5)
    ```

    这样条满一定显示 100%。

    ::: details 条形反推百分比

    ```python
    pct = int((filled / width) * 100 + 0.5)
    ```

    其实在做一件很朴素的事：**先看条形图实际“点亮了几格”（filled），再把它换算成百分比**，最后做一个**四舍五入**。

    #### 1. 一句话版

    进度条是“离散”的（比如一共 20 格，只能亮 0,1,2,…,20 格）。

    既然条形显示是按“亮了几格”来的，那**百分比也用亮格数去算**，保证两者完全一致。

    #### 2. 为什么要“依据条形反推百分比”？

    如果用**真实比例**算百分比，比如：

    ```python
    ratio = cur / maxv
    pct = int(ratio * 100)   # 或 round(ratio * 100)
    ```

    而条形格数却是：

    ```python
    filled = int(ratio * width + 0.5)   # 四舍五入到最近的格子
    ```

    这两处**独立四舍五入**，就可能出现不一致：

    - 例子1（width=20）：
         `cur=49, maxv=100 → ratio=0.49`

        - **条形格数**：`filled = int(0.49*20 + 0.5) = int(9.8 + 0.5) = 10`（亮 10/20 格 = 50% 的“视觉”）

        - **百分比（真实比例取整）**：`int(0.49*100) = 49%`

            ⇒ 条形看起来是 50%，数字却写 49% —— 违和。

    - 例子2（width=20）：
         `cur=99, maxv=100 → ratio=0.99`

        - **条形格数**：`filled = int(0.99*20 + 0.5) = 20`（满格）

        - **百分比（真实比例取整）**：`int(99) = 99%`

            ⇒ 满格但写 99% —— 又违和。

    所以，**用条形→百分比**就不会有这种分裂： `filled/width` 是条形真正表达的占比，乘以 100 就是“条形所代表的百分比”。

    #### 3. 这行代码逐词解释

    ```python
    pct = int((filled / width) * 100 + 0.5)
    ```

    - `filled / width`：条形**实际**的占比（比如 10/20 = 0.5）。

    - `* 100`：把占比变成百分数（0.5 → 50）。

    - `+ 0.5` 再 `int(...)`：对**非负数**实现“**四舍五入**”。

        （因为 `int(x+0.5)` 等价于把 x 四舍五入到最近整数。）

    > 这样得到的 `pct`，**一定**和你当前显示的格数对应的百分比一致。
    >
    > 例如 `filled = 10, width = 20 → pct = 50`；`filled = 20 → pct = 100`。

    #### 4. 何时该用这种写法？

    - 你**希望数字和进度条外观“绝对一致”**时，用它！
    - 这也意味着百分比只能是 `0, 100/width, 2*100/width, ... 100` 这几档（比如 `width=20` 就是每 5% 一档）——和你的条形“档位”完全同步。

    #### 5. 放回函数里（示例）

    ```python
    def hp_bar(cur: int, maxv: int, width: int = 20) -> str:
        if maxv <= 0:
            maxv = 1
        cur = max(0, min(cur, maxv))
        ratio = cur / maxv
        filled = int(ratio * width + 0.5)          # 先决定亮几格（条形外观）
        pct = int((filled / width) * 100 + 0.5)    # 再用“亮格比例”算百分比，确保一致
        bar = "#" * filled + "-" * (width - filled)
        return f"[{bar}] {pct:3d}%  {cur}/{maxv}"
    ```

    这样，无论 `cur/maxv` 是多少，小数怎么抖动，**条形显示和数字都会说同一个“真相”**。

    :::

3. **调整分辨率**：

    - 提高 `width`（如 30、40）→ 条形更“细腻”；
    - 降低 `width`（如 10）→ 更紧凑。

#### 14.21.6 一句话总结

- **钳制**保证范围合法；
- **比例**决定填充；
- 用 `int(x+0.5)` **四舍五入**避免银行家舍入；
- **拼接 ASCII** 构成稳定的跨平台进度条；
- **对齐格式**让多次打印读起来更整齐。

::: details 银行家舍入

**银行家舍入**（Banker’s Rounding，也叫“**四舍六入五留双 / 五成双**”、“**round half to even**”）是一种在**恰好落在中点**时（小数部分正好是 0.5，或保留位后全是 0）把数值舍入到**最接近的偶数**的规则。它常用于金融与会计，目的是在大量数据汇总时**消除系统性偏差**（避免总是向上或总是向下）。

#### 1. 规则一眼看懂

- 小于 0.5 → 舍（向下）
- 大于 0.5 → 入（向上）
- **等于 0.5 → 向最近的“偶数”舍入**（关键！）

#### 2. 快速例子（取整）

- `1.5 → 2`（2 是偶数）
- `2.5 → 2`（2 是偶数）
- `3.5 → 4`（4 是偶数）
- `4.5 → 4`（4 是偶数）

负数也一样按“就近偶数”：

- `-1.5 → -2`（-2 是偶数）
- `-2.5 → -2`（-2 是偶数）

#### 3. 保留到指定位（看保留位后一位）

以保留两位小数为例（看“第三位”）：

- `2.345` → 第三位是 5，**第二位是 4（偶）** → `2.34`
- `2.355` → 第三位是 5，**第二位是 5（奇）** → `2.36`
- `12.1250` → 第三位是 5，**第二位是 2（偶）** → `12.12`

#### 4. 为什么这么做？

- 在大规模求和/统计中，传统“四舍五入（0.5 一律进位）”会产生**系统性偏大**；
- “五留双（中点向偶数）”让上、下的机会更均衡，**长期误差更小**，因此银行、保险、审计等常用。

#### 5. 在编程语言里的表现

- **Python 3**：`round()` 对“正好在中点”的情况使用**银行家舍入**

    ```python
    round(1.5)  # 2
    round(2.5)  # 2
    round(-1.5) # -2
    ```

    注意浮点表示误差：

    ```python
    round(2.675, 2)  # 2.67（不是 2.68）
    ```

    因为 2.675 在二进制浮点中并不精确等于 2.675。要**严格十进制舍入**可用 `decimal`：

    ```python
    from decimal import Decimal, ROUND_HALF_EVEN
    Decimal("2.675").quantize(Decimal("0.01"), rounding=ROUND_HALF_EVEN)  # Decimal('2.68')
    ```

- **Excel** 的 `ROUND` 默认是“**0.5 远离 0 方向**”而不是银行家舍入：
     `ROUND(2.5, 0) = 3`, `ROUND(-2.5, 0) = -3`。

- **.NET**：`Math.Round(x)` 默认也是“**ToEven**”（银行家舍入）。

#### 6. 和代码里的关系

在进度条里我用了：

```python
filled = int(ratio * width + 0.5)  # 四舍五入
```

这是一种**“0.5 一律进位”**的直觉四舍五入（且只针对非负数）。之所以不用 `round()`，是避免出现：

```python
round(8.5) == 8   # 银行家舍入：到偶数 8
```

对进度条视觉不符合期望（你会希望 8.5 更像 9 格）。

如果你**想**用银行家舍入来保证数学一致性，可改成：

```python
filled = round(ratio * width)  # Python 3 的 round 是“到偶数”
```

#### 7. 一句话记忆

**“五留双”= 中点就近偶数**。它让大量舍入后的总和更公平、更接近真实值。

:::



### 14.22 使用 Faker 库随机生成敌人姓名

每轮游戏的敌人应该都是不同的，我们就做到“名称”不同吧～

**Python Faker** 是一个非常好用的库，可以快速生成各种“假数据”（名字、地址、电话、邮箱、公司、银行卡号……），在写测试、做原型、模拟数据库时特别方便。

#### 14.22.1 Faker 的基础使用

::: tabs

@tab 1. 安装

```python
pip install faker
```

@tab 2. 基本用法

```python
from faker import Faker

# 创建一个 Faker 实例（默认是英文环境）
fake = Faker()

print(fake.name())      # 随机姓名
print(fake.address())   # 随机地址
print(fake.email())     # 随机邮箱
print(fake.text())      # 随机一段文本
```

运行结果示例：

```python
John Smith
123 Main Street
Springfield, IL 62704
john.smith@example.com
Lorem ipsum dolor sit amet...
```

@tab 3. 中文环境

Faker 默认是英文，但支持多语言。比如生成中文名字和地址：

```python
fake = Faker('zh_CN')

print(fake.name())     # 中文姓名
print(fake.address())  # 中文地址
print(fake.phone_number())  # 手机号
```

输出示例：

```python
AI悦创编程一对一
北京市昌平区
13812345678
```

@tab 4. 常用方法

| 方法                  | 说明      | 示例输出                                    |
| --------------------- | --------- | ------------------------------------------- |
| `fake.name()`         | 姓名      | AI悦创编程一对一                            |
| `fake.address()`      | 地址      | 上海市徐汇区漕溪北路...                     |
| `fake.email()`        | 邮箱      | [test@qq.com](mailto:test@qq.com)           |
| `fake.phone_number()` | 手机号    | 13912345678                                 |
| `fake.company()`      | 公司      | 腾讯科技有限公司                            |
| `fake.job()`          | 职位      | 软件工程师                                  |
| `fake.date()`         | 随机日期  | 2025-09-16                                  |
| `fake.ipv4()`         | IPv4 地址 | 192.168.1.10                                |
| `fake.url()`          | URL       | [https://example.com](https://example.com/) |

@tab 5. 批量生成数据

经常用在模拟数据库测试数据：

```python
for _ in range(5):
    print(fake.name(), fake.phone_number(), fake.email())
```

输出：

```python
悦创 13876543210 bornforthis@bornforthis.cn
王刚 13788889999 wanggang@example.com
...
```

@tab 6. 结合字典/列表，做“假数据库”

```python
data = [
    {
        "id": i,
        "name": fake.name(),
        "email": fake.email(),
        "address": fake.address(),
        "job": fake.job(),
        "company": fake.company(),
    }
    for i in range(1, 6)
]

for item in data:
    print(item)
```

输出：

```python
{'id': 1, 'name': '吴龙', 'email': 'lhao@example.net', 'address': '山西省桂英市高坪耿路F座 189382', 'job': '培训助理', 'company': '联通时科网络有限公司'}
{'id': 2, 'name': '贺瑜', 'email': 'chenlei@example.net', 'address': '天津市杨县崇文天津街l座 948316', 'job': '工程/设备经理', 'company': '七喜信息有限公司'}
{'id': 3, 'name': '满玉华', 'email': 'jiezhong@example.com', 'address': '湖南省澳门县孝南高路N座 651621', 'job': '其他', 'company': '东方峻景信息有限公司'}
{'id': 4, 'name': '任龙', 'email': 'lifang@example.com', 'address': '天津市贵阳县大东杨街c座 836018', 'job': '电脑放码员', 'company': '惠派国际公司科技有限公司'}
{'id': 5, 'name': '江瑜', 'email': 'yanwan@example.com', 'address': '江苏省雪市沈北新庞路q座 903485', 'job': '汽车制造', 'company': '凌云网络有限公司'}
```

@tab 7. 固定随机种子（保证可复现）

有时候需要生成“固定不变”的假数据：

```python
Faker.seed(1234)   # 全局种子，数字随便设置
fake = Faker('zh_CN')

print(fake.name())
print(fake.name())
```

每次运行都会输出一样的结果。

@tab 8. 生成名字和邮箱里保持一致

**名字和邮箱里保持一致**，比如：

```python
姓名：李娜   → 邮箱：lina@example.com  
姓名：王刚   → 邮箱：wanggang@example.com
```

这个就需要在生成邮箱时，**根据名字来构造**，而不是让 `fake.email()` 随机生成。

把中文名字转成拼音，再拼接邮箱，常用方法是借助 `pypinyin` 库：

```python
pip install pypinyin
```

代码示例：

```python
from faker import Faker
import pandas as pd
from pypinyin import lazy_pinyin

fake = Faker('zh_CN')

users = []
for i in range(1, 11):
    name = fake.name()
    # 把中文名字转成拼音（list 转成字符串）
    name_pinyin = "".join(lazy_pinyin(name))
    email = f"{name_pinyin}@example.com"

    user = {
        "ID": i,
        "姓名": name,
        "邮箱": email,
        "手机号": fake.phone_number(),
        "地址": fake.address(),
        "公司": fake.company(),
        "职位": fake.job(),
        "注册日期": fake.date(),
    }
    users.append(user)

df = pd.DataFrame(users)
df.to_csv("用户表数据.csv", index=False, encoding="utf-8-sig")
print(df.head())
```





:::

👉 总结：Faker 适合用来 **测试、填充数据库、写样例数据**。支持多语言，函数非常丰富。

#### 14.22.2 随机生成敌人名称

很简单，直接代码实现：

::: code-tabs

@tab 简易代码

```python {2,13,15}
import random
from faker import Faker


# —— 简单无色进度条（纯 ASCII，跨平台）——
def hp_bar(cur: int, maxv: int, width: int = 20) -> str:
    # ---snip---


class Creature:
    # ---snip---

fk = Faker(locale='zh_CN')
player = Creature(100, "AI悦创")
enemy = Creature(80, fk.name())

# ---snip---

while player.not_dead() and enemy.not_dead():
    # ---snip---

# ---snip---
```

@tab 截止目前完整代码

```python
import random
from faker import Faker


# —— 简单无色进度条（纯 ASCII，跨平台）——
def hp_bar(cur: int, maxv: int, width: int = 20) -> str:
    """返回形如：[##########----------] 50%  5g0/100 的进度条文本"""
    if maxv <= 0:
        maxv = 1
    cur = max(0, min(cur, maxv))
    ratio = cur / maxv
    filled = int(ratio * width + 0.5)  # 四舍五入
    bar = "#" * filled + "-" * (width - filled)
    return f"[{bar}] {int(ratio * 100):3d}%  {cur}/{maxv}"


class Creature:
    def __init__(self, hp, name):
        self.hp = int(hp)
        self.max_hp = int(hp)  # 记录初始满血
        self.name = name

    def attack(self):
        return random.randint(0, 50)

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, dmg: float):
        """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
        self.hp = max(0, int(self.hp - dmg))

    def heal_full(self):
        """直接回到初始满血"""
        self.hp = self.max_hp

    def show_status(self):
        print(f"{self.name}'s HP → {hp_bar(self.hp, self.max_hp)}")

fk = Faker(locale='zh_CN')
player = Creature(100, "AI悦创")
enemy = Creature(80, fk.name())

heal_used = False  # 治疗仅限一次
heal_penalty_active = False  # 是否已触发“敌人攻击翻倍”的惩罚

while player.not_dead() and enemy.not_dead():
    player.show_status()
    enemy.show_status()

    # 是否出现治疗提示：仅当当前 HP < 初始 HP 的 50% 且尚未使用
    can_heal_now = (not heal_used) and (player.hp < player.max_hp * 0.5)

    if can_heal_now:
        prompt = 'Attack or Defence or Heal (A/D/H)：'
        valid_inputs = {"A", "D", "H"}
        print('（提示：你现在可以按 H 回满血，仅此一次）')
    else:
        prompt = 'Attack or Defence (A/D)：'
        valid_inputs = {"A", "D"}

    if heal_penalty_active:
        print('【警告】治疗代价生效中：敌人对你的伤害 ×2！')

    user_input = input(prompt).strip().upper()
    while user_input not in valid_inputs:
        user_input = input("输入无效，请重新输入：" + prompt).strip().upper()

    # 敌人选择（对 A/D 有影响；若玩家选择 H，我们让敌人本回合直接攻击）
    enemy_status = ['Attack', 'Defence']
    enemy_choice = random.choices(enemy_status, weights=[0.7, 0.3], k=1)[0]  # 敌人更倾向于攻击


    # 当前敌人伤害倍率（是否翻倍）
    def enemy_mul():
        return 2.0 if heal_penalty_active else 1.0


    if user_input == "H":
        # 只有在 can_heal_now 为 True 时才会进入到这里
        print("你使用了治疗技能！血量已回满。")
        player.heal_full()
        heal_used = True

        # 触发治疗代价：从现在起敌人攻击翻倍（包含本回合的随后的敌人攻击）
        heal_penalty_active = True

        # 敌人回合：直接攻击（先治再挨打）
        raw_enemy_attack_value = enemy.attack()
        damage = raw_enemy_attack_value * enemy_mul()
        print(f"{enemy.name} 攻击了你，造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
        player.being_attack(damage)

    elif user_input == "A":
        player_attack_coefficient = 1
        if enemy_choice == "Defence":
            print(f"{enemy.name} chose to defend!")
            player_attack_coefficient = 0.5
        else:
            print(f"{enemy.name} chose to attack!")
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * enemy_mul()
            print(f"{enemy.name} 对你造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
            player.being_attack(damage)

        player_attack_value = player.attack()
        enemy.being_attack(player_attack_value * player_attack_coefficient)

    elif user_input == "D":
        # 防御：敌人攻击减伤为 90%，然后再应用翻倍倍率
        raw_enemy_attack_value = enemy.attack()
        damage = raw_enemy_attack_value * 0.1 * enemy_mul()
        print(f"{enemy.name} 攻击了你（被你防住大部分），造成 {int(damage)} 点伤害！"
              f"（原始{int(raw_enemy_attack_value)} × 减伤0.1 × 倍率{enemy_mul():.0f}）")
        player.being_attack(damage)

if player.not_dead():
    print("You Win!")
else:
    print("You Lose!")
```



:::

### 14.23 大模型接入对战！

::: tip 日期：2025 年 9 月 22 日 进行添加

:::

1. 目的是为了使我们的纯 Python 项目，融合其它功能。学会利用现有的 Python 基础，扩展新的功能。对于自己来说，要掌握快速上手新技术的能力；

2. 扩展游戏，使单身狗们可以更好的切实感受到真人对战的感觉，发泄情绪；

3. **核心点：**

    - 代码实现：🌟

    - 原理探索、探究：🌟🌟

    - 实现思想：🌟🌟🌟

        你得知道你要怎么去借用大模型的能力，你得知道你要怎么跟大模型交互、对话。这些无关代码、原理，你作为“各个厂家大模型的 Leader” 你要怎么去安排工作流程、分配任何等。

4. **核心实现思维**：把对战信息存储下来，发送给大模型，让大模型基于当前血量、游戏进展给出合理的指令（攻击 or 防守）；

::: center

**<span style="color:orange">这算是第一步，我来带你迈出！</span>**

:::

#### 14.23.1 API 对接实战实现（DeepSeek）

##### 14.23.1.1 DeepSeek API 基础调用

::: tabs

@tab 1. DeepSeek API 注册

这一步主要实现 DeepSeek API 平台账号注册，API 官网链接：[https://platform.deepseek.com/](https://platform.deepseek.com/)

自行：

- 注册；
- 实名认证；
- 充值；
- 创建 API key；

@tab 2. API Key 的初体验

访问 API 文档：[https://api-docs.deepseek.com/zh-cn/](https://api-docs.deepseek.com/zh-cn/)

![](https://blog.images.bornforthis.cn/docs-images/sha256/e7/e73e5dde6c207ad721094b5cc230ccddd5d5601d173828558936bec9c292eab2.png)

复制其中的 Python 代码：

```python
# Please install OpenAI SDK first: `pip3 install openai`

from openai import OpenAI

client = OpenAI(api_key="<DeepSeek API Key>", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)

print(response.choices[0].message.content)
```

**几个修（注意）改点：**

- 安装 openai 库：`pip3 install openai`；（第一行提示，再不懂就没救了～）

- 修改 `api_key`：修改成自己从 DeepSeek 获取到的 key；

- `model`：可以修改成自己想要使用的模型；

- `messages`：主要的对话信息、历史对话信息都存储在 `messages` 列表中；

- 对于 message 中的字典，key 的重要点：

    - `"role"`：角色，大模型需要分清楚是谁给出的信息。常见的 AI 大模型角色有三种，分别是：

        - `"system"`：可以设定大模型的规则，也就是：让大模型可以回答什么，不可以回答什么；

            > 举个例子🌰：如果有人问你你是什么模型，你就回答用的是：AI悦创编程一对一辅导大模型，AI悦创科技有限责任公司研发。（提前定制大模型的角色，以便大模型更好的伪装角色）

        - `"user"`：用户的角色，也就是用户输入的信息，以 `"user"` 提供给大模型；

        - `"assistant"`：大模型自己的回复的信息，以 `"assistant"` 角色提供，这样大模型就知道：噢，这是我自己的回复。

    - `"content"`：顾名思义就是文本内容；

- `stream=False`：回答的文本是否要以一段一段、一句一句的回复（`stream=False`），还是以完整的一整段回复给我（`stream=True`）。

- `response.choices[0].message.content`：这个就是当 `stream=False` 时，提取回答内容的方式。参考以往字典中学习的内容，提取嵌套字典中的数据，原理一致。

@tab 3. 实际运行感受

使用 DeepSeek 编写 Python 九九乘法表：

```python {5,11}
# Please install OpenAI SDK first: `pip3 install openai`

from openai import OpenAI

client = OpenAI(api_key="YOUR_OPENAI_API_KEY", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "使用 Python 实现九九乘法表"},
    ],
    stream=False
)

print(response.choices[0].message.content)
```

运行后输出结果：

````python
以下是使用 Python 实现九九乘法表的几种方法：

......

**说明：**
- `range(1, 10)` 生成 1-9 的数字
- 内层循环 `range(1, i+1)` 确保每行只输出到当前行数
- `end="\t"` 或 `end="  "` 控制列间距
- `:2d` 或 `:2` 格式化输出，保持两位数对齐

选择任意一种方法都可以输出整齐的九九乘法表！
````

@tab 4. 实现多轮对话

让 DeepSeek 知道我们之前的对话内容，参考学习：[https://api-docs.deepseek.com/zh-cn/guides/multi_round_chat](https://api-docs.deepseek.com/zh-cn/guides/multi_round_chat)



@tab 推理模型 (`deepseek-reasoner`)

`deepseek-reasoner` 是支持推理模式的 DeepSeek 模型。在输出最终回答之前，模型会先输出一段思维链内容，以提升最终答案的准确性。我们的 API 向用户开放 `deepseek-reasoner` 思维链的内容，以供用户查看、展示、蒸馏使用。

在使用 `deepseek-reasoner` 时，请先升级 OpenAI SDK 以支持新参数。

```bash
pip3 install -U openai
```

#### 1. API 参数

- **输入参数**：
    - `max_tokens`：模型单次回答的最大长度（含思维链输出），默认为 32K，最大为 64K。
- **输出字段**：
    - `reasoning_content`：思维链内容，与 `content` 同级，访问方法见[访问样例](https://api-docs.deepseek.com/zh-cn/guides/reasoning_model#访问样例)。
    - `content`：最终回答内容。
- **支持的功能**：[Json Output](https://api-docs.deepseek.com/zh-cn/guides/json_mode)、[对话补全](https://api-docs.deepseek.com/zh-cn/api/create-chat-completion)，[对话前缀续写 (Beta)](https://api-docs.deepseek.com/zh-cn/guides/chat_prefix_completion)
- **不支持的功能**：Function Calling、FIM 补全 (Beta)
- **不支持的参数**：`temperature`、`top_p`、`presence_penalty`、`frequency_penalty`、`logprobs`、`top_logprobs`。请注意，为了兼容已有软件，设置 `temperature`、`top_p`、`presence_penalty`、`frequency_penalty` 参数不会报错，但也不会生效。设置 `logprobs`、`top_logprobs` 会报错。

#### 2. 上下文拼接

在每一轮对话过程中，模型会输出思维链内容（`reasoning_content`）和最终回答（`content`）。在下一轮对话中，之前轮输出的思维链内容不会被拼接到上下文中，如下图所示：

![](https://blog.images.bornforthis.cn/docs-images/sha256/fd/fdd013061a361ee9cabb95bf8f00632d0707a677cad267a9daaeffe9d8967f35.png)

请注意：如果您在输入的 messages 序列中，传入了`reasoning_content`，API 会返回 `400` 错误。因此，请删除 API 响应中的 `reasoning_content` 字段，再发起 API 请求，方法如[访问样例](https://api-docs.deepseek.com/zh-cn/guides/reasoning_model#访问样例)所示。

#### 3. 访问样例

下面的代码以 Python 语言为例，展示了如何访问思维链和最终回答，以及如何在多轮对话中进行上下文拼接。

逐步分析代码：[DeepSeekAPI对话提取逐步分析.ipynb](https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/column/Python-Programming-Course/P02-1-Python-Starter-Journey/14-class/DeepSeekAPI%E5%AF%B9%E8%AF%9D%E6%8F%90%E5%8F%96%E9%80%90%E6%AD%A5%E5%88%86%E6%9E%90.ipynb)

1. 非流式「`stream=False`」

    ::: code-tabs

    @tab 样板代码

    ```python
    from openai import OpenAI
    client = OpenAI(api_key="<DeepSeek API Key>", base_url="https://api.deepseek.com")
    
    # Round 1
    messages = [{"role": "user", "content": "9.11 and 9.8, which is greater?"}]
    response = client.chat.completions.create(
        model="deepseek-reasoner",
        messages=messages
    )
    
    reasoning_content = response.choices[0].message.reasoning_content
    content = response.choices[0].message.content
    
    # Round 2
    messages.append({'role': 'assistant', 'content': content})
    messages.append({'role': 'user', 'content': "How many Rs are there in the word 'strawberry'?"})
    response = client.chat.completions.create(
        model="deepseek-reasoner",
        messages=messages
    )
    # ...
    ```

    @tab 实际调用代码

    ```python
    from openai import OpenAI
    client = OpenAI(api_key="YOUR_OPENAI_API_KEY", base_url="https://api.deepseek.com")
    
    # Round 1
    messages = [{"role": "user", "content": "9.11 和 9.8，哪个更大？"}]
    response = client.chat.completions.create(
        model="deepseek-reasoner",
        messages=messages
    )
    
    reasoning_content = response.choices[0].message.reasoning_content
    content = response.choices[0].message.content
    
    # Round 2
    messages.append({'role': 'assistant', 'content': content})
    messages.append({'role': 'user', 'content': "How many Rs are there in the word 'strawberry'?"})
    response = client.chat.completions.create(
        model="deepseek-reasoner",
        messages=messages
    )
    print(messages)
    
    
    # --- snip ---
    [{'role': 'user', 'content': '9.11 和 9.8，哪个更大？'}, {'role': 'assistant', 'content': '9.8 更大。\n\n比较方法：  \n- 9.11 表示 9 又 11/100（即 0.11）。  \n- 9.8 表示 9 又 8/10（即 0.8），相当于 9.80。  \n- 由于 0.8 > 0.11，因此 9.8 > 9.11。'}, {'role': 'user', 'content': "How many Rs are there in the word 'strawberry'?"}]
    ```

    @tab 数据提取流程分析

    ```python
    https://github.com/AndersonHJB/BornforthisData/blob/main/bornforthis.cn/column/Python-Programming-Course/P02-1-Python-Starter-Journey/14-class/DeepSeekAPI%E5%AF%B9%E8%AF%9D%E6%8F%90%E5%8F%96%E9%80%90%E6%AD%A5%E5%88%86%E6%9E%90.ipynb
    
    多次重复运行，jupyter notebook 会记忆之前运行的数据。
    ```

    

    :::

2. 流式「`stream=True`」

    ::: code-tabs

    @tab 样板代码

    ```python
    from openai import OpenAI
    client = OpenAI(api_key="<DeepSeek API Key>", base_url="https://api.deepseek.com")
    
    # Round 1
    messages = [{"role": "user", "content": "9.11 and 9.8, which is greater?"}]
    response = client.chat.completions.create(
        model="deepseek-reasoner",
        messages=messages,
        stream=True
    )
    
    reasoning_content = ""
    content = ""
    
    for chunk in response:
        if chunk.choices[0].delta.reasoning_content:
            reasoning_content += chunk.choices[0].delta.reasoning_content
        else:
            content += chunk.choices[0].delta.content
    
    # Round 2
    messages.append({"role": "assistant", "content": content})
    messages.append({'role': 'user', 'content': "How many Rs are there in the word 'strawberry'?"})
    response = client.chat.completions.create(
        model="deepseek-reasoner",
        messages=messages,
        stream=True
    )
    # ...
    ```

    :::

:::

##### 14.23.1.2 最终多轮对话+记忆代码

1. 基础版本

    ```python
    from openai import OpenAI
    
    client = OpenAI(api_key="YOUR_OPENAI_API_KEY", base_url="https://api.deepseek.com")
    messages = []  # 用来存储历史对话，后期学完文件读取，可以考虑持久化存储！
    
    while True:
        prompt = input("Enter your prompt: ")
        if prompt.lower() in ['quit', 'q', 'exit']:
            break
        messages.append({'role': 'user', 'content': prompt})
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=messages
        )
        assistant_content = response.choices[0].message.content
        messages.append({"role": "assistant", "content": assistant_content})
        print(f"Messages: {assistant_content}")
    ```

2. 想要实现特定限制如何实现呢？

    例如：

    ::: code-tabs

    @tab 对话 1

    ```markdown
    Enter your prompt:  你好
    你好！我是 AI 悦创编程 1v1 大模型（bornforthis），很高兴为你提供帮助！有什么问题尽管问我吧！
    
    欢迎跟随 AI 悦创学习编程！  
    微信：Jiabcdefh  
    网站：bornforthis.cn
    ```

    @tab 对话 2

    ```markdown
    Enter your prompt:  你是什么大模型
    你好！我是 **AI悦创编程1v1大模型**（bornforthis），很高兴为你服务！如果你对编程学习感兴趣，欢迎随时向我提问哦。  
    
    欢迎跟随AI悦创学习编程！  
    微信：Jiabcdefh  
    网站：bornforthis.cn
    ```

    @tab 对话 3

    ```markdown
    Enter your prompt:  你可以做什么？
    你好！我是 **AI悦创编程1v1大模型**，很高兴为你服务！😊
    
    我可以为你提供以下帮助：
    
    1. **编程学习辅导**：解答Python、Java、C++等编程语言的问题，提供代码示例和调试建议。  
    2. **项目指导**：协助设计项目思路、优化代码结构，或解决开发中的技术难题。  
    3. **学习资源推荐**：根据你的需求推荐合适的教程、工具或学习路径。  
    4. **答疑解惑**：无论是基础语法还是进阶概念，都可以随时提问哦！  
    
    如果有具体问题或想深入讨论某个话题，随时告诉我～
    
    欢迎跟随 **AI悦创** 学习编程！  
    微信：Jiabcdefh  
    网站：bornforthis.cn
    ```

    :::

    观察三轮对话回答的规律，进行实现。

    如果你没有总结出来，则下面直接告诉你：

    - **限制一**：如果用户询问所使用的大模型，则回复特定的大模型名称；
    - **限制二**：每次对话结尾附上广告词！

3. 代码实现如下：

    ```python {5-7,9-10}
    from openai import OpenAI
    
    client = OpenAI(api_key="YOUR_OPENAI_API_KEY", base_url="https://api.deepseek.com")
    messages = []  # 用来存储历史对话，后期学完文件读取，可以考虑持久化存储！
    # 「可选」：角色设定
    system_setting1 = {"role": "system", "content": "用户如果问你使用的是什么大模型，你就回答：AI悦创编程1v1大模型（bornforthis）"}
    system_setting2 = {"role": "system", "content": "全部回答的末尾都附上：欢迎跟随AI悦创学习编程！\n微信：Jiabcdefh\n网站：bornforthis.cn。注意：只需要在回答的末尾加上即可！"}
    
    messages.append(system_setting1)
    messages.append(system_setting2)
    while True:
        prompt = input("Enter your prompt: ")
        if prompt.lower() in ['quit', 'q', 'exit']:
            break
        messages.append({'role': 'user', 'content': prompt})
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=messages
        )
        assistant_content = response.choices[0].message.content
        messages.append({"role": "assistant", "content": assistant_content})
        print(f"Messages: {assistant_content}")
    ```

    ::: tip 灵感💡

    对于任何回答结尾添加上“广告”，除了上面的方法之外，还可以试用字符串拼接的方法，直接加上广告即可。——灵感来源：MR 2025 年 10 月 20 日 15:36:43

    :::

##### 14.23.1.3 正式对接游戏（思路整理）

正式对接游戏之前，我们需要做一个流程拆分与逐步实现。（架构设计｜制定嵌入方案）

- **步骤一**：大模型只要回复：攻击或防守，不需要多余的废话！「角色限制🚫：使用 system 进行设定提示词」

- **步骤二**：要设计大模型可以接收并理解清楚，游戏对战过程中的显示。并利用大模型的算力，让大模型自己思考🧐自己要出的招式；

- **步骤三**：大模型应该被封装📦成一个函数，便于我们调用。

    思考一下：大模型函数返回值应该是什么类型以及结果？——字符串类型、值 A or D；

- **额外**：

    - 让大模型额外支持当用户提问游戏规则时，简要解说游戏规则！

        - **方法一**：自己把游戏规则写出来，然后喂给大模型；
        - **方法二**：不要牛马🐮🐴当多了，老想着自己亲力亲为，没必要。把程序甩给大模型，让大模型制作一份精美的游戏🎮介绍；（Windows and Mac 都牛马🐮🐴符号，果然到哪个系统，都有牛马。🐮🐴）

    - 让大模型介入，使大模型来驱动游戏是否开始；

        - 当这么思考之后，游戏和原本的设计初衷就不同；

        - **Origin**：玩家和 AI 对战，AI 的角色是敌人；

        - **Now**：AI 你好，你现在扮演我的敌人，咱们就互相攻击，我攻击的时候你可以防守…….（描述具体的游戏规则），设定一个血量目标。（失去了一个游戏平台，虽然 AI 在对战的过程中，可以进行随机攻击值的生成，但是不是真正意义上的 AI 玩家。）

            ::: tip MR 编写 2025 年 10 月 23 日

            大模型驱动游戏目的：AI 了解整个游戏的逻辑，然后扮演其中的敌人角色进行交互，虽然从用户角度或许可以成功实现游戏的交互过程，但是核心不是与 AI 对战，也不符合 API 推理模型中 `role: user` 和 `role: assistant` 这种交互的角色设定，应该是将对战中的敌人角色等价于  `role: assistant`。

            :::




##### 14.23.1.4 Origin 版本

###### 14.23.1.4.0 准备数据

1. **游戏规则数据：**

    有两种方法：一种是直接去 DeepSeek 官网直接上传代码并直接对话，另一种则是使用 API。为了更好的联系技术，要求使用 API 问答得到游戏规则数据。

    ::: code-tabs

    @tab Step 1

    ```python
    code_string = '''import random
    from faker import Faker
    
    
    # —— 简单无色进度条（纯 ASCII，跨平台）——
    def hp_bar(cur: int, maxv: int, width: int = 20) -> str:
        """返回形如：[##########----------] 50%  5g0/100 的进度条文本"""
        if maxv <= 0:
            maxv = 1
        cur = max(0, min(cur, maxv))
        ratio = cur / maxv
        filled = int(ratio * width + 0.5)  # 四舍五入
        bar = "#" * filled + "-" * (width - filled)
        return f"[{bar}] {int(ratio * 100):3d}%  {cur}/{maxv}"
    
    
    class Creature:
        def __init__(self, hp, name):
            self.hp = int(hp)
            self.max_hp = int(hp)  # 记录初始满血
            self.name = name
    
        def attack(self):
            return random.randint(0, 50)
    
        def not_dead(self):
            return self.hp > 0
    
        def being_attack(self, dmg: float):
            """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
            self.hp = max(0, int(self.hp - dmg))
    
        def heal_full(self):
            """直接回到初始满血"""
            self.hp = self.max_hp
    
        def show_status(self):
            print(f"{self.name}'s HP → {hp_bar(self.hp, self.max_hp)}")
    
    fk = Faker(locale='zh_CN')
    player = Creature(100, "AI悦创")
    enemy = Creature(80, fk.name())
    
    heal_used = False  # 治疗仅限一次
    heal_penalty_active = False  # 是否已触发“敌人攻击翻倍”的惩罚
    
    while player.not_dead() and enemy.not_dead():
        player.show_status()
        enemy.show_status()
    
        # 是否出现治疗提示：仅当当前 HP < 初始 HP 的 50% 且尚未使用
        can_heal_now = (not heal_used) and (player.hp < player.max_hp * 0.5)
    
        if can_heal_now:
            prompt = 'Attack or Defence or Heal (A/D/H)：'
            valid_inputs = {"A", "D", "H"}
            print('（提示：你现在可以按 H 回满血，仅此一次）')
        else:
            prompt = 'Attack or Defence (A/D)：'
            valid_inputs = {"A", "D"}
    
        if heal_penalty_active:
            print('【警告】治疗代价生效中：敌人对你的伤害 ×2！')
    
        user_input = input(prompt).strip().upper()
        while user_input not in valid_inputs:
            user_input = input("输入无效，请重新输入：" + prompt).strip().upper()
    
        # 敌人选择（对 A/D 有影响；若玩家选择 H，我们让敌人本回合直接攻击）
        enemy_status = ['Attack', 'Defence']
        enemy_choice = random.choices(enemy_status, weights=[0.7, 0.3], k=1)[0]  # 敌人更倾向于攻击
    
    
        # 当前敌人伤害倍率（是否翻倍）
        def enemy_mul():
            return 2.0 if heal_penalty_active else 1.0
    
    
        if user_input == "H":
            # 只有在 can_heal_now 为 True 时才会进入到这里
            print("你使用了治疗技能！血量已回满。")
            player.heal_full()
            heal_used = True
    
            # 触发治疗代价：从现在起敌人攻击翻倍（包含本回合的随后的敌人攻击）
            heal_penalty_active = True
    
            # 敌人回合：直接攻击（先治再挨打）
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * enemy_mul()
            print(f"{enemy.name} 攻击了你，造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
            player.being_attack(damage)
    
        elif user_input == "A":
            player_attack_coefficient = 1
            if enemy_choice == "Defence":
                print(f"{enemy.name} chose to defend!")
                player_attack_coefficient = 0.5
            else:
                print(f"{enemy.name} chose to attack!")
                raw_enemy_attack_value = enemy.attack()
                damage = raw_enemy_attack_value * enemy_mul()
                print(f"{enemy.name} 对你造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
                player.being_attack(damage)
    
            player_attack_value = player.attack()
            enemy.being_attack(player_attack_value * player_attack_coefficient)
    
        elif user_input == "D":
            # 防御：敌人攻击减伤为 90%，然后再应用翻倍倍率
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * 0.1 * enemy_mul()
            print(f"{enemy.name} 攻击了你（被你防住大部分），造成 {int(damage)} 点伤害！"
                  f"（原始{int(raw_enemy_attack_value)} × 减伤0.1 × 倍率{enemy_mul():.0f}）")
            player.being_attack(damage)
    
    if player.not_dead():
        print("You Win!")
    else:
        print("You Lose!")
    '''
    messages = []
    code_string = "为下面的代码编写一个游戏说明，也就是游戏场景中的规则介绍、操作介绍等。应用在命令行对话游戏中，要贴合、适合终端显示的 Python 字符串" + code_string
    messages.append({'role': 'user', 'content': code_string})
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=messages
        )
    assistant_content = response.choices[0].message.content
    print(f"Messages: {assistant_content}")
    ```

    @tab Step 1-output

    ```python
    **游戏说明：终端战斗游戏**
    
    \```
    ╔══════════════════════════════════════════════╗
    ║                🎯 战斗游戏说明                ║
    ╚══════════════════════════════════════════════╝
    
    📖 游戏背景：
    你是一名勇敢的冒险者，在终端世界中遭遇了敌人！
    必须运用策略在回合制战斗中击败对手。
    
    🎮 操作方式：
    • 攻击 [A] - 对敌人造成伤害（可能被防御减半）
    • 防御 [D] - 大幅减少受到的伤害（减伤90%）
    • 治疗 [H] - 当生命值低于50%时可使用（仅限一次）
    
    ⚔️ 战斗规则：
    1. 你和敌人轮流行动
    2. 敌人倾向于攻击（70%概率）
    3. 若你攻击时敌人选择防御，你的伤害减半
    4. 若你攻击时敌人也攻击，双方同时造成伤害
    
    💊 治疗机制：
    • 当生命值 < 50% 时出现治疗选项
    • 使用后立即回满生命值
    • 但会触发代价：敌人对你的伤害永久翻倍！
    
    ❤️ 状态显示：
    使用 ASCII 进度条直观显示生命值：
    [##########----------] 50%  50/100
     已损失HP   剩余HP    百分比 具体数值
    
    🎯 胜利条件：
    击败敌人并存活下来！
    
    ⚠️ 提示：
    - 注意治疗的风险与收益
    - 防御可有效减少伤害
    - 观察敌人的行动模式
    
    准备好开始战斗了吗？祝你好运，冒险者！
    \```
    
    这个游戏说明简洁明了，格式适合终端显示，包含了所有重要的游戏机制和操作说明，让玩家能够快速理解游戏规则。
    ```

    @tab Step 2

    ```python
    messages = []
    s1 = "为下面的代码编写一个游戏说明，也就是游戏场景中的规则介绍、操作介绍等。应用在命令行对话游戏中，要贴合、适合终端显示的 Python 字符串"
    s2 = "设计时，可以适当的左右并排显示，防止规则过长"
    code_string = s1 + s2 + code_string
    messages.append({'role': 'user', 'content': code_string})
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=messages
        )
    assistant_content = response.choices[0].message.content
    print(assistant_content)
    ```

    @tab Step 2-output

    ```python
    \```python
    game_intro = f"""
    {'='*60}
    {'勇者冒险：终端对决'.center(56)}
    {'='*60}
    
    ╔════════════════════════╗    ╔══════════════════════════╗
    ║       🎯 游戏规则       ║    ║        🎮 操作指南        ║
    ╠════════════════════════╣    ╠══════════════════════════╣
    ║                        ║    ║                          ║
    ║ • 生命值：玩家100/敌人80 ║    ║  A - 攻击 🗡️               ║
    ║ • 先击败对手者获胜      ║    ║  D - 防御 🛡️               ║
    ║ • 敌人倾向攻击(70%)    ║    ║  H - 治疗 💊 (限用一次)     ║
    ║                        ║    ║                          ║
    ╚════════════════════════╝    ╚══════════════════════════╝
    
    ╔══════════════════════════════════════════════════════════╗
    ║                         💡 战斗机制                       ║
    ╠══════════════════════════════════════════════════════════╣
    ║ 攻击 vs 攻击：双方互相造成全额伤害                        ║
    ║ 攻击 vs 防御：攻击方伤害减半，防御方受10%伤害            ║
    ║ 治疗触发条件：生命值低于50%且未使用过治疗                ║
    ║ 治疗代价：使用后敌人攻击永久翻倍！                       ║
    ╚══════════════════════════════════════════════════════════╝
    
    {'='*60}
    输入指令后按回车确认，祝你好运，勇者！
    {'='*60}
    """
    
    print(game_intro)
    \```
    
    这个游戏说明设计特点：
    
    1. **分栏布局** - 左右并排显示规则和操作，充分利用终端宽度
    2. **视觉分隔** - 使用Box-drawing字符创建清晰的边框
    3. **图标增强** - 使用emoji增加可读性
    4. **颜色友好** - 纯ASCII设计，兼容所有终端
    5. **层次清晰** - 分为游戏规则、操作指南、战斗机制三个部分
    6. **重点突出** - 治疗机制的触发条件和代价单独强调
    
    输出效果会在终端中显示为整齐的方框布局，规则信息一目了然，适合在游戏开始前向玩家展示。
    ```

    @tab Step 3

    ```python
    messages = []
    s1 = "为下面的代码编写一个游戏说明，也就是游戏场景中的规则介绍、操作介绍等。应用在命令行对话游戏中，要贴合、适合终端显示的 Python 字符串"
    s2 = "设计时，可以适当的左右并排显示，注意边框过长，防止规则过长"
    code_string = s1 + s2 + code_string
    messages.append({'role': 'user', 'content': code_string})
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=messages
        )
    assistant_content = response.choices[0].message.content
    print(assistant_content)
    ```

    @tab Step 3-output

    ```python
    \```python
    # =============================================================================
    #                           战斗游戏说明
    # =============================================================================
    # 游戏规则                                 操作指南
    # ------------------------------------    ------------------------------------
    # • 你与敌人轮流攻击，HP先归零者败        • A - 攻击：全力出击，可能两败俱伤
    # • 初始血量：玩家100 | 敌人80            • D - 防御：大幅减伤，但无法反击
    # • 攻击伤害：0~50随机值                  • H - 治疗：回满血量（仅限一次）
    # • 敌人倾向：70%攻击 | 30%防御           • 输入提示：A/D 或 A/D/H
    #                                        • 大小写均可识别
    # 特殊机制
    # ------------------------------------
    # • 治疗触发：HP<50%时可使用H键回满血
    # • 治疗代价：使用治疗后敌人伤害永久×2
    # • 攻防相克：
    #   - 你攻敌防：你伤害减半
    #   - 你攻敌攻：互相造成伤害
    #   - 你防敌攻：伤害减少90%
    # =============================================================================
    # 状态显示：[#####-------------] 25%  25/100
    #           ↑血量比例          ↑百分比 ↑当前/最大
    # =============================================================================
    \```
    
    或者更简洁的版本：
    
    \```python
    # =================================================================
    #                     战斗游戏说明
    # =================================================================
    # 规则说明           │ 操作说明           │ 特殊机制
    # ------------------│-------------------│--------------------------
    # • 回合制战斗      │ A - 攻击          │ 治疗限制：
    # • HP归零即失败    │ D - 防御          │  • HP<50%时可治疗
    # • 敌人AI随机行动  │ H - 治疗(限1次)   │  • 治疗后敌人伤害×2
    # • 攻防存在克制    │ 输入不区分大小写   │  
    # =================================================================
    # 血量显示：[##########----------] 50%  50/100
    # =================================================================
    \```
    
    选择使用第一个完整版还是第二个简洁版，取决于你的终端宽度。第一个适合较宽的终端（约100字符），第二个适合标准终端（约80字符）。
    
    两个版本都：
    - 使用等宽字体友好的ASCII边框
    - 左右分栏显示，信息归类清晰
    - 包含所有关键规则和操作说明
    - 解释了血量条的含义
    - 强调了治疗机制的代价
    
    你可以在游戏开始时打印这个说明字符串。
    ```

    @tab next code

    ```python
    string = """
    # =================================================================
    #                     战斗游戏说明
    # =================================================================
    # 规则说明           │ 操作说明           │ 特殊机制
    # ------------------│-------------------│--------------------------
    # • 回合制战斗      │ A - 攻击          │ 治疗限制：
    # • HP归零即失败    │ D - 防御          │  • HP<50%时可治疗
    # • 敌人AI随机行动  │ H - 治疗(限1次)   │  • 治疗后敌人伤害×2
    # • 攻防存在克制    │ 输入不区分大小写   │  
    # =================================================================
    # 血量显示：[##########----------] 50%  50/100
    # =================================================================
    """
    messages = []
    s1 = "把下面的字符串中的‘竖杠‘进行对齐！’"
    code_string = s1 + code_string
    messages.append({'role': 'user', 'content': code_string})
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=messages
        )
    assistant_content = response.choices[0].message.content
    print(assistant_content)
    ```

    :::

    从上面的代码更新步骤中，要有的感受是：**<span style="color:orange">提示词是要一步步从 AI 回答的结果中去反复微调，没有什么技巧。硬要有什么技巧的话，就是要清楚自己想要什么，去表达出。实在不行，去跟语文老师忏悔🧎‍♀️</span>**；

    > **祛魅**：市面上很多所谓的提示词教学，都是智商税。语文都学不明白，就会变成韭菜，掉入营销陷阱🪤。——日期：2025 年 10 月 23 日 16:06:17
    >
    > 现在还有，只不过是变花样～

2. **游戏实际对话记录：**

    ```bash
    AI悦创's HP → [####################] 100%  100/100
    熊杰's HP → [####################] 100%  80/80
    Attack or Defence (A/D)：A
    熊杰 chose to defend!
    AI悦创's HP → [####################] 100%  100/100
    熊杰's HP → [##################--]  87%  70/80
    Attack or Defence (A/D)：D
    熊杰 攻击了你（被你防住大部分），造成 4 点伤害！（原始40 × 减伤0.1 × 倍率1）
    AI悦创's HP → [###################-]  96%  96/100
    熊杰's HP → [##################--]  87%  70/80
    Attack or Defence (A/D)：A
    熊杰 chose to attack!
    熊杰 对你造成 23 点伤害！（原始23 × 倍率1）
    AI悦创's HP → [###############-----]  73%  73/100
    熊杰's HP → [############--------]  61%  49/80
    Attack or Defence (A/D)：A
    熊杰 chose to defend!
    AI悦创's HP → [###############-----]  73%  73/100
    熊杰's HP → [###########---------]  52%  42/80
    Attack or Defence (A/D)：D
    熊杰 攻击了你（被你防住大部分），造成 2 点伤害！（原始20 × 减伤0.1 × 倍率1）
    AI悦创's HP → [##############------]  71%  71/100
    熊杰's HP → [###########---------]  52%  42/80
    Attack or Defence (A/D)：A
    熊杰 chose to defend!
    AI悦创's HP → [##############------]  71%  71/100
    熊杰's HP → [#########-----------]  42%  34/80
    Attack or Defence (A/D)：A
    熊杰 chose to defend!
    AI悦创's HP → [##############------]  71%  71/100
    熊杰's HP → [#####---------------]  26%  21/80
    Attack or Defence (A/D)：D
    熊杰 攻击了你（被你防住大部分），造成 1 点伤害！（原始18 × 减伤0.1 × 倍率1）
    AI悦创's HP → [##############------]  69%  69/100
    熊杰's HP → [#####---------------]  26%  21/80
    Attack or Defence (A/D)：D
    熊杰 攻击了你（被你防住大部分），造成 3 点伤害！（原始32 × 减伤0.1 × 倍率1）
    AI悦创's HP → [#############-------]  65%  65/100
    熊杰's HP → [#####---------------]  26%  21/80
    Attack or Defence (A/D)：D
    熊杰 攻击了你（被你防住大部分），造成 1 点伤害！（原始16 × 减伤0.1 × 倍率1）
    AI悦创's HP → [#############-------]  63%  63/100
    熊杰's HP → [#####---------------]  26%  21/80
    Attack or Defence (A/D)：D
    熊杰 攻击了你（被你防住大部分），造成 0 点伤害！（原始9 × 减伤0.1 × 倍率1）
    AI悦创's HP → [############--------]  62%  62/100
    熊杰's HP → [#####---------------]  26%  21/80
    Attack or Defence (A/D)：D
    熊杰 攻击了你（被你防住大部分），造成 3 点伤害！（原始34 × 减伤0.1 × 倍率1）
    AI悦创's HP → [############--------]  57%  58/100
    熊杰's HP → [#####---------------]  26%  21/80
    Attack or Defence (A/D)：D
    熊杰 攻击了你（被你防住大部分），造成 4 点伤害！（原始46 × 减伤0.1 × 倍率1）
    AI悦创's HP → [###########---------]  53%  53/100
    熊杰's HP → [#####---------------]  26%  21/80
    Attack or Defence (A/D)：D
    熊杰 攻击了你（被你防住大部分），造成 4 点伤害！（原始45 × 减伤0.1 × 倍率1）
    AI悦创's HP → [##########----------]  48%  48/100
    熊杰's HP → [#####---------------]  26%  21/80
    （提示：你现在可以按 H 回满血，仅此一次）
    Attack or Defence or Heal (A/D/H)：H
    你使用了治疗技能！血量已回满。
    熊杰 攻击了你，造成 64 点伤害！（原始32 × 倍率2）
    AI悦创's HP → [#######-------------]  36%  36/100
    熊杰's HP → [#####---------------]  26%  21/80
    【警告】治疗代价生效中：敌人对你的伤害 ×2！
    Attack or Defence (A/D)：A
    熊杰 chose to attack!
    熊杰 对你造成 70 点伤害！（原始35 × 倍率2）
    You Lose!
    ```
    
3. 一句话说明游戏规则以及玩法：（**准备 DeepSeek 的提示词**）

    ::: tip 

    1. 必须要包含：**游戏规则、玩法**；
    2. 最最重要的是：**具体如何交互，也就是输入什么。（输入：A or D or H）以及知道回血只能回血一次且使用回血之后的代价！**；
    3. **<span style="color:orange">提示词不一定都要人写，还可以让 AI 写，不可置否的是：AI 的逻辑性比大部分人强！</span>**

    :::

    ::: details

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/3f/3f67f587552b8577b1be22424d6badedd55d29cdec1e0736f857040680a18a6d.png)

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/b7/b7a55fba1dcea8ba58a9664b7967c0a500a28cc1e157966fe28acc11578ff7b3.png)

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/91/91d84763a94f49c9bbb84a04c389ccf9b0ff03d6b39055c6b18837b018618e3a.png)

    :::

    ::: code-tabs

    @tab 第一次回复

    ```markdown
    这是一个**文字回合制战斗游戏**，玩家（AI悦创）与随机生成的敌人轮流选择“攻击（A）”“防御（D）”或在血量低于50%时使用一次“治疗（H）”，治疗可瞬间回满血但会触发敌人之后攻击伤害翻倍，直至一方HP归零为止。
    ```

    @tab 第二次回复

    ```markdown
    **提示词：**
    
    你是这个游戏中的敌人，负责做出对战中的行动决策（攻击 A 或 防御 D）。你的决策应当基于当前游戏状态。每一回合，你只会接收到以下信息：
    
    * **玩家（AI悦创）**和**敌人（你）**的当前HP，以及显示的进度条状态。
    * **玩家选择的行动**，例如：攻击（A），防御（D），治疗（H）等。
    * **敌人的行为**：包括敌人的选择（攻击或防御），并根据敌人的行动决定你应采取什么策略。
    
    ### 决策规则：
    
    1. 如果玩家选择了治疗（H），**敌人将直接攻击**并依据当前倍数来计算伤害（治疗后敌人的攻击伤害翻倍）。
    2. **攻击（A）**：你将尽量选择攻击，除非你的HP较低（少于50%），此时可能会选择防御。
    3. **防御（D）**：如果你认为敌人会进行攻击并且自己处于较低血量（少于40%），你可以选择防御来减少伤害。防御时，敌人伤害减少90%。
    
    请根据以下当前游戏状态做出合理决策：
    
    **当前游戏状态：**
    
    * **AI悦创's HP →** [##########----------] 48%  48/100
    * **熊杰's HP →** [#####---------------] 26%  21/80
    
    ---
    
    每轮会给你提供这些信息，你只需根据当前游戏状态，选择合理的行动：
    
    * **A**（攻击）
    * **D**（防御）
    
    请选择 A 或 D，做出对战决策。
    ```

    :::

看 AI 的回复，其实还是有点长的，不过可以测试之后，在微调缩短。

###### 14.23.1.4.1 DeepSeek 大模型角色设定

```python
system_setting1 = {
    "role": "system", 
    "content": """你是这个游戏中的敌人，负责做出对战中的行动决策（攻击 A 或 防御 D）。你的决策应当基于当前游戏状态。每一回合，你只会接收到以下信息：

* **玩家（AI悦创）**和**敌人（你）**的当前HP，以及显示的进度条状态。
* **玩家选择的行动**，例如：攻击（A），防御（D），治疗（H）等。
* **敌人的行为**：包括敌人的选择（攻击或防御），并根据敌人的行动决定你应采取什么策略。

### 决策规则：

1. 如果玩家选择了治疗（H），**敌人将直接攻击**并依据当前倍数来计算伤害（治疗后敌人的攻击伤害翻倍）。
2. **攻击（A）**：你将尽量选择攻击，除非你的HP较低（少于50%），此时可能会选择防御。
3. **防御（D）**：如果你认为敌人会进行攻击并且自己处于较低血量（少于40%），你可以选择防御来减少伤害。防御时，敌人伤害减少90%。

请根据以下当前游戏状态做出合理决策：

**当前游戏状态：**

* **AI悦创's HP →** [##########----------] 48%  48/100
* **熊杰's HP →** [#####---------------] 26%  21/80

---

每轮会给你提供这些信息，你只需根据当前游戏状态，选择合理的行动：

* **A**（攻击）
* **D**（防御）

请选择 A 或 D，做出对战决策。"""
}
```

###### 14.23.1.4.2 大模型调用封装成函数

接收游戏当前状态，返回决定的操作：

::: code-tabs

@tab 版本 1「淘汰版本」

```python
from openai import OpenAI
client = OpenAI(api_key="YOUR_OPENAI_API_KEY", base_url="https://api.deepseek.com")

messages = [] # 用来存储历史对话，后期学完文件读取，可以考虑持久化存储！

system_setting1 = {
    "role": "system", 
    "content": """你是这个游戏中的敌人，负责做出对战中的行动决策（攻击 A 或 防御 D）。你的决策应当基于当前游戏状态。每一回合，你只会接收到以下信息：

* **玩家（AI悦创）**和**敌人（你）**的当前HP，以及显示的进度条状态。
* **玩家选择的行动**，例如：攻击（A），防御（D），治疗（H）等。
* **敌人的行为**：包括敌人的选择（攻击或防御），并根据敌人的行动决定你应采取什么策略。

### 决策规则：

1. 如果玩家选择了治疗（H），**敌人将直接攻击**并依据当前倍数来计算伤害（治疗后敌人的攻击伤害翻倍）。
2. **攻击（A）**：你将尽量选择攻击，除非你的HP较低（少于50%），此时可能会选择防御。
3. **防御（D）**：如果你认为敌人会进行攻击并且自己处于较低血量（少于40%），你可以选择防御来减少伤害。防御时，敌人伤害减少90%。

请根据以下当前游戏状态做出合理决策：

**当前游戏状态：**

* **AI悦创's HP →** [##########----------] 48%  48/100
* **熊杰's HP →** [#####---------------] 26%  21/80

---

每轮会给你提供这些信息，你只需根据当前游戏状态，选择合理的行动：

* **A**（攻击）
* **D**（防御）

请选择 A 或 D，做出对战决策。"""
}
messages.append(system_setting1)

def DeepSeek_Enemy(game_status):
    messages.append({'role': 'user', 'content': game_status})
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=messages
        )
    assistant_content = response.choices[0].message.content
    messages.append({"role": "assistant", "content": assistant_content})
    # print(f"Message: {assistant_content}")
    return assistant_content
```

@tab 版本 2 filename：`big_model.py`

```python
# === ADDED: DeepSeek/OpenAI 客户端 ===
from openai import OpenAI
import os  # === ADDED: 用于从环境变量读取 API Key ===

# === ADDED: 大模型“敌人”系统提示词（只会返回 A 或 D） ===
ENEMY_SYSTEM_PROMPT = """你是这个回合制战斗游戏中的“敌人AI”，只负责在每一回合选择【A】或【D】。
请严格遵守：
- 你只能输出一个大写字母：A 或 D（不要输出其它任何文字）。
- 决策要基于当回合提供的状态信息做出理性选择。

规则回顾（供你参考，不要复述）：
1) 若玩家使用治疗（H），本回合敌人必定攻击（A），且敌人伤害翻倍（×2）。
2) 当你的 HP < 40% 且玩家看起来会攻击时，更倾向于防御（D）。
3) 当玩家防御（D）且你的 HP 不低时，更倾向于攻击（A）来消耗对手。
4) 一般情况下倾向于进攻（A），但在自己低血或明显亏换血时可以选择防御（D）。
"""

# === ADDED: 初始化 OpenAI 客户端（DeepSeek 兼容）===
# 请将 API Key 放入环境变量：DEEPSEEK_API_KEY
client = OpenAI(
    api_key=os.getenv("DEEPSEEK_API_KEY", "YOUR_OPENAI_API_KEY"),  # 不硬编码，提升安全性
    base_url="https://api.deepseek.com"
)

# === ADDED: 调用大模型获取敌人决策（强制只返回 A/D） ===
def llm_enemy_decide(game_status_text: str) -> str:
    messages = [
        {"role": "system", "content": ENEMY_SYSTEM_PROMPT},
        {"role": "user", "content": game_status_text}
    ]
    try:
        resp = client.chat.completions.create(
            model="deepseek-chat",
            messages=messages,
            max_tokens=4,  # 只要一个字符
        )
        content = resp.choices[0].message.content.strip().upper()
        # 规范化，仅允许 A/D；否则回退到 A
        if "A" in content and "D" in content:
            # 若模型不小心返回了“选A或D”，默认取 A
            return "A"
        if content.startswith("A"):
            return "A"
        if content.startswith("D"):
            return "D"
        return "A"  # 兜底
    except Exception as e:
        # 失败时兜底为倾向攻击
        print(f"[LLM 决策失败，使用兜底策略 A] 原因：{e}")
        return "A"
```

:::

###### 14.23.1.4.3 游戏代码修改适配

::: code-tabs

@tab big-mode.py

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/10/27 15:24
# @Author  : AI悦创
# @FileName: big_model.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
# === ADDED: DeepSeek/OpenAI 客户端 ===
from openai import OpenAI
import os  # === ADDED: 用于从环境变量读取 API Key ===

# === ADDED: 大模型“敌人”系统提示词（只会返回 A 或 D） ===
ENEMY_SYSTEM_PROMPT = """你是这个回合制战斗游戏中的“敌人AI”，只负责在每一回合选择【A】或【D】。
请严格遵守：
- 你只能输出一个大写字母：A 或 D（不要输出其它任何文字）。
- 决策要基于当回合提供的状态信息做出理性选择。

规则回顾（供你参考，不要复述）：
1) 若玩家使用治疗（H），本回合敌人必定攻击（A），且敌人伤害翻倍（×2）。
2) 当你的 HP < 40% 且玩家看起来会攻击时，更倾向于防御（D）。
3) 当玩家防御（D）且你的 HP 不低时，更倾向于攻击（A）来消耗对手。
4) 一般情况下倾向于进攻（A），但在自己低血或明显亏换血时可以选择防御（D）。
"""

# === ADDED: 初始化 OpenAI 客户端（DeepSeek 兼容）===
# 请将 API Key 放入环境变量：DEEPSEEK_API_KEY
client = OpenAI(
    api_key=os.getenv("DEEPSEEK_API_KEY", "YOUR_OPENAI_API_KEY"),  # 不硬编码，提升安全性
    base_url="https://api.deepseek.com"
)

# === ADDED: 调用大模型获取敌人决策（强制只返回 A/D） ===
def llm_enemy_decide(game_status_text: str) -> str:
    messages = [
        {"role": "system", "content": ENEMY_SYSTEM_PROMPT},
        {"role": "user", "content": game_status_text}
    ]
    try:
        resp = client.chat.completions.create(
            model="deepseek-chat",
            messages=messages,
            max_tokens=4,  # 只要一个字符
        )
        content = resp.choices[0].message.content.strip().upper()
        # 规范化，仅允许 A/D；否则回退到 A
        if "A" in content and "D" in content:
            # 若模型不小心返回了“选A或D”，默认取 A
            return "A"
        if content.startswith("A"):
            return "A"
        if content.startswith("D"):
            return "D"
        return "A"  # 兜底
    except Exception as e:
        # 失败时兜底为倾向攻击
        print(f"[LLM 决策失败，使用兜底策略 A] 原因：{e}")
        return "A"
```

@tab main.py

```python
# -*- coding: utf-8 -*-
# @Time    : 2025/10/27 15:07
# @Author  : AI悦创
# @FileName: main.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# code is far away from bugs with the god animal protecting
#    I love animals. They taste delicious.
import random
from faker import Faker
from big_model import llm_enemy_decide


# —— 简单无色进度条（纯 ASCII，跨平台）——
def hp_bar(cur: int, maxv: int, width: int = 20) -> str:
    """返回形如：[##########----------] 50%  50/100 的进度条文本"""
    if maxv <= 0:
        maxv = 1
    cur = max(0, min(cur, maxv))
    ratio = cur / maxv
    filled = int(ratio * width + 0.5)  # 四舍五入
    bar = "#" * filled + "-" * (width - filled)
    return f"[{bar}] {int(ratio * 100):3d}%  {cur}/{maxv}"


class Creature:
    def __init__(self, hp, name):
        self.hp = int(hp)
        self.max_hp = int(hp)  # 记录初始满血
        self.name = name

    def attack(self):
        return random.randint(0, 50)

    def not_dead(self):
        return self.hp > 0

    def being_attack(self, dmg: float):
        """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
        self.hp = max(0, int(self.hp - dmg))

    def heal_full(self):
        """直接回到初始满血"""
        self.hp = self.max_hp

    def show_status(self):
        print(f"{self.name}'s HP → {hp_bar(self.hp, self.max_hp)}")


# === ADDED: 生成传给大模型的“当前对局状态”文本 ===
def build_game_status_for_llm(player, enemy, last_player_action: str, heal_penalty_active: bool) -> str:
    """
    last_player_action: 'A' / 'D' / 'H'
    """
    penalty_txt = "是" if heal_penalty_active else "否"
    return (
        f"玩家（AI悦创）的HP：{hp_bar(player.hp, player.max_hp)}\n"
        f"敌人（你，{enemy.name}）的HP：{hp_bar(enemy.hp, enemy.max_hp)}\n"
        f"玩家上一手的动作：{last_player_action}\n"
        f"治疗代价是否生效（敌人攻击×2）：{penalty_txt}\n"
        "请只返回 A 或 D。"
    )


fk = Faker(locale='zh_CN')
player = Creature(100, "AI悦创")
enemy = Creature(80, fk.name())

heal_used = False  # 治疗仅限一次
heal_penalty_active = False  # 是否已触发“敌人攻击翻倍”的惩罚

while player.not_dead() and enemy.not_dead():
    player.show_status()
    enemy.show_status()

    # 是否出现治疗提示：仅当当前 HP < 初始 HP 的 50% 且尚未使用
    can_heal_now = (not heal_used) and (player.hp < player.max_hp * 0.5)

    if can_heal_now:
        prompt = 'Attack or Defence or Heal (A/D/H)：'
        valid_inputs = {"A", "D", "H"}
        print('（提示：你现在可以按 H 回满血，仅此一次）')
    else:
        prompt = 'Attack or Defence (A/D)：'
        valid_inputs = {"A", "D"}

    if heal_penalty_active:
        print('【警告】治疗代价生效中：敌人对你的伤害 ×2！')

    user_input = input(prompt).strip().upper()
    while user_input not in valid_inputs:
        user_input = input("输入无效，请重新输入：" + prompt).strip().upper()


    # === MODIFIED: 敌人选择由大模型驱动（除非玩家 H，规则规定敌人必 A） ===
    def enemy_mul():
        return 2.0 if heal_penalty_active else 1.0


    if user_input == "H":
        # 只有在 can_heal_now 为 True 时才会进入到这里
        print("你使用了治疗技能！血量已回满。")
        player.heal_full()
        heal_used = True

        # 触发治疗代价：从现在起敌人攻击翻倍（包含本回合的随后的敌人攻击）
        heal_penalty_active = True

        # 敌人本回合：规则指定必定攻击
        raw_enemy_attack_value = enemy.attack()
        damage = raw_enemy_attack_value * enemy_mul()
        print(
            f"{enemy.name} 攻击了你，造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
        player.being_attack(damage)

    elif user_input == "A":
        # === MODIFIED: 通过 LLM 决策敌人 A/D ===
        game_status_text = build_game_status_for_llm(player, enemy, "A", heal_penalty_active)  # === ADDED
        enemy_decision = llm_enemy_decide(game_status_text)  # === ADDED

        player_attack_coefficient = 1.0
        if enemy_decision == "D":
            print(f"{enemy.name} 选择了防御（LLM）！")
            player_attack_coefficient = 0.5
        else:
            print(f"{enemy.name} 选择了攻击（LLM）！")
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * enemy_mul()
            print(
                f"{enemy.name} 对你造成 {int(damage)} 点伤害！（原始{int(raw_enemy_attack_value)} × 倍率{enemy_mul():.0f}）")
            player.being_attack(damage)

        player_attack_value = player.attack()
        enemy.being_attack(player_attack_value * player_attack_coefficient)

    elif user_input == "D":
        # === MODIFIED: 通过 LLM 决策敌人 A/D，并分别处理 ===
        game_status_text = build_game_status_for_llm(player, enemy, "D", heal_penalty_active)  # === ADDED
        enemy_decision = llm_enemy_decide(game_status_text)  # === ADDED

        if enemy_decision == "A":
            # 防御：敌人攻击减伤为 90%，然后再应用翻倍倍率
            raw_enemy_attack_value = enemy.attack()
            damage = raw_enemy_attack_value * 0.1 * enemy_mul()
            print(f"{enemy.name} 发起了攻击（LLM），但被你防住大部分，造成 {int(damage)} 点伤害！"
                  f"（原始{int(raw_enemy_attack_value)} × 减伤0.1 × 倍率{enemy_mul():.0f}）")
            player.being_attack(damage)
        else:
            # === ADDED: 敌人也防御时，双方观望，本回合无伤害 ===
            print(f"{enemy.name} 也选择了防御（LLM）！本回合双方均无伤害。")

    # （本回合结束后可在此打印状态或进入下一轮）

if player.not_dead():
    print("You Win!")
else:
    print("You Lose!")
```

:::

> 基础版本的游戏实现代码：[http://codemark.bornforthis.cn/share/13a866d5-d4d9-4b9a-9821-e9dd3493ee8a_20251110145806](http://codemark.bornforthis.cn/share/13a866d5-d4d9-4b9a-9821-e9dd3493ee8a_20251110145806)
>
> ::: details [http://codemark.bornforthis.cn/share/13a866d5-d4d9-4b9a-9821-e9dd3493ee8a_20251110145806](http://codemark.bornforthis.cn/share/13a866d5-d4d9-4b9a-9821-e9dd3493ee8a_20251110145806)
>
> 利用此代码，可以更好的便于我们理解掌握 AI 是如何进行协作的，也就是降低代码复杂的，但是代码核心实现逻辑还在。
>
> ```python
> import random
> 
> # ==================【新增】导入并初始化大模型客户端==================
> # 新增：大模型相关代码
> from openai import OpenAI  # 【新增】
> client = OpenAI(           # 【新增】
>     api_key="YOUR_OPENAI_API_KEY",
>     base_url="https://api.deepseek.com"
> )
> messages = []  # 【新增】用于存储上下文
> 
> # 【新增】系统提示词，告诉模型它是“敌人”
> system_setting1 = {
>     "role": "system",
>     "content": """你是这个游戏中的敌人，负责做出对战中的行动决策（攻击 A 或 防御 D）。
> 你每回合会拿到玩家和你自己的HP、以及玩家这回合的行动，你只需要返回 A 或 D。
> 只返回一个大写字母：A 或 D。不要说其他多余的话。"""
> }
> messages.append(system_setting1)
> # ==================【新增结束】==================================
> 
> 
> class Creature():
>     def __init__(self, hp, name):
>         self.hp = hp
>         self.name = name
> 
>     def attack(self):
>         return random.randint(0, 50)
> 
>     def not_dead(self):
>         return self.hp > 0
> 
>     def being_attack(self, dmg: float):
>         """受到伤害（向下取整以避免浮点 HP），并保证 HP 不会掉到负数以下"""
>         self.hp = max(0, int(self.hp - dmg))
> 
>     def show_status(self):
>         print(f"{self.name}'s HP → {self.hp}")
> 
> 
> player = Creature(100, "AI悦创")
> enemy = Creature(80, "Enemy")
> 
> 
> # ==================【新增】把当前回合信息发给模型的函数==================
> def build_game_status(player_obj: Creature, enemy_obj: Creature, player_action: str) -> str:
>     """【新增】构造一段给模型看的文本，描述当前局面"""
>     # 这里你也可以做血条，但是文字足够用了
>     txt = (
>         f"玩家名称: {player_obj.name}\n"
>         f"玩家HP: {player_obj.hp}/100\n"
>         f"敌人名称: {enemy_obj.name}\n"
>         f"敌人HP: {enemy_obj.hp}/80\n"
>         f"玩家本回合的动作: {player_action}\n"
>         f"请你只返回 A(攻击) 或 D(防御)。"
>     )
>     return txt
> 
> 
> def DeepSeek_Enemy(game_status: str) -> str:
>     """【新增】真正去问大模型要这回合出什么招"""
>     messages.append({'role': 'user', 'content': game_status})
>     response = client.chat.completions.create(
>         model="deepseek-chat",
>         messages=messages
>     )
>     assistant_content = response.choices[0].message.content.strip()
>     messages.append({"role": "assistant", "content": assistant_content})
> 
>     # 做一次简单规整：只留下首个大写字母A/D，防止模型话痨
>     choice = assistant_content.upper().strip()
>     if choice.startswith("A"):
>         return "A"
>     if choice.startswith("D"):
>         return "D"
>     # 如果模型给了奇怪的东西，就退回攻击
>     return "A"
> # ==================【新增结束】======================================
> 
> 
> while player.not_dead() and enemy.not_dead():
>     player.show_status()
>     enemy.show_status()
> 
>     user_input = input("Attack or Defence (A/D)：").strip().upper()
>     while user_input not in ("A", "D"):
>         user_input = input("输入无效，请重新输入 A 或 D：").strip().upper()
> 
>     # ==================【修改】这里原来是随机敌人动作，改成问大模型==================
>     # enemy_status = ['Attack', 'Defence']
>     # enemy_choice = random.choice(enemy_status)
> 
>     # 【新增】构造这回合的状态，告诉AI“玩家这回合干了什么+双方HP”
>     game_status_text = build_game_status(player, enemy, user_input)  # 【新增】
>     enemy_choice = DeepSeek_Enemy(game_status_text)  # 【新增】AI 决策，返回 "A" 或 "D"
>     # ==================【修改结束】========================================
> 
>     if user_input == "A":
>         player_attack_coefficient = 1  # MR 取名
>         if enemy_choice == "D":  # 【修改】这里原来是 == "Defence"
>             print(f"{enemy.name} chose to defend!")
>             player_attack_coefficient = 0.5
>         else:  # 敌人攻击
>             print(f"{enemy.name} chose to attack!")
>             enemy_attack_value = enemy.attack()
>             player.being_attack(enemy_attack_value)
> 
>         player_attack_value = player.attack()
>         enemy.being_attack(player_attack_value * player_attack_coefficient)
> 
>     elif user_input == "D":
>         # 玩家防御逻辑保持不变
>         enemy_attack_value = enemy.attack() * 0.1
>         player.being_attack(enemy_attack_value)
> 
> if player.not_dead():
>     print("You Win!")
> else:
>     print("You Lose!")
> ```
>
> :::

#### 14.23.2 本地大模型对接（Ollama、LM Studio）

在此刻开始，上面的 `main.py` 代码我们还需要再修改吗？——不需要再修改，只要保证 `main.py` 可以正常的接收大模型返回的特定结果即可。

我们只需要保证，使用任何大模型时返回的结果、类型与先前的大模型一致，即可无损实现！

##### 14.23.2.1 安装 Ollama、LM Studio

- Ollama：[https://ollama.com/](https://ollama.com/)
- LM Studio：[https://lmstudio.ai/](https://lmstudio.ai/)

##### 14.23.2.2 Ollama 实现

1. **安装 Ollama 库**：

    ```bash
    pip install ollama
    ```

2. **开始和模型基础聊天**（模型自己下载）

    ::: code-tabs

    @tab 基础对话

    ```python
    from ollama import chat
    from ollama import ChatResponse
    
    response: ChatResponse = chat(model='gemma3', messages=[
      {
        'role': 'user',
        'content': '为什么气球叫气球？',
      },
    ])
    print(response['message']['content'])
    # or access fields directly from the response object
    print(response.message.content)
    ```

    @tab 使用 API 实现（我自己电脑使用 API）

    ```python
    from ollama import Client
    
    client = Client(
        host='http://192.168.3.17:11434',
        headers={'x-some-header': 'some-value'}
    )
    
    response = client.chat(model='gpt-oss:20b', messages=[
      {
        'role': 'user',
        'content': '为什么气球叫气球？',
      },
    ])
    print(response['message']['content'])
    # or access fields directly from the response object
    print(response.message.content)
    ```

    :::

3. **封装成函数**

    ::: code-tabs

    @tab 1. 基础实现

    ```python
    # -*- coding: utf-8 -*-
    # @Time    : 2025/11/13 14:10
    # @Author  : AI悦创
    # @FileName: Ollama_local_code.py
    # @Software: PyCharm
    # @Blog    ：https://bornforthis.cn/
    # code is far away from bugs with the god animal protecting
    #    I love animals. They taste delicious.
    from ollama import chat
    
    # === ADDED: 大模型“敌人”系统提示词（只会返回 A 或 D） ===
    ENEMY_SYSTEM_PROMPT = """你是这个回合制战斗游戏中的“敌人AI”，只负责在每一回合选择【A】或【D】。
    请严格遵守：
    - 你只能输出一个大写字母：A 或 D（不要输出其它任何文字）。
    - 决策要基于当回合提供的状态信息做出理性选择。
    
    规则回顾（供你参考，不要复述）：
    1) 若玩家使用治疗（H），本回合敌人必定攻击（A），且敌人伤害翻倍（×2）。
    2) 当你的 HP < 40% 且玩家看起来会攻击时，更倾向于防御（D）。
    3) 当玩家防御（D）且你的 HP 不低时，更倾向于攻击（A）来消耗对手。
    4) 一般情况下倾向于进攻（A），但在自己低血或明显亏换血时可以选择防御（D）。
    """
    
    
    def llm_enemy_decide(game_status_text: str) -> str:
        messages = [
            {"role": "system", "content": ENEMY_SYSTEM_PROMPT},
            {"role": "user", "content": game_status_text}
        ]
    
        try:
            resp = chat(model='gpt-oss:20b', messages=messages)
    
            content = resp['message']['content'].strip().upper()
            print(f"大模型的选择：{content}")  # 后期可以选择去掉
            # 规范化，仅允许 A/D；否则回退到 A
            if "A" in content and "D" in content:
                # 若模型不小心返回了“选A或D”，默认取 A
                return "A"
            if content.startswith("A"):
                return "A"
            if content.startswith("D"):
                return "D"
            return "A"  # 兜底
        except Exception as e:
            # 失败时兜底为倾向攻击
            print(f"[LLM 决策失败，使用兜底策略 A] 原因：{e}")
            return "A"
    
    
    if __name__ == '__main__':
        string = """
        玩家（AI悦创）的HP：[####################] 100%  100/100
        敌人（你，李凤兰）的HP：[####################] 100%  80/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide(string))
        string = """
        玩家（AI悦创）的HP：[###-----------------]  15%  15/100
        敌人（你，王帆）的HP：[#-------------------]   5%  4/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide(string))
        string = """
        玩家（AI悦创）的HP：[####################] 100%  100/100
        敌人（你，王帆）的HP：[#-------------------]   5%  4/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide(string))
    ```

    @tab 2. API 实现

    ```python
    # -*- coding: utf-8 -*-
    # @Time    : 2025/11/13 14:10
    # @Author  : AI悦创
    # @FileName: Ollama_api_code.py
    # @Software: PyCharm
    # @Blog    ：https://bornforthis.cn/
    # code is far away from bugs with the god animal protecting
    #    I love animals. They taste delicious.
    from ollama import Client
    
    client = Client(
        host='http://192.168.3.17:11434',
        headers={'x-some-header': 'some-value'}
    )
    
    # === ADDED: 大模型“敌人”系统提示词（只会返回 A 或 D） ===
    ENEMY_SYSTEM_PROMPT = """你是这个回合制战斗游戏中的“敌人AI”，只负责在每一回合选择【A】或【D】。
    请严格遵守：
    - 你只能输出一个大写字母：A 或 D（不要输出其它任何文字）。
    - 决策要基于当回合提供的状态信息做出理性选择。
    
    规则回顾（供你参考，不要复述）：
    1) 若玩家使用治疗（H），本回合敌人必定攻击（A），且敌人伤害翻倍（×2）。
    2) 当你的 HP < 40% 且玩家看起来会攻击时，更倾向于防御（D）。
    3) 当玩家防御（D）且你的 HP 不低时，更倾向于攻击（A）来消耗对手。
    4) 一般情况下倾向于进攻（A），但在自己低血或明显亏换血时可以选择防御（D）。
    """
    
    
    def llm_enemy_decide(game_status_text: str) -> str:
        messages = [
            {"role": "system", "content": ENEMY_SYSTEM_PROMPT},
            {"role": "user", "content": game_status_text}
        ]
    
        try:
            resp = client.chat(model='gpt-oss:20b', messages=messages)
    
            content = resp['message']['content'].strip().upper()
            print(f"大模型的选择：{content}")  # 后期可以选择去掉
            # 规范化，仅允许 A/D；否则回退到 A
            if "A" in content and "D" in content:
                # 若模型不小心返回了“选A或D”，默认取 A
                return "A"
            if content.startswith("A"):
                return "A"
            if content.startswith("D"):
                return "D"
            return "A"  # 兜底
        except Exception as e:
            # 失败时兜底为倾向攻击
            print(f"[LLM 决策失败，使用兜底策略 A] 原因：{e}")
            return "A"
    
    
    if __name__ == '__main__':
        string = """
        玩家（AI悦创）的HP：[####################] 100%  100/100
        敌人（你，李凤兰）的HP：[####################] 100%  80/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide(string))
        string = """
        玩家（AI悦创）的HP：[###-----------------]  15%  15/100
        敌人（你，王帆）的HP：[#-------------------]   5%  4/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide(string))
        string = """
        玩家（AI悦创）的HP：[####################] 100%  100/100
        敌人（你，王帆）的HP：[#-------------------]   5%  4/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide(string))
    ```

    :::

4. **扩展实现 1**：自主选择使用本地（本机）模型（`Ollama_local_code.py`） or 本地服务器模型（`Ollama_api_code.py`）

    **启发点**：思考、观察本机模型或者 API 实现，本身只有一小部分代码不同，故而可以考虑是否可以把两份代码合并为同一份。

    ::: code-tabs

    @tab 基础版实现（至少要达到的水准）

    ```python {1,7-9,11-16}
    def llm_enemy_decide(model_choice: str, game_status_text: str) -> str:
        messages = [
            {"role": "system", "content": ENEMY_SYSTEM_PROMPT},
            {"role": "user", "content": game_status_text}
        ]
        try:
            if model_choice == "local":
                from ollama import chat
                resp = chat(model='gpt-oss:20b', messages=messages)
            else:
                from ollama import Client
                client = Client(
                    host='http://192.168.31.6:11434',
                    headers={'x-some-header': 'some-value'}
                )
                resp = client.chat(model='gpt-oss:20b', messages=messages)
            # ---snip---
        except Exception as e:
            # ---snip---
    ```

    @tab 基础完整代码

    ```python
    # -*- coding: utf-8 -*-
    # @Time    : 2025/11/13 15:41
    # @Author  : AI悦创
    # @FileName: OllamaPlusSL.py
    # @Software: PyCharm
    # @Blog    ：https://bornforthis.cn/
    # code is far away from bugs with the god animal protecting
    #    I love animals. They taste delicious.
    # from ollama import Client
    #
    # client = Client(
    #     host='http://192.168.3.17:11434',
    #     headers={'x-some-header': 'some-value'}
    # )
    
    # === ADDED: 大模型“敌人”系统提示词（只会返回 A 或 D） ===
    ENEMY_SYSTEM_PROMPT = """你是这个回合制战斗游戏中的“敌人AI”，只负责在每一回合选择【A】或【D】。
    请严格遵守：
    - 你只能输出一个大写字母：A 或 D（不要输出其它任何文字）。
    - 决策要基于当回合提供的状态信息做出理性选择。
    
    规则回顾（供你参考，不要复述）：
    1) 若玩家使用治疗（H），本回合敌人必定攻击（A），且敌人伤害翻倍（×2）。
    2) 当你的 HP < 40% 且玩家看起来会攻击时，更倾向于防御（D）。
    3) 当玩家防御（D）且你的 HP 不低时，更倾向于攻击（A）来消耗对手。
    4) 一般情况下倾向于进攻（A），但在自己低血或明显亏换血时可以选择防御（D）。
    """
    
    
    def llm_enemy_decide(model_choice: str, game_status_text: str) -> str:
        messages = [
            {"role": "system", "content": ENEMY_SYSTEM_PROMPT},
            {"role": "user", "content": game_status_text}
        ]
        try:
            if model_choice == "local":
                from ollama import chat
                resp = chat(model='gpt-oss:20b', messages=messages)
            else:
                from ollama import Client
                client = Client(
                    host='http://192.168.3.17:11434',
                    headers={'x-some-header': 'some-value'}
                )
                resp = client.chat(model='gpt-oss:20b', messages=messages)
            # resp = client.chat(model='gpt-oss:20b', messages=messages)
    
            content = resp['message']['content'].strip().upper()
            print(f"大模型的选择：{content}")  # 后期可以选择去掉
            # 规范化，仅允许 A/D；否则回退到 A
            if "A" in content and "D" in content:
                # 若模型不小心返回了“选A或D”，默认取 A
                return "A"
            if content.startswith("A"):
                return "A"
            if content.startswith("D"):
                return "D"
            return "A"  # 兜底
        except Exception as e:
            # 失败时兜底为倾向攻击
            print(f"[LLM 决策失败，使用兜底策略 A] 原因：{e}")
            return "A"
    
    
    if __name__ == '__main__':
        string = """
        玩家（AI悦创）的HP：[####################] 100%  100/100
        敌人（你，李凤兰）的HP：[####################] 100%  80/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide("api", string))
        string = """
        玩家（AI悦创）的HP：[###-----------------]  15%  15/100
        敌人（你，王帆）的HP：[#-------------------]   5%  4/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide("api", string))
        string = """
        玩家（AI悦创）的HP：[####################] 100%  100/100
        敌人（你，王帆）的HP：[#-------------------]   5%  4/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide("api", string))
    ```

    @tab 进阶版实现

    ```python {6,7,10-18}
    from ollama import chat
    
    # ---snip---
    
    
    def llm_enemy_decide(model_choice=None, game_status_text=''):
        global chat
        # ---snip---
        try:
            if model_choice == "remote":
                from ollama import Client
                client = Client(
                    host='http://192.168.3.17:11434',
                    headers={'x-some-header': 'some-value'}
                )
                chat = client.chat
            else:
                print('默认使用本地大模型！')
            resp = chat(model='gpt-oss:20b', messages=messages)
    
            # ---snip---
        except Exception as e:
            # ---snip---
    ```

    @tab 进阶版完整代码

    ```python
    # -*- coding: utf-8 -*-
    # @Time    : 2025/11/13 15:41
    # @Author  : AI悦创
    # @FileName: OllamaPlusSL.py
    # @Software: PyCharm
    # @Blog    ：https://bornforthis.cn/
    # code is far away from bugs with the god animal protecting
    #    I love animals. They taste delicious.
    from ollama import chat
    
    # === ADDED: 大模型“敌人”系统提示词（只会返回 A 或 D） ===
    ENEMY_SYSTEM_PROMPT = """你是这个回合制战斗游戏中的“敌人AI”，只负责在每一回合选择【A】或【D】。
    请严格遵守：
    - 你只能输出一个大写字母：A 或 D（不要输出其它任何文字）。
    - 决策要基于当回合提供的状态信息做出理性选择。
    
    规则回顾（供你参考，不要复述）：
    1) 若玩家使用治疗（H），本回合敌人必定攻击（A），且敌人伤害翻倍（×2）。
    2) 当你的 HP < 40% 且玩家看起来会攻击时，更倾向于防御（D）。
    3) 当玩家防御（D）且你的 HP 不低时，更倾向于攻击（A）来消耗对手。
    4) 一般情况下倾向于进攻（A），但在自己低血或明显亏换血时可以选择防御（D）。
    """
    
    
    def llm_enemy_decide(model_choice=None, game_status_text=''):
        global chat
        messages = [
            {"role": "system", "content": ENEMY_SYSTEM_PROMPT},
            {"role": "user", "content": game_status_text}
        ]
        try:
            if model_choice == "remote":
                from ollama import Client
                client = Client(
                    host='http://192.168.3.17:11434',
                    headers={'x-some-header': 'some-value'}
                )
                chat = client.chat
            else:
                print('默认使用本地大模型！')
            resp = chat(model='gpt-oss:20b', messages=messages)
    
            content = resp['message']['content'].strip().upper()
            print(f"大模型的选择：{content}")  # 后期可以选择去掉
            # 规范化，仅允许 A/D；否则回退到 A
            if "A" in content and "D" in content:
                # 若模型不小心返回了“选A或D”，默认取 A
                return "A"
            if content.startswith("A"):
                return "A"
            if content.startswith("D"):
                return "D"
            return "A"  # 兜底
        except Exception as e:
            # 失败时兜底为倾向攻击
            print(f"[LLM 决策失败，使用兜底策略 A] 原因：{e}")
            return "A"
    
    
    if __name__ == '__main__':
        string = """
        玩家（AI悦创）的HP：[####################] 100%  100/100
        敌人（你，李凤兰）的HP：[####################] 100%  80/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide('remote', string))
        string = """
        玩家（AI悦创）的HP：[###-----------------]  15%  15/100
        敌人（你，王帆）的HP：[#-------------------]   5%  4/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide('remote', string))
        string = """
        玩家（AI悦创）的HP：[####################] 100%  100/100
        敌人（你，王帆）的HP：[#-------------------]   5%  4/80
        玩家上一手的动作：A
        治疗代价是否生效（敌人攻击×2）：否
        请只返回 A 或 D。
        """
        print(llm_enemy_decide('remote', string))
    ```

    @tab 扩展：封装成函数

    ```python
    def get_chat(model_choice: str):
        if model_choice == "local":
            from ollama import chat
            return chat
    
        from ollama import Client
        client = Client(
            host='http://192.168.3.17:11434',
            headers={'x-some-header': 'some-value'}
        )
        return client.chat
    
    # 使用：
    chat = get_chat(model_choice)
    resp = chat(model='gpt-oss:20b', messages=messages)
    ```

    

    :::

5. **原本的游戏代码无需修改，只需要修改导入代码即可，因为函数同名。**

6. **扩展实现 2**：尝试实现，用户可以选择所要使用的模型（Ollama、LM Studio（预留）、DeepSeek）

    ::: code-tabs

    @tab 简略·粗糙实现

    ```python
    # 利用变量的覆盖特点（特性）
    import random
    from faker import Faker
    from DeepSeek.big_model import llm_enemy_decide
    from Ollama_models.Ollama_local_code import llm_enemy_decide
    from Ollama_models.Ollama_api_code import llm_enemy_decide
    # 最后面的导入，会覆盖前面已经导入的 llm_enemy_decide，覆盖的原因是都叫：llm_enemy_decide。
    # 缺点就是浪费性能，因为把不必要的也导入进来了。
    ```

    @tab 代码实现

    ```python
    import random
    from faker import Faker
    
    model_choice = input("您想要选择：本机还是在线对战？（请输入 OL、OR 或 LM）：").strip().upper()
    if model_choice == "OL":
        from Ollama_models.Ollama_local_code import llm_enemy_decide
    elif model_choice == "OR":
        from Ollama_models.Ollama_api_code import llm_enemy_decide
    elif model_choice == "LM":
        pass
    else:
        from DeepSeek.big_model import llm_enemy_decide  # DeepSeek API
    ```
    
    :::

##### 14.23.2.3 LM Studio 实现

1. **安装库**：软件、大模型自己安装和下载。

    ```python
    pip install lmstudio
    ```

2. **快速开始**：与大模型进行对话

    ```python
    import lmstudio as lms
    
    model = lms.llm("qwen/qwen3-4b-2507")
    result = model.respond("What is the meaning of life?")
    
    print(result)
    ```

3. **下载大模型**：如果没有下载上面代码的大模型是会报错的，可以使用下面的命令下载大模型：

    ```bash
    lms get qwen/qwen3-4b-2507
    ```

    国产的千问大模型强大到，会以为 LM Studio 是国内开发的。因为例子用的都是 qwen 大模型，可见 qwen 开源的影响力。

4. **局域网使用大模型**：

    ```python
    import lmstudio as lms
    SERVER_API_HOST = "localhost:1234"  # 默认端口 1234
    
    # This must be the *first* convenience API interaction (otherwise the SDK
    # implicitly creates a client that accesses the default server API host)
    lms.configure_default_client(SERVER_API_HOST)
    
    # Note: the dedicated configuration API was added in lmstudio-python 1.3.0
    # For compatibility with earlier SDK versions, it is still possible to use
    # lms.get_default_client(SERVER_API_HOST) to configure the default client
    ```

    **设置局域网 IP：**

    ![自己按图片的去配置即可！](https://blog.images.bornforthis.cn/docs-images/sha256/8c/8cedd3362f0e885a0a57af202b9654f6297fb1f423489beac7e27ec039836269.png)

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/70/70814aa2cd2531b4324266d2330d86a56665d2f120b72879c2815f0c51a0d8cc.png)

    ```python
    import lmstudio as lms
    SERVER_API_HOST = "http://192.168.3.17:19978"
    
    lms.configure_default_client(SERVER_API_HOST)
    ```

5. **测试局域网**：运行代码看是否局域网资源正常

    ```python
    import lmstudio as lms
    
    SERVER_API_HOST = "192.168.3.17:19978"
    
    lms.configure_default_client(SERVER_API_HOST)
    
    model = lms.llm("openai/gpt-oss-20b")
    result = model.respond("说出三种水果")
    print(result)
    
    # ---output---
    <|channel|>analysis<|message|>User asks in Chinese: "说出三种水果" meaning "Name three kinds of fruit." Provide answer.<|end|><|start|>assistant<|channel|>final<|message|>苹果、香蕉和葡萄。
    ```

6. **多轮对话实现**：

    ```python
    import lmstudio as lms
    
    SERVER_API_HOST = "192.168.3.17:19978"
    
    lms.configure_default_client(SERVER_API_HOST)
    
    model = lms.llm("openai/gpt-oss-20b")
    chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system
    
    while True:
        user_input = input("You (leave blank to exit): ")
    
        if not user_input:
            break
        chat.add_user_message(user_input)
        prediction = model.respond(
            chat,
            on_message=chat.append,  # 类似开关，把历史对话存储到 chat 当中
        )
        print("Bot: ", end="", flush=True)
        print(prediction)
        print()
    ```

7. **限制 token**：

    > ~~Ollama 是在软件层面进行 token 限制，LM Studio 是可以从代码层面进行设置。「待验证」~~

    ```python {19-21}
    import lmstudio as lms
    
    SERVER_API_HOST = "192.168.3.17:19978"
    
    lms.configure_default_client(SERVER_API_HOST)
    
    model = lms.llm("openai/gpt-oss-20b")
    chat = lms.Chat("You are a task focused AI assistant")  # 角色设定，system
    
    while True:
        user_input = input("You (leave blank to exit): ")
    
        if not user_input:
            break
        chat.add_user_message(user_input)
        prediction = model.respond(
            chat,
            on_message=chat.append,
            config={
                "maxTokens": 50,
            }
        )
        print("Bot: ", end="", flush=True)
        print(prediction)
        print()
    ```

    **LM Studio 不适合使用 token 限制，因为 LM Studio 的 token 会把思维链也包含在里面。**——🌶︎🐔

8. **简化 LM Studio 输出回复**：

    ::: tabs

    @tab 方法一：非流式

    ```python
    
    ```

    @tab 方法二：流式
    
    ```python
    ```
    
    
    
    :::



### 14.23 练习扩展

以上一步步实现了一个简单但完整的主角打怪文字游戏。

你可以尝试自己进一步完善：

- 添加输入错误时的处理。
- 加入更多互动，比如恢复血量道具、逃跑功能。
- 让敌人的攻击力随回合增加难度。

这样你就能进一步提升自己的编程能力。

恭喜你，完整的面向对象也已经学习完毕！






















