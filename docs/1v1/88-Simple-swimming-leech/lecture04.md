---
title: 04-exam2 NYU Python
date: 2024-07-01 23:31:46
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
watermark: true
---

## 0. Link

- [https://classroom.github.com/a/u0XYC4go](https://classroom.github.com/a/u0XYC4go)

## 1. problem_1

::: tabs

@tab img

![](https://blog.images.bornforthis.cn/docs-images/sha256/64/64bc345a143c9e38b7d8b9faac972ea65d703188e8f047ee8594bbfaee6ef341.png)

@tab Text

Write a program in the file named `solution_1.py` that asks the user to enter two integers greater than or equal to 10. If, for either number, the user enters a response that is not an integer or is a negative number, print out the text, "Invalid number!" and do nothing further. Otherwise, if the user responds to either prompt with a number that is less than 10, print out the text, "Too small!", and do nothing further. Otherwise, if both numbers are valid, print out the text, "X + Y = Z", where X is replaced with the first number the user entered, Y is replaced with the second number the user entered, and Z is replaced with the sum of the two numbers.

Example runs:

```
Please enter an integer >= 10: blah
Invalid number!
```
```
Please enter an integer >= 10: 5
Too small!
```
```
Please enter an integer >= 10: 10
Please enter an integer >= 10: 5
Too small!
```
```
Please enter an integer >= 10: 15
Please enter an integer >= 10: 20
15 + 20 = 35
```

:::

## 2. Solution 1

::: code-tabs

@tab try-except

```python
# solution_1.py

def main():
    try:
        # 请求用户输入第一个整数
        x = int(input("Please enter an integer >= 10: "))
        if x < 0:
            print("Invalid number!")
            return

        # 检查第一个整数是否小于10
        if x < 10:
            print("Too small!")
            return

        # 请求用户输入第二个整数
        y = int(input("Please enter an integer >= 10: "))
        if y < 0:
            print("Invalid number!")
            return

        # 检查第二个整数是否小于10
        if y < 10:
            print("Too small!")
            return

        # 如果两个数都有效，打印它们的和
        print(f"{x} + {y} = {x + y}")

    except ValueError:
        # 如果输入不是整数
        print("Invalid number!")

if __name__ == "__main__":
    main()
```

@tab submit

```python
# solution_1.py

def main():
    # 请求用户输入第一个整数
    x_input = input("Please enter an integer >= 10: ")
    # 检查输入是否为数字，并且是非负数
    if not x_input.isdigit():
        print("Invalid number!")
        return

    # 将输入转换为整数
    x = int(x_input)

    # 检查第一个整数是否小于10
    if x < 10:
        print("Too small!")
        return

    # 请求用户输入第二个整数
    y_input = input("Please enter an integer >= 10: ")
    # 检查输入是否为数字，并且是非负数
    if not y_input.isdigit():
        print("Invalid number!")
        return

    # 将输入转换为整数
    y = int(y_input)

    # 检查第二个整数是否小于10
    if y < 10:
        print("Too small!")
        return

    # 如果两个数都有效，打印它们的和
    print(f"{x} + {y} = {x + y}")

if __name__ == "__main__":
    main()
```

:::

## 3. problem_2

::: tabs

@tab img

![](https://blog.images.bornforthis.cn/docs-images/sha256/df/dfb04738ff2cdc4ebfde1e203fd3b8be464870f8dcd2e241b041b5bdb6b43b2e.png)

@tab Text

Write a program in the file named `solution_2.py` that asks the user to enter an integer between 1 and 20, inclusive. If the user enters an invalid response, print out the text, "Invalid number!" and do nothing further. Otherwise, if the user's response is valid, print out the text, "Hello world!" the number of times indicated by the user's response. If the user's response was a number greater than 5, print the text, "Phew!" at the end.

Example runs:

```
Enter an integer between 1 and 20, inclusive: foobar
Invalid number!
```
```
Enter an integer between 1 and 20, inclusive: 2
Hello world!
Hello world!
```
```
Enter an integer between 1 and 20, inclusive: 6
Hello world!
Hello world!
Hello world!
Hello world!
Hello world!
Hello world!
Phew!
```

:::

## 4. Solution 2

::: code-tabs

@tab Code1

```python
# solution_2.py

def main():
    # 请求用户输入一个整数，介于1到20之间
    input_number = input("Enter an integer between 1 and 20, inclusive: ")

    # 检查输入是否为数字，并且在1到20之间
    if not input_number.isdigit():
        print("Invalid number!")
        return

    # 将输入转换为整数
    number = int(input_number)

    # 检查数字是否在1到20之间
    if not 1 <= number <= 20:
        print("Invalid number!")
        return

    # 打印 "Hello world!" 对应次数
    for _ in range(number):
        print("Hello world!")

    # 如果数字大于5，额外打印 "Phew!"
    if number > 5:
        print("Phew!")

if __name__ == "__main__":
    main()
```



:::

## 5. problem_3

::: tabs

@tab img

![](https://blog.images.bornforthis.cn/docs-images/sha256/4b/4bd73d8a6cbf0de4535fe52cc542046395d24a4cbed97ffd22c90d8a5732e6fa.png)

@tab Text

Write a program in the file named `solution_3.py` that asks the user to enter their birthdate in `yyyy/mm/dd` format. If the user enters a response that is not in the correct format or a birthdate that would mean the user is less than 0 or greater than 122 years old, print "Invalid date!" and repeat the process of asking the user for their birthdate and validating it until a correctly-formatted date is entered. Once a valid response has been entered, the program then outputs how old the user is in the format, "You are X years old!", where X is replaced with the user's current age in years.

Example runs:

```
Enter your birthdate (yyyy/mm/dd): foobar
Invalid date!
Enter your birthdate (yyyy/mm/dd): 13/6/1
Invalid date!
Enter your birthdate (yyyy/mm/dd): 2013/6/1
Invalid date!
Enter your birthdate (yyyy/mm/dd): 2013/06/01
You are 10 years old!
```
```
Enter your birthdate (yyyy/mm/dd): 2003/11/01
You are 19 years old!
```
```
Enter your birthdate (yyyy/mm/dd): 1975/10/03
You are 47 years old!
```

:::

## 6. Solution 3

::: code-tabs

@tab Code

```python
import datetime
import re


def calculate_age(birthdate):
    today = datetime.date.today()
    age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    return age


def is_valid_date(date_str):
    if not re.match(r"^\d{4}/\d{2}/\d{2}$", date_str):
        return False
    try:
        year, month, day = map(int, date_str.split('/'))
        birthdate = datetime.date(year, month, day)
        age = calculate_age(birthdate)
        if age < 0 or age > 122:
            return False
        return True
    except ValueError:
        return False


def main():
    while True:
        user_input = input("Enter your birthdate (yyyy/mm/dd): ")
        if is_valid_date(user_input):
            year, month, day = map(int, user_input.split('/'))
            birthdate = datetime.date(year, month, day)
            age = calculate_age(birthdate)
            print(f"You are {age} years old!")
            break
        else:
            print("Invalid date!")


if __name__ == "__main__":
    main()
```

@tab Code2

```python
import datetime
import re

def calculate_age(birthdate):
    today = datetime.date.today()
    age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    return age

def is_valid_date(date_str):
    if not re.match(r"^\d{4}/\d{2}/\d{2}$", date_str):
        return False
    year, month, day = map(int, date_str.split('/'))
    if not (1 <= month <= 12):
        return False
    if not (1 <= day <= 31):
        return False
    if month == 2:
        if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
            if day > 29:
                return False
        else:
            if day > 28:
                return False
    elif month in [4, 6, 9, 11] and day > 30:
        return False
    try:
        birthdate = datetime.date(year, month, day)
    except ValueError:
        return False
    age = calculate_age(birthdate)
    if age < 0 or age > 122:
        return False
    return True

def main():
    while True:
        user_input = input("Enter your birthdate (yyyy/mm/dd): ")
        if is_valid_date(user_input):
            year, month, day = map(int, user_input.split('/'))
            birthdate = datetime.date(year, month, day)
            age = calculate_age(birthdate)
            print(f"You are {age} years old!")
            break
        else:
            print("Invalid date!")

if __name__ == "__main__":
    main()
```

@tab Code3

```python
import datetime

def calculate_age(birthdate):
    today = datetime.date.today()
    age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    return age

def is_valid_date(date_str):
    # 检查字符串是否为10个字符长度，并且包含两个斜杠
    if len(date_str) != 10 or date_str[4] != '/' or date_str[7] != '/':
        return False
    
    parts = date_str.split('/')
    if len(parts) != 3:
        return False
    
    year, month, day = parts
    
    if not (year.isdigit() and month.isdigit() and day.isdigit()):
        return False
    
    year = int(year)
    month = int(month)
    day = int(day)
    
    if not (1 <= month <= 12):
        return False
    
    if not (1 <= day <= 31):
        return False
    
    if month == 2:
        if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
            if day > 29:
                return False
        else:
            if day > 28:
                return False
    elif month in [4, 6, 9, 11] and day > 30:
        return False
    
    try:
        birthdate = datetime.date(year, month, day)
    except ValueError:
        return False
    
    age = calculate_age(birthdate)
    if age < 0 or age > 122:
        return False
    
    return True

def main():
    while True:
        user_input = input("Enter your birthdate (yyyy/mm/dd): ")
        if is_valid_date(user_input):
            year, month, day = map(int, user_input.split('/'))
            birthdate = datetime.date(year, month, day)
            age = calculate_age(birthdate)
            print(f"You are {age} years old!")
            break
        else:
            print("Invalid date!")

if __name__ == "__main__":
    main()
```



:::



## 7. problem_4

::: tabs

@tab img

![](https://blog.images.bornforthis.cn/docs-images/sha256/80/8054b20ae73357f3d42bc9f0e5c95db84a161976040a89d8ad7f478e398d91c6.png)

@tab Text

The file named `nyc_jobs.csv` within the `data` subdirectory contains data about open jobs in NYC government, published on NYC's open data portal. Write a program in the file named `solution_4.py` that outputs the name of each unique government agency in the file and how many entry-level jobs are listed in that agency. Note that the agency name for each job (e.g. "DEPT OF HEALTH/MENTAL HYGIENE", "DEPT OF ENVIRONMENT PROTECTION", etc) is mentioned in the second field of each line, and the career level (e.g. "Entry-Level", "Experienced (non-manager)", "Manager", etc) is mentioned in the third field. Ignore the header line of the file and ignore the capitalization of the agency names in the file when performing your analysis, but make sure all names are uppercase in the final output and the text is neatly aligned into two columns, where the agency names are left-aligned and the numbers are right-aligned. The amount of space between the two columns is up to you.

Example run (numbers are not correct and order is not important):

```
DEPT OF HEALTH/MENTAL HYGIENE        121
DEPT OF ENVIRONMENT PROTECTION        62
DEPT OF PARKS & RECREATION            55
POLICE DEPARTMENT                    401
```

... and so on for all agencies...

@tab nyc_jobs.csv



:::

## 8. Solution 4

::: code-tabs

@tab Code1

```python
import csv


def main():
    file_path = './data/nyc_jobs.csv'
    entry_level_jobs = {}

    with open(file_path, newline='', encoding='utf-8') as file:
        reader = csv.reader(file)
        next(reader)  # Skip the header
        for row in reader:
            agency = row[1].strip().upper()  # Agency name in uppercase
            career_level = row[2].strip()  # Career level
            if career_level == 'Entry-Level':
                if agency not in entry_level_jobs:
                    entry_level_jobs[agency] = 0
                entry_level_jobs[agency] += 1

    # Print results
    max_agency_length = max(len(agency) for agency in entry_level_jobs)
    for agency, count in sorted(entry_level_jobs.items()):
        print(f"{agency.ljust(max_agency_length)} {count:>5}")


if __name__ == '__main__':
    main()
```

@tab Code2

```python

def main():
    file_path = './data/nyc_jobs.csv'
    entry_level_jobs = {}

    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
        for line in lines[1:]:  # Skip the header
            columns = line.strip().split(',')
            agency = columns[1].strip().upper()  # Agency name in uppercase
            career_level = columns[2].strip()  # Career level
            if career_level == 'Entry-Level':
                if agency not in entry_level_jobs:
                    entry_level_jobs[agency] = 0
                entry_level_jobs[agency] += 1

    # Print results
    max_agency_length = max(len(agency) for agency in entry_level_jobs)
    for agency, count in sorted(entry_level_jobs.items()):
        print(f"{agency.ljust(max_agency_length)} {count:>5}")

if __name__ == '__main__':
    main()
```

@tab Code3

```python
def main():
    file_path = './data/nyc_jobs.csv'
    entry_level_jobs = {}

    file = open(file_path, 'r', encoding='utf-8')
    lines = file.readlines()
    for line in lines[1:]:
        columns = line.strip().split(',')
        agency = columns[1].strip().upper()
        career_level = columns[2].strip()
        if career_level == 'Entry-Level':
            if agency not in entry_level_jobs:
                entry_level_jobs[agency] = 0
            entry_level_jobs[agency] += 1

    max_agency_length = max(len(agency) for agency in entry_level_jobs)
    for agency, count in sorted(entry_level_jobs.items()):
        print(f"{agency.ljust(max_agency_length)} {count:>5}")


if __name__ == '__main__':
    main()
```

@tab Code4

```python
def main():
    file_path = './data/nyc_jobs.csv'
    entry_level_jobs = {}

    file = open(file_path, 'r', encoding='utf-8')
    lines = file.readlines()
    for line in lines[1:]:
        columns = line.strip().split(',')
        agency = columns[1].strip().upper()
        career_level = columns[2].strip()
        if career_level == 'Entry-Level':
            if agency not in entry_level_jobs:
                entry_level_jobs[agency] = 0
            entry_level_jobs[agency] += 1

    # 计算每个 agency 的长度
    agency_lengths = [len(agency) for agency in entry_level_jobs]

    # 找到最大长度
    max_agency_length = max(agency_lengths)

    for agency, count in sorted(entry_level_jobs.items()):
        print(f"{agency.ljust(max_agency_length)} {count:>5}")


if __name__ == '__main__':
    main()
```

@tab Code5

```python
def main():
    file_path = './data/nyc_jobs.csv'
    entry_level_jobs = {}

    file = open(file_path, 'r', encoding='utf-8')
    lines = file.readlines()
    for line in lines[1:]:
        columns = line.strip().split(',')
        agency = columns[1].strip().upper()
        career_level = columns[2].strip()
        if career_level == 'Entry-Level':
            if agency not in entry_level_jobs:
                entry_level_jobs[agency] = 0
            entry_level_jobs[agency] += 1

    # 计算每个 agency 的长度并找到最大长度
    max_agency_length = 0
    for agency in entry_level_jobs:
        agency_length = len(agency)
        if agency_length > max_agency_length:
            max_agency_length = agency_length

    # 手动排序 entry_level_jobs 的 items
    sorted_items = []
    for agency in entry_level_jobs:
        sorted_items.append((agency, entry_level_jobs[agency]))

    # 手动排序
    for i in range(len(sorted_items)):
        for j in range(i + 1, len(sorted_items)):
            if sorted_items[i][0] > sorted_items[j][0]:
                sorted_items[i], sorted_items[j] = sorted_items[j], sorted_items[i]

    # 输出结果
    for agency, count in sorted_items:
        print(f"{agency.ljust(max_agency_length)} {count:>5}")


if __name__ == '__main__':
    main()
```

@tab Code6

```python
def main():
    file_path = './data/nyc_jobs.csv'
    entry_level_jobs = {}

    file = open(file_path, 'r', encoding='utf-8')
    lines = file.readlines()
    for line in lines[1:]:
        columns = line.strip().split(',')
        agency = columns[1].strip().upper()
        career_level = columns[2].strip()
        if career_level == 'Entry-Level':
            if agency not in entry_level_jobs:
                entry_level_jobs[agency] = 0
            entry_level_jobs[agency] += 1

    # 计算每个 agency 的长度并找到最大长度
    max_agency_length = 0
    for agency in entry_level_jobs:
        agency_length = len(agency)
        if agency_length > max_agency_length:
            max_agency_length = agency_length

    # 手动排序 entry_level_jobs 的 items
    sorted_items = []
    for agency in entry_level_jobs:
        sorted_items.append((agency, entry_level_jobs[agency]))

    # 手动排序
    for i in range(len(sorted_items)):
        for j in range(i + 1, len(sorted_items)):
            if sorted_items[i][0] > sorted_items[j][0]:
                sorted_items[i], sorted_items[j] = sorted_items[j], sorted_items[i]

    # 输出结果
    # for agency, count in sorted_items:
    #     print(f"{agency.ljust(max_agency_length)} {count:>5}")
    for agency, count in sorted_items:
        formatted_agency = agency + ' ' * (max_agency_length - len(agency))
        print(f"{formatted_agency} {count:>5}")

if __name__ == '__main__':
    main()
```

@tab Code7

```python
def main():
    file_path = './data/nyc_jobs.csv'
    entry_level_jobs = {}

    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
        for line in lines[1:]:
            columns = line.strip().split(',')
            agency = columns[1].strip().upper()
            career_level = columns[2].strip()
            if career_level == 'Entry-Level':
                if agency not in entry_level_jobs:
                    entry_level_jobs[agency] = 0
                entry_level_jobs[agency] += 1

    # 计算每个 agency 的长度并找到最大长度
    max_agency_length = 0
    for agency in entry_level_jobs:
        agency_length = len(agency)
        if agency_length > max_agency_length:
            max_agency_length = agency_length

    # 手动排序 entry_level_jobs 的 items
    sorted_items = []
    for agency in entry_level_jobs:
        sorted_items.append((agency, entry_level_jobs[agency]))

    # 手动排序
    for i in range(len(sorted_items)):
        for j in range(i + 1, len(sorted_items)):
            if sorted_items[i][0] > sorted_items[j][0]:
                sorted_items[i], sorted_items[j] = sorted_items[j], sorted_items[i]

    # 输出结果
    for agency, count in sorted_items:
        formatted_agency = agency + ' ' * (max_agency_length - len(agency))
        print(f"{formatted_agency} {count:>5}")


if __name__ == '__main__':
    main()
```





:::

## 9. problem_5

::: tabs

@tab img

![](https://blog.images.bornforthis.cn/docs-images/sha256/b0/b0069cce21b9d0855558430e8a61e5a76bed9f39103e0a68a781037211b43d3e.png)

@tab Text

Write a program in the file named `solution_5.py` that reads the data about people from the file named `people.csv` in the `data` subdirectory into a list of dictionaries, where each dictionary represents a person, and asks the user to enter a name. If the name entered by the user is not found in the data, the program should print out the text, "Name not found!" and do nothing further. If the name entered by the user is found in the data, the program should print out the name, country, and email address of the person whose name was entered by the user. The capitalization of the name in the data should not matter in the match. The capitalization of the name and country should be properly capitalized in the output. The email address should be printed in all lowercase letters.

Example runs:

```
Enter a name: Foo Bar
Name not found!
```
```
Enter a name: nevins bussel
Name: Nevins Bussel
Country: Indonesia
Email: nbussel1@1688.com
```

:::

## 10. Solution 5

::: code-tabs

@tab Code1

```python
import csv
import os


def capitalize_name(name):
    return ' '.join([part.capitalize() for part in name.split()])


def read_people_data(file_path):
    people = []
    with open(file_path, mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            person = {
                'id': row['id'],
                'email': row['email'].lower(),
                'name': row['name'],
                'country': row['country']
            }
            people.append(person)
    return people


def main():
    file_path = os.path.join('data', 'people.csv')
    people = read_people_data(file_path)

    name_to_search = input("Enter a name: ").strip().lower()

    person_found = None
    for person in people:
        if person['name'].strip().lower() == name_to_search:
            person_found = person
            break

    if person_found:
        print(f"Name: {capitalize_name(person_found['name'])}")
        print(f"Country: {capitalize_name(person_found['country'])}")
        print(f"Email: {person_found['email']}")
    else:
        print("Name not found!")


if __name__ == "__main__":
    main()
```

@tab Code2

```python
import pandas as pd

def capitalize_name(name):
    return ' '.join([part.capitalize() for part in name.split()])

def read_people_data(file_path):
    data = pd.read_csv(file_path)
    people = data.to_dict('records')
    for person in people:
        person['email'] = person['email'].lower()
    return people

def main():
    file_path = 'data/people.csv'
    people = read_people_data(file_path)
    
    name_to_search = input("Enter a name: ").strip().lower()
    
    person_found = None
    for person in people:
        if person['name'].strip().lower() == name_to_search:
            person_found = person
            break
    
    if person_found:
        print(f"Name: {capitalize_name(person_found['name'])}")
        print(f"Country: {capitalize_name(person_found['country'])}")
        print(f"Email: {person_found['email']}")
    else:
        print("Name not found!")

if __name__ == "__main__":
    main()
```

@tab Code3

```python
import pandas as pd


def capitalize_name(name):
    string = ' '
    for part in name.split():
        part = part.capitalize()
        string = string + part
    return string


def read_people_data(file_path):
    data = pd.read_csv(file_path)
    people = data.to_dict('records')
    for person in people:
        person['email'] = person['email'].lower()
    return people


def main():
    file_path = 'data/people.csv'
    people = read_people_data(file_path)

    name_to_search = input("Enter a name: ").strip().lower()

    person_found = None
    for person in people:
        if person['name'].strip().lower() == name_to_search:
            person_found = person
            break

    if person_found:
        print(f"Name: {capitalize_name(person_found['name'])}")
        print(f"Country: {capitalize_name(person_found['country'])}")
        print(f"Email: {person_found['email']}")
    else:
        print("Name not found!")


if __name__ == "__main__":
    main()
```

@tab Code4

```python
def capitalize_name(name):
    string = ' '
    for part in name.split():
        part = part.capitalize()
        string = string + part
    return string


def read_people_data(file_path):
    people = []
    with open(file_path, 'r', encoding='utf-8') as file:
        headers = file.readline().strip().split(',')
        for line in file:
            values = line.strip().split(',')
            person = dict(zip(headers, values))
            person['email'] = person['email'].lower()
            people.append(person)
    return people


def main():
    file_path = 'data/people.csv'
    people = read_people_data(file_path)

    name_to_search = input("Enter a name: ").strip().lower()

    person_found = None
    for person in people:
        if person['name'].strip().lower() == name_to_search:
            person_found = person
            break

    if person_found:
        print(f"Name: {capitalize_name(person_found['name'])}")
        print(f"Country: {capitalize_name(person_found['country'])}")
        print(f"Email: {person_found['email']}")
    else:
        print("Name not found!")


if __name__ == "__main__":
    main()
```

@tab Code5

```python
def capitalize_name(name):
    string = ' '
    for part in name.split():
        part = part.capitalize()
        string = string + part
    return string


def read_people_data(file_path):
    people = []
    file = open(file_path, 'r', encoding='utf-8')
    headers = file.readline().strip().split(',')
    for line in file:
        values = line.strip().split(',')
        person = dict(zip(headers, values))
        person['email'] = person['email'].lower()
        people.append(person)
    file.close()
    return people


def main():
    file_path = 'data/people.csv'
    people = read_people_data(file_path)

    name_to_search = input("Enter a name: ").strip().lower()

    person_found = None
    for person in people:
        if person['name'].strip().lower() == name_to_search:
            person_found = person
            break

    if person_found:
        print(f"Name: {capitalize_name(person_found['name'])}")
        print(f"Country: {capitalize_name(person_found['country'])}")
        print(f"Email: {person_found['email']}")
    else:
        print("Name not found!")


if __name__ == "__main__":
    main()
```

@tab Code 6

```python
def capitalize_name(name):
    string = ' '
    for part in name.split():
        part = part.capitalize()
        string = string + part
    return string


# def read_people_data(file_path):
#     people = []
#     file = open(file_path, 'r', encoding='utf-8')
#     headers = file.readline().strip().split(',')
#     for line in file:
#         values = line.strip().split(',')
#         person = dict(zip(headers, values))
#         person['email'] = person['email'].lower()
#         people.append(person)
#     file.close()
#     return people
def read_people_data(file_path):
    people = []
    file = open(file_path, 'r', encoding='utf-8')
    headers = file.readline().strip().split(',')
    for line in file:
        values = line.strip().split(',')
        person = {headers[i]: values[i] for i in range(len(headers))}  # 使用字典推导来创建字典
        person['email'] = person['email'].lower()
        people.append(person)

    return people


def main():
    file_path = 'data/people.csv'
    people = read_people_data(file_path)

    name_to_search = input("Enter a name: ").strip().lower()

    person_found = None
    for person in people:
        if person['name'].strip().lower() == name_to_search:
            person_found = person
            break

    if person_found:
        print(f"Name: {capitalize_name(person_found['name'])}")
        print(f"Country: {capitalize_name(person_found['country'])}")
        print(f"Email: {person_found['email']}")
    else:
        print("Name not found!")


if __name__ == "__main__":
    main()
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

