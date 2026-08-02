---
title: 06-instance 和 object 完全是一种东西吗？
date: 2024-11-28 21:04:07
icon: java
author: AI悦创
isOriginal: true
category: 
    - Java体系课
    - Java FQA
tag:
    - Java体系课
    - Java FQA
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

## 1. Object 和 instance 区分

### 1.1 Object（对象）

- **定义**：`Object` 指的是根据某个类创建出来的具体实例，存在于内存中。

- **特点**：

    - 它是类的具体实现。

    - 通过 `new` 关键字（或其他方式，如反射、克隆等）创建。

    - 例如：

        ```java
        class Person {
            String name;
        }
        
        public class Main {
            public static void main(String[] args) {
                Person p = new Person(); // 这里的 p 就是一个对象
            }
        }
        ```

        在上述代码中，`p` 是 `Person` 类的对象。



### 1.2 Instance（实例）

- **定义**：`Instance` 表示某个类的一个特定实现，是一个更语义化的概念。一个对象是某个类的实例。

- **特点**：

    - 它是类和对象之间的关系描述。

    - 更强调“**某个类的实例化对象**”这个过程或结果。

    - 例如：

        ```java
        public class Main {
            public static void main(String[] args) {
                Person p = new Person();
                if (p instanceof Person) { // 判断 p 是否是 Person 的实例
                    System.out.println("p 是 Person 的一个实例");
                }
            }
        }
        ```

        在上面代码中，`p` 是一个对象，同时也是 `Person` 的实例。

### 1.3 主要区别

| 属性           | Object（对象）                | Instance（实例）                 |
| -------------- | ----------------------------- | -------------------------------- |
| **含义**       | 内存中的具体存在              | 类的实现，更多是“属于”关系的概念 |
| **使用场景**   | 强调对象本身                  | 强调对象与类的关系或类型检查     |
| **实例化关系** | 每个实例化的对象是一个 Object | 每个 Object 是某个类的 Instance  |

### 1.4 小结

- 所有的 `instance` 是 `object`，但并非所有的 `object` 都能用 `instance` 的语义来描述。
- 更直观地说：
    - **`Object`** 是对象本身。
    - **`Instance`** 是描述对象与类关系的词汇。

理解两者的差别主要在语境和表达方式上，代码逻辑层面它们经常指向同一件事。

## 2. 对象是存储在堆中

在 Java 中，**对象**（`object`）通常是存储在 **堆**（heap）上的，而不是 **栈**（stack）上。让我们来更详细地解释：

### 2.1 栈（Stack）

- 栈是由操作系统分配的内存区域，主要用于存储方法调用时的局部变量、方法的参数以及方法的调用栈帧。
- **局部变量和基本类型（如 `int`, `float`, `char` 等）通常存储在栈上**，当方法执行结束时，这些变量会被销毁。
- 对于引用类型（如类对象、数组等），栈上会存储对象的 **引用（地址）**，而对象的实际数据存储在堆上。

### 2.2 堆（Heap）

- 堆是一个用来存储 **所有对象实例** 的内存区域，主要由 Java 虚拟机（JVM）管理，堆内存的分配和释放是由垃圾回收器（GC）来处理的。
- 当你使用 `new` 关键字创建一个对象时，**对象本身会存储在堆中**，而栈中存储的是该对象的引用（或指针）。
- 堆内存的大小一般较大，并且会随时分配和回收对象的内存。

### 2.3 对象存储位置的具体例子

```java
class Person {
    String name;
    int age;
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();  // 创建对象
        p.name = "John";
        p.age = 30;
    }
}
```

- 在上面的代码中：
    - `p` 是一个 **引用类型** 变量，它会存储在 **栈上**，因为它是一个局部变量。
    - `new Person()` 创建了一个 `Person` 对象，这个对象的实际数据（如 `name` 和 `age`）会存储在 **堆上**。
    - 栈中的 `p` 变量会存储对 `Person` 对象的引用，即该对象在堆中的地址。

### 2.4 栈与堆的关系

- 栈中的变量 **引用** 堆中的对象。
- 对象的数据结构和内容通常在堆上创建和管理。
- 对象的引用在栈上分配内存，调用方法时会创建新的栈帧来存储局部变量和对象引用。

### 2.5 实例与栈/堆

- 当我们说一个对象是某个类的“实例”（instance）时，指的是该对象在堆上存在。
- 对象引用（即变量）通常存储在栈上，而对象本身存储在堆上。

### 2.6 总结

- **对象实例**（如 `new Person()` 创建的对象）存储在 **堆上**。
- **局部变量**（如 `p`）存储在 **栈上**，它们保存对堆中对象的引用。



## 3. 引用是什么呢？

在 Java 中，**引用**（reference）是指向对象的一个指针，实际上它是对象在内存中的位置（地址）。引用本身存储在栈中，而对象的数据和实例则存储在堆中。

### 3.1 引用的定义

当你创建一个对象时，Java 并不直接操作对象本身，而是通过引用来访问对象。引用是一个变量，它指向某个堆中的对象。

例如：

```java
class Person {
    String name;
    int age;
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();  // 创建一个 Person 对象并返回一个引用
        p.name = "Alice";  // 使用引用 p 访问对象的属性
        p.age = 25;
    }
}
```

在这个例子中，`p` 是一个 **引用** 变量，它指向堆中的 `Person` 对象。`p` 变量本身存储在栈上，而它指向的 `Person` 对象存储在堆上。

### 3.2 引用的作用

引用的作用是让我们能够通过栈中的变量访问堆中的对象数据。通过引用，我们可以操作对象的属性、调用对象的方法等。

例如：

```java
Person p1 = new Person();  // 创建对象 p1，指向堆中的 Person 实例
Person p2 = p1;  // p2 引用指向 p1 所指向的同一个 Person 对象
```

在这个例子中：

- `p1` 和 `p2` 都是 **引用**，它们指向相同的 `Person` 对象。
- `p1` 和 `p2` 是同一个对象的不同引用，修改其中一个引用指向的对象的属性会影响到另一个引用看到的对象。

### 3.3 引用与对象的关系

- **对象** 是实际存储数据的内存区域（堆中），包括对象的实例变量（如 `name` 和 `age`）。
- **引用** 是指向这个对象的指针（或地址），它存储在栈中。

对象和引用的关系：

- 引用变量保存着指向堆中对象的地址（内存位置）。
- 通过引用变量可以访问堆中的对象。

### 3.4 引用的类型

Java 中有不同类型的引用，它们用于表示对对象的不同访问控制：

1. **强引用（Strong Reference）**
    - 最常见的引用类型。例如：`Person p = new Person();`
    - 当一个对象拥有强引用时，垃圾回收器不会回收它，直到没有任何强引用指向它。
2. **软引用（Soft Reference）**
    - 用于内存不足时优先回收的对象。`SoftReference` 类型引用对象，在内存不足时对象会被回收。
3. **弱引用（Weak Reference）**
    - 比软引用的生命周期更短。只要垃圾回收器运行，无论内存是否足够，弱引用指向的对象都会被回收。
4. **虚引用（Phantom Reference）**
    - 一种非常特殊的引用类型，通常用于在对象被垃圾回收之前进行一些清理操作。虚引用指向对象的内存地址，但不参与正常的垃圾回收。

### 3.5 引用的行为

- **赋值引用：**

    ```java
    Person p1 = new Person();
    Person p2 = p1;  // p2 引用现在指向 p1 指向的同一个对象
    ```

    这里 `p2` 是 `p1` 的 **别名**，它们指向同一个对象，修改 `p2` 或 `p1` 的值会影响同一个对象。

- **Null 引用：**

    ```java
    Person p = null;  // p 不指向任何对象
    ```

    通过 `null` 引用，变量没有指向任何对象，这样的引用变量不能用来访问对象的属性或方法。

### 3.6 引用传递（按引用传递）

Java 的方法参数是 **按值传递** 的，但对于对象引用来说，它传递的是 **引用的值**，即对象的地址（引用值）。因此，当你传递对象引用给方法时，方法内部的引用可以修改对象的内容，但不能改变引用本身指向的对象。

例如：

```java
public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.name = "Alice";
        changeName(p);  // 传递引用
        System.out.println(p.name);  // 输出 "Bob"
    }

    public static void changeName(Person person) {
        person.name = "Bob";  // 修改对象内容
    }
}
```

在这个例子中，`changeName` 方法接受的是 `p` 的引用（即 `person` 变量），它修改了 `Person` 对象的内容。

### 3.7 总结

- **引用** 是指向堆中对象的一个地址，它存储在栈中。
- **对象** 是堆中实际存在的数据，它包含实际的属性值和方法。
- 通过引用，你可以访问和操作堆中的对象。
- Java 中通过引用进行对象的操作、传递和共享。











欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
