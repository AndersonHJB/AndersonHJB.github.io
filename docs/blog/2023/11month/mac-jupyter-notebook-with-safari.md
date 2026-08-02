---
title: 如何在 macOS 上使用 Safari 浏览器启动 Jupyter Notebook
date: 2023-11-09 00:05:59
author: AI悦创
isOriginal: true
icon: mac
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

你好，我是悦创。

在使用 Jupyter Notebook 进行数据分析和编程时，你可能想用自己喜欢的浏览器来运行它。对于 macOS 用户来说，Safari 是一个流畅和集成的选择。幸运的是，Jupyter 允许你通过简单的命令行参数指定启动时使用的浏览器。本教程将指导你如何在 macOS 上通过命令行使用 Safari 浏览器来启动 Jupyter Notebook。

## 1. 前提条件

在开始之前，请确保你已经在你的 macOS 上安装了 Jupyter Notebook。如果还没有安装，可以通过 [Anaconda](https://www.anaconda.com/products/individual) 发行版安装，它包括 Jupyter Notebook，或者通过 `pip` 安装 Jupyter：

```shell
pip install notebook
```

确保 Safari 浏览器已经安装在你的系统上，并且你有足够的权限来启动浏览器和 Jupyter Notebook。

## 2. 如何使用

可以在启动 Jupyter 笔记本服务器的时候通过命令行指定一个浏览器。

可以使用 `--browser` 参数来指定想要启动的浏览器。

例如，如果你想用 Google Chrome 来打开 Jupyter Notebook，可以在支持的操作系统上使用以下命令（假设您已经安装了 Google Chrome，并且其可执行文件在您的系统路径中）：

```sh
jupyter notebook --browser google-chrome
# jupyter notebook --browser=safari
```

或者，如果你的浏览器不在默认的系统路径中，或者您想指定一个特定版本的浏览器，您需要提供浏览器可执行文件的完整路径。例如：

```sh
jupyter notebook --browser=/path/to/your/browser
```

请将 `/path/to/your/browser` 替换为自己浏览器可执行文件的实际路径。

如果你使用的是 Windows 系统，并且要启动 Microsoft Edge 浏览器，命令可能会是这样的：

```sh
jupyter notebook --browser "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
```

这里有一个要点需要注意：必须确保指定的浏览器支持 Jupyter Notebook。

在使用这个功能时，还需要注意的一点是：默认浏览器设置可能会影响这个功能的行为。如果你的系统默认浏览器设置会强制打开某个特定的浏览器，那么 `--browser` 参数可能不会生效。这种情况下，就有可能需要先修改系统的默认浏览器设置。

## 3. 启动 Jupyter Notebook

遵循以下步骤，在 macOS 上使用 Safari 浏览器启动 Jupyter Notebook：

1. 打开你的终端（你可以通过在 Spotlight 搜索中输入“Terminal”来快速访问它）。

2. 在终端中，输入以下命令：

   ```shell
   jupyter notebook --browser=safari
   ```

3. 按下回车键，命令会启动 Jupyter Notebook 服务，并尝试自动在 Safari 浏览器中打开一个新的标签页或窗口。

4. 如果一切设置正确，你的 Safari 浏览器应该会打开并显示 Jupyter 的启动页面，其中列出了可用的笔记本文件和目录。

5. 如果 Jupyter Notebook 未在 Safari 浏览器中打开，检查是否有其他浏览器插件或系统设置可能阻止了正确打开。同时确保你的 Jupyter Notebook 和 Safari 浏览器都是最新版本。

## 4. 结语

恭喜你！现在你应该能够在你喜欢的 Safari 浏览器中运行 Jupyter Notebook 了。这不仅可以让你在一个熟悉的环境中工作，而且还能利用 Safari 浏览器的优化性能和集成特性。如果你想恢复到默认的浏览器设置，只需简单地运行 `jupyter notebook` 命令，不带任何 `--browser` 参数即可。









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
