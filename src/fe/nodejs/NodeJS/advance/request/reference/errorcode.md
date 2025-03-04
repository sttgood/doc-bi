---
title: 错误码
article: false
---

网络错误码是 HTTP 协议中用于表示请求状态的三位数字代码。它们分为五类，分别以不同的数字开头。以下是常见的网络错误码及其含义。

---

### **一、1xx（信息性状态码）**
表示请求已被接收，继续处理。

| **状态码** | **含义**                        |
| ---------- | ------------------------------- |
| 100        | Continue（继续）                |
| 101        | Switching Protocols（切换协议） |
| 102        | Processing（处理中）            |

---

### **二、2xx（成功状态码）**
表示请求已成功被服务器接收、理解并处理。

| **状态码** | **含义**                                    |
| ---------- | ------------------------------------------- |
| 200        | OK（成功）                                  |
| 201        | Created（已创建）                           |
| 202        | Accepted（已接受）                          |
| 203        | Non-Authoritative Information（非授权信息） |
| 204        | No Content（无内容）                        |
| 205        | Reset Content（重置内容）                   |
| 206        | Partial Content（部分内容）                 |

---

### **三、3xx（重定向状态码）**
表示需要客户端进一步操作以完成请求。

| **状态码** | **含义**                         |
| ---------- | -------------------------------- |
| 300        | Multiple Choices（多种选择）     |
| 301        | Moved Permanently（永久重定向）  |
| 302        | Found（临时重定向）              |
| 303        | See Other（查看其他位置）        |
| 304        | Not Modified（未修改）           |
| 305        | Use Proxy（使用代理）            |
| 307        | Temporary Redirect（临时重定向） |
| 308        | Permanent Redirect（永久重定向） |

---

### **四、4xx（客户端错误状态码）**
表示客户端请求有误，服务器无法处理。

| **状态码** | **含义**                                          |
| ---------- | ------------------------------------------------- |
| 400        | Bad Request（错误请求）                           |
| 401        | Unauthorized（未授权）                            |
| 402        | Payment Required（需要付款）                      |
| 403        | Forbidden（禁止访问）                             |
| 404        | Not Found（未找到）                               |
| 405        | Method Not Allowed（方法不允许）                  |
| 406        | Not Acceptable（不可接受）                        |
| 407        | Proxy Authentication Required（需要代理认证）     |
| 408        | Request Timeout（请求超时）                       |
| 409        | Conflict（冲突）                                  |
| 410        | Gone（已删除）                                    |
| 411        | Length Required（需要长度）                       |
| 412        | Precondition Failed（预处理失败）                 |
| 413        | Payload Too Large（负载过大）                     |
| 414        | URI Too Long（URI 过长）                          |
| 415        | Unsupported Media Type（不支持的媒体类型）        |
| 416        | Range Not Satisfiable（范围无法满足）             |
| 417        | Expectation Failed（期望失败）                    |
| 418        | I'm a teapot（我是茶壶）                          |
| 422        | Unprocessable Entity（无法处理的实体）            |
| 429        | Too Many Requests（请求过多）                     |
| 451        | Unavailable For Legal Reasons（因法律原因不可用） |

---

### **五、5xx（服务器错误状态码）**
表示服务器在处理请求时发生错误。

| **状态码** | **含义**                                        |
| ---------- | ----------------------------------------------- |
| 500        | Internal Server Error（服务器内部错误）         |
| 501        | Not Implemented（未实现）                       |
| 502        | Bad Gateway（错误网关）                         |
| 503        | Service Unavailable（服务不可用）               |
| 504        | Gateway Timeout（网关超时）                     |
| 505        | HTTP Version Not Supported（HTTP 版本不支持）   |
| 507        | Insufficient Storage（存储空间不足）            |
| 508        | Loop Detected（检测到循环）                     |
| 510        | Not Extended（未扩展）                          |
| 511        | Network Authentication Required（需要网络认证） |

---

### **六、常见错误码及解决方法**
| **状态码** | **原因**       | **解决方法**                       |
| ---------- | -------------- | ---------------------------------- |
| 400        | 请求参数错误   | 检查请求参数是否符合 API 要求      |
| 401        | 未授权         | 检查是否已登录或提供正确的认证信息 |
| 403        | 禁止访问       | 检查是否有访问权限                 |
| 404        | 资源未找到     | 检查 URL 是否正确                  |
| 500        | 服务器内部错误 | 联系服务器管理员或检查服务器日志   |
| 502        | 网关错误       | 检查网关配置或联系服务器管理员     |
| 503        | 服务不可用     | 等待服务器恢复或联系服务器管理员   |
| 504        | 网关超时       | 检查网络连接或联系服务器管理员     |

---

### **七、总结**
- **1xx**：信息性状态码，表示请求已被接收。
- **2xx**：成功状态码，表示请求已成功处理。
- **3xx**：重定向状态码，表示需要进一步操作。
- **4xx**：客户端错误状态码，表示请求有误。
- **5xx**：服务器错误状态码，表示服务器处理请求时出错。

了解这些状态码及其含义，可以帮助你更好地调试和解决网络请求中的问题。
