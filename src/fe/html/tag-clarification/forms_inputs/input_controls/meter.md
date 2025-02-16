---
title: meter
article: false
order:  
---

##  一、MDN官方文档 

- 当前文档地址:  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meter  
  （若链接失效，建议通过MDN站内搜索"meter"获取最新内容）

---

## 二、基础定义 

`<meter>` 用于表示已知范围内的标量测量值或分数值，适用于显示磁盘使用量、投票结果等场景。

核心特性 
- 表示静态测量值（与表示任务进度的`<progress>`区分）
- 支持多区间可视化（通过`low`/`high`/`optimum`定义）
- 支持CSS样式覆盖 

---

## 三、核心属性 

### 1.基础属性 

| 属性         | 值类型   | 默认值       | 描述                          |
|--------------|----------|-------------|-------------------------------|
| `value`      | 数字     | 必填     | 当前测量值（需在min-max之间） |
| `min`        | 数字     | 0           | 量程最小值                    |
| `max`        | 数字     | 1           | 量程最大值                    |
| `low`        | 数字     | 同`min`      | 定义"低"区间阈值              |
| `high`       | 数字     | 同`max`      | 定义"高"区间阈值              |
| `optimum`    | 数字     | 无           | 定义最佳值位置                |

### 2.属性关系验证 

```javascript 
// 有效值需满足 
min ≤ value ≤ max 
min ≤ low ≤ high ≤ max 
```

---

## 四、基本语法 

### 1.简单示例 

```html 
<meter 
  value="65" 
  min="0" 
  max="100" 
  low="30" 
  high="80"
>
  65/100 
</meter>
```

### 2.状态区间可视化 

| 值区间              | 浏览器默认样式          |
|---------------------|-------------------------|
| value < low         | 红色（危险区）          |
| low ≤ value ≤ high  | 黄色（警告区）          |
| value > high        | 绿色（安全区）          |

---

## 五、兼容性说明 

| 浏览器          | 支持版本       | 备注                            |
|-----------------|----------------|---------------------------------|
| Chrome          | 8+             | 全功能支持                      |
| Firefox         | 16+            | 需明确设置`value`属性           |
| Safari          | 6+             | 部分样式不支持                  |
| Edge            | 13+            | 基于旧版EdgeHTML                |
| IE              | 不支持         | 需使用Polyfill替代方案          |

---

## 六、可访问性指南 

### 1.ARIA增强 

```html 
<meter 
  role="meter"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuetext="75%"
>
  75% 容量 
</meter>
```

### 2.屏幕阅读器适配 

- 补充隐藏文本描述：
```html 
<meter value="3" max="5">
  <span class="visually-hidden">评分：3星（满分5星）</span>
</meter>
```

---

## 七、样式定制 

### 1.基础样式覆盖 

```css 
meter {
  width: 200px;
  height: 25px;
}
 
/* WebKit样式 */
meter::-webkit-meter-bar {
  background: #eee;
  border-radius: 5px;
}
 
meter::-webkit-meter-optimum-value {
  background: #4CAF50;
}
 
meter::-webkit-meter-suboptimum-value {
  background: #FFC107;
}
 
meter::-webkit-meter-even-less-good-value {
  background: #F44336;
}
```

### 2.自定义图形方案 

```css 
.custom-meter {
  appearance: none;
  background: #f0f0f0;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
}
 
.custom-meter::-webkit-progress-value {
  background: linear-gradient(45deg, #2196F3, #64B5F6);
}
```

---

## 八、实际应用场景 

### 1.评分系统 

```html 
<meter 
  value="4.2" 
  min="0" 
  max="5" 
  low="2" 
  high="4"
>
  4.2/5 分 
</meter>
```

### 2.存储空间显示 

```html 
<meter 
  value="85"
  min="0"
  max="100"
  high="90"
  title="磁盘使用量"
>
  85GB 已使用（共100GB）
</meter>
```

### 3.投票结果 

```html 
<meter 
  value="1500"
  min="0"
  max="2000"
  low="500"
  high="1500"
>
  1500票（目标2000票）
</meter>
```

---

## 九、最佳实践 

### 1.属性使用规范 

- 始终指定`min`和`max`以明确量程 
- 当`optimum`不在`low`-`high`区间时，浏览器会显示警告色 
- 提供后备文本内容（标签内的文本）

### 2.动态更新示例 

```javascript 
const cpuMeter = document.getElementById('cpu-meter');
 
function updateUsage() {
  fetch('/api/cpu-usage')
    .then(res => res.json())
    .then(data => {
      cpuMeter.value = data.usage;
      cpuMeter.title = `当前CPU使用率: ${data.usage}%`;
    });
}
 
setInterval(updateUsage, 1000);
```

---

## 十、注意事项 

### 1.常见误区 

- 不要用于任务进度 → 应使用`<progress>`
- 避免嵌套交互元素 → 保持语义清晰 
- 不可用于表单提交 → 仅作可视化展示 

### 2.浏览器差异处理 

```html 
<!-- 兼容性处理方案 -->
<meter id="storage" value="75" max="100"></meter>
<script>
  if (!document.createElement('meter').max) {
    const meter = document.getElementById('storage');
    const fallback = document.createElement('div');
    fallback.className = 'meter-fallback';
    fallback.textContent = meter.textContent;
    meter.parentNode.replaceChild(fallback, meter);
  }
</script>
```

