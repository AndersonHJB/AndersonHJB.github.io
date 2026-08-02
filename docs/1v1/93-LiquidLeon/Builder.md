---
title: Builder
date: 2024-09-24 21:58:17
author: AI悦创
isOriginal: true
icon: blog
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
watermark: true
---

你好，我是悦创。

Java 的 Builder 模式（建造者模式）是一种设计模式，通常用于构建复杂对象。它通过一步步地构建一个对象来避免构造函数参数过多的问题，同时提高代码的可读性和灵活性。我们可以通过 Builder 模式在构建对象时指定我们需要的字段，而不必每次都传递所有的参数。

## 1. 什么时候使用 Builder 模式？

1. **构造函数参数过多**：如果类有多个可选参数，直接使用构造函数可能会显得混乱。
2. **对象不可变**：通过 Builder 模式，创建对象的过程在构造完成之后就不会再被修改。
3. **提高可读性**：可以按需设置不同的参数，而不用处理多个构造函数的重载。

## 2. Builder 模式的步骤

1. **定义类**：包含我们要创建的对象的属性。
2. **创建 Builder 类**：Builder 类和主类（我们要创建的对象的类）会有相同的属性，但 Builder 类将逐步构建对象。
3. **设置方法**：Builder 类包含用于设置属性的方法，每个方法都会返回 Builder 本身以实现链式调用。
4. **`build` 方法**：最后提供一个 `build` 方法来创建对象。

## 3. 实例讲解

假设我们有一个 `Person` 类，它有多个属性：`name`、`age`、`address`、`phoneNumber`。有些属性是可选的，我们可以使用 Builder 模式来创建对象。

```java
// 1. 定义 Person 类
public class Person {
    private String name;
    private int age;
    private String address;
    private String phoneNumber;

    // 私有构造函数，只能通过 Builder 创建
    private Person(PersonBuilder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.address = builder.address;
        this.phoneNumber = builder.phoneNumber;
    }

    // 2. 创建 Builder 类
    public static class PersonBuilder {
        // 与 Person 类中的属性相同
        private String name;
        private int age;
        private String address;
        private String phoneNumber;

        // 3. 为每个属性创建 setter 方法，返回 Builder 对象
        public PersonBuilder setName(String name) {
            this.name = name;
            return this;
        }

        public PersonBuilder setAge(int age) {
            this.age = age;
            return this;
        }

        public PersonBuilder setAddress(String address) {
            this.address = address;
            return this;
        }

        public PersonBuilder setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
            return this;
        }

        // 4. build 方法返回最终的 Person 对象
        public Person build() {
            return new Person(this);
        }
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age +
                ", address='" + address + "', phoneNumber='" + phoneNumber + "'}";
    }

    public static void main(String[] args) {
        // 5. 使用 Builder 创建对象
        Person person = new Person.PersonBuilder()
                .setName("Alice")
                .setAge(30)
                .setAddress("123 Main St")
                .setPhoneNumber("555-1234")
                .build();

        System.out.println(person);  // 输出：Person{name='Alice', age=30, address='123 Main St', phoneNumber='555-1234'}
    }
}
```

## 4. 代码分析

1. **Person 类**：包含四个属性：`name`、`age`、`address`、`phoneNumber`。构造函数是私有的，只有通过 `PersonBuilder` 才能创建 `Person` 对象。
2. **PersonBuilder 类**：内部静态类，包含与 `Person` 类相同的属性，并提供链式调用的 setter 方法。
3. **链式调用**：每个 `set` 方法都返回 `this`（即 `PersonBuilder` 实例本身），以便可以连续调用多个 `set` 方法。
4. **`build` 方法**：一旦所有所需属性都已设置，`build` 方法将返回一个新的 `Person` 对象。
5. **使用 Builder 创建对象**：在 `main` 方法中，通过链式调用设置所需的属性，最后通过 `build` 方法生成对象。

## 5. Builder 模式的优点

- **简化代码**：避免了多个构造函数的重载，让代码更清晰。
- **灵活性**：可以按需设置不同的属性，避免在创建对象时传入不必要的参数。
- **不可变性**：对象一旦构建，就不会再被修改，增加了安全性。

这样，你就可以很容易地通过 Builder 模式创建对象，即使这个对象有很多可选的参数。

## 6. Coder

- 传统情况下，我们通过构造函数来创建对象，可能会有多个构造函数来处理不同的情况。如果 `Person` 类的属性较多，构造函数的参数会变得非常复杂。
- 使用 Builder 模式，我们可以更加灵活地构建对象，只设置需要的属性，而不必为各种组合创建不同的构造函数。

::: code-tabs

@tab Code1

```java
public class Person {
    private String name;
    private int age;
    private String address;
    private String phoneNumber;

    // 1. 带所有参数的构造函数
    public Person(String name, int age, String address, String phoneNumber) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    // 2. 如果参数较少，我们可能需要额外的构造函数
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        this.address = "Unknown";  // 默认值
        this.phoneNumber = "N/A";  // 默认值
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + 
               ", address='" + address + "', phoneNumber='" + phoneNumber + "'}";
    }

    public static void main(String[] args) {
        // 3. 创建对象
        Person person1 = new Person("Alice", 30, "123 Main St", "555-1234");
        Person person2 = new Person("Bob", 25);  // 使用简化的构造函数

        System.out.println(person1);  // 输出：Person{name='Alice', age=30, address='123 Main St', phoneNumber='555-1234'}
        System.out.println(person2);  // 输出：Person{name='Bob', age=25, address='Unknown', phoneNumber='N/A'}
    }
}
```

@tab Code2

```java
public class Person {
    private String name;
    private int age;
    private String address;
    private String phoneNumber;

    // 1. 私有构造函数，只能通过 Builder 创建对象
    private Person(PersonBuilder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.address = builder.address;
        this.phoneNumber = builder.phoneNumber;
    }

    // 2. 静态内部类 PersonBuilder
    public static class PersonBuilder {
        private String name;
        private int age;
        private String address = "Unknown";  // 默认值
        private String phoneNumber = "N/A";  // 默认值

        // 3. set 方法，返回当前 Builder 对象，实现链式调用
        public PersonBuilder setName(String name) {
            this.name = name;
            return this;
        }

        public PersonBuilder setAge(int age) {
            this.age = age;
            return this;
        }

        public PersonBuilder setAddress(String address) {
            this.address = address;
            return this;
        }

        public PersonBuilder setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
            return this;
        }

        // 4. build 方法，创建 Person 对象
        public Person build() {
            return new Person(this);
        }
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + 
               ", address='" + address + "', phoneNumber='" + phoneNumber + "'}";
    }

    public static void main(String[] args) {
        // 5. 使用 Builder 创建对象
        Person person1 = new Person.PersonBuilder()
                .setName("Alice")
                .setAge(30)
                .setAddress("123 Main St")
                .setPhoneNumber("555-1234")
                .build();

        Person person2 = new Person.PersonBuilder()
                .setName("Bob")
                .setAge(25)
                .build();  // 未设置 address 和 phoneNumber，将使用默认值

        System.out.println(person1);  // 输出：Person{name='Alice', age=30, address='123 Main St', phoneNumber='555-1234'}
        System.out.println(person2);  // 输出：Person{name='Bob', age=25, address='Unknown', phoneNumber='N/A'}
    }
}
```





:::



## 对比

| **特性**           | **没有 Builder 模式**                        | **使用 Builder 模式**                                        |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| **构造函数数量**   | 需要多个构造函数，处理不同参数组合           | 只需一个私有构造函数，通过 Builder 构建对象                  |
| **参数管理**       | 调用时必须提供所有参数，容易出错             | 可以通过链式调用逐步设置参数，灵活性更高                     |
| **可读性**         | 传递多个参数时，可能不清楚每个参数的具体含义 | 使用 `set` 方法，清晰标识每个参数是什么                      |
| **默认值处理**     | 需要在不同构造函数中手动设置默认值           | Builder 内部可以为属性设置默认值，未设置的属性自动使用默认值 |
| **对象的创建方式** | 必须通过构造函数一次性创建，难以调整         | 可以分步骤构建对象，选择性地设置需要的属性                   |

通过 Builder 模式，你可以灵活地创建对象，避免了构造函数过多、参数传递混乱等问题。这种方式尤其适合属性较多或创建过程复杂的类。





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

