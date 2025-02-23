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