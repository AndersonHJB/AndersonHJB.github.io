---
title: 01-WebUI：免费AI绘画工具箱的 N 大绘图功能
icon: AIhuatu1
date: 2026-02-04 10:57:55
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

![](https://blog.images.bornforthis.cn/docs-images/sha256/24/24488aaa9b8d30fe9104ad9196c7d9eb5b1a566ca8bb638e7675a646e9caf1cb.png)

你好，我是悦创。

欢迎和我一起探索 AI 绘画的魅力。热身篇这一章相当于整个学习过程里的“新手村”，我会带你一起熟悉各种各样免费开源的 AI 绘画工具和模型，帮助你全面掌握 AI 绘画的无限潜能。

今天是课程的第一讲，我们先从 Stable Diffusion 和 WebUI 说起。学完今天的内容，你不但能够知道 Stable Diffusion 的来龙去脉，还能解锁 WebUI 里的特色功能，来实现各种富有想象力的视觉创意。

## 1. 初识 WebUI

想必你一定听说过 Stable Diffusion，其背后的技术便是人们常说的扩散模型。扩散模型这个概念源自热力学，在图像生成问题中得以应用。

简言之，Stable Diffusion 是这样一个过程：你不妨想象一下，任何一张图像都可以通过不断添加噪声变成一张完全被噪声覆盖的图像；反过来，任何一张噪声图像通过逐步合理地去除噪声，变得清晰可辨。

Stable Diffusion（以下简称 SD）在 AI 绘画领域中闪耀着耀眼的光芒，SD 背后的方法在学术界被称为 Latent Diffusion，论文发表于 2022 年计算机顶会 CVPR，相关知识在后面的课程中我们会涉及，这里先按下不表。此时你只需要知道，SD 模型可以输入文本，生成图像。这里提到的文本，就是我们常说的 prompt。比如下面这张图，就是由 SD 模型生成的。

![图片来源：https://stability.ai/blog/stable-diffusion-public-release](https://blog.images.bornforthis.cn/docs-images/sha256/89/896638be72e22754ae750e1b2495fc41d5f1c33a6352f1e78a958cfa36e71a50.jpg)

这里我并非打算讨论其学术价值，而是想和你说说 SD 模型的高昂成本。你知道吗，训练一个 Stable Diffusion 模型的代价相当可观。SD 模型有几个备受关注的版本，比如 SD 1.4、SD 1.5 和 SD 2.0。

为了训练这些模型，需要使用巨大的数据集，包含 20 亿至 50 亿个图像文本对。这一庞大任务需要依赖数百块 A100 显卡，每块 A100 的价格大约在十万元左右。以 SD 1.5 为例，训练过程需要使用 256 块 A100 显卡，并持续耗时 30 天。这样一算，你可能会感叹，这投入都够买好几套海淀区的学区房了，真不是普通人能玩得起的！

然而，令人惊喜和惊叹的是，这些令人炫目的成果竟然被开源了！这一开源举措在整个社区中引发了热烈反响，掀起了一股热潮。开源的 SD 模型让我们真切感受到了文生图的强大魅力和言出法随的创作能力。

然而，复杂的代码逻辑也让普通用户望而却步。我们今天要用到的 WebUI 便应运而生。2022 年 10 月，开源社区 AUTOMATIC1111 推出了名为 “stable-diffusion-webui” 的图形化界面，为普通用户提供了方便快捷的构建 SD 模型图像 UI 界面的工具。

通过这个界面，用户可以体验到 SD 模型一系列的功能，包括文生图、图生图、inpainting 和 outpainting 等等，甚至还能自定义训练具有指定风格的全新模型。由于开源、易于上手和功能全面等诸多优势，SD WebUI 迅速成为 SD 模型系列中最出色、使用最广泛的图形化程序之一。

为了让你在上手实操前有个基本认识，这里我先贴了个 WebUI 的界面图。

你可以看到，在这个界面最上面的部分，你可以选择各种不同的 AI 绘画模型和不同的 AI 绘画功能；右侧可以展示出 AI 绘画的效果，供我们根据喜好决定是否保存到本地；至于左侧的参数信息怎么用，稍后我再详细讲解。

![](https://blog.images.bornforthis.cn/docs-images/sha256/c2/c2c0f9c24ac44fcc8b4e48fa0eda3b9e1fe5a73861294ae592486d77c88a7c88.png)

与其他 AI 绘画类模型如 Midjoruney、DALL-E 2 相比，SD WebUI 可以免费在个人电脑或服务器上运行，并根据用户意愿进行改造和扩展。随着社区力量的涌入，SD WebUI 还拥有了丰富的插件，如 LoRA、ControlNet 等，它们让原生 SD 模型的能力和表现更加出色。

目前，SD WebUI 已经支持多平台运行，包括 Windows、MacOS 和 Linux 系统，支持英伟达、AMD 和苹果 M 系列等多种 GPU 架构。对于追求高自由度的 AI 绘画艺术家而言，SD WebUI 几乎已经成为该领域的首选工具。



## 2. WebUI 的安装和部署

一提到安装 WebUI，你可能会担心 GPU 的问题。我事先说明，先把心放在肚子里。因为 WebUI 既可以使用自己的本地 GPU，也可以使用第三方提供的 GPU 资源。

如果你拥有个人显卡或 GPU 服务器，并且希望按照官方的安装方式进行操作，那么首先需要下载 SD WebUI 的代码。你可以使用 Git 命令将整个仓库克隆到本地。如果你的网络速度比较慢，也可以在 GitHub 主页中找到并下载已打包好的 zip 压缩包。

```bash
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

对于 Windows 用户，可以像后面这样操作。

```bash
1. 安装Python 3.10.6，勾选 "Add Python to PATH"。
2. 从 Windows 资源管理器(CMD 终端)中以非管理员的用户身份运行 webui-user.bat。
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/00/0032c2f9257564eba55dcc28d2bcbb250f546f4abd926680bed6c9c684e387fa.jpg)

对于 Linux 用户，打开终端命令行。

```bash
# Debian-based:
sudo apt install wget git python3 python3-venv
# Red Hat-based:
sudo dnf install wget git python3
# Arch-based:
sudo pacman -S wget git python3

bash <(wget -qO- https://raw.githubusercontent.com/AUTOMATIC1111/stable-diffusion-webui/master/webui.sh)
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/cb/cbef6a8a766f0732930848903d396c6adc70cca5cb8a661b1d5f7117ebffed3b.png)

对于苹果 M 系列芯片的电脑用户，打开电脑的 iTerm 命令行工具，根据这个[教程链接](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon)来安装 WebUI。

```bash
# 首先 cd 到你希望安装 WebUI 的位置

brew install cmake protobuf rust python@3.10 git wget

git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui

cd stable-diffusion-webui

export no_proxy="localhost, 127.0.0.1, ::1"

./webui.sh
```

在你的浏览器输入以下链接 `http://127.0.0.1:7860`，便可以进入 WebUI。在丐版 M2 处理器的 MacBook Air 上，20 步生成 512 分辨率的单张图像，大概需要 25 秒。即使没有英伟达的高端显卡，也可以在本地进行 AI 绘画。

更详细的安装方案和问题，你可以参考[官方指南](https://github.com/AUTOMATIC1111/stable-diffusion-webui)。

如果你本地没有英伟达显卡，而且不希望等太久，可以使用各种第三方平台提供的 GPU 资源进行操作。这需要发挥下你的聪明才智，也欢迎小伙伴们在评论区留下你的方法。启动 WebUI 后的界面可以看下面的图示。

![](https://blog.images.bornforthis.cn/docs-images/sha256/36/3636a2f6ced62d5c258c95fbbc579045c7729de535459160ab9f1f8e5015892b.png)

此外，如果你希望进行汉化或者探索更多功能，可以在 Extensions（扩展）中进一步探索。Extensions 提供了一系列额外的功能和工具，里面包括很多功能和定制选项，这让我们的 WebUI 体验更加个性化和定制化。

到这里，我们就完成了 WebUI 的安装和部署。搞定了环境问题，我们便可以玩转 WebUI 了！

## 3. WebUI 基本能力之文生图

现在让我们开始创作吧！首先我们需要熟悉一下后面这些参数信息。

![](https://blog.images.bornforthis.cn/docs-images/sha256/25/250c852c733f2d36eb5e1097ed7199f72fe8512694c6b243b78f7e1208ed3935.jpg)

- Stable Diffusion checkpoint：这里可以选择已经下载的模型。目前许多平台支持开源的 SD 模型下载，例如 Civitai、Hugging Face 等。

- txt2img：这个选项表示启用文生图（text-to-image）功能。类似地，img2img 等选项则代表其他功能。

- prompt：用于生成图像的文字输入，需要使用英文输入，但你也可以通过探索 Extensions 来实现中文输入。

- negative prompt：这是生成图像的反向提示词，用于指定你不希望模型生成的内容。例如，如果你不想图像中出现红色，可以在这里输入“red”。

- Sampling method：不同的采样算法，这里深入了 Diffusion 算法领域，稍后我们会更详细地讲解。简单来说，通过这些采样算法，噪声图像可以逐渐变得更清晰。

- Sampling steps：与采样算法配合使用，表示生成图像的步数。步数越大，需要等待的时间越长。通常 20-30 步就足够了。

- Width & Height：生成图像的宽度和高度。

- Batch count：**Batch count = 连续“跑几轮”生成任务**，每一轮都会生成 Batch size 张图

    > 👉 **总生成图片数 = Batch count × Batch size**

- Batch size：每次生成的图像数。如果显存不够大，建议调小这个数值。

- CFG scale：这里表示 prompt 的影响程度。值越大，prompt 的影响就越大。

- Seed：生成图像的随机种子，类似于抽奖的幸运种子，会影响生成的图像结果。

这些参数的变化会对最终的生成效果产生千般变化。每一个参数都扮演着重要的角色，影响着生成图像的质量、多样性和风格。理解和熟悉这些参数的作用是使用 WebUI 进行图像生成和编辑的关键。

但你不用着急，在后续的课程中，我们将会详细拆解这些参数的作用，逐一介绍它们对生成效果的影响。通过学习这些参数的作用，你将能够更加准确地控制生成图像的特征和风格，实现自己所需的创作效果。

OK，开启 AI 绘画！我们在 WebUI 界面中使用如下参数，让 SD 模型帮我们生成一只可爱的小猫。这里我们使用的是一个名为 RealisticVision 的模型，你可以点开[这个链接](https://civitai.com/models/4201?modelVersionId=6987)进行模型下载，然后将模型放置在 WebUI 安装路径下的模型文件夹中。

```bash
# 模型文件夹地址：./stable-diffusion-webui/models/Stable-diffusion 
model：realisticVisionV13_v13.safetensors[c35782bad8]
prompt：a photo of a cute cat
Sampling method：Euler A
Sampling steps：20
Width & Height: 512
Batch size: 4
CFG scale: 7
seed: 10
```

结果是后面这样。

![](https://blog.images.bornforthis.cn/docs-images/sha256/fa/fab97b6c86ac9a7ab787f83b5b07af116be8f981e5f4688c464aa0471165b7b4.jpg)

通过 SD 模型，几只可爱的小猫瞬间诞生了！然而，这些小猫似乎带着一丝悲伤。不过，我们可以保持相同的参数，把 prompt 语句稍作修改，在 cute 和 happy cat 之间多写一个单词 “and”。

```bash
prompt：a photo of a cute and happy cat
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/f4/f4075f3ee6731e2a51c6b3d18f0361eea218f8092b117786cb97bb50a6068212.jpg)

魔法再次生效！现在这些可爱的小猫展现出了微笑的表情。接下来，你可以放飞想象力，将所有的生成和创作交给 SD 模型完成了！AI 绘图的文生图模式已经为你打开大门，更加广阔的创作空间就在眼前！

## 4. WebUI 的其它有趣功能

除了基本的文生图能力外，WebUI 在图像生成和编辑方面几乎无所不能。我们继续探索 WebUI 的其他玩法。































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