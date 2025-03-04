---
title: 原型链与prototype属性
article: false
order: 2
---
原型链（Prototype Chain）和 `prototype` 属性是 JavaScript 中实现 **继承** 和 **对象共享方法** 的核心机制。理解它们对于掌握 JavaScript 的面向对象编程至关重要。

---

### **1. 原型链（Prototype Chain）**

#### **什么是原型链？**
原型链是 JavaScript 中实现继承的一种机制。每个对象都有一个内部属性 `[[Prototype]]`（可以通过 `__proto__` 访问），指向它的原型对象。当访问对象的属性或方法时，如果对象本身没有该属性，JavaScript 会沿着原型链向上查找，直到找到该属性或到达原型链的顶端（`null`）。

#### **原型链的查找规则**
1. 查找对象自身的属性。
2. 如果找不到，沿着 `[[Prototype]]` 查找原型对象的属性。
3. 重复上述过程，直到找到属性或到达 `null`。

#### **示例**
```javascript
const parent = { name: "Parent" };
const child = { age: 10 };

// 设置 child 的原型为 parent
child.__proto__ = parent;

console.log(child.name); // 输出: Parent
console.log(child.age); // 输出: 10
```

---

### **2. `prototype` 属性**

#### **什么是 `prototype`？**
`prototype` 是函数特有的属性，指向一个对象。当使用 `new` 关键字调用函数时，创建的新对象的 `[[Prototype]]` 会指向该函数的 `prototype` 对象。

#### **`prototype` 的作用**
- 用于实现 **构造函数** 的继承。
- 用于共享方法和属性。

#### **示例**
```javascript
function Person(name) {
  this.name = name;
}

// 在 Person.prototype 上定义方法
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice");
person1.sayHello(); // 输出: Hello, my name is Alice
```

---

### **3. 原型链与 `prototype` 的关系**

- **构造函数** 的 `prototype` 属性指向一个对象，该对象是 **实例对象** 的原型。
- **实例对象** 的 `[[Prototype]]` 指向其构造函数的 `prototype` 对象。

#### **示例**
```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

const dog = new Animal("Dog");
dog.speak(); // 输出: Dog makes a sound

// 原型链关系
console.log(dog.__proto__ === Animal.prototype); // 输出: true
console.log(Animal.prototype.__proto__ === Object.prototype); // 输出: true
console.log(Object.prototype.__proto__ === null); // 输出: true
```

---

### **4. 原型链的继承**

通过原型链，可以实现对象之间的继承。

#### **示例：原型链继承**
```javascript
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

function Child(name, age) {
  Parent.call(this, name); // 调用父类构造函数
  this.age = age;
}

// 设置 Child.prototype 的原型为 Parent.prototype
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child; // 修复 constructor 指向

Child.prototype.sayAge = function () {
  console.log(`I am ${this.age} years old`);
};

const child = new Child("Alice", 10);
child.sayHello(); // 输出: Hello, my name is Alice
child.sayAge(); // 输出: I am 10 years old
```

---

### **5. `Object.create()` 与原型链**

`Object.create()` 可以创建一个新对象，并指定其原型。

#### **示例**
```javascript
const parent = { name: "Parent" };
const child = Object.create(parent);

console.log(child.name); // 输出: Parent
console.log(child.__proto__ === parent); // 输出: true
```

---

### **6. `constructor` 属性**

每个函数的 `prototype` 对象都有一个 `constructor` 属性，指向该函数本身。

#### **示例**
```javascript
function Person(name) {
  this.name = name;
}

const person = new Person("Alice");
console.log(person.constructor === Person); // 输出: true
```

---

### **7. 原型链的顶端**

原型链的顶端是 `Object.prototype`，它的 `[[Prototype]]` 是 `null`。

#### **示例**
```javascript
console.log(Object.prototype.__proto__); // 输出: null
```

---

### **8. 总结**

- **原型链**：通过 `[[Prototype]]` 实现继承和属性查找的机制。
- **`prototype`**：函数特有的属性，指向原型对象，用于共享方法和属性。
- **关系**：
  - 实例对象的 `[[Prototype]]` 指向其构造函数的 `prototype` 对象。
  - 构造函数的 `prototype` 对象的 `constructor` 属性指向构造函数本身。
- **继承**：通过原型链和 `Object.create()` 实现对象之间的继承。
- **原型链顶端**：`Object.prototype` 是原型链的顶端，其 `[[Prototype]]` 为 `null`。

掌握原型链和 `prototype` 属性是理解 JavaScript 面向对象编程的关键。
