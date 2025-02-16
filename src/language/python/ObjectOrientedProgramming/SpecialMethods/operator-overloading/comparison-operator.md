---
title: 比较运算符重载
article: false
order: 3
---

- **等于 (`==`)**: `__eq__(self, other)`
- **不等于 (`!=`)**: `__ne__(self, other)`
- **小于 (`<`)**: `__lt__(self, other)`
- **小于等于 (`<=`)**: `__le__(self, other)`
- **大于 (`>`)**: `__gt__(self, other)`
- **大于等于 (`>=`)**: `__ge__(self, other)`

```python
class Number:
    def __init__(self, value):
        self.value = value
    
    def __eq__(self, other):
        if isinstance(other, Number):
            return self.value == other.value
        return NotImplemented
    
    def __lt__(self, other):
        if isinstance(other, Number):
            return self.value < other.value
        return NotImplemented

n1 = Number(5)
n2 = Number(3)
print(n1 == n2)  # False
print(n1 > n2)   # True (Python会自动提供其他比较运算符的实现，基于已定义的__eq__和__lt__)
```