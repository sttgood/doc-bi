---
title: pg-PostgreSQL
article: false
order: 2
---

在 Node.js 中，`pg` 是一个用于连接和操作 **PostgreSQL** 数据库的库，。如果你需要连接和操作 MySQL 数据库，应该使用 `mysql` 或 `mysql2` 库。以下是 `mysql2` 库的详细解析和使用方法。

---

### **1. 安装 mysql2**

使用 `npm` 安装 `mysql2`：

```bash
npm install mysql2
```

---

### **2. 连接 MySQL 数据库**

#### **2.1 基本连接**
```javascript
const mysql = require("mysql2");

// 创建连接池
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 从连接池中获取连接
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");

  // 释放连接
  connection.release();
});
```

#### **2.2 使用 Promise**
`mysql2` 支持 `Promise`，可以使用 `async/await` 语法。

```javascript
const mysql = require("mysql2/promise");

async function connect() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "testdb",
    });
    console.log("Connected to MySQL!");
    connection.end();
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
  }
}

connect();
```

---

### **3. 执行 SQL 查询**

#### **3.1 查询数据**
```javascript
async function query() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb",
  });

  const [rows] = await connection.execute("SELECT * FROM users");
  console.log(rows);

  connection.end();
}

query();
```

#### **3.2 插入数据**
```javascript
async function insert() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb",
  });

  const [result] = await connection.execute(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    ["Alice", "alice@example.com"]
  );
  console.log("Inserted:", result.insertId);

  connection.end();
}

insert();
```

#### **3.3 更新数据**
```javascript
async function update() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb",
  });

  const [result] = await connection.execute(
    "UPDATE users SET email = ? WHERE id = ?",
    ["alice.new@example.com", 1]
  );
  console.log("Updated:", result.affectedRows);

  connection.end();
}

update();
```

#### **3.4 删除数据**
```javascript
async function remove() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb",
  });

  const [result] = await connection.execute("DELETE FROM users WHERE id = ?", [1]);
  console.log("Deleted:", result.affectedRows);

  connection.end();
}

remove();
```

---

### **4. 使用连接池**

连接池可以提高数据库操作的性能，避免频繁创建和销毁连接。

#### **4.1 创建连接池**
```javascript
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
```

#### **4.2 使用连接池查询**
```javascript
async function queryWithPool() {
  const [rows] = await pool.query("SELECT * FROM users");
  console.log(rows);
}

queryWithPool();
```

---

### **5. 处理事务**

事务用于确保一组操作要么全部成功，要么全部失败。

#### **5.1 基本事务**
```javascript
async function transaction() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb",
  });

  try {
    await connection.beginTransaction();

    await connection.execute("INSERT INTO users (name, email) VALUES (?, ?)", [
      "Bob",
      "bob@example.com",
    ]);
    await connection.execute("UPDATE users SET email = ? WHERE id = ?", [
      "bob.new@example.com",
      2,
    ]);

    await connection.commit();
    console.log("Transaction committed!");
  } catch (err) {
    await connection.rollback();
    console.error("Transaction rolled back:", err);
  } finally {
    connection.end();
  }
}

transaction();
```

---

### **6. 实际应用场景**

#### **1. 用户注册**
```javascript
async function registerUser(name, email, password) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb",
  });

  try {
    const [result] = await connection.execute(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    console.log("User registered with ID:", result.insertId);
  } catch (err) {
    console.error("Error registering user:", err);
  } finally {
    connection.end();
  }
}

registerUser("Charlie", "charlie@example.com", "password123");
```

#### **2. 分页查询**
```javascript
async function getUsers(page = 1, limit = 10) {
  const offset = (page - 1) * limit;
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb",
  });

  try {
    const [rows] = await connection.execute(
      "SELECT * FROM users LIMIT ? OFFSET ?",
      [limit, offset]
    );
    console.log(rows);
  } catch (err) {
    console.error("Error fetching users:", err);
  } finally {
    connection.end();
  }
}

getUsers(2, 10);
```

---

### **7. 总结**

- **mysql2** 是 Node.js 中连接和操作 MySQL 数据库的库。
- 支持 `Promise` 和 `async/await` 语法。
- 提供了连接池、事务等高级功能。
- 适用于用户管理、数据查询、事务处理等场景。

通过掌握 `mysql2` 的使用，可以高效地操作 MySQL 数据库，构建强大的 Node.js 应用。
