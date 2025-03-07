---
title: 算数运算符
order: 1
article: false
---

用于数值计算（需在 `$(( ))` 或 `(( ))` 中使用）：

| 运算符 | 描述                 | 示例                    |
| :----- | :------------------- | :---------------------- |
| `+`    | 加法                 | `$((5 + 3))` → 8        |
| `-`    | 减法                 | `$((10 - 2))` → 8       |
| `*`    | 乘法                 | `$((3 * 4))` → 12       |
| `/`    | 整数除法（向下取整） | `$((7 / 2))` → 3        |
| `%`    | 取模（余数）         | `$((10 % 3))` → 1       |
| `**`   | 幂运算（Bash 4+）    | `$((2 ** 3))` → 8       |
| `++`   | 自增                 | `((a++))` → `a = a + 1` |
| `--`   | 自减                 | `((a--))` → `a = a - 1` |

#### **复合赋值运算符**

| 运算符 | 等价形式    | 示例         |
| :----- | :---------- | :----------- |
| `+=`   | `a = a + b` | `((a += 5))` |
| `-=`   | `a = a - b` | `((a -= 3))` |
| `*=`   | `a = a * b` | `((a *= 2))` |
| `/=`   | `a = a / b` | `((a /= 4))` |
| `%=`   | `a = a % b` | `((a %= 2))` |