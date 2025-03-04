---
title: ODM
article: false
order: 4
---

`ODM`（Object-Document Mapping，对象文档映射）是一种将对象与文档数据库（如 MongoDB）中的文档进行映射的技术。它类似于关系型数据库中的 `ORM`（Object-Relational Mapping），但适用于 NoSQL 数据库。`ODM` 使得开发者可以使用面向对象的方式来操作数据库，而无需直接编写复杂的查询语句。

在 Node.js 中，`Mongoose` 是最流行的 MongoDB ODM 库。以下是 `Mongoose` 的详细解析和使用方法。

---

### **1. 安装 Mongoose**

使用 `npm` 安装 `Mongoose`：

```bash
npm install mongoose
```

---

### **2. 连接 MongoDB**

#### **2.1 基本连接**
```javascript
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
```

#### **2.2 连接选项**
- `useNewUrlParser`：使用新的 URL 解析器。
- `useUnifiedTopology`：使用新的服务器发现和监视引擎。

---

### **3. 定义模型和模式**

#### **3.1 定义模式**
模式（Schema）用于定义文档的结构。

```javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18 },
  createdAt: { type: Date, default: Date.now },
});
```

#### **3.2 定义模型**
模型（Model）是模式的实例，用于操作数据库中的文档。

```javascript
const User = mongoose.model("User", userSchema);
```

---

### **4. 操作文档**

#### **4.1 创建文档**
```javascript
async function createUser() {
  const user = new User({
    name: "Alice",
    email: "alice@example.com",
    age: 25,
  });

  try {
    const savedUser = await user.save();
    console.log("User created:", savedUser);
  } catch (err) {
    console.error("Error creating user:", err);
  }
}

createUser();
```

#### **4.2 查询文档**
```javascript
async function findUsers() {
  try {
    const users = await User.find({ age: { $gte: 18 } });
    console.log("Users:", users);
  } catch (err) {
    console.error("Error finding users:", err);
  }
}

findUsers();
```

#### **4.3 更新文档**
```javascript
async function updateUser() {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: "alice@example.com" },
      { age: 26 },
      { new: true }
    );
    console.log("Updated user:", updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
  }
}

updateUser();
```

#### **4.4 删除文档**
```javascript
async function deleteUser() {
  try {
    const deletedUser = await User.findOneAndDelete({ email: "alice@example.com" });
    console.log("Deleted user:", deletedUser);
  } catch (err) {
    console.error("Error deleting user:", err);
  }
}

deleteUser();
```

---

### **5. 高级功能**

#### **5.1 虚拟属性**
虚拟属性是不存储在数据库中的属性，但可以通过模型访问。

```javascript
userSchema.virtual("fullName").get(function () {
  return `${this.name} (${this.email})`;
});

const user = new User({ name: "Alice", email: "alice@example.com" });
console.log(user.fullName); // 输出: Alice (alice@example.com)
```

#### **5.2 中间件**
中间件是在执行某些操作（如保存、删除）前后触发的函数。

**示例：保存前自动设置 `createdAt`**
```javascript
userSchema.pre("save", function (next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});
```

#### **5.3 查询构建器**
`Mongoose` 提供了链式查询构建器，可以更灵活地构建查询。

```javascript
User.find()
  .where("age")
  .gte(18)
  .sort("name")
  .select("name email")
  .exec((err, users) => {
    if (err) return console.error(err);
    console.log(users);
  });
```

#### **5.4 聚合**
`Mongoose` 支持 MongoDB 的聚合操作。

```javascript
User.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: "$name", total: { $sum: 1 } } },
]).exec((err, result) => {
  if (err) return console.error(err);
  console.log(result);
});
```

---

### **6. 实际应用场景**

#### **1. 用户管理**
```javascript
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

async function registerUser(username, password, email) {
  const user = new User({ username, password, email });
  try {
    await user.save();
    console.log("User registered successfully!");
  } catch (err) {
    console.error("Error registering user:", err);
  }
}

registerUser("alice", "password123", "alice@example.com");
```

#### **2. 博客系统**
```javascript
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

async function createPost(title, content, authorId) {
  const post = new Post({ title, content, author: authorId });
  try {
    await post.save();
    console.log("Post created successfully!");
  } catch (err) {
    console.error("Error creating post:", err);
  }
}

createPost("My First Post", "This is the content of the post.", "64a1b2c3d4e5f6g7h8i9j0k");
```

---

### **7. 总结**

- **Mongoose** 是 Node.js 中最流行的 MongoDB ODM 库。
- 提供了模式（Schema）、模型（Model）、中间件、虚拟属性等高级功能。
- 适用于用户管理、博客系统、数据聚合等场景。

通过掌握 `Mongoose` 的使用，可以高效地操作 MongoDB 数据库，构建强大的 Node.js 应用。
