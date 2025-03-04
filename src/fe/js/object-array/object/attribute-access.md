---
title: 属性访问
article: false
order: 3
---

在 JavaScript 中，对象属性的访问方式主要有两种：**点操作符（`.`）** 和 **方括号操作符（`[]`）**。以下是详细说明和示例：

---

### **1. 点操作符（`.`）**
- **语法**：`object.property`
- **特点**：
  - 属性名必须是合法的标识符（不能以数字开头，不能包含特殊字符）。
  - 简洁易读，适合访问已知的、固定的属性名。
- **示例**：
  ```javascript
  const person = {
    name: "Alice",
    age: 25
  };
  console.log(person.name); // Alice
  console.log(person.age); // 25
  ```

---

### **2. 方括号操作符（`[]`）**
- **语法**：`object["property"]`
- **特点**：
  - 属性名可以是字符串或 `Symbol`，支持动态属性名。
  - 适合访问动态的、包含特殊字符的属性名。
- **示例**：
  ```javascript
  const person = {
    name: "Alice",
    age: 25
  };
  console.log(person["name"]); // Alice
  console.log(person["age"]); // 25
  
  // 动态属性名
  const key = "name";
  console.log(person[key]); // Alice
  ```

---

### **3. 动态属性名**
方括号操作符可以用于访问动态属性名：
```javascript
const person = {
  name: "Alice",
  age: 25
};

const key = "name";
console.log(person[key]); // Alice
```

---

### **4. 访问嵌套属性**
可以使用点操作符或方括号操作符访问嵌套对象的属性：
```javascript
const person = {
  name: "Alice",
  address: {
    city: "New York",
    zipCode: "10001"
  }
};

console.log(person.address.city); // New York
console.log(person["address"]["city"]); // New York
```

---

### **5. 访问不存在的属性**
如果访问不存在的属性，会返回 `undefined`：
```javascript
const person = {
  name: "Alice"
};
console.log(person.age); // undefined
```

---

### **6. 设置属性值**
可以使用点操作符或方括号操作符设置属性值：
```javascript
const person = {
  name: "Alice"
};

person.age = 25; // 使用点操作符
person["address"] = { city: "New York" }; // 使用方括号操作符

console.log(person); // { name: "Alice", age: 25, address: { city: "New York" } }
```

---

### **7. 删除属性**
使用 `delete` 操作符可以删除对象的属性：
```javascript
const person = {
  name: "Alice",
  age: 25
};

delete person.age;
console.log(person); // { name: "Alice" }
```

---

### **8. 检查属性是否存在**
可以使用 `in` 操作符或 `hasOwnProperty` 方法检查属性是否存在：
```javascript
const person = {
  name: "Alice"
};

console.log("name" in person); // true
console.log(person.hasOwnProperty("name")); // true
console.log("age" in person); // false
```

---

### **9. 遍历属性**
可以使用 `for...in` 循环或 `Object.keys()` 方法遍历对象的属性：
```javascript
const person = {
  name: "Alice",
  age: 25
};

// for...in 循环
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// 输出：
// name: Alice
// age: 25

// Object.keys() 方法
const keys = Object.keys(person);
console.log(keys); // ["name", "age"]
```

---

### **10. 示例代码**
```javascript
const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    zipCode: "10001"
  }
};

// 访问属性
console.log(person.name); // Alice
console.log(person["age"]); // 25

// 动态属性名
const key = "name";
console.log(person[key]); // Alice

// 访问嵌套属性
console.log(person.address.city); // New York
console.log(person["address"]["zipCode"]); // 10001

// 设置属性值
person.age = 30;
person["address"]["city"] = "San Francisco";
console.log(person); // { name: "Alice", age: 30, address: { city: "San Francisco", zipCode: "10001" } }

// 删除属性
delete person.age;
console.log(person); // { name: "Alice", address: { city: "San Francisco", zipCode: "10001" } }

// 检查属性是否存在
console.log("name" in person); // true
console.log(person.hasOwnProperty("address")); // true

// 遍历属性
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// 输出：
// name: Alice
// address: [object Object]
```

---

### **11. 总结**
| 特性             | 说明                                   | 示例                         |
| ---------------- | -------------------------------------- | ---------------------------- |
| **点操作符**     | 访问合法的标识符属性名                 | `person.name`                |
| **方括号操作符** | 访问动态或包含特殊字符的属性名         | `person["name"]`             |
| **动态属性名**   | 使用变量作为属性名                     | `person[key]`                |
| **嵌套属性**     | 访问嵌套对象的属性                     | `person.address.city`        |
| **设置属性值**   | 使用点操作符或方括号操作符设置属性值   | `person.age = 25`            |
| **删除属性**     | 使用 `delete` 操作符删除属性           | `delete person.age`          |
| **检查属性**     | 使用 `in` 或 `hasOwnProperty` 检查属性 | `"name" in person`           |
| **遍历属性**     | 使用 `for...in` 或 `Object.keys()`     | `for (let key in person) {}` |

通过掌握对象属性的访问方式，可以更灵活地操作对象，编写出高效、可读性强的代码。
