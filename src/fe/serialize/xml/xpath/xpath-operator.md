---
title: Xpath运算符
article: false
order: 5
---

| **运算符** | **描述**       | **实例**                  | **返回值**                                                   |
| ---------- | -------------- | ------------------------- | ------------------------------------------------------------ |
| `|`        | 计算两个节点集 | //book \| //cd            | 返回所有拥有 book 和 cd 元素的节点集                         |
| `+`        | 加法           | 6 + 4                     | 10                                                           |
| `-`        | 减法           | 6 - 4                     | 2                                                            |
| `*`        | 乘法           | 6 * 4                     | 24                                                           |
| `div`      | 除法           | 8 div 4                   | 2                                                            |
| `=`        | 等于           | price=9.80                | 如果 price 是 9.80，则返回 true。  如果 price 是 9.90，则返回 false。 |
| `!=`       | 不等于         | price!=9.80               | 如果 price 是 9.90，则返回 true。  如果 price 是 9.80，则返回 false。 |
| `<`        | 小于           | price<9.80                | 如果 price 是 9.00，则返回 true。  如果 price 是 9.90，则返回 false。 |
| ``<=`      | 小于或等于     | price<=9.80               | 如果 price 是 9.00，则返回 true。  如果 price 是 9.90，则返回 false。 |
| `>`        | 大于           | price>9.80                | 如果 price 是 9.90，则返回 true。  如果 price 是 9.80，则返回 false。 |
| `>=`       | 大于或等于     | price>=9.80               | 如果 price 是 9.90，则返回 true。  如果 price 是 9.70，则返回 false。 |
| `or`       | 或             | price=9.80 or price=9.70  | 如果 price 是 9.80，则返回 true。  如果 price 是 9.50，则返回 false。 |
| `and`      | 与             | price>9.00 and price<9.90 | 如果 price 是 9.80，则返回 true。  如果 price 是 8.50，则返回 false。 |
| `mod`      | 计算除法的余数 | 5 mod 2                   | 1                                                            |

  |和or是不一样的。

   | ：返回节点集

  or：返回布尔表达式

XPath表达式的计算结果有4种：

- 节点集(node-set)：一个排序的没有重复的节点集合

- 布尔值(boolean): true或false

- 数字(number): 一个浮点数值

- 字符串(strng): 字符串数据
