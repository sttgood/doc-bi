---
title: 模板字符串（Template Literals）
article: false
order: 2
---
模板字符串（Template Literals）是 ES6 引入的一种新的字符串语法，使用反引号（``）包裹字符串内容。它支持多行字符串、嵌入表达式和标签模板等功能，极大地提高了字符串处理的灵活性和可读性。以下是关于模板字符串的详细说明和示例。

---

### **一、基本用法**
#### **1. 多行字符串**
模板字符串可以直接换行，而不需要使用 `\n` 或字符串拼接。

```javascript
const message = `Hello,
World!`;

console.log(message);
// 输出:
// Hello,
// World!
```

#### **2. 嵌入表达式**
使用 `${}` 在字符串中嵌入变量或表达式。

```javascript
const name = "Alice";
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting); // 输出: Hello, my name is Alice and I am 25 years old.
```

#### **3. 表达式计算**
`${}` 中可以放置任意有效的 JavaScript 表达式。

```javascript
const a = 10;
const b = 20;
const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result); // 输出: The sum of 10 and 20 is 30.
```

---

### **二、标签模板**
标签模板是一种高级用法，允许通过函数自定义模板字符串的处理方式。

#### **1. 基本语法**
在模板字符串前添加一个函数名，该函数会接收模板字符串的各个部分和嵌入的表达式。

```javascript
function tag(strings, ...values) {
  console.log(strings); // 输出: ["Hello, ", "!", ""]
  console.log(values);  // 输出: ["Alice"]
  return "Processed string";
}

const name = "Alice";
const result = tag`Hello, ${name}!`;

console.log(result); // 输出: Processed string
```

#### **2. 实际应用**
标签模板可以用于国际化、安全过滤等场景。

```javascript
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<mark>${values[i]}</mark>` : "");
  }, "");
}

const name = "Alice";
const age = 25;
const message = highlight`Hello, my name is ${name} and I am ${age} years old.`;

console.log(message);
// 输出: Hello, my name is <mark>Alice</mark> and I am <mark>25</mark> years old.
```

---

### **三、常见应用场景**
#### **1. 动态生成 HTML**
模板字符串非常适合用于动态生成 HTML 内容。

```javascript
const user = {
  name: "Alice",
  age: 25,
};

const html = `
  <div class="user">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
  </div>
`;

console.log(html);
// 输出:
// <div class="user">
//   <h2>Alice</h2>
//   <p>Age: 25</p>
// </div>
```

#### **2. 多行文本**
模板字符串可以轻松处理多行文本，例如 SQL 查询、配置文件等。

```javascript
const query = `
  SELECT *
  FROM users
  WHERE age > 20
`;

console.log(query);
// 输出:
// SELECT *
// FROM users
// WHERE age > 20
```

#### **3. 国际化**
通过标签模板实现简单的国际化功能。

```javascript
function i18n(strings, ...values) {
  const translations = {
    "Hello": "Hola",
    "world": "mundo",
  };
  return strings.reduce((result, str, i) => {
    return result + (translations[str.trim()] || str) + (values[i] || "");
  }, "");
}

const name = "Alice";
const message = i18n`Hello, ${name}!`;

console.log(message); // 输出: Hola, Alice!
```

---

### **四、注意事项**
1. **反引号转义**：如果需要在模板字符串中使用反引号，可以使用 `\` 转义。
   ```javascript
   const str = `This is a backtick: \``;
   console.log(str); // 输出: This is a backtick: `
   ```
2. **性能问题**：在频繁拼接字符串的场景中，模板字符串的性能可能不如传统的字符串拼接。

---

### **五、总结**
- 模板字符串使用反引号（``）包裹，支持多行字符串和嵌入表达式。
- 标签模板允许通过函数自定义模板字符串的处理方式。
- 适用于动态生成 HTML、多行文本、国际化等场景。
- 注意反引号的转义和性能问题。

模板字符串是现代 JavaScript 开发中处理字符串的重要工具，掌握它可以显著提高代码的可读性和灵活性。
