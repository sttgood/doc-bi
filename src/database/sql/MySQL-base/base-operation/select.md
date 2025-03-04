---
title: 查询数据
article: false
order: 5
---

以下是 **小写** 的 `select` 语句的详细用法和示例：

---

## **1. 基本语法**
```sql
select column1, column2, ...
from table_name
where condition
order by column asc|desc
limit number;
```

- **`select`**: 指定要查询的列。
- **`from`**: 指定要查询的表。
- **`where`**: 过滤条件（可选）。
- **`order by`**: 排序结果（可选）。
- **`limit`**: 限制返回的行数（可选）。

---

## **2. 查询所有列**
查询表中的所有列：
```sql
select * from table_name;
```

**示例**：  
查询 `users` 表中的所有数据：
```sql
select * from users;
```

---

## **3. 查询特定列**
查询表中的特定列：
```sql
select column1, column2 from table_name;
```

**示例**：  
查询 `users` 表中的 `id` 和 `name` 列：
```sql
select id, name from users;
```

---

## **4. 过滤数据（where）**
使用 `where` 子句过滤数据：
```sql
select * from table_name where condition;
```

**示例**：  
查询 `users` 表中 `age` 大于 18 的记录：
```sql
select * from users where age > 18;
```

**常见条件运算符**：
- `=`: 等于
- `!=` 或 `<>`: 不等于
- `>`: 大于
- `<`: 小于
- `>=`: 大于等于
- `<=`: 小于等于
- `between`: 在范围内
- `like`: 模糊匹配
- `in`: 在列表中

**示例**：  
查询 `users` 表中 `name` 为 `john` 的记录：
```sql
select * from users where name = 'john';
```

---

## **5. 排序结果（order by）**
使用 `order by` 子句对结果排序：
```sql
select * from table_name order by column asc|desc;
```

- **`asc`**: 升序（默认）。
- **`desc`**: 降序。

**示例**：  
查询 `users` 表中的所有记录，并按 `age` 降序排序：
```sql
select * from users order by age desc;
```

---

## **6. 限制返回的行数（limit）**
使用 `limit` 子句限制返回的行数：
```sql
select * from table_name limit number;
```

**示例**：  
查询 `users` 表中的前 5 条记录：
```sql
select * from users limit 5;
```

---

## **7. 去重查询（distinct）**
使用 `distinct` 去除重复值：
```sql
select distinct column from table_name;
```

**示例**：  
查询 `users` 表中不重复的 `city` 值：
```sql
select distinct city from users;
```

---

## **8. 聚合函数**
常用聚合函数：
- `count()`: 统计行数。
- `sum()`: 求和。
- `avg()`: 求平均值。
- `max()`: 求最大值。
- `min()`: 求最小值。

**示例**：  
查询 `users` 表中的记录总数：
```sql
select count(*) from users;
```

查询 `users` 表中 `age` 的平均值：
```sql
select avg(age) from users;
```

---

## **9. 分组查询（group by）**
使用 `group by` 对结果分组：
```sql
select column, aggregate_function(column)
from table_name
group by column;
```

**示例**：  
查询 `users` 表中每个城市的用户数量：
```sql
select city, count(*) from users group by city;
```

---

## **10. 分组过滤（having）**
使用 `having` 过滤分组后的结果：
```sql
select column, aggregate_function(column)
from table_name
group by column
having condition;
```

**示例**：  
查询 `users` 表中用户数量大于 10 的城市：
```sql
select city, count(*) from users group by city having count(*) > 10;
```

---

## **11. 多表查询（join）**
使用 `join` 查询多个表的数据：
```sql
select columns
from table1
join table2 on table1.column = table2.column;
```

**示例**：  
查询 `users` 表和 `orders` 表，获取每个用户的订单信息：
```sql
select users.name, orders.order_id
from users
join orders on users.id = orders.user_id;
```

---

## **12. 子查询**
子查询是嵌套在另一个查询中的查询：
```sql
select column
from table_name
where column in (select column from table_name where condition);
```

**示例**：  
查询 `users` 表中 `age` 大于平均年龄的用户：
```sql
select * from users where age > (select avg(age) from users);
```

---

## **13. 联合查询（union）**
使用 `union` 合并多个查询的结果：
```sql
select column from table1
union
select column from table2;
```

**示例**：  
查询 `users` 表和 `customers` 表中的所有 `name`：
```sql
select name from users
union
select name from customers;
```

---

## **14. 别名（as）**
使用 `as` 为列或表设置别名：
```sql
select column as alias from table_name;
```

**示例**：  
查询 `users` 表中的 `name` 列，并将其显示为 `username`：
```sql
select name as username from users;
```

---

## **15. 条件逻辑（case）**
使用 `case` 实现条件逻辑：
```sql
select column,
       case
           when condition then result
           else default_result
       end as alias
from table_name;
```

**示例**：  
查询 `users` 表中的 `age`，并将其分类为 `young` 或 `adult`：
```sql
select name,
       case
           when age < 18 then 'young'
           else 'adult'
       end as age_group
from users;
```

---

通过灵活使用 `select` 语句，可以高效地从数据库中提取所需数据！
