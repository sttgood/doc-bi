---
title: 自定义错误类型
article: false
order: 3
---

在 JavaScript 中，可以通过继承 `Error` 类来自定义错误类型。自定义错误类型可以帮助我们更好地组织和区分不同类型的错误，并提供更详细的错误信息。以下是自定义错误类型的详细解析和实现方法。

---

### **1. 基本实现**

#### **1.1 继承 Error 类**
通过 `class` 继承 `Error` 类，定义自定义错误类型。

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message); // 调用父类的构造函数
    this.name = "CustomError"; // 设置错误名称
  }
}
```

#### **1.2 使用自定义错误**
```javascript
function validateInput(input) {
  if (!input) {
    throw new CustomError("Input is required!");
  }
}

try {
  validateInput("");
} catch (err) {
  console.error(err.name); // 输出: CustomError
  console.error(err.message); // 输出: Input is required!
}
```

---

### **2. 添加额外属性**

可以为自定义错误类型添加额外的属性，以提供更详细的错误信息。

#### **2.1 添加错误代码**
```javascript
class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "CustomError";
    this.code = code; // 自定义错误代码
  }
}
```

#### **2.2 使用带错误代码的自定义错误**
```javascript
function validateInput(input) {
  if (!input) {
    throw new CustomError("Input is required!", "INPUT_REQUIRED");
  }
}

try {
  validateInput("");
} catch (err) {
  console.error(err.name); // 输出: CustomError
  console.error(err.message); // 输出: Input is required!
  console.error(err.code); // 输出: INPUT_REQUIRED
}
```

---

### **3. 继承自定义错误类型**

可以基于自定义错误类型进一步扩展，创建更具体的错误类型。

#### **3.1 继承自定义错误**
```javascript
class ValidationError extends CustomError {
  constructor(message, code, field) {
    super(message, code);
    this.name = "ValidationError";
    this.field = field; // 添加字段信息
  }
}
```

#### **3.2 使用继承的自定义错误**
```javascript
function validateEmail(email) {
  if (!email) {
    throw new ValidationError("Email is required!", "EMAIL_REQUIRED", "email");
  }
}

try {
  validateEmail("");
} catch (err) {
  console.error(err.name); // 输出: ValidationError
  console.error(err.message); // 输出: Email is required!
  console.error(err.code); // 输出: EMAIL_REQUIRED
  console.error(err.field); // 输出: email
}
```

---

### **4. 实际应用场景**

#### **1. API 错误处理**
在 API 中，可以自定义错误类型来表示不同的 HTTP 错误。

```javascript
class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}

function fetchData() {
  throw new ApiError("Resource not found", 404);
}

try {
  fetchData();
} catch (err) {
  console.error(err.name); // 输出: ApiError
  console.error(err.message); // 输出: Resource not found
  console.error(err.statusCode); // 输出: 404
}
```

#### **2. 表单验证错误**
在表单验证中，可以自定义错误类型来表示不同的验证错误。

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateForm(form) {
  if (!form.username) {
    throw new ValidationError("Username is required!", "username");
  }
}

try {
  validateForm({});
} catch (err) {
  console.error(err.name); // 输出: ValidationError
  console.error(err.message); // 输出: Username is required!
  console.error(err.field); // 输出: username
}
```

#### **3. 数据库操作错误**
在数据库操作中，可以自定义错误类型来表示不同的数据库错误。

```javascript
class DatabaseError extends Error {
  constructor(message, query) {
    super(message);
    this.name = "DatabaseError";
    this.query = query;
  }
}

function queryDatabase(query) {
  throw new DatabaseError("Query failed!", query);
}

try {
  queryDatabase("SELECT * FROM users");
} catch (err) {
  console.error(err.name); // 输出: DatabaseError
  console.error(err.message); // 输出: Query failed!
  console.error(err.query); // 输出: SELECT * FROM users
}
```

---

### **5. 总结**

自定义错误类型是 JavaScript 中一种强大的错误处理机制，它可以帮助我们更好地组织和区分不同类型的错误，并提供更详细的错误信息。通过继承 `Error` 类，我们可以轻松地创建自定义错误类型，并根据需要添加额外的属性。在实际开发中，自定义错误类型可以广泛应用于 API 错误处理、表单验证、数据库操作等场景，提高代码的可读性和可维护性。
