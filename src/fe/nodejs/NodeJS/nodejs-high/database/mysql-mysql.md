---
title: mysql-MySql
article: false
order: 1
---

在 Node.js 中连接 MySQL 数据库通常使用 **`mysql`** 或 **`mysql2`** 库。这两个库都提供了简单易用的 API，用于执行 SQL 查询和管理数据库连接。以下是使用 `mysql` 库连接 MySQL 数据库的详细步骤和示例：

---

### 1. **安装 MySQL 库**
首先，使用 npm 安装 `mysql` 库：

```bash
npm install mysql
```

---

### 2. **创建数据库连接**
使用 `mysql.createConnection` 方法创建数据库连接。

#### 示例：
```javascript
const mysql = require('mysql');

// 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',      // 数据库地址
  user: 'root',           // 用户名
  password: 'password',   // 密码
  database: 'testdb',     // 数据库名称
});

// 连接数据库
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database with ID:', connection.threadId);
});
```

---

### 3. **执行 SQL 查询**
使用 `connection.query` 方法执行 SQL 查询。

#### 示例：查询数据
```javascript
const sql = 'SELECT * FROM users';

connection.query(sql, (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }
  console.log('Query results:', results);
});
```

#### 示例：插入数据
```javascript
const user = { name: 'John', age: 25 };
const sql = 'INSERT INTO users SET ?';

connection.query(sql, user, (err, results) => {
  if (err) {
    console.error('Error inserting data:', err.stack);
    return;
  }
  console.log('Inserted ID:', results.insertId);
});
```

#### 示例：更新数据
```javascript
const sql = 'UPDATE users SET age = ? WHERE name = ?';
const params = [30, 'John'];

connection.query(sql, params, (err, results) => {
  if (err) {
    console.error('Error updating data:', err.stack);
    return;
  }
  console.log('Updated rows:', results.affectedRows);
});
```

#### 示例：删除数据
```javascript
const sql = 'DELETE FROM users WHERE name = ?';
const params = ['John'];

connection.query(sql, params, (err, results) => {
  if (err) {
    console.error('Error deleting data:', err.stack);
    return;
  }
  console.log('Deleted rows:', results.affectedRows);
});
```

---

### 4. **关闭数据库连接**
使用 `connection.end` 方法关闭数据库连接。

#### 示例：
```javascript
connection.end((err) => {
  if (err) {
    console.error('Error closing connection:', err.stack);
    return;
  }
  console.log('Connection closed.');
});
```

---

### 5. **使用连接池**
为了提高性能，可以使用连接池（Connection Pool）管理数据库连接。

#### 示例：
```javascript
const mysql = require('mysql');

// 创建连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb',
  connectionLimit: 10, // 最大连接数
});

// 从连接池中获取连接
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error getting connection from pool:', err.stack);
    return;
  }

  // 执行查询
  connection.query('SELECT * FROM users', (err, results, fields) => {
    // 释放连接
    connection.release();

    if (err) {
      console.error('Error executing query:', err.stack);
      return;
    }
    console.log('Query results:', results);
  });
});
```

---

### 6. **处理 SQL 注入**
为了防止 SQL 注入，始终使用参数化查询。

#### 示例：
```javascript
const sql = 'SELECT * FROM users WHERE name = ?';
const params = ['John'];

connection.query(sql, params, (err, results) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }
  console.log('Query results:', results);
});
```

---

### 7. **错误处理**
在连接和查询过程中，始终处理错误。

#### 示例：
```javascript
connection.query('SELECT * FROM non_existent_table', (err, results) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }
  console.log('Query results:', results);
});
```

---

### 8. **使用 `mysql2` 库**
`mysql2` 是 `mysql` 库的升级版，支持 Promise 和 Prepared Statements。

#### 安装：
```bash
npm install mysql2
```

#### 示例：
```javascript
const mysql = require('mysql2');

// 创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb',
});

// 使用 Promise
connection.promise()
  .query('SELECT * FROM users')
  .then(([results, fields]) => {
    console.log('Query results:', results);
  })
  .catch((err) => {
    console.error('Error executing query:', err.stack);
  });
```

---

### 9. **总结**
- 使用 `mysql` 或 `mysql2` 库可以轻松连接和操作 MySQL 数据库。
- 通过连接池管理数据库连接，可以提高性能。
- 始终使用参数化查询防止 SQL 注入，并妥善处理错误。
- `mysql2` 支持 Promise，更适合现代 JavaScript 开发。
