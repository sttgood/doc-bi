---
title: 滤镜效果
article: false
order: 3
---

CSS提供了多种视觉效果属性，如 **滤镜效果（Filter）**、**背景滤镜（Backdrop Filter）** 和 **裁剪路径（Clip Path）**，用于为元素添加丰富的视觉效果。：

---

## **1. 滤镜效果（Filter）**
`filter` 属性用于为元素添加图形效果，如模糊、灰度、亮度调整等。

### 常用滤镜函数
• `blur()`：模糊效果。
• `brightness()`：调整亮度。
• `contrast()`：调整对比度。
• `grayscale()`：灰度效果。
• `hue-rotate()`：调整色相。
• `invert()`：反色效果。
• `opacity()`：调整透明度。
• `saturate()`：调整饱和度。
• `sepia()`：褐色效果。
• `drop-shadow()`：添加阴影。

### 语法
```css
元素 {
  filter: 滤镜函数(参数);
}
```

### 示例
```css
img {
  filter: grayscale(100%); /* 灰度效果 */
}

button:hover {
  filter: brightness(1.5); /* 鼠标悬停时增加亮度 */
}
```

---

## **2. 背景滤镜（Backdrop Filter）**
`backdrop-filter` 属性用于为元素背后的区域添加滤镜效果，常用于创建毛玻璃效果。

### 常用滤镜函数
与 `filter` 相同，如 `blur()`、`brightness()` 等。

### 语法
```css
元素 {
  backdrop-filter: 滤镜函数(参数);
}
```

### 示例
```css
.modal {
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  background-color: rgba(255, 255, 255, 0.5);
}
```

---

## **3. 裁剪路径（Clip Path）**
`clip-path` 属性用于裁剪元素的显示区域，可以创建复杂的形状。

### 常用裁剪函数
• `circle()`：圆形裁剪。
• `ellipse()`：椭圆形裁剪。
• `polygon()`：多边形裁剪。
• `inset()`：矩形裁剪。

### 语法
```css
元素 {
  clip-path: 裁剪函数(参数);
}
```

### 示例
```css
img {
  clip-path: circle(50% at 50% 50%); /* 圆形裁剪 */
}

div {
  clip-path: polygon(0 0, 100% 0, 50% 100%); /* 三角形裁剪 */
}
```

---

## **4. 综合示例**
以下是一个综合示例，展示了 `filter`、`backdrop-filter` 和 `clip-path` 的使用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>滤镜与裁剪示例</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: url('background.jpg') no-repeat center center fixed;
      background-size: cover;
    }

    .container {
      width: 300px;
      margin: 50px auto;
      text-align: center;
    }

    img {
      width: 100%;
      filter: grayscale(50%) brightness(1.2); /* 灰度效果和亮度调整 */
      clip-path: circle(50% at 50% 50%); /* 圆形裁剪 */
    }

    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px); /* 毛玻璃效果 */
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .shape {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      clip-path: polygon(0 0, 100% 0, 50% 100%); /* 三角形裁剪 */
      margin: 20px auto;
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="image.jpg" alt="示例图片">
    <div class="modal">
      <h2>毛玻璃效果</h2>
      <p>这是一个带有毛玻璃效果的模态框。</p>
    </div>
    <div class="shape"></div>
  </div>
</body>
</html>
```

---

## **5. 兼容性**
• `filter` 和 `clip-path` 在现代浏览器中得到了广泛支持。
• `backdrop-filter` 在部分浏览器中可能需要添加前缀（如 `-webkit-backdrop-filter`）。

---

## **6. 总结**
• **滤镜效果（Filter）**：为元素添加图形效果，如模糊、灰度等。
• **背景滤镜（Backdrop Filter）**：为元素背后的区域添加滤镜效果，常用于毛玻璃效果。
• **裁剪路径（Clip Path）**：裁剪元素的显示区域，创建复杂形状。
