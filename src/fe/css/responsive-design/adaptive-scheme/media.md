---
title: 媒体查询 media
article: false
order: 1
---

**CSS媒体查询（Media Queries）** 是一种用于根据设备特性（如屏幕宽度、高度、分辨率、方向等）应用不同样式的技术。它是响应式设计的核心工具，允许开发者根据不同的设备或视口尺寸调整网页的布局和样式。

---

## **1. 媒体查询的基本语法**
媒体查询使用 `@media` 规则，其基本语法如下：

```css
@media 媒体类型 and (媒体特性) {
  /* 样式规则 */
}
```

### **1.1 媒体类型**
常见的媒体类型包括：
• `all`：适用于所有设备（默认）。
• `screen`：适用于屏幕设备（如电脑、手机、平板）。
• `print`：适用于打印设备。

### **1.2 媒体特性**
常见的媒体特性包括：
• `width`：视口宽度。
• `height`：视口高度。
• `min-width`：最小视口宽度。
• `max-width`：最大视口宽度。
• `orientation`：设备方向（`portrait` 或 `landscape`）。
• `resolution`：设备分辨率。
• `aspect-ratio`：视口的宽高比。

---

## **2. 媒体查询的常见用法**

### **2.1 根据视口宽度调整样式**
```css
/* 当视口宽度小于等于600px时应用样式 */
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* 当视口宽度大于600px且小于等于1200px时应用样式 */
@media (min-width: 601px) and (max-width: 1200px) {
  body {
    background-color: lightgreen;
  }
}

/* 当视口宽度大于1200px时应用样式 */
@media (min-width: 1201px) {
  body {
    background-color: lightcoral;
  }
}
```

### **2.2 根据设备方向调整样式**
```css
/* 当设备处于竖屏模式时应用样式 */
@media (orientation: portrait) {
  body {
    background-color: lightyellow;
  }
}

/* 当设备处于横屏模式时应用样式 */
@media (orientation: landscape) {
  body {
    background-color: lightpink;
  }
}
```

### **2.3 根据设备分辨率调整样式**
```css
/* 当设备分辨率大于等于2dppx时应用样式 */
@media (min-resolution: 2dppx) {
  body {
    background-color: lightgray;
  }
}
```

---

## **3. 媒体查询的逻辑操作符**
媒体查询支持逻辑操作符 `and`、`or` 和 `not`，用于组合多个条件。

### **3.1 `and` 操作符**
```css
@media (min-width: 600px) and (max-width: 1200px) {
  body {
    background-color: lightgreen;
  }
}
```

### **3.2 `or` 操作符**
```css
@media (max-width: 600px), (orientation: portrait) {
  body {
    background-color: lightblue;
  }
}
```

### **3.3 `not` 操作符**
```css
@media not (max-width: 600px) {
  body {
    background-color: lightcoral;
  }
}
```

---

## **4. 媒体查询的嵌套**
媒体查询可以嵌套在CSS规则中，用于更精细地控制样式。

```css
.container {
  width: 100%;
}

@media (min-width: 600px) {
  .container {
    width: 50%;
  }
}
```

---

## **5. 媒体查询的常见应用场景**
• **响应式设计**：根据不同的屏幕尺寸调整布局和样式。
• **设备适配**：根据设备特性（如分辨率、方向）优化显示效果。
• **打印样式**：为打印设备提供特定的样式。

---

## **6. 媒体查询的示例**
以下是一个综合示例，展示了媒体查询的使用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>媒体查询示例</title>
  <style>
    body {
      background-color: lightgray;
    }

    /* 当视口宽度小于等于600px时应用样式 */
    @media (max-width: 600px) {
      body {
        background-color: lightblue;
      }
    }

    /* 当视口宽度大于600px且小于等于1200px时应用样式 */
    @media (min-width: 601px) and (max-width: 1200px) {
      body {
        background-color: lightgreen;
      }
    }

    /* 当视口宽度大于1200px时应用样式 */
    @media (min-width: 1201px) {
      body {
        background-color: lightcoral;
      }
    }

    /* 当设备处于竖屏模式时应用样式 */
    @media (orientation: portrait) {
      body::after {
        content: "竖屏模式";
        display: block;
        text-align: center;
        font-size: 24px;
      }
    }

    /* 当设备处于横屏模式时应用样式 */
    @media (orientation: landscape) {
      body::after {
        content: "横屏模式";
        display: block;
        text-align: center;
        font-size: 24px;
      }
    }
  </style>
</head>
<body>
  <h1>媒体查询示例</h1>
</body>
</html>
```

---

## **7. 总结**
• **媒体查询**：用于根据设备特性应用不同的样式。
• **语法**：使用 `@media` 规则，结合媒体类型和媒体特性。
• **逻辑操作符**：支持 `and`、`or` 和 `not`，用于组合多个条件。
• **应用场景**：响应式设计、设备适配、打印样式等。

通过灵活使用媒体查询，可以为不同的设备和视口尺寸提供优化的用户体验。
