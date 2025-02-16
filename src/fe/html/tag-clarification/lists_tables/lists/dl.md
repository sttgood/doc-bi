---
title: dl
article: false
order:  
---
 
 
 
 
以下是关于HTML `<dl>` 标签的完整技术文档：
 
---
 
HTML `<dl>` 标签权威指南 
 
---
 
一、MDN官方文档 
- 中文文档：  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl  
- 英文文档：  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl  
  （更新日期：2025年2月MDN最新版本）
 
---
 
二、核心定义与作用 
`<dl>`（Description List）用于创建描述性列表，展示术语-描述对（Term-Description pairs）。包含两个核心子元素：
- `<dt>`（Description Term）：被描述的术语 
- `<dd>`（Description Details）：术语的具体描述 
 
---
 
三、适用场景 
| 场景                | 示例                          |
|---------------------|-------------------------------|
| 词汇表              | 技术术语解释                  |
| 元数据展示          | 作者-作品信息对               |
| 表单说明            | 输入字段的提示信息            |
| 键值对数据          | 配置参数说明                  |
| FAQ列表             | 问题与答案组合                |
 
---
 
四、代码规范与结构 
 
1. 基础结构 
```html 
<dl>
  <dt>HTML</dt>
  <dd>超文本标记语言，用于构建网页结构</dd>
  
  <dt>CSS</dt>
  <dd>层叠样式表，控制网页表现样式</dd>
</dl>
```
 
2. 复杂结构 
```html 
<!-- 多术语对应单描述 -->
<dl>
  <dt>作者</dt>
  <dt>译者</dt>
  <dd>张三</dd>
  
  <dt>ISBN</dt>
  <dd>978-7-04-059634-2</dd>
</dl>
 
<!-- 嵌套结构 -->
<dl>
  <dt>JavaScript</dt>
  <dd>
    <dl>
      <dt>ES6</dt>
      <dd>2015年发布的ECMAScript标准</dd>
    </dl>
  </dd>
</dl>
```
 
---
 
五、属性与扩展 
 
1. 全局属性支持 
| 属性类型         | 示例                | 说明                 |
|------------------|---------------------|----------------------|
| 基本属性         | `id`, `class`       | 标识和样式控制       |
| ARIA属性         | `role="list"`       | 增强可访问性         |
| 数据属性         | `data-taxonomy`     | 自定义数据存储       |
 
2. ARIA增强实践 
```html 
<dl role="list" aria-label="技术术语表">
  <dt role="listitem">AJAX</dt>
  <dd role="definition">异步JavaScript和XML技术</dd>
</dl>
```
 
---
 
六、浏览器兼容性 
 
| 浏览器          | 支持版本         | 备注                          |
|-----------------|------------------|-------------------------------|
| Chrome          | 全版本           | 完全支持                      |
| Firefox         | 全版本           | 完全支持                      |
| Safari          | 全版本           | 完全支持                      |
| Edge            | 全版本           | 完全支持                      |
| IE              | 6+               | 部分CSS样式需兼容处理         |
 
---
 
七、样式设计指南 
 
1. 基础CSS 
```css 
dl {
  margin: 1em 0;
  line-height: 1.6;
}
 
dt {
  font-weight: bold;
  color: #2c3e50;
}
 
dd {
  margin-left: 2em;
  color: #7f8c8d;
}
```
 
2. 响应式布局 
```css 
/* 移动端紧凑布局 */
@media (max-width: 768px) {
  dt, dd {
    display: block;
    margin-left: 0;
  }
  
  dd {
    margin-top: 0.5em;
  }
}
 
/* 桌面端网格布局 */
@media (min-width: 992px) {
  dl {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 1rem 2rem;
  }
  
  dt {
    grid-column: 1;
  }
  
  dd {
    grid-column: 2;
    margin: 0;
  }
}
```
 
---
 
八、可访问性规范 
 
1. 屏幕阅读器优化 
```html 
<dl aria-labelledby="glossary-heading">
  <h2 id="glossary-heading" class="visually-hidden">术语表</h2>
  <dt id="term-html">HTML</dt>
  <dd aria-labelledby="term-html">...</dd>
</dl>
```
 
2. 键盘导航 
| 组合键          | 功能                |
|-----------------|---------------------|
| Tab             | 在术语间跳转        |
| Enter           | 展开/折叠描述内容   |
 
---
 
九、SEO优化实践 
 
1. 结构化数据 
```html 
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "name": "Web开发术语",
  "hasDefinedTerm": [
    {
      "@type": "DefinedTerm",
      "name": "CSS",
      "description": "层叠样式表"
    }
  ]
}
</script>
```
 
2. 搜索引擎建议 
- 保持术语简明（建议不超过5个单词）
- 描述内容控制在150字符以内 
- 为重要术语添加`<meta>`关键词 
 
---
 
十、最佳实践与反模式 
 
推荐做法 
✅ 每组术语-描述必须成对出现  
✅ 使用CSS Grid实现对齐布局  
✅ 为长描述添加`tabindex`实现可聚焦  
✅ 配合`<div>`包裹复杂内容  
 
应避免做法 
❌ 使用`<dl>`替代`<ul>`制作导航菜单  
❌ 在`<dt>`中放置块级元素  
❌ 创建空`<dd>`元素占位  
 
---
 
十一、扩展应用场景 
 
1. FAQ实现方案 
```html 
<dl class="faq">
  <dt>如何重置密码？</dt>
  <dd>访问账户设置页面，点击「忘记密码」链接...</dd>
  
  <dt>支持哪些支付方式？</dt>
  <dd>目前支持信用卡、支付宝和微信支付...</dd>
</dl>
```
 
2. 元数据展示 
```html 
<dl class="metadata">
  <dt>发布日期</dt>
  <dd><time datetime="2025-02-15">2025年2月15日</time></dd>
  
  <dt>文档版本</dt>
  <dd>v2.1.3</dd>
</dl>
```
 
---
 
十二、相关技术对比 
 
| 列表类型 | 标签        | 特点                  | 典型用例           |
|----------|-------------|-----------------------|--------------------|
| 描述列表 | `<dl>`      | 术语-描述对           | 词汇表、元数据     |
| 无序列表 | `<ul>`      | 项目符号              | 导航菜单、功能列表 |
| 有序列表 | `<ol>`      | 顺序编号              | 操作步骤、排名     |
| 菜单列表 | `<menu>`    | 交互命令集合          | 工具栏、右键菜单   |
 
---
 
十三、疑难解答 
 
| 现象                 | 解决方案                |
|----------------------|-------------------------|
| 描述文本换行异常     | 检查`<dd>`内的块级元素嵌套 |
| 移动端布局错位       | 使用CSS Grid/Flex布局   |
| 屏幕阅读器跳过内容   | 添加`role="list"`属性   |
| 打印样式缺失         | 添加媒体查询`@print`规则 |
 
---
 
通过合理应用`<dl>`标签，您可以：  
✅ 清晰表达术语关系  
✅ 提升内容语义化程度  
✅ 优化搜索引擎理解  
✅ 增强辅助设备兼容性