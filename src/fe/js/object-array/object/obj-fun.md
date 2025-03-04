---
title: 对象函数
article: false
order: 6
---

在 JavaScript 中，对象提供了丰富的内置函数（方法）来操作和处理对象。以下是对象函数的全面总结：

---

### **1. 对象属性操作**
| 方法                                    | 说明                                             | 示例                                                         |
| --------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| **`Object.keys()`**                     | 返回对象自身的可枚举属性组成的数组               | `Object.keys(obj);`                                          |
| **`Object.values()`**                   | 返回对象自身的可枚举属性值组成的数组             | `Object.values(obj);`                                        |
| **`Object.entries()`**                  | 返回对象自身的可枚举键值对组成的数组             | `Object.entries(obj);`                                       |
| **`Object.getOwnPropertyNames()`**      | 返回对象自身的所有属性（包括不可枚举）组成的数组 | `Object.getOwnPropertyNames(obj);`                           |
| **`Object.getOwnPropertySymbols()`**    | 返回对象自身的所有 `Symbol` 属性组成的数组       | `Object.getOwnPropertySymbols(obj);`                         |
| **`Object.hasOwnProperty()`**           | 检查对象是否包含指定属性                         | `obj.hasOwnProperty("key");`                                 |
| **`Object.defineProperty()`**           | 定义或修改对象的属性                             | `Object.defineProperty(obj, "key", { value: 1 });`           |
| **`Object.defineProperties()`**         | 定义或修改对象的多个属性                         | `Object.defineProperties(obj, { key1: { value: 1 }, key2: { value: 2 } });` |
| **`Object.getOwnPropertyDescriptor()`** | 获取对象属性的描述符                             | `Object.getOwnPropertyDescriptor(obj, "key");`               |

---

### **2. 对象操作**
| 方法                             | 说明                             | 示例                                      |
| -------------------------------- | -------------------------------- | ----------------------------------------- |
| **`Object.assign()`**            | 合并多个对象，返回新对象         | `Object.assign({}, obj1, obj2);`          |
| **`Object.create()`**            | 基于现有对象创建新对象           | `Object.create(proto);`                   |
| **`Object.freeze()`**            | 冻结对象，使其不可修改           | `Object.freeze(obj);`                     |
| **`Object.seal()`**              | 密封对象，使其不能添加或删除属性 | `Object.seal(obj);`                       |
| **`Object.preventExtensions()`** | 阻止对象扩展，使其不能添加新属性 | `Object.preventExtensions(obj);`          |
| **`Object.isFrozen()`**          | 检查对象是否被冻结               | `Object.isFrozen(obj);`                   |
| **`Object.isSealed()`**          | 检查对象是否被密封               | `Object.isSealed(obj);`                   |
| **`Object.isExtensible()`**      | 检查对象是否可扩展               | `Object.isExtensible(obj);`               |
| **`Object.fromEntries()`**       | 将键值对数组转换为对象           | `Object.fromEntries([["key", "value"]]);` |

---

### **3. 对象遍历**
| 方法                   | 说明                                 | 示例                      |
| ---------------------- | ------------------------------------ | ------------------------- |
| **`for...in`**         | 遍历对象自身的和继承的可枚举属性     | `for (let key in obj) {}` |
| **`Object.keys()`**    | 返回对象自身的可枚举属性组成的数组   | `Object.keys(obj);`       |
| **`Object.values()`**  | 返回对象自身的可枚举属性值组成的数组 | `Object.values(obj);`     |
| **`Object.entries()`** | 返回对象自身的可枚举键值对组成的数组 | `Object.entries(obj);`    |

---

### **4. 对象原型操作**
| 方法                          | 说明                           | 示例                                 |
| ----------------------------- | ------------------------------ | ------------------------------------ |
| **`Object.getPrototypeOf()`** | 获取对象的原型                 | `Object.getPrototypeOf(obj);`        |
| **`Object.setPrototypeOf()`** | 设置对象的原型                 | `Object.setPrototypeOf(obj, proto);` |
| **`Object.isPrototypeOf()`**  | 检查对象是否是另一个对象的原型 | `proto.isPrototypeOf(obj);`          |

---

### **5. 对象比较**
| 方法              | 说明                   | 示例                     |
| ----------------- | ---------------------- | ------------------------ |
| **`Object.is()`** | 比较两个值是否严格相等 | `Object.is(val1, val2);` |

---

### **6. 示例代码**
```javascript
const obj = { name: "Alice", age: 25 };

// 属性操作
const keys = Object.keys(obj); // ["name", "age"]
const values = Object.values(obj); // ["Alice", 25]
const entries = Object.entries(obj); // [["name", "Alice"], ["age", 25]]
const hasKey = obj.hasOwnProperty("name"); // true

// 对象操作
const newObj = Object.assign({}, obj, { city: "New York" }); // { name: "Alice", age: 25, city: "New York" }
const frozenObj = Object.freeze(obj); // 冻结对象
const sealedObj = Object.seal(obj); // 密封对象
const isFrozen = Object.isFrozen(obj); // true
const isSealed = Object.isSealed(obj); // true

// 对象遍历
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
// 输出：
// name: Alice
// age: 25

// 原型操作
const proto = Object.getPrototypeOf(obj); // 获取原型
Object.setPrototypeOf(obj, {}); // 设置原型
const isProto = proto.isPrototypeOf(obj); // true

// 对象比较
const isEqual = Object.is(obj, { name: "Alice", age: 25 }); // false
```

---

### **7. 总结**
| 类别         | 方法                                                         | 说明                     |
| ------------ | ------------------------------------------------------------ | ------------------------ |
| **属性操作** | `Object.keys()`、`Object.values()`、`Object.entries()`       | 获取对象的键、值或键值对 |
| **对象操作** | `Object.assign()`、`Object.freeze()`、`Object.seal()`        | 合并、冻结、密封对象     |
| **对象遍历** | `for...in`、`Object.keys()`、`Object.values()`、`Object.entries()` | 遍历对象的属性           |
| **原型操作** | `Object.getPrototypeOf()`、`Object.setPrototypeOf()`         | 获取或设置对象的原型     |
| **对象比较** | `Object.is()`                                                | 比较两个值是否严格相等   |

通过掌握这些对象函数，可以高效地操作和处理对象，编写出功能强大的代码。
