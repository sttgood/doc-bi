---
title: inert
article: false
order: 6
---
 
 
 
 
以下是关于HTML `inert` 全局属性的完整技术文档：
 
---
 
HTML `inert` 属性权威指南 
 
---
 
一、MDN官方文档 
- 英文文档：  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert  
  （更新至2025年2月最新规范）
 
---
 
二、核心定义与作用 
`inert` 是HTML布尔属性，用于将元素及其子树标记为"非活动状态"，主要功能包括：
- 🚫 禁用交互：阻止点击、聚焦、键盘导航等用户操作 
- 🧑🦯 可访问性控制：使屏幕阅读器忽略内容 
- 🛡️ 焦点隔离：实现模态对话框的焦点管理 
- ⚡ 性能优化：减少事件监听资源消耗 
 
---
 
三、基本语法与适用性 
 
1. 标准语法 
```html 
<div inert>
  此区域及其子元素将被完全禁用 
</div>
```
 
2. 适用场景 
| 场景类型           | 具体应用                          | 替代方案对比              |
|--------------------|-----------------------------------|---------------------------|
| 模态对话框         | 禁用背景内容                      | `aria-hidden` + CSS覆盖   |
| 侧边栏菜单         | 非活动状态下的导航面板            | `display: none`           |
| 临时禁用区块       | 表单提交期间的输入锁定            | `disabled`属性逐个设置    |
| 预加载占位         | 未加载完成的内容占位              | `visibility: hidden`      |
 
---
 
四、浏览器兼容性 
 
| 浏览器          | 支持版本      | 特性标志                | Polyfill方案          |
|-----------------|--------------|-------------------------|-----------------------|
| Chrome 102+     | ✅           | 默认启用                | wicg-inert            |
| Firefox 112+    | ✅           | 需启用`dom.inert.enabled`| inert-polyfill        |
| Safari 15.4+    | ✅           | 部分行为差异            | 无官方方案            |
| Edge 102+       | ✅           | Chromium内核支持        | 同Chrome              |
| IE 11           | ❌           | 不支持                  | 需完整模拟            |
 
---
 
五、核心特性深度解析 
 
1. 行为控制机制 
```html 
<!-- 禁用整个表单区域 -->
<form inert>
  <input type="text" value="无法编辑">
  <button>无法点击</button>
</form>
```
 
2. 可访问性影响 
| 辅助技术          | 行为变化                          | 示例                        |
|--------------------|-----------------------------------|-----------------------------|
| 屏幕阅读器         | 跳过`inert`元素及其子节点         | NVDA/JAWS不读取内容         |
| 键盘导航           | Tab键无法聚焦内部元素             | 焦点被限制在非inert区域      |
| 指针设备           | 点击事件被完全阻止                | 无法触发按钮/链接           |
 
---
 
六、代码示例大全 
 
1. 模态对话框实现 
```html 
<div class="modal-backdrop" inert></div>
<div class="modal" role="dialog" aria-modal="true">
  <!-- 对话框内容 -->
</div>
```
 
2. 动态状态切换 
```javascript 
// 启用禁用状态 
sidebar.toggleAttribute('inert', !isOpen);
 
// 检测支持性 
if ('inert' in HTMLElement.prototype) {
  // 原生支持 
} else {
  // 加载polyfill 
}
```
 
3. 嵌套控制 
```html 
<section inert>
  <div>此内容被禁用</div>
  <button inert>即使按钮单独设置也无效</button>
</section>
```
 
---
 
七、与相似技术对比 
 
| 技术手段         | 作用范围        | 可访问性处理      | 事件阻止能力      |
|------------------|-----------------|-------------------|-------------------|
| `inert`          | 子树级          | 自动处理          | 完全阻止          |
| `disabled`       | 表单元素级      | 需额外ARIA        | 部分阻止          |
| `aria-hidden`    | 元素级          | 隐藏但可聚焦      | 无阻止            |
| `pointer-events: none` | 视觉级    | 无处理            | 仅点击事件        |
 
---
 
八、可访问性最佳实践 
 
1. 焦点管理规范 
```javascript 
function openModal() {
  modal.removeAttribute('inert');
  modal.focus();
  // 保存原焦点位置 
  previousFocus = document.activeElement;
}
```
 
2. ARIA集成 
```html 
<div inert aria-hidden="true">
  <!-- 双重保障辅助技术忽略 -->
</div>
```
 
---
 
九、性能优化 
 
1. 渲染层优化 
| 操作方式          | 重绘影响        | 内存占用          |
|-------------------|-----------------|-------------------|
| `inert`           | 无重排          | 低                |
| `display: none`   | 触发重排        | 释放资源          |
| `visibility: hidden` | 无重排      | 保持资源          |
 
2. 事件监听优化 
```javascript 
// 原生inert会自动取消事件监听 
// 对比手动方案：
element.addEventListener('click', blockEvent, false);
function blockEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
```
 
---
 
十、现代应用场景 
 
1. 单页应用路由 
```javascript 
router.onChange((newPage) => {
  currentPage.setAttribute('inert', '');
  newPage.removeAttribute('inert');
});
```
 
2. 渐进增强方案 
```css 
/* 基础样式 */
[inert] {
  opacity: 0.5;
  pointer-events: none;
}
 
/* 原生支持时的优化 */
@supports selector(:has(:inert)) {
  [inert] {
    opacity: 0.8;
  }
}
```
 
---
 
十一、安全规范 
 
1. XSS防御 
```javascript 
// 安全设置方式 
element.setAttribute('inert', ''); 
// 而非 
element.inert = true; // 可能被原型污染 
```
 
2. 权限控制 
```html 
<template inert>
  <!-- 防止未初始化内容被交互 -->
</template>
```
 
---
 
十二、最佳实践 
 
推荐做法 
✅ 配合`aria-modal="true"`使用  
✅ 动态管理页面焦点链  
✅ 提供视觉禁用状态提示  
✅ 与CSS `:inert`伪类结合使用  
 
应避免 
❌ 在`<body>`上直接使用  
❌ 替代必要的`disabled`属性  
❌ 忽略Polyfill的性能影响  
❌ 长期保持大面积内容inert状态  
 
---
 
十三、调试技巧 
 
1. Chrome DevTools 
- Accessibility面板：查看inert状态  
- Elements面板：属性标记高亮  
- Console检测：  
  ```javascript 
  document.querySelector('element').checkVisibility({ checkInert: true });
  ```
 
2. 特性检测 
```javascript 
const supportsInert = 'inert' in document.createElement('div');
```
 
---
 
通过合理应用`inert`属性，您可以：  
✅ 简化焦点管理逻辑  
✅ 提升复杂UI的可访问性  
✅ 优化页面交互性能  
✅ 减少冗余的禁用状态代码
 

