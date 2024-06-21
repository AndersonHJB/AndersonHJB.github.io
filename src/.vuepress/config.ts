import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "编程一对一辅导",
      description: "Python一对一辅导,编程1v1,Java一对一辅导,一对一教学辅导,CS辅导,面试辅导,爬虫一对一教学,菜鸟教程,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学,留学生CS辅导,ChatGPT代注册",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
