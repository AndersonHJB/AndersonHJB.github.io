---
title: Klausur Programmierung – Sommersemester 2023
date: 2024-07-08 21:44:18
author: AI悦创
isOriginal: true
icon: MathOperations
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

## **Hinweise**

- Bitte Studentenausweis und Lichtbildausweis zur Kontrolle während der Klausur bereitlegen.
- Die Bearbeitungszeit beträgt 90 Minuten.
- Verwenden Sie nur urkundenechte Schreibgeräte, bspw. Kugelschreiber, in blauer oder schwar- zer Farbe. Klausuren, die mit Bleistift geschrieben sind, werden nicht angenommen.
- Nutzen Sie die freien Felder zum Beantworten der Fragen. Schreiben Sie auf etwaige extra Lö- sungsblätter Name und Matrikelnummer.
- Aufgabenblätter und etwaige extra Lösungsblätter sind zum Ende der Bearbeitungszeit als Paket abzugeben. Falten Sie die Aufgabenblätter in der Mitte auf DIN-A5-Format und legen Sie Ihre Lösungen hinein.
- Hilfsmittel, bis auf ein beidseitig beschriebenes A4-Blatt, sind nicht zugelassen, insbesondere keine Bücher oder Taschenrechner.
- Kommunikationsgeräte (Mobiltelefone, Smartwatches, . . . ) sind auszuschalten und außer Reich- weite zu verstauen. Hörgeräte und Hörprothesen sind davon ausgenommen.
- Mit meiner Unterschrift bestätige ich, diese Hinweise gelesen und verstanden zu haben.

Unterschrift

## Aufgabe 1 – Variablen, Operatoren, Anweisungen

1.1(2 P)Analysieren Sie folgendes Code-Beispiel:

```rust
fn main() {
    let x = 1;
    {
        let x = x * 3;
        println!("x1 is: {}", x);
        let x = 6;
    }
    println!("x2 is: {}", x);
    let x = 2;
    println!("x3 is: {}", x);
}
```

Lässt sich der gezeigte Code kompilieren?

Begründen Sie Ihre Antwort und erläutern Sie die Ausgabe.

::: details Solution

这段代码使用了 Rust 中的变量遮蔽（shadowing）特性。这里每个花括号 `{}` 内部可以定义一个新的作用域。

- `let x = 1;` 在主作用域定义了一个变量 `x`，其值为1。
- 在第一个 `{}` 内部，首先通过 `let x = x * 3;` 再次定义了一个新的 `x`，其值为之前 `x` 的三倍，即 3。然后通过 `let x = 6;` 再次将 `x` 定义为 6，但这个定义仅在这个 `{}` 作用域内有效。
- 回到主作用域，打印 `x2` 时，由于 `{}` 内部的定义不影响外部，所以这里打印的 `x` 值仍然是 1。
- 通过 `let x = 2;` 再次遮蔽了 `x`，现在它的值是 2，所以打印 `x3` 时输出的是 2。

**结果：** 代码可以正常编译，输出如下：

```rust
x1 is: 6
x2 is: 1
x3 is: 2
```



:::

1.2(3 P)Welche Ausgabe erzeugt der folgende Code? Evaluieren Sie kurz den Programmablauf und gehen Sie dabei auf die Funktionsweise des gewählten Zweiges ein.

```rust
fn main() {
    if (1 < 0) && (0 < -1) {
        println!("Pass");
    } else if (1 > 0) | false {
        println!("Fail");
    } else {
        println!("Educative");
    }
}
```

::: details Solution

这段代码使用了 Rust 的条件判断结构。

- 第一个条件 `if (1 < 0) && (0 < -1)` 不成立，因为两个子条件都不成立。
- 第二个条件 `else if (1 > 0) | false` 使用了按位或运算符 `|`。由于 `1 > 0` 成立，`false` 不影响结果，这个条件成立。
- 因此，将执行这个 `else if` 块中的代码，打印 "Fail"。

**结果：** 输出为 "Fail"。

:::

1.3(2 P)Analysieren Sie folgendes Code-Beispiel:

```rust
fn main() {
    let variable: (mut &str, u32) = ("hello", 65000);
}
```

Lässt sich der gezeigte Code kompilieren?

Begründen Sie Ihre Antwort und erläutern Sie die Ausgabe.

::: details Solution

这段代码尝试定义一个元组 `variable`，包含一个可变引用和一个无符号整数。

- Rust中，`mut &str` 的正确用法是将 `mut` 放在引用符号前，即应该是 `&mut str`。
- 此外，元组类型不需要声明元素的可变性。

**结果：** 代码无法编译，因为 `mut &str` 的语法不正确。

:::

1.4(3 P)Welche Ausgabe erzeugt der folgende Code? Erklären Sie kurz die benutzten Operatoren in Zeile 3.

```rust
fn main() {
    const ONE: i32 = 1;
    println!("{}", ONE << 1 & 1);
}
```

::: details Solution

此代码中涉及的运算符包括左移 `<<` 和按位与 `&`。

- `ONE << 1` 将 `1` 左移一位，变成 `2`（二进制 `10`）。
- `2 & 1` 计算的是 `2` 和 `1` 的按位与，结果为 `0`（因为二进制 `10` 和 `01` 的按位与为 `00`）。

**结果：** 输出为 `0`。

:::





1.5(2 P)Wandeln Sie die **while**-Schleife im folgenden Code in eine **for**-Schleife um. Die Ausgabe darf dabei nicht verändert werden.

Schreiben Sie nur die sich ändernden Zeilen auf.

```rust
fn main() {
    let mut n = 1;
    while n < 101 {
        if n % 15 == 0 {
            println!("fizzbuzz");
        } else if n % 3 == 0 {
            println!("fizz");
        } else if n % 5 == 0 {
            println!("buzz");
        } else {
            println!("{}", n);
        }
        n += 1;
    }
}
```

::: details Solution

```rust
for n in 1..101 {
    if n % 15 == 0 {
        println!("fizzbuzz");
    } else if n % 3 == 0 {
        println!("fizz");
    } else if n % 5 == 0 {
        println!("buzz");
    } else {
        println!("{}", n);
    }
}
```

:::

## Aufgabe 2 – Funktionen, Strings, komplexe Datentypen

2.1(3 P)Erklären Sie kurz die Unterschiede zwischen **Associated Function**, **Function** und **Method**.

::: details Solution

解释 **Associated Function**, **Function** 和 **Method** 的区别

1. **Function（函数）**：
    - 独立的函数，不属于任何对象或类。
    - 在 Rust 中，普通函数通过关键词 `fn` 定义，可在任何地方调用（视作用域而定）。

2. **Method（方法）**：
    - 属于某个具体的结构体（struct）或枚举（enum）的实例。
    - 方法通过在 impl 块中定义，并有一个明确的第一个参数 `self`，表示它是对哪个实例操作的。

3. **Associated Function（关联函数）**：
    - 也定义在结构体或枚举的 `impl` 块中，但与方法不同，关联函数不取 `self` 参数。
    - 通常用来作为构造器，例如 `String::from` 是一个关联函数，用来创建新的 `String` 实例。

:::

2.2(2 P)Analysieren Sie folgendes Code-Beispiel:

```rust
fn function(array: &Vec<u32>) {
    println!("{}", array[0]);
}

fn main() {
    let array = vec![10, 20, 30];
    function(array);
    println!("{}", array[0]);
}
```

Lässt sich der gezeigte Code kompilieren?

Begründen Sie Ihre Antwort und erläutern Sie die Ausgabe.

::: details Solution

```rust
fn function(array: &Vec<u32>) {
    println!("{}", array[0]);
}

fn main() {
    let array = vec![10, 20, 30];
    function(&array);
    println!("{}", array[0]);
}
```

- **编译情况**：此代码可以成功编译。
- **输出**：
    - 第一次输出 `10`（调用 `function` 函数时）。
    - 第二次输出 `10`（在 `main` 函数中直接打印）。
- **解释**：代码中 `function` 接收一个对 `Vec<u32>` 的引用（不会取得所有权），因此 `main` 函数中的 `array` 在 `function` 调用后依然有效，可以继续使用。

:::

2.3(3 P)Analysieren Sie folgendes Code-Beispiel:

```rust
fn get_value(x: u32) -> u32 {
    x + 5
}

fn main() {
    println!("{}", get_value(10));
}
```

Lässt sich der gezeigte Code kompilieren?

Begründen Sie Ihre Antwort und erläutern Sie die Ausgabe.

::: details Solution

- **编译情况**：此代码可以成功编译。
- **输出**：`15`
- **解释**：`get_value` 函数接收一个 `u32` 类型的参数，返回该参数加 5 的结果。在 `main` 函数中，传入 `10`，返回 `15`。

:::

2.4(4 P)Analysieren Sie folgendes Code-Beispiel:

```rust
struct SportsItems {
    rackets: i32,
    balls: i32,
}

fn increase_sports_items(sports_items: SportsItems) -> SportsItems {
    let sports_items = SportsItems {
        rackets: sports_items.rackets * 2,
        balls: sports_items.balls * 3,
    };
    sports_items
}

fn new_sports_items() -> SportsItems {
    let sports_items = SportsItems {
        rackets: 10,
        balls: 5,
    };
    sports_items
}

fn print_sports_items(sports_items: SportsItems) {
    println!(
        "You have {} rackets and {} balls",
        sports_items.rackets,
        sports_items.balls
    );
}

fn main() {
    let sports_items = new_sports_items();
    let sports_items = increase_sports_items(sports_items);
    print_sports_items(sports_items);
}
```

a)  Welche Ausgabe wird hier erzeugt?

b)  Beschreiben Sie die Handhabung von Objekten, Parametern und Rückgabewerten der Funktio-

nen **new_sports_items()** und **increase_sports_items()**.

::: details Solution

- **a) 输出**：
    - "You have 20 rackets and 15 balls"
- **b) 对象、参数和返回值的处理**：
    - **new_sports_items()**：
        - 创建一个新的 `SportsItems` 实例，初始化包含 10 个球拍和 5 个球。
        - 返回这个实例。
    - **increase_sports_items()**：
        - 接收一个 `SportsItems` 实例作为参数。
        - 创建一个新的 `SportsItems` 实例，球拍数量是原来的两倍，球的数量是原来的三倍。
        - 返回修改后的实例。
- **解释**：`new_sports_items` 函数用于初始化一个新的体育用品对象。`increase_sports_items` 函数接受一个 `SportsItems` 对象，修改其内部值并返回。最后，`print_sports_items` 函数用于输出最终的结果。

:::

## Aufgabe 3 – Traits, Lifetime, Ownership

3.1(2 P)Analysieren Sie folgendes Code-Beispiel:

```rust
trait Float {
    fn float(&self) -> Self;
}

impl Float for i32 {
    fn float(&self) -> Self {
        self * 3
    }
}

impl Float for i64 {
    fn float(&self) -> Self {
        self * 2
    }
}

fn main() {
    println!("{}", 5_i32.float());
    println!("{}", 5_i64.float());
}
```

Lässt sich der gezeigte Code kompilieren?

Begründen Sie Ihre Antwort und erläutern Sie die Ausgabe.

::: details Solution

该代码可以编译并运行。`Float` trait 定义了一个 `float` 方法，该方法对于 `i32` 和 `i64` 类型被各自实现。对于 `i32` 类型，`float` 方法将值乘以 3；对于 `i64` 类型，`float` 方法将值乘以 2。因此，当 `5_i32.float()` 被调用时，输出是 `15`，当 `5_i64.float()` 被调用时，输出是 `10`。

:::

3.2(3 P)*Lifetime Elision Rules* (Regeln zum Abschätzen der Lebensdauer von Variablen) 

- Schreiben Sie die erste Regel auf. Verwenden Sie ggf. ein Beispiel.

- Schreiben Sie die zweite Regel auf. Verwenden Sie ggf. ein Beispiel.

- Schreiben Sie die dritte Regel auf. Verwenden Sie ggf. ein Beispiel.

::: details Solution

*Lifetime Elision Rules*（生命周期省略规则）

1. **第一条规则**：如果一个函数只有一个输入生命周期参数，那么该生命周期被赋给所有输出生命周期参数。

    - 示例：

        ```rust
        fn process(s: &str) -> &str { s }
        ```

2. **第二条规则**：如果方法有多个输入生命周期参数，其中一个是 `&self` 或 `&mut self`，那么 `self` 的生命周期被赋给所有输出生命周期参数。

    - 示例：

        ```rust
        struct Book<'a> {
            author: &'a str,
        }
        
        impl<'a> Book<'a> {
            fn author_name(&self) -> &str {
                self.author
            }
        }
        ```

3. **第三条规则**：如果以上两条规则都不适用，编译器将不会自动添加生命周期，需要显式指定。

    - 示例：

        ```rust
        fn longest(a: &str, b: &str) -> &str {
            if a.len() > b.len() { a } else { b }
        }
        ```

        这里需要显式标注生命周期，因为不满足前两条规则。

:::

3.3(2 P)Analysieren Sie folgendes Code-Beispiel:

```rust
pub mod chapter {
    pub mod lesson {
        pub fn summary() {
            println!("Summary");
        }

        pub mod heading {
            pub fn illustration() {
                println!("Content visualization");
            }
        }
    }
}

use chapter::lesson;
use chapter::lesson::heading;

fn main() {
    lesson::summary();
    heading::illustration();
}
```

Lässt sich der gezeigte Code kompilieren?

Begründen Sie Ihre Antwort und erläutern Sie die Ausgabe.

::: details Solution

这段代码可以编译并运行。`chapter` 和 `lesson` 模块都被正确地定义和使用。通过 `use` 语句，我们导入了这些模块，使得可以通过较短的路径访问函数。输出将是：

```
Summary
Content visualization
```

:::

3.4(2 P)Analysieren Sie folgendes Code-Beispiel:

```rust
fn main() {
    let a = String::from("Rust");
    let b = a;
    println!("a:{}, b:{}", a, b);
}
```

Lässt sich der gezeigte Code kompilieren? Begründen Sie Ihre Antwort.

Beschreiben Sie kurz den Ablauf, die Ausgabe sowie mögliche Korrekturen, ohne Zeilen zu entfer- nen.

::: details Solution

这段代码**不能**编译。在 Rust 中，`String` 类型的数据在赋值后，原始变量将不再有效，因为 `String` 类型不会自动实现数据的克隆，而是移动其所有权。这里，`a` 的所有权被转移到 `b`，之后尝试使用 `a` 会导致编译错误。要修正，可以使用 `clone()` 方法：

```rust
let b = a.clone();
```

:::

3.5(2 P)Analysieren Sie folgendes Code-Beispiel:

```rust
fn main() {
    let a = 5;
    let b = &a;
    let mut c = b;
    c = 20;
    println!("{}", c);
}
```

Lässt sich der gezeigte Code kompilieren? Welche Ausgabe erzeugt der gezeigte Code?

Begründen Sie Ihre Antwort und geben Sie ggf. notwendige Korrekturen an, ohne Zeilen zu entfer- nen.

::: details Solution

这段代码**不能**编译。原因是变量 `c` 是一个不可变的引用，不能被赋予一个整数值。`c` 初始化为指向 `a` 的引用，因此类型为 `&i32`，而不是 `i32`。要修正，可以将 `c` 直接定义为一个新的整数变量：

```rust
let mut c = 20;
```

:::

3.6(2 P)Analysieren Sie folgendes Code-Beispiel:

```rust
struct Structure {
    reference: &u8,
}

fn main() {
    let value = 10;
    let obj = Structure { reference: &value };
}
```

Lässt sich der gezeigte Code kompilieren? Welche Ausgabe erzeugt der gezeigte Code?

Begründen Sie Ihre Antwort und geben Sie ggf. notwendige Korrekturen an, ohne Zeilen zu entfer- nen.

::: details Solution

这段代码**不能**编译。结构体 `Structure` 中的 `reference` 成员是一个引用，需要一个明确的生命周期参数，但在这里没有提供。同时，在 `main` 函数中创建 `Structure` 实例时，`value` 变量的生命周期可能不会持续到 `Structure` 实例的生命周期。要修正，需要在结构体定义中添加生命周期注解，并确保使用正确的生命周期：

```rust
struct Structure<'a> {
    reference: &'a u8,
}

fn main() {
    let value = 10;
    let obj = Structure { reference: &value };
}
```

:::



## Aufgabe 4 – Smart Pointer

4.1(1 P)Was genau ist ein Smart Pointer?

::: details Solution

智能指针（Smart Pointer）是一个不仅仅指向某个内存地址的指针，它还包含了额外的元数据和功能。与普通指针不同，智能指针在它们被销毁时会自动执行一些资源管理操作，例如内存释放或文件句柄关闭。Rust 提供了一些常用的智能指针，如 `Box<T>`、`Rc<T>` 和 `RefCell<T>`。

:::

4.2(1 P)Worin bestehen die Unterschiede zwischen Smart Pointer und regulären Referenzen in Rust?

::: details Solution

- **所有权和借用**：普通引用（`&T` 和 `&mut T`）只是借用一个值，它们不拥有这个值的所有权，而智能指针则通常拥有值的所有权或与其他所有者共享所有权。

- **生命周期管理**：智能指针通过 `Drop` trait 自动管理生命周期，例如在离开作用域时释放资源，而普通引用只是临时借用，并不涉及资源释放。

- **功能扩展**：智能指针可以提供额外的功能，如引用计数（`Rc<T>`）、内部可变性（`RefCell<T>`）和堆分配（`Box<T>`），而普通引用只是对值的简单借用，不提供额外功能。

:::

4.3(2 P)Analysieren Sie folgendes Code-Beispiel:

```rust
fn main() {
    let mut a: i32 = 23; 
    println!("{}", a);
    a = 24; 
    println!("{}", a);
    
    let mut b = ___a);
    println!("{}", ___b);
    b = &25;
    println!("{}", ___b);
    let mut c = Box::new(b);
    println!("{}", ___c);
    ___c = &26;
    println!("{}", ___c);
```

Füllen Sie ggfs. die markierten Lücken so, dass der Code kompiliert. Welche Ausgaben erzeugt der gezeigte Code?

::: details Solution

1. 第一个空白处需要填补的是如何初始化变量 `b`。这里看起来要从 `a` 取值，但由于 `b` 后续被赋值为一个引用，因此 `b` 应该是一个引用类型。这里应该使用 `&a` 来初始化 `b`。

2. 接下来的 `___b` 应当填充为 `b`，因为我们想要打印 `b` 的值。

3. 在 `b = &25;` 这一行，尽管在 Rust 中直接引用一个字面值是非法的（不能创建字面值的临时引用），但假设这里的目的是展示引用和解引用的操作，我们可以改为使用 `b = &mut 25` 并在前面声明 `b` 为 `mut` 的引用。然后，在实际操作中，我们通常不会这样做，而是先将值赋给一个变量再引用。

4. `___b` 应该填充为 `*b`，因为我们想要打印 `b` 引用的值，所以需要解引用。

5. `let mut c = Box::new(b);` 这里 `c` 是一个盒子类型，存储 `b` 的值。然后 `println!("{}", ___c);` 中的 `___c` 应填充为 `*c`，因为我们要打印盒子内的值。

6. `___c = &26;` 这个操作是试图改变盒子内的引用，但这不符合 Rust 的安全规则，且盒子类型的值不可以直接更改为一个新的引用。正确的操作可能是改变 `c` 内部值的内容，比如通过 `*c = 26;` 来改变值。

根据以上分析，正确填充后的代码应该如下所示：

```rust
fn main() {
    let mut a: i32 = 23; 
    println!("{}", a);
    a = 24; 
    println!("{}", a);
    
    let mut b = &a;
    println!("{}", *b);
    let mut value = 25;
    b = &mut value;
    println!("{}", *b);
    let mut c = Box::new(b);
    println!("{}", **c);
    **c = 26;
    println!("{}", **c);
}
```

程序的输出将是：
```rust
23
24
24
25
25
26
```

:::

4.4(2 P)Smart Pointer sehen auf den ersten Blick aus wie reguläre Referenzen und zeigen gleiches Verhal- ten, bspw. in Verbindung mit *println!*. Wie genau wird dieses Verhalten in Rust erreicht und umge- setzt?

::: details Solution

在 Rust 中，智能指针（Smart Pointer）的行为类似于常规引用的特性，是通过几种机制实现的，其中包括类型系统和所有权模型的特性。

1. **类型和Trait抽象**：

   Rust 中的智能指针类型如 `Box<T>`, `Rc<T>`, 和 `Arc<T>` 都实现了一些核心的 Trait，这些 Trait 包括 `Deref` 和 `Drop`。`Deref` Trait 允许智能指针结构体实例通过 `*` 运算符进行解引用，使得智能指针在使用上能像常规引用一样。

   - **Deref Trait**：
     
     `Deref` trait 的实现允许一个智能指针对象通过 `*` 符号被解引用，访问其内部数据。例如，`Box<T>` 通过实现 `Deref` 可以让我们通过 `*` 符号来访问 `Box` 中的数据。
     
     ```rust
     use std::ops::Deref;
     
     struct MyBox<T>(T);
     
     impl<T> Deref for MyBox<T> {
         type Target = T;
     
         fn deref(&self) -> &T {
             &self.0
         }
     }
     
     let x = MyBox(5);
     assert_eq!(5, *x); // 正常使用 * 运算符解引用
     ```
     
   - **Drop Trait**：
     
     `Drop` trait 用于在智能指针对象离开作用域时执行一些清理工作，比如释放内存。这确保了资源使用的正确性，防止了内存泄露等问题。

2. **内存安全性和所有权**：

   Rust 的所有权和借用规则确保智能指针在安全地管理内存资源方面表现得和常规引用相似。例如，`Rc<T>` 和 `Arc<T>` 允许多个所有者（shared ownership），但在编译时通过所有权检查防止数据竞争和其它并发错误。

3. **与标准库的集成**：

   Rust 的标准库为智能指针提供了许多便利的方法和集成，使得它们在实际使用中的行为更加接近常规引用。例如，智能指针通常可以直接用于标凈库中期待引用的 API 中，因为它们实现了如 `AsRef`, `Borrow` 等Trait。

智能指针在 Rust 中的实现通过精心设计的类型系统和内存管理机制，使得它们在使用上能够非常接近于常规引用，同时提供了额外的功能如引用计数和线程安全性，这些是普通引用无法提供的。

:::

4.5(3 P)Für das Teilen von Daten via Smart Pointer gibt es unterschiedliche Typen.

Erläutern Sie kurz die Unterschiede zwischen den Typen *Box*, *RefCell* sowie *Rc* und nennen Sie deren Einsatzzwecke.

::: details Solution

在 Rust 语言中，智能指针（Smart Pointer）是用来管理内存的一种工具，提供了一些高级功能，比如自动内存管理（自动清理）和多态。其中 *Box*、*RefCell* 和 *Rc* 是三种常见的智能指针类型，它们各自有不同的用途和特点。

1. **Box**
   - **描述**：`Box<T>` 提供了一种将数据放在堆上的方法，而不是默认的栈上。它提供了单一所有权（即只有一个 Box 可以拥有数据）。
   - **使用场景**：
     - 当你有一个大的数据结构，希望避免大量的栈分配时；
     - 当你需要确保数据具有确定的、非编译时确定的大小时；
     - 当你需要将数据转移到另一个数据所有权时，而不用担心数据被复制。

2. **RefCell**
   - **描述**：`RefCell<T>` 提供了内部可变性，这意味着即使在 `RefCell<T>` 被不可变地借用时，也可以修改它所包含的数据（通过 `borrow` 和 `borrow_mut` 方法）。
   - **使用场景**：
     - 当你需要在运行时而不是在编译时强制借用规则时；
     - 当你需要修改一个数据结构的内部数据，而这个数据结构在其他地方以不可变的方式被引用时；
     - 它在单线程场景中特别有用，因为它不是线程安全的。

3. **Rc**
   - **描述**：`Rc<T>` 是一种实现数据的多重所有权的智能指针，通过引用计数来管理内存。每当创建一个 Rc 的克隆时，数据的引用计数会增加，当 Rc 的实例被销毁时，引用计数会减少。当引用计数到达零时，数据会被自动清理。
   - **使用场景**：
     - 当你需要在程序的多个部分之间共享数据，但不需要完全的线程安全（如使用 `Arc` 时）；
     - 当数据需要被多个所有者共有，而且不存在修改数据的需求时；
     - 适用于单线程应用中的循环数据结构或图形结构的共享组件。

每种智能指针类型都解决了 Rust 所有权和借用规则带来的某些限制，使得数据的管理更加灵活。

:::



## Aufgabe 5 – Collections

5.1(2 P)Analysieren Sie folgendes Code-Beispiel:

```rust
use std::collections::HashMap;
fn main() {
    let mut scores = HashMap::new();
    scores.insert("Sunface", 98); 
    scores.insert("Daniel", 95); 
    scores.insert("Ashley", 69); 
    scores.insert("Katie", 58);
    // Get returns an Option<&V>
    let score = scores.get("Sunface"); 
    assert_eq!(score, Some(&98));
    if scores.contains_key("Daniel") {
        // Indexing returns a value V
        let score = scores["Daniel"];
        assert_eq!(score, ___);
        scores.remove("Daniel");
    }
    assert_eq!(scores.len(), ___);
    for (name, score) in scores {
        println!("The score of {} is {}", name, score);
    }
}
```

Füllen Sie die markierten Lücken so, dass der Code ausgeführt werden kann.

::: details Solution

```rust
use std::collections::HashMap;
fn main() {
    let mut scores = HashMap::new();
    scores.insert("Sunface", 98); 
    scores.insert("Daniel", 95); 
    scores.insert("Ashley", 69); 
    scores.insert("Katie", 58);
    // Get returns an Option<&V>
    let score = scores.get("Sunface"); 
    assert_eq!(score, Some(&98));
    if scores.contains_key("Daniel") {
        // Indexing returns a value V
        let score = scores["Daniel"];
        assert_eq!(score, 95); // 第一个空白填写的是95
        scores.remove("Daniel");
    }
    assert_eq!(scores.len(), 3); // 第二个空白填写的是3
    for (name, score) in scores {
        println!("The score of {} is {}", name, score);
    }
}
```

:::















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
