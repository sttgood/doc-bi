---
title: link
article: false
order:  
---

以下是关于HTML `<link>` 标签的完整技术文档：
 
---
 
HTML `<link>` 标签技术文档 
 
---
 
一、MDN官方文档 
- 当前文档地址：  
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link  
（若链接失效，建议通过MDN站内搜索"link"获取最新内容）
 
---
 
二、基础定义与核心作用 
`<link>` 标签用于定义文档与外部资源的关系，具有以下核心特性：
- 资源关联：建立文档与CSS、图标、字体等资源的连接 
- 元数据声明：定义文档的替代版本、版权信息等 
- 性能优化：支持预加载、预连接等现代优化技术 
- 位置限制：必须位于`<head>`内（除body-ok类型如`stylesheet`）
 
对比相关标签：
| 标签             | 用途                          | 加载方式      | 可交互性      |
|------------------|-------------------------------|---------------|---------------|
| `<link>`         | 被动资源关联                  | 异步/预加载   | 不可          |
| `<script>`       | 可执行脚本加载                | 同步/异步     | 可            |
| `<a>`            | 超链接导航                    | 用户触发      | 可            |
 
---
 
三、核心属性与语法结构 
 
1. 支持属性表 
| 属性           | 值类型                | 必需性 | 说明                          |
|----------------|-----------------------|--------|-------------------------------|
| `href`         | URL                   | 是     | 资源路径                      |
| `rel`          | 关系类型              | 是     | 定义资源类型（见下表）        |
| `as`           | fetch类型             | 条件   | 预加载时指定资源类型          |
| `type`         | MIME类型              | 否     | 资源MIME类型提示              |
| `media`        | 媒体查询              | 否     | 条件加载资源                  |
| `crossorigin`  | anonymous/use-credentials | 否 | CORS配置             |
| `disabled`     | Boolean               | 否     | 动态禁用样式表                |
 
常用rel属性值：
| 值              | 用途                          | 典型场景              |
|-----------------|-------------------------------|-----------------------|
| stylesheet      | CSS样式表                     | 主样式文件            |
| icon            | 网站图标                      | favicon.ico          |
| preload         | 资源预加载                    | 关键字体/脚本         |
| prefetch        | 资源预取                      | 下一页资源            |
| preconnect      | 预先建立连接                  | CDN域名预连接        |
| modulepreload   | 预加载ES模块                  | 现代SPA应用          |
| alternate       | 替代版本                      | RSS订阅/打印样式      |
 
---
 
四、代码示例与最佳实践 
 
1. 基础样式表加载 
```html 
<head>
  <!-- 主样式表 -->
  <link rel="stylesheet" href="/css/main.css">
  
  <!-- 打印专用样式 -->
  <link rel="stylesheet" href="/css/print.css" media="print">
</head>
```
 
2. 性能优化方案 
```html 
<!-- 预加载关键资源 -->
<link rel="preload" href="/fonts/roboto.woff2" as="font" type="font/woff2" crossorigin>
 
<!-- 预连接第三方源 -->
<link rel="preconnect" href="https://cdn.example.com">
 
<!-- 预取下一页资源 -->
<link rel="prefetch" href="/next-page.html">
```
 
---
 
五、高级功能指南 
 
1. 多主题切换 
```html 
<!-- 默认主题 -->
<link rel="stylesheet" href="light-theme.css" title="light">
 
<!-- 备用主题 -->
<link rel="alternate stylesheet" href="dark-theme.css" title="dark" disabled>
```
```javascript 
// 动态切换主题 
function setTheme(themeName) {
  document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    link.disabled = link.title !== themeName;
  });
}
```
 
2. 响应式加载策略 
```html 
<!-- 移动端优先加载 -->
<link rel="stylesheet" href="mobile.css" media="(max-width: 600px)">
 
<!-- 桌面端增强加载 -->
<link rel="stylesheet" href="desktop.css" media="(min-width: 601px)">
```
 
---
 
六、JavaScript操作实践 
 
1. 动态资源加载 
```javascript 
function loadCSS(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}
 
// 使用示例 
loadCSS('/css/lazy-load.css');
```
 
2. 预加载监控 
```javascript 
const preloadLink = document.querySelector('link[rel="preload"]');
 
preloadLink.addEventListener('load', () => {
  console.log('预加载完成');
});
 
preloadLink.addEventListener('error', () => {
  console.error('预加载失败');
});
```
 
---
 
七、安全与性能优化 
 
1. 安全策略 
- CORS配置：
  ```html 
  <link rel="stylesheet" href="https://cdn.example.com/style.css" crossorigin="anonymous">
  ```
 
- 完整性校验：
  ```html 
  <link rel="stylesheet" href="lib.css"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous">
  ```
 
2. 性能最佳实践 
- 关键CSS内联，非关键CSS异步加载：
  ```html 
  <link rel="preload" href="non-critical.css" as="style" onload="this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="non-critical.css"></noscript>
  ```
 
---
 
八、兼容性说明 
 
| 浏览器/特性      | Chrome | Firefox | Safari | Edge  | IE    |
|------------------|--------|---------|--------|-------|-------|
| 基础支持         | 1.0+   | 1.0+    | 3.0+   | 12+   | 6+    |
| `preload`        | 50+    | 56+     | 11.1+  | 17+   | 不支持|
| `modulepreload`  | 66+    | 不支持  | 不支持 | 79+   | 不支持|
| `disabled`属性   | 全支持 | 全支持  | 全支持 | 全支持| 10+   |
 
Polyfill方案：
```javascript 
// 预加载降级方案 
if (!('preload' in document.createElement('link'))) {
  const preloadLinks = document.querySelectorAll('link[rel="preload"]');
  preloadLinks.forEach(link => {
    link.rel = 'prefetch';
  });
}
```
 
---
 
九、最佳实践 
 
1. 资源加载顺序 
```html 
<head>
  <!-- 1. 预连接 -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  
  <!-- 2. 预加载 -->
  <link rel="preload" href="main.js" as="script">
  
  <!-- 3. 主样式表 -->
  <link rel="stylesheet" href="main.css">
  
  <!-- 4. 异步脚本 -->
  <script src="main.js" async></script>
</head>
```
 
2. 缓存策略配置 
```html 
<!-- 长期缓存版本控制 -->
<link rel="stylesheet" href="app.3a4b5c6d.css">
```
 
---
 
十、实际应用场景 
 
1. PWA应用配置 
```html 
<!-- Web应用清单 -->
<link rel="manifest" href="/app.webmanifest">
 
<!-- Apple Touch图标 -->
<link rel="apple-touch-icon" href="/icons/ios-180.png">
```
 
2. SEO优化 
```html 
<!-- 规范URL -->
<link rel="canonical" href="https://example.com/page">
 
<!-- 多语言版本 -->
<link rel="alternate" hreflang="en" href="https://example.com/en">
<link rel="alternate" hreflang="zh" href="https://example.com/zh">
```
 
---
 
十一、常见问题排查 
 
| 现象               | 可能原因                | 解决方案                     |
|--------------------|-------------------------|------------------------------|
| 样式未应用         | 路径错误/媒体查询不匹配 | 检查控制台网络请求           |
| 预加载未生效       | 资源类型未指定          | 添加正确的`as`属性           |
| 跨域资源加载失败   | CORS配置错误            | 检查服务器响应头             |
| 打印样式无效       | 未指定`media="print"`   | 添加媒体查询条件             |
| 旧浏览器兼容问题   | 新特性不支持            | 添加polyfill或降级方案       |
 
---
 
十二、扩展学习资源 
1. 预加载规范：  
https://w3c.github.io/preload/
 
2. 性能优化指南：  
https://web.dev/preload-critical-assets/
 
3. 安全检查工具：  
https://securityheaders.com/
 
建议结合现代前端工具链（如Webpack的`preload-webpack-plugin`）自动化生成最优资源加载配置，使用Lighthouse进行性能审计。