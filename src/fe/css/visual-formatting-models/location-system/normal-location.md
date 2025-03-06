---
title: 静态 相对 绝对 固定 粘性定位
article: false
order: 1
---

在 CSS 中，**定位（Positioning）** 是控制元素在页面中位置的重要机制。CSS 提供了五种定位方式：**静态定位（Static）**、**相对定位（Relative）**、**绝对定位（Absolute）**、**固定定位（Fixed）** 和 **粘性定位（Sticky）**。每种定位方式都有其特定的行为和应用场景。以下是它们的详细解析：

---

### ** 定位属性（`position`）**

`position` 属性用于定义元素的定位方式，其取值包括：

|     值     |                             描述                             |
| :--------: | :----------------------------------------------------------: |
|  `static`  | 默认值，元素按照文档流排列，`top`、`right`、`bottom`、`left` 无效。 |
| `relative` |           相对定位，元素相对于其正常位置进行偏移。           |
| `absolute` |      绝对定位，元素相对于最近的已定位祖先元素进行定位。      |
|  `fixed`   |     固定定位，元素相对于视口进行定位，不随页面滚动移动。     |
|  `sticky`  |            粘性定位，元素在滚动到特定位置时固定。            |

### 一、静态定位（Static）

1. **语法**
   ```css
   position: static;
   ```

2. **特点**
   • 默认定位方式，元素按照常规流（Normal Flow）排列。
   • 无法通过 `top`、`right`、`bottom`、`left` 和 `z-index` 属性调整位置。

3. **应用场景**
   • 不需要特殊定位的普通布局。

---

### 二、相对定位（Relative）

1. **语法**
   ```css
   position: relative;
   ```

2. **特点**
   • 元素按照常规流排列，但可以通过 `top`、`right`、`bottom`、`left` 属性相对于其原始位置进行偏移。
   • 偏移不会影响其他元素的位置。

3. **示例**
   ```css
   .box {
     position: relative;
     top: 10px;
     left: 20px;
   }
   ```

4. **应用场景**
   • 微调元素的位置，不影响其他元素。

---

### 三、绝对定位（Absolute）

1. **语法**
   ```css
   position: absolute;
   ```

2. **特点**
   • 元素脱离常规流，不占据空间。
   • 相对于最近的**非静态定位祖先元素**（`position` 值为 `relative`、`absolute`、`fixed` 或 `sticky`）进行定位。
   • 如果没有非静态定位祖先元素，则相对于初始包含块（通常是 `<html>`）定位。

3. **示例**
   ```css
   .parent {
     position: relative;
   }
   .child {
     position: absolute;
     top: 10px;
     left: 20px;
   }
   ```

4. **应用场景**
   • 弹出菜单、工具提示、模态框等需要精确定位的场景。

---

### 四、固定定位（Fixed）

1. **语法**
   ```css
   position: fixed;
   ```

2. **特点**
   • 元素脱离常规流，不占据空间。
   • 相对于浏览器视口（Viewport）进行定位，即使页面滚动，元素位置也不会改变。

3. **示例**
   ```css
   .fixed-box {
     position: fixed;
     top: 10px;
     right: 10px;
   }
   ```

4. **应用场景**
   • 固定导航栏、返回顶部按钮、广告横幅等需要固定在屏幕上的元素。

---

### 五、粘性定位（Sticky）

1. **语法**
   ```css
   position: sticky;
   ```

2. **特点**
   • 元素在常规流中占据空间，但当滚动到特定位置时，会固定在视口中。
   • 需要指定 `top`、`right`、`bottom` 或 `left` 属性来定义触发固定的位置。

3. **示例**
   ```css
   .sticky-box {
     position: sticky;
     top: 0;
   }
   ```

4. **应用场景**
   • 表格标题、导航栏等需要在滚动时保持可见的元素。

---

### 六、对比总结

| 定位方式     | 脱离常规流   | 定位基准                 | 应用场景                   |
| ------------ | ------------ | ------------------------ | -------------------------- |
| **Static**   | 否           | 常规流                   | 默认布局                   |
| **Relative** | 否           | 自身原始位置             | 微调元素位置               |
| **Absolute** | 是           | 最近的非静态定位祖先元素 | 弹出菜单、工具提示、模态框 |
| **Fixed**    | 是           | 浏览器视口               | 固定导航栏、返回顶部按钮   |
| **Sticky**   | 否（固定前） | 最近的滚动容器和视口     | 表格标题、导航栏           |

---

### 七、注意事项

1. **`z-index` 的使用**
   • 只有 `position` 值为 `relative`、`absolute`、`fixed` 或 `sticky` 的元素可以使用 `z-index` 控制堆叠顺序。

2. **性能影响**
   • `fixed` 和 `sticky` 定位可能会影响页面性能，尤其是在频繁滚动的场景中。

3. **浏览器兼容性**
   • `sticky` 定位在现代浏览器中支持良好，但在旧版浏览器（如 IE）中不支持。

---

### 八、实际应用示例

#### 1. 相对定位与绝对定位结合
```html
<div class="parent">
  <div class="child">Child</div>
</div>
```
```css
.parent {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f0f0f0;
}
.child {
  position: absolute;
  top: 10px;
  left: 20px;
  background-color: #007bff;
}
```

#### 2. 固定导航栏
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  z-index: 1000;
}
```

#### 3. 粘性表格标题
```css
th {
  position: sticky;
  top: 0;
  background-color: #f8f9fa;
  z-index: 1;
}
```

---

### 九、总结

CSS 的定位机制为开发者提供了灵活的方式控制元素的位置和布局。通过合理使用 `static`、`relative`、`absolute`、`fixed` 和 `sticky` 定位，可以实现从简单的微调到复杂的动态布局效果。理解每种定位方式的特点和应用场景，是掌握 CSS 布局的关键。
