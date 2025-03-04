---
title: 方法重写和方法重载
article: false
order: 2
---

方法重载（Method Overloading）和方法重写（Method Overriding）是面向对象编程中两个重要的概念，在 Python 以及其他编程语言里有着不同的表现和用途，下面详细介绍这两个概念。

### 方法重写（Method Overriding）

#### 概念
方法重写指的是在子类中定义一个与父类中同名的方法，从而覆盖父类的该方法。当通过子类对象调用这个方法时，执行的是子类中重写后的方法，而非父类的原始方法。方法重写是实现多态的重要手段之一。

#### Python 中的实现
在 Python 里，要实现方法重写，只需在子类中定义一个与父类方法同名的方法即可。
```python
# 定义父类
class Animal:
    def make_sound(self):
        print("动物发出声音")

# 定义子类
class Dog(Animal):
    # 重写父类的 make_sound 方法
    def make_sound(self):
        print("汪汪汪")

# 创建子类的实例
dog = Dog()
# 调用重写后的方法
dog.make_sound()
```
#### 代码解释
- `Animal` 类中有一个 `make_sound` 方法，输出“动物发出声音”。
- `Dog` 类继承自 `Animal` 类，并在其中重写了 `make_sound` 方法，输出“汪汪汪”。
- 当创建 `Dog` 类的实例 `dog` 并调用 `make_sound` 方法时，执行的是子类中重写后的方法。

#### 调用父类被重写的方法
在子类重写的方法中，有时需要调用父类被重写的方法，可以使用 `super()` 函数。
```python
class Parent:
    def greet(self):
        print("Hello from parent.")

class Child(Parent):
    def greet(self):
        # 调用父类的 greet 方法
        super().greet()
        print("Hello from child.")

child = Child()
child.greet()
```

### 方法重载（Method Overloading）

#### 概念
方法重载是指在同一个类中定义多个同名的方法，但这些方法的参数列表不同（参数的个数、类型或顺序不同）。在调用方法时，编译器或解释器会根据传入的参数自动选择合适的方法执行。

#### Python 中的情况
Python 本身并不直接支持传统意义上的方法重载，因为 Python 是动态类型语言，函数的参数类型和个数在运行时才能确定，无法像静态类型语言（如 Java、C++）那样根据参数类型和个数来区分不同的方法。不过，可以通过一些技巧来模拟方法重载，例如使用默认参数和可变参数。

#### 模拟方法重载的示例
```python
class Calculator:
    def add(self, a, b=None, c=None):
        if b is None and c is None:
            return a
        elif c is None:
            return a + b
        else:
            return a + b + c

calc = Calculator()
print(calc.add(1))
print(calc.add(1, 2))
print(calc.add(1, 2, 3))
```
#### 代码解释
- `Calculator` 类中的 `add` 方法通过默认参数和条件判断来模拟不同参数个数的情况。
- 当只传入一个参数时，返回该参数本身；当传入两个参数时，返回两个参数的和；当传入三个参数时，返回三个参数的和。

综上所述，方法重写是子类对父类方法的覆盖，用于实现多态；而 Python 不直接支持传统的方法重载，但可以通过一些技巧模拟不同参数调用的效果。 