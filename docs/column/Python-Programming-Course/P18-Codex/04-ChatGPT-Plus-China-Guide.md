---
title: 04-用支付宝买美区 Apple 礼品卡，在 iPhone 上订阅 ChatGPT Plus
icon: blog
date: 2026-11-09
author: AI悦创
isOriginal: false
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

你好，本次教程带你实现 iPhone 上订阅 ChatGPT 会员！Claude 同理，但是不推荐，毕竟 Claude 高概率封号且使用条件苛刻！

## 1. 注册美区的 Apple ID

Apple 注册链接：[https://account.apple.com/account](https://account.apple.com/account)

![](https://blog.images.one.bornforthis.cn/docs-images/sha256/34/349556827459dfad4ac76a64223ffad33507f5bd1c8fc788df0d7b695eaeae81.png)

![](https://blog.images.one.bornforthis.cn/docs-images/sha256/a4/a4fb66ac8ded17163a8a80672a9b05adc2090ff8b72fc39004e73c0acf3b6911.png)

![](https://blog.images.one.bornforthis.cn/docs-images/sha256/0e/0ec6b2a0b92f864694db9acbdec89ddeba782b2b8cb9adedb2cb70bbaf1009fe.png)

![](https://blog.images.one.bornforthis.cn/docs-images/sha256/e0/e07b04bdebc84caa781056b6f5ec64f51b98bb1fc9e1a70a9b16f6031fac81d8.png)

这样就注册成功了，手机的 Apple Store 记得登录。只要 Apple Store 登录即可，手机设置里面的总账号不用切换和登录。





## 从哪一步开始

| 你手里有什么，或卡在哪里 | 本文中的对应步骤 |
| --- | --- |
| 有 iPhone 或 iPad，准备第一次内购 | [先准备美区 Apple 账户](#准备美区-apple-账户)，确认可用再花钱 |
| 已有美区 Apple 账户 | [用支付宝购买礼品卡](#用支付宝购买礼品卡) |
| 支付宝找不到 Pockyt，或礼品卡缺货 | [寻找支付宝入口或改用电脑](#找不到活动入口时)，缺货时看 [SEAGM 的完整流程](#在-seagm-买卡) |
| 已有卡密，或钱已到账但 Plus 未生效 | [兑换、订阅和核对收据](#兑换礼品卡并订阅-plus)，如提示购买未完成，见 [Apple 购买审核](#iphone-弹出「购买未完成」怎么办) |
| 有海外银行卡，或考虑虚拟卡、人民币代付 | [比较付款方式](#比较付款方式)，再核对自己的开户地区、费用和账号归属 |
| 拿到的是 OpenAI Gift Card | [把 OpenAI 礼品卡兑入 ChatGPT Wallet](#在美国用-openai-礼品卡订阅网页版) |
| 想升 Pro，或买了会员但 Codex 仍提示限额 | [比较 Plus 和 Pro](#根据实际用量选择-plus-或-pro)，或[按 Codex 报错排查](#订阅后怎样登录-codex、查看额度与处理报错) |

::: important 付款前先确认服务地区

OpenAI 要求本人位于支持地区，官网付款还要求卡由支持地区的银行发行。截至本文整理时，ChatGPT 支持名单未列中国大陆、香港和澳门。从名单以外的地区使用可能受到账号限制。美区礼品卡决定在哪个商店兑付，不能改变 ChatGPT 的服务范围。国内银行发行的 Visa、Mastercard 双币卡也仍按发卡行所在地判断。

:::

## 准备美区 Apple 账户

**已经在用美区 App Store 的读者，先点商店右上角头像核对账号与地区。** 确认能下载 OpenAI 发布的 ChatGPT App，再买礼品卡。美区卡只能兑进美区账户，售出的兑换码往往无法退换。

### 新建账户或只切换商店账号

**新建账户。** 如果已经有一个可接收美区礼品卡的本人账户，可以跳过注册。准备一个能收信的邮箱、可长期接收验证码的电话号码和自己的出生日期。Apple 建议希望在新地区不登记付款方式的用户，到达当地后创建账户。

::: tabs

@tab iPhone

新设备设置途中可从“忘记密码或没有账户？”进入“创建免费 Apple 账户”。已经在使用的设备则可打开 App Store，点头像，选择“创建新 Apple 账户”。如果已有登录状态导致这个入口不显示，点本节的「浏览器」标签，使用 Apple 账户网站注册。按屏幕提示设置邮箱、密码和地区，登记账单信息。Apple 的 App Store 注册流程允许在显示“无”时选它，然后验证手机号和邮箱。

![新设备设置过程中创建免费 Apple 账户的入口 =720x661](https://blog.images.one.bornforthis.cn/docs-images/sha256/13/1317a60a76f26e59a80d3908f60cc355a17934f26fd164a436cc6e3ccc950c71.png)

![App Store 账户菜单中的创建新 Apple 账户 =720x637](https://blog.images.one.bornforthis.cn/docs-images/sha256/9d/9dc7e70fb029e3a2b3bb785809930aa7b53fbf17f81ea82319453d15573a6ed8.png)

@tab 浏览器

进入 Apple 账户网站，点“创建你的 Apple 账户”。填写邮箱、密码、地区、生日与手机号，点“继续”，完成邮箱和电话验证。用这一账号登录 App Store 完成首次使用设置。[Apple 账户入口](https://account.apple.com)

![Apple 账户网站右上方的创建账户入口 =720x452](https://blog.images.one.bornforthis.cn/docs-images/sha256/07/07c201c03f79ba86d2088a33bc297fcae6c37e82d92e22f72d8e0304fc7cc67f.png)

@tab Mac

打开「系统设置 → 登录 → 没有账户？」。按提示填写账户资料，验证邮箱并完成注册。

![Mac 系统设置中的 Apple 账户登录和注册入口 =720x682](https://blog.images.one.bornforthis.cn/docs-images/sha256/65/65df4a6c181895dabb206353cb5777c54d3a8ef7fdb554cc74f0ced11b1baef9.png)

@tab Windows

打开 Apple Music 或 Apple TV，从边栏底部选择「登录 → 登录 → 创建新 Apple 账户」。按提示填写资料并验证邮箱。

:::

新账号只用于商店时，在 iPhone 的「设置 → 你的姓名 → 媒体与购买项目」中切换账号，再打开 App Store 确认购买身份。这样可以保留原有的 iCloud 登录。

### 现有 Apple 账户更改地区

先处理旧区的余额、欠款和正在生效的订阅。取消订阅后要等本期结束。会员资格、预购、影片租借和退款也要处理完毕；若余额小到无法购买任何项目，可联系 Apple 支持处理。家庭共享可能阻止改区。原国区账号若用于 iCloud，更改地区还可能涉及云上贵州所存 iCloud 数据的迁移，先阅读确认页。只想在商店使用另一个账号，可采用上一节的做法。

::: tabs

@tab 浏览器

1. 在「Apple 账户 → 个人信息 / Personal Information」打开「国家/地区 / Country or Region」。

![网页版 Apple 账户的个人信息与国家或地区入口 =720x357](https://blog.images.one.bornforthis.cn/docs-images/sha256/27/27f0e8e797d8630bab37b1dbfc575f0d413070fea5e5219f22557e52261a6dbc.jpg)

2. 选择「United States」，点「Continue」。接下来会要求检查付款资料。

![选择 United States 后的地区变更确认页 =720x419](https://blog.images.one.bornforthis.cn/docs-images/sha256/dc/dc051b872f95afad638680032bcb40d92264e2c4410314d6b6587221481ab1c3.jpg)

3. 展开「Payment Type」。默认值可能是信用卡；若菜单底部有「None」，选中它。填写本人姓名、街道、州、城市、邮编和电话，保存。

![付款方式下拉菜单中可选的 None =720x454](https://blog.images.one.bornforthis.cn/docs-images/sha256/40/4018735c27df1dd49190ce690f59a91baa8dcd82376b2f8a02ea610f5f6f71ed.jpg)

@tab iPhone

“设置 → 姓名 → 媒体与购买项目”，按版本进入“查看账户”或直接点“国家/地区”。

![iPhone 的账户设置及国家或地区选项 =720x788](https://blog.images.one.bornforthis.cn/docs-images/sha256/41/417e63d71c2e8a0ceb4858e0bf0d4a19297bc4e58f6de1ec1aa21e626d6a61e5.png)

@tab Mac

Apple Music 或 Apple TV 的菜单栏选“账户 → 账户设置 → 国家/地区”。

![Mac 的账户设置及国家或地区选项 =720x497](https://blog.images.one.bornforthis.cn/docs-images/sha256/5d/5d373c642bb22e49b8bbd7454d079044531290ca38a211d8f7b12c5351d04499.png)

@tab Windows

Apple Music 或 Apple TV 的边栏点姓名，选“查看我的账户 → 更改国家或地区”。

:::

选好国家或地区，阅读并接受当地条款，按要求填入新地区有效的付款信息和本人真实的账单地址，提交并核对账户设置。是否可以不登记付款方式，以该账户当时的页面为准。

::: details 菜单里没有「无」，或更改地区后无法保存

先看是否真正展开了付款方式列表，再查原区欠款、iCloud+ 等仍生效的订阅、家庭组织者的「购买项目共享」。家庭成员可能需要退出家庭组。能选 None 却存不了，核对姓名、地址、五位邮编和电话。Apple 也可能按账户或地区要求有效付款方式；一次截图中出现 None 不代表每个账号都有。

:::

::: tip 买多少面额才够付一个月？

原文使用俄勒冈州（Oregon，缩写 OR）账单地址，该州无一般销售税，示例按 \$19.99 扣款，\$20 卡剩 \$0.01。Apple 按实际账单地址计算适用税费。填自己真实的州、市和邮编；如果结算页列出的总额超过 \$20，购卡预算也要相应增加。

:::

## 用支付宝购买礼品卡

Pockyt Shop 是 Pockyt 经营的礼品卡商店，原文列出的经营主体为 Yuansfer, Inc.。礼品卡由合作零售商兑付，成功售出后通常不退。原作者记录的活动位在 2026 年 10 月 28 日可见。支付宝活动名称和位置会变，认准**美国地区**和 **App Store & iTunes USA** 这两个字样。

1. **打开美国城市的活动页。** 在支付宝首页左上角的城市选择器选美国城市，截图选洛杉矶。在「超值抢购」里点「大牌礼卡低至9折」。这一步切换的是支付宝的活动展示城市。

![支付宝首页的美国城市与大牌礼卡入口 =360x737](https://blog.images.one.bornforthis.cn/docs-images/sha256/5e/5e36d06c26f4cce31608bcfef954388089d05d5656239d5aafb33e0f4255d43f.jpg)

2. **找到礼卡商家。** 在「大牌礼卡」活动页一直滑到底，找到「更多大牌 折扣礼卡」。

![向下滑动支付宝的礼品卡活动页 =360x732](https://blog.images.one.bornforthis.cn/docs-images/sha256/7f/7f676f108126e8dc83cc13665bd3a856ac8bb58b84d4ac30826f6ffa5927af51.jpg)

3. **打开商店。** 点活动列表中的「Pockyshop」。它打开的店名是 Pockyt Shop。

![活动底部的 Pockyshop 商家入口 =360x739](https://blog.images.one.bornforthis.cn/docs-images/sha256/e9/e95b640d41c0b25708e3d4ebd174f0ae276fa0f4ea1584b5279265d0a41e5128.jpg)

4. **选卡、填邮箱。** 商店地区选美国，打开「App Store & iTunes USA」。先核对卡面地区，再填自己能收信的邮箱。如果含税月费是 \$19.99，选面额 \$20。标价、折扣后的订单金额和卡面余额可以是三个不同的数。

![美国地区的 App Store 与 iTunes USA 礼品卡 =360x739](https://blog.images.one.bornforthis.cn/docs-images/sha256/68/680fa2bc2443f6390d6963354b8f1cd4ea410a5b134ba38bd932fb210676ea1b.jpg)

5. **看清人民币实付再确认。** 7 月 18 日记录中 \$19.99 按参考汇率约 ¥135.40，实际购买 \$20 卡支付 ¥135.98（1 USD = 6.81244 CNY）。10 月 13 日的付款页显示折后订单 \$19.96，汇率 6.73527，应付 ¥134.44。请用今天页面上的金额做决定。

![十月复核时支付宝显示应付 134.44 元 =720x613](https://blog.images.one.bornforthis.cn/docs-images/sha256/59/5987c25fc7571b110a80436a747174332d487f0c7e0427890eaaa3d9ec8eacaa.jpg)

6. **收藏商店、取码。** 点 Pockyt Shop 右上角星标收藏。购买成功后检查下单邮箱，也可在商店底部「订单」里找兑换码。不要把未兑换的卡密发给别人。

![商店页面右上角的收藏星标 =360x738](https://blog.images.one.bornforthis.cn/docs-images/sha256/22/227e2594eb530a896d667c969ca51fc86141aed181e13076bdd3482582476792.jpg)

拿到兑换码后，直接去 [App Store 兑换并订阅 Plus](#兑换礼品卡并订阅-plus)。

### 找不到活动入口时

::: tabs

@tab 支付宝搜索

活动已撤下，或者站内搜索不到 Pockyt 时，把下面这一整行复制到**支付宝顶部搜索框**。在结果中点「访问网页」。进入商店后选美国，接回上面的第 4 步。下图搜索框里是另一次分享生成的地址，原作者 10 月 9 日提供的入口如下。

```text
https://ur.alipay.com/_5pdWVYNxT2sYKHaPeYkNZh
```

![支付宝搜索框粘贴分享链接后出现访问网页 =720x517](https://blog.images.one.bornforthis.cn/docs-images/sha256/e2/e2b5106976353e10630a7c92b5ab8cf63d428f3aaf4ad8c3ce64275d475dce48.jpg)

![分享入口打开的 Pockyt Shop 美国礼卡目录 =360x773](https://blog.images.one.bornforthis.cn/docs-images/sha256/b8/b89bf8fdd4fcdd2e64620ce14c534ff82dda53736734df78d6acf31a62d0c476.jpg)

@tab 电脑网页版

打开 [Pockyt Shop 商店](https://shop.pockyt.io/)，在右上角注册或登录。左上角地区选美国，从「全部礼卡」打开「App Store & iTunes USA」。输入面额 USD 20，核对币种、收码邮箱和付款方式。11 月 6 日原作者在网页上看到支付宝和微信支付选项，当天只核对到结账选项，未用网页版付款。

![Pockyt 网页版美国区礼品卡目录 =720x242](https://blog.images.one.bornforthis.cn/docs-images/sha256/14/14f503140ca83680580bab771f965cca1a0d5dc1b1345b6b7bb0e32517435714.jpg)

![Pockyt 网页版的面额与付款选项 =720x297](https://blog.images.one.bornforthis.cn/docs-images/sha256/2c/2ca7eca5c771782b711774b37381b6383f996587ff549f6d51f41f7668daa315.jpg)

:::

::: details 旧版支付宝：从「优惠 / Coupons」找入口

旧版支付宝曾从底部「Coupons / 优惠」进入「大牌礼卡」。如果你的首页和上面六步的截图不同，可以按下图辨认旧界面。四张图分别是城市、优惠菜单、美国卡种以及 7 月那笔付款。

![旧版支付宝的美国城市选择 =360x741](https://blog.images.one.bornforthis.cn/docs-images/sha256/e2/e257d3d48701cd1f23ef8980115123714c6240543bee3f666847aabc2cad41dc.jpg)

![旧版 Coupons 中的大牌礼卡活动 =360x738](https://blog.images.one.bornforthis.cn/docs-images/sha256/c3/c33061808e409467255019c5e4edf4a59d0860fbcccd2ff0692f3d9d2f6fb338.jpg)

![旧版商店中的美区 App Store 礼品卡 =360x731](https://blog.images.one.bornforthis.cn/docs-images/sha256/87/87bb1b026ffb1507c2801aae257a83321a69486e94dbc65cb4c487c7cc8dda5b.jpg)

![七月购买礼卡的支付宝付款记录 =720x655](https://blog.images.one.bornforthis.cn/docs-images/sha256/80/80e1271badf44a565f219e75ffb8b004c89023e1cd8fa2e7943fce78f1133c5b.jpg)

:::

### 商品缺货时

如果商品页显示缺货，可以联系 Pockyt Shop 的客服（微信公众号「PockytShop」或 `shopsupports@pockyt.io`），也可以用[下面的 SEAGM 流程](#在-seagm-买卡)。

::: details 查看 2026 年 10 月至 11 月的面额与补货记录

10 月 22 日，Pockyt 的固定面额为 \$10–200，也可自选 \$2–500。10 月 28 日有读者按活动入口购卡成功。11 月 4 日一度缺货又补货；5 日客服回复补货时间待定；6 日中午客服邮件确认恢复售卖，原作者当天也看到可下单。

![十月商品页记录的固定面额和自选面额 =360x899](https://blog.images.one.bornforthis.cn/docs-images/sha256/cf/cf8eabbc39eed80d29ce3e040e10ab75c0ed093362212d1861aabb9024da2820.jpg)

![十一月五日客服回复补货时间待定 =360x429](https://blog.images.one.bornforthis.cn/docs-images/sha256/0e/0e5784544ceac885a173e34948758b39cecdfcedc1fd1970a8fea6f96fc0aa39.jpg)

![十一月六日客服确认补货的邮件 =720x776](https://blog.images.one.bornforthis.cn/docs-images/sha256/de/de650bd4fdf80c8db04eae50f2c75050c4156694a9da449133b50c8426f48f82.jpg)

:::

## 兑换礼品卡并订阅 Plus

1. 在 iPhone 上打开 App Store，点右上角头像。先确认这里登录的就是准备好的美区 Apple 账户。
2. 点「兑换充值卡或代码 / Redeem Gift Card or Code」，手动输入或粘贴完整卡密，点「Redeem」。看到已增加的金额后回到账户页，检查姓名下方的余额。SEAGM 流程里已兑换成功的卡，直接从下一步继续。

### 在 iPhone 上确认由谁收款

1. 用原来的登录方式打开 ChatGPT。若之前使用“通过 Apple 继续”且隐藏了邮箱，账号可能显示为以 `@privaterelay.appleid.com` 结尾的地址，此时仍用同一 Apple 账户登录。
2. 在对话顶部找升级按钮，也可以打开侧栏，点自己的名字进入设置，选 **Upgrade** 或带套餐名称的升级选项。两张官方旧版截图分别展示这两个入口，按钮名称以当前版本为准。

![ChatGPT iOS 旧版对话页面顶部的 Get Plus 入口 =360x780](https://blog.images.one.bornforthis.cn/docs-images/sha256/4b/4bcfe307f5c970f49d021d0aac06f9eea984dab80c6daa9038e36fd27a22e4ce.webp)

![ChatGPT iOS 设置页的套餐升级和恢复购买入口 =720x649](https://blog.images.one.bornforthis.cn/docs-images/sha256/ac/ac314cfeca5061d90e65af6287afc9afb011457412cd0fe7f5d6445d08c0c0c5.webp)

3. 想用 Apple 礼品卡余额时，核对出现的是 **Apple 的 App Store 购买确认框**，并检查商品、续费金额及扣款账户。如果按钮打开了浏览器，请先辨认网页收银台使用的 ChatGPT 账号。网页结账由 ChatGPT 管理，不能使用 Apple 礼品卡余额。
4. 如果当前 App 没有想买的套餐，可以在网页头像菜单里选 **Upgrade plan** 查看本账号可购买的方案，并核对定价页面底部的国家或地区。原记录在美区商店看到过特定 Pro 档位；截至 2026 年 11 月 9 日，OpenAI 当前说明是以账号实际提供的计划和结账途径为准。若出现内购暂不可用、购买按钮灰色，稍后再试。

![OpenAI 网页端套餐选择示例，当前账号提供的价格和套餐可能不同 =720x377](https://blog.images.one.bornforthis.cn/docs-images/sha256/11/113b9123453d1fdb1c4559c5447038870bbb5e3314c383ddf921dca598903f07.webp)

5. 如果 Apple 已出收据而 ChatGPT 显示 Free，先核对原 ChatGPT 账号邮箱和登录方式，再从 App 设置选择 **Restore purchases**。若仍未同步，重新登录原账号。向支持人员提供交易时间和订单凭证即可，避免重复订阅。

确认购买成功后，在「iPhone 设置 → 你的姓名 → 订阅」查 ChatGPT 的有效期，留下 Apple 收据。以后管理续费也回到这里。

::: details 新账户、小额 App 和升级 Pro 的历史记录

原文还给出一个新账户的个人经验：有人先购买自己用得到的低价 App，再订 Plus。截图是搜索「0.99」的结果。这些购买会花掉余额，也不能保证通过审核。若只准备了 \$20，要重新算一遍还剩多少。遇到「购买未完成」时，请按下文联系 Apple 处理。

![美区 App Store 中的低价应用示例 =720x849](https://blog.images.one.bornforthis.cn/docs-images/sha256/a0/a0f4e95ce9f7220410f102a2a3fb7ebf212e5c922621ce63bc93c344293c59d0.jpg)

2026 年 10 月 22 日的美区 App Store 记录中出现过 \$100 和 \$200 的 Pro 项目。原文给出的路径是先开 Plus，再查看 App 中可用的升级选项。计划、地区和账户会影响 App 显示的选项。想从 Free 升 Pro 而 App 内没有入口时，在 ChatGPT 网页的「升级套餐」查看可用方式。先确认能走哪条路，再决定是否购买大额礼品卡；Apple 余额不能转到网页支付。

:::

如果兑换 Apple 礼品卡时看到 `This code has already been redeemed`，先查当前 Apple 账户余额和兑换记录。若金额没有入账，保留原购卡订单联系卖家核对，再向 Apple 支持确认兑换状态。不要重复购买同一面额来判断第一张卡是否有效。

### 提示必须提供付款信息

先打开「App Store → 头像」看余额，再对照 Apple 购买框的含税总额。\$20 减去 \$19.99，只剩一美分；少量销售税、未结款项或买过其他 App 都可能造成余额不足。Apple 可能转而要求登记另一种付款方式。

若金额不对，在「设置 → 你的姓名 → 付款与配送」核对账单姓名、州、市、邮编和电话，或登录 Apple 账户的「Payment & Shipping」。按真实地址纠正后，回到 ChatGPT App 查看新总额；余额不足就补到足额。原文 10 月 22 日的读者在更正 Oregon 账单资料后用余额付款成功。若资料正确且余额足够，Apple 对部分购买仍可要求有效银行卡。看到「购买未完成，提交申请至 Apple 支持以供审核」请按[购买审核步骤](#iphone-弹出「购买未完成」怎么办)提交申请。

**网页里的 Apple Pay 会要求绑卡。** 其他网站的 Apple Pay 通常调用钱包中的银行卡。要用已经兑换的美区 Apple 余额订阅 ChatGPT，请从 iOS App 发起内购。如果收到收据，ChatGPT 仍显示 Free，先核对 ChatGPT 登录方式和邮箱，再到 App 的「Settings → Restore purchases；若未显示，进入 Account → Restore purchases」恢复购买。已有有效订阅时先查归属，避免同一周期重复下单。

### 核对 Apple 余额、账单地址与付款方式

先选你手边的设备，查余额，再核对账单：

::: tabs

@tab iPhone

打开 App Store，点头像。姓名下方显示当前账户的余额。

![iPhone 上 App Store 账户名字下面的余额 =720x720](https://blog.images.one.bornforthis.cn/docs-images/sha256/d7/d7123326e54eb7480cb5cf35b99b7ba303d415c00218a8edfbccd0a98fb54252.png)

“设置 → 姓名 → 付款与配送”。更新现有方式时点相应条目进入编辑，更换时点“添加付款方式”。移除时点“编辑”，再点减号及“移除”。

![iPhone 上的付款方式列表和添加入口 =720x836](https://blog.images.one.bornforthis.cn/docs-images/sha256/d9/d982938d016c229c9f2ecdfbc14eb052eab56adec29abaca2d642b1e8fda7909.png)

![iPhone 编辑付款方式时左侧的移除按钮 =720x663](https://blog.images.one.bornforthis.cn/docs-images/sha256/2e/2e6bf8834aa6d87a76d37610e7f703743628e089eef85c91c201b8bd8458696e.png)

@tab Mac

打开 App Store，在边栏底部查看当前账户的余额。

![Mac 上 App Store 边栏底部的余额 =596x670](https://blog.images.one.bornforthis.cn/docs-images/sha256/05/0509c5d66b8728092a74cfa371c887e5dc39b0aa1fd882ea3978b2061fb0d8c2.png)

App Store 点姓名，再点“账户设置”，在付款信息旁点“管理付款方式”。选择已有方式进行编辑或移除，也可添加新的方式。

![Mac 的管理付款方式界面 =720x509](https://blog.images.one.bornforthis.cn/docs-images/sha256/cf/cfe75488971568b016729486d5cc8479adee79353beaa4db3a8ca8cb867dd381.png)

![Mac 的付款方式编辑界面 =720x460](https://blog.images.one.bornforthis.cn/docs-images/sha256/6e/6e106fcca5b8cb87826b9ea78546e615b92b0b3f587398d0150ec0f23c6dda76.png)

@tab Windows

在 Apple Music 或 Apple TV 边栏点姓名，查看这个账户的余额。

![Windows 上 Apple Music 中的账户余额 =360x532](https://blog.images.one.bornforthis.cn/docs-images/sha256/75/75fc354132983f04ce882cf421dac3b07086abc50f1e3f4d99dd241414b3f7a9.png)

打开 Apple Music 或 Apple TV，点自己的姓名，再点“查看我的账户”。在“付款信息”旁点“管理付款方式”，打开对应条目后编辑或移除。

![Windows 上 Apple Music 的查看我的账户入口 =360x556](https://blog.images.one.bornforthis.cn/docs-images/sha256/b6/b6b366b0a58bf9bc32e578726e91b8513dde407ec362d34bf1a0fbc269594472.png)

![Windows 的付款资料编辑界面及移除选项 =720x407](https://blog.images.one.bornforthis.cn/docs-images/sha256/93/93724644f2ff9e4e294802568fdf06e361ab9bb80f196f561ffbf451f634f393.png)

:::

如果姓名下没有金额，当前账户没有余额。先核对登录账号、兑换结果和最近的购买记录，再重新登录商店复查。

**再核对扣款。** Apple 会先尝试用账户余额支付全额。若余额不足，系统会尝试主要付款方式，再按账户里列出的其他付款方式顺序扣费。个人余额不能给“家人共享”的其他成员消费。某些订阅即使余额够，也会要求账户登记有效付款方式。美国 App Store 的税额可能由真实账单地址所属的州、县、市等决定。先看结账总额，再决定是否还需补余额或付款资料。

**更新或移除银行卡。** 如果账单地址变更，更新至银行登记的真实资料。若需要换卡，可先添加新卡再移除旧卡。有正在续费的订阅、有未结清款项，或家庭组织者开着“购买项目共享”时，Apple 可能要求保留至少一种付款方式。

美国 Apple 礼品卡按美国商店规则使用。卡一旦兑到账户中，卡码就不能再消费或再次兑换。除法律另有规定，一般不能兑现、退款或转卖。Apple 可对涉及欺诈或违法取得的礼品卡作废、拒绝退款或停用有关账户，因此应保存正规商家的订单和收据。

## iPhone 弹出「购买未完成」怎么办

先看弹窗里的动词。要求「提交申请至 Apple 支持以供审核」时，处理方是 Apple。这个提示可能出现在第一次订 Plus、已有 Plus 升 Pro，也可能出现在自动续费时。即使余额足够，Apple 仍可要求审核某一笔购买。

::: details 对照中文与英文的购买审核弹窗

![中文购买审核弹窗示意，继续和以后再说两个按钮 =720x314](https://blog.images.one.bornforthis.cn/docs-images/sha256/74/745bdc2e15b7c8eb0641b9705cfa5f0ef93664e09059501943fe66ecec63e582.webp)

![英文购买审核弹窗示意，Continue 和 Not Now 两个按钮 =720x345](https://blog.images.one.bornforthis.cn/docs-images/sha256/a7/a7d3792e15cbf643755729a8e5ad5323ff9f756f6b3d7681f0c20b41dbe48796.webp)

:::

| 你看到的文字 | 下一步 |
| --- | --- |
| 购买未完成／Purchase Not Completed，要求提交审核 | 停止重复付款，按下面的步骤提交一次。 |
| Your Purchase Could Not Be Completed，提示联系 iTunes Support | 这句话也可能由付款方式失效、地区不符引起。先核对商店地区、余额及含税总价，再请 Apple 判断账户状态。较早版本的「Contact iTunes Support to complete this transaction」也需要客服核实。 |
| 必须提供付款信息才能继续购买 | 查当前 Apple 账户、余额、账单资料和含税总额。某些购买即使用余额，Apple 也可能要求登记合适的付款方式。 |
| In-app purchases are currently unavailable，购买按钮变灰 | 核对 App 内购可用性和设备上的购买限制。 |
| 礼品卡还没买到、买卡订单失败 | 回到礼品卡订单查付款和发货状态；这笔交易尚未进入 Apple 的订阅审核。 |

### 提交一次申请，记住下一次尝试的时间

1. 看见「购买未完成」后，先停下。选择「继续」，按提示提交，再核对显示的收件邮箱。出现「申请已提交」就可以退出。截图里的处理时限是最多 72 小时，Apple 说明联络客服不能加快审核。
2. 如果按钮无响应、弹窗只有 OK，或者已收到审核完成邮件却仍不能购买，在「以后再说」后走下面的官方客服入口。已经提交的申请先按页面要求等待。
3. 等待期间可以继续用手机、免费版 ChatGPT 和已生效的订阅。原案例的客服要求这段时间暂停购买，包括其他 App 和内购。也先放下新卡兑换、改区和换账户重试。读者曾报告反复尝试延长了等待，但 Apple 没有公布重新计时的规则。
4. 到客服约定的时间，或收到处理完成邮件后，先查购买记录和会员状态。仍未生效，再用原 Apple 账户在 ChatGPT App 内试一次。若仍失败，保存时间、报错和案件编号，再联络客服。

![提交后的确认页示意，提示将通过 Apple 账户邮箱通知结果 =720x425](https://blog.images.one.bornforthis.cn/docs-images/sha256/28/28aa7df6e7562c47e8b86157c69aca13144df14905683c54c4375b9b4972c5d4.webp)

### 怎样找到美国 Apple 支持的在线聊天

下面是原作者在 2026 年 10 月使用过的英文页面。地区、服务时段和界面更新会改变可见的联系选项。使用发生问题的 Apple 账户登录。

1. 在浏览器打开 `support.apple.com/billing`。滚到 **Still need help?**，选择 **Get started**。

![Apple 账单支持首页底部的 Get started =720x205](https://blog.images.one.bornforthis.cn/docs-images/sha256/6d/6d52f9ca4efabfd0783ac3978fe28d411742d9de59e2afb9bfd8d580cf1d0db7.webp)

2. 在 **What's going on?** 下选 **More**，在主题列表中选 **Unable to purchase**，然后点 **Continue**。

![账单与订阅问题选择 More =720x426](https://blog.images.one.bornforthis.cn/docs-images/sha256/00/00e677bc6dfc847fa5b8724d79fc2e99d5720d0d425188401e4ada84dc82ad9c.webp)

![主题选择 Unable to purchase =720x387](https://blog.images.one.bornforthis.cn/docs-images/sha256/28/28ed2eabe8d0b995c002c913a3cac220f6e668b76c2a9b58bac5f0344aa252a7.webp)

![确认主题后选择 Continue =720x403](https://blog.images.one.bornforthis.cn/docs-images/sha256/59/5944a1944fd3de3929ae605a075fc273a2ba20d64797bde7fe323b0dbde4f516.webp)

3. 下一页先显示帮助文章。滑到文章列表最下方，点 **Get more help**。在 **Contact Options** 中点 **Live Chat**。如果当时只提供 **Call us**，可以选择电话或换个服务时段再访问。需要中文沟通时，也可以通过 Apple 中国大陆官方支持，请客服协助转接美区账户的处理团队。

![帮助文章列表末尾的 Get more help =720x348](https://blog.images.one.bornforthis.cn/docs-images/sha256/f5/f56e4c0e6780b9bf4f370892bd7e6ea629a016466b616e2266324b1d67a7b4ad.webp)

![联系选项中的 Live Chat =720x232](https://blog.images.one.bornforthis.cn/docs-images/sha256/0f/0f516f2c15abfad4e0eda3f23042a64207c5acd8b84ab9e352cb3dbbcb00c0e5.webp)

4. 核对姓名和账户邮箱。在 **Item title** 填 ChatGPT。尚未生成订单号，**Order number** 可以空着。在 **Additional Details** 写明订阅档位、余额是否足够以及实际报错。下面的英文示例可按需替换。

![联系表单中的产品名称、订单号和问题说明 =360x458](https://blog.images.one.bornforthis.cn/docs-images/sha256/2d/2dd76301336f4c4d9e41ca409e468efccc3c40484781fc169732313257081b93.webp)

```text
I am trying to pay for ChatGPT Plus in the iOS app with my Apple Account balance.
My balance covers the amount displayed, but I get a “Purchase Not Completed” message.
Could you check the purchase restriction and tell me when I should try again?
```

5. 如果官方客服要求 **Support PIN**，自己在浏览器打开 `account.apple.com` 并登录，在页面底部选「支持 PIN」→「生成 PIN」。把这次生成的四位支持 PIN 提供给正在联系的 Apple 客服。登录密码、设备解锁码及双重认证验证码均保留在自己手里。若设备收到 Apple 账户确认提示，核对它对应的是自己刚发起的服务请求。

![官方客服说明如何生成一次性支持 PIN =360x568](https://blog.images.one.bornforthis.cn/docs-images/sha256/28/2807a7855768f5f4c48558b11d20d5b3b562d67c8965be763a8e51ad2d89e7b1.webp)

![Apple 账户页面底部的支持 PIN 按钮 =720x358](https://blog.images.one.bornforthis.cn/docs-images/sha256/0b/0bf99c42f95413be9b2c5daea48f92a62f118b331b5966405cc9778b9c6131cc.webp)

6. 聊天结束前，请客服给出具体的等待时间，并询问这段时间是否需要暂停其他购买。原作者收到的答复是等 48 小时，下面是该次对话记录。你的案件以实际答复为准。

![原案例中客服确认调整账户，要求等待 48 小时并暂停购买 =720x796](https://blog.images.one.bornforthis.cn/docs-images/sha256/2b/2b6f25426d672d5ed7e9931c9155a9e63ba2ae92703cb196702ce83fdc3ab66c.webp)

| 什么时候说 | 可以发给官方客服的英文 |
| --- | --- |
| 想确认等待期限 | When can I attempt the subscription again? Should I pause all App Store purchases until then? |
| 已等满，仍有原报错 | I contacted Support on [date], waited [number] hours without making purchases, and got the same message today. Could you check case [number]? |
| 多轮未解决 | I have completed [number] review periods. Could a senior advisor review my case? |

### 等完仍买不了，余额和续费怎么处理

原作者截至 2026 年 11 月 8 日汇集了 27 条自身、读者与社区案例。有人等一天恢复，有人等到第 5 天或约 144 小时才成功，也有人等六轮仍失败。有人的 Plus 和其他订阅能买，唯独 Pro 200 要审核。个别人改在自己的 iPad 上使用同一账户后成功，也有用户换设备或联系高级专员后依旧失败。这些记录可以用于安排等待时间，无法推算某个账户的成功率。

- **余额减少、会员没到。** 在 iPhone「设置 → 你的姓名 → 媒体与购买项目 → 查看账户」核对余额，在 Apple 购买记录（`reportaproblem.apple.com`）核对有没有正式订单。若有扣款，先保存凭证并找对应的账单支持；重复支付可能造成两笔订单。
- **自动续费被拦。** 原余额仍在 Apple 账户中。等审核结束先查订阅状态，确认确实已到期、也没有已扣款订单，再手动订阅一次。
- **收到通过邮件仍买不了。** 已有邮件晚到、邮件到后还需要再等数小时的案例。等完再试一次仍失败，向客服提供原案件号和这次尝试时间。多轮仍无结果可请求高级专员跟进，升级工单也不能保证通过。
- **暂时改用别的支付路线。** 先确认 Apple 这笔订阅是否已生效或待扣，再决定要不要在网页端用符合条件的银行卡另行开通。Apple 余额仍归原账户，其他平台用不到；第三方也不能替 Apple 解除审核。
- **升级大额套餐。** 新账号、刚改区或大额内购在案例中较常见，Apple 未公开判定规则。使用自己注册的账户、保留购卡凭证，按需要充值。曾有用户在审核后账户被停用，具体原因未获 Apple 确认；遇到停用应先向 Apple 申请恢复。在确认能够使用前一次充入数百美元，会承担余额暂时无法动用的风险。

::: details 展开 27 条审核记录，查看每次实际等待了多久

同一个人有多个账户的情况仍按一条记录计算。「仍失败」指记录发布时的状态。下列案例来自原作者和读者，不能用于计算官方审核通过率。

| 时间（2026 年） | 当时发生了什么 | 已知结果 |
| --- | --- | --- |
| 作者记录，日期未列 | 客服检查账户 | 要求暂停购买，48 小时后再试。 |
| 作者朋友，日期未列 | 等过最初的 72 小时，又联系支持 | 再等数天后付款成功。 |
| 11 月 8 日 | 从 Plus 升 Pro 100，等满 72 小时后联系高级专员 | 多等 24 小时仍失败。 |
| 10 月 29 日 | 同一读者的三个账户分别提交 | 一个约 72 小时成功，一个经过第二轮成功，另一个约 144 小时成功。 |
| 10 月 26 日 | 从 9 月开始多次申请升 Pro，也联系了人工支持 | 六轮后仍未成功。 |
| 10 月 26 日 | 提交后账户被停用 | 次日已无法使用卡内余额，停用原因未公布。 |
| 10 月 25 日 | 多轮等待后由美国高级专员回电 | 专员仍要求等 72 小时，该轮结束后恢复。 |
| 10 月 25 日 | 续费时余额不足，补充余额后 iPhone 购买受到审核 | 在自己的 iPad 上完成订阅。 |
| 10 月 22 日 | 升 Pro 先后收到两封审核通过通知 | 截至 10 月 25 日，在 App 和网页尝试更改订阅都未成功。 |
| 10 月 21 日 | 同一账户尝试不同交易 | 能支付 Plus 和另一个 App 的 250 美元订阅，Pro 200 仍受阻。 |
| 10 月 20 日 | Plus 通过后升 Pro 200 又受到审核 | 约四天半后成功。 |
| 10 月 16 日 | 等满 72 小时未收到邮件 | 后来通过「更改订阅」完成 Pro 升级。 |
| 10 月 16 日 | 第一次审核隔天能付，第二次等待中多次尝试 | 第二次在人工支持后再等一轮才成功。 |
| 10 月 12 日 | 新账户收到通过邮件，再次付款仍出现审核 | 原记录当时仍未成功。 |
| 10 月 12 日 | Plus 已订上，升 Pro 200 时被拦 | 收到需等 72 小时的提示，后续结果未列。 |
| 10 月 11 日 | 连续数月用余额续费，此次触发审核 | Plus 到期；同一讨论中客服要求暂停购买并等待。 |
| 9 月 30 日 | 通过在线支持询问 | 对方要求补充受支持的付款方式。 |
| 9 月 22 日 | 问客服 72 小时过后能否成功 | 对方给出等待时间，未保证结果。 |
| 9 月 11 日 | 升当时的 Pro 档，申请后电话联系两次 | 三天后收到通过通知，升级成功。 |
| 9 月 13 日 | 升 Pro，完整等待三天 | 收到通过邮件仍遇到审核；同帖另一人称三个账户各自联系美区支持后都能支付。 |
| 9 月 2 日 | 「继续」按钮打不开，转用电话支持 | 9 月 4 日订上 Plus。 |
| 9 月 19 日 | 72 小时后收到回复 | 再过约十小时订上 Plus。 |
| 9 月 21 日 | 满 72 小时未收到消息，再次找在线客服 | 按答复多等十一小时后成功。 |
| 9 月 21 日 | 同一账户在 iPhone 上受阻 | 转到 iPad 成功。 |
| 9 月 3 日 | Plus 一轮后开通，再升 Pro | 后者三轮仍未通过，100 美元余额暂未能用于这笔购买。 |
| 9 月 21 日 | 两个账户都尝试从 Plus 升 Pro | 四轮后仍失败，两个账户合计余有两百多美元。 |
| 9 月 19 日 | 两个账户提交审核后暂时可以付款 | 两天后均被停用，原因未公布。 |

:::

## 在 SEAGM 买卡

SEAGM 由马来西亚的 SEA Gamer Mall Sdn Bhd 运营。打开 [Apple 礼品卡（美国）商品页](https://www.seagm.com/zh-cn/apple-gift-card-us)，确认是美区 Apple Gift Card，页面地区与结算币种显示 ZH-CN / CNY。若遇到 `Error 1005 / Access denied`，原作者在购买站点关闭代理、用本地网络重新打开后恢复了访问。买错地区或放弃使用时，退款要看卖家的具体条款。

11 月 6 日记录中，\$20 面额原价 ¥142.40，折扣 3%（¥4.27），支付宝实际扣 ¥138.13，比 10 月的 Pockyt 付款页高 ¥3.69。支付宝收银台按马来西亚林吉特换算，当时 1 MYR = 1.65861 CNY，该笔订单未另收手续费。SEAGM 的支付宝方式面向中国大陆用户，最终手续费看结账页。大额商品可能有其他要求，原作者只验证过 \$20 一笔，买大额前可在站内 LiveChat 确认。

### 注册并选择面额

1. 在 SEAGM 首页点右上角「登录」，再选「注册」。已有账户的读者可直接登录，跳到选卡。

![登录页的注册按钮 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/82/828896536944bbc33001be31940c8b28814624e84874058f49ab495a766acedf.jpg)

2. 输入邮箱，点「发送验证码」。填写邮件中的六位验证码，阅读并同意条款后点「继续」。

![邮箱验证码与条款确认 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/0a/0a4322267857e8d4e06fd89bb1033a1ddf4d5db6254440980097cf432601ee90.jpg)

3. 按页面要求设 8–20 位密码，包含大小写字母和数字，点「完成注册」。稍后查看卡密还要用这组 SEAGM 密码。

![注册时设置 SEAGM 登录密码 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/09/093c23c47a456abb6f76905b849e5f19cffb345a42d4ded125581ee9f93f17dd.jpg)

4. 在商店搜索 Apple，选粉色的「Apple 礼品卡(美国)」。如果从商品页进入，可直接选面额。

![搜索结果中的美区 Apple 礼品卡 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/d1/d178b85ef5840e8c3663685264dcee0c365d2b435ad37728e92e28f850f40436.jpg)

5. 点开面额选择框。截图中默认是 2 美元。

![商品默认面额为两美元 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/2e/2e2e61b775035379365d5d077c595e2d29cf2438f08451240c854a56713bef76.jpg)

6. 选「Apple 礼品卡 20 美金(美国)」，核对折后人民币价格，再点「确认」。

![选中二十美元面额 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/f1/f1ad20c34e95262c797cde7701ba6f69db7f939b976845fc5e60eb4e2bf28cd3.jpg)

7. 在商品页再次核对数量、面额和总价，点「立即购买」。

![商品页的合计和立即购买按钮 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/1d/1dfbfaf1d9c901984c9b23962231c8648d2e29eb9c142f41d083cc438a62cfcc.jpg)

8. 结账页会列出原价、折扣和应付金额。检查后点「立即支付」。

![结账页列出的折扣和实付金额 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/fa/fa97b9eb51c30069010a3879a60d790355ddaa724294e17f7c5d6c56b6471392.jpg)

9. 付款方式选「Pay with 支付宝」，点「PAY NOW」。

![付款页的支付宝选项 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/e5/e527542e247f5d4c216f8114fed54ee4d5dc78f99f49b8c8d7f71f1222f0abd8.jpg)

### 首次付款时验证手机号

10. 首次结账可能弹出「Update user information」。点手机号一行右侧的箭头。

![首次付款时提示更新用户资料 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/70/70a0fceac2480738e44f3120447694f0bc3894162e2491d1c0ff6c8d7ea9db7b.jpg)

11. 选择自己的电话区号（截图为 +86），填手机号并点「Send verification code」。将收到的短信验证码填回本页，点「Verify」。

![验证手机号的表单 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/31/311832c22c5e53ebcbcaa1be16c5f7d81167d37509ba5b8002192af31d06e395.jpg)

12. 看到手机号旁的绿色对勾，点「Done」回到付款页，再点一次「PAY NOW」。

![验证通过后的绿色对勾 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/46/462742955fc99df969b35de2a8f643ee1d1c896b54c37ec42be9231a5c22c5d5.jpg)

### 付款、取码与兑换

13. 在支付宝收银台核对商家和扣款金额。需要切换资金来源时点「其他付款方式」。用支付宝自己的验证方式确认付款。

![支付宝收银台中的人民币金额 =660x630](https://blog.images.one.bornforthis.cn/docs-images/sha256/0b/0be5722dd5ab95684763f0a6746516512e6ca4186a1e91b2bdc100040f7a3333.jpg)

14. 付款后回到 SEAGM，确认页面显示交易成功，点「Retrieve Code/Key」。

![交易成功页中的取码按钮 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/67/675af5b8f273bb98426e7fa7ce81197a8a8c1f7eccda27e6e732efc8649c6df5.jpg)

15. 取码时网站会再要求输入密码。这里用的是 SEAGM 登录密码，输入后点「提交」。

![在 SEAGM 内验证登录密码 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/d7/d71ca52e2b73307a8792dfc54f5c4ca3f65bcaa21685c3d514e1b10ee6a22fba.jpg)

16. 如果「我的卡密」显示待发货，稍后刷新订单，等「显示卡片」按钮出现。邮箱中的 Orders Are Ready 只是一封到货通知。原作者当日 03:03 付款，03:06 看到按钮。

![订单中出现显示卡片按钮 =360x612](https://blog.images.one.bornforthis.cn/docs-images/sha256/46/4612300c6b31f2b8aa2a7ba9f52934ace0804b03b25c3af0df3828a7df9f450b.jpg)

17. 点「显示卡片」，复制显示的 16 位字母数字兑换码。截图中的示例已用过。

![订单卡片中显示的兑换码位置 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/17/1764f9bfd7b168309549fdac1fbb82a068c1ff06cc3e562c845ca000aa1de4b6.jpg)

18. 打开美区 App Store，点右上角头像，选「兑换充值卡或代码 / Redeem Gift Card or Code」。粘贴卡密，点「Redeem」。

![App Store 手动输入兑换码的页面 =360x662](https://blog.images.one.bornforthis.cn/docs-images/sha256/e1/e1e0fa0011622d602667c2feb2f078dbb8785eba8dc1658247a63dce70e67f31.jpg)

19. 看到「\$20.00 Added」，再回账户页核对余额增加 \$20。这时可以去 ChatGPT App 订阅。

![兑换后 Apple 账户新增二十美元余额 =720x427](https://blog.images.one.bornforthis.cn/docs-images/sha256/8f/8fd580a9005a467d78e99bc03b6470d212d7c2e27b035f6aa69f7db6dd9472c3.jpg)

::: details 用电脑下单？查看支付宝扫码付款步骤

SEAGM 的支付宝通道面向中国大陆居民。下图是商家用来演示付款的示例订单，商品和价格会因你实际选购的礼品卡而不同。**请扫自己订单生成的二维码。**

1. 在 SEAGM 确认商品地区是美国、交付内容是礼品卡，并核对面额。选择 **Buy Now**，再在自己的待付款订单上选择 **Pay Now**。

![SEAGM 订单页的 Pay Now 按钮 =720x197](https://blog.images.one.bornforthis.cn/docs-images/sha256/43/4398d28f21c4e3b5c026cc51e4ce774d836527bd8e9a2f44eaf06fa30b1dfc62.png)

2. 在收银台打开 **Online Payment**，找到 **E-Wallet → Alipay**。先看右侧订单合计，再点 **Pay Now**。商家说明手续费随结账时的规则变化，即使之前的订单没有加价，本次也应重新核对。

![SEAGM 收银台中的支付宝选项与应付金额 =720x481](https://blog.images.one.bornforthis.cn/docs-images/sha256/3d/3da5543f15dc908583432df3daad668a36e424bc4f5e6da7114d7b426d62418d.png)

3. 电脑出现支付宝二维码后，打开自己手机上的支付宝，使用首页的 **扫一扫** 扫自己电脑的付款码，在手机上核对收款方和金额，确认付款。

![电脑端显示支付宝扫码支付页面的示例 =720x493](https://blog.images.one.bornforthis.cn/docs-images/sha256/4d/4df0881a75e6485ebb34d18d7a8d50698b27dd4cda855dba6f5b64b12fce9d6e.png)

![支付宝首页的扫一扫入口 =360x324](https://blog.images.one.bornforthis.cn/docs-images/sha256/51/51b9e68cedaec91d7eb38a68e1b66185df119d1fa789223a06d9549557f3821d.png)

4. 支付完成后回到 SEAGM 的 **My Orders** 打开这笔订单，先看付款状态，再查看礼品卡交付信息。

:::

## 比较付款方式

| 方式 | 在哪里付、谁管理续费 | 成本和限制 |
| --- | --- | --- |
| A. 官网用卡 | 在自己的 ChatGPT 账号结账，之后在网页账单里管理 | 美区 Plus 标价每月 \$20，可能有税；需要符合条件的卡及真实账单信息 |
| B. 海外虚拟卡 | 先向发卡平台入金，再到官网输卡 | 除订阅费，还可能有开卡费、月费、充值和换汇费用；有的平台需实名并用 USDT 入金 |
| C. 美区 Apple 礼品卡 | 支付宝买卡，App Store 兑换，ChatGPT iOS App 确认订阅；Apple 管理续费 | 原文美区 Plus 内购价 \$19.99。\$20 面额能否覆盖一期，取决于含税总额 |
| D. 第三方给本人账号代付 | 先付人民币，再在自己账号核对交付的套餐与期限 | 定价、退款和提前失效的处理方式由商家约定 |
| 共用订阅账号 | 卖家给多人同一套登录信息 | 聊天内容、上传文件和账号控制权都可能暴露；任何一人的操作都可能影响其他人 |

对比费用时，把汇率、购卡手续费、当地税费和卡内剩余的钱都算进去。Apple 礼品卡通常受商店地区限制，如果次月涨价或当地不再提供订阅，已经兑换的余额未必能转走。第一次可以按一个月的实际结算额准备，保留购卡订单和收据。账单地址应填写自己可以如实提供的资料。

::: tabs

@tab Apple 内购

准备自己能登录的美区 Apple 账户、可收邮件的邮箱、支付宝，以及能登录本人 ChatGPT 的 iPhone 或 iPad。商店账号、收卡邮箱、ChatGPT 登录账号各有用途，可以不同。订阅在 ChatGPT 账号中生效，之后同一账号也能在网页、Mac 或 Android 使用；取消或续订仍在 Apple 管理。

@tab 官网用卡

在 [ChatGPT](https://chatgpt.com/) 登录平时使用的账号，从头像菜单打开「升级套餐 / Upgrade plan」。选择档位，按发卡行登记的信息填卡号、有效期、安全码、账单地址和邮编。如果银行要求短信或 App 验证，让结账页保持打开，由本人完成授权。最后核对套餐名、实收金额、税额和下次扣款日。若由海外亲友明确同意代付，续费也会继续扣持卡人的卡，换卡或取消要提前处理。PayPal 等入口以该账号的结账页为准。

下图是 10 月 27 日的一次 Plus 试用。优惠抵掉了首月 \$20，右侧显示本次应付 \$0，顶部依然提示银行卡被拒。试用若要求登记有效付款方式，银行验证仍会发生；到期是否扣款看试用条款。

![试用结账页右侧应付零元，左上方显示银行卡被拒 =720x399](https://blog.images.one.bornforthis.cn/docs-images/sha256/5d/5dfd9c2f9c41d4b155403297bc56a802883ec234a8fff082f146f7f741c748c8.jpg)

@tab 海外虚拟卡

使用路径是向发卡平台申请虚拟 Visa 或 Mastercard，核对发卡地区和商户支持情况，按平台要求完成身份核验、充值，再按「官网用卡」标签中的步骤结账。虚拟卡也可能用于 Netflix、Spotify 等商户，各商户单独审核。原文回顾了 WildCard、Depay / Dupay、BinGoCard、OneKey 等渠道的停运变化，旧教程里的开卡入口不能当作当前可用的证据。如果要用已有虚拟卡，先算清能否提款及各项费用，再估算一次订阅所需余额；原作者举的 \$25–30 是一次 Plus 付款的预算示例。余额由发卡平台保管，停运会影响取回资金。

:::

::: warning 第三方代付时保护登录信息

第三方代付由商家收款，先核对收款方、订单号和退款条款。会话信息中可能包含可直接访问账号的令牌。不要向商家发送登录密码、验证码或完整的会话信息。

:::

## 根据实际用量选择 Plus 或 Pro

先看上周究竟用完了哪一项。只是用普通聊天翻译、改写或提问，Free 已有日常文字聊天额度，文件、图片、语音和数据分析另有限额。Go 在美区的参考价是每月 8 美元，增加部分工具额度，部分地区可能显示广告。Free 和 Go 都使用 Luna 系列；模型公告与帮助中心的版本称呼有差异，具体看账号菜单。

每天处理文件、做深度研究，或偶尔需要 Codex 编程，可以先看 Plus。普通 Chat 可选 Medium、High 思考，Work 和 Codex 可用 Sol、Terra，并有一定 Astra 用量。需要 Chat 里的 Extra High、GPT-6 Pro，或者 Codex 长任务经常耗尽额度，再看 Pro。

| 个人订阅 | 美国网页月价 | 用量差别 |
| --- | ---: | --- |
| Plus | 20 美元 | Work 与 Codex 共用任务额度，可能同时受五小时窗口和周额度限制。Chat 中可用到 High |
| Pro 100 | 100 美元 | Work / Codex 约为 Plus 的 10 倍，按周计算。Chat 中 GPT-6 Pro 与 Sol Pro 共用周额度 |
| Pro 200 | 200 美元 | Work / Codex 约为 Plus 的 20 倍。Chat 中 GPT-6 Pro 有独立周额度，还须留意 Sol Pro 的日额度和合计日额度 |
| Pro 500 | 500 美元 | Work / Codex 约为 Plus 的 50 倍；可用 Astra 和 GPT-6.1 Sol 的 Ultrafast。高速模式消耗额度也更快 |

上述数字及下方截图记录的是 2026 年 10 月底的估算。倍数用于比较 Work / Codex 总用量，不能换算成固定条数。以 Plus 的本地 Codex 消息为例，原指南当时整理的五小时估算是 Astra 约 5–45 条、GPT-6.1 Sol 约 15–160 条、GPT-6.1 Terra 约 35–285 条。输入文件大小、上下文长度、思考强度、快速模式和云端任务都会改变消耗。可以打开账号的用量页面查看余量和重置时间；用完后等重置、换消耗较低的模型，或查看账户是否提供额外用量购买选项。

::: details 查看当时的套餐额度和模型用量截图

![Plus 和三档 Pro 在聊天与 Work、Codex 中的额度对照 =720x405](https://blog.images.one.bornforthis.cn/docs-images/sha256/90/9076163ea74b2ada44fc9ef211814ef979bdac227655ba05d53ab1099292580e.webp)

![Astra 在 Work 与 Codex 中的套餐用量说明 =360x641](https://blog.images.one.bornforthis.cn/docs-images/sha256/df/dfc64816a5397166aa9e8220131b3caceb567b99808a841ec04c6a4ec9df90fb.webp)

![Codex 五小时本地消息数的历史估算及适用条件 =720x617](https://blog.images.one.bornforthis.cn/docs-images/sha256/5a/5a05a8227ffa19131fd8397412d40e0b02c2045572fc13df17228c9e04b22f4b.webp)

:::

2026 年 10 月 29 日调整后，原先较低额度的 Pro 200 提升到与较高额度相同，已有订阅无需重新付款。先试一个月能解决具体问题的最低档位。Business 给每位成员独立账号，并提供统一账单和权限管理。标准席位的美国月付价为每席 \$25，年付折合每席每月 \$20；原文按至少两席估算。商业数据默认不用于训练。

**API 单独计费。** Plus 不含这项 API 赠额。符合条件的付费 Pro 生效满七天，可在 ChatGPT 的账单设置中主动关联自己拥有的 API 组织，按档位每个完整账期可领取 100、200 或 500 美元 API 额度，首次按本期剩余时间折算。在开发者平台核对额度是否进入相应组织；该额度与登录 ChatGPT 使用的 Codex 任务额度分开。

## 在美国用 OpenAI 礼品卡订阅网页版

买卡前先确认两个条件：**兑换时本人在美国，准备使用的 ChatGPT 账号按美元结算**。人在中国大陆，即使浏览器显示美国 IP，也不满足官方公布的所在地要求。若目标是用美区 App Store 余额订阅 iPhone 上的 ChatGPT，请购买 Apple 礼品卡。下面的 OpenAI Gift Card 只能充值到 ChatGPT Wallet。

![OpenAI 礼品卡的几种卡面 =720x266](https://blog.images.one.bornforthis.cn/docs-images/sha256/c8/c82c2280cecc88d7de05d869d28aaf426dcc1518f21ea2b30a4a4462f4dde446.webp)

![OpenAI 的购卡说明，列出美国零售渠道、美元面额和币种限制 =720x264](https://blog.images.one.bornforthis.cn/docs-images/sha256/80/8029cc7e5288b0cc790ed47a7ffd687f6a4a1c061878c2b9b83f5cfae7fe71c9.png)

### 看清商品和金额

官方卡通过参与计划的零售商销售，发卡方为 CIMI2604, Inc.。拿到卡后，在 ChatGPT 网页输入 PIN，就能把整张卡的金额存入选定账户。若商家要求先在其网站生成银行卡号、有效期和 CVV，再去 ChatGPT 刷卡，那是另一种商品。Rewarble 的 voucher 就属于这一类。在拍卖网站或未经授权的卖家处购买的卡可能无效。

![礼品卡正反面样例，背面区分卡号和兑换用的 PIN =720x248](https://blog.images.one.bornforthis.cn/docs-images/sha256/af/af2056ab1432de6ab684bef19b324218b4909d35d4e92b33f4f695d9f9fe6f9f.webp)

单张通常为 15 至 250 美元，各店可售面额不同。按 2026 年 9 月 1 日版条款，每人每天购买总额上限为 2,000 美元。卡只能装载一次，同一账号可以兑换多张，但受每日加载、账户余额及安全限制。卡没有到期日和余额管理费，长期闲置的金额可能适用美国各州的无主财产规则。未兑换的卡可以无偿赠送给符合条件的人，通常不能退货、变现或有偿转售。结账可能产生税费，例如网页 Plus 的美国标价为每月 20 美元，最终应付金额要看账单。

### 从三家零售商买卡

以下渠道信息来自商品页和原教程的结账截图。原作者核对过页面，未在这三家逐一完成付款、收卡和兑换。

::: tabs

@tab Best Buy

登录普通账号，搜索 `OpenAI ChatGPT Gift Card [Digital]`，核对卖家为 Best Buy。页面列出 25、50、100、200 美元四档，按面值标价。选好金额后检查收件邮箱和总价，填入发卡行登记的账单信息。原教程的结账截图显示有 Visa、Mastercard、American Express、Discover、JCB、银联和 PayPal 选项。银联标识仅说明商店支持该卡组织，具体交易还需银行授权和商店审核。[Best Buy 商品页](https://www.bestbuy.com/product/openai-chatgpt-25-gift-card-digital/JJG34P73VL/sku/6688130)

![Best Buy 商品页提供四档面额，并显示数字交付 =720x405](https://blog.images.one.bornforthis.cn/docs-images/sha256/7b/7b6cb998c0dc0a7e28abfcc748e840a83db91ac5de6cb3b531c11f61c408697f.jpg)

![Best Buy 结账页列出的银行卡和 PayPal 选项 =720x400](https://blog.images.one.bornforthis.cn/docs-images/sha256/d7/d72b9ec2d23f03c6810706b0579a5e95077cc536db0748c11f72d567f21894d3.jpg)

付款后到订单详情和邮箱找兑换信息。没收到先看垃圾邮件、订单状态和预计送达时间。银行显示预授权时，商家可能仍在审单。超过预计时间应联系 Best Buy 核查原订单，避免买两次。

@tab BJ’s

已有 BJ’s 会员可找商品编号 `360793`，面值 100 美元，所查页面标价 98.99 美元。原教程 9 月的页面列有 `Digital (Email)`，说明会在 1 至 2 小时内发至登录邮箱，10 月 11 日一度显示无法下单。11 月 9 日查到的公开商品页显示有货，列出的预计交付时间为 3 至 5 个工作日。结账前核对自己所见的交付方式、时间和邮箱。礼品卡通常不退，单日会员凭证能否购买应先向商店确认。[BJ’s 商品页](https://www.bjs.com/product/chatgpt-100/3000000000006366253/?itemId=3000000000006366254)

![BJ’s 的 100 美元 ChatGPT 礼品卡商品图 =720x720](https://blog.images.one.bornforthis.cn/docs-images/sha256/d8/d8cd2c8a6dca1f72771206d401f79050fbc5db9880c09a2a6155254e3ec53f14.jpg)

@tab RaiseRight

如果已经参加学校或团队筹款计划，向组织负责人索取加入码或邀请链接，注册并登录。选择 `OpenAI ChatGPT` 的电子卡，输入 15 至 250 美元的金额。页面的“最高 3%”是组织获得的筹款收益。结账时另算每笔手续费：使用银行账户 ACH 时，组织已登记银行资料为 0.29 美元，未登记为 0.79 美元。借记卡收订单面值的 1%，信用卡收 3%。例如，用信用卡买 100 美元卡，合计 103 美元。付款后先在 **RaiseRight Wallet** 打开收到的卡，再去 ChatGPT 兑换。[RaiseRight 商品页](https://www.raiseright.com/brands/1185-openai-chatgpt)

![RaiseRight 商品页标有电子卡、面额范围和组织筹款比例 =720x386](https://blog.images.one.bornforthis.cn/docs-images/sha256/ab/abaf7cf21eea6ec4613f5da75fa9d2a4615e754cbb4c22d95ef4261e5bcf16ca.png)

![RaiseRight 商品页的电子卡兑换说明 =720x134](https://blog.images.one.bornforthis.cn/docs-images/sha256/0f/0f9268a3c7b934396bb1ed54f6247c5e088950e30f67e430b30d4484565d6442.png)

:::

### 兑换到 Wallet，再购买套餐

1. 在浏览器登录最终要开会员的 ChatGPT 账号，核对邮箱和工作区。个人使用应选 Personal。已有 Business 工作区需由所有者为该工作区充值。个人余额与 Business 工作区余额分别记账，创建新 Business 工作区的首笔订阅也不能用个人余额支付。
2. 打开兑换页，输入 PIN，确认账号、工作区和面额后提交。一张卡只能整额兑换到一处，提交后无法拆分、转到别的账号或退回原卡。[ChatGPT 礼品卡兑换入口](https://chatgpt.com/redeem)
3. 个人账号打开 **Settings → Billing**，在余额和交易记录中找到这笔充值。Business 所有者在 **Workspace settings → Billing** 查看工作区的记录。此时只完成了充值，还需选择套餐。
4. 在同一账号的网页端选 Plus 或 Pro。收银台会对符合条件的账单自动应用余额。核对税费、实际抵扣金额和 **Due today**（仍需支付的金额）。若尚有差额，补充页面支持的付款方式。若已全额覆盖且出现 **Payment method (optional)** 或 **Skip for now**，可跳过备用付款方式。促销、试用等结账仍可能要求登记付款方式。
5. 确认后返回账单页，查看套餐、下次扣款日和剩余金额。余额留给以后符合条件的购买或续费，续费前应检查能否覆盖总额。美元余额只能抵扣符合条件的美元账单。

![ChatGPT 官方兑换页的 PIN 输入框 =720x387](https://blog.images.one.bornforthis.cn/docs-images/sha256/84/84e573d425935a5a20a81ac8dc853230511ef2c6bc3417dc8c1a2d3b636460d0.webp)

![兑换前的个人账单页，可在此查看余额和交易记录 =720x633](https://blog.images.one.bornforthis.cn/docs-images/sha256/43/43778e04f155bde8cf8058a1afe1e23e9af5cc4f78f68cb972e6292ce13e34e3.png)

如果已通过 Apple 或 Google Play 订阅，请先在原来的商店取消续订，等这一期权益结束，再使用同一个 ChatGPT 账号在网页开通。单纯兑换礼品卡不会取消商店的续订。Wallet 也不能用于 OpenAI API 账单。

### Wallet、使用额度和赠送额度怎么区分

| 在页面上看到的名称 | 对应的操作 |
| --- | --- |
| OpenAI Gift Card | 用 PIN 在兑换页增加 Wallet 的美元余额。 |
| ChatGPT Wallet | 在网页用余额支付符合条件的套餐、续费或额度购买。 |
| Usage credits | Work、Codex 等功能可消耗的使用额度。需要在相应入口另行购买，Wallet 充值本身不会增加这些额度。 |
| Gifting Credits | 买家将一次性领取链接交给收礼人。对方用符合条件且计费币种相同的个人账号在购买后 30 天内领取，到账的是使用额度，领取后 12 个月有效。 |

### 根据账单记录排错

| 现象 | 处理步骤 |
| --- | --- |
| 兑换页拒绝 PIN | 检查是否在美国、是否按美元计费、账号和工作区是否选对。Free、Go、Plus、Pro 及符合条件的 Business 账号可兑换，但部分获赠的订阅不具备资格。再向商店确认卡已激活。 |
| 余额显示 `Loading balance…` 或 `Not available` | 刷新并查交易记录，等页面重新载入再判断。若已显示充值且账号仍为 Free，回到升级页面完成结账。 |
| 结账没抵扣，或余额低于预期 | 确认使用存有余额的账号与工作区，核对账单币种和购买项目。到交易记录查看已有消费、未结账款或账单调整，再检查本次实际抵扣额。 |
| 收据显示应付 0 美元 | 查本次 Wallet 抵扣额。全额由余额支付时，应付差额可以为零。 |
| 希望退款 | 未使用卡的交付、激活与退货问题由零售商处理。若已用余额购买 ChatGPT 服务且获准退款，通过 Wallet 支付的部分退回 Wallet，其他付款方式支付的部分退回相应渠道。 |
| 提示已被兑换，但本人没有用过 | 联系 OpenAI 支持，说明账号邮箱、礼品卡的数字序列号、错误原文、发生时间和时区。提供截图时遮住 PIN 和其他个人资料。 |

## 网页付款被拒、续费失败与会员未到账

### 尚未进入支付页

点「Upgrade」没反应或收银台一直转圈时，先从原账号重新打开升级页面。在支持地区内用稳定的网络、隐私窗口或另一款浏览器试一次，检查拦截扩展是否挡住了结账页面。看到 `Country not supported` 时，先核对本人所在地是否在服务范围内。此时还没向银行提交扣款请求，换卡不会解决地区或页面加载问题。

### 用结账页的报错定位第一步

下面的截图出自 2026 年 10 月 27 日的 Plus 试用结账页。右侧虽显示当日应付 0 美元，试用结束后要自动续费，所以开通时仍会验证付款方式。要终止试用，可在原订阅渠道提前至少 24 小时取消，并核对取消页是否提示优惠立即失效。

::: details 查看中英文结账页中的拒付提示

![中文网页试用结账页显示银行卡被拒 =720x399](https://blog.images.one.bornforthis.cn/docs-images/sha256/9b/9b1e6d131e5328505148dbbbb398388b5dcf82fb0bd8eb19b425ad1cbe20226f.webp)

![英文网页试用结账页显示当日零美元仍然验卡 =720x432](https://blog.images.one.bornforthis.cn/docs-images/sha256/44/44252258a36000a0a6fb27c42b1637019f43a234996eec480d0e646acc934685.webp)

:::

| 看到的提示（括号内为英文关键词） | 先做什么 |
| --- | --- |
| 付款未获批／付款未获批准（Payment was not approved） | 先核对本人所在地和发卡行所在地是否受支持。结账页通常没有银行的具体拒绝原因 |
| 您的银行卡被拒绝了（Your card has been declined） | 对照卡号、有效期、安全码、余额以及银行登记的账单地址和邮编，再向发卡行询问拒付原因 |
| 未成功处理付款（Failed to process payment） | 打开银行交易明细，区分无记录、待处理、已入账 |
| 无法处理付款，请刷新页面重试（unable to process your payment） | 核对没有成功扣款后，刷新并重试一次 |
| 请核对账单信息后重试（Check your billing details） | 核对账单地址的街道、城市和邮编，填写与发卡行记录一致的资料 |
| 此卡或设备关联订阅过多（Too many subscriptions） | 查这张卡上已经生效的订阅；确认资格后再考虑本人名下其他合规付款方式。帮助中心没有公布具体关联阈值 |
| 结账会话已过期（checkout session expired） | 关闭过期页面，从同一账号重新发起结账并核对金额 |

遇到 `Something went wrong, please try again later`，先检查该账户的套餐、收据和银行是否已有待处理交易。没有扣款时再稍后用新会话试一次；已扣款则带交易时间和报错向收款方查证，避免多买一笔。

**银行验证一直失败。** 支持跨境消费的卡仍可能默认拦截循环扣款或网上支付。先确认资金和账单资料，清浏览器缓存及 Cookie，再联系发卡行查授权记录。若卡在 3D Secure 验证，允许弹窗、跳转，临时关闭拦截验证窗口的扩展，也可在隐私窗口或另一台设备重试。在银行 App 或短信中确认时，保持原结账页打开。若始终没有验证提示，请银行确认这张卡支持境外电商、订阅扣费及 3D Secure。

**银行里已经有一笔记录。** 待处理可能是预授权，实际入账金额和时间由发卡行确认；部分失败交易稍后会自动重试。先查 ChatGPT 当前计划和收据，再决定是否重新付款。发现重复扣款，按购买渠道联系 OpenAI 或 Apple 核对。记录发生时间、金额、收款平台、错误文字和订单号即可。

### App Store 卡住，还是付款后会员没到账？

1. **购买按钮是灰色。** 遇到 `In-app purchases are currently unavailable`，稍后重试，或在同一账号的网页版查看可选套餐。旧资料曾提到 48 小时，现行 iOS 帮助页未承诺固定开通时间。如果打开的是网页结账，Apple 账户余额不会出现在那里的支付方式中。
2. **Apple 窗口提示余额或付款问题。** 到 App Store 头像处核对 Apple 账户、商店地区和剩余金额，把税费也算上。如果窗口明确写「购买未完成，提交申请至 Apple 支持以供审核」，按本文的 Apple 购买审核步骤处理。只看到支付失败时，不要靠反复充值余额来测试。
3. **Apple 已开收据，ChatGPT 仍显示 Free。** 在 ChatGPT「设置 → 账户」查看账号邮箱，用购买时的登录方式重新登录。收据邮箱可能属于 Apple 账户；若当时选择了「通过 Apple 登录」并隐藏邮箱，ChatGPT 账号可能显示 `@privaterelay.appleid.com`。在 iOS App 设置中选择「Restore purchases／恢复购买」，再检查套餐。
4. **仍未同步。** 到 iPhone「设置 → 姓名 → 订阅」确认 Apple 订阅状态和续费日。关闭再重新登录显示 Free 的设备，使用同一 ChatGPT 账号。若仍有差异，将收据和隐去敏感信息的状态截图交给 OpenAI 核对会员；Apple 购买的扣费、退款和取消续费由 Apple 处理。卸载 App 或删除 ChatGPT 账号都不能代替取消 Apple 订阅。

## 订阅后怎样登录 Codex、查看额度与处理报错

购买 Plus 或 Pro 后，以**刚订阅的 ChatGPT 账号**登录 Codex，才能使用套餐内的额度。已经开通会员，仍可能遇到设备、登录、网络或额度问题；先确认卡在哪一步，再判断是否需要调整套餐。

### 安装客户端并确认实际运行的版本

![桌面版、CLI 和编辑器插件三种安装方式 =720x405](https://blog.images.one.bornforthis.cn/docs-images/sha256/56/5690c945a2994747432eff3eaf4973c3126c880a85c1027deb9a59971c9fa400.webp)

| 在哪里工作 | 从哪里开始 | 怎样确认 |
| --- | --- | --- |
| 桌面版 | 从 ChatGPT 官方下载页选对系统和处理器，安装后在应用内切到 Codex。Windows 也可在 Microsoft Store 安装。 | 打开设置看应用版本。桌面版可能自带一份 CLI，和另外安装的终端版本分别更新。 |
| 终端 | 已有 Node.js 和 npm 时可运行 `npm install -g @openai/codex`。Mac 上也可选 `brew install --cask codex`。 | 运行 `codex --version`，进入自己的项目目录，运行 `codex`。 |
| VS Code 或 Cursor | 扩展市场搜索 Codex，核对发布者 **OpenAI** 和 ID **openai.chatgpt**，安装后打开侧边栏。 | 查扩展的版本和运行位置。本机、SSH 主机、WSL 的插件环境可能不同。 |

![桌面软件下载菜单中的系统与处理器选项 =720x584](https://blog.images.one.bornforthis.cn/docs-images/sha256/60/6007cc1715bb3848136fbb05378f22d8fc920426aedfa2e69ea06b9f9b7f3aa8.webp)

Windows 也可以在 PowerShell 使用 `winget install --id 9PLM9XGG6VKS -s msstore`。商店长期停在「已排队」时，运行 `wsreset` 后从商店的「库」重试；更新时若显示文件正被占用，先退出桌面应用及相关进程。使用官方安装脚本的读者可以从 `chatgpt.com/codex/install.sh`（macOS、Linux）或同目录下的 `install.ps1`（Windows）获取脚本。下载地址临时 404 时，可从 OpenAI 的 GitHub Releases 下载同名附件，或者用 npm 安装。

**更新、回退、卸载。** 运行 `codex update` 后再次执行 `codex --version`。若中途下载失败，最后出现成功提示也要核对版本。npm、Homebrew 分别用 `npm install -g @openai/codex`、`brew upgrade --cask codex` 更新。只在需要复现版本问题时把 npm 包写成 `@openai/codex@版本号`。Mac/Linux 用 `which -a codex`，Windows 用 `where.exe codex` 找出 PATH 中是否有多个版本。

| 安装来源 | 卸载程序的位置或命令 |
| --- | --- |
| npm / Homebrew | `npm uninstall -g @openai/codex` 或 `brew uninstall --cask codex`。 |
| 官方独立脚本 | macOS/Linux 安装在 `~/.local/bin/` 下的 `codex`、`codex-code-mode-host` 及 `~/.codex/packages/standalone`。Windows 安装在 `%LOCALAPPDATA%\Programs\OpenAI\Codex\bin` 和用户的 `.codex\packages\standalone`。移除前先检查它们确实属于该安装。 |
| 桌面版 | macOS 退出后在「应用程序」中移除，Windows 在「设置 → 应用 → 已安装的应用」中卸载。排错重装前备份自己的配置和会话。 |

用户目录的 `.codex` 中还可能保存配置、会话和登录信息。在 macOS/Linux 是 `~/.codex`，Windows 是 `%USERPROFILE%\.codex`。排错时优先备份、改名个别有问题的文件，保留 `sessions` 记录；`auth.json` 以及系统钥匙串中的认证信息只能由本人保管。

### 登录、设备码和手机验证

1. 登录页选择 **Sign in with ChatGPT**，使用订阅时的邮箱和登录方式。选 API key 则按 API 提供方独立计费。Codex 云端任务需要使用 ChatGPT 账号。
2. 浏览器登录后会把结果送回本机的 `localhost:1455`。若显示 `ERR_EMPTY_RESPONSE`、连接被拒绝或终端一直等待，确认浏览器和 CLI 是否在同一台机器，关闭占用回调的其他登录窗口，让代理绕过本机地址。SSH、容器、WSL 与本地浏览器不在同一环境时，可改用设备码。
3. 在 ChatGPT 网页「设置 → 安全」启用 Codex 的设备代码登录。在需要登录的终端执行 `codex login --device-auth`（编辑器里选 **More options → Use device code**）。自己打开终端提供的官方验证地址，登录并输入本次代码。回到原终端执行 `codex login status` 核对结果。
4. `Token exchange failed` 时先检查申请令牌那台机器的 HTTPS 连接、代理和支持地区。提示 `refresh token was already used` 时，先停下并发登录，执行 `codex logout`，再重新 `codex login`。CLI 与编辑器可能共用凭证。

![OpenAI 对 Codex 手机验证方式的说明 =720x512](https://blog.images.one.bornforthis.cn/docs-images/sha256/67/67b62fe1f52b466501a4de15776adab9ff0dad98ba50adbd66712cd7808ebaa6.webp)

即使网页 ChatGPT 能用，Codex 登录也可能要求 **Verify your phone number**。按验证页提供的方式接收短信，部分支持地区还可选 WhatsApp。原资料列出的 WhatsApp 地区有阿联酋、埃及、印度尼西亚、以色列、印度、马来西亚、尼日利亚、巴基斯坦、沙特阿拉伯、土耳其、乌克兰和越南，以当时页面可选项为准。邮件、双重认证 App、座机及 VoIP 号码不能代替这一项。号码需要由本人长期掌握；原指南核对时，OpenAI 不支持给现有账号改绑号码，临时接码会让以后的重新验证失去保障。提示 `unsupported_country_region_territory` 时核对服务适用地区。购买套餐不会改变账号和地区资格。

![验证页面提供的短信及 WhatsApp 选项示例 =613x500](https://blog.images.one.bornforthis.cn/docs-images/sha256/92/92a75544e36347c01f728b275dd634c91dc5aa3450fbb3d10fd92da6c5bc7c0f.webp)

### 浏览器能用，终端却连不上

先运行 `codex doctor`；支持该参数的版本可运行 `codex doctor --network-only`。看 **Connectivity** 下的代理变量、可达性和 WebSocket。HTTP 101 表示 WebSocket 握手成功；未登录时的 401 要先解决登录。只有 WebSocket 失败时，HTTPS 后备连接仍可能工作。

![诊断结果中的代理变量、系统代理状态与 WebSocket 连通性 =720x363](https://blog.images.one.bornforthis.cn/docs-images/sha256/e9/e9b8cd8d97dfbbef3a3c5129b157827726b41c253645d5d052d0d4a8d058056b.webp)

身处服务支持地区、需要通过单位或本机代理访问时，先核实地址与端口。下例的 `7890` 是占位示例。浏览器的代理设置不一定传给 CLI。

::: code-tabs

@tab macOS / Linux

```bash

export HTTPS_PROXY=http://127.0.0.1:7890
export HTTP_PROXY=http://127.0.0.1:7890
export NO_PROXY=localhost,127.0.0.1,::1
codex doctor --network-only
```

@tab Windows PowerShell

```powershell

$env:HTTPS_PROXY = "http://127.0.0.1:7890"
$env:HTTP_PROXY = "http://127.0.0.1:7890"
$env:NO_PROXY = "localhost,127.0.0.1,::1"
codex doctor --network-only
```

:::

长期使用可将变量加入 shell 启动文件、Windows 用户环境变量，或给 CLI 写入 `~/.codex/.env` 后重新启动。图形端应检查启动它的系统环境，远程终端应检查远程主机能否访问这个地址。已有后台任务时先保存进度；等它们结束后再运行 `codex app-server daemon stop`，下次启动会读取新环境。可以用 `codex --no-daemon` 单独验证。公司网络使用受信任的 TLS 检查证书时，将管理员提供的 PEM 路径设为 `CODEX_CA_CERTIFICATE`，再重新启动客户端。

### 按报错定位问题

下面保留了原资料在 2026 年 11 月 5 日以前记录过的现象。客户端升级后，先确认旧版本的问题是否还能复现。反馈时记录设备、应用或 CLI 的版本、时间、报错全文和请求 ID，再删去邮箱、手机号、密钥与会话凭证。

| 现象 | 先做什么 |
| --- | --- |
| HTTP 400、404、403、402 | 400 看请求或模型参数。404 核对地址、模型和接口。403 看具体是地区、浏览器验证、账号还是组织策略。402 在第三方 API 通常要查余额，用 ChatGPT 登录则核对工作区是否已停用。 |
| HTTP 401、429、500、502、503 | 401 检查登录状态。429 看是否附重试时间和 `turn_rate_limit_exceeded`，同时核对账户用量。5xx 先看 OpenAI 服务状态，稍后用短请求重试。保留 request ID。 |
| `stream disconnected before completion` 或不断重连 | 看诊断里的 WebSocket、代理、企业防火墙与 TLS，然后在新对话发简短问题。若许多用户在同一时段遇到故障，等服务恢复。 |
| `An error occurred while processing your request`、`Error running remote compact task` | 服务端已收到请求。新开短对话对比；只有长对话失败时先试 `/compact`，仍失败就把任务状态转入新对话。向支持提供时间及 request ID。 |
| 长期停在 Thinking | 先看是否显示正在等工具、审批、网络重连或模型繁忙。用短问题及另一个可用模型对照；记录是否特定会话或所有会话都慢。 |
| `Selected model is at capacity` | 记录具体模型，看同一账号的其他模型是否能回复；先换模型、稍后重试。若长期只限某个账号，核对登录设备及安全通知，通过支持处理。仅凭这句话无法判断账号停用，升级套餐也无法确保消除容量限制。 |
| `model is not supported` | 核对客户端、当前账户、登录方式和模型选择器。自定义模型名也要与提供方实际支持的 ID 一致。 |
| `flagged for possible cybersecurity risk` | 说明本次任务的具体项目、授权范围和用途。若认为误判，用 `/feedback` 附时间报告。获授权的持续安全研究可查看账号内 Trusted Access for Cyber / Daybreak 的申请资格。 |
| `ran out of room in the model's context window` | 当前对话已满时，先 `/compact`，必要时 `/new` 后带上目标、改过的文件及下一步。读取日志先过滤，再分批发送。可在 `/status` 查看上下文占用率。 |
| 后台服务版本与 CLI 不同、换账号或代理后仍用旧状态 | 先执行 `codex app-server daemon version` 比较，使用 `--no-daemon` 对照。确认可以中断任务后再 `codex app-server daemon update`、`codex app-server daemon restart`。 |

![容量报错的两种可能原因 =720x405](https://blog.images.one.bornforthis.cn/docs-images/sha256/45/45c8f96ffd053a06846c1256159f7a3fab1f9438cbff73cd7763becc6393cd38.webp)

![桌面版连续收到模型满载提示的案例 =720x235](https://blog.images.one.bornforthis.cn/docs-images/sha256/56/56fd36b6a95fa194a3b2f5975d30de4c14e9e35565bdbca725cab948c9d1a840.webp)

![OpenAI 社区关于付费账户部分功能临时受限的回复 =720x348](https://blog.images.one.bornforthis.cn/docs-images/sha256/62/626425171207fb293b5ce361e90778ba68bdbcc066cf100ebd1c138fe67da0fa.webp)

![帮助中心列出的模型功能访问受限原因 =720x589](https://blog.images.one.bornforthis.cn/docs-images/sha256/6a/6aadf65d094d06f7eea60877cdb01d2395cf0680c0bfc116604c3a88ed467cad.webp)

### Windows、桌面版、编辑器和网页的具体情况

| 你遇到的情况 | 下一步 |
| --- | --- |
| Windows 显示「设置未完成」、`helper_failed` | 查看 `%USERPROFILE%\.codex\.sandbox\setup_error.json`。按「重新设置」完成管理员授权，受管电脑联系 IT。新沙盒可用性取决于 Windows 和客户端版本；保留原配置以便回退。 |
| Windows 沙盒报 `os error 32`，或者登录后窗口自动退出 | 记录错误行和版本，完成正在执行的操作后退出残留的后台进程，再更新、重启。旧版可能是沙盒文件占用；可用 CLI 对比是否仅桌面版有问题。 |
| 更新后白屏或 `Unable to load organization settings` | 完全退出后更新。PowerShell 用 `[Environment]::GetEnvironmentVariable("CODEX_CLI_PATH","User")` 查是否残留指向旧版程序的覆盖。若确属过期覆盖，撤销该变量再重启。检查旧配置及 WSL 能否访问组织策略服务与代理。 |
| `Couldn't load workspace settings`、`We couldn't load your account`、`Cannot serialize value` | 在同一账号网页端对照；选一个已有项目新建对话，完全退出再打开，检查日志里是否出现 `cloudflare_challenge` 或 `devicecheck_token_generation_failed`。只在工作树模式出现序列化失败时换本地模式测试，并更新桌面软件。 |
| 提示已在另一个应用打开、恢复对话失败 | 在其他终端或窗口结束那个会话后再恢复。若提示 `config.toml` 无法加载，按报错的文件位置和行号修复。CLI 的 `codex resume --all` 可查看其他目录的会话。 |
| VS Code 出现 `Codex could not start`、`renderer_ready_timeout` | 查看扩展输出，重新加载窗口或把 Codex 移到另一个侧边栏。原记录中 26.1021.22027 出现过此问题，回退 26.1007.21434 对部分用户有效；新版本先从扩展市场更新。 |
| WSL 报 `Failed to create unified exec process (os error 2)` | 先确定 shell 和项目路径在运行 CLI 的 WSL 中存在，尤其检查从 Windows 继承的用户目录、临时目录及跨盘挂载。用 WSL 原生 Linux 目录对比。 |
| 云端任务报 `Unable to determine project root for task`、Safari 报 `DisposableStack` | 检查是否选好仓库、分支及环境，用另一个受支持的浏览器对照；若服务端不能创建任务，可以先在本地仓库用 CLI。 |
| 终端选中文字却复制不了 | 在 macOS Terminal 可用 `codex --no-alt-screen` 保留滚动记录，或改用右键复制、选中复制。 |
| 沙盒内无法写项目以外文件或下载依赖 | 先看 `/permissions` 和 `/status`。只需联网时，在工作空间写入模式下允许网络访问。完全访问呈灰色时核对组织政策与系统授权。 |
| 手机远程控制无法启用 | 更新两端，确认属于同一账号、同一工作区；管理员需允许远程控制。出现 409 时查是否有另一个应用实例或迁移电脑遗留的相同设备标识。 |
| Chrome 控制报浏览器 host 不可用或 `timeoutMs` | 更新浏览器扩展和桌面应用后重试。区分桌面版与独立 CLI，打不开时可用应用内浏览器或手工完成当前操作。 |
| 插件授权后 `OAuth state not found`、单个 MCP 启动超时 | 同一账号可先在网页完成连接再回到应用。若只有 MCP 慢，手动运行其启动命令核对依赖；确实是启动慢，再在相应 `[mcp_servers.名称]` 设置 `startup_timeout_sec = 120`。未主动使用的插件可在插件设置中核对来源并移除。 |

桌面版的 macOS 日志通常在 `~/Library/Logs/com.openai.codex/`。Windows 的商店包可在 `%LOCALAPPDATA%\Packages` 下找到应用目录，进入其 `LocalCache\Local\Codex\Logs`。仅某个项目出错时优先保留最小复现。CLI 的 `codex exec` 遇到 `Not inside a trusted directory` 时先进入自己的 Git 项目。归档只隐藏聊天，设置里的「已归档的聊天」可恢复；界面有「永久删除」时，确认不再需要该聊天及其子任务后再操作。

### 额度、模型和重置机会怎样看

在 CLI 输入 `/status`；桌面版选「设置 → 使用情况和计费」，网页端可直接登录 `chatgpt.com/codex/settings/usage`。核对的是当前 ChatGPT 账号和工作区。头像旁边的用量环消失时，这几个入口仍能显示可用额度。提示某个模型达到上限时，可按界面建议切换模型；提示整个套餐已用完时，看重置时间和可选的额外额度。

![Free、Go、Plus、Pro 的美元定价示例 =720x645](https://blog.images.one.bornforthis.cn/docs-images/sha256/9d/9d91d5d88d1430fdbcf303bb81ecf4c8f69f9ae181f19e79064a46e7f60e9469.webp)

![Chat 与 Work、Codex 模型入口按套餐对照的历史截图 =720x405](https://blog.images.one.bornforthis.cn/docs-images/sha256/a9/a9a664d47550c604fc95eac8e30bf59d3e324cb5b87e260c3d6678bb44b9f1f8.webp)

原资料 2026 年 10 月 26 日记录的 **Plus 本地任务每 5 小时估算范围**为 Astra 5–45 条、GPT-6.1 Sol 15–160 条、GPT-6.1 Terra 35–285 条、GPT-6 Sol 15–150 条、Luna 350–3,000 条。任务规模、工具与推理成本都会影响实际可用量，当前账号的模型菜单、额度及重置提示优先。轻量任务用消耗较低的模型，把更高推理强度留给需要它的任务。

![Pro 三档 Work 和 Codex 用量在 10 月调整前后的对照 =720x405](https://blog.images.one.bornforthis.cn/docs-images/sha256/a0/a017f6201082be1e76e4b9c35c9574977b4841656ce37449f14da970411cedd9.webp)

原资料记录，美国时间 10 月 29 日，Pro 100、200、500 的 Work/Codex 额度约为 Plus 的 10、20、50 倍。Chat 的模型入口和 API 消费另算。11 月初的公告还预告 12 月起 Plus、Pro、Business 的 ChatGPT 与 Codex 将共享用量，实际启用时间以账户通知为准。套餐归个人账号，避免多人共用凭证导致任务、代码和额度相互暴露。

![Pro 使用条款中关于共享账号凭证的说明 =720x241](https://blog.images.one.bornforthis.cn/docs-images/sha256/4d/4dec2c355a5451b3cb0f73b4e8280249347421c6f3e5e431fa2764af1a86e9a9.webp)

| 界面里的字 | 会发生什么 |
| --- | --- |
| 使用限额／rate limit | 套餐自带用量，按显示的周期恢复。原资料记录 Plus 有 5 小时和每周限额，Pro 当时显示每周限额。 |
| 添加额度／credits | 另外购买的点数。核对账单金额和可用范围后再付款。 |
| 已储备的重置机会／banked reset | 在网页 Usage、桌面「使用情况和计费」或提供该选项的 CLI `/usage` 里兑换。原资料记录，只要覆盖的至少一项剩余低于 80% 才能用。Plus 与 Business Standard 覆盖 5 小时及每周，Pro 覆盖每周，Go 覆盖每月。 |
| 全体重置 | 平台按公告针对部分账号或限额恢复用量。无需领取，不消耗手里的重置卡。 |
| 购买即时重置 | 仅部分符合条件的个人账号显示。付款后立即重置覆盖的限额，不能囤积，后续周刷新时间也会调整。购买前看页面所列金额及下一周期规则。 |

![2026 年 7 月至 11 月初公布过的重置与重置卡记录 =720x405](https://blog.images.one.bornforthis.cn/docs-images/sha256/f8/f861a79f8fcf7dc0442c26dbb812d82e2885bdc6b0d259b834ce291935553ba3.webp)

重置使用后查看新的刷新时间。「历史记录」中 received 表示收到机会，used 表示已经使用。留意卡片到期日期；一项也未补回时先刷新并核对账号，异常时带截图、时间和反馈 ID 联系支持，避免连点或重复付款。授权助手代用的设置还要求本人明确提出、剩余额度符合界面门槛。曾有套餐切换后用量显示骤降的案例，应先查自己的账户通知与 Usage 页面；取消再订通常不会立即重置当周额度。

### 让界面和回复使用中文

![桌面版、编辑器和 CLI 的中文设置路径 =720x405](https://blog.images.one.bornforthis.cn/docs-images/sha256/92/927daf045edc5a07ece0b3847de0bbf74052a6e5f3830b972db2009fb930e426.webp)

- **桌面版**。在「Settings → General → Language」选「中文（中国）」，完整退出再打开。缺少该项先升级。重启仍显示英文时，核对应用启动时的网络，再试一次。
- **VS Code / Cursor**。插件通常跟随编辑器语言。只想改插件可在设置中把 `chatgpt.localeOverride` 设为 `zh-CN`。
- **CLI**。原资料所用版本的终端界面是英文，可以用 `AGENTS.md` 固定回答语言。Windows 中文文件出现乱码时，以 PowerShell 7 和 UTF-8 读取同一个文件核对，再决定要不要改源文件。
- **字号**。桌面版在「设置 → 外观」中分别调界面、内容和代码字号。

![Windows 桌面设置里的 Language 选项 =720x236](https://blog.images.one.bornforthis.cn/docs-images/sha256/bc/bc6665fcf622323188d92cd11baab0194f75a420a6ed260560b27432afc8fee1.webp)

适用于当前目录的说明会按全局 `~/.codex/AGENTS.md`、项目根目录、再到当前子目录逐级读取。全局说明适合放语言习惯，项目说明写实际的依赖管理、测试命令、目录职责及不能公开的配置。已有文件直接编辑，保留原来的内容。例子如下，命令按你的项目替换。

```markdown
# 项目说明

使用简体中文回复，保留命令和错误消息的原文。
这是一个使用 pnpm 的项目，源代码在 src/，测试在 tests/。
修改后运行 pnpm test，说明实际运行的结果。
项目需要的环境变量名称见 .env.example，密钥使用本机环境变量提供。
```

在目标目录重新打开会话，请 Codex 概述它实际读取的项目说明。遇到英文教程时，**Worktree** 指工作树，**Usage & billing** 是「使用情况和计费」，**Request approval** 是「请求批准」，**Full access** 是「完全访问权限」，**Archive** 是「归档」。界面翻译随版本可能调整。

### 需要不同模型时，分清第三方 API 和套餐

如果要接入 DeepSeek 之类的服务，先确认提供方支持 Codex 使用的 **Responses API**，并准备该提供方自己的密钥。第三方 API 的费用、上下文及服务稳定性由该提供方决定。经中转服务传输时，中转方也会收到代码和提示信息；使用公司项目先核对数据使用范围。

1. **用 DeepSeek 的安装脚本设置默认提供方。** 官方脚本的 macOS/Linux 下载地址为 `https://cdn.deepseek.com/api-docs/codex-deepseek-setup.sh`，Windows 为同目录的 `codex-deepseek-setup.ps1`。下载、检查后执行，按提示配置自己的 API key。原资料中的脚本会备份配置到 `~/.codex/backup-deepseek/`、生成模型目录 `models.json`，菜单提供恢复选项。若写入 `forced_login_method = "api"`，客户端可能退出原来的 ChatGPT 登录，恢复原配置后还需重新登录。
2. **需要两套配置并存时。** 先取得上一步生成的完整 `~/.codex/models.json` 并留存，再恢复原默认配置。建立 `~/.codex/deepseek.config.toml`，按下面的例子配置。把密钥通过本机安全方式设为 `DEEPSEEK_API_KEY`，只在需要时运行 `codex --profile deepseek`。原指南使用的模型名为 `deepseek-flash` 和 `deepseek-v4-pro`，以提供方账户实际可用列表为准。
3. 在自己拥有的 Git 项目中执行 `codex exec --profile deepseek "用一句话说明你的任务"`，核对启动信息里的 provider 和 model，再在新对话测试。桌面版与编辑器使用默认提供方时，也会受到全局配置变更影响。

```toml
model = "deepseek-flash"
model_provider = "deepseek"
model_catalog_json = "~/.codex/models.json"
web_search = "disabled"

[model_providers.deepseek]
name = "deepseek"
base_url = "https://api.deepseek.com/"
wire_api = "responses"
env_key = "DEEPSEEK_API_KEY"
```

| 第三方接口的报错 | 检查什么 |
| --- | --- |
| `wire_api = "chat" is no longer supported`、404 `/responses` | 确认服务提供 Responses 协议，核对 base URL 是否需要 `/v1`。只支持 Chat Completions 的服务无法直接采用上面的配置。 |
| Missing environment variable、401 | 在启动 Codex 的进程环境中设置命名的密钥，确认启动时选了该 profile。若实际访问的是 OpenAI 而预期是 DeepSeek，重新检查 provider。 |
| 找不到模型元数据、模型目录为空 | 核对 `models.json` 文件是否完整、可读，是否列出该模型。 |
| 内置 provider 名冲突、legacy profiles 警告 | 自定义名字避开 `openai`、`ollama`、`lmstudio`。新式 profile 单独写在用户级的 `名称.config.toml`。项目目录的配置不适合定义提供方。 |
| 旧对话报 `invalid_encrypted_content` | 回到生成旧对话的原提供方，或建新会话并带上文字结论。不同提供方的会话列表也可能分开显示。 |
| 中转站 402、WebSocket 不支持 | 402 核对该站账户余额。若 CC Switch 的本地转发仅支持 HTTP，检查能否成功回退、转发路径和模型 ID。它会改写配置，使用前备份。 |

电脑操作工具不可用时，在桌面设置里检查 Computer use 是否安装、目标 App 是否可见。Mac 还要在系统的「隐私与安全性」里检查辅助功能和屏幕录制权限。有组织策略的工作区由管理员决定可用功能。反馈按钮不可用时，保留脱敏后的截图和时间，通过登录账号的官方支持入口交付问题。

## 续费、取消和账号异常

| 你在哪里订的 | 到哪里核对和处理 |
| --- | --- |
| ChatGPT 网页 | 登录购买时的账号，从头像打开设置，在账户或账单中管理订阅、检查续费日或取消。免费试用也要看自动续费日期。 |
| iOS App Store | 在 iPhone「设置 → 你的姓名 → 订阅 → ChatGPT」查看到期日或取消。希望续费时，扣款前确认余额或备用付款方式够用。 |
| Google Play | 打开购买时的 Google 账号，在 Play 商店头像菜单的「付款和订阅 → 订阅」中查看 ChatGPT。 |
| 第三方单次月度订单 | 用商家订单号查交付，在本人 ChatGPT 设置中核对期限。商家订单不会替你取消原先的 Apple 或网页自动续费；已有订阅时先确认下次扣款日。 |

**还能登录但套餐变回 Free**，先查是否登录了另一个账号、切到了不同工作区、到了续费日或扣款未完成。保留原订单号、收据和失效时间，向实际收款方查询。**收到停用通知或已无法登录**，查看 OpenAI 的通知邮件并按其中的申诉入口提供情况。付款商家不能判定停用原因，也不能恢复账号。

若曾把密码或会话信息交给他人，在仍能登录时打开「设置 → 安全」，退出所有设备，更新登录密码并启用多因素验证；通过 Apple、Google 或 Microsoft 登录的，同时检查对应账户的安全设置。共用账号会让他人接触聊天记录、代码和上传文件。把订阅留在本人控制的账号里，保管好收据，以后换设备、查账或恢复购买都用得上。

### 图文来源

本文据 AONIR 整理的《ChatGPT Plus 国内充值指南》及其配套操作记录改写。支付宝、Pockyt 和 SEAGM 的交易金额、补货邮件和客服对话来自原作者或其收集的读者记录。主仓库为 `Avarce/chatgpt-plus-china-guide`（版本 `1e94371`）；OpenAI 礼品卡图文取自 `Avarce/openai-gift-card-guide`（版本 `51f0c3b`）。Apple、OpenAI 和 SEAGM 的官方界面示例分别归其提供方。

Apple 购买审核与 Codex 部分改写自 © 2026 AONIR 的两份资料，保留了配套截图，调整了顺序与表述。原出处分别为 `https://github.com/Avarce/apple-purchase-not-completed`（版本 `f05ab96`）和 `https://github.com/Avarce/codex-china-guide`（版本 `9a19114`），采用[知识共享署名 4.0 国际许可协议](https://creativecommons.org/licenses/by/4.0/)。

<style scoped>
img[width][height] {
  height: auto;
}
</style>
