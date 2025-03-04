---
title: 闭包原理与应用场景
article: false
order: 3
---
**闭包（Closure）** 是 JavaScript 中的一个重要概念，指的是函数能够访问其词法作用域（Lexical Scope）中的变量，即使函数在其词法作用域之外执行。闭包的核心是函数与其词法环境的结合。

---

### **闭包的定义**
闭包是指一个函数可以记住并访问其词法作用域中的变量，即使这个函数在其词法作用域之外执行。

---

### **闭包的形成条件**
1. **函数嵌套**：一个函数内部定义了另一个函数。
2. **内部函数引用外部函数的变量**：内部函数使用了外部函数的变量。
3. **内部函数在外部函数之外执行**：内部函数被返回或在外部函数之外调用。

---

### **闭包的示例**

#### 示例 1：基本闭包
```javascript
function outer() {
  let x = 10; // 外部函数的变量

  function inner() {
    console.log(x); // 内部函数访问外部函数的变量
  }

  return inner; // 返回内部函数
}

let closureFunc = outer(); // 调用外部函数，返回内部函数
closureFunc(); // 输出 10
```

- `inner` 函数形成了闭包，因为它记住了 `outer` 函数中的变量 `x`。
- 即使 `outer` 函数已经执行完毕，`inner` 函数仍然可以访问 `x`。

---

#### 示例 2：闭包的实际应用（计数器）
```javascript
function createCounter() {
  let count = 0; // 外部函数的变量

  return function() {
    count++; // 内部函数修改外部函数的变量
    return count;
  };
}

let counter = createCounter();
console.log(counter()); // 输出 1
console.log(counter()); // 输出 2
console.log(counter()); // 输出 3
```

- `createCounter` 函数返回了一个闭包，闭包记住了 `count` 变量。
- 每次调用 `counter` 函数时，`count` 的值都会增加。

---

#### 示例 3：闭包与循环
```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i); // 输出 4, 4, 4
  }, 1000);
}
```

- 由于 `var` 没有块级作用域，`i` 的值在循环结束后变为 `4`，所有 `setTimeout` 回调函数都打印 `4`。

**使用闭包解决**：
```javascript
for (var i = 1; i <= 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 输出 1, 2, 3
    }, 1000);
  })(i);
}
```

- 通过立即执行函数（IIFE）创建闭包，将 `i` 的值传递给 `j`，每个 `setTimeout` 回调函数都记住了自己的 `j`。

---

### **闭包的作用**
1. **封装私有变量**：
   - 闭包可以创建私有变量，避免全局污染。

   **示例**：
   ```javascript
   function createPerson(name) {
     let age = 0; // 私有变量
   
     return {
       getName: function() {
         return name;
       },
       getAge: function() {
         return age;
       },
       celebrateBirthday: function() {
         age++;
       }
     };
   }
   
   let person = createPerson("Alice");
   console.log(person.getName()); // 输出 "Alice"
   console.log(person.getAge());  // 输出 0
   person.celebrateBirthday();
   console.log(person.getAge());  // 输出 1
   ```

2. **实现函数柯里化**：
   - 闭包可以用于柯里化（Currying），将一个多参数函数转换为一系列单参数函数。

   **示例**：
   ```javascript
   function add(a) {
     return function(b) {
       return a + b;
     };
   }
   
   let add5 = add(5);
   console.log(add5(3)); // 输出 8
   ```

3. **延迟执行**：
   - 闭包可以用于延迟执行函数，例如在事件处理或定时器中。

   **示例**：
   ```javascript
   function delayedGreeting(name) {
     return function() {
       console.log("Hello, " + name);
     };
   }
   
   let greetAlice = delayedGreeting("Alice");
   setTimeout(greetAlice, 1000); // 1 秒后输出 "Hello, Alice"
   ```

---

### **闭包的注意事项**
1. **内存泄漏**：
   - 闭包会保留其词法作用域中的变量，可能导致内存泄漏。如果不再需要闭包，应手动释放相关引用。

2. **性能问题**：
   - 过度使用闭包可能导致性能问题，因为闭包会占用额外的内存。

3. **理解作用域**：
   - 理解闭包需要熟悉 JavaScript 的作用域和词法环境。

---

### **总结**
- **闭包** 是函数与其词法环境的结合，允许函数访问其词法作用域中的变量。
- 闭包的形成条件：函数嵌套、内部函数引用外部函数的变量、内部函数在外部函数之外执行。
- 闭包的应用场景：封装私有变量、函数柯里化、延迟执行等。
- 使用闭包时需要注意内存泄漏和性能问题。

理解闭包是掌握 JavaScript 高级特性的关键，它可以帮助你编写更灵活、更强大的代码。
