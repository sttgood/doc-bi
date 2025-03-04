---
title: vm
article: false
order: 15
---

`vm` 模块是 Node.js 的核心模块之一，用于在 V8 虚拟机中执行 JavaScript 代码。它提供了一个隔离的上下文环境，适合执行动态生成的代码或沙箱环境。以下是 `vm` 模块的详细说明和示例。

---

### **一、`vm` 的基本用法**
#### **1. 执行代码**
使用 `vm.runInThisContext` 方法在当前上下文中执行代码。

```javascript
const vm = require("vm");

const code = "const x = 1; x + 1;";
const result = vm.runInThisContext(code);

console.log(result); // 输出: 2
```

#### **2. 创建隔离的上下文**
使用 `vm.createContext` 方法创建隔离的上下文环境。

```javascript
const context = vm.createContext({ x: 1 });

const code = "x += 1; x;";
const result = vm.runInContext(code, context);

console.log(result); // 输出: 2
```

#### **3. 执行脚本**
使用 `vm.Script` 类预编译代码，提高执行效率。

```javascript
const script = new vm.Script("x += 1; x;");

const context = vm.createContext({ x: 1 });
const result = script.runInContext(context);

console.log(result); // 输出: 2
```

---

### **二、`vm` 的高级用法**
#### **1. 超时控制**
使用 `timeout` 参数限制代码执行时间。

```javascript
try {
  const code = "while(true) {}";
  vm.runInThisContext(code, { timeout: 100 });
} catch (err) {
  console.error("Error:", err.message); // 输出: Error: Script execution timed out.
}
```

#### **2. 内存限制**
使用 `maxBuffer` 参数限制代码执行的内存使用。

```javascript
try {
  const code = "const arr = new Array(1e6);";
  vm.runInThisContext(code, { maxBuffer: 1024 });
} catch (err) {
  console.error("Error:", err.message); // 输出: Error: Script execution exceeded memory limit.
}
```

#### **3. 沙箱环境**
使用 `vm` 创建沙箱环境，限制代码访问外部资源。

```javascript
const context = vm.createContext({});

const code = "process.exit();";
try {
  vm.runInContext(code, context);
} catch (err) {
  console.error("Error:", err.message); // 输出: Error: process is not defined
}
```

---

### **三、实际应用场景**
1. **动态代码执行**
   - 使用 `vm` 执行动态生成的代码。
2. **沙箱环境**
   - 使用 `vm` 创建隔离的上下文，防止代码访问外部资源。
3. **模板引擎**
   - 使用 `vm` 实现模板引擎，提高执行效率。

---

### **四、注意事项**
1. **安全性**
   - 避免执行不可信的代码，防止代码注入攻击。
2. **性能**
   - 使用 `vm.Script` 预编译代码，提高执行效率。
3. **资源限制**
   - 使用 `timeout` 和 `maxBuffer` 参数限制代码执行时间和内存使用。

---

### **五、总结**
`vm` 模块提供了在 V8 虚拟机中执行 JavaScript 代码的功能，适合动态代码执行、沙箱环境和模板引擎等场景。通过 `vm.runInThisContext`、`vm.createContext` 和 `vm.Script`，开发者可以灵活地控制代码执行环境。掌握 `vm` 模块是学习 Node.js 高级编程的重要一步。
