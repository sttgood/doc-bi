---
title: zlib
article: false
order: 18
---

`zlib` 模块是 Node.js 的核心模块之一，用于实现数据的压缩和解压缩。它支持多种压缩算法，如 `gzip`、`deflate` 和 `brotli`。以下是 `zlib` 模块的详细说明和示例。

---

### **一、`zlib` 的基本用法**
#### **1. 压缩数据**
使用 `zlib.deflate` 方法压缩数据。

```javascript
const zlib = require("zlib");
const input = "Hello, World!";

zlib.deflate(input, (err, buffer) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Compressed data:", buffer.toString("base64"));
});
```

#### **2. 解压缩数据**
使用 `zlib.inflate` 方法解压缩数据。

```javascript
const compressed = Buffer.from("eJzT0yMAAGTvBe8=", "base64");

zlib.inflate(compressed, (err, buffer) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Decompressed data:", buffer.toString());
});
```

---

### **二、`zlib` 的高级用法**
#### **1. 使用流进行压缩**
使用 `zlib.createGzip` 方法创建可读流和可写流，进行流式压缩。

```javascript
const fs = require("fs");
const gzip = zlib.createGzip();

const input = fs.createReadStream("input.txt");
const output = fs.createWriteStream("input.txt.gz");

input.pipe(gzip).pipe(output);
```

#### **2. 使用流进行解压缩**
使用 `zlib.createGunzip` 方法创建可读流和可写流，进行流式解压缩。

```javascript
const gunzip = zlib.createGunzip();

const input = fs.createReadStream("input.txt.gz");
const output = fs.createWriteStream("input.txt");

input.pipe(gunzip).pipe(output);
```

#### **3. 使用 `brotli` 压缩**
`zlib` 支持 `brotli` 压缩算法，提供更高的压缩率。

```javascript
const brotli = zlib.createBrotliCompress();

const input = fs.createReadStream("input.txt");
const output = fs.createWriteStream("input.txt.br");

input.pipe(brotli).pipe(output);
```

---

### **三、实际应用场景**
1. **文件压缩**
   - 使用 `zlib` 压缩大文件，节省存储空间。
2. **网络传输**
   - 使用 `zlib` 压缩 HTTP 响应数据，减少传输时间。
3. **数据存储**
   - 使用 `zlib` 压缩数据库中的数据，提高存储效率。

---

### **四、注意事项**
1. **性能**
   - 压缩和解压缩操作可能会消耗大量 CPU 资源，需谨慎使用。
2. **内存**
   - 处理大文件时，建议使用流式操作，避免内存溢出。
3. **兼容性**
   - 确保压缩和解压缩使用相同的算法和参数。

---

### **五、总结**
`zlib` 模块提供了数据的压缩和解压缩功能，支持 `gzip`、`deflate` 和 `brotli` 等算法。通过 `zlib.deflate`、`zlib.inflate` 和流式操作，开发者可以高效地处理压缩数据。掌握 `zlib` 模块是学习 Node.js 数据处理的重要一步。
