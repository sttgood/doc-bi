---
title: cluster
article: false
order: 16
---

**Node.js 的 `cluster` 模块** 是用于实现多进程的核心模块。它允许创建多个子进程（worker）来共享同一个端口，充分利用多核 CPU 的性能，从而提高应用的并发处理能力。`cluster` 模块是实现 Node.js 应用负载均衡和性能优化的关键工具。

---

### **1. 引入 `cluster` 模块**
```javascript
const cluster = require('cluster');
const http = require('http');
const os = require('os');
```

---

### **2. `cluster` 模块的基本用法**

#### **2.1 主进程和子进程**
- **主进程**：负责创建和管理子进程。
- **子进程**：负责处理实际的请求。

#### **2.2 创建子进程**
使用 `cluster.fork()` 创建子进程。

```javascript
if (cluster.isMaster) {
    console.log(`Master process is running with PID: ${process.pid}`);

    // 获取 CPU 核心数
    const numCPUs = os.cpus().length;

    // 根据 CPU 核心数创建子进程
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // 监听子进程退出事件
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        // 重新启动子进程
        cluster.fork();
    });
} else {
    // 子进程创建 HTTP 服务器
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello, World!\n');
    }).listen(3000);

    console.log(`Worker process is running with PID: ${process.pid}`);
}
```

---

### **3. `cluster` 模块的常用属性和方法**

#### **3.1 属性**
| 属性               | 描述                                   |
| ------------------ | -------------------------------------- |
| `cluster.isMaster` | 判断当前进程是否为主进程。             |
| `cluster.isWorker` | 判断当前进程是否为子进程。             |
| `cluster.worker`   | 当前子进程的引用（仅在子进程中可用）。 |
| `cluster.workers`  | 所有子进程的引用（仅在主进程中可用）。 |

#### **3.2 方法**
| 方法                   | 描述                   |
| ---------------------- | ---------------------- |
| `cluster.fork()`       | 创建子进程。           |
| `cluster.disconnect()` | 断开所有子进程的连接。 |

#### **3.3 事件**
| 事件         | 描述                               |
| ------------ | ---------------------------------- |
| `fork`       | 创建子进程时触发。                 |
| `online`     | 子进程启动并准备好接收消息时触发。 |
| `listening`  | 子进程的服务器开始监听时触发。     |
| `disconnect` | 子进程断开连接时触发。             |
| `exit`       | 子进程退出时触发。                 |
| `message`    | 主进程和子进程之间传递消息时触发。 |

---

### **4. 示例：使用 `cluster` 模块创建多进程 HTTP 服务器**

#### **4.1 主进程代码**
```javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    console.log(`Master process is running with PID: ${process.pid}`);

    // 根据 CPU 核心数创建子进程
    const numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // 监听子进程退出事件
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        // 重新启动子进程
        cluster.fork();
    });
}
```

#### **4.2 子进程代码**
```javascript
const http = require('http');

// 创建 HTTP 服务器
http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!\n');
}).listen(3000);

console.log(`Worker process is running with PID: ${process.pid}`);
```

---

### **5. `cluster` 模块的高级用法**

#### **5.1 进程间通信**
主进程和子进程之间可以通过 `process.send()` 和 `cluster.on('message')` 进行通信。

```javascript
if (cluster.isMaster) {
    const worker = cluster.fork();
    worker.send('Hello from master');
    worker.on('message', (message) => {
        console.log(`Master received: ${message}`);
    });
} else {
    process.on('message', (message) => {
        console.log(`Worker received: ${message}`);
        process.send('Hello from worker');
    });
}
```

#### **5.2 负载均衡**
`cluster` 模块默认使用轮询算法分配请求到子进程，从而实现负载均衡。

```javascript
if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello from worker ${process.pid}\n`);
    }).listen(3000);
}
```

---

### **6. 注意事项**
1. **共享端口**：所有子进程共享同一个端口，由操作系统负责分配请求。
2. **共享状态**：子进程之间不共享内存，需要额外的机制（如 Redis）来实现状态共享。
3. **进程管理**：主进程需要监控子进程的状态，并在子进程退出时重新启动。
4. **资源限制**：过多的子进程可能导致系统资源耗尽，需根据实际情况调整子进程数量。

---

### **7. 总结**
- `cluster` 模块是 Node.js 中实现多进程的核心工具。
- 通过创建多个子进程，充分利用多核 CPU 的性能，提高应用的并发处理能力。
- 支持进程间通信、负载均衡和自动重启等功能。
- 适用于高并发、高性能的应用场景，如 Web 服务器、API 服务等。

掌握 `cluster` 模块的使用，可以显著提升 Node.js 应用的性能和稳定性。
