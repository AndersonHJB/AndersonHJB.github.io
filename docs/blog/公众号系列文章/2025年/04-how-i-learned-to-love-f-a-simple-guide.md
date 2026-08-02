---
title: 04-我是如何爱上 __init__.py 的：一个简单易懂的指南 😊
icon: blog
date: 2025-06-03 21:27:09
author: AI悦创
isOriginal: true
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

![](https://blog.images.bornforthis.cn/docs-images/sha256/b2/b231385d2013a06b7398196d779c4e64f976caf2666813268ab924a153b44e25.png)

你好，我是悦创。

当我第一次接触 Python 时，`__init__.py` 文件让我有些困惑。它总是神秘兮兮的，像是每个包文件夹中隐藏的秘密。随着时间推移，我才发现，这个小小的文件其实是一个强大的工具，它能帮助我们更好地组织和简化代码。以下就是一份轻松友好的指南，带你了解 `__init__.py` 的作用、用途，以及如何用它让你的项目更清晰、更易管理。



## 1. 什么是 `__init__.py`？

想象你搬进了一个新家。门口有一块欢迎垫，上面写着“你好！欢迎回家”。在 Python 中，`__init__.py` 就像这块欢迎垫，它告诉 Python：“这个文件夹是一个包，是放置相关代码的专属空间。”

## 2. 简单说：

- **标记一个文件夹为包：**

    在文件夹中添加一个 `__init__.py` 文件，就告诉 Python 这是一个包。

> **命名空间包（从 Python 3.3 起）**：你可以不写 `__init__.py`，但写上它可以让你拥有 **更多控制权**。就像训练轮和自行车的区别 🚴‍♂️

- **在导入时执行：**

    当你导入这个包时，Python 会首先执行 `__init__.py` 文件中的代码。这是设置配置、初始化变量的绝佳位置。

## 3. 它是如何工作的？

让我们通过一个简单的例子来理解。 

### 3.1 假设你有一个叫 `mypackage` 的包

这个包里有两个文件：

- `module1.py`
- `module2.py`

你可以在 `mypackage` 文件夹里添加一个 `__init__.py` 文件，并写入如下代码：

```python
# __init__.py
from .module1 import MyClass
from .module2 import useful_function

__all__ = ['MyClass', 'useful_function']
```

### 3.2 它的作用是：

- **帮用户“代劳”导入操作：**

    用户无需分别从 `module1` 和 `module2` 中导入，只需要：

    ```python
    from mypackage import MyClass, useful_function
    ```

- **保持整洁：**

    使用 `__all__` 列出公开接口，可以确保只暴露你想给外部使用的部分。



## 4. 我的亲身经历

以前我的项目中，导入语句混乱不堪。每次新增文件或更改结构，我都得修改多处导入语句，项目越来越难以维护。

后来我开始用 `__init__.py` 文件，把相关函数和类都汇总在其中，结构立刻变得清晰整洁。我再也不用到处修改导入语句，导入逻辑简洁明了，开发效率也提高了不少！



## 5. 为什么 `__init__.py` 如此有用？

### 5.1 简化导入

没有 `__init__.py`：

```python
from mypackage.module1 import MyClass
from mypackage.module2 import useful_function
```

使用 `__init__.py` 后：

```python
from mypackage import MyClass, useful_function
```

更简洁，也更易读。

### 5.2 让你的代码更有条理

随着项目规模增长，保持清晰的结构至关重要。`__init__.py` 能把相关模块组织到一起，后续查找、维护更方便。

### 5.3 自动执行初始化代码

有时我们需要在导入包时自动设置一些配置，比如日志、数据库连接等，放在 `__init__.py` 中即可。例如：

```python
# __init__.py
import logging

logging.basicConfig(level=logging.INFO)
logging.info("mypackage 已就绪！")
```

## 6. 使用 `__init__.py` 的几个小贴士

1. **保持简洁：**

    用它来做基本初始化，或统一导出接口，不要堆太多逻辑进去。

2. **写好注释：**

    注明 `__init__.py` 的作用，方便他人理解，也方便自己日后回顾。

3. **使用 `__all__` 控制公共 API：**

    显式列出你希望别人使用的类或函数。

4. **多测试：**

    因为每次导入包都会执行 `__init__.py`，所以要确保其中的代码正确无误。

## 7. 常见错误

- **循环导入**：

    比如 `utils.py` 导入了 `data.py`，而 `data.py` 又导入了 `utils.py`，会造成死循环。

    **解决方法**：将共同部分提取到第三个模块中。

- **把 `__init__.py` 塞得太满**：

    不要把 500 行代码全放在这里，保持轻量！

- **忘记它的存在**：

    如果你的导入语句突然不工作了，检查一下是不是忘记在文件夹中添加 `__init__.py`。

## 8. 总结

虽然 `__init__.py` 文件看起来不起眼，但它在 Python 项目中起到了非常重要的作用。它就像一个友好的导游，欢迎你进入包的世界，并引导你找到你需要的内容。

合理使用 `__init__.py`，可以让你的代码更整洁、更清晰，也更容易维护。

希望这篇指南能让你重新认识并爱上 `__init__.py`。享受编程的乐趣吧！有时，最简单的工具反而是最强大的 😊

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)