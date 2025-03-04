---
title: dgram
article: false
order: 12
---

**Node.js 的 `dgram` 模块** 是用于实现 UDP（用户数据报协议）通信的核心模块。UDP 是一种无连接的传输协议，适用于低延迟、高效率的场景，如视频流、在线游戏、DNS 查询等。`dgram` 模块提供了创建 UDP 服务器和客户端的功能。

---

### **1. 引入 `dgram` 模块**
```javascript
const dgram = require('dgram');
```

---

### **2. 创建 UDP 服务器**

#### **2.1 创建 UDP 服务器**
使用 `dgram.createSocket(type[, callback])` 创建 UDP 服务器。

| 参数       | 描述                           |
| ---------- | ------------------------------ |
| `type`     | 协议类型（`udp4` 或 `udp6`）。 |
| `callback` | 消息事件的回调函数。           |

```javascript
const server = dgram.createSocket('udp4');

server.on('message', (message, remote) => {
    console.log(`Received message: ${message} from ${remote.address}:${remote.port}`);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`Server listening on ${address.address}:${address.port}`);
});

server.bind(41234); // 绑定端口
```

#### **2.2 事件**
| 事件        | 描述                   |
| ----------- | ---------------------- |
| `message`   | 接收到消息时触发。     |
| `listening` | 服务器开始监听时触发。 |
| `close`     | 服务器关闭时触发。     |
| `error`     | 发生错误时触发。       |

---

### **3. 创建 UDP 客户端**

#### **3.1 发送消息**
使用 `socket.send(msg[, offset, length][, port][, address][, callback])` 发送消息。

| 参数       | 描述                              |
| ---------- | --------------------------------- |
| `msg`      | 要发送的消息（Buffer 或字符串）。 |
| `offset`   | 消息的起始位置（默认 0）。        |
| `length`   | 消息的长度（默认 `msg.length`）。 |
| `port`     | 目标端口。                        |
| `address`  | 目标地址。                        |
| `callback` | 消息发送后的回调函数。            |

```javascript
const client = dgram.createSocket('udp4');

const message = Buffer.from('Hello, Server!');
client.send(message, 0, message.length, 41234, 'localhost', (err) => {
    if (err) {
        console.error('Error sending message:', err);
        client.close();
    } else {
        console.log('Message sent successfully');
    }
});
```

#### **3.2 接收消息**
客户端也可以接收消息。

```javascript
client.on('message', (message, remote) => {
    console.log(`Received message: ${message} from ${remote.address}:${remote.port}`);
});
```

---

### **4. 示例：UDP 服务器和客户端通信**

#### **4.1 服务器代码**
```javascript
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (message, remote) => {
    console.log(`Server received: ${message} from ${remote.address}:${remote.port}`);
    server.send('Hello, Client!', remote.port, remote.address);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`Server listening on ${address.address}:${address.port}`);
});

server.bind(41234);
```

#### **4.2 客户端代码**
```javascript
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const message = Buffer.from('Hello, Server!');
client.send(message, 0, message.length, 41234, 'localhost', (err) => {
    if (err) {
        console.error('Error sending message:', err);
        client.close();
    } else {
        console.log('Client sent message successfully');
    }
});

client.on('message', (message, remote) => {
    console.log(`Client received: ${message} from ${remote.address}:${remote.port}`);
    client.close();
});
```

---

### **5. `dgram` 模块的常用方法**

#### **5.1 `socket.bind([port][, address][, callback])`**
绑定服务器到指定端口和地址。

```javascript
server.bind(41234, 'localhost', () => {
    console.log('Server bound to port 41234');
});
```

#### **5.2 `socket.close([callback])`**
关闭 socket。

```javascript
server.close(() => {
    console.log('Server closed');
});
```

#### **5.3 `socket.address()`**
返回 socket 的地址信息。

```javascript
const address = server.address();
console.log(`Server address: ${address.address}:${address.port}`);
```

#### **5.4 `socket.setBroadcast(flag)`**
启用或禁用广播功能。

```javascript
client.setBroadcast(true);
client.send('Broadcast message', 41234, '255.255.255.255');
```

#### **5.5 `socket.setTTL(ttl)`**
设置 IP 数据包的生存时间（TTL）。

```javascript
client.setTTL(64);
```

---

### **6. 注意事项**
1. **无连接性**：UDP 是无连接的，不保证消息的可靠性和顺序。
2. **消息大小限制**：UDP 消息的最大长度为 65507 字节（IPv4）或更大（IPv6）。
3. **广播和多播**：UDP 支持广播和多播，适用于一对多通信。
4. **错误处理**：需要监听 `error` 事件以处理网络错误。

---

### **7. 总结**
- `dgram` 模块是 Node.js 中实现 UDP 通信的核心工具。
- 提供了创建 UDP 服务器和客户端的功能。
- 适用于低延迟、高效率的场景，如视频流、在线游戏、DNS 查询等。
- 支持广播、多播和自定义 TTL 等高级功能。

掌握 `dgram` 模块的使用，可以更高效地实现 UDP 通信，满足实时性和性能要求较高的应用场景。
