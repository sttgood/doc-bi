---
title: CSS4提案特性
article: false
order: 2
---

截至2023年，**CSS4** 并不是一个正式的标准版本，而是一个非官方的术语，通常用来指代一些最新的CSS提案或正在开发中的特性。CSS的标准版本仍然以模块化的方式发布（例如CSS Level 3、CSS Level 4等），每个模块独立发展，而不是作为一个整体的“CSS4”发布。

以下是近年来一些备受关注的CSS新特性和提案，这些特性可能被纳入未来的CSS标准中：

---

## **1. 嵌套规则 (Nesting Rules)**
嵌套规则允许在CSS中嵌套选择器，类似于Sass或Less的语法，减少重复代码。

```css
/* 提案中的嵌套语法 */
.container {
  padding: 20px;

  .title {
    font-size: 24px;
  }

  .content {
    margin-top: 10px;
  }
}
```

---

## **2. 容器查询 (Container Queries)**
容器查询允许根据父元素的尺寸（而不是视口尺寸）来调整子元素的样式，解决了媒体查询只能基于视口的限制。

```css
/* 提案中的容器查询语法 */
.component {
  display: flex;
}

@container (max-width: 500px) {
  .component {
    flex-direction: column;
  }
}
```

---

## **3. 作用域样式 (Scoped Styles)**
作用域样式允许将样式限制在特定的元素或组件内，避免全局样式的污染。

```css
/* 提案中的作用域样式语法 */
@scope (.card) {
  .title {
    font-size: 18px;
  }
}
```

---

## **4. 颜色函数和颜色空间 (Color Functions and Color Spaces)**
CSS4引入了更多的颜色函数和颜色空间，例如 `lab()`、`lch()`、`color-mix()` 等，提供更灵活的颜色处理能力。

```css
/* 提案中的颜色函数 */
.element {
  background-color: lab(75% 20 -30);
  color: color-mix(in lch, red, blue);
}
```

---

## **5. 自定义媒体查询 (Custom Media Queries)**
自定义媒体查询允许定义可重用的媒体查询条件，减少重复代码。

```css
/* 提案中的自定义媒体查询 */
@custom-media --small-viewport (max-width: 600px);

@media (--small-viewport) {
  .container {
    padding: 10px;
  }
}
```

---

## **6. 子网格 (Subgrid)**
子网格是CSS Grid的扩展，允许网格项继承父网格的轨道定义，实现更复杂的布局。

```css
/* 提案中的子网格语法 */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item {
  display: grid;
  grid-template-columns: subgrid;
}
```

---

## **7. 动画增强 (Animation Enhancements)**
CSS4提案中引入了更多的动画控制功能，例如：
• `animation-timeline`：允许将动画与滚动或其他时间轴绑定。
• `@keyframes` 的更多控制选项。

```css
/* 提案中的动画增强 */
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}

.element {
  animation: slide linear;
  animation-timeline: scroll();
}
```

---

## **8. 逻辑属性 (Logical Properties)**
逻辑属性允许根据文档的书写模式（如从左到右或从右到左）动态调整样式，提高国际化支持。

```css
/* 提案中的逻辑属性 */
.element {
  margin-inline-start: 10px; /* 根据书写模式调整 */
  padding-block-end: 20px;   /* 根据书写模式调整 */
}
```

---

## **9. 视口单位增强 (Viewport Unit Enhancements)**
CSS4提案中引入了更多的视口单位，例如 `svh`（小视口高度）、`lvh`（大视口高度）等，解决移动设备视口单位的问题。

```css
/* 提案中的视口单位 */
.header {
  height: 100svh; /* 小视口高度 */
}
```

---

## **10. 表单控件样式增强 (Form Control Styling)**
CSS4提案中提供了更多的表单控件样式控制，例如自定义复选框、单选按钮、输入框等。

```css
/* 提案中的表单控件样式 */
input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
}

input[type="checkbox"]:checked {
  background-color: blue;
}
```

---

## **11. 文本换行增强 (Text Wrapping Enhancements)**
CSS4提案中引入了更多的文本换行控制，例如 `text-wrap: balance`，用于优化文本的换行效果。

```css
/* 提案中的文本换行 */
.title {
  text-wrap: balance;
}
```

---

## **12. 混合模式增强 (Blend Mode Enhancements)**
CSS4提案中扩展了混合模式的功能，例如 `mix-blend-mode` 和 `background-blend-mode` 的更多选项。

```css
/* 提案中的混合模式 */
.element {
  background-blend-mode: luminosity;
}
```

---

## **总结**
CSS4并不是一个正式的标准版本，而是指一系列正在开发中的CSS新特性和提案。这些特性旨在解决现有CSS的局限性，提供更强大的布局、样式和动画控制能力。开发者可以通过关注这些提案，提前了解未来的CSS发展方向，并在支持的环境中尝试使用这些新特性。
