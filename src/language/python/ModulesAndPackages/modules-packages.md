---
title: 模块和包基础
article: false
order: 1
---

在 Python 里，模块是组织代码的一种方式，它把相关的函数、类和变量放在一个文件中，方便代码的复用和管理。以下从多个方面详细介绍 Python 中的模块。

### 模块的定义与创建

模块就是一个包含 Python 代码的 `.py` 文件。例如，创建一个名为 `math_utils.py` 的文件，在其中编写如下代码：

```python
# math_utils.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

PI = 3.14159
```

这个 `math_utils.py` 文件就是一个模块，其中定义了两个函数 `add` 和 `subtract`，以及一个常量 `PI`。

### 模块的导入

#### `import` 语句

使用 `import` 语句可以将整个模块导入到当前代码中。例如，在另一个 Python 文件中使用 `math_utils` 模块：

```python
import math_utils

result_add = math_utils.add(3, 5)
result_subtract = math_utils.subtract(8, 2)
print(result_add)
print(result_subtract)
print(math_utils.PI)
```

在上述代码中，`import math_utils` 语句将 `math_utils` 模块导入，之后通过 `模块名.函数名` 或 `模块名.变量名` 的方式来使用模块中的函数和变量。

#### `from...import` 语句

使用 `from...import` 语句可以从模块中导入特定的函数、类或变量。例如：

```python
from math_utils import add, PI

result = add(4, 6)
print(result)
print(PI)
```

这里只导入了 `math_utils` 模块中的 `add` 函数和 `PI` 变量，使用时无需再加上模块名前缀。

#### `from...import *` 语句

使用 `from...import *` 语句可以导入模块中的所有内容。例如：

```python
from math_utils import *

result = subtract(10, 3)
print(result)
```

不过，这种方式可能会导致命名冲突，不建议在大型项目中使用。

### 模块的搜索路径

当使用 `import` 语句导入模块时，Python 会按照以下顺序搜索模块：

1. **内置模块**：Python 自带的一些内置模块，如 `math`、`os` 等，会优先被搜索。
2. **当前目录**：Python 会在当前执行脚本所在的目录中搜索模块。
3. **环境变量 `PYTHONPATH` 包含的目录**：可以通过设置 `PYTHONPATH` 环境变量来指定额外的模块搜索路径。
4. **Python 安装目录下的 `site-packages` 目录**：第三方库通常会安装在这个目录下。

可以通过 `sys.path` 查看 Python 的模块搜索路径：

```python
import sys
print(sys.path)
```

### 模块的 `__name__` 属性

每个模块都有一个 `__name__` 属性，它的值取决于模块的使用方式：

- 如果模块作为主程序运行，`__name__` 属性的值为 `'__main__'`。
- 如果模块被其他模块导入，`__name__` 属性的值为模块的名称（即文件名，不包含 `.py` 后缀）。

利用这个特性，可以在模块中添加测试代码，只有当模块作为主程序运行时才会执行这些测试代码。例如，在 `math_utils.py` 中添加如下代码：

```python
# math_utils.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

PI = 3.14159

if __name__ == '__main__':
    # 测试代码
    print(add(2, 3))
    print(subtract(7, 4))
```

当直接运行 `math_utils.py` 时，测试代码会被执行；当该模块被其他模块导入时，测试代码不会执行。

### 包的概念

包是一种组织模块的方式，它是一个包含多个模块的目录，并且该目录下必须包含一个名为 `__init__.py` 的文件（Python 3.3 及以后版本中，`__init__.py` 文件不是必需的，但为了兼容性，建议保留）。例如，创建一个名为 `my_package` 的包，目录结构如下：

```
my_package/
    __init__.py
    module1.py
    module2.py
```

在 `module1.py` 和 `module2.py` 中可以定义不同的模块内容，然后可以通过以下方式导入包中的模块：

```python
import my_package.module1
from my_package import module2
```

### 第三方模块的安装与使用

Python 有丰富的第三方模块，可通过 `pip` 工具进行安装。例如，安装 `requests` 模块：

```bash
pip install requests
```

安装完成后，就可以在代码中使用该模块：

```python
import requests

response = requests.get('https://www.example.com')
print(response.text)
```

通过以上内容，你可以全面了解 Python 中模块的定义、导入、搜索路径、`__name__` 属性、包的概念以及第三方模块的使用等方面的知识。
