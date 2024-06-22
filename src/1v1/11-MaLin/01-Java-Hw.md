---
title: 01-Coursework 1：Property Viewer
icon: java
date: 2022-10-27 23:19:56
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - Python 1v1
    - 英国国王学院
tag:
    - 1v1
    - Python 1v1
    - 英国国王学院
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

-   [ppa翻译.txt](/1v1/10-MaLin/01-Java-Hw/ppa翻译.txt)

## 开始:

1.   下载 property
2.   四个中已经有三个完成了，完成 PropertyViewer

## Overview：

(现有 class 的概括）

-   Property: 表示单个属性，点开内部看我需要的方法，如 getID, getLatitude, and toggleFavourite.

-   Portfolio: 属性的集合通过在磁盘上指定一个包含某些物业数据的电子表格建立的(`airbnb-london.csv` —默认情况下的文件，这些是实际数据）它会自动加载它在电子表格中找到的所有属性。我可以随意向电子表格添加更多属性
-   PropertyViewer：展示了应用程序的 GUI。它会绘制主窗口，按钮，和我在屏幕上看到的所有东西如果用户点击按钮，该 call 将被传递到相关的PropertyViewer method Property 可以 call 它来在接口中显示 Property 或 String
-   PropertyViewer: 运行 property viewer 的逻辑我需要完成的东西启动此应用程序而实例化的 class

## 基本任务：

1.   应用启动时，应该自动显示第一个 protfolio（index 0）里的 property
2.   对于显示的任何 property，property 的 ID 都应该显示在窗口顶部，CUI class 有一个 method 去做这个
3.   当 Toggle Favourite 按钮被按下的时候，property 里的 IsFavourite filed 应该被更新。Property class 可以做这个
4.   窗口底部的栏应该显示是否property已经被用户标记为他们的favourites（收藏夹）之一
5.   当 Next 按钮按下，下一个 property 应该被显示伴随它正确的数据。顶部的 ID 也应该被正确更新，以及 property 是否为用户的 favourite 之一。如果在上一个 property 按下 Next 按钮，应用程序应该返回第一个 property
6.   当按下 Previous 按钮时，上一个 property 应该被显示和它正确的数据。顶部的 ID 应该正确更新，以及 property 是否为用户的 favourite 之一。如果在第一个property按下Previous按钮，应用程序应该转到最后一个property
7.   在 Propertyviewer class 中，一些 method 没有文档。提供适当的 method level 注释

## 无语挑战：

1.   实现一个名为 getNumberOfPropertiesViewed 的 method，该 method 返回从应用程序启动以来已经查看的属性数量。返回类型是 int。两次查看同一个属性算作看了两次
2.   实现一个名为 averagePropertyPrice 的 method，该 method 返回到目前为止查看的属性的平均价格。返回类型 int
3.   e.g.先看 A（50）再看 B(20）然后再看 A,平均价格在（50+20+50)/3
4.   View Property on Map 这个按钮是坏的，因为它只在地图上显示 Bush House。修复此功能，让它在地图上显示属性的位置
5.   添加一个新的 Statistic 按钮在程序上，点开后将打开一个新窗口，显示来自无语挑战的两个新 method 的统计信息

## PropertyViewer.java

```python
import java.awt.Desktop;
import java.net.URI;
import java.net.URISyntaxException;

/**
 * This project implements a simple application. Properties from a fixed
 * file can be displayed.
 *
 * @author Michael Kölling and Josh Murphy
 * @version 1.0
 */
public class PropertyViewer {
    private PropertyViewerGUI gui;     // the Graphical User Interface
    private Portfolio portfolio;
    private Property property; // 引用
    static int row = 0;
    static int view_count = 1;

    /**
     * Create a PropertyViewer and display its GUI on screen.
     */
    public PropertyViewer() {
        gui = new PropertyViewerGUI(this);
        portfolio = new Portfolio("airbnb-london.csv");
        property = portfolio.getProperty(row);
        gui.showID(property);
        gui.showProperty(property);
        gui.showFavourite(property);
    }

    /**
     *
     */
    public void nextProperty() {
        view_count = view_count + 1;
        row = row + 1;
        if (row >= portfolio.numberOfProperties()) {
            row = 0;
        }
        property = portfolio.getProperty(row);
        gui.showID(property);
        gui.showProperty(property);
        gui.showFavourite(property);
    }

    /**
     *
     */
    public void previousProperty() {
        view_count = view_count + 1;
        row = row - 1;
        if (row < 0) {
            row = portfolio.numberOfProperties() - 1;
        }
        property = portfolio.getProperty(row);
        gui.showID(property);
        gui.showProperty(property);
        gui.showFavourite(property);

    }

    /**
     *
     */
    public void toggleFavourite() {
        property = portfolio.getProperty(row);  // index 获取当前数据，index
        property.toggleFavourite(); // 标记喜欢的，更新喜欢的
        gui.showFavourite(property); // gui 显示出来
    }


    //----- methods for challenge tasks -----

    /**
     * This method opens the system's default internet browser
     * The Google maps page should show the current properties location on the map.
     */
    public void viewMap() throws Exception {
        double latitude;
        double longitude;
        latitude = property.getLatitude();
        longitude = property.getLongitude();

        URI uri = new URI("https://www.google.com/maps/place/" + latitude + "," + longitude);
        java.awt.Desktop.getDesktop().browse(uri);
    }

    /**
     *
     */
    public int getNumberOfPropertiesViewed() {
        return 0;
    }

    /**
     *
     */
    public int averagePropertyPrice() {
        return 0;
    }
}

```





::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
