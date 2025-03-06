---
title: 视图过渡
article: false
order: 4
---

**视图过渡API（View Transition API）** 是CSS和JavaScript结合的一种新特性，用于在页面或元素之间创建平滑的过渡效果。它允许开发者定义视图之间的动画，例如页面导航、元素插入或删除时的过渡效果。以下是关于视图过渡API的详细解析：

---

## **1. 视图过渡API的核心概念**
视图过渡API的核心思想是通过捕获旧视图和新视图的快照，然后在这些快照之间应用动画效果。开发者可以通过JavaScript和CSS来控制过渡的行为。

---

## **2. 视图过渡API的使用步骤**

### **2.1 启用视图过渡**
视图过渡API默认是关闭的，需要通过 `document.startViewTransition()` 方法启用。

### **2.2 捕获快照**
在视图变化之前，API会自动捕获当前视图的快照（旧视图），并在视图变化后捕获新视图的快照。

### **2.3 应用动画**
API会在旧视图和新视图之间应用默认的淡入淡出动画，开发者可以通过CSS自定义动画效果。

---

## **3. 视图过渡API的基本用法**

### **3.1 JavaScript部分**
使用 `document.startViewTransition()` 方法启用视图过渡。

```javascript
document.startViewTransition(() => {
  // 视图变化的逻辑
  document.body.innerHTML = newContent;
});
```

### **3.2 CSS部分**
通过 `::view-transition-old` 和 `::view-transition-new` 伪元素自定义过渡动画。

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 1s;
}
```

---

## **4. 视图过渡API的伪元素**
视图过渡API提供了以下伪元素，用于控制过渡效果：

### **4.1 `::view-transition-old`**
表示旧视图的快照。

### **4.2 `::view-transition-new`**
表示新视图的快照。

### **4.3 `::view-transition-group`**
表示一组视图过渡的快照。

### **4.4 `::view-transition-image-pair`**
表示旧视图和新视图快照的容器。

---

## **5. 视图过渡API的动画控制**
开发者可以通过CSS的 `animation` 属性或 `@keyframes` 规则自定义过渡动画。

### 示例
```css
::view-transition-old(root) {
  animation: fade-out 1s ease-in-out;
}

::view-transition-new(root) {
  animation: fade-in 1s ease-in-out;
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## **6. 视图过渡API的示例**
以下是一个完整的示例，展示了如何在页面导航时应用视图过渡效果。

### HTML
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>视图过渡API示例</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .page {
      padding: 20px;
      background-color: lightblue;
    }

    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation-duration: 1s;
    }
  </style>
</head>
<body>
  <div class="page" id="page1">
    <h1>页面1</h1>
    <button id="switchPage">切换到页面2</button>
  </div>
  <div class="page" id="page2" style="display: none;">
    <h1>页面2</h1>
    <button id="switchBack">切换回页面1</button>
  </div>
  <script>
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const switchPage = document.getElementById('switchPage');
    const switchBack = document.getElementById('switchBack');

    switchPage.addEventListener('click', () => {
      document.startViewTransition(() => {
        page1.style.display = 'none';
        page2.style.display = 'block';
      });
    });

    switchBack.addEventListener('click', () => {
      document.startViewTransition(() => {
        page2.style.display = 'none';
        page1.style.display = 'block';
      });
    });
  </script>
</body>
</html>
```

---

## **7. 视图过渡API的兼容性**
视图过渡API目前处于实验阶段，仅在部分浏览器中支持（如Chrome）。可以通过以下方式检测浏览器是否支持视图过渡API：

```javascript
if (document.startViewTransition) {
  // 支持视图过渡API
} else {
  // 不支持视图过渡API
}
```

---

## **8. 视图过渡API的应用场景**
• **页面导航**：在单页应用（SPA）中实现页面之间的平滑过渡。
• **元素插入或删除**：在动态添加或删除元素时应用过渡效果。
• **视图切换**：在切换视图或布局时应用动画效果。

---

## **9. 总结**
• 视图过渡API用于在视图之间创建平滑的过渡效果。
• 通过 `document.startViewTransition()` 方法启用视图过渡。
• 使用 `::view-transition-old` 和 `::view-transition-new` 伪元素自定义过渡动画。
• 视图过渡API适合用于页面导航、元素插入或删除等场景。

通过视图过渡API，可以为网页添加更流畅的交互体验，提升用户感知。
