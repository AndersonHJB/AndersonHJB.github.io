---
title: 04-字符串
icon: yongyan
date: 2023-12-08 13:18:16
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

在 Python 中，**字符串（String）** 是用于表示文本数据的**不可变**序列。

字符串可以包含字母、数字、符号、空格以及其他任何 Unicode 字符。字符串是**字符的有序集合**，它的每个元素都是单个字符。

Python 中的字符串可以使用单引号 `' '` 或双引号 `" "` 包围，也可以使用三重引号 `''' '''` 或 `""" """` 来表示多行字符串。

## 1. 字符串的定义

**简要定义**：字符串是由字母、数字和特殊字符来组成的序列。

下图表示字符串的有序特性，认真查看下图：

![有序性](https://blog.images.bornforthis.cn/docs-images/sha256/12/1291df7a10eaea87684ad69a2d49419e324fc2fccc49e806d108518b71e5ebb6.png)

## 2. 创建字符串

### 2.1 基础创建

~~前面我们讲了字符串的定义以及字符串的有序，那接下来我们需要知道如何创建字符串。~~

前面我们已经介绍了字符串的定义以及它的有序性，接下来我们将探讨如何创建字符串。

——使用 **<span style="color:orange">单引号、双引号</span>或者<span style="color:orange">三引号</span>**，即可创建字符串。

~~编写如下代码，并自行运行输出查看有何特点。~~

编写以下代码，并自行运行以观察其输出特点。

```python
name = 'bornforthis'
number = "18"
paragraph = '''Hello,Bornforthis!
Hello,World!'''
paragraph_two = """Hello,Bornforthis!
Hello,World!"""
```

### 2.2 为什么 Python 同时支持三种创建字符串的方法？

~~上面的代码编写完成后，思考一下：Python 为什么有了单引号创建字符串后，还有其它字符串的创建方式，有种既生瑜何生亮的即视感。~~

编写完上述代码后，思考一个问题：**为什么 Python 已经有了单引号来创建字符串，却还提供了其他字符串创建方式？** 这让人有种“既生瑜，何生亮”的感觉。

~~第一种情况就是：当字符串中需要使用单引号或需要使用双引号时，则是一个解决方法。我们经常会表达：我是xxx，比如：我是为此而生。在英文表达中可以这么写：“I am bornforthis.”，在代码中可以这样编写：~~

::: tip 添加日期：2025-08-23 21:55:53

不论你是否可以成功测试、观察出结论，你首先就要从我提供的代码示例中去发现，去挖掘！

```python
name = 'bornforthis'
number = "18"
paragraph = '''Hello,Bornforthis!
Hello,World!'''
paragraph_two = """Hello,Bornforthis!
Hello,World!"""
```

首先第一个质疑点：从第 3 行代码开始，是多行字符串内容。所以，单引号、双引号是否同样支持多行字符串呢？（批判性思维）

下一步就是着手测试代码：

> 一测试不就破案了嘛！

```python
name = 'Hello,Bornforthis!
Hello,World!'
number = "Hello,Bornforthis!
Hello,World!"
```

运行之后可知——报错！

故而，得出**第一个结论**：单双引号不支持多行文本内容（多行字符串！）

:::

接下来，剩余的结论需要你自己观察、测试、研究出来，不论是否有无结论，需要多思考、多实践。（提出问题的能力）

**提示**：思考一下字符串存在的场景（使用场景）；

- 也就是字符串会在哪些地方用到？
- 会存放什么样的内容？

ok，想必你已经耗费足够时间思考，接着往下阅读吧。

第一个场景是，当字符串中包含单引号或双引号时，不同的字符串定义方式可以帮助我们避免语法冲突。比如，表达“我是xxx”（我是为此而生）时，英文可以写成：“`I am bornforthis.`”，而在代码中可以这样编写：

```python
string = 'I am bornforthis.'  # 在英文当中的常规表达式
print(string)
```

~~但是英文当中可以缩写成：“I'm bornforthis.”，而代码可以如下编写：~~

但是在英语中，缩写形式如：“I'm bornforthis.” 也很常见。代码可以尝试这样写：

```python
string = 'I'm bornforthis.'  # 使用单引号的缩写形式
print(string)
```

运行这段代码时，会得到以下错误：

```python
  File "/Users/huangjiabao/lesson2.py", line 15
    string = 'I'm bornforthis.'  # 使用单引号的缩写形式
                ^
SyntaxError: invalid syntax
```

这是因为，字符串的开头使用了单引号，而 Python 会寻找下一个单引号作为匹配。但在这种情况下，第一个单引号出现在字符串中间并不在末尾，未能完全包裹字符串全部内容，因此导致语法错误。

~~**因为，开头是单引号，所以 Python 会寻找到下一个第一次出现的单引号进行匹配。而第一个单引号不在字符串的末尾，所以导致整个字符串异常。（没有完全包裹字符串全部内容）**~~

~~如何解决上面描述的问题呢？——使用双引号。~~

那如何解决这个问题呢？——使用双引号。

```python
string = "I'm bornforthis."  # 通过双引号包裹字符串
print(string)
```

- ~~有时候我们需要字符串里面有单引号或双引号，此时发挥作用： **<span style="color:orange">单双引号混用，是第一个原因</span>**~~

有时候我们需要在字符串中包含单引号或双引号，这时就可以发挥作用了：**<span style="color:orange">单双引号混用，是第一个解决方案</span>**。

~~那么三引号呢？~~

~~假设我们现在需要存储如下文本：~~

那么，三引号的作用是什么呢？

假设我们现在需要存储以下文本：

```python
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

~~放入字符串，我们如何在 Python 代码实现呢？~~

那么，我们如何在 Python 代码中实现多行字符串的存储呢？如果直接使用单引号或双引号实现会怎么样？代码如下：

```python
string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"  # 外面使用双引号进行包裹即可
print(string)
```

上面的代码运行后会报错：

```python
  File "/Users/huangjiabao/book/lesson2.py", line 15
    string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
                                                     ^
SyntaxError: EOL while scanning string literal
```

~~从报错可知是语法错误，从代码也能直接看出单引号或双引号只能包裹单行字符串。其它行则被识别成字符串错误。~~

从报错信息可以看出，这是一条语法错误。由此可知，单引号或双引号只能用于单行字符串包裹，其它行会被误识别为不完整的字符串，导致错误。

~~常规的单引号、双引号是不支持多行文本，但是有一个方法可以间接实现看似多行文本，但实际是单行，在每一行的末尾添加  `\`：~~

~~常规的单引号或双引号不支持多行文本，但是我们可以通过在每行末尾添加 `\` 来间接实现多行显示，实际上它仍然是单行字符串：~~

常规的单引号或双引号无法直接支持多行文本显示，但我们可以通过在每行末尾添加 `\` 来间接实现多行显示。然而，实际上这依然是一个单行字符串：

```python
string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 \
\
浅者见浅，深者见深——黄家宝\
\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\
\
先实现功能，再去优化，否则一切会很乱。——AI悦创\
\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"  # 外面使用双引号进行包裹即可
print(string)
```

~~上面的代码可以成功运行，但从运行结果可知输出的只有一行，并没有像代码那般多行格式的感觉：~~

虽然上述代码可以正常运行，但输出的结果将是一行字符串，而不会保留代码中的多行格式：

```python
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

~~从上面的输出可知，每行结尾添加 `\` 只能实现看起来换行，实际上还是一行。「就是：一行显示不完，换行显示而已，但是本身还是一行」~~

具体来说：从上面的输出可以看到，虽然添加了 `\` 实现了表面上的换行，但实际上这只是视觉上的换行，代码中仍然视为单行。**也就是说，它只是在显示不完时换行显示，但字符串本质上仍是单行的。**

例如下图微信聊天输入框显示一般，看似换行实则还是一行：

![](https://blog.images.bornforthis.cn/docs-images/sha256/b3/b33a77971aea9c559e78b682b1ca7f022b0bfce1c3856320b0d46e973c5582ec.png)

~~此时，我们使用三引号测试：~~

此时，我们可以使用三引号进行测试：

```python
string = """我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"""  # 外面使用双引号进行包裹即可
print(string)
```

上面的代码运行结果如下：

```python
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

~~可以从上面的输出可知，原本什么格式，输出就是什么格式。「原样输出」「三个单引号的效果和上面一样」~~

从上面的输出可以看出，三引号保留了原有的格式，输出内容与输入的格式完全一致。**这就是所谓的“原样输出”。** 三引号的效果和之前的加 `\` 实现换行不同，它能保留字符串中的换行和空格。

- ~~**<span style="color:orange">三个单引号或者三个双引号，实现原样输出。</span>**~~
- **<span style="color:orange">三个单引号或三个双引号，可以实现原样输出。</span>**
- **<span style="color:orange">用于多行注释。</span>**
- **<span style="color:orange">单双引号和三引号可以混合使用。</span>**（代码略，自行测试）

~~下图展示了三引号字符串在代码实现的注释效果：~~

下图展示了在代码中使用三引号字符串实现注释的效果：

![多行注释](https://blog.images.bornforthis.cn/docs-images/sha256/bb/bb052eae332e75195b6e19a098b45cabacc5a245938c93364d01676025086563.png)

## 3. 检测字符串长度

如何获取一个字符串的长度呢？

~~你的第一想法有可能就是去数，这想法不得不说很蠢，但很有用！能解决问题才是首要的，不用一开始遇到问题就想实现最优的解决方案，这样只会把问题变得更加复杂！先实现功能（先解决问题），再去优化，否则一切会很乱。~~

你的第一反应可能是手动数，这看似简单却不失实用！毕竟，解决问题才是首要目标，不必一开始就追求最优解，如果一开始追求最优解，这样往往会让问题变得更复杂。先实现功能（即解决问题），再考虑优化，否则只会让一切变得混乱。

~~当然，Python 已经给我们提供了现成的解决方法，直接使用 `len()` 函数即可检测字符串长度。~~

好在，Python 已经为我们提供了现成的解决方案。只需使用 `len()` 函数即可快速获取字符串的长度。

~~**`len()` 定义: 返回字符串中字符长度或者字符数。**~~

`len()` **说明：返回字符串中的字符数。**

```python
paragraph = "Hello,Bornforthis!"
print(len(paragraph))
```

上面程序的运行结果是：18。

那么，我们此时可以思考一下：len 函数是从数字几开始数的？还是和前面下标一样从 0 开始，还是从 1 开始数呢？

~~从结果可以直观的看出，是从 1 开始数的，所以请注意：检测长度，也就是数个数，肯定是从 1 开始数个数的。举个例子：我们教小朋友数桌面上有几个苹果是从 0 开始数还是从 1 开始数呢？——肯定是从 1 开始数，你总不能教小朋友说：这是 0 个苹果、1 个苹果……吧。显然是不对的，肯定是：这是 1 个苹果、2 个苹果……。~~

~~在使用 len 获取字符串长度时，是从数字 1 开始数的。~~

从结果可以清楚地看出，`len()` 计算的是从 1 开始的字符个数。因此，请注意：检测长度时就是在数字符的个数，自然是从 1 开始数的。打个比方，当我们教小朋友数桌面上的苹果时，是从 0 开始数，还是从 1 开始数呢？当然是从 1 开始数。你不会教小朋友说：“这是 0 个苹果、1 个苹果……”对吧？正确的方式是：“这是 1 个苹果、2 个苹果……”。

因此，在使用 `len()` 获取字符串长度时，它给出的就是字符的实际个数，起始于 1。

## 4. 字符串中的字符获取

~~接下来，我们讲解如何提取字符串中的元素，涉及：提取单个元素、多个元素连续元素、提取多个不连续的字符串元素。~~

接下来，我们来讲解如何提取字符串中的字符。我们将学习三种情况：提取单个字符、提取多个连续字符（子字符串），以及提取多个不连续的字符。

### 4.1 获取单个字符

~~在 Python 中，可以通过索引获取字符串中的单个字符。字符串的索引从 0 开始，即第一个字符的索引为 0，第二个为 1，以此类推。~~

在 Python 中，可以使用索引直接获取字符串中的单个字符。索引从 0 开始，即字符串的第一个字符的索引为 0，第二个字符的索引为 1，以此类推。

**语法示例：**

```python
string = "bornforthis"
select = string[position]
```

- `string` 是字符串变量；
- ~~select 也是变量，用于存储提取后的数据；~~
- `select` 是用于存储提取字符的变量。
- ~~position 是要提取元素的下标；~~
- `position` 是字符在字符串中的位置（即索引），从 0 开始。

~~接下来我们来看一下具体的操作例子，以下是一些示例：~~

以下是一些具体的示例操作。

~~以下是待操作的字符串：~~

**示例字符串：**

```python
string = "bornforthis"
```

- 提取字符串中的第一个字符 `b`：

    ```python
    select = string[0]
    print(select)  # 输出: b
    ```

- 提取字符串中的字符 `f`（位于索引 4）：

    ```python
    select = string[4]
    print(select)  # 输出: f
    ```

- 提取最后一个字符 `s` 的三种方法

    使用不同的方式提取字符串中的最后一个字符 `s`：
    
    ```python
    select1 = string[10]              # 直接使用正向索引
    select2 = string[len(string) - 1] # 使用长度计算
    select3 = string[-1]              # 使用反向索引
    print(select1, select2, select3)  # 输出: s s s
    ```

~~在示例中，`-1` 索引表示最后一个字符，`-2` 表示倒数第二个字符，以此类推。利用正向和反向索引可以灵活地定位字符。~~

~~在这里，我们展示了三种获取最后一个字符的方法：直接索引、基于字符串长度计算、以及反向索引（`-1` 表示最后一个字符）。~~

在示例中，`-1` 索引表示最后一个字符，`-2` 表示倒数第二个字符，以此类推；通过正向索引、基于字符串长度的计算索引和反向索引的组合使用，可以灵活地定位字符串中的字符。

~~其中直接索引和字符串长度索引，看起来没有 -1 索引来的便捷，但我们也需要学会掌握。我们不会嫌解决方法多，而是当心没有想到合适的解决方法。我们需要开阔我们的想法，扩展我们的使用。~~

相比之下，直接使用索引或基于字符串长度的索引看起来不如 `-1` 索引方便快捷，但这些方法各有其独特的应用场景，因此掌握它们非常重要。解决问题时，方法越多意味着灵活性越大，而不是局限于某一种特定方式。我们需要锻炼思维的开阔性，积累更多的解决方法，以便在不同情境下都能选择合适的方案。

培养多角度思考问题的习惯，有助于我们在编程中应对复杂需求。不论是直接索引、长度索引还是反向索引，每种方式都可以帮助我们更灵活地操作字符串。在学习中，通过探索不同方法，我们能更全面地理解编程语言的特性，从而更高效地解决实际问题。

### 4.2 获取多个连续字符「子字符串」

~~如果想提取多个连续字符，可以使用切片语法 `string[start:end]`。在切片中，`start` 表示开始位置的索引，`end` 表示结束位置的索引，**但不包含 `end` 所在字符**。因此，提取到的位置是 `start` 到 `end-1` 的字符。~~

要提取多个连续字符，可以使用切片语法 `string[start:end]`。在切片中，`start` 表示起始位置的索引，而 `end` 表示结束位置的索引，**但不包含 `end` 所在的字符**。因此，实际提取的范围是从 `start` 到 `end-1` 的字符。

**语法示例：**

```python
string = "bornforthis"
select = string[start: end]
# 注意: end 需要 +1 才能包含该字符
```

**示例字符串：**

```python
string = "bornforthis"
```

**示例操作：**

1. **提取连续字符 `bor`：**

    ~~从上面的语法可知，start 就是 b 字符的下标 0，而 end 就是 r 的下标加上1，也就是 r 的下标 2 + 1 = 3，所以最终的提取是 `string[0:3]`。当然，我们也可以测试一下 `string[0:2]` 的结果是不是不包含结束位置。~~
    
    首先，我们确定提取范围的起始和结束位置。`b` 的下标为 0，`r` 的下标为 2。为了包含 `r`，我们需要将结束位置设为 2 + 1，即 3。因此提取语句为 `string[0:3]`。
    
    如果将结束位置设置为 2，如 `string[0:2]`，则不包含最后一个字符 `r`。我们可以测试该效果：
    
    ```python
    select = string[0:2]  # bo
    print(select)
    ```
    
    ~~上面的结果输出得到 `bo`。所以要得到完整的 `bor` 需要 +1 操作：~~
    
    上面的代码输出结果为 `bo`，说明未包含 `r`。为了得到完整的 `bor`，我们需要设置范围为 `string[0:3]`：
    
    ```python
    select = string[0:3]  # bor
    print(select)
    ```
    
    ~~此时运行后得到结果：`bor`。~~
    
    运行后的结果为 `bor`。

2. **提取连续字符 `for`**：f 字符的下标是 4，r 的下标则是 6 但想要得到 r 则需添加 + 1。

    ```python
    select = string[4:7]   # for
    print(select)
    ```

3. **提取连续字符 `this`**：t 字符的下标是 7，s 的下标则是 10 但想要得到 s 则需添加 + 1。

    ```python
    select = string[7:11]  # this
    print(select)
    ```

注意，提取子字符串时，确保索引范围在字符串有效长度内，否则会引发错误。

~~注意，当提取子字符串时，索引范围必须有效，否则会引发错误。~~



### 4.3 获取多个不连续的字符

要提取多个**不连续**的字符，可以使用切片语法 `string[start:end:step]`。在切片中：

- `start` 表示起始位置的索引（包含该位置的字符）。
- `end` 表示结束位置的索引（**不包含该位置的字符**）。
- `step` 表示步长，用于控制提取的间隔字符。

通过设置不同的 `step` 值，可以从字符串中按照指定的间隔提取字符。

**语法示例：**

```python
string = "0123456789"
select = string[start:end:step]
# 注意: end 需要 +1 才能包含期望的字符
```

**示例字符串：**

```python
string = "0123456789"
```

**示例操作：**

1. 提取偶数位字符：`02468`

    **需求**：从字符串 `0123456789` 中提取偶数位上的字符（索引为 0, 2, 4, 6, 8）。

    ```python
    string = "0123456789"
    select = string[0:len(string):2]
    print(select)
    ```

    **解释**：

    - `start = 0`：从索引 0 开始。
    - `end = len(string)`：遍历整个字符串（你也可以手动数一下这个字符串长度并 +1。
    - `step = 2`：每隔 2 个字符提取一个字符。

2. 提取奇数位字符：`13579`

    **需求**：从字符串 `0123456789` 中提取奇数位上的字符（索引为 1, 3, 5, 7, 9）。

    ```python
    select = string[1:len(string):2]
    print(select)  # 输出：13579
    ```

    **解释**：
    
    - `start = 1`：从索引 1 开始。
    - `end = len(string)`：遍历整个字符串。
    - `step = 2`：每隔 2 个字符提取一个字符。

**更复杂的示例字符串：**

```python
string = "bornforthis"
```

1. 提取：`bnri` 也就是每 3 个字符提取 1 个（从索引 0 开始）

    **解析**：从字符串 `bornforthis` 中提取索引为 0, 3, 6, 9 的字符。

    ```python
    # 提取字符 bnri
    select = string[0:len(string):3]
    print(select)  # 输出：bnri
    ```

    **解释**：

    - `start = 0`：从索引 0 开始。
    - `end = len(string)`：遍历整个字符串。
    - `step = 3`：每隔 3 个字符提取一个字符。

2. 提取：`ofts` 也就是每 3 个字符提取 1 个（从索引 1 开始）

    **解析**：从字符串 `bornforthis` 中提取索引为 1, 4, 7, 10 的字符。

    ```python
    # 提取字符 ofts
    select = string[1:len(string):3]
    print(select)  # 输出：ofts
    ```

    **解释**：

    - `start = 1`：从索引 1 开始。
    - `end = len(string)`：遍历整个字符串。
    - `step = 3`：每隔 3 个字符提取一个字符。

通过分段设置 `start`、`end` 和 `step` 参数，可以灵活地提取字符串中满足特定规律的不连续字符，非常适合处理规则化字符串数据的需求。

::: tip Leo 香港科技大学学生 2025 年 8 月 29 日

- **提出**：这样提取不是很鸡肋吗？
- **解答**：
    - 这里稍微解答一下，不过需要先思考一个问题：你觉得计算机程序可以做什么（或者说能做什么）？「稍微思考一下本质」
    - 计算机只能做有规律的事情，没有规律的是无法做的。
    - 有可能你会想：我想让计算机实现从目标字符串中提取特定的字符内容，人可以做到，但是这样的提取方式做不到。
    - 是的，确实这个提取方式做不到！不过，我们尝试把问题具体一些：提取目标字符串中的元音字符，那么这时候可以想想人是如何实现的？
    - 那么字符串就可以怎么实现。



:::

### 4.4 优化

~~如果，我们要提取的字符是从开头到结尾，不用像上面的代码中一直使用 `len(string)` ，我们可以省略开头和结尾，留空即可。~~

如果我们要提取的字符范围是从字符串的开头到结尾，就不需要像前面示例那样使用 `len(string)` 来指定结束位置。在这种情况下，我们可以省略 `start` 和 `end`，直接留空即可。

~~所以上面 4.3 部分的代码可以等价如下：~~

所以，4.3 部分的代码可以简化为以下形式：

```python
string = "0123456789"
"""
语法: string = "0123456789"
select = string[::step]
PS: 步长 (step) 可以直接设置，且不需要指定 start 和 end，Python 默认会取到字符串的开始和结尾。
"""
```

**示例代码：**

```python
# 获取字符 02468（从索引 0 开始，每隔 2 个字符提取一个）
select = string[::2]
print(select)  # 输出：02468

# 提取字符 13579（从索引 1 开始，每隔 2 个字符提取一个）
select = string[1::2]
print(select)  # 输出：13579

# 提取字符串中的特定字符
string = "bornforthis"

# 获取 bnri（从索引 0 开始，每隔 3 个字符提取一个）
select = string[::3]
print(select)  # 输出：bnri

# 获取 ofts（从索引 1 开始，每隔 3 个字符提取一个）
select = string[1::3]
print(select)  # 输出：ofts
```

通过省略 `start` 和 `end`，可以简化切片操作。当需要从头到尾提取字符时，代码更简洁，且可读性更强。并且请注意：只有提取的数据时从字符串开始到字符串结尾时，才可以省略！

### 4.5 字符串倒序

#### 4.5.1 实现

字符串的第三个位置，控制的是字符提取的方向。默认为正数 1，如果我们改成 -1，则会变成反方向。

::: warning

正负控制方向，数字大小控制步长。

:::

```python
string = "bornforthis"
reverse = string[::-1]
print(reverse)

# 输出
sihtrofnrob
```

#### 4.5.2 存在的问题

::: info 思考🤔

~~前面，我们提到到了，如果提取字符是从开始到结尾，则可以省略。那么现在倒序代码省略了什么代码？上面代码 `string[::-1]` 前两位省略了什么数字？尝试填写上去。~~

前面我们提到过，如果提取字符是从开始到结尾，则可以省略 `start` 和 `end`。那么，在倒序的代码 `string[::-1]` 中，前两位实际上省略了什么？尝试填写上去。

:::

你有可能是这么想的：

```python
string = "bornforthis"
# print(len(string))
select = string[0:11:-1]
print(select)  # 无结果
```

想必你也发现了，没有得到结果也没有报错。

**Why？**

![](https://blog.images.bornforthis.cn/docs-images/sha256/e6/e61c64790d778f5151c48b1bd7b2eb9c0e86b167e71803b570d9b8b07d9ba4fd.png)

由上面分析，我们应该如何解决？

#### 4.5.3 解决方法

##### 4.5.3.1 方法一：调换位置

- 能否解决：可以
- 存在什么问题？：少了一个字符

```python
string = "bornforthis"
select = string[11:0:-1]
print(select)  # sihtrofnro
```

**为什么少一个字符？**

——存在一个悖论，因为结束🔚是 0，但是 `0 + 1` 时得到 1，而 1 是从左到右的第二个字符。故而 +1 是无法实现和解决了。

但是，我们可以利用不写结尾，得到最后一个缺失的字符：`string[11::-1]` 。

虽然解决，但是我们偏离了我的一开始的问题：**前两位省略了什么数字？**「因为，又回到了一开始省略的状态」

##### 4.5.3.2 方法二：重写开始结尾

**想想字符串的有序性，从右到左。**

为什么要纠结前面两个空的数字是多少？——为了之后得到某一部分的字符倒序。

```python
string = "bornforthis"
select = string[-1:-12:-1]
print(select)  # sihtrofnrob
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/9e/9ee77f4a1b1e04b879a1f287c5489c5cfa851d1b59ece6331375feb71ca8fde5.png)

#### 4.5.4 正式讲解倒序

**倒序的切片 `string[::-1]`** 中：

- 第一个空白部分（`start`）表示从哪个位置开始提取字符。如果省略，则默认从字符串的**最后一个字符**开始。
- 第二个空白部分（`end`）表示在哪个位置结束提取字符。如果省略，则默认一直提取到字符串的**第一个字符**。
- `step = -1` 表示步长为负数，即每次向前提取一个字符，从而实现倒序。

所以，`string[::-1]` 等价于：

```python
string[start:end:-1]
```

其中，`start` 和 `end` 被省略，意味着：

- `start` 默认是从字符串的**最后一个字符**开始。
- `end` 默认是到字符串的**第一个字符**结束。

~~这里主要分享一个思想：当我们说第三个位置（sep）为负数代表方向时，联想到提取第二种方向：从右到左 -1 开始。紧接着就应该触发思考：省略前两个代表从开始到结尾，哦吼！那不就是：`-1` 开始到 `-len(string)` 吗。悟了吗！~~

这里分享一个思路：当我们提到第三个参数（`step`）为负数时，表示字符的提取方向。联想到字符串第二种的提取方向——从右到左，也就是从 `-1` 开始。接下来，你应该会有这样的联想：如果省略前两个参数（`start` 和 `end`），那是不是意味着从字符串的开头到结尾提取字符呢？那么，从 `-1` 开始，到 `-len(string)` 结束，不就是倒序吗？明白了吧！



#### 4.5.5 小试牛刀： 获取 `rofn`

```python
string = "bornforthis"
select = string[-5:-9:-1]
print(select)  # rofn
```

## 5. 字符串内置方法

接下来，我讲讲解 Python 中字符串的常用内置函数，读者们在实际学习和编写中，我推荐如下学习步骤：

1. 第一步：先思考示例；
2. 第二步：接着独立尝试写出示例的代码；（写不出来可以直接看我给示例）
3. 第三步：示例代码编写后，不要着急运行得到结果，先自己大脑思考一下会得到什么结果，思考好后再进行运行验证！
4. 总结：我们在当下学习编程是不缺结果的，结果可以由谷歌搜索、ChatGPT、运行代码等工具或方法直接得到。我们所欠缺的是思考，有意识的去训练自己的思维！

最后还需要注意的是：我给你的代码示例，只是掌握该内置函数使用的最基础代码，而你需要做到的是产生自己的思考、疑问等。

### 5.1 .upper()

将字符串内容，全部转成大写。

```python
string = "bornforthis"
upper_string = string.upper()
print(upper_string)

# ---output---
BORNFORTHIS
```

### 5.2 .lower()

将字符串中的所有字母转换为小写。

```python
string = "BORNFORTHIS"
lower_string = string.lower()
print(lower_string)

# ---output---
bornforthis
```

### 5.3 .capitalize()

将字符串首字母转换成大写。「只对第一个字母大写，其它后面的字符会变成小写」

~~将字符串首字母转换成大写，其它字符转为小写。~~

- 示例 1: 将字符串的首字母转为大写，其它字母转为小写

```python
string = "bornForthis To Aiyc"
capitalize_string = string.capitalize()
print(capitalize_string)

# ---output---
Bornforthis to aiyc
```

::: tip 2025 年 8 月 30 日 Leo

**什么是扩展思考？**

- 举个例子：老师你用的是空格间隔，那 `-` 间隔可以吗？——这就是扩展性思考，有效学习。

**Leo 函数可以叠加吗？**

- ——不行，但是可以连用字符串内置函数。

- `string.capitalize()`：得到的是什么数据类型？——字符串；
- 所以字符串可以接着直接使用字符串内置函数；

```python
capitalize_string = string.capitalize().capitalize()
```

`capitalize()` 函数就可以换成其它字符串内置函数。这就是独立思考的效果，我原本是没单独讲这个知识点的，但是 Leo 思考了。所以，就增加这个知识点的补充。

:::

### 5.4 .title()

将字符串中的每个单词的首字母转换成大写，其余的字符都转换成小写。

- 示例 1: 将每个单词的首字母大写

    ```python
    string = "bornforthis to aiyc"
    title_string = string.title()
    print(title_string)
    
    # ---output---
    Bornforthis To Aiyc
    ```

- 示例 2: 不管是什么分隔符，都会将单词的首字母大写

    ```python
    string = "bornforthis-to-aiyc"  # 分隔符不影响首字母大写
    title_string = string.title()
    print(title_string)
    
    # ---output---
    Bornforthis-To-Aiyc
    ```

- 示例 3: 大小写字母混合的情况下，除了首字母外其余字母转为小写

    ```python
    string = "bornforThis to aiYc"
    title_string = string.title()
    print(title_string)
    
    # ---output---
    Bornforthis To Aiyc
    ```

### 5.5 .startswith()

~~检测字符串是不是以特定字符或单词开头，返回布尔值。~~

检测字符串是否以特定字符或单词开头，返回布尔值。

- 示例 1: 检测字符串是否以 "b" 开头？

    ```python
    string = "bornforthis"
    startswith_string = string.startswith("b")
    print(startswith_string)
    
    # ---output---
    True
    ```

- 示例 2: 检测字符串是否以 "bo" 开头？

    ```python
    string = "bornforthis"
    startswith_string = string.startswith("bo")
    print(startswith_string)
    
    # ---output---
    True
    ```

- 示例 3: 检测字符串是否以 "p" 开头？

    ```python
    string = "bornforthis"
    startswith_string = string.startswith("p")  # 显然不是，则结果肯定为 False
    print(startswith_string)
    
    # ---output---
    False
    ```

- 示例 4: 检测字符串是否以 "b1" 开头？

    ```python
    string = "bornforthis"
    startswith_string = string.startswith("b1")
    print(startswith_string)
    
    # ---output---
    False
    ```

### 5.6 .endswith()

~~检测字符串是不是以特定字符或单词结尾，返回布尔值。~~

检测字符串是否以特定字符或单词结尾，返回布尔值。

- 示例 1: 检测字符串是否以 "s" 结尾？

    ```python
    string = "bornforthis"
    endswith_string = string.endswith("s")
    print(endswith_string)
    
    # ---output---
    True
    ```

- 示例 2: 检测字符串是否以 "is" 结尾？

    ```python
    string = "bornforthis"
    endswith_string = string.endswith("is")
    print(endswith_string)
    
    # ---output---
    True
    ```

- 示例 3: 检测字符串是否以 "i" 结尾？

    ```python
    string = "bornforthis"
    endswith_string = string.endswith("i")
    print(endswith_string)
    
    # ---output---
    False
    ```

- 示例 4: 检测字符串是否以 "s6" 结尾？

    ```python
    string = "bornforthis"
    endswith_string = string.endswith("s6")
    print(endswith_string)
    
    # ---output---
    False
    ```

    

### 5.7 .count()

计算特定字符或单词在目标字符串中存在的次数。

- 示例 1: 计算字符 "r" 在字符串中出现的次数

    ```python
    string = "bornforthis"
    count_string = string.count('r')
    print(count_string)
    
    # ---output---
    2
    ```

- 示例 2: 计算子字符串 "or" 在字符串中出现的次数

    ```python
    string = "bornforthis"
    count_string = string.count('or')
    print(count_string)
    
    # ---output---
    2
    ```

- 示例 3: 计算字符 "a" 在字符串中出现的次数（测试不在字符串中的字符，count 会给我们返回什么结果呢？

    ```python
    string = "bornforthis"
    count_string = string.count('a')
    print(count_string)
    
    # ---output---
    0
    ```

- 示例 4: 计算子字符串 "ap" 在字符串中出现的次数

    ```python
    string = "bornforthis"
    count_string = string.count('ap')
    print(count_string)
    
    # ---output---
    0
    ```

### 5.8 .find()

寻找目标字符或单词在特定字符串中，第一次出现的下标。也就是出现重复的，也只是返回第一次出现的下标。如果是查找单词，那么 `find()` 返回目标单词的第一个字符的下标。

::: tip 语法补充，find 如何找到第二次、第三次……出现的下标。夏思涵 2026 年 7 月 27 日 20:00:00

**语法**：`字符串.find(查找内容, 开始位置)`

```python
# find 查找第二次出现的下标
string = "bornforthis"
first_r = string.find('r')  # 第一次出现 r 的下标
# find_string = string[first_r + 1:]  # 把第一个 r 剔除
second_r = string.find('r', first_r + 1)
print(second_r)
# 循环延生：找到所有下标使用 find 或累计
```

:::

如果，查询的字符或单词不存在，则返回 `-1`。

~~寻找目标字符或单词在特定字符串中，第一次出现的下标。如果字符或单词不存在，则返回 `-1`。~~

- 示例 1: 查找字符 "o" 在字符串中的第一次出现位置（o 字母在字符串 `'bornforthis'` 上出现了 2次，下标分别是1、5，find 函数最终会返回 1）

    ```python
    string = "bornforthis"
    find_string = string.find('o')
    print(find_string)
    
    # ---output---
    1
    ```

- 示例 2: 查找字符 "a" 在字符串中的第一次出现位置

    ```python
    string = "bornforthis"
    find_string = string.find('a')
    print(find_string)
    
    # ---output---
    -1
    ```

- 示例 3: 查找子字符串 "for" 在字符串中的第一次出现位置（for 子字符串存在于 bornforthis 中，返回 f 字符的下标 4）

    ```python
    string = "bornforthis"
    find_string = string.find('for')
    print(find_string)
    
    # ---output---
    4
    ```

- 示例 4: 查找子字符串 "aiyc" 在字符串中的第一次出现位置

    ```python
    string = "bornforthis"
    find_string = string.find('aiyc')
    print(find_string)
    
    # ---output---
    -1
    ```

    

### 5.9 .index()

寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 `index()` 返回目标单词的第一个字符的下标。

如果，查询的字符或单词不存在，则**报错**。

此时，你继续往下阅读前应该思考：这个和什么内置函数很像？——和上面刚刚学习的 find() 函数很像，那区别是什么？在使用场景上如何考虑选择呢？学习需要关联学习与对比学习，好好思考一下这个问题，后续我会给出答案。

- 示例 1: 查找字符 "o" 在字符串中的第一次出现位置

    ```python
    string = "bornforthis"
    index_result = string.index('o')
    print(index_result)
    
    # ---output---
    1
    ```

- 示例 2: 查找字符 "a" 在字符串中的第一次出现位置（字符 a 不存在于字符串 bornforthis 中，则 index 函数报错！）

    ```python
    string = "bornforthis"
    index_result = string.index('a')
    print(index_result)
    
    # ---output---
    Traceback (most recent call last):
      File "/Users/huangjiabao/lesson3.py", line 83, in <module>
        index_result = string.index('a')
    ValueError: substring not found
    ```

- 示例 3: 查找子字符串 "for" 在字符串中的第一次出现位置

    ```python
    string = "bornforthis"
    index_result = string.index('for')
    print(index_result)
    
    # ---output---
    4
    ```

- 示例 4: 查找子字符串 "aiyc" 在字符串中的第一次出现位置

    ```python
    string = "bornforthis"
    index_result = string.index('aiyc')  # 查找 aiyc 在字符串中的位置，但实际 aiyc 不存在于字符串中，则 index 函数报错
    print(index_result)
    
    # ---output---
    Traceback (most recent call last):
      File "/Users/huangjiabao/lesson3.py", line 83, in <module>
        index_result = string.index('aiyc')
    ValueError: substring not found
    ```

    

### 5.10 .find() 和 .index() 的区别以及使用考虑

::: tip 给澳洲 AUN 学生（讲不清楚·打起来）添加日期：2025 年 9 月 23 日

辅助理解，问个问题：如果要找个对象，你是要找 `find()` 这样的对象，还是要找 `index()` 这样的对象呢？

我想大部分人的答案会是：`find()` 为什么呢？基于 find、index 在是否可以找到目标字符串时产生的最终反应来看，find 的结果是可控的，index 没找到会直接报错，也就是爆发！

所以 find 更加可控，index 更加容易爆发～

如果你想要让你的程序更加稳定、可控选择 find。而如果你想迅速知道程序在哪个地方会出现报错，则选择使用 index。

:::

`index()` 和 `find()` 都是字符串的查找方法，它们用于查找某个子字符串在字符串中第一次出现的位置。尽管它们的功能相似，但两者之间有几个重要的区别。

1. **相同**：`.index()` 和 `.find()` 找到目标字符或子字符串，会返回第一次

2. **区别**：`.index()` 如果没有找到匹配的则会直接报错（报错类型 ValueError），报错意味着程序会停止，`.find()` 没有找到匹配的会返回 -1。

    ```python
    # 示例1: index 代码演示
    string = "hello bornforthis"
    print(string.index("bornforthis"))  # 输出: 6
    print(string.index("python"))  # 会抛出 ValueError
    
    # 示例2: find 代码演示
    string = "hello world"
    print(string.find("world"))  # 输出: 6
    print(string.find("python"))  # 输出: -1
    ```

3. **思考**：从上面的相同、区别可以看出：`.find()` 的可控性更强一些，`.index()` 则较弱一些。

4. **异常处理**：

    1. **`.index()`** 会抛出 `ValueError`，如果目标子字符串在字符串中不存在。这意味着，如果你不确定目标子字符串是否存在，使用 `.index()` 时你必须处理异常。

    2. **`.find()`** 返回 `-1`，如果目标子字符串不存在。这样你可以直接通过返回值判断是否找到了目标子字符串，而不需要异常处理。

        ```python
        # 示例1：index 的解决方案
        string = "hello"
        try:
            print(string.index("world"))
        except ValueError:
            print("Not found!")  # 这里会捕获异常并输出 "Not found!"
        
        
        # 示例2: find 的解决方案
        string = "hello"
        if string.find("world") == -1:
            print("Not found!")  # 直接判断返回值
        ```

5. **选择**：下面只是我一部分的想法💡，希望可以触发你自己的思考和想法，不论是新的选择依据还是错误的指正，那都达到我想让你学会的研究与思考能力。

    1. 对于 **.index()**：

        1. 如果你确定这个字符百分百存在于目标字符串中，可以选择使用 `.index()` 函数；

        2. 如果你的代码量巨多或者代码逻辑复杂亦或者代码在开发中分散在各个文件中，使用 `.index()` 函数来实现，有利于快速检索逻辑错误等具体位置，原因也很简单：代码报错，程序直接停止；

        3. 如果你想确保字符一定存在目标字符串时；

            ```python
            string = "Welcome to the world of Python"
            position = string.index("world")  # 确保 "world" 一定存在
            ```

    2. 对于 **.find()**：

        1. 对于要发布、提供给用户使用的程序，你不确定用户使用程序时输入的字符是否一定存在于目标字符串数据时，我们就可以使用 `.find()` 来实现，这样在目标字符不存在时，返回的 -1 可以直接使用 if 来解决；（前面所说的可控性更强的原因）

        2. 在开发过程中，如果你对不存在字符有特定的处理方式，就可以使用 if…else… 就可以实现，而不必处理异常；

        3. 如果你在处理外部输入时不确定某个关键词是否存在，`find()` 会更适用：

            ```python
            string = "Welcome to the world of Python"
            position = string.find("world")  # 如果不存在不会抛出异常
            if position != -1:
                print(f"'world' found at index {position}")
            else:
                print("'world' not found")
            ```

6. **总结**：

| 特性     | `index()`                                         | `find()`                                  |
| -------- | ------------------------------------------------- | ----------------------------------------- |
| 返回值   | 找到子字符串时返回索引，未找到时抛出 `ValueError` | 找到子字符串时返回索引，未找到时返回 `-1` |
| 异常处理 | 如果未找到子字符串，抛出 `ValueError`             | 不抛出异常，返回 `-1`                     |
| 使用场景 | 你知道子字符串一定存在，或者愿意处理异常          | 你不确定子字符串是否存在，且希望避免异常  |

7. **结论**：这里我就再赘述一遍，便于捋清你的逻辑
    1. **`index()`** 适合当你确定目标子字符串一定会存在时使用，或者希望通过异常捕获未找到的情况。
    2. **`find()`** 更安全，适合不确定目标子字符串是否存在时使用，避免了异常的处理。

::: details 补充：GYZ 伯克利 DS 专业讲课时，另一种讲解方法 2026 年 2 月 7 日 14:19:22

**先给结论**：`index` 和 `find` 同时存在，是为了在“严格性 vs 宽容性”之间给你选择权。

下面我用「**设计动机 + 行为差异 + 实战建议**」三层来讲清楚。

### 1. 它们到底有什么区别？

以字符串为例（列表、元组的 `index` 行为一致）：

```python
s = "hello world"
```

#### 1️⃣ `find()` —— 宽容型查找

```python
s.find("o")     # 4
s.find("x")     # -1
```

特点：

- 找到 → 返回索引
- 找不到 → **返回 `-1`**
- 不会抛异常
- 非常适合“试探式查询”

#### 2️⃣ `index()` —— 严格型查找

```python
s.index("o")    # 4
s.index("x")    # ❌ ValueError
```

特点：

- 找到 → 返回索引
- 找不到 → **直接抛异常**
- 强制你处理“不应该不存在”的情况

### 2. 为什么 Python 要同时保留两个？

这不是重复设计，而是**哲学选择**。

#### 🧠 Python 的核心设计理念之一：

> **“Errors should never pass silently.”** ——《The Zen of Python》

但同时，Python 也承认：

> 有些场景下，**“没找到”是正常情况，不是错误**。

于是就诞生了两种风格：

| 场景               | 用哪个    | 原因             |
| ------------------ | --------- | ---------------- |
| 你不确定是否存在   | `find()`  | 失败是正常分支   |
| 按设计必须存在     | `index()` | 不存在就是 bug   |
| 数据校验、协议解析 | `index()` | 早点炸，早点发现 |
| 模糊搜索、用户输入 | `find()`  | 宽容处理         |

### 3. 设计层面的真实用意（很关键）

#### 1️⃣ `find`：逻辑分支工具

```python
pos = s.find("error")
if pos != -1:
    print("发现 error")
```

👉 用返回值控制流程

👉 **不把“没找到”当异常**

#### 2️⃣ `index`：断言工具

```python
pos = s.index(":")
key = s[:pos]
value = s[pos+1:]
```

👉 这里如果没有 `:`

👉 **程序就不该继续跑**

这是一种 **“数据契约”式编程**。

### 4. 为什么不用一个函数 + 参数解决？

比如：

```python
find("x", strict=True)
```

Python 没这么做，是因为：

1. **异常语义非常重要**
2. 函数名本身就表达了态度
3. 可读性更强

```python
s.index(":")   # 我假设它一定存在
s.find(":")    # 我只是试试看
```

👉 **读代码就知道作者的心理预期**。

### 5. 列表为什么只有 `index`，没有 `find`？

```python
lst = [1, 2, 3]
lst.index(4)   # ValueError
```

原因很简单：

- 列表通常用于 **结构化数据**
- 查不到通常是 **逻辑错误**
- Python 鼓励你早点发现 bug

如果你想要 `find` 风格：

```python
i = next((i for i, x in enumerate(lst) if x == 4), -1)
```

### 6. 一句话记忆法（超好用）

- **`find` = “不确定，有就好”**

- **`index` = “你必须在”**

### 7. 写给技术型用户的建议 💡

你这种经常：

- 写工具链
- 做自动化 / 教育项目
- 写可维护代码

👉 **推荐策略**：

- **业务核心逻辑：用 `index`**
- **用户输入 / 模糊匹配：用 `find`**
- **想让 bug 尽早暴露：用 `index`**

:::

### 5.11 .isdigit()

判断字符串是不是纯数字字符串，字符串中但凡有一个字符是非数字，则返回 False。

- 示例 1: 判断字符串是否全部由数字组成

    ```python
    string = "12345678"
    isdigit_result = string.isdigit()
    print(isdigit_result)
    
    # ---output---
    True
    ```

- 示例 2: 判断字符串是否全部由数字组成（出现空格就不是纯数字）

    ```python
    string = "123 45678"  # 字符串中包含空格
    isdigit_result = string.isdigit()
    print(isdigit_result)
    
    # ---output---
    False
    ```

### 5.12 .isalpha()

判断字符串是不是纯字母字符串，字符串中但凡有一个非字母的，则返回 False。

- 示例 1: 判断字符串是否全部由字母组成

    ```python
    string = "bornforthis"
    isalpha_result = string.isalpha()
    print(isalpha_result)
    
    # ---output---
    True
    ```

- 示例 2: 判断字符串是否全部由字母组成（出现空格就不是纯字符串）

    ```python
    string = "born forthis"  # 字符串中包含空格
    isalpha_result = string.isalpha()
    print(isalpha_result)
    
    # ---output---
    False
    ```

### 5.13 .isalnum()

~~判断字符串是不是纯数字、纯字母或纯数字字母字符串，字符串中但凡出现非数字、字母元素，则返回 False。~~

判断字符串是否是纯数字、纯字母或纯数字字母字符串，字符串中如果包含任何非数字或字母字符，则返回 `False`。

- 示例 1: 判断字符串是否由纯字母组成

    ```python
    string = "bornforthis"
    boolean = string.isalnum()
    print(boolean)
    
    # ---output---
    True
    ```

- 示例 2: 判断字符串是否由纯数字组成

    ```python
    string = "12345678"
    boolean = string.isalnum()
    print(boolean)
    
    # ---output---
    True
    ```

- 示例 3: 判断字符串是否由纯字母、数字组成

    ```python
    string = "bornforthis8888888888"
    boolean = string.isalnum()
    print(boolean)
    
    # ---output---
    True
    ```

- 示例 4: 判断字符串是否由字母或数字组成（包含空格的情况）

    ```python
    string = "bornforthis 8888888888"
    boolean = string.isalnum()
    print(boolean)
    
    # ---output---
    False
    ```




### 5.14 .isupper()

判断字符串中的字母否全大写，全大写则返回 True，否则返回 False。

- 示例 1: 判断字符串是否全部由大写字母组成

    ```python
    string = "BORNFORTHIS"
    isupper_result = string.isupper()
    print(isupper_result)
    
    # ---output---
    True
    ```

- 示例 2: 判断字符串是否全为大写字母（含非字母字符）

    ```python
    string = "BORNFORTHIS12-、"
    isupper_result = string.isupper()
    print(isupper_result)
    
    # ---output---
    True
    ```

- 示例 3: 判断字符串是否全为大写字母（混合大小写）

    ```python
    string = "BORNforthis"
    isupper_result = string.isupper()
    print(isupper_result)
    
    # ---output---
    False
    ```

- 示例 4: 判断字符串是否全为大写字母（全小写）

    ```python
    string = "bornforthis"
    isupper_result = string.isupper()
    print(isupper_result)
    
    # ---output---
    False
    ```

    

### 5.15 .islower()

~~判断字符串中字母是不是全小写，全小写则返回 True，否则返回 False。~~

判断字符串中的字母是否全为小写字母。若全小写则返回 `True`，否则返回 `False`。

- 示例 1: 判断字符串是否全为小写字母

    ```python
    string = "bornforthis"
    islower_result = string.islower()
    print(islower_result)
    
    # ---output---
    True
    ```

- 示例 2: 判断字符串是否全为小写字母（含非字母字符）

    ```python
    string = "bornforthis121-、"
    islower_result = string.islower()
    print(islower_result)
    
    # ---output---
    True
    ```

- 示例 3: 判断字符串是否全为小写字母（含大写字母）

    ```python
    string = "bornforthisA121-、"
    islower_result = string.islower()
    print(islower_result)
    
    # ---output---
    False
    ```

### 5.16 .isspace()

~~判断字符串是否为纯空格，多少个空格都可以。纯空格则返回 True，否则返回 False。~~

判断字符串是否仅由空格组成。若全为空格则返回 `True`，否则返回 `False`。

- 示例 1: 判断字符串是否全为空格

    ```python
    string = "   "
    isspace_result = string.isspace()
    print(isspace_result)
    
    # ---output---
    True
    ```

- 示例 2: 判断空字符串

    ```python
    string = ""
    isspace_result = string.isspace()
    print(isspace_result)
    
    # ---output---
    False
    ```

- 示例 3: 判断非空格字符串

    ```python
    string = "bornforthis"
    isspace_result = string.isspace()
    print(isspace_result)
    
    # ---output---
    False
    ```

### 5.17 .strip()

默认去掉目标字符串的前后空白字符，如果指定参数，则去掉指定字符。

~~去掉字符串两端的空白字符，或者去掉指定字符。~~

- 示例 1: 默认去掉前后空白字符

    ```python
    string = "   bornforthis   "
    strip_result = string.strip()
    print("原本的字符串:", string)
    print("去掉前后空白字符后:", strip_result)
    
    # ---output---
    原本的字符串:    bornforthis   
    去掉前后空白字符后: bornforthis
    ```

- 示例 2: 去掉指定字符 `'-'`

    ```python
    string = "-----bornforthis-----"
    strip_result = string.strip('-')
    print("原本的字符串:", string)
    print("去掉前后 '-' 字符后:", strip_result)
    
    # ---output---
    原本的字符串: -----bornforthis-----
    去掉前后 '-' 字符后: bornforthis
    ```

- 示例 3: 如果字符不连续，则只去掉连续的部分

    ```python
    string = "--- --bornforthis-- ---"
    strip_result = string.strip('-')  # 只去掉连续的减号
    print("原本的字符串:", string)
    print("去掉前后 '-' 字符后:", strip_result)
    
    # ---output---
    原本的字符串: --- --bornforthis-- ---
    去掉前后 '-' 字符后:  --bornforthis-- 
    ```

- 示例 3: 去掉多种指定字符（不分顺序）

    ```python
    string = "--- --bornforthis-- ---"  # 如果想去掉减号和空格呢？
    strip_result = string.strip('- ')  # 填入要去掉的字符「不计较先后顺序」，写成 ' -' 也是可以的
    print("原本的字符串:", string)
    print("去掉前后 '- ' 字符后:", strip_result)
    
    # ---output---
    原本的字符串: --- --bornforthis-- ---
    去掉前后 '- ' 字符后: bornforthis
    ```

### 5.18 .lstrip()

默认去掉字符串左边的空白字符，如果指定参数，则去掉左边的指定字符。

~~去掉字符串左侧的空白字符或指定字符。~~

- 示例 1: 默认去掉左侧空白字符

    ```python
    string = "   bornforthis   "
    lstrip_result = string.lstrip()
    print("原本的字符串:", string)
    print("去掉左侧空白字符后:", lstrip_result)
    
    # ---output---
    原本的字符串:    bornforthis   
    去掉左边空白字符后: bornforthis   
    ```

- 示例 2: 去掉左侧的指定字符 `'-'`

    ```python
    string = "----bornforthis----"
    lstrip_result = string.lstrip('-')
    print("原本的字符串:", string)
    print("去掉左侧 '-' 字符后:", lstrip_result)
    
    # ---output---
    原本的字符串: ----bornforthis----
    去掉左边 '-' 后: bornforthis----
    ```

- 示例 3: 去掉不连续的字符

    ```python
    string = "-- --bornforthis----"
    lstrip_result = string.lstrip('- ')  # 不分先后顺序
    print("原本的字符串:", string)
    print("去掉左边 '- ' 后:", lstrip_result)
    
    # ---output---
    原本的字符串: -- --bornforthis----
    去掉左边 '- ' 后: bornforthis----
    ```

    

### 5.19 .rstrip()

默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。

~~去掉字符串右侧的空白字符或指定字符。~~

- 示例 1: 默认去掉右侧空白字符

    ```python
    string = "   bornforthis   "
    rstrip_result = string.rstrip()
    print("原本的字符串:", string)
    print("去掉右侧空白字符后:", rstrip_result)
    
    # ---output---
    原本的字符串:    bornforthis   
    去掉右边空白字符后:    bornforthis
    ```

- 示例 2: 去掉右侧的指定字符 `'-'`

    ```python
    string = "----bornforthis----"
    rstrip_result = string.rstrip('-')
    print("原本的字符串:", string)
    print("去掉右侧 '-' 字符后:", rstrip_result)
    
    # ---output---
    原本的字符串: ----bornforthis----
    去掉右边 '-' 后: ----bornforthis
    ```

- 示例 3: 去掉右侧不连续字符

    ```python
    string = "----bornforthis-- --"
    rstrip_result = string.rstrip('- ')  # 不分先后顺序
    print("原本的字符串:", string)
    print("去掉右边 '- ' 后:", rstrip_result)
    
    # ---output---
    原本的字符串: ----bornforthis-- --
    去掉右边 '- ' 后: ----bornforthis
    ```

### 5.20 .replace()

`.replace(old, new, count)` 第一个位置传入待替换的旧「old」字符，第二个位置传入要替换的新字符「new」，默认替换全部，count 控制替换次数。

**举个例子**：在一场篮球比赛中，有五名队员。此时教练发现：作为控球后卫（Point Guard）技能提升缓慢，比后备队员更逊一些。球队需要最优配置，教练就点名叫：小悦你在接下来的比赛中，替代小鸿上场。

在这个例子中，old 则是：小鸿，new 则是：小悦。

~~将字符串中的指定字符或子字符串替换为新的字符或子字符串。~~

- 示例 1: 替换空格为 `'*’`

    ```python
    string = "   bornforthis   "
    replace_result = string.replace(' ', '*')  # 把空白字符替换成 *
    print("原本的字符串:", string)
    print("替换后:", replace_result)
    
    # ---output---
    原本的字符串:    bornforthis   
    替换后: ***bornforthis***
    ```

- 示例 2: 替换所有 `'ai'` 为 `'love'`

    ```python
    string = "ai-bornforthis-ai"
    replace_result = string.replace('ai', 'love')  # 把 ai 替换成 love，默认全部替换
    print("原本的字符串:", string)
    print("替换后:", replace_result)
    
    # ---output---
    原本的字符串: ai-bornforthis-ai
    替换后: love-bornforthis-love
    ```

- 示例 3: 控制替换次数，仅替换一次 `'ai'` 为 `'love'`

    ```python
    string = "ai-bornforthis-ai"
    replace_result = string.replace('ai', 'love', 1)  # 替换一次
    print("原本的字符串:", string)
    print("替换后:", replace_result)
    
    # ---output---
    原本的字符串: ai-bornforthis-ai
    替换后: love-bornforthis-ai
    ```

### 5.21 .split()

`.split(sep, maxsplit)` 以特定字符进行分割，默认空格分割。如果传入参数「sep」，则以参数进行分割。返回分割后的列表。maxsplit 用于控制分割几次。

- 示例 1: 默认按空格拆分

    ```python
    string = "ai bornforthis ai"
    split_result = string.split()
    print("原本的字符串:", string)
    print("分割后:", split_result)
    
    # ---output---
    原本的字符串: ai bornforthis ai
    分割后: ['ai', 'bornforthis', 'ai']
    ```

- 示例 2: 按 `'-'` 拆分

    ```python
    string = "ai-bornforthis-love"
    split_result = string.split('-')  # 以 '-' 号分割
    print("原本的字符串:", string)
    print("分割后:", split_result)
    
    # ---output---
    原本的字符串: ai-bornforthis-love
    分割后: ['ai', 'bornforthis', 'love']
    ```

- 示例 3: 以 `'-'` 分割，并指定分割次数

    ```python
    string = "ai-bornforthis-love"
    split_result = string.split('-', 1)  # 指定分割次数为 1
    print("原本的字符串:", string)
    print("分割后:", split_result)
    
    # ---output---
    原本的字符串: ai-bornforthis-love
    分割后: ['ai', 'bornforthis-love']
    ```

~~上面我们讲解了 split 的分割方法以及控制分割次数，接下来我们来看看 split 在分割连续字符时（这里连续的意思指的是：比如以 `'-'` 分割，`'-'` 符号是连续的  ），所产生的问题。~~

我们刚才讲解了 `split` 方法的分割方式以及如何控制分割的次数。接下来，我们来看一下，当 `split` 用于分割连续字符时（这里“连续”指的是，例如以 `'-'` 符号为分隔符时，多个 `'-'` 符号连续出现的情况），会引发哪些问题。

::: warning

~~注意⚠️：使用 spilt 分割时，不管每个字符之间有几个空格，都将会正常的分割出来。~~

注意⚠️：使用 `split` 进行分割时，无论字符之间有多少空格，都会被正常分割。（使用默认符号分割时）

```python
s = "ai  bornforthis  ai    book"
new_s = s.split()
print(new_s)

# ---output---
['ai', 'bornforthis', 'ai', 'book']
```

在这个例子中，`split` 会忽略多余的空格，自动将字符串分割成单独的单词。

~~当我们指定 split 的间隔时，spilt 会严格按照我们指定的分割符号来分割。~~

当我们指定了分割符时，`split` 会严格按照指定的分隔符进行分割：

```python
s = "ai  bornforthis  ai    book"
new_s = s.split(' ')
print(new_s)

# ---output---
['ai', '', 'bornforthis', '', 'ai', '', '', '', 'book']
```

~~上面多输出的结果空字符串，就是证明。~~

如上所示，输出中多出的空字符串正是因为多个连续空格的存在。

~~其实，在学习的过程当中，还是需要经常举一反三的。如果是其它连续字符会不会有这样情况呢？——答案是肯定的，也会有这样的情况。~~

其实，在学习过程中，我们需要经常举一反三，思考如果遇到其他连续字符时，是否会出现类似的情况？——答案是肯定的，确实会有类似的情况。

~~你可以自行分析和编写代码试一试～~~

你可以动手写一些代码，亲自验证这一点～

:::

### 5.22 .rsplit()

~~`.rsplit(sep, maxsplit)` 从字符串右边进行分割，也可以传入参数「sep」，进行指定分割。返回分割后的列表。maxsplit 指定分割次数。~~

`.rsplit(sep, maxsplit)` 从字符串的右边进行分割。可以传入参数 `sep` 来指定分隔符，返回分割后的列表。`maxsplit` 用于控制分割次数，默认值为 -1，表示不限制分割次数。

- 示例 1: 按 `'-'` 从右侧进行分割（不限制分割次数）

    ```python
    string = "ai-bornforthis-love"
    rsplit_result = string.rsplit('-')
    print("原本的字符串:", string)
    print("从右侧分割后:", rsplit_result)
    
    # ---output---
    原本的字符串: ai-bornforthis-love
    从右侧分割后: ['ai', 'bornforthis', 'love']
    ```

- 示例 2: 按 `'-'` 从右侧进行分割，仅分割一次

    ```python
    string = "ai-bornforthis-love"
    rsplit_result = string.rsplit('-', 1)
    print("原本的字符串:", string)
    print("从右侧分割后（分割一次）:", rsplit_result)
    
    # ---output---
    原本的字符串: ai-bornforthis-love
    从右侧分割后（分割一次）: ['ai-bornforthis', 'love']
    ```

### 5.23 .join()

~~以特定字符使字符串间隔。~~

`.join(iterable)` 将可迭代对象（如列表、元组等）中的字符串元素连接成一个新的字符串，可以指定连接符。

- 示例 1: 以 `'-'` 为分隔符拼接字符串

    ```python
    string = "bornforthis"  # 如果是待拼接对象是字符串，则字符串内可以包含全部字符种类
    join_result = '-'.join(string)
    print("原本的字符串:", string)
    print("拼接后:", join_result)
    
    # ---output---
    原本的字符串: bornforthis
    拼接后: b-o-r-n-f-o-r-t-h-i-s
    ```

- 示例 2: 将列表中的字符串元素用 `'-'`连接

    ```python
    string_list = ['ai', 'bornforthis', 'love']  # 必须所有元素都是字符串类型
    join_result = '-'.join(string_list)
    print("原本的列表:", string_list)
    print("拼接后:", join_result)
    
    
    # ---output---
    原本的列表: ['ai', 'bornforthis', 'love']
    拼接后: ai-bornforthis-love
    ```

::: tip 2025 年 11 月 1 日 Agent Toast 上课补充

**稍微补充一下**：使用 join 可以实现特定数据进行拼接，而 join 前面的字符是字符串，所以可以得出结论：join 只能拼接同类型（也就是字符串数据）。

:::

### 5.24 小试牛刀 1：统计字符串字数

统计下面字符串中的字数，不包含标点符号、空格、换行，字符串内容如下：

```python
亲爱的黄艳医生：

新年好！时光飞逝，婉棠已经满满长大，我们永远感激您在龙年时给予我们的那份守护和祝福。是您的细心和专业，让我们的家庭迎来了最珍贵的礼物。

蛇年的钟声已敲响，愿新年的每一天都像您的微笑一样温暖，每个夜晚都如您的双手一样安心。感谢您让我们的家充满了欢笑与爱。祝您和家人龙腾虎跃、岁岁平安、幸福安康！

此致
敬祝新春快乐
婉棠一家敬上
```

- 上面的内容该如何存储？
- 不需要的字符如何去掉？
- 如何统计字符数？
- 使用哪些函数来解决这个问题呢？

上面的小试牛刀的内容，不一定要和本书一样。但是要尽可能时全面的中文表达，这样方便校验更多实现细节。当你思考完成后，可以继续阅读下面的内容。

**代码实现如下：**

```python
content = """亲爱的黄艳医生：

新年好！时光飞逝，婉棠已经满满长大，我们永远感激您在龙年时给予我们的那份守护和祝福。是您的细心和专业，让我们的家庭迎来了最珍贵的礼物。

蛇年的钟声已敲响，愿新年的每一天都像您的微笑一样温暖，每个夜晚都如您的双手一样安心。感谢您让我们的家充满了欢笑与爱。祝您和家人龙腾虎跃、岁岁平安、幸福安康！

此致
敬祝新春快乐
婉棠一家敬上"""

clean_content = content.replace("\n", "").replace("：", "").replace("，", "").replace("。", "").replace("、", "").replace("！", "").replace(" ", "")  # 去掉标点符号、空格、换行
print(clean_content)
print(len(clean_content))

# ---output---
亲爱的黄艳医生新年好时光飞逝婉棠已经满满长大我们永远感激您在龙年时给予我们的那份守护和祝福是您的细心和专业让我们的家庭迎来了最珍贵的礼物蛇年的钟声已敲响愿新年的每一天都像您的微笑一样温暖每个夜晚都如您的双手一样安心感谢您让我们的家充满了欢笑与爱祝您和家人龙腾虎跃岁岁平安幸福安康此致敬祝新春快乐婉棠一家敬上
153
```

### 5.25 小试牛刀 2：得到想要的结果

::: tip 日期：2026 年 4 月 27 日 10:07 李昂

:::

**任务**：把下面的字符串进行分割：

```python
string = "ai--------bornforthis------ai"
```

得到如下结果：

```python
['ai', 'bornforthis', 'ai']
```

> 仅限使用现有所学的知识！

**答案**：

```python
string = "ai--------bornforthis------ai"
replace_string = string.replace('-', ' ')
split_result = replace_string.split()
print(split_result)
```

::: tip 思路捋清，添加日期：2026 年 7 月 29 日 夏思涵

- Step 1：首先从题目可知，需要进行分割。故而，可以直接想到 `split()` 函数。使用 `split()` 进行代码编写：

    ```python
    string = "ai--------bornforthis------ai"
    split_result = string.split('-')
    print(split_result)
    
    # ---output---
    ['ai', '', '', '', '', '', '', '', 'bornforthis', '', '', '', '', '', 'ai']
    ```

- Step 2：从输出结果可以明显的查看出，分割后得到的列表元素有多余且不应该存在的元素。进一步尝试分割多个连续的 `-`，看是否可以成功进行分割。其实，从字符串来看已经可以知道：中间的 `-` 并不是左右对称的。

    ```python
    string = "ai--------bornforthis------ai"
    split_result = string.split('------')  # 6 个 -
    print(split_result)
    
    # ---output---
    ['ai', '--bornforthis', 'ai']
    ```

    问题依然存在，需要进一步解决。

- Step 3：所以第二步的处理逻辑是不通的！那应该怎么办呢？——既然 `-` 的数量不一致且不对称，那我们就想办法去掉 `-`。`split()` 函数对默认空格分割是有优化的，故而问题就转换成：如何把目标字符串分割的间隔转换成空格。（采用：问题转换思想）

    转换⇄其实就是：替换！——> `replace()` 函数。

    先把 `-` 间隔全部替换成空格，再进行 `split()` 分割。就可以完美的解决！

- Step 4：编写最终逻辑代码：

    ```python
    string = "ai--------bornforthis------ai"
    replace_string = string.replace('-', ' ')  # 第一步：先把 `-` 间隔全部替换成空格
    split_result = replace_string.split()  # 第二步：再进行 `split()` 分割，完美的解决！
    print(split_result)
    ```

    

:::

### 5.26 小试牛刀 3：列表转数字

::: tip 日期：2026 年 4 月 27 日 10:20 李昂

:::

把字符串列表，转换成纯数字。列表如下：

```python
nums = ['1', '3', '1', '4', '5', '2', '0']
```

输出结果如下：（纯数字的结果）

```python
<class 'int'>, 1314520
```

**答案**：

```python
nums = ['1', '3', '1', '4', '5', '2', '0']
nums_str = "".join(nums)
to_int = int(nums_str)
print(type(to_int), to_int)
```



## 6. 字符串格式化

### 6.0 背景

假设你有一个字符串 `"Hi Bornforthis, Welcome to XiaMen."`，并且想要根据不同的名字和地区来动态替换这些部分。那么，如果直接修改字符串就显得不灵活，而且效率较低。

例如：

```python
string = "Hi Bornforthis, Welcome to XiaMen."
print(string)

# ---output---
Hi Bornforthis, Welcome to XiaMen.
```

- ~~所存在的问题：如果需要换个人名或地区，就需要重新创建一个全新的字符串。~~
- 所存在的问题：如果需要换个人名或地区，就得重新创建一个新的字符串。
- 我们更希望有类似模版，让我们不同的人名、地址填写进去。而不是每个人都从头创建一个新字符串。

~~当然，这个时候有可能会想到使用字符串的加法，但字符串加法存在问题。~~

当然，也有其他方法来拼接字符串，比如使用字符串加法，但这种方法在某些情况下效率较低且不方便维护：

```python
name = "Bornforthis"
region = "XiaMen"
string1 = "Hi "
string2 = ", Welcome to "
string3 = "."
result = string1 + name + string2 + region + string3
print(result)

# ---output---
Hi Bornforthis, Welcome to XiaMen.
```

~~由上面的代码可知，虽然实现了。但是很繁琐，如果更复杂的字符串就不合适了。~~

~~虽然能实现，但当字符串结构复杂时，这种方法显得特别繁琐。首当其冲的就是你要对每一个数据加上引号，这很麻烦。你可以自己打一遍下面的代码，不用在意代码具体实现，而是要注意在打的时候的感受：~~

虽然可以通过加法实现拼接，但当字符串结构变得复杂时，这种方法显得非常繁琐。特别是你需要为每个数据加上引号，这会显得非常麻烦。下面的代码是用加法来拼接字符串的示例，你可以尝试自己打一遍代码，重点不在于实现，而是注意你在打代码时的感受：

```python
string = "Hello," + "welcome to " + "learning programming in " + "Huang Jiabao’s book."
```

~~不知到你的感觉是什么，我的感觉就是不仅仅要频繁的打双引号，还需要频繁的添加 `+` 号，极其麻烦。~~

打这段代码的时候，你可能会感到非常不方便。我的感受是：不仅需要频繁地输入双引号，还得不断使用 `+` 运算符，这样的拼接方式显得冗长且重复。就像拼装一个非常复杂的机器，每个小部件都要单独拿出来拼接，既费力又容易出错。（特别是在中文的表达中，你还需要频繁的中英文切换。自行敲打一遍：`string = "你好，" + "欢迎你在" + "黄家宝的书籍里学习编程。"` 这个例子会使你的感受更加清晰且具体）

**注意：** 上面的例子你有可能还是忍不住会想，我直接一段直接打完不就行（`string = "Hello, welcome to learning programming in Huang Jiabao’s book."` 或 `string = "你好，欢迎你在黄家宝的书籍里学习编程。"`），哪里麻烦了？虽然有循环论证之嫌（lol），但是反复强调，还是希望你能更好的培养你自己的感知和研究能力，有更扎实的进步。

但你不要忘记，我们的代码有时候不仅仅是固定的一段表达，有时候是要从特定变量里面去获取得到的。例如：

```python
author = "黄家宝"
learn = "编程"
string = "你好，欢迎你在" + author + "的书籍里学习" + learn + "。"
```

这种方式不仅麻烦，且在字符串结构复杂时，代码的可读性和可维护性都大打折扣。因此，我们希望找到更简洁、高效的字符串拼接方式。

而且，Python 中不同数据类型（如字符串与整数）不能直接相加，需要进行类型转换：

~~而且另一个问题就是，在 Python 中不同的数据类型不能直接相加，除非强制转换类型为字符串：~~

```python
string = "Money is " + 190  # 会抛出错误
print(string)


# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/demo1.py", line 1, in <module>
    string = "Money is " + 190
TypeError: can only concatenate str (not "int") to str
```

正确的做法是进行显式类型转换：

```python
string = "Money is " + str(190)  # 强制转换为字符串
print(string)


# ---output---
Money is 190
```

~~—— **format** 就应运而生了。~~

其它数据类型：列表、元组、集合、字典、布尔型等，你需要自行编写测试，都需要使用 `str()` 进行转换。

为了简化这个过程，Python 提供了字符串格式化方法。

### 6.1 .format()

1. **单个花括号 `{}`**

    ~~使用 `format()` 方法可以更灵活地插入变量到字符串中。~~

    通过 `format()` 方法，可以灵活地将变量插入到字符串中。

    - 示例 1: 动态插入单个变量

        ```python
        string = "Hi {}, Welcome to XiaMen.".format("aiyuechuang")
        print(string)
        
        # ---output---
        Hi aiyuechuang, Welcome to XiaMen.
        ```

    - 示例 2: 使用模板字符串重复利用

        ```python
        template_string = "Hi {}, Welcome to XiaMen."
        formatted_string = template_string.format("Bornforthis")
        print(formatted_string)
        
        # ---output---
        Hi Bornforthis, Welcome to XiaMen.
        ```

2. ~~一个花括号以上「按顺序填充」｜~~ 按顺序填充多个花括号

    ~~当字符串中有多个花括号时，`format()` 会按顺序填充对应的值。~~

    当字符串中有多个占位符 `{}`，`format()` 会按顺序填充对应的值。

    - 示例 1: 填充两个值

        ```python
        string = "Hi {}, Welcome to {}.".format("aiyuechuang", "厦门")
        print(string)
        
        # ---output---
        Hi aiyuechuang, Welcome to 厦门.
        ```

    - 示例 2: 使用模板字符串

        ```python
        template_string = "Hi {}, Welcome to {}."
        formatted_string = template_string.format("Bornforthis", "上海")
        print(formatted_string)
        ```

3. ~~多个花括号指定位置~~ 按位置指定花括号的值

    可以通过花括号中的数字指定插入值的位置，数字代表 `format()` 中参数的索引。（索引下标示例：`format(0, 1, 2, 3, 4, 5, 6...)`）

    - 示例 1: 通过索引指定值

        ```python
        string = "Hi {1}, Welcome to {0}.".format("厦门", "aiyuechuang")  # format 中 "厦门" 的下标为：0，"aiyuechuang" 下标为：1
        print(string)
        
        # ---output---
        Hi aiyuechuang, Welcome to 厦门.
        ```

    - 示例 2: 模板字符串中使用索引

        ```python
        template_string = "Hi {1}, Welcome to {0}."
        formatted_string = template_string.format("上海", "Bornforthis")
        print(formatted_string)
        
        # ---output---
        Hi Bornforthis, Welcome to 上海.
        ```

4. ~~参数指定~~ 使用命名参数填充花括号

    通过命名参数直接插入变量，代码具有更好的可读性。

    ~~通过参数名替代位置索引，提供更清晰的语义：~~

    - 示例 1: 使用命名参数

        ```python
        string = "Hi {name}, Welcome to {region}.".format(region="厦门", name="aiyuechuang")
        print(string)
        
        # ---output---
        Hi aiyuechuang, Welcome to 厦门.
        ```

    - 示例 2: 模板字符串中使用命名参数

        ```python
        template_string = "Hi {name}, Welcome to {region}."
        formatted_string = template_string.format(name="Bornforthis", region="上海")
        print(formatted_string)
        
        # ---output---
        Hi Bornforthis, Welcome to 上海.
        ```

5. 不同类型的适配

    对于不同数据类型，`format()` 可以直接进行自动转换并填充。

    - 示例 1: 数字型

        ```python
        string = "Money is {}.".format(190)
        print(string)
        
        # ---output---
        Money is 190.
        ```

    - 示例 2: 列表

        ```python
        lst = [0, 2, 4, 6, 8, 10]
        string = "list data: {}.".format(lst)
        print(string)
        
        # ---output---
        list data: [0, 2, 4, 6, 8, 10].
        ```

    - 示例 3: 字典

        ```python
        dct = {"name": "黄家宝", "age": 19}
        string = "Dictionary data: {}.".format(dct)
        print(string)
        
        # ---output---
        Dictionary data: {'name': '黄家宝', 'age': 19}.
        ```

    - 示例 4: 集合

        ```python
        st = {1, 3, 5, 7, 9}
        string = "Set data: {}.".format(st)
        print(string)
        
        # ---output---
        Set data: {1, 3, 5, 7, 9}.
        ```

    此时，不管是放入数字、列表或者其它数据不会报错了。

6. 保留指定小数位

    `format()` 方法支持对数值进行格式化，例如保留小数位。其中 `{:.nf}` 表示保留 `n` 位小数。

    - 示例 1: 保留三位小数

        ```python
        string = "Money is {:.3f}.".format(190)  # .3f 保留三位小数
        print(string)
        
        # ---output---
        Money is 190.000.
        ```

### 6.2 f-strings（格式化字符串字面量）

Python 3.6+ 及以上版本引入了 `f-string`，可以直接将变量嵌入到字符串中，更加简洁。

~~Python 3.6+ 提供了 f-strings，它是一种更简洁直观的字符串格式化方法。~~

1. ~~直接读取变量~~ 直接插入变量

    通过直接在字符串中嵌入变量来生成格式化字符串。

    ```python
    # 动态插入变量
    name = "Bornforthis"
    region = "厦门"
    string = f"Hi {name}, Welcome to {region}."
    print(string)
    
    # ---output---
    Hi Bornforthis, Welcome to 厦门.
    ```

2. ~~保留小数位~~ 格式化数值并保留指定小数位

    ```python
    money = 190
    string = f"Money is {money:.3f}."  # 保留三位小数
    print(string)
    
    # ---output---
    Money is 190.000.
    ```

    这里 Python 的其它类型，我就不一一带你进行测试了。

### 6.3 % 格式化

#### 6.3.1 语法

~~`%` 是一种老式的格式化方式，适合简单场景。~~

~~`%` 格式化是较早的字符串格式化方式，但在 Python 中仍然被广泛使用。特别是在一些特殊代码指令中使用的较为频繁，比如~~

在 Python 中，`%` 字符串格式化是一种较老的字符串格式化方式，它虽然已经被更强大和灵活的 `.format()` 方法和 `f-string` 所取代，但在某些场景中仍然会被使用。特别是在一些特殊代码指令中使用的较为频繁并且处理模板语言、日志格式、旧代码时，`%` 仍然是一个有效的选择。下面我给你稍微扩展一下。

**常见的格式化符号表：**

| 格式符 | 说明                          | 示例                                                         |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| `%s`   | 字符串 (str)                  | `"Hello, %s" % "World"` → `'Hello, World'`                   |
| `%d`   | 整数 (int)                    | `"Age: %d" % 25` → `'Age: 25'`                               |
| `%i`   | 整数 (int)（和 `%d` 类似）    | `"Number: %i" % 42` → `'Number: 42'`                         |
| `%f`   | 浮点数 (float)（默认6位小数） | `"Pi: %f" % 3.14159` → `'Pi: 3.141590'`                      |
| `%.nf` | 指定小数点后 `n` 位           | `"Pi: %.2f" % 3.14159` → `'Pi: 3.14'`                        |
| `%e`   | 科学计数法 (小写 e)           | `"Scientific: %e" % 123456` → `'Scientific: 1.234560e+05'`   |
| `%E`   | 科学计数法 (大写 E)           | `"Scientific: %E" % 123456` → `'Scientific: 1.234560E+05'`   |
| `%x`   | 十六进制 (小写)               | `"Hex: %x" % 255` → `'Hex: ff'`                              |
| `%X`   | 十六进制 (大写)               | `"Hex: %X" % 255` → `'Hex: FF'`                              |
| `%o`   | 八进制                        | `"Octal: %o" % 10` → `'Octal: 12'`                           |
| `%c`   | 单个字符                      | `"Character: %c" % 65` → `'Character: A'`（ASCII 码 65 对应 'A'） |
| `%%`   | 输出 `%` 符号                 | `"Discount: %d%%" % 50` → `'Discount: 50%'`                  |

接下来，我把其中常用的几个拿来详细讲解一下：

1. 单个位置传入（单参数格式化）

```python
string = "Money is %d"
new_s = string % 13  # 格式化填写后赋值给 new_s 变量
print(new_s)

print(string % 19)  # 直接格式化填写并 print 输出


string = "Money is %d" % 190 # 格式化后输出
print(string)

# ---output---
new_string: Money is 13
直接放: Money is 19
Money is 190
```

2. 多个位置传入时（多参数格式化）

    使用 **元组 `()`** 传入多个值。

```python
string = "Money is %d %s"  # 直接写成不包含空格的也是支持的！例如："Money is %d%s"
new_s = string % (13, '发大财')
print(new_s)

print(string % (888, '暴富'))

string = "Money is %d %s" % (190, "超有钱")
print(string)

# ---output---
Money is 13 发大财
Money is 888 暴富
Money is 190 超有钱
```

3. 保留小数位

```python
string = "Money is %.3f"
new_s = string % 19  # 格式化后赋值给变量 new_s
print(new_s)

print(string % 18)  # 格式化后直接输出

string = "Money is %.3f" % 180
print(string)


# ---output---
Money is 19.000
Money is 18.000
Money is 180.000
```



#### 6.3.2 为什么存在 % 格式化方法

> 先说结论：`%` 格式化可以使我们在 Python 编程中，实现高度自由化的格式、内容定义！——补充日期：2026 年 2 月 8 日 08:47:12 伯克利大三 GYZ

在 Python 中，`{}` 是 `.format()` 和 `f-string` 的占位符符号。如果你的字符串中本身就包含 `{}`，比如某些模板代码、DSL（领域特定语言）、或脚本语言的占位符，直接使用 `.format()` 或 `f-string` 会导致冲突或意外解析。

这时候无非就两种选择，一种是使用最原生的字符串加法拼接，另一种则是使用现在所要讲的 `%` 字符串格式化。

例如在数据库的 SQL 指令中：

```python
template = "SELECT * FROM table WHERE column = {}"
formatted = template.format("value")  # 这里 {} 会被解析
print(formatted)


# ---output---
SELECT * FROM table WHERE column = value
```

如果我们希望保留 `{}` 而不是解析它，这就需要进行额外的转义：

```python
template = "SELECT * FROM table WHERE column = {{}}"
formatted = template.format("value")
print(formatted)


# ---output---
SELECT * FROM table WHERE column = {}
```

从上面的输出结果中你会发现问题，占位符 `{}` 正常被保留了，但字符串 `"value"` 没有被正确的插入。原因我来带你具体剖析一下：在 Python 中，要转义大括号需要写两个大括号 `{{` 和 `}}`。当前的写法 `{{}}` 实际上等于 `{}`，这会导致内层的 `{}` 被当作结束符。

**具体来说在 Python 字符串格式化中：**

1. 一个 `{}` 表示"这里要插入一个值"；
2. 两个 `{{` 会被转义成一个字面的 `{` 字符；
3. 两个 `}}` 会被转义成一个字面的 `}` 字符。

所以在上面的代码中：

```python
template = "SELECT * FROM table WHERE column = {{}}"
```

这里的 `{{}}` 实际上会被解释为：

- 前两个 `{{` 转义成一个字面的 `{`
- 后两个 `}}` 转义成一个字面的 `}`

因此模板字符串实际上等价于：

```python
template = "SELECT * FROM table WHERE column = {}"  # {} 是字面字符，不是格式化占位符
```

这就是为什么当你调用 `.format()` 时没有效果——因为模板中没有可供格式化的占位符，只有字面的大括号字符。

上面我带你分析了存在的问题，现在来带你来解决上面的问题。

```python
# 错误写法
template = "SELECT * FROM table WHERE column = {{}}"

# 正确写法
template = "SELECT * FROM table WHERE column = '{}'"  # 对于字符串值,添加引号
# 或
template = "SELECT * FROM table WHERE column = {}"    # 对于数值,不需要引号

# 使用示例
formatted = template.format("value")
print(formatted)

# ---output---
SELECT * FROM table WHERE column = 'value'
```

另外，如果我们既要保留占位符 `{}` 又要实现成功插入字符串 `"value"` ，可以这样写:

```python
template = "SELECT * FROM table WHERE column = {{{}}}"  # 三个大括号
formatted = template.format("value")
print(formatted)

# ---output---
SELECT * FROM table WHERE column = {value}
```

#### 6.3.3 补充：其它语言所涉及的 {}

> 一句话总结：**当字符串中本身就包含大量 {}（如 JSON）时，format() / f-string 会把它们误认为占位符；而 % 格式化完全不关心 {}，因此更安全。**

以下是一些编程语言和技术中，`{}` 是语法的一部分的具体例子，这些场景中 `format()` 会与 `{}` 冲突，而使用 `%` 字符串格式化更为合适。在下面的例子中，不用过多的苛求马上理解其它语言为何需要占位符 `{}` ，当你本书完全学完后，知道 json 的语法结构时，自然会更加理解下面的示例。

1. **JSON 字符串**

    在 JSON 格式中，`{}` 是用来表示对象的语法。生成 JSON 数据时需要保留 `{}`，避免被格式化工具解析。

    ```python
    json_template = '{"name": "{user_name}", "age": "{user_age}", "Domain": "{user_domain}"}'
    formatted_json = "API Payload: {}".format(json_template)
    print(formatted_json)  # 用来提前构造好 json 数据结构
    
    # ---output---
    API Payload: {"name": "{user_name}", "age": "{user_age}", "Domain": "{user_domain}"}
    ```

    上面构造号了 json 数据结构，当然也可以直接一次性编写成：`json_template = 'API Payload: {"name": "{user_name}", "age": "{user_age}", "Domain": "{user_domain}"}'` 这部分不用纠结。

    **分析：**

    - `json_template` 中的 `{user_name}` 和 `{user_age}` 是占位符，表示未来动态填充的内容。
    - 使用 `.format()` 会导致冲突，需要双层大括号 `{{}}` 转义，而 `%` 格式化无需额外操作。

    接下来就为 json 填入数据：

    ```python
    json_data = formatted_json.format(user_name="黄家宝", user_age=28, user_domain="https://bornforthis.cn")
    print(json_data)
    
    # ---output---
    Traceback (most recent call last):
      File "/Users/huangjiabao/book.py", line 5, in <module>
        json_data = formatted_json.format(user_name="黄家宝", user_age=28, user_domain="https://bornforthis.cn")
    KeyError: '"name"'
    ```

    从报错可知，最外层的 `{}` 是问题所在，被 Python 识别成了占位符，但又是 json 必备的语法符号。所以原本的 format、f-string 都不适用了，就得使用 `%` 来实现格式化：

    ```python
    # 先定义 JSON 模板（只保留 % 占位符）
    json_template = (
        '{"name": "%s", "age": %d, "Domain": "%s"}'
    )
    # 说明：%s → 字符串、%d → 整数、JSON 中的 {} 完全不受影响
    
    # 构造最终 API Payload
    formatted_json = "API Payload: %s" % json_template  # 此时只是模板，还没填数据
    print(formatted_json)
    
    json_data = formatted_json % ("黄家宝", 28, "https://bornforthis.cn")
    print(json_data)
    
    # ---output---
    API Payload: {"name": "%s", "age": %d, "Domain": "%s"}
    API Payload: {"name": "黄家宝", "age": 28, "Domain": "https://bornforthis.cn"}
    ```

    > 当字符串本身是一种“语言”（JSON / SQL / 正则 / 模板）时，用 %；当字符串只是普通文本时，用 f-string。——日期：2026 年 2 月 8 日 09:01

2. Shell 脚本或命令

    在 Shell 脚本中，`{}` 通常用于通配符表达式或逻辑块。

    **示例：**

    ```bash
    shell_command = "mkdir -p /path/to/{dir1,dir2,dir3}"
    formatted_command = "Executing: %s" % shell_command
    print(formatted_command)
    
    # ---output---
    Executing: mkdir -p /path/to/{dir1,dir2,dir3}
    ```

    **分析：**

    - Shell 命令中的 `{dir1,dir2,dir3}` 是语法的一部分，用于批量创建目录。

    - 如果使用 `.format()`，必须手动转义 `{}`，显得繁琐。

3. SQL 查询

    在一些 SQL 模板中，`{}` 被用作占位符以表示动态参数。

    **示例：**

    ```sql
    sql_template = "SELECT * FROM users WHERE age > {age} AND name LIKE '{name}'"
    formatted_sql = "Query: %s" % sql_template
    print(formatted_sql)
    
    # ---output---
    Query: SELECT * FROM users WHERE age > {age} AND name LIKE '{name}'
    ```

    **分析：**

    - SQL 模板中的 `{age}` 和 `{name}` 是占位符，用于替换动态参数。
    - 如果使用 `.format()`，可能会误解析这些占位符，导致 SQL 语句出错。

4. 配置文件模板

    在配置文件（如 YAML、INI、XML）中，`{}` 可能用作语法的一部分表示动态参数或变量。

    **示例：**

    ```python
    config_template = """
    api_version: "v1"
    endpoints:
      - url: "https://api.example.com/{resource}/{id}"
      - url: "https://api.example.com/{resource}/list"
    """
    formatted_config = "Generated config:\n%s" % config_template
    print(formatted_config)
    
    # ---output---
    Generated config:
    api_version: "v1"
    endpoints:
       - url: "https://api.example.com/{resource}/{id}"
       - url: "https://api.example.com/{resource}/list"
    ```

    在上面的代码中，如果使用 format 占位符依然无法被保留。

    **分析：**

    - 配置文件模板中的 `{resource}` 和 `{id}` 是动态占位符。
    - 如果使用 `.format()`，必须转义 `{}`，而 `%` 格式化无需担心冲突。

5. 小结

    当字符串中的 `{}` 是其他语言或系统的语法的一部分时，`%` 字符串格式化的优势包括：

    1. **避免冲突：** 不会尝试解析 `{}`，保留原始语法。
    2. **简化操作：** 无需额外的转义处理，保持模板代码的直观性和完整性。
    3. **兼容性强：** 特别适合与多种语言、模板、脚本工具交互的场景。

    在这些情况下，`%` 格式化是一种安全、简洁的解决方案。

#### 6.3.4 注意事项

虽然 `%` 格式化在这些场景中很实用，但仍有一些需要注意的地方：

1. **限制功能：** `%` 格式化没有 `.format()` 和 `f-string` 的高级功能，如嵌套字段、类型转换等。

    ```python
    user = {
        "profile": {
            "name": "Alice",
            "age": 30
        }
    }
    
    # 嵌套字段：直接一路取到 profile 里的 name / age
    print("Name: {0[profile][name]}, Age: {0[profile][age]}".format(user))  # 0 代表变量 user
    # 输出：Name: Alice, Age: 30
    ```

    你还可以结合对象属性 + 下标混用（更“嵌套”）：

    ```python
    class User:
        def __init__(self, name, age):
            self.profile = {"name": name, "age": age}
    
    u = User("Alice", 30)
    
    print("Name: {0.profile[name]}, Age: {0.profile[age]}".format(u))
    # 输出：Name: Alice, Age: 30
    ```

    f-string 的“嵌套取值”：

    ```python
    user = {"profile": {"name": "Alice", "age": 30}}
    
    print(f"Name: {user['profile']['name']}, Age: {user['profile']['age']}")
    # 输出：Name: Alice, Age: 30
    ```

    **%** 做不到真正嵌套字段，只能“先取值再塞进去”（对比示例）。

    % 没有 `{0[profile][name]}` 这种“路径式取值”，只能你自己先取出来：

    ```python
    user = {"profile": {"name": "Alice", "age": 30}}
    
    print("Name: %s, Age: %d" % (user["profile"]["name"], user["profile"]["age"]))
    # 输出：Name: Alice, Age: 30
    ```

    或者用“字典按键”方式（仍然不算嵌套字段，因为不能写 profile.name 这种路径）：

    ```python
    data = {"name": "Alice", "age": 30}
    print("Name: %(name)s, Age: %(age)d" % data)
    "Name: (name)data, Age: (age)data"
    "Name: data(name), Age: data(age)"
    "Name: data[name], Age: data[age]"
    "Name: data[name], Age: data[age]"
    ```

    

2. **多参数复杂性：** 当需要格式化多个变量时，需要使用元组包裹，代码稍显冗长。

    ```python
    print("Name: %s, Age: %d" % ("Alice", 30))
    ```

3. **不建议用于新代码：** 在现代代码中，`.format()` 或 `f-string` 通常是首选，只有在特定场景下才推荐 `%`。

#### 6.3.5 那什么时候选择使用呢？

- 当字符串中本身包含 `{}`，并需要保留这些占位符时，`%` 字符串格式化是更优的选择。
- 它避免了与 `.format()` 和 `f-string` 的语法冲突，同时保持了字符串的直观性和完整性。
- 典型场景包括动态生成代码、与模板语言交互、或外部系统交互。

**推荐实践：根据需求灵活选择工具，确保代码的可读性和简洁性。**

### 6.4 f 和 format、% 的优缺点

`format` 和 `%` 都像模版，提前做好模版后面有需要时可以直接使用；

而 `f` 就像在银行当中，柜员边问你边登记，不能提前做好模版。



## 7. 字符串不可变性

字符串是不可变的，不可以改变字符串中的任何元素，如需改变字符串中的元素，则需要新建一个字符串。

```python
s = "hello bornforthis"
s[0] = "a"

# ---output---
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson3.py", line 2, in <module>
    s[0] = "a"
TypeError: 'str' object does not support item assignment
```

::: tip 辛承泽学员上课时补充，添加日期：2025 年 10 月 5 日 18:52:43 

:::

不妨尝试一下：想要让用户输入得到的任意字符串的开头，都替换成我们想要的开头（比如：a），那么应该如何实现呢？

- 不需要实现用户输入，还没讲解；

- 不要像辛同学这样写：

    ```python
    s = "hello bornforthis"
    s = "aello bornforthis"
    ```

    为什么不能这么写呢？——因为，这么写其实可以说：不用学编程了！这个是需要人工实现的，防止你不理解，我说清楚一些：用户输入的是别的字符串内容呢？你还是得人工来看，来替换！那学习计算机还有什么意义、价值呢？

    我们要实现的是可以复现、运行的程序！

    好好思考，加油！

接下来，来看看具体如何实现。使用 `.replace()` 方法如下：

```python
s = "hello bornforthis"
new_s = s.replace('h', 'a', 1)
print(new_s)

# ---output---
aello bornforthis
```

除了使用 replace 还可以使用字符串拼接：

```python
s = "hello bornforthis"
news = "a" + s[1:]
print(news)

# ---output---
aello bornforthis
```

## 8. 字符串转义

在 Python 中，字符串转义（Escape Sequences）允许你在字符串中表示那些不便直接输入的特殊字符，例如换行符、制表符或引号等。下面将详细介绍 Python 字符串转义的概念、常用转义字符、原始字符串以及其它需要注意的细节。

### 8.1 字符串转义的基本概念

在 Python 的字符串中，反斜杠（`\`）用作转义字符，用来引入特殊字符。如果直接在字符串中输入某些字符可能会引起歧义或无法表达出某些控制字符，此时就需要使用转义序列来明确表示它们的含义。

例如：

- 直接在字符串中写入换行符会使文本分成两行，但你可以使用 `\n` 来表示换行符，而不必直接敲击回车键。

- 如果你想在字符串中使用引号，但又不希望字符串提前结束，就可以使用转义字符来处理。（当然，单双号混用也可以解决）

    - 提示🔔：就是前面讲解字符串为何同时存在单双引号、三引号创建字符串的原因时，提到的：`'I am bornforthis.cn'` 可以在英语中简化成：`'I'm bornforthis.cn'` 此时的字符串在英语表达层面是正确的，但是在 Python 字符串语法中是错误的。左侧最开始的单引号（`'`）和第二次出现的单引号提前形成配对。（`'I'`）但是这个字符串不该在此结束！应该在字符串 `.cn'` 时结束，这次是正确的。故而，解决思路就是需要在此字符串外围，使用不同于字符串内部的引号。（`"I'm bornforthis.cn"`）。好，现在回顾完毕！

        我们接着解释这定义，使用转义符如何解决：`'I\'m bornforthis.cn'` 这样，字符串中的 `\'` 就不再是 Python 字符串语法中的单引号（`'`）而是单纯的一个单引号符号。


**Ok！现在是总结时刻，上面整体还是太偏理论了，这不是我的风格。一句话就能解释转义：转义符（`\`） 后面跟随的符号，都将失去原有的 Python 语法功能，变成纯粹的字面意义符号。**

### 8.2 常用转义字符表

| 转义字符 | 含义                               | 例子                     |
| -------- | ---------------------------------- | ------------------------ |
| `\\`     | 反斜杠符号，为了在字符串中得到 `\` | `s = "bor\\nforthis"`    |
| `\b`     | 退格，类似删除键                   | `s = "bornff\borthis"`   |
| `\n`     | 换行                               | `s = "bornfor\nthis"`    |
| `\t`     | 制表符                             | `s = "born\tfor\tthis"`  |
| `r`      | 取消转义「R 和 r」都可以           | `s = r"born\tfor\tthis"` |

### 8.3 代码示例

面是 Python 中最常用的转义字符及其作用：

- **`\\`**：反斜杠本身（因为 `\` 是转义符，所以想在字符串中保留反斜杠（`\`） 则需要使用）

    ```python
    s = "bor\\nforthis"
    print(s)
    
    # ---output---
    bor\nforthis
    ```

- `\t`：制表符（Tab 键效果）

    ```python
    s = "born\tfor\tthis"
    print(s)
    
    # ---output---
    born    for    this
    ```

- `\b`：退格（类似删除键）

    ```python
    s = "bornff\borthis"
    print(s)
    
    # ---output---
    bornforthis
    ```

- `\n`：换行符（）

    ```python
    s = "bornfor\nthis"
    print(s)
    
    # ---output---
    bornfor
    this
    ```

- **`\'`**：单引号（在单引号字符串中，保留引号）

    ```python
    print('It\'s a beautiful day!')
    
    # ---output---
    It's a beautiful day!
    ```

- **`\"`**：双引号（在双引号字符串中，保留双引号）

    ```python
    print("He said, \"Hello!\"")
    
    # ---output---
    He said, "Hello!"
    ```

**注意**：上面的转义字符并不只能使用一次，可以尽情的使用，例如：`s = "bornfor\n\n\n\nthis"`。

### 8.4 原始字符串（Raw String）

在某些场景中（如正则表达式），你可能希望字符串中的反斜杠不被解释为转义字符。此时可以在字符串前加上 `r` 或 `R`，表示这是一个原始字符串，其中的反斜杠将保持原样。例如：

```python
print(r"Hello\nBornforthis.cn")  # 大写 R 也是可以的

# ---output---
Hello\nBornforthis.cn
```

**注意：** 原始字符串不能以单个反斜杠结尾，因为反斜杠会逃逸结尾的引号，从而导致语法错误。

### 8.5 实际应用中的注意事项

- **引号的嵌套：** 当字符串内部需要包含与外层引号相同的字符时，可以使用转义序列或采用另一种引号形式。

    ```python
    print("He said: \"Python is awesome!\"")
    # 或者
    print('He said: "Python is awesome!"')  # 利用单双引号混用
    ```

- **长字符串和多行字符串**：使用三引号（`'''` 或 `"""`）可以创建多行字符串，但转义字符依然有效。

    ```python
    multiline = """This is line one.\nThis is line two."""
    print(multiline)
    
    # ---output---
    This is line one.
    This is line two.
    ```

- **原始字符串在正则表达式中的应用**：原始字符串常用于正则表达式，避免连续多个反斜杠的困扰。

    ```python
    import re
    pattern = r"\d+"  # 如果不使用 r，则需要如此编写字符串："\\d+"
    result = re.findall(pattern, "There are 123 apples")
    print(result)
    
    # ---output---
    ['123']
    ```

Python 的字符串转义机制极大地增强了字符串表达的灵活性和可读性。通过掌握常用转义字符、原始字符串和 Unicode 及其他进制的转义方法，你可以更高效地处理文本数据，并在编写代码时减少语法错误和歧义。无论是在简单的文本输出还是复杂的正则表达式处理上，正确使用字符串转义都是一项非常重要的技能。

## 9. 字符串的连接

对于一个以上的字符串，我们想要实现拼接在一起时，可以使用 `+` 号运算符来实现。例如：

~~在 Python 中，当我们需要将两个或多个字符串拼接在一起时，可以使用 `+` 运算符。例如：~~

```python
s1 = 'born'
s2 = 'forthis.cn'
print(s1 + s2)  # 形成了一个字符串
print(s1, s2)  # 依然输出两个独立的字符串，中间由空格分隔
```

运行上述代码，输出结果为：

```python
bornforthis.cn
born forthis.cn
```

此外，字符串也支持乘法运算符 `*`，用于重复输出字符串。例如：

```python
s1 = '*-love-'
print(s1 * 10)
```

执行后，输出结果为：

```python
*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-
```

现在，假设我们希望在上述重复输出的字符串末尾额外添加一个 `*`，使输出结果如下：

~~我想在上面的输出添加末尾加一个 `*` 怎么办呢？~~

```python
原本:*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-
目标:*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-*-love-*
```

~~**思考一下，如何实现。**~~

**思考一下，如何实现这一效果？**

**可以把你能想到的方法，都写出来。**

可以利用 `print` 函数的 `end` 参数，修改代码如下：

```python
s1 = '*-love-'
print(s1 * 10, end='*')
```

这样，输出字符串的末尾就会多出一个 `*`。

## 10. 读取用户输入

### 10.1 input() 基本使用

在 Python 中，`input()` 函数用于获取用户输入。

~~使用 `input()` 获取用户输入。~~

```python
user_input = input()
print(user_input)

# ---output---
bornforthis.cn
bornforthis.cn
```

### 10.2 input() 使用输入提示

上述代码存在一个小问题：在运行时，程序并不会明确提示用户需要输入什么内容，尤其是对于非程序员用户来说，这种交互方式并不直观。

~~但是上面的代码，有点小问题：在运行的时候并不能很直观的知道，程序需要我们输入，何况非程序员用户呢？~~

![](https://blog.images.bornforthis.cn/docs-images/sha256/d8/d865402222c2a9e8b1509c87d616f01e59db0eae2e948aecb43cfb36c26bc057.png)

~~如何解决？——使用输入提示。~~

如何优化这一点？——使用**输入提示**。

::: tip Agent Toast 彭俊潇（混血） 补充日期：2025 年 11 月 17 日

如果按照之前学习的内容，则可以使用 print 函数提前给用户输出一个提示。

```python
print("请输入内容并按下回车↩︎：")
user_input = input()
print(user_input)
```

不过，在实际运行当中你会发现：光标不是在这句话 `请输入内容并按下回车↩︎：` 的后面，而是下面。

那基于现在的代码，我们想要光标直接显示在 `请输入内容并按下回车↩︎：` 后面，该如何实现呢？——好好思考一下。

![](https://blog.images.bornforthis.cn/docs-images/sha256/a9/a94f9a74cb442862a81df9e5398c1dde3b7b01bed1ba880f1cb8672511fb9d1f.png)

使用当前所学，好好思考如何实现。

**提示**：

- **<span style="color:orange">如果没有思路，可以想想这个光标为什么会跑到输出的下面？</span>**
- 写到此处时，想到电视剧《以法之名》中的：谁在栽赃，谁在陷害。这句话现在可以这么说：谁在干活？干活的有什么特点？

至少，你在我的提示之后：应该（必须！）要想到是 print 函数在干活，那么 print 函数有什么特点呢？——会默认结尾换行！

找到问题之后，就简单了。直接把 print 函数的结尾修改不就可以了，继续思考看看代码如何实现。

相信你已经花费足够时间思考，可以看下面的代码实现了：

```python
print("请输入内容并按下回车↩︎：", end='')
user_input = input()
print(user_input)


# ---output---
请输入内容并按下回车↩︎：学编程找 AI悦创，网站：bornforthis.cn
学编程找 AI悦创，网站：bornforthis.cn
```

如果勤奋的话，还可以加一个输出提示更完善：

```python
print("请输入内容并按下回车↩︎：", end='')
user_input = input()
print("用户输入内容：", user_input)


# ---output---
请输入内容并按下回车↩︎：学编程找 AI悦创，网站：bornforthis.cn
用户输入内容： 学编程找 AI悦创，网站：bornforthis.cn
```

:::

~~`input()` 函数里面支持我们写入字符串进行提示。~~

`input()` 允许传入一个字符串参数，作为用户输入的提示信息：

```python
user_input = input('Enter your name: >>> ')
print("User input name:", user_input)

# ---output---
Enter your name: >>> bornforthis.cn
User input name: bornforthis.cn
```

![这样就很直观了](https://blog.images.bornforthis.cn/docs-images/sha256/cc/cca5a0a6ed5891d19546a9d55243136d6be858b645392c148aa1b61994a0b403.png)

这样，用户就能清楚地知道该输入什么，提高了交互体验。

### 10.3 input() 的特点

#### 10.3.1 input() 得到类型皆为字符串「str」

使用 `input()` 得到的返回值类型始终是字符串，不论是输入的数据类型是什么。和之前讲数字型一样，我们使用 IPython 来操作。

打开命令行输入：ipython 即可进入。

```python
In [2]: type(input(':>>>'))  # 使用 type 检测 input 获取用户输入之后的数据类型
:>>>bornforthis.cn
Out[2]: str

In [3]: type(input(':>>>'))
:>>>12
Out[3]: str

In [4]: type(input(':>>>'))
:>>>12.1
Out[4]: str

In [5]: type(input(':>>>'))
:>>>(1, 2, 3, 4)
Out[5]: str

In [6]: type(input(':>>>'))
:>>>[1, 2, 3, 4]  
Out[6]: str

In [7]: type(input(':>>>'))
:>>>{1, 2, 3, 4, 5}
Out[7]: str

In [8]: type(input(':>>>'))
:>>>{'a': 19, 'b': 20}
Out[8]: str

In [9]: type(input(':>>>'))
:>>>True
Out[9]: str
```

从上面的示例中可以看出，**`input()` 接收的所有输入内容，都会被当作字符串处理**。如果希望获取特定类型的数据（如整数、浮点数、列表等），就需要进行显式转换。

~~通过上面的代码示例，我们可以知道：通过 `input()` 获取用户输入，得到的数据类型都是**字符串**。~~

~~得知 `input()` 的特点后，如何解决这个问题呢？——用户如何实现：直接输入原有的类型并得到原有的类型。~~

得知 `input()` 的特点后，如何将用户输入的数据恢复成原始类型呢？——如何实现：直接输入原有的类型并得到原有的类型。

那么，下面介绍两种方法。

#### 10.3.2 方法一：强制类型转换

可以使用 Python 的内置类型转换函数，如 `int()`、`float()`、`bool()` 等，将 `input()` 获取的字符串转换为特定类型：

```python
In [10]: n = int(input(':>>>'))
:>>>12

In [11]: type(n)
Out[11]: int
```

但需要注意，某些转换可能会出现问题：

```python
In [13]: s = list(input(':>>>'))
:>>>[1, 2, 3, 4, 5]

In [14]: s  # 直接转换为 list，会将输入字符串的每个字符拆分成列表元素
Out[14]: ['[', '1', ',', ' ', '2', ',', ' ', '3', ',', ' ', '4', ',', ' ', '5', ']']

In [15]: type(s)
Out[15]: list

In [16]: b = bool(input(':>>>'))
:>>>True

In [17]: b
Out[17]: True

In [18]: type(b)
Out[18]: bool
```

上面的代码，我演示了 Python 中一部分的数据类型（列表、布尔值），从结果来看并不是完全成功适配的。你可以自己编写代码测试并观察一下结果。（字典、元组、集合）

在测试的时候，注意及时的观察和总结：有些会报错、有些不会报错。对于报错的，显然不能直接使用。而没有报错的，可以观察特点，没准未来以后会用到某种强制转换后的结构！（这就是研究的原则，靠悟）

::: tip 补充分析-日期：2025 年 11 月 24 日 Agent Toast

使用 list 函数强制转换列表之后，我们不仅仅要查看 type 的结果，type 的结果虽然得到的是 list 类型。但是我们还需要进一步查看强制转换之后的结果，是否符合我们的预期？——明显的不符合的，虽然类型是列表。但是结果明显不是我们期待的 `[1, 2, 3, 4, 5]` ，而是得到了把原本字符串 `'[1, 2, 3, 4, 5]'` 内容，按每个字符进行拆分转换的结果。

:::

这里要着重分析一下 bool 的强制转换结果，对于如下代码：

```python
b = bool(input(':>>>'))
```

我们需要思考两个问题：

- 问题一：为什么会得到 True？
- 问题二：什么情况下才能得到 False？

我们来一一分析一下：

**问题一：** 对于 `input()` 函数，我们知道会一直得到字符串。所以，bool 函数转换的是把字符串转换成对应的布尔值。

而转换标准：所有非空的在 bool 函数转换下都是 True，只有空的情况下才会是 False。

```python
In [9]: b = bool(input(':>>>'))
:>>>False

In [10]: b
Out[10]: True
```

对于上面的代码，你就算输入 False 也会得到 True。原因也非常简单：因为字符串非空！

**问题二：** 从上面的转换标准可知，只要字符串为空即可。那就是在获取用户输入时，直接不输入回车即可。

```python
In [11]: b = bool(input(':>>>'))
:>>>

In [12]: b
Out[12]: False
```

**适用场景**：

- 适用于整数（`int`）、浮点数（`float`）、布尔值（`bool`）、字符串（string，本身得到的就是字符串）。
- **不适用于** 复杂数据类型（如列表、元组、字典、集合等）。

- ~~适合：数字「整数、浮点数」、字符串、布尔型~~
- ~~不适合：列表、元组、字典、集合~~

::: info Think🧐「添加日期：2025 年 11 月 24 日 17:28:14」

这里我只是测试了一部分数据类型，并且为你提供了对应的结论。不过为了更好的学习效果，还是要激发自己的勤奋与思考、研究，多测试测试其它代码，看看其它数据类型在强制转换中具体表现如何。——是会成功？还是会成功但不符合预期，或拥有其它特性，亦或者是报错？这些都是等你你去亲自研究、探索、总结。记得在评论区告诉我，与你共同进步～

:::

#### 10.3.3 方法二：使用 eval()

1. `eval()` 的妙用：`eval()` 可以解析用户输入，并将其转换回原始数据类型：

```python
In [28]: s = eval(input(':>>>'))
:>>>12

In [29]: type(s), s
Out[29]: (int, 12)

In [30]: s = eval(input(':>>>'))
:>>>[1, 2, 3]

In [31]: type(s), s
Out[31]: (list, [1, 2, 3])

In [32]: s = eval(input(':>>>'))
:>>>(1, 2, 3)

In [33]: type(s), s
Out[33]: (tuple, (1, 2, 3))

In [34]: s = eval(input(':>>>'))
:>>>{1, 2, 3}

In [35]: type(s), s
Out[35]: (set, {1, 2, 3})

In [36]: s = eval(input(':>>>'))
:>>>True

In [37]: type(s), s
Out[37]: (bool, True)

In [38]: s = eval(input(':>>>'))
:>>>{'a': 1, 'b': 2}

In [39]: type(s), s
Out[39]: (dict, {'a': 1, 'b': 2})
```

上面代码的测试都成功通过了吧，也都正确得到了原本的数据类型。那么接下来在继续阅读之前，思考一下上面还有什么数据类型忘记测试了？你进行测试一下，看看有什么问题。

**注意**：`eval()` 看似是一个便捷的解决方案，但它存在一定风险。

2. `eval()` 伴随着的问题

~~上面的代码看似解决了我们所遇到的问题，但是也伴随着我们需要注意的问题。~~

尽管 `eval()` 可以直接将字符串转换回原始数据类型，并且看似解决了我们所遇到的问题。但如果输入的内容不是有效的 Python 表达式，就可能引发错误。例如：

```python
In [40]: s = eval(input(':>>>'))
:>>>string  
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
Cell In[40], line 1
----> 1 s = eval(input(':>>>'))

File <string>:1

NameError: name 'string' is not defined
```

稍微分析一下 `eval()` 的功能“大概”实现原因：

- input 获取用户输入，得到字符串类型。

```python
In [44]: s = input(':>>>')
:>>>[1, 2, 3]

In [45]: s
Out[45]: '[1, 2, 3]'
```

从上面的代码可以得知，正常使用 input 函数时，得到的数据会在数据外面添加双引号。（`'[1, 2, 3]'`）此时，请你思考一下：这个字符串（`'[1, 2, 3]'`）在什么情况下（也就是怎么处理）会变成原本的列表类型呢？（思考后，再继续阅读！）

……

……

……

好，我为了尽可能给我的读者留下阅读思考的空间，我在上面添加了三个省略号。以防你直接看到我接下来的解释，我也希望你是真正思考后才继续阅读的。

当直接把字符串 `'[1, 2, 3]'` 外围的单引号（`''`）去掉时，那此数据就恢复成原本的数据类型了——列表。

故而，我们可以推测：eval 大概率实现的是去掉字符串左右两边的引号。

::: warning

- 这个地方 eval 或许不是按我说的实现，但是为了让你们更好理解原理，先这样来。
- 探究得到的原理，是否真的是 eval 的原理也不重要，很多时候我们不用太较真，我们要学会的是自己如何探索、研究，把这个学会。让自己逻辑自洽，或许这个研究结果不对（相对于：标准），但是自己理解是首要的。——添加日期：2025 年 10 月 6 日

:::

**所以，为什么会导致上面的报错呢？**

我们先来写一下代码，然后来逐步分析🧐：

```python
In [56]: # Step 1: 探究 eval 的实现原理

In [57]: s = input(':>>>')
:>>>[1, 2, 3]  

In [58]: s
Out[58]: '[1, 2, 3]'

In [59]: s = eval(input(":>>>"))
:>>>[1, 2, 3]

In [60]: s
Out[60]: [1, 2, 3]

In [61]: # eval 大体是实现把字符串外面的引号去掉，实现变回原本的数据类型

In [62]: # Step 2: 探究报错原因

In [63]: s = input(':>>>')
:>>>look

In [64]: s
Out[64]: 'bornforthis'

In [65]: # 我们可以观察输出的是 'bornforthis'，如果直接去掉 bornforthis 左右的引号将变成：变量。但变量没有被定义，所以会报错。

In [66]: s = eval(input(":>>>"))
:>>>bornforthis
---------------------------------------------------------------------------
NameError                                 Traceback (most recent call last)
Cell In[66], line 1
----> 1 s = eval(input(":>>>"))

File <string>:1

NameError: name 'bornforthis' is not defined
```

**上面的代码带你分析和编写了一遍，现在文字来带你一步步分析：**

1. 获取用户输入：`s = eval(input(':>>>'))`
2. 其中 input 会得到 `'string'`，而通过 `eval` 转换之后，就类似于 `string` 变量。但是我们实际上我们在我们之前的代码中，并没有创建 string 这个变量。
3. 故而报错，当然不通过上面的分析也可以大概预料到问题，因为报错很直观：`NameError: name 'string' is not defined` 。
4. 所以，解决方法很直白：
    1. **方法一**：一种是你在获取用户输入之前直接提前创建一个叫做 string 的变量；「显然，不是我们想要的」
    2. **方法二**：另一种则是输入的时，有意加上单引号或者双引号、三引号。

**对于上面提到的方法一、方法二你有什么想法呢？**

对于方法一：我们都要用户输入了，数据是需要来自用户输入，显然不是需要这种方法。但并不是说这种方法没有作用，在某些场景会用到。（例如：用户可以输入想要查看当前代码中，某个变量具体对应的表达式或值。）

对于方法二：我提前加一个引号，input 也会给它一个引号，最后有两对引号，eval 拆掉一对引号，还剩一对引号。——成功得到字符串。

```python
In [1]: string = input(":>>>")
:>>>"bornforthis.cn"       

In [2]: string
Out[2]: '"bornforthis.cn"'

In [3]: eval(string)  # 等价 eval('"bornforthis.cn"')
Out[3]: 'bornforthis.cn'
```

接下来，来看文章的代码示例。

**方法一的代码示例1：**

```python
In [50]: string = 'hello this string'

In [51]: s = eval(input(':>>>'))
:>>>string

In [52]: s
Out[52]: 'hello this string'

In [53]: num = 12

In [54]: s = eval(input(':>>>'))
:>>>num

In [55]: type(s), s
Out[55]: (int, 12)
```

**方法一的代码示例2:**

```python
In [71]: bornforthis = '我提前创建一个 bornforthis 变量'  # 方法一

In [72]: s = eval(input(":>>>"))
:>>>bornforthis

In [73]: s
Out[73]: '我提前创建一个 bornforthis 变量'

In [74]: s = eval(input(":>>>"))  # 方法二：
:>>>'look'

In [75]: s
Out[75]: 'look'
```

**方法二代码示例：**

```python
In [56]: s = eval(input(':>>>'))
:>>>'string'

In [57]: type(s), s
Out[57]: (str, 'string')
```

**注意**：这个地方对于 eval 的具体实现不论是否正确，这不是我们要关心和讨论的！我要关心的是，我一步步带你思考的这个过程。（思维链）是要借此内容，带你一步步、一点点的训练起你们的逻辑能力、思考能力。

3. `eval()` 小技巧

**任务要求**：获取户输入，实现两位的加减乘除。

```python
In [58]: eval(input(':>>>'))
:>>>1 + 1
Out[58]: 2  # eval(input(':>>>')) == eval('1 + 1') == 2

In [59]: eval(input(':>>>'))
:>>>2 - 1
Out[59]: 1  # eval(input(':>>>')) == eval('2 - 1') == 1

In [60]: eval(input(':>>>'))
:>>>9 * 8
Out[60]: 72  # eval(input(':>>>')) == eval('9 * 8') == 72

In [61]: eval(input(':>>>'))
:>>>9 / 3
Out[61]: 3.0
```

::: tip 补充：所以我们可以发现，eval 除了会把字符串两边的引号去掉，还会执行引号内的代码！——2026 年 2 月 8 日 14:54:43 GYZ 伯克利

:::

#### 10.3.4 为什么不推荐使用 eval？

尽管 `eval()` 很强大，但它存在**安全风险**。我们更推荐使用需要转换什么类型，则使用什么类型内置函数进行转换，因为这样能让自身不断的进步明确自己想要什么！eval 削弱了对这部分的思考以及训练。

例如，恶意用户可以输入危险代码，从而危及系统安全：

```python
In [70]: eval(input(':>>>'))
:>>>__import__('os').system('rm -rf /')  # 危险操作

# Windows 可以使用如下命令
# rd /s /q "完整文件夹路径"
# rd /s /q "C:\Users\huangjiab\Desktop\test_folder"
# rd: remove directory
# /s: 删除目录及其所有子文件
# /q: 静默模式（不询问确认）
# "...": 防止路径中有空格
# Windows 测试使用如下：
In [70]: eval(input(':>>>'))
:>>>__import__('os').system('del /f /q *.* & for /d %i in (*) do @rd /s /q "%i"')
```

**我稍微把上面的命令拆解一下：**

- `rm`（remove）：删除文件或目录的命令。
- `-r`（recursive）：递归删除目录及其所有子文件和子目录。
- `-f`（force）：强制删除，无需确认提示。
- `/`（根目录）：Linux 文件系统的根目录，所有文件和目录的起点。

**为什么这个命令极其危险？：**

- **无法撤销**：一旦执行，数据几乎无法恢复，除非有完整的备份。

- **破坏整个系统**：删除 `/` 目录意味着所有的操作系统文件都会被移除，系统将完全崩溃，甚至无法重新启动。

- **权限问题**：

    - 如果是普通用户执行，可能会因为权限问题无法删除某些关键系统文件。

    - 如果是**超级用户（root）执行**，系统会彻底损坏，甚至远程服务器也可能瞬间宕机。

**类似的危险命令：**

| 命令                          | 破坏性                   |
| ----------------------------- | ------------------------ |
| `rm -rf /`                    | 删除整个系统             |
| `rm -rf *`                    | 删除当前目录下的所有文件 |
| `dd if=/dev/zero of=/dev/sda` | 清空整个硬盘             |
| `mkfs.ext4 /dev/sda1`         | 格式化分区（擦除数据）   |

你如果电脑是 Mac、Linux 可以“试一试”。（当然还是**别试**，把 `/` 改成特定路径的文件名也是可以的，这个可以试一试。）

::: tip 补充代码，彭俊潇 日期：2025 年 11 月 29 日

可以方便的演示查找文件夹、并输入文件夹名称。实现特定文件夹删除：

```python
while True:
    user_input = eval(input(':>>>'))
    print('user input:', user_input)
```

- `ls .`
- `rm -rf xxx`

:::

#### 10.3.5 eval 削弱编程思考能力？

::: tip Leo 香港科技大学 IT 日期：2025 年 9 月 19 日

有**些人活了一辈子，都不知道自己想要什么！** 同样的，在编写代码时也是一样的，很多人不知道自己想要什么函数。

要想得明白、活的清楚，多思考，多做！

> 我们要清楚的知道，自己想要什么！

:::

这里着重讨论一下为什么说：使用 `eval()` 可能会**削弱编程思考能力**，不利于良好的编码习惯呢？

这是因为 `eval()` 在执行时，会直接解析并运行输入的字符串，而不会强制要求开发者明确指定数据类型。这种做法虽然便捷，但可能导致以下问题：

1. **忽视数据类型管理**

    在编写代码时，数据类型的控制至关重要。明确的数据类型转换（如 `int()`、`float()` 等）可以帮助开发者更好地理解和掌控数据流，而 `eval()` 让这些步骤变得模糊，可能导致对数据类型缺乏深入思考。

2. **降低代码的可读性和可维护性**

    代码的可读性和可维护性是编程的重要考量。使用 `eval()` 可能会让数据类型的转换变得隐式，增加理解成本，特别是当代码规模变大或交由他人维护时，可能会引发额外的困惑和错误。

3. **潜在的安全风险**

    `eval()` 会直接执行输入内容，如果用户输入恶意代码（如 `__import__('os').system('rm -rf /')`），可能造成严重的安全漏洞。而使用显式的类型转换则能避免执行不受信任的代码，从根本上提高程序的安全性。

相比之下，推荐使用**明确的类型转换函数**，例如：

```python
n = int(input("Enter a number: "))
```

~~这样，开发者可以清楚地知道数据类型，代码也更安全、更易维护。~~

这样做的好处是：

- **明确数据类型**：开发者可以清楚地知道 `n` 变量的类型，而不会有歧义。
- **提高代码安全性**：避免执行用户输入的恶意代码，降低安全风险。
- **增强可读性和可维护性**：代码逻辑更加清晰，方便调试和后续扩展。

综上，虽然 `eval()` 在某些场景下可能提供便利，但在日常开发中，**使用显式的类型转换更符合良好的编码习惯，更安全、更可靠**。

**<span style="color:orange">我们只有不断的探索、研究、思考，明确自己想要什么</span>**。或许我们此刻研究的是 eval 是否安全或适用，以及探究为什么要明确数据类型转换。这个看似和生活没有关系，实则非常密切：**<span style="color:orange">我们终其一生，也需要知道自己想要什么！每一步的思考，都算数。</span>**

#### 10.3.6 浅谈 input 的设计理念

我们可以稍微的思考一下：**为什么 `input()` 函数的实现，是把获取得到的数据全部变成字符串？又为什么不直接按 `eval()` 来开发实现呢？**

::: tip Leo 上课添加，日期：2025 年 9 月 19 日 21:44:33

我们都不清楚用户会输入什么数据，设置为列表：不合适、设置成字典：也不合适……

所以设置成字符串最合适，因为字符串可以容纳各种字符类型。至于具体怎么操作，交给程序员！

---

补充：彭俊潇回答

如果设置成 eval 写法，inout 不便于输入中文。——想法是对的，但是要知道：中文英文可以添加引号包裹呀。

:::

在 Python 中，使用 `input()` 函数时，它会从标准输入（通常是键盘）读取一行文本，并且这一行文本会被当作字符串处理。这是因为用户输入的内容可能包括各种字符，包括数字、字母和符号。由于 `input()` 函数不能预知用户将要输入什么类型的数据，它默认将输入内容作为字符串返回，这样可以保持最大的灵活性和兼容性。

并且从用户的角度来看，有时输入数据的用户不懂代码，`input()`  函数这样处理，可以极大程度的便利用户。

如果你需要将这个字符串转换为其他数据类型，比如整数或浮点数，你可以使用相应的转换函数，例如 `int()` 或 `float()`，来进行转换。这里是一个简单的例子：

```python
# 使用 input() 获取用户输入，并存储为字符串
user_input = input("请输入一个数字: ")

# 将字符串转换为整数
number = int(user_input)

# 打印转换后的整数
print("输入的整数是:", number)
```

在这个例子中，如果用户输入的不是一个有效的整数，`int()` 函数会抛出一个 `ValueError`。因此，在实际使用中，通常需要加上错误处理来确保程序的健壮性。







## 11. 小试牛刀

### 11.1 题目

获取用户连续输入的两个整数，得到两个整数的和。

**要求：**

- 只能使用一个 input 函数；
- 用户输入格式：num1 num2
- 输出计算结果；

**输入：**

```python
5 6
```

**输出：**

```python
11
```

认真阅读一下上面的题目，以及一步步思考一下如何实现。

### 11.2 易错点「日期：2025 年 12 月 1 日」

很多学员经常会想：直接使用字符串的提取方法，直接实现得到两位数字。例如下面的代码：

```python
nums = input()
first_num = int(nums[0])
second_num = int(nums[-1])
result = first_num + second_num
print(result)
```

上面的代码有什么问题？——乍眼一看没有问题，但实际上：当用户输入的两组数字不是 10 以内的单个数字，就会出现加法结果错误❌。

例如：

```python
19 2
3
```

正常来说应该得到：`21`，但是现在得到的是 `3`。因为 `nums[0]、nums[-1]` 只能得到个位的数字（`num[0]` 得到 `1`，`num[-1]` 得到 `2`，不是一组数字。——这是导致错误的核心点。

### 11.3 解答

我们可以按照题目的要求来，先使用一个 input 函数，然后再观察下一步：

```python
nums = input(":>>>")  # 为符号题目要求：只能使用一个 input 函数
```

题目说：输入两个整数并以空格间隔，我们接着实现：

```python
nums = input("输入两个整数，并以空格间隔:>>>")  # 改进输入提示
print(f"得到用户输入：{nums}")  # 输出观察
```

运行上面的代码，并测试：

```python
输入两个整数，并以空格间隔:>>>3 22
得到用户输入：3 22
```

由前面讲解的知识可知：input 得到的所有类型都是字符串，所以我们需要明确目标、观察特点。

1. **目标**：（大目标）为了实现计算两个整数的结果，（小目标）首先需要得到两个整数。
2. **特点**：由空格间隔；

从上面的目标及特点可知，我们需要想办法拆解出两个整数，并且需要处理空格。——也就是：**以空格间隔来区分两个整数，那么 `split()` 是最合适的，默认以空格分割也可以指定间隔来分割**。现在代码如下：

```python
nums = input("输入两个整数，并以空格间隔:>>>")  # 改进输入提示
# print(f"得到用户输入：{nums}")  # 输出观察
num_list = nums.split()
print(f"分割后的结果：{num_list}")
```

我们来测试：

```python
输入两个整数，并以空格间隔:>>>3 22
分割后的结果：['3', '22']
```

那么现在我们需要得到列表中的 0 号位、1 号位的数据并进行赋值。（Python 的所有数据提取方式，大部分都是类似的。（字符串、列表、元组））

```python
nums = input("输入两个整数，并以空格间隔:>>>")  # 改进输入提示
num_list = nums.split()
num1 = num_list[0]
num2 = num_list[1]
print(num1 + num2)
```

现在，上面的代码正式完成了吗？你去运行看看，思考一下。然后带着结论或者疑惑继续阅读：

```python
输入两个整数，并以空格间隔:>>>3 22
322
```

为什么不是 25 而是 322？——因为，input 得到的是字符串类型，列表存储的数据也是字符串数字，所以直接进行加法（`+`）运算会得到拼接后的结果。

问题知道了，那么我们应该怎么解决呢？解决方法，早就讲过了，好好思考！别急着往下阅读要答案。

使用**强制转换**即可，代码如下：

```python
nums = input("输入两个整数，并以空格间隔:>>>")  # 改进输入提示
num_list = nums.split()
num1 = int(num_list[0])
num2 = int(num_list[1])
print(num1 + num2)
```

此刻运行，后的结果如下：

```python
输入两个整数，并以空格间隔:>>>3 22
25
```

成功解决！

**提示**：上面使用了问题拆解的思维：**<span style="color:orange">把大问题，拆解成小问题。当一个或多个小问题完成时，大问题也基本解决了！</span>** 尽可能掌握起来。

接下来我直接提供 eval 的相关实现代码，按照惯例还是提醒你：自行思考 eval 如何实现！

**代码1:**

```python
nums = eval(input(':>>>').replace(' ', '+'))
print(nums)
```

**代码2:**

```python
eval('1' + '2')
# step1: '1' + '2' -> '12'
# step2: eval('1' + '2') -> eval('12')
# step3: 12
string = input(':>>>')
a, b = string.split()
print(eval('int(a) + int(b)'))
```

::: tip Leviathan Toastakovich 上课写出的方法，日期：2025 年 12 月 1 日 17:30:01 

解决方法非常符合题目，比原有的 split 更好！惊艳到我了～

```python
nums = input('Enter numbers separated by space: ')
space_position = nums.find(' ')
first_num = int(nums[:space_position])
second_num = int(nums[space_position+1:])
result = first_num + second_num
print(result)
```

:::

祝贺你完成字符串的全部内容！

































