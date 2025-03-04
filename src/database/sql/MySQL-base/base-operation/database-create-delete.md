---
title: 创建、删除数据库
article: false
order: 2
---

在 MySQL 中，SQL 语句的关键字（如 `CREATE`、`DATABASE`、`DROP`）不区分大小写，因此您可以使用小写形式编写这些语句。以下是创建和删除数据库的小写版本示例：

---

### 1. **创建数据库（create database）**
#### 语法：
```sql
create database database_name;
```

#### 示例：
创建一个名为 `mydatabase` 的数据库：
```sql
create database mydatabase;
```

#### 指定字符集和排序规则：
可以在创建数据库时指定字符集和排序规则：
```sql
create database mydatabase
character set utf8mb4
collate utf8mb4_unicode_ci;
```

---

### 2. **删除数据库（drop database）**
删除数据库操作用于从 MySQL 中移除一个数据库及其所有数据。

#### 语法：
```sql
drop database database_name;
```

#### 示例：
删除名为 `mydatabase` 的数据库：
```sql
drop database mydatabase;
```

---

### 3. **注意事项**
- **谨慎操作**：删除数据库会永久移除数据库及其所有数据，请确保在执行删除操作之前已经备份重要数据。
- **权限要求**：执行创建或删除数据库操作的用户需要具有相应的权限（如 `CREATE` 或 `DROP` 权限）。
- **数据库不存在时的错误**：
  - 如果尝试删除一个不存在的数据库，MySQL 会报错。可以使用 `if exists` 来避免错误：
    ```sql
    drop database if exists mydatabase;
    ```

---

### 4. **检查数据库是否存在**
在创建数据库之前，可以检查数据库是否已经存在：
```sql
create database if not exists mydatabase;
```

---

### 5. **切换数据库（use）**
在操作数据库之前，可以使用 `use` 语句切换到目标数据库：
```sql
use mydatabase;
```

---

### 6. **查看所有数据库（show databases）**
可以使用以下语句查看 MySQL 中的所有数据库：
```sql
show databases;
```

---

### 7. **完整示例**
以下是一个完整的示例，展示如何创建、切换和删除数据库：
```sql
-- 创建数据库
create database mydatabase;

-- 切换到数据库
use mydatabase;

-- 查看所有数据库
show databases;

-- 删除数据库
drop database mydatabase;
```

---

