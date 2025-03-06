---
title: 包含块
article: false
order: 3
---

在 CSS 中，**包含块（Containing Block）** 是一个重要的概念，它决定了元素的尺寸和位置的参考基准。理解包含块对于掌握 CSS 布局和定位至关重要。以下是包含块的详细解析：

---

### **1. 什么是包含块？**
包含块是元素布局和定位的参考基准，它决定了元素的尺寸和位置的参考点。元素的 `width`、`height`、`padding`、`margin` 以及 `top`、`right`、`bottom`、`left` 等属性的值都是相对于其包含块计算的。

---

### **2. 包含块的确定规则**
包含块的确定规则取决于元素的 `position` 属性：

#### **2.1 `position: static` 或 `position: relative`**
• **包含块**：最近的块级祖先元素的**内容区域**。
• **示例**：
  ```html
  <div class="container">
    <div class="box"></div>
  </div>
  ```
  ```css
  .container {
    width: 300px;
    padding: 20px;
  }
  .box {
    position: relative;
    width: 50%; /* 150px，基于 .container 的内容区域 */
  }
  ```

#### **2.2 `position: absolute`**
• **包含块**：最近的已定位祖先元素（`position` 不为 `static`）的**内边距区域**。
• **示例**：
  ```html
  <div class="container">
    <div class="box"></div>
  </div>
  ```
  ```css
  .container {
    position: relative;
    width: 300px;
    padding: 20px;
  }
  .box {
    position: absolute;
    width: 50%; /* 150px，基于 .container 的内边距区域 */
  }
  ```

#### **2.3 `position: fixed`**
• **包含块**：视口（Viewport）。
• **示例**：
  ```css
  .box {
    position: fixed;
    width: 50%; /* 视口宽度的 50% */
  }
  ```

#### **2.4 `position: sticky`**
• **包含块**：最近的滚动容器的**内容区域**。
• **示例**：
  ```html
  <div class="container">
    <div class="box"></div>
  </div>
  ```
  ```css
  .container {
    width: 300px;
    padding: 20px;
    overflow: scroll;
  }
  .box {
    position: sticky;
    top: 0; /* 相对于 .container 的内容区域 */
  }
  ```

---

### **3. 包含块的影响**
包含块直接影响以下属性的计算：
1. **尺寸属性**：
   • `width`、`height`、`min-width`、`max-width`、`min-height`、`max-height`。
2. **定位属性**：
   • `top`、`right`、`bottom`、`left`。
3. **百分比值**：
   • 百分比值（如 `width: 50%`）基于包含块的相应尺寸计算。

---

### **4. 示例解析**
#### **4.1 相对定位**
```html
<div class="container">
  <div class="box"></div>
</div>
```
```css
.container {
  width: 300px;
  padding: 20px;
}
.box {
  position: relative;
  width: 50%; /* 150px，基于 .container 的内容区域 */
}
```

#### **4.2 绝对定位**
```html
<div class="container">
  <div class="box"></div>
</div>
```
```css
.container {
  position: relative;
  width: 300px;
  padding: 20px;
}
.box {
  position: absolute;
  width: 50%; /* 150px，基于 .container 的内边距区域 */
}
```

#### **4.3 固定定位**
```css
.box {
  position: fixed;
  width: 50%; /* 视口宽度的 50% */
}
```

---

### **5. 总结**
| 定位方式   | 包含块                           | 示例说明                          |
| ---------- | -------------------------------- | --------------------------------- |
| `static`   | 最近的块级祖先元素的内容区域     | `width: 50%` 基于内容区域计算     |
| `relative` | 最近的块级祖先元素的内容区域     | `width: 50%` 基于内容区域计算     |
| `absolute` | 最近的已定位祖先元素的内边距区域 | `width: 50%` 基于内边距区域计算   |
| `fixed`    | 视口                             | `width: 50%` 基于视口宽度计算     |
| `sticky`   | 最近的滚动容器的内容区域         | `top: 0` 相对于滚动容器的内容区域 |
