---
title: ES6类的底层原理
article: false
order: 4
---
在 JavaScript 中，ES6 的 `class` 语法是**基于原型继承的语法糖**。它提供了一种更简洁、更易读的方式来定义类和实现面向对象编程（OOP），但其底层仍然是基于 JavaScript 的原型链机制。

---

### **1. ES6 类的基本语法**
ES6 引入了 `class` 关键字来定义类。

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const alice = new Person('Alice', 25);
alice.greet(); // 输出: Hello, my name is Alice
```

---

### **2. ES6 类的底层原理**
ES6 类的底层实现仍然是基于**原型链**的。可以将类转换为 ES5 的代码来理解其原理。

#### **2.1 构造函数**
- `class` 中的 `constructor` 方法对应 ES5 中的构造函数。
- 通过 `new` 关键字调用类时，会执行 `constructor` 方法。

#### **2.2 原型方法**
- `class` 中定义的方法会被添加到类的原型对象（`prototype`）上。
- 所有实例共享原型方法。

#### **2.3 静态方法**
- 使用 `static` 关键字定义的方法属于类本身，而不是实例。
- 静态方法通过类名调用。

#### **2.4 继承**
- `extends` 关键字用于实现继承。
- `super` 关键字用于调用父类的构造函数或方法。

---

### **3. ES6 类转换为 ES5 代码**
以下是一个 ES6 类的示例及其对应的 ES5 实现。

#### **3.1 ES6 类**
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    static info() {
        console.log('This is a Person class');
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
}
```

#### **3.2 对应的 ES5 实现**
```javascript
// Person 类
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 原型方法
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

// 静态方法
Person.info = function () {
    console.log('This is a Person class');
};

// Student 类
function Student(name, age, grade) {
    // 调用父类构造函数
    Person.call(this, name, age);
    this.grade = grade;
}

// 继承
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// 子类方法
Student.prototype.study = function () {
    console.log(`${this.name} is studying in grade ${this.grade}`);
};
```

---

### **4. ES6 类的特性**
#### **4.1 原型链**
- 类的实例通过原型链访问方法和属性。
- 例如，`alice.greet()` 会先在实例上查找 `greet` 方法，如果没有找到，则会沿着原型链向上查找。

#### **4.2 静态方法**
- 静态方法属于类本身，而不是实例。
- 例如，`Person.info()` 可以直接调用。

#### **4.3 继承**
- `extends` 关键字用于实现继承。
- `super` 关键字用于调用父类的构造函数或方法。

#### **4.4 类表达式**
- 类可以通过表达式定义。
```javascript
const Person = class {
    constructor(name) {
        this.name = name;
    }
};
```

#### **4.5 Getter 和 Setter**
- 类支持 `get` 和 `set` 方法，用于定义属性的访问和赋值行为。
```javascript
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}
```

---

### **5. ES6 类与普通函数的区别**
| 特性     | ES6 类                       | 普通函数                   |
| -------- | ---------------------------- | -------------------------- |
| 语法     | 使用 `class` 关键字定义      | 使用 `function` 关键字定义 |
| 构造函数 | `constructor` 方法           | 函数体本身                 |
| 原型方法 | 直接在类中定义               | 通过 `prototype` 添加      |
| 静态方法 | 使用 `static` 关键字定义     | 直接添加到函数对象上       |
| 继承     | 使用 `extends` 和 `super`    | 通过 `Object.create` 实现  |
| 提升     | 不会被提升（存在暂时性死区） | 会被提升                   |

---

### **6. 总结**
- ES6 类的底层原理是基于原型链的。
- `class` 提供了一种更简洁、更易读的方式来定义类和实现继承。
- 类的特性包括构造函数、原型方法、静态方法、继承等。
- 类与普通函数的区别主要体现在语法、继承和提升行为上。

通过理解 ES6 类的底层原理，可以更好地掌握 JavaScript 的面向对象编程机制。
