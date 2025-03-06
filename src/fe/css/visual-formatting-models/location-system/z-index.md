---
title: 层叠上下文
article: false
order: 2
---

**层叠上下文（Stacking Context）** 是 CSS 中用于控制元素在 Z 轴上堆叠顺序的机制。通过 `z-index` 属性，开发者可以明确指定元素的堆叠顺序，从而解决元素之间的覆盖问题。：

---

### 一、层叠上下文的基本概念

1. **什么是层叠上下文？**
   • 层叠上下文是一个独立的三维空间，用于管理元素在 Z 轴上的堆叠顺序。
   • 每个层叠上下文内部元素的堆叠顺序相互独立，不会影响外部层叠上下文。

2. **层叠上下文的创建**
   以下情况会创建新的层叠上下文：
   • 根元素（`<html>`）。
   • `position` 值为 `absolute` 或 `relative`，且 `z-index` 值不为 `auto`。
   • `position` 值为 `fixed` 或 `sticky`。
   • `z-index` 值不为 `auto` 的 Flex 容器（`display: flex` 或 `inline-flex`）。
   • `opacity` 值小于 `1`。
   • `transform`、`filter`、`perspective`、`clip-path` 等属性值不为 `none`。
   • `isolation` 值为 `isolate`。

3. **层叠顺序规则**
   在同一个层叠上下文中，元素的堆叠顺序（从下到上）如下：
   1. 背景和边框。
   2. 负 `z-index` 的元素。
   3. 块级元素。
   4. 浮动元素。
   5. 内联元素。
   6. `z-index` 为 `auto` 或 `0` 的定位元素。
   7. 正 `z-index` 的元素。

---

### 二、`z-index` 的使用

1. **语法**
   ```css
   z-index: auto | <integer>;
   ```
   • `auto`：默认值，元素不会创建新的层叠上下文。
   • `<integer>`：整数值，数值越大，元素在 Z 轴上的堆叠顺序越高。

2. **注意事项**
   • `z-index` 仅对 `position` 值为 `relative`、`absolute`、`fixed` 或 `sticky` 的元素生效。
   • `z-index` 的值只在同一个层叠上下文中比较，不同层叠上下文之间的 `z-index` 值无法直接比较。

---

### 三、层叠上下文的实际应用

#### 1. 简单堆叠
```html
<div class="box box1">Box 1</div>
<div class="box box2">Box 2</div>
```
```css
.box {
  width: 100px;
  height: 100px;
  position: absolute;
}
.box1 {
  background-color: red;
  z-index: 1;
}
.box2 {
  background-color: blue;
  top: 50px;
  left: 50px;
  z-index: 2;
}
```
• `box2` 会覆盖 `box1`，因为它的 `z-index` 值更大。

#### 2. 层叠上下文隔离
```html
<div class="parent1">
  <div class="child1">Child 1</div>
</div>
<div class="parent2">
  <div class="child2">Child 2</div>
</div>
```
```css
.parent1, .parent2 {
  position: relative;
  width: 200px;
  height: 200px;
}
.parent1 {
  z-index: 1;
}
.parent2 {
  z-index: 2;
}
.child1, .child2 {
  position: absolute;
  width: 100px;
  height: 100px;
}
.child1 {
  background-color: red;
  z-index: 10;
}
.child2 {
  background-color: blue;
  z-index: 5;
}
```
• `child2` 会覆盖 `child1`，因为 `parent2` 的 `z-index` 值更大，`child1` 和 `child2` 分别属于不同的层叠上下文。

#### 3. 使用 `isolation` 创建层叠上下文
```html
<div class="container">
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
</div>
```
```css
.container {
  isolation: isolate; /* 创建新的层叠上下文 */
}
.box {
  width: 100px;
  height: 100px;
  position: absolute;
}
.box1 {
  background-color: red;
  z-index: 1;
}
.box2 {
  background-color: blue;
  top: 50px;
  left: 50px;
  z-index: 2;
}
```
• `box2` 会覆盖 `box1`，因为它们在同一个层叠上下文中。

---

### 四、常见问题与解决方案

1. **`z-index` 不生效**
   • 原因：元素未设置 `position` 值为 `relative`、`absolute`、`fixed` 或 `sticky`。
   • 解决方案：为元素设置合适的 `position` 值。

2. **层叠上下文隔离**
   • 原因：元素属于不同的层叠上下文，`z-index` 值无法直接比较。
   • 解决方案：确保元素在同一个层叠上下文中，或调整父元素的 `z-index` 值。

3. **性能问题**
   • 原因：过多的层叠上下文可能影响渲染性能。
   • 解决方案：减少不必要的层叠上下文创建，优化布局结构。

---

### 五、总结

层叠上下文和 `z-index` 是 CSS 中用于控制元素堆叠顺序的重要机制。通过理解层叠上下文的创建规则和 `z-index` 的使用方法，可以解决元素之间的覆盖问题，实现复杂的布局效果。在实际开发中，合理使用 `isolation` 属性和优化层叠上下文结构，能够提升代码的可维护性和性能。
