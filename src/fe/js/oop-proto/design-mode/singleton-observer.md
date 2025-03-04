---
title: 单例模式、观察者模式
article: false
order: 2
---
**单例模式**和**观察者模式**是两种常见的设计模式，它们在 JavaScript 开发中有着广泛的应用。以下是它们的详细说明和示例。

---

### **一、单例模式（Singleton Pattern）**
单例模式确保一个类只有一个实例，并提供一个全局访问点。

#### **1. 应用场景**
- 全局共享资源（如配置对象、缓存、数据库连接池等）。
- 避免重复创建对象，节省资源。

#### **2. 实现方式**
##### **（1）使用立即执行函数**
```javascript
const Singleton = (function () {
  let instance;

  function createInstance() {
    return {
      message: "I am the singleton instance",
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // 输出: true
```

##### **（2）使用 ES6 类**
```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  logMessage() {
    console.log("I am the singleton instance");
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // 输出: true
instance1.logMessage(); // 输出: I am the singleton instance
```

#### **3. 特点**
- 确保一个类只有一个实例。
- 提供全局访问点。

---

### **二、观察者模式（Observer Pattern）**
观察者模式定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会收到通知并自动更新。

#### **1. 应用场景**
- 事件处理系统（如 DOM 事件、自定义事件）。
- 数据驱动的 UI 更新（如 Vue.js、React.js 的响应式系统）。
- 解耦组件之间的依赖关系。

#### **2. 实现方式**
##### **（1）基本实现**
```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log(`Received data: ${data}`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("Hello, observers!"); // 输出: Received data: Hello, observers!（两次）
```

##### **（2）更灵活的观察者模式**
```javascript
class EventBus {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  unsubscribe(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
  }

  publish(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  }
}

const eventBus = new EventBus();

const callback1 = (data) => {
  console.log(`Callback 1 received: ${data}`);
};

const callback2 = (data) => {
  console.log(`Callback 2 received: ${data}`);
};

eventBus.subscribe("message", callback1);
eventBus.subscribe("message", callback2);

eventBus.publish("message", "Hello, event bus!");
// 输出:
// Callback 1 received: Hello, event bus!
// Callback 2 received: Hello, event bus!

eventBus.unsubscribe("message", callback1);
eventBus.publish("message", "Goodbye, event bus!");
// 输出:
// Callback 2 received: Goodbye, event bus!
```

#### **3. 特点**
- 解耦主题（Subject）和观察者（Observer）。
- 支持动态添加和移除观察者。
- 实现一对多的通知机制。

---

### **三、总结**
| **模式**     | **单例模式**                   | **观察者模式**                     |
| ------------ | ------------------------------ | ---------------------------------- |
| **目的**     | 确保一个类只有一个实例         | 实现一对多的依赖关系，支持状态通知 |
| **应用场景** | 全局共享资源、避免重复创建对象 | 事件处理、数据驱动的 UI 更新       |
| **实现方式** | 立即执行函数、ES6 类           | 主题和观察者、事件总线             |
| **特点**     | 全局访问点、节省资源           | 解耦、动态通知                     |

单例模式和观察者模式是 JavaScript 开发中常用的设计模式，掌握它们可以帮助你更好地组织代码，提高代码的可维护性和可扩展性。
