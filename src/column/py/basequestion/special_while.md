---
title: 04-while 专项练习
date: 2022-08-08 07:42:13
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
prev: special_for.md
next: special_while.md
backToTop: true
toc: true
---

## 1. 寻找可以被整除的程序

### 1.1 Question：输出 100～200 之间可以把 3 整除的数据

方法一：

```python
divided = 100
divisor = 3
index = 0
while divided <= 200:
    print("index: {}".format(index))
    if divided % 3 == 0:
        print(f"{divided} 可以整除 3 。商为 {int(divided / 3)}")
    divided += 1
    index += 1
```

输出效果：

```python
/Users/huangjiabao/GitHub/MacBookPro16-Code/PythonCoder/venv/bin/python /Users/huangjiabao/GitHub/MacBookPro16-Code/PythonCoder/StudentCoder/05Cody/lesson01/lesson01.py 
index: 0
index: 1
index: 2
102 可以整除 3 。商为 34
index: 3
index: 4
index: 5
105 可以整除 3 。商为 35
index: 6
index: 7
index: 8
108 可以整除 3 。商为 36
index: 9
index: 10
index: 11
111 可以整除 3 。商为 37
index: 12
index: 13
index: 14
114 可以整除 3 。商为 38
index: 15
index: 16
index: 17
117 可以整除 3 。商为 39
index: 18
index: 19
index: 20
120 可以整除 3 。商为 40
index: 21
index: 22
index: 23
123 可以整除 3 。商为 41
index: 24
index: 25
index: 26
126 可以整除 3 。商为 42
index: 27
index: 28
index: 29
129 可以整除 3 。商为 43
index: 30
index: 31
index: 32
132 可以整除 3 。商为 44
index: 33
index: 34
index: 35
135 可以整除 3 。商为 45
index: 36
index: 37
index: 38
138 可以整除 3 。商为 46
index: 39
index: 40
index: 41
141 可以整除 3 。商为 47
index: 42
index: 43
index: 44
144 可以整除 3 。商为 48
index: 45
index: 46
index: 47
147 可以整除 3 。商为 49
index: 48
index: 49
index: 50
150 可以整除 3 。商为 50
index: 51
index: 52
index: 53
153 可以整除 3 。商为 51
index: 54
index: 55
index: 56
156 可以整除 3 。商为 52
index: 57
index: 58
index: 59
159 可以整除 3 。商为 53
index: 60
index: 61
index: 62
162 可以整除 3 。商为 54
index: 63
index: 64
index: 65
165 可以整除 3 。商为 55
index: 66
index: 67
index: 68
168 可以整除 3 。商为 56
index: 69
index: 70
index: 71
171 可以整除 3 。商为 57
index: 72
index: 73
index: 74
174 可以整除 3 。商为 58
index: 75
index: 76
index: 77
177 可以整除 3 。商为 59
index: 78
index: 79
index: 80
180 可以整除 3 。商为 60
index: 81
index: 82
index: 83
183 可以整除 3 。商为 61
index: 84
index: 85
index: 86
186 可以整除 3 。商为 62
index: 87
index: 88
index: 89
189 可以整除 3 。商为 63
index: 90
index: 91
index: 92
192 可以整除 3 。商为 64
index: 93
index: 94
index: 95
195 可以整除 3 。商为 65
index: 96
index: 97
index: 98
198 可以整除 3 。商为 66
index: 99
index: 100

Process finished with exit code 0
```

方法二：

```python
divided = 100
divisor = 3
index = 0
while divided <= 200:
    print("index: {}".format(index))
    if divided % 3 == 0:
        print(f"{divided} 可以整除 3 。商为 {int(divided / 3)}")
        divided += 1
        index += 1
    else:
        divided += 1
        index += 1
```



### 1.2 Question：输出前十个可以整除 3 的数据

代码：

```python
divided = 100
divisor = 3
index = 0
while divided <= 200 and index < 10:
    print("index: {}".format(index))
    if divided % 3 == 0:
        print(f"{divided} 可以整除 3 。商为 {int(divided / 3)}")
    index += 1
    divided += 1
```



输出效果：

```python
102可以整除3。商为34
105可以整除3。商为35
108可以整除3。商为36
111可以整除3。商为37
114可以整除3。商为38
117可以整除3。商为39
120可以整除3。商为40
123可以整除3。商为41
126可以整除3。商为42
129可以整除3。商为43
```

## 2.编写用户登陆程序

### 2.1 用户数据

| 序号 | 用户名 | 密码 |
| ---- | ------ | ---- |
| 01   | aiyc   | 123  |
| 02   | cava   | 456  |
| 03   | Austin | 9879 |
| 04   | Jaden  | 7675 |

### 2.2 答案

```python
data_dict = {"aiyc": "123", "cava": "456"}
while True:
    username = input("请输入你的账户名称：")
    password = input("请输入你的密码：")
    if username in data_dict and password == data_dict.get(username, False):
        print("login Successful!")
        break
    else:
        print("请重新输入。")
```





::: info 悦创金句

程序员就是连接人与机器之间的桥梁——AI悦创

:::

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

