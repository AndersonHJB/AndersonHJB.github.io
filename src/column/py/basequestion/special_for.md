---
title: 03-for 循环专项练习
date: 2022-05-19 20:30:00
author: AI悦创
isOriginal: true
category: Python 私教练习题【基础】
tag:
    - Python 基础练习题
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
editLink: true
prev: special_yunsuanfu.md
next: special_for.md
backToTop: true
toc: true
---



## 1. 九九乘法表

要求输出结果：

```python
1x1=1    
1x2=2    2x2=4    
1x3=3    2x3=6    3x3=9    
1x4=4    2x4=8    3x4=12    4x4=16    
1x5=5    2x5=10    3x5=15    4x5=20    5x5=25    
1x6=6    2x6=12    3x6=18    4x6=24    5x6=30    6x6=36    
1x7=7    2x7=14    3x7=21    4x7=28    5x7=35    6x7=42    7x7=49    
1x8=8    2x8=16    3x8=24    4x8=32    5x8=40    6x8=48    7x8=56    8x8=64    
1x9=9    2x9=18    3x9=27    4x9=36    5x9=45    6x9=54    7x9=63    8x9=72    9x9=81
```

::: code-tabs#shell

@tab for-for

```python
# 九九乘法表
for i in range(1, 10):
    for j in range(1, i+1):
        print('{}x{}={}\t'.format(j, i, i*j), end='')
    print()
```

@tab while-while

```python
# 九九乘法表
i = 1
while i <= 9:
    j = 1
    while (j <= i):  # j 的大小是由 i 来控制的
        print(f'{i}*{j}={i * j}', end='\t')
        j += 1
    print('')
    i += 1
```

@tab while-for

```python
i = 1
while i <= 9:
    for j in range(1, i + 1):  # range()函数左闭右开
        print(f'{i}*{j}={i * j}', end=' ')
    i += 1
    print()
```

@tab for-while

```python
for i in range(1, 10):
    j = 0
    while j < i:
        j += 1
        print(f"{i}*{j}={i * j}", end=' ')
    print()
```

@tab 定义一个变量 a

```python
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for i in a:
    j = 1
    while j <= i:
        print(f'{i}*{j}={i * j}', end='\t')
        # %-3d 是控制输出结果占据3位，且从左面开始对齐
        j += 1
    print()
```

@tab 使用递归

```python
def multiplication(n):
    if n < 10:
        for m in range(1, n + 1):
            print(f"{m}*{n}={m * n}", end="\t")
        print()
        multiplication(n + 1)

multiplication(1)
```

@tab 使用 1 行语句

```python
print('\n'.join([' '.join(["%2s x%2s = %2s" % (j, i, i * j) for j in range(1, i + 1)]) for i in range(1, 10)]))
```

上面的一行代码优化之后：

```python
print('\n'.join([' '.join([f"{j}x{i}={i * j}" for j in range(1, i + 1)]) for i in range(1, 10)]))
```

:::

::: details 合并答案

```python
# 第一种方式：for 循环实现【for-for 嵌套】
# 九九乘法表
for i in range(1, 10):
    for j in range(1, i+1):
        print('{}x{}={}\t'.format(j, i, i*j), end='')
    print()


# 第二种方式：while【while-while 嵌套】
# 九九乘法表
i = 1
while i <= 9:
    j = 1
    while (j <= i):  # j 的大小是由 i 来控制的
        print(f'{i}*{j}={i * j}', end='\t')
        j += 1
    print('')
    i += 1

# 第三种方式：while【while-for 嵌套】
i = 1
while i <= 9:
    for j in range(1, i + 1):  # range()函数左闭右开
        print(f'{i}*{j}={i * j}', end=' ')
    i += 1
    print()

# 第四种方式：while【for-while 嵌套】
for i in range(1, 10):
    j = 0
    while j < i:
        j += 1
        print(f"{i}*{j}={i * j}", end=' ')
    print()
 
# 第五种方式：定义一个变量 a
a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for i in a:
    j = 1
    while j <= i:
        print(f'{i}*{j}={i * j}', end='\t')
        # %-3d 是控制输出结果占据3位，且从左面开始对齐
        j += 1
    print()
   
# 未学到函数的，可以选择阅读
# 第六种方式：使用递归
def multiplication(n):
    if n < 10:
        for m in range(1, n + 1):
            print(f"{m}*{n}={m * n}", end="\t")
        print()
        multiplication(n + 1)

multiplication(1)

# 第七种方式：使用 1 行语句
print('\n'.join([' '.join(["%2s x%2s = %2s" % (j, i, i * j) for j in range(1, i + 1)]) for i in range(1, 10)]))
# 上面的一行代码优化之后：
print('\n'.join([' '.join([f"{j}x{i}={i * j}" for j in range(1, i + 1)]) for i in range(1, 10)]))
```

:::

## 2. 编写循环，寻找列表最大值

```python
lst = [1, 4, 2, 666, 777, 88, 9.1, 90]
```





欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)













