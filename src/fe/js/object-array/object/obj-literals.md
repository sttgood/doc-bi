---
title: 对象字面量语法
article: false
order: 2
---

**对象字面量（Object Literal）** 是 JavaScript 中创建对象的一种简洁语法。它使用 `{}` 来定义对象，并可以在其中直接指定属性和方法。对象字面量是 JavaScript 中最常用的对象创建方式之一。以下是详细说明和示例：

---

### **1. 基本语法**
对象字面量的基本语法如下：
```javascript
const obj = {
  key1: value1,
  key2: value2,
  // ...
};
```
- `key`：属性名（键），可以是字符串或 `Symbol`。
- `value`：属性值，可以是任意数据类型（包括函数）。

---

### **2. 创建对象**
#### **2.1 简单对象**
```javascript
const person = {
  name: "Alice",
  age: 25,
  isStudent: false
};
console.log(person.name); // Alice
```

#### **2.2 嵌套对象**
```javascript
const person = {
  name: "Alice",
  address: {
    city: "New York",
    zipCode: "10001"
  }
};
console.log(person.address.city); // New York
```

#### **2.3 方法**
```javascript
const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Hello, my name is Alice
```

#### **2.4 简写方法（ES6）**
```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Hello, my name is Alice
```

---

### **3. 动态属性名（ES6）**
可以使用 `[]` 定义动态属性名：
```javascript
const key = "age";
const person = {
  name: "Alice",
  [key]: 25 // 动态属性名
};
console.log(person.age); // 25
```

---

### **4. 计算属性名（ES6）**
可以在属性名中使用表达式：
```javascript
const prefix = "user_";
const person = {
  [prefix + "name"]: "Alice",
  [prefix + "age"]: 25
};
console.log(person.user_name); // Alice
console.log(person.user_age); // 25
```

---

### **5. 属性简写（ES6）**
如果属性名和变量名相同，可以简写：
```javascript
const name = "Alice";
const age = 25;
const person = { name, age }; // 等价于 { name: name, age: age }
console.log(person); // { name: "Alice", age: 25 }
```

---

### **6. 对象解构（ES6）**
可以从对象中提取属性并赋值给变量：
```javascript
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name); // Alice
console.log(age); // 25
```

---

### **7. 对象扩展运算符（ES6）**
可以使用 `...` 扩展对象：
```javascript
const person = { name: "Alice", age: 25 };
const details = { ...person, city: "New York" };
console.log(details); // { name: "Alice", age: 25, city: "New York" }
```

---

### **8. 对象方法**
#### **8.1 `Object.keys()`**
获取对象的所有键：
```javascript
const person = { name: "Alice", age: 25 };
console.log(Object.keys(person)); // ["name", "age"]
```

#### **8.2 `Object.values()`**
获取对象的所有值：
```javascript
const person = { name: "Alice", age: 25 };
console.log(Object.values(person)); // ["Alice", 25]
```

#### **8.3 `Object.entries()`**
获取对象的所有键值对：
```javascript
const person = { name: "Alice", age: 25 };
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 25]]
```

#### **8.4 `Object.assign()`**
合并对象：
```javascript
const person = { name: "Alice" };
const details = { age: 25 };
const merged = Object.assign({}, person, details);
console.log(merged); // { name: "Alice", age: 25 }
```

---

### **9. 对象字面量的优势**
1. **简洁易读**：语法简单，易于理解和维护。
2. **灵活性**：支持动态属性名、计算属性名和属性简写。
3. **高效性**：直接定义对象，无需调用构造函数。

---

### **10. 示例代码**
```javascript
// 简单对象
const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Hello, my name is Alice

// 动态属性名
const key = "city";
const address = {
  [key]: "New York"
};
console.log(address.city); // New York

// 对象扩展运算符
const details = { ...person, ...address };
console.log(details); // { name: "Alice", age: 25, city: "New York" }

// 对象解构
const { name, age } = person;
console.log(name); // Alice
console.log(age); // 25
```

---

### **11. 总结**
| 特性           | 说明                                  | 示例                            |
| -------------- | ------------------------------------- | ------------------------------- |
| **基本语法**   | 使用 `{}` 定义对象                    | `const obj = { key: value };`   |
| **动态属性名** | 使用 `[]` 定义动态属性名              | `const obj = { [key]: value };` |
| **属性简写**   | 属性名和变量名相同时可以简写          | `const obj = { name };`         |
| **对象解构**   | 从对象中提取属性并赋值给变量          | `const { name } = obj;`         |
| **扩展运算符** | 使用 `...` 扩展对象                   | `const newObj = { ...obj };`    |
| **对象方法**   | `Object.keys()`、`Object.values()` 等 | `Object.keys(obj);`             |

通过掌握对象字面量语法，可以更高效地创建和操作对象，编写出简洁、灵活的代码。
