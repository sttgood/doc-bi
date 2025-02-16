---
title: 比较运算符
article: false
order: 2
---

在Python中，比较运算符用于比较两个值，并返回一个布尔值（`True` 或 `False`）。

1. 等于 (`==`):
   - 检查两个值是否相等。
   - 例如：`3 == 3` 返回 `True`，`3 == 4` 返回 `False`。
2. 不等于 (`!=`):
   - 检查两个值是否不相等。
   - 例如：`3 != 4` 返回 `True`，`3 != 3` 返回 `False`。
3. 大于 (`>`):
   - 检查左边的值是否大于右边的值。
   - 例如：`3 > 2` 返回 `True`，`3 > 3` 返回 `False`。
4. 小于 (`<`):
   - 检查左边的值是否小于右边的值。
   - 例如：`3 < 2` 返回 `False`，`3 < 4` 返回 `True`。
5. 大于等于 (`>=`):
   - 检查左边的值是否大于或等于右边的值。
   - 例如：`3 >= 3` 返回 `True`，`3 >= 4` 返回 `False`。
6. 小于等于 (`<=`):
   - 检查左边的值是否小于或等于右边的值。
   - 例如：`3 <= 4` 返回 `True`，`3 <= 2` 返回 `False`。
7. 身份运算符 (`is` 和 `is not`):
   - `is` 用于检查两个变量是否指向同一个对象（即比较对象的身份）。
   - `is not` 用于检查两个变量是否不指向同一个对象。
   - 例如：`a = [1, 2, 3]; b = a; a is b` 返回 `True`，`a = [1, 2, 3]; b = [1, 2, 3]; a is b` 返回 `False`。
8. 成员运算符 (`in` 和 `not in`):
   - `in` 用于检查一个值是否存在于某个序列（如列表、元组、字符串等）中。
   - `not in` 用于检查一个值是否不存在于某个序列中。
   - 例如：`'a' in 'hello'` 返回 `True`，`'z' not in 'hello'` 返回 `True`。

以下是一个示例代码，展示了如何使用这些比较运算符：

```python
a = 10
b = 20
 
print(a == b)  # False
print(a != b)  # True
print(a > b)   # False
print(a < b)   # True
print(a >= 10) # True
print(a <= b)  # True
 
# 身份运算符
x = [1, 2, 3]
y = x
z = [1, 2, 3]
 
print(x is y)  # True
print(x is z)  # False
 
# 成员运算符
text = "hello world"
print('hello' in text)  # True
print('goodbye' not in text)  # True
```