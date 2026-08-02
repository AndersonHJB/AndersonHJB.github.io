---
title: ShadowTaxi
date: 2024-09-02 08:48:56
author: AI悦创
isOriginal: true
category: 
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
tag:
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
icon: python
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

**Please read the complete specification before starting on the project, because there are important instructions through to the end!**

## Overview

Welcome to the first project for SWEN20003, Semester 2, 2024. Across Project 1 and 2, you will design and create a taxi simulation game in Java called ShadowTaxi. In Project 1, you will create the first part of the full game that you will complete in Project 2B. This is an individual project. You may discuss it with other students, but all of the implementation must be your own work. By submitting the project you declare that you understand the [University’s policy on academic integrity](https://academicintegrity.unimelb.edu.au/) and aware of [consequences of any infringement](https://academicintegrity.unimelb.edu.au/plagiarism-investigation-and-penalties), including the use of [artificial intelligence](https://academicintegrity.unimelb.edu.au/plagiarism-and-collusion/artificial-intelligence-tools-and-technologies).

You may use any platform and tools you wish to develop the game, but we recommend using IntelliJ IDEA for Java development as this is what we will support in class.

The purpose of this project is to:

- Give you experience working with an object-oriented programming language (Java),
- Introduce simple game programming concepts (2D graphics, input, simple calculations)
- Give you experience working with a simple external library (Bagel)

**Extensions & Special Considerations**: From Semester 2, 2024, The Faculty of Engineering and Information Technology has a new process in place for handling Extensions and Special Con- siderations, linked [here](https://eng.unimelb.edu.au/students/coursework/study-resources/extensions-and-special-consideration). Carefully read through the instructions about the same. This information is also published in Canvas -> Modules -> FEIT Extensions and Special Consideration. Do not send emails to the Subject Coordinator without reviewing this process first.

Late Submissions: If you submit late (either with or without an extension), please complete the Late form in the Projects module on Canvas. For the form, you need to be logged in using your university account. Please do not email any of the teaching team regarding late submissions. All of this is explained again in more detail at the end of this specification.

You must make at least 5 commits (excluding the Initial Submission commit) throughout the development of the project, and they must have meaningful messages. This is also explained in more detail at the end of the specification.  

## Game Overview

“You are a taxi driver stuck on an endless road, attempting to survive in this current economic crisis. Move the taxi in the lanes, pick up passengers and drop off the passengers at their trip end flags to earn money. Each passenger has a priority, which can increase the driver’s earnings. Collect the coins, to increase the passenger’s priority. If you stop past the trip end flag, you lose money! Can you beat the target score before the time elapses to complete the game?

Project 1 features only the first part of the full game, as described above. The player has to press the arrow keys to move the taxi left, right or up. The taxi can pick up one passenger at a time, by stopping close to them. The taxi can collect coins by colliding with them - collecting coins will increase the priority of the current passenger once. The player has to drop the passenger off at their respective trip end flag - stopping past this flag, incurs a penalty on the earnings of that trip. Once dropped off, the trip earnings are added to the total score. To win, the player needs to beat the target score of 500. If the game runs for more than 15,000 frames, the game ends in a loss. At the end, the current top 5 scores are shown on screen.

![Figure 1: Completed in-game Project 1 screenshot](https://blog.images.bornforthis.cn/docs-images/sha256/dc/dc426d465d2d4872b57517604ee23ecd89452b332700319a0973998594962745.png)

## The Game Engine

The Basic Academic Game Engine Library (Bagel) is a game engine that you will use to develop your game. You can find the documentation for Bagel on Canvas under the Projects module.

**Coordinates**

Every coordinate on the screen is described by an (x,y) pair. (0,0) represents the top-left of the screen, and coordinates increase towards the bottom-right. Each of these coordinates is called a pixel. The Bagel Point class encapsulates this.

**Frames**

Bagel will refresh the program’s logic at the same refresh rate as your monitor. Each time, the screen will be cleared to a blank state and all of the graphics are drawn again. Each of these steps is called a frame. Every time a frame is to be rendered, the update() method in ShadowTaxi is called. It is in this method that you are expected to update the state of the game.

The refresh rate is typically 120 times per second (Hz) but some devices might have a lower rate of 60Hz. In this case, when your game is running, it may look different to the demo videos as the constant values in this specification have been chosen for a refresh rate of 120Hz. For your convenience, when writing and testing your code, you may change these values to make your game playable. If you do change the values, remember to change them back to the original specification values before submitting.

## The Game Elements

The default window size should be `1024 * 768` pixels. The game consists of a few screens and other different game elements. Below is an outline of these elements you will need to implement.

### Home Screen

This is the first screen rendered when the game is started. The background (backgroundHome.png) should be rendered on the screen and completely fill up your window during this screen. This has already been implemented for you in the skeleton package.

A title message that reads SHADOW TAXI should be rendered with the font provided in the res folder (FSO8BITR.ttf), with a font size 64. The bottom left of the message should be calculated as follows: the x-coordinate should be centered horizontally and the y-coordinate should be at 384 pixels.

Below this, an instruction message that reads PRESS ENTER should be rendered in the provided font, in size 32. The x-coordinate of the bottom left of the message should be centered horizontally, and the y-coordinate should be at 500 pixels. When the Enter key is pressed, the game changes to the Player Information Screen.

> Hint: The drawString() method in the Font class uses the given coordinates as the bottom left of the message. So to center the message, you will need to calculate the coordinates using the Window.getWidth() and Font.getWidth() methods.

### Player Information Screen

The background (backgroundPlayerInfo.png) should be rendered on the screen and completely fill up your window during this screen. All messages on this screen are in the provided font, in size 24. The x-coordinate of the bottom left of all the messages should be centered horizontally.

An instruction message that reads ENTER YOUR NAME should be rendered at the top. The y- coordinate of the bottom left of this message should be at 200 pixels.

When the user types their name, the entered letters needs to be rendered in black in the white box on this screen. When the user presses the Backspace or Delete key, the last letter of the currently rendered name needs to be removed. The y-coordinate of the bottom left of this name should be at 380 pixels. Hint: The DrawOptions class in Bagel will help you change the colour of the text. There is also a method given to you in the skeleton that will convert a key press into the corresponding String value.

Additionally, an instruction message consisting of 2 lines:

```java
                              PRESS ENTER TO START
                              USE ARROW KEYS TO MOVE
```

should be rendered below the white box. The y-coordinate of the bottom left of this message should be at 500 pixels. There must be adequate spacing between the 2 lines to ensure readability (you can decide on the value of this spacing yourself, as long as it’s not small enough that the text overlaps or too big that it doesn’t fit within the screen). When the Enter key is pressed, the game changes to the Game Play Screen.

### Game Play Screen

This screen features two backgrounds stacked vertically in the y-axis, to create a scrolling effect during game play. For each background, the same image background.png must be used. The starting centre coordinates of the first background is (512, 384) and for the second, (512, -384). The second background starts above the first, initally off-screen (these values are in fact, half the default window width and window height).

When the player presses the up arrow key, both backgrounds move vertically down by a speed of 5 pixels per frame. If the current y-coordinate of the centre of one background becomes greater than or equal to 1152, the y-coordinate is set to the (y-coordinate of other background) - Window.getHeight(). In other words, the background leaving past the bottom of the window, moves to above the window (if done correctly, this will look like a scrolling effect and the taxi moves up on an endless road).

The game entities and the actual game play will happen during this screen. This behaviour is explained in detail later in the Game Entities section.

### Game End Screen

When the player wins or loses, the player’s name and score (separated by a comma) needs to be written into the res/scores.csv file. A method to write to the comma-separated value (CSV) file is given to you in the skeleton package.

For a win or a loss, the game changes to this screen. The background (backgroundEnd.png) should be rendered on the screen and completely fill up your window during this screen. All messages on this screen are in the provided font. The x-coordinate of the bottom left of all the messages should be centered horizontally.

On this screen, a message that reads "TOP 5 SCORES -" should be rendered at the top, with a font size of 20. The y-coordinate of the bottom left of this message should be at 200 pixels.

Below this, the top five scores currently stored in the CSV file, have to be rendered. If there are less than five, all scores will be shown. Each line will be in the format of "i - j", where i is the player name and j is the score, given to 2 decimal places. The bottom left of each line should be calculated as follows: the x-coordinate will be centered horizontally and the y-coordinate increases by 40 from 200 pixels (i.e the bottom of the scoring message described above).

A method to read the CSV file and return the Strings, is given to you in the skeleton package (you will need to choose the top 5 scores before rendering however).

If the player beats the target score of 500, this is considered as a win. A message should be rendered, that consists of 2 lines:

```java
                             CONGRATULATIONS, YOU WON!
                             PRESS SPACE TO CONTINUE
```

If the game runs for more than 15,000 frames without a win happening, this is considered as a loss and the game ends. In this case, the message should be rendered as:

```java
                             GAME OVER, YOU LOST!
                             PRESS SPACE TO CONTINUE
```

The win/loss message should be rendered, in the font provided, in size 24. The y-coordinate should be at 500 pixels.

If the Space key is pressed, the game returns to the Home Screen and allows the player to play again. If the player terminates the game window at any point (by pressing the Escape key or by clicking the Exit button), the window will simply close and no message will be shown.

![(a) Home Screen](https://blog.images.bornforthis.cn/docs-images/sha256/95/9501f6e5e3e43e4e517a0ee8f13bc37cd07038fd8927cc0e6fa1193c77da7342.png)

![(b) Player Information Screen](https://blog.images.bornforthis.cn/docs-images/sha256/ad/ad34e4154873001d6ab5a28b30f8ea37446abaa1f442499b43e225cc7bb6f614.png)

![(c) Game End Screen](https://blog.images.bornforthis.cn/docs-images/sha256/e8/e89f8206a9c241d3bdf597534569562f30134f34c1d265fc55a3e04673dc6243.png)

Figure 2: Game Screens (Game Play Screen is shown in Figure 1)

### Properties File

The key values of the game are listed in two properties files which are given in the skeleton pack- age. The message coordinates, image filenames and other values are given in the app.properties file. The message strings are given in the message en.properties file. These files shouldn’t be edited (unless you need to adjust values for any frame rate issues).

To read a value from one of these properties, a Properties object must be created. The getProperty method can be called on this object with the required value given as the param- eter. For your reference, the skeleton package contains an example of how to read the background image filename, window width and window height values.

### World File

The entities will be defined in a world file, describing the type and their position in the window. The world file is located at res/gameObjects.csv. A world file is a comma-separated value (CSV) file with rows in one of the following formats:

```bash
TAXI or COIN, x-coordinate, y-coordinate
```

or

```bash
PASSENGER, x-coordinate, y-coordinate, priority, end x-coordinate, y-distance
```

An example of a world file is shown below:

```bash
TAXI,500,600
COIN,450,-316
COIN,309,-2167
PASSENGER,280,-800,3,280,500
PASSENGER,280,-1500,1,700,800
```

The given (x, y) coordinates refer to the centre of each image and these coordinates should be used to draw each image. For each passenger, the end x-coordinate is for the end of their trip and the y-distance is the distance travelled vertically during the trip. The priority is explained later in the Passenger section.

You must actually load the file—copying and pasting the data, for example, is not allowed. Marking will be conducted on a hidden different CSV file of the same format. You have been given a method to read a CSV file in the skeleton package. Note: The values in the example may not be the same as the ones given to you and the order of the entities may change.You can assume that there will always be at least one of each for all the entities. You can also assume there is only taxi for Project 1.

### Game Entities

The following game entities have an associated image and a starting location (x, y). Remember that all images are drawn from the centre of the image using these coordinates. Each entity has behaviour that interacts with the other entities, so make sure you read this section fully, before you ask any questions on Ed Discussions!

### Taxi

![](https://blog.images.bornforthis.cn/docs-images/sha256/62/629369be573fc43531c90dcd192b1ab01448d3ed59327ce12b7238e6813656fb.png)































::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
