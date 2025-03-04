---
title: GRANT, REVOKE 语句
article: false
order: 1
---

在 MySQL 中，`GRANT` 和 `REVOKE` 语句用于管理用户权限。`GRANT` 用于授予用户权限，而 `REVOKE` 用于撤销用户权限。以下是这两个语句的详细说明和示例：

---

### 1. **GRANT 语句**
`GRANT` 语句用于授予用户对数据库、表或其他对象的访问权限。

#### 1.1 **基本语法**
```sql
grant privileges
on object
to user
[with grant option];
```

#### 参数说明：
- `privileges`：授予的权限，如 `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `ALL PRIVILEGES` 等。
- `object`：权限作用的对象，如 `database_name.*`, `database_name.table_name`。
- `user`：用户名，格式为 `'username'@'host'`。
- `with grant option`：可选，允许用户将自己拥有的权限授予其他用户。

---

#### 1.2 **常用权限**
- `SELECT`：允许查询数据。
- `INSERT`：允许插入数据。
- `UPDATE`：允许更新数据。
- `DELETE`：允许删除数据。
- `ALL PRIVILEGES`：授予所有权限。
- `CREATE`：允许创建表或数据库。
- `DROP`：允许删除表或数据库。
- `ALTER`：允许修改表结构。
- `GRANT OPTION`：允许授予权限。

---

#### 1.3 **示例**

##### 授予用户 `SELECT` 权限：
```sql
grant select
on mydatabase.*
to 'username'@'localhost';
```

##### 授予用户所有权限：
```sql
grant all privileges
on mydatabase.*
to 'username'@'localhost';
```

##### 授予用户权限并允许其授予其他用户：
```sql
grant select, insert, update
on mydatabase.*
to 'username'@'localhost'
with grant option;
```

##### 授予用户对特定表的权限：
```sql
grant select, insert
on mydatabase.users
to 'username'@'localhost';
```

---

### 2. **REVOKE 语句**
`REVOKE` 语句用于撤销用户的权限。

#### 2.1 **基本语法**
```sql
revoke privileges
on object
from user;
```

#### 参数说明：
- `privileges`：撤销的权限，如 `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `ALL PRIVILEGES` 等。
- `object`：权限作用的对象，如 `database_name.*`, `database_name.table_name`。
- `user`：用户名，格式为 `'username'@'host'`。

---

#### 2.2 **示例**

##### 撤销用户 `SELECT` 权限：
```sql
revoke select
on mydatabase.*
from 'username'@'localhost';
```

##### 撤销用户所有权限：
```sql
revoke all privileges
on mydatabase.*
from 'username'@'localhost';
```

##### 撤销用户对特定表的权限：
```sql
revoke select, insert
on mydatabase.users
from 'username'@'localhost';
```

##### 撤销用户 `GRANT OPTION` 权限：
```sql
revoke grant option
on mydatabase.*
from 'username'@'localhost';
```

---

### 3. **查看用户权限**
可以使用以下语句查看用户的权限：

#### 查看当前用户权限：
```sql
show grants;
```

#### 查看指定用户权限：
```sql
show grants for 'username'@'localhost';
```

---

### 4. **注意事项**
- **权限生效**：权限修改后，需要使用 `FLUSH PRIVILEGES` 语句刷新权限缓存，使其立即生效。
- **用户存在性**：确保用户存在，否则会报错。
- **权限范围**：权限可以针对整个数据库、特定表或特定列。

---

### 5. **综合示例**
以下是一个综合示例，展示如何授予和撤销用户权限：

#### 创建用户：
```sql
create user 'username'@'localhost' identified by 'password';
```

#### 授予权限：
```sql
grant select, insert, update
on mydatabase.*
to 'username'@'localhost'
with grant option;
```

#### 查看权限：
```sql
show grants for 'username'@'localhost';
```

#### 撤销权限：
```sql
revoke insert, update
on mydatabase.*
from 'username'@'localhost';
```

#### 删除用户：
```sql
drop user 'username'@'localhost';
```

---

通过掌握 `GRANT` 和 `REVOKE` 语句，您可以灵活管理 MySQL 用户的权限，确保数据库的安全性和访问控制。
