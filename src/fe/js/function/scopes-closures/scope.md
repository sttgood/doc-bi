---
title: 作用域
article: false
order: 1
---
**作用域（Scope）** 是 JavaScript 中定义变量、函数和对象可访问性的规则。它决定了代码中哪些部分可以访问特定的变量或函数。JavaScript 中的作用域分为以下几种：

---

### **1. 全局作用域（Global Scope）**
- **定义**：
  - 在函数外部声明的变量或函数属于全局作用域。
  - 全局作用域中的变量和函数可以在代码的任何地方访问。
- **特点**：
  - 生命周期：从声明开始，直到页面关闭。
  - 容易造成变量污染（命名冲突）。
- **示例**：
  ```javascript
  let globalVar = "I'm global";
  
  function showGlobalVar() {
    console.log(globalVar); // 可以访问全局变量
  }
  
  showGlobalVar(); // 输出：I'm global
  ```

---

### **2. 函数作用域（Function Scope）**
- **定义**：
  - 在函数内部声明的变量或函数属于函数作用域。
  - 只能在函数内部访问，外部无法访问。
- **特点**：
  - 生命周期：从函数调用开始，到函数执行结束。
  - 使用 `var` 声明的变量具有函数作用域。
- **示例**：
  ```javascript
  function showLocalVar() {
    let localVar = "I'm local";
    console.log(localVar); // 可以访问局部变量
  }
  
  showLocalVar(); // 输出：I'm local
  console.log(localVar); // 报错：localVar is not defined
  ```

---

### **3. 块级作用域（Block Scope，ES6 新增）**
- **定义**：
  - 在 `{}` 代码块（如 `if`、`for`、`while`）中声明的变量属于块级作用域。
  - 只能在代码块内部访问，外部无法访问。
- **特点**：
  - 使用 `let` 和 `const` 声明的变量具有块级作用域。
  - 生命周期：从代码块开始，到代码块结束。
- **示例**：
  ```javascript
  if (true) {
    let blockVar = "I'm block scoped";
    console.log(blockVar); // 可以访问块级变量
  }
  console.log(blockVar); // 报错：blockVar is not defined
  ```

---

### **4. 词法作用域（Lexical Scope）**
- **定义**：
  - 函数的作用域在函数定义时就已经确定，而不是在函数调用时。
  - 函数可以访问其定义时所处的作用域中的变量。
- **特点**：
  - 是 JavaScript 中作用域的核心机制。
  - 闭包（Closure）就是基于词法作用域实现的。
- **示例**：
  ```javascript
  function outer() {
    let outerVar = "I'm outer";
  
    function inner() {
      console.log(outerVar); // 可以访问外部函数的变量
    }
  
    inner();
  }
  
  outer(); // 输出：I'm outer
  ```

---

### **5. 作用域链（Scope Chain）**
- **定义**：
  - 当访问一个变量时，JavaScript 会从当前作用域开始查找，如果找不到，会逐级向上查找，直到全局作用域。
  - 这种查找机制称为作用域链。
- **特点**：
  - 作用域链是基于词法作用域建立的。
  - 查找顺序：当前作用域 → 外层作用域 → 全局作用域。
- **示例**：
  ```javascript
  let globalVar = "I'm global";
  
  function outer() {
    let outerVar = "I'm outer";
  
    function inner() {
      let innerVar = "I'm inner";
      console.log(innerVar); // I'm inner
      console.log(outerVar); // I'm outer
      console.log(globalVar); // I'm global
    }
  
    inner();
  }
  
  outer();
  ```

---

### **6. 作用域与变量提升（Hoisting）**
- **变量提升**：
  - 使用 `var` 声明的变量会被提升到函数或全局作用域的顶部。
  - 使用 `let` 和 `const` 声明的变量不会被提升，存在暂时性死区（TDZ）。
- **示例**：
  ```javascript
  console.log(hoistedVar); // undefined
  var hoistedVar = "I'm hoisted";
  
  console.log(notHoistedVar); // 报错：Cannot access 'notHoistedVar' before initialization
  let notHoistedVar = "I'm not hoisted";
  ```

---

### **7. 作用域总结**
| 作用域类型     | 定义范围                             | 特点                                   | 示例                                                         |
| -------------- | ------------------------------------ | -------------------------------------- | ------------------------------------------------------------ |
| **全局作用域** | 函数外部                             | 全局可访问，容易造成变量污染           | `let globalVar = "I'm global";`                              |
| **函数作用域** | 函数内部                             | 使用 `var` 声明，函数内可访问          | `function() { var localVar = "local"; }`                     |
| **块级作用域** | `{}` 代码块内部                      | 使用 `let` 和 `const` 声明，块内可访问 | `if (true) { let blockVar = "block"; }`                      |
| **词法作用域** | 函数定义时的作用域                   | 函数可以访问定义时的作用域变量         | `function outer() { let outerVar = "outer"; function inner() { console.log(outerVar); } }` |
| **作用域链**   | 当前作用域 → 外层作用域 → 全局作用域 | 查找变量的机制                         | `function outer() { let outerVar = "outer"; function inner() { console.log(outerVar); } }` |

---

### **8. 常见问题**
1. **全局变量污染**：
   - 避免在全局作用域中声明过多变量，使用 IIFE 或模块化开发。
2. **变量提升的陷阱**：
   - 使用 `let` 和 `const` 代替 `var`，避免变量提升带来的问题。
3. **闭包的作用域**：
   - 闭包会保留其词法作用域，可能导致内存泄漏，需谨慎使用。

---

通过理解 JavaScript 中的作用域机制，可以更好地管理变量和函数，编写出高效、健壮的代码。
