---
title: 滚动驱动动画
article: false
order: 3
---

CSS 滚动驱动动画（Scroll-driven Animations）是一种基于用户滚动行为触发的动画效果。传统的 CSS 动画通常基于时间或事件（如 `:hover`），而滚动驱动动画则与页面滚动位置或元素在视口中的可见性相关联。这种技术可以用于创建更动态、更具交互性的用户体验。

目前，CSS 滚动驱动动画主要通过以下两种方式实现：
1. **基于滚动位置的动画**：使用 `scroll()` 函数或 `@scroll-timeline`（已废弃）。
2. **基于元素可见性的动画**：使用 `view()` 函数。

下面详细介绍这两种方式及其用法。

---

## 1. 基于滚动位置的动画
通过 `scroll()` 函数，可以将动画与页面滚动位置绑定，实现滚动驱动的动画效果。

### 语法
```css
animation-timeline: scroll(<scroll-container> <axis>);
```

• `<scroll-container>`：指定滚动的容器，默认为 `root`（页面根元素）。
• `<axis>`：指定滚动的轴，可选 `block`（垂直方向）或 `inline`（水平方向）。

### 示例
```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  animation: scale-up linear;
  animation-timeline: scroll(root block);
}

@keyframes scale-up {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(2);
  }
}
```

在这个例子中，`.box` 元素会随着页面垂直滚动逐渐放大。

---

## 2. 基于元素可见性的动画
通过 `view()` 函数，可以将动画与元素在视口中的可见性绑定，实现滚动驱动的动画效果。

### 语法
```css
animation-timeline: view(<axis> <inset>);
```

• `<axis>`：指定滚动的轴，可选 `block`（垂直方向）或 `inline`（水平方向）。
• `<inset>`：指定元素的可见性范围，默认为 `0`（元素完全进入视口时触发）。

### 示例
```css
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  animation: fade-in linear;
  animation-timeline: view(block);
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

在这个例子中，`.box` 元素会在进入视口时逐渐淡入。

---

## 3. 综合示例
结合 `scroll()` 和 `view()`，可以创建更复杂的滚动驱动动画。

```css
.container {
  height: 200vh; /* 使页面可以滚动 */
}

.box {
  width: 100px;
  height: 100px;
  background-color: green;
  animation: move-and-fade linear;
  animation-timeline: view(block);
}

@keyframes move-and-fade {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    transform: translateX(200px);
    opacity: 1;
  }
  100% {
    transform: translateX(400px);
    opacity: 0;
  }
}
```

在这个例子中，`.box` 元素会在进入视口时向右移动并淡入，离开视口时继续移动并淡出。

---

## 4. 浏览器支持
CSS 滚动驱动动画是较新的特性，目前仅在部分现代浏览器中得到支持。以下是截至 2023 年的支持情况：
• **Chrome**：支持 `scroll()` 和 `view()`。
• **Firefox**：部分支持，需要启用实验性功能。
• **Safari**：部分支持。
• **Edge**：支持 `scroll()` 和 `view()`。

在不支持的浏览器中，可以使用 JavaScript 实现类似的滚动驱动动画效果。

---

## 5. JavaScript 替代方案
如果需要在旧版浏览器中实现滚动驱动动画，可以使用 JavaScript 监听滚动事件并动态调整样式。

### 示例
```javascript
const box = document.querySelector('.box');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const scale = 1 + scrollY * 0.01; // 根据滚动位置缩放
  box.style.transform = `scale(${scale})`;
});
```

---

## 总结
CSS 滚动驱动动画是一种强大的工具，可以创建与用户滚动行为紧密关联的动态效果。通过 `scroll()` 和 `view()` 函数，开发者可以轻松实现基于滚动位置或元素可见性的动画。虽然目前浏览器支持有限，但随着技术的普及，它将成为现代 Web 开发的重要组成部分。对于不支持的环境，可以使用 JavaScript 作为替代方案。
