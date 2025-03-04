---
title: child_process
article: false
order: 11
---

`child_process` 模块是 Node.js 的核心模块之一，用于创建和管理子进程。它允许 Node.js 应用程序执行系统命令、运行其他脚本或程序，并与之进行通信。以下是 `child_process` 模块的详细说明和示例。

---

### **一、创建子进程的方法**
`child_process` 模块提供了四种创建子进程的方法：

#### **1. `child_process.spawn`**
用于执行系统命令，返回一个 `ChildProcess` 对象。

```javascript
const { spawn } = require("child_process");

const ls = spawn("ls", ["-lh", "/usr"]);

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`Child process exited with code ${code}`);
});
```

#### **2. `child_process.exec`**
用于执行系统命令，返回一个 `ChildProcess` 对象。与 `spawn` 不同，`exec` 会将输出缓冲到内存中。

```javascript
const { exec } = require("child_process");

exec("ls -lh /usr", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
```

#### **3. `child_process.execFile`**
用于执行可执行文件，返回一个 `ChildProcess` 对象。

```javascript
const { execFile } = require("child_process");

execFile("node", ["--version"], (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
```

#### **4. `child_process.fork`**
用于创建新的 Node.js 进程，返回一个 `ChildProcess` 对象。`fork` 会创建一个 IPC 通道，用于父子进程之间的通信。

```javascript
const { fork } = require("child_process");

const child = fork("child.js");

child.on("message", (message) => {
  console.log(`Message from child: ${message}`);
});

child.send("Hello from parent!");
```

---

### **二、子进程的通信**
#### **1. 使用 `stdin`、`stdout` 和 `stderr`**
子进程的标准输入、输出和错误流可以通过 `ChildProcess` 对象访问。

```javascript
const { spawn } = require("child_process");

const child = spawn("wc");

process.stdin.pipe(child.stdin);

child.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});
```

#### **2. 使用 IPC 通信**
`fork` 方法创建的子进程可以通过 `send` 和 `message` 事件进行通信。

```javascript
// parent.js
const { fork } = require("child_process");

const child = fork("child.js");

child.on("message", (message) => {
  console.log(`Message from child: ${message}`);
});

child.send("Hello from parent!");

// child.js
process.on("message", (message) => {
  console.log(`Message from parent: ${message}`);
  process.send("Hello from child!");
});
```

---

### **三、实际应用场景**
1. **执行系统命令**
   - 使用 `spawn` 或 `exec` 执行系统命令（如 `ls`、`git`）。
2. **运行其他脚本**
   - 使用 `fork` 运行其他 Node.js 脚本。
3. **并行处理**
   - 使用多个子进程并行处理任务（如数据处理、爬虫）。
4. **与外部程序交互**
   - 使用 `execFile` 运行外部程序并与之交互。

---

### **四、注意事项**
1. **错误处理**
   - 始终监听 `error` 事件或检查回调函数的 `error` 参数。
2. **性能优化**
   - 避免创建过多的子进程，合理使用 `cluster` 模块。
3. **安全性**
   - 避免执行不可信的命令或脚本，防止命令注入攻击。

---

### **五、总结**
`child_process` 模块提供了创建和管理子进程的功能，适合执行系统命令、运行其他脚本或程序，并与之进行通信。通过 `spawn`、`exec`、`execFile` 和 `fork`，开发者可以灵活地处理子进程任务。掌握 `child_process` 模块是学习 Node.js 系统编程的重要一步。
