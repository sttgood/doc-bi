---
title: 分支结构
article: false
order: 1
---

在Python中，条件语句用于根据某个条件（布尔表达式）的真假来执行不同的代码块。Python主要使用`if`、`elif`和`else`关键字来实现条件语句。以下是这些关键字的用法和一些示例：

### 基本语法

1. **简单的`if`语句**：

   ```python
   if condition:
       # 当condition为True时执行的代码块
       pass
   ```

2. **`if-else`语句**：

   ```python
   if condition:
       # 当condition为True时执行的代码块
       pass
   else:
       # 当condition为False时执行的代码块
       pass
   ```

3. **`if-elif-else`语句**：

   ```python
   if condition1:
       # 当condition1为True时执行的代码块
       pass
   elif condition2:
       # 当condition1为False且condition2为True时执行的代码块
       pass
   else:
       # 当所有条件都为False时执行的代码块
       pass
   ```

### 示例

1. **简单的`if`语句**：

   ```python
   x = 10
   if x > 5:
       print("x is greater than 5")
   ```

2. **`if-else`语句**：

   ```python
   x = 3
   if x > 5:
       print("x is greater than 5")
   else:
       print("x is not greater than 5")
   ```

3. **`if-elif-else`语句**：

   ```python
   x = 7
   if x > 10:
       print("x is greater than 10")
   elif x > 5:
       print("x is greater than 5 but less than or equal to 10")
   else:
       print("x is 5 or less")
   ```

### 嵌套条件语句

条件语句可以嵌套使用，即在一个条件语句的代码块中再包含另一个条件语句。

```python
x = 15
y = 20
 
if x > 10:
    if y > 15:
        print("Both x and y are greater than their respective thresholds")
    else:
        print("x is greater than 10, but y is not greater than 15")
else:
    print("x is 10 or less")
```

### 逻辑运算符

在条件语句中，逻辑运算符（如`and`、`or`和`not`）可以帮助组合多个条件。

```python
x = 12
y = 18
 
if x > 10 and y > 15:
    print("Both x and y are greater than their respective thresholds")
```

### 三元运算符（条件表达式）

Python还提供了一种简洁的条件表达式，称为三元运算符，用于在单行中实现简单的条件判断。

```python
x = 10
result = "x is greater than 5" if x > 5 else "x is 5 or less"
print(result)
```

总结来说，Python的条件语句非常灵活且易于使用，能够处理各种复杂的条件判断逻辑。通过合理使用`if`、`elif`、`else`以及逻辑运算符，可以编写出清晰且功能强大的代码。