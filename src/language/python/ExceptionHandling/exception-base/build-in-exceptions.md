---
title: 内置异常
article: false
order: 4
---
在 Python 中，内置了许多异常类型，用于表示不同的错误情况。了解这些常见的内置异常，有助于我们在编程过程中更好地处理错误，增强程序的健壮性。以下是一些常见的 Python 内置异常及其详细介绍：

### 1. 语法错误异常（SyntaxError）
- **含义**：当 Python 解释器遇到不符合 Python 语法规则的代码时，会抛出 `SyntaxError` 异常。通常是由于拼写错误、缺少必要的符号（如冒号、括号不匹配等）或使用了错误的语法结构导致的。
- **示例**：
```python
# 缺少冒号，会抛出 SyntaxError
if True
    print("This is a test.")
```

### 2. 零除错误异常（ZeroDivisionError）
- **含义**：当试图将一个数除以零（包括整数、浮点数的除法）时，会抛出 `ZeroDivisionError` 异常。
- **示例**：
```python
result = 1 / 0  # 会抛出 ZeroDivisionError
```

### 3. 文件未找到错误异常（FileNotFoundError）
- **含义**：当使用 `open()` 函数尝试打开一个不存在的文件时，会抛出 `FileNotFoundError` 异常。
- **示例**：
```python
try:
    with open('nonexistent_file.txt', 'r') as file:
        content = file.read()
except FileNotFoundError:
    print("文件未找到！")
```

### 4. 值错误异常（ValueError）
- **含义**：当传入的参数值类型正确但值本身不符合要求时，会抛出 `ValueError` 异常。例如，将一个无法转换为整数的字符串传递给 `int()` 函数。
- **示例**：
```python
try:
    num = int("abc")  # 会抛出 ValueError
except ValueError:
    print("输入的不是有效的整数！")
```

### 5. 类型错误异常（TypeError）
- **含义**：当操作或函数应用于不适当类型的对象时，会抛出 `TypeError` 异常。比如对不同类型的对象进行不兼容的操作，如字符串和整数相加。
- **示例**：
```python
result = "Hello" + 1  # 会抛出 TypeError
```

### 6. 索引错误异常（IndexError）
- **含义**：当尝试访问列表、元组、字符串等序列对象中不存在的索引时，会抛出 `IndexError` 异常。索引值超出了序列的有效范围。
- **示例**：
```python
my_list = [1, 2, 3]
element = my_list[3]  # 会抛出 IndexError，因为索引 3 超出了列表的范围
```

### 7. 键错误异常（KeyError）
- **含义**：当使用字典中不存在的键来访问字典元素时，会抛出 `KeyError` 异常。
- **示例**：
```python
my_dict = {'name': 'Alice', 'age': 25}
value = my_dict['city']  # 会抛出 KeyError，因为 'city' 不是字典中的键
```

### 8. 属性错误异常（AttributeError）
- **含义**：当尝试访问对象不存在的属性或方法时，会抛出 `AttributeError` 异常。
- **示例**：
```python
class MyClass:
    pass

obj = MyClass()
value = obj.nonexistent_attribute  # 会抛出 AttributeError
```

### 9. 迭代错误异常（StopIteration）
- **含义**：在使用迭代器时，当迭代器耗尽（即没有更多的元素可供迭代），调用 `__next__()` 方法会抛出 `StopIteration` 异常。不过，现在通常使用 `for` 循环来处理迭代，它会自动处理这个异常。
- **示例**：
```python
my_list = [1, 2, 3]
my_iterator = iter(my_list)
while True:
    try:
        element = next(my_iterator)
        print(element)
    except StopIteration:
        break
```

### 10. 导入错误异常（ImportError）
- **含义**：当使用 `import` 语句导入模块失败时，会抛出 `ImportError` 异常。可能是由于模块不存在、模块路径配置错误等原因导致的。如果是在导入子模块时出现问题，会抛出更具体的 `ModuleNotFoundError` 异常（Python 3.6 及以后版本）。
- **示例**：
```python
try:
    import nonexistent_module
except ImportError:
    print("导入模块失败！")
```

这些是 Python 中常见的内置异常，在编写代码时，我们可以使用 `try-except` 语句来捕获和处理这些异常，使程序更加健壮。 

### 11. 名称错误异常（NameError）
- **含义**：当使用一个未定义的变量、函数名或类名时，Python 会抛出 `NameError` 异常。这通常是由于拼写错误、作用域问题或者变量未被正确赋值导致的。
- **示例**：
```python
print(unknown_variable)  # 会抛出 NameError，因为 unknown_variable 未定义
```

### 12. 缩进错误异常（IndentationError）
- **含义**：Python 使用缩进来表示代码块，当代码的缩进不符合 Python 的语法规则时，会抛出 `IndentationError` 异常。它有两个常见的子类：`TabError`（混用制表符和空格进行缩进时抛出）和普通的缩进错误。
- **示例**：
```python
if True:
print("This line has incorrect indentation.")  # 会抛出 IndentationError
```

### 13. 未实现错误异常（NotImplementedError）
- **含义**：这是一种特殊的异常，通常在定义抽象方法或接口时使用。当一个方法被声明但没有具体实现时，调用该方法会抛出 `NotImplementedError` 异常，用于提醒开发者需要实现该功能。
- **示例**：
```python
class MyBaseClass:
    def my_method(self):
        raise NotImplementedError("该方法尚未实现")

obj = MyBaseClass()
try:
    obj.my_method()
except NotImplementedError as e:
    print(e)
```

### 14. 断言错误异常（AssertionError）
- **含义**：`assert` 语句用于调试，它会对一个条件进行判断，如果条件为 `False`，则抛出 `AssertionError` 异常。可以在 `assert` 语句后添加一个可选的错误信息。
- **示例**：
```python
x = 5
assert x > 10, "x 应该大于 10"  # 会抛出 AssertionError
```

### 15. 内存错误异常（MemoryError）
- **含义**：当程序在运行过程中尝试分配的内存超过了系统所能提供的内存限制时，会抛出 `MemoryError` 异常。通常在处理非常大的数据结构或进行大规模计算时可能会遇到。
- **示例**：虽然很难直接模拟，但在实际中，创建一个非常大的列表可能会导致此异常：
```python
# 以下代码可能会导致 MemoryError，具体取决于系统内存
huge_list = [i for i in range(10**10)]
```

### 16. 系统退出异常（SystemExit）
- **含义**：当调用 `sys.exit()` 函数时，会抛出 `SystemExit` 异常，用于正常退出 Python 解释器。该异常可以被捕获，但捕获后通常会继续执行退出操作。
- **示例**：
```python
import sys

try:
    sys.exit(1)
except SystemExit as e:
    print(f"系统退出，退出码: {e.code}")
```

### 17. 键盘中断异常（KeyboardInterrupt）
- **含义**：当用户在程序运行时按下 `Ctrl + C`（在 Windows 系统）或 `Ctrl + Z`（在 Unix/Linux 系统）组合键时，会抛出 `KeyboardInterrupt` 异常，用于中断程序的执行。
- **示例**：
```python
try:
    while True:
        pass
except KeyboardInterrupt:
    print("程序被用户中断")
```

### 18. 浮点错误异常（FloatingPointError）
- **含义**：在进行浮点数运算时，如果出现不合法的操作，如除零、溢出等，会抛出 `FloatingPointError` 异常。不过，在大多数情况下，Python 的浮点数运算会返回特殊值（如 `inf` 或 `nan`）而不是抛出此异常，需要启用特定的浮点数异常处理机制才能触发。
- **示例**：
```python
import math

try:
    result = math.sqrt(-1)  # 在启用严格浮点数异常处理时可能抛出 FloatingPointError
except FloatingPointError:
    print("浮点数运算错误")
```

### 19. 编码错误异常（UnicodeEncodeError 和 UnicodeDecodeError）
- **含义**：
    - **`UnicodeEncodeError`**：当尝试将 Unicode 字符串编码为特定的字节编码（如 UTF - 8、GBK 等）时，如果字符串中包含无法编码的字符，会抛出该异常。
    - **`UnicodeDecodeError`**：当尝试将字节数据解码为 Unicode 字符串时，如果字节数据不符合指定的编码格式，会抛出该异常。
- **示例**：
```python
# UnicodeEncodeError 示例
text = "你好"
try:
    encoded = text.encode('ascii')
except UnicodeEncodeError:
    print("无法将包含非 ASCII 字符的字符串编码为 ASCII")

# UnicodeDecodeError 示例
byte_data = b'\xd6\xd0\xb9\xfa'  # 可能是 GBK 编码的数据
try:
    decoded = byte_data.decode('utf-8')
except UnicodeDecodeError:
    print("无法使用 UTF - 8 解码该字节数据")
```

了解这些常见的异常类型，有助于你在编程过程中更好地进行错误处理和调试。 