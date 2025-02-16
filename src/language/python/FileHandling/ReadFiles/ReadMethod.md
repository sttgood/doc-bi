---
title: Read方法
article: false
order: 1
---
在 Python 里，对文件进行读取操作是常见的任务，通过内置的函数和方法可以灵活地从文件中获取数据。下面详细介绍 Python 中常用的文件读取函数。

### 1. 打开文件

在进行文件读取之前，需要使用 `open()` 函数打开文件，通常以只读模式（`'r'`）或二进制只读模式（`'rb'`）打开。

```python
# 以文本模式打开文件
file_text = open('example.txt', 'r', encoding='utf-8')
# 以二进制模式打开文件
file_binary = open('example.bin', 'rb')
```

建议使用 `with` 语句来打开文件，这样可以自动管理文件的关闭，避免资源泄漏。

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    # 在此处进行文件读取操作
    pass
```

### 2. 常用的文件读取函数

#### 2.1 `read()` 方法

`read()` 方法用于从文件中读取指定数量的字符（文本模式）或字节（二进制模式）。如果不指定参数，则读取整个文件内容。

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    # 读取整个文件内容
    content = file.read()
    print(content)

    # 读取前 10 个字符
    file.seek(0)  # 将文件指针移到文件开头
    partial_content = file.read(10)
    print(partial_content)
```

在二进制模式下，读取的是字节数据。

```python
with open('example.bin', 'rb') as file:
    binary_data = file.read()
    print(binary_data)
```

#### 2.2 `readline()` 方法

`readline()` 方法用于从文件中读取一行内容，每次调用该方法会读取下一行，直到文件末尾返回空字符串。

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    line = file.readline()
    while line:
        print(line.strip())  # 去除行末的换行符
        line = file.readline()
```

#### 2.3 `readlines()` 方法

`readlines()` 方法用于读取文件的所有行，并将每一行作为一个元素存储在列表中返回。

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())
```

### 3. 按块读取大文件

当处理大文件时，一次性将整个文件内容读入内存可能会导致内存不足。可以按块读取文件，每次读取固定大小的数据。

```python
chunk_size = 1024  # 每次读取 1024 字节
with open('large_file.txt', 'r', encoding='utf-8') as file:
    while True:
        chunk = file.read(chunk_size)
        if not chunk:
            break
        print(chunk)
```

### 4. 迭代文件对象

在 Python 中，文件对象本身是可迭代的，可以直接使用 `for` 循环逐行读取文件，这种方式简洁且内存占用较小。

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    for line in file:
        print(line.strip())
```

### 5. 异常处理

在文件读取过程中，可能会遇到各种异常，如文件不存在、权限不足等。使用 `try-except` 语句进行异常处理可以增强程序的健壮性。

```python
try:
    with open('nonexistent_file.txt', 'r', encoding='utf-8') as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("文件未找到，请检查文件路径。")
except PermissionError:
    print("没有权限访问该文件。")
except Exception as e:
    print(f"发生未知错误：{e}")
```

综上所述，Python 提供了多种文件读取函数和方法，开发者可以根据具体需求选择合适的方式进行文件读取操作，同时要注意异常处理以确保程序的稳定性。
