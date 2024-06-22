---
title: Programming Assignment 2
icon: c
date: 2023-10-26 08:40:45
author: AI悦创
isOriginal: true
category: 
    - 1v1
    - java 1v1
    - 纽约大学一对一
    - NYU 1v1
    - web 一对一
    - 数据结构一对一
    - 留学生辅导
    - php
    - 留学生作业辅导
tag:
    - 纽约大学一对一
    - NYU 1v1
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

This assignment helps prepare you for the midterm exam by making you (1) manipulate bits of variables, (2) understand how integer multiplication and floating point addition is performed, and (3) write some simple assembly code.

I have provided some of the code and step-by-step instructions in the comments.

Here are the steps to perform:

1. Download one of the compressed files, below, appropriate for your computer:

    1. assignment2_macos.tgz for macOS.
    2. assignment2_cygwin.tgz for Windows/Cygwin.
    3. assignment2_linux.tgz for Linux.

    As with the previous assignment, save and uncompress the downloaded file in the directory where you want to work on and compile your program. To uncompress the file, in a shell, type

    ``tar -xzvf  filename`

    where *filename* is the name of the file that you downloaded.

2. The six files that are extracted from the compressed file are:

    1. `assignment2.c`, a C file that you will be adding code to.
    2. `log.s`, an assembly language file that you will be adding code to.
    3. `log.h`, a header file that you should not change.
    4. `makefile`, a file that makes compiling quick and easy (do not change this file).
    5. An executable file, either `ben2` (on Mac OS X or Linux) or `ben2.exe` (Cygwin), which was compiled from my version of the assignment. You can use this to see how your code should behave.

3. Download the `Hints.pdf` file, below, containing helpful hints.

4. You should fill in the code missing in `assignment2.c`, where you will need to write functions for printing a number in hex, multiplying two integers by using shifts and adds, and performing subtraction on floating point numbers without using the built-in floating point arithmetic functions. You simply need to follow my step-by-step instructions in the comments.

5. You will also need to write assembly code in the file log.s, within the function log_2(). Again, you just need to follow my instructions in the comments.

6. Because of the makefile file that I provided, to compile your code, you simply need to type

    `make`

    Then, to run the code, type

    `./assignment2`

    However, if you just want to compile the assignment2.c file but not the log.s file, because you haven't inserted the assembly code in it yet, then compile as usual:

    `gcc assignment2.c`

    and run it by executing `./a.out` (on macOS or Linux) or `./a` (on Cygwin). Once you're ready to compile with `log.s`, then follow the instructions for `make`, above.

7. To compare the output of your program to that of mine, you can run my program by typing

    `./ben2`

8. When you are finished, upload your versions of `assignment2.c` and `log.s` to Brightspace



You should write your own code. You may work with other students to figure out how to approach the problem, you can even ask other students for help. However, if you don't write your own code then you will not be able to do well enough on the exams to get a decent grade in this course.

```python

#include <stdio.h>
#include <math.h>

#include "log.h"

// This function prints a 32-bit word out in hexadecimal, using only
// printf's "%c" or "%d" format specifiers.
// It works by selecting (using masking and shifting) each 4-bit group of bits
// in the word and then printing the value of that 4-bit group as a hex
// digit (between 0 and F, inclusive).

// complete this constant definition for the mask
//#define FOUR_BIT_MASK // FILL IN HERE
#define FOUR_BIT_MASK 0xF
// It takes as a parameter a pointer p of type void *, so that p can be
// a pointer to anything (i.e. you can pass in the address of anything).

void print_hex(void *p) {
    // copy the value that p points to into an unsigned integer variable.
    unsigned int x = *((unsigned int *) p);
    int shift_amount;
    unsigned int four_bits;
    char hex_chars[] = "0123456789ABCDEF";

    for (shift_amount = 28; shift_amount >= 0; shift_amount -= 4) {
        four_bits = (x >> shift_amount) & FOUR_BIT_MASK;
        printf("%c", hex_chars[four_bits]);
    }

    // In a loop, select four bits at a time using a mask.  Then, print
    // the value of that four-bit group using a single hex digit.

    // IMPORTANT: Do NOT use a bunch of "if" statements to map the
    // bits to a hex digit. Either use the value of the bits to
    // index into an array of characters or the following method:
    //   - if the value of the bits is between 0 and 9, just print the value
    //   - otherwise (i.e. the valus is greater than 9, print the value as
    //   an ASCII character (you'll need to add something to the value).

    // It's up to you whether to print leading zeros or not. Either is fine.

    /* FILL IN CODE */

} // end of print_hex



// This function multiplies two 32-bit signed integers, only using
// shifting and addition.  The result is a 64-bit signed integer.

long int multiply(int x, int y) {
    // Need variables to store a mask and a result. These should
    // be 64-bit unsigned numbers.

    unsigned long int mask = 1 /* FILL THIS IN */;
    unsigned long int prod = 0 /* FILL THIS IN */;

    // Need to sign-extend x and y to 64 bits

    long int lx = x/* FILL THIS IN */;
    long int ly = y/* FILL THIS IN */;

    // In a loop that uses a mask to iterate over the bits
    // of ly from right (bit 0) to left (bit 63):
    //   -- if the current bit of ly is 1, then add lx to the result.
    //   -- shift lx to the left by 1 (every time)
    // 从右到左遍历 ly 的位
    for (int i = 0; i < 64; i++) {
        // 如果 ly 的当前位为 1，则将 lx 添加到结果中
        if (ly & mask) {
            prod += lx;
        }
        // 将 lx 左移 1 位
        lx <<= 1;
        mask <<= 1;
    }

    // FILL THIS IN

    // Return the product, but as a signed long integer.
    return (long int) prod/* FILL THIS IN */;
}


// Defining as macros the expressions for extracting the
// sign, exponent, and fraction fields of a 32-bit
// floating point number.

// select bit 31, shifted all the way to the right.

//#define SIGN(x) (/* FILL THIS IN */)
#define SIGN(x) ((x >> 31) & 1)

// select bits 23 through 30, shifted right by 23 bits

//#define EXP(x) (/* FILL THIS IN */)
#define EXP(x) ((x >> 23) & 0xFF)

// select bits 0 through 22 (the rightmost 23 bits)

//#define FRAC(x) (/* FILL THIS IN */)
#define FRAC(x) (x & 0x7FFFFF)

// This mask puts a 1 in the sign position(bit 31)
// and a zero in all other bits. It can be used
// with ^ (XOR) to flip the sign of a number

//#define BIT31_MASK (/* FILL THIS IN */)
#define BIT31_MASK (1 << 31)

// This mask puts a 1 in the bit 24 position,
// to be used to check overflow of the mantissa

//#define BIT24_MASK (/* FILL THIS IN */)
#define BIT24_MASK (1 << 24)
// This function performs a floating point subtraction without
// using the built-in floating point subtraction -- instead only
// using integer addition and subtraction. It does so
// by extracting on the sign, exponent, and fraction of the
// operands and performing operations using those to
// compute the sign, exponent, and operand of the result.

// NOTE: Do NOT implement this by simply negating g and
// performing addition. Just follow the instructions below.

float float_subtract(float f, float g) {

    union {
        float fl;
        unsigned int num;
    } u1, u2;

    u1.fl = f;
    u2.fl = g;
    // We need to treat the values stored in f and g
    // as 32-bit unsigned numbers. See the hint sheet
    // for ways to do that.  We then need to extract the
    // sign, exponent, and fraction fields from f
    // and g, using the SIGN, EXP, and FRAC macros
    // above.

    unsigned int sign_f = SIGN(u1.num) /* FILL THIS IN */;
    unsigned int sign_g = SIGN(u2.num) /* FILL THIS IN */;


    unsigned int exp_f = EXP(u1.num) /* FILL THIS IN */;
    unsigned int exp_g = EXP(u2.num) /* FILL THIS IN */;

    unsigned int frac_f = FRAC(u1.num) /* FILL THIS IN */;
    unsigned int frac_g = FRAC(u2.num) /* FILL THIS IN */;

    // Handle the special case where f is zero (i.e.
    // both the exp_f and frac_f are zero),
    // in which case the result is the negative of
    // g, which is computed by just flipping the sign bit
    // using ^ (XOR).


    // FILL THIS IN

    // Do the same for g (i.e. check if g is zero), in
    // which case return f.
    // 检查 f 或 g 是否为零
    if ((exp_f == 0) && (frac_f == 0)) return -g;
    if ((exp_g == 0) && (frac_g == 0)) return f;

    // In order to perform the subtraction, the implicit
    // leading 1 in the mantissa for f and g must be made
    // explicit. That is, the mantissa for f should contain
    // a 1 in the bit 23 position, followed by the bits of frac_f.
    // The same is true for the mantissa of g.

    unsigned int mantissa_f = frac_f | (1 << 23) /* FILL THIS IN */;
    unsigned int mantissa_g = frac_g | (1 << 23)/* FILL THIS IN */;

    // Before performing the subtraction, the two numbers must have the
    // same exponent. Take the mantissa of the number with the smaller
    // exponent, and shift that mantissa right by the difference in the
    // exponents, and set the smaller exponent to the larger exponent.
    // For example, if f has a smaller exponent than g, shift mantissa_f
    // the right by (exp_g - exp_f) bits and set exp_f to exp_g.

    // FILL THIS IN

    // Now it's time to compute the exponent, sign, and
    // mantissa of the result.
    // 调整指数和尾数
//    while (exp_f > exp_g) {
//        mantissa_g >>= 1;
//        exp_g++;
//    }
//    while (exp_g > exp_f) {
//        mantissa_f >>= 1;
//        exp_f++;
//    }
    if (exp_f > exp_g) {
        mantissa_g >>= (exp_f - exp_g);
        exp_g = exp_f;
    } else if (exp_g > exp_f) {
        mantissa_f >>= (exp_g - exp_f);
        exp_f = exp_g;
    }
    // The exponent of the result (before normalization) is
    // now the same as exponent_f (which is the same as
    // exponent_g).

    unsigned int exp_res = exp_f/* FILL THIS IN */;

    unsigned int mantissa_res;

    unsigned int sign_res = sign_f;

    // If  sign_f and sign_g are different, i.e. f is positive
    // and g is negative or f is negative and g is positive,
    // then:
    //  --  the sign of the result will be the same as the sign of f.
    //  --  the mantissa of the result will be the sum of mantissa_f
    //      and mantissa_g
    //  --  since the sum of the two mantissas may cause a carry into
    //      bit 24 of the result, the result may need to be renormalized.
    //      That is, if bit 24 of the result mantissa is 1, then the
    //      result mantissa should be shifted to the right by 1 and the
    //      exponent of the result should be incremented by 1.

    if (sign_f != sign_g) {
        mantissa_res = mantissa_f + mantissa_g;
        if (mantissa_res & (1 << 24)) {
            mantissa_res >>= 1;
            exp_res++;
        }
    } else {
        if (mantissa_f >= mantissa_g) {
            mantissa_res = mantissa_f - mantissa_g;
        } else {
            mantissa_res = mantissa_g - mantissa_f;
            sign_res = sign_g;
        }
        // Otherwise, namely if sign_f and sign_g are same (i.e. either both
        // numbers were positive or both were negative), then:
        //    -- if f has the larger mantissa, the sign of the result will
        //       be the sign of f.
        //    -- otherwise (i.e. if g has the larger mantissa), the sign of the result
        //       will be the opposite of the sign of g.
        //    -- the mantissa of the result should be the result of subtracting
        //       the smaller mantissa from the larger mantissa.
        //
        //       For example, if mantissa_f > mantissa_g, then the sign of the result is
        //       set to sign_f and the mantissa of the result is set to
        //       (mantissa_f - mantissa_g).
        //    -- If the resulting mantissa is 0, then the entire result is 0 and
        //       the function should just return 0.0.
        //    -- Otherwise, the resulting mantissa may be small enough that it has to be
        //       renormalized to have a 1 in the bit 23 position. Do this in
        //       a loop, shifting the result mantissa to the left by 1 bit and subtracting
        //       1 from the result exponent, until the mantissa has a 1 in the
        //       bit 23 position.

        // FILL THIS IN

    }

    // Now construct the result from OR'ing (using bitwise-or, | ) together the
    // following components of the result:
    //  -- the sign bit of the result, shifting into the sign position
    //  -- the lowest 8 bits of the exponent, shifted into exponent position
    //  -- the lowest 22 bits of the mantissa (i.e. removing the 1 in bit 23 position,
    //     since it is implicit)

//    unsigned int result  = /* FILL THIS IN */
    unsigned int result = (sign_res << 31) | (exp_res << 23) | (mantissa_res & ((1 << 23) - 1));

    // Return the computed result (which is an unsigned int) as a floating point number.
    // Be sure that the compiler does not perform a conversion (see the hint sheet).

    union {
        float fl;
        unsigned int num;
    } result_union;

    result_union.num = result;

    return result_union.fl;
}




// No code in this function should be changed. Just uncomment the appropriate
// code as you complete each of the functions above.

int main() {
    int x;
    int y;
    printf("Enter a number to print in hex > ");
    scanf("%d", &x);
    print_hex(&x);
    printf("\n");
    printf("Checking, answer should be: %x\n", x);

    // UNCOMMENT THESE AS YOU IMPLEMENT THE REQUIRED FUNCTIONS

    printf("Enter two integers (to multiply) > ");
    scanf("%d %d", &x, &y);

    printf("%d * %d = %ld\n", x, y, multiply(x, y));
    printf("Checking, answer should be %ld\n", ((long) x) * ((long) y));

    float f, g;
//
    printf("Enter two floating point numbers for the subtraction > ");
    scanf("%f", &f);
    scanf("%f", &g);
//
    printf("Computed %f - %f = %f\n", f, g, float_subtract(f, g));
    printf("Checking, answer should be close to %f\n", f - g);
//
//    unsigned long n;
//
//    printf("Enter a non-negative integer n to compute the log of >");
//    scanf("%lu", &n);
//    unsigned long res = log_2(n);
//    if ((long) res == -1)
//        printf("Error: log(0) is undefined\n");
//    else {
//        printf("Log(%lu) is %lu\n", n, res);
//        printf("Checking, answer should be %lu\n", (unsigned long) log2((double) n));
//    }
    return 0;
}
```

```text
        .section        __TEXT,__text,regular,pure_instructions
        .globl  _log_2
        .p2align        4, 0x90

        // See the declaration in log.h
        // This function takes one parameter:
        //   -- a 64-bit unsigned long n in the %rdi register
        // It returns the log of n, also as an unsigned long.
        // The return value, being 64 bits, must be placed in
        // the %rax register.
        // Note: if n is zero, then signal an error by
        // putting all one's in the %rax register (this
        // would be -1 if the result was signed).

        // The equivalent C code would be:

        // unsigned long log_2(unsigned long n)
        // {
        //   if (n == 0)
        //     return ((unsigned long) -1);
        //   unsigned long result = 0;
        //   n >>= 1;
        //   while (n != 0) {
        //     result++;
        //     n >>= 1;
        //   }
        //   return result;
        // }    

_log_2:
    // 检查 n 是否为零
    testq %rdi, %rdi
    jz .is_zero

    // 初始化
    xorq %rax, %rax // 设置结果为 0

.loop:
    shrq %rdi  // 将 n 右移1位
    testq %rdi, %rdi  // 检查 n 是否为零
    jz .end_loop
    incq %rax  // 增加结果
    jmp .loop

.is_zero:
    movq $-1, %rax  // 如果 n 为零，则返回 ((unsigned long) -1)

.end_loop:
    ret

        // Note: You can overwrite the 64-bit registers %rax, %rcx, %rdx, %rsi, 
        // %rdi, %r8, %r9, %r10, %r11 as you like. These are "caller-saved" registers.
        
        pushq   %rbp            // leave this alone
        movq    %rsp, %rbp      // leave this alone

        // first check if n is zero, if so, put
        // -1 in %rax and jump to DONE
        
        /* FILL THIS IN	*/      // check if n = 0
        /* FILL THIS IN	*/      // if not, jump to PROCEED
        /* FILL THIS IN	*/      // otherwise, put -1 in %rax
        /* FILL THIS IN */      // and jump to DONE
PROCEED:
        /* FILL THIS IN */      // initialize the result (%rax) to 0

LOOP_TOP:
        /* FILL THIS IN */     // shift n right by 1 to divide by 2
        /* FILL THIS IN */     // compare n to 0
        /* FILL THIS IN */     // if n = 0, we're done, jump to DONE
        /* FILL THIS IN */     // otherwise, increment the result
        /* FILL THIS IN */     // and jump to the top of the loop

DONE:

        popq    %rbp          // leave this alone
        retq                  // leave this alone
```







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