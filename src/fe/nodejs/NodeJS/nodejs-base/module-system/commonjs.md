---
title: CommonJS
article: false
order: 1
---
在 Node.js 中，**模块系统** 是组织代码的核心机制。通过 `require` 和 `module.exports`，开发者可以将代码拆分为多个模块，并在需要时导入和使用。以下是关于 `require` 和 `module.exports` 的详细说明和示例。

---

### **一、模块系统简介**
Node.js 使用 **CommonJS 模块规范**，每个文件被视为一个独立的模块。模块可以通过 `require` 导入其他模块，并通过 `module.exports` 导出自己的功能。

---

### **二、导出模块**
#### **1. 导出单个值**
使用 `module.exports` 导出一个值（如函数、对象、变量等）。

```javascript
// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

#### **2. 导出多个值**
将多个值封装到一个对象中，然后导出该对象。

```javascript
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract,
};
```

#### **3. 直接挂载到 `exports`**
`exports` 是 `module.exports` 的引用，可以直接挂载属性。

```javascript
// math.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

:::warning 如果直接对 `exports` 赋值，会断开它与 `module.exports` 的引用关系，导致导出失败。

```javascript
// 错误示例
exports = {
  add,
  subtract,
};
```

:::

---

### **三、导入模块**
使用 `require` 导入其他模块。

#### **1. 导入单个值**
```javascript
// main.js
const add = require("./math.js");

console.log(add(2, 3)); // 输出: 5
```

#### **2. 导入多个值**
```javascript
// main.js
const math = require("./math.js");

console.log(math.add(2, 3));       // 输出: 5
console.log(math.subtract(5, 2));  // 输出: 3
```

#### **3. 导入内置模块**
Node.js 提供了许多内置模块，可以直接导入。

```javascript
const fs = require("fs");
const path = require("path");
```

#### **4. 导入第三方模块**
通过 npm 安装的第三方模块，可以直接导入。

```javascript
const express = require("express");
const lodash = require("lodash");
```

---

### **四、模块加载机制**
1. **核心模块**：优先加载 Node.js 内置模块（如 `fs`、`path`）。
2. **文件模块**：加载当前目录或子目录中的 `.js` 文件。
3. **目录模块**：加载目录中的 `index.js` 文件。
4. **第三方模块**：加载 `node_modules` 目录中的模块。

---

### **五、模块缓存**
Node.js 会缓存已加载的模块，避免重复加载。每次 `require` 时，都会返回缓存的模块。

```javascript
// math.js
console.log("math.js loaded");

module.exports = {
  add: (a, b) => a + b,
};

// main.js
const math1 = require("./math.js"); // 输出: math.js loaded
const math2 = require("./math.js"); // 不会再次加载
```

---

### **六、实际应用场景**
1. **代码拆分**
   - 将功能拆分为多个模块，提高代码的可维护性。
2. **复用代码**
   - 将常用功能封装为模块，方便复用。
3. **第三方库**
   - 通过 npm 安装和使用第三方模块。

---

### **七、注意事项**
1. **路径问题**
   - 使用相对路径（如 `./math.js`）或绝对路径加载模块。
2. **循环依赖**
   - 避免模块之间的循环依赖，可能导致未定义行为。
3. **模块缓存**
   - 模块加载后会缓存，修改模块代码后需要重启应用。

---

### **八、总结**
- `module.exports` 用于导出模块的功能。
- `require` 用于导入其他模块。
- 模块系统是 Node.js 组织代码的核心机制，支持代码拆分、复用和第三方库的使用。

掌握 `require` 和 `module.exports` 是学习 Node.js 模块化开发的基础。
