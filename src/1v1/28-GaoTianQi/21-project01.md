---
title: week quiz
date: 2023-09-08 17:41:58
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
icon: python
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

The Week 7 Homework is another GradeScope submission. Download the Assignment 1 skeleton program, edit your name and student number into it, and then complete the first part of Stage 1, so that you can correctly handle this (or similar) command sequence:

```text
> a=2147483648
> a?
2,147,483,648
```
That is, design your revised longint_t representation, and implement  replacement bodies for functions parse_num() and do_print().

And yes, this is like a bonus mark, being paid for starting early on the Assignment (think of this as being Stage 0.5 perhaps) right at the beginning of Week 8 (the final Assignment is due at the end of the week). The Week 7 Homework will open at 6pm on Wednesday 6 September and close at 10am on Monday 11 September.

Make sure that you submit to the "Homework Activity (Week 7)" via the button at the bottom of this page, and not to the "Assignment 1" GradeScope submission. They are different assessments. No sympathy if you get this part of it wrong.

::: details zh

这个题目要你完成以下任务：

1. **下载骨架程序**：首先，你需要从 GradeScope下载"Assignment 1"的骨架程序。

2. **编辑个人信息**：下载后，在程序中输入你的姓名和学号。

3. **完成阶段1的第一部分**：你需要修改程序，使其能够正确处理以下命令序列：

    ```
    > a=2147483648
    > a?
    2,147,483,648
    ```

    这意味着你需要设计你修改后的`longint_t`表示法，并为函数`parse_num()`和`do_print()`实现新的函数体。

4. **开始时间**：这项作业相当于一个加分题，鼓励你在第8周初尽早开始这个任务。你可以将其看作是阶段0.5。这个作业将在9月6日（星期三）下午6点开放，并在9月11日（星期一）上午10点关闭。

5. **提交作业**：当你完成作业后，确保你将作业提交到"Homework Activity (Week 7)"，而不是"Assignment 1"的GradeScope提交。两者是不同的评估。如果你提交错误，将不会有任何同情。

总之，这个题目是要你下载一个程序，添加你的个人信息，然后修改该程序以处理特定的命令序列，并在指定的时间内提交。确保你提交到正确的地方以避免失分。

:::

## Solution

### ass1-skel.c 代码解析

::: code-tabs

@tab 完整版

```c
/* 执行多位整数运算的程序。
   此骨架程序是由Alistair Moffat编写的，旨在供学生进行修改以添加功能，根据任务要求。
   所有包含的代码均为2023年墨尔本大学版权所有。
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>
#include <ctype.h>
#include <assert.h>
#include <unistd.h>

/* 定义所有必要的常量 */

#define INTSIZE	500	/* 整数值的最大位数 */
#define LINELEN	999	/* 任何输入行的最大长度 */
#define NVARS	26	/* 不同变量的数量 */

#define CH_A     'a'    /* 字符'a'，首个变量名 */

#define ERROR	(-1)	/* 从某些函数返回的错误值 */
#define PROMPT	"> "	/* 交互输入的提示字符串 */

#define PRINT	'?'	/* 打印操作符 */
#define ASSIGN	'='	/* 赋值操作符 */
#define PLUS	'+'	/* 加法操作符 */
#define MULT	'*'	/* 乘法操作符 */
#define POWR	'^'	/* 幂运算操作符 */
#define DIVS	'/'	/* 除法操作符 */
#define ALLOPS  "?=+*^/" /* 所有的操作符集合 */

#define CH_ZERO  '0'    /* 字符零 */
#define CH_ONE   '1'    /* 字符一 */
#define CH_NINE  '9'    /* 字符九 */

#define CH_COM   ','    /* 字符',' */
#define PUT_COMMAS 3    /* 输出值中的逗号间隔 */

#define INT_ZERO 0	/* 整数0 */
#define INT_TEN  10	/* 整数10 */

/* 占位符typedef用于骨架代码 */
typedef int longint_t; // 长整型为int的别名
#define LONG_ZERO 0
#define LONG_ONE  1

/****************************************************************/

/* 需要明确声明的“神奇”附加函数 */
int fileno(FILE *);

/* 骨架程序功能原型 */

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

/* 主程序控制所有操作 */
int main(int argc, char *argv[]) {
	char line[LINELEN+1] = {0};
	longint_t vars[NVARS];

	zero_vars(vars);
	print_prompt();
	while (read_line(line, LINELEN)) {
		if (strlen(line) > 0) {
			/* 非空行，所以处理它 */
			process_line(vars, line);
		}
		print_prompt();
	}

	print_tadaa();
	return 0;
}

/****************************************************************/

/* 打印提示表示准备输入，但仅当可以确认输入来自终端时。
   此外，输出可能会转到文件，因此如果需要提示，则提示将写入stderr而不是stdout
*/
void print_prompt(void) {
	if (isatty(fileno(stdin))) {
		fprintf(stderr, "> ");
		fflush(stderr);
	}
}

void print_tadaa() {
	/* 所有工作都完成了，因此打包球棒并回家，得到确切的最后几行有点麻烦，
	   因为输入可能来自文件，输出可能转到文件 */
	if (isatty(fileno(stdin)) && isatty(fileno(stdout))) {
		printf("\n");
	}
	printf("ta daa!!!\n");
	if (isatty(fileno(stdin)) && !isatty(fileno(stdout))) {
		fprintf(stderr, "\n");
	}
}

void print_error(char *message) {
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

/* 读取一行输入到作为参数传递的数组中，
   如果没有输入可用，则返回false。
   在此过程中，所有空白字符都会被移除。
*/
int read_line(char *line, int maxlen) {
	int i=0, c;
	while (((c=getchar())!=EOF) && (c!='\n')) {
		if (i<maxlen && !isspace(c)) {
			line[i++] = c;
		}
	}
	line[i] = '\0';
	/* 然后，如果输入来自文件或输出转到文件，最好回显输入行
	   并记录命令是什么 */
	if (!isatty(fileno(stdin)) || !isatty(fileno(stdout))) {
		printf("%s%s\n", PROMPT, line);
	}
	return ((i>0) || (c!=EOF));
}

/****************************************************************/

/* 通过将输入行解析为操作符和至多两个操作数来处理每一行的输入。
   每个操作数可以是一个小写字母（对应于变量数组的索引），
   或它可以是一个数字。
   数字必须转换为longint_t值，然后可以进行相应的操作。
   注意，操作数都存储为longint_t数组中的元素，所以在执行操作之前，
   所有参与的值都可以简单地解引用。
*/
void process_line(longint_t vars[], char *line) {
	int op, varnum, second_value, error_flag=0;
	char *rhsarg, *lhsarg = line;

	/* 处理操作符和可能的第二个参数（rhsarg） */
	if (strpbrk(lhsarg, ALLOPS)) {
		op = *strpbrk(lhsarg, ALLOPS);
		*strpbrk(lhsarg, ALLOPS) = '\0';
		rhsarg = 1 + strpbrk(line, ALLOPS);
	} else {
		/* 没有操作符，所以报错并返回 */
		print_error("unknown command");
		return;
	}

	/* 获取第一个操作数（必须是小写字母） */
	if (strlen(lhsarg)==1 && islower(*lhsarg)) {
		varnum = to_varnum(*lhsarg);
	} else {
		print_error("invalid LHS");
		return;
	}

	/* 根据操作符进行分发 */
	switch (op) {
		case PRINT:
			do_print(varnum, &vars[varnum]);
			break;

		case ASSIGN:
			if (islower(*rhsarg)) {
				/* 第二个参数是变量 */
				second_value = to_varnum(*rhsarg);
				do_assign(&vars[varnum], &vars[second_value]);
			} else if (isdigit(*rhsarg) || *rhsarg=='-') {
				/* 第二个参数是数字 */
				vars[varnum] = parse_num(rhsarg);
			} else {
				print_error("invalid RHS");
			}
			break;

		case PLUS:
			if (!get_second_value(vars, rhsarg, &second_value)) {
				error_flag = 1;
			} else {
				do_plus(&vars[varnum], &second_value);
			}
			break;

		/* TODO: 更多的操作可以在这里添加 */

		default:
			print_error("unknown command");
			error_flag = 1;
			break;
	}

	if (error_flag) {
		print_error("operation failed");
	}
}

/****************************************************************/

/* 以下部分还包括了一些辅助功能的骨架，如zero_vars、get_second_value等，
   它们都有自己的特定功能，这些函数被主要的功能函数调用，以辅助执行各种任务。 */
```

@tab 答案

```c
/* 修改 longint_t 的定义 */
typedef struct {
    char digits[INTSIZE];
    int length;  // 实际长度
} longint_t;

#define LONG_ZERO (longint_t){.digits = {0}, .length = 1}
// typedef int longint_t;  // 注释掉
// #define LONG_ZERO 0   // 注释掉
/****************************************************************/

/* 使用新的 longint_t 数据结构解析数字 */
longint_t parse_num(char *rhs) {
    longint_t result;
    int len = strlen(rhs);
    result.length = len;

    for(int i = 0; i < len; i++) {
        result.digits[i] = rhs[len - 1 - i] - '0';  // 逆序存储方便运算
    }

    return result;
}
// longint_t
// parse_num(char *rhs) {
// 	return atoi(rhs);
// }
/****************************************************************/

/* 打印 longint_t 值，包括逗号分隔符 */
void do_print(int varnum, longint_t *var) {
    printf("register %c: ", varnum + CH_A);

    int comma_counter = 0;
    for (int i = var->length - 1; i >= 0; i--) {
        printf("%c", var->digits[i] + '0');
        comma_counter++;
        if (comma_counter == PUT_COMMAS && i != 0) {
            printf(",");
            comma_counter = 0;
        }
    }
    printf("\n");
}
// void
// do_print(int varnum, longint_t *var) {
// 	printf("register %c: ", varnum+CH_A);
// 	printf("%d\n", *var);
// }
/****************************************************************/

/* 将 var2 的值分配给 var1 */
void do_assign(longint_t *var1, longint_t *var2) {
    var1->length = var2->length;
    for (int i = 0; i < var2->length; i++) {
        var1->digits[i] = var2->digits[i];
    }
}
// void
// do_assign(longint_t *var1, longint_t *var2) {
// 	*var1 = *var2;
// }
/****************************************************************/

/* 执行加法操作 */
void do_plus(longint_t *var1, longint_t *var2) {
    int carry = 0;
    int maxLength = var1->length > var2->length ? var1->length : var2->length;
    
    for (int i = 0; i < maxLength || carry; i++) {
        if (i == var1->length) {
            var1->length++;
        }
        
        var1->digits[i] += (i < var2->length ? var2->digits[i] : 0) + carry;
        carry = var1->digits[i] / 10;
        var1->digits[i] %= 10;
    }
}
// void
// do_plus(longint_t *var1, longint_t *var2) {
// 	*var1 += *var2;
// }
```

@tab 修复输出结果

```c
void do_print(int varnum, longint_t *var) {
    printf("register %c: ", varnum + CH_A);

    // 根据长度计算第一个逗号应该在哪里
    int comma_position = (var->length % PUT_COMMAS == 0) ? PUT_COMMAS : var->length % PUT_COMMAS;

    for (int i = var->length - 1; i >= 0; i--) {
        printf("%c", var->digits[i] + '0');

        // 如果已经打印了 PUT_COMMAS 个数字并且不是最后一个数字，则添加逗号
        if (--comma_position == 0 && i != 0) {
            printf(",");
            comma_position = PUT_COMMAS;
        }
    }
    printf("\n");
}
```

:::











::: details 题目

题目：**指针数组与整数**

**目的**：使用指针数组来存储和输出一组整数。

**描述**：

编写一个程序，满足以下需求：

1. 定义一个指针数组，存放3个整数的地址。
2. 定义一个整数数组，包含3个整数：10, 20, 30。
3. 将整数数组的每个元素的地址赋值给指针数组。
4. 使用指针数组输出整数。

**示例输出**：
```
10
20
30
```

**答案**：
```c
#include <stdio.h>

int main() {
    int nums[3] = {10, 20, 30};  // 整数数组
    int *pointerArray[3];       // 指针数组，用于存放整数的地址

    // 将整数数组的地址赋值给指针数组
    for (int i = 0; i < 3; i++) {
        pointerArray[i] = &nums[i];
    }

    // 使用指针数组输出整数
    for (int i = 0; i < 3; i++) {
        printf("%d\n", *pointerArray[i]);
    }

    return 0;
}
```

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
