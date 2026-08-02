---
title: 🦞立省 500！30 分钟把 OpenClaw 本地部署并在飞书上配到可用
icon: blog
date: 2026-03-06 19:27:38
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

![](https://blog.images.bornforthis.cn/docs-images/sha256/9c/9cab29c4a34db7629e82e67cb26af675517d02b3f25a7bc3193b3e3645148652.png)

::: tip ChangeLog

- [x] **欢迎评论区，提供各种情况、成果！欢迎把本文分享出去，我需要被大家发现！谢谢！**
- [x] 可以添加微信：**Jiabcdefh**，加入微信交流群进行交流！
- [x] 2026-03-06 19:46:48：正式开始写全网最全教程。
- [x] 2026-03-06 19:48:47：参考飞书提供的教程，不过主线在于我的实际编写与测试。
- [x] 2026-03-09 13:28:32：完成 Mac 安装的完成教程、飞书的逐步配置！
- [x] 2026-03-10 10:47:28：更改文章名称，更新 Windows 完整教程、增加简易目录，便于小白快速定位。
- [x] 2026-03-11 18:49:03：正式完成 Windows 系列教程（包含 WSL 方法），开启视频教程录制！
- [x] 2026-03-13 10:24:30：更新最新飞书官方插件教程，视频各平台均已发布！
- [x] 2026-03-14 20:24:06：添加 OpenClaw 的相关问题，点击阅读：[**OpenClaw 常见疑惑/问题**](./05-OpenClaw-FAQ.html)
- [x] 2026-03-15 09:50:26：添加：[**OpenClaw 全网最全案例！一句话复刻案例！**](./06-openclaw-case-studies.html)
- [x] 2026-03-16 21:38:41：改进 Windows 教程飞书配置；（至于：为什么要对接飞书，后面一期视频单独说，敬请期待！（欢迎全网关注我））
- [x] 2026-03-16 21:52:24：更新与简化教程！
- [x] 2026-03-17 16:29:08：更新 Windows 最新安装命令！
- [x] 2026-03-17 23:50:02：更新 Windows 安装命令；
- [x] 2026-03-21 22:36:01：添加视频教程，和资助、收费。添加：提示：不要被割韭菜！
- [x] 2026-03-22 21:07:30：更新：让你的 Mac 终端，更好看、更好用。
- [x] 2026-03-24 10:27:39：折叠无用的教程、剔除疑难杂症（独立新的一篇）、删除 homebrew 国内源（遗弃），添加 Mac 一键卸载命令。添加安装失败的解决方法。；
- [x] 2026-04-10 14:24:47：收集：**有读者说每次都会有视频播放的声音，但是经过测试默认都是静音播放，所以大家看教程的时候有没有听见声音呢？评论区回答！**
- [x] 2026-04-15 11:15:47：视频教程，替换成链接代替；

:::

![欢迎赞助·服务器费用时不时欠费停机～](https://blog.images.bornforthis.cn/docs-images/sha256/5f/5fa847423f8ea5b09c3b90c14825228367fed37d0c3b33ec6873c2cb85ae20e3.png)

- Mac 部署视频教程：[https://www.bilibili.com/video/BV1pbcCzjEsk](https://www.bilibili.com/video/BV1pbcCzjEsk)

- Windows 部署教程：[https://www.bilibili.com/video/BV1YVwkzhExP](https://www.bilibili.com/video/BV1YVwkzhExP)

你好，我是悦创。

**本教程会持续更新，且是市面最全的教程！其次，小白、懒、省心、bug 的人，可以付费找我安装！微信：Jiabcdefh**

- **OpenClaw 是什么**：**OpenClaw** 是一款开源的个人 **AI Agent** 系统，可以运行在你的个人电脑或服务器上。

- **为什么要在飞书里使用 OpenClaw**：**你说一句话，它就能伸出“钳子”，直接在飞书里帮你把活儿干了！**

    此次飞书推出了 **OpenClaw 飞书官方插件** 能让你的 OpenClaw 以你的身份更好地调用飞书的各类能力，包括了解群聊和文档中的所有信息、写文档、改文档、帮你发消息、约日程、创建多维表格等。

    此外，相比于 Telegram 等国外平台，飞书是国内的平台，有中文的界面、文档和客服，更容易上手；目前国内的 OpenClaw 用户，绝大多数都选择了接入飞书，使用人数更多，生态更好。

    相比于国内的其他平台，飞书的开放能力更强，能带来更好的体验、获取更多工作中必要的上下文，玩法更多。

::: tip 付费安装价格表

**找别人付费安装，还不如找我来的靠谱！欢迎把我推荐出去，谢谢～**

- **基础安装**：500¥，包含：OpenClaw 基础安装➕对接智谱大模型➕对接 Telegram 或 Whatsapp、飞书；
- **彻底卸载**：200¥，OpenClaw 相关彻底卸载；

![](https://blog.images.bornforthis.cn/docs-images/sha256/60/6079f52e864ccadfef773a7b00f09ac3e197e719f51b237ebbe544e7aa31543e.png)

:::

:::: tip 提示：不要被割韭菜

智谱和诸多大模型有免费额度，这种就是拿免费额度赚钱的。要是有想要购买冲动的，直接找我。我卖智谱给你哈哈哈哈～

::: details 聊天记录

![](https://blog.images.bornforthis.cn/docs-images/sha256/2a/2af74dcb8dd0358bd94cc97ff33b152358568c354d10349f57cfbb0062035860.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/6e/6e3a73b5ff423bf064ca4be6185674e3d3167446921d708eb9dd6d6e4f0c1d18.png)

:::

::::



::: details ⚠️ 重要安全与风险提示（使用前必读）「有需要可以阅读」

### 🔴 核心风险：

这个插件通过飞书接口连接了你的工作数据——消息、文档、日历、联系人，AI 能读到的东西理论上就有泄露的可能。虽然我们做了安全防护，但 AI 系统本身还不够成熟稳定，不能保证万无一失。

**🔴 强烈建议：现阶段切勿使用公司/企业飞书账号接入！请务必优先使用个人账号进行体验和测试。**

### 📌 其他操作风险

- **AI 并不完美，可能存在“幻觉”：** 它有时会误解您的意图，或者生成看似合理但不准确的内容。
- **部分操作不可逆转：** 例如，AI 代发的飞书消息是以您的名义发出的，发出后即成事实。
- **应对建议：** 对于涉及发送、修改、写入等重要操作，**请务必做到“先预览，再确认”**，切勿让 AI 处于完全脱离人工干预的“全自动驾驶”状态。

:::

## 0. 选择安装方式

::: tabs

@tab **本地部署**

- **优点**：数据完全本地，隐私性高；无持续云端费用
- **缺点**：依赖本地电脑性能与网络稳定性；需自行维护；操作门槛较高。
- **适用场景**：个人开发者、对数据安全要求较高的团队。

@tab **云端部署**

- **优点**：操作简单，推荐新手用户选择云端部署方案。24 小时在线，无需本地电脑常开；性能稳定。
- **缺点**：产生服务器费用；数据存储在云端。
- **适用场景**：团队协作、需要 7x24 小时服务的业务场景

:::

在线的部署都是比较简单，只要花钱即可。本地部署是我们主线，后期还会编写调用本地的大模型教程。（花钱都简单）

**个人建议**：各大厂商都为了拉人，现在才便宜，只有到你们离不开他们才是他们割韭菜的开始！所以，最好自己安装！！！

![](https://blog.images.bornforthis.cn/docs-images/sha256/29/291b4b513376d37fdb361dbf62771edf6d395aba17dac521835e81087bcd5f45.png)

::: details 右侧有大纲

## 0. 目录

- [**1. ⚙️「Mac」本地部署 OpenClaw 指南**](#_1-⚙%EF%B8%8F「mac」本地部署-openclaw-指南)
- [**2. 「Windows」本地部署 OpenClaw**](#_2-「windows」本地部署-openclaw)
    - [**2.1 方法一：常规安装 OpenClaw**](#_2-1-方法一-常规安装-openclaw)
    - [**2.2 方法二：WSL 安装 OpenClaw**](#_2-2-方法二-wsl-安装-openclaw)

    :::

## 1. ⚙️「Mac」本地部署 OpenClaw 指南

### 1.1 前置学习｜了解什么是终端

- **什么是终端**：**终端**是 MacOS 环境下安装 OpenClaw 的必要软件，是 Mac 自带的一个程序，它让你可以用文字命令直接控制电脑，而不是用鼠标点图标。

- **怎么找到终端**：

    - **方法一：程序坞 > 启动台 > 其他 > 终端**；
    - **方法二：打开程序坞搜索“终端”**；

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/95/950b5ea5cbd9a758e751e95bae18062431d0d9b839c38c2eba2e0a693d3f5717.png)

- **如何使用终端**：打开“**终端**” > 输入指令 > 点击“**回车**”确认；

### 1.2 环境准备

#### 1.2.1 基础环境准备

Mac 电脑，打开终端执行如下命令：

```python
xcode-select --install
```

输入之后：

![](https://blog.images.bornforthis.cn/docs-images/sha256/26/26be4a4dc9a53613071bb2eebf6cdd09e7e653a3e50cda2f6818fe5f8d1e7609.png)

![image-20260308163538905](https://blog.images.bornforthis.cn/docs-images/sha256/1a/1a4c0d915702887684fb2196f9225591e3e05678b7d9761c45c4491903310c7d.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77047e173d1048fe264fb264df751babe0e3259db8f3ed84c849010f2f892cca.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/a1/a17c87b73aadb2dac0a0c2e59ee223e282d61e976821274b4bc4bb7cb34742ce.png)

这样就成功安装了必备的一些开发工具，以及后续安装会使用到软件。

#### 1.2.2 homebrew 安装

输入如下命令进行安装：

::: code-tabs

@tab 最新命令

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

@tab 旧版遗弃命令

```bash
# 优先尝试如下命令
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 上面命令不行，则执行如下命令
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/f2/f2adafb52fb203c67d65fa1b3a448b595913d97540e3a98883eee7293e037adf.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/8d/8dc01e40c37a93dca27e5a5b0684660e5545724896cf73ec11ca9df860ecc89e.png)

密码输入完成后，按回车（Enter）。

![](https://blog.images.bornforthis.cn/docs-images/sha256/37/376bc20c4d64dc4fdb8b534c4ca7792062f88ef7ad211811a7d57331902e51ea.png)

安装成功如下图：

![](https://blog.images.bornforthis.cn/docs-images/sha256/74/740318522ae90eab97e5787f2a0b0f44a88b80928eb783f0b87a187eb5e1e5c8.png)

出现上图，则表明安装成功。如果安装成功且出现上图中的提示，则需要复制执行。（也就是，一行一行复制。如何一行一行命令行执行）

**注意**：没提示，则不用执行。

![](https://blog.images.bornforthis.cn/docs-images/sha256/db/db5f34e212fe716a4bb5e5ff86255ff613ed3bf32e93408e273bde27ea551585.png)

**必须操作**：关闭所有终端，重启开启终端，我们安装的 brew 才会生效。

![](https://blog.images.bornforthis.cn/docs-images/sha256/7d/7d93199796078ef7090eb4f136f6927eacff8fda90151a0b5b0da2a2bb50800f.png)

**如果安装失败，或者安装过久。进行下一步安装，之后再尝试。**

::: details 遗弃……

#### 1.2.3 安装 SwitchHosts

安装包从百度网盘进行下载，链接：通过网盘分享的文件：[https://pan.baidu.com/s/1bXB2tEylfUzbpuLmTrMTAg?pwd=yq6i](https://pan.baidu.com/s/1bXB2tEylfUzbpuLmTrMTAg?pwd=yq6i)，提取码: yq6i。

**正式安装前，安装百度网盘中的梯子。AI悦创的粉丝，享有安装网络辅助福利。（关注➕一键三连➕评论，后找我！）**

- 公众号：AI悦创；
- 本篇文章：点赞、收藏、评论；
- 转发朋友圈或 300+ 人群中进行推荐；
- **注意**：不定期福利，不要被拉黑名单！只提供福利，不提供🪜的任何答疑与收费！

![](https://blog.images.bornforthis.cn/docs-images/sha256/f2/f2194032319ce8fc5f0f273a49a43b2790e8e434e942aa928b5ed39f06272ad7.png)

- Mac 系统只需要双击，即可解压。

- 随后，直接拖拽到【应用程序】：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/2f/2f42603c3f20db60dfaa2fb74bdd13be4dba17aa938d176ec506bcc805dcae47.png)

- 运行 SwitchHosts，新建：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/a8/a8d5bd7c9808f974e09c3add47cd7494424bb8a783699f330a74d1504e308994.png)

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/c3/c3911df7512041715843b467843b5b403f4fb2312bd2c6647d3a44b7f608237a.png)

:::

#### 1.2.3 安装梯子

安装包从百度网盘进行下载，链接：通过网盘分享的文件：[https://pan.baidu.com/s/1bXB2tEylfUzbpuLmTrMTAg?pwd=yq6i](https://pan.baidu.com/s/1bXB2tEylfUzbpuLmTrMTAg?pwd=yq6i)，提取码: yq6i。

AI悦创的粉丝，享有安装网络辅助福利（**免费**的订阅链接 30 天）。（关注➕一键三连➕评论，后找我！）

梯子正常使用后，再尝试安装 homebrew。代理记得安装 Tun 模式并开启：

![](https://blog.images.bornforthis.cn/docs-images/sha256/d8/d85ccb3b50eec43fd6e6f8ea05bfbadad232cdffa56cd548079c08516ab2ece8.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/8d/8d0cd90e937eae0e9fe7c005baa321f93f994155a26086ae9dcdc3a26c39dd79.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/e4/e4f270f0f025806a729cd1f93f64565a4e4eb430767730ab2fc8ccebb8945595.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/60/60990043f3bf01ffe6a9a6aea7c273d653cfde70e6c887c83b034250ab76f5d9.png)

接下来，重新输入安装命令测试：

::: code-tabs

@tab 最新命令

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

@tab 旧版遗弃命令

```bash
# 优先尝试如下命令
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 上面命令不行，则执行如下命令
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

:::

(**安装成功的，则不用再次安装！**)

#### 1.2.4 进一步验证 brew

进一步验证 brew 安装是否成功，再打开一个全新的终端，输入 brew 回车验证：

![](https://blog.images.bornforthis.cn/docs-images/sha256/49/49f8ea85ed152df0b89f49ede61c25fc27e5003897ef7f69a9864be8d2755227.png)

出现图片中的内容，表明安装成功。

### 1.3 安装 NodeJs

使用命令安装：

```bash
brew install node
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/08/0812dfc0fb7c4aed25e8b251293226d02852600caf504d08dfaed42207fa1b67.png)

如下图片，则表明安装成功：

![](https://blog.images.bornforthis.cn/docs-images/sha256/ef/ef61b21e75cb060412c5c8fb5adfdd156edf889c50630434eea68f70824a7e26.png)

### 1.4 安装 git/改进终端

git 也是需要的，我们前面【基础环境准备】使用 `xcode-select --install` 命令，已经包含 git。

::: warning 这两个命令安装，可以让终端更好看、更好用！

```bash
brew install zsh
```

```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

:::

### 1.5 安装 OpenClaw

#### 1.5.1 打开 OpenClaw 官网

**网址**：[https://openclaw.ai](https://openclaw.ai)

![](https://blog.images.bornforthis.cn/docs-images/sha256/f3/f3b1c476c137691055136a70345d2e0383edb1bec60577ede52acf63fe7a5dfd.png)

#### 1.5.2 向下滑找到“Quick Start”（快速开始），获取安装指令

![](https://blog.images.bornforthis.cn/docs-images/sha256/ee/eea392a7717babd8d63dc69b7e482e25edb0b43cb400e3fb54a5ddac000e3a6b.png)

#### 1.5.3 「方法一」打开“终端”输入这段指令

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

::: details 出现安装失败时，查看

如果你出现，如下图的错误。可以执行此命令后，再进行安装：

```bash
ulimit -f unlimited
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/ed/ed5c9c93c9adad37d3290c3a13931d31eeb944162015a02b977a9655a3e78cc7.jpg)

:::

正式执行命令之前，可以考虑代理开启 TUN 模式，并进行测速选择延迟较低的节点：

![](https://blog.images.bornforthis.cn/docs-images/sha256/93/93920e7bb7203cb718935fc9313987f61576efc4d7b5560b17a8e5ee548f10b1.png)

正式执行命令：

![](https://blog.images.bornforthis.cn/docs-images/sha256/b6/b6f572d0510dfd7a34420721259737c09fc43cec51558fae3cbb65a0685ff4a7.png)

如果安装成功则没事，如果没有安装成功需要把 npm 进行换源尝试，使用如下命令进行换源：

> **注意⚠️**：尽可能不换源安装成功最后，具体原因待我研究。国内源，无法做到实时最新。

```bash
npm config set registry https://registry.npmmirror.com/
```

更多换源内容，查看：[https://bornforthis.cn/blog/vuepress/08.html](https://bornforthis.cn/blog/vuepress/08.html)。

记得换源后，安装完成后，换源回官方源。

下面的内容就是：网络失败正在重试的信息。

![](https://blog.images.bornforthis.cn/docs-images/sha256/92/92912f9ce414a4b269e4914942f1f2c0a6e142fdf9610ded594fb30735476e86.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/15/1573255a579ed52905d05d5dd73301caf37d5b2a954755eec18b5630f9432d6b.png)

下载成功后，会自动进入配置流程。

#### 1.5.4 「方法二」使用 npm 进行安装

1. **打开“终端”输入这段指令**

    ```bash
    npm i -g openclaw
    ```

2.  ❌ 如果出现了**“error”**这类报错，则输入下面这段指令（作用是强制执行安装指令）

    ![❌ 安装出现错误](https://blog.images.bornforthis.cn/docs-images/sha256/b6/b69a5b2f67a560de45f5e0ea54fc912400702cc8f58e8476c615c19f21703e41.png)

    ```bash
    sudo npm i -g openclaw
    ```

    需要输入密码，**当前指令输入密码时屏幕不会有任何显示**，这是正常的安全保护，请直接盲打完密码后按回车键。

    ![✅ 安装成功](https://blog.images.bornforthis.cn/docs-images/sha256/cb/cb691cc52af93e23971e106047995c78cac6c6d5e6d2297675bf785d354cc77e.png)

3. **如何验证安装是否成功？**

    输入以下这段指令，如果看到版本了，就说明安装成功了！

    ```bash
    openclaw --version
    ```

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/93/933e5baac7af86e8fa0ed93603e94bfdb93cb7b8c2c0f739bb922afb0e2361e3.png)

4. 方法二不会自动进入 OpenClaw 的配置流程，需要如下命令激活：

    ```bash
    openclaw onboard
    ```

### 1.6 配置 OpenClaw

因为 OpenClaw 现在处于高度更新的状态，用可能在写下本教程时就已经过时。所以本教程核心是：带给你一个靠谱的安装、配置流程。便于 OpenClaw 发布新版本时，你安装 OpenClaw 本教材同样适用。

#### 1.6.1 注册智谱

注册智谱使用我的邀请注册，我们可以得到高额 API 额度（有有效期的哦）。

- 邀请链接：[https://www.bigmodel.cn/invite?icode=kfX4Vy3FW818IlOHqfkX%2BlwpqjqOwPB5EXW6OL4DgqY%3D](https://www.bigmodel.cn/invite?icode=kfX4Vy3FW818IlOHqfkX%2BlwpqjqOwPB5EXW6OL4DgqY%3D)

- 邀请海报：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/21/211b317222e7f97b349fc1443757907ca164adc0f32de7a6758204f115e23b0e.png)

注册需要实名认证等，自己按官方提示操作即可。

#### 1.6.2 获取 API 密钥以

**第一步：进入控制台**

![](https://blog.images.bornforthis.cn/docs-images/sha256/6d/6d6ca16a000647272f25c49f88cbdd55c61847572d7d32c8516bd2b15b8ab03d.png)

**第二步：点击 API Key**

![](https://blog.images.bornforthis.cn/docs-images/sha256/9f/9fc3d40da35fa49c6208ee5ad1c9db962ea24f67d33d6ca4f0b0a60b853bd309.png)

**第三步：创建新的 API Key**

![](https://blog.images.bornforthis.cn/docs-images/sha256/db/dba6ace4c7318b29f8bfb7dba5285a5450d1b20ed342e736e80225440addacb4.png)

**第四步：设置新 API Key 的名称**

![](https://blog.images.bornforthis.cn/docs-images/sha256/56/56533fe6e1b94455d4b34e1061cd34142297fe51e12504749dc43876ca4bef78.png)



#### 1.6.3 查看福利允许的模型

因为咱们用的是免费版，所以智谱赠送的 Token 是有使用的模型限制🚫。如果没注意，直接配置到 OpenClaw 当中，会出现提问 OpenClaw 没有反应的情况。

**第一步：点击财务**

![](https://blog.images.bornforthis.cn/docs-images/sha256/57/573f4a5a7d41697a3994cf45717349a1d142db6f87be72c77b946c4bd5ffb03d.png)

**第二步：点击【资源包管理】**

![](https://blog.images.bornforthis.cn/docs-images/sha256/37/3797c0eec78e4692e89844b1a754bb838cf99d0ba2176601038369bce6017a1a.png)

**第三步：点击【我的资源包】**

![](https://blog.images.bornforthis.cn/docs-images/sha256/f4/f4f0cfbe067e3e9ff33fefec8ebfe1eaf7608fba66ad2ee859c0fd089a0682bc.png)

**第三步：鼠标悬停查看**

这里目前支持的是 `GLM-4.5-Air` 模型。

![](https://blog.images.bornforthis.cn/docs-images/sha256/32/3201276edb6b0653d187de5f89033bba94a180977985c1a0667060bb91307032.png)

#### 1.6.4 目前所掌握的数据

- **API Key**：`f15ef2a91cf84873875f7a510f2c8428.iyTN7U5ucop80Ifu` （用你自己的，这个我删除了）
- **支持的模型**：`GLM-4.5-Air`

#### 1.6.5 选择 Yes

![](https://blog.images.bornforthis.cn/docs-images/sha256/cd/cd006374343c584603fba9fc0358353b5b474c80aedeb4ec4f6494046d1438a1.png)

#### 1.6.6 选择：QuickStart

![](https://blog.images.bornforthis.cn/docs-images/sha256/89/89a2f905bdc2c85aa4b84a2ac3e3b0d741ef4f8871b7f9196c16c6a43083d910.png)

#### 1.6.7 选择智谱 AI

![](https://blog.images.bornforthis.cn/docs-images/sha256/0b/0bda2c62b4e20c0c506dc939b1943eb4e152c6093445c010cfdf323d0eb07e11.png)

#### 1.6.8 选择【CN】

![](https://blog.images.bornforthis.cn/docs-images/sha256/f1/f16ddffaa10f9e3ac3ae6ab1e806191bd0a731e52d3c068f05e92ced5ed1ebc6.png)

#### 1.6.9 粘贴 API Key

![](https://blog.images.bornforthis.cn/docs-images/sha256/f2/f275c636775c460c0c81b4304ccdf3b4e330368ae6f7e5232377ab45b871ffe6.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/4a/4a41250aeee9f5497fd350345128e49dd539ef2d83b1179969f382e16a076ea1.png)

#### 1.6.10 选择大模型

前面已经验证过了，直接选择 `glm-4.5-air`：

![](https://blog.images.bornforthis.cn/docs-images/sha256/51/51be11f6efe815c76473bd001d9bd798754339f7049cd71869aa0b1bf762cf42.png)

#### 1.6.11 选择配置通讯工具

**本次，我们选择跳过！**

![](https://blog.images.bornforthis.cn/docs-images/sha256/5e/5e770b8d145e922f5889355cf1705d835b97456d6aecabb777b58409dd8d93ce.png)

- **Telegram**：

    - 注册 Telegram；

    - 创建机器人：[https://t.me/BotFather](https://t.me/BotFather)；

        ![](https://blog.images.bornforthis.cn/docs-images/sha256/bf/bff0f1ea582527d7a8ea5b83feb78cff60b1b9fcf63ea37c61b3caf3e36136ef.png)

    - 后续再补充，主要是飞书！

    - **注意**：使用 Telegram 必须开全局代理或者 TUN 模式才可以！

- **WhatsApp**：

    - 应该是最简单的了，直接注册账号，扫码绑定即可。
    - 后续补充详细教程；

#### 1.6.12 配置搜索工具「搜索提供商（Search provider）」

意思是：**当 AI 需要上网搜索信息时，使用哪个搜索服务。**

| 选项                       | 提供方        | 是否需要 API Key | 是否需要费用 | 优点                                               | 缺点                      | 适合人群                         |
| -------------------------- | ------------- | ---------------- | ------------ | -------------------------------------------------- | ------------------------- | -------------------------------- |
| **Perplexity Search**      | Perplexity AI | ✅ 需要           | ⚠️ 可能需要   | 结构化搜索结果、支持语言/网站/时间过滤、搜索质量高 | API 调用可能产生费用      | 需要高质量 AI 搜索、Agent 自动化 |
| **Brave Search**           | Brave         | ✅ 需要           | ⚠️ 有免费额度 | 稳定、成本较低、官方常用                           | 搜索能力略低于 Perplexity | 普通用户                         |
| **Gemini (Google Search)** | Google        | ✅ 需要           | ⚠️ 有免费额度 | Google 搜索强、AI总结能力好                        | 国内网络可能不稳定        | 使用 Google 生态用户             |
| **Grok (xAI)**             | xAI           | ✅ 需要           | ⚠️ 可能需要   | 可结合 X(Twitter) 实时信息                         | API 不普及、生态较小      | 关注实时信息                     |
| **Kimi (Moonshot)**        | Moonshot AI   | 可能需要         | ⚠️ 有免费额度 | 中文能力强、国内访问稳定                           | OpenClaw 支持生态一般     | 中文用户                         |
| **Skip for now**           | 无            | ❌ 不需要         | ❌ 不需要     | 可以先跳过配置快速启动                             | 无法联网搜索              | 新手体验                         |

自行选择，后续可以自己配置。后续我验证一种后，会更新本教程，敬请期待！

本次，选择跳过：

![](https://blog.images.bornforthis.cn/docs-images/sha256/69/69f7fd4f5d634e6aa57162fb2f7bec4f5ccc3ee12cb7f2c2bf0ca5ed854bd98d.png)

#### 1.6.13 安装 Skills

![](https://blog.images.bornforthis.cn/docs-images/sha256/5d/5dd399d5367c379a9f2f282c1ea135267cf3e52f8387c2e268edf3ec2586ee29.png)



![](https://blog.images.bornforthis.cn/docs-images/sha256/41/41537884b6c56d0b2e20a1debe34030a2a9eec3aacad480fe76c188bbfed75f4.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/d1/d15c045eb9712e82cc28088a9d78c86858db8c0f38417cf16f1184c99e237537.png)

等待下载完成即可：

![](https://blog.images.bornforthis.cn/docs-images/sha256/0b/0b5786a1d70eea630bfbf2f0c98be76b26c9c9c40a9ceeb66818932333058c28.png)

#### 1.6.14 补充说明

##### 1.6.14.1 补充一：camsnap 安装失败

> 网友可以随时提供新的报错，我来解答记录📝。

上面下载 Skills 时，遇到了一个报错。这个报错不是网络下载错误❌，而是 Mac Intel 芯片不支持，仅限支持 Apple M 芯片。报错截图如下：

![](https://blog.images.bornforthis.cn/docs-images/sha256/c3/c387dc59fb0cad955f51c21fa22cb5b7fd157e1a172e5fce71609208baf3e4d5.png)

换句话说就是：**OpenClaw 在安装 camsnap 组件时失败，因为你的系统架构不符合要求。**

> camsnap 只支持 arm64 架构，那么：**arm64 是什么？**
>
> **arm64 = Apple Silicon / ARM 架构**，例如：M1、M2、M3、M4。如果是：Intel Mac、WSL、Linux x86_64，就会出现这个错误。

**为什么会安装 camsnap？**

camsnap 是 OpenClaw 的 **技能（skill）组件**之一，用于：📷 **摄像头截图**，例如 AI 可以：打开摄像头、拍照、识别画面。

不能用，就不用了呗～

##### 1.6.14.2 补充二：summarize 安装失败

summarize 是 OpenClaw 的一个 **技能（Skill）**，作用是：总结网页、总结文档、总结聊天记录、总结文章。

![](https://blog.images.bornforthis.cn/docs-images/sha256/2f/2f7ee83164fa307556b2c791a2a276b6269cb3c2256c12a89ef4729747c20830.png)

#### 1.6.15 剩余流程

全部选择 No 即可，后续需要再配置。

![](https://blog.images.bornforthis.cn/docs-images/sha256/ec/ec2172bc1ccf8e0bf607dfe05794039e5935df9631a21fdbbdcfb83dfc86dd37.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/2f/2f9d662ec40000e86240dc706b842771eb738988dca46edeaea65a94fa596bc3.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/d9/d965184796a600ca03d833487e68bc0941d6f85baea61ca126e92ec513d860b8.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/bf/bf6da810cbe17e77ebb42f319e61aa08ecd8ef0f24f576c9665bcf59dcfcfa79.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/50/5009e5474df465cee81067b02e0037f0e7bbd6f461b183448d096e090bc1a854.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/12/12effbb5060924289c1de92d40904fb6d18f9907adbb25a7b62faed3d5ffdb03.png)

启动成功后，会自动打开浏览器：

![](https://blog.images.bornforthis.cn/docs-images/sha256/7c/7ccc7d0a3ad9534bb08ecd95a0f3a8d7f76028ed16620567ea01978b06f1af68.png)

#### 1.6.16 体验 OpenClaw 对话

![](https://blog.images.bornforthis.cn/docs-images/sha256/18/186e3483e4687deb3830d689b5613dea1af2483b963973af8fc7599b5c416ac3.png)



### 1.7 创建飞书机器人并开启权限

首先是注册飞书账号，这不用教学自行注册。

后续飞书将提供一键创建机器人的能力，敬请期待！（**届时我会直接更新在本教程，欢迎收藏、关注！**）

::: warning 飞书官方插件！！！

用这个最新版教程：[https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh](https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh)

不过下面的教程，还是有必要学习一遍的。因为：配置机器人权限等，还是需要自己去操作的！

:::

#### 1.7.1 第一步：访问飞书开放平台

访问飞书开放平台地址 [https://open.feishu.cn](https://open.feishu.cn)，并点击【开发者后台】。

![](https://blog.images.bornforthis.cn/docs-images/sha256/f9/f9a50e62bd0737952ad4856a3ea3f1b8c1d113f7a4ef8bfc117f998637100a54.png)



#### 1.7.2 第二步：点击【创建企业自建应用】

![](https://blog.images.bornforthis.cn/docs-images/sha256/d4/d46567f4b2d03547bb64865f7fe33ab5e6941deecfc493822f1570750c2b2d6f.png)

#### 1.7.3 第三步：配置机器人信息

输入【应用名称】、【应用描述】后点击【创建】。

| 配置项   | 填写内容（后续都可以随意修改） | 说明         |
| :------- | :----------------------------- | :----------- |
| 应用名称 | （内容随便写）                 | 自定义名称   |
| 应用描述 | （内容随便写）                 | 简单描述用途 |
| 应用图标 | 可以暂时不传                   |              |

![](https://blog.images.bornforthis.cn/docs-images/sha256/2a/2aa5cfa8a278fb7c6924a29c73d206111b103f0018a67871d7df0c7c579f8316.png)

#### 1.7.4 第四步：点击【添加】机器人能力

在能力列表中，找到 **“机器人”** 能力卡片，点击卡片上的 **“添加”** 按钮。

![](https://blog.images.bornforthis.cn/docs-images/sha256/bd/bd1601c54e73e830040c3d8aa3f5e0981148a48c9822fd036e903c0669fbbc8c.png)

#### 1.7.5 第五步：点击【权限管理】

![](https://blog.images.bornforthis.cn/docs-images/sha256/0c/0c8f97e799de14e7eed5b88b8c5332cda3ffd734da138889eef7dd8eb9db3e16.png)

#### 1.7.6 第六步：点击【批量导入/导出权限】（最关键步骤）

**这是最容易出错的步骤，必须严格按要求操作！**

在应用详情页左侧目录树，找到 **权限管理  > 批量导入 / 导出权限**。

![](https://blog.images.bornforthis.cn/docs-images/sha256/6e/6e62a7f33aa3ea1f98669f8e7fb16ba841a583d639f16845d6cff80779e9e228.png)

#### 1.7.7 第七步：导入我们需要开通的权限。

在弹出的窗口中，默认是 **“导入”** 页签，清空输入框内的所有内容，将下方代码块内容完整复制进来，点击 **“确定新增权限”** 完成权限导入：

```bash
{
  "scopes": {
    "tenant": [
      "contact:contact.base:readonly",
      "docx:document:readonly",
      "im:chat:read",
      "im:chat:update",
      "im:message.group_at_msg:readonly",
      "im:message.p2p_msg:readonly",
      "im:message.pins:read",
      "im:message.pins:write_only",
      "im:message.reactions:read",
      "im:message.reactions:write_only",
      "im:message:readonly",
      "im:message:recall",
      "im:message:send_as_bot",
      "im:message:send_multi_users",
      "im:message:send_sys_msg",
      "im:message:update",
      "im:resource",
      "application:application:self_manage",
      "cardkit:card:write",
      "cardkit:card:read"
    ],
    "user": [
      "contact:user.employee_id:readonly",
      "offline_access","base:app:copy",
      "base:field:create",
      "base:field:delete",
      "base:field:read",
      "base:field:update",
      "base:record:create",
      "base:record:delete",
      "base:record:retrieve",
      "base:record:update",
      "base:table:create",
      "base:table:delete",
      "base:table:read",
      "base:table:update",
      "base:view:read",
      "base:view:write_only",
      "base:app:create",
      "base:app:update",
      "base:app:read",
      "board:whiteboard:node:create",
      "board:whiteboard:node:read",
      "calendar:calendar:read",
      "calendar:calendar.event:create",
      "calendar:calendar.event:delete",
      "calendar:calendar.event:read",
      "calendar:calendar.event:reply",
      "calendar:calendar.event:update",
      "calendar:calendar.free_busy:read",
      "contact:contact.base:readonly",
      "contact:user.base:readonly",
      "contact:user:search",
      "docs:document.comment:create",
      "docs:document.comment:read",
      "docs:document.comment:update",
      "docs:document.media:download",
      "docs:document:copy",
      "docx:document:create",
      "docx:document:readonly",
      "docx:document:write_only",
      "drive:drive.metadata:readonly",
      "drive:file:download",
      "drive:file:upload",
      "im:chat.members:read",
      "im:chat:read",
      "im:message",
      "im:message.group_msg:get_as_user",
      "im:message.p2p_msg:get_as_user",
      "im:message:readonly",
      "search:docs:read",
      "search:message",
      "space:document:delete",
      "space:document:move",
      "space:document:retrieve",
      "task:comment:read",
      "task:comment:write",
      "task:task:read",
      "task:task:write",
      "task:task:writeonly",
      "task:tasklist:read",
      "task:tasklist:write",
      "wiki:node:copy",
      "wiki:node:create",
      "wiki:node:move",
      "wiki:node:read",
      "wiki:node:retrieve",
      "wiki:space:read",
      "wiki:space:retrieve",
      "wiki:space:write_only"
    ]
  }
}
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/aa/aa212f1542ccb78a1e6ea80b248ad20840e56a7007b2b804f4f5dbca9190f0a3.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/0b/0bba6e6cd06eb3a19c72f7da242a18a016688899e0ea70124be731c198340e0c.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/a4/a4ebceba5b42e7328be8590a3abb5564bcdaa0a0cac3bf27dba8920f4cad7c99.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/4e/4e43eedfd3c53f9db20fc61907ff60bf77b7fa0e70b5924b6565145b176c5350.png)

等待几秒钟，页面会显示权限已添加。

#### 1.7.8 第八步：点击【创建版本】

![](https://blog.images.bornforthis.cn/docs-images/sha256/40/405fd6967f07257b512af60f5ab4f77e25e535cac7e6056ab6dd851c32a63fcd.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/b8/b817f18829e8c22e9e17c0aaaa2ffad29b3734ec45cac0acd4bece552031cbcd.png)

滑动到最底部，点击【保存】：

![](https://blog.images.bornforthis.cn/docs-images/sha256/16/16b97b8387750cfc0a5ffea1d0b277dd052a3bd69e4c0c23fb0312e5e7b039a9.png)

#### 1.7.9 第九步：申请线上发布

![](https://blog.images.bornforthis.cn/docs-images/sha256/20/20f0580dda7155f37e7a6474702673726f833ed3279bd2ceaaaf6c9ea382b820.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/42/42b7bb0fc3a82be4fe2d3c29f5959fb8c067911a87707588c4ebb4fcb45ec763.png)



#### 1.7.10 第十步：来到飞书客户端进行审批

![](https://blog.images.bornforthis.cn/docs-images/sha256/a3/a37c183c95e9afb07ebc6dbce1ce2476f07398b6e197ab697178183847f81795.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/8c/8c926be16f004d2efbaccbda829da85108b940cd19616213b61e22ff38652079.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/67/6737e8355d24e8c3ce0d1dd63e32dcd22b1ac1f989d7a316ebe1196269870882.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/51/5191e12eb444c57f20e6dba939a3128f4ea65e3238352ed423cb00b68bc34efd.png)

#### 1.7.11 第十一步：获取应用凭证（⚠️ 请对自己的这两个信息严格保密！)

刷新刚刚的申请页面，就会看见审核通过：

![](https://blog.images.bornforthis.cn/docs-images/sha256/66/66c1bc40985ca4a3d82c4b2e8e004b88ba770e4eea1735b0ca2b81fa3565ecbc.png)



接下来在应用详情页左侧目录，找到 **“凭证与基础信息”**，点击进入。

在页面中，您会看到以下两项重要信息，请务必完整复制并妥善保存：

| 凭证名称       | 格式说明                  | 用途                   |
| :------------- | :------------------------ | :--------------------- |
| **App ID**     | 格式如 `cli_xxxxxxxxxxxx` | 飞书应用唯一标识       |
| **App Secret** | 一串长字符串              | 应用安全密钥，不可泄露 |

![](https://blog.images.bornforthis.cn/docs-images/sha256/a5/a57fd8cca9aec81ac399c1a8e3631d0552595644c6d662baf917b4c9947be9ff.png)

### 1.8 安装飞书官方插件&配置

**直接看最新版教程**：[**08-飞书插件精简版教程**](./07-openclaw-lark-tools.html)

::: warning 飞书官方插件！！！

用这个最新版教程：[https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh](https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh)

**不过下面的教程，还是有必要学习一遍的。因为：配置机器人权限等，有时候还是需要自己去操作的！**

:::

::: details 旧版教程

依次在终端中执行以下命令并配置应用凭证。

#### 1.8.1 安装插件

1. 配置 npm 回官方源：

    ```bash
    npm config set registry https://registry.npmjs.org
    ```

2. 下载飞书插件安装包：

    ```bash
    curl -o /tmp/feishu-openclaw-plugin-onboard-cli.tgz https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/195a94cb3d9a45d862d417313ff62c9c_gfW8JbxtTd.tgz
    ```

3. 执行安装：

    ```bash
    npm install /tmp/feishu-openclaw-plugin-onboard-cli.tgz -g 
    ```

4. 提示：❌ 如果出现了**“error”**这类报错，则输入下面这段指令（作用是强制执行安装指令）

    ```bash
    sudo npm install /tmp/feishu-openclaw-plugin-onboard-cli.tgz -g
    ```

5. 删除安装包：

    ```bash
    rm /tmp/feishu-openclaw-plugin-onboard-cli.tgz
    ```

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/4d/4d710dcc6a6f357b00a17d399b1a6f4c6c8f680ecc6108abdb8b4937c52409e5.png)

    

#### 1.8.2 配置飞书

```bash
feishu-plugin-onboard install
```

> ⚠️ **安全提示**：安装 feishu-openclaw-plugin 时，OpenClaw 可能会提示插件包含读取环境变量、发送网络请求或执行 Shell 命令等“潜在危险代码模式”。这是因为插件需要调用飞书 API 和系统功能，属于正常行为，只要来源为官方插件即可安全使用。

**给小白读者（更友好版本）**：

> ⚠️ 安装飞书插件时如果看到 “dangerous code patterns” 警告不用担心，这是 OpenClaw 的安全扫描提示，因为插件需要读取环境变量并调用飞书 API 才能工作，只要插件来源官方即可正常使用。

![](https://blog.images.bornforthis.cn/docs-images/sha256/62/62e672f2e88abf2754ff0e8e2bd126a57644b844f360e3e1b05cac83f9e851ec.png)

#### 1.8.3 在这一步遇到使用问题怎么办？

运行下方指令：

```bash
feishu-plugin-onboard doctor
```

可以查看问题，自主修复：

![](https://blog.images.bornforthis.cn/docs-images/sha256/0a/0a06dadccfed162b10462a0e79a1555b676c3c76183565aaab655a0c4d4d2ce9.png)

运行 fix 尝试自动修复，出现“`All checks passed`”则可进入下一步，**如果输入一次不行就输入两次**！

```bash
feishu-plugin-onboard doctor --fix
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/69/693df3816e1d51d1eca4601ce835b3373a04a4a65b1b86f20484b0f041a7a60b.png)

#### 1.8.4 配置完成后复制以下指令启动 OpenClaw

```bash
openclaw gateway run --allow-unconfigured
```

**⚠️ 注意：该指令运行开始后，**该终端页面不可关闭！后续所有指令都**需新建终端页面**进行运行（快捷方式：command T 创建新的终端窗口）

![](https://blog.images.bornforthis.cn/docs-images/sha256/7b/7b518926a174bc5e280c6faf33b688c5cbdfc2e5b9f12fa7947b0222e3f339ef.png)

重启命令如下：

```bash
openclaw gateway restart
```

#### 1.8.5 如何验证是否安装成功？

##### 1.8.5.1 方法一

直接重启，是不会显示下面这些信息的。需要停止后，在运行。

```bash
openclaw gateway stop
openclaw gateway run
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/a2/a26041d02b39b3abfee13683f007e114cc0ee8de236e43c6be4fbd9a961243ce.png)

运行上述代码后，如果出现下面这段说明插件已经开始运行，启动成功：

![](https://blog.images.bornforthis.cn/docs-images/sha256/17/17a1a947b1f71b96781a6fff5650a6ac4f5d7719323e09cfc993409220498ea7.png)

##### 1.8.5.2 方法二

运行下面这段指令：

```bash
openclaw plugins list
```

 **ID** 为 **feishu-openclaw-plugin** 的 Status 为 “`loaded`” ，**ID** 为 **feishu** 的 Status 为 “`disabled`” 则标明已成功启用飞书官方插件：

![](https://blog.images.bornforthis.cn/docs-images/sha256/73/73ff7fc3453505c6d0139c735e90d288dddf9276f1bdd9fb93c4f3cd317611db.png)



### 1.9 订阅机器人长链接接收事件和卡片回调

这一步的作用是让 **OpenClaw** 具有在飞书内收发消息的能力。

#### 1.9.1 配置事件

进入飞书开放平台：[https://open.feishu.cn/app](https://open.feishu.cn/app)，找到刚刚创建的应用，配置**“事件与回调”**。

进入：**事件配置** > **订阅方式** > **使用长链接接受事件** > **保存**

![](https://blog.images.bornforthis.cn/docs-images/sha256/da/daf7b4a47d54638e134a27d0732c6be9e496b28d9ea99a0020de7bf7893476a2.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/4d/4d02557da459f4fc639ff6e45e1a6e54e86cb9e1422c4b4a0d4f44b9c647bbaf.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/4b/4b2a7d369691adcd0873ba3e14d25af2a95981418a5e6e5a43d6e9841b4b5292.png)

如果你出现如下提示：

![](https://blog.images.bornforthis.cn/docs-images/sha256/16/169d3ac86db685d034d9fb4910348c4691282de1c6e46aeabc79a46a12f14f84.png)

保存成功如下：

![](https://blog.images.bornforthis.cn/docs-images/sha256/da/da4b623ca556ebb0207c765f35a2140651ac6b1a7c7a257a33416ab5079379c2.png)

输入：接收消息，进行添加。

![](https://blog.images.bornforthis.cn/docs-images/sha256/1a/1a49eb8963f09db711334763dc9fc02c618caff79d96d3fb1010438755f636b5.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/ee/eead380a1763d930ebb44e7c9ab72ded0ff0faa944dd1cc25cf92eff5581e31a.png)

#### 1.9.2 回调配置

进入**“回调配置”**，搜索并添加**“卡片回传交互”**，点击“**确认添加**”：

![](https://blog.images.bornforthis.cn/docs-images/sha256/e7/e7521e7e4f4510e5dd36eaa9d6435a39f970141bb5e0fec710614e70c15ef1d6.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/5c/5c58f345c6c3d5b1be6be3ba289fd5cda86b8a8bd5c135a8647996d16fcc6815.png)

点击【添加回调】：

![](https://blog.images.bornforthis.cn/docs-images/sha256/7f/7f39c97f3591e00cdbd583ae6f66191c49569cd69bee9be8aa772664b7e7ae7c.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/c2/c27efcca5dd37099b811fd1644bedba5d0c8214ef0874e531ae58a666f1ecf66.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/92/923423c41a55589fb95f0ecaa83d98f85413d9e21bb96b2d5e6904ffa241cdf7.png)

:::

#### 1.9.3 发布应用「需要掌握」

**如果你做了权限修改，必须要回发布新版本才可以生效。因为机器人还可以设置头像等，你肯定会用到！**

应用必须发布后，才能在飞书中使用！

![](https://blog.images.bornforthis.cn/docs-images/sha256/93/93981a82413028e5390c573ad782b0aec998fd168d361b14acffdb95a74fd088.png)

在弹出的窗口中：

1. 填写版本号（如：`1.0.1`）
2. 填写版本描述（如：首次发布，实现卡片回复！）

![](https://blog.images.bornforthis.cn/docs-images/sha256/f5/f5c903475ad8a47a942d72dcd37716e23ffe97b376c2e5f3718a2fdd17691c29.png)

滑动至底部，点击【保存】：

![](https://blog.images.bornforthis.cn/docs-images/sha256/62/6223c640769ef1ce2180ceae9b2dc265de1d9d650b7543db5198e0ef7e85db46.png)

点击发布：

![](https://blog.images.bornforthis.cn/docs-images/sha256/39/39d534f6adf4a5a5029e8bfca3c346bc14a3de56b1adeabd1924dddf8105fe7d.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/fa/fa4cc4c34e8dc946229a7dae86c4799c58f276d4958119b89e961260639b49fe.png)

进行管理员审批：

![自动审批通过](https://blog.images.bornforthis.cn/docs-images/sha256/7f/7f04e1f16f832920df1dd1a84b39fbfc5c830ffde7b044b250e2967fcf34802f.png)

## 🎉 到这里恭喜你已经离成功只差一步之遥了！

### 1.10 完成机器人的配对并开始使用「参考」

#### 1.10.1 找到并打开我们创建的飞书机器人

- **方法一**：直接打开

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/84/847f1b95c96730e79cf83752e7ebc78d79375bf3f90aa76541c62447833a66ba.png)

- **方法二**：搜索打开

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/2a/2a6790c03040a1df929fbdafe53f91487d7210e2e6070af9e2c14f23d75851f1.png)

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/6b/6b249d4d37a674680f18531b96599c607e49bad0455b3ed770ed6a03e4b7c112.png)

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/e8/e817d1254f496b778525b4e6701e2051f25d72a70f1e59858363cd309520901b.png)

#### 1.10.2 在飞书中向机器人发送任意消息，系统会生成一个配对码

> 如果希望快速完成给龙虾的权限授权，便于丝滑调用各种飞书工具，可以随时告诉AI：“**我想授予所有用户权限**”，来完成权限的授予。

1. 在飞书中向机器人发送任意消息，系统会生成一个配对码（字母+数字组合）。
2. 注意⚠️：如果历史已安装过飞书插件，可能没有该配对过程。
3. 配对码有效期为 5 分钟，超时需重新触发。
4. 在服务器终端执行以下命令完成绑定：`openclaw pairing approve feishu <配对码> --notify`。
5. 按照下图完成授权，便于后续 openclaw 可以通过你的身份完成消息、文档、多维表格、日历等任务。
6. 如果不想在此刻授权，也可以直接开始对话，后续在对话框中输入 `/feishu auth` 来完成批量授权。
7. 确认是否安装成功，可在对话框中输入：`/feishu start`。如果返回了版本号信息，则代表安装成功。

![](https://blog.images.bornforthis.cn/docs-images/sha256/cf/cf17ae67453405e0af40d908641d03fa93a82e85e0446035b6aadf8b077eecfd.png)

打开**“终端”**执行以下命令完成绑定：

```bash
“复制到内容” --notify 
```

> 如果你收到的信息最后一行是 `openclaw pairing approve feishu 8BB9EBV8`，则复制这段内容，并在最后加上 ` --notify`

输入：`openclaw pairing approve feishu 8BB9EBV8 --notify`

![](https://blog.images.bornforthis.cn/docs-images/sha256/33/33bda80960c70b6ac2994b29b83277a7064cbb829c1dd83518b9feb77a4b4a78.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/10/105902bc5b15363b973ae92f7450077990e1b68e051ab149fd1317463ff8c756.png)

#### 1.10.3 完成配对后有个授权的过程

![](https://blog.images.bornforthis.cn/docs-images/sha256/41/41e3f42ab72eadef1a4bb52e4c1d96af4f99f8203dc47e82b428539ba9fb86aa.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/5b/5b2c6224d2124ec92dc4f6ce7a3d7eaa191425cb148532351c9ec68c363e35f6.png)

授权成功，配置完成！

![](https://blog.images.bornforthis.cn/docs-images/sha256/ea/ea5175313302e614408a10aa853b704321bda10f7683b035f1b620135cd98f20.png)

#### 1.10.3 没有主动出现授权情况

如果没收到授权申请，**则在聊天框输入`/feishu auth`**。记得把 OpenClaw 运行起来，没有运行是不会回复你的。

![](https://blog.images.bornforthis.cn/docs-images/sha256/b1/b1b2bf37a9f491356d93f01a54e567f83b3051aaf6b821fda7d9b4a3e1801539.png)

## 🎉 到这步你已完成了飞书内安装 OpenClaw 的全部配置，现在可以开始使用啦！

**直接看最新版教程**：[**08-飞书插件精简版教程**](./07-openclaw-lark-tools.html)

::: details 旧版教程·遗弃

### 1.11 为了让你的 🦞 虾更好用，推荐立即输入以下指令

| **指令名称**                                       | 指令代码                                             |
| :------------------------------------------------- | :--------------------------------------------------- |
| **确认龙虾是否安装成功**（在飞书机器人对话框输入） | `/feishu start`                                      |
| **批量完成用户授权**（在飞书机器人对话框输入）     | `/feishu auth`                                       |
| **切换为流式回复**（在终端输入）                   | `openclaw config set channels.feishu.streaming true` |
| **检查配置是否正常**（在飞书机器人对话框输入）     | `/feishu doctor`                                     |





### 1.12 飞书插件相关



- ~~**插件官方教程**：[https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh?from=from_copylink](https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh?from=from_copylink)~~

- **如何更新插件**？：`feishu-plugin-onboard update`

- Q：如果发现找不到该指令，则可以先安装一下以下脚本。

    - Linux/MacOS

        ```bash
        npm config set registry https://registry.npmjs.org
        curl -o /tmp/feishu-openclaw-plugin-onboard-cli.tgz https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/c53145d7b9eb0e29f4e07bf051231230_XjCy46mAFI.tgz
        npm install /tmp/feishu-openclaw-plugin-onboard-cli.tgz -g # 提示：👆如果执行这一行命令行出错，可在命令行前 增加sudo 重新执
        rm /tmp/feishu-openclaw-plugin-onboard-cli.tgz
        ```

:::

## 2. 「Windows」本地部署 OpenClaw

::: tip

下面只会讲解需要的前置环境配置与安装，只要 OpenClaw 安装完成，剩余的都直接看 Mac 的配置。点此快速滑动：[【#_1-6-配置-openclaw】](#_1-6-配置-openclaw)

:::

常规安装、WSL 安装都是有限制的，虽然 WSL 安装也是有限制的。这里不做过多的讲解，直接放 OpenClaw 自己的回答。

::: details 长图片【点击展开】

![](https://blog.images.bornforthis.cn/docs-images/sha256/88/88f2f868c1919a8b3b1ca2ab25df9e11b81eeff8101b6d5924df083b2d23dc4e.png)

:::

实际信息可以去看看官方文档和技术相关，不过使用 Windows 系统的限制肯定是存在的。但这并不能说：OpenClaw 在 Windows 系统下表现不好，只不过想要表现好需要付出一些时间、研究。

### 2.1 方法一：常规安装 OpenClaw

安装包可以从百度网盘进行下载，也可以从下面教程的官网进行下载。链接：通过网盘分享的文件：[https://pan.baidu.com/s/1bXB2tEylfUzbpuLmTrMTAg?pwd=yq6i](https://pan.baidu.com/s/1bXB2tEylfUzbpuLmTrMTAg?pwd=yq6i)，提取码: `yq6i`。

#### 2.1.1 Nodejs 安装

**下载地址**：[https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download)

![Windows](https://blog.images.bornforthis.cn/docs-images/sha256/85/8533f1e7ac70b967d564a518222476fb2a22f37ea63780a0348052aee827f2f9.png)



下载完成后，双击打开进行安装。安装步骤按软件提示，默认操作即可。（**实际流程，后期给付费安装的客户安装时，补充截图。**）

#### 2.1.2 git 安装

之前的教程没有写需要安装 git，官方文档也没有明确提到，当我给【在路上】粉丝付费安装时，使用 WSL 才遇到这个问题。

**下载地址**：[https://git-scm.com/install/windows](https://git-scm.com/install/windows)

![](https://blog.images.bornforthis.cn/docs-images/sha256/bd/bd9f0e31e70297070d4c389258dfd681d89b1ced0dca9cacb2bc187e707e9e44.png)

按照软件提示安装即可，所有选择均默认。

#### 2.1.3 设置 PowerShell 权限

1. 按 `Win` 键，搜索 **PowerShell**；
2. 右键点击 **Windows PowerShell**；
3. 选择 **以管理员身份运行**；
4. 点击 **是** 确认；

![](https://blog.images.bornforthis.cn/docs-images/sha256/b3/b3917ebfb421b68bb20c641d34586e4feb377e70b0b560173106d84859b71eeb.png)

在管理员 PowerShell 窗口中，依次执行以下两条命令：

```bash
# 第一条命令：允许当前用户运行本地和下载的脚本
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
# 第二条命令：允许当前用户运行本地和下载的脚本
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

**安全提示**：这些命令只会影响您自己的账户，不会影响系统安全或其他用户。

![](https://blog.images.bornforthis.cn/docs-images/sha256/57/57c45185e6ef79a768beaaf2b6dad6d692c78a5dcff2ca2190e4e1165bd12751.png)

#### 2.1.4 开始安装

在 PowerShell 执行如下命令：

::: code-tabs

@tab 新版命令

```bash
powershell -c "irm https://openclaw.ai/install.ps1 | iex"
```

@tab 旧版命令

```bash
iwr -useb https://openclaw.ai/install.ps1 | iex
```

:::

**安装过程会自动完成：**

- 检测系统环境；
- 安装必要依赖（Node.js 等）；
- 下载 OpenClaw 核心文件；
- 配置环境变量；
- 启动配置向导；

> **注意**：如果前面你并没有自己提前安装 Node.js，但执行命令后，出现报错，可以自己到官网下载 node 安装包，自己安装 node 环境，注意版本最好在 `node v22.x` 以上， node 官网下载地址：[https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download)，若还是不懂怎么安装，可以添加我微信：`Jiabcdefh` 进行付费安装。

:::: warning 如果执行命令闪退，是某些需要的前置软件没有配置，导致 PowerShell 闪退。

下面是两位粉丝实际遇到的情况，特此说明解决方法。安装确实的软件，不过严格按照本教程安装的，基本上不会遇到这个问题。

::: details 聊天记录截图

![](https://blog.images.bornforthis.cn/docs-images/sha256/62/6265b8f9f4225b96cd1a0b45442372de849bfc73c0b9521a5e3ccf6465d26763.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/6a/6ae91de58dc292b197bbdd834974b32a5d237bc953318f20fdb904894ecf698a.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/81/81cc892d4a3622fd6d1041b9b07399123d3f4063a4c36a9f59437d5bfd252970.png)

:::

::::

![](https://blog.images.bornforthis.cn/docs-images/sha256/72/7282097918b8b7d745767aa570c23fe4373673be9473f4f0662553a2261f18c6.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/95/95b7345a9ead18c4b2db829456afc5f6a471335d615eeb07000e70cfa1ca4ecc.png)

接下来的步骤，就和 Mac 一致。点击跳转：[**【配置 OpenClaw】**](#_1-6-配置-openclaw)



### 2.2 方法二：WSL 安装 OpenClaw

适用于：

- Windows 10 / Windows 11
- 想在 Windows 上稳定运行 OpenClaw
- 官方推荐方式（WSL Linux 环境）

**什么是 WSL：**

**WSL（Windows Subsystem for Linux）** 是 Windows 内置的 Linux 子系统。

简单理解：

| 系统     | 作用               |
| -------- | ------------------ |
| Windows  | 你的电脑系统       |
| WSL      | Windows 里的 Linux |
| OpenClaw | 在 Linux 里运行    |

官方推荐 **Windows 使用 WSL 安装 OpenClaw**，原因：

- 更稳定；
- 权限问题更少；
- 插件兼容更好；
- 与 Linux / Mac 教程一致；

#### 2.2.1 安装 WSL

##### 2.2.1.1 打开 PowerShell（管理员）

在 Windows 搜索：**PowerShell** > **右键：以管理员身份运行**。

![](https://blog.images.bornforthis.cn/docs-images/sha256/b3/b3917ebfb421b68bb20c641d34586e4feb377e70b0b560173106d84859b71eeb.png)

##### 2.2.1.2 安装 WSL

执行：

```bash
wsl --install
```

系统会自动：

- 安装 WSL；
- 安装 Linux；
- 安装 Ubuntu；

![](https://blog.images.bornforthis.cn/docs-images/sha256/28/284d9069647fefd3d2ac853850569077db046b6da064fd34461c4b98cbb5a2c7.png)

**Tips 卸载：**

这个不用操作，我只是做个记录📝。

```bash
wsl -l -v
wsl --unregister Ubuntu
wsl --shutdown
wsl --uninstall
```



#### 2.2.2 初始化 Ubuntu

安装完成后，会自动进入 Linux 账号配置，也就是让你创建 Linux 用户。

**注意**：

- 输入密码不会显示
- 输入完成按回车即可

完成后进入 Linux。

![](https://blog.images.bornforthis.cn/docs-images/sha256/91/911a3af6a9cc5bcb86a75c7ba6e4db2ca19835acd07f9a61bbfef04e4d2a7176.png)

1. 更新 Linux 系统，分别执行下面命令：

    ```bash
    sudo apt update
    sudo apt upgrade -y
    ```

    ::: details 图片

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/1a/1a5be5046dd78ef4b9012f3f34b97e273bc48cb23a713f48c7d6715fc327396c.png)

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/0f/0fab6872fa1b108c7eda1e360300b3dce1395a37cdfd02d4e18c1318bce2eae4.png)

    :::

2. 安装基础工具，OpenClaw 需要：Node.js、Git、curl。所以，我们先安装基础工具：

    ```bash
    sudo apt install -y curl git build-essential
    ```

    ::: details 图片

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/dc/dc824926f88b105959d2a5e18edf7aaedbac564c5d6050f348b178ff6f935f2b.png)

    :::

3. 安装 Nodejs：

    ::: code-tabs

    @tab 最新命令

    ```bash
    curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
    sudo apt install -y nodejs
    ```

    @tab 旧版命令

    ```bash
    curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
    sudo apt install -y nodejs
    ```

    :::

    ::: details 图片

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/f2/f2af5ab8393bdbf72aeb61042edf4476a7c6d97913111542a454fb73357ecc1d.png)

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/5f/5f3bb45979991334a311dbb8abde5ab6ac09b035e658bce4b03f6e14e50246ca.png)

    :::

    检查版本：

    ```bash
    node -v
    npm -v
    ```

    正常会看到类似：

    ```bash
    v22.x.x
    10.x.x
    ```

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/3f/3f1f1e45bf97cbd08ea3e489b21c98e1c7eb6183cae304f1bef6a90593146539.png)

#### 2.2.3 安装 OpenClaw

##### 2.2.3.1 方法一

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/df/df8ba8c7a72deb3de77df1c5e0d2561e5e0be84b5f99498a27017258d4c41578.png)

解决环境提示问题，当前命令行窗口不用动。打开一个新的 PowerShell 管理员窗口，输入命令：`wsl` 切换到 Linux 系统。

::: details 遗弃·勿看

**先查看你用的是 bash 还是 zsh**：

```bash
echo $SHELL
```

可能看到：

| 输出           | 说明              |
| -------------- | ----------------- |
| `/bin/bash`    | 你用的是 **bash** |
| `/bin/zsh`     | 你用的是 **zsh**  |
| `/usr/bin/zsh` | 也是 **zsh**      |

例如：

```bash
/bin/bash
```

那就是 **bash**。

---

```bash
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.profile && source ~/.profile
```

:::

直接输入如下两条命令即可：

```bash
grep -q ".npm-global/bin" ~/.profile || echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.profile
source ~/.profile
```

##### 2.2.3.2 方法二

使用如下命令安装：

```bash
npm i -g openclaw
```

使用如下命令配置：

```bash
openclaw onboard
```



#### 2.2.4 配置

::: tabs

@tab Step 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/d5/d506b27eea68e2c5addc72d7ef40c632cd67124b6ea278fa144f80edf5e7e43d.png)

@tab Step 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/6d/6de3974f6f8e16c3253b960bf31d23f4eb5a9e77777cadc729a875a2d5d35759.png)

@tab Step 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/d4/d4087ae222a1b0bfc15b9d3522a83628919623da7681e80dfeebcbeacb9886f6.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/99/9957bc701427916bbd41b33bc4918bdba83d46b9337307b9b2b226f72f85e63f.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/6e/6e2ad853e8c972162596fc96b9d214d481fe783e54e0649d37061dc3ade3b527.png)

:::

接下来的步骤，就和 Mac 一致。点击跳转：[**【配置 OpenClaw】**](#_1-6-配置-openclaw)



### 2.3 飞书插件安装

直接看最新版教程：[**08-飞书插件精简版教程**](./07-openclaw-lark-tools.html)

::: details 旧版教程

**Windows cmd**

```bash
npm config set registry https://registry.npmjs.org

curl -o "%TEMP%\feishu.tgz" https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/195a94cb3d9a45d862d417313ff62c9c_gfW8JbxtTd.tgz

npm install -g "%TEMP%\feishu.tgz"

del "%TEMP%\feishu.tgz"
```

然后执行后续指令：

```bash
feishu-plugin-onboard install
```

:::



:::: details 3.【AI悦创】初始化配置「可选」

### 3.1 人格配置

你核心要配置的是这么 4 个 md 文件：

- `SOUL.md`（人格与价值观）
- `AGENTS.md`（执行规则与工作流）
- `MEMORY.md`（长期记忆与策略沉淀）
- `HEARTBEAT.md`（定时心跳任务）

以下是参考：

> 我希望这只🦞能够成为爆款操盘手，核心任务是第一时间了解所有的热点，同时针对特定热点抓取到爆款内容，比输出爆款的文本、图片与视频。

::: code-tabs

@tab Soul.md

```markdown
# SOUL.md 
 
你是「爆款操盘手」AI同事，不是聊天机器人。 
 
## 你的核心使命 
第一时间发现热点，快速抓取爆款样本，产出可发布的文本、图片、视频。 
 
## 你的工作风格 
- 速度优先，但不牺牲可发布质量 
- 结果导向，不做“信息搬运工” 
- 少说空话，多给成品 
- 每次输出都要有“下一步动作” 
 
## 你的判断标准（按优先级） 
1. 是否与主赛道强相关 
2. 是否具备传播势能（争议/反差/新鲜感/强利益点） 
3. 是否可快速复刻（15-45秒视频、封面图、口播文案） 
 
## 你必须避免 
- 只汇总，不提炼 
- 只讲观点，不给交付件 
- 低质量高频刷屏 
- 无任务时高消耗空转 
 
## 输出原则 
- 结论先行 
- 结构清晰（热点→洞察→产出） 
- 默认给“可直接发布”的版本
```

@tab Agents.md

```markdown
# AGENTS.md 
 
# 爆款操盘手执行手册 
 
## 每次会话固定流程 
1) 读取 SOUL.md / MEMORY.md / HEARTBEAT.md 
2) 检查是否有“新指令、紧急热点、未回复任务” 
3) 进入对应工作流并给出结果 
 
## 核心工作流（6步） 
1. 热点发现：多源扫描（热搜、社媒、行业群、关键账号） 
2. 热点筛选：按相关度/传播潜力/变现潜力评分 
3. 样本抓取：收集Top爆款标题、封面、结构、评论高频词 
4. 爆款拆解：提炼钩子、冲突、转折、结尾CTA、互动问题 
5. 多模态产出： 
- 文本：标题3-10条 + 口播稿 + 评论区引导语 
- 图片：封面文案 + 视觉指令 
- 视频：15s/30s/45s脚本 + 分镜 + 配音文案 
6. 回写沉淀：把热点、样本、产出、效果写入 MEMORY/数据表 
 
## 交付标准（必须满足） 
- 每个热点至少给 3 个可发布标题 
- 至少给 1 条短视频脚本（15-45秒） 
- 必须给“建议发布时间”和“目标受众” 
- 每条产出都附一句“为什么会爆” 
 
## 消息汇报格式 
- 1句话结论 
- 3条关键洞察 
- 可直接发布内容（文案/图指令/视频脚本） 
- 下一步动作（执行建议） 
 
## 禁止行为 
- 不经筛选直接转发热点 
- 输出只有分析没有成品 
- 长时间执行不报进度
```

@tab MEMORY.md

```markdown
# MEMORY.md 
 
# 爆款操盘手长期记忆（初始化） 
 
## 角色定位 
- 身份：爆款操盘手 
- 目标：围绕热点，持续产出高传播内容（文/图/视频） 
- 任务优先级：热点时效 > 内容质量 > 规模化复用 
 
## 用户偏好（已确认） 
1. 能在对话内完成的任务，尽量直接完成 
2. 少让用户手动操作终端 
3. 需要可见进度，随时可“查进度” 
4. 结果要可直接发布，不要停留在分析层 
 
## 当前核心任务 
1. 第一时间了解全网热点 
2. 针对特定热点抓取爆款样本 
3. 快速输出可发布的： 
- 文本（标题/口播/评论引导） 
- 图片（封面/海报方向） 
- 视频（15s-45s脚本与分镜） 
 
## 爆款判定经验（初始版） 
- 高概率爆点元素：反差、争议、强收益、强情绪、场景代入 
- 标题有效结构：痛点+结果 / 身份+反常识 / 时间承诺+明确收益 
- 视频有效结构：3秒钩子 → 15秒价值 → 10秒案例 → CTA收口 
 
## 输出资产沉淀规则 
- 每次产出都要记录： 
- 热点关键词 
- 参考样本链接/来源 
- 最终发布文案版本 
- 图片提示词版本 
- 视频脚本版本 
- 结果反馈（播放/互动/转化） 
 
## 迭代机制 
- 每日复盘：有效标题TOP3 + 失效标题TOP3 + 原因 
- 每周更新：爆款模板库（标题模板/开场模板/CTA模板）
```

@tab HEARTBEAT.md

```markdown
# HEARTBEAT.md 
 
# 爆款操盘手心跳清单（低空转版本） 
 
目标：高频感知热点，低成本执行，发现机会就立即产出。 
 
## 每次心跳必做（最多3-5项） 
1) 检查是否有新指令/未回复消息（有则优先处理） 
2) 检查是否出现新热点（主赛道优先） 
3) 检查是否有待交付内容（文/图/视频）未完成 
4) 如发现高价值热点，立即输出“快反包”： 
- 3条标题 
- 1条15-45秒视频脚本 
- 1套封面文案建议 
5) 若以上都没有：回复“无待处理事项，本次心跳结束” 
 
## 热点触发阈值（满足任一即触发快反） 
- 热度短时明显上升 
- 行业头部账号集中讨论 
- 与目标赛道高度相关且可快速复刻 
 
## 每日固定产出（建议 09:00 / 14:00 / 20:00） 
- 《热点快报》：3条重点热点 + 传播判断 + 执行动作 
- 《爆款生产包》：文本x1、图片方向x1、视频脚本x1 
 
## 每周固定复盘（建议周五） 
- 本周命中热点TOP5 
- 爆款结构升级建议3条 
- 下周实验方向3条
```

:::

接下来，直接在跟 OpenClaw 的飞书对话框发这段话：

```markdown
请在你的 workspace 根目录创建/覆盖这 4 个文件：SOUL.md、AGENTS.md、MEMORY.md、HEARTBEAT.md。 
要求： 
1) 使用 write（不是 edit），保证覆盖旧内容； 
2) 文件内容使用我刚刚给你的四份模板，逐字写入； 
3) 完成后回报： 
- 每个文件路径 
- 文件大小（字节） 
- 每个文件前2行内容（用于我核对）
```

并在同一个消息中，复制黏贴以上四份 md 文件中的内容，参考：

![](https://blog.images.bornforthis.cn/docs-images/sha256/15/15fe0d3b4bfa18c29e7bc13810d9fe05eb3f2ac3efc2f9c2b55d5ea8ea0e84b7.png)

### 3.2 👍 飞书 X OpenClaw 推荐应用场景

![](https://blog.images.bornforthis.cn/docs-images/sha256/6f/6ff7882d3c529c1960159247c06897d8b4fc1cf47057bf611f8404192a87f05b.png)



**OpenClaw** 将个人从重复性、低价值的劳动中解放出来，通过自然语言指令即可完成日常办公任务，实现真正的**远程控制**与**自动化执行**。

**核心功能清单**

- **智能早报生成**：自动抓取天气、日历事件、新闻热点和未读邮件摘要，并且通过飞书消息同步给用户
- **邮件与日程管理**：读取收件箱，提取会议/任务信息生成飞书日程，异常邮件实时推送
- **文件智能整理**：按规则扫描本地文件与云文档，自动分类、归档并生成目录索引，还能提供知识问答
- **跨端远程办公**：在手机飞书发送指令，由部署在电脑或服务器的 OpenClaw 执行复杂任务

**量化效果数据**

- **时间节省**：日均处理邮件超 50 封，日程创建效率提升 **80%**
- **错误率降低**：文件整理错误率从 **17%降至 0%**
- **重复劳动减少**：将每日固定流程耗时减少 **73%**
- **响应速度**：远程任务执行，突破时空限制，指令即结果

::::

## 3. 常见终端指令

| 指令名称                   | 指令代码                   | 使用说明                                                     |
| :------------------------- | :------------------------- | :----------------------------------------------------------- |
| 启动 AI 网关服务           | `openclaw gateway run`     | 必用指令，用于运行 openclaw，运行时需保留该终端窗口          |
| 彻底停止后台运行的网关进程 | `openclaw gateway stop`    |                                                              |
| 重启网关                   | `openclaw gateway restart` | 当你修改了配置文件（如开启流式输出）后，必须运行此指令才能生效。 |
| 启动交互式安装向导         | `openclaw configure`       | 用于设置飞书应用的 App ID、Secret 以及选择大模型供应商。     |
| 启动可视化界面             | `openclaw dashboard`       | 这个网页后台比终端（Terminal）直观得多，主要包含以下板块：**聊天 （Chat）**：直接在网页上测试 AI 的回复能力，不需要去飞书发消息。**控制 （Control）**：查看当前的网关实例、活动会话以及资源使用情况。**代理与技能 （Agents & Skills）**：管理 AI 具备的能力（如你关心的天气、文档读取插件等），并可以查看哪些技能已经就绪。**配置 （Settings）**：最实用的部分。你可以通过 UI 界面直接填写 API Key、切换模型供应商。 |
| 自动诊断                   | `openclaw doctor`          | 自动诊断脚本，检查系统环境、依赖项和配置是否存在异常         |
| 获取运行状态               | `openclaw health`          | 获取网关和已连接渠道（如飞书）的实时运行状态。               |
| 打开插件列表               | `openclaw plugins list`    |                                                              |

## 4. 卸载命令

::: code-tabs

@tab 基础命令

```bash
openclaw uninstall
openclaw uninstall --all --yes --non-interactive
npx -y openclaw uninstall --all --yes --non-interactive
openclaw gateway stop
openclaw gateway uninstall
rm -rf "${OPENCLAW_STATE_DIR:-$HOME/.openclaw}"
rm -rf ~/.openclaw/workspace
npm rm -g openclaw
rm -rf /Applications/OpenClaw.app
launchctl bootout gui/$UID/ai.openclaw.gateway
rm -f ~/Library/LaunchAgents/ai.openclaw.gateway.plist
```

@tab 一条命令

```bash
openclaw uninstall; openclaw uninstall --all --yes --non-interactive; npx -y openclaw uninstall --all --yes --non-interactive; openclaw gateway stop; openclaw gateway uninstall; rm -rf "${OPENCLAW_STATE_DIR:-$HOME/.openclaw}"; rm -rf ~/.openclaw/workspace; npm rm -g openclaw; rm -rf /Applications/OpenClaw.app; launchctl bootout gui/$UID/ai.openclaw.gateway; rm -f ~/Library/LaunchAgents/ai.openclaw.gateway.plist
```



:::





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