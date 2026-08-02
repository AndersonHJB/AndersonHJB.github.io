---
title: 01-数组练习
date: 2024-11-20 17:49:13
icon: java
author: AI悦创
isOriginal: true
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

## 1. 数组的最大值和最小值

**描述**: 编写一个 Java 方法，接收一个整数数组，返回数组中的最大值和最小值。

**输入示例**: `int[] nums = {3, 5, 1, 9, 2};`

**输出示例**: `Max: 9, Min: 1`

**方法签名**:

```java
public static int[] findMinAndMax(int[] nums);
```

**答案：**

::: code-tabs

@tab Code1

```java
public class ArrayProblems {
    public static void findMaxAndMin(int[] nums) {
        // 初始化最大值和最小值为数组第一个元素
        int max = nums[0];
        int min = nums[0];
        
        // 遍历数组，逐步更新最大值和最小值
        for (int num : nums) {
            if (num > max) {  // 如果当前元素比当前最大值大，更新最大值
                max = num;
            }
            if (num < min) {  // 如果当前元素比当前最小值小，更新最小值
                min = num;
            }
        }
        // 打印结果
        System.out.println("Max: " + max + ", Min: " + min);
    }
    
    public static void main(String[] args) {
        // 测试数组
        int[] nums = {3, 5, 1, 9, 2};
        findMaxAndMin(nums);  // 调用方法
    }
}
```

@tab Code2

```java
public static int[] findMinAndMax(int[] nums) {
    // 初始化最大值和最小值为数组的第一个元素
    int max = nums[0];
    int min = nums[0];

    // 遍历数组
    for (int num : nums) {
        // 如果当前值大于最大值，更新最大值
        if (num > max) {
            max = num;
        }
        // 如果当前值小于最小值，更新最小值
        if (num < min) {
            min = num;
        }
    }
    // 返回最大值和最小值
    return new int[]{min, max};
}
```

@tab Code3

```java
public class ArraySolutions {
    public static int[] findMinAndMax(int[] nums) {
        int min = nums[0]; // 初始化最小值为第一个元素
        int max = nums[0]; // 初始化最大值为第一个元素
        for (int num : nums) { // 遍历数组
            if (num < min) min = num; // 更新最小值
            if (num > max) max = num; // 更新最大值
        }
        return new int[]{min, max}; // 返回包含最小值和最大值的数组
    }

    public static void main(String[] args) {
        int[] nums = {3, 5, 1, 9, 2};
        int[] result = findMinAndMax(nums);
        System.out.println("Min: " + result[0] + ", Max: " + result[1]);
    }
}
```

:::



## 2. 数组的元素之和

**描述**: 编写一个 Java 方法，计算并返回一个整数数组中所有元素的总和。

**输入示例**: `int[] nums = {1, 2, 3, 4, 5};`

**输出示例**: `Sum = 15`

**方法签名**:

```java
public static int calculateSum(int[] nums);
```

**答案：**

```java
public class ArraySum {
    public static void calculateSum(int[] nums) {
        // 初始化总和为0
        int sum = 0;
        
        // 遍历数组并累加每个元素的值
        for (int num : nums) {
            sum += num;
        }
        
        // 打印数组的总和
        System.out.println("Sum: " + sum);
    }
    
    public static void main(String[] args) {
        // 测试数组
        int[] nums = {1, 2, 3, 4, 5};
        calculateSum(nums);  // 调用方法
    }
}
```



## 3. 反转数组

**描述**: 编写一个 Java 方法，将给定的整数数组反转。

**输入示例**: `int[] nums = {1, 2, 3, 4, 5};`

**输出示例**: `Reversed = {5, 4, 3, 2, 1}`

**方法签名**:

```java
public static int[] reverseArray(int[] nums);
```

**答案：**

::: code-tabs

@tab Code1

```java
public static int[] reverseArray(int[] nums) {
    int start = 0, end = nums.length - 1; // 定义双指针
    while (start < end) {
        // 交换两个指针的值
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    return nums; // 返回反转后的数组
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4, 5};
    int[] reversed = reverseArray(nums);
    System.out.println("Reversed: " + Arrays.toString(reversed));
}
```

@tab Code2

```java
public class ReverseArray {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5};
        int[] reversedArray = new int[nums.length];
        int index = 4;

        for (int i = 4; i >= 0; i--) {
            reversedArray[4-i] = nums[i];
        }
        for (int i = 0; i < reversedArray.length; i++) {
            System.out.print(reversedArray[i] + " ");
        }
    }
}
```



:::



## 4. 查找目标元素的索引

**描述**: 编写一个 Java 方法，接收一个整数数组和一个目标值，返回目标值的索引，如果不存在则返回 -1。

**输入示例**: `int[] nums = {1, 3, 5, 7}; int target = 5;`

**输出示例**: `Index = 2`

**方法签名**:

```java
public static int findIndex(int[] nums, int target);
```

**答案：**

```java
public static int findIndex(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) { // 遍历数组
        if (nums[i] == target) return i; // 找到目标值时返回索引
    }
    return -1; // 如果目标值不存在，返回 -1
}

public static void main(String[] args) {
    int[] nums = {1, 3, 5, 7};
    int target = 5;
    System.out.println("Index: " + findIndex(nums, target));
}
```





## 5. 去除数组中的重复值

**描述**: 编写一个 Java 方法，删除数组中的重复值，返回新的数组。

**输入示例**: `int[] nums = {1, 2, 2, 3, 4, 4, 5};`

**输出示例**: `{1, 2, 3, 4, 5}`

**方法签名**:

```java
public static int[] removeDuplicates(int[] nums);
```

**答案：**

```java
public static int[] removeDuplicates(int[] nums) {
    Set<Integer> set = new LinkedHashSet<>(); // 使用有序集合去重
    for (int num : nums) {
        set.add(num); // 自动去重
    }
    return set.stream().mapToInt(Integer::intValue).toArray(); // 转换为数组
}

public static void main(String[] args) {
    int[] nums = {1, 2, 2, 3, 4, 4, 5};
    System.out.println("Unique: " + Arrays.toString(removeDuplicates(nums)));
}
```





## 6. 数组的元素平方

**描述**: 编写一个 Java 方法，返回一个数组，其中每个元素是原数组对应元素的平方值。

**输入示例**: `int[] nums = {1, 2, 3, 4};`

**输出示例**: `{1, 4, 9, 16}`

**方法签名**:

```java
public static int[] squareArray(int[] nums);
```

**答案：**

```java
public static int[] squareArray(int[] nums) {
    int[] squared = new int[nums.length]; // 创建结果数组
    for (int i = 0; i < nums.length; i++) {
        squared[i] = nums[i] * nums[i]; // 计算平方值
    }
    return squared; // 返回结果数组
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4};
    System.out.println("Squared: " + Arrays.toString(squareArray(nums)));
}
```





## 7. 两个数组的交集

**描述**: 编写一个 Java 方法，接收两个数组并返回它们的交集，结果不包含重复值。

**输入示例**: `int[] nums1 = {1, 2, 2, 3}; int[] nums2 = {2, 2, 3, 4};`

**输出示例**: `{2, 3}`

**方法签名**:

```java
public static int[] findIntersection(int[] nums1, int[] nums2);
```

**答案：**

::: code-tabs

@tab Code1

```java
public static int[] findIntersection(int[] nums1, int[] nums2) {
    Set<Integer> set1 = new HashSet<>();
    Set<Integer> intersection = new HashSet<>();
    for (int num : nums1) set1.add(num); // 将第一个数组加入集合
    for (int num : nums2) { // 遍历第二个数组
        if (set1.contains(num)) intersection.add(num); // 取交集
    }
    return intersection.stream().mapToInt(Integer::intValue).toArray(); // 转换为数组
}

public static void main(String[] args) {
    int[] nums1 = {1, 2, 2, 3};
    int[] nums2 = {2, 2, 3, 4};
    System.out.println("Intersection: " + Arrays.toString(findIntersection(nums1, nums2)));
}
```

@tab Code2

```java
import java.util.ArrayList;
import java.util.List;

public class ArraysIntersection {
    public static void main(String[] args) {
        int[] nums1 = {1, 2, 2, 3};
        int[] nums2 = {2, 2, 3, 4};
        List<Integer> intersection = new ArrayList<>();

        for (int i = 0; i < nums1.length; i++) {
            for (int j = 0; j < nums2.length; j++) {
                if (nums1[i] == nums2[j] && !intersection.contains(nums1[i])) {
                    intersection.add(nums1[i]);
                }
            }
        }
        System.out.println(intersection);
    }
}
```



:::



## 8. 数组的左旋

**描述**: 编写一个 Java 方法，将数组中的元素向左旋转 k 个位置。

**输入示例**: `int[] nums = {1, 2, 3, 4, 5}; int k = 2;`

**输出示例**: `{3, 4, 5, 1, 2}`

**方法签名**:

```java
public static int[] leftRotateArray(int[] nums, int k);
```

**答案：**

```java
public static int[] leftRotateArray(int[] nums, int k) {
    k %= nums.length; // 处理旋转次数大于数组长度的情况
    int[] rotated = new int[nums.length];
    for (int i = 0; i < nums.length; i++) {
        rotated[i] = nums[(i + k) % nums.length]; // 计算新位置
    }
    return rotated;
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4, 5};
    int k = 2;
    System.out.println("Rotated: " + Arrays.toString(leftRotateArray(nums, k)));
}
```





## 9. 数组是否有序

**描述**: 编写一个 Java 方法判断数组是否为升序排列。

**输入示例**: `int[] nums = {1, 2, 3, 4, 5};`

**输出示例**: `true`

**方法签名**:

```java
public static boolean isSorted(int[] nums);
```

**答案：**

```java
public static boolean isSorted(int[] nums) {
    for (int i = 1; i < nums.length; i++) { // 遍历数组
        if (nums[i] < nums[i - 1]) return false; // 检查是否降序
    }
    return true; // 如果所有元素都符合升序，返回 true
}

public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4, 5};
    System.out.println("Is Sorted: " + isSorted(nums));
}
```



## 10. 数组的子数组之和最大值

**描述**: 编写一个 Java 方法，找出具有最大和的连续子数组，并返回其和。

**输入示例**: `int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};`

**输出示例**: `6`（子数组 `[4, -1, 2, 1]` 的和）

**方法签名**:

```java
public static int maxSubArraySum(int[] nums);
```

**答案：**

::: code-tabs

@tab Code1

```java
public class MaxSubArraySum {
    public static int maxSubArraySum(int[] nums) {
        // 初始值：全局最大值和当前最大值都设为数组的第一个元素
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        // 从第二个元素开始遍历数组
        for (int i = 1; i < nums.length; i++) {
            // 当前子数组和：选择加上当前元素，或者从当前元素重新开始
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            // 更新全局最大值
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }

    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("最大子数组和: " + maxSubArraySum(nums)); // 输出：6
    }
}
```

@tab Code2

```java
public static int maxSubArraySum(int[] nums) {
    int maxSum = nums[0]; // 初始化最大值
    int currentSum = nums[0]; // 当前子数组和
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]); // 更新当前子数组和
        maxSum = Math.max(maxSum, currentSum); // 更新最大值
    }
    return maxSum;
}

public static void main(String[] args) {
    int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    System.out.println("Max Subarray Sum: " + maxSubArraySum(nums));
}
```

@tab 推荐答案

```java
public class MaxSubArray {
    // 定义方法，输入一个整数数组，返回具有最大和的连续子数组的和
    public static int maxSubArraySum(int[] nums) {
        // 如果输入数组为空或长度为0，返回0（边界条件）
        if (nums == null || nums.length == 0) {
            return 0; // 空数组情况下返回0
        }
        
        // 初始化最大子数组和，初始值设为最小的整数，因为最小值可能是最优解
        int maxSum = Integer.MIN_VALUE;
        
        // 当前子数组的和，初始化为0
        int currentSum = 0;
        
        // 遍历数组中的每个元素
        for (int num : nums) {
            // 判断当前子数组和是否应继续累加当前元素
            // 如果 `currentSum + num` 大于 `num`，说明继续将当前元素加入子数组更合适
            if (currentSum + num > num) {
                currentSum = currentSum + num;  // 累加当前元素到子数组和
            } else {
                currentSum = num;  // 否则，从当前元素重新开始子数组
            }
            
            // 更新最大子数组和
            // 如果当前子数组和 `currentSum` 大于记录的最大子数组和 `maxSum`，就更新 `maxSum`
            if (currentSum > maxSum) {
                maxSum = currentSum;  // 更新最大子数组和
            }
        }
        
        // 返回最大子数组和
        return maxSum;
    }
    
    // 主方法，用于测试
    public static void main(String[] args) {
        // 测试数组
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        
        // 调用 maxSubArraySum 方法，输出结果
        System.out.println(maxSubArraySum(nums)); // 输出 6
    }
}
```

:::





## 11. 统计数组中出现的元素个数

- **描述**：给定一个整数数组，统计每个元素出现的次数。

- **输入**：

    ```java
    int[] arr = {1, 2, 2, 3, 3, 3, 4};
    ```

- **输出**：

    ```java
    1: 1, 2: 2, 3: 3, 4: 1
    ```

    



## 12. 寻找数组中的重复元素

- **描述**：给定一个整数数组，找到数组中所有重复出现的元素。

- **输入**： 

    ```java
    int[] arr = {1, 2, 3, 2, 4, 5, 1};
    ```

- **输出：** 

    ```java
    [1, 2]
    ```

    





## 13. **合并两个已排序数组**

- **描述**：给定两个已排序的数组，将其合并成一个新的已排序数组。

- **输入：** 

    ```java
    int[] arr1 = {1, 3, 5};
    int[] arr2 = {2, 4, 6};
    ```

- **输出：**

    ```java
    [1, 2, 3, 4, 5, 6]
    ```

    



## 14. 数组中的第二大元素

- **描述**：给定一个数组，找出数组中的第二大元素。

- **输入**：

    ```java 
    int[] arr = {10, 20, 4, 45, 99};
    ```

- **输出**：

     ```java
    45
    ```

    

## 15. 数组中的奇偶数分离

- **描述**：给定一个整数数组，将其中的奇数和偶数分开，返回一个新数组，奇数在前，偶数在后。

- **输入**： 

    ```java 
    int[] arr = {1, 2, 3, 4, 5, 6};
    ```

- **输出**：

    ```java 
    [1, 3, 5, 2, 4, 6]
    ```

- **扩展**：如果觉得轻松，你可以尝试：在奇偶分离后，分别对奇偶进行排序，例如原本的数组是无序的！





## 16. 数组旋转

- **描述**：给定一个数组和一个整数 `k`，将数组向右旋转 `k` 个位置。

- **输入**：

    ```java 
    int[] arr = {1, 2, 3, 4, 5};
    int k = 2;
    ```

- **输出**：

    ```java 
    [4, 5, 1, 2, 3]
    ```

    

## 17. 查找数组中的最小差值

- **描述**：给定一个整数数组，求数组中任意两个元素的最小差值。

- **输入**：

    ```java 
    int[] arr = {1, 5, 3, 19, 18, 25};
    ```

- **输出**：

    ```java 
    1
    ```

    

## 18. 数组中连续子数组的最大和

- **描述**：给定一个整数数组，找到其连续子数组的最大和。

- **输入**：

    ```java 
    int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    ```

- **输出**：

    ```java 
    6
    ```

    

## 19. 找出数组中的缺失数字

- **描述**：给定一个包含 1 到 N 的数组，但缺少其中一个数字，找出缺失的数字。

- **输入**：

    ```java 
    int[] arr = {3, 7, 1, 2, 8, 4, 5};
    ```

- **输出**：

    ```java 
    6
    ```



## 20. 找出数组中出现次数超过一半的元素

- **描述**：给定一个数组，找出出现次数超过数组长度一半的元素。

- **输入**：

    ```python
    ```

    



























## 11. 斐波那契数组

创建一个长度为 `n` 的数组，并用循环填充前 `n` 个斐波那契数。



## 12. **数组累积和**
给定一个整数数组，生成一个新数组，其中第 `i` 个元素是原数组从头到第 `i` 个元素的累积和。



## 13. 字符串数组的连接

输入一个字符串数组，将其所有元素连接成一个字符串，中间用指定分隔符（如 `-` 或 `,`）连接。



## 16. 数组排序（冒泡排序）

实现冒泡排序算法，对一个整数数组从小到大排序，输出每一轮排序后的数组状态。



## 17. 数组排序「选择排序」

::: code-tabs

@tab Code1

```java
import java.util.Arrays;

public class SelectionSortWithTwoArrays {
    public static void selectionSort(int[] array) {
        int n = array.length;
        int[] sortedArray = new int[n];  // 用于存储排序后的元素
        boolean[] used = new boolean[n]; // 标记原始数组中的元素是否已使用

        // 遍历原始数组，逐步构建排序数组
        for (int i = 0; i < n; i++) {
            int minIndex = -1;

            // 找到未使用的元素中最小的元素
            for (int j = 0; j < n; j++) {
                if (!used[j] && (minIndex == -1 || array[j] < array[minIndex])) {
                    minIndex = j;
                }
            }

            // 将找到的最小元素放入排序数组
            sortedArray[i] = array[minIndex];
            used[minIndex] = true; // 标记该元素为已使用
        }

        // 将排序后的结果写回原数组
        System.arraycopy(sortedArray, 0, array, 0, n);
    }

    public static void main(String[] args) {
        int[] array = {64, 25, 12, 22, 11};
        System.out.println("排序前的数组: " + Arrays.toString(array));

        selectionSort(array);

        System.out.println("排序后的数组: " + Arrays.toString(array));
    }
}
```

@tab Code2

```java
import java.util.Arrays;

public class SelectionSort {
    public static void selectionSort(int[] array) {
        int n = array.length;

        // 遍历数组的每一个元素
        for (int i = 0; i < n - 1; i++) {
            // 假设当前元素是最小值
            int minIndex = i;

            // 找到未排序部分的最小值
            for (int j = i + 1; j < n; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }

            // 如果最小值不是当前值，则交换
            if (minIndex != i) {
                int temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
            }
        }
    }

    public static void main(String[] args) {
        int[] array = {64, 25, 12, 22, 11};
        System.out.println("排序前的数组: " + Arrays.toString(array));

        selectionSort(array);

        System.out.println("排序后的数组: " + Arrays.toString(array));
    }
}
```



:::



## 18. 猜数字游戏

随机生成一个包含10个元素的数组，提示用户输入一个数字，判断该数字是否在数组中，并输出索引。























欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)

