---
title: 'ES Modules'
article: false
order: 2
---
**ES Modules（ESM）** 是 JavaScript 的标准模块系统，使用 `import` 和 `export` 语句来导入和导出模块。ES Modules 是 ECMAScript 6（ES6）引入的特性，适用于现代 JavaScript 开发。

---

### **1. 导出模块**

#### **1.1 命名导出**
使用 `export` 关键字导出变量、函数或类。S

```javascript
// math.js
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

#### **1.2 默认导出**
使用 `export default` 导出一个默认值。

```javascript
// config.js
export default {
    port: 3000,
    host: 'localhost'
};
```

#### **1.3 混合导出**
可以同时使用命名导出和默认导出。

```javascript
// utils.js
export function log(message) {
    console.log(message);
}

export default {
    version: '1.0.0'
};
```

---

### **2. 导入模块**

#### **2.1 导入命名导出**
使用 `import { ... } from 'module'` 导入命名导出。

```javascript
// main.js
import { PI, add, subtract } from './math.js';

console.log(PI); // 输出: 3.14159
console.log(add(1, 2)); // 输出: 3
console.log(subtract(5, 3)); // 输出: 2
```

#### **2.2 导入默认导出**
使用 `import defaultExport from 'module'` 导入默认导出。

```javascript
// main.js
import config from './config.js';

console.log(config.port); // 输出: 3000
```

#### **2.3 导入所有导出**
使用 `import * as alias from 'module'` 导入所有导出并命名为别名。

```javascript
// main.js
import * as math from './math.js';

console.log(math.PI); // 输出: 3.14159
console.log(math.add(1, 2)); // 输出: 3
```

#### **2.4 混合导入**
可以同时导入命名导出和默认导出。

```javascript
// main.js
import utils, { log } from './utils.js';

console.log(utils.version); // 输出: 1.0.0
log('Hello, World!'); // 输出: Hello, World!
```

---

### **3. 动态导入**
使用 `import()` 动态导入模块，返回一个 Promise。

```javascript
// main.js
const modulePath = './math.js';

import(modulePath).then(math => {
    console.log(math.add(1, 2)); // 输出: 3
});
```

---

### **4. 启用 ES Modules**
在 Node.js 中使用 ES Modules 有以下几种方式：

#### **4.1 文件扩展名**
将文件扩展名改为 `.mjs`。

```javascript
// math.mjs
export function add(a, b) {
    return a + b;
}

// main.mjs
import { add } from './math.mjs';
console.log(add(1, 2)); // 输出: 3
```

#### **4.2 `package.json`**
在 `package.json` 中添加 `"type": "module"`。

```json
// package.json
{
  "type": "module"
}
```

#### **4.3 命令行参数**
使用 `--input-type=module` 参数。

```bash
node --input-type=module main.js
```

---

### **5. 注意事项**
1. **严格模式**：ES Modules 默认启用严格模式。
2. **静态加载**：`import` 是静态加载，必须在模块的顶层使用。
3. **兼容性**：在旧版 Node.js 中，ES Modules 可能不被支持。
4. **文件扩展名**：在 Node.js 中，ES Modules 文件扩展名通常为 `.mjs`。

---

### **6. 总结**
- **ES Modules** 是 JavaScript 的标准模块系统，使用 `import` 和 `export`。
- 支持命名导出、默认导出和混合导出。
- 支持静态加载和动态加载。
- 在 Node.js 中，可以通过文件扩展名、`package.json` 或命令行参数启用 ES Modules。

掌握 ES Modules 的使用，可以更好地组织和管理代码，提升开发效率和代码可维护性。
