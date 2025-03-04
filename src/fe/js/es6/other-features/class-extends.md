---
title: 类（class）与继承（extends）
article: false
order: 1
---

在 JavaScript 中，`class` 和 `extends` 是 ES6（ECMAScript 2015）引入的语法，用于实现面向对象编程（OOP）中的类和继承。它们提供了更清晰、更接近传统面向对象语言的语法，同时基于 JavaScript 的原型链机制实现。以下是关于 `class` 和 `extends` 的详细说明和示例。

---

### **一、类的定义（`class`）**
#### **1. 基本语法**
使用 `class` 关键字定义类，类中可以包含构造函数、方法和属性。

```javascript
class Person {
  // 构造函数
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 方法
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// 创建实例
const alice = new Person("Alice", 25);
alice.greet(); // 输出: Hello, my name is Alice and I am 25 years old.
```

#### **2. 静态方法**
使用 `static` 关键字定义静态方法，静态方法属于类而不是实例。

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // 输出: 5
```

#### **3. Getter 和 Setter**
使用 `get` 和 `set` 定义属性的访问器和设置器。

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const person = new Person("Alice");
console.log(person.name); // 输出: Alice
person.name = "Bob";
console.log(person.name); // 输出: Bob
```

---

### **二、类的继承（`extends`）**
#### **1. 基本语法**
使用 `extends` 关键字实现类的继承，子类可以继承父类的属性和方法。

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 调用父类的构造函数
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // 输出: Buddy barks.
```

#### **2. `super` 关键字**
- `super()`：调用父类的构造函数。
- `super.method()`：调用父类的方法。

```javascript
class Cat extends Animal {
  constructor(name, color) {
    super(name); // 调用父类的构造函数
    this.color = color;
  }

  speak() {
    super.speak(); // 调用父类的方法
    console.log(`${this.name} meows.`);
  }
}

const cat = new Cat("Whiskers", "White");
cat.speak();
// 输出:
// Whiskers makes a noise.
// Whiskers meows.
```

#### **3. 方法重写**
子类可以重写父类的方法。

```javascript
class Bird extends Animal {
  speak() {
    console.log(`${this.name} chirps.`);
  }
}

const bird = new Bird("Tweety");
bird.speak(); // 输出: Tweety chirps.
```

---

### **三、类的特性**
#### **1. 原型链**
`class` 和 `extends` 是基于 JavaScript 的原型链机制实现的。

```javascript
console.log(dog instanceof Dog); // 输出: true
console.log(dog instanceof Animal); // 输出: true
```

#### **2. 不可枚举**
类的方法是不可枚举的（`enumerable: false`）。

```javascript
console.log(Object.keys(dog)); // 输出: ["name", "breed"]
```

#### **3. 类表达式**
类可以通过表达式定义。

```javascript
const Person = class {
  constructor(name) {
    this.name = name;
  }
};

const person = new Person("Alice");
console.log(person.name); // 输出: Alice
```

---

### **四、实际应用场景**
#### **1. 面向对象编程**
使用类和继承实现面向对象编程。

```javascript
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    console.log(`Drawing a ${this.color} shape.`);
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log(`Drawing a ${this.color} circle with radius ${this.radius}.`);
  }
}

const circle = new Circle("red", 10);
circle.draw(); // 输出: Drawing a red circle with radius 10.
```

#### **2. 封装和复用**
通过类封装逻辑，通过继承复用代码。

```javascript
class Logger {
  log(message) {
    console.log(`[LOG] ${message}`);
  }
}

class FileLogger extends Logger {
  log(message) {
    super.log(`File: ${message}`);
  }
}

const logger = new FileLogger();
logger.log("Error occurred"); // 输出: [LOG] File: Error occurred
```

---

### **五、注意事项**
1. **类声明不会提升**：类声明不会被提升，必须先定义后使用。
2. **类中的方法不可枚举**：类中的方法默认是不可枚举的。
3. **`this` 绑定**：类方法中的 `this` 指向实例，但在回调函数中可能会丢失 `this`，需要使用箭头函数或 `bind` 绑定。

---

### **六、总结**
- `class` 提供了更清晰的语法来定义类和构造函数。
- `extends` 支持类的继承，子类可以继承父类的属性和方法。
- `super` 用于调用父类的构造函数和方法。
- 类和继承是基于 JavaScript 的原型链机制实现的。

掌握 `class` 和 `extends` 可以帮助你更好地组织代码，实现面向对象编程，提高代码的可读性和可维护性。
