---
title: 比较运算符
article: false
order: 2
---

在 SQL 中，比较运算符用于比较两个值或表达式，并返回一个布尔值（`TRUE`、`FALSE` 或 `NULL`）。以下是 SQL 中常用的比较运算符及其用法：

---

## **1. 等于 (`=`)**
- **描述**: 比较两个值是否相等。
- **示例**:
  ```sql
  select * from users where age = 25;
  ```

---

## **2. 不等于 (`!=` 或 `<>`)**
- **描述**: 比较两个值是否不相等。
- **示例**:
  ```sql
  select * from users where age != 25;
  select * from users where age <> 25;
  ```

---

## **3. 大于 (`>`)**
- **描述**: 比较左边的值是否大于右边的值。
- **示例**:
  ```sql
  select * from users where age > 25;
  ```

---

## **4. 小于 (`<`)**
- **描述**: 比较左边的值是否小于右边的值。
- **示例**:
  ```sql
  select * from users where age < 25;
  ```

---

## **5. 大于等于 (`>=`)**
- **描述**: 比较左边的值是否大于或等于右边的值。
- **示例**:
  ```sql
  select * from users where age >= 25;
  ```

---

## **6. 小于等于 (`<=`)**
- **描述**: 比较左边的值是否小于或等于右边的值。
- **示例**:
  ```sql
  select * from users where age <= 25;
  ```

---

## **7. 在范围内 (`BETWEEN`)**
- **描述**: 比较值是否在指定范围内（包括边界值）。
- **示例**:
  ```sql
  select * from users where age between 18 and 30;
  ```

---

## **8. 不在范围内 (`NOT BETWEEN`)**
- **描述**: 比较值是否不在指定范围内。
- **示例**:
  ```sql
  select * from users where age not between 18 and 30;
  ```

---

## **9. 在列表中 (`IN`)**
- **描述**: 比较值是否在指定的列表中。
- **示例**:
  ```sql
  select * from users where age in (18, 25, 30);
  ```

---

## **10. 不在列表中 (`NOT IN`)**
- **描述**: 比较值是否不在指定的列表中。
- **示例**:
  ```sql
  select * from users where age not in (18, 25, 30);
  ```

---

## **11. 模糊匹配 (`LIKE`)**
- **描述**: 比较字符串是否匹配指定的模式。
- **通配符**:
  - `%`: 匹配任意数量的字符（包括零个字符）。
  - `_`: 匹配单个字符。
- **示例**:
  ```sql
  select * from users where name like 'j%';  -- 以 'j' 开头的名字
  select * from users where name like '_ohn';  -- 第二个字符是 'o' 且以 'hn' 结尾的名字
  ```

---

## **12. 不匹配 (`NOT LIKE`)**
- **描述**: 比较字符串是否不匹配指定的模式。
- **示例**:
  ```sql
  select * from users where name not like 'j%';
  ```

---

## **13. 为空 (`IS NULL`)**
- **描述**: 比较值是否为 `NULL`。
- **示例**:
  ```sql
  select * from users where email is null;
  ```

---

## **14. 不为空 (`IS NOT NULL`)**
- **描述**: 比较值是否不为 `NULL`。
- **示例**:
  ```sql
  select * from users where email is not null;
  ```

---

## **15. 正则表达式匹配 (`REGEXP`)**
- **描述**: 比较字符串是否匹配指定的正则表达式。
- **示例**:
  ```sql
  select * from users where name regexp '^j';  -- 以 'j' 开头的名字
  ```

---

## **16. 不匹配正则表达式 (`NOT REGEXP`)**
- **描述**: 比较字符串是否不匹配指定的正则表达式。
- **示例**:
  ```sql
  select * from users where name not regexp '^j';
  ```

---

## **17. 比较字符串 (`STRCMP`)**
- **描述**: 比较两个字符串的大小。
  - 返回 `0` 表示相等。
  - 返回 `1` 表示第一个字符串大于第二个字符串。
  - 返回 `-1` 表示第一个字符串小于第二个字符串。
- **示例**:
  ```sql
  select strcmp('apple', 'banana');  -- 返回 -1
  ```

---

## **18. 比较日期**
- **描述**: 比较日期类型的值。
- **示例**:
  ```sql
  select * from orders where order_date > '2023-10-01';
  ```

---

## **19. 比较时间**
- **描述**: 比较时间类型的值。
- **示例**:
  ```sql
  select * from schedules where start_time < '12:00:00';
  ```

---

## **20. 比较布尔值**
- **描述**: 比较布尔类型的值。
- **示例**:
  ```sql
  select * from users where is_active = true;
  ```

---

## **总结**
| 运算符        | 描述             | 示例                        |
| ------------- | ---------------- | --------------------------- |
| `=`           | 等于             | `age = 25`                  |
| `!=` 或 `<>`  | 不等于           | `age != 25` 或 `age <> 25`  |
| `>`           | 大于             | `age > 25`                  |
| `<`           | 小于             | `age < 25`                  |
| `>=`          | 大于等于         | `age >= 25`                 |
| `<=`          | 小于等于         | `age <= 25`                 |
| `BETWEEN`     | 在范围内         | `age BETWEEN 18 AND 30`     |
| `NOT BETWEEN` | 不在范围内       | `age NOT BETWEEN 18 AND 30` |
| `IN`          | 在列表中         | `age IN (18, 25, 30)`       |
| `NOT IN`      | 不在列表中       | `age NOT IN (18, 25, 30)`   |
| `LIKE`        | 模糊匹配         | `name LIKE 'j%'`            |
| `NOT LIKE`    | 不匹配           | `name NOT LIKE 'j%'`        |
| `IS NULL`     | 为空             | `email IS NULL`             |
| `IS NOT NULL` | 不为空           | `email IS NOT NULL`         |
| `REGEXP`      | 正则表达式匹配   | `name REGEXP '^j'`          |
| `NOT REGEXP`  | 不匹配正则表达式 | `name NOT REGEXP '^j'`      |
| `STRCMP`      | 比较字符串大小   | `STRCMP('apple', 'banana')` |

通过灵活使用这些比较运算符，可以高效地过滤和查询数据库中的数据！
