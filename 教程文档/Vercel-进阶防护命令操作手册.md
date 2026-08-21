# Vercel 进阶防护命令操作手册

> 这是现有《Vercel 全套防护操作手册》的**进阶篇**。  
> 默认你已经完成基础防护：
>
> ```text
> Attack Mode          ✅
> Bot Protection       ✅ challenge
> AI Bots              ✅ deny
> anti-crawler         ✅ Rate Limit
> ```
>
> 本文不重复创建这些基础配置，而是在其上继续增加：IP/CIDR 封锁、JA4、User-Agent、Header/Cookie/Query、OWASP、Challenge、Token Bucket、按 Header 限流、域名/地区限制、Project Protection 等。
>
> 特别注意：本文每一种 Custom Rule 都同时给出：
>
> ```text
> 第一次配置 → add
> 已经配置过 → edit
> 临时关闭   → disable
> 重新开启   → enable
> 完全删除   → remove
> ```

---

# 一、这些防护都能用命令操作吗？

大部分可以。

| 防护方式 | 是否可命令操作 | 推荐方式 |
|---|---:|---|
| IP / CIDR 封锁 | ✅ | `vercel firewall ip-blocks` |
| JA4 指纹限流 | ✅ | Firewall CLI |
| User-Agent 限制 | ✅ | Firewall CLI |
| Header 限制 | ✅ | Firewall CLI |
| Cookie 限制 | ✅ | Firewall CLI |
| Query 参数限制 | ✅ | Firewall CLI |
| OWASP / CRS | ✅ | `vercel api` |
| Custom Challenge | ✅ | Firewall CLI |
| Rate Limit 超限 Challenge | ✅ | Firewall CLI |
| Token Bucket | ✅ | Firewall CLI |
| Header 作为 Rate Limit Key | ✅ | Firewall CLI |
| 指定 Host 的 IP Block | ✅ | `--hostname` |
| Project Protection | ✅ | `vercel project protection` |
| 国家 / 地区限制 | ⚠️ | 推荐 `vercel.json` / Routing Middleware 后部署 |
| Firewall 日志排查 | ✅ | `vercel logs` / API |

> 地区限制目前更适合通过 Vercel 的路由能力或 Middleware 实现，不建议为了“全部 CLI 化”硬写一个未验证的 Firewall condition type。

---

# 二、准备工作

以后任何项目都先：

```bash
vercel login
vercel link
```

读取项目：

```bash
if [[ -f ".vercel/repo.json" ]]; then
  PROJECT_ID=$(node -p "require('./.vercel/repo.json').projects[0].id")
  TEAM_ID=$(node -p "require('./.vercel/repo.json').projects[0].orgId")
  PROJECT_NAME=$(node -p "require('./.vercel/repo.json').projects[0].name")
elif [[ -f ".vercel/project.json" ]]; then
  PROJECT_ID=$(node -p "require('./.vercel/project.json').projectId")
  TEAM_ID=$(node -p "require('./.vercel/project.json').orgId")
  PROJECT_NAME="$(basename "$PWD")"
else
  echo "没有找到 .vercel 项目配置，请先执行 vercel link"
  exit 1
fi

echo "PROJECT_ID=$PROJECT_ID"
echo "TEAM_ID=$TEAM_ID"
echo "PROJECT_NAME=$PROJECT_NAME"
```

检查当前 Firewall：

```bash
vercel firewall rules list --expand
```

以及：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

---

# 三、Custom Rule 的统一规则：add 和 edit 不一样

第一次创建：

```bash
vercel firewall rules add "规则名" ...
```

如果已经存在：

```bash
vercel firewall rules edit "规则名" ...
```

判断某条规则是否已经存在：

```bash
vercel firewall rules list --expand | grep -F "规则名"
```

如果有输出：

```text
已经存在 → 用 edit
```

如果没有：

```text
不存在 → 用 add
```

## 通用自动判断写法

以后可以直接复制：

```bash
RULE_NAME="my-rule"

if vercel firewall rules list --expand 2>/dev/null | grep -Fq "$RULE_NAME"; then
  RULE_OPERATION="edit"
else
  RULE_OPERATION="add"
fi

echo "本次操作：$RULE_OPERATION $RULE_NAME"
```

然后：

```bash
vercel firewall rules "$RULE_OPERATION" "$RULE_NAME" ...
```

> `rules edit` 带新的 `--condition` 时会替换该规则的条件。  
> 所以修改已有规则时，必须把你想保留的条件重新完整写进去。

Custom Rule 修改后：

```bash
vercel firewall diff
vercel firewall publish --yes
```

---

# 四、IP / CIDR 直接封锁

适合日志中出现稳定攻击来源。

## 1. 查看现有 IP Block

```bash
vercel firewall ip-blocks list
```

---

## 2. 第一次封单个 IP

例如：

```bash
vercel firewall ip-blocks block 1.2.3.4 \
  --notes "crawler abuse" \
  --yes

vercel firewall publish --yes
```

---

## 3. 封整个 CIDR

例如：

```bash
vercel firewall ip-blocks block 1.2.3.0/24 \
  --notes "abuse network" \
  --yes

vercel firewall publish --yes
```

---

## 4. 只针对某个域名封 IP

```bash
vercel firewall ip-blocks block 1.2.3.4 \
  --hostname example.com \
  --notes "blocked only on example.com" \
  --yes

vercel firewall publish --yes
```

---

## 5. 如果这个 IP 已经封过

不要重复 block。

先：

```bash
vercel firewall ip-blocks list
```

确认已有即可。

---

## 6. 解封

```bash
vercel firewall ip-blocks unblock 1.2.3.4 --yes
vercel firewall publish --yes
```

指定域名：

```bash
vercel firewall ip-blocks unblock 1.2.3.4 \
  --hostname example.com \
  --yes

vercel firewall publish --yes
```

---

# 五、JA4 指纹限流

你的基础限流已经按 IP：

```text
120 / 60s / IP
```

攻击者如果使用代理池不停换 IP，JA4 可以作为第二维度。

建议把 JA4 设置得比 IP 宽松：

```text
500 / 60s / JA4
超过 → challenge
```

并继续排除 `/assets`。

规则名：

```text
ja4-crawler-limit
```

---

## 1. 第一次创建

```bash
vercel firewall rules add "ja4-crawler-limit" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 500 \
  --rate-limit-keys ja4 \
  --rate-limit-action challenge \
  --yes

vercel firewall publish --yes
```

---

## 2. 已经存在时修改

```bash
vercel firewall rules edit "ja4-crawler-limit" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 500 \
  --rate-limit-keys ja4 \
  --rate-limit-action challenge \
  --yes

vercel firewall publish --yes
```

---

## 3. 自动 add / edit

```bash
RULE_NAME="ja4-crawler-limit"

if vercel firewall rules list --expand 2>/dev/null | grep -Fq "$RULE_NAME"; then
  RULE_OPERATION="edit"
else
  RULE_OPERATION="add"
fi

vercel firewall rules "$RULE_OPERATION" "$RULE_NAME" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 500 \
  --rate-limit-keys ja4 \
  --rate-limit-action challenge \
  --yes

vercel firewall publish --yes
```

---

## 4. 临时关闭

```bash
vercel firewall rules disable "ja4-crawler-limit"
vercel firewall publish --yes
```

重新开启：

```bash
vercel firewall rules enable "ja4-crawler-limit"
vercel firewall publish --yes
```

完全删除：

```bash
vercel firewall rules remove "ja4-crawler-limit" --yes
vercel firewall publish --yes
```

---

# 六、User-Agent 基础脚本过滤

User-Agent 非常容易伪造，所以它不是主防线。

但可以低成本过滤最简单的脚本，例如：

```text
curl
wget
python-requests
Go-http-client
Scrapy
aiohttp
libwww-perl
```

规则：

```text
block-basic-scripts
```

---

## 1. 第一次创建

```bash
vercel firewall rules add "block-basic-scripts" \
  --condition '{"type":"user_agent","op":"re","value":"curl|Wget|wget|python-requests|Go-http-client|Scrapy|scrapy|aiohttp|libwww-perl"}' \
  --action deny \
  --yes

vercel firewall publish --yes
```

---

## 2. 已经存在时修改

```bash
vercel firewall rules edit "block-basic-scripts" \
  --condition '{"type":"user_agent","op":"re","value":"curl|Wget|wget|python-requests|Go-http-client|Scrapy|scrapy|aiohttp|libwww-perl"}' \
  --action deny \
  --yes

vercel firewall publish --yes
```

---

## 3. 如果不想直接 Deny，可改 Challenge

```bash
vercel firewall rules edit "block-basic-scripts" \
  --condition '{"type":"user_agent","op":"re","value":"curl|Wget|wget|python-requests|Go-http-client|Scrapy|scrapy|aiohttp|libwww-perl"}' \
  --action challenge \
  --yes

vercel firewall publish --yes
```

---

## 4. 关闭 / 开启 / 删除

关闭：

```bash
vercel firewall rules disable "block-basic-scripts"
vercel firewall publish --yes
```

开启：

```bash
vercel firewall rules enable "block-basic-scripts"
vercel firewall publish --yes
```

删除：

```bash
vercel firewall rules remove "block-basic-scripts" --yes
vercel firewall publish --yes
```

---

# 七、Header 限制：保护私有 API

例如希望：

```text
/api/private/*
```

必须携带：

```text
X-Site-Token
```

否则直接 Deny。

规则：

```text
require-private-api-header
```

---

## 1. 设置 Token

不要把真实 Token 直接写进 Shell 历史。

执行：

```bash
read -s -p "请输入 API Secret: " API_SECRET
echo
export API_SECRET
```

生成 Firewall condition：

```bash
HEADER_CONDITION=$(node -e '
console.log(JSON.stringify({
  type: "header",
  key: "x-site-token",
  op: "eq",
  value: process.env.API_SECRET,
  neg: true
}))
')
```

查看：

```bash
echo "$HEADER_CONDITION"
```

---

## 2. 第一次创建

```bash
vercel firewall rules add "require-private-api-header" \
  --condition '{"type":"path","op":"pre","value":"/api/private/"}' \
  --condition "$HEADER_CONDITION" \
  --action deny \
  --yes

vercel firewall publish --yes
```

逻辑：

```text
Path starts with /api/private/
AND
X-Site-Token != 正确值
→ Deny
```

---

## 3. 已经存在时修改

重新设置：

```bash
read -s -p "请输入新的 API Secret: " API_SECRET
echo
export API_SECRET

HEADER_CONDITION=$(node -e '
console.log(JSON.stringify({
  type: "header",
  key: "x-site-token",
  op: "eq",
  value: process.env.API_SECRET,
  neg: true
}))
')
```

然后：

```bash
vercel firewall rules edit "require-private-api-header" \
  --condition '{"type":"path","op":"pre","value":"/api/private/"}' \
  --condition "$HEADER_CONDITION" \
  --action deny \
  --yes

vercel firewall publish --yes
```

---

## 4. 测试

没有 Header：

```bash
curl -I https://example.com/api/private/test
```

带 Header：

```bash
curl -I \
  -H "X-Site-Token: $API_SECRET" \
  https://example.com/api/private/test
```

---

## 5. 关闭 / 开启

```bash
vercel firewall rules disable "require-private-api-header"
vercel firewall publish --yes
```

恢复：

```bash
vercel firewall rules enable "require-private-api-header"
vercel firewall publish --yes
```

---

# 八、Cookie 限制

例如：

```text
/admin/*
```

必须有：

```text
admin_access=允许值
```

否则 Deny。

> Cookie 防护不能代替真正的身份认证。这里适合辅助限制。

---

## 1. 第一次创建

```bash
vercel firewall rules add "require-admin-cookie" \
  --condition '{"type":"path","op":"pre","value":"/admin/"}' \
  --condition '{"type":"cookie","key":"admin_access","op":"eq","value":"CHANGE_ME","neg":true}' \
  --action deny \
  --yes

vercel firewall publish --yes
```

---

## 2. 已经存在

```bash
vercel firewall rules edit "require-admin-cookie" \
  --condition '{"type":"path","op":"pre","value":"/admin/"}' \
  --condition '{"type":"cookie","key":"admin_access","op":"eq","value":"CHANGE_ME","neg":true}' \
  --action deny \
  --yes

vercel firewall publish --yes
```

---

## 3. 关闭

```bash
vercel firewall rules disable "require-admin-cookie"
vercel firewall publish --yes
```

---

# 九、Query 参数限制

例如：

```text
/api/*
```

禁止出现：

```text
?debug=1
```

规则：

```text
deny-debug-query
```

---

## 1. 第一次创建

```bash
vercel firewall rules add "deny-debug-query" \
  --condition '{"type":"path","op":"pre","value":"/api/"}' \
  --condition '{"type":"query","key":"debug","op":"eq","value":"1"}' \
  --action deny \
  --yes

vercel firewall publish --yes
```

---

## 2. 已存在时

```bash
vercel firewall rules edit "deny-debug-query" \
  --condition '{"type":"path","op":"pre","value":"/api/"}' \
  --condition '{"type":"query","key":"debug","op":"eq","value":"1"}' \
  --action deny \
  --yes

vercel firewall publish --yes
```

---

## 3. 关闭

```bash
vercel firewall rules disable "deny-debug-query"
vercel firewall publish --yes
```

---

# 十、OWASP / CRS 攻击规则

这部分非常适合补充：

```text
SQL Injection
XSS
RCE
LFI
RFI
```

Vercel 的常见 CRS ID 包括：

```text
sd
max
lfi
rfi
rce
php
gen
xss
sqli
sf
java
```

对于静态站，我建议优先：

```text
xss
sqli
rce
lfi
rfi
```

---

## 1. 先查看当前配置

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

如果已经看到：

```json
"xss": {
  "active": true,
  "action": "log"
}
```

表示：

```text
已经配置了
但目前只记录，不拦截
```

OWASP 不需要区分 add / edit。

无论当前：

```text
不存在
active=false
action=log
action=deny
```

都使用同一个：

```text
crs.update
```

覆盖到目标状态即可。

---

## 2. XSS 改为 Deny

```bash
cat >/tmp/vercel-owasp-xss.json <<'EOF'
{
  "action": "crs.update",
  "id": "xss",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-owasp-xss.json
```

---

## 3. SQL Injection 改为 Deny

```bash
cat >/tmp/vercel-owasp-sqli.json <<'EOF'
{
  "action": "crs.update",
  "id": "sqli",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-owasp-sqli.json
```

---

## 4. RCE 改为 Deny

```bash
cat >/tmp/vercel-owasp-rce.json <<'EOF'
{
  "action": "crs.update",
  "id": "rce",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-owasp-rce.json
```

---

## 5. LFI

```bash
cat >/tmp/vercel-owasp-lfi.json <<'EOF'
{
  "action": "crs.update",
  "id": "lfi",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-owasp-lfi.json
```

---

## 6. RFI

```bash
cat >/tmp/vercel-owasp-rfi.json <<'EOF'
{
  "action": "crs.update",
  "id": "rfi",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-owasp-rfi.json
```

---

## 7. 一次性批量开启五项 OWASP Deny

```bash
for RULE_ID in xss sqli rce lfi rfi; do
  FILE="/tmp/vercel-owasp-${RULE_ID}.json"

  cat >"$FILE" <<EOF
{
  "action": "crs.update",
  "id": "$RULE_ID",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF

  echo "正在配置：$RULE_ID"

  vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
    -X PATCH \
    --input "$FILE"
done
```

最后：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

---

## 8. 从 Deny 改回 Log

例如 XSS：

```bash
cat >/tmp/vercel-owasp-xss-log.json <<'EOF'
{
  "action": "crs.update",
  "id": "xss",
  "value": {
    "active": true,
    "action": "log"
  }
}
EOF

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
  -X PATCH \
  --input /tmp/vercel-owasp-xss-log.json
```

批量改回 Log：

```bash
for RULE_ID in xss sqli rce lfi rfi; do
  FILE="/tmp/vercel-owasp-${RULE_ID}-log.json"

  cat >"$FILE" <<EOF
{
  "action": "crs.update",
  "id": "$RULE_ID",
  "value": {
    "active": true,
    "action": "log"
  }
}
EOF

  vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
    -X PATCH \
    --input "$FILE"
done
```

> API 更新后立即再次 GET 配置。  
> 如果你看到目标状态已经进入 `active` 且 `draft: null`，无需再 publish。  
> 如果出现 Draft，则执行：
>
> ```bash
> vercel firewall diff
> vercel firewall publish --yes
> ```

---

# 十一、把 Rate Limit 超限动作从 Deny 改成 Challenge

你现有的：

```text
anti-crawler
```

如果当前是：

```text
全站限制，但排除 /assets
120 / 60s / IP
超过 deny
```

可以改为：

```text
超过 challenge
```

---

## 修改已有 anti-crawler

```bash
vercel firewall rules edit "anti-crawler" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-action challenge \
  --yes

vercel firewall publish --yes
```

恢复 Deny：

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

vercel firewall publish --yes
```

> 只在你的 `anti-crawler` 当前确实是“全站排除 assets”时直接复制。  
> 如果你以后把 anti-crawler 改成了特定目录模式，请先：
>
> ```bash
> vercel firewall rules list --expand
> ```
>
> 再把原条件完整保留下来。

---

# 十二、Token Bucket 限流

Vercel Rate Limit 支持：

```text
fixed_window
token_bucket
```

你现在默认是 Fixed Window。

Token Bucket 更适合处理：

```text
短时间突发请求
API 流量
允许一定突发但长期控制平均速率
```

---

## 1. 把现有 anti-crawler 改成 Token Bucket

仍按你现在的“全站排除 assets”：

```bash
vercel firewall rules edit "anti-crawler" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-algo token_bucket \
  --rate-limit-action deny \
  --yes

vercel firewall publish --yes
```

---

## 2. 改回 Fixed Window

```bash
vercel firewall rules edit "anti-crawler" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 120 \
  --rate-limit-keys ip \
  --rate-limit-algo fixed_window \
  --rate-limit-action deny \
  --yes

vercel firewall publish --yes
```

---

# 十三、按 Header 做 Rate Limit Key

除了：

```text
IP
JA4
```

Vercel 还支持：

```text
header:<name>
```

适合 API。

例如客户端都有：

```text
X-API-Key
```

可以做到：

```text
每个 API Key 独立计数
```

规则：

```text
api-key-rate-limit
```

---

## 1. 第一次创建

```bash
vercel firewall rules add "api-key-rate-limit" \
  --condition '{"type":"path","op":"pre","value":"/api/"}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 60 \
  --rate-limit-keys "header:x-api-key" \
  --rate-limit-action deny \
  --yes

vercel firewall publish --yes
```

---

## 2. 已存在时

```bash
vercel firewall rules edit "api-key-rate-limit" \
  --condition '{"type":"path","op":"pre","value":"/api/"}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 60 \
  --rate-limit-keys "header:x-api-key" \
  --rate-limit-action deny \
  --yes

vercel firewall publish --yes
```

> 如果使用这种规则，最好再配合“必须存在 X-API-Key”的 Header 防护。  
> 否则没有 Header 的请求可能共享同一个空 Key 计数桶。

---

# 十四、指定域名 / Host 的限制

## 最稳定的命令方式：IP Block 限定 Hostname

例如同一个 Vercel 项目：

```text
www.example.com
api.example.com
```

只想在 API 域名封某 IP：

```bash
vercel firewall ip-blocks block 1.2.3.4 \
  --hostname api.example.com \
  --notes "API abuse" \
  --yes

vercel firewall publish --yes
```

解封：

```bash
vercel firewall ip-blocks unblock 1.2.3.4 \
  --hostname api.example.com \
  --yes

vercel firewall publish --yes
```

---

## Custom Rule 的 Host 条件

不同 CLI / WAF 版本对 Host 条件的暴露方式可能变化。

因此不要在可复用教程里盲目假设某个 Firewall condition type。

如果必须按 Host 做复杂规则，推荐：

```text
1. 先使用 Dashboard 创建一次
2. vercel firewall rules list --expand
3. 看真实 condition 格式
4. 再照实际格式写入自动化脚本
```

或者使用 `vercel.json` 的路由条件。

---

# 十五、国家 / 地区限制

这项不是我建议直接用未验证的 Firewall CLI condition。

更稳定的是：

```text
Vercel 注入 x-vercel-ip-country
+
vercel.json / Routing Middleware
```

例如按国家 Header 拦截。

## 如果项目目前没有 vercel.json

可以创建类似：

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "routes": [
    {
      "src": "/(.*)",
      "has": [
        {
          "type": "header",
          "key": "x-vercel-ip-country",
          "value": "XX"
        }
      ],
      "mitigate": {
        "action": "deny"
      }
    }
  ]
}
```

把：

```text
XX
```

替换为需要限制的国家代码。

---

## 如果已经存在 vercel.json

**不要执行：**

```bash
cat > vercel.json
```

因为会覆盖你现有配置。

正确做法：

```text
把 routes 条目合并到现有 vercel.json
```

然后检查 JSON：

```bash
node -e "JSON.parse(require('fs').readFileSync('vercel.json','utf8')); console.log('vercel.json OK')"
```

提交部署：

```bash
git add vercel.json
git commit -m "security: add country restriction"
git push
```

或者手动：

```bash
vercel --prod
```

> 地理限制非常容易误伤正常访问者，不建议为了压 Edge Requests 随便封大范围地区。

---

# 十六、Project Protection

Vercel CLI 可以查看：

```bash
vercel project protection
```

或者：

```bash
vercel project protection "$PROJECT_NAME" --format json
```

部分 Protection 功能取决于 Vercel 套餐。

---

## Password Protection

开启：

```bash
vercel project protection enable "$PROJECT_NAME" --password
```

关闭：

```bash
vercel project protection disable "$PROJECT_NAME" --password
```

---

## SSO

开启：

```bash
vercel project protection enable "$PROJECT_NAME" --sso
```

关闭：

```bash
vercel project protection disable "$PROJECT_NAME" --sso
```

---

## Git Fork Protection

开启：

```bash
vercel project protection enable "$PROJECT_NAME" --git-fork-protection
```

关闭：

```bash
vercel project protection disable "$PROJECT_NAME" --git-fork-protection
```

---

## Protection Bypass

开启：

```bash
vercel project protection enable "$PROJECT_NAME" --protection-bypass
```

查看：

```bash
vercel project protection "$PROJECT_NAME" --format json
```

> 公开博客 / 文档站通常不应该打开 Password / SSO。  
> 这些更适合 Preview、内部工具、后台站点。

---

# 十七、System Bypass：给自己的固定 IP 放行

这不是“加强限制”，而是用于：

```text
防护很严格
但不想误伤自己的固定 IP
```

添加：

```bash
vercel firewall system-bypass add YOUR_IP \
  --notes "my trusted IP" \
  --yes
```

指定域名：

```bash
vercel firewall system-bypass add YOUR_IP \
  --domain example.com \
  --notes "trusted admin IP" \
  --yes
```

查看：

```bash
vercel firewall system-bypass list
```

删除：

```bash
vercel firewall system-bypass remove YOUR_IP --yes
```

> Hobby / 套餐限制下，这项可能不可用。  
> 如果 CLI 返回 “IP Bypass is unavailable for this plan”，直接跳过即可。

---

# 十八、查看哪些请求被拦

查看最近 1 小时 403：

```bash
vercel logs --status-code 403 --since 1h
```

JSON：

```bash
vercel logs --status-code 403 --json
```

查询 OWASP：

```bash
vercel logs --query "ANOMALY_SCORE_EXCEEDED" --since 1h
```

实时：

```bash
vercel logs --follow
```

---

# 十九、每次修改后的标准检查流程

Custom Rule：

```bash
vercel firewall diff
vercel firewall rules list --expand
vercel firewall publish --yes
vercel firewall rules list --expand
```

Firewall API / Managed Rules / OWASP：

```bash
vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

重点看：

```text
active
draft
rules
crs
managedRules
```

如果：

```json
"draft": null
```

通常表示没有待发布配置。

---

# 二十、在你现有防护上，推荐增加什么？

你已经有：

```text
Attack Mode
Bot Protection
AI Bots Deny
anti-crawler IP Rate Limit
```

建议优先只再加：

```text
JA4 500 / 60s / challenge
User-Agent 基础脚本 Deny
OWASP：
  xss
  sqli
  rce
  lfi
  rfi
→ deny
```

不建议默认启用：

```text
国家封锁
Password Protection
Cookie 私有访问
Header 私有 API
Query 限制
```

这些应该在项目确实需要时再启用。

---

# 二十一、推荐的最终结构

```text
Internet
   ↓
Attack Mode
   ↓
Bot Protection
   ↓
AI Bots
   └── deny
   ↓
User-Agent 基础过滤
   └── deny
   ↓
OWASP CRS
   ├── XSS  → deny
   ├── SQLi → deny
   ├── RCE  → deny
   ├── LFI  → deny
   └── RFI  → deny
   ↓
IP Rate Limit
   └── 120 / 60s
   ↓
JA4 Rate Limit
   └── 500 / 60s → challenge
   ↓
正常站点
```

---

# 二十二、进阶防护快速执行版

这部分只增加新的防护，**不会重新创建你已经有的 Attack Mode / Bot Protection / AI Bots / anti-crawler**。

## 1. 自动 add / edit JA4

```bash
RULE_NAME="ja4-crawler-limit"

if vercel firewall rules list --expand 2>/dev/null | grep -Fq "$RULE_NAME"; then
  RULE_OPERATION="edit"
else
  RULE_OPERATION="add"
fi

vercel firewall rules "$RULE_OPERATION" "$RULE_NAME" \
  --condition '{"type":"path","op":"eq","value":"/assets","neg":true}' \
  --condition '{"type":"path","op":"pre","value":"/assets/","neg":true}' \
  --action rate_limit \
  --rate-limit-window 60 \
  --rate-limit-requests 500 \
  --rate-limit-keys ja4 \
  --rate-limit-action challenge \
  --yes
```

## 2. 自动 add / edit User-Agent

```bash
RULE_NAME="block-basic-scripts"

if vercel firewall rules list --expand 2>/dev/null | grep -Fq "$RULE_NAME"; then
  RULE_OPERATION="edit"
else
  RULE_OPERATION="add"
fi

vercel firewall rules "$RULE_OPERATION" "$RULE_NAME" \
  --condition '{"type":"user_agent","op":"re","value":"curl|Wget|wget|python-requests|Go-http-client|Scrapy|scrapy|aiohttp|libwww-perl"}' \
  --action deny \
  --yes
```

## 3. 发布 Custom Rules

```bash
vercel firewall diff
vercel firewall publish --yes
```

## 4. OWASP 五项 Deny

```bash
for RULE_ID in xss sqli rce lfi rfi; do
  FILE="/tmp/vercel-owasp-${RULE_ID}.json"

  cat >"$FILE" <<EOF
{
  "action": "crs.update",
  "id": "$RULE_ID",
  "value": {
    "active": true,
    "action": "deny"
  }
}
EOF

  vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID" \
    -X PATCH \
    --input "$FILE"
done
```

## 5. 最后检查

```bash
vercel firewall rules list --expand

vercel api "/v1/security/firewall/config?projectId=$PROJECT_ID&teamId=$TEAM_ID"
```

---

# 二十三、不要重复创建已有规则

如果：

```bash
vercel firewall rules list --expand
```

已经看到：

```text
anti-crawler
ja4-crawler-limit
block-basic-scripts
```

以后都不要再：

```bash
vercel firewall rules add "同名规则"
```

而应该：

```bash
vercel firewall rules edit "同名规则"
```

或者直接使用本文提供的自动判断：

```bash
if vercel firewall rules list --expand 2>/dev/null | grep -Fq "$RULE_NAME"; then
  RULE_OPERATION="edit"
else
  RULE_OPERATION="add"
fi
```

OWASP 则不同：

```text
不需要 add
不需要判断是否存在
```

始终：

```text
crs.update
```

即可安全地把目标状态更新为：

```text
active=true
action=deny
```

---

# 二十四、规则关闭 / 删除速查

查看：

```bash
vercel firewall rules list --expand
```

关闭某个 Custom Rule：

```bash
vercel firewall rules disable "RULE_NAME"
vercel firewall publish --yes
```

重新开启：

```bash
vercel firewall rules enable "RULE_NAME"
vercel firewall publish --yes
```

完全删除：

```bash
vercel firewall rules remove "RULE_NAME" --yes
vercel firewall publish --yes
```

IP 解封：

```bash
vercel firewall ip-blocks unblock IP --yes
vercel firewall publish --yes
```

OWASP 从 Deny 改回 Log：

```json
{
  "action": "crs.update",
  "id": "xss",
  "value": {
    "active": true,
    "action": "log"
  }
}
```

---

# 二十五、最重要的操作原则

```text
1. 先 list，再改规则
2. 第一次用 add
3. 已存在用 edit
4. edit 时重新写完整条件
5. Custom Rule 修改后要 publish
6. OWASP 用 crs.update，不分新增/修改
7. IP Block 重复项不要反复添加
8. JA4 阈值要比 IP 阈值宽松
9. User-Agent 只作为辅助
10. Header / Cookie / Query 只给确实需要的路径使用
11. 国家限制不要默认开启
12. 每次配置后都读取 Firewall API 验证
13. 出现异常先看 403 / 404 / 429，再判断是哪一层防护
```
