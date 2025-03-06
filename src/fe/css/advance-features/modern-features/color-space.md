---
title: 颜色空间
article: false
order: 1
---

CSS颜色空间（Color Space）是用于定义和表示颜色的数学模型。现代CSS支持多种颜色空间，包括传统的RGB、HSL，以及更高级的Lab、LCH等。以下是CSS中常见的颜色空间及其用法：

---

## **1. RGB颜色空间**
RGB（Red, Green, Blue）是最常用的颜色空间，通过红、绿、蓝三个通道的值来表示颜色。

### 语法
```css
rgb(红, 绿, 蓝)
rgba(红, 绿, 蓝, 透明度)
```

### 示例
```css
.color-rgb {
  background-color: rgb(255, 0, 0); /* 红色 */
}

.color-rgba {
  background-color: rgba(0, 255, 0, 0.5); /* 半透明绿色 */
}
```

---

## **2. HSL颜色空间**
HSL（Hue, Saturation, Lightness）通过色相、饱和度和亮度来表示颜色，更符合人类的直观感知。

### 语法
```css
hsl(色相, 饱和度, 亮度)
hsla(色相, 饱和度, 亮度, 透明度)
```

### 示例
```css
.color-hsl {
  background-color: hsl(120, 100%, 50%); /* 纯绿色 */
}

.color-hsla {
  background-color: hsla(240, 100%, 50%, 0.5); /* 半透明蓝色 */
}
```

---

## **3. HEX颜色值**
HEX（十六进制）是RGB颜色的一种紧凑表示形式，常用于CSS中。

### 语法
```css
#RRGGBB
#RRGGBBAA
```

### 示例
```css
.color-hex {
  background-color: #ff0000; /* 红色 */
}

.color-hex-alpha {
  background-color: #00ff0080; /* 半透明绿色 */
}
```

---

## **4. Lab颜色空间**
Lab颜色空间基于人类视觉感知，能够表示更广范围的颜色。它由亮度（L）和两个色度通道（a, b）组成。

### 语法
```css
lab(亮度, a, b)
```

### 示例
```css
.color-lab {
  background-color: lab(75% 20 -30); /* Lab颜色 */
}
```

---

## **5. LCH颜色空间**
LCH（Lightness, Chroma, Hue）是Lab颜色空间的另一种表示形式，通过亮度、色度和色相来表示颜色。

### 语法
```css
lch(亮度, 色度, 色相)
```

### 示例
```css
.color-lch {
  background-color: lch(75% 50 120); /* LCH颜色 */
}
```

---

## **6. Oklab颜色空间**
Oklab是一种新的颜色空间，旨在更均匀地表示颜色，适合用于颜色混合和渐变。

### 语法
```css
oklab(亮度, a, b)
```

### 示例
```css
.color-oklab {
  background-color: oklab(0.75 0.1 -0.1); /* Oklab颜色 */
}
```

---

## **7. Oklch颜色空间**
Oklch是Oklab颜色空间的另一种表示形式，通过亮度、色度和色相来表示颜色。

### 语法
```css
oklch(亮度, 色度, 色相)
```

### 示例
```css
.color-oklch {
  background-color: oklch(0.75 0.2 120); /* Oklch颜色 */
}
```

---

## **8. 颜色函数**
CSS还提供了一些颜色函数，用于生成或操作颜色。

### **8.1 `color-mix()`**
混合两种颜色。

```css
.color-mix {
  background-color: color-mix(in srgb, red, blue); /* 混合红色和蓝色 */
}
```

### **8.2 `color()`**
使用指定的颜色空间生成颜色。

```css
.color-custom {
  background-color: color(display-p3 0.5 0.5 0.5); /* 使用display-p3颜色空间 */
}
```

---

## **9. 颜色空间的兼容性**
• RGB、HSL、HEX等传统颜色空间在所有浏览器中都支持。
• Lab、LCH、Oklab、Oklch等新颜色空间在现代浏览器中逐渐支持，但在旧版浏览器中可能不兼容。

---

## **10. 示例代码**
以下是一个综合示例，展示了不同颜色空间的使用：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS颜色空间示例</title>
  <style>
    .color-rgb { background-color: rgb(255, 0, 0); }
    .color-hsl { background-color: hsl(120, 100%, 50%); }
    .color-hex { background-color: #0000ff; }
    .color-lab { background-color: lab(75% 20 -30); }
    .color-lch { background-color: lch(75% 50 120); }
    .color-oklab { background-color: oklab(0.75 0.1 -0.1); }
    .color-oklch { background-color: oklch(0.75 0.2 120); }
    .color-mix { background-color: color-mix(in srgb, red, blue); }
    .color-custom { background-color: color(display-p3 0.5 0.5 0.5); }

    .color-box {
      width: 100px;
      height: 100px;
      margin: 10px;
      display: inline-block;
    }
  </style>
</head>
<body>
  <div class="color-box color-rgb"></div>
  <div class="color-box color-hsl"></div>
  <div class="color-box color-hex"></div>
  <div class="color-box color-lab"></div>
  <div class="color-box color-lch"></div>
  <div class="color-box color-oklab"></div>
  <div class="color-box color-oklch"></div>
  <div class="color-box color-mix"></div>
  <div class="color-box color-custom"></div>
</body>
</html>
```

---

## **11. 总结**
• CSS支持多种颜色空间，包括RGB、HSL、Lab、LCH、Oklab、Oklch等。
• 传统颜色空间（如RGB、HSL）兼容性较好，新颜色空间（如Lab、LCH）在现代浏览器中逐渐支持。
• 颜色函数（如 `color-mix()`、`color()`）提供了更灵活的颜色操作方式。

通过灵活使用不同颜色空间，可以为网页设计提供更丰富的颜色选择和视觉效果。
