---
title: 异步加载技术
article: false
order: 2
---

CSS 异步加载技术是一种优化网页性能的方法，通过延迟或按需加载 CSS 文件，减少页面初始加载时间，提升用户体验。以下是常见的 CSS 异步加载技术及其实现方式：

---

## 1. **`<link>` 标签的 `media` 属性**
通过设置 `media` 属性，可以将某些 CSS 文件标记为非关键资源，浏览器会在页面渲染完成后异步加载这些文件。

### 示例
```html
<link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">
```

• `media="print"`：将 CSS 文件标记为仅用于打印，浏览器不会阻塞页面渲染。
• `onload="this.media='all'"`：当文件加载完成后，将其应用于所有媒体类型。

---

## 2. **`<link>` 标签的 `preload` 和 `onload`**
使用 `preload` 预加载 CSS 文件，并通过 `onload` 事件将其应用到页面。

### 示例
```html
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>
```

• `rel="preload"`：告诉浏览器预加载资源。
• `as="style"`：指定资源类型为 CSS。
• `onload="this.rel='stylesheet'"`：加载完成后将其应用为样式表。
• `<noscript>`：为不支持 JavaScript 的浏览器提供回退。

---

## 3. **JavaScript 动态加载 CSS**
通过 JavaScript 动态创建 `<link>` 标签，实现 CSS 的异步加载。

### 示例
```html
<script>
  function loadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  loadCSS('styles.css');
</script>
```

### 按需加载
可以在特定事件（如用户交互）中加载 CSS：
```javascript
document.getElementById('load-styles').addEventListener('click', () => {
  loadCSS('styles.css');
});
```

---

## 4. **`<link>` 标签的 `disabled` 属性**
通过设置 `disabled` 属性，延迟加载 CSS 文件，然后在需要时启用。

### 示例
```html
<link rel="stylesheet" href="styles.css" disabled>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('link[href="styles.css"]').disabled = false;
  });
</script>
```

---

## 5. **`<iframe>` 加载 CSS**
将 CSS 文件放在 `<iframe>` 中加载，避免阻塞主页面渲染。

### 示例
```html
<iframe src="styles.html" style="display:none;"></iframe>
```

在 `styles.html` 中加载 CSS：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body></body>
</html>
```

---

## 6. **HTTP/2 Server Push**
通过 HTTP/2 的服务器推送功能，将 CSS 文件推送给客户端，减少请求延迟。

### 配置示例（以 Nginx 为例）
```nginx
location / {
  http2_push /styles.css;
}
```

---

## 7. **使用 `loadCSS` 库**
[loadCSS](https://github.com/filamentgroup/loadCSS) 是一个轻量级的 JavaScript 库，专门用于异步加载 CSS 文件。

### 示例
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/loadCSS/3.3.1/loadCSS.min.js"></script>
<script>
  loadCSS('styles.css');
</script>
```

---

## 8. **`<link>` 标签的 `media` 和 `onload` 结合**
结合 `media` 和 `onload`，实现 CSS 的异步加载和应用。

### 示例
```html
<link rel="stylesheet" href="styles.css" media="none" onload="this.media='all'">
```

• `media="none"`：初始时不应用样式。
• `onload="this.media='all'"`：加载完成后应用样式。

---

## 9. **`<link>` 标签的 `prefetch`**
使用 `prefetch` 预加载 CSS 文件，适用于未来可能需要的资源。

### 示例
```html
<link rel="prefetch" href="styles.css" as="style">
```

---

## 10. **CSS 文件分割**
将关键 CSS 和非关键 CSS 分离，优先加载关键 CSS，延迟加载非关键 CSS。

### 关键 CSS
```html
<style>
  /* 关键 CSS 直接内联在 HTML 中 */
  body { font-family: Arial, sans-serif; }
</style>
```

### 非关键 CSS
```html
<link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">
```

---

## 11. **使用 Service Worker 缓存 CSS**
通过 Service Worker 缓存 CSS 文件，减少重复加载时间。

### 示例
```javascript
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('css-cache').then((cache) => {
      return cache.addAll(['styles.css']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

---

## 总结
CSS 异步加载技术可以显著优化网页性能，减少初始加载时间，提升用户体验。以下是常用技术的选择建议：
• **简单场景**：使用 `<link>` 标签的 `media` 和 `onload` 属性。
• **动态加载**：使用 JavaScript 动态创建 `<link>` 标签。
• **复杂场景**：使用 `loadCSS` 库或 Service Worker。

通过合理选择和应用这些技术，可以确保网页在性能和兼容性之间取得平衡。
