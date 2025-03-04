---
title: util
article: false
order: 8
---

`util` 模块是 Node.js 的核心模块之一，提供了许多实用工具函数，用于简化开发中的常见任务。以下是 `util` 模块的详细说明和示例。

---

### **一、常用工具函数**
#### **1. `util.inspect`**
将对象转换为字符串，便于调试。

```javascript
const util = require("util");

const obj = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "coding"],
};

console.log(util.inspect(obj, { colors: true, depth: null }));
// 输出带颜色的格式化对象
```

#### **2. `util.format`**
格式化字符串，类似于 `printf`。

```javascript
const formatted = util.format("Hello, %s! You are %d years old.", "Alice", 25);
console.log(formatted); // 输出: Hello, Alice! You are 25 years old.
```

#### **3. `util.types`**
判断对象的类型。

```javascript
console.log(util.types.isDate(new Date())); // 输出: true
console.log(util.types.isRegExp(/abc/));     // 输出: true
```

#### **4. `util.promisify`**
将回调风格的函数转换为返回 Promise 的函数。

```javascript
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

readFile("example.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

#### **5. `util.callbackify`**
将返回 Promise 的函数转换为回调风格的函数。

```javascript
const asyncFunction = async () => "Hello, World!";
const callbackFunction = util.callbackify(asyncFunction);

callbackFunction((err, result) => {
  if (err) console.error(err);
  else console.log(result); // 输出: Hello, World!
});
```

---

### **二、继承与原型**
#### **1. `util.inherits`**
实现基于原型的继承（已弃用，推荐使用 ES6 的 `class` 和 `extends`）。

```javascript
function Parent() {
  this.name = "Parent";
}

Parent.prototype.sayHello = function () {
  console.log("Hello from Parent!");
};

function Child() {
  Parent.call(this);
  this.name = "Child";
}

util.inherits(Child, Parent);

const child = new Child();
child.sayHello(); // 输出: Hello from Parent!
```

#### **2. `util.TextDecoder` 和 `util.TextEncoder`**
用于处理文本编码和解码。

```javascript
const textEncoder = new util.TextEncoder();
const textDecoder = new util.TextDecoder();

const encoded = textEncoder.encode("Hello, World!");
console.log(encoded); // 输出: Uint8Array(12) [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100]

const decoded = textDecoder.decode(encoded);
console.log(decoded); // 输出: Hello, World!
```

---

### **三、调试与日志**
#### **1. `util.debuglog`**
创建调试日志函数。

```javascript
const debug = util.debuglog("myapp");

debug("This is a debug message"); // 只有在环境变量 NODE_DEBUG=myapp 时才会输出
```

#### **2. `util.deprecate`**
标记函数为已弃用。

```javascript
const deprecatedFunction = util.deprecate(() => {
  console.log("This function is deprecated.");
}, "deprecatedFunction is deprecated. Use newFunction instead.");

deprecatedFunction(); // 输出: This function is deprecated. (并显示弃用警告)
```

---

### **四、实际应用场景**
1. **调试与日志**
   - 使用 `util.inspect` 和 `util.debuglog` 调试对象和日志。
2. **异步编程**
   - 使用 `util.promisify` 将回调函数转换为 Promise。
3. **类型检查**
   - 使用 `util.types` 判断对象的类型。
4. **文本编码**
   - 使用 `util.TextDecoder` 和 `util.TextEncoder` 处理文本编码。

---

### **五、总结**
`util` 模块提供了许多实用工具函数，用于简化开发中的常见任务。通过 `util.inspect`、`util.promisify`、`util.types` 等函数，开发者可以更高效地调试、异步编程和类型检查。掌握 `util` 模块是学习 Node.js 的重要一步。
