---
title: OS 补血
date: 2023-06-12 11:45:33
icon: code
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - SCU CS
    - Santa Clara University
    - 圣克拉拉大学
tag:
    - Python 一对一教学
    - SCU CS
    - Santa Clara University
    - 圣克拉拉大学
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

你好，我是悦创。

在 Python 中，`os ` 库提供了一组用于进程管理的函数，其中包括 `os.fork` 和 `os.waitpid`。

1. `os.fork()` ：`os.fork` 是用于创建新的进程的函数。这个函数的工作方式是，它复制当前进程，并创建一个新的进程。这个新的进程被称为子进程，而原来的进程被称为父进程。

当你调用 `os.fork` 函数时，它会返回一个值。对于父进程，这个值是新创建的子进程的 PID；对于子进程，这个值是 0。

这个函数的用法可以是这样的：

```python
import os

pid = os.fork()

if pid > 0:
    # 我们在这里处于父进程中
    print('我是父进程：', os.getpid())
    print('我的子进程是：', pid)
else:
    # 我们在这里处于子进程中
    print('我是子进程：', os.getpid())
    print('我的父进程是：', os.getppid())
```

2. `os.waitpid()`: `os.waitpid()` 是用于父进程等待子进程结束的函数。这个函数的作用是挂起父进程，直到一个子进程退出。

函数 `os.waitpid` 需要两个参数：子进程的 PID 和一个选项。如果选项为 0，父进程会挂起，直到子进程退出。如果子进程已经退出，这个函数会立即返回。

返回值是一个元组，包含两个元素：子进程的 PID 和子进程的退出状态。

这个函数的用法可以是这样的：

```python
import os

pid = os.fork()

if pid > 0:
    # 我们在这里处于父进程中
    print('我是父进程：', os.getpid())
    print('我的子进程是：', pid)
    
    child_pid, status = os.waitpid(pid, 0)
    print('子进程已结束：', child_pid)
    print('子进程的状态：', status)
else:
    # 我们在这里处于子进程中
    print('我是子进程：', os.getpid())
    print('我的父进程是：', os.getppid())
```

注意，在使用这些函数时，你需要理解你的程序将如何在多进程环境下运行，并确保每个进程都有适当的资源，并能正确地处理并发和并行问题。

---

Python的`os`模块提供了许多与操作系统交互的功能，包括进程管理。

以下是一些Python `os`模块中常用的进程管理函数：

1. `os.fork()`: 这是一个Unix/Linux特有的函数。它会创建一个新的进程。新进程被称为子进程，原进程被称为父进程。该函数返回两次，一次返回的是子进程的PID，返回给父进程；另一次返回0，返回给子进程。

```python
import os

pid = os.fork()

if pid > 0:
    print(f'I am the parent process: {os.getpid()}, my child is {pid}')
else:
    print(f'I am the child process: {os.getpid()} and my parent is {os.getppid()}')
```

2. `os.wait()`: 这个函数使父进程等待子进程完成，然后返回子进程的信息。它的返回值是一个包含子进程ID和退出信息的元组。

```python
import os

pid = os.fork()

if pid:
    print(f'Parent: My child process has PID {pid}')
    child_pid, child_status = os.wait()
    print(f'Parent: My child process {child_pid} exited with status {child_status}')
else:
    print(f'Child: I am the child process and my PID is {os.getpid()}')
    print('Child: I am exiting now.')
```

3. `os.waitpid()`: 这个函数需要两个参数，一个是子进程的pid，另一个是选项。选项为0表示等待子进程退出，如果子进程已经退出，函数会立即返回。

```python
import os

pid = os.fork()

if pid:
    print(f'Parent: My child process has PID {pid}')
    child_pid, child_status = os.waitpid(pid, 0)
    print(f'Parent: My child process {child_pid} exited with status {child_status}')
else:
    print(f'Child: I am the child process and my PID is {os.getpid()}')
    print('Child: I am exiting now.')
```

4. `os.exec*()`：这组函数用于在当前进程中执行一个新的程序。

```python
import os

pid = os.fork()

if pid:
    print(f'Parent: My child process has PID {pid}')
else:
    print(f'Child: I am the child process and my PID is {os.getpid()}')
    os.execlp('ls', '-l')
```

这些都是`os`模块提供的关于进程管理的函数，具体的使用方法和场景需要根据你的程序需求来决定。

## Wait 的区别

`os.wait()` 是 UNIX 和 Linux 操作系统提供的一个系统调用，它使父进程等待子进程的结束，然后收集子进程结束时的一些信息。下面是一些使用 `os.wait()` 的例子：

例子 1：在子进程结束后，父进程执行特定的操作：

```python
import os

pid = os.fork()

if pid:
    # 这个代码块将在父进程中执行
    _, status = os.wait()  # 等待子进程结束
    print('父进程：子进程已结束')
else:
    # 这个代码块将在子进程中执行
    print('子进程：我将结束')
```

例子 2：父进程等待多个子进程：

```python
import os

for _ in range(5):
    pid = os.fork()

    if pid == 0:
        # 这个代码块将在子进程中执行
        print(f'子进程：我是子进程，我的进程ID是 {os.getpid()}')
        os._exit(0)  # 子进程结束

# 父进程等待所有的子进程
while True:
    try:
        pid, status = os.wait()
        print(f'父进程：子进程 {pid} 已结束')
    except OSError:
        break  # 所有的子进程都已结束，跳出循环
```

例子 3：通过子进程的返回状态判断子进程是否正常结束：

```python
import os

pid = os.fork()

if pid:
    # 这个代码块将在父进程中执行
    _, status = os.wait()  # 等待子进程结束
    if os.WIFEXITED(status):
        print('父进程：子进程正常结束')
    else:
        print('父进程：子进程异常结束')
else:
    # 这个代码块将在子进程中执行
    os._exit(0)  # 子进程正常结束
```

在这些例子中，`os.wait()` 的用法有所不同。在第一个例子中，`os.wait()` 是在父进程中等待一个子进程结束。在第二个例子中，`os.wait()` 是在父进程中等待多个子进程结束。在第三个例子中，`os.wait()` 是在父进程中等待子进程结束，并检查子进程的返回状态以确定子进程是否正常结束。

## exit(0)

当一个进程调用`exit(0)`时，它会立即停止执行并返回一个退出状态0给它的父进程。这通常表示该进程已成功完成其工作。与之相反，`exit(1)`（或任何非零值）通常表示进程遇到了错误。

下面是一个简单的例子，说明如何在Python程序中使用`os._exit(0)`和`os._exit(1)`：

```python
import os

pid = os.fork()

if pid > 0:
    # 在父进程中
    print("我是父进程:", os.getpid())
    print("我的子进程是:", pid)
    # 等待子进程结束
    pid, status = os.wait()
    if os.WIFEXITED(status):
        print("子进程已结束，退出状态是:", os.WEXITSTATUS(status))
else:
    # 在子进程中
    print("我是子进程:", os.getpid())
    print("我的父进程是:", os.getppid())
    # 正常退出
    os._exit(0)  # 或者你也可以试试 os._exit(1) 来表示出错
```

在这个例子中，我们创建了一个子进程，然后在子进程中调用`os._exit(0)`表示正常退出。然后在父进程中，我们使用`os.wait()`来等待子进程结束，并获取其退出状态。`os.WIFEXITED(status)`函数检查子进程是否正常退出，如果是，`os.WEXITSTATUS(status)`函数则获取子进程的退出状态。

你可以尝试替换`os._exit(0)`为`os._exit(1)`，然后你会看到退出状态变成1，这通常表示程序出错。

注意: `os._exit()` 是直接从操作系统层面终止进程，而 Python 的内置函数 `exit()` 会先进行一些清理工作，如执行 `finally` 代码块以及 `with` 语句，然后再引发 `SystemExit` 异常来结束程序，`os._exit()` 不会执行这些清理工作。在 `fork()` 之后，通常建议在子进程中使用 `os._exit()`，因为在子进程中执行清理工作可能会产生一些不可预见的结果。















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

