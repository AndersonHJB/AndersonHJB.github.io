---
title: 卡耐基梅隆大学Python作业答案
date: 2024-09-07 09:50:32
author: AI悦创
isOriginal: true
icon: blog
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

## 1. 学员提问🙋

`![](./Question1.assets/image-20240907095119367.png)`

## 2. 题目

Background: A number is an ein number (short for even increasing number) if the even digits in the number are strictly increasing from left to right. The odd digits in the number can be in any order.

For example, 2478 is an ein number because the even digits 248 are in increasing order. However, 14236 is not an ein number, since the even digits 426 are not in increasing order. Note that 137 is also an ein number because there are no even digits, so we will say that the even digits are implicitly in order. Also note that 22 is not an ein number because repeating even digits are not increasing.

With this in mind, write the function nthEinNumber(n) that takes a non-negative int n and returns the nth ein number.

::: info

只能用 while 和 if，别的 string 相关的都不能用。

:::

![题目给出的测试](https://blog.images.bornforthis.cn/docs-images/sha256/14/145dc06037106f8ad48c97cc415b21abb387eb327cde68a14cf810f218672183.png)

## 3. 答案

```python {13}
def isEinNumber(num):
    prev_even = 10
    while num > 0:
        digit = num % 10
        if digit % 2 == 0:
            if digit >= prev_even:
                return False
            prev_even = digit
        num //= 10
    return True


# 可以找我辅导这题～每个学员实现都是不一样的，skr～


assert isEinNumber(0) == True
assert isEinNumber(1) == True
assert isEinNumber(2) == True
assert isEinNumber(10) == True
assert isEinNumber(114) == True
assert isEinNumber(238) == True
assert isEinNumber(317) == True
assert isEinNumber(1469) == True
assert isEinNumber(60) == False
assert isEinNumber(22) == False

assert nthEinNumber(0) == 0
assert nthEinNumber(2) == 2
assert nthEinNumber(10) == 10
assert nthEinNumber(99) == 114
assert nthEinNumber(185) == 238
assert nthEinNumber(245) == 317
assert nthEinNumber(1000) == 1469
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

::: details .

```python
def isEinNumber(num):
    prev_even = 10  # 设定初始值为比最大的偶数还大的值
    while num > 0:
        digit = num % 10  # 获取当前的最后一位数字
        if digit % 2 == 0:  # 如果是偶数
            if digit >= prev_even:  # 偶数必须严格小于前一个偶数
                return False
            prev_even = digit  # 更新上一个偶数
        num //= 10  # 去掉最后一位数字
    return True  # 如果所有偶数都是严格递增的，则是 ein number


def nthEinNumber(n):
    count = 0
    num = 0
    while count <= n:  # 找到第 n 个 ein number
        if isEinNumber(num):  # 检查当前数字是否是 ein number
            if count == n:  # 如果找到了第 n 个
                return num
            count += 1  # 继续寻找下一个
        num += 1  # 检查下一个数字


assert isEinNumber(0) == True
assert isEinNumber(1) == True
assert isEinNumber(2) == True
assert isEinNumber(10) == True
assert isEinNumber(114) == True
assert isEinNumber(238) == True
assert isEinNumber(317) == True
assert isEinNumber(1469) == True
assert isEinNumber(60) == False
assert isEinNumber(22) == False

assert nthEinNumber(0) == 0
assert nthEinNumber(2) == 2
assert nthEinNumber(10) == 10
assert nthEinNumber(99) == 114
assert nthEinNumber(185) == 238
assert nthEinNumber(245) == 317
assert nthEinNumber(1000) == 1469
```

:::



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
