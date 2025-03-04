---
title: 字典创建
article: false
order: 1
---

在Python编程语言中，字典（dictionary）是一种内置的数据结构，它用于存储键值对（key-value pairs）。每个键都是独一无二的，并且与一个特定的值相关联。以下是几种常见的创建字典的方法：

### 1. 使用花括号 `{}` 创建字典

你可以直接在花括号内列出键值对来创建一个字典，其中每个键值对由一个冒号 `:` 分隔，而各个键值对之间则使用逗号 `,` 分隔。

```python
# 创建一个包含多个键值对的字典
my_dict = {'name': 'Alice', 'age': 30, 'city': 'New York'}
print(my_dict)
# 输出: {'name': 'Alice', 'age': 30, 'city': 'New York'}
```

### 2. 使用 `dict()` 函数创建字典

Python 提供了一个内置函数 `dict()`，它可以从其他可迭代对象（如列表的列表、元组的元组等）或映射对象（如另一个字典）中创建字典。

```python
# 从列表的列表创建字典（注意：每个内部列表应包含两个元素，分别对应键和值）
list_of_lists = [['name', 'Alice'], ['age', 30], ['city', 'New York']]
my_dict_from_list = dict(list_of_lists)
print(my_dict_from_list)
# 输出可能会因为字典的无序性而有所不同，但键值对应该是正确的：{'name': 'Alice', 'age': 30, 'city': 'New York'}
# 注意：如果列表中的元素数量不是偶数，或者存在重复的键，结果可能不是预期的。
 
# 从元组的元组创建字典（与从列表的列表创建类似）
list_of_tuples = (('name', 'Bob'), ('age', 25), ('city', 'Los Angeles'))
my_dict_from_tuple = dict(list_of_tuples)
print(my_dict_from_tuple)
# 输出: {'name': 'Bob', 'age': 25, 'city': 'Los Angeles'}
 
# 从另一个字典创建字典（会创建一个浅拷贝）
another_dict = {'occupation': 'Engineer', 'language': 'Python'}
my_copied_dict = dict(another_dict)
print(my_copied_dict)
# 输出: {'occupation': 'Engineer', 'language': 'Python'}
```

### 3. 使用字典推导式创建字典

字典推导式提供了一种简洁的方法来从可迭代对象创建字典，其语法类似于列表推导式。

```python
# 使用字典推导式从两个列表创建字典
keys = ['a', 'b', 'c']
values = [1, 2, 3]
my_dict_comprehension = {key: value for key, value in zip(keys, values)}
print(my_dict_comprehension)
# 输出: {'a': 1, 'b': 2, 'c': 3}
```

### 注意事项

- 字典在Python 3.7+版本中默认是有序的，这意味着它们会按照键值对首次被插入的顺序进行迭代。然而，在Python 3.6及更早版本中，字典是无序的，因此不应依赖其元素的顺序。
- 字典的键必须是不可变的类型，如字符串、数字或元组。值则可以是任何数据类型。
- 如果尝试使用可变类型（如列表）作为字典的键，Python会抛出一个`TypeError`异常。

通过以上方法，你可以轻松地在Python中创建字典，并根据需要存储和访问键值对。