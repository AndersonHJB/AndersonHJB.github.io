---
title: 03-String Alignment in Python f-string
date: 2023-03-19 16:05:18
author: AI悦创
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
---

Text Alignment in Python is useful for printing out clean formatted output. Some times the data to be printed varies in length which makes it look messy when printed. By using **String Alignment** the output string can be aligned by defining the alignment as left, right or center and also defining space (width) to reserve for the string.

**Approach :** We will be using the f-strings to format the text. The syntax of the alignment of the output string is defined by ‘<‘, ‘>’, ‘^’ and followed by the width number.

**Example 1 :** For Left Alignment output string syntax define ‘<‘ followed by the width number.

::: details zh

在 Python 中，文本对齐对于输出整洁的格式化内容很有用。有时需要打印的数据长度不一，这会使打印出来的内容看起来凌乱。通过使用字符串对齐，可以通过定义输出字符串的对齐方式（左对齐、右对齐或居中对齐）以及为字符串保留的空间（宽度）来实现对齐。

方法：我们将使用 f-字符串来格式化文本。输出字符串对齐的语法由“`<`”、“`>`”、“`^`”和跟随的宽度数字定义。

示例1：对于左对齐的输出字符串语法，定义“`<`”后跟宽度数字。

:::

```python
# here 20 spaces are reserved for the
# particular output string. And the string
# is printed on the left side
print(f"{'Left Aligned Text' : <20}")
```

**Output :**

```python
Left Aligned Text   
```

**Example 2 :** For Right Alignment output string syntax define ‘>’ followed by the width number.

```python
# here 20 spaces are reserved for the
# particular output string. And the string
# is printed on the right side
print(f"{'Right Aligned Text' : >20}")
```

**Output :**

```python
Right Aligned Text
```

**Example 3 :** For Center Alignment output string syntax define ‘^’ followed by the width number.

```python
# here 20 spaces are reserved for the
# particular output string. And the string
# is printed in the middle
print(f"{'Centered' : ^10}")
```

**Output :**

```python
 Centered 
```

**Example 4 :** Printing variables in Aligned format

> 例4:以对齐格式打印变量

```python
# assigning strings to the variables
left_alignment = "Left Text"
center_alignment = "Centered Text"
right_alignment = "Right Text"

# printing out aligned text
print(f"{left_alignment : <20}{center_alignment : ^15}{right_alignment : >20}")
```

**Output :**

```python
Left Text            Centered Text           Right Text
```

**Example 5 :** Printing out multiple list values in aligned column look.

> 例5:在对齐的列外观中打印多个列表值。

```python
# assigning list values to the variables
names = ['Raj', 'Shivam', 'Shreeya', 'Kartik']
marks = [7, 9, 8, 5]
div = ['A', 'A', 'C', 'B']
id = [21, 52, 27, 38]

# printing Aligned Header
print(f"{'Name' : <10}{'Marks' : ^10}{'Division' : ^10}{'ID' : >5}")

# printing values of variables in Aligned manner
for i in range(0, 4):
	print(f"{names[i] : <10}{marks[i] : ^10}{div[i] : ^10}{id[i] : >5}")
```

**Output :**

```python
Name        Marks    Division    ID
Raj           7         A        21
Shivam        9         A        52
Shreeya       8         C        27
Kartik        5         B        38
```

format and float 

```python
# assigning strings to the variables
left_alignment = "Left Text"
center_alignment = "Centered Text"
# right_alignment = "Right Text"
right_alignment = 102

# printing out aligned text
print(f"{left_alignment : <20}{center_alignment : ^15}{right_alignment : >20.3f}")

print("{:<20}{:^15}{:>20.2f}".format(left_alignment, center_alignment, right_alignment))
```







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
