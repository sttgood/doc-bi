---
title: 关键CSS提取
article: false
order: 1
---

**关键 CSS（Critical CSS）** 是指网页首屏内容（Above the Fold）所需的最小 CSS 集合。提取关键 CSS 并将其内联到 HTML 中，可以减少渲染阻塞，提升网页的加载速度和用户体验。以下是关键 CSS 提取的详细解析：

---

### **1. 什么是关键 CSS？**
关键 CSS 是网页首屏内容（用户无需滚动即可看到的部分）所需的 CSS。通过提取关键 CSS 并将其内联到 HTML 中，可以减少首次渲染所需的 CSS 文件大小，从而加快页面加载速度。

---

### **2. 为什么提取关键 CSS？**
1. **减少渲染阻塞**：浏览器需要加载和解析 CSS 后才能渲染页面，提取关键 CSS 可以减少阻塞时间。
2. **提升首屏加载速度**：内联关键 CSS 可以避免额外的 HTTP 请求，加快首屏渲染。
3. **优化用户体验**：用户更快看到内容，提升整体体验。

---

### **3. 如何提取关键 CSS？**
#### **3.1 手动提取**
1. **分析首屏内容**：确定用户无需滚动即可看到的部分。
2. **提取相关样式**：从 CSS 文件中提取与首屏内容相关的样式。
3. **内联到 HTML**：将提取的关键 CSS 内联到 `<style>` 标签中。

#### **3.2 使用工具提取**
以下工具可以自动提取关键 CSS：
1. **Critical**：
   • 安装：`npm install -g critical`
   • 使用：
     ```bash
     critical https://example.com --inline > index.html
     ```
2. **Penthouse**：
   • 安装：`npm install penthouse`
   • 使用：
     ```javascript
     const penthouse = require('penthouse');
     penthouse({
       url: 'https://example.com',
       css: 'styles.css',
     }).then(criticalCss => {
       console.log(criticalCss);
     });
     ```
3. **在线工具**：
   • [Critical CSS Generator](https://www.sitelocity.com/critical-path-css-generator)

---

### **4. 关键 CSS 的最佳实践**
1. **内联关键 CSS**：将关键 CSS 内联到 HTML 的 `<style>` 标签中。
2. **异步加载非关键 CSS**：使用 `<link rel="preload">` 或 `loadCSS` 异步加载剩余 CSS。
3. **压缩关键 CSS**：使用工具（如 CSSNano）压缩关键 CSS，减少文件大小。
4. **动态生成关键 CSS**：对于动态内容，使用服务器端工具动态生成关键 CSS。

---

### **5. 实际应用**
#### **5.1 内联关键 CSS**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>关键 CSS 示例</title>
  <style>
    /* 关键 CSS */
    body { font-family: Arial, sans-serif; }
    .header { background-color: #007bff; color: white; padding: 20px; }
    .content { padding: 20px; }
  </style>
  <!-- 异步加载非关键 CSS -->
  <link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
<body>
  <div class="header">Header</div>
  <div class="content">Content</div>
</body>
</html>
```

#### **5.2 使用 Critical 工具**
```bash
critical https://example.com --inline > index.html
```

#### **5.3 使用 Penthouse**
```javascript
const penthouse = require('penthouse');
penthouse({
  url: 'https://example.com',
  css: 'styles.css',
}).then(criticalCss => {
  console.log(criticalCss);
});
```

---

### **6. 总结**
关键 CSS 提取是优化网页性能的重要技术，通过以下步骤实现：
1. **提取关键 CSS**：手动或使用工具提取首屏内容所需的 CSS。
2. **内联关键 CSS**：将关键 CSS 内联到 HTML 中。
3. **异步加载非关键 CSS**：减少渲染阻塞。

通过提取关键 CSS，可以显著提升网页的加载速度和用户体验！
