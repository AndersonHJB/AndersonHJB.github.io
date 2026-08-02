---
title: C语言实现多线程
date: 2023-02-12 08:15:16
author: AndersonHJB
isOriginal: true
category: 
    - C语言一对一
    - C语言大学不挂科辅导
tag:
    - C语言一对一
    - C语言大学不挂科辅导
icon: cyuyan
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
head:
  - - meta
    - name: keywords
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
  - - meta
    - name: description
      content: 一对一辅导编程,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,全网3000+学员,值得信赖
---

![](https://blog.images.bornforthis.cn/docs-images/sha256/3a/3a62274737620ec3cf2438f1a581f22d62d83882a3efa2a4015a4d43d44a61a4.png)

C语言实现多线程的方式主要有两种：

1. POSIX Threads (pthreads): POSIX是可移植的操作系统接口，pthreads是POSIX提供的一种线程库，可以在不同的操作系统上进行多线程开发。
2. Windows API: Windows提供了一种Win32 API，可以用于C语言多线程编程。

下面是C语言使用pthreads实现多线程的代码示例：

```c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>
#define NUM_THREADS 5

void *PrintHello(void *threadid)
{
    long tid;
    tid = (long)threadid;
    printf("Hello World! It's me, thread #%ld!\n", tid);
    pthread_exit(NULL);
}

int main(int argc, char *argv[])
{
    pthread_t threads[NUM_THREADS];
    int rc;
    long t;
    for(t=0;t<NUM_THREADS;t++){
        printf("In main: creating thread %ld\n", t);
        rc = pthread_create(&threads[t], NULL, PrintHello, (void *)t);
        if (rc){
            printf("ERROR; return code from pthread_create() is %d\n", rc);
            exit(-1);
        }
    }
    pthread_exit(NULL);
}
```

上面的代码创建了5个线程，每个线程执行一个 PrintHello 函数。线程的创建和结束都用到了 pthread 库的函数，例如 `pthread_create()` 和 `pthread_exit()` 。

这段代码实现了C语言中的多线程编程。多线程编程是一种将程序分为多个独立的任务并行执行的编程方式。

关键词：

- `#include <pthread.h>`：`pthread.h`是 C 语言中线程库的头文件，包含了多线程编程所需的函数、常量和数据类型。
- `pthread_t`：这是一个定义线程的数据类型。
- `pthread_create`：这是一个创建线程的函数。它接受三个参数：线程 ID、线程属性（一般设为 NULL）和线程执行的函数。
- `pthread_join`：这是一个等待线程结束的函数。它接受两个参数：线程 ID 和线程的返回值（如果不需要，可以设为 NULL）。
- `void *thread_function(void *arg)`：这是一个线程执行的函数。它接受一个 void 指针类型的参数（通常称为线程参数），并返回一个 void 指针类型的结果。

程序流程：

1. 创建一个线程并执行`thread_function`函数，并保存线程ID到`t1`。
2. 等待线程`t1`结束。
3. 输出“Thread finished”，表示线程已经结束。

---

C 语言中多线程编程通常使用 pthread 库来实现。下面是一个多线程程序的代码：

```python
#include <pthread.h>
#include <stdio.h>

// 定义线程的运行函数
void *print_message_function( void *ptr )
{
    char *message;
    message = (char *) ptr;
    printf("%s \n", message);
    return NULL;
}

int main()
{
    pthread_t thread1, thread2;
    char *message1 = "Thread 1";
    char *message2 = "Thread 2";
    
    // 创建线程1
    int  iret1 = pthread_create( &thread1, NULL, print_message_function, (void*) message1);
    if(iret1)
    {
        printf("Error - pthread_create() return code: %d\n", iret1);
        return 1;
    }
    
    // 创建线程2
    int iret2 = pthread_create( &thread2, NULL, print_message_function, (void*) message2);
    if(iret2)
    {
        printf("Error - pthread_create() return code: %d\n", iret2);
        return 1;
    }
    
    printf("pthread_create() for Thread 1 returns: %d\n",iret1);
    printf("pthread_create() for Thread 2 returns: %d\n",iret2);
    
    // 等待线程结束
    pthread_join( thread1, NULL);
    pthread_join( thread2, NULL); 
    
    return 0;
}
```

下面是每行代码的含义：

1. `#include <pthread.h>` 和 `#include <stdio.h>`：包含头文件，pthread.h 是线程头文件，stdio.h 是标准输入输出头文件。
2. `void *print_message_function( void *ptr )`：定义了一个线程的运行函数，它接收一个指向 void 的指针，返回值为指向 void 的指针。
3. `char *message;`：定义了一个指向字符的指针，用于存储传入

---

在 C 语言中，通过使用 pthread 库来实现多线程。pthread 库是一个标准的 C 语言线程库，它提供了许多线程操作的函数，包括创建、启动、等待和结束线程等。

下面是 C 语言实现多线程的关键代码：

```python
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

#define NUM_THREADS 5

void *PrintHello(void *threadid)
{
   long tid;
   tid = (long)threadid;
   printf("Hello World! It's me, thread #%ld!\n", tid);
   pthread_exit(NULL);
}

int main (int argc, char *argv[])
{
   pthread_t threads[NUM_THREADS];
   int rc;
   long t;
   for(t=0; t<NUM_THREADS; t++){
      printf("In main: creating thread %ld\n", t);
      rc = pthread_create(&threads[t], NULL, PrintHello, (void *)t);
      if (rc){
         printf("ERROR; return code from pthread_create() is %d\n", rc);
         exit(-1);
      }
   }
   pthread_exit(NULL);
}

```



欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
