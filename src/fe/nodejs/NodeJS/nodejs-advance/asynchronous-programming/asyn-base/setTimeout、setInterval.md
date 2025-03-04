---
title: setTimeout、setInterval
article: false
order: 3
---

在 JavaScript 中，`setTimeout` 和 `setInterval` 是两个常用的定时器函数，用于在指定的时间后执行代码或重复执行代码。

---

### **1. setTimeout**
`setTimeout` 用于在指定的时间后执行一次代码。

#### **1.1 语法**
```javascript
setTimeout(callback, delay, arg1, arg2, ...);
```
- `callback`：要执行的函数。
- `delay`：延迟时间（以毫秒为单位）。
- `arg1, arg2, ...`：传递给回调函数的参数（可选）。

#### **1.2 示例**
```javascript
setTimeout(() => {
    console.log('This will run after 2 seconds');
}, 2000);
```

#### **1.3 清除定时器**
使用 `clearTimeout` 可以取消尚未执行的 `setTimeout` 定时器。

```javascript
const timerId = setTimeout(() => {
    console.log('This will not run');
}, 2000);

clearTimeout(timerId); // 取消定时器
```

---

### **2. setInterval**
`setInterval` 用于每隔指定的时间重复执行代码。

#### **2.1 语法**
```javascript
setInterval(callback, delay, arg1, arg2, ...);
```
- `callback`：要执行的函数。
- `delay`：间隔时间（以毫秒为单位）。
- `arg1, arg2, ...`：传递给回调函数的参数（可选）。

#### **2.2 示例**
```javascript
setInterval(() => {
    console.log('This will run every 1 second');
}, 1000);
```

#### **2.3 清除定时器**
使用 `clearInterval` 可以停止 `setInterval` 定时器。

```javascript
const intervalId = setInterval(() => {
    console.log('This will run every 1 second');
}, 1000);

setTimeout(() => {
    clearInterval(intervalId); // 停止定时器
}, 5000);
```

---

### **3. setTimeout 和 setInterval 的区别**
| **特性**     | **setTimeout**   | **setInterval**                |
| ------------ | ---------------- | ------------------------------ |
| **执行次数** | 只执行一次       | 重复执行，直到被清除           |
| **清除方法** | `clearTimeout`   | `clearInterval`                |
| **适用场景** | 延迟执行一次代码 | 重复执行代码（如轮询、动画等） |

---

### **4. 综合示例**
以下是一个综合示例，展示 `setTimeout` 和 `setInterval` 的使用：

```javascript
// setTimeout 示例
setTimeout(() => {
    console.log('This will run after 3 seconds');
}, 3000);

// setInterval 示例
let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(`Interval run ${counter} times`);
    if (counter === 5) {
        clearInterval(intervalId); // 停止定时器
        console.log('Interval stopped');
    }
}, 1000);
```

---

### **5. 注意事项**
- **时间精度**：`setTimeout` 和 `setInterval` 的时间精度受浏览器或 Node.js 环境的影响，可能会有微小偏差。
- **性能问题**：频繁使用 `setInterval` 可能导致性能问题，尤其是在回调函数执行时间较长时。
- **替代方案**：对于复杂的定时任务，可以考虑使用 `requestAnimationFrame`（用于动画）或 `Promise` 结合 `setTimeout`。

---

### **6. 总结**
- `setTimeout`：用于延迟执行一次代码。
- `setInterval`：用于重复执行代码。
- 使用 `clearTimeout` 和 `clearInterval` 可以清除定时器。

通过合理使用 `setTimeout` 和 `setInterval`，可以实现延迟执行和重复执行的功能，满足各种场景的需求。
