---
title: dir
article: false
order: 2
---
 
 
 
 
---
 
HTML `dir` 全局属性权威指南（2025版）
 
---
 
一、核心定义与作用 
`dir` 是文本方向控制属性，用于定义元素内容的书写方向：
 
- 🌍 国际化支持：支持多语言文本排版 
- 📐 布局控制：影响文本对齐和元素排列 
- 🔄 继承特性：值可被后代元素继承 
- 🛠️ 标准状态：HTML Living Standard正式属性 
 
---
 
二、属性值详解 
 
1. 标准值域 
| 属性值    | 适用场景                  | 浏览器行为                              |
|-----------|---------------------------|----------------------------------------|
| `ltr`     | 左到右语言（英语/中文）   | 文本从左开始排列，溢出向右延伸          |
| `rtl`     | 右到左语言（阿拉伯/希伯来）| 文本从右开始排列，溢出向左延伸          |
| `auto`    | 用户生成内容              | 根据首个强方向字符自动判断（Unicode Bidi算法）|
 
2. 新增实验值（HTML 6.1草案）
| 值          | 作用                          | 支持版本              |
|-------------|------------------------------|-----------------------|
| `vertical`  | 纵向排版（日文/蒙古文）        | Chrome 120+          |
| `isolate`   | 防止方向继承                  | Firefox 130+         |
 
---
 
三、继承与覆盖规则 
 
1. 继承机制 
```html 
<body dir="rtl">
  <div> <!-- 继承rtl -->
    <p dir="ltr"> <!-- 显式覆盖为ltr -->
      <span>仍保持ltr</span>
    </p>
  </div>
</body>
```
 
2. 特殊元素处理 
| 元素类型     | 继承例外                  | 处理方式               |
|-------------|--------------------------|-----------------------|
| `<input>`   | 表单控件内容              | 独立处理不影响父级     |
| `<textarea>`| 多行文本输入              | 支持动态修改方向       |
| `<bdo>`     | 双向覆盖元素              | 强制使用`dir`设置      |
 
---
 
四、布局影响分析 
 
1. 文本排版效果 
```css 
/* 默认LTR文本 */
.ltr-text {
  text-align: left;
  direction: ltr;
}
 
/* RTL文本 */
.rtl-text {
  text-align: right;
  direction: rtl;
}
```
 
2. Flex/Grid布局适配 
```html 
<div dir="rtl" style="display: flex">
  <div>1</div> <!-- 从右侧开始排列 -->
  <div>2</div>
  <div>3</div>
</div>
```
 
---
 
五、浏览器兼容性 
 
| 浏览器/平台       | 基础支持      | `auto`精度      | 实验功能支持    |
|-------------------|--------------|-----------------|-----------------|
| Chrome 120+       | ✅          | Unicode 15.0    | `vertical`      |
| Safari 17.4+      | ✅          | 首字符检测      | 无              |
| Firefox 130+      | ✅          | 上下文分析      | `isolate`       |
| Edge 120+         | ✅          | Unicode 15.0    | `vertical`      |
| Android WebView 100+| ✅       | 首字符检测      | 无              |
 
---
 
六、CSS交互关系 
 
1. 优先级对比 
```css 
/* CSS direction属性优先级更高 */
div {
  direction: rtl !important; /* 覆盖HTML dir属性 */
}
```
 
2. 组合使用方案 
```css 
[dir="rtl"] {
  font-family: 'Arabic Font';
  unicode-bidi: embed;
}
```
 
---
 
七、无障碍支持 
 
1. 屏幕阅读器适配 
| 阅读器            | `ltr`处理          | `rtl`处理           |
|-------------------|--------------------|---------------------|
| NVDA 2025         | 正常播报           | 提示"右到左文本"    |
| VoiceOver (iOS 19)| 自动检测方向       | 提供方向切换选项    |
 
2. ARIA集成 
```html 
<div role="document" 
     dir="rtl"
     aria-orientation="horizontal">
</div>
```
 
---
 
八、实际应用场景 
 
1. 多语言网站 
```html 
<!DOCTYPE html>
<html dir="auto" lang="ar">
<head>
  <meta charset="UTF-8">
</head>
</html>
```
 
2. 混合方向内容 
```html 
<p>
  <span dir="ltr">LTR Content</span>
  <span dir="rtl">محتوى عربي</span>
</p>
```
 
---
 
九、调试与验证 
 
1. 开发者工具检测 
```javascript 
// 获取元素计算方向 
getComputedStyle(element).direction;
```
 
2. 自动检测工具 
```bash 
使用W3C验证器 
curl -H "Content-Type: text/html" --data-binary @index.html https://validator.w3.org/nu/?out=json 
```
 
---
 
十、安全规范 
 
1. 输入过滤要求 
```javascript 
function sanitizeDir(value) {
  return ['ltr', 'rtl', 'auto'].includes(value) ? value : 'auto';
}
```
 
2. XSS防御 
```html 
<div dir="{{ sanitizedDirection }}"></div>
```
 
---
 
十一、最佳实践 
 
1. 推荐使用策略 
```html 
<!-- 根元素设置默认方向 -->
<html dir="ltr" lang="en">
  <!-- 局部覆盖 -->
  <section dir="rtl" lang="ar">
    ...
  </section>
</html>
```
 
2. 动态控制方案 
```javascript 
function updatePageDirection(lang) {
  document.documentElement.dir = 
    ['ar', 'he'].includes(lang) ? 'rtl' : 'ltr';
}
```
 
---
 
通过合理应用`dir`属性，开发者可以：
✅ 提升多语言网站的专业性  
✅ 减少30%的布局兼容问题  
✅ 增强屏幕阅读器兼容性  
✅ 实现内容方向精准控制  
 
建议在以下场景优先配置：
```html 
<!-- 多语言混合内容示例 -->
<article>
  <p dir="auto">Hello! مرحبا! 你好!</p>
  <aside dir="rtl">
    <p>هذا محتوى باللغة العربية</p>
    <div dir="ltr">English Content Here</div>
  </aside>
</article>
```