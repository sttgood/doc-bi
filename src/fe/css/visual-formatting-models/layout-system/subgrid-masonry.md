---
title: Subgrid
article: false
order: 5
---

Subgrid 和 Masonry 布局是两种不同的 CSS 布局技术，分别用于解决不同的布局问题。Subgrid 是 CSS Grid 的一个扩展，而 Masonry 是一种特殊的网格布局风格，常用于瀑布流式的设计。以下是对两者的详细解释以及如何结合使用它们来实现复杂布局。

---

### **1. Subgrid 布局**
Subgrid 是 CSS Grid 的一个扩展功能，允许网格容器的子元素继承父容器的网格轨道（track）定义。这使得嵌套网格可以更好地与父网格对齐，简化复杂布局的实现。

#### **1.1 基本用法**
使用 `subgrid` 需要在子网格中设置 `grid-template-rows` 或 `grid-template-columns` 为 `subgrid`。例如：
```css
.parent {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
}

.child {
  display: grid;
  grid-template-columns: subgrid; /* 继承父网格的列轨道 */
}
```

#### **1.2 优点**
• **对齐简化**：子网格可以直接与父网格对齐，无需手动调整。
• **灵活性**：适用于复杂的嵌套布局，如表格、卡片布局等。
• **代码简洁**：减少重复的网格定义。

#### **1.3 浏览器支持**
截至 2023 年，Subgrid 在大多数现代浏览器中已得到支持，但在一些旧版浏览器中可能无法使用。

---

### **2. Masonry 布局**
Masonry 布局是一种类似于瀑布流的布局风格，元素根据可用空间动态排列，通常用于图片墙或卡片布局。与传统的网格布局不同，Masonry 布局中的元素高度可以不固定，从而更高效地利用空间。

#### **2.1 基本用法**
在 CSS 中，Masonry 布局可以通过 `grid-template-rows: masonry` 实现。例如：
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: masonry; /* 启用 Masonry 布局 */
  gap: 10px;
}
```

#### **2.2 优点**
• **空间利用**：动态排列元素，避免空白区域。
• **视觉美感**：适用于图片墙、卡片等不规则高度的布局。
• **响应式设计**：自动适应不同屏幕尺寸。

#### **2.3 浏览器支持**
截至 2023 年，Masonry 布局的 CSS 实现仍在实验阶段，仅在某些浏览器（如 Firefox）中支持。通常需要使用 JavaScript 库（如 Masonry.js）来实现跨浏览器兼容性。

---

### **3. 结合 Subgrid 和 Masonry 布局**
虽然 Subgrid 和 Masonry 是两种不同的布局技术，但它们可以结合使用来实现更复杂的布局。例如，可以在父网格中使用 Subgrid 对齐嵌套元素，而在子网格中使用 Masonry 布局实现瀑布流效果。

#### **3.1 示例代码**
```html
<div class="parent">
  <div class="child">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
  <div class="child">
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
</div>
```

```css
.parent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.child {
  display: grid;
  grid-template-columns: subgrid; /* 继承父网格的列轨道 */
  grid-template-rows: masonry; /* 启用 Masonry 布局 */
  gap: 10px;
}

.item {
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
}
```

#### **3.2 注意事项**
• **浏览器兼容性**：Masonry 布局的 CSS 实现尚未广泛支持，可能需要使用 JavaScript 库作为替代方案。
• **性能优化**：Masonry 布局可能对性能有一定影响，尤其是在元素数量较多时，建议使用虚拟化技术（如 `Intersection Observer`）优化性能。

---

### **4. 替代方案**
如果浏览器不支持 Subgrid 或 Masonry 布局，可以使用以下替代方案：
• **Flexbox + JavaScript**：使用 Flexbox 实现基本布局，结合 JavaScript 实现 Masonry 效果。
• **CSS Columns**：使用 `column-count` 和 `column-gap` 实现类似 Masonry 的布局。
• **JavaScript 库**：使用 Masonry.js、Isotope 等库实现瀑布流布局。

---

### **总结**
Subgrid 和 Masonry 布局是 CSS 中强大的布局工具，分别用于简化嵌套网格对齐和实现瀑布流效果。结合使用它们可以创建更复杂的布局，但需要注意浏览器兼容性问题。在实际开发中，可以根据需求选择合适的技术或替代方案。
