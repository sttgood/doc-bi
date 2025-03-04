---
title: 引用数据类型
article: false
order: 3
---
在 JavaScript 中，**引用数据类型（Reference Types）** 是可变的、存储在堆内存中的数据类型。变量存储的是指向堆内存中对象的引用（指针），而不是直接存储值。引用数据类型包括以下几种：

---

### **1. `object`（对象）**
- 用于存储键值对，键是字符串或 `Symbol`，值可以是任意类型。
- 示例：
  ```javascript
  let person = {
    name: "Alice",
    age: 25,
    greet: function() {
      console.log("Hello!");
    }
  };
  ```

---

### **2. `array`（数组）**
- 用于存储有序的数据集合，元素可以是任意类型。
- 示例：
  ```javascript
  let numbers = [1, 2, 3, 4];
  let mixed = [1, "two", true, null];
  ```

---

### **3. `function`（函数）**
- 函数是对象的一种，可以赋值给变量、作为参数传递或作为返回值。
- 示例：
  ```javascript
  function add(a, b) {
    return a + b;
  }
  let multiply = function(a, b) {
    return a * b;
  };
  ```

---

### **4. `Date`（日期）**
- 用于处理日期和时间。
- 示例：
  ```javascript
  let now = new Date();
  console.log(now); // 当前日期和时间
  ```

---

### **5. `RegExp`（正则表达式）**
- 用于匹配字符串的模式。
- 示例：
  ```javascript
  let pattern = /hello/gi;
  ```

---

### **6. `Set`（集合，ES6 新增）**
- 用于存储唯一值的集合。
- 示例：
  ```javascript
  let uniqueNumbers = new Set([1, 2, 2, 3]); // {1, 2, 3}
  ```

---

### **7. `Map`（映射，ES6 新增）**
- 用于存储键值对的集合，键可以是任意类型。
- 示例：
  ```javascript
  let keyValuePairs = new Map();
  keyValuePairs.set("name", "Alice");
  keyValuePairs.set(1, "One");
  ```

---

### **引用数据类型的特点**
1. **可变性**：
   - 引用数据类型的值可以被修改。
   - 示例：
     ```javascript
     let arr = [1, 2, 3];
     arr[0] = 10; // arr 变为 [10, 2, 3]
     ```

2. **按引用传递**：
   - 在赋值或传递参数时，传递的是引用（指针），而不是值的副本。
   - 示例：
     ```javascript
     let obj1 = { name: "Alice" };
     let obj2 = obj1; // obj2 和 obj1 指向同一个对象
     obj2.name = "Bob";
     console.log(obj1.name); // "Bob"，obj1 也被修改
     ```

3. **存储在堆内存**：
   - 引用数据类型存储在堆内存中，变量存储的是指向堆内存的引用。

---

### **类型检测**
1. **`typeof`**：
   - 检测引用数据类型时，`typeof` 返回 `"object"` 或 `"function"`。
   - 示例：
     ```javascript
     console.log(typeof {}); // "object"
     console.log(typeof []); // "object"
     console.log(typeof function() {}); // "function"
     ```

2. **`instanceof`**：
   - 检测对象是否属于某个引用类型。
   - 示例：
     ```javascript
     console.log([] instanceof Array); // true
     console.log({} instanceof Object); // true
     console.log(new Date() instanceof Date); // true
     ```

3. **`Object.prototype.toString`**：
   - 更精确地检测数据类型。
   - 示例：
     ```javascript
     console.log(Object.prototype.toString.call([])); // "[object Array]"
     console.log(Object.prototype.toString.call({})); // "[object Object]"
     console.log(Object.prototype.toString.call(new Date())); // "[object Date]"
     ```

---

### **总结**
| 数据类型   | 描述                     | 示例                           |
| ---------- | ------------------------ | ------------------------------ |
| `object`   | 对象（键值对）           | `{ name: "Alice", age: 25 }`   |
| `array`    | 数组（有序集合）         | `[1, 2, 3]`                    |
| `function` | 函数（可执行对象）       | `function() {}`                |
| `Date`     | 日期和时间               | `new Date()`                   |
| `RegExp`   | 正则表达式               | `/hello/gi`                    |
| `Set`      | 唯一值的集合             | `new Set([1, 2, 2, 3])`        |
| `Map`      | 键值对的集合（键可任意） | `new Map([["name", "Alice"]])` |

引用数据类型是 JavaScript 中构建复杂程序的核心，掌握它们的特点和使用方法是编写高效代码的关键。
