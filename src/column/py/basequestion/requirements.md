---
title: 01-Python 导出/导入依赖包
date: 2022-05-22 23:44:00
author: AI悦创
isOriginal: true
category: pip
tag:
    - pip
    - 小知识
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
prev: false
next: skill_pycharm2.md
backToTop: true
toc: true
---

## 使用

平时导出依赖一般都是：

```python
pip freeze >  requirements.txt
```

这种方式导出的是当前 Python 环境中所有的包，有些库不是必需的也跟着导出来，安装的时候也过于麻烦。

这种时候就要使用 `pipreqs`  ，它只会导出当前项目运行所依赖的包。

下载命令：

```python
pip install pipreqs
```

使用命令如下，进入项目的根目录后输入如下命令：

```python
pipreqs ./
```

然后会在当前目录下生成 **requirements.txt** 文件。

## 问题

::: warning

UnicodeDecodeError: 'gbk' codec can't decode byte 0x80 in position 175: illegal multibyte sequence

:::

## 解决方法：指定编码格式

```python
pipreqs ./ --encoding=utf8
```

之后便会生成 `requirements.txt` 文件，包含了此路径下项目中的依赖项。

## 导入

导入依赖包：

```python
pip install -r ./requirements.txt
```

即可安装所有依赖，另外还可以使用其他源来加速下载，如清华源：

```python
pip install -r ./requriements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

::: info 细节

有些小细节也是值得一提的，那就是 `pip freeze > requirements.txt` 指令必须用在整个工程项目完全跑通了（也就是项目依赖已经全部安装完成）的情况下，才能将所有的有关依赖库写入 `requirements.txt` 文件中去，而 `pip install -r requirements.txt` 指令则使用于服务器部署时较为合适。

:::

## 补充：Python 项目环境迁移

将 Python 项目迁移到新电脑时，不可以直接复制虚拟环境，因为在建立虚拟环境时，虚拟环境中的 `python.exe` , `pip.exe` ......等一些文件会“**硬编码**”，记录的是绝对路径，放到其他电脑后，因为路径不同会出错！

正确的做法是在新电脑中创建新的虚拟环境：`python -m venv MyApp` ，接下来（方法可供选择）：

1. 复制之前的 lib 文件中的 packes 直接到新电脑的 lib 文件中

2. `pip freeze > requirements.txt`  将包目录存在 txt 中，复制 txt 到新环境，cmd 到新环境，执行 `pip install -r requirements.txt`。

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

