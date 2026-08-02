---
title: 05-FORTRAN95 课程设计
date: 2024-06-24 19:17:30
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

![](https://blog.images.bornforthis.cn/docs-images/sha256/83/83282bd345dbf26bc14d230db90d8374318d287a9e21e2b3bf44e03b4e5619c7.png)

@tab image-2

![](https://blog.images.bornforthis.cn/docs-images/sha256/2d/2daceec6da145e63d04be4216208c45a93784e5e66d413b1374b18dc3e68ea1e.png)

@tab image-3

![](https://blog.images.bornforthis.cn/docs-images/sha256/e9/e95cf7debaa20033b88602fbab73f6cc67b6eccf20513ad030d56420c57a8284.png)

@tab image-4

![](https://blog.images.bornforthis.cn/docs-images/sha256/a6/a6f5b71ab323d43ca6eab9d8c47ff76ddc928690da25c31f0d1d76c5fb349301.png)

@tab image-5

![](https://blog.images.bornforthis.cn/docs-images/sha256/0e/0ea328b26734af3e737b46cfaf198cb2e900901b118c03f3d26eb38cdea7af8c.png)

:::

根据所学知识，完成以下题目，5 人1 组（1 人1 题，即6 选5） ，提交一份完整的文档（打印版和电子版），文档应包含以下主要内容：

1. 封面及目录；

    - 要求：封面自行设计，要包括专业、班级、课程名称、姓名、学号、指导教师；

    - 目录题头用三号黑体字居中书写，隔行书写目录内容。目录中各级题序及标题用小四号黑体；

2. 解题所用算法的 N-S 流程图或过程说明；

3. 用 FORTRAN 语言编写的源程序（必要的变量说明和注释）；

4. 符合具体选题要求的输入、输出（文件及数据）；

    - 报告正文部分要求：正文部分一律用五号字，宋体，1.5 倍行距。一级大标题小

    - 三号字靠左，加粗；二级标题四号字靠左，加粗；三级标题小四号字靠左，加粗。

5. 第18 周周五答辩，答辩后提交报告。

## 一、求一元方程的根

1、采用语句函数或函数子程序自定义一元方程（每组的方程不能相同） ；

2、设计简单的文本菜单，使程序可选择以下多种方法求该方程的根；

METHOD = 1 迭代法

METHOD = 2 牛顿迭代法

METHOD = 3 二分法

对于不同的近似算法分别编写子程序，精度要求 $10^{-6}$。

::: code-tabs

@tab Code1

```fortran-free-form
program root_finding
    implicit none
    ! 定义变量
    integer :: method
    real :: root

    ! 文本菜单
    print *, '请选择求根方法:'
    print *, '1 - 迭代法'
    print *, '2 - 牛顿迭代法'
    print *, '3 - 二分法'
    read *, method

    ! 根据选择执行不同的方法
    select case (method)
    case (1)
        call fixed_point_iteration(root)
    case (2)
        call newton_raphson(root)
    case (3)
        call bisection(root)
    case default
        print *, '无效的输入。'
    end select

    print *, '方程的根是: ', root
end program root_finding

! 定义方程 f(x) = x^3 - x - 2
real function f(x)
    real, intent(in) :: x
    f = x**3 - x - 2
end function f

! 定义导数 f'(x) = 3x^2 - 1
real function df(x)
    real, intent(in) :: x
    df = 3*x**2 - 1
end function df

! 迭代法
subroutine fixed_point_iteration(root)
    real, intent(out) :: root
    real :: x0, x1, lambda, tol
    integer :: i, max_iter

    x0 = 1.0       ! 初值
    lambda = 0.1   ! 步长系数
    tol = 1.0e-6
    max_iter = 10000

    do i = 1, max_iter
        x1 = x0 - lambda * f(x0)
        if (abs(x1 - x0) < tol) then
            root = x1
            return
        end if
        x0 = x1
    end do
    print *, '迭代可能未收敛'
end subroutine fixed_point_iteration

! 牛顿迭代法
subroutine newton_raphson(root)
    real, intent(out) :: root
    real :: x0, tol
    integer :: i, max_iter

    x0 = 1.0
    tol = 1.0e-6
    max_iter = 10000

    do i = 1, max_iter
        root = x0 - f(x0) / df(x0)
        if (abs(root - x0) < tol) exit
        x0 = root
    end do
end subroutine newton_raphson

! 二分法
subroutine bisection(root)
    real, intent(out) :: root
    real :: a, b, c, fa, fc, tol
    integer :: i, max_iter

    a = 1.0
    b = 3.0
    tol = 1.0e-6
    max_iter = 10000

    fa = f(a)
    do i = 1, max_iter
        c = (a + b) / 2.0
        fc = f(c)
        if (fc == 0.0 .or. (b - a) / 2.0 < tol) then
            root = c
            return
        end if
        if (sign(1.0, fa) == sign(1.0, fc)) then
            a = c
            fa = fc
        else
            b = c
        end if
    end do
    root = c
end subroutine bisection
```

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/2d/2db414b791fa7d186213dd4867b7d9a81f678cfbba2013bae5762ce16c5c4447.png)

## 二、求定积分

1、设计简单的文本菜单，使程序可选择以下多种方法定积分矩形法、梯形法、辛普生法

2、对于不同的算法分别编写子程序，选择调用

```fortran-free-form
program IntegralCalculator
    implicit none

    ! 定义变量
    integer :: choice
    real :: a, b, integral
    integer :: n

    ! 界限和分割数
    a = 0.0
    b = 1.0
    n = 100

    print*, "选择计算方法:"
    print*, "1 - 矩形法"
    print*, "2 - 梯形法"
    print*, "3 - 辛普森法"
    read*, choice

    ! 根据用户选择调用相应方法
    select case (choice)
    case (1)
        integral = rectangleMethod(a, b, n)
        print*, "矩形法计算结果为：", integral
    case (2)
        integral = trapezoidMethod(a, b, n)
        print*, "梯形法计算结果为：", integral
    case (3)
        integral = simpsonMethod(a, b, n)
        print*, "辛普森法计算结果为：", integral
    case default
        print*, "无效选择"
    end select

contains
    ! 矩形法子程序
    function rectangleMethod(a, b, n) result(integral)
        real, intent(in) :: a, b
        integer, intent(in) :: n
        real :: integral, h, x
        integer :: i

        h = (b - a) / n
        integral = 0.0

        do i = 0, n - 1
            x = a + i * h
            integral = integral + f(x) * h
        end do
    end function rectangleMethod

    ! 梯形法子程序
    function trapezoidMethod(a, b, n) result(integral)
        real, intent(in) :: a, b
        integer, intent(in) :: n
        real :: integral, h, x
        integer :: i

        h = (b - a) / n
        integral = (f(a) + f(b)) / 2.0

        do i = 1, n - 1
            x = a + i * h
            integral = integral + f(x)
        end do

        integral = integral * h
    end function trapezoidMethod

    ! 辛普森法子程序
    function simpsonMethod(a, b, n) result(integral)
        real, intent(in) :: a, b
        integer, intent(in) :: n
        real :: integral, h, x
        integer :: i

        h = (b - a) / n
        integral = f(a) + f(b)

        do i = 1, n - 1, 2
            x = a + i * h
            integral = integral + 4 * f(x)
        end do

        do i = 2, n - 2, 2
            x = a + i * h
            integral = integral + 2 * f(x)
        end do

        integral = integral * h / 3
    end function simpsonMethod

    ! 被积函数定义
    function f(x) result(fx)
        real, intent(in) :: x
        real :: fx

        fx = sin(x)  ! 示例函数
    end function f

end program IntegralCalculator
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/40/40cff3bf4fe91ede350f0467f4926211c61a3a68a6406a7b12e0a5ba299141da.png)





## 三、用高斯消元法求解三元一次方程组

方程组各小组自行定义。要求常数项为本组任意三个同学学号的后两位。（12、30、33）

```fortran-free-form
program GaussianElimination
    implicit none

    ! 定义变量
    integer, parameter :: n = 3
    real :: A(n, n+1) ! 增广矩阵
    real :: x(n)
    integer :: i, j, k
    real :: factor

    ! 初始化增广矩阵
    A = reshape([ &
        2.0, -1.0, 3.0, 12.0, & ! 示例方程1: 2x - y + 3z = 12
        -3.0, 4.0, -2.0, 30.0, & ! 示例方程2: -3x + 4y - 2z = 30
        1.0, -2.0, 1.0, 33.0], & ! 示例方程3: x - 2y + z = 33
        shape(A))

    ! 高斯消元法消元过程
    do k = 1, n-1
        do i = k+1, n
            factor = A(i, k) / A(k, k)
            do j = k, n+1
                A(i, j) = A(i, j) - factor * A(k, j)
            end do
        end do
    end do

    ! 回代过程
    x(n) = A(n, n+1) / A(n, n)
    do i = n-1, 1, -1
        x(i) = A(i, n+1)
        do j = i+1, n
            x(i) = x(i) - A(i, j) * x(j)
        end do
        x(i) = x(i) / A(i, i)
    end do

    ! 输出结果
    print *, "解为:"
    do i = 1, n
        print *, "x(", i, ") = ", x(i)
    end do

end program GaussianElimination
```

![](https://blog.images.bornforthis.cn/docs-images/sha256/f9/f95ad07cfdc497734afa01beeb75d7405a9b9f3178a346a7046d3fb932a4d59f.png)

## 四、编写班级成绩考评程序

1、要求用多数组法和派生类两种方法实现；

2、采用数据文件输入某班级 30 名同学的学号及各五门课程的成绩；

3、求出每名同学的总分、统计各门课程的平均分；

4、统计各门课程中高于和低于平均分的人数；

5、按总分高低排序，文件输出名次、学号及总分。

6、分数查询，输入某一学号，输出该生的名次、各门课程的成绩及总分。

::: code-tabs

@tab 数组法

```fortran-free-form
program student_scores_multiarray
    implicit none
    integer, parameter :: n = 30, m = 5
    integer :: i, j, k, student_id(n), rank(n)
    real :: scores(n, m), total_scores(n), average(m)
    real :: above_avg(m), below_avg(m)
    character(len=100) :: filename
    real :: temp_score
    integer :: temp_id
    character(len=50) :: query_id
    integer :: query_index
    character(len=10) :: student_id_str(n), query_id_str

    ! 初始化
    total_scores = 0.0
    average = 0.0
    above_avg = 0
    below_avg = 0

    ! 读取数据
    open(unit=1, file='student_scores.txt', status='old')
    do i = 1, n
        read(1, *) student_id(i), (scores(i, j), j = 1, m)
    end do
    close(1)

    ! 转换学号为字符串
    do i = 1, n
        write(student_id_str(i), '(I10)') student_id(i)
    end do

    ! 计算总分和各科平均分
    do i = 1, n
        total_scores(i) = sum(scores(i, :))
        do j = 1, m
            average(j) = average(j) + scores(i, j)
        end do
    end do
    average = average / n

    ! 统计高于和低于平均分的人数
    do j = 1, m
        do i = 1, n
            if (scores(i, j) > average(j)) then
                above_avg(j) = above_avg(j) + 1
            else if (scores(i, j) < average(j)) then
                below_avg(j) = below_avg(j) + 1
            end if
        end do
    end do

    ! 按总分排序
    do i = 1, n
        rank(i) = i
    end do
    do i = 1, n-1
        do j = i+1, n
            if (total_scores(rank(i)) < total_scores(rank(j))) then
                temp_score = total_scores(rank(i))
                temp_id = rank(i)
                rank(i) = rank(j)
                rank(j) = temp_id
            end if
        end do
    end do

    ! 输出排序结果
    open(unit=2, file='sorted_scores.txt', status='replace')
    write(2, '(A8, A10, A10)') 'Rank', 'StudentID', 'TotalScore'
    do i = 1, n
        write(2, '(I8, A10, F10.2)') i, trim(student_id_str(rank(i))), total_scores(rank(i))
    end do
    close(2)

    ! 查询功能
    print *, "请输入要查询的学号:"
    read(*, '(A)') query_id
    query_index = -1

    ! 转换查询学号为字符串
    query_id_str = adjustl(query_id)

    do i = 1, n
        if (adjustl(student_id_str(i)) == query_id_str) then
            query_index = i
            exit
        end if
    end do

    if (query_index == -1) then
        print *, "未找到该学号的学生。"
    else
        do i = 1, n
            if (rank(i) == query_index) then
                print *, "名次:", i
                exit
            end if
        end do
        print *, "学号:", student_id(query_index)
        print *, "各科成绩:", (scores(query_index, j), j = 1, m)
        print *, "总分:", total_scores(query_index)
    end if

end program student_scores_multiarray
```

@tab 派生类1.0

```fortran-free-form
module student_module
    implicit none
    type :: student
        integer :: id
        real :: scores(5)
        real :: total
    end type student

    type :: class
        type(student), dimension(:), allocatable :: students
        real :: avg_scores(5)
        integer :: above_avg(5)
        integer :: below_avg(5)
    contains
        procedure :: compute_totals
        procedure :: compute_averages
        procedure :: count_above_below_avg
        procedure :: sort_by_total
        procedure :: query_student
    end type class
contains
    subroutine compute_totals(this)
        class(class), intent(inout) :: this
        integer :: i

        do i = 1, size(this%students)
            this%students(i)%total = sum(this%students(i)%scores)
        end do
    end subroutine compute_totals

    subroutine compute_averages(this)
        class(class), intent(inout) :: this
        integer :: i, j
        real :: sum_scores(5)

        sum_scores = 0.0
        do i = 1, size(this%students)
            do j = 1, 5
                sum_scores(j) = sum_scores(j) + this%students(i)%scores(j)
            end do
        end do
        this%avg_scores = sum_scores / size(this%students)
    end subroutine compute_averages

    subroutine count_above_below_avg(this)
        class(class), intent(inout) :: this
        integer :: i, j

        this%above_avg = 0
        this%below_avg = 0
        do i = 1, size(this%students)
            do j = 1, 5
                if (this%students(i)%scores(j) >= this%avg_scores(j)) then
                    this%above_avg(j) = this%above_avg(j) + 1
                else
                    this%below_avg(j) = this%below_avg(j) + 1
                end if
            end do
        end do
    end subroutine count_above_below_avg

    subroutine sort_by_total(this)
        class(class), intent(inout) :: this
        integer :: i, j
        type(student) :: temp

        do i = 1, size(this%students)-1
            do j = i + 1, size(this%students)
                if (this%students(i)%total < this%students(j)%total) then
                    temp = this%students(i)
                    this%students(i) = this%students(j)
                    this%students(j) = temp
                end if
            end do
        end do
    end subroutine sort_by_total

    subroutine query_student(this, id)
        class(class), intent(in) :: this
        integer, intent(in) :: id
        integer :: i, j

        do i = 1, size(this%students)
            if (this%students(i)%id == id) then
                print *, "Student ID:", this%students(i)%id
                print *, "Rank:", i
                print *, "Scores:", this%students(i)%scores
                print *, "Total Score:", this%students(i)%total
                return
            end if
        end do
        print *, "Student ID not found."
    end subroutine query_student
end module student_module

program class_evaluation
    use student_module
    implicit none
    type(class) :: my_class
    integer :: i, j
    integer, parameter :: n = 30
    real :: score
    character(len=30) :: filename

    allocate(my_class%students(n))

    filename = 'student_scores.txt'
    open(unit=10, file=filename, status='old')

    do i = 1, n
        read(10, *) my_class%students(i)%id, (my_class%students(i)%scores(j), j=1, 5)
    end do
    close(10)

    call my_class%compute_totals()
    call my_class%compute_averages()
    call my_class%count_above_below_avg()
    call my_class%sort_by_total()

    ! 输出排序后的成绩到文件
    open(unit=20, file='sorted_scores.txt', status='replace')
    do i = 1, n
        write(20, *) i, my_class%students(i)%id, my_class%students(i)%total
    end do
    close(20)

    ! 输出各门课程的平均分和高于、低于平均分的人数
    print *, "Average Scores:", my_class%avg_scores
    print *, "Above Average:", my_class%above_avg
    print *, "Below Average:", my_class%below_avg

    ! 查询学生成绩
    call my_class%query_student(1012)

end program class_evaluation
```

@tab 派生类2.0

```fortran-free-form
module student_module
    implicit none
    type :: Student
        integer :: id
        real :: scores(5)
        real :: total
        integer :: rank
    end type Student

    type :: Class
        type(Student), dimension(30) :: students
        real, dimension(5) :: avg_scores
        integer, dimension(5) :: above_avg, below_avg
    contains
        procedure :: calculate_totals
        procedure :: calculate_averages
        procedure :: count_above_below_avg
        procedure :: sort_by_total
        procedure :: query_student
    end type Class
contains
    subroutine calculate_totals(this)
        class(Class), intent(inout) :: this
        integer :: i

        do i = 1, 30
            this%students(i)%total = sum(this%students(i)%scores)
        end do
    end subroutine calculate_totals

    subroutine calculate_averages(this)
        class(Class), intent(inout) :: this
        integer :: i, j

        this%avg_scores = 0.0
        do j = 1, 5
            do i = 1, 30
                this%avg_scores(j) = this%avg_scores(j) + this%students(i)%scores(j)
            end do
            this%avg_scores(j) = this%avg_scores(j) / 30.0
        end do
    end subroutine calculate_averages

    subroutine count_above_below_avg(this)
        class(Class), intent(inout) :: this
        integer :: i, j

        this%above_avg = 0
        this%below_avg = 0
        do j = 1, 5
            do i = 1, 30
                if (this%students(i)%scores(j) > this%avg_scores(j)) then
                    this%above_avg(j) = this%above_avg(j) + 1
                else
                    this%below_avg(j) = this%below_avg(j) + 1
                end if
            end do
        end do
    end subroutine count_above_below_avg

    subroutine sort_by_total(this)
        class(Class), intent(inout) :: this
        integer :: i, j
        type(Student) :: temp

        do i = 1, 29
            do j = i + 1, 30
                if (this%students(i)%total < this%students(j)%total) then
                    temp = this%students(i)
                    this%students(i) = this%students(j)
                    this%students(j) = temp
                end if
            end do
        end do

        do i = 1, 30
            this%students(i)%rank = i
        end do
    end subroutine sort_by_total

    subroutine query_student(this, id)
        class(Class), intent(inout) :: this
        integer, intent(in) :: id
        integer :: i

        do i = 1, 30
            if (this%students(i)%id == id) then
                print *, "Student ID: ", this%students(i)%id
                print *, "Rank: ", this%students(i)%rank
                print *, "Scores: ", this%students(i)%scores
                print *, "Total Score: ", this%students(i)%total
                return
            end if
        end do
        print *, "Student ID not found!"
    end subroutine query_student
end module student_module

program student_evaluation
    use student_module
    implicit none
    type(Class) :: myclass
    integer :: i, j, id
    character(len=20) :: filename
    character(len=100) :: line
    real :: score

    filename = "student_scores.txt"
    open(unit=10, file=filename, status="old", action="read")

    do i = 1, 30
        read(10, *) myclass%students(i)%id, myclass%students(i)%scores
    end do
    close(10)

    call myclass%calculate_totals()
    call myclass%calculate_averages()
    call myclass%count_above_below_avg()
    call myclass%sort_by_total()

    open(unit=20, file="sorted_scores.txt", status="replace", action="write")
    do i = 1, 30
        write(20, '(I4, 2X, I4, 2X, F6.2)') myclass%students(i)%rank, myclass%students(i)%id, myclass%students(i)%total
    end do
    close(20)

    print *, "Enter Student ID to query: "
    read *, id
    call myclass%query_student(id)

end program student_evaluation
```

@tab 注释

```fortran-free-form
module student_module
    implicit none
    type :: Student
        integer :: id
        real :: scores(5)
        real :: total
        integer :: rank
    end type Student

    type :: Class
        type(Student), dimension(30) :: students
        real, dimension(5) :: avg_scores
        integer, dimension(5) :: above_avg, below_avg
    contains
        procedure :: calculate_totals
        procedure :: calculate_averages
        procedure :: count_above_below_avg
        procedure :: sort_by_total
        procedure :: query_student
    end type Class
contains
    subroutine calculate_totals(this)
        class(Class), intent(inout) :: this
        integer :: i

        do i = 1, 30
            this%students(i)%total = sum(this%students(i)%scores)
        end do
    end subroutine calculate_totals

    subroutine calculate_averages(this)
        class(Class), intent(inout) :: this
        integer :: i, j

        this%avg_scores = 0.0
        do j = 1, 5
            do i = 1, 30
                this%avg_scores(j) = this%avg_scores(j) + this%students(i)%scores(j)
            end do
            this%avg_scores(j) = this%avg_scores(j) / 30.0
        end do
    end subroutine calculate_averages

    subroutine count_above_below_avg(this)
        class(Class), intent(inout) :: this
        integer :: i, j

        this%above_avg = 0
        this%below_avg = 0
        do j = 1, 5
            do i = 1, 30
                if (this%students(i)%scores(j) > this%avg_scores(j)) then
                    this%above_avg(j) = this%above_avg(j) + 1
                else
                    this%below_avg(j) = this%below_avg(j) + 1
                end if
            end do
        end do
    end subroutine count_above_below_avg

    subroutine sort_by_total(this)
        class(Class), intent(inout) :: this
        integer :: i, j
        type(Student) :: temp

        do i = 1, 29
            do j = i + 1, 30
                if (this%students(i)%total < this%students(j)%total) then
                    temp = this%students(i)
                    this%students(i) = this%students(j)
                    this%students(j) = temp
                end if
            end do
        end do

        do i = 1, 30
            this%students(i)%rank = i
        end do
    end subroutine sort_by_total

    subroutine query_student(this, id)
        class(Class), intent(inout) :: this
        integer, intent(in) :: id
        integer :: i

        do i = 1, 30
            if (this%students(i)%id == id) then
                print *, "Student ID: ", this%students(i)%id
                print *, "Rank: ", this%students(i)%rank
                print *, "Scores: ", this%students(i)%scores
                print *, "Total Score: ", this%students(i)%total
                return
            end if
        end do
        print *, "Student ID not found!"
    end subroutine query_student
end module student_module

program student_evaluation
    use student_module
    implicit none
    type(Class) :: myclass
    integer :: i, j, id
    character(len=20) :: filename
    character(len=100) :: line
    real :: score

    filename = "student_scores.txt"
    open(unit=10, file=filename, status="old", action="read")

    do i = 1, 30
        read(10, *) myclass%students(i)%id, myclass%students(i)%scores
    end do
    close(10)

    call myclass%calculate_totals()
    call myclass%calculate_averages()
    call myclass%count_above_below_avg()
    call myclass%sort_by_total()

    open(unit=20, file="sorted_scores.txt", status="replace", action="write")
    do i = 1, 30
        write(20, '(I4, 2X, I4, 2X, F6.2)') myclass%students(i)%rank, myclass%students(i)%id, myclass%students(i)%total
    end do
    close(20)

    print *, "Enter Student ID to query: "
    read *, id
    call myclass%query_student(id)

end program student_evaluation
```



:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/c7/c74484e07a67980f1d447812d6b5eddc34356e999981d04b936d4702c95b2367.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/fb/fba4f7078f0546ab81ca81651729f814bd45adfe9773db03e6a5f03d6025d361.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/17/17e4694febb9e3b2361dc9c6cebbdbf9c537226ed1b2d56f411a8b27abdbb30f.png)

## 五、编写程序，实现进制间的相互转换

1、十进制、二进制、八进制、十六进制；

2、用子程序实现

::: code-tabs

@tab Code1

```fortran-free-form
program ConvertBases
    implicit none
    integer :: decimalNumber
    character(len=32) :: binary, octal, hexadecimal

    ! 用户输入十进制数字
    print*, '请输入一个十进制数:'
    read*, decimalNumber

    ! 十进制转换到其他进制
    call DecimalToBinary(decimalNumber, binary)
    call DecimalToOctal(decimalNumber, octal)
    call DecimalToHexadecimal(decimalNumber, hexadecimal)

    ! 显示结果
    print*, '二进制表示: ', trim(binary)
    print*, '八进制表示: ', trim(octal)
    print*, '十六进制表示: ', trim(hexadecimal)

contains
    ! 十进制转二进制
    subroutine DecimalToBinary(decimal, binary)
        integer, intent(in) :: decimal
        character(len=32), intent(out) :: binary
        integer :: n, i
        binary = ' '
        n = decimal
        i = 0
        do while (n > 0)
            i = i + 1
            binary(len(binary)-i+1:len(binary)-i+1) = char(iachar('0') + mod(n, 2))
            n = n / 2
        end do
    end subroutine DecimalToBinary

    ! 十进制转八进制
    subroutine DecimalToOctal(decimal, octal)
        integer, intent(in) :: decimal
        character(len=32), intent(out) :: octal
        integer :: n, i
        octal = ' '
        n = decimal
        i = 0
        do while (n > 0)
            i = i + 1
            octal(len(octal)-i+1:len(octal)-i+1) = char(iachar('0') + mod(n, 8))
            n = n / 8
        end do
    end subroutine DecimalToOctal

    ! 十进制转十六进制
    subroutine DecimalToHexadecimal(decimal, hexadecimal)
        integer, intent(in) :: decimal
        character(len=32), intent(out) :: hexadecimal
        integer :: n, i, remainder
        character(len=1), dimension(0:15) :: hexdigits
        data hexdigits /'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'/
        hexadecimal = ' '
        n = decimal
        i = 0
        do while (n > 0)
            i = i + 1
            remainder = mod(n, 16)
            hexadecimal(len(hexadecimal)-i+1:len(hexadecimal)-i+1) = hexdigits(remainder)
            n = n / 16
        end do
    end subroutine DecimalToHexadecimal

end program ConvertBases
```

:::

下面是 10 个测试例子以及它们的预期结果：

1. **输入：10**
   - 二进制：1010
   - 八进制：12
   - 十六进制：A

2. **输入：255**
   - 二进制：11111111
   - 八进制：377
   - 十六进制：FF

3. **输入：512**
   - 二进制：1000000000
   - 八进制：1000
   - 十六进制：200

4. **输入：1024**
   - 二进制：10000000000
   - 八进制：2000
   - 十六进制：400

5. **输入：4096**
   - 二进制：1000000000000
   - 八进制：10000
   - 十六进制：1000

6. **输入：1**
   - 二进制：1
   - 八进制：1
   - 十六进制：1

7. **输入：64**
   - 二进制：1000000
   - 八进制：100
   - 十六进制：40

8. **输入：123**
   - 二进制：1111011
   - 八进制：173
   - 十六进制：7B

9. **输入：999**
   - 二进制：1111100111
   - 八进制：1747
   - 十六进制：3E7

10. **输入：2048**
    - 二进制：100000000000
    - 八进制：4000
    - 十六进制：800

这些例子涵盖了从小到大不同范围的十进制数，并显示了它们转换成二进制、八进制和十六进制的结果。可以将这些例子用于测试程序的正确性。

![](https://blog.images.bornforthis.cn/docs-images/sha256/45/45da5a9c72b0bd0ba4dc687799c86dc975050fb98e3033c79e79ece75cd50552.png)

![](https://blog.images.bornforthis.cn/docs-images/sha256/25/25f41ecf5485d8625227f53b315ab9c393b131ab7511436d0bafa462b9b50593.png)

## 六、求各种不同形状截面的截面特性

1、查阅相关资料（如材料力学教材），给出相应形状的截面特性计算公式（可采用表格形式） ；

2、对任意形状的截面，利用分块法求解截面的几何特性，对于各个截面可以简化成各种形状的块，利用 NSHAPE（或一个控制变量）来控制各块的参数。要求输出截面面积、形心位置、惯性矩。

3、程序至少应包括矩形、圆形、圆端形、空心圆形四种截面；

NSHAPE = 1 矩形 NSHAPE = 2 圆端形

NSHAPE = 3 圆形 NSHAPE = 4 空心圆形

好的，以下是解决此Fortran编程题的具体步骤和代码示例。

### 1. 截面特性计算公式

好的，我们来逐步解决这个问题。首先，我会提供一些基本的截面特性计算公式，然后我们会用Fortran编程实现这些公式，以求解不同形状截面的特性。

下面是四种基本形状的截面特性公式表：

| 形状     | 面积 (A)                 | 形心位置 (Yc, Xc)                       | 惯性矩 (I)                           |
| -------- | ------------------------ | --------------------------------------- | ------------------------------------ |
| 矩形     | $b \times h$             | $\left(\frac{h}{2}, \frac{b}{2}\right)$ | $\frac{b \times h^3}{12}$  (关于x轴) |
| 圆形     | $\pi \times r^2$         | $(0, 0)$                                | $\frac{\pi \times r^4}{4}$           |
| 圆端形   | 稍复杂，待后续计算       | 待计算                                  | 待计算                               |
| 空心圆形 | $\pi \times (R^2 - r^2)$ | $(0, 0)$                                | $\frac{\pi \times (R^4 - r^4)}{4}$   |

### 2. 分块法计算公式

利用分块法，可以将复杂截面分解为简单形状的组合。每个块的面积 $A_i$，形心 $Y_{ci}, X_{ci}$ 和惯性矩 $I_i$ 可以独立计算，然后通过下面的公式组合：

- 总面积 \( A \): $A = \sum A_i$
  
- 形心位置 $Y_c, X_c$:
  - $Y_c = \frac{1}{A} \sum (A_i \times Y_{ci})$
  
  - $X_c = \frac{1}{A} \sum (A_i \times X_{ci})$
  
- 惯性矩 $I$ (以y轴为例，x 轴同理):
  - $I = \sum (I_i + A_i \times (Y_c - Y_{ci})^2)$


::: code-tabs

@tab Code1

```fortran-free-form
program SectionProperties
    implicit none
    integer :: NSHAPE
    real :: A, Yc, Xc, I

    ! 用户输入选择形状
    print *, '输入形状代码（1=矩形，2=圆端形，3=圆形，4=空心圆形）：'
    read *, NSHAPE

    select case (NSHAPE)
    case (1)
        call Rectangle(A, Yc, Xc, I)
    case (2)
        call TShape(A, Yc, Xc, I)  ! 假设已有圆端形计算函数
    case (3)
        call Circle(A, Yc, Xc, I)
    case (4)
        call HollowCircle(A, Yc, Xc, I)
    end select

    print *, '面积: ', A
    print *, '形心位置: (', Yc, ',', Xc, ')'
    print *, '惯性矩: ', I
end program SectionProperties

! 矩形函数定义
subroutine Rectangle(A, Yc, Xc, I)
    real, intent(out) :: A, Yc, Xc, I
    real :: b, h
    print *, '输入矩形的宽度和高度:'
    read *, b, h
    A = b * h
    Yc = h / 2
    Xc = b / 2
    I = b * h**3 / 12
end subroutine Rectangle

! 圆形函数定义
subroutine Circle(A, Yc, Xc, I)
    real, intent(out) :: A, Yc, Xc, I
    real :: r
    print *, '输入圆形的半径:'
    read *, r
    A = 3.14159 * r**2
    Yc = 0.0
    Xc = 0.0
    I = 3.14159 * r**4 / 4
end subroutine Circle

! 空心圆形函数定义
subroutine HollowCircle(A, Yc, Xc, I)
    real, intent(out) :: A, Yc, Xc, I
    real :: R, r
    print *, '输入外圆和内圆的半径:'
    read *, R, r
    A = 3.14159 * (R**2 - r**2)
    Yc = 0.0
    Xc = 0.0
    I = 3.14159 * (R**4 - r**4) / 4
end subroutine HollowCircle

! 圆端形（T形）函数定义（示例）
subroutine TShape(A, Yc, Xc, I)
    real, intent(out) :: A, Yc, Xc, I
    real :: b, h, r
    print *, '输入T形的宽度、高度和圆端半径:'
    read *, b, h, r
    A = b * h + 3.14159 * r**2
    Yc = (h * b * (h / 2) + 3.14159 * r**2 * (h + r)) / A
    Xc = b / 2
    I = (b * h**3 / 12) + (3.14159 * r**4 / 4) + (3.14159 * r**2 * (h + r - Yc)**2)
end subroutine TShape
```



:::



![](https://blog.images.bornforthis.cn/docs-images/sha256/9c/9c04d8c10ac7c337e4f932d2fac74c138d824bb270f7d203557967ccaf201f55.png)



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

