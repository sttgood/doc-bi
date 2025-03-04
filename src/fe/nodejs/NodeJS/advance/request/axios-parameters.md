---
title: Axios参数
article: false
order: 4
---

在 Axios 中，请求参数可以通过多种方式传递，具体取决于请求的类型（如 `GET`、`POST` 等）和参数的类型（如查询参数、请求体参数等）。以下是 Axios 请求参数的详细说明。

---

### **1. GET 请求参数**
GET 请求的参数通常作为查询字符串附加到 URL 中。Axios 提供了两种方式传递 GET 请求参数：

#### **1.1 直接在 URL 中传递参数**
```javascript
axios.get('https://api.example.com/data?id=1&name=Alice')
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

#### **1.2 使用 `params` 配置项**
```javascript
axios.get('https://api.example.com/data', {
    params: {
        id: 1,
        name: 'Alice'
    }
})
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

---

### **2. POST 请求参数**
POST 请求的参数通常作为请求体（body）发送。Axios 会自动将请求体转换为 JSON 格式。

#### **2.1 传递 JSON 数据**
```javascript
axios.post('https://api.example.com/data', {
    name: 'Alice',
    age: 25
})
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

#### **2.2 传递表单数据**
如果需要发送表单数据（`application/x-www-form-urlencoded`），可以使用 `URLSearchParams` 或 `qs` 库。

```javascript
const params = new URLSearchParams();
params.append('name', 'Alice');
params.append('age', '25');

axios.post('https://api.example.com/data', params)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

---

### **3. PUT 和 PATCH 请求参数**
PUT 和 PATCH 请求的参数传递方式与 POST 请求类似。

#### **3.1 PUT 请求**
```javascript
axios.put('https://api.example.com/data/1', {
    name: 'Bob',
    age: 30
})
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

#### **3.2 PATCH 请求**
```javascript
axios.patch('https://api.example.com/data/1', {
    age: 31
})
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

---

### **4. DELETE 请求参数**
DELETE 请求的参数可以通过 URL 或 `params` 配置项传递。

#### **4.1 在 URL 中传递参数**
```javascript
axios.delete('https://api.example.com/data/1')
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

#### **4.2 使用 `params` 配置项**
```javascript
axios.delete('https://api.example.com/data', {
    params: {
        id: 1
    }
})
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

---

### **5. 请求头参数**
可以通过 `headers` 配置项设置请求头。

```javascript
axios.get('https://api.example.com/data', {
    headers: {
        'Authorization': 'Bearer token',
        'X-Custom-Header': 'value'
    }
})
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

---

### **6. 请求配置**
Axios 支持多种请求配置项，以下是一些常用的配置：

| 配置项            | 描述                                   |
| ----------------- | -------------------------------------- |
| `url`             | 请求的 URL。                           |
| `method`          | 请求方法（如 `GET`、`POST` 等）。      |
| `params`          | GET 请求的查询参数。                   |
| `data`            | POST/PUT/PATCH 请求的请求体数据。      |
| `headers`         | 自定义请求头。                         |
| `timeout`         | 请求超时时间（毫秒）。                 |
| `responseType`    | 响应数据类型（如 `json`、`text` 等）。 |
| `withCredentials` | 是否携带跨域凭证（如 cookies）。       |

#### **6.1 示例**
```javascript
axios({
    method: 'post',
    url: 'https://api.example.com/data',
    data: {
        name: 'Alice',
        age: 25
    },
    headers: {
        'Authorization': 'Bearer token'
    },
    timeout: 5000
})
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

---

### **7. 默认配置**
可以设置 Axios 的默认配置，避免重复配置。

```javascript
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer token';
axios.defaults.timeout = 5000;

axios.get('/data')
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

---

### **8. 总结**
- **GET 请求**：使用 `params` 配置项或直接在 URL 中传递参数。
- **POST/PUT/PATCH 请求**：使用 `data` 配置项传递请求体数据。
- **DELETE 请求**：通过 URL 或 `params` 配置项传递参数。
- **请求头**：通过 `headers` 配置项设置。
- **请求配置**：支持多种配置项，如 `timeout`、`responseType` 等。

掌握 Axios 请求参数的使用，可以灵活地处理各种 HTTP 请求场景。
