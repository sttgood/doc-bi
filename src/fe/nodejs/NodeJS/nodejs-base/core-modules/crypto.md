---
title: zlib
article: false
order: 19
---

**Node.js 的 `crypto` 模块** 是用于实现加密和解密功能的核心模块。它提供了对哈希、HMAC、加密、解密、签名和验证等功能的支持，适用于数据安全、密码学应用等场景。

---

### **1. 引入 `crypto` 模块**
```javascript
const crypto = require('crypto');
```

---

### **2. `crypto` 模块的常用功能**

#### **2.1 哈希算法**
哈希算法用于生成数据的固定长度的摘要（digest），常用于数据完整性校验和密码存储。

| 方法                           | 描述                 |
| ------------------------------ | -------------------- |
| `crypto.createHash(algorithm)` | 创建哈希对象。       |
| `hash.update(data)`            | 向哈希对象添加数据。 |
| `hash.digest([encoding])`      | 计算哈希值并返回。   |

```javascript
const hash = crypto.createHash('sha256');
hash.update('Hello, World!');
console.log(hash.digest('hex')); // 输出: 64 位哈希值
```

#### **2.2 HMAC**
HMAC（基于哈希的消息认证码）用于生成带密钥的哈希值，常用于数据完整性和身份验证。

| 方法                                | 描述                   |
| ----------------------------------- | ---------------------- |
| `crypto.createHmac(algorithm, key)` | 创建 HMAC 对象。       |
| `hmac.update(data)`                 | 向 HMAC 对象添加数据。 |
| `hmac.digest([encoding])`           | 计算 HMAC 值并返回。   |

```javascript
const hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update('Hello, World!');
console.log(hmac.digest('hex')); // 输出: 64 位 HMAC 值
```

#### **2.3 加密和解密**
`crypto` 模块支持对称加密算法（如 AES）和非对称加密算法（如 RSA）。

##### **2.3.1 对称加密（AES）**
```javascript
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// 加密
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, World!', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

// 解密
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);
```

##### **2.3.2 非对称加密（RSA）**
```javascript
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});

// 加密
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from('Hello, World!'));
console.log('Encrypted:', encrypted.toString('hex'));

// 解密
const decrypted = crypto.privateDecrypt(privateKey, encrypted);
console.log('Decrypted:', decrypted.toString('utf8'));
```

#### **2.4 签名和验证**
签名和验证用于确保数据的完整性和来源。

##### **2.4.1 签名**
```javascript
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});

const sign = crypto.createSign('sha256');
sign.update('Hello, World!');
const signature = sign.sign(privateKey, 'hex');
console.log('Signature:', signature);
```

##### **2.4.2 验证**
```javascript
const verify = crypto.createVerify('sha256');
verify.update('Hello, World!');
const isValid = verify.verify(publicKey, signature, 'hex');
console.log('Is valid:', isValid); // 输出: true
```

#### **2.5 随机数生成**
`crypto` 模块提供了生成安全随机数的方法。

| 方法                       | 描述                     |
| -------------------------- | ------------------------ |
| `crypto.randomBytes(size)` | 生成指定长度的随机字节。 |

```javascript
const randomBytes = crypto.randomBytes(16);
console.log('Random bytes:', randomBytes.toString('hex'));
```

---

### **3. 示例：密码哈希和验证**
使用 `crypto` 模块实现密码的哈希存储和验证。

#### **3.1 密码哈希**
```javascript
function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return { salt, hash };
}

const { salt, hash } = hashPassword('my-password');
console.log('Salt:', salt);
console.log('Hash:', hash);
```

#### **3.2 密码验证**
```javascript
function verifyPassword(password, salt, hash) {
    const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return verifyHash === hash;
}

const isValid = verifyPassword('my-password', salt, hash);
console.log('Is valid:', isValid); // 输出: true
```

---

### **4. 注意事项**
1. **密钥管理**：加密密钥和私钥需要安全存储，避免泄露。
2. **算法选择**：根据场景选择合适的加密算法和哈希算法。
3. **性能优化**：加密和解密操作可能消耗较多 CPU 资源，需根据实际情况优化。
4. **随机数生成**：使用 `crypto.randomBytes()` 生成安全的随机数。

---

### **5. 总结**
- `crypto` 模块是 Node.js 中实现加密和解密功能的核心工具。
- 支持哈希、HMAC、加密、解密、签名和验证等功能。
- 适用于数据安全、密码学应用等场景。
- 掌握 `crypto` 模块的使用，可以显著提升应用的安全性和可靠性。
