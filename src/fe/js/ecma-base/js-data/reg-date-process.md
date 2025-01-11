---
title: 数据处理
article: false
order: 4
---

## 运算符

::: tabs 
@tab 详细优先级

| 优先级 | 运算符类型                | 运算符                                                       |
| ------ | ------------------------- | ------------------------------------------------------------ |
| 1      | 成员访问                  | `.` (点)、`[]` (方括号)                                      |
| 2      | 函数调用和对象创建        | `()` (圆括号)、`new`                                         |
| 3      | 后缀递增/递减             | `++`、`--`                                                   |
| 4      | 前缀递增/递减、一元运算符 | `++`、`--`、`+`（正号）、`-`（负号）、`!`（逻辑非）、`~`（位非）、`typeof`、`void`、`delete` |
| 5      | 算术运算符                | `*`（乘）、`/`（除）、`%`（取模）、`**`（幂）                |
| 6      | 加法和减法                | `+`（加）、`-`（减）                                         |
| 7      | 位移运算符                | `<<`（左移）、`>>`（带符号右移）、`>>>`（无符号右移）        |
| 8      | 关系运算符                | `<`（小于）、`>`（大于）、`<=`（小于等于）、`>=`（大于等于） |
| 9      | 实例化                    | `instanceof`                                                 |
| 10     | 相等运算符                | `==`（等于）、`!=`（不等于）、`===`（全等）、`!==`（非全等） |
| 11     | 位与                      | `&`                                                          |
| 12     | 位异或                    | `^`                                                          |
| 13     | 位或                      | `                                                            |
| 14     | 逻辑与                    | `&&`                                                         |
| 15     | 逻辑或                    | `                                                            |
| 16     | 条件运算符                | `? :`                                                        |
| 17     | 赋值运算符                | `=`、`+=`、`-=`、`*=`、`/=`、`%=`, `<<=`, `>>=`, `>>>=`, `&=`, `^=`, ` |

@tab:active 常用优先级
| **优先级** | **运算符** | **顺序**               |
| ---------- | ---------- | ---------------------- |
| **1**      | 小括号     | `()`                   |
| **2**      | 一元运算符 | `++` `--` `!`          |
| **3**      | 算数运算符 | 先`*/`%后`+-`          |
| **4**      | 关系运算符 | `>` `>=` `<`  `<=`     |
| **5**      | 相等运算符 | `==` `!=` `===`  `!==` |
| **6**      | 逻辑运算符 | 先`&&`后`||`           |
| **7**      | 赋值运算符 | `=`                    |
| **8**      | 逗号运算符 | `，`                   |

:::

**注意：**

三元运算符：`条件表达式？true value：false value`

 

- ==：比较 20=="20"(true)。会先进行类型转换，之后再比较。
-  ===：不会类型转换，类型不一样直接false，一样比较。开发中强烈建议。
-  js也会发生逻辑中断。
-  **?.** ：let nestedProp = obj.first?.second;

可选链运算符，通过使用 ?. 运算符取代 . 运算符，JavaScript 会在尝试访问 obj.first.second 之前，先隐式地检查并确定 obj.first 既不是 null 也不是 undefined。如果obj.first 是 null 或者 undefined，表达式将会短路计算直接返回 undefined。

l **delete :**

**delete**运算符用于删除对象的一个属性；如果该属性的值是一个对象，并且没有更多对该对象的引用，该属性所持有的对象最终会自动释放。

## 控制语句

表达式和语句的区别：表达式可以求值，语句不一定能求值。

### 顺序

### 选择

- `if...else if...else`

```js

三元运算符：条件？代码1:代码2  适当可以替换if else。
let score = 85;

if (score >= 90) {
    console.log("优秀");
} else if (score >= 80) {
    console.log("良好");
} else if (score >= 60) {
    console.log("及格");
} else {
    console.log("不及格");
}
```
`三元运算符`有时可以代替`if...else`

- `switch`：一般用作等值判断（===），不用做区间判断

```js
let count = 3;

switch (count) {
    case 1:
        console.log("周一");
        break;

    case 3:
        console.log("周三");
        break;

    default:
        consolg.log("休息");
}

```



### 循环

- for：建议用let定义

- while

- do…while

js同样使用break和continue。

```js
let count = 0;

while (count < 3) {
    console.log(`当前计数: ${count}`);
    count++;
}
```

```js
let num = 0;

do {
    console.log(`数字: ${num}`);
    num++;
} while (num < 2);
```

补充：

- `for...in`：遍历对象的所有可枚举属性。

  ```js
  const person = { name: "Alice", age: 25, city: "Beijing" };
  
  for (let key in person) {
      console.log(`${key}: ${person[key]}`);
  }
  //name: Alice
  //age: 25
  //city: Beijing
  ```

  

- `for...of`：遍历数组或其他可迭代对象（如字符串、Map、Set 等）的值。

  ```js
  const fruits = ["apple", "banana", "orange"];
  
  for (let fruit of fruits) {
      console.log(fruit);
  }
  //apple
  //banana
  //orange
  ```

  
