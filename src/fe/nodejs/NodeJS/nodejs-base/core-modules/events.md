---
title: events
article: false
order: 4
---

`events` 模块是 Node.js 中用于实现事件驱动编程的核心模块。它提供了 `EventEmitter` 类，用于创建、触发和监听事件。以下是 `events` 模块的详细解析和使用方法。

---

### **1. 引入 events 模块**

```javascript
const EventEmitter = require("events");
```

---

### **2. 创建 EventEmitter 实例**

```javascript
const myEmitter = new EventEmitter();
```

---

### **3. 基本用法**

#### **1. 监听事件**
使用 `on()` 或 `addListener()` 方法监听事件。

```javascript
myEmitter.on("event", () => {
  console.log("An event occurred!");
});
```

#### **2. 触发事件**
使用 `emit()` 方法触发事件。

```javascript
myEmitter.emit("event");
```

#### **3. 只监听一次**
使用 `once()` 方法监听事件，只触发一次。

```javascript
myEmitter.once("event", () => {
  console.log("This will only run once.");
});

myEmitter.emit("event"); // 触发
myEmitter.emit("event"); // 不会触发
```

#### **4. 移除监听器**
使用 `removeListener()` 或 `off()` 方法移除监听器。

```javascript
const callback = () => {
  console.log("An event occurred!");
};

myEmitter.on("event", callback);
myEmitter.emit("event"); // 触发

myEmitter.removeListener("event", callback);
myEmitter.emit("event"); // 不会触发
```

#### **5. 移除所有监听器**
使用 `removeAllListeners()` 方法移除所有监听器。

```javascript
myEmitter.removeAllListeners("event");
```

---

### **4. 传递参数**

可以在触发事件时传递参数。

```javascript
myEmitter.on("event", (arg1, arg2) => {
  console.log(`Args: ${arg1}, ${arg2}`);
});

myEmitter.emit("event", "Hello", "World");
```

---

### **5. 错误处理**

`EventEmitter` 默认会抛出错误事件 `error`，如果没有监听 `error` 事件，程序会崩溃。

#### **示例**
```javascript
myEmitter.on("error", (err) => {
  console.error("An error occurred:", err);
});

myEmitter.emit("error", new Error("Something went wrong"));
```

---

### **6. 获取监听器信息**

#### **1. 获取监听器数量**
使用 `listenerCount()` 方法获取监听器数量。

```javascript
const count = myEmitter.listenerCount("event");
console.log(count);
```

#### **2. 获取监听器列表**
使用 `listeners()` 方法获取监听器列表。

```javascript
const listeners = myEmitter.listeners("event");
console.log(listeners);
```

---

### **7. 继承 EventEmitter**

可以将 `EventEmitter` 继承到自定义类中，使类具有事件驱动功能。

#### **示例**
```javascript
class MyClass extends EventEmitter {
  constructor() {
    super();
  }

  doSomething() {
    this.emit("event", "Hello, World!");
  }
}

const myInstance = new MyClass();
myInstance.on("event", (message) => {
  console.log(message);
});

myInstance.doSomething();
```

---

### **8. 事件优先级**

`EventEmitter` 默认按照监听器的注册顺序触发事件。可以通过 `prependListener()` 或 `prependOnceListener()` 方法将监听器添加到队列头部。

#### **示例**
```javascript
myEmitter.on("event", () => {
  console.log("Listener 1");
});

myEmitter.prependListener("event", () => {
  console.log("Listener 2");
});

myEmitter.emit("event");
// 输出顺序：
// Listener 2
// Listener 1
```

---

### **9. 最大监听器数量**

默认情况下，`EventEmitter` 最多允许为每个事件注册 10 个监听器。可以通过 `setMaxListeners()` 方法修改限制。

#### **示例**
```javascript
myEmitter.setMaxListeners(20);
```

---

### **10. 实际应用场景**

#### **1. 自定义事件**
```javascript
class Logger extends EventEmitter {
  log(message) {
    this.emit("log", message);
  }
}

const logger = new Logger();
logger.on("log", (message) => {
  console.log(`Log: ${message}`);
});

logger.log("Hello, World!");
```

#### **2. 异步任务完成通知**
```javascript
function asyncTask() {
  const emitter = new EventEmitter();
  setTimeout(() => {
    emitter.emit("complete", "Task completed");
  }, 1000);
  return emitter;
}

const task = asyncTask();
task.on("complete", (message) => {
  console.log(message);
});
```

#### **3. 错误处理**
```javascript
class Database extends EventEmitter {
  query(sql) {
    if (!sql) {
      this.emit("error", new Error("SQL query is required"));
      return;
    }
    this.emit("success", "Query executed successfully");
  }
}

const db = new Database();
db.on("error", (err) => {
  console.error("Database error:", err);
});
db.on("success", (message) => {
  console.log(message);
});

db.query("SELECT * FROM users");
```

---

### **11. 总结**

`events` 模块是 Node.js 中实现事件驱动编程的核心工具。通过 `EventEmitter` 类，您可以轻松创建、触发和监听事件，构建灵活、解耦的应用程序。掌握 `events` 模块的使用，可以显著提升代码的可维护性和扩展性。
