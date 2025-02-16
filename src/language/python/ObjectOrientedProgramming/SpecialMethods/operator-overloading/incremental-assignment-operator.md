---
title: 增量赋值运算符
article: false
order: 5
---

对于增量赋值运算符（如`+=`, `-=`等），可以通过定义`__iadd__`, `__isub__`等方法来控制行为。如果没有定义这些方法，Python将尝试使用`__add__`, `__sub__`等方法，并创建一个新的对象。

```python
class Number:
    def __init__(self, value):
        self.value = value
    
    def __iadd__(self, other):
        if isinstance(other, Number):
            self.value += other.value
        else:
            self.value += other
        return self

n = Number(5)
n += Number(3)
print(n.value)  # 输出8
```