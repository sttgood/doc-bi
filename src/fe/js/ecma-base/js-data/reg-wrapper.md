---
title: 包装类型
article: false
order: 3
---
## 包装类

在 JavaScript 中，基本数据类型（如`Number`、`String`、`Boolean`）都有对应的包装类型。包装类型使得基本数据类型能够像对象一样使用，它们为基本数据类型提供了对象的一些特性，比如可以调用方法。

当基本数据类型需要调用一个方法或者访问一个属性时，JavaScript 会自动将基本数据类型转换为对应的包装类型，这个过程称为 “装箱”。在操作完成后，包装类型又会自动转换回基本数据类型，这个过程称为 “拆箱”。

| 包装类型              | 关联的原始类型 |
| --------------------- | -------------- |
| **`String`**          | `string`       |
| **`Number`**          | `number`       |
| **`BigInt`** (ES2020) | `bigint`       |
| **`Boolean`**         | `boolean`      |
| **`Symbol`**          | `symbol`       |

### `String`

- 包装了原始字符串值。
- 提供了许多实用的方法，例如`toUpperCase()`, `toLowerCase()`, `split()`, `substring()`, `replace()`等。

### `Number`

- 包装了原始数值。
- 提供了一些静态方法和实例方法，例如`toFixed()`, `toPrecision()`, `isNaN()`等。

### `Boolean`

- 包装了原始布尔值。
- 提供了基本的逻辑判断能力，但通常不会直接使用它的实例方法。

### `BigInt`

- ES2020 引入

- 包装了任意精度整数。
- 适用于处理超过`Number.MAX_SAFE_INTEGER`的大整数运算。

### `Symbol`

- 尽管`Symbol`不是传统意义上的包装类型，它确实是一个构造函数，可以用来创建唯一的标识符，并且可以通过`.description`属性获取描述信息。

### `Object`

- 可以被视为所有其他类型的基类，包括上述提到的包装类型。通过`new Object(value)`可以显式地将任何类型的值包装成对象。

## 自动包装与手动包装

- **自动包装**：当你对原始值调用方法或访问属性时，JavaScript会自动创建一个临时的包装对象。例如：

  ```js
  let str = "hello";
  console.log(str.toUpperCase()); // 输出: HELLO
  ```

- **手动包装**：你可以使用相应的构造函数显式地创建包装对象。然而，这种做法并不常见，不推荐

  ```js
  let num = new Number(42);
  console.log(num.valueOf()); // 输出: 42
  ```

注意：从ES5开始，当使用原始类型的构造函数作为普通函数调用（即不带 `new` 关键字）时，它们会返回相应类型的原始值而不是对象实例。例如：

```js
let strObj = String(42); // 返回 "42" 而不是一个 String 对象
console.log(typeof strObj); // "string"
```

**注意事项**：

- **避免不必要的包装对象**：由于每次访问原始值的属性或方法都会创建一个新的包装对象，这可能会带来性能开销。因此，在性能敏感的代码段中应尽量减少这样的操作。

- **相等性比较**：包装对象即使包含相同的值也**不会**被认为是相等的，因为它们是不同的对象实例。

  ```js
  let str1 = new String("hello");
  let str2 = new String("hello");
  
  console.log(str1 == str2); // false, 因为它们是两个不同的对象
  console.log(str1 === str2); // false, 同上
  ```