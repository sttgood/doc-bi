---
title: mongoose-MongoDB
article: false
order: 3
---
**Mongoose** 是一个用于 Node.js 的 MongoDB 对象建模工具，它提供了对 MongoDB 数据库的操作封装，支持定义模式（Schema）、模型（Model）、验证、中间件等功能。使用 Mongoose 可以更方便地操作 MongoDB 数据库。

---

### **1. 安装 Mongoose**
使用 npm 或 yarn 安装 Mongoose。

```bash
npm install mongoose
```

---

### **2. 连接 MongoDB**

#### **2.1 基本连接**
使用 `mongoose.connect()` 方法连接 MongoDB 数据库。

```javascript
const mongoose = require('mongoose');

// 连接 MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 监听连接成功事件
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

// 监听连接错误事件
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// 监听连接断开事件
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
```

#### **2.2 连接选项**
`mongoose.connect()` 支持以下常用选项：

| 选项                 | 描述                                               |
| -------------------- | -------------------------------------------------- |
| `useNewUrlParser`    | 使用新的 URL 解析器。                              |
| `useUnifiedTopology` | 使用新的服务器发现和监视引擎。                     |
| `useCreateIndex`     | 使用 `createIndex()` 代替 `ensureIndex()`。        |
| `useFindAndModify`   | 使用 `findOneAndUpdate()` 代替 `findAndModify()`。 |

---

### **3. 定义模式和模型**

#### **3.1 定义模式**
使用 `mongoose.Schema` 定义数据结构。

```javascript
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        min: 18
    }
});
```

#### **3.2 定义模型**
使用 `mongoose.model()` 将模式编译为模型。

```javascript
const User = mongoose.model('User', userSchema);
```

---

### **4. 操作数据库**

#### **4.1 插入数据**
使用模型的 `create()` 或 `save()` 方法插入数据。

```javascript
const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25
});

newUser.save((err, user) => {
    if (err) return console.error(err);
    console.log('User saved:', user);
});
```

#### **4.2 查询数据**
使用模型的 `find()`、`findOne()` 等方法查询数据。

```javascript
// 查询所有用户
User.find({}, (err, users) => {
    if (err) return console.error(err);
    console.log('Users:', users);
});

// 查询单个用户
User.findOne({ email: 'john@example.com' }, (err, user) => {
    if (err) return console.error(err);
    console.log('User found:', user);
});
```

#### **4.3 更新数据**
使用模型的 `updateOne()`、`findOneAndUpdate()` 等方法更新数据。

```javascript
User.updateOne({ email: 'john@example.com' }, { age: 30 }, (err, result) => {
    if (err) return console.error(err);
    console.log('User updated:', result);
});
```

#### **4.4 删除数据**
使用模型的 `deleteOne()`、`findOneAndDelete()` 等方法删除数据。

```javascript
User.deleteOne({ email: 'john@example.com' }, (err) => {
    if (err) return console.error(err);
    console.log('User deleted');
});
```

---

### **5. 高级功能**

#### **5.1 验证**
在模式中定义验证规则。

```javascript
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/ // 验证邮箱格式
    },
    age: {
        type: Number,
        min: 18
    }
});
```

#### **5.2 中间件**
在模式中定义中间件。

```javascript
userSchema.pre('save', function (next) {
    console.log('Saving user:', this.name);
    next();
});

userSchema.post('save', function (doc, next) {
    console.log('User saved:', doc.name);
    next();
});
```

#### **5.3 虚拟属性**
定义虚拟属性。

```javascript
userSchema.virtual('fullName').get(function () {
    return `${this.name} (${this.age})`;
});

const user = new User({ name: 'John Doe', age: 25 });
console.log(user.fullName); // 输出: John Doe (25)
```

#### **5.4 索引**
在模式中定义索引。

```javascript
userSchema.index({ email: 1 }, { unique: true });
```

---

### **6. 断开连接**
使用 `mongoose.disconnect()` 断开与 MongoDB 的连接。

```javascript
mongoose.disconnect();
```

---

### **7. 完整示例**

```javascript
const mongoose = require('mongoose');

// 连接 MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 定义模式
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, min: 18 }
});

// 定义模型
const User = mongoose.model('User', userSchema);

// 插入数据
const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25
});

newUser.save((err, user) => {
    if (err) return console.error(err);
    console.log('User saved:', user);

    // 查询数据
    User.find({}, (err, users) => {
        if (err) return console.error(err);
        console.log('Users:', users);

        // 断开连接
        mongoose.disconnect();
    });
});
```

---

### **8. 总结**
- **Mongoose** 是一个强大的 MongoDB 对象建模工具。
- 支持定义模式、模型、验证、中间件等功能。
- 提供了简单易用的 API 来操作 MongoDB 数据库。
- 适合用于构建复杂的 Node.js 应用。

掌握 Mongoose 的使用，可以更高效地操作 MongoDB 数据库，提升开发效率和代码质量。
