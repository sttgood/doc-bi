---
title: 图片自适应
article: false
order: 1
---

`srcset` 是 HTML 中用于实现图片自适应加载的属性。它允许开发者根据设备的屏幕分辨率、像素密度或视口宽度提供不同版本的图片，从而优化页面加载性能和用户体验。`srcset` 通常与 `sizes` 属性一起使用，以确保浏览器选择最合适的图片。

---

## 1. `srcset` 的基本用法
`srcset` 允许为 `<img>` 标签指定多个图片源，每个源对应不同的分辨率或宽度。

### 语法
```html
<img
  src="default.jpg" <!-- 默认图片，用于不支持 srcset 的浏览器 -->
  srcset="image-1x.jpg 1x, image-2x.jpg 2x"
  alt="描述文本"
/>
```

• `image-1x.jpg 1x`：1x 表示普通分辨率（1 倍像素密度）。
• `image-2x.jpg 2x`：2x 表示高分辨率（2 倍像素密度）。

### 示例
```html
<img
  src="default.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  alt="响应式图片"
/>
```

• `480w`：图片宽度为 480 像素。
• `800w`：图片宽度为 800 像素。
• `1200w`：图片宽度为 1200 像素。

---

## 2. `sizes` 属性
`sizes` 属性用于指定图片在不同视口宽度下的显示尺寸，帮助浏览器选择最合适的图片。

### 语法
```html
<img
  src="default.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 800px"
  alt="响应式图片"
/>
```

• `(max-width: 600px) 480px`：当视口宽度小于等于 600px 时，图片显示宽度为 480px。
• `800px`：默认情况下，图片显示宽度为 800px。

### 示例
```html
<img
  src="default.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
  alt="响应式图片"
/>
```

• `(max-width: 600px) 100vw`：当视口宽度小于等于 600px 时，图片宽度为 100% 视口宽度。
• `(max-width: 1200px) 50vw`：当视口宽度小于等于 1200px 时，图片宽度为 50% 视口宽度。
• `800px`：默认情况下，图片宽度为 800px。

---

## 3. 结合 `<picture>` 标签
`<picture>` 标签可以与 `srcset` 和 `<source>` 标签结合使用，提供更复杂的图片适配逻辑。

### 语法
```html
<picture>
  <source srcset="large.jpg" media="(min-width: 1200px)">
  <source srcset="medium.jpg" media="(min-width: 800px)">
  <img src="small.jpg" alt="响应式图片">
</picture>
```

### 示例
```html
<picture>
  <source srcset="large.jpg" media="(min-width: 1200px)">
  <source srcset="medium.jpg" media="(min-width: 800px)">
  <img src="small.jpg" alt="响应式图片">
</picture>
```

• 当视口宽度大于等于 1200px 时，加载 `large.jpg`。
• 当视口宽度大于等于 800px 时，加载 `medium.jpg`。
• 默认加载 `small.jpg`。

---

## 4. 实际应用场景
### 1. 响应式图片
根据设备视口宽度加载不同尺寸的图片，优化加载性能。

```html
<img
  src="default.jpg"
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 800px"
  alt="响应式图片"
/>
```

### 2. 高分辨率屏幕适配
为高分辨率屏幕（如 Retina 屏幕）提供高分辨率图片。

```html
<img
  src="default.jpg"
  srcset="image-1x.jpg 1x, image-2x.jpg 2x"
  alt="高分辨率图片"
/>
```

### 3. 艺术指导（Art Direction）
根据设备视口宽度加载不同裁剪或内容的图片。

```html
<picture>
  <source srcset="portrait.jpg" media="(orientation: portrait)">
  <source srcset="landscape.jpg" media="(orientation: landscape)">
  <img src="default.jpg" alt="艺术指导图片">
</picture>
```

---

## 5. 注意事项
1. **兼容性**  
   `srcset` 和 `sizes` 在现代浏览器中得到了广泛支持，但在旧版浏览器（如 IE11）中不支持。可以使用 `<picture>` 标签作为回退方案。

2. **图片格式优化**  
   结合 `<picture>` 标签，可以使用现代图片格式（如 WebP）以提高性能：
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="优化图片格式">
   </picture>
   ```

3. **图片尺寸合理设置**  
   确保 `srcset` 中的图片尺寸与 `sizes` 中的设置匹配，避免加载不合适的图片。

4. **性能优化**  
   不要过度使用高分辨率图片，以免增加页面加载时间。

---

## 6. 示例代码
以下是一个完整的示例，展示了 `srcset` 和 `sizes` 的用法：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>srcset 示例</title>
</head>
<body>
  <h1>响应式图片示例</h1>
  <img
    src="default.jpg"
    srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
    sizes="(max-width: 600px) 480px, 800px"
    alt="响应式图片"
  />

  <h1>艺术指导示例</h1>
  <picture>
    <source srcset="portrait.jpg" media="(orientation: portrait)">
    <source srcset="landscape.jpg" media="(orientation: landscape)">
    <img src="default.jpg" alt="艺术指导图片">
  </picture>
</body>
</html>
```

---

## 总结
`srcset` 和 `sizes` 是实现图片自适应加载的强大工具，能够根据设备的分辨率、像素密度和视口宽度选择最合适的图片。结合 `<picture>` 标签，还可以实现更复杂的图片适配逻辑。通过合理使用这些技术，可以显著优化页面加载性能，提升用户体验。。
