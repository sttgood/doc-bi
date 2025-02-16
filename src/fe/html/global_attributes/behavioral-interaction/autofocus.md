---
title: autofocus
article: false
order: 2
---

以下是关于HTML `autofocus` 属性的完整技术文档：
 
---
 
HTML `autofocus` 属性权威指南 
 
---
 
一、MDN官方文档 
- 中文文档：  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/autofocus  
- 英文文档：  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus  
  （更新日期：2025年2月MDN最新版本）
 
---
 
二、核心定义与作用 
`autofocus` 是布尔属性，用于指定元素在页面加载时自动获得焦点，主要功能包括：
- 🎯 提升表单操作效率 
- 📱 移动端自动唤起输入法 
- 🖥️ 优化键盘导航体验 
- ⚡ 减少用户交互步骤 
 
---
 
三、适用元素与语法 
 
1. 支持元素 
```html 
<input type="text" autofocus>
<textarea autofocus></textarea>
<select autofocus></select>
<button autofocus>按钮</button>
```
 
2. 语法规范 
| 语法形式       | 示例                      | 说明                 |
|----------------|---------------------------|----------------------|
| 标准HTML       | `<input autofocus>`       | 现代浏览器推荐       |
| XHTML          | `<input autofocus="autofocus"/>` | 需要XML合规性时使用 |
 
---
 
四、浏览器兼容性 
 
| 浏览器          | 支持版本      | 移动端支持          | 备注                  |
|-----------------|--------------|---------------------|-----------------------|
| Chrome 5+       | ✅           | ✅                  | 全平台兼容            |
| Firefox 4+      | ✅           | ✅                  | 包括Android           |
| Safari 5+       | ✅           | ✅                  | iOS 5+ 起支持         |
| Edge 12+        | ✅           | ✅                  | 包括Chromium内核      |
| IE 10+          | ✅           | ⚠️ 部分移动设备    | 需注意虚拟键盘行为    |
 
---
 
五、核心特性详解 
 
1. 优先级规则 
- 📌 页面内多个`autofocus`时，最后一个生效 
- ⚠️ 动态插入元素的`autofocus`需手动触发`.focus()`
- 🛡️ `<dialog>`打开时优先对话框内元素 
 
2. 交互限制 
```javascript 
// 检测是否已自动聚焦 
console.log(document.activeElement === autofocusEl);
```
 
---
 
六、代码示例大全 
 
1. 基础应用 
```html 
<form>
  <input type="email" autofocus placeholder="优先填写邮箱">
  <input type="password">
</form>
```
 
2. 动态控制 
```javascript 
// 移除自动聚焦 
document.querySelector('[autofocus]').removeAttribute('autofocus');
 
// 手动设置新焦点 
document.getElementById('newField').focus();
```
 
3. 框架集成（Vue示例）
```vue 
<template>
  <input v-autofocus>
</template>
 
<script>
export default {
  directives: {
    autofocus: {
      mounted(el) {
        el.focus();
      }
    }
  }
}
</script>
```
 
---
 
七、可访问性指南 
 
1. 屏幕阅读器适配 
```html 
<input 
  autofocus 
  aria-describedby="focusHelp"
>
<div id="focusHelp" class="sr-only">
  此输入框已自动获得焦点 
</div>
 
<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
</style>
```
 
2. 最佳实践 
- ✅ 配合`aria-live`区域提示焦点变化 
- ❌ 避免在模态框外使用自动聚焦 
- ⚠️ 移动端需测试虚拟键盘弹出示 
 
---
 
八、性能优化 
 
1. 加载时序 
| 场景                 | 焦点就绪时间        |
|----------------------|---------------------|
| 同步脚本             | DOMContentLoaded时 |
| 延迟加载内容         | 需手动触发focus()   |
| 单页应用路由切换     | 组件挂载后生效      |
 
2. 内存管理 
```javascript 
// 清除焦点引用 
window.addEventListener('beforeunload', () => {
  document.activeElement.blur();
});
```
 
---
 
九、安全防护 
 
1. 防滥用策略 
```http 
Content-Security-Policy: trusted-types focus-manager;
```
 
2. 输入过滤 
```javascript 
const safeElements = ['input', 'textarea'];
if (safeElements.includes(autofocusEl.tagName.toLowerCase())) {
  autofocusEl.focus();
}
```
 
---
 
十、最佳实践 
 
推荐做法 
✅ 登录表单的用户名字段优先使用  
✅ 结合`scrollIntoView()`确保元素可见  
✅ 在SPA路由切换时重置焦点  
✅ 提供键盘跳过焦点的途径（ESC键）  
 
应避免 
❌ 在移动端首屏过度使用  
❌ 与`disabled`属性同时使用  
❌ 在无限滚动列表中使用  
 
---
 
十一、现代扩展应用 
 
1. 虚拟现实场景 
```html 
<xr-input autofocus holographic></xr-input>
```
 
2. 语音交互集成 
```javascript 
autofocusEl.addEventListener('focus', () => {
  speechSynthesis.speak(new SpeechSynthesisUtterance('请开始输入'));
});
```
 
---
 
十二、常见问题解决 
 
| 现象                 | 解决方案                |
|----------------------|-------------------------|
| 动态内容未聚焦       | 手动调用focus()方法     |
| 移动键盘未弹出       | 检查视口meta标签设置    |
| 打印时保留焦点样式   | 添加`@media print`样式  |
| Shadow DOM内失效     | 使用`delegatesFocus: true` |
 
---
 
十三、调试工具 
 
1. Chrome DevTools：
   - 使用Elements面板检查autofocus状态 
   - 通过Console执行`document.activeElement`验证 
 
2. Lighthouse检测：
   - 检查是否符合无障碍标准 
   - 验证是否造成布局偏移（CLS）
 
---
 
十四、规范演进 
 
| 标准版本       | 新增特性                  | 状态     |
|----------------|---------------------------|----------|
| HTML5          | 初版定义                  | 推荐标准 |
| HTML5.2        | 明确dialog中的行为        | 正式规范 |
| HTML Living Standard | 增强动态内容支持 | 持续更新 |
 
---
 
通过合理应用`autofocus`属性，您可以：  
✅ 显著提升表单填写效率  
✅ 优化残障用户导航体验  
✅ 减少不必要的JavaScript代码  
✅ 保持跨平台行为一致性