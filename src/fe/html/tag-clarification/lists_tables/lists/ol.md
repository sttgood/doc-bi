---
title: ol
article: false
order:  
---
以下是关于HTML `<ol>` 标签的完整技术文档：
 
---
 
HTML `<ol>` 标签权威指南 
 
---
 
一、MDN官方文档 
- 中文文档：  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol  
- 英文文档：  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol  
  （更新日期：2025年2月MDN最新版本）
 
---
 
二、核心定义与作用 
`<ol>`（Ordered List）用于创建有序列表，其项目默认以数字序号标记。与`<ul>`的主要区别在于列表项的顺序重要性。
 
适用场景 
✅ 操作步骤说明  
✅ 排行榜单展示  
✅ 法律条款编号  
✅ 需要引用顺序的目录结构 
 
---
 
三、属性全解析 
 
1. 核心属性 
| 属性        | 值类型/示例               | 说明                          | 兼容性             |
|-------------|---------------------------|-------------------------------|--------------------|
| `type`      | `1`/`a`/`A`/`i`/`I`       | 编号类型                      | 全主流浏览器       |
| `start`     | 整数（如`start="3"`）     | 起始编号                      | 全主流浏览器       |
| `reversed`  | 布尔属性                  | 倒序编号（需CSS配合显示）     | Chrome 18+, FF 18+ |
| `compact`   | 布尔属性（已废弃）        | 紧凑显示（应使用CSS替代）     | 不推荐使用         |
 
2. 现代CSS替代方案 
```css 
/* 自定义编号样式 */
ol.custom {
  list-style-type: none;
  counter-reset: section;
}
 
ol.custom li::before {
  content: counter(section) ") ";
  counter-increment: section;
}
```
 
---
 
四、代码示例大全 
 
1. 基础用法 
```html 
<ol>
  <li>第一步：准备材料</li>
  <li>第二步：混合搅拌</li>
  <li>第三步：高温烘烤</li>
</ol>
```
 
2. 属性组合 
```html 
<ol type="I" start="5" reversed>
  <li>第四名</li>  <!-- 显示为 IV -->
  <li>第三名</li>  <!-- 显示为 III -->
  <li>第二名</li>  <!-- 显示为 II -->
  <li>第一名</li>  <!-- 显示为 I -->
</ol>
```
 
3. 嵌套列表 
```html 
<ol type="A">
  <li>主要步骤 
    <ol type="1">
      <li>子步骤一</li>
      <li>子步骤二</li>
    </ol>
  </li>
  <li>后续处理</li>
</ol>
```
 
4. 自定义计数器 
```html 
<style>
  .roman { 
    list-style: none;
    counter-reset: roman-list;
  }
  .roman li::before {
    content: counter(roman-list, upper-roman) ". ";
    counter-increment: roman-list;
    margin-right: 0.5em;
  }
</style>
 
<ol class="roman">
  <li>总则</li>
  <li>分则</li>
</ol>
```
 
---
 
五、浏览器兼容性 
 
| 属性/特性       | Chrome  | Firefox | Safari  | Edge    | IE11   |
|-----------------|---------|---------|---------|---------|--------|
| `type`          | 全支持  | 全支持  | 全支持  | 全支持  | 全支持 |
| `start`         | 全支持  | 全支持  | 全支持  | 全支持  | 全支持 |
| `reversed`      | 18+     | 18+     | 6.1+    | 79+     | ❌      |
| CSS计数器       | 全支持  | 全支持  | 全支持  | 全支持  | 8+     |
 
---
 
六、语义化与可访问性 
 
1. ARIA增强 
```html 
<ol aria-label="操作步骤" role="list">
  <li role="listitem">检查设备电源</li>
  <li role="listitem">按下启动按钮</li>
</ol>
```
 
2. 屏幕阅读器优化 
```html 
<ol aria-describedby="steps-desc">
  <p id="steps-desc" class="visually-hidden">包含三个主要步骤</p>
  <li>第一步内容</li>
  ...
</ol>
```
 
---
 
七、SEO最佳实践 
 
1. 结构化数据 
```html 
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "step": [
    {
      "@type": "HowToStep",
      "text": "准备材料"
    },
    {
      "@type": "HowToStep",
      "text": "混合搅拌"
    }
  ]
}
</script>
```
 
2. 搜索引擎建议 
- 保持列表项内容简洁明确（建议每项不超过150字符）
- 为复杂列表添加`<meta>`描述 
- 避免过度嵌套（建议不超过3层）
 
---
 
八、性能优化 
 
1. 列表虚拟化（大数据量）
```html 
<div id="long-list" style="height: 500px; overflow: auto;">
  <!-- 动态加载可见项 -->
</div>
```
 
2. CSS性能优化 
```css 
/* 避免昂贵的计数器操作 */
ol {
  will-change: transform;
}
```
 
---
 
九、相关技术对比 
 
| 列表类型 | 标签        | 特点                  | 使用场景           |
|----------|-------------|-----------------------|--------------------|
| 有序列表 | `<ol>`      | 数字/字母编号         | 步骤说明、排名     |
| 无序列表 | `<ul>`      | 项目符号              | 功能列表、导航菜单 |
| 定义列表 | `<dl>`      | 术语-描述对           | 词汇表、元数据     |
| 菜单列表 | `<menu>`    | 交互命令集合          | 右键菜单、工具栏   |
 
---
 
十、疑难解答 
 
| 现象                 | 解决方案                |
|----------------------|-------------------------|
| 编号不显示           | 检查CSS的`list-style`属性覆盖 |
| `reversed`属性无效   | 添加`value`属性到`<li>`或使用CSS计数器 |
| 跨浏览器样式不一致   | 使用CSS重置`list-style` |
| 屏幕阅读器跳过列表   | 添加`role="list"`       |
 
---
 
十一、扩展资源 
 
1. W3C规范：  
   https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element 
 
2. CSS计数器教程：  
   https://css-tricks.com/custom-list-number-styling/
 
3. 可访问性指南：  
   https://www.w3.org/WAI/tutorials/page-structure/content/#lists 
 
---
 
通过合理应用`<ol>`标签，您可以：  
✅ 清晰展示顺序敏感内容  
✅ 提升页面语义化程度  
✅ 增强辅助技术兼容性  
✅ 优化搜索引擎理解