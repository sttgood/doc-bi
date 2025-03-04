---
title: 循环语句
article: false
order: 2
---
JavaScript 中的循环语句用于重复执行一段代码，直到满足特定条件。以下是 JavaScript 中常用的循环语句及其用法：

---

### 1. **`for` 循环**
用于在已知循环次数的情况下重复执行代码。

```javascript
for (初始化; 条件; 更新) {
  // 循环体
}
```

**示例**：
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // 输出 0, 1, 2, 3, 4
}
```

---

### 2. **`while` 循环**
用于在条件为 `true` 时重复执行代码。

```javascript
while (条件) {
  // 循环体
}
```

**示例**：
```javascript
let i = 0;
while (i < 5) {
  console.log(i); // 输出 0, 1, 2, 3, 4
  i++;
}
```

---

### 3. **`do...while` 循环**
与 `while` 循环类似，但至少会执行一次循环体，即使条件为 `false`。

```javascript
do {
  // 循环体
} while (条件);
```

**示例**：
```javascript
let i = 0;
do {
  console.log(i); // 输出 0, 1, 2, 3, 4
  i++;
} while (i < 5);
```

---

### 4. **`for...in` 循环**
循环用于遍历对象的可枚举属性（包括从原型链继承的可枚举属性）。

```javascript
for (变量 in 对象) {
  // 循环体
}
```

**示例**：
```javascript
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key + ": " + obj[key]); // 输出 "a: 1", "b: 2", "c: 3"
}
```

---

### 5. **`for...of` 循环**
用于遍历可迭代对象（如数组、字符串、Map、Set 等）。

```javascript
for (变量 of 可迭代对象) {
  // 循环体
}
```

**示例**：
```javascript
let arr = [1, 2, 3];
for (let value of arr) {
  console.log(value); // 输出 1, 2, 3
}
```

---

### 6. **`forEach` 方法**
用于遍历数组的每个元素，执行回调函数。

```javascript
数组.forEach((元素, 索引, 数组) => {
  // 循环体
});
```

**示例**：
```javascript
let arr = [1, 2, 3];
arr.forEach((value, index) => {
  console.log(index + ": " + value); // 输出 "0: 1", "1: 2", "2: 3"
});
```

---

### 7. **`map` 方法**
用于遍历数组的每个元素，并返回一个新数组。

```javascript
let 新数组 = 数组.map((元素, 索引, 数组) => {
  return 新值;
});
```

**示例**：
```javascript
let arr = [1, 2, 3];
let newArr = arr.map(value => value * 2);
console.log(newArr); // 输出 [2, 4, 6]
```

---

### 8. **`filter` 方法**
用于遍历数组的每个元素，并返回满足条件的元素组成的新数组。

```javascript
let 新数组 = 数组.filter((元素, 索引, 数组) => {
  return 条件;
});
```

**示例**：
```javascript
let arr = [1, 2, 3, 4, 5];
let newArr = arr.filter(value => value % 2 === 0);
console.log(newArr); // 输出 [2, 4]
```

---

### 9. **`reduce` 方法**
用于遍历数组的每个元素，并将结果累积为单个值。

```javascript
let 结果 = 数组.reduce((累积值, 当前值, 索引, 数组) => {
  return 累积值 + 当前值;
}, 初始值);
```

**示例**：
```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, value) => acc + value, 0);
console.log(sum); // 输出 10
```

---

### **总结**
- `for`、`while`、`do...while` 是基本的循环语句。
- `for...in` 用于遍历对象属性，`for...of` 用于遍历可迭代对象。
- `forEach`、`map`、`filter`、`reduce` 是数组的常用遍历方法。

根据具体需求选择合适的循环语句，可以使代码更简洁、高效。
