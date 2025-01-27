---
title: 给你的 Hexo 博客添加灯笼和春联「转载」
tags:
  - 春节
categories:
  - hexo
  - 安知鱼主题
description: 
top_img: /img/posts/P01-hexo/09-给你的 Hexo 博客添加灯笼和春联/09-给你的 Hexo 博客添加灯笼和春联.png
cover: /img/posts/P01-hexo/09-给你的 Hexo 博客添加灯笼和春联/09-给你的 Hexo 博客添加灯笼和春联.webp
comments: true
toc: true
highlight_shrink: false
swiper_index: 1
top_group_index: 1
background: '#fff'
aside: true
ai:
  - 博主更新博客，结合两个大佬：琅環书生和梦爱吃鱼的春节登陆🏮。以庆祝春节成为非物质文化遗产的第一个春节，引入了火红灯笼和春联装饰。
abbrlink: 410c2166
date: 2025-01-27 10:41:44
toc_number:
toc_style_simple:
aplayer:
---

# 0. 背景

你好，我是悦创。

作为大部分修改或魔改 hexo 主题的我，我除了自己的开发还会参考其他大佬的魔改，在我能力与时间范围内我就会实操。

本文仅做整合和部分改进，参考以下两位大佬的博客：

- [梦爱吃鱼](https://blog.bsgun.cn/)
- [琅環书生](https://www.zlog.us.kg/blog/zz-14/)

**梦爱吃鱼** 在群里分享给我：

{% folding blue close, 梦爱吃鱼 %}

![alt text](<09-给你的 Hexo 博客添加灯笼和春联/image.png>)

这里我先放上原文件的内容，路径：

- `\themes\anzhiyu\layout\includes\loading`
- `\themes\anzhiyu\source\css\_global`

{% tabs denglong %}
<!-- tab fullpage-loading.pug -->
```pug
#loading-box(onclick='document.getElementById("loading-box").classList.add("loaded")')
  .loading-bg
    .left-panel
      .couplet-container
        .couplet-decor.top
        .couplet 三阳启泰人间喜
        .couplet-decor.bottom
    .center-panel
      .horizontal-scroll
        .couplet-decor.left
        .couplet 鹏程万里
        .couplet-decor.right
    .right-panel
      .couplet-container
        .couplet-decor.top
        .couplet 五福临门大地春
        .couplet-decor.bottom

  //- 添加灯笼到开屏加载页面
  .deng-box1
    .deng
      .xian
      .deng-a
        .deng-b
          .deng-t 春
      .shui.shui-a
        .shui-c
        .shui-b
  .deng-box2
    .deng
      .xian
      .deng-a
        .deng-b
          .deng-t 节
      .shui.shui-a
        .shui-c
        .shui-b
  .deng-box3
    .deng
      .xian
      .deng-a
        .deng-b
          .deng-t 乐
      .shui.shui-a
        .shui-c
        .shui-b
  .deng-box4
    .deng
      .xian
      .deng-a
        .deng-b
          .deng-t 快
      .shui.shui-a
        .shui-c
        .shui-b

script.
  const preloader = {
    endLoading: () => {
      document.getElementById('loading-box').classList.add("loaded");
    },
    initLoading: () => {
      document.getElementById('loading-box').classList.remove("loaded")
    }
  }
  window.addEventListener('load',()=> { preloader.endLoading() })
  setTimeout(function(){preloader.endLoading();},10000)
```
<!-- endtab -->

<!-- tab loading.styl -->
```styl
if hexo-config('preloader')
  .loading-bg
    display: flex
    width: 100%
    height: 100%
    position: fixed
    z-index: 1001
    transition: 0.3s
    background: transparent
    pointer-events: none

    .left-panel, .right-panel
      width: 50%
      height: 100%
      background: var(--anzhiyu-background)
      position: fixed
      top: 0
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)
      display: flex
      align-items: center
      justify-content: center

    .couplet-container
      background: rgba(216, 0, 15, 0.8)
      position: relative
      box-shadow: 0 0 20px rgba(220, 143, 3, 0.1)
      border-radius: 30px 30px 5px 5px
      width: 90px
      height: 450px
      display: flex
      align-items: center
      justify-content: center
      border: 4px solid #ffd900d4
      
      // 添加内层边框
      &:before
        content: ""
        position: absolute
        top: 10px
        left: 10px
        right: 10px
        bottom: 10px
        border: 2px solid #ffd900d4
        border-radius: 25px 25px 3px 3px
        opacity: 0.6

      // 添加上下部装饰
      .couplet-decor
        &.top
          position: absolute
          top: -15px
          left: 50%
          transform: translateX(-50%)
          width: 50px
          height: 30px
          background: rgba(216, 0, 15, 0.8)
          border: 4px solid #ffd900d4
          border-radius: 15px 15px 0 0
          &:before
            content: ""
            position: absolute
            top: -12px
            left: 50%
            transform: translateX(-50%)
            width: 20px
            height: 20px
            background: rgba(216, 0, 15, 0.8)
            border: 4px solid #dcbf03
            border-radius: 50%
        &.bottom
          position: absolute
          bottom: -15px
          left: 50%
          transform: translateX(-50%)
          width: 50px
          height: 30px
          background: rgba(216, 0, 15, 0.8)
          border: 4px solid #ffd900d4
          border-radius: 0 0 15px 15px
          &:after
            content: ""
            position: absolute
            bottom: -12px
            left: 50%
            transform: translateX(-50%)
            width: 20px
            height: 20px
            background: rgba(216, 0, 15, 0.8)
            border: 4px solid #ffd900d4
            border-radius: 50%

    .couplet
      color: #ffd900d4
      font-size: 2.5rem
      writing-mode: vertical-rl
      font-family: "华文行楷", cursive
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2)
      position: relative
      z-index: 1
      letter-spacing: 15px
      line-height: 1.3
      font-weight: bold
      margin: 0 auto

    .left-panel
      left: 0
      transform: translateX(-100%)
      
    .right-panel
      right: 0
      transform: translateX(100%)

    .center-panel
      position: fixed
      top: 50px
      left: 50%
      transform: translateX(-50%)
      z-index: 2
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)
      
      .horizontal-scroll
        background: rgba(216, 0, 15, 0.8)
        width: 240px
        height: 80px
        border: 4px solid #ffd900d4
        border-radius: 20px
        position: relative
        box-shadow: 0 0 20px rgba(220, 143, 3, 0.1)
        display: flex
        align-items: center
        justify-content: center
        box-sizing: border-box
        padding: 0 25px
        
        // 内层边框
        &:before
          content: ""
          position: absolute
          top: 10px
          left: 10px
          right: 10px
          bottom: 10px
          border: 2px solid #ffd900d4
          border-radius: 25px
          opacity: 0.6
        
        // 左右装饰
        .couplet-decor
          &.left, &.right
            position: absolute
            top: 50%
            transform: translateY(-50%)
            width: 30px
            height: 50px
            background: rgba(216, 0, 15, 0.8)
            border: 4px solid #ffd900d4
            
          &.left
            left: -15px
            border-radius: 15px 0 0 15px
            &:before
              content: ""
              position: absolute
              left: -12px
              top: 50%
              transform: translateY(-50%)
              width: 20px
              height: 20px
              background: rgba(216, 0, 15, 0.8)
              border: 4px solid #ffd900d4
              border-radius: 50%
            
          &.right
            right: -15px
            border-radius: 0 15px 15px 0
            &:after
              content: ""
              position: absolute
              right: -12px
              top: 50%
              transform: translateY(-50%)
              width: 20px
              height: 20px
              background: rgba(216, 0, 15, 0.8)
              border: 4px solid #ffd900d4
              border-radius: 50%

        .couplet
          color: #ffd900d4
          font-size: 2.5rem
          writing-mode: horizontal-tb
          font-family: "华文行楷", cursive
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2)
          position: relative
          z-index: 1
          letter-spacing: 0.3em
          font-weight: bold
          text-align: center
          white-space: nowrap
          margin-left: 0.3em;

  #loading-box
    user-select: none
    position: fixed
    z-index: 1001
    width: 100%
    height: 100%
    transition: all 0.3s ease-out
    pointer-events: none
    
    // 默认状态：面板合拢
    .left-panel
      transform: translateX(0)
    .right-panel
      transform: translateX(0)
    
    // 加载完成：面板分开
    &.loaded
      .left-panel
        transform: translateX(-100%)
      .right-panel
        transform: translateX(100%)
      .center-panel
        transform: translateX(-50%) translateY(-200%)

  // 添加灯笼样式
  for num in 1 2 3 4
    .deng-box{num}
      position: fixed
      z-index: 9999
      pointer-events: none

  .deng-box1
    top: -30px
    left: -1px

  .deng-box2
    top: -25px
    left: 184px

  .deng-box3
    top: -28px
    right: 11px

  .deng-box4
    top: -26px
    right: 183px

  .deng
    position: relative
    width: 120px
    height: 90px
    margin: 50px
    background: rgba(216, 0, 15, 0.8)
    border-radius: 50% 50%
    transform-origin: 50% -100px
    animation: swing 3s infinite ease-in-out
    box-shadow: -5px 5px 50px 4px rgba(250, 108, 0, 1)

    &:before
      position: absolute
      top: -7px
      left: 29px
      height: 12px
      width: 60px
      content: " "
      display: block
      z-index: 999
      border-radius: 5px 5px 0 0
      border: solid 1px #dc8f03
      background: #ffa500
      background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03)

    &:after
      position: absolute
      bottom: -7px
      left: 10px
      height: 12px
      width: 60px
      content: " "
      display: block
      margin-left: 20px
      border-radius: 0 0 5px 5px
      border: solid 1px #dc8f03
      background: #ffa500
      background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03)

  .deng-a
    width: 100px
    height: 90px
    background: rgba(216, 0, 15, 0.1)
    margin: 12px 8px 8px 10px
    border-radius: 50% 50%
    border: 2px solid #dc8f03

  .deng-b
    width: 45px
    height: 90px
    background: rgba(216, 0, 15, 0.1)
    margin: -2px 8px 8px 26px
    border-radius: 50% 50%
    border: 2px solid #dc8f03

  .xian
    position: absolute
    top: -50px
    left: 60px
    width: 2px
    height: 50px
    background: #dc8f03

  .shui-a
    position: relative
    width: 5px
    height: 20px
    margin: -5px 0 0 59px
    animation: swing 4s infinite ease-in-out
    transform-origin: 50% -45px
    background: #ffa500
    border-radius: 0 0 5px 5px

  .shui-b
    position: absolute
    top: 14px
    left: -2px
    width: 10px
    height: 10px
    background: #dc8f03
    border-radius: 50%

  .shui-c
    position: absolute
    top: 18px
    left: -2px
    width: 10px
    height: 35px
    background: #ffa500
    border-radius: 0 0 0 5px

  .deng-t
    font-family: "华文行楷", Arial, Lucida Grande, Tahoma, sans-serif
    font-size: 3.2rem
    color: #dc8f03
    font-weight: bold
    line-height: 85px
    text-align: center

  @keyframes swing
    0%
      transform: rotate(-10deg)
    50%
      transform: rotate(10deg)
    100%
      transform: rotate(-10deg)

  // 适配暗色模式
  [data-theme='dark']
    .deng
      background: rgba(216, 0, 15, 0.8)
    .deng-a,
    .deng-b
      background: rgba(216, 0, 15, 0.1)

@media screen and (max-width: 768px)
  if hexo-config('preloader')
    // 在移动端隐藏灯笼
    .deng-box1,
    .deng-box2,
    .deng-box3,
    .deng-box4
      display: none !important
```
<!-- endtab -->

{% endtabs %}

{% endfolding %}

两个大佬的实现上略有差别，但是虽然有点“渣”，我各有所爱。

- **梦爱吃鱼**：实现的登陆的间距我很喜欢，但是是全屏加载。我一般喜欢进度条加载，并且不能灵活关闭（虽然，我可以通过改变加载动画来关闭，但显然不是我最想要的）；
- **琅環书生**：可以实现 config 进行配置开关，这个看起来很不错；

{% folding blue close, 琅環书生原文 %}

{% tabs 琅環书生 %}

<!-- tab 1. 灯笼元素 -->

- 修改 `themes\anzhiyu\layout\includes\layout.pug` 文件，新增下列代码，大概是在第 9 行，其实 pug 文件最好使用 pug 语法，我是因为懒，实在不想再转换了，就直接使用 html 了。

```diff
html(charset='utf-8' lang=config.language data-theme=theme.display_mode class=htmlClassHideAside)
  head
    include ./head.pug
+    if theme.denglong.enable
+      <div class="denglong"><div class="deng-box1"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">新</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box2"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">春</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box3"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">快</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div><div class="deng-box4"><div class="deng"><div class="xian"></div><div class="deng-a"><div class="deng-b"><div class="deng-t">乐</div></div></div><div class="shui shui-a"><div class="shui-c"></div><div class="shui-b"></div></div></div></div></div>
  body(data-type="anzhiyu")
```

- 主题配置文件新增全局开关，在 `themes\anzhiyu\_config.yml` 文件中，新增下列代码：

```yml
+ denglong:
+   enable: true  #true 开启 false关闭
```

<!-- endtab -->
<!-- tab 2. 春联元素 -->

- 修改 `themes\anzhiyu\layout\includes\loading\fullpage-loading.pug` 文件按，新增春联的 pug 代码：

```pug
#loading-box(onclick='document.getElementById("loading-box").classList.add("loaded")')
  .loading-bg
    img.loading-img(class='nolazyload' src=url_for(loading_img))
    img.loading-image-dot(class='nolazyload' src=url_for(loading_dot))
+    if theme.duilian.enable
+      div.duilian
+        .left-panel
+          .couplet-container
+            .couplet-decor.top
+            .couplet
+              p=theme.duilian.left_panel
+            .couplet-decor.bottom
+        .center-panel
+          .horizontal-scroll
+            .couplet-decor.left
+            .couplet
+              p=theme.duilian.center_panel
+            .couplet-decor.right
+        .right-panel
+          .couplet-container
+            .couplet-decor.top
+            .couplet
+              p=theme.duilian.right_panel
+            .couplet-decor.bottom
script.
```

- 主题配置文件新增全局开关（主要是方便后续进行管理，避免了一直修改 pug 文件的繁琐。`true=开启 或者 false 关闭` , 也可以自定义春联的内容（有精力的也可以将其调用春联的 API, 实现每次刷新自动更换春联内容）在 `themes\anzhiyu\_config.yml` 文件中，新增下列代码：

```yml
+ duilian: 
+   enable: true  #true 开启 false关闭
+   center_panel: 金蛇献瑞
+   left_panel: 天增岁月人增寿
+   right_panel: 春满乾坤福满楼
```
<!-- endtab -->



<!-- tab 3. css 样式 -->

- 在 `themes\anzhiyu\source\css\` 目录下，新增样式，如 `chinese-new-year.css`，我将上述灯笼和春联的 css 样式写在了一起，代码如下：

```css
/* 新年灯笼🏮 */
.deng-box1 {
    position: fixed;
    top: -30px;
    left: 10px;
    z-index: 9999;
    pointer-events: none;
}
.deng-box2 {
    position: fixed;
    top: -30px;
    right: 10px;
    z-index: 9999;
    pointer-events: none;
}
.deng-box3 {
    position: fixed;
    top: -40px;
    left: -20px;
    z-index: 9998;
    pointer-events: none;
}
.deng-box4 {
    position: fixed;
    top: -40px;
    right: -20px;
    z-index: 9998;
    pointer-events: none;
}
.deng-box4 .deng, .deng-box1 .deng {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 50px;
    background: #d8000f;
    background: rgba(216, 0, 15, .8);
    border-radius: 50% 50%;
    transform-origin: 50% -100px;
    animation: swing 5s infinite ease-in-out;
    box-shadow: -5px 5px 30px 4px #fc903d;
}
.deng {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 50px;
    background: #d8000f;
    background: rgba(216, 0, 15, .8);
    border-radius: 50% 50%;
    transform-origin: 50% -100px;
    animation: swing 3s infinite ease-in-out;
    box-shadow: -5px 5px 50px 4px #fa6c00;
}
.deng-a {
    width: 100px;
    height: 90px;
    background: #d8000f;
    background: rgba(216, 0, 15, .1);
    margin: 12px 8px 8px 8px;
    border-radius: 50% 50%;
    border: 2px solid #dc8f03;
}
.deng-b {
    width: 45px;
    height: 90px;
    background: #d8000f;
    background: rgba(216, 0, 15, .1);
    margin: -4px 8px 8px 26px;
    border-radius: 50% 50%;
    border: 2px solid #dc8f03;
}
.xian {
    position: absolute;
    top: -20px;
    left: 60px;
    width: 2px;
    height: 20px;
    background: #dc8f03;
}
.shui-a {
    position: relative;
    width: 5px;
    height: 20px;
    margin: -5px 0 0 59px;
    animation: swing 4s infinite ease-in-out;
    transform-origin: 50% -45px;
    background: orange;
    border-radius: 0 0 5px 5px;
}
.shui-b {
    position: absolute;
    top: 14px;
    left: -2px;
    width: 10px;
    height: 10px;
    background: #dc8f03;
    border-radius: 50%;
}
.shui-c {
    position: absolute;
    top: 18px;
    left: -2px;
    width: 10px;
    height: 35px;
    background: orange;
    border-radius: 0 0 0 5px;
}
.deng:before {
    position: absolute;
    top: -7px;
    left: 29px;
    height: 12px;
    width: 60px;
    content: " ";
    display: block;
    z-index: 999;
    border-radius: 5px 5px 0 0;
    border: solid 1px #dc8f03;
    background: orange;
    background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03);
}
.deng:after {
    position: absolute;
    bottom: -7px;
    left: 10px;
    height: 12px;
    width: 60px;
    content: " ";
    display: block;
    margin-left: 20px;
    border-radius: 0 0 5px 5px;
    border: solid 1px #dc8f03;
    background: orange;
    background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03);
}
.deng-t {
    font-family: chengrongguangke, 华文行楷, Arial, Lucida Grande, Tahoma, sans-serif;
    font-size: 4.5rem;
    color: #dc8f03;
    font-weight: 500;
    line-height: 85px;
    text-align: center;
    margin: 0 0 0 -16px;
}
.night .deng-box2,
.night .deng-box4,
.night .deng-t {
    background: 0 0!important;
}
@-moz-keyframes swing {
    0% { -moz-transform: rotate(-10deg); }
    50% { -moz-transform: rotate(10deg); }
    100% { -moz-transform: rotate(-10deg); }
}
@-webkit-keyframes swing {
    0% { -webkit-transform: rotate(-10deg); }
    50% { -webkit-transform: rotate(10deg); }
    100% { -webkit-transform: rotate(-10deg); }
}


/* 对联 */
.loading-bg .duilian .left-panel,
.loading-bg .duilian .right-panel {
  width: 40%;
  height: 100%;
  position: fixed;
  top: 40px;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-bg .duilian .couplet-container {
  background: rgba(216,0,15,0.8);
  position: relative;
  box-shadow: 0 0 20px rgba(220,143,3,0.1);
  border-radius: 30px 30px 5px 5px;
  width: 90px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid rgba(255,217,0,0.831);
}
.loading-bg .duilian .couplet-container:before {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 2px solid rgba(255,217,0,0.831);
  border-radius: 25px 25px 3px 3px;
  opacity: 0.6;
}
.loading-bg .duilian .couplet-container .couplet-decor.top {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 30px;
  background: rgba(216,0,15,0.8);
  border: 4px solid rgba(255,217,0,0.831);
  border-radius: 15px 15px 0 0;
}
.loading-bg .duilian .couplet-container .couplet-decor.top:before {
  content: "";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: rgba(216,0,15,0.8);
  border: 4px solid #dcbf03;
  border-radius: 50%;
}
.loading-bg .duilian .couplet-container .couplet-decor.bottom {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 30px;
  background: rgba(216,0,15,0.8);
  border: 4px solid rgba(255,217,0,0.831);
  border-radius: 0 0 15px 15px;
}
.loading-bg .duilian .couplet-container .couplet-decor.bottom:after {
  content: "";
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: rgba(216,0,15,0.8);
  border: 4px solid rgba(255,217,0,0.831);
  border-radius: 50%;
}
.loading-bg .duilian .couplet {
  color: rgba(255,217,0,0.831);
  font-size: 2.5rem;
  writing-mode: vertical-rl;
  font-family: "华文行楷", cursive;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  position: relative;
  z-index: 1;
  letter-spacing: 15px;
  line-height: 1.3;
  font-weight: bold;
  margin: 0 auto;
}
.loading-bg .duilian .left-panel {
  left: 0;
  /* transform: translateX(-100%); */
}
.loading-bg .duilian .right-panel {
  right: 0;
  /* transform: translateX(100%); */
}
.loading-bg .duilian .center-panel {
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.loading-bg .duilian .center-panel .horizontal-scroll {
  background: rgba(216,0,15,0.8);
  width: 240px;
  height: 80px;
  border: 4px solid rgba(255,217,0,0.831);
  border-radius: 20px;
  position: relative;
  box-shadow: 0 0 20px rgba(220,143,3,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 25px;
}
.loading-bg .duilian .center-panel .horizontal-scroll:before {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 2px solid rgba(255,217,0,0.831);
  border-radius: 25px;
  opacity: 0.6;
}
.loading-bg .duilian .center-panel .horizontal-scroll .couplet-decor.left,
.loading-bg .duilian .center-panel .horizontal-scroll .couplet-decor.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 50px;
  background: rgba(216,0,15,0.8);
  border: 4px solid rgba(255,217,0,0.831);
}
.loading-bg .duilian .center-panel .horizontal-scroll .couplet-decor.left {
  left: -15px;
  border-radius: 15px 0 0 15px;
}
.loading-bg .duilian .center-panel .horizontal-scroll .couplet-decor.left:before {
  content: "";
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: rgba(216,0,15,0.8);
  border: 4px solid rgba(255,217,0,0.831);
  border-radius: 50%;
}
.loading-bg .duilian .center-panel .horizontal-scroll .couplet-decor.right {
  right: -15px;
  border-radius: 0 15px 15px 0;
}
.loading-bg .duilian .center-panel .horizontal-scroll .couplet-decor.right:after {
  content: "";
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: rgba(216,0,15,0.8);
  border: 4px solid rgba(255,217,0,0.831);
  border-radius: 50%;
}
.loading-bg .duilian .center-panel .horizontal-scroll .couplet {
  color: rgba(255,217,0,0.831);
  font-size: 2.5rem;
  writing-mode: horizontal-tb;
  font-family: "华文行楷", cursive;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  position: relative;
  z-index: 1;
  letter-spacing: 0.3em;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  margin-left: 0.3em;
}
```


<!-- endtab -->

{% endtabs %}

{% endfolding %}

总之，我要结合起来进行使用。


# 1. 实现

## 1.1. 首先将 `琅環书生` 和 `梦爱吃鱼` 举办一下“领证仪式😂”

{% tabs translate %}

<!-- tab 1. 转换成 pug -->

将琅環书生的 html 改写成 pug 代码：

```pug
if theme.denglong.enable
  .denglong
    .deng-box1
      .deng
        .xian
        .deng-a
          .deng-b
            .deng-t 新
        .shui.shui-a
          .shui-c
          .shui-b
    .deng-box2
      .deng
        .xian
        .deng-a
          .deng-b
            .deng-t 年
        .shui.shui-a
          .shui-c
          .shui-b
    .deng-box3
      .deng
        .xian
        .deng-a
          .deng-b
            .deng-t 快
        .shui.shui-a
          .shui-c
          .shui-b
    .deng-box4
      .deng
        .xian
        .deng-a
          .deng-b
            .deng-t 乐
        .shui.shui-a
          .shui-c
          .shui-b
```
<!-- endtab -->
<!-- tab 2. 梦爱吃鱼的 CSS -->

将梦爱吃鱼的 CSS 代码适配上面的 pug 代码：

```css
.denglong {
  pointer-events: none;
}

.deng-box1 {
  position: fixed;
  z-index: 9999;
  top: -30px;
  left: -1px;
}

.deng-box2 {
  position: fixed;
  z-index: 9999;
  top: -25px;
  left: 184px;
}

.deng-box3 {
  position: fixed;
  z-index: 9999;
  top: -28px;
  right: 11px;
}

.deng-box4 {
  position: fixed;
  z-index: 9999;
  top: -26px;
  right: 183px;
}

.deng {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 50px;
  background: rgba(216, 0, 15, 0.8);
  border-radius: 50%;
  transform-origin: 50% -100px;
  animation: swing 3s infinite ease-in-out;
  box-shadow: -5px 5px 50px 4px rgba(250, 108, 0, 1);
}

.deng:before {
  position: absolute;
  top: -7px;
  left: 29px;
  height: 12px;
  width: 60px;
  content: " ";
  display: block;
  z-index: 999;
  border-radius: 5px 5px 0 0;
  border: solid 1px #dc8f03;
  background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);
}

.deng:after {
  position: absolute;
  bottom: -7px;
  left: 10px;
  height: 12px;
  width: 60px;
  content: " ";
  display: block;
  margin-left: 20px;
  border-radius: 0 0 5px 5px;
  border: solid 1px #dc8f03;
  background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);
}

.deng-a {
  width: 100px;
  height: 90px;
  background: rgba(216, 0, 15, 0.1);
  margin: 12px 8px 8px 10px;
  border-radius: 50%;
  border: 2px solid #dc8f03;
}

.deng-b {
  width: 45px;
  height: 90px;
  background: rgba(216, 0, 15, 0.1);
  margin: -2px 8px 8px 26px;
  border-radius: 50%;
  border: 2px solid #dc8f03;
}

.xian {
  position: absolute;
  top: -50px;
  left: 60px;
  width: 2px;
  height: 50px;
  background: #dc8f03;
}

.shui-a {
  position: relative;
  width: 5px;
  height: 20px;
  margin: -5px 0 0 59px;
  animation: swing 4s infinite ease-in-out;
  transform-origin: 50% -45px;
  background: #ffa500;
  border-radius: 0 0 5px 5px;
}

.shui-b {
  position: absolute;
  top: 14px;
  left: -2px;
  width: 10px;
  height: 10px;
  background: #dc8f03;
  border-radius: 50%;
}

.shui-c {
  position: absolute;
  top: 18px;
  left: -2px;
  width: 10px;
  height: 35px;
  background: #ffa500;
  border-radius: 0 0 0 5px;
}

.deng-t {
  font-family: "华文行楷", Arial, Lucida Grande, Tahoma, sans-serif;
  font-size: 3.2rem;
  color: #dc8f03;
  font-weight: bold;
  line-height: 85px;
  text-align: center;
}

@keyframes swing {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}

/* 适配暗色模式 */
[data-theme="dark"] .deng {
  background: rgba(216, 0, 15, 0.8);
}

[data-theme="dark"] .deng-a,
[data-theme="dark"] .deng-b {
  background: rgba(216, 0, 15, 0.1);
}

@media screen and (max-width: 768px) {
  .deng-box1,
  .deng-box2,
  .deng-box3,
  .deng-box4 {
    display: none !important;
  }
}
```

<!-- endtab -->
{% endtabs %}

## 1.2. 改进

为了让主题支持通过配置指定四个字，可以改写 Pug 模板以动态生成文字内容，同时在 `theme.denglong` 配置中增加 `text` 参数，用于定义要显示的四个字。以下是具体实现步骤和代码：

- 修改后的主题配置

```yml
denglong:
  enable: true  # true 开启 false 关闭
  text: "新年快乐"  # 配置灯笼的四个字
```

- 修改后的 Pug 模板

> 通过循环读取配置中的 text，动态生成灯笼内容。

```pug
if theme.denglong.enable
  - const denglongText = theme.denglong.text || "新年快乐"; // 如果未配置，默认显示“新年快乐”
  .denglong
    each char, index in denglongText
      div(class=`deng-box${index + 1}`)
        .deng
          .xian
          .deng-a
            .deng-b
              .deng-t= char
          .shui.shui-a
            .shui-c
            .shui-b
```