---
title: assert
article: false
order: 14
---

**Node.js 的 `assert` 模块** 是用于编写单元测试和验证代码逻辑的核心模块。它提供了一组断言方法，用于检查代码是否满足预期条件。如果断言失败，会抛出 `AssertionError` 异常。

---

### **1. 引入 `assert` 模块**
```javascript
const assert = require('assert');
```

---

### **2. `assert` 模块的常用方法**

#### **2.1 `assert(value[, message])`**
检查 `value` 是否为真值。如果为假值，抛出 `AssertionError`。

```javascript
assert(true, 'This will not throw');
assert(false, 'This will throw'); // 抛出 AssertionError
```

#### **2.2 `assert.ok(value[, message])`**
与 `assert(value[, message])` 相同，检查 `value` 是否为真值。

```javascript
assert.ok(true, 'This will not throw');
assert.ok(false, 'This will throw'); // 抛出 AssertionError
```

#### **2.3 `assert.equal(actual, expected[, message])`**
检查 `actual` 是否等于 `expected`（使用 `==` 比较）。

```javascript
assert.equal(1, 1, 'This will not throw');
assert.equal(1, '1', 'This will not throw');
assert.equal(1, 2, 'This will throw'); // 抛出 AssertionError
```

#### **2.4 `assert.notEqual(actual, expected[, message])`**
检查 `actual` 是否不等于 `expected`（使用 `!=` 比较）。

```javascript
assert.notEqual(1, 2, 'This will not throw');
assert.notEqual(1, '1', 'This will throw'); // 抛出 AssertionError
```

#### **2.5 `assert.strictEqual(actual, expected[, message])`**
检查 `actual` 是否严格等于 `expected`（使用 `===` 比较）。

```javascript
assert.strictEqual(1, 1, 'This will not throw');
assert.strictEqual(1, '1', 'This will throw'); // 抛出 AssertionError
```

#### **2.6 `assert.notStrictEqual(actual, expected[, message])`**
检查 `actual` 是否严格不等于 `expected`（使用 `!==` 比较）。

```javascript
assert.notStrictEqual(1, '1', 'This will not throw');
assert.notStrictEqual(1, 1, 'This will throw'); // 抛出 AssertionError
```

#### **2.7 `assert.deepEqual(actual, expected[, message])`**
检查 `actual` 和 `expected` 是否深度相等（递归比较属性值）。

```javascript
assert.deepEqual({ a: 1 }, { a: 1 }, 'This will not throw');
assert.deepEqual({ a: 1 }, { a: '1' }, 'This will not throw');
assert.deepEqual({ a: 1 }, { a: 2 }, 'This will throw'); // 抛出 AssertionError
```

#### **2.8 `assert.notDeepEqual(actual, expected[, message])`**
检查 `actual` 和 `expected` 是否深度不相等。

```javascript
assert.notDeepEqual({ a: 1 }, { a: 2 }, 'This will not throw');
assert.notDeepEqual({ a: 1 }, { a: '1' }, 'This will throw'); // 抛出 AssertionError
```

#### **2.9 `assert.deepStrictEqual(actual, expected[, message])`**
检查 `actual` 和 `expected` 是否深度严格相等（递归比较属性值和类型）。

```javascript
assert.deepStrictEqual({ a: 1 }, { a: 1 }, 'This will not throw');
assert.deepStrictEqual({ a: 1 }, { a: '1' }, 'This will throw'); // 抛出 AssertionError
```

#### **2.10 `assert.notDeepStrictEqual(actual, expected[, message])`**
检查 `actual` 和 `expected` 是否深度严格不相等。

```javascript
assert.notDeepStrictEqual({ a: 1 }, { a: '1' }, 'This will not throw');
assert.notDeepStrictEqual({ a: 1 }, { a: 1 }, 'This will throw'); // 抛出 AssertionError
```

#### **2.11 `assert.throws(block[, error][, message])`**
检查 `block` 是否抛出错误。`error` 可以是构造函数、正则表达式或验证函数。

```javascript
assert.throws(
    () => {
        throw new Error('Invalid input');
    },
    /Invalid input/,
    'This will not throw'
);

assert.throws(
    () => {
        // 不抛出错误
    },
    /Invalid input/,
    'This will throw' // 抛出 AssertionError
);
```

#### **2.12 `assert.doesNotThrow(block[, error][, message])`**
检查 `block` 是否不抛出错误。

```javascript
assert.doesNotThrow(
    () => {
        // 不抛出错误
    },
    'This will not throw'
);

assert.doesNotThrow(
    () => {
        throw new Error('Invalid input');
    },
    'This will throw' // 抛出 AssertionError
);
```

#### **2.13 `assert.ifError(value)`**
检查 `value` 是否为假值。通常用于检查回调函数中的错误对象。

```javascript
assert.ifError(null); // 不抛出
assert.ifError(0); // 不抛出
assert.ifError(new Error('This will throw')); // 抛出 AssertionError
```

---

### **3. 示例：使用 `assert` 编写单元测试**

```javascript
function add(a, b) {
    return a + b;
}

// 测试 add 函数
assert.strictEqual(add(1, 2), 3, '1 + 2 should be 3');
assert.strictEqual(add(-1, 1), 0, '-1 + 1 should be 0');

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

// 测试 divide 函数
assert.strictEqual(divide(10, 2), 5, '10 / 2 should be 5');
assert.throws(
    () => divide(10, 0),
    /Division by zero/,
    'Dividing by zero should throw an error'
);
```

---

### **4. 注意事项**
1. **断言失败时抛出异常**：如果断言失败，会抛出 `AssertionError`，程序会终止运行。
2. **适合单元测试**：`assert` 模块通常用于编写单元测试，验证代码逻辑。
3. **使用严格比较**：在需要类型和值都匹配的场景下，使用 `strictEqual` 和 `deepStrictEqual`。
4. **错误处理**：在测试异步代码时，确保正确处理错误。

---

### **5. 总结**
- `assert` 模块是 Node.js 中用于编写单元测试和验证代码逻辑的核心工具。
- 提供了多种断言方法，如 `equal`、`strictEqual`、`deepEqual`、`throws` 等。
- 适用于验证函数返回值、错误抛出等场景。
- 掌握 `assert` 模块的使用，可以编写健壮的单元测试，确保代码的正确性和可靠性。
