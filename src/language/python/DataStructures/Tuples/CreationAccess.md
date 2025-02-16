---
title: 创建元组
article: false
order: 1
---

在Python编程语言中，`tuple`（元组）是一种内置的数据结构，它用于存储一系列不可变的元素。与列表（`list`）不同，元组一旦创建，其内部元素便无法更改（即元组是不可变的）。创建元组的方式多种多样，以下是一些常见的方法：

### 1. 使用圆括号创建元组

你可以通过在小括号`()`内列出元素来创建一个元组。如果元组中仅含有一个元素，那么在该元素后必须添加一个逗号`,`，以明确区分该元素与普通的圆括号表达式。

```python
# 创建一个包含多个元素的元组
my_tuple = (1, 2, 3, 4, 5)
print(my_tuple)  # 输出: (1, 2, 3, 4, 5)
 
# 创建一个仅含有一个元素的元组，注意元素后的逗号
single_element_tuple = (5,)
print(single_element_tuple)  # 输出: (5,)
 
# 即便不使用小括号，Python也能识别单个元素的元组（但出于清晰性，建议使用小括号）
# 注意：这里由于没有逗号，所以不是元组，而是一个整数
# single_element_not_tuple = 5  # 这是一个整数，而非元组
 
# 正确的单个元素元组创建方式（带逗号）
single_element_tuple_correct = 5,  # 实际上，这是一个逗号分隔的表达式，Python会将其视为元组
print(type(single_element_tuple_correct))  # 输出: <class 'tuple'>
```

需要注意的是，如果元组中没有元素（即空元组），则可以直接使用两个不带任何内容的圆括号`()`来表示。

```python
# 创建一个空元组
empty_tuple = ()
print(empty_tuple)  # 输出: ()
```

### 2. 使用`tuple()`函数创建元组

Python提供了一个内置函数`tuple()`，它可以将任何可迭代对象（例如列表、集合、字符串等）转换为一个元组。

```python
# 将列表转换为元组
list_to_tuple = tuple([1, 2, 3, 4, 5])
print(list_to_tuple)  # 输出: (1, 2, 3, 4, 5)
 
# 将字符串转换为元组（字符串的每个字符都会成为元组的一个元素）
string_to_tuple = tuple("hello")
print(string_to_tuple)  # 输出: ('h', 'e', 'l', 'l', 'o')
```

### 3. 元组的不可变性

由于元组是不可变的，因此你不能直接修改其内部元素。如果你尝试这样做，Python会抛出一个`TypeError`异常。

```python
# 尝试修改元组中的元素（会引发错误）
my_tuple = (1, 2, 3)
# my_tuple[0] = 10  # 这行代码会引发TypeError
```

然而，你可以通过创建一个新的元组来间接地“修改”它，这通常涉及到将原元组的部分元素与新元素组合起来。

```python
# 通过组合来“修改”元组
my_tuple = (1, 2, 3)
new_tuple = (10,) + my_tuple[1:]  # 创建一个新元组，其中第一个元素被修改
print(new_tuple)  # 输出: (10, 2, 3)
```

总的来说，元组在Python中扮演着重要的角色，它们常用于存储那些不应被修改的数据集合。