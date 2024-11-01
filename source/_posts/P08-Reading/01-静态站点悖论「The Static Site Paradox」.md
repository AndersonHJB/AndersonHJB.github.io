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

{% tabs en %}

<!-- tab ZH -->

在你面前有两个个人网站，都被用作博客和展示所有者的基本联系信息：

1. 一个是用 PHP 编写的复杂 CMS，需要一个网络服务器、多个工作进程、一个 Redis 缓存和一个 SQL 数据库。该网站还有一个大型的前端组件，以单页应用的形式加载，然后通过请求 JSON 形式的内容来执行导航，随后在客户端进行“渲染更新”。
2. 另一个只是静态 HTML 文件的集合，配有一两个 CSS 文件，有一部分 JavaScript。

~~如果你不了解情况，你会期望几乎所有普通用户都有 [2]，而专业工程师会有类似 [1] 的东西，但事实恰恰相反：只有少数专业软件工程师“负担得起”将第二个选项作为他们的个人网站，而几乎所有普通用户都被困在过于复杂的解决方案中。~~

如果不加深入了解，你可能会认为普通用户会拥有【2】这样的简单网站，而专业工程师会使用类似【1】的复杂解决方案。但实际上情况恰恰相反：很少有专业软件工程师能够“负担得起”，大部分而是将第二种作为个人网站，而几乎所有普通用户都被“迫使”用过度复杂的 【1】 解决方案。

尽管这很奇怪，但其实原因并不难理解：搭建一个 WordPress 博客比自己摸索清楚所有中间步骤要容易得多：

1. 购买域名
2. 找到一个托管平台
3. 配置 DNS
4. 找到一个静态站点生成器（或完全手工制作所有内容）
5. 学习如何设置一个部署流水线

~~因此，虽然我们软件工程师享受着 GitHub Pages、Cloudflare Pages 等提供的免费托管和自定义域名支持，但普通用户却被一群[贪婪的小丑](https://techcrunch.com/2024/10/04/wordpress-vs-wp-engine-drama-explained/)所困，他们让用户为每一件小事付费，同时在 99% 的情况下浪费了大量的计算能力来渲染本可以是静态网站的内容。~~

因此，尽管我们软件工程师可以享受 GitHub Pages 或 Cloudflare Pages 等提供的免费托管和自定义域名支持，但普通用户却被一群[贪婪的小丑](https://techcrunch.com/2024/10/04/wordpress-vs-wp-engine-drama-explained/)困住，他们让用户为每一个细节付费，同时耗费大量计算资源来渲染本来 99% 情况下可以是静态网站的内容。

上周，我在厦门 Bornforthis 会议上发表了关于我编写 HTML 语言服务器的经验。大部分演讲内容是关于在实现语言服务器时应该采取（或避免的）策略性建议，但我以一个更高层次的观点作为演讲的结尾，也将其作为这篇博文的结尾。

> 当我发布 SuperHTML 时，我发现它是[第一个为 HTML 提供诊断报告的语言服务器](https://kristoff.it/blog/first-html-lsp/)。我写了一篇博客文章，登上了 Hacker News 的头版，没有人纠正我，所以你知道这是真的。
>
> 起初我觉得这很有趣，但仔细想想，这有点令人难过。Linter 确实存在，人们可以在编辑器中获得诊断信息，但那通常是与特定前端框架绑定的工具，而不是原生的 HTML，这导致人们选择使用框架，即使他们并不真正需要那些框架带来的所有复杂性。
>
> 在我看来，这是不好的。不是因为对简单性的抽象欣赏，而是因为 **网络不仅仅属于软件工程师**。我们让网络变得越复杂，就越把普通用户推向我们称之为*社交网络*的围栏。
>
> 当律师和会计师未能澄清各自领域的工作，使他们成为理论上你应该能够自己导航的系统中不可避免的中间人时，你难道不觉得恼火吗？
>
> **每当我们未能让软件工程，尤其是网络开发中的简单事情变得容易时，我们就在以完全相同的方式辜负社会。**
>
> 这不是初创公司或大型科技公司能够为我们解决的问题，他们的经济激励太不一致了，所以我邀请大家一起帮助使网络更易于访问，部分是为了对我们的工艺感到自豪，部分是因为当更多不同于我们的人制作网络内容时，网络曾经更加有趣。


<!-- endtab -->

<!-- tab EN -->

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
<!-- endtab -->
{% endtabs %}