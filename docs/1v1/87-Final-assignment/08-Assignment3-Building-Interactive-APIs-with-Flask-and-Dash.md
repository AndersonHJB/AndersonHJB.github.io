---
title: 08-Assignment 3： Building Interactive APIs with Flask and Dash
date: 2024-07-07 19:34:38
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

::: tip

经过允许的才会发布在此，也为了宣传。感谢，这些学员的支持。

:::

# 0. 前言

::: tabs

@tab image-1

![](https://blog.images.bornforthis.cn/docs-images/sha256/a7/a71a5866ab47e727d5a3d1641475b94bac0d4c53b43b6baad0be6b259eb0b9d7.png)

`![](./08-Assignment3-Building-Interactive-APIs-with-Flask-and-Dash.assets/image-20240707193857061.png)`

:::

# 1. 题目

Assignment 3: Building Interactive APIs with Flask and Dash

## Overview

Based on the knowledge and skills you have learned from the lectures, readings, and other resources, create the following: 

1. Part One: A Flask app with three routes (routes are defined below)
2. Part Two: A Dash app that displays and graphs the given data.
3. Part Three: A saved Jupyter Notebook file showing the usage of your Flask routes.

**More detailed instructions are in the 'How to Complete the Assignment' section below.**

Half of the marks for this assignment are achieved by showing and explaining your work to your instructor. 

## How to Complete the Assignment:

### Create a Flask app that contains:

1. An **index** route that displays the usage instructions for the other routes in the app.
2. A route called 'convert' that will use the package Pillow to convert an image from one type to another. 
    - This route must use the POST method.
    - The user will provide the image, and the output type of the image.
    - The index route usage instructions should list the available output types for images.
3. Another route, of any name, that uses another Python package to do something.
    - This route does not have to be a POST method.
    - The route should accept some kind of user input.
    - This route should employ a Python package that we have not yet used in class.
    - [This link has a number of interesting Python packages you might want to use.](https://python.plainenglish.io/40-usefull-and-interesting-python-packages-2a38755607fe)
    - [This link is a full listing of all Python packages.](https://pypi.org/)

### Create a Dash app that does the following:

1. Imports one of the data sets from the [The City of Winnipeg Open Data Portal](https://data.winnipeg.ca/)
    - You can use one of their api links, or download and use the data locally (but make sure you include it in your submission if you use it locally, and make sure to use a relative path).
2. Displays the information from the data set as a **Dash Table**.
3. Displays the information from the data set as a **graph**.
    The graph should be an **appropriate type** for the data.
    The graph must **not** be a Histogram.

### Please also submit:

- A saved notebook from Jupyter Notebook that shows usage of the two non-index routes in your Flask app
- There are additional details in chapter 8.5 in the textbook. You can submit a notebook file or html file (below is how to create an html file).



## Supporting Resources for this Assignment

- [https://dash.plotly.com/tutorial](https://dash.plotly.com/tutorial)

- [https://plotly.com/python/](https://plotly.com/python/)

- [https://python.plainenglish.io/40-usefull-and-interesting-python-packages-2a38755607fe](https://python.plainenglish.io/40-usefull-and-interesting-python-packages-2a38755607fe)

## Code link

- [https://github.com/AndersonHJB/BornforthisData/tree/main/1v1/87-Final-assignment/08-Assignment3-Building-Interactive-APIs-with-Flask-and-Dash](https://github.com/AndersonHJB/BornforthisData/tree/main/1v1/87-Final-assignment/08-Assignment3-Building-Interactive-APIs-with-Flask-and-Dash)
- [https://data.winnipeg.ca/Streets/City-of-Winnipeg-LRS/jwfi-vjqw/about_data](https://data.winnipeg.ca/Streets/City-of-Winnipeg-LRS/jwfi-vjqw/about_data)

## 测试

````markdown
要测试上述项目，并确保代码符合你的作业要求，你可以按照以下步骤操作：

### 测试Flask应用

1. **确保Flask服务正在运行**：确保你已经启动了Flask服务（运行`app.py`），并且服务没有报错。
2. **测试API端点**：
   - **首页端点**：在浏览器中访问`http://localhost:5000/`，查看是否显示API使用说明。
   - **图像转换端点**：使用Postman或curl发送POST请求到`http://localhost:5000/convert`，包含图像文件和输出类型。例如，你可以使用curl命令测试：
     ```bash
     curl -F "image=@path_to_your_image.jpg" -F "output_type=png" http://localhost:5000/convert
```
   - **文本分析端点**：使用Postman或curl发送POST请求到`http://localhost:5000/analyze`，包含要分析的文本。例如：
     ```bash
     curl -d "text=I love programming with Python!" http://localhost:5000/analyze
     ```

### 测试Dash应用

1. **运行Dash应用**：确保你已启动Dash应用（运行`dash_app.py`）。
2. **查看数据表和图表**：
   - 打开浏览器，访问`http://localhost:8050/`（或Dash提示的其他地址）。
   - 检查是否能正确显示来自Winnipeg开放数据门户的数据集。
   - 使用下拉菜单选择不同的列，查看图表是否根据所选数据更新。

### 代码的完整性和符合性

你的任务要求创建两个应用和一个Jupyter笔记本文件。你应该检查以下方面是否符合作业要求：

- **Flask应用**：
  - 是否有三个路由（首页、图像转换、文本分析）。
  - 图像转换是否使用POST方法，并且可以处理图像文件和指定输出格式。
  - 文本分析是否使用了一个未在课堂上使用过的Python包（如TextBlob）。

- **Dash应用**：
  - 是否成功导入并使用了一个数据集。
  - 是否在Dash表格中展示了数据。
  - 是否生成了非直方图类型的图表，正确反映了数据的某些特征。

- **Jupyter笔记本**：
  - 是否展示了如何使用Flask应用的各个端点。

确保所有这些组件都能正常运行，并符合作业要求。如果在测试过程中遇到问题，需要根据具体情况进行调整。如果你需要更多帮助，可以提供更具体的问题或错误描述。
````

## 优化

````markdown
如果你希望保留原来的功能，即返回JSON响应来告知操作成功，并提供图片数据的字节长度，同时还希望能让用户下载图片，那么你需要调整设计来满足这两种需求。通常，一个HTTP请求只能有一个响应，所以你不能同时发送JSON和文件。不过，你可以通过以下两种方式来实现：

1. **创建两个不同的端点**：一个用于返回JSON响应，另一个用于下载图片。
2. **使用查询参数**：根据传入的参数决定返回JSON还是图片。

### 方案1：创建两个不同的端点

这种方法的好处是清晰且符合REST API设计原则。你可以保留一个端点用来返回操作状态的JSON，另一个端点用于文件下载。

#### 修改后的服务端代码：

```python
from flask import send_file

@app.route('/convert', methods=['POST'])
def convert_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image part"}), 400
    file = request.files['image']
    output_type = request.form.get('output_type', 'png').lower()
    if not file or file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    try:
        image = Image.open(file.stream)
        img_byte_arr = io.BytesIO()
        image.save(img_byte_arr, format=output_type.upper())
        img_byte_arr.seek(0)
        # Store image in a temporary location or cache
        # Save or cache the img_byte_arr here with a unique identifier
        return jsonify({"status": "success", "image_bytes": len(img_byte_arr.getvalue())}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/download-image', methods=['GET'])
def download_image():
    output_type = request.args.get('output_type', 'png').lower()
    # Retrieve the img_byte_arr from the temporary location or cache using the identifier
    img_byte_arr = retrieve_image_stream()  # This function needs to be defined
    return send_file(img_byte_arr, mimetype=f'image/{output_type}', as_attachment=True, download_name=f'output.{output_type}')
```

### 方案2：使用查询参数

如果你希望通过单一端点来处理，可以让用户指定他们是想下载文件还是只想获取JSON响应。

#### 示例代码：

```python
@app.route('/convert', methods=['POST'])
def convert_image():
    download = request.args.get('download', 'false') == 'true'
    if 'image' not in request.files:
        return jsonify({"error": "No image part"}), 400
    file = request.files['image']
    output_type = request.form.get('output_type', 'png').lower()
    if not file or file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    try:
        image = Image.open(file.stream)
        img_byte_arr = io.BytesIO()
        image.save(img_byte_arr, format=output_type.upper())
        img_byte_arr.seek(0)
        if download:
            return send_file(img_byte_arr, mimetype=f'image/{output_type}', as_attachment=True, download_name=f'output.{output_type}')
        else:
            return jsonify({"status": "success", "image_bytes": len(img_byte_arr.getvalue())}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
```

在这个设计中，客户端可以通过设置`download=true`作为查询参数来请求下载图片。
````



::: details

```markdown
Assignment 3: Building Interactive APIs with Flask and Dash

## Overview

Based on the knowledge and skills you have learned from the lectures, readings, and other resources, create the following: 

1. Part One: A Flask app with three routes (routes are defined below)
2. Part Two: A Dash app that displays and graphs the given data.
3. Part Three: A saved Jupyter Notebook file showing the usage of your Flask routes.

**More detailed instructions are in the 'How to Complete the Assignment' section below.**

## How to Complete the Assignment:

### Create a Flask app that contains:

1. An **index** route that displays the usage instructions for the other routes in the app.
2. A route called 'convert' that will use the package Pillow to convert an image from one type to another. 
    - This route must use the POST method.
    - The user will provide the image, and the output type of the image.
    - The index route usage instructions should list the available output types for images.
3. Another route, of any name, that uses another Python package to do something.
    - This route does not have to be a POST method.
    - The route should accept some kind of user input.
    - This route should employ a Python package that we have not yet used in class.
    - [This link has a number of interesting Python packages you might want to use.](https://python.plainenglish.io/40-usefull-and-interesting-python-packages-2a38755607fe)
    - [This link is a full listing of all Python packages.](https://pypi.org/)

### Create a Dash app that does the following:

1. Imports one of the data sets from the [The City of Winnipeg Open Data Portal](https://data.winnipeg.ca/)
    - You can use one of their api links, or download and use the data locally (but make sure you include it in your submission if you use it locally, and make sure to use a relative path).
2. Displays the information from the data set as a **Dash Table**.
3. Displays the information from the data set as a **graph**.
    The graph should be an **appropriate type** for the data.
    The graph must **not** be a Histogram.
```



:::

## 2025 repeat

- new: emoji

::: code-tabs

@tab V0.1 emoji

```python
import emoji

@app.route('/text-to-emoji', methods=['POST'])
def text_to_emoji():
    text = request.form.get('text', '')
    if not text:
        return jsonify({"error": "No text provided"}), 400
    emoji_text = emoji.emojize(text, language='alias')
    return jsonify({"original_text": text, "emoji_text": emoji_text}), 200
```

@tab usage.ipynb

```python
import requests

url = "http://127.0.0.1:5000/text-to-emoji"
data = {"text": "I love :pizza: and :coffee:"}
response = requests.post(url, data=data)

print(response.json())
```

@tab V0.2 emoji

```python
import emoji


@app.route('/text-to-emoji', methods=['POST'])
def text_to_emoji():
    text = request.form.get('text', '')
    if not text:
        return jsonify({"error": "No text provided"}), 400
    words = text.split()
    emoji_text = ' '.join([emoji.emojize(word, language='alias') if word.startswith(':') and word.endswith(':') else emoji.emojize(f':{word}:', language='alias') for word in words])
    return jsonify({"original_text": text, "emoji_text": emoji_text}), 200
```

@tab V0.3 emoji

```python
import emoji

@app.route('/text-to-emoji', methods=['POST'])
def text_to_emoji():
    text = request.form.get('text', '')
    if not text:
        return jsonify({"error": "No text provided"}), 400
    words = text.split()
    emoji_text = ' '.join([emoji.emojize(word, language='alias') if emoji.emojize(word, language='alias') != word else word for word in words])
    return jsonify({"original_text": text, "emoji_text": emoji_text}), 200
```

@tab V0.4 emoji（me）

```python
import emoji

@app.route('/text-to-emoji', methods=['POST'])
def text_to_emoji():
    text = request.form.get('text', '')
    if not text:
        return jsonify({"error": "No text provided"}), 400
    words = text.split()
    emoji_text = ' '.join([emoji.emojize(word, language='alias') if word.startswith(':') and word.endswith(':') else emoji.emojize(f':{word}:', language='alias') for word in words])
    return jsonify({"original_text": text, "emoji_text": emoji_text.replace(":", "")}), 200
```

@tab usage.ipynb

```python
url = "http://127.0.0.1:5000/text-to-emoji"
data = {"text": "I love pizza and coffee"}
response = requests.post(url, data=data)

print(response.json())
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

