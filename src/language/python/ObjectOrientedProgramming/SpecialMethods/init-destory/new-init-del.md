---
title: 初始化
article: false
order: 1
---



在 Python 面向对象编程里，初始化和构造相关的特殊函数主要涉及 `__new__` 和 `__init__`，此外还有析构函数 `__del__`。下面为你详细介绍这些特殊函数。

### `__new__` 方法：对象的创建者
- **作用**：`__new__` 是一个静态方法，在对象实例化时第一个被调用。它的核心任务是创建并返回一个新的对象实例，是对象创建过程的开端。
- **语法**：
```python
class MyClass:
    def __new__(cls, *args, **kwargs):
        # 创建并返回对象实例
        return super().__new__(cls)
```
  - `cls`：代表类本身，这和 `__init__` 中的 `self` 不同，`self` 代表实例，而 `cls` 代表类。
  - `*args` 和 `**kwargs`：用于接收传递给类构造函数的参数。
- **示例**：
```python
class CustomClass:
    def __new__(cls, *args, **kwargs):
        print("调用 __new__ 方法")
        instance = super().__new__(cls)
        return instance


obj = CustomClass()
```
  - 在这个例子中，创建 `CustomClass` 的对象 `obj` 时，`__new__` 方法首先被调用，它打印出提示信息，然后通过 `super().__new__(cls)` 创建了一个新的对象实例并返回。

### `__init__` 方法：对象的初始化器
- **作用**：`__init__` 是一个实例方法，在 `__new__` 方法返回对象实例后被调用。它的主要作用是对对象的属性进行初始化，为对象设置初始状态。
- **语法**：
```python
class MyClass:
    def __init__(self, *args, **kwargs):
        # 初始化对象属性
        pass
```
  - `self`：代表类的实例对象，借助 `self` 能够访问和修改对象的属性。
  - `*args` 和 `**kwargs`：用于接收传递给类构造函数的参数。
- **示例**：
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


p = Person("Bob", 30)
print(p.name)
print(p.age)
```
  - 这里创建 `Person` 类的对象 `p` 时，`__init__` 方法被调用，将传入的 `name` 和 `age` 参数分别赋值给对象的 `name` 和 `age` 属性。

### `__new__` 与 `__init__` 的关系
- `__new__` 负责对象的创建，返回一个新的对象实例；`__init__` 负责对象的初始化，对 `__new__` 返回的对象实例进行属性设置。
- 只有当 `__new__` 方法返回的是当前类的实例时，`__init__` 方法才会被调用；若 `__new__` 返回的不是当前类的实例，`__init__` 方法将不会被调用。

### `__del__` 方法：对象的析构器
- **作用**：`__del__` 是一个实例方法，当对象被销毁时自动调用。通常用于释放对象占用的资源，如关闭文件、断开数据库连接等。
- **示例**：
```python
class ResourceManager:
    def __init__(self):
        print("资源已创建")

    def __del__(self):
        print("资源已释放")


res = ResourceManager()
del res
```
  - 在这个例子中，创建 `ResourceManager` 的对象 `res` 时，`__init__` 方法打印“资源已创建”；当使用 `del` 语句删除对象 `res` 时，`__del__` 方法被调用，打印“资源已释放”。不过要注意，`__del__` 方法的调用时机并不完全确定，因为 Python 的垃圾回收机制有自己的规则。 