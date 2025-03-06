---
title: 内联盒子与块级盒子
article: false
order: 3
---

在CSS中，**盒子模型**是布局的核心概念之一。盒子模型中的每个元素都可以被视为一个矩形盒子，这个盒子由内容、内边距、边框和外边距组成。根据盒子的显示方式，可以分为**内联盒子（Inline Box）**和**块级盒子（Block Box）**。以下是它们的详细解析：

---

## **1. 块级盒子 (Block Box)**
块级盒子是指元素在页面上以块的形式显示，占据整行，并且可以设置宽度、高度、内外边距等属性。

### 特点
• **独占一行**：块级元素默认占据父容器的整个宽度，即使内容没有填满整行。
• **支持宽高**：可以设置宽度（`width`）和高度（`height`）。
• **支持内外边距**：可以设置内边距（`padding`）、外边距（`margin`）和边框（`border`）。
• **默认换行**：块级元素会自动在前后添加换行。

### 常见的块级元素
• `<div>`
• `<p>`
• `<h1>` 到 `<h6>`
• `<ul>`, `<ol>`, `<li>`
• `<table>`
• `<form>`

### 示例
```html
<div style="width: 200px; height: 100px; background-color: yellow;">
  这是一个块级盒子
</div>
<p style="background-color: lightblue;">这是一个段落。</p>
```

---

## **2. 内联盒子 (Inline Box)**
内联盒子是指元素在页面上以内联的形式显示，不会独占一行，而是与其他内联元素共享一行。

### 特点
• **不独占一行**：内联元素只占据内容所需的宽度，与其他内联元素共享一行。
• **不支持宽高**：设置宽度（`width`）和高度（`height`）无效。
• **水平方向的内外边距**：可以设置水平方向的内边距（`padding-left`、`padding-right`）和外边距（`margin-left`、`margin-right`），但垂直方向的内外边距通常无效。
• **不默认换行**：内联元素不会在前后添加换行。

### 常见的内联元素
• `<span>`
• `<a>`
• `<strong>`, `<em>`
• `<img>`
• `<input>`
• `<label>`

### 示例
```html
<span style="background-color: yellow;">这是一个内联盒子</span>
<a href="#" style="background-color: lightblue;">这是一个链接</a>
```

---

## **3. 内联块级盒子 (Inline-Block Box)**
内联块级盒子是介于块级盒子和内联盒子之间的一种显示方式，它既具有内联盒子的特性（不独占一行），又具有块级盒子的特性（支持宽高和内外边距）。

### 特点
• **不独占一行**：与其他内联元素共享一行。
• **支持宽高**：可以设置宽度（`width`）和高度（`height`）。
• **支持内外边距**：可以设置内边距（`padding`）、外边距（`margin`）和边框（`border`）。

### 示例
```html
<div style="display: inline-block; width: 100px; height: 50px; background-color: yellow;">
  内联块级盒子
</div>
<span style="display: inline-block; width: 100px; height: 50px; background-color: lightblue;">
  内联块级盒子
</span>
```

---

## **4. 盒子模型的显示方式**
通过 `display` 属性可以控制盒子的显示方式：
• `display: block;`：将元素设置为块级盒子。
• `display: inline;`：将元素设置为内联盒子。
• `display: inline-block;`：将元素设置为内联块级盒子。
• `display: none;`：隐藏元素，不占据空间。

### 示例
```html
<div style="display: inline; background-color: yellow;">
  这是一个内联盒子
</div>
<span style="display: block; background-color: lightblue;">
  这是一个块级盒子
</span>
```

---

## **5. 盒子模型的布局行为**
• **块级盒子**：适合用于布局的容器，例如页面的头部、内容区域、侧边栏等。
• **内联盒子**：适合用于文本或小元素的布局，例如链接、图标等。
• **内联块级盒子**：适合用于需要设置宽高但仍需与其他元素共享一行的场景，例如按钮、导航项等。

---

## **总结**
• **块级盒子**：独占一行，支持宽高和内外边距，适合用于布局容器。
• **内联盒子**：不独占一行，不支持宽高，适合用于文本或小元素。
• **内联块级盒子**：不独占一行，支持宽高和内外边距，适合用于需要设置宽高的内联元素。
• **盒子模型**：由内容、内边距、边框和外边距组成。

通过理解盒子的类型和显示方式，可以更好地控制网页的布局和样式。
