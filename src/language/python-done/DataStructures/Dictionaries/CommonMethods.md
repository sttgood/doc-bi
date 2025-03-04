---
title: 常用函数
article: false
order: 4
---

在 Python 中，字典（`dict`）提供了一系列内置函数和方法，用于执行常见的操作，如添加、删除、修改和遍历元素。以下是一些常用的字典函数和方法：

### 1. `dict()` 构造函数

- 用于创建新的字典。

```python
# 创建一个空字典
empty_dict = dict()
 
# 使用键值对创建字典
my_dict = dict(name='Alice', age=30, city='New York')
```

### 2. `keys()` 方法

- 返回一个包含字典中所有键的视图对象。

```python
keys = my_dict.keys()
print(keys)  # 输出: dict_keys(['name', 'age', 'city'])
```

### 3. `values()` 方法

- 返回一个包含字典中所有值的视图对象。

```python
values = my_dict.values()
print(values)  # 输出: dict_values(['Alice', 30, 'New York'])
```

### 4. `items()` 方法

- 返回一个包含字典中所有键值对的视图对象（每个键值对作为元组）。

```python
items = my_dict.items()
print(items)  # 输出: dict_items([('name', 'Alice'), ('age', 30), ('city', 'New York')])
```

### 5. `get()` 方法

- 返回指定键的值；如果键不存在，则返回 `None` 或指定的默认值。

```python
value = my_dict.get('age')
print(value)  # 输出: 30
 
default_value = my_dict.get('nonexistent', 'Default')
print(default_value)  # 输出: Default
```

### 6. `setdefault()` 方法

- 如果键不存在，则设置键值对并返回该值；如果键已存在，则返回其值。

```python
set_value = my_dict.setdefault('country', 'USA')
print(set_value)  # 输出: USA（因为键不存在，所以设置并返回）
 
existing_value = my_dict.setdefault('age', 25)
print(existing_value)  # 输出: 30（因为键已存在，所以返回其值）
```

### 7. `pop()` 方法

- 删除指定键的键值对，并返回该键的值；如果键不存在，则抛出 `KeyError`（除非指定了默认值）。

```python
popped_value = my_dict.pop('city')
print(popped_value)  # 输出: New York
 
# 尝试删除不存在的键，指定默认值
nonexistent_value = my_dict.pop('nonexistent', 'Default')
print(nonexistent_value)  # 输出: Default
```

### 8. `popitem()` 方法

- 删除并返回一个字典中的任意键值对（通常是最后一个插入的键值对，但这在 Python 3.7+ 中是确定的，之前版本可能不保证顺序）。

```python
popped_item = my_dict.popitem()
print(popped_item)  # 输出类似: ('name', 'Alice')
```

### 9. `update()` 方法

- 使用另一个字典或可迭代对象中的键值对更新当前字典。

```python
update_dict = {'occupation': 'Engineer'}
my_dict.update(update_dict)
print(my_dict)  # 输出: {'age': 30, 'country': 'USA', 'occupation': 'Engineer'}
```

### 10. `clear()` 方法

- 删除字典中的所有键值对。

```python
my_dict.clear()
print(my_dict)  # 输出: {}
```

### 11. `copy()` 方法

- 返回字典的一个浅拷贝。

```python
python复制代码

copied_dict = my_dict.copy()
```

这些方法和函数使得在 Python 中操作字典变得非常灵活和强大。记住，字典是无序的（直到 Python 3.7，其中实现保证了插入顺序），但在大多数现代 Python 用法中，你可以依赖这种顺序（尽管它不被视为语言规范的一部分）。