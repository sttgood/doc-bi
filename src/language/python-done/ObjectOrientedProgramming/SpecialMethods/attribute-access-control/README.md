---
title: 属性访问与控制
article: false
index: false
dir:
  order: 6
  link: true
---

在Python中，通过实现特殊方法，可以控制和自定义属性的访问与管理方式。这些特殊方法允许你拦截属性的获取、设置和删除操作，并根据需要进行处理。

### 1. `__getattr__` 方法

当尝试访问一个未定义的属性时，`__getattr__` 方法会被调用。它接收一个参数，即试图访问的属性名称。

```python
class MyClass:
    def __getattr__(self, name):
        print(f"Accessing non-existent attribute: {name}")
        return "default_value"

obj = MyClass()
print(obj.non_existent_attribute)  # 输出: Accessing non-existent attribute: non_existent_attribute \n default_value
```

### 2. `__getattribute__` 方法

这个方法会在每次属性访问时被调用，无论该属性是否存在。由于它的覆盖性很强，使用时需小心避免递归错误（如无限循环）。通常情况下，建议仅在需要完全控制属性访问时使用。

```python
class MyClass:
    def __getattribute__(self, name):
        print(f"Accessing attribute: {name}")
        # 使用super()避免递归
        return super().__getattribute__(name)

obj = MyClass()
obj.some_attribute = "some_value"
print(obj.some_attribute)  # 输出: Accessing attribute: some_attribute \n some_value
```

### 3. `__setattr__` 方法

当你试图为对象设置一个属性值时，`__setattr__` 方法会被调用。它接收两个参数：属性名和要设置的值。

```python
class MyClass:
    def __setattr__(self, name, value):
        print(f"Setting attribute {name} to {value}")
        super().__setattr__(name, value)

obj = MyClass()
obj.new_property = "new_value"  # 输出: Setting attribute new_property to new_value
```

### 4. `__delattr__` 方法

当你尝试删除一个对象的属性时，`__delattr__` 方法会被调用。它接收一个参数，即要删除的属性名。

```python
class MyClass:
    def __delattr__(self, name):
        print(f"Deleting attribute: {name}")
        super().__delattr__(name)

obj = MyClass()
obj.some_attr = "some_value"
del obj.some_attr  # 输出: Deleting attribute: some_attr
```

### 5. 描述符协议

描述符是一种用于创建托管属性的机制，通过实现`__get__`, `__set__`, 和`__delete__`方法来控制属性访问。

- **`__get__`**: 控制属性的获取。
- **`__set__`**: 控制属性的设置。
- **`__delete__`**: 控制属性的删除。

```python
class MyDescriptor:
    def __get__(self, instance, owner):
        print("Getting the attribute")
        return instance._value
    
    def __set__(self, instance, value):
        print("Setting the attribute")
        instance._value = value

class MyClass:
    value = MyDescriptor()
    
    def __init__(self, value):
        self.value = value  # 调用描述符的__set__

obj = MyClass(10)
print(obj.value)  # 调用描述符的__get__
```

通过上述方法，你可以灵活地控制属性的访问和管理，无论是简单的日志记录、验证逻辑还是更复杂的属性行为定制。这使得Python面向对象编程更加灵活和强大。
