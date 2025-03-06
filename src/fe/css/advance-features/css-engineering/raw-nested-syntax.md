---
title: 原生嵌套语法
article: false
order: 2
---

CSS 原生嵌套语法是 CSS 的一项新特性，允许开发者以嵌套的方式编写样式规则，从而提高代码的可读性和维护性。这一特性最初在 Sass 等预处理器中引入，现在逐渐被原生 CSS 支持。以下是对 CSS 原生嵌套语法的详细说明。

---

### **1. 基本语法**
CSS 原生嵌套语法允许在一个规则块内嵌套另一个规则块。例如：
```css
.parent {
  color: red;

  .child {
    color: blue;
  }
}
```
编译后相当于：
```css
.parent {
  color: red;
}

.parent .child {
  color: blue;
}
```

---

### **2. 嵌套选择器**
在嵌套语法中，可以使用多种选择器，包括类选择器、ID 选择器、伪类、伪元素等。例如：
```css
.card {
  background-color: #fff;

  &__title {
    font-size: 24px;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  &::after {
    content: '';
    display: block;
  }
}
```
编译后相当于：
```css
.card {
  background-color: #fff;
}

.card__title {
  font-size: 24px;
}

.card:hover {
  background-color: #f0f0f0;
}

.card::after {
  content: '';
  display: block;
}
```

---

### **3. `&` 符号**
`&` 符号用于引用父选择器，是嵌套语法的核心。它可以用于：
• **拼接选择器**：例如 `&__title`。
• **伪类和伪元素**：例如 `&:hover`、`&::after`。
• **嵌套规则**：例如 `& .child`。

---

### **4. 嵌套媒体查询**
媒体查询也可以嵌套在规则块中。例如：
```css
.container {
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
}
```
编译后相当于：
```css
.container {
  width: 100%;
}

@media (min-width: 768px) {
  .container {
    width: 50%;
  }
}
```

---

### **5. 嵌套 `@keyframes`**
`@keyframes` 动画也可以嵌套在规则块中。例如：
```css
.box {
  animation: slide 2s;

  @keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
  }
}
```
编译后相当于：
```css
.box {
  animation: slide 2s;
}

@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
```

---

### **6. 嵌套 `@layer`**
CSS 层级规则（`@layer`）也可以嵌套。例如：
```css
@layer base {
  .button {
    color: red;

    @layer theme {
      .button--primary {
        color: blue;
      }
    }
  }
}
```
编译后相当于：
```css
@layer base {
  .button {
    color: red;
  }
}

@layer base.theme {
  .button--primary {
    color: blue;
  }
}
```

---

### **7. 嵌套的优势**
• **可读性**：嵌套语法使代码结构更清晰，易于理解。
• **维护性**：减少重复代码，方便修改和扩展。
• **模块化**：支持将相关样式组织在一起，便于管理。

---

### **8. 注意事项**
• **性能**：过度嵌套可能导致选择器层级过深，影响性能。
• **兼容性**：原生嵌套语法目前仍在逐步支持中，需检查目标浏览器的兼容性。
• **工具支持**：确保使用的开发工具（如编辑器、构建工具）支持原生嵌套语法。

---

### **9. 示例代码**
以下是一个完整的示例：
```css
.navbar {
  background-color: #333;

  &__item {
    color: white;

    &:hover {
      color: yellow;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
}
```
编译后相当于：
```css
.navbar {
  background-color: #333;
}

.navbar__item {
  color: white;
}

.navbar__item:hover {
  color: yellow;
}

@media (max-width: 768px) {
  .navbar {
    display: none;
  }
}
```

---

### **总结**
CSS 原生嵌套语法是一种强大的工具，可以显著提高代码的可读性和维护性。通过合理使用嵌套语法，开发者可以更高效地编写和组织 CSS 代码。需要注意的是，目前原生嵌套语法仍在逐步支持中，需根据项目需求选择合适的实现方式。
