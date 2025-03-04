---
title: net
article: false
order: 9
---

`net` 模块是 Node.js 的核心模块之一，用于创建 **TCP 服务器** 和 **TCP 客户端**。它提供了底层的网络通信功能，适合构建实时应用、聊天服务器、游戏服务器等。以下是 `net` 模块的详细说明和示例。

---

### **一、创建 TCP 服务器**
#### **1. 基本用法**
使用 `net.createServer` 方法创建 TCP 服务器。

```javascript
const net = require("net");

// 创建 TCP 服务器
const server = net.createServer((socket) => {
  console.log("Client connected.");

  // 监听客户端发送的数据
  socket.on("data", (data) => {
    console.log("Received data:", data.toString());
    socket.write("Hello from server!");
  });

  // 监听客户端断开连接
  socket.on("end", () => {
    console.log("Client disconnected.");
  });
});

// 监听 3000 端口
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

#### **2. 处理客户端连接**
- **`socket`**：表示与客户端的连接。
- **`socket.write`**：向客户端发送数据。
- **`socket.end`**：关闭连接。

```javascript
server.on("connection", (socket) => {
  console.log("New client connected:", socket.remoteAddress, socket.remotePort);

  socket.write("Welcome to the server!\n");

  socket.on("data", (data) => {
    console.log("Received:", data.toString());
  });

  socket.on("end", () => {
    console.log("Client disconnected:", socket.remoteAddress, socket.remotePort);
  });
});
```

#### **3. 错误处理**
监听 `error` 事件处理服务器错误。

```javascript
server.on("error", (err) => {
  console.error("Server error:", err.message);
});
```

---

### **二、创建 TCP 客户端**
#### **1. 基本用法**
使用 `net.createConnection` 方法创建 TCP 客户端。

```javascript
const client = net.createConnection({ port: 3000 }, () => {
  console.log("Connected to server!");
  client.write("Hello from client!");
});

// 监听服务器发送的数据
client.on("data", (data) => {
  console.log("Received data:", data.toString());
  client.end(); // 关闭连接
});

// 监听连接关闭
client.on("end", () => {
  console.log("Disconnected from server.");
});

// 监听错误
client.on("error", (err) => {
  console.error("Client error:", err.message);
});
```

#### **2. 发送和接收数据**
- **`client.write`**：向服务器发送数据。
- **`client.end`**：关闭连接。

```javascript
client.write("Hello, server!");
client.on("data", (data) => {
  console.log("Server response:", data.toString());
});
```

---

### **三、高级功能**
#### **1. 处理多个客户端**
TCP 服务器可以同时处理多个客户端连接。

```javascript
server.on("connection", (socket) => {
  console.log("New client connected:", socket.remoteAddress, socket.remotePort);

  socket.on("data", (data) => {
    console.log("Received:", data.toString());
    socket.write(`Echo: ${data.toString()}`);
  });

  socket.on("end", () => {
    console.log("Client disconnected:", socket.remoteAddress, socket.remotePort);
  });
});
```

#### **2. 自定义协议**
可以在 TCP 通信中定义自定义协议，如消息长度前缀。

```javascript
server.on("connection", (socket) => {
  let buffer = "";

  socket.on("data", (data) => {
    buffer += data.toString();

    // 假设每条消息以换行符分隔
    const messages = buffer.split("\n");
    buffer = messages.pop(); // 保存未完成的消息

    messages.forEach((message) => {
      console.log("Received message:", message);
      socket.write(`Echo: ${message}\n`);
    });
  });
});
```

---

### **四、实际应用场景**
1. **实时聊天服务器**
   - 使用 TCP 服务器和客户端实现实时消息传递。
2. **游戏服务器**
   - 使用 TCP 服务器处理游戏客户端连接和数据传输。
3. **自定义协议**
   - 定义私有协议，实现高效的数据传输。
4. **物联网设备通信**
   - 使用 TCP 服务器与物联网设备通信。

---

### **五、注意事项**
1. **错误处理**
   - 始终监听 `error` 事件，避免程序崩溃。
2. **性能优化**
   - 对于高并发场景，使用 `cluster` 模块创建多进程。
3. **安全性**
   - 使用 TLS/SSL 加密通信，防止数据泄露。

---

### **六、总结**
`net` 模块提供了创建 TCP 服务器和客户端的功能，适合构建实时应用、游戏服务器、物联网设备通信等。通过 `net.createServer` 和 `net.createConnection`，开发者可以轻松实现基于 TCP 的网络通信。掌握 `net` 模块是学习 Node.js 网络编程的重要一步。
