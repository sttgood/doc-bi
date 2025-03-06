---
title: Grid布局模板
article: false
order: 2
---

**CSS Grid 布局** 是一种强大的二维布局系统，能够轻松实现复杂的网页布局。以下是常见的 Grid 布局模板，涵盖了从简单到复杂的多种场景。

---

## **1. 基础 Grid 布局**
### **1.1 等分列布局**
将容器分为等宽的列。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 列等宽 */
  gap: 10px; /* 列间距 */
}
```

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### **1.2 等分行布局**
将容器分为等高的行。

```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 100px); /* 3 行等高 */
  gap: 10px;
}
```

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## **2. 复杂 Grid 布局**
### **2.1 网格区域布局**
使用 `grid-template-areas` 定义布局区域。

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

```html
<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>
```

### **2.2 响应式网格布局**
使用 `minmax` 和 `auto-fit` 实现响应式布局。

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
}
```

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

---

## **3. 特殊 Grid 布局**
### **3.1 混合固定和弹性列**
混合固定宽度和弹性宽度的列。

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 100px; /* 固定宽度 + 弹性宽度 + 固定宽度 */
  gap: 10px;
}
```

```html
<div class="container">
  <div>Fixed 200px</div>
  <div>Flexible Width</div>
  <div>Fixed 100px</div>
</div>
```

### **3.2 嵌套网格**
在网格项中嵌套另一个网格。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.nested-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}
```

```html
<div class="container">
  <div>Item 1</div>
  <div class="nested-grid">
    <div>Nested 1</div>
    <div>Nested 2</div>
  </div>
</div>
```

---

## **4. 高级 Grid 布局**
### **4.1 跨越行和列**
使用 `grid-column` 和 `grid-row` 跨越多个单元格。

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}

.item1 {
  grid-column: span 2; /* 跨越 2 列 */
}

.item2 {
  grid-row: span 2; /* 跨越 2 行 */
}
```

```html
<div class="container">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

### **4.2 使用 `auto-fill` 和 `auto-fit`**
自动填充或适应可用空间。

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}
```

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

---

## **5. 实战 Grid 布局模板**
### **5.1 经典三栏布局**
```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 10px;
}
```

```html
<div class="container">
  <div>Left Sidebar</div>
  <div>Main Content</div>
  <div>Right Sidebar</div>
</div>
```

### **5.2 杂志式布局**
```css
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 150px);
  gap: 10px;
}

.item1 {
  grid-column: span 2;
  grid-row: span 2;
}

.item2 {
  grid-column: span 2;
}
```

```html
<div class="container">
  <div class="item1">Featured</div>
  <div class="item2">News</div>
  <div>Article 1</div>
  <div>Article 2</div>
  <div>Article 3</div>
</div>
```

---

## **6. 总结**
CSS Grid 布局提供了强大的二维布局能力，能够轻松实现从简单到复杂的多种布局需求。通过掌握以下技巧，可以高效使用 Grid 布局：
• 使用 `grid-template-columns` 和 `grid-template-rows` 定义网格。
• 使用 `grid-template-areas` 定义布局区域。
• 使用 `minmax`、`auto-fit` 和 `auto-fill` 实现响应式布局。
• 使用 `grid-column` 和 `grid-row` 跨越多个单元格。

结合以上模板和技巧，可以快速构建现代、灵活的网页布局。
