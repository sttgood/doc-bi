---
title: 创建、删除表
article: false
order: 3
---

---

### 1. **创建表（create table）**
创建表操作用于在数据库中定义一个新的表结构。

#### 语法：
```sql
create table table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
);
```

#### 示例：
创建一个名为 `users` 的表，包含 `id`, `name`, `email` 列：
```sql
create table users (
    id int auto_increment primary key,
    name varchar(50) not null,
    email varchar(100) not null
);
```

#### 说明：
- `id` 列是主键，使用 `auto_increment` 自动生成唯一值。
- `name` 和 `email` 列是必填字段（`not null`）。

---

### 2. **删除表（drop table）**
删除表操作用于从数据库中移除一个表及其所有数据。

#### 语法：
```sql
drop table table_name;
```

#### 示例：
删除名为 `users` 的表：
```sql
drop table users;
```

#### 避免错误（如果表不存在）：
如果表不存在，直接删除会报错。可以使用 `if exists` 来避免错误：
```sql
drop table if exists users;
```

---

### 3. **检查表是否存在**
在创建表之前，可以检查表是否已经存在：
```sql
create table if not exists users (
    id int auto_increment primary key,
    name varchar(50) not null,
    email varchar(100) not null
);
```

---

### 4. **修改表结构（alter table）**
修改表结构操作用于添加、删除或修改表中的列。

#### 添加列：
```sql
alter table users
add column age int;
```

#### 删除列：
```sql
alter table users
drop column age;
```

#### 修改列：
```sql
alter table users
modify column name varchar(100);
```

#### 重命名列：
```sql
alter table users
change column email user_email varchar(100);
```

---

### 5. **查看表结构**
查看表的结构：
```sql
describe users;
```

---

### 6. **重命名表**
重命名表：
```sql
rename table users to customers;
```

---

### 7. **复制表**
复制表结构和数据：
```sql
create table new_users as
select * from users;
```

仅复制表结构（不复制数据）：
```sql
create table new_users like users;
```

---

### 8. **清空表数据（truncate table）**
清空表中的所有数据，但保留表结构：
```sql
truncate table users;
```

---

### 9. **完整示例**
以下是一个完整的示例，展示如何创建、修改和删除表：
```sql
-- 创建表
create table if not exists users (
    id int auto_increment primary key,
    name varchar(50) not null,
    email varchar(100) not null
);

-- 查看表结构
describe users;

-- 添加列
alter table users
add column age int;

-- 修改列
alter table users
modify column name varchar(100);

-- 删除列
alter table users
drop column age;

-- 重命名表
rename table users to customers;

-- 清空表数据
truncate table customers;

-- 删除表
drop table if exists customers;
```

---

### 10. **注意事项**
- **备份数据**：在执行删除表或清空表操作之前，建议备份数据，以防止误操作导致数据丢失。
- **权限管理**：确保执行这些操作的用户具有相应的权限（如 `CREATE`、`ALTER`、`DROP` 权限）。
- **表名和列名**：表名和列名不区分大小写，但建议使用小写字母和下划线（`_`）以提高可读性。

---

