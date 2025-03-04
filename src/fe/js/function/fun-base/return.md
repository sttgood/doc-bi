---
title: 返回值与return语句
article: false
order: 3
---

在 JavaScript 中，**返回值** 是函数执行后返回给调用者的结果，而 **`return` 语句** 用于指定函数的返回值。理解返回值和 `return` 语句的用法是编写函数的关键。

---

### **返回值**
- 返回值是函数执行后传递给调用者的数据。
- 如果函数没有显式使用 `return` 语句，则默认返回 `undefined`。

**示例**：
```javascript
function add(a, b) {
  return a + b; // 返回 a + b 的结果
}

let result = add(2, 3); // 调用函数并接收返回值
console.log(result); // 输出 5
```

---

### **`return` 语句**
- `return` 语句用于结束函数的执行，并返回一个值。
- 如果 `return` 语句没有指定返回值，则返回 `undefined`。
- `return` 语句之后的代码不会执行。

**语法**：
```javascript
return [表达式];
```

**示例**：
```javascript
function greet(name) {
  if (!name) {
    return; // 如果没有传入 name，返回 undefined
  }
  return "Hello, " + name; // 返回拼接的字符串
}

console.log(greet("Alice")); // 输出 "Hello, Alice"
console.log(greet());        // 输出 undefined
```

---

### **`return` 语句的特性**

1. **立即结束函数**：
   - `return` 语句会立即终止函数的执行，之后的代码不会运行。

   **示例**：
   ```javascript
   function example() {
     console.log("Before return");
     return; // 函数在此结束
     console.log("After return"); // 不会执行
   }
   example(); // 输出 "Before return"
   ```

2. **返回多个值**：
   - 如果需要返回多个值，可以使用数组或对象。

   **示例**：
   ```javascript
   function getDetails() {
     return { name: "Alice", age: 25 }; // 返回一个对象
   }
   
   let details = getDetails();
   console.log(details.name); // 输出 "Alice"
   console.log(details.age);  // 输出 25
   ```

3. **默认返回值**：
   - 如果函数没有 `return` 语句，或者 `return` 语句没有指定返回值，则函数返回 `undefined`。

   **示例**：
   ```javascript
   function noReturn() {
     // 没有 return 语句
   }
   
   console.log(noReturn()); // 输出 undefined
   ```

---

### **返回值的应用场景**

1. **计算并返回结果**：
   ```javascript
   function multiply(a, b) {
     return a * b;
   }
   
   let product = multiply(3, 4);
   console.log(product); // 输出 12
   ```

2. **条件返回值**：
   ```javascript
   function isEven(num) {
     if (num % 2 === 0) {
       return true;
     } else {
       return false;
     }
   }
   
   console.log(isEven(4)); // 输出 true
   console.log(isEven(5)); // 输出 false
   ```

3. **提前返回**：
   ```javascript
   function checkAge(age) {
     if (age < 18) {
       return "未成年";
     }
     return "成年";
   }
   
   console.log(checkAge(16)); // 输出 "未成年"
   console.log(checkAge(20)); // 输出 "成年"
   ```

4. **返回函数**：
   ```javascript
   function createGreeter(greeting) {
     return function(name) {
       return greeting + ", " + name;
     };
   }
   
   let greetHello = createGreeter("Hello");
   console.log(greetHello("Alice")); // 输出 "Hello, Alice"
   ```

---

### **注意事项**

1. **`return` 语句的位置**：
   - `return` 语句之后的代码不会执行，因此要确保逻辑正确。

2. **默认返回值**：
   - 如果函数没有返回值，调用者会收到 `undefined`。

3. **返回值的类型**：
   - 返回值可以是任意类型（如数字、字符串、对象、函数等）。

4. **箭头函数的返回值**：
   - 如果箭头函数只有一行代码，可以省略 `return` 语句，直接返回表达式的结果。

   **示例**：
   ```javascript
   const add = (a, b) => a + b; // 隐式返回 a + b
   console.log(add(2, 3)); // 输出 5
   ```

---

### **总结**
- **返回值** 是函数执行后返回给调用者的结果。
- **`return` 语句** 用于指定返回值并结束函数的执行。
- 如果函数没有 `return` 语句，则默认返回 `undefined`。
- 理解返回值和 `return` 语句的用法是编写函数的基础，可以帮助你更好地控制函数的逻辑和输出。
