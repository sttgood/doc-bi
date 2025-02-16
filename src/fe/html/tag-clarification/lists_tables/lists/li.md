---
title: li
article: false
order:  
---
以下是关于HTML `<li>` 标签的完整技术文档：
 
---
 
HTML `<li>` 标签权威指南 
 
---
 
一、MDN官方文档 
- 中文文档：  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/li  
- 英文文档：  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li  
  （更新日期：2025年2月MDN最新版本）
 
---
 
二、核心定义与作用 
`<li>`（List Item）用于表示列表项，必须作为以下列表容器的子元素存在：
- `<ul>`：无序列表 
- `<ol>`：有序列表 
- `<menu>`：菜单列表（HTML5规范）
 
---
 
三、属性全解析 
 
1. 核心属性 
| 属性        | 适用列表类型 | 值类型/示例             | 说明                          |
|-------------|--------------|-------------------------|-------------------------------|
| `value`     | `<ol>`       | 整数（如`value="3"`）   | 设置有序列表的当前编号        |
| `type`      | `<ol>`       | `1`/`a`/`A`/`i`/`I`     | 覆盖父级`<ol>`的编号类型      |
| `role`      | 所有         | `listitem`/`presentation`| ARIA角色定义                  |
 
2. 全局属性支持 
✅ `id`/`class`  
✅ `data-*` 自定义数据属性  
✅ `aria-*` 可访问性属性  
✅ 事件处理属性（`onclick`等）
 
---
 
四、代码示例大全 
 
1. 基础用法 
```html 
<!-- 无序列表 -->
<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>橙子</li>
</ul>
 
<!-- 有序列表 -->
<ol>
  <li>第一步：准备材料</li>
  <li value="5">第二步：混合（从5开始计数）</li>
  <li>第三步：烘烤</li>
</ol>
```
 
2. 复杂结构 
```html 
<ol type="I">
  <li>主要步骤 
    <ul>
      <li>子步骤A</li>
      <li>子步骤B</li>
    </ul>
  </li>
  <li>最终处理</li>
</ol>
```
 
3. 现代CSS样式 
```html 
<style>
  .custom-list {
    list-style: none;
    counter-reset: custom-counter;
  }
  .custom-list li {
    counter-increment: custom-counter;
  }
  .custom-list li::before {
    content: "[" counter(custom-counter, lower-roman) "] ";
    color: #2c3e50;
  }
</style>
 
<ol class="custom-list">
  <li>初始化项目</li>
  <li>安装依赖</li>
</ol>
```
 
---
 
五、浏览器兼容性 
 
| 属性/特性       | Chrome  | Firefox | Safari  | Edge    | IE11   |
|-----------------|---------|---------|---------|---------|--------|
| `value`         | 全支持  | 全支持  | 全支持  | 全支持  | 8+     |
| CSS `::marker`  | 86+     | 68+     | 14.1+   | 86+     | ❌      |
| ARIA roles      | 全支持  | 全支持  | 全支持  | 全支持  | 10+    |
 
---
 
六、语义化与可访问性 
 
1. ARIA最佳实践 
```html 
<ul role="list">
  <li role="listitem" aria-label="主要导航项">
    <a href="/home">首页</a>
  </li>
</ul>
```
 
2. 屏幕阅读器优化 
```html 
<ol aria-label="操作步骤说明">
  <li>
    <span aria-hidden="true">①</span>
    <span class="visually-hidden">第一步：</span>
    检查设备状态 
  </li>
</ol>
```
 
---
 
七、SEO优化指南 
 
1. 结构化数据 
```html 
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "产品特点"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "技术规格"
    }
  ]
}
</script>
```
 
2. 搜索引擎建议 
- 保持列表项内容语义明确 
- 避免在`<li>`中直接放置块级元素（需包裹在`<div>`中）
- 为关键列表项添加`title`属性 
 
---
 
八、性能优化 
 
1. 大数据列表优化 
```html 
<div class="virtual-list">
  <!-- 动态渲染可见的<li>元素 -->
</div>
```
 
2. CSS性能提示 
```css 
/* 避免复杂的::marker样式 */
li::marker {
  content: "•";
  color: #3498db;
}
```
 
---
 
九、特殊用例解析 
 
1. 嵌套列表 
```html 
<ul>
  <li>
    一级项目 
    <ol>
      <li>二级项目A</li>
      <li>二级项目B</li>
    </ol>
  </li>
</ul>
```
 
2. 交互式列表 
```html 
<ul>
  <li contenteditable="true">可编辑项</li>
  <li draggable="true">可拖拽项</li>
</ul>
```
 
---
 
十、常见问题解决 
 
| 现象                 | 解决方案                |
|----------------------|-------------------------|
| 列表符号不显示       | 检查CSS的`list-style`属性覆盖 |
| `value`属性失效      | 确保父级是`<ol>`元素    |
| 跨浏览器缩进不一致   | 使用CSS重置`padding/margin` |
| 屏幕阅读器跳过列表项 | 添加`role="list"`和`role="listitem"` |
 
---
 
十一、扩展资源 
 
1. W3C规范：  
   https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element 
 
2. CSS Lists模块：  
   https://drafts.csswg.org/css-lists-3/
 
3. 可访问性检查表：  
   https://www.w3.org/WAI/tutorials/page-structure/content/#lists 
 
---
 
通过正确使用`<li>`标签，您可以：  
✅ 构建语义清晰的列表结构  
✅ 提升辅助技术兼容性  
✅ 增强SEO效果  
✅ 保持代码规范性与可维护性