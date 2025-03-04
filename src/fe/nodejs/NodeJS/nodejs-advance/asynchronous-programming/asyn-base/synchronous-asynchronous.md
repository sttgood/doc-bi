---
title: 同步-异步
article: false
order: 1
---
### **1. 同步（Synchronous）**
同步代码按照顺序依次执行，每一行代码必须等待前一行代码执行完成后才能执行。

#### **1.1 同步的特点**
- 代码从上到下依次执行。
- 如果某一行代码执行时间较长，会阻塞后续代码的执行。
- 适合处理简单的、不需要等待的操作。

#### **1.2 同步的示例**
```javascript
console.log('Start');
console.log('Processing...');
console.log('End');
```
输出：  
```
Start
Processing...
End
```

---

### **2. 异步（Asynchronous）**
异步代码不会阻塞后续代码的执行，而是在特定条件满足时（如定时器到期、网络请求完成）执行回调函数。

#### **2.1 异步的特点**
- 代码不会等待异步操作完成，而是继续执行后续代码。
- 适合处理耗时的操作（如网络请求、文件读写、定时器等）。
- 通过回调函数、Promise 或 Async/Await 处理异步操作的结果。

#### **2.2 异步的示例**
```javascript
console.log('Start');
setTimeout(() => {
    console.log('Async operation completed');
}, 1000);
console.log('End');
```
输出：  
```
Start
End
Async operation completed
```

---

### **3. 同步与异步的区别**
| **特性**     | **同步**                 | **异步**                                   |
| ------------ | ------------------------ | ------------------------------------------ |
| **执行顺序** | 代码从上到下依次执行     | 代码不会等待异步操作完成，继续执行后续代码 |
| **阻塞性**   | 会阻塞后续代码的执行     | 不会阻塞后续代码的执行                     |
| **适用场景** | 简单的、不需要等待的操作 | 耗时的操作（如网络请求、定时器等）         |
| **实现方式** | 直接编写代码             | 回调函数、Promise、Async/Await             |

---

### **4. 综合示例**
以下是一个综合示例，展示同步和异步的区别：

```javascript
// 同步代码
console.log('Start sync');
for (let i = 0; i < 3; i++) {
    console.log(`Sync loop ${i}`);
}
console.log('End sync');

// 异步代码
console.log('Start async');
setTimeout(() => {
    console.log('Async operation completed');
}, 1000);
console.log('End async');
```
输出：  
```
Start sync
Sync loop 0
Sync loop 1
Sync loop 2
End sync
Start async
End async
Async operation completed
```

---

### **5. 总结**
- **同步**：代码按顺序执行，适合处理简单的操作。
- **异步**：代码不会阻塞后续执行，适合处理耗时的操作。
- **实现方式**：回调函数、Promise、Async/Await。

通过合理使用同步和异步编程，可以编写出高效、可维护的 JavaScript 代码。
