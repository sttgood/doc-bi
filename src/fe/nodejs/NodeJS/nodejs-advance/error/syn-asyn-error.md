---
title: 同步和异步错误处理
article: false
order: 1
---
在 JavaScript 中，错误处理是开发过程中非常重要的一部分。无论是同步代码还是异步代码，都需要正确地捕获和处理错误，以避免程序崩溃或产生不可预期的行为。以下是同步和异步错误处理的详细解析。

---

### **1. 同步错误处理**

同步代码是逐行执行的，错误通常通过 `try...catch` 语句捕获。

#### **1.1 基本用法**
```javascript
try {
  // 可能抛出错误的代码
  throw new Error("Something went wrong!");
} catch (err) {
  // 捕获并处理错误
  console.error("Caught an error:", err.message);
}
```

#### **1.2 示例**
```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (err) {
  console.error("Error:", err.message); // 输出: Error: Division by zero is not allowed.
}
```

#### **1.3 注意事项**
- `try...catch` 只能捕获同步代码中的错误。
- 如果错误在异步代码中抛出，`try...catch` 无法捕获。

---

### **2. 异步错误处理**

异步代码（如 `Promise`、`async/await`、回调函数）的错误处理方式与同步代码不同。

#### **2.1 Promise 的错误处理**
`Promise` 使用 `.catch()` 方法捕获错误。

**示例：**
```javascript
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong!"));
    }, 1000);
  });
}

asyncFunction()
  .then((result) => console.log(result))
  .catch((err) => console.error("Caught an error:", err.message)); // 输出: Caught an error: Something went wrong!
```

#### **2.2 async/await 的错误处理**
`async/await` 使用 `try...catch` 捕获错误。

**示例：**
```javascript
async function run() {
  try {
    const result = await asyncFunction();
    console.log("Result:", result);
  } catch (err) {
    console.error("Caught an error:", err.message); // 输出: Caught an error: Something went wrong!
  }
}

run();
```

#### **2.3 回调函数的错误处理**
回调函数通常将错误作为第一个参数传递。

**示例：**
```javascript
function asyncCallback(callback) {
  setTimeout(() => {
    callback(new Error("Something went wrong!"), null);
  }, 1000);
}

asyncCallback((err, result) => {
  if (err) {
    console.error("Caught an error:", err.message); // 输出: Caught an error: Something went wrong!
    return;
  }
  console.log("Result:", result);
});
```

#### **2.4 注意事项**
- 如果 `Promise` 没有使用 `.catch()` 或 `async/await` 没有使用 `try...catch`，未捕获的错误会导致程序崩溃。
- 在异步代码中，错误处理需要显式地编写。

---

### **3. 全局错误处理**

#### **3.1 未捕获的 Promise 错误**
使用 `process.on("unhandledRejection")` 捕获未处理的 `Promise` 错误。

**示例：**
```javascript
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
});

asyncFunction(); // 未捕获的 Promise 错误
```

#### **3.2 未捕获的异常**
使用 `process.on("uncaughtException")` 捕获未捕获的同步错误。

**示例：**
```javascript
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message);
});

throw new Error("Something went wrong!"); // 未捕获的同步错误
```

#### **3.3 注意事项**
- 全局错误处理应作为最后的防线，避免程序崩溃。
- 在捕获全局错误后，建议优雅地关闭应用程序。

---

### **4. 实际应用场景**

#### **1. 文件操作**
```javascript
const fs = require("fs");

async function readFile() {
  try {
    const data = await fs.promises.readFile("file.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}

readFile();
```

#### **2. 数据库查询**
```javascript
async function queryDatabase() {
  try {
    const result = await db.query("SELECT * FROM users");
    console.log(result);
  } catch (err) {
    console.error("Database query failed:", err.message);
  }
}

queryDatabase();
```

#### **3. 网络请求**
```javascript
async function fetchData() {
  try {
    const response = await fetch("https://example.com");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Network request failed:", err.message);
  }
}

fetchData();
```

---

### **5. 总结**

- **同步错误处理**：使用 `try...catch` 捕获错误。
- **异步错误处理**：
  - `Promise` 使用 `.catch()`。
  - `async/await` 使用 `try...catch`。
  - 回调函数通过错误参数处理。
- **全局错误处理**：使用 `unhandledRejection` 和 `uncaughtException` 捕获未处理的错误。

通过正确地处理同步和异步错误，可以提高程序的健壮性和可维护性，避免因未捕获的错误导致程序崩溃。
