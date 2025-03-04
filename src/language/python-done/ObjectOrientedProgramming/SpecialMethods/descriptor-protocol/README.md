---
title: 描述符协议
article: false
index: false
dir:
  order: 8
  link: true
---



在Python中，描述符协议允许你自定义属性访问的行为（即获取、设置或删除属性）。这是通过实现以下三个特殊方法中的一个或多个来完成的：`__get__()`、`__set__()` 和 `__delete__()`。当一个对象至少实现了这三个方法中的一个时，它就可以称为是一个描述符。

### 描述符协议

- **`__get__(self, obj, type=None)`**：这个方法用于控制如何获取属性值。如果属性是通过实例访问的，则 `obj` 是该实例；如果是通过类访问的，则 `obj` 为 `None`。`type` 参数是拥有该描述符的类。
  
- **`__set__(self, obj, value)`**：这个方法用于控制如何设置属性值。`obj` 是拥有该属性的对象实例，`value` 是要设置的新值。
  
- **`__delete__(self, obj)`**：这个方法用于控制如何删除属性。`obj` 是拥有该属性的对象实例。

### 示例

下面的例子演示了如何创建和使用一个简单的描述符，用来验证整数值是否在一个指定范围内：

```python
class IntegerRange:
    def __init__(self, min_value=None, max_value=None):
        self.min_value = min_value
        self.max_value = max_value

    def __set_name__(self, owner, name):
        # 自动记录属性名
        self.name = name

    def __set__(self, instance, value):
        if not isinstance(value, int):
            raise ValueError(f"'{self.name}' must be an integer.")
        if (self.min_value is not None and value < self.min_value) or (self.max_value is not None and value > self.max_value):
            raise ValueError(f"'{self.name}' must be between {self.min_value} and {self.max_value}.")
        instance.__dict__[self.name] = value

    def __get__(self, instance, owner):
        if instance is None:
            return self
        return instance.__dict__.get(self.name, None)

# 使用示例
class MyClass:
    age = IntegerRange(0, 120)
    
    def __init__(self, age):
        self.age = age

# 创建对象
p = MyClass(30)
print(p.age)  # 输出: 30

# 尝试设置超出范围的值
try:
    p.age = 150
except ValueError as e:
    print(e)  # 输出: 'age' must be between 0 and 120.
```

在这个例子中，`IntegerRange` 类实现了描述符协议，用于确保 `MyClass` 类中的 `age` 属性值在给定的范围内。当你尝试设置一个超出范围的值时，会抛出一个 `ValueError` 异常。这展示了如何利用描述符来添加额外的逻辑到属性访问过程，例如类型检查、值验证等。

描述符是理解高级Python特性的重要概念之一，如Python内置的 `@property` 装饰器实际上是基于描述符协议实现的。通过实现描述符协议，你可以创建更复杂和强大的行为来管理属性访问。
