---
title: is
article: false
order: 1
---

---
 
HTML `is` 全局属性权威指南 
 
---
 
一、MDN官方文档 
- 英文文档：  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/is  
  （更新至HTML Living Standard最新规范）
 
---
 
二、核心定义与作用 
`is` 是自定义内置元素的核心属性，用于扩展原生HTML元素，主要功能包括：
- 🧬 元素继承：基于现有元素创建增强型组件 
- 🛡️ 语义保留：保持原生元素的默认行为和可访问性 
- 🔄 渐进增强：优雅降级机制保障基础功能 
- 🔧 功能扩展：添加自定义方法和属性 
 
---
 
三、基本语法与规范 
 
1. 标准语法 
```html 
<!-- 扩展内置元素 -->
<button is="custom-button">Enhanced Button</button>
 
<!-- 自定义元素定义 -->
<script>
  customElements.define('custom-button', 
    class extends HTMLButtonElement { /*...*/ }, 
    { extends: 'button' }
  );
</script>
```
 
2. 属性规范 
| 属性位置        | 值格式要求            | 强制声明            |
|-----------------|-----------------------|---------------------|
| 原生元素标签    | 已注册的定制元素名称  | 必须提前define      |
| 自定义元素标签  | 无效                  | -                   |
 
---
 
四、浏览器兼容性 
 
| 浏览器          | 支持版本      | 特性标志                | Polyfill方案          |
|-----------------|--------------|-------------------------|-----------------------|
| Chrome 67+      | ✅           | 默认启用                | @webcomponents/webcomponentsjs |
| Firefox 63+     | ✅           | 需启用`dom.webcomponents.customelements.enabled` | 同左 |
| Safari 14+      | ✅           | 部分CSS伪类限制         | 无官方方案            |
| Edge 79+        | ✅           | Chromium内核支持        | 同Chrome              |
| IE 11           | ❌           | 不支持                  | 不可实现              |
 
---
 
五、核心机制解析 
 
1. 元素继承体系 
```javascript 
class CustomButton extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }
 
  handleClick() {
    console.log('Custom button clicked!');
  }
}
 
customElements.define('custom-button', CustomButton, { extends: 'button' });
```
 
2. 生命周期对比 
| 生命周期        | 自主元素              | 自定义内置元素          |
|-----------------|-----------------------|-------------------------|
| constructor     | 必须调用super()       | 自动继承原生构造函数    |
| connectedCallback | 插入DOM时触发       | 同左                    |
| attributeChangedCallback | 属性变更时 | 同左                    |
 
---
 
六、代码示例大全 
 
1. 增强型输入框 
```html 
<input is="auto-complete" list="countries">
 
<script>
  customElements.define('auto-complete',
    class extends HTMLInputElement {
      connectedCallback() {
        this.setupAutocomplete();
      }
      
      setupAutocomplete() {
        // 实现自动完成逻辑 
      }
    }, 
    { extends: 'input' }
  );
</script>
```
 
2. 响应式图片组件 
```html 
<img is="lazy-image" src="placeholder.jpg" data-src="real-image.jpg">
 
<script>
  customElements.define('lazy-image',
    class extends HTMLImageElement {
      constructor() {
        super();
        this.observer = new IntersectionObserver(this.loadImage);
      }
 
      loadImage(entries) {
        // 懒加载实现 
      }
    }, 
    { extends: 'img' }
  );
</script>
```
 
---
 
七、与自主元素对比 
 
| 特性                | 自主元素 (`<my-element>`) | 自定义内置元素 (`is="..."`) |
|---------------------|---------------------------|----------------------------|
| 元素类型            | HTMLElement               | 继承具体元素类             |
| 默认语义            | 无                        | 保留原生语义               |
| 表单关联            | 需要手动实现              | 自动继承表单行为           |
| CSS伪元素支持       | 全部                      | 部分限制                   |
| 无障碍树            | 需手动定义                | 自动继承                   |
 
---
 
八、最佳实践指南 
 
1. 适用场景 
✅ 扩展表单控件功能  
✅ 增强媒体元素行为  
✅ 创建可访问性组件  
✅ 渐进增强现有元素  
 
2. 开发规范 
```javascript 
// 正确继承方式 
class CustomSelect extends HTMLSelectElement { /*...*/ }
 
// 禁止的操作 
class InvalidElement extends HTMLElement { /*...*/ }
customElements.define('invalid-element', InvalidElement, { extends: 'div' }); // 报错 
```
 
---
 
九、现代框架集成 
 
1. React中使用 
```jsx 
function App() {
  return (
    <button is="custom-button" ref={e => {
      if (e) {
        // 手动处理属性 
        e.setAttribute('is', 'custom-button');
      }
    }}>
      Custom Button 
    </button>
  );
}
```
 
2. Vue集成 
```vue 
<template>
  <button is="custom-button" @custom-event="handleEvent">
    {{ buttonText }}
  </button>
</template>
 
<script>
export default {
  mounted() {
    // 确保Web Components加载完成 
    customElements.whenDefined('custom-button').then(() => {
      // 组件逻辑 
    });
  }
}
</script>
```
 
---
 
十、安全规范 
 
1. 命名限制 
```javascript 
// 合法名称 
customElements.define('custom-button', ...)  // 包含短横线 
 
// 非法名称 
customElements.define('customButton', ...)   // 报错：未包含短横线 
```
 
2. 原型污染防护 
```javascript 
class SafeElement extends HTMLButtonElement {
  constructor() {
    super();
    // 禁止扩展原生原型 
    // ❌ HTMLButtonElement.prototype.customMethod = ...
  }
}
```
 
---
 
十一、调试技巧 
 
1. Chrome DevTools 
- Elements面板：显示`is`属性标记 
- Console检测：
  ```javascript 
  document.querySelector('button').constructor.name // 显示"CustomButton"
  ```
- Custom Elements面板：查看注册信息 
 
2. 特性检测 
```javascript 
const supportsCustomElements = 'customElements' in window;
const supportsBuiltIn = document.createElement('div').attachShadow !== undefined;
```
 
---
 
十二、规范演进 
 
| 标准版本           | 重要更新                      | 状态        |
|--------------------|-------------------------------|-------------|
| Custom Elements v1 | 引入`is`属性                  | 推荐标准    |
| HTML Modules       | 组件化封装方案                | 草案阶段    |
| Scoped Custom Element Registries | 作用域注册表      | 提案阶段    |
 
---
 
通过合理应用`is`属性，您可以：  
✅ 保持原生语义与可访问性  
✅ 实现无缝渐进增强  
✅ 复用浏览器原生优化  
✅ 构建可持续维护的组件体系