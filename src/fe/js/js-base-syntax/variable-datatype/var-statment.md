---
title: 变量声明
article: false
order: 1
---
在 JavaScript 中，变量声明用于定义变量并为其分配内存空间。JavaScript 提供了多种声明变量的方式，每种方式都有其特定的作用域和行为。以下是 JavaScript 中变量声明的详细说明：

---

### 1. **`var`**
- **作用域**：函数作用域（在函数内声明的变量只能在函数内访问）。
- **变量提升**：`var` 声明的变量会被提升到其作用域的顶部。
- **重复声明**：允许重复声明。
- **全局变量**：在全局作用域中声明的 `var` 变量会成为全局对象的属性（如 `window` 对象）。

**示例**：
```javascript
function example() {
  var x = 10;
  if (true) {
    var x = 20; // 覆盖了外部的 x
  }
  console.log(x); // 输出 20
}
example();
```

---

### 2. **`let`**
- **作用域**：块级作用域（在 `{}` 内声明的变量只能在块内访问）。
- **变量提升**：`let` 声明的变量也会被提升，但在声明之前访问会抛出 `ReferenceError`（暂时性死区）。
- **重复声明**：不允许重复声明。
- **全局变量**：在全局作用域中声明的 `let` 变量不会成为全局对象的属性。

**示例**：
```javascript
function example() {
  let x = 10;
  if (true) {
    let x = 20; // 与外部的 x 无关
  }
  console.log(x); // 输出 10
}
example();
```

---

### 3. **`const`**
- **作用域**：块级作用域（与 `let` 相同）。
- **变量提升**：`const` 声明的变量也会被提升，但在声明之前访问会抛出 `ReferenceError`。
- **重复声明**：不允许重复声明。
- **不可重新赋值**：`const` 声明的变量必须在声明时初始化，且不能重新赋值（但对于对象和数组，其属性或元素可以修改）。

**示例**：
```javascript
const PI = 3.14;
// PI = 3.14159; // 报错：Assignment to constant variable.

const obj = { name: "Alice" };
obj.name = "Bob"; // 允许修改属性
console.log(obj.name); // 输出 "Bob"
```

---

### 4. **未声明直接赋值**
- **行为**：如果变量未使用 `var`、`let` 或 `const` 声明，直接赋值会隐式创建一个全局变量。
- **风险**：可能导致意外的全局变量污染。

**示例**：
```javascript
function example() {
  x = 10; // 隐式创建全局变量 x
}
example();
console.log(x); // 输出 10
```

---

### 5. **变量提升（Hoisting）**
JavaScript 会将变量声明提升到其作用域的顶部，但赋值操作不会提升。[变量提升](./reference/hoist.md)

**示例**：

```javascript
console.log(x); // 输出 undefined（变量提升，但未赋值）
var x = 10;

console.log(y); // 报错：Cannot access 'y' before initialization
let y = 20;
```

---

### 6. **作用域**
- **全局作用域**：在函数和块外部声明的变量。
- **函数作用域**：`var` 声明的变量。
- **块级作用域**：`let` 和 `const` 声明的变量。

**示例**：
```javascript
let globalVar = "I'm global";

function example() {
  var functionVar = "I'm function-scoped";
  if (true) {
    let blockVar = "I'm block-scoped";
  }
  console.log(functionVar); // 输出 "I'm function-scoped"
  // console.log(blockVar); // 报错：blockVar is not defined
}
example();
```

---

### 7. **最佳实践**
- 使用 `const` 声明不会改变的变量。
- 使用 `let` 声明需要重新赋值的变量。
- 避免使用 `var`，以防止变量提升和意外的作用域问题。
- 避免未声明直接赋值，以防止全局变量污染。

**示例**：
```javascript
const PI = 3.14;
let count = 0;

function increment() {
  count++;
}
increment();
console.log(count); // 输出 1
```

---

### **总结**
| 关键字  | 作用域     | 变量提升 | 重复声明 | 重新赋值 |
| ------- | ---------- | -------- | -------- | -------- |
| `var`   | 函数作用域 | 是       | 允许     | 允许     |
| `let`   | 块级作用域 | 否       | 不允许   | 允许     |
| `const` | 块级作用域 | 否       | 不允许   | 不允许   |

根据具体需求选择合适的变量声明方式，可以使代码更清晰、易维护。
