---
title: try-except
article: false
order: 1
---

在 Python 中，`try-except` 语句是用于捕获和处理异常的重要工具。它可以让程序在遇到错误时不会直接崩溃，而是执行相应的异常处理代码，从而增强程序的健壮性。下面从基本语法、工作原理、捕获多种异常、捕获通用异常、异常对象获取等方面详细介绍 `try-except` 语句。

### 基本语法
`try-except` 语句的基本结构如下：
```python
try:
    # 可能会出现异常的代码块
    # ...
except ExceptionType:
    # 当 try 块中抛出指定类型的异常时，执行此代码块
    # ...
```
以下是一个简单的示例：
```python
try:
    result = 1 / 0
except ZeroDivisionError:
    print("除数不能为零！")
```
在这个例子中，`try` 块中的 `1 / 0` 会引发 `ZeroDivisionError` 异常，由于 `except` 子句指定了要捕获的异常类型为 `ZeroDivisionError`，所以程序会执行 `except` 块中的代码，输出 “除数不能为零！”。

### 工作原理
1. **执行 `try` 块**：Python 解释器首先执行 `try` 块中的代码。
2. **异常检查**：如果在执行 `try` 块的过程中没有发生异常，那么 `except` 块将被忽略，程序继续执行 `try-except` 语句之后的代码。
3. **异常捕获与处理**：如果在 `try` 块中发生了异常，Python 解释器会立即停止执行 `try` 块中的剩余代码，然后查找与该异常类型匹配的 `except` 子句。如果找到匹配的 `except` 子句，就执行该子句中的代码；如果没有找到匹配的子句，异常将继续向上抛出，可能导致程序崩溃。

### 捕获多种异常
可以在一个 `try` 语句中使用多个 `except` 子句来捕获不同类型的异常，示例如下：
```python
try:
    num = int("abc")
    result = 1 / num
except ValueError:
    print("输入的不是有效的整数！")
except ZeroDivisionError:
    print("除数不能为零！")
```
在这个例子中，`try` 块中的 `int("abc")` 会引发 `ValueError` 异常，程序会执行对应的 `except ValueError` 块中的代码，输出 “输入的不是有效的整数！”。如果 `int()` 转换成功，而后续的除法运算出现除零错误，程序则会执行 `except ZeroDivisionError` 块中的代码。

### 捕获通用异常
可以使用不指定异常类型的 `except` 子句来捕获所有异常，但这种做法通常不推荐，因为它会掩盖程序中可能存在的其他问题，不利于调试。示例如下：
```python
try:
    data = {}
    value = data["key"]
except:
    print("出现了异常！")
```
在这个例子中，`try` 块中的 `data["key"]` 会引发 `KeyError` 异常，由于 `except` 子句没有指定异常类型，所以会捕获该异常并执行 `except` 块中的代码，输出 “出现了异常！”。

### 获取异常对象
在 `except` 子句中，可以使用 `as` 关键字将异常对象赋值给一个变量，从而获取异常的详细信息。示例如下：
```python
try:
    num = int("abc")
except ValueError as e:
    print(f"捕获到异常: {e}")
```
在这个例子中，`except` 子句将捕获到的 `ValueError` 异常对象赋值给变量 `e`，然后通过 `print` 语句输出异常信息。

### 异常捕获顺序
当有多个 `except` 子句时，Python 会按照它们在代码中出现的顺序依次检查异常类型。因此，捕获范围较窄的异常应该放在前面，捕获范围较宽的异常放在后面，否则较窄的异常可能永远不会被捕获。示例如下：
```python
try:
    num = int("abc")
except ValueError:
    print("输入的不是有效的整数！")
except Exception:
    print("发生了其他异常！")
```
在这个例子中，`ValueError` 是 `Exception` 的子类，捕获范围较窄，所以放在前面。如果将 `except Exception` 放在前面，那么 `ValueError` 异常将被 `except Exception` 子句捕获，`except ValueError` 子句将永远不会被执行。

通过合理使用 `try-except` 语句，可以有效地处理程序中可能出现的异常，提高程序的稳定性和可靠性。 