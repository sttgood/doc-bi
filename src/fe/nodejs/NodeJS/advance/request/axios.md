---
title: Axios
article: false
order: 3
---

**Axios** 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 Node.js 环境。它提供了简单易用的 API，支持请求和响应的拦截、自动转换 JSON 数据、取消请求等功能，是前端开发中最常用的 HTTP 请求库之一。

---

### **1. Axios 的特点**
1. **基于 Promise**：支持异步操作，可以使用 `async/await` 或 `.then()` 处理请求。
2. **浏览器和 Node.js 支持**：适用于前端和后端开发。
3. **请求和响应拦截器**：可以在请求发送前和响应到达前进行拦截和处理。
4. **自动转换 JSON 数据**：自动将请求和响应的数据转换为 JSON 格式。
5. **取消请求**：支持取消未完成的请求。
6. **并发请求**：支持同时发送多个请求。
7. **CSRF 防护**：内置对 CSRF 攻击的防护。

---

### **2. 安装 Axios**
#### **2.1 使用 npm 安装**
```bash
npm install axios
```

#### **2.2 使用 CDN**
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

---

### **3. Axios 的基本用法**

#### **3.1 发送 GET 请求**
```javascript
axios.get('https://api.example.com/data')
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

#### **3.2 发送 POST 请求**
```javascript
axios.post('https://api.example.com/data', { name: 'Alice', age: 25 })
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

#### **3.3 使用 `async/await`**
```javascript
async function fetchData() {
    try {
        const response = await axios.get('https://api.example.com/data');
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
```

---

### **4. Axios 的配置**
Axios 支持全局配置和请求级别的配置。

#### **4.1 全局配置**
```javascript
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer token';
axios.defaults.timeout = 5000; // 超时时间
```

#### **4.2 请求级别配置**
```javascript
axios.get('/data', {
    params: { id: 1 }, // 查询参数
    headers: { 'X-Custom-Header': 'value' }, // 自定义头部
    timeout: 3000 // 超时时间
});
```

---

### **5. Axios 的拦截器**
拦截器可以在请求发送前和响应到达前进行拦截和处理。

#### **5.1 请求拦截器**
```javascript
axios.interceptors.request.use(config => {
    // 在请求发送前处理
    console.log('Request sent:', config);
    return config;
}, error => {
    // 处理请求错误
    return Promise.reject(error);
});
```

#### **5.2 响应拦截器**
```javascript
axios.interceptors.response.use(response => {
    // 在响应到达前处理
    console.log('Response received:', response);
    return response;
}, error => {
    // 处理响应错误
    return Promise.reject(error);
});
```

---

### **6. Axios 的取消请求**
Axios 支持取消未完成的请求。

#### **6.1 使用 `CancelToken`**
```javascript
const CancelToken = axios.CancelToken;
let cancel;

axios.get('https://api.example.com/data', {
    cancelToken: new CancelToken(c => {
        cancel = c; // 保存取消函数
    })
})
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
        } else {
            console.error('Error:', error);
        }
    });

// 取消请求
cancel('Request canceled by user');
```

#### **6.2 使用 `AbortController`（Axios >= 0.22.0）**
```javascript
const controller = new AbortController();

axios.get('https://api.example.com/data', {
    signal: controller.signal
})
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
        } else {
            console.error('Error:', error);
        }
    });

// 取消请求
controller.abort('Request canceled by user');
```

---

### **7. Axios 的并发请求**
Axios 支持同时发送多个请求。

```javascript
axios.all([
    axios.get('https://api.example.com/data1'),
    axios.get('https://api.example.com/data2')
])
    .then(axios.spread((response1, response2) => {
        console.log('Response 1:', response1.data);
        console.log('Response 2:', response2.data);
    }))
    .catch(error => {
        console.error('Error:', error);
    });
```

---

### **8. Axios 的错误处理**
Axios 的错误对象包含以下属性：
- `message`：错误信息。
- `response`：服务器返回的响应（如果有）。
- `request`：发送的请求（如果有）。
- `config`：请求的配置。

```javascript
axios.get('https://api.example.com/data')
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        if (error.response) {
            // 服务器返回了错误状态码
            console.error('Server error:', error.response.status, error.response.data);
        } else if (error.request) {
            // 请求已发送，但未收到响应
            console.error('No response:', error.request);
        } else {
            // 其他错误
            console.error('Error:', error.message);
        }
    });
```

---

### **9. Axios 的封装**
可以将 Axios 封装为自定义的 HTTP 工具类，简化代码。

```javascript
class HttpClient {
    constructor(baseURL) {
        this.instance = axios.create({ baseURL });
    }

    async get(url, config) {
        try {
            const response = await this.instance.get(url, config);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async post(url, data, config) {
        try {
            const response = await this.instance.post(url, data, config);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    handleError(error) {
        if (error.response) {
            console.error('Server error:', error.response.status, error.response.data);
        } else if (error.request) {
            console.error('No response:', error.request);
        } else {
            console.error('Error:', error.message);
        }
    }
}

const http = new HttpClient('https://api.example.com');
http.get('/data').then(data => console.log('Data:', data));
```

---

### **10. 总结**
- Axios 是一个功能强大、易用的 HTTP 客户端，支持浏览器和 Node.js。
- 提供了请求和响应拦截、自动转换 JSON 数据、取消请求等功能。
- 可以通过全局配置和请求级别配置定制请求行为。
- 支持并发请求和错误处理，适合复杂的应用场景。

掌握 Axios 的使用，可以显著提高前端开发中处理 HTTP 请求的效率和代码质量。
