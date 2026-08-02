---
title: 00-环境搭建&新建项目
icon: yongyan
date: 2024-04-12 21:26:24
author: AI悦创
isOriginal: true
category: 
    - Python notebook
tag:
    - Python 1v1
sticky: false
star: false
article: true
timeline: true
navbar: true
sidebarIcon: true
comment: true

backToTop: true
toc: true
watermark: true
---

在前言中的“本书资源”也已经提到了，可以使用配套的在线编程网站进行编写代码，网站：[https://codemark.bornforthis.cn/editor](https://codemark.bornforthis.cn/editor)。不过肯定还是会有人想要在电脑上安装 Python，这确实是推荐的。前期入门可以用我的平台，但是后期还是需要电脑有对应的编程环境。

这部分考虑到大部分有可能是零基础小白，书籍的安装教程有时会过时，所以查看此链接即可安装：[https://bornforthis.cn/Books/04-BookResources/01-InstallationPackage.html](https://bornforthis.cn/Books/04-BookResources/01-InstallationPackage.html)

~~但是下面的下载方式要学会，那才是原则。因为学会了，不用再依赖使用别人准备好的安装包安装，自己可以去官方网站下载最新的安装包。~~

## 0. 使用在线编程环境

使用在线编程环境就很简单了，推荐使用谷歌浏览器或者 Microsoft Edge 浏览器、火狐浏览器，其它浏览器都不推荐！

界面介绍：

![](https://blog.images.bornforthis.cn/docs-images/sha256/d0/d04799952a6b278fac2149ccc7ef774c9a1fdb3b36e64cf30879b0923e84f9ae.png)

**步骤：**

1. 电脑开机；
2. 打开浏览器；
3. 输入链接；
4. 访问在线编程平台；
5. 等待加载成功，就可以开始尽情的编写代码了！

备用编程平台，还支持画图：[https://bornforthis.cn/python/#/](https://bornforthis.cn/python/#/)

## 1. 本地编程环境配置

### 1.1 网站搭建所需要的环境

1. **Windows 所需环境**

    | 序号 | 名称   | 链接                                                         | 用途             |
    | ---- | ------ | ------------------------------------------------------------ | ---------------- |
    | 01   | NodeJs | [https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download) | 负责网站本地运行 |



2. **Mac 所需环境**

    | 序号 | 名称 | 链接 | 用途 |
    | ---- | ---- | ---- | ---- |
    | 01   |      |      |      |





### 1.2 Python 代码所需要的环境

1. **Windows 所需环境**

    | 序号 | 名称            | 链接                                                         | 用途     |
    | ---- | --------------- | ------------------------------------------------------------ | -------- |
    | 01   | Clash Verge Rev | [https://github.com/clash-verge-rev/clash-verge-rev/releases](https://github.com/clash-verge-rev/clash-verge-rev/releases) | 代理     |
    | 02   | Python          | [https://www.python.org/downloads/](https://www.python.org/downloads/) | 运行代码 |
    | 03   | Pycharm         | [https://www.jetbrains.com/pycharm/download/](https://www.jetbrains.com/pycharm/download/) | 编写代码 |
    | 04   | Snipaste        | [https://www.snipaste.com/](https://www.snipaste.com/)       | 截图软件 |
    | 05   | 语雀            | [https://www.yuque.com/dashboard](https://www.yuque.com/dashboard) | 记笔记用 |
    | 06   |                 |                                                              |          |

2. **Mac 所需环境**

    | 序号 | 名称 | 链接 | 用途 |
    | ---- | ---- | ---- | ---- |
    | 01   |      |      |      |







## 1. 打开 PyCharm

![](https://blog.images.bornforthis.cn/docs-images/sha256/b9/b991893cfcab957abe4aaa06fb469785b5f5455c642e6b5846c192a99992bbfc.png)

## 2. 设置项目相关信息

![](https://blog.images.bornforthis.cn/docs-images/sha256/a2/a2ca2da8fe85c4e1c8542fa75ea6096906e0ba87cac1eac626d3acc40184b1f6.png)

最后点击 Create 即可。

## 3. 创建项目之后的界面

![](https://blog.images.bornforthis.cn/docs-images/sha256/aa/aa463104641c73f5cbb70690548c4afd95d29bd30fd8c6e613d081c936b89489.png)

## 4. 运行代码测试

鼠标右键运行后，看见输出结果，则表明环境正常。

![](https://blog.images.bornforthis.cn/docs-images/sha256/f9/f996fa32c369edd424af4a16117ae86732b6ff4422563f01d2c8f20f85285fd2.png)

## 5. 删除 main.py

编程环境测试成功后，删除自动创建的 main.py 即可。

![](https://blog.images.bornforthis.cn/docs-images/sha256/56/56dc07accada5441f25e2b8110e5a7f8a10ac723487dbc33646de5eed2564f31.png)

删除时，会有提示，点击确认即可。

![点击确认](https://blog.images.bornforthis.cn/docs-images/sha256/9a/9a9ce44bbab3c0e07e40ce30d32629c7f6228f41d10bc6e6164a4a657f1bab43.png)

## 6. 注意⚠️

文件夹中的 `.venv` 文件夹不能操作，是当前 PyCharm 环境的配置文件夹。

操作有可能导致无法正常运行，就放着不动即可。

## 7. 新建文件夹

放在要新建的文件夹 `Coder` 上，鼠标右键操作：

![](https://blog.images.bornforthis.cn/docs-images/sha256/f5/f5bb5a9f9c2b04007aa3fdc9f15ca3760270419d08d99093323e1abc0153ccbe.png)

输入创建的文件夹名称，推荐使用英文命名。

![](https://blog.images.bornforthis.cn/docs-images/sha256/25/253bcc6adaf218feb04350661e60ed609a7135d8ebd9091be33936c906c6d912.png)

下图即可看见创建成功：

![](https://blog.images.bornforthis.cn/docs-images/sha256/8e/8ebf66b95b9c6a9ad288a2541b14f090eb7fe03a9365db7281ee0a4f4590d5cb.png)





## 8. 新建代码文件

在你想把代码放在哪个文件夹，在那个文件夹上面鼠标右键。

![](https://blog.images.bornforthis.cn/docs-images/sha256/9a/9ad9a031b9c41b6cdb87949998b77678b059c4be89e54f5989940a818fc5c808.png)

输入要创建的 Python 代码文件名称：

![](https://blog.images.bornforthis.cn/docs-images/sha256/41/41bb8dfcb743b9ee14f9d9354a9538e9edce7c06608ce11bb926fde886a14d7c.png)

创建成功后，可以编写代码进行测试：

![](https://blog.images.bornforthis.cn/docs-images/sha256/f7/f7c280fdb05e45d2c858d08c81b69c50ba3b2329e19fc1ea1d0755ce6ea399ee.png)





## 9. 重命名

有时候，我们会需要重新命名文件夹或者代码文件，所以接下来带你操作文件、文件夹重命名。

![](https://blog.images.bornforthis.cn/docs-images/sha256/42/42b24e8b29075b8f9f8197c41204eea20c422c068c64d98b8d0b36f8416647c8.png)

输入要重新命名的的名称，不要动 `.py`：

![修改名称即可](https://blog.images.bornforthis.cn/docs-images/sha256/1a/1a37aaf89ff3995bde340afc8941d97c4df4904d01ff5dc4c479950ba94dc2c1.png)

文件夹也是如法炮制！

## 10. 几种常见的虚拟环境介绍

### 10.1 介绍

在 Python 开发中，虚拟环境是一个非常重要的概念，它允许你为每个项目创建一个独立的环境，这样就可以在不同项目之间隔离依赖，避免版本冲突。想象一下，你有两个项目，一个需要 Django 2.0，而另一个需要 Django 3.0。

![](https://blog.images.bornforthis.cn/docs-images/sha256/cb/cbaf51f6d94dd777095326e3c37b8f15e9ce8b55c12633dfdd8b088b7e5ce5ee.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/e4/e4a90978959c2f5a9e3783b8e9d29af7920e1a1a91b5ad631f36eaa5260da58a.png)

如果没有虚拟环境，这两个版本的 Django 就会发生冲突「因为，是在同一台电脑同一个 Python 肯定会冲突」。就像你一台电脑只能安装一个 QQ 和微信一样，只能存在一个版本的 QQ 和微信，不能存在多个不同版本的 QQ 和微信。

虚拟环境就像是给每个项目提供了一个小盒子，这个盒子里面装着所有这个项目需要的东西，而且盒子之间是相互独立的。

### 10.2 为什么需要虚拟环境？

- **依赖管理**：不同项目可能需要不同版本的库，虚拟环境可以避免版本冲突。
- **项目隔离**：保持全局环境的干净整洁，每个项目都有自己的环境，不会互相影响。
- **易于复制**：如果你想在另一台机器或者环境中复制你的项目，虚拟环境可以让这一过程变得简单，因为你可以很容易地重新创建一个一模一样的环境。

### 10.3 几种常见的 Python 虚拟环境管理工具

1. **venv**
    - `venv` 是 Python 自带的虚拟环境工具，从 Python 3.3 开始内置。
    - 使用方法简单，可以通过简单的命令创建虚拟环境，然后激活环境并在其中安装依赖。
    - 适合大多数基本的用途。
2. **pipenv**
    - `pipenv` 是一个 Python 开发工作流的工具，它结合了 pip 和 venv 的功能。
    - 它自动管理项目的虚拟环境，并且使用 `Pipfile` 和 `Pipfile.lock` 来替代传统的 `requirements.txt`，这样可以更清楚地定义项目依赖。
    - 它还提供了依赖图的概览，让开发者可以很方便地看到依赖之间的关系。
3. **conda**
    - `conda` 是一个开源的包、依赖和环境管理器，它支持 Python 项目，但也可以用于其他语言的项目。
    - Conda 更像是一个跨平台的工具，不仅能管理 Python 库，还能管理非 Python 的库。
    - 它非常适合于处理复杂的科学计算项目，因为很多科学计算库在安装时有复杂的依赖。

虚拟环境在 Python 开发中扮演着非常重要的角色，无论是保持开发环境的清洁，还是管理不同项目之间的依赖冲突，都有着不可替代的作用。选择哪种虚拟环境工具，主要取决于项目需求和个人偏好。

### 10.4 如何使用这些虚拟环境工具

#### 10.4.1 venv

1. 新建虚拟环境

```bash
python3 -m venv myenv
```

这条命令会在当前目录下创建一个名为 `myenv` 的虚拟环境目录。这个目录包含了 Python 的可执行文件，以及一个 `pip` 库的拷贝，可以用来安装其他包。

2. 激活虚拟环境

- Windows:

```bash
myenv\Scripts\activate
```

- macOS/Linux:

```bash
source myenv/bin/activate
```

激活虚拟环境后，你会在命令行前面看到虚拟环境的名字，这表示虚拟环境已经被激活。

3. 退出虚拟环境

```bash
deactivate
```

运行 `deactivate` 命令可以退出当前的虚拟环境，回到系统的全局 Python 环境。

#### 10.4.2 pipenv

1. 新建虚拟环境

```bash
pipenv install
```

在项目目录中运行这个命令，如果 `Pipfile` 存在，`pipenv` 会根据 `Pipfile` 来创建一个新的虚拟环境。如果不存在，它会创建一个新的 `Pipfile`。

2. 使用虚拟环境

```bash
pipenv shell
```

这个命令会激活虚拟环境。`pipenv` 也支持通过 `pipenv run` 命令在虚拟环境中运行命令，而无需手动激活虚拟环境。

3. 退出虚拟环境

如果你是通过 `pipenv shell` 进入的虚拟环境，可以通过 `exit` 命令或者 Ctrl+D（在大多数 Unix 系统中）来退出。

#### 10.4.3 conda

1. 新建虚拟环境

```bash
conda create --name myenv python=3.8
```

这个命令会创建一个名为 `myenv` 的新虚拟环境，其中安装了 Python 3.8 。`conda` 允许你在创建环境时指定安装包。

2. 激活虚拟环境

```bash
conda activate myenv
```

使用 `conda activate ` 命令激活虚拟环境。激活后，你会在命令行提示符前看到环境的名字。

3. 退出虚拟环境

```bash
conda deactivate
```

运行 `conda deactivate` 可以退出当前的虚拟环境。

每种工具的命令都有自己的特点，但基本的流程是相似的：创建环境、激活环境、使用环境，最后退出环境。使用虚拟环境是一个好习惯，它能帮助你更有效地管理项目依赖和避免潜在的冲突。



