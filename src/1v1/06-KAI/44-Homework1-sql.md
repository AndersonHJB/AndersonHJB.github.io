---
title: Homework1 Sql
icon: mysql
date: 2024-01-25 14:34:45
author: AI悦创
isOriginal: true
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
---

NYU Shanghai

Engineering and Computer Science CSCI-SHU 213

Homework No. 01: Total points: 100.

DBMS Installation:

You will need access to a database management system (DBMS) and web server for some of the homework assignments and for the course project. You may use either Oracle or MySQL for the homework assignments and projects. I will occasionally demonstrate material using MySQL. With a little effort you’ll be able to translate these examples to Oracle, but it will probably be slightly easier for you to use MySQL.

**Installing database and web server software:**

Download a free Appache/MySQL/PHP (xampp) package,

such as [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)

This includes MySQL and the phpMyAdmin graphical user interface (GUI) and other software that you may want to use for the project (Web server and PHP interpreter). Please follow the official instructions from the website.

Note:

for Mac users, PHP8.0 may not compatible with the GUI. If you see error message such as "Deprecation Notice", please try install the package with PHP7 instead:

[http://www.apachefriends.org/xampp-files/7.4.14/xampp-osx-7.4.14-1-vm.dmg](http://www.apachefriends.org/xampp-files/7.4.14/xampp-osx-7.4.14-1-vm.dmg)

Homework #1 description:

You may discuss this homework with other students, but you should install the software on your own laptop, execute the SQL statements on your own installation, and hand in your own results.

Please install xampp (per previous instructions), and get familiar with using it. If you're using the latest version of MySQL the default storage engine will be InnoDB. If not, either upgrade to the latest MySQL version or set MySQL's default engine to InnoDB. (See [https://dev.mysql.com/doc/refman/8.0/en/storage-engine-setting.html](https://dev.mysql.com/doc/refman/8.0/en/storage-engine-setting.html) ).

Note: In the past, people who had older versions have had some problems with the installation. Might be safer to uninstall the old one first.

Open XAMPP Control (“manager-osx” in Mac) and start Apache and MySQL, use phpMyAdmin to create a database called university and use the GUI or execute "use university" to make that the current database. Download the **university_ddl.sql** and **university_inserts.sql** files from assignments. (These files are from the sample data section of the textbook's web site *http://www.db-book.com/*. The DDL file has been modified so that it works with MySQL running InnoDB. If you're using Oracle, you can use the DDL file from the book's web page.) Using phpMyAdmin, import the files into MySQL in order to create and populate the university database.

Execute

```sql
SELECT name, dept_name FROM instructor WHERE salary > 80000
```

Take a screenshot of the result. This should demonstrate that you are using a GUI (not just executing the query from a terminal window.) Save the query results to a PDF file. (In phpMyAdmin, this can be done by clicking Export in the Query results operations list, below the query results.

Hand in:

1. A PDF file with the query results.
2. A screenshot showing how the GUI displays the query result.

You should also spend some time getting familiar with the University database, with MySQL, and with the GUI:

- Try inserting additional rows into the courses table,
- Try executing some of the queries from the book,
- Try creating another table.
- What happens when you try to insert another instructor with the ID 58583? (note: it should fail and give an error message)
- What happens when you try to insert an instructor with dept name 'CS'? (note: it should fail and give an error message).
- What happens when you try to execute a query with a syntax error? (note: it should fail and give an error message)

(No need to hand in the results of playing around with the system.)





欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！


::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)