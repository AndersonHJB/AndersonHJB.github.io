---
title: 03-使用 AI 开发一个属于自己的网站
icon: blog
date: 2026-07-16 08:41:48
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

## 1. 准备工作

### 1.1 清单🧾

- [x] 购买域名；

    ::: details 购买域名

    域名命名并没有绝对的标准，但优秀的域名几乎都遵循以下几个原则。如果按照重要性排序，我建议是：

    #### 1. 简短（最重要）⭐⭐⭐⭐⭐

    越短越好，输入方便，也容易传播。

    例如：`qq.com`、`x.com`、`github.com`、`taobao.com`，而：`my-awesome-personal-programming-website.com` 太长基本没人愿意输入。

    **一般建议**：

    - 5～12 个字符最佳
    - 不超过 15 个字符

    #### 2. 容易记住

    **看到一次就能记住**，例如：`google.com`（自造词）、`baidu.com`、`apple.com`、`cloudflare.com`，而：`abc123xyz.com`、`qweasdzxc.com` 基本没有记忆点。

    #### 3. 容易拼写

    别人听一遍就能输入出来，例如：`bornforthis.cn` 基本没有歧义。

    反例：`xuanxuanzhizhishi.com` 别人很容易拼错。

    建议：

    - 尽量使用常见英文单词
    - 或者常见缩写
    - 不要使用生僻单词

    #### 4. 容易发音

    如果别人能读出来，也更容易传播。

    例如：`openai.com`、`vercel.com`、`notion.so` 读起来都比较顺。

    #### 5. 与品牌一致

    域名最好就是品牌。例如：

    - 品牌：**AI悦创**
    - 对应：`aiyc.cn`、`aiyc.com`、`aiyuechuang.com`

    或者：`bornforthis.cn` 长期来看品牌价值最高。

    #### 6. 不要使用数字

    除非数字就是品牌。例如：`360.cn`、`58.com`、`51job.com`

    否则：`python888.com`、`learn520.com` 都会降低专业感。

    #### 7. 不要使用连字符（-）

    例如：`my-blog.com` 别人容易忘记有没有 `-`。

    推荐：`myblog.com`

    #### 8. 尽量避免缩写

    例如：`aiyc.com` 对于熟悉品牌的人没问题。但是：`btf.cn` 别人根本不知道什么意思。

    除非：`IBM`、`BMW`、`KFC` 这种已经成为品牌。

    

    #### 9. 选择合适的后缀

    一般推荐顺序：

    | 后缀 | 推荐指数 | 适用             |
    | ---- | -------- | ---------------- |
    | .com | ⭐⭐⭐⭐⭐    | 国际品牌、商业   |
    | .cn  | ⭐⭐⭐⭐⭐    | 国内品牌         |
    | .io  | ⭐⭐⭐⭐     | 开发者、AI、SaaS |
    | .ai  | ⭐⭐⭐⭐     | AI 产品          |
    | .dev | ⭐⭐⭐⭐     | 开发工具         |
    | .app | ⭐⭐⭐⭐     | App              |
    | .org | ⭐⭐⭐      | 开源、组织       |
    | .net | ⭐⭐⭐      | 网络服务         |

    如果预算允许，建议同时持有：`xxx.com`、`xxx.cn`

    #### 10. 避免侵权

    例如：`openaichina.com`、`applephone.com`、`tesla-ai.com` 都可能涉及商标风险。

    #### 11. 方便 SEO（现在权重较低）

    以前大家喜欢：`best-python-course.com`，现在 Google 更看重内容质量，而不是关键词堆砌。

    所以更推荐：`codemark.com`，而不是：`best-python-learning-platform.com`。

    

    #### 12. 留出品牌扩展空间

    不要把业务写死。例如：如果现在卖课程：`pythoncourse.com`，以后做 AI、工具、社区，就显得局限。

    而：`bornforthis.cn`，可以承载：博客、社区、AI、课程、SaaS、开源项目等，扩展性更强。

    #### 13. 一个优秀域名通常满足的标准

    给自己打分（每项 1 分）：

    - ✅ 少于 12 个字符
    - ✅ 一次就能记住
    - ✅ 不需要解释怎么拼
    - ✅ 不含 `-`
    - ✅ 不含数字（特殊品牌除外）
    - ✅ 品牌一致
    - ✅ 发音自然
    - ✅ 不侵权
    - ✅ `.com` 或 `.cn` 可注册
    - ✅ 五年后仍然适用

    能达到 **8 分以上**，通常就是一个很不错的域名。

    :::

- [x] 安装代理：[https://github.com/clash-verge-rev/clash-verge-rev/releases](https://github.com/clash-verge-rev/clash-verge-rev/releases)

- [x] 安装 VScode：[https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)

- [x] Mac 电脑安装 brew：`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`；

- [x] 安装 nodejs：[https://nodejs.org/en/download](https://nodejs.org/en/download)、`brew install nodejs`

- [x] 安装 git：[https://git-scm.com/install/](https://git-scm.com/install/)

- [x] 注册 github：[https://github.com/](https://github.com/)

- [x] 注册 Vercel：[https://vercel.com/](https://vercel.com/)

- [x] 安装 snipaste：[https://www.snipaste.com/download.html](https://www.snipaste.com/download.html)

- [x] 配置 github ssh：[https://bornforthis.cn/blog/2024/7month/git-ssh.html](https://bornforthis.cn/blog/2024/7month/git-ssh.html)

- [x] 安装 Codex：

- [x] 安装 typora：[https://typora.io/](https://typora.io/)

- [ ] 设计属于自己的 logo；

### 1.2 收集网站风格

不收集的话，就只能让 AI 来设计并开盲盒。

> 去网络冲浪🏄，看看有没有喜欢的博客。都把链接收集下来先。整理到语雀上，然后上课之前分享给我。「清华直博整理的」
>

```markdown
# 1.Dwarkesh Podcast

[https://www.dwarkesh.com/p/grant-sanderson-2](https://www.dwarkesh.com/p/grant-sanderson-2)  
  简介：Dwarkesh Podcast is a long-form interview show that explores artificial intelligence, science, economics, history, geopolitics, and the future of civilization. Host Dwarkesh Patel speaks with leading researchers, entrepreneurs, historians, and policymakers, asking deeply researched questions and following ideas wherever they lead. The conversations are intellectually demanding yet conversational, with an emphasis on technical detail, first-principles thinking, and bold speculation. Listening to it can give you sharper mental models and a deeper understanding of the technologies and ideas that may shape our future.  

# 2.20VC
[https://www.thetwentyminutevc.com/](https://www.thetwentyminutevc.com/)

 简介：20VC (The Twenty Minute VC) is a business and venture-capital podcast hosted by investor Harry Stebbings. It features candid conversations with leading founders, executives, and investors about fundraising, startup strategy, leadership, sales, and scaling technology companies. The style is fast-paced, direct, and energetic, with probing questions that encourage guests to share practical lessons as well as their strongest—and sometimes controversial—opinions. Listening to 20VC can help you understand how top investors evaluate opportunities, how successful founders make decisions, and what it takes to build and grow a high-performing company.  

# 3.Acquired
[https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp](https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp)

 简介：Acquired is a long-form business podcast hosted by Ben Gilbert and David Rosenthal. Each episode presents a deeply researched exploration of one major company—such as NVIDIA, Amazon, Costco, or LVMH—covering its complete history, business model, competitive strategy, and defining decisions. Its style combines engaging storytelling with detailed strategic analysis, making the multi-hour episodes feel like conversational audiobooks. Listening to Acquired can help you recognize the patterns behind exceptional companies and develop a deeper understanding of entrepreneurship, investing, competitive advantage, and long-term business success.  



# 4.听懂涨声
[https://www.xiaoyuzhoufm.com/podcast/6543750424e7ad2107e8b0b5](https://www.xiaoyuzhoufm.com/podcast/6543750424e7ad2107e8b0b5)

 简介：听懂涨声 (Ting Dong Zhang Sheng) is a Chinese-language podcast hosted by Yang Tiannan that explores family wealth, property, investing, and personal financial decisions. It pays particular attention to the choices facing China’s middle class, the challenges of midlife, and the changing future of major cities. The show combines accessible financial analysis with candid conversations about careers, education, relationships, social trends, and everyday life. Listening to it can help you make more thoughtful decisions about money while understanding how broader economic and social changes affect ordinary Chinese families.  

# 5.**<font style="color:rgb(22, 21, 23);">肥话连篇</font>**
[https://www.xiaoyuzhoufm.com/podcast/61d50d72ee197a3aac3dac42](https://www.xiaoyuzhoufm.com/podcast/61d50d72ee197a3aac3dac42)

 简介：肥话连篇 (Fei Hua Lian Pian) is a Chinese comedy and lifestyle podcast hosted by Fei Jie and Huizi. The pair share amusing stories and candid reflections on relationships, work, food, travel, personal growth, and the small frustrations of everyday life. Its style is spontaneous, warm, and playfully humorous, making each episode feel like a relaxed conversation with two close friends. Listening to it offers plenty of laughter and companionship, along with relatable perspectives and practical inspiration for navigating ordinary life with a more positive attitude.  

# 6.**<font style="color:rgb(22, 21, 23);">面基</font>**
[https://www.xiaoyuzhoufm.com/podcast/6388760f22567e8ea6ad070f](https://www.xiaoyuzhoufm.com/podcast/6388760f22567e8ea6ad070f)

 简介：面基 (Mian Ji) is a Chinese-language podcast about investing, personal finance, housing, technology, and the choices people face at different stages of life. Through solo episodes and in-depth conversations with fund managers, researchers, and other professionals, the show repeatedly asks “why” and examines the reasoning behind popular ideas and market narratives. Its style is curious, analytical, and approachable, translating complex financial concepts into discussions connected with everyday experience. Listening to it can strengthen your investment literacy, expose you to diverse strategies, and help you make more independent and thoughtful decisions about money and life.  

# 7.**<font style="color:rgb(22, 21, 23);">硅谷101</font>**
[https://sv101.fireside.fm/](https://sv101.fireside.fm/)    

 简介：硅谷101 (Silicon Valley 101) is a Chinese-language technology podcast founded and hosted by media professional Hongjun. Through in-depth interviews with scientists, entrepreneurs, investors, and industry experts, it explores artificial intelligence, semiconductors, robotics, startups, venture capital, and other emerging technologies. The show is timely and well researched, combining technical explanations with analysis of business models and wider social impact. Listening to it can help you follow global technology trends, understand how new innovations actually work, and gain perspectives from both Silicon Valley and China’s technology ecosystem.  

# 8.**<font style="color:rgb(22, 21, 23);">OnBoard</font>**
[https://www.xiaoyuzhoufm.com/podcast/61cbaac48bb4cd867fcabe22](https://www.xiaoyuzhoufm.com/podcast/61cbaac48bb4cd867fcabe22)

 简介：OnBoard! is a Chinese-language podcast hosted by investors Monica and GN, focusing on technology entrepreneurship and venture investing. Through candid conversations with founders, engineers, investors, and industry experts, it explores AI, SaaS, enterprise software, open source, product-led growth, and global expansion. The show is analytical and practitioner-oriented, combining investment frameworks with detailed stories and lessons from building real companies. Listening to it can help you understand how founders find product–market fit, how investors evaluate emerging opportunities, and how technology startups grow from early ideas into global businesses.  
```



### 1.3 Codex 网络经常性的重试

![](https://blog.images.bornforthis.cn/docs-images/sha256/ff/ff40459601ee8165a4da00a50ffb99251b0e77b4562405e31fe51507d4dc6bb2.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/25/2527f1e4f451df3491861b8159563c5240ce922c17254f3e62d868cd366773d3.png)

#### 1.3.1 查看代理端口

![](https://blog.images.bornforthis.cn/docs-images/sha256/19/191871f680456167672b3006d4bb8e07db07932a4cecbf8f361bcd571ba31d19.png)

没有启用的，进行启用即可。

![](https://blog.images.bornforthis.cn/docs-images/sha256/cb/cb752025ac7fc8ce4910ba27252ebdda20e98751272c0481bd46fedd3e608944.png)

#### 1.3.2 修改的 prompt

下面是完整的四条提示词。所有切换完成后，都应按 `⌘Q` 完全退出并重新打开 Codex。

::: tabs

@tab 1. 使用当前独立端口

> 请在我的 macOS 上把 Codex 配置为独立代理端口模式：HTTP(S) 使用 `127.0.0.1:7899`，SOCKS5 使用 `127.0.0.1:7898`。先确认两个端口正在监听；保留 `~/.codex/config.toml` 的所有现有内容，只在已有的 `[shell_environment_policy.set]` 中设置大小写 `HTTP_PROXY`、`HTTPS_PROXY`、`ALL_PROXY`、`NO_PROXY`，其中 HTTP/HTTPS 使用 `http://127.0.0.1:7899`，ALL_PROXY 使用 `socks5h://127.0.0.1:7898`；同步设置当前登录会话的 `launchctl`，并为当前活动网络服务开启系统 HTTP/HTTPS 代理 `7899` 和 SOCKS5 代理 `7898`，保留 localhost、局域网和 `*.local` 直连。不要开启 TUN，不要修改无关配置。最后验证 TOML、系统代理和 `chatgpt.com` 连通性，并提醒我完全退出后重启 Codex。

此模式下保持开启：

- HTTP(S)：`7899`
- SOCKS5：`7898`

Mixed `7897`、Redir `7895` 和 TUN 均可关闭。

@tab 2. 改用 Mixed 混合代理

> 请在我的 macOS 上把 Codex 切换为 Mixed 混合代理模式，统一使用 `127.0.0.1:7897`，无需开启 TUN。先确认 Mixed `7897` 正在监听；保留 `~/.codex/config.toml` 的所有其他内容，只更新已有 `[shell_environment_policy.set]` 中大小写代理变量：`HTTP_PROXY` 和 `HTTPS_PROXY` 设置为 `http://127.0.0.1:7897`，`ALL_PROXY` 设置为 `socks5h://127.0.0.1:7897`，保留 localhost、局域网和 `*.local` 直连；同步更新 `launchctl`，并将当前活动网络服务的系统 HTTP、HTTPS、SOCKS5 代理全部设置为 `127.0.0.1:7897`。不要重复创建 TOML 表头，不要修改无关配置。最后分别通过 HTTP 和 SOCKS5 协议验证 `7897` 到 `chatgpt.com` 的连通性，并提醒我完全退出后重启 Codex。

此模式下只需保持 Mixed `7897` 开启；`7898`、`7899`、Redir `7895` 和 TUN 均可关闭。

@tab 3. 恢复到未配置代理状态

> 请在我的 macOS 上彻底撤销此前为 Codex 设置的本地代理并恢复为不强制走代理的状态：保留 `~/.codex/config.toml` 的所有无关内容，仅从已有 `[shell_environment_policy.set]` 中删除大小写 `HTTP_PROXY`、`HTTPS_PROXY`、`ALL_PROXY`、`NO_PROXY` 八个代理变量，不要删除该表头或其中其他配置；使用 `launchctl unsetenv` 清除这些大小写环境变量；关闭当前活动网络服务的系统 HTTP、HTTPS 和 SOCKS5 代理，将其恢复为禁用状态。不要修改 TUN、`openai_base_url`、Codex 网络权限或其他设置。最后验证 TOML 语法、确认系统代理全部关闭且 `launchctl` 中不再存在代理变量，并提醒我完全退出后重启 Codex。

恢复后，所有代理端口都可以关闭。

@tab 4. 一条总控提示词

以后只需修改开头的模式名称：

> 请管理我的 macOS Codex 本地代理，执行模式为【独立端口 / Mixed / 恢复】。独立端口模式使用 HTTP(S) `127.0.0.1:7899` 和 SOCKS5 `127.0.0.1:7898`；Mixed 模式统一使用 `127.0.0.1:7897`，其中 HTTP/HTTPS 使用 `http://`、ALL_PROXY 使用 `socks5h://`；恢复模式则仅删除此前添加到 `~/.codex/config.toml` 中的大小写代理变量、清除对应 `launchctl` 环境变量并关闭当前活动网络服务的系统 HTTP/HTTPS/SOCKS5 代理。所有模式都必须保留其他配置和 localhost、局域网直连设置，不得重复 TOML 表头，不得修改 `openai_base_url` 或开启 TUN；执行前检查端口，执行后验证 TOML、系统代理及实际连通性，并提醒我完全退出后重启 Codex。

@tab 5. 教程

前面提供的是基于 MacOS 的提示词，那么 Windows 应该如何提供呢？

下面是罗同学提供的提示词：

```markdown
# 此处为 MacOS 提示词全部
【额外的提示词】请根据我的具体端口，以及我的电脑配置（windows系统）来修改以上提供给codex改变代理的提示词。
```

**思考**：【额外的提示词】放在现在这个位置，是否合适？——不合适！

为什么推荐放在前面，比较合适呢？

【把 AI 当人】

**举个例子**：

- **例子 1**：学弟发了一条很长的 MacOS 提示词给学长，在学弟发后续信息之前，学长是什么 OS？——莫名其妙！
- **例子 2**：学妹发信息给学长，说：在吗？学长是什么 OS？：傻逼，有啥事情先说，我再考虑在不在。

先说指令，再说提供的参考，这样逻辑比较清楚明确。大模型本身是概率模型，你把你的指令放在【参考指令】后面，大模型还得单独、特地的去思考：用户指令（想法、需求）？用户提供参考的指令中的一部分？——无形间增加了 AI 理解指令的难度！

```markdown
【额外的提示词】请根据我的具体端口，以及我的电脑配置（windows系统）来修改以上提供给codex改变代理的提示词。
# 此处为 MacOS 提示词全部
```

@tab Windows

```markdown
请在 Windows 上将 Codex 配置为通过本地 HTTP(S) 代理 127.0.0.1:【端口】：设置当前用户的 HTTP_PROXY 和 HTTPS_PROXY，设置 NO_PROXY=localhost,127.0.0.1,::1，同时配置 Windows 当前用户系统代理并绕过本地地址；不要开启 TUN、不要设置 ALL_PROXY，配置后实际验证 OpenAI 连接并提醒我彻底重启 Codex。
```



:::



## 2. 开盲盒做出第一版网站

### 2.1 初代提示词

如果不给 AI 任何自己喜欢、参考的网站，那就只能开盲盒了。为了一开始更贴近自己想要的网站，给 AI 提供自己中意的网站。

::: tip 如何把自己整理的网站给 AI？

- **形式 1**：给每个网站的截图➕对应想要的点；（复杂些，但准确性高）
- **形式 2**：直接给 Codex 每个网站链接，让 Codex 自行提炼总结，设计出网站。（准确性没有形式 1 高，但是轻松。）
- **形式 3**：结合形式 1 与形式 2，万事开头难，先让 AI 快速开始，后续使用针对性的描述进行改进！

:::

```markdown
我想做一个个人静态博客网站，需要可以编写Markdown文章并发布，所有的样式需要你全新设计研发。我搜集了一些比较中意的一些网站，你进行全面参考和访问查看。总结、提炼各个特点，功能不仅仅限制就博客功能，其它功能你来设计增加。参考网站如下：# 1.Dwarkesh Podcast
  
 [https://www.dwarkesh.com/p/grant-sanderson-2](https://www.dwarkesh.com/p/grant-sanderson-2)  
     简介：Dwarkesh Podcast is a long-form interview show that explores artificial intelligence, science, economics, history, geopolitics, and the future of civilization. Host Dwarkesh Patel speaks with leading researchers, entrepreneurs, historians, and policymakers, asking deeply researched questions and following ideas wherever they lead. The conversations are intellectually demanding yet conversational, with an emphasis on technical detail, first-principles thinking, and bold speculation. Listening to it can give you sharper mental models and a deeper understanding of the technologies and ideas that may shape our future.  

# 2.20VC
[https://www.thetwentyminutevc.com/](https://www.thetwentyminutevc.com/)

    简介：20VC (The Twenty Minute VC) is a business and venture-capital podcast hosted by investor Harry Stebbings. It features candid conversations with leading founders, executives, and investors about fundraising, startup strategy, leadership, sales, and scaling technology companies. The style is fast-paced, direct, and energetic, with probing questions that encourage guests to share practical lessons as well as their strongest—and sometimes controversial—opinions. Listening to 20VC can help you understand how top investors evaluate opportunities, how successful founders make decisions, and what it takes to build and grow a high-performing company.  

# 3.Acquired
[https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp](https://open.spotify.com/show/7Fj0XEuUQLUqoMZQdsLXqp)

    简介：Acquired is a long-form business podcast hosted by Ben Gilbert and David Rosenthal. Each episode presents a deeply researched exploration of one major company—such as NVIDIA, Amazon, Costco, or LVMH—covering its complete history, business model, competitive strategy, and defining decisions. Its style combines engaging storytelling with detailed strategic analysis, making the multi-hour episodes feel like conversational audiobooks. Listening to Acquired can help you recognize the patterns behind exceptional companies and develop a deeper understanding of entrepreneurship, investing, competitive advantage, and long-term business success.  



# 4.听懂涨声
[https://www.xiaoyuzhoufm.com/podcast/6543750424e7ad2107e8b0b5](https://www.xiaoyuzhoufm.com/podcast/6543750424e7ad2107e8b0b5)

    简介：听懂涨声 (Ting Dong Zhang Sheng) is a Chinese-language podcast hosted by Yang Tiannan that explores family wealth, property, investing, and personal financial decisions. It pays particular attention to the choices facing China’s middle class, the challenges of midlife, and the changing future of major cities. The show combines accessible financial analysis with candid conversations about careers, education, relationships, social trends, and everyday life. Listening to it can help you make more thoughtful decisions about money while understanding how broader economic and social changes affect ordinary Chinese families.  

# 5.**<font style="color:rgb(22, 21, 23);">肥话连篇</font>**
[https://www.xiaoyuzhoufm.com/podcast/61d50d72ee197a3aac3dac42](https://www.xiaoyuzhoufm.com/podcast/61d50d72ee197a3aac3dac42)

    简介：肥话连篇 (Fei Hua Lian Pian) is a Chinese comedy and lifestyle podcast hosted by Fei Jie and Huizi. The pair share amusing stories and candid reflections on relationships, work, food, travel, personal growth, and the small frustrations of everyday life. Its style is spontaneous, warm, and playfully humorous, making each episode feel like a relaxed conversation with two close friends. Listening to it offers plenty of laughter and companionship, along with relatable perspectives and practical inspiration for navigating ordinary life with a more positive attitude.  

# 6.**<font style="color:rgb(22, 21, 23);">面基</font>**
[https://www.xiaoyuzhoufm.com/podcast/6388760f22567e8ea6ad070f](https://www.xiaoyuzhoufm.com/podcast/6388760f22567e8ea6ad070f)

    简介：面基 (Mian Ji) is a Chinese-language podcast about investing, personal finance, housing, technology, and the choices people face at different stages of life. Through solo episodes and in-depth conversations with fund managers, researchers, and other professionals, the show repeatedly asks “why” and examines the reasoning behind popular ideas and market narratives. Its style is curious, analytical, and approachable, translating complex financial concepts into discussions connected with everyday experience. Listening to it can strengthen your investment literacy, expose you to diverse strategies, and help you make more independent and thoughtful decisions about money and life.  

# 7.**<font style="color:rgb(22, 21, 23);">硅谷101</font>**
[https://sv101.fireside.fm/](https://sv101.fireside.fm/)    

    简介：硅谷101 (Silicon Valley 101) is a Chinese-language technology podcast founded and hosted by media professional Hongjun. Through in-depth interviews with scientists, entrepreneurs, investors, and industry experts, it explores artificial intelligence, semiconductors, robotics, startups, venture capital, and other emerging technologies. The show is timely and well researched, combining technical explanations with analysis of business models and wider social impact. Listening to it can help you follow global technology trends, understand how new innovations actually work, and gain perspectives from both Silicon Valley and China’s technology ecosystem.  

# 8.**<font style="color:rgb(22, 21, 23);">OnBoard</font>**
[https://www.xiaoyuzhoufm.com/podcast/61cbaac48bb4cd867fcabe22](https://www.xiaoyuzhoufm.com/podcast/61cbaac48bb4cd867fcabe22)

    简介：OnBoard! is a Chinese-language podcast hosted by investors Monica and GN, focusing on technology entrepreneurship and venture investing. Through candid conversations with founders, engineers, investors, and industry experts, it explores AI, SaaS, enterprise software, open source, product-led growth, and global expansion. The show is analytical and practitioner-oriented, combining investment frameworks with detailed stories and lessons from building real companies. Listening to it can help you understand how founders find product–market fit, how investors evaluate emerging opportunities, and how technology startups grow from early ideas into global businesses.
```



## 2.2 效果预览



## 2.3 推送到 GitHub 仓库

### 2.3.1 创建 GitHub 仓库

![](https://blog.images.bornforthis.cn/docs-images/sha256/f4/f4aa1545b293592d27795d43585ad5f172e0fb07a28edc6253329656895be1d0.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/03/0349e077d1cf569dfe9e86593e17f59b378d38b36e8f43852327a56af0e0b81d.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/3a/3a74a6c58d4610d70ce75285471f489834a527fbc64cd49c43afee4f91e05b53.png)

### 2.3.2 将本地文件绑定远程 GitHub 仓库

1. 启动终端：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/b7/b7de283a6087bd35097ff27b7dfe34ad9f139ddab7bf952fdf24ccd8d545a05e.png)

2. 切换仓库指令到 SSH：

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/d4/d473ec0c517efe385d3c30ea9c761541a1b49041247bfcdd655f508eb9ce8864.png)

3. 开始绑定远程仓库：

    ::: code-tabs

    @tab 修改

    ```bash
    echo "# CodexWeb" >> README.md  # 不要、不要执行
    git init
    git add README.md # 改成: git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin git@github.com:AndersonHJB/CodexWeb.git
    git push -u origin main
    ```

    @tab 最终版

    ```bash
    git init
    git add .
    git commit -m "first commit"
    git branch -M main
    git remote add origin git@github.com:AndersonHJB/CodexWeb.git
    git push -u origin main
    ```

    

    :::

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/35/358085b6248547880ca4a43d4f7b12940ef7b35959332ff7a537275c6b45beb6.png)

    ![](https://blog.images.bornforthis.cn/docs-images/sha256/bf/bf89a9851b4affdb6c855a4f9ecfcd13c3c81cf04d7dddb1f305fb23ec1dfa84.png)

















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