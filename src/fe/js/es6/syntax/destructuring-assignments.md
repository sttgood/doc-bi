---
title: 解构赋值
article: false
order: 3
---
解构赋值（Destructuring Assignment）是 ES6 引入的一种语法，用于从数组或对象中提取值，并将其赋值给变量。它可以让代码更简洁、更易读，尤其是在处理复杂数据结构时。以下是关于解构赋值的详细说明和示例。

---

### **一、数组的解构赋值**
#### **1. 基本用法**
从数组中提取值，并赋值给变量。

```javascript
const arr = [1, 2, 3];

// 传统写法
const a = arr[0];
const b = arr[1];
const c = arr[2];

// 解构赋值
const [x, y, z] = arr;

console.log(x, y, z); // 输出: 1 2 3
```

#### **2. 跳过某些值**
使用逗号跳过不需要的值。

```javascript
const arr = [1, 2, 3];
const [a, , c] = arr;

console.log(a, c); // 输出: 1 3
```

#### **3. 默认值**
如果解构的值是 `undefined`，可以使用默认值。

```javascript
const arr = [1];
const [a = 10, b = 20] = arr;

console.log(a, b); // 输出: 1 20
```

#### **4. 剩余参数**
使用 `...` 将剩余的值赋值给一个变量。

```javascript
const arr = [1, 2, 3, 4];
const [a, b, ...rest] = arr;

console.log(a, b, rest); // 输出: 1 2 [3, 4]
```

---

### **二、对象的解构赋值**
#### **1. 基本用法**
从对象中提取值，并赋值给变量。

```javascript
const obj = { name: "Alice", age: 25 };

// 传统写法
const name = obj.name;
const age = obj.age;

// 解构赋值
const { name, age } = obj;

console.log(name, age); // 输出: Alice 25
```

#### **2. 重命名变量**
可以给解构的变量重命名。

```javascript
const obj = { name: "Alice", age: 25 };
const { name: username, age: userAge } = obj;

console.log(username, userAge); // 输出: Alice 25
```

#### **3. 默认值**
如果解构的值是 `undefined`，可以使用默认值。

```javascript
const obj = { name: "Alice" };
const { name, age = 30 } = obj;

console.log(name, age); // 输出: Alice 30
```

#### **4. 嵌套解构**
可以解构嵌套的对象。

```javascript
const obj = {
  user: {
    name: "Alice",
    age: 25,
  },
};

const {
  user: { name, age },
} = obj;

console.log(name, age); // 输出: Alice 25
```

---

### **三、函数参数的解构赋值**
#### **1. 数组参数**
在函数参数中使用数组解构。

```javascript
function sum([a, b]) {
  return a + b;
}

console.log(sum([1, 2])); // 输出: 3
```

#### **2. 对象参数**
在函数参数中使用对象解构。

```javascript
function greet({ name, age }) {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet({ name: "Alice", age: 25 })); // 输出: Hello, Alice! You are 25 years old.
```

#### **3. 默认值**
在函数参数中使用默认值。

```javascript
function greet({ name = "Guest", age = 30 } = {}) {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet()); // 输出: Hello, Guest! You are 30 years old.
```

---

### **四、常见应用场景**
#### **1. 交换变量**
使用解构赋值可以轻松交换两个变量的值。

```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b); // 输出: 2 1
```

#### **2. 提取函数返回值**
从函数返回的数组或对象中提取值。

```javascript
function getData() {
  return [1, 2, 3];
}

const [x, y, z] = getData();
console.log(x, y, z); // 输出: 1 2 3
```

#### **3. 处理 API 响应**
从 API 返回的对象中提取所需的数据。

```javascript
const response = {
  status: 200,
  data: {
    user: {
      name: "Alice",
      age: 25,
    },
  },
};

const {
  data: {
    user: { name, age },
  },
} = response;

console.log(name, age); // 输出: Alice 25
```

---

### **五、注意事项**
1. **解构失败**：如果解构的目标是 `undefined` 或 `null`，会抛出错误。
   ```javascript
   const { a } = undefined; // 报错: Cannot destructure property 'a' of 'undefined' as it is undefined.
   ```
2. **默认值的作用**：默认值仅在解构的值是 `undefined` 时生效。
   ```javascript
   const { a = 10 } = { a: null };
   console.log(a); // 输出: null
   ```

---

### **六、总结**
- 解构赋值可以简化从数组或对象中提取值的过程。
- 支持默认值、重命名、嵌套解构等高级用法。
- 适用于函数参数、API 响应处理等场景。
- 注意解构失败的情况，避免程序崩溃。

掌握解构赋值可以显著提高代码的可读性和简洁性，是现代 JavaScript 开发中不可或缺的工具。
