---
title: Write方法
article: false
order: 
---

在进行文件写入之前，需要使用 `open()` 函数打开文件，并指定合适的写入模式。常见的写入模式有：
- `'w'`：写入模式，如果文件已存在，会清空原有内容；若文件不存在，则创建新文件。
- `'a'`：追加模式，在文件末尾添加新内容，文件不存在时会创建新文件。
- `'w+'`：读写模式，先清空文件内容，然后可进行读写操作。
- `'a+'`：读写追加模式，不清空原有内容，可在末尾追加内容，也能读取文件。

```python
# 以写入模式打开文件
mM 
file_write = open('example.txt', 'w', encoding='utf-8')
# 以追加模式打开文件
file_append = open('example.txt', 'a', encoding='utf-8')
```
为了避免手动管理文件关闭，推荐使用 `with` 语句：
```python
with open('example.txt', 'w', encoding='utf-8') as file:
    # 在此处进行文件写入操作
    pass
```

### 2. 常用的文件写入方法

#### 2.1 `write()` 方法
`write()` 方法用于将字符串（文本模式）或字节对象（二进制模式）写入文件。它返回实际写入的字符数或字节数。

**文本文件写入示例**：
```python
with open('example.txt', 'w', encoding='utf-8') as file:
    text = "Hello, World!\nPython is great."
    num_chars = file.write(text)
    print(f"写入了 {num_chars} 个字符")
```

**二进制文件写入示例**：
```python
with open('example.bin', 'wb') as file:
    binary_data = b'\x48\x65\x6c\x6c\x6f'  # 对应 ASCII 码的 'Hello'
    num_bytes = file.write(binary_data)
    print(f"写入了 {num_bytes} 个字节")
```

#### 2.2 `writelines()` 方法
`writelines()` 方法用于将字符串列表（文本模式）或字节对象列表（二进制模式）写入文件。注意，该方法不会自动添加换行符。

**文本文件写入多行示例**：
```python
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open('example.txt', 'w', encoding='utf-8') as file:
    file.writelines(lines)
```

**二进制文件写入多行示例**：
```python
binary_lines = [b'Binary Line 1\n', b'Binary Line 2\n', b'Binary Line 3\n']
with open('example.bin', 'wb') as file:
    file.writelines(binary_lines)
```

### 3. 按块写入大文件
当需要写入大量数据时，可以按块写入，以减少内存占用。

```python
chunk_size = 1024  # 每次写入 1024 字节
large_text = "A" * 10000
with open('large_file.txt', 'w', encoding='utf-8') as file:
    for i in range(0, len(large_text), chunk_size):
        chunk = large_text[i:i + chunk_size]
        file.write(chunk)
```

### 4. 刷新缓冲区
在文件写入时，数据通常会先存储在缓冲区，等缓冲区满或文件关闭时才会真正写入文件。可以使用 `flush()` 方法强制将缓冲区的数据写入文件。

```python
with open('example.txt', 'w', encoding='utf-8') as file:
    file.write("Some content.")
    file.flush()  # 强制将缓冲区数据写入文件
    # 后续可继续写入其他内容
```

### 5. 异常处理
在文件写入过程中，可能会遇到各种异常，如文件权限不足、磁盘空间已满等。使用 `try-except` 语句进行异常处理能增强程序的健壮性。

```python
try:
    with open('example.txt', 'w', encoding='utf-8') as file:
        file.write("Trying to write.")
except PermissionError:
    print("没有权限写入该文件。")
except OSError as e:
    print(f"发生操作系统错误：{e}")
except Exception as e:
    print(f"发生未知错误：{e}")
```

综上所述，Python 提供了丰富的文件写入功能，通过合理选择写入模式、使用不同的写入方法以及进行异常处理，能满足各种文件写入需求。 