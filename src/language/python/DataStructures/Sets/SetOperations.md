---
title: 集合操作
article: false
order: 5
---

在Python中，集合（`set`）是一种内置的数据结构，它提供了丰富的操作来管理和操作集合中的元素。

### 检查元素

- 使用 `in` 关键字检查元素是否存在于集合中。

```python
if 1 in my_set:
    print("1存在于集合中")
```

### 集合的大小

- 使用 `len()` 函数获取集合中元素的数量。

```python
python复制代码

print(len(my_set))  # 输出集合中元素的数量
```

### 集合运算

- **并集**：使用 `|` 运算符或 `union()` 方法。
- **交集**：使用 `&` 运算符或 `intersection()` 方法。
- **差集**：使用 `-` 运算符或 `difference()` 方法。
- **对称差集**：使用 `^` 运算符或 `symmetric_difference()` 方法。

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
 
union_set = set1 | set2  # 或 set1.union(set2)
intersection_set = set1 & set2  # 或 set1.intersection(set2)
difference_set = set1 - set2  # 或 set1.difference(set2)
symmetric_difference_set = set1 ^ set2  # 或 set1.symmetric_difference(set2)
```

### 子集和超集

- 使用 `issubset()` 方法检查一个集合是否是另一个集合的子集。
- 使用 `issuperset()` 方法检查一个集合是否是另一个集合的超集。

```python
if set1.issubset(set2):
    print("set1是set2的子集")
if set2.issuperset(set1):
    print("set2是set1的超集")
```

### 清空集合

- 使用 `clear()` 方法清空集合中的所有元素。

```python
python复制代码

my_set.clear()  # 清空集合
```

### 集合的迭代

- 使用 `for` 循环遍历集合中的元素（集合是无序的，因此遍历顺序可能每次都不同）。

```python
for element in my_set:
    print(element)
```

### 集合的转换

- 可以将集合转换为列表、元组等数据结构。
- 反之，也可以从列表、元组等数据结构创建集合。

```python
my_list = list(my_set)  # 将集合转换为列表
my_tuple = tuple(my_set)  # 将集合转换为元组
```

### 集合的不可变性

- 需要注意的是，集合本身是可变的（即可以添加或删除元素），但集合中的元素必须是不可变的（例如整数、浮点数、字符串、元组等）。列表、字典或其他集合不能作为集合的元素，除非它们被嵌套在不可变的容器（如元组）中。

集合在Python中是一种非常有用的数据结构，特别适用于需要快速成员资格测试、消除重复元素以及执行集合运算的场景。