---
title: IndexedDB基础
article: false
order: 2
---

`IndexedDB` 是浏览器提供的一种 **客户端存储** 技术，用于在浏览器中存储大量结构化数据。它比 `localStorage` 和 `sessionStorage` 更强大，支持存储复杂的数据类型（如对象、数组等），并提供高性能的查询和事务支持。

以下是 `IndexedDB` 的详细解析和使用方法。

---

### **1. IndexedDB 的特点**

1. **异步操作**：所有操作都是异步的，不会阻塞主线程。
2. **存储大量数据**：可以存储比 `localStorage` 更多的数据（通常至少 250MB，具体取决于浏览器）。
3. **结构化数据**：支持存储复杂的 JavaScript 对象，而不仅仅是字符串。
4. **索引查询**：支持通过索引高效地查询数据。
5. **事务支持**：支持事务操作，确保数据的一致性。
6. **同源限制**：每个 `IndexedDB` 数据库与页面的源（协议 + 域名 + 端口）绑定。

---

### **2. IndexedDB 的核心概念**

#### **1. 数据库（Database）**
- 每个 `IndexedDB` 数据库都有一个唯一的名称。
- 数据库包含多个 **对象存储空间（Object Store）**。

#### **2. 对象存储空间（Object Store）**
- 类似于关系数据库中的表，用于存储数据。
- 每条数据都有一个唯一的 **键（Key）**。

#### **3. 索引（Index）**
- 用于高效地查询数据。
- 可以在对象存储空间上创建多个索引。

#### **4. 事务（Transaction）**
- 用于对数据库进行读写操作。
- 支持原子性操作，确保数据的一致性。

#### **5. 游标（Cursor）**
- 用于遍历对象存储空间中的数据。

---

### **3. IndexedDB 的基本使用**

#### **1. 打开数据库**
使用 `indexedDB.open()` 方法打开或创建数据库。

```javascript
const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  // 创建对象存储空间
  if (!db.objectStoreNames.contains("users")) {
    db.createObjectStore("users", { keyPath: "id" });
  }
};

request.onsuccess = function (event) {
  const db = event.target.result;
  console.log("数据库打开成功");
};

request.onerror = function (event) {
  console.error("数据库打开失败", event.target.error);
};
```

#### **2. 添加数据**
通过事务向对象存储空间添加数据。

```javascript
const transaction = db.transaction("users", "readwrite");
const store = transaction.objectStore("users");

const user = { id: 1, name: "Alice", age: 25 };
const request = store.add(user);

request.onsuccess = function () {
  console.log("数据添加成功");
};

request.onerror = function (event) {
  console.error("数据添加失败", event.target.error);
};
```

#### **3. 查询数据**
通过键查询数据。

```javascript
const transaction = db.transaction("users", "readonly");
const store = transaction.objectStore("users");

const request = store.get(1);

request.onsuccess = function () {
  const user = request.result;
  console.log("查询结果", user);
};

request.onerror = function (event) {
  console.error("查询失败", event.target.error);
};
```

#### **4. 更新数据**
通过 `put()` 方法更新数据。

```javascript
const transaction = db.transaction("users", "readwrite");
const store = transaction.objectStore("users");

const user = { id: 1, name: "Alice", age: 26 };
const request = store.put(user);

request.onsuccess = function () {
  console.log("数据更新成功");
};

request.onerror = function (event) {
  console.error("数据更新失败", event.target.error);
};
```

#### **5. 删除数据**
通过 `delete()` 方法删除数据。

```javascript
const transaction = db.transaction("users", "readwrite");
const store = transaction.objectStore
