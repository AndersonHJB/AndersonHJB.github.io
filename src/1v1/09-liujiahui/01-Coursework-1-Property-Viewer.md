---
title: Coursework 1：Property Viewer
icon: java
date: 2022-10-19 19:07:35
author: AI悦创
isOriginal: true
category: 
    - Java 1v1
    - 1v1
tag:
    - Java 1v1
    - 1v1
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
editLink: true
backToTop: true
toc: true
---

## 资料

-   [Asignment_1.pdf](/1v1/09-liujiahui/01-Coursework-1-Property-Viewer/Asignment_1.pdf)
-   [cw1-base.zip](/1v1/09-liujiahui/01-Coursework-1-Property-Viewer/cw1-base.zip)
-   [PPA-Term1-01.pdf](/1v1/09-liujiahui/kejian/PPA-Term1-01.pdf)
-   [PPA-Term1-02.pdf](/1v1/09-liujiahui/kejian/PPA-Term1-02.pdf)
-   [PPA-Term1-03.pdf](/1v1/09-liujiahui/kejian/PPA-Term1-03.pdf)
-   [PPA-Term1-04.pdf](/1v1/09-liujiahui/kejian/PPA-Term1-04.pdf)
-   [PPA-Term1-05.pdf](/1v1/09-liujiahui/kejian/PPA-Term1-05.pdf)
-   [PPA-Term1-05.pdf](/1v1/09-liujiahui/kejian/PPA-Term1-05.pdf)

## 运行代码

```java
/**
 * @author aiyc
 * @version 1.0
 */
public class test01 {
    public static void main(String[] args) {
        PropertyViewer propertyViewer = new PropertyViewer();
    }
}
```

## PropertyViewer.java


```java
import javax.swing.*;
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
    /*private : 在同一类内可见。使用对象：变量、方法。 注意：不能修饰类（外部类）*/
    private Property property;
    private PropertyViewerGUI gui;     // the Graphical User Interface
    private Portfolio portfolio;
    /*为了实现一些其他的功能，Java 也提供了许多非访问修饰符。
    static 修饰符，用来修饰类方法和类变量。
    final 修饰符，用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。
    abstract 修饰符，用来创建抽象类和抽象方法。
    synchronized 和 volatile 修饰符，主要用于线程的编程。
    static 修饰符
    静态变量：
        static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为类变量。局部变量不能被声明为 static 变量。
    静态方法：
        static 关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。
*/
    static int index = 0;
    static int View_Number = 1;
    static int Total_Money = 0;
    static int average;


    /**
     * Create a PropertyViewer and display its GUI on screen.
     */
    public PropertyViewer() {
        gui = new PropertyViewerGUI(this);
        portfolio = new Portfolio("airbnb-london.csv");
        property = portfolio.getProperty(index);
        gui.showID(property);
        gui.showProperty(property);
        gui.showFavourite(property);
        Total_Money += property.getPrice();
    }

    /**
     * 按下 **"Next"** 按钮时，下一个地产项目应该被显示出来，并有正确的数据。此外，顶部的ID应该被正确更新，以及该地产是否是用户的最爱之一。
     * 如果在最后一个地产上按下 **"Next"** 按钮，应用程序应该返回到第一个地产。
     */
    public void nextProperty() {
        // 查看次数
        View_Number += 1;
        index += 1;
        if (index >= portfolio.numberOfProperties()) {
            index = 0;
        }
        property = portfolio.getProperty(index);
        System.out.println("啊哈，我被翻牌啦，来侍寝～");
        gui.showID(property);
        gui.showProperty(property);
        gui.showFavourite(property);
        Total_Money += property.getPrice();
    }

    /**
     * **“Previous”** 按钮被按下时，上一个地产应该被显示出来，并有正确的数据。此外，顶部的ID应该被正确更新，以及该地产是否是用户的最爱之一。
     * 如果在第一个地产上按下 **“Previous”** 按钮，应用程序应该转到最后一个地产。
     */
    public void previousProperty() {
        // 查看次数
        View_Number += 1;
        index -= 1;
        if (index < 0) {
            index = portfolio.numberOfProperties() - 1;
        }
        property = portfolio.getProperty(index);
        gui.showID(property);
        gui.showProperty(property);
        gui.showFavourite(property);
        Total_Money += property.getPrice();

    }

    /**
     * "Toggle Favourite" 按钮被按下时，该属性的 **isFavourite 字段** 应该被更新
     */
    public void toggleFavourite() {
        property = portfolio.getProperty(index);
        property.toggleFavourite();
        gui.showFavourite(property);
    }


    //----- methods for challenge tasks -----

    /**
     * This method opens the system's default internet browser
     * The Google maps page should show the current properties location on the map.
     */
    public void viewMap() throws Exception {
//        double latitude = 51.512793;
//        double longitude = -0.117149;
        double latitude;
        double longitude;
        latitude = property.getLatitude();
        longitude = property.getLongitude();

        URI uri = new URI("https://www.google.com/maps/place/" + latitude + "," + longitude);
        Desktop.getDesktop().browse(uri);
    }

    /**
     *
     */
    public int getNumberOfPropertiesViewed() {
        // 查看次数
        View_Number += 1;
        return View_Number;
    }

    /**
     *
     */
    public int averagePropertyPrice() {
//        int average;
        average = Total_Money / View_Number;
        return average;
    }

    public void Statistics() {
        averagePropertyPrice();
        JFrame frame = new JFrame("Statistics");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 300);
//        JButton button1 = new JButton("" + average + "\n" + View_Number);
//        JFrame Frame = new JFrame("HelloWorldSwing");
        JTextArea text1 = new JTextArea("查看次数：" + View_Number + "\n平均数：" + average);
        frame.getContentPane().add(text1);
//        frame.getContentPane().add(text2);
        frame.setVisible(true);
//            }
//    }
    }
}
```

## PropertyViewerGUI.java

```java
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;

import java.io.File;

import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

/**
 * PropertyViewerGUI provides the GUI for the project. It displays the property
 * and strings, and it listens to button clicks.

 * @author Michael Kölling, David J Barnes, and Josh Murphy 
 * @version 3.0
 */
public class PropertyViewerGUI
{
    // fields:
    private JFrame frame;
    private JPanel propertyPanel;
    private JLabel idLabel;
    private JLabel favouriteLabel;
    
    private JTextField hostIDLabel;
    private JTextField hostNameLabel;
    private JTextField neighbourhoodLabel;
    private JTextField roomTypeLabel;
    private JTextField priceLabel;
    private JTextField minNightsLabel;
    private JTextArea descriptionLabel;
    
    private Property currentProperty;
    private PropertyViewer viewer;
    private boolean fixedSize;
        
    /**
     * Create a PropertyViewer and display its GUI on screen.
     */
    public PropertyViewerGUI(PropertyViewer viewer)
    {
        currentProperty = null;
        this.viewer = viewer;
        fixedSize = false;
        makeFrame();
        this.setPropertyViewSize(400, 250);
    }


    // ---- public view functions ----
    
    /**
     * Display a given property
     */
    public void showProperty(Property property)
    {
        hostIDLabel.setText(property.getHostID());
        hostNameLabel.setText(property.getHostName());
        neighbourhoodLabel.setText(property.getNeighbourhood());
        roomTypeLabel.setText(property.getRoomType());
        priceLabel.setText("£" + property.getPrice());
        minNightsLabel.setText(property.getMinNights());
//        descriptionLabel.setText(property.getDescription());
    }
    
    /**
     * Set a fixed size for the property display. If set, this size will be used for all properties.
     * If not set, the GUI will resize for each property.
     */
    public void setPropertyViewSize(int width, int height)
    {
        propertyPanel.setPreferredSize(new Dimension(width, height));
        frame.pack();
        fixedSize = true;
    }
    
    /**
     * Show a message in the status bar at the bottom of the screen.
     */
    public void showFavourite(Property property)
    {
        String favouriteText = " ";
        if (property.isFavourite()){
            favouriteText += "This is one of your favourite properties!";
        }
        favouriteLabel.setText(favouriteText);
    }
    
    /**
     * Show the ID in the top of the screen.
     */
    public void showID(Property property){
        idLabel.setText("Current Property ID:" + property.getID());
    }
    
    // ---- implementation of button functions ----
    
    /**
     * Called when the 'Next' button was clicked.
     */
    private void nextButton()
    {
        viewer.nextProperty();
    }

    /**
     * Called when the 'Previous' button was clicked.
     */
    private void previousButton()
    {
        viewer.previousProperty();
    }
    
    /**
     * Called when the 'View on Map' button was clicked.
     */
    private void viewOnMapsButton()
    {
        try{
         viewer.viewMap();
        }
        catch(Exception e){
            System.out.println("URL INVALID");
        }
        
    }
    
    /**
     * Called when the 'Toggle Favourite' button was clicked.
     */
    private void toggleFavouriteButton(){
        viewer.toggleFavourite();     
    }

    // 修改 -----------------
    private void Statistics(){
        viewer.Statistics();
    }

    // ---- swing stuff to build the frame and all its components ----
    
    /**
     * Create the Swing frame and its content.
     */
    private void makeFrame()
    {
        frame = new JFrame("Portfolio Viewer Application");
        JPanel contentPane = (JPanel)frame.getContentPane();
        contentPane.setBorder(new EmptyBorder(6, 6, 6, 6));

        // Specify the layout manager with nice spacing
        contentPane.setLayout(new BorderLayout(6, 6));

        // Create the property pane in the center
        propertyPanel = new JPanel();
        propertyPanel.setLayout(new GridLayout(6,2));
        
        propertyPanel.add(new JLabel("HostID: "));
        hostIDLabel = new JTextField("default");
        hostIDLabel.setEditable(false);
        propertyPanel.add(hostIDLabel);
        
        propertyPanel.add(new JLabel("Host Name: "));
        hostNameLabel = new JTextField("default");
        hostNameLabel.setEditable(false);
        propertyPanel.add(hostNameLabel);
        
        propertyPanel.add(new JLabel("Neighbourhood: "));
        neighbourhoodLabel = new JTextField("default");
        neighbourhoodLabel.setEditable(false);
        propertyPanel.add(neighbourhoodLabel);
        
        propertyPanel.add(new JLabel("Room type: "));
        roomTypeLabel = new JTextField("default");
        roomTypeLabel.setEditable(false);
        propertyPanel.add(roomTypeLabel);
        
        propertyPanel.add(new JLabel("Price: "));
        priceLabel = new JTextField("default");
        priceLabel.setEditable(false);
        propertyPanel.add(priceLabel);
        
        propertyPanel.add(new JLabel("Minimum nights: "));
        minNightsLabel = new JTextField("default");
        minNightsLabel.setEditable(false);
        propertyPanel.add(minNightsLabel);


        propertyPanel.setBorder(new EtchedBorder());
        contentPane.add(propertyPanel, BorderLayout.CENTER);
        
        // Create two labels at top and bottom for the file name and status message
        idLabel = new JLabel("default");
        contentPane.add(idLabel, BorderLayout.NORTH);

        favouriteLabel = new JLabel(" ");
        contentPane.add(favouriteLabel, BorderLayout.SOUTH);
        
        // Create the toolbar with the buttons
        JPanel toolbar = new JPanel();
        toolbar.setLayout(new GridLayout(0, 1));
        
        JButton nextButton = new JButton("Next");
        nextButton.addActionListener(new ActionListener() {
                               public void actionPerformed(ActionEvent e) { nextButton(); }
                           });
        toolbar.add(nextButton);
        
        JButton previousButton = new JButton("Previous");
        previousButton.addActionListener(new ActionListener() {
                               public void actionPerformed(ActionEvent e) { previousButton(); }
                           });
        toolbar.add(previousButton);

        JButton mapButton = new JButton("View Property on Map");
        mapButton.addActionListener(new ActionListener() {
                               public void actionPerformed(ActionEvent e) { viewOnMapsButton(); }
                           });
        toolbar.add(mapButton);
        
        JButton favouriteButton = new JButton("Toggle Favourite");
        favouriteButton.addActionListener(new ActionListener() {
                               public void actionPerformed(ActionEvent e) { toggleFavouriteButton(); }
                           });
        toolbar.add(favouriteButton);
        // 添加新代码----------
        JButton View_Number = new JButton("查看次数");
        View_Number.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) { Statistics(); }
        });
        toolbar.add(View_Number);


        // Add toolbar into panel with flow layout for spacing
        JPanel flow = new JPanel();
        flow.add(toolbar);
        
        contentPane.add(flow, BorderLayout.WEST);
        
        // building is done - arrange the components     
        frame.pack();
        
        // place the frame at the center of the screen and show
        Dimension d = Toolkit.getDefaultToolkit().getScreenSize();
        frame.setLocation(d.width/2 - frame.getWidth()/2, d.height/2 - frame.getHeight()/2);
        frame.setVisible(true);
    }    
}
```











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

