---
title: 数组基础
article: false
order: 3
---

## 数组基础

Bash支持一维数组，数组元素可以通过索引来访问。数组索引从0开始。

- **定义数组**：可以使用圆括号`()`来定义数组，元素之间用空格分隔。

  ```bash
  my_array=(element1 element2 element3)
  ```
  
- **访问数组元素**：使用`${array_name[index]}`语法。

  ```bash
  echo ${my_array[0]}  # 输出 element1
  ```
  
- **遍历数组**：可以使用`for`循环来遍历数组元素。

  ```bash
  for element in "${my_array[@]}"; do
      echo $element
  done
  ```
