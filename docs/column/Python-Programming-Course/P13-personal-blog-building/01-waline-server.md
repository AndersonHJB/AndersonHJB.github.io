---
title: 01-Waline 非 Docker+SQLite+systemd 稳定部署教程（CentOS 8/宝塔）
icon: blog
date: 2026-01-21 20:23:21
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

我不喜欢使用我不熟悉的技术（docker），并且 docker 非常占用服务器磁盘空间。我更喜欢对我自己部署、上线的项目，拥有掌控感。也就是遇到任何问题，不依靠他人可以独立解决。

故而，我最终选择：服务器直接运行部署➕SQLite「非 docker」。

> 本文记录一次 **Waline 在云服务器上非 Docker 部署、使用 SQLite 存储，并通过 systemd 保证稳定运行**的完整实践过程。
>
> 重点不是“跑起来”，而是 **为什么这样配一定能成功**，以及 **哪些配置其实是多余的**。

## 1. 部署目标与约束条件

### 1.1 🎯 目标

- 在 **云服务器（CentOS 8）** 上部署 Waline
- **不使用 Docker**
- **使用 SQLite** 作为数据库
- **可开机自启 / 崩溃自动重启**
- **配置路径清晰、可复用**

### 1.2 🚫 明确不使用

- Docker
- PM2
- 宝塔 Node 项目管理器
- 修改 Waline 源码
- 不稳定的 dotenv 相对路径加载

## 2. 为什么要用 systemd（核心思想）

Waline 实际启动文件在：

```bash
node_modules/@waline/vercel/vanilla.js
```

这会导致一个经典问题：

> `.env` 文件放在项目根目录，但 Node 进程的 **工作目录并不在项目根目录**

如果依赖：

```bash
require('dotenv').config()
```

就会出现：

- 有时能读到
- 有时读不到
- 换服务器就炸

**✅ 正确思路**

**不要让应用自己“找配置”**，而是：

> 👉 **在进程启动之前，由操作系统直接把配置注入进环境变量**

systemd 正是为此设计的。

## 3. 最终采用的稳定方案（结论先行）

> systemd + EnvironmentFile + 固定 WorkingDirectory

这套方案的特点是：

- 不依赖 Waline 内部实现
- 不依赖 dotenv
- 不依赖启动路径
- 可 100% 复现

## 4. 目录结构约定（示例）

- 官方提供：[waline.sqlite](https://github.com/walinejs/waline/blob/main/assets/waline.sqlite)，下载放入 data 文件夹。

```bash
/www/wwwroot/waline/
├── node_modules/
├── data/
│   └── waline.sqlite   （运行后自动生成）
├── .env
└── package.json
```

## 5. 初始化项目

```bash
# 1) 建议单独放在 /opt
sudo mkdir -p /www/wwwroot/waline
cd /www/wwwroot/waline

# 2) 初始化并安装服务端
npm init -y
npm install @waline/vercel
```

准备 SQLite 数据目录（Waline 的 `SQLITE_PATH` 要填“目录”，不包含文件名）：

```bash
mkdir -p /www/wwwroot/waline/data
chmod 777 /www/wwwroot/waline/data
```

生产环境更建议用专门用户 + 更严格权限，但先跑通再收紧。

## 6. 配置 `.env`（SQLite 必需项 + 基础项）

在 `/www/wwwroot/waline/.env` 写入（示例）：

::: code-tabs

@tab 示例

```bash
# ===== 基础（建议都配）=====
SITE_NAME=YourSite
SITE_URL=https://example.com
# 可选：当自动生成的 server url 不对时手动指定
SERVER_URL=https://comments.example.com

# 安全域名：要同时包含“你的网站域名”和“Waline 服务域名”
# 安全：允许的域名（逗号分隔）
SECURE_DOMAINS=example.com,comments.example.com

# ===== SQLite（必需）=====
# 注意：SQLITE_PATH 是目录，不包含文件名
SQLITE_PATH=/www/wwwroot/waline/data
SQLITE_DB=waline # 可选
SQLITE_PREFIX=wl_

# 登录 token 生成用的随机字符串（必需）
# 使用此命令即可生成：openssl rand -hex 32
JWT_TOKEN=replace_with_a_long_random_string
```

@tab 我的实际配置

```bash
# Basic
SITE_NAME=AI悦创
SITE_URL=https://bornforthis.cn
SERVER_URL=https://waline.bornforthis.cn

# Safety：必须同时写“站点域名 + Waline 服务端域名”
SECURE_DOMAINS=bornforthis.cn,waline.bornforthis.cn

# SQLite
SQLITE_PATH=/www/wwwroot/waline/data
# SQLITE_DB=waline
# SQLITE_PREFIX=wl_

# 必填：用于鉴权/签名，务必换成强随机字符串
JWT_TOKEN=35e4f130dc01530......037af2e18a5b72cb1ac
```

:::

- `SITE_NAME / SITE_URL / SERVER_URL / SECURE_DOMAINS` 等环境变量在官方环境变量文档里有说明。

- SQLite 的关键变量（`SQLITE_PATH / SQLITE_DB / SQLITE_PREFIX / JWT_TOKEN`）官方数据库章节明确列出。

- `SECURE_DOMAINS` 的注意点：需要把**站点地址 + Waline 服务地址**都加上。

**并设置权限（避免被面板/其他用户读到）：**

```bash
chmod 600 /www/wwwroot/waline/.env
```



## 7. 部署

### 7.1 宝塔部署

![](https://blog.images.bornforthis.cn/docs-images/sha256/2b/2ba99f3926b20b609830a9d165b12f981492033efb6b34bec23144d7d0dc5718.png)

```bash
项目目录:/www/wwwroot/waline
项目名称:waline
启动选项:自定义启动命令
node node_modules/@waline/vercel/vanilla.js
项目端口:8360
运行用户:www
包管理器:npm
Node版本:v22.11.0
项目备注:waline
绑定域名:waline.bornforthis.cn
```

### 7.2 命令行部署

- **官方示例**

    启动 Waline（非 Docker 的官方推荐方式），官方给的“非 Docker”方式就是直接跑 `vanilla.js`：

    ```bash
    cd /www/wwwroot/waline
    node node_modules/@waline/vercel/vanilla.js
    ```

    默认会监听 `8360`（常见做法：本机 8360 + Nginx 反代到 https 域名）。

- **用 PM2 守护进程（推荐）**：

    ```bash
    npm i -g pm2
    cd /www/wwwroot/waline
    
    pm2 start "node node_modules/@waline/vercel/vanilla.js" --name waline
    pm2 save
    pm2 startup
    ```

    （`pm2 startup` 会输出一条命令，让你复制执行一次以实现开机自启）

- **Nginx 反向代理到 `127.0.0.1:8360`**

    官方 VPS 部署页给了示例反代配置，你可以照这个思路改成自己的域名与证书路径：

    ```bash
    server
    {
      listen 80;
      listen 443 ssl http2;
      server_name your.domain.server.name;
      root /www/wwwroot/your.domain.server.name;
      if ($server_port !~ 443){
        rewrite ^(/.*)$ https://$host$1 permanent;
      }
    
      # SSL setting
      ssl_certificate fullchain.pem;
      ssl_certificate_key privkey.pem;
      ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
      ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
      ssl_prefer_server_ciphers on;
      ssl_session_cache shared:SSL:10m;
      ssl_session_timeout 10m;
      add_header Strict-Transport-Security "max-age=31536000";
    
      # proxy to 8360
      location / {
        proxy_pass http://127.0.0.1:8360;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header REMOTE-HOST $remote_addr;
        add_header X-Cache $upstream_cache_status;
        # cache
        add_header Cache-Control no-cache;
        expires 12h;
      }
    }
    ```

    核心反代段落（放在你的 `server {}` 里）：

    ```bash
    location / {
      proxy_pass http://127.0.0.1:8360;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
    }
    ```

    然后：

    ```bash
    nginx -t
    systemctl reload nginx
    ```

    



## 8. 运行起来

### 8.1 「方法一」systemd：让 Waline 常驻后台 + 开机自启

不论是哪种方式部署，经过研究都要配置这个才能有效的配置 waline 环境变量。

新建：`/etc/systemd/system/waline.service`

::: code-tabs

@tab 示例

```bash
[Unit]
Description=Waline Service
After=network.target

[Service]
Type=simple

# 关键：固定工作目录，很多 dotenv 相对路径都靠它
WorkingDirectory=/www/wwwroot/waline

# 关键：固定注入 .env
EnvironmentFile=/www/wwwroot/waline/.env

# 关键：用你宝塔安装的 node 路径
ExecStart=/www/server/nodejs/v22.11.0/bin/node /www/wwwroot/waline/node_modules/@waline/vercel/vanilla.js

Restart=always
RestartSec=3

# 建议：用普通用户跑（如果你有 www 用户就用 www）
User=root
Group=root

# 安全加固（可选但推荐）
NoNewPrivileges=true
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

@tab 实际配置

```bash
[Unit]
Description=Waline Service
After=network.target

[Service]
Type=simple

# 关键：固定工作目录，很多 dotenv 相对路径都靠它
WorkingDirectory=/www/wwwroot/waline

# 关键：固定注入 .env
EnvironmentFile=/www/wwwroot/waline/.env

# 关键：用你宝塔安装的 node 路径
ExecStart=/www/server/nodejs/v18.20.8/bin/node /www/wwwroot/waline/node_modules/@waline/vercel/vanilla.js

Restart=always
RestartSec=3

# 建议：用普通用户跑（如果你有 www 用户就用 www）
User=root
Group=root

[Install]
WantedBy=multi-user.target
```

:::

**启用并启动**：

```bash
systemctl daemon-reload
systemctl enable waline
systemctl restart waline
systemctl status waline --no-pager
```

这样做之后，Waline **不管怎么启动/重启，都必然读到** `/www/wwwroot/waline/.env`。

::: details 常见的：systemctl 命令

`systemctl` 是 Linux 系统中用于管理 systemd 服务的核心命令。以下是最常用的命令：

#### 1. 服务管理

- `systemctl start <服务名>` - 启动服务
- `systemctl stop <服务名>` - 停止服务
- `systemctl restart <服务名>` - 重启服务
- `systemctl reload <服务名>` - 重新加载服务配置(不中断服务)
- `systemctl status <服务名>` - 查看服务状态

#### 2. 开机自启动

- `systemctl enable <服务名>` - 设置开机自启
- `systemctl disable <服务名>` - 取消开机自启
- `systemctl is-enabled <服务名>` - 查看是否开机自启

#### 3. 查看信息

- `systemctl list-units --type=service` - 列出所有服务
- `systemctl list-unit-files --type=service` - 列出所有服务文件及状态
- `systemctl list-dependencies <服务名>` - 查看服务依赖关系

#### 4. 系统管理

- `systemctl reboot` - 重启系统
- `systemctl poweroff` - 关机
- `systemctl suspend` - 挂起系统
- `systemctl daemon-reload` - 重新加载 systemd 配置

#### 5. 实用示例

```bash
# 查看 nginx 状态
systemctl status nginx

# 启动并设置 nginx 开机自启
systemctl start nginx
systemctl enable nginx

# 查看所有运行中的服务
systemctl list-units --type=service --state=running

# 查看服务启动失败的原因
systemctl status <服务名> -l
```

需要注意的是,大多数 systemctl 命令需要 root 权限,通常需要配合 `sudo` 使用。

:::

::: details systemd unit 文件语法

systemd 服务文件通常位于 `/etc/systemd/system/` 或 `/usr/lib/systemd/system/`，文件名格式为 `服务名.service`。

#### 1. 基本结构

一个典型的 service 文件包含三个主要部分：

```ini
[Unit]
Description=服务描述
Documentation=文档链接
After=network.target
Requires=其他服务
Wants=其他服务

[Service]
Type=服务类型
ExecStart=启动命令
ExecStop=停止命令
ExecReload=重载命令
Restart=重启策略
User=运行用户
Group=运行用户组
WorkingDirectory=工作目录
Environment="KEY=value"

[Install]
WantedBy=multi-user.target
```

#### 2. [Unit] 部分 - 单元描述

- `Description` - 服务的简短描述
- `Documentation` - 文档地址（可以是 man 页面或 URL）
- `After` - 在指定服务之后启动
- `Before` - 在指定服务之前启动
- `Requires` - 强依赖，如果依赖服务失败，本服务也会失败
- `Wants` - 弱依赖，依赖服务失败不影响本服务
- `Conflicts` - 冲突服务，不能同时运行

#### 3. [Service] 部分 - 服务配置

##### 3.1 Type（服务类型）

- `simple`（默认）- ExecStart 启动的进程为主进程
- `forking` - ExecStart 进程会 fork 子进程，父进程退出
- `oneshot` - 执行一次性任务，执行完退出
- `notify` - 服务启动完成后会通知 systemd
- `idle` - 等待其他任务完成后再启动

##### 3.2 执行命令

- `ExecStart` - 启动服务的完整命令（必需）
- `ExecStartPre` - 启动前执行的命令
- `ExecStartPost` - 启动后执行的命令
- `ExecStop` - 停止服务的命令
- `ExecReload` - 重载配置的命令

##### 3.3 重启策略

- `Restart` - 重启策略
    - `no` - 不自动重启（默认）
    - `on-failure` - 仅在失败时重启
    - `on-abnormal` - 异常退出时重启
    - `always` - 总是重启
    - `on-abort` - 收到未捕获信号时重启
- `RestartSec` - 重启间隔时间（秒）

##### 3.4 其他配置

- `User` / `Group` - 运行服务的用户/组
- `WorkingDirectory` - 工作目录
- `Environment` - 环境变量
- `EnvironmentFile` - 从文件加载环境变量
- `StandardOutput` / `StandardError` - 标准输出/错误重定向
- `PIDFile` - PID 文件路径（Type=forking 时使用）

#### 4. [Install] 部分 - 安装配置

- `WantedBy` - 被哪个 target 依赖（常用 `multi-user.target` 或 `graphical.target`）
- `RequiredBy` - 被哪个 target 强依赖
- `Alias` - 服务别名

#### 5. 实例示例

##### 5.1 简单的 Web 服务

```ini
[Unit]
Description=My Web Application
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/myapp
ExecStart=/usr/bin/node /var/www/myapp/server.js
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

##### 5.2 Nginx 风格的服务

```ini
[Unit]
Description=Nginx HTTP Server
After=network.target

[Service]
Type=forking
PIDFile=/run/nginx.pid
ExecStartPre=/usr/sbin/nginx -t
ExecStart=/usr/sbin/nginx
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

##### 5.3 一次性任务

```ini
[Unit]
Description=Cleanup temporary files
After=network.target

[Service]
Type=oneshot
ExecStart=/usr/local/bin/cleanup.sh
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

#### 6. 使用流程

```bash
# 1. 创建服务文件
sudo nano /etc/systemd/system/myapp.service

# 2. 重新加载 systemd 配置
sudo systemctl daemon-reload

# 3. 启动服务
sudo systemctl start myapp

# 4. 查看状态
sudo systemctl status myapp

# 5. 设置开机自启
sudo systemctl enable myapp
```

#### 7. 常用技巧

- 使用 `%` 变量，如 `%n`（服务名）、`%H`（主机名）
- 环境变量示例：`Environment="PATH=/usr/local/bin:$PATH"`
- 多个 `ExecStart` 需要第一个用 `ExecStart=` 清空
- 命令中使用绝对路径
- 使用 `systemctl cat <服务名>` 查看完整配置

:::

::: details systemd 路径

路径**不是**完全随意的，systemd 有特定的搜索路径优先级：

#### 1. systemd 搜索路径及优先级

systemd 按以下顺序搜索 unit 文件（优先级从高到低）：

1. `/etc/systemd/system/` - **最高优先级**，管理员自定义服务
2. `/run/systemd/system/` - 运行时服务（临时）
3. `/usr/lib/systemd/system/` - 系统软件包安装的服务

#### 2. 路径用途区别

##### 2.1 `/etc/systemd/system/`

- **推荐使用**，用于管理员手动创建或修改的服务
- 优先级最高，会覆盖同名的系统服务
- 系统更新不会覆盖这里的文件
- `systemctl enable` 会在这里创建符号链接

##### 2.2 `/usr/lib/systemd/system/`

- 系统软件包（通过 apt、yum 等）安装的默认服务位置
- 不应该手动修改这里的文件
- 系统更新可能会覆盖修改

##### 2.3 `/run/systemd/system/`

- 运行时临时服务
- 重启后消失
- 很少手动使用

#### 3. 实际使用建议

```bash
# ✅ 推荐：创建自定义服务
sudo nano /etc/systemd/system/myapp.service

# ✅ 推荐：修改系统服务（使用 override）
sudo systemctl edit nginx
# 这会创建 /etc/systemd/system/nginx.service.d/override.conf

# ❌ 不推荐：直接修改系统服务文件
sudo nano /usr/lib/systemd/system/nginx.service  # 更新时会被覆盖
```

#### 4. 查看 systemd 搜索路径

```bash
# 查看 systemd 配置路径
systemd-analyze unit-paths

# 查看具体服务从哪个文件加载
systemctl cat nginx

# 查看服务文件实际路径
systemctl show -p FragmentPath nginx
```

#### 5. 覆盖系统服务的正确方法

如果需要修改系统预装服务（如 nginx），使用 drop-in 文件：

```bash
# 方法1：使用 systemctl edit（推荐）
sudo systemctl edit nginx
# 会自动创建 /etc/systemd/system/nginx.service.d/override.conf

# 方法2：完全覆盖
sudo cp /usr/lib/systemd/system/nginx.service /etc/systemd/system/
sudo nano /etc/systemd/system/nginx.service

# 方法3：手动创建 drop-in
sudo mkdir -p /etc/systemd/system/nginx.service.d/
sudo nano /etc/systemd/system/nginx.service.d/custom.conf
```

#### 6. 总结

- ✅ **自定义服务** → `/etc/systemd/system/`
- ✅ **修改系统服务** → 使用 `systemctl edit` 或 drop-in 目录
- ❌ **不要直接修改** `/usr/lib/systemd/system/` 中的文件
- 路径不能随意，必须在 systemd 的搜索路径内才能被识别

:::

### 8.2 「方法二」（通杀兜底）：写一个 `start.sh` 强制导出 `.env` 再启动

当你不确定 Waline 内部 dotenv 到底从哪里读时，用这个最硬。

在 `/www/wwwroot/waline/start.sh`：

::: code-tabs

@tab base

```bash
#!/usr/bin/env bash
set -e
cd /www/wwwroot/waline

# 把 .env 变成真正的环境变量（忽略空行与注释）
export $(grep -v '^\s*#' .env | grep -v '^\s*$' | xargs)

exec /www/server/nodejs/v22.11.0/bin/node node_modules/@waline/vercel/vanilla.js
```

@tab plus

```bash
#!/usr/bin/env bash
set -euo pipefail

cd /www/wwwroot/test

# 防 Windows 回车导致的奇怪问题（可选但强烈建议）
sed -i 's/\r$//' .env 2>/dev/null || true

# 更稳的加载方式：读取 .env 并 export（兼容 value 里有空格/引号）
set -a
. ./.env
set +a

# 启动 waline（按你的实际 node 路径改）
exec /www/server/nodejs/v22.11.0/bin/node node_modules/@waline/vercel/vanilla.js
```

:::

> 按你自己的项目路径、nodejs 路径来改。

赋权：

```bash
chmod +x /www/wwwroot/waline/start.sh
```

然后在宝塔里把启动命令改成执行：

- 启动文件/命令：`bash /www/wwwroot/waline/start.sh`

> 这会“强制保证”进程拿到环境变量，即使 Waline 自己不读 `.env` 也没关系。

::: details 宝塔参考

![](https://blog.images.bornforthis.cn/docs-images/sha256/e0/e051d2aac7cfb46acee047dba256be7decd7a4ef8f435c0a58625de98379cac0.png)

:::

### 8.3 「方法三」直接传入环境变量

::: code-tabs

@tab base

```bash
# 基础指令
nohup sh -c 'SITE_NAME=bornforthis.cn SITE_URL=https://bornforthis.cn SERVER_URL=https://waline.bornforthis.cn SQLITE_PATH=/www/wwwroot/waline/data JWT_TOKEN=xxxxx node node_modules/@waline/vercel/vanilla.js'
# 每次运行覆盖、生成日志
nohup sh -c 'SITE_NAME=bornforthis.cn SITE_URL=https://bornforthis.cn SERVER_URL=https://waline.bornforthis.cn SQLITE_PATH=/www/wwwroot/waline/data JWT_TOKEN=xxxxx node node_modules/@waline/vercel/vanilla.js' >/tmp/waline.log 2>&1 &
# 每次运行追加日志
nohup sh -c 'SITE_NAME=bornforthis.cn SITE_URL=https://bornforthis.cn SERVER_URL=https://waline.bornforthis.cn SQLITE_PATH=/www/wwwroot/waline/data JWT_TOKEN=xxxxx node node_modules/@waline/vercel/vanilla.js' >>/tmp/waline.log 2>&1 &

# 区分「每次启动」的日志段（进阶）
# 如果你想一眼看出哪次是新启动：
nohup sh -c '
echo "===== $(date) START WALINE =====";
SITE_NAME=bornforthis.cn \
SITE_URL=https://bornforthis.cn \
SERVER_URL=https://waline.bornforthis.cn \
SQLITE_PATH=/www/wwwroot/waline/data \
JWT_TOKEN=xxxxx \
node node_modules/@waline/vercel/vanilla.js
' >> /tmp/waline.log 2>&1 &
```

@tab env 直接传入

```bash
nohup env SITE_NAME=bornforthis.cn SITE_URL=https://bornforthis.cn SERVER_URL=https://waline.bornforthis.cn SQLITE_PATH=/www/wwwroot/waline/data JWT_TOKEN=xxxxx node node_modules/@waline/vercel/vanilla.js >/tmp/waline.log 2>&1 &
```

:::

| 写法        | 行为                     |
| ----------- | ------------------------ |
| `>`         | 覆盖日志                 |
| `>>`        | **追加日志（你要的）**   |
| `2>&1`      | 错误日志也进同一个文件   |
| `nohup … &` | 后台运行，SSH 断开也不死 |

### 8.4 「方法四」`/etc/profile`

- 我反馈的 github：[https://github.com/walinejs/waline/issues/3384](https://github.com/walinejs/waline/issues/3384)
- 参考：[https://github.com/orgs/walinejs/discussions/694](https://github.com/orgs/walinejs/discussions/694)

- 宝塔启动命令：`bash -lc 'node node_modules/@waline/vercel/vanilla.js'`

```bash
# Basic
export SITE_NAME=AI悦创
export SITE_URL=https://bornforthis.cn
export SERVER_URL=https://waline.bornforthis.cn

# Safety：必须同时写“站点域名 + Waline 服务端域名”
export SECURE_DOMAINS=bornforthis.cn,waline.bornforthis.cn

# SQLite
export SQLITE_PATH=/www/wwwroot/waline/data
# SQLITE_DB=waline

# 必填：用于鉴权/签名，务必换成强随机字符串
export JWT_TOKEN=35e4f130dc01530e4fc4ce8e2a8cd7ec02a67336ad5ac037af2e18a5b72cb1ac
```



## 9. 保持 waline 评论最新

修改 waline 项目下的 `package.json`，把版本改成 `latest`：

```bash {13}
{
  "name": "waline",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@waline/vercel": "latest",
    "dotenv": "^17.2.3"
  }
}
```

自己做一个定时任务，或者定期看见最新版终端执行 `npm i`，重启运行即可。

手动更新命令：`npm install @waline/vercel@latest`，再重启服务即可。



## 10. 评论数据迁移

旧版本使用 waline 自带的评论导出后，导入自建服务器时，出现报错如何解决。

不过需要注意⚠️：在导出数据前，先把自己的 waline 升级一下！这样可以很好的、高效的适配自建 waline。

导入之前，一定要把 `waline.json` 中的 User 删除与配置，把自己新部署的管理员账号的信息 copy 出来。也就是直接使用软件打开 SQLite 数据库，把管理员账号信息复制出来。

或者不用配置 User，导入成功之后用原本的管理员账号即可。

### 10.1 报错 1：`500: SQLITE_ERROR: unrecognized token: "'user:794118636@qq.com"`

![](https://blog.images.bornforthis.cn/docs-images/sha256/5f/5f6e414983e83579da4ba8620f165b4b07f75982a95c5fe9d2279a8b5eac3580.png)

使用文本编辑器，进行查找此邮箱：

![](https://blog.images.bornforthis.cn/docs-images/sha256/63/63efe7de6f32fb5262f035b83d0f9e2470a7c889ec175737452c097080980f37.png)

再次导入，即可正常。

### 10.2 报错 2：`500: SQLITE_CONSTRAINT: NOT NULL constraint failed: wl_Users.display_name`

![](https://blog.images.bornforthis.cn/docs-images/sha256/73/73a139db693d4876cd852c8357ac8de3eb750398c9adaa772322b6d4fd62276b.png)

排查问题：

![leancloud 马上倒闭了～](https://blog.images.bornforthis.cn/docs-images/sha256/a4/a46e49881c22a7f142642a76f8d108d5e99cef6e20bb0692bdb948275b318067.png)

leancloud 中数据确实有一条没有**用户名称**所以，需要自己利用对应的 `objectId` 来进行定位，可以选择：删除此数据或者添加 `display_name` 。

还可以借助 AI 来排查，提示词参考：

```bash
解决这个问题500: SQLITE_CONSTRAINT: NOT NULL constraint failed: wl_Users.display_name我的waline.json上传给你，找到问题的内容，我自己手动删除
```

链接：[https://chatgpt.com/share/698f3c35-f248-8001-98bb-8602ccaf00e5](https://chatgpt.com/share/698f3c35-f248-8001-98bb-8602ccaf00e5)

![](https://blog.images.bornforthis.cn/docs-images/sha256/45/4558b7c8bfe7bdb0a9c16a29a3e34160e1140dfe2a70b5adbc3c0c428fbee9eb.png)





















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