---
title: Cookie、localStorage、sessionStorage
article: false
order: 1
---
`Cookie`、`localStorage` 和 `sessionStorage` 是浏览器中用于存储数据的三种机制。它们各有特点和适用场景，以下是它们的详细对比和说明。

---

### **一、Cookie**
#### **1. 特点**
- **存储大小**：每个域名下最多 4KB。
- **生命周期**：可以设置过期时间（`Expires` 或 `Max-Age`），未设置时默认为会话级别（关闭浏览器后失效）。
- **作用域**：可以设置 `Domain` 和 `Path`，控制 Cookie 的作用范围。
- **自动发送**：每次请求都会自动携带 Cookie，增加网络开销。
- **安全性**：可以设置 `HttpOnly`（禁止 JavaScript 访问）和 `Secure`（仅通过 HTTPS 传输）。

#### **2. 使用场景**
- 用户身份验证（如 Session ID）。
- 跟踪用户行为（如广告追踪）。

#### **3. 示例**
```javascript
// 设置 Cookie
document.cookie = "username=John; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

// 读取 Cookie
console.log(document.cookie); // 输出: username=John

// 删除 Cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

---

### **二、localStorage**
#### **1. 特点**
- **存储大小**：每个域名下最多 5MB。
- **生命周期**：持久化存储，除非手动删除，否则不会失效。
- **作用域**：仅在同一域名下共享。
- **手动发送**：不会自动发送到服务器，减少网络开销。
- **安全性**：只能通过 JavaScript 访问。

#### **2. 使用场景**
- 持久化存储用户偏好设置。
- 缓存静态数据。

#### **3. 示例**
```javascript
// 设置数据
localStorage.setItem("theme", "dark");

// 读取数据
console.log(localStorage.getItem("theme")); // 输出: dark

// 删除数据
localStorage.removeItem("theme");

// 清空所有数据
localStorage.clear();
```

---

### **三、sessionStorage**
#### **1. 特点**
- **存储大小**：每个域名下最多 5MB。
- **生命周期**：会话级别，关闭浏览器或标签页后失效。
- **作用域**：仅在当前标签页下共享。
- **手动发送**：不会自动发送到服务器，减少网络开销。
- **安全性**：只能通过 JavaScript 访问。

#### **2. 使用场景**
- 临时存储表单数据。
- 会话级别的数据存储。

#### **3. 示例**
```javascript
// 设置数据
sessionStorage.setItem("formData", JSON.stringify({ name: "John", age: 25 }));

// 读取数据
console.log(JSON.parse(sessionStorage.getItem("formData"))); // 输出: { name: "John", age: 25 }

// 删除数据
sessionStorage.removeItem("formData");

// 清空所有数据
sessionStorage.clear();
```

---

### **四、对比**

| **特性**     | **Cookie**                    | **localStorage**                 | **sessionStorage**             |
| ------------ | ----------------------------- | -------------------------------- | ------------------------------ |
| **存储大小** | 4KB                           | 5MB                              | 5MB                            |
| **生命周期** | 可设置过期时间或会话级别      | 持久化存储，除非手动删除         | 会话级别，关闭标签页后失效     |
| **作用域**   | 可设置 `Domain` 和 `Path`     | 同一域名下共享                   | 当前标签页下共享               |
| **自动发送** | 是                            | 否                               | 否                             |
| **安全性**   | 可设置 `HttpOnly` 和 `Secure` | 只能通过 JavaScript 访问         | 只能通过 JavaScript 访问       |
| **使用场景** | 身份验证、用户行为跟踪        | 持久化存储用户偏好设置、缓存数据 | 临时存储表单数据、会话级别数据 |

---

### **五、总结**
- **Cookie**：适合存储小量数据，支持自动发送和安全性设置，但会增加网络开销。
- **localStorage**：适合持久化存储较大数据，不会自动发送到服务器。
- **sessionStorage**：适合临时存储数据，关闭标签页后失效。

根据实际需求选择合适的存储机制，可以提高应用的性能和用户体验。
