---
title: 静态站点悖论「The Static Site Paradox」
tags:
  - 悦读
categories:
  - 悦读
keywords:
  - AI悦创
  - Vlog
  - Python一对一教学
  - AI悦创阅读
description: 
  - 这是一篇关于个人博客的文章，作者 Bornforthis 讨论了一个看似矛盾的现象：为什么专业的软件工程师往往使用简单的静态 HTML 网站（如 Github Pages），而普通用户却依赖复杂的内容管理系统 CMS （如 WordPress）。
top_img: /img/posts/P08-Reading/01-静态站点悖论「The Static Site Paradox」/静态站点悖论.png
comments: true
cover: /img/posts/P08-Reading/01-静态站点悖论「The Static Site Paradox」/静态站点悖论.webp
toc: true
mathjax: false
katex: false
highlight_shrink: false
aside: true
swiper_index: 1
top_group_index: 1
background: '#fff'
ai: 
  - 这是一篇关于个人博客的文章，作者 Bornforthis 讨论了一个看似矛盾的现象：为什么专业的软件工程师往往使用简单的静态 HTML 网站（如 Github Pages），而普通用户却依赖复杂的内容管理系统 CMS （如 WordPress）。
abbrlink: c36f2c3
date: 2024-10-30 20:40:28
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
aplayer:
---

你好，我是悦创。

为什么专业的软件工程师往往使用简单的静态 HTML 网站（如 Github Pages），而普通用户却依赖复杂的内容管理系统 CMS （如 WordPress）。

这就是我们接下来要谈论的内容，如果你有什么想法可以在下方评论区中与我交流。

在你面前有两个个人网站，都被用作博客和展示所有者的基本联系信息：

1. 一个是用 PHP 编写的复杂 CMS，需要一个网络服务器、多个工作进程、一个 Redis 缓存和一个 SQL 数据库。该网站还有一个大型的前端组件，以单页应用的形式加载，然后通过请求 JSON 形式的内容来执行导航，随后在客户端进行“渲染更新”。
2. 另一个只是纯静态 HTML 文件的集合，配有一部分 CSS、JavaScript 文件。

如果不加深入了解，你可能会认为普通用户会拥有【2】这样的简单网站，而程序员会使用类似【1】的复杂解决方案。但实际上情况恰恰相反：很少有程序员能够“负担得起”【1】作为自己的网站，往往大部分程序员会选择第二种作为个人网站，而几乎所有普通用户都被“迫使”用过度复杂的【1】解决方案。

> 简而言之：一个是依赖 PHP、SQL 数据库、Redis 缓存和单页应用的大型 CMS 站点，另一个则是纯静态的 HTML 和 CSS 文件。虽然我们可能认为普通用户会选择简单的静态站，而专业开发者更倾向于复杂的方案，但实际情况却完全相反。

尽管这很奇怪，但其实原因并不难理解，搭建一个 WordPress 博客比自己摸索清楚所有中间步骤要容易得多。为什么这么说呢？比如我现在要搭建一个静态网站，就需要如下步骤：

1. 购买域名
2. 找到一个托管平台「阿里云、谷歌云等」
3. 配置 DNS「域名解析」
4. 找到一个静态站点生成器（或完全手工制作所有内容）「hexo、vuepress」
5. 学习如何设置一个部署流水线

因此，尽管我们软件工程师可以享受 GitHub Pages 或 Cloudflare Pages 等提供的免费托管和自定义域名支持，但普通用户却被一群[贪婪的小丑](https://techcrunch.com/2024/10/04/wordpress-vs-wp-engine-drama-explained/)困住，他们让用户为每一个细节付费，同时耗费大量计算资源来渲染本来 99% 情况下可以是静态网站的内容。

上周，我在厦门 Bornforthis 会议上发表了关于我编写 HTML 语言服务器的经验。大部分演讲内容是关于在实现语言服务器时应该采取（或避免的）策略性建议，但我以一个更高层次的观点作为演讲的结尾，也将其作为这篇博文的结尾。

> 当我无意间发现 SuperHTML 时，我发现它是[第一个为 HTML 提供诊断报告的语言服务器](https://kristoff.it/blog/first-html-lsp/)。作者写了一篇博客文章，登上了 Hacker News 的头版，没有人纠正 Loris Cro，所以你可以相信它的真实性。
>
>起初我觉得这挺有趣，但深入思考后，觉得其实有点令人惋惜。尽管确实有代码检查工具存在，人们也可以在编辑器中获得诊断信息，但这些工具通常绑定于特定的前端框架，而非纯 HTML，这导致人们即使不需要框架带来的复杂性（也就是不需要使用框架的功能）也会选择使用它们。
>
> 在我看来，这种情况很糟糕。并不是因为对简洁的抽象偏爱，而是因为网络不仅仅属于软件工程师。我们让网络变得越复杂，就越是将普通用户推向我们称之为社交网络的“围栏”中。
>
> 当律师和会计师无法阐明他们各自领域系统的运作方式时，使他们成为不可避免的系统中介时，你难道不感到“愤怒”吗？从理论上讲，你应该能够自己驾驭这些系统。
>
> 每当我们在软件工程中，尤其是网络开发中，未能让简单的事情变得容易时，我们就在同样的方面让社会失望。
>
> 这不是初创公司或大型科技公司可以为我们解决的问题，他们的经济动机太不一致了，所以我邀请你们所有人帮助让网络更容易访问，一部分原因是我们对自己的技术感到自豪，另一部分原因是当网络更多地由不同于的人创造时，它会更有趣。



{% folding blue close, EN %}

In front of you are two personal websites, each used as a blog and to display basic contact info of the owner:

1. One is a complex CMS written in PHP that requires a web server, multiple workers, a Redis cache, and a SQL database. The site also has a big frontend component that loads as a Single Page Application and then performs navigation by requesting the content in JSON form, which then gets “rehydrated” client-side.
2. The other is a collection of static HTML files and one or two CSS files. No JavaScript anywhere.

If you didn’t know any better, you would expect almost all normal users to have [2] and professional engineers to have something like [1], but it’s actually the inverse: only few professional software engineers can “afford” to have the second option as their personal website, and almost all normal users are stuck with overcomplicated solutions.

Weird as it might be, it’s not a great mystery why that is: it’s easier to spin up a Wordpress blog than it is to figure out by yourself all the intermediate steps:

1. Buy a domain
2. Find a hosting platform
3. Configure DNS
4. Find an SSG (or handcraft everything yourself)
5. Learn how to setup a deployment pipeline

And so, while we software engineers enjoy free hosting & custom domain support with GitHub Pages / Cloudflare Pages / etc, normal users are stuck with a bunch of [greedy clowns](https://techcrunch.com/2024/10/04/wordpress-vs-wp-engine-drama-explained/) that make them pay for every little thing, all while wasting ungodly amounts of computational power to render what could have been a static website in 99% of cases.

Last week I spoke at SquiggleConf in Boston about my experience writing a language server for HTML. Most of the talk is tactical advice on what to do (or avoid) when implementing one, but I concluded the talk with a more high-level point, which I will now report here fully as conclusion to this blog post.

> When I published SuperHTML, I discovered that it was [the first ever language server for HTML](https://kristoff.it/blog/first-html-lsp/) that reported diagnostics to the user. I wrote a blog post about it, it got [on the frontpage of Hacker News](https://news.ycombinator.com/item?id=41512213) and nobody corrected me, so you know it’s true.
>
> I originally found it a funny thing, but thinking about it more, it’s a bit sad that this is the case. Linters do exist, and people can get diagnostics in their editor, but that’s usually tooling tied to a specific frontend framework and not vanilla HTML, which leads to people opting to use frameworks even if they don’t really have a real need for all the complexity that those frameworks bring.
>
> And that’s bad in my opinion. Not because of an abstract appreciation for simplicity, but because **the web doesn’t belong just to software engineers**. The more we make the web complex, the more we push normal users into the enclosures that we like to call *social networks*.
>
> Don’t you find it infuriating when lawyers and accountants fail to clarify how their respective domains work, making them unavoidable intermediaries of systems that in theory you should be able to navigate by yourself?
>
> **Whenever we fail to make simple things easy in software engineering, and webdev especially, we are failing society in the exact same way.**
>
> This is not something that startups or big tech can solve for us, their economic incentives are just too misaligned, so I invite you all to help make the web more accessible, partially as a matter of taking pride in our craft, and partially because the web used to be more interesting when more of it was made by people different from us.



{% endfolding %}

{% folding blue close, other %}

这是一篇关于个人博客的文章，作者 Loris Cro 讨论了一个看似矛盾的现象：**为什么专业的软件工程师往往使用简单的静态 HTML 网站（如 Github Pages），而普通用户却依赖复杂的内容管理系统 CMS （如 WordPress）。**

作者用两个例子进行了对比：一个是依赖 PHP、SQL 数据库、Redis 缓存和单页应用的大型 CMS 站点，另一个则是纯静态的 HTML 和 CSS 文件。虽然我们可能认为普通用户会选择简单的静态站，而专业开发者更倾向于复杂的方案，但实际情况却完全相反。

作者指出，这种现象并不奇怪，**因为普通用户难以掌握配置静态网站的多个步骤，如购买域名、配置 DNS、选择静态站点生成器（SSG）等，反倒是复杂的 CMS 系统提供了一键式的解决方案，比如 WordPress。**

而另一方面，许多软件工程师能够通过 GitHub Pages 等平台免费托管静态站点，避免了额外费用。然而，普通用户被迫为这些过度复杂的解决方案支付高昂的成本，并且这些系统消耗了大量不必要的计算资源，尽管 99% 的情况下，静态站点就足够了。

普通用户为达成目标总是追求更好更简洁的体验，而服务商迎合了他们的需求，为他们简化流程、优化体验、提供付费服务。**用户在不自觉中就为昂贵且浪费的东西买单了，到头来竟是给自己上的枷锁。**

在文章的后半部分，作者介绍了他在波士顿 SquiggleConf 会议上分享的一项成果 —— 他开发的 SuperHTML 语言服务器。这是首个为 HTML 提供诊断功能的语言服务器，它为用户提供编码问题报告。

然而令人遗憾的是，虽然 HTML 的原生简洁性应让更多人使用它，许多人还是依赖复杂的前端框架，即使他们并不真正需要这些框架带来的额外功能。

作者进一步反思了技术复杂化的趋势，他认为，网络的复杂性正在将普通用户推向封闭的社交网络，使他们无法自由构建自己的网站。

作者借此批评了软件工程师对复杂性的盲目追求，认为这类似于律师或会计行业故意设置的 “门槛”，让外行人难以涉足并依赖他们的专业服务。这种技术壁垒阻碍了普通用户参与互联网创作的机会。

最后，作者呼吁所有开发者不要仅仅为了技术创新而增加复杂性，而是应该简化工具和流程，让互联网重新变得对普通人更具可访问性。毕竟，网络不应只是软件工程师的领地，而是所有人都能自由创作和表达的平台。

> 原文的表述更激烈：“普通用户却被一群贪婪的小丑所困，这让他们为每一件小事付出代价，同时浪费大量的计算能力在 99% 的情况下呈现静态网站。”

{% endfolding %}


{% span center log large blue, 🪧 %}

{% folding blue close, 公众号：AI悦创【二维码】 %}

![](https://bornforthis.cn/gzh.jpg)

{% endfolding %}

{% tip info %}AI悦创·编程一对一

> AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh
>
> C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh

{% endtip %}