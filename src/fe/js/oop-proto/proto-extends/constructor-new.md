---
title: 构造函数与new关键字
article: false
order: 1
---

在 JavaScript 中，**构造函数**和 **`new` 关键字**是用于创建对象的核心机制。构造函数是一种特殊的函数，用于初始化新创建的对象，而 `new` 关键字用于调用构造函数并创建对象实例。以下是关于构造函数和 `new` 关键字的详细说明和示例。

---

### **一、构造函数**
#### **1. 基本概念**
构造函数是一个普通的函数，但通常以大写字母开头（约定俗成），用于初始化新创建的对象。

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

#### **2. 使用 `new` 调用构造函数**
使用 `new` 关键字调用构造函数时，会执行以下步骤：
1. 创建一个新的空对象。
2. 将构造函数的 `this` 绑定到新对象。
3. 执行构造函数中的代码，初始化新对象。
4. 返回新对象（如果构造函数没有显式返回其他对象）。

```javascript
const alice = new Person("Alice", 25);
console.log(alice.name); // 输出: Alice
console.log(alice.age);  // 输出: 25
```

#### **3. 构造函数的返回值**
- 如果构造函数没有显式返回值，默认返回新创建的对象。
- 如果构造函数返回一个对象，则 `new` 表达式的结果是该对象。
- 如果构造函数返回一个非对象值（如 `null`、`undefined`、数字、字符串等），则忽略返回值，仍然返回新创建的对象。

```javascript
function Person(name) {
  this.name = name;
  return { name: "Bob" }; // 返回一个新对象
}

const person = new Person("Alice");
console.log(person.name); // 输出: Bob
```

---

### **二、`new` 关键字**
#### **1. `new` 的作用**
`new` 关键字用于调用构造函数并创建对象实例。

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.make);  // 输出: Toyota
console.log(myCar.model); // 输出: Corolla
```

#### **2. 手动实现 `new`**
可以通过以下代码模拟 `new` 的行为：

```javascript
function myNew(constructor, ...args) {
  // 1. 创建一个新对象，并将其原型指向构造函数的 prototype
  const obj = Object.create(constructor.prototype);
  // 2. 调用构造函数，并将 this 绑定到新对象
  const result = constructor.apply(obj, args);
  // 3. 如果构造函数返回一个对象，则返回该对象；否则返回新对象
  return result instanceof Object ? result : obj;
}

const car = myNew(Car, "Toyota", "Corolla");
console.log(car.make);  // 输出: Toyota
console.log(car.model); // 输出: Corolla
```

---

### **三、构造函数与原型**
#### **1. 原型链**
每个构造函数都有一个 `prototype` 属性，指向一个对象。通过构造函数创建的对象会继承 `prototype` 上的属性和方法。

```javascript
function Person(name) {
  this.name = name;
}

// 在原型上添加方法
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

const alice = new Person("Alice");
alice.greet(); // 输出: Hello, my name is Alice.
```

#### **2. 检查对象的构造函数**
使用 `instanceof` 检查对象是否由某个构造函数创建。

```javascript
console.log(alice instanceof Person); // 输出: true
```

---

### **四、实际应用场景**
#### **1. 创建多个相似对象**
构造函数适合用于创建多个具有相同属性和方法的对象。

```javascript
function Book(title, author) {
  this.title = title;
  this.author = author;
}

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("Brave New World", "Aldous Huxley");

console.log(book1.title); // 输出: 1984
console.log(book2.title); // 输出: Brave New World
```

#### **2. 封装逻辑**
通过构造函数封装对象的初始化逻辑。

```javascript
function Counter() {
  this.count = 0;

  this.increment = function () {
    this.count++;
  };

  this.decrement = function () {
    this.count--;
  };
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.count); // 输出: 2
```

---

### **五、注意事项**
1. **忘记使用 `new`**
   如果忘记使用 `new` 调用构造函数，`this` 会指向全局对象（在浏览器中是 `window`），导致意外行为。

   ```javascript
   const person = Person("Alice", 25); // 忘记使用 new
   console.log(person); // 输出: undefined
   console.log(window.name); // 输出: Alice（this 指向了 window）
   ```

   解决方法：
   - 使用 `new.target` 检查是否通过 `new` 调用。
   - 使用类（`class`），类必须通过 `new` 调用。

   ```javascript
   function Person(name) {
     if (!new.target) {
       throw new Error("Person must be called with new");
     }
     this.name = name;
   }
   ```

2. **性能问题**
   在构造函数中定义方法会导致每个实例都有一份方法的副本，占用更多内存。建议将方法定义在原型上。

   ```javascript
   function Person(name) {
     this.name = name;
     this.greet = function () {
       console.log(`Hello, my name is ${this.name}.`);
     };
   }
   
   const alice = new Person("Alice");
   const bob = new Person("Bob");
   console.log(alice.greet === bob.greet); // 输出: false（每个实例都有独立的 greet 方法）
   ```

   优化：
   ```javascript
   function Person(name) {
     this.name = name;
   }
   
   Person.prototype.greet = function () {
     console.log(`Hello, my name is ${this.name}.`);
   };
   
   const alice = new Person("Alice");
   const bob = new Person("Bob");
   console.log(alice.greet === bob.greet); // 输出: true（共享同一个 greet 方法）
   ```

---

### **六、总结**
- 构造函数用于初始化对象，通常以大写字母开头。
- `new` 关键字用于调用构造函数并创建对象实例。
- 构造函数与原型链结合，可以实现属性和方法的共享。
- 注意避免忘记使用 `new`，以及将方法定义在原型上以提高性能。

掌握构造函数和 `new` 关键字是理解 JavaScript 面向对象编程的基础，也是实现代码复用和组织的重要手段。
