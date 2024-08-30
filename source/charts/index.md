---
title: 统计
type: "charts"
comments: false
date: 2024-08-30 21:37:25
aside: false
---

<script src="https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0-rc.1/echarts.min.js"></script>

<!-- 文章发布时间统计图 --> <!-- 2020-02是从2020年2月开始计算 -->
<div id="posts-chart" data-start="2024-06" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
<!-- 文章标签统计图 --> <!-- data-length="10" 是显示的标签数量 -->
<div id="tags-chart" data-length="10" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
<!-- 文章分类统计图 -->
<div id="categories-chart" data-parent="true" style="border-radius: 8px; height: 300px; padding: 10px;"></div>