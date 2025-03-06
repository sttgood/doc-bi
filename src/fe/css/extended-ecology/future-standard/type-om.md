---
title: 类型化对象模型 Typed OM
article: false
order: 3
---

## 类型化对象模型 (Typed OM)

### 简介

CSS 类型化对象模型（Typed Object Model，简称 Typed OM）是 CSS Houdini 项目的一部分，旨在为开发者提供更强大、更灵活的 CSS 操作能力。传统的 CSSOM（CSS Object Model）在处理 CSS 值时存在一定的局限性，而 Typed OM 通过引入类型化的值对象，使得开发者可以更精确地操作和计算 CSS 属性。

### 传统 CSSOM 的局限性

在传统的 CSSOM 中，CSS 值通常以字符串的形式表示。例如，获取一个元素的 `width` 属性会返回一个字符串（如 `"100px"`），开发者需要手动解析这些字符串来进行计算或转换。这种方式不仅繁琐，而且容易出错。

### Typed OM 的优势

Typed OM 引入了类型化的值对象，将 CSS 值表示为具有特定类型的对象。例如，`100px` 会被表示为一个 `CSSUnitValue` 对象，包含数值 `100` 和单位 `px`。这种方式使得开发者可以直接操作这些对象，而无需手动解析字符串。

#### 主要特点：

1. **类型化值**：CSS 值被表示为具有特定类型的对象，如 `CSSUnitValue`、`CSSKeywordValue` 等。
2. **直接操作**：开发者可以直接对这些对象进行数学运算、单位转换等操作。
3. **类型安全**：由于值是类型化的，减少了因类型错误导致的潜在问题。
4. **更好的性能**：避免了频繁的字符串解析和转换，提升了性能。

### 示例

以下是一个使用 Typed OM 的简单示例：

```javascript
// 获取元素的宽度
const element = document.querySelector('.my-element');
const width = element.computedStyleMap().get('width');

// width 是一个 CSSUnitValue 对象
console.log(width); // { value: 100, unit: 'px' }

// 直接进行数学运算
const newWidth = width.add(new CSSUnitValue(50, 'px'));
console.log(newWidth); // { value: 150, unit: 'px' }

// 设置新的宽度
element.attributeStyleMap.set('width', newWidth);
```

### 支持的类型

Typed OM 支持多种 CSS 值类型，包括：

• `CSSUnitValue`：表示带单位的数值，如 `100px`、`2em`。
• `CSSKeywordValue`：表示关键字值，如 `auto`、`inherit`。
• `CSSMathValue`：表示数学表达式，如 `calc(100px + 50px)`。
• `CSSTransformValue`：表示变换值，如 `translate(10px, 20px)`。

### 浏览器支持

Typed OM 目前仍在开发中，部分功能可能尚未在所有浏览器中实现。建议在使用时检查浏览器的兼容性，并考虑使用 polyfill 或备用方案。

### 总结

CSS 类型化对象模型为开发者提供了更强大、更灵活的 CSS 操作能力，使得处理 CSS 值变得更加直观和高效。随着浏览器对 Typed OM 的支持逐渐完善，它将成为未来 CSS 开发的重要工具之一。
