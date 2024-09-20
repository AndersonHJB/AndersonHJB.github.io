---
title: Python 递归详解
tags:
  - 喵喵纪念日
categories:
  - hexo 网站相关
description: 本篇是实现纪念日页面的代码记录，以及随时浮现的想法，转瞬即逝～
top_img: /img/posts/07-anniversary/07-anniversary.webp
cover: /img/posts/07-anniversary/07-anniversary.webp
comments: true
toc: true
mathjax: false
katex: false
highlight_shrink: false
swiper_index: 1
top_group_index: 1
background: '#fff'
aside: true
ai:
abbrlink: 41c7c45e
date: 2024-09-20 18:57:29
toc_number:
toc_style_simple:
aplayer:
---

# 1. Plan

你好，我是悦创。

在开发的过程中，想法💡转瞬即逝，故要写下自己的想法，以此在外来某一时刻还记得当下～

如果你想看看，我的开发计划和待办，欢迎点击：[TodoList](/todolist/)

如果你实现了，请在下面留言，让我知道有“众多”人同我一样在支持我，如果你魔改了，也请让我看看，喵喵纪念日页面会变成什么样子。

**效果预览**：[喵喵纪念日](/anniversary/)

# 2. 开始实现

{% tabs anniversary,1 %}
<!-- tab 喵喵纪念日-V0.1 -->
{% tabs anniversary1 %}
<!-- tab 1. 新建页面 -->
在命令行输入如下命令：

- `hexo new page anniversary`

修改头部信息：

```markdown
---
title: anniversary
date: 2024-09-16 20:31:37
type: 'anniversary'
top_background: /img/anniversary/anniversary5.webp
aside: false
---
```
<!-- endtab -->
<!-- tab 2. 创建 anniversary.pug -->
- Path: `/themes/anzhiyu/layout/includes/page/anniversary.pug`

**代码如下：**
```html
#anniversary-box
    - let anniversary_background = page.top_background
    .author-content.author-content-item.anniversary.single(style=anniversary_background ? `background: url(${anniversary_background}) top / cover no-repeat` : "")
        .card-content
            .author-content-item-tips anniversary
            span.author-content-item-title 喵喵纪念日
            .content-bottom
            .tips 时间如潮水般涌动向前，你会为谁停留片刻？
            .banner-button-group
              a.banner-button(onclick='pjax.loadUrl("/about/")')
                i.anzhiyufont.anzhiyu-icon-arrow-circle-right(style='font-size: 1.5rem')
                span.banner-button-text 我的更多
    #anniversary-main
      .anniversary-cards
        each item in site.data.anniversary
          .anniversary-card(style=`background-color: ${item.color}`)
            .card-content
              .card-title
                if item.icon
                  img.card-icon(src=item.icon alt="icon")
                | #{item.name}  <!-- 始终显示标题 -->
              .card-date 开始日期：#{item.date} #{item.lunar ? '(农历)' : '(新历)'}
              .card-target-date 目标日期：
                span.target-date(data-date=item.date data-lunar=item.lunar) 计算中...
              .card-countdown 剩余天数：
                span.countdown(data-date=item.date data-lunar=item.lunar) 计算中...
              .card-total-days 已经过的天数：
                span.total-days(data-date=item.date data-lunar=item.lunar) 计算中...
```
<!-- endtab -->
<!-- tab 3. 创建 anniversary.css -->
- Path: `/source/static/css/anniversary.css`

**代码如下：**

```css
/* 背景与页面基本样式 */
body[data-type="anniversary"] #web_bg {
    background: var(--anzhiyu-background);
}

body[data-type="anniversary"] #page {
    border: 0;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    background: 0 0 !important;
}

body[data-type="anniversary"] #page .page-title {
    display: none;
}

/* 卡片整体布局 */
.anniversary-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* 响应式布局 */
    gap: 20px;
    padding: 20px;
}

/* 卡片样式 */
.anniversary-card {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.anniversary-card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

/* 卡片标题和图标水平对齐的样式 */
.card-title {
    display: flex; /* 使用 flexbox 使图标和标题水平对齐 */
    align-items: center; /* 图标和标题垂直居中 */
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
}

/* 卡片标题前的图标 */
/* .card-title::before {
    content: url('/img/favicon.svg');
    display: inline-block;
    margin-right: 10px;
} */
/* 卡片标题前的图标样式 */
.card-icon {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 10px;
}

/* 如果没有图标，标题仍然显示 */
.card-title img.card-icon {
    display: inline-block; /* 使图标显示为行内块 */
}

/* 卡片内日期与天数样式 */
.card-date, .card-target-date, .card-countdown, .card-total-days {
    font-size: 1rem;
    margin: 10px 0;
    color: #555;
}

/* 天数显示加粗 */
.countdown, .target-date, .total-days {
    font-weight: bold;
    color: #ffffff; /* 文字颜色与卡片背景的对比 */
}

/* 根据卡片背景自动调整文字颜色 */
.anniversary-card[data-background="dark"] .countdown, 
.anniversary-card[data-background="dark"] .target-date, 
.anniversary-card[data-background="dark"] .total-days {
    color: #f9f9f9; /* 深色背景的卡片用浅色文字 */
}

/* 卡片内图标大小 */
.anniversary-card .card-title::before {
    width: 24px;
    height: 24px;
    vertical-align: middle;
}

/* 响应式布局优化，适配不同设备 */
@media (max-width: 768px) {
    .anniversary-cards {
        grid-template-columns: 1fr; /* 移动端一列展示 */
    }

    .anniversary-card {
        padding: 15px;
    }

    .card-title {
        font-size: 1.2rem;
    }
}

/* 动画效果 */
.anniversary-card {
    transition: all 0.3s ease-in-out;
}

.anniversary-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}
```
<!-- endtab -->

<!-- tab 4. anniversary.js -->
- Path: `/source/static/js/anniversary.js`
<!-- endtab -->

{% endtabs %}
<!-- endtab -->

<!-- tab 喵喵纪念日-V0.2 -->
{% tabs anniversary2 %}

{% endtabs %}
<!-- endtab -->
{% endtabs %}













{% span center log large blue, 🪧 %}

{% folding blue close, 公众号：AI悦创【二维码】 %}

![](https://bornforthis.cn/gzh.jpg)

{% endfolding %}