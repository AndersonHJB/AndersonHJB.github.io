---
title: Coursework 02 A Game Implemented with Tkinter
date: 2023-11-14 00:19:17
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
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## Introduction

The aim of this coursework is to assess you on the material delivered so far. You will create a game using the **tkinter** Graphical User Interface library. The game should start off simple (but not too simple that the player gets bored) and increase in complexity as the player progresses.

In this assessment we are looking for your creativity as well as problem solving and coding skills. You can choose any game you wish to create, but your game should meet all of the criteria outlined below. Some students will opt to create a classic retro game such as space invaders. Other students may take a similar approach and create a classic retro game with a twist (added functionality or additional features for example). The more experienced students may decide to create an original game never seen before! You must **NOT** create a noughts and crosses or snake game as these have been created for you during the Week 7 & 8 laboratories, any replication of the Laboratory code could result in your receiving a mark of 0.

**Important**: The game must run using Python 3.8, so if you create it on your personal computer with the host operating system, you must ensure it will work when being marked - marking will take place in the Kilburn labs so it is worth checking it works on the lab machines in case your laptop breaks or does not work during marking. The markers of the assessment will not install non-standard libraries or attempt to fix any issues with running the game. The only exception to this is the PIL package which we allow, see the documentation **here**. Markers will not fix errors in your code, if the marker can’t run your code successfully first time then you will only be awarded marks for the elements which do not require the game to be running.

## Overview

This assessment has been designed to be ambiguous to allow for creativity. The marking team also have a strict mandate to follow, i.e. they will be looking for the use of graphics, shapes, animations, complexity between stages or levels, how scoring is achieved, how the game provides incentives to the player to keep them engaged, how polished your graphics and/or shapes are, how you incorporated timing, etc.

You are also to use your given GitLab for all version control and must apply appropriate levels of commits to the project. The final commit you make for this assessment must be tagged as “**Tkinter-Game**” as we will search for the tag in your repositories and assess you work there. You should use the repository that has been created for you (i.e. `16321_python_work [username]`). This is where we will check your git history for the coursework when marking.

## Objectives

The game should include the following features:

1. The use of images.

2. The use of shapes.

3. The use of text.

4. A scoring mechanism.

5. A leader board which is presented at appropriate places in the game (i.e. from a menu before the game begins and/or at the end of the game)

    a. The leader board must retain player names (or initials if you adopt a retro style), with their score and their position in the leader board.

    b. When the game is quit and reloaded, the leader board will reflect the history of the leaders of the game.

6. To avoid having to scale images for di↵erent screen resolutions you can use any of the following resolutions. $1920 \times 1080$, $1366 \times 768$, $1536 \times 864$, $1440 \times 900$, $1280 \times 720$ or $1600 \times 900$. Indicate the screen resolution at the top of the python source code as a comment just in case the marker needs to alter their screen resolution to best view your game.

7. The movement of objects.

8. The ability for the user to move an object.

9. Some form of collision detection.

10. The ability for the player to pause and unpause the game (so that they can make a cup of tea).

11. The ability to customise the experience for the user, for example, if the game has an object that can be moved the player should be able to define the keys that control that object.

12. Special cheat codes (i.e. if your game was a snake game, you might incorporate ‘a shrink cheat’ that decreases the length of the snake’s body each time the code was entered). [https://www.digitaltrends.com/gaming/famous-cheat-codes-in-video-games/](https://www.digitaltrends.com/gaming/famous-cheat-codes-in-video-games/)

13. Save/Load game feature so that the player can resume playing where they left off tomorrow.

14. A ‘boss key’, we shouldn’t play games at work. Some games introduced a boss key which allowed the game to flip to an image that gave the impression that the player was doing something work related quickly.[https://en.wikipedia.org/wiki/Boss_key](https://en.wikipedia.org/wiki/Boss_key)

## Can I use...?

You can use any resources at your disposal, however, the game must be your game and not a game that is authored by somebody else. The code must be yours. Here some do’s and don’ts.



## Don’t

- Use nonstandard libraries such as Pygame that requires a pip install. Note, The only exception to this is the PIL package which we allow, see the documentation `here`.
- Take online code and just tweak it (we will spot this, we know what is out there).
- Use images that are copyrighted, or indeed anything that is copyrighted such as sprite sheets, graphics etc.
- Don’t recreate noughts and crosses or the snake game, as these have been created for you during the Week 7 & 8 laboratories.



## Do

- Look at what is already out there for ideas and inspiration.
- Make use of royalty free images, sprite sheets, graphics etc (please reference the original source in your code).
- PLEASE. . . make sure your game works on the Lab Machines incase of a laptop failure during marking.



## Preparation and Submission

Your main python file must be called game `solution.py`. This and all other work and resources needed for your game must be pushed to git and your main `game.py` file should have the tag Tkinter-Game. All work must also be on a branch called Cwk-02.

The marker will run your program though the terminal and test its functionality. Your code will also be checked for quality and appropriate use of programming principles (e.g. comments, white space, etc.).

The code will be marked using a system called GradeScope. Gradescope will pull code from your gitlab repository and your mark will be generated from the marking rubric used during your mark- ing session. Your marks and feedback will be available to you once each student has been marked. To access Gradescope you will need to click on the tab “Gradescope” on the left hand side of the COMP16321 Blackboard page.

On the submission page for the exercise, you will see an option to submit via gitlab. When you do this for the first time, you will be asked to authorise the application. Once you have done this, you will be able to select a repository and branch to submit. The code on that branch will then be pulled by Gradescope.

This coursework does not have any automated testing incorporated into the marking. All marking will take place face to face through the use of a rubric in Gradescope.

## Deadline

18:00 on Friday the 24th November 2022

## Assessment Type

This activity is subject to summative assessments, therefore your submission will be marked and you will receive the associated feedback. The marks you obtain (see below) count for up to 35% of your overall mark for this course unit.

## Marks:

Marks are awarded on three main categories:

1. Git usage
2. The running & testing of the game
3. Code quality

If the marker finds that the file submitted is unreadable and/or does not compile then you will receive marks for the git & code quality sections only. Please be aware that we will not install external packages to make your code compile. We should be able to run your code with a basic python setup. The only exception to this is the PIL package which we allow, see the documentation here.

Please note: Your work will not be re-marked because you disagree with the mark you were awarded. The markers all follow the same rubric which has been designed to be as fair and compre- hensive as possible. Any queries with your marking can be raised with either Gareth, Stewart or Terry within a week of the marks being released, any queries made after this time will not be considered. You must NOT contact or visit GTAs to request remarking or additional information, if this happens then the student(s) in question will be dealt with appropriately.

::: center

## End of Assessment

:::

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
