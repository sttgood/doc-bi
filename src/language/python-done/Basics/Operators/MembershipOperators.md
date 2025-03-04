---
title: MembershipOperators
article: false
order: 5
---

在Python中，成员运算符用于检查一个值是否存在于一个序列（如列表、元组、字符串或集合）或其他容器类型中。这些运算符包括 `in` 和 `not in`。

1. `in` 运算符：

   - 如果值在指定的序列中找到，则返回 `True`，否则返回 `False`。

   - 示例：

     ```python
     fruit = "apple"
     "a" in fruit  # 返回 True，因为 'a' 是 "apple" 的一部分
     "banana" in fruit  # 返回 False，因为 "banana" 不是 "apple" 的一部分
      
     numbers = [1, 2, 3, 4, 5]
     3 in numbers  # 返回 True，因为 3 在列表中
     6 in numbers  # 返回 False，因为 6 不在列表中
     ```

2. `not in` 运算符：

   - 如果值在指定的序列中未找到，则返回 `True`，否则返回 `False`。

   - 示例：

     ```python
     fruit = "apple"
     "b" not in fruit  # 返回 False，因为 'b' 是 "apple" 的一部分
     "banana" not in fruit  # 返回 True，因为 "banana" 不是 "apple" 的一部分
      
     numbers = [1, 2, 3, 4, 5]
     7 not in numbers  # 返回 True，因为 7 不在列表中
     3 not in numbers  # 返回 False，因为 3 在列表中
     ```

成员运算符在处理数据验证、过滤和条件逻辑时非常有用。例如，你可以使用它们来检查用户输入的值是否存在于一个有效选项的列表中，或者来过滤掉一个集合中不需要的元素。