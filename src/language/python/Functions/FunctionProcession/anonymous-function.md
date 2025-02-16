---
title: 匿名函数
article: false
order: 2
---

在 Python 编程中，匿名函数，顾名思义，指的是没有具体名称的函数。这类函数通过 `lambda` 关键字进行定义，并且通常被用于需要将函数作为参数传递的场合，或者当函数足够简单以至于不需要一个正式的名称时。

### 基本语法结构

```python
python复制代码

lambda 参数列表: 表达式
```

这里的 `参数列表` 可以包含零个、一个或多个参数，而 `表达式` 则是函数体，其计算结果将作为该匿名函数的返回值。需要注意的是，`lambda` 函数中只能包含一个表达式，不能包含多个语句或命令。

### 使用示例

1. **无参数匿名函数**

```python
result = lambda: "Hello, World!"
print(result())  # 输出: Hello, World!
```

尽管这种无参数的 `lambda` 函数在实际应用中并不常见，但它确实展示了 `lambda` 的基本语法。

1. **单参数匿名函数**

```python
square = lambda x: x ** 2
print(square(5))  # 输出: 25
```

在这个例子中，`lambda` 函数接收一个参数 `x`，并返回其平方值。

1. **多参数匿名函数**

```python
add = lambda x, y: x + y
print(add(3, 4))  # 输出: 7
```

这里的 `lambda` 函数接收两个参数 `x` 和 `y`，并返回它们的和。

1. **在高阶函数中的应用**

`lambda` 函数经常作为高阶函数的参数出现，例如 `map()`、`filter()` 和 `sorted()` 等。

- **与 `map()` 函数结合使用**

```python
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(squared_numbers)  # 输出: [1, 4, 9, 16, 25]
```

- **与 `filter()` 函数结合使用**

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # 输出: [2, 4, 6, 8, 10]
```

- **与 `sorted()` 函数结合使用（通过 `key` 参数）**

```python
pairs = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
sorted_pairs = sorted(pairs, key=lambda pair: pair[1])
print(sorted_pairs)  # 输出可能因 Python 版本而异，但通常是按字母顺序排列的元组列表
```

### 注意事项

- 尽管 `lambda` 函数在需要传递简单函数对象时非常便捷，但对于更复杂的逻辑，建议定义常规的命名函数，以提高代码的可读性和可维护性。
- `lambda` 函数不能包含命令或多条语句，只能包含一个表达式。
- `lambda` 函数在 Python 中是表达式，而不是语句，因此它们可以出现在赋值语句的右侧，也可以作为函数调用的参数。