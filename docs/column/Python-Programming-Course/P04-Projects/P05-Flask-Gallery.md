---
title: P05-AI 实现 Flask 实现个人摄影网站
icon: shequ-jihuo
date: 2025-09-07 16:57:23
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

## V0.1 版本

::: tip 提示词 1

Flask 自动读取本地文件夹中图片，自动生成图片网站。图片具有分类功能，分类下面具有时间、标题功能。分类与时间按照文件夹名称自动生成。举个例子：总文件夹 images 下面有许多个子文件夹：北京、天津、厦门......，子文件夹中有许多个文件夹，例如：北京文件夹里面有：天安门 2025 年 8 月 24 日、南门涮肉2025 年 8 月 25 日等......样式要设计好看！

:::

::: tabs

@tab 1. 项目结构（复制即可）

```bash
flask-gallery/
  app.py
  templates/
    base.html
    index.html
    category.html
    album.html
  static/
    style.css
  images/              # 你自己的图片根目录（可放中文名）
    北京/
      天安门 2025 年 8 月 24 日/
        001.jpg
        002.png
    天津/
      南门涮肉2025 年 8 月 25 日/
        a.jpg
```

@tab 2. 使用方式

1. 将本页所有文件按结构放到你的项目目录（`flask-gallery/`）。
2. 安装依赖：`pip install flask`
3. 运行：`python app.py`，访问 `http://127.0.0.1:5000/`

> 支持的图片后缀：`jpg, jpeg, png, webp, gif, bmp`

@tab 3. app.py（核心逻辑：扫描目录、解析标题与日期、URL 路由）

```python
# app.py
from __future__ import annotations
from dataclasses import dataclass
from pathlib import Path
from typing import List, Optional, Tuple
import datetime as dt
import re
import time

from flask import Flask, render_template, send_from_directory, abort, url_for
from werkzeug.utils import safe_join

# ====== 基本配置 ======
BASE_DIR = Path(__file__).resolve().parent
IMAGES_ROOT = BASE_DIR / "images"  # 你的图片根目录
ALLOWED_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp"}
CACHE_TTL_SECONDS = 5  # 扫描缓存的生存期（秒）

app = Flask(__name__)


# ====== 数据结构 ======
@dataclass
class Album:
    category: str            # 分类文件夹名（中文可）
    folder: str              # 相册文件夹名（原始）
    title: str               # 从 folder 解析的“标题”
    date: Optional[dt.date]  # 从 folder 解析的“日期”（可空）
    rel_dir: str             # 相册相对 images 的路径（用于拼 URL）
    images: List[str]        # 相册内图片文件名列表（不含路径）

    @property
    def cover_relfile(self) -> Optional[str]:
        return f"{self.rel_dir}/{self.images[0]}" if self.images else None


@dataclass
class Category:
    name: str                 # 分类文件夹名
    rel_dir: str              # 相对 images 的路径（就是 name）
    albums: List[Album]

    @property
    def total_albums(self) -> int:
        return len(self.albums)

    @property
    def total_images(self) -> int:
        return sum(len(a.images) for a in self.albums)

    @property
    def cover_relfile(self) -> Optional[str]:
        # 选第一个有封面的相册
        for a in self.albums:
            if a.cover_relfile:
                return a.cover_relfile
        return None


# ====== 工具函数 ======
_cn_patterns = [
    # 标题在前：天安门 2025 年 8 月 24 日
    re.compile(r"^(?P<title>.+?)\s*(?P<y>\d{4})\s*年\s*(?P<m>\d{1,2})\s*月(?:\s*(?P<d>\d{1,2})\s*日)?$"),
    # 日期在前：2025 年 8 月 24 日 天安门
    re.compile(r"^(?P<y>\d{4})\s*年\s*(?P<m>\d{1,2})\s*月(?:\s*(?P<d>\d{1,2})\s*日)?\s*(?P<title>.+?)$"),
]

_iso_patterns = [
    # 标题在前：天安门 2025-08-24 / 2025/08/24 / 2025.08.24 / 2025-08
    re.compile(r"^(?P<title>.+?)\s*(?P<y>\d{4})[-/.](?P<m>\d{1,2})(?:[-/.](?P<d>\d{1,2}))?$"),
    # 日期在前：2025-08-24 天安门
    re.compile(r"^(?P<y>\d{4})[-/.](?P<m>\d{1,2})(?:[-/.](?P<d>\d{1,2}))?\s*(?P<title>.+?)$"),
]


def _to_date(y: str, m: str, d: Optional[str]) -> Optional[dt.date]:
    try:
        year = int(y)
        month = int(m)
        day = int(d) if d else 1  # 无日，默认 1 号
        return dt.date(year, month, day)
    except ValueError:
        return None


def parse_title_date(folder_name: str) -> Tuple[str, Optional[dt.date]]:
    name = folder_name.strip()
    for pat in _cn_patterns + _iso_patterns:
        m = pat.match(name)
        if m:
            gd = m.groupdict()
            title = (gd.get("title") or "").strip()
            date = _to_date(gd["y"], gd["m"], gd.get("d"))
            # 若标题空，就把日期从原名中抹掉后作为标题
            if not title:
                title = pat.sub("", name).strip("-_ ·，, ") or name
            return title, date
    # 没匹配到日期，整串当标题
    return name, None


def allowed_image(p: Path) -> bool:
    return p.is_file() and p.suffix.lower() in ALLOWED_EXTS


# ====== 扫描与缓存 ======
_cache = {"at": 0.0, "data": []}


def _scan_once() -> List[Category]:
    if not IMAGES_ROOT.exists():
        return []

    categories: List[Category] = []

    for cat_dir in sorted([p for p in IMAGES_ROOT.iterdir() if p.is_dir()]):
        albums: List[Album] = []
        for album_dir in sorted([p for p in cat_dir.iterdir() if p.is_dir()]):
            imgs = sorted([f.name for f in album_dir.iterdir() if allowed_image(f)])
            if not imgs:
                continue  # 空相册不展示
            title, date = parse_title_date(album_dir.name)
            rel_dir = str(album_dir.relative_to(IMAGES_ROOT)).replace("\\", "/")
            albums.append(Album(
                category=cat_dir.name,
                folder=album_dir.name,
                title=title,
                date=date,
                rel_dir=rel_dir,
                images=imgs,
            ))

        # 相册按日期倒序（无日期靠后再按名称）
        albums.sort(key=lambda a: (a.date is not None, a.date or dt.date(1, 1, 1), a.title), reverse=True)
        if albums:
            categories.append(Category(name=cat_dir.name, rel_dir=cat_dir.name, albums=albums))

    # 分类按名称排序（中文 OK）
    categories.sort(key=lambda c: c.name)
    return categories


def get_catalog() -> List[Category]:
    now = time.time()
    if now - _cache["at"] > CACHE_TTL_SECONDS or not _cache["data"]:
        _cache["data"] = _scan_once()
        _cache["at"] = now
    return _cache["data"]


# ====== Jinja 过滤器 ======
@app.template_filter("cn_date")
def jinja_cn_date(d: Optional[dt.date]) -> str:
    if not d:
        return "未标注日期"
    return f"{d.year} 年 {d.month} 月{f' {d.day} 日' if d.day else ''}"


# ====== 路由 ======
@app.route("/")
def index():
    cats = get_catalog()
    return render_template("index.html", categories=cats)


@app.route("/c/<category>/")
def view_category(category: str):
    cats = get_catalog()
    cat = next((c for c in cats if c.name == category), None)
    if not cat:
        abort(404)
    return render_template("category.html", category=cat)


@app.route("/c/<category>/<album>/")
def view_album(category: str, album: str):
    cats = get_catalog()
    cat = next((c for c in cats if c.name == category), None)
    if not cat:
        abort(404)
    alb = next((a for a in cat.albums if a.folder == album), None)
    if not alb:
        abort(404)
    return render_template("album.html", category=cat, album=alb)


@app.route("/media/<path:filename>")
def media(filename: str):
    # 限制仅服务图片文件
    p = (IMAGES_ROOT / filename).resolve()
    try:
        p.relative_to(IMAGES_ROOT)
    except Exception:
        abort(404)
    if p.suffix.lower() not in ALLOWED_EXTS or not p.exists():
        abort(404)
    rel = str(p.relative_to(IMAGES_ROOT)).replace("\\", "/")
    return send_from_directory(IMAGES_ROOT, rel)


if __name__ == "__main__":
    app.run(debug=True)
```

@tab 4. templates/base.html（通用布局 + 顶部导航 + 暗色模式）

```html
<!-- templates/base.html -->
<!doctype html>
<html lang="zh-CN" class="no-js">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{% block title %}图片库{% endblock %}</title>
  <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
  <script>
    // 初始暗色模式
    (function(){
      const m = localStorage.getItem('theme');
      if (m === 'dark') document.documentElement.classList.add('dark');
    })();
  </script>
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="{{ url_for('index') }}">📷 图片库</a>
      <nav class="nav">
        <a href="{{ url_for('index') }}">全部分类</a>
      </nav>
      <button class="theme-toggle" id="themeToggle" aria-label="切换主题">☾</button>
    </div>
  </header>

  <main class="container">
    {% block content %}{% endblock %}
  </main>

  <footer class="site-footer container">
    <p>自动生成于本地 <code>images/</code> 目录 · Flask</p>
  </footer>

  <script>
    const btn = document.getElementById('themeToggle');
    btn?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const dark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
  </script>
</body>
</html>
```

@tab 5. templates/index.html（分类总览页）

```html
<!-- templates/index.html -->
{% extends 'base.html' %}
{% block title %}全部分类 - 图片库{% endblock %}
{% block content %}
<h1 class="page-title">全部分类</h1>
<div class="grid">
  {% for c in categories %}
  <a class="card" href="{{ url_for('view_category', category=c.name) }}">
    <div class="card-cover">
      {% if c.cover_relfile %}
      <img loading="lazy" src="{{ url_for('media', filename=c.cover_relfile) }}" alt="{{ c.name }} cover">
      {% else %}
      <div class="placeholder">No Cover</div>
      {% endif %}
    </div>
    <div class="card-body">
      <div class="card-title">{{ c.name }}</div>
      <div class="card-meta">
        <span class="badge">{{ c.total_albums }} 相册</span>
        <span class="badge">{{ c.total_images }} 张</span>
      </div>
    </div>
  </a>
  {% endfor %}
</div>
{% if not categories %}
<p class="muted">还没有可用的分类，请在 <code>images/</code> 下创建 <code>分类/相册/图片</code> 结构。</p>
{% endif %}
{% endblock %}
```

@tab 6. templates/category.html（某分类下的相册列表）

```html
<!-- templates/category.html -->
{% extends 'base.html' %}
{% block title %}{{ category.name }} - 图片库{% endblock %}
{% block content %}
<nav class="breadcrumbs"><a href="{{ url_for('index') }}">全部分类</a> <span>/</span> <span>{{ category.name }}</span></nav>
<h1 class="page-title">{{ category.name }} · 相册</h1>

<div class="grid">
  {% for a in category.albums %}
  <a class="card" href="{{ url_for('view_album', category=category.name, album=a.folder) }}">
    <div class="card-cover">
      {% if a.cover_relfile %}
      <img loading="lazy" src="{{ url_for('media', filename=a.cover_relfile) }}" alt="{{ a.title }} cover">
      {% else %}
      <div class="placeholder">No Cover</div>
      {% endif %}
      <div class="ribbon">{{ a.date|cn_date }}</div>
    </div>
    <div class="card-body">
      <div class="card-title">{{ a.title }}</div>
      <div class="card-meta">
        <span class="badge">{{ a.images|length }} 张</span>
      </div>
    </div>
  </a>
  {% endfor %}
</div>
{% if not category.albums %}
<p class="muted">该分类暂无相册。</p>
{% endif %}
{% endblock %}
```

@tab 7. templates/album.html（相册详情页：标题 + 日期 + 图片网格）

```html
<!-- templates/album.html -->
{% extends 'base.html' %}
{% block title %}{{ album.title }} - {{ category.name }} - 图片库{% endblock %}
{% block content %}
<nav class="breadcrumbs">
  <a href="{{ url_for('index') }}">全部分类</a>
  <span>/</span>
  <a href="{{ url_for('view_category', category=category.name) }}">{{ category.name }}</a>
  <span>/</span>
  <span>{{ album.title }}</span>
</nav>

<header class="album-head">
  <h1 class="album-title">{{ album.title }}</h1>
  <div class="album-sub">{{ album.date|cn_date }} · {{ album.images|length }} 张</div>
</header>

<div class="grid images">
  {% for img in album.images %}
  <a class="img-card" href="{{ url_for('media', filename=album.rel_dir ~ '/' ~ img) }}" target="_blank" rel="noopener">
    <img loading="lazy" src="{{ url_for('media', filename=album.rel_dir ~ '/' ~ img) }}" alt="{{ album.title }} - {{ loop.index }}">
  </a>
  {% endfor %}
</div>
{% endblock %}
```

@tab 8. static/style.css（现代、简洁、美观）

```css
/* static/style.css */
:root{
  --bg:#0b0c0f;
  --bg-soft:#11131a;
  --text:#e6e9ef;
  --muted:#a0a7b4;
  --card:#141824;
  --accent:#7aa2f7;
  --shadow: 0 10px 30px rgba(0,0,0,.35);
  --radius:22px;
}

html{background:#f7f8fb;color:#121418;-webkit-font-smoothing:antialiased;}
html.dark{background:var(--bg);color:var(--text);}

body{margin:0;font:16px/1.6 ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "PingFang SC", "Noto Sans CJK SC", "Microsoft Yahei", sans-serif;}

.container{max-width:1100px;margin:0 auto;padding:24px;}

.site-header{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.7);backdrop-filter: blur(10px);border-bottom:1px solid #eef1f4;}
html.dark .site-header{background:rgba(17,19,26,.55);border-color:#1d2330;}
.header-inner{display:flex;align-items:center;gap:16px;}
.brand{font-weight:800;font-size:20px;text-decoration:none;color:inherit}
.nav a{color:inherit;text-decoration:none;opacity:.9;margin-right:12px}
.theme-toggle{border:0;background:transparent;font-size:18px;cursor:pointer}

.site-footer{opacity:.7;border-top:1px dashed #e6e8ee;margin-top:24px;padding-top:16px}
html.dark .site-footer{border-top-color:#1d2330}

.page-title{font-size:28px;font-weight:800;margin:8px 0 16px}
.muted{opacity:.65}

.breadcrumbs{opacity:.7;margin:8px 0 12px}
.breadcrumbs a{color:inherit}

.grid{display:grid;grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));gap:16px}
.grid.images{grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));}

.card{display:block;border-radius:var(--radius);overflow:hidden;background:#fff;box-shadow: 0 6px 20px rgba(0,0,0,.06);transition: transform .2s ease, box-shadow .2s ease}
html.dark .card{background:var(--card);box-shadow: var(--shadow)}
.card:hover{transform: translateY(-2px);box-shadow: 0 10px 24px rgba(0,0,0,.12)}
html.dark .card:hover{box-shadow: 0 14px 40px rgba(0,0,0,.45)}

.card-cover{position:relative;aspect-ratio: 16/10;background:#f0f2f7;}
html.dark .card-cover{background:var(--bg-soft)}
.card-cover img{width:100%;height:100%;object-fit:cover;display:block}
.placeholder{width:100%;height:100%;display:grid;place-items:center;color:#bbb}

.ribbon{position:absolute;left:12px;bottom:12px;padding:4px 10px;border-radius:999px;background:rgba(0,0,0,.65);color:#fff;font-size:12px}

.card-body{padding:12px 14px}
.card-title{font-weight:700;font-size:16px;letter-spacing:.2px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}
.card-meta{margin-top:8px;display:flex;gap:8px;align-items:center}
.badge{font-size:12px;padding:3px 8px;border-radius:999px;background:#eef1f6}
html.dark .badge{background:#1d2330}

.album-head{margin:4px 0 16px}
.album-title{margin:0;font-size:24px;font-weight:800}
.album-sub{opacity:.7;margin-top:4px}

.img-card{border-radius:16px;overflow:hidden;background:#fff;display:block}
html.dark .img-card{background:var(--card)}
.img-card img{width:100%;height:240px;object-fit:cover;display:block}

@media (max-width: 640px){
  .container{padding:14px}
  .img-card img{height:200px}
}
```

@tab 9. 命名建议

- 分类：`images/北京/ ...`、`images/厦门/ ...`（中文 OK）
- 相册：**推荐** `标题 YYYY 年 M 月 D 日` 或 `YYYY-YY-DD 标题`，无日也可（默认 1 号）。

> 例：`天安门 2025 年 8 月 24 日`、`2025-08-24 天安门`、`南门涮肉2025 年 8 月 25 日`

@tab 10. 可拓展点（已预留结构）

- 生成缩略图提速（Pillow/Thumbor/Nginx 缓存）。
- 站内搜索与相册筛选（按年月/关键字）。
- 轻量灯箱（原生 JS/CSS）或懒加载占位骨架。
- 部署到内网/服务器（Gunicorn + Nginx）。

:::

## V0.2 版本

::: tip 提示词

接着上面的实现，继续扩展：生成缩略图提速（Pillow/Thumbor/Nginx 缓存）。

站内搜索与相册筛选（按年月/关键字）。

轻量灯箱（原生 JS/CSS）或懒加载占位骨架。

:::

::: tabs

@tab 1. Flask 自动图片库（按文件夹分类 + 日期 + 标题）

> 功能：自动扫描 `images/分类/相册/图片` 目录结构，生成漂亮的图片网站；“分类”与“相册标题/时间”从文件夹名自动解析。
>
> 示例：`images/北京/天安门 2025 年 8 月 24 日/*.jpg`

@tab 2. 项目结构（复制即可）

```bash
flask-gallery/
  app.py
  templates/
    base.html
    index.html
    category.html
    album.html
  static/
    style.css
  images/              # 你自己的图片根目录（可放中文名）
    北京/
      天安门 2025 年 8 月 24 日/
        001.jpg
        002.png
    天津/
      南门涮肉2025 年 8 月 25 日/
        a.jpg
```



@tab 3. 使用方式

1. 将本页所有文件按结构放到你的项目目录（`flask-gallery/`）。
2. 安装依赖：`pip install flask`
3. 运行：`python app.py`，访问 `http://127.0.0.1:5000/`

> 支持的图片后缀：`jpg, jpeg, png, webp, gif, bmp`

@tab 4. app.py（核心逻辑：扫描目录、解析标题与日期、URL 路由）

```python
# app.py
from __future__ import annotations
from dataclasses import dataclass
from pathlib import Path
from typing import List, Optional, Tuple
import datetime as dt
import re
import time

from flask import Flask, render_template, send_from_directory, abort, url_for
from werkzeug.utils import safe_join

# ====== 基本配置 ======
BASE_DIR = Path(__file__).resolve().parent
IMAGES_ROOT = BASE_DIR / "images"  # 你的图片根目录
ALLOWED_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp"}
CACHE_TTL_SECONDS = 5  # 扫描缓存的生存期（秒）

app = Flask(__name__)


# ====== 数据结构 ======
@dataclass
class Album:
    category: str            # 分类文件夹名（中文可）
    folder: str              # 相册文件夹名（原始）
    title: str               # 从 folder 解析的“标题”
    date: Optional[dt.date]  # 从 folder 解析的“日期”（可空）
    rel_dir: str             # 相册相对 images 的路径（用于拼 URL）
    images: List[str]        # 相册内图片文件名列表（不含路径）

    @property
    def cover_relfile(self) -> Optional[str]:
        return f"{self.rel_dir}/{self.images[0]}" if self.images else None


@dataclass
class Category:
    name: str                 # 分类文件夹名
    rel_dir: str              # 相对 images 的路径（就是 name）
    albums: List[Album]

    @property
    def total_albums(self) -> int:
        return len(self.albums)

    @property
    def total_images(self) -> int:
        return sum(len(a.images) for a in self.albums)

    @property
    def cover_relfile(self) -> Optional[str]:
        # 选第一个有封面的相册
        for a in self.albums:
            if a.cover_relfile:
                return a.cover_relfile
        return None


# ====== 工具函数 ======
_cn_patterns = [
    # 标题在前：天安门 2025 年 8 月 24 日
    re.compile(r"^(?P<title>.+?)\s*(?P<y>\d{4})\s*年\s*(?P<m>\d{1,2})\s*月(?:\s*(?P<d>\d{1,2})\s*日)?$"),
    # 日期在前：2025 年 8 月 24 日 天安门
    re.compile(r"^(?P<y>\d{4})\s*年\s*(?P<m>\d{1,2})\s*月(?:\s*(?P<d>\d{1,2})\s*日)?\s*(?P<title>.+?)$"),
]

_iso_patterns = [
    # 标题在前：天安门 2025-08-24 / 2025/08/24 / 2025.08.24 / 2025-08
    re.compile(r"^(?P<title>.+?)\s*(?P<y>\d{4})[-/.](?P<m>\d{1,2})(?:[-/.](?P<d>\d{1,2}))?$"),
    # 日期在前：2025-08-24 天安门
    re.compile(r"^(?P<y>\d{4})[-/.](?P<m>\d{1,2})(?:[-/.](?P<d>\d{1,2}))?\s*(?P<title>.+?)$"),
]


def _to_date(y: str, m: str, d: Optional[str]) -> Optional[dt.date]:
    try:
        year = int(y)
        month = int(m)
        day = int(d) if d else 1  # 无日，默认 1 号
        return dt.date(year, month, day)
    except ValueError:
        return None


def parse_title_date(folder_name: str) -> Tuple[str, Optional[dt.date]]:
    name = folder_name.strip()
    for pat in _cn_patterns + _iso_patterns:
        m = pat.match(name)
        if m:
            gd = m.groupdict()
            title = (gd.get("title") or "").strip()
            date = _to_date(gd["y"], gd["m"], gd.get("d"))
            # 若标题空，就把日期从原名中抹掉后作为标题
            if not title:
                title = pat.sub("", name).strip("-_ ·，, ") or name
            return title, date
    # 没匹配到日期，整串当标题
    return name, None


def allowed_image(p: Path) -> bool:
    return p.is_file() and p.suffix.lower() in ALLOWED_EXTS


# ====== 扫描与缓存 ======
_cache = {"at": 0.0, "data": []}


def _scan_once() -> List[Category]:
    if not IMAGES_ROOT.exists():
        return []

    categories: List[Category] = []

    for cat_dir in sorted([p for p in IMAGES_ROOT.iterdir() if p.is_dir()]):
        albums: List[Album] = []
        for album_dir in sorted([p for p in cat_dir.iterdir() if p.is_dir()]):
            imgs = sorted([f.name for f in album_dir.iterdir() if allowed_image(f)])
            if not imgs:
                continue  # 空相册不展示
            title, date = parse_title_date(album_dir.name)
            rel_dir = str(album_dir.relative_to(IMAGES_ROOT)).replace("\\", "/")
            albums.append(Album(
                category=cat_dir.name,
                folder=album_dir.name,
                title=title,
                date=date,
                rel_dir=rel_dir,
                images=imgs,
            ))

        # 相册按日期倒序（无日期靠后再按名称）
        albums.sort(key=lambda a: (a.date is not None, a.date or dt.date(1, 1, 1), a.title), reverse=True)
        if albums:
            categories.append(Category(name=cat_dir.name, rel_dir=cat_dir.name, albums=albums))

    # 分类按名称排序（中文 OK）
    categories.sort(key=lambda c: c.name)
    return categories


def get_catalog() -> List[Category]:
    now = time.time()
    if now - _cache["at"] > CACHE_TTL_SECONDS or not _cache["data"]:
        _cache["data"] = _scan_once()
        _cache["at"] = now
    return _cache["data"]


# ====== Jinja 过滤器 ======
@app.template_filter("cn_date")
def jinja_cn_date(d: Optional[dt.date]) -> str:
    if not d:
        return "未标注日期"
    return f"{d.year} 年 {d.month} 月{f' {d.day} 日' if d.day else ''}"


# ====== 路由 ======
@app.route("/")
def index():
    cats = get_catalog()
    return render_template("index.html", categories=cats)


@app.route("/c/<category>/")
def view_category(category: str):
    cats = get_catalog()
    cat = next((c for c in cats if c.name == category), None)
    if not cat:
        abort(404)
    return render_template("category.html", category=cat)


@app.route("/c/<category>/<album>/")
def view_album(category: str, album: str):
    cats = get_catalog()
    cat = next((c for c in cats if c.name == category), None)
    if not cat:
        abort(404)
    alb = next((a for a in cat.albums if a.folder == album), None)
    if not alb:
        abort(404)
    return render_template("album.html", category=cat, album=alb)


@app.route("/media/<path:filename>")
def media(filename: str):
    # 限制仅服务图片文件
    p = (IMAGES_ROOT / filename).resolve()
    try:
        p.relative_to(IMAGES_ROOT)
    except Exception:
        abort(404)
    if p.suffix.lower() not in ALLOWED_EXTS or not p.exists():
        abort(404)
    rel = str(p.relative_to(IMAGES_ROOT)).replace("\\", "/")
    return send_from_directory(IMAGES_ROOT, rel)


if __name__ == "__main__":
    app.run(debug=True)
```

@tab 5. templates/base.html（通用布局 + 顶部导航 + 暗色模式）

```html
<!-- templates/base.html -->
<!doctype html>
<html lang="zh-CN" class="no-js">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{% block title %}图片库{% endblock %}</title>
  <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
  <script>
    // 初始暗色模式
    (function(){
      const m = localStorage.getItem('theme');
      if (m === 'dark') document.documentElement.classList.add('dark');
    })();
  </script>
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="{{ url_for('index') }}">📷 图片库</a>
      <nav class="nav">
        <a href="{{ url_for('index') }}">全部分类</a>
      </nav>
      <button class="theme-toggle" id="themeToggle" aria-label="切换主题">☾</button>
    </div>
  </header>

  <main class="container">
    {% block content %}{% endblock %}
  </main>

  <footer class="site-footer container">
    <p>自动生成于本地 <code>images/</code> 目录 · Flask</p>
  </footer>

  <script>
    const btn = document.getElementById('themeToggle');
    btn?.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const dark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
  </script>
</body>
</html>
```

@tab 6. templates/index.html（分类总览页）

```html
<!-- templates/index.html -->
{% extends 'base.html' %}
{% block title %}全部分类 - 图片库{% endblock %}
{% block content %}
<h1 class="page-title">全部分类</h1>
<div class="grid">
  {% for c in categories %}
  <a class="card" href="{{ url_for('view_category', category=c.name) }}">
    <div class="card-cover">
      {% if c.cover_relfile %}
      <img loading="lazy" src="{{ url_for('media', filename=c.cover_relfile) }}" alt="{{ c.name }} cover">
      {% else %}
      <div class="placeholder">No Cover</div>
      {% endif %}
    </div>
    <div class="card-body">
      <div class="card-title">{{ c.name }}</div>
      <div class="card-meta">
        <span class="badge">{{ c.total_albums }} 相册</span>
        <span class="badge">{{ c.total_images }} 张</span>
      </div>
    </div>
  </a>
  {% endfor %}
</div>
{% if not categories %}
<p class="muted">还没有可用的分类，请在 <code>images/</code> 下创建 <code>分类/相册/图片</code> 结构。</p>
{% endif %}
{% endblock %}
```

@tab 7. templates/category.html（某分类下的相册列表）

```html
<!-- templates/category.html -->
{% extends 'base.html' %}
{% block title %}{{ category.name }} - 图片库{% endblock %}
{% block content %}
<nav class="breadcrumbs"><a href="{{ url_for('index') }}">全部分类</a> <span>/</span> <span>{{ category.name }}</span></nav>
<h1 class="page-title">{{ category.name }} · 相册</h1>

<div class="grid">
  {% for a in category.albums %}
  <a class="card" href="{{ url_for('view_album', category=category.name, album=a.folder) }}">
    <div class="card-cover">
      {% if a.cover_relfile %}
      <img loading="lazy" src="{{ url_for('media', filename=a.cover_relfile) }}" alt="{{ a.title }} cover">
      {% else %}
      <div class="placeholder">No Cover</div>
      {% endif %}
      <div class="ribbon">{{ a.date|cn_date }}</div>
    </div>
    <div class="card-body">
      <div class="card-title">{{ a.title }}</div>
      <div class="card-meta">
        <span class="badge">{{ a.images|length }} 张</span>
      </div>
    </div>
  </a>
  {% endfor %}
</div>
{% if not category.albums %}
<p class="muted">该分类暂无相册。</p>
{% endif %}
{% endblock %}
```

@tab 8. templates/album.html（相册详情页：标题 + 日期 + 图片网格）

```html
<!-- templates/album.html -->
{% extends 'base.html' %}
{% block title %}{{ album.title }} - {{ category.name }} - 图片库{% endblock %}
{% block content %}
<nav class="breadcrumbs">
  <a href="{{ url_for('index') }}">全部分类</a>
  <span>/</span>
  <a href="{{ url_for('view_category', category=category.name) }}">{{ category.name }}</a>
  <span>/</span>
  <span>{{ album.title }}</span>
</nav>

<header class="album-head">
  <h1 class="album-title">{{ album.title }}</h1>
  <div class="album-sub">{{ album.date|cn_date }} · {{ album.images|length }} 张</div>
</header>

<div class="grid images">
  {% for img in album.images %}
  <a class="img-card" href="{{ url_for('media', filename=album.rel_dir ~ '/' ~ img) }}" target="_blank" rel="noopener">
    <img loading="lazy" src="{{ url_for('media', filename=album.rel_dir ~ '/' ~ img) }}" alt="{{ album.title }} - {{ loop.index }}">
  </a>
  {% endfor %}
</div>
{% endblock %}
```

@tab 9. static/style.css（现代、简洁、美观）

```css
/* static/style.css */
:root{
  --bg:#0b0c0f;
  --bg-soft:#11131a;
  --text:#e6e9ef;
  --muted:#a0a7b4;
  --card:#141824;
  --accent:#7aa2f7;
  --shadow: 0 10px 30px rgba(0,0,0,.35);
  --radius:22px;
}

html{background:#f7f8fb;color:#121418;-webkit-font-smoothing:antialiased;}
html.dark{background:var(--bg);color:var(--text);}

body{margin:0;font:16px/1.6 ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "PingFang SC", "Noto Sans CJK SC", "Microsoft Yahei", sans-serif;}

.container{max-width:1100px;margin:0 auto;padding:24px;}

.site-header{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.7);backdrop-filter: blur(10px);border-bottom:1px solid #eef1f4;}
html.dark .site-header{background:rgba(17,19,26,.55);border-color:#1d2330;}
.header-inner{display:flex;align-items:center;gap:16px;}
.brand{font-weight:800;font-size:20px;text-decoration:none;color:inherit}
.nav a{color:inherit;text-decoration:none;opacity:.9;margin-right:12px}
.theme-toggle{border:0;background:transparent;font-size:18px;cursor:pointer}

.site-footer{opacity:.7;border-top:1px dashed #e6e8ee;margin-top:24px;padding-top:16px}
html.dark .site-footer{border-top-color:#1d2330}

.page-title{font-size:28px;font-weight:800;margin:8px 0 16px}
.muted{opacity:.65}

.breadcrumbs{opacity:.7;margin:8px 0 12px}
.breadcrumbs a{color:inherit}

.grid{display:grid;grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));gap:16px}
.grid.images{grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));}

.card{display:block;border-radius:var(--radius);overflow:hidden;background:#fff;box-shadow: 0 6px 20px rgba(0,0,0,.06);transition: transform .2s ease, box-shadow .2s ease}
html.dark .card{background:var(--card);box-shadow: var(--shadow)}
.card:hover{transform: translateY(-2px);box-shadow: 0 10px 24px rgba(0,0,0,.12)}
html.dark .card:hover{box-shadow: 0 14px 40px rgba(0,0,0,.45)}

.card-cover{position:relative;aspect-ratio: 16/10;background:#f0f2f7;}
html.dark .card-cover{background:var(--bg-soft)}
.card-cover img{width:100%;height:100%;object-fit:cover;display:block}
.placeholder{width:100%;height:100%;display:grid;place-items:center;color:#bbb}

.ribbon{position:absolute;left:12px;bottom:12px;padding:4px 10px;border-radius:999px;background:rgba(0,0,0,.65);color:#fff;font-size:12px}

.card-body{padding:12px 14px}
.card-title{font-weight:700;font-size:16px;letter-spacing:.2px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}
.card-meta{margin-top:8px;display:flex;gap:8px;align-items:center}
.badge{font-size:12px;padding:3px 8px;border-radius:999px;background:#eef1f6}
html.dark .badge{background:#1d2330}

.album-head{margin:4px 0 16px}
.album-title{margin:0;font-size:24px;font-weight:800}
.album-sub{opacity:.7;margin-top:4px}

.img-card{border-radius:16px;overflow:hidden;background:#fff;display:block}
html.dark .img-card{background:var(--card)}
.img-card img{width:100%;height:240px;object-fit:cover;display:block}

@media (max-width: 640px){
  .container{padding:14px}
  .img-card img{height:200px}
}
```

@tab 10. 命名建议

- 分类：`images/北京/ ...`、`images/厦门/ ...`（中文 OK）
- 相册：**推荐** `标题 YYYY 年 M 月 D 日` 或 `YYYY-YY-DD 标题`，无日也可（默认 1 号）。

> 例：`天安门 2025 年 8 月 24 日`、`2025-08-24 天安门`、`南门涮肉2025 年 8 月 25 日`

@tab 11. 可拓展点（已预留结构）

- 生成缩略图提速（Pillow/Thumbor/Nginx 缓存）。
- 站内搜索与相册筛选（按年月/关键字）。
- 轻量灯箱（原生 JS/CSS）或懒加载占位骨架。
- 部署到内网/服务器（Gunicorn + Nginx）。

:::

## V0.3 版本

::: tip 提示词

现在需要可以支持每个分类文件夹下面编写txt文件来描述此分类并渲染出来，其次每张图片点开之后的灯箱需要实现：文字说明（在txt文件中以key=desc（key：代表图片名称，desc：代表图片描述）未设置则不显示、显示图片元数据（如果有）、底部显示该页面所有图片支持点击切换等。

:::

## Plan

- [ ] 纪念日是会伴随着相片诞生的，加上【喵喵纪念日】
- [ ] 每个分类下面显示 desc 说明；（浪漫）
- [ ] API 实现图片自动分类——划分图片类别并创建对应的文件夹；
- [ ] 每个分类下都有一个上传图片的按钮，直接上传到该分类图片文件夹下（中）；
- [ ] 把图片所拥有的元数据展现出来；
- [ ] 制作时间轴图片以及文字描述；
- [ ] 可以选择查看原图，否则直接显示压缩后的图片；







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