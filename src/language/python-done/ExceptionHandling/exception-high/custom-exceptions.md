---
title: 自定义异常
article: false
order: 1
---
在 Python 中，尽管内置异常类型已经能应对许多常见的错误场景，但在特定的业务逻辑和应用程序里，我们常常需要创建自定义异常，以更精准地描述和处理程序运行时的特定错误。下面为你详细介绍自定义异常的相关内容。

### 为什么需要自定义异常
- **提升代码可读性**：自定义异常能为特定错误赋予清晰、有意义的名称，让代码的意图更加明确，方便其他开发者理解代码中可能出现的问题。
- **精确的错误处理**：不同的业务场景会产生独特的错误情况，自定义异常能让我们针对这些特殊情况进行精准的捕获和处理，避免使用通用异常导致错误处理过于宽泛。
- **增强代码可维护性**：随着项目的不断发展和功能的增加，自定义异常有助于我们更好地组织和管理错误处理逻辑，使代码更易于维护和扩展。

### 自定义异常的定义
在 Python 中，自定义异常通常通过创建一个新的类来实现，这个类需要继承自 `Exception` 类或其某个子类。以下是几种不同形式的自定义异常定义示例。

#### 简单的自定义异常类
```python
# 定义一个简单的自定义异常类，继承自 Exception
class MyCustomError(Exception):
    pass

# 抛出自定义异常的函数
def check_number(num):
    if num < 0:
        # 抛出我们自定义的异常
        raise MyCustomError("输入的数字不能为负数！")
    return num

try:
    result = check_number(-5)
except MyCustomError as e:
    print(f"捕获到自定义异常: {e}")
```
在上述代码中，我们定义了 `MyCustomError` 类，它继承自 `Exception`。在 `check_number` 函数里，如果输入的数字为负数，就会抛出这个自定义异常。在 `try-except` 块中，我们捕获该异常并打印出异常信息。

#### 带参数的自定义异常类
有时候，我们需要在抛出异常时传递额外的信息，这时可以在自定义异常类中添加构造函数。
```python
class InputRangeError(Exception):
    def __init__(self, input_value, min_value, max_value, message="输入的值不在有效范围内"):
        # 保存输入的值
        self.input_value = input_value
        # 保存有效范围的最小值
        self.min_value = min_value
        # 保存有效范围的最大值
        self.max_value = max_value
        # 调用父类的构造函数，传递错误消息
        super().__init__(message)

def validate_input(value):
    min_val = 0
    max_val = 100
    if value < min_val or value > max_val:
        # 抛出带有参数的自定义异常
        raise InputRangeError(value, min_val, max_val, f"输入的值 {value} 不在 {min_val} 到 {max_val} 范围内")
    return value

try:
    result = validate_input(150)
except InputRangeError as e:
    print(f"输入值: {e.input_value}, 错误信息: {e}")
```
在这个例子中，`InputRangeError` 类的构造函数接受输入值、最小值、最大值和错误消息作为参数。当输入值不在指定范围内时，`validate_input` 函数会抛出这个自定义异常，并传递详细的错误信息。在 `except` 块中，我们可以访问异常对象的属性来获取这些信息。

### 自定义异常的继承结构
我们可以创建多个自定义异常类，并通过继承关系构建一个异常类层次结构，以便更灵活地处理不同类型的错误。
```python
# 定义一个基类自定义异常
class DatabaseError(Exception):
    pass

# 定义一个继承自 DatabaseError 的子类异常
class ConnectionError(DatabaseError):
    pass

# 定义另一个继承自 DatabaseError 的子类异常
class QueryError(DatabaseError):
    pass

def connect_to_database():
    # 模拟连接数据库失败
    raise ConnectionError("无法连接到数据库")

def execute_query():
    # 模拟执行查询时出错
    raise QueryError("查询语句有误")

try:
    connect_to_database()
except ConnectionError as e:
    print(f"连接数据库时出错: {e}")
except DatabaseError as e:
    print(f"数据库操作出错: {e}")

try:
    execute_query()
except QueryError as e:
    print(f"执行查询时出错: {e}")
except DatabaseError as e:
    print(f"数据库操作出错: {e}")
```
在这个示例中，我们定义了基类 `DatabaseError`，以及两个继承自它的子类 `ConnectionError` 和 `QueryError`。在不同的函数中，我们抛出不同类型的异常，并在 `try-except` 块中分别捕获和处理这些异常。通过这种继承结构，我们可以根据异常的类型进行更细致的错误处理，同时也可以使用基类异常来捕获和处理所有相关的数据库错误。

### 自定义异常的使用场景
- **业务逻辑验证**：在处理业务逻辑时，对输入数据进行验证，如果数据不符合业务规则，就抛出自定义异常。例如，在一个电商系统中，验证用户输入的商品数量是否为正整数。
```python
class InvalidQuantityError(Exception):
    pass

def check_quantity(quantity):
    if quantity <= 0:
        raise InvalidQuantityError("商品数量必须为正整数！")
    return quantity

try:
    result = check_quantity(0)
except InvalidQuantityError as e:
    print(e)
```
- **资源管理**：在管理系统资源（如文件、网络连接等）时，如果出现异常情况，可以抛出自定义异常来表示特定的资源管理错误。
```python
class FileAccessError(Exception):
    pass

def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
            return content
    except PermissionError:
        raise FileAccessError("没有权限访问该文件！")

try:
    result = read_file('protected_file.txt')
except FileAccessError as e:
    print(e)
```
- **框架和库开发**：在开发 Python 框架或库时，自定义异常可以帮助用户更清晰地了解使用过程中可能出现的错误，同时也便于开发者进行错误处理和调试。

通过以上内容，你可以全面了解 Python 中自定义异常的定义、使用方法和应用场景，从而在实际开发中更好地处理各种特定的错误情况。 