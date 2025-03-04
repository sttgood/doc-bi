---
title: 类型检测与转换
article: false
order: 4
---
在 JavaScript 中，类型检测和类型转换是常见的操作。以下是关于类型检测和转换的详细说明：

---

### **类型检测**

#### 1. **`typeof` 运算符**
用于检测变量的基本类型。

| 类型        | `typeof` 返回值 |
| ----------- | --------------- |
| 数字        | `"number"`      |
| 字符串      | `"string"`      |
| 布尔值      | `"boolean"`     |
| `undefined` | `"undefined"`   |
| `null`      | `"object"`      |
| 对象        | `"object"`      |
| 函数        | `"function"`    |

**示例**：
```javascript
console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"
console.log(typeof {});          // "object"
console.log(typeof function(){});// "function"
```

---

#### 2. **`instanceof` 运算符**
用于检测对象是否属于某个类或构造函数。

**示例**：
```javascript
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
```

---

#### 3. **`Object.prototype.toString`**
用于检测更具体的类型。

**示例**：
```javascript
console.log(Object.prototype.toString.call(42));          // "[object Number]"
console.log(Object.prototype.toString.call("hello"));     // "[object String]"
console.log(Object.prototype.toString.call(true));        // "[object Boolean]"
console.log(Object.prototype.toString.call(null));        // "[object Null]"
console.log(Object.prototype.toString.call(undefined));   // "[object Undefined]"
console.log(Object.prototype.toString.call([]));           // "[object Array]"
console.log(Object.prototype.toString.call({}));           // "[object Object]"
```

---

### **类型转换**

#### 1. **显式类型转换**
通过调用内置函数或运算符将值转换为特定类型。

| 转换类型 | 方法                       | 示例                  |
| -------- | -------------------------- | --------------------- |
| 字符串   | `String()` 或 `toString()` | `String(42)` → `"42"` |
| 数字     | `Number()` 或 `parseInt()` | `Number("42")` → `42` |
| 布尔值   | `Boolean()`                | `Boolean(1)` → `true` |

**示例**：
```javascript
let num = 42;
let str = String(num); // "42"
let bool = Boolean(str); // true
```

---

#### 2. **隐式类型转换**
JavaScript 在某些操作中会自动进行类型转换。

| 操作       | 转换规则               |
| ---------- | ---------------------- |
| 字符串拼接 | 将非字符串转换为字符串 |
| 算术运算   | 将非数字转换为数字     |
| 比较运算   | 根据操作符进行类型转换 |
| 逻辑运算   | 将非布尔值转换为布尔值 |

**示例**：
```javascript
console.log("5" + 2);  // "52"（字符串拼接）
console.log("5" - 2);  // 3（算术运算）
console.log("5" == 5); // true（比较运算）
console.log(!0);       // true（逻辑运算）
```

---

#### 3. **常见类型转换场景**

##### **字符串转数字**
- `Number()`：将字符串转换为数字。
- `parseInt()`：将字符串转换为整数。
- `parseFloat()`：将字符串转换为浮点数。

**示例**：
```javascript
console.log(Number("42"));    // 42
console.log(parseInt("42px"));// 42
console.log(parseFloat("3.14")); // 3.14
```

##### **数字转字符串**
- `String()` 或 `toString()`。

**示例**：
```javascript
let num = 42;
console.log(String(num));      // "42"
console.log(num.toString());   // "42"
```

##### **布尔值转换**
- `Boolean()`。

**示例**：
```javascript
console.log(Boolean(0));       // false
console.log(Boolean(1));       // true
console.log(Boolean("hello")); // true
```

---

#### 4. **特殊值转换**

| 值          | 转换为字符串  | 转换为数字 | 转换为布尔值 |
| ----------- | ------------- | ---------- | ------------ |
| `undefined` | `"undefined"` | `NaN`      | `false`      |
| `null`      | `"null"`      | `0`        | `false`      |
| `true`      | `"true"`      | `1`        | `true`       |
| `false`     | `"false"`     | `0`        | `false`      |
| `""`        | `""`          | `0`        | `false`      |
| `"42"`      | `"42"`        | `42`       | `true`       |
| `0`         | `"0"`         | `0`        | `false`      |
| `1`         | `"1"`         | `1`        | `true`       |

---

### **总结**
- **类型检测**：使用 `typeof`、`instanceof` 或 `Object.prototype.toString`。
- **类型转换**：
  - 显式转换：使用 `String()`、`Number()`、`Boolean()` 等。
  - 隐式转换：JavaScript 在某些操作中自动进行转换。
- 理解类型转换规则可以避免意外的行为，使代码更健壮。

掌握类型检测和转换是编写高质量 JavaScript 代码的重要基础。
