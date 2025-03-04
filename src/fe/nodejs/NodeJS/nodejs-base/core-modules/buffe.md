---
title: buffer
article: false
order: 6
---

**Node.js 的 `Buffer` 模块** 是用于直接操作二进制数据的核心模块。`Buffer` 类是一个全局类，用于处理二进制数据流，例如文件读写、网络通信等场景。`Buffer` 实例类似于整数数组，但大小固定，且在 V8 堆外分配内存。

---

### **1. 引入 `Buffer` 模块**
`Buffer` 是全局模块，无需显式引入即可使用。

```javascript
// 无需 require('buffer')
const buf = Buffer.from('Hello, World!');
console.log(buf); // 输出: <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
```

---

### **2. 创建 Buffer**

#### **2.1 `Buffer.alloc(size[, fill[, encoding]])`**
创建一个指定大小的 `Buffer`，并用 `fill` 填充（默认填充 0）。

```javascript
const buf1 = Buffer.alloc(10); // 创建一个长度为 10 的 Buffer，填充 0
console.log(buf1); // 输出: <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf2 = Buffer.alloc(10, 'a'); // 创建一个长度为 10 的 Buffer，填充 'a'
console.log(buf2); // 输出: <Buffer 61 61 61 61 61 61 61 61 61 61>
```

#### **2.2 `Buffer.allocUnsafe(size)`**
创建一个指定大小的 `Buffer`，但不初始化内存（可能包含旧数据）。

```javascript
const buf = Buffer.allocUnsafe(10); // 创建一个长度为 10 的 Buffer，未初始化
console.log(buf); // 输出: <Buffer 随机数据>
```

#### **2.3 `Buffer.from(array)`**
从数组创建 `Buffer`。

```javascript
const buf = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
console.log(buf); // 输出: <Buffer 48 65 6c 6c 6f>
```

#### **2.4 `Buffer.from(string[, encoding])`**
从字符串创建 `Buffer`，默认编码为 `utf8`。

```javascript
const buf = Buffer.from('Hello, World!');
console.log(buf); // 输出: <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
```

#### **2.5 `Buffer.from(buffer)`**
复制一个 `Buffer`。

```javascript
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.from(buf1);
console.log(buf2); // 输出: <Buffer 48 65 6c 6c 6f>
```

---

### **3. 操作 Buffer**

#### **3.1 读取和写入数据**
`Buffer` 实例类似于数组，可以通过索引读取和写入数据。

```javascript
const buf = Buffer.from('Hello');
console.log(buf[0]); // 输出: 72 (ASCII 码 'H')

buf[0] = 0x4a; // 修改第一个字节
console.log(buf.toString()); // 输出: Jello
```

#### **3.2 转换为字符串**
使用 `toString([encoding[, start[, end]]])` 将 `Buffer` 转换为字符串。

```javascript
const buf = Buffer.from('Hello, World!');
console.log(buf.toString()); // 输出: Hello, World!
console.log(buf.toString('utf8', 0, 5)); // 输出: Hello
```

#### **3.3 切片**
使用 `slice([start[, end]])` 创建 `Buffer` 的切片。

```javascript
const buf = Buffer.from('Hello, World!');
const slice = buf.slice(0, 5);
console.log(slice.toString()); // 输出: Hello
```

#### **3.4 复制**
使用 `copy(target[, targetStart[, sourceStart[, sourceEnd]]])` 复制 `Buffer`。

```javascript
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.alloc(5);
buf1.copy(buf2);
console.log(buf2.toString()); // 输出: Hello
```

#### **3.5 比较**
使用 `Buffer.compare(buf1, buf2)` 或 `buf.compare(target)` 比较两个 `Buffer`。

```javascript
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.from('World');
console.log(Buffer.compare(buf1, buf2)); // 输出: -1 (buf1 < buf2)
console.log(buf1.compare(buf2)); // 输出: -1 (buf1 < buf2)
```

#### **3.6 拼接**
使用 `Buffer.concat(list[, totalLength])` 拼接多个 `Buffer`。

```javascript
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.from('World');
const buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString()); // 输出: HelloWorld
```

---

### **4. Buffer 的属性和方法**

#### **4.1 属性**
| 属性     | 描述                            |
| -------- | ------------------------------- |
| `length` | `Buffer` 的字节长度。           |
| `buffer` | 返回底层的 `ArrayBuffer` 对象。 |

#### **4.2 方法**
| 方法         | 描述                           |
| ------------ | ------------------------------ |
| `toString()` | 将 `Buffer` 转换为字符串。     |
| `slice()`    | 创建 `Buffer` 的切片。         |
| `copy()`     | 复制 `Buffer`。                |
| `compare()`  | 比较两个 `Buffer`。            |
| `concat()`   | 拼接多个 `Buffer`。            |
| `fill()`     | 填充 `Buffer`。                |
| `indexOf()`  | 查找指定值的位置。             |
| `includes()` | 检查 `Buffer` 是否包含指定值。 |
| `equals()`   | 检查两个 `Buffer` 是否相等。   |

---

### **5. Buffer 的编码**
`Buffer` 支持多种编码格式，常见的有：
- `utf8`：默认编码。
- `ascii`：ASCII 编码。
- `base64`：Base64 编码。
- `hex`：十六进制编码。
- `latin1`：ISO-8859-1 编码。

```javascript
const buf = Buffer.from('Hello, World!');
console.log(buf.toString('base64')); // 输出: SGVsbG8sIFdvcmxkIQ==
console.log(buf.toString('hex')); // 输出: 48656c6c6f2c20576f726c6421
```

---

### **6. 示例：文件读写**
`Buffer` 常用于文件读写操作。

```javascript
const fs = require('fs');

// 读取文件到 Buffer
fs.readFile('example.txt', (err, data) => {
    if (err) throw err;
    console.log(data); // 输出: <Buffer 文件内容>
});

// 将 Buffer 写入文件
const buf = Buffer.from('Hello, World!');
fs.writeFile('output.txt', buf, (err) => {
    if (err) throw err;
    console.log('File written successfully');
});
```

---

### **7. 总结**
- `Buffer` 是 Node.js 中处理二进制数据的核心模块。
- 可以通过 `Buffer.alloc()`、`Buffer.from()` 等方法创建 `Buffer`。
- `Buffer` 支持读取、写入、切片、复制、比较等操作。
- `Buffer` 常用于文件读写、网络通信等场景。

掌握 `Buffer` 模块的使用，可以更高效地处理二进制数据，提升 Node.js 开发的灵活性和性能。
