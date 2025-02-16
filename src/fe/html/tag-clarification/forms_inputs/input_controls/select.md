---
title: select
article: false
order:  1
---

## 一、MDN官方文档 

- 当前文档地址:  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/select  
  

---

## 二、基础定义与核心作用 

`<select>` 用于创建下拉选择控件，允许用户从预定义选项中选择一个或多个值。

核心特征 
- 支持单选/多选模式 
- 可与 `<option>`、`<optgroup>` 组合使用 
- 原生表单提交支持 
- 可通过CSS部分样式化 

---

## 三、核心属性（11个关键属性）

| 属性            | 值类型          | 默认值      | 描述                                                                 |
|-----------------|-----------------|-------------|----------------------------------------------------------------------|
| `name`          | 字符串          | 无          | 表单提交时的字段名称                                                 |
| `multiple`      | 布尔            | false       | 启用多选模式（需配合`size`属性）                                     |
| `size`          | 整数            | 0           | 显示可见选项数（>1时呈现滚动列表）                                   |
| `required`      | 布尔            | false       | 强制选择有效值                                                       |
| `disabled`      | 布尔            | false       | 禁用整个下拉控件                                                     |
| `form`          | 表单ID          | 无          | 关联的表单元素                                                       |
| `autocomplete`  | on/off          | 继承父级     | 控制浏览器自动填充行为                                               |
| `autofocus`     | 布尔            | false       | 页面加载时自动聚焦                                                   |
| `readonly`      | 布尔            | false       | 禁止用户修改值（需配合JavaScript实现）                               |
| `aria-label`    | 字符串          | 无          | 无障碍标签                                                           |
| `aria-labelledby` | ID列表         | 无          | 关联标签元素ID                                                       |

---

## 四、使用场景与代码示例 

### 1.基础单选下拉 

```html 
<label for="fruit">选择水果：</label>
<select id="fruit" name="fruit">
  <option value="">--请选择--</option>
  <option value="apple">苹果</option>
  <option value="banana" selected>香蕉</option>
  <option value="orange">橙子</option>
</select>
```

### 2.多选列表（显示4项）

```html 
<select 
  name="skills" 
  multiple 
  size="4"
  aria-label="选择技能（多选）"
>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>
```

### 3.分组选项 

```html 
<select name="car">
  <optgroup label="德系品牌">
    <option value="bmw">宝马</option>
    <option value="audi">奥迪</option>
  </optgroup>
  <optgroup label="日系品牌" disabled>
    <option value="toyota">丰田</option>
  </optgroup>
</select>
```

---

## 五、样式控制技巧 

### 1.基础样式重置 

```css 
select {
  min-width: 200px;
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  background-color: white;
  font-size: 14px;
  -webkit-appearance: none; /* 移除默认箭头 */
  -moz-appearance: none;
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg ...></svg>'); /* 自定义箭头 */
  background-position: right 10px center;
  background-repeat: no-repeat;
}
```

### 2.多选列表样式 

```css 
select[multiple] {
  height: auto;
  min-height: 120px;
  padding: 5px;
}
 
select[multiple] option {
  padding: 8px;
  margin: 2px;
  background: #f8f9fa;
  border-radius: 4px;
}
 
select[multiple] option:checked {
  background: #2196F3;
  color: white;
}
```

---

## 六、JavaScript操作指南 

### 1.动态操作选项 

```javascript 
const select = document.getElementById('dynamic-select');
 
// 添加选项 
const newOption = new Option('新选项', 'new-value');
select.add(newOption);
 
// 删除选项 
select.remove(select.options.length - 1);
 
// 获取选中值（多选）
const selectedValues = Array.from(select.selectedOptions)
  .map(opt => opt.value);
```

### 2.事件监听 

```javascript 
select.addEventListener('change', (e) => {
  console.log('当前选中值:', e.target.value);
});
 
// 多选模式监听 
select.addEventListener('input', (e) => {
  const values = Array.from(e.target.selectedOptions)
    .map(opt => opt.value);
  console.log('已选项目:', values);
});
```

---

## 七、可访问性指南 

### 1.ARIA增强 

```html 
<div class="select-wrapper">
  <select 
    id="a11y-select" 
    aria-describedby="help-text"
    aria-owns="dynamic-options"
  >
    <!-- 动态加载的选项 -->
  </select>
  <div id="help-text">使用上下箭头进行选择</div>
</div>
```

### 2.键盘导航 

- Enter：展开/收起下拉 
- 方向键：切换选项 
- Space：选择当前项（多选模式切换选中状态）
- Esc：收起下拉 

---

## 八、兼容性矩阵 

| 浏览器/特性       | Chrome | Firefox | Safari | Edge  | IE    |
|-------------------|--------|---------|--------|-------|-------|
| 基础支持          | 1.0+   | 1.0+    | 1.0+   | 12+   | 6+    |
| `multiple`属性    | 1.0+   | 1.0+    | 1.0+   | 12+   | 6+    |
| `size`>1样式      | 部分   | 完整    | 部分   | 部分  | 不支持|
| CSS自定义箭头     | 15+    | 30+     | 6+     | 12+   | 不支持|

---

## 九、最佳实践 

### 1.开发规范 

- 始终关联`<label>`元素 
- 多选模式建议设置`size`属性 
- 移动端优先考虑原生选择器性能 

### 2.性能优化 

- 超过100个选项时建议使用虚拟滚动：
```javascript 
function renderVisibleOptions(startIndex) {
  select.innerHTML = data.slice(startIndex, startIndex + 20)
    .map(item => `<option value="${item.id}">${item.name}</option>`)
    .join('');
}
```

---

## 十、扩展应用场景 

### 1.搜索选择器 

```html 
<div class="search-select">
  <input type="text" placeholder="搜索选项..." id="searchInput">
  <select id="searchable-select" multiple size="5">
    <!-- 动态加载的选项 -->
  </select>
</div>
 
<script>
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    Array.from(searchableSelect.options).forEach(opt => {
      opt.hidden = !opt.text.toLowerCase().includes(term);
    });
  });
</script>
```

### 2.级联选择 

```javascript 
// 省份-城市级联 
const provinceSelect = document.getElementById('province');
const citySelect = document.getElementById('city');
 
provinceSelect.addEventListener('change', async (e) => {
  const cities = await fetchCities(e.target.value);
  citySelect.innerHTML = cities 
    .map(city => `<option value="${city.code}">${city.name}</option>`);
});
```

---

## 十一、常见问题排查 

| 现象                 | 可能原因                     | 解决方案                     |
|----------------------|------------------------------|------------------------------|
| 选项无法选择         | `disabled`属性设置错误       | 检查选项状态                 |
| 表单提交空值         | 未设置`name`属性             | 添加`name`属性               |
| 多选模式失效         | 未设置`multiple`属性         | 添加`multiple`属性           |
| 移动端样式异常       | 未重置默认外观               | 添加`-webkit-appearance:none`|

