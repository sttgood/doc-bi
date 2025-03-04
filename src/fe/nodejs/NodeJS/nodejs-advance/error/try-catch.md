---
title: 错误处理
article: false
order: 2
---
在 JavaScript 中，**错误处理**是确保程序在遇到异常时能够优雅地处理问题的重要机制。对于异步操作（如 `Promise` 或 `async/await`），使用 `try...catch` 是一种常见的错误处理方式。

---

### **1. 基本语法**

`try...catch` 用于捕获代码块中的异常。

```javascript
try {
    // 可能会抛出错误的代码
} catch (error) {
    // 捕获并处理错误
}
```

- `try` 块：包含可能会抛出错误的代码。
- `catch` 块：捕获 `try` 块中抛出的错误，并处理它。

---

### **2. 同步代码中的错误处理**

在同步代码中，`try...catch` 可以直接捕获错误。

```javascript
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division by zero');
        }
        return a / b;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

console.log(divide(10, 0)); // 输出: Error: Division by zero, null
```

---

### **3. 异步代码中的错误处理**

在异步代码中，`try...catch` 可以结合 `async/await` 使用，以捕获 `Promise` 的 `reject` 或抛出的错误。

#### **3.1 使用 `async/await`**

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

fetchData().then(data => console.log(data));
```

#### **3.2 使用 `Promise` 的 `catch`**

如果不使用 `async/await`，可以通过 `Promise` 的 `catch` 方法处理错误。

```javascript
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error.message));
```

---

### **4. 捕获特定类型的错误**

可以使用 `instanceof` 检查错误类型，以针对不同错误进行不同处理。

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network error');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('TypeError:', error.message);
        } else if (error instanceof Error) {
            console.error('General error:', error.message);
        } else {
            console.error('Unknown error:', error);
        }
        return null;
    }
}
```

---

### **5. `finally` 块**

`finally` 块中的代码无论是否发生错误都会执行，通常用于清理资源。

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    } finally {
        console.log('Fetch attempt completed');
    }
}
```

---

### **6. 嵌套的 `try...catch`**

可以在一个 `try...catch` 块中嵌套另一个 `try...catch`，以处理更复杂的逻辑。

```javascript
async function processData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        try {
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('JSON parsing error:', error.message);
            return null;
        }
    } catch (error) {
        console.error('Fetch error:', error.message);
        return null;
    }
}
```

---

### **7. 抛出错误**

可以使用 `throw` 关键字手动抛出错误。

```javascript
async function validateInput(input) {
    try {
        if (!input) {
            throw new Error('Input is required');
        }
        return input;
    } catch (error) {
        console.error('Validation error:', error.message);
        return null;
    }
}

validateInput('').then(result => console.log(result)); // 输出: Validation error: Input is required, null
```

---

### **8. 注意事项**

1. **`catch` 块必须处理错误**：
   - 如果 `catch` 块中没有处理错误，可能会导致未捕获的异常。

2. **避免过度使用 `try...catch`**：
   - 只在可能抛出错误的地方使用 `try...catch`，避免滥用。

3. **异步错误需要异步处理**：
   - 在异步函数中，确保使用 `await` 或 `catch` 处理 `Promise` 的错误。

4. **`finally` 块中的返回值**：
   - 如果 `finally` 块中有 `return`，它会覆盖 `try` 或 `catch` 中的返回值。

   ```javascript
   function example() {
       try {
           return 'Try';
       } catch (error) {
           return 'Catch';
       } finally {
           return 'Finally'; // 最终返回值
       }
   }
   console.log(example()); // 输出: Finally
   ```

---

### **9. 总结**

- `try...catch` 是处理同步和异步错误的强大工具。
- 结合 `async/await`，可以更优雅地处理异步操作中的错误。
- 使用 `finally` 块可以确保资源清理。
- 通过检查错误类型，可以实现更精细的错误处理。

掌握 `try...catch` 的使用，可以显著提高代码的健壮性和可维护性。
