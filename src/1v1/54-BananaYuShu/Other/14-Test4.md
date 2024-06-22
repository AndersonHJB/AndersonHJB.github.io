---
title: Online test on C/C++
date: 2024-02-16 18:11:47
author: AI悦创
isOriginal: true
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

This online test covers the material from weeks 14-16.

Question 1 (2 marks). Download the starter code `marks_q1.cpp`. This code con- tains an array of exam marks for some 4th year Physics course. Compile and run the code. The marks should be displayed on the screen. Now modify `marks_q1.cpp` so it finds and prints the highest and lowest mark for the course.

```cpp
// Starter code for Question 1 of the online test
// g++ marks_q1.cpp -o marks_q1
// ./marks_q1

#include <iostream>

int main() 
{
  const int NumStudents = 36; // Number of students on the course 
  // List of exam marks for a 4th year Physics course:
  float marks[] = {65,68,58,67,60,77,53,53,56,42,60,69,70,69,83,62,57,63,90,54,62,58,77,57,59,54,61,51,38,72,71,46,27,48,52,71};
    
  std::cout << "Marks (" << NumStudents << "):" << std::endl;
  for (int i=0;i<NumStudents;i++) std::cout << marks[i] << std::endl; // Display the marks

  // --- YOUR CODE HERE ---
  // Q1 Find the min and max marks
  // Q2 Compute the average and standard deviation
  // Display the results

  return EXIT_SUCCESS;
}
```

::: details Answer

```cpp
// Starter code for Question 1 of the online test
// g++ marks_q1.cpp -o marks_q1
// ./marks_q1

#include <iostream>
#include <cmath>

int main() {
    const int NumStudents = 36; // Number of students on the course
    // List of exam marks for a 4th year Physics course:
    float marks[] = {65, 68, 58, 67, 60, 77, 53, 53, 56, 42, 60, 69, 70, 69, 83, 62, 57, 63, 90, 54, 62, 58, 77, 57, 59,
                     54, 61, 51, 38, 72, 71, 46, 27, 48, 52, 71};

    std::cout << "Marks (" << NumStudents << "):" << std::endl;
    for (int i = 0; i < NumStudents; i++) std::cout << marks[i] << std::endl; // Display the marks

    // --- YOUR CODE HERE ---
    // Q1 Find the min and max marks
    float maxMark = marks[0];
    float minMark = marks[0];

    for (int i = 1; i < NumStudents; ++i) {
        if (marks[i] > maxMark) maxMark = marks[i];
        if (marks[i] < minMark) minMark = marks[i];
    }
    std::cout << "Highest Mark: " << maxMark << std::endl;
    std::cout << "Lowest Mark: " << minMark << std::endl;
    // Q2 Compute the average and standard deviation
    // Display the results

    return EXIT_SUCCESS;
}
```



:::

Question 2 (3 marks). Copy `marks_q1.cpp` to a new file `marks_q2.cpp`. Now add new functionality by also computing the average mark 

$\langle M \rangle = \frac{1}{n} \sum_{i} M_i,$

and the standard deviation $\sigma$ which is the square-root of the variance 

$\sigma^2 = \frac{1}{n} \sum_i (M_i - \langle M \rangle)^2$

where $M_i$ is the ith mark of the set of $n$​​ marks. Display both results to one decimal place.

::: details Answer

```cpp
// Starter code for Question 1 of the online test
// g++ marks_q1.cpp -o marks_q1
// ./marks_q1

#include <iostream>
#include <cmath>
#include <iomanip> // Include for std::setprecision

int main() {
    const int NumStudents = 36; // Number of students on the course
    // List of exam marks for a 4th year Physics course:
    float marks[] = {65, 68, 58, 67, 60, 77, 53, 53, 56, 42, 60, 69, 70, 69, 83, 62, 57, 63, 90, 54, 62, 58, 77, 57, 59,
                     54, 61, 51, 38, 72, 71, 46, 27, 48, 52, 71};

    std::cout << "Marks (" << NumStudents << "):" << std::endl;
    for (int i = 0; i < NumStudents; i++) std::cout << marks[i] << " "; // Display the marks
    std::cout << std::endl;

    // --- YOUR CODE HERE ---
    // Q2 Compute the average and standard deviation
    float sum = 0, mean, standardDeviation = 0;
    for (int i = 0; i < NumStudents; ++i) {
        sum += marks[i];
    }
    mean = sum / NumStudents;

    for (int i = 0; i < NumStudents; ++i) {
        standardDeviation += pow(marks[i] - mean, 2);
    }
    standardDeviation = sqrt(standardDeviation / NumStudents);
    // Display the results
    std::cout << "Average Mark: " << std::fixed << std::setprecision(1) << mean << std::endl;
    std::cout << "Standard Deviation: " << std::fixed << std::setprecision(1) << standardDeviation << std::endl;
    return EXIT_SUCCESS;
}
```



:::

Question 3 (3 marks). Download the starter code `marks_q3.cpp`. This is iden- tical to `marks_q1.cpp` except that it also includes declarations for a function `min_max()` that computes the min/max marks and `avg_std()` which computes the average/standard deviation of the marks. Use your answers to questions 1 and 2 to help write the implementations of these functions in `marks_q3.cpp`. Compile and run the code to check it produces identical results to earlier.

```cpp
// Starter code for Question 3 of the online test
// g++ marks_q3.cpp -o marks_q3
// ./marks_q3

#include <iostream>

void min_max(float marks[], int n, float& min, float& max); // Defines min and max as being pass by reference
void avg_std(float marks[], int n, float& avg, float& std); // Defines avg and std as being pass by reference

int main() 
{
  const int NumStudents = 36; // Number of students on the course 
  // List of exam marks for a 4th year Physics course:
  float marks[] = {65,68,58,67,60,77,53,53,56,42,60,69,70,69,83,62,57,63,90,54,62,58,77,57,59,54,61,51,38,72,71,46,27,48,52,71};
    
  std::cout << "Marks (" << NumStudents << "):" << std::endl;
  for (int i=0;i<NumStudents;i++) std::cout << marks[i] << std::endl; // Display the marks

  // --- YOUR CODE HERE ---
  // Call min_max() and avg_std() and display the results.

  return EXIT_SUCCESS;
}

// --- YOUR CODE HERE ---
// Write the implementation of min_max() and avg_std() here:
```

::: details Answer

```cpp
// Starter code for Question 3 of the online test
// g++ marks_q3.cpp -o marks_q3
// ./marks_q3

#include <iostream>
#include <cmath>

void min_max(float marks[], int n, float &min, float &max); // Defines min and max as being pass by reference
void avg_std(float marks[], int n, float &avg, float &std); // Defines avg and std as being pass by reference

int main() {
    const int NumStudents = 36; // Number of students on the course
    // List of exam marks for a 4th year Physics course:
    float marks[] = {65, 68, 58, 67, 60, 77, 53, 53, 56, 42, 60, 69, 70, 69, 83, 62, 57, 63, 90, 54, 62, 58, 77, 57, 59,
                     54, 61, 51, 38, 72, 71, 46, 27, 48, 52, 71};

    std::cout << "Marks (" << NumStudents << "):" << std::endl;
    for (int i = 0; i < NumStudents; i++) std::cout << marks[i] << std::endl; // Display the marks

    // --- YOUR CODE HERE ---
    // Call min_max() and avg_std() and display the results.
    float min, max, avg, stdDev;
    min_max(marks, NumStudents, min, max);
    avg_std(marks, NumStudents, avg, stdDev);

    std::cout << "Min Mark: " << min << ", Max Mark: " << max << std::endl;
    std::cout << "Average Mark: " << avg << ", Standard Deviation: " << stdDev << std::endl;
    return EXIT_SUCCESS;
}

// --- YOUR CODE HERE ---
// Write the implementation of min_max() and avg_std() here:
void min_max(float marks[], int n, float &min, float &max) {
    min = marks[0];
    max = marks[0];
    for (int i = 1; i < n; ++i) {
        if (marks[i] > max) max = marks[i];
        if (marks[i] < min) min = marks[i];
    }
}

void avg_std(float marks[], int n, float &avg, float &std) {
    float sum = 0, variance = 0;
    for (int i = 0; i < n; ++i) {
        sum += marks[i];
    }
    avg = sum / n;
    for (int i = 0; i < n; ++i) {
        variance += pow(marks[i] - avg, 2);
    }
    std = sqrt(variance / n);
}
```



:::

Question 4 (2 marks). Download the starter code `swap_q4.cpp`. This code de- fines a 3 × 3 matrix in an array and computes its transposition. Complete the code by writing the implementation of the swap elements function `swapf()` declared. Compile and run the code to confirm it works.

```cpp
// Starter code for Question 4 of the online test
// g++ swap_q4.cpp -o swap_q4
// ./swap_q4

#include <iostream>

void swapf(float& a, float& b); // Declare the swap function

int main() 
{
  const int n = 3; // Matrix dimension n x n
  float matrix[3][3] = { {1.0, 2.0, 3.0},
                         {4.0, 5.0, 6.0},
                         {7.0, 8.0, 9.0} };

  std::cout << "Before swap\n";
  for (int i=0;i<n;i++)
  {
    for (int j=0;j<n;j++) std::cout << matrix[i][j] << " ";
    std::cout << std::endl;
  }

  // Perform matrix transposition:
  for (int i=0;i<n;i++)
    for (int j=0;j<i;j++) // Only loop over off-diagonal elements
      swapf(matrix[i][j], matrix[j][i]);

  std::cout << "After swap\n";
  for (int i=0;i<n;i++)
  {
    for (int j=0;j<n;j++) std::cout << matrix[i][j] << " ";
    std::cout << std::endl;
  }

  return EXIT_SUCCESS;
}

void swapf(float& a, float& b) 
{
  // --- YOUR CODE HERE ---
}
```



::: details Answer

```cpp
// Starter code for Question 4 of the online test
// g++ swap_q4.cpp -o swap_q4
// ./swap_q4

#include <iostream>

void swapf(float &a, float &b); // Declare the swap function

int main() {
    const int n = 3; // Matrix dimension n x n
    float matrix[3][3] = {{1.0, 2.0, 3.0},
                          {4.0, 5.0, 6.0},
                          {7.0, 8.0, 9.0}};

    std::cout << "Before swap\n";
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) std::cout << matrix[i][j] << " ";
        std::cout << std::endl;
    }

    // Perform matrix transposition:
    for (int i = 0; i < n; i++)
        for (int j = 0; j < i; j++) // Only loop over off-diagonal elements
            swapf(matrix[i][j], matrix[j][i]);

    std::cout << "After swap\n";
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) std::cout << matrix[i][j] << " ";
        std::cout << std::endl;
    }

    return EXIT_SUCCESS;
}

void swapf(float &a, float &b) {
    float temp = a;
    a = b;
    b = temp;
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
