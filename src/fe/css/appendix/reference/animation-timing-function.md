---
title: 动画时间函数速查
article: false
order: 3
---

## 动画时间函数速查 (Animation Timing Functions)

动画时间函数（`animation-timing-function`）用于定义动画在时间轴上的变化速度。以下是常见的时间函数及其特点的速查表。

---

### 1. **线性函数 (`linear`)**
```css
animation-timing-function: linear;
```
• **特点**：动画以恒定速度播放，匀速变化。
• **适用场景**：需要匀速动画时。

---

### 2. **缓入 (`ease-in`)**
```css
animation-timing-function: ease-in;
```
• **特点**：动画开始时较慢，逐渐加速。
• **适用场景**：需要逐渐加速的动画，如物体从静止开始移动。

---

### 3. **缓出 (`ease-out`)**
```css
animation-timing-function: ease-out;
```
• **特点**：动画结束时较慢，逐渐减速。
• **适用场景**：需要逐渐减速的动画，如物体停止移动。

---

### 4. **缓入缓出 (`ease-in-out`)**
```css
animation-timing-function: ease-in-out;
```
• **特点**：动画开始和结束时较慢，中间加速。
• **适用场景**：需要平滑过渡的动画，如弹跳效果。

---

### 5. **快速开始 (`ease`)**
```css
animation-timing-function: ease;
```
• **特点**：默认值，动画开始较快，中间变慢，最后再加速。
• **适用场景**：通用动画。

---

### 6. **步进函数 (`steps()`)**
```css
animation-timing-function: steps(5, jump-start);
```
• **特点**：将动画分为指定步数，跳跃式变化。
  • `jump-start`：第一步立即开始。
  • `jump-end`：最后一步立即结束。
  • `jump-both`：第一步和最后一步都延迟。
  • `jump-none`：均匀分布。
• **适用场景**：需要离散动画，如逐帧动画。

---

### 7. **自定义贝塞尔曲线 (`cubic-bezier()`)**
```css
animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
```
• **特点**：通过贝塞尔曲线自定义动画速度。
  • 参数范围：`0` 到 `1`。
  • 例如：`cubic-bezier(0.25, 0.1, 0.25, 1)` 等同于 `ease`。
• **适用场景**：需要完全自定义动画速度时。

---

### 8. **预设贝塞尔曲线**
• **`ease`**：`cubic-bezier(0.25, 0.1, 0.25, 1)`
• **`ease-in`**：`cubic-bezier(0.42, 0, 1, 1)`
• **`ease-out`**：`cubic-bezier(0, 0, 0.58, 1)`
• **`ease-in-out`**：`cubic-bezier(0.42, 0, 0.58, 1)`

---

### 9. **跳跃开始 (`step-start`)**
```css
animation-timing-function: step-start;
```
• **特点**：等同于 `steps(1, jump-start)`，动画立即开始。
• **适用场景**：需要立即切换的动画。

---

### 10. **跳跃结束 (`step-end`)**
```css
animation-timing-function: step-end;
```
• **特点**：等同于 `steps(1, jump-end)`，动画在结束时立即切换。
• **适用场景**：需要在结束时立即切换的动画。

---

### 11. **弹性效果 (`cubic-bezier()` 实现)**
```css
animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
```
• **特点**：模拟弹性效果，超出范围再回弹。
• **适用场景**：需要弹性动画，如按钮点击效果。

---

### 12. **反弹效果 (`cubic-bezier()` 实现)**
```css
animation-timing-function: cubic-bezier(0.5, 1.5, 0.5, 1.5);
```
• **特点**：模拟反弹效果，反复弹跳。
• **适用场景**：需要反弹动画，如球体落地。

---

### 13. **阶梯效果 (`steps()` 实现)**
```css
animation-timing-function: steps(10, jump-both);
```
• **特点**：将动画分为 10 步，每步均匀变化。
• **适用场景**：需要阶梯式变化的动画。

---

### 14. **延迟开始 (`cubic-bezier()` 实现)**
```css
animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
```
• **特点**：动画开始时有延迟，随后加速。
• **适用场景**：需要延迟启动的动画。

---

### 15. **平滑结束 (`cubic-bezier()` 实现)**
```css
animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
```
• **特点**：动画结束时平滑减速。
• **适用场景**：需要平滑结束的动画。

---

### 16. **自定义步进 (`steps()` 实现)**
```css
animation-timing-function: steps(4, jump-none);
```
• **特点**：将动画分为 4 步，均匀分布。
• **适用场景**：需要自定义步进动画。

---

### 总结

| **时间函数**     | **特点**                         | **适用场景**       |
| ---------------- | -------------------------------- | ------------------ |
| `linear`         | 匀速变化                         | 匀速动画           |
| `ease-in`        | 开始慢，逐渐加速                 | 逐渐加速的动画     |
| `ease-out`       | 结束慢，逐渐减速                 | 逐渐减速的动画     |
| `ease-in-out`    | 开始和结束慢，中间加速           | 平滑过渡的动画     |
| `ease`           | 默认值，开始快，中间慢，最后加速 | 通用动画           |
| `steps()`        | 步进式变化                       | 逐帧动画或阶梯动画 |
| `cubic-bezier()` | 自定义贝塞尔曲线                 | 完全自定义动画速度 |
| `step-start`     | 立即开始                         | 立即切换的动画     |
| `step-end`       | 结束时立即切换                   | 结束时切换的动画   |

通过灵活使用这些时间函数，可以为动画添加丰富的动态效果。
