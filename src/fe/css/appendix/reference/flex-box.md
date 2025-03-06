---
title: Flexbox属性速查
article: false
order: 1
---

以下是 **CSS Flexbox 属性速查大全**，涵盖了所有 Flexbox 相关的属性及其用法，帮助你快速掌握弹性布局。

---

## 1. **Flexbox 基本概念**
Flexbox 是一种用于一维布局的 CSS 模型，适合在容器内分配空间和对齐项目。  
• **容器（Flex Container）**：应用 `display: flex` 的元素。  
• **项目（Flex Items）**：容器内的直接子元素。  

---

## 2. **容器属性**

### 1. `display`
启用 Flexbox 布局。  
```css
.container {
  display: flex; /* 块级 Flex 容器 */
  display: inline-flex; /* 行内 Flex 容器 */
}
```

### 2. `flex-direction`
定义主轴方向。  
```css
.container {
  flex-direction: row; /* 默认值，水平排列（左到右） */
  flex-direction: row-reverse; /* 水平排列（右到左） */
  flex-direction: column; /* 垂直排列（上到下） */
  flex-direction: column-reverse; /* 垂直排列（下到上） */
}
```

### 3. `flex-wrap`
定义项目是否换行。  
```css
.container {
  flex-wrap: nowrap; /* 默认值，不换行 */
  flex-wrap: wrap; /* 换行 */
  flex-wrap: wrap-reverse; /* 反向换行 */
}
```

### 4. `flex-flow`
`flex-direction` 和 `flex-wrap` 的简写。  
```css
.container {
  flex-flow: row wrap; /* 方向 + 换行 */
}
```

### 5. `justify-content`
定义项目在主轴上的对齐方式。  
```css
.container {
  justify-content: flex-start; /* 默认值，左对齐 */
  justify-content: flex-end; /* 右对齐 */
  justify-content: center; /* 居中对齐 */
  justify-content: space-between; /* 两端对齐，项目间隔相等 */
  justify-content: space-around; /* 项目两侧间隔相等 */
  justify-content: space-evenly; /* 项目间和两侧间隔完全相等 */
}
```

### 6. `align-items`
定义项目在交叉轴上的对齐方式。  
```css
.container {
  align-items: stretch; /* 默认值，拉伸填满容器 */
  align-items: flex-start; /* 顶部对齐 */
  align-items: flex-end; /* 底部对齐 */
  align-items: center; /* 居中对齐 */
  align-items: baseline; /* 基线对齐 */
}
```

### 7. `align-content`
定义多行项目在交叉轴上的对齐方式（仅当 `flex-wrap: wrap` 时生效）。  
```css
.container {
  align-content: stretch; /* 默认值，拉伸填满容器 */
  align-content: flex-start; /* 顶部对齐 */
  align-content: flex-end; /* 底部对齐 */
  align-content: center; /* 居中对齐 */
  align-content: space-between; /* 两端对齐，行间隔相等 */
  align-content: space-around; /* 行两侧间隔相等 */
}
```

---

## 3. **项目属性**

### 1. `order`
定义项目的排列顺序。  
```css
.item {
  order: 1; /* 默认值为 0，数值越小越靠前 */
}
```

### 2. `flex-grow`
定义项目的放大比例。  
```css
.item {
  flex-grow: 1; /* 默认值为 0，不放大 */
}
```

### 3. `flex-shrink`
定义项目的缩小比例。  
```css
.item {
  flex-shrink: 1; /* 默认值为 1，允许缩小 */
}
```

### 4. `flex-basis`
定义项目在分配多余空间之前的默认大小。  
```css
.item {
  flex-basis: 100px; /* 可以是长度值或百分比 */
}
```

### 5. `flex`
`flex-grow`、`flex-shrink` 和 `flex-basis` 的简写。  
```css
.item {
  flex: 1 1 auto; /* 默认值 */
}
```

### 6. `align-self`
定义单个项目在交叉轴上的对齐方式（覆盖 `align-items`）。  
```css
.item {
  align-self: auto; /* 默认值，继承容器的 align-items */
  align-self: flex-start; /* 顶部对齐 */
  align-self: flex-end; /* 底部对齐 */
  align-self: center; /* 居中对齐 */
  align-self: baseline; /* 基线对齐 */
  align-self: stretch; /* 拉伸填满容器 */
}
```

---

## 4. **Flexbox 布局示例**

### 水平居中对齐
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 两栏布局（左侧固定，右侧自适应）
```css
.container {
  display: flex;
}
.sidebar {
  flex: 0 0 200px; /* 固定宽度 */
}
.content {
  flex: 1; /* 自适应宽度 */
}
```

### 多行布局
```css
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  flex: 1 1 200px; /* 每行至少 200px，允许换行 */
}
```

---

## 5. **Flexbox 速查表**

| **属性**          | **说明**                                                     |
| ----------------- | ------------------------------------------------------------ |
| `display`         | 启用 Flexbox 布局（`flex` 或 `inline-flex`）。               |
| `flex-direction`  | 定义主轴方向（`row`、`row-reverse`、`column`、`column-reverse`）。 |
| `flex-wrap`       | 定义是否换行（`nowrap`、`wrap`、`wrap-reverse`）。           |
| `flex-flow`       | `flex-direction` 和 `flex-wrap` 的简写。                     |
| `justify-content` | 主轴对齐方式（`flex-start`、`flex-end`、`center`、`space-between` 等）。 |
| `align-items`     | 交叉轴对齐方式（`flex-start`、`flex-end`、`center`、`stretch` 等）。 |
| `align-content`   | 多行项目在交叉轴上的对齐方式。                               |
| `order`           | 定义项目的排列顺序。                                         |
| `flex-grow`       | 定义项目的放大比例。                                         |
| `flex-shrink`     | 定义项目的缩小比例。                                         |
| `flex-basis`      | 定义项目的默认大小。                                         |
| `flex`            | `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写。          |
| `align-self`      | 定义单个项目在交叉轴上的对齐方式。                           |

---

## 6. **Flexbox 学习资源**
• [MDN Flexbox 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
• [Flexbox Froggy 游戏](https://flexboxfroggy.com/)
• [CSS-Tricks Flexbox 指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

通过这份速查表，你可以快速掌握 Flexbox 的所有属性和用法，轻松实现各种布局需求！
