---
title: Linux 速查表
date: 2023-06-09 19:17:42
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

猛肝了一晚，终于把这个表格整理出来，还没开始校对✍️。

Linux 的命令非常多，非常丰富，下面我会列举出一些常用的 Linux 命令，并按照文件操作、系统信息、进程管理等类别进行分类。

## 文件操作命令

| 序号 | 命令   | 作用                         | 语法                               | 示例                                      |
| ---- | ------ | ---------------------------- | ---------------------------------- | ----------------------------------------- |
| 1    | ls     | 列出目录                     | `ls [option] [directory]`          | `ls -l`                                   |
| 2    | cd     | 更改目录                     | `cd [directory]`                   | `cd /home`                                |
| 3    | pwd    | 显示当前目录                 | `pwd`                              | `pwd`                                     |
| 4    | touch  | 创建空文件                   | `touch file`                       | `touch example.txt`                       |
| 5    | cat    | 查看文件内容                 | `cat file`                         | `cat example.txt`                         |
| 6    | more   | 分页显示文件内容             | `more file`                        | `more example.txt`                        |
| 7    | head   | 查看文件开头                 | `head file`                        | `head example.txt`                        |
| 8    | tail   | 查看文件末尾                 | `tail file`                        | `tail example.txt`                        |
| 9    | cp     | 复制文件或目录               | `cp source destination`            | `cp example.txt example_copy.txt`         |
| 10   | mv     | 移动或重命名文件或目录       | `mv source destination`            | `mv /tmp/example.txt /home/`              |
| 11   | rm     | 删除文件或目录               | `rm option file`                   | `rm -r example_folder`                    |
| 12   | find   | 查找文件                     | `find path -name filename`         | `find / -name example.txt`                |
| 13   | wc     | 统计文件中行数、字数、字符数 | `wc option file`                   | `wc -l example.txt`                       |
| 14   | diff   | 比较文件差异                 | `diff file1 file2`                 | `diff example1.txt example2.txt`          |
| 15   | file   | 确定文件类型                 | `file file`                        | `file example.txt`                        |
| 16   | chmod  | 更改文件或目录的权限         | `chmod permissions file`           | `chmod 755 example.txt`                   |
| 17   | chown  | 更改文件或目录的所有者       | `chown user:group file`            | `chown root:root example.txt`             |
| 18   | df     | 显示磁盘使用情况             | `df [options]`                     | `df -h`                                   |
| 19   | du     | 查看目录或文件的磁盘使用情况 | `du [options] [directory_or_file]` | `du -sh /home`                            |
| 20   | ln     | 创建链接文件                 | `ln -s source_file link_file`      | `ln -s /path/to/example.txt link.txt`     |
| 21   | grep   | 文本搜索                     | `grep [options] pattern [file]`    | `grep "example" example.txt`              |
| 22   | sed    | 文本处理                     | `sed [option] 'command' file`      | `sed 's/test/best/g' example.txt`         |
| 23   | awk    | 文本处理                     | `awk [options] 'command' file`     | `awk '{print $1}' example.txt`            |
| 24   | sort   | 对文本行排序                 | `sort [options] file`              | `sort -n example.txt`                     |
| 25   | tar    | 归档工具                     | `tar [options] filename`           | `tar -cvf archive.tar /path/to/directory` |
| 26   | gzip   | 压缩或解压文件               | `gzip [options] file`              | `gzip example.txt`                        |
| 27   | gunzip | 解压 gzip 文件               | `gunzip file`                      | `gunzip example.txt.gz`                   |
| 28   | zip    | 压缩或解压文件               | `zip [options] archive_name file`  | `zip example.zip example.txt`             |
| 29   | unzip  | 解压 zip 文件                | `unzip file`                       | `unzip example.zip`                       |
| 30   | cut    | 删除文件中的某些部分         | `cut [options] file`               | `cut -d ':' -f 1 example.txt`             |



## 系统信息命令

| 序号 | 命令       | 作用                                          | 语法                       | 示例                     |
| ---- | ---------- | --------------------------------------------- | -------------------------- | ------------------------ |
| 1    | uname      | 打印系统信息                                  | `uname [option]`           | `uname -a`               |
| 2    | hostname   | 显示主机名                                    | `hostname`                 | `hostname`               |
| 3    | dmesg      | 显示内核启动信息                              | `dmesg`                    | `dmesg`                  |
| 4    | uptime     | 显示系统运行时间                              | `uptime`                   | `uptime`                 |
| 5    | who        | 显示当前登录用户                              | `who`                      | `who`                    |
| 6    | whoami     | 显示当前用户名                                | `whoami`                   | `whoami`                 |
| 7    | id         | 显示用户身份                                  | `id [username]`            | `id`                     |
| 8    | last       | 显示用户登录历史                              | `last`                     | `last`                   |
| 9    | w          | 显示谁在线                                    | `w`                        | `w`                      |
| 10   | free       | 显示内存使用情况                              | `free [options]`           | `free -h`                |
| 11   | df         | 显示磁盘空间使用情况                          | `df [options]`             | `df -h`                  |
| 12   | du         | 显示目录空间使用情况                          | `du [options] [directory]` | `du -sh /home`           |
| 13   | top        | 显示系统总体信息，包括任务、内存、CPU、进程等 | `top`                      | `top`                    |
| 14   | ps         | 显示当前进程状态                              | `ps [options]`             | `ps aux`                 |
| 15   | vmstat     | 显示虚拟内存统计                              | `vmstat`                   | `vmstat`                 |
| 16   | iostat     | 显示系统输入输出统计                          | `iostat`                   | `iostat`                 |
| 17   | ifconfig   | 显示网络接口配置                              | `ifconfig`                 | `ifconfig`               |
| 18   | ip         | 显示或操作路由、网络设备、策略路由和隧道      | `ip [options]`             | `ip addr`                |
| 19   | netstat    | 显示网络连接、路由表、接口状态                | `netstat [options]`        | `netstat -ant`           |
| 20   | ss         | 用来查看系统的 socket                         | `ss [options]`             | `ss -ant`                |
| 21   | nslookup   | 查询 DNS 服务器的记录                         | `nslookup [domain]`        | `nslookup example.com`   |
| 22   | dig        | DNS 查询工具                                  | `dig [domain]`             | `dig example.com`        |
| 23   | traceroute | 显示数据包到达主机所采取的路径                | `traceroute [domain]`      | `traceroute example.com` |
| 24   | ping       | 测试网络连通性                                | `ping [ip or domain]`      | `ping 8.8.8.8`           |
| 25   | whois      | 查询域名的 WHOIS 信息                         | `whois [domain]`           | whois example.com        |
| 26   | date       | 显示或设置系统时间日期                        | `date`                     | `date`                   |
| 27   | cal        | 显示日历                                      | `cal [month] [year]`       | `cal`                    |
| 28   | uptime     | 查看系统运行时间、用户数、负载                | `uptime`                   | `uptime`                 |
| 29   | sar        | 系统运行状态统计工具                          | `sar`                      | `sar`                    |
| 30   | lscpu      | 显示 CPU 信息                                 | `lscpu`                    | `lscpu`                  |

## 进程管理命令

| 序号 | 命令       | 作用                                | 语法                               | 示例                              |
| ---- | ---------- | ----------------------------------- | ---------------------------------- | --------------------------------- |
| 1    | ps         | 显示当前进程状态                    | `ps [options]`                     | `ps aux`                          |
| 2    | top        | 实时显示进程状态                    | `top`                              | `top`                             |
| 3    | htop       | 实时显示进程状态(比top更丰富)       | `htop`                             | `htop`                            |
| 4    | bg         | 把一个挂起的命令放到背景执行        | `bg [job_id]`                      | `bg 1`                            |
| 5    | fg         | 把命令从背景转到前台执行            | `fg [job_id]`                      | `fg 1`                            |
| 6    | kill       | 杀死进程                            | `kill [option] pid`                | kill -9 1234                      |
| 7    | pkill      | 根据进程名杀死进程                  | `pkill [options] pattern`          | `pkill -u user1`                  |
| 8    | nohup      | 让命令在后台安全运行                | `nohup command &`                  | `nohup ping google.com &`         |
| 9    | nice       | 改变即将被执行的命令的优先级        | `nice [options] command`           | `nice -n 19 command`              |
| 10   | renice     | 改变已运行进程的优先级              | `renice [options] pid`             | `renice -n 10 -p 1234`            |
| 11   | free       | 显示内存状态                        | `free -h`                          | `free -h`                         |
| 12   | vmstat     | 显示系统内存状态                    | `vmstat 1 100`                     | `vmstat 1 100`                    |
| 13   | iotop      | 监视I/O使用                         | `iotop`                            | `iotop`                           |
| 14   | iostat     | 监视系统输入输出设备和CPU的使用情况 | `iostat`                           | `iostat`                          |
| 15   | mpstat     | 显示各个可用CPU的状态               | `mpstat -P ALL`                    | `mpstat -P ALL`                   |
| 16   | pidof      | 查找进程的 PID                      | `pidof process_name`               | `pidof apache2`                   |
| 17   | strace     | 跟踪进程的系统调用                  | `strace command`                   | `strace -c ls`                    |
| 18   | dstat      | 全面的系统资源统计工具              | `dstat`                            | `dstat`                           |
| 19   | glances    | 跨平台的系统监控工具                | `glances`                          | `glances`                         |
| 20   | systemctl  | 系统服务管理器                      | `systemctl [command] [service]`    | `systemctl start apache2.service` |
| 21   | service    | 控制系统服务                        | `service [service_name] [command]` | `service apache2 start`           |
| 22   | lsof       | 列出文件系统当前已打开的文件        | `lsof`                             | `lsof`                            |
| 23   | ss         | 查看系统 socket 信息                | `ss [options]`                     | `ss -tan`                         |
| 24   | netstat    | 显示网络连接信息                    | `netstat [options]`                | `netstat -rn`                     |
| 25   | tcpdump    | 网络包分析工具                      | `tcpdump [options]`                | `tcpdump -i eth0`                 |
| 26   | nmap       | 网络探测和安全审计                  | `nmap [options] [host]`            | `nmap -A -T4 192.168.1.1`         |
| 27   | iftop      | 显示网络接口带宽使用情况            | `iftop`                            | `iftop`                           |
| 28   | traceroute | 显示数据包到主机间的路由路径        | `traceroute [host]`                | `traceroute google.com`           |
| 29   | iptraf     | 显示 IP 网络统计信息                | `iptraf`                           | `iptraf`                          |
| 30   | sar        | 收集、报告或者存储系统活动信息      | `sar [options]`                    | `sar -n DEV`                      |

## 包管理命令

| 序号 | 命令    | 作用                                                        | 语法                                    | 示例                      |
| ---- | ------- | ----------------------------------------------------------- | --------------------------------------- | ------------------------- |
| 1    | apt-get | Debian 系统的包管理工具                                     | `apt-get [options] [command] [package]` | `apt-get install python3` |
| 2    | yum     | RHEL/CentOS 系统的包管理工具                                | `yum [command] [package]`               | `yum install python3`     |
| 3    | dnf     | Fedora 系统的包管理工具，也在 RHEL 和 CentOS 中逐渐取代 yum | `dnf [command] [package]`               | `dnf install python3`     |
| 4    | zypper  | openSUSE 系统的包管理工具                                   | `zypper [command] [package]`            | `zypper install python3`  |
| 5    | pacman  | Arch Linux 系统的包管理工具                                 | `pacman [options] [package]`            | `pacman -S python`        |

## 用户和群组管理命令

| 序号 | 命令     | 作用         | 语法                           | 示例                                      |
| ---- | -------- | ------------ | ------------------------------ | ----------------------------------------- |
| 1    | useradd  | 创建新用户   | `useradd [options] username`   | `useradd -m username`                     |
| 2    | userdel  | 删除用户     | `userdel [options] username`   | `userdel -r username`                     |
| 3    | usermod  | 修改用户     | `usermod [options] username`   | `usermod -aG sudo username`               |
| 4    | passwd   | 修改用户密码 | `passwd [username]`            | `passwd username`                         |
| 5    | groupadd | 创建新群组   | `groupadd groupname`           | `groupadd groupname`                      |
| 6    | groupdel | 删除群组     | `groupdel groupname`           | `groupdel groupname`                      |
| 7    | groupmod | 修改群组     | `groupmod [options] groupname` | `groupmod -n new_groupname old_groupname` |

## 文件系统和磁盘管理命令

| 序号 | 命令   | 作用                         | 语法                               | 示例                          |
| ---- | ------ | ---------------------------- | ---------------------------------- | ----------------------------- |
| 1    | mount  | 挂载文件系统                 | `mount [options] device directory` | `mount /dev/sda1 /mnt`        |
| 2    | umount | 卸载文件系统                 | `umount [options] directory`       | `umount /mnt`                 |
| 3    | fsck   | 检查并修复文件系统           | `fsck [options] device`            | `fsck /dev/sda1`              |
| 4    | fdisk  | 磁盘分区工具                 | `fdisk [options] device`           | `fdisk /dev/sda`              |
| 5    | dd     | 数据复制命令，常用于磁盘操作 | `dd if=source of=target`           | `dd if=/dev/zero of=/dev/sda` |
| 6    | mkfs   | 格式化设备为某种文件系统     | `mkfs [options] device`            | `mkfs -t ext4 /dev/sda1`      |
| 7    | lsblk  | 列出所有可用块设备           | `lsblk [options]`                  | `lsblk`                       |



好的，以下是关于 Bash 脚本编程的一些基础知识：

**变量和数据类型**

| 序号 | 描述     | 语法                      | 示例              |
| ---- | -------- | ------------------------- | ----------------- |
| 1    | 定义变量 | `variable_name=value`     | `name="Open"`     |
| 2    | 访问变量 | `$variable_name`          | `echo $name`      |
| 3    | 只读变量 | `readonly variable_name`  | `readonly name`   |
| 4    | 删除变量 | `unset variable_name`     | `unset name`      |
| 5    | 字符串   | `str="Hello World"`       | `echo $str`       |
| 6    | 数组     | `array_name[index]=value` | `array[0]="test"` |

**控制结构**

| 序号 | 描述             | 语法                                                         | 示例                                                         |
| ---- | ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | if 条件判断      | `if [ condition ]; then ... fi`                              | `if [ $a == $b ]; then echo "Equal"; fi`                     |
| 2    | if-else 条件判断 | `if [ condition ]; then ... else ... fi`                     | `if [ $a == $b ]; then echo "Equal"; else echo "Not Equal"; fi` |
| 3    | for 循环         | `for variable in list; do ... done`                          | `for i in 1 2 3; do echo $i; done`                           |
| 4    | while 循环       | `while [ condition ]; do ... done`                           | `while [ $i -lt 10 ]; do echo $i; let i++; done`             |
| 5    | until 循环       | `until [ condition ]; do ... done`                           | `until [ $i -ge 10 ]; do echo $i; let i++; done`             |
| 6    | case 语句        | `case expression in pattern1) commands1;; pattern2) commands2;; esac` | `case $name in "John") echo "John";; "Doe") echo "Doe";; esac` |

**函数**

| 序号 | 描述     | 语法                             | 示例                                   |
| ---- | -------- | -------------------------------- | -------------------------------------- |
| 1    | 定义函数 | `function function_name { ... }` | `function greet { echo "Hello, $1"; }` |
| 2    | 调用函数 | `function_name arguments`        | `greet "Open"`                         |

**文件操作**

| 序号 | 描述     | 语法                                  | 示例                                              |
| ---- | -------- | ------------------------------------- | ------------------------------------------------- |
| 1    | 读取文件 | `while read line; do ... done < file` | `while read line; do echo $line; done < file.txt` |
| 2    | 写入文件 | `echo "text" > file`                  | `echo "Hello, World" > file.txt`                  |
| 3    | 追加文件 | `echo "text" >> file`                 | `echo "Hello, again" >> file.txt`                 |

**其他命令**

| 序号 | 描述               | 语法                | 示例                                     |
| ---- | ------------------ | ------------------- | ---------------------------------------- |
| 1    | 执行命令           | `command`           | `ls`                                     |
| 2    | 执行命令并捕获输出 | `output=$(command)` | `files=$(ls)`                            |
| 3    | 测试表达式         | `[ expression ]`    | `if [ $a == $b ]; then echo "Equal"; fi` |

这只是 Bash 脚本编程的基础知识，你可能需要进一步学习更复杂的主题，如正则表达式、进程管理、信号和作业控制等。



下面是 Bash 编程的更完整的语法和示例。

::: tabs
@tab 1. 变量

变量用于存储值，使用 `$` 符号来引用。

```bash
name="Bash"
echo $name
```

@tab 2. 变量赋值

使用 `=` 符号来给变量赋值，注意 `=` 符号两边不能有空格。

```bash
name="Bash"
```

@tab 3. 变量引用

使用 `$` 符号引用变量的值。

```bash
name="Bash"
echo $name
```

@tab 4. 只读变量

使用 `readonly` 命令可以将变量设置为只读，不能修改。

```bash
readonly name="Bash"
name="Shell"  # 将导致错误
```

@tab 5. 删除变量

使用 `unset` 命令删除变量。

```bash
unset name
```

@tab 6. 字符串

字符串是bash的重要数据类型，可以使用单引号，双引号，或不使用引号。

```bash
str1='hello, world'
str2="hello, world"
str3=hello,world
```

@tab 7. 数组

Bash支持一维数组，数组元素之间通过空格分隔。

```bash
arr=(1 2 3 4 5)
```

@tab 8. if-then

`if-then`语句用于条件测试。

```bash
if [ $a == $b ]
then
   echo "a is equal to b"
fi
```

@tab 9. if-then-else

`if-then-else` 语句提供了 else 从句来处理条件为假的情况。

```bash
if [ $a == $b ]
then
   echo "a is equal to b"
else
   echo "a is not equal to b"
fi
```

@tab 10. if-then-elif

`if-then-elif` 语句可以检测多个条件。

```bash
if [ $a == $b ]
then
   echo "a is equal to b"
elif [ $a -gt $b ]
then
   echo "a is greater than b"
else
   echo "a is less than b"
fi
```

@tab 11. for

`for` 循环用于迭代。

```bash
for var in 0 1 2 3 4 5 6 7 8 9
do
   echo $var
done
```

@tab 12. while

`while` 循环用于循环执行一段任务。

```bash
counter=0
while [ $counter -lt 10 ]
do
   echo $counter
   ((counter++))
done
```

@tab 13. case

`case` 语句用于多路选择。

```bash
case "$variable" in
abc) echo "\$variable = abc" ;;
xyz) echo "\$variable = xyz" ;;
esac
```

@tab 14. 函数

函数是可重用的代码块。

```bash
demoFunction(){
   echo "Hello World!"
}

demoFunction
```

@tab

 15. 参数

参数是可以在函数内部使用的变量。

```bash
demoFunction(){
   echo $1
}

demoFunction "Hello"
```
:::  

以上是 Bash 的基本语法，还有更多高级的功能和复杂的用法，包括输入/输出重定向、管道、进程控制、命令行扩展等。你可以通过阅读 `man bash` 或在线查找更多关于 Bash 的教程和文档来深入学习。

::: tabs
@tab 1. 变量

在 Bash 中，变量是用来存储数据的地方。你可以创建自己的变量，也可以使用预定义的环境变量。Bash 变量是大小写敏感的。

创建变量：
```bash
variable_name="Hello World"
```
使用变量：
```bash
echo $variable_name
```
预定义变量：
```bash
echo $HOME # 输出当前用户的家目录
echo $PATH # 输出系统的 PATH
```

@tab 2. if

`if` 语句在 Bash 脚本中用于条件判断。下面是 `if` 语句的基本形式：

```bash
if [ condition ]
then
    # 执行条件为真时的命令
else
    # 执行条件为假时的命令
fi
```

示例：
```bash
num=10
if [ $num -gt 5 ]
then
    echo "Number is greater than 5"
else
    echo "Number is not greater than 5"
fi
```

@tab 3. 循环

在 Bash 中，有两种基本的循环结构：`for` 循环和 `while` 循环。

`for` 循环：
```bash
for variable in list
do
    # 执行每个元素的命令
done
```
示例：
```bash
for i in 1 2 3 4 5
do
   echo "Welcome $i times"
done
```

`while` 循环：
```bash
while [ condition ]
do
    # 执行条件为真时的命令
done
```
示例：
```bash
count=1
while [ $count -le 5 ]
do
   echo "Welcome $count times"
   count=$(( $count + 1 ))
done
```

@tab 4. 函数

Bash 中的函数是可重用的代码块。下面是创建和调用函数的基本形式：

```bash
function_name () {
    # 函数体
}
```
示例：
```bash
greet() {
    echo "Hello, $1"
}

# 调用函数
greet "World"
```

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

