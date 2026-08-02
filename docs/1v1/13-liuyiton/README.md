---
title: 01-第一节课-变量「刘奕彤」
icon: python
date: 2022-11-24 19:51:04
author: AI悦创
isOriginal: true
category: 
    - Python 1v1
tag:
    - Python 1v1
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

## 1. 新建目录

![image-20221124195358570](https://blog.images.bornforthis.cn/docs-images/sha256/fc/fcf19446b2a3ad6fd47e08cd785d0e0b1f87029b9c03060aee5276f537989d4c.png)

> 为我们的目录「文件夹」命名。

::: tip

推荐命名方法：英文、下划线、不要用空格

现阶段可以先用：中文命名文件夹或者是用中文的拼音拼写。

:::

输入好名称后，回车。

![image-20221124200058935](https://blog.images.bornforthis.cn/docs-images/sha256/16/16989ff5b8e501776cb6e100a05b0df17f2d82e46f3c8c881aebd13630904503.png)

![image-20221124200112169](https://blog.images.bornforthis.cn/docs-images/sha256/11/1101bacd1c239e5eaf840d96e635367ad7ff048ff2278ae518ff2dc891c17d6c.png)

## 2. 新建 Python 代码

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/09/097d4b3d0d8b5f18d2584ec4b25329a11033ee8706609e2622db782530b0df6e.png" alt="image-20221124200236825" style="zoom: 33%;" />

输入文件名称后，回车创建。

::: tip

文件名称先使用日期创建：2022112401

**解析：**

- 20221124：日期（2022年11月24日）
- 01：今天上课创建的第几个文件。

以后还是用英文比较好哦！不要带有空格创建 Python 文件。

:::

## 3. 初探 print() 函数

```python
print("静夜思")
print("床前明月光，疑是地上霜。")
print("举头望明月，低头思故乡。")

print("jing ye shi")
print("chuang qian ming yue guang，yi shi di shang shuang。")
print("ju tou wang ming yue，di tou si gu xiang。")
```



## 4. 变量「Variable」

### 4.1 从字面意思去理解变量

- 变：变化
- 量：有大小的

### 4.2 从生活中来理解变量

![image-20221124204202666](https://blog.images.bornforthis.cn/docs-images/sha256/57/571578d999649fdd1c09db07c594ee53847729fe688a8e6c788e77176b7b0766.png)

::: tip

**变量就是在计算机的内存上开辟空间。**

ps：信封在当前空间中，开辟了一个空间叫做：信封，来装东西；冰箱也是如此。

:::

### 4.3 变量的特点「覆盖」

![image-20221124204839231](https://blog.images.bornforthis.cn/docs-images/sha256/c4/c4a5e230cdb086ef2d1db81c3b1c89915ec9c599c78ce242336f7bb396e5dfd0.png)

**代码实例：**

```python
var = 98
var = 95
var = 78
print(var)
```

输出：

```python
78
```

```python
var = 98
print(var)
var = 95
print(var)
var = 78
print(var)
```

输出：

```python
98
95
78
```

```python
var = 98
print(var)
var = 95
print(var)
var = 78
print(var)
b = var + 10  # 78 + 10
print(b)
```

输出：

```python
98
95
78
```

## 5. 赋值语句

### 5.1 变量名 = 表达式

![image-20221124210023216](https://blog.images.bornforthis.cn/docs-images/sha256/e0/e06b698b1abf569ef8815435ea0fdf0c9a4dd0619c5eba7083aa1062e9152769.png)

### 5.2 变量的运行顺序

::: tip

变量的运行顺序：从上到下，从左到右

:::

![image-20221124210442546](https://blog.images.bornforthis.cn/docs-images/sha256/ec/ecfb99c22e5e424ce17daa88fa09c72300f54ee762221707b2fd48d343481970.png)

## 6. 作业输出三角形

```python
    *
  *****
*********
```

## 7. 变量的赋值过程「2022年11月30日」

```python
x = 1
x = x + 10
print(x)  # 11

name1 = "Hugo"
name2 = name1
print(name2)  # Hugo

name1 = "aiyc"
name1 = "Hugo"
print(name1)  # Hugo
```

输出：

```python
11
Hugo
Hugo
```

## 8. 进阶赋值的方法

### 8.1 普通赋值方法

```python
a = 1
b = 1
c = 1
print(a)
print(b)
print(c)
```

输出：

```python
1
1
1
```

### 8.2 并排输出

```python
a = 1
b = 1
c = 1
# print(a)
# print(b)
# print(c)
print(a, b, c)  # 并排输出，默认空格间隔
```

输出：

```java
1 1 1
```

### 8.3 多个变量赋值相同的值

```python
a = b = c = 1
print(a, b, c)  # 并排输出，默认空格间隔
```

输出：

```java
1 1 1
```

### 8.4 同时给多个变量赋予不同的值

```python
a, b, c = 1, 2, 3
print(a, b, c)  # 并排输出，默认空格间隔
```

输出：

```python
1 2 3
```

## 9. 变量的命名规则

### 9.1 区分大小写

```python
a = 10
A = 1
print(a)
```

输出：

```python
10
```

### 9.2 数字不能开头

```python
1a = 10
print(a)
```

报错信息：

```python
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonPCCoder/第二节课/2022113001.py", line 1
    1a = 10
     ^
SyntaxError: invalid syntax
```

::: tip 数字不能开头

会报错！

除了开头，其他位置都可以放。

:::

```python
a112121 = 10

print(a112121)
```

输出：

```python
10
```

### 9.3 变量名，不能有空格

![image-20221130172424476](https://blog.images.bornforthis.cn/docs-images/sha256/58/5888c48db4b24d81da87caaf71d2b540d6b0226fcc86411bf4cb880058059e84.png)

**怎么解决呢？**

我们使用下划线 `_`：

```python
# 用户名称
user_name = "hugo"  # 变量名不能有空格
print(user_name)
```

输出：

```python
hugo
```

### 9.4 关键词不能做变量名

```python
help("keywords")
```

输出：

```python
Here is a list of the Python keywords.  Enter any keyword to get more help.

False               break               for                 not
None                class               from                or
True                continue            global              pass
__peg_parser__      def                 if                  raise
and                 del                 import              return
as                  elif                in                  try
assert              else                is                  while
async               except              lambda              with
await               finally             nonlocal            yield
```

### 9.5 不要使用 Python 的内置函数名称做变量名

```python
print = "Hugo"
print(print)
```

报错代码：

```python
Traceback (most recent call last):
  File "/Users/huangjiabao/GitHub/SourceCode/MacBookPro16-Code/PythonPCCoder/第二节课/2022113001.py", line 2, in <module>
    print(print)
TypeError: 'str' object is not callable
```

## 10. 作业

![image-20221130175607547](https://blog.images.bornforthis.cn/docs-images/sha256/74/741f5e699fca1607693d7ff9f0a910f7c5feedf1a2518871585d99497522a7b3.png)



## 11. 作业讲解

![image-20221207194913147](https://blog.images.bornforthis.cn/docs-images/sha256/b9/b9a5d190f744058a9fb073cc83bf8fde26bed448e3378b92820266a6493913a6.png)

编程如何实现呢？

```python
Austin = "Coke"  # 哥哥 Coke
Jaden = "Juice"  # 弟弟 Juice
print("Austin：", Austin)
print("Jaden：", Jaden)
# 是不是要创建一个空杯子
cup = Jaden
Jaden = Austin
Austin = cup
print("Austin：", Austin)
print("Jaden：", Jaden)
```

```python
a = 1
b = 2
c = 3

# a = 3
# b = 1
# c = 2
```

![image-20221207203240033](https://blog.images.bornforthis.cn/docs-images/sha256/d7/d71d5524e5463ac65c7064501020e2bb6e2bb86ed977d847e7d076bf91ad205d.png)

```python
a = 1
b = 2
c = 3
d = 4

# a = 4
# b = 1
# c = 2
# d = 3
```

![image-20221207204312637](https://blog.images.bornforthis.cn/docs-images/sha256/29/29abc4effcfa93876b1676f0191f20aed01beeff4ce39742e208b21718a3a751.png)

![image-20221207205011738](https://blog.images.bornforthis.cn/docs-images/sha256/0e/0e2941d17dda44d366d63780beef9bb365d3e3e2f4c0bd887bffc063a5cb053e.png)

::: details 注意⚠️

从上到下，从右到左执行的

::: 



## 注意点⚠️

1. 括号必须是英文括号

![image-20221124201437627](https://blog.images.bornforthis.cn/docs-images/sha256/26/2692e513d0592405ba5f9b53124d96b96c684a393e3d444d757bad6d0ef46f42.png)

2. 必须是英文双引号

3. 变量创建当中是下划线，不是减号

![image-20221130173237809](https://blog.images.bornforthis.cn/docs-images/sha256/02/02e1d744a7d0ff95f498938480ddcbd35dc4fdcc95c8a20210f9f71692cf56fe.png)

[https://video.aiyc.top/GuGO/](https://video.aiyc.top/GuGO/)

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
