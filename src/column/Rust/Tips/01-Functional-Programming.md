---
title: Functional Programming「using Rust」
icon: rust
date: 2024-05-24 09:30:05
author: AI悦创
isOriginal: true
category: 
    - Rust 语言从入门到实战
    - 留学生作业辅导
tag:
    - Rust 语言从入门到实战
    - 留学生作业辅导
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

## 1. Functional Programming

::: tabs 

@tab Page 2

Functional programming is a programming paradigm that treats functions as first-class citizens, meaning they

(1) can be passed as arguments,

(2) returned from other functions, and

(3) assigned to variables.

This approach allows for writing programs in a declarative and composable style, where small functions are combined in a modular manner. 

@tab 讲解

在 Rust 的课件中提到的函数式编程是一种编程范式，它将函数视为一等公民。具体来说，这意味着函数可以：

1. 被作为参数传递，
2. 从其他函数中返回，
3. 被分配给变量。

函数式编程的这种方法允许以声明式和可组合的风格编写程序，其中小的函数可以以模块化的方式组合使用。这种风格的编程不仅使代码更清晰，而且还能提高代码的重用性和可维护性。

例如，你可以创建一个函数来处理数据，然后将这个函数作为参数传递给另一个函数，用于进一步的数据处理或决策逻辑。这种灵活性使得代码更加简洁，逻辑更清晰，也便于测试和维护。

总之，函数式编程强调了无副作用的纯函数和数据不可变性，这有助于避免常见的编程错误，如共享状态冲突和数据竞争，从而提高程序的可靠性和性能。

:::

## 2. Agenda

::: tabs

@tab Page 3

- **Simple functional programming:**
    -  **Example:** address book
    - **Lifetime, Owner, Borrower**
    - **introducing**: find, map
- **Monads -** an important design pattern
    -  **list**, **maybe** and **either** **monads**
    - recursive data structures
    - recursive functions

@tab 讲解

这部分 Rust 课件的内容涵盖了函数式编程的基础及其在 Rust 中的应用，以及 Monad（单子）这一重要的设计模式。让我们逐一解析：

## 1. 简单的函数式编程

- **示例：地址簿**
  - 这可能是一个使用Rust进行函数式编程的实例，通过一个地址簿应用来展示如何在Rust中处理数据和函数。在这个示例中，可以展示如何使用函数来查询、更新或管理地址簿中的联系信息。

- **生命周期，所有者，借用者**
  - 这些是Rust特有的一些概念，与内存安全管理相关。在Rust中，每个变量都有一个生命周期，这是系统在编译时用来确保数据使用安全的一种机制。所有者（Owner）是变量的主要控制者，负责变量的内存管理；借用者（Borrower）则可以临时借用数据，但必须遵守严格的规则，以防止数据竞争和悬空指针等问题。

- **引入：find, map**
  - `find` 和 `map` 是常用的高阶函数，用于数据的查找和转换。在函数式编程中，`map` 可以对集合中的每个元素应用一个函数，而 `find` 可以在集合中搜索符合特定条件的元素。

## 2. Monads（单子）- 一个重要的设计模式

- **list, maybe, and either monads**
  - 单子是一种抽象，用来处理带有上下文的计算。在Rust中，`list` 单子可能指的是处理列表或向量的函数；`maybe`（也称为 `Option`）用于可能为空的值；`either`（在 Rust 中通常为 `Result` 类型）用于处理可能会出错的操作。

- **递归数据结构**
  - 这涉及使用自引用数据结构，如链表或树，其中每个元素可能包含指向另一个同类型元素的引用。

- **递归函数**
  - 这类函数可以调用自身来解决问题的一部分，然后再解决剩余的问题，常用于处理递归数据结构。

整体上，这部分课件旨在通过具体的代码示例和概念解释，帮助学生理解 Rust 中的函数式编程技术和单子设计模式，以及它们如何帮助开发更安全、更高效的软件。

:::

## 3. Recall: AddressBook

::: tabs

@tab Page 4

- **Address Book contains Names:**
    - with fields **name** and **id**

```rust
struct Name<'a> {
    name: &'a str, // name of person
    id: u64,       // unique id
}

fn main() {
    let address_book = [
        Name { name: "Alice", id: 1 },
        Name { name: "Bob", id: 2 },
        Name { name: "Charlie", id: 3 },
    ];
}
```

- **Bad:**
    - **lifetime** <’a> might limit the reusability of our code
        - if lifetime would not be suﬃciently long
    - **lifetimes** introduce more complexity in our code

@tab 解释

在这个 Rust 课件内容中，我们复习了关于“地址簿（AddressBook）”的概念，这个地址簿包含了多个名为 `Name` 的结构体实例，每个实例存储了一个人的名字和一个唯一的标识符。这部分内容同时讨论了使用生命周期参数可能带来的问题。

## 1. 结构体和主函数

代码定义了一个带有生命周期 `'a` 的 `Name` 结构体，包含两个字段：`name` 和 `id`。`name` 是一个对字符串的引用，`id` 是一个用来唯一标识每个记录的 64 位无符号整数。

`main` 函数中创建了一个名为 `address_book` 的数组，其中包含了三个 `Name` 实例。每个实例分别代表不同的人。

## 2. 使用生命周期参数的问题

1. **生命周期 `<’a>` 可能限制代码的复用性：**
   - 在这个例子中，`Name` 结构体中的 `name` 字段引用了一个字符串，它需要一个生命周期 `'a` 来确保引用在结构体实例存在期间一直有效。如果提供给 `Name` 实例的字符串的生命周期不够长，那么这个结构体实例就不能安全地使用，因为它可能会引用到已经被释放的内存。
   - 例如，如果 `name` 引用的字符串来自于某个局部作用域，并在 `address_book` 的生命周期内结束，那么 `address_book` 中的相关 `Name` 实例将持有无效的引用。

2. **生命周期增加代码复杂性：**
   - 生命周期参数是Rust独有的功能，主要用于管理引用的有效性，防止悬垂引用等问题。然而，正确地管理生命周期需要对Rust的借用检查器有深入的理解，这对于新手来说可能相当复杂。
   - 在代码中显式使用生命周期还增加了代码的复杂性，有时可能导致开发者在处理生命周期错误时遇到困难。

## 3. 小结

通过这段代码和其解析，我们了解到生命周期是Rust安全内存管理的重要机制，但它也带来了额外的复杂性。在设计使用引用的数据结构时，开发者需要仔细考虑生命周期的设计，以确保代码的安全性和可维护性。

:::

## 4. Borrowing

Reference to variable

::: tabs

@tab Page 6

- When we borrow a variable 
    - the compiler creates a reference to the variable
    - via this reference, we can access the original variable v

```rust
let v = Name { name: "Alice", id: 1 };
let rv = &v;
println!("rv={:?}", rv);
```

@tab 解释

在 Rust 编程语言中，"借用"是一个核心概念，主要用于通过引用访问数据，同时确保数据的安全性和并发性。下面我将详细讲解这部分课件内容中提到的借用机制。

## 1. 借用的基本概念

借用（Borrowing）允许一个变量通过引用被其他部分的代码临时使用，而不需要拥有这个变量的所有权。在 Rust 中，借用主要有两种形式：不可变借用和可变借用。

### 1.1 不可变借用

- **不可变借用**（通过 `&` 符号创建）允许你读取数据但不能修改它。
- 在不可变借用的期间，原始数据不能被修改。
- 可以同时有多个不可变借用，因为它们不会改变原始数据。

### 1.2 示例解析

```rust
let v = Name { name: "Alice", id: 1 };
let rv = &v;
println!("rv={:?}", rv);
```

1. **定义变量 `v`：**
   - `let v = Name { name: "Alice", id: 1 };`
   - 这里创建了一个 `Name` 类型的实例 `v`，并初始化其字段 `name` 为 `"Alice"` 和 `id` 为 `1`。

2. **借用变量 `v`：**
   - `let rv = &v;`
   - 这一行代码创建了一个对 `v` 的不可变引用 `rv`。这意味着 `rv` 可以用来访问 `v` 的数据，但不能修改 `v`。

3. **使用借用的变量：**
   - `println!("rv={:?}", rv);`
   - 这里使用 `println!` 宏打印出 `rv` 的值。因为 `rv` 是 `v` 的引用，所以这里实际上打印的是 `v` 的内容。
   - 注意，要使这个代码工作，`Name` 结构体需要实现 `Debug` 特质，以支持 `{:?}` 格式化输出。

## 2. 借用的重要性

- **内存安全：** 借用系统确保在引用有效期间，被引用的数据不会被意外修改或删除。
- **数据竞争防护：** Rust 的借用规则防止了数据竞争的发生，这是在多线程编程中常见的问题。

总结来说，借用是 Rust 安全内存管理的一个重要机制，它通过严格的编译时检查确保了代码的安全性和效率。通过理解和正确使用借用，可以写出更安全、更高效的 Rust 代码。

:::

## 5. Memory Safety

Correct handling of references

::: tabs

@tab Page 7

- Requirement („*no dangling pointers“*):
    - When we borrow a variable v, we assume borrowed variable v exists as long as reference exists
- In this example,
    - v must exist as long as rv exists

> **memory safety requires that v exists as long as rv exists, i.e., the lifetime of v is longer than that of rv**

```rust
let v = Name { name: "Alice", id: 1 };
let rv = &v;
println!("rv={:?}", rv);
```

@tab 解释

在 Rust 中，内存安全是通过严格的编译时检查来保证的，其中一个关键特性就是管理引用的正确处理，以确保不存在悬垂指针（dangling pointers）。这部分课件内容着重讲解了如何通过借用和生命周期来保证内存安全。

## 1. 悬垂指针的问题

悬垂指针是指一个指针（或引用）指向了一个已经被释放的内存区域。这是许多传统编程语言（如 C 和 C++）中常见的问题，可能导致程序行为不可预测或崩溃。

## 2. Rust 中的内存安全要求

Rust 通过以下要求来避免悬垂指针的产生：

- **借用的变量必须在引用存在的整个期间内有效**：
  - 当我们借用一个变量 `v` 时，我们假设被借用的变量 `v` 必须存在，直到引用本身不再存在为止。
  - 在任何时候，如果有一个活跃的引用（如 `rv`）指向一个变量（如 `v`），那么这个变量必须保持有效。

## 3.  示例解析

```rust
let v = Name { name: "Alice", id: 1 };
let rv = &v;
println!("rv={:?}", rv);
```
在这个例子中，我们可以看到内存安全的操作：

1. **变量 `v` 的创建与初始化**：
   - `let v = Name { name: "Alice", id: 1 };`
   - 这行代码创建了一个 `Name` 类型的实例 `v`。

2. **创建引用 `rv`**：
   - `let rv = &v;`
   - 这行代码创建了一个对 `v` 的不可变引用 `rv`。Rust的借用规则确保，只要 `rv` 还在使用，`v` 就不能被销毁。

3. **使用引用 `rv` 打印 `v` 的内容**：
   - `println!("rv={:?}", rv);`
   - 这里通过 `rv` 打印 `v` 的内容，因为 `rv` 是 `v` 的引用，所以这里安全地访问了 `v` 的数据。

## 4. 生命周期注解

虽然在这个简单的例子中我们没有显式使用生命周期注解，但在复杂的场景中，Rust可能要求我们明确指定生命周期参数。这是为了确保引用的有效性，进一步加强内存安全。

## 5. 总结

在 Rust 中，内存安全是通过确保所有的引用都指向有效的内存来实现的。通过编译时的生命周期检查和借用规则，Rust 帮助开发者避免了传统编程中常见的内存错误，如悬垂指针和数据竞争。这使得 Rust 成为编写高效且安全的系统级软件的理想选择。

:::

## 6. Dangling Pointers

Referring to a freed object

::: tabs

@tab Page 8

- Rust ensures that there are no dangling pointers
    - any referenced variable exists as long as there is a reference to it

> **dangling pointer**: if a reference points to an object that does not exist anymore

@tab 解释

在 Rust 中，悬垂指针（dangling pointers）是指指向已经被释放或不再有效的内存的引用。这种情况在某些编程语言中可能导致严重的安全问题和程序崩溃。然而，Rust的设计确保了这种情况不会发生，下面我将探讨 Rust 是如何实现这一点的。

## 1. Rust 中防止悬垂指针的机制

Rust 通过几个核心特性来保证内存安全，从而避免悬垂指针的产生：

1. **所有权系统**：
   - 在 Rust 中，每个值都有一个被称为其“所有者”的变量。当所有者超出作用域时，值会被自动清理（也就是说，其内存会被释放）。
   - 这个机制确保了数据只在其所有者存在时才存在。

2. **借用检查**：
   - Rust 在编译时执行借用检查，确保任何时候，要么只有一个可变引用存在（允许修改数据，但不允许同时存在其他引用），要么有多个不可变引用存在（不允许修改数据）。
   - 借用检查器也确保没有任何引用指向已经被释放的内存。

3. **生命周期**：
   - 生命周期是 Rust 中用于追踪引用何时有效的一种机制。编译器通过分析变量的生命周期来确保所有引用在它们引用的数据超出作用域并被清理之前仍然有效。
   - 生命周期标注帮助 Rust 检查器验证引用的有效性，确保在引用的整个生命周期内，被引用的数据都是可用的。

## 2. 示例解析

考虑以下示例，虽然这不是一个真正的代码示例，但它有助于说明悬垂指针的概念：

```rust
{
    let r;                  // 声明一个引用，但尚未绑定到任何内容
    {
        let x = 5;          // x是一个整数变量
        r = &x;             // 试图将r绑定到x的地址
    }                       // x离开作用域，其内存被释放

    println!("r: {}", r);   // 尝试访问r，但x已经不在作用域内
}
```

在非 Rust 语言中，这段代码可能导致悬垂指针，因为 `r` 试图访问一个已经被释放的内存地址。然而，在 Rust 中，这段代码无法编译通过。编译器会报错，指出 `r` 尝试引用一个不再存在的变量 `x`。

## 3. 总结

通过所有权、借用检查和生命周期标注，Rust 确保程序中不会出现悬垂指针。这些机制一起工作，为 Rust 程序提供了强大的内存安全保障，使得开发者能够写出更安全、更可靠的代码，避免了常见的内存管理错误。

:::

## 7. Dangling Pointers

Referring to a freed object

::: tabs

@tab Page 8

- Rust ensures that there are no dangling pointers
    - any referenced variable exists as long as there is a reference to it

> **dangling pointer**: if a reference points to an object that does not exist anymore

@tab 解释

在讨论 Rust 编程语言中如何防止悬垂指针（dangling pointers）的生成，我们需要了解 Rust 的一些核心概念，包括所有权、借用和生命周期。这些特性共同保证了内存安全，防止了悬垂指针的产生。

## 1. 悬垂指针定义

**悬垂指针**是指一个指向已经被释放或者不再有效的内存的引用。这种情况在某些语言中会导致安全漏洞或程序错误，因为指针可能会访问到任意或无效的内存地址。

## 2. Rust 中防止悬垂指针的机制

### 2.1  所有权规则

在 Rust 中，每个变量都有一个被称为其“所有者”的变量。变量的内存会在其所有者的作用域结束时被自动释放。这个机制确保了只要数据还在被引用，它就不会被释放。

### 2.2 借用规则

Rust 通过借用规则进一步加强内存安全：
- **不可变借用**（`&T`）：允许多个不可变引用同时存在，但这些引用不能用来修改被借用的数据。
- **可变借用**（`&mut T`）：只能有一个可变引用存在于一定的作用域中，这防止了数据在修改时被其他引用访问，从而维护了数据的完整性。

### 2.3 生命周期和借用检查器

Rust 的编译器包含一个借用检查器，它会分析变量引用的生命周期，确保所有引用都在其指向的数据有效的时间内使用。如果编译器检测到潜在的生命周期问题，比如一个引用可能会在其指向的数据被释放后还存在，它会阻止程序编译，并给出错误信息。

## 3. 示例说明

考虑下面的示例代码：

```rust
{
    let r;                  // 定义一个未初始化的引用
    {
        let x = 5;
        r = &x;             // 尝试创建一个指向x的引用
    }                       // x的作用域结束，x被释放
    println!("r: {}", r);   // 这里尝试使用r，但x已经不在作用域内
}
```
在 Rust 中，上面的代码无法通过编译。编译器会报告一个错误，指出 `r` 尝试在 `x` 已经被释放后持续存在，这会导致一个悬垂指针。这是因为 `r` 的生命周期必须小于或等于 `x ` 的生命周期。

## 4. 总结

通过强制实施严格的所有权、借用规则和生命周期分析，Rust语言确保了程序在任何时候都不会有悬垂指针的存在，从而保证了内存安全。这种方法在编写系统级代码时尤其重要，可以有效防止安全漏洞和程序崩溃的问题。

:::

## 8. Memory Representation

> How is the struct stored in memory?

::: tabs

@tab Page 9

- A **string literal** is a sequence of characters enclosed in double quotes (e.g., „Alice“). They are stored as part of the code. ('static lifetime )
- variables of type &str are a **slice** containing a **reference** and a length field

```rust
let v = Name { name: "Alice", id: 1 };
let rv = &v;
```

@tab 解释



:::

## 9. Rust 所有权地址是否会改变

在 Rust 编程语言中，"所有权"是一个非常核心的概念，它确保了内存安全性而无需垃圾收集器。

所有权的地址是否会改变，这里主要涉及到所有权的转移和借用。

### 9.1 所有权的转移

当所有权从一个变量转移到另一个变量时，从本质上讲，原始变量的内容（包括数据的内存地址）被“移动”到新变量中。例如：

```rust
let x = vec![1, 2, 3];
let y = x; // 所有权从 x 转移给 y
```
在上面的代码中，`x` 的所有权被转移到了 `y`。

在所有权转移后，`x` 不再有效，不能再被访问或使用，因此可以说 `x` 的地址（或更精确地说是 `x` 持有的数据的地址）在逻辑上已经“转移到”了 `y`。物理内存地址没有变化，但是控制这块内存的变量已经改变。

### 9.2 借用

在 Rust 中，借用是另一种形式，允许一个变量在不放弃所有权的情况下，让其他的变量临时访问数据。借用分为两种：

- **不可变借用** (`&T`)：允许多个地方同时通过不可变引用读取数据，但不能修改。
- **可变借用** (`&mut T`)：只能在一个地方有一个可变引用，允许修改数据。

在借用的情况下，数据的物理内存地址不变，但是可以通过不同的引用来访问同一地址。例如：

```rust
let mut x = vec![1, 2, 3];
let y = &x; // 不可变借用
let z = &mut x; // 可变借用（这实际上是非法的，因为 Rust 不允许同时有不可变和可变引用）
```

### 9.3 结论

在 Rust 中，数据的物理内存地址通常是固定的，除非涉及到如 `Vec` 或 `String` 这样在运行时可能会重新分配内存的类型。

然而，所有权和引用的概念让我们能在不同的上下文中通过不同的变量来访问这些地址。所有权的转移意味着控制内存的变量标识符改变了，但底层的内存地址没有改变。











欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
