---
title: "网站文章编写笔记"
date: 2024-08-28 00:03:11
tags:
    - 笔记
    - 网站文章编写
categories:
    - hexo 网站相关
keywords: 
    - hexo
description: "本篇是我研究安知鱼主题编写文章的方法。"
top_img: "/img/posts/P01-hexo/03-notebook/blog.png"
comments: true
cover: "/img/posts/P01-hexo/03-notebook/blog.png"
toc: true
toc_number: 
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax: false
katex: false
aplayer: 
highlight_shrink: false
aside: true
swiper_index: 1
top_group_index: 1
background: "#fff"
abbrlink: '0'
ai: 
  - "这篇文章介绍了 AI悦创研究学习本博客网站文章编写的笔记～"
---

# 1. 常用网站

- [网站页面截图](https://www.thum.io/)

# 2. 常用代码

## 2.1 个人站点卡片

```markdown
{% sitegroup %}

{% site AI悦创·博客, url=https://blog.bornforthis.cn/, screenshot=https://blog.bornforthis.cn/img/link/00-blog.bornforthis.cn.png, avatar=https://bornforthis.cn/aiyc.svg, description=AI悦创·创造不同～ %}

{% endsitegroup %}
```

## 2.2 广告🪧

```markdown
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
```

## 2.3 文本折叠

```markdown
{% folding blue close, 文本内容 %}

{% endfolding %}
```

# 3. Code

{% tabs todolist %}

<!-- tab 1. todolist -->

- 开发 todolist 会用到的 Python 代码:

```python
import os

lst = [
    '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io/source/_data/todolist.yml',
    '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io/source/static/js/todo-toggle.js',
    '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io/source/static/js/todo-date-calculation.js',
    '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io/themes/anzhiyu/layout/includes/page/todolist.pug',
    '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io/source/static/css/todolist.css'
]

result = ''
for path in lst:
    filename = path.split('/')[-1]
    with open(path, 'r') as f:
        content = f.read()
        result += filename + ':\n' + content + '\n'
print(result)
with open('gpt.txt', 'w') as f:
    f.write(result)
```
<!-- endtab -->
<!-- tab 2. anniversary -->

- 喵喵纪念日会使用到的代码：

```python
import os

lst = [
    '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io/source/_data/anniversary.yml',
    '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io/source/static/js/anniversary.js',
    '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io/themes/anzhiyu/layout/includes/page/anniversary.pug',
    '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io/source/static/css/anniversary.css'
]

result = ''
for path in lst:
    filename = path.split('/')[-1]
    with open(path, 'r') as f:
        content = f.read()
        result += filename + ':\n' + content + '\n'
print(result)
with open('gpt.txt', 'w') as f:
    f.write(result)
```
<!-- endtab -->

{% endtabs %}

# 4. Front-matter

{% tabs Page,2 %}

<!-- tab Page Front-matter -->

| 写法                  | 解释                                                         |
| :-------------------- | :----------------------------------------------------------- |
| title                 | 【必需】页面标题                                             |
| date                  | 【必需】页面创建日期                                         |
| type                  | 【必需】标签、分类、关于、音乐馆、友情链接、相册、相册详情、朋友圈、即刻页面需要配置 |
| updated               | 【可选】页面更新日期                                         |
| description           | 【可选】页面描述                                             |
| keywords              | 【可选】页面关键字                                           |
| comments              | 【可选】显示页面评论模块(默认 true)                          |
| top_img               | 【可选】页面顶部图片                                         |
| mathjax               | 【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false) |
| katex                 | 【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false) |
| aside                 | 【可选】显示侧边栏 (默认 true)                               |
| aplayer               | 【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的音乐 配置 |
| highlight_shrink      | 【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置) |
| top_single_background | 【可选】部分页面的顶部模块背景图片                           |

<!-- endtab -->

<!-- tab Post Front-matter -->

| 写法                  | 解释                                                         |
| :-------------------- | :----------------------------------------------------------- |
| title                 | 【必需】文章标题                                             |
| date                  | 【必需】文章创建日期                                         |
| updated               | 【可选】文章更新日期                                         |
| tags                  | 【可选】文章标签                                             |
| categories            | 【可选】文章分类                                             |
| keywords              | 【可选】文章关键字                                           |
| description           | 【可选】文章描述                                             |
| top_img               | 【可选】文章顶部图片                                         |
| cover                 | 【可选】文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空) |
| comments              | 【可选】显示文章评论模块(默认 true)                          |
| toc                   | 【可选】显示文章 TOC(默认为设置中 toc 的 enable 配置)        |
| toc_number            | 【可选】显示 toc_number(默认为设置中 toc 的 number 配置)     |
| toc_style_simple      | 【可选】显示 toc 简洁模式                                    |
| copyright             | 【可选】显示文章版权模块(默认为设置中 post_copyright 的 enable 配置) |
| copyright_author      | 【可选】文章版权模块的`文章作者`                             |
| copyright_author_href | 【可选】文章版权模块的`文章作者`链接                         |
| copyright_url         | 【可选】文章版权模块的`文章链接`链接                         |
| copyright_info        | 【可选】文章版权模块的版权声明文字                           |
| mathjax               | 【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false) |
| katex                 | 【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false) |
| aplayer               | 【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的`音乐` 配置 |
| highlight_shrink      | 【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置) |
| aside                 | 【可选】显示侧边栏 (默认 true)                               |
| swiper_index          | 【可选】首页轮播图配置 index 索引，数字越小越靠前            |
| top_group_index       | 【可选】首页右侧卡片组配置, 数字越小越靠前                   |
| ai                    | 【可选】文章ai摘要                                           |
| main_color            | 【可选】文章主色，必须是16进制颜色且有6位，不可缩减，例如#ffffff 不可写成#fff |

1. 首页轮播图配置: `swiper_index`, 数字越小越靠前
2. 首页卡片配置: `top_group_index`, 数字越小越靠前
3. page 中`top_single_background`, 可配置部分页面的顶部背景图片


<!-- endtab -->

{% endtabs %}



# 5. 杂物连接

{% tabs zawu %}
<!-- tab 1. 2409 -->
1. [https://github.com/qianguyihao/Web](https://github.com/qianguyihao/Web)
2. [千古前端图文教程](https://web.qianguyihao.com/)
3. [樱桃茶-easycoding](https://doc.cherrychat.org/) 质量低下，GPT 生成。
4. [Jasmine](https://github.com/liaocp666/Jasmine) 主题
5. [https://okpy.github.io/documentation/](https://okpy.github.io/documentation/)
6. [https://github.com/okpy/ok](https://github.com/okpy/ok)
7. [https://fecommunity.github.io/front-end-interview/](https://fecommunity.github.io/front-end-interview/)
8. [https://tsejx.github.io/javascript-guidebook/](https://tsejx.github.io/javascript-guidebook/)
9. 反向代理：[https://console.openfrp.net/dashboard](https://console.openfrp.net/dashboard)
10. 昊天数学老师网站：[https://mathematico.netlify.app/](https://mathematico.netlify.app/)
10. 说说页面待考虑：[https://blog.2broear.com/weblog](https://blog.2broear.com/weblog)
<!-- endtab -->
{% endtabs %}

# 6. VuePress 常用代码

{% tabs Code %}
<!-- tab 1. 文章因为编码问题 -->
```python
# 用于查找并删除 U+2061 字符的脚本

def find_and_remove_unicode(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        content = file.read()

    # 查找所有 "⁡" (U+2061) 的位置
    positions = [i for i, c in enumerate(content) if c == '\u2061']

    if positions:
        print(f"Found U+2061 character at positions: {positions}")
        # 移除所有 "⁡" 字符
        cleaned_content = content.replace('\u2061', '')
        with open(filename, 'w', encoding='utf-8') as file:
            file.write(cleaned_content)
        print("All U+2061 characters have been removed.")
    else:
        print("No U+2061 characters found in the file.")

# 使用该函数并传入 Markdown 文件的路径
filename = '/Users/huangjiabao/bornforthis.cn/docs/column/data-structure/Python-DSA/04-binary-tree.md'  # 将此路径替换为你的文件路径
find_and_remove_unicode(filename)
```
<!-- endtab -->
{% endtabs %}

# 7. 常用链接

| 序号 | 链接   | 说明                                                         |
| ---- | ------ | ------------------------------------------------------------ |
| 01   | 封面图 | [https://haowallpaper.com/homeView](https://haowallpaper.com/homeView) |



# 8. panel4.serv00.com

{% tabs panel4 %}

<!-- tab serv00.net -->
1. 虚拟环境创建

```bash
mkdir /usr/home/aiyuechuang/.virtualenvs
```

2. 进入虚拟环境目录

```bash
cd /home/aiyuechuang/.virtualenvs
```

3. 创建虚拟环境

```bash
virtualenv environment_name
virtualenv FeedVaultEnv

# 具体操作
[aiyuechuang@s4]:<~/.virtualenvs>$ virtualenv FeedVaultEnv
created virtual environment CPython3.11.9.final.0-64 in 700ms
  creator CPython3Posix(dest=/usr/home/aiyuechuang/.virtualenvs/FeedVaultEnv, clear=False, no_vcs_ignore=False, global=False)
  seeder FromAppData(download=False, pip=bundle, setuptools=bundle, wheel=bundle, via=copy, app_data_dir=/usr/home/aiyuechuang/.local/share/virtualenv)
    added seed packages: pip==24.0, setuptools==69.5.1, wheel==0.43.0
  activators BashActivator,CShellActivator,FishActivator,NushellActivator,PowerShellActivator,PythonActivator

# 使用其它版本创建
$ cd /usr/home/LOGIN/.virtualenvs
$ virtualenv environment_name -p /usr/local/bin/python2.7
Running virtualenv with interpreter /usr/local/bin/python2.7
Using base prefix '/usr/local'
New python executable in environment_name/bin/python2.7
Also creating executable in environment_name/bin/python
Installing setuptools, pip...done.
```

4. 激活虚拟环境

```bash
# 具体操作：

$ source /usr/home/aiyuechuang/.virtualenvs/FeedVaultEnv/bin/activate
(environment_name) $

# 教程
$ source /usr/home/LOGIN/.virtualenvs/environment_name/bin/activate
(environment_name) $
```

5. 退出虚拟环境

```bash
deactivate
```

<!-- endtab -->

<!-- tab 一键脚本 -->

```bash
source /usr/home/aiyuechuang/.virtualenvs/FeedVaultEnv/bin/activate
```

<!-- endtab -->

{% endtabs %}