---
title: pandas 数据处理
date: 2024-07-02 18:30:59
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

## 1. 对所有文件列名重新命名

::: tabs

@tab 教学

在 Python的 Pandas 库中，修改 DataFrame 的列名可以通过几种方法实现。这里将介绍一些常用的方法：

1. **使用 `.rename()` 方法**：

   `.rename()`方法可以用于修改指定的一个或多个列名。它非常灵活，允许你指定要更改的列名的映射。

   ```python
   import pandas as pd
   
   df = pd.DataFrame({
       'A': [1, 2, 3],
       'B': [4, 5, 6]
   })
   
   # 将'A'列名改为'X'，'B'列名改为'Y'
   df.rename(columns={'A': 'X', 'B': 'Y'}, inplace=True)
   print(df)
   ```

2. **直接设置 `.columns` 属性**：

   如果你想要更改所有的列名，可以直接设置 `.columns` 属性。这种方法适合于已知所有新列名时使用。

   ```python
   import pandas as pd
   
   df = pd.DataFrame({
       'A': [1, 2, 3],
       'B': [4, 5, 6]
   })
   
   # 修改所有列名
   df.columns = ['X', 'Y']
   print(df)
   ```

3. **使用列表推导式**：

   如果要对所有列名进行某种格式化或添加前缀/后缀，列表推导式是一个便捷的选择。

   ```python
   import pandas as pd
   
   df = pd.DataFrame({
       'A': [1, 2, 3],
       'B': [4, 5, 6]
   })
   
   # 为所有列名添加前缀
   df.columns = ['col_' + col for col in df.columns]
   print(df)
   ```

每种方法都有其适用的场景，可以根据具体需求来选择使用。

@tab 修改后如何保存

在 Python 中，使用 `pandas` 库处理完 Excel 文件（如修改列名）后，我们可以选择覆盖原有文件或另存为新文件。这通常通过使用 `pandas` 的 `to_excel()` 函数来实现。以下是如何进行这两种保存方式的详细步骤：

### 1. 覆盖保存到原文件

如果你想要将更改保存回原来的 Excel 文件，直接指定原文件的路径即可。这将覆盖原文件中的数据。

```python
import pandas as pd

# 加载Excel文件
df = pd.read_excel('original.xlsx')

# 修改列名
df.columns = ['新列名1', '新列名2', '新列名3']

# 覆盖保存到原文件
df.to_excel('original.xlsx', index=False)  # index=False表示不保存索引列
```

### 2. 另存为新文件

如果你不想覆盖原始文件，可以将修改后的 DataFrame 保存为一个新的 Excel 文件。

```python
import pandas as pd

# 加载Excel文件
df = pd.read_excel('original.xlsx')

# 修改列名
df.columns = ['新列名1', '新列名2', '新列名3']

# 另存为新文件
df.to_excel('new_file.xlsx', index=False)  # index=False表示不保存索引列
```

### 3. 注意事项

- **引擎选择**：默认情况下，`pandas` 使用 `openpyxl` 作为 Excel 文件的写入引擎。如果你正在处理 `.xls` 格式的文件，则需要安装 `xlwt` 库，并指定引擎为 `xlwt`。对于 `.xlsx` 文件，建议安装 `openpyxl` 库。
  
- **保存格式**：确保保存文件的格式与你的文件类型相匹配（例如，`.xlsx` 或 `.xls` ）。

- **安全性**：覆盖原始文件可能会导致数据丢失，所以在执行此操作前最好备份原始文件。

通过这些步骤，可以轻松地在 `pandas` 中修改并保存 Excel 文件。

@tab 实操

1. **确定要操作的所有列名**

```python
```





:::







欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)
