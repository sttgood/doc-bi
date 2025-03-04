---
title: 其他类型
article: false
order: 4
---

MySQL 提供了多种特殊数据类型，如 `ENUM`、`SET` 和 `JSON`

---

### 1. **ENUM 类型**
`ENUM` 用于存储一组预定义的值，只能选择其中一个值。

#### 语法：
```sql
enum('value1', 'value2', 'value3', ...)
```

#### 特点：
- 只能存储列出的值之一。
- 存储效率高，实际存储的是值的索引（1, 2, 3, ...）。
- 支持最多 65,535 个不同的值。

#### 示例：
创建一个 `users` 表，包含一个 `gender` 列，只能存储 `male` 或 `female`：
```sql
create table users (
    id int auto_increment primary key,
    name varchar(50),
    gender enum('male', 'female')
);
```

插入数据：
```sql
insert into users (name, gender) values ('John Doe', 'male');
insert into users (name, gender) values ('Jane Doe', 'female');
```

---

### 2. **SET 类型**
`SET` 用于存储一组预定义的值，可以选择多个值。

#### 语法：
```sql
set('value1', 'value2', 'value3', ...)
```

#### 特点：
- 可以存储列出的值的任意组合。
- 存储效率高，实际存储的是值的位掩码。
- 支持最多 64 个不同的值。

#### 示例：
创建一个 `users` 表，包含一个 `hobbies` 列，可以选择多个爱好：
```sql
create table users (
    id int auto_increment primary key,
    name varchar(50),
    hobbies set('reading', 'sports', 'music', 'travel')
);
```

插入数据：
```sql
insert into users (name, hobbies) values ('John Doe', 'reading,sports');
insert into users (name, hobbies) values ('Jane Doe', 'music,travel');
```

查询包含特定值的数据：
```sql
select * from users where find_in_set('sports', hobbies);
```

---

### 3. **JSON 类型**
`JSON` 用于存储 JSON 格式的数据。

#### 特点：
- 支持存储和查询 JSON 数据。
- 提供了一系列 JSON 函数，用于操作和查询 JSON 数据。

#### 示例：
创建一个 `users` 表，包含一个 `profile` 列，存储用户的详细信息：
```sql
create table users (
    id int auto_increment primary key,
    name varchar(50),
    profile json
);
```

插入数据：
```sql
insert into users (name, profile) 
values ('John Doe', '{"age": 30, "city": "New York", "hobbies": ["reading", "sports"]}');
```

查询 JSON 数据：
```sql
select name, profile->'$.city' as city from users;
```

更新 JSON 数据：
```sql
update users
set profile = json_set(profile, '$.age', 31)
where id = 1;
```

---

### 4. **其他特殊类型**

#### 4.1 **BLOB 和 TEXT 类型**
用于存储大文本或二进制数据。

| 类型         | 描述                    |
| ------------ | ----------------------- |
| `TINYBLOB`   | 最大 255 字节           |
| `BLOB`       | 最大 65,535 字节        |
| `MEDIUMBLOB` | 最大 16,777,215 字节    |
| `LONGBLOB`   | 最大 4,294,967,295 字节 |
| `TINYTEXT`   | 最大 255 字符           |
| `TEXT`       | 最大 65,535 字符        |
| `MEDIUMTEXT` | 最大 16,777,215 字符    |
| `LONGTEXT`   | 最大 4,294,967,295 字符 |

#### 示例：
```sql
create table example (
    id int auto_increment primary key,
    description text,
    image blob
);
```

---

#### 4.2 **GEOMETRY 类型**
用于存储空间数据，如点、线、多边形等。

| 类型                 | 描述         |
| -------------------- | ------------ |
| `GEOMETRY`           | 通用几何类型 |
| `POINT`              | 点           |
| `LINESTRING`         | 线           |
| `POLYGON`            | 多边形       |
| `MULTIPOINT`         | 多点         |
| `MULTILINESTRING`    | 多线         |
| `MULTIPOLYGON`       | 多多边形     |
| `GEOMETRYCOLLECTION` | 几何集合     |

#### 示例：
```sql
create table example (
    id int auto_increment primary key,
    location point
);
```

---

### 5. **选择特殊类型的建议**
- **ENUM**：适用于固定选项的场景，如性别、状态等。
- **SET**：适用于多选的场景，如爱好、标签等。
- **JSON**：适用于存储结构化的动态数据，如用户配置、日志等。
- **BLOB/TEXT**：适用于存储大文本或二进制数据，如文件、图像等。
- **GEOMETRY**：适用于存储空间数据，如地图、地理信息等。

---

### 6. **示例表**
以下是一个包含多种特殊类型的示例表：
```sql
create table example (
    id int auto_increment primary key,
    status enum('active', 'inactive'),
    tags set('red', 'green', 'blue'),
    profile json,
    description text,
    location point
);
```

---

通过掌握这些特殊类型，您可以更灵活地设计 MySQL 数据库表结构，并满足各种数据存储需求。
