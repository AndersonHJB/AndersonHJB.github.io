---
title: Cache Project Part 1 Main Memory
icon: c
date: 2023-12-04 11:42:10
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - 留学生作业辅导
tag:
    - 纽约大学一对一
    - NYU 1v1
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

**The Cache Project Part 1: Main Memory**

**Due Sunday, December 3**

The first part of the project is to simulate main memory (RAM) in C. In this simulated system, data is written to and read from the main memory as entire 8-word cache lines, not individual words (which are 64 bits).

I have written skeleton code in .c and .h files for you, along with extensive documentation in those files. Your job is to fill in the missing code where indicated. I have also included test code to help you debug your code, as well as compiled versions of the files that I wrote, so you can compare your output against mine.

You can talk to your fellow students about the project, but you may not show your code to anyone else or use anyone else’s code. Be sure to read the forum for helpful information and, if you have general questions about your code, post to the forum and I will respond. Please don’t post questions that have already been asked and answered, though. If you get stuck and need help with your code, please email your course assistant.

Here are the steps you should take:

- **Step 1**

    Download one of the following attached files that is appropriate for the machine you are using:

    - cache_project_macos.tgz (for macOS)
    - cache_project_cygwin.tgz (for Windows/Cygwin)
    - cache_project_linux.tgz (for Linux)

    You should create a new directory (folder) for this project and move the downloaded file into that directory. Then, in a shell, unzip the file by typing:`tar -xzvf filename`

    where filename is the name of the file you downloaded (cache_project_macos.tgz, etc.).

- **Step 2**

    You will notice a number of `.c` and `.h` files. There are also as several `.o` files (which are already compiled) that start with "ben". You should leave all of these files in the project directory.

    There should also be a Makefile. To create the executables based on my code, in a shell, type:`make ben` It will generate a number of executable files – one for each part of the project showing what the test results should be. To see what the output of the test of your main memory code should be, type `./ben_test_main_memory` If this compilation fails or you can’t get the executable to run, please email your course assistant right away.

- **Step 3**

    Open the file `main_memory.c` your editor and read every line closely. You’ll see that there are two procedures, `main_memory_initialize()` and `main_memory_access()`, that you have to implement. You should also look closely at the two related header files, `memory_subsystem_constants.h` and `main_memory.h`.

    In `main_memory.c`, the comments describe exactly what you have to do to implement the above two procedures to 1) allocate and initialize a large array that will simulate main memory and 2) to support reads from and writes to the simulated main memory.

    You should also take a look at my code in `test_main_memory.c`, so you can see how `main_memory_initialize` and `main_memory_access` are called and what the actual parameters (i.e. arguments) look like.

    Note that the type that I use throughout the code for each 64-bit word of memory is “`uint64_t`” (rather than “unsigned long”) and the type that I used for a single byte is “`uint8_t`” (rather than “unsigned char”). These types, which explicitly specify the number of bits, are defined in the `<stdint.h>` file that is #include’d in the code and are hopefully more portable across different machines.

    he only file you need to modify for this part of the project is `main_memory.c`.

- **Step 4**

    To test your code in `main_memory.c`, you can use my `test_main_memory.c` file. To do so, compile them together by typing `make test_main_memory` If it compiles correctly, you can run the program by typing `./test_main_memory`

    to see if the output is same as the output when running my compiled version (`./ben_test_main_memory`). Feel free to read and modify the code in `test_main_memory.c` to aid in your debugging.

- **Step 5**

    Once it is working, upload only your `main_memory.c` file to the Cache Project page on Brightspace and get started on part 2!



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