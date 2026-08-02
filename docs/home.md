---
title: 常用命令或链接
date: 2022-11-27 10:11:29
author: AI悦创
isOriginal: true
category: 
    - 工具表
tag:
    - 工具表
icon: docs
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
head:
  - - meta
    - name: keywords
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
  - - meta
    - name: description
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
footer: 招收编程一对一学员,微信:Jiabcdefh,<a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

## xxx

::: code-tabs

@tab Code1

```bash
ssh -i ~/.ssh/id_rsa root@121.89.218.11 "rm -rf /www/wwwroot/bornforthis.cn/assets/"
ssh -i ~/.ssh/id_rsa root@121.89.218.11 "curl -o /www/wwwroot/FeedVault/AI悦创·编程1v1.yaml '链接'"


ssh -i ~/.ssh/id_rsa root@121.89.218.11 "curl -o /www/wwwroot/FeedVault/AI悦创·编程1v1.yaml 'https://feed.iggv5.com/c/7b5f7fe4-7be1-456c-89df-a2735aecbb4b/platform/clash/iGG-iGuge'"
```

@tab Code2

```bash
#!/bin/bash

# 1. 下载到本地
curl -o "AI悦创·编程1v1.yaml" "https://feed.iggv5.com/c/feec2841-758e-4cdd-91ee-c6cb4756ebf4/platform/clash/iGG-iGuge"

# 2. 上传覆盖
scp "AI悦创·编程1v1.yaml" root@121.89.218.11:/www/wwwroot/FeedVault/AI悦创·编程1v1.yaml

echo "订阅更新已上传！"
```

:::

## Serv00.com

- 虚拟环境：[https://docs.serv00.com/Python/#virtualenv](https://docs.serv00.com/Python/#virtualenv)
- Flask：[https://docs.serv00.com/Flask/](https://docs.serv00.com/Flask/)

### huangjiabao

::: code-tabs

@tab 1. 虚拟环境

```bash
cd /home/huangjiabao/.virtualenvs
```

@tab 2. 创建虚拟环境命令

```bash
cd /home/huangjiabao/.virtualenvs  #  [!code focus]

$ cd /usr/home/LOGIN/.virtualenvs
$ virtualenv environment_name
New python executable in environment_name/bin/python3.8
Also creating executable in environment_name/bin/python
Installing setuptools, pip...done.


$ cd /usr/home/LOGIN/.virtualenvs
$ virtualenv environment_name -p /usr/local/bin/python2.7  #  [!code focus]
Running virtualenv with interpreter /usr/local/bin/python2.7
Using base prefix '/usr/local'
New python executable in environment_name/bin/python2.7
Also creating executable in environment_name/bin/python
Installing setuptools, pip...done.


$ source /usr/home/LOGIN/.virtualenvs/environment_name/bin/activate
(environment_name) $
```

@tab 3. 网站路径

```bash
cd /home/huangjiabao/domains/

cd /home/huangjiabao/domains/cm.class1v1.com
cd /home/huangjiabao/domains/cm.class1v1.com/public_python

cd /home/huangjiabao/domains/cm.bornforthis.cn
cd /home/huangjiabao/domains/cm.bornforthis.cn/public_python

cd /home/huangjiabao/domains/huangjiabao.serv00.net
cd /home/huangjiabao/domains/huangjiabao.serv00.net/public_python
```

@tab 4. 部署脚本

```python
# path: public_python
# passenger_wsgi.py

import sys, os
sys.path.append(os.getcwd())
from application import app as application

# [huangjiabao@s6]:<~/domains/huangjiabao.serv00.net/public_python>$ cat passenger_wsgi.py 
import sys, os
sys.path.append(os.getcwd())
from app import app as application
```

@tab 5. 脚本「FPM」

```bash
[huangjiabao@s6]:<~/domains/huangjiabao.serv00.net>$ cat cp_opt.sh 
cd Falsk-Password-Manager
git pull
cd ..
cp -r ./Falsk-Password-Manager/* ./public_python/
```

@tab 6. 脚本「CM」

```bash
cd /home/huangjiabao/domains/cm.class1v1.com/public_python

cd /home/huangjiabao/domains/cm.class1v1.com/public_python/CodeMark
git pull
cd ..
cp -r ./CodeMark/* .

# 执行
sh /home/huangjiabao/domains/cm.class1v1.com/public_python/CodeMark/cp_opt.sh
```

@tab 虚拟环境

```bash
source /home/huangjiabao/.virtualenvs/CodeMark/bin/activate
```

:::



## 常用文章查询

| 序号 | 内容                      | 链接                                                         |
| ---- | ------------------------- | ------------------------------------------------------------ |
| 01   | ASCII 常用对照表          | [https://bornforthis.cn/posts/29.html](https://bornforthis.cn/posts/29.html) |
| 02   | 主题更新日志              | [https://theme-hope.vuejs.press/zh/changelog.html](https://theme-hope.vuejs.press/zh/changelog.html) |
| 03   | **convertio.co** 在线转换 | [https://convertio.co/zh/](https://convertio.co/zh/)         |
|      |                           |                                                              |
|      |                           |                                                              |

## 常用命令

### 1. bgImage

个人原本默认：

```bash
https://img-blog.csdnimg.cn/30458f75cce14373b32b4f1a8c5f96c0.jpeg
```

自动生成：

```bash
http://file.mo7.cc/api/public/bz
```

### 2. meta

::: tabs

@tab 1.0

```html
<meta name="keywords" content="一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导">
<meta name="description" content="Python一对一辅导,Java一对一辅导,一对一教学,面试辅导,爬虫一对一教学,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学">
```

@tab 1.1

```html
<meta name="keywords" content="一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导">
<meta name="description" content="Python一对一辅导教学,Java一对一辅导教学,一对一教学辅导,面试辅导,爬虫一对一教学,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学">
```

@tab 1.2

```html
<meta name="keywords" content="一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导">
<meta name="description" content="Python一对一辅导,Java一对一辅导,一对一教学辅导,面试辅导,爬虫一对一教学,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学">
```

@tab 1.3

```html
<meta name="keywords" content="一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,留学生CS辅导">
<meta name="description" content="Python一对一辅导,Java一对一辅导,一对一教学辅导,面试辅导,爬虫一对一教学,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学,留学生CS辅导">
```

@tab 1.4

```html
<meta name="keywords" content="一对一辅导编程,CS辅导,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,留学生CS辅导">
    <meta name="description" content="Python一对一辅导,Java一对一辅导,一对一教学辅导,CS辅导,面试辅导,爬虫一对一教学,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学,留学生CS辅导">   
```

@tab 1.5

```html
<meta name="keywords" content="一对一辅导编程,CS辅导,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,菜鸟教程,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,留学生CS辅导">
<meta name="description" content="Python一对一辅导,Java一对一辅导,一对一教学辅导,CS辅导,面试辅导,爬虫一对一教学,菜鸟教程,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学,留学生CS辅导">  
```

@tab 1.6

```html
<meta name="keywords" content="一对一辅导编程,编程1v1,CS辅导,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,菜鸟教程,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,留学生CS辅导">
<meta name="description" content="Python一对一辅导,编程1v1,Java一对一辅导,一对一教学辅导,CS辅导,面试辅导,爬虫一对一教学,菜鸟教程,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学,留学生CS辅导"> 
```

@tab 1.7

```html
<meta name="keywords" content="一对一辅导编程,编程1v1,CS辅导,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,菜鸟教程,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,留学生CS辅导,ChatGPT代注册">
<meta name="description" content="Python一对一辅导,编程1v1,Java一对一辅导,一对一教学辅导,CS辅导,面试辅导,爬虫一对一教学,菜鸟教程,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学,留学生CS辅导,ChatGPT代注册">    
```

:::

### 3. 升级命令

::: tabs

@tab now

```shell
pnpm add @vuepress/client@next vue@latest vuepress@next vuepress-theme-hope@latest @vuepress/plugin-docsearch@next @vuepress/plugin-google-analytics@next @waline/client -E && pnpm i && pnpm up
```

@tab 换源

```shell
# 修改
pnpm config set registry https://registry.npm.taobao.org
# 还原
pnpm config set registry https://registry.npmjs.org/
pnpm config set https://registry.npmmirror.com
```

@tab pnpm

```shell
pnpm add @vuepress/client@next vue@latest vuepress@next vuepress-theme-hope@latest @vuepress/plugin-docsearch@next @vuepress/plugin-google-analytics@next -E && pnpm i && pnpm up
```

@tab yarn

```shell
yarn add @vuepress/client@next @vuepress/plugin-docsearch@next vuepress@next vue@next @vuepress/plugin-google-analytics@next vuepress-theme-hope -E && yarn install && yarn upgrade
```

@tab cava

```shell
yarn add @vuepress/client@next vuepress@next vue@next @vuepress/plugin-search@next vuepress-theme-hope -E && yarn install && yarn upgrade
```

@tab tcreograph

```shell
yarn add @vuepress/client@next @vuepress/plugin-search@next vuepress@next vue vuepress-theme-hope -E && yarn install && yarn upgrade
```

@tab qiuzhen

```bash
pnpm add @vuepress/client@next vue@latest vuepress@next vuepress-theme-hope@latest vuepress-plugin-search-pro@next @waline/client -E && pnpm i && pnpm up
```



:::

## 4. README

```html
𝓜𝓻.𝓐𝓘𝓨𝓒
“I love the people I photograph”——Bruce Gilden
“𝓘 𝓵𝓸𝓿𝓮 𝓽𝓱𝓮 𝓹𝓮𝓸𝓹𝓵𝓮 𝓘 𝓹𝓱𝓸𝓽𝓸𝓰𝓻𝓪𝓹𝓱”——𝓑𝓻𝓾𝓬𝓮 𝓖𝓲𝓵𝓭𝓮𝓷
浅者见浅，深者见深——黄家宝
tagline: 浅者见浅，深者见深——黄家宝
“𝓘 𝓵𝓸𝓿𝓮 𝓽𝓱𝓮 𝓹𝓮𝓸𝓹𝓵𝓮 𝓘 𝓹𝓱𝓸𝓽𝓸𝓰𝓻𝓪𝓹𝓱”——𝓑𝓻𝓾𝓬𝓮 𝓖𝓲𝓵𝓭𝓮𝓷
“𝓘 𝓵𝓸𝓿𝓮 𝓽𝓱𝓮 𝓹𝓮𝓸𝓹𝓵𝓮 𝓘 𝓹𝓱𝓸𝓽𝓸𝓰𝓻𝓪𝓹𝓱”——𝓑𝓻𝓾𝓬𝓮 𝓖𝓲𝓵𝓭𝓮𝓷
```

- [https://www.wakatool.com/fancy/text](https://www.wakatool.com/fancy/text)



## 5. 我的全部博客平台

::: details Table

| 序号 | 名称                      | 链接                                                         |
| ---- | ------------------------- | ------------------------------------------------------------ |
| 01   | **CSDN**                  | [https://aiyuechuang.blog.csdn.net/](https://aiyuechuang.blog.csdn.net/) |
| 02   | **知乎**                  | [https://www.zhihu.com/people/aiyuechuang](https://www.zhihu.com/people/aiyuechuang) |
| 03   | **掘金**                  | [https://juejin.cn/user/2305051222344061](https://juejin.cn/user/2305051222344061) |
| 04   | **思否**                  | [https://segmentfault.com/u/aiyc](https://segmentfault.com/u/aiyc) |
| 05   | **51CTO博客**             | [https://blog.51cto.com/aiyc](https://blog.51cto.com/aiyc)   |
| 06   | **medium**                | [https://medium.com/@aiyuechuang](https://medium.com/@aiyuechuang)<br />[https://medium.bornforthis.cn](https://medium.bornforthis.cn) |
| 07   | **腾讯云社区**            | [https://cloud.tencent.com/developer/user/7111610](https://cloud.tencent.com/developer/user/7111610) |
| 08   | **阿里云社区**            | [https://developer.aliyun.com/profile/expert/a65od3nwohg4i](https://developer.aliyun.com/profile/expert/a65od3nwohg4i) |
| 09   | **博客园**                | [https://www.cnblogs.com/bornforthis/](https://www.cnblogs.com/bornforthis/) |
| 10   | **简书**                  | [https://www.jianshu.com/u/7def888b8c12](https://www.jianshu.com/u/7def888b8c12) |
| 11   | **墨天轮**                | [https://www.modb.pro/u/482441](https://www.modb.pro/u/482441) |
| 12   | **留言**                  | [https://comment.bornforthis.cn/](https://comment.bornforthis.cn/) |
| 13   | **评论管理**              | [https://comment.bornforthis.cn/ui](https://comment.bornforthis.cn/ui) |
| 14   | **Mdnice**                | [https://mdnice.com/user/417729638227](https://mdnice.com/user/417729638227) |
| 15   | **Search**                | [https://crawler.algolia.com/admin/crawlers](https://crawler.algolia.com/admin/crawlers) |
| 16   | **领英**                  | [https://www.linkedin.com/in/bornforthis/](https://www.linkedin.com/in/bornforthis/) |
| 17   | **AndersonHJB.github.io** | [https://github.com/AndersonHJB/AndersonHJB.github.io/issues](https://github.com/AndersonHJB/AndersonHJB.github.io/issues) |
| 18   | **1v1**                   | [https://github.com/AndersonHJB/1v1/issues](https://github.com/AndersonHJB/1v1/issues) |
| 19   | **AI悦创·谷歌分析**       | [https://analytics.google.com/analytics/web/#/p345911954/reports/intelligenthome](https://analytics.google.com/analytics/web/#/p345911954/reports/intelligenthome) |
| 20   | **AI悦创·百度联盟**       | [https://union.baidu.com/bqt/#/](https://union.baidu.com/bqt/#/) |
| 21   | **AI悦创·learnku**        | [https://learnku.com/blog/AndersonHJB](https://learnku.com/blog/AndersonHJB) |
| 22   | **Github**                | [https://github.com/AndersonHJB](https://github.com/AndersonHJB) |
| 23   | **Gitee**                 | [https://gitee.com/huangjiabaoaiyc](https://gitee.com/huangjiabaoaiyc) |
| 24   | **vercel**                | [https://vercel.com/](https://vercel.com/)                   |
| 25   | **gist**                  | [https://gist.github.com/AndersonHJB](https://gist.github.com/AndersonHJB) |
| 26   | **learnku**               | [https://learnku.com/users/106884](https://learnku.com/users/106884) |

:::

## 6. 零碎代码

```markdown
  - title: 1v1 学员作业
    icon: 1v1-1
    details: 私教学员作业合集
    link: /1v1/
```

## 7. 常用代码

### 7.1 PDF

```markdown
<PDF url="/sample.pdf" />
```



### 7.2 Share

```vue
<Share colorful services="qq,weibo,email,qrcode"/>
```


### 7.3 VideoPlayer

```markdown
<VidStack src="https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Sintel_movie_4K.webm/Sintel_movie_4K.webm.1080p.vp9.webm" />

```

## 8. 素材

::: details

![](https://blog.images.bornforthis.cn/docs-images/sha256/40/40aac822ae8cff364979fabde026159c513abb1ff7677f5be49567009cd0824f.jpeg)

![](https://blog.images.bornforthis.cn/docs-images/sha256/76/76eb5b6d8570f1028dfa14429416face7c2c67c8492c057931069975490021f9.jpeg)

![](https://blog.images.bornforthis.cn/docs-images/sha256/cf/cf7cbcb243dc6bfac6642ec1cc6acc289e2146bec2ce50469277744313f24cac.jpeg)





:::

## 9. 设计 & 学习

| 序号 | 名称      | 链接                                                     |
| ---- | --------- | -------------------------------------------------------- |
| 01   | 创可贴    | [https://www.chuangkit.com/](https://www.chuangkit.com/) |
| 02   | 虎课网    | [https://huke88.com/](https://huke88.com/)               |
| 03   | 135编辑器 | [https://www.135editor.com/](https://www.135editor.com/) |
| 04   |           |                                                          |

## 10. robots.txt

```python
User-agent: *
Allow: /
Sitemap: https://bornforthis.cn/sitemap.xml
Disallow:
```

## 11. Git

### 11.1 Git 撤销 commit

#### 如何在 Git 中撤销最近的 commit 并重新执行 add 操作？

如果你想撤销最近的一次提交并将更改重新放回暂存区（staging area），可以使用如下命令：

```bash
git reset --soft HEAD^
```

这将撤销最近的一次提交，同时保留更改在暂存区。之后，你可以使用 `git add` 将你想要的更改重新添加到暂存区，然后进行新的提交。

如果你想完全撤销最近的一次提交并丢弃所有更改，可以使用如下命令：

```bash
git reset --hard HEAD^
```

这将撤销最近的一次提交并丢弃所有更改。请谨慎使用这个命令，因为它会永久删除你的更改。

### 11.2 Git 回退到某个commit下并更新远程仓库

git 回退版本

git log ` 查看提交历史及提交的 ` commit_id

回退命令：

```bash
$ git reset --hard HEAD^         回退到上个版本
$ git reset --hard HEAD~3        回退到前3次提交之前，以此类推，回退到n次提交之前

$ git reset --hard commit_id     退到/进到 指定commit的sha码

强推到远程，更新回退后的远程仓库：
$ git push origin HEAD --force
```

## 12. 出题规范

::: details

1. CS-UY 1114: Lab 1
2. UY 是什么意思
3. UY 是一种课程编号系统的一部分，通常用于某些大学的计算机科学课程。在这个例子中，CS-UY 1114 表示这是一个计算机科学（CS）课程，其中 UY 代表了该课程的特定编号。具体含义可能因学校而异。
4. 我叫AI悦创，你觉得我应该CS-什么比较合适呢？
5. 你好，AI悦创！如果你想为你的课程选择一个合适的计算机科学（CS）编号，你可以考虑课程内容和难度。例如：
    1. 如果你的课程是关于计算机科学基础知识和编程入门，可以使用 CS-101 这样的编号，因为较低的数字通常表示入门级课程。
    2. 如果你的课程专注于人工智能和机器学习，可以考虑使用 CS-AI 或者 CS-ML 作为编号前缀，这样更能突显课程的特色。

你可以根据你的课程内容和目标来选择一个合适的编号。如果你希望进一步讨论，可以提供更多关于你的课程的信息。

**你分别给我取一个专业且合适的吧，有如下课程：Python基础、Python办公自动化、人工智能、机器学习、数据库、Linux、C++、Java基础、Java进阶**

当然可以！以下是为每个课程提供的建议编号：

1. Python基础 - CS-PY101：这是一个Python编程入门课程，编号中的"PY"表示Python，101表示基础级别。
2. Python办公自动化 - CS-PYOA201：这个课程关注使用Python进行办公自动化，"PYOA"表示Python Office Automation，201表示稍高的课程难度。
3. 人工智能 - CS-AI301：这个课程涉及人工智能的原理和实践，"AI"表示Artificial Intelligence，301表示较高的课程难度。
4. 机器学习 - CS-ML302：这个课程侧重于机器学习算法和实现，"ML"表示Machine Learning，302表示较高的课程难度。
5. 数据库 - CS-DB201：这个课程关注数据库系统的设计和实现，"DB"表示Database，201表示中级课程难度。
6. Linux - CS-LNX101：这是一个Linux操作系统的入门课程，"LNX"表示Linux，101表示基础级别。
7. C++ - CS-CPP101：这是一个C++编程的入门课程，"CPP"表示C++，101表示基础级别。
8. Java基础 - CS-JV101：这是一个Java编程的入门课程，"JV"表示Java，101表示基础级别。
9. Java进阶 - CS-JV202：这个课程涉及Java编程的高级技术，"JV"表示Java，202表示中级课程难度。

这些编号旨在表示课程的主题和难度。你可以根据实际情况调整编号，以符合你的课程设置和需求。

**还有 Python进阶、图像识别**

当然，为这两个课程提供的建议编号如下：

1. Python 进阶 - CS-PY201：这个课程涉及Python编程的高级技巧和实践，编号中的"PY"表示Python，201表示中级课程难度。
2. 图像识别 - CS-IMG401：这个课程专注于图像识别技术和应用，"IMG"表示Image Recognition，401表示较高的课程难度。

请注意，这些编号仅作为建议，你可以根据实际情况调整它们以满足你的课程设置和需求。

:::

## 13. Nodejs

```python
export NODE_OPTIONS="--max-old-space-size=16384"
```

## 14. 导入文件

使用 `<!-- @include: filename -->` 导入文件。

如果要部分导入文件，你可以指定导入的行数

- `<!-- @include: filename{start-end} -->`
- `<!-- @include: filename{start-} -->`
- `<!-- @include: filename{-end} -->`

同时你也可以导入文件区域:

- `<!-- @include: filename#region -->`

:::: info 文件区域

文件区域是 vscode 中的一个概念，区域内容被 `#region` 和 `#endregion` 注释包围。

这里有些例子：

[https://theme-hope.vuejs.press/zh/guide/markdown/include.html](https://theme-hope.vuejs.press/zh/guide/markdown/include.html)

::::

## 15. Mac 查找超过指定大小的文件

在 Mac 的命令行中使用 `find` 命令来查找大于 100MB 的文件。下面是具体的命令：

```shell
find / -size +100M
```

本身就是递归查找。

## 16. README

::: details

```markdown
    - header: 课程
      image: /home/features.svg
      bgImage: /home/1-light.svg
      bgImageDark: /home/1-dark.svg
      features:
          - title: Python 体系课
            icon: python
            details: Python 核心技术与实践，带你登顶！
            link: /column/py/basequestion/

          - title: Java
            icon: java
            details: 轻松解决 Java 重难点
            link: /column/Java/

          - title: Unity
            icon: unity
            details: 私教学员专属密码，以防作业抄袭！
            link: #

          - title: C/C++
            icon: cpp
            details: 支持 docsearch 和基于客户端的搜索
            link: #

          - title: ChatGPT
            icon: chat
            details: 你的智能副驾
            link: #
```

:::

## 17. SSL

```text
ssl_certificate "/etc/pki/nginx/server.pem";
ssl_certificate_key "/etc/pki/nginx/private/server.key";
```



## 18. 升级参考链接

- [https://v2.vuepress.vuejs.org/guide/getting-started.html](https://v2.vuepress.vuejs.org/guide/getting-started.html)

## 19. nginx

```txt
server {
    listen 80;
    listen 443 ssl http2;
    server_name bornforthis.cn www.bornforthis.cn;
    index index.html index.htm default.htm default.html;
    root /www/wwwroot/bornforthis.cn;

    #CERT-APPLY-CHECK--START
    # 用于SSL证书申请时的文件验证相关配置 -- 请勿删除并保持这段设置在优先级高的位置
    include /www/server/panel/vhost/nginx/well-known/bornforthis.cn.conf;
    #CERT-APPLY-CHECK--END

    #SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则
    #error_page 404/404.html;
    #HTTP_TO_HTTPS_START
    if ($server_port !~ 443){
        rewrite ^(/.*)$ https://$host$1 permanent;
    }
    #HTTP_TO_HTTPS_END
    ssl_certificate    /www/server/panel/vhost/cert/bornforthis.cn/fullchain.pem;
    ssl_certificate_key    /www/server/panel/vhost/cert/bornforthis.cn/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;

    #SSL-END

    #引用重定向规则，注释后配置的重定向代理将无效
    include /www/server/panel/vhost/nginx/redirect/bornforthis.cn/*.conf;

    #ERROR-PAGE-START 错误页配置，可以注释、删除或修改
    error_page 404 /404.html;
    #error_page 502 /502.html;
    #ERROR-PAGE-END

    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    include /www/server/panel/vhost/rewrite/html_bornforthis.cn.conf;
    #REWRITE-END

    # 添加 try_files 规则以支持 .html 补全
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # 禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.env|\.svn|\.project|LICENSE|README.md) {
        return 404;
    }

    # 一键申请SSL证书验证目录相关设置
    location ~ \.well-known {
        allow all;
    }

    # 禁止在证书验证目录放入敏感文件
    if ($uri ~ "^/\.well-known/.*\.(php|jsp|py|js|css|lua|ts|go|zip|tar\.gz|rar|7z|sql|bak)$") {
        return 403;
    }

    # === 图片防盗链配置 ===
    location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|webp|svg)$ {
        valid_referers bornforthis.cn *.bornforthis.cn;
        # none blocked
        if ($invalid_referer) {
            return 301 https://bornforthis.cn;
        }
        expires      30d;
        error_log /dev/null;
        access_log /dev/null;
    }

    # 静态资源缓存优化
    location ~ .*\\.(js|css)?$ {
        expires      12h;
        error_log /dev/null;
        access_log /dev/null;
    }

    access_log  /www/wwwlogs/bornforthis.cn.log;
    error_log  /www/wwwlogs/bornforthis.cn.error.log;
}
```

