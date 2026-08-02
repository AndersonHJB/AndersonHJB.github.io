---
title: Homework 5
date: 2024-10-11 09:34:43
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

**Instructions:** This homework is to be submitted on GradeScope as a *single* pdf (not in parts) by 11:59 pm on the due date. You may either type your solutions in a word processor and print to a pdf, or write them by hand and submit a scanned copy. Do write and submit your answers as if they were a professional report. There will be point deductions if the submission isn’t neat (is disordered, difficult to read, scanned upside down, etc...).

Begin by reviewing your class notes, the slides, and the textbook. Then do the exercises below. **Show your work.** An unjustified answer may receive little or no credit.

**Schedule:** You can do all problems right now, except for problems 7, 9, 10 that require Tuesday’s class.

**Read:** 1.3 (for Tuesday) and 1.4 (for Friday)

---

1. **[4 Points]** Use the listing method to describe the language $L \subseteq \{a, b\}^*$ that is accepted by the nondeterministic automaton

![](https://blog.images.bornforthis.cn/docs-images/sha256/25/25b1519ac20435a9b29ad653764998b7038f08a028d97228f74f7e685ef0ad53.png)

::: details

语言 $L \subseteq \{a, b\}^*$ 接受的字符串为：$L = \{\epsilon, b, ab, aab, aaab, \dots\} = \{a^n b \mid n \geq 0\}$ 即，L 包含所有零个或多个 $a$ 后跟一个 $b$ 的字符串，以及空 $\epsilon$ 。

----

根据图片中的非确定性有限自动机（NFA），一开始传入的数据是 **ε**（空串）。从图中可以看到，最左边的初始状态有一个箭头指向下一状态，箭头标记为 **ε**，表示在无需输入任何字符（即输入空串 ε）的情况下，自动机可以自由地移动到下一个状态。 

因此，最开始传入的数据是 **ε**，即空串。

---

根据状态图的结构，任意数量的 $a$ 也能够被接受，因为有一条从最后一个状态通过 $\epsilon$-转移直接回到初始状态。这意味着，除了形如 \( a^n b \) 的字符串外，形如 $a^n$ （即仅包含任意数量的 $a$）的字符串也可以被接受。

因此，最终的语言 $L$  应该包含以下形式的字符串：

1. 空串 $\epsilon$。
2. 任意数量的 $a$，即 $a^n$（n 为非负整数）。
3. 任意数量的 \( a \) 后跟一个 $b$，即 $a^n b$（n 为非负整数）。

**最终答案：**

语言 $L \subseteq \{a, b\}^*$ 接受的字符串为：
$L = \{ \epsilon, a, aa, aaa, \dots, b, ab, aab, aaab, \dots \} = \{ a^n b^m \mid n \geq 0, m = 0 \text{ or } 1 \}$

这意味着，$L$ 包含了任意数量的 $a$ 和至多一个 $b$ 的所有字符串。

:::





2. **[6 Points]** The nondeterministic finite automaton $N$ below is defined over the alphabet $\{a, b\}$. Formally describe it by specifying each component of the quintuple $N = (Q, \Sigma, \delta, s, F)$.

![](https://blog.images.bornforthis.cn/docs-images/sha256/ce/cef885ebd3ed5972285a13d4f3285bac1acd869ce0f606ff6e6a05483cbaf806.png)

::: details

1. 状态集合 Q：

$$
Q = \{q_0, q_1, q_2\}
$$

该自动机有三个状态 $q_0$, $q_1$ 和 $q_2$

2. 字符串表 $\sum$

$$
\sum = \{a, b\}
$$



字母表由 $a$ 和 $b$ 组成。

3. 转换函数 $\delta$: 转换函数定义如下：

$$
\delta: Q \times \Sigma \cup \{\epsilon \to 2^Q\} \text{是状态的转换函数，即状态和输入符号的映射。}
$$

- $\delta(q_0, a) = \{q_1, q_2\}$ （状态 $q_0$ 接受 a 后可以转移到 $q_1$ 或 $q_2$）
- $\delta(q_0, \epsilon) = \{q_2\}$ （状态 $q_0$ 接受 $\epsilon$ 空转后可以转移到 $q_2$）
- $\delta(q_1, a) = \{q_2\}$ （状态 $q_1$ 接受 $a$ 后转移到 $q_2$）
- $\delta(q_1, b) = \{q_1\}$ （状态 $q_1$ 接受 $b$ 后保持在 $q_1$））
- $\delta(q_2, a) = \{q_2\}$ （状态 $q_2$ 接受 $a$ 后保持在 $q_2$）
- $\delta(q_2, b) = \{q_2\}$ （状态 $q_2$ 接受 $b$ 后保持在 $q_2$）

4. 起始状态 $s$:

$$
s = q_0
$$

5. **终止状态集合 $F$**：

$$
F = \{q_2\}
$$

终止状态为 $q_2$。

总结：

$N = (\{q_0, q_1, q_2\}, \{a, b\}, \delta, q_0, \{q_2\})$

:::

3. **[5 Points] NFAs.** Let $\Sigma = \{a, b\}$ and let
    $$
    L = \{ w \in \Sigma^* \mid w \text{ contains at least two } a's \text{ with exactly 6 characters between them} \}
    $$
    

For example, $aabbababbabab \in L$ because there are exactly 6 characters between the third and the last $a$, but $aabbababbabab \notin L$. Draw the state-diagram of a NFA that accepts $L$.

::: details

要设计一个非确定性有限自动机（NFA），它接受语言 \( L \)，其中 $L = \{ w \in \Sigma^* \mid w \text{ contains at least two } a's \text{ with exactly 6 characters between them} \}$，即字符串中至少有两个字符 'a'，且它们之间有恰好 6 个字符。

**NFA 设计：**

- 状态 $q_0$：初始状态，等待第一个 'a' 出现。
- 状态 $q_1$：读到了第一个 'a'，开始计数接下来出现的字符。
- 状态 $q_2, q_3, q_4, q_5, q_6, q_7$：依次表示在第一个 'a' 之后读入的第1至第6个字符，无论是 'a' 还是 'b'。
- 状态 $q_8$：当读到第6个字符后，自动机期待另一个 'a'。
- 状态 $q_f$：接受状态，表示读到第二个 'a'，且它与第一个 'a' 之间恰好有 6 个字符。

1. **状态集合 $Q$**：$Q = \{q_0, q_1, q_2, q_3, q_4, q_5, q_6, q_7, q_f\}$
    - 状态：$q_0, q_1, q_2, q_3, q_4, q_5, q_6, q_7, q_f$
    - 初始状态：$q_0$
    - 接受状态：$q_f$

2. 字母表：$\sum =\{a, b\}$

    字母表包含 a 和 b。

3. 转换函数 $\delta$

    - **从 $q_0$：**

        - 读到 $a$ 时，转移到 $q_1$。

        - 读到 $a$ 或 $b$ 时，保持在 $q_0$。（因为我们可以在任何位置开始新的匹配）

    - **从 $q_1$ 到 $q_6$：**
        - 对于每个状态 $q_i$（$i = 1$ 到 $6$），读到任意字符 $a$ 或 $b$ 时，转移到下一个状态 $q_{i+1}$。

    - **从 $q_7$：**

        - 读到 $a$ 时，转移到接受状态 $q_f$。

        - 读到 $a$ 或 $b$ 时，保持在 $q_7$。（表示等待下一个 $a$）

    - **从接受状态 $q_f$：**
        - 读到任意字符 $a$ 或 $b$ 时，保持在 $q_f $。

4. 状态图示意：

    ```python
    (q0) --a--> (q1) --a,b--> (q2) --a,b--> (q3) --a,b--> (q4) --a,b--> (q5) --a,b--> (q6) --a,b--> (q7) --a--> [qf]
      ^                                          |
      |------------------------------------------|
                 输入 a 或 b，循环回 q0
    ```

5. 状态转移表：

| 当前状态 | 输入字符 | 下一状态 |
| -------- | -------- | -------- |
| $q_0$    | $a$      | $q_1$    |
| $q_0$    | $a, b$   | $q_0$    |
| $q_1$    | $a, b$   | $q_2$    |
| $q_2$    | $a, b$   | $q_3$    |
| $q_3$    | $a, b$   | $q_4$    |
| $q_4$    | $a, b$   | $q_5$    |
| $q_5$    | $a, b$   | $q_6$    |
| $q_6$    | $a, b$   | $q_7$    |
| $q_7$    | $a$      | $q_f$    |
| $q_7$    | $a, b$   | $q_7$    |
| $q_f$    | $a, b$   | $q_f$    |

$$
q_0 \xrightarrow{a} q_1 \xrightarrow{a, b} q_2 \xrightarrow{a, b} q_3 \xrightarrow{a, b} q_4 \xrightarrow{a, b} q_5 \xrightarrow{a, b} q_6 \xrightarrow{a, b} q_7 \xrightarrow{a} q_f
$$



:::



4. [10 Points] **NFAs**. Let $\sum = \{a, b, c, d\}$ and let

$L = \{ w \in \Sigma^* \mid w \neq \varepsilon \text{ and the last character of } w \text{ appears nowhere else in } w \}$

Draw the state-diagram of a NFA that accepts L.

::: details

1. NFA 的状态设计：

    1. **初始状态 $q_0$**：从这里开始读取字符。
    2. **中间状态 $q_i$**（多个状态用于处理读取的字符）：
       - 每读一个字符，继续前进。
    3. **分支状态 $q_{guess}$**：非确定性地猜测当前字符是否是最后一个字符。
    4. **检查状态 $q_{check}$**：一旦猜测了某个字符是最后一个字符，就需要检查它是否出现在之前的输入中。
    5. **接受状态 $q_f$**：如果最后一个字符没有在之前出现过，自动机接受该字符串。
    6. **拒绝状态 $q_{rej}$**：如果最后一个字符在之前出现过，则转到拒绝状态。

    $Q = \{q_0, q_1, q_2, \dots, q_{n-1}, q_{guess}, q_{check}, q_f, q_{rej}\}$

```python
(q0) --[b,c,d]--> (q1) --[b,c,d]--> (q1)
 |                       |
[a]                     [a]
 |                       |
↓                       ↓
(q_fail)             (q_accept)
```

```python
          输入 a
        +---------> (q_fail)
        |
(q0) ---|
        |
        +--- 输入 b,c,d ---> (q1)
                                 |
                                 | 输入 x ∈ {a,b,c,d}
                                 v
                           +-----------+
                           |           |
                           |  非确定性  |
                           |           |
                           +-----------+
                                 |
             +--------------------------------+
             |                                |
             v                                v
    (q_accept_x) [x 未出现过且为最后一个字符]    (q_fail)
                                              [x 已出现过]
             |                                
             | [否则]
             v                                
          (q1) [保持在 q1]

```



:::



5. [10 Points] Give the state diagram of a NFA with at most six states for the language

$$
L = \{ w \in \{a, b\}^* \mid w \text{ contains an even number of } a's, \text{ or contains exactly two } b's \}
$$



::: details

```python
       'a'         'a'
   +--------+   +--------+
   |        v   v        |
+--+--+    +---+---+    +---+---+
| q0 |--'a'->|  q1  |--'a'->| q0  |
|(初始,接)|       |       |       |
+--+--+    +---+---+    +---+---+
  |          |            |
 'b'        'b'          'b'
  v          v            v
+---+---+    +-----------+
|  q2  |<----------------+
+---+---+    'a' 或 'b' 转移
  |   |
 'b'  'a'
  v    |
+---+---+
|  q3  | (接受状态)
+---+---+
  |
 'b'
  v
+---+---+
|  q4  | (死状态)
+-------+
```

```python
(q0) --a--> (q1) --a--> (q2) --a--> (q1)  (处理偶数个 a 的路径)
  |                         |  
  b                         b  
  v                         v  
(q4) --b--> (q5)            (q2)  (处理恰好两个 b 的路径)
```



:::

6. [15 Points] Let $\sum = \{0, 1\}$ and consider the languages $L_1 = \{ w \in Σ^* \mid w \text{ has length at most 5} \}$
and $L_2 = \{ w \in Σ^* \mid w = \varepsilon \text{ or every even position of } w \text{ is a 1} \}$.

(a) Draw the state diagram of a DFA for $L_1$.

(b) Draw the state diagram of a DFA for $L_2$.

(c) Draw the state diagram of a NFA for $L_1 \circ L_2$.

::: details

a. 

```python
(q0) --0,1--> (q1) --0,1--> (q2) --0,1--> (q3) --0,1--> (q4) --0,1--> (q5)
                               |
                               v
                            (qrej)
```

b. 

```python
(q0) --0--> (qrej)
  |            |
  1            0,1
  |            |
 (q1) --0,1--> (q0)
```

c.

```python
(q0) --0,1--> (q1) --0,1--> (q2) --0,1--> (q3) --0,1--> (q4) --0,1--> (q5)
                               |
                               v
                            (qrej)
                               |
                            (q0_L2) --0--> (qrej_L2)
                              |            
                              1            
                              |            
                            (q1_L2) --0,1--> (q0_L2)
```



:::

7. [8 Points] Let $L = \{ w \in \{0,1\}^* \mid w \text{ contains at least two 0's and at most one 1} \}$.

(a) Give the state diagram of a DFA for $L$.

(b) Use the method from Lecture 10 to construct the state diagram of a NFA for $L^*$.

::: details

```python
q0 --0--> q1 --0--> q3 (接受状态)
 |         |         |
1|         1|        1|
 v         v         v
q2 --0--> q4 (接受状态)
 |         |
1|         1|
 v         v
q5         q5

q3 --0--> q3
 |         
1|         
 v         
q4         

q4 --0--> q4
 |
1|
 v
q5

q2 --1--> q5
```

```python
(q0) --0--> (q1) --0--> (q2) --0--> (q2)
  |             |            |
  1             1            |
  v             v            |
(q3)         (q3)           ε
                         ^   |
                         |---|
```



:::



8. [11 Points] Use the subset method from Lecture 9 to convert the following nondeterministic finite automata to equivalent deterministic finite automata.

![](https://blog.images.bornforthis.cn/docs-images/sha256/9b/9b8cd526c5c8db6cebcab1134b22bb53ca9293c4bfcf90ada34cfe31008f5369.png)

::: details

(a) NFA 转换为 DFA

图 (a) 的 NFA 概述：

- 状态集合：$\{1, 2\}$
- 字母表：$\{a, b\}$
- 初始状态：1
- 接受状态：1
- 转换规则：
  - 从状态 1 通过 $a$ 回到状态 1。
  - 从状态 1 通过 $b$ 转到状态 2。
  - 从状态 2 通过 $a$ 或 $b$ 回到状态 2。

子集构造法步骤：

1. **初始状态的 ε-闭包**：
   
   - 初始状态是 \(1\)，因为没有 ε-转换，初始状态的 ε-闭包为 $\{1\}$。
   - 因此，DFA 的初始状态为 $\{1\}$。
   
2. **从状态 $\{1\}$ 的转换**：
   
   - 对输入 $a$：从状态 1 经过 $a$ 转换回自身，即 $\delta(\{1\}, a) = \{1\}$。
   - 对输入 $b$：从状态 1 经过 $b$ 转换到状态 2，即 $\delta(\{1\}, b) = \{2\}$。
   
3. **从状态 $\{2\}$ 的转换**：
   
   - 对输入 $a$：从状态 2 经过 $a$ 回到状态 2，即 $\delta(\{2\}, a) = \{2\}$。
   - 对输入 $b$：从状态 2 经过 \(b\) 也回到状态 2，即 $\delta(\{2\}, b) = \{2\}$。
   
4. **接受状态**：
   - NFA 的接受状态是 $1$，因此 DFA 中包含状态 $1$ 的集合也是接受状态。
   - DFA 的接受状态为 $\{1\}$。

5. **最终的 DFA 状态转换表**：
   | 状态    | 输入 $a$ | 输入 $b$ |
   | ------- | -------- | -------- |
   | $\{1\}$ | $\{1\}$  | $\{2\}$  |
   | $\{2\}$ | $\{2\}$  | $\{2\}$  |

6. **DFA 状态图**：
```python
(q1) --a--> (q1)
  |          |
  b          b
  v          v
(q2) <------ (q2)
```

- $q_1$ 是初始状态也是接受状态，$q_2$ 不是接受状态。

---

 (b) NFA 转换为 DFA

图 (b) 的 NFA 概述：

- 状态集合：$\{1, 2, 3\}$
- 字母表：$\{a, b\}$
- 初始状态：1
- 接受状态：2
- 转换规则：
  - 从状态 1 通过 ε 转换到状态 2。
  - 从状态 1 通过 $a$ 转换到状态 3。
  - 从状态 2 通过 $a$ 转换到状态 3，并通过 ε 转换回状态 1。
  - 从状态 3 通过 $b$ 返回自身。

子集构造法步骤：

1. **初始状态的 ε-闭包**：
   - 从状态 $1$ 可以通过 ε 转换到状态 $2$，因此 ε-闭包为 $\{1, 2\}$。
   - 因此，DFA 的初始状态为 $\{1, 2\}$。

2. **从状态 $\{1, 2\}$ 的转换**：
   
   - 对输入 $a$：从状态 1 和 2 都可以通过 $a$ 转到状态 3，因此 $\delta(\{1, 2\}, a) = \{3\}$。
   - 对输入 $b$：状态 1 和 2 没有经过 $b$ 的转换，因此 $\delta(\{1, 2\}, b) = \emptyset$。
   
3. **从状态 $\{3\}$ 的转换**：
   
   - 对输入 $a$：状态 3 没有经过 $a$ 的转换，因此 $\delta(\{3\}, a) = \emptyset$。
   - 对输入 $b$：状态 3 通过 $b$ 转换回自身，因此 $\delta(\{3\}, b) = \{3\}$。
   
4. **从状态 $\emptyset$ 的转换**：
   
   - 从空状态 $\emptyset$ 对任意输入都没有转换，因此它会保持在 $\emptyset$ 状态。
   
5. **接受状态**：
   - NFA 的接受状态是 $2$，因此任何包含 $2$ 的集合是 DFA 的接受状态。
   - DFA 的接受状态为 $\{1, 2\}$。

6. **最终的 DFA 状态转换表**：
   | 状态        | 输入 $a$    | 输入 $b$    |
   | ----------- | ----------- | ----------- |
   | $\{1, 2\}$  | $\{3\}$     | $\emptyset$ |
   | $\{3\}$     | $\emptyset$ | $\{3\}$     |
   | $\emptyset$ | $\emptyset$ | $\emptyset$ |

7. **DFA 状态图**：
```python
(q0) --a--> (q3)
  |          |
  b          b
  v          v
(qrej) <--- (q3)
```

- $q_0$ ($\{1, 2\}$) 是初始状态也是接受状态。
- $q_3$ 是状态 3，对 $b$ 有自环。
- $q_{rej}$ 是空状态，不接受任何输入。

:::



9. [18 Points] For each of the following statements, state whether it is true or false. Explain.

(a) $baa \in a^*b^*a^*b^*$

(b) $a^* \cup b^* = (a \cup b)^*$

(c) $(a^*b^*)^* = (a \cup b)^*$

(d) $b^*a^* \cap a^*b^* = a^* \cup b^*$

(e) $a^*b^* \cap c^*d^* = \emptyset$

(f) $abcd \in (a(cd)^*b)^*$

::: details

(a) **真**。

解释：字符串 `baa` 可以分解为：

- 第一个 `a^*`：空（`''`）
- 第一个 `b^*`：`b`
- 第二个 `a^*`：`aa`
- 第二个 `b^*`：空（`''`）

因此，`baa` 属于正则表达式 `a^*b^*a^*b^*`。

---

(b) **假**。

解释：`a^* \cup b^*` 表示只包含 `a` 或只包含 `b` 的所有字符串（包括空串）。而 `(a \cup b)^*` 表示由 `a` 和 `b` 构成的任意字符串（包括空串）。例如，字符串 `ab` 属于 `(a \cup b)^*`，但不属于 `a^* \cup b^*`。因此，两者不相等。

---

(c) ~~**真**~~ false

~~解释：`(a^*b^*)^*` 表示由零个或多个形如 `a^*b^*` 的字符串连接而成的字符串集。由于每个 `a^*b^*` 可以生成任何由 `a` 和 `b` 构成的字符串（通过选择适当数量的 `a` 和 `b`），因此 `(a^*b^*)^*` 等价于 `(a \cup b)^*`。~~

---

(d) **真**。

解释：`b^*a^*` 和 `a^*b^*` 的交集只包含仅由 `a` 构成的字符串、仅由 `b` 构成的字符串和空串，即 `a^* \cup b^*`。因为其他字符串的字符顺序无法同时满足这两个正则表达式的要求。

---

(e) **假**。

解释：虽然 `a^*b^*` 和 `c^*d^*` 使用了不同的字符集，但空串属于这两个正则表达式的语言。因此，它们的交集至少包含空串，不是空集。

---

(f) **假**。

解释：`(a(cd)^*b)^*` 中的基本单元是以 `a` 开头、零个或多个 `cd`、以 `b` 结尾的字符串的重复。`abcd` 无法由这种结构的字符串通过连接得到，因此 `abcd` 不属于该正则表达式描述的语言。

:::

10. [8 Points] Let $\Sigma = \{a, b\}$. Write regular expressions for the languages

(a) All strings in $\Sigma^*$ with no more than three $a$'s.

(b) All strings in $\Sigma^*$ with a number of $a$'s divisible by 3.

::: details

(a) 正则表达式：

```plaintext
(b)* (a (b)*)? (a (b)*)? (a (b)*)?
```

解释：字符串可以包含0到3个`a`，每个`a`前后可以有任意多个`b`。

---

(b) 正则表达式：

```plaintext
((b)* a (b)* a (b)* a (b)*)* (b)*
```

解释：每组包含三个`a`，每个`a`前后可以有任意多个`b`，整个模式可以重复任意次（包括0次），最后可能再跟任意多个`b`。

:::





11. [5 Points] Tint. *(Submission is separate from the other problems.)* Let

$$
\Sigma = \left\{
\begin{bmatrix} 0 \\ 0 \end{bmatrix},
\begin{bmatrix} 0 \\ 1 \end{bmatrix},
\begin{bmatrix} 1 \\ 0 \end{bmatrix},
\begin{bmatrix} 1 \\ 1 \end{bmatrix}
\right\}
$$



A string of symbols from $\Sigma$ defines two rows of 0s and 1s. Consider each row to be a binary number and let

$$
D = \{ w \in \Sigma^+ \mid \text{the top row of } w \text{ is a smaller number than the bottom row} \}
$$


For example,

$$
\begin{bmatrix} 0 \\ 0 \end{bmatrix}
\begin{bmatrix} 0 \\ 1 \end{bmatrix}
\begin{bmatrix} 1 \\ 0 \end{bmatrix}
\begin{bmatrix} 1 \\ 0 \end{bmatrix}
\in D
$$


because, as binary numbers, 0011 < 0100.

Construct a finite automaton that accepts \( D \). Note that, due to the linearity of symbols in tint, the columns above have to be represented by strings of length 2. That is, $\Sigma = \{00, 01, 10, 11\}$. And "00 01 10 10"  $\in D$ because, as binary numbers, 0011 < 0100.

::: details



:::

12. [0 Point] **Do not submit.** Exercise 1.7(af) page 84. The solution is in the book page 96, this is for practice only.



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

