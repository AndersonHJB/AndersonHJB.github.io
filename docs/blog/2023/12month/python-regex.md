---
title: Python正则表达式专项练习「私教练习」
date: 2023-12-18 20:10:49
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
---

你好，我是悦创。

这里有。20 个关于正则表达式（Regex）的Python编程题目，难度从简单到困难逐渐增加：

## 1. 找到文本中的所有日期 

提取格式为“YYYY-MM-DD”的日期字符串。

```python
text = "重要日期：2023-12-25, 2024-01-01"
dates = # your code here
assert dates == ["2023-12-25", "2024-01-01"]
```

## 2. 验证电子邮件地址  

编写一个正则表达式，验证字符串是否是有效的电子邮件地址。

```python
email = "example@test.com"
is_valid = # your code here
assert is_valid is True
```



## 3. 分割日志文件

给定一个日志文件的字符串，使用正则表达式按日志条目分割它。

```python
log = "INFO:2023-12-17:This is log 1\nERROR:2023-12-18:This is log 2"
entries = # your code here
assert entries == ["INFO:2023-12-17:This is log 1", "ERROR:2023-12-18:This is log 2"]
```

## 4. 匹配电话号码
创建一个正则表达式来匹配不同格式的电话号码，例如“(123) 456-7890”或“123-456-7890”。

```python
phone = "(123) 456-7890"
is_phone = # your code here
assert is_phone is True
```

## 5. 提取 URL

从文本中提取所有 URL，并确定它们是 HTTP 还是 HTTPS。

```python
text = "Visit https://example.com and http://test.org"
urls = # your code here
assert urls == ["https://example.com", "http://test.org"]
```



## 6. 验证密码强度

检查密码是否包含至少8个字符，其中包括大写字母、小写字母、数字和特殊字符。

```python
password = "Aa1!aa11"
is_strong = # your code here
assert is_strong is True
```



## 7. 寻找重复的单词

使用正则表达式找到字符串中重复的单词。

```python
text = "This is a test test text"
duplicate = # your code here
assert duplicate.group() == "test test"
```

## 8. 提取括号内的内容

编写一个正则表达式来提取圆括号 `()` 中的内容。

```python
text = "This is a (sample) text"
content = # your code here
assert content == ["sample"]
```

## 9. 识别货币金额

检测和提取字符串中的货币金额（例如，“$100.00”或“€50”）。

```python
text = "The price is $100.00 or €50"
amounts = # your code here
assert amounts == ["$100.00", "€50"]
```

## 10. 识别时间格式  

提取格式为“HH:MM”或“HH:MM:SS”的时间字符串。

```python
text = "The current time is 14:30:15 or sometimes 09:45"
times = # your code here
assert times == ["14:30:15", "09:45"]
```



## 11. 验证车牌号  

创建一个正则表达式来验证不同格式的车牌号。

```python
plate = "ABC-1234"
is_plate = # your code here
assert is_plate is True
```



## 12. 匹配 IPv4 地址  

写一个正则表达式来匹配有效的 IPv4 地址。

```python
ip = "192.168.1.1"
is_ipv4 = # your code here
assert is_ipv4 is True
```



## 13. 提取 HTML 标签内容  

从 HTML 文本中提取特定标签的内容。

```python
html = "<div>Hello World!</div>"
content = # your code here
assert content == ["Hello World!"]
```



## 14. 匹配 Markdown 链接  

识别并提取 Markdown 格式文本中的链接及其文本。

```python
markdown = "This is a [link](http://example.com)"
link_text = # your code here
assert link_text == [("link", "http://example.com")]
```



## 15. 识别代码注释  

从代码字符串中提取单行和多行注释。

```python
code = "// This is a comment\nint x = 0; /* block comment */"
comments = # your code here
assert comments == ["// This is a comment", "/* block comment */"]
```



## 16. 匹配科学计数法数字  

编写一个正则表达式来匹配科学计数法表示的数字（例如，“1.23e10”）。

```python
number = "1.23e10"
is_scientific = # your code here
assert is_scientific is True
```

## 17. 解析复杂日志格式  

给定复杂的日志条目，使用正则表达式提取关键信息，如时间戳、日志级别和消息。

```python
log = "[2023-12-17 10:00:00, INFO] This is an information."
pattern = # your code here
match = re.search(pattern, log)
assert match.groups() == ("2023-12-17 10:00:00", "INFO", "This is an information.")
```



## 18. 匹配嵌套括号内容  

编写正则表达式来处理并匹配嵌套的圆括号。

```python
text = "This is a (nested (example) text) string"
nested_content = # your code here
assert nested_content == ["(nested (example) text)"]
```



## 19. 验证 XML/HTML 标签结构  

检查字符串是否是正确嵌套和闭合的XML或HTML标签。

```python
html = "<tag>content</tag>"
is_valid_html = # your code here
assert is_valid_html is True
```



## 20. 提取嵌入式语言元素  

例如，从 JavaScript 或 CSS 嵌入在 HTML 中的代码段提取特定的函数或规则。

```python
html = "<style>body { background-color: #fff; }</style>"
style_content = # your code here
assert style_content == ["body { background-color: #fff; }"]
```

每个题目都可以用来练习和提高使用 Python 中的正则表达式的技能。随着题目的进行，问题将变得更复杂，涉及更多高级的正则表达式概念和技巧。

## Solution

1. **找到文本中的所有日期**
   ```python
   text = "重要日期：2023-12-25, 2024-01-01"
   dates = re.findall(r'\d{4}-\d{2}-\d{2}', text)
   assert dates == ["2023-12-25", "2024-01-01"]
   ```

2. **验证电子邮件地址**
   ```python
   email = "example@test.com"
   is_valid = bool(re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email))
   assert is_valid is True
   ```

3. **分割日志文件**
   ```python
   log = "INFO:2023-12-17:This is log 1\nERROR:2023-12-18:This is log 2"
   entries = re.split(r'\n', log)
   assert entries == ["INFO:2023-12-17:This is log 1", "ERROR:2023-12-18:This is log 2"]
   ```

4. **匹配电话号码**
   ```python
   phone = "(123) 456-7890"
   is_phone = bool(re.match(r'\(\d{3}\)\s\d{3}-\d{4}', phone))
   assert is_phone is True
   ```

5. **提取URL**
   ```python
   text = "Visit https://example.com and http://test.org"
   urls = re.findall(r'https?://\S+', text)
   assert urls == ["https://example.com", "http://test.org"]
   ```

6. **验证密码强度**
   ```python
   password = "Aa1!aa11"
   is_strong = bool(re.match(r'(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}', password))
   assert is_strong is True
   ```

7. **寻找重复的单词**
   ```python
   text = "This is a test test text"
   duplicate = re.search(r'\b(\w+)\s+\1\b', text)
   assert duplicate.group() == "test test"
   ```

8. **提取括号内的内容**
   ```python
   text = "This is a (sample) text"
   content = re.findall(r'\((.*?)\)', text)
   assert content == ["sample"]
   ```

9. **识别货币金额**
   ```python
   text = "The price is $100.00 or €50"
   amounts = re.findall(r'[$€]\d+(?:\.\d{2})?', text)
   assert amounts == ["$100.00", "€50"]
   ```

10. **识别时间格式**
    ```python
    text = "The current time is 14:30:15 or sometimes 09:45"
    times = re.findall(r'\b\d{1,2}:\d{2}(?::\d{2})?\b', text)
    assert times == ["14:30:15", "09:45"]
    ```

11. **验证车牌号**
    ```python
    plate = "ABC-1234"
    is_plate = bool(re.match(r'^[A-Z]{3}-\d{4}$', plate))
    assert is_plate is True
    ```

12. **匹配IPv4地址**
    ```python
    ip = "192.168.1.1"
    is_ipv4 = bool(re.match(r'^\d{1,3}(\.\d{1,3}){3}$', ip))
    assert is_ipv4 is True
    ```

13. **提取HTML标签内容**
    ```python
    html = "<div>Hello World!</div>"
    content = re.findall(r'<div>(.*?)</div>', html)
    assert content == ["Hello World!"]
    ```

14. **匹配Markdown链接**
    ```python
    markdown = "This is a [link](http://example.com)"
    link_text = re.findall(r'\[([^\]]+)\]\((http[s]?://\S+)\)', markdown)
    assert link_text == [("link", "http://example.com")]
    ```

15. **识别代码注释**
    ```python
    code = "// This is a comment\nint x = 0; /* block comment */"
    comments = re.findall

(r'//.*?$|/\*.*?\*/', code, re.DOTALL | re.MULTILINE)
    assert comments == ["// This is a comment", "/* block comment */"]
    ```

16. **匹配科学计数法数字**
    ```python
    number = "1.23e10"
    is_scientific = bool(re.match(r'^-?\d+(\.\d+)?e[-+]?\d+$', number))
    assert is_scientific is True
    ```

17. **解析复杂日志格式**
    ```python
    log = "[2023-12-17 10:00:00, INFO] This is an information."
    pattern = r'\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}), (\w+)\] (.+)'
    match = re.search(pattern, log)
    assert match.groups() == ("2023-12-17 10:00:00", "INFO", "This is an information.")
    ```

18. **匹配嵌套括号内容**
    ```python
    text = "This is a (nested (example) text) string"
    nested_content = re.findall(r'\(([^()]|\([^()]*\))*\)', text)
    assert nested_content == ["(nested (example) text)"]
    ```

19. **验证XML/HTML标签结构**
    ```python
    html = "<tag>content</tag>"
    is_valid_html = bool(re.match(r'<([a-z]+)>(.*?)</\1>', html))
    assert is_valid_html is True
    ```

20. **提取嵌入式语言元素**
    ```python
    html = "<style>body { background-color: #fff; }</style>"
    style_content = re.findall(r'<style>(.*?)</style>', html, re.DOTALL)
    assert style_content == ["body { background-color: #fff; }"]
    ```











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
