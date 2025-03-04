---
title: WebSocket基础
article: false
order: 5
---
**WebSocket** 是一种在单个 TCP 连接上进行全双工通信的协议，允许客户端和服务器之间进行实时、双向的数据传输。与传统的 HTTP 请求-响应模式不同，WebSocket 提供了持久化的连接，适合需要实时通信的应用场景，如聊天应用、在线游戏、实时数据更新等。

---

### **1. WebSocket 的特点**
1. **全双工通信**：客户端和服务器可以同时发送和接收数据。
2. **低延迟**：数据可以实时传输，无需频繁建立和关闭连接。
3. **轻量级**：WebSocket 协议头部较小，减少了数据传输的开销。
4. **持久化连接**：连接建立后，客户端和服务器可以保持长时间的通信。
5. **跨域支持**：通过 `Origin` 头部实现跨域通信。

---

### **2. WebSocket 协议**
- **协议标识**：`ws`（非加密）或 `wss`（加密，基于 TLS）。
- **握手过程**：
  - 客户端通过 HTTP 请求发起 WebSocket 握手。
  - 服务器响应握手请求，升级协议为 WebSocket。
- **数据帧**：WebSocket 使用二进制或文本格式的数据帧传输数据。

---

### **3. WebSocket API**
WebSocket API 是浏览器提供的用于创建和管理 WebSocket 连接的接口。

#### **3.1 创建 WebSocket 连接**
```javascript
const socket = new WebSocket('ws://example.com/socket');
```

#### **3.2 WebSocket 事件**
| 事件      | 描述                           |
| --------- | ------------------------------ |
| `open`    | 连接建立时触发。               |
| `message` | 接收到服务器发送的数据时触发。 |
| `error`   | 发生错误时触发。               |
| `close`   | 连接关闭时触发。               |

#### **3.3 WebSocket 方法**
| 方法         | 描述               |
| ------------ | ------------------ |
| `send(data)` | 向服务器发送数据。 |
| `close()`    | 关闭连接。         |

#### **3.4 WebSocket 属性**
| 属性             | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| `readyState`     | 连接的当前状态（`CONNECTING`, `OPEN`, `CLOSING`, `CLOSED`）。 |
| `bufferedAmount` | 未发送数据的字节数。                                         |

---

### **4. WebSocket 使用示例**

#### **4.1 客户端代码**
```javascript
// 创建 WebSocket 连接
const socket = new WebSocket('ws://example.com/socket');

// 连接建立时触发
socket.addEventListener('open', () => {
    console.log('WebSocket connection established');
    socket.send('Hello Server!'); // 向服务器发送数据
});

// 接收到服务器发送的数据时触发
socket.addEventListener('message', (event) => {
    console.log('Received from server:', event.data);
});

// 发生错误时触发
socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});

// 连接关闭时触发
socket.addEventListener('close', () => {
    console.log('WebSocket connection closed');
});
```

#### **4.2 服务器端代码（Node.js + `ws` 库）**
```javascript
const WebSocket = require('ws');

// 创建 WebSocket 服务器
const wss = new WebSocket.Server({ port: 8080 });

// 监听连接事件
wss.on('connection', (ws) => {
    console.log('Client connected');

    // 接收到客户端发送的数据时触发
    ws.on('message', (message) => {
        console.log('Received from client:', message);
        ws.send(`Echo: ${message}`); // 向客户端发送数据
    });

    // 连接关闭时触发
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
```

---

### **5. WebSocket 与 HTTP 的区别**
| 特性       | WebSocket                | HTTP                         |
| ---------- | ------------------------ | ---------------------------- |
| 通信模式   | 全双工                   | 请求-响应                    |
| 连接持久性 | 持久化连接               | 每次请求后关闭连接           |
| 数据格式   | 二进制或文本帧           | 文本（如 JSON、XML）         |
| 延迟       | 低延迟                   | 较高延迟（需要频繁建立连接） |
| 适用场景   | 实时通信（如聊天、游戏） | 静态资源获取、API 调用       |

---

### **6. WebSocket 的应用场景**
1. **实时聊天应用**：支持用户之间的实时消息传递。
2. **在线游戏**：实时同步游戏状态和玩家操作。
3. **实时数据更新**：如股票行情、天气预报等。
4. **协作工具**：如实时文档编辑、白板协作等。
5. **物联网（IoT）**：设备与服务器之间的实时通信。

---

### **7. WebSocket 的注意事项**
1. **连接管理**：
   - 需要处理连接断开和重连的逻辑。
   - 使用心跳机制检测连接状态。
2. **安全性**：
   - 使用 `wss`（WebSocket Secure）加密通信。
   - 验证客户端身份，防止未授权访问。
3. **性能优化**：
   - 减少不必要的数据传输。
   - 使用二进制数据帧传输大文件或复杂数据。

---

### **8. 总结**
- WebSocket 是一种支持全双工、低延迟通信的协议。
- 通过 WebSocket API，可以轻松实现客户端与服务器的实时通信。
- WebSocket 适用于需要实时数据传输的应用场景，如聊天、游戏、实时数据更新等。
- 在使用 WebSocket 时，需要注意连接管理、安全性和性能优化。

掌握 WebSocket 的基础知识，可以帮助开发者构建高效、实时的 Web 应用。
