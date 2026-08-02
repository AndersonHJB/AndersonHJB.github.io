---
title: 服务器开启仅限 SSH 登录
icon: blog
date: 2025-05-16 09:34:10
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

你好，我是悦创。

阿里云安全性还是比较低的，天天服务器被搞挖矿。我来一次性根治一下：

![](https://blog.images.bornforthis.cn/docs-images/sha256/04/04b1023a19ac6712e69c82b4340c317b747106b6ffbd8b59437a50ec7eabc51e.png)





## 1. 目标

- 通过 **密钥对** 登录 SSH。
- **禁用密码登录**。
- 配置 **fail2ban** 防止暴力破解。
- 配置 **SSH 服务** 仅允许特定 IP 或网络访问。

## 2. 🔑 生成 SSH 密钥对（在本地计算机）

1. **打开本地终端**（如果你已经有密钥，可以跳过此步骤）

2. 在本地终端（Mac/Linux）执行命令生成一个 **SSH 密钥对**：

    ```bash
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```

3. 系统会提示你选择保存位置，一般默认保存到 `~/.ssh/id_rsa`，直接按回车。

4. 系统会提示你设置 **密码**，可以选择设置或直接按回车跳过。

## 3. 💻 将公钥上传到服务器

1. **查看生成的公钥**，执行以下命令：

    ```bash
    cat ~/.ssh/id_rsa.pub
    ```

2. 复制该公钥内容。

3. **SSH 登录到你的服务器**：

    ```bash
    ssh root@your_server_ip
    ```

4. **在服务器上创建 `.ssh` 目录**：

    ```bash
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
    ```

5. **将公钥粘贴到 `authorized_keys` 文件**：

    ```bash
    echo "your_copied_public_key" >> ~/.ssh/authorized_keys
    chmod 600 ~/.ssh/authorized_keys
    ```

## 4. 🔒 禁用密码登录

1. **编辑 SSH 配置文件**：

    ```bash
    vim /etc/ssh/sshd_config
    ```

2. 修改或确保以下配置项：

    ```bash
    # 禁止 root 登录
    PermitRootLogin no
    # 我使用的是 root 账户登录，所以不能单纯的直接禁止，需要使用如下修改：
    PermitRootLogin prohibit-password  # 👉 表示 允许 root 账户用密钥登录，但禁止使用密码登录
    
    
    # 禁用密码登录，确保使用密钥登录
    PasswordAuthentication no  # 👉 禁止所有账号使用密码登录（只允许密钥）
    
    # 启用公钥认证
    PubkeyAuthentication yes
    ```

3. 保存并退出：按 `Esc` 键，输入 `:wq`。

4. **重启 SSH 服务**：

    ```bash
    systemctl restart sshd
    ```

## 5. 🔐 设置 Fail2ban 防止暴力破解

1. **安装 Fail2ban**（如果尚未安装）：

    ```bash
    sudo apt-get install fail2ban -y    # Debian/Ubuntu 系统
    sudo yum install fail2ban -y        # CentOS/RHEL 系统
    ```

2. **启用 Fail2ban**：

    ```bash
    systemctl enable --now fail2ban
    ```

3. **配置 Fail2ban**：编辑 Fail2ban 配置文件 `jail.local`：

    ```bash
    vim /etc/fail2ban/jail.local
    ```

4. 添加或修改以下内容：

    ```bash
    [sshd]
    enabled = true
    port = ssh
    logpath = /var/log/auth.log   # 路径可能因系统不同而不同
    maxretry = 3
    bantime = 600                # 10 分钟封禁时间
    findtime = 600               # 10 分钟内 3 次失败尝试
    ```

5. **重新启动 Fail2ban 服务**：

    ```bash
    systemctl restart fail2ban
    ```

6. **检查 Fail2ban 状态**：

    ```bash
    fail2ban-client status sshd
    ```

## 6. 🌍 只允许特定 IP 登录（可选）

如果你希望仅允许来自某些特定 IP 地址的 SSH 登录，可以进一步设置防火墙或编辑 `sshd_config` 文件。

1. **在 `sshd_config` 中仅允许某些 IP 访问**：

    打开配置文件：

    ```bash
    vim /etc/ssh/sshd_config
    ```

2. 添加如下配置（允许指定 IP 登录，其他都禁止）：

    ```bash
    # 仅允许这些 IP 登录
    AllowUsers your_user@your_ip_address
    
    # 允许多个 IP
    AllowUsers root@192.168.1.100 root@10.0.0.200
    # 替换为你实际允许访问的 IP 地址；
    # 如果是其他用户，也要写成：username@ip_address；
    # ⚠️ 注意：不支持 IP 段，只能逐个列出；
    AllowUsers root@127.0.0.1 root@192.168.1.100 root@10.0.0.200
    ```

3. **重启 SSH 服务**：

    ```bash
    systemctl restart sshd
    ```

## 7. 🔒 增强防火墙规则（可选）

你可以通过设置防火墙规则，限制 SSH 端口仅对特定 IP 开放：

1. **打开防火墙**：

    ```bash
    # 对于 CentOS/RHEL
    firewall-cmd --zone=public --add-port=22/tcp --permanent
    firewall-cmd --reload
    
    # 对于 Ubuntu/Debian
    ufw allow from your_ip_address to any port 22
    ufw enable
    ```

2. **关闭默认端口 22（可选）**：为了安全起见，可以选择更改 SSH 端口（避免使用默认端口 22）。

    ```bash
    vim /etc/ssh/sshd_config
    ```

    修改：

    ```bash
    Port 2222  # 例如修改为 2222
    ```

    然后重启 SSH：

    ```bash
    systemctl restart sshd
    ```

    并确保防火墙允许新端口：

    ```bash
    # 允许 2222 端口
    firewall-cmd --zone=public --add-port=2222/tcp --permanent
    firewall-cmd --reload
    ```

## 8. 📩 最后，测试 SSH 登录

1. **测试**：

    从本地计算机使用 SSH 密钥登录：

    ```bash
    ssh -i ~/.ssh/id_rsa your_user@your_server_ip
    ```

    











## 7. 测试

::: code-tabs

@tab 1. 250516「iPhone」

```bash
(base) ➜  ~ curl ifconfig.me

2409:8934:3f4b:41be:805f:486a:71c2:971b% 
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