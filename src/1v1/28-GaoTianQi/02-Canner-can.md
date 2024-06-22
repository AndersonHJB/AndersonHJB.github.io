---
title: Canner can and Canner can v2
date: 2023-03-13 16:21:07
author: AI悦创
isOriginal: true
category: 
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
tag:
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
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
editLink: false
backToTop: true
toc: true
---

## Canner can

> 罐头

Time to write our first basic function.

> 是时候写第一个基本函数了。

Write a function `canner_can` that takes a single argument `item` in the form of a string, and returns the string `'Can you can a [STRING] as a canner can can a can?'`, where `'[STRING]'` takes the value of `item`.

> 写一个函数' canner_can '，它以字符串的形式接受一个参数' item '，并返回字符串“Can you Can a [string] as a canner Can Can a Can ?”[STRING]' '取item的值。

The following are example calls to the function (displaying the output with `print` in each case), to illustrate its functionality:

> 下面是对函数的示例调用(在每种情况下都以' print '显示输出)，以说明其功能:

```python
print(canner_can("can"))
Can you can a can as a canner can can a can?
>>> print(canner_can("apricot"))
Can you can a apricot as a canner can can a can?
>>> print(canner_can("juicy tomato"))
Can you can a juicy tomato as a canner can can a can?
```

## Interacting with Functions

> 与函数交互

Next to the **Run** button in the right window, you may have noticed a **Terminal** button. The terminal button executes your code, and then provides you with a terminal window that allows you to call any functions (or other items) defined in your code. This is handy for running your own test cases (as function calls), for debugging purposes, or just to double-check the correctness of your code before submission.

> 在右边窗口的**Run**按钮旁边，您可能已经注意到一个**Terminal**按钮。终端按钮执行代码，然后为您提供一个终端窗口，允许您调用代码中定义的任何函数(或其他项)。这对于运行您自己的测试用例(作为函数调用)，用于调试目的，或者只是在提交之前再次检查代码的正确性非常方便。

## Answer

```python
def canner_can(item):
    """" canner_can takes a string item (assumed to be an animal) and returns a string containing an important question about the animal """
    # write your code here
   
    
    return f"Can you can a {item} as a canner can can a can?"
```



## Canner can v2

Having got the basics down pat, let's beef things up a bit more, building on our first function. You might have noticed in our first example that we produced strings such as `"a apricot"` rather than `"an apricot"`. Let's fix this, based on the simple definition that the indefinite article should be `an` if it precedes a vowel, and `a` for all other inputs **(remember the empty string input!)**.

> 掌握了基本知识之后，让我们在第一个函数的基础上进一步完善它。您可能已经注意到，在我们的第一个示例中，我们生成了' "a杏" '而不是' "an杏" '这样的字符串。让我们根据一个简单的定义来解决这个问题，即如果不定冠词位于元音之前，那么它应该是“an”，而对于所有其他输入，则应该是“a”**(记住，输入是空字符串!)

Write a function `canner_can2` that takes a single argument `item` in the form of a string, and returns the string `"Can you can an [STRING] as a canner can can a can?"` (where `[STRING]` takes the value of `item`) if `item` starts with a vowel, and `"Can you can a [STRING] as a canner can can a can?"` otherwise. Note that the set of vowels in English is `a`, `e`, `i`, `o` and `u`, and that your function should be able to deal with both upper and lower-case letters.

> 写一个函数' canner_can2 '，它以字符串的形式接受一个参数' item '，并返回字符串' "Can you Can an [string] as a canner Can Can a Can ?"'(其中' [STRING] '取' item '的值)，如果' item '以元音开头，并且' '你能把[STRING]做成罐头吗?否则。请注意，英语中的元音集合是' a '， ' e '， ' i '， ' o '和' u '，并且您的函数应该能够处理大写字母和小写字母。

The following are example calls to the function (displaying the output with a `print` statement in each case), to illustrate its functionality:

> 下面是对函数的示例调用(在每种情况下使用' print '语句显示输出)，以说明其功能:

```python
>>> print(canner_can2("can"))
Can you can a can as a canner can can a can?
```

```python
>>> print(canner_can2("apricot"))
Can you can an apricot as a canner can can a can?
```

```python
>>> print(canner_can2("AARGH"))
Can you can an AARGH as a canner can can a can?
```

```python
>>> print(canner_can2(""))
Can you can a  as a canner can can a can?
```

## Seems Familiar?

> 看起来熟悉吗?

You may recall that there was an earlier problem relating to the a/an distinction. You are welcome to reuse that code as part of your solution to this problem. Also note the method is an oversimplification — e.g. *a unicorn*, *an heiress*, and for some speakers *an historical event* — but it will suffice for the purposes of this question.

> 您可能还记得前面有一个关于a/an区别的问题。欢迎您重用该代码作为解决此问题的解决方案的一部分。还要注意的是，这种方法过于简化了——例如，“独角兽”，“女继承人”，对一些发言者来说，“历史事件”——但对于这个问题的目的，它已经足够了。

## Answer

```python
def canner_can2(item):
    """" canner_can takes a string item (assumed to be an animal) and returns a string containing an important question about the animal """
    # write your code here
    word = item.lower()
    if word =='':
        return f'Can you can a {item} as a canner can can a can?'
    
    elif word[0] =='a' or word[0] =='e' or word[0]=='i' or word[0]=='o' or word[0]=='u':
        return f'Can you can an {item} as a canner can can a can?'
    
    else :
        return f'Can you can a {item} as a canner can can a can?'
```



```python
def canner_can2(item):
    """" canner_can takes a string item (assumed to be an animal) and returns a string containing an important question about the animal """
    # write your code here
    vowels = ["a", "e", "i", "o", "u"]
    # vowels = "aeiou"
    if not item:
        result = "a"
    elif item[0].lower() in vowels:
        result = "an"
    else:
        result = "a"

    return f'Can you can {result} {item} as a canner can can a can?'
```





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
