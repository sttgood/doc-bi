---
title: 输入
article: false
order: 2
---

在Python中，输入数据通常使用内置的`input()`函数。这个函数会从标准输入（通常是键盘）读取一行文本，并将其作为一个字符串返回。如果你需要将输入转换为其他类型（如整数或浮点数），可以使用类型转换函数，如`int()`或`float()`。

以下是一些关于`input()`函数的使用示例：

```python
# 读取一行文本输入
user_input = input("请输入一些文本: ")
print("你输入的是:", user_input)
 
# 读取整数输入
try:
    user_number = int(input("请输入一个整数: "))
    print("你输入的数字是:", user_number)
except ValueError:
    print("输入的不是一个有效的整数")
 
# 读取浮点数输入
try:
    user_float = float(input("请输入一个浮点数: "))
    print("你输入的浮点数是:", user_float)
except ValueError:
    print("输入的不是一个有效的浮点数")
```

在上面的例子中，`input()`函数会打印提示信息，并等待用户输入。用户输入的内容会被读取为一个字符串，并存储在变量`user_input`中。对于整数和浮点数的输入，我们使用`int()`和`float()`函数尝试将字符串转换为相应的数值类型。如果转换失败（例如，用户输入的不是数字），则会引发`ValueError`异常，我们在`except`块中捕获并处理这个异常。

需要注意的是，`input()`函数总是返回字符串类型的输入，即使你期望的是数字或其他类型的数据。因此，在使用之前，你可能需要进行类型转换和错误处理。