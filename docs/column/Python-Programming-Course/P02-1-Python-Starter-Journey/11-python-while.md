---
title: 11-while 循环
icon: yongyan
date: 2024-05-08 12:28:11
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

~~前面我们讲解了 if 条件判断，但是不论如何实现，允许用户输入错误的次数是有限的。~~

~~前面我们已经学习了如何使用 if 条件判断来检查用户输入的内容是否符合要求。但是，我们通常需要考虑一种情况：用户并不一定会每次都输入正确的信息。如果用户输错了，应该怎么办呢？~~

在前面的章节中，我们已经介绍了如何使用 if 条件语句来判断用户输入。但是在实际应用中，我们常常需要容许用户有多次尝试的机会，因为“人无完人”，错误输入在所难免。~~用户并不一定会每次都输入正确的信息~~并不能保证用户每一次都能输入正确的信息，如果用户输错了，应该怎么办呢？

接下来，我们将通过实例讲解如何对用户输入进行判断，以及如何利用 while 循环不断获取正确的输入。

## 1. 检查用户输入

首先，回顾下面这个程序：

```python
user_gender = input("请输入您的性别(F/M):")

if user_gender == "F":
    print("你是萌妹子")
elif user_gender == "M":
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
```

你认为上面这个程序，允许用户输错几次呢？好好思考一下，再回答，回答之后再继续阅读。

显然，这个程序只有一次机会。一旦输错，就无法挽回了。比如输成 `male` 或者 `girl` ，程序只会提示错误，然后就结束了。

但是是人，总有犯错的时候，用户在这唯一一次输入错误怎么办？这不仅对用户体验不友好，也是我们程序设计的缺陷。

所以上面这种： **当用户没有正确输入时，如何重新获取用户输入。** 这是我们现在要解决的。这时有些学生会想着在 else 里面，嵌套一组判断。那么代码会变成如下：

```python {9-16}
user_gender = input("请输入您的性别(F/M):")

if user_gender == "F":
    print("你是萌妹子")
elif user_gender == "M":
    print("你是糙汉子")
else:
    print("输入不正确，请输入 F 或 M")
    user_gender = input("请输入您的性别(F/M):")

    if user_gender == "F":
        print("你是萌妹子")
    elif user_gender == "M":
        print("你是糙汉子")
    else:
        print("输入不正确，请输入 F 或 M")
```

但问题来了，如果用户又输入错了怎么办？如果用户连续输错三次、五次甚至更多次呢？显然这种嵌套的写法是不现实的，程序不仅会变得非常复杂、难以维护。并且代码就像楼梯一样，越来越多。并且在不知道用户会输入错几次情况下，你这个楼梯要做多少级台阶呢？一图胜千言，看下图体会：

![](https://blog.images.bornforthis.cn/docs-images/sha256/31/314081851192f16f2af02cadfffcab85e4c5e11588bf34460d3cc60a2d7e6c6d.png)



通过上图，是不是很像楼梯。所以，if 嵌套的方法虽然可以增加用户的试错次数。但是不能根本解决，我们需要一种更优雅的解决方案：循环。

## 2. 使用 while 循环解决用户输入问题

### 2.0 `while` 循环：当……就一直循环！

在编程中，有时候我们需要反复做某件事，直到某个条件不再满足为止。这个时候，`while` 循环就能派上用场了！

基本语法如下：

```python
while 条件表达式:
    循环体（缩进的代码块）
```

1. **`条件表达式`**：每次循环开始前都会检查这个条件。如果它是 `True`，就执行一次循环体；如果是 `False`，就结束循环。

2. **`循环体`**：当条件满足时要重复执行的代码。
3. **注意**：循环体必须缩进！

### 2.1 使用 while 循环解决

`while` 循环可以解决我们前面提出的问题。当条件成立（True）时，它会不断重复执行循环内的代码，直到条件变成不成立（False）时，才停止。

以下是一个改进版的程序，使用了 while 循环：

```python
user_answer_correct = False

while not user_answer_correct:
    user_gender = input("请输入您的性别 (F/M): ")
    if user_gender == 'F':
        print("你是萌妹子")
        user_answer_correct = True
    elif user_gender == 'M':
        print("你是糙汉子")
        user_answer_correct = True
    else:
        print("输入不正确，请输入正确的性别 (F/M)")
```

在这个示例里，程序会不断询问用户的性别，只要还没有得到正确的 `F` 或 `M`，就继续询问；一旦用户正确输入，就会把 `user_answer_correct` 设为 `True`，然后跳出循环。用到的关键点是：`while` 循环只要它后面的条件成立（`True`），就会一直执行循环体内的语句；当条件变为 `False` 时才停止循环。

### 2.2 常见问题探讨

查看下面代码，思考下面几个问题：

```python
user_answer_correct = False

while not user_answer_correct:
    user_gender = input("请输入您的性别 (F/M): ")
    if user_gender == 'F':
        print("你是萌妹子")
        user_answer_correct = True
    elif user_gender == 'M':
        print("你是糙汉子")
        user_answer_correct = True
    else:
        print("输入不正确，请输入正确的性别 (F/M)")
```

根据上面的代码回答下面的问题：

- **Question 1**：上面程序中，while 循环的终止条件是什么？（也就是：程序什么时候停止，停止的依据是什么？）
- **Question 2**：为什么一开始需要一个单独的变量 `user_answer_correct` 来实现 while 循环的条件呢？直接用 `while True` 不行吗？~~（直接 while 条件不行吗）~~
- **Question 3**：为什么变量 `user_answer_correct` 一开始赋值为 False 而不是直接 True 呢？也就是：为什么要多此一举使用 not 当中间人转换呢？

#### 2.2.1 Question 1：程序何时终止？

1. **从代码层面或语法层面**：

    while 后面的条件变成 False 才可以，结合代码具体来看看。在代码 `while not user_answer_correct` 中，当 `not user_answer_correct == False` 时，也就是 `user_answer_correct == True`，循环才会停止。

2. **从逻辑层面**：

    程序应该在用户正确输入 F 或 M 的时候才结束，因为当用户输入 `F` 或 `M` 时，条件判断成立。设置 `user_answer_correct = True`，当再次执行 `not user_answer_correct` 时得到 False 因此跳出循环。

1. ~~从代码层面上或者说语法层面上：while 后面的条件变成 False 才可以~~

- ~~从逻辑上讲：程序应该在用户正确输入 F 或 M 的时候才结束；~~

#### 2.2.2 Question 2：为什么要引入变量 user_answer_correct？

~~你可能会问：为什么需要使用额外的变量 `user_answer_correct`？为什么不直接使用 `while True` 呢？~~

你可能会问：为什么需要专门引入一个变量 `user_answer_correct` 来控制循环？直接使用 `while True` 难道不好吗？

~~你可能会问：为什么要多此一举，专门引入一个变量 `user_answer_correct` 来控制循环？直接使用 `while True` 难道不好吗？~~

确实，直接使用 `while True` 也可以。不过我们可以先想想，如果没有 `user_answer_correct` 变量，那程序会变成什么？

~~你可以先试一试，然后看看我是怎么写的。~~

没有额外的变量存在一个问题：如何明确告诉程序什么时候停止循环？没有变量 `user_answer_correct` 会有两种写法。

**写法一**：依然写成使用 not 的条件

```python
while not False:
    user_gender = input("请输入您的性别 (F/M): ")
    if user_gender == 'F':
        print("你是萌妹子学生")
    elif user_gender == 'M':
        print("你是糙汉子")
    else:
        print("输入不正确，请输入正确的性别 (F/M)")
```

**写法二**：直接不使用 not，直接写条件

```python
while True:
    user_gender = input("请输入您的性别 (F/M): ")
    if user_gender == 'F':
        print("你是萌妹子学生")
    elif user_gender == 'M':
        print("你是糙汉子")
    else:
        print("输入不正确，请输入正确的性别 (F/M)")
```

上面的代码有什么问题呢？——不论是写法一，还是写法二。我们都无法改变 while 循环条件，两个循环条件恒为 True。当用户输入 F 或 M 时，我们没办法改变 while 循环的条件，所以程序也不知道要停止循环。也可以理解成：程序被我们写成了死循环。为什么说没有办法改变循环的条件呢？

~~上面两个代码的问题在于：循环条件始终是恒定不变的 True，没有办法在程序运行过程中动态地去修改它。因此，即使用户输入了正确的值（比如输入了F或M），程序也不知道要停止循环，导致循环永远进行下去（死循环）。~~

在程序运行时，你有什么方法去指代循环后面那个条件吗？没有办法，就如同你要和木匠指出木雕的一个位置的瑕疵。你会怎么指出？看看我下面的例子：

你告诉一位木匠他的木雕作品中有个瑕疵。如果你只是说“这儿不对”，木匠根本不知道你指的是哪里。但是，如果你明确地指出：“师傅，这只龙的木雕，在龙尾第三个凸起处多了一条线”，木匠就能马上明白并修改。

~~——你会说：师傅，这只龙的木雕有个小瑕疵，在龙尾巴的第三凸起部分，多凸出了一条线。感觉到了吗？你需要有名称去指向它，师傅才能理解和去修改。~~

~~在代码中也是如此，有一个变量代指的话，就可以直接修改变量的值即可。例如：变量 `user_answer_correct` 原本的是 False，那么我们就可以指定赋值来覆盖更新变量为 True：`user_answer_correct = True`。~~

在程序里也是一样，引入一个变量相当于给循环条件起了个名字，你可以很容易地修改这个变量的值，从而控制循环是否继续。例如，最开始设置变量为 `user_answer_correct = False`，当用户输入正确时，我们就更新它为 `user_answer_correct = True`，循环的条件就从 True 变成了 False，程序自然就会停止。（其实就是本书在讲变量时，已经提过变量的更新其实也是：覆盖）

**说明**：以防读者看不懂，这句：循环的条件就从 True 变成了 False。要注意，变量 `user_answer_correct = False` 初始化为 False，但是在 while 循环时用 `not user_answer_correct` 所以得到了条件为 True。当更新变量为 True 时，`not user_answer_correct` 就得到了 False。这就说明为什么一开始设置 `user_answer_correct = False`、更新变量  `user_answer_correct = True` 说的：循环的条件就从 True 变成了 False。

~~我们不知道如何改变 while 循环的条件，所以有一个变量代指的话，就可以直接修改变量的值即可。~~

#### 2.2.3 Question 3：为什么变量初始值是 False 而非 True？

我们可以把变量直接赋值为 True 后，一起来看看。可以看出下面的代码和之前功能上是一模一样的，但为什么要多此一举呢？

```python
user_answer_correct = True
while user_answer_correct:
    user_gender = input("请输入您的性别 (F/M): ")
    if user_gender == 'F':
        print("你是萌妹子学生")
        user_answer_correct = False
    elif user_gender == 'M':
        print("你是糙汉子")
        user_answer_correct = False
    else:
        print("输入不正确，请输入正确的性别 (F/M)")
```

~~逻辑问题，如果一开始条件为 True 的话，那么循环内部就要改成 `user_answer_correct = False` 用来结束循环，但这样显然不符合逻辑。明明用户输入了 F 或 M，但紧接着出现 ` user_answer_correct = False ` 。在语义上会显得很奇怪：明明用户输入对了，却设置成“错误状态”。~~

逻辑问题，如果一开始条件为 True 的话，那么循环内部就要改成 `user_answer_correct = False` 用来结束循环，但这样显然不符合逻辑。明明用户输入了 F 或 M，却出现了 ` user_answer_correct = False ` 。这在语义上会显得很奇怪：明明用户输入对了，却设置成“错误状态”。

为了让你理解，我举个例子：你在一家公司上班，你每次做完任务都要提交给你的直属领导查阅。领导说：小悦我这个人有点不一样的癖好，就是：

1. 你工作完成了，我会说 False。你工作没完成，我会说 True。
2. 但是你要理解我说 False 的时候，其实就是 True 的意思。我说 True 的时候，其实就是 False 的意思。

此时，你工作明明完成了。但是领导跟你说 False，你会有什么感觉？——有病，是不是！就是有病，突兀的很。逻辑就不顺，能正常不正常。

说是这么说，但当领导这么说时，你自己做了什么**处理**？领导给你 False，你要转换成 True。领导给你 True，你要转换成 False。你这个行为映射在代码中如何实现？——使用 not 即可，因为 not 可以反转布尔对象。

因此更合理的逻辑是：**一开始假设用户输入还没正确（False）**，直到用户真的输入正确才切换为 `True`，从而退出循环。

具体的实现策略则是：使用 `not` 做转换。初始为 `False`，循环条件为 `not False`（也就是 True），用户输入正确后，将变量改为 `True`，这时循环条件 `not True` 变为 False，循环结束，逻辑上更清晰。

最终得出如下代码，也就是最初的代码：

```python
user_answer_correct = False

while not user_answer_correct:
    user_gender = input("请输入您的性别 (F/M): ")
    if user_gender == 'F':
        print("你是萌妹子")
        user_answer_correct = True
    elif user_gender == 'M':
        print("你是糙汉子")
        user_answer_correct = True
    else:
        print("输入不正确，请输入正确的性别 (F/M)")
```

### 2.3 小结

- `while` 循环是用来重复执行一段代码，直到某个条件不再满足。
- 为了更容易控制循环，通常会引入一个专门的变量作为循环条件。
- 使用循环可以解决用户多次输错的场景，提升程序的用户体验。

## 3. while 循环中存在的逆向思维

### 3.1 代码示例

理解一下下面这个简单的 while 循环代码：

```python
i = 1

while i < 10:
    print(i)
    i = i + 1
```

你看见了上面的代码，现在回答这个问题：while 循环当满足条件时一直执行里面的代码块，**上面代码输出的结果是什么呢？** 不要运行，自己用大脑思考一下。

### 3.2 常规思考（大多数人惯用的正向思考方法）

你有可能就会这样思考：

1. **第一步**：while 循环先判断 `i < 10`，i 初始值为 1，那么 1 小于 10，循环条件成立。执行 `print(i)`，输出：1。并接着 i 执行 +1 操作，得到 `i = 2`。
2. **第二步**：现在 `i = 2`，2 小于 10，循环条件成立。执行 `print(i)`，输出：2。并接着 i 执行 +1 操作，得到 `i = 3`。
3. **第三步**：现在 `i = 3`，3 小于 10，循环条件成立。执行 `print(i)`，输出：3。并接着 i 执行 +1 操作，得到 `i = 4`。
4. **第四步**：现在 `i = 4`，4 小于 10，循环条件成立。执行 `print(i)`，输出：4。并接着 i 执行 +1 操作，得到 `i = 5`。
5. **第五步**：现在 `i = 5`，5 小于 10，循环条件成立。执行 `print(i)`，输出：5。并接着 i 执行 +1 操作，得到 `i = 6`。
6. **第六步**：现在 `i = 6`，6 小于 10，循环条件成立。执行 `print(i)`，输出：6。并接着 i 执行 +1 操作，得到 `i = 7`。
7. **第七步**：现在 `i = 7`，7 小于 10，循环条件成立。执行 `print(i)`，输出：7。并接着 i 执行 +1 操作，得到 `i = 8`。
8. **第八步**：现在 `i = 8`，8 小于 10，循环条件成立。执行 `print(i)`，输出：8。并接着 i 执行 +1 操作，得到 `i = 9`。
9. **第九步**：现在 `i = 9`，9 小于 10，循环条件成立。执行 `print(i)`，输出：9。并接着 i 执行 +1 操作，得到 `i = 10`。
10. **第十步**：现在 `i = 10`，10 小于 10 吗？循环条件不成立，循环结束。
11. **第十一步**：汇总输出：1、2、3、4、5、6、7、8、9。

上面是不是很长，我在演你呢！你是不是会这样思考，并且就算你按上面那样思考的顺序思考，你还得实时记住当前输出的值（结果）。此时，要是你临时记忆不是很好，甚至还需要一边记一边思考，大脑前额叶还有点略微着急。

如果你会像我上面描述的那样，那我接下来要讲的思维逻辑，你要认真看。有时候你和学习快的、理解能力好的差的不一定是智商，是思维方式！就算你用的是我下面的方法，或者没有说上面描述的那些情况，也希望你认真感受这个过程。要去悟，这个感受很重要！

稍微总结一下，上面思考过程虽然直观，但是存在的问题：

1. 每一步都需要记住前面的状态。

2. 思考时容易遗忘，特别是代码复杂时，很容易出错。

3. 思考效率相对较低，过程繁琐。

### 3.3 更推荐的方法（不是比你聪明，而是方法更好）

~~既然我们已经知道循环条件：`i < 10`，那么什么时候此条件不成立？——`10 < 10` 吗？10 不小于 10，得到 False。那么当 `i = 10` 时，表达式 `i = i + 1` 就可以写成：`10 = i + 1` ，我们可以计算得出 `i = 9`。故而我们可以推理出输出结果：1-duo9。~~

换一个角度，我们从循环的结束条件开始思考：

1. 我们知道循环条件是 `i < 10`，那么循环会在什么时候结束呢？

2. 显然，当循环条件不满足时，循环会结束，也就是当 `i >= 10` 时循环停止。

3. 第一次满足这个停止条件的值是 `10`，也就是说当 `i = 10` 时循环刚好结束。

4. 而每次循环结束时，我们的变量 `i` 都会自增 1 才进入下一轮循环，这意味着在循环最后一次正常执行循环体时，`i` 一定是 `9`，因为执行完后 i 才变成 10。（具体计算：当 `i = 10` 时，表达式 `i = i + 1` 就可以写成：`10 = i + 1` ，我们可以计算得出 `i = 9`。）
5. 那么最初从 1 到 9 依次满足条件，逐步输出。

通过这个简单的逻辑推理，我们迅速明确了循环输出的范围：从初始值 `1` 到结束前的最后一个有效值 `9`。这种逆向思维的优势非常明显：

1. 不需要逐步跟踪每个循环步骤。

2. 思考更加轻松简单。

3. 不容易遗漏或犯错。

怎么样速度快吧，这就是要从结果、边界上去倒推的好处。

上面只是要写成书才需要写这么多字，要是在上课或者视频当中，只需要不到 30s 的时间就可以带你顿悟。好好感受和思考！

### 3.4 小结与思考

同学们要知道，一个好的编程思维方式，能够极大提高学习效率和减少出错。事实上，并不是那些快速学会编程的人智商更高，而是他们的思维方式更有效。

希望你能从这个简单的例子开始，逐渐培养自己从结果反向推导的能力，并将这种高效的逆向思维运用到更多、更复杂的编程任务中去。





## 4. while 循环求和

### 4.1 基础实现

使用 while 循环实现计算 0～100 的和，你会如何实现？不用继续阅读，你可以直接开始尝试了。

**注意**：这里不考察你高斯求和公式，不要考虑用公式实现。我们是为了练习循环和需要注意循环代码编写的一些细节。

#### 4.1.1 第一步：想方法生产出 0～100 这些数字；

你可能会这样写：

```python
num = 0
while num < 100:
    num += 1
    print(num)
```

上面这样写代码对吗？有点不太对。~~`num += 1` 需要在使用之后，也就是 `print(num)` 之后。如果在使用之前进行 `+1`，会跳过 num 初始化的值 0。所以需要先使用，然后再进行 +1 操作~~

`num += 1` 在 `print(num)` 之前执行，这样实际上跳过了数字 `0`，直接从 `1` 开始打印，虽然最后的数字到达 `100`。或许你觉得跳过 0 没什么，但是要注意：这个地方如果未来不是 0，是一个很重要的起始值呢？要包含在最后求和的总数当中呢？也有可能是某些重要操作的依赖呢？（后面单独举个代码示例讲解）

我们原本希望输出从 0 到 100 的全部数字，但实际输出结果如下：

```python
1
2
3
...
100
```

这里并没有打印出数字 0，因为第一次执行循环时，`num` 从 0 直接增加到了 1，打印的第一个数字就变成了 1。这就是为什么我们需要仔细考虑增量语句（`num + 1`）的位置。

正确的做法是先打印数字，再进行加一操作，或者调整循环条件。

```python
num = 0
while num < 100:
    print(num)
    num += 1
```

现在上面的代码无法输出到 100，那么我们给判断条件的部分取个“等于”。

```python
num = 0
while num <= 100:
    print(num)
    num += 1
```

到目前为止，所有问题解决。

#### 4.1.2 第二步：模拟现实中计算求和的方式

~~**第二步**：在实际生活中，你会如何计算？你会把每一次的计算结果存储到你大脑的某个位置。比如：0 + 1 = 1，1 + 2 = 3，3 + 3 = 6，你认真思考思考，你原本潜意识当中是不是把 1、3、6……这些结果存储在你大脑的某个位置了？所以计算机也是一样的，你需要把求和的过程中每次计算结果存储下来。~~

在现实生活中，当你要计算 `0+1+2+...+100` 时，你会怎么做？通常，我们都会将每次的中间结果临时存储在脑海中的某的地方，这个过程是潜意识的。比如：

- 第一次计算：`0 + 1 = 1`，记住 1
- 第二次计算：`1 + 2 = 3`，记住 3
- 第三次计算：`3 + 3 = 6`，记住 6

你看，每次我们都会将当前计算结果保存下来，供下一步计算使用。计算机也一样，下面的代码演示了这个过程：

```python
i = 0            # 当前要加的数字，从 0 开始
total = 0        # 存储每次相加后的结果

while i <= 100:
    total += i   # 将 i 的值加入 total
    i += 1       # 准备下一个数字

print("0 到 100 的整数之和是：", total)
```

这样，我们通过清晰的步骤，实现了使用 `while` 循环计算 0～100 的整数之和。



### 4.2 拓展练习：求 0 到任意整数的和

~~获取用户输入一个整数 n，计算 0～n 之和~~

学会基础实现后，我们再拓展一下。如何计算 0 到用户输入的任意整数 `n` 的和呢？

代码如下：

```python
# 从用户获取一个整数 n
n = int(input("请输入一个整数 n: "))

i = 0            # 从 0 开始累加
total = 0        # 用于保存累加的结果

# 循环直到 i 超过 n
while i <= n:
    total += i   # 每次把当前的 i 累加到 total 上
    i += 1       # 移动到下一个数字

print(f"从 0 到 {n} 的整数之和是：{total}")
```

运行上述代码，你就能轻松计算出任意范围内整数的和了。

通过以上两个示例，你已经掌握了如何运用 `while` 循环结构来实现求和的基础逻辑和拓展应用，现在赶紧动手实践一下吧！

::: tip 补充：为什么 i 的初始值要为 0？为什么 total 要初始化在 while 循环外面为 0？

- 日期：2025 年 11 月 3 日 09:12:09 
- 澳洲 辛同学

- **解答一**：为什么 `i` 的初始值要为 `0`？

    - 如果 `i` 不初始化，`i` 该如何创建呢？所以变量 i 是必须要创建的；
    - 那为什么初始化的值要为 `0` 呢？原因很简单：我们要实现的是求总和，而对于数值总和而言，`0` 是对结果没有任何影响的；

- **解答二**：为什么 `total` 要初始化在 `while` 循环外面为 `0`？

    - total 初始化是为了存储每次循环累加的结果，故而需要创建 `total` 变量来存储；

    - 如果 `total` 变量创建在 `while` 循环内，会出现什么问题？

        ```python
        n = int(input("请输入一个整数 n: "))
        
        i = 0
        total = 0
        
        while i <= n:
            total = 0
            total += i
            i += 1
        
        print(f"从 0 到 {n} 的整数之和是：{total}")
        ```

    - 意味着：`total` 变量无法持续存储每次的总值，而会被每次循环重新创建为 `0`；

:::

## 5. 起始值的重要性

前面我们提到的起始值非常重要。如果我们现在不再是从 0 开始，而是从一个更重要的数值（比如业务中的关键参数）开始，并且这个值必须要包含在计算的结果中，那你就不能先进行 `num += 1` 操作了。

下面几个例子说明起始值可能的重要性：

### 5.1 例子 1：进一步求和

例如，假设我们要计算从起始值 50 到 100 的和，这个起始值 50 是非常重要的，必须要被包含在结果内。

如果一开始就把次数 +1 放在求和操作之前，会出现什么问题？

```python
start = 50       # 起始值，从 50 开始
total = 0        # 保存累加结果

num = start
while num <= 100:
    num += 1
    total += num    

print(f"从 {start} 到 100 的整数之和是：{total}")
```

运行后输出如下结果：

```python
从 50 到 100 的整数之和是：3876
```

待会统一分析，正确的代码实现应该是这样的：

```python
start = 50       # 起始值，从 50 开始
total = 0        # 保存累加结果

num = start
while num <= 100:
    total += num  # 必须首先使用起始值
    num += 1      # 然后才对 num 进行递增

print(f"从 {start} 到 100 的整数之和是：{total}")
```

输出如下结果：

```python
从 50 到 100 的整数之和是：3825
```

在第一个代码块中，循环体内先执行了 `num += 1`，这导致了两个主要变化：

1. **起始值跳过**：第一次循环时，`num` 从 50 变成 51，然后将 51 加入总和，因而初始的 50 没有被累加。
2. **多加了一个数**：当 `num` 达到 100 时，循环内先将其增加到 101，再将 101 加入总和，因而最终累加的数列是 51 到 101，而不是 50 到 100。
3. 并且因为 `num += 1` 的提前，导致在循环内得到的 101 没有经过循环的判断。

因此，第一个代码块累加的是 51 到 101 的整数，其总和比第二个代码块（累加 50 到 100）的总和多了 $101 - 50 = 51$ 。

简单来说，就是因为递增操作的位置不同导致了累加的区间不同，最终结果也不同。在未来操作时一定要注意 +1 的位置。



### 5.2 例子 2：业务上的关键初始值

下面这个例子，和例子一很像。但是我在写的时候感觉，例子1好理解。例子2也有自身的特点，故而留着。

假设起始值是某个账户的初始余额 100 元，你想计算累计增加到 150 元的总金额：

```python
initial_balance = 100
target_balance = 150
total_balance = 0

balance = initial_balance
while balance <= target_balance:
    total_balance += balance
    balance += 1

print(f"账户余额从 {initial_balance} 元到 {target_balance} 元的累计金额是：{total_balance}")
```

### 5.3 例子 3：需要进行某些操作的依赖

比如记录某事件发生的第一天到第 7 天的总次数需要如何变写呢？具体来说，操作顺序不同会造成完全不同的结果：如果 `day += 1` 放在输入事件次数之前，那么第一天的事件数据就被跳过了。

**错误示范：**

```python
day = 1
total_events = 0

while day <= 7:
    day += 1    # 提前增加日期，导致跳过第一天的输入
    events_today = int(input(f"请输入第 {day} 天的事件次数: "))
    total_events += events_today

print(f"7天内事件总次数是：{total_events}")
```

正确的顺序应该是先记录事件数据再增加日期，这样第一天的记录才能正常被统计进去。

**正确示范：**

```python
day = 1
total_events = 0

while day <= 7:
    events_today = int(input(f"请输入第 {day} 天的事件次数: "))
    total_events += events_today
    day += 1     # 记录完成后再增加日期

print(f"7天内事件总次数是：{total_events}")
```

### 5.4 例子 4：打卡签到

假设你每天打卡签到，一旦错过了第一天，就会影响到连续打卡奖励。

**错过第一天的版本：**

```python
day = 1
consecutive_days = 0

while day <= 7:
    day += 1
    sign_in = input(f"第 {day} 天，你打卡了吗？(yes/no): ")
    if sign_in.lower() == 'yes':
        consecutive_days += 1
    else:
        consecutive_days = 0  # 一旦错过一天，连续打卡数清零

print(f"你连续打卡了 {consecutive_days} 天！")
```

运行后输出如下：

```python
第 2 天，你打卡了吗？(yes/no): yes
第 3 天，你打卡了吗？(yes/no): yes
第 4 天，你打卡了吗？(yes/no): yes
第 5 天，你打卡了吗？(yes/no): yes
第 6 天，你打卡了吗？(yes/no): yes
第 7 天，你打卡了吗？(yes/no): yes
第 8 天，你打卡了吗？(yes/no): yes
你连续打卡了 7 天！
```

一周 7 天，还出现了 8 天。显然是不对的，原因也是很明显的把 `day += 1`，放在前面跳过了第一天。

**正确代码如下**：

```python
day = 1
consecutive_days = 0

while day <= 7:
    sign_in = input(f"第 {day} 天，你打卡了吗？(yes/no): ")
    if sign_in.lower() == 'yes':
        consecutive_days += 1
    else:
        consecutive_days = 0  # 一旦错过一天，连续打卡数清零
    day += 1

print(f"你连续打卡了 {consecutive_days} 天！")
```

这些例子清楚地展示了初始值的必要性和关键性，特别是操作顺序的重要性，提醒我们在循环设计时一定要谨慎对待起始值和操作顺序的问题。

## 6. 实现更灵活的数字转换

### 6.1 题目描述

~~获取用户输入，把用户输入的数据转换成对应的类型。此题只需要考虑数据：整数、浮点数即可。~~

1. ~~循环~~
2. ~~用户输入整数——>整数~~
3. ~~用户输入浮点数——>转换成小数~~
4. ~~Other——>提示❌不合法，重新输入或退出程序~~
5. ~~split、count、replace~~

编写程序，通过循环的方式，不断从用户处获取输入的数据，并根据输入内容自动判断并转换为对应的数字类型（整数或浮点数）。具体实现要求如下：

1. **使用循环**持续接收用户的输入，直至用户选择退出程序。

2. **判断与转换逻辑：**
    1. 若用户输入整数（如：`10`、`-5`），则将其转换成整数类型。
    2. 若用户输入浮点数（如：`3.14`、`-0.01`），则将其转换成浮点数类型。
    3. 若用户输入非数字类型的数据（如：字母或其他字符），则提示用户输入不合法，并要求重新输入或退出程序。

3. 提示与反馈要清晰易懂，使用户明确知道输入是否有效。

4. **建议实现提示：** 可以使用字符串方法，如 `split()`、`count()` 或 `replace()`，帮助识别并判断输入内容的类型。

**示例交互效果**：

```python
请输入一个数字（输入 q 退出）：10
你输入的是整数：10

请输入一个数字（输入 q 退出）：3.14
你输入的是浮点数：3.14

请输入一个数字（输入 q 退出）：hello
输入不合法，请重新输入！

请输入一个数字（输入 q 退出）：q
退出程序。
```

### 6.2 从思路到完整代码

#### 6.2.1 先汇总问题及其难点和步骤

1. **题目**：从题目可知，我们需要获取用户输入，并且可以进行强制转换，把字符串转换成数字和浮点数。
2. **难点 1**：如何判断用户输入的是合法的数字型？
3. **难点 2**：如何判断用户输入的是合法浮点数？
4. **难点 3**：如何判断除题目之外的字符？核心解决方案在解决：难点1、难点2。
5. 代码开发流程：
    1. 先实现基础版本，不一次性实现循环；
    2. 在基础版的情况下，添加循环；

#### 6.2.2 解决难点 1-1

获取用户输入肯定是使用 `input()` 函数，而 `input()` 函数得到的肯定是字符串。既然要判断是否是合法的整数，这个应该是所有问题中最简单的：直接判断字符串是不是纯数字字符串，如果是纯数字字符串必然是合法的整数！

不过上面的策略还不够全面，我们还需要考虑负数的情况。对于负数的字符串，在判断是否是纯数字时可以通过吗？我们来使用代码测试一下：

```python
numbers = '-12'
print(numbers.isdigit())
```

运行后输出如下：

```python
False
```

显然，无法通过 `.isdigit()` 函数判断。对于这种情况，我们必须手动实现判断。

#### 6.2.3 解决难点 1-2

那么，我们人是如何判断一个字符串是一个合法的负数整数呢？

例如下面字符串负数整数：

```python
numbers = '-12'
```

我们大脑是怎么确定变量 `numbers` 是合格的负整数呢？

1. **要点一**：字符串中只有负数符号和数字，除此之外再无其它；（空格都不行）
2. **要点二**：字符串中负数符号在数字前面，数字在负数符号后面；
3. **核心点**：去除负号之后，应该只剩下数字！

那么我们代码中就可以使用什么来判断这两个条件呢？

1. Python 中没有现成的函数支持上面的要点一、要点二，想要实现只能我们自己实现；
2. 再思考一下：为什么不能使用 `.isdigit()` 函数进行判断呢？因为有其它必要的符号存在，故而解决方案也很简单：我们就把用户输入的字符串拆开，然后分别判断。
3. 首先使用 `.startswith('-')` 判断字符串开头，接着再提取出除开头的负号后，使用 `.isdigit()` 判断剩下的字符串是不是纯数字字符串。如果这两个条件都得到 True，表明是标准且合法的负整数。

#### 6.2.4 解决难点 2

如何判断用户输入的是合法的浮点数呢？这个我们可以借助浮点数拥有的特点来实现，我们先来看一下浮点数有几种类型：

```python
# 类型一：
numbers = '12.22'

# 类型二：
numbers = '-12.22'
```

在继续阅读之前，你先自己思考一下：作为一个人，我们是如何判断一个浮点数是否合法？

不管是类型一还是类型二，有什么共同的特点？合法的浮点数拥有如下特点：

1. **特点一**：字符串中只有小数点、负号、数字之外再无其它；（空格都不行）
2. **特点二**：浮点数的小数点在字符串中，只出现一次。一旦出现一次以上，则不是合法浮点数；
3. **特点三**：负号只出现一次，并且负号只存在字符串开头；
4. **核心点**：去除小数点和负号之后，只剩下纯数字；

为什么我们无法直接使用 `.isdigit()` 来判断是否是纯数字字符串呢？——因为，小数点的存在和符号的存在。那么我们就拆开！

1. 首先，根据特点一。我们先判断字符串中的小数点数量，是否为 1，如果超出 1 直接不是合法浮点数；
2. 接着我们利用核心点，使用 `.replace()` 去除小数点之后，查看是否为纯数字。
3. 如果上一步得到的结果不是纯数字，则再判断左侧是不是存在负号开头。左侧如果是负号开头，则继续判断字符串中负号之后是不是纯数字字符串。（已经去除小数点的字符串）

#### 6.2.5 解决难点三

难点1、难点2已经解决。只要不符合，直接使用 else 即可。

#### 6.2.6 实现单次程序判断

先实现单次的判断（程序），再实现循环。循环只是重复：单次的判断逻辑（程序）。

1. **获取用户输入**

    ```python
    user_input = input("请输入一个数字（输入 q 退出）：")
    ```

2. **判断用户输入的数据，是否是整数**

    1. 代码是否是纯数字字符串：`user_input.isdigit()`；
    2. 代码是否以负号开头，且负号之后是否为纯数字字符串：`user_input.startswith('-') and user_input[1:].isdigit())`；

    ```python
    if user_input.isdigit() or (user_input.startswith('-') and user_input[1:].isdigit()):
        number = int(user_input)
        print(f"你输入的是整数：{number}")
    ```

3. **判断用户输入的数据，是否是浮点数**

    1. 字符串是否只含有一个小数点：`user_input.count('.') == 1`；
    2. 字符串是否在去除小数点后是纯数字：`user_input.replace('.', '').isdigit()`；
    3. 字符串是否是负号开头并且负号之后是纯数字（去除小数点后）：`user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()`；

    ```python
    elif user_input.count('.') == 1:
        if user_input.replace('.', '').isdigit() or (user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()):
            number = float(user_input)
            print(f"你输入的是浮点数：{number}")
        else:
            print("输入不合法，请重新输入！")
    ```

4. **完成单次判断程序**

    ```python
    user_input = input("请输入一个数字（输入 q 退出）：")
    
    if user_input.isdigit() or (user_input.startswith('-') and user_input[1:].isdigit()):
        number = int(user_input)
        print(f"你输入的是整数：{number}")
    elif user_input.count('.') == 1:
        if user_input.replace('.', '').isdigit() or (user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()):
            number = float(user_input)
            print(f"你输入的是浮点数：{number}")
        else:
            print("输入不合法，请重新输入！")
    else:
        print("输入不合法，请重新输入！")
    ```

5. **运行测试如下**

    ```python
    # 测试一
    请输入一个数字（输入 q 退出）：12
    你输入的是整数：12
    
    # 测试二
    请输入一个数字（输入 q 退出）：-12
    你输入的是整数：-12
    
    # 测试三
    请输入一个数字（输入 q 退出）：-12.3
    你输入的是浮点数：-12.3
    
    # 测试四
    请输入一个数字（输入 q 退出）：12.343
    你输入的是浮点数：12.343
    ```

**小提示**：在未来你独自开发程序时，如果你可以一次性从循环代码开始写，那么祝贺你达到一定水平了。但是如果，你刚刚入门。那我现在带你实现的步骤就很适合你学习：先实现单次运行的程序，才考虑添加循环。学到此，你应该要有体会：从 if 开始，现在这些都类似框架，框架内部的代码都使用 if 之前所学的知识，故而前面的基础知识很重要。建立的基础逻辑也很重要。

#### 6.2.7 添加外层循环

添加循环很简单，此时只需要考虑以下点：

1. 循环的终止条件是什么？
2. 如何实现循环条件改变？

循环终止条件是：在用户输入 q 时退出，循环条件的改变使用变量。

1. **添加循环外壳**

    其实，学到这你应该要慢慢有所感受。从 if 开始，前面都是基本语法。if 之后都是框架，只要前面基础语法学的好。框架语法都能理解，框架都不难。重点是如何巧妙利用 if 之前的基础语法。好好感受和去悟！

    ```python
    condition = False
    while not condition:
        user_input = input("请输入一个数字（输入 q 退出）：")
    
        if user_input.isdigit() or (user_input.startswith('-') and user_input[1:].isdigit()):
            number = int(user_input)
            print(f"你输入的是整数：{number}")
            condition = True
        elif user_input.count('.') == 1:
            if user_input.replace('.', '').isdigit() or (user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()):
                number = float(user_input)
                print(f"你输入的是浮点数：{number}")
                condition = True
            else:
                print("输入不合法，请重新输入！")
        else:
            print("输入不合法，请重新输入！")
    ```

2. **实现判断用户输入是否为 q 并退出**

    ```python
    condition = False
    while not condition:
        user_input = input("请输入一个数字（输入 q 退出）：")
        if user_input.lower() == 'q':
            condition = True
        elif user_input.isdigit() or (user_input.startswith('-') and user_input[1:].isdigit()):
            number = int(user_input)
            print(f"你输入的是整数：{number}")
            condition = True
        elif user_input.count('.') == 1:
            if user_input.replace('.', '').isdigit() or (user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()):
                number = float(user_input)
                print(f"你输入的是浮点数：{number}")
                condition = True
            else:
                print("输入不合法，请重新输入！")
        else:
            print("输入不合法，请重新输入！")
    ```



下面代码是我之前上课时每每带学生敲打实现的思路，不是非常完整。但我还是想贴在本文后面，如同围棋看别人棋谱。代码我想也是如此，下面的代码不是最优实现。但其中思路是值得查阅思考的：

代码一：

```python
number = input("Enter a number: ")
num_to_lst = number.split('.')
if len(num_to_lst) == 1:
    if num_to_lst[0].isdigit():
        print(f"number is {int(number)} and type is {int(number)}")
elif len(num_to_lst) == 2:
    if num_to_lst[0].isdigit() and num_to_lst[1].isdigit():
        print(f"number is {float(number)} and type is {float(number)}")
else:
    print("input is not a number")
```

代码二：

```python
while True:
    user_input = input("Enter a number: ")
    count_point = user_input.count(".")
    if user_input.isdigit():
        integer = int(user_input)
        break
    elif count_point == 1:
        index = user_input.index(".")
        pre_point = user_input[:index]
        post_point = user_input[index:]
        if pre_point.isdigit() and post_point.isdigit():
            float_point = float(user_input)
            break
    else:
        print("Invalid input")
```

### 6.3 Luna&Friday 代码实现分析

::: tip 添加日期：2025-06-10 15:22:40

:::

学员 Luna&Friday 实现的代码如下：

```python
is_digit = False

while not is_digit:
    num_input = input("请输入数字：").strip()      # 获得输入，并清除字符串左右两侧的空格
    if num_input.isdigit() or num_input[0] == '-' and num_input[1:].isdigit():    
        # 判断字符串是否全是整数或负整数
        print(f'该数字是整数：{int(num_input)}')
        is_digit = True
    elif '.' in num_input:
        if num_input.split('.')[0].isdigit() and num_input.split('.')[1].isdigit() and len(num_input.split('.')) == 2\
            or num_input[0] == '-' and num_input[1:].split('.')[0].isdigit() and num_input[1:].split('.')[1].isdigit() and len(num_input.split('.')) == 2:
            print(f'该数字是浮点数：{float(num_input)}')
            is_digit = True
        else:
            print('该输入不合法，请重新输入或退出程序！')
    else:
        print('该输入不合法，请重新输入或退出程序！')
```

#### 6.3.1 整数判断分析

Luna 的代码如下：

```python
if num_input.isdigit() or num_input[0] == '-' and num_input[1:].isdigit():
```

- **建议一**：适当的添加括号，使逻辑、优先级更加明确；

    ```python
    if num_input.isdigit() or (num_input[0] == '-') and num_input[1:].isdigit():
    ```

- **建议二**：`num_input[0] == '-'` 代码，可以改进成使用 `num_input.startswith('-')` 来实现。

- **表扬👍**：想到使用 `num_input[0] == '-'` 这个非常好，很多人不一定想得到。并且在未来编程中，很多时候没有现成的方法实现，只不过现在刚好有 `.startswith()` 这个函数来实现。原本的 `num_input[0] == '-'` 实现，为未来独自实现解决代码，打下基础。



#### 6.3.2 浮点数判断分析

##### 6.3.2.1 Q1

Luna 的代码如下：

```python
elif '.' in num_input:
```

这样的判断方法存在什么问题？

在说存在的问题时，我们先来说这行代码所要实现的目的：判断用户输入的数字，是不是小数。那么，小数有什么要求？——只有一个小数点。

但是上面👆的代码中，可以实现只有一个小数点的判断吗？——不行！

> 条件范围过泛，目标字符串中：存在 1 个点及以上都为 True。

推荐使用如下判断：

```python
elif num_input.count('.') == 1:  # 明确目标
```

这样的判断方法目标明确。

##### 6.3.2.2 Q2

Luna 的代码如下：

```python
if num_input.split('.')[0].isdigit() and num_input.split('.')[1].isdigit() and len(num_input.split('.')) == 2 or num_input[0] == '-' and num_input[1:].split('.')[0].isdigit() and num_input[1:].split('.')[1].isdigit() and len(num_input.split('.')) == 2:
```

- **建议一**：重复使用 `num_input.split('.')` 结果，可以直接操作一次 spilt 后，把结果进行赋值，简化代码长度；
- **建议二**：使用创建变量这个方法，不是单纯的代码长度减少。根本优化是：减少了重复操作；

**优化代码如下：**

```python
nums_split = num_input.split('.')
if nums_split[0].isdigit() and nums_split[1].isdigit() and len(nums_split) == 2 or num_input[0] == '-' and num_input[1:].split('.')[0].isdigit() and num_input[1:].split('.')[1].isdigit() and len(num_input.split('.')) == 2:
```

后半部分判断重复出现：`num_input[1:].split('.')`

```python
nums_split = num_input.split('.')
nums_split2 = num_input[1:].split('.')
if nums_split[0].isdigit() and nums_split[1].isdigit() and len(nums_split) == 2 or num_input[0] == '-' and nums_split2[0].isdigit() and nums_split2[1].isdigit() and len(nums_split2) == 2:
```

接着进一步优化：`len(nums_split) == 2` 用来判断分割后的浮点数的数据，正常的浮点数以小数点分割后会得到列表，列表拥有小数点左右两个数据，故而 len 长度必须为 2。

而现在使用 `elif num_input.count('.') == 1:` 来作为先决条件，则不用再判断分割后的列表长度。

优化如下：

```python
if nums_split[0].isdigit() and nums_split[1].isdigit() or num_input[0] == '-' and nums_split2[0].isdigit() and nums_split2[1].isdigit():
```



##### 6.3.2.2 Q3 返璞归真

::: center

**<span style="color:orange">浮点数的不一定要拆分小数点，才可以判断是否为正常小数（浮点数）。</span>**

:::

Luna 的代码逻辑使用的是 split 拆分浮点数，来判断浮点数是否合法。那么接下来，试一试不使用 split 方法。

具体逻辑，前面讲解此题的时候已经讲过。直接放代码：

```python
elif user_input.count('.') == 1:
    if user_input.replace('.', '').isdigit() or (user_input.startswith('-') and user_input[1:].replace('.', '').isdigit()):
        number = float(user_input)
        print(f"你输入的是浮点数：{number}")
    else:
        print("输入不合法，请重新输入！")
```

::: center

**<span style="color:orange">浮点数的小数点在作祟，那咱们就把小数点去掉！</span>**

:::

## 7. 🎮 猜数字游戏

### 7.1 📋 题目描述

编写一个 Python 程序，模拟“猜数字”游戏：

- 程序随机生成一个 1 到 100 之间的整数作为“目标数字”。
- 玩家每次输入一个猜测的数字。
- 程序根据玩家输入，提示：
    - “太大了”；
    - “太小了”；
    - 或“恭喜你猜对了！”。
- 玩家可以无限次猜，直到猜中为止。

### 7.2 🛠️ 基本功能要求

1. 使用 `random.randint(1, 100)` 生成目标数字。
2. 使用 `input()` 接收玩家输入。
3. 使用 `while` 循环不断让玩家猜，直到猜对。
4. 每次猜错时输出提示，帮助玩家调整方向。
5. 猜中后，输出总共猜了几次。

### 7.3 🌟 进阶挑战（选做）

1. **增加重玩功能：**
    - 在猜中后询问是否“再来一局”（输入 `y` 或 `n` ）；
    - 若选择 `y`，重新开始一轮游戏。
2. **添加最多猜 10 次的限制：**
    - 若 10 次内未猜中，输出失败信息和正确答案；
    - 若中途猜中则提前结束。
3. **美化输出，加入 emoji 或横线分隔提示：**
    - 如 `🎯 欢迎来到猜数字游戏！`；
    - 用 `print("="*30)` 来分割内容。

### 7.4 ✅ 示例运行效果

```
🎯 欢迎来到猜数字游戏！
请输入你猜的数字（1-100）：50
太小了，再试试！
请输入你猜的数字（1-100）：75
太大了，再试试！
请输入你猜的数字（1-100）：65
恭喜你猜对了！你一共猜了 3 次！
是否再来一局？(y/n)：n
游戏结束，感谢游玩！
```

### 7.5 🧾 完整代码（含详细注释）

::: code-tabs

@tab 上课版符合本章学习进度

```python
import random

print("🎯 欢迎来到猜数字游戏！")
print("=" * 30)

condition = False
while not condition:
    print("我已经想好了一个 1 到 100 之间的数字。你能猜中吗？")
    target = random.randint(1, 100)
    max_attempts = 10
    attempts = 0

    # 方法二循环停止🤚方法
    # game_player_condition = False
    # while (not game_player_condition) and (attempts < max_attempts):
    while attempts < max_attempts:
        guess = int(input(f"请输入第 {attempts + 1} 次猜测："))
        attempts += 1

        if guess < target:
            print("太小了，再试试！\n")
        elif guess > target:
            print("太大了，再试试！\n")
        else:
            print(f"🎉 恭喜你猜对了！你一共猜了 {attempts} 次！")  # 内层循环该结束了！
            attempts = 10  # 感谢🙏 Luna 学员提供的创意停止🤚循环方法
            # game_player_condition = True  # 方法二停止🤚方法
    else:
        print(f"😢 很遗憾，你已经猜了 {max_attempts} 次都没猜中。正确答案是：{target}")

    again = input("是否再来一局？(y/n)：").strip().lower()
    if again != 'y':
        print("👋 游戏结束，感谢游玩！")
        condition = True

    print("\n" + "=" * 30 + "\n")
```



@tab 常规版

```python
import random

print("🎯 欢迎来到猜数字游戏！")
print("=" * 30)

while True:
    print("我已经想好了一个 1 到 100 之间的数字。你能猜中吗？")
    target = random.randint(1, 100)
    max_attempts = 10
    attempts = 0

    while attempts < max_attempts:
        try:
            guess = int(input(f"请输入第 {attempts + 1} 次猜测："))
        except ValueError:
            print("⚠️ 请输入一个整数！")
            continue

        attempts += 1

        if guess < target:
            print("太小了，再试试！\n")
        elif guess > target:
            print("太大了，再试试！\n")
        else:
            print(f"🎉 恭喜你猜对了！你一共猜了 {attempts} 次！")
            break
    else:
        print(f"😢 很遗憾，你已经猜了 {max_attempts} 次都没猜中。正确答案是：{target}")

    again = input("是否再来一局？(y/n)：").strip().lower()
    if again != 'y':
        print("👋 游戏结束，感谢游玩！")
        break

    print("\n" + "=" * 30 + "\n")
```



@tab 注释版

```python
import random  # 导入random模块，用于生成随机数字

# 欢迎语和装饰线
print("🎯 欢迎来到猜数字游戏！")
print("=" * 30)

while True:  # 主循环：控制是否重新开始新的一局
    print("我已经想好了一个 1 到 100 之间的数字。你能猜中吗？")

    target = random.randint(1, 100)  # 随机生成一个1到100之间的整数，作为目标数字
    max_attempts = 10  # 最多允许猜10次
    attempts = 0  # 记录当前猜测次数，初始为0

    while attempts < max_attempts:  # 猜数字的循环，最多猜max_attempts次
        try:
            # 提示玩家输入猜测，并尝试转换为整数
            guess = int(input(f"请输入第 {attempts + 1} 次猜测："))
        except ValueError:
            # 如果玩家输入的不是整数，捕获异常并提示重新输入
            print("⚠️ 请输入一个整数！")
            continue  # 跳过本次循环，重新请求输入

        attempts += 1  # 猜测次数加1

        # 判断玩家猜的数字与目标数字的大小关系
        if guess < target:
            print("太小了，再试试！\n")  # 提示玩家猜小了
        elif guess > target:
            print("太大了，再试试！\n")  # 提示玩家猜大了
        else:
            # 猜对了，输出成功信息并显示总猜测次数
            print(f"🎉 恭喜你猜对了！你一共猜了 {attempts} 次！")
            break  # 跳出猜数字循环，进入是否再玩一轮的判断

    else:
        # 如果玩家用完所有机会仍未猜中（即 while 循环正常结束）
        print(f"😢 很遗憾，你已经猜了 {max_attempts} 次都没猜中。正确答案是：{target}")

    # 一轮结束，询问玩家是否再来一局
    again = input("是否再来一局？(y/n)：").strip().lower()  # 清除空格并转为小写

    if again != 'y':
        # 如果玩家不输入'y'，则退出主循环，游戏结束
        print("👋 游戏结束，感谢游玩！")
        break

    # 若玩家输入'y'，打印分隔线后重新开始新一轮游戏
    print("\n" + "=" * 30 + "\n")
```



@tab 「选看」函数实现

```python
import random

def guess_number_game():
    print("🎯 欢迎来到猜数字游戏！")
    print("=" * 30)
    print("我已经想好了一个 1 到 100 之间的数字。你能猜中吗？")

    target = random.randint(1, 100)
    max_attempts = 10
    attempts = 0

    while attempts < max_attempts:
        try:
            guess = int(input(f"请输入第 {attempts + 1} 次猜测："))
        except ValueError:
            print("⚠️ 请输入一个整数！")
            continue

        attempts += 1

        if guess < target:
            print("太小了，再试试！\n")
        elif guess > target:
            print("太大了，再试试！\n")
        else:
            print(f"🎉 恭喜你猜对了！你一共猜了 {attempts} 次！")
            break
    else:
        print(f"😢 很遗憾，你已经猜了 {max_attempts} 次都没猜中。正确答案是：{target}")

def main():
    while True:
        guess_number_game()
        again = input("是否再来一局？(y/n)：").strip().lower()
        if again != 'y':
            print("👋 游戏结束，感谢游玩！")
            break
        print("\n" + "=" * 30 + "\n")

if __name__ == "__main__":
    main()
```



:::







