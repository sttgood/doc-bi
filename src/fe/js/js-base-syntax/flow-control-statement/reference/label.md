---
title: label
article: false
---
`label` 是 JavaScript 中用于标记语句（如循环或代码块）的语法，通常与 `break` 或 `continue` 配合使用，用于在多层嵌套结构中精确控制循环的流程。`label` 的主要作用是给代码块或循环命名，以便在需要时明确指定跳出的目标。

---

### **1. 基本语法**
```javascript
labelName: statement
```
- `labelName`：标签名称，可以是任意合法的标识符。
- `statement`：被标记的语句，通常是循环（如 `for`、`while`）或代码块。

---

### **2. 使用场景**
`label` 主要用于以下场景：
1. **多层嵌套循环中精确控制流程**：
   - 在多层嵌套循环中，`break` 或 `continue` 默认只会影响当前循环，而 `label` 可以指定跳出或跳过的目标循环。
2. **标记代码块**：
   - 可以标记任意代码块，配合 `break` 使用。

---

### **3. 示例**

#### **示例 1：`break` 与 `label` 配合**
```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // 跳出外层循环
    }
    console.log(`i=${i}, j=${j}`);
  }
}
// 输出：
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
```
- 当 `i === 1` 且 `j === 1` 时，`break outerLoop` 会直接跳出外层循环，不再执行后续的循环。

---

#### **示例 2：`continue` 与 `label` 配合**
```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue outerLoop; // 跳过外层循环的当前迭代
    }
    console.log(`i=${i}, j=${j}`);
  }
}
// 输出：
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2
```
- 当 `i === 1` 且 `j === 1` 时，`continue outerLoop` 会跳过外层循环的当前迭代，直接进入 `i = 2` 的循环。

---

#### **示例 3：标记代码块**
```javascript
blockLabel: {
  console.log("Start");
  if (true) {
    break blockLabel; // 跳出代码块
  }
  console.log("End"); // 不会执行
}
// 输出：Start
```
- `break blockLabel` 会直接跳出标记的代码块，后续代码不会执行。

---

### **4. 注意事项**
1. **标签名称的作用域**：
   - 标签名称的作用域是当前函数或全局作用域，不能跨函数使用。
2. **避免滥用**：
   - `label` 和 `break`/`continue` 的配合使用可能会降低代码的可读性，应尽量避免在简单逻辑中使用。
3. **不能用于函数**：
   - `label` 不能用于标记函数，只能标记语句或代码块。

---

### **5. 总结**
| 特性            | 说明                                                         |
| --------------- | ------------------------------------------------------------ |
| 语法            | `labelName: statement`                                       |
| 配合 `break`    | 跳出指定标签标记的循环或代码块                               |
| 配合 `continue` | 跳过指定标签标记的循环的当前迭代                             |
| 适用场景        | 多层嵌套循环、标记代码块                                     |
| 注意事项        | 避免滥用，标签名称的作用域是当前函数或全局作用域，不能跨函数使用 |

`label` 是一个强大的工具，但在实际开发中应谨慎使用，确保代码的可读性和可维护性。
