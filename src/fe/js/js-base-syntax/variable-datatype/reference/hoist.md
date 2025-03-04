---
title: 变量提升
article: false
---
**变量提升（Hoisting）** 是 JavaScript 中的一个重要概念，指的是在代码执行之前，JavaScript 引擎会将变量和函数的声明“提升”到其作用域的顶部。这意味着你可以在声明之前访问变量或调用函数，但具体行为因变量类型（`var`、`let`、`const`）和函数类型（函数声明、函数表达式）而有所不同。

---

### **变量提升的核心机制**

1. **JavaScript 代码的执行分为两个阶段**：
   - **编译阶段**：JavaScript 引擎会扫描代码，将所有变量和函数的声明提升到作用域的顶部。
   - **执行阶段**：按照代码的顺序逐行执行。

2. **提升的规则**：
   - **变量声明**：`var`、`let`、`const` 的声明会被提升。
   - **函数声明**：函数声明会被整体提升。
   - **函数表达式**：只有变量声明会被提升，函数本身不会被提升。

---

### **变量提升的具体表现**

#### 1. **`var` 的变量提升**
- `var` 声明的变量会被提升到其作用域的顶部，并初始化为 `undefined`。
- 在声明之前访问变量不会报错，但值为 `undefined`。

**示例**：
```javascript
console.log(x); // 输出 undefined（变量提升，但未赋值）
var x = 10;
console.log(x); // 输出 10
```

等价于：
```javascript
var x; // 变量提升，初始化为 undefined
console.log(x); // undefined
x = 10;
console.log(x); // 10
```

---

#### 2. **`let` 和 `const` 的变量提升**
- `let` 和 `const` 声明的变量也会被提升，但不会被初始化。
- 在声明之前访问变量会抛出 `ReferenceError`，这种现象称为 **暂时性死区（Temporal Dead Zone, TDZ）**。

**示例**：
```javascript
console.log(y); // 报错：Cannot access 'y' before initialization
let y = 20;
```

等价于：
```javascript
let y; // 变量提升，但未初始化
console.log(y); // 报错：Cannot access 'y' before initialization
y = 20;
```

---

#### 3. **函数声明的提升**
- 函数声明会被整体提升到作用域的顶部。
- 在声明之前可以调用函数。

**示例**：
```javascript
foo(); // 输出 "Hello"
function foo() {
  console.log("Hello");
}
```

等价于：
```javascript
function foo() { // 函数声明提升
  console.log("Hello");
}
foo(); // 输出 "Hello"
```

---

#### 4. **函数表达式的提升**
- 函数表达式不会被提升，只有变量声明会被提升。
- 如果使用 `var` 声明函数表达式，变量会被提升并初始化为 `undefined`，在赋值之前调用会报错。

**示例**：
```javascript
bar(); // 报错：bar is not a function
var bar = function() {
  console.log("World");
};
```

等价于：
```javascript
var bar; // 变量提升，初始化为 undefined
bar(); // 报错：bar is not a function
bar = function() {
  console.log("World");
};
```

---

### **变量提升的作用域**

- **`var`**：提升到函数作用域的顶部。
- **`let` 和 `const`**：提升到块级作用域的顶部。

**示例**：
```javascript
function example() {
  if (true) {
    var x = 10; // 提升到函数作用域顶部
    let y = 20; // 提升到块级作用域顶部
  }
  console.log(x); // 输出 10
  console.log(y); // 报错：y is not defined
}
example();
```

---

### **如何理解变量提升**

1. **变量提升是 JavaScript 引擎的工作机制**：
   - 在代码执行之前，JavaScript 引擎会先扫描代码，将所有变量和函数的声明提升到作用域的顶部。

2. **变量提升的规则因变量类型而异**：
   - `var` 声明的变量会被提升并初始化为 `undefined`。
   - `let` 和 `const` 声明的变量会被提升，但不会被初始化，在声明之前访问会报错。
   - 函数声明会被整体提升，函数表达式只有变量声明会被提升。

3. **变量提升的作用域**：
   - `var` 提升到函数作用域的顶部。
   - `let` 和 `const` 提升到块级作用域的顶部。

4. **避免变量提升带来的问题**：
   - 使用 `let` 和 `const` 替代 `var`，以避免变量提升和意外行为。
   - 始终在作用域顶部声明变量和函数。

---

### **总结**

| 声明方式   | 是否提升 | 初始化值    | 暂时性死区 |
| ---------- | -------- | ----------- | ---------- |
| `var`      | 是       | `undefined` | 无         |
| `let`      | 是       | 未初始化    | 有         |
| `const`    | 是       | 未初始化    | 有         |
| 函数声明   | 是       | 函数体      | 无         |
| 函数表达式 | 否       | 未初始化    | 无         |

理解变量提升的机制可以帮助你编写更清晰、更健壮的代码，并避免常见的错误。
