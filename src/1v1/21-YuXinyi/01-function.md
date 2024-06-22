---
title: 01-Python函数「南开大学」
date: 2023-01-27 19:54:32
author: AI悦创
isOriginal: true
category:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - 南开大学
    - 南开大学Python辅导
tag:
    - Python
    - Python一对一教学
    - Python一对一辅导
    - Python 辅导
    - 编程一对一教学
    - 少儿编程一对一
    - 南开大学
    - 南开大学Python辅导
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
backToTop: true
toc: true
---

## 1. 实现计算器

**要求：**

1. 重复运行
2. 用户输入 q 则退出程序
3. 获取用户输入
4. 类型转换

```python
# -*- coding: utf-8 -*-
# @Time    : 2023/1/27 19:06
# @Author  : AI悦创
# @FileName: hw01.py
# @Software: PyCharm
# @Blog    ：https://bornforthis.cn/
# 计算器✅
# 重复执行
# 判断退出
# 获取用户输入✅
# 类型转换✅

def calculator(num1, num2, operation):
    """
    :param num1: int
    :param num2: int
    :param operation:
    :return: int or str
    """
    if operation == "+":
        return num1 + num2
    elif operation == "-":
        return num1 - num2
    elif operation == "/":
        return num1 / num2
    elif operation == "*":
        return num1 * num2
    else:
        return "Operation Error......"


def str_to_int_or_float(target):
    if target.count(".") == 1:
        return float(target)
    else:
        return int(target)


def main():
    while True:
        print("""请输入计算数据，输入格式：num1,num2,运算符""")
        userinput = input(":>>>").split(",")
        if len(userinput) == 1 and userinput[0].lower() == 'q':
            break
        num1, num2, operation = userinput
        # result = calculator(int(num1), int(num2), operation)
        result = calculator(str_to_int_or_float(num1), str_to_int_or_float(num2), operation)
        print(result)


# num1, num2, operation
# if __name__ == '__main__':
#     main()
main()
```

### 2. 语法点解析

### 2.1 num1, num2, operation = userinput

```python
In [1]: a, b, c = [1, 2, 3]

In [2]: a
Out[2]: 1

In [3]: b
Out[3]: 2

In [4]: c
Out[4]: 3

In [5]: lst = [1, 2, 3]

In [6]: a = lst[0]

In [7]: b = lst[1]

In [8]: c = lst[2]

In [9]: a
Out[9]: 1

In [10]: b
Out[10]: 2

In [11]: c
Out[11]: 3
```



## 作业

```python
# 猜数字游戏
# https://bornforthis.cn/tool/works/game/GuessNumber.html
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
