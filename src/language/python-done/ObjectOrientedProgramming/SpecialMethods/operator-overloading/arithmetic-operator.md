---
title: 算术运算符重载
article: false
order: 1
---

- **加法 (`+`)**: `__add__(self, other)`

  ```python
  class Number:
      def __init__(self, value):
          self.value = value
      
      def __add__(self, other):
          if isinstance(other, Number):
              return Number(self.value + other.value)
          return Number(self.value + other)
  
  n1 = Number(5)
  n2 = Number(3)
  print((n1 + n2).value)  # 输出8
  ```

- **减法 (`-`)**: `__sub__(self, other)`

- **乘法 (`\*`)**: `__mul__(self, other)`

- **真除法 (`/`)**: `__truediv__(self, other)`

- **地板除 (`//`)**: `__floordiv__(self, other)`

- **取模 (`%`)**: `__mod__(self, other)`

- **幂运算 (`\**`)**: `__pow__(self, other)`