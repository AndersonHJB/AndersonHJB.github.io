---
title: 01-OpenClaw 安装教程「适合：Mac、Windows」
icon: blog
date: 2026-02-03 10:42:38
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

::: center

### 【保姆级教程】手把手教你安装 OpenClaw 并接入飞书，让AI在聊天软件里帮你干活

:::

::: tip 更新记录📝

- [x] 2026-02-08 22:16:26：飞书配置部分待改进，OpenClaw 部分没有大问题了。

:::

你好，我是悦创。

这里先做一下简单的科普：`OpenClaw` 的名字经历了三次变更，第一次叫做 `ClawdBot`，后来因为名字跟 `Claude` 太过相似，被 `Claude` 告侵权，遂改名 `MoltBot` 。

但是后来在改名过程中遭遇域名和社交账号被抢注，甚至出坑同名加密货币割韭菜的情况，导致名称传播受阻。

最终定名为：**OpenClaw**。

所以，名字经历先后顺序为：ClawdBot -> MoltBot -> OpenClaw

大家不要因为名字困惑了，怀疑是不是自己下错软件了，他们都是同一个。

## 1. 什么是 OpenClaw？

### 1.1 真正“能干活”的个人 AI 助手

**OpenClaw（前身为 Clawdbot）** 是一款在 **2026 年迅速走红的开源个人 AI 助手**，在 GitHub 上已收获 **10 万+ Star**。  

它和你熟悉的那些“只会聊天”的 AI，有着本质上的不同。

### 1.2 🚀 它和传统 AI 的根本差异

- **不是只会说，而是真的会做**：不仅能回答问题，还能直接在你的电脑上执行操作。

- **全天候在线的数字助理**：你休息时，它依然在后台替你完成任务。

- **完全开源 & 永久免费**：没有黑箱，代码透明，所有数据牢牢掌握在自己手中。

- **全平台指挥，一句话下达任务**：海外支持：WhatsApp、Telegram、Discord、Slack、iMessage；国内支持：飞书、钉钉等主流办公与即时通讯工具  

### 1.3 🤖 OpenClaw 能为你做什么？

它不是“陪你聊天”的机器人，而是**真正会在你电脑上动手干活的 AI**。

- 你说一句：“**帮我整理一下上个月的邮件**”  

    它就开始自动分类、归档、清理。

- 你已经入睡：它仍在后台运行，退订垃圾广告、预约行程、巡检日志、定位 Bug……

- 你在任何一个聊天软件里：给它发条消息，它就立刻执行。

### 1.4 ✨ 一句话总结

**把事情交给它就行了。**

从整理文件、处理邮件，到自动化任务，甚至联动智能家居控制灯光—— OpenClaw 都会在后台默默完成。

它不是助手的“概念版”，而是你电脑里真正存在的 **JARVIS 级 AI 管家**。  

一个**超级智能、能落地、能执行的个人 AI 助理**。

令我感到遗憾的是：还不能达到真正的“手”不能自动识别各种软件，要是可以识别就可以扩展更多功能。（至少还不能发微信～）

## 2. 安装 Node.js

下载地址：[https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download)

![Windows](https://blog.images.bornforthis.cn/docs-images/sha256/85/8533f1e7ac70b967d564a518222476fb2a22f37ea63780a0348052aee827f2f9.png)

自行选择 Mac 或 Windows 进行下载、安装，安装步骤默认操作即可。

## 3. 开始安装「MacOS & Windows」

### 3.1 Mac 和 Windows 说明

Mac 直接启动终端即可，Windows 需要按如下指示操作：

1. 设置 PowerShell 执行权限

    1. 按 `Win` 键，搜索 **PowerShell**
    2. 右键点击 **Windows** **PowerShell**
    3. 选择 **以管理员身份运行**
    4. 点击 **是** 确认

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/b3/b3917ebfb421b68bb20c641d34586e4feb377e70b0b560173106d84859b71eeb.png)

2. 在管理员 PowerShell 窗口中，依次执行以下两条命令：

    ```bash
    # 第一条命令：允许当前用户运行本地和下载的脚本
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    # 第二条命令：允许当前用户运行本地和下载的脚本
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    ```

    > **安全提示**：这些命令只会影响您自己的账户，不会影响系统安全或其他用户。

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/21/213529d0132101656a817f8fbd97f66695164ebf6ae999aad73ec532ff717ddb.png)

### 3.2 执行一键安装命令

- Mac 使用官方推荐命令，进行一键安装：

    ```bash
    curl -fsSL https://openclaw.ai/install.sh | bash
    ```

- Windows 在 PowerShell 执行如下命令：

    ```bash
    iwr -useb https://openclaw.ai/install.ps1 | iex
    ```

**安装过程会自动完成：**

- 检测系统环境
- 安装必要依赖（Node.js 等）
- 下载 OpenClaw 核心文件
- 配置环境变量
- 启动配置向导

> **注意**：如果前面你并没有自己提前安装 Node.js，但执行命令后，出现报错，可以自己到官网下载 node 安装包，自己安装 node 环境，注意版本最好在 `node v22.x` 以上， node 官网下载地址：[https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download)，若还是不懂怎么安装，可以添加我微信：`Jiabcdefh` 进行付费安装。

**Tisp**：下面截图是 Windows 界面，Mac 类似，就不提供截图了。

![](https://blog.images.bornforthis.cn/docs-images/sha256/72/7282097918b8b7d745767aa570c23fe4373673be9473f4f0662553a2261f18c6.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/95/95b7345a9ead18c4b2db829456afc5f6a471335d615eeb07000e70cfa1ca4ecc.png)

## 4. 初始配置向导

安装完成后，会自动进入配置向导（`openclaw onboard`）。

### 4.1 风险告知

这一步主要是告诉你，使用 OpenClaw 可能会有一些风险。请问你是否继续？

按 向左方向键 ←，选择 `Yes`，按 `Enter` 回车确认：

![](https://blog.images.bornforthis.cn/docs-images/sha256/84/84108c5f3f131b9ffb94063fd57c9cdf78b33a95c14bb4fa27770344233365c9.png)

### 4.2 选择 QiuickStart 模式

![](https://blog.images.bornforthis.cn/docs-images/sha256/e9/e95524c04ba45a6fdb83ed2594ec8e57e2db4659b198fd0433f8c84638d617a8.png)

### 4.3 配置 AI 模型 API Key

OpenClaw 需要连接到大语言模型才能工作。Openclaw 比较费token，国外模型成本高，门槛也高，这里我选择国内的智谱的 GLM 4.7

> 如果没有智谱的 API Key，点击官方地址自己注册账号获取 API key：[https://www.bigmodel.cn/invite?icode=kfX4Vy3FW818IlOHqfkX%2BlwpqjqOwPB5EXW6OL4DgqY%3D](https://www.bigmodel.cn/invite?icode=kfX4Vy3FW818IlOHqfkX%2BlwpqjqOwPB5EXW6OL4DgqY%3D)

![](https://blog.images.bornforthis.cn/docs-images/sha256/bf/bfa3b805118fc756a694b3d7c5fcd73fcbca6a3301478dc2b3266d6173f5952c.png)

输入自己的 API Key：

![](https://blog.images.bornforthis.cn/docs-images/sha256/db/dbc4c9f05883caacfe981b2575cb192222656238abc9df69eeb0a1fb08c5963a.png)

### 4.4 选择 AI 模型

> 这里我选择默认的 GLM 4.7，也是智普当前的旗舰模型。

![](https://blog.images.bornforthis.cn/docs-images/sha256/e0/e0e2eb19edb0d0ec622556cc2e99f9c6742ab07878e2d6c8a8c734701f381bdd.png)

### 4.5 连接即时通讯平台

配置完 AI 模型后，OpenClaw 会询问你要连接哪个通讯平台？

![](https://blog.images.bornforthis.cn/docs-images/sha256/21/212d37b6749d4e02ad61e7b33745deda0b15253b30ddb469dac9ef74956cadd1.png)

> OpenClaw 原生支持的即时通信平台主要是海外的 WhatsApp、Telegram、Discord、Slack、iMessage 等，国内用户不习惯，这里国产即时通信软件大厂也跟进了，现在钉钉，飞书等都已支持接入 OpenClaw

**后面**会带领大家把**飞书机器人接入 OpenClaw**，使大家可以通过飞书即可指挥 OpenClaw 为我们干活，但是飞书配置比较复杂，这里我们先选择跳过，后面我们可以通过继续进行配置：

![](https://blog.images.bornforthis.cn/docs-images/sha256/d2/d2986056a014f6bfe57b43adf9a0831d069a32a6738408944017d60304296165.png)

### 4.6 选择 Skills

这里也选择：No，暂不配置，后面通过UI界面进行配置：

![](https://blog.images.bornforthis.cn/docs-images/sha256/c4/c43454406652a8415657254a12f73a94e3373992b0d4da0851f2c5548b20f392.png)

### 4.7 是否开启 Hooks

操作步骤：先敲**空格**，表示选中当前项，再敲回车键。

![](https://blog.images.bornforthis.cn/docs-images/sha256/96/96befc4f3c3c3b1f619195fc1b0f5e26287e62db40933fdecca6beb72c28f74a.png)

### 4.8 启动服务并打开 UI 界面

此时它会自动再打开一个命令窗口来启动服务：

![](https://blog.images.bornforthis.cn/docs-images/sha256/47/47c472aa22c7776fde7b83fec9d77f967a49447470130c294784d3dc038cc672.png)

> 这个过程是在启动服务，可能会需要等一点时间。

Mac 系统不会打开新的命令窗口，只会在同一个窗口执行。

同时，大约过 30 秒左右，我们回到刚才的设置窗口，选择 `Open the Web UI` ，打开 `OpenClaw` 的 UI 界面：

![](https://blog.images.bornforthis.cn/docs-images/sha256/7b/7bd6919ab4e0bb5bf0ac3880fdd599980a4dfbb9896050d53363666096b7169a.png)

浏览器自动打开Web UI界面：

![](https://blog.images.bornforthis.cn/docs-images/sha256/6a/6ae45be0b326cd35c0e7528186fd30773d212a602dff2376e6c0e81c23630baa.png)

### 4.9 测试一下

![](https://blog.images.bornforthis.cn/docs-images/sha256/92/92bd0bf3ca3a60e59a149e2310dd580affe04a4e3cf13afe1a66873bfa317805.png)

## 5. 对接飞书机器人

我们需要先到飞书平台创建自己的机器人来接入 OpenClaw：

### 5.1 来到飞书开发者后台

飞书开放平台地址：[https://open.feishu.cn](https://open.feishu.cn)，没有飞书账号的，需要自己注册账号。

点击右上角进入 **开发者后台**：

![](https://blog.images.bornforthis.cn/docs-images/sha256/9a/9ae4b20225376e48390a5f20dd441dadff50cfe12705fe3534c88e34f011964e.png)



### 5.2 创建应用

![](https://blog.images.bornforthis.cn/docs-images/sha256/08/084ed0cb2698ff8119c10db573deb981f9fd1606d71c940bdcdbca87aae46b8a.png)

### 5.3 填写应用信息

![](https://blog.images.bornforthis.cn/docs-images/sha256/66/66dc3c769941678d0f6ad9ce947736e8c6c4b83008126256767bbe00d25a96e9.png)

### 5.4 给应用添加机器人

![](https://blog.images.bornforthis.cn/docs-images/sha256/4b/4be8afda0b7819e05803e9b3da8103ba5079d46fbd48244bd12ad9943b242c96.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/16/165383162600731666256b0078cd7d73e006ce22d51453f982b3d389f03b774f.png)

### 5.5 给应用配置权限

![](https://blog.images.bornforthis.cn/docs-images/sha256/75/7552e054af35e2a7e4e857955f47835974d249a91f57211c6eb7d69e1e1358ef.png)

把即时通讯相关的权限全部开通：

![](https://blog.images.bornforthis.cn/docs-images/sha256/9b/9b3a8e98e37c6b045c4ea5018ecb727a0f0552fddbdf2bb1b54b7551a2c00aca.png)



### 5.6 创建版本并发布

![](https://blog.images.bornforthis.cn/docs-images/sha256/15/15df24959d16d85b3316f9978eeeb8a6251ec7c9c413399b8e507c02d628e13a.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/3f/3f8c8f8d77ab0a0d2cfe6f9af8d814a10559bae2fc83557c9b0f254634713f5a.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/3c/3c86598f145a141e5c7fb19b4f635e459ad9ee5eedadb90eb451295627de8773.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/dd/dd9ff6b118a6d2790582545c7f0d58c5b005442e9055ea6bf7b25db57d21d340.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/cf/cfec5ce7d50da8b2b807c5e02bca741019cfbe85a605a7b20a00f646689a25f4.png)

### 5.7 来到飞书客户端进行审批

![](https://blog.images.bornforthis.cn/docs-images/sha256/ca/ca375cc138fd14ecd63265f57f3f9d690579ec7074904bbb796fd53ff01c99ed.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/4c/4ce76c61ac389fcbadc86f82f562f9c7a10e5eb5ab0845d1b0aa6c700555ad41.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/1a/1ac20b81691dc5e6adad94a5f9850f51e97398fd289650c9b5b063c81326451b.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/3a/3a93e2f0dbc455cb9efe73321c72ae0af5e1050509a3dbfa532f202d19a59e5f.png)



### 5.8 获取自己的应用凭证

![](https://blog.images.bornforthis.cn/docs-images/sha256/39/39e330711f79587e309e34c2c609335b24d9bd76d66fa23bd4a9410dd26efcdd.png)

### 5.9 安装飞书插件

**你可知道：写着写着 OpenClaw 就更新了，也支持了飞书功能。估计是有“大佬”，向 OpenClaw 官方投稿了，依然是以插件的形式存在。链接：[https://docs.openclaw.ai/channels/feishu](https://docs.openclaw.ai/channels/feishu)** 下面的图片因为已经做好，所以就不进行太多更新，整体是一致的。（国外的通讯软件也很好用，很好配置（推荐））

> OpenClaw 官方飞书投稿的教程，写的很烂～

并且在你初始化 OpenClaw 的时候，就会有飞书的选项。

![](https://blog.images.bornforthis.cn/docs-images/sha256/e5/e5fcce586ab5d043f70c35a0a10354b714fa72bb49bcc784215d028631891977.png)

并且选择进去后，会提示：是否下载。

![](https://blog.images.bornforthis.cn/docs-images/sha256/05/052eddd5569ef6ffaee4bc52b5ebab5766035289b9024203f5ddce08b99fd773.png)

---

【Mac 操作相同，打开终端】打开 powershell，输入以下命令，安装飞书插件：

```bash
# openclaw plugins install @m1heng-clawd/feishu
openclaw plugins install @openclaw/feishu

# 如果你的 OpenClaw 一开始使用 OpenClaw 是从仓库抓取下来，仓库已经内置。可以使用如下命令：
openclaw plugins install ./extensions/feishu
```

安装成功后，再打开一个新的命令窗口，开始配置飞书插件：

输入命令：

```bash
openclaw config
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/ab/ab9db334dc22c119da2e55982dcd76de336d25f492c19e001def6026d2982514.png)

选择渠道：

![](https://blog.images.bornforthis.cn/docs-images/sha256/f6/f663207fd76ac4fe0e744dcb520279aa6b756e41cb69d920ce329cd870b772b4.png)

选择配置链接：

![](https://blog.images.bornforthis.cn/docs-images/sha256/67/67ccdae0335e61e17dcd805919d55aa6b13b4a713a912c13b3e6072f798820a9.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/cd/cdfdb80f6d4ca036ed4d84c2192e5e02a9644b049d147dadd685e66fcabe5ab1.png)

输入飞书的 AppID，AppSecrect：

![](https://blog.images.bornforthis.cn/docs-images/sha256/80/80b6dd5567d60d15d1f0e18330e82e2f2ab3ed7dc2f4fa3bc78c1d535610d184.png)

域名选择中国的：

![](https://blog.images.bornforthis.cn/docs-images/sha256/9b/9b8a0ed37828f20544f55905a224c0583d1de44b60a18074f665107b29fdc8c0.png)

接受群组聊天：

![](https://blog.images.bornforthis.cn/docs-images/sha256/1f/1f083e8d3baebd0391910f98785ba36626a91528ab7bcaf7dfa39b4fcdce9c40.png)

选择完成：

![](https://blog.images.bornforthis.cn/docs-images/sha256/49/49b42082b0dfc0d0e5b0fb5460a6239e42816c1c02dea3acf769df14a7f05b27.png)

选择 Yes：

![](https://blog.images.bornforthis.cn/docs-images/sha256/a4/a473c3ccd810e525e6639966adae9d5ce39c6900bb4c712a6dbfdf2b310c4b9d.png)

选择 open：

![](https://blog.images.bornforthis.cn/docs-images/sha256/15/155e6116964e4211b219f5b5e4f4224d9ca993c5059d76e59f471b3d31056312.png)

选择继续，完成配置：

![](https://blog.images.bornforthis.cn/docs-images/sha256/e3/e3a90475b9344fa2678324b46ccbf624796ae8f0911ecbe7575f618ac5819f11.png)

重启服务，使配置生效。终端可以看到飞书插件已经配置成功：

![](https://blog.images.bornforthis.cn/docs-images/sha256/05/05e80ffb529bead6e6df4960ab474b0bd47bd35dc273b766da6b7186e8bd65d2.png)

### 5.10 回到飞书后台设置事件回调

![](https://blog.images.bornforthis.cn/docs-images/sha256/f6/f6b160e454e2a30d77a03e0271b1c64d96c309d3f5fdc99da6e1449ae9fa3ba7.png)

选择 `使用长连接接收事件` ：

![](https://blog.images.bornforthis.cn/docs-images/sha256/26/262cc53760c9a53aae37e2ba2755a80fab32ea514e6f4a0c88af697b60c67a1c.png)

可以看到添加事件按钮由原来的灰色不可点击变为可点击：

![](https://blog.images.bornforthis.cn/docs-images/sha256/74/746b0d6d445e545a60a3c927b9a48d3aac0a0e51f80e3258ac6f1a238a4789ae.png)

添加接收消息事件：

![](https://blog.images.bornforthis.cn/docs-images/sha256/73/7348813b7843313f2c6014490b9295a41220cf9d70e6e2ad05766f843a23398e.png)

给应用开通获取通讯录基本信息的权限：

![](https://blog.images.bornforthis.cn/docs-images/sha256/31/31805b93b808d471161111e39794fdd056189989d4b77fd36ca941d49edc8d39.png)

重新发布版本：

![](https://blog.images.bornforthis.cn/docs-images/sha256/ec/eccb5b8c4b93d6dd412d10aa05d616993d929d0a36f2670c6a40325ff99cfdce.png)

跟前面的步骤一样，发布为在线应用即可。

现在可以在 飞书中与 AI 助手对话了！

### 5.11 在飞书中与 OpenClaw 对话

来到飞书客户端或者手机飞书 app 上：

![](https://blog.images.bornforthis.cn/docs-images/sha256/8f/8fe4564601be97145cfd2924605ed59aadef35cd81da0e010923924cdb22b509.png)

以下是 openclaw 文件夹下面的文档内的内容：

![](https://blog.images.bornforthis.cn/docs-images/sha256/25/25153bb673c9c96e596debb584f0a7527a4da5d82f905d32427909b5bd3d3e75.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/31/31869905eec4a61c65395844c5495059c1b6531e851200f51f5684d6de9a9469.png)

### 5.12 访问 Web 控制面板

配置完成后，PowerShell 窗口底部会显示控制面板链接，格式类似：

```bash
Control UI: http://127.0.0.1:18789
```

1. 复制完整链接
2. 在浏览器中打开
3. 即可看到可视化UI管理界面

## 6. 常用命令速查

| 命令                     | 功能             |
| :----------------------- | :--------------- |
| `openclaw onboard`       | 重新进入配置向导 |
| `openclaw status`        | 查看运行状态     |
| `openclaw health`        | 健康检查         |
| `openclaw gateway start` | 启动服务         |
| `openclaw gateway stop`  | 停止服务         |
| `openclaw update`        | 更新到最新版本   |
| `openclaw doctor`        | 诊断问题         |
| `openclaw uninstall`     | 卸载 OpenClaw    |



## 7.FAQ

### Q1：npm 证书校验失败

![](https://blog.images.bornforthis.cn/docs-images/sha256/82/824e8d238808571d9cfc03987ad42c4de56e45f524e359ed5036b4e84e4e607c.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/75/75113159080b5cfe7da3c0cb4eb9f10ee4dfd1641b5090220c07108e9c52ecc6.png)

::: code-tabs

@tab 错误提示

```bash
➜  ~ curl -fsSL https://openclaw.ai/install.sh | bash

  🦞 OpenClaw Installer
  Welcome to the command line: where dreams compile and confidence segfaults.

✓ Detected: macos
✓ Homebrew already installed
✓ Node.js v23.11.0 found
✓ Git already installed
→ Installing OpenClaw (latest)...
→ npm install failed; cleaning up and retrying...
```

@tab 解决方法

```bash
npm config set strict-ssl false  # 关闭
npm config set strict-ssl true   # 开启
```

:::

## Q2：OpenClaw 不回复

我的修好了，忘记截图出问题的界面，图片来自：[https://zeabur.com/forum/posts/697ca71becc019f67a62eaac](https://zeabur.com/forum/posts/697ca71becc019f67a62eaac)

![](https://blog.images.bornforthis.cn/docs-images/sha256/c1/c1a92e897ff441392991c219f4c9d07837637ec44820482a9b87ddd09a886614.jpg)

![](https://blog.images.bornforthis.cn/docs-images/sha256/39/39f6384bbd5c96ef9018a3a95a7750365b30e834e9214cbd8080f3c05be7336b.jpg)

如果你使用官方推荐的命令：`curl -fsSL https://openclaw.ai/install.sh | bash` 安装之后，出现如下现象：

- **现象一**：在你初始化安装时，出现类似提示：`npm install failed; cleaning up and retrying...`；（或者连准备安装 OpenClaw 的版本号都没显示出来）

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/75/75113159080b5cfe7da3c0cb4eb9f10ee4dfd1641b5090220c07108e9c52ecc6.png)

- **现象二**：已经按照官方安装方法，OpenClaw 一直不回复；

- **现象三**：就算换模型、给 API 充钱、卸载重新安装都不回复；

- **现象四**：安装 OpenClaw 提供的安装包安装后，一切显示正常，但是依然不回复；

经过长达两天不间断的排查，我发现：

- 使用国内源安装 brew、node 版本并不是最新的，虽然符合要求，但这显然不对劲！
- npm 所走的证书也问题；（使用命令：`npm config set strict-ssl false`）

可以考虑如下操作建议：

- **Step 1**：重装 Mac 系统；（可选｜便捷）

- **Step 2**：启动终端，安装 Xcode：输入命令 `xcode-select --install` 后，Mac 会弹出安装提示，点击安装即可；

- **Step 3**：下载 SwitchHosts：[https://switchhosts.vercel.app/zh](https://switchhosts.vercel.app/zh)；（可选｜在无法正常请求 GitHub 时需要开启）

    按下图配置，新建配置文件，名称随意：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/1c/1cbdedfa768d0030546afb67d45f88bfec28a8b4e4048ae31499223ed0ddd3b6.png)

    ```bash
    199.232.68.133 raw.githubusercontent.com
    199.232.68.133 user-images.githubusercontent.com
    199.232.68.133 avatars2.githubusercontent.com
    199.232.68.133 avatars1.githubusercontent.com
    ```

    这个软件，先安装不要启动。

- **Step 4：**推荐使用 brew 官方安装方法安装，国内安装方法虽然快速、方便，但是会存在一切无法预料的问题；

    - 官方命令：`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`；

    - 国内镜像命令：`/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"` 国内教程：[https://bornforthis.cn/blog/2022/02.html](https://bornforthis.cn/blog/2022/02.html)

    - 如果安装出现问题、卡顿：

        配置 git 代理：[解决git clone及huggingface下载等网络失败问题](https://bornforthis.cn/column/AI%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%AE%9E%E6%88%98%E9%AB%98%E6%89%8B%E8%AF%BE/Tips/02-git-huggingface-error.html)

        我使用的是 Clash Verge 所以是如下配置：

        ```bash
        git config --global http.proxy socks5://127.0.0.1:7897
        git config --global https.proxy socks5://127.0.0.1:7897
        
        # 后期想要取消 git 代理配置时，使用如下命令
        git config --global --unset http.proxy
        git config --global --unset https.proxy
        ```
        
        > 推荐你使用 Clash Verge 做你的代理软件，因为这样命令肯定和我一样。

- **Step 5**：brew 安装完成后，安装 Nodejs 使用命令：`brew install node` 进行安装；

- **Step 6**：接下来我们进行安装 OpenClaw：

    ```bash
    # 可以先尝试用这个方法进行安装
    curl -fsSL https://openclaw.ai/install.sh | bash
    
    # 不过我实际成功是使用如下命令
    # Install OpenClaw
    npm i -g openclaw
    
    # Meet your lobster
    openclaw onboard
    ```

- **Step 7**：接着按照 OpenClaw 的指示，一步步配置即可。

- 这样就莫名的解决了，希望你可以在评论区和我一起交流。

- 如果最后 npm 实在安装不了，再考虑 npm 换源。换源命令：`npm config set registry https://registry.npmmirror.com`  验证：`npm config get registry`

### Q3：通讯软件配置问题

配置通讯软件时，有时会出现网络问题。此时，推荐开启：**虚拟网卡**，保证命令行使用的网络，也走代理。











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