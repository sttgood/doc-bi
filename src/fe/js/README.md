---
title: JavaScript
article: false
index: false
---

以下是一份系统学习JavaScript的大纲，涵盖从基础到进阶的核心知识点，适合分阶段学习：

---

### **第一阶段：JavaScript基础语法**
1. **JavaScript简介**
   - JavaScript的历史与作用（浏览器端 vs 服务器端）
   - 开发环境搭建（浏览器控制台、Node.js、VS Code）
   - 第一个JavaScript程序（HTML嵌入方式、外部脚本）

2. **变量与数据类型**
   - 变量声明：`var`、`let`、`const`
   - 基本数据类型：`number`、`string`、`boolean`、`null`、`undefined`、`symbol`
   - 引用数据类型：`object`（对象、数组、函数）
   - 类型检测与转换：`typeof`、`instanceof`、显式/隐式转换

3. **运算符与表达式**
   - 算术运算符、比较运算符、逻辑运算符
   - 赋值运算符、三元运算符
   - 运算符优先级

4. **流程控制**
   - 条件语句：`if-else`、`switch-case`
   - 循环语句：`for`、`while`、`do-while`
   - 循环控制：`break`、`continue`、`label`

---

### **第二阶段：函数与作用域**
1. **函数基础**
   - 函数声明与表达式
   - 参数传递（默认参数、剩余参数）
   - 返回值与`return`语句

2. **作用域与闭包**
   - 全局作用域、函数作用域、块级作用域（`let`/`const`）
   - 变量提升（Hoisting）与暂时性死区（TDZ）
   - 闭包原理与应用场景
   - 立即执行函数（IIFE）

3. **高阶函数**
   - 函数作为参数（回调函数）
   - 函数作为返回值
   - 柯里化（Currying）与函数组合

---

### **第三阶段：对象与数组**
1. **对象（Object）**
   - 对象字面量语法
   - 属性访问（点操作符 vs 方括号）
   - 方法定义与`this`关键字
   - 对象遍历：`for...in`、`Object.keys()`

2. **数组（Array）**
   - 数组的创建与操作（增删改查）
   - 数组方法：`push`/`pop`、`shift`/`unshift`、`slice`/`splice`
   - 高阶数组方法：`map`、`filter`、`reduce`、`forEach`
   - 数组排序与去重

3. **内置对象**
   - `Math`、`Date`、`JSON`
   - `String`与正则表达式（RegExp）
   - `Set`与`Map`（ES6+）

---

### **第四阶段：DOM与事件**
1. **DOM操作**
   - DOM树结构与节点类型
   - 元素选择：`querySelector`、`getElementById`等
   - 元素属性与内容操作（`innerHTML`、`textContent`）
   - 动态创建、删除、修改节点

2. **事件处理**
   - 事件流（冒泡与捕获）
   - 事件监听：`addEventListener`
   - 事件对象（`event`）与事件委托
   - 常见事件类型：点击、键盘、表单、鼠标事件

---

### **第五阶段：异步编程**
1. **异步基础**
   - 同步 vs 异步
   - 回调函数（Callback）与回调地狱
   - `setTimeout`、`setInterval`

2. **Promise**
   - Promise状态（pending、fulfilled、rejected）
   - `then`、`catch`、`finally`
   - `Promise.all`、`Promise.race`

3. **Async/Await**
   - 异步函数声明与使用
   - 错误处理（`try...catch`）

---

### **第六阶段：ES6+新特性**
1. **语法增强**
   - 箭头函数（Arrow Function）
   - 模板字符串（Template Literals）
   - 解构赋值（数组、对象）
   - 扩展运算符（`...`）

2. **模块化**
   - `import`与`export`语法
   - 模块加载机制（ES Modules vs CommonJS）

3. **其他特性**
   - 类（`class`）与继承（`extends`）
   - 生成器（Generator）与迭代器（Iterator）
   - Proxy与Reflect

---

### **第七阶段：面向对象与原型链**
1. **原型与继承**
   - 构造函数与`new`关键字
   - 原型链与`prototype`属性
   - `Object.create`与继承实现
   - ES6类的底层原理

2. **设计模式**
   - 工厂模式、构造函数模式
   - 单例模式、观察者模式

---

### **第八阶段：进阶主题**
1. **错误处理与调试**
   - `try...catch`与错误对象
   - 调试工具（Chrome DevTools）

2. **客户端存储**
   - `Cookie`、`localStorage`、`sessionStorage`
   - IndexedDB基础

3. **网络请求**
   - `XMLHttpRequest`（XHR）
   - `Fetch API`与`Axios`
   - WebSocket基础

4. **模块化与工程化**
   - Webpack基础配置
   - Babel转译与Polyfill

---

### **第九阶段：Node.js基础**
1. **Node.js入门**
   - 模块系统（CommonJS）
   - 文件操作（`fs`模块）
   - HTTP服务器（`http`模块）

---

### **第十阶段：实战与工具**
1. **测试与调试**
   - 单元测试（Jest/Mocha）
   - 性能优化与内存泄漏排查

2. **项目实战**
   - Todo List应用（综合DOM与状态管理）
   - 天气查询应用（API调用）
   - 简单SPA（路由与组件化）
   - 小游戏（如贪吃蛇、井字棋）

---

### **学习资源推荐**
- **书籍**：《JavaScript高级程序设计》《你不知道的JavaScript》《ES6标准入门》
- **在线课程**：MDN Web Docs、freeCodeCamp、Codecademy
- **工具链**：VS Code、Git、Postman、Chrome DevTools
- **社区**：Stack Overflow、GitHub、掘金、知乎

---

通过这个大纲，你可以逐步掌握JavaScript的核心概念，最终能够独立开发完整的Web应用。建议每个阶段配合实践练习（如LeetCode、Codewars）和项目实战巩固知识。
