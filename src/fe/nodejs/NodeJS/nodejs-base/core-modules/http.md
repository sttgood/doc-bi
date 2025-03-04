---
title: http
article: false
order: 3
---

`http` 模块是 Node.js 的核心模块之一，用于创建 **HTTP 服务器** 和 **HTTP 客户端**。它提供了处理 HTTP 请求和响应的功能，是构建 Web 服务器和 API 服务的基础。以下是 `http` 模块的详细说明和示例。

---

### **一、创建 HTTP 服务器**
#### **1. 基本用法**
使用 `http.createServer` 方法创建一个 HTTP 服务器。

```javascript
const http = require("http");

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

// 监听 3000 端口
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

#### **2. 处理请求**
- **`req`**：请求对象，包含请求的详细信息（如 URL、请求头、请求体等）。
- **`res`**：响应对象，用于向客户端发送响应。

```javascript
const server = http.createServer((req, res) => {
  // 获取请求方法和 URL
  const { method, url } = req;

  // 设置响应头
  res.writeHead(200, { "Content-Type": "text/plain" });

  // 根据 URL 返回不同的响应
  if (url === "/") {
    res.end("Welcome to the homepage!");
  } else if (url === "/about") {
    res.end("About page");
  } else {
    res.end("Page not found");
  }
});
```

#### **3. 获取请求体**
使用 `data` 和 `end` 事件获取请求体数据。

```javascript
const server = http.createServer((req, res) => {
  let body = "";

  // 接收请求体数据
  req.on("data", (chunk) => {
    body += chunk;
  });

  // 请求体接收完毕
  req.on("end", () => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ body }));
  });
});
```

---

### **二、创建 HTTP 客户端**
#### **1. 发送 GET 请求**
使用 `http.get` 方法发送 GET 请求。

```javascript
const http = require("http");

http.get("http://jsonplaceholder.typicode.com/posts/1", (res) => {
  let data = "";

  // 接收响应数据
  res.on("data", (chunk) => {
    data += chunk;
  });

  // 响应接收完毕
  res.on("end", () => {
    console.log(JSON.parse(data));
  });
}).on("error", (err) => {
  console.error("Error:", err.message);
});
```

#### **2. 发送 POST 请求**
使用 `http.request` 方法发送 POST 请求。

```javascript
const http = require("http");

const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/posts",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const req = http.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(JSON.parse(data));
  });
});

// 发送请求体
req.write(JSON.stringify({
  title: "foo",
  body: "bar",
  userId: 1,
}));

req.end();
```

---

### **三、处理 HTTPS 请求**
Node.js 提供了 `https` 模块，用于处理 HTTPS 请求。用法与 `http` 模块类似。

```javascript
const https = require("https");

https.get("https://jsonplaceholder.typicode.com/posts/1", (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(JSON.parse(data));
  });
}).on("error", (err) => {
  console.error("Error:", err.message);
});
```

---

### **四、实际应用场景**
1. **构建 Web 服务器**
   - 使用 `http` 模块创建简单的 Web 服务器。
   - 结合路由处理不同的请求路径。

2. **构建 RESTful API**
   - 使用 `http` 模块实现 CRUD 操作。
   - 结合 JSON 数据格式处理请求和响应。

3. **代理服务器**
   - 使用 `http` 模块创建代理服务器，转发客户端请求。

4. **爬虫**
   - 使用 `http` 模块发送请求，抓取网页数据。

---

### **五、注意事项**
1. **错误处理**
   - 使用 `req.on("error")` 和 `res.on("error")` 处理请求和响应中的错误。
2. **性能优化**
   - 对于高并发场景，使用 `cluster` 模块创建多进程。
3. **安全性**
   - 使用 `https` 模块处理敏感数据。
   - 防止 XSS、SQL 注入等攻击。

---

### **六、总结**
`http` 模块是 Node.js 的核心模块，提供了创建 HTTP 服务器和客户端的功能。通过 `http` 模块，开发者可以轻松构建 Web 服务器、API 服务、代理服务器等。结合 `https` 模块，还可以处理安全的 HTTPS 请求。掌握 `http` 模块是学习 Node.js 的重要一步。
