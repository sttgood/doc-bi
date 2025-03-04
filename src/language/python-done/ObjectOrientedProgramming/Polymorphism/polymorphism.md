---
title: 多态语法
article: false
order: 1
---

在 Python 里，多态主要通过两种方式实现，分别是基于继承和基于鸭子类型，下面详细介绍这两种方式下多态的语法及示例。

### 基于继承实现多态
基于继承的多态依赖于子类对父类方法的重写，当通过父类引用调用被重写的方法时，会根据实际的子类对象类型来执行相应的方法。

#### 语法步骤
1. **定义父类**：包含一个或多个方法，这些方法可以是具体实现，也可以是仅作接口声明的空方法。
2. **定义子类**：继承自父类，并根据需要重写父类的方法。
3. **创建子类对象**：将子类对象赋值给父类类型的变量（在 Python 中无需显式声明类型）。
4. **调用方法**：通过父类类型的变量调用被重写的方法，实际执行的是子类中重写后的方法。

#### 示例代码
```python
# 步骤 1：定义父类
class Animal:
    def speak(self):
        pass

# 步骤 2：定义子类
class Dog(Animal):
    def speak(self):
        return "汪汪汪"

class Cat(Animal):
    def speak(self):
        return "喵喵喵"

# 步骤 3：创建子类对象
dog = Dog()
cat = Cat()

# 步骤 4：调用方法
def animal_speak(animal):
    print(animal.speak())

animal_speak(dog)
animal_speak(cat)
```
#### 代码解释
- `Animal` 是父类，其中的 `speak` 方法是一个空方法，作为接口定义。
- `Dog` 和 `Cat` 是子类，它们继承自 `Animal` 并分别重写了 `speak` 方法。
- `animal_speak` 函数接收一个 `Animal` 类型的对象，调用其 `speak` 方法。由于多态性，传入不同的子类对象时，会调用相应子类重写后的方法。

### 基于鸭子类型实现多态
鸭子类型不关注对象的具体类型，只关注对象是否具有特定的方法。只要对象具有所需的方法，就可以被视为符合要求。

#### 语法步骤
1. **定义函数或方法**：该函数或方法接收一个对象作为参数，并调用该对象的特定方法。
2. **定义多个类**：这些类都实现了函数或方法所调用的特定方法。
3. **创建不同类的对象**：将这些对象作为参数传递给函数或方法。

#### 示例代码
```python
# 步骤 1：定义函数
def play_sound(obj):
    if hasattr(obj, 'make_sound') and callable(obj.make_sound):
        return obj.make_sound()
    return "该对象没有 make_sound 方法"

# 步骤 2：定义多个类
class Piano:
    def make_sound(self):
        return "钢琴发出悦耳的声音"

class Drums:
    def make_sound(self):
        return "鼓发出响亮的声音"

# 步骤 3：创建不同类的对象
piano = Piano()
drums = Drums()

# 调用函数
print(play_sound(piano))
print(play_sound(drums))
```
#### 代码解释
- `play_sound` 函数接收一个对象，检查该对象是否有 `make_sound` 方法，如果有则调用该方法，否则返回提示信息。
- `Piano` 和 `Drums` 类都实现了 `make_sound` 方法，因此它们的对象都可以作为参数传递给 `play_sound` 函数，表现出多态性。

总结来说，Python 中的多态语法较为灵活，不依赖于严格的类型声明，通过继承和鸭子类型两种方式可以轻松实现多态特性。 

Python 中的多态主要通过两种方式实现，分别是基于继承的多态和基于鸭子类型的多态，下面详细介绍它们的底层原理。

### 基于继承的多态底层原理

#### 方法查找顺序（MRO）
在基于继承实现多态时，当调用一个对象的方法，Python 需要确定实际要执行的方法代码。这依赖于方法解析顺序（Method Resolution Order，MRO）。

Python 使用 C3 线性化算法来计算类的 MRO。MRO 是一个类及其所有基类的线性列表，它决定了在多重继承的情况下，Python 查找方法的顺序。每个类都有一个 `__mro__` 属性，可以查看其 MRO。

```python
class A:
    def method(self):
        print("A's method")

class B(A):
    def method(self):
        print("B's method")

class C(A):
    def method(self):
        print("C's method")

class D(B, C):
    pass

print(D.__mro__)
d = D()
d.method()
```
在上述代码中，`D.__mro__` 会输出一个元组，例如 `(<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)`，这表明当调用 `d.method()` 时，Python 会按照这个顺序查找 `method` 方法，先在 `D` 类中找，找不到就去 `B` 类中找，依此类推。

#### 动态绑定
Python 是动态类型语言，对象的类型在运行时确定。当通过父类引用调用一个方法时，Python 会在运行时根据对象的实际类型（而不是引用的类型）来确定要调用的方法。

```python
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        print("汪汪汪")

class Cat(Animal):
    def speak(self):
        print("喵喵喵")

def animal_speak(animal):
    animal.speak()

dog = Dog()
cat = Cat()
animal_speak(dog)
animal_speak(cat)
```
在 `animal_speak` 函数中，`animal` 参数可以是任何 `Animal` 类或其子类的对象。在运行时，Python 会根据 `animal` 实际引用的对象类型（`Dog` 或 `Cat`）来调用相应的 `speak` 方法，这就是动态绑定的体现。

### 基于鸭子类型的多态底层原理

#### 鸭子类型的本质
鸭子类型的核心思想是“如果它走路像鸭子，叫声像鸭子，那么它就是鸭子”。在 Python 中，这意味着只要一个对象实现了所需的方法，就可以将其视为具有特定接口的对象，而不需要考虑它的具体类型。

#### 运行时检查
当调用一个对象的方法时，Python 不会在编译时检查对象的类型，而是在运行时检查对象是否具有该方法。

```python
def play_sound(obj):
    if hasattr(obj, 'make_sound') and callable(obj.make_sound):
        return obj.make_sound()
    return "该对象没有 make_sound 方法"

class Piano:
    def make_sound(self):
        return "钢琴发出悦耳的声音"

class Drums:
    def make_sound(self):
        return "鼓发出响亮的声音"

piano = Piano()
drums = Drums()
print(play_sound(piano))
print(play_sound(drums))
```
在 `play_sound` 函数中，使用 `hasattr` 函数检查对象是否有 `make_sound` 方法，使用 `callable` 函数检查该属性是否可调用。如果满足条件，就调用该方法。这种运行时的检查机制使得不同类型的对象只要实现了 `make_sound` 方法，就可以被传递给 `play_sound` 函数，从而实现了多态。

综上所述，Python 中的多态底层依赖于 MRO、动态绑定和运行时类型检查等机制，这些机制使得 Python 的多态实现更加灵活和动态。 