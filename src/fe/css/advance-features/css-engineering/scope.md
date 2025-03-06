---
title: 作用域样式
article: false
order: 3
---

CSS的**作用域样式（Scoped Styles）**是一种将样式规则限制在特定元素或组件内的机制，避免全局样式的污染。虽然原生CSS本身没有直接提供作用域样式的支持，但可以通过以下方式实现类似的效果：

---

## **1. 原生CSS的作用域样式**
原生CSS中，可以通过以下方式模拟作用域样式：

### **1.1 使用类名或ID**
通过为特定元素或组件添加唯一的类名或ID，将样式限制在该元素或组件内。

```html
<div class="component">
  <p class="component__text">这是一个组件内的段落。</p>
</div>
```
```css
.component__text {
  color: blue;
}
```

### **1.2 使用属性选择器**
通过属性选择器将样式限制在具有特定属性的元素内。

```html
<div data-component="true">
  <p data-component="true">这是一个组件内的段落。</p>
</div>
```
```css
[data-component="true"] {
  color: blue;
}
```

---

## **2. CSS预处理器的作用域样式**
CSS预处理器（如Sass、Less）提供了更强大的作用域样式支持。

### **2.1 Sass的嵌套规则**
Sass允许通过嵌套规则将样式限制在父元素内。

```scss
.component {
  .text {
    color: blue;
  }
}
```

### **2.2 Less的嵌套规则**
Less也支持嵌套规则，类似于Sass。

```less
.component {
  .text {
    color: blue;
  }
}
```

---

## **3. CSS模块（CSS Modules）**
CSS模块是一种将CSS样式局部化的技术，通常与构建工具（如Webpack）一起使用。每个CSS文件中的类名会被自动转换为唯一的名称，避免全局冲突。

### **3.1 使用CSS模块**
```css
/* styles.module.css */
.text {
  color: blue;
}
```
```javascript
import styles from './styles.module.css';

function Component() {
  return <p className={styles.text}>这是一个组件内的段落。</p>;
}
```

### **3.2 生成的类名**
构建工具会将 `.text` 转换为唯一的类名，例如 `styles_text__1a2b3`。

---

## **4. Shadow DOM的作用域样式**
Shadow DOM是Web组件的一部分，它提供了一种将样式和标记封装在组件内的机制，样式不会泄漏到外部，外部样式也不会影响组件内部。

### **4.1 使用Shadow DOM**
```javascript
class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        p {
          color: blue;
        }
      </style>
      <p>这是一个组件内的段落。</p>
    `;
  }
}

customElements.define('my-component', MyComponent);
```

### **4.2 样式隔离**
Shadow DOM中的样式不会影响外部文档，外部文档的样式也不会影响Shadow DOM内的元素。

---

## **5. CSS-in-JS的作用域样式**
CSS-in-JS是一种将CSS样式直接写在JavaScript中的技术，通常用于React等框架中。它通过生成唯一的类名或内联样式来实现作用域样式。

### **5.1 使用styled-components**
```javascript
import styled from 'styled-components';

const Text = styled.p`
  color: blue;
`;

function Component() {
  return <Text>这是一个组件内的段落。</Text>;
}
```

### **5.2 生成的样式**
`styled-components` 会生成唯一的类名，并将样式注入到文档的 `<style>` 标签中。

---

## **6. 原生CSS的 `@scope` 规则**
CSS Cascading and Inheritance Level 5（CSS层叠与继承第5级）引入了 `@scope` 规则，用于定义作用域样式。

### **6.1 使用 `@scope`**
```css
@scope (.component) {
  p {
    color: blue;
  }
}
```

### **6.2 样式限制**
`@scope` 规则将样式限制在 `.component` 元素及其子元素内。

---

## **7. 总结**
• **原生CSS**：通过类名、ID或属性选择器模拟作用域样式。
• **CSS预处理器**：通过嵌套规则实现作用域样式。
• **CSS模块**：通过构建工具生成唯一的类名，避免全局冲突。
• **Shadow DOM**：通过Web组件实现样式隔离。
• **CSS-in-JS**：通过生成唯一的类名或内联样式实现作用域样式。
• **`@scope` 规则**：CSS的新特性，用于定义作用域样式。

通过灵活使用这些技术，可以实现CSS样式的作用域化，避免全局样式的污染，提高代码的可维护性和可扩展性。
