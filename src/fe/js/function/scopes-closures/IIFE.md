---
title: 立即执行函数（IIFE）
article: false
order: 4
---
**立即执行函数（Immediately Invoked Function Expression，IIFE）** 是 JavaScript 中一种常见的编程模式，用于定义并立即执行一个函数。IIFE 的主要作用是创建一个独立的作用域，避免变量污染全局命名空间。

---

### **1. 基本语法**
IIFE 的语法如下：
```javascript
(function() {
  // 函数体
})();
```
或者：
```javascript
(function() {
  // 函数体
}());
```

---

### **2. 特点**
1. **立即执行**：
   - 函数定义后立即调用，不需要显式调用。
2. **独立作用域**：
   - 函数内部声明的变量不会污染全局作用域。
3. **匿名函数**：
   - 通常使用匿名函数，但也可以使用具名函数。
4. **返回值**：
   - 可以通过 `return` 返回值，赋值给变量。

---

### **3. 使用场景**
1. **避免变量污染全局作用域**：
   - 在 IIFE 中声明的变量不会影响全局作用域。
   - 示例：
     ```javascript
     (function() {
       let message = "Hello, World!";
       console.log(message); // Hello, World!
     })();
     console.log(message); // 报错：message is not defined
     ```

2. **模块化开发**：
   - 在模块化开发中，IIFE 可以用于封装私有变量和方法。
   - 示例：
     ```javascript
     let module = (function() {
       let privateVar = "I'm private";
     
       function privateMethod() {
         console.log(privateVar);
       }
     
       return {
         publicMethod: function() {
           privateMethod();
         }
       };
     })();
     
     module.publicMethod(); // 输出：I'm private
     ```

3. **初始化代码**：
   - 用于初始化一些代码，例如事件绑定、配置设置等。
   - 示例：
     ```javascript
     (function() {
       console.log("Initializing...");
       // 初始化代码
     })();
     ```

4. **解决闭包问题**：
   - 在循环中使用 IIFE 可以解决闭包中的变量捕获问题。
   - 示例：
     ```javascript
     for (var i = 1; i <= 3; i++) {
       (function(j) {
         setTimeout(function() {
           console.log(j); // 输出 1, 2, 3
         }, 1000);
       })(i);
     }
     ```

---

### **4. 带参数的 IIFE**
IIFE 可以接受参数，参数在调用时传入。
- 示例：
  ```javascript
  (function(name) {
    console.log(`Hello, ${name}!`);
  })("Alice"); // 输出：Hello, Alice!
  ```

---

### **5. 返回值**
IIFE 可以通过 `return` 返回值，赋值给变量。
- 示例：
  ```javascript
  let result = (function(a, b) {
    return a + b;
  })(1, 2);
  
  console.log(result); // 3
  ```

---

### **6. 箭头函数 IIFE**
在 ES6 中，可以使用箭头函数定义 IIFE。
- 示例：
  ```javascript
  (() => {
    console.log("IIFE with arrow function");
  })();
  ```

---

### **7. 总结**
| 特性              | 说明                                       |
| ----------------- | ------------------------------------------ |
| **语法**          | `(function() {})()` 或 `(function() {}())` |
| **作用**          | 创建独立作用域，避免变量污染全局作用域     |
| **使用场景**      | 模块化开发、初始化代码、解决闭包问题       |
| **带参数**        | 可以接受参数                               |
| **返回值**        | 可以通过 `return` 返回值                   |
| **箭头函数 IIFE** | 使用箭头函数定义 IIFE                      |

---

### **示例代码**
```javascript
// 基本 IIFE
(function() {
  console.log("IIFE executed!");
})();

// 带参数的 IIFE
(function(name) {
  console.log(`Hello, ${name}!`);
})("Alice");

// 返回值的 IIFE
let sum = (function(a, b) {
  return a + b;
})(1, 2);
console.log(sum); // 3

// 箭头函数 IIFE
(() => {
  console.log("Arrow function IIFE");
})();
```

---

通过使用 IIFE，可以有效地管理作用域和变量，避免全局污染，同时实现模块化和代码封装。
