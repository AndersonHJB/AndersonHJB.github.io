# Vercel 静态站全套防护操作手册

> 适用场景：Vercel 静态站 / Hobby 项目，希望长期启用 Attack Mode、Bot Protection、AI Bots 拦截，并对除 `/assets` 外的所有路径做 IP 限流。
>
> 本文按实际验证通过的 Vercel CLI 59.3.0 操作整理，后续新项目可以直接照着执行。

---

## 0. 当前这次操作是否有问题？

你刚刚这组操作是**正确的，并且已经生效**。

最终配置已经明确显示：

```json
"firewallEnabled": true
```

Bot Protection：

```json
"bot_protection": {
  "active": true,
  "action": "challenge"
}
```

AI Bots：

```json
"ai_bots": {
  "active": true,
  "action": "deny"
}
```

限流规则：

```text
除 /assets 和 /assets/* 外
所有路径：

120 requests / 60 seconds / IP
超过 → deny
```

并且：

```json
"active": true,
"valid": true,
"validationErrors": null
```

说明 `anti-crawler` 规则有效。

`draft: null` 说明当前没有未发布的草稿配置，看到的就是线上生效配置。

唯一需要额外确认的是：**Attack Mode 本身需要另外执行开启命令**，它不会出现在上面这段普通 Firewall Config 的 `managedRules` 中。

---

# 1. 最终防护目标

推荐长期保持：

```text
Internet
   │
   ▼
Attack Mode
   │
   ├── 浏览器流量 → Vercel Challenge
   │
   └── 已知合法 Bot → Vercel 按自身规则处理
   │
   ▼
Bot Protection
   │
   └── 可疑 Bot → Challenge
   │
   ▼
AI Bots
   │
   └── AI Bot → Deny
   │
   ▼
anti-crawler
   │
   ├── /assets
   │       └── 不限流
   │
   ├── /assets/*
   │       └── 不限流
   │
   └── 其他全部路径
           │
           └── 120 req / 60s / IP
                    │
                    └── 超过 → Deny
```

---

# 2. 安装 / 更新 Vercel CLI

建议始终使用最新版：

```bash
npm install -g vercel@latest
```

检查版本：

```bash
vercel --version
```

检查当前登录账号：

```bash
vercel whoami
```

如果账号不对：

```bash
vercel logout
vercel login
```

---

# 3. 将本地项目连接到正确的 Vercel 项目

进入项目根目录：

```bash
cd /你的/项目目录
```

然后：

```bash
vercel link
```

按照提示选择：

```text
Team
Project
```

连接成功后，当前版本的 Vercel CLI 会生成：

```text
.vercel/repo.json
```

检查：

```bash
cat .vercel/repo.json
```

结构类似：

```json
{
  "remoteName": "origin",
  "projects": [
    {
      "id": "prj_xxxxxxxxx",
      "name": "your-project",
      "directory": ".",
      "orgId": "team_xxxxxxxxx"
    }
  ]
}
```

---

# 4. 自动读取 PROJECT_ID / TEAM_ID

每次打开一个新的终端，都可以先执行：

```bash
PROJECT_ID=$(node -p "require('./.vercel/repo.json').projects[0].id")
TEAM_ID=$(node -p "require('./.vercel/repo.json').projects[0].orgId")
PROJECT_NAME=$(node -p "require('./.vercel/repo.json').projects[0].name")

echo "PROJECT_ID=$PROJECT_ID"
echo "TEAM_ID=$TEAM_ID"
echo "PROJECT_NAME=$PROJECT_NAME"
```

正常输出类似：

```text
PROJECT_ID=prj_xxxxxxxxx
TEAM_ID=team_xxxxxxxxx
PROJECT_NAME=your-project
```

以后下面所有 API 命令都依赖：

```bash
$PROJECT_ID
$TEAM_ID
```

---

# 5. 开启 Attack Mode 24 小时

执行：

```bash
vercel firewall attack-mode enable --duration 24h --yes
```

正常：

```text
Success! Attack mode enabled for 24h
```

Vercel CLI 当前单次 Attack Mode 最长为：

```text
24h
```

因此如果希望长期保持开启，需要定时续期。本文后面提供 GitHub Actions 自动续期方案。

临时关闭：

```bash
vercel firewall attack-mode disable --yes
```

---

# 6. 开启 Bot Protection

创建临时配置：

```bash
cat >/tmp/vercel-bot-protection.json <<'EOF2'
{
  "action": "managedRules.update",
  "id": "bot_protection",
  "value": {
    "active": true,
    "action": "challenge"
  }
}
EOF2
```

应用：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-bot-protection.json
```

如果返回：

```json
{}
```

不要认为失败。

继续通过 GET 检查最终状态即可。

---

# 7. 开启 AI Bots Deny

创建：

```bash
cat >/tmp/vercel-ai-bots.json <<'EOF2'
{
  "action": "managedRules.update",
  "id": "ai_bots",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF2
```

执行：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-ai-bots.json
```

同样，如果返回：

```json
{}
```

属于正常情况。

---

# 8. 全站限流，但排除 `/assets`

目标：

```text
/assets
/assets/*
```

不执行限流。

其他全部路径：

```text
120 次 / 60 秒 / IP
```

超过直接：

```text
deny
```

## 8.1 新项目第一次创建规则

如果项目里还没有 `anti-crawler`：

```bash
vercel firewall rules add "anti-crawler" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-action deny \
  --yes
```

这里两个条件属于 AND：

```text
path != /assets
AND
path does not start with /assets/
```

因此最终效果就是：

```text
/assets              → 不限流
/assets/app.js       → 不限流
/assets/style.css    → 不限流
/assets/img/a.webp   → 不限流

/                    → 限流
/blog/               → 限流
/column/             → 限流
/1v1/                → 限流
/api/                → 限流
/robots.txt          → 限流
/sitemap.xml         → 限流
/favicon.ico         → 限流
/任何其他路径         → 限流
```

---

## 8.2 已经存在 `anti-crawler` 时修改

如果已有同名规则：

```bash
vercel firewall rules edit "anti-crawler" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-action deny \
  --yes
```

注意：

```text
rules edit
```

会替换原来的条件。

例如原来：

```text
/blog/
/api/
/column/
/1v1/
```

会被替换成：

```text
全站
排除 /assets
```

这是预期行为。

---

# 9. 发布 Firewall 修改

Firewall Custom Rule 修改后默认先进入 staged 状态。

查看差异：

```bash
vercel firewall diff
```

查看规则：

```bash
vercel firewall rules list --expand
```

确认没有问题后发布：

```bash
vercel firewall publish --yes
```

再次检查：

```bash
vercel firewall rules list --expand
```

看到：

```text
Showing live configuration.
```

表示线上已经生效。

---

# 10. 检查完整 Firewall 配置

推荐不要只依赖：

```bash
vercel firewall overview
```

部分 Hobby 项目可能因为 IP Bypass 等套餐能力出现：

```text
Error: IP Bypass is unavailable for this plan. (404)
```

这种情况下，直接查询 Firewall API：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

应该重点检查：

```json
"firewallEnabled": true
```

以及：

```json
"managedRules": {
  "ai_bots": {
    "active": true,
    "action": "deny"
  },
  "bot_protection": {
    "active": true,
    "action": "challenge"
  }
}
```

以及：

```json
{
  "name": "anti-crawler",
  "active": true,
  "valid": true
}
```

Rate Limit 应该为：

```json
"rateLimit": {
  "limit": 120,
  "action": "deny",
  "window": 60,
  "algo": "fixed_window",
  "keys": [
    "ip"
  ]
}
```

最后：

```json
"draft": null
```

表示当前没有未发布修改。

---

# 11. Attack Mode 长期开启：GitHub Actions 自动续 24 小时

Attack Mode 单次最长只有：

```text
24h
```

因此推荐：

```text
每 12 小时续一次
每次续 24 小时
```

即使 GitHub Actions 某次任务稍微延迟，也仍有较大安全余量。

---

## 11.1 创建 Vercel Token

在 Vercel 创建 Access Token。

不要把 Token 写入仓库代码。

保存为 GitHub Actions Secret：

```text
VERCEL_TOKEN
```

---

## 11.2 保存 PROJECT_ID 和 TEAM_ID

当前本地先查看：

```bash
echo "$PROJECT_ID"
echo "$TEAM_ID"
```

在 GitHub 仓库：

```text
Settings
→ Secrets and variables
→ Actions
```

建议创建两个 Repository Variables：

```text
VERCEL_PROJECT_ID
VERCEL_TEAM_ID
```

对应值分别是：

```text
prj_xxxxxxxxx
team_xxxxxxxxx
```

Token 使用 Secret：

```text
VERCEL_TOKEN
```

---

## 11.3 创建 GitHub Actions Workflow

文件：

```text
.github/workflows/vercel-attack-mode.yml
```

内容：

```yaml
name: Keep Vercel Attack Mode Enabled

on:
  schedule:
    # 每 12 小时自动执行一次
    # GitHub Actions cron 使用 UTC
    - cron: "0 */12 * * *"

  # 支持在 GitHub Actions 页面手动执行
  workflow_dispatch:

jobs:
  keep-attack-mode-enabled:
    runs-on: ubuntu-latest

    steps:
      - name: Renew Vercel Attack Mode for 24 hours
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_PROJECT_ID: ${{ vars.VERCEL_PROJECT_ID }}
          VERCEL_TEAM_ID: ${{ vars.VERCEL_TEAM_ID }}
        run: |
          set -euo pipefail

          # 当前时间 + 24 小时，单位毫秒
          ACTIVE_UNTIL=$(node -e 'console.log(Date.now() + 24 * 60 * 60 * 1000)')

          echo "Renewing Attack Mode..."
          echo "Project: ${VERCEL_PROJECT_ID}"
          echo "Active until: ${ACTIVE_UNTIL}"

          curl --fail-with-body \
            --request POST \
            "https://api.vercel.com/v1/security/attack-mode?teamId=${VERCEL_TEAM_ID}" \
            --header "Authorization: Bearer ${VERCEL_TOKEN}" \
            --header "Content-Type: application/json" \
            --data "{
              \"projectId\": \"${VERCEL_PROJECT_ID}\",
              \"attackModeEnabled\": true,
              \"attackModeActiveUntil\": ${ACTIVE_UNTIL}
            }"

          echo
          echo "Attack Mode renewed for another 24 hours."
```

提交：

```bash
git add .github/workflows/vercel-attack-mode.yml
git commit -m "chore: keep Vercel Attack Mode enabled"
git push
```

以后 GitHub Actions 会：

```text
每 12 小时
    ↓
重新设置 Attack Mode
    ↓
有效期延长 24 小时
```

---

# 12. 第一次配置后的手动检查

Attack Mode：

```bash
vercel firewall attack-mode enable --duration 24h --yes
```

Firewall Rule：

```bash
vercel firewall rules list --expand
```

完整 API：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

正常目标：

```text
Attack Mode       → Enabled
Bot Protection    → challenge
AI Bots           → deny
anti-crawler      → Enabled
Rate Limit        → 120 / 60s / IP
/assets           → excluded
draft             → null
```

---

# 13. 新项目完整复制执行版

进入新项目目录后，从头执行：

```bash
# -----------------------------------------
# 1. 登录并连接项目
# -----------------------------------------

vercel login
vercel link


# -----------------------------------------
# 2. 获取项目 ID
# -----------------------------------------

PROJECT_ID=$(node -p "require('./.vercel/repo.json').projects[0].id")
TEAM_ID=$(node -p "require('./.vercel/repo.json').projects[0].orgId")
PROJECT_NAME=$(node -p "require('./.vercel/repo.json').projects[0].name")

echo "PROJECT_ID=$PROJECT_ID"
echo "TEAM_ID=$TEAM_ID"
echo "PROJECT_NAME=$PROJECT_NAME"


# -----------------------------------------
# 3. Attack Mode 24h
# -----------------------------------------

vercel firewall attack-mode enable --duration 24h --yes


# -----------------------------------------
# 4. Bot Protection
# -----------------------------------------

cat >/tmp/vercel-bot-protection.json <<'EOF2'
{
  "action": "managedRules.update",
  "id": "bot_protection",
  "value": {
    "active": true,
    "action": "challenge"
  }
}
EOF2

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-bot-protection.json


# -----------------------------------------
# 5. AI Bots Deny
# -----------------------------------------

cat >/tmp/vercel-ai-bots.json <<'EOF2'
{
  "action": "managedRules.update",
  "id": "ai_bots",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF2

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-ai-bots.json


# -----------------------------------------
# 6. 创建全站限流规则
#    排除 /assets
# -----------------------------------------

vercel firewall rules add "anti-crawler" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-action deny \
  --yes


# -----------------------------------------
# 7. 检查
# -----------------------------------------

vercel firewall diff
vercel firewall rules list --expand


# -----------------------------------------
# 8. 发布
# -----------------------------------------

vercel firewall publish --yes


# -----------------------------------------
# 9. 最终确认
# -----------------------------------------

vercel firewall rules list --expand

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

---

# 14. 已存在 `anti-crawler` 的项目完整更新版

如果已经有规则，不要再 `add`：

```bash
vercel firewall rules edit "anti-crawler" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-action deny \
  --yes

vercel firewall diff

vercel firewall rules list --expand

vercel firewall publish --yes

vercel firewall rules list --expand
```

---

# 15. 紧急关闭 / 回滚

## 15.1 关闭 Attack Mode

```bash
vercel firewall attack-mode disable --yes
```

---

## 15.2 临时关闭 Rate Limit

```bash
vercel firewall rules disable "anti-crawler"
```

然后：

```bash
vercel firewall diff
vercel firewall publish --yes
```

重新启用：

```bash
vercel firewall rules enable "anti-crawler"
vercel firewall publish --yes
```

---

## 15.3 关闭 Bot Protection

```bash
cat >/tmp/vercel-bot-protection-off.json <<'EOF2'
{
  "action": "managedRules.update",
  "id": "bot_protection",
  "value": {
    "active": false,
    "action": "log"
  }
}
EOF2

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-bot-protection-off.json
```

---

## 15.4 关闭 AI Bots

```bash
cat >/tmp/vercel-ai-bots-off.json <<'EOF2'
{
  "action": "managedRules.update",
  "id": "ai_bots",
  "value": {
    "active": false,
    "action": "log"
  }
}
EOF2

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-ai-bots-off.json
```

---

# 16. 系统级防护临时排查

如果怀疑 Vercel System Mitigations 误伤，只用于排障：

```bash
vercel firewall system-mitigations pause --yes
```

这个操作会临时暂停系统级自动 DDoS / 流量过滤。

排障结束后恢复：

```bash
vercel firewall system-mitigations resume --yes
```

不要长期暂停。

---

# 17. 防止 Git 分支误部署

Firewall 和部署是两个完全不同的问题。

如果：

```text
Production Branch = gh-pages
```

但 Vercel 又因为 `main` Push 自动创建了错误的生产部署，就可能导致：

```text
404: NOT_FOUND
```

这不是 Firewall 拦截。

应确保 Vercel：

```text
Settings
→ Git
→ Production Branch
```

指向真正用于生产部署的分支。

例如：

```text
gh-pages
```

如果 `main` 永远不应该触发 Vercel 自动部署，可以在项目根目录添加：

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": {
      "main": false
    }
  }
}
```

这样：

```text
push main
```

不会再触发该分支的 Vercel Git Deployment。

---

# 18. 常见现象判断

### `{}`

执行 Managed Rules PATCH 后返回：

```json
{}
```

不一定是失败。

继续 GET：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

以最终配置为准。

---

### `Showing live configuration.`

表示当前 Custom Firewall Rule 已经发布到线上。

---

### `1 unpublished rule change`

表示：

```text
只修改了 Draft
还没发布
```

必须执行：

```bash
vercel firewall publish --yes
```

---

### `404: NOT_FOUND`

优先排查：

```text
Vercel Deployment
Production Branch
构建产物
路由
```

不要第一时间认为是 Rate Limit。

---

### “正在验证您的浏览器”

长期开启 Attack Mode 时，正常浏览器可能看到 Vercel Security Checkpoint。

这是 Attack Mode 的正常行为。

---

### `IP Bypass is unavailable for this plan. (404)`

可能来自：

```bash
vercel firewall overview
```

在 Hobby 套餐下，不代表 Firewall 本身失效。

直接使用：

```bash
vercel firewall rules list --expand
```

以及：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

检查最可靠。

---

# 19. 推荐的长期配置

```text
Attack Mode
    ✅ Enabled
    ✅ GitHub Actions 每 12h 续 24h

Bot Protection
    ✅ active
    ✅ challenge

AI Bots
    ✅ active
    ✅ deny

Custom Rate Limit
    ✅ anti-crawler
    ✅ 120 req / 60s / IP
    ✅ fixed_window
    ✅ exceeded → deny

/assets
    ✅ 排除 Rate Limit

其他全部路径
    ✅ Rate Limit
```

---

# 20. 最常用命令速查

查看规则：

```bash
vercel firewall rules list --expand
```

查看未发布修改：

```bash
vercel firewall diff
```

发布：

```bash
vercel firewall publish --yes
```

丢弃未发布修改：

```bash
vercel firewall discard --yes
```

手动续 Attack Mode 24h：

```bash
vercel firewall attack-mode enable --duration 24h --yes
```

关闭 Attack Mode：

```bash
vercel firewall attack-mode disable --yes
```

查询完整配置：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

---

## 最终原则

对于这种纯静态站、防爬优先的项目，可以固定采用：

```text
Attack Mode 长期开启
+
Bot Protection Challenge
+
AI Bots Deny
+
除 /assets 外全站 120/60s/IP
```

每个新 Vercel 项目只需要：

```text
vercel link
→ 自动获取 PROJECT_ID / TEAM_ID
→ 执行本文配置
→ 配 GitHub Actions 自动续 Attack Mode
```

即可完成整套防护。
