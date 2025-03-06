---
title: CSS Houdini
article: false
order: 1
---

CSS Houdini 是一组低级别的 CSS API，旨在为开发者提供更强大的控制能力，使其能够直接访问和扩展 CSS 渲染引擎。通过 Houdini，开发者可以创建自定义的 CSS 属性、布局、绘制和动画行为，从而突破传统 CSS 的限制。以下是 CSS Houdini 的核心概念和主要 API：

---

### **1. 核心概念**
CSS Houdini 的目标是将 CSS 的“黑盒”变成“透明盒”，让开发者能够：
• 定义自定义的 CSS 属性和行为。
• 控制 CSS 的渲染过程（如布局、绘制、动画）。
• 实现高性能的样式和动画效果。

---

### **2. 主要 API**
Houdini 包含多个模块化的 API，每个 API 负责不同的功能：

#### **2.1 CSS Properties and Values API**
允许开发者定义自定义的 CSS 属性，并指定其类型、初始值和继承行为。

• **示例**：
  ```javascript
  CSS.registerProperty({
    name: '--my-color',
    syntax: '<color>',
    inherits: false,
    initialValue: 'black',
  });
  ```
  ```css
  .element {
    --my-color: blue;
    background-color: var(--my-color);
  }
  ```

#### **2.2 Paint API**
允许开发者使用 JavaScript 定义自定义的绘制行为，并通过 `paint()` 函数在 CSS 中调用。

• **示例**：
  ```javascript
  registerPaint('my-gradient', class {
    paint(ctx, size, properties) {
      const gradient = ctx.createLinearGradient(0, 0, size.width, size.height);
      gradient.addColorStop(0, 'red');
      gradient.addColorStop(1, 'blue');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size.width, size.height);
    }
  });
  ```
  ```css
  .element {
    background: paint(my-gradient);
  }
  ```

#### **2.3 Layout API**
允许开发者定义自定义的布局算法，替代传统的 CSS 布局（如 Flexbox、Grid）。

• **示例**：
  ```javascript
  registerLayout('my-layout', class {
    layout(children, edges, constraints, styleMap) {
      // 自定义布局逻辑
      return {
        childFragments: children.map(child => {
          return {
            inlineSize: 100,
            blockSize: 100,
            child: child,
          };
        }),
      };
    }
  });
  ```
  ```css
  .element {
    display: layout(my-layout);
  }
  ```

#### **2.4 Animation Worklet API**
允许开发者创建高性能的动画，通过 `Worklet` 在单独的线程中运行。

• **示例**：
  ```javascript
  registerAnimator('my-animator', class {
    animate(currentTime, effect) {
      effect.localTime = currentTime * 0.5; // 自定义动画逻辑
    }
  });
  ```
  ```css
  .element {
    animation: my-animator 2s infinite;
  }
  ```

#### **2.5 Typed OM (Object Model)**
将 CSS 值表示为 JavaScript 对象，提供更高效的操作方式。

• **示例**：
  ```javascript
  const element = document.querySelector('.element');
  const styleMap = element.computedStyleMap();
  const fontSize = styleMap.get('font-size');
  console.log(fontSize.value, fontSize.unit); // 16, 'px'
  ```

#### **2.6 Font Metrics API**
允许开发者访问字体的度量信息（如字高、基线等），用于更精确的排版控制。

---

### **3. 优势**
• **更强大的控制能力**：直接访问和扩展 CSS 渲染引擎。
• **高性能**：通过 `Worklet` 在单独的线程中运行，避免阻塞主线程。
• **可扩展性**：开发者可以创建自定义的 CSS 行为，满足特定需求。
• **更好的兼容性**：通过 Polyfill 支持，可以在不支持 Houdini 的浏览器中降级。

---

### **4. 浏览器支持**
目前，CSS Houdini 的各个 API 在浏览器中的支持程度不同：
• **CSS Properties and Values API**：Chrome、Edge 支持，Firefox 和 Safari 部分支持。
• **Paint API**：Chrome、Edge 支持。
• **Layout API**：Chrome 部分支持。
• **Animation Worklet API**：Chrome 支持。
• **Typed OM**：Chrome、Edge 支持。

---

### **5. 使用场景**
• **自定义视觉效果**：如渐变、阴影、滤镜等。
• **复杂布局**：如瀑布流、环形布局等。
• **高性能动画**：如滚动动画、粒子效果等。
• **动态样式**：如根据用户输入实时更新样式。

---

### **6. 示例：使用 Paint API 创建动态背景**
```javascript
// 注册自定义绘制行为
registerPaint('dynamic-background', class {
  paint(ctx, size, properties) {
    const color = properties.get('--dynamic-color').toString();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, size.width, size.height);
  }
});
```
```css
.element {
  --dynamic-color: red;
  background: paint(dynamic-background);
}
```

---

### **总结**
CSS Houdini 为开发者提供了前所未有的控制能力，使其能够直接访问和扩展 CSS 渲染引擎。通过 Houdini，可以实现自定义的 CSS 属性、布局、绘制和动画行为，从而突破传统 CSS 的限制。虽然目前浏览器支持有限，但随着技术的发展，Houdini 将成为前端开发的重要工具。
