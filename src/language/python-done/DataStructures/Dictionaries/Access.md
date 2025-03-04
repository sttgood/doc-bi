---
title: 元素访问
article: false
order: 4
---

在 Python 中，字典（`dict`）是一种存储键值对（key-value pairs）的数据结构。你可以通过以下几种方式访问字典中的元素：

### 1. 使用键访问元素

最常见的方式是通过键来访问字典中的值。

```python
my_dict = {'name': 'Alice', 'age': 30, 'city': 'New York'}
 
# 访问 'name' 键对应的值
name = my_dict['name']
print(name)  # 输出: Alice
```

### 2. 使用 `get()` 方法访问元素

`get()` 方法提供了一种更安全的访问方式，当键不存在时不会抛出异常，而是返回 `None` 或者你可以指定一个默认值。

```python
# 使用 get() 方法访问 'age' 键对应的值
age = my_dict.get('age')
print(age)  # 输出: 30
 
# 当键不存在时，返回 None
nonexistent_key = my_dict.get('nonexistent')
print(nonexistent_key)  # 输出: None
 
# 当键不存在时，返回指定的默认值
default_value = my_dict.get('nonexistent', 'Default Value')
print(default_value)  # 输出: Default Value
```

### 3. 检查键是否存在

在访问字典元素之前，你可以先检查键是否存在，以避免 `KeyError`。

```python
if 'city' in my_dict:
    city = my_dict['city']
    print(city)  # 输出: New York
else:
    print('Key "city" does not exist.')
```

### 4. 遍历字典元素

你可以遍历字典的键、值或键值对。

```python
# 遍历键
for key in my_dict:
    print(key)
 
# 遍历值
for value in my_dict.values():
    print(value)
 
# 遍历键值对
for key, value in my_dict.items():
    print(f'{key}: {value}')
```

### 5. 使用 `setdefault()` 方法

`setdefault()` 方法在键不存在时设置键值对，并返回该值；如果键已经存在，则返回对应的值。

```python
# 设置默认值并返回该值
default_city = my_dict.setdefault('country', 'USA')
print(default_city)  # 输出: USA
 
# 键已存在，返回对应的值
existing_age = my_dict.setdefault('age', 25)
print(existing_age)  # 输出: 30
```

### 注意事项

- 当你使用键访问元素时，如果键不存在，会抛出 `KeyError`。
- `get()` 方法提供了更安全的访问方式，特别适用于不确定键是否存在的情况。
- 遍历字典时，可以使用 `keys()`、`values()` 和 `items()` 方法分别获取键、值和键值对。

希望这些示例能帮助你理解如何在 Python 中访问字典元素。