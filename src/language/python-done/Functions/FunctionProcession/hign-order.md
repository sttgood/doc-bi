---
title: 高阶函数
article: false
order: 1
---

在Python编程中，高阶函数（Higher-Order Function）指的是那些能够接收函数作为参数，或者返回一个函数作为结果的函数。这一特性极大地增强了Python的表达能力，使其在处理函数和数据时更加灵活多变。

### 高阶函数作为参数

Python中的许多内置函数，例如`map()`、`filter()`和`sorted()`，都接受函数作为参数。这些函数允许你自定义操作或条件，从而以更灵活的方式处理数据。

- **`map()`函数**：此函数会遍历一个或多个可迭代对象，并对每个元素应用指定的函数。它最终会返回一个包含所有应用函数结果的新迭代器。

```python
def square(x):
 return x ** 2
 
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(square, numbers))
print(squared_numbers)  # 输出: [1, 4, 9, 16, 25]
```

- **`filter()`函数**：它会遍历一个可迭代对象，并仅保留那些使指定函数返回`True`的元素。它返回一个迭代器，其中包含了所有满足条件的元素。

```python
def is_even(x):
 return x % 2 == 0
 
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)  # 输出: [2, 4, 6]
```

- **`sorted()`函数**：虽然它主要用于排序，但你也可以通过`key`参数传递一个函数，来自定义排序的依据。

```python
pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
sorted_pairs = sorted(pairs, key=lambda pair: pair[1])
print(sorted_pairs)  # 输出: [(4, 'four'), (1, 'one'), (3, 'three'), (2, 'two')]
```

注意：输出的顺序可能会因Python版本或区域设置的不同而有所变化。

### 返回函数的函数

高阶函数不仅可以接收函数作为参数，还可以返回函数作为结果。这在需要动态创建函数时非常有用。

```python
def make_multiplier(factor):
 def multiplier(x):
 return x * factor
 return multiplier
 
double = make_multiplier(2)
triple = make_multiplier(3)
 
print(double(5))  # 输出: 10
print(triple(5))  # 输出: 15
```

在这个例子中，`make_multiplier`函数返回了一个新的函数`multiplier`，该函数会将传入的参数乘以一个固定的因子。

### 匿名函数（Lambda表达式）

在定义高阶函数时，经常会用到匿名函数（也称为lambda表达式）。Lambda表达式允许你快速定义一个简单的函数，而无需为其命名。

```python
square = lambda x: x ** 2
print(square(4))  # 输出: 16
```

虽然lambda表达式很方便，但它们通常只用于非常简单的函数。对于更复杂的逻辑，建议定义一个常规的命名函数以提高代码的可读性。

### 高阶函数的意义

高阶函数使得代码更加模块化和可重用。通过将操作抽象为函数，并将这些函数作为参数传递给高阶函数，你可以轻松地组合和重用代码。此外，高阶函数还促进了函数式编程风格在Python中的使用。