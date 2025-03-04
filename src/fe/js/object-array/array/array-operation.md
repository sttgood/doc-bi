---
title: 数组的创建与操作
article: false
order: 1
---
在 JavaScript 中，数组是一种常用的数据结构，用于存储有序的数据集合。以下是数组的创建与操作（增删改查）的详细说明和示例：

---

### **1. 数组的创建**
#### **1.1 数组字面量**
```javascript
const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
```

#### **1.2 `Array` 构造函数**
```javascript
const arr = new Array(1, 2, 3);
console.log(arr); // [1, 2, 3]
```

#### **1.3 创建空数组**
```javascript
const arr = [];
console.log(arr); // []
```

#### **1.4 创建指定长度的数组**
```javascript
const arr = new Array(5); // 创建长度为 5 的空数组
console.log(arr); // [empty × 5]
```

#### **1.5 使用 `Array.from()`**
```javascript
const arr = Array.from("hello");
console.log(arr); // ["h", "e", "l", "l", "o"]
```

#### **1.6 使用 `Array.of()`**
```javascript
const arr = Array.of(1, 2, 3);
console.log(arr); // [1, 2, 3]
```

---

### **2. 数组的操作**
#### **2.1 增加元素**
- **`push()`**：在数组末尾添加一个或多个元素。
  ```javascript
  const arr = [1, 2, 3];
  arr.push(4);
  console.log(arr); // [1, 2, 3, 4]
  ```

- **`unshift()`**：在数组开头添加一个或多个元素。
  ```javascript
  const arr = [1, 2, 3];
  arr.unshift(0);
  console.log(arr); // [0, 1, 2, 3]
  ```

- **直接赋值**：通过索引添加元素。
  ```javascript
  const arr = [1, 2, 3];
  arr[3] = 4;
  console.log(arr); // [1, 2, 3, 4]
  ```

#### **2.2 删除元素**
- **`pop()`**：删除数组的最后一个元素。
  ```javascript
  const arr = [1, 2, 3];
  arr.pop();
  console.log(arr); // [1, 2]
  ```

- **`shift()`**：删除数组的第一个元素。
  ```javascript
  const arr = [1, 2, 3];
  arr.shift();
  console.log(arr); // [2, 3]
  ```

- **`splice()`**：删除指定位置的元素。
  ```javascript
  const arr = [1, 2, 3, 4];
  arr.splice(1, 2); // 从索引 1 开始删除 2 个元素
  console.log(arr); // [1, 4]
  ```

#### **2.3 修改元素**
- **直接赋值**：通过索引修改元素。
  ```javascript
  const arr = [1, 2, 3];
  arr[1] = 99;
  console.log(arr); // [1, 99, 3]
  ```

- **`splice()`**：替换指定位置的元素。
  ```javascript
  const arr = [1, 2, 3];
  arr.splice(1, 1, 99); // 从索引 1 开始替换 1 个元素
  console.log(arr); // [1, 99, 3]
  ```

#### **2.4 查找元素**
- **`indexOf()`**：查找元素的索引（从前往后）。
  ```javascript
  const arr = [1, 2, 3, 2];
  console.log(arr.indexOf(2)); // 1
  ```

- **`lastIndexOf()`**：查找元素的索引（从后往前）。
  ```javascript
  const arr = [1, 2, 3, 2];
  console.log(arr.lastIndexOf(2)); // 3
  ```

- **`includes()`**：检查数组是否包含某个元素。
  ```javascript
  const arr = [1, 2, 3];
  console.log(arr.includes(2)); // true
  ```

- **`find()`**：查找满足条件的第一个元素。
  ```javascript
  const arr = [1, 2, 3];
  const result = arr.find(item => item > 1);
  console.log(result); // 2
  ```

- **`findIndex()`**：查找满足条件的第一个元素的索引。
  ```javascript
  const arr = [1, 2, 3];
  const result = arr.findIndex(item => item > 1);
  console.log(result); // 1
  ```

---

### **3. 数组的遍历**
#### **3.1 `for` 循环**
```javascript
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// 输出：
// 1
// 2
// 3
```

#### **3.2 `forEach()`**
```javascript
const arr = [1, 2, 3];
arr.forEach(item => {
  console.log(item);
});
// 输出：
// 1
// 2
// 3
```

#### **3.3 `for...of` 循环**
```javascript
const arr = [1, 2, 3];
for (let item of arr) {
  console.log(item);
}
// 输出：
// 1
// 2
// 3
```

#### **3.4 `map()`**
```javascript
const arr = [1, 2, 3];
const newArr = arr.map(item => item * 2);
console.log(newArr); // [2, 4, 6]
```

#### **3.5 `filter()`**
```javascript
const arr = [1, 2, 3];
const newArr = arr.filter(item => item > 1);
console.log(newArr); // [2, 3]
```

#### **3.6 `reduce()`**
```javascript
const arr = [1, 2, 3];
const sum = arr.reduce((acc, item) => acc + item, 0);
console.log(sum); // 6
```

---

### **4. 示例代码**
```javascript
// 创建数组
const arr = [1, 2, 3];

// 增加元素
arr.push(4);
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4]

// 删除元素
arr.pop();
arr.shift();
console.log(arr); // [1, 2, 3]

// 修改元素
arr[1] = 99;
console.log(arr); // [1, 99, 3]

// 查找元素
console.log(arr.indexOf(99)); // 1
console.log(arr.includes(99)); // true

// 遍历数组
arr.forEach(item => {
  console.log(item);
});
// 输出：
// 1
// 99
// 3
```

---

### **5. 总结**
| 操作     | 方法/语法                                                  | 示例                                      |
| -------- | ---------------------------------------------------------- | ----------------------------------------- |
| **创建** | 数组字面量、`Array` 构造函数、`Array.from()`、`Array.of()` | `const arr = [1, 2, 3];`                  |
| **增加** | `push()`、`unshift()`、直接赋值                            | `arr.push(4);`                            |
| **删除** | `pop()`、`shift()`、`splice()`                             | `arr.pop();`                              |
| **修改** | 直接赋值、`splice()`                                       | `arr[1] = 99;`                            |
| **查找** | `indexOf()`、`includes()`、`find()`                        | `arr.indexOf(2);`                         |
| **遍历** | `for` 循环、`forEach()`、`map()`                           | `arr.forEach(item => console.log(item));` |

通过掌握数组的创建与操作，可以高效地处理数据集合，编写出功能强大的代码。
