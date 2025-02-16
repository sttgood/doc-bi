---
title: finally
article: false
order: 3
---
在 Python 的异常处理机制中，`try-except-finally` 结构里的 `finally` 子句是一个非常重要的部分，它为资源管理和代码的确定性执行提供了有力的保障。下面将详细介绍 `finally` 子句的相关内容。

### 基本语法
`try-except-finally` 语句的基本结构如下：
```python
try:
    # 可能会引发异常的代码块
    pass
except ExceptionType:
    # 当 try 块中抛出指定类型的异常时，执行此代码块
    pass
finally:
    # 无论 try 块中是否发生异常，都会执行此代码块
    pass
```

### 工作原理
- **执行 `try` 块**：Python 解释器首先执行 `try` 块中的代码。
- **异常发生**：如果在执行 `try` 块的过程中抛出了异常，并且该异常类型与某个 `except` 子句匹配，那么程序会跳转到对应的 `except` 块执行，执行完 `except` 块后，接着执行 `finally` 块。
- **无异常发生**：如果 `try` 块中的代码顺利执行完毕，没有抛出任何异常，程序会跳过所有的 `except` 块，直接执行 `finally` 块。

### 示例代码
#### 无异常情况
```python
try:
    num = 10 / 2
    print(num)
except ZeroDivisionError:
    print("除数不能为零！")
finally:
    print("这是 finally 块，无论如何都会执行。")
```
在这个例子中，`try` 块中的除法运算 `10 / 2` 不会引发异常，程序会正常输出结果 `5`，然后跳过 `except` 块，执行 `finally` 块，输出 “这是 finally 块，无论如何都会执行。”

#### 有异常情况
```python
try:
    num = 10 / 0
    print(num)
except ZeroDivisionError:
    print("除数不能为零！")
finally:
    print("这是 finally 块，无论如何都会执行。")
```
这里 `try` 块中的 `10 / 0` 会引发 `ZeroDivisionError` 异常，程序会执行 `except` 块，输出 “除数不能为零！”，之后仍然会执行 `finally` 块，输出相应信息。

### `finally` 子句的常见应用场景
#### 资源释放
`finally` 子句常用于确保资源（如文件、网络连接、数据库连接等）被正确释放，无论操作是否成功。例如，在处理文件时：
```python
file = None
try:
    file = open('test.txt', 'r')
    content = file.read()
    print(content)
except FileNotFoundError:
    print("文件未找到！")
finally:
    if file:
        file.close()
```
在这个例子中，不管 `try` 块中读取文件的操作是否成功，`finally` 块都会尝试关闭文件，避免资源泄漏。

#### 状态恢复
在某些情况下，程序可能会在执行过程中修改一些状态，使用 `finally` 子句可以确保这些状态在操作结束后被恢复到初始状态。比如在多线程编程中，对锁的操作：
```python
import threading

lock = threading.Lock()
try:
    lock.acquire()
    # 执行一些需要加锁的操作
    print("正在执行加锁操作...")
except Exception as e:
    print(f"发生异常: {e}")
finally:
    if lock.locked():
        lock.release()
```
这里 `finally` 块保证了无论 `try` 块中的操作是否成功，锁都会被释放，避免死锁的发生。

### `finally` 与 `return`、`break`、`continue` 的关系
在 `try` 或 `except` 块中使用 `return`、`break` 或 `continue` 语句时，`finally` 块仍然会在这些语句执行之前被执行。例如：
```python
def test_function():
    try:
        return 1
    finally:
        print("执行 finally 块")

result = test_function()
print(result)
```
在这个例子中，`try` 块中有 `return` 语句，但 `finally` 块会先执行，输出 “执行 finally 块”，然后才返回结果 `1`。

综上所述，`finally` 子句为 Python 程序提供了一种可靠的方式来确保某些代码段无论异常情况如何都会被执行，在资源管理和代码的确定性执行方面发挥着重要作用。 