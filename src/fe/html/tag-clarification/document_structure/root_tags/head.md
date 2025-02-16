---
title: head
article: false
order:  
---


以下是关于HTML `<head>` 标签的完整技术文档：
 
---
 
HTML `<head>` 标签技术文档 
 
---
 
一、MDN官方文档 
- 当前文档地址：  
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head  
（若链接失效，建议通过MDN站内搜索"head"获取最新内容）
 
---
 
二、基础定义与核心作用 
`<head>` 标签是HTML文档的元数据容器，具有以下核心特性：
- 元数据存储：包含文档标题、字符编码、视口设置等 
- 资源声明：链接外部CSS、JavaScript、字体等资源 
- 文档配置：定义HTTP标头等效信息（如CSP）
- 不可见性：内容不会直接渲染在页面主体区域 
 
对比相关标签：
| 标签             | 位置          | 内容类型              | 可见性  |
|------------------|---------------|-----------------------|---------|
| `<head>`         | `<html>`内首部| 元数据/资源链接       | 不可见  |
| `<body>`         | `<html>`内主体| 可见内容/交互元素     | 可见    |
 
---
 
三、核心属性与语法结构 
 
1. 支持属性表 
| 属性           | 值类型        | 说明                          |
|----------------|---------------|-------------------------------|
| `lang`         | 语言代码      | 定义head内容语言（非文档主语言） |
| 全局属性       | -             | 支持所有HTML全局属性          |
 
特殊说明：  
- HTML5已废弃`profile`属性（原用于关联元数据概要文件）
- `lang`属性建议优先在`<html>`标签使用 
 
2. 标准语法 
```html 
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>页面标题</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- 页面内容 -->
</body>
</html>
```
 
---
 
四、代码示例与最佳实践 
 
1. 基础文档结构 
```html 
<head>
  <!-- 字符编码声明 -->
  <meta charset="utf-8">
  
  <!-- 视口配置 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- 标题 -->
  <title>企业官网 - 产品展示</title>
  
  <!-- 主样式表 -->
  <link rel="stylesheet" href="main.css">
</head>
```
 
2. 多语言配置 
```html 
<head>
  <meta charset="utf-8">
  <title lang="en">Company Website - Products</title>
  <title lang="zh-CN" hidden>企业官网 - 产品展示</title>
  <link rel="alternate" hreflang="en" href="https://example.com/en">
</head>
```
 
---
 
五、核心子元素详解 
 
1. 必需元素 
| 元素              | 说明                          | 示例                     |
|-------------------|-------------------------------|--------------------------|
| `<title>`         | 文档标题（SEO关键元素）       | `<title>首页 - 网站名`   |
| `<meta charset>`  | 字符编码声明                  | `<meta charset="UTF-8">` |
 
2. 常用可选元素 
| 元素              | 用途                          | 典型场景                  |
|-------------------|-------------------------------|---------------------------|
| `<meta name>`     | 搜索引擎元数据                | description/keywords      |
| `<link>`          | 外部资源链接                  | CSS/图标/预加载           |
| `<style>`         | 内联CSS样式                   | 关键CSS内联               |
| `<script>`        | JavaScript代码/链接           | 分析脚本/异步加载         |
| `<base>`          | 定义基础URL                   | 统一相对路径基准          |
 
---
 
六、SEO优化指南 
 
1. 关键元数据配置 
```html 
<head>
  <!-- 主标题 -->
  <title>智能手机 - 品牌商城</title>
  
  <!-- 页面描述 -->
  <meta name="description" 
        content="品牌商城提供最新款智能手机，涵盖旗舰机型与性价比优选">
        
  <!-- 关键词（现代SEO权重降低） -->
  <meta name="keywords" content="手机,智能手机,网购">
  
  <!-- 规范URL -->
  <link rel="canonical" href="https://example.com/smartphones">
  
  <!-- 结构化数据 -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "旗舰智能手机"
  }
  </script>
</head>
```
 
2. 移动优先配置 
```html 
<meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<meta name="theme-color" content="#ffffff">
<link rel="apple-touch-icon" href="/icons/ios-180.png">
```
 
---
 
七、性能优化策略 
 
1. 资源加载优化 
```html 
<head>
  <!-- 预加载关键资源 -->
  <link rel="preload" href="critical.css" as="style">
  <link rel="preload" href="main.js" as="script">
  
  <!-- 预连接第三方源 -->
  <link rel="preconnect" href="https://cdn.example.com">
  
  <!-- 异步加载非关键CSS -->
  <link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">
</head>
```
 
2. 脚本加载策略 
```html 
<!-- 延迟加载 -->
<script src="analytics.js" defer></script>
 
<!-- 异步加载 -->
<script src="chat-widget.js" async></script>
 
<!-- 动态加载 -->
<script>
  window.addEventListener('load', function() {
    const script = document.createElement('script');
    script.src = "lazy.js";
    document.head.appendChild(script);
  });
</script>
```
 
---
 
八、安全配置 
 
1. 内容安全策略 
```html 
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'unsafe-inline'">
```
 
2. 安全头信息 
```html 
<!-- XSS保护 -->
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
 
<!-- 禁用自动检测 -->
<meta http-equiv="Content-Type-Options" content="nosniff">
 
<!-- 点击劫持防护 -->
<meta http-equiv="X-Frame-Options" content="DENY">
```
 
---
 
九、多页面应用(MPA)与单页面应用(SPA)
 
1. MPA传统方案 
```html 
<!-- 每个HTML文件包含完整head -->
<head>
  <title>产品页 - 网站名</title>
  <link rel="stylesheet" href="product.css">
</head>
```
 
2. SPA动态管理 
```javascript 
// 路由变更时更新head 
router.afterEach(to => {
  document.title = to.meta.title || '默认标题'
  document.querySelector('meta[name="description"]')
    .setAttribute('content', to.meta.description || '')
})
```
 
---
 
十、兼容性说明 
 
| 浏览器/特性      | Chrome | Firefox | Safari | Edge  | IE    |
|------------------|--------|---------|--------|-------|-------|
| 基础支持         | 1.0+   | 1.0+    | 1.0+   | 12+   | 5.5+  |
| `preload`        | 50+    | 56+     | 11.1+  | 17+   | 不支持|
| `async/defer`    | 全支持 | 全支持  | 全支持 | 全支持| IE10+ |
 
IE兼容方案：
```html 
<!--[if IE]>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
<![endif]-->
```
 
---
 
十一、常见问题排查 
 
| 现象               | 可能原因                | 解决方案                     |
|--------------------|-------------------------|------------------------------|
| 元数据未生效       | 元素位置错误            | 确保位于`<head>`内           |
| SEO效果差          | 缺少关键meta标签        | 添加description/canonical    |
| 样式未加载         | 路径错误/媒体查询限制   | 检查控制台网络请求           |
| 页面重定向循环     | `<base>`配置错误        | 检查基准URL设置              |
| 移动端显示异常     | 视口meta缺失            | 添加viewport配置             |
 
---
 
十二、扩展学习资源 
1. W3C规范文档：  
https://html.spec.whatwg.org/multipage/semantics.html#the-head-element 
 
2. Google SEO指南：  
https://developers.google.com/search/docs/beginner/seo-starter-guide 
 
3. 性能优化工具：  
https://web.dev/learn/html/head 
 
建议使用现代前端框架（如Next.js、Nuxt.js）的Head管理组件，结合Lighthouse进行综合质量检测，通过Google Search Console监控SEO表现。