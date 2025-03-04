---
title: 异步函数声明与使用
article: false
order: 1
---
在 JavaScript 中，**异步函数**（Async Functions）是一种简化异步操作的语法糖，基于 `Promise` 实现。通过 `async` 和 `await` 关键字，可以以同步的方式编写异步代码，使代码更易读和维护。

---

### **1. 异步函数的声明**
使用 `async` 关键字声明一个异步函数。

#### **1.1 语法**
```javascript
async function functionName() {
    // 函数体
}
```

#### **1.2 示例**
```javascript
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}
```

---

### **2. 异步函数的特点**
1. **返回 Promise**：
   - 异步函数默认返回一个 `Promise` 对象。
   - 如果函数内部返回值，`Promise` 会以该值 `resolve`。
   - 如果函数抛出异常，`Promise` 会以该异常 `reject`。

   ```javascript
   async function example() {
       return 'Hello, World!';
   }
   example().then(result => console.log(result)); // 输出: Hello, World!
   ```

2. **使用 `await`**：
   - `await` 关键字用于等待一个 `Promise` 完成。
   - 只能在异步函数内部使用。
   - `await` 会暂停函数的执行，直到 `Promise` 完成。

   ```javascript
   async function example() {
       const result = await new Promise(resolve => {
           setTimeout(() => resolve('Done!'), 1000);
       });
       console.log(result); // 输出: Done!
   }
   example();
   ```

---

### **3. 异步函数的使用**

#### **3.1 基本使用**
```javascript
async function getUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

getUserData(1).then(user => console.log(user));
```

#### **3.2 并行执行**
如果需要并行执行多个异步操作，可以使用 `Promise.all`。

```javascript
async function fetchMultipleData() {
    const [userData, postData] = await Promise.all([
        fetch('https://api.example.com/users/1').then(res => res.json()),
        fetch('https://api.example.com/posts/1').then(res => res.json())
    ]);
    return { userData, postData };
}

fetchMultipleData().then(data => console.log(data));
```

#### **3.3 错误处理**
使用 `try...catch` 捕获异步函数中的错误。

```javascript
async function example() {
    try {
        const result = await Promise.reject('Something went wrong');
    } catch (error) {
        console.error('Caught error:', error); // 输出: Caught error: Something went wrong
    }
}
example();
```

---

### **4. 异步函数的优势**
1. **代码更简洁**：
   - 相比传统的 `Promise` 链式调用，异步函数更易读。

   ```javascript
   // 传统 Promise
   fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error(error));
   
   // 异步函数
   async function fetchData() {
       try {
           const response = await fetch('https://api.example.com/data');
           const data = await response.json();
           console.log(data);
       } catch (error) {
           console.error(error);
       }
   }
   ```

2. **错误处理更方便**：
   - 使用 `try...catch` 可以像同步代码一样捕获错误。

3. **逻辑更清晰**：
   - 异步函数可以更好地表达代码的执行顺序。

---

### **5. 注意事项**
1. **`await` 只能在异步函数中使用**：
   - 如果在普通函数中使用 `await`，会抛出语法错误。

   ```javascript
   function example() {
       const result = await Promise.resolve('Hello'); // 报错
   }
   ```

2. **性能问题**：
   - 如果滥用 `await`，可能会导致不必要的等待，降低性能。对于可以并行执行的操作，应使用 `Promise.all`。

3. **兼容性**：
   - 异步函数是 ES2017 引入的特性，确保运行环境支持。

---

### **6. 总结**
- 异步函数通过 `async` 和 `await` 简化了异步操作。
- 默认返回 `Promise`，可以使用 `then` 和 `catch` 处理结果。
- 使用 `try...catch` 可以方便地捕获错误。
- 对于并行操作，使用 `Promise.all` 提高性能。

异步函数是现代 JavaScript 中处理异步操作的首选方式，能够显著提升代码的可读性和可维护性。
