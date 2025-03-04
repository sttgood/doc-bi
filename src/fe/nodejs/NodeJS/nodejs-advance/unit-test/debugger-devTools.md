---
title: 使用 debugger 和 Chrome DevTools
article: false
order: 2
---
`debugger` 语句和 **Chrome DevTools** 是 JavaScript 开发中强大的调试工具组合。它们可以帮助你逐步执行代码、检查变量、设置断点以及分析代码的执行流程。以下是详细的使用方法和技巧：

---

### 1. **使用 `debugger` 语句**
`debugger` 语句会暂停代码的执行，并自动打开浏览器的开发者工具（如果未打开），进入调试模式。

#### 示例：
```javascript
function foo() {
  const x = 10;
  const y = 20;
  debugger; // 代码执行到这里会暂停
  console.log(x + y);
}

foo();
```

#### 使用步骤：
1. 在代码中插入 `debugger` 语句。
2. 打开 Chrome 浏览器，按 `F12` 或 `Ctrl+Shift+I` 打开开发者工具。
3. 运行代码，当执行到 `debugger` 语句时，代码会暂停，开发者工具会自动跳转到 **Sources** 面板。

---

### 2. **Chrome DevTools 的调试功能**

#### 2.1 **Sources 面板**
- **文件导航**：在左侧文件树中查看和选择 JavaScript 文件。
- **代码编辑器**：查看和编辑代码。
- **断点管理**：在代码行号左侧点击设置或移除断点。

#### 2.2 **调试工具栏**
在代码暂停时，可以使用以下按钮控制代码的执行：
- **继续执行（F8）**：继续执行代码，直到下一个断点。
- **单步跳过（F10）**：执行当前行，但不进入函数内部。
- **单步进入（F11）**：执行当前行，并进入函数内部。
- **单步退出（Shift+F11）**：跳出当前函数。
- **禁用断点**：临时禁用所有断点。

#### 2.3 **Scope 面板**
查看当前作用域中的变量和值，包括：
- **Local**：当前函数的局部变量。
- **Closure**：闭包中的变量。
- **Global**：全局变量。

#### 2.4 **Call Stack 面板**
查看函数调用栈，了解代码的执行路径。

#### 2.5 **Watch 面板**
添加表达式，实时监控其值的变化。

#### 2.6 **Breakpoints 面板**
管理所有断点，包括条件断点。

---

### 3. **设置断点**
除了使用 `debugger` 语句，还可以直接在 DevTools 中设置断点。

#### 3.1 普通断点
1. 打开 **Sources** 面板。
2. 找到目标文件，点击行号左侧设置断点。

#### 3.2 条件断点
1. 右键点击行号，选择 **Add conditional breakpoint**。
2. 输入条件表达式，例如 `x > 10`。

#### 3.3 DOM 断点
1. 打开 **Elements** 面板。
2. 右键点击 DOM 元素，选择 **Break on** -> **Subtree modifications**。

#### 3.4 事件监听器断点
1. 打开 **Sources** 面板。
2. 在右侧 **Event Listener Breakpoints** 中勾选目标事件，例如 `click`。

---

### 4. **调试示例**

#### 示例代码：
```javascript
function calculateSum(a, b) {
  const sum = a + b;
  return sum;
}

function main() {
  const x = 10;
  const y = 20;
  const result = calculateSum(x, y);
  console.log("Result:", result);
}

main();
```

#### 调试步骤：
1. 打开 Chrome 开发者工具，进入 **Sources** 面板。
2. 在 `const sum = a + b;` 这一行设置断点。
3. 运行代码，代码会在断点处暂停。
4. 使用 **Scope** 面板查看 `a` 和 `b` 的值。
5. 使用 **Call Stack** 面板查看函数调用栈。
6. 使用 **Watch** 面板添加表达式 `a + b`，实时监控其值。
7. 点击 **单步进入（F11）**，进入 `calculateSum` 函数内部。
8. 点击 **继续执行（F8）**，代码会继续执行到结束。

---

### 5. **调试技巧**

#### 5.1 调试异步代码
使用断点或 `debugger` 语句调试 `setTimeout`、`Promise` 等异步操作。

```javascript
setTimeout(() => {
  debugger;
  console.log("Timeout");
}, 1000);
```

#### 5.2 调试循环
在循环中设置断点，检查每次迭代的变量值。

```javascript
for (let i = 0; i < 5; i++) {
  debugger;
  console.log(i);
}
```

#### 5.3 调试事件处理程序
在事件处理程序中设置断点，检查事件对象和变量值。

```javascript
document.getElementById("btn").addEventListener("click", (event) => {
  debugger;
  console.log("Button clicked:", event.target);
});
```

#### 5.4 调试网络请求
使用 **Network** 面板查看请求和响应，结合断点调试相关代码。

---

### 6. **总结**
- `debugger` 语句和 Chrome DevTools 是调试 JavaScript 代码的利器。
- 通过设置断点、检查变量、查看调用栈等功能，可以快速定位和修复代码中的错误。
- 掌握这些工具和技巧，可以显著提高开发效率和代码质量。
