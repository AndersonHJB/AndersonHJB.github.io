import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar.js";
import { zhSidebar } from "./sidebar.js";
// <meta name="keywords" content="一对一辅导编程,编程1v1,CS辅导,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,菜鸟教程,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,留学生CS辅导,ChatGPT代注册">
// <meta name="description" content="Python一对一辅导,编程1v1,Java一对一辅导,一对一教学辅导,CS辅导,面试辅导,爬虫一对一教学,菜鸟教程,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学,留学生CS辅导,ChatGPT代注册">   
// export default hopeTheme({
const theme = hopeTheme({
  // rtl: true,
  // hotReload: true,
  // fullscreen: true,
  toc: {
    levels: [1, 6]
  },
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },
  hostname: "https://bornforthis.cn/",

  author: {
    name: "AndersonHJB",
    url: "https://bornforthis.cn/",
    email: "aiyuechuang@gmail.com"
  },

  logo: "/aiyc.svg",
  // navTitle: "AI悦创-Python一对一辅导",
  // navTitle: false,
  changelog: false,
  editLink: false,
  lastUpdated: false,
  contributors: false,

  
  docsBranch: "main",
  docsDir: "docs",
  docsRepo: "AndersonHJB/bornforthis.cn",
  repo: "AndersonHJB/bornforthis.cn",

  darkmode: "switch",

  displayFooter: true,
  // copyright: 'Copyright©2023 Bornforthis',

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "PageView", "Word"],

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
      Instagram: "https://www.instagram.com/coding1v1/",
      Wechat: "/wechat.JPG",
      MrJiabao: {
        link: "https://bornforthis.cn",
        icon: '<svg width="100%" height="100%" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Layer-2" serif:id="Layer 2" transform="matrix(1.4026,0,0,1.4026,-203.526,-204.224)"><g transform="matrix(0,-1,-1,0,501.589,155.604)"><path d="M-346.482,-346.482C-537.84,-346.482 -692.964,-191.356 -692.964,0C-692.964,191.356 -537.84,346.482 -346.482,346.482C-155.125,346.482 0,191.356 0,0C0,-191.356 -155.125,-346.482 -346.482,-346.482" style="fill:rgb(255,248,0);fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,501.589,838.569)"><path d="M0,-672.965C-185.537,-672.965 -336.482,-522.02 -336.482,-336.483C-336.482,-150.945 -185.537,0 0,0C185.537,0 336.482,-150.945 336.482,-336.483C336.482,-522.02 185.537,-672.965 0,-672.965M0,20C-48.121,20 -94.807,10.573 -138.762,-8.019C-181.213,-25.974 -219.335,-51.676 -252.071,-84.411C-284.807,-117.147 -310.509,-155.27 -328.464,-197.72C-347.056,-241.676 -356.482,-288.362 -356.482,-336.483C-356.482,-384.603 -347.056,-431.289 -328.464,-475.245C-310.509,-517.695 -284.807,-555.818 -252.071,-588.554C-219.335,-621.289 -181.213,-646.991 -138.762,-664.947C-94.807,-683.538 -48.121,-692.965 0,-692.965C48.12,-692.965 94.807,-683.538 138.762,-664.947C181.213,-646.991 219.335,-621.289 252.071,-588.554C284.807,-555.818 310.509,-517.695 328.464,-475.245C347.056,-431.289 356.482,-384.603 356.482,-336.483C356.482,-288.362 347.056,-241.676 328.464,-197.72C310.509,-155.27 284.807,-117.147 252.071,-84.411C219.335,-51.676 181.213,-25.974 138.762,-8.019C94.807,10.573 48.12,20 0,20" style="fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,367.718,410.379)"><path d="M0,-36.841L37.819,-36.841L33.188,0.769L-4.623,0.844L0,-36.841ZM-40.716,68.511L-12.924,68.511L-8.008,28.438L29.781,28.438L24.886,68.187L53.001,68.187L57.822,28.438L92.427,28.438L95.659,0.646L61.184,0.714L65.738,-36.841L101.153,-36.841L104.384,-64.633L69.1,-64.564L74.007,-105.029L46.215,-105.029L41.226,-64.509L3.385,-64.434L8.405,-105.352L-19.71,-105.352L-24.661,-64.379L-59.783,-64.31L-63.338,-36.841L-27.988,-36.841L-32.547,0.898L-68.509,0.969L-72.063,28.438L-35.875,28.438L-40.716,68.511Z" style="fill:rgb(5,5,5);fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,711.06,323.151)"><path d="M0,154.223L-2.723,119.566L-111.149,85.404L-9.654,35.152L-12.625,0L-143.825,68.571L-140.607,108.179L0,154.223Z" style="fill:rgb(5,5,5);fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,659.86,639.05)"><path d="M0,-10.069C-4.68,-0.523 -14.224,5.839 -27.699,5.278C-41.175,4.716 -106.493,-4.08 -124.461,-4.641C-142.429,-5.203 -151.6,12.203 -163.952,25.679C-173.123,2.846 -180.609,-7.823 -192.775,-11.566C-204.94,-15.309 -266.328,-20.549 -283.36,-22.608C-300.392,-24.667 -306.755,-26.351 -312.744,-38.517C-318.733,-50.683 -315.177,-70.521 -315.177,-70.521L-349.24,-74.452C-349.24,-74.452 -351.861,-60.415 -351.486,-38.33C-351.112,-16.245 -348.117,-1.834 -329.775,6.402C-311.434,14.637 -258.092,20.064 -224.965,22.497C-191.837,24.931 -187.533,29.61 -184.351,37.283C-181.169,44.955 -184.675,60.199 -184.675,60.199C-184.675,60.199 -177.436,61.216 -150.292,64.383C-149.274,46.513 -147.351,41.989 -141.131,36.899C-134.911,31.809 -124.505,33.618 -93.063,36.897C-61.62,40.176 -37.417,46.057 -10.159,45.152C17.099,44.246 26.485,27.846 32.479,10.202C38.474,-7.441 39.154,-31.647 39.154,-31.647L5.45,-35.266C5.45,-35.266 4.68,-19.615 0,-10.069" style="fill:rgb(5,5,5);fill-rule:nonzero;"/></g></g></svg>',
      },
    },
  },

  footer: '长期招收编程一对一学员!微信:Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35030502000172" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="/beian.png" style="float:left;"/>闽公网安备 35030502000172号</a>',

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,
      changelog: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,

      footer: '长期招收编程一对一学员!微信:Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35030502000172" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="/beian.png" style="float:left;"/>闽公网安备 35030502000172号</a>',

      displayFooter: true,

    },

  },

  encrypt: {
    config: {
      "/column/Python-Programming-Course/P15-OpenClaw/openclaw-core-principles-practice/": ["aiyc", "oc"],
      "/column/Python-Programming-Course/P17-ai-course-resources/": ["aiyc"],
      "/column/Python-Programming-Course/python-exam-crash-course/": ["aiyc", "liang-20052016"],
      "/VIP": "aiyccc",
      // "/SOC": "aiyccc",
      "/intro": "aiyccc",
      "/Books/05-Liaising-with-the-publisher/": "zl",
      "/RP": "RPRP",
      "/Vpn-clash-win-mac/": "titi2025",
      "/column/Python-Programming-Course/P02-1-Python-Starter-Journey/": ["aiyc", "tcf"],
      "/column/Python-Programming-Course/P01-Programming-thinking/": ["aiyc", "tcf"],
      // "/column/Python-Programming-Course/P06-data_analysis/": ["aiyc", "tcf"],
      "/column/Python-Programming-Course/P03-Assignment/Assignment1-Solution.html": ["aiyc"],
      "/column/Python-Programming-Course/P03-Assignment/Assignment2-Solution.html": ["aiyc"],
      "/column/Python-Programming-Course/P06-data_analysis/": "aiyc",
      "/letter/2024/12-gift": ["aiyc", "hr", "hjr", "love", "true"],
      "/letter/2024/importance.html": "aiyc",
      "/letter/2024/one-is-all": ["aiyc", "kjz", "zyq", "tcf", "miss"],
      "/letter/book-write/": ["aiyc", "tcf"],
      "/letter/2023/05": "aiyccc",
      "/1v1/02-yuebao/": ["xsxsxsxsxs", "cscs"],
      // "/Vpn-clash-win-mac/": ["tztz", "aiyc", "neibu", "dl"],
      "/vpn.html": ['tztz', 'aiyc'],
      "/Yuechuangs-Family-EducationHandbook/Private/": ["aiyc", "hjrb", "rb"],
      "/company/": ["aiyc", "company", "kai"],
      "/password": "aiycpw123",
      "/letter/2023/like": ["ttt2", "like"],
      "/column/Probability-theory/": ["aiyc", "gll"],
      "/letter/2023/heart": ["ttt1", "heart"],
      "/letter/life/": ["aiyc", "hr", "love"],
      "/letter/life/Wedding-photos": ["aiyc", "hr", "love", "yj"],
      "/letter/life/change": ["aiyc", "hr", "love", "yj"],
      "/letter/life/mv-change": ["aiyc", "hr", "love", "qy"],
      "/column/Programmingthinking/": ["aiyc"],
      "/1v1/18-Jason/01": ["aiyc", "jason"],
      "/column/An-introductory-programming-class-that-anyone-can-learn/detail/": ["123123", "aiyc"],
    },
  },
  markdown: {
    figure: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    mark: false,
    codeTabs: true,
    tabs: true,
    math: true,
    hint: true,
    alert: false,
    chartjs: false,
    echarts: false,
    mermaid: false,
    vuePlayground: false,
    sub: false,
    spoiler: false,
    sup: false,
    tasklist: true,
    include: false,
    attrs: false,
    footnote: true,
    align: true,
    flowchart: false,
    gfm: false,
    preview: true,
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
    highlighter: {
      type: "shiki",
      collapsedLines: 15,
      // lineNumbers: 1,
      notationDiff: true,  // [!code --]
      notationFocus: true, // [!code focus:3]
      highlightLines: true,
      notationHighlight: true,
      notationWordHighlight: true,
        langs: ['sql', 'python', 'java', 'javascript', 'c', 'c#', 'c++', 'html', 'css',
          'bash', 'rust', 'php', 'r', 'cmd', 'yaml', 'markdown', 'http', 'cmake', 'matlab',
          'plsql', 'ini', "fortran-free-form", "fortran-fixed-form", 'go', 'vue', 'tex', 'text', 'csv',
          'makefile', 'typescript',
        ],
      langAlias: {
        ["excel"]: "bash",
        ["url"]: "bash",
      },
    //   // theme: "monokai",
    // //   // themes: {
    // //   //   light: "monokai",
    // //   //   dark: "one-dark-pro",
    // //   // },
    },
    vPre: true,
  },
  

  plugins: {
    icon: {
      prefix: "iconfont icon-",
      assets: [
        // "https://bornforthis.cn/icon/iconfont.css",
        "/icon/iconfont.css",
        // "//at.alicdn.com/t/c/font_3426793_89l82yqh1lh.css",
      ],
    },
    git: false,
    watermark: {
      enabled: true,
      watermarkOptions: {
        content: "AI悦创-Python一对一辅导 bornforthis.cn"
      },
    },
    notice: [
      {
        path: "/",
        title: "通知",
        content: "建议开启：梯子🪜(VPN)来访问本网站，会加速图片加载速度！联系我购买《编程启蒙：思维与代码》➕好评，赠送全球上网 1 年！",
        showOnce: true,
        actions: [
          {
            text: "查看",
            link: "/Notice.md",
            type: "primary",
          },
          {
            text: "Why Blog?",
            link: "/aboutblog.md",
            type: "default",
          },
        ],
      },
    ],
    docsearch: {
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      appId: "ACD1S100IT",
      apiKey: "409311158985cfee5c0a535e5998ddd2",
      // apiKey: "0e67ac1ea01b068986ff028b1e469bf7",
      indexName: "bornforthis",
      // placeholder: "搜索",
      locales: {
        "/": {
          placeholder: '搜索文档',
          maxResultsPerGroup: 10,
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },

    copyCode: {
      showInMobile: true,
      inline: true,
    },
    feed: {
      count: 100,
      rssOutputFilename: "rss.xml",
      image: "/aiyc.png",
      icon: "python",
      rss: true,
      atom: true,
      json: true,
      channel: {
        title: "AI悦创|黄家宝·编程一对一教学订阅频道",
        link: "https://bornforthis.cn/rss.xml",
        icon: "/aiyc.svg",
        description: "Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学",

      },

    },

    blog: true,
    comment: {
      provider: "Waline",
      serverURL: "https://waline.bornforthis.cn/",
      reaction: [
        '/Waline/tieba/tieba_agree.png',
        '/Waline/tieba/tieba_sunglasses.png',
        '/Waline/tieba/tieba_pick_nose.png',
        '/Waline/tieba/tieba_awkward.png',
        '/Waline/tieba/1f613.png',
        '/Waline/tieba/1f60f.png',
      ],
      comment: true, // 评论数统计
      pageview: true, // 浏览量统计
      noCopyright: true,
      dark: "auto",
    },

    components: {
      components: [
        "VPCard",
        "PDF",
      ],
    },

    copyright: {
      author: "AI悦创",
      global: true,
      triggerLength: 1000,
      disableCopy: false,
      disableSelection: false,
    },
  },
});

export default (app: Parameters<typeof theme>[0]) => {
  // Theme Hope rc.107 enables the git plugin during builds even when
  // `plugins.git` is false. Register an inert plugin with the same name first
  // so the theme cannot register and execute @vuepress/plugin-git.
  app.use({ name: "@vuepress/plugin-git" });

  return theme(app);
};