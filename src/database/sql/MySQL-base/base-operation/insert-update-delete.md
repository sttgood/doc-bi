---
title: 插入、更新、删除数据
article: false
order: 4
---

在 MySQL 中，SQL 语句的关键字（如 `INSERT`、`UPDATE`、`DELETE`）不区分大小写，因此您可以使用小写形式编写这些语句。以下是插入、更新和删除数据的小写版本示例：

---

### 1. **插入数据（insert）**
#### 语法：
```sql
insert into table_name (column1, column2, column3, ...)
values (value1, value2, value3, ...);
```

#### 示例：
向 `users` 表插入一条记录：
```sql
insert into users (name, email)
values ('john doe', 'john.doe@example.com');
```

#### 插入多行数据：
```sql
insert into users (name, email)
values 
    ('jane doe', 'jane.doe@example.com'),
    ('alice smith', 'alice.smith@example.com');
```

---

### 2. **更新数据（update）**
#### 语法：
```sql
update table_name
set column1 = value1, column2 = value2, ...
where condition;
```

#### 示例：
更新 `users` 表中 `id` 为 1 的用户的 `email`：
```sql
update users
set email = 'john.new@example.com'
where id = 1;
```

#### 更新多列：
```sql
update users
set name = 'john smith', email = 'john.smith@example.com'
where id = 1;
```

---

### 3. **删除数据（delete）**
#### 语法：
```sql
delete from table_name
where condition;
```

#### 示例：
删除 `users` 表中 `id` 为 1 的用户：
```sql
delete from users
where id = 1;
```

#### 删除所有记录：
```sql
delete from users;
```

---

### 4. **truncate 与 delete 的区别**
#### truncate 语法：
```sql
truncate table table_name;
```

#### 示例：
清空 `users` 表：
```sql
truncate table users;
```

---

### 5. **事务示例**
以下是一个使用事务的示例，确保插入和更新操作的原子性：
```sql
begin;

insert into users (name, email)
values ('john doe', 'john.doe@example.com');

update users
set email = 'john.new@example.com'
where id = last_insert_id();

commit;
```

如果操作失败，可以使用 `rollback` 回滚：
```sql
begin;

insert into users (name, email)
values ('john doe', 'john.doe@example.com');

-- 假设某个操作失败
rollback;
```

---

### 6. **注意事项**
- **小写与大写的区别**：在 MySQL 中，关键字和表名、列名不区分大小写，但表名和列名的大小写敏感性取决于操作系统的文件系统（例如，Linux 区分大小写，Windows 不区分）。
- **可读性**：尽管小写形式是合法的，但为了代码的可读性，建议关键字使用大写，表名和列名使用小写或驼峰命名法。

---

通过使用小写形式的 SQL 语句，您可以更灵活地编写代码，同时保持其功能不变。
