---
title: 条件语句
article: false
order: 1
---
JavaScript 中的条件语句用于根据不同的条件执行不同的代码块。以下是 JavaScript 中常用的条件语句及其用法：

---

### 1. **`if` 语句**
用于在条件为 `true` 时执行代码块。

```javascript
if (条件) {
  // 条件为 true 时执行的代码
}
```

**示例**：
```javascript
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

---

### 2. **`if...else` 语句**
用于在条件为 `true` 时执行一个代码块，否则执行另一个代码块。

```javascript
if (条件) {
  // 条件为 true 时执行的代码
} else {
  // 条件为 false 时执行的代码
}
```

**示例**：
```javascript
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

---

### 3. **`if...else if...else` 语句**
用于检查多个条件，依次执行第一个为 `true` 的代码块。

```javascript
if (条件1) {
  // 条件1为 true 时执行的代码
} else if (条件2) {
  // 条件2为 true 时执行的代码
} else {
  // 所有条件均为 false 时执行的代码
}
```

**示例**：
```javascript
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

---

### 4. **三元运算符 (`?:`)**
用于简化 `if...else` 语句，根据条件返回两个值之一。

```javascript
条件 ? 值1 : 值2;
```

**示例**：
```javascript
let age = 18;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"
```

---

### 5. **`switch` 语句**
用于根据不同的值执行不同的代码块。

```javascript
switch (表达式) {
  case 值1:
    // 表达式等于值1时执行的代码
    break;
  case 值2:
    // 表达式等于值2时执行的代码
    break;
  default:
    // 表达式不等于任何值时执行的代码
}
```

**示例**：
```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("End of the week");
    break;
  default:
    console.log("Midweek");
}
```

---

### 6. **`&&` 和 `||` 短路运算**
利用逻辑运算符 `&&` 和 `||` 实现简单的条件判断。

- **`&&` 短路运算**：如果第一个条件为 `true`，则执行第二个表达式。
  ```javascript
  条件 && 表达式;
  ```
  **示例**：
  ```javascript
  let isLoggedIn = true;
  isLoggedIn && console.log("User is logged in.");
  ```

- **`||` 短路运算**：如果第一个条件为 `false`，则执行第二个表达式。
  ```javascript
  条件 || 表达式;
  ```
  **示例**：
  ```javascript
  let name = "";
  let displayName = name || "Guest";
  console.log(displayName); // "Guest"
  ```

---

### 7. **`null` 合并运算符 (`??`)**
用于检查值是否为 `null` 或 `undefined`，如果是则返回默认值。

```javascript
值 ?? 默认值;
```

**示例**：
```javascript
let value = null;
let result = value ?? "Default";
console.log(result); // "Default"
```

---

### 8. **可选链运算符 (`?.`)**
用于安全地访问嵌套对象的属性，避免因属性不存在而报错。

```javascript
对象?.属性;
```

**示例**：
```javascript
let user = { name: "Alice" };
console.log(user.address?.city); // undefined（不会报错）
```

---

### **总结**
- `if`、`if...else`、`if...else if...else` 是最常用的条件语句。
- 三元运算符适合简单的条件判断。
- `switch` 语句适合多条件分支的场景。
- 短路运算、`??` 和 `?.` 可以简化代码并提高安全性。

根据具体需求选择合适的条件语句，可以使代码更简洁、易读和高效。
