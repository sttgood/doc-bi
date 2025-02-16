---
title: 添加元素
article: false
order: 2
---

在Python中，向`dict`（字典）添加元素非常简单。由于字典存储的是键值对（key-value pairs），因此你需要指定要添加的键和对应的值。以下是几种向字典添加元素的方法：

### 1. 直接赋值

你可以通过直接给字典中不存在的键赋值来添加新的键值对。

```python
my_dict = {}  # 创建一个空字典
my_dict['name'] = 'Alice'  # 添加一个键值对
my_dict['age'] = 30  # 再添加一个键值对
print(my_dict)
# 输出: {'name': 'Alice', 'age': 30}
```

如果键已经存在于字典中，这种方法会更新该键对应的值。

```python
my_dict['name'] = 'Bob'  # 更新'name'键对应的值
print(my_dict)
# 输出: {'name': 'Bob', 'age': 30}
```

### 2. 使用`update()`方法

`update()`方法允许你使用一个字典或可迭代对象（如列表的列表、元组的元组等，但通常使用字典）来更新当前字典，添加新的键值对或更新现有的键值对。

```python
# 使用另一个字典更新当前字典
new_elements = {'city': 'New York', 'occupation': 'Engineer'}
my_dict.update(new_elements)
print(my_dict)
# 输出: {'name': 'Bob', 'age': 30, 'city': 'New York', 'occupation': 'Engineer'}
 
# 也可以使用可迭代对象（但键和值必须成对出现）
# 注意：这种方法在Python 3.7+中有效，因为字典保持插入顺序；在更早版本中，顺序可能不同
iterable = [('language', 'Python'), ('country', 'USA')]
my_dict.update(iterable)
print(my_dict)
# 输出可能因版本而异，但键值对应该正确：{'name': 'Bob', 'age': 30, 'city': 'New York', 'occupation': 'Engineer', 'language': 'Python', 'country': 'USA'}
```

### 3. 使用字典推导式（间接方法）

虽然字典推导式通常用于创建新字典或根据现有数据进行转换，但你也可以通过创建一个包含新键值对的新字典，并将其与原始字典合并（使用`update()`方法或直接赋值给一个新变量），来间接地添加元素。然而，这种方法通常不如直接赋值或使用`update()`方法直观或高效。

```python
# 假设我们有一个原始字典
original_dict = {'name': 'Bob', 'age': 30}
 
# 使用字典推导式添加新元素（这里只是为了演示，实际上不推荐这样做）
updated_dict = {**original_dict, 'city': 'New York'}  # Python 3.5+ 的语法
print(updated_dict)
# 输出: {'name': 'Bob', 'age': 30, 'city': 'New York'}
 
# 注意：这种方法实际上创建了一个新的字典，而不是修改了原始字典。
```

在大多数情况下，直接赋值或使用`update()`方法是向字典添加元素的首选方式。这些方法简单、直观，并且性能良好。