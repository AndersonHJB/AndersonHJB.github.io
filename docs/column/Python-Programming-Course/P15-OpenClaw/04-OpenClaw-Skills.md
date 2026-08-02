---
title: 04-OpenClaw Skills全家桶
icon: blog
date: 2026-03-13 15:36:31
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

::: tip ChangLog

- [x] 2026-03-13 15:36:31：开始创建，正式编写教程；

:::



你好，我是悦创。

前面我先发布了全网最全的：OpenClaw 安装部署教程，涵盖：Windows、Mac 系统。~~Mac 系统目前还配备对应的视频教程，Windows 视频教程类型，看粉丝是否需要，有需要则找时间录制。~~

Windows 最新部署教程已经发布，欢迎去观看～[**【电影级/1小时+】全网最强 OpenClaw Windows 部署终极指南**](https://www.bilibili.com/video/BV1YVwkzhExP/)

![](https://blog.images.bornforthis.cn/docs-images/sha256/c9/c99acdb11183ad6edbc1f99f7fc7750fcefc3051afeab8d57d5eb8a29facb67c.png)

## 1. 我发布的

Skills 主页：[https://clawhub.ai/u/AndersonHJB](https://clawhub.ai/u/AndersonHJB)

| 序号 | 名称                  | 链接                                                         | 描述                                |
| ---- | --------------------- | ------------------------------------------------------------ | ----------------------------------- |
| 01   | **feishu-image-sent** | [https://clawhub.ai/AndersonHJB/feishu-image-sent](https://clawhub.ai/AndersonHJB/feishu-image-sent) | 飞书图片发送的 Skills，使用智谱创建 |
| 02   | **feishu-share-link** | [https://clawhub.ai/AndersonHJB/feishu-share-link](https://clawhub.ai/AndersonHJB/feishu-share-link) | 飞书专属分享链接生成规范            |
| 03   |                       |                                                              |                                     |

::: important 💡想法

- [x] 2026-03-24 19:03:28：类似微信的【文件传输助手】，我随时随地发送信息。AI Agent 帮我汇总起来，便于后期索引查询。可以做成 Skills 或者静态页面，后面对价大模型与远程 SQLite、Json 文件即可；（对于 OpenClaw：开头添加特定的触发标签【记录】xxxx，AI 帮我整理并便于查找、展示。「思维导图、文档…」）其它用户，支持设置一个 Id 进行进入专属的记录收录。

:::

## 2. 什么是 Skills？

这里我只做 OpenClaw 中的 Skills 的解释，不做是否标准、正确、严谨！只要：你可以理解、会做属于自己的 Skills 就行！

你一步步的指导 OpenClaw 完成一个任务，并让 OpenClaw 梳理整个完成流程（Skills）。之后只要做相同的事情，复用这个流程。

额外说一句：Skills 并不是单纯的 Markdown 文档，有些还需要额外的代码进行辅助。所以，完整的 Skills 是 Markdown + 代码。

## 3. Skills 推荐

首先，插件官网得先知道：[https://clawhub.ai/](https://clawhub.ai/)。

并需要知道，如何安装对应的 Skills：

```bash
npx clawhub@latest install 插件名称
```

::: warning 有些 Skills 虽然发布在 ClawHub 上面，但是有时候因为某些不为人知的原因删除。而你看见我的教程想要复刻也好（也就是想要找到一模一样的也好），我直接为我的粉丝打包好了。

领取方式：关注公众号：AI悦创，添加进粉丝群获取【安装命令】。

**注意**⚠️：切勿取消关注，一切皆有痕迹！未来会有更多福利资源～

:::

### 3.1 Skill Vetter

#### 3.1.1 介绍

你最应该安装的第一个 Skill，它会帮助你监测后续安装的所有 Skill，检查是否有危险行为。

![](https://blog.images.bornforthis.cn/docs-images/sha256/1c/1ca8ea560c7f1f6e1e27c4f6d861672c1887e47cd45702cf427426c18641c7ae.png)

:::: tip 我本人是不安装的，没多大“价值”。有些没什么危险的也会显示危险，那如果检测出危险，插件能做什么处理吗？不安装？

~~还是啥，只是找出问题，并不是什么好的 Skills。只是比大家提前做出来而已～~~

我一开始是觉得没必要，当我深入阅读了 Skills 文件内容。发现还算是比较严谨可靠的，发现微信操作时，会问你如何决策。

但是要注意：很多 Skills 是很难判断好坏的，需要使用者自己去发现。

::: details 比如：我自己写的一个飞书技能，没有任何恶意。但是 ClawHub 就会显示【可疑】

![](https://blog.images.bornforthis.cn/docs-images/sha256/93/934a9a8159eb6de39ea3655dc396fa8868656efab448d4432042b391a2f99f86.png)

:::

::::

#### 3.1.2 安装命令

```bash
npx clawhub@latest install skill-vetter
```

你也可以发指令让你的龙虾自己安装，例如：

```bash
执行命令安装这个 Skills 并学习：npx clawhub@latest install skill-vetter
```

**还可以一劳永逸：**

```bash
以后让你安装 Skills，我只会发给你的 Skills 名称，但是你要知道执行安装命令是：npx clawhub@latest install Skills名称，安装完成后直接进行学习并记住！
```



#### 3.1.3 让你的龙虾学习

你可以是任何表达：

```bash
我刚刚安装了一个新Skills，你知道吗？
```

::: details 图示

![](https://blog.images.bornforthis.cn/docs-images/sha256/e0/e01fdca6db1d9a9ff5d655daa327238f9d7b88e77fd35afd6a2ce4d99be1333c.png)

:::

### 3.2 Tavily Web Search

这是专为 Agent 开发的联网搜索 Skill，搜索出来的结果很全、很新、很简洁。原本这个是需要单独安装的 Skills，现在最新版可以直接在 OpenClaw 中进行配置。









```bash
把这个 Github 的 Skills，全部安装学习：https://github.com/AndersonHJB/OpenClaw-Skills
```









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