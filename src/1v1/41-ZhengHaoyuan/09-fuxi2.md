---
title: NYU CS-UY 2124 复习
date: 2024-05-06 08:08:43
author: AI悦创
isOriginal: true
category: 
    - python 1v1
tag:
    - NYU – Tandon School of Engineering
icon: c
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

```cpp
PRACTICE QUESTIONS:

void foo(int x) {
    int* const p = &x; //line A
    x = 28; //line B
    cout << *p << ''; //line C
    *p = 42; //line D
}
int main() {
    int y = 17;
    foo(y);
    cout << y << endl;
}
```

```cpp
#include <iostream>
using namespace std;

class Derived;

class Base {
public:
    virtual void method(Base& arg) {
        std::cout << "Base::method(Base)\n";
    }
    virtual void method(Derived& arg) {
        std::cout << "Base::method(Derived)\n";
    }
};

class Derived : public Base {
public:
    void method(Base& arg) {
        std::cout << "Derived::method(Base)\n";
    }
    void method(Derived& arg) {
        std::cout << "Derived::method(Derived)\n";
    }
};

void someFunc(Base& argA, Base& argB) {
    argA.method(argB);
}

int main() {
    Derived d;
    Base b;
    someFunc(b, d);
}
```

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> intVec = {1, 2, 3, 4, 5};

    for (int& num: intVec) {
        /*
         * 在 C++ 中，int& 表示对 int 类型的引用。通过使用引用，我们可以直接操作 intVec 中的元素，而不是创建一个元素的副本。
         * 当我们通过引用（int&）遍历 intVec 时，对 num 所做的任何修改都将影响到 intVec 中的对应元素。
         * */
        num *= 2;
    }

    for (int num: intVec) {
        std::cout << num << " ";
    }

    return 0;
}
```





```cpp
class FederationStarship {
public:
    FederationStarship() {}
    void attack() { std::cout << "FederationStarship firing phasers\n"; }
};

class Constitution : public FederationStarship {
public:
    virtual void transport() { std::cout << "Beam me up!\n"; }
    void attack() { std::cout << "Constitution firing phasers\n"; }
};

int main() {
    FederationStarship* NCC = new Constitution();
    NCC->transport(); // 这里将调用 Constitution::transport()
}
```

但是这个代码中存在一个问题。`FederationStarship` 类中没有定义 `transport` 方法，因此无法通过 `FederationStarship` 指针 `NCC` 调用 `transport` 方法。我们需要修改 `FederationStarship` 类，确保它包含一个虚函数 `transport`。修改后的代码如下：

```cpp
#include <iostream>

class FederationStarship {
public:
    FederationStarship() {}
    virtual void transport() {} // 添加 transport 方法的定义
    virtual void attack() { std::cout << "FederationStarship firing phasers\n"; }
};

class Constitution : public FederationStarship {
public:
    void transport() override { std::cout << "Beam me up!\n"; }
    void attack() override { std::cout << "Constitution firing phasers\n"; }
};

int main() {
    FederationStarship* NCC = new Constitution();
    NCC->transport(); // 将调用 Constitution::transport()，输出 "Beam me up!"
}
```

修改后的代码中：
- 我们在 `FederationStarship` 类中添加了一个虚拟的 `transport` 函数定义。
- 在 `Constitution` 类中重写 `transport` 方法。
- `main` 函数中的 `NCC->transport()` 调用将输出 "Beam me up!"，因为虚函数的机制将会在运行时调用派生类的 `transport` 实现。

---



```cpp
#include <iostream>

class Member {
public:
    Member() { std::cout << 1; }
    ~Member() { std::cout << 2; }
};

class Base {
    Member member;

public:
    Base() { std::cout << 3; }
    ~Base() { std::cout << 4; }
};

class Derived : public Base {
public:
    Derived() { std::cout << 5; }
    ~Derived() { std::cout << 6; }
};

int main() {
    Derived der;
}
```

这个代码片段定义了三个类：`Member`、`Base` 和 `Derived`。其中：
- `Member` 类有构造函数和析构函数，分别输出 `1` 和 `2`。
- `Base` 类包含一个 `Member` 类的成员变量，并在构造函数和析构函数中输出 `3` 和 `4`。
- `Derived` 类继承自 `Base`，它的构造函数和析构函数分别输出 `5` 和 `6`。

在 `main` 函数中，`Derived` 对象 `der` 被创建并销毁。在对象生命周期中，将依次调用构造函数和析构函数。构造和析构函数的执行顺序是：
1. 先调用 `Member` 的构造函数，输出 `1`。
2. 再调用 `Base` 的构造函数，输出 `3`。
3. 最后调用 `Derived` 的构造函数，输出 `5`。

当 `der` 被销毁时，析构函数的执行顺序是：
1. 先调用 `Derived` 的析构函数，输出 `6`。
2. 再调用 `Base` 的析构函数，输出 `4`。
3. 最后调用 `Member` 的析构函数，输出 `2`。

因此，完整的输出顺序是：

```
135642
```













### 13. Define a class **Skyrim** (just that class and nothing else)

* The Skyrim class will inherit from the class **Elder**.
    * **Elder**
        * has a constructor that takes a string representing your **registration code**.
        * It also has any necessary operators and supports copy control. You should not need to know anything more about the class.
        * NB: you are **not responsible** for defining the Elder class.

* Skyrim has two fields, the **player's name** and a **collection of Dragon pointers**. There may be lots of different types of Dragons, but we won't be responsible for defining those derived classes.
    * The Dragons will all be on the heap. In fact there is a method that you are **not responsible** for, called add, that creates the Dragons on the heap and inserts their addresses into the collection.
        * NB: you are **not responsible** for defining the Dragon class.
    * Dragons support copy control, along with all necessary operators

* You are responsible for defining the Skyrim class and providing the following functionality:
    * ✓ **A constructor** taking in the player's name and **registration code**.
    * **Copy control.**
        * Naturally, copying should involve making a deep copy. Don't just copy pointers!
    * **An output operator.**
        * You may choose the format. Obviously all of the information you have about your Skyrim instance should be included.
        * Don't worry about printing information contained in the Elder class.
    * ✓ **An equality operator.**
        * Two Skyrim instances are considered equal if all of the **corresponding Dragons are equal.**
            * I.e. there are the same number of Dragons
            * and each Dragon in one Skyrim matches the Dragon in the same position of the other Skyrim.
            * NB, the Dragons do not have to have the same address to be "equal".















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
