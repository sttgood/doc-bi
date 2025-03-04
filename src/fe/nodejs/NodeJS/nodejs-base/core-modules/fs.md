---
title: fs
article: false
order: 1
---

`fs` 模块是 Node.js 中用于与文件系统交互的核心模块。它提供了同步和异步的方法来操作文件，包括读取、写入、删除、重命名等操作。以下是 `fs` 模块的详细解析和使用方法。

---

### **1. 引入 fs 模块**

```javascript
const fs = require("fs");
```

---

### **2. 异步与同步方法**

`fs` 模块提供了两种操作文件的方式：
- **异步方法**：非阻塞，通过回调函数返回结果。
- **同步方法**：阻塞，直接返回结果。

#### **异步方法**
- 方法名通常以 `Sync` 结尾。
- 示例：
  ```javascript
  fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  ```

#### **同步方法**
- 方法名通常以 `Sync` 结尾。
- 示例：
  ```javascript
  try {
    const data = fs.readFileSync("file.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  ```

---

### **3. 常用方法**

#### **1. 读取文件**
- **异步**：
  ```javascript
  fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  ```
- **同步**：
  ```javascript
  const data = fs.readFileSync("file.txt", "utf8");
  console.log(data);
  ```

#### **2. 写入文件**
- **异步**：
  ```javascript
  fs.writeFile("file.txt", "Hello, World!", "utf8", (err) => {
    if (err) throw err;
    console.log("File written successfully");
  });
  ```
- **同步**：
  ```javascript
  fs.writeFileSync("file.txt", "Hello, World!", "utf8");
  console.log("File written successfully");
  ```

#### **3. 追加内容**
- **异步**：
  ```javascript
  fs.appendFile("file.txt", "New content", "utf8", (err) => {
    if (err) throw err;
    console.log("Content appended successfully");
  });
  ```
- **同步**：
  ```javascript
  fs.appendFileSync("file.txt", "New content", "utf8");
  console.log("Content appended successfully");
  ```

#### **4. 删除文件**
- **异步**：
  ```javascript
  fs.unlink("file.txt", (err) => {
    if (err) throw err;
    console.log("File deleted successfully");
  });
  ```
- **同步**：
  ```javascript
  fs.unlinkSync("file.txt");
  console.log("File deleted successfully");
  ```

#### **5. 重命名文件**
- **异步**：
  ```javascript
  fs.rename("old.txt", "new.txt", (err) => {
    if (err) throw err;
    console.log("File renamed successfully");
  });
  ```
- **同步**：
  ```javascript
  fs.renameSync("old.txt", "new.txt");
  console.log("File renamed successfully");
  ```

#### **6. 检查文件是否存在**
- **异步**：
  ```javascript
  fs.access("file.txt", fs.constants.F_OK, (err) => {
    if (err) {
      console.log("File does not exist");
    } else {
      console.log("File exists");
    }
  });
  ```
- **同步**：
  ```javascript
  try {
    fs.accessSync("file.txt", fs.constants.F_OK);
    console.log("File exists");
  } catch (err) {
    console.log("File does not exist");
  }
  ```

#### **7. 创建目录**
- **异步**：
  ```javascript
  fs.mkdir("newDir", (err) => {
    if (err) throw err;
    console.log("Directory created successfully");
  });
  ```
- **同步**：
  ```javascript
  fs.mkdirSync("newDir");
  console.log("Directory created successfully");
  ```

#### **8. 读取目录**
- **异步**：
  ```javascript
  fs.readdir("dir", (err, files) => {
    if (err) throw err;
    console.log(files);
  });
  ```
- **同步**：
  ```javascript
  const files = fs.readdirSync("dir");
  console.log(files);
  ```

#### **9. 删除目录**
- **异步**：
  ```javascript
  fs.rmdir("dir", (err) => {
    if (err) throw err;
    console.log("Directory deleted successfully");
  });
  ```
- **同步**：
  ```javascript
  fs.rmdirSync("dir");
  console.log("Directory deleted successfully");
  ```

#### **10. 获取文件信息**
- **异步**：
  ```javascript
  fs.stat("file.txt", (err, stats) => {
    if (err) throw err;
    console.log(stats);
  });
  ```
- **同步**：
  ```javascript
  const stats = fs.statSync("file.txt");
  console.log(stats);
  ```

---

### **4. 流式操作**

`fs` 模块支持流式操作，适合处理大文件。

#### **1. 读取流**
```javascript
const readStream = fs.createReadStream("file.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("File read completed");
});
```

#### **2. 写入流**
```javascript
const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello, World!", "utf8");
writeStream.end();

writeStream.on("finish", () => {
  console.log("File written successfully");
});
```

#### **3. 管道操作**
```javascript
const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
```

---

### **5. 文件权限与模式**

`fs` 模块支持设置文件权限和模式。

#### **1. 更改文件权限**
- **异步**：
  ```javascript
  fs.chmod("file.txt", 0o755, (err) => {
    if (err) throw err;
    console.log("File permissions changed");
  });
  ```
- **同步**：
  ```javascript
  fs.chmodSync("file.txt", 0o755);
  console.log("File permissions changed");
  ```

#### **2. 文件打开模式**
- `fs.constants` 提供了文件打开模式的常量：
  - `O_RDONLY`：只读。
  - `O_WRONLY`：只写。
  - `O_RDWR`：读写。
  - `O_CREAT`：如果文件不存在则创建。
  - `O_TRUNC`：如果文件存在则截断。

---

### **6. 错误处理**

在使用 `fs` 模块时，务必处理错误，避免程序崩溃。

#### **示例**
```javascript
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});
```

---

### **7. 总结**

`fs` 模块是 Node.js 中操作文件系统的核心模块，提供了丰富的功能和方法。通过掌握 `fs` 模块的使用，您可以高效地处理文件操作，构建强大的 Node.js 应用。
