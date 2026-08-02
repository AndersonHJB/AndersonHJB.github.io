---
title: 10 Insanely Useful Automation Scripts You Need to Try Using Python
date: 2025-02-18 23:33:06
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

![](https://blog.images.bornforthis.cn/docs-images/sha256/70/7037abd509674afc2214f5d144a4e9c204289ff812593916037fc1e05f93b6b2.png)

### Python’s Second Name is Automation

Automation is the heartbeat of modern innovation, revolutionizing how we approach everyday challenges and complex workflows. At the forefront of this revolutionary transformation stands Python, a dynamic programming language famous for its robust library ecosystem, intuitive design, and an ever-expanding community of innovators. Whether you wanna simplify repetitive tasks or craft intricate solutions, Python serves as the ultimate enabler of efficiency. In this blog, We will look at 10 Insanely Useful automation scripts that you need to try using Python.

## 1. TaskTock (A Multi-Task reminder App)

Have you ever found yourself overwhelmed by multiple tasks, constantly forgetting what needs to be done next? Ever wished you had a personal assistant to remind you of everything at just the right time?

This **automation script** does exactly that — it helps you **manage your tasks by sending timely reminders for everything you input**. Whether it’s work deadlines, meetings, or personal to-dos, this script ensures you’re always on top of things, sending reminders at the intervals you set.

It leverages Python’s built-in time modules to efficiently manage and track tasks while utilizing Tkinter for a user-friendly interface and Win10Toast to deliver timely notifications, ensuring you stay on top of your reminders.

```python
import tkinter as tk
from tkinter import ttk
import csv
import time
import threading
from datetime import datetime, timedelta
from win10toast import ToastNotifier  

reminders = [] # List to store all reminders  
# Function to periodically check reminders
def check_reminders():
    while True:
        current_time = datetime.now()
        for reminder in reminders[:]:  
            if current_time >= reminder["remind_time"]:
                show_custom_notification(reminder["task_name"], reminder["description"])
                reminders.remove(reminder)
        time.sleep(10)  

# Thread to run the check reminders function
threading.Thread(target=check_reminders, daemon=True).start()

# Function to show custom notifications using Win10Toast
def show_custom_notification(task_name, description):
    toaster = ToastNotifier()
    toaster.show_toast(title=f"Reminder: {task_name}",msg=f"Description: {description}",icon_path="icon.ico",  duration=10,  threaded=True)

# Function to set a reminder
def set_reminder():
    task_name = task_name_entry.get()
    description = description_entry.get("1.0", tk.END).strip()
    time_minutes = float(time_entry.get())
    remind_time = datetime.now() + timedelta(minutes=time_minutes)

    ## Generate Logs on Console
    print(f'''
          Task Name: {task_name}\n
          Task Description: {description} \n
          Remind Time: {remind_time}\n''')
    print('Task added! I will remind you when the time comes.')

    # Saving Reminder Logs
    reminders.append({
        "task_name": task_name,
        "description": description,
        "remind_time": remind_time })
    with open('reminders.csv', 'a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([task_name, description, remind_time])

# Function to reset input fields
def add_task():
    task_name_entry.delete(0, tk.END)
    description_entry.delete("1.0", tk.END)
    time_entry.delete(0, tk.END)

# Function to create the GUI
def create_gui():
    global task_name_entry, description_entry, time_entry
    root = tk.Tk()

    # GUI Designing
    root.title("A Multi-Task Reminder App")
    root.geometry("500x400")
    root.configure(bg="#f7f7f7")
    title_frame = tk.Frame(root, bg="#4a90e2", pady=10)
    title_frame.pack(fill="x")
    title_label = tk.Label(title_frame, text="TaskTock", font=("Arial", 16, "bold"), fg="white", bg="#4a90e2")
    title_label.pack()
    form_frame = ttk.Frame(root, padding="20 20 20 10")
    form_frame.pack(fill="both", expand=True, padx=20, pady=20)
    ttk.Label(form_frame, text="Task Name:", font=("Arial", 10)).grid(row=0, column=0, sticky=tk.W, pady=5)
    task_name_entry = ttk.Entry(form_frame, width=40, font=("Arial", 10))
    task_name_entry.grid(row=0, column=1, padx=5, pady=5)
    ttk.Label(form_frame, text="Description:", font=("Arial", 10)).grid(row=1, column=0, sticky=tk.W, pady=5)
    description_entry = tk.Text(form_frame, width=40, height=4, font=("Arial", 10))
    description_entry.grid(row=1, column=1, padx=5, pady=5)
    ttk.Label(form_frame, text="Time to Remind (minutes):", font=("Arial", 10)).grid(row=2, column=0, sticky=tk.W, pady=5)
    time_entry = ttk.Entry(form_frame, width=40, font=("Arial", 10))
    time_entry.grid(row=2, column=1, padx=5, pady=5)
    button_frame = tk.Frame(root, bg="#f7f7f7")
    button_frame.pack(pady=10)
    set_button = tk.Button(button_frame, text="Set Reminder", command=set_reminder, font=("Arial", 10, "bold"), bg="#4a90e2", fg="white", width=15)
    set_button.pack(side="left", padx=10)
    add_button = tk.Button(button_frame, text="Add New Task", command=add_task, font=("Arial", 10, "bold"), bg="#f1c40f", fg="white", width=15)
    add_button.pack(side="left", padx=10)
    root.mainloop()

if __name__ == "__main__":
    create_gui()
```

![TaskTock Output — A MultiTask Reminder App — GIF Created By Author](https://blog.images.bornforthis.cn/docs-images/sha256/b8/b8897f9be5e47d093b4fb87c9e6271a95079ef54623c5caadce8332fcc407218.gif)

![TaskTock Notification — Screenshot By Author](https://blog.images.bornforthis.cn/docs-images/sha256/4f/4fc51989c1e838b96672c12fd2c801a3753dac1f7368901024f2e68c82c33394.png)

![Generated Reminder Logs — Screenshot By Author](https://blog.images.bornforthis.cn/docs-images/sha256/a2/a2063477edea2ebe39f004080379b72845359b949fda362fc7e973da69eb0882.png)

### Script Applications —

- Use it as a time tracker to keep track of tasks and remind you when to switch or take a break.
- Project managers and teams can use it for milestone tracking, meeting reminders, and task coordination, with simple alerts for everyone.

## 2. Inspectra (Your on-the-go Code Quality Checker)

Writing clean, efficient code isn’t just a good practice — it’s essential for building scalable, maintainable projects. Yet, ensuring code quality can feel like an uphill battle, especially when you’re working with large codebases or tight deadlines. The process of spotting vulnerabilities, linting issues, or logical inconsistencies can quickly become overwhelming without the right tools.

![Looking for coding errors — TenorGIF](https://blog.images.bornforthis.cn/docs-images/sha256/79/79c3bccf12a5736e1549aa763e5fe1d21dbfe79ed40d38da5a8b675cc0cd85da.gif)

This automation script makes use of Black, Flake8, and Bandit libraries to scan your code directories for any logical or linting errors by comparing your code against well-defined coding standards. It not only scans your code but also generates logs which you can refer to later and improve your codebase standards.

```python
import os
import subprocess

def analyze_code(directory):
    # List Python files in the directory
    python_files = [file for file in os.listdir(directory) if file.endswith('.py')]
    if not python_files:
        print("No Python files found in the specified directory.")
        return
    report_dir = os.path.join(directory, "reports")
    os.makedirs(report_dir, exist_ok=True)

    for file in python_files:
        print(f"Analyzing file: {file}")
        file_path = os.path.join(directory, file)
        
        # Run Black (code formatter)
        print("\nRunning Black...")
        black_command = f"black {file_path} --check"
        subprocess.run(black_command, shell=True)
        
        # Run Flake8 (linter)
        print("\nRunning Flake8...")
        flake8_output_file = os.path.join(report_dir, f"{file}_flake8_report.txt")
        with open(flake8_output_file, "w") as flake8_output:
            flake8_command = f"flake8 {file_path}"
            subprocess.run(flake8_command, shell=True, stdout=flake8_output, stderr=subprocess.STDOUT)
        print(f"Flake8 report saved to {flake8_output_file}")

        # Run Bandit (security analysis)
        print("\nRunning Bandit...")
        bandit_output_file = os.path.join(report_dir, f"{file}_bandit_report.txt")
        with open(bandit_output_file, "w") as bandit_output:
            bandit_command = f"bandit -r {file_path}"
            subprocess.run(bandit_command, shell=True, stdout=bandit_output, stderr=subprocess.STDOUT)
        print(f"Bandit report saved to {bandit_output_file}")
        print(f"Analyzing file: {file} Completed!!!!")
        print('================'*5)
        print('================'*5
if __name__ == "__main__":
    directory = r"C:\Users\abhay\OneDrive\Desktop\auto\Part7"
    analyze_code(directory)
```

![Output for a code quality review on one of my old directories containing multiple automation scripts that were used in part 7 of this automation series — GIF created by Author](https://blog.images.bornforthis.cn/docs-images/sha256/14/147e5a5ec494f30349abcc8bd017b4cb4af23e8bb4e6e0231f136e39628209c2.gif)

![Generated Code Quality Review Log Files — Screenshot By Author](https://blog.images.bornforthis.cn/docs-images/sha256/1e/1e115475a2f6fdb73cb1f68da04fa81af01cc95c7acbc485198d507781e229ae.png)

![Generated Logs for one of my old script that cartoonize an given image — Bandit vs Flake8 — Screenshot By Author](https://blog.images.bornforthis.cn/docs-images/sha256/3e/3e161113248151dcb574ec8143a09205e8caea8c4237f2644a933a07f27f7197.png)

## 3. DNSFetcher

Domain Name System (DNS) is the backbone of the internet, that translates human-readable domain names into IP addresses that machines use to communicate. Within DNS lie DNS records, vital pieces of information that define a domain’s configuration — such as its mail servers, IP addresses, and security settings.

These records play a crucial role in ensuring seamless connectivity and maintaining the integrity of online systems. However, DNS records are not just important for operations; they are a key focus in cybersecurity.

Monitoring DNS records can provide early indicators of malicious activity, as threat actors often manipulate them for phishing campaigns, data exfiltration, or malware distribution. Reviewing these records is especially critical when tracking suspicious domains, as changes to DNS configurations may signal potential threats or domain abuse.

This automation script is a valuable tool for reducing your workload. By taking a domain name as input, it automatically retrieves all associated DNS records, providing a complete overview of the domain’s configuration to help you analyze and monitor changes effortlessly.

```python
pip install dnspython termcolor
```

```python
import dns.resolver
from termcolor import colored  # For a colored console!!
def check_dns_records(domain):
    try:
        record_types = ['A', 'AAAA', 'MX', 'CNAME', 'TXT', 'NS', 'SOA']
        resolver = dns.resolver.Resolver()
        results = {}
        for record_type in record_types:
            try:
                answer = resolver.resolve(domain, record_type)
                results[record_type] = [str(rdata) for rdata in answer]
            except dns.resolver.NoAnswer:
                results[record_type] = []
            except dns.resolver.NXDOMAIN:
                results[record_type] = []
            except dns.resolver.NoNameservers:
                results[record_type] = []
            except Exception as e:
                results[record_type] = str(e)
        return results
    except Exception as e:
        return {'error': str(e)}

def display_results(domain, results):
    print("\n" + colored(f"DNS Records for {domain}", "cyan", attrs=["bold"]))
    print("=" * (len(f"DNS Records for {domain}") + 2))
    if 'error' in results:
        print(colored(f"Error: {results['error']}", "red"))
        return
    for record_type, record_data in results.items():
        if record_type == "A":
            record_title = "IPv4 Addresses"
        elif record_type == "AAAA":
            record_title = "IPv6 Addresses"
        elif record_type == "MX":
            record_title = "Mail Exchanger"
        elif record_type == "CNAME":
            record_title = "Canonical Name"
        elif record_type == "TXT":
            record_title = "Text Records"
        elif record_type == "NS":
            record_title = "Name Servers"
        elif record_type == "SOA":
            record_title = "Start of Authority"
        print(f"\n{colored(record_title, 'yellow', attrs=['bold'])}:")
        if record_data:
            for record in record_data:
                print(f"  - {colored(record, 'green')}")
        else:
            print(colored("  Not found", "red"))
    print("\n" + "=" * 40)
if __name__ == "__main__":
    domain = input("Enter domain to check DNS records: ").strip()
    results = check_dns_records(domain)
    display_results(domain, results)
```

![DNSFetcher Script Output — Screenshot By Author](https://blog.images.bornforthis.cn/docs-images/sha256/75/75325bd6eeb885ba73173285f2adb55c9f7a227b393dfdfd4b795b3d4766a38d.png)

## 4. Clipboard Manager 2.0 📋

Have you ever been overwhelmed by copied text, unable to track what you’ve pasted, or, worse, losing important snippets? Have you ever struggled with text in a non-native language, constantly visiting Google Translate for a quick conversion? Ever Thought of having a tool that captures everything you copy and effortlessly translates it into English?

This automation script is your clipboard assistant. It monitors all the text you copy and provides seamless translations. It harnesses the power of **Pyperclip** to capture copied data, Tkinter for a sleek, user-friendly interface, and **GoogleTranslate** to translate non-native copied text into English on the go, ensuring you stay organized and never lose track of important information.

```python
import tkinter as tk
from tkinter import ttk
import pyperclip 
from deep_translator import GoogleTranslator
from langdetect import detect

def detect_and_translate(text):
    try:
        # Detect and Translate if Not in English 
        detected_language = detect(text)
        print(f"Detected language: {detected_language}")
        if detected_language != 'en':
            translated_text = GoogleTranslator(source=detected_language, target='en').translate(text)
            print(f"Translated text: {translated_text}")
            return translated_text
        else:
            print("The text is already in English.")
            return text
    except Exception as e:
        print(f"Error: {e}")
        return text
## Update and Append GUI with Newly Copied Text
def update_listbox():
    new_item = pyperclip.paste()
    new_item = detect_and_translate(new_item)
    if new_item not in X:
        X.append(new_item)
        listbox.insert(tk.END, new_item)
        listbox.insert(tk.END, "----------------------")
    listbox.yview(tk.END)
    root.after(1000, update_listbox)
## Checks for Copied Contet
def copy_to_clipboard(event):
    selected_item = listbox.get(listbox.curselection())
    if selected_item:
        pyperclip.copy(selected_item)
X = []
root = tk.Tk()
root.title("Clipboard Manager")
root.geometry("500x500")
root.configure(bg="#f0f0f0")
frame = tk.Frame(root, bg="#f0f0f0")
frame.pack(padx=10, pady=10)
label = tk.Label(frame, text="Clipboard Contents:", bg="#f0f0f0")
label.grid(row=0, column=0)
scrollbar = tk.Scrollbar(root)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
listbox = tk.Listbox(root, width=150, height=150, yscrollcommand=scrollbar.set)
listbox.pack(pady=10)
scrollbar.config(command=listbox.yview)
update_listbox()
listbox.bind("<Double-Button-1>", copy_to_clipboard)
root.mainloop()
```

![Clipboard 2.0 Output — GIF Created By Author](https://blog.images.bornforthis.cn/docs-images/sha256/ef/eff16df2b03fa62d5d7776c24617be8d6f76024a25e40f11c8edbaab4190ee4d.gif)

### Script Applications —

- Capturing and categorizing research notes copied from various sources.
- Extending the script can capture important calendar events, reminders, passwords, etc.

> “Don’t forget to Leave Your Reaction or Suggestion Below!!!”

## 5. Memoir

In our fast-paced world, capturing fleeting ideas, reminders, or thoughts often feels like a race against time. Voicenotes have become an indispensable tool for people juggling busy schedules, creative brainstorming sessions, or personal reflections. Whether it’s a flash of inspiration during your commute or a to-do list for the day, Voicenotes offers a quick, hands-free way to record and revisit important moments without the hassle of writing things down.

![Even Joe the Monkey uses VoiceNotes… What’s Stopping You ??](https://blog.images.bornforthis.cn/docs-images/sha256/21/21bc63babb8e6f1fc5364783f9d116ef9368c76a2a2a36bd31b82515ed156f75.gif)

However, managing Voicenotes can be tricky. Manually creating and organizing them often leads to cluttered storage, lost files, or missed insights. The process can feel frustrating when you’re already pressed for time. It’s easy to forget to save those notes securely or structure them in a way that makes finding them later simple and efficient.

That’s why I developed Memoir, a Python automation script that simplifies the entire process by seamlessly creating, organizing, and saving VoiceNotes for you.

```bash
brew install faudio
pip install --upgrade setuptools wheel
pip install pipwin
pip install pyaudio
pip install playsound
```

```python
import tkinter as tk
from tkinter import messagebox
import pyaudio
import wave
import os
from datetime import datetime
from playsound import playsound

# Ensure directory exists for recordings
os.makedirs("assets/recordings", exist_ok=True)

# Initialize the main window
root = tk.Tk()
root.title("Memoir 🎙️")
root.geometry("550x500")
root.config(bg="#F1F5F9")  # Background color

# Initialize notes list
notes = []
def record_audio(duration):
    fs = 48000  # Sample rate
    channels = 2  # Stereo
    chunk = 1024  # Size of each audio chunk
    
    # Filename for saving your voicenotes
    filename = f"assets/recordings/AudioNote_{datetime.now().strftime('%Y%m%d_%H%M%S')}.wav"
    p = pyaudio.PyAudio()

    # Open the stream for audio recording
    stream = p.open(format=pyaudio.paInt16,  # Audio format (16-bit)
                    channels=channels,
                    rate=fs,
                    input=True,
                    frames_per_buffer=chunk)
    frames = []
    # Record audio in chunks
    for _ in range(0, int(fs / chunk * duration)):
        data = stream.read(chunk)
        frames.append(data)
    # Stop recording
    stream.stop_stream()
    stream.close()
    p.terminate()
    
    # Save audio to a .wav file
    with wave.open(filename, 'wb') as wf:
        wf.setnchannels(channels)
        wf.setsampwidth(p.get_sample_size(pyaudio.paInt16))
        wf.setframerate(fs)
        wf.writeframes(b''.join(frames))
   
    # Add recording to the list
    notes.append(filename)
    note_list.insert(tk.END, os.path.basename(filename))

def play_audio():
    selected_index = note_list.curselection()
    if selected_index:
        filename = notes[selected_index[0]]
        # Use playsound to play the selected audio file
        playsound(filename)
    else:
        messagebox.showwarning("No Selection", "Please select a note to play.")

# Load any existing notes
for file in os.listdir("assets/recordings"):
    if file.endswith(".wav"):
        notes.append(f"assets/recordings/{file}")

# Set up the basic UI elements
header_frame = tk.Frame(root, bg="#4C6EF5", pady=20)
header_frame.pack(fill="x")
header_label = tk.Label(header_frame, text="Memoir🎙️", bg="#4C6EF5", fg="white", font=("Arial", 20, "bold"))
header_label.pack()
tk.Label(root, text="Record for (seconds):", bg="#F1F5F9", font=("Arial", 12)).pack(pady=(10, 5))
button_frame = tk.Frame(root, bg="#F1F5F9")
button_frame.pack()

# Record duration buttons with improved colors
record_buttons = [("5s", 5),("10s", 10),("15s", 15)]
for text, duration in record_buttons:
    button = tk.Button(button_frame, text=text, command=lambda d=duration: record_audio(d), bg="#5CBBF6", fg="white", font=("Arial", 12, "bold"), width=8, relief="flat")
    button.grid(row=0, column=record_buttons.index((text, duration)), padx=15, pady=10)
tk.Label(root, text="Recorded Notes:", bg="#F1F5F9", font=("Arial", 12)).pack(pady=(15, 5))
note_list = tk.Listbox(root, height=8, font=("Arial", 12), bg="#FFFFFF", fg="#333333", selectmode=tk.SINGLE, bd=2, relief="groove")
note_list.pack(padx=20, pady=10, fill=tk.BOTH)

# Populate the notes list box
for note in notes:
    note_list.insert(tk.END, os.path.basename(note))

# Playback button with a sleek design
play_button = tk.Button(root, text="Play Selected Note", command=play_audio, bg="#FF6F61", fg="white", font=("Arial", 12, "bold"), width=20, relief="flat")
play_button.pack(pady=(15, 5))

# Footer with app description
footer_frame = tk.Frame(root, bg="#4C6EF5", pady=10)
footer_frame.pack(fill="x", side="bottom")
footer_label = tk.Label(footer_frame, text="A Tool for managing VoiceNotes Effortlessly!!", bg="#4C6EF5", fg="white", font=("Arial", 10))
footer_label.pack()
root.mainloop()
```

![Memoir GUI — Screenshot By Author](https://blog.images.bornforthis.cn/docs-images/sha256/07/07e92faf0b4be8e176ea779ff8dd863d1a56fe977dc79999bcafddfea3e4176a.png)

Whether you’re a student, a professional, or just someone who loves to capture ideas on the go, Memoir makes recording your thoughts effortless and stress-free.

> Congrats!!
>
> You have reached halfway through this amazing journey of Automation Scripts.
>
> If u liked what you read till now, don’t forget to leave a 👋

It’s time for a crazy Python Feature!!!

Did you know you can create a File Sharing Server in Python with just one line?

Try: `python -m http.server 5000` 🎉

## 6. FilterText

Handling social media content and gaining meaningful insights can feel overwhelming, especially when dealing with a lot of text data.

That’s where this automation script can step in and save you time. Using the power of Natural Language Processing (NLP), it filters your text and automatically pulls out key elements like hashtags, mentions, and keywords, so you don’t have to go through it all manually and write tons of code.

It not only extracts Key information but also cleans data by removing unnecessary noise for you!!

```python
import re
import pandas as pd
import streamlit as st
import matplotlib.pyplot as plt
import seaborn as sns
from collections import Counter

# Define regex patterns for various filters
patterns = {
    'emails': r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
    'mentions': r'@\w+',
    'hashtags': r'#\w+',
    'links': r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+',
    'html_tags': r'<[^>]+>',
    'phone_numbers': r'\+?\d{1,3}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}',
    'dates': r'\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b|\b\d{4}[/-]\d{1,2}[/-]\d{1,2}\b',
    'currency': r'\$\d+(?:\.\d{2})?|€\d+(?:\.\d{2})?|£\d+(?:\.\d{2})?|USD\s\d+(?:\.\d+)?',
    'emojis': r'[\U0001F600-\U0001F64F\U0001F300-\U0001F5FF\U0001F680-\U0001F6FF\U0001F700-\U0001F77F\U0001F900-\U0001F9FF]+',
}

## Function for preprocessing 
def process_text(text, filters, mode):
    if mode == 'extract':
        return {filter_type: re.findall(patterns[filter_type], text) for filter_type in filters}
    elif mode == 'clean':
        cleaned_text = text
        for filter_type in filters:
            cleaned_text = re.sub(patterns[filter_type], '', cleaned_text)
        return {'cleaned_text': cleaned_text}

# Plot Filtered Data
def plot_data(data, title):
    # Count occurrences of each item and get the top 15
    item_counts = Counter(data).most_common(15)
    items, counts = zip(*item_counts)
    # Create a bar plot
    plt.figure(figsize=(10, 5))
    sns.barplot(x=list(items), y=list(counts), palette='viridis')
    plt.title(title)
    plt.xlabel('Items')
    plt.ylabel('Counts')
    plt.xticks(rotation=45)
    st.pyplot(plt)

## Streamlit App Designing
st.title("Text Filter and Cleaner Web App")
uploaded_file = st.file_uploader("Upload a CSV file", type='csv')
if uploaded_file is not None:
    df = pd.read_csv(uploaded_file)
    st.write("Data Preview:")
    st.dataframe(df)
    selected_column = st.selectbox("Select a column to process:", df.columns.tolist())
    st.sidebar.header("Mode Selection")
    mode = st.sidebar.selectbox("Select mode:", ['extract', 'clean'])
    st.sidebar.header("Filter Options")
    selected_filters = st.sidebar.multiselect("Select filters to apply:", list(patterns.keys()))
    if st.button("Process Selected Column"):
        if selected_column and not df[selected_column].isnull().all():
            text_input = df[selected_column].astype(str).str.cat(sep=' ')
            processed_info = process_text(text_input, selected_filters, mode)
            if mode == 'extract':
                st.subheader("Extracted Information")
                for filter_type in selected_filters:
                    data = processed_info.get(filter_type, [])
                    if data:
                        plot_data(data, f'Top 15 {filter_type.capitalize()} Used')
                st.dataframe(pd.DataFrame.from_dict(processed_info, orient='index').transpose())
            elif mode == 'clean':
                st.subheader("Cleaned Text")
                st.write(processed_info['cleaned_text'])
        else:
            st.error("Please select a valid column with data.")
else:
    text_input = st.text_area("Enter text to filter or clean:", height=200)
    if st.button("Process Text"):
        if text_input:
            processed_info = process_text(text_input, selected_filters, mode)
            st.subheader("Processed Information")
            if mode == 'extract':
                for filter_type in selected_filters:
                    data = processed_info.get(filter_type, [])
                    if data:
                        plot_data(data, f'Top 15 {filter_type.capitalize()} Used')
                st.dataframe(pd.DataFrame.from_dict(processed_info, orient='index').transpose())
            elif mode == 'clean':
                st.write(processed_info['cleaned_text'])
        else:
            st.error("Please enter text to process.")
```

![Automation Script Output GIF — GIF Created By Author](https://blog.images.bornforthis.cn/docs-images/sha256/24/2493ceabae3a17478f9914abe12d64e2ce5edba3997649764910e6d3489a8267.gif)

### Script Applications-

- With some tweaks, extra functions, and graphs, you can turn this into a full-text analysis app.
- Perfect for quickly gaining insights from text data while working on NLP projects.

## 7. OrganizeIT 3.0

Is your download folder a chaotic mess?
Do you struggle to locate files when you need them the most?
Have you tried organizing your directories only to give up halfway through?

This automation script can revolutionize how you manage your files in just minutes. Simply provide the path to the folder you want to organize, and the script will automatically sort all your files into folders based on the dates they were last modified.

**But wait, there’s more!** This script ensures each file is placed in its corresponding folder, maintaining the original order while creating a logical structure that’s easy to navigate.

```python
import os
import shutil
from datetime import datetime

def organize_files_by_date(directory):
    # Create a list of all files in the directory
    all_files = [os.path.join(directory, f) for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

    # Iterate over each file
    for file_path in all_files:
        # Get the modification date of the file
        modification_time = os.path.getmtime(file_path)
        modification_date = datetime.fromtimestamp(modification_time).strftime('%Y-%m-%d')

        # Create a directory for the modification date if it doesn't exist
        date_directory = os.path.join(directory, modification_date)
        if not os.path.exists(date_directory):
            os.makedirs(date_directory)

        # Move the file to the new directory
        shutil.move(file_path, os.path.join(date_directory, os.path.basename(file_path)))

    print("Files organized by date successfully!")

if __name__ == "__main__":
    # Specify the directory to organize
    directory_to_organize = "C:\\Users\\abhay\\OneDrive\\Desktop\\TEST"  # Change this to your directory path
    organize_files_by_date(directory_to_organize)
```

![Before vs After Automation Script Run — Screenshots By Author](https://blog.images.bornforthis.cn/docs-images/sha256/3b/3bbab4e25bd27d3dd5114c03a94c4d38931f44bdbfc697d015192fe32e871e6b.png)

## 8. WorkWatch 👀

**An App For Tracking Your Spend Time On Different Tasks.**

Managing tasks effectively requires more than just good intentions — it demands an accurate understanding of how time is spent. Time tracking helps you uncover patterns, optimize workflows, and stay accountable. It’s a key tool for turning your efforts into measurable progress and ensuring every minute counts.

Manually tracking tasks and time can quickly become overwhelming. Remembering start times, calculating durations, and maintaining logs disrupts your workflow and introduces room for error. The outcome? A productivity tool that turns into just another task on your list.

This **automation script** eliminates these headaches with a simple, intuitive solution. It automates the **tracking process, allowing you to set custom task durations, monitor progress in real-time, and automatically generate detailed logs, so you can focus on what truly matters.**

```python
import tkinter as tk
from tkinter import ttk, messagebox
import csv
import time
from datetime import datetime

class TaskTrackerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("WorkWatch: An App For Tracking Your Spend Time")
        self.task_name_var = tk.StringVar()
        self.probable_time_var = tk.IntVar()
        self.start_time = None
        self.task_name = None
        self.style = ttk.Style()
        self.style.configure("TLabel", font=("Helvetica", 12))
        self.style.configure("TButton", font=("Helvetica", 12, 'bold'), padding=6)
        ttk.Label(root, text="Task Name:", foreground="blue").grid(row=0, column=0, padx=10, pady=10)
        self.task_name_entry = ttk.Entry(root, textvariable=self.task_name_var, width=30, font=("Helvetica", 12))
        self.task_name_entry.grid(row=0, column=1, padx=10, pady=10)
        ttk.Label(root, text="Probable Time (minutes):", foreground="blue").grid(row=1, column=0, padx=10, pady=10)
        self.probable_time_entry = ttk.Entry(root, textvariable=self.probable_time_var, width=30, font=("Helvetica", 12))
        self.probable_time_entry.grid(row=1, column=1, padx=10, pady=10)
        self.start_button = ttk.Button(root, text="Start Task", command=self.start_task, style="TButton")
        self.start_button.grid(row=2, column=0, padx=10, pady=10)
        self.stop_button = ttk.Button(root, text="Stop Task", command=self.stop_task, state=tk.DISABLED, style="TButton")
        self.stop_button.grid(row=2, column=1, padx=10, pady=10)
        self.reset_button = ttk.Button(root, text="Reset", command=self.reset_task, style="TButton")
        self.reset_button.grid(row=3, column=0, padx=10, pady=10)
        self.view_logs_button = ttk.Button(root, text="View Time Logs", command=self.view_time_logs, style="TButton")
        self.view_logs_button.grid(row=3, column=1, padx=10, pady=10)
        self.timer_label = ttk.Label(root, text="00:00:00", font=("Helvetica", 18, 'bold'), foreground="green")
        self.timer_label.grid(row=4, column=0, columnspan=2, padx=10, pady=20)

        with open("time_log.csv", "a", newline="") as file:
            writer = csv.writer(file)
            if file.tell() == 0:
                writer.writerow(['Task Name', 'Probable Time (minutes)', 'Start Time', 'End Time', 'Time Spent (minutes)', 'Time Difference (minutes)'])
        self.root.mainloop()

    def start_task(self):
        self.task_name = self.task_name_var.get()
        probable_time = int(self.probable_time_var.get())
        if self.task_name:
            self.start_button.config(state=tk.DISABLED)
            self.stop_button.config(state=tk.NORMAL)
            self.start_time = time.time()
            self.update_timer()

    def stop_task(self):
        self.stop_button.config(state=tk.DISABLED)
        self.start_button.config(state=tk.NORMAL)
        end_time = time.time()
        time_spent = end_time - self.start_time
        minutes_spent = round(time_spent / 60, 2)
        self.log_time(minutes_spent)
        self.start_time = None

    def update_timer(self):
        if self.start_time:
            current_time = time.time()
            time_spent = current_time - self.start_time
            m, s = divmod(time_spent, 60)
            h, m = divmod(m, 60)
            time_spent_str = "%02d:%02d:%02d" % (h, m, s)
            self.timer_label.config(text=time_spent_str)
            self.root.after(1000, self.update_timer)

    def log_time(self, time_spent=0):
        end_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        time_diff = round(time_spent - self.probable_time_var.get(), 2)
        with open("time_log.csv", "a", newline="") as file:
            writer = csv.writer(file)
            writer.writerow([self.task_name, self.probable_time_var.get(), self.start_time, end_time, time_spent, time_diff])

    def reset_task(self):
        self.task_name_var.set("")
        self.probable_time_var.set("")
        self.timer_label.config(text="00:00:00")
        self.start_time = None
        self.start_button.config(state=tk.NORMAL)
        self.stop_button.config(state=tk.DISABLED)

    def view_time_logs(self):
        try:
            with open("time_log.csv", "r") as file:
                reader = csv.reader(file)
                logs = list(reader)
            if len(logs) > 1:  
                log_window = tk.Toplevel(self.root)
                log_window.title("Time Logs")
                text_area = tk.Text(log_window, height=20, width=120, font=("Helvetica", 12))
                text_area.pack(padx=10, pady=10)
                for log in logs[1:]:  
                    task_name, probable_time, start_time, end_time, time_spent, time_diff = log
                    log_entry = f"Task Name: {task_name}, Probable Time: {probable_time} min, Time Spent: {time_spent} min, Time Diff: {time_diff} min\n"
                    if float(time_diff) < 0:
                        text_area.insert(tk.END, log_entry, "green")
                    else:
                        text_area.insert(tk.END, log_entry, "red")
                text_area.config(state=tk.DISABLED)
                text_area.tag_config("green", foreground="green")
                text_area.tag_config("red", foreground="red")
            else:
                messagebox.showinfo("No Logs", "No task logs found.")
        except Exception as e:
            messagebox.showerror("Error", f"Could not read time logs: {e}")

if __name__ == "__main__":
    root = tk.Tk()
    app = TaskTrackerApp(root)
```

![WorkWatch Output — GIF Created By Author](https://blog.images.bornforthis.cn/docs-images/sha256/5f/5f6ce1fb94abf662af2b84c18233ae7e00e6ae0ed1d8767b96dbfdd2b9fc0d49.gif)

![WorkWatch GUI — Screenshot By Author](https://blog.images.bornforthis.cn/docs-images/sha256/93/9302553d7333ae2e92d17fbfc3fdca3947e51be0d3886c22c0bd2ef179b61cfa.png)

![Sample Generate WorkWatch Time Logs — Screenshot By Author](https://blog.images.bornforthis.cn/docs-images/sha256/69/69fa573e1e8464bc3c552761b4c23864fee4b9ad3b10e3de948f9f4db006f13f.png)

## 9. WordTracker

Are you a fast typist but struggle to track your productivity? Do you wish you could see how much you’ve typed in real-time and how often you make mistakes? Have you been curious about which words you use most often during your writing sessions?

This automation script tracks your word count as you type, counting every spacebar press as a new word while monitoring backspaces to track corrections. Not only does it show your progress with an up-to-the-minute word count, but it also notifies you when you hit major milestones like 500 or 1000 words — perfect for keeping you motivated.

Plus, the app provides insightful stats on your writing habits, including the most common words you’ve typed and the number of backspaces you’ve hit. Get ready to optimize your writing sessions and make every word count!

```python
import tkinter as tk
from tkinter import messagebox
from pynput import keyboard
import collections
import threading

class WordCounterApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Word Counter")
        self.create_widgets()
        self.word_count = 0
        self.backspace_count = 0
        self.words = collections.Counter()
        self.current_input = ""
        self.reached_milestones = set()
        self.listener_thread = threading.Thread(target=self.start_key_listener)
        self.listener_thread.start()
    def create_widgets(self):
        self.word_count_label = tk.Label(self.root, text="Word Counter: 0", font=("Helvetica", 16, "bold"), bg="#f0f0f0", fg="#333")
        self.word_count_label.pack(pady=20)
        self.quit_button = tk.Button(self.root, text="Quit", command=self.quit_application, font=("Helvetica", 12, "bold"), bg="#ff6347", fg="white", relief="flat")
        self.quit_button.pack(pady=20)

    def start_key_listener(self):
        with keyboard.Listener(on_press=self.on_keyboard_event) as listener:
            listener.join()

    def on_keyboard_event(self, key):
        try:
            if key == keyboard.Key.space:  
                if self.current_input.strip():  
                    self.word_count += 1
                    self.words[self.current_input.strip().lower()] += 1
                    self.current_input = ""  
                    self.update_word_count_label()
            elif key == keyboard.Key.backspace:  
                self.backspace_count += 1
                if self.current_input:
                    self.current_input = self.current_input[:-1]  
            else:
                char = getattr(key, 'char', None)
                if char and char.isalnum():
                    self.current_input += char
            self.check_word_milestones()
        except AttributeError:
            pass

    def update_word_count_label(self):
        self.word_count_label.config(text=f"Word Counter: {self.word_count}")

    def check_word_milestones(self):
        # Define milestones
        milestones = [500, 1000, 1500, 2000]
        for milestone in milestones:
            if self.word_count == milestone and milestone not in self.reached_milestones:
                self.show_notification(milestone)
                self.reached_milestones.add(milestone)  

    def show_notification(self, milestone):
        messagebox.showinfo("Milestone Reached", f"Congratulations! You've written {milestone} words!")

    def quit_application(self):
        # Stop listener gracefully and show stats window
        self.show_stats_window()

    def show_stats_window(self):
        # Create a new Tkinter window to show the stats
        stats_window = tk.Toplevel(self.root)
        stats_window.title("Session Stats")
        stats_window.config(bg="#f0f0f0")
        # Set window size
        stats_window.geometry("350x300")
        # Display backspace count
        backspace_label = tk.Label(stats_window, text=f"Backspace pressed: {self.backspace_count}", font=("Helvetica", 14), bg="#f0f0f0", fg="#555")
        backspace_label.pack(pady=10)
        # Display top 10 most dominant words
        dominant_words_label = tk.Label(stats_window, text="Most Dominant Words (Top 10):", font=("Helvetica", 14, "bold"), bg="#f0f0f0", fg="#555")
        dominant_words_label.pack(pady=10)
        top_words = self.words.most_common(10)
        for word, count in top_words:
            word_label = tk.Label(stats_window, text=f"{word}: {count}", font=("Helvetica", 12), bg="#f0f0f0", fg="#333")
            word_label.pack(pady=3)
        # Add scrollbar to stats window
        canvas = tk.Canvas(stats_window, bg="#f0f0f0")
        scrollbar = tk.Scrollbar(stats_window, orient="vertical", command=canvas.yview)
        canvas.configure(yscrollcommand=scrollbar.set)
        scrollbar.pack(side="right", fill="y")
        canvas.pack(side="left", fill="both", expand=True)
        # Add a frame to contain the labels inside the canvas
        frame = tk.Frame(canvas, bg="#f0f0f0")
        canvas.create_window((0, 0), window=frame, anchor="nw")
        # Update scroll region
        frame.update_idletasks()
        canvas.config(scrollregion=canvas.bbox("all"))

if __name__ == "__main__":
    root = tk.Tk()
    app = WordCounterApp(root)
    root.mainloop()
```

![WordTracker Script Output — 50 Word Milestone limit — GIF By Author](https://blog.images.bornforthis.cn/docs-images/sha256/fe/fef43bef0cf6e0998e5161bc12e02fb4d9d0b9b39472bacdd38ae369bacd2ba6.gif)

“Don’t forget to Clap 👋 If you liked the Article.”

“ Your claps does matter to me.”

## 10. PomodoroPro ⏱️

Have you ever heard of the Pomodoro Technique? The Pomodoro Technique is a productivity method developed by Francesco Cirillo in the late 1980s. It’s based on the idea of breaking work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are known as “pomodoros” (Italian for “tomato,” named after the tomato-shaped timer Cirillo used).

![You can be productive tooo….. Just use PomodoroPro 😎- TenorGIF](https://blog.images.bornforthis.cn/docs-images/sha256/4e/4eafcc03c1676cf6b36a4a4b9b96a1353e689f4bb1dfb7db06243473f2a19a7c.gif)

I’ve personally used this technique for a while by setting up an alarm or timer for 25 minutes while working on long projects. However, I often found myself skipping the break, as nothing was forcing me to step away from my work. So, I decided to create a solution to this problem: an automation script that not only keeps track of the Pomodoro timer but also locks my device when the timer runs out, ensuring that I’m forced to take a break.

This Python automation script is a simple yet **effective GUI that runs a Pomodoro (typically 25 minutes), and once the timer hits zero, it automatically locks my device**, forcing me to take that much-needed break!

I’ve been using it for the past month, and I can confidently say it has significantly improved both my productivity and my sitting habits.

```python
import tkinter as tk
import time
import ctypes
import os
from threading import Timer

class PomodoroTimer:
    def __init__(self, root):
        self.root = root
        self.root.title("Pomodoro Timer")
        self.root.geometry("300x200")
        self.time_var = tk.StringVar()
        self.time_var.set("25:00")
        self.running = False
        self.paused = False
        self.remaining_time = 25 * 60  # 25 minutes
        
        self.label = tk.Label(root, textvariable=self.time_var, font=("Helvetica", 48))
        self.label.pack(pady=20)
        
        self.start_button = tk.Button(root, text="Start", command=self.start_timer)
        self.start_button.pack(side=tk.LEFT, padx=10)
        
        self.pause_button = tk.Button(root, text="Pause", command=self.pause_timer)
        self.pause_button.pack(side=tk.LEFT, padx=10)
        
        self.reset_button = tk.Button(root, text="Reset", command=self.reset_timer)
        self.reset_button.pack(side=tk.LEFT, padx=10)
    
    def update_time(self):
        if self.running:
            minutes, seconds = divmod(self.remaining_time, 60)
            self.time_var.set(f"{minutes:02}:{seconds:02}")
            if self.remaining_time > 0:
                self.remaining_time -= 1
                self.root.after(1000, self.update_time)
            else:
                self.running = False
                self.lock_screen()
    
    def start_timer(self):
        if not self.running:
            self.running = True
            self.paused = False
            self.update_time()
    
    def pause_timer(self):
        if self.running:
            self.running = False
            self.paused = True
    
    def reset_timer(self):
        self.running = False
        self.paused = False
        self.remaining_time = 25 * 60
        self.time_var.set("25:00")
    
    def lock_screen(self):
        if os.name == 'nt':  # Windows
            ctypes.windll.user32.LockWorkStation()
        elif os.name == 'posix':  # macOS and Linux
            # This is a placeholder, as locking the screen in macOS/Linux typically requires different handling
            # For macOS, use: os.system('/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend')
            # For Linux, use: os.system('gnome-screensaver-command --lock')
            print("Locking screen on macOS/Linux is not implemented in this script.")
    
if __name__ == "__main__":
    root = tk.Tk()
    app = PomodoroTimer(root)
    root.mainloop()
```

![A Sample Script Run using 5 Sec Pomodoro Timer — GIF Created By Author](https://blog.images.bornforthis.cn/docs-images/sha256/db/db2431af1eb1fa181852a3055dbbd20016bfffc4c99b818fd9829e6c8813a8ae.gif)







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

[.](https://medium.com/pythoneers/10-insanely-useful-automation-scripts-you-need-to-try-using-python-4fa538a9152b)







