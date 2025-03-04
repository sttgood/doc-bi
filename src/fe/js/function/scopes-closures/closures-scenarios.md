---
title: 闭包应用场景
article: false
order: 3
---
**闭包（Closure）** 是 JavaScript 中的一个强大特性，它在许多实际场景中都有广泛的应用。以下是闭包的常见使用场景及其示例：

---

### 1. **封装私有变量**
闭包可以用于创建私有变量，避免变量被外部直接访问或修改。

**示例**：
```javascript
function createCounter() {
  let count = 0; // 私有变量

  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
}

let counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 输出 1
```

- `count` 是私有变量，只能通过 `increment` 和 `getCount` 方法访问和修改。

---

### 2. **函数柯里化（Currying）**
闭包可以用于柯里化，将一个多参数函数转换为一系列单参数函数。

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

- `add` 函数返回一个闭包，闭包记住了 `a` 的值。

---

### 3. **延迟执行**
闭包可以用于延迟执行函数，例如在事件处理或定时器中。

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

- `delayedGreeting` 函数返回一个闭包，闭包记住了 `name` 的值。

---

### 4. **模块化开发**
闭包可以用于实现模块化，将相关的变量和函数封装在一个作用域中。

**示例**：
```javascript
let module = (function() {
  let privateVar = "I'm private";

  function privateMethod() {
    console.log(privateVar);
  }

  return {
    publicMethod: function() {
      privateMethod();
    }
  };
})();

module.publicMethod(); // 输出 "I'm private"
```

- 使用立即执行函数（IIFE）创建闭包，封装私有变量和方法。

---

### 5. **回调函数**
闭包可以用于回调函数，保留函数执行时的上下文。

**示例**：
```javascript
function fetchData(url, callback) {
  setTimeout(function() {
    let data = "Data from " + url;
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log("Processing: " + data);
}

fetchData("https://example.com", processData); // 1 秒后输出 "Processing: Data from https://example.com"
```

- `fetchData` 函数中的回调函数形成了闭包，保留了 `url` 的值。

---

### 6. **事件处理**
闭包可以用于事件处理函数，保留事件触发时的上下文。

**示例**：
```javascript
function setupButtons() {
  for (var i = 1; i <= 3; i++) {
    (function(j) {
      document.getElementById("button" + j).addEventListener("click", function() {
        console.log("Button " + j + " clicked");
      });
    })(i);
  }
}

setupButtons();
```

- 使用立即执行函数（IIFE）创建闭包，保留 `i` 的值。

---

### 7. **缓存和记忆化（Memoization）**
闭包可以用于缓存函数的结果，避免重复计算。

**示例**：
```javascript
function memoize(fn) {
  let cache = {};

  return function(...args) {
    let key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    let result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function expensiveCalculation(n) {
  console.log("Calculating...");
  return n * 2;
}

let memoizedCalculation = memoize(expensiveCalculation);
console.log(memoizedCalculation(5)); // 输出 "Calculating..." 和 10
console.log(memoizedCalculation(5)); // 直接输出 10（从缓存中读取）
```

- `memoize` 函数返回一个闭包，闭包记住了 `cache` 对象。

---

### 8. **防抖（Debounce）和节流（Throttle）**
闭包可以用于实现防抖和节流，优化高频事件的性能。

**防抖示例**：
```javascript
function debounce(fn, delay) {
  let timer;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

window.addEventListener("resize", debounce(function() {
  console.log("Window resized");
}, 300));
```

- `debounce` 函数返回一个闭包，闭包记住了 `timer` 变量。

**节流示例**：
```javascript
function throttle(fn, delay) {
  let lastCall = 0;

  return function(...args) {
    let now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

window.addEventListener("scroll", throttle(function() {
  console.log("Window scrolled");
}, 300));
```

- `throttle` 函数返回一个闭包，闭包记住了 `lastCall` 变量。

---

### **总结**
闭包的使用场景非常广泛，包括但不限于：
1. 封装私有变量
2. 函数柯里化
3. 延迟执行
4. 模块化开发
5. 回调函数
6. 事件处理
7. 缓存和记忆化
8. 防抖和节流

理解闭包的原理和应用场景可以帮助你编写更灵活、更高效的 JavaScript 代码。
