---
title: WHERE 子句
article: false
order: 2
---

`WHERE` 子句用于在 SQL 查询中过滤数据，仅返回满足指定条件的记录。以下是 `WHERE` 子句的详细说明和示例：

---

## **1. 基本语法**
```sql
select column1, column2, ...
from table_name
where condition;
```

- **`condition`**: 过滤条件，可以是比较、逻辑或模式匹配表达式。

---

## **2. 比较运算符**
以下是比较运算符的示例：

| 运算符       | 描述     | 示例                       |
| ------------ | -------- | -------------------------- |
| `=`          | 等于     | `age = 25`                 |
| `!=` 或 `<>` | 不等于   | `age != 25` 或 `age <> 25` |
| `>`          | 大于     | `age > 25`                 |
| `<`          | 小于     | `age < 25`                 |
| `>=`         | 大于等于 | `age >= 25`                |
| `<=`         | 小于等于 | `age <= 25`                |

**示例**:
```sql
select * from users where age > 18;
```

---

## **3. 逻辑运算符**
以下是逻辑运算符的示例：

| 运算符 | 描述   | 示例                                        |
| ------ | ------ | ------------------------------------------- |
| `AND`  | 逻辑与 | `age > 18 AND city = 'New York'`            |
| `OR`   | 逻辑或 | `city = 'New York' OR city = 'Los Angeles'` |
| `NOT`  | 逻辑非 | `NOT city = 'New York'`                     |

**示例**:
```sql
select * from users where age > 18 and city = 'New York';
```

---

## **4. 模式匹配**
以下是模式匹配的示例：

| 运算符     | 描述     | 示例                 |
| ---------- | -------- | -------------------- |
| `LIKE`     | 模糊匹配 | `name LIKE 'J%'`     |
| `NOT LIKE` | 不匹配   | `name NOT LIKE 'J%'` |

**示例**:
```sql
select * from users where name like 'J%';
```

---

## **5. 范围过滤**
以下是范围过滤的示例：

| 运算符        | 描述       | 示例                        |
| ------------- | ---------- | --------------------------- |
| `BETWEEN`     | 在范围内   | `age BETWEEN 18 AND 30`     |
| `NOT BETWEEN` | 不在范围内 | `age NOT BETWEEN 18 AND 30` |

**示例**:
```sql
select * from users where age between 18 and 30;
```

---

## **6. 列表过滤**
以下是列表过滤的示例：

| 运算符   | 描述       | 示例                                      |
| -------- | ---------- | ----------------------------------------- |
| `IN`     | 在列表中   | `city IN ('New York', 'Los Angeles')`     |
| `NOT IN` | 不在列表中 | `city NOT IN ('New York', 'Los Angeles')` |

**示例**:
```sql
select * from users where city in ('New York', 'Los Angeles');
```

---

## **7. 空值过滤**
以下是空值过滤的示例：

| 运算符        | 描述   | 示例                |
| ------------- | ------ | ------------------- |
| `IS NULL`     | 为空   | `email IS NULL`     |
| `IS NOT NULL` | 不为空 | `email IS NOT NULL` |

**示例**:
```sql
select * from users where email is not null;
```

---

## **8. 组合条件**
可以使用括号 `()` 组合多个条件。

**示例**:
```sql
select * from users
where (age > 18 and city = 'New York')
   or (age > 25 and city = 'Los Angeles');
```

---

## **9. 示例应用**

### **(1) 查询特定城市且年龄大于 18 的用户**
```sql
select * from users
where city = 'New York' and age > 18;
```

### **(2) 查询名字以 'J' 开头的用户**
```sql
select * from users
where name like 'J%';
```

### **(3) 查询年龄在 18 到 30 之间的用户**
```sql
select * from users
where age between 18 and 30;
```

### **(4) 查询邮箱不为空的用户**
```sql
select * from users
where email is not null;
```

---

## **10. 注意事项**
1. **区分大小写**: 在某些数据库中，字符串比较是区分大小写的。可以使用函数（如 `LOWER()`）忽略大小写。
   ```sql
   select * from users where lower(city) = 'new york';
   ```
2. **性能优化**: 在 `WHERE` 子句中使用索引列作为条件，可以提高查询性能。
3. **空值处理**: 使用 `IS NULL` 或 `IS NOT NULL` 来检查空值，而不是 `= NULL`。

---

通过灵活使用 `WHERE` 子句，可以高效地过滤和查询数据库中的数据！
