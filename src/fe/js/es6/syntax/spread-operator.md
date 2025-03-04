---
title: 扩展运算符
article: false
order: 4
---
扩展运算符（Spread Operator）是 JavaScript 中一个非常强大且常用的语法特性，用三个点（`...`）表示。它可以将 **可迭代对象**（如数组、字符串、对象等）展开为单独的元素，或者将多个元素合并为一个数组或对象。

以下是扩展运算符的详细用法和示例：

---

### **1. 数组中的扩展运算符**

#### **展开数组**
将数组中的元素展开为单独的值。

```javascript
const arr = [1, 2, 3];
console.log(...arr); // 输出: 1 2 3
```

#### **合并数组**
将多个数组合并为一个新数组。

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // 输出: [1, 2, 3, 4]
```

#### **复制数组**
浅拷贝一个数组。

```javascript
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy); // 输出: [1, 2, 3]
```

#### **在函数参数中使用**
将数组展开为函数的参数。

```javascript
function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 输出: 6
```

---

### **2. 对象中的扩展运算符**

#### **合并对象**
将多个对象合并为一个新对象。如果属性名冲突，后面的对象会覆盖前面的对象。

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // 输出: { a: 1, b: 3, c: 4 }
```

#### **复制对象**
浅拷贝一个对象。

```javascript
const obj = { a: 1, b: 2 };
const copy = { ...obj };
console.log(copy); // 输出: { a: 1, b: 2 }
```

#### **添加新属性**
在复制对象的同时添加新属性。

```javascript
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };
console.log(newObj); // 输出: { a: 1, b: 2, c: 3 }
```

---

### **3. 字符串中的扩展运算符**

#### **将字符串展开为字符数组**
```javascript
const str = "hello";
const chars = [...str];
console.log(chars); // 输出: ['h', 'e', 'l', 'l', 'o']
```

---

### **4. 在函数参数中使用**

#### **剩余参数（Rest Parameters）**
将剩余的参数收集为一个数组。

```javascript
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 输出: 6
```

---

### **5. 在解构赋值中使用**

#### **数组解构**
```javascript
const [first, ...rest] = [1, 2, 3];
console.log(first); // 输出: 1
console.log(rest); // 输出: [2, 3]
```

#### **对象解构**
```javascript
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a); // 输出: 1
console.log(rest); // 输出: { b: 2, c: 3 }
```

---

### **6. 注意事项**

1. **浅拷贝**：
   - 扩展运算符只能进行浅拷贝。如果对象或数组中的值是引用类型，拷贝后的对象仍然会共享相同的引用。

   ```javascript
   const obj = { a: { b: 1 } };
   const copy = { ...obj };
   copy.a.b = 2;
   console.log(obj.a.b); // 输出: 2
   ```

2. **不支持普通对象迭代**：
   - 扩展运算符只能用于可迭代对象（如数组、字符串、Set、Map 等）。普通对象默认不可迭代，但可以通过 `Object.entries` 或 `Object.values` 转换为数组后再使用扩展运算符。

   ```javascript
   const obj = { a: 1, b: 2 };
   const arr = [...Object.values(obj)];
   console.log(arr); // 输出: [1, 2]
   ```

3. **性能问题**：
   - 在处理大数据量时，扩展运算符可能会导致性能问题，因为它会创建一个新的数组或对象。

---

### **7. 实际应用场景**

#### **1. 合并默认配置**
```javascript
const defaultConfig = { timeout: 1000, retry: 3 };
const userConfig = { timeout: 2000 };
const finalConfig = { ...defaultConfig, ...userConfig };
console.log(finalConfig); // 输出: { timeout: 2000, retry: 3 }
```

#### **2. 复制数组或对象**
```javascript
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // 输出: [1, 2, 3]
```

#### **3. 函数参数处理**
```javascript
function logArguments(...args) {
  console.log(args);
}
logArguments(1, 2, 3); // 输出: [1, 2, 3]
```

#### **4. 解构赋值**
```javascript
const [first, ...rest] = [1, 2, 3];
console.log(first); // 输出: 1
console.log(rest); // 输出: [2, 3]
```

---

### **总结**

扩展运算符是 JavaScript 中非常实用的语法，可以简化数组、对象和函数参数的操作。它的主要功能包括：
- 展开数组或对象。
- 合并数组或对象。
- 复制数组或对象。
- 在函数参数中收集剩余参数。

掌握扩展运算符的使用，可以显著提高代码的可读性和简洁性。
