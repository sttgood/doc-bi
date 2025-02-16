---
title: s
article: false
order:  
---
以下是关于HTML `<s>` 标签的完整技术文档：
 
---
 
HTML `<s>` 标签技术文档 
 
---
 
一、MDN官方文档 
- 当前文档地址：  
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/s  
（若链接失效，建议通过MDN站内搜索"s"获取最新内容）
 
---
 
二、基础定义与核心作用 
`<s>` 标签用于标识不再准确或不再相关的内容，具有以下核心特性：
- 语义化标识：表示内容已过时但未被删除 
- 视觉呈现：默认显示删除线（可通过CSS覆盖）
- 典型应用场景：
  - 价格调整前的原价展示 
  - 法律条款的过期版本 
  - 文档中已失效的说明 
  - 待办事项的已完成项 
 
对比相关标签：
| 标签           | 用途                          | 语义含义              | 默认样式      |
|----------------|-------------------------------|-----------------------|---------------|
| `<s>`          | 标识过时内容                  | 无版本控制意义        | 删除线        |
| `<del>`        | 表示删除内容                  | 具有版本控制语义      | 删除线        |
| `<strike>`     | 已废弃的删除线标签            | （HTML4废弃）         | 删除线        |
| `<ins>`        | 插入的新内容                  | 与`<del>`配合使用     | 下划线        |
 
---
 
三、核心属性与语法结构 
 
1. 支持属性表 
| 属性类型       | 典型用法示例             | 说明                          |
|----------------|-------------------------|-------------------------------|
| 全局属性       | `class`, `id`, `style`  | 样式控制与DOM操作标识          |
| `datetime`     | `datetime="2025-02-15"` | 标识内容失效时间（非标准属性） |
| `title`        | `title="已过期"`        | 鼠标悬停提示                  |
 
2. 标准语法示例 
```html 
<p>
  原价：<s>￥599</s>  
  现价：￥399（限时优惠）
</p>
```
 
---
 
四、代码示例与最佳实践 
 
1. 基础用法 
```html 
<article>
  <h2>产品更新日志</h2>
  <p>
    <s>v1.0: 基础功能发布</s>  
    v2.0: 新增AI增强模块 
  </p>
</article>
```
 
2. 结合时间戳 
```html 
<p>
  会议原定时间：
  <s datetime="2025-02-20T14:00">2月20日 14:00</s>
  已改为2月22日 15:00 
</p>
```
 
---
 
五、样式控制深度指南 
 
1. 基础样式修改 
```css 
s {
  text-decoration: line-through;
  color: #6c757d;
  opacity: 0.7;
}
 
/* 暗黑模式适配 */
@media (prefers-color-scheme: dark) {
  s {
    color: #adb5bd;
    text-decoration-color: #ff6b6b;
  }
}
```
 
2. 创意删除线设计 
```css 
s.fancy {
  position: relative;
  text-decoration: none;
}
 
s.fancy::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  transform: translateY(-50%) rotate(-3deg);
  opacity: 0.8;
}
```
 
---
 
六、JavaScript操作实践 
 
1. 动态失效标注 
```javascript 
function markObsolete(elementId) {
  const elem = document.getElementById(elementId);
  const s = document.createElement('s');
  s.innerHTML = elem.innerHTML;
  elem.parentNode.replaceChild(s, elem);
}
 
// 使用示例 
markObsolete('old-price');
```
 
2. 失效内容检测 
```javascript 
document.querySelectorAll('s').forEach(sElem => {
  sElem.addEventListener('mouseenter', () => {
    sElem.style.cursor = 'not-allowed';
  });
});
```
 
---
 
七、可访问性指南 
 
1. ARIA增强方案 
```html 
<s role="note" aria-label="过期内容提示">
  已终止的服务条款 
</s>
```
 
2. 屏幕阅读器优化 
- 添加隐藏说明文本：
```html 
<s aria-hidden="true">~~</s>
<span class="visually-hidden">以下内容已过期：</span>
...实际内容...
```
 
---
 
八、兼容性说明 
 
| 浏览器/特性      | Chrome | Firefox | Safari | Edge  | IE    |
|------------------|--------|---------|--------|-------|-------|
| 基础支持         | 1.0+   | 1.0+    | 3.0+   | 12+   | 8.0+  |
| 样式继承         | 全支持 | 全支持  | 全支持 | 全支持| 9+    |
| 现代特性支持     | 全支持 | 全支持  | 全支持 | 全支持| 不支持|
 
IE兼容方案：
```css 
s {
  text-decoration: line-through;
  color: #999;
}
```
 
---
 
九、最佳实践 
 
1. 开发规范 
- 避免与`<del>`混用 
- 技术文档推荐模式：
```html 
<dl>
  <dt>旧API</dt>
  <dd><s>calculateV1()</s></dd>
  
  <dt>新API</dt>
  <dd>calculateV2()</dd>
</dl>
```
 
2. SEO优化建议 
```html 
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Product",
  "name": "AI开发套件",
  "price": "399",
  "priceCurrency": "CNY",
  "priceValidUntil": "2025-03-01"
}
</script>
```
 
---
 
十、实际应用场景 
 
1. 电商价格示例 
```html 
<div class="pricing">
  <p class="old-price"><s>￥999</s></p>
  <p class="new-price">限时特价￥599</p>
</div>
```
 
2. 法律文档示例 
```html 
<section>
  <h3>2024版条款</h3>
  <p><s>2023版条款内容...</s></p>
  <p>最新修订内容...</p>
</section>
```
 
---
 
十一、常见问题排查 
 
| 现象               | 可能原因                | 解决方案                     |
|--------------------|-------------------------|------------------------------|
| 删除线不显示       | CSS样式覆盖             | 检查`text-decoration`属性    |
| 嵌套样式冲突       | 父元素继承样式          | 使用`text-decoration-skip-ink: none` |
| 打印样式异常       | 未设置打印媒体查询      | 添加`@media print`样式规则   |
| 屏幕阅读器忽略     | 缺乏语义描述            | 添加`role`或`aria-label`     |
| 动态内容未更新     | DOM操作顺序错误         | 确保在内容加载后执行脚本     |
 
---
 
十二、扩展学习资源 
1. HTML标准文档：  
https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-s-element 
 
2. 文本装饰规范：  
https://www.w3.org/TR/css-text-decor-3/
 
3. 实用工具推荐：
- CSS Text Decoration生成器：https://cssgenerator.org/text-decoration.html  
- 过时内容检测工具：https://validator.w3.org/
 
建议使用现代浏览器开发工具（如Chrome DevTools）实时调试样式，结合可访问性审计工具（如axe）确保合规性。