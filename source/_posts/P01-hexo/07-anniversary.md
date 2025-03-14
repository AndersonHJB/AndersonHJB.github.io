---
title: 给你的网站添加喵喵纪念日页面
tags:
  - 喵喵纪念日
  - 纪念日页面
categories:
  - hexo 网站相关
  - Hexo Bornforthis Theme
description: 本篇是实现纪念日页面的代码记录，以及随时浮现的想法，转瞬即逝～
top_img: /img/posts/P01-hexo/07-anniversary/07-anniversary.webp
cover: /img/posts/P01-hexo/07-anniversary/07-anniversary.webp
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
  - '时间如潮水般涌动向前，你会为谁停留片刻？你此刻为我停留，请留下你的足迹👣......'
abbrlink: 41c7c45e
date: 2024-09-20 18:57:29
toc_number:
toc_style_simple:
aplayer:
---

# 1. 前言

你好，我是悦创。

在开发的过程中，想法💡转瞬即逝，故要写下自己的想法，以此在外来某一时刻还记得当下～

如果你想看看，我的开发计划和待办，欢迎点击：[TodoList](/todolist/)

如果你实现了，请在下面留言，让我知道有“众多”人同我一样在支持我，如果你魔改了，也请让我看看，喵喵纪念日页面会变成什么样子。

`yml` 中可以配置是否显示版权©️，这个小伙伴们自选吧。可以的情况下，请把第一个纪念日板块留给`喵喵纪念日`并开启 `show_copyright: true`，不设置默认不显示。

```yml
- name: 喵喵纪念日
  date: '2024-09-18'
  icon: '/img/favicon.svg'
  lunar: false
  color: '#a8dadc'
  show_copyright: true  # 新增字段，控制是否显示版权
```

- **效果预览**：[喵喵纪念日](/anniversary/)
- **推荐配色**：[coolors.co](https://coolors.co/palettes/trending)

**可能的用途：**

1. 生日纪念日
2. 节日纪念日
3. 食品有无到期
4. 保修期剩余时间
4. 恋爱记录
5. ......「留下你的想法💡」

# 2. 开始实现

{% tabs anniversary,7 %}
<!-- tab 喵喵纪念日-V0.1 -->
> 发布日期📅：{% span cyan log, 2024-09-20 19:52:52 %}
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

代码如下：

```javascript
// anniversary.js

function initializeAnniversary() {
    function LunarDate(Year, Month, Day) {
        try {
            let solar = Lunar.fromYmdHms(Year, Month, Day, 0, 0, 0).getSolar();
            return new Date(solar.getYear(), solar.getMonth() - 1, solar.getDay());
        } catch (error) {
            return LunarDate(Year, Month, Day - 1);
        }
    }
    // 计算两个日期之间的天数差
    function daysBetween(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.ceil((date2 - date1) / oneDay);
    }
    // 剩余天数
    function daysLeft(dateStr, isLunar) {
        const [Year, Month, Day] = dateStr.split("-").map(Number);
        let now = new Date();
        now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let anniversaryDate;
        if (isLunar) {
            anniversaryDate = LunarDate(now.getFullYear(), Month, Day);
            if (anniversaryDate < now) {
                anniversaryDate = LunarDate(now.getFullYear() + 1, Month, Day);
            }
        } else {
            anniversaryDate = new Date(now.getFullYear(), Month - 1, Day);
            if (anniversaryDate < now) {
                anniversaryDate = new Date(now.getFullYear() + 1, Month - 1, Day);
            }
        }
        return daysBetween(now, anniversaryDate);
    }
    // 经过天数
    function totalDays(dateStr, isLunar) {
        const [Year, Month, Day] = dateStr.split("-").map(Number);
        let now = new Date();
        now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let startDate;
        if (isLunar) {
            startDate = LunarDate(Year, Month, Day);
        } else {
            startDate = new Date(Year, Month - 1, Day);
        }
        return daysBetween(startDate, now);
    }
    // 返回目标日期
    function targetDate(dateStr, isLunar) {
        const [Year, Month, Day] = dateStr.split("-").map(Number);
        let now = new Date();
        now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let anniversaryDate;
        if (isLunar) {
            anniversaryDate = LunarDate(now.getFullYear(), Month, Day);
            if (anniversaryDate < now) {
                anniversaryDate = LunarDate(now.getFullYear() + 1, Month, Day);
            }
        } else {
            anniversaryDate = new Date(now.getFullYear(), Month - 1, Day);
            if (anniversaryDate < now) {
                anniversaryDate = new Date(now.getFullYear() + 1, Month - 1, Day);
            }
        }
        // 手动拼接日期，确保月份和日期都是两位数
        const year = anniversaryDate.getFullYear();
        const month = (anniversaryDate.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，需要加1
        const day = anniversaryDate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`; // 使用'-'作为分隔符
        //   return anniversaryDate.toDateString();  // 直接返回斜杆日期
        // return anniversaryDate.toLocaleDateString('zh-CN');
    }

    const countdownElements = document.querySelectorAll(".countdown");
    const totalDaysElements = document.querySelectorAll(".total-days");
    const targetDateElements = document.querySelectorAll(".target-date");

    countdownElements.forEach(function (elem) {
        const dateStr = elem.getAttribute("data-date");
        const isLunar = elem.hasAttribute("data-lunar");
        elem.textContent = daysLeft(dateStr, isLunar);
    });

    totalDaysElements.forEach(function (elem) {
        const dateStr = elem.getAttribute("data-date");
        const isLunar = elem.hasAttribute("data-lunar");
        elem.textContent = totalDays(dateStr, isLunar);
    });

    // 显示目标日期
    targetDateElements.forEach(function (elem) {
        const dateStr = elem.getAttribute("data-date");
        const isLunar = elem.hasAttribute("data-lunar");
        elem.textContent = targetDate(dateStr, isLunar);
    });
}

// 初始页面加载
document.addEventListener("DOMContentLoaded", initializeAnniversary);

// 适配 pjax
document.addEventListener("pjax:complete", initializeAnniversary);
```
<!-- endtab -->
<!-- tab 5. anniversary.yml -->
- Path: `/source/_data/anniversary.yml`

**代码如下：**

```yml
- name: 喵喵纪念日
  date: '2024-09-18'
  icon: '/img/favicon.svg'
  lunar: false
  color: '#e63946'
- name: 结婚纪念日
  date: '2024-05-02'
  lunar: false
  color: '#f1faee'
- name: Bornforthis 生日
  # date: '1997-12-25'
  date: '1997-11-26'
  lunar: true
  color: '#a8dadc'
- name: 国庆节
  date: '2018-10-01'
  lunar: false
  color: '#457b9d'
- name: 结婚证
  date: '2024-02-26'
  lunar: false
  color: '#ffb3c6'
- name: 妈妈👩
  date: '1968-12-18'
  lunar: true
  color: '#ffb3c6'
- name: 爸爸👨
  date: '1967-07-29'
  lunar: true
  color: '#ffb3c6'
- name: 老丈人
  date: '1975-10-04'
  lunar: true
  color: '#ffb3c6'
- name: 大埕 MM
  date: '1977-08-22'
  lunar: true
  color: '#e3d5ca'
- name: 儿童节
  date: '1949-06-01'
  lunar: false
  color: '#e3d5ca'
- name: 除夕
  date: '1949-12-29'
  lunar: true
  color: '#e3d5ca'
- name: 生日🎂
  date: '1949-12-30'
  lunar: true
  color: '#fb6f92'
- name: 见面
  date: '2024-02-08'
  lunar: false
  color: '#f7a072'
```
<!-- endtab -->

{% endtabs %}
<!-- endtab -->





<!-- tab 喵喵纪念日-V0.2 -->
> 发布日期📅：{% span cyan log, 2024-09-21 08:01:41 %}

{% folding blue close, 效果图 %}
![](07-anniversary/image.png)
{% endfolding %}
{% tabs anniversary2 %}
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

              // 根据 show_copyright 显示或隐藏版权信息
              if item.show_copyright
                .card-copyright
                  | 版权所有 © #{item.name}
                  a(href="https://blog.bornforthis.cn/posts/41c7c45e.html" target="_blank") 网站链接
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

/* 版权信息的样式 */
.card-copyright {
    margin-top: 10px;
    font-size: 0.85rem;
    color: #777;
    text-align: right;
}

.card-copyright a {
    color: #007bff;
    text-decoration: none;
}

.card-copyright a:hover {
    text-decoration: underline;
}
```

<!-- endtab -->

<!-- tab 4. anniversary.js -->
- Path: `/source/static/js/anniversary.js`

**代码如下：**

```javascript
// anniversary.js

function initializeAnniversary() {
    function LunarDate(Year, Month, Day) {
        try {
            let solar = Lunar.fromYmdHms(Year, Month, Day, 0, 0, 0).getSolar();
            return new Date(solar.getYear(), solar.getMonth() - 1, solar.getDay());
        } catch (error) {
            return LunarDate(Year, Month, Day - 1);
        }
    }
    // 计算两个日期之间的天数差
    function daysBetween(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.ceil((date2 - date1) / oneDay);
    }
    // 剩余天数
    function daysLeft(dateStr, isLunar) {
        const [Year, Month, Day] = dateStr.split("-").map(Number);
        let now = new Date();
        now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let anniversaryDate;
        if (isLunar) {
            anniversaryDate = LunarDate(now.getFullYear(), Month, Day);
            if (anniversaryDate < now) {
                anniversaryDate = LunarDate(now.getFullYear() + 1, Month, Day);
            }
        } else {
            anniversaryDate = new Date(now.getFullYear(), Month - 1, Day);
            if (anniversaryDate < now) {
                anniversaryDate = new Date(now.getFullYear() + 1, Month - 1, Day);
            }
        }
        return daysBetween(now, anniversaryDate);
    }
    // 经过天数
    function totalDays(dateStr, isLunar) {
        const [Year, Month, Day] = dateStr.split("-").map(Number);
        let now = new Date();
        now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let startDate;
        if (isLunar) {
            startDate = LunarDate(Year, Month, Day);
        } else {
            startDate = new Date(Year, Month - 1, Day);
        }
        return daysBetween(startDate, now);
    }
    // 返回目标日期
    function targetDate(dateStr, isLunar) {
        const [Year, Month, Day] = dateStr.split("-").map(Number);
        let now = new Date();
        now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let anniversaryDate;
        if (isLunar) {
            anniversaryDate = LunarDate(now.getFullYear(), Month, Day);
            if (anniversaryDate < now) {
                anniversaryDate = LunarDate(now.getFullYear() + 1, Month, Day);
            }
        } else {
            anniversaryDate = new Date(now.getFullYear(), Month - 1, Day);
            if (anniversaryDate < now) {
                anniversaryDate = new Date(now.getFullYear() + 1, Month - 1, Day);
            }
        }
        // 手动拼接日期，确保月份和日期都是两位数
        const year = anniversaryDate.getFullYear();
        const month = (anniversaryDate.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，需要加1
        const day = anniversaryDate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`; // 使用'-'作为分隔符
        //   return anniversaryDate.toDateString();  // 直接返回斜杆日期
        // return anniversaryDate.toLocaleDateString('zh-CN');
    }

    const countdownElements = document.querySelectorAll(".countdown");
    const totalDaysElements = document.querySelectorAll(".total-days");
    const targetDateElements = document.querySelectorAll(".target-date");

    countdownElements.forEach(function (elem) {
        const dateStr = elem.getAttribute("data-date");
        const isLunar = elem.hasAttribute("data-lunar");
        elem.textContent = daysLeft(dateStr, isLunar);
    });

    totalDaysElements.forEach(function (elem) {
        const dateStr = elem.getAttribute("data-date");
        const isLunar = elem.hasAttribute("data-lunar");
        elem.textContent = totalDays(dateStr, isLunar);
    });

    // 显示目标日期
    targetDateElements.forEach(function (elem) {
        const dateStr = elem.getAttribute("data-date");
        const isLunar = elem.hasAttribute("data-lunar");
        elem.textContent = targetDate(dateStr, isLunar);
    });
}

// 初始页面加载
document.addEventListener("DOMContentLoaded", initializeAnniversary);

// 适配 pjax
document.addEventListener("pjax:complete", initializeAnniversary);
```

<!-- endtab -->

<!-- tab 5. anniversary.yml -->
- Path: `/source/_data/anniversary.yml`

**代码如下：**

```yml
- name: 喵喵纪念日
  date: '2024-09-18'
  icon: '/img/favicon.svg'
  lunar: false
  color: '#a8dadc'
  show_copyright: true  # 新增字段，控制是否显示版权
- name: 结婚纪念日
  date: '2024-05-02'
  lunar: false
  color: '#f1faee'
  show_copyright: false  # 不显示版权
- name: Bornforthis 生日
  # date: '1997-12-25'
  date: '1997-11-26'
  lunar: true
  color: '#a8dadc'
- name: 国庆节
  date: '2018-10-01'
  lunar: false
  color: '#457b9d'
- name: 结婚证
  date: '2024-02-26'
  lunar: false
  color: '#ffb3c6'
- name: 妈妈👩
  date: '1968-12-18'
  lunar: true
  color: '#ffb3c6'
- name: 爸爸👨
  date: '1967-07-29'
  lunar: true
  color: '#ffb3c6'
- name: 老丈人
  date: '1975-10-04'
  lunar: true
  color: '#ffb3c6'
- name: 大埕 MM
  date: '1977-08-22'
  lunar: true
  color: '#e3d5ca'
- name: 儿童节
  date: '1949-06-01'
  lunar: false
  color: '#e3d5ca'
- name: 除夕
  date: '1949-12-29'
  lunar: true
  color: '#e3d5ca'
- name: 生日🎂
  date: '1949-12-30'
  lunar: true
  color: '#fb6f92'
- name: 见面
  date: '2024-02-08'
  lunar: false
  color: '#f7a072'
```

<!-- endtab -->

{% endtabs %}
<!-- endtab -->




<!-- tab 喵喵纪念日-V0.3 -->
> 发布日期📅：{% span cyan log, 2024-09-21 23:10:22 %}

1. 更新喵喵纪念日样式；
2. 更新喵喵纪念日动效；

{% folding blue close, 效果图 %}
![](07-anniversary/3.0.png)
{% endfolding %}

{% tabs anniversary3 %}
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
              .card-header
                if item.icon
                  img.card-icon(src=item.icon alt="icon")
                .card-title #{item.name}  <!-- 始终显示标题 -->

              .card-body(style="background-color: white; padding: 20px; text-align: center;")
                .countdown-wrapper
                  span.countdown(data-date=item.date data-lunar=item.lunar) 计算中...
                  .days-label 天后 <!-- "天后" 在天数的右上角显示 -->

              .card-footer
                .dashed-line(style="border-top: 1px dashed #ccc; margin: 10px 0;") <!-- 虚线 -->
                .target-info 目标日：#{item.date} #{item.lunar ? '(农历)' : '(新历)'}
                .total-days-info 已经过去了：
                  span.total-days(data-date=item.date data-lunar=item.lunar) 计算中...

              // 根据 show_copyright 显示或隐藏卡片内的版权信息
              if item.show_copyright
                - let copyrightName = item.copyright_name ? item.copyright_name : '喵喵纪念日'
                - let copyrightLink = item.copyright_link ? item.copyright_link : 'https://blog.bornforthis.cn/posts/41c7c45e.html'
                .card-copyright
                  | 版权所有 © #{item.name}
                  a(href=copyrightLink target="_blank") #{copyrightName}

```
<!-- endtab -->

<!-- tab 3. 创建 anniversary.css -->
- Path: `/source/static/css/anniversary.css`

**直接访问链接获取最新版**：[anniversary.css](https://blog.bornforthis.cn/static/css/anniversary.css)

<!-- endtab -->

<!-- tab 4. anniversary.js -->
- Path: `/source/static/js/anniversary.js`

**直接访问链接获取最新版**：[anniversary.js](https://blog.bornforthis.cn/static/js/anniversary.js)

<!-- endtab -->

<!-- tab 5. anniversary.yml -->
- Path: `/source/_data/anniversary.yml`

**代码如下：**

```yml
- name: 喵喵纪念日
  date: '2024-09-18'
  icon: '/img/favicon.svg'
  lunar: false
  color: '#a8dadc'
  show_copyright: true  # 新增字段，控制是否显示版权
  copyright_name: "喵喵纪念日"
  # copyright_link: "https://blog.bornforthis.cn/anniversary/"
- name: 结婚纪念日
  date: '2024-05-02'
  lunar: false
  color: '#f1faee'
  show_copyright: false  # 不显示版权
- name: Bornforthis 生日
  # date: '1997-12-25'
  date: '1997-11-26'
  lunar: true
  color: '#a8dadc'
- name: 国庆节
  date: '2018-10-01'
  lunar: false
  color: '#457b9d'
- name: 结婚证
  date: '2024-02-26'
  lunar: false
  color: '#ffb3c6'
- name: 妈妈👩
  date: '1968-12-18'
  lunar: true
  color: '#ffb3c6'
- name: 爸爸👨
  date: '1967-07-29'
  lunar: true
  color: '#ffb3c6'
- name: 老丈人
  date: '1975-10-04'
  lunar: true
  color: '#ffb3c6'
- name: 大埕 MM
  date: '1977-08-22'
  lunar: true
  color: '#e3d5ca'
- name: 儿童节
  date: '1949-06-01'
  lunar: false
  color: '#e3d5ca'
- name: 除夕
  date: '1949-12-29'
  lunar: true
  color: '#e3d5ca'
- name: 生日🎂
  date: '1949-12-30'
  lunar: true
  color: '#fb6f92'
- name: 见面
  date: '2024-02-08'
  lunar: false
  color: '#f7a072'


```

<!-- endtab -->

{% endtabs %}
<!-- endtab -->

<!-- tab 喵喵纪念日-V0.4 -->
> 发布日期📅：{% span cyan log, 2024-09-22 20:07:03 %}

1. 标题和图标居中；
2. 改进目标日的样式；
3. 总天数显示可选，通过 display_mode:"elapsed" or display_mode:"remaining"；
4. 重要‼️征集：纪念日当天，要有什么特效/效果比较好？


{% folding blue close, 效果图 %}
![](07-anniversary/V0.4.png)
{% endfolding %}

{% tabs anniversary3 %}
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
              .card-header(style="justify-content: center;")
                if item.icon
                  img.card-icon(src=item.icon alt="icon")
                .card-title #{item.name}  <!-- 始终显示标题 -->

              .card-body(style="background-color: white; padding: 20px; text-align: center;")
                .countdown-wrapper
                  span.countdown(data-date=item.date data-lunar=item.lunar data-display-mode=item.display_mode) 计算中...
                  .days-label 天后 <!-- "天后" 或 "天了" 根据模式动态显示 -->
      
              .card-footer
                .dashed-line(style="border-top: 1px dashed #ccc; margin: 10px 0;") <!-- 虚线 -->
                .target-info 
                  span.target-label - 目标日 -
                  br
                  span.target-date(data-date=item.date data-lunar=item.lunar) 计算中...
                //- .total-days-info 已经过去了：
                //-   span.total-days(data-date=item.date data-lunar=item.lunar) 计算中...

              // 根据 show_copyright 显示或隐藏卡片内的版权信息
              if item.show_copyright
                - let copyrightName = item.copyright_name ? item.copyright_name : '喵喵纪念日'
                - let copyrightLink = item.copyright_link ? item.copyright_link : 'https://blog.bornforthis.cn/posts/41c7c45e.html'
                .card-copyright
                  | 版权所有 © #{item.name}
                  a(href=copyrightLink target="_blank") #{copyrightName}

```
<!-- endtab -->

<!-- tab 3. 创建 anniversary.css -->
- Path: `/source/static/css/anniversary.css`

**直接访问链接获取最新版**：[anniversary.css](https://blog.bornforthis.cn/static/css/anniversary.css)

<!-- endtab -->

<!-- tab 4. anniversary.js -->
- Path: `/source/static/js/anniversary.js`

**直接访问链接获取最新版**：[anniversary.js](https://blog.bornforthis.cn/static/js/anniversary.js)

<!-- endtab -->

<!-- tab 5. anniversary.yml -->
- Path: `/source/_data/anniversary.yml`

**代码如下：**

```yml
- name: 喵喵纪念日
  date: '2024-09-18'
  icon: '/img/favicon.svg'
  lunar: false
  color: '#a8dadc'
  display_mode: "elapsed"  # 新增字段，显示已经过去的天数
  show_copyright: true  # 新增字段，控制是否显示版权
  copyright_name: "喵喵纪念日"
  # copyright_link: "https://blog.bornforthis.cn/anniversary/"
- name: 结婚纪念日
  date: '2024-05-02'
  lunar: false
  color: '#f1faee'
  display_mode: "remaining"  # 显示剩余天数
  show_copyright: false  # 不显示版权
- name: Bornforthis 生日
  # date: '1997-12-25'
  date: '1997-11-26'
  lunar: true
  color: '#a8dadc'
- name: 国庆节
  date: '2018-10-01'
  lunar: false
  color: '#457b9d'
- name: 结婚证
  date: '2024-02-26'
  lunar: false
  color: '#ffb3c6'
- name: 妈妈👩
  date: '1968-12-18'
  lunar: true
  color: '#ffb3c6'
- name: 爸爸👨
  date: '1967-07-29'
  lunar: true
  color: '#ffb3c6'
- name: 老丈人
  date: '1975-10-04'
  lunar: true
  color: '#ffb3c6'
- name: 大埕 MM
  date: '1977-08-22'
  lunar: true
  color: '#e3d5ca'
- name: 儿童节
  date: '1949-06-01'
  lunar: false
  color: '#e3d5ca'
- name: 除夕
  date: '1949-12-29'
  lunar: true
  color: '#e3d5ca'
- name: 生日🎂
  date: '1949-12-30'
  lunar: true
  color: '#fb6f92'
- name: 见面
  date: '2024-02-08'
  lunar: false
  color: '#f7a072'


```

<!-- endtab -->

{% endtabs %}
<!-- endtab -->



<!-- tab 喵喵纪念日-V0.5 -->
> 发布日期📅：{% span cyan log, 2024-09-30 15:46:56 %}

1. 显示总天数时，显示起始日期；
2. 显示星期几；
3. 在 display_mode 设置为 elapsed 时，可以点击卡片可以切换显示累积第几周、再次点击显示第几月几天、再次点击显示几天了
4. 下一个版本将实现纪念日分组；
5. **纪念日当天效果，有想法的请评论。**

**注意：有计算不准确、bug 请在评论区留言！**

{% folding blue close, 效果图1 %}

![](07-anniversary/image-1.png)

{% endfolding %}

{% folding blue close, 效果图2 %}

![](07-anniversary/image-2.png)

{% endfolding %}

{% tabs anniversary3 %}
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
              .card-header(style="justify-content: center;")
                if item.icon
                  img.card-icon(src=item.icon alt="icon")
                .card-title #{item.name}  <!-- 始终显示标题 -->

              .card-body(style="background-color: white; padding: 20px; text-align: center;")
                .countdown-wrapper
                  span.countdown(data-date=item.date data-lunar=item.lunar data-display-mode=item.display_mode) 计算中...
                  .days-label 天后 <!-- "天后" 或 "天了" 根据模式动态显示 -->
      
              .card-footer
                .dashed-line(style="border-top: 1px dashed #ccc; margin: 10px 0;") <!-- 虚线 -->
                .target-info 
                  if item.display_mode === 'elapsed'
                    span.target-label - 起始日 -  <!-- 当 display_mode 为 elapsed 时显示起始日 -->
                  else
                    span.target-label - 目标日 -
                  br
                  span.target-date(data-date=item.date data-lunar=item.lunar data-display-mode=item.display_mode) 计算中...
                //- .total-days-info 已经过去了：
                //-   span.total-days(data-date=item.date data-lunar=item.lunar) 计算中...

              // 根据 show_copyright 显示或隐藏卡片内的版权信息
              if item.show_copyright
                - let copyrightName = item.copyright_name ? item.copyright_name : '喵喵纪念日'
                - let copyrightLink = item.copyright_link ? item.copyright_link : 'https://blog.bornforthis.cn/posts/41c7c45e.html'
                .card-copyright
                  | 版权所有 © #{item.name}
                  a(href=copyrightLink target="_blank") #{copyrightName}

```
<!-- endtab -->

<!-- tab 3. 创建 anniversary.css -->
- Path: `/source/static/css/anniversary.css`

**直接访问链接获取最新版**：[anniversary.css](https://blog.bornforthis.cn/static/css/anniversary.css)

<!-- endtab -->

<!-- tab 4. anniversary.js -->
- Path: `/source/static/js/anniversary.js`

**直接访问链接获取最新版**：[anniversary.js](https://blog.bornforthis.cn/static/js/anniversary.js)

<!-- endtab -->

<!-- tab 5. anniversary.yml -->
- Path: `/source/_data/anniversary.yml`

**代码如下：**

```yml
- name: 喵喵纪念日
  date: '2024-09-18'
  icon: '/img/favicon.svg'
  lunar: false
  color: '#a8dadc'
  display_mode: "elapsed"  # 新增字段，显示已经过去的天数
  show_copyright: true  # 新增字段，控制是否显示版权
  copyright_name: "喵喵纪念日"
  # copyright_link: "https://blog.bornforthis.cn/anniversary/"
- name: 结婚纪念日
  date: '2024-05-02'
  lunar: false
  color: '#f1faee'
  display_mode: "remaining"  # 显示剩余天数
  show_copyright: false  # 不显示版权
- name: Bornforthis 生日
  # date: '1997-12-25'
  date: '1997-11-26'
  lunar: true
  color: '#a8dadc'
- name: 国庆节
  date: '2018-10-01'
  lunar: false
  color: '#457b9d'
- name: 结婚证
  date: '2024-02-26'
  lunar: false
  color: '#ffb3c6'
- name: 妈妈👩
  date: '1968-12-18'
  lunar: true
  color: '#ffb3c6'
- name: 爸爸👨
  date: '1967-07-29'
  lunar: true
  color: '#ffb3c6'
- name: 老丈人
  date: '1975-10-04'
  lunar: true
  color: '#ffb3c6'
- name: 大埕 MM
  date: '1977-08-22'
  lunar: true
  color: '#e3d5ca'
- name: 儿童节
  date: '1949-06-01'
  lunar: false
  color: '#e3d5ca'
- name: 除夕
  date: '1949-12-29'
  lunar: true
  color: '#e3d5ca'
- name: 生日🎂
  date: '1949-12-30'
  lunar: true
  color: '#fb6f92'
- name: 见面
  date: '2024-02-08'
  lunar: false
  color: '#f7a072'
- name: 怀孕🫄
  date: '2024-04-02'
  display_mode: "elapsed"
  lunar: false
  color: '#f7a072'


```

<!-- endtab -->

{% endtabs %}
<!-- endtab -->


<!-- tab 喵喵纪念日-V0.6 -->
> 发布日期📅：{% span cyan log, 2024-10-06 13:51:16 %}

1. 实现纪念日分组；
4. 实现纪念日 desc；
5. **纪念日当天效果，有想法的请评论。**

**注意：有计算不准确、bug 请在评论区留言！**

{% folding blue close, 效果图 %}

![](07-anniversary/image-3.png)

{% endfolding %}

{% tabs anniversary3 %}
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
      each group in site.data.anniversary
        .anniversary-group
          .group-header
            .group-title #{group.class_name} (#{group.anniversaries.length}) <!-- 显示分组名称和纪念日数量 -->
            .group-desc #{group.class_desc} <!-- 显示分组说明 -->

          .anniversary-cards
            each item in group.anniversaries
              .anniversary-card(style=`background-color: ${item.color}`)
                .card-content
                  .card-header(style="justify-content: center;")
                    if item.icon
                      img.card-icon(src=item.icon alt="icon")
                    .card-title #{item.name} <!-- 始终显示标题 -->

                  .card-body(style="background-color: white; padding: 20px; text-align: center;")
                    .countdown-wrapper
                      span.countdown(data-date=item.date data-lunar=item.lunar data-display-mode=item.display_mode) 计算中...
                      .days-label 天后 <!-- "天后" 或 "天了" 根据模式动态显示 -->

                  .card-footer
                    .dashed-line(style="border-top: 1px dashed #ccc; margin: 10px 0;") <!-- 虚线 -->
                    .target-info 
                      if item.display_mode === 'elapsed'
                        span.target-label - 起始日 -  <!-- 当 display_mode 为 elapsed 时显示起始日 -->
                      else
                        span.target-label - 目标日 -
                      br
                      span.target-date(data-date=item.date data-lunar=item.lunar data-display-mode=item.display_mode) 计算中...

                // 根据 show_copyright 显示或隐藏卡片内的版权信息
                if item.show_copyright
                  - let copyrightName = item.copyright_name ? item.copyright_name : '喵喵纪念日'
                  - let copyrightLink = item.copyright_link ? item.copyright_link : 'https://blog.bornforthis.cn/posts/41c7c45e.html'
                  .card-copyright
                    | 版权所有 © #{item.name}
                    a(href=copyrightLink target="_blank") #{copyrightName}

```
<!-- endtab -->

<!-- tab 3. 创建 anniversary.css -->
- Path: `/source/static/css/anniversary.css`

**直接访问链接获取最新版**：[anniversary.css](https://blog.bornforthis.cn/static/css/anniversary.css)

<!-- endtab -->

<!-- tab 4. anniversary.js -->
- Path: `/source/static/js/anniversary.js`

**直接访问链接获取最新版**：[anniversary.js](https://blog.bornforthis.cn/static/js/anniversary.js)

<!-- endtab -->

<!-- tab 5. anniversary.yml -->
- Path: `/source/_data/anniversary.yml`

**代码如下：**

```yml
- class_name: 喵喵纪念日页面
  class_desc: "系统纪念日"
  anniversaries:
    - name: 喵喵纪念日
      date: '2024-09-18'
      icon: '/img/favicon.svg'
      lunar: false
      color: '#a8dadc'
      display_mode: "elapsed"  # 新增字段，显示已经过去的天数
      show_copyright: true  # 新增字段，控制是否显示版权
      copyright_name: "喵喵纪念日"
      # copyright_link: "https://blog.bornforthis.cn/anniversary/"

- class_name: 黄家蓉宝
  class_desc: "黄家蓉宝的小窝·我们一生中重要的纪念日"
  anniversaries:
    - name: 结婚纪念日
      date: '2024-05-02'
      lunar: false
      color: '#f1faee'
      display_mode: "remaining"  # 显示剩余天数
      show_copyright: false  # 不显示版权
    - name: 怀孕🫄
      date: '2024-04-02'
      display_mode: "elapsed"
      lunar: false
      color: '#f7a072'
    - name: 见面
      date: '2024-02-08'
      lunar: false
      color: '#f7a072'
    - name: 结婚证
      date: '2024-02-26'
      lunar: false
      color: '#ffb3c6'

- class_name: 家人纪念日
  class_desc: "属于家人的珍贵时刻"
  anniversaries:
    - name: 妈妈👩
      date: '1968-12-18'
      lunar: true
      color: '#ffb3c6'
    - name: 爸爸👨
      date: '1967-07-29'
      lunar: true
      color: '#ffb3c6'
    - name: 丈母娘👩
      date: '1977-08-22'
      lunar: true
      color: '#e3d5ca'
    - name: 老丈人👨
      date: '1975-10-04'
      lunar: true
      color: '#ffb3c6'
    - name: Bornforthis🎂
      date: '1997-11-26'
      lunar: true
      color: '#a8dadc'
    

- class_name: 传统节日
  class_desc: "那是大家的节日呀，每个小家都会过的共同节日～"
  anniversaries:
    - name: 除夕
      date: '1949-12-29'
      lunar: true
      color: '#e3d5ca'
    - name: 儿童节
      date: '1949-06-01'
      lunar: false
      color: '#e3d5ca'
    - name: 国庆节
      date: '2018-10-01'
      lunar: false
      color: '#457b9d'
```

<!-- endtab -->

{% endtabs %}
<!-- endtab -->

<!-- tab 喵喵纪念日-V0.6.1 -->
> 发布日期📅：{% span cyan log, 2024-10-29 15:34:32 %}

1. 目前最终版；
2. 点击可以切换显示状态；
3. **纪念日当天效果，有想法的请评论。**

**注意：有计算不准确、bug 请在评论区留言！**

{% folding blue close, 效果图1 %}
![](07-anniversary/image-4.png)
{% endfolding %}

{% folding blue close, 效果图2 %}
![](07-anniversary/image-5.png)
{% endfolding %}

{% folding blue close, 效果图3 %}
![](07-anniversary/image-6.png)
{% endfolding %}

{% tabs anniversary3 %}
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
      each group in site.data.anniversary
        .anniversary-group
          .group-header
            .group-title #{group.class_name} (#{group.anniversaries.length}) <!-- 显示分组名称和纪念日数量 -->
            .group-desc #{group.class_desc} <!-- 显示分组说明 -->

          .anniversary-cards
            each item in group.anniversaries
              .anniversary-card(style=`background-color: ${item.color}`)
                .card-content
                  .card-header(style="justify-content: center;")
                    if item.icon
                      img.card-icon(src=item.icon alt="icon")
                    .card-title #{item.name} <!-- 始终显示标题 -->

                  .card-body(style="background-color: white; padding: 20px; text-align: center;")
                    .countdown-wrapper
                      span.countdown(data-date=item.date data-lunar=item.lunar data-display-mode=item.display_mode) 计算中...
                      .days-label 天后 <!-- "天后" 或 "天了" 根据模式动态显示 -->

                  .card-footer
                    .dashed-line(style="border-top: 1px dashed #ccc; margin: 10px 0;") <!-- 虚线 -->
                    .target-info 
                      if item.display_mode === 'elapsed'
                        span.target-label - 起始日 -  <!-- 当 display_mode 为 elapsed 时显示起始日 -->
                      else
                        span.target-label - 目标日 -
                      br
                      span.target-date(data-date=item.date data-lunar=item.lunar data-display-mode=item.display_mode) 计算中...

                // 根据 show_copyright 显示或隐藏卡片内的版权信息
                if item.show_copyright
                  - let copyrightName = item.copyright_name ? item.copyright_name : '喵喵纪念日'
                  - let copyrightLink = item.copyright_link ? item.copyright_link : 'https://blog.bornforthis.cn/posts/41c7c45e.html'
                  .card-copyright
                    | 版权所有 © #{item.name}
                    a(href=copyrightLink target="_blank") #{copyrightName}

```
<!-- endtab -->

<!-- tab 3. 创建 anniversary.css -->
- Path: `/source/static/css/anniversary.css`

**直接访问链接获取最新版**：[anniversary.css](https://blog.bornforthis.cn/static/css/anniversary.css)

<!-- endtab -->

<!-- tab 4. anniversary.js -->
- Path: `/source/static/js/anniversary.js`

**直接访问链接获取最新版**：[anniversary.js](https://blog.bornforthis.cn/static/js/anniversary.js)

<!-- endtab -->

<!-- tab 5. anniversary.yml -->
- Path: `/source/_data/anniversary.yml`

**代码如下：**

```yml
- class_name: 喵喵纪念日页面
  class_desc: "系统纪念日"
  anniversaries:
    - name: 喵喵纪念日
      date: '2024-09-18'
      icon: '/img/favicon.svg'
      lunar: false
      color: '#a8dadc'
      display_mode: "elapsed"  # 新增字段，显示已经过去的天数
      show_copyright: true  # 新增字段，控制是否显示版权
      copyright_name: "喵喵纪念日"
      # copyright_link: "https://blog.bornforthis.cn/anniversary/"

- class_name: 黄家蓉宝
  class_desc: "黄家蓉宝的小窝·我们一生中重要的纪念日"
  anniversaries:
    - name: 结婚纪念日
      date: '2024-05-02'
      lunar: false
      color: '#f1faee'
      display_mode: "remaining"  # 显示剩余天数
      show_copyright: false  # 不显示版权
    - name: 怀孕🫄
      date: '2024-04-02'
      display_mode: "elapsed"
      lunar: false
      color: '#f7a072'
    - name: 见面
      date: '2024-02-08'
      lunar: false
      color: '#f7a072'
    - name: 结婚证
      date: '2024-02-26'
      lunar: false
      color: '#ffb3c6'

- class_name: 家人纪念日
  class_desc: "属于家人的珍贵时刻"
  anniversaries:
    - name: 妈妈👩
      date: '1968-12-18'
      lunar: true
      color: '#ffb3c6'
    - name: 爸爸👨
      date: '1967-07-29'
      lunar: true
      color: '#ffb3c6'
    - name: 丈母娘👩
      date: '1977-08-22'
      lunar: true
      color: '#e3d5ca'
    - name: 老丈人👨
      date: '1975-10-04'
      lunar: true
      color: '#ffb3c6'
    - name: Bornforthis🎂
      date: '1997-11-26'
      lunar: true
      color: '#a8dadc'
    

- class_name: 传统节日
  class_desc: "那是大家的节日呀，每个小家都会过的共同节日～"
  anniversaries:
    - name: 除夕
      date: '1949-12-29'
      lunar: true
      color: '#e3d5ca'
    - name: 儿童节
      date: '1949-06-01'
      lunar: false
      color: '#e3d5ca'
    - name: 国庆节
      date: '2018-10-01'
      lunar: false
      color: '#457b9d'
```

<!-- endtab -->

{% endtabs %}
<!-- endtab -->
















{% endtabs %}


# 3. 主题配置

你上面代码添加完成后，要引入 CSS 和 JS 才可以生效：

```yml
# 插入代码到头部 </head> 之前 和 底部 </body> 之前
inject:
  head:
    - <link rel="stylesheet" href="/static/css/anniversary.css"> # 喵喵纪念日

  bottom:
    # 自定义js
    - <script src="/static/js/anniversary.js"></script>
    - <script src="https://cdnjs.cloudflare.com/ajax/libs/lunar-javascript/1.6.12/lunar.js"></script>
```

# 4. page.pug

上面操作完成后，需要在主题的页面中加入这个页面布局，下面代码中 `[11-12]` 行代码：

- Path: `themes/anzhiyu/layout/page.pug`

```html
extends includes/layout.pug

block content
  #page
    if top_img === false && !page.top_single
      h1.page-title= page.title
    case page.type
      when 'tags'
        include includes/page/tags.pug
      ......
      when 'anniversary'
        include includes/page/anniversary.pug
      ......
      default
        include includes/page/default-page.pug

    if page.comments !== false && theme.comments && theme.comments.use
      - var commentsJsLoad = true
      !=partial('includes/third-party/comments/index', {}, {cache: true})
```
# 5. 鸣谢

这里最重要的是开源大佬开发的农历转换器，在此特地鸣谢！

- [https://6tail.cn/calendar/api.html](https://6tail.cn/calendar/api.html)
- [https://github.com/6tail/lunar-javascript](https://github.com/6tail/lunar-javascript)

并且`丁（Tiny Rick）`为页面农历转换提供 js 重构，致谢！

# 6. 已经添加的网站

1. [别碰我的镜头盖](https://blog.bornforthis.cn/anniversary/)
2. 等待⌛️你们的留言...

# 7. Notebook

{% folding blue close, notebook %}
<!-- tab 喵喵纪念日-V0.x -->
{% tabs anniversary2 %}
> 发布日期📅：{% span cyan log, 2024-09-21 08:01:41 %}
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

```
<!-- endtab -->

<!-- tab 3. 创建 anniversary.css -->
- Path: `/source/static/css/anniversary.css`

**代码如下：**

```css

```

<!-- endtab -->

<!-- tab 4. anniversary.js -->
- Path: `/source/static/js/anniversary.js`

**代码如下：**

```javascript

```

<!-- endtab -->

<!-- tab 5. anniversary.yml -->
- Path: `/source/_data/anniversary.yml`

**代码如下：**

```yml

```

<!-- endtab -->

{% endtabs %}
<!-- endtab -->

{% endfolding %}

{% folding blue close, notebook_code %}
会快速迭代，又想方便大家随时更新，直接使用我就想到编写一个 Python 来实现读取：

```python
import time  # 引入time模块

version = 0.3
base_root = '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io'
string = """<!-- tab 喵喵纪念日-V{version} -->
> 发布日期📅：{{% span cyan log, {time} %}}
{{% tabs anniversary3 %}}
<!-- tab 1. 新建页面 -->
在命令行输入如下命令：

- `hexo new page anniversary`

修改头部信息：

\```markdown
---
title: anniversary
date: 2024-09-16 20:31:37
type: 'anniversary'
top_background: /img/anniversary/anniversary5.webp
aside: false
---
\```
<!-- endtab -->

<!-- tab 2. 创建 anniversary.pug -->
- Path: `/themes/anzhiyu/layout/includes/page/anniversary.pug`

**代码如下：**

\```html
{anniversary_pug}
\```
<!-- endtab -->

<!-- tab 3. 创建 anniversary.css -->
- Path: `/source/static/css/anniversary.css`

**直接访问链接获取最新版**：[anniversary.css](https://blog.bornforthis.cn/static/css/anniversary.css)

<!-- endtab -->

<!-- tab 4. anniversary.js -->
- Path: `/source/static/js/anniversary.js`

**直接访问链接获取最新版**：[anniversary.js](https://blog.bornforthis.cn/static/js/anniversary.js)

<!-- endtab -->

<!-- tab 5. anniversary.yml -->
- Path: `/source/_data/anniversary.yml`

**代码如下：**

\```yml
{anniversary_yml}
\```

<!-- endtab -->

{{% endtabs %}}
<!-- endtab -->
{{% endtabs %}}
<!-- endtab -->
"""


def generate_text(paths):
    text = ''
    for path in paths:
        filename = path.split('/')[-1]
        with open(base_root + path, 'r') as f:
            content = f.read()
            text += filename + ':\n' + content + '\n'
    with open('text.txt', 'w') as f:
        f.write(text)


def read_text(path):
    with open(base_root + path, 'r') as f:
        return f.read()

def save_text(content):
    with open('post.txt', 'w') as f:
        f.write(content)


if __name__ == '__main__':
    paths = [
        '/source/_data/anniversary.yml',
        '/source/static/js/anniversary.js',
        '/themes/anzhiyu/layout/includes/page/anniversary.pug',
        '/source/static/css/anniversary.css'
    ]
    generate_text(paths)
    result = string.format(
        version=version,
        time=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),
        anniversary_pug=read_text(paths[2]),
        # anniversary_css=read_text(paths[3]),
        # anniversary_js=read_text(paths[1]),
        anniversary_yml=read_text(paths[0]),
    )
    # print(result)
    save_text(result)
```
{% endfolding %}





{% span center log large blue, 🪧 %}

{% folding blue close, 公众号：AI悦创【二维码】 %}

![](https://bornforthis.cn/gzh.jpg)

{% endfolding %}