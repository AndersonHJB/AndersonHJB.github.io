---
title: 团队网站所有数据
date: 2024-07-12 14:32:04
author: AI悦创
isOriginal: true
icon: back-stage
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

## 1. 服务器/网站数据

::: code-tabs

@tab SSH

```bash
user: root
password: Kaikai2024
IP Address: 120.24.110.76
```

@tab 阿里云账号

```bash
user: ethanyan
password: 2003Quzuyan2140
iPhone: 13019133771
```

@tab 网站管理「失效」

```bash
user: zaowan
password: R4oocY$%IVDD&jKOzk
```

@tab 网站管理员账号

```bash
user: zaowan
password: ePH4iTI!XUMSNw5s(6
```

:::



## 2. 宝塔数据

### 2.1 面板初始化数据

```bash
==================================================================
Congratulations! Installed successfully!
=============注意：首次打开面板浏览器将提示不安全=================

 请选择以下其中一种方式解决不安全提醒
 1、下载证书，地址：https://dg2.bt.cn/ssl/baota_root.pfx，双击安装,密码【www.bt.cn】
 2、点击【高级】-【继续访问】或【接受风险并继续】访问
 教程：https://www.bt.cn/bbs/thread-117246-1-1.html
 mac用户请下载使用此证书：https://dg2.bt.cn/ssl/mac.crt

========================面板账户登录信息==========================

 【云服务器】请在安全组放行 39375 端口
 外网面板地址: https://120.24.110.76:39375/3c5ee4fd
 内网面板地址: https://172.22.246.196:39375/3c5ee4fd
 username: 9hafgtlb
 password: edc00e84

 浏览器访问以下链接，添加宝塔客服
 https://www.bt.cn/new/wechat_customer
==================================================================
Time consumed: 1 Minute!
root@iZwz9ihvrqyn41t68vwed2Z:~# 
```

### 2.2 版本情况「LNMP」

| 序号 | 名称       | 版本   |
| ---- | ---------- | ------ |
| 01   | Nginx      | 1.24   |
| 02   | MySQL      | 8.0    |
| 03   | PHP        | 8.0    |
| 04   | Pure-Ftpd  | 1.0.49 |
| 05   | PhpMyAdmin | 5.1    |







## 3. 端口放行记录

| 序号 | 端口号 | 放行记录               | 放行需求 |
| ---- | ------ | ---------------------- | -------- |
| 01   | 39375  | `2024-07-12 14:51:48 ` | 宝塔访问 |
|      |        |                        |          |



## 4. 操作命令

::: code-tabs

@tab Ubuntu 升级

```bash
# 更新软件列表：
sudo apt update
# 升级所有已安装的包：
sudo apt upgrade

```

:::

::: warning 注意事项

- 升级前建议备份重要数据。

- 某些系统升级可能需要从旧版本逐步升级到最新版本，而不是直接跳跃。

- 确保在稳定的网络环境下执行更新，避免中途更新被中断。

:::





## 5. 版本信息

::: tabs

@tab V0.0.1

| 序号 | 名称     | 值                                                           | 备注                                                         |
| ---- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 01   | 域名/IP  | `120.24.110.76`                                              | 没有备案，先用 IP。<br />后期估计备案后还得重新部署。        |
| 02   | 根目录   | `/www/wwwroot/120.24.110.76`                                 |                                                              |
| 03   | 数据库   | MySQL｜编码：utf8<br />数据库账号：`120_24_110_76`<br />数据库密码：`E9idXBrmfhCjJTyi` | 数据库账号资料：<br />数据库名：**`120_24_110_76`**<br />用户：**`120_24_110_76`**<br />密码：**`E9idXBrmfhCjJTyi`** |
| 04   | PHP 版本 | 80                                                           |                                                              |
| 05   | 伪静态   | Wordpress                                                    |                                                              |

@tab V0.0.3

| 序号 | 名称     | 值                                                           | 备注                                                         |
| ---- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 01   | 域名/IP  | wuzaowan.com                                                 | 重新部署                                                     |
| 02   | 根目录   |                                                              |                                                              |
| 03   | 数据库   | MySQL｜编码：utf8<br />数据库账号：`wuzaowan_com`<br />数据库密码：`D68jQwzTTiJzad2z` | 数据库账号资料：<br />数据库名：**`wuzaowan_com`**<br />用户：**`wuzaowan_com`**<br />密码：**`D68jQwzTTiJzad2z`** |
| 04   | PHP 版本 | 80                                                           |                                                              |
| 05   | 伪静态   | Wordpress                                                    |                                                              |



:::



## 6. 下载链接

| 序号 | 名称        | 链接                                                         |
| ---- | ----------- | ------------------------------------------------------------ |
| 01   | Wordpress   | [https://cn.wordpress.org/download/](https://cn.wordpress.org/download/) |
| 02   | QQ 互联     | [https://connect.qq.com/](https://connect.qq.com/)           |
| 03   | QQ 在线状态 | [https://shang.qq.com/](https://shang.qq.com/)               |





## 7. ChangeLog

### V0.0.1（2024-07-12 14:51:48）

- [x] 初始化服务器
    - [x] 升级系统 and 配套插件
    - [x] 安装宝塔环境

### V0.0.2（2024-07-14 11:12:35）

- [x] 上线 demo 网站
- [x] 授权主题使用
- [x] 启用 PHP 线程防护插件

## 8. HTML

| 序号 | 名称         | 代码                                                         |
| ---- | ------------ | ------------------------------------------------------------ |
| 01   | 公安备案链接 | `<a href="#" target="_blank" rel="noreferrer nofollow">京公网安备 00000000</a>` |
|      |              |                                                              |



## 9. 事件

### 9.1 八月

::: tabs

@tab 2024-08-11 08:43:47

1. 重新上线网站；
2. 添加域名解析；
3. 准备添加 QQ 登录；
    1. QQ 开放平台显示域名没有备案；
    2. 工作日客服上班才可以询问；
4. 填写数据：

```bash
https://wuzaowan.com
https://wuzaowan.com/oauth/qq/callback
造万编程
吉ICP备2024018364号-1
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/b6/b649e5fd6c0f82b1dd1ef2228f3e99da546c7653ba31cd563fd51a79e4fcbfa1.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/54/54d43fe930de6d394d87d2ef767a1adf1c3cc0dff4a653c8dd4da933f3e86b37.png)

但显示正在申请：

![等查看具体情况吧](https://blog.images.bornforthis.cn/docs-images/sha256/04/04b544f1dc37b0778b39e3ffa8691b08e7eec3de5de6ab44d252e9de4d9e3ce7.png)

:::









