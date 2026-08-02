import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { searchPlugin } from "@vuepress/plugin-search";
// import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
// import { searchProPlugin } from "vuepress-plugin-search-pro";
// import { cut } from "nodejs-jieba";
// import { comment } from "vuepress-theme-hope";
// import { hopeTheme } from "vuepress-theme-hope";
// import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
// import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  // bundler: viteBundler({
  //   viteOptions: {
  //     server: {
  //       watch: {
  //         // 重点：忽略大目录/生成目录
  //         ignored: [
  //           "**/.git/**",
  //           "**/node_modules/**",
  //           "**/dist/**",
  //           "**/.temp/**",
  //           "**/.cache/**",
  //           "**/.vuepress/.temp/**",
  //           "**/.vuepress/.cache/**",
  //           "**/.vuepress/dist/**",
  //           "**/.DS_Store",
  //         ],
  //       },
  //     },
  //   },
  // }),
  // lang: "zh-CN",
  // title: "AI悦创-Python一对一辅导",
  // description: "Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学",
  base: "/",
  theme,
  // theme: hopeTheme({
  //   plugins: {
  //     comment: {
  //       provider: "Waline",
  //     serverURL: "https://comment.bornforthis.cn/",
  //     },
  //   },
  // }),
  locales: {
    // "/en/": {
    //   lang: "en-US",
    //   title: "AI悦创-Python一对一辅导",
    //   description: "Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学",
    // },
    "/": {
      lang: "zh-CN",
      title: "AI悦创-Python一对一辅导",
      description: "Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学",

    },
  },

  head: [
    ['meta', { name: 'google-adsense-account', content: 'ca-pub-5987340307114699' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // [
    //   "link", {
    //     rel: "shortcut icon",
    //     href: "/favicon.ico",
    //     // href: "/aiyc.svg",
    //   }
    // ],
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2c924d7bcd249a2eaa2d4d003771cead";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],

    // [
    //   "link", {
    //     rel: "stylesheet",
    //     href: "https://pyscript.net/latest/pyscript.css"
    //   }
    // ],
    [
      "script", {
        async: "",
        href: "https://www.googletagmanager.com/gtag/js?id=G-PK3BBE140P"
      },
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-ZTEFJDCG66');
      `
    ]

  ],

  
  plugins: [
  
    // componentsPlugin({

    //   componentOptions: {
    //     artPlayer: {
    //       airplay: true,
    //       autoplay: true,
    //       fastForward: true,

    //       screenshot: true,
    //     },
    //   },
    // }),
    // searchConsolePlugin({
    //   baiduId: "2c924d7bcd249a2eaa2d4d003771cead",
    //   autoPushBaiduSwitch: true,
    // }),
    googleAnalyticsPlugin({
      id: "G-ZTEFJDCG66",
      debug: true,
    }),
    // docsearchPlugin({
    //   // 你的选项
    //   // appId, apiKey 和 indexName 是必填的
    //   appId: "ACD1S100IT",
    //   apiKey: "409311158985cfee5c0a535e5998ddd2",
    //   indexName: "bornforthis",
    //   // placeholder: "搜索",
    //   locales: {
    //     "/": {
    //       placeholder: "搜索文档",
    //       translations: {
    //         button: {
    //           buttonText: "搜索文档",
    //           buttonAriaLabel: "搜索文档",
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: "清除查询条件",
    //             resetButtonAriaLabel: "清除查询条件",
    //             cancelButtonText: "取消",
    //             cancelButtonAriaLabel: "取消",
    //           },
    //           startScreen: {
    //             recentSearchesTitle: "搜索历史",
    //             noRecentSearchesText: "没有搜索历史",
    //             saveRecentSearchButtonTitle: "保存至搜索历史",
    //             removeRecentSearchButtonTitle: "从搜索历史中移除",
    //             favoriteSearchesTitle: "收藏",
    //             removeFavoriteSearchButtonTitle: "从收藏中移除",
    //           },
    //           errorScreen: {
    //             titleText: "无法获取结果",
    //             helpText: "你可能需要检查你的网络连接",
    //           },
    //           footer: {
    //             selectText: "选择",
    //             navigateText: "切换",
    //             closeText: "关闭",
    //             searchByText: "搜索提供者",
    //           },
    //           noResultsScreen: {
    //             noResultsText: "无法找到相关结果",
    //             suggestedQueryText: "你可以尝试查询",
    //             reportMissingResultsText: "你认为该查询应该有结果？",
    //             reportMissingResultsLinkText: "点击反馈",
    //           },
    //         },
    //       },
    //     },
    //   },
    // }),

    // searchPlugin({
    //   maxSuggestions: 16,
    //   hotKeys: [],
    //   // 你的选项
    //   locales: {
    //     "/": {
    //       placeholder: "搜索",
    //     }
    //   }
    // }),
  ],

  // shouldPrefetch: false,
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  }
});
