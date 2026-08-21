# Vercel 静态站点全套防护操作手册

> 适用：静态站、博客、文档站、VuePress、VitePress 等 Vercel 项目。  
> 目标：以后换任何项目，只需 `vercel login` + `vercel link`，即可复制命令或运行一键脚本完成防护。  
> 本教程按实际操作验证流程整理：Vercel CLI 59.3.0，并兼容新版 `.vercel/repo.json` 项目绑定文件。

---

## 一、最终防护结构

推荐长期配置：

```text
访问者
  ↓
Attack Mode
  └─ 长期开启；单次 24h，通过 GitHub Actions 每 12h 自动续期
  ↓
Bot Protection
  └─ challenge
  ↓
AI Bots
  └─ deny
  ↓
自定义 Rate Limit
  ├─ 可选：全站所有文件、文件夹
  ├─ 可选：全站但排除 /assets/*
  └─ 可选：只限制指定文件夹
```

推荐默认限流：

```text
120 次 / 60 秒 / IP
超过后：deny
```

---

## 二、安装 / 更新 Vercel CLI

```bash
npm install -g vercel@latest
```

检查：

```bash
vercel --version
```

---

## 三、登录并绑定项目

登录：

```bash
vercel login
```

进入项目根目录：

```bash
cd /你的/项目目录
```

绑定：

```bash
vercel link
```

选择正确的 Vercel Scope / Team 和 Project。

正常会看到：

```text
✓ Linked your-team/your-project
```

---

## 四、读取 PROJECT_ID / TEAM_ID

新版 Vercel CLI 实际可能生成：

```text
.vercel/repo.json
```

先看：

```bash
ls -la .vercel
```

如果存在 `.vercel/repo.json`：

```bash
PROJECT_ID=$(node -p "require('./.vercel/repo.json').projects[0].id")
TEAM_ID=$(node -p "require('./.vercel/repo.json').projects[0].orgId")
PROJECT_NAME=$(node -p "require('./.vercel/repo.json').projects[0].name")

echo "PROJECT_ID=$PROJECT_ID"
echo "TEAM_ID=$TEAM_ID"
echo "PROJECT_NAME=$PROJECT_NAME"
```

输出类似：

```text
PROJECT_ID=prj_xxxxxxxxx
TEAM_ID=team_xxxxxxxxx
PROJECT_NAME=my-project
```

如果旧项目使用 `.vercel/project.json`：

```bash
PROJECT_ID=$(node -p "require('./.vercel/project.json').projectId")
TEAM_ID=$(node -p "require('./.vercel/project.json').orgId")

echo "PROJECT_ID=$PROJECT_ID"
echo "TEAM_ID=$TEAM_ID"
```

---

## 五、查看 Firewall 当前真实配置

推荐直接使用 API：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

Hobby 项目执行：

```bash
vercel firewall overview
```

可能报：

```text
Error: IP Bypass is unavailable for this plan. (404)
```

这个错误不代表 Firewall 没有生效。以后优先看上面的 Firewall Config API。

---

## 六、开启 Attack Mode 24h

```bash
vercel firewall attack-mode enable --duration 24h --yes
```

正常：

```text
Success! Attack mode enabled for 24h
```

关闭：

```bash
vercel firewall attack-mode disable --yes
```

> Attack Mode 会让正常浏览器也可能先经过 Vercel Security Checkpoint。长期开启时这是预期行为。

---

## 七、开启 Bot Protection

生成配置：

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

开启：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-bot-protection.json
```

如果返回：

```json
{}
```

属于正常成功结果。

临时关闭：

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

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-bot-protection-off.json
```

---

## 八、开启 AI Bots 拦截

生成配置：

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

开启：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-ai-bots.json
```

---

## 九、Rate Limit：三种限制方式

这一部分以后根据项目类型任选一种。

统一推荐：

```text
规则名：anti-crawler
窗口：60 秒
阈值：120 次
Key：IP
超过：deny
```

### 方案 A：全站所有文件、所有文件夹全部限制

适合希望把所有请求都纳入限流的项目。

它会包含：

```text
/
 /blog/*
 /column/*
 /api/*
 /robots.txt
 /sitemap.xml
 /favicon.ico
 /assets/*
 /任意文件
 /任意目录
```

第一次创建：

```bash
vercel firewall rules add "anti-crawler" \
  --condition '{"type":"path","op":"pre","value":"/"}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-action deny \
  --yes
```

如果已经存在：

```bash
vercel firewall rules edit "anti-crawler" \
  --condition '{"type":"path","op":"pre","value":"/"}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-action deny \
  --yes
```

> 注意：这种方式连 `/assets/*` 也计算请求数。现代静态站一次页面加载可能请求大量 JS/CSS/图片，建议根据实际情况提高阈值。

---

### 方案 B：全站所有文件、文件夹限制，但排除 assets【推荐】

目标：

```text
/assets
/assets/*
```

完全不进入这条 Rate Limit。

其它所有文件、所有目录全部限制：

```text
/                      → 限流
/blog/*                → 限流
/api/*                 → 限流
/column/*              → 限流
/1v1/*                 → 限流
/robots.txt            → 限流
/sitemap.xml           → 限流
/favicon.ico           → 限流
其它路径                → 限流

/assets                 → 排除
/assets/*               → 排除
```

第一次创建：

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

已经存在时：

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

两个条件之间是 AND：

```text
Path != /assets
AND
Path 不以 /assets/ 开头
```

因此只有 assets 被排除。

---

### 方案 C：只限制指定文件夹

例如只保护：

```text
/blog/
/api/
/column/
/1v1/
```

第一次创建：

```bash
vercel firewall rules add "anti-crawler" \
  --condition '{"type":"path","op":"pre","value":"/blog/"}' \
  --or \
  --condition '{"type":"path","op":"pre","value":"/api/"}' \
  --or \
  --condition '{"type":"path","op":"pre","value":"/column/"}' \
  --or \
  --condition '{"type":"path","op":"pre","value":"/1v1/"}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-action deny \
  --yes
```

已经存在时：

```bash
vercel firewall rules edit "anti-crawler" \
  --condition '{"type":"path","op":"pre","value":"/blog/"}' \
  --or \
  --condition '{"type":"path","op":"pre","value":"/api/"}' \
  --or \
  --condition '{"type":"path","op":"pre","value":"/column/"}' \
  --or \
  --condition '{"type":"path","op":"pre","value":"/1v1/"}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-action deny \
  --yes
```

继续增加目录，只需要继续追加：

```bash
--or \
--condition '{"type":"path","op":"pre","value":"/新的目录/"}'
```

例如：

```bash
--or \
--condition '{"type":"path","op":"pre","value":"/docs/"}'
```

最终就是：

```text
/blog/*   OR
/api/*    OR
/column/* OR
/1v1/*    OR
/docs/*
```

> 建议目录写成 `/目录名/`，避免 `/blog` 同时误匹配 `/blogger` 之类的路径。  
> 如果项目会把 `/blog` 自动跳转到 `/blog/`，这种写法最稳。

---

## 十、检查、发布 Rate Limit

Custom Rule 的 CLI 修改会先进入 Draft。

检查：

```bash
vercel firewall diff
```

查看完整规则：

```bash
vercel firewall rules list --expand
```

确认后发布：

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

表示已经正式进入生产配置。

如果改错了但还没 publish：

```bash
vercel firewall discard --yes
```

---

## 十一、最终检查整套防护

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

重点找：

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

Rate Limit 应类似：

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

代表没有未发布配置。

---

## 十二、傻瓜式一键防护脚本【推荐】

以后新项目不需要逐条复制命令。

只需要：

```text
1. vercel login
2. vercel link
3. 把下面脚本保存成 vercel-protect.sh
4. 修改脚本顶部的 RATE_MODE
5. ./vercel-protect.sh
```

脚本会自动完成：

```text
✓ 自动读取 PROJECT_ID / TEAM_ID
✓ 开启 24h Attack Mode
✓ 开启 Bot Protection challenge
✓ 开启 AI Bots deny
✓ 自动判断 anti-crawler 是 add 还是 edit
✓ 根据模式创建 Rate Limit
✓ 自动 publish
✓ 最终读取 Firewall API 验证
✓ 自动生成 GitHub Actions 定时 Attack Mode 文件
```

### RATE_MODE 三种模式

全站，包括 assets：

```bash
RATE_MODE="all"
```

全站，但是排除 assets【推荐】：

```bash
RATE_MODE="all_except_assets"
```

只限制指定目录：

```bash
RATE_MODE="specific"
```

并修改：

```bash
SPECIFIC_PATHS=(
  "/blog/"
  "/api/"
  "/column/"
  "/1v1/"
)
```

### 完整一键脚本

```bash
#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# Vercel 一键防护脚本
# ============================================================
#
# 使用方法：
#   1. 把本脚本放到 Vercel 项目根目录
#   2. 修改下面“用户配置区”
#   3. 执行：
#        chmod +x vercel-protect.sh
#        ./vercel-protect.sh
#
# RATE_MODE 可选：
#   all               = 全站所有文件、所有文件夹都限流（包括 /assets）
#   all_except_assets = 全站限流，但排除 /assets 和 /assets/*
#   specific          = 只限制 SPECIFIC_PATHS 中指定的文件夹
#
# ============================================================

# ======================= 用户配置区 ===========================

RATE_MODE="all_except_assets"

# 仅 RATE_MODE="specific" 时使用。
# 每个目录建议以 / 开头、以 / 结尾。
SPECIFIC_PATHS=(
  "/blog/"
  "/api/"
  "/column/"
  "/1v1/"
)

# 限流：同一个 IP 在 RATE_LIMIT_WINDOW 秒内最多 RATE_LIMIT_REQUESTS 次。
RATE_LIMIT_WINDOW=60
RATE_LIMIT_REQUESTS=120
RATE_LIMIT_KEY="ip"
RULE_NAME="anti-crawler"

# 防护开关
ENABLE_ATTACK_MODE=true
ENABLE_BOT_PROTECTION=true
ENABLE_AI_BOTS=true

# 是否自动生成 GitHub Actions：
# 每 12 小时重新开启一次 24h Attack Mode。
GENERATE_ATTACK_MODE_WORKFLOW=true

# ============================================================

echo "============================================================"
echo " Vercel 一键防护"
echo "============================================================"

if ! command -v vercel >/dev/null 2>&1; then
  echo "❌ 未找到 Vercel CLI。请先执行："
  echo "   npm install -g vercel@latest"
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "❌ 未找到 Node.js。"
  exit 1
fi

echo
echo "▶ 检查 Vercel 登录状态..."
if ! vercel whoami >/dev/null 2>&1; then
  echo "❌ 尚未登录 Vercel，请先执行：vercel login"
  exit 1
fi

# 新版 CLI 优先使用 .vercel/repo.json；兼容旧版 project.json。
if [[ -f ".vercel/repo.json" ]]; then
  PROJECT_ID=$(node -p "require('./.vercel/repo.json').projects[0].id")
  TEAM_ID=$(node -p "require('./.vercel/repo.json').projects[0].orgId")
  PROJECT_NAME=$(node -p "require('./.vercel/repo.json').projects[0].name")
elif [[ -f ".vercel/project.json" ]]; then
  PROJECT_ID=$(node -p "require('./.vercel/project.json').projectId")
  TEAM_ID=$(node -p "require('./.vercel/project.json').orgId")
  PROJECT_NAME="$(basename "$PWD")"
else
  echo "❌ 当前目录没有 Vercel 项目绑定信息。"
  echo "   请先执行：vercel link"
  exit 1
fi

echo
echo "▶ 当前项目"
echo "   PROJECT_NAME=$PROJECT_NAME"
echo "   PROJECT_ID=$PROJECT_ID"
echo "   TEAM_ID=$TEAM_ID"

# ------------------------------------------------------------
# Attack Mode
# ------------------------------------------------------------
if [[ "$ENABLE_ATTACK_MODE" == "true" ]]; then
  echo
  echo "▶ 开启 Attack Mode 24h..."
  vercel firewall attack-mode enable --duration 24h --yes
fi

# ------------------------------------------------------------
# Bot Protection
# ------------------------------------------------------------
TMP_BOT="$(mktemp)"
TMP_AI="$(mktemp)"
trap 'rm -f "$TMP_BOT" "$TMP_AI"' EXIT

if [[ "$ENABLE_BOT_PROTECTION" == "true" ]]; then
  echo
  echo "▶ 开启 Bot Protection（challenge）..."

  cat >"$TMP_BOT" <<'EOF'
{
  "action": "managedRules.update",
  "id": "bot_protection",
  "value": {
    "active": true,
    "action": "challenge"
  }
}
EOF

  vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
    -X PATCH \
    --input "$TMP_BOT"
fi

# ------------------------------------------------------------
# AI Bots
# ------------------------------------------------------------
if [[ "$ENABLE_AI_BOTS" == "true" ]]; then
  echo
  echo "▶ 开启 AI Bots（deny）..."

  cat >"$TMP_AI" <<'EOF'
{
  "action": "managedRules.update",
  "id": "ai_bots",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF

  vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
    -X PATCH \
    --input "$TMP_AI"
fi

# ------------------------------------------------------------
# Rate Limit 条件
# ------------------------------------------------------------
CONDITION_ARGS=()

case "$RATE_MODE" in
  all)
    echo
    echo "▶ 限流模式：全站所有文件 + 所有文件夹（包括 /assets）"
    CONDITION_ARGS+=(
      --condition '{"type":"path","op":"pre","value":"/"}'
    )
    ;;

  all_except_assets)
    echo
    echo "▶ 限流模式：全站限流，排除 /assets 和 /assets/*"
    CONDITION_ARGS+=(
      --condition '{"type":"path","op":"eq","value":"/assets","neg":true}'
      --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}'
    )
    ;;

  specific)
    echo
    echo "▶ 限流模式：只限制指定文件夹"

    if [[ "${#SPECIFIC_PATHS[@]}" -eq 0 ]]; then
      echo "❌ SPECIFIC_PATHS 为空。"
      exit 1
    fi

    first=true
    for path in "${SPECIFIC_PATHS[@]}"; do
      if [[ "$path" != /* ]]; then
        echo "❌ 路径必须以 / 开头：$path"
        exit 1
      fi

      condition="{\"type\":\"path\",\"op\":\"pre\",\"value\":\"$path\"}"

      if [[ "$first" == "true" ]]; then
        CONDITION_ARGS+=(--condition "$condition")
        first=false
      else
        CONDITION_ARGS+=(--or --condition "$condition")
      fi

      echo "   - $path"
    done
    ;;

  *)
    echo "❌ RATE_MODE 无效：$RATE_MODE"
    echo "   可选：all / all_except_assets / specific"
    exit 1
    ;;
esac

# ------------------------------------------------------------
# 创建或修改 anti-crawler
# ------------------------------------------------------------
echo
echo "▶ 检查 Firewall Rule：$RULE_NAME"

if vercel firewall rules list --expand 2>/dev/null | grep -Fq "$RULE_NAME"; then
  RULE_OPERATION="edit"
  echo "   已存在，执行 edit。"
else
  RULE_OPERATION="add"
  echo "   不存在，执行 add。"
fi

vercel firewall rules "$RULE_OPERATION" "$RULE_NAME" \
  "${CONDITION_ARGS[@]}" \
  --action rate_limit \
  --rate-limit-window "$RATE_LIMIT_WINDOW" \
  --rate-limit-requests "$RATE_LIMIT_REQUESTS" \
  --rate-limit-keys "$RATE_LIMIT_KEY" \
  --rate-limit-action deny \
  --yes

# ------------------------------------------------------------
# 检查 + 发布
# ------------------------------------------------------------
echo
echo "▶ Firewall Diff"
vercel firewall diff

echo
echo "▶ 发布 Firewall..."
vercel firewall publish --yes

echo
echo "▶ 当前 Live Rules"
vercel firewall rules list --expand

# ------------------------------------------------------------
# 生成 GitHub Actions：长期 Attack Mode
# ------------------------------------------------------------
if [[ "$GENERATE_ATTACK_MODE_WORKFLOW" == "true" ]]; then
  echo
  echo "▶ 生成 GitHub Actions：每 12 小时续 24h Attack Mode..."

  mkdir -p .github/workflows

  cat > .github/workflows/vercel-attack-mode.yml <<EOF
name: Keep Vercel Attack Mode Enabled

on:
  schedule:
    # GitHub Actions Cron 使用 UTC。
    # 每 12 小时重新设置一次 24h Attack Mode。
    - cron: "0 */12 * * *"

  workflow_dispatch:

jobs:
  keep-attack-mode-enabled:
    runs-on: ubuntu-latest

    steps:
      - name: Keep Vercel Attack Mode Enabled
        env:
          VERCEL_TOKEN: \${{ secrets.VERCEL_TOKEN }}
          VERCEL_PROJECT_ID: "$PROJECT_ID"
          VERCEL_TEAM_ID: "$TEAM_ID"
        run: |
          ACTIVE_UNTIL=\$((\$(date +%s%3N) + 86400000))

          curl --fail-with-body \
            --request POST \
            "https://api.vercel.com/v1/security/attack-mode?teamId=\${VERCEL_TEAM_ID}" \
            --header "Authorization: Bearer \${VERCEL_TOKEN}" \
            --header "Content-Type: application/json" \
            --data "{
              \"projectId\": \"\${VERCEL_PROJECT_ID}\",
              \"attackModeEnabled\": true,
              \"attackModeActiveUntil\": \${ACTIVE_UNTIL}
            }"
EOF

  echo "✅ 已创建：.github/workflows/vercel-attack-mode.yml"
  echo
  echo "⚠️ 还需要在 GitHub Repository Secret 中添加："
  echo "   VERCEL_TOKEN"
  echo
  echo "路径："
  echo "GitHub → Repository → Settings → Secrets and variables"
  echo "       → Actions → New repository secret"
fi

# ------------------------------------------------------------
# 最终检查
# ------------------------------------------------------------
echo
echo "▶ 最终 Firewall API 配置"
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"

echo
echo "============================================================"
echo " ✅ Vercel 防护配置完成"
echo "============================================================"
echo
echo "限流模式：$RATE_MODE"
echo "限流阈值：$RATE_LIMIT_REQUESTS / ${RATE_LIMIT_WINDOW}s / $RATE_LIMIT_KEY"
echo "Attack Mode：$ENABLE_ATTACK_MODE"
echo "Bot Protection：$ENABLE_BOT_PROTECTION"
echo "AI Bots：$ENABLE_AI_BOTS"
echo
if [[ "$GENERATE_ATTACK_MODE_WORKFLOW" == "true" ]]; then
  echo "下一步："
  echo "1. GitHub 添加 VERCEL_TOKEN Secret"
  echo "2. git add .github/workflows/vercel-attack-mode.yml"
  echo "3. git commit -m 'chore: keep vercel attack mode enabled'"
  echo "4. git push"
fi
```


### 保存并运行脚本

创建文件：

```bash
nano vercel-protect.sh
```

把上面的完整脚本粘贴进去，保存。

赋予执行权限：

```bash
chmod +x vercel-protect.sh
```

运行：

```bash
./vercel-protect.sh
```

也可以直接：

```bash
bash vercel-protect.sh
```

以后换项目，只需要把同一份 `vercel-protect.sh` 复制到新项目根目录，然后：

```bash
vercel login
vercel link
./vercel-protect.sh
```

即可。

---

## 十三、Attack Mode 长期开启：每 12h 自动续 24h

Attack Mode 单次设置：

```bash
vercel firewall attack-mode enable --duration 24h --yes
```

单次最长 24 小时。

因此长期保持采用：

```text
每 12 小时执行一次
→ 每次重新设置 24h
→ 两次之间有 12h 重叠
```

上面的一键脚本默认：

```bash
GENERATE_ATTACK_MODE_WORKFLOW=true
```

所以会自动创建：

```text
.github/workflows/vercel-attack-mode.yml
```

还需要给 GitHub 配置一个 Secret：

```text
VERCEL_TOKEN
```

路径：

```text
GitHub Repository
→ Settings
→ Secrets and variables
→ Actions
→ New repository secret
```

Secret 名：

```text
VERCEL_TOKEN
```

值：你的 Vercel Personal Access Token。

---

## 十四、GitHub Actions 定时文件（手动创建版）

如果不使用一键脚本，也可以自己创建：

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
```

手动版需要 GitHub Secrets：

```text
VERCEL_TOKEN
VERCEL_PROJECT_ID
VERCEL_TEAM_ID
```

一键脚本生成的版本会直接把当前项目的 Project ID / Team ID 写入 workflow，因此只需要：

```text
VERCEL_TOKEN
```

---

## 十五、手动触发 GitHub Actions 测试

进入：

```text
GitHub
→ Actions
→ Keep Vercel Attack Mode Enabled
→ Run workflow
```

手动跑一次。

成功后，定时任务会继续每 12 小时自动执行。

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

必须进入：

```text
Vercel
→ Project
→ Settings
→ Git
→ Production Branch
```

设置：

```text
gh-pages
```

不要以为 GitHub Default Branch 设置成 `gh-pages` 就够了。

```text
GitHub Default Branch
≠
Vercel Production Branch
```

如果 Vercel Production Branch 仍然是 `main`，执行：

```bash
git push origin main
```

可能重新触发 Production Deployment，把真正的 `gh-pages` 静态产物覆盖，最终出现：

```text
404: NOT_FOUND
```

---

## 十七、可选：禁止 main 自动触发 Vercel Deployment

根目录创建：

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

这样：

```text
push main
→ 不自动创建 Vercel Deployment
```

---

## 十八、常用维护命令

查看 Live / Draft Rule：

```bash
vercel firewall rules list --expand
```

查看待发布修改：

```bash
vercel firewall diff
```

发布：

```bash
vercel firewall publish --yes
```

丢弃 Draft：

```bash
vercel firewall discard --yes
```

开启 Attack Mode 24h：

```bash
vercel firewall attack-mode enable --duration 24h --yes
```

关闭 Attack Mode：

```bash
vercel firewall attack-mode disable --yes
```

查看 Firewall API：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

关闭 Rate Limit Rule：

```bash
vercel firewall rules disable "anti-crawler"
vercel firewall publish --yes
```

重新开启：

```bash
vercel firewall rules enable "anti-crawler"
vercel firewall publish --yes
```

---

## 十九、调整 Rate Limit 阈值

默认：

```text
120 / 60s / IP
```

如果误伤正常访问，可以提高：

```text
120 → 180 → 300
```

例如“全站排除 assets”改成 180：

```bash
vercel firewall rules edit "anti-crawler" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 180 \
  --rate-limit-keys ip \
  --rate-limit-action deny \
  --yes

vercel firewall publish --yes
```

---

## 二十、网站打不开时的排障顺序

先测试：

```bash
curl -I https://你的域名/
```

状态判断：

```text
200 / 301 / 308
→ 网站本身基本正常

403
→ Challenge / Firewall / 权限

429
→ Rate Limit

404
→ 当前 Deployment / 静态路由不存在
```

如果突然出现：

```text
404: NOT_FOUND
```

并且刚执行过：

```bash
git push origin main
```

优先检查 Vercel Production Branch，而不是先关闭 Firewall。

---

## 二十一、新项目最快操作方式

### 方法 1：推荐，一键脚本

```bash
vercel login
vercel link

chmod +x vercel-protect.sh
./vercel-protect.sh
```

然后 GitHub 添加：

```text
VERCEL_TOKEN
```

提交脚本生成的：

```text
.github/workflows/vercel-attack-mode.yml
```

即可。

### 方法 2：手动命令

```bash
vercel login
vercel link

PROJECT_ID=$(node -p "require('./.vercel/repo.json').projects[0].id")
TEAM_ID=$(node -p "require('./.vercel/repo.json').projects[0].orgId")

vercel firewall attack-mode enable --duration 24h --yes
```

然后继续执行本教程第七、八、九节。

---

## 二十二、推荐长期配置

对于静态博客 / 文档站，推荐：

```text
Attack Mode
✅ 长期开启
✅ GitHub Actions 每 12h 续 24h

Bot Protection
✅ challenge

AI Bots
✅ deny

Rate Limit
✅ 全站所有文件、目录
✅ 排除 /assets 和 /assets/*

阈值
✅ 120 / 60s / IP
```

---

## 二十三、最终原则

```text
1. 新项目先 vercel login + vercel link
2. 新版 CLI 优先检查 .vercel/repo.json
3. Attack Mode 单次最长 24h
4. GitHub Actions 每 12h 续一次，实现长期 Attack Mode
5. Bot Protection 使用 challenge
6. AI Bots 使用 deny
7. Rate Limit 可选三种模式：
   - 全站，包括 assets
   - 全站，排除 assets【推荐】
   - 只限制指定文件夹
8. Custom Rule 修改后必须 publish
9. /assets/* 请求很多，低阈值限流容易误伤
10. GitHub Default Branch ≠ Vercel Production Branch
11. 404: NOT_FOUND 优先检查 Production Deployment
12. Hobby 下 firewall overview 的 IP Bypass 404 不等于 Firewall 无效
13. 一键脚本会自动判断 anti-crawler 应该 add 还是 edit
14. 一键脚本会自动生成长期 Attack Mode 的 GitHub Actions 文件
```

---

## 二十四、每个防护选项的关闭命令

下面这些命令可以单独关闭某一层防护，不需要全部关闭。

### 1. 关闭 Attack Mode

关闭：

```bash
vercel firewall attack-mode disable --yes
```

重新开启：

```bash
vercel firewall attack-mode enable --duration 24h --yes
```

---

### 2. 关闭 Bot Protection

关闭：

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

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-bot-protection-off.json
```

重新开启：

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

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-bot-protection.json
```

---

### 3. 关闭 AI Bots

关闭：

```bash
cat >/tmp/vercel-ai-bots-off.json <<'EOF'
{
  "action": "managedRules.update",
  "id": "ai_bots",
  "value": {
    "active": false,
    "action": "log"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-ai-bots-off.json
```

重新开启：

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

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-ai-bots.json
```

---

### 4. 关闭 Rate Limit：全站全部限制

如果当前是：

```bash
RATE_MODE="all"
```

关闭：

```bash
vercel firewall rules disable "anti-crawler"
vercel firewall publish --yes
```

重新开启：

```bash
vercel firewall rules enable "anti-crawler"
vercel firewall publish --yes
```

---

### 5. 关闭 Rate Limit：全站限制但排除 assets

如果当前是：

```bash
RATE_MODE="all_except_assets"
```

关闭：

```bash
vercel firewall rules disable "anti-crawler"
vercel firewall publish --yes
```

重新开启：

```bash
vercel firewall rules enable "anti-crawler"
vercel firewall publish --yes
```

---

### 6. 关闭 Rate Limit：指定文件夹限制

如果当前是：

```bash
RATE_MODE="specific"
```

关闭：

```bash
vercel firewall rules disable "anti-crawler"
vercel firewall publish --yes
```

重新开启：

```bash
vercel firewall rules enable "anti-crawler"
vercel firewall publish --yes
```

> 三种 Rate Limit 模式本质上都使用同一个 `anti-crawler` 规则，所以关闭命令相同。

检查状态：

```bash
vercel firewall rules list --expand
```

---

### 7. 关闭 Attack Mode 自动续期

如果已经创建：

```text
.github/workflows/vercel-attack-mode.yml
```

有两种关闭方式。

#### 方法 A：GitHub 页面禁用 Workflow

```text
GitHub
→ Actions
→ Keep Vercel Attack Mode Enabled
→ ...
→ Disable workflow
```

恢复：

```text
GitHub
→ Actions
→ Keep Vercel Attack Mode Enabled
→ Enable workflow
```

#### 方法 B：删除 Workflow 文件

```bash
rm .github/workflows/vercel-attack-mode.yml
git add -A
git commit -m "chore: disable vercel attack mode auto renewal"
git push
```

然后手动关闭当前已经生效的 Attack Mode：

```bash
vercel firewall attack-mode disable --yes
```

> 只禁用定时任务，不会立刻取消当前这一轮已经开启的 24h Attack Mode。

---

## 二十五、一次性关闭全部自定义防护

先加载项目 ID：

```bash
if [[ -f ".vercel/repo.json" ]]; then
  PROJECT_ID=$(node -p "require('./.vercel/repo.json').projects[0].id")
  TEAM_ID=$(node -p "require('./.vercel/repo.json').projects[0].orgId")
else
  PROJECT_ID=$(node -p "require('./.vercel/project.json').projectId")
  TEAM_ID=$(node -p "require('./.vercel/project.json').orgId")
fi
```

然后执行：

```bash
# 1. 关闭 Attack Mode
vercel firewall attack-mode disable --yes

# 2. 关闭 Bot Protection
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

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-bot-protection-off.json

# 3. 关闭 AI Bots
cat >/tmp/vercel-ai-bots-off.json <<'EOF'
{
  "action": "managedRules.update",
  "id": "ai_bots",
  "value": {
    "active": false,
    "action": "log"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-ai-bots-off.json

# 4. 关闭 anti-crawler Rate Limit
vercel firewall rules disable "anti-crawler"
vercel firewall publish --yes
```

最后检查：

```bash
vercel firewall rules list --expand

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

---

## 二十六、一键关闭脚本

保存为：

```text
vercel-unprotect.sh
```

完整内容：

```bash
#!/usr/bin/env bash
set -euo pipefail

echo "============================================================"
echo " Vercel 一键关闭自定义防护"
echo "============================================================"

if ! command -v vercel >/dev/null 2>&1; then
  echo "❌ 未安装 Vercel CLI"
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "❌ 未安装 Node.js"
  exit 1
fi

if [[ -f ".vercel/repo.json" ]]; then
  PROJECT_ID=$(node -p "require('./.vercel/repo.json').projects[0].id")
  TEAM_ID=$(node -p "require('./.vercel/repo.json').projects[0].orgId")
elif [[ -f ".vercel/project.json" ]]; then
  PROJECT_ID=$(node -p "require('./.vercel/project.json').projectId")
  TEAM_ID=$(node -p "require('./.vercel/project.json').orgId")
else
  echo "❌ 没有找到 Vercel 项目绑定信息，请先执行：vercel link"
  exit 1
fi

echo
echo "▶ 关闭 Attack Mode..."
vercel firewall attack-mode disable --yes || true

echo
echo "▶ 关闭 Bot Protection..."

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

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-bot-protection-off.json

echo
echo "▶ 关闭 AI Bots..."

cat >/tmp/vercel-ai-bots-off.json <<'EOF'
{
  "action": "managedRules.update",
  "id": "ai_bots",
  "value": {
    "active": false,
    "action": "log"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-ai-bots-off.json

echo
echo "▶ 关闭 anti-crawler Rate Limit..."

if vercel firewall rules list --expand 2>/dev/null | grep -Fq "anti-crawler"; then
  vercel firewall rules disable "anti-crawler"
  vercel firewall publish --yes
else
  echo "   未找到 anti-crawler，跳过。"
fi

echo
echo "============================================================"
echo " ✅ 自定义防护已关闭"
echo "============================================================"
echo
echo "⚠️ 如果 GitHub Actions 的 vercel-attack-mode.yml 仍然启用，"
echo "   后续定时任务会重新开启 Attack Mode。"
echo "   如需长期关闭，请同时 Disable Workflow 或删除该文件。"
```

运行：

```bash
chmod +x vercel-unprotect.sh
./vercel-unprotect.sh
```

---

## 二十七、开启 / 关闭速查表

| 功能 | 开启 | 关闭 |
|---|---|---|
| Attack Mode | `vercel firewall attack-mode enable --duration 24h --yes` | `vercel firewall attack-mode disable --yes` |
| Bot Protection | `active: true` + `challenge` | `active: false` + `log` |
| AI Bots | `active: true` + `deny` | `active: false` + `log` |
| 全站 Rate Limit | `anti-crawler` enable | `anti-crawler` disable |
| 全站排除 assets Rate Limit | `anti-crawler` enable | `anti-crawler` disable |
| 指定目录 Rate Limit | `anti-crawler` enable | `anti-crawler` disable |
| Attack Mode 定时续期 | Enable Workflow | Disable Workflow / 删除 Workflow |
