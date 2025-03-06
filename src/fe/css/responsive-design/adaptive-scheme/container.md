---
title: 容器查询 container
article: false
order: 2
---

CSS 容器查询（Container Queries）是一种新的 CSS 特性，允许开发者根据容器（父元素）的尺寸来应用样式，而不是仅仅依赖于视口尺寸（如媒体查询）。这一特性极大地增强了组件的灵活性和可复用性，使其能够根据所处的容器尺寸自适应调整样式。

---

### **1. 基本概念**
容器查询的核心思想是：**根据容器元素的尺寸动态调整子元素的样式**。这与媒体查询（`@media`）不同，媒体查询是基于视口尺寸的，而容器查询是基于父元素尺寸的。

---

### **2. 使用方式**
#### **2.1 定义容器**
首先，需要将父元素声明为容器。使用 `container-type` 或 `container` 属性来定义容器的类型：
• `container-type: inline-size`：容器查询基于容器的内联尺寸（通常是宽度）。
• `container-type: size`：容器查询基于容器的宽度和高度。
• `container`：简写属性，可以同时设置 `container-type` 和 `container-name`。

例如：
```css
.parent {
  container-type: inline-size;
}
```

#### **2.2 使用容器查询**
使用 `@container` 规则定义容器查询，根据容器的尺寸应用样式。例如：
```css
.child {
  font-size: 16px;
}

@container (min-width: 400px) {
  .child {
    font-size: 20px;
  }
}
```
当 `.parent` 的宽度大于等于 400px 时，`.child` 的字体大小会变为 20px。

---

### **3. 容器查询的语法**
容器查询的语法与媒体查询类似，支持以下特性：
• **尺寸条件**：如 `min-width`、`max-width`、`min-height`、`max-height`。
• **逻辑操作符**：如 `and`、`or`、`not`。
• **自定义容器名称**：通过 `container-name` 为容器命名，以便在多个容器中区分查询。

例如：
```css
.parent {
  container-type: inline-size;
  container-name: sidebar;
}

@container sidebar (min-width: 300px) {
  .child {
    background-color: lightblue;
  }
}
```

---

### **4. 示例代码**
以下是一个完整的容器查询示例：
```html
<div class="container">
  <div class="box">这是一个自适应容器</div>
</div>
```

```css
.container {
  container-type: inline-size;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border: 2px solid #ccc;
  padding: 20px;
}

.box {
  background-color: lightcoral;
  padding: 10px;
  text-align: center;
}

@container (min-width: 400px) {
  .box {
    background-color: lightblue;
    font-size: 20px;
  }
}
```
在这个示例中，当 `.container` 的宽度大于等于 400px 时，`.box` 的背景颜色和字体大小会发生变化。

---

### **5. 应用场景**
容器查询非常适合以下场景：
• **组件化开发**：使组件能够根据其父容器的尺寸自适应调整样式。
• **卡片布局**：在卡片容器中，根据卡片大小调整内容布局。
• **侧边栏**：根据侧边栏的宽度调整内部元素的样式。
• **响应式设计**：在不依赖视口尺寸的情况下，实现更灵活的响应式布局。

---

### **6. 注意事项**
• **浏览器兼容性**：截至 2023 年，容器查询在现代浏览器中已逐步支持，但在旧版浏览器中可能无法使用。可以通过 [Can I use](https://caniuse.com/css-container-queries) 查看兼容性。
• **性能优化**：容器查询可能会增加渲染计算量，需谨慎使用。
• **命名规范**：为容器命名时，建议使用有意义的名称，以便于维护和区分。

---

### **7. 与其他技术的对比**
| 特性           | 容器查询（`@container`） | 媒体查询（`@media`） |
| -------------- | ------------------------ | -------------------- |
| **基于对象**   | 容器元素                 | 视口                 |
| **灵活性**     | 高                       | 较低                 |
| **组件化支持** | 是                       | 否                   |
| **兼容性**     | 逐步支持                 | 广泛支持             |

---

### **总结**
CSS 容器查询是一项革命性的特性，使开发者能够根据容器尺寸动态调整样式，极大地增强了组件的灵活性和可复用性。它非常适合组件化开发和响应式设计，但在使用时需要注意浏览器兼容性和性能优化。随着浏览器支持的不断完善，容器查询将成为现代 Web 开发的重要工具之一。
