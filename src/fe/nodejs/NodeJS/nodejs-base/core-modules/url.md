---
title: url
article: false
order: 10
---

**Node.js 的 `url` 模块** 是用于解析和格式化 URL 的核心模块。它提供了一组工具方法来处理 URL 字符串，提取或修改其中的各个部分（如协议、主机名、路径、查询参数等）。`url` 模块是处理网络请求和路由的重要工具。

---

### **1. 引入 `url` 模块**
```javascript
const url = require('url');
```

---

### **2. `url` 模块的常用方法**

#### **2.1 `url.parse(urlString[, parseQueryString[, slashesDenoteHost]])`**
将 URL 字符串解析为一个对象。

| 参数                | 描述                                               |
| ------------------- | -------------------------------------------------- |
| `urlString`         | 要解析的 URL 字符串。                              |
| `parseQueryString`  | 是否将查询字符串解析为对象（默认 `false`）。       |
| `slashesDenoteHost` | 是否将 `//` 后的部分解析为主机名（默认 `false`）。 |

```javascript
const urlString = 'https://www.example.com:8080/path?query=string#hash';
const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl);
// 输出:
// {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.example.com:8080',
//   port: '8080',
//   hostname: 'www.example.com',
//   hash: '#hash',
//   search: '?query=string',
//   query: { query: 'string' },
//   pathname: '/path',
//   path: '/path?query=string',
//   href: 'https://www.example.com:8080/path?query=string#hash'
// }
```

#### **2.2 `url.format(urlObject)`**
将 URL 对象格式化为字符串。

```javascript
const urlObject = {
    protocol: 'https:',
    host: 'www.example.com:8080',
    pathname: '/path',
    search: 'query=string',
    hash: 'hash'
};

const formattedUrl = url.format(urlObject);
console.log(formattedUrl); // 输出: https://www.example.com:8080/path?query=string#hash
```

#### **2.3 `url.resolve(from, to)`**
解析相对 URL。

```javascript
const resolvedUrl = url.resolve('https://www.example.com/path', 'new/path');
console.log(resolvedUrl); // 输出: https://www.example.com/new/path
```

#### **2.4 `new URL(input[, base])`**
使用 `URL` 类解析 URL（Node.js >= 10.0.0）。

```javascript
const myUrl = new URL('https://www.example.com:8080/path?query=string#hash');
console.log(myUrl);
// 输出:
// URL {
//   href: 'https://www.example.com:8080/path?query=string#hash',
//   origin: 'https://www.example.com:8080',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'www.example.com:8080',
//   hostname: 'www.example.com',
//   port: '8080',
//   pathname: '/path',
//   search: '?query=string',
//   searchParams: URLSearchParams { 'query' => 'string' },
//   hash: '#hash'
// }
```

#### **2.5 `url.URLSearchParams`**
用于处理 URL 查询字符串。

```javascript
const params = new url.URLSearchParams('query=string&foo=bar');
console.log(params.get('query')); // 输出: string
console.log(params.toString()); // 输出: query=string&foo=bar
```

---

### **3. URL 对象的属性**
URL 对象包含以下属性：

| 属性       | 描述                                                      |
| ---------- | --------------------------------------------------------- |
| `href`     | 完整的 URL。                                              |
| `protocol` | 协议（如 `https:`）。                                     |
| `host`     | 主机名和端口（如 `www.example.com:8080`）。               |
| `hostname` | 主机名（如 `www.example.com`）。                          |
| `port`     | 端口号（如 `8080`）。                                     |
| `pathname` | 路径部分（如 `/path`）。                                  |
| `search`   | 查询字符串（如 `?query=string`）。                        |
| `query`    | 查询参数（字符串或对象）。                                |
| `hash`     | 哈希部分（如 `#hash`）。                                  |
| `origin`   | 协议、主机名和端口（如 `https://www.example.com:8080`）。 |
| `username` | 用户名（如 `user`）。                                     |
| `password` | 密码（如 `pass`）。                                       |

---

### **4. 示例：解析和操作 URL**

#### **4.1 解析 URL**
```javascript
const urlString = 'https://user:pass@www.example.com:8080/path?query=string#hash';
const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl.protocol); // 输出: https:
console.log(parsedUrl.host); // 输出: www.example.com:8080
console.log(parsedUrl.pathname); // 输出: /path
console.log(parsedUrl.query); // 输出: { query: 'string' }
```

#### **4.2 修改 URL**
```javascript
const myUrl = new URL('https://www.example.com/path');
myUrl.protocol = 'http:';
myUrl.hostname = 'newexample.com';
myUrl.searchParams.set('newQuery', 'newValue');

console.log(myUrl.href); // 输出: http://newexample.com/path?newQuery=newValue
```

#### **4.3 处理查询参数**
```javascript
const params = new url.URLSearchParams('query=string&foo=bar');
params.append('newParam', 'value');
params.delete('foo');

console.log(params.toString()); // 输出: query=string&newParam=value
```

---

### **5. 总结**
- `url` 模块是 Node.js 中处理 URL 的核心工具。
- 提供了 `url.parse()`、`url.format()`、`url.resolve()` 等方法。
- `URL` 类（Node.js >= 10.0.0）提供了更现代的 URL 解析和操作方式。
- `URLSearchParams` 类用于处理查询字符串。

掌握 `url` 模块的使用，可以更高效地处理 URL，提升网络编程和路由管理的效率。
