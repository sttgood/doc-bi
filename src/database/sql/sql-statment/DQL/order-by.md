---
title: ORDER BY 子句
article: false
order: 3
---

`ORDER BY` 子句用于对查询结果进行排序。它可以按一个或多个列对结果进行升序（`ASC`）或降序（`DESC`）排序。以下是 `ORDER BY` 子句的详细说明和示例：

---

## **语法**
```sql
select column1, column2, ...
from table_name
order by column1 [asc|desc], column2 [asc|desc], ...;
```

- **`column1, column2, ...`**: 要排序的列。
- **`asc`**: 升序（默认）。
- **`desc`**: 降序。

---

## **示例**

### **1. 单列排序**
```sql
select * from users order by name asc;
```
- 查询 `users` 表中的所有记录，并按 `name` 升序排序。

---

### **2. 降序排序**
```sql
select * from users order by age desc;
```
- 查询 `users` 表中的所有记录，并按 `age` 降序排序。

---

### **3. 多列排序**
```sql
select * from users order by city asc, age desc;
```
- 查询 `users` 表中的所有记录，先按 `city` 升序排序，再按 `age` 降序排序。

---

### **4. 结合 `WHERE` 子句**
```sql
select * from users where age > 18 order by name asc;
```
- 查询 `users` 表中 `age` 大于 18 的记录，并按 `name` 升序排序。

---

### **5. 结合 `LIMIT` 子句**
```sql
select * from users order by age desc limit 5;
```
- 查询 `users` 表中的所有记录，按 `age` 降序排序，并返回前 5 条记录。

---

### **6. 按表达式排序**
```sql
select * from users order by length(name) desc;
```
- 查询 `users` 表中的所有记录，并按 `name` 的长度降序排序。

---

### **7. 按列别名排序**
```sql
select name, age, (year(curdate()) - year(birthdate)) as age
from users
order by age desc;
```
- 查询 `users` 表中的 `name` 和 `age`，并按计算出的年龄降序排序。

---

### **8. 按列位置排序**
```sql
select name, age from users order by 2 desc;
```
- 查询 `users` 表中的 `name` 和 `age`，并按第 2 列（`age`）降序排序。

---

## **注意事项**
1. **默认排序**: 如果未指定 `ASC` 或 `DESC`，默认按升序排序。
2. **空值处理**: 在排序时，`NULL` 值会被视为最小值（升序时在最前面，降序时在最后面）。
3. **性能优化**: 对大型数据集排序可能会影响性能，建议在排序列上创建索引。

---

通过灵活使用 `ORDER BY` 子句，可以轻松地对查询结果进行排序，满足不同的需求！
