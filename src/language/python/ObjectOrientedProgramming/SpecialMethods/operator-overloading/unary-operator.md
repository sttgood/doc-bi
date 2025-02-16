---
title: 一元运算符重载
article: false
order: 4
---

在Python中，可以通过定义特殊方法（也称为魔术方法）来重载一元运算符。这些特殊方法通常以双下划线开头和结尾（例如 `__neg__`）

下面是一些常见的用于一元运算符重载的特殊方法：

- `__pos__(self)`：实现一元加法运算符 `+` 的行为。当你使用 `+obj` 时调用。
  
- `__neg__(self)`：实现一元减法运算符 `-` 的行为。当你使用 `-obj` 时调用。
  
- `__abs__(self)`：实现内置 `abs()` 函数的行为。当你使用 `abs(obj)` 时调用。
  
- `__invert__(self)`：实现按位取反运算符 `~` 的行为。当你使用 `~obj` 时调用。

这里有一个简单的例子展示如何重载这些一元运算符：

```python
class Number:
    def __init__(self, value):
        self.value = value

    # 重载一元加法运算符
    def __pos__(self):
        return Number(+self.value)
    
    # 重载一元减法运算符
    def __neg__(self):
        return Number(-self.value)
    
    # 重载 abs() 函数
    def __abs__(self):
        return Number(abs(self.value))
    
    # 重载按位取反运算符
    def __invert__(self):
        return Number(~self.value)
    
    def __repr__(self):
        return f"Number({self.value})"

# 使用示例
n = Number(5)
print(+n)  # 输出: Number(5)
print(-n)  # 输出: Number(-5)
print(abs(n))  # 输出: Number(5)
print(~n)  # 输出: Number(-6)，因为 ~5 在整数表示中等于 -6（如果考虑二进制补码）
```

这个例子定义了一个 `Number` 类，并通过实现上述方法来重载对应的一元运算符。这样，当你对 `Number` 类的实例执行这些操作时，将会按照你定义的方式进行处理。