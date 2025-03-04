---
title: 柯里化与函数组合
article: false
order: 3
---

**柯里化（Currying）** 和 **函数组合（Function Composition）** 是函数式编程中的两个重要概念，它们可以帮助我们编写更简洁、模块化和可重用的代码。以下是详细说明和示例：

---

### **1. 柯里化（Currying）**
柯里化是一种将多参数函数转换为一系列单参数函数的技术。通过柯里化，可以将一个函数分解为多个步骤，每个步骤接受一个参数并返回一个新函数，直到所有参数都被传入。

#### **1.1 基本概念**
- **定义**：将一个接受多个参数的函数转换为一系列只接受一个参数的函数。
- **特点**：
  - 延迟执行：直到所有参数都被传入，函数才会执行。
  - 部分应用：可以固定部分参数，生成新的函数。

#### **1.2 示例**
- **普通函数**：
  ```javascript
  function add(a, b, c) {
    return a + b + c;
  }
  console.log(add(1, 2, 3)); // 6
  ```

- **柯里化函数**：
  ```javascript
  function addCurried(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  console.log(addCurried(1)(2)(3)); // 6
  ```

- **部分应用**：
  ```javascript
  const add1 = addCurried(1); // 固定第一个参数
  const add1And2 = add1(2); // 固定第二个参数
  console.log(add1And2(3)); // 6
  ```

#### **1.3 自动柯里化工具**
可以使用工具函数将普通函数自动柯里化：
```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function(...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
```

---

### **2. 函数组合（Function Composition）**
函数组合是将多个函数组合成一个新函数的技术。新函数的输出是前一个函数的输入，依次传递。

#### **2.1 基本概念**
- **定义**：将多个函数组合成一个新函数，新函数的输出是前一个函数的输入。
- **特点**：
  - 代码简洁：将多个小函数组合成一个大函数。
  - 可重用性：每个小函数可以独立使用和测试。

#### **2.2 示例**
- **普通函数**：
  ```javascript
  function add1(x) {
    return x + 1;
  }
  function multiply2(x) {
    return x * 2;
  }
  function square(x) {
    return x * x;
  }
  
  const result = square(multiply2(add1(2))); // ((2 + 1) * 2) ^ 2 = 36
  console.log(result); // 36
  ```

- **函数组合**：
  ```javascript
  function compose(...fns) {
    return function(x) {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    };
  }
  
  const composedFunction = compose(square, multiply2, add1);
  console.log(composedFunction(2)); // 36
  ```

#### **2.3 管道（Pipe）**
管道是函数组合的另一种形式，从左到右依次执行函数：
```javascript
function pipe(...fns) {
  return function(x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

const pipedFunction = pipe(add1, multiply2, square);
console.log(pipedFunction(2)); // 36
```

---

### **3. 柯里化与函数组合的结合**
柯里化和函数组合可以结合使用，实现更灵活的函数设计。

#### **3.1 示例**
```javascript
function add(a) {
  return function(b) {
    return a + b;
  };
}

function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const add1 = add(1); // 固定第一个参数
const multiply2 = multiply(2); // 固定第一个参数

const composedFunction = compose(multiply2, add1);
console.log(composedFunction(3)); // (3 + 1) * 2 = 8
```

---

### **4. 总结**
| 特性         | 柯里化（Currying）                    | 函数组合（Function Composition）     |
| ------------ | ------------------------------------- | ------------------------------------ |
| **定义**     | 将多参数函数转换为一系列单参数函数    | 将多个函数组合成一个新函数           |
| **特点**     | 延迟执行、部分应用                    | 代码简洁、可重用性                   |
| **示例**     | `const addCurried = a => b => a + b;` | `const composed = compose(f, g, h);` |
| **工具函数** | `curry`                               | `compose`、`pipe`                    |
| **结合使用** | 柯里化后的函数可以用于函数组合        | 函数组合可以组合柯里化后的函数       |

---

### **5. 常见问题**
1. **柯里化的性能**：
   - 柯里化会增加函数调用的层级，可能影响性能，需根据场景权衡使用。
2. **函数组合的顺序**：
   - `compose` 是从右到左执行，`pipe` 是从左到右执行，需注意顺序。

---

通过柯里化和函数组合，可以编写出更模块化、可重用和易于测试的代码，是函数式编程的重要实践。
