---
title: 单元测试：Mocha 和 Chai
article: false
order: 3
---

`Mocha` 和 `Chai` 是 JavaScript 中广泛使用的单元测试工具。`Mocha` 是一个测试框架，用于组织和运行测试用例，而 `Chai` 是一个断言库，用于编写更具表现力的断言。以下是 `Mocha` 和 `Chai` 的详细解析和使用方法。

---

### **1. 安装 Mocha 和 Chai**

使用 `npm` 安装 `Mocha` 和 `Chai`：

```bash
npm install --save-dev mocha chai
```

---

### **2. 编写测试用例**

#### **2.1 基本结构**
`Mocha` 使用 `describe` 和 `it` 来组织测试用例：
- `describe`：用于分组测试用例。
- `it`：用于定义单个测试用例。

#### **2.2 示例代码**
假设有一个简单的函数 `add`，我们为其编写测试用例。

```javascript
// src/math.js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

```javascript
// test/math.test.js
const chai = require("chai");
const expect = chai.expect;
const add = require("../src/math");

describe("Math", () => {
  describe("add", () => {
    it("should return the sum of two numbers", () => {
      expect(add(1, 2)).to.equal(3);
    });

    it("should handle negative numbers", () => {
      expect(add(-1, -2)).to.equal(-3);
    });

    it("should throw an error if arguments are not numbers", () => {
      expect(() => add("1", 2)).to.throw("Arguments must be numbers");
    });
  });
});
```

---

### **3. 运行测试**

在 `package.json` 中添加测试脚本：

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

然后运行测试：

```bash
npm test
```

---

### **4. Chai 断言库**

`Chai` 提供了多种断言风格，常用的有 `expect`、`should` 和 `assert`。

#### **4.1 expect 风格**
```javascript
const chai = require("chai");
const expect = chai.expect;

expect(add(1, 2)).to.equal(3);
expect({ a: 1 }).to.have.property("a");
expect([1, 2, 3]).to.include(2);
```

#### **4.2 should 风格**
```javascript
const chai = require("chai");
chai.should();

add(1, 2).should.equal(3);
({ a: 1 }).should.have.property("a");
[1, 2, 3].should.include(2);
```

#### **4.3 assert 风格**
```javascript
const chai = require("chai");
const assert = chai.assert;

assert.equal(add(1, 2), 3);
assert.property({ a: 1 }, "a");
assert.include([1, 2, 3], 2);
```

---

### **5. Mocha 的高级功能**

#### **5.1 钩子函数**
`Mocha` 提供了钩子函数，用于在测试前后执行特定操作：
- `before`：在所有测试用例之前执行。
- `after`：在所有测试用例之后执行。
- `beforeEach`：在每个测试用例之前执行。
- `afterEach`：在每个测试用例之后执行。

**示例：**
```javascript
describe("Math", () => {
  before(() => {
    console.log("Before all tests");
  });

  after(() => {
    console.log("After all tests");
  });

  beforeEach(() => {
    console.log("Before each test");
  });

  afterEach(() => {
    console.log("After each test");
  });

  it("should add two numbers", () => {
    expect(add(1, 2)).to.equal(3);
  });
});
```

#### **5.2 异步测试**
`Mocha` 支持异步测试，可以通过以下方式实现：
- 使用 `done` 回调。
- 返回 `Promise`。
- 使用 `async/await`。

**示例：**
```javascript
describe("Async", () => {
  it("should resolve with a value", (done) => {
    setTimeout(() => {
      expect(1 + 1).to.equal(2);
      done();
    }, 100);
  });

  it("should return a promise", () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        expect(1 + 1).to.equal(2);
        resolve();
      }, 100);
    });
  });

  it("should use async/await", async () => {
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve(1 + 1), 100);
    });
    expect(result).to.equal(2);
  });
});
```

#### **5.3 跳过测试**
可以使用 `it.skip` 或 `describe.skip` 跳过某些测试用例。

**示例：**
```javascript
describe("Math", () => {
  it.skip("should add two numbers", () => {
    expect(add(1, 2)).to.equal(3);
  });

  it("should subtract two numbers", () => {
    expect(subtract(3, 1)).to.equal(2);
  });
});
```

---

### **6. 实际应用场景**

#### **1. 测试工具函数**
```javascript
// src/utils.js
function formatDate(date) {
  return date.toISOString();
}

module.exports = formatDate;

// test/utils.test.js
const chai = require("chai");
const expect = chai.expect;
const formatDate = require("../src/utils");

describe("Utils", () => {
  describe("formatDate", () => {
    it("should format a date as ISO string", () => {
      const date = new Date("2023-10-01");
      expect(formatDate(date)).to.equal("2023-10-01T00:00:00.000Z");
    });
  });
});
```

#### **2. 测试 API 接口**
```javascript
// src/api.js
const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }]);
});

module.exports = app;

// test/api.test.js
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../src/api");

chai.use(chaiHttp);

describe("API", () => {
  describe("GET /api/users", () => {
    it("should return a list of users", (done) => {
      chai
        .request(app)
        .get("/api/users")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        });
    });
  });
});
```

---

### **7. 总结**

- **Mocha**：用于组织和运行测试用例，支持同步和异步测试。
- **Chai**：提供多种断言风格，使测试代码更具表现力。
- **实际应用**：适用于测试工具函数、API 接口、数据库操作等场景。

通过掌握 `Mocha` 和 `Chai`，可以编写高效、可靠的单元测试，确保代码的质量和稳定性。
