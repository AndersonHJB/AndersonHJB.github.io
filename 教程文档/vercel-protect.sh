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
