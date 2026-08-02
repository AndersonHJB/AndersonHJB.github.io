---
title: 03-Windows 本地部署 llama.cpp
date: 2025-03-09 14:20:44
icon: rengongzhineng
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
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

## 1. 获取代码

```bash
git clone https://github.com/ggml-org/llama.cpp
cd llama.cpp
```

## 2. CPU 构建

使用`CMake`构建 llama.cpp：

```bash
cmake -B build
cmake --build build --config Release
```

**注意**：你需要正确安装 Visual Studio Installer 中的生成工具，如果构建失败或者其它问题，需要重装“生成工具”或尝试“修复”。

::: tabs

@tab 实际截图

![](https://blog.images.bornforthis.cn/docs-images/sha256/75/757465c8e60cf2ea8129ca953e573b189efd1139f1c264e6d692d371f5ba5b6a.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/6e/6e37983a700e3c426f841da680cb9a81e3ff5e7e856e86cbaa4f561843e2d7f2.png)

@tab 修复命令

- 快速修复方法：`cmake -B build -G "Visual Studio 17 2022"`；
- ⚠️ **注意**：`"Visual Studio 17 2022"` 表示你使用的是 **Visual Studio 2022**，如使用的是 **Visual Studio 2019**，改为：`cmake -B build -G "Visual Studio 16 2019"`；
- 如果是失败重新操作，请删除之前构建的文件夹 build。

@tab 📌 安装 Visual Studio 安装

- 确认安装时选择了 `桌面开发（C++）` 组件。
- 如果未安装，可以通过 Visual Studio Installer 补装：
    - 打开 Visual Studio Installer；
    - 点击“已安装”；
    - 点击“修改”；
    - 勾选 **「使用C++的桌面开发」** 选项；

:::

## 3. 下载大模型 gguf

自己去查找自己要下载的大模型，例如：[https://huggingface.co/matrixportal/Llama-2-7b-chat-hf-Q4_K_M-GGUF](https://huggingface.co/matrixportal/Llama-2-7b-chat-hf-Q4_K_M-GGUF)

```bash
git clone git@hf.co:matrixportal/Llama-2-7b-chat-hf-Q4_K_M-GGUF
```





## 4. 运行大模型

```bash
huangjiabao@HUANGJIABAO D:\Coder\LargeModels\llama.cpp\build\bin\Release>.\llama-cli.exe -m ..\..\..\..\models\Llama-2-7b-chat-hf-Q4_K_M-GGUF\llama-2-7b-chat-hf-q4_k_m.gguf
```

- 使用 llama-cli: `llama.cpp\build\bin\Release` 中的 `\llama-cli.exe`
- gguf 模型路径：`..\..\..\..\models\Llama-2-7b-chat-hf-Q4_K_M-GGUF\llama-2-7b-chat-hf-q4_k_m.gguf`













欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
