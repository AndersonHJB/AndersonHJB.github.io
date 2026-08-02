---
title: NYU Web Design & Computer Principles
icon: blog
date: 2025-06-09 08:46:07
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

## 1. Linux

### 1.1 pwd

获取当前所在路径

```bash
(base) ➜  bornforthis.cn git:(main) ✗ pwd
/Users/huangjiabao/bornforthis.cn
```

### 1.2 进到上一级目录

要在硬盘目录结构中向上导航一级，请使用 `..` 快捷方式，无论您当前在何处。

```bash
foo@bar$ pwd
/Users/foo
```

```bash
foo@bar$ cd ..
foo@bar$ pwd
/Users
```

### 1.3 进到根目录

要导航到硬盘的最顶层目录（称为“根目录”），请使用 `cd` 命令和 `/` 符号（表示根目录是所需的目的地）。

```bash
foo@bar$ cd /
foo@bar$ pwd
/
```

### 1.4 查看当前目录中有哪些文件、文件夹

```bash
foo@bar$ ls
dir1    dir4    file2
dir2    dir5
dir3    file1
```

上面只能看出文件，但是无法看出具体是文件夹还是文件，我们需要列出元数据。

```bash
foo@bar$ ls -l
```

### 1.5 查看隐藏文件

**如何查看当前工作目录中有哪些隐藏目录和文件**？

隐藏文件和目录只需以“`.`”字符开头即可。要查看包含这些文件和目录的文件列表，请在 `ls` 命令中使用 `a` 标志。

```bash
foo@bar$ ls -a
.hidden_dir1    dir1    dir4    file2
.hidden_dir2    dir2    dir5
.hidden_file1   dir3    file1
```

文件和目录都可以通过在名称前加上句点 `.` 来隐藏。









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