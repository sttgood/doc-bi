---
title: 函数闭包
article: false
order: 3
---

### **1. 闭包的定义**
闭包满足以下条件：
1. **嵌套函数**：闭包是定义在另一个函数内部的函数（内部函数）。
2. **引用外部变量**：内部函数引用了外部函数的变量。
3. **外部函数返回内部函数**：外部函数将内部函数作为返回值。

---

### **2. 创建闭包**
**示例**：一个简单的闭包，记录函数被调用的次数

```python
def counter():
    count = 0  # 外部函数的变量
    def increment():
        nonlocal count  # 声明非局部变量（Python 3+）
        count += 1
        return count
    return increment  # 返回内部函数

# 使用闭包
c = counter()
print(c())  # 1
print(c())  # 2
print(c())  # 3
```

**说明**：
- `increment()` 是一个闭包，它记住了外部函数 `counter()` 中的变量 `count`。
- `nonlocal` 关键字允许闭包修改外部函数的变量（Python 3+ 必需）。

---

### **3. 闭包的特性**
#### **(1) 记忆外部变量**
闭包会“捕获”外部函数的作用域中的变量，即使外部函数已经执行完毕：
```python
def outer(x):
    def inner(y):
        return x + y  # 访问外部函数的变量x
    return inner

add_5 = outer(5)  # x=5被闭包记住
print(add_5(3))   # 8
```

#### **(2) 延迟绑定问题**
在循环中创建闭包时，可能意外共享变量：
```python
# 错误示例：闭包共享变量i
functions = []
for i in range(3):
    def func():
        return i
    functions.append(func)

print([f() for f in functions])  # [2, 2, 2]
```

**修复方法**：通过默认参数立即绑定变量值
```python
functions = []
for i in range(3):
    def func(i=i):  # 立即绑定i的当前值
        return i
    functions.append(func)

print([f() for f in functions])  # [0, 1, 2]
```

---

### **4. 闭包的应用场景**
#### **(1) 装饰器（Decorator）**
装饰器本质上是闭包的应用：
```python
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@logger
def add(a, b):
    return a + b

print(add(3, 5))  # 先打印日志，再返回8
```

#### **(2) 数据封装**
闭包可以隐藏数据，实现类似面向对象的私有变量：
```python
def create_account(initial_balance):
    balance = initial_balance  # 闭包内部变量，外部不可直接访问
    def deposit(amount):
        nonlocal balance
        balance += amount
        return balance
    def withdraw(amount):
        nonlocal balance
        if amount > balance:
            raise ValueError("Insufficient balance")
        balance -= amount
        return balance
    return deposit, withdraw

deposit, withdraw = create_account(100)
print(deposit(50))   # 150
print(withdraw(30))  # 120
```

#### **(3) 延迟计算**
闭包可以延迟执行某些操作：
```python
def lazy_sum(numbers):
    def calculate():
        return sum(numbers)
    return calculate

sum_func = lazy_sum([1, 2, 3, 4])
print(sum_func())  # 10
```

---

### **5. 注意事项**
#### **(1) 变量作用域**
- 在Python 2中，闭包无法直接修改外部变量（需使用可变对象如列表间接修改）。
- 在Python 3中，使用 `nonlocal` 关键字显式声明需修改的外部变量。

#### **(2) 内存消耗**
闭包会保留外部变量的引用，可能导致内存无法及时释放。若不再需要闭包，可手动解除引用：
```python
c = counter()
del c  # 释放闭包对象
```

#### **(3) 闭包与Lambda**
Lambda函数也可以形成闭包：
```python
def multiplier(n):
    return lambda x: x * n

times_3 = multiplier(3)
print(times_3(5))  # 15
```

---

### **6. 总结**
闭包的核心价值在于它能够：
1. **封装状态**：通过外部变量保存函数的状态。
2. **实现装饰器**：增强函数功能而不修改原函数。
3. **延迟执行**：按需触发计算或操作。

理解闭包是掌握Python高阶函数编程的关键！