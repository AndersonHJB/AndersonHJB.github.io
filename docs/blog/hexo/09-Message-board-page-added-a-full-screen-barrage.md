---
title: 安知鱼主题留言板页添加全屏弹幕
date: 2024-08-24 14:22:37
author: AI悦创
isOriginal: true
icon: blog
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

![](https://blog.images.bornforthis.cn/docs-images/sha256/33/339b5d82a4470be5dc8e4a508f35573afcad89a07021691900fd6a3623d45430.webp)

## 1. 效果

你好，我是悦创。

效果直接查看此链接即可：[https://blog.bornforthis.cn/comments/](https://blog.bornforthis.cn/comments/)

## 2. 参考教程

- [https://www.naokuo.top/p/1f0e455d.html](https://www.naokuo.top/p/1f0e455d.html)

## 3. 主题配置文件

- `_config.anzhiyu.yml`

```yaml
menu:
  友链:
    # 友人帐: /link/ || anzhiyu-icon-link
    # 朋友圈: /fcircle/ || anzhiyu-icon-artstation
    留言板: /comments/ || anzhiyu-icon-envelope

#envelope_comment
#seehttps://akilar.top/posts/e2d3c450/
envelope_comment:
  enable: true #控制开关
  custom_pic:
    cover: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/violet.jpg #信笺头部图片
    line: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/line.png #信笺底部图片
    beforeimg: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/before.png # 信封前半部分
    afterimg: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/after.png # 信封后半部分
  message: #信笺正文，多行文本，写法如下
    - 有什么想问的？
    - 有什么想说的？
    - 有什么想吐槽的？
    - 哪怕是有什么想吃的，都可以告诉我哦~
  bottom: 自动书记人偶竭诚为您服务！ #仅支持单行文本
  height: #1024px，信封划出的高度
  easy_Danmaku_js: https://npm.onmicrosoft.cn/naokuo-blog@1.2.12/js/easy-Danmaku.js # 源码：https://github.com/pprory/easyDanmaku
  danmu_page: '/comments/' # 即留言板地址
  danmu_el: 'danmu-wrap' # 弹幕挂载节点
  danmu_line: 5 # 弹幕行数
  danmu_speed: 20 # 弹幕播放速度
  danmu_hover: true # 鼠标hover时是否暂停播放弹幕
  danmu_loop: false # 开启循环播放
  danmu_runtime: 10 # 循环弹幕播放时长
  danmu_colourful: true # 开启彩色弹幕
  danmu_coefficient: 1.38 # 弹幕密度系数
  front_matter: #【可选】comments 页面的 front_matter 配置
    title: 留言板
    comments: true
    top_img: false
    type: envelope
    aside: false
    top_background: https://blog.bornforthis.cn/img/comments/pioqoNT.jpg
```

## 4. 创建页面配置

::: tabs

@tab 1. 新建 envelope.pug

- Path：`themes/anzhiyu/layout/includes/page/envelope.pug`

```pug
#bornforthis_envelope
  - let maincontent_background = page.top_background
  .author-content.author-content-item.album.single(style=`${maincontent_background ? `background: url(${maincontent_background}) top / cover no-repeat;` : ""}`)
    .card-content
      .author-content-item-tips 留言板
      span.author-content-item-title 自动书记人偶竭诚为您服务！🤪
      .content-bottom
        .tips 有什么想说的，都可以告诉我哦~
      .banner-button-group
        a.banner-button(onclick=`pjax.loadUrl('/about/')`)
          i.anzhiyufont.anzhiyu-icon-arrow-circle-right(style='font-size: 22px; margin-right: 0.25rem')
            span.banner-button-text 关于本人
  #maincontent
    #form-wrap
      img#beforeimg.no-lightbox(src=url_for(theme.envelope_comment.custom_pic.beforeimg))
      #envelope
        form
          .formmain(style="pointer-events: none;")
            img.headerimg.no-lightbox(src=url_for(theme.envelope_comment.custom_pic.cover) style="width: 100%;overflow: hidden;pointer-events: none;")
            .comments-main
              h3.title3(style="text-decoration: none;color: var(--anzhiyu-theme);text-align: center;")=`来自` + config.author + `的留言:`
              .comments(style="text-align: center;border-bottom: #ddd 1px solid;border-left: #ddd 1px solid;padding-bottom: 20px;background-color: #eee;margin: 15px 0px;padding-left: 20px;padding-right: 20px;border-top: #ddd 1px solid;border-right: #ddd 1px solid;padding-top: 20px;")
                each i in theme.envelope_comment.message
                  div=`${i}`
              .bottomcontent(style="text-align: center;margin-top: 40px;")
                img.bottomimg.no-lightbox(src=url_for(theme.envelope_comment.custom_pic.line) style="width: 100%;margin: 5px auto 5px auto;display: block;pointer-events: none;")
              p.bottomhr(style="font-size: 12px;text-align: center;color: #999;")=`${theme.envelope_comment.bottom}`
      img#afterimg.no-lightbox(src=url_for(theme.envelope_comment.custom_pic.afterimg))
      
if theme.envelope_comment.enable && theme.envelope_comment.easy_Danmaku_js
  #danmu-Btn
  #danmu-wrap
  style.
    #article-container a:not(.headerlink, .fancybox, .default-style a) {
      font-weight: 700;
      color: var(--font-color);
      padding: 0 3px;
      border-bottom: 2px var(--anzhiyu-main) solid;
    }
    #article-container a:not(.headerlink, .fancybox, .default-style a):hover {
      color: #fff;
      border-radius: 5px;
      text-decoration: none;
      background-color: var(--anzhiyu-main);
    }
    #danmu-wrap {
      width: 100%;
      height: calc(100% - 60px);
      position: fixed;
      left: 0;
      top: 60px;
      z-index: 3;
      pointer-events: none;
    }
    .hide-danmu {
      opacity: 0;
    }
    .hide-danmu * {
      pointer-events: none !important;
    }
    div#danmu-Btn {
      display: flex;
      justify-content: center;
      margin: 64px 0 0;
    }
    div#danmu-Btn button.hide-Btn {
      background: rgba(52,106,133,.478);
      color: white;
      padding: 8px 20px;
      margin: 0 20px;
      border-radius: 100px;
    }
    div#danmu-Btn button.hide-Btn:hover {
      background: var(--anzhiyu-main);
    }
    .default-style {
      pointer-events: all;
      cursor: pointer;
      font-size: 16px;
      border-radius: 100px;
      overflow: hidden;
      color: #eee;
    }
    .default-style a {
      background-color: var(--naokuo-danmuBg);
      transition: .3s;
      color: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 16px 6px 6px;
      text-decoration: none !important;
    }
    .default-style a:hover {
      background-color: var(--anzhiyu-main);
    }
    .default-style img {
      pointer-events: none;
      height: 30px;
      width: 30px;
      margin: 0 5px 0 0 !important;
      border-radius: 50% !important;
    }
    .default-style p {
      line-height: 1;
      pointer-events: none;
      margin: 0 !important;
      max-width: 300px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
```

@tab 2. 引入 envelope.pug

- Path: `themes/anzhiyu/layout/page.pug`

```pug
block content
  #page
    if top_img === false && !page.top_single
      h1.page-title= page.title
    case page.type
      when 'tags'
        include includes/page/tags.pug
      when 'link'
        include includes/page/flink.pug
      when 'categories'
        include includes/page/categories.pug
      when 'essay'
        include includes/page/essay.pug
      when 'room'
        include includes/page/room.pug
      when 'about'
        include includes/page/about.pug
      when 'album'
        include includes/page/album.pug
      when 'fcircle'
        include includes/page/fcircle.pug
      when 'album_detail'
        include includes/page/album_detail.pug
      when 'music'
        include includes/page/music.pug
+     when 'envelope'
+       include includes/page/envelope.pug        
      default
        include includes/page/default-page.pug
```

@tab 3. 新建 danmu.pug

- Path: `themes/anzhiyu/layout/includes/anzhiyu/danmu.pug`

```pug
- const { envId } = theme.twikoo
- const { easy_Danmaku_js, danmu_page, danmu_el, danmu_line, danmu_speed, danmu_hover, danmu_loop, danmu_colourful, danmu_coefficient, danmu_runtime } = theme.envelope_comment

script.
  //- 留言板页面弹幕
  window.addEventListener('load', () => {
    const getnaokuo_danmu = () => {
      if (!window.location.pathname.startsWith('!{danmu_page}')) return; //- 判断是否是留言板页面
      const naokuo_danmu = async () => {
        const Danmaku = new EasyDanmaku({
          page: '!{danmu_page}', //- 即留言板地址
          el: '#!{danmu_el}', //- 弹幕挂载节点
          line: !{danmu_line}, //- 弹幕行数
          speed: !{danmu_speed}, //- 弹幕播放速度
          hover: !{danmu_hover}, //- 鼠标hover时是否暂停播放弹幕
          loop: !{danmu_loop}, //- 开启循环播放
          colourful: !{danmu_colourful}, //- 开启彩色弹幕
          coefficient: !{danmu_coefficient}, //- 弹幕密度系数
          runtime: !{danmu_runtime}, //- 循环弹幕播放时长
        });
        try {
          let danmuStore = saveToLocal.get('twikoo-danmu');
          if (!danmuStore) {
            const options = {
              method: "POST",
              body: JSON.stringify({
                "event": "GET_RECENT_COMMENTS",
                "includeReply": false,
                "pageSize": 100
              }),
              headers: { 'Content-Type': 'application/json' }
            }
            danmuStore = [];
            const response = await fetch(`!{envId}`, options);
            if (response.ok) {
              const { data } = await response.json();
              //- console.info(data);
              data.forEach(i => {
                if (i.avatar == undefined) i.avatar = 'https://cravatar.cn/avatar/d615d5793929e8c7d70eab5f00f7f5f1?d=mp'
                danmuStore.push({ avatar: i.avatar, content: i.nick + '：' + formatDanmaku(i.comment), url: i.url + '#' + i.id })
              });
              Danmaku.batchSend(danmuStore, true);
              saveToLocal.set('twikoo-danmu', danmuStore, 0.5)
            }
            //- 格式化评论
            function formatDanmaku(str) {
              str = str.replace(/<\/*br>|[\s\uFEFF\xA0]+/g, '');
              str = str.replace(/<img.*?>/g, '[图片]');
              str = str.replace(/<a.*?>.*?<\/a>/g, '[链接]');
              str = str.replace(/<pre.*?>.*?<\/pre>/g, '[代码块]');
              str = str.replace(/<.*?>/g, '');
              return str
            }
          } else {
            Danmaku.batchSend(danmuStore, true);
          }
        } catch (err) {
          console.error("Error fetching data:", err);
        }

        document.getElementById('danmu-Btn') && (document.getElementById('danmu-Btn').innerHTML = `<button class="hide-Btn" onclick="document.getElementById('!{danmu_el}').classList.remove('hide-danmu')">显示弹幕</button> <button class="hide-Btn" onclick="document.getElementById('!{danmu_el}').classList.add('hide-danmu')">隐藏弹幕</button>`)
      }
      (async () => {
        if (typeof EasyDanmaku === 'function') {
          await naokuo_danmu();
        } else {
          const easyDanmakuScript = await getScript('!{url_for(easy_Danmaku_js)}');
          if (typeof EasyDanmaku === 'function') {
            await naokuo_danmu();
          } else {
            console.error('EasyDanmaku function not found even after loading the script.');
          }
        }
      })();
    }
    getnaokuo_danmu()
    document.addEventListener('pjax:complete', getnaokuo_danmu)
  })
```

@tab 4. 引入 danmu.pug

- Path: `themes/anzhiyu/layout/includes/additional-js.pug`

```pug
//- 弹幕js
if theme.envelope_comment.enable && theme.envelope_comment.easy_Danmaku_js
  != partial("includes/anzhiyu/danmu.pug", {}, { cache: true })
```

@tab 5. 新建 CSS 样式

- Path: `themes/anzhiyu/source/css/_page/envelope.styl`

```pug
if hexo-config('envelope_comment.enable')
  $hoverHeight = hexo-config('envelope_comment.height') ? convert(hexo-config('envelope_comment.height')) : 1050px
  body[data-type="envelope"]
    #page
      border: 0
      box-shadow: none !important
      padding: 0 !important
      background: 0 0 !important
    .page-title
      display: none
    #maincontent
      margin: 64px 0 0

    @media screen and (max-width: 600px)
      #beforeimg,
      #afterimg
        display: none !important

    @media screen and (min-width: 600px)
      #article-container img
        margin: 0 auto 0rem
      
      #form-wrap
        overflow: hidden
        height: 447px
        position: relative
        top: 0px
        transition: all 1s ease-in-out .3s
        z-index: 0
        &:hover
          height: $hoverHeight
          top: -200px
          will-change: transform,top
      
      #beforeimg
        position: absolute
        bottom: 126px
        left: 0px
        background-repeat: no-repeat
        width: 530px
        height: 317px
        z-index: -100
        pointer-events: none
      
      #afterimg
        position: absolute
        bottom: -2px
        left: 0
        background-repeat: no-repeat
        width: 530px
        height: 259px
        z-index: 100
        pointer-events: none

      #envelope
        position: relative
        overflow: visible
        width: 500px
        margin: 0px auto
        transition: all 1s ease-in-out .3s
        padding-top: 200px
        will-change: transform

      #maincontent
        width: 530px
        margin: 20px auto 0
      
      .formmain
        background: white
        width: 95%
        max-width: 800px
        margin: auto auto
        border-radius: 5px
        border: 1px solid
        overflow: hidden
        -webkit-box-shadow: 0px 0px 20px 0px #000000
        box-shadow: 0px 0px 20px 0px #000000
      
  // 夜间模式
  [data-theme='dark']
    --naokuo-danmuBg: rgba(255, 255, 255, 0.3)
    body[data-type="envelope"]
      .formmain
        background: #323232
      .comments
        background: #5a5a5a !important
  [data-theme="light"]
    --naokuo-danmuBg: rgba(0, 0, 0, 0.5)
```

:::

## 5. 只获取特定页面的评论

```pug
const options = {
	method: "POST",
	body: JSON.stringify({
	//- "event": "GET_RECENT_COMMENTS", //- 不需要指定页面，则启动此条
	"event": "COMMENT_GET",
	"url": "/comments/",  //- 仅限 comments 页面评论,启用："event": "COMMENT_GET",, 不需要可以直接注释掉
	"includeReply": false,
	"pageSize": 100
	}),
	headers: { 'Content-Type': 'application/json' }
	}
```





欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)





