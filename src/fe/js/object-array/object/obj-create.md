---
title: 对象创建
article: false
order: 1
---

在 JavaScript 中，创建对象的方式有多种，每种方式都有其特定的使用场景和优缺点。以下是常见的创建对象的方式：

---

### **1. 对象字面量**
- **语法**：使用 `{}` 直接定义对象。
- **特点**：简洁易读，适合创建简单的对象。
- **示例**：
  ```javascript
  const person = {
    name: "Alice",
    age: 25,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  person.greet(); // Hello, my name is Alice
  ```

---

### **2. 构造函数**
- **语法**：使用 `new` 关键字调用构造函数。
- **特点**：适合创建多个相似的对象。
- **示例**：
  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
  }
  
  const alice = new Person("Alice", 25);
  alice.greet(); // Hello, my name is Alice
  ```

---

### **3. `Object.create()`**
- **语法**：基于现有对象创建新对象。
- **特点**：可以指定原型对象，适合实现继承。
- **示例**：
  ```javascript
  const personProto = {
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  const alice = Object.create(personProto);
  alice.name = "Alice";
  alice.age = 25;
  alice.greet(); // Hello, my name is Alice
  ```

---

### **4. 类（ES6）**
- **语法**：使用 `class` 关键字定义类。
- **特点**：语法更接近传统面向对象语言，支持继承和静态方法。
- **示例**：
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
  
  const alice = new Person("Alice", 25);
  alice.greet(); // Hello, my name is Alice
  ```

---

### **5. 工厂函数**
- **语法**：定义一个函数，返回新对象。
- **特点**：封装对象创建逻辑，适合复杂对象的创建。
- **示例**：
  ```javascript
  function createPerson(name, age) {
    return {
      name,
      age,
      greet() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };
  }
  
  const alice = createPerson("Alice", 25);
  alice.greet(); // Hello, my name is Alice
  ```

---

### **6. 单例模式**
- **语法**：使用立即执行函数表达式（IIFE）创建单例对象。
- **特点**：确保只有一个实例，适合全局共享对象。
- **示例**：
  ```javascript
  const singleton = (function() {
    let instance;
  
    function createInstance() {
      return {
        name: "Alice",
        greet() {
          console.log(`Hello, my name is ${this.name}`);
        }
      };
    }
  
    return {
      getInstance() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  const alice = singleton.getInstance();
  alice.greet(); // Hello, my name is Alice
  ```

---

### **7. 使用 `Object.assign()`**
- **语法**：合并多个对象创建新对象。
- **特点**：适合从多个对象中提取属性创建新对象。
- **示例**：
  ```javascript
  const person = { name: "Alice" };
  const details = { age: 25 };
  const alice = Object.assign({}, person, details);
  console.log(alice); // { name: "Alice", age: 25 }
  ```

---

### **8. 使用 `Object.defineProperties()`**
- **语法**：通过属性描述符定义对象属性。
- **特点**：可以精确控制属性的行为（如可枚举性、可写性等）。
- **示例**：
  ```javascript
  const person = {};
  Object.defineProperties(person, {
    name: {
      value: "Alice",
      writable: true,
      enumerable: true
    },
    age: {
      value: 25,
      writable: false,
      enumerable: true
    }
  });
  console.log(person); // { name: "Alice", age: 25 }
  ```

---

### **9. 使用 `Proxy`（ES6）**
- **语法**：创建代理对象，拦截对目标对象的操作。
- **特点**：适合实现高级功能，如数据验证、日志记录等。
- **示例**：
  ```javascript
  const target = {
    name: "Alice",
    age: 25
  };
  
  const handler = {
    get(obj, prop) {
      return prop in obj ? obj[prop] : "Property not found";
    }
  };
  
  const proxy = new Proxy(target, handler);
  console.log(proxy.name); // Alice
  console.logproxy.address); // Property not found
  ```

---

### **10. 总结**
| 方式                            | 语法                                    | 特点                               | 示例                                                         |
| ------------------------------- | --------------------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| **对象字面量**                  | `const obj = {};`                       | 简洁易读，适合简单对象             | `const person = { name: "Alice" };`                          |
| **构造函数**                    | `function Person() {}; new Person();`   | 适合创建多个相似对象               | `const alice = new Person("Alice");`                         |
| **`Object.create()`**           | `Object.create(proto)`                  | 指定原型对象，适合继承             | `const alice = Object.create(proto);`                        |
| **类（ES6）**                   | `class Person {}; new Person();`        | 语法更接近传统面向对象语言         | `const alice = new Person("Alice");`                         |
| **工厂函数**                    | `function createPerson() { return {} }` | 封装对象创建逻辑，适合复杂对象     | `const alice = createPerson("Alice");`                       |
| **单例模式**                    | `const singleton = (function() {})();`  | 确保只有一个实例，适合全局共享对象 | `const alice = singleton.getInstance();`                     |
| **`Object.assign()`**           | `Object.assign({}, obj1, obj2)`         | 合并多个对象创建新对象             | `const alice = Object.assign({}, person, details);`          |
| **`Object.defineProperties()`** | `Object.defineProperties(obj, props)`   | 精确控制属性行为                   | `Object.defineProperties(person, { name: { value: "Alice" } });` |
| **`Proxy`（ES6）**              | `new Proxy(target, handler)`            | 拦截对目标对象的操作，适合高级功能 | `const proxy = new Proxy(target, handler);`                  |

---

通过掌握这些创建对象的方式，可以根据具体需求选择最合适的方法，编写出高效、灵活的代码。
