---
title: 基本数据类型
article: false
order: 2
---
在 JavaScript 中，**基本数据类型（Primitive Types）** 是不可变的、直接存储在栈内存中的数据类型。它们包括以下 7 种：

---

### **1. `number`（数字）**
- 用于表示整数、浮点数、`NaN`（Not a Number）和 `Infinity`（无穷大）。
- 示例：
  ```javascript
  let age = 25; // 整数
  let pi = 3.14; // 浮点数
  let notANumber = NaN; // 非数字
  let infinity = Infinity; // 无穷大
  ```

---

### **2. `string`（字符串）**
- 用于表示文本数据，用单引号、双引号或反引号包裹。
- 示例：
  ```javascript
  let name = "JavaScript"; // 双引号
  let message = 'Hello, World!'; // 单引号
  let template = `Hello, ${name}`; // 模板字符串（ES6）
  ```

---

### **3. `boolean`（布尔值）**
- 只有两个值：`true` 和 `false`，用于表示逻辑真或假。
- 示例：
  ```javascript
  let isTrue = true;
  let isFalse = false;
  ```

---

### **4. `null`（空值）**
- 表示一个空值或无值，通常用于显式清空变量。
- 示例：
  ```javascript
  let emptyValue = null;
  ```

---

### **5. `undefined`（未定义）**
- 表示变量未赋值或函数未返回值。
- 示例：
  ```javascript
  let unassigned;
  console.log(unassigned); // undefined
  ```

---

### **6. `symbol`（符号，ES6 新增）**
- 表示唯一的、不可变的值，通常用于对象属性的键。
- 示例：
  ```javascript
  let uniqueKey = Symbol("description");
  ```

---

### **7. `bigint`（大整数，ES2020 新增）**
- 用于表示大于 `2^53 - 1` 的整数，通过在数字后加 `n` 表示。
- 示例：
  ```javascript
  let bigNumber = 1234567890123456789012345678901234567890n;
  ```

---

### **基本数据类型的特点**
1. **不可变性**：
   - 基本数据类型的值一旦创建，就不能被修改。
   - 示例：
     ```javascript
     let str = "Hello";
     str[0] = "h"; // 无效，str 仍然是 "Hello"
     ```

2. **按值传递**：
   - 在赋值或传递参数时，传递的是值的副本，而不是引用。
   - 示例：
     ```javascript
     let a = 10;
     let b = a; // b 是 a 的副本
     b = 20;
     console.log(a); // 10，a 不受影响
     ```

3. **存储在栈内存**：
   - 基本数据类型直接存储在栈内存中，访问速度快。

---

### **类型检测**
使用 `typeof` 可以检测基本数据类型：
```javascript
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"（历史遗留问题）
console.log(typeof Symbol("key")); // "symbol"
console.log(typeof 123n); // "bigint"
```

---

### **总结**
| 数据类型    | 描述                   | 示例                             |
| ----------- | ---------------------- | -------------------------------- |
| `number`    | 数字（整数、浮点数等） | `42`, `3.14`, `NaN`, `Infinity`  |
| `string`    | 字符串                 | `"Hello"`, `'World'`, `` `Hi` `` |
| `boolean`   | 布尔值                 | `true`, `false`                  |
| `null`      | 空值                   | `null`                           |
| `undefined` | 未定义                 | `undefined`                      |
| `symbol`    | 唯一值                 | `Symbol("key")`                  |
| `bigint`    | 大整数                 | `12345678901234567890n`          |

掌握基本数据类型是理解 JavaScript 的基础，它们是构建复杂程序的核心。
