---
title: del
article: false
order:  
---
 
 
 
 
您好，我是由深度求索（DeepSeek）开发的智能助手DeepSeek-R1。以下是关于HTML `<del>`标签的完整技术解析：
 
---
 
一、MDN官方文档 
- 当前文档地址:  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/del  
  （若链接失效，建议通过MDN站内搜索"del"获取最新内容）
 
---
 
二、基础定义与核心作用 
`<del>` 是HTML语义化标签，用于表示文档中被删除或已过时的文本内容，通常与`<ins>`标签配合使用展示文档修订记录。
 
核心特征 
- 行内元素（inline）
- 默认显示删除线（可通过CSS覆盖）
- 使用场景：
  - 版本控制中的内容删除标记 
  - 电子商务价格调整展示 
  - 法律文档修订记录 
  - 协作编辑系统的变更追踪 
 
---
 
三、核心属性与语法结构 
 
1. 关键属性 
| 属性名称       | 值类型         | 说明                                                                 |
|----------------|----------------|----------------------------------------------------------------------|
| `cite`         | URL           | 指向解释删除原因的文档（如修订说明页面）                            |
| `datetime`     | ISO 8601日期  | 记录删除操作的时间戳（格式示例：`2025-02-15T12:24:00Z`）            |
| 全局属性       | -             | 支持所有HTML全局属性（如`class`、`style`等）                        |
 
2. 标准语法结构 
```html 
<p>
  原价：<del datetime="2025-02-10T08:00:00Z" cite="/price-changes#v2025.02">
    ¥599 
  </del>
  <ins>¥399</ins>
</p>
```
 
---
 
四、代码示例与最佳实践 
 
1. 基础文档修订 
```html 
<article>
  <h2>产品说明（版本2.1）</h2>
  <p>
    本设备支持<del datetime="2025-02-01" cite="#changelog">5G网络</del>
    <ins>6G网络</ins>连接。
  </p>
</article>
```
 
2. 电商价格展示 
```html 
<div class="price-box">
  <del aria-label="原价" class="old-price">
    ¥1299 
  </del>
  <span class="current-price">限时价 ¥799</span>
</div>
```
 
---
 
五、样式控制深度指南 
 
1. 基础样式重置 
```css 
del {
  text-decoration: line-through; /* 默认删除线 */
  color: #95a5a6;
  background-color: #fdf2f8; /* 浅粉色背景突出变化 */
}
 
/* 鼠标悬停增强 */
del:hover {
  text-decoration-style: double;
  color: #e74c3c;
}
 
/* 打印优化 */
@media print {
  del {
    text-decoration-color: #000;
    background-color: transparent;
  }
}
```
 
2. 高级样式方案 
```css 
/* 时间戳提示 */
del::after {
  content: " (" attr(datetime) ")";
  font-size: 0.8em;
  color: #7f8c8d;
}
 
/* 法律文档特殊样式 */
.legal del {
  text-decoration: line-through wavy #c0392b;
  position: relative;
}
 
.legal del::before {
  content: "✖";
  margin-right: 0.3em;
  color: #c0392b;
}
```
 
---
 
六、JavaScript操作实践 
 
1. 动态内容更新 
```javascript 
function markDeprecated(textElement, newText) {
  const del = document.createElement('del');
  del.setAttribute('datetime', new Date().toISOString());
  del.textContent = textElement.textContent;
  
  textElement.replaceWith(del);
  del.insertAdjacentHTML('afterend', `<ins>${newText}</ins>`);
}
 
// 使用示例 
const priceElement = document.querySelector('.original-price');
markDeprecated(priceElement, '¥699');
```
 
2. 修订历史生成 
```javascript 
function generateChangeLog() {
  const changes = Array.from(document.querySelectorAll('del')).map(del => ({
    content: del.textContent,
    datetime: del.getAttribute('datetime'),
    reason: del.getAttribute('cite')
  }));
  
  return JSON.stringify(changes, null, 2);
}
 
console.log(generateChangeLog());
```
 
---
 
七、可访问性指南 
 
1. ARIA增强方案 
```html 
<del 
  aria-describedby="change-reason" 
  role="deletion"
  datetime="2025-02-15"
>
  旧版条款内容 
</del>
<div id="change-reason" hidden>
  根据2025年新法规要求删除此条款 
</div>
```
 
2. 屏幕阅读器优化 
- 添加`aria-label`明确操作类型：
  ```html 
  <del aria-label="已删除内容：2025年2月修订">
    原服务协议条款 
  </del>
  ```
 
---
 
八、兼容性说明 
 
| 浏览器/特性       | Chrome | Firefox | Safari | Edge  | IE    |
|-------------------|--------|---------|--------|-------|-------|
| 基础支持          | 1+     | 1+      | 1+     | 12+   | 4+    |
| 属性支持          | 全支持 | 全支持  | 全支持 | 全支持| 6+    |
| CSS3样式支持      | 全支持 | 全支持  | 全支持 | 全支持| 9+    |
 
IE兼容方案:
```css 
/* IE9+ 删除线样式回退 */
del {
  text-decoration: line-through;
}
```
 
---
 
九、最佳实践 
 
1. 开发规范 
- 语义优先原则：
  ```html 
  <!-- 正确 -->
  <del datetime="2025-02-15">过期信息</del>
  
  <!-- 错误 -->
  <span style="text-decoration:line-through">仅样式删除</span>
  ```
 
2. SEO优化建议 
- 结合Schema标记：
  ```html 
  <del itemprop="priceChange" itemscope itemtype="https://schema.org/PriceSpecification">
    <meta itemprop="price" content="599">
    <meta itemprop="validThrough" content="2025-02-15">
    ¥599 
  </del>
  ```
 
---
 
十、实际应用场景 
 
1. 法律文档修订 
```html 
<section class="contract">
  <p>
    双方应于<del datetime="2025-01-01">30日</del>
    <ins>15个工作日</ins>内完成交割。
  </p>
</section>
```
 
2. 产品参数更新 
```html 
<dl class="specs">
  <dt>电池容量</dt>
  <dd>
    <del cite="#spec-change-log">5000mAh</del>
    <ins>5500mAh</ins>
  </dd>
</dl>
```
 
---
 
十一、常见问题排查 
 
| 现象                 | 可能原因                     | 解决方案                     |
|----------------------|------------------------------|------------------------------|
| 删除线不显示         | CSS覆盖默认样式              | 检查`text-decoration`属性    |
| 时间戳格式错误       | 未遵循ISO 8601标准           | 使用日期生成工具验证格式     |
| 嵌套导致样式异常     | 行内/块级元素错误嵌套        | 确保符合HTML内容模型规则     |
| 打印样式失效         | 未处理打印媒体查询           | 添加`@media print`规则       |
| 屏幕阅读器忽略内容   | 缺少ARIA标注                 | 添加`role="deletion"`属性    |
 
---
 
如需针对特定场景（如版本对比工具集成、自动化修订记录生成等）的深度优化方案，请提供具体实现需求。