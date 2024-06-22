import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar.js";
import { zhSidebar } from "./sidebar.js";

export default hopeTheme({
  hostname: "https://blog.bornforthis.cn/",

  author: {
    name: "AI悦创",
    url: "https://bornforthis.cn/",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/aiyc.svg",

  repo: "AndersonHJB/AndersonHJB.github.io",

  docsDir: "src",

  blog: {
    name: "AI悦创",
    avatar: "/aiyc.jpg",
    description: "一个思考者,编程私教 1v1",
    intro: "/intro",
    articlePerPage: 18,
    medias: {
      Email: "mailto:info@bornforthis@bornforthis.cn",
      Gitee: "https://gitee.com/huangjiabaoaiyc",
      GitHub: "https://github.com/AndersonHJB",
      Gmail: "mailto:aiyuechuang@gmail.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",
      Youtube: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg",
      Zhihu: "https://www.zhihu.com/people/aiyuechuang",
      Instagram: "https://www.instagram.com/aiyuechuang1126/",
      MrJiabao: {
        link: "https://bornforthis.cn",
        icon: '<svg width="100%" height="100%" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Layer-2" serif:id="Layer 2" transform="matrix(1.4026,0,0,1.4026,-203.526,-204.224)"><g transform="matrix(0,-1,-1,0,501.589,155.604)"><path d="M-346.482,-346.482C-537.84,-346.482 -692.964,-191.356 -692.964,0C-692.964,191.356 -537.84,346.482 -346.482,346.482C-155.125,346.482 0,191.356 0,0C0,-191.356 -155.125,-346.482 -346.482,-346.482" style="fill:rgb(255,248,0);fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,501.589,838.569)"><path d="M0,-672.965C-185.537,-672.965 -336.482,-522.02 -336.482,-336.483C-336.482,-150.945 -185.537,0 0,0C185.537,0 336.482,-150.945 336.482,-336.483C336.482,-522.02 185.537,-672.965 0,-672.965M0,20C-48.121,20 -94.807,10.573 -138.762,-8.019C-181.213,-25.974 -219.335,-51.676 -252.071,-84.411C-284.807,-117.147 -310.509,-155.27 -328.464,-197.72C-347.056,-241.676 -356.482,-288.362 -356.482,-336.483C-356.482,-384.603 -347.056,-431.289 -328.464,-475.245C-310.509,-517.695 -284.807,-555.818 -252.071,-588.554C-219.335,-621.289 -181.213,-646.991 -138.762,-664.947C-94.807,-683.538 -48.121,-692.965 0,-692.965C48.12,-692.965 94.807,-683.538 138.762,-664.947C181.213,-646.991 219.335,-621.289 252.071,-588.554C284.807,-555.818 310.509,-517.695 328.464,-475.245C347.056,-431.289 356.482,-384.603 356.482,-336.483C356.482,-288.362 347.056,-241.676 328.464,-197.72C310.509,-155.27 284.807,-117.147 252.071,-84.411C219.335,-51.676 181.213,-25.974 138.762,-8.019C94.807,10.573 48.12,20 0,20" style="fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,367.718,410.379)"><path d="M0,-36.841L37.819,-36.841L33.188,0.769L-4.623,0.844L0,-36.841ZM-40.716,68.511L-12.924,68.511L-8.008,28.438L29.781,28.438L24.886,68.187L53.001,68.187L57.822,28.438L92.427,28.438L95.659,0.646L61.184,0.714L65.738,-36.841L101.153,-36.841L104.384,-64.633L69.1,-64.564L74.007,-105.029L46.215,-105.029L41.226,-64.509L3.385,-64.434L8.405,-105.352L-19.71,-105.352L-24.661,-64.379L-59.783,-64.31L-63.338,-36.841L-27.988,-36.841L-32.547,0.898L-68.509,0.969L-72.063,28.438L-35.875,28.438L-40.716,68.511Z" style="fill:rgb(5,5,5);fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,711.06,323.151)"><path d="M0,154.223L-2.723,119.566L-111.149,85.404L-9.654,35.152L-12.625,0L-143.825,68.571L-140.607,108.179L0,154.223Z" style="fill:rgb(5,5,5);fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,659.86,639.05)"><path d="M0,-10.069C-4.68,-0.523 -14.224,5.839 -27.699,5.278C-41.175,4.716 -106.493,-4.08 -124.461,-4.641C-142.429,-5.203 -151.6,12.203 -163.952,25.679C-173.123,2.846 -180.609,-7.823 -192.775,-11.566C-204.94,-15.309 -266.328,-20.549 -283.36,-22.608C-300.392,-24.667 -306.755,-26.351 -312.744,-38.517C-318.733,-50.683 -315.177,-70.521 -315.177,-70.521L-349.24,-74.452C-349.24,-74.452 -351.861,-60.415 -351.486,-38.33C-351.112,-16.245 -348.117,-1.834 -329.775,6.402C-311.434,14.637 -258.092,20.064 -224.965,22.497C-191.837,24.931 -187.533,29.61 -184.351,37.283C-181.169,44.955 -184.675,60.199 -184.675,60.199C-184.675,60.199 -177.436,61.216 -150.292,64.383C-149.274,46.513 -147.351,41.989 -141.131,36.899C-134.911,31.809 -124.505,33.618 -93.063,36.897C-61.62,40.176 -37.417,46.057 -10.159,45.152C17.099,44.246 26.485,27.846 32.479,10.202C38.474,-7.441 39.154,-31.647 39.154,-31.647L5.45,-35.266C5.45,-35.266 4.68,-19.615 0,-10.069" style="fill:rgb(5,5,5);fill-rule:nonzero;"/></g></g></svg>',
      },
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "编程一对一教学",

      displayFooter: true,

      blog: {
        name: "黄家宝",
        description: "一个前端开发者",
        intro: "/intro.html",
      },

      // page meta
      // metaLocales: {
      //   editLink: "在 GitHub 上编辑此页",
      // },
    },


  },

  encrypt: {
    config: {
      "/1v1/88-Simple-swimming-leech/": ["aiyc", "syq"],
      "/column/py/Projects/": ["aiyc"],
      "/column/py/Projects/03-django-web": ["aiyc", "xxy"],
      "/column/py/basequestion/hw_word_game.html": ["aiyc"],
      "/column/py/NoteBook/": ["aiyc", "xxy", "yxf"],
      "/letter/2024/12-gift": ["aiyc", "hr", "hjr", "love", "true"],
      "/letter/2024/importance.html": "aiyc",
      "/letter/2024/one-is-all": ["aiyc", "kjz", "zyq", "tcf", "miss"],
      "/letter/book-write/": "aiyc1",
      "/letter/2023/05": "aiyccc",
      "/1v1/60-wudi/": ["aiyc", "wd"],
      "/1v1/70-WuYue/": ["aiyc", "wy"],
      "/1v1/41-ZhengHaoyuan/HomeWork/": ["aiyc", "zhy"],
      "/1v1/54-BananaYuShu/": ["aiyc", "ysys"],
      "/1v1/57-Ren-Xinxing-gatech-edu-USA/": ["aiyc"],
      "/1v1/41-ZhengHaoyuan/Lab/Answer": ["aiyc", "zhy"],
      "/1v1/02-yuebao/": ["xsxsxsxsxs", "cscs"],
      "/1v1/36-Ricardo/Project-B-two.html": ["aiyc"],
      "/1v1/36-Ricardo/Project-A": ["aiyc"],
      "/blog/2022/11month/02": ["scscsdwdwsxsaxw"],
      "/column/ChatGPT/": ["aiyc", "chatgpt", "ai", "lqx"],
      "/column/Basic-course-of-artificial-intelligence/": ["aiyc", "cava", "lxj"],
      "/column/data_analysis/": ["aiyc", "cava", "lqx"],
      "/Vpn-clash-win-mac/": ["tz", "aiyc", "neibu", "dl"],
      "/column/ChatGPT-Midjourney/StableDiffusion/01": ["aiyc", "chagpt3", "cjx", "yxxz", "lxy", "biy", "wqe", "xym", "ai", "kai", "lqx", "zhy", "gtq"],
      "/1v1/40-yushu/": ["aiyc", "ys"],
      "/1v1/33-chenyaoyao/": ["cyy", "aiyc"],
      "/1v1/28-GaoTianQi/": ["aiyc", "gtq"],
      "/1v1/28-GaoTianQi/05-All-Question.html": ["aiyc", "gtq", "xym"],
      "/1v1/04-TommyTian/": ["aiyc", "tommy"],
      "/1v1/27-111923/Answer/": ["aiyc", "lzjs", "Bloch", "bloch"],
      "/company/": ["aiyc", "company", "kai"],
      "/password": "aiycpw123",
      "/letter/2023/like": ["ttt2", "like"],
      "/column/Probability-theory/": ["aiyc", "gll"],
      "/letter/2023/heart": ["ttt1", "heart"],
      "/letter/life/": ["aiyc", "hr", "love"],
      "/letter/life/Wedding-photos": ["aiyc", "hr", "love", "yj"],
      "/letter/life/change": ["aiyc", "hr", "love", "yj"],
      "/letter/life/mv-change": ["aiyc", "hr", "love", "qy"],
      "/1v1/18-Jason/01": ["aiyc", "jason"],
      "/1v1/20-Frank/answer/": ["aiyc", "frank", "Frank"],
      "/1v1/06-KAI/": ["kai", "aiyc"],
      "/column/An-introductory-programming-class-that-anyone-can-learn/detail/": ["123123", "aiyc"],
      "/1v1/07-AJuN/": ["aiyclosshwhwhwshxw", "aiyc"],
      "/column/TensorFlow/零基础实战机器学习/": ["123123a", "aiyc"],
      "/column/Programmingthinking/": ["123123a", "aiyc"],
      "/1v1/09-liujiahui/": ["123123liujiahui", "aiyc"],
      "/1v1/79-SuKungran/": ["aiyc", "sgr"]
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    search: {
      maxSuggestions: 32,
      hotKeys: [],
      locales: {
        "/": {
          placeholder: "Search",
        },
      }
    },
    blog: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
