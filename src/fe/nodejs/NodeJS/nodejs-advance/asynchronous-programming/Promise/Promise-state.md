---
title: Promise状态
article: false
order: 1
---
在 JavaScript 中，**Promise** 是一种用于处理异步操作的对象。它有三种状态：**pending**（等待中）、**fulfilled**（已成功）和 **rejected**（已失败）。理解这些状态是掌握 `Promise` 的关键。

---

### **1. Promise 的三种状态**

#### **1.1 Pending（等待中）**
- **初始状态**：当一个 `Promise` 被创建时，它处于 `pending` 状态。
- **特点**：
  - 操作尚未完成。
  - 既不是成功，也不是失败。
- **示例**：
  ```javascript
  const promise = new Promise((resolve, reject) => {
      // 异步操作
  });
  console.log(promise); // 输出: Promise { <pending> }
  ```

#### **1.2 Fulfilled（已成功）**
- **触发条件**：当 `resolve` 函数被调用时，`Promise` 从 `pending` 变为 `fulfilled`。
- **特点**：
  - 操作成功完成。
  - 可以通过 `.then()` 方法获取结果。
- **示例**：
  ```javascript
  const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Success!'), 1000);
  });
  promise.then(result => console.log(result)); // 1秒后输出: Success!
  ```

#### **1.3 Rejected（已失败）**
- **触发条件**：当 `reject` 函数被调用时，`Promise` 从 `pending` 变为 `rejected`。
- **特点**：
  - 操作失败。
  - 可以通过 `.catch()` 方法或 `.then()` 的第二个参数处理错误。
- **示例**：
  ```javascript
  const promise = new Promise((resolve, reject) => {
      setTimeout(() => reject('Error!'), 1000);
  });
  promise.catch(error => console.error(error)); // 1秒后输出: Error!
  ```

---

### **2. Promise 的状态转换**
- `Promise` 的状态只能从 `pending` 转换为 `fulfilled` 或 `rejected`，且**不可逆**。
- 一旦状态变为 `fulfilled` 或 `rejected`，`Promise` 的状态和值就固定了。

#### **2.1 状态转换图**
```
Pending
   |
   |--- resolve(value) ---> Fulfilled
   |
   |--- reject(reason) ---> Rejected
```

#### **2.2 示例**
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve('Success!');
        } else {
            reject('Error!');
        }
    }, 1000);
});

promise
    .then(result => console.log(result)) // 成功时执行
    .catch(error => console.error(error)); // 失败时执行
```

---

### **3. Promise 的状态检查**
`Promise` 的状态是内部的，无法直接访问。但可以通过以下方式间接检查：

#### **3.1 使用 `.then()` 和 `.catch()`**
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done!'), 1000);
});

promise
    .then(result => console.log('Fulfilled:', result))
    .catch(error => console.error('Rejected:', error));
```

#### **3.2 使用 `async/await`**
```javascript
async function checkPromise() {
    try {
        const result = await promise;
        console.log('Fulfilled:', result);
    } catch (error) {
        console.error('Rejected:', error);
    }
}
checkPromise();
```

---

### **4. Promise 的链式调用**
`Promise` 支持链式调用，每个 `.then()` 或 `.catch()` 都会返回一个新的 `Promise`。

#### **4.1 链式调用示例**
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
});

promise
    .then(value => value * 2) // 10 * 2 = 20
    .then(value => value + 5) // 20 + 5 = 25
    .then(value => console.log(value)) // 输出: 25
    .catch(error => console.error(error));
```

#### **4.2 链式调用中的错误处理**
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject('Error!'), 1000);
});

promise
    .then(value => value * 2) // 不会执行
    .catch(error => console.error(error)) // 输出: Error!
    .then(() => console.log('Cleanup')); // 仍然会执行
```

---

### **5. Promise 的静态方法**
`Promise` 提供了一些静态方法，用于处理多个 `Promise` 或创建特定状态的 `Promise`。

#### **5.1 `Promise.resolve()`**
- 返回一个 `fulfilled` 状态的 `Promise`。
```javascript
const resolvedPromise = Promise.resolve('Resolved!');
resolvedPromise.then(result => console.log(result)); // 输出: Resolved!
```

#### **5.2 `Promise.reject()`**
- 返回一个 `rejected` 状态的 `Promise`。
```javascript
const rejectedPromise = Promise.reject('Rejected!');
rejectedPromise.catch(error => console.error(error)); // 输出: Rejected!
```

#### **5.3 `Promise.all()`**
- 等待所有 `Promise` 完成，返回一个 `fulfilled` 状态的 `Promise`。
- 如果任何一个 `Promise` 失败，立即返回 `rejected` 状态的 `Promise`。
```javascript
const promises = [
    Promise.resolve('A'),
    Promise.resolve('B'),
    Promise.resolve('C')
];

Promise.all(promises)
    .then(results => console.log(results)) // 输出: ['A', 'B', 'C']
    .catch(error => console.error(error));
```

#### **5.4 `Promise.race()`**
- 返回第一个完成的 `Promise`（无论成功或失败）。
```javascript
const promises = [
    new Promise(resolve => setTimeout(() => resolve('A'), 1000)),
    new Promise(resolve => setTimeout(() => resolve('B'), 500))
];

Promise.race(promises)
    .then(result => console.log(result)) // 输出: B
    .catch(error => console.error(error));
```

---

### **6. 总结**
- `Promise` 有三种状态：`pending`、`fulfilled` 和 `rejected`。
- 状态只能从 `pending` 转换为 `fulfilled` 或 `rejected`，且不可逆。
- 使用 `.then()` 和 `.catch()` 处理 `Promise` 的结果和错误。
- `Promise` 支持链式调用，每个 `.then()` 或 `.catch()` 都会返回一个新的 `Promise`。
- `Promise` 的静态方法（如 `Promise.all()` 和 `Promise.race()`）可以处理多个 `Promise`。

掌握 `Promise` 的状态和行为，是编写高效、健壮的异步代码的基础。
