---
title: 'open()'
article: false
order: 1
---

### 1. `open()` 函数



`open()` 是 Python 内置函数，用于打开文件，其基本语法如下：

```python
file_object = open(file_path, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```

- 参数解释：
  - **`file_path`**：这是必须提供的参数，它表示要打开文件的路径，可以是相对路径（相对于当前工作目录），也可以是绝对路径。例如：

```python
# 相对路径
file1 = open('example.txt', 'r')
# 绝对路径
file2 = open('C:/Users/User/Documents/example.txt', 'r')
```

- `mode`：指定文件的打开模式，常见模式如下：

  - **`'r'`**：只读模式，用于读取文件内容。如果文件不存在，会抛出 `FileNotFoundError` 异常。
  - **`'w'`**：写入模式。若文件已存在，会清空文件原有内容；若文件不存在，则创建新文件。
  - **`'a'`**：追加模式。在文件末尾添加内容，若文件不存在则创建新文件。
  - **`'x'`**：独占创建模式。尝试创建新文件并写入内容，如果文件已存在，会抛出 `FileExistsError` 异常。
  - **`'b'`**：二进制模式，可与其他模式组合使用，如 `'rb'` 是以二进制只读模式打开文件。
  - **`'t'`**：文本模式（默认），可与其他模式组合，如 `'rt'` 等同于 `'r'`。
  - **`'+'`**：读写模式，可与其他模式组合，如 `'r+'` 是以读写模式打开文件。

  

- `buffering`：设置缓冲策略。

  - `-1`：使用系统默认缓冲策略。
  - `0`：不使用缓冲（仅适用于二进制模式）。
  - `1`：使用行缓冲（仅适用于文本模式）。
  - 大于 1 的整数：指定缓冲区大小（字节为单位）。

  

- **`encoding`**：指定文件的编码格式，如 `'utf-8'`、`'gbk'` 等，在文本模式下使用，默认使用系统默认编码。

- **`errors`**：指定如何处理编码错误。

- **`newline`**：控制换行符的处理，仅适用于文本模式。

- **`closefd`**：若为 `True`（默认），文件关闭时关闭底层文件描述符。

- **`opener`**：自定义开启器。

### 2. 不同打开模式示例

#### 2.1 只读模式（`'r'`）

```python
try:
    file = open('test.txt', 'r', encoding='utf-8')
    content = file.read()
    print(content)
    file.close()
except FileNotFoundError:
    print("文件未找到，请检查文件路径。")
```

#### 2.2 写入模式（`'w'`）

```python
try:
    file = open('test.txt', 'w', encoding='utf-8')
    file.write('这是新写入的内容。')
    file.close()
except Exception as e:
    print(f"写入文件时出错：{e}")
```

#### 2.3 追加模式（`'a'`）

```python
try:
    file = open('test.txt', 'a', encoding='utf-8')
    file.write('\n这是追加的内容。')
    file.close()
except Exception as e:
    print(f"追加文件时出错：{e}")
```



### 3. 使用 `with` 语句

`with` 语句是一种上下文管理器，能自动管理文件的打开和关闭，即使代码块中出现异常，也能确保文件被正确关闭，推荐使用这种方式操作文件。

```python
try:
    with open('test.txt', 'r', encoding='utf-8') as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("文件未找到，请检查文件路径。")
```

### 4. 二进制文件操作

当处理图片、音频、视频等二进制文件时，需要使用二进制模式（`'b'`）。

#### 4.1 二进制读取

```python
try:
    with open('image.jpg', 'rb') as file:
        data = file.read()
        # 这里可以对二进制数据进行进一步处理
except FileNotFoundError:
    print("文件未找到，请检查文件路径。")
```

#### 4.2 二进制写入

```python
try:
    with open('new_image.jpg', 'wb') as file:
        # 假设 data 是已经获取到的二进制数据
        file.write(data)
except Exception as e:
    print(f"写入二进制文件时出错：{e}")
```

### 5. 异常处理

在文件操作中，可能会遇到各种异常，如文件不存在、权限不足等，使用 `try-except` 语句进行异常处理能增强程序的健壮性。

```python
try:
    with open('nonexistent_file.txt', 'r') as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("文件未找到，请检查文件路径。")
except PermissionError:
    print("没有权限访问该文件。")
except Exception as e:
    print(f"发生未知错误：{e}")
```

综上所述，Python 通过 `open()` 函数提供了强大且灵活的文件打开功能，配合不同的打开模式、`with` 语句和异常处理机制，能满足各种文件操作需求。