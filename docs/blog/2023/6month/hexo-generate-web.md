---
title: 利用 GitHub 从零开始搭建一个博客「2023版」
date: 2023-07-09 08:44:56
author: AI悦创
isOriginal: true
icon: web
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

趁着周末，从新搭建了一下 AI悦创 的官方主页「叫啥无所谓，都可以改」，耗时数个小时，GitHub 的站点终于完工了。

由于 AI悦创 的域名是 aiyc.top，所以这里官方主页使用了二级域名 github.aiyc.top，官方博客使用了根域名现在使用的是 [https://bornforthis.cn/](https://bornforthis.cn/)，现在两个站点已经稳定运行。一个运行在 GitHub Pages 上面，一个运行在阿里云服务器，大家如果感兴趣可以去看一下。

- AI悦创 Blog：[https://bornforthis.cn/](https://bornforthis.cn/)
- AI悦创 HomePage：https://github.aiyc.top

GitHub 的主页呢，因为好久没有维护，多少还是有些问题的。现在准备开始重新维护和更新！

接下来主要讲博客，相对复杂一点，使用了 Hexo 框架，采用了 Next 主题，在搭建的过程中我就顺手把搭建的流程大致记录下来了，在这里扩充一下形成一篇记录，毕竟好记性不如烂笔头。

于是，这篇《利用 GitHub 从零开始搭建一个博客》的文章就诞生了。

## 1. 准备条件

在这里先跟大家说一些准备条件，有些同学可能一听到搭建博客就望而却步。弄个博客网站，不得有台服务器吗？不得搞数据库吗？不得注册域名吗？没事，如果都没有，那照样是能搭建一个博客的。

GitHub 是个好东西啊，它提供了 GitHub Pages 帮助我们来架设一个静态网站，这就解决了服务器的问题。

Hexo 这个博客框架没有那么重量级，它是 MarkDown 直接写文章的，然后 Hexo 可以直接将文章编译成静态网页文件并发布，所以这样文章的内容、标题、标签等信息就没必要存数据库里面了，是直接纯静态页面了，这就解决了数据库的问题。

GitHub Pages 允许每个账户创建一个名为 **{username}.github.io** 的仓库，另外它还会自动为这个仓库分配一个 **github.io** 的二级域名，这就解决了域名的问题，当然如果想要自定义域名的话，也可以支持。

所以说，基本上，先注册个 GitHub 账号就能搞了，下面我们来正式开始吧。

> PS：如果你现在连 GitHub 账户都没有，我建议你马上自己注册一个，不管做不做网页，不会的可以自行谷歌或者加我微信入群交流。微信：Jiabcdefh

## 2. 新建项目

首先在 GitHub 新建一个仓库（Repository），名称为 **{username}.github.io**，注意这个名比较特殊，必须要是 **github.io** 为后缀结尾的。比如 AI悦创 的 GitHub 用户名就叫 AndersonHJB，那我就新建一个 **AndersonHJB.github.io**，新建完成之后就可以进行后续操作了。

::: warning

大小写要和你的 GitHub 的账号名称一模一样，不要有区别。

:::

### 2.1 新建仓库「Repository」

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/d8/d8d7d444c62388030568b0090120ce6449626fb5475f91cad5a0e38bf565eb95.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/b8/b83e348fd1a7a456c791bbd5a6b20f32505fb428ced4979d77aa0a91818de6b2.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/eb/eb99bbcdbb6aef467649d20acdc6f565b32a2bed520162d29dc97d112cba7d39.png)

:::

### 2.2 配置 GitHub SSH 链接

另外如果 GitHub 没有配置 SSH 连接的建议配置一下，这样后面在部署博客的时候会更方便。

#### 2.2.1 概要

本地生成公钥，将本地公钥配置到远程 github ，这个公钥相当于本地和远程 github 的链接桥梁。

#### 2.2.2 准备

- [x] 注册 github 得到账号密码。
- [x] 本地安装好 git：[Git 安装与本地创建 Git 仓库](https://mp.weixin.qq.com/s/GPbMmHjBK3pl9mFXpHEcDA)

#### 2.2.3 开始

首先右击--git Bash here 打开 git 命令行工具，检查用户名和邮箱是否配置。

```bash
git config --global  --list
```

如未配置，则执行以下命令进行配置：

::: code-tabs

@tab 设置用户名

```bash
git config --global  user.name "这里换上你的用户名"
```

@tab 设置邮箱

```bash
git config --global user.email "这里换上你的邮箱"
```

:::

然后执行以下命令生成秘钥：

```bash
ssh-keygen -t rsa -C "这里换上你的邮箱"
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/b2/b2b29b47e4cd294d0f3e40514fcf091eac666e109f60b1754fff4838bff4293a.png)

执行上面的命令后需要进行 3 次或 4 次确认：

1、确认秘钥的保存路径（如果不需要改路径则直接回车）；

2、如果上一步默认的保存路径下已经有秘钥文件，则需要确认是否覆盖（如果之前的秘钥不再需要则直接回车覆盖，如需要则手动拷贝到其他目录后再覆盖）；

3、创建密码（如果不需要密码则直接回车）；

4、确认密码如果不需要密码则直接回车；

在指定的保存路径下会生成 2 个名为 `id_rsa` 和 `id_rsa.pub` 的文件：

![](https://blog.images.bornforthis.cn/docs-images/sha256/d0/d095f5cef3d9cad034aafcad539b6bbe26c53a26878ab3c457a3e18c2c146b82.png)

添加公钥到你的远程仓库（github），再打开你的 github，进入配置页： Settings -- SSH and GPG keys

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/3f/3f43bcdac47d94a1a326f6d58a6bcf849cf3db34bee47fa677f187a8a0c708c1.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/cb/cb96b83ab87136194170e1ef08f1f9daed84252baddb10c29f79199180d2fc29.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/87/87ad38d755d0eb3c0ce516fd5bdc03f9d08dfecd3208691c765823c90044e618.png)

@tab 4

![](https://blog.images.bornforthis.cn/docs-images/sha256/16/16bcabfdab369d5458d1180a2aca9f53a254c42fe924e80619aa41a5aed07351.png)

:::

测试是否配置成功，用 ssh 链接 git，命令如下：

```bash
ssh -T git@github.com 
```

你将会看到：

```bash
➜  ~ ssh -T git@github.com
The authenticity of host 'github.com (13.229.188.59)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)?
```

选择 yes。

```bash
Warning: Permanently added 'github.com,13.229.188.59' (RSA) to the list of known hosts.
Hi AndersonHJB! You've successfully authenticated, but GitHub does not provide shell access.
```

如果看到 Hi 后面是你的用户名，就说明成功了。

## 3. 安装环境

### 3.1 Node

首先在自己的电脑上安装 Node.js，下载地址：https://nodejs.org/zh-cn/download/，安装过程自行查找。安装完毕之后，确保环境变量配置好，能正常使用 `npm` 命令。

### 3.2 安装 Hexo

接下来就需要安装 Hexo 了，这是一个博客框架，Hexo 官方还提供了一个命令行工具，用于快速创建项目、页面、编译、部署 Hexo 博客，所以在这之前我们需要先安装 Hexo 的命令行工具。

命令如下：

```bash
npm install hexo-cli -g
```

安装完毕之后，确保环境变量配置好，能正常使用 `hexo` 命令。

**PS：** 如果你是苹果电脑，有可能输入上面的命令会出现下图结果：

![](https://blog.images.bornforthis.cn/docs-images/sha256/b0/b09634adf5482dd107001f4723783062c427e7261ec0a9271adc86f8f11e7769.png)

把命令前面加个 sudo 即可：

```bash
sudo npm install -g hexo-cli
```

如果还是解决不了，可以自行谷歌一下。

### 3.3 初始化项目

接下来我们使用 Hexo 的命令行创建一个项目，并将其在本地跑起来，整体跑通看看。首先使用如下命令创建项目：

```bash
hexo init {name}
```

这里的 name 就是项目名，我这里要创建 AndersonHJB 的博客，我就把项目取名为 andersonhjb 了，用了纯小写，命令如下：

```bash
hexo init andersonhjb #初始化博客
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/69/6985cc795fc8a4866d22993dda4611892aa9d4249ad05b2ed5f6a8a2566c3b75.png)

这样 andersonhjb 文件夹下就会出现 Hexo 的初始化文件，包括 themes、scaffolds、source 等文件夹，这些内容暂且先不用管是做什么的，我们先知道有什么，然后一步步走下去看看都发生了什么变化。

接下来我们首先进入新生成的文件夹里面，然后调用 Hexo 的 generate 命令，将 Hexo 编译生成 HTML 代码，命令如下：

```bash
hexo generate
```

![hexo generate](https://blog.images.bornforthis.cn/docs-images/sha256/5f/5ff57d9905f97239fae0c0e2124d504fbf2eeb3e3570c9c928b98f7a3abdf656.png)

可以看到输出结果里面包含了 js、css、font 等内容，并发现他们都处在了项目根目录下的 public 文件夹下面了。

![](https://blog.images.bornforthis.cn/docs-images/sha256/2e/2eef053af81c61c1780f6e65b1d1890f267fa36fddc6ea5428941829a70e9b72.png)

然后我们利用 Hexo 提供的 server 命令把博客在本地运行起来，命令如下：

```bash
hexo server
```

运行之后命令行输出如下：

```bash
➜  andersonhjb hexo server
INFO  Validating config
INFO  Start processing
INFO  Hexo is running at http://localhost:4000/ . Press Ctrl+C to stop.
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/f5/f5020fec5172ede04318c29150db85ba0ca407618f669acb0d975ec707ae9b67.png)

它告诉我们在本地 4000 端口上就可以查看博客站点了，如图所示：

![](https://blog.images.bornforthis.cn/docs-images/sha256/b9/b97f8b7bb81536a842795baab4f588f29a291ba3321dd9076f034af2eb934b15.png)

这样一个博客的架子就出来了，我们只用了三个命令就完成了。

## 4. 部署

接下来我们来将这个初始化的博客进行一下部署，放到 GitHub Pages 上面验证一下其可用性。成功之后我们可以再进行后续的修改，比如修改主题、修改页面配置等等。

那么怎么把这个页面部署到 GitHub Pages 上面呢，其实 Hexo 已经给我们提供一个命令，利用它我们可以直接将博客一键部署，不需要手动去配置服务器或进行其他的各项配置。

部署命令如下：

```bash
hexo deploy
```

不过，在输入上面部署命令之前，不要着急！

在部署之前，我们需要先知道博客的部署地址，它需要对应 GitHub 的一个 Repository 的地址，这个信息需要我们来配置一下。

打开根目录下的 `_config.yml` 文件，找到 Deployment 这个地方：

![](https://blog.images.bornforthis.cn/docs-images/sha256/55/55d78f40b3680a063fffe12137408b6a4555e7b0a61a3a93053dc0326937c227.png)

把刚才新建的 Repository 的地址贴过来，然后指定分支为 master 分支，最终修改为如下内容：

```bash
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo: {git repo ssh address}
  branch: master
```

我的实际修改内容为下面：

```bash
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo: git@github.com:AndersonHJB/AndersonHJB.github.io.git
  branch: master
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/f9/f991bc96ae783a1403aec876c0c34aba99052c4d1cc20bbe1dd40c0a382aece7.png)

你会看到，我上面在 repo 里面填写了：

```bash
git@github.com:AndersonHJB/AndersonHJB.github.io.git
```

那我是如何获得的呢？

![](https://blog.images.bornforthis.cn/docs-images/sha256/c9/c98c6ccb8980bfbb1220c19c71c3fc44ad3d0a651dd352d5b4361dc6579bf27d.png)

另外我们还需要额外安装一个支持 Git 的部署插件，名字叫做 `hexo-deployer-git`，有了它我们才可以顺利将其部署到 GitHub 上面，如果不安装的话，在执行部署命令时会报如下错误：

```bash
Deployer not found: git
```

好，那就让我们安装下这个插件，在项目目录下执行安装命令如下：

```bash
npm install hexo-deployer-git --save
```

这里我多废话一句，有人不知道项目目录指的是啥，这里我还是把我的项目，截图出来：

![](https://blog.images.bornforthis.cn/docs-images/sha256/5e/5e5739c43763ab5a753a862b79fa791042acb621afc76f956d6465664eb79c6a.png)

出现如下结果，就是安装成功：

```bash
➜  andersonhjb npm install hexo-deployer-git --save

added 3 packages, and audited 239 packages in 5s

27 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

安装成功之后，执行部署命令：

```bash
hexo deploy
```

上面的命令，也是在项目目录下。出现如下类似的结果表面成功：

```bash
➜  andersonhjb hexo deploy
INFO  Validating config
INFO  Deploying: git
INFO  Setting up Git deployment...
Initialized empty Git repository in /Users/aiyuechuang/WebSite/andersonhjb/.deploy_git/.git/
[main (root-commit) 37fe052] First commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 placeholder
INFO  Clearing .deploy_git folder...
INFO  Copying files from public folder...
INFO  Copying files from extend dirs...
[main effb5a7] Site updated: 2023-08-16 15:27:32
 12 files changed, 2485 insertions(+)
 create mode 100644 2023/08/16/hello-world/index.html
 create mode 100644 archives/2023/08/index.html
 create mode 100644 archives/2023/index.html
 create mode 100644 archives/index.html
 create mode 100644 css/images/banner.jpg
 create mode 100644 css/style.css
 create mode 100644 fancybox/jquery.fancybox.min.css
 create mode 100644 fancybox/jquery.fancybox.min.js
 create mode 100644 index.html
 create mode 100644 js/jquery-3.6.4.min.js
 create mode 100644 js/script.js
 delete mode 100644 placeholder
Enumerating objects: 27, done.
Counting objects: 100% (27/27), done.
Delta compression using up to 8 threads
Compressing objects: 100% (19/19), done.
Writing objects: 100% (27/27), 278.94 KiB | 892.00 KiB/s, done.
Total 27 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), done.
To github.com:AndersonHJB/AndersonHJB.github.io.git
 + 57e1a3d...effb5a7 HEAD -> master (forced update)
branch 'main' set up to track 'git@github.com:AndersonHJB/AndersonHJB.github.io.git/master'.
INFO  Deploy done: git
```

### 4.1 访问链接

如果出现类似上面的内容，就证明我们的博客已经成功部署到 GitHub Pages 上面了，这时候我们访问一下 GitHub Repository 同名的链接，比如我的 andersonhjb 博客的 Repository 名称取的是 `AndersonHJB.github.io`，那我就访问 http://andersonhjb.github.io，这时候我们就可以看到跟本地一模一样的博客内容了。

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77a7e8671779c18376af3e410ce5fac3e5ae10777d55e3c42c410c298c286f6c.png)

这时候我们去 GitHub 上面看看 Hexo 上传了什么内容，打开之后可以看到 master 分支有了这样的内容：

![](https://blog.images.bornforthis.cn/docs-images/sha256/2d/2d9a0c4ae6db033dad767276c70d4c40ad61259b957784071b5ecb87ace4d620.png)

仔细看看，这实际上是博客文件夹下面的 public 文件夹下的所有内容，Hexo 把编译之后的静态页面内容上传到 GitHub 的 master 分支上面去了。

这时候可能就有人有疑问了，**那我博客的源码也想放到 GitHub 上面怎么办呢？**

其实很简单，新建一个其他的分支就好了，比如我这边就新建了一个 source 分支，代表博客源码的意思。

具体的添加过程就很简单了，参见如下命令：

```bash
git init
git checkout -b source
git add -A
git commit -m "init blog"
git remote add origin git@github.com:{username}/{username}.github.io.git
git push origin source
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/36/36f08774a735d85d117e7683c8e3d8f4c3452d81ec1a155355d97dcf6d5e9b11.png)

上面操作之后，可以使用如下目录切回原本的的分支「方便后续操作」：

```bash
git checkout -b master
```

成功之后，可以到 GitHub 上再切换下默认分支，比如我就把默认的分支设置为了 source，当然不换也可以。

### 4.2 切换默认分支

::: tabs

@tab settings

![](https://blog.images.bornforthis.cn/docs-images/sha256/6b/6b227b9f3b1c59a7b2039ef3fdab1ec1eb6172596dc5e4a4114d50986411b3fe.png)

@tab change

![](https://blog.images.bornforthis.cn/docs-images/sha256/8f/8fba551c62d40dd483877b42d8463b5dd3d8491018a75ed26d63829f2da96efe.png)

:::

### 4.3 配置站点信息

完成如上内容之后，实际上我们只完成了博客搭建的一小步，因为我们仅仅是把初始化的页面部署成功了，博客里面还没有设置任何有效的信息。

下面就让我们来进行一下博客的基本配置，另外换一个好看的主题，配置一些其他的内容，让博客真正变成属于我们自己的博客吧。

下面我就以自己的站点 andersonhjb 为例，修改一些基本的配置，比如站点名、站点描述等等。

修改根目录下的 `_config.yml` 文件，找到 Site 区域，这里面可以配置站点标题 title、副标题 subtitle 等内容、关键字 keywords 等内容。

![](https://blog.images.bornforthis.cn/docs-images/sha256/b3/b3c9469caf46f29ace2a9ef25ff09c58cba73bd9926145c5f2a2b60e7e6bc221.png)

比如我的就修改为如下内容：

```yaml
# Site
title: 'JiaBao' # 加不加引号都不影响
subtitle: 'Photographer'
description: '摄影师黄家宝的个人网站，含纪实类、旅行类、手机类作品集及中文博客等。 | 叶梓 - 摄影师'
keywords: 黄家宝,摄影师,纪实摄影师,纪实摄影,手机摄影,旅行摄影,摄影作品,摄影博客
author: JiaBao Huang
language: zh-CN
timezone: 'Asia/Shanghai'
```

这里大家可以参照格式把内容改成自己的。

这里我来系统的整理个表格来解析：

| 参数          | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| `title`       | 网站标题                                                     |
| `subtitle`    | 网站副标题                                                   |
| `description` | 网站描述                                                     |
| `keywords`    | 网站的关键词。支援多个关键词。                               |
| `author`      | 您的名字                                                     |
| `language`    | 网站使用的语言。对于简体中文用户来说，使用不同的主题可能需要设置成不同的值，请参考你的主题的文档自行设置，常见的有 `zh-Hans`和 `zh-CN`。 |
| `timezone`    | 网站时区。Hexo 默认使用您电脑的时区。请参考 [时区列表](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 进行设置，如 `America/New_York`, `Japan`, 和 `UTC` 。一般的，对于中国大陆地区可以使用 `Asia/Shanghai`。 |

其中，`description`主要用于 SEO，告诉搜索引擎一个关于您站点的简单描述，通常建议在其中包含您网站的关键词。`author`参数用于主题显示文章的作者。

另外还可以设置一下语言，如果要设置为汉语的话可以将 language 的字段设置为 `zh-CN`，修改如下：

```yaml
language: zh-CN
```

这样就完成了站点基本信息的配置，完成之后可以看到一些基本信息就修改过来了，页面效果如下：

![](https://blog.images.bornforthis.cn/docs-images/sha256/0a/0a28968def932d8e2859ad0d1e52587f972496ff9ad4183c85735be3becfd0f1.png)

### 4.4 修改主题

目前来看，整个页面的样式个人感觉并不是那么好看，想换一个风格，这就涉及到主题的配置了。

目前 Hexo 里面应用最多的主题基本就是 Next 主题了，个人感觉这个主题还是挺好看的，另外它支持的插件和功能也极为丰富，配置了这个主题，我们的博客可以支持更多的扩展功能，比如阅览进度条、中英文空格排版、图片懒加载等等。

#### 4.4.1 Next Theme

那么首先就让我们来安装下 Next 这个主题吧，目前 Next 主题已经更新到 7.x 版本了，我们可以直接到 Next 主题的 GitHub Repository 上把这个主题下载下来。

主题的 GitHub 地址是：[https://github.com/theme-next/hexo-theme-next](https://github.com/theme-next/hexo-theme-next)，我们可以直接把 master 分支 Clone 下来。

首先命令行进入到项目的根目录，执行如下命令即可：

::: code-tabs

@tab 1

```bash
git clone https://github.com/theme-next/hexo-theme-next themes/next
```

@tab 2

```bash
git clone git@github.com:theme-next/hexo-theme-next.git themes/next
```

:::

执行完毕之后 Next 主题的源码就会出现在项目的 `themes/next` 文件夹下。

![](https://blog.images.bornforthis.cn/docs-images/sha256/ed/edc3fb37dc8a8fb3780fa8e7a3bffd92594ad2b924b294e0466861662f1cd3f6.png)

然后我们需要修改下博客所用的主题名称，修改项目根目录下的 `_config.yml` 文件，找到 theme 字段，修改为 next 即可，修改如下：

```bash
theme: next
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/5b/5bdd5b92c0a8e313e12b1e867634323187d9877060e018b6ef4ac0d3e49cda6a.png)

然后本地重新开启服务，访问刷新下页面，就可以看到 next 主题就切换成功了，预览效果如下：

![](https://blog.images.bornforthis.cn/docs-images/sha256/c2/c2dfb979ea8fbf1adb733a248d5a2c71a7b02fe546fc11ea2d9e4a89c4eeb685.png)

##### 4.4.1.1 主题配置

现在我们已经成功切换到 next 主题上面了，接下来我们就对主题进行进一步地详细配置吧，比如修改样式、增加其他各项功能的支持，下面逐项道来。

Next 主题内部也提供了一个配置文件，名字同样叫做 `_config.yml`，只不过位置不一样，它在` themes/next` 文件夹下，Next 主题里面所有的功能都可以通过这个配置文件来控制，下文所述的内容都是修改的 `themes/next/_config.yml` 文件。

##### 4.4.1.2 样式

Next 主题还提供了多种样式，风格都是类似黑白的搭配，但整个布局位置不太一样，通过修改配置文件的 scheme 字段即可，我选了 Pisces 样式，修改 `_config.yml`（注意是 `themes/next/_config.yml` 文件）。

::: code-tabs

@tab 原本

```yaml
# ---------------------------------------------------------------
# Scheme Settings
# ---------------------------------------------------------------

# Schemes
scheme: Muse
#scheme: Mist
#scheme: Pisces
#scheme: Gemini
```

@tab 修改后

```yaml
# ---------------------------------------------------------------
# Scheme Settings
# ---------------------------------------------------------------

# Schemes
# scheme: Muse
#scheme: Mist
scheme: Pisces
#scheme: Gemini
```

:::

接下来我们重新本地运行服务，如然后访问：

![](https://blog.images.bornforthis.cn/docs-images/sha256/b4/b40141a80275231bdde1dfb7a505f7d3dbf57014752b0702b7ab89f63f907034.png)

##### 4.4.1.3 favicon

favicon 就是站点标签栏的小图标，默认是用的 Hexo 的小图标，如果我们有站点 Logo 的图片的话，我们可以自己定制小图标。

但这并不意味着我们需要自己用 PS 自己来设计，已经有一个网站可以直接将图片转化为站点小图标，站点链接为：[https://realfavicongenerator.net](https://realfavicongenerator.net)，到这里上传一张图，便可以直接打包下载各种尺寸和适配不同设备的小图标。

图标下载下来之后把它放在 `themes/next/source/images`  目录下面。

然后在配置文件里面找到 favicon 配置项，把一些相关路径配置进去即可，示例如下：

::: code-tabs

@tab 原本

```yaml
favicon:
  small: /images/favicon-16x16-next.png
  medium: /images/favicon-32x32-next.png
  apple_touch_icon: /images/apple-touch-icon-next.png
  safari_pinned_tab: /images/logo.svg
  #android_manifest: /images/manifest.json
  #ms_browserconfig: /images/browserconfig.xml
```

@tab 修改后

```yaml
favicon:
  small: /images/favicon_package_v0.16/favicon-16x16.png
  medium: /images/favicon_package_v0.16/favicon-32x32.png
  apple_touch_icon: /images/favicon_package_v0.16/apple-touch-icon.png
  safari_pinned_tab: /images/aiyc.svg
  #android_manifest: /images/manifest.json
  #ms_browserconfig: /images/browserconfig.xml
```

:::

##### 4.4.1.4 avatar

avatar 这个就类似站点的头像，如果设置了这个，会在站点的作者信息旁边额外显示一个头像，比如我这边有一张 `avatar.JPG` 图片：

![](https://blog.images.bornforthis.cn/docs-images/sha256/f4/f48ff2c3e68970ab81a43e9a34174b5412ed2764481d1654366b05d13b9e0fb8.jpeg)

将其放置到 `themes/next/source/images/avatar.png` 路径，然后在主题 `_config.yml` 文件下编辑 avatar 的配置，修改为正确的路径即可。

![](https://blog.images.bornforthis.cn/docs-images/sha256/25/25b1dd01f607af70081853fd0540497a15d2bce1d31b3e72843614e4ec6ee4e4.png)

::: code-tabs

@tab 原本

```yaml
# Sidebar Avatar
avatar:
  # Replace the default image and set the url here.
  url: #/images/avatar.gif
  # If true, the avatar will be dispalyed in circle.
  rounded: false
  # If true, the avatar will be rotated with the cursor.
  rotated: false
```

@tab 修改后

```yaml
# Sidebar Avatar
avatar:
  # Replace the default image and set the url here.
  url: /images/aiyc.svg
  # url: #/images/avatar.gif
  # If true, the avatar will be dispalyed in circle.
  rounded: true
  # If true, the avatar will be rotated with the cursor.
  rotated: false
```

:::

我们可以发现，上面代码中有 rounded 选项是是否显示圆形，rotated 是是否带有旋转效果，大家可以根据喜好选择是否开启。这里我自己就不开了，效果如下：

![](https://blog.images.bornforthis.cn/docs-images/sha256/6e/6e6c88b1f5451e242be357880e5feeeeaa4d8c981c627f5d79d083aab349204c.png)

可以看见我的头像。

##### 4.4.1.5 rss

博客一般是需要 RSS 订阅的，如果要开启 RSS 订阅，这里需要安装一个插件，叫做 `hexo-generator-feed`，安装完成之后，站点会自动生成 `RSS Feed` 文件，安装命令如下：

```bash
npm install hexo-generator-feed --save
```

我的实际操作图片：

![](https://blog.images.bornforthis.cn/docs-images/sha256/74/74703f0321254f40ee71f274fee346e330ab93ee18f98f61fc2839af0b42711e.png)

在项目根目录下运行这个命令，安装完成之后不需要其他的配置，以后每次编译生成站点的时候就会自动生成 RSS Feed 文件了。

##### 4.4.1.6 code

作为程序猿，代码块的显示还是需要很讲究的，默认的代码块我个人不是特别喜欢，因此我把代码的颜色修改为黑色，并把复制按钮的样式修改为类似 Mac 的样式，修改 `_config.yml` 文件的 codeblock 区块如下操作。

::: code-tabs

@tab 原本内容

```yaml
codeblock:
  # Code Highlight theme
  # Available values: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  # See: https://github.com/chriskempson/tomorrow-theme
  highlight_theme: normal
  # Add copy button on codeblock
  copy_button:
    enable: false
    # Show text copy result.
    show_result: false
    # Available values: default | flat | mac
    style:
```

@tab 修改后的内容

```bash {6,9,11,13}
codeblock:
  # Code Highlight theme
  # Available values: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  # See: https://github.com/chriskempson/tomorrow-theme
  # highlight_theme: normal
  highlight_theme: night bright
  # Add copy button on codeblock
  copy_button:
    enable: true
    # Show text copy result.
    show_result: true
    # Available values: default | flat | mac
    style: mac
```

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/ea/eaf668b022c7504126ff2559f0b4ba98ee833f3903529a00f9fd594b5df65811.png)

::: tabs

@tab 修改前

![](https://blog.images.bornforthis.cn/docs-images/sha256/17/17bae8c53852faea8c86f6875d7f8f4733d923c84288fb9b4b3bf2d1de2effe2.png)

@tab 修改后

![](https://blog.images.bornforthis.cn/docs-images/sha256/29/29d377eced1ceb6f16f85b5e6028c697369ee90815a2a9aaf1365234049ef8ab.png)

:::

##### 4.4.1.7 top

我们在浏览网页的时候，如果已经看完了想快速返回到网站的上端，一般都是有一个按钮来辅助的，这里也支持它的配置，修改 `_config.yml` 的 back2top 字段即可。

::: code-tabs

@tab 原本如下

```yaml
back2top:
  enable: true
  # Back to top in sidebar.
  sidebar: false
  # Scroll percent label in b2t button.
  scrollpercent: false
```

@tab 我的设置如下

```yaml {6}
back2top:
  enable: true
  # Back to top in sidebar.
  sidebar: false
  # Scroll percent label in b2t button.
  scrollpercent: true
```

:::

enable 默认为 true，即默认显示。sidebar 如果设置为 true，按钮会出现在侧栏下方，个人觉得并不是很好看，就取消了，scrollpercent 就是显示阅读百分比，个人觉得还不错，就将其设置为 true。具体的效果大家可以设置后根据喜好选择。

##### 4.4.1.8 reading_process

`reading_process`，阅读进度。大家可能注意到有些站点的最上侧会出现一个细细的进度条，代表页面加载进度和阅读进度，如果大家想设置的话也可以试试，我将其打开了，修改 `_config.yml` 如下。

::: code-tabs

@tab 还是老样子，带你看看原本的

```yaml
# Reading progress bar
reading_progress:
  enable: false
  # Available values: top | bottom
  position: top
  color: "#37c6c0"
  height: 3px
```

@tab 修改后

```yaml {7}
# Reading progress bar
reading_progress:
  enable: true
  # Available values: top | bottom
  position: top
  # color: "#37c6c0"
  color: "#222"
  height: 3px
```

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/2a/2a717cd89dc09a9418135ebb3d24288e030f549d18cd080fff5ffd88bac6e7a1.png)

记得重新启动服务，我们来看看效果：

![](https://blog.images.bornforthis.cn/docs-images/sha256/31/31923c01f06aa20f7a68e79823087bf52a79b6e12989d43b0c5d51a1c64f4f87.png)

##### 4.4.1.9 bookmark

书签，可以根据阅读历史记录，在下次打开页面的时候快速帮助我们定位到上次的位置，大家可以根据喜好开启和关闭，我的配置如下。

::: code-tabs

@tab 原本

```yaml
# Bookmark Support
bookmark:
  enable: false
  # Customize the color of the bookmark.
  color: "#222"
  # If auto, save the reading progress when closing the page or clicking the bookmark-icon.
  # If manual, only save it by clicking the bookmark-icon.
  save: auto
```

@tab 修改后

```yaml {3}
# Bookmark Support
bookmark:
  enable: true
  # Customize the color of the bookmark.
  color: "#222"
  # If auto, save the reading progress when closing the page or clicking the bookmark-icon.
  # If manual, only save it by clicking the bookmark-icon.
  save: auto
```

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/6f/6ff2a050fd82dc221137d39af12f4b555bb0b3be0c4b6b292ddc076976aa0a8c.png)

##### 4.4.1.10 github_banner

在一些技术博客上，大家可能注意到在页面的右上角有个 GitHub 图标，点击之后可以跳转到其源码页面，可以为 GitHub Repository 引流，大家如果想显示的话可以自行选择打开，我的配置如下：

::: code-tabs

@tab 原本

```yaml
# `Follow me on GitHub` banner in the top-right corner.
github_banner:
  enable: false
  permalink: https://github.com/yourname
  title: Follow me on GitHub
```

@tab 修改后

```yaml {3-4}
# `Follow me on GitHub` banner in the top-right corner.
github_banner:
  enable: true
  permalink: https://github.com/AndersonHJB/AndersonHJB.github.io
  title: Follow me on GitHub
```

:::

记得修改下链接 permalink 和标题 title，显示效果如下：

![](https://blog.images.bornforthis.cn/docs-images/sha256/7d/7d7ff3e094b081af923e7d4bf3c30d60164b0c6ec2da09d201427a749f094d3d.png)

可以看到在页面右上角显示了 GitHub 的图标，点击可以进去到 Repository 页面。

##### 4.4.1.11 Gitalk 评论插件使用教程

由于 Hexo 的博客是静态博客，而且也没有连接数据库的功能，所以它的评论功能是不能自行集成的，但可以集成第三方的服务。

Next 主题里面提供了多种评论插件的集成，有 `changyan | disqus | disqusjs | facebook_comments_plugin | gitalk | livere | valine | vkontakte` 这些。

作为一名程序员，我个人比较喜欢 gitalk，它是利用 GitHub 的 Issue 来当评论，样式也比较不错。

首先需要在 GitHub 上面注册一个 OAuth Application。

链接为：[https://github.com/settings/applications/new](https://github.com/settings/applications/new) 。

###### 1. 说明

Gitalk 是一个基于 GitHub Issue 和 Preact 开发的评论插件。

Gitalk 的特性：

>  1、使用 GitHub 登录
>
> 2、支持多语言 [en, zh-CN, zh-TW, es-ES, fr, ru]
>
> 3、支持个人或组织
>
> 4、无干扰模式（设置 distractionFreeMode 为 true 开启）
>
> 5、快捷键提交评论 （cmd|ctrl + enter）

使用 Gitalk 需要你做一些提前准备：

1、在 github 上创建一个仓库，Gitalk 会把评论放在这个仓库的 issues 里面。

2、在 github 上申请一个 `GitHub OAuth application`，来让 Gitalk 有权限操作 github 上的仓库。

###### 2. GitHub 创建评论仓库

我直接用 `andersonhjb.github.io` 仓库，你也可以自行创建。

###### 3. 申请一个 OAuth application

GitHub OAuth application 允许程序来操作你的 github 账户，可以对 github 中仓库读写。详情介绍：[https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps#about-oauth-apps](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps#about-oauth-apps)

1. 申请 GitHub OAuth application 流程： 
    - 打开 github 网站登陆后，点击右上角的用户图标，选择 `Settings`
    - 在 [Settings](https://github.com/settings/profile) 页面选择 `Developer settings ` 选项。
    - 在 [Developer settings](https://github.com/settings/developers) 选择 `OAuth Apps` ， 然后会在页面右边有一个 `New OAuth App`按钮，点击这个按钮就进入到新建 `OAuth application`页面
    - 也可以直接代开这个链接：[https://github.com/settings/applications/new](https://github.com/settings/applications/new) 进入新建页面

为了让小白也能看懂，我直接来一个图片操作系列：

::: tabs

@tab 1

![](https://blog.images.bornforthis.cn/docs-images/sha256/f1/f1e99965b02f15c35aabef3fe6d148e97044541edf06fb72b1ff736651518624.png)

@tab 2

![](https://blog.images.bornforthis.cn/docs-images/sha256/ca/caf53f439a70c65d81e52326f90aed5b841bac7f0c183c48f192330237f136d8.png)

@tab 3

![](https://blog.images.bornforthis.cn/docs-images/sha256/1e/1ee64da31e9e49175a60f00371354730943c864eeeab26eea7bb374276dadbf8.png)

@tab 4

![](https://blog.images.bornforthis.cn/docs-images/sha256/91/9180e71cb92b4c5b34741943abc088936f17983956d6189f04ac7371e72c2fcd.png)

@tab 5

![](https://blog.images.bornforthis.cn/docs-images/sha256/bc/bc2cfbd0975b21db867126f28517619f1d2baf6624f01b8fbc85f21ed5cbb2ea.png)

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/25/25ef6cf66bc74d9f4670aa33ef1f75207a74bba04e65248efdbdd34868559f55.png)

上图虽然写了解析，但我还是要详细的给你讲一遍的。

在注册 `OAuth` 应用页面有如下几个参数需要填写：

> Application name：必填，OAuth 的名字
>
> Homepage URL：必填，你应用的网址，哪个网站用了 Gitalk 组件，就填写这个网址 
>
> Application description：选填，该 OAuth 的说明 
>
> Authorization callback URL：必填，授权成功后回调网址，跟 `Homepage URL`
>
> 参数保持一致就好这些参数在注册成功后是可以修改。

参数填好后，点 Register application 按钮即可完成注册。

###### 4. 获取 Client ID、Client Secret

注册成功后会自动跳转到这个 OAuth 应用的页面，或者在 [Developer settings](https://github.com/settings/developers) 选择 OAuth Apps 后就能看见你创建的 OAuth 应用名字，点击它进入这个 OAuth 应用的页面：

::: tabs

@tab 点击生成

![](https://blog.images.bornforthis.cn/docs-images/sha256/d3/d35c107ff5d1c5e47c4e6b907d2f3b742ba3dcdd745763572db382540f49e3a8.png)



@tab 生成如下

![](https://blog.images.bornforthis.cn/docs-images/sha256/d2/d2a5d9f6f3cd2bb34b5f7531decf4fb784352824f307edb0bc9cc3e342d9b421.png)

:::

注册完毕之后拿到 Client ID、Client Secret 就可以了。

###### 5. 修改配置文件

首先需要在` _config.yml` 文件的 comments 区域配置使用 gitalk。

::: code-tabs

@tab 原本内容

```yaml
# ---------------------------------------------------------------
# Comments Settings
# See: https://theme-next.org/docs/third-party-services/comments
# ---------------------------------------------------------------

# Multiple Comment System Support
comments:
  # Available values: tabs | buttons
  style: tabs
  # Choose a comment system to be displayed by default.
  # Available values: changyan | disqus | disqusjs | gitalk | livere | valine
  active:
  # Setting `true` means remembering the comment system selected by the visitor.
  storage: true
  # Lazyload all comment systems.
  lazyload: false
  # Modify texts or order for any navs, here are some examples.
  nav:
    #disqus:
    #  text: Load Disqus
    #  order: -1
    #gitalk:
    #  order: -2
```

@tab 修改后

```yaml {12}
# ---------------------------------------------------------------
# Comments Settings
# See: https://theme-next.org/docs/third-party-services/comments
# ---------------------------------------------------------------

# Multiple Comment System Support
comments:
  # Available values: tabs | buttons
  style: tabs
  # Choose a comment system to be displayed by default.
  # Available values: changyan | disqus | disqusjs | gitalk | livere | valine
  active: gitalk
  # Setting `true` means remembering the comment system selected by the visitor.
  storage: true
  # Lazyload all comment systems.
  lazyload: false
  # Modify texts or order for any navs, here are some examples.
  nav:
    #disqus:
    #  text: Load Disqus
    #  order: -1
    #gitalk:
    #  order: -2
```

:::

主要是 `comments.active` 字段选择对应的名称即可。

然后找到 gitalk 配置，添加它的各项配置。

::: code-tabs

@tab 原本

```yaml
# Gitalk
# For more information: https://gitalk.github.io, https://github.com/gitalk/gitalk
gitalk:
  enable: false
  github_id: # GitHub repo owner
  repo: # Repository name to store issues
  client_id: # GitHub Application Client ID
  client_secret: # GitHub Application Client Secret
  admin_user: # GitHub repo owner and collaborators, only these guys can initialize gitHub issues
  distraction_free_mode: true # Facebook-like distraction free mode
  # Gitalk's display language depends on user's browser or system environment
  # If you want everyone visiting your site to see a uniform language, you can set a force language value
  # Available values: en | es-ES | fr | ru | zh-CN | zh-TW
  language:
```

@tab 修改

```yaml {4-10,14}
# Gitalk
# For more information: https://gitalk.github.io, https://github.com/gitalk/gitalk
gitalk:
  enable: true
  github_id: AndersonHJB # GitHub repo owner
  repo: AndersonHJB.github.io # Repository name to store issues
  client_id: 8dc8b1a53e60978d7951 # GitHub Application Client ID
  client_secret: 5c50aa295b600477abaf74f16d89dfcc76d2e22e # GitHub Application Client Secret
  admin_user: AndersonHJB # GitHub repo owner and collaborators, only these guys can initialize gitHub issues
  distraction_free_mode: true # Facebook-like distraction free mode
  # Gitalk's display language depends on user's browser or system environment
  # If you want everyone visiting your site to see a uniform language, you can set a force language value
  # Available values: en | es-ES | fr | ru | zh-CN | zh-TW
  language: zh-CN
```

:::

配置完成之后 gitalk 就可以使用了，点击进入文章页面，就会出现如下页面：

![](https://blog.images.bornforthis.cn/docs-images/sha256/42/4205888212ed7c3d00eb7561749673e53bfe54b94d67f5e26b6bef7162572b6c.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/74/74c7e86390dad34c59b4ebd260d11e07d632a5390178c9f8bc3b6615b6cbfa99.png)

GitHub 授权登录之后就可以使用了，评论的内容会自动出现在 Issue 里面。

::: warning

第一次 Gitalk 需要初始化评论，需要你先点击使用 GitHub 登陆，然后刷新页面才会初始化，或者自己去仓库里手动创建一个 issues，并添加 issues 的 labels 值为 Gitalk 的 labels 参数和 id 参数的值。「**部署之后，再初始化**」

:::

##### 4.4.1.12 pangu

我个人有个强迫症，那就是写中文和英文的时候中间必须要留有间距，一个简单直接的方法就是中间加个空格，但某些情况下可能习惯性不加或者忘记加了，这就导致中英文混排并不是那么美观。

pangu 就是来解决这个问题的，我们只需要在主题里面开启这个选项，在编译生成页面的时候，中英文之间就会自动添加空格，看起来更加美观。

具体的修改如下：

```yaml
# 修改前
# Pangu Support
# For more information: https://github.com/vinta/pangu.js
pangu: false

# 修改后
# Pangu Support
# For more information: https://github.com/vinta/pangu.js
pangu: true
```

##### 4.4.1.13 math

可能在一些情况下我们需要写一个公式，比如演示一个算法推导过程，MarkDown 是支持公式显示的，Hexo 的 Next 主题同样是支持的。

Next 主题提供了两个渲染引擎，分别是 mathjax 和 katex，后者相对前者来说渲染速度更快，而且不需要  JavaScript 的额外支持，但后者支持的功能现在还不如前者丰富，具体的对比可以看官方文档：[https://theme-next.org/docs/third-party-services/math-equations](https://theme-next.org/docs/third-party-services/math-equations) 。所以我这里选择了 mathjax，通过修改配置即可启用：

::: code-tabs

@tab 修改前

```yaml
# Math Formulas Render Support
math:
  # Default (true) will load mathjax / katex script on demand.
  # That is it only render those page which has `mathjax: true` in Front-matter.
  # If you set it to false, it will load mathjax / katex srcipt EVERY PAGE.
  per_page: true

  # hexo-renderer-pandoc (or hexo-renderer-kramed) required for full MathJax support.
  mathjax:
    enable: false
    # See: https://mhchem.github.io/MathJax-mhchem/
    mhchem: false
```

@tab 修改后

```yaml {10,12}
# Math Formulas Render Support
math:
  # Default (true) will load mathjax / katex script on demand.
  # That is it only render those page which has `mathjax: true` in Front-matter.
  # If you set it to false, it will load mathjax / katex srcipt EVERY PAGE.
  per_page: true

  # hexo-renderer-pandoc (or hexo-renderer-kramed) required for full MathJax support.
  mathjax:
    enable: true
    # See: https://mhchem.github.io/MathJax-mhchem/
    mhchem: true
```

:::

mathjax 的使用需要我们额外安装一个插件，叫做 `hexo-renderer-kramed`，另外也可以安装 `hexo-renderer-pandoc`，命令如下：

```yaml
npm un hexo-renderer-marked --save
npm i hexo-renderer-kramed --save
```

另外还有其他的插件支持，大家可以到官方文档查看。

##### 4.4.1.14 pjax

可能大家听说过 Ajax，没听说过 pjax，这个技术实际上就是利用 Ajax 技术实现了局部页面刷新，既可以实现 URL 的更换，又可以做到无刷新加载。

要开启这个功能需要先将 pjax 功能开启，然后安装对应的 pjax 依赖库，首先修改 `_config.yml` 修改如下：

```yaml
pjax: true
```

然后安装依赖库，切换到 next 主题下，然后安装依赖库：

```bash
$ cd themes/next
$ git clone https://github.com/theme-next/theme-next-pjax source/lib/pjax
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/7e/7e8ebc73d8db4439313ff871371076b349592fefa365eb961adbb9022f55ff0b.png)

这样 pjax 就开启了，页面就可以实现无刷新加载了。

另外关于 Next 主题的设置还有挺多的，这里就介绍到这里了，更多的主题设置大家可以参考官方文档：[https://theme-next.org/docs/](https://theme-next.org/docs/)。

##### 4.4.1.15 文章

**现在整个站点只有一篇文章，那么我们怎样来增加其他的文章呢？**

这个很简单，只需要调用 Hexo 提供的命令即可，比如我们要新建一篇「HelloWorld」的文章，命令如下：

```bash
hexo new hello-world2
```

创建的文章会出现在 `source/_posts` 文件夹下，是 MarkDown 格式。









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





