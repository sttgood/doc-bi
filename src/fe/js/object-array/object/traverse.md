---
title: 对象遍历
article: false
order: 5
---

在 JavaScript 中，遍历对象的方式有多种，每种方式都有其特定的使用场景和优缺点。以下是常见的对象遍历方法：

---

### **1. `for...in` 循环**
- **语法**：`for (let key in object) {}`

- **特点**：
  - 遍历对象自身的和继承的可枚举属性。
  - 需要使用 `hasOwnProperty` 过滤继承的属性。
  
- **示例**：
  ```javascript
  const person = {
    name: "Alice",
    age: 25
  };
  
  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
  }
  // 输出：
  // name: Alice
  // age: 25
  ```

---

### **2. `Object.keys()`**
- **语法**：`Object.keys(object)`
- **特点**：
  - 返回对象自身的可枚举属性组成的数组。
  - 适合遍历对象的键。
- **示例**：
  ```javascript
  const person = {
    name: "Alice",
    age: 25
  };
  
  const keys = Object.keys(person);
  keys.forEach(key => {
    console.log(`${key}: ${person[key]}`);
  });
  // 输出：
  // name: Alice
  // age: 25
  ```

---

### **3. `Object.values()`**
- **语法**：`Object.values(object)`
- **特点**：
  - 返回对象自身的可枚举属性值组成的数组。
  - 适合遍历对象的值。
- **示例**：
  ```javascript
  const person = {
    name: "Alice",
    age: 25
  };
  
  const values = Object.values(person);
  values.forEach(value => {
    console.log(value);
  });
  // 输出：
  // Alice
  // 25
  ```

---

### **4. `Object.entries()`**
- **语法**：`Object.entries(object)`
- **特点**：
  - 返回对象自身的可枚举键值对组成的数组。
  - 适合同时遍历键和值。
- **示例**：
  ```javascript
  const person = {
    name: "Alice",
    age: 25
  };
  
  const entries = Object.entries(person);
  entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  // 输出：
  // name: Alice
  // age: 25
  ```

---

### **5. `Object.getOwnPropertyNames()`**
- **语法**：`Object.getOwnPropertyNames(object)`
- **特点**：
  - 返回对象自身的所有属性（包括不可枚举属性）组成的数组。
  - 适合遍历所有属性，包括不可枚举属性。
- **示例**：
  ```javascript
  const person = {
    name: "Alice",
    age: 25
  };
  
  const properties = Object.getOwnPropertyNames(person);
  properties.forEach(property => {
    console.log(`${property}: ${person[property]}`);
  });
  // 输出：
  // name: Alice
  // age: 25
  ```

---

### **6. `Reflect.ownKeys()`（ES6）**
- **语法**：`Reflect.ownKeys(object)`
- **特点**：
  - 返回对象自身的所有属性（包括不可枚举属性和 `Symbol` 属性）组成的数组。
  - 适合遍历所有属性，包括 `Symbol` 属性。
- **示例**：
  ```javascript
  const person = {
    name: "Alice",
    age: 25,
    [Symbol("id")]: 123
  };
  
  const keys = Reflect.ownKeys(person);
  keys.forEach(key => {
    console.log(`${String(key)}: ${person[key]}`);
  });
  // 输出：
  // name: Alice
  // age: 25
  // Symbol(id): 123
  ```

---

### **7. `Object.getOwnPropertySymbols()`**
- **语法**：`Object.getOwnPropertySymbols(object)`
- **特点**：
  - 返回对象自身的所有 `Symbol` 属性组成的数组。
  - 适合遍历 `Symbol` 属性。
- **示例**：
  ```javascript
  const person = {
    name: "Alice",
    age: 25,
    [Symbol("id")]: 123
  };
  
  const symbols = Object.getOwnPropertySymbols(person);
  symbols.forEach(symbol => {
    console.log(`${String(symbol)}: ${person[symbol]}`);
  });
  // 输出：
  // Symbol(id): 123
  ```

---

### **8. 总结**
| 方法                                 | 特点                                        | 示例                                                       |
| ------------------------------------ | ------------------------------------------- | ---------------------------------------------------------- |
| **`for...in`**                       | 遍历自身和继承的可枚举属性                  | `for (let key in obj) { console.log(key); }`               |
| **`Object.keys()`**                  | 返回自身可枚举属性组成的数组                | `Object.keys(obj).forEach(key => {});`                     |
| **`Object.values()`**                | 返回自身可枚举属性值组成的数组              | `Object.values(obj).forEach(value => {});`                 |
| **`Object.entries()`**               | 返回自身可枚举键值对组成的数组              | `Object.entries(obj).forEach(([key, value]) => {});`       |
| **`Object.getOwnPropertyNames()`**   | 返回自身所有属性（包括不可枚举）组成的数组  | `Object.getOwnPropertyNames(obj).forEach(property => {});` |
| **`Reflect.ownKeys()`**              | 返回自身所有属性（包括 `Symbol`）组成的数组 | `Reflect.ownKeys(obj).forEach(key => {});`                 |
| **`Object.getOwnPropertySymbols()`** | 返回自身所有 `Symbol` 属性组成的数组        | `Object.getOwnPropertySymbols(obj).forEach(symbol => {});` |

---

### **9. 示例代码**
```javascript
const person = {
  name: "Alice",
  age: 25,
  [Symbol("id")]: 123
};

// for...in
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}
// 输出：
// name: Alice
// age: 25

// Object.keys
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
// 输出：
// name: Alice
// age: 25

// Object.values
Object.values(person).forEach(value => {
  console.log(value);
});
// 输出：
// Alice
// 25

// Object.entries
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// 输出：
// name: Alice
// age: 25

// Object.getOwnPropertyNames
Object.getOwnPropertyNames(person).forEach(property => {
  console.log(`${property}: ${person[property]}`);
});
// 输出：
// name: Alice
// age: 25

// Reflect.ownKeys
Reflect.ownKeys(person).forEach(key => {
  console.log(`${String(key)}: ${person[key]}`);
});
// 输出：
// name: Alice
// age: 25
// Symbol(id): 123

// Object.getOwnPropertySymbols
Object.getOwnPropertySymbols(person).forEach(symbol => {
  console.log(`${String(symbol)}: ${person[symbol]}`);
});
// 输出：
// Symbol(id): 123
```

---

通过掌握这些对象遍历方法，可以根据具体需求选择最合适的方式，高效地操作对象。
