---
title: stream：流操作
article: false
order: 5
---

`stream` 模块是 Node.js 的核心模块之一，用于处理 **流式数据**。流是一种抽象接口，用于处理数据的分块读取和写入，特别适合处理大文件或实时数据。以下是 `stream` 模块的详细说明和示例。

---

### **一、流的基本概念**
#### **1. 流的类型**
Node.js 中有四种基本类型的流：
- **Readable**：可读流（如文件读取、HTTP 请求）。
- **Writable**：可写流（如文件写入、HTTP 响应）。
- **Duplex**：双向流（如 TCP 套接字）。
- **Transform**：转换流（如压缩、加密）。

#### **2. 流的特点**
- **分块处理**：数据被分成小块处理，避免一次性加载大量数据到内存。
- **事件驱动**：通过事件（如 `data`、`end`）处理数据。
- **管道操作**：通过 `pipe` 方法将多个流连接起来。

---

### **二、可读流（Readable Stream）**
#### **1. 创建可读流**
使用 `fs.createReadStream` 创建可读流。

```javascript
const fs = require("fs");

const readableStream = fs.createReadStream("input.txt", { encoding: "utf8" });

// 监听 data 事件，读取数据
readableStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

// 监听 end 事件，读取完成
readableStream.on("end", () => {
  console.log("No more data to read.");
});

// 监听 error 事件，处理错误
readableStream.on("error", (err) => {
  console.error("Error:", err.message);
});
```

#### **2. 暂停和恢复**
使用 `pause` 和 `resume` 方法控制流的读取。

```javascript
readableStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
  readableStream.pause(); // 暂停读取

  setTimeout(() => {
    readableStream.resume(); // 恢复读取
  }, 1000);
});
```

---

### **三、可写流（Writable Stream）**
#### **1. 创建可写流**
使用 `fs.createWriteStream` 创建可写流。

```javascript
const writableStream = fs.createWriteStream("output.txt");

// 写入数据
writableStream.write("Hello, World!\n");
writableStream.write("This is a writable stream.\n");

// 结束写入
writableStream.end("End of data.");
```

#### **2. 监听事件**
监听 `finish` 和 `error` 事件。

```javascript
writableStream.on("finish", () => {
  console.log("Data has been written.");
});

writableStream.on("error", (err) => {
  console.error("Error:", err.message);
});
```

---

### **四、管道操作（Pipe）**
使用 `pipe` 方法将可读流和可写流连接起来。

```javascript
const readableStream = fs.createReadStream("input.txt");
const writableStream = fs.createWriteStream("output.txt");

// 将可读流的数据通过管道写入可写流
readableStream.pipe(writableStream);
```

---

### **五、双向流（Duplex Stream）**
双向流既可读又可写，如 TCP 套接字。

```javascript
const { Duplex } = require("stream");

const myDuplex = new Duplex({
  write(chunk, encoding, callback) {
    console.log("Received data:", chunk.toString());
    callback();
  },

  read(size) {
    this.push("Hello from Duplex!\n");
    this.push(null); // 结束读取
  },
});

myDuplex.write("Hello, Duplex!");
myDuplex.on("data", (chunk) => {
  console.log("Read data:", chunk.toString());
});
```

---

### **六、转换流（Transform Stream）**
转换流是一种特殊的双向流，用于对数据进行转换（如压缩、加密）。

```javascript
const { Transform } = require("stream");

const myTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperCaseChunk = chunk.toString().toUpperCase();
    this.push(upperCaseChunk);
    callback();
  },
});

myTransform.write("hello, transform!");
myTransform.end();

myTransform.on("data", (chunk) => {
  console.log("Transformed data:", chunk.toString());
});
```

---

### **七、实际应用场景**
1. **文件处理**
   - 使用流处理大文件，避免内存溢出。
2. **网络通信**
   - 使用流处理 HTTP 请求和响应。
3. **数据转换**
   - 使用转换流对数据进行压缩、加密等操作。
4. **实时数据处理**
   - 使用流处理实时数据（如日志、传感器数据）。

---

### **八、注意事项**
1. **错误处理**
   - 始终监听 `error` 事件，避免程序崩溃。
2. **内存管理**
   - 使用流处理大文件时，注意内存使用情况。
3. **性能优化**
   - 使用管道操作简化代码，提高性能。

---

### **九、总结**
`stream` 模块是 Node.js 中处理流式数据的核心工具。通过可读流、可写流、双向流和转换流，开发者可以高效地处理大文件、网络通信和实时数据。掌握 `stream` 模块是学习 Node.js 的重要一步。
