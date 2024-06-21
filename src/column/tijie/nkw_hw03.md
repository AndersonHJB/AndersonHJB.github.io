---
title: 03-HJ3 明明的随机数
date: 2022-06-25 08:10:01
author: AI悦创
isOriginal: true
category: 华为机试题解
tag:
    - 华为机试题解
icon: code
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

## 描述

明明生成了 N 个 1 到 500 之间的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出。

数据范围： 1≤*n*≤1000，输入的数字大小满足 1≤val≤500。

### 输入描述：

第一行先输入随机整数的个数 N 。 接下来的 N 行每行输入一个整数，代表明明生成的随机数。 具体格式可以参考下面的"示例"。

### 输出描述：

输出多行，表示输入数据处理后的结果

## 示例1

### 输入：

```python
3
2
2
1
```

### 输出：

```python
1
2
```

## 说明：

输入解释：
第一个数字是 3，也即这个小样例的 N=3，说明用计算机生成了 3 个 1 到 500 之间的随机整数，接下来每行一个随机数字，共 3 行，也即这 3 个随机数字为：

```python
2
2
1
```

所以样例的输出为：
```python
1
2 
```

## 答案

### 方法一

```python
n = input()
random_num_list = []
for _ in range(int(n)):
    random_num = input()
    random_num_list.append(int(random_num))
r = list(set(random_num_list))
r.sort()
for i in r:
	print(i)
```

### 方法二

```python
n = input()
random_num_list = []
for _ in range(int(n)):
    random_num = int(input())
    if random_num not in random_num_list:
    	random_num_list.append(random_num)
    else:
        pass
random_num_list.sort()
for i in random_num_list:
	print(i)
```

### 方法三

```python
while True:
    try:
        n = input()      #指定为N个数，输入
        lst = []         #指定一个空列表
        for i in range(int(n)):        #循环N次
            lst.append(int(input()))      #空集合中追加一个N个数中的某一个随机数
        uniq=set(lst)        #列表去重，但是会变成无序
        lst=list(uniq)       #集合转列表
        lst.sort()           #列表排序
        for i in lst:
            print(i)         #打印列表
    except:
        break
```





欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发，华为 Python 机试」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)





