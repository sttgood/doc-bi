---
title: XMLHttpRequest
article: false
order: 1
---
`XMLHttpRequest`（XHR）是浏览器提供的用于与服务器进行异步通信的 API。它允许在不刷新页面的情况下向服务器发送请求并接收响应，是实现 AJAX（Asynchronous JavaScript and XML）的核心技术。以下是关于 `XMLHttpRequest` 的详细说明和示例。

---

### **一、基本用法**
#### **1. 创建 XHR 对象**
```javascript
const xhr = new XMLHttpRequest();
```

#### **2. 初始化请求**
使用 `open` 方法初始化请求，指定请求方法、URL 和是否异步。

```javascript
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
```

#### **3. 发送请求**
使用 `send` 方法发送请求。对于 `POST` 请求，可以在 `send` 中传递请求体。

```javascript
xhr.send();
```

#### **4. 处理响应**
通过监听 `readystatechange` 事件处理响应。

```javascript
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText); // 输出响应数据
  }
};
```

---

### **二、XHR 的属性和方法**
#### **1. 属性**
- **`readyState`**：请求的状态。
  - `0`：未初始化（`open` 未调用）。
  - `1`：已打开（`open` 已调用）。
  - `2`：已发送（`send` 已调用）。
  - `3`：接收中（响应头已接收）。
  - `4`：完成（响应数据已接收）。
- **`status`**：HTTP 状态码（如 `200` 表示成功）。
- **`statusText`**：HTTP 状态文本（如 `"OK"`）。
- **`responseText`**：响应数据（字符串格式）。
- **`responseXML`**：响应数据（XML 格式，如果响应内容是 XML）。
- **`responseType`**：设置响应数据的类型（如 `"json"`、`"text"`、`"blob"` 等）。
- **`response`**：根据 `responseType` 返回的响应数据。

#### **2. 方法**
- **`open(method, url, async)`**：初始化请求。
  - `method`：请求方法（如 `"GET"`、`"POST"`）。
  - `url`：请求的 URL。
  - `async`：是否异步（默认为 `true`）。
- **`send(body)`**：发送请求。
  - `body`：请求体（用于 `POST` 或 `PUT` 请求）。
- **`setRequestHeader(header, value)`**：设置请求头。
- **`abort()`**：中止请求。
- **`getResponseHeader(header)`**：获取响应头。
- **`getAllResponseHeaders()`**：获取所有响应头。

---

### **三、示例**
#### **1. GET 请求**
```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```

#### **2. POST 请求**
```javascript
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send(JSON.stringify({ title: "foo", body: "bar", userId: 1 }));
```

#### **3. 处理错误**
```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/invalid-url", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.error("Error:", xhr.status, xhr.statusText);
    }
  }
};
xhr.send();
```

#### **4. 设置超时**
```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.timeout = 5000; // 设置超时时间为 5 秒
xhr.ontimeout = function () {
  console.error("Request timed out");
};
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```

---

### **四、实际应用场景**
#### **1. 表单提交**
使用 XHR 提交表单数据，避免页面刷新。

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/submit", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert("Form submitted successfully!");
    }
  };
  xhr.send(JSON.stringify({ name: form.name.value, email: form.email.value }));
});
```

#### **2. 加载数据**
使用 XHR 动态加载数据并更新页面。

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);
    const container = document.querySelector("#posts");
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.textContent = post.title;
      container.appendChild(div);
    });
  }
};
xhr.send();
```

---

### **五、注意事项**
1. **跨域问题**：XHR 默认遵循同源策略，跨域请求需要服务器支持 CORS 或使用 JSONP。
2. **兼容性**：现代浏览器支持 XHR，但更推荐使用 `fetch` API。
3. **性能问题**：频繁使用 XHR 可能会影响性能，建议合理使用缓存和节流。

---

### **六、总结**
- `XMLHttpRequest` 是浏览器提供的用于异步通信的 API。
- 支持 GET、POST 等请求方法，可以设置请求头、处理响应和错误。
- 适用于表单提交、动态加载数据等场景。
- 注意跨域问题和性能优化。

虽然现代开发中更推荐使用 `fetch` API，但了解 `XMLHttpRequest` 仍然有助于理解 AJAX 的工作原理。
