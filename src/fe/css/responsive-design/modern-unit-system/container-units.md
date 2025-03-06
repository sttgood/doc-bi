---
title: 容器单位
article: false
order: 2
---

**容器单位（Container Units）** 是CSS中的一种新型相对单位，用于根据容器（父元素）的尺寸来设置元素的尺寸。这些单位包括 `cqw`（容器宽度百分比）和 `cqh`（容器高度百分比），它们与 `vw` 和 `vh` 类似，但基于容器的尺寸而不是视口的尺寸。

---

## **1. 容器单位的概念**
容器单位允许开发者根据父元素的尺寸来设置子元素的尺寸，从而创建更灵活的布局。与视口单位（如 `vw`、`vh`）不同，容器单位基于容器的尺寸，适用于响应式设计和组件化开发。

---

## **2. 容器单位的类型**
CSS中引入了以下容器单位：
• **`cqw`**：容器宽度的百分比（1cqw = 1%的容器宽度）。
• **`cqh`**：容器高度的百分比（1cqh = 1%的容器高度）。
• **`cqmin`**：容器宽度和高度中较小的值的百分比。
• **`cqmax`**：容器宽度和高度中较大的值的百分比。

---

## **3. 容器单位的使用**
容器单位的使用非常简单，只需在样式中直接使用 `cqw` 或 `cqh` 即可。

### **3.1 示例代码**
```html
<div class="container">
  <div class="child"></div>
</div>
```
```css
.container {
  width: 300px;
  height: 200px;
  background-color: lightgray;
}

.child {
  width: 50cqw; /* 50%的容器宽度 */
  height: 50cqh; /* 50%的容器高度 */
  background-color: lightblue;
}
```

在上述示例中，`.child` 的宽度为 `.container` 宽度的50%，高度为 `.container` 高度的50%。

---

## **4. 容器单位的应用场景**
• **响应式设计**：根据容器的尺寸调整子元素的尺寸，适用于不同尺寸的屏幕和设备。
• **组件化开发**：在组件内部使用容器单位，使组件更具灵活性和可重用性。
• **动态布局**：根据容器的尺寸动态调整布局，避免使用复杂的媒体查询。

---

## **5. 容器单位的兼容性**
容器单位是CSS的新特性，目前在现代浏览器中逐渐支持，但在旧版浏览器中可能不兼容。可以通过以下方式检测浏览器是否支持容器单位：

```css
@supports (width: 1cqw) {
  /* 支持容器单位 */
}
```

---

## **6. 容器单位与其他单位的对比**
| **单位** | **基准**         | **示例** | **适用场景**                 |
| -------- | ---------------- | -------- | ---------------------------- |
| `cqw`    | 容器宽度         | `50cqw`  | 根据容器宽度设置尺寸         |
| `cqh`    | 容器高度         | `50cqh`  | 根据容器高度设置尺寸         |
| `vw`     | 视口宽度         | `50vw`   | 根据视口宽度设置尺寸         |
| `vh`     | 视口高度         | `50vh`   | 根据视口高度设置尺寸         |
| `%`      | 父元素宽度或高度 | `50%`    | 根据父元素宽度或高度设置尺寸 |

---

## **7. 容器单位的示例**
以下是一个综合示例，展示了容器单位的使用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>容器单位示例</title>
  <style>
    .container {
      width: 80vw;
      height: 50vh;
      background-color: lightgray;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .child {
      width: 50cqw; /* 50%的容器宽度 */
      height: 50cqh; /* 50%的容器高度 */
      background-color: lightblue;
    }

    @supports (width: 1cqw) {
      .child::after {
        content: "支持容器单位";
        display: block;
        text-align: center;
        margin-top: 10px;
      }
    }

    @supports not (width: 1cqw) {
      .child::after {
        content: "不支持容器单位";
        display: block;
        text-align: center;
        margin-top: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="child"></div>
  </div>
</body>
</html>
```

---

## **8. 总结**
• **容器单位**：基于容器的尺寸设置元素的尺寸，包括 `cqw`、`cqh`、`cqmin` 和 `cqmax`。
• **应用场景**：适用于响应式设计、组件化开发和动态布局。
• **兼容性**：在现代浏览器中逐渐支持，但在旧版浏览器中可能不兼容。

通过灵活使用容器单位，可以创建更灵活和响应式的布局，减少对媒体查询的依赖，提高代码的可维护性和可扩展性。
