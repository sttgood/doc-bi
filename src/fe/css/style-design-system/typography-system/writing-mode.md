---
title: 书写模式
article: false
order: 3
---

**书写模式（Writing Mode）** 是 CSS 中用于控制文本排列方向的属性，它决定了文本是水平排列（从左到右或从右到左）还是垂直排列（从上到下）。`writing-mode` 属性在支持多语言排版和特殊布局场景中非常有用。以下是 `writing-mode` 的详细解析：

---

### 一、`writing-mode` 的基本概念

1. **什么是书写模式？**
   • 书写模式定义了文本的排列方向，包括水平方向和垂直方向。
   • 它不仅影响文本的排列，还会影响元素的布局方向。

2. **主要用途**
   • 支持垂直排版的文字（如中文、日文、韩文等）。
   • 实现特殊布局效果（如侧边栏、标题等）。

---

### 二、`writing-mode` 的属性值

`writing-mode` 有以下几种常用属性值：

| 属性值          | 描述                                                        |
| --------------- | ----------------------------------------------------------- |
| `horizontal-tb` | 默认值，文本水平排列，从上到下（Top to Bottom）。           |
| `vertical-rl`   | 文本垂直排列，从右到左（Right to Left）。                   |
| `vertical-lr`   | 文本垂直排列，从左到右（Left to Right）。                   |
| `sideways-rl`   | 文本垂直排列，从右到左，且字符侧向旋转（仅 Firefox 支持）。 |
| `sideways-lr`   | 文本垂直排列，从左到右，且字符侧向旋转（仅 Firefox 支持）。 |

---

### 三、`writing-mode` 的实际效果

1. **水平排列（`horizontal-tb`）**
   • 默认的书写模式，文本从左到右水平排列，行从上到下排列。
   ```css
   .text {
     writing-mode: horizontal-tb;
   }
   ```

2. **垂直排列从右到左（`vertical-rl`）**
   • 文本从上到下垂直排列，列从右到左排列。
   ```css
   .text {
     writing-mode: vertical-rl;
   }
   ```

3. **垂直排列从左到右（`vertical-lr`）**
   • 文本从上到下垂直排列，列从左到右排列。
   ```css
   .text {
     writing-mode: vertical-lr;
   }
   ```

4. **侧向排列（`sideways-rl` 和 `sideways-lr`）**
   • 文本垂直排列，且字符侧向旋转（仅 Firefox 支持）。
   ```css
   .text {
     writing-mode: sideways-rl;
   }
   ```

---

### 四、`writing-mode` 的影响

1. **文本方向**
   • 控制文本的排列方向（水平或垂直）。

2. **布局方向**
   • 影响块级元素的排列方向。例如，`vertical-rl` 会使块级元素从右到左排列。

3. **`width` 和 `height` 的含义**
   • 在垂直书写模式下，`width` 和 `height` 的含义会互换：
     ◦ `width` 表示垂直方向的高度。
     ◦ `height` 表示水平方向的宽度。

4. **其他 CSS 属性的行为**
   • `text-align`、`text-orientation` 等属性的行为会随着书写模式的变化而变化。

---

### 五、`writing-mode` 的实际应用

1. **垂直排版**
   ```html
   <div class="vertical-text">
     <p>这是一段垂直排列的文本。</p>
   </div>
   ```
   ```css
   .vertical-text {
     writing-mode: vertical-rl;
   }
   ```

2. **侧边栏布局**
   ```html
   <div class="sidebar">
     <p>侧边栏内容</p>
   </div>
   ```
   ```css
   .sidebar {
     writing-mode: vertical-rl;
     width: 50px;
     background-color: #f0f0f0;
   }
   ```

3. **特殊标题效果**
   ```html
   <h1 class="vertical-title">垂直标题</h1>
   ```
   ```css
   .vertical-title {
     writing-mode: vertical-lr;
     font-size: 24px;
     margin: 0;
   }
   ```

---

### 六、`writing-mode` 的注意事项

1. **浏览器兼容性**
   • `writing-mode` 在现代浏览器中支持良好，但 `sideways-rl` 和 `sideways-lr` 仅 Firefox 支持。
   • 对于旧版浏览器（如 IE），可能需要使用 `-ms-writing-mode` 前缀。

2. **与其他属性的结合**
   • `writing-mode` 会影响 `text-orientation`、`text-align` 等属性的行为，需结合使用。

3. **布局调整**
   • 在垂直书写模式下，元素的 `width` 和 `height` 的含义会互换，需重新调整布局。

---

### 七、总结

`writing-mode` 是 CSS 中用于控制文本排列方向的重要属性，特别适合多语言排版和特殊布局场景。通过合理使用 `writing-mode`，可以实现垂直排版、侧边栏布局、特殊标题等效果。在实际开发中，需注意浏览器兼容性和与其他属性的结合使用，以确保布局的正确性和一致性。
