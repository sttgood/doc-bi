---
title: 区别
article: false
order: 3
---

**CommonJS** 和 **ES Modules（ESM）** 是 JavaScript 中两种主要的模块系统。它们的设计理念和语法不同，适用于不同的场景。以下是它们的详细对比和区别。

---

### **一、语法对比**
#### **1. CommonJS**
- **导出模块**：使用 `module.exports` 或 `exports`。
- **导入模块**：使用 `require`。

#### **2. ES Modules**
- **导出模块**：使用 `export`。
- **导入模块**：使用 `import`。

### 二、规则

**CommonJS模块化规范**

- 每个模块，module变量代表当前模块
- module变量是一个对象，它的exports属性（module.exports）。是对外接口
- 加载某个模块，其实是加载该模块的module.exports属性。常用require()方法

**ECMAScript标准**

- 按需加载：使用命名导入和导出
- 全部加载：使用默认导入和导出

---

### **三、加载方式**
#### **1. CommonJS**
- **同步加载**：模块在运行时同步加载，适合服务器端（如 Node.js）。
- **动态加载**：`require` 可以在代码的任何地方使用，支持动态加载模块。

#### **2. ES Modules**
- **异步加载**：模块在编译时静态加载，适合浏览器端。
- **静态加载**：`import` 必须在模块的顶层使用，不支持动态加载。

---

### **四、模块作用域**
#### **1. CommonJS**
- **动态作用域**：模块的导出值是动态的，可以在运行时修改。
  ```javascript
  // math.js
  let count = 0;
  module.exports = {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
  ```

#### **2. ES Modules**
- **静态作用域**：模块的导出值是静态的，不能在运行时修改。
  ```javascript
  // math.js
  let count = 0;
  export function increment() {
    count++;
  }
  export function getCount() {
    return count;
  }
  ```

---

### **五、性能**
#### **1. CommonJS**
- **同步加载**：适合服务器端，但在浏览器端可能导致性能问题。
- **缓存机制**：模块加载后会缓存，避免重复加载。

#### **2. ES Modules**
- **异步加载**：适合浏览器端，支持按需加载，提高性能。
- **静态分析**：支持静态分析，便于工具优化（如 Tree Shaking）。

---

### **六、兼容性**
#### **1. CommonJS**
- **Node.js**：Node.js 默认支持 CommonJS。
- **浏览器**：浏览器不支持 CommonJS，需要使用打包工具（如 Webpack、Browserify）。

#### **2. ES Modules**
- **Node.js**：Node.js 12 及以上版本支持 ES Modules（需设置 `"type": "module"` 或使用 `.mjs` 扩展名）。
- **浏览器**：现代浏览器原生支持 ES Modules。

---

### **七、实际应用场景**
#### **1. CommonJS**
- **Node.js 应用**：适合服务器端开发。
- **旧项目**：兼容旧的 JavaScript 项目。

#### **2. ES Modules**
- **现代前端开发**：适合浏览器端和现代前端框架（如 React、Vue）。
- **跨平台开发**：适合同时支持浏览器和 Node.js 的项目。

---

### **八、总结**
| **特性**       | **CommonJS**                       | **ES Modules**                |
| -------------- | ---------------------------------- | ----------------------------- |
| **语法**       | `module.exports` 和 `require`      | `export` 和 `import`          |
| **加载方式**   | 同步加载，动态加载                 | 异步加载，静态加载            |
| **模块作用域** | 动态作用域                         | 静态作用域                    |
| **性能**       | 适合服务器端，浏览器端性能较差     | 适合浏览器端，支持按需加载    |
| **兼容性**     | Node.js 默认支持，浏览器需打包工具 | 现代浏览器和 Node.js 12+ 支持 |
| **适用场景**   | Node.js 应用，旧项目               | 现代前端开发，跨平台开发      |
