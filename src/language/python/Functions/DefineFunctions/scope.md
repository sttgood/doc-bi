---
title: 作用域
article: false
order: 5
---

在Python中，作用域（Scope）是指变量、函数和类等标识符在代码中的可见性和生命周期。Python主要有四种作用域：

1. 局部作用域（Local Scope）：

   - 局部作用域是函数或方法内部定义的作用域。

   - 在局部作用域中定义的变量只能在该函数或方法内部访问，外部无法访问。

   - 例如：

     ```python
     def my_function():
         local_variable = "I am local"
         print(local_variable)
      
     my_function()  # 输出: I am local
     # print(local_variable)  # 会引发 NameError
     ```

2. 嵌套作用域（Enclosing Scope 或 Nonlocal Scope）：

   - 嵌套作用域是指在一个函数内部定义的另一个函数（嵌套函数）可以访问其外部函数的变量。

   - 使用 `nonlocal` 关键字可以在嵌套函数中修改外部函数的变量。

   - 例如：

     ```python
     def outer_function():
         enclosing_variable = "I am enclosing"
      
         def inner_function():
             nonlocal enclosing_variable
             enclosing_variable = "I am modified"
             print(enclosing_variable)
      
         inner_function()
         print(enclosing_variable)
      
     outer_function()
     # 输出:
     # I am modified
     # I am modified
     ```

3. 全局作用域（Global Scope）：

   - 全局作用域是指在整个模块（Python文件）中定义的作用域。

   - 在全局作用域中定义的变量可以在整个模块中访问，包括在函数内部（但函数内部不能直接修改全局变量，除非使用 `global` 关键字）。

   - 例如：

     ```python
     global_variable = "I am global"
      
     def my_function():
         print(global_variable)
         # global_variable = "I am modified"  # 若要修改全局变量，需先声明 global
      
     my_function()  # 输出: I am global
      
     # 修改全局变量
     global global_variable
     global_variable = "I am modified"
     print(global_variable)  # 输出: I am modified
     ```

4. 内置作用域（Built-in Scope）：

   - 内置作用域是指Python内置的标识符（如内置函数和异常）的作用域。
   - 内置作用域中的标识符在任何地方都可以访问，无需导入或声明。
   - 例如：`len()`, `print()`, `Exception` 等。

### 注意事项

- 在函数内部，如果局部变量和全局变量同名，局部变量会覆盖全局变量。
- 使用 `global` 关键字可以在函数内部声明对全局变量的引用或修改。
- 使用 `nonlocal` 关键字可以在嵌套函数中声明对外部函数变量的引用或修改。

理解这些作用域规则对于编写清晰、可维护的Python代码非常重要。