---
title: Java程序设计
date: 2023-06-05 22:28:07
author: AI悦创
isOriginal: true
category: 
    - Python期末辅导
    - Python期末1v1辅导
tag:
    - Python毕业设计辅导
    - Python毕业设计1v1辅导
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

## 一、程序题（本大题共 6小题，每小题5分，共30分）

### 1. 写出程序运行的结果

::: code-tabs

@tab 1

```java
public class ABC {
    public static void main(String args[]) {
        int i, s = 0;
        int a[] = {50, 60, 70, 80, 90};
        for (i = 0; i < a.length; i++) {
            if (a[i] % 2 == 0)
                s += a[i];
        }
        System.out.println("s=" + s);
    }
}
```

@tab 2

```java
public class ABC { // 定义一个名为ABC的公开类

    public static void main(String args[]) { // 主方法，程序执行的入口

        int i, s = 0; // 定义两个整型变量i和s，并初始化s为0

        int a[] = {50, 60, 70, 80, 90}; // 定义一个整型数组a并初始化其值

        for (i = 0; i < a.length; i++) { // 开始一个循环，从数组的第一个元素开始，直到最后一个元素

            if (a[i] % 2 == 0) // 判断当前数组元素是否为偶数（当一个数被2除余数为0时，该数为偶数）

                s += a[i]; // 如果当前元素为偶数，则将该元素的值加到s上
        }

        System.out.println("s=" + s); // 输出变量s的值
    }
}
```

:::

**运行结果：s=350**

### 2. 写出程序运行的结果

::: code-tabs

@tab 1

```java
public class TestArray {
    public static void main(String args[]) {
        int i, j;
        int a[] = {6, 7, 4, 3, 0, 8};
        for (i = 0; i < a.length - 1; i++) {
            int k = i;
            for (j = i; j < a.length; j++)
                if (a[j] < a[k])
                    k = j;
            int temp = a[i];
            a[i] = a[k];
            a[k] = temp;
        }
        for (i = 0; i < a.length; i++)
            System.out.print(a[i] + " ");
        System.out.println();
    }
}
```

@tab 2

```java
public class TestArray { // 定义一个名为TestArray的公开类

    public static void main(String args[]) { // 主方法，程序执行的入口

        int i, j; // 定义两个整型变量i和j

        int a[] = {6, 7, 4, 3, 0, 8}; // 定义一个整型数组a并初始化其值

        for (i = 0; i < a.length - 1; i++) { // 外层循环，从第一个元素开始，到倒数第二个元素

            int k = i; // 定义变量k，并初始化为当前外层循环的下标

            for (j = i; j < a.length; j++) // 内层循环，从当前外层循环的下标开始，到数组的最后一个元素

                if (a[j] < a[k]) // 如果当前元素的值小于k下标元素的值

                    k = j; // 更新k为当前元素的下标

            // 外层循环结束后，k指向的是从i到数组末尾的最小元素的下标
            int temp = a[i]; // 临时保存i下标的元素
            a[i] = a[k]; // 把最小元素交换到i的位置
            a[k] = temp; // 把原来i的位置的元素放到k的位置
        }

        for (i = 0; i < a.length; i++) // 遍历数组a
            System.out.print(a[i] + " "); // 输出每一个元素和一个空格

        System.out.println(); // 输出一个换行符，使得结果更美观
    }
}

```

:::

**答案是：0 3 4 6 7 8** 

选择排序。

### 3. 指出代码的错误之处并加以改正：

```java
public class AA {
    BB bb = new BB()
}

abstract class BB {
    public abstract int doSomething() {
    }
}
```

修改为：

```java
public abstract void doSomething(){} 
```

### 4. 指出代码的错误之处并加以改正：

```java
abstract class Something {
    private abstract String doSomething();
}
```

修改为：

```java
private String doSomething ();
```

### 5. 指出代码的错误之处并加以改正：

```java
interface Printable {
    protected int MAX = 100;

    void add();

    float sum(float x, float y);
}
```

修改为：

```java
int  MAX=100;
```

### 6. 阅读以下程序，写出输出结果

```java
class AA {
    AA() {
        System.out.print("AA  ");
    }
}

public class BB extends AA {
    BB() {
        System.out.print("BB");
    }

    public static void main(String[] args) {
        BB bb = new BB();
    }
}
```

**运行结果： AA BB** 

## 二 、简答题（本大题共2 小题，每题10分，共20分）

**1. 面向对象的三大特征，简要陈述一下**

基本特征：封装、继承、多态

- 封装指将对象的属性和行为包装在一起，隐藏对象的内部细节，仅向外部提供必要的接口来与对象进行交互。这样可以保证对象的内部状态不会被外部直接访问或修改，从而提高程序的安全性和可维护性。

- 继承允许子类继承父类的属性和方法，从而避免重复编写代码，提高代码的复用性和可维护性。继承的实现可以通过使用 Java 中的关键字 extends 来完成。

- 多态指的是同一个方法在不同的对象上会产生不同的行为。通俗地说，就是不同的对象对同一个方法会有不同的实现。

**2. 类和对象的区别？**

1. 类是一个抽象的概念，它不存在于现实中的时间/空间里，类只是为所有的对象定义了抽象的属性与行为。

2. 对象是类的一个具体。它是一个实实在在存在的东西。

3. 类是一个静态的概念，类本身不携带任何数据。当没有为类创建任何对象时，类本身不存在于内存空间中。

4. 对象是一个动态的概念。每一个对象都存在着有别于其它对象的属于自己的独特的属性和行为。对象的属性可以随着它自己的行为而发生改变。

## 三、编程题（本大题共3小题，共50分）

**1. 打开 Eclipse 软件，创建工程名为 java1 的工程，在工程下创建一下文件（本题5分）**

```java
file>>>new>>>Project>>>Java Project>>>next
```

- Project name：工程名称「java1」
- 命令行查看 Java 版本，然后选择自己的 JRE 版本；
- 点击 finish 即可；
- 鼠标左键选中 src，New>>>Package>>>Name:com.aiyc>>>finish
- 新建 Java 类：包>>>右键 New>>>Class>>>Name: Hello>>>finish

**（1）设计一个Complex复数类，该类包括的属性有：复数的实部 real，复数的虚部 image；包括的方法有：设置和获取复数的实部和虚部的 setter 及 getter 方法，构造方法重载(一个无参，一个有参)，show() 方法表示输出复数的信息。（本题20分）**

```java
public class Complex {
    private double real;
    private double image;

    /*空参构造*/
    public Complex() {
        super();
    }

    /*含参构造*/
    public Complex(double real, double image) {
        super();
        this.real = real;
        this.image = image;
    }

    public double getReal() {
        return real;
    }

    public void setReal(double real) {
        this.real = real;
    }

    public double getImage() {
        return image;
    }

    public void setImage(double image) {
        this.image = image;
    }

    public void show(double real, double image) {
        System.out.println(new Complex(real, image));
    }

}
```

**（2）另外编写一个Test类，创建一个Complex类对象complex，该对象的实部5.0，虚部为3.0，调用show()方法输出该对象的信息。(本题10分)**

```java
public class Test {
	public static void main(String[] args) {
		Complex complex = new Complex(5.0, 3.0);
complex.show(complex)
	}
}
```

**（3）编写一个Sum类，实现5！的和。（本题15分）**

```java
public static int Sum() {
    int sum=1;
    for(int i=1;i<=5;i++) {
        sum*=i;
    }
    return sum;
} 
```





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





