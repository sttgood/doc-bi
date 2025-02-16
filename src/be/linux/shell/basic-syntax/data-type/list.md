---
title: 关联数组
article: false
order: 3
---

Bash 4及以上版本支持关联数组，也称为哈希表或字典。关联数组允许使用**字符串**作为索引。

- **声明关联数组**：使用`declare -A`命令。

  ```bash
  declare -A my_assoc_array
  ```

- **赋值和访问**：使用字符串作为键来赋值和访问值。

  ```bash
  my_assoc_array[key1]="value1"
  echo ${my_assoc_array[key1]}  # 输出 value1
  ```
