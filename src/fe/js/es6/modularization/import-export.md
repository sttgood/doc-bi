---
title: import与export语法
article: false
order: 1
---

`import` 和 `export` 是 ES6（ECMAScript 2015）引入的模块语法，用于在 JavaScript 中实现模块化开发。它们允许将代码拆分为多个模块，并通过导入和导出的方式共享功能。以下是关于 `import` 和 `export` 的详细说明和示例。

---

### **一、`export` 语法**
`export` 用于从模块中导出变量、函数、类等，供其他模块使用。

#### **1. 导出单个值**
使用 `export` 直接导出单个值。

```javascript
// math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}
```

#### **2. 导出多个值**
使用 `export` 导出多个值。

```javascript
// utils.js
const greet = () => "Hello!";
const square = (x) => x * x;

export { greet, square };
```

#### **3. 默认导出**
每个模块可以有一个默认导出，使用 `export default`。

```javascript
// user.js
const user = {
  name: "Alice",
  age: 25,
};

export default user;
```

#### **4. 重命名导出**
在导出时可以重命名。

```javascript
// math.js
const multiply = (a, b) => a * b;

export { multiply as mul };
```

---

### **二、`import` 语法**
`import` 用于从其他模块中导入导出的值。

#### **1. 导入单个值**
使用 `import` 导入单个值。

```javascript
// main.js
import { PI, add } from "./math.js";

console.log(PI); // 输出: 3.14159
console.log(add(2, 3)); // 输出: 5
```

#### **2. 导入多个值**
使用 `import` 导入多个值。

```javascript
// main.js
import { greet, square } from "./utils.js";

console.log(greet()); // 输出: Hello!
console.log(square(4)); // 输出: 16
```

#### **3. 导入默认导出**
使用 `import` 导入默认导出。

```javascript
// main.js
import user from "./user.js";

console.log(user.name); // 输出: Alice
```

#### **4. 重命名导入**
在导入时可以重命名。

```javascript
// main.js
import { mul as multiply } from "./math.js";

console.log(multiply(2, 3)); // 输出: 6
```

#### **5. 导入所有值**
使用 `*` 导入模块中的所有导出值。

```javascript
// main.js
import * as math from "./math.js";

console.log(math.PI); // 输出: 3.14159
console.log(math.add(2, 3)); // 输出: 5
```

---

### **三、常见应用场景**
#### **1. 模块化开发**
将代码拆分为多个模块，提高代码的可维护性和复用性。

```javascript
// math.js
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}

// main.js
import { PI, add } from "./math.js";
console.log(add(PI, 2)); // 输出: 5.14159
```

#### **2. 默认导出**
默认导出适合用于模块只有一个主要功能或对象的情况。

```javascript
// user.js
export default {
  name: "Alice",
  age: 25,
};

// main.js
import user from "./user.js";
console.log(user.name); // 输出: Alice
```

#### **3. 动态导入**
使用 `import()` 动态加载模块，适用于按需加载的场景。

```javascript
// main.js
const loadModule = async () => {
  const math = await import("./math.js");
  console.log(math.add(2, 3)); // 输出: 5
};

loadModule();
```

---

### **四、注意事项**
1. **模块路径**：`import` 的路径可以是相对路径（如 `./math.js`）或绝对路径（如 `/src/math.js`），也可以直接使用模块名（如 `lodash`）。
2. **严格模式**：模块默认运行在严格模式下，无需显式声明 `"use strict"`。
3. **浏览器支持**：在浏览器中使用 `import` 和 `export` 时，需要将 `<script>` 标签的 `type` 属性设置为 `module`。
   ```html
   <script type="module" src="main.js"></script>
   ```
4. **Node.js 支持**：在 Node.js 中使用 ES6 模块时，需要将文件扩展名改为 `.mjs`，或在 `package.json` 中设置 `"type": "module"`。

---

### **五、总结**
- `export` 用于从模块中导出变量、函数、类等。
- `import` 用于从其他模块中导入导出的值。
- 支持默认导出、重命名导出和导入、动态导入等功能。
- 适用于模块化开发、按需加载等场景。

掌握 `import` 和 `export` 语法是现代 JavaScript 开发的基础，可以显著提高代码的组织性和可维护性。
