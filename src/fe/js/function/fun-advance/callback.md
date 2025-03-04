---
title: 函数作为参数（回调函数）
article: false
order: 1
---

**回调函数（Callback Function）** 是 JavaScript 中的一个重要概念，指的是将一个函数作为参数传递给另一个函数，并在特定条件或事件发生时调用该函数。回调函数常用于异步编程、事件处理、高阶函数等场景。

---

### **回调函数的基本概念**

1. **定义**：
   - 回调函数是一个作为参数传递给另一个函数的函数。
   - 在特定条件或事件发生时，回调函数会被调用。

2. **特点**：
   - 回调函数可以是匿名函数，也可以是具名函数。
   - 回调函数通常用于处理异步操作的结果。

---

### **回调函数的使用场景**

#### 1. **异步操作**
JavaScript 是单线程的，异步操作（如定时器、网络请求、文件读写等）通常通过回调函数处理结果。

**示例**：
```javascript
function fetchData(callback) {
  setTimeout(function() {
    let data = "Data from server";
    callback(data); // 异步操作完成后调用回调函数
  }, 1000);
}

function processData(data) {
  console.log("Processing: " + data);
}

fetchData(processData); // 1 秒后输出 "Processing: Data from server"
```

---

#### 2. **事件处理**
回调函数常用于处理用户交互事件（如点击、滚动、输入等）。

**示例**：
```javascript
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});
```

---

#### 3. **高阶函数**
高阶函数是指接受函数作为参数或返回函数的函数。回调函数常用于高阶函数中。

**示例**：
```javascript
function mapArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

let numbers = [1, 2, 3];
let doubled = mapArray(numbers, function(num) {
  return num * 2;
});

console.log(doubled); // 输出 [2, 4, 6]
```

---

#### 4. **定时器**
回调函数常用于定时器（如 `setTimeout` 和 `setInterval`）。

**示例**：
```javascript
setTimeout(function() {
  console.log("1 second later");
}, 1000);
```

---

### **回调函数的优缺点**

#### **优点**：
1. **灵活性**：回调函数可以动态传递，使代码更灵活。
2. **异步支持**：回调函数是处理异步操作的传统方式。

#### **缺点**：
1. **回调地狱（Callback Hell）**：多层嵌套的回调函数会导致代码难以阅读和维护。
   **示例**：
   ```javascript
   fetchData1(function(data1) {
     fetchData2(data1, function(data2) {
       fetchData3(data2, function(data3) {
         console.log(data3);
       });
     });
   });
   ```
2. **错误处理困难**：在多层回调中，错误处理变得复杂。

---

### **解决回调地狱的方法**

1. **使用 Promise**：
   Promise 是一种更优雅的异步编程方式，可以避免回调地狱。

   **示例**：
   ```javascript
   fetchData1()
     .then(data1 => fetchData2(data1))
     .then(data2 => fetchData3(data2))
     .then(data3 => console.log(data3))
     .catch(error => console.error(error));
   ```

2. **使用 async/await**：
   `async/await` 是基于 Promise 的语法糖，使异步代码看起来像同步代码。

   **示例**：
   ```javascript
   async function process() {
     try {
       let data1 = await fetchData1();
       let data2 = await fetchData2(data1);
       let data3 = await fetchData3(data2);
       console.log(data3);
     } catch (error) {
       console.error(error);
     }
   }
   
   process();
   ```

---

### **回调函数的注意事项**

1. **错误处理**：
   - 在回调函数中处理错误，避免程序崩溃。

   **示例**：
   ```javascript
   function fetchData(callback) {
     setTimeout(function() {
       let error = null;
       let data = "Data from server";
       callback(error, data); // 将错误和数据传递给回调函数
     }, 1000);
   }
   
   fetchData(function(error, data) {
     if (error) {
       console.error("Error:", error);
     } else {
       console.log("Data:", data);
     }
   });
   ```

2. **避免过度嵌套**：
   - 使用 Promise 或 `async/await` 替代多层嵌套的回调函数。

3. **命名回调函数**：
   - 为回调函数命名，可以提高代码的可读性。

   **示例**：
   ```javascript
   function handleData(data) {
     console.log("Processing:", data);
   }
   
   fetchData(handleData);
   ```

---

### **总结**
- **回调函数** 是 JavaScript 中处理异步操作和事件的传统方式。
- 回调函数的使用场景包括异步操作、事件处理、高阶函数等。
- 回调函数的缺点是容易导致回调地狱，可以通过 Promise 或 `async/await` 解决。
- 理解回调函数的原理和应用场景是掌握 JavaScript 异步编程的基础。
