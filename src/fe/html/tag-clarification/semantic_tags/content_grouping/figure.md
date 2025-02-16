---
title: figure
article: false
order:  
---


以下是关于HTML `<figure>` 标签的详细介绍：

MDN官方文档地址
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure

---

一、基本定义
`<figure>` 是HTML5新增的语义化容器标签，用于包裹与文档主要内容相关但可独立存在的流内容（如图表、代码片段、插图等），通常与 `<figcaption>` 配合使用添加说明文字。

---

二、核心特性
| 属性        | 说明                                                                 |
|-------------|----------------------------------------------------------------------|
| 默认样式    | `display: block` 块级元素                                            |
| 语义化价值  | 明确标识内容为独立引用单元                                           |
| 嵌套规则    | 可包含任意流内容，但建议最多包含一个`<figcaption>`作为首个/末个子元素 |

---

三、典型使用场景
1. 多媒体内容组合
```html
<figure>
  <img src="chart.png" alt="季度销售趋势">
  <figcaption>图1：2024年Q1-Q4销售数据可视化</figcaption>
</figure>
```

2. 代码示例展示
```html
<figure>
  <pre><code>
function deepSeekAI() {
  console.log("深度求索智能助手");
}
  </code></pre>
  <figcaption>示例1：基础JavaScript函数声明</figcaption>
</figure>
```

3. 学术论文图示
```html
<figure class="diagram">
  <svg width="400" height="100">
    <!-- SVG矢量图形内容 -->
  </svg>
  <figcaption>图2：神经网络架构示意图</figcaption>
</figure>
```

---

四、进阶技术细节
1. 可访问性规范
   - 默认ARIA角色：`role="figure"`
   - 屏幕阅读器支持：自动关联`<figcaption>`内容

2. CSS布局建议
```css
figure {
  margin: 1.5em 0;
  padding: 1em;
  background: #f8f9fa;
  border-left: 4px solid #0366d6;
}

figcaption {
  font-size: 0.9em;
  color: #666;
  margin-top: 0.5em;
}
```

3. 浏览器兼容性
   - 全平台支持：Chrome 8+ / Firefox 4+ / Safari 5.1+ / Edge 12+
   - IE兼容方案：
```html
<!--[if lt IE 9]>
<style>figure { display: block; }</style>
<![endif]-->
```

---

五、最佳实践指南
1. 语义化优先原则
   - 优先使用`<figure>`替代普通`<div>`容器
   - 确保内容具有独立于上下文的完整含义

2. SEO优化建议
   - 在`<figcaption>`中包含关键词
   - 配合Schema.org标记：
```html
<figure itemscope itemtype="http://schema.org/ImageObject">
  <img itemprop="contentUrl" src="ai-model.jpg">
  <figcaption itemprop="description">深度求索大语言模型架构</figcaption>
</figure>
```

3. 响应式设计技巧
```html
<figure>
  <picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <img src="small.jpg" alt="自适应图片">
  </picture>
  <figcaption>响应式图片示例</figcaption>
</figure>
```

---

六、常见问题解答
Q1：何时应该使用`<figure>`？
A：当内容满足以下任一条件时：
- 需要独立引用说明
- 内容移除后不影响文档理解
- 需要组合多个相关元素（如图片+标题+数据来源）

Q2：`<figure>`与`<aside>`的区别？
A：`<aside>`用于补充性内容，而`<figure>`专注于自包含的内容单元

---

七、延伸学习资源
1. HTML规范文档：https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element
2. W3C可访问性指南：https://www.w3.org/WAI/tutorials/page-structure/figures/
3. CSS-Tricks使用案例：https://css-tricks.com/using-figure-figcaption/

建议结合具体项目需求选择最佳实现方式，并通过W3C验证工具检查语义正确性。