---
title: 文档字符串
article: false
order: 4
---

### **函数注解（Type Hints）**

- Python 3.5+ 支持类型提示，增强代码可读性：

python

复制

```
def greet(name: str) -> str:
    return f"Hello, {name}"

print(greet("Bob"))  # Hello, Bob
```

在 Python 中，文档字符串（docstring）是一种特殊的字符串，用于为函数、类、模块或几乎任何可定义的对象提供文档。文档字符串遵循特定的约定，通常位于对象定义的第一行之后，并且使用三重引号（`'''` 或 `"""`）包围。以下是对 Python 中文档字符串的详细解释：

### 函数文档

文档字符串应该简洁明了地描述对象的功能、参数、返回值以及可能抛出的异常。对于函数和类，文档字符串通常遵循一种格式化的风格，比如 reStructuredText（reST）或 Google 风格，但这并不是强制性的。

#### 函数和方法的文档字符串

```python
def add(a, b):
    """
    返回两个数字的和。
 
    参数:
    a (int, float): 第一个加数
    b (int, float): 第二个加数
 
    返回:
    int, float: a 和 b 的和
    """
    return a + b
```

在这个例子中，文档字符串描述了 `add` 函数的功能，并详细列出了参数和返回值。

#### 类的文档字符串

```python
class Rectangle:
    """
    表示一个矩形的类。
 
    属性:
    width (float): 矩形的宽度
    height (float): 矩形的高度
 
    方法:
    area(): 返回矩形的面积
    perimeter(): 返回矩形的周长
    """
 
    def __init__(self, width, height):
        self.width = width
        self.height = height
 
    def area(self):
        """返回矩形的面积。"""
        return self.width * self.height
 
    def perimeter(self):
        """返回矩形的周长。"""
        return 2 * (self.width + self.height)
```

在这个例子中，类的文档字符串描述了 `Rectangle` 类的功能和属性，以及它的方法。每个方法也有自己的文档字符串。

### 访问文档字符串

可以使用内置属性 `__doc__` 来访问对象的文档字符串。例如：

```python
print(add.__doc__)
print(Rectangle.__doc__)
print(Rectangle.area.__doc__)
```

### 工具支持

许多 IDE 和代码编辑器都支持从文档字符串中自动生成文档，或者使用文档字符串提供代码补全和类型提示。此外，还有一些工具可以将 Python 的文档字符串转换为格式良好的文档，如 Sphinx，它可以将 reST 格式的文档字符串转换为 HTML、LaTeX 或其他格式的文档。

### 约定和最佳实践

- 文档字符串应该简洁明了，避免冗长和复杂的句子。
- 使用一致的格式和风格，以保持文档的一致性。
- 对于复杂的函数或方法，可以使用详细的参数列表、返回值描述和异常信息。
- 对于类和模块，提供总体描述以及属性和方法的简要概述。
- 考虑使用 Sphinx 或其他文档生成工具来自动生成和格式化文档。

通过遵循这些约定和最佳实践，你可以创建清晰、有用且易于维护的 Python 文档。