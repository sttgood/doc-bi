---
title: 数组函数
article: false
order: 2
---
在 JavaScript 中，数组提供了丰富的内置函数（方法）来操作和处理数组。以下是数组函数的全面总结：

---

### **1. 增删元素**
| 方法            | 说明                         | 示例                    |
| --------------- | ---------------------------- | ----------------------- |
| **`push()`**    | 在数组末尾添加一个或多个元素 | `arr.push(4);`          |
| **`pop()`**     | 删除数组的最后一个元素       | `arr.pop();`            |
| **`unshift()`** | 在数组开头添加一个或多个元素 | `arr.unshift(0);`       |
| **`shift()`**   | 删除数组的第一个元素         | `arr.shift();`          |
| **`splice()`**  | 添加、删除或替换数组中的元素 | `arr.splice(1, 1, 99);` |

---

### **2. 遍历数组**
| 方法                | 说明                                     | 示例                                                         |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| **`forEach()`**     | 对数组中的每个元素执行一次函数           | `arr.forEach(item => console.log(item));`                    |
| **`map()`**         | 对数组中的每个元素执行函数，返回新数组   | `const newArr = arr.map(item => item * 2);`                  |
| **`filter()`**      | 过滤数组，返回满足条件的元素组成的新数组 | `const newArr = arr.filter(item => item > 1);`               |
| **`reduce()`**      | 对数组中的元素执行累加器函数，返回单个值 | `const sum = arr.reduce((acc, item) => acc + item, 0);`      |
| **`reduceRight()`** | 从右到左执行累加器函数                   | `const sum = arr.reduceRight((acc, item) => acc + item, 0);` |
| **`every()`**       | 检查数组中的每个元素是否都满足条件       | `const isAllValid = arr.every(item => item > 0);`            |
| **`some()`**        | 检查数组中是否有元素满足条件             | `const hasValid = arr.some(item => item > 0);`               |

---

### **3. 查找元素**
| 方法                | 说明                           | 示例                                             |
| ------------------- | ------------------------------ | ------------------------------------------------ |
| **`indexOf()`**     | 查找元素的索引（从前往后）     | `const index = arr.indexOf(2);`                  |
| **`lastIndexOf()`** | 查找元素的索引（从后往前）     | `const index = arr.lastIndexOf(2);`              |
| **`includes()`**    | 检查数组是否包含某个元素       | `const hasItem = arr.includes(2);`               |
| **`find()`**        | 查找满足条件的第一个元素       | `const result = arr.find(item => item > 1);`     |
| **`findIndex()`**   | 查找满足条件的第一个元素的索引 | `const index = arr.findIndex(item => item > 1);` |

---

### **4. 排序与反转**
| 方法            | 说明                 | 示例                         |
| --------------- | -------------------- | ---------------------------- |
| **`sort()`**    | 对数组元素进行排序   | `arr.sort((a, b) => a - b);` |
| **`reverse()`** | 反转数组中的元素顺序 | `arr.reverse();`             |

---

### **5. 截取与拼接**
| 方法           | 说明                         | 示例                                 |
| -------------- | ---------------------------- | ------------------------------------ |
| **`slice()`**  | 截取数组的一部分，返回新数组 | `const newArr = arr.slice(1, 3);`    |
| **`concat()`** | 合并多个数组，返回新数组     | `const newArr = arr.concat([4, 5]);` |

---

### **6. 转换与生成**
| 方法               | 说明                               | 示例                               |
| ------------------ | ---------------------------------- | ---------------------------------- |
| **`join()`**       | 将数组元素拼接成字符串             | `const str = arr.join(",");`       |
| **`toString()`**   | 将数组转换为字符串                 | `const str = arr.toString();`      |
| **`Array.from()`** | 将类数组对象或可迭代对象转换为数组 | `const arr = Array.from("hello");` |
| **`Array.of()`**   | 将一组值转换为数组                 | `const arr = Array.of(1, 2, 3);`   |

---

### **7. 其他操作**
| 方法            | 说明                     | 示例                                              |
| --------------- | ------------------------ | ------------------------------------------------- |
| **`fill()`**    | 用固定值填充数组中的元素 | `arr.fill(0);`                                    |
| **`flat()`**    | 将嵌套数组扁平化         | `const newArr = arr.flat();`                      |
| **`flatMap()`** | 先映射后扁平化           | `const newArr = arr.flatMap(item => [item * 2]);` |
| **`keys()`**    | 返回数组索引的迭代器     | `for (let key of arr.keys()) {}`                  |
| **`values()`**  | 返回数组元素的迭代器     | `for (let value of arr.values()) {}`              |
| **`entries()`** | 返回数组键值对的迭代器   | `for (let [index, value] of arr.entries()) {}`    |

---

### **8. 示例代码**
```javascript
const arr = [1, 2, 3];

// 增删元素
arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]
arr.unshift(0); // [0, 1, 2, 3]
arr.shift(); // [1, 2, 3]
arr.splice(1, 1, 99); // [1, 99, 3]

// 遍历数组
arr.forEach(item => console.log(item)); // 1, 99, 3
const newArr = arr.map(item => item * 2); // [2, 198, 6]
const filteredArr = arr.filter(item => item > 1); // [99, 3]
const sum = arr.reduce((acc, item) => acc + item, 0); // 103

// 查找元素
const index = arr.indexOf(99); // 1
const hasItem = arr.includes(3); // true
const result = arr.find(item => item > 1); // 99
const resultIndex = arr.findIndex(item => item > 1); // 1

// 排序与反转
arr.sort((a, b) => a - b); // [1, 3, 99]
arr.reverse(); // [99, 3, 1]

// 截取与拼接
const slicedArr = arr.slice(1, 3); // [3, 1]
const concatenatedArr = arr.concat([4, 5]); // [99, 3, 1, 4, 5]

// 转换与生成
const str = arr.join(","); // "99,3,1"
const newArrFrom = Array.from("hello"); // ["h", "e", "l", "l", "o"]
const newArrOf = Array.of(1, 2, 3); // [1, 2, 3]

// 其他操作
arr.fill(0); // [0, 0, 0]
const flattenedArr = [[1, 2], [3, 4]].flat(); // [1, 2, 3, 4]
const flatMappedArr = arr.flatMap(item => [item * 2]); // [0, 0, 0]
```

---

### **9. 总结**
| 类别           | 方法                                                         | 说明                     |
| -------------- | ------------------------------------------------------------ | ------------------------ |
| **增删元素**   | `push()`、`pop()`、`unshift()`、`shift()`、`splice()`        | 添加或删除元素           |
| **遍历数组**   | `forEach()`、`map()`、`filter()`、`reduce()`                 | 遍历、映射、过滤、累加   |
| **查找元素**   | `indexOf()`、`includes()`、`find()`、`findIndex()`           | 查找元素或索引           |
| **排序与反转** | `sort()`、`reverse()`                                        | 排序或反转数组           |
| **截取与拼接** | `slice()`、`concat()`                                        | 截取或合并数组           |
| **转换与生成** | `join()`、`Array.from()`、`Array.of()`                       | 转换为字符串或生成新数组 |
| **其他操作**   | `fill()`、`flat()`、`flatMap()`、`keys()`、`values()`、`entries()` | 填充、扁平化、迭代器等   |

通过掌握这些数组函数，可以高效地操作和处理数组，编写出功能强大的代码。
