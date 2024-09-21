import time  # 引入time模块

version = 0.3
base_root = '/Users/huangjiabao/GitHub/WebSite/AndersonHJB.github.io'
string = """<!-- tab 喵喵纪念日-V{version} -->
> 发布日期📅：{{% span cyan log, {time} %}}
{{% tabs anniversary3 %}}
<!-- tab 1. 新建页面 -->
在命令行输入如下命令：

- `hexo new page anniversary`

修改头部信息：

```markdown
---
title: anniversary
date: 2024-09-16 20:31:37
type: 'anniversary'
top_background: /img/anniversary/anniversary5.webp
aside: false
---
```
<!-- endtab -->

<!-- tab 2. 创建 anniversary.pug -->
- Path: `/themes/anzhiyu/layout/includes/page/anniversary.pug`

**代码如下：**

```html
{anniversary_pug}
```
<!-- endtab -->

<!-- tab 3. 创建 anniversary.css -->
- Path: `/source/static/css/anniversary.css`

**直接访问链接获取最新版**：[anniversary.css](https://blog.bornforthis.cn/static/css/anniversary.css)

<!-- endtab -->

<!-- tab 4. anniversary.js -->
- Path: `/source/static/js/anniversary.js`

**直接访问链接获取最新版**：[anniversary.js](https://blog.bornforthis.cn/static/js/anniversary.js)

<!-- endtab -->

<!-- tab 5. anniversary.yml -->
- Path: `/source/_data/anniversary.yml`

**代码如下：**

```yml
{anniversary_yml}
```

<!-- endtab -->

{{% endtabs %}}
<!-- endtab -->
{{% endtabs %}}
<!-- endtab -->
"""


def generate_text(paths):
    text = ''
    for path in paths:
        filename = path.split('/')[-1]
        with open(base_root + path, 'r') as f:
            content = f.read()
            text += filename + ':\n' + content + '\n'
    with open('text.txt', 'w') as f:
        f.write(text)


def read_text(path):
    with open(base_root + path, 'r') as f:
        return f.read()

def save_text(content):
    with open('post.txt', 'w') as f:
        f.write(content)


if __name__ == '__main__':
    paths = [
        '/source/_data/anniversary.yml',
        '/source/static/js/anniversary.js',
        '/themes/anzhiyu/layout/includes/page/anniversary.pug',
        '/source/static/css/anniversary.css'
    ]
    generate_text(paths)
    result = string.format(
        version=version,
        time=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),
        anniversary_pug=read_text(paths[2]),
        # anniversary_css=read_text(paths[3]),
        # anniversary_js=read_text(paths[1]),
        anniversary_yml=read_text(paths[0]),
    )
    # print(result)
    save_text(result)

