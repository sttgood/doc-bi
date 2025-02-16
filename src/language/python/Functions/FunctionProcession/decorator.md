---
title: 装饰器
article: false
order: 4
---

在Python中，装饰器（Decorator）是一种高级功能，它允许你在不修改原有函数或类定义的前提下，为其添加新的功能。装饰器本质上是一个函数，它接收一个函数作为参数，并返回一个新的函数或修改原来的函数。这个新函数会扩展原有函数的行为。

### 装饰器的基本语法

装饰器的语法使用`@`符号，它应该放在被装饰的函数或方法的定义之前。

```python
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper
 
@my_decorator
def say_hello():
    print("Hello!")
 
say_hello()
```

在这个例子中，`my_decorator`是一个装饰器，它接收一个函数`func`作为参数，并定义了一个新的函数`wrapper`。`wrapper`函数在调用`func`之前和之后都执行了一些额外的操作。最后，`my_decorator`返回了`wrapper`函数。当`@my_decorator`被放在`say_hello`函数定义之前时，Python会自动将`say_hello`函数作为参数传递给`my_decorator`，并用返回的`wrapper`函数替换原来的`say_hello`函数。

### 带参数的装饰器

如果被装饰的函数需要参数，你可以在`wrapper`函数内部定义`*args`和`**kwargs`来接收任意数量的位置参数和关键字参数，并将它们传递给被装饰的函数。

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Something is happening before the function is called.")
        result = func(*args, **kwargs)
        print("Something is happening after the function is called.")
        return result
    return wrapper
 
@my_decorator
def greet(name):
    print(f"Hello, {name}!")
 
greet("Alice")
```

### 保留原函数的元数据

使用装饰器时，原函数的`__name__`和`__doc__`等属性会被`wrapper`函数的相应属性所覆盖。为了保留这些元数据，你可以使用`functools.wraps`装饰器来装饰`wrapper`函数。

```python
from functools import wraps
 
def my_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("Something is happening before the function is called.")
        result = func(*args, **kwargs)
        print("Something is happening after the function is called.")
        return result
    return wrapper
 
@my_decorator
def greet(name):
    """This function greets a person by name."""
    print(f"Hello, {name}!")
 
print(greet.__name__)  # 输出: greet
print(greet.__doc__)   # 输出: This function greets a person by name.
```

### 类装饰器

装饰器不仅可以用于函数，还可以用于类。类装饰器接收一个类作为参数，并返回一个新的类（通常是通过对原类进行扩展或修改得到的）。

```python
def class_decorator(cls):
    class WrappedClass(cls):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            print(f"An instance of {cls.__name__} has been created.")
    return WrappedClass
 
@class_decorator
class MyClass:
    def __init__(self, value):
        self.value = value
 
obj = MyClass(10)
```

在这个例子中，`class_decorator`是一个类装饰器，它接收一个类`cls`作为参数，并返回了一个新的类`WrappedClass`。`WrappedClass`是`cls`的一个子类，它在实例化时会打印一条消息。

### 装饰器的实际应用

装饰器在Python中有广泛的应用，例如：

- 日志记录：在函数执行前后记录日志。
- 性能测量：测量函数的执行时间。
- 权限检查：在调用函数之前检查用户权限。
- 缓存：存储函数的返回值，以避免重复计算。
- 输入验证：在函数执行之前验证输入参数的有效性。

总之，装饰器是Python中一个非常强大且灵活的工具，它允许你以声明性的方式为代码添加额外的行为。