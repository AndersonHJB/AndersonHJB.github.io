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
