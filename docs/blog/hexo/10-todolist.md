---
title: 安知鱼主题添加待办清单
date: 2024-08-25 20:30:36
author: AI悦创
isOriginal: true
icon: blog
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

你好，我是悦创。

耽误太多时间，事情可就做不完了。一份清单页有助于检视自己的目标，本文提供为hexo博客新建一个清单页的教程。
大部分原代码来自[轻笑](https://www.qcqx.cn/article/9875347c.html)，本文仅做微调及适配主题。

## 1. 效果预览

- [https://blog.bornforthis.cn/todolist/](https://blog.bornforthis.cn/todolist/)
- Github: [https://github.com/AndersonHJB/AndersonHJB.github.io/commit/6a1e098b37b3793eed4860ad252f96096a06fc8d](https://github.com/AndersonHJB/AndersonHJB.github.io/commit/6a1e098b37b3793eed4860ad252f96096a06fc8d)

## 2. 开始配置

::: tabs

@tab 1. 修改文件

- 在  `\themes\anzhiyu\layout\page.pug` 中新增以下内容

```pug
      when 'music'
        include includes/page/music.pug
+     when 'todolist'
+       include includes/page/todolist.pug
      default
        include includes/page/default-page.pug
```

@tab 2. 新建文件：todolist.pug

- 在 `\themes\anzhiyu\layout\includes\page\` 中新建文件 `todolist.pug` 并增加以下内容

- Path: `themes/anzhiyu/layout/includes/page/todolist.pug`

```pug
#todolist-box
    - let todo_background = page.top_background
    .author-content.author-content-item.todolist.single(style=`${todo_background ? `background: url(${todo_background}) top / cover no-repeat;` : ""}`)
        .card-content
            .author-content-item-tips Todo
            span.author-content-item-title 待办清单
            .content-bottom
            .tips 耽误太多时间，事情可就做不完了
            .banner-button-group
              a.banner-button(onclick='pjax.loadUrl("/about/")')
                i.anzhiyufont.anzhiyu-icon-arrow-circle-right(style='font-size: 1.5rem')
                span.banner-button-text 我的更多
    #todolist-main
        #todolist-left
            each i in site.data.todolist
                if i.seat == 'left'
                    .todolist-item
                        h3.todolist-title=i.class_name
                        ul.todolist-ul
                            each item in i.todo_list
                                 - var listItemClass = item.completed ? 'todolist-li-done' : 'todolist-li'
                                 li(class=listItemClass)
                                    if item.completed
                                        i.fa-regular.fa-circle-check
                                    else 
                                        i.fa-regular.fa-circle
                                    span=item.content
        #todolist-right
            each i in site.data.todolist
                if i.seat == 'right'
                    .todolist-item
                        h3.todolist-title=i.class_name
                        ul.todolist-ul
                            each item in i.todo_list
                                 - var listItemClass = item.completed ? 'todolist-li-done' : 'todolist-li'
                                 li(class=listItemClass)
                                    if item.completed
                                        i.fa-regular.fa-circle-check
                                    else 
                                        i.fa-regular.fa-circle
                                    span=item.content
```

@tab 3. 新建 css

新增 css 内容

- 页面已经有了，现在缺少 css 内容装饰它

- 新建文件 `\source\css\todolist.css` 或在已引入的 css 中新增以下内容

```css
body[data-type="todolist"] #web_bg {
  background: var(--anzhiyu-background);
}
body[data-type="todolist"] #page {
  border: 0;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  background: 0 0 !important;
}
body[data-type="todolist"] #page .page-title {
  display: none;
}
/* Todolist */
#todolist-box{
  margin: 0 10px;
}
#todolist-main{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px 0 10px;
}
#todolist-main li{
  list-style:none;
  font-size: 17px;
}
#todolist-main ul{
  margin: 0;
  padding: 0;
}
#todolist-left{
  width: 50%;
  padding: 0 8px 0 0;
}
#todolist-right{
  width: 50%;
  padding: 0 0 0 8px;
}
.todolist-item{
  position: relative;
  background: #fae4df;
  border-radius: 12px;
  padding: 10px 1rem 1.2rem;
  border: 2px dashed #f7a796;
  margin-bottom: 1rem;
}
[data-theme=dark]
.todolist-item{
  background: #242424;
  border: 2px dashed #51908b;
}
li.todolist-li i{
  margin-left: 10px;
}
h3.todolist-title{
  margin: 0!important;
  border-bottom: var(--todo-border);
}
li.todolist-li{
  border-bottom: var(--todo-border);
  font-weight: normal;
  margin-left: -10px;
}
li.todolist-li-done{
  border-bottom: var(--todo-border);
  font-weight: normal;
  text-decoration: line-through;
}
.todolist-li span{
  margin-left: 5px;
}
.todolist-li-done span{
  margin-left: 5px;
}
@media screen and (max-width:700px){
  #todolist-left,#todolist-right{
      width: 100%;
      padding: 0;
  }
}
```

@tab 引入 CSS

- 在 `_config.anzhiyu.yml` 主题配置文件下 `inject` 配置项中 `head` 处
- 引入 `todolist.css` 文件

```yaml
inject:
  head:
    - <link rel="stylesheet" href="/css/todolist.css"> # 待办清单页
```



@tab 新建 todolist 页面

- 新建 `md` 页面文件
- 新建文件 `\source\todolist\index.md` 并按以下格式填写

- 上面直接使用：`hexo new page todolist` 也可以

- `top_background` 也就是顶部图，自行填写

```markdown
---
title: todolist
date: 2024-09-03 14:07:13
type: todolist
top_background: https://blog.bornforthis.cn/img/todolist/todolist.jpeg
---
```

@tab 配置页面 yaml

- 新建 `yml` 文件
- 新建 `\source\_data\todolist.yml` 并参考以下格式输入内容

```yaml
# seat控制清单在左栏还是右栏显示，completed控制是否已完成
- class_name: 想做的项目
  seat: left
  todo_list:
    - content: 主页
      completed: false
    - content: 小程序
      completed: false

- class_name: 想看的书
  seat: left
  todo_list:
    - content: 《骆驼祥子》
      completed: false
    - content: 《活着》
      completed: false

- class_name: 想买的东西
  seat: left
  todo_list:
    - content: 东西
      completed: true
    - content: 机械硬盘盒
      completed: true

- class_name: 想学的技术
  seat: right
  todo_list:
    - content: 骑自行车
      completed: false
    - content: 修自行车
      completed: false

- class_name: 想去的地方
  seat: right
  todo_list:
    - content: 桂林
      completed: true
    - content: 心里
      completed: false
```



:::

## 3. 大功告成

可以执行 hexo 三连查看效果啦！

## 4. 题内话

起初在新建清单页时是想充分使用 memos 来渲染这个页面，其他博主也有提供相关教程，动态化的待办清单或许更加方便，但最终我还是选用了静态的方案。可能是自己没有太多的待办事项可以往上写吧。总之，看看我能多久更新它一次。

## 5. 样式优化

::: code-tabs

@tab V0.1-显示圆心和对勾

```css
body[data-type="todolist"] #web_bg {
    background: var(--anzhiyu-background);
}

body[data-type="todolist"] #page {
    border: 0;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    background: 0 0 !important;
}

body[data-type="todolist"] #page .page-title {
    display: none;
}

/* Todolist */
#todolist-box {
    margin: 0 10px;
}

#todolist-main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 16px 0 10px;
}

#todolist-main ul {
    margin: 0;
    padding: 0;
}

#todolist-main li {
    list-style: none;
    font-size: 17px;
    position: relative;
    /* 相对定位以便添加自定义样式 */
    padding-left: 20px;
    /* 为圆圈和对勾预留更多空间，增加间距 */
    margin-bottom: 10px;
    /* 每个任务项下方的间距 */
    border-bottom: 1px solid #ccc;
    /* 任务项下方的横线 */
}

#todolist-left {
    width: 50%;
    padding: 0 8px 0 0;
}

#todolist-right {
    width: 50%;
    padding: 0 0 0 8px;
}

.todolist-item {
    position: relative;
    background: #fae4df;
    border-radius: 12px;
    padding: 10px 1rem 1.2rem;
    border: 2px dashed #f7a796;
    margin-bottom: 1rem;
}

[data-theme=dark] .todolist-item {
    background: #242424;
    border: 2px dashed #51908b;
}

li.todolist-li::before {
    content: '○';
    /* 使用 Unicode 字符表示空心圆 */
    position: absolute;
    left: 0;
    /* 调整此处来控制空心圆与任务文本的水平距离 */
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: #000;
    width: 30px;
    /* 统一宽度确保与对勾位置一致 */
    display: inline-block;
    /* 使用内联块来统一宽度 */
    text-align: center;
    /* 居中对齐 */
}

li.todolist-li-done::before {
    content: '✔';
    /* 使用 Unicode 字符表示打勾的空心圆 */
    position: absolute;
    left: 0;
    /* 调整此处来控制对勾与任务文本的水平距离 */
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: #51908b;
    /* 可根据主题调整颜色 */
    width: 30px;
    /* 统一宽度确保与空心圆位置一致 */
    display: inline-block;
    /* 使用内联块来统一宽度 */
    text-align: center;
    /* 居中对齐 */
}

li.todolist-li i {
    margin-left: 10px;
}

h3.todolist-title {
    margin: 0 !important;
    border-bottom: var(--todo-border);
}

li.todolist-li {
    font-weight: normal;
    margin-left: -10px;
}

li.todolist-li-done {
    font-weight: normal;
    text-decoration: line-through;
    color: #999;
    /* 已完成任务的文本颜色 */
    margin-left: -10px;
    /* 与未完成任务项保持一致 */
}

.todolist-li span {
    margin-left: 5px;
}

.todolist-li-done span {
    margin-left: 5px;
}

@media screen and (max-width: 700px) {

    #todolist-left,
    #todolist-right {
        width: 100%;
        padding: 0;
    }
}
```



:::

## 6. 最新版本

1. 实现任务创建日期：[https://github.com/AndersonHJB/AndersonHJB.github.io/commit/193ae10230046748f6e1f3efe66d2668e31a8c6a](https://github.com/AndersonHJB/AndersonHJB.github.io/commit/193ae10230046748f6e1f3efe66d2668e31a8c6a)
2. 实现添加任务距离日期:[https://github.com/AndersonHJB/AndersonHJB.github.io/commit/dda8d0b6f14332ff0f60f95f8f746b23cb193d8a](https://github.com/AndersonHJB/AndersonHJB.github.io/commit/dda8d0b6f14332ff0f60f95f8f746b23cb193d8a)



## 7. 计划

- [x] 功能计划
    - [x] 实现任务是否完成，完成则显示完成时间；
    - [x] 完成任务的卡片，也就是下面任务计划全为 True，则折叠起来。用户可以点击自行展开。
    - [ ] 可以实现分区计划清单：也就是用户可以设置分组
        - [ ] 分组名称
        - [ ] 分组进展
    - [ ] 实现任务完成进度条，按照所有的 true、false 数量汇总并进行计算得出；
    - [ ] 实现正在做的表示，使用 `completed: ing` 来标识
    - [ ] 实现 true 的自动排序到所有任务之前，false 排序到后面，更加规整；

**文档式折叠框**，其设计类似常见的文档目录折叠效果。折叠框具有以下特点：

1. **标题行带有箭头图标**：箭头默认指向右侧，表示内容被折叠。当用户点击标题行时，箭头旋转90度，指向下方，同时展开内容。
2. **响应用户交互**：箭头的方向会随着折叠状态的变化而旋转，提示用户当前内容是展开还是折叠。

## 8. 发布版本

**个人维护链接：**

- `nav`: `待办事: /todolist/ || anzhiyu-icon-calendar-alt` [L18](https://github.com/AndersonHJB/AndersonHJB.github.io/blob/main/_config.anzhiyu.yml#L18)

    - Path: `_config.anzhiyu.yml`

- `index.md`: [index.md](https://github.com/AndersonHJB/AndersonHJB.github.io/blob/main/source/todolist/index.md)

    - Path: `index.md`

- `page.pug`: [page.pug](https://github.com/AndersonHJB/AndersonHJB.github.io/blob/main/themes/anzhiyu/layout/page.pug)

    - Path: `\themes\anzhiyu\layout\page.pug`

- `todolist.pug`: [todolist.pug](https://github.com/AndersonHJB/AndersonHJB.github.io/blob/main/themes/anzhiyu/layout/includes/page/todolist.pug)

    - Path: `/themes/anzhiyu/layout/includes/page/todolist.pug`

- `todolist.css`: [todolist.css](https://github.com/AndersonHJB/AndersonHJB.github.io/blob/main/source/static/css/todolist.css)

    - Path: `/source/static/css/todolist.css`

- `todolist.yml`: [todolist.yml](https://github.com/AndersonHJB/AndersonHJB.github.io/blob/main/source/_data/todolist.yml)

    - Path: `/source/_data/todolist.yml`

- JavaScript:

    - todo-date-calculation.js: [todo-date-calculation.js](https://github.com/AndersonHJB/AndersonHJB.github.io/blob/main/source/static/js/todo-date-calculation.js) 距离任务创建时间计算器;
    - todo-toggle.js: [todo-toggle.js](https://github.com/AndersonHJB/AndersonHJB.github.io/blob/main/source/static/js/todo-toggle.js) 实现折叠;

- inject: 

    ```yaml {79}
    # Inject
    # Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
    # 插入代码到头部 </head> 之前 和 底部 </body> 之前
    inject:
      head:
        - <link rel="stylesheet" href="/static/css/imgloaded.css?1"> 
        - <link rel="stylesheet" href="/static/css/todolist.css"> # 待办清单页
        - <script src="/static/js/todo-date-calculation.js"></script>
        - <script src="/static/js/todo-toggle.js"></script>
    ```







欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)

::: details

- [为你的博客添加待办清单页](https://blog.kouseki.cn/posts/bc0.html#%E4%B8%89%E3%80%81%E5%A4%A7%E5%8A%9F%E5%91%8A%E6%88%90)
- 

:::



