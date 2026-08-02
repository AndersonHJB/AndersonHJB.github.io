---
title: Python 基础摸底
date: 2025-03-01 20:03:54
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
---

## 0. 说明

1. 使用在线编程平台：[https://codemark.bornforthis.cn/editor](https://codemark.bornforthis.cn/editor)
    1. 在线平台不支持文件操作，直接写代码即可。
2. 代码编写完成后，点击分享按钮生成分享链接。把生成的分享链接按题目标题：链接

## 1. 基础考察

1. 请写一段 Python 代码，定义一个变量 `x` 并赋值为 `"123"`，然后将 `x` 转换为整数类型，并输出它的平方。

2. 请编写一个程序，输入一个整数 `n`，如果 `n` 是偶数，输出 `"Even"`，否则输出 `"Odd"`。

3. 使用 `for` 循环计算 `1-100` 之间所有整数的和，并打印结果。

4. 给定列表 `nums = [3, 1, 4, 1, 5, 9, 2, 6]`，请写代码实现：

    - 将列表升序排序

    - 删除重复元素

    - 计算列表元素的平均值

5. 用户输入一个字符串，要求输出该字符串的倒序结果（例如输入 `"hello"`，输出 `"olleh"`）。

6. 已知字典 `student = {"name": "Alice", "age": 20, "score": 88}`，请：

    - 添加键值对 `"gender": "female"`

    - 更新 `score` 为 `90`

    - 删除 `age` 键，并打印最终字典

7. 编写一个名为 `is_prime(n)` 的函数，判断 `n` 是否为质数（素数）。如果是质数返回 `True`，否则返回 `False`。

9. 「稍微进阶·选做」使用递归函数实现 **斐波那契数列**（Fibonacci）：

    - 公式：`F(n) = F(n-1) + F(n-2)`，其中 `F(0) = 0, F(1) = 1`

    - 输入 `n`，返回 `F(n)`



## 2. 小项目题

### 项目1：猜数字游戏

请编写 Python 代码，读取 `data.txt` 文件的内容，并统计单词 `"Python"` **（大小写不敏感）** 在文件中出现的次数，最后输出统计结果。

::: code-tabs

@tab data.txt

```bash
Python is a popular programming language.
Many developers use Python for web development, data science, and automation.
The Python community is growing rapidly.
Some people start learning python as their first programming language.
PYTHON is widely used in machine learning and AI projects.
```

:::

**期望输出：**

```bash
单词 "Python" 在文件中出现了 5 次。
```



### 项目2：猜数字游戏

请编写一个 Python 程序，实现一个简单的**猜数字游戏**，具体要求如下：

1. **程序随机生成** 一个 `1` 到 `100` 之间的整数作为目标数字。
2. 用户有 **最多 7 次机会** 猜测目标数字。
3. 每次输入后，程序应提供反馈：
    - 如果猜测的数字 **太大**，提示 `"太大了，请再试试！"`。
    - 如果猜测的数字 **太小**，提示 `"太小了，请再试试！"`。
    - 如果猜中，提示 `"恭喜你，猜对了！"` 并终止游戏。
4. 如果用户在 7 次内 **没有猜中**，则输出 `"很遗憾，你已经用完所有机会！正确答案是: <目标数字>"`。
5. 输入错误处理：
    - 若用户输入**非数字**，应提示 `"无效输入，请输入 1-100 之间的整数！"`，并不消耗机会。
    - 若用户输入**超出范围**，应提示 `"数字超出范围，请输入 1-100 之间的整数！"`，并不消耗机会。

**示例运行**

```bash
欢迎来到猜数字游戏！我已经想好了一个 1 到 100 之间的数字，你有 7 次机会来猜它。
请输入你的猜测: 50
太小了，请再试试！
请输入你的猜测: 75
太大了，请再试试！
请输入你的猜测: 63
太大了，请再试试！
请输入你的猜测: 57
恭喜你，猜对了！
```

（若 7 次后仍未猜中）

```bash
很遗憾，你已经用完所有机会！正确答案是: 42
```



### 项目3：**Python 列表元素平方并原地更新**

请编写一个 Python 程序，要求如下：

1. **目标列表** `nums` 由一组整数构成，例如 `nums = [1, 2, 3, 4, 5]`。
2. 要求：
    - **将列表中的每个元素进行平方**。
    - **将平方后的结果存回原列表**。
    - **最后输出更新后的列表**。
3. 示例输入与输出：
    - **输入**：`nums = [1, 2, 3, 4, 5]`
    - **处理后**：`nums = [1, 4, 9, 16, 25]`
    - **输出**：`[1, 4, 9, 16, 25]`
4. **要求使用 Python 列表操作** 来完成，而不是创建新列表。









欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
