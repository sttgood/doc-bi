---
title: 字符串表示
article: false
index: false
dir:
  order: 2
  link: true
---





在 Python 面向对象编程中，有两个特殊函数可用于定义对象的字符串表示，分别是 `__str__` 和 `__repr__`。

### `__str__` 方法

#### 作用

`__str__` 方法用于返回对象的一个可读性良好、用户友好的字符串表示。当你使用 `print()` 函数打印对象，或者使用 `str()` 函数将对象转换为字符串时，Python 会自动调用该对象的 `__str__` 方法。

#### 语法

```python
class ClassName:
    def __str__(self):
        # 返回对象的字符串表示
        return "描述对象的字符串"
```

#### 示例

```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        return f"《{self.title}》，作者：{self.author}"

book = Book("Python 编程从入门到实践", "Eric Matthes")
print(book)  # 自动调用 __str__ 方法
str_book = str(book)
print(str_book)
```

#### 代码解释

- 在 `Book` 类中，定义了 `__str__` 方法，它返回一个格式化的字符串，包含书籍的标题和作者信息。
- 当使用 `print(book)` 打印 `book` 对象时，Python 自动调用 `__str__` 方法并输出其返回的字符串。
- 使用 `str(book)` 将 `book` 对象转换为字符串时，同样会调用 `__str__` 方法。

### `__repr__` 方法

#### 作用

`__repr__` 方法用于返回对象的“官方”字符串表示，这个表示通常包含足够的信息，以便能够准确地重建该对象。在交互式解释器中直接输入对象名，或者使用 `repr()` 函数时，会调用对象的 `__repr__` 方法。

#### 语法

```python
class ClassName:
    def __repr__(self):
        # 返回对象的官方字符串表示
        return "可用于重建对象的字符串"
```

#### 示例

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Point({self.x}, {self.y})"

point = Point(3, 4)
print(repr(point))  # 调用 __repr__ 方法
```

#### 代码解释

- 在 `Point` 类中，`__repr__` 方法返回一个字符串，该字符串的格式可以直接用于创建一个新的 `Point` 对象。
- 使用 `repr(point)` 时，会调用 `__repr__` 方法并返回相应的字符串。

### `__str__` 和 `__repr__` 的区别与联系

#### 区别

- **用途**：`__str__` 主要用于为用户提供一个友好的、易于理解的对象描述；而 `__repr__` 侧重于提供一个准确的、可用于调试和重建对象的字符串表示。
- **调用场景**：`__str__` 通常在使用 `print()` 和 `str()` 时被调用；`__repr__` 在交互式解释器中直接输入对象名或使用 `repr()` 时被调用。

#### 联系

- 如果类中只定义了 `__repr__` 方法，而没有定义 `__str__` 方法，那么在需要调用 `__str__` 方法的场景下，会默认调用 `__repr__` 方法。也就是说，`__repr__` 可以作为 `__str__` 的一个备用方法。

```python
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def __repr__(self):
        return f"Rectangle({self.length}, {self.width})"

rect = Rectangle(5, 3)
print(rect)  # 由于没有 __str__ 方法，调用 __repr__ 方法
```

综上所述，合理使用 `__str__` 和 `__repr__` 方法可以让你的对象在不同场景下提供合适的字符串表示，增强代码的可读性和可调试性。 
