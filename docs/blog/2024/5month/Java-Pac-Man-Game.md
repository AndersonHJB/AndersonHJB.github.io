---
title: 创建一个简单的吃豆人风格游戏界面（Simple Pacman Game）使用Java
date: 2024-05-17 09:09:32
author: AI悦创
isOriginal: true
icon: java
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

在这个教程中，我们将使用 Java 语言和 Swing GUI 库来创建一个基本的游戏界面，模仿经典的吃豆人游戏。我们的目标是创建一个黑色背景上的可移动黄色圆形，通过键盘的方向键来控制移动。

## 1. 开发环境准备

在开始之前，请确保你的计算机上安装了 Java 开发工具包（JDK）和一个适合的集成开发环境（IDE），如 IntelliJ IDEA、Eclipse 或者 NetBeans。

## 2. 步骤一：创建 Java 项目

在你的 IDE 中创建一个新的Java项目，命名为 `SimplePacmanGame`。

## 3. 步骤二：编写代码

在项目中创建一个新的 Java 类文件，命名为 `SimplePacman.java`。然后，复制并粘贴以下代码：

::: code-tabs

@tab Code1

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class SimplePacman extends JFrame implements KeyListener {
    private JPanel panel;
    private int x = 150;
    private int y = 150;
    private final int SIZE = 50; // 圆的直径

    public SimplePacman() {
        setTitle("Simple Pacman Game");
        setSize(300, 300);
        setResizable(false);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        addKeyListener(this);

        panel = new JPanel() {
            @Override
            public void paintComponent(Graphics g) {
                super.paintComponent(g);
                setBackground(Color.BLACK);
                g.setColor(Color.YELLOW);
                g.fillOval(x, y, SIZE, SIZE);
            }
        };

        add(panel);
        setVisible(true);
    }

    public void keyPressed(KeyEvent e) {
        switch (e.getKeyCode()) {
            case KeyEvent.VK_UP:
                y -= 10;
                break;
            case KeyEvent.VK_DOWN:
                y += 10;
                break;
            case KeyEvent.VK_LEFT:
                x -= 10;
                break;
            case KeyEvent.VK_RIGHT:
                x += 10;
                break;
        }
        panel.repaint();
    }

    public void keyReleased(KeyEvent e) {
        // 不需要实现
    }

    public void keyTyped(KeyEvent e) {
        // 不需要实现
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new SimplePacman();
            }
        });
    }
}
```

@tab Code 注释

```java
// 导入Java Swing库中的组件，用于构建图形用户界面
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

// 创建一个SimplePacman类，继承自JFrame类，并实现KeyListener接口用于监听键盘事件
public class SimplePacman extends JFrame implements KeyListener {
    private JPanel panel;  // 定义一个JPanel对象用于自定义绘图
    private int x = 150;   // 初始化圆形的横坐标
    private int y = 150;   // 初始化圆形的纵坐标
    private final int SIZE = 50; // 设置圆形的直径

    // 类构造函数，用于初始化游戏窗口
    public SimplePacman() {
        setTitle("Simple Pacman Game"); // 设置窗口标题
        setSize(300, 300); // 设置窗口大小
        setResizable(false); // 设置窗口不可调整大小
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // 设置关闭窗口时退出程序
        addKeyListener(this); // 为窗口添加键盘监听器

        // 创建一个匿名JPanel类，并重写其paintComponent方法用于绘制图形
        panel = new JPanel() {
            @Override
            public void paintComponent(Graphics g) {
                super.paintComponent(g); // 调用父类的paintComponent方法
                setBackground(Color.BLACK); // 设置背景颜色为黑色
                g.setColor(Color.YELLOW); // 设置绘制颜色为黄色
                g.fillOval(x, y, SIZE, SIZE); // 绘制一个黄色的圆形
            }
        };

        add(panel); // 将绘图面板添加到窗口中
        setVisible(true); // 设置窗口为可见
    }

    // 实现KeyListener接口的keyPressed方法，用于处理键盘按键事件
    public void keyPressed(KeyEvent e) {
        switch (e.getKeyCode()) { // 获取按下的键的代码
            case KeyEvent.VK_UP:    // 如果按下的是上键
                y -= 10;           // 圆形向上移动
                break;
            case KeyEvent.VK_DOWN:  // 如果按下的是下键
                y += 10;           // 圆形向下移动
                break;
            case KeyEvent.VK_LEFT:  // 如果按下的是左键
                x -= 10;           // 圆形向左移动
                break;
            case KeyEvent.VK_RIGHT: // 如果按下的是右键
                x += 10;           // 圆形向右移动
                break;
        }
        panel.repaint(); // 请求重绘面板，触发paintComponent方法
    }

    // 未使用的KeyListener接口方法，需要存在但可以不实现具体功能
    public void keyReleased(KeyEvent e) { }

    public void keyTyped(KeyEvent e) { }

    // 主函数，程序入口点
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new SimplePacman(); // 创建SimplePacman类的实例
            }
        });
    }
}
```

@tab Code WASD 键盘控制

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class SimplePacman extends JFrame implements KeyListener {
    private JPanel panel;
    private int x = 150;
    private int y = 150;
    private final int SIZE = 50; // 圆的直径
    // todo: 控制嘴巴开闭

    public SimplePacman() {
        setTitle("Simple Pacman Game");
        setSize(300, 300);
        setResizable(false);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        addKeyListener(this);

        panel = new JPanel() {
            @Override
            public void paintComponent(Graphics g) {
                super.paintComponent(g);
                setBackground(Color.BLACK);
                g.setColor(Color.YELLOW);
                g.fillOval(x, y, SIZE, SIZE);
            }
        };

        add(panel);
        setVisible(true);
    }

    public void keyPressed(KeyEvent e) {
        switch (e.getKeyCode()) {
            case KeyEvent.VK_W:
                y -= 10;
                break;
            case KeyEvent.VK_S:
                y += 10;
                break;
            case KeyEvent.VK_A:
                x -= 10;
                break;
            case KeyEvent.VK_D:
                x += 10;
                break;
        }
        panel.repaint();
    }

    public void keyReleased(KeyEvent e) {
        // 不需要实现
    }

    public void keyTyped(KeyEvent e) {
        // 不需要实现
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new SimplePacman();
            }
        });
    }
}
```



:::

## 4. 步骤三：解释代码

- **类的构造**: `SimplePacman` 继承自 `JFrame` 并实现了 `KeyListener` 接口，这允许它响应键盘事件。
- **窗口设置**: 设置了窗口的标题、大小，并禁用了窗口大小调整。
- **键盘事件处理**: 实现了 `keyPressed` 方法来监听方向键的按下事件，并根据按键调整黄色圆形的位置。
- **绘图**: `paintComponent` 方法用于在JPanel上绘制黄色圆形，背景设置为黑色。

## 5. 步骤四：运行程序

在 IDE 中运行你的 `SimplePacman.java` 文件。你将看到一个窗口，里面有一个黄色圆形。使用键盘的上、下、左、右键来控制圆形在窗口中的移动。

## 6. 结论

通过本教程，你学会了如何使用 Java 和 Swing 库来创建一个简单的图形界面应用程序，类似于吃豆人游戏的基本功能。这个小项目可以作为学习更复杂游戏开发的起点。









欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
