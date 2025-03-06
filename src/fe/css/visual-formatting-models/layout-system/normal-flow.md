---
title: 普通文档流
article: false
order: 1
---

**CSS 常规流（Normal Flow）** 是 CSS 布局中的默认布局方式，它描述了元素在页面中按照其在 HTML 文档中的顺序自然排列的方式。在常规流中，元素按照其在 HTML 中的顺序依次排列，块级元素从上到下排列，内联元素从左到右排列。以下是常规流的详细解析：

---

### 一、常规流的基本概念

1. **什么是常规流？**
   • 常规流是 CSS 布局的默认方式，元素按照其在 HTML 中的顺序自然排列。
   • 块级元素（如 `<div>`、`<p>`）在常规流中从上到下排列。
   • 内联元素（如 `<span>`、`<a>`）在常规流中从左到右排列。

2. **常规流的特点**
   • 元素按照其在 HTML 中的顺序排列。
   • 块级元素占据一整行，内联元素在同一行内排列。
   • 元素的布局受 `display` 属性、`position` 属性和 `float` 属性的影响。

---

### 二、常规流中的元素类型

1. **块级元素（Block-level Elements）**
   • 默认情况下，块级元素占据一整行，从上到下排列。
   • 常见的块级元素：`<div>`、`<p>`、`<h1>` 到 `<h6>`、`<ul>`、`<li>` 等。
   • 通过 `display: block` 可以将元素设置为块级元素。

2. **内联元素（Inline Elements）**
   • 默认情况下，内联元素在同一行内从左到右排列，宽度由内容决定。
   • 常见的内联元素：`<span>`、`<a>`、`<strong>`、`<em>` 等。
   • 通过 `display: inline` 可以将元素设置为内联元素。

3. **内联块级元素（Inline-block Elements）**
   • 内联块级元素在同一行内排列，但可以设置宽度、高度、内边距和边框。
   • 通过 `display: inline-block` 可以将元素设置为内联块级元素。

---

### 三、常规流中的布局规则

1. **块级元素的布局规则**
   • 块级元素从上到下排列，每个元素占据一整行。
   • 元素的宽度默认占满父容器的宽度，高度由内容决定。
   • 可以通过 `width`、`height`、`margin`、`padding` 等属性调整大小和间距。

2. **内联元素的布局规则**
   • 内联元素在同一行内从左到右排列，宽度由内容决定。
   • 不能设置宽度、高度、垂直方向的内边距和外边距。
   • 可以通过 `line-height` 调整行高，通过 `padding` 和 `margin` 调整水平方向的间距。

3. **内联块级元素的布局规则**
   • 内联块级元素在同一行内排列，可以设置宽度、高度、内边距和边框。
   • 可以通过 `vertical-align` 调整垂直对齐方式。

---

### 四、常规流中的常见问题与解决方案

1. **块级元素的外边距折叠**
   • 问题：相邻块级元素的上下外边距会折叠。
   • 解决方案：添加边框、内边距或使用 `overflow: hidden`。

2. **内联元素的垂直对齐问题**
   • 问题：内联元素的垂直对齐方式可能不一致。
   • 解决方案：使用 `vertical-align` 调整对齐方式。

3. **内联块级元素的间距问题**
   • 问题：内联块级元素之间会有默认的间距。
   • 解决方案：将父容器的 `font-size` 设置为 `0`，或使用负 `margin`。

---

### 五、常规流的实际应用

1. **基本布局**
   ```html
   <div class="container">
     <div class="box">Box 1</div>
     <div class="box">Box 2</div>
     <div class="box">Box 3</div>
   </div>
   ```
   ```css
   .container {
     width: 100%;
   }
   .box {
     width: 100px;
     height: 100px;
     margin: 10px;
     background-color: #007bff;
   }
   ```

2. **内联元素布局**
   ```html
   <div class="container">
     <span class="item">Item 1</span>
     <span class="item">Item 2</span>
     <span class="item">Item 3</span>
   </div>
   ```
   ```css
   .container {
     font-size: 0; /* 去除内联块级元素的默认间距 */
   }
   .item {
     display: inline-block;
     width: 100px;
     height: 100px;
     margin: 10px;
     background-color: #ff6347;
     font-size: 16px; /* 恢复字体大小 */
   }
   ```

3. **垂直居中**
   ```html
   <div class="container">
     <div class="box">Centered Box</div>
   </div>
   ```
   ```css
   .container {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 200px;
     background-color: #f0f0f0;
   }
   .box {
     width: 100px;
     height: 100px;
     background-color: #28a745;
   }
   ```

---

### 六、总结

CSS 常规流是默认的布局方式，元素按照其在 HTML 中的顺序自然排列。通过理解块级元素、内联元素和内联块级元素的布局规则，可以更好地控制页面的布局。在实际开发中，结合 `display` 属性、`position` 属性和 `float` 属性，可以实现更复杂的布局效果。
