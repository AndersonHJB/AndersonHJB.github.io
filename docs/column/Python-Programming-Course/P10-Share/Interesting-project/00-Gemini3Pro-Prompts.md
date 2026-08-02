---
title: 00-Gemini3 Prompt
icon: gemini-ai
date: 2025-12-02 17:26:44
author: AI悦创
isOriginal: true
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

## Group 1

::: tabs

@tab P01-贾维斯

- 在线体验：[https://gemini.bornforthis.cn/jarvis-holographic-ui/](https://gemini.bornforthis.cn/jarvis-holographic-ui/)；
- Google AI 项目链接：[https://ai.studio/apps/drive/18Qn9o31ppMAO0xhiE5IX3JqFjNf_pHdv?fullscreenApplet=true](https://ai.studio/apps/drive/18Qn9o31ppMAO0xhiE5IX3JqFjNf_pHdv?fullscreenApplet=true)；
- Github 源代码分享：[https://github.com/AndersonHJB/jarvis-holographic-ui](https://github.com/AndersonHJB/jarvis-holographic-ui)；

```markdown
### 角色设定：世界级创意前端工程师
- 核心技能：精通 WebGL（Three.js/@react-three/fiber）、计算机视觉（MediaPipe）、赛博朋克 UI 设计
- 技术栈专长：React + TypeScript + Vite、@react-three/postprocessing、@mediapipe/tasks-vision、Tailwind CSS
- 任务目标：开发单文件 React 应用，复刻钢铁侠 JARVIS 风格全息 HUD 交互界面（融合摄像头实景、3D 全息地球、手势交互）

### 详细功能与技术要求
#### 1. 视觉风格（Visuals）
- 背景：全屏实时摄像头画面（保留色彩，降低亮度/提高对比度）
- UI 主题：青色（#00FFFF）为主色调，包含扫描线、发光文本、虚线边框、动态数据流、跳动进度条
- HUD 布局：
  - 左上角：核心系统状态 + 随机滚动十六进制代码
  - 右上角："贾维斯 (J.A.R.V.I.S)" 大号标题 + 当前时间 + 系统脉冲动画
  - 左下角：手部追踪状态指示器
  - 右侧悬浮窗：可拖拽"地理情报分析面板"（显示当前地球面向大洲及虚构扫描数据）

#### 2. 3D 全息地球（Three.js）
- 位置：屏幕左侧（x = -1.0）
- 材质：TextureLoader 加载地球镜面贴图，AdditiveBlending 加法混合（陆地发光、海洋透明）
- 装饰：外层包裹旋转线框球体 + 行星环
- 状态反馈：根据旋转角度实时计算面向大洲（美洲/太平洋/亚洲/欧洲/非洲），回调至 UI 层

#### 3. 交互逻辑（核心算法）
- 手部追踪：基于 MediaPipe 实现双手骨骼识别
- 左半屏交互（控制地球）：
  - 旋转：左手手掌 X/Y 轴移动控制
  - 缩放：左手拇指与食指距离检测（张开=放大，捏合=缩小）
- 右半屏交互（控制悬浮窗）：
  - 拖拽：右手捏合状态（拇指食指距离<阈值）时，面板跟随右手位置移动；松开停止

#### 4. 代码结构与优化
- 性能优化：高频计算（MediaPipe 循环、3D 旋转）使用 useRef + requestAnimationFrame，避免频繁重渲染
- 骨骼绘制：2D Canvas 层实时绘制青色发光手部骨骼连线
- 界面语言：全部文本使用中文
```



:::











::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)