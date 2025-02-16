---
title: IdentityOperators
article: false
order: 6
---

在Python中，身份运算符用于比较两个对象的身份，即它们是否指向内存中的同一个位置。这与比较它们的值是否相等是不同的。Python提供了两个身份运算符：`is` 和 `is not`。

1. `is`：
   - 如果两个变量指向同一个对象（即它们在内存中的地址相同），则返回 `True`。
   - 常用于检查一个变量是否为 `None`，或者两个变量是否引用了同一个不可变对象（如字符串、数字或元组，在特定情况下）。
2. `is not`：
   - 如果两个变量不指向同一个对象（即它们在内存中的地址不同），则返回 `True`。
   - 是 `is` 的否定形式。

需要注意的是，对于可变对象（如列表、字典、集合等），即使它们的内容相同，`is` 运算符也可能返回 `False`，因为它们可能是不同的对象，只是在内存中存储了相同的数据。相反，对于不可变对象，如果它们的内容相同，Python有时会为了优化而重用它们，这时 `is` 可能会返回 `True`（但这并不是一种可靠的行为，因此通常不建议依赖它）。

以下是一些使用身份运算符的示例：

```python
# 检查一个变量是否为 None
a = None
print(a is None)  # 输出: True
 
# 比较两个变量是否指向同一个对象
b = [1, 2, 3]
c = b
d = [1, 2, 3]
 
print(b is c)  # 输出: True，因为 b 和 c 指向同一个列表对象
print(b is d)  # 输出: False，因为 b 和 d 是不同的列表对象，尽管它们的内容相同
 
# 对于小整数和短字符串，Python可能会缓存它们，因此 is 可能会返回 True
e = 1000
f = 1000
g = 256
h = 256
 
print(e is f)  # 输出可能是 False，取决于Python的实现和版本
print(g is h)  # 输出可能是 True，因为小整数通常被缓存
 
# 字符串的情况类似，但更依赖于实现和字符串的长度
i = "hello"
j = "hello"
k = "a very long string that is unlikely to be cached"
l = "a very long string that is unlikely to be cached"
 
print(i is j)  # 输出可能是 True，因为短字符串可能被缓存
print(k is l)  # 输出: False，因为长字符串通常不会被缓存
```

请注意，上述关于字符串和小整数的缓存行为可能因Python的实现和版本而异，并且通常不建议依赖这种行为进行编程。对于一般的值比较，应该使用 `==` 和 `!=` 运算符。身份运算符 `is` 和 `is not` 应该仅用于检查对象的身份。