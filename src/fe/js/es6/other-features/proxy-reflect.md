---
title: Proxy与Reflect
article: false
order: 3
---

`Proxy` 和 `Reflect` 是 JavaScript 中用于**元编程**的两个重要工具。它们允许开发者拦截和自定义对象的基本操作（如属性访问、赋值、函数调用等），从而实现更灵活和强大的功能。

---

### **1. Proxy**
`Proxy` 用于创建一个对象的代理，可以拦截并重新定义对象的基本操作。

#### **1.1 基本语法**
```javascript
const proxy = new Proxy(target, handler);
```
- `target`：要代理的目标对象。
- `handler`：一个对象，包含拦截操作的**陷阱函数**（trap）。

#### **1.2 常用陷阱函数**
| 陷阱函数                       | 触发条件                |
| ------------------------------ | ----------------------- |
| `get(target, prop)`            | 访问属性时触发          |
| `set(target, prop, value)`     | 设置属性时触发          |
| `has(target, prop)`            | 使用 `in` 操作符时触发  |
| `deleteProperty(target, prop)` | 删除属性时触发          |
| `apply(target, thisArg, args)` | 调用函数时触发          |
| `construct(target, args)`      | 使用 `new` 操作符时触发 |

#### **1.3 示例**
```javascript
const target = {
    name: 'Alice',
    age: 25
};

const handler = {
    get(target, prop) {
        if (prop === 'age') {
            return `Age: ${target[prop]}`;
        }
        return target[prop];
    },
    set(target, prop, value) {
        if (prop === 'age' && typeof value !== 'number') {
            throw new TypeError('Age must be a number');
        }
        target[prop] = value;
        return true; // 表示设置成功
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // 输出: Alice
console.log(proxy.age);  // 输出: Age: 25
proxy.age = 30;          // 设置成功
console.log(proxy.age);  // 输出: Age: 30
proxy.age = 'thirty';    // 抛出错误: TypeError: Age must be a number
```

---

### **2. Reflect**
`Reflect` 是一个内置对象，提供了与 `Proxy` 陷阱函数一一对应的静态方法。它的作用是简化对象操作，并确保操作的行为一致。

#### **2.1 常用方法**
| 方法                                   | 描述                          |
| -------------------------------------- | ----------------------------- |
| `Reflect.get(target, prop)`            | 获取属性值                    |
| `Reflect.set(target, prop, value)`     | 设置属性值                    |
| `Reflect.has(target, prop)`            | 检查属性是否存在              |
| `Reflect.deleteProperty(target, prop)` | 删除属性                      |
| `Reflect.apply(target, thisArg, args)` | 调用函数                      |
| `Reflect.construct(target, args)`      | 使用 `new` 操作符调用构造函数 |

#### **2.2 示例**
```javascript
const obj = {
    name: 'Bob',
    age: 30
};

console.log(Reflect.get(obj, 'name')); // 输出: Bob
Reflect.set(obj, 'age', 35);
console.log(Reflect.get(obj, 'age'));  // 输出: 35
console.log(Reflect.has(obj, 'name')); // 输出: true
Reflect.deleteProperty(obj, 'age');
console.log(Reflect.has(obj, 'age'));  // 输出: false
```

---

### **3. Proxy 与 Reflect 的结合使用**
`Proxy` 和 `Reflect` 通常结合使用，以确保拦截操作的行为与默认行为一致。

#### **3.1 示例**
```javascript
const target = {
    name: 'Charlie',
    age: 40
};

const handler = {
    get(target, prop) {
        console.log(`Getting property: ${prop}`);
        return Reflect.get(target, prop);
    },
    set(target, prop, value) {
        console.log(`Setting property: ${prop} to ${value}`);
        return Reflect.set(target, prop, value);
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // 输出: Getting property: name, Charlie
proxy.age = 45;          // 输出: Setting property: age to 45
console.log(proxy.age);  // 输出: Getting property: age, 45
```

---

### **4. 应用场景**
#### **4.1 数据验证**
使用 `Proxy` 拦截属性赋值操作，确保数据符合要求。
```javascript
const validator = {
    set(target, prop, value) {
        if (prop === 'age' && (typeof value !== 'number' || value < 0)) {
            throw new TypeError('Age must be a positive number');
        }
        return Reflect.set(target, prop, value);
    }
};

const person = new Proxy({}, validator);
person.age = 25; // 设置成功
person.age = -5; // 抛出错误: TypeError: Age must be a positive number
```

#### **4.2 日志记录**
使用 `Proxy` 记录对象的操作日志。
```javascript
const logger = {
    get(target, prop) {
        console.log(`Accessed property: ${prop}`);
        return Reflect.get(target, prop);
    },
    set(target, prop, value) {
        console.log(`Set property: ${prop} to ${value}`);
        return Reflect.set(target, prop, value);
    }
};

const obj = new Proxy({}, logger);
obj.name = 'Dave'; // 输出: Set property: name to Dave
console.log(obj.name); // 输出: Accessed property: name, Dave
```

#### **4.3 动态属性**
使用 `Proxy` 动态生成属性值。
```javascript
const dynamicProps = {
    get(target, prop) {
        if (prop === 'timestamp') {
            return Date.now();
        }
        return Reflect.get(target, prop);
    }
};

const obj = new Proxy({}, dynamicProps);
console.log(obj.timestamp); // 输出: 当前时间戳
```

---

### **5. 总结**
- **`Proxy`**：用于创建对象的代理，拦截并自定义对象的基本操作。
- **`Reflect`**：提供与 `Proxy` 陷阱函数一一对应的静态方法，简化对象操作。
- 结合使用 `Proxy` 和 `Reflect` 可以实现强大的元编程功能，如数据验证、日志记录、动态属性等。

`Proxy` 和 `Reflect` 是 JavaScript 中非常强大的工具，适合用于高级场景和框架开发。
