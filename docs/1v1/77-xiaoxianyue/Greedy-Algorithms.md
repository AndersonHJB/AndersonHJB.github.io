---
title: Greedy Algorithms
date: 2024-11-01 10:18:10
author: AI悦创
isOriginal: true
icon: python
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

## 1. Scheduling

### 1.1 Scheduling problem

| i     | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   |
| ----- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| $s_i$ | 2    | 4    | 1    | 6    | 4    | 6    | 7    | 9    | 9    | 3    | 13   |
| $f_i$ | 5    | 6    | 7    | 9    | 9    | 10   | 11   | 12   | 13   | 14   | 15   |

- We can only perform one activity after another has finished
- What is the maximum number of activities that can be completed? 
- Note that activities are sorted according to finish times (earliest first)

::: code-tabs

@tab Code1

```python
# 活动的开始时间和结束时间
s = [2, 4, 1, 6, 4, 6, 7, 9, 9, 3, 13]
f = [5, 6, 7, 9, 9, 10, 11, 12, 13, 14, 15]

# 初始化
count = 1  # 选择第一个活动
last_finish_time = f[0]  # 第一个活动的结束时间

# 迭代后续活动
for i in range(1, len(s)):
    if s[i] >= last_finish_time:  # 检查活动是否可以选择
        count += 1
        last_finish_time = f[i]  # 更新已选择活动的结束时间

print("最多可以完成的活动数量:", count)
```

@tab Code2

```python
# 活动的开始时间和结束时间
s = [2, 4, 1, 6, 4, 6, 7, 9, 9, 3, 13]
f = [5, 6, 7, 9, 9, 10, 11, 12, 13, 14, 15]

# 初始化
count = 1  # 选择第一个活动
last_finish_time = f[0]  # 第一个活动的结束时间

# 输出第一个被选择的活动
print(f"选择活动 1: 开始时间={s[0]}, 结束时间={f[0]}")

# 迭代后续活动
for i in range(1, len(s)):
    if s[i] >= last_finish_time:  # 检查活动是否可以选择
        count += 1
        print(f"选择活动 {i+1}: 开始时间={s[i]}, 结束时间={f[i]}")
        last_finish_time = f[i]  # 更新已选择活动的结束时间

print("最多可以完成的活动数量:", count)
```

:::

### 1.2 Greedy scheduler: pseudocode

```python
activities ← [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] 		// activity numbers
start_times ← [2, 4, 1, 6, 4, 6, 7, 9, 9, 3, 13]		// start times
finish_times ← [5, 6, 7, 9, 9, 10, 11, 12, 13, 14, 15]	// end times

GREEDY-ACTIVITY-SELECTOR(a, s, f)
	n ← LENGTH a
	solution ← []
	solution ← solution + a[0]				// add first activity to solution
	k ← 1							// counter
	FOR m ← 2 TO n					// iterate from 2 to length a
		IF s[m] >=  f[k]				// if start time of lower activity is greater than
 										//or equal to end time of higher activity
			solution ← solution + a[m] 	// add lower activity to solution 
			k ← m							
	RETURN solution

GREEDY-ACTIVITY-SELECTOR(activities, start_times, finish_times)		// call
```

代码实现：

::: code-tabs

@tab Code1

```python
activities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] 				# input lists		
start_times = [2, 4, 1, 6, 4, 6, 7, 9, 9, 3, 13]			
finish_times = [5, 6, 7, 9, 9, 10, 11, 12, 13, 14, 15]	

def GREEDY_ACTIVITY_SELECTOR(a, s, f):
    n = len(a)
    solution = []
    solution.append(a[0])							
    k = 1									
    for m in range(2, n):						
        if s[m] >=  f[k]:	             	# if start time of lower activity is 											# greater than end time of higher activity    
            solution.append(a[m])        	# append lower activity	 to solution		 
            k = m						# set k to index of lower activity		return solution					# return solution when done

print(GREEDY_ACTIVITY_SELECTOR(activities, start_times, finish_times))	#call
```

@tab Code2

```python
def greedy_activity_selector(activities, start_times, finish_times):
    """
    根据活动的开始时间和结束时间，使用贪心算法选择最大数量的互不冲突的活动。
    
    参数:
    activities (list): 活动编号的列表。
    start_times (list): 每个活动的开始时间列表，与活动编号对应。
    finish_times (list): 每个活动的结束时间列表，与活动编号对应。

    返回:
    list: 被选择的活动编号列表，按选择顺序排列。
    """
    
    n = len(activities)  # 获取活动的数量
    solution = [activities[0]]  # 初始化解集，先将第一个活动添加进解集
    k = 0  # 记录当前选择的活动的索引，初始化为第一个活动

    # 从第二个活动（索引1）开始遍历，逐个检查每个活动
    for m in range(1, n):
        # 检查当前活动的开始时间是否在上一个选择的活动结束之后
        # 如果满足条件，则当前活动可以选择
        if start_times[m] >= finish_times[k]:
            solution.append(activities[m])  # 将当前活动添加到解集中
            k = m  # 更新 k 为当前选择的活动索引，作为下次选择的基础

    return solution  # 返回最终选择的活动列表

# 定义活动编号、每个活动的开始时间和结束时间
activities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
start_times = [2, 4, 1, 6, 4, 6, 7, 9, 9, 3, 13]
finish_times = [5, 6, 7, 9, 9, 10, 11, 12, 13, 14, 15]

# 调用贪心活动选择器函数，计算并输出被选择的活动列表
selected_activities = greedy_activity_selector(activities, start_times, finish_times)
print("被选择的活动:", selected_activities)  # 输出被选择的活动编号
```

:::

### 1.3 Optimal Greedy Algorithms

- Some greedy solutions are optimal

- A globally optimal solution can be arrived at by making a locally optimal (greedy) choice
    - Make whatever choice seems best at the moment 
    - The choice made by a greedy algorithm may depend on choices so far, but it cannot depend on any future choices

- We must show that a greedy choice at each step yields a globally optimal solution

- True for:
    - Dijkstra’s algorithm
    - Greedy scheduler

## 2. Knapsack Problem

![](https://blog.images.bornforthis.cn/docs-images/sha256/8c/8c0535a024d1dcd4df1f1c0b8b5647be85b0d560c829b6e07bb3b03fe9947bc0.png)

::: tabs

@tab EN

- A thief robbing a store finds 3 items: 
    - Item 1, 10 lbs, £60
    - Item 2, 20 lbs, £100
    - Item 3, 30 lbs, £120

- The thief wants to take as valuable load as possible but he can carry at most 50 lbs in his knapsack.
- Which items should he take?

@tab ZH

1. **物品列表**：
    - 物品 1：10 磅，价值 £60
    - 物品 2：20 磅，价值 £100
    - 物品 3：30 磅，价值 £120
2. **限制**：总重量不能超过 50 磅。
3. **目标**：选择物品使得背包内的总价值最大化。

:::

### 2.1 思路

有多种方法可以解决这个问题，包括**贪心算法**和**动态规划**。

**方法 1：贪心算法（按单位重量价值排序）**

1. 计算每件物品的**单位重量价值**：
    - 物品 1：£60 / 10 磅 = 6
    - 物品 2：£100 / 20 磅 = 5
    - 物品 3：£120 / 30 磅 = 4
2. 按照单位重量价值从高到低排序，优先选择单位价值高的物品。
3. 依次放入背包中，直到达到重量限制。

**选择过程：**

- 选择物品 1（10 磅），当前总重量 = 10 磅，价值 = £60。
- 选择物品 2（20 磅），当前总重量 = 30 磅，价值 = £160。
- 选择物品 3（30 磅）会导致超重，因此不选。

最终选择结果是**物品 1 和物品 2**，总重量为 30 磅，总价值为 £160。

**方法二：动态规划**

对于更复杂的背包问题或当每个物品可以部分选取时，可以使用动态规划。然而，对于这种小规模的 0/1 背包问题，贪心算法已经足够。

**最优解**

根据贪心算法，我们得出最优解是：

- 选择 **物品 1 和物品 2**
- 总价值 **£160**
- 总重量 **30 磅**

```python
# 定义物品的重量和价值
items = [
    {"item": 1, "weight": 10, "value": 60},
    {"item": 2, "weight": 20, "value": 100},
    {"item": 3, "weight": 30, "value": 120}
]

# 定义背包的最大承重
max_weight = 50

# 计算每个物品的单位重量价值并添加到字典中
for item in items:
    item["value_per_weight"] = item["value"] / item["weight"]

# 按单位重量价值从高到低对物品排序
items.sort(key=lambda x: x["value_per_weight"], reverse=True)

# 初始化变量
total_value = 0  # 背包内物品的总价值
current_weight = 0  # 背包内物品的总重量
selected_items = []  # 记录选择的物品

# 贪心选择物品
for item in items:
    # 检查如果加入当前物品，背包是否会超重
    if current_weight + item["weight"] <= max_weight:
        # 如果不超重，则将物品加入背包
        selected_items.append(item["item"])
        current_weight += item["weight"]
        total_value += item["value"]
    else:
        # 如果超重，则跳过此物品
        continue

# 输出结果
print("选择的物品编号:", selected_items)
print("总价值:", total_value)
print("总重量:", current_weight)
```





## 3. greedy max sum

```python
class TreeNode:
    def __init__(self, data, left=None, right=None):
        # 初始化二叉树节点，包含数据data，左子节点left和右子节点right
        self.data = data
        self.left = left
        self.right = right

def greedy_max_sum(root):
    # 定义贪心算法函数，用于在二叉树中找到一个从根节点到叶子节点的最大和路径
    current_node = root  # 当前节点初始化为根节点
    solution = []  # 存储路径的列表
    total_sum = root.data  # 初始化总和为根节点的数据值
    solution.append(root.data)  # 将根节点的数据添加到路径solution中

    # 循环条件：只要当前节点有左子节点或右子节点，继续循环
    while current_node.left is not None or current_node.right is not None:
        # 如果当前节点既有左子节点也有右子节点
        if current_node.left is not None and current_node.right is not None:
            # 比较左子节点和右子节点的数据值
            if current_node.left.data > current_node.right.data:
                # 如果左子节点的值大于右子节点，则选择左子节点
                solution.append(current_node.left.data)  # 将左子节点的值添加到路径solution中
                total_sum += current_node.left.data  # 将左子节点的值累加到总和total_sum中
                current_node = current_node.left  # 当前节点更新为左子节点
            else:
                # 如果右子节点的值大于或等于左子节点，则选择右子节点
                solution.append(current_node.right.data)  # 将右子节点的值添加到路径solution中
                total_sum += current_node.right.data  # 将右子节点的值累加到总和total_sum中
                current_node = current_node.right  # 当前节点更新为右子节点
        # 如果当前节点只有左子节点
        elif current_node.left is not None:
            solution.append(current_node.left.data)  # 将左子节点的值添加到路径solution中
            total_sum += current_node.left.data  # 将左子节点的值累加到总和total_sum中
            current_node = current_node.left  # 当前节点更新为左子节点
        # 如果当前节点只有右子节点
        else:
            solution.append(current_node.right.data)  # 将右子节点的值添加到路径solution中
            total_sum += current_node.right.data  # 将右子节点的值累加到总和total_sum中
            current_node = current_node.right  # 当前节点更新为右子节点

    return solution, total_sum  # 返回路径solution和路径上的总和total_sum
```

上面的代码涉及以下几个知识点：

1. **二叉树（Binary Tree）**：
   - 二叉树是一种树形数据结构，每个节点最多有两个子节点，分别是左子节点和右子节点。代码中的 `TreeNode` 类是二叉树节点的基本结构，每个节点包含数据（`data`）以及左子节点和右子节点的引用。

2. **贪心算法（Greedy Algorithm）**：
   - 贪心算法是一种逐步选择当前最优解的算法，通常用于解决优化问题。在该代码中，`greedy_max_sum` 函数采用贪心策略，从根节点出发，每次在左右子节点中选择值较大的一个，以此构建路径，使得路径上的值之和最大。

3. **树的遍历（Tree Traversal）**：
   - 尽管代码并非完整的树遍历，但它使用了逐步移动节点的方式，类似于树的深度优先遍历（Depth-First Traversal）的一种变形。每次沿着子节点值更大的方向移动，可以视为一种带条件的遍历。

4. **动态规划的思想**（Dynamic Programming - 选择最优路径的思想）：
   - 尽管这段代码并没有使用递归或动态规划，但它隐含了通过选择最大路径和的思想。若将其拓展为更复杂的场景，如任意树结构中的最优路径和，可能涉及动态规划的思想。

5. **算法与数据结构综合应用**：
   - 该代码体现了算法与数据结构的结合使用，将二叉树作为数据结构，利用贪心算法来选择最优路径，符合计算机科学中算法和数据结构结合的典型应用场景。

这个代码适用于计算机科学课程中的**数据结构与算法**模块，尤其是二叉树的应用、路径选择问题和贪心算法的基本实现。

```python
# 测试代码
if __name__ == "__main__":
    # 创建一个测试的二叉树
    root = TreeNode(10)
    root.left = TreeNode(8)
    root.right = TreeNode(15)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(9)
    root.right.left = TreeNode(12)
    root.right.right = TreeNode(20)
    root.right.right.right = TreeNode(25)
    
    # 调用greedy_max_sum函数并输出结果
    path, path_sum = greedy_max_sum(root)
    print("路径:", path)          # 输出最大路径
    print("路径和:", path_sum)    # 输出最大路径和
```

预期输出：假设我们构建的二叉树如下所示：

```python
        10
       /  \
      8   15
     / \  / \
    4  9 12  20
               \
               25
```

根据贪心算法的逻辑，最大路径应该是 `10 -> 15 -> 20 -> 25`，因此预期输出为：

```python
路径: [10, 15, 20, 25]
路径和: 70
```





## 4. Pseudocode: Optimal Max Sum

::: code-tabs

@tab 伪代码

```python
MAX_SUM_ROOT_TO_LEAF(cur_node)
	IF NOT cur_node					// if no current node, quit
		RETURN
	IF cur_node.left IS NONE			// if node.left does not exist
		max_sum_left ← 0			// sum is zero
	ELSE							// else recurse on the left
		max_sum_left ← MAX_SUM_ROOT_TO_LEAF(cur_node.left)
	IF cur_node.right IS NONE			// if node.right does not exist		
		max_sum_right ← 0			// sum is zero
	ELSE							// else recurse on the right
		max_sum_right ← MAX_SUM_ROOT_TO_LEAF (cur_node.right)
	IF max_sum_left > max_sum_right 	// compare left and right sums
								// return the higher value added to current node value
		RETURN max_sum_left + cur_node.data	
	ELSE
		RETURN max_sum_right + cur_node.data
```

@tab Code

```python
class TreeNode:
    def __init__(self, data=0, left=None, right=None):
        # 初始化一个树节点，包含数据（data）、左子节点（left）和右子节点（right）
        self.data = data
        self.left = left
        self.right = right

def max_sum_root_to_leaf(cur_node):
    # 如果当前节点为空，则返回0，表示没有路径可走
    if not cur_node:
        return 0
    
    # 递归计算左子树的最大路径和
    if cur_node.left is None:
        # 如果左子节点不存在，将左侧最大和设为0
        max_sum_left = 0
    else:
        # 如果左子节点存在，则递归调用函数计算左子树的最大路径和
        max_sum_left = max_sum_root_to_leaf(cur_node.left)

    # 递归计算右子树的最大路径和
    if cur_node.right is None:
        # 如果右子节点不存在，将右侧最大和设为0
        max_sum_right = 0
    else:
        # 如果右子节点存在，则递归调用函数计算右子树的最大路径和
        max_sum_right = max_sum_root_to_leaf(cur_node.right)
    
    # 比较左右子树的最大路径和，选择其中较大的值并加上当前节点的值
    if max_sum_left > max_sum_right:
        # 如果左子树的路径和较大，返回左子树路径和加上当前节点的数据值
        return max_sum_left + cur_node.data
    else:
        # 如果右子树的路径和较大或相等，返回右子树路径和加上当前节点的数据值
        return max_sum_right + cur_node.data
```

:::

::: tabs

@tab 1

上面的代码实现了一个递归算法，用于计算**二叉树中从根节点到叶节点的最大路径和**。这个算法遍历二叉树的所有路径，找出从根到叶的路径中具有最大节点值和的路径，并返回该路径的总和。

具体来说，这段代码的实现过程包括以下几点：

1. **定义树节点类 `TreeNode`**：包含每个节点的数据 `data`、左子节点 `left` 和右子节点 `right`。这使得我们能够构建一个二叉树结构。

2. **递归函数 `max_sum_root_to_leaf(cur_node)`**：
   - 这个函数的目标是找到并返回从给定 `cur_node` 到叶节点的最大路径和。
   
3. **处理空节点**：
   - 如果 `cur_node` 为空，即当前节点不存在，则函数返回 `0`。这意味着没有路径或达到叶节点时不再继续计算。
   
4. **递归计算左右子树的最大路径和**：
   - 如果当前节点的左子节点存在，递归调用 `max_sum_root_to_leaf` 计算从左子节点到叶节点的最大路径和。若左子节点不存在，左侧路径和设为 `0`。
   - 同理，对于右子节点，递归计算右子树的最大路径和，或设为 `0`。
   
5. **选择最大路径和**：
   - 比较左右子树的最大路径和，选择其中较大的路径，将该路径和加上当前节点的值 `cur_node.data`。
   
6. **返回结果**：
   - 函数返回包含当前节点的最大路径和，代表从根节点到当前叶节点的最大路径的和。

**应用场景**

这种实现可以用于需要计算路径和的场景，比如决策树中找到最高收益的路径、游戏中的路径选择、树状结构中的最优选择路径等。

**复杂度分析**

- **时间复杂度**：`O(n)`，其中 `n` 是树中节点的数量。每个节点仅访问一次，因此时间复杂度为 `O(n)`。
- **空间复杂度**：`O(h)`，其中 `h` 是树的高度，递归栈的最大深度为树的高度。

@tab 2

这段代码涉及的知识点包括以下几个方面：

1. **二叉树（Binary Tree）**：
   - 代码基于二叉树的数据结构，二叉树是每个节点最多有两个子节点（左子节点和右子节点）的树。
   - 二叉树在许多领域中都有应用，包括表达式解析、搜索、排序、决策树等。

2. **递归（Recursion）**：
   - 递归是一种函数调用自身的编程技术，适用于解决分解为更小子问题的问题。
   - 这里使用递归来遍历二叉树中的每个节点，计算从根节点到每个叶节点的路径和。
   - 理解递归的概念、递归函数的调用栈、递归结束条件和返回值的设计都是关键。

3. **深度优先搜索（Depth-First Search, DFS）**：
   - 代码在计算路径和的过程中实现了深度优先搜索的逻辑，即沿着树的某一分支一直访问到底（到达叶节点）后再返回。
   - 深度优先搜索适合递归实现，用于在树或图中查找所有可能路径中的某些特定路径。

4. **树的遍历（Tree Traversal）**：
   - 二叉树的遍历是基础操作，包括前序、中序、后序、层序等方式。这里的递归遍历可以看作是前序遍历的一种，因为访问顺序是当前节点 -> 左子节点 -> 右子节点。
   - 对树遍历方法的理解有助于设计更高效的树搜索和操作。

5. **递归的基线条件与递归返回**：
   - 递归函数的基线条件是 `if not cur_node: return 0`，即当节点为空时返回0。这种设计确保递归可以正确停止。
   - 在递归过程中，通过计算左右子树的最大路径和后，选择其中较大值加上当前节点的值返回给上一层递归，构成了一种分治策略。

6. **动态规划的思想（Dynamic Programming）**：
   - 虽然没有显式地用动态规划技术，但该问题可以视为具有动态规划性质，因为每次递归都根据子问题（左右子树的路径和）计算出当前问题的解（包括当前节点在内的最大路径和）。
   - 将子问题的解组合来得到更大问题的解是动态规划的基本思想。

7. **算法复杂度分析（Algorithm Complexity Analysis）**：
   - 理解该递归算法的时间和空间复杂度是编程中的重要技能。代码中的每个节点访问一次，因此时间复杂度为 `O(n)`，空间复杂度则与树的高度有关，最差情况下是 `O(n)`（链表状的树）。

**总结**

这段代码的实现需要掌握的数据结构和算法知识点包括二叉树、递归、深度优先搜索、树的遍历、递归的终止条件与返回值、动态规划思想和复杂度分析。掌握这些知识点不仅有助于理解代码的逻辑，也有助于应对类似的递归和树相关的编程问题。

:::



## 5. optimal max root to leaf

::: code-tabs

@tab Code1

```python
class Node:
        
        def __init__(self, data):
                self.data = data
                self.left = None
                self.right = None

        def __repr__(self):
                return str(self.data)

'''
        tries every root to leaf path. only the path which adds up to the sum is correct
'''

result = []

#find path given sum and save result to global variable 'result'
def print_max_sum_tree_path(root, summ):
     
        if summ == 0:
                return True

        if root is None:
                return False


        left = print_max_sum_tree_path(root.left, summ - root.data)
        
        right = print_max_sum_tree_path(root.right, summ - root.data)

        if left or right:
                result.insert(0,root.data)
                
        return left or right                    



def max_sum_root_to_leaf(root):
        if not root:
                return                                                          
        if root.left is None:                                           
                max_sum_left = 0
        else:   
                max_sum_left = max_sum_root_to_leaf(root.left)
        if root.right is None:                                         
                max_sum_right = 0
        else:
                max_sum_right = max_sum_root_to_leaf(root.right)
        if max_sum_left > max_sum_right:
                return max_sum_left + root.data
        else:
                return max_sum_right + root.data


# Find max sum and print
def find_max_sum_and_print(root):
        max_sum = max_sum_root_to_leaf(root)
        print_max_sum_tree_path(root, max_sum)
        print("maximum sum from root to leaf is:", max_sum)

# Driver
if __name__ == '__main__':
        root = Node(1)
        root.left = Node(2)
        root.right = Node(3)
        root.left.left = Node(5)
        root.left.right = Node(7)
        root.right.right = Node(4)


        find_max_sum_and_print(root)
        print('path is:', result)
```

@tab Code2

```python
class Node:
    # 定义一个二叉树节点类

    def __init__(self, data):
        # 初始化节点，接收一个数据参数 data，并将其赋值给当前节点的 data 属性
        # 同时初始化左右子节点为 None
        self.data = data
        self.left = None
        self.right = None

    def __repr__(self):
        # 定义当节点对象被打印或转换为字符串时的表示，返回节点的数据
        return str(self.data)

'''
        尝试每一个从根节点到叶节点的路径，只有路径和等于目标和时才是正确的路径
'''

result = []
# 用于存储符合条件的路径的全局变量

# 查找给定的路径和，并将结果保存到全局变量 'result' 中
def print_max_sum_tree_path(root, summ):
    # 如果目标和为 0，说明已经找到一条路径，返回 True
    if summ == 0:
        return True

    # 如果当前节点为空，返回 False，表示没有找到路径
    if root is None:
        return False

    # 递归调用左子节点，将当前节点的数据值从目标和中减去
    left = print_max_sum_tree_path(root.left, summ - root.data)
    
    # 递归调用右子节点，将当前节点的数据值从目标和中减去
    right = print_max_sum_tree_path(root.right, summ - root.data)

    # 如果左子树或右子树中有满足条件的路径，将当前节点数据插入到路径列表的开头
    if left or right:
        result.insert(0, root.data)
    
    # 返回左或右子树的递归结果，以确定是否存在一条符合条件的路径
    return left or right

# 计算从根节点到叶节点的最大路径和
def max_sum_root_to_leaf(root):
    # 如果当前节点为空，返回 0，表示没有路径
    if not root:
        return

    # 如果当前节点没有左子节点，最大左路径和设为 0
    if root.left is None:
        max_sum_left = 0
    else:
        # 递归计算左子树的最大路径和
        max_sum_left = max_sum_root_to_leaf(root.left)

    # 如果当前节点没有右子节点，最大右路径和设为 0
    if root.right is None:
        max_sum_right = 0
    else:
        # 递归计算右子树的最大路径和
        max_sum_right = max_sum_root_to_leaf(root.right)

    # 比较左、右子树的路径和，返回较大路径和加上当前节点的数据值
    if max_sum_left > max_sum_right:
        return max_sum_left + root.data
    else:
        return max_sum_right + root.data

# 查找并打印最大路径和
def find_max_sum_and_print(root):
    # 调用 max_sum_root_to_leaf 获取最大路径和
    max_sum = max_sum_root_to_leaf(root)
    # 查找并保存符合最大路径和的路径
    print_max_sum_tree_path(root, max_sum)
    # 打印最大路径和
    print("maximum sum from root to leaf is:", max_sum)

# 驱动代码
if __name__ == '__main__':
    # 构建一个示例二叉树
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(5)
    root.left.right = Node(7)
    root.right.right = Node(4)

    # 查找并打印最大路径和以及路径
    find_max_sum_and_print(root)
    print('path is:', result)
```



:::










































::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

C:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)