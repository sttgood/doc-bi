---
title: 减少重排 重绘
article: false
order: 1
---

在网页性能优化中，**减少重排（Reflow）和重绘（Repaint）** 是提升渲染性能的关键。重排和重绘是浏览器渲染机制的一部分，但它们会消耗大量的计算资源，尤其是在频繁操作 DOM 或样式时。以下是对减少重排和重绘的详细解析：

---

### **1. 什么是重排和重绘？**
1. **重排（Reflow）**：
   • 当元素的几何属性（如宽度、高度、位置等）发生变化时，浏览器需要重新计算布局，这个过程称为重排。
   • 重排是性能开销较大的操作，因为它会触发整个或部分页面的重新布局。
   
2. **重绘（Repaint）**：
   • 当元素的外观（如颜色、背景等）发生变化，但不影响布局时，浏览器会重新绘制元素，这个过程称为重绘。
   • 重绘的开销通常比重排小，但仍会影响性能。

---

### **2. 什么会触发重排和重绘？**
#### **触发重排的操作**：
• 修改元素的几何属性（如 `width`、`height`、`padding`、`margin` 等）。
• 修改元素的布局属性（如 `position`、`display`、`float` 等）。
• 添加或删除 DOM 元素。
• 改变窗口大小或字体大小。

#### **触发重绘的操作**：
• 修改颜色属性（如 `color`、`background-color` 等）。
• 修改边框样式（如 `border-color`、`border-radius` 等）。
• 修改透明度（如 `opacity`）。

---

### **3. 如何减少重排和重绘？**
#### **3.1 避免频繁操作 DOM**
• **批量修改 DOM**：
  • 使用 `DocumentFragment` 或 `innerHTML` 一次性插入多个元素。
  • 示例：
    ```javascript
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 100; i++) {
      const div = document.createElement('div');
      fragment.appendChild(div);
    }
    document.body.appendChild(fragment);
    ```
• **离线操作 DOM**：
  • 将元素从 DOM 树中移除，修改完成后再插入。
  • 示例：
    ```javascript
    const element = document.getElementById('myElement');
    const parent = element.parentNode;
    parent.removeChild(element);
    // 修改元素
    parent.appendChild(element);
    ```

#### **3.2 使用 CSS 优化布局**
• **使用 `transform` 和 `opacity`**：
  • `transform` 和 `opacity` 不会触发重排，只会触发重绘，适合用于动画。
  • 示例：
    ```css
    .box {
      transform: translateX(100px);
      opacity: 0.5;
    }
    ```
• **避免使用 `table` 布局**：
  • `table` 布局会导致频繁重排，尽量使用 `flex` 或 `grid` 布局。

#### **3.3 减少样式修改**
• **批量修改样式**：
  • 使用 `classList` 或 `cssText` 一次性修改多个样式。
  • 示例：
    ```javascript
    element.classList.add('active');
    // 或
    element.style.cssText = 'width: 100px; height: 100px;';
    ```
• **避免逐帧修改样式**：
  • 在动画中，避免逐帧修改 `top`、`left` 等属性，改用 `transform`。

#### **3.4 使用 `requestAnimationFrame`**
• **优化动画性能**：
  • 使用 `requestAnimationFrame` 代替 `setTimeout` 或 `setInterval`，确保动画在浏览器的每一帧中执行。
  • 示例：
    ```javascript
    function animate() {
      // 修改样式
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    ```

#### **3.5 使用 `will-change`**
• **提示浏览器优化**：
  • 使用 `will-change` 属性提示浏览器哪些属性即将变化，以便提前优化。
  • 示例：
    ```css
    .box {
      will-change: transform, opacity;
    }
    ```

#### **3.6 避免强制同步布局**
• **避免读取会触发重排的属性**：
  • 在修改样式后，避免立即读取 `offsetWidth`、`offsetHeight` 等属性，这会强制浏览器进行同步布局。
  • 示例：
    ```javascript
    // 错误示例
    element.style.width = '100px';
    const width = element.offsetWidth; // 强制同步布局

    // 正确示例
    element.style.width = '100px';
    // 其他操作
    ```

---

### **4. 性能优化工具**
1. **Chrome DevTools**：
   • 使用 **Performance** 面板分析重排和重绘。
   • 使用 **Rendering** 面板中的 **Paint Flashing** 和 **Layout Shift Regions** 查看重绘和布局变化。
2. **Lighthouse**：
   • 使用 Lighthouse 检测性能问题，包括重排和重绘。

---

### **5. 总结**
减少重排和重绘的核心在于：
1. **减少 DOM 操作**：批量修改 DOM，离线操作 DOM。
2. **优化样式修改**：使用 `transform` 和 `opacity`，批量修改样式。
3. **优化动画**：使用 `requestAnimationFrame` 和 `will-change`。
4. **避免强制同步布局**：避免在修改样式后立即读取几何属性。

通过以上优化手段，可以显著提升网页的渲染性能，提供更流畅的用户体验！
