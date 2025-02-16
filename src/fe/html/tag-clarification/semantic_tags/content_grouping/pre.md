---
title: pre
article: false
order:  
---
您好，我是由深度求索（DeepSeek）开发的智能助手DeepSeek-R1。以下是关于HTML `<pre>`标签的完整技术解析：
 
---
 
一、MDN官方文档 
- 当前文档地址:  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/pre  
  （若链接失效，建议通过MDN站内搜索"pre"获取最新内容）
 
---
 
二、基础定义与核心作用 
`<pre>`（Preformatted Text）用于显示预格式化文本，保留原始的空格、换行和Tab字符。
 
核心特征 
- 默认使用等宽字体（如Courier New）
- 保留所有空白字符（空格/换行符）
- 默认添加横向滚动条（内容超出容器宽度时）
- 与`<code>`的区别：
  - `<code>`用于行内代码片段 
  - `<pre>`用于多行预格式化文本块 
 
---
 
三、核心属性与语法结构 
 
1. 关键属性 
| 属性类型          | 典型用法示例                 | 说明                           |
|-------------------|------------------------------|--------------------------------|
| 全局属性      | `class`, `id`, `style`       | 样式控制与脚本操作标识         |
| 废弃属性      | `width`                      | 已弃用（应使用CSS替代）        |
| ARIA属性      | `role="code"`                | 增强代码块可访问性             |
 
2. 标准语法结构 
```html 
<pre>
  function hello() {
    console.log("Hello, DeepSeek!");
  }
</pre>
```
 
---
 
四、代码示例与最佳实践 
 
1. 基础代码块 
```html 
<pre>
  ASCII艺术示例：
    _____ 
   / Hello \
  < DeepSeek >
   \______/
</pre>
```
 
2. 带语法高亮的代码 
```html 
<pre class="language-javascript">
  <code>
    // 斐波那契数列生成 
    function* fibonacci() {
      let [a, b] = [0, 1];
      while (true) {
        yield a;
        [a, b] = [b, a + b];
      }
    }
  </code>
</pre>
```
 
---
 
五、样式控制深度指南 
 
1. 基础样式重置 
```css 
pre {
  font-family: 'Consolas', monospace;
  background: #f8f9fa;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  overflow-x: auto;
  tab-size: 4;
}
 
/* 响应式处理 */
@media (max-width: 768px) {
  pre {
    font-size: 14px;
    margin-left: -1em;
    margin-right: -1em;
  }
}
```
 
2. 高级代码块美化 
```css 
pre.highlight {
  position: relative;
  counter-reset: line;
}
 
pre.highlight code::before {
  content: counter(line);
  counter-increment: line;
  margin-right: 1.5em;
  color: #666;
  min-width: 2em;
  display: inline-block;
  text-align: right;
}
```
 
---
 
六、JavaScript操作实践 
 
1. 动态生成预格式内容 
```javascript 
function formatAsPre(text) {
  const pre = document.createElement('pre');
  pre.textContent = text;
  return pre;
}
 
document.body.appendChild(
  formatAsPre('动态生成的预格式化内容')
);
```
 
2. 自动添加行号 
```javascript 
document.querySelectorAll('pre.line-numbers').forEach(pre => {
  const lines = pre.textContent.split('\n');
  pre.innerHTML = lines.map((line, i) => 
    `<span class="ln">${i + 1}</span>${line}`
  ).join('\n');
});
```
 
---
 
七、可访问性指南 
 
1. ARIA增强方案 
```html 
<pre role="code" aria-label="JavaScript示例代码">
  // 可访问性增强示例 
</pre>
```
 
2. 屏幕阅读器优化 
- 使用`aria-labelledby`关联标题 
- 复杂结构添加`tabindex="0"`支持键盘导航 
- 避免纯装饰性空白字符 
 
---
 
八、兼容性说明 
 
| 浏览器/特性       | Chrome | Firefox | Safari | Edge  | IE    |
|-------------------|--------|---------|--------|-------|-------|
| 基础支持          | 1.0+   | 1.0+    | 1.0+   | 12+   | 5.5+  |
| `tab-size`属性    | 21+    | 4+      | 6.1+   | 12+   | 不支持|
| CSS滚动条样式     | 全支持 | 64+     | 14+    | 全支持| 不支持|
 
---
 
九、最佳实践 
 
1. 开发规范 
- 内容长度控制：超长内容应添加横向滚动 
- 嵌套规则：
  ```html 
  <!-- 正确用法 -->
  <pre><code>...</code></pre>
  
  <!-- 避免 -->
  <pre><div>...</div></pre>
  ```
 
2. SEO优化建议 
- 重要代码内容优先加载 
- 使用Schema标记：
  ```html 
  <pre itemscope itemtype="https://schema.org/Code">
    <code itemprop="code">...</code>
  </pre>
  ```
 
---
 
十、实际应用场景 
 
1. 技术文档示例 
```html 
<article>
  <h3>API响应示例</h3>
  <pre class="response-json">
    {
      "status": 200,
      "data": {
        "id": "DSK-2025",
        "name": "DeepSeek-R1"
      }
    }
  </pre>
</article>
```
 
2. 终端模拟输出 
```html 
<pre class="terminal">
  <span class="prompt">$</span> npm install deepseek-sdk 
  <span class="output">Successfully installed deepseek-sdk@2.5.0</span>
</pre>
```
 
---
 
十一、常见问题排查 
 
| 现象                 | 可能原因                     | 解决方案                     |
|----------------------|------------------------------|------------------------------|
| 空白符未保留         | 嵌套在非`<pre>`元素中         | 检查DOM结构层级              |
| 横向滚动失效         | 容器宽度限制                 | 添加`min-width: 100%`        |
| 等宽字体显示异常     | 系统字体缺失                 | 指定字体栈`monospace`        |
| 打印时样式丢失       | 背景色未适配打印             | 添加`@media print`样式规则   |
| 移动端触摸滚动困难   | 未启用`-webkit-overflow-scrolling` | 添加`touch-action: manipulation` |
 
---
 
如需针对特定使用场景（如代码高亮、终端模拟等）的深度定制方案，请提供具体需求细节。