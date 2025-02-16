---
title: While
article: false
order: 2
---

在Python中，`while`循环是一种基本的循环控制结构，它允许代码块根据给定的条件重复执行。只要条件为真（`True`），循环就会继续执行。当条件变为假（`False`）时，循环终止。

### 基本语法

```python
while condition:
    # 当condition为True时重复执行的代码块
    pass
```

### 示例

以下是一个简单的`while`循环示例，该循环会打印数字从1到5：

```python
count = 1
while count <= 5:
    print(count)
    count += 1
```

在这个例子中，`count`初始化为1，循环条件`count <= 5`在`count`的值小于或等于5时为真。在每次循环迭代中，都会打印当前的`count`值，然后`count`的值增加1。当`count`的值增加到6时，条件变为假，循环终止。

### 无限循环

如果不小心编写了一个永远为真的条件，就会创建一个无限循环。无限循环可能会导致程序挂起或崩溃，因此通常需要避免它们。但是，在某些情况下（如服务器监听客户端连接时），无限循环可能是有意的。

```python
# 这是一个无限循环的示例
while True:
    print("This will print forever unless interrupted")
    # 通常，这里会有一些条件检查来在适当的时候使用break语句退出循环
```

要中断无限循环，可以使用`break`语句，或者通过外部手段（如用户中断或程序崩溃）来终止程序。

### 使用`break`和`continue`

- `break`语句用于立即退出循环，不再执行循环体中剩余的代码，也不再进行条件判断。
- `continue`语句用于跳过当前循环迭代中剩余的代码，并立即进行下一次条件判断（如果条件仍然为真，则继续执行循环体）。

```python
# 使用break退出循环的示例
count = 0
while True:
    count += 1
    print(count)
    if count >= 5:
        break  # 当count达到5时退出循环
 
# 使用continue跳过当前迭代的示例
for i in range(1, 6):
    if i == 3:
        continue  # 跳过i等于3的迭代
    print(i)
```

在第一个例子中，`while True`创建了一个无限循环，但是`if count >= 5:`条件中的`break`语句在`count`达到5时终止了循环。在第二个例子中，`for`循环遍历从1到5的数字，但是`if i == 3:`条件中的`continue`语句导致当`i`等于3时跳过了`print(i)`语句。

### 嵌套`while`循环

`while`循环可以嵌套在其他循环内部，包括其他`while`循环或`for`循环。嵌套循环可以用于处理多维数据结构或执行更复杂的逻辑。

```python
# 嵌套while循环的示例
rows = 3
cols = 4
row_count = 0
while row_count < rows:
    col_count = 0
    while col_count < cols:
        print("*", end=" ")
        col_count += 1
    print()  # 换行到下一行
    row_count += 1
```

这个例子打印了一个3行4列的星号矩阵。外层`while`循环控制行数，内层`while`循环控制列数。