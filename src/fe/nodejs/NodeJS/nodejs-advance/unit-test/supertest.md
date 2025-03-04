---
title: 集成测试：Supertest
article: false
order: 4
---

**Supertest** 是一个用于测试 HTTP 请求的 Node.js 库，通常与测试框架（如 Mocha、Jest）结合使用，用于编写集成测试。它简化了 HTTP 请求的发送和响应的断言，非常适合测试 Express 或其他基于 Node.js 的 Web 应用。

---

### **1. 安装 Supertest**
使用 npm 或 yarn 安装 Supertest 和测试框架（如 Mocha）。

```bash
npm install supertest mocha --save-dev
```

---

### **2. 基本用法**

#### **2.1 创建 Express 应用**
首先，创建一个简单的 Express 应用。

```javascript
// app.js
const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

module.exports = app;
```

#### **2.2 编写集成测试**
使用 Supertest 测试 `/api/hello` 路由。

```javascript
// test/app.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /api/hello', () => {
    it('should return "Hello, World!"', (done) => {
        request(app)
            .get('/api/hello')
            .expect(200) // 断言状态码
            .expect({ message: 'Hello, World!' }) // 断言响应体
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
});
```

#### **2.3 运行测试**
使用 Mocha 运行测试。

```bash
npx mocha test/app.test.js
```

---

### **3. 高级用法**

#### **3.1 测试 POST 请求**
测试一个 POST 请求并验证请求体和响应。

```javascript
// app.js
app.use(express.json());

app.post('/api/echo', (req, res) => {
    res.json(req.body);
});

// test/app.test.js
describe('POST /api/echo', () => {
    it('should return the request body', (done) => {
        const body = { message: 'Hello, World!' };

        request(app)
            .post('/api/echo')
            .send(body) // 发送请求体
            .expect(200) // 断言状态码
            .expect(body) // 断言响应体
            .end(done);
    });
});
```

#### **3.2 测试文件上传**
测试文件上传功能。

```javascript
// app.js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json({ filename: req.file.originalname });
});

// test/app.test.js
const fs = require('fs');
const path = require('path');

describe('POST /api/upload', () => {
    it('should upload a file', (done) => {
        const filePath = path.join(__dirname, 'test-file.txt');

        request(app)
            .post('/api/upload')
            .attach('file', filePath) // 上传文件
            .expect(200)
            .expect({ filename: 'test-file.txt' })
            .end(done);
    });
});
```

#### **3.3 测试中间件**
测试中间件的功能。

```javascript
// app.js
app.use((req, res, next) => {
    req.user = { id: 1, name: 'John Doe' };
    next();
});

app.get('/api/user', (req, res) => {
    res.json(req.user);
});

// test/app.test.js
describe('GET /api/user', () => {
    it('should return user information', (done) => {
        request(app)
            .get('/api/user')
            .expect(200)
            .expect({ id: 1, name: 'John Doe' })
            .end(done);
    });
});
```

#### **3.4 测试错误处理**
测试错误处理中间件。

```javascript
// app.js
app.get('/api/error', (req, res, next) => {
    next(new Error('Something went wrong'));
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

// test/app.test.js
describe('GET /api/error', () => {
    it('should handle errors', (done) => {
        request(app)
            .get('/api/error')
            .expect(500)
            .expect({ error: 'Something went wrong' })
            .end(done);
    });
});
```

---

### **4. 结合测试框架**

#### **4.1 使用 Mocha**
Mocha 是一个灵活的测试框架，Supertest 可以无缝集成。

```javascript
// test/app.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /api/hello', () => {
    it('should return "Hello, World!"', async () => {
        const res = await request(app).get('/api/hello');
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { message: 'Hello, World!' });
    });
});
```

#### **4.2 使用 Jest**
Jest 是另一个流行的测试框架，Supertest 也可以与其结合使用。

```javascript
// test/app.test.js
const request = require('supertest');
const app = require('../app');

test('GET /api/hello should return "Hello, World!"', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello, World!' });
});
```

---

### **5. 总结**
- **Supertest** 是一个用于测试 HTTP 请求的库，适合集成测试。
- 支持 GET、POST、PUT、DELETE 等 HTTP 方法。
- 可以测试请求体、响应体、状态码、文件上传等功能。
- 可以与 Mocha、Jest 等测试框架结合使用。
