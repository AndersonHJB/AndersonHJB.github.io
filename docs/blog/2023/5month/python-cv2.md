---
title: Python人脸美白毕业设计
date: 2023-05-08 21:04:16
author: AI悦创
isOriginal: true
category: 
    - Python毕业设计辅导
    - Python毕业设计1v1辅导
tag:
    - Python毕业设计辅导
    - Python毕业设计1v1辅导
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

::: code-tabs

@tab show.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <script src="/static/js/jquery.min.js"></script>
</head>
<style>
    /* .file-upload {
       display: none; // 设置上传文件的input隐藏
    } */
</style>
<body>
<div style="width: 400px;height: 300px;margin-left: 500px">
    <div class="col-md-5">
        <!-- 显示上传的图片 -->
        {#            下面的默认图片有问题，需要修改，修改如下：#}
        <img id="img-avatar" style="width: 400px;height: 500px" src="/static/images/user.jpg" class="img-responsive"
             alt="无法显示默认头像"/>
    </div>
    <div class="col-md-offset-2 col-md-4">
        <!-- 文件上传 input，接受图像文件 -->
        <input id="chooseImage" type="file" name="file" accept="image/*">
    </div>
    <div class="col-md-offset-2 col-md-4">
        <!-- 图像处理功能按钮 -->
        <button id="mopi">磨皮</button>
        <button id="meibai">美白</button>
        <button id="quban">祛斑</button>
        <button id="bao">纯红</button>
    </div>

</div>
<script>
    // 当选择图像文件时的事件处理
    $("#chooseImage").on('change', function () {
        // 获取上传的文件
        const files = document.querySelector('input[type=file]')
        let filePath = $(this).val(); //获取到input的value，里面是文件的路径  // 获取文件路径
        let fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(); //获取文件后缀
        let src = window.URL.createObjectURL(this.files[0]); //转成可以在本地预览的格式// // 转换为本地预览格式
        var reader = new FileReader();
        // 检查是否是图片
        if (!fileFormat.match(/.jpg/)) {
            //error_prompt_alert
            alert('上传错误,文件格式必须为：png/jpg/jpeg/bmp/gif');
            return;
        }
        // 更新 img 标签的 src 属性为上传的图像地址
        $('#img-avatar').attr('src', src); //将图片地址放置在img的src中。
        reader.readAsDataURL(files.files[0]);
        reader.onloadend = function () {
            var base64 = reader.result;
            console.log(base64);
            // 发送POST请求，将图像数据发送到服务器
            $.ajax({
                url: '/predict',
                method: 'post',
                data: {'data': base64},
                success: function (res) {
                    alert(res['action'])

                }
            })

        }
    });

    // 为图像处理功能按钮绑定点击事件
    $('#mopi').click(function () {
        $.ajax({
            url: '/mopi',
            method: 'get',
            success: function (res) {
                document.getElementById('img-avatar').src = res['path']
            }
        })


    })
    // 为美白功能按钮绑定点击事件
    $('#meibai').click(function () {
        // 发送GET请求到/meibai接口
        $.ajax({
            url: '/meibai',
            method: 'get',
            success: function (res) {
                // 更新img标签的src属性为处理后的图像地址
                document.getElementById('img-avatar').src = res['path']
            }
        })


    })
    // 为祛斑功能按钮绑定点击事件
    $('#quban').click(function () {
        // 发送GET请求到/quban接口
        $.ajax({
            url: '/quban',
            method: 'get',
            success: function (res) {
                // 更新img标签的src属性为处理后的图像地址
                document.getElementById('img-avatar').src = res['path']
            }
        })


    })
    // 为纯红功能按钮绑定点击事件
    $('#bao').click(function () {
        $.ajax({
            url: '/bao',
            method: 'get',
            success: function (res) {
                // 更新img标签的src属性为处理后的图像地址
                document.getElementById('img-avatar').src = res['path']
            }
        })


    })
</script>
</body>
</html>
```

@tab bao.py

```python
# 导入 Python Imaging Library (PIL) 中的 Image 模块，用于处理图像
from PIL import Image
# 导入 PIL 库中的 ImageEnhance 模块，用于对图像进行增强处理
from PIL import ImageEnhance


# 定义一个函数 ColorEnhancement，用于进行图像的色度增强
def ColorEnhancement():
    # 设置图像文件路径
    filepath = './static/images/1.jpg'
    # 设置色度增强系数，color=1 时保持原图像不变
    color = 1.9

    # 使用 PIL 的 Image 模块打开图像文件
    image = Image.open(filepath)

    # 创建一个色度增强对象
    enh_col = ImageEnhance.Color(image)

    # 使用增强对象调整图像的色度，并将结果保存到 image_colored 变量中
    image_colored = enh_col.enhance(color)

    # 将色度增强后的图像保存为新文件
    image_colored.save('./static/images/bao.jpg')


"""
这段代码首先导入了 PIL（Python Imaging Library）库中的 Image 和 ImageEnhance 模块，用于处理图像。接下来，定义了一个名为 ColorEnhancement 的函数，用于对图像进行色度增强。

函数内部首先设置了图像文件的路径 filepath 和色度增强系数 color。color 的值为 1 时，表示保持原图像不变。接着，使用 PIL 的 Image 模块打开图像文件，并创建一个色度增强对象 enh_col。

通过调用 enh_col.enhance(color) 方法对图像进行色度增强，并将结果保存到 image_colored 变量中。最后，将色度增强后的图像保存为新文件。
"""
```

@tab meibai.py

```python
import cv2  # 导入 OpenCV 库，用于图像处理
from PIL import ImageEnhance  # 从 PIL（Python Imaging Library）库中导入图像增强模块
from PIL import Image  # 从 PIL 库中导入图像模块

# 定义一个颜色列表，用于后续调整图像的颜色通道
Color_list = [
    1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 31, 33, 35, 37, 39,
    41, 43, 44, 46, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 66, 67, 69, 71, 73, 74,
    76, 78, 79, 81, 83, 84, 86, 87, 89, 91, 92, 94, 95, 97, 99, 100, 102, 103, 105,
    106, 108, 109, 111, 112, 114, 115, 117, 118, 120, 121, 123, 124, 126, 127, 128,
    130, 131, 133, 134, 135, 137, 138, 139, 141, 142, 143, 145, 146, 147, 149, 150,
    151, 153, 154, 155, 156, 158, 159, 160, 161, 162, 164, 165, 166, 167, 168, 170,
    171, 172, 173, 174, 175, 176, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
    188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203,
    204, 205, 205, 206, 207, 208, 209, 210, 211, 211, 212, 213, 214, 215, 215, 216,
    217, 218, 219, 219, 220, 221, 222, 222, 223, 224, 224, 225, 226, 226, 227, 228,
    228, 229, 230, 230, 231, 232, 232, 233, 233, 234, 235, 235, 236, 236, 237, 237,
    238, 238, 239, 239, 240, 240, 241, 241, 242, 242, 243, 243, 244, 244, 244, 245,
    245, 246, 246, 246, 247, 247, 248, 248, 248, 249, 249, 249, 250, 250, 250, 250,
    251, 251, 251, 251, 252, 252, 252, 252, 253, 253, 253, 253, 253, 254, 254, 254,
    254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
    255, 255, 255, 256]


# 定义一个函数 face_whitening，用于美白图像
def face_whitening():
    img = cv2.imread('./static/images/1.jpg')  # 读取图像文件
    img = cv2.bilateralFilter(img, 19, 75, 75)  # 对图像进行双边滤波处理，减少噪声，保留边缘
    height, width, n = img.shape  # 获取图像的高度、宽度和通道数

    img2 = img.copy()  # 创建图像的副本，用于后续处理
    for i in range(height):  # 遍历图像的每一行
        for j in range(width):  # 遍历图像的每一列
            b = img2[i, j, 0]  # 获取蓝色通道的值
            g = img2[i, j, 1]  # 获取绿色通道的值
            r = img2[i, j, 2]  # 获取红色通道的值

            # 使用颜色列表调整三个通道的值
            img2[i, j, 0] = Color_list[b]
            img2[i, j, 1] = Color_list[g]
            img2[i, j, 2] = Color_list[r]

    # 将处理后的图像保存为新文件
    cv2.imwrite("./static/images/meibai1.jpg", img2)

    # 使用 PIL 的 Image 模块打开处理后的图像
    image = Image.open("./static/images/meibai1.jpg")

    # 锐度调节
    enh_img = ImageEnhance.Sharpness(image)  # 创建一个锐度增强对象
    image_sharped = enh_img.enhance(1.2)  # 使用增强对象调整图像的锐度

    # 颜色均衡调节
    con_img = ImageEnhance.Contrast(image_sharped)  # 创建一个对比度增强对象
    image_con = con_img.enhance(1.2)  # 使用增强对象调整图像的对比度

    # 保存调整后的图像，曝光颜色均衡
    image_con.save("./static/images/meibai.jpg")
```

@tab quban.py

```python
#!/bin/python
# 祛痘美白

import numpy as np  # 导入 NumPy 库，用于处理数组和矩阵
import cv2  # 导入 OpenCV 库，用于图像处理


# 定义一个函数 mopi，用于图像的磨皮处理
def mopi():
    # 磨皮处理的公式如下
    # Dest =(Src * (100 - Opacity) + (Src + 2 * GuassBlur(EPFFilter(Src) - Src + 128) - 256) * Opacity) /100 ;
    # 参考链接: https://my.oschina.net/wujux/blog/1563461

    # 读取图像文件
    img = cv2.imread("./static/images/1.jpg")
    # 创建一个与原图像大小相同的空白图像，用于存储处理结果
    dst = np.zeros_like(img)

    # 设置磨皮程度与细节程度的参数
    v1 = 3
    v2 = 1
    dx = v1 * 5  # 双边滤波参数之一
    fc = v1 * 12.5  # 双边滤波参数之一
    p = 0.1

    # 创建一个与原图像大小相同的空白图像，用于临时存储
    temp4 = np.zeros_like(img)

    # 使用双边滤波处理图像
    temp1 = cv2.bilateralFilter(img, dx, fc, fc)
    # 计算原图像与双边滤波处理后的图像的差值
    temp2 = cv2.subtract(temp1, img)
    # 将差值加上一个偏移量 (10, 10, 10, 128)
    temp2 = cv2.add(temp2, (10, 10, 10, 128))
    # 对差值图像进行高斯模糊处理
    temp3 = cv2.GaussianBlur(temp2, (2 * v2 - 1, 2 * v2 - 1), 0)
    # 将原图像与高斯模糊处理后的图像相加
    temp4 = cv2.add(img, temp3)
    # 使用加权和的方法将原图像与处理后的图像进行融合
    dst = cv2.addWeighted(img, p, temp4, 1 - p, 0.0)
    # 对融合后的图像进行亮度调整
    dst = cv2.add(dst, (10, 10, 10, 255))
    # 将处理后的图像保存为新文件
    cv2.imwrite('./static/images/mopi.jpg', dst)


# 定义一个函数 quban，用于祛痘处理
def quban():
    # 祛痘处理的公式如下
    # Dest =(Src * (100 - Opacity) + (Src + 2 * GuassBlur(EPFFilter(Src) - Src + 128) - 256) * Opacity) /100 ;

    # 读取图像文件
    src = cv2
    # 读取图像文件
    src = cv2.imread("./static/images/1.jpg")
    # 创建一个与原图像大小相同的空白图像，用于存储处理结果
    dst = np.zeros_like(src)

    # 设置磨皮程度与细节程度的参数
    v1 = 3
    v2 = 1
    dx = v1 * 5  # 双边滤波参数之一
    fc = v1 * 12.5  # 双边滤波参数之一
    p = 0.1

    # 创建一个与原图像大小相同的空白图像，用于临时存储
    temp4 = np.zeros_like(src)

    # 使用双边滤波处理图像
    temp1 = cv2.bilateralFilter(src, dx, fc, fc)
    # 计算原图像与双边滤波处理后的图像的差值
    temp2 = cv2.subtract(temp1, src)
    # 将差值加上一个偏移量 (10, 10, 10, 128)
    temp2 = cv2.add(temp2, (10, 10, 10, 128))
    # 对差值图像进行高斯模糊处理
    temp3 = cv2.GaussianBlur(temp2, (2 * v2 - 1, 2 * v2 - 1), 0)
    # 将原图像与高斯模糊处理后的图像相加两次，然后减去一个偏移量 (10, 10, 10, 255)
    temp4 = cv2.subtract(cv2.add(cv2.add(temp3, temp3), src), (10, 10, 10, 255))

    # 使用加权和的方法将原图像与处理后的图像进行融合
    dst = cv2.addWeighted(src, p, temp4, 1 - p, 0.0)
    # 对融合后的图像进行亮度调整
    dst = cv2.add(dst, (10, 10, 10, 255))
    # 将处理后的图像保存为新文件
    cv2.imwrite('./static/images/quban.jpg', dst)


"""
上面的代码实现了一种图像美容处理算法，主要针对人脸进行祛痘和磨皮操作。这个算法结合了双边滤波和高斯滤波，以降低噪声和平滑图像，同时保留边缘和纹理细节。

算法主要步骤如下：
1. 使用双边滤波处理原始图像，得到平滑且保留边缘信息的图像。
2. 计算原始图像与双边滤波后的图像之间的差值，并对差值图像添加一个偏移量。
3. 对差值图像进行高斯模糊处理。
4. 将高斯模糊后的图像与原始图像叠加，再减去一个偏移量，以得到处理后的图像。
5. 使用加权和的方法将原始图像与处理后的图像进行融合。
6. 调整融合后的图像的亮度。

整个算法实现了在保留图像边缘和纹理细节的同时，平滑人脸皮肤，使其看起来更加光滑和美观。

上面的算法没有一个明确的名字，但它实现的功能是基于双边滤波和高斯滤波的人脸美容处理，
包括磨皮和祛痘。这种方法利用了图像处理中常用的滤波技术，结合了调整图像亮度、对比度等操作，以达到美化人脸的效果。
你可以将其称为"基于双边滤波和高斯滤波的人脸美容算法"。
"""
```

@tab qudou.py

````python
# 导入所需的库
import cv2
import numpy as np

# 定义全局变量 img 和 point 以及 inpaintMask，用于存储图像数据和鼠标点击的点：
global img, point
global inpaintMask


# 手动祛痘
# 定义函数 manual_acne，实现手动祛痘功能，参数 event 是鼠标事件，x 和 y 是鼠标点击的坐标，flags 是鼠标事件的标志，param 是传递给回调函数的参数：
def manual_acne(event, x, y, flags, param):
    # 函数内部，首先复制原始图像并获取图像的高度、宽度和通道数，并创建一个与图像尺寸相同的空白遮罩：
    global img, point
    img2 = img.copy()
    height, width, n = img.shape
    inpaintMask = np.zeros((height, width), dtype=np.uint8)
    # 当检测到鼠标左键按下事件时，记录当前点的坐标，并在图像和遮罩上分别画一个绿色的实心圆，显示在窗口中：
    if event == cv2.EVENT_LBUTTONDOWN:
        point = (x, y)
        cv2.circle(img2, point, 15, (0, 255, 0), -1)
        cv2.circle(inpaintMask, point, 15, 255, -1)
        cv2.imshow("image", img2)
    # 当检测到鼠标左键抬起事件时，在图像和遮罩上分别画一个绿色的实心圆，显示在窗口中，并调用cv2.inpaint()函数对图像进行修复，然后显示修复后的结果：
    elif event == cv2.EVENT_LBUTTONUP:
        cv2.circle(img2, point, 15, (0, 255, 0), -1)
        cv2.circle(inpaintMask, point, 15, 255, -1)
        cv2.imshow("inpaintMask", inpaintMask)
        cv2.imshow("image", img2)
        cv2.imshow("image0", img)
        result = cv2.inpaint(img, inpaintMask, 100, cv2.INPAINT_TELEA)
        cv2.imshow("result", result)


if __name__ == "__main__":
    # 在__main__中，读取图像文件，并创建一个名为“image”的窗口，将manual_acne函数设置为鼠标回调函数，并显示图像：
    global img
    img = cv2.imread("2.jpg")
    cv2.namedWindow("image")
    cv2.setMouseCallback("image", manual_acne)
    cv2.imshow("image", img)
    cv2.waitKey()
    cv2.destroyAllWindows()

"""
是的，在上面的代码中涉及到了一个算法，即图像修复算法。在这个示例中，使用了OpenCV库提供的`cv2.inpaint()`函数来实现图像修复。`cv2.inpaint()`函数基于图像的局部结构信息进行修复，使用了一个名为“Telea”的算法。

Telea算法是由Alexandru Telea于2004年提出的，全称为"An Image Inpainting Technique Based on the Fast Marching Method"。这个算法通过解一个以像素点灰度值为未知数的泊松方程来完成图像修复。它在空洞区域内通过对像素进行排序，根据边缘信息和灰度值差异来优先修复边缘区域。这种方法可以保持图像边缘的连续性，并在一定程度上保持纹理的自然性。

在这个示例中，`cv2.inpaint()`函数的调用如下：
```python
result = cv2.inpaint(img, inpaintMask, 100, cv2.INPAINT_TELEA)
```
其中，`img`是待修复的原始图像，`inpaintMask`是一个与原始图像尺寸相同的二值遮罩，表示需要修复的区域，`100`是修复的半径，指定了算法搜索区域的大小，`cv2.INPAINT_TELEA`表示使用Telea算法进行修复。函数执行后，返回修复后的图像。
"""

"""
在上面的代码中，`cv2.inpaint()`函数被用于修复用户使用鼠标点击的区域。这部分代码位于`manual_acne`函数内的`elif event == cv2.EVENT_LBUTTONUP:`代码块中。

当检测到鼠标左键抬起事件时，代码会调用`cv2.inpaint()`函数对图像进行修复：
```python
result = cv2.inpaint(img, inpaintMask, 100, cv2.INPAINT_TELEA)
```
这里，`img`是待修复的原始图像，`inpaintMask`是一个与原始图像尺寸相同的二值遮罩，表示需要修复的区域。在这个示例中，需要修复的区域是用户用鼠标左键点击的圆形区域。`100`是修复的半径，指定了算法搜索区域的大小。`cv2.INPAINT_TELEA`表示使用Telea算法进行修复。

函数执行后，返回修复后的图像`result`，并通过`cv2.imshow("result", result)`将修复后的图像显示在一个名为“result”的窗口中。
"""
````



:::









欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](https://blog.images.bornforthis.cn/docs-images/sha256/77/77f67d48a67ec6a44a4ef1f01ffc85830eb3c121b1ece45dc5ada06e20e2f52b.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](https://blog.images.bornforthis.cn/docs-images/sha256/30/3087c629da73428daa0ee050f5b31709c30f650686164b54c724b892a422c585.jpg)





