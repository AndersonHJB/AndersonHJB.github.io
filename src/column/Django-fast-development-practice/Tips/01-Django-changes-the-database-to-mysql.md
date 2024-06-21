---
title: 01-Django 更换数据库为 MySql
date: 2023-02-27 17:33:28
icon: django
author: AI悦创
isOriginal: true
category: 
    - django体系课
tag:
    - django体系课
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
footer: 长期招收编程一对一学员！微信：Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>
---

要将 Django 的数据库更换为 MySQL，您需要执行以下步骤：

1. 安装 MySQL 数据库和 Python 的 mysqlclient 模块。
2. 修改 Django 项目的 `settings.py` 文件，将 DATABASES 中的配置修改为以下内容：

## 1. 安装 mysqlclient

```python
pip install mysqlclient 
```

## 2. 创建 mysql 数据库

### 2.1 启动 MySql 服务

```cmd
mysql.server start
# ------
(venv) ➜  DjangoBlog git:(master) mysql.server start
Starting MySQL
 SUCCESS!
```

### 2.2 创建数据库

在 MySQL 数据库中创建您指定的数据库，并确保您指定的 MySQL 用户具有对该数据库的访问权限。

```sql
mysql> create database django_db;
Query OK, 1 row affected (0.00 sec)
```

## 3. 更换 Django 数据库

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_database_name',
        'USER': 'your_mysql_username',
        'PASSWORD': 'your_mysql_password',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}
```

在上述配置中，您需要将 `your_database_name`、`your_mysql_username` 和 `your_mysql_password` 替换为您自己的数据库名称、 MySQL 用户名和 MySQL 密码。

## 4. 数据库迁移

运行以下 Django 命令以创建 MySQL 数据库表：

```python
python manage.py makemigrations
python manage.py migrate
```

这些命令将在 MySQL 数据库中创建与您的 Django 模型对应的数据库表。

现在，您的 Django 项目将使用 MySQL 数据库来存储数据。

::: info 提示

如果您忘记了密码，您可以使用以下命令重置 MySQL 密码：`sudo mysql_secure_installation` 然后按照提示进行操作来重置密码。

:::



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
