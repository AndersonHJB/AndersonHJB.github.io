---
title: Hexo美化：自适应切换渐进式加载首页图
tags:
  - 笔记
  - 网站魔改教程
categories:
  - hexo 网站相关
keywords:
  - hexo
  - 安知鱼主题魔改
description: 本篇是实现首页一图流的教程
top_img: /img/posts/04-Monograph-flow/103015259_p0.jpg
comments: true
cover: /img/posts/04-Monograph-flow/Canvas-Ruom.webp
toc: true
mathjax: false
katex: false
highlight_shrink: false
swiper_index: 1
top_group_index: 1
background: '#fff'
ai:
  - 这篇文章介绍了在安知鱼主题下，如何实现一图流的教程。
abbrlink: cf45a15f
date: 2024-08-29 20:48:40
updated: 2024-08-28 00:03:25
toc_number:
toc_style_simple:
aplayer:
aside:
---

# 1. 效果预览

{% sitegroup %}

{% site AI悦创·博客, url=https://blog.bornforthis.cn/, screenshot=https://blog.bornforthis.cn/img/link/00-blog.bornforthis.cn.png, avatar=https://bornforthis.cn/aiyc.svg, description=AI悦创·创造不同～ %}

{% endsitegroup %}



# 2. 代码实现

## 2.1 首页顶部图渐进式加载

{% tabs img %}
<!-- tab 1. imgloaded.js -->

- Path: 新建文件 `themes/anzhiyu/source/js/imgloaded.js` 新增以下内容，并按照注释调整照片路径
```javascript
// 首页头图加载优化
/**
 * @description 实现medium的渐进加载背景的效果
 */
class ProgressiveLoad {
    constructor(smallSrc, largeSrc) {
      this.smallSrc = smallSrc;
      this.largeSrc = largeSrc;
      this.initTpl();
    }
  
    /**
     * @description 生成ui模板
     */
    initTpl() {
      this.container = document.createElement('div');
      this.smallStage = document.createElement('div');
      this.largeStage = document.createElement('div');
      this.smallImg = new Image();
      this.largeImg = new Image();
      this.container.className = 'pl-container';
      this.smallStage.className = 'pl-img pl-blur';
      this.largeStage.className = 'pl-img';
      this.container.appendChild(this.smallStage);
      this.container.appendChild(this.largeStage);
      this.smallImg.onload = this._onSmallLoaded.bind(this);
      this.largeImg.onload = this._onLargeLoaded.bind(this);
    }
  
    /**
     * @description 加载背景
     */
    progressiveLoad() {
      this.smallImg.src = this.smallSrc;
      this.largeImg.src = this.largeSrc;
    }
  
    /**
     * @description 大图加载完成
     */
    _onLargeLoaded() {
      this.largeStage.classList.add('pl-visible');
      this.largeStage.style.backgroundImage = `url('${this.largeSrc}')`;
    }
  
    /**
     * @description 小图加载完成
     */
    _onSmallLoaded() {
      this.smallStage.classList.add('pl-visible');
      this.smallStage.style.backgroundImage = `url('${this.smallSrc}')`;
    }
  }
  
  const executeLoad = (config, target) => {
    console.log('执行渐进背景替换');
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const loader = new ProgressiveLoad(
      isMobile ? config.mobileSmallSrc : config.smallSrc,
      isMobile ? config.mobileLargeSrc : config.largeSrc
    );
    // 和背景图颜色保持一致，防止高斯模糊后差异较大
    if (target.children[0]) {
      target.insertBefore(loader.container, target.children[0]);
    }
    loader.progressiveLoad();
  };
  
  const config = {
    smallSrc: '/img/xiaotu.jpg', // 小图链接 尽可能配置小于100k的图片
    largeSrc: '/img/tu.jpg', // 大图链接 最终显示的图片
    mobileSmallSrc: '/img/sjxt.jpg', // 手机端小图链接 尽可能配置小于100k的图片
    mobileLargeSrc: '/img/sjdt.jpg', // 手机端大图链接 最终显示的图片
    enableRoutes: ['/'],
    };

  function initProgressiveLoad(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
      executeLoad(config, target);
    }
  }
  
  function onPJAXComplete(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
      initProgressiveLoad(config);
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    initProgressiveLoad(config);
  });
  
  document.addEventListener("pjax:complete", function() {
    onPJAXComplete(config);
  });
```
<!-- endtab -->
<!-- tab 2.  -->
- Path: 新建文件 `themes/anzhiyu/source/css/imgloaded.css` 新增以下内容，并按照注释自行决定调整内容

```css
/* 首页头图加载 */  
.pl-container {  
  width: 100%;  
  height: 100%;  
  position: relative;  /* 一图流这里改fixed */  
  /* 一图流这里加z-index: -2; */ 
  overflow: hidden;  
  will-change: transform; /* 添加性能优化 */  
  /* blur-to-clear模糊动画2s */
  animation: blur-to-clear 2s cubic-bezier(.62,.21,.25,1) 0s 1 normal backwards running, scale 1.5s cubic-bezier(.62,.21,.25,1) 0s 1 both;  
}  
.pl-img {  
  width: 100%;  
  height: 100%;  
  position: absolute;  
  background-position: center;  
  background-size: cover;  
  background-repeat: no-repeat;  
  opacity: 0;  
  transition: opacity 1s;  
}  
  
@keyframes blur-to-clear {  
  0% {  
    filter: blur(50px);  
    opacity: 1;  
  }  
  100% {  
    filter: blur(0);  
    opacity: 1;  
  }  
}  
  
@keyframes scale {  
  0% {  
    transform: scale(1.5) translateZ(0);  
    opacity: 0;  
  }  
  to {  
    transform: scale(1) translateZ(0);  
    opacity: 1;  
  }  
}  
  
.pl-visible {  
  opacity: 1;  
}  
  
.pl-blur {  
  /* 小图锯齿多，增加高斯模糊 */  
  filter: blur(50px);  
}
```
<!-- endtab -->
{% endtabs %}

## 2.2 首页一图流渐进式加载


