# Vercel 静态站点全套防护操作手册

> 适用场景：静态站点、博客、文档站、VuePress/VitePress 等部署到 Vercel。  
> 目标：快速开启 Attack Mode、Bot Protection、AI Bots 拦截、全站限流（排除 `/assets/`），并通过 GitHub Actions 定时续期 24 小时 Attack Mode。  
> 本文命令按照实际验证过的 Vercel CLI 59.3.0 操作流程整理，后续新项目可直接复制使用。

---

## 一、最终防护目标

启用后，目标结构如下：

```text
访问者
  ↓
Vercel Attack Mode
  ↓
Bot Protection
  ↓
AI Bots → Deny
  ↓
自定义 Rate Limit
  ├─ /assets      → 不限流
  ├─ /assets/*    → 不限流
  └─ 其它所有路径 → 120 次 / 60 秒 / IP
                    超过后 Deny
```

同时：

```text
GitHub Actions
每 12 小时执行一次
  ↓
重新开启 24h Attack Mode
  ↓
实现长期保持 Attack Mode
```

---

## 二、准备工作

### 1. 安装 / 更新 Vercel CLI

```bash
npm install -g vercel@latest
```

检查版本：

```bash
vercel --version
```

### 2. 登录 Vercel

```bash
vercel login
```

### 3. 链接当前项目

进入项目根目录：

```bash
cd /你的/项目目录
```

执行：

```bash
vercel link
```

选择正确的 Vercel Team / Scope 和 Project。

成功后通常会看到：

```text
✓ Linked your-team/your-project
```

---

## 三、读取当前项目的 PROJECT_ID / TEAM_ID

新版 Vercel CLI 可能生成：

```text
.vercel/repo.json
```

而不是旧教程常见的：

```text
.vercel/project.json
```

先确认：

```bash
ls -la .vercel
```

如果存在：

```text
.vercel/repo.json
```

执行：

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
PROJECT_ID=prj_xxxxxxxxxxxxxxxxx
TEAM_ID=team_xxxxxxxxxxxxxxxxx
PROJECT_NAME=my-project
```

---

## 四、检查当前 Firewall 配置

推荐直接查询 Firewall API：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

如果成功，会返回 JSON。

Hobby 计划下执行：

```bash
vercel firewall overview
```

可能出现：

```text
Error: IP Bypass is unavailable for this plan. (404)
```

这不代表 Firewall 失效。建议优先使用 `/v1/security/firewall/config` API 查看真实配置。

---

## 五、开启 Attack Mode 24 小时

```bash
vercel firewall attack-mode enable --duration 24h --yes
```

正常输出：

```text
Success! Attack mode enabled for 24h
```

Attack Mode 会对浏览器访问执行 Vercel Security Checkpoint。正常访客首次访问时可能看到浏览器验证页面，这是正常现象。

关闭 Attack Mode：

```bash
vercel firewall attack-mode disable --yes
```

---

## 六、开启 Bot Protection

创建配置文件：

```bash
cat >/tmp/vercel-bot-protection.json <<'EOF'
{
  "action": "managedRules.update",
  "id": "bot_protection",
  "value": {
    "active": true,
    "action": "challenge"
  }
}
EOF
```

执行：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"   -X PATCH   --input /tmp/vercel-bot-protection.json
```

正常情况下可能只返回：

```json
{}
```

这是成功。

关闭 Bot Protection：

```bash
cat >/tmp/vercel-bot-protection-off.json <<'EOF'
{
  "action": "managedRules.update",
  "id": "bot_protection",
  "value": {
    "active": false,
    "action": "log"
  }
}
EOF
```

执行：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"   -X PATCH   --input /tmp/vercel-bot-protection-off.json
```

---

## 七、开启 AI Bots 拦截

创建配置文件：

```bash
cat >/tmp/vercel-ai-bots.json <<'EOF'
{
  "action": "managedRules.update",
  "id": "ai_bots",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF
```

执行：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"   -X PATCH   --input /tmp/vercel-ai-bots.json
```

---

## 八、配置“全站限流，排除 assets”

目标：

```text
/assets
/assets/*
```

不做 Rate Limit。

其它所有路径全部进入限流。

推荐初始值：

```text
120 次 / 60 秒 / IP
```

### 方案 A：第一次创建规则

如果当前项目还没有 `anti-crawler`：

```bash
vercel firewall rules add "anti-crawler"   --condition '{"type":"path","op":"eq","value":"/assets","neg":true}'   --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}'   --action rate_limit   --rate-limit-window 60   --rate-limit-requests 120   --rate-limit-keys ip   --rate-limit-action deny   --yes
```

含义：

```text
Path != /assets
AND
Path 不以 /assets/ 开头
```

也就是：

```text
/assets                → 不限流
/assets/app.js         → 不限流
/assets/style.css      → 不限流
/assets/images/a.webp  → 不限流

/                      → 限流
/blog/...              → 限流
/api/...               → 限流
/column/...            → 限流
/1v1/...               → 限流
其它任何路径           → 限流
```

### 方案 B：已经存在 anti-crawler 时修改

```bash
vercel firewall rules edit "anti-crawler"   --condition '{"type":"path","op":"eq","value":"/assets","neg":true}'   --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}'   --action rate_limit   --rate-limit-window 60   --rate-limit-requests 120   --rate-limit-keys ip   --rate-limit-action deny   --yes
```

---

## 九、检查并发布 Firewall 修改

```bash
vercel firewall diff
```

查看完整规则：

```bash
vercel firewall rules list --expand
```

确认无误后发布：

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

说明已经正式上线。

---

## 十、最终检查整个 Firewall

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

重点检查：

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

Rate Limit：

```json
{
  "name": "anti-crawler",
  "active": true,
  "valid": true
}
```

如果：

```json
"draft": null
```

说明当前没有未发布的 Firewall 修改。

---

## 十一、一次性快速执行版

以后新项目完成：

```bash
vercel login
vercel link
```

后可以直接执行：

```bash
PROJECT_ID=$(node -p "require('./.vercel/repo.json').projects[0].id")
TEAM_ID=$(node -p "require('./.vercel/repo.json').projects[0].orgId")
PROJECT_NAME=$(node -p "require('./.vercel/repo.json').projects[0].name")

echo "PROJECT_ID=$PROJECT_ID"
echo "TEAM_ID=$TEAM_ID"
echo "PROJECT_NAME=$PROJECT_NAME"

vercel firewall attack-mode enable --duration 24h --yes

cat >/tmp/vercel-bot-protection.json <<'EOF'
{
  "action": "managedRules.update",
  "id": "bot_protection",
  "value": {
    "active": true,
    "action": "challenge"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"   -X PATCH   --input /tmp/vercel-bot-protection.json

cat >/tmp/vercel-ai-bots.json <<'EOF'
{
  "action": "managedRules.update",
  "id": "ai_bots",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"   -X PATCH   --input /tmp/vercel-ai-bots.json

vercel firewall rules add "anti-crawler"   --condition '{"type":"path","op":"eq","value":"/assets","neg":true}'   --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}'   --action rate_limit   --rate-limit-window 60   --rate-limit-requests 120   --rate-limit-keys ip   --rate-limit-action deny   --yes

vercel firewall diff
vercel firewall rules list --expand
vercel firewall publish --yes

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

如果已经存在 `anti-crawler`，把上面的：

```bash
vercel firewall rules add "anti-crawler"
```

改为：

```bash
vercel firewall rules edit "anti-crawler"
```

---

## 十二、让 Attack Mode 长期开启

Vercel CLI 当前 Attack Mode 单次最长：

```text
24h
```

要长期保持，使用 GitHub Actions 定时续期。

推荐：

```text
每 12 小时重新设置一次 24h
```

这样有 12 小时冗余。

---

## 十三、准备 Vercel Token

进入 Vercel 创建 Personal Access Token。

将以下三个 Secret 添加到 GitHub 仓库：

```text
GitHub Repository
→ Settings
→ Secrets and variables
→ Actions
→ New repository secret
```

添加：

```text
VERCEL_TOKEN
VERCEL_PROJECT_ID
VERCEL_TEAM_ID
```

其中：

```text
VERCEL_PROJECT_ID = prj_xxx
VERCEL_TEAM_ID    = team_xxx
```

---

## 十四、GitHub Actions：每 12 小时续 24h Attack Mode

创建：

```text
.github/workflows/vercel-attack-mode.yml
```

内容：

```yaml
name: Keep Vercel Attack Mode Enabled

on:
  schedule:
    - cron: "0 */12 * * *"

  workflow_dispatch:

jobs:
  keep-attack-mode-enabled:
    runs-on: ubuntu-latest

    steps:
      - name: Keep Vercel Attack Mode Enabled
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
          VERCEL_TEAM_ID: ${{ secrets.VERCEL_TEAM_ID }}
        run: |
          ACTIVE_UNTIL=$(($(date +%s%3N) + 86400000))

          curl --fail-with-body             --request POST             "https://api.vercel.com/v1/security/attack-mode?teamId=${VERCEL_TEAM_ID}"             --header "Authorization: Bearer ${VERCEL_TOKEN}"             --header "Content-Type: application/json"             --data "{
              \"projectId\": \"${VERCEL_PROJECT_ID}\",
              \"attackModeEnabled\": true,
              \"attackModeActiveUntil\": ${ACTIVE_UNTIL}
            }"
```

提交：

```bash
git add .github/workflows/vercel-attack-mode.yml
git commit -m "chore: keep vercel attack mode enabled"
git push
```

---

## 十五、测试 GitHub Actions

进入：

```text
GitHub
→ Actions
→ Keep Vercel Attack Mode Enabled
→ Run workflow
```

手动执行一次。

---

## 十六、非常重要：Vercel Production Branch

如果部署结构是：

```text
main
 ↓
GitHub Actions 构建
 ↓
gh-pages
 ↓
Vercel Production
```

一定进入：

```text
Vercel
→ Project
→ Settings
→ Git
→ Production Branch
```

明确设置：

```text
gh-pages
```

GitHub Default Branch 与 Vercel Production Branch 是两套独立配置。

如果 Vercel Production Branch 仍然是 `main`，那么：

```bash
git push origin main
```

可能直接触发一个新的 Production Deployment，导致线上 `gh-pages` 构建产物被覆盖。

---

## 十七、可选：禁止 main 自动触发 Vercel Deployment

项目根目录增加：

```text
vercel.json
```

内容：

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

---

## 十八、常用维护命令

查看规则：

```bash
vercel firewall rules list --expand
```

查看待发布修改：

```bash
vercel firewall diff
```

发布 Firewall：

```bash
vercel firewall publish --yes
```

丢弃 Draft：

```bash
vercel firewall discard --yes
```

开 Attack Mode 24h：

```bash
vercel firewall attack-mode enable --duration 24h --yes
```

关 Attack Mode：

```bash
vercel firewall attack-mode disable --yes
```

查看 Firewall API 配置：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

---

## 十九、排障：网站突然打不开

### 1. 检查 HTTP 状态

```bash
curl -I https://你的域名/
```

常见状态：

```text
200 / 301 / 308 → 网站/重定向基本正常
403             → 防火墙 / Challenge / 权限
429             → Rate Limit
404             → 页面或当前 Deployment 路由不存在
```

### 2. 检查当前生产部署分支

如果突然出现：

```text
404: NOT_FOUND
```

尤其是在：

```bash
git push origin main
```

之后，应优先检查 Vercel Production Branch 是否被 `main` 的自动 Deployment 替换。

### 3. 临时关闭 Attack Mode

```bash
vercel firewall attack-mode disable --yes
```

### 4. 临时关闭 anti-crawler

```bash
vercel firewall rules disable "anti-crawler"
vercel firewall publish --yes
```

恢复：

```bash
vercel firewall rules enable "anti-crawler"
vercel firewall publish --yes
```

### 5. 不要给 /assets/* 做严格限流

现代静态站打开一个页面时可能同时请求大量：

```text
JS
CSS
字体
图片
模块 chunks
```

因此 `/assets/*` 应排除在当前低阈值 IP Rate Limit 之外。

---

## 二十、推荐长期配置

```text
Attack Mode
✅ 每 12h 自动续 24h

Bot Protection
✅ challenge

AI Bots
✅ deny

Rate Limit
✅ 除 /assets 和 /assets/* 外全部路径

Rate Limit 阈值
✅ 120 / 60s / IP
```

如果未来正常用户被 429 / Deny，可调整：

```text
120 → 180 → 300
```

例如改为 180：

```bash
vercel firewall rules edit "anti-crawler"   --condition '{"type":"path","op":"eq","value":"/assets","neg":true}'   --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}'   --action rate_limit   --rate-limit-window 60   --rate-limit-requests 180   --rate-limit-keys ip   --rate-limit-action deny   --yes

vercel firewall publish --yes
```

---

## 二十一、新项目最短执行清单

```bash
# 1. 登录 + 绑定
vercel login
vercel link

# 2. 读取 ID
PROJECT_ID=$(node -p "require('./.vercel/repo.json').projects[0].id")
TEAM_ID=$(node -p "require('./.vercel/repo.json').projects[0].orgId")

# 3. Attack Mode
vercel firewall attack-mode enable --duration 24h --yes

# 4. Bot Protection
cat >/tmp/vercel-bot-protection.json <<'EOF'
{
  "action": "managedRules.update",
  "id": "bot_protection",
  "value": {
    "active": true,
    "action": "challenge"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"   -X PATCH   --input /tmp/vercel-bot-protection.json

# 5. AI Bots
cat >/tmp/vercel-ai-bots.json <<'EOF'
{
  "action": "managedRules.update",
  "id": "ai_bots",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"   -X PATCH   --input /tmp/vercel-ai-bots.json

# 6. 全站限流，排除 assets
vercel firewall rules add "anti-crawler"   --condition '{"type":"path","op":"eq","value":"/assets","neg":true}'   --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}'   --action rate_limit   --rate-limit-window 60   --rate-limit-requests 120   --rate-limit-keys ip   --rate-limit-action deny   --yes

# 7. 检查 + 发布
vercel firewall diff
vercel firewall rules list --expand
vercel firewall publish --yes

# 8. 最终检查
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

然后配置 GitHub Actions 每 12 小时续一次 24h Attack Mode。

---

## 二十二、最终原则

```text
1. Attack Mode 用于最外层浏览器 Challenge
2. Bot Protection 挑战可疑 Bot
3. AI Bots 直接 Deny
4. 除 /assets/* 外全站 IP Rate Limit
5. 不要给 assets 设置过低 Rate Limit
6. Firewall Rule 修改后记得 publish
7. Hobby 下 firewall overview 404 不代表 Firewall 无效
8. 新版 CLI 优先检查 .vercel/repo.json
9. GitHub Default Branch ≠ Vercel Production Branch
10. 404: NOT_FOUND 优先检查 Deployment，而不是先怀疑 Firewall
11. Attack Mode 单次最长 24h，用 GitHub Actions 定时续期
```
