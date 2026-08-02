---
title: 如何在 Python 中将字符串转换为 DateTime 对象
date: 2023-02-08 23:07:38
author: AndersonHJB
isOriginal: true
icon: python
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true

backToTop: true
toc: true
head:
  - - meta
    - name: keywords
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
  - - meta
    - name: description
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
---

::: tabs

@tab ZH

![如何在 Python 中将字符串转换为 DateTime 对象](https://blog.images.bornforthis.cn/docs-images/sha256/6f/6fb081ca21305f432ce09dc7af1b520d9d2dcfb240efb2745f632234610b8781.jpeg)

当你从原始数据中获取日期时，它们通常采用字符串对象的形式。但是在这种形式中，你不能访问日期的属性，例如年、月等。

该问题的解决方案是将字符串对象解析（或转换）为 datetime 对象，以便 Python 可以将其识别为日期。然后你可以提取任何你想从中获得的属性。

本教程将介绍如何在 Python 中将字符串转换为日期时间对象。让我们开始吧。



## datetime 格式代码

在我们学习如何将字符串转换为日期之前，你应该了解 Python 中 datetime 对象的格式化代码。

当你需要将字符串转换为日期时，这些前提知识将很有用。我们将查看一些最常见的格式代码，你可以随时将字符串转换为日期。

以下是一些最常见的：

- `%Y` - 用于表示年份，范围从 0001 到 9999
- `%m` - 用于表示一年中的月份，范围从 01 到 12
- `%d` - 用于表示月份中的天数，范围从 01 到 31
- `%H` — 用于以 24 小时格式表示一天中的小时，范围从 00 到 23
- `%I` — 用于以 12 小时格式表示一天中的小时，范围从 01 到 12
- `%M` — 用于表示一小时中的分钟，范围从 00 到 59
- `%S` — 用于表示一分钟内的秒数，范围也从 00 到 59

我们先介绍这些日期格式代码，但 Python 文档中还有更多内容，你可以点击[这里](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes)查看更多。

## 如何将字符串转换为 DateTime 对象

请注意，将字符串转换为日期时首先要考虑的是确保字符串格式正确。

为了将字符串转换为日期，它必须满足以下条件。

- 首先，字符串中的每个元素必须用空格、字母或符号（例如 `/` `&` 、`%` `#` `-` 等）与其他元素分隔。
- 字符串中要解析为年、月或日的元素必须与格式代码的长度相同。字符串中的元素不得超出格式代码的范围。例如，`%Y` 代码需要 4 个数字作为年份传递，其范围是 0001 – 9999（例如，09 不起作用——你需要 2009）。

让我们看一些字符串到日期转换的示例。首先，我们将字符串 “2019/08/09” 转换为日期。

我们需要在 Python 中导入 datetime 库才能实现这一点，可以键入以下内容：

```python
from datetime import datetime

date_string = "2018/08/09"

format = %Y/%m/%d #specifify the format of the date_string.

date = datetime.strptime(date_string, format)
print(date)
```

让我们再次查看上面的代码，以确保我们了解发生了什么。

format 变量声明要传递给解析器的日期字符串的格式（帮助我们转换日期的函数）。我们必须提前知道格式，也就是在我们将它传递给解析器之前。

在这个示例中，字符串的格式为 “2019/08/09”。

字符串中的第一个元素代表年份，其格式代码为 `%Y`。然后我们在月份后面有一个正斜杠，其格式代码为 `%m`。然后我们有另一个正斜杠，最后是日期，其格式代码是 `%d`。

因此，我们必须在格式变量中包含正斜杠符号，就像它在字符串中出现的方式一样。如果一切都正确完成，格式应该是 `“%Y/%m/%d”`。

`datetime.strptime` 方法是解析器，它将帮助我们将传入的 `date_string` 转换为日期。它需要两个参数：日期字符串和格式。

当我们在那之后打印它时，它会看起来像这样。

![图片由作者制作](https://blog.images.bornforthis.cn/docs-images/sha256/6c/6c24674c98a3baa09d7961cd1542255e9585b0836afaf5a30374dbbed24e58c2.png)

我们可以决定从中检索想要的任何属性。例如，如果我们希望只获取年份，可以通过键入 `date.year` 来做到这一点，它只会打印出年份。

了解了这一点，让我们再看一个比上面更复杂的例子。

## 示例 – 如何将字符串转换为日期

我们将此字符串对象转换为日期：`"2018-11-15T02:18:49Z"`。

现在从它的外观来看，我们可以看到这个日期字符串有年、月、日、小时、分钟和秒。所以我们需要做的就是创建正确的格式和其中的符号。

```python
from datetime import datetime

date_string = "2018-11-15T02:18:49Z"

format = "%Y-%m-%dT%H:%M:%SZ

date = datetime.strptime(date_string, format)
print(date)
```

我们可以看到它没有什么太复杂的地方，只需遵循日期每个部分的格式，并传入你在日期字符串中找到的任何相应符号或字母。

不要被字符串中的符号或字母分心。如果你做的一切正确并打印出来，你应该有这样的东西：

![image-200](https://blog.images.bornforthis.cn/docs-images/sha256/15/15276ef998a5155748055b9fbad93a19b4aca1e68f98fe910057fedfa5430a78.png)

确保不要将格式代码 `%m` 与 `%M` 混淆。小 `%m` 用于月份，而大 `%M` 用于分钟。

## 小结和学习更多

现在我们已经完成了本教程。你学习了如何将字符串转换为日期格式。

一旦你学会了格式代码，你就可以开始了。请确保你遵守转换规则，例如，字符串必须用空格、字母或符号分隔，字符串范围不得大于或小于格式代码的范围。

感谢你阅读本文！

@tab EN

## How to Convert a String to a DateTime Object in Python

![How to Convert a String to a DateTime Object in Python](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/pexels-christina-morillo-1181359--3-.jpg)

When you get dates from raw data, they're typically in the form of string objects. But in this form, you can't access the date's properties like the year, month, and so on.

The solution to this problem is to parse (or convert) the string object into a datetime object so Python can recognized it as a date. And then you can extract any underlying attributes you want to get from it.

This tutorial will teach you how to convert a string to a datetime object in Python. Without further ado, let's get started.

## DateTime Format Codes

Before we learn how to convert strings to dates, you should understand the formatting codes of datetime objects in Python.

These prerequisites will be useful whenever you need to convert a string to a date. We will look at some of the most common formatting codes you'll work with anytime you want to convert string to date.

Here are some of the most common:

- `%Y` — This is used to represent the Year and it ranges from 0001 to 9999
- `%m` — This is used to represent the month of a year and it ranges from 01 to 12.
- `%d` —  This is used to represent the days of the month and ranges from 01 to 31.
- `%H` — This is used to represent the hours of the day in a 24-hour format and ranges from 00 to 23.
- `%I` — This is used to represent the hours of the day in a 12 hour format and ranges from 01 to 12.
- `%M` — This is used to represents minutes in an hour and ranges from 00 to 59.
- `%S` — This is used to represents the seconds in a minute and ranges from 00 to 59 as well.

We'll stop here for date format codes, but there are many more in the Python documentation. You can click [here](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes) to see more.

## How to Convert a String to a DateTime Object

Note that the first thing to consider whenever converting a string to date is to make sure that the string is in the right format.

In order to convert a string to a date, it must satisfy the following conditions.

- Firstly, each element in the string must be separated from the others either by a space, letter, or symbol such as `/` `&` , `%` `#` - and so on.
- The element in the string to be parsed as the year, month, or day must be of the same length as the format code. The element in the string must not exceed the range of the format code. For example the `%Y` code requires 4 numbers to be passed as the year and its range is 0001 – 9999 (so 09, for example, wouldn't work – you need 2009).

Let's look at some examples of string-to-date conversions. First, we'll convert the string "2019/08/09" to the date.

We need to import the datetime library in Python to be able to achieve this. We can do that by typing the following:

```python
from datetime import datetime

date_string = "2018/08/09"

format = %Y/%m/%d #specifify the format of the date_string.

date = datetime.strptime(date_string, format)
print(date)
```

Let's go over the above code again to make sure we understand what's going on.

The format variable declares the format of the date string to be passed to the parser (the function that will help us convert the date). We must be aware of the format ahead of time, that is before we pass it to the parser.

In this case, the string is in the format "2019/08/09".

The first element in the string represents a year, for which the format code is `%Y`. Then we have a forward slash followed the month, for which the format code is `%m`. Then we have another forward slash, and finally the day, for which the format code is `%d`.

As a result, we must include the forward slash symbol in the format variable in the same way that it appears in the string. If everything is done correctly, the format should be `"%Y/% m/%d."`

The method `datetime.strptime` is the parser that will help us convert the `date_string` we passed into it as a date. It requires two parameters: the date string and the format.

When we print it after that, it will look like this.

![Image by Author](https://blog.images.bornforthis.cn/docs-images/sha256/6c/6c24674c98a3baa09d7961cd1542255e9585b0836afaf5a30374dbbed24e58c2.png)

We can decide to retrieve any attributes we want from it. For example if we wish to get the year only, we can do that by typing `date.year` and it will print out just the year.

Now that we understand that, let’s go over one more example that is more complex than the above.

## Example – how to convert a string to a date

We will convert this string object to a date: `"2018-11-15T02:18:49Z"`.

Now from the looks of it, we can see that this date string has year, month, day, hours, minutes and seconds. So all we need to do is create the proper format and the symbols in it.

```python
from datetime import datetime

date_string = "2018-11-15T02:18:49Z"

format = "%Y-%m-%dT%H:%M:%SZ

date = datetime.strptime(date_string, format)
print(date)
```

We can see that there is nothing too complex about it. Just follow the format for each part of the date and also pass in any respective symbols or letters you find in the date string.

Do not get distracted by the symbols or letters in the string. If you do everything correctly and print it you should have something like this:

![image-200](https://blog.images.bornforthis.cn/docs-images/sha256/15/15276ef998a5155748055b9fbad93a19b4aca1e68f98fe910057fedfa5430a78.png)

Make sure you don't confuse the format code `%m` with `%M`. The small `%m` is used for months while the big `%M` is used for minutes.

## Conclusion and Learning More

Now we've gotten to the end of this tutorial. You learned how to convert a string into a date format.

Once you learn the format codes, you'll be good to go. Just make sure you adhere to the principles governing which kind of string can be converted.

For instance you have to remember that the string must be separated with something which can either be a space, letter, or symbol. Also, the string range must not be greater or smaller than the range of the format code.

Thank you for reading.

:::







欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
