---
title: autocorrect
article: false
order: 2
---

 
 
 
 
---
 
HTML `autocorrect` 属性权威指南 
 
---
 
一、属性定义与作用 
`autocorrect` 是移动端浏览器特有的输入控制属性，主要用于管理虚拟键盘的自动更正行为：
 
- 🛠️ 核心功能：控制输入框的单词自动修正功能 
- 📱 平台支持：主要针对iOS Safari浏览器 
- ⚙️ 输入优化：适用于需要精确输入的场景（代码、用户名等）
- 🔄 替代方案：部分安卓浏览器通过`autocomplete`实现类似功能 
 
---
 
二、标准规范状态 
| 标准组织       | 采纳状态       | 文档参考                 |
|----------------|----------------|--------------------------|
| WHATWG HTML    | 非标准属性     | 无官方文档收录           |
| W3C HTML5      | 未纳入规范     | 未出现在TR文档中         |
| MDN Web Docs   | 浏览器兼容性文档 | 标记为非标准            |
 
---
 
三、语法与使用规范 
 
1. 基础语法 
```html 
<input type="text" autocorrect="off">
<textarea autocorrect="on"></textarea>
```
 
2. 有效值说明 
| 属性值    | 作用描述                     | 浏览器支持               |
|-----------|------------------------------|--------------------------|
| `on`      | 启用自动修正（默认值）       | iOS Safari               |
| `off`     | 禁用自动修正                 | iOS Safari/部分安卓      |
| `default` | 继承浏览器默认设置           | 不推荐使用               |
 
---
 
四、浏览器兼容性 
 
| 浏览器/平台          | 支持版本       | 行为描述                     |
|-----------------------|----------------|------------------------------|
| iOS Safari            | 所有版本       | 完全支持属性控制             |
| Chrome for iOS        | 58+            | 部分支持，依赖系统键盘       |
| Firefox for iOS       | 所有版本       | 忽略属性，使用系统默认       |
| Android Chrome        | 89+            | 通过`autocomplete="off"`实现 |
| 桌面浏览器            | 无             | 完全忽略该属性               |
 
---
 
五、核心应用场景 
 
1. 推荐使用场景 
✅ 代码输入框  
✅ 用户名/密码字段  
✅ 特殊格式数据输入（序列号、车牌号）  
✅ 搜索建议独立实现的搜索框  
 
2. 应避免场景 
❌ 普通文本输入（邮件、消息）  
❌ 多语言混合输入框  
❌ 需要智能修正的富文本编辑器  
 
---
 
六、代码示例大全 
 
1. 基础禁用示例 
```html 
<!-- 禁用单个输入框 -->
<input type="text" autocorrect="off" spellcheck="false">
 
<!-- 禁用整个表单 -->
<form autocorrect="off">
  <input type="text">
  <textarea></textarea>
</form>
```
 
2. 框架集成示例 
```jsx 
// React组件封装 
function SecureInput(props) {
  return (
    <input 
      type="text"
      autocorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      {...props}
    />
  );
}
```
 
---
 
七、相关属性对比 
 
| 属性            | 作用范围         | 标准状态       | 兼容性          |
|-----------------|------------------|----------------|-----------------|
| `autocorrect`   | 输入修正         | 非标准         | iOS为主         |
| `spellcheck`    | 拼写检查         | HTML5标准      | 全平台          |
| `autocomplete`  | 表单自动填充     | HTML5标准      | 全平台          |
| `inputmode`     | 虚拟键盘类型     | HTML5标准      | 现代浏览器      |
 
---
 
八、移动端优化实践 
 
1. 综合输入控制 
```html 
<input type="text"
       autocorrect="off"
       autocapitalize="off"
       spellcheck="false"
       autocomplete="new-password">
```
 
2. 特殊键盘配置 
```html 
<!-- 电话号码输入优化 -->
<input type="tel"
       autocorrect="off"
       inputmode="tel">
 
<!-- 邮箱输入例外处理 -->
<input type="email"
       autocorrect="on"
       autocapitalize="none">
```
 
---
 
九、调试与检测 
 
1. 特性检测脚本 
```javascript 
const isAutocorrectSupported = () => {
  const input = document.createElement('input');
  input.setAttribute('autocorrect', 'off');
  return input.autocorrect === 'off'; // 返回false说明不支持 
};
```
 
2. iOS Safari调试 
1. 连接设备到Mac 
2. 启用Web检查器 (`设置 > Safari > 高级`)
3. 使用Safari开发菜单进行实时调试 
 
---
 
十、无障碍注意事项 
 
1. 辅助技术适配 
| 辅助功能          | 影响分析                     | 解决方案                  |
|-------------------|------------------------------|---------------------------|
| 屏幕阅读器        | 无直接影响                   | 保持正常aria属性          |
| 语音输入          | 可能影响修正建议             | 明确提示输入格式          |
| 开关控制          | 需额外焦点管理               | 保证可操作元素的tabindex  |
 
2. 多语言支持 
```html 
<!-- 日语输入优化 -->
<input type="text" 
       autocorrect="off"
       lang="ja"
       x-webkit-speech>
```
 
---
 
十一、未来标准展望 
 
1. W3C提案进展 
| 提案名称           | 状态          | 核心内容                  |
|--------------------|---------------|---------------------------|
| Input Modifiers    | 草案阶段      | 标准化输入控制属性        |
| Virtual Keyboard API | 工作草案     | 程序化控制键盘行为        |
 
2. 替代方案推荐 
```javascript 
// 使用Input Events API监控输入 
input.addEventListener('beforeinput', (e) => {
  if (e.inputType === 'insertText') {
    // 自定义修正逻辑 
  }
});
```
 
---
 
十二、安全规范 
 
1. 输入验证要求 
```javascript 
// 即使禁用自动修正仍需后端验证 
function validateInput(value) {
  return /^[a-z0-9_-]+$/i.test(value);
}
```
 
2. XSS防御 
```html 
<!-- 禁用自动修正但保持安全 -->
<input type="text"
       autocorrect="off"
       oninput="this.value=this.value.replace(/[<>]/g,'')">
```
 
---
 
通过合理应用`autocorrect`属性，开发者可以：
✅ 提升特殊输入场景下的用户体验  
✅ 减少移动端输入错误率  
✅ 保持不同平台的输入一致性  
✅ 优化表单提交数据准确性  
 
建议在需要精确控制的输入字段中结合使用以下属性组合：
```html 
<input type="text"
       autocorrect="off"
       autocapitalize="off"
       spellcheck="false"
       autocomplete="off">
```