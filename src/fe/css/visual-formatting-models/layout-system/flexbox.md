---
title: 弹性盒
article: false
order: 2
---

**Flexbox（弹性盒布局）** 是 CSS3 中一种强大的布局模型，用于在一维空间（行或列）中对元素进行灵活排列和对齐。它通过简单的属性设置，可以轻松实现复杂的布局效果，特别适合响应式设计和动态布局场景。以下是 Flexbox 的深度解析：

---

### 一、Flexbox 的核心概念

1. **Flex 容器（Flex Container）**  
   • 通过设置 `display: flex` 或 `display: inline-flex`，将一个元素定义为 Flex 容器。
   • 容器内的子元素称为 **Flex 项目（Flex Items）**。

2. **主轴（Main Axis）与交叉轴（Cross Axis）**  
   • **主轴**：Flex 项目的排列方向，由 `flex-direction` 属性定义（默认水平方向）。
   • **交叉轴**：与主轴垂直的方向。

---

### 二、Flex 容器的属性

以下属性用于控制 Flex 容器的行为：

#### 1. `flex-direction`  
定义主轴的方向。
• `row`（默认）：水平方向，从左到右。
• `row-reverse`：水平方向，从右到左。
• `column`：垂直方向，从上到下。
• `column-reverse`：垂直方向，从下到上。

#### 2. `justify-content`  
定义 Flex 项目在主轴上的对齐方式。
• `flex-start`（默认）：从主轴起点对齐。
• `flex-end`：从主轴终点对齐。
• `center`：居中对齐。
• `space-between`：项目之间均匀分布，首尾不留空白。
• `space-around`：项目周围均匀分布。
• `space-evenly`：项目之间和周围均匀分布。

#### 3. `align-items`  
定义 Flex 项目在交叉轴上的对齐方式。
• `stretch`（默认）：拉伸项目以填满容器。
• `flex-start`：从交叉轴起点对齐。
• `flex-end`：从交叉轴终点对齐。
• `center`：居中对齐。
• `baseline`：按基线对齐。

#### 4. `align-content`  
定义多行 Flex 项目在交叉轴上的对齐方式（仅适用于多行布局）。
• `stretch`（默认）：拉伸行以填满容器。
• `flex-start`：从交叉轴起点对齐。
• `flex-end`：从交叉轴终点对齐。
• `center`：居中对齐。
• `space-between`：行之间均匀分布，首尾不留空白。
• `space-around`：行周围均匀分布。
• `space-evenly`：行之间和周围均匀分布。

#### 5. `flex-wrap`  
定义 Flex 项目是否换行。
• `nowrap`（默认）：不换行。
• `wrap`：换行。
• `wrap-reverse`：反向换行。

#### 6. `gap`  
定义 Flex 项目之间的间距。
• `row-gap`：行间距。
• `column-gap`：列间距。
• `gap`：同时设置行间距和列间距。

---

### 三、Flex 项目的属性

以下属性用于控制 Flex 项目的行为：

#### 1. `flex-grow`  
定义项目的放大比例（默认值为 `0`，不放大）。
• 如果所有项目的 `flex-grow` 为 `1`，则它们将平分剩余空间。
• 如果一个项目的 `flex-grow` 为 `2`，它将占据更多空间。

#### 2. `flex-shrink`  
定义项目的缩小比例（默认值为 `1`，允许缩小）。
• 如果所有项目的 `flex-shrink` 为 `1`，它们将按比例缩小。
• 如果一个项目的 `flex-shrink` 为 `0`，它将不缩小。

#### 3. `flex-basis`  
定义项目的初始大小（默认值为 `auto`，根据内容决定）。
• 可以设置为固定值（如 `100px`）或百分比（如 `50%`）。

#### 4. `flex`  
`flex-grow`、`flex-shrink` 和 `flex-basis` 的简写。
• 默认值：`0 1 auto`。
• 常用值：
  • `flex: 1`：等价于 `1 1 0%`。
  • `flex: auto`：等价于 `1 1 auto`。
  • `flex: none`：等价于 `0 0 auto`。

#### 5. `align-self`  
定义单个项目在交叉轴上的对齐方式，覆盖 `align-items`。
• `auto`（默认）：继承容器的 `align-items`。
• `flex-start`：从交叉轴起点对齐。
• `flex-end`：从交叉轴终点对齐。
• `center`：居中对齐。
• `stretch`：拉伸以填满容器。
• `baseline`：按基线对齐。

#### 6. `order`  
定义项目的排列顺序（默认值为 `0`）。
• 数值越小，排列越靠前。

---

### 四、Flexbox 的实际应用

#### 1. 水平居中
```css
.container {
  display: flex;
  justify-content: center;
}
```

#### 2. 垂直居中
```css
.container {
  display: flex;
  align-items: center;
}
```

#### 3. 等分布局
```css
.container {
  display: flex;
}
.item {
  flex: 1; /* 每个项目平分空间 */
}
```

#### 4. 响应式布局
```css
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  flex: 1 1 200px; /* 项目最小宽度为 200px，自动换行 */
}
```

#### 5. 导航栏
```css
.nav {
  display: flex;
  justify-content: space-between;
}
.nav-item {
  flex: 1;
  text-align: center;
}
```

---

### 五、Flexbox 的注意事项

1. **兼容性**  
   • Flexbox 在现代浏览器中支持良好，但在旧版浏览器（如 IE10 及更早版本）中可能存在兼容性问题。
   • 可以使用 Autoprefixer 自动添加浏览器前缀。

2. **性能**  
   • Flexbox 的性能通常优于传统布局（如浮动），但在复杂布局中可能影响渲染性能。

3. **嵌套使用**  
   • 可以将 Flexbox 容器嵌套使用，以实现更复杂的布局。

---

### 六、总结

Flexbox 是一种强大且灵活的布局模型，适用于一维空间的布局场景。通过掌握 Flex 容器和 Flex 项目的属性，可以轻松实现水平居中、垂直居中、等分布局等常见布局效果。结合响应式设计和嵌套使用，Flexbox 能够满足大多数现代网页布局的需求。
