---
title: 02-文件读取
date: 2024-06-30 12:39:12
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
watermark: true
---

## 0. Data

```python
你好，我是悦创。
Python、Java、C、C++、C#、JS、Web、AI、AIGC
tip dev server has restarted, please refresh your browser

1 2 3 4 5 6 7 8 9 0
1 2 3 4 5 6 7 8 9 0
```



## 1. open

### 1.1 read() 读取全部内容

```python
f = open('data.txt')
content = f.read()
print(content)
```

### 1.2 readline() 只读取一行

::: code-tabs

@tab Code1

```python
f = open('data.txt')
content = f.readline()
print(content)
```

@tab Code2

```python
f = open('data.txt')
content = f.readline()
print(content)

content = f.readline()
print(content)

content = f.readline()
print(content)
```

@tab Practice_Code

```python
# 用 loop 输出全部文件内容
f = open('data.txt')
# content = f.readline()
# print(content)
#
# content = f.readline()
# print(content)
#
# content = f.readline()
# print(content)
for l in f:
    print(l)


f = open('data.txt')
content = f.readline()

while bool(content):
    print(content)
    content = f.readline()
```



:::

### 1.3 readlines

```python
f = open('data.txt')
content = f.readlines()

print(content)
```

## 解题技巧

1. 观察数据特点
    1. 类型
    2. 结构
2. 

## data

```python
f = open('data.csv', 'r', encoding="utf-8")
lines = f.readlines()
# print(lines)
line1, line2 = lines
f.close()
# print(line1, type(line1))
# print(line2, type(line2))
line1_list = line1.split(',')
line2_list = line2.split(',')
# print(type(line1_list[0]))
# print(line2_list)
save = open("data.csv", "a+")
save.write('\n')
for index in range(len(line1_list)):
    col = int(line1_list[index]) + int(line2_list[index])
    # print(col)
    if index == len(line1_list) - 1:
        r = str(col) + ','
        new_r = r.strip(",")
        save.write(new_r)
        continue
    save.write(str(col) + ',')

f.close()


# lst = ["李雷", "韩梅梅", "马冬梅"]
# for index in range(len(lst)):
#     print(lst[index])
```



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







