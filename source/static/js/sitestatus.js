const maxDays = 30;

async function genReportLog(container, key, siteData) {
  // Extract URL and records from the site data
  const { url, records } = siteData;
  
  // Convert records to status lines format
  let statusLines = records
    .map((entry) => `${entry.dateTime}, ${entry.result}`)
    .join("\n");

  const normalized = normalizeData(statusLines);
  const statusStream = constructStatusStream(key, url, normalized);
  container.appendChild(statusStream);
}

function constructStatusStream(key, url, uptimeData) {
  let streamContainer = templatize("statusStreamContainerTemplate");
  for (var ii = maxDays - 1; ii >= 0; ii--) {
    let line = constructStatusLine(key, ii, uptimeData[ii]);
    streamContainer.appendChild(line);
  }

  const lastSet = uptimeData[0];
  const color = getColor(lastSet);

  const container = templatize("statusContainerTemplate", {
    title: key,
    url: url,
    color: color,
    status: getStatusText(color),
    upTime: uptimeData.upTime,
  });

  container.appendChild(streamContainer);
  return container;
}

function constructStatusLine(key, relDay, upTimeArray) {
  let date = new Date();
  date.setDate(date.getDate() - relDay);
  return constructStatusSquare(key, date, upTimeArray);
}

function getColor(uptimeVal) {
  return uptimeVal == null
    ? "nodata"
    : uptimeVal == 1
    ? "success"
    : uptimeVal < 0.3
    ? "failure"
    : "partial";
}

function constructStatusSquare(key, date, uptimeVal) {
  const color = getColor(uptimeVal);
  let square = templatize("statusSquareTemplate", {
    color: color,
    tooltip: getTooltip(key, date, color),
  });

  const show = () => {
    showTooltip(square, key, date, color);
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
  for (var ii = 0; ii < attributes.length; ii++) {
    const attr = attributes[ii];
    const attrVal = node.getAttribute(attr);
    node.setAttribute(attr, templatizeString(attrVal, parameters));
  }

  if (node.childElementCount == 0) {
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
  return color == "nodata"
    ? "暂无数据"
    : color == "success"
    ? "运行正常"
    : color == "failure"
    ? "完全中断"
    : color == "partial"
    ? "部分中断"
    : "未知状态";
}

function getStatusDescriptiveText(color) {
  return color == "nodata"
    ? "暂无数据：未执行健康检查。"
    : color == "success"
    ? "当天未记录到任何停机。"
    : color == "failure"
    ? "当天记录到严重故障。"
    : color == "partial"
    ? "当天记录到部分服务中断。"
    : "未知状态";
}

function getTooltip(key, date, color) {
  let statusText = getStatusText(color);
  return `${key} | ${date.toDateString()} : ${statusText}`;
}

function create(tag, className) {
  let element = document.createElement(tag);
  element.className = className;
  return element;
}

function normalizeData(statusLines) {
  const rows = statusLines.split("\n");
  const dateNormalized = splitRowsByDate(rows);

  let relativeDateMap = {};
  const now = Date.now();
  for (const [key, val] of Object.entries(dateNormalized)) {
    if (key == "upTime") {
      continue;
    }
    const relDays = getRelativeDays(now, new Date(key).getTime());
    relativeDateMap[relDays] = getDayAverage(val);
  }
  relativeDateMap.upTime = dateNormalized.upTime;
  return relativeDateMap;
}

function getDayAverage(val) {
  if (!val || val.length === 0) {
    return null;
  } else {
    return val.reduce((a, v) => a + v) / val.length;
  }
}

function getRelativeDays(date1, date2) {
  return Math.floor(Math.abs((date1 - date2) / (24 * 3600 * 1000)));
}

function splitRowsByDate(rows) {
  let dateValues = {};
  let sum = 0, count = 0;
  for (var ii = 0; ii < rows.length; ii++) {
    const row = rows[ii];
    if (!row) {
      continue;
    }
    const [dateTimeStr, resultStr] = row.split(",", 2);
    const dateTime = new Date(Date.parse(dateTimeStr.replace(/-/g, "/") + " GMT"));
    const dateStr = dateTime.toDateString();

    let resultArray = dateValues[dateStr];
    if (!resultArray) {
      resultArray = [];
      dateValues[dateStr] = resultArray;
    }

    let result = 0;
    if (resultStr.trim() === "success") {
      result = 1;
    }
    sum += result;
    count++;

    resultArray.push(result);
  }

  const upTime = count ? ((sum / count) * 100).toFixed(2) + "%" : "--%";
  dateValues.upTime = upTime;
  return dateValues;
}

let tooltipTimeout = null;
function showTooltip(element, key, date, color) {
  clearTimeout(tooltipTimeout);
  const toolTipDiv = document.getElementById("tooltip");

  document.getElementById("tooltipDateTime").innerText = date.toDateString();
  document.getElementById("tooltipDescription").innerText =
    getStatusDescriptiveText(color);

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

async function initSiteStatus() {
  try {
    const responseLog = await fetch("https://status.bornforthis.cn/logs/report.json");
    let allData = {};
    if (responseLog.ok) {
      allData = await responseLog.json();
    }

    const reportsDiv = document.getElementById("reports");
    // 遍历JSON中的所有站点
    for (const [siteName, siteData] of Object.entries(allData)) {
      await genReportLog(reportsDiv, siteName, siteData);
    }
  } catch (error) {
    console.error("Failed to initialize site status:", error);
  }
}

// 在页面加载完成后初始化
if (typeof window !== "undefined") {
  window.addEventListener("load", initSiteStatus);
}