---
title: 反向算术运算符
article: false
order: 2
---

当你的对象与另一个类型（如整数、浮点数）进行运算时，如果那个类型没有实现相应的二元运算符方法，Python会尝试调用你的对象上的“反向”版本的方法：

- **反向加法 (`other + self`)**: `__radd__(self, other)`
- **反向减法 (`other - self`)**: `__rsub__(self, other)`
- **反向乘法 (`other \* self`)**: `__rmul__(self, other)`

```python
class Number:
    def __init__(self, value):
        self.value = value
    
    def __add__(self, other):
        return Number(self.value + other.value)
    
    def __radd__(self, other):
        if isinstance(other, (int, float)):
            return Number(self.value + other)
        return NotImplemented

n = Number(5)
print((n + Number(3)).value)  # 输出8
print((1 + n).value)          # 输出6
```