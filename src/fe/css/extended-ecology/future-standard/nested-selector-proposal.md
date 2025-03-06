---
title: 嵌套选择器提案
article: false
order: 2
---

CSS 嵌套选择器（CSS Nesting）是一个备受期待的提案，旨在让开发者能够以更简洁、更直观的方式编写 CSS 规则，类似于 Sass、Less 等预处理器中的嵌套语法。这个提案目前处于 **CSS Working Group** 的讨论和开发阶段，并已在部分浏览器中实现（如 Chrome 和 Edge）。

以下是关于 CSS 嵌套选择器的详细介绍、语法示例以及当前进展。

---

## **1. 什么是 CSS 嵌套选择器？**
CSS 嵌套选择器允许开发者在一个选择器内部嵌套另一个选择器，从而减少重复代码并提高可读性。它的灵感来源于 CSS 预处理器（如 Sass 和 Less），但直接在原生 CSS 中实现。

### **传统 CSS**
```css
.parent {
  color: red;
}

.parent .child {
  color: blue;
}
```

### **CSS 嵌套选择器**
```css
.parent {
  color: red;

  .child {
    color: blue;
  }
}
```

---

## **2. 语法规则**
### **2.1 基本嵌套**
使用 `&` 符号表示父选择器。

```css
.parent {
  color: red;

  & .child {
    color: blue;
  }
}
```

### **2.2 嵌套伪类和伪元素**
```css
.button {
  background: blue;

  &:hover {
    background: darkblue;
  }

  &::before {
    content: "★";
  }
}
```

### **2.3 嵌套媒体查询**
```css
.container {
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
}
```

### **2.4 嵌套复杂选择器**
```css
.card {
  color: black;

  &.active {
    color: red;
  }

  h2 + p {
    margin-top: 0;
  }
}
```

---

## **3. 当前进展**
### **3.1 浏览器支持**
• **Chrome**: 从 Chrome 112 开始支持。
• **Edge**: 从 Edge 112 开始支持。
• **Firefox**: 尚未支持。
• **Safari**: 尚未支持。

### **3.2 标准状态**
• 提案目前处于 **Editor's Draft** 阶段。
• 可以在 [CSS Nesting Module Level 3](https://drafts.csswg.org/css-nesting/) 查看最新草案。

### **3.3 兼容性**
由于支持尚未普及，建议在生产环境中使用 CSS 预处理器（如 Sass）或 PostCSS 插件（如 `postcss-nesting`）来实现类似功能。

---

## **4. 优点**
### **4.1 减少重复代码**
嵌套语法可以减少选择器的重复，使代码更简洁。

### **4.2 提高可读性**
嵌套结构更符合 HTML 的层级关系，便于理解和维护。

### **4.3 原生支持**
无需依赖预处理器，直接在浏览器中运行。

---

## **5. 缺点**
### **5.1 学习曲线**
对于不熟悉嵌套语法的开发者，需要一定的学习成本。

### **5.2 兼容性问题**
目前浏览器支持有限，可能需要使用工具进行降级处理。

### **5.3 潜在性能问题**
过度嵌套可能导致选择器复杂度增加，影响性能。

---

## **6. 替代方案**
### **6.1 使用 CSS 预处理器**
• **Sass**：
  ```scss
  .parent {
    color: red;

    .child {
      color: blue;
    }
  }
  ```
• **Less**：
  ```less
  .parent {
    color: red;

    .child {
      color: blue;
    }
  }
  ```

### **6.2 使用 PostCSS 插件**
• **postcss-nesting**：
  ```bash
  npm install postcss-nesting --save-dev
  ```
  ```css
  .parent {
    color: red;

    & .child {
      color: blue;
    }
  }
  ```

---

## **7. 示例**
### **7.1 传统 CSS**
```css
.nav {
  background: #333;
}

.nav ul {
  list-style: none;
}

.nav li {
  display: inline-block;
}

.nav a {
  color: white;
  text-decoration: none;
}
```

### **7.2 CSS 嵌套选择器**
```css
.nav {
  background: #333;

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
  }

  a {
    color: white;
    text-decoration: none;
  }
}
```

---

## **8. 总结**
CSS 嵌套选择器是一个非常有用的提案，能够显著提升 CSS 代码的可读性和可维护性。虽然目前浏览器支持有限，但通过 CSS 预处理器或 PostCSS 插件，开发者现在就可以体验类似的功能。随着标准的逐步完善和浏览器的广泛支持，CSS 嵌套选择器将成为现代 Web 开发的重要工具。
