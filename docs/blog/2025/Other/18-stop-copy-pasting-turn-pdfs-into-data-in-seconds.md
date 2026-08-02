---
title: Stop Copy-Pasting. Turn PDFs into Data in Seconds
date: 2025-02-27 22:41:00
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

> Automate PDF extraction and get structured data instantly with Python’s best tools

![Unstructured data can be a goldmine, but extracting its value can be hard without proper guidance. Image by Leonardo AI](https://blog.images.bornforthis.cn/docs-images/sha256/f8/f887d5909c17e4505fd1d938f0f312241f8b108946ac156fb0967f32163e4900.jpeg)

If you’ve ever copy-pasted information from PDFs to another file, only to have it all corrupted or full of errors, you know the pain. I’ve been facing this challenge daily because my company performs data analysis from public corporate data. This data is usually served to you in the shape of PDFs. I’ve literally spent entire days copy-pasting columns and rows of relevant data tables, in order to get what I need for my analyses.

After a few weeks in which I spent half my time manually copy-pasting, I got tired of this mind-numbing monotony. I decided to automate my processes.

The big advantage that I have over other people in my area of work — mostly consultants, financial analysts, and sustainability analysis — is that I’ve got solid coding skills. I’d been writing scientific code in Python and C++, among other languages, for almost a decade before founding my own company. So I decided to use my skills to get rid of the boring part of my work.

Despite my experience, I still faced challenges in automating my data extraction: PDFs come in different shapes and sizes, and a tool that works for one PDF won’t work for another. Luckily, there are tools for just about any PDF — but choosing the right one was trial-and-error for me in the beginning.

So, in addition to studying all the available tools, I also had to make sure that I automated which tool was going to be chosen. Doing a hit-and-miss approach with my code was an improvement, but still equated dull work.

You might be dealing with less varied data and PDF formats than I do. I therefore chose to introduce you to each tool separately, given that you might not need all of them. And in case you’re dealing with as varied data as I am, I’ll conclude by showing you how to string all these tools together and make your extraction seamless.

## Choosing the Right Tool for the Job

So, before we get into the details of various Python packages for PDF extraction, let’s first discuss when to use which one. We’ll be covering five table extraction tools: Tabula, Camelot, pdfplumber, PyMuPDF, and Tesseract.

The first three — Tabula, Camelot, and pdfplumber — are good for structured tables in text-based PDFs. Text-based essentially means that you can mark the text in a PDF editor; this is not the case for most scanned documents these days. The difference between the three is that Tabula is only good for simple tables. Camelot can handle more complex tables, but requires more fine-tuning. Of the three, pdfplumber can handle the most complex tables; however, it cannot detect tables automatically like the other two and does not always preserve the table structure well.

PyMuPDF is a more general-purpose tool that can not only extract tables but also raw text. It can be a good tool if you are also handling text-based data alongside tabular data, or if you want to quickly find out whether your document is text-based (it won’t work if it is a scanned document).

Tesseract is a pure Optical Character Recognition (OCR) tool. It is best for scanned documents. However, I’ve also been using it on text-based documents with atypical encryptions that caused all other packages to fail. Because it is an OCR tool, it does not recognize tables and its structures automatically, and it can make many mistakes that later need to be cleaned up. That being said, it’s a good backup option when the other packages don’t work for whichever reason.

The table below summarizes the key properties of each package. We’ll go through each of them and their usage in the next few sections of this piece.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fdatawrapper.dwcdn.net%2FBOuzl%2F2%2F&amp;display_name=Datawrapper&amp;url=https%3A%2F%2Fdatawrapper.dwcdn.net%2FBOuzl%2F2%2F&amp;image=https%3A%2F%2Fdatawrapper.dwcdn.net%2FBOuzl%2Fplain-s.png%3Fv%3D2&amp;type=text%2Fhtml&amp;schema=dwcdn" allowfullscreen="" frameborder="0" height="835" width="680" title="Table Extraction Tools in Python" class="eo n hj ea bh" scrolling="no" style="box-sizing: inherit; top: 0px; width: 680px; height: 835px; left: 0px;"></iframe>

## Tabula and Camelot for Structured, Text-Based Tables

### Tabula

Tabula is the simplest tool on this list, and it only really works with simple tables. Tabula depends on [Java](https://www.java.com/en/), though, so make sure you have that installed before you try playing with it. After that, installing Tabula is as simple as typing in your command line:

```python
pip install tabula-py
```

To run it on an example PDF, here’s how one would do this:

```python
import tabula

pdf_path = "example.pdf"
dfs = tabula.read_pdf(pdf_path, pages="all", multiple_tables=True)

# Save all extracted tables to CSV
for i, df in enumerate(dfs):
    df.to_csv(f"table_tabula_{i}.csv", index=False)
print(dfs[0].head())  # Preview first table
```

The advantage of Tabula is that it is simple to execute and quick to run. It struggles, however, with tables that have merged cells or irregular formatting.

### Camelot

Camelot is a viable alternative to Tabula because it doesn’t require Java to run and can handle somewhat more complex tables. On the other hand, Camelot requires Ghostscript to run. If it’s not installed yet, run:

```python
brew install ghostscript  # Mac
sudo apt install ghostscript  # Linux
```

For Windows, one must download and [install Ghostscript](https://ghostscript.com/releases/gsdnld.html). To install Camelot, one then simply runs:

```python
pip install camelot-py
```

Camelot supports two modes of running: **Lattice mode** is good for tables with visible borders. **Stream mode** is good when the tables lack visible borders.

Here’s how one would extract data using Camelot:

```python
import camelot

pdf_path = "example.pdf"
tables = camelot.read_pdf(pdf_path, pages="all", flavor="lattice")  # lattice mode
#tables = camelot.read_pdf(pdf_path, pages="all", flavor="stream")  # stream mode

# Save extracted tables to CSV
for i, table in enumerate(tables):
    table.df.to_csv(f"table_camelot_{i}.csv", index=False)
print(tables[0].df.head())  # Preview first table
```

Notice that the commented-out line above is for stream mode; the non-commented one is for lattice mode. You can adjust these as needed.

## More Control Over Table Extraction With pdfplumber

If your tables are too complex for Tabula or Camelot, then pdfplumber is your friend. It also helps extract not only tables, but also text. One has more control over what one wants to extract because one can manually define table areas — that being said, this does require more fine-tuning than a “just run it”-type of approach.

One installs pdfplumber via:

```python
pip install pdfplumber
```

Once this is done, one can proceed to extracting all tables from a PDF in the following fashion:

```python
import pdfplumber
import pandas as pd

pdf_path = "example.pdf"

# Open the PDF
with pdfplumber.open(pdf_path) as pdf:
    all_tables = []
  
    for page in pdf.pages:
        tables = page.extract_tables()
        for table in tables:
            df = pd.DataFrame(table)
            all_tables.append(df)

# Save tables to CSV
for i, df in enumerate(all_tables):
    df.to_csv(f"table_pdfplumber_{i}.csv", index=False)

# Preview first table
print(all_tables[0].head())
```

It’s worth noting that the function `.extract_tables()` in the snippet above does not automatically detect tables like Tabula or Camelot do. Instead, it extracts text based on how it is formatted on the page.

On the one hand, this means that you might have to help pdfplumber find the tables. On the other hand, it gives you more control over how complex or irregular tables are extracted. For example, you can manually specify a table area using bounding boxes with pdfplumber:

```python
with pdfplumber.open("example.pdf") as pdf:
    first_page = pdf.pages[0]

# Define a bounding box for the table (x0, top, x1, bottom)
    bbox = (50, 100, 500, 300)  # Adjust coordinates based on the PDF
    table = first_page.extract_table(bbox=bbox)
    df = pd.DataFrame(table)
    print(df)
```

If, in addition to tables, you would like to extract the accompanying tables, this is easy too:

```python
with pdfplumber.open("example.pdf") as pdf:
    text = pdf.pages[0].extract_text()
    print(text)
```

In short, pdfplumber works well for more complex tables because it gives you more control over the extraction. It also extracts text, unlike Tabula and Camelot. On the other hand, it can be unnecessary work to use it with simple tables, given the customization that is often needed.

## Extracting Text & Tables with PyMuPDF (fitz)

PyMuPDF cannot recognize tables as such. However, when other methods fail, it can be a way to extract the necessary data. One can then add the tabular structure afterwards during data cleaning. It can also extract images and metadata from PDFs, which makes it a good general-purpose PDF wrangler.

Its usage is quite simple. The installation is straightforward:

```python
pip install pymupdf
```

Then, to extract all text from a PDF, here’s how you go about it:

```python
import fitz  # PyMuPDF

pdf_path = "example.pdf"

# Open the PDF
doc = fitz.open(pdf_path)

# Extract text from all pages
full_text = "\n".join([page.get_text("text") for page in doc])

# Save text to a file
with open("extracted_text.txt", "w") as f:
    f.write(full_text)
print(full_text[:500])  # Preview first 500 characters
```

This method extracts all selectable text from the PDF and preserves paragraph structure where possible. To preserve the spatial layout of the text — which is very useful for tables — one needs to replace `get_text("text")` with `get_text("words")`.

## Extracting Tables from Scanned PDFs with OCR (Tesseract)

Sometimes, all tools listed above fail. This can be due to two reasons: Either the document is not text-based but scanned. Or the document is text-based but with an atypical encryption that Tabula & Co. cannot handle.

When this is the case, it is best to treat the PDF as an image and use OCR technology to read it. Tesseract is by far the most widespread tool for doing this. Installing it is easy ([for Windows](https://tesseract-ocr.github.io/tessdoc/Downloads.html) it needs to be downloaded and installed):

```python
brew install tesseract  # Mac
sudo apt install tesseract-ocr  # Linux
```

You’ll also need to install some Python dependencies:

```python
pip install pytesseract pdf2image opencv-python numpy
```

Using Tesseract is a bit more involved than using the packages discussed earlier. First, one must convert the PDF to images and apply OCR:

```python
from pdf2image import convert_from_path
import pytesseract

pdf_path = "scanned_example.pdf"

# Convert PDF to list of images
pages = convert_from_path(pdf_path, dpi=300)

# Extract text from each page
for i, page in enumerate(pages):
    text = pytesseract.image_to_string(page)
    print(f"Page {i+1}:\n{text}\n")
```

Then, one needs to extract tables by understanding where lines and delimiters are:

```python
import cv2
import numpy as np
import pandas as pd

# Preprocessing function to enhance OCR accuracy
def preprocess_image(image):
    gray = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2GRAY)  # Convert to grayscale
    _, thresh = cv2.threshold(gray, 150, 255, cv2.THRESH_BINARY)  # Binarization
    return thresh

# Apply preprocessing before OCR
processed_page = preprocess_image(pages[0])
text = pytesseract.image_to_string(processed_page, config="--psm 6")

# Convert extracted text into table format
rows = [line.split() for line in text.split("\n") if line.strip()]
df = pd.DataFrame(rows)
df.to_csv("ocr_extracted_table.csv", index=False)
print(df.head())
```

To properly run this code, some fine-tuning along the `cv2.threshold` and the configuration in `image_to_string` can be necessary. In my experience, this requires some first trial-and-error; however, once one has gotten the settings right for a few PDFs, the rest are usually similar (as long as they’re a similar type).

## A Note on Combining Tools

By this point, you’ll have noticed that each of the above tools has its unique advantages and drawbacks. It can sometimes make sense to combine tools, notably in the following cases:

- If it is unclear if the PDF is text-based or scanned: Use PyMuPDF (to check if text is selectable) + Tesseract (if not).
- Extracting both text and tables: Use PyMuPDF (for raw text) + Tabula/pdfplumber (for tables).
- Tables extracted by one tool are messy: Try Tabula first, then pdfplumber if needed.
- Tables are inside complex layouts: Use pdfplumber (manual control) + Camelot (for fine-tuned extraction).
- Extracting images and text from the same PDF: PyMuPDF (for images & metadata) + pdfplumber (for structured text).

We’ll cover a couple of these cases below.

### Tables extracted by one tool are messy

Tabula works well on structured tables but struggles with merged rows and columns. On the other hand, pdfplumber gives more manual control but needs fine-tuning. So, if Tabula works, one should use it. Otherwise, one should defer to pdfplumber in the following way:

```python
import tabula
import pdfplumber
import pandas as pd

pdf_path = "example.pdf"

# Try extracting with Tabula
dfs = tabula.read_pdf(pdf_path, pages='all', multiple_tables=True)
if not dfs:  # If Tabula fails, try pdfplumber
    with pdfplumber.open(pdf_path) as pdf:
        tables = []
        for page in pdf.pages:
            extracted_tables = page.extract_tables()
            for table in extracted_tables:
                df = pd.DataFrame(table)
                tables.append(df)

# Save extracted tables
for i, df in enumerate(dfs or tables):
    df.to_csv(f"table_{i}.csv", index=False)
```

### Tables are inside complex layouts

Some PDFs have tables embedded in multi-column layouts, surrounded by text, or with irregular spacing. In such cases, pdfplumber allows to manually select the area of interest where the table is. After that, one can let Camelot (or in simpler cases Tabula) do the rest of the work:

```python
import pdfplumber
import camelot
import pandas as pd

pdf_path = "complex_layout.pdf"

# Step 1: Manually inspect the page layout using pdfplumber
with pdfplumber.open(pdf_path) as pdf:
    first_page = pdf.pages[0]
    extracted_text = first_page.extract_text()
    print("Page Text Preview:\n", extracted_text)  # Helps locate table position
    first_page.to_image().show()  # Displays the PDF page for visual inspection

# Step 2: Use Camelot to extract the table once the area is identified
tables = camelot.read_pdf(pdf_path, pages="1", flavor="lattice")  # Use "stream" if no grid lines

# Save extracted tables
for i, table in enumerate(tables):
    table.df.to_csv(f"table_camelot_{i}.csv", index=False)

# Preview first extracted table
print(tables[0].df)
```

## No More Choosing Tools: Fully Automated Extraction

If, like me, you’re dealing with plenty of different types of PDFs and don’t want to try (and fail) with one custom script after another, you can automate the whole thing in one unified script.

This script works in the following way:

1. Detect if the PDF is text-based or scanned.
2. Extract tables using Tabula, pdfplumber, or Camelot (if needed).
3. Use OCR (Tesseract) for scanned PDFs.
4. Extract images and metadata if necessary.

We use fitz to detect whether the PDF is text-based or not:

```python
import fitz  # PyMuPDF

def is_pdf_text_based(pdf_path):
    """Returns True if the PDF contains selectable text, False if scanned."""
    doc = fitz.open(pdf_path)
    return any(page.get_text("text").strip() for page in doc)
```

If the PDF has selectable text, we extract tables using Tabula or pdfplumber:

```python
dfs = tabula.read_pdf(pdf_path, pages="all", multiple_tables=True)
```

If not, we use Tesseract:

```python
pages = convert_from_path(pdf_path, dpi=300)
text = "\n".join([pytesseract.image_to_string(page, config="--psm 6") for page in pages])
```

I’ve drafted a full script [here](https://gist.github.com/arijoury/052c47af18b1b890609846ff857b5201). You are free to use it and adjust it locally based on your needs!

```python
import os
import fitz  # PyMuPDF
import pdfplumber
import tabula
import camelot
import pytesseract
from pdf2image import convert_from_path
import pandas as pd
import cv2
import numpy as np

# Step 1: Detect if the PDF is text-based or scanned
def is_pdf_text_based(pdf_path):
    """Returns True if the PDF contains selectable text, False if scanned."""
    doc = fitz.open(pdf_path)
    return any(page.get_text("text").strip() for page in doc)

# Step 2: Extract text with PyMuPDF
def extract_text_pymupdf(pdf_path, output_dir):
    doc = fitz.open(pdf_path)
    text = "\n".join([page.get_text("text") for page in doc])
    with open(os.path.join(output_dir, "extracted_text.txt"), "w") as f:
        f.write(text)
    print("[SUCCESS] Extracted text with PyMuPDF.")

# Step 3: Extract tables with Tabula
def extract_tables_tabula(pdf_path, output_dir):
    try:
        dfs = tabula.read_pdf(pdf_path, pages="all", multiple_tables=True)
        for i, df in enumerate(dfs):
            df.to_csv(os.path.join(output_dir, f"table_tabula_{i}.csv"), index=False)
        print("[SUCCESS] Extracted tables with Tabula.")
        return True
    except Exception:
        print("[WARNING] Tabula failed.")
        return False

# Step 4: Extract tables with pdfplumber if Tabula fails
def extract_tables_pdfplumber(pdf_path, output_dir):
    try:
        with pdfplumber.open(pdf_path) as pdf:
            tables = []
            for page in pdf.pages:
                extracted_tables = page.extract_tables()
                for table in extracted_tables:
                    df = pd.DataFrame(table)
                    tables.append(df)
        for i, df in enumerate(tables):
            df.to_csv(os.path.join(output_dir, f"table_pdfplumber_{i}.csv"), index=False)
        print("[SUCCESS] Extracted tables with pdfplumber.")
        return True
    except Exception:
        print("[WARNING] pdfplumber failed.")
        return False

# Step 5: Extract tables with Camelot for complex layouts
def extract_tables_camelot(pdf_path, output_dir):
    try:
        tables = camelot.read_pdf(pdf_path, pages="1", flavor="lattice")
        for i, table in enumerate(tables):
            table.df.to_csv(os.path.join(output_dir, f"table_camelot_{i}.csv"), index=False)
        print("[SUCCESS] Extracted tables with Camelot.")
        return True
    except Exception:
        print("[WARNING] Camelot failed.")
        return False

# Step 6: Extract text from scanned PDFs using OCR
def extract_text_tesseract(pdf_path, output_dir):
    pages = convert_from_path(pdf_path, dpi=300)
    text = "\n".join([pytesseract.image_to_string(page, config="--psm 6") for page in pages])
    with open(os.path.join(output_dir, "ocr_extracted_text.txt"), "w") as f:
        f.write(text)
    print("[SUCCESS] Extracted text with OCR.")

# Step 7: Extract images using PyMuPDF
def extract_images_pymupdf(pdf_path, output_dir):
    doc = fitz.open(pdf_path)
    for page_num, page in enumerate(doc):
        for img_index, img in enumerate(page.get_images(full=True)):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_data = base_image["image"]
            with open(os.path.join(output_dir, f"image_{page_num}_{img_index}.png"), "wb") as f:
                f.write(image_data)
    print("[SUCCESS] Extracted images from PDF.")

# Main function to automate extraction
def auto_extract(pdf_path, output_dir="extracted_data"):
    os.makedirs(output_dir, exist_ok=True)

    if is_pdf_text_based(pdf_path):
        print("[INFO] PDF contains selectable text. Extracting with PyMuPDF...")
        extract_text_pymupdf(pdf_path, output_dir)
        if not extract_tables_tabula(pdf_path, output_dir):
            if not extract_tables_pdfplumber(pdf_path, output_dir):
                extract_tables_camelot(pdf_path, output_dir)
    else:
        print("[INFO] PDF appears to be scanned. Using OCR...")
        extract_text_tesseract(pdf_path, output_dir)
    
    # Extract images
    extract_images_pymupdf(pdf_path, output_dir)

# Run the script
if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("Usage: python auto_extract.py <pdf_path>")
        sys.exit(1)

    pdf_path = sys.argv[1]
    auto_extract(pdf_path)
```



## The Bottom Line: Get Structured Data Easily

If you’ve ever copy-pasted tables from PDFs, only to have them turn into an error-ridden mess, you know how frustrating it is. I deal with this quite regularly because my company performs data analysis on public corporate data, which is available primarily through PDFs.

After spending entire days manually copying columns and rows just to get usable data, I realized I needed to automate my process.

But even with solid coding skills, I quickly hit a major challenge because no single tool works for all PDFs. A method that works for one file format might fail completely on another. Even with just text-based PDFs, data complexity can necessitate more and more sophisticated tools quite quickly.

I must admit that it was a painful process. Now, however, I have a fairly automated pipeline that chooses the right tool for any PDF.

That being said, I’m not in data heaven yet. Data cleaning remains a major bottleneck for me. Complex layouts often require manual adjustments, even after extraction. Some table extraction tools split columns incorrectly or merge rows unintentionally, which can corrupt an entire dataset if it goes unnoticed.

OCR tools are possibly the worst: They can misread numbers and characters (e.g., confusing “0” with “O” or “1” with “I”). This means that much manual and semi-automated data cleaning remains necessary for me at this point in time.

I’ve literally gained weeks of my time back by automating data extraction. I’m still working on data cleaning, but I’ll be sure to share my wisdom here once I obtain it!













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

[.](https://medium.com/data-science-collective/stop-copy-pasting-turn-pdfs-into-data-in-seconds-c5997d523133)







