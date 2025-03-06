---
title: 垂直居中的16种方案
article: false
order: 1
---

## CSS 垂直居中的 16 种方案

垂直居中是 CSS 布局中常见的需求，以下是 16 种实现垂直居中的方案，适用于不同的场景和需求。

---

### 1. **使用 `flexbox` (推荐)**
```css
.parent {
    display: flex;
    align-items: center;
}
```
• **说明**：`align-items: center` 使子元素在交叉轴上垂直居中。
• **适用场景**：现代布局，兼容性好。

---

### 2. **使用 `grid` (推荐)**
```css
.parent {
    display: grid;
    place-items: center;
}
```
• **说明**：`place-items: center` 使子元素在水平和垂直方向上居中。
• **适用场景**：现代布局，代码简洁。

---

### 3. **使用 `line-height`**
```css
.parent {
    height: 100px;
    line-height: 100px;
}
.child {
    display: inline-block;
    vertical-align: middle;
}
```
• **说明**：通过设置 `line-height` 等于父元素高度，使子元素垂直居中。
• **适用场景**：单行文本或内联元素。

---

### 4. **使用 `table` 布局**
```css
.parent {
    display: table;
}
.child {
    display: table-cell;
    vertical-align: middle;
}
```
• **说明**：通过 `display: table-cell` 和 `vertical-align: middle` 实现垂直居中。
• **适用场景**：兼容性较好，但语义化较差。

---

### 5. **使用 `absolute` 定位 + `transform`**
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```
• **说明**：通过 `top: 50%` 和 `transform: translateY(-50%)` 实现垂直居中。
• **适用场景**：绝对定位元素。

---

### 6. **使用 `absolute` 定位 + `margin: auto`**
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
}
```
• **说明**：通过 `top: 0`、`bottom: 0` 和 `margin: auto` 实现垂直居中。
• **适用场景**：绝对定位元素，子元素需要明确高度。

---

### 7. **使用 `flexbox` + `margin: auto`**
```css
.parent {
    display: flex;
}
.child {
    margin: auto;
}
```
• **说明**：通过 `margin: auto` 在 `flexbox` 容器中实现垂直居中。
• **适用场景**：现代布局。

---

### 8. **使用 `grid` + `margin: auto`**
```css
.parent {
    display: grid;
}
.child {
    margin: auto;
}
```
• **说明**：通过 `margin: auto` 在 `grid` 容器中实现垂直居中。
• **适用场景**：现代布局。

---

### 9. **使用 `flexbox` + `align-self`**
```css
.parent {
    display: flex;
}
.child {
    align-self: center;
}
```
• **说明**：通过 `align-self: center` 使单个子元素垂直居中。
• **适用场景**：现代布局，仅对特定子元素生效。

---

### 10. **使用 `grid` + `align-self`**
```css
.parent {
    display: grid;
}
.child {
    align-self: center;
}
```
• **说明**：通过 `align-self: center` 使单个子元素垂直居中。
• **适用场景**：现代布局，仅对特定子元素生效。

---

### 11. **使用 `padding`**
```css
.parent {
    padding-top: 50px;
    padding-bottom: 50px;
}
```
• **说明**：通过设置上下 `padding` 使子元素垂直居中。
• **适用场景**：父元素高度固定。

---

### 12. **使用 `calc()`**
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: calc(50% - 25px); /* 25px 是子元素高度的一半 */
}
```
• **说明**：通过 `calc()` 计算子元素的位置。
• **适用场景**：子元素高度固定。

---

### 13. **使用 `writing-mode`**
```css
.parent {
    writing-mode: vertical-lr;
    text-align: center;
}
.child {
    writing-mode: horizontal-tb;
}
```
• **说明**：通过 `writing-mode` 改变文本方向，实现垂直居中。
• **适用场景**：特殊布局需求。

---

### 14. **使用 `vh` 单位**
```css
.parent {
    height: 100vh;
    display: flex;
    align-items: center;
}
```
• **说明**：通过 `vh` 单位使父元素高度等于视口高度，再使用 `flexbox` 实现垂直居中。
• **适用场景**：全屏布局。

---

### 15. **使用 `inline-block` + `vertical-align`**
```css
.parent {
    text-align: center;
}
.child {
    display: inline-block;
    vertical-align: middle;
}
```
• **说明**：通过 `inline-block` 和 `vertical-align` 实现垂直居中。
• **适用场景**：内联元素。

---

### 16. **使用 `vh` + `translate`**
```css
.parent {
    height: 100vh;
}
.child {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
```
• **说明**：通过 `vh` 单位使父元素高度等于视口高度，再使用 `translate` 实现垂直居中。
• **适用场景**：全屏布局。

---

### 总结
• **推荐方案**：`flexbox` 和 `grid`，代码简洁且兼容性好。
• **特殊场景**：根据需求选择其他方案，如 `absolute` 定位、`line-height` 等。
• **兼容性**：现代浏览器优先使用 `flexbox` 和 `grid`，老旧浏览器可使用 `table` 或 `absolute` 定位。
