---
title: 继承语法
article: false
order: 2
---

在 Python 中，类继承是面向对象编程的一个核心特性，它允许一个类（子类）继承另一个类（父类）的属性和方法，从而实现代码的复用和扩展。以下将从多个方面详细介绍类继承。

### 基本概念和语法
类继承的基本思想是创建一个新的类，这个新类可以继承现有类的所有特性，同时还可以添加自己的特性或修改继承来的特性。在 Python 中，使用以下语法来定义一个继承自另一个类的新类：
```python
class ParentClass:
    # 父类的属性和方法
    def parent_method(self):
        print("这是父类的方法")

class ChildClass(ParentClass):
    # 子类可以有自己额外的属性和方法
    def child_method(self):
        print("这是子类的方法")

# 创建子类的实例
child_obj = ChildClass()
# 调用父类的方法
child_obj.parent_method()
# 调用子类的方法
child_obj.child_method()
```
在上述代码中，`ChildClass` 继承自 `ParentClass`，这意味着 `ChildClass` 的实例可以访问 `ParentClass` 中定义的方法和属性，同时还可以使用自己定义的方法和属性。

### 继承的特性
#### 代码复用
继承的主要好处之一是代码复用。通过继承，我们可以避免在多个类中重复编写相同的代码。例如，假设我们有多个不同类型的车辆类，它们都有一些共同的属性（如颜色、品牌）和方法（如启动、停止），我们可以创建一个基类 `Vehicle` 来包含这些共同的部分，然后让其他车辆类继承自 `Vehicle`。
```python
class Vehicle:
    def __init__(self, color, brand):
        self.color = color
        self.brand = brand

    def start(self):
        print(f"{self.brand} 车辆已启动")

    def stop(self):
        print(f"{self.brand} 车辆已停止")

class Car(Vehicle):
    def __init__(self, color, brand, num_doors):
        # 调用父类的构造函数
        super().__init__(color, brand)
        self.num_doors = num_doors

    def open_doors(self):
        print(f"打开 {self.num_doors} 个车门")

# 创建 Car 类的实例
car = Car("红色", "宝马", 4)
# 调用父类的方法
car.start()
# 调用子类的方法
car.open_doors()
```
在这个例子中，`Car` 类继承了 `Vehicle` 类的属性和方法，避免了重复编写 `start` 和 `stop` 方法的代码。

#### 方法重写
子类可以重写父类的方法，以改变方法的行为。当子类中定义了与父类同名的方法时，子类的方法会覆盖父类的方法。
```python
class Animal:
    def make_sound(self):
        print("动物发出声音")

class Dog(Animal):
    # 重写父类的方法
    def make_sound(self):
        print("汪汪汪")

# 创建 Dog 类的实例
dog = Dog()
# 调用重写后的方法
dog.make_sound()
```
在这个例子中，`Dog` 类重写了 `Animal` 类的 `make_sound` 方法，当调用 `dog.make_sound()` 时，会执行子类中重写后的方法。

#### 多重继承
Python 支持多重继承，即一个子类可以继承多个父类的属性和方法。多重继承的语法如下：
```python
class Parent1:
    def method1(self):
        print("这是 Parent1 的方法")

class Parent2:
    def method2(self):
        print("这是 Parent2 的方法")

class Child(Parent1, Parent2):
    pass

# 创建 Child 类的实例
child = Child()
# 调用 Parent1 的方法
child.method1()
# 调用 Parent2 的方法
child.method2()
```
在这个例子中，`Child` 类继承了 `Parent1` 和 `Parent2` 两个父类的方法。

### 方法解析顺序（MRO）
当使用多重继承时，可能会出现多个父类中有同名方法的情况。Python 使用方法解析顺序（Method Resolution Order，MRO）来确定调用哪个父类的方法。可以使用 `__mro__` 属性查看类的 MRO。
```python
class A:
    def method(self):
        print("A 的方法")

class B(A):
    def method(self):
        print("B 的方法")

class C(A):
    def method(self):
        print("C 的方法")

class D(B, C):
    pass

# 查看 D 类的 MRO
print(D.__mro__)
# 创建 D 类的实例
d = D()
# 调用 method 方法
d.method()
```
在这个例子中，`D` 类的 MRO 决定了调用 `method` 方法时会先查找 `B` 类中的方法，因为 `B` 在 MRO 列表中排在 `C` 前面。

### 调用父类方法
在子类中，有时候需要调用父类的方法，比如在重写父类方法时，还想保留父类方法的部分功能。可以使用 `super()` 函数来调用父类的方法。
```python
class Parent:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, I'm {self.name}")

class Child(Parent):
    def __init__(self, name, age):
        # 调用父类的构造函数
        super().__init__(name)
        self.age = age

    def greet(self):
        # 调用父类的 greet 方法
        super().greet()
        print(f"I'm {self.age} years old")

# 创建 Child 类的实例
child = Child("Tom", 10)
# 调用子类重写后的 greet 方法
child.greet()
```
在这个例子中，`Child` 类的 `__init__` 方法和 `greet` 方法都使用 `super()` 函数调用了父类的相应方法。
