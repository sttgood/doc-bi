---
title: SELECT 语句
article: false
order: 1
---

最基本的 `SELECT` 语句用于从数据库表中查询数据。以下是其语法和示例：

---

## **语法**
```sql
select column1, column2, ...
from table_name;
```

- **`select`**: 指定要查询的列。
- **`from`**: 指定要查询的表。

---

## **示例**

### **1. 查询所有列**
```sql
select * from users;
```
- 查询 `users` 表中的所有列。

---

### **2. 查询特定列**
```sql
select name, email from users;
```
- 查询 `users` 表中的 `name` 和 `email` 列。

---

### **3. 查询带条件的数据**
```sql
select * from users where age > 18;
```
- 查询 `users` 表中 `age` 大于 18 的所有记录。

---

### **4. 查询并排序**
```sql
select * from users order by name asc;
```
- 查询 `users` 表中的所有记录，并按 `name` 升序排序。

---

### **5. 查询并限制返回行数**
```sql
select * from users limit 5;
```
- 查询 `users` 表中的前 5 条记录。

---

### **6. 查询去重数据**
```sql
select distinct city from users;
```
- 查询 `users` 表中不重复的 `city` 值。

---

### **7. 查询并计算**
```sql
select count(*) from users;
```
- 查询 `users` 表中的记录总数。

---

### **8. 查询并过滤空值**
```sql
select * from users where email is not null;
```
- 查询 `users` 表中 `email` 不为空的记录。

---

## **总结**
最基本的 `SELECT` 语句非常简单，但通过结合其他子句（如 `WHERE`、`ORDER BY`、`LIMIT` 等），可以实现强大的数据查询功能！
