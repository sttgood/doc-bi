---
title: 关键帧动画
article: false
order: 2
---

**关键帧动画（Keyframes Animation）** 是 CSS 中用于创建复杂动画的核心机制。通过定义关键帧，开发者可以精确控制动画在不同时间点的状态，从而实现平滑的过渡效果。以下是关键帧动画的详细解析：

---

### 一、关键帧动画的基本概念

1. **什么是关键帧动画？**
   • 关键帧动画通过定义动画在特定时间点的状态（关键帧），自动生成中间过渡效果。
   • 使用 `@keyframes` 规则定义动画，并通过 `animation` 属性应用到元素上。

2. **关键帧动画的优势**
   • 灵活：可以定义任意数量的关键帧。
   • 精确：可以控制动画的每个细节。
   • 复用：一个动画可以应用到多个元素。

---

### 二、`@keyframes` 规则

1. **语法**
   ```css
   @keyframes 动画名称 {
     0% { /* 初始状态 */ }
     50% { /* 中间状态 */ }
     100% { /* 结束状态 */ }
   }
   ```

2. **关键帧的百分比**
   • `0%`：动画的初始状态。
   • `100%`：动画的结束状态。
   • 中间百分比（如 `50%`）：动画的中间状态。

3. **示例**
   ```css
   @keyframes slide-in {
     0% {
       transform: translateX(-100%);
     }
     100% {
       transform: translateX(0);
     }
   }
   ```

---

### 三、`animation` 属性

`animation` 是用于将关键帧动画应用到元素的简写属性，包含以下子属性：

1. **`animation-name`**  
   指定动画名称（即 `@keyframes` 定义的名称）。
   ```css
   animation-name: slide-in;
   ```

2. **`animation-duration`**  
   指定动画的持续时间。
   ```css
   animation-duration: 2s;
   ```

3. **`animation-timing-function`**  
   指定动画的时间函数（如 `ease`、`linear`、`cubic-bezier`）。
   ```css
   animation-timing-function: ease-in-out;
   ```

4. **`animation-delay`**  
   指定动画的延迟时间。
   ```css
   animation-delay: 1s;
   ```

5. **`animation-iteration-count`**  
   指定动画的播放次数（如 `1`、`2`、`infinite`）。
   ```css
   animation-iteration-count: infinite;
   ```

6. **`animation-direction`**  
   指定动画的播放方向（如 `normal`、`reverse`、`alternate`）。
   ```css
   animation-direction: alternate;
   ```

7. **`animation-fill-mode`**  
   指定动画播放前后的状态（如 `none`、`forwards`、`backwards`、`both`）。
   ```css
   animation-fill-mode: forwards;
   ```

8. **`animation-play-state`**  
   控制动画的播放状态（如 `running`、`paused`）。
   ```css
   animation-play-state: paused;
   ```

9. **简写语法**
   ```css
   animation: 动画名称 持续时间 时间函数 延迟 播放次数 方向 填充模式 播放状态;
   ```
   示例：
   ```css
   animation: slide-in 2s ease-in-out 1s infinite alternate forwards;
   ```

---

### 四、关键帧动画的实际应用

#### 1. 滑动动画
```css
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.box {
  animation: slide-in 2s ease-in-out;
}
```

#### 2. 旋转动画
```css
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: rotate 2s linear infinite;
}
```

#### 3. 颜色渐变动画
```css
@keyframes color-change {
  0% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  100% {
    background-color: green;
  }
}

.element {
  animation: color-change 3s ease-in-out infinite alternate;
}
```

#### 4. 组合动画
```css
@keyframes combo {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateY(100px) rotate(180deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0) rotate(360deg);
    opacity: 1;
  }
}

.combo-box {
  animation: combo 4s ease-in-out infinite;
}
```

---

### 五、关键帧动画的注意事项

1. **性能优化**
   • 使用 `transform` 和 `opacity` 进行动画，避免使用 `width`、`height` 等性能开销较大的属性。
   • 使用 `will-change` 属性提前告知浏览器哪些属性会发生变化。

2. **浏览器兼容性**
   • 关键帧动画在现代浏览器中支持良好，但在旧版浏览器（如 IE9 及更早版本）中不支持。
   • 可以使用 `@-webkit-keyframes` 等前缀增强兼容性。

3. **动画的复用**
   • 通过定义通用的 `@keyframes` 动画，可以在多个元素中复用。

4. **动画的调试**
   • 使用浏览器的开发者工具（如 Chrome DevTools）调试动画，查看关键帧和时间函数。

---

### 六、总结

关键帧动画是 CSS 中用于创建复杂动画的强大工具。通过 `@keyframes` 规则定义动画的关键帧，并结合 `animation` 属性控制动画的行为，可以实现平滑、灵活的动画效果。在实际开发中，合理使用关键帧动画，可以提升用户体验并增强页面的视觉吸引力。
