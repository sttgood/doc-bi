---
title: 函数声明与表达式
article: false
order: 1
---
在 JavaScript 中，函数可以通过 **函数声明** 和 **函数表达式** 两种方式定义。它们的主要区别在于语法、作用域和提升行为。以下是详细说明：

---

### **1. 函数声明（Function Declaration）**
- **语法**：
  ```javascript
  function functionName(parameters) {
    // 函数体
  }
  ```
- **特点**：
  - 函数声明会被提升（Hoisting），即可以在函数声明之前调用。
  - 函数名是必需的。
  - 通常用于定义全局函数或模块中的函数。

- **示例**：
  ```javascript
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  greet("Alice"); // 输出：Hello, Alice!
  ```

- **提升行为**：
  ```javascript
  greet("Alice"); // 输出：Hello, Alice!
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  ```

---

### **2. 函数表达式（Function Expression）**
- **语法**：
  ```javascript
  const functionName = function(parameters) {
    // 函数体
  };
  ```
- **特点**：
  - 函数表达式不会被提升，必须在定义之后调用。
  - 函数名是可选的（匿名函数）。
  - 通常用于将函数赋值给变量或作为回调函数。

- **示例**：
  ```javascript
  const greet = function(name) {
    console.log(`Hello, ${name}!`);
  };
  greet("Alice"); // 输出：Hello, Alice!
  ```

- **提升行为**：
  ```javascript
  greet("Alice"); // 报错：greet is not defined
  const greet = function(name) {
    console.log(`Hello, ${name}!`);
  };
  ```

---

### **3. 具名函数表达式（Named Function Expression）**
- **语法**：
  ```javascript
  const functionName = function innerFunctionName(parameters) {
    // 函数体
  };
  ```
- **特点**：
  - 函数名（`innerFunctionName`）只在函数内部可见，外部不可访问。
  - 便于调试（栈追踪时会显示函数名）。

- **示例**：
  ```javascript
  const greet = function sayHello(name) {
    console.log(`Hello, ${name}!`);
    if (name === "Alice") {
      sayHello("Bob"); // 递归调用
    }
  };
  greet("Alice"); // 输出：Hello, Alice!  Hello, Bob!
  console.log(sayHello); // 报错：sayHello is not defined
  ```

---

### **4. 箭头函数（Arrow Function，ES6 新增）**
- **语法**：
  ```javascript
  const functionName = (parameters) => {
    // 函数体
  };
  ```
- **特点**：
  - 更简洁的语法。
  - 没有自己的 `this`，继承自外层作用域。
  - 不能用作构造函数（不能使用 `new`）。
  - 没有 `arguments` 对象。

- **示例**：
  ```javascript
  const greet = (name) => {
    console.log(`Hello, ${name}!`);
  };
  greet("Alice"); // 输出：Hello, Alice!
  ```

---

### **5. 函数声明 vs 函数表达式**
| 特性         | 函数声明             | 函数表达式                   |
| ------------ | -------------------- | ---------------------------- |
| **语法**     | `function name() {}` | `const name = function() {}` |
| **提升**     | 是                   | 否                           |
| **函数名**   | 必需                 | 可选（匿名函数）             |
| **作用域**   | 全局或函数作用域     | 块级作用域（`let`/`const`）  |
| **适用场景** | 全局函数、模块函数   | 回调函数、立即执行函数       |

---

### **6. 立即执行函数表达式（IIFE）**
- **语法**：
  ```javascript
  (function() {
    // 函数体
  })();
  ```
- **特点**：
  - 定义后立即执行。
  - 用于创建独立的作用域，避免污染全局命名空间。

- **示例**：
  ```javascript
  (function() {
    let message = "Hello, World!";
    console.log(message);
  })();
  ```

---

### **总结**
- **函数声明**：适合定义全局函数，会被提升。
- **函数表达式**：适合赋值给变量或作为回调函数，不会被提升。
- **箭头函数**：语法简洁，适合简单的回调函数或需要继承 `this` 的场景。
- **IIFE**：用于创建独立作用域，避免变量污染。

根据具体场景选择合适的函数定义方式，可以提高代码的可读性和可维护性。
