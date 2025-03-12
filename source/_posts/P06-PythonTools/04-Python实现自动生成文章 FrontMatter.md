---
title: Python 实现自动生成文章 FrontMatter
tags:
  - hexo
  - 书写技巧
categories:
  - AI悦创·Vlog
keywords:
  - AI悦创
  - Vlog
  - Python一对一教学
description: 本篇是 AI悦创编写的文章
top_img: /img/posts/P06-PythonTools/04-Python实现自动生成文章 FrontMatter/04-Python实现自动生成文章FrontMatter.png
comments: true
cover: /img/posts/P06-PythonTools/04-Python实现自动生成文章 FrontMatter/04-Python实现自动生成文章FrontMatter.webp
toc: true
mathjax: false
katex: false
highlight_shrink: false
aside: true
swiper_index: 1
top_group_index: 1
background: '#fff'
abbrlink: 2192c1f3
date: 2025-03-11 17:13:19
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
aplayer:
ai:
---
# 1. 前言

你好，我是悦创。

我现在有多个网站，主要写文章的有两个：

- [https://bornforthis.cn/](https://bornforthis.cn/)
- [https://blog.bornforthis.cn/](https://blog.bornforthis.cn/)

头文件要复制这比较麻烦，特别是其中当下日期每次都是要**新鲜**的。所以，我一开始一直用的是点击开始然后生成最新日期：

- [https://bornforthis.cn/python/#/](https://bornforthis.cn/python/#/)

![](<04-Python实现自动生成文章 FrontMatter/image.png>)

虽然，我这么操作了。但我还是觉得麻烦，每次鼠标要滑动到那块输出框，并选择复制。（说实话：操作的时候我很是烦躁😫）

今天给南京大学理工学院研究生（MR）上课的时候，我就感觉异常强烈。我也是建议她跟我系统学习的过程中，使用自己搭建的网站写文章时，时间使用我原先的方法来生成。

最后，我就想着趁着学生记笔记的时间，使用 Flask 快速搭建一个 API 来使用。OK，当你看见这篇文章时，代表我已经写完并且部署成功！

# 2. 代码实现

- 完整代码已经开源：[https://github.com/AndersonHJB/Auto-Time-FrontMatter](https://github.com/AndersonHJB/Auto-Time-FrontMatter)

{% tabs codes %}

<!-- tab app.py -->

```python
from flask import Flask, jsonify, render_template
from datetime import datetime

app = Flask(__name__)

# ----------------------------------------------------------------------------
# 根路径 / 的功能（保持不变）
# 访问 http://127.0.0.1:5000/ 时，返回一个页面:
#   - 调用 /api/time 获取 JSON
#   - 只显示并复制日期部分
# ----------------------------------------------------------------------------
@app.route('/')
def index():
    return render_template('index.html')

# 返回 JSON（包含 time, author, site），供前端 AJAX 获取
@app.route('/api/time', methods=['GET'])
def get_time():
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    data = {
        "time": current_time,
        "author": "AI悦创",
        "site": "bornforthis.cn"
    }
    return jsonify(data)

# ----------------------------------------------------------------------------
# 功能2: /date-text
# 返回 date_text.html, 显示指定文本, 其中 date 只替换当前日期, 并自动复制
# ----------------------------------------------------------------------------
@app.route('/date-text')
@app.route('/vuepress-front-matter')
@app.route('/docs')
def date_text():
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return render_template('date_text.html', current_time=current_time)

# ----------------------------------------------------------------------------
# 功能3: /vlog
# 返回 vlog_content.html, 内含多行 YAML 风格文本 + 一段文案
# 同样自动替换 date: 为当前日期, 并自动复制
# ----------------------------------------------------------------------------
@app.route('/hexo-front-matter')
@app.route('/blog')
def vlog():
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return render_template('vlog_content.html', current_time=current_time)

@app.route('/hexo')
def hexo():
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return render_template('hexo_content.html', current_time=current_time)
# ----------------------------------------------------------------------------
# 启动
# ----------------------------------------------------------------------------
if __name__ == '__main__':
    # 1) http://127.0.0.1:5000/        -> index.html + 只复制日期
    # 2) http://127.0.0.1:5000/date-text -> date_text.html + 文本 + 自动复制
    # 3) http://127.0.0.1:5000/vlog    -> vlog_content.html + 文本 + 自动复制
    app.run(host='0.0.0.0', port=5000, debug=True)
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
