---
title: 工厂模式、构造函数模式
article: false
order: 1
---
工厂模式和构造函数模式是 JavaScript 中创建对象的两种常见方式。它们各有优缺点，适用于不同的场景。以下是它们的详细解析和对比。

---

### **1. 工厂模式**

#### **什么是工厂模式？**
工厂模式是一种设计模式，通过一个工厂函数来创建对象，而不是直接使用 `new` 关键字。工厂函数封装了对象的创建过程，返回一个新的对象。

#### **特点**
- 不需要使用 `new` 关键字。
- 可以返回任意类型的对象。
- 适合创建多个相似对象。

#### **示例**
```javascript
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}

const person1 = createPerson("Alice", 25);
const person2 = createPerson("Bob", 30);

person1.sayHello(); // 输出: Hello, my name is Alice
person2.sayHello(); // 输出: Hello, my name is Bob
```

#### **优点**
- 简单易用，不需要理解 `this` 和 `new`。
- 可以灵活地返回不同类型的对象。

#### **缺点**
- 无法识别对象的类型（所有对象都是 `Object` 类型）。
- 无法共享方法，每个对象都会创建自己的方法副本。

---

### **2. 构造函数模式**

#### **什么是构造函数模式？**
构造函数模式是通过定义构造函数来创建对象。构造函数是一个普通函数，通常以大写字母开头，通过 `new` 关键字调用。

#### **特点**
- 使用 `new` 关键字调用构造函数。
- 通过 `this` 绑定属性和方法。
- 对象的类型是构造函数本身。

#### **示例**
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.sayHello(); // 输出: Hello, my name is Alice
person2.sayHello(); // 输出: Hello, my name is Bob

console.log(person1 instanceof Person); // 输出: true
```

#### **优点**
- 可以识别对象的类型（通过 `instanceof`）。
- 更符合面向对象编程的习惯。

#### **缺点**
- 每个对象都会创建自己的方法副本，无法共享方法。
- 如果忘记使用 `new`，`this` 会指向全局对象（如 `window`），导致错误。

---

### **3. 构造函数模式优化（共享方法）**

为了避免每个对象都创建自己的方法副本，可以将方法定义在构造函数的 `prototype` 上。

#### **示例**
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 将方法定义在 prototype 上
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.sayHello(); // 输出: Hello, my name is Alice
person2.sayHello(); // 输出: Hello, my name is Bob
```

#### **优点**
- 方法共享，节省内存。
- 依然可以识别对象的类型。

---

### **4. 工厂模式 vs 构造函数模式**

| 特性            | 工厂模式                   | 构造函数模式                        |
| --------------- | -------------------------- | ----------------------------------- |
| **创建方式**    | 调用工厂函数，返回对象     | 使用 `new` 调用构造函数             |
| **对象类型**    | 所有对象都是 `Object` 类型 | 对象类型是构造函数本身              |
| **方法共享**    | 无法共享方法               | 可以通过 `prototype` 共享方法       |
| **`this` 指向** | 无 `this` 指向问题         | 如果忘记 `new`，`this` 指向全局对象 |
| **适用场景**    | 创建简单对象，无需类型识别 | 需要类型识别和共享方法              |

---

### **5. 实际应用场景**

#### **工厂模式**
- 创建简单的配置对象。
- 需要返回不同类型的对象。

**示例**：
```javascript
function createUser(role) {
  if (role === "admin") {
    return {
      role: "admin",
      access: ["read", "write", "delete"],
    };
  } else {
    return {
      role: "user",
      access: ["read"],
    };
  }
}

const admin = createUser("admin");
const user = createUser("user");
```

#### **构造函数模式**
- 创建复杂的对象，需要类型识别。
- 需要共享方法。

**示例**：
```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getInfo = function () {
  return `${this.make} ${this.model}`;
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

console.log(car1.getInfo()); // 输出: Toyota Corolla
console.log(car2.getInfo()); // 输出: Honda Civic
```

---

### **6. 总结**

- **工厂模式**：简单灵活，适合创建简单对象，但无法识别对象类型和共享方法。
- **构造函数模式**：适合创建复杂对象，支持类型识别和方法共享，但需要正确使用 `new`。
- **优化**：通过 `prototype` 共享方法，可以避免构造函数模式的内存浪费。

根据实际需求选择合适的方式，可以提高代码的可读性和性能。
