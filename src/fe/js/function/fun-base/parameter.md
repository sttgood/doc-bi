---
title: 参数传递
article: false
order: 2
---

在 JavaScript 中，函数的参数传递方式取决于参数的类型：**基本数据类型** 和 **引用数据类型**。以下是详细说明：

---

### **1. 基本数据类型的参数传递**
- **按值传递（Pass by Value）**：
  - 传递的是值的副本，函数内部对参数的修改不会影响外部的变量。
  - 适用于基本数据类型（`number`、`string`、`boolean`、`null`、`undefined`、`symbol`、`bigint`）。

- **示例**：
  ```javascript
  function changeValue(num) {
    num = 10; // 修改参数的值
    console.log(num); // 10
  }
  
  let value = 5;
  changeValue(value); // 传递值的副本
  console.log(value); // 5，外部变量不受影响
  ```

---

### **2. 引用数据类型的参数传递**
- **按引用传递（Pass by Reference）**：
  - 传递的是对象的引用（指针），函数内部对参数的修改会影响外部的对象。
  - 适用于引用数据类型（`object`、`array`、`function` 等）。

- **示例**：
  ```javascript
  function changeObject(obj) {
    obj.name = "Bob"; // 修改对象的属性
    console.log(obj); // { name: "Bob" }
  }
  
  let person = { name: "Alice" };
  changeObject(person); // 传递对象的引用
  console.log(person); // { name: "Bob" }，外部对象被修改
  ```

---

### **3. 参数传递的注意事项**
1. **重新赋值引用类型参数**：
   - 如果在函数内部重新赋值引用类型参数，不会影响外部的对象。
   - 示例：
     ```javascript
     function reassignObject(obj) {
       obj = { name: "Charlie" }; // 重新赋值
       console.log(obj); // { name: "Charlie" }
     }
     
     let person = { name: "Alice" };
     reassignObject(person); // 传递对象的引用
     console.log(person); // { name: "Alice" }，外部对象不受影响
     ```

2. **默认参数（ES6 新增）**：
   - 可以为参数设置默认值，当参数为 `undefined` 时使用默认值。
   - 示例：
     ```javascript
     function greet(name = "Guest") {
       console.log(`Hello, ${name}!`);
     }
     
     greet(); // Hello, Guest!
     greet("Alice"); // Hello, Alice!
     ```

3. **剩余参数（Rest Parameters，ES6 新增）**：
   - 使用 `...` 语法将多个参数收集到一个数组中。
   - 示例：
     ```javascript
     function sum(...numbers) {
       return numbers.reduce((total, num) => total + num, 0);
     }
     
     console.log(sum(1, 2, 3)); // 6
     ```

4. **解构参数（Destructuring Parameters，ES6 新增）**：
   - 使用解构语法从对象或数组中提取参数。
   - 示例：
     ```javascript
     function printUser({ name, age }) {
       console.log(`Name: ${name}, Age: ${age}`);
     }
     
     let user = { name: "Alice", age: 25 };
     printUser(user); // Name: Alice, Age: 25
     ```

---

### **4. 参数传递的总结**
| 参数类型     | 传递方式   | 特点                            | 示例                                   |
| ------------ | ---------- | ------------------------------- | -------------------------------------- |
| 基本数据类型 | 按值传递   | 传递值的副本，外部变量不受影响  | `let num = 5; changeValue(num);`       |
| 引用数据类型 | 按引用传递 | 传递对象的引用，外部对象受影响  | `let obj = {}; changeObject(obj);`     |
| 默认参数     | 按值传递   | 参数为 `undefined` 时使用默认值 | `function greet(name = "Guest") {}`    |
| 剩余参数     | 按值传递   | 将多个参数收集到数组中          | `function sum(...numbers) {}`          |
| 解构参数     | 按值传递   | 从对象或数组中提取参数          | `function printUser({ name, age }) {}` |

---

### **5. 参数传递的常见问题**
1. **修改基本数据类型参数**：
   - 修改基本数据类型参数不会影响外部变量。
   - 示例：
     ```javascript
     function changeValue(num) {
       num = 10;
     }
     
     let value = 5;
     changeValue(value);
     console.log(value); // 5
     ```

2. **修改引用数据类型参数**：
   - 修改引用数据类型参数会影响外部对象。
   - 示例：
     ```javascript
     function changeObject(obj) {
       obj.name = "Bob";
     }
     
     let person = { name: "Alice" };
     changeObject(person);
     console.log(person); // { name: "Bob" }
     ```

3. **重新赋值引用类型参数**：
   - 重新赋值引用类型参数不会影响外部对象。
   - 示例：
     ```javascript
     function reassignObject(obj) {
       obj = { name: "Charlie" };
     }
     
     let person = { name: "Alice" };
     reassignObject(person);
     console.log(person); // { name: "Alice" }
     ```

---

通过理解 JavaScript 中参数传递的机制，可以更好地编写函数和处理数据。
