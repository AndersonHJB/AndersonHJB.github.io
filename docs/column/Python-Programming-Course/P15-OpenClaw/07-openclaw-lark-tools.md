---
title: 08-飞书插件精简版教程
icon: blog
date: 2026-03-15 10:21:50
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

![欢迎赞助·服务器费用时不时欠费停机～](https://blog.images.bornforthis.cn/docs-images/sha256/5f/5fa847423f8ea5b09c3b90c14825228367fed37d0c3b33ec6873c2cb85ae20e3.png)

你好，我是悦创。

飞书官方插件教程略乱，不适合新手小白。其次，本身没有什么太多更新，小白看了容易有焦虑。目前官网没怎么回复，不知道热度过后是否还会维护。【敬请期待！】

:::: warning

飞书官方流量趁的挺快，但是插件很多 bug 没有修理🔧，很多反馈没有回复～

**老规矩：小白、新手、bug 不会的，直接找我付费操作：150¥**

飞书官方插件名称，改来改去。挺废物的，而且会额外的消耗 Token。如果飞书文档、知识库不是你所需要的，你可以考虑对接其它通讯平台即可。

::: details Image

<img src="https://blog.images.bornforthis.cn/docs-images/sha256/33/33bc6b629b7ea0324415a5e299198d407d204eca03938f767a968235a638c127.png" style="zoom:25%;" />

:::

::::

::: tip ChangeLog

- [x] Plan：所有不说调用的大模型，都是耍流氓！后面分享高频、常用（通用的 Skills）、自己创建 Skills！

- [x] 2026-03-15 10:21:50：发布最新版飞书插件教程；

- [x] 2026-03-16 11:20:01：完成飞书插件所有教程，开始录视频；

- [x] 2026-03-21 12:34:59：跟新飞书插件安装命令！更新一条命令复制运行，待实测。欢迎测试成功的，评论分享。

- [x] 2026-03-24 10:49:07：飞书假装修 bug，假装发布版本，实则用之前的版本。

- [x] 2026-03-24 17:52:36：更新飞书新版教程；

    ::: details 崩塌

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/c0/c075f8b7eadfc08d809d6e4343afacfac5555f971192af1cf5a972d91cf9f580.png)

    :::
    
- [x] 2026-03-25 17:07:04：更新飞书插件 bug 处理；

:::

- **教程链接**：[OpenClaw飞书官方插件使用指南（公开版）](https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh?from=from_copylink)
- **Github 仓库**：[https://github.com/larksuite/openclaw-lark](https://github.com/larksuite/openclaw-lark)

官方教程中，有什么飞书插件反馈、体验群，建议不用加入。都是口水群，飞书官方也没有针对性用户进行反馈回复！只是多了几条未读消息（上百条以上）！





## 1. 安装飞书插件

::: warning 目前 openclaw 3.28 版本与飞书插件不兼容修复完成，使用以下命令安装:

```bash
npx -y @larksuite/openclaw-lark@2026.3.29 install --tools-version 1.0.33
```

:::

::: code-tabs

@tab 新版命令

```bash
npx -y @larksuite/openclaw-lark install
```

@tab 旧版命令

```bash
npx -y @larksuite/openclaw-lark-tools install
```

:::

执行过程中，可选择 **新建机器人** 或 关**联已有机器人**。

::: tip 若执行命令行出错，可在命令行前增加 `sudo `重新执行。

:::

### 1.1 关联已有机器人

![](https://blog.images.bornforthis.cn/docs-images/sha256/91/91bc02d8a5254ea4d1fd735ee2136a35d4ae01dd53d365f3f4486e50110742ae.png)

选择关联已有机器人时，若提示无效的 App ID 或 App Secret，可手动输入正确的应用凭证信息。

这个部分不会的话，查看教程：[**🦞立省 500！30 分钟把 OpenClaw 本地部署并在飞书上配到可用**](./03-OpenClaw-step-up.html) 中飞书机器人创建部分。

![](https://blog.images.bornforthis.cn/docs-images/sha256/f6/f6aa3c45d6793ab2878d4597cd55a2a3d24686b28461956b1419897ad4d1da73.png)

### 1.2 创建新机器人

若选择新建机器人，可通过飞书客户端扫描二维码，选择 **一键创建飞书机器人**。

![](https://blog.images.bornforthis.cn/docs-images/sha256/d3/d36e6bed80e47cf889f117b59337aa62edf6ffcfdd76427b862470cf75bcb219.png)

如果 Windows 设备中无法扫码成功，可能是因为终端的分辨率问题导致，建议更换终端使用 [Cmder](https://cmder.app/) 或 [https://conemu.github.io/](https://conemu.github.io/)（我个人使用 ConEmu 比较多）。

## 2. 机器人创建完成

创建完成后，点击 **打开机器人**，在飞书中向机器人发送任意消息，即可开始对话。

### 2.1 验证安装状态

**验证是否安装成功**：在飞书对话中发送 `/feishu start`。若返回了版本号信息，则代表安装成功。

```bash
/feishu start
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/8d/8db6fad71ad950e17f736063cf62b804322dca5c5da0099bd08ba8a20e3e5375.png)

### 2.2 快速批量授权

若希望快速完成用户授权，便于后续 OpenClaw 通过你的身份完成消息、文档、多维表格、日历等任务，可以在飞书对话中发送 `/feishu auth` 来完成批量授权。

```bash
/feishu auth
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/ef/efd434998f3b890d911ac141975a67414159a674fb4382ae6b9943a6d54fc847.png)

### 2.3 快速学习飞书插件

为了让 OpenClaw 能学会这些新技能并正确使用，建议在飞书对话中发送 `学习一下我安装的新飞书插件，列出有哪些能力`。

```bash
学习一下我安装的新飞书插件，列出有哪些能力
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/a6/a66c41a2a7eba2cc7ebac16b2f3a421778a6f64313073a325f0ee5656c0edb33.png)



## 3. 升级飞书插件

后续飞书如果有升级的话，应该如何升级呢？

1. 运行 `openclaw -v` 命令查看已安装的 OpenClaw 的版本，新版插件对 OpenClaw 的版本要求如下。若低于该版本，插件运行可能出现异常，可执行 `npm install -g openclaw` 命令升级。

    1. **Linux/MacOS：** **2026.2.26** 及以上
    2. **Windows：** **2026.3.2** 及以上 

2. 在终端中运行以下命令升级飞书官方插件到最新版本：

    ::: code-tabs

    @tab 新版命令

    ```bash
    npx -y @larksuite/openclaw-lark update
    ```

    @tab 旧版命令

    ```bash
    npx -y @larksuite/openclaw-lark-tools update
    ```

    :::

    若执行该命令行出错，可在命令行前 增加 `sudo` 重新执行。

    ::: code-tabs

    @tab 新版命令

    ```bash
    sudo npx -y @larksuite/openclaw-lark update
    ```

    @tab 旧版命令

    ```bash
    sudo npx -y @larksuite/openclaw-lark-tools update
    ```

    :::

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/f2/f2c73b8f3df0228f6b3022bc7a356e3f6e67cb484d2af274d7f34ba117309576.png)

## 4. 高级配置指令

### 4.0 邪修版

直接一股脑的，一条命令一条命令执行。别管含义与功能，你们肯定和我的需求差不多，特殊需求后期属性后往后阅读即可。

::: info 更新一条命令复制运行，待实测。欢迎测试成功的，评论分享

因为一条一条复制多行命令麻烦，故而想着能不能直接复制一条实现。欢迎粉丝测试：

- 一条命令「Mac / Linux（bash / zsh）」；
- 一条命令 Windows PowerShell-1；
- 一条命令 Windows PowerShell-2；

:::

::: code-tabs

@tab 基础命令

```bash
openclaw config set channels.feishu.streaming true
openclaw config set channels.feishu.footer.elapsed true
openclaw config set channels.feishu.footer.status true
openclaw config set channels.feishu.threadSession true
openclaw config set channels.feishu.requireMention true --json
openclaw gateway restart  # 重启生效
```

@tab 一条命令「Mac / Linux（bash / zsh）」

```bash
openclaw config set channels.feishu.streaming true && \
openclaw config set channels.feishu.footer.elapsed true && \
openclaw config set channels.feishu.footer.status true && \
openclaw config set channels.feishu.threadSession true && \
openclaw config set channels.feishu.requireMention true --json && \
openclaw gateway restart
```

@tab 一条命令 Windows PowerShell-1

```bash
openclaw config set channels.feishu.streaming true; `
openclaw config set channels.feishu.footer.elapsed true; `
openclaw config set channels.feishu.footer.status true; `
openclaw config set channels.feishu.threadSession true; `
openclaw config set channels.feishu.requireMention true --json; `
openclaw gateway restart
```

@tab 一条命令 Windows PowerShell-2

```bash
openclaw config set channels.feishu.streaming true; openclaw config set channels.feishu.footer.elapsed true; openclaw config set channels.feishu.footer.status true; openclaw config set channels.feishu.threadSession true; openclaw config set channels.feishu.requireMention true --json; openclaw gateway restart
```

@tab Windows CMD

```bash
openclaw config set channels.feishu.streaming true && openclaw config set channels.feishu.footer.elapsed true && openclaw config set channels.feishu.footer.status true && openclaw config set channels.feishu.threadSession true && openclaw config set channels.feishu.requireMention true --json && openclaw gateway restart
```



:::

这些是基础常用的，特殊需求或者指令含义往下阅读。

### 4.1 切换到流式输出

切换到流式输出，可运行指令（如果是本地部署，需要去终端输入；如果是云端部署，去云端的对话框输入）：

```bash
openclaw config set channels.feishu.streaming true
# 流式输出卡片上支持显示更多内容
openclaw config set channels.feishu.footer.elapsed true  # 开启耗时
openclaw config set channels.feishu.footer.status true  # 开启状态展示
```

流式输出效果如图：

![](https://blog.images.bornforthis.cn/docs-images/sha256/71/7159fbaf768997d665f737892c60b75fc1dcf5f743ca4480cb22430db4f44d43.gif)

不用流式输出，可运行指令：

```bash
openclaw config set channels.feishu.streaming false
```

### 4.2 设置多任务并行及独立上下文

机器人可在话题群/消息群话题模式中，针对每个话题拥有独立上下文以及多任务并行。

如需开启该能力，可运行指令：

```bash
openclaw config set channels.feishu.threadSession true
openclaw gateway restart  # 重启生效
```

如需关闭，可运行指令：

```bash
openclaw config set channels.feishu.threadSession false
```

### 4.3 修改飞书机器人在群内的回复方式

目前插件支持的默认方式是机器人被拉进群后，只有 at(@) 机器人时才可回复。 

:::: details 模式 1：只有 【`应用所有者（主人）`】【`@机器人`】 才回复

**在群内机器人仅响应 `应用所有者（主人）` `@机器人的消息`，不响应其他人发给机器人的消息** （已作为 3.17 及以上版本安装时的默认策略，推荐配置）

**配置方法**：

```json
{
    "channels": {
        "feishu": {
            "enabled": true,
            "appId": "cli_你的AppID",
            "appSecret": "你的AppSecret",
            "requireMention": true,    // 要求消息必须 @ 到机器人后才会回复
            "groupPolicy": "allowlist",  // 将 groupPolicy 设置为 "allowlist"（白名单）
            "groupAllowFrom": ["ou_XXXX"]，// 并通过 groupAllowFrom 指定允许触发机器人的用户，配置你本人 openid 信息。
            "groups": { "*": { enabled: true } }
    }
  }
}
```

**你可以直接咨询小龙虾你的 openid**：

```bash
我的 openid 是什么？
```

::: details 点击看图示

![](https://blog.images.bornforthis.cn/docs-images/sha256/87/871e8544484b0e9818cb3273975ef9697e8cddd6bd67f7e0869e9c2d4b7074f4.png)

:::

还有一个方法：就是直接在 OpenClaw Web UI 中直接查看。（掌握方法，而不是全权依赖大模型回复！）

> 不嫌方法多，就怕没法发。

::: details 点击看图示

![](https://blog.images.bornforthis.cn/docs-images/sha256/8b/8bb84d41a901397e0170a29c19169d6dabd9340c61e835b917af7632f3f4173f.png)

:::

::::

:::: details 模式 2：只有 【`@机器人`】 才回复，可响应群内任何人发送的消息

**配置方法**：

```bash
# 设置需要 @ 才回复
openclaw config set channels.feishu.requireMention true --json
openclaw gateway restart  # 重启生效
```

**完整配置示例**：

```json
{
    "channels": {
        "feishu": {
            "enabled": true,
            "appId": "cli_你的AppID",
            "appSecret": "你的AppSecret",
            "requireMention": true,
            "groupPolicy": "open"}
    }
}
```

::::

:::: details 模式 3：不用 `@`，所有消息都回复

::: warning 注意：这个模式在大群里容易刷屏，谨慎使用！（我挺喜欢的，方便哈哈哈哈）

:::

需要额外在开发者后台申请应用身份权限：获取群组中所有消息（敏感权限）`im:message.group_msg`。

**配置方法**：

```bash
# 设置不需要 @ 也回复
openclaw config set channels.feishu.requireMention false --json
openclaw gateway restart  # 重启生效
```

**完整配置示例**：

```json
{
    "channels": {
        "feishu": {
            "enabled": true,
            "appId": "cli_你的AppID",
            "appSecret": "你的AppSecret",
            "requireMention": false,
            "groupPolicy": "open"
        }
    }
}
```

::::

:::: details 模式 4：只有指定群 `@机器人才回复（高级）`

**效果**：

- 大部分群：不用 `@` 也能回复（或者完全不回复）；
- 特定群：必须 `@` 才回复；
- 适合：不同群不同规则，比如工作群严格一点，闲聊群随意一点；

**配置方法**：

- **第一步：获取群 ID**

    可通过以下任意方式获取目标群 ID：让机器人加入群后，发送任意消息，然后在日志里找群 ID，或让机器人回复群 ID。

    ::: details 图片

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/7e/7eac8b1ae7084057a917ae510fbc5679e2cfb6d9728c09ec0b98ac8ad4e807f2.png)

    :::

    群成员可以通过点击右上角的群菜单选项进入群设置页面，查看群 ID。

    ::: details 图片

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/c0/c0ed26936efd9768ce246560870b89fec123fd91f2f0f6147728b882e198273e.png)

    :::

- **第二步：配置特定群规则**

    ```bash
    # 先设置默认所有群都不需要 @
    openclaw config set channels.feishu.requireMention open --json
    
    # 然后给特定群设置需要 @（这里群 ID 只是示例，你要替换成真实的）
    openclaw config set channels.feishu.groups.oc_xxxxxxxx.requireMention true --json
    # openclaw config set channels.feishu.groups.【替换成你自己的群 ID】.requireMention true --json
    openclaw gateway restart  # 重启生效
    ```

    **完整配置示例**：

    ```json
    {
        "channels": {
            "feishu": {
                "enabled": true,
                "appId": "cli_你的AppID",
                "appSecret": "你的AppSecret",
                "requireMention": "open",
                "groupPolicy": "open",
                "groups": {
                    "oc_532044075a61d112f04fa63109c75e9b": { 
                        "requireMention": true 
                    },
                    "oc_另一个群ID": { 
                        "requireMention": true 
                    }
                }
            }
        }
    }
    ```

::::

## 5. 常用诊断命令与问题修复方法

可以在与 OpenClaw 的对话中发送以下命令：

- **`/feishu start`**：确认是否安装成功；

- **`/feishu doctor`**：检查配置是否正常；

    ::: details image

    <img src="https://blog.images.bornforthis.cn/docs-images/sha256/bd/bd64a8c10530da5307b0a9272ae8023342e106a732c3f70becef15eee0677d13.png" style="zoom:25%;" />

    工具配置检查异常，可根据提示的命令在命令行中运行并配置

    ```bash
    openclaw config set tools.profile "full"
    openclaw gateway restart
    ```

    应用身份权限未通过，可以自己申请权限，并发布应用。（参考安装教程）

    :::

- **`/feishu auth`**：批量完成用户授权；

插件中也内置了常见问题的解决方案，遇到问题都可以先问问小龙虾。如果不行，则运行以下指令查看问题，并自主修复：

::: code-tabs

@tab 新版命令

```bash
npx @larksuite/openclaw-lark doctor
```

@tab 旧版命令

```bash
npx @larksuite/openclaw-lark-tools doctor
```

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/6c/6c4cd3bdcda40777da3b9ac0435977188047068d5819c73c21423d93dc27c6b2.png)

运行 `fix` 尝试自动修复：

::: code-tabs

@tab 新版命令

```bash
npx @larksuite/openclaw-lark doctor --fix
```

@tab 旧版命令

```bash
npx @larksuite/openclaw-lark-tools doctor --fix
```

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/2a/2a9f70fd4b03d7f143df922b3759081e3b90d55f3940d42a2a1802079e8310df.png)

如果仍然无法修复，可在评论区反馈信息。

- 运行 `info` 查看版本信息，反馈问题时带上辅助排查。

    ::: code-tabs

    @tab 新版命令

    ```bash
    npx @larksuite/openclaw-lark info 
    ```

    @tab 旧版命令

    ```bash
    npx @larksuite/openclaw-lark-tools info 
    ```

    :::

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/89/8909fa781231c117c40aa1fd09e51631c366b3706907d4ac5e782b03ee10d8d5.png)

- `--all ` 查看详细配置信息：

    ::: code-tabs

    @tab 新版命令

    ```bash
    npx @larksuite/openclaw-lark info --all
    ```

    @tab 旧版命令

    ```bash
    npx @larksuite/openclaw-lark-tools info --all
    ```

    :::

## 6. 常见问题

### 6.1 在使用插件时出现权限不足，需要申请所需权限应该如何操作？

1. 在左侧导航栏选择 **权限管理**，点击 **批量导入/导出权限。**——详细教程：[**🦞立省 500！30 分钟把 OpenClaw 本地部署并在飞书上配到可用**](./03-OpenClaw-step-up.html)

    ::: details image

    <img src="https://blog.images.bornforthis.cn/docs-images/sha256/53/534e44decbbb00a9dbc96117d5d909fd49e5bf07da22aca0efae94a795f0130b.png" style="zoom:50%;" />

    :::

2. 在 **导入** 页签中，复制下面权限替换原有示例，点击 **下一步，确认新增权限** 按钮。

    ```json
    {
      "scopes": {
        "tenant": [
          "acs:access_record:readonly",
          "acs:access_record:write",
          "acs:device:write",
          "acs:devices:readonly",
          "acs:users",
          "admin:admin_dept_stat:readonly",
          "admin:admin_user_stat:readonly",
          "admin:app.admin:check",
          "admin:app.admin:readonly",
          "admin:app.admin_id:readonly",
          "admin:app.category:update",
          "admin:app.enable:write",
          "admin:app.info:readonly",
          "admin:app.user_usable:readonly",
          "admin:app.visibility",
          "admin:badge",
          "admin:badge.grant",
          "admin:ent_email_password",
          "aily:data_asset:read",
          "aily:data_asset:upload_file",
          "aily:data_asset:write",
          "aily:file:read",
          "aily:file:write",
          "aily:knowledge:ask",
          "aily:knowledge:read",
          "aily:knowledge:write",
          "aily:message:read",
          "aily:message:write",
          "aily:run:read",
          "aily:run:write",
          "aily:session:read",
          "aily:session:write",
          "aily:skill:read",
          "aily:skill:write",
          "app_engine:application.environment_variable:read",
          "app_engine:application.event:read",
          "app_engine:application.function:write",
          "app_engine:application.log:read",
          "app_engine:application.metric:read",
          "app_engine:approval:read",
          "app_engine:approval:write",
          "app_engine:attachment:read",
          "app_engine:attachment:write",
          "app_engine:data.record.change:read",
          "app_engine:dataset.meta:read",
          "app_engine:dataset.record:read",
          "app_engine:flow:write",
          "app_engine:global_option:read",
          "app_engine:object.meta:read",
          "app_engine:object.record:read",
          "app_engine:object.record:write",
          "app_engine:record_permission.member:write",
          "app_engine:role.member:write",
          "app_engine:role:read",
          "application:application",
          "application:application.app_message_stats.overview:readonly",
          "application:application.app_package",
          "application:application.app_usage_stats.overview:readonly",
          "application:application.app_version",
          "application:application.app_version:readonly",
          "application:application.bot.operator_name:readonly",
          "application:application.collaborators:write",
          "application:application.contacts_range:write",
          "application:application.feedback.feedback_info",
          "application:application:self_manage",
          "application:bot.menu:readonly",
          "application:bot.menu:write",
          "approval:approval",
          "approval:approval.list:readonly",
          "approval:approval:readonly",
          "approval:definition",
          "approval:external_approval",
          "approval:external_instance",
          "approval:instance",
          "approval:instance.comment",
          "approval:task",
          "attendance:overtime_approval:write",
          "attendance:rule",
          "attendance:rule:readonly",
          "attendance:task",
          "attendance:task:readonly",
          "attendance_machine:check_in_record:write",
          "attendance_machine:device:write",
          "attendance_machine:users",
          "auth:user_access_token:read",
          "baike:entity",
          "baike:entity:exempt_delete",
          "baike:entity:exempt_review",
          "baike:entity:readonly",
          "base:app:copy",
          "base:app:create",
          "base:app:read",
          "base:app:update",
          "base:collaborator:create",
          "base:collaborator:delete",
          "base:collaborator:read",
          "base:dashboard:copy",
          "base:dashboard:read",
          "base:field:create",
          "base:field:delete",
          "base:field:read",
          "base:field:update",
          "base:field_group:create",
          "base:form:read",
          "base:form:update",
          "base:record:create",
          "base:record:delete",
          "base:record:read",
          "base:record:retrieve",
          "base:record:update",
          "base:role:create",
          "base:role:delete",
          "base:role:read",
          "base:role:update",
          "base:table:create",
          "base:table:delete",
          "base:table:read",
          "base:table:update",
          "base:view:read",
          "base:view:write_only",
          "base:workflow:read",
          "base:workflow:write",
          "bitable:app",
          "bitable:app:readonly",
          "block:entity",
          "block:message",
          "board:whiteboard:node:create",
          "board:whiteboard:node:delete",
          "board:whiteboard:node:read",
          "board:whiteboard:node:update",
          "calendar:calendar",
          "calendar:calendar.acl:create",
          "calendar:calendar.acl:delete",
          "calendar:calendar.acl:read",
          "calendar:calendar.event:create",
          "calendar:calendar.event:delete",
          "calendar:calendar.event:read",
          "calendar:calendar.event:reply",
          "calendar:calendar.event:update",
          "calendar:calendar.free_busy:read",
          "calendar:calendar:create",
          "calendar:calendar:delete",
          "calendar:calendar:read",
          "calendar:calendar:readonly",
          "calendar:calendar:subscribe",
          "calendar:calendar:update",
          "calendar:exchange.bindings:create",
          "calendar:exchange.bindings:delete",
          "calendar:exchange.bindings:read",
          "calendar:room",
          "calendar:room:readonly",
          "calendar:settings.caldav:create",
          "calendar:settings.workhour:read",
          "calendar:time_off:create",
          "calendar:time_off:delete",
          "calendar:timeoff",
          "cardkit:card:read",
          "cardkit:card:write",
          "cardkit:template:read",
          "collab_plugins:collab_plugins",
          "collab_plugins:collab_plugins.relation.change:read",
          "contact:contact",
          "contact:contact.base:readonly",
          "contact:contact:update_department_id",
          "contact:contact:update_user_id",
          "contact:department.base:readonly",
          "contact:department.hrbp:readonly",
          "contact:department.organize:readonly",
          "contact:functional_role",
          "contact:functional_role:readonly",
          "contact:group",
          "contact:group:readonly",
          "contact:job_family",
          "contact:job_family:readonly",
          "contact:job_level",
          "contact:job_level:readonly",
          "contact:job_title:readonly",
          "contact:role:readonly",
          "contact:unit",
          "contact:unit:readonly",
          "contact:user.assign_info:read",
          "contact:user.base:readonly",
          "contact:user.department:readonly",
          "contact:user.dotted_line_leader_info.read",
          "contact:user.email:readonly",
          "contact:user.employee:readonly",
          "contact:user.employee_id:readonly",
          "contact:user.employee_number:read",
          "contact:user.gender:readonly",
          "contact:user.id:readonly",
          "contact:user.job_family:readonly",
          "contact:user.job_level:readonly",
          "contact:user.phone:readonly",
          "contact:user.subscription_ids:write",
          "contact:user.user_geo",
          "contact:work_city:readonly",
          "corehr:additional_job.compensation_type:read",
          "corehr:additional_job.compensation_type:write",
          "corehr:additional_job.job:read",
          "corehr:additional_job.job:write",
          "corehr:additional_job.job_level:read",
          "corehr:additional_job.job_level:write",
          "corehr:additional_job.position:read",
          "corehr:additional_job.position:write",
          "corehr:additional_job.service_company:read",
          "corehr:additional_job.service_company:write",
          "corehr:additional_job.work_shift:read",
          "corehr:additional_job.work_shift:write",
          "corehr:additional_job:read",
          "corehr:additional_job:write",
          "corehr:approval_groups.orgdraft_department_change:read",
          "corehr:approval_groups.orgdraft_job_change:read",
          "corehr:approval_groups.orgdraft_position_change:read",
          "corehr:approval_groups:read",
          "corehr:authorization.bp:read",
          "corehr:authorization:read",
          "corehr:authorization:write",
          "corehr:bp.get_by_department:read",
          "corehr:bp.list:read",
          "corehr:common_data.basic_data:read",
          "corehr:common_data.id.convert:read",
          "corehr:common_data.meta_data:read",
          "corehr:common_data.meta_data:write",
          "corehr:common_data.preset_data:read",
          "corehr:common_data.preset_data:write",
          "corehr:company:read",
          "corehr:company:write",
          "corehr:compensation.insurance:read",
          "corehr:compensation.social_plan:read",
          "corehr:compensation_archive_detail.change_description:read",
          "corehr:compensation_archive_detail.indicators:read",
          "corehr:compensation_archive_detail.items:read",
          "corehr:compensation_archive_detail.plan:read",
          "corehr:compensation_archive_detail.salary_level:read",
          "corehr:compensation_change_reason:read",
          "corehr:compensation_indicator:read",
          "corehr:compensation_item:read",
          "corehr:compensation_item_category:read",
          "corehr:compensation_plan:read",
          "corehr:compensation_plan_detail.indicators:read",
          "corehr:compensation_plan_detail.items:read",
          "corehr:contract.company:read",
          "corehr:contract.company:write",
          "corehr:contract.period:read",
          "corehr:contract.period:write",
          "corehr:contract:read",
          "corehr:contract:write",
          "corehr:corehr",
          "corehr:corehr:readonly",
          "corehr:cost_allocation:read",
          "corehr:cost_allocation:write",
          "corehr:cost_center:read",
          "corehr:cost_center:write",
          "corehr:custom_org:read",
          "corehr:custom_org:write",
          "corehr:default_cost_center:read",
          "corehr:default_cost_center:write",
          "corehr:department.cost_center_id:read",
          "corehr:department.custom_fields:read",
          "corehr:department.manager.search:read",
          "corehr:department.manager:read",
          "corehr:department.organize.search:read",
          "corehr:draft:read",
          "corehr:employee.all_bp:read",
          "corehr:employees.international_assignment:write",
          "corehr:employment.archive_cpst_plan:read",
          "corehr:employment.assignment:read",
          "corehr:employment.assignment_pay_group:read",
          "corehr:employment.compensation_type:read",
          "corehr:employment.compensation_type:write",
          "corehr:employment.contract_type:read",
          "corehr:employment.cost_center:read",
          "corehr:employment.custom_field:read",
          "corehr:employment.custom_org:read",
          "corehr:employment.custom_org:write",
          "corehr:employment.custom_org_field:read",
          "corehr:employment.custom_org_field:write",
          "corehr:employment.has_offer_salary:read",
          "corehr:employment.international_assignment.bt:read",
          "corehr:employment.international_assignment.compensation_type:read",
          "corehr:employment.international_assignment.compensation_type:write",
          "corehr:employment.international_assignment.custom_field.apaas_id__c:read",
          "corehr:employment.international_assignment.custom_field:read",
          "corehr:employment.international_assignment.custom_field:write",
          "corehr:employment.international_assignment.job:read",
          "corehr:employment.international_assignment.job:write",
          "corehr:employment.international_assignment.job_family:read",
          "corehr:employment.international_assignment.job_family:write",
          "corehr:employment.international_assignment.job_grade:read",
          "corehr:employment.international_assignment.job_grade:write",
          "corehr:employment.international_assignment.job_level:read",
          "corehr:employment.international_assignment.job_level:write",
          "corehr:employment.international_assignment.position:read",
          "corehr:employment.international_assignment.position:write",
          "corehr:employment.international_assignment.service_company:read",
          "corehr:employment.international_assignment.service_company:write",
          "corehr:employment.international_assignment.weekly_working_hours:read",
          "corehr:employment.international_assignment.weekly_working_hours:write",
          "corehr:employment.international_assignment.work_calendar:read",
          "corehr:employment.international_assignment.work_calendar:write",
          "corehr:employment.international_assignment.work_location:read",
          "corehr:employment.international_assignment.work_location:write",
          "corehr:employment.international_assignment.work_shift:read",
          "corehr:employment.international_assignment.work_shift:write",
          "corehr:employment.international_assignment.working_hours_type:read",
          "corehr:employment.international_assignment.working_hours_type:write",
          "corehr:employment.job:read",
          "corehr:employment.job_grade:read",
          "corehr:employment.job_grade:write",
          "corehr:employment.job_level:read",
          "corehr:employment.job_level:write",
          "corehr:employment.non_compete_covenant:read",
          "corehr:employment.non_compete_covenant:write",
          "corehr:employment.offboarding_reason.search:read",
          "corehr:employment.offboarding_reason:read",
          "corehr:employment.pathway:read",
          "corehr:employment.pathway:write",
          "corehr:employment.pay_group:read",
          "corehr:employment.position:read",
          "corehr:employment.position:write",
          "corehr:employment.recruitment_project_id:read",
          "corehr:employment:read",
          "corehr:employment:write",
          "corehr:file:download",
          "corehr:file:write",
          "corehr:flow.definition:read",
          "corehr:international_assignment:read",
          "corehr:international_assignment:write",
          "corehr:job.job_level:read",
          "corehr:job_change.company:read",
          "corehr:job_change.company:write",
          "corehr:job_change.compensation_type:read",
          "corehr:job_change.contract_end_date:read",
          "corehr:job_change.contract_end_date:write",
          "corehr:job_change.contract_number:read",
          "corehr:job_change.contract_start_date:write",
          "corehr:job_change.contract_type:write",
          "corehr:job_change.cost_center:write",
          "corehr:job_change.department:read",
          "corehr:job_change.department:write",
          "corehr:job_change.direct_manager:write",
          "corehr:job_change.dotted_manager:write",
          "corehr:job_change.duration_type:read",
          "corehr:job_change.employee_subtype:read",
          "corehr:job_change.employment_custom_field:read",
          "corehr:job_change.is_adjust_salary:read",
          "corehr:job_change.job:read",
          "corehr:job_change.job:write",
          "corehr:job_change.job_family:read",
          "corehr:job_change.job_family:write",
          "corehr:job_change.job_grade:read",
          "corehr:job_change.job_grade:write",
          "corehr:job_change.job_level:write",
          "corehr:job_change.pathway:read",
          "corehr:job_change.pathway:write",
          "corehr:job_change.probation_end_date:write",
          "corehr:job_change.probation_exist:write",
          "corehr:job_change.remark:read",
          "corehr:job_change.remark:write",
          "corehr:job_change.service_company:read",
          "corehr:job_change.service_company:write",
          "corehr:job_change.social_security_city:read",
          "corehr:job_change.social_security_city:write",
          "corehr:job_change.work_location:write",
          "corehr:job_change.work_shift:read",
          "corehr:job_change.work_shift:write",
          "corehr:job_change.workforce_type:read",
          "corehr:job_change.workforce_type:write",
          "corehr:job_change.working_calendar:read",
          "corehr:job_change.working_calendar:write",
          "corehr:job_change.working_hours_type:write",
          "corehr:job_data.assignment_start_reason:read",
          "corehr:job_data.compensation_type:read",
          "corehr:job_data.job_data_reason:read",
          "corehr:job_data.service_company:read",
          "corehr:job_data.work_shift:read",
          "corehr:job_data:read",
          "corehr:job_data:readonly",
          "corehr:job_data:write",
          "corehr:job_family:read",
          "corehr:job_family:write",
          "corehr:job_grade:read",
          "corehr:job_grade:write",
          "corehr:job_level",
          "corehr:job_level:read",
          "corehr:job_level:readonly",
          "corehr:job_level:write",
          "corehr:leave:read",
          "corehr:leave_grant:read",
          "corehr:leave_grant:write",
          "corehr:leave_granting_record:write",
          "corehr:leaves:read",
          "corehr:locations:read",
          "corehr:locations:write",
          "corehr:offboarding.block_list:read",
          "corehr:offboarding.block_list:write",
          "corehr:offboarding.custom_field:read",
          "corehr:offboarding.last_attendance_date:read",
          "corehr:offboarding.noncompete_agreement:read",
          "corehr:offboarding.retain_account:read",
          "corehr:offboarding.retain_account:write",
          "corehr:offboarding.signature:read",
          "corehr:offboarding.social_insurance:read",
          "corehr:offboarding:write",
          "corehr:orgrole_info:read",
          "corehr:pathway:read",
          "corehr:pathway:write",
          "corehr:person.additional_nationalities:read",
          "corehr:person.additional_nationalities:write",
          "corehr:person.address:read",
          "corehr:person.address:write",
          "corehr:person.bank_account:read",
          "corehr:person.bank_account:write",
          "corehr:person.born_country_region:read",
          "corehr:person.born_country_region:write",
          "corehr:person.citizenship_status:read",
          "corehr:person.citizenship_status:write",
          "corehr:person.custom_field:read",
          "corehr:person.custom_field:write",
          "corehr:person.date_entered_workforce:read",
          "corehr:person.date_entered_workforce:write",
          "corehr:person.date_of_birth:read",
          "corehr:person.date_of_birth:write",
          "corehr:person.dependent:read",
          "corehr:person.dependent:write",
          "corehr:person.education:read",
          "corehr:person.education:write",
          "corehr:person.email:read",
          "corehr:person.email:write",
          "corehr:person.emergency_contact:read",
          "corehr:person.emergency_contact:write",
          "corehr:person.entry_leave_time:read",
          "corehr:person.gender:read",
          "corehr:person.gender:write",
          "corehr:person.hukou:read",
          "corehr:person.hukou:write",
          "corehr:person.is_disabled:read",
          "corehr:person.is_disabled:write",
          "corehr:person.is_old_alone:read",
          "corehr:person.is_old_alone:write",
          "corehr:person.legal_name:read",
          "corehr:person.legal_name:write",
          "corehr:person.marital_status:read",
          "corehr:person.marital_status:write",
          "corehr:person.martyr_family:read",
          "corehr:person.martyr_family:write",
          "corehr:person.national_id.search:read",
          "corehr:person.national_id:read",
          "corehr:person.national_id:write",
          "corehr:person.nationality:read",
          "corehr:person.nationality:write",
          "corehr:person.native_region:read",
          "corehr:person.native_region:write",
          "corehr:person.passport_number:read",
          "corehr:person.personal_profile:read",
          "corehr:person.personal_profile:write",
          "corehr:person.phone.search:read",
          "corehr:person.phone:read",
          "corehr:person.phone:write",
          "corehr:person.political_affiliation:read",
          "corehr:person.political_affiliation:write",
          "corehr:person.preferred_name:write",
          "corehr:person.race:read",
          "corehr:person.race:write",
          "corehr:person.religion:read",
          "corehr:person.religion:write",
          "corehr:person.resident_tax:read",
          "corehr:person.resident_tax:write",
          "corehr:person.resident_tax_custom_field:read",
          "corehr:person.resident_tax_custom_field:write",
          "corehr:person.work_experience:read",
          "corehr:person.work_experience:write",
          "corehr:person:write",
          "corehr:position.direct_leader:read",
          "corehr:position.employee_type:read",
          "corehr:position.job:read",
          "corehr:position.job_family:read",
          "corehr:position.job_grade:read",
          "corehr:position.job_level:read",
          "corehr:position.working_hours_type:read",
          "corehr:position:read",
          "corehr:position:write",
          "corehr:pre_hire.abnormal_reason_field:read",
          "corehr:pre_hire.check_in_data:read",
          "corehr:pre_hire.company_manual_updated:read",
          "corehr:pre_hire.company_sponsored_visa:read",
          "corehr:pre_hire.cost_center:read",
          "corehr:pre_hire.cost_center:write",
          "corehr:pre_hire.flow_id:read",
          "corehr:pre_hire.office_address:read",
          "corehr:pre_hire.onboarding_address:read",
          "corehr:pre_hire.withdrawn_reason:read",
          "corehr:pre_hire:check_work_email",
          "corehr:pre_hire:complete",
          "corehr:pre_hire:restore_flow_instance",
          "corehr:pre_hire:transform_onboarding_task",
          "corehr:pre_hire:transit_tasks",
          "corehr:pre_hire:withdraw_onboarding",
          "corehr:probation.actual_probation_end_date:write",
          "corehr:probation.assessment:write",
          "corehr:probation.custom_field:read",
          "corehr:probation.custom_field:write",
          "corehr:probation.extended_probation_period_duration:write",
          "corehr:probation.notes:read",
          "corehr:probation.notes:write",
          "corehr:probation.probation_expected_end_date:write",
          "corehr:probation.probation_extend_expected_end_date:write",
          "corehr:probation.probation_outcome:read",
          "corehr:probation.probation_outcome:write",
          "corehr:probation.probation_start_date:write",
          "corehr:probation.score:read",
          "corehr:probation.self_review:read",
          "corehr:probation.self_review:write",
          "corehr:probation:write",
          "corehr:security_group:read",
          "corehr:work_calendar:read",
          "corehr:workforce_detail:read",
          "corehr:workforce_detail:write",
          "corehr:workforce_plan:read",
          "corehr:workforce_plan_centralized_reporting_project_detail:write",
          "directory:department.base:read",
          "directory:department.count:read",
          "directory:department.custom_field:read",
          "directory:department.data_source:read",
          "directory:department.department_path:read",
          "directory:department.external_id:read",
          "directory:department.has_child:read",
          "directory:department.idconvert:read",
          "directory:department.leader:read",
          "directory:department.name:read",
          "directory:department.order_weight:read",
          "directory:department.organization:read",
          "directory:department.parent_id:read",
          "directory:department.status:read",
          "directory:employee.base.active_status:read",
          "directory:employee.base.avatar:read",
          "directory:employee.base.background_image:read",
          "directory:employee.base.base:read",
          "directory:employee.base.custom_field:read",
          "directory:employee.base.data_source:read",
          "directory:employee.base.department:read",
          "directory:employee.base.department_path:read",
          "directory:employee.base.dept_order:read",
          "directory:employee.base.description:read",
          "directory:employee.base.dotted_line_leaders:read",
          "directory:employee.base.email:read",
          "directory:employee.base.enterprise_email:read",
          "directory:employee.base.enterprise_email_alias:read",
          "directory:employee.base.external_id:read",
          "directory:employee.base.gender:read",
          "directory:employee.base.geo:read",
          "directory:employee.base.geo:write",
          "directory:employee.base.is_admin:read",
          "directory:employee.base.is_primary_admin:read",
          "directory:employee.base.is_resigned:read",
          "directory:employee.base.leader:read",
          "directory:employee.base.leader_id:read",
          "directory:employee.base.mobile:read",
          "directory:employee.base.name.another_name:read",
          "directory:employee.base.name.first_name:read",
          "directory:employee.base.name.last_name:read",
          "directory:employee.base.name.name:read",
          "directory:employee.base.resign_time:read",
          "directory:employee.base.role:read",
          "directory:employee.base.status:read",
          "directory:employee.base.subscription_ids:read",
          "directory:employee.base.subscription_ids:write",
          "directory:employee.idconvert:read",
          "directory:employee.work.base_work:read",
          "directory:employee.work.employment_type:read",
          "directory:employee.work.extension_number:read",
          "directory:employee.work.job_number:read",
          "directory:employee.work.job_title:read",
          "directory:employee.work.join_date:read",
          "directory:employee.work.positions:read",
          "directory:employee.work.resign_date:read",
          "directory:employee.work.resign_reason:read",
          "directory:employee.work.resign_remark:read",
          "directory:employee.work.resign_type:read",
          "directory:employee.work.staff_status:read",
          "directory:employee.work.work_country_or_region:read",
          "directory:employee.work.work_place:read",
          "directory:employee.work.work_station:read",
          "directory:job_title.base:read",
          "directory:job_title.status:read",
          "directory:place.base:read",
          "directory:place.status:read",
          "docs:doc",
          "docs:doc:readonly",
          "docs:document.comment:create",
          "docs:document.comment:read",
          "docs:document.comment:update",
          "docs:document.comment:write_only",
          "docs:document.content:read",
          "docs:document.media:download",
          "docs:document.media:upload",
          "docs:document.subscription",
          "docs:document.subscription:read",
          "docs:document:copy",
          "docs:document:export",
          "docs:document:import",
          "docs:event.document_deleted:read",
          "docs:event.document_edited:read",
          "docs:event.document_opened:read",
          "docs:event:subscribe",
          "docs:permission.member",
          "docs:permission.member:auth",
          "docs:permission.member:create",
          "docs:permission.member:delete",
          "docs:permission.member:readonly",
          "docs:permission.member:retrieve",
          "docs:permission.member:transfer",
          "docs:permission.member:update",
          "docs:permission.setting",
          "docs:permission.setting:read",
          "docs:permission.setting:readonly",
          "docs:permission.setting:write_only",
          "document_ai:bank_card:recognize",
          "document_ai:business_card:recognize",
          "document_ai:business_license:recognize",
          "document_ai:chinese_passport:recognize",
          "document_ai:contract:field_extract",
          "document_ai:driving_license:recognize",
          "document_ai:food_manage_license:recognize",
          "document_ai:food_produce_license:recoginze",
          "document_ai:health_certificate:recognize",
          "document_ai:hkm_mainland_travel_permit:recognize",
          "document_ai:id_card:recognize",
          "document_ai:resume:recognize",
          "document_ai:taxi_invoice:recognize",
          "document_ai:train_invoice:recognize",
          "document_ai:tw_mainland_travel_permit:recognize",
          "document_ai:vat_invoice:recognize",
          "document_ai:vehicle_invoice:recognize",
          "document_ai:vehicle_license:recognize",
          "docx:document",
          "docx:document.block:convert",
          "docx:document:create",
          "docx:document:readonly",
          "docx:document:write_only",
          "drive:drive",
          "drive:drive.metadata:readonly",
          "drive:drive.search:readonly",
          "drive:drive:readonly",
          "drive:drive:version",
          "drive:drive:version:readonly",
          "drive:export:readonly",
          "drive:file",
          "drive:file.like:readonly",
          "drive:file.meta.sec_label.read_only",
          "drive:file:download",
          "drive:file:readonly",
          "drive:file:upload",
          "drive:file:view_record:readonly",
          "ea_integration_platform:lawfirm_attorney_capacity:read",
          "ehr:attachment:readonly",
          "ehr:employee:readonly",
          "event:ip_list",
          "financial_access_platform:data:write",
          "helpdesk:all",
          "helpdesk:all:readonly",
          "helpdesk:helpdesk:access",
          "hire:advertisement",
          "hire:agency",
          "hire:agency:readonly",
          "hire:agency_account",
          "hire:agency_account:readonly",
          "hire:application",
          "hire:application:readonly",
          "hire:attachment",
          "hire:attachment:readonly",
          "hire:auth",
          "hire:auth:readonly",
          "hire:background_check_order",
          "hire:background_check_order:readonly",
          "hire:ehr_import",
          "hire:employee",
          "hire:employee:readonly",
          "hire:evaluation:readonly",
          "hire:exam",
          "hire:exam:readonly",
          "hire:external_application",
          "hire:external_application:readonly",
          "hire:external_offer",
          "hire:external_offer:readonly",
          "hire:external_referral_reward",
          "hire:interview",
          "hire:interview:readonly",
          "hire:interviewer",
          "hire:interviewer:readonly",
          "hire:job",
          "hire:job.composite_info:readonly",
          "hire:job:readonly",
          "hire:job_process:readonly",
          "hire:job_requirement",
          "hire:job_requirement:readonly",
          "hire:location:readonly",
          "hire:note",
          "hire:note:readonly",
          "hire:offer",
          "hire:offer:readonly",
          "hire:offer_approval_template:readonly",
          "hire:offer_schema:readonly",
          "hire:offer_selection_object",
          "hire:questionnaire",
          "hire:questionnaire:readonly",
          "hire:referral",
          "hire:referral:readonly",
          "hire:referral_account",
          "hire:referral_account:readonly",
          "hire:referral_website:readonly",
          "hire:site",
          "hire:site:readonly",
          "hire:site_application",
          "hire:site_application:readonly",
          "hire:site_job_post:readonly",
          "hire:subject:readonly",
          "hire:talent",
          "hire:talent:readonly",
          "hire:talent_blocklist",
          "hire:talent_blocklist:readonly",
          "hire:talent_folder",
          "hire:talent_folder:readonly",
          "hire:talent_folder_association",
          "hire:talent_tag",
          "hire:talent_tag:readonly",
          "hire:tripartite_agreement",
          "hire:tripartite_agreement:readonly",
          "im:app_feed_card:write",
          "im:biz_entity_tag_relation:read",
          "im:biz_entity_tag_relation:write",
          "im:chat",
          "im:chat.access_event.bot_p2p_chat:read",
          "im:chat.announcement:read",
          "im:chat.announcement:write_only",
          "im:chat.chat_pins:read",
          "im:chat.chat_pins:write_only",
          "im:chat.collab_plugins:read",
          "im:chat.collab_plugins:write_only",
          "im:chat.managers:write_only",
          "im:chat.members:bot_access",
          "im:chat.members:read",
          "im:chat.members:write_only",
          "im:chat.menu_tree:read",
          "im:chat.menu_tree:write_only",
          "im:chat.moderation:read",
          "im:chat.tabs:read",
          "im:chat.tabs:write_only",
          "im:chat.top_notice:write_only",
          "im:chat.widgets:read",
          "im:chat.widgets:write_only",
          "im:chat:create",
          "im:chat:delete",
          "im:chat:moderation:write_only",
          "im:chat:operate_as_owner",
          "im:chat:read",
          "im:chat:readonly",
          "im:chat:update",
          "im:datasync.feed_card.time_sensitive:write",
          "im:message",
          "im:message.group_at_msg:readonly",
          "im:message.group_msg",
          "im:message.p2p_msg:readonly",
          "im:message.pins:read",
          "im:message.pins:write_only",
          "im:message.reactions:read",
          "im:message.reactions:write_only",
          "im:message.urgent",
          "im:message.urgent.status:write",
          "im:message.urgent:phone",
          "im:message.urgent:sms",
          "im:message:readonly",
          "im:message:recall",
          "im:message:send_as_bot",
          "im:message:send_multi_depts",
          "im:message:send_multi_users",
          "im:message:send_sys_msg",
          "im:message:update",
          "im:resource",
          "im:tag:read",
          "im:tag:write",
          "im:url_preview.update",
          "im:user_agent:read",
          "mail:user_mailbox.event.mail_address:read",
          "mail:user_mailbox.mail_contact.mail_address:read",
          "mail:user_mailbox.mail_contact.phone:read",
          "mail:user_mailbox.message.address:read",
          "mail:user_mailbox.message.subject:read",
          "mdm:company.company_bank_account.account:readonly",
          "mdm:country_region:read",
          "mdm:legal_entity",
          "mdm:legal_entity:readonly",
          "mdm:spend",
          "mdm:spend:readonly",
          "mdm:vendor",
          "mdm:vendor:readonly",
          "minutes:minutes",
          "minutes:minutes:readonly",
          "moments:moments:readonly",
          "myai_data:myai_data:read",
          "okr:okr.period:readonly",
          "okr:okr.period:writeonly",
          "optical_char_recognition:image",
          "passport:session:logout",
          "passport:session_mask:readonly",
          "payroll:cost_allocation_plan:read",
          "payroll:cost_allocation_report:read",
          "payroll:external_datasource_configuration:read",
          "payroll:pay_groups:read",
          "payroll:payroll_calculation_item:read",
          "performance:metric:read",
          "performance:metric:write",
          "performance:metric_lib:read",
          "performance:performance",
          "performance:performance:readonly",
          "performance:review_template:read",
          "performance:semester:read",
          "performance:semester_activity:read",
          "performance:semester_activity:write",
          "performance:semester_user:read",
          "personal_settings:status:system_status_operate",
          "personal_settings:status:system_status_update",
          "report:report",
          "report:rule:readonly",
          "report:task:readonly",
          "search:data_item:create",
          "search:data_item:delete",
          "search:data_item:readonly",
          "search:data_schemas:create",
          "search:data_schemas:delete",
          "search:data_schemas:readonly",
          "search:data_schemas:update",
          "search:data_source",
          "search:data_source:create",
          "search:data_source:delete",
          "search:data_source:readonly",
          "search:data_source:update",
          "search:dataset.docs:create",
          "search:dataset.docs:delete",
          "search:dataset:create",
          "search:dataset:delete",
          "security_and_compliance:audit_log.openapi_log:readonly",
          "security_and_compliance:device_apply_record:read",
          "security_and_compliance:device_apply_record:write",
          "security_and_compliance:device_record:read",
          "security_and_compliance:device_record:write",
          "sheets:spreadsheet",
          "sheets:spreadsheet.meta:read",
          "sheets:spreadsheet.meta:write_only",
          "sheets:spreadsheet:create",
          "sheets:spreadsheet:read",
          "sheets:spreadsheet:readonly",
          "sheets:spreadsheet:write_only",
          "slides:presentation:create",
          "slides:presentation:read",
          "slides:presentation:update",
          "slides:presentation:write_only",
          "space:document.event:read",
          "space:document:delete",
          "space:document:move",
          "space:document:retrieve",
          "space:document:shortcut",
          "space:folder:create",
          "spark:directory.user.id_convert:read",
          "speech_to_text:speech",
          "task:attachment:read",
          "task:attachment:write",
          "task:comment",
          "task:comment:read",
          "task:comment:readonly",
          "task:comment:write",
          "task:custom_field:read",
          "task:custom_field:write",
          "task:section:read",
          "task:section:write",
          "task:task",
          "task:task.event_update_tenant:readonly",
          "task:task:read",
          "task:task:readonly",
          "task:task:write",
          "task:task:writeonly",
          "task:tasklist:read",
          "task:tasklist:write",
          "tenant:tenant.domain:read",
          "tenant:tenant.product_assign_info:read",
          "tenant:tenant:readonly",
          "translation:text",
          "trust_party:collaboration.tenant:readonly",
          "trust_party:collaboration_rule:read",
          "trust_party:collaboration_rule:write",
          "vc:alert:readonly",
          "vc:export",
          "vc:meeting",
          "vc:meeting.all_meeting:readonly",
          "vc:meeting:readonly",
          "vc:record:readonly",
          "vc:report:readonly",
          "vc:reserve",
          "vc:reserve:readonly",
          "vc:room",
          "vc:room:readonly",
          "verification:verification_information:readonly",
          "wiki:member:create",
          "wiki:member:retrieve",
          "wiki:member:update",
          "wiki:node:copy",
          "wiki:node:create",
          "wiki:node:move",
          "wiki:node:read",
          "wiki:node:retrieve",
          "wiki:node:update",
          "wiki:setting:read",
          "wiki:setting:write_only",
          "wiki:space:read",
          "wiki:space:retrieve",
          "wiki:space:write_only",
          "wiki:wiki",
          "wiki:wiki:readonly",
          "workplace:workplace_using_data:read"
        ],
        "user": [
          "base:app:copy",
          "base:app:create",
          "base:app:read",
          "base:app:update",
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
          "board:whiteboard:node:create",
          "board:whiteboard:node:read",
          "calendar:calendar.event:create",
          "calendar:calendar.event:delete",
          "calendar:calendar.event:read",
          "calendar:calendar.event:reply",
          "calendar:calendar.event:update",
          "calendar:calendar.free_busy:read",
          "calendar:calendar:read",
          "contact:contact.base:readonly",
          "contact:user.base:readonly",
          "contact:user.employee_id:readonly",
          "contact:user:search",
          "docs:document.comment:create",
          "docs:document.comment:read",
          "docs:document.comment:update",
          "docs:document.media:download",
          "docs:document.media:upload",
          "docs:document:copy",
          "docs:document:export",
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
          "im:message.send_as_user",
          "im:message:readonly",
          "offline_access",
          "search:docs:read",
          "search:message",
          "sheets:spreadsheet.meta:read",
          "sheets:spreadsheet:create",
          "sheets:spreadsheet:read",
          "sheets:spreadsheet:write_only",
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

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/79/7911408c43c19df210cc5b47c770239c7bdbf14b8bdd27750f95428c5f490332.png)

3. 确认导入权限无误后，点击 **申请开通** 按钮。

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/ff/ff1fb45cb7a903859cf2ba9685adb031d99e313094beee0ab1ea6c586bd46380.png)

4. “应用身份权限”可访问的数据范围的设置保持默认 "**与应用的可用范围一致**" ，点击 **确认** 完成操作。

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/28/288020f6ee5d4740826d9ab466f330143fb99713c1f6c0c4bf8e54b10c8ad896.png)

### 6.2 插件安装完毕运行后，报 cannot find module xxx

- **原因**：系统没有安装插件的依赖（可能是安装被中断或权限问题）

- **解决方法**：进入插件安装目录，运行 `npm install`。

![](https://blog.images.bornforthis.cn/docs-images/sha256/62/62b821dc3b3059ecb81b73d8c5e952c6f4633724eac41b47f8956b4f1a95cee3.png)

### 6.3 升级到 OpenClaw 3.2 版本上无法正常调用工具

这个 OpenClaw 版本默认把新 agent 的工具权限关闭。修复方式为在 `openclaw.json` 找到并修改为下面这段内容：

```json
{
  "tools": {
    "profile": "full",
    "sessions": {
      "visibility": "all"
    }
  }
}
```

### 6.4 飞书官方插件与 OpenClaw 社区原有插件有何区别

飞书官方插件，能以用户身份读写消息、文档等，体验更丝滑；以下对比由 AI 整理，供参考。

![](https://blog.images.bornforthis.cn/docs-images/sha256/32/3287bba12c29bb46b8f1e6b92bb5cc83f3e95e9743b6fcfd453e86e0602cc59f.jpeg)

### 6.5 升级到 openclaw 2026.3.22 有问题

openclaw2026.3.22 有 break change，本插件 2026.3.25 版本兼容。

可直接运行 `npx @larksuite/openclaw-lark update` 进行升级；（推荐）

```bash
npx @larksuite/openclaw-lark update
```

如果没有成功升级到 2026.3.25 版本，可以指定升级脚本进行升级：

::: code-tabs

@tab 最新命令

```bash
npx -y @larksuite/openclaw-lark update --tools-version 1.0.32
```

@tab 旧版命令

```bash
npx @larksuite/openclaw-lark update --tools-version 1.0.31
```

:::

### 6.6 升级到 openclaw 2026.3.28 有问题

本插件 2026.3.29 版本兼容，如果升级不成功，可以指定升级脚本进行升级：

```bash
npx -y @larksuite/openclaw-lark update --tools-version 1.0.33
```





## 7. 如何在飞书插件中配置 OpenClaw 关联多个飞书机器人，对应不同 Agent

::: warning 这个是很适合进行付费定制配置的，可以找我付费配置。（500¥）

**非必要不要尝试，目前 bug 居多！很多飞书通讯，直接奔溃！**

**快捷方法**：

1. 创建新的飞书机器人，用于关联到新的账号上。一键创建一个OpenClaw 机器人：[立即创建](https://open.feishu.cn/page/openclaw?form=multiAgent)
2. 告诉 AI 你想创建一个怎样的新 Agent，以及这个 Agent 关联的飞书账号是什么，并将操作指南发给 OpenClaw  请他自己完成对应配置：[如何在飞书插件中配置 OpenClaw 关联多个飞书机器人，对应不同Agent](https://bytedance.larkoffice.com/docx/WNNXdhKxmo8KDJxMM9dc0GD5nFf)

:::

**稍微有些进阶，可以考虑后续有需要再研究。先熟悉 OpenClaw 的操作、逻辑之后接触。**

OpenClaw 支持在同一台机器上配置多个飞书机器人账户，实现：

- **账户隔离**：每个飞书机器人独立管理，互不干扰；
- **路由分发**：不同飞书机器人的消息路由到不同的 Agent（工作空间）；
- **灵活控制**：每个账户可以有不同的访问策略、技能权限等；

### 7.1 配置方式

1. **直接编辑配置文件**：配置文件路径：`~/.openclaw/openclaw.json`

2. 创建新的飞书机器人，用于关联到新的账号上。一键创建一个OpenClaw 机器人：[立即创建](https://open.feishu.cn/page/openclaw?form=multiAgent)

3. **完整示例**：

    ```json
    {
      // 定义多个 agent（隔离的工作空间和记忆）
      "agents": {
        "list": [
          {
            "id": "main",
            "name": "主助手",
            "default": true,
            "workspace": "~/.openclaw/workspace-main",
            "model":{
                "primary": "ark/doubao"
            }
          },
          {
            "id": "work",
            "name": "工作助手",
            "workspace": "~/.openclaw/workspace-work",
            "model":{
                "primary": "ark/deepseek"
            }
          },
          {
            "id": "support",
            "name": "客服助手",
            "workspace": "~/.openclaw/workspace-support",
            "model":{
                "primary": "ark/gpt"
            }
          }
        ]
      },
      
      // 配置会话隔离
      "session": {
        "dmScope": "per-account-channel-peer"
      },
      
      
      // 配置飞书多账户
      "channels": {
        "feishu": {
          "enabled": true,
          "threadSession": true,
          "replyMode": "auto",
          // 默认机器人配置，必须要有！！
          "appId": "cli_xxx",
          "appSecret": "xxx",
          
          "accounts": {
            "default": {},
            
            // 工作机器人1
            "work": {
              "appId": "cli_work_yyy",
              "appSecret": "work_secret_yyy",
              "botName": "工作机器人",
              "dmPolicy": "allowlist",
              "allowFrom": ["ou_5b990e213988b9bcf396f955a50b2a22", "ou_1234567890abcdef"],
            },
            
            // 机器人2
            "support": {
              "appId": "cli_support_zzz",
              "appSecret": "support_secret_zzz",
              "botName": "客服机器人",
              "dmPolicy": "open",
              "allowFrom": ["*"]
            }
          },
          
          // 群组配置
          "groups": {
            "*": { "requireMention": true },
            "oc_83e1c0d069b94efc09ad22e05bc06365": {
              "requireMention": false,
              "groupPolicy": "open"
            },
            "oc_dev_123456789": {
              "requireMention": false,
              "groupPolicy": "allowlist",
              "allowFrom": ["ou_dev_001", "ou_dev_002"],
            }
          },
          
          "groupPolicy": "allowlist",
          "groupAllowFrom": [
            "ou_user1",
            "ou_user2",
            "oc_chat1"
          ]
        }
      },
      
      // 路由绑定
      "bindings": [
        { "agentId": "main", "match": { "channel": "feishu", "accountId": "default" } },
        { "agentId": "work", "match": { "channel": "feishu", "accountId": "work" } },
        { "agentId": "support", "match": { "channel": "feishu", "accountId": "support" } },
        {
          "agentId": "work",
          "match": {
            "channel": "feishu",
            "peer": { "kind": "direct", "id": "ou_owner_user" }
          }
        },
        {
          "agentId": "support",
          "match": {
            "channel": "feishu",
            "peer": { "kind": "group", "id": "oc_support_group_123" }
          }
        }
      ]
    }
    ```

### 7.2 路由规则优先级

当收到飞书消息时，OpenClaw 按以下顺序匹配路由：

1. **精确匹配**：`peer.kind` + `peer.id`（特定用户/群组）
2. **父级匹配**：线程继承
3. **账户匹配**：`accountId`
4. **渠道匹配**：`channel` + `accountId: "*"`
5. **默认 Agent**：`agents.list[].default` 或第一个 agent；

### 7.3 常用命令

| 命令                       | 说明                 |
| :------------------------- | :------------------- |
| `openclaw channels list`   | 查看所有渠道账户状态 |
| `openclaw channels status` | 查看渠道状态         |
| `openclaw agents bindings` | 查看路由绑定         |
| `openclaw gateway status`  | 查看 Gateway 状态    |
| `openclaw logs --follow`   | 查看日志             |

### 7.4 ID 格式参考

| 类型         | 格式      | 示例                                  |
| :----------- | :-------- | :------------------------------------ |
| App ID       | `cli_xxx` | `cli_a1b2c3d4e5f6g7h8`                |
| 用户 Open ID | `ou_xxx`  | `ou_5b990e213988b9bcf396f955a50b2a22` |
| 群组 Chat ID | `oc_xxx`  | `oc_83e1c0d069b94efc09ad22e05bc06365` |

### 7.5 获取 ID 的方法

**群组 ID（`chat_id`）**：

1. 启动 Gateway，在群里 `@机器人`
2. 运行 `openclaw logs --follow` 查看 `chat_id`

**用户 ID（`open_id`）**：

1. 启动 Gateway，私聊机器人
2. 运行 `openclaw logs --follow` 查看 `open_id`

### 7.6 dmPolicy 参考

| 值            | 行为                                            |
| :------------ | :---------------------------------------------- |
| `"pairing"`   | **默认**。未知用户收到配对码，需要管理员批准    |
| `"allowlist"` | 只有 `allowFrom` 中的用户可以聊天               |
| `"open"`      | 允许所有用户（需要在 `allowFrom` 中添加 `"*"`） |
| `"disabled"`  | 禁用私聊                                        |

### 7.7 多账号会话隔离（dmScope）

| 值                       | 隔离粒度                     | 行为                                                         |
| :----------------------- | :--------------------------- | :----------------------------------------------------------- |
| main                     | 最粗粒度                     | 所有私聊共用一个会话                                         |
| per-peer                 | 按用户粒度                   | 同一用户跨不同 channel 共享会话                              |
| per-channel-peer         | 按 channel + 用户 粒度       | 不同 channel 的同一用户各自独立，但同 channel 下多账号仍共享 |
| per-account-channel-peer | 按账号 + channel + 用户 粒度 | 多账号推荐，每个机器人与每个用户的会话完全独立。             |

按账号 + channel + 用户 粒度设置隔离的快捷指令：

```bash
openclaw config set session.dmScope "per-account-channel-peer"
```

【注意】：仅设置 `session.dmScope` 不够——还需通过 agents + bindings 将不同账号绑定到不同 agent，才能实现记忆完全隔离

### 7.8 故障排查

```bash
# 检查配置问题
openclaw doctor

# 自动修复配置问题
openclaw doctor --fix

# 查看详细状态
openclaw status --deep

# 查看日志
openclaw logs --follow
```

**原文参考：[https://bytedance.larkoffice.com/docx/WNNXdhKxmo8KDJxMM9dc0GD5nFf?from=from_copylink](https://bytedance.larkoffice.com/docx/WNNXdhKxmo8KDJxMM9dc0GD5nFf?from=from_copylink)**

## 8. 如何集成飞书项目 Meego 读写能力

参考文档：[OpenClaw x 飞书项目集成实践](https://project.feishu.cn/b/helpcenter/1ykiuvvj/1n3ae9b4)

小白可以等我研究，发布教程。

## 9. 插件问题

![](https://blog.images.bornforthis.cn/docs-images/sha256/c9/c93e71d23af7e952bc3ddad6fa8cf63906fe48c0d072592f1b39069f7e963069.png)





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