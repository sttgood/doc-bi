---
title: 生成器与迭代器
article: false
order: 2
---

生成器（Generator）和迭代器（Iterator）是 JavaScript 中用于处理 **可迭代对象** 和 **惰性计算** 的重要特性。它们可以帮助我们更高效地处理数据流，尤其是在处理大规模数据或异步操作时。

---

### **1. 迭代器（Iterator）**

#### **什么是迭代器？**
迭代器是一个对象，它提供了一种统一的接口来遍历数据结构（如数组、Set、Map 等）。任何实现了 `[Symbol.iterator]` 方法的对象都可以称为 **可迭代对象**。

#### **迭代器的核心方法**
迭代器必须实现 `next()` 方法，该方法返回一个包含以下两个属性的对象：
- `value`：当前迭代的值。
- `done`：布尔值，表示迭代是否完成。

#### **示例：自定义迭代器**
```javascript
const myIterable = {
  [Symbol.iterator]() {
    let index = 0;
    const data = [1, 2, 3];
    return {
      next() {
        if (index < data.length) {
          return { value: data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const value of myIterable) {
  console.log(value); // 输出: 1, 2, 3
}
```

#### **内置可迭代对象**
JavaScript 中的数组、字符串、Set、Map 等都是可迭代对象。

```javascript
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // 输出: { value: 1, done: false }
console.log(iterator.next()); // 输出: { value: 2, done: false }
console.log(iterator.next()); // 输出: { value: 3, done: false }
console.log(iterator.next()); // 输出: { value: undefined, done: true }
```

---

### **2. 生成器（Generator）**

#### **什么是生成器？**
生成器是一种特殊的函数，通过 `function*` 定义。它可以暂停和恢复执行，返回一个 **生成器对象**，该对象既是迭代器，也是可迭代对象。

#### **生成器的核心特性**
- 使用 `yield` 关键字暂停函数执行，并返回一个值。
- 使用 `next()` 方法恢复函数执行，直到下一个 `yield` 或 `return`。

#### **示例：生成器函数**
```javascript
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();
console.log(gen.next()); // 输出: { value: 1, done: false }
console.log(gen.next()); // 输出: { value: 2, done: false }
console.log(gen.next()); // 输出: { value: 3, done: false }
console.log(gen.next()); // 输出: { value: undefined, done: true }
```

#### **生成器的应用场景**
1. **惰性计算**：按需生成数据，节省内存。
2. **异步编程**：结合 `Promise` 实现更优雅的异步代码。
3. **无限序列**：生成无限长度的序列。

**示例：惰性计算**
```javascript
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 输出: 1
console.log(fib.next().value); // 输出: 1
console.log(fib.next().value); // 输出: 2
console.log(fib.next().value); // 输出: 3
```

---

### **3. 生成器与迭代器的关系**

- **生成器是迭代器的语法糖**：生成器函数返回的对象既是迭代器，也是可迭代对象。
- **生成器简化了迭代器的实现**：通过 `yield` 关键字，生成器可以更简洁地实现迭代逻辑。

#### **示例：生成器实现迭代器**
```javascript
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of myIterable) {
  console.log(value); // 输出: 1, 2, 3
}
```

---

### **4. 生成器与异步编程**

生成器可以与 `Promise` 结合，实现更优雅的异步编程模式。这种模式被称为 **协程（Coroutine）**。

#### **示例：异步生成器**
```javascript
function* asyncGenerator() {
  const result1 = yield Promise.resolve(1);
  console.log(result1); // 输出: 1
  const result2 = yield Promise.resolve(2);
  console.log(result2); // 输出: 2
}

function run(generator) {
  const gen = generator();

  function handle(result) {
    if (result.done) return;
    result.value.then((data) => {
      handle(gen.next(data));
    });
  }

  handle(gen.next());
}

run(asyncGenerator);
```

---

### **5. 生成器的其他特性**

#### **`yield*` 委托**
`yield*` 可以将生成器的执行委托给另一个生成器或可迭代对象。

**示例**：
```javascript
function* generator1() {
  yield 1;
  yield 2;
}

function* generator2() {
  yield* generator1();
  yield 3;
}

const gen = generator2();
console.log(gen.next()); // 输出: { value: 1, done: false }
console.log(gen.next()); // 输出: { value: 2, done: false }
console.log(gen.next()); // 输出: { value: 3, done: false }
console.log(gen.next()); // 输出: { value: undefined, done: true }
```

#### **生成器的返回值**
生成器可以通过 `return` 返回值，但 `return` 会终止生成器。

**示例**：
```javascript
function* generator() {
  yield 1;
  return 2;
}

const gen = generator();
console.log(gen.next()); // 输出: { value: 1, done: false }
console.log(gen.next()); // 输出: { value: 2, done: true }
```

---

### **6. 总结**

- **迭代器**：提供了一种统一的接口来遍历数据结构，核心方法是 `next()`。
- **生成器**：通过 `function*` 定义，使用 `yield` 暂停和恢复执行，返回生成器对象。
- **关系**：生成器是迭代器的语法糖，简化了迭代器的实现。
- **应用场景**：惰性计算、异步编程、无限序列等。
- **高级特性**：`yield*` 委托、生成器返回值等。

生成器和迭代器是 JavaScript 中处理数据流和异步编程的强大工具，掌握它们可以显著提高代码的灵活性和可读性。
