---
title: progress
article: false
order:  
---

## 一、MDN官方文档 

- 当前文档地址:  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/progress  
  （若链接失效，建议通过MDN站内搜索"progress"获取最新内容）

---

## 二、基础定义与核心作用 

`<progress>` 用于表示任务完成进度，适用于文件上传、安装过程等需要展示进度的场景。

核心特征 
- 显示确定性进度（已知总量）或不确定性进度（总量未知）
- 与`<meter>`的区别：
  - `progress`：动态任务进度 
  - `meter`：静态数值测量 
- 支持CSS样式定制 

---

## 三、核心属性 

| 属性         | 值类型   | 默认值   | 描述                                                                 |
|--------------|----------|----------|----------------------------------------------------------------------|
| `value`      | 浮点数   | 无       | 当前进度值（需满足 0 ≤ value ≤ max）                                 |
| `max`        | 浮点数   | 1        | 进度总量（必须>0）                                                  |
| `form`       | 表单ID   | 无       | 关联的表单元素                                                      |

---

## 四、基本语法 

### 1.确定性进度 

```html 
<progress 
  value="70" 
  max="100"
  aria-label="文件上传进度"
>
  70%
</progress>
```

### 2.不确定性进度 

```html 
<progress 
  class="indeterminate" 
  aria-busy="true"
>
  处理中...
</progress>
```

---

## 五、样式控制指南 

### 基础样式覆盖 

```css 
progress {
  width: 300px;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
}
 
/* WebKit样式 */
progress::-webkit-progress-bar {
  background: #f0f0f0;
}
 
progress::-webkit-progress-value {
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  transition: width 0.3s ease;
}
 
/* Firefox样式 */
progress::-moz-progress-bar {
  background: #4CAF50;
}
 
/* 不确定状态 */
progress:indeterminate {
  animation: progress-pulse 1.5s infinite;
}
 
@keyframes progress-pulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
```

---

## 六、JavaScript操作 

### 1.动态更新进度 

```javascript 
const progressBar = document.getElementById('upload-progress');
 
// 模拟上传进度 
let current = 0;
const interval = setInterval(() => {
  current += 5;
  progressBar.value = current;
  
  if (current >= 100) {
    clearInterval(interval);
    progressBar.setAttribute('aria-label', '上传完成');
  }
}, 500);
```

### 2.状态切换 

```javascript 
function toggleProgressType() {
  const progress = document.getElementById('dynamic-progress');
  if (progress.hasAttribute('value')) {
    progress.removeAttribute('value'); // 切换为不确定状态 
  } else {
    progress.value = 30; // 恢复确定状态 
  }
}
```

---

## 七、兼容性矩阵 

| 浏览器/特性       | Chrome | Firefox | Safari | Edge  | IE    |
|-------------------|--------|---------|--------|-------|-------|
| 基础支持          | 8+     | 16+     | 6+     | 12+   | 10+   |
| 不确定状态        | 8+     | 6+      | 6+     | 12+   | 不支持|
| CSS伪类支持       | 部分   | 完整    | 部分   | 部分  | 无    |

---

## 八、可访问性指南 

### 1.ARIA增强 

```html 
<progress 
  id="file-progress" 
  role="progressbar" 
  aria-valuetext="正在上传，已完成50%"
  aria-labelledby="progress-label"
>
  <span id="progress-label" hidden>文件上传进度</span>
</progress>
```

### 2.屏幕阅读器适配 

- 使用`aria-valuenow`、`aria-valuemax`辅助说明 
- 不确定状态需设置`aria-valuetext="处理中"`

---

## 九、最佳实践 

### 1.使用规范 

- 确定性进度必须设置`value`和`max`
- 不确定性进度应移除`value`属性 
- 提供后备文本内容（标签内的文本）

### 2.性能优化 

- 避免高频更新（>60次/秒）
- 使用`requestAnimationFrame`优化动画：
```javascript 
function smoothUpdate(value) {
  requestAnimationFrame(() => {
    progressBar.value = value;
  });
}
```

---

## 十、实际应用场景 

### 1.文件上传 

```html 
<progress id="uploadProgress" max="100"></progress>
<span id="uploadStatus">0% 完成</span>
 
<script>
  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    const chunkSize = 1024 * 1024; // 1MB 
    let uploaded = 0;
 
    while (uploaded < file.size) {
      const chunk = file.slice(uploaded, uploaded + chunkSize);
      await uploadChunk(chunk);
      uploaded += chunk.size;
      const progress = (uploaded / file.size * 100).toFixed(1);
      uploadProgress.value = progress;
      uploadStatus.textContent = `${progress}% 完成`;
    }
  });
</script>
```

### 2.多步骤表单 

```html 
<div class="form-steps">
  <progress value="1" max="5"></progress>
  <span>步骤 1/5</span>
</div>
 
<script>
  form.addEventListener('submit', (e) => {
    const currentStep = parseInt(progressBar.value);
    progressBar.value = currentStep + 1;
  });
</script>
```

---

## 十一、扩展应用 

### 1.环形进度条 

```css 
.progress-circle {
  width: 100px;
  height: 100px;
  transform: rotate(-90deg);
}
 
.progress-circle circle {
  fill: none;
  stroke-width: 8;
  stroke-linecap: round;
}
 
.progress-circle::-webkit-progress-value {
  stroke: #4CAF50;
  transition: stroke-dashoffset 0.3s;
}
```

### 2.服务端推送进度 

```javascript 
// 使用WebSocket实时更新 
const socket = new WebSocket('wss://api.example.com/progress');
 
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  progressBar.value = data.percent;
};
```

---

## 十二、常见问题排查 

| 现象                 | 可能原因                     | 解决方案                     |
|----------------------|------------------------------|------------------------------|
| 进度条不显示         | 未设置`max`属性              | 添加`max`属性并确保>0        |
| 动画效果失效         | 浏览器不支持伪类选择器       | 改用JavaScript动画库         |
| 数值显示异常         | `value`超过`max`             | 添加数值范围校验逻辑         |
| 移动端样式错位       | 未重置默认样式               | 添加`appearance: none`       |

