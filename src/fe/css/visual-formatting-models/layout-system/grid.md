---
title: Grid 网格布局全解
article: false
order: 3
---

**CSS Grid 布局** 是一种强大的二维布局系统，适用于构建复杂的网页布局。与传统的布局方式（如浮动、Flexbox）相比，Grid 布局更加灵活和直观。以下是 CSS Grid 布局的全面解析：

---

### **1. 基本概念**
Grid 布局将容器划分为行（rows）和列（columns），形成网格（grid）。网格由网格线（grid lines）、网格轨道（grid tracks）、网格单元（grid cells）和网格区域（grid areas）组成。

#### **关键术语**
| 术语         | 描述                                                   |
| ------------ | ------------------------------------------------------ |
| **网格容器** | 应用 `display: grid` 的元素，是网格布局的父容器。      |
| **网格项**   | 网格容器内的直接子元素，是网格布局的子元素。           |
| **网格线**   | 网格的行和列的分界线，用于定位网格项。                 |
| **网格轨道** | 网格的行或列，是两条相邻网格线之间的区域。             |
| **网格单元** | 网格的最小单位，由相邻的行和列交叉形成。               |
| **网格区域** | 由多个网格单元组成的矩形区域，可以通过命名或坐标定义。 |

---

### **2. 基本用法**
#### **2.1 定义网格容器**
将元素设置为网格容器：
```css
.container {
  display: grid;
}
```

#### **2.2 定义行和列**
使用 `grid-template-rows` 和 `grid-template-columns` 定义网格的行和列。

• **固定值**：
  ```css
  .container {
    grid-template-rows: 100px 200px; /* 两行，高度分别为 100px 和 200px */
    grid-template-columns: 100px 200px; /* 两列，宽度分别为 100px 和 200px */
  }
  ```

• **比例值**：
  ```css
  .container {
    grid-template-columns: 1fr 2fr; /* 两列，比例为 1:2 */
  }
  ```

• **重复值**：
  ```css
  .container {
    grid-template-columns: repeat(3, 1fr); /* 三列，等宽 */
  }
  ```

• **自动填充**：
  ```css
  .container {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* 自动填充列 */
  }
  ```

#### **2.3 定义网格间距**
使用 `gap`（或 `row-gap` 和 `column-gap`）定义网格项之间的间距。

• **示例**：
  ```css
  .container {
    gap: 10px; /* 行和列间距均为 10px */
  }
  ```

---

### **3. 网格项定位**
#### **3.1 使用行和列定位**
通过 `grid-row` 和 `grid-column` 将网格项放置在指定位置。

• **示例**：
  ```css
  .item {
    grid-row: 1 / 3; /* 跨越第 1 行到第 3 行 */
    grid-column: 2 / 4; /* 跨越第 2 列到第 4 列 */
  }
  ```

#### **3.2 使用命名区域定位**
通过 `grid-template-areas` 定义命名区域，并使用 `grid-area` 将网格项放置在指定区域。

• **示例**：
  ```css
  .container {
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
  .header {
    grid-area: header;
  }
  .sidebar {
    grid-area: sidebar;
  }
  .main {
    grid-area: main;
  }
  .footer {
    grid-area: footer;
  }
  ```

#### **3.3 自动定位**
使用 `grid-auto-flow` 控制网格项的自动排列方式。

• **示例**：
  ```css
  .container {
    grid-auto-flow: row; /* 按行排列（默认） */
  }
  ```

---

### **4. 对齐与分布**
#### **4.1 容器对齐**
使用 `justify-content` 和 `align-content` 控制网格在容器中的对齐方式。

• **示例**：
  ```css
  .container {
    justify-content: center; /* 水平居中 */
    align-content: center; /* 垂直居中 */
  }
  ```

#### **4.2 网格项对齐**
使用 `justify-items` 和 `align-items` 控制网格项在网格单元中的对齐方式。

• **示例**：
  ```css
  .container {
    justify-items: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }
  ```

#### **4.3 单个网格项对齐**
使用 `justify-self` 和 `align-self` 控制单个网格项的对齐方式。

• **示例**：
  ```css
  .item {
    justify-self: end; /* 水平靠右 */
    align-self: start; /* 垂直靠上 */
  }
  ```

---

### **5. 高级特性**
#### **5.1 隐式网格**
当网格项超出显式定义的网格时，浏览器会自动创建隐式网格。使用 `grid-auto-rows` 和 `grid-auto-columns` 定义隐式网格的大小。

• **示例**：
  ```css
  .container {
    grid-auto-rows: 100px; /* 隐式行高为 100px */
  }
  ```

#### **5.2 网格线命名**
为网格线命名，方便引用。

• **示例**：
  ```css
  .container {
    grid-template-columns: [start] 100px [main-start] 1fr [main-end] 100px [end];
  }
  .item {
    grid-column: main-start / main-end;
  }
  ```

#### **5.3 子网格**
使用 `subgrid` 将子容器继承父容器的网格。

• **示例**：
  ```css
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .sub-container {
    display: grid;
    grid-template-columns: subgrid; /* 继承父容器的网格 */
  }
  ```

---

### **6. 实际应用**
#### **6.1 响应式布局**
使用媒体查询调整网格布局。

• **示例**：
  ```css
  .container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
  ```

#### **6.2 复杂布局**
使用 Grid 布局实现复杂的网页结构。

• **示例**：
  ```css
  .container {
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
  ```

---

### **7. 总结**
CSS Grid 布局是一种功能强大的二维布局系统，具有以下优点：
1. **灵活性强**：支持复杂的布局需求。
2. **直观易用**：通过行和列定义布局，代码清晰。
3. **响应式设计**：结合媒体查询，轻松实现响应式布局。
4. **对齐与分布**：提供多种对齐方式，满足不同设计需求。

通过熟练掌握 CSS Grid 布局，可以更高效地构建现代网页布局，提升开发效率和用户体验！
