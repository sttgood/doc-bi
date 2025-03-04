---
title: 文件指针
article: false
order: 2
---
在 Python 中进行文件操作时，文件指针是一个非常重要的概念。它指示了在文件中进行读写操作的当前位置，不同的文件操作会影响文件指针的位置，而文件指针的位置又决定了后续读写操作的起始点。下面详细介绍文件指针的相关内容。

### 1. 文件指针的基本概念

文件指针可以理解为一个标记，它指向文件中的某个位置。当打开一个文件时，文件指针会根据不同的打开模式被初始定位到文件的特定位置，后续的读写操作都会从文件指针当前所指的位置开始进行，并且操作完成后文件指针会相应地移动。

### 2. 文件指针的初始位置与不同打开模式的关系

- **只读模式（`'r'`）和读写模式（`'r+'`）**：当以这两种模式打开文件时，文件指针会被初始定位到文件的开头（偏移量为 0），这意味着从文件的第一个字节或字符开始进行读取操作。

```python
with open('test.txt', 'r', encoding='utf-8') as file:
    # 文件指针初始在文件开头
    first_char = file.read(1)  # 从文件开头读取一个字符
    print(first_char)
```

- **写入模式（`'w'`）和读写模式（`'w+'`）**：如果文件已存在，以这两种模式打开文件会先清空文件内容，然后文件指针被定位到文件开头，后续的写入操作会从这里开始覆盖原有内容（虽然原有内容已被清空）；若文件不存在，则创建新文件，文件指针同样在开头。

```python
with open('test.txt', 'w', encoding='utf-8') as file:
    # 文件指针初始在文件开头
    file.write('Hello')  # 从文件开头写入内容
```

- **追加模式（`'a'`）和读写追加模式（`'a+'`）**：无论文件是否存在，文件指针都会被初始定位到文件的末尾。在 `'a'` 模式下，写入操作会在文件末尾添加新内容；在 `'a+'` 模式下，若要读取文件内容，需要先将文件指针移动到文件开头。

```python
with open('test.txt', 'a', encoding='utf-8') as file:
    # 文件指针初始在文件末尾
    file.write('\nWorld')  # 在文件末尾追加内容
```

### 3. 文件指针的移动

可以使用 `seek()` 方法来手动移动文件指针的位置，其语法如下：

```python
file.seek(offset, whence=0)
```

- **参数解释**：
  - **`offset`**：表示要移动的字节数，正数表示向后移动，负数表示向前移动。
  - **`whence`**：指定参考位置，有三个可选值：
    - `0`（默认）：从文件开头开始计算偏移量。
    - `1`：从文件指针的当前位置开始计算偏移量。
    - `2`：从文件末尾开始计算偏移量。

#### 3.1 从文件开头移动文件指针

```python
with open('test.txt', 'r', encoding='utf-8') as file:
    file.seek(2)  # 将文件指针从文件开头向后移动 2 个字节
    next_char = file.read(1)
    print(next_char)
```

#### 3.2 从当前位置移动文件指针

```python
with open('test.txt', 'r', encoding='utf-8') as file:
    first_char = file.read(1)  # 读取第一个字符，文件指针向后移动 1 个字节
    file.seek(1, 1)  # 从当前位置再向后移动 1 个字节
    next_char = file.read(1)
    print(next_char)
```

#### 3.3 从文件末尾移动文件指针

```python
with open('test.txt', 'r', encoding='utf-8') as file:
    file.seek(-3, 2)  # 将文件指针从文件末尾向前移动 3 个字节
    last_chars = file.read()
    print(last_chars)
```

### 4. 获取文件指针的当前位置

可以使用 `tell()` 方法来获取文件指针的当前位置，返回值是从文件开头到当前位置的字节数。

```python
with open('test.txt', 'r', encoding='utf-8') as file:
    first_char = file.read(1)
    current_position = file.tell()
    print(f"当前文件指针位置: {current_position}")
```

### 5. 文件操作对文件指针的影响

- **读取操作**：每次读取操作完成后，文件指针会向后移动读取的字节数或字符数。例如，使用 `read(n)` 方法读取 `n` 个字符或字节，文件指针就会向后移动 `n` 个位置。

```python
with open('test.txt', 'r', encoding='utf-8') as file:
    first_two_chars = file.read(2)  # 文件指针向后移动 2 个位置
    position_after_read = file.tell()
    print(f"读取 2 个字符后文件指针位置: {position_after_read}")
```

- **写入操作**：写入操作也会使文件指针向后移动，移动的字节数等于写入内容的字节数。

```python
with open('test.txt', 'w', encoding='utf-8') as file:
    file.write('ABC')  # 文件指针向后移动 3 个位置
    position_after_write = file.tell()
    print(f"写入 'ABC' 后文件指针位置: {position_after_write}")
```

综上所述，文件指针在文件操作中起着关键作用，通过合理控制文件指针的位置，可以灵活地对文件进行读写操作。
