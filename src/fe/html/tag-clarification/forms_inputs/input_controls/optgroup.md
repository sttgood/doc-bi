---
title: optgroup
article: false
order:  3
---

## 一、MDN官方文档 

- 当前文档地址:  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/optgroup  
  （若链接失效，建议通过MDN站内搜索"optgroup"获取最新内容）

---

## 二、基础定义与核心作用 

`<optgroup>` 用于在 `<select>` 元素中创建选项分组，提升下拉菜单的可读性和组织结构。

基本特征 
- 必须作为`<select>`的直接子元素 
- 只能包含`<option>`元素 
- 分组标题不可被选择
- 支持禁用整个分组 

---

## 三、属性详解 

### 1.核心属性 

| 属性         | 值类型   | 默认值   | 描述                                                                 |
|--------------|----------|----------|----------------------------------------------------------------------|
| `label`      | 字符串   | 必填 | 分组标题文本（支持HTML实体）                                         |
| `disabled`   | 布尔     | false    | 禁用整个分组（包含的所有选项不可选）                                 |

### 2.示例代码 

```html 
<select name="vehicle">
  <optgroup label="乘用车">
    <option value="sedan">轿车</option>
    <option value="suv">SUV</option>
  </optgroup>
  <optgroup label="商用车" disabled>
    <option value="truck">卡车</option>
  </optgroup>
</select>
```

---

## 四、浏览器兼容性 

| 浏览器      | 支持版本 | 特殊说明                          |
|-------------|----------|-----------------------------------|
| Chrome      | 1.0+     | 全功能支持                        |
| Firefox     | 1.0+     | 支持分组禁用                      |
| Safari      | 1.0+     | 标题样式不可自定义                |
| Edge        | 12+      | 继承IE11行为                      |
| IE          | 6+       | IE6部分样式异常                   |

---

## 五、样式控制技巧 

### 1.基础样式覆盖 

```css 
/* 分组标题样式 */
optgroup {
  font-style: normal;
  color: #666;
  padding: 4px 0;
  background: #f5f5f5;
}
 
/* 禁用分组样式 */
optgroup:disabled {
  color: #999;
  background: #eee;
}
 
/* 选项项样式 */
optgroup option {
  padding-left: 20px;
  color: #333;
}
```

### 2.浏览器私有伪类 

```css 
/* Chrome/Safari */
optgroup::-webkit-optgroup-label {
  font-weight: bold;
}
 
/* Firefox */
optgroup::-moz-optgroup-label {
  text-decoration: underline;
}
```

---

## 六、可访问性指南 

### 1.ARIA增强 

```html 
<optgroup 
  label="支付方式"
  role="group"
  aria-labelledby="payment-heading"
>
  <span id="payment-heading" hidden>支付方式</span>
  <option value="alipay">支付宝</option>
</optgroup>
```

### 2.屏幕阅读器适配 

- 分组标题会自动被读作"分组标题 + 选项数"
- 禁用分组会触发"不可用"状态提示 

---

## 七、JavaScript操作 

### 1.动态创建分组 

```javascript 
const select = document.querySelector('#city-select');
const group = document.createElement('optgroup');
group.label = '华东地区';
group.appendChild(new Option('上海', 'sh'));
select.appendChild(group);
```

### 2.分组状态控制 

```javascript 
// 禁用所有包含"测试"的分组 
document.querySelectorAll('optgroup').forEach(group => {
  if (group.label.includes('测试')) {
    group.disabled = true;
  }
});
```

---

## 八、最佳实践 

### 1.内容组织规范 

- 推荐分组数：3-7组（超过时考虑多级分类）
- 标题长度：不超过20个字符 
- 嵌套限制：不支持多级分组（需模拟实现）

### 2.性能优化 

- 避免单个分组包含超过50个选项 
- 对动态分组进行缓存处理 
- 使用`DocumentFragment`批量插入 

---

## 九、常见问题排查 

1. 分组不显示？
- 检查点：是否直接放在`<select>`下 
- 检查点：`label`属性是否缺失 

2. 样式不生效？
- 解决方案：使用浏览器私有伪类 
- 备选方案：自定义下拉组件 

3. 禁用分组后选项仍可选？
- 验证步骤：检查是否嵌套在已启用的`<optgroup>`中 

---

## 十、扩展应用场景 

### 1.模拟多级菜单 

```html 
<select name="region">
  <optgroup label="中国">
    <option value="bj">北京</option>
    <optgroup label="上海">
      <option value="sh-pd">浦东新区</option>
    </optgroup>
  </optgroup>
</select>
 
<style>
  optgroup optgroup option {
    padding-left: 40px;
  }
</style>
```

### 2.结合图标库 

```html 
<optgroup label=" 社交平台">
  <option value="wechat"> 微信</option>
</optgroup>
 
<style>
  @font-face {
    font-family: 'Icons';
    src: url(icons.woff);
  }
  optgroup, option {
    font-family: 'Icons', sans-serif;
  }
</style>
```

