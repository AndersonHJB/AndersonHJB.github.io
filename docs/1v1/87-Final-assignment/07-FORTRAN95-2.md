---
title: 07-FORTRAN95 课程设计
date: 2024-07-06 17:15:42
author: AI悦创
isOriginal: true
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

::: tip

经过允许的才会发布在此，也为了宣传。感谢，这些学员的支持。

:::

## 0. 前言

::: tabs

@tab image-1

![](https://blog.images.bornforthis.cn/docs-images/sha256/69/691362fea718a92c53dbc1087c122359835eb2fa23d288c1c546a95cf0ac7e0d.png)

@tab image-2

![](https://blog.images.bornforthis.cn/docs-images/sha256/db/dbeef10125bbcd16a3fc20777d1bbbc705bc3e25659ed63e70a2cbefff60949a.png)

:::

## 1. 题目

`bst1951_2010.txt` 中存放了 1951-2010 年所有台风路径和强度信息

打开文件可以看到如下部分所示信息，信息说明如下：

```text
66666 5101   10      5101 0 6                              19901017             
51021906 002 2 200 1385 1010                                                    
51021912 002 2 200 1385 1010                                                    
51021918 002 2 230 1421 1000                                                    
51022000 002 9 250 1460  994                                                    
51022006 002 9 276 1506  994                                                    
51022012 002 9 289 1533  994                                                    
51022018 002 9 313 1575  992                                                    
51022100 002 9 326 1621  990                                                    
51022106 002 6 339 1660  990                                                    
51022112 002 6 360 1700  990                                                    
66666 5102   37      5102 0 6 GEORGIA                      20130319             
51031806 002 2  57 1583 1002                                                    
51031812 002 2  60 1594 1002                                                    
51031818 002 2  64 1604 1000                                                    
51031900 002 2  67 1614 1000                                                    
51031906 002 2  70 1625  998                                                    
51031912 002 2  73 1635  998                                                    
51031918 002 2  75 1647  994                                                    
51032000 002 2  76 1662  990                                                    
```

1. 其中“66666”开头的记录是台风的编号和命名信息
    1. 如：`5101` 指的是1951年第1号台风
    2. `10` 表示下面会有10条该台风的记录
2. 从 `66666` 标记行以下到下一个 `66666` 标记行之上是该台风的时间、 位置和强度信息
3. 如：针对 `5101` 号台风有 10 条记录，每一条由 6 列组成：
    1. 第1列是时间，如51021906 指的是1951年02月19日06时；
    2. 第2和第3列信息意义暂时不明确；
    3. 第4列为纬度，如200指的是北纬20.0度；
    4. 第5列为经度，如1385指的是东经138.5度；
    5. 第6列为台风中心气压，如1010指的是1010百帕； 
    6. 如果有超过6列的，在读取信息时后面的不读取；

用 Fortran 语言编程知识编写代码：

1. 从文件里正确读取数据;
2. 用键盘输入任意一个台风编号， 能准确地把它的所有相关记录打在屏幕上; 如，输入：5204， 回车，屏幕上面能马上输出它的所有信息
3. 编写子程序或函数，使它能返回每一个台风中心气压的最低值；
4. 将每一个台风编号和中心气压最低值格式化输出到文件中，使得两列数据的每一列右端对齐。

要求：

1. 至少有1个过程的设计；
2. **不需要的信息**需要通过程序设计合理处理，不能手动更改原始数据文件；

```fortran-free-form
program TyphoonData
    implicit none
    character(len=200) :: line
    character(len=4) :: stormID
    integer :: i, j, num_records, num_typhoons, typhoon_idx
    character(len=100) :: filename
    real :: lat, lon, pressure, min_pressure
    integer, dimension(2000) :: typhoon_records
    real, dimension(2000) :: min_pressures
    character(len=5) :: input_id

    ! 打开文件
    filename = 'bst1951_2010.txt'
    open(unit=10, file=filename, status='old')

    ! 读取文件
    num_typhoons = 0
    do
        read(10, '(A)', iostat=i) line
        if (i /= 0) exit
        
        if (trim(adjustl(line(1:5))) == '66666') then
            if (len_trim(line) >= 14) then
                num_typhoons = num_typhoons + 1
                if (num_typhoons > 2000) then
                    print *, '台风数量超过数组限制'
                    exit
                end if
                read(line(7:10), '(I4)') typhoon_records(num_typhoons)
                read(line(12:14), '(I3)') num_records
                min_pressure = 9999.0
                
                print *, '台风编号:', typhoon_records(num_typhoons), '记录数:', num_records  ! 调试输出

                do j = 1, num_records
                    read(10, '(A)', iostat=i) line
                    if (i /= 0) exit
                    if (len_trim(line) >= 33) then
                        read(line(21:24), '(F4.1)') lat
                        read(line(25:28), '(F4.1)') lon
                        read(line(29:33), '(F5.1)') pressure
                        
                        if (pressure < min_pressure) then
                            min_pressure = pressure
                        end if
                    end if
                end do
                
                min_pressures(num_typhoons) = min_pressure
            end if
        end if
    end do

    close(10)
    
    ! 打印台风数量以调试
    print *, '总共读取的台风数量:', num_typhoons
    
    ! 输入台风编号
    print *, '请输入台风编号 (如5204):'
    read *, input_id
    
    ! 查找并打印台风记录
    open(unit=10, file=filename, status='old')
    do
        read(10, '(A)', iostat=i) line
        if (i /= 0) exit
        
        if (trim(adjustl(line(1:5))) == '66666') then
            if (len_trim(line) >= 14) then
                read(line(7:10), '(A4)') stormID
                if (stormID == input_id) then
                    read(line(12:14), '(I3)') num_records
                    
                    print *, '台风编号: ', stormID
                    print *, '记录数: ', num_records
                    
                    do j = 1, num_records
                        read(10, '(A)', iostat=i) line
                        if (i /= 0) exit
                        print *, line
                    end do
                end if
            end if
        end if
    end do
    
    close(10)
    
    ! 写入文件
    open(unit=20, file='min_pressures.txt', status='replace')
    do typhoon_idx = 1, num_typhoons
        write(20, '(I5, F8.1)') typhoon_records(typhoon_idx), min_pressures(typhoon_idx)
    end do
    close(20)

end program TyphoonData
```



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

