---
title: 逻辑运算符
article: false
order: 4
---

在Python中，逻辑运算符用于进行布尔逻辑运算，并且它们返回的结果也是布尔值（`True` 或 `False`）。

1. 逻辑与 (`and`)

   :

   - 当且仅当两个操作数都为 `True` 时，返回 `True`。
   - 例如：`True and False` 返回 `False`，`True and True` 返回 `True`。

2. 逻辑或 (`or`)

   :

   - 当且仅当两个操作数都为 `False` 时，返回 `False`。
   - 至少有一个操作数为 `True` 时，返回 `True`。
   - 例如：`True or False` 返回 `True`，`False or False` 返回 `False`。

3. 逻辑非 (`not`)

   :

   - 将操作数的布尔值取反。
   - 如果操作数为 `True`，返回 `False`；如果操作数为 `False`，返回 `True`。
   - 例如：`not True` 返回 `False`，`not False` 返回 `True`。

逻辑运算符通常用于控制流语句中，如 `if` 语句，以及用于组合多个条件。

以下是一个示例代码，展示了如何使用这些逻辑运算符：

```python
# 逻辑与
print(True and True)   # 输出: True
print(True and False)  # 输出: False
print(False and False) # 输出: False
 
# 逻辑或
print(True or True)    # 输出: True
print(True or False)   # 输出: True
print(False or False)  # 输出: False
 
# 逻辑非
print(not True)        # 输出: False
print(not False)       # 输出: True
 
# 逻辑运算符在控制流中的使用
a = 10
b = 20
 
if a < b and b > 5:
    print("a is less than b and b is greater than 5")  # 这行会被打印，因为条件为真
 
if a > b or b <= 5:
    print("a is greater than b or b is less than or equal to 5")  # 这行不会被打印，因为条件为假
 
if not (a == b):
    print("a is not equal to b")  # 这行会被打印，因为a不等于b
```

在控制流语句中，逻辑运算符允许你组合多个条件，从而创建更复杂的逻辑判断。例如，`if` 语句中的条件可以是一个逻辑表达式，该表达式可以包含 `and`、`or` 和 `not` 运算符。