---
title: 属性和方法
article: false
order: 3
---

在Python中，类（class）是定义对象（或实例）属性和方法的蓝图。属性和方法是面向对象编程（OOP）中的两个核心概念。

### 属性（Attributes）

属性是与对象相关联的数据值。在Python类中，属性可以是：

- **类属性（Class Attributes）**：这些属性属于类本身，而不是类的任何特定实例。因此，它们被类的所有实例共享。通常，类属性用于存储与类本身相关的信息，而不是与特定实例相关的信息。
- **实例属性（Instance Attributes）**：这些属性与类的特定实例相关联。每个实例都有自己的属性副本，这些属性在创建实例时通过`__init__`方法或其他方法初始化。实例属性通常用于存储与特定对象状态相关的信息。

### 方法（Methods）

方法是与对象相关联的函数。在Python类中，方法可以是：

- **实例方法（Instance Methods）**：这些方法是类的实例可以调用的函数。它们至少有一个名为`self`的参数，该参数是对调用方法的实例的引用。通过实例调用方法时，Python会自动传递`self`参数。
- **类方法（Class Methods）**：这些方法是使用`@classmethod`装饰器定义的，并且它们接受类本身作为第一个参数（通常命名为`cls`）。类方法通常用于创建类的实例或修改类属性。
- **静态方法（Static Methods）**：这些方法是使用`@staticmethod`装饰器定义的，并且它们不接受类或实例作为隐式第一个参数。静态方法通常用于与类相关但不涉及类或实例状态的功能。

### 示例

下面是一个包含属性和方法的Python类的示例：

```python
class Rectangle:
    # 类属性
    default_color = "white"
 
    def __init__(self, width, height):
        # 实例属性
        self.width = width
        self.height = height
        # 可以在这里设置实例的特定颜色，但如果没有提供，则使用默认颜色
        self.color = Rectangle.default_color
 
    # 实例方法
    def area(self):
        return self.width * self.height
 
    # 类方法
    @classmethod
    def set_default_color(cls, color):
        cls.default_color = color
 
    # 静态方法
    @staticmethod
    def is_square(width, height):
        return width == height
 
# 创建Rectangle对象
rect1 = Rectangle(3, 4)
rect2 = Rectangle(5, 5)
 
# 访问实例属性
print(rect1.width)  # 输出: 3
print(rect2.height) # 输出: 5
 
# 调用实例方法
print(rect1.area())  # 输出: 12
 
# 修改类属性（影响所有实例）
Rectangle.set_default_color("blue")
print(rect1.color)  # 输出: blue（现在新创建的对象也将使用此默认颜色）
print(rect2.color)  # 输出: blue
 
# 调用静态方法
print(Rectangle.is_square(4, 4))  # 输出: True
print(Rectangle.is_square(3, 4))  # 输出: False
```

在这个例子中，`Rectangle`类有一个类属性`default_color`和两个实例属性`width`和`height`。它还定义了三个方法：一个实例方法`area`用于计算矩形的面积，一个类方法`set_default_color`用于修改默认颜色，以及一个静态方法`is_square`用于检查给定的宽度和高度是否构成一个正方形。