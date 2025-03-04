---
title: querystring
article: false
order: 13
---

`querystring` 模块是 Node.js 的核心模块之一，用于解析和格式化 URL 查询字符串。它提供了将查询字符串转换为对象和将对象转换为查询字符串的功能。以下是 `querystring` 模块的详细说明和示例。

---

### **一、`querystring` 的基本用法**
#### **1. 解析查询字符串**
使用 `querystring.parse` 方法将查询字符串转换为对象。

```javascript
const querystring = require("querystring");

const query = "name=Alice&age=25&hobbies=reading&hobbies=coding";
const parsed = querystring.parse(query);

console.log(parsed);
// 输出: { name: 'Alice', age: '25', hobbies: ['reading', 'coding'] }
```

#### **2. 格式化对象**
使用 `querystring.stringify` 方法将对象转换为查询字符串。

```javascript
const obj = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "coding"],
};

const stringified = querystring.stringify(obj);
console.log(stringified);
// 输出: name=Alice&age=25&hobbies=reading&hobbies=coding
```

---

### **二、`querystring` 的高级用法**
#### **1. 自定义分隔符**
`querystring.parse` 和 `querystring.stringify` 支持自定义分隔符和键值对分隔符。

```javascript
const query = "name=Alice;age=25,hobbies=reading,hobbies=coding";
const parsed = querystring.parse(query, ",", ";");

console.log(parsed);
// 输出: { name: 'Alice', age: '25', hobbies: ['reading', 'coding'] }

const stringified = querystring.stringify(parsed, ",", ";");
console.log(stringified);
// 输出: name=Alice;age=25,hobbies=reading,hobbies=coding
```

#### **2. 编码和解码**
`querystring.escape` 和 `querystring.unescape` 用于编码和解码查询字符串中的特殊字符。

```javascript
const str = "Hello, World!";
const escaped = querystring.escape(str);
console.log(escaped); // 输出: Hello%2C%20World%21

const unescaped = querystring.unescape(escaped);
console.log(unescaped); // 输出: Hello, World!
```

---

### **三、实际应用场景**
1. **解析 URL 查询参数**
   - 使用 `querystring.parse` 解析 URL 查询字符串。

2. **生成查询字符串**
   - 使用 `querystring.stringify` 生成查询字符串。

3. **处理表单数据**
   - 使用 `querystring.parse` 解析表单提交的数据。

4. **编码和解码**
   - 使用 `querystring.escape` 和 `querystring.unescape` 处理特殊字符。

---

### **四、注意事项**
1. **数据类型**
   - `querystring.parse` 返回的对象中，所有值都是字符串或字符串数组。
2. **编码问题**
   - 在处理非 ASCII 字符时，确保正确编码和解码。
3. **弃用**
   - 在 Node.js 17 及以上版本中，`querystring` 模块已被弃用，推荐使用 `URLSearchParams`。

---

### **五、总结**
`querystring` 模块提供了解析和格式化 URL 查询字符串的功能，适合处理查询参数、表单数据等。通过 `querystring.parse` 和 `querystring.stringify`，开发者可以轻松地在对象和查询字符串之间转换。尽管在新版本中已被弃用，但在旧项目中仍然广泛使用。
