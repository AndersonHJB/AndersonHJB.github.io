---
title: 01-千问大模型初始化使用
date: 2025-01-12 13:55:52
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

## 1. 项目链接

- 仓库链接：[https://github.com/QwenLM/Qwen2.5](https://github.com/QwenLM/Qwen2.5)
- 文档链接：[https://qwen.readthedocs.io/zh-cn/latest/getting_started/quickstart.html](https://qwen.readthedocs.io/zh-cn/latest/getting_started/quickstart.html)

## 2. 开始操作

1. 抓取仓库到本地

```bash
git clone git@github.com:QwenLM/Qwen2.5.git
```

2. 创建虚拟环境

```bash
python3.11 -m venv .venv
```

3. 设置 wsl 代理

::: code-tabs

@tab Window ip

```bash
ipconfig

huangjiabao@HUANGJIABAO C:\Users\clela>ipconfig | findstr "WSL"
Ethernet adapter vEthernet (WSL (Hyper-V firewall)):

huangjiabao@HUANGJIABAO C:\Users\clela>wsl hostname -I
wsl: 检测到 localhost 代理配置，但未镜像到 WSL。NAT 模式下的 WSL 不支持 localhost 代理。
172.19.118.241 
```

@tab 临时设置

```bash
export http_proxy="socks5://192.168.3.15:7897"
export https_proxy="socks5://192.168.3.15:7897"
```



:::















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