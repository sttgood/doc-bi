---
title: 函数
article: false
order: 5
---

## 函数定义

### 函数式声明function

 语法：通过function关键字

```js
function functionName(parameters) {
  执行的代码
 }
```

 

```js
function fun(){//1.无参
    alert("无参函数被调用了");
}

function fun2(a,b)//2有参
{
    alert(a+b);
}

function fun3(a,b)//3有返回值
{
    var res=a+b;
    return res;
}

fun();
fun2(1,2);
alert(fun3(1,3));
```

### 函数表达式

 语法：匿名函数

```js
 functioconsotnName=function(param){
  return param+1
}
```

## 匿名函数和立即函数

### 匿名函数

 类似函数名提前。

所有匿名函数都是函数表达式的一种形式，但不是所有的函数表达式都是匿名的。

```js
// javascript不允许重载
let fun=function(){
    alert("无参");
}

let fun2=function (a,b)
{
    alert(a+b);
}

let fun3=function (a,b){
    return a+b;
}
```

###  立即函数

避免全局变量污染。没有函数名，立即创建和调用。;

```js
(function(){})()；//形式一
(function(){}())；//形式二
```

案例：

```js
(function () {
    console.log("This is an IIFE");
})();
```

## 函数提升

函数提升（Function Hoisting）是指函数声明在代码执行之前会被“提升”到其所在作用域的顶部。这意味着你可以在定义函数之前调用它，而不会遇到`ReferenceError`错误。然而，这种行为只适用于通过`function`关键字声明的函数声明（Function Declarations），而不适用于函数表达式（Function Expressions）或箭头函数。

#### 函数声明的提升

```
console.log(add(2, 3)); // 输出: 5

function add(a, b) {
    return a + b;
}
```

尽管`add`函数是在`console.log`语句之后定义的，但它仍然能够成功执行并返回正确的结果，因为函数声明被提升了

#### 函数表达式的不完全提升

```js
// 这会导致 TypeError: greet is not a function
greet(); 

const greet = function() {
    console.log("Hello!");
};
```

虽然`const greet`的声明被提升到了顶部，但对它的赋值并没有提升，所以在实际赋值之前调用`greet`会导致错误。

与函数声明不同的是，**函数表达式**并不会被完全提升。只有变量声明部分会被提升，而赋值部分（即函数本身）则不会。因此，如果你尝试在函数表达式定义之前调用它，将会得到`undefined`或抛出`TypeError`（如果尝试调用`undefined`作为函数）。

#### 命名函数表达式的提升

对于命名函数表达式，情况稍微复杂一些。名称仅在函数内部可见，并且外部只能通过分配给它的变量来访问它。因此，命名函数表达式的提升行为与普通函数表达式相同。

```js
// 这会导致 TypeError: greet is not a function
greet();

const greet = function namedGreet() {
    console.log("Hello from a named function expression!");
};

// 在某些环境中可能会抛出 ReferenceError 或 undefined
console.log(namedGreet); 
```

#### 箭头函数的不完全提升

**箭头函数**也是函数表达式的一种形式，因此它们同样遵循函数表达式的规则，不会被完全提升。

```js
// 这会导致 TypeError: greet is not a function
greet();

const greet = () => {
    console.log("Hello from an arrow function!");
};
```

#### 建议：先声明后使用

鉴于函数表达式和箭头函数不会像函数声明那样被完全提升，推荐的做法是：

- **先声明后使用**：确保所有函数表达式和箭头函数在它们被调用之前已经定义好。
- **使用模块化设计**：将代码组织成模块，避免依赖于函数提升的行为，这有助于提高代码的可读性和维护性。

## 箭头函数

箭头函数（Arrow Functions）是ES6（ECMAScript 2015）引入的一种新的函数定义方式，旨在提供更简洁的语法和不同的`this`绑定规则。

使用场景：箭头函数更适用于那些本来需要匿名函数的地方

箭头函数语法:

```js
const fn = () => {
    console.log(123)
}
fn()

const fn = (x) => {
    console.log(x)
}
fn(1)

```

### 箭头函数特点

- 返回值

  当函数体只有一条语句时，可以省略大括号和`return`关键字，表达式的结果将自动返回。

- `this` 

  绑定规则：箭头函数没有自己的`this`绑定，而是继承自外层作用域（即定义它的上下文）。这意味着在箭头函数内部，`this`总是指向定义时所在的对象，而不是调用时的对象。

- 没有`arguments`对象

  与普通函数不同，箭头函数不具有自己的`arguments`对象。不过，你可以使用剩余参数（rest parameters）来替代它。

- 无原型属性

  箭头函数没有`prototype`属性，因此它们不适合作为类的方法或需要原型链的情况。

- 不适用于构造函数

  通过`new`关键字创建一个新的实例会抛出错误

### 箭头函数省略

- 一个形参的时候，可以**省略小括号**

```js
const fn = x => {
    console.log(x)
}

fn(1)
```

- 有一行代码的时候，我们可以**省略大括号**

```js
const fn = x => console.log(x)
fn(1)
```

- 一行代码的时候，可以省略return

```js
const fn = x => x + x
console.log(fn(1))
```

- 箭头函数可以直接返回一个对象

（属性值）=>({属性名：属性值})

```js
const fn = (uname) => ({ uname: uname }) // 箭头函数后面的{}改为（）便于区分
console.log(fn('刘德华')) //{uname:‘刘德华’}
```

### 头函数参数

箭头函数没有动态参数arguments，但是有剩余参数…args

eg:利用箭头函数来求和

  

```js
const getSum = (...arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum

}

const result = getSum(2, 3, 4)
console.log(result) // 9
```

### 箭头函数参数

函数参数有默认参数，动态参数，

#### 动态参数

- 函数不写参数

- arguments 动态参数 只存在于 函数里面

- arguments是伪数组 里面存储的是传递过来的实参

- 动态参数可以实现函数重载。

```js
function getSum() {
    // console.log(arguments)  [2,3,4]
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}

getSum(2, 3, 4)
getSum(1, 2, 3, 4, 2, 2, 3, 4
```

arguments是一个伪数组：有数组的length，但是没有pop等方法，可以通过 解构赋值 转换为数组

```Js
function fun()
{
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[2]);
    alert(arguments[3]);
    alert("无参函数被调用");
}
```

#### 剩余参数

一个不定量的参数 表示为一个数组。类似java中的**可变参数**

`…`获取的剩余参数，是一个**真实数组**。

开发中建议使用剩余参数代替动态参数。function(…arr)

```js
function getSum(a, b, ...arr) {
    console.log(arr)  // 使用的时候不需要写 ...
}

getSum(2, 3)
getSum(1, 2, 3, 4, 5)
```

## 注意事项

### 避免全局污染

- **问题**：如果函数定义为全局作用域中的变量或函数，可能会与其他代码冲突，导致难以调试的问题。
- **解决方案**：尽量将函数封装在模块、类或立即执行函数表达式（IIFE）内，以限制其作用域。

```js
// 不推荐：全局函数
function myFunction() { /* ... */ }

// 推荐：模块化
const module = (() => {
    function myFunction() { /* ... */ }
    return { myFunction };
})();
```

### 参数默认值与剩余参数

- **注意**：确保理解默认参数的行为，尤其是在递归调用或其他复杂情况下。同时，正确使用剩余参数来处理不定数量的参数。

```js
function greet(name = "stt", ...titles) {
    console.log(`Hello, ${name}! Titles: ${titles.join(", ")}`);
}

greet("Alice", "Ms.", "Dr."); // 输出: Hello, Alice! Titles: Ms., Dr.
```

### 返回值

- **明确返回值**：始终清楚地知道函数是否应该返回一个值。对于不返回任何有意义结果的函数，考虑显式返回`undefined`或空对象/数组。
- **避免副作用**：尽量使函数保持纯度，即仅依赖输入参数并只通过返回值影响外部状态，而不修改全局变量或外部对象。

```js
// 不推荐：有副作用
function addToArray(arr, item) {
    arr.push(item);
}

// 推荐：无副作用
function addToNewArray(arr, item) {
    return [...arr, item];
}
```

### 闭包与作用域链

- **理解闭包**：当内部函数访问外部函数的作用域时，会形成闭包。确保了解闭包的工作原理，特别是它们如何捕获变量引用而不是值。
- **避免内存泄漏**：长时间持有对不再需要的对象的引用可能导致内存泄漏。谨慎使用闭包，特别是在循环或事件处理器中。

```js
// 潜在的内存泄漏
for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i); // 闭包捕获了 `i` 的引用
    }, 1000);
}

// 改进：使用 IIFE 或 let/var 区别对待
for (let i = 0; i < 10; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i); // 每次迭代都有独立的 `i`
        }, 1000);
    })(i);
}
```

### 箭头函数vs普通函数

- **上下文 (`this`) 的不同**：箭头函数没有自己的`this`绑定，而是继承自外层作用域。这在某些场景下非常有用，但在其他场景下可能导致意外行为。

```js
const obj = {
    value: 42,
    regularMethod: function() {
        console.log(this.value); // 输出: 42
    },
    arrowMethod: () => {
        console.log(this.value); // 可能输出 undefined 或其他值
    }
};
```

### 异步编程

- **使用 `async/await`**：简化异步操作的编写，但要注意不要滥用，尤其是嵌套过多的情况下。
- **处理异常**：总是为异步函数添加适当的错误处理机制，如`try...catch`块。

```js
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
```

### 命名规范

- **清晰命名**：函数名应准确描述其功能，避免过于简略或模糊不清的名字。
- **动词开头**：通常建议函数名以动词开头，表明它执行的动作。

```js
// 好的命名
function calculateTotalPrice(items) { /* ... */ }

// 不好的命名
function totalPrice(items) { /* ... */ }
```

### 函数重载

- **避免直接实现**：JavaScript不支持函数重载（即基于参数类型的不同定义多个同名函数）。可以通过检查参数数量或类型来模拟重载效果，但这往往增加了复杂性。

```js
function operate(a, b) {
    if (typeof b === 'undefined') {
        // 单参数逻辑
    } else {
        // 多参数逻辑
    }
}
```

### 性能优化

- **减少不必要的函数调用**：避免频繁创建临时函数或在循环体内定义函数。
- **缓存计算结果**：对于昂贵的计算，可以考虑使用缓存策略（如记忆化技术）来提高性能。

```js
// 高成本计算
function expensiveCalculation(x) {
    // 计算过程...
    return result;
}

// 使用记忆化
const memoizedExpensiveCalculation = (() => {
    const cache = {};
    return function(x) {
        if (!(x in cache)) {
            cache[x] = expensiveCalculation(x);
        }
        return cache[x];
    };
})();
```
