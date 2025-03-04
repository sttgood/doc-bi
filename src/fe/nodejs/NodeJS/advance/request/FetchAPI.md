---
title: Fetch API
article: false
order: 2
---

`Fetch API` 是浏览器原生提供的用于发起网络请求的接口，基于 `Promise` 实现。它提供了一种更现代、更强大的方式来替代传统的 `XMLHttpRequest`。以下是 `Fetch API` 的详细解析和使用方法。

---

### **1. Fetch API 的基本用法**

#### **发起 GET 请求**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // 将响应解析为 JSON
  })
  .then((data) => console.log(data)) // 处理数据
  .catch((error) => console.error("Error:", error)); // 捕获错误
```

#### **发起 POST 请求**
```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // 设置请求头
  },
  body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }), // 请求体
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

---

### **2. Fetch API 的核心概念**

#### **1. Response 对象**
`fetch()` 返回一个 `Promise`，解析为 `Response` 对象。`Response` 对象包含以下常用属性和方法：
- `response.ok`：布尔值，表示请求是否成功（状态码 200-299）。
- `response.status`：HTTP 状态码（如 200、404 等）。
- `response.statusText`：状态文本（如 "OK"、"Not Found" 等）。
- `response.headers`：响应头信息。
- `response.json()`：将响应解析为 JSON。
- `response.text()`：将响应解析为文本。
- `response.blob()`：将响应解析为 Blob 对象。

#### **2. 请求配置**
`fetch()` 的第二个参数是一个配置对象，支持以下常用选项：
- `method`：请求方法（如 "GET"、"POST" 等）。
- `headers`：请求头（如 `{ "Content-Type": "application/json" }`）。
- `body`：请求体（通常用于 POST、PUT 请求）。
- `mode`：请求模式（如 "cors"、"no-cors"、"same-origin"）。
- `credentials`：是否发送 cookies（如 "include"、"same-origin"）。
- `cache`：缓存模式（如 "default"、"no-cache"、"reload"）。

---

### **3. Fetch API 的高级用法**

#### **1. 处理错误**
默认情况下，`fetch()` 不会将 HTTP 错误状态码（如 404、500）视为错误，需要手动处理：
```javascript
fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### **2. 设置超时**
`fetch()` 本身不支持超时设置，但可以通过 `Promise.race()` 实现：
```javascript
const timeout = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms));

Promise.race([fetch("https://jsonplaceholder.typicode.com/posts"), timeout(5000)])
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### **3. 上传文件**
使用 `FormData` 上传文件：
```javascript
const formData = new FormData();
formData.append("file", fileInput.files[0]);

fetch("https://example.com/upload", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### **4. 处理流式数据**
`Fetch API` 支持流式数据处理，适用于大文件下载或实时数据流：
```javascript
fetch("https://example.com/large-file")
  .then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        function push() {
          reader.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            controller.enqueue(value);
            push();
          });
        }
        push();
      },
    });
  })
  .then((stream) => new Response(stream))
  .then((response) => response.blob())
  .then((blob) => console.log(blob))
  .catch((error) => console.error("Error:", error));
```

---

### **4. Fetch API 的优缺点**

#### **优点**
- **原生支持**：现代浏览器内置，无需额外引入库。
- **基于 Promise**：支持链式调用和异步操作。
- **简洁易用**：语法简单，易于上手。
- **流式数据处理**：支持流式数据读取和处理。

#### **缺点**
- **错误处理**：默认不会将 HTTP 错误状态码视为错误，需要手动处理。
- **不支持请求取消**：原生不支持请求取消，需要借助 `AbortController`。
- **不支持拦截器**：原生不支持请求和响应拦截器。
- **JSON 数据转换**：需要手动调用 `response.json()` 解析 JSON 数据。

---

### **5. Fetch API 与 Axios 的对比**

| 特性               | Fetch API                            | Axios                          |
| ------------------ | ------------------------------------ | ------------------------------ |
| **原生支持**       | 是                                   | 否（需要引入库）               |
| **基于 Promise**   | 是                                   | 是                             |
| **自动 JSON 转换** | 否（需要手动调用 `response.json()`） | 是                             |
| **错误处理**       | 需要手动处理 HTTP 错误状态码         | 自动将 HTTP 错误状态码视为错误 |
| **请求取消**       | 不支持（需使用 `AbortController`）   | 支持                           |
| **超时设置**       | 不支持（需手动实现）                 | 支持                           |
| **拦截器**         | 不支持                               | 支持                           |
| **跨平台支持**     | 仅浏览器                             | 浏览器和 Node.js               |

---

### **6. 参考资料**

1. **官方文档**：
   - [MDN Web Docs: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
2. **教程**：
   - [Google Developers: Fetch API](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
3. **开源项目**：
   - [Fetch Polyfill](https://github.com/github/fetch)

---

通过掌握 `Fetch API`，您可以更高效地处理网络请求，并在现代浏览器中实现更强大的功能。
