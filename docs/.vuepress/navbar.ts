import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // "/",
  // { 
  //   text: "关于悦创",
  //   icon: "people",
  //   link: "/intro",
  // },
  { 
    text: "Memoirs",
    icon: "blog",
    link: "/Memoirs.html",
  },
  { 
    text: "Column",
    icon: "columnszhuanlan",
    link: "/column",
    // children: [
      // { 
        // text: "IT 文档主页",
        // link: "/column.md",
        // children: [
          // "/column.md",
          // { text: "私教回放", icon: "biaoshilei_huifang", link: "/column/playback/"},
          // { text: "Python 合集", icon: "python", link: "/column/py/Python_tutorial/"},
          // { text: "Python 私教", icon: "python", link: "/column/py/basequestion/"},
          // { text: "Web 专栏", icon: "web", link: "/column/web/catalogue.html"},
          // { text: "Python 办公自动化", icon: "python", link: "/column/pyauto"},
          // { text: "题解", icon: "biancheng-01", link: "/column/tijie"},
          // { text: "公开课资料", icon: "blog", link: "/column/pyauto/gkk/"},
          // { text: "编程思维", icon: "siwei", link: "/column/Programmingthinking/"},
          // { text: "零基础学习机器学习", icon: "_rengongzhineng", link: "/column/TensorFlow/零基础实战机器学习/"},
          // { text: "数据分析", icon: "zhuzhuangtu", link: "/column/data_analysis/week1/01"},
          // { text: "数据结构与算法", icon: "shujujiegou-01", link: "/column/data-structure/week1/01"},
          // { text: "Python 60 Day", icon: "python", link: "/column/python60/01"},
          // { text: "AI悦创·天池计划", icon: "dianchi1", link: "/column/tianchi/Python/Python01"},
          // { text: "Java体系课", icon: "java", link: "/column/Java"},
          // { text: "AI悦创·1v1", icon: "1v1-4", link: "/1v1/"},
          // { text: "摄影入门课", icon: "cameraadd", link: "/column/摄影入门课/"},
          // { text: "Python核心技术与实战", icon: "python", link: "/column/Python-core-technology-and-practice/01"},
          // { text: "人工智能基础课", icon: "_rengongzhineng", link: "/column/Basic-course-of-artificial-intelligence"},
        // ]
      // },
      // { 
      //   text: "程序员的私房菜",
      //   children: [
      //     { text: "私房菜", link: "/column/cookdinner/01-yogurt"},
      //   ]
      // },
      // {
        // text: "艺术",
        // children: [
          // { text: "摄影", icon: "cameraadd", link: "/column/photography/"},
          // { text: "五哥摄影课堂", icon: "cameraadd", link: "/column/Fifth_brother_photography_class/"},
          // { text: "PPT 教程", icon: "PPT", link: "/column/PPT/"},
        // ],
      // },
      // {
      //   text: "得到",
      //   children: [
      //     { text: "薛兆丰的经济学课", icon: "blog", link: "/dedao/01-Xue-Zhaofengs-economics-class/"},
      //   ]
      // }
    // ]
  },
  { 
    text: "Community", 
    icon: "shequ-jihuo", 
    children: [
      {
        text: "在线平台",
        children: [
          // { text: "Python 在线平台", icon: "edit", link: "https://py.bornforthis.cn/" },
          { text: "Python Online", icon: "python", link: "https://py.bornforthis.cn/" },
          { text: "Data Structure", icon: "discover", link: "https://huangjiabaoaiyc.gitee.io/visualgo/"},
          // { text: "Markdown Online", icon: "markdown", link: "https://bornforthis.cn/markdown-editor/ "},
          { text: "Json Online", icon: "json", link: "https://bornforthis.cn/json/"},
          { text: "m3u8 Play", icon: "preview", link: "https://bornforthis.cn/m3u8"},
          { text: "Decimal online conversion", icon: "tool", link: "https://bornforthis.cn/tool/"},
          { text: "HTML Online", icon: "web", link: "https://bornforthis.cn/html_online/"},
          // { text: "格式在线转换", icon: "web", link: "https://convertio.co/zh/"},
          // { text: "在线转换2", icon: "web", link: "https://www.aconvert.com/cn/"},
          { text: "Python", icon: "python", link: "https://bornforthis.cn/python/#/"},
          // { text: "Python", icon: "python", link: "https://bornforthis.cn/python/index.html#/"},
          // { text: "fonts", link: "https://fontshub.pro/"},
          // { text: "iloveimg", icon: "-love", link: "https://www.iloveimg.com/zh-cn"},
        ]
      },
      // {
      //   text: "文章平台",
      //   children: [
      //     { text: "CSDN", link: "https://aiyuechuang.blog.csdn.net/"},
      //     { text: "知乎", link: "https://www.zhihu.com/people/aiyuechuang"},
      //     { text: "掘金", link: "https://juejin.cn/user/2305051222344061"},
      //     { text: "思否", link: "https://segmentfault.com/u/aiyc"},
      //     { text: "51CTO博客", link: "https://blog.51cto.com/aiyc"},
      //     { text: "medium", link: "https://medium.com/@aiyuechuang"},
      //     { text: "medium", link: "https://medium.bornforthis.cn"},
      //     { text: "腾讯云社区", link: "https://cloud.tencent.com/developer/user/7111610"},
      //     { text: "阿里云社区", link: "https://developer.aliyun.com/profile/expert/a65od3nwohg4i"},
      //     { text: "博客园", link: "https://www.cnblogs.com/bornforthis/"},
      //     { text: "简书", link: "https://www.jianshu.com/u/7def888b8c12"},
      //     { text: "墨天轮", link: "https://www.modb.pro/u/482441"},
          // { text: "留言", link: "https://comment.bornforthis.cn/"},
          // { text: "悦兮小栈", link: "https://comment.blovey.art/"},
          // { text: "评论管理", link: "https://comment.bornforthis.cn/ui"},
          // { text: "Stackoverflow", link: "https://stackoverflow.com/users/19551173/ai%e6%82%a6%e5%88%9b"},
          // { text: "Mdnice", link: "https://mdnice.com/user/417729638227"},
          // { text: "AI悦创随笔1", link: "/posts/12.html"},
          // { text: "随笔2", link: "/essays"},
          // { text: "摄影", icon: "cameraadd", link: "https://huangjiabaoaiyc.gitee.io/img/"},
          // { text: "Search", link: "https://crawler.algolia.com/admin/crawlers"},
          // { text: "领英", link: "https://www.linkedin.com/in/bornforthis/"},
          // { text: "AndersonHJB.github.io", icon: "github", link: "https://github.com/AndersonHJB/AndersonHJB.github.io/issues"},
          // { text: "1v1", icon: "github", link: "https://github.com/AndersonHJB/1v1/issues"},
          // { text: "AI悦创·谷歌分析", icon: "google", link: "https://analytics.google.com/analytics/web/#/p345911954/reports/intelligenthome"},
          // { text: "AI悦创·百度联盟", icon: "baidu-fill", link: "https://union.baidu.com/bqt/#/"},
          // { text: "AI悦创·learnku", icon: "blog", link: "https://learnku.com/blog/AndersonHJB"},

          // { text: "随笔", children: [{ text: "AI悦创随笔1", link: "https://bornforthis.cn/posts/12.html"}, { text: "随笔2", link: "/essays"}]},
        ]
      },
      // { 
      //   text: "Git",
      //   children: [
      //     { text: "Github", icon: "github", link: "https://github.com/AndersonHJB"},
      //     { text: "Gitee", icon: "gitee", link: "https://gitee.com/huangjiabaoaiyc"},
      //     { text: "vercel", icon: "gitee", link: "https://vercel.com/"},
      //   ]
      // },
      
    // ]
  // },
  // {
  //   text: "私教计划",
  //   icon: "1v1-4",
  //   link: "https://web.online.bornforthis.cn/Tester/1554.html",
  // },
  // {
  //   text: "Course",
  //   icon: "banjiketang",
  //   children: [
  //     { text: "网易云课堂主页", icon: "zhuanjiaketang-jihuo", link: "https://study.163.com/provider/480000002277025/course.htm"},
  //     // { text: "AI悦创·讲师主页", icon: "view", link: "https://m.study.163.com/user/1144240044.htm"},
  //     { text: "51CTO", icon: "zhuanjiaketang-jihuo", link: "https://edu.51cto.com/lecturer/13952552.html"},
  //     // { text: "录课悲惨经历", icon: "zhuanjiaketang-jihuo", link: "/Record_the_class"}
  //   ]
  // },
  // { 
  //   text: "开源/订阅",
  //   icon: "jiyukaiyuanjianrongkaiyuan",
  //   children: [
  //     { text: "开源库", icon: "python", link: "https://pypi.org/user/Bornforthis/" },
  //     { text: "HTML模版/插件", icon: "web1", link: "https://github.com/AndersonHJB/bootstrapmb" },
  //     { text: "Feed Json", icon: "rss", link: "https://bornforthis.cn/feed.json" },
  //     { text: "Feed Atom", icon: "rss", link: "https://bornforthis.cn/atom.xml" },
  //     { text: "Feed Rss", icon: "rss", link: "https://bornforthis.cn/rss.xml" },
  //   ]
  // },
  { 
    text: "Friendship",
    icon: "pengyouquan3", 
    children: [
      {
        text: "开发本站", 
        // icon: "diagram",
        // link: "https://bornforthis.cn",
        children: [
          // { text: "Vue", icon: "vuejs", link: "https://v2.vuepress.vuejs.org/zh/"},
          // { text: "hope主题", icon: "vue", link: "https://vuepress-theme-hope.github.io/v2/zh/"},
          // { text: "Waline", icon: "waline", link: "https://waline.js.org/"},
          // { text: "iconfont", link: "https://www.iconfont.cn/"},
          // { text: "Leancloud", link: "https://leancloud.app/"},
          // { text: "变更日志", icon: "time", link: "/changelog"},
          // { text: "Vercel", link: "https://vercel.com/dashboard"},
          // { text: "turingapi", link: "http://www.turingapi.com/"},
          { text: "1v1官网", icon: "1v1-4", link: "https://www.class1v1.com/"},
          { text: "友情链接", icon: "pengyoufill", link: "/friendship-link"},
          { text: "文章涉及资料", icon: "github", link: "https://github.com/AndersonHJB/BornforthisData"},
          // { text: "QQ开放平台", icon: "QQ1", link: "https://open.tencent.com/"},
          // { text: "微信公众号", icon: "QQ1", link: "/WechatShare/index.html"},
        ],
      },
      { 
        text: "审美",
        icon: "eye",
        children: [
          { text: "Unsplash", icon: "pic", link: "https://unsplash.com/"},
          { text: "Dribbble", icon: "emoji", link: "https://dribbble.com/"},
          { text: "openprocessing", icon: "VIsheji", link: "https://openprocessing.org/"},
          { text: "dribbble", icon: "chuangyi", link: "https://dribbble.com/"},
        ]
      },
      { 
        text: "开源/订阅",
        icon: "jiyukaiyuanjianrongkaiyuan",
        children: [
          { text: "Open library", icon: "python", link: "https://pypi.org/user/Bornforthis/" },
          { text: "HTML Template", icon: "web1", link: "https://github.com/AndersonHJB/bootstrapmb" },
          { text: "Feed Json", icon: "rss", link: "https://bornforthis.cn/feed.json" },
          { text: "Feed Atom", icon: "rss", link: "https://bornforthis.cn/atom.xml" },
          { text: "Feed Rss", icon: "rss", link: "https://bornforthis.cn/rss.xml" },
        ]
      },
      {
        text: "AI实验室",
        icon: "gemini-ai",
        link: "https://ai.bornforthis.cn/"
      }
      // { 
      //   text: "悦创视频平台", 
      //   icon: "play",
      //   children: [
      //     { text: "哔哩哔哩", link: "https://space.bilibili.com/405961705"},
      //     { text: "YouTube", link: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg"},
      //     { text: "抖音", link: "https://www.douyin.com/user/MS4wLjABAAAAXMiezc1TmBxz0zFxeqmWHo3JpceLXlMChTLU4cHFMCA"},
      //     { text: "西瓜视频", link: "https://www.ixigua.com/home/2049088928100061"},
      //     { text: "今日头条", link: "https://www.toutiao.com/c/user/token/MS4wLjABAAAA0lL5AB1qcqjHTRzZskVepIpHq_GlaDZqSs5DG1qjRpCBxyXEniSGIGiIIEFXrXme/?source=mine_home&log_from=1c726ddbc65f6_1655376345491&wid=1655376400664"},
      //     { text: "CSDN 视频", link: "https://blog.csdn.net/qq_33254766?type=video"},
      //     { text: "知乎视频", link: "https://www.zhihu.com/people/aiyuechuang/zvideos"},
      //     { text: "摄影课程", link: "https://list.youku.com/albumlist/show/id_68857050"},
      //   ]
      // },
    ],
  },
  // {
  //   text: "Now",
  //   icon: "plane", 
  //   link: "/Now",
  // },
  // {
  //   text: "好奇我最近做啥？",
  //   icon: "plane",
  //   children: [
  //     {
  //       text: "Now",
  //       icon: "plane", 
  //       link: "/Now.md",
  //     },
  //     {
  //       text: "Plan",
  //       icon: "plane", 
  //       link: "/plan",
  //     },
  //   ]
  // },
  
  
  // {
  //   text: "谷歌学术助手",
  //   icon: "chrome", 
  //   link: "/vpn",
  // },
  // "/portfolio"
]);
