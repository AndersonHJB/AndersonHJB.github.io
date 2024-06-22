---
title: Practice Final exam
date: 2023-05-20 14:09:00
icon: java
author: AI悦创
isOriginal: true
category: 
    - Python 一对一教学
    - uic
    - UTS
tag:
    - Python 一对一教学
    - uic
    - UTS
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

## Question 1

::: tabs

@tab EN

Given this method header, what is the data type returned by the method? 

public String getName(int ID)

@tab ZH

根据这个方法头，该方法返回的数据类型是什么？

public String getName(int ID)

@tab Answer

答案：该方法返回的数据类型是 String（字符串）。

:::

## Question 2

::: tabs

@tab EN

Write down the correct way to declare and create an object using the following Constructor method header: Book(String title, double cost, boolean inStock)

@tab ZH

使用下面的构造函数方法header，写出声明和创建对象的正确方法:Book(String title, double cost, boolean inStock)

@tab Answer

```java
public class Book {
    private String title;
    private double cost;
    private boolean inStock;

    public Book(String title, double cost, boolean inStock) {
        this.title = title;
        this.cost = cost;
        this.inStock = inStock;
    }

    // 根据需要添加getter、setter方法和其他方法
}
```

在这个类定义中，我们定义了三个私有变量 `title`，`cost`和 `inStock` 来存储书的信息，然后我们定义了一个构造器，它接受相应的参数来初始化这些变量。

然后你可以这样创建一个 `Book` 对象：

```java
Book myBook = new Book("书的标题", 29.99, true);
```

@tab 补充

在Java中，`this` 关键字是一个引用变量，它引用了当前对象。在构造方法中，如果参数名与类的字段名相同，那么在该方法中，我们需要使用 `this` 关键字来区分参数和字段。

在你给出的 `Book` 类的构造方法中，我们有三个参数 `title`, `cost` 和 `inStock`，而这些参数的名称与类的字段名称相同。所以在这种情况下，如果你想要在构造方法中引用类的字段（而不是构造方法的参数），你就需要使用 `this` 关键字。

所以，以下代码：

```java
public Book(String title, double cost, boolean inStock) {
    this.title = title;
    this.cost = cost;
    this.inStock = inStock;
}
```

确保了将传入构造方法的参数值赋值给类的字段，而不是仅仅赋值给方法参数自己。

然而，如果参数名称与类的字段名称不同，那么就无需使用 `this`。例如：

```java
public Book(String bookTitle, double bookCost, boolean isBookInStock) {
    title = bookTitle;
    cost = bookCost;
    inStock = isBookInStock;
}
```

在这种情况下，由于构造方法的参数名与类的字段名不同，所以我们无需使用 `this` 来区分。

:::



## Question 3

Analyse this array and write down the value of `table3D[0][1][0]`.

```java
 int[][][] table3D = {
     {{5,7,4},{19,20,6}},
     {{15,32,9},{7,8,3}}, 
     {{79,13,11},{11,25,23}}
 };
```

这个三维数组 table3D 的索引是从 0 开始的，所以 `table3D[0][1][0]` 将代表数组的第 1 个元素的第 2 个元素的第 1 个元素。

下面是这个数组的更详细的表示，为了更清楚地表示索引：

```java
table3D[0] = {{5,7,4},{19,20,6}}
table3D[1] = {{15,32,9},{7,8,3}}
table3D[2] = {{79,13,11},{11,25,23}}
```

在 `table3D[0]` 中：

```java
table3D[0][0] = {5,7,4}
table3D[0][1] = {19,20,6}
```

在 `table3D[0][1]` 中：

```java
table3D[0][1][0] = 19
```

所以，`table3D[0][1][0]` 的值是 19。

## Question 4

Write the Java code to declare and initialise a constant called STATUS to hold the value true. You must choose the most appropriate data type and assign it the value true

```java
public class Main {
    public static void main(String[] args) {
        final boolean STATUS = true;
        System.out.println(STATUS);
    }
}
```

我创建了一个`boolean`类型的常量`STATUS`并将其初始化为`true`。注意，因为它是`final`，所以我们不能在后面改变它的值。

:::: tabs

@tab final()

在Java中，`final`关键字可以用在许多不同的上下文中，包括类、方法和变量。下面是`final`关键字在不同情况下的行为：

1. **`final` 变量**：一旦初始化，就不能更改其值。对于基本数据类型，这意味着变量的值不可更改，而对于对象引用，这意味着不能更改引用到的对象（但可以更改对象的状态，即其成员变量）。例如：

    ```java
    final int num = 10; // num 不能被重新赋值
    final List<String> list = new ArrayList<>(); // list 引用不能被重新赋值，但我们可以改变 list 中的元素
    ```

2. **`final` 方法**：无法在子类中被重写。这意味着当我们希望方法的行为在所有的子类中都保持一致时，我们可以将其声明为`final`。例如：

    ```java
    public class Parent {
        public final void show() {
            System.out.println("This is a final method.");
        }
    }

    public class Child extends Parent {
        // 下面的代码会产生编译错误，因为我们试图重写 final 方法
        /*
        @Override
        public void show() {
            System.out.println("Overriding a final method.");
        }
        */
    }
    ```

3. **`final` 类**：不能被继承。这意味着我们无法创建一个继承自`final`类的类。例如：

    ```java
    public final class FinalClass {
        // some code
    }
    
    // 下面的代码会产生编译错误，因为我们试图继承 final 类
    /*
    public class SubClass extends FinalClass {
        // some code
    }
    */
    ```

总结起来，`final`关键字提供了一种方式，允许我们限制代码的某些方面不被修改，这有助于我们保持代码的稳定性和一致性。

@tab 提问

::: info

那么 void 前面的 static 和 final 啥的区别呢？

:::

在 Java 中，`void` 是一个关键字，它表示方法不返回任何值。但是，`static` 和 `final` 是修饰符，它们可以用来修改类、方法或变量的行为。

以下是它们的含义和用法：

- `static`：该关键字用于声明静态方法或变量。静态方法是属于类的，而不是属于类的任何一个实例的。你无需创建类的对象就可以调用静态方法。静态变量是类的所有实例共享的变量。即使你没有创建类的对象，也可以通过类来访问静态变量。

例如：

```java
public class MyClass {
    static int staticVar = 10;

    static void staticMethod() {
        System.out.println("This is a static method.");
    }
}

// 在其他地方调用
MyClass.staticMethod();  // 输出："This is a static method."
System.out.println(MyClass.staticVar);  // 输出：10
```

- `final`：该关键字用于声明一个常量，也就是说一旦赋值就不能改变。它可以用来修饰类、方法和变量。如果用 `final` 修饰一个类，则该类不能被继承。如果用 `final` 修饰一个方法，则该方法不能在子类中被重写。如果用 `final` 修饰一个变量，则该变量的值只能被赋值一次，之后就不能改变。

例如：

```java
public class MyClass {
    final int finalVar = 10;

    final void finalMethod() {
        System.out.println("This is a final method.");
    }
}

// 在其他地方调用
MyClass myObject = new MyClass();
myObject.finalMethod();  // 输出："This is a final method."
System.out.println(myObject.finalVar);  // 输出：10
```

这里要注意的是，虽然 `finalVar` 被 `final` 修饰，但由于它是一个实例变量，所以每个 MyClass 对象都有它自己的 `finalVar` 变量，这些变量的值可以不同。只是对于同一个对象，它的 `finalVar` 一旦赋值后，就不能改变了。

::::

## Question 5

Write a for loop that adds up the numbers between 5 and 30 inclusive.

## Question 6

Write a class Student that has: Attributes for name, ID and number of subjects 

A Student constructor with three parameters used to initialise all attributes in the class.

Accessor and mutator for the student ID

A toString() method to return the value of all attributes combined in one String 

A method that returns true or false depending on whether the Student is full time (this is true of the Student is studying 4 subjects or more) 

YOU MUST WRITE THE ENTIRE CLASS

:::: tabs

@tab 1

```java
public class Student {
    private String name;
    private String ID;
    private int numberOfSubjects;

    public Student(String name, String ID, int numberOfSubjects) {
        this.name = name;
        this.ID = ID;
        this.numberOfSubjects = numberOfSubjects;
    }

    // Accessor for the student ID
    public String getID() {
        return this.ID;
    }

    // Mutator for the student ID
    public void setID(String ID) {
        this.ID = ID;
    }

    // toString() method
    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", ID='" + ID + '\'' +
                ", numberOfSubjects=" + numberOfSubjects +
                '}';
    }

    // Method to check if the student is full time
    public boolean isFullTime() {
        return this.numberOfSubjects >= 4;
    }
}
```

这个`Student` 类包括了以下属性：

- `name` 代表学生的名字
- `ID` 代表学生的ID
- `numberOfSubjects` 代表学生的学科数量

构造器`Student`接收三个参数来初始化这些属性。

访问器 `getID` 和修改器 `setID` 用于获取和设置学生的ID。

`toString` 方法返回所有属性值组成的字符串。

`isFullTime` 方法检查学生是否是全日制学生。如果学生的科目数量大于或等于4，那么这个学生就是全日制学生。

::: details tip

1. 具有三个属性：名字（name），ID和科目数量（number of subjects）。

2. 具有一个构造器（constructor），它接受三个参数来初始化类的所有属性。

3. 具有学生ID的访问器（accessor）和修改器（mutator）。访问器用于获取属性的值，而修改器用于更改属性的值。

4. 具有一个toString()方法，这个方法返回所有属性值组成的一个字符串。

5. 具有一个方法，该方法根据学生是否为全日制（如果学生学习的科目数量为4或更多则为真）返回true或false。

上述的Java代码正是根据这些要求创建的"Student"类。其中：

- `Student(String name, String ID, int numberOfSubjects)`这是一个构造器，用于初始化类的所有属性。

- `getID()`和`setID(String ID)`分别是学生ID的访问器和修改器。

- `toString()`方法用于返回所有属性值组成的字符串。

- `isFullTime()`方法用于检查学生是否是全日制的。



@tab 注释

```java
// 定义一个公开的学生类
public class Student {
    // 定义私有属性: 名字，ID 和 科目数量
    private String name;
    private String ID;
    private int numberOfSubjects;

    // 定义一个带有三个参数的公开构造器（构造方法）
    // 用于初始化学生类的所有属性
    public Student(String name, String ID, int numberOfSubjects) {
        this.name = name; // 设置名字
        this.ID = ID; // 设置ID
        this.numberOfSubjects = numberOfSubjects; // 设置科目数量
    }

    // 访问器：获取学生ID
    public String getID() {
        return this.ID;
    }

    // 修改器：设置学生ID
    public void setID(String ID) {
        this.ID = ID;
    }

    // toString()方法：返回所有属性组合成的一个字符串
    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", ID='" + ID + '\'' +
                ", numberOfSubjects=" + numberOfSubjects +
                '}';
    }

    // 方法：根据学生是否全日制返回true或false
    // 如果学生学习的科目数量大于或等于4，则认为是全日制学生
    public boolean isFullTime() {
        return this.numberOfSubjects >= 4;
    }

    // 主函数：用于测试学生类
    public static void main(String[] args) {
        // 创建一个新的学生对象，名字是John Doe，ID是123456，学习科目数量是5
        Student student1 = new Student("John Doe", "123456", 5);

        // 打印这个学生对象的所有信息
        System.out.println(student1.toString());

        // 检查这个学生是否是全日制学生，并打印结果
        System.out.println("Is student full time: " + student1.isFullTime());
        
        // 修改学生的ID
        student1.setID("654321");

        // 再次打印学生的所有信息，看看ID是否已经改变
        System.out.println("After ID change: " + student1.toString());
    }
}
```

::::

















