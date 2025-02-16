---
title: 集合创建
article: false
order: 1
---

在Python中，`set` 是一种内置的数据结构，用于存储唯一且不重复的元素。与列表（`list`）不同，集合（`set`）中的元素是无序的，并且不允许有重复值。创建 `set` 的方法主要有以下几种：

### 1. 使用大括号 `{}` 创建空集合或包含元素的集合

- 创建一个空集合时，必须使用大括号 `{}` 并且在其中不包含任何元素，或者使用 `set()` 函数。注意，`{}` 不包含任何元素时表示空集合，而包含单个元素时则表示字典。

  ```python
  empty_set = set()  # 正确创建空集合的方法
  # empty_set = {}  # 这是创建空字典的方法，不是空集合
   
  my_set = {1, 2, 3}  # 创建包含元素的集合
  ```

- 创建包含元素的集合时，直接将元素放在大括号内，元素之间用逗号分隔。

### 2. 使用 `set()` 函数

`set()` 函数可以将任何可迭代对象（如列表、元组、字符串等）转换为一个集合。如果可迭代对象中包含重复元素，集合将只保留唯一的元素。

```python
my_list = [1, 2, 2, 3, 4, 4, 5]
my_set = set(my_list)  # 将列表转换为集合，重复元素被移除
print(my_set)  # 输出可能是 {1, 2, 3, 4, 5}，注意集合是无序的
```

### 注意事项

- 集合中的元素必须是可哈希的（hashable），这意味着它们必须是不可变的（immutable）。例如，列表、字典等可变类型不能作为集合的元素，但元组、字符串、整数等不可变类型可以。
- 由于集合是无序的，因此你不能通过索引来访问集合中的元素。相反，你可以使用循环来遍历集合中的元素。
- 集合支持数学上的集合操作，如并集（union）、交集（intersection）、差集（difference）和对称差集（symmetric difference）。这些操作可以使用 `|`、`&`、`-` 和 `^` 运算符或相应的方法（如 `union()`、`intersection()` 等）来执行。

下面是一个简单的例子，展示了如何使用集合操作：

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
 
# 并集
union_set = set1 | set2  # 或 set1.union(set2)
print(union_set)  # 输出可能是 {1, 2, 3, 4, 5}
 
# 交集
intersection_set = set1 & set2  # 或 set1.intersection(set2)
print(intersection_set)  # 输出: {3}
 
# 差集
difference_set = set1 - set2  # 或 set1.difference(set2)
print(difference_set)  # 输出可能是 {1, 2}
 
# 对称差集
symmetric_difference_set = set1 ^ set2  # 或 set1.symmetric_difference(set2)
print(symmetric_difference_set)  # 输出可能是 {1, 2, 4, 5}
```

请注意，由于集合是无序的，因此输出的顺序可能会有所不同，但元素本身应该是相同的。