---
title: Promise.all、Promise.race
article: false
order: 3
---
`Promise.all` 和 `Promise.race` 是 JavaScript 中用于处理多个 Promise 的实用方法。它们可以帮助我们更高效地管理异步操作。以下是它们的详细说明和示例：

---

### **一、`Promise.all`**
#### **1. 功能**
`Promise.all` 接收一个 Promise 数组，并返回一个新的 Promise。当所有 Promise 都成功时，返回的 Promise 才会成功；如果其中任何一个 Promise 失败，返回的 Promise 会立即失败。

#### **2. 返回值**
- 如果所有 Promise 都成功，返回一个数组，数组中的每个元素是对应 Promise 的结果。
- 如果任何一个 Promise 失败，返回的 Promise 会立即失败，并返回第一个失败的 Promise 的错误。

#### **3. 使用场景**
适用于需要等待多个异步操作全部完成后再进行下一步操作的场景。

#### **4. 示例**
```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "3");
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // 输出: [1, 2, "3"]
  })
  .catch((error) => {
    console.error(error); // 如果任何一个 Promise 失败，会进入这里
  });
```

---

### **二、`Promise.race`**
#### **1. 功能**
`Promise.race` 接收一个 Promise 数组，并返回一个新的 Promise。当数组中任何一个 Promise 成功或失败时，返回的 Promise 就会立即成功或失败。

#### **2. 返回值**
- 返回第一个成功或失败的 Promise 的结果或错误。

#### **3. 使用场景**
适用于需要获取最快完成的异步操作结果的场景。

#### **4. 示例**
```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "1");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "2");
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result); // 输出: "2"（因为 promise2 更快完成）
  })
  .catch((error) => {
    console.error(error); // 如果第一个完成的 Promise 失败，会进入这里
  });
```

---

### **三、`Promise.all` 和 `Promise.race` 的区别**
| **特性**     | **`Promise.all`**            | **`Promise.race`**                |
| ------------ | ---------------------------- | --------------------------------- |
| **功能**     | 等待所有 Promise 完成        | 返回第一个完成的 Promise          |
| **成功条件** | 所有 Promise 都成功          | 第一个完成的 Promise 成功         |
| **失败条件** | 任何一个 Promise 失败        | 第一个完成的 Promise 失败         |
| **返回值**   | 所有 Promise 的结果数组      | 第一个完成的 Promise 的结果或错误 |
| **使用场景** | 需要等待多个异步操作全部完成 | 需要获取最快完成的异步操作结果    |

---

### **四、实际应用场景**
#### **1. `Promise.all` 场景**
- 同时发起多个 API 请求，等待所有请求完成后再处理数据。
- 并行执行多个异步任务，等待所有任务完成后再继续。

#### **2. `Promise.race` 场景**
- 设置超时机制：如果某个异步操作超过指定时间未完成，则返回超时错误。
- 获取最快响应的数据源。

---

### **五、示例代码**
#### **1. `Promise.all` 示例**
```javascript
const fetchUser = () => fetch("/api/user");
const fetchPosts = () => fetch("/api/posts");

Promise.all([fetchUser(), fetchPosts()])
  .then((responses) => {
    return Promise.all(responses.map((res) => res.json()));
  })
  .then((data) => {
    console.log("User:", data[0]);
    console.log("Posts:", data[1]);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

#### **2. `Promise.race` 示例**
```javascript
const fetchData = fetch("/api/data");
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Timeout!")), 5000);
});

Promise.race([fetchData, timeout])
  .then((response) => response.json())
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message); // 如果超时，输出: "Error: Timeout!"
  });
```

---

### **六、总结**
- **`Promise.all`**：适用于需要等待多个异步操作全部完成的场景。
- **`Promise.race`**：适用于需要获取最快完成的异步操作结果的场景。

掌握这两个方法可以更灵活地处理复杂的异步逻辑，提升代码的效率和可读性。
