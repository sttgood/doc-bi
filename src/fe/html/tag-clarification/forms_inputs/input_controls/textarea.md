---
title: textarea
article: false
order:  5
---

## 一、MDN官方文档 

- 当前文档地址:  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea  
  （若链接失效，建议通过MDN站内搜索"textarea"获取最新内容）

---

## 二、基础定义与核心作用 

`<textarea>` 用于创建多行纯文本输入控件，适用于需要用户输入较长文本的场景（如评论、描述等）。

核心特征 
- 支持多行文本输入（默认高度可调）
- 与`<input type="text">`的区别：
  - 多行文本存储能力 
  - 可指定初始行数和列数 
  - 支持动态调整尺寸（通过CSS控制）

---

## 三、核心属性（15个关键属性）

| 属性             | 值类型          | 默认值      | 描述                                                                 |
|------------------|-----------------|-------------|----------------------------------------------------------------------|
| `name`           | 字符串          | 无          | 表单提交时的字段名称（必填属性）                                     |
| `rows`           | 整数            | 2           | 可见文本行数（影响初始高度）                                         |
| `cols`           | 整数            | 20          | 可见文本列数（基于平均字符宽度）                                     |
| `placeholder`    | 字符串          | 无          | 输入提示文本（内容为空时显示）                                       |
| `maxlength`      | 整数            | 无限制      | 允许输入的最大字符数                                                 |
| `minlength`      | 整数            | 0           | 允许输入的最小字符数                                                 |
| `required`       | 布尔            | false       | 强制输入有效内容                                                     |
| `disabled`       | 布尔            | false       | 禁用输入功能                                                         |
| `readonly`       | 布尔            | false       | 禁止用户编辑（内容仍可提交）                                         |
| `autocomplete`   | on/off          | 继承父级     | 控制浏览器自动填充行为                                               |
| `autofocus`      | 布尔            | false       | 页面加载时自动聚焦                                                   |
| `spellcheck`     | true/false      | 继承浏览器   | 启用拼写检查                                                         |
| `wrap`           | hard/soft/off   | soft        | 表单提交时换行处理方式                                               |
| `form`           | 表单ID          | 无          | 关联的表单元素                                                       |
| `aria-label`     | 字符串          | 无          | 无障碍标签                                                           |

---

## 四、基本语法与示例 

### 1.基础文本域 

```html 
<label for="comment">评论：</label>
<textarea 
  id="comment" 
  name="user_comment"
  rows="5" 
  cols="50"
  placeholder="请输入您的评论..."
  maxlength="500"
  required 
></textarea>
```

### 2.自动调整高度 

```css 
.auto-resize {
  resize: vertical; /* 允许垂直调整 */
  min-height: 100px;
  max-height: 400px;
  overflow-y: auto; /* 内容超出时显示滚动条 */
}
```

---

## 五、样式控制技巧 

### 1.基础样式重置 

```css 
textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  transition: border-color 0.3s ease;
 
  /* 禁用默认拖动调整 */
  resize: none; 
  /* 或限制调整方向 */
  resize: vertical;
}
 
textarea:focus {
  border-color: #2196F3;
  outline: none;
  box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
}
```

### 2.暗黑模式适配 

```css 
@media (prefers-color-scheme: dark) {
  textarea {
    background: #2d2d2d;
    color: #ffffff;
    border-color: #4d4d4d;
  }
}
```

---

## 六、JavaScript操作指南 

### 1.动态内容控制 

```javascript 
const textarea = document.getElementById('dynamic-textarea');
 
// 设置内容 
textarea.value = '初始内容';
 
// 实时统计字数 
textarea.addEventListener('input', (e) => {
  const count = e.target.value.length;
  document.getElementById('char-count').textContent = `${count}/500`;
});
 
// 自动调整高度 
function autoResize() {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}
textarea.addEventListener('input', autoResize);
```

### 2.粘贴内容处理 

```javascript 
textarea.addEventListener('paste', (e) => {
  const pastedText = e.clipboardData.getData('text/plain');
  // 示例：过滤HTML标签 
  const cleanText = pastedText.replace(/<[^>]*>/g, '');
  e.preventDefault();
  document.execCommand('insertText', false, cleanText);
});
```

---

## 七、可访问性指南 

### 1.ARIA增强 

```html 
<div class="textarea-group">
  <label id="desc-label">问题描述</label>
  <textarea 
    aria-labelledby="desc-label"
    aria-describedby="desc-help"
  ></textarea>
  <div id="desc-help" class="help-text">最多可输入500个字符</div>
</div>
```

### 2.键盘导航 

- Tab：聚焦文本域 
- Shift + Tab：离开文本域 
- Ctrl/Cmd + A：全选内容 
- Ctrl/Cmd + Enter：提交表单（需自定义处理）

---

## 八、兼容性矩阵 

| 浏览器/特性       | Chrome | Firefox | Safari | Edge  | IE    |
|------------------|--------|---------|--------|-------|-------|
| 基础支持          | 1.0+   | 1.0+    | 1.0+   | 12+   | 6+    |
| `maxlength`       | 4+     | 4+      | 5+     | 12+   | 10+   |
| `minlength`       | 40+    | 51+     | 10.1+  | 17+   | 不支持|
| `spellcheck`      | 9+     | 3+      | 5+     | 12+   | 10+   |
| CSS样式覆盖       | 全支持 | 全支持  | 部分   | 全支持| 不支持|

---

## 九、最佳实践 

### 1.开发规范 

- 始终使用`<label>`关联文本域 
- 重要操作（如提交）避免依赖`autofocus`
- 移动端优先考虑输入体验：
  ```html 
  <textarea inputmode="text" enterkeyhint="done"></textarea>
  ```

### 2.安全防护 

```javascript 
// XSS防护处理 
function sanitizeInput(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
 
textarea.value = sanitizeInput(userInput);
```

---

## 十、实际应用场景 

### 1.富文本编辑器基础 

```html 
<div class="editor">
  <div class="toolbar">
    <button type="button" data-cmd="bold">B</button>
    <button type="button" data-cmd="italic">I</button>
  </div>
  <textarea id="editor-core"></textarea>
</div>
 
<script>
  document.querySelectorAll('.toolbar button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.execCommand(btn.dataset.cmd, false, null);
      document.getElementById('editor-core').focus();
    });
  });
</script>
```

### 2.实时Markdown预览 

```html 
<div class="markdown-editor">
  <textarea id="md-input" placeholder="输入Markdown..."></textarea>
  <div id="md-preview"></div>
</div>
 
<script>
  mdInput.addEventListener('input', (e) => {
    mdPreview.innerHTML = marked.parse(e.target.value);
  });
</script>
```

---

## 十一、常见问题排查 

| 现象                 | 可能原因                     | 解决方案                     |
|----------------------|------------------------------|------------------------------|
| 内容无法提交         | 未设置`name`属性             | 添加`name`属性               |
| 高度调整失效         | CSS中设置了`resize: none`    | 修改或移除该样式             |
| 移动端输入延迟       | 高频输入事件处理             | 使用防抖技术优化             |
| 换行符处理异常       | `wrap`属性设置不当           | 设置为`hard`并指定`cols`     |
| 拼写检查不生效       | 浏览器默认设置覆盖           | 显式设置`spellcheck="true"`  |

