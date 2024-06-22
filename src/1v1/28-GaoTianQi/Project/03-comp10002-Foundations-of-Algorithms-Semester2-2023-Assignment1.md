---
title: comp10002 Foundations of Algorithms Semester 2, 2023 Assignment 1
date: 2023-09-05 16:14:58
author: AI悦创
isOriginal: true
category: 
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
tag:
    - 墨尔本大学CS
    - Python一对一辅导
    - unimelb
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

## Learning Outcomes

> 学习目标

In this assignment you will demonstrate your understanding of arrays, strings, functions, and the typedef facility. You may also (but are not required to) use structs (see Chapter 8) if you wish. You must *not* make any use of malloc() (Chapter 10) or file operations (Chapter 11) in this project.

> 在这个作业中，你将展示你对数组、字符串、函数和typedef工具的理解。如果你愿意，你也可以（但不是必须的）使用结构体（参见第8章）。在这个项目中，你不能使用malloc()（第10章）或文件操作（第11章）。

## Big Numbers

> 大数字

It is sometimes necessary to work with very big numbers. For example, application areas such as cryptography require exact manipulation of integers containing hundreds of digits. And by now you will be aware that the standard int and double data types do not possess that ability.

> 有时候我们需要处理非常大的数字。例如，在密码学这样的应用领域中，需要精确地操作包含数百个数字的整数。到现在为止，你应该已经知道标准的 int 和 double 数据类型并不具备这种能力。

In this project you will develop a high-precision numeric calculator. You’ll be using C arrays to store the digits of the numbers, so it won’t quite be arbitrary precision; but it will certainly be possible to have 500-digit values manipulated exactly within reasonable computation times, which is big enough for many purposes.

> 在这个项目中，你将开发一个高精度的数字计算器。你将使用C语言的数组来存储数字的位数，所以它并不完全是任意精度；但确实有可能在合理的计算时间内精确操作500位的数值，这对于许多目的来说已经足够大了。

Before doing anything else, you should copy the skeleton program ass1-skel.c from the LMS Assignment 1 page, and spend an hour or two reading through the code, understanding how it fits together. Check that you can compile it via either Grok or a terminal shell and gcc. Once you have it compiled, try this sequence:

> 在做任何其他事情之前，你应该从 LMS 的第一次作业页面复制骨架程序 ass1-skel.c，并花一两个小时阅读代码，理解它是如何组合在一起的。确保你可以通过 Grok 或终端 shell 和 gcc 来编译它。一旦你编译好了，尝试以下步骤：

```bash
➜  mac: ./ass1-skel
> a=12345
> a+23456
> a?
register a: 35801
> a+a
> a?
register a: 71602
> ^D
ta daa!!!
```

The “>”s are a prompt printed by the program, with the remainder of each of those lines the commands typed by the user. There are also two output lines in response to the “?” commands, and the final (what else?!) “ta daa!!!” message printed by the program as it exits. (Note that there is some fiddly code that makes use of the isatty() function to decide where to write each output line, so that the program works sensibly when input commands come from a file, and also when the output is directed to another text file. You do not need to understand how all that code works.)

> “>” 是程序打印的提示符，每行的其余部分是用户输入的命令。对于“？”命令，还有两行输出响应，最后当程序退出时，它打印的（还能是什么呢？！）“ta daa!!!”信息。（请注意，这里有一些复杂的代码使用了 isatty() 函数来决定将每行输出写到哪里，这样当输入命令来自一个文件时，程序会合理地工作，当输出被定向到另一个文本文件时也是如此。你不需要理解所有这些代码是如何工作的。）

The calculator maintains 26 one-letter “variables” (or *registers*), each of which has an initial value of zero, and can store one integer value. Each “command” operates on one of those 26 variables, applying a single operator to it, using (except for the “?” operator) one further non-negative integer operand. So, in the example shown above, register “a” is first assigned the value 12345; then it has 23456 added to it; then it is printed; and then register “a” has register “a” added to it; and then it is printed a second time.

> 计算器保持有26个单字母的“变量”（或寄存器），每个的初始值为零，并且可以存储一个整数值。每个“命令”都操作这26个变量中的一个，对其应用单一运算符，并使用（除了“？”运算符外）一个非负整数操作数。因此，在上面显示的例子中，首先为寄存器“a”分配了12345的值；然后将23456加到它上；然后打印它；然后在寄存器“a”中加上寄存器“a”；然后它第二次被打印。

The skeleton program uses a simple array of int variables to store the 26 registers. This skeleton is provided as a starting point, so that you don’t have to develop a whole lot of uninteresting functions.

> 骨架程序使用一个简单的整数数组来存储26个寄存器。这个骨架提供了一个起点，这样你就不必开发大量的无趣功能。

The only operators provided in the skeleton program are “=” (assignment); “+” (addition); and “?” (printing). And the arithmetic will suffer from integer overflow, of course.

> 翻译为中文是：骨架程序中提供的唯一运算符是“=”（赋值）; “+”（加法）; 和“？”（打印）。当然，算术运算会受到整数溢出的影响。

## Stage 1 – Find Your Own Type (12/20 marks)

> 阶段1 – 寻找你自己的类型 (12/20 分)。

The first change in the program is to employ a new definition for the type longint_t so that it becomes an array of INTSIZE decimal digits, each stored as an int in an array, plus a matching buddy variable stored in the first array position. That is, each register will be an array of int (rather than a single int), with the digits stored in *reverse* order, and with the first element in the array storing the array’s buddy variable. (You’ll understand why the digits are to be stored in reverse order once you start coding your solution.) For example, the number 12,345,542 has eight digits, and would be stored in a variable longint_t v as:

> 程序中的第一个改变是采用一个新的定义，为类型 longint_t，使其成为一个由INTSIZE十进制数字组成的数组，每一个数字作为一个int存储在数组中，以及一个与之匹配的伙伴变量存储在数组的第一个位置。也就是说，每个寄存器都将是一个int数组（而不是单个int），其中的数字以*逆序*存储，数组的第一个元素存储数组的伙伴变量。（当你开始编写解决方案时，你会明白为什么数字要以逆序存储。）例如，数字12,345,542有八位数字，它会被存储在longint_t类型的变量v中为：

```txt
 v[0] v[1] v[2] v[3] v[4] v[5] v[6] v[7] v[8] v[9] v[10] ...
 ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
|  8 |  2 |  4 |  5 |  5 |  4 |  3 |  2 |  1 |  ? |  ? | ...|
 ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
```

| v[0] | v[1] | v[2] | v[3] | v[4] | v[5] | v[6] | v[7] | v[8] | v[9] | v[10] | ...  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- | ---- |
| 8    | 2    | 4    | 5    | 5    | 4    | 3    | 2    | 1    | ?    | ?     | ...  |

where v[0] stores the (current) number of digits in the register’s value; where “?” represents a value that isn’t currently in use; and where the array v is declared to contain a total of INTSIZE+1 elements. All input numbers will be non-negative integers, and nor is a subtraction operator required. That means that you do not need to store a sign, nor worry about negative numbers.

> 其中 v[0] 存储寄存器值中的（当前）数字数量；“？”代表当前未使用的值；而数组 v 被声明为总共包含 INTSIZE+1 个元素。所有输入的数字都是非负整数，且不需要减法运算符。这意味着你不需要存储符号，也不用担心负数。

If you wish to read Chapter 8 early, you may instead define and use a suitable struct for each of the registers (rather than the array option that is illustrated in the example), and then maintain the set of registers in an array of struct (rather than as an array of arrays). Note that the use of struct types is *not* required in this project, and you can get full marks without them.

> 如果你想提前阅读第8章，你可以定义并使用一个适当的结构体来代表每一个寄存器（而不是示例中展示的数组方式），然后在一个结构体数组中维护这些寄存器（而不是数组的数组）。请注意，在这个项目中并不要求使用结构体，即使不使用它们你也可以获得满分。

As part of this first stage you’ll need to rewrite the function do plus() so that two variables of your new type longint_t are added correctly, and you’ll also need to modify several other functions (zero_vars() and do_assign(), plus others) so that they operate correctly after you have changed the underlying type. You should carefully plan the required changes *before* you jump in and start typing, because you’ll need to do quite a bit of editing before getting the program back to “compil- able/testable” state again.

> 作为第一阶段的一部分，你需要重写函数 do plus() 以便正确地加上你新类型 longint_t 的两个变量，并且你还需要修改几个其他函数（如 zero_vars() 和 do_assign()，以及其他函数），以确保它们在你更改了底层类型之后仍然正确操作。在你开始打字之前，你应该仔细计划所需的更改，因为在让程序回到“可以编译/测试”的状态之前，你需要进行大量的编辑。

As part of your changes, your program should check for overflow beyond INTSIZE digits both when constants are being input, and also when addition is being performed. If an overflow situation arises your program should print a suitable error message (your choice of wording) and then exit.

> 作为您更改的一部分，您的程序在输入常数时以及执行加法操作时都应检查是否超出了INTSIZE位数的溢出。如果出现溢出情况，您的程序应打印合适的错误消息（您可以选择措辞），然后退出。

Successful completion of this stage means that your program should be able to handle additions involving numbers of up to INTSIZE (currently 500) decimal digits. Your program should detect any operations that overflow beyond INTSIZE digits, and write an error message of your choice and then exit, returning EXIT FAILURE.

> 成功完成这个阶段意味着您的程序应该能够处理最多达到INTSIZE（目前为500）十进制数字的加法。如果操作超出INTSIZE数字，您的程序应当检测到并显示您选择的错误信息，然后退出，并返回EXIT FAILURE。









## Stage 2 – Go Forth and Multiply (16/20 marks)

> 第二阶段 - 前进并乘以 (16/20 分)

You surely knew it was coming, right? Well, now is the time to add a multiplication operator:

> 你肯定知道这要来了，对吧？好的，现在是时候加入乘法操作符了。

```c
b=123456789
b*987654321
b?
register b: 121,932,631,112,635,269
```

Yes, you need to sit down with pen and paper and remember your long multiplications from primary school, and then turn that process into a C function in your program. If you get stuck, ask your parents (or grandparents!), they might still remember how to do this kind of multiplication.

> 是的，你需要坐下来，拿出笔和纸，回忆起小学时期的长乘法，然后将这个过程转化为你程序中的C函数。如果你遇到困难，可以询问你的父母（或祖父母！），他们可能还记得如何做这种乘法。

You should *not* implement multiplication via repeated addition, that will be frighteningly ineffi- cient. At the other end of the spectrum, nor are you required to investigate efficient integer multipli- cation algorithms. It is expected that your process for multiplying two n-digit numbers will involve time proportional to $n^2$, that is, will be $O(n^2)$.

> 你*不*应该通过重复加法来实现乘法，那样效率会非常低下。另一方面，你也不需要研究高效的整数乘法算法。预期你用于乘两个n位数的过程将消耗与$n^2$成正比的时间，即为$O(n^2)$。

As a second change required in this stage, note the commas in the output values, following the Australian convention of placing them every three digits, counting from the right. (Other cultures have different conventions.)

> 作为此阶段需要的第二个修改，请注意输出值中的逗号，按照澳大利亚的习惯，从右边开始每三位数字放一个逗号。（其他文化有不同的习惯。）

## Stage 3a – Seize the Power (19/20 marks)

And what comes after multiplication? Exponentiation, of course.

```c
> c=2
> c^50
> c?
register c: 1,125,899,906,842,624
```

Just as multiplication shouldn’t be done via repeated addition, exponentiation shouldn’t really be done by repeated multiplication – it isn’t an efficient algorithm. But in the context of this project you may carry out exponentiation via repeated multiplication (and that is certainly what you should get working first) since the largest (interesting, non-overflowing) exponent that can arise within 500-digit numbers (that is, generating values less than $10^{500}$) is $log_2 10^{500} = 1661$, and executing a few thousand many- digit multiplications should still only take a tiny fraction of a second. Have fun!

## 第3a阶段 - 获得力量 (19/20 分)

接乘法之后是什么？当然是指数。

```c
> c=2
> c^50
> c?
寄存器 c: 1,125,899,906,842,624
```

就像乘法不应通过重复加法完成一样，指数运算也不应真的通过重复乘法完成 - 这不是一个高效的算法。但在此项目的背景下，您可以通过重复乘法执行指数运算（这确实是您首先应该工作的方式），因为在500位数字内可能产生的最大（有趣的，没有溢出的）指数是 \(log_2 10^{500} = 1661\)，执行几千个多位乘法仍然只需要一小部分秒。玩得开心！



## Stage 3b – Divide, and then Conquer (20/20 marks)

[*Note: This last operator involves a great deal of further work for one measly little mark. Think carefully about your other subjects and assessment priorities before embarking on this stage, because it might become a black hole that consumes a lot of your precious time. There is no shame at all in submitting a program that handles Stages 1 to 3a only; and for many (perhaps even most) of you, that will be the correct decision to make.*]

For an exciting adventure, add in integer division:

```c
> d=b
> d/c
> d?
register d: 108
```

with b and c having the values assigned in the two previous examples. Hopefully your grandpar- ents haven’t forgotten how to do long division and can teach it to you (and I bet your parent; or look at https://en.wikipedia.org/wiki/Long_division. You may *not* implement division via repeated subtraction, but probably will need some subtraction-based looping for each digit in the quo- tient that is generated.

## 第3b阶段 - 分而治之 (20/20 分)

> [*注意：这最后一个运算符涉及了为了一个微小的分数而做的大量工作。在开始这个阶段之前，请仔细考虑你的其他科目和评估的优先次序，因为它可能成为一个黑洞，消耗你大量的宝贵时间。提交仅处理1到3a阶段的程序完全没有任何羞愧之感；对许多（也许甚至是大多数）人来说，这将是正确的决定。*]

为了一次激动人心的冒险，请加入整数除法：

```c
> d=b
> d/c
> d?
寄存器 d: 108
```

> b 和 c 有在前两个示例中分配的值。希望你的祖父母没有忘记如何做长除法，可以教你（我打赌你的父母可以教你）；或者查看 https://en.wikipedia.org/wiki/Long_division。您*不*可以通过重复减法实现除法，但在生成的商的每个数字中，可能需要一些基于减法的循环。



## Solution

### 1. 测试脚本

1. 给予代码执行权限

```bash
chmod +x ./ass1-skel.c
```

2. 进行编译

```bash
gcc -o ass1-skel ./ass1-skel.c
./ass1-skel
```

上面的命令做了以下事情：

- 使用 `gcc` 编译 `./ass1-skel.c`。

- `-o ass1-skel`指示编译器生成一个名为 `ass1-skel` 的可执行文件。

- `./ass1-skel`命令运行生成的可执行文件。

### 2. 知识点

:::: tabs

@tab 1. 寄存器

在 C 语言中，`register`是一个关键字，用于建议编译器将某些变量存储在处理器的寄存器中，而不是内存中，从而提高对这些变量的访问速度。但是，实际上是否使用寄存器来存储这些变量是由编译器决定的，`register`只是一个建议，编译器可能会忽略这个建议。

这里有几点需要注意的：

1. **访问速度**：处理器的寄存器可以提供比常规内存更快的访问速度。因此，频繁访问的变量如果放在寄存器中，可能会加速程序的执行。

2. **限制**：寄存器的数量是有限的，而且不是所有的变量都适合放在寄存器中。因此，即使你为多个变量使用`register`关键字，也不保证所有这些变量都会放在寄存器中。

3. **地址**：不能获取标记为`register`的变量的地址。这意味着不能为这种变量使用`&`运算符。

4. **现代编译器**：现代编译器的优化技术非常先进。在许多情况下，即使不使用`register`关键字，编译器也会自动确定哪些变量应该放在寄存器中。因此，使用`register`关键字的实际效果可能会有所不同，取决于编译器和具体的硬件。

一个简单的例子：
```c
void someFunction() {
    register int counter;
    for(counter = 0; counter < 100000; counter++) {
        // do something
    }
}
```

在这个例子中，`counter`变量被标记为`register`，这意味着我们建议编译器将它存储在一个寄存器中，因为它会被频繁访问。但是，如前所述，这只是一个建议，实际的存储位置由编译器决定。

---

寄存器是 CPU 中的小存储区域，比内存访问速度要快得多。在 C 语言中，我们可以使用 `register` 关键字来建议编译器尽量将某个变量存放在寄存器中。但请记住，这只是一个建议，编译器可能会选择忽略它，特别是在现代编译器中，其优化技术可能已经自动选择了最佳的变量放入寄存器。

下面是一个示例代码：

```c
#include<stdio.h>

int main() {
    int i; // 普通的整数变量
    register int j; // 希望放在寄存器中的整数变量

    for(i=0, j=0; i<10000000; i++, j++) {
        // 对于大量的迭代，我们希望j的访问速度比i快，因为j被建议放在寄存器中
        // 但实际效果取决于编译器和硬件。
    }

    // 下面的代码会导致编译错误，因为不能取得标记为register的变量的地址
    // printf("%p\n", &j);

    return 0;
}
```

在这个示例中，我们声明了两个变量：`i` 和 `j`。其中，`j` 前面有 `register` 关键字，表示我们希望编译器将其存储在寄存器中。但如前所述，这只是一个建议。

最后，我们尝试打印 `j` 的地址，但这会导致编译错误。这是因为寄存器变量没有内存地址，所以不能为它们使用 `&` 运算符。

[https://blog.csdn.net/qq_33254766/article/details/132741693](https://blog.csdn.net/qq_33254766/article/details/132741693)

::: details %p 与 %x 

`%x` 和 `%p` 都会以十六进制形式输出数值，但它们之间存在一些关键的差异：

1. **用途**：
   - `%x`: 主要用于以十六进制形式显示整数值。
   - `%p`: 专为指针设计，用于显示指针的地址。

2. **大小和格式**：
   - `%x`: 仅仅将数值表示为基本的十六进制形式。
   - `%p`: 根据平台和编译器，通常会以更加标准的指针格式显示，例如在某些系统中可能会自动加上`0x`前缀。

3. **宽度**：
   - `%x`: 显示的宽度取决于提供的整数值。
   - `%p`: 显示的宽度根据指针大小和平台变化，例如在32位系统上可能是8字符宽（不计算可能存在的`0x`前缀），而在64位系统上可能是16字符宽。

4. **类型正确性**：
   - 使用`%x`来打印指针可能不总是类型安全的，特别是当指针和整数的大小不同的时候。
   - 使用`%p`来打印指针总是类型正确的。

以下是一个简单的比较：
```c
int x = 42;
int *ptr = &x;

printf("Using %%x: %x\n", ptr);    // 可能不是类型安全的，根据平台和情境
printf("Using %%p: %p\n", ptr);    // 总是类型安全的，可能会有前缀，例如0x
```

总结，当输出指针地址时，最好使用`%p`，因为它为这个目的而设计，而且总是类型安全的。

:::

@tab 2. 代码注释

```c
// 引入标准库的头文件
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>
#include <ctype.h>
#include <assert.h>
#include <unistd.h>

/* 定义一些常量 */
#define INTSIZE	500	/* 整数值的最大位数 */
#define LINELEN	999	/* 输入行的最大长度 */
#define NVARS	26	/* 变量的数量 */

#define CH_A     'a'    /* 字符 'a', 第一个变量名 */

#define ERROR	(-1)	/* 某些函数的错误返回值 */
#define PROMPT	"> "	/* 交互输入的提示符 */

#define PRINT	'?'	/* 打印操作符 */
#define ASSIGN	'='	/* 赋值操作符 */
#define PLUS	'+'	/* 加法操作符 */
#define MULT	'*'	/* 乘法操作符 */
#define POWR	'^'	/* 幂操作符 */
#define DIVS	'/'	/* 除法操作符 */
#define ALLOPS  "?=+*^/" /* 所有的操作符 */

#define CH_ZERO  '0'    /* 字符零 */
#define CH_ONE   '1'    /* 字符一 */
#define CH_NINE  '9'    /* 字符九 */

#define CH_COM   ','    /* 字符 ',' */
#define PUT_COMMAS 3    /* 输出值中逗号的间隔 */

#define INT_ZERO 0	/* 整数 0 */
#define INT_TEN  10	/* 整数 10 */

/* 使用int类型作为longint_t的占位符 */
typedef int longint_t;
#define LONG_ZERO 0
#define LONG_ONE  1

/****************************************************************/

/* 一个需要明确声明的"魔术"附加函数 */
int fileno(FILE *);

/* 骨架程序的函数原型 */

void print_prompt(void);
void print_tadaa();
void print_error(char *message);
int  read_line(char *line, int maxlen);
void process_line(longint_t vars[], char *line);
int  get_second_value(longint_t vars[], char *rhsarg,
	longint_t *second_value);
int  to_varnum(char ident);
void do_print(int varnum, longint_t *var);
void do_assign(longint_t *var1, longint_t *var2);
void do_plus(longint_t *var1, longint_t *var2);
void zero_vars(longint_t vars[]);
longint_t parse_num(char *rhs);

/****************************************************************/

/* 主程序控制所有的操作 */
int
main(int argc, char *argv[]) {
	char line[LINELEN+1] = {0};   /* 存储输入行的字符数组 */
	longint_t vars[NVARS];        /* 存储变量的数组 */

	zero_vars(vars);              /* 初始化所有变量为0 */
	print_prompt();               /* 打印提示符 */
	while (read_line(line, LINELEN)) {   /* 读取行直到没有输入为止 */
		if (strlen(line) > 0) {
			/* 如果输入行不为空，则处理它 */
			process_line(vars, line);
		}
		print_prompt();           /* 重新打印提示符 */
	}

	print_tadaa();                /* 打印结束消息 */
	return 0;                     /* 返回0表示成功结束 */
}

/****************************************************************/

/* 打印提示符，只有当确认输入来自终端时才打印。
   因为输出可能会写入文件，所以如果需要的话，提示符会写入stderr而不是stdout
*/
void
print_prompt(void) {
	if (isatty(fileno(stdin))) {
		fprintf(stderr, "> ");
		fflush(stderr);
	}
}

void
print_tadaa() {
	/* 所有操作完成后，结束程序，打印消息 */
	/* 根据输入输出是否来自文件或终端来确定输出格式 */
	if (isatty(fileno(stdin)) && isatty(fileno(stdout))) {
		printf("\n");
	}
	printf("ta daa!!!\n");
	if (isatty(fileno(stdin)) && !isatty(fileno(stdout))) {
		fprintf(stderr, "\n");
	}
}

void
print_error(char *message) {
	/* 需要将错误消息写入正确的位置 */
	if (isatty(fileno(stdin)) || isatty(fileno(stdout))) {
		fprintf(stderr, "%s\n", message);
		fflush(stderr);
	}
	if (!isatty(fileno(stdout))) {
		printf("%s\n", message);
	}
}

/****************************************************************/

/* 读取一行输入到传递的数组中，如果没有输入可用，返回false。
   所有的空白字符在读取过程中都会被移除。
*/
int
read_line(char *line, int maxlen) {
	int i=0, c;
	while (((c=getchar())!=EOF) && (c!='\n')) {
		if (i<maxlen && !isspace(c)) {
			line[i++] = c;
		}
	}
	line[i] = '\0';
	/* 然后，如果输入来自文件或输出写入文件，有助于回显输入行
	   并记录命令是什么 */
	if (!isatty(fileno(stdin)) || !isatty(fileno(stdout))) {
		printf("%s%s\n", PROMPT, line);
	}
	return ((i>0) || (c!=EOF));
}

/****************************************************************/

/* 通过将输入行解析为各个部分来处理命令 */
void
process_line(longint_t vars[], char *line) {
	int varnum, optype, status;
	longint_t second_value;

	/* 确定LHS变量，它必须是压缩行的第一个字符 */
	varnum = to_varnum(line[0]);
	if (varnum==ERROR) {
		print_error("invalid LHS variable");
		return;
	}

	/* 更多的有效性测试 */
	if (strlen(line)<2) {
		print_error("no operator supplied");
		return;
	}

	/* 确定要执行的操作，它必须是压缩行的第二个字符 */
	optype = line[1];
	if (strchr(ALLOPS, optype) == NULL) {
		print_error("unknown operator");
		return;
	}

	/* 确定RHS参数（如果需要一个），它必须从压缩行的第三个字符开始 */
	if (optype != PRINT) {
		if (strlen(line)<3) {
			print_error("no RHS supplied");
			return;
		}
		status = get_second_value(vars, &line[2], &second_value);
		if (status != 0) {
			return;
		}
	}

	/* 执行请求的操作 */
	switch (optype) {
	case PRINT:
		do_print(varnum, &vars[varnum]);
		break;
	case ASSIGN:
		do_assign(&vars[varnum], &second_value);
		break;
	case PLUS:
		do_plus(&vars[varnum], &second_value);
		break;
	case MULT:
		/* 乘法操作的代码应在此处 */
		break;
	case POWR:
		/* 幂操作的代码应在此处 */
		break;
	case DIVS:
		/* 除法操作的代码应在此处 */
		break;
	default:
		/* 这应该是不可能的，但保持安全性检查 */
		print_error("unsupported operation");
		break;
	}
}

/****************************************************************/

/* 尝试将标识符转换为变量号 */
int
to_varnum(char ident) {
	if (ident < CH_A || ident >= CH_A+NVARS) {
		return ERROR;
	}
	return (ident - CH_A);
}

/****************************************************************/

/* 从RHS参数字符串中解析出第二个值，并可能需要修改第二个值。 */
int
get_second_value(longint_t vars[], char *rhsarg, longint_t *second_value) {
	if (isalpha(rhsarg[0])) {
		/* 这是另一个变量 */
		int varnum = to_varnum(rhsarg[0]);
		if (varnum == ERROR) {
			print_error("invalid RHS variable");
			return ERROR;
		}
		*second_value = vars[varnum];
		return 0;
	} else if (rhsarg[0] == CH_ZERO) {
		/* 这是常数0 */
		*second_value = LONG_ZERO;
		return 0;
	} else {
		/* 尝试解析为数字 */
		*second_value = parse_num(rhsarg);
		if (*second_value == ERROR) {
			print_error("invalid RHS number");
			return ERROR;
		}
		return 0;
	}
}

/****************************************************************/

/* 使用longint_t值设置所有变量 */
void
zero_vars(longint_t vars[]) {
	int i;
	for (i=0; i<NVARS; i++) {
		vars[i] = LONG_ZERO;
	}
}

/****************************************************************/

/* 解析数字字符串并返回一个longint_t值 */
longint_t
parse_num(char *rhs) {
	longint_t val = 0;
	while (*rhs && isdigit(*rhs)) {
		val = (val * INT_TEN) + (*rhs - CH_ZERO);
		rhs++;
	}
	if (*rhs) {
		return ERROR;  /* 不是一个有效数字 */
	}
	return val;
}

/****************************************************************/

/* 将给定的longint_t值赋值给指定的变量 */
void
do_assign(longint_t *var1, longint_t *var2) {
	*var1 = *var2;
}

/****************************************************************/

/* 将第二个longint_t值添加到第一个longint_t值中 */
void
do_plus(longint_t *var1, longint_t *var2) {
	*var1 += *var2;
}

/****************************************************************/

/* 打印指定的longint_t值的值 */
void
do_print(int varnum, longint_t *var) {
	printf("%c = %d\n", CH_A+varnum, *var);
}

/****************************************************************/
```

@tab 导入库解析

当然可以，下面是这些库的简要介绍：

1. **<stdio.h>**
    - 这是标准输入/输出头文件，提供了一个设置用于流的输入和输出的函数。
    - 常用函数：`printf()`, `scanf()`, `fopen()`, `fclose()`, `fprintf()`, `fscanf()`, `fgets()`, `fputs()` 等。

2. **<stdlib.h>**
    - 标准通用实用工具库。
    - 提供了与内存分配、随机数生成和数学计算等功能相关的函数。
    - 常用函数：`malloc()`, `free()`, `exit()`, `rand()`, `srand()`, `atoi()`, `atol()`, `qsort()` 等。

3. **<string.h>**
    - 为字符串处理提供了系列的函数。
    - 常用函数：`strcpy()`, `strncpy()`, `strcat()`, `strncat()`, `strcmp()`, `strncmp()`, `strlen()`, `strchr()`, `strstr()` 等。

4. **<strings.h>**
    - 提供了一些其他的字符串操作函数。
    - 这个头文件在某些系统上可能是非标准的，但在POSIX系统上是标准的。
    - 常用函数：`bzero()`, `bcmp()`, `index()`, `rindex()`, `strcasecmp()`, `strncasecmp()` 等。

5. **<ctype.h>**
    - 为字符类测试和转换提供了系列的函数。
    - 这些函数用于确定字符的类别（如：是否是数字、是否是大写字母等）。
    - 常用函数：`isalpha()`, `isdigit()`, `isupper()`, `islower()`, `toupper()`, `tolower()`, `isspace()`, `isalnum()` 等。

6. **<assert.h>**
    - 提供了一个名为`assert`的宏，该宏用于辅助调试。
    - `assert`宏允许开发者在代码中添加诊断信息，如果诊断的表达式为假，`assert`会导致程序中止并输出一条消息。
    - 示例：
      ```c
      int main() {
          int a = 5;
          assert(a == 5); // 此行无任何问题
          assert(a == 6); // 此行会导致程序中止，因为a不等于6
          return 0;
      }
      ```

7. **<unistd.h>**
    - 这是 POSIX 操作系统 API 的头文件。为 POSIX 系统调用和库函数提供了许多基本的系统服务。
    - 常用函数和宏：`read()`, `write()`, `close()`, `fork()`, `exec()`, `getpid()`, `getppid()`, `chdir()`, `getcwd()`, `access()` 等。

这些库为 C 程序员提供了大量的实用功能。熟悉这些库的功能和常用的函数会使得 C 编程变得更加高效和简便。

::::

### 3. 答案

#### 3.1  Part1: Answer

::: code-tabs

@tab p1-G

```c
// 原本
// typedef int longint_t;
// #define LONG_ZERO 0

typedef struct {
    int numbers[INTSIZE+1];  /* +1 for the buddy variable 为了实现 0 号位存储长度，所以进行 +1 操作*/
} longint_t;
#define LONG_ZERO { {0} }

// --------
// 定义一个名为longint_t的结构体类型。
// 这个结构体中包含一个名为numbers的数组，其大小为INTSIZE+1。
// +1是为了额外的"buddy variable"。
typedef struct {
    int numbers[INTSIZE+1];  /* +1 for the buddy variable */
} longint_t;

// 使用宏定义来创建一个longint_t类型的值。
// 由于numbers是结构体的第一个（也是唯一的）字段，因此它会首先被初始化。
// { {0} }这种写法首先为外层的结构体创建了一个初始化器，然后为numbers数组创建了一个初始化器。
// 结果是numbers数组的所有元素都被初始化为0。
#define LONG_ZERO { {0} }
```

@tab p1-C1

```c
// 原本
// typedef int longint_t;
// #define LONG_ZERO 0

typedef struct {
    int digits[INTSIZE+1];  /* +1 for the buddy variable */
} longint_t;
#define LONG_ZERO (longint_t){.digits = {0}}

// --------
// 定义一个名为longint_t的结构体类型。
// 这个结构体中包含一个名为digits的数组，其大小为INTSIZE+1。
// +1是为了额外的"buddy variable"。
typedef struct {
    int digits[INTSIZE+1];  /* +1 for the buddy variable */
} longint_t;

// 使用宏定义来创建一个longint_t类型的值，这个值的digits字段被初始化为全0。
// 这里使用了C99的指定初始化器（designated initializer）来明确初始化digits字段。
#define LONG_ZERO (longint_t){.digits = {0}}
```

@tab p1-C2

```c
typedef struct {
    int digits[INTSIZE+1];  /* +1 for the buddy variable */
    int length;
} longint_t;
#define LONG_ZERO (longint_t){.digits = {0}, .length = 1}  // 存数字的初始化全使用 0，长度初始化为 1
```

@tab p2-G1

```c
/*
	下面的实现逻辑是，把用户输入的数字长度，存储到数组的 0 号位。
*/
// 从字符串中解析出长整型数值
longint_t parse_num(char *rhs) {
    longint_t result = LONG_ZERO;  // 声明一个 longint_t 类型的 result，并初始化位 LONG_ZERO
    int length = strlen(rhs);

    // 将数字的长度存储在数组的第一个索引
    result.digits[0] = length;

    // 从字符串中解析出数字，并反转存储（使得低位在前，高位在后）
    for (int i = 0; i < length; i++) {
        result.digits[i+1] = rhs[length-1-i] - '0';  // +1 的原因是 0 号位被我们定为数字长度
    }

    return result;
}


//-----------------
int i = 0;
while (i < length) {
    result.digits[i+1] = rhs[length-1-i] - '0';
    i++;
}
```

@tab p2-G2

```c {7,9-13,21}
// 记得实现逆序实现，这个是实现的大体思路

#include <stdio.h>
#include <string.h>

// 创建一个映射数组，用于将字符 '0'-'9' 转换为整数 0-9
int char_to_digit[128] = {0};

void initialize_mapping() {
    for (char c = '0'; c <= '9'; c++) {
        char_to_digit[c] = c - '0';
    }
}

long long parse_num(char *rhs) {
    int length = strlen(rhs);
    long long result = 0;
    long long multiplier = 1;

    for (int i = 0; i < length; i++) {
        result += char_to_digit[rhs[length-1-i]] * multiplier;
        multiplier *= 10; // 移动到下一个数位
    }

    return result;
}

int main() {
    initialize_mapping();
    char numStr[] = "12345";
    long long num = parse_num(numStr);
    
    // 打印解析后的数字
    printf("%lld\n", num);
    return 0;
}
```

@tab p2-C

```c
longint_t
parse_num(char *rhs) {
    longint_t result = LONG_ZERO;
    int len = strlen(rhs);
    char tempStr[2] = {0};  // 用于存储单个字符和空字符

    for(int i=0; i<len; i++) {
        tempStr[0] = rhs[i];
        result.digits[i] = atoi(tempStr);  // 使用atoi转换
    }
    result.length = len;
    return result;
}
```

@tab p3-G1.0

```c
void do_print(int varnum, longint_t *var) {
    printf("register %c: ", varnum + CH_A);

    for (int i = var->digits[0]; i > 0; i--) {
        printf("%d", var->digits[i]);
    }

    printf("\n");
}
```

@tab P3-G1.1

```c
// 这个代码还没完善，最简单的思路是创建中间数组来实现。正确顺序的时候存到数组，然后再循环输出。

void do_print(int varnum, longint_t *var) {
    printf("register %c: ", varnum + CH_A);
    int count = 0;
    int length = var->numbers[0];
    printf("number length is %d\n", length);
    // for (int i = var->digits[0]; i > 0; i--) {
    //     printf("%d love ", var->digits[i]);
    // }
    for (int i = 1; i <= var->numbers[0]; i++) {
    	if (count == 3) {
    		printf(",");
   		count = 0;
    	}
    	printf("%d", var->numbers[i]);
    	count++;
    }

    printf("\n");
}
```

@tab p3-G1.2

```c
// 下面的实现比较巧妙，判断数字的长度是奇数还是偶数
// 如果是奇数，我们 remainder = remainder 这样 remainde 次后就需要逗，如果是偶数我们就每三个添加一个逗号即可实现
#include <stdio.h>

// 定义一个结构体来表示长整数类型
typedef struct {
    int numbers[100]; // 假设有一个固定大小的数组来存储数字，根据需要进行调整
    // int digits[100]; // 你注释掉了这一部分，所以我这里就省略了
} longint_t;

void do_print(int varnum, longint_t *var) {
    // 打印出寄存器的名称，这里使用 'A' 作为起始字母
    printf("register %c: ", varnum + 'a');

    int length = var->numbers[0];
    printf("number length is %d\n", length);

    // remainder 用于存储到下一个逗号之前需要多少个数字
    // 比如，如果 length 是 5，那么 remainder 就是 2（即 5%3），因为前两个数字之后就需要一个逗号
    int remainder = length % 3;
    // 如果数字总数可以被3整除（即 remainder 为0），我们从右边开始输出前三个数字，然后输出一个逗号
    remainder = remainder == 0 ? 3 : remainder;

    // 从最后一个数字开始逆向遍历
    for (int i = length; i > 0; i--) {
        // 当 remainder 减少到0时，我们需要在数字之间添加一个逗号
        if (remainder == 0) {
            printf(",");
            remainder = 3;  // 重置 remainder，因为我们知道之后每三个数字就需要一个逗号
        }

        printf("%d", var->numbers[i]); // 打印当前数字
        remainder--; // 减少 remainder，向左移动
    }

    printf("\n"); // 打印换行，使输出更加清晰
}
```

@tab p3-C

```c
void
do_print(int varnum, longint_t *var) {
	printf("register %c: ", varnum+CH_A);
    int count=0;
    for(int i=0;i<=(var->length-1);i++){
        if(i%3==0&&i!=0){
            count+=1;
        }   
     }
     // printf("count %d: ", count);
     // int temp_array[(var->length)+count];
     // 创建一个临时数组，用于存储带有逗号的数字
     int len = (var->length)+count;
     char temp_array[len];
     int pos = 0;  // 使用 pos 变量来跟踪 temp_array 的当前位置
    
    // 遍历 Var 的所有位数，将其复制到 temp_array 中，并在合适的位置插入逗号
     // comma 数字数量
    for (int j = 0, comma = 0; j < var->length; j++, comma++) {
    	// 将数字转化为字符存储
        temp_array[pos++] = (char)((var->digits[j]) + '0');
        // 如果已经添加了三个数字，并且它不是最后一个数字，那么插入一个逗号
        if (comma == 2 && j != var->length - 1) { // 当前的长度，不能是现在数组的长度，因为开头不用添加
            temp_array[pos++] = ',';
            comma = -1;  // Reset comma count
        }
    }

    for (int k = len-1; k >= 0; k--) {
        printf("%c", temp_array[k]);
    }

    printf("\n");
```

@tab p3-C1

```c
void do_print(int varnum, longint_t *var) {
    // 打印寄存器名
    printf("register %c: ", varnum + 'A');

    int count = 0;
    // 遍历数字的所有位数，以确定要添加的逗号数量
    for (int i = 1; i < var->length; i++) {
        // 每三位数字后加一个逗号
        if (i % 3 == 0) {
            count++;
        }
    }

    // 创建一个临时数组，用于存储带有逗号的数字
    char temp_array[var->length + count];
    int pos = 0;  // 使用pos变量来跟踪temp_array的当前位置
    
    // 遍历var的所有位数，将其复制到temp_array中，并在适当的位置插入逗号
    for (int j = 0, comma = 0; j < var->length; j++, comma++) {
        // 将数字位转化为字符并存储
        temp_array[pos++] = (char)((var->digits[j]) + '0');
        
        // 如果已经添加了三个数字，并且它不是最后一个数字，那么插入一个逗号
        if (comma == 2 && j != var->length - 1) {
            temp_array[pos++] = ',';
            comma = -1;  // 重置comma计数
        }
    }

    // 打印temp_array的内容
    for (int k = 0; k < pos; k++) {
        printf("%c", temp_array[k]);
    }

    printf("\n");  // 打印换行符
}
```

@tab p4-G

```c
// 数组数据克隆
void do_assign(longint_t *var1, longint_t *var2) {
    var1->digits[0] = var2->digits[0];

    for (int i = 1; i <= var2->digits[0]; i++) {
        var1->digits[i] = var2->digits[i];
    }
}
```

@tab p4-C

```c
可以不修改，保持原样。
```

@tab p5-G

```c
// 记得声明函数
void check_overflow(longint_t *var);
void do_plus(longint_t *var1, longint_t *var2);


void check_overflow(longint_t *var) {
    if (var->digits[0] > INTSIZE) {
        printf("Overflow error! Exiting...\n");
        exit(EXIT_FAILURE);
    }
}

void do_plus(longint_t *var1, longint_t *var2) {
    int carry = 0;
    int maxLength = (var1->digits[0] > var2->digits[0]) ? var1->digits[0] : var2->digits[0];

    for (int i = 1; i <= maxLength || carry; i++) {
        if (i == INTSIZE+1) {
            var1->digits[0] = i;
            check_overflow(var1);
        }

        var1->digits[i] += carry + (i <= var2->digits[0] ? var2->digits[i] : 0);
        carry = var1->digits[i] / 10;
        var1->digits[i] %= 10;

        if (i > var1->digits[0]) {
            var1->digits[0] = i;
        }
    }
}
```

@tab p5-G1

```c
// 检查是否溢出，并在需要时退出程序
void check_overflow(longint_t *var) {
    if (var->digits[0] > INTSIZE) {
        printf("Overflow error! Exiting...\n");
        exit(EXIT_FAILURE);
    }
}

// 两个长整型数值相加
void do_plus(longint_t *var1, longint_t *var2) {
    int carry = 0; // 用于存储进位值
    int maxLength = (var1->digits[0] > var2->digits[0]) ? var1->digits[0] : var2->digits[0];

    // 从低位到高位进行加法运算
    for (int i = 1; i <= maxLength || carry; i++) {
        // 检查是否超出预定义的长度
        if (i == INTSIZE+1) {
            var1->digits[0] = i;
            check_overflow(var1);
        }

        // 加上进位和另一个数值（如果存在）
        var1->digits[i] += carry + (i <= var2->digits[0] ? var2->digits[i] : 0);
        carry = var1->digits[i] / 10;  // 计算进位
        var1->digits[i] %= 10;         // 取个位数值

        // 更新数字的实际长度
        if (i > var1->digits[0]) {
            var1->digits[0] = i;
        }
    }
}
```

@tab p5-C

```c
void
do_plus(longint_t *var1, longint_t *var2) {
    int num = 0;
    for (int i = 0; i <= var1->length - 1; i++) {
        int sum = var1->digits[i] + var2->digits[i] + num;
        var1->digits[i] = sum % 10;
        num = sum / 10;
    }
    var1->digits[var1->length] = num;
}
```

:::



::: tabs

@tab 1

```c
下面方法一和方法二等价吗？
方法一：
typedef struct {
    int digits[INTSIZE+1];  /* +1 for the buddy variable */
} longint_t;
#define LONG_ZERO (longint_t){.digits = {0}}

方法二：
typedef struct {
    int numbers[INTSIZE+1];  /* +1 for the buddy variable */
} longint_t;
#define LONG_ZERO { {0} }
```

方法一和方法二的目标是相同的：定义一个`longint_t`结构体并提供一个宏`LONG_ZERO`来初始化它。两者的差异在于初始化的方式。

方法一：
```c
typedef struct {
    int digits[INTSIZE+1];  /* +1 for the buddy variable */
} longint_t;
#define LONG_ZERO (longint_t){.digits = {0}}
```

这里使用了C99的指定初始化器（designated initializer）。它明确地指定了`digits`字段应该被初始化为全0。

方法二：
```c
typedef struct {
    int numbers[INTSIZE+1];  /* +1 for the buddy variable */
} longint_t;
#define LONG_ZERO { {0} }
```

这里使用了常规的结构体初始化方式。`{ {0} }`首先为外层结构体初始化，然后为`numbers`数组初始化。

两者都能达到初始化结构体的目的。对于这个特定的结构体，两种方法都会使得`digits`或`numbers`数组的所有元素都初始化为0。

所以，是的，从初始化结构体的角度来看，方法一和方法二是等价的。、

@tab 2

创建两个数组，两个数组等长，for 循环实现把目标数组倒过来存放到另一个数组。

```c
#include <stdio.h>

int main() {
    int arr1[] = {8, 6, 9};
    int len = sizeof(arr1) / sizeof(arr1[0]);
    int arr2[3];
    for (int i = 0; i < 3; i++) {
        arr2[i] = arr1[len - i - 1];
    }

    for (int i = 0; i < 3; i++) {
        printf("%d\t", arr2[i]);
    }
    return 0;
}
```

---

**题目：数组的反转**

给定一个整数数组 `arr1`，编写一个程序，使其将数组的元素反转并存储到另一个数组 `arr2` 中，然后输出 `arr2`。

例如，给定数组 `arr1` 为 `{8, 6, 9}`，程序应该输出 `9 6 8`。

**输入样例**：
```
arr1 = {8, 6, 9};
```

**输出样例**：
```
9	6	8
```

请根据上面的示例代码，完成这个任务。

---

实际上，上面给出的程序代码已经是一个解决这个问题的答案。

@tab 上面代码 `- '0';`作用是什么？

[ASCII 常用对照表 | AI悦创-Python一对一辅导 (bornforthis.cn)](https://bornforthis.cn/posts/29.html)

@tab 字符串转数字

### 1. 使用库函数 `atoi` 或 `strtol`：

这是最直接的方法，但它只适用于标准整数，而不是自定义的长整型结构（如你的例子中所示）。

```c
#include <stdlib.h>

int num = atoi(rhs);
```

### 2. 使用指针迭代字符串：

这是一种更手动的方法，它可以让你更精确地控制转换过程：

```c
int parse_num(const char *rhs) {
    int num = 0;
    while (*rhs) {
        if (*rhs >= '0' && *rhs <= '9') {
            num = num * 10 + (*rhs - '0');
        }
        rhs++;
    }
    return num;
}
```

### 3. 使用循环和数组索引：

这是另一种手动的方法，它更接近于你原始的方法：

```c
int parse_num(const char *rhs) {
    int length = strlen(rhs);
    int num = 0;
    for (int i = 0; i < length; i++) {
        if (rhs[i] >= '0' && rhs[i] <= '9') {
            num = num * 10 + (rhs[i] - '0');
        }
    }
    return num;
}
```

上述代码假设输入字符串只包含有效的数字字符，并且不处理可能的负数或其他无效字符。如果你的输入可能包含其他字符或负数，你需要在代码中增加适当的检查和处理。

不过，请注意，上述方法都是将字符串转换为标准的整数类型。如果你希望转换为自定义的长整型结构，你需要根据该结构进行调整。

@tab 字符串转数字

```c
#include <stdio.h>
#include <string.h>

// 假设我们的 longint_t 结构体是这样定义的：
typedef struct {
    int digits[100]; // 假设最多有 100 位的数字
} longint_t;

#define LONG_ZERO { {0} }

// 创建一个映射数组，用于将字符 '0'-'9' 转换为整数 0-9
int char_to_digit[128] = {0}; // 初始化所有值为 0

void initialize_mapping() {
    for (char c = '0'; c <= '9'; c++) {
        char_to_digit[c] = c - '0';
    }
}

longint_t parse_num(char *rhs) {
    longint_t result = LONG_ZERO;
    int length = strlen(rhs);

    result.digits[0] = length;
    int i = 0;
    while (i < length) {
        // 使用映射数组进行查找，而不是直接做数学运算
        result.digits[i + 1] = char_to_digit[rhs[length - 1 - i]];
        i++;
    }

    return result;
}

int main() {
    initialize_mapping();
    char numStr[] = "12345";
    longint_t num = parse_num(numStr);

    // 打印解析后的数字，作为一个验证
    for (int i = 1; i <= num.digits[0]; i++) {
        printf("%d", num.digits[i]);
    }
    return 0;
}
```

**为什么要初始化为128位？**

在上述代码中，我使用了一个大小为 128 的数组 `char_to_digit` 作为映射数组。这是基于 ASCII 编码的考虑。ASCII 是一个 7 位字符集，因此它包含从 0 到 127 的 128 个字符。初始化一个大小为 128 的数组确保可以为 ASCII 表中的每个字符提供一个映射值。

在这种情况下，我们只对 '0' 到 '9' 的字符进行映射，而其他位置的值保持为0。这样，当我们使用字符值作为索引来查找映射值时，我们不必担心数组越界。

然而，这种方式在这里可能略显过度，因为我们实际上只关心 '0' 到 '9' 这 10 个字符。但是，使用一个大小为 128 的数组可以为我们提供更多的灵活性，例如，如果未来需要映射更多的 ASCII 字符。如果确实只需要处理 '0' 到 '9' 这 10 个字符，那么映射表可以简化为更小的数组，并进行相应的调整。

```c
#include <stdio.h>
#include <string.h>

typedef struct {
    int digits[100]; // 假设最多有 100 位的数字
} longint_t;

#define LONG_ZERO { {0} }

// 只用于数字 '0'-'9' 的映射数组
int char_to_digit[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

longint_t parse_num(char *rhs) {
    longint_t result = LONG_ZERO;
    int length = strlen(rhs);

    result.digits[0] = length;
    int i = 0;
    while (i < length) {
        // 使用映射数组进行查找
        result.digits[i+1] = char_to_digit[rhs[length-1-i] - '0'];
        i++;
    }

    return result;
}

int main() {
    char numStr[] = "12345";
    longint_t num = parse_num(numStr);
    
    // 打印解析后的数字，作为一个验证
    for (int i = 1; i <= num.digits[0]; i++) {
        printf("%d", num.digits[i]);
    }
    return 0;
}

```

@tab 追问

如果你想直接得到数字，而不是一个长整型的结构体表示，你可以简化代码以返回一个整数。但要注意，直接将字符串转换为数字可能会遇到整数溢出的问题，特别是对于非常长的数字字符串。为了简单起见，我将假设你的数字字符串是适应在一个 `long long` 中的。

下面是一个简化的版本，直接返回一个数字：

```c
#include <stdio.h>
#include <string.h>

// 创建一个映射数组，用于将字符 '0'-'9' 转换为整数 0-9
int char_to_digit[128] = {0};

void initialize_mapping() {
    for (char c = '0'; c <= '9'; c++) {
        char_to_digit[c] = c - '0';
    }
}

long long parse_num(char *rhs) {
    int length = strlen(rhs);
    long long result = 0;
    long long multiplier = 1;

    for (int i = 0; i < length; i++) {
        result += char_to_digit[rhs[length-1-i]] * multiplier;
        multiplier *= 10; // 移动到下一个数位
    }

    return result;
}

int main() {
    initialize_mapping();
    char numStr[] = "12345";
    long long num = parse_num(numStr);
    
    // 打印解析后的数字
    printf("%lld\n", num);
    return 0;
}
```

这个版本的 `parse_num` 函数会返回一个 `long long` 类型的整数，而不是一个结构体。我们用一个变量 `multiplier` 来处理每个数字字符对应的数位。

- 上面 `rhs[length-1-i]` 这个是什么类型？

在上述代码中，`rhs` 是一个指向字符数组（或字符串）的指针，所以 `rhs[length-1-i]` 返回的是字符串中的一个字符。因此，`rhs[length-1-i]` 是 `char` 类型。

- 那么 char 类型为什么可以索引数组？`char_to_digit[rhs[length-1-i]]`

在 C 和 C++ 中，`char` 实际上是一个整型数据类型，尽管它经常被用来表示字符。这意味着 `char` 类型的值可以被用作整数，例如用作数组索引。

每个 `char` 变量实际上存储的是一个整数，该整数对应于某个字符的 ASCII 值（或其他字符编码的值，如 UTF-8，但在这种上下文中，我们通常使用 ASCII）。

例如，字符 '0' 在 ASCII 中的值是 48。所以当我们有一个 `char` 类型的变量 `ch`，它的值为 '0'，那么 `ch` 的实际整数值是 48。

这就是为什么我们可以使用 `char` 类型的值作为数组索引。当我们写 `char_to_digit[rhs[length-1-i]]` 时，我们实际上是使用字符的 ASCII 值来索引 `char_to_digit` 数组。

为了避免可能的负索引或越界的问题（因为 `char` 可以是负数，特别是在某些系统上它默认为有符号字符），通常最好确保索引值在有效范围内。在上述代码中，我们已经确保了 `rhs[length-1-i]` 只会是 '0' 到 '9' 之间的字符，所以用它作为索引是安全的。

:::

#### 3.2 Part2: Answer

::: code-tabs

@tab P1-G

```c
void do_multiply(longint_t *var1, longint_t *var2, longint_t *result);
```

@tab P2-G

```c
// 在 process_line 中处理乘法运算符
else if (optype == MULT) {
    longint_t result;
    do_multiply(vars+varnum, &second_value, &result);
    vars[varnum] = result;  // 将结果赋值给相应的变量
}
```

@tab P3-G

```c
void
do_multiply(longint_t *var1, longint_t *var2, longint_t *result) {
    int i, j, carry;
    int temp;

    // 初始化结果
    for (i = 0; i <= INTSIZE; i++) {
        result->numbers[i] = 0;
    }

    for (i = 1; i <= var1->numbers[0]; i++) {
        carry = 0;
        for (j = 1; j <= var2->numbers[0] || carry > 0; j++) {
            temp = result->numbers[i + j - 1] + var1->numbers[i] * var2->numbers[j] + carry;
            result->numbers[i + j - 1] = temp % 10;
            carry = temp / 10;
            result->numbers[0] = i + j - 1;
        }
    }
}
```

@tab P-G注释

```c
void
do_multiply(longint_t *var1, longint_t *var2, longint_t *result) {
    int i, j, carry;  // 定义两个循环变量 i 和 j，以及进位变量 carry
    int temp;  // 临时存储乘法和加法的结果

    // 初始化结果数组，确保开始时它是空的
    for (i = 0; i <= INTSIZE; i++) {
        result->numbers[i] = 0;
    }

    // 对于 var1 中的每个数字
    for (i = 1; i <= var1->numbers[0]; i++) {
        carry = 0;  // 每次开始新的 i 循环时，都将进位设置为 0
        // 对于 var2 中的每个数字或当还有进位时
        for (j = 1; j <= var2->numbers[0] || carry > 0; j++) {
            // 计算乘法的部分结果，并加上之前的值和进位
            temp = result->numbers[i + j - 1] + var1->numbers[i] * var2->numbers[j] + carry;
            result->numbers[i + j - 1] = temp % 10;  // 保存当前位的数字
            carry = temp / 10;  // 计算进位值
            result->numbers[0] = i + j - 1;  // 更新结果的长度
        }
    }
}



else if (optype == MULT) {
    longint_t result;  // 定义一个新的 longint_t 结构体来存储乘法的结果
    // 调用乘法函数，将结果存储在 result 中
    do_multiply(vars+varnum, &second_value, &result);
    vars[varnum] = result;  // 将结果赋值给相应的变量
}

void
do_print(int varnum, longint_t *var) {
    // 打印变量名，例如 "register a: "
    printf("register %c: ", varnum + CH_A);
    
    // 对于给定变量的每个数字
    for (int i = 1; i <= var->numbers[0]; i++) {
        printf("%d", var->numbers[i]);  // 打印当前数字
        // 检查是否需要在数字之间添加逗号。在每个三位数字后（从右到左计算）添加逗号
        if ((var->numbers[0] - i) % 3 == 0 && i != var->numbers[0]) {
            printf(",");
        }
    }
    printf("\n");  // 在打印完所有数字后添加换行
}
```

@tab P1-C

```c
typedef struct {
    int digits[INTSIZE + 1];
    int length;//用户输入的长度
} longint_t;
```

@tab P2-C

```c
void do_multiply(const longint_t *var1, const longint_t *var2, longint_t *result);
```

@tab P3-C

```c
else if (optype == MULT) {
        longint_t result;  // 为乘法结果定义一个新的结构体
        // 调用乘法函数，将结果存储在 result 中
        do_multiply(vars + varnum, &second_value, &result);
        vars[varnum] = result;  // 将结果赋值给相应的变量
    }
```

@tab P4-C

```c
void do_multiply(const longint_t *var1, const longint_t *var2, longint_t *result) {
    int i, j, carry, temp;

    // 初始化结果数组
    // TODO: 用 result 来存储数组，初始化为全部 0
    for (i = 0; i < INTSIZE; i++) {
        result->digits[i] = 0;
    }

    // 对于 var1 中的每个数字
    for (i = 0; i < var1->length; i++) {
        carry = 0;

        // 对于 var2 中的每个数字
        for (j = 0; j < var2->length; j++) {
            temp = result->digits[i + j] + var1->digits[i] * var2->digits[j] + carry;
            result->digits[i + j] = temp % 10;  // 保存当前位的数字
            carry = temp / 10;  // 计算进位值
        }

        // 当 var2 遍历完毕，但仍有进位时
        while (carry > 0) {
            temp = result->digits[i + j] + carry;
            result->digits[i + j] = temp % 10;  // 保存当前位的数字
            carry = temp / 10;  // 计算进位值
            j++;  // 为了正确地放置进位，增加j
        }
    }
    result->length = var1->length + var2->length;  // 最大可能的长度
    while (result->length > 1 && result->digits[result->length - 1] == 0) {
        // 删除前导零
        result->length--;
    }
}
```

:::

#### 3.3 Part3: Answer

::: code-tabs

@tab P1-G

```c
void do_exponentiation(longint_t *base, int exponent, longint_t *result) {
    // 定义一个单位数字，代表数字1
    longint_t one;
    one.numbers[0] = 1; //长度为1
    one.numbers[1] = 1;
//    printf("Base: %d, Exponent: %d\n", base->numbers[1], exponent); // 注意，这里我们假设基数是一个一位数

    // 如果 exponent 是 0, 直接返回结果 1
    if (exponent == 0) {
        *result = one;
        return;
    }

    // 初始时，结果是base
    *result = *base;

    // 对于每次的 exponent，进行乘法操作
    for (int i = 2; i <= exponent; i++) {
        longint_t temp_result;
        do_multiply(result, base, &temp_result);
        *result = temp_result;
    }
}

int extract_exponent(longint_t value) {
    int exponent = 0, i;
    for (i = value.numbers[0]; i >= 1; i--) {
        exponent = exponent * 10 + value.numbers[i];
    }
    return exponent;
}
```

@tab P2-G

```c
void do_exponentiation(longint_t *base, int exponent, longint_t *result);
int extract_exponent(longint_t value);
```

@tab P3-G

```c
else if (optype == POWR) {

        longint_t result;
        int exponent = extract_exponent(second_value);
        do_exponentiation(vars + varnum, exponent, &result);

//        do_exponentiation(vars + varnum, second_value.numbers[1], &result); // 假设second_value只有一个数字代表指数
        vars[varnum] = result;
    } 
```

@tab gtq目前代码

```c
/* Program to perform multi-digit integer arithmetic.

   Skeleton program written by Alistair Moffat, ammoffat@unimelb.edu.au,
   August 2023, with the intention that it be modified by students
   to add functionality, as required by the assignment specification.
   All included code is (c) Copyright University of Melbourne, 2023

   Student Authorship Declaration:

   (1) I certify that except for the code provided in the initial skeleton
   file, the  program contained in this submission is completely my own
   individual work, except where explicitly noted by further comments that
   provide details otherwise.  I understand that work that has been developed
   by another student, or by me in collaboration with other students, or by
   non-students as a result of request, solicitation, or payment, may not be
   submitted for assessment in this subject.  I understand that submitting for
   assessment work developed by or in collaboration with other students or
   non-students constitutes Academic Misconduct, and may be penalized by mark
   deductions, or by other penalties determined via the University of
   Melbourne Academic Honesty Policy, as described at
   https://academicintegrity.unimelb.edu.au.

   (2) I also certify that I have not provided a copy of this work in either
   softcopy or hardcopy or any other form to any other student, and nor will I
   do so until after the marks are released. I understand that providing my
   work to other students, regardless of my intention or any undertakings made
   to me by that other student, is also Academic Misconduct.

   (3) I further understand that providing a copy of the assignment
   specification to any form of code authoring or assignment tutoring service,
   or drawing the attention of others to such services and code that may have
   been made available via such a service, may be regarded as Student General
   Misconduct (interfering with the teaching activities of the University
   and/or inciting others to commit Academic Misconduct).  I understand that
   an allegation of Student General Misconduct may arise regardless of whether
   or not I personally make use of such solutions or sought benefit from such
   actions.

   Signed by: [Enter your full name and student number here before submission]
   Dated:     [Enter the date that you "signed" the declaration]

*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>
#include <ctype.h>
#include <assert.h>
#include <unistd.h>

/* All necessary #defines provided as part of the initial skeleton */

#define INTSIZE    500    /* max number of digits per integer value */
#define LINELEN    999    /* maximum length of any input line */
#define NVARS    26    /* number of different variables */

#define CH_A     'a'    /* character 'a', first variable name */

#define ERROR    (-1)    /* error return value from some functions */
#define PROMPT    "> "    /* the prompt string for interactive input */

#define PRINT    '?'    /* the print operator */
#define ASSIGN    '='    /* the assignment operator */
#define PLUS    '+'    /* the addition operator */
#define MULT    '*'    /* the multiplication operator */
#define POWR    '^'    /* the power-of operator */
#define DIVS    '/'    /* the division operator */
#define ALLOPS  "?=+*^/"

#define CH_ZERO  '0'    /* character zero */
#define CH_ONE   '1'    /* character one */
#define CH_NINE  '9'    /* character nine */

#define CH_COM   ','    /* character ',' */
#define PUT_COMMAS 3    /* interval between commas in output values */

#define INT_ZERO 0    /* integer 0 */
#define INT_TEN  10    /* integer 10 */

/* Placeholder typedef for skeleton code
*/
// typedef int longint_t;
typedef struct {
    int numbers[INTSIZE + 1];  /* +1 for the buddy variable */
    // int length;
    // 我们需要得到数字的长度，长度存储在哪？1. 变量
} longint_t;
#define LONG_ZERO { {0} }

// int a = 0;
// longint_t a = LONG_ZERO;

// #define LONG_ZERO 0
#define LONG_ONE  1


/****************************************************************/

/* A "magic" additional function needing explicit declaration */
int fileno(FILE *);

/* Skeleton program function prototypes */

void print_prompt(void);

void print_tadaa(void);

void print_error(char *message);

int read_line(char *line, int maxlen);

void process_line(longint_t vars[], char *line);

int get_second_value(longint_t vars[], char *rhsarg,
                     longint_t *second_value);

int to_varnum(char ident);

void do_print(int varnum, longint_t *var);

void do_assign(longint_t *var1, longint_t *var2);

void do_plus(longint_t *var1, longint_t *var2);

void zero_vars(longint_t vars[]);

longint_t parse_num(char *rhs);

void do_multiply(longint_t *var1, longint_t *var2, longint_t *result);

void do_exponentiation(longint_t *base, int exponent, longint_t *result);
int extract_exponent(longint_t value);
int compare(longint_t a, longint_t b);
void subtract(longint_t* a, longint_t b);
void do_divide(longint_t* dividend, longint_t* divisor, longint_t* result);
void insert_leftmost(longint_t* value, int digit);
void insert_rightmost(longint_t* value, int digit);
void initialize_zero(longint_t *number);

/****************************************************************/

/* Main program controls all the action
*/
int
main(int argc, char *argv[]) {
    char line[LINELEN + 1] = {0};
    longint_t vars[NVARS];

    zero_vars(vars);
    print_prompt();
    while (read_line(line, LINELEN)) {
        if (strlen(line) > 0) {
            /* non empty line, so process it */
            process_line(vars, line);
        }
        print_prompt();
    }

    print_tadaa();
    return 0;
}

/****************************************************************/

/* Prints the prompt indicating ready for input, but only if it
   can be confirmed that the input is coming from a terminal.
   Plus, output might be going to a file, that's why the prompt,
   if required, is written to stderr and not stdout
*/
void
print_prompt(void) {
    if (isatty(fileno(stdin))) {
        fprintf(stderr, "> ");
        fflush(stderr);
    }
}

void
print_tadaa(void) {
    /* all done, so pack up bat and ball and head home,
       getting the exact final lines right is a bit tedious,
       because input might be coming from a file and output
       might be going to a file */
    if (isatty(fileno(stdin)) && isatty(fileno(stdout))) {
        printf("\n");
    }
    printf("ta daa!!!\n");
    if (isatty(fileno(stdin)) && !isatty(fileno(stdout))) {
        fprintf(stderr, "\n");
    }
}

void
print_error(char *message) {
    /* need to write an error message to the right place(s)
    */
    if (isatty(fileno(stdin)) || isatty(fileno(stdout))) {
        fprintf(stderr, "%s\n", message);
        fflush(stderr);
    }
    if (!isatty(fileno(stdout))) {
        printf("%s\n", message);
    }
}

/****************************************************************/

/* Reads a line of input into the array passed as argument,
   returns false if there is no input available.
   All whitespace characters are removed on the way through.
*/
int
read_line(char *line, int maxlen) {
    int i = 0, c;
    while (((c = getchar()) != EOF) && (c != '\n')) {
        if (i < maxlen && !isspace(c)) {
            line[i++] = c;
        }
    }
    line[i] = '\0';
    /* then, if the input is coming from a file or the output
       is going to a file, it is helpful to echo the input line
       and record what the command was */
    if (!isatty(fileno(stdin)) || !isatty(fileno(stdout))) {
        printf("%s%s\n", PROMPT, line);
    }
    return ((i > 0) || (c != EOF));
}

/****************************************************************/

/* Process a command by parsing the input line into parts
*/
void
process_line(longint_t vars[], char *line) {
    int varnum, optype, status;
    longint_t second_value;

    /* determine the LHS variable, it
       must be first character in compacted line
    */
    varnum = to_varnum(line[0]);
    if (varnum == ERROR) {
        print_error("invalid LHS variable");
        return;
    }

    /* more testing for validity
    */
    if (strlen(line) < 2) {
        print_error("no operator supplied");
        return;
    }

    /* determine the operation to be performed, it
       must be second character of compacted line
    */
    optype = line[1];
    if (strchr(ALLOPS, optype) == NULL) {
        print_error("unknown operator");
        return;
    }

    /* determine the RHS argument (if one is required),
       it must start in the third character of compacted line
    */
    if (optype != PRINT) {
        if (strlen(line) < 3) {
            print_error("no RHS supplied");
            return;
        }
        status = get_second_value(vars, line + 2, &second_value);
        if (status == ERROR) {
            print_error("RHS argument is invalid");
            return;
        }
    }

    /* finally, do the actual operation
    */
    if (optype == PRINT) {
        do_print(varnum, vars + varnum);
    } else if (optype == ASSIGN) {
        do_assign(vars + varnum, &second_value);
    } else if (optype == PLUS) {
        do_plus(vars + varnum, &second_value);
        // you will need to add further operators here
    } else if (optype == MULT) {
        longint_t result;
        do_multiply(vars + varnum, &second_value, &result);
        vars[varnum] = result;  // 将结果赋值给相应的变量
    } else if (optype == POWR) {

        longint_t result;
        int exponent = extract_exponent(second_value);
        do_exponentiation(vars + varnum, exponent, &result);

//        do_exponentiation(vars + varnum, second_value.numbers[1], &result); // 假设second_value只有一个数字代表指数
        vars[varnum] = result;
    }
    else if (optype == DIVS) {
        longint_t result;
        do_divide(vars + varnum, &second_value, &result);
        vars[varnum] = result;
    }
    else {
        print_error("operation not available yet");
        return;
    }
    return;
}

/****************************************************************/

/* Convert a character variable identifier to a variable number
*/
int
to_varnum(char ident) {
    int varnum;
    varnum = ident - CH_A;
    if (0 <= varnum && varnum < NVARS) {
        return varnum;
    } else {
        return ERROR;
    }
}

/****************************************************************/

/* Process the input line to extract the RHS argument, which
   should start at the pointer that is passed
*/
int
get_second_value(longint_t vars[], char *rhsarg,
                 longint_t *second_value) {
    char *p;
    int varnum2;
    if (isdigit(*rhsarg)) {
        /* first character is a digit, so RHS is a number
           now check the rest of RHS for validity */
        for (p = rhsarg + 1; *p; p++) {
            if (!isdigit(*p)) {
                /* nope, found an illegal character */
                return ERROR;
            }
        }
        /* nothing wrong, ok to convert */
        *second_value = parse_num(rhsarg);
        return !ERROR;
    } else {
        /* argument is not a number, so should be a variable */
        varnum2 = to_varnum(*rhsarg);
        if (varnum2 == ERROR || strlen(rhsarg) != 1) {
            /* nope, not a variable either */
            return ERROR;
        }
        /* and finally, get that variable's value */
        do_assign(second_value, vars + varnum2);
        return !ERROR;
    }
    return ERROR;
}

/* Set the vars array to all zero values
*/
void
zero_vars(longint_t vars[]) {
    int i;
    longint_t zero = LONG_ZERO;
    for (i = 0; i < NVARS; i++) {
        do_assign(vars + i, &zero);
    }
    return;
}

/*****************************************************************
******************************************************************

Your answer to the assignment should start here, using your new
typedef defined at the top of the program. The next few functions
will require modifications because of the change of structure
used for a long_int, and then you'll need to start adding whole
new functions after you get these first ones working properly.
Try and make the new functions fit the style and naming pattern
of the existing ones, ok?

******************************************************************
*****************************************************************/

/* Create an internal-format number out of a string
*/
// longint_t
// parse_num(char *rhs) {
// 	return atoi(rhs);
// }
int char_to_digit[128] = {0};

void initialize_mapping() {
    for (char c = '0'; c <= '9'; c++) {
        char_to_digit[c] = c - '0';
    }
}

longint_t
parse_num(char *rhs) {
    initialize_mapping();
    longint_t result = LONG_ZERO;  // xxxxxx
    int len = strlen(rhs); // 获取用户输入数字的长度

    // 将数字的长度存储在第一个索引中
    result.numbers[0] = len;
    // 改写成 while 循环「为了独特性」

    for (int i = 0; i < len; i++) {
        // result.numbers[i+1] = rhs[len-1-i] - '0'; // char '9' = int 57
        result.numbers[i + 1] = char_to_digit[rhs[len - 1 - i]];  // char '9' = int 57
        // printf("%d\t", rhs[len-1-i] - '0')
    }

    return result;
}

/****************************************************************/

/* Print out a longint value
*/
// void
// do_print(int varnum, longint_t *var) {
// 	printf("register %c: ", varnum+CH_A);
// 	printf("%d\n", *var);
// }


// void do_print(int varnum, longint_t *var) {
//     printf("register %c: ", varnum + CH_A);
//     int count = 0;
//     int length = var->numbers[0];
//     printf("number length is %d\n", length);
//     // for (int i = var->digits[0]; i > 0; i--) {
//     //     printf("%d love ", var->digits[i]);
//     // }
//     for (int i = 1; i <= var->numbers[0]; i++) {
//     	if (count == 3) {
//     		printf(",");
//    		count = 0;
//     	}
//     	printf("%d", var->numbers[i]);
//     	count++;
//     }

//     printf("\n");
// }
void do_print(int varnum, longint_t *var) {
    printf("register %c: ", varnum + CH_A);

    int length = var->numbers[0];  // 获取长度

    // Count the remaining numbers till the next comma is needed
    // 1234567
    int remainder = length % 3;
    remainder = remainder == 0 ? 3 : remainder;  // 转换成使用 if

    for (int i = length; i > 0; i--) {  // Reverse the iteration order
        // for (int i = 1; i <= length; i++) {  // Reverse the iteration order

        if (remainder == 0) {
            printf(",");
            remainder = 3;  // Reset after printing a comma
        }

        printf("%d", var->numbers[i]);
        remainder--;
    }

    printf("\n");
}

/****************************************************************/

/* Assign a longint value, could do this with just an assignment
   statement, because structs can be assigned, but this is more
   elegant, and only copies over the array elements (digits) that
   are currently in use: var1 = var2

*/
void
do_assign(longint_t *var1, longint_t *var2) {
    *var1 = *var2;
}
// void 
// do_assign(longint_t *var1, longint_t *var2) {
//     var1->numbers[0] = var2->numbers[0];

//     for (int i = 1; i <= var2->numbers[0]; i++) {
//         var1->numbers[i] = var2->numbers[i];
//     }
// }

/****************************************************************/

/* Update the indicated variable var1 by doing an addition
   using var2 to compute var1 = var1 + var2
*/
void check_overflow(longint_t *var) {
    if (var->numbers[0] > INTSIZE) {
        printf("Overflow error! Exiting...\n");
        exit(EXIT_FAILURE);
    }
}

// void
// do_plus(longint_t *var1, longint_t *var2) {
// 	*var1 += *var2;
// }
void do_plus(longint_t *var1, longint_t *var2) {
    int carry = 0;
    int length_var1 = var1->numbers[0];
    int length_var2 = var2->numbers[0];
    int maxLength = (length_var1 > length_var2) ? length_var1 : length_var2;

    for (int i = 1; i <= maxLength || carry; i++) {
        if (i == INTSIZE + 1) {
            var1->numbers[0] = i;
            check_overflow(var1);
        }

        var1->numbers[i] += carry + (i <= var2->numbers[0] ? var2->numbers[i] : 0);
        carry = var1->numbers[i] / 10;
        var1->numbers[i] %= 10;

        if (i > var1->numbers[0]) {
            var1->numbers[0] = i;
        }
    }
}

/*****************************************************************
******************************************************************

Put your new functions below this line. Make sure you add suitable
prototypes at the top of the program.

******************************************************************
*****************************************************************/

void
do_multiply(longint_t *var1, longint_t *var2, longint_t *result) {
    // TODO:结果的数组需要结合两个数组的长度来实现么？
    int i, j, carry;
    int temp;

    // 初始化结果
    for (i = 0; i <= INTSIZE; i++) {
        result->numbers[i] = 0;
    }

    for (i = 1; i <= var1->numbers[0]; i++) {
        carry = 0;
        for (j = 1; j <= var2->numbers[0] || carry > 0; j++) {
            temp = result->numbers[i + j - 1] + var1->numbers[i] * var2->numbers[j] + carry;
            result->numbers[i + j - 1] = temp % 10;
            carry = temp / 10;
            result->numbers[0] = i + j - 1;
        }
    }
}

//TODO:下面的实现，没有测试
//void do_multiply(longint_t *var1, longint_t *var2, longint_t *result) {
//    int i, j, carry;
//    int temp;
//
//    // 初始化结果
//    for (i = 0; i <= INTSIZE; i++) {
//        result->numbers[i] = 0;
//    }
//
//    for (i = 1; i <= var1->numbers[0]; i++) {
//        carry = 0;
//        for (j = 1; j <= var2->numbers[0] || carry > 0; j++) {
//            temp = result->numbers[i + j - 1] + var1->numbers[i] * var2->numbers[j] + carry;
//            result->numbers[i + j - 1] = temp % 10;
//            carry = temp / 10;
//        }
//    }
//
//    // 设置结果的长度。长度应该是两个输入的长度之和或更少。
//    result->numbers[0] = var1->numbers[0] + var2->numbers[0];
//    while (result->numbers[0] > 1 && result->numbers[result->numbers[0]] == 0) {
//        result->numbers[0]--;
//    }
//}

//void
//do_exponentiation(longint_t *base, int exponent, longint_t *result) {
//    longint_t temp_result;
//
//    // Initialize the result as 1 since anything to the power 0 is 1.
//    result->numbers[0] = 1;
//    result->numbers[1] = 1;
//
//    // If the exponent is 0, the result is already set to 1 and we can exit.
//    if (exponent == 0) {
//        return;
//    }
//
//    // For every value from 1 to the exponent
//    for (int i = 1; i <= exponent; i++) {
//        // Multiply the current result by the base
//        do_multiply(result, base, &temp_result);
//        *result = temp_result;  // Copy the result back to our main result
//    }
//}

//
//longint_t powr(const longint_t *base, int exp) {
//    if (exp == 0) {
//        return parse_num("1");
//    }
//    if (exp == 1) {
//        return *base;
//    }
//
//    longint_t temp = powr(base, exp / 2);
//    longint_t result = do_multiply(&temp, &temp);
//    if (exp % 2) {
//        result = do_multiply(&result, base);
//    }
//    return result;
//}
//void do_exponentiation(longint_t *base, int exponent, longint_t *result) {
//    // 定义一个单位数字，代表数字1
//    longint_t one;
//    one.numbers[0] = 1;
//    one.numbers[1] = 1;
//
//    // 将结果初始化为1
//    *result = one;
//
//    // 对于每次的 exponent，进行乘法操作
//    for (int i = 0; i < exponent; i++) {
//        longint_t temp_result;
//        do_multiply(result, base, &temp_result);
//        *result = temp_result;
//    }
//}
//void do_exponentiation(longint_t *base, int exponent, longint_t *result) {
//    // 定义一个单位数字，代表数字1
//    longint_t one;
//    one.numbers[0] = 1; //长度为1
//    one.numbers[1] = 1;
//
//    // 将结果初始化为1
//    *result = one;
//
//    // 如果 exponent 是 0, 直接返回结果 1
//    if (exponent == 0) {
//        return;
//    }
//
//    // 对于每次的 exponent，进行乘法操作
//    for (int i = 1; i <= exponent; i++) {
//        longint_t temp_result;
//        do_multiply(result, base, &temp_result);
//        *result = temp_result;
//    }
//}
void do_exponentiation(longint_t *base, int exponent, longint_t *result) {
    // 定义一个单位数字，代表数字1
    longint_t one;
    one.numbers[0] = 1; //长度为1
    one.numbers[1] = 1;
//    printf("Base: %d, Exponent: %d\n", base->numbers[1], exponent); // 注意，这里我们假设基数是一个一位数

    // 如果 exponent 是 0, 直接返回结果 1
    if (exponent == 0) {
        *result = one;
        return;
    }

    // 初始时，结果是base
    *result = *base;

    // 对于每次的 exponent，进行乘法操作
    for (int i = 2; i <= exponent; i++) {
        longint_t temp_result;
        do_multiply(result, base, &temp_result);
        *result = temp_result;
    }
}

int extract_exponent(longint_t value) {
    int exponent = 0, i;
    for (i = value.numbers[0]; i >= 1; i--) {
        exponent = exponent * 10 + value.numbers[i];
    }
    return exponent;
}

int compare(longint_t a, longint_t b) {
    if(a.numbers[0] > b.numbers[0]) return 1;
    if(a.numbers[0] < b.numbers[0]) return -1;

    for(int i = a.numbers[0]; i >= 1; i--) {
        if(a.numbers[i] > b.numbers[i]) return 1;
        if(a.numbers[i] < b.numbers[i]) return -1;
    }

    return 0; // a == b
}

void subtract(longint_t* a, longint_t b) {
    int carry = 0, i;
    for(i = 1; i <= a->numbers[0]; i++) {
        a->numbers[i] -= b.numbers[i] + carry;
        if(a->numbers[i] < 0) {
            a->numbers[i] += 10;
            carry = 1;
        } else {
            carry = 0;
        }
    }

    // 更新结果的长度
    while(a->numbers[0] > 1 && a->numbers[a->numbers[0]] == 0) {
        a->numbers[0]--;
    }
}

void initialize_zero(longint_t *number) {
    number->numbers[0] = 0; // 设定长度为0
    for (int i = 1; i <= INTSIZE; i++) {
        number->numbers[i] = 0; // 为每个数字位置设定0值
    }
}

void do_divide(longint_t* dividend, longint_t* divisor, longint_t* result) {
    initialize_zero(result);

    if(compare(*dividend, *divisor) < 0) {
        // If dividend < divisor, the result is 0.
        return;
    }

    longint_t current;
    initialize_zero(&current);

    for(int i = dividend->numbers[0]; i >= 1; i--) {
        insert_leftmost(&current, dividend->numbers[i]);
        int quotient_digit = 0;
        while(compare(current, *divisor) >= 0) {
            subtract(&current, *divisor);
            quotient_digit++;
        }
        insert_rightmost(result, quotient_digit);
    }

    // Remove leading zeros from the result.
    while(result->numbers[0] > 1 && result->numbers[1] == 0) {
        for(int j = 1; j < result->numbers[0]; j++) {
            result->numbers[j] = result->numbers[j+1];
        }
        result->numbers[0]--;
    }
}
void insert_leftmost(longint_t* value, int digit) {
    if(value->numbers[0] >= INTSIZE) return;

    for(int i = value->numbers[0]; i >= 1; i--) {
        value->numbers[i+1] = value->numbers[i];
    }
    value->numbers[1] = digit;
    value->numbers[0]++;
}

void insert_rightmost(longint_t* value, int digit) {
    if(value->numbers[0] >= INTSIZE) return;

    value->numbers[0]++;
    value->numbers[value->numbers[0]] = digit;
}
```

@tab 注释

```c
/**
 * 比较两个长整数。
 * 
 * @param a 第一个长整数。
 * @param b 第二个长整数。
 * @return 如果a > b，返回1，如果a < b，返回-1，否则返回0。
 */
int compare(longint_t a, longint_t b) {
    // 如果a的长度大于b的长度，返回1。
    if(a.numbers[0] > b.numbers[0]) return 1;
    // 如果a的长度小于b的长度，返回-1。
    if(a.numbers[0] < b.numbers[0]) return -1;

    // 从最高位开始逐位比较两个数字。
    for(int i = a.numbers[0]; i >= 1; i--) {
        if(a.numbers[i] > b.numbers[i]) return 1;
        if(a.numbers[i] < b.numbers[i]) return -1;
    }

    // 如果两个数字相等，返回0。
    return 0;
}

/**
 * 从长整数a中减去长整数b。
 * 
 * @param a 被减数。
 * @param b 减数。
 */
void subtract(longint_t* a, longint_t b) {
    int carry = 0, i; // 定义进位变量。
    for(i = 1; i <= a->numbers[0]; i++) {
        // 逐位减去。
        a->numbers[i] -= b.numbers[i] + carry;
        // 如果结果为负，则需要从下一位借位。
        if(a->numbers[i] < 0) {
            a->numbers[i] += 10;
            carry = 1;
        } else {
            carry = 0;
        }
    }

    // 更新结果的长度。
    while(a->numbers[0] > 1 && a->numbers[a->numbers[0]] == 0) {
        a->numbers[0]--;
    }
}

/**
 * 对两个长整数进行除法操作。
 * 
 * @param dividend 被除数。
 * @param divisor 除数。
 * @param result 商的结果。
 */
void do_divide(longint_t* dividend, longint_t* divisor, longint_t* result) {
    initialize_zero(result);
    
    // 如果被除数小于除数，结果为0。
    if(compare(*dividend, *divisor) < 0) {
        return;
    }

    longint_t current; // 当前被除数的片段。
    initialize_zero(&current);

    // 从最高位开始逐位处理被除数。
    for(int i = dividend->numbers[0]; i >= 1; i--) {
        insert_leftmost(&current, dividend->numbers[i]);
        int quotient_digit = 0; // 商的当前位。
        // 当当前片段大于或等于除数时，继续减去除数。
        while(compare(current, *divisor) >= 0) {
            subtract(&current, *divisor);
            quotient_digit++;
        }
        // 将商的当前位添加到结果中。
        insert_rightmost(result, quotient_digit);
    }

    // 删除结果中的前导零。
    while(result->numbers[0] > 1 && result->numbers[1] == 0) {
        for(int j = 1; j < result->numbers[0]; j++) {
            result->numbers[j] = result->numbers[j+1];
        }
        result->numbers[0]--;
    }
}

/**
 * 在数字的最左侧插入一个数字。
 * 
 * @param value 需要插入的长整数。
 * @param digit 需要插入的数字。
 */
void insert_leftmost(longint_t* value, int digit) {
    if(value->numbers[0] >= INTSIZE) return;
    
    // 将所有数字向右移动一位。
    for(int i = value->numbers[0]; i >= 1; i--) {
        value->numbers[i+1] = value->numbers[i];
    }
    // 将数字插入到最左侧。
    value->numbers[1] = digit;
    value->numbers[0]++;
}

/**
 * 在数字的最右侧插入一个数字。
 * 
 * @param value 需要插入的长整数。
 * @param digit 需要插入的数字。
 */
void insert_rightmost(longint_t* value, int digit) {
    if(value->numbers[0] >= INTSIZE) return;
    
    // 更新长度并在最右侧插入数字。
    value->numbers[0]++;
    value->numbers[value->numbers[0]] = digit;
}

```

@tab cao

```c
typedef struct {
    int digits[INTSIZE + 1];
    int length;//用户输入的长度
} longint_t;

void make_power(longint_t *base, int exponent, longint_t *result) {
    longint_t temp;
    temp.length = 1;
    temp.digits[0] = 1;  // 注意这里修改了数组元素的赋值方式

    if (exponent == 0) {
        *result = temp;
        return;
    } else {
        *result = *base;
        int count = 1;
        while (count < exponent) {  // 注意这里的条件改变
            longint_t temp_result;
            do_multiply(result, base, &temp_result);
            *result = temp_result;
            count++;
        }
    }
}
```

@tab cao注释

```c
// 定义一个结构体来表示长整数。
typedef struct {
    int digits[INTSIZE + 1];  // 数组用于存储数字。每一个元素表示一个数字位。
    int length;               // 表示数字的长度（即数字位的数量）。
} longint_t;

/**
 * 用于计算长整数的指数的函数。
 *
 * @param base     [in]  要计算指数的基数。
 * @param exponent [in]  指数值。
 * @param result   [out] 指数计算的结果。
 */
void make_power(longint_t *base, int exponent, longint_t *result) {
    
    // 初始化一个临时变量。
    longint_t temp;
    temp.length = 1;             // 设置长度为1。
    temp.digits[0] = 1;          // 设置第一个数字位为1。

    // 如果指数为0，任何数的0次方都为1。
    if (exponent == 0) {
        *result = temp;          // 设置结果为1。
        return;
    } else {
        *result = *base;         // 如果指数不为0，则先将结果初始化为基数。
        
        int count = 1;           // 初始化计数器。因为基数已经是自己的1次方，所以从1开始。
        
        // 进行指数次的乘法。
        while (count < exponent) {  // 注意：当指数为2时，只需要乘以一次。
            
            longint_t temp_result;  // 临时变量，用于存储每一次乘法的结果。
            
            // 使用您的乘法函数进行乘法。
            do_multiply(result, base, &temp_result);
            
            *result = temp_result;  // 更新结果。
            
            count++;                // 递增计数器。
        }
    }
}
```

@tab 曹调用

```c
int make_p(longint_t num) {
    int p = 0;
    int i = num.length;
    while (i >= 0) {
        p = p * 10 + num.digits[i];
        i--;
    }
    return p;
}

```

@tab 声明cao

```c
int make_p(longint_t num);
void make_power(longint_t *base, int exponent, longint_t *result);
```

@tab 调用

```c
else if (optype == POWR) {
        longint_t result;
        int num = make_p(second_value);
        printf("num value %d\n", num);
        make_power(vars + varnum, num, &result);
        vars[varnum] = result;

    }
```



:::









::: details

````markdown
## Learning Outcomes
In this assignment you will demonstrate your understanding of arrays, strings, functions, and the typedef facility. You may also (but are not required to) use structs (see Chapter 8) if you wish. You must *not* make any use of malloc() (Chapter 10) or file operations (Chapter 11) in this project.
## Big Numbers
It is sometimes necessary to work with very big numbers. For example, application areas such as cryptography require exact manipulation of integers containing hundreds of digits. And by now you will be aware that the standard int and double data types do not possess that ability.
In this project you will develop a high-precision numeric calculator. You’ll be using C arrays to store the digits of the numbers, so it won’t quite be arbitrary precision; but it will certainly be possible to have 500-digit values manipulated exactly within reasonable computation times, which is big enough for many purposes.
Before doing anything else, you should copy the skeleton program ass1-skel.c from the LMS Assignment 1 page, and spend an hour or two reading through the code, understanding how it fits together. Check that you can compile it via either Grok or a terminal shell and gcc. Once you have it compiled, try this sequence:
```bash
➜  mac: ./ass1-skel
> a=12345
> a+23456
> a?
register a: 35801
> a+a
> a?
register a: 71602
> ^D
ta daa!!!
```
The “>”s are a prompt printed by the program, with the remainder of each of those lines the commands typed by the user. There are also two output lines in response to the “?” commands, and the final (what else?!) “ta daa!!!” message printed by the program as it exits. (Note that there is some fiddly code that makes use of the isatty() function to decide where to write each output line, so that the program works sensibly when input commands come from a file, and also when the output is directed to another text file. You do not need to understand how all that code works.)
The calculator maintains 26 one-letter “variables” (or *registers*), each of which has an initial value of zero, and can store one integer value. Each “command” operates on one of those 26 variables, applying a single operator to it, using (except for the “?” operator) one further non-negative integer operand. So, in the example shown above, register “a” is first assigned the value 12345; then it has 23456 added to it; then it is printed; and then register “a” has register “a” added to it; and then it is printed a second time.
The skeleton program uses a simple array of int variables to store the 26 registers. This skeleton is provided as a starting point, so that you don’t have to develop a whole lot of uninteresting functions.
The only operators provided in the skeleton program are “=” (assignment); “+” (addition); and “?” (printing). And the arithmetic will suffer from integer overflow, of course.
## Stage 1 – Find Your Own Type (12/20 marks)
The first change in the program is to employ a new definition for the type longint_t so that it becomes an array of INTSIZE decimal digits, each stored as an int in an array, plus a matching buddy variable stored in the first array position. That is, each register will be an array of int (rather than a single int), with the digits stored in *reverse* order, and with the first element in the array storing the array’s buddy variable. (You’ll understand why the digits are to be stored in reverse order once you start coding your solution.) For example, the number 12,345,542 has eight digits, and would be stored in a variable longint_t v as:
| v[0] | v[1] | v[2] | v[3] | v[4] | v[5] | v[6] | v[7] | v[8] | v[9] | v[10] | ...  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- | ---- |
| 8    | 2    | 4    | 5    | 5    | 4    | 3    | 2    | 1    | ?    | ?     | ...  |

where v[0] stores the (current) number of digits in the register’s value; where “?” represents a value that isn’t currently in use; and where the array v is declared to contain a total of INTSIZE+1 elements. All input numbers will be non-negative integers, and nor is a subtraction operator required. That means that you do not need to store a sign, nor worry about negative numbers.
If you wish to read Chapter 8 early, you may instead define and use a suitable struct for each of the registers (rather than the array option that is illustrated in the example), and then maintain the set of registers in an array of struct (rather than as an array of arrays). Note that the use of struct types is *not* required in this project, and you can get full marks without them.
As part of this first stage you’ll need to rewrite the function do plus() so that two variables of your new type longint_t are added correctly, and you’ll also need to modify several other functions (zero_vars() and do_assign(), plus others) so that they operate correctly after you have changed the underlying type. You should carefully plan the required changes *before* you jump in and start typing, because you’ll need to do quite a bit of editing before getting the program back to “compil- able/testable” state again.
As part of your changes, your program should check for overflow beyond INTSIZE digits both when constants are being input, and also when addition is being performed. If an overflow situation arises your program should print a suitable error message (your choice of wording) and then exit.
Successful completion of this stage means that your program should be able to handle additions involving numbers of up to INTSIZE (currently 500) decimal digits. Your program should detect any operations that overflow beyond INTSIZE digits, and write an error message of your choice and then exit, returning EXIT FAILURE.
## Stage 2 – Go Forth and Multiply (16/20 marks)

You surely knew it was coming, right? Well, now is the time to add a multiplication operator:

```c
b=123456789
b*987654321
b?
register b: 121,932,631,112,635,269
```

Yes, you need to sit down with pen and paper and remember your long multiplications from primary school, and then turn that process into a C function in your program. If you get stuck, ask your parents (or grandparents!), they might still remember how to do this kind of multiplication.

You should *not* implement multiplication via repeated addition, that will be frighteningly ineffi- cient. At the other end of the spectrum, nor are you required to investigate efficient integer multipli- cation algorithms. It is expected that your process for multiplying two n-digit numbers will involve time proportional to $n^2$, that is, will be $O(n^2)$.

As a second change required in this stage, note the commas in the output values, following the Australian convention of placing them every three digits, counting from the right. (Other cultures have different conventions.)
````

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
