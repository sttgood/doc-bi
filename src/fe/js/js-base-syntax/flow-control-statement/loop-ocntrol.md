---
title: 循环控制
article: false
order: 3
---
在JavaScript中，循环控制语句用于控制循环的执行流程，主要包括以下几种：

---

### **1. `break` 语句**
- **作用**：立即终止当前循环，跳出循环体。
- **适用场景**：在满足某个条件时提前结束循环。
- **示例**：
  ```javascript
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // 当 i 等于 5 时，终止循环
    }
    console.log(i); // 输出 0, 1, 2, 3, 4
  }
  ```

---

### **2. `continue` 语句**
- **作用**：跳过当前循环的剩余代码，直接进入下一次循环。
- **适用场景**：在满足某个条件时跳过当前迭代。
- **示例**：
  ```javascript
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue; // 跳过偶数
    }
    console.log(i); // 输出 1, 3, 5, 7, 9
  }
  ```

---

### **3. `label` 语句**
- **作用**：为循环或代码块添加标签，通常与 `break` 或 `continue` 配合使用，用于控制多层嵌套循环。[label详细](./reference/label.md)
- **适用场景**：在多层嵌套循环中，精确控制跳出或跳过的循环层级。
- **示例**：
  
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
  当 i === 1 且 j === 1 时，break outerLoop 会直接跳出外层循环，不再执行后续的循环。
  ```

---

### **4. `return` 语句**
- **作用**：终止函数的执行，并返回一个值（如果有）。
- **适用场景**：在循环中满足某个条件时，直接结束函数。
- **示例**：
  ```javascript
  function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // 找到目标值，返回索引并结束函数
      }
    }
    return -1; // 未找到目标值
  }
  console.log(findIndex([1, 2, 3, 4], 3)); // 输出 2
  ```

---

### **5. `throw` 语句**
- **作用**：抛出一个异常，中断当前代码的执行。
- **适用场景**：在循环中遇到错误时，主动抛出异常。
- **示例**：
  ```javascript
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      throw new Error("i 不能等于 3"); // 抛出异常
    }
    console.log(i); // 输出 0, 1, 2
  }
  ```

---

### **6. `for...of` 与 `for...in` 中的控制**
- **`for...of`**：用于遍历可迭代对象（如数组、字符串），支持 `break` 和 `continue`。
  ```javascript
  const arr = [1, 2, 3, 4];
  for (const num of arr) {
    if (num === 3) {
      break; // 终止循环
    }
    console.log(num); // 输出 1, 2
  }
  ```

- **`for...in`**：用于遍历对象的可枚举属性，支持 `break` 和 `continue`。
  ```javascript
  const obj = { a: 1, b: 2, c: 3 };
  for (const key in obj) {
    if (key === "b") {
      continue; // 跳过属性 b
    }
    console.log(key, obj[key]); // 输出 a 1, c 3
  }
  ```

---

### **总结**
| 语句       | 作用                              | 适用场景               |
| ---------- | --------------------------------- | ---------------------- |
| `break`    | 终止循环                          | 满足条件时提前结束循环 |
| `continue` | 跳过当前迭代，进入下一次循环      | 满足条件时跳过当前迭代 |
| `label`    | 标记循环，配合 `break`/`continue` | 控制多层嵌套循环       |
| `return`   | 终止函数并返回值                  | 在循环中结束函数       |
| `throw`    | 抛出异常，中断代码执行            | 在循环中处理错误       |
