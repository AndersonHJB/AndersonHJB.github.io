---
title: 01-Python 项目文件不能添加空格的原因
date: 2022-05-19 19:26:00
author: AI悦创
isOriginal: true
category: Python 私教问答
tag:
    - Python 私教问答
icon: fankuifaqs
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

## 项目链接如下

[https://github.com/AndersonHJB/Python_FAQ](https://github.com/AndersonHJB/Python_FAQ)



## 报错如下

![](https://blog.images.bornforthis.cn/docs-images/sha256/78/787cc0d9c928c319448b97a666bd0cd6f5c49d474721f1a829eec8d24807cc55.png)

::: details 文字

```cmd
clela@AIYC D:\Github_pages\Python_FAQ\01-Python 项目文件不能添加空格的原因\测试项目\02-Python 视频分割生成链接
# python split_demo.py
r_path: D:\Github_pages\Python_FAQ\01-Python 项目文件不能添加空格的原因\测试项目\02-Python 视频分割生成链接\one.
movie_name: one
D:\Github_pages\Python_FAQ\01-Python 项目文件不能添加空格的原因\测试项目\02-Python 视频分割生成链接\result
ffmpeg version 4.4-essentials_build-www.gyan.dev Copyright (c) 2000-2021 the FFmpeg developers
  built with gcc 10.2.0 (Rev6, Built by MSYS2 project)
  configuration: --enable-gpl --enable-version3 --enable-static --disable-w32threads --disable-autodetect --enable-fontconfig --enable-iconv --enable-gnutls --enable-libxml2 --enable-gmp --enable-lzma --enable-zlib --enable-libsrt --enable-libssh --enable-libzmq --enable-avisynth --enable-sdl2 --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxvid --enable-libaom --enable-libopenjpeg --enable-libvpx --enable-libass --enable-libfreetype --enable-libfribidi --enable-libvidstab --enable-libvmaf --enable-libzimg --enable-amf --enable-cuda-llvm --enable-cuvid --enable-ffnvcodec --enable-nvdec --enable-nvenc --enable-d3d11va --enable-dxva2 --enable-libmfx --enable-libgme --enable-libopenmpt --enable-libopencore-amrwb --enable-libmp3lame --enable-libtheora --enable-libvo-amrwbenc --enable-libgsm --enable-libopencore-amrnb --enable-libopus --enable-libspeex --enable-libvorbis --enable-librubberband
  libavutil      56. 70.100 / 56. 70.100
  libavcodec     58.134.100 / 58.134.100
  libavformat    58. 76.100 / 58. 76.100
  libavdevice    58. 13.100 / 58. 13.100
  libavfilter     7.110.100 /  7.110.100
  libswscale      5.  9.100 /  5.  9.100
  libswresample   3.  9.100 /  3.  9.100
  libpostproc    55.  9.100 / 55.  9.100
D:\Github_pages\Python_FAQ\01-Python: No such file or directory
```

:::

## 解决方法

去掉项目名称中的所有空格。



## Why？

命令行或者代码中，包含空格时，其实大部分是语法或者命令：

```python
python file.py  # 这里的空格是下一个命令的编写
```

所以，文件中出现空格，代码实现却是和路径有关，所以程序将会无法分清。



