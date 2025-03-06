---
title: 性能分析工具 Lighthouse
article: false
order: 2
---

**Lighthouse** 是 Google 提供的一款开源工具，用于分析和优化网页性能、可访问性、最佳实践、SEO 等方面。它可以帮助开发者识别网页中的性能瓶颈并提供优化建议。以下是关于如何使用 Lighthouse 进行 CSS 性能分析的详细指南。

---

## **1. 如何使用 Lighthouse？**
Lighthouse 可以通过多种方式运行：
• **Chrome DevTools**（推荐）
• **Chrome 扩展程序**
• **Node.js 命令行工具**
• **PageSpeed Insights**

### **1.1 使用 Chrome DevTools**
1. 打开 Chrome 浏览器。
2. 右键点击网页，选择 **“检查”** 打开 DevTools。
3. 切换到 **Lighthouse** 标签。
4. 选择需要分析的类别（如 **Performance**）。
5. 点击 **“Generate report”** 生成报告。

### **1.2 使用 Node.js 命令行工具**
1. 安装 Lighthouse：
   ```bash
   npm install -g lighthouse
   ```
2. 运行 Lighthouse：
   ```bash
   lighthouse https://example.com --view --output=html
   ```

---

## **2. Lighthouse 报告中的 CSS 性能指标**
Lighthouse 会分析网页的 CSS 性能，并提供以下关键指标和建议：

### **2.1 关键指标**
• **First Contentful Paint (FCP)**：首次内容绘制时间，衡量页面首次渲染内容的时间。
• **Largest Contentful Paint (LCP)**：最大内容绘制时间，衡量页面最大内容块渲染的时间。
• **Cumulative Layout Shift (CLS)**：累积布局偏移，衡量页面布局的稳定性。
• **Total Blocking Time (TBT)**：总阻塞时间，衡量页面交互性。
• **Speed Index**：速度指数，衡量页面内容加载的速度。

### **2.2 CSS 相关建议**
• **减少未使用的 CSS**：删除未使用的 CSS 代码，减少文件大小。
• **减少关键渲染路径中的 CSS**：优化关键 CSS，减少阻塞渲染的 CSS。
• **避免大型布局偏移**：优化 CSS 布局，避免页面内容跳动。
• **使用 `content-visibility`**：建议使用 `content-visibility` 优化渲染性能。
• **压缩 CSS 文件**：使用 Gzip 或 Brotli 压缩 CSS 文件。

---

## **3. 优化 CSS 性能的建议**
根据 Lighthouse 的报告，可以采取以下优化措施：

### **3.1 删除未使用的 CSS**
使用工具（如 PurgeCSS）删除未使用的 CSS 代码。

```bash
npm install purgecss --save-dev
```

```javascript
const purgecss = require('purgecss')
const purgecssResult = await new Purgecss().purge({
  content: ['**/*.html'],
  css: ['**/*.css']
})
```

### **3.2 内联关键 CSS**
将关键 CSS 内联到 HTML 中，减少阻塞渲染的 CSS。

```html
<style>
  /* 关键 CSS */
  .header { color: red; }
</style>
```

### **3.3 使用 `content-visibility`**
为长列表或大型内容块启用 `content-visibility`。

```css
.container {
  content-visibility: auto;
  contain-intrinsic-size: 500px;
}
```

### **3.4 压缩 CSS 文件**
使用构建工具（如 Webpack）压缩 CSS 文件。

```javascript
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
module.exports = {
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
}
```

### **3.5 避免布局偏移**
• 为图片和视频设置固定宽高。
• 避免动态插入内容导致布局变化。

```css
img {
  width: 100%;
  height: auto;
}
```

---

## **4. Lighthouse 报告的局限性**
• **测试环境**：Lighthouse 在模拟环境中运行，可能与真实用户环境有差异。
• **设备性能**：测试结果受设备性能影响。
• **动态内容**：对于动态加载的内容，Lighthouse 可能无法完全捕获。

---

## **5. 其他性能分析工具**
除了 Lighthouse，还可以使用以下工具进行 CSS 性能分析：
• **PageSpeed Insights**：Google 提供的在线性能分析工具。
• **WebPageTest**：提供详细的性能分析和水滴图。
• **Chrome DevTools Performance Panel**：用于分析页面渲染性能。

---

## **6. 示例报告**
以下是 Lighthouse 报告的示例：

### **6.1 性能评分**
• **Performance**: 85/100
• **Accessibility**: 95/100
• **Best Practices**: 90/100
• **SEO**: 100/100

### **6.2 优化建议**
• **Remove unused CSS**: 删除 20KB 未使用的 CSS。
• **Inline critical CSS**: 内联关键 CSS 以减少渲染阻塞。
• **Avoid large layout shifts**: 修复图片布局偏移问题。

---

## **7. 总结**
Lighthouse 是一款强大的工具，可以帮助开发者分析和优化 CSS 性能。通过以下步骤，可以显著提升页面性能：
1. 使用 Lighthouse 生成报告。
2. 根据报告中的建议优化 CSS。
3. 使用其他工具（如 PurgeCSS、Webpack）进一步优化。

结合 Lighthouse 和其他性能分析工具，可以全面了解页面性能瓶颈，并采取针对性的优化措施。
