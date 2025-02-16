---
title: 函数参数
article: false
order: 2
---

以下是Python函数参数的详细说明，涵盖参数类型、传递机制及常见用法：

---

### **1. 参数类型**
#### **(1) 位置参数 (Positional Arguments)**
- **定义**：按参数定义的顺序传递值。
- **示例**：
  ```python
  def greet(name, message):
      print(f"{message}, {name}!")
  
  greet("Alice", "Hello")  # Hello, Alice!
  ```

#### **(2) 默认参数 (Default Arguments)**
- **定义**：参数可指定默认值，调用时可省略。
- **示例**：
  ```python
  def power(base, exponent=2):
      return base ** exponent
  
  print(power(3))     # 9 (exponent=2)
  print(power(2, 4))  # 16
  ```
- **陷阱**：默认参数必须为不可变对象！
  ```python
  # 错误示例：默认参数为列表（可变对象）
  def add_item(item, lst=[]):
      lst.append(item)
      return lst
  
  print(add_item(1))  # [1]
  print(add_item(2))  # [1, 2]（默认列表被共享）
  ```
  **修复方法**：
  ```python
  def add_item(item, lst=None):
      lst = [] if lst is None else lst
      lst.append(item)
      return lst
  ```

#### **(3) 可变位置参数 (`*args`)**
- **定义**：接收任意数量的位置参数，打包为元组。
- **示例**：
  ```python
  def sum_values(*args):
      return sum(args)
  
  print(sum_values(1, 2, 3))  # 6
  ```

#### **(4) 可变关键字参数 (`**kwargs`)**
- **定义**：接收任意数量的关键字参数，打包为字典。
- **示例**：
  ```python
  def print_config(**kwargs):
      for key, value in kwargs.items():
          print(f"{key}: {value}")
  
  print_config(color="red", size=10)
  # 输出：
  # color: red
  # size: 10
  ```

#### **(5) 仅限关键字参数 (Keyword-only Arguments)**
- **定义**：Python 3+ 支持，强制某些参数必须以关键字形式传递。
- **语法**：在参数前添加 `*` 或 `*args` 分隔。
- **示例**：
  ```python
  def connect(*, host, port):
      print(f"Connecting to {host}:{port}")
  
  connect(host="localhost", port=8080)  # 正确
  connect("localhost", 8080)           # 报错：需关键字传参
  ```

#### **(6) 位置仅参数 (Positional-only Arguments)**
- **定义**：Python 3.8+ 支持，强制某些参数只能按位置传递。
- **语法**：使用 `/` 分隔参数。
- **示例**：
  ```python
  def split_path(path, /, separator="/"):
      return path.split(separator)
  
  split_path("/home/user", separator="\\")  # 正确
  split_path(path="/home/user")             # 报错：path 必须位置传参
  ```

---

### **2. 参数传递机制**
- **不可变对象**（如整数、字符串、元组）：传递值的副本。
- **可变对象**（如列表、字典）：传递对象引用，函数内修改会影响原对象。
- **示例**：
  ```python
  def modify(num, lst):
      num += 1
      lst.append(4)
  
  a = 10
  b = [1, 2, 3]
  modify(a, b)
  print(a)  # 10（未改变）
  print(b)  # [1, 2, 3, 4]（已修改）
  ```

---

### **3. 参数顺序规则**
参数定义的顺序必须严格遵守以下规则：
1. 位置参数 → 
2. 默认参数 → 
3. `*args` → 
4. 关键字参数 → 
5. `**kwargs`

**示例**：
```python
def func(a, b=0, *args, c=10, **kwargs):
    print(a, b, args, c, kwargs)

func(1, 2, 3, 4, c=5, d=6)
# 输出：1 2 (3, 4) 5 {'d': 6}
```

---

### **4. 参数解包**
- **`*` 解包序列**：将列表/元组解包为位置参数。
- **`**` 解包字典**：将字典解包为关键字参数。
- **示例**：
  ```python
  def draw_point(x, y):
      print(f"Drawing at ({x}, {y})")
  
  point = (3, 4)
  draw_point(*point)  # 等效于 draw_point(3, 4)
  
  config = {"x": 5, "y": 6}
  draw_point(**config)  # 等效于 draw_point(x=5, y=6)
  ```

---

### **5. 常见问题与技巧**
#### **(1) 混合使用 `*args` 和 `**kwargs`**
```python
def wrapper(*args, **kwargs):
    print("Args:", args)
    print("Kwargs:", kwargs)

wrapper(1, 2, a=3, b=4)
# 输出：
# Args: (1, 2)
# Kwargs: {'a': 3, 'b': 4}
```

#### **(2) 强制参数类型**
使用类型注解（Type Hints）增强可读性：
```python
def multiply(x: int, y: int) -> int:
    return x * y
```

#### **(3) 参数校验**
在函数内部验证参数合法性：
```python
def sqrt(x):
    if x < 0:
        raise ValueError("x 不能为负数")
    return x ** 0.5
```

---

### **6. 最佳实践**
1. **优先使用位置参数**：简化调用。
2. **默认参数用不可变对象**：避免意外共享。
3. **明确参数名**：增强可读性。
4. **合理使用 `*args` 和 `**kwargs`**：处理可变参数或包装函数。
5. **参数顺序严格遵循规则**：避免语法错误。

---

**示例：综合应用**
```python
def process_data(name, threshold=0.5, *scores, normalize=True, **options):
    print(f"Processing {name} with threshold {threshold}")
    print("Scores:", scores)
    print("Normalize:", normalize)
    print("Options:", options)

process_data("Data1", 0.7, 80, 90, normalize=False, method="mean")
# 输出：
# Processing Data1 with threshold 0.7
# Scores: (80, 90)
# Normalize: False
# Options: {'method': 'mean'}
```

掌握这些参数机制后，可以灵活设计函数接口，提升代码的可维护性和扩展性。