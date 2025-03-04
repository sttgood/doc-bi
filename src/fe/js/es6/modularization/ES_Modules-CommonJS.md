---
title: 模块加载机制
article: false
order: 2
---

在 JavaScript 中，模块加载机制主要有两种：**ES Modules（ESM）** 和 **CommonJS（CJS）**。它们分别代表了现代和传统的模块化方案，具有不同的语法、加载机制和适用场景。

---

### **一、ES Modules（ESM）**
ES Modules 是 ES6（ECMAScript 2015）引入的官方模块化标准，具有以下特点：

#### **1. 语法**
- **导出**：使用 `export` 导出模块。
  ```javascript
  // math.js
  export const PI = 3.14159;
  export function add(a, b) {
    return a + b;
  }
  ```
- **导入**：使用 `import` 导入模块。
  ```javascript
  // main.js
  import { PI, add } from "./math.js";
  console.log(add(PI, 2)); // 输出: 5.14159
  ```

#### **2. 加载机制**
- **静态加载**：`import` 是静态的，必须在模块的顶层使用，不能在条件语句或函数中动态加载。
- **异步加载**：ESM 支持异步加载模块（通过 `import()`）。
- **浏览器支持**：在浏览器中，需要使用 `<script type="module">` 加载 ES 模块。
  ```html
  <script type="module" src="main.js"></script>
  ```
- **Node.js 支持**：在 Node.js 中，需要将文件扩展名改为 `.mjs`，或在 `package.json` 中设置 `"type": "module"`。

#### **3. 特点**
- **严格模式**：模块默认运行在严格模式下。
- **静态分析**：支持静态分析，便于工具优化（如 Tree Shaking）。
- **跨平台**：支持浏览器和 Node.js。

---

### **二、CommonJS（CJS）**
CommonJS 是 Node.js 默认的模块化标准，主要用于服务器端开发，具有以下特点：

#### **1. 语法**
- **导出**：使用 `module.exports` 或 `exports` 导出模块。
  ```javascript
  // math.js
  const PI = 3.14159;
  function add(a, b) {
    return a + b;
  }
  module.exports = { PI, add };
  ```
- **导入**：使用 `require` 导入模块。
  ```javascript
  // main.js
  const math = require("./math.js");
  console.log(math.add(math.PI, 2)); // 输出: 5.14159
  ```

#### **2. 加载机制**
- **动态加载**：`require` 是动态的，可以在代码的任何地方使用。
- **同步加载**：CommonJS 是同步加载模块，适用于服务器端。
- **Node.js 支持**：CommonJS 是 Node.js 的默认模块系统。

#### **3. 特点**
- **灵活性**：支持动态加载，适合服务器端开发。
- **模块缓存**：模块在第一次加载后会被缓存，后续加载会直接返回缓存结果。
- **浏览器不支持**：CommonJS 主要用于 Node.js，浏览器原生不支持。

---

### **三、ES Modules vs CommonJS 对比**

| **特性**         | **ES Modules（ESM）**                    | **CommonJS（CJS）**          |
| ---------------- | ---------------------------------------- | ---------------------------- |
| **语法**         | `import` / `export`                      | `require` / `module.exports` |
| **加载机制**     | 静态加载（支持异步加载）                 | 动态加载（同步加载）         |
| **严格模式**     | 默认启用                                 | 需要显式声明 `"use strict"`  |
| **浏览器支持**   | 支持（需 `<script type="module">`）      | 不支持（需通过工具转换）     |
| **Node.js 支持** | 支持（需 `.mjs` 或 `"type": "module"`）  | 默认支持                     |
| **动态加载**     | 通过 `import()` 实现                     | 通过 `require` 实现          |
| **静态分析**     | 支持（利于 Tree Shaking）                | 不支持                       |
| **模块缓存**     | 支持                                     | 支持                         |
| **适用场景**     | 现代 JavaScript 开发（浏览器和 Node.js） | 传统 Node.js 开发            |

---

### **四、互操作性**
在 Node.js 中，ES Modules 和 CommonJS 可以共存，但需要注意以下问题：

#### **1. ESM 导入 CJS**
ES Modules 可以导入 CommonJS 模块，但导入的值会被包装为默认导出。

```javascript
// math.cjs
module.exports = { PI: 3.14159 };

// main.mjs
import math from "./math.cjs";
console.log(math.PI); // 输出: 3.14159
```

#### **2. CJS 导入 ESM**
CommonJS 不能直接导入 ES Modules，需要使用动态 `import()`。

```javascript
// math.mjs
export const PI = 3.14159;

// main.cjs
import("./math.mjs").then(math => {
  console.log(math.PI); // 输出: 3.14159
});
```

---

### **五、工具支持**
#### **1. Babel**
Babel 可以将 ES Modules 转换为 CommonJS，以便在不支持 ESM 的环境中运行。

#### **2. Webpack / Rollup**
这些打包工具支持 ES Modules 和 CommonJS，并可以将它们打包为浏览器可用的代码。

#### **3. Node.js**
Node.js 支持 ES Modules 和 CommonJS，但需要配置（如 `.mjs` 或 `package.json` 中的 `"type": "module"`）。

---

### **六、总结**
- **ES Modules** 是现代 JavaScript 的官方模块化标准，支持静态加载、异步加载和跨平台，适合现代开发。
- **CommonJS** 是 Node.js 的默认模块化标准，支持动态加载和同步加载，适合传统 Node.js 开发。
- 两者可以共存，但需要注意互操作性和工具支持。

在实际开发中，推荐优先使用 **ES Modules**，因为它是未来的标准，具有更好的性能和工具支持。对于旧的 Node.js 项目，可以继续使用 **CommonJS**，或者逐步迁移到 ES Modules。
