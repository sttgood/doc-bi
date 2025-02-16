---
title: for
article: false
order: 1
---

在Python中，`for`循环是一种非常强大的结构，它允许你遍历任何可迭代对象（如列表、元组、字符串、字典、集合以及任何定义了`__iter__()`或`__getitem__()`方法的对象）。`for`循环的基本语法相对简单，并且其设计使得编写循环代码变得既直观又高效。

### 基本语法

```python
for variable in iterable:
    # 在这里编写循环体代码
    # variable会在每次迭代时被赋予iterable中的一个元素
```

### 示例

#### 遍历列表

```python
fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)
```

在这个例子中，`fruit`变量会在每次迭代时被赋予`fruits`列表中的一个元素，直到列表中的所有元素都被遍历过。

#### 遍历字符串

```python
for char in "hello":
    print(char)
```

这里，`char`变量会依次接收字符串`"hello"`中的每个字符。

#### 遍历字典

遍历字典时，你可以选择遍历键、值或键值对。

```python
person = {'name': 'Alice', 'age': 30}
 
# 遍历键
for key in person:
    print(key)
 
# 遍历值
for value in person.values():
    print(value)
 
# 遍历键值对
for key, value in person.items():
    print(f"{key}: {value}")
```

#### 使用`enumerate()`获取索引和值

当你需要同时获取元素的索引和值时，可以使用`enumerate()`函数。

```python
fruits = ['apple', 'banana', 'cherry']
for index, fruit in enumerate(fruits):
    print(f"Index: {index}, Fruit: {fruit}")
```

### 循环控制

在`for`循环中，你可以使用`break`、`continue`和`else`语句来控制循环的流程。

- `break`：立即终止循环。
- `continue`：跳过当前迭代，继续下一次迭代。
- `else`：当循环正常结束时（即没有通过`break`跳出）执行。

### 嵌套循环

`for`循环可以嵌套在其他`for`循环或`while`循环中，这在处理多维数据结构时非常有用。

```python
# 打印乘法表
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f"{j} * {i} = {i * j}", end="\t")
    print()
```

在这个例子中，外层循环控制行数，内层循环控制列数，从而打印出一个乘法表。

总的来说，`for`循环是Python中一个非常强大且灵活的工具，它使得遍历和处理数据变得既简单又直观。