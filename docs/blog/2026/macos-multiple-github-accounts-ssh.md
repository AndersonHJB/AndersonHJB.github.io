---
title: macOS 配置多个 GitHub 账号 SSH 的完整指南（个人 / 公司通用）
icon: blog
date: 2026-02-03 07:10:41
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

### 一台 MacOS 电脑，如何配置多个 GitHub 账号 SSH。

:::

## 1. 为什么需要配置多个 GitHub 账号？

在真实的开发环境中，我们常常会遇到这样的场景：

- 一个 **GitHub 个人账号**；
- 一个或多个 **公司 / 组织账号**；
- 不同项目要求使用 **不同 GitHub 身份**；
- 希望 `git push` 时 **不需要手动切换账号**；

如果直接使用默认的 SSH 配置，通常会遇到：

- 推送到错误的 GitHub 账号；
- 没权限却一直提示 `Permission denied (publickey)`；
- SSH 不停尝试错误的 key，导致认证失败；
- 无法配置新 GitHub 账号的 SSH，显示 `Key is already in use GitHub`；

**解决方案只有一个：**

> **使用多个 SSH Key + SSH Host 别名，将不同项目路由到不同 GitHub 账号**。
>
> 换句话说：**同一台 Mac，一条命令无脑 push**。



## 2. 整体实现思路（先理解，再操作）

整个方案的核心结构如下：

| 模块               | 作用                 |
| ------------------ | -------------------- |
| 多个 SSH Key       | 不同 GitHub 身份凭证 |
| `~/.ssh/config`    | SSH 路由配置         |
| Host Alias（别名） | 区分不同 GitHub 入口 |
| Git Remote         | 项目级账号绑定       |

一句话概括：**不同项目 → 不同 SSH Host → 不同 SSH Key → 不同 GitHub 账号**。

## 3. 生成多个 SSH Key（推荐 ed25519）

### 3.1 为个人 GitHub 生成 SSH Key

```bash
ssh-keygen -t ed25519 -C "your_personal_email@example.com"
```

建议保存为：

```bash
~/.ssh/id_ed25519_github_personal
```

### 3.2 为公司 / 第二个 GitHub 生成 SSH Key

```bash
ssh-keygen -t ed25519 -C "your_work_email@company.com"
```

建议保存为：

```bash
~/.ssh/id_ed25519_github_work
```

⚠️ **务必使用不同的文件名，避免覆盖**



## 4. 将 SSH 公钥添加到 GitHub

复制公钥内容：

```bash
pbcopy < ~/.ssh/id_ed25519_github_personal.pub
pbcopy < ~/.ssh/id_ed25519_github_work.pub
```

然后在 GitHub 中操作：

```bash
Settings → SSH and GPG keys → New SSH key
```

分别添加对应账号的公钥。

具体可以参考此教程：[https://bornforthis.cn/blog/2024/7month/git-ssh.html](https://bornforthis.cn/blog/2024/7month/git-ssh.html)

## 5. 配置 `~/.ssh/config`（最关键的一步）

::: tip 如果你有一个用户的 `.ssh` 则推荐配置用户的，例如我的 Mac 用户是：`/Users/huangjiabao/.ssh`。

:::

编辑 SSH 配置文件：

```bash
vim ~/.ssh/config
```

写入如下内容：

```bash
# 个人 GitHub
Host github-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github_personal
    IdentitiesOnly yes

# 工作 GitHub
Host github-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_github_work
    IdentitiesOnly yes
```

**配置说明（非常重要）**

- `Host github-personal` / `github-work`

    👉 **自定义别名，用来区分不同账号**

- `HostName github.com`

    **👉 实际连接的 GitHub 地址**

- `IdentitiesOnly yes`

    👉 强制 SSH 只使用指定 key，避免“乱试 key”问题



## 6. 验证 SSH 是否配置成功（必做）

执行：

```bash
ssh -T git@github-personal
ssh -T git@github-work
```

如果看到类似提示：

```bash
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

说明 SSH 认证 **已经成功** ✅

## 7. 项目级 Git 配置（最容易出错的地方）

### 7.1 ❌ 错误示范（会使用默认 SSH key）

```bash
git@github.com:username/repo.git
```

### 7.2 ✅ 正确做法：使用 Host 别名

- **个人项目**

    ```bash
    git remote set-url origin git@github-personal:username/repo.git
    ```

- **公司项目**

    ```bash
    git remote set-url origin git@github-work:company/repo.git
    ```

- **验证配置：**

    ```bash
    git remote -v
    ```

    输出中只要看到 `github-personal` 或 `github-work`，说明配置正确。

## 8. 为不同项目配置 Git 用户信息（强烈推荐）

在每个项目中单独设置 Git 身份：

```bash
git config user.name "Your Name"
git config user.email "work@company.com"
```

查看当前项目配置：

```bash
git config --list --local
```

这样可以避免 **提交记录混用个人 / 公司邮箱**。

## 9. macOS 常见问题与排雷

### 9.1 SSH 认证失败 / 尝试多个 key

确保配置中有：

```bash
IdentitiesOnly yes
```

否则可能出现：

```bash
Too many authentication failures
```

### 9.2 使用调试模式排查问题

```bash
GIT_SSH_COMMAND="ssh -vvv" git push
```

重点关注是否出现：

```bash
Offering public key: ~/.ssh/id_ed25519_github_work
```

### 9.3 macOS SSH Agent / Keychain 问题

建议执行：

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519_github_personal
ssh-add --apple-use-keychain ~/.ssh/id_ed25519_github_work
```

## 10. 推荐的 `.ssh` 目录结构

```bash
~/.ssh/
├── config
├── id_ed25519_github_personal
├── id_ed25519_github_personal.pub
├── id_ed25519_github_work
├── id_ed25519_github_work.pub
└── known_hosts
```

## 11. 总结一句话（给未来的自己）

> **macOS 多 GitHub 账号 = 多 SSH Key + SSH Host 别名 + 正确的 Git Remote**

一旦配置完成，之后 **clone / pull / push 全程无感切换账号**。













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