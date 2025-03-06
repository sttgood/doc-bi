---
title: 视口单位
article: false
order: 1
---

视口单位（Viewport Units）是 CSS 中用于定义相对于视口（viewport）尺寸的长度单位。常用的视口单位包括 `vw`（视口宽度）和 `vh`（视口高度），它们非常适合用于响应式设计和全屏布局。以下是关于 `vw` 和 `vh` 的详细说明和使用方法。

---

### **1. 基本概念**
• **`vw`（Viewport Width）**：1vw 等于视口宽度的 1%。例如，如果视口宽度为 1200px，则 `1vw = 12px`。
• **`vh`（Viewport Height）**：1vh 等于视口高度的 1%。例如，如果视口高度为 800px，则 `1vh = 8px`。
• **`vmin` 和 `vmax`**：  
  • `1vmin` 等于 `vw` 和 `vh` 中较小的一个。  
  • `1vmax` 等于 `vw` 和 `vh` 中较大的一个。

---

### **2. 使用场景**
#### **2.1 响应式布局**
视口单位非常适合用于创建响应式布局，因为它们的值会随着视口尺寸的变化而动态调整。例如：
```css
.container {
  width: 80vw; /* 宽度为视口宽度的 80% */
  height: 50vh; /* 高度为视口高度的 50% */
}
```

#### **2.2 全屏布局**
使用 `vh` 和 `vw` 可以轻松实现全屏布局。例如：
```css
.hero-section {
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
}
```

#### **2.3 字体大小**
视口单位可以用于动态调整字体大小，使其适应不同屏幕尺寸。例如：
```css
h1 {
  font-size: 5vw; /* 字体大小为视口宽度的 5% */
}
```

#### **2.4 图片和背景**
使用视口单位可以确保图片或背景元素在不同设备上保持比例。例如：
```css
.banner {
  width: 100vw;
  height: 50vh;
  background-image: url('banner.jpg');
  background-size: cover;
}
```

---

### **3. 注意事项**
#### **3.1 视口单位与滚动条**
在某些浏览器中，`vw` 和 `vh` 的值包括滚动条的宽度，这可能导致布局问题。可以通过以下方式解决：
• 使用 `calc()` 函数减去滚动条宽度。例如：
  ```css
  .container {
    width: calc(100vw - 17px); /* 假设滚动条宽度为 17px */
  }
  ```
• 使用 `overflow: hidden` 隐藏滚动条。

#### **3.2 移动端视口问题**
在移动端浏览器中，`vh` 的值可能受到地址栏和工具栏的影响，导致布局不准确。可以使用 JavaScript 动态计算视口高度，或者使用 `100%` 替代 `100vh`。

#### **3.3 兼容性**
`vw` 和 `vh` 在现代浏览器中支持良好，但在旧版浏览器（如 IE 8 及以下）中不支持。可以使用 `px` 或 `%` 作为备用单位。

---

### **4. 示例代码**
以下是一个使用 `vw` 和 `vh` 的完整示例：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>视口单位示例</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .hero-section {
      width: 100vw;
      height: 100vh;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h1 {
      font-size: 8vw;
      color: #333;
    }

    .content {
      width: 80vw;
      margin: 50px auto;
      font-size: 2vh;
    }
  </style>
</head>
<body>
  <div class="hero-section">
    <h1>欢迎来到我的网站</h1>
  </div>
  <div class="content">
    <p>这是一个使用视口单位的示例页面。</p>
  </div>
</body>
</html>
```

---

### **5. 与其他单位的对比**
| 单位  | 描述                     | 示例                        |
| ----- | ------------------------ | --------------------------- |
| `vw`  | 视口宽度的百分比         | `10vw = 10% 视口宽度`       |
| `vh`  | 视口高度的百分比         | `10vh = 10% 视口高度`       |
| `%`   | 相对于父元素的百分比     | `10% = 10% 父元素宽度/高度` |
| `px`  | 固定像素单位             | `10px = 10 像素`            |
| `em`  | 相对于当前元素的字体大小 | `1em = 当前字体大小`        |
| `rem` | 相对于根元素的字体大小   | `1rem = 根元素字体大小`     |

---

### **总结**
`vw` 和 `vh` 是 CSS 中非常实用的视口单位，能够根据视口尺寸动态调整元素的大小和位置。它们非常适合用于响应式设计、全屏布局和动态字体大小等场景。在使用时，需要注意滚动条和移动端视口问题，并根据需求选择合适的单位。
