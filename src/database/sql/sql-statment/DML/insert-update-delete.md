---
title: INSERT, UPDATE, DELETE 语句
article: false
order: 1
---

在 SQL 中，`INSERT`、`UPDATE` 和 `DELETE` 是用于操作数据的关键语句。以下是这些语句的详细说明和示例：

---

## **1. `INSERT` 语句**
`INSERT` 语句用于向表中插入新数据。

### **语法**
```sql
insert into table_name (column1, column2, ...)
values (value1, value2, ...);
```

### **示例**
向 `users` 表中插入一条新记录：
```sql
insert into users (id, name, age, email)
values (1, 'john doe', 25, 'john@example.com');
```

### **插入多行数据**
```sql
insert into users (id, name, age, email)
values (1, 'john doe', 25, 'john@example.com'),
       (2, 'jane smith', 30, 'jane@example.com');
```

### **插入查询结果**
```sql
insert into users (name, age)
select name, age from customers where age > 18;
```

---

## **2. `UPDATE` 语句**
`UPDATE` 语句用于更新表中的现有数据。

### **语法**
```sql
update table_name
set column1 = value1, column2 = value2, ...
where condition;
```

### **示例**
更新 `users` 表中 `id` 为 1 的用户的 `email`：
```sql
update users
set email = 'john.doe@example.com'
where id = 1;
```

### **更新多列**
```sql
update users
set name = 'john smith', age = 26
where id = 1;
```

### **更新所有行**
```sql
update users
set status = 'active';
```

---

## **3. `DELETE` 语句**
`DELETE` 语句用于从表中删除数据。

### **语法**
```sql
delete from table_name
where condition;
```

### **示例**
删除 `users` 表中 `id` 为 1 的用户：
```sql
delete from users
where id = 1;
```

### **删除所有行**
```sql
delete from users;
```

---

## **4. 注意事项**
1. **`WHERE` 子句**:
   - 在 `UPDATE` 和 `DELETE` 语句中，`WHERE` 子句非常重要。如果省略 `WHERE` 子句，将会更新或删除表中的所有数据。
   - 示例：
     ```sql
     update users set status = 'inactive';  -- 更新所有用户的状态
     delete from users;  -- 删除所有用户
     ```

2. **事务控制**:
   - 在执行 `INSERT`、`UPDATE` 或 `DELETE` 操作时，建议使用事务（`BEGIN`、`COMMIT`、`ROLLBACK`）来确保数据的一致性。
   - 示例：
     ```sql
     begin;
     update users set status = 'active' where id = 1;
     commit;
     ```

3. **约束条件**:
   - 如果表中有主键、外键、唯一约束等，`INSERT`、`UPDATE` 和 `DELETE` 操作可能会失败。
   - 示例：
     ```sql
     insert into users (id, name) values (1, 'john doe');  -- 如果 id 已存在，会报错
     ```

4. **性能优化**:
   - 在 `UPDATE` 和 `DELETE` 操作中，尽量使用索引列作为 `WHERE` 子句的条件，以提高性能。
   - 示例：
     ```sql
     delete from users where email = 'john@example.com';  -- 如果 email 列有索引，性能更好
     ```

---

## **5. 示例应用**

### **插入数据**
```sql
insert into users (id, name, age, email)
values (1, 'john doe', 25, 'john@example.com');
```

### **更新数据**
```sql
update users
set age = 26
where id = 1;
```

### **删除数据**
```sql
delete from users
where id = 1;
```

---

通过灵活使用 `INSERT`、`UPDATE` 和 `DELETE` 语句，可以高效地操作数据库中的数据！
