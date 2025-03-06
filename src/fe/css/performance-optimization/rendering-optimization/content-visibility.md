---
title: 内容可见性优化 content-visibility
article: false
order: 3
---

**`content-visibility`** 是 CSS 中的一个新属性，用于优化页面渲染性能，特别是在处理大量内容时。它通过延迟渲染不可见的内容来减少初始加载时间，从而提升页面性能。以下是关于 `content-visibility` 的详细解析及优化方法。

---

## **1. 什么是 `content-visibility`？**
`content-visibility` 控制浏览器是否渲染元素的内容。它通过跳过不在视口内的内容的渲染和布局计算，显著减少初始渲染时间。

### **属性值**
• **`visible`**（默认值）：元素正常渲染。
• **`hidden`**：元素的内容被跳过渲染，但仍保留布局空间。
• **`auto`**：元素在视口外时跳过渲染，进入视口时自动渲染。

---

## **2. 如何使用 `content-visibility`？**
### **2.1 基本用法**
```css
.container {
  content-visibility: auto;
}
```

### **2.2 结合 `contain-intrinsic-size`**
由于 `content-visibility: auto` 会跳过渲染，浏览器无法知道元素的实际高度，因此需要使用 `contain-intrinsic-size` 提供一个占位高度，避免布局抖动。

```css
.container {
  content-visibility: auto;
  contain-intrinsic-size: 500px; /* 假设元素高度为 500px */
}
```

---

## **3. 适用场景**
### **3.1 长列表或表格**
对于包含大量数据的列表或表格，使用 `content-visibility: auto` 可以显著减少初始渲染时间。

```css
.table-row {
  content-visibility: auto;
  contain-intrinsic-size: 50px; /* 每行高度为 50px */
}
```

### **3.2 分页内容**
对于分页加载的内容，可以为每页内容设置 `content-visibility: auto`，确保只有当前页的内容被渲染。

```css
.page {
  content-visibility: auto;
  contain-intrinsic-size: 1000px; /* 每页高度为 1000px */
}
```

### **3.3 大型文档**
对于包含大量文本的文档，可以将每个段落或章节设置为 `content-visibility: auto`，优化渲染性能。

```css
.paragraph {
  content-visibility: auto;
  contain-intrinsic-size: 200px; /* 每段高度为 200px */
}
```

---

## **4. 优化注意事项**
### **4.1 避免滥用**
• 不要对所有元素都使用 `content-visibility`，否则可能导致不必要的复杂性。
• 仅对需要优化的内容（如长列表、分页内容）使用。

### **4.2 确保占位高度准确**
`contain-intrinsic-size` 的值应尽量接近实际高度，避免布局抖动。

### **4.3 兼容性**
`content-visibility` 是较新的特性，需检查浏览器兼容性。目前支持 Chrome 85+、Edge 85+、Opera 71+，但不支持 Firefox 和 Safari。

---

## **5. 性能对比**
### **5.1 未优化**
```css
.container {
  /* 默认渲染所有内容 */
}
```

### **5.2 优化后**
```css
.container {
  content-visibility: auto;
  contain-intrinsic-size: 500px;
}
```

### **5.3 结果**
• **渲染时间**：优化后，初始渲染时间显著减少。
• **内存占用**：优化后，内存占用降低，因为未渲染的内容不会占用资源。
• **交互性能**：优化后，页面滚动和交互更加流畅。

---

## **6. 示例代码**
```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <!-- 1000+ items -->
</div>
```

```css
.container {
  content-visibility: auto;
  contain-intrinsic-size: 5000px; /* 假设容器总高度为 5000px */
}

.item {
  height: 50px;
  border-bottom: 1px solid #ccc;
}
```

---

## **7. 总结**
`content-visibility` 是一种强大的性能优化工具，特别适用于处理大量内容的场景。通过合理使用 `content-visibility` 和 `contain-intrinsic-size`，可以显著减少初始渲染时间，提升页面性能。但需要注意：
• 仅在需要优化的内容上使用。
• 确保 `contain-intrinsic-size` 的值准确。
• 检查浏览器兼容性。

通过结合其他优化技术（如懒加载、代码分割），可以进一步提升页面性能。
