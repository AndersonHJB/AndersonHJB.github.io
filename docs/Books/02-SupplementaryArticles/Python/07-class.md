---
title: 07-类内容补充
icon: python
date: 2025-05-04 19:55:33
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

**任务**：我们有一只猫和一只狗，他们在听到指令后要向前跑 10 米。

我们来编写这两个函数：

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

相必你已经理解了上面的代码，接下来请你再添加一只动物：大象，也是听到指令后要向前跑 10 米。

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

敲完大象的代码后，你有没有感觉什么？如果你有什么感觉或者感受，马上拿支笔或者用电脑写注释，把感受写下来！

我们上面定义了三个相似的函数，功能一样，只有什么不一样？——变量名称不一样。

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
3. **结论3**：类里面每个函数都要加上 self 代表都属于类的一员。就如同家族族徽，代表都属于家族的一员。
4. **结论4**：有了 self 这个族徽，意味着家族的资源都可以互相使用。例如：家族的百万围棋棋盘，所有家族成员都可以直接使用。如果不是同一家族的，就得看情况了。所以，当类里面存在的变量，（包括各个函数的变量）如果在变量前面添加 self（`self.x`），则在类中，所有函数都可以随时调用变量 `self.x`。（后续会有代码演示）

#### 3.4.2 非正式讲解2

1. 换句话说，self 中文代表“自己”的意思，而 self 又存在于类 `Animal()` 当中。所以 “self 自己”就代表 `Animal()` 。
2. 又因为：`Animal()` 赋值给变量 dog（实例化），所以 dog 代表 `Animal()` 这个类。
3. 接着我们就可以推出：`self == Animal() == dog`，故而 `self.x` 等价于 `Animal().x` 接着等价于 `dog.x`。
4. 我们说 `Animal()` 的函数 `move()`，就可以写成 `Animal().move()` （中间的点“.”可以理解成“的”），有因为类 `Animal()` 赋值给 dog，所以可以得出：`dog.move()`。

通过上面两个非正式讲解，如果你全部理解的话，那么后续讲解 self 部分你不用细究和强迫读懂，直接速读即可。毕竟正式的表达不好理解，不过我还是得稍微写一下。

#### 3.4.3 注意

在类里面的函数，第一个参数都必须写 self！

![](https://blog.images.bornforthis.cn/docs-images/sha256/d8/d880ee7f57691930269fcba95c46a95635dbaee2a641b20981b5780e3a15e14b.png)



#### 3.4.4 正式讲解：什么是 self？（细读）

在 Python 中，当我们定义一个类的方法时，第一个参数通常命名为 **self**。这并不是 Python 的关键字，而是一种编程约定，用来表示当前实例对象。每当我们调用一个对象的方法时，Python 会自动将这个对象传递给方法中的第一个参数，这样我们就可以在方法内部访问该对象的属性和其他方法。

#### 3.4.5 为什么需要 self？（速度）

1. **明确指定对象实例**：在其他面向对象的语言（例如 Java 或 C++）中，通常会有一个隐式的 `this` 指针来代表当前对象。但在 Python 中，没有隐式传递对象引用的机制，而是需要程序员显式地声明并使用 **self**。这种方式让代码更加直观，所有对当前对象的引用都清晰可见。
2. **提高代码的可读性**：显式地使用 **self** 可以帮助初学者更好地理解：在调用方法时，方法内部究竟操作的是哪个对象。它提醒我们：方法内部所有对属性或其他方法的调用，实际上都是在操作当前实例的数据。
3. **方便方法调用**：因为 **self** 是显式的参数，Python 可以灵活地处理方法调用。你可以将方法绑定到不同的对象上，而不需要额外的内部机制来隐式传递对象引用，这在设计复杂程序时提供了更高的灵活性。

#### 3.4.6 生活中的例子：班级中的学生（选读）

想象一下，一个班级中有许多学生。每个学生都有自己的姓名、年龄和特点。如果老师想了解某个学生的信息，他会直接问那位学生：“你叫什么名字？”

- **学生的自我介绍：** 每个学生在回答问题时都会说“我叫李华”或者“我叫小明”。这里的“我”就相当于这个学生自己。
- **学生的独立性：** 即使班上有许多学生，每个学生都是独立的个体，他们各自有自己的名字和特性。在询问时，老师需要明确知道在说哪个学生的信息。

在 Python 中，**self** 就起到类似“我”的作用。当我们调用某个对象的方法时，self 会自动指向那个具体的对象实例，就像当你问某个学生“你叫什么名字？”时，他会用“我”来代表自己，从而给出正确的回答。

#### 3.4.7 self 的本质：方法的第一个参数（细读）

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

## 6. 类内部函数设置参数

### 6.1 设置单个函数

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

### 6.2 设置第二个参数

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



### 6.3 默认参数

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



### 6.4 小贴士

1. 类内部的函数（方法）可以定义多个参数，只需要按顺序写在 `self` 后面即可。

2. 调用方法时，也要按顺序传入对应的值。

3. 参数可以用来控制方法行为，使代码更灵活。
4. 类内部可以设置默认值，使参数变成可选。





## 7. 通过实例化对象，修改类的属性值

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

## 8. 类的私有属性

### 8.1 私有背景

前面我们讲了通过实例化可以直接修改类的属性值，这其实间接的也暴露出来安全隐患。举个生活中的例子：

想象一下，我们日常生活中的手机，里面保存着大量我们不愿意让别人轻易看到的信息，比如微信聊天记录、银行卡的密码、个人隐私照片等。你一定不希望别人随随便便就能访问这些内容，对吧？因此，我们会给手机设置密码、指纹或面容解锁，只有你自己才能够访问这些隐私信息。

同样的道理，在 Python 的类（class）中，也存在类似的情况——我们有时候需要保护类内部的一些数据，不希望从外部轻易被访问或修改。这时我们就会用到**私有属性**。



### 8.2 什么是私有属性？

~~在 Python 中，私有属性就是类里面只能被自己访问，不能直接从外部访问的属性。我们通过在属性名前加上两个下划线（`__`）来定义私有属性。~~

在 Python 中，我们用**私有属性**（以双下划线`__`开头的属性）保护类内部的重要数据。我们并不是希望别人完全访问不到这些数据，而是希望别人**通过类的方法来间接地访问或修改这些数据**，这样我们就能在方法中进行额外的逻辑控制，比如检查输入是否正确、记录访问日志等等。（白话：只能类里面只能自己访问，不能直接从外部访问的属性）



### 8.3 现实例子：手机密码与解锁

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

### 8.4 为什么要使用私有属性？

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



### 8.4 如何访问私有属性？

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



## 9. 类内部变量如何共用？

~~掌握了最基础的概念，其实我们已经能做很多很多的事情了。不过，在工程实践中，随着复杂度继续提升，你可能会想到一些问题：如何在一个类中定义一些常量，每个对象都可以方便访问这些常量而不用重新构造？~~

掌握了最基础的概念，其实我们已经能做很多很多的事情了。不过随着项目复杂度不断提高，你可能会逐渐意识到：在类中，有时我们需要定义一些固定不变的变量，比如常量。这些常量每个对象都会用到，我们是不是需要每次创建对象时都重复构造一次呢？

其实，并不需要这样麻烦。只要在类的内部合适的位置定义好，就能实现类内变量的共用。

接下来我们就一步一步地学习这个知识点。

### 9.1 类中的常量（类变量）

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

### 9.2 设计思想（注意点）

我强调一下这部分讲解的逻辑，这很重要。为了让你的思路跟着本书走，如同跟我上课一般：

1. **第一步**：先讲解没有类的情况下，各个独立函数之间变量无法互相使用；（小标题：函数之间的局部变量为何不能共用？）
2. **第二步**：了解到普通函数之间的局部变量无法互相使用，初步的解决方案是使用全局变量；（小标题：全局变量的共用情况）
3. **第三步**：说明使用全局变量的缺点，接着正式引入类的实例变量；（小标题：类内部变量各个函数随意调用的情况（实例变量））
4. **核心思想**：没有对比，就没有伤害。我要制造对比，让你更好的理解类存在的意义。（小标题：全局变量 Vs. 类实例变量）

### 9.3 函数之间的局部变量为何不能共用？

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

### 9.4 全局变量的共用情况

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

### 9.5 类内部变量各个函数随意调用的情况（实例变量）

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



### 9.6 全局变量 Vs. 类实例变量

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

### 9.7 小结与回顾

| 变量类型 | 定义位置                   | 作用域                 | 举个生活中的例子               |
| -------- | -------------------------- | ---------------------- | ------------------------------ |
| 局部变量 | 函数内部                   | 本函数内有效           | 自己的私人用品，别人不能随意拿 |
| 全局变量 | 函数外部                   | 所有函数都有效         | 公共的物品，比如图书馆的书     |
| 类变量   | 类的内部，方法之外         | 类内所有对象都有效     | 社团共有的口号                 |
| 实例变量 | 类的方法内，通过`self`定义 | 单个对象内所有方法有效 | 家庭内部共享的冰箱             |



## 10. 类内部函数互相调用

学完类内部的变量共享后，现在我们再来看一个有趣的问题：类中不同的函数（我们通常称为**方法**）能不能互相调用呢？答案当然是可以的。

想象一下你家里准备做晚饭：

- 妈妈负责准备食材；
- 爸爸负责烹饪；
- 孩子负责摆放餐桌。

假如爸爸要做饭，是不是需要先让妈妈把食材准备好，再继续自己的任务呢？这里爸爸的任务就需要调用妈妈的任务。这种在生活中很自然的流程，在 Python 的类里面同样适用——类内的方法经常需要相互调用。

接下来，我们就详细地看一个例子。

### 10.1 第一步：定义多个方法

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

### 10.2 第二步：方法之间如何调用？

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

### 10.3 总结与回顾

在 Python 类中，方法之间是可以自由调用的，调用方法的关键点：

- 类内部的方法互相调用，必须加前缀 `self.`。
- 方法调用的逻辑流程类似生活中任务的协作，一个任务依赖于另一个任务的完成。

| 类内方法调用示例  | 等价生活场景举例                     |
| ----------------- | ------------------------------------ |
| `self.method_b()` | 爸爸（方法A）让妈妈（方法B）准备食材 |

通过掌握这种方法调用的技巧，你可以更好地设计出逻辑更清晰、结构更合理的类，从而写出更加高效且容易维护的程序。



## 11. 继承，是每个富二代的梦想「选学」

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

## 12. 文字对话游戏实战

学到这里，你已经掌握了不少关于类和方法的基础知识，但我们更需要在实际项目中真正感受一下这些知识到底该如何应用。

接下来，我们就来手把手做一个简单却有趣的小项目。

### 12.1 游戏名称：主角打怪-文字游戏

这个小游戏会有下面几个特性：

1. 游戏中有一个玩家 (**Player**) 和一个敌人 (**Enemy**)；
2. 玩家与敌人会互相攻击对方；
3. 玩家每轮可以选择攻击或防守；
4. 如果玩家选择防守，则敌人攻击造成的伤害减至原来的十分之一；（玩家防守，敌人肯定是会攻击的）
5. 攻击数值随机生成（使用 `random` 模块）。

准备好了吗？我们就一步步来实现它吧！等等，你现在需要倒扣书籍，闭眼敲代码。给自己足够的时间，独立编写这个类项目。等实在编写不出来或者写出来了（我希望你最好是后者），然后接着阅读我的。

### 12.2 第一步：明确游戏中的角色与动作

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

### 12.3 第二步：定义生物类 Creature

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

### 12.4 第三步：实例化玩家和敌人

上面我们类创建好了之后，我接下来就需要实例化了，也就是创建具体的对象：

```python
player = Creature()
enemy = Creature()
```

### 12.5 第四步：添加游戏持续进行的循环

游戏是不是需要持续运行，并且思考一下持续运行的条件是什么？——玩家或敌人有没有死亡的。

所以，游戏需要实现：判断用户和敌人的状态，也就是活着还是死了(玩家或者敌人)。并且是不停的判断，那这个时候需要什么呢？很明显是需要一个 `while` 循环在这里的。我们定义一个 `not_dead()` 函数来判断：

```python
while player.not_dead() and enemy.not_dead():
    pass
```

但此时，我们发现 `Creature` 类里还没有定义生命值和状态判断的功能，接下来我们要实现它。

### 12.6 第五步：初始化生命值 (构造函数`__init__`)

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

### 12.7 第六步：判断是否活着 (`not_dead`方法)

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

### 12.8 第七步：添加用户输入，实现游戏交互

又因为我们的游戏是用户的输入来获取操作，所以需要在 while 循环中添加用户输入。

```python
while player.not_dead() and enemy.not_dead():
    user_input = input("Attack or Defence(A/D):")

    if user_input == "A":
        player_attack_value = player.attack()
        enemy_attack_value = enemy.attack()
```

**小贴士**：这里我就写的简单点，就不判断用户输入的是否符合规则，我们这里就先默认用户输入是对的，课后自行添加！

### 12.9 第八步：实现生命值减少的规则（`being_attack` 方法）

那现在我们获取到了玩家的攻击值和敌人的攻击值，我们就需要来减少生命值。

所以，接下来我们编写一个 `being_attack()` 生命值减少的规则：

```python
enemy.being_attack(player_attack_value)
player.being_attack(enemy_attack_value)
```

#### 12.9.1 学习提示（学的是思维，是逻辑！）

在编写 `being_attack` 函数之前，我想问问你：到这一步你有没有感觉到什么？——我所有的函数都是需要的时候才会去创建，而不是像传统学校、机构那样，直接从 import 开始写。然后接着写 class，把全部 class 写完。再接着写主循环，这个流程对吗？

不对！绝对不对！或许按上面的流程来编写代码，你也可以理解每个代码的含义。但你也失去了学习真实开发场景中的开发流程、思考流程、逻辑训练的机会，为什么这么说？——真实场景中我们可以直接知道用什么导入，直接知道完整的 class 编写？直接知道完整的 while 编写？

肯定不是的，那只是学校老师备课的最后结果。恰恰是那个备课过程，是你们需要学习的！

我现在所带给你的，是真实的开发流程的 demo。一步步带你编写，当我们需要 attack 函数，我们才会编写攻击函数。当我们需要初始化生命值时，我们才会编写 init 初始化生命值。每一步的思考和选择，我都尽可能编写清楚给你。

故而，你在写的时候。一定要按照我的步骤一步步编写代码，好好感受这个过程！

#### 12.9.2 being_attack 函数实现

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

### 12.10 第九步：实现防守时伤害降低的功能

接下来，我们要编写的是，当用户输入防守的时候操作（也就是：玩家选择防守时）。那就只剩下敌人的攻击值，玩家受到的攻击值减少十分之一：

```python
elif user_input == "D":
    enemy_attack_value = enemy.attack() * 0.1
    player.being_attack(enemy_attack_value)
```

### 12.11 阶段一测试

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

### 12.12 第十步：实时显示双方的状态 (`show_status`方法)

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

### 12.13 阶段二测试

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





### 12.14 第十一步：区分敌人和玩家，添加名字功能

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

### 12.15 第十二步：判断最终的胜负结果

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

### 12.16 完整的程序整合与回顾

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

### 12.17 练习扩展

以上一步步实现了一个简单但完整的主角打怪文字游戏。

你可以尝试自己进一步完善：

- 添加输入错误时的处理。
- 加入更多互动，比如恢复血量道具、逃跑功能。
- 让敌人的攻击力随回合增加难度。

这样你就能进一步提升自己的编程能力。

恭喜你，完整的面向对象也已经学习完毕！