---
title: 混合模式
article: false
order: 4
---

`mix-blend-mode` 是 CSS 中的一个属性，用于控制元素的颜色如何与其背景或其他元素混合。它通常用于创建视觉效果，如叠加、遮罩、透明效果等。`mix-blend-mode` 基于 Photoshop 等图像编辑软件中的混合模式概念，为 Web 设计提供了更多的创意可能性。

---

### **1. 基本语法**
```css
mix-blend-mode: <blend-mode>;
```

`<blend-mode>` 可以是以下值之一：
• **normal**：默认值，不应用混合模式。
• **multiply**：将元素颜色与背景颜色相乘，通常使结果变暗。
• **screen**：将元素颜色与背景颜色反转后相乘，通常使结果变亮。
• **overlay**：根据背景颜色的亮度，选择 `multiply` 或 `screen`。
• **darken**：选择元素颜色和背景颜色中较暗的一个。
• **lighten**：选择元素颜色和背景颜色中较亮的一个。
• **color-dodge**：通过降低对比度使背景颜色变亮。
• **color-burn**：通过增加对比度使背景颜色变暗。
• **hard-light**：类似于 `overlay`，但效果更强烈。
• **soft-light**：类似于 `overlay`，但效果更柔和。
• **difference**：计算元素颜色和背景颜色的差值。
• **exclusion**：类似于 `difference`，但对比度更低。
• **hue**：使用元素的色相，保留背景的饱和度和亮度。
• **saturation**：使用元素的饱和度，保留背景的色相和亮度。
• **color**：使用元素的色相和饱和度，保留背景的亮度。
• **luminosity**：使用元素的亮度，保留背景的色相和饱和度。

---

### **2. 使用场景**
#### **2.1 文字与背景混合**
通过 `mix-blend-mode`，可以让文字与背景图像或颜色混合，创建独特的视觉效果。例如：
```css
.text {
  mix-blend-mode: difference;
  color: white;
}
```

#### **2.2 图像叠加**
将两个图像叠加，并使用混合模式创建新的视觉效果。例如：
```css
.image {
  mix-blend-mode: multiply;
}
```

#### **2.3 遮罩效果**
通过混合模式实现遮罩效果，突出或隐藏部分内容。例如：
```css
.mask {
  mix-blend-mode: screen;
  background-color: black;
}
```

#### **2.4 创意设计**
在设计中，`mix-blend-mode` 可以用于创建复杂的视觉效果，如渐变叠加、颜色混合等。

---

### **3. 示例代码**
```html
<div class="container">
  <img src="background.jpg" alt="Background" class="background">
  <div class="overlay">Hello, World!</div>
</div>
```

```css
.container {
  position: relative;
  width: 100%;
  height: 300px;
}

.background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: white;
  mix-blend-mode: difference;
}
```

在这个例子中，文字 `Hello, World!` 会与背景图像混合，创建出独特的视觉效果。

---

### **4. 注意事项**
• **性能影响**：`mix-blend-mode` 可能会对性能产生一定影响，尤其是在复杂布局或大量元素中使用时。
• **浏览器兼容性**：`mix-blend-mode` 在现代浏览器中支持良好，但在一些旧版浏览器（如 IE）中不支持。
• **背景限制**：`mix-blend-mode` 仅对元素的直接背景有效，无法影响其他元素或父元素的背景。

---

### **5. 替代方案**
如果 `mix-blend-mode` 无法满足需求，可以考虑以下替代方案：
• **`background-blend-mode`**：用于混合元素的背景图像和颜色。
• **SVG 滤镜**：通过 SVG 滤镜实现复杂的混合效果。
• **Canvas**：使用 Canvas API 实现自定义混合效果。

---

### **总结**
`mix-blend-mode` 是 CSS 中一个强大的工具，用于创建颜色混合和叠加效果。它适用于文字与背景混合、图像叠加、遮罩效果等场景。虽然在使用时需要注意性能和浏览器兼容性问题，但它为 Web 设计提供了更多的创意可能性。
