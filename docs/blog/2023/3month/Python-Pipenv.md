---
title: 01-Python-Pipenv 管理虚拟环境
date: 2023-03-04 20:26:44
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
---

## 1. Pipenv 管理虚拟环境

虚拟环境可以使用 Python 为项目`创建一个独立的环境`，能够解决`不同项目使用不同版本给项目带来冲突的麻烦`，创建虚拟环境的方式有很多种，`python 3.x ` 已经集成 ` virtualenv ` 功能创建虚拟环境, 在项目下使用命令，`python -m venv .venv`，即可创建环境，本文介绍新的 Python 虚拟环境管理工具 `pipenv`

`pipenv` 会自动帮你管理虚拟环境和依赖文件，并且提供了一系列命令和选项来帮助你实现各种依赖和环境管理相关的操作

### 1.1 安装 pipenv

```python
pip install --user pipenv
```

### 1.2 创建虚拟环境

```python
pipenv install
```

创建虚拟环境会默认查找该目录下有没有`.venv`目录，如果没有的话或默认在家目录用户下`.local/share/virtualenvs`，推荐先在项目下创建一个`.venv`文件夹，然后再创建虚拟环境

### 1.3 进入虚拟环境

```python
pipenv shell
```

### 1.4 退出虚拟环境

```python
exit 或者 ctrl+d
```

### 1.5 安装第三方包

```python
pipenv install flask
pipenv install django=1.11.18
```

### 1.6 卸载第三方包

```python
pipenv uninstall flask
```

### 1.7 查看已经安装的依赖

```python
pipenv graph
```

### 1.8 更新升级包

```python
pipenv update requests
```

### 1.9 安装开发环境下的包

加 `--dev` 表示包括 Pipfile 的 dev-packages 中的依赖。

```python
pipenv install autopip8 --dev
```

### 1.10 通过 requirements.txt 安装

```python
pipenv install -r requirements.txt
```

### 1.11 生成 requirements.txt 文件

```python
pipenv lock -r [--dev] > requirements.txt
```

### 1.12 更换 pip 安装源 

```python
1: 安装软件(psm)
      pip install psm
2: 列出国内镜像源
      psm ls
              --> 应该提示如下:
                pypi      https://pypi.python.org/simple/
                douban      http://pypi.douban.com/simple/
                aliyun      http://mirrors.aliyun.com/pypi/simple/
                qinghua      https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple/

3: 查看当前 使用的镜像源 
      psm show
4: 更换镜像源
      psm use douban
```

### 1.13 pipfile 文件和 pipfile.lock 文件

`Pipfile ` 文件和 `pipfile.lock`  实在创建虚拟环境时生成的，用来记录安装依赖的信息，Pipfile 是用来替代原来的 ` requirements.txt`  的。

`Pipfile.lock` 则包含你的系统信息，所有已安装包的依赖包及其版本信息，以及所有安装包及其依赖包的 Hash 校验信息。

### 1.14 pipenv 换源

pipenv 安装第三方包`默认是从 pypi 上获取`，`国内安装比较慢`，如果发现安装第三方模块比较慢，可以换成国内源，直接修改 `Pipfile`文件中的 `url`，推荐清华源，上面pip安装源中里面有 `url`

### 1.15 pipenv 其他命令

`pipenv` 其他命令可以直接在终端中输入`pipenv`就可以看到 pipenv 其他命令，或者使用 `pipenv --help` 查看，如果是 ` mac 用户`，安装可以直接使用` homebrew 安装 pipenv` 使用命令 `brew install pipenv ` 就可以使用了。

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
