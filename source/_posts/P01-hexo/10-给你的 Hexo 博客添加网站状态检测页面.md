---
title: 给你的 Hexo 博客添加网站状态检测页面
tags:
  - 春节开发
  - 网站活着吗？
  - SiteStatus
categories:
  - hexo
  - Hexo Bornforthis Theme
  - SiteStatus
description: "一个基于 sh 的在线状态面板|站点监测|状态检测 | \U0001F4FA An online status panel based on sh|site monitoring|status detection."
top_img: /img/posts/P01-hexo/10-给你的 Hexo 博客添加网站状态检测页面/10-给你的 Hexo 博客添加网站状态检测页面.png
cover: /img/posts/P01-hexo/10-给你的 Hexo 博客添加网站状态检测页面/10-给你的 Hexo 博客添加网站状态检测页面.webp
comments: true
toc: true
highlight_shrink: false
swiper_index: 1
top_group_index: 1
background: '#fff'
aside: true
ai:
  - "一个基于 sh 的在线状态面板|站点监测|状态检测 | \U0001F4FA An online status panel based on sh|site monitoring|status detection."
abbrlink: 9f0cfbb4
date: 2025-01-29 22:14:39
toc_number:
toc_style_simple:
aplayer:
---

你好，我是悦创。

**新年第一天上新功能！** 网站状态这个开源项目，话不多说先放开源项目[链接](https://github.com/AndersonHJB/SiteStatus)，后面逐步更新此文章。

先祝大家新年快乐：

✨🐍 **蛇年大吉，福运绵长！** 🐍✨  

在这充满生机的蛇年里，愿你如蛇般灵活敏锐，把握机遇，步步生财！愿好运缠绕如蛇般盘旋不散，健康如蜕变新生，万事顺遂，吉祥安康！🐍💰🎉  

祝愿新的一年里，事业蜿蜒向上，财源滚滚而来，家庭和睦美满，生活幸福安康！🐍🌿🎊  

**蛇年行大运，龙腾虎跃展宏图！** 🎇🎆

今天，我很开心。在我女儿满月的前一天，把这个页面整体完工和发布了！

> 2025-02-02 12:58:18 上线
> 效果：[https://blog.bornforthis.cn/sitestatus/](https://blog.bornforthis.cn/sitestatus/)

# 1. 部署 SiteStatus

项目链接：[https://github.com/AndersonHJB/SiteStatus](https://github.com/AndersonHJB/SiteStatus)

部署有两种方法：一种 GitHub、另一种服务器。

## 1.1 GitHub 部署

- Step 1: GitHub 的直接 fork 项目即可；
- Step 2: 修改 urls.cfg；
  - 如果使用的是 hexo 安知鱼主题 or 我的主题的，可以直接使用项目自带的: `/SiteStatus/RunScript/extract.sh` or `/SiteStatus/RunScript/extract.py` 脚本；
  - 把你的友情链接的 `link.yml` 的内容复制到：`/SiteStatus/RunScript/data.yml` 中，脚本会自动生成复合要求的 `url.cfg`；
  - 当然，你检查的只是自己的网站的话，手动写就行；
- Step 3: 打开 GitHub Pages 的部署；
- Step 4: 部署成功之后你会得到 logs/report.json，用链接获取。「例如：https://status.bornforthis.cn/logs/report.json」，后面会在 config.yml 配置用到。

## 1.2 服务器部署

流程和 GitHub 部署大体上是一致的：

- Step 1：抓去仓库：`git clone https://github.com/AndersonHJB/SiteStatus.git`；
- Step 2：修改 url.cfg (同样支持你用项目提供的脚本生成)；
- Step 3：设置定时运行 `/SiteStatus/RunScript/server.sh`；


# 2. 开始魔改

{% tabs sitestatus %}
<!-- tab 1. page -->

- **Path:** `/themes/anzhiyu/layout/page.pug`

```pug
extends includes/layout.pug

block content
  #page
    if top_img === false && !page.top_single
      h1.page-title= page.title
    case page.type
      when 'tags'
        include includes/page/tags.pug
      when 'link'
      ---snip---
        include includes/page/saysay.pug
      when 'sitestatus'
        include includes/page/sitestatus.pug
      ---snip---
      default
        include includes/page/default-page.pug

    if page.comments !== false && theme.comments && theme.comments.use
      - var commentsJsLoad = true
      !=partial('includes/third-party/comments/index', {}, {cache: true})
```

<!-- endtab -->
<!-- tab 2. sitestatus.css -->

- **Path:** `/source/static/css/sitestatus.css`

```css
body[data-type="sitestatus"] #web_bg {
    background: var(--anzhiyu-background);
}

body[data-type="sitestatus"] #page {
    border: 0;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    background: 0 0 !important;
}

body[data-type="sitestatus"] #page .page-title {
    display: none;
}

* {
    box-sizing: border-box;
}

/* 取消最大宽度限制，让整体宽度与顶部块保持一致，同时设置适当的顶部间距 */
.pageContainer {
    padding: 30px 50px;
    /* background-color: #fff; */
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    width: 100%;
    margin: 0px auto;
}

.headline {
    display: flex;
    align-items: center;
    justify-content: center;
}

.headline span {
    background-color: #f5f6f8;
    border-radius: 5px;
    padding: 6px;
    margin-left: 12px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
}

/* 使用自动适应的 grid 布局，间距减小 */
.reportContainer {
    margin: 30px auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
    align-items: stretch;
}

/* 改进卡片样式：缩小内边距和最小高度，使内容更紧凑 */
.statusContainer {
    border: 1px solid #ededed;
    border-radius: 5px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
}

/* 30天记录采用 grid 布局，每个格子间隙较小 */
.statusStreamContainer {
    display: grid;
    grid-template-columns: repeat(30, 1fr);
    gap: 2px;
    margin: 8px 0;
}

/* 调整状态条形样式：增加边框，确保轮廓清晰 */
.statusSquare {
    border-radius: 3px;
    height: 20px;
    border: 1px solid #ccc;
}

/* 样式微调 */
.statusTitle {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    margin: 0;

    /* ----------------- 新增：超长文本截断为省略号 ----------------- */
    white-space: nowrap;       /* 不换行 */
    overflow: hidden;          /* 超出隐藏 */
    text-overflow: ellipsis;   /* 超出显示省略号 */
    display: inline-block;     /* 对 text-overflow 生效需搭配 inline-block 或 block */
    max-width: 120px;          /* 设定一个最大宽度，根据需要调整 */
}

.statusHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
}

/* 链接符号样式 */
.statusLink {
    margin: 0 8px;
    text-decoration: none;
    font-size: 1.2rem;
}

.statusHeadline {
    color: #eee;
    background-color: #333;
    padding: 4px 8px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 700;
    margin-left: 8px;
}

.statusFooter {
    margin-top: 8px;
}

/* 新增统计数字样式 */
.statusCounts {
    text-align: right;
    color: #7c7c7c;
    font-size: 12px;
    margin-bottom: 4px;
}

.statusUptime {
    text-align: right;
    color: #7c7c7c;
    font-size: 12px;
}

.uptimeContainer {
    color: #999;
    display: flex;
    margin-top: 8px;
    font-size: 12px;
}

.uptimeContainer hr {
    border: none;
    border-top: 1px dashed #eee;
    width: 100%;
    margin: 10px;
}

.success {
    background-color: #4cae50;
    color: #fff;
}

.failure {
    background-color: #f44336;
    color: #fff;
}

.nodata {
    background-color: #f8f8f8;
    color: #ccc;
}

.partial {
    background-color: #ff9800;
    color: #fff;
}

.tooltip {
    background-color: #fff;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    color: #3b3b3b;
    font-size: 12px;
    line-height: 18px;
    padding: 16px;
    position: absolute;
    text-align: left;
    z-index: 100;
    width: 240px;
    transition: opacity 0.2s;
}

.tooltip .tooltipArrow {
    position: absolute;
    bottom: 100%;
    width: 4px;
    text-align: center;
    border: 4px solid transparent;
    border-bottom-color: #fff;
    left: 50%;
    margin-left: -2px;
}

.tooltip .tooltipDateTime {
    font-size: 12px;
    color: #7c7c7c;
    text-transform: uppercase;
    font-weight: 600;
}

.tooltip .tooltipKey {
    color: #ccc;
    font-size: 10px;
}

.tooltip .tooltipDescription {
    margin-top: 12px;
    font-size: 14px;
    color: #181818;
}

.tooltip #tooltipStatus {
    padding: 4px 8px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: bold;
    margin-top: 6px;
    display: inline-block;
}

.tooltip hr {
    border: none;
    border-top: 1px solid #ededed;
    margin-top: 16px;
}

/* 页脚样式调整，使文字靠右显示 */
footer.footer-right {
    text-align: right;
    padding: 10px 50px 10px 10px;
    font-size: 12px;
    color: #7c7c7c;
}

@media screen and (max-width: 800px) {
    .pageContainer {
        padding: 30px 20px;
        margin: 0 auto 40px auto;
    }

    .reportContainer {
        grid-template-columns: 1fr;
    }

    .statusHeader {
        display: block;
    }

    .statusHeadline,
    .statusUptime {
        margin-left: 0;
        margin-top: 8px;
        text-align: left;
    }

    .statusTitle,
    .statusHeadline {
        display: inline-block;
    }
}
```
<!-- endtab -->
<!-- tab 3. sitestatus.js -->

- **Path:** `/source/static/js/sitestatus.js`

```js
const maxDays = 30;

async function genReportLog(container, key, siteData) {
  // 从站点数据中提取 URL 和记录
  const { url, records } = siteData;
  
  // 将记录转换为状态行格式
  let statusLines = records
    .map((entry) => `${entry.dateTime}, ${entry.result}`)
    .join("\n");

  const normalized = normalizeData(statusLines);
  const statusStream = constructStatusStream(key, url, normalized);
  container.appendChild(statusStream);
}

function constructStatusStream(key, url, uptimeData) {
  let streamContainer = templatize("statusStreamContainerTemplate");
  for (let ii = maxDays - 1; ii >= 0; ii--) {
    let line = constructStatusLine(key, ii, uptimeData[ii]);
    streamContainer.appendChild(line);
  }

  // 计算最近 30 天内总的成功和失败次数
  let totalSuccess = 0, totalFailure = 0;
  for (let i = 0; i < maxDays; i++) {
    if (uptimeData[i]) {
      totalSuccess += uptimeData[i].success;
      totalFailure += uptimeData[i].failure;
    }
  }
  const lastSet = uptimeData[0];
  const color = getColor(lastSet);
  const container = templatize("statusContainerTemplate", {
    title: key,
    url: url,
    color: color,
    status: getStatusText(color),
    upTime: uptimeData.upTime,
    success: totalSuccess,
    failure: totalFailure
  });

  // 将状态流容器插入模板中的占位元素内
  const placeholder = container.querySelector("#statusStreamPlaceholder");
  placeholder.appendChild(streamContainer);
  return container;
}

function constructStatusLine(key, relDay, upTimeData) {
  let date = new Date();
  date.setDate(date.getDate() - relDay);
  return constructStatusSquare(key, date, upTimeData);
}

function getColor(uptimeVal) {
  let avg = uptimeVal == null ? null : (typeof uptimeVal === 'object' ? uptimeVal.avg : uptimeVal);
  return avg == null
    ? "nodata"
    : avg == 1
    ? "success"
    : avg < 0.3
    ? "failure"
    : "partial";
}

function constructStatusSquare(key, date, uptimeVal) {
  const color = getColor(uptimeVal);
  let square = templatize("statusSquareTemplate", {
    color: color,
    tooltip: getTooltip(key, date, color, uptimeVal)
  });

  const show = () => {
    showTooltip(square, key, date, color, uptimeVal);
  };
  square.addEventListener("mouseover", show);
  square.addEventListener("mousedown", show);
  square.addEventListener("mouseout", hideTooltip);
  return square;
}

let cloneId = 0;
function templatize(templateId, parameters) {
  let clone = document.getElementById(templateId).cloneNode(true);
  clone.id = "template_clone_" + cloneId++;
  if (!parameters) {
    return clone;
  }
  applyTemplateSubstitutions(clone, parameters);
  return clone;
}

function applyTemplateSubstitutions(node, parameters) {
  const attributes = node.getAttributeNames();
  for (let ii = 0; ii < attributes.length; ii++) {
    const attr = attributes[ii];
    const attrVal = node.getAttribute(attr);
    node.setAttribute(attr, templatizeString(attrVal, parameters));
  }

  if (node.childElementCount === 0) {
    node.innerText = templatizeString(node.innerText, parameters);
  } else {
    const children = Array.from(node.children);
    children.forEach((n) => {
      applyTemplateSubstitutions(n, parameters);
    });
  }
}

function templatizeString(text, parameters) {
  if (parameters) {
    for (const [key, val] of Object.entries(parameters)) {
      text = text.replaceAll("$" + key, val);
    }
  }
  return text;
}

function getStatusText(color) {
  return color === "nodata"
    ? "暂无数据"
    : color === "success"
    ? "运行正常"
    : color === "failure"
    ? "完全中断"
    : color === "partial"
    ? "部分中断"
    : "未知状态";
}

function getStatusDescriptiveText(color) {
  return color === "nodata"
    ? "暂无数据：未执行健康检查。"
    : color === "success"
    ? "当天未记录到任何停机。"
    : color === "failure"
    ? "当天记录到严重故障。"
    : color === "partial"
    ? "当天记录到部分服务中断。"
    : "未知状态";
}

function getTooltip(key, date, color, uptimeVal) {
  let statusText = getStatusText(color);
  let countsText = "";
  if (uptimeVal && typeof uptimeVal === "object") {
      countsText = ` 成功: ${uptimeVal.success}, 失败: ${uptimeVal.failure}`;
  }
  return `${key} | ${date.toDateString()} : ${statusText}${countsText}`;
}

function showTooltip(element, key, date, color, uptimeVal) {
  clearTimeout(tooltipTimeout);
  const toolTipDiv = document.getElementById("tooltip");

  document.getElementById("tooltipDateTime").innerText = date.toDateString();
  let description = getStatusDescriptiveText(color);
  if (uptimeVal && typeof uptimeVal === "object") {
      description += ` 成功: ${uptimeVal.success}, 失败: ${uptimeVal.failure}`;
  }
  document.getElementById("tooltipDescription").innerText = description;

  const statusDiv = document.getElementById("tooltipStatus");
  statusDiv.innerText = getStatusText(color);
  statusDiv.className = color;

  toolTipDiv.style.top = element.offsetTop + element.offsetHeight + 10 + "px";
  toolTipDiv.style.left =
    element.offsetLeft + element.offsetWidth / 2 - toolTipDiv.offsetWidth / 2 + "px";
  toolTipDiv.style.opacity = "1";
}

function hideTooltip() {
  tooltipTimeout = setTimeout(() => {
    const toolTipDiv = document.getElementById("tooltip");
    toolTipDiv.style.opacity = "0";
  }, 1000);
}

function normalizeData(statusLines) {
  const rows = statusLines.split("\n");
  const dateNormalized = splitRowsByDate(rows);
  let relativeDateMap = {};
  const now = Date.now();
  for (const [key, val] of Object.entries(dateNormalized)) {
    if (key === "upTime") continue;
    const relDays = getRelativeDays(now, new Date(key).getTime());
    relativeDateMap[relDays] = {
         avg: val.total ? (val.success / val.total) : null,
         success: val.success,
         failure: val.total - val.success
    };
  }
  relativeDateMap.upTime = dateNormalized.upTime;
  return relativeDateMap;
}

function splitRowsByDate(rows) {
  let dateValues = {};
  let totalSuccess = 0, totalCount = 0;
  for (let ii = 0; ii < rows.length; ii++) {
    const row = rows[ii];
    if (!row) continue;
    const [dateTimeStr, resultStr] = row.split(",", 2);
    const dateTime = new Date(Date.parse(dateTimeStr.replace(/-/g, "/") + " GMT"));
    const dateStr = dateTime.toDateString();

    if (!dateValues[dateStr]) {
      dateValues[dateStr] = { total: 0, success: 0 };
    }

    let isSuccess = resultStr.trim() === "success" ? 1 : 0;
    dateValues[dateStr].total++;
    dateValues[dateStr].success += isSuccess;
    totalCount++;
    totalSuccess += isSuccess;
  }

  const upTime = totalCount ? ((totalSuccess / totalCount) * 100).toFixed(2) + "%" : "--%";
  dateValues.upTime = upTime;
  return dateValues;
}

function getRelativeDays(date1, date2) {
  return Math.floor(Math.abs((date1 - date2) / (24 * 3600 * 1000)));
}

let tooltipTimeout = null;

// 初始页面加载和 PJAX 加载完成时均初始化
document.addEventListener("DOMContentLoaded", initSiteStatus);
document.addEventListener("pjax:complete", initSiteStatus);

async function initSiteStatus() {
  // 这里从 sitestatus.pug 中注入的 siteStatusJson
  // 如果不想用全局变量，可以自行改为更安全的注入方式
  try {
    const responseLog = await fetch(siteStatusJson);
    let allData = {};
    if (responseLog.ok) {
      allData = await responseLog.json();
    }

    const reportsDiv = document.getElementById("reports");
    // 清空旧内容，避免 PJAX 多次加载时重复添加
    reportsDiv.innerHTML = "";
    // 遍历 JSON 中所有站点
    for (const [siteName, siteData] of Object.entries(allData)) {
      await genReportLog(reportsDiv, siteName, siteData);
    }
  } catch (error) {
    console.error("Failed to initialize site status:", error);
  }
}
```
<!-- endtab -->
<!-- tab 4. _config.anzhiyu.yml -->

- **Path:** `/_config.anzhiyu.yml`

```yml
SiteStatus:
  json: https://status.bornforthis.cn/logs/report.json
```
<!-- endtab -->
{% endtabs %}

{% span center log large blue, 🪧 %}

{% folding blue close, 公众号：AI悦创【二维码】 %}

![](https://bornforthis.cn/gzh.jpg)

{% endfolding %}

{% tip info %}AI悦创·编程一对一

> AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh
>
> C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh

{% endtip %}

