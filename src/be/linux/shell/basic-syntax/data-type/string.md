---
title: 字符串
order: 1
article: false
---



## 字符串基础

字符串是Bash中最基本的数据类型。在Bash中，字符串可以是简单的文本，也可以是变量值。字符串不需要引号来定义，但在包含空格或特殊字符时，通常使用单引号（' '）或双引号（" "）来界定。

- **单引号字符串**：单引号内的所有字符都会被视为字面量，包括转义字符（除了单引号本身）。

  ```bash
  str1='Hello, World!'
  ```

- **双引号字符串**：双引号允许变量和命令替换（即反引号``command``或`$(command)`）被解析。

  ```bash
  str2="Hello, $USER!"
  str3="Current date and time: $(date)"
  ```

