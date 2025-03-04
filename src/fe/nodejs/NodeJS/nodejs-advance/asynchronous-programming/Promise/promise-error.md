---
title: then、catch、finally
article: false
order: 2
---
在 JavaScript 中，`Promise` 的错误处理是异步编程中非常重要的一部分。正确地处理错误可以避免程序崩溃，并提供更好的用户体验。以下是关于 `Promise` 错误处理的详细说明和最佳实践。

---

### **一、错误处理的基本方法**
#### **1. `catch` 方法**
`catch` 是专门用于处理 `Promise` 失败状态（Rejected）的方法。它可以捕获链式调用中任意一个 `Promise` 的错误。

```javascript
const promise = new Promise((resolve, reject) => {
  reject(new Error("Something went wrong!"));
});

promise
  .then((result) => {
    console.log(result); // 不会执行
  })
  .catch((error) => {
    console.error(error.message); // 输出: "Something went wrong!"
  });
```

#### **2. `then` 的第二个参数**
`then` 方法的第二个参数也可以用于处理错误，但它只捕获当前 `Promise` 的错误，而不会捕获后续链式调用中的错误。

```javascript
const promise = new Promise((resolve, reject) => {
  reject(new Error("Something went wrong!"));
});

promise.then(
  (result) => {
    console.log(result); // 不会执行
  },
  (error) => {
    console.error(error.message); // 输出: "Something went wrong!"
  }
);
```

---

### **二、错误处理的链式调用**
在链式调用中，`catch` 可以捕获整个链中任意一个 `Promise` 的错误。

```javascript
const promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise
  .then((result) => {
    console.log(result); // 输出: 1
    return result + 1;
  })
  .then((result) => {
    console.log(result); // 输出: 2
    throw new Error("Error in second then!");
  })
  .catch((error) => {
    console.error(error.message); // 输出: "Error in second then!"
  });
```

---

### **三、`finally` 方法**
`finally` 方法用于在 `Promise` 完成（无论成功或失败）后执行清理逻辑。它不会捕获错误，但可以确保某些逻辑总是执行。

```javascript
const promise = new Promise((resolve, reject) => {
  reject(new Error("Something went wrong!"));
});

promise
  .then((result) => {
    console.log(result); // 不会执行
  })
  .catch((error) => {
    console.error(error.message); // 输出: "Something went wrong!"
  })
  .finally(() => {
    console.log("Cleanup!"); // 输出: "Cleanup!"
  });
```

---

### **四、错误处理的最佳实践**
#### **1. 始终使用 `catch`**
在链式调用中，始终在最后添加一个 `catch`，以确保捕获所有可能的错误。

```javascript
someAsyncFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
```

#### **2. 避免在 `then` 中抛出未捕获的错误**
在 `then` 中抛出错误时，确保它被捕获，否则会导致未处理的 `Promise` 错误。

```javascript
someAsyncFunction()
  .then((result) => {
    if (!result) {
      throw new Error("Result is invalid!"); // 确保这个错误被捕获
    }
    return result;
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
```

#### **3. 使用 `async/await` 的错误处理**
在 `async/await` 中，可以使用 `try/catch` 来处理错误。

```javascript
async function fetchData() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchData();
```

#### **4. 全局捕获未处理的 `Promise` 错误**
在浏览器中，可以通过监听 `unhandledrejection` 事件来捕获未处理的 `Promise` 错误。

```javascript
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled rejection:", event.reason);
});

const promise = new Promise((resolve, reject) => {
  reject(new Error("Unhandled error!"));
});
// 这里没有 catch，错误会被全局捕获
```

---

### **五、示例代码**
#### **1. 使用 `catch` 处理错误**
```javascript
fetch("/api/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
```

#### **2. 使用 `async/await` 处理错误**
```javascript
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchData();
```

---

### **六、总结**
- 使用 `catch` 或 `then` 的第二个参数来捕获 `Promise` 的错误。
- 在链式调用中，始终在最后添加一个 `catch` 以确保捕获所有错误。
- 在 `async/await` 中，使用 `try/catch` 来处理错误。
- 避免未处理的 `Promise` 错误，可以通过全局事件 `unhandledrejection` 捕获。

通过合理地处理错误，可以提高代码的健壮性和可维护性。
