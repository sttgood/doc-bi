---
title: 元素排序
article: false
order: 6
---

在Python中，列表（`list`）排序是一项常见的任务，Python提供了多种方法来对列表进行排序。以下是几种主要的排序方法：

### 1. 使用`sort()`方法

`sort()`方法是列表对象的一个内置方法，它会直接对原列表进行排序，不会返回新的列表。默认情况下，`sort()`方法会按升序对列表进行排序。

```python
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5]
my_list.sort()
print(my_list)  # 输出: [1, 1, 2, 3, 4, 5, 5, 6, 9]
```

你也可以通过`reverse=True`参数来按降序排序：

```python
my_list.sort(reverse=True)
print(my_list)  # 输出: [9, 6, 5, 5, 4, 3, 2, 1, 1]
```

此外，`sort()`方法还接受一个`key`参数，允许你指定一个函数来作为排序的依据。这个函数会被应用到列表的每个元素上，排序将基于函数的返回值进行。

```python
# 按字符串长度排序
words = ["apple", "banana", "cherry", "date"]
words.sort(key=len)
print(words)  # 输出: ['date', 'apple', 'cherry', 'banana']
```

### 2. 使用`sorted()`函数

`sorted()`函数是Python的内置函数，它返回一个新的排序后的列表，而不会修改原列表。`sorted()`函数的参数与`sort()`方法相同，包括`reverse`和`key`。

```python
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5]
sorted_list = sorted(my_list)
print(sorted_list)  # 输出: [1, 1, 2, 3, 4, 5, 5, 6, 9]
print(my_list)      # 输出原列表: [3, 1, 4, 1, 5, 9, 2, 6, 5]
```

### 3. 自定义排序逻辑

通过`key`参数，你可以实现复杂的排序逻辑。例如，按元组的第二个元素排序：

```python
# 按元组的第二个元素排序
tuples = [(1, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
tuples.sort(key=lambda x: x[1])
print(tuples)  # 输出: [(4, 'four'), (1, 'one'), (3, 'three'), (2, 'two')]
```

在这个例子中，`lambda x: x[1]`是一个匿名函数，它接受一个元组`x`并返回其第二个元素作为排序的依据。

### 4. 排序稳定性

Python的`sort()`方法和`sorted()`函数都是稳定排序算法的实现，这意味着如果两个元素相等（在`key`函数的作用下），它们在排序后的列表中的相对顺序与排序前相同。

选择`sort()`方法还是`sorted()`函数取决于你的需求：如果你需要保留原列表不变，那么`sorted()`是更好的选择；如果你不需要保留原列表，那么`sort()`方法会更高效一些，因为它避免了创建新的列表对象。