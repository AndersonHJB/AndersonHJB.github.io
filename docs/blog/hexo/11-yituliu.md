---
title: 安知鱼主题添加一图流
date: 2024-08-28 12:45:47
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

## 1. 效果预览

- [https://blog.bornforthis.cn/](https://blog.bornforthis.cn/)

## 2. 参考文章

- [Hexo美化：自适应切换渐进式加载首页图](https://blog.cent1pedee.top/posts/f730aac1.html)



## 3. 前言

随着互联网技术的发展，越来越多的人选择使用静态博客来展示自己的个人风格和内容。在一个偶然的机会下，我接触了 **Hexo** 静态博客的搭建与使用，并且对其进行了美化。

本文以本站使用的主题 `anzhiyu` 为例，介绍了如何为首页顶部图配置渐进式加载。渐进式加载是一种优化网页性能和用户体验的技术，它可以让图片在加载过程中逐渐显示出清晰度，从而避免了图片加载缓慢或失败时出现的空白或占位符。这个方法同样适用于一图流的博客背景，因此我们只需要更改部分代码即可实现本站首页效果。为了方便读者的阅读和参考，本文将详细描述操作步骤，并提供相关的截图和示例。在此，我要感谢**石头姐**提供了详细的配置教程，以及**小旦**为本站首页效果提供了宝贵的帮助。他们的博客链接如下：

- [https://blog.kouseki.cn/](https://blog.kouseki.cn/)
- [https://satera.cn/](https://satera.cn/)

- 原理是先加载小图文件并进行高斯模糊处理，在大图加载完成后再对大图进行加载。

## 4. 操作步骤

### 4.1 首页顶部图渐进式加载

::: tabs

@tab 1. imgloaded.js

- 新建文件 `themes/anzhiyu/source/js/imgloaded.js` 新增以下内容，并按照注释调整照片路径

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

@tab 2. imgloaded.css

- 新建文件 `themes/anzhiyu/source/css/imgloaded.css` 新增以下内容，并按照注释自行决定调整内容

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

:::

### 4.2 首页一图流渐进式加载

::: tabs

@tab 1. imgloaded.js

- 新建文件 `themes/anzhiyu/source/js/imgloaded.js` 新增以下内容，并按照注释调整照片路径

```json
// 首页一图流加载优化
/**
 * @description 实现medium的渐进加载背景的效果
 */
(function() {
  class ProgressiveLoad {
    constructor(smallSrc, largeSrc) {
      this.smallSrc = smallSrc;
      this.largeSrc = largeSrc;
      this.initTpl();
      this.container.addEventListener('animationend', () => {
        this.smallStage.style.display = 'none'; 
      }, {once: true});
    }

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

    progressiveLoad() {
      this.smallImg.src = this.smallSrc;
      this.largeImg.src = this.largeSrc;
    }

    _onLargeLoaded() {
      this.largeStage.classList.add('pl-visible');
      this.largeStage.style.backgroundImage = `url('${this.largeSrc}')`;
    }

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
    if (target.children[0]) {
      target.insertBefore(loader.container, target.children[0]);
    }
    loader.progressiveLoad();
  };

  const ldconfig = {
    light: {
	  smallSrc: '/img/bg2_80kbver.jpg', //浅色模式 小图链接 尽可能配置小于100k的图片 
	  largeSrc: '/img/bg2.jpg', //浅色模式 大图链接 最终显示的图片
	  mobileSmallSrc: '/img/bg2_80kbver.jpg', //手机端浅色小图链接 尽可能配置小于100k的图片
	  mobileLargeSrc: '/img/bg2.jpg', //手机端浅色大图链接 最终显示的图片
	  enableRoutes: ['/'],
	  },
	dark: {
	  smallSrc: '/img/bg1_80kbver.jpg', //深色模式 小图链接 尽可能配置小于100k的图片 
	  largeSrc: '/img/bg1.jpg', //深色模式 大图链接 最终显示的图片
	  mobileSmallSrc: '/img/bg1_80kbver.jpg', //手机端深色模式小图链接 尽可能配置小于100k的图片
	  mobileLargeSrc: '/img/bg1.jpg', //手机端深色大图链接 最终显示的图片
	  enableRoutes: ['/'],
	  },
	};

    const getCurrentTheme = () => {
      return document.documentElement.getAttribute('data-theme'); 
    }

    const onThemeChange = () => {
      const currentTheme = getCurrentTheme();
      const config = ldconfig[currentTheme];
      initProgressiveLoad(config);
      document.addEventListener("DOMContentLoaded", function() {
        initProgressiveLoad(config);
      });
    
      document.addEventListener("pjax:complete", function() {
        onPJAXComplete(config);
      });
    }

    let initTheme = getCurrentTheme();
    let initConfig = ldconfig[initTheme];
    initProgressiveLoad(initConfig);

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === "data-theme" && location.pathname === '/') {
        onThemeChange();
      }
    });
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"]  
  });

  function initProgressiveLoad(config) {
    const container = document.querySelector('.pl-container');
    if (container) {
      container.remove();
    }
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

})();
```

@tab 2. imgloaded.css

- 新建文件 `themes/anzhiyu/source/css/imgloaded.css` 新增以下内容，并按照注释自行决定调整内容

```yaml
/* 首页头图加载 */
.pl-container {
  width: 100%;
  height: 100%;
  z-index: -2;
  position: fixed;
  overflow: hidden;
  will-change: transform; /* 添加性能优化 */
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

:::

## 5. 引入文件

- 在 `_config.anzhiyu.yml` 主题配置文件下 `inject` 配置项中 `head` 和 `bottom` 处
- 分别引入 `imgloaded.css` 和 `imgloaded.js` 文件

```yaml
inject:  
  head:  
    - <link rel="stylesheet" href="/css/imgloaded.css?1">  
  
  bottom:  
    - <script async data-pjax src="/js/imgloaded.js?1"></script> # 首页图片渐进式加载
```

## 6. 配置图片

- 为了使用顶部图功能，你必须在主题配置文件中设置 `top_image` 为 `true`。然后，你可以在 `top_image_url` 中留空或者填写任意字符串，因为这个值不会影响图片的显示。图片的加载和渲染是由 js 文件实现的，所以你不需要在配置文件中提供图片的源地址。

```yaml
# The banner image of home page
index_img: "background: url() top / cover no-repeat"
```

- 在 `imgloaded.js` 中的 73 到 76 行（或是 83 到 86 行）修改以下示例的部分
- 若是首页一图流渐进式加载的 `imgloaded.js` 则修改 56 到 71 行

::: code-tabs

@tab 首页顶部图渐进式加载

```javascript
const config = {  
  smallSrc: 'https://blog.bornforthis.cn/img/xiaotu.jpg', // 小图链接 尽可能配置小于100k的图片  
  largeSrc: 'https://blog.bornforthis.cn/img/tu.jpg', // 大图链接 最终显示的图片  
  mobileSmallSrc: 'https://blog.bornforthis.cn/img/sjxt.jpg', // 手机端小图链接 尽可能配置小于100k的图片  
  mobileLargeSrc: 'https://blog.bornforthis.cn/img/sjdt.jpg', // 手机端大图链接 最终显示的图片  
  enableRoutes: ['/'],  
  };
```

@tab 首页一图流渐进式加载

```javascript
const ldconfig = {
    light: {
	    smallSrc: 'https://blog.bornforthis.cn/img/bg2_80kbver.jpg', //浅色模式 小图链接 尽可能配置小于100k的图片 
	    largeSrc: 'https://blog.bornforthis.cn/img/bg2.jpg', //浅色模式 大图链接 最终显示的图片
	    mobileSmallSrc: 'https://blog.bornforthis.cn/img/bg2_80kbver.jpg', //手机端浅色小图链接 尽可能配置小于100k的图片
	    mobileLargeSrc: 'https://blog.bornforthis.cn/img/bg2.jpg', //手机端浅色大图链接 最终显示的图片
	    enableRoutes: ['/'],
	    },
    dark: {
	    smallSrc: 'https://blog.bornforthis.cn/img/bg1_80kbver.jpg', //深色模式 小图链接 尽可能配置小于100k的图片 
	    largeSrc: 'https://blog.bornforthis.cn/img/bg1.jpg', //深色模式 大图链接 最终显示的图片
	    mobileSmallSrc: 'https://blog.bornforthis.cn/img/bg1_80kbver.jpg', //手机端深色模式小图链接 尽可能配置小于100k的图片
	    mobileLargeSrc: 'https://blog.bornforthis.cn/img/bg1.jpg', //手机端深色大图链接 最终显示的图片
	    enableRoutes: ['/'],
	    },
	};
```

:::

## 7. 图片懒加载配置修改

- 本文的这一部分是根据**小旦**的概括而写的，作者在此注明出处。

```yaml
lazyload:
  enable: true
  field: post # site/post
  placeholder:
  blur: true
  progressive: true
```



## 8. 大功告成

到这时候，如果你的图片文件配置正确，可以执行 Hexo 的三连命令来查看效果了！

- 部分教程链接：
    - [首页背景图渐进式加载，解决卡顿难题](https://blog.kouseki.cn/posts/4f72.html)
    - [Kouseki式首页背景图渐进式加载 · 改](https://satera.cn/posts/6a8fb549/)









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





