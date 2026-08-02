---
title: Vuepress hope 博客快速搭建&基础设置教程
date: 2023-12-11 08:09:34
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

你好，我是悦创。

接下来，我将带你快速初始化属于你自己的博客。

## 0. 前置工作

### 0.1 环境准备

- [x] 注册阿里云
    - [x] 域名信息模版
    - [x] 购买域名
- [ ] GitHub
    - [x] 注册
    - [ ] 创建仓库 username.github.io
    - [ ] 配置 SSH
- [x] 安装电脑所需环境
    - [ ] brew 安装
    - [ ] node、git、pnpm 安装
    - [ ] VSCode
    - [ ] item2
- [x] typora

## 1. 初始化项目

```shell
pnpm create vuepress-theme-hope my-docs
```





## 2. 本地运行网站

1. 打开网站所在文件夹，命令行进入；
2. 使用本地运行命令：`pnpm run docs:dev`



## 3. 更换背景

1. 需要在 README.md 文件中添加一个：`bgImage: /home/6-light.svg` 

2. 存放背景图片：你网站文件夹 > 你的 src 文件夹 > `.vuepress` > public 
3. 到 public 中，你可以新建文件夹也可以直接放
4.  `/` 一开始就代表 public 文件夹，`/image-filename.jpg`

## 4. 文章标题

::: preview 文章标题

## 标题二

### 标题三

#### 标题四

##### 标题五

###### 标题六

:::

## 5. 代码

::: preview 代码

```python
print("hello bornforthis")
```

:::

## 6. 图片

::: preview 图片

![](https://blog.images.bornforthis.cn/docs-images/sha256/ec/ec827499df079de6dab0c9f68be33a12f683c42081e7c8bd580acac0c8fb0644.png)





:::

## 7. 有序标题和无序标题、任务列表

::: preview 有序标题和无序标题

- Apple🍎
- Banana🍌

1. 西瓜🍉
2. 苹果🍎

- [ ] 计划 A
- [x] 计划 B

:::

## 8. 提示容器

:::: preview 信息框

::: important 重要容器名称自己可以写

重要容器。

:::

::: info

信息容器。

:::

::: note

注释容器。

:::

::: tip

提示容器

:::

::: warning

警告容器

:::

::: caution

危险容器

:::

::: details

详情容器

:::

::::



## 9. 链接

::: preview 链接

`[连接名称](链接)`

[我的网站连接](https://bornforthis.cn/)

[https://bornforthis.cn/](https://bornforthis.cn/)

:::

## 10. 下划线

::: preview 下划线

`<u>下划线</u>`

<u>下划线</u>

:::

## 11. 对齐

:::: preview 对齐

::: left

左对齐的内容

:::

::: center

居中的内容

:::

::: right

右对齐的内容

:::

::: justify

两端对齐的内容

:::

::::

## 12. 公式

::: preview 公式

$\sqrt{2}$

$\large \frac{1}{2}$

行内公式 $\sum_{i=0}^{i + 1} \frac{1}{2}$ looking
$$
\sqrt{2}
\\
\sum_i^{i=0}=\frac{1}{2}
$$


:::

## 13. 多媒体

`::: preview 多媒体`

`<AudioPlayer src="/mp3/sample.mp3" />`

`<VidStack src="/mp3/sample.mp3" title="VidStack 示例音频" />`

`<BiliBili bvid="BV1i8411j7cf" />`

`<PDF url="/pdf/03-使用8421.pdf" />`

`<VidStack src="https://vp-demo.u2sb.com/video/caminandes_03_llamigos_720p.mp4" />`

`<YouTube id="0JJPfz5dg20" />`

`:::`



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
