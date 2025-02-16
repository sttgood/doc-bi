---
title: 迭代器协议
article: false
index: false
dir:
  order: 7
  link: true
---



在Python中，迭代器协议是通过实现两个特殊方法来支持的：`__iter__()` 和 `__next__()`。这两个方法使得对象可以被迭代，即可以通过循环（如for循环）或者其他接受可迭代对象的函数或构造器（如列表推导式、`sum()`等）来使用。

### 迭代器协议

1. **`__iter__(self)`**：此方法返回一个迭代器对象。对于迭代器本身来说，通常它会返回 `self`，因为迭代器本身就是自己的迭代器。
   
2. **`__next__(self)`**：此方法返回容器中的下一个项目。如果没有更多元素可供返回，则应引发 `StopIteration` 异常以停止迭代。

一旦 `StopIteration` 被触发，迭代将停止，这意味着遍历已到达末尾。这允许Python知道何时停止尝试从迭代器中获取值。

### 示例

下面是一个简单的例子，演示如何创建一个自定义迭代器来遍历斐波那契数列：

```python
class Fib:
    def __init__(self, max_value):
        self.max = max_value
        self.a, self.b = 0, 1

    def __iter__(self):
        return self

    def __next__(self):
        fib = self.a
        if fib > self.max:
            raise StopIteration
        self.a, self.b = self.b, self.a + self.b
        return fib

# 使用示例
fib_iter = Fib(10)
for value in fib_iter:
    print(value)

# 输出斐波那契数列中小于等于10的值：
# 0
# 1
# 1
# 2
# 3
# 5
# 8
```

在这个例子中，`Fib` 类实现了迭代器协议。`__iter__()` 方法返回迭代器自身，而 `__next__()` 方法计算并返回下一个斐波那契数。如果下一个数超过了指定的最大值 (`max_value`)，则抛出 `StopIteration` 异常以终止迭代。

通过这种方式，你可以创建任何类型的迭代器来遍历自定义的数据结构或者算法序列，而不仅仅是内置类型（如列表、元组等）。此外，理解迭代器协议对于有效利用Python的内存管理和性能优化也非常有帮助，因为它允许你逐个处理数据项而不是一次性加载整个数据集到内存中。
