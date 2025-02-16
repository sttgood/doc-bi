---
title: canvas
article: false
order:  
---

 以下是关于HTML `<canvas>` 标签的完整技术文档：
 
---
 
HTML `<canvas>` 标签权威指南 
 
---
 
一、MDN官方文档 
- 中文文档：  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas  
- 英文文档：  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas  
  （更新日期：2025年2月MDN最新版本）
 
---
 
二、核心定义与作用 
`<canvas>` 是一个位图绘制容器，通过JavaScript API实现动态图形渲染，主要应用场景包括：
- 🎨 数据可视化（图表/仪表盘）
- 🎮 2D/WebGL游戏开发 
- 📸 图像处理（滤镜/合成）
- 📊 动态UI元素 
- 🖌️ 手写板/绘图工具 
 
---
 
三、属性与方法全解析 
 
1. 核心属性 
| 属性         | 值类型/示例            | 说明                                                                 |
|--------------|-----------------------|----------------------------------------------------------------------|
| `width`      | 数值（如`800`）       | 画布像素宽度（默认300px）                                           |
| `height`     | 数值（如`600`）       | 画布像素高度（默认150px）                                           |
| `aria-label` | 描述文本              | 提升可访问性的替代文本                                              |
 
2. 关键方法 
```javascript 
const ctx = canvas.getContext('2d');  // 获取2D上下文 
```
 
绘图方法 
```javascript 
// 基础图形 
ctx.fillRect(x, y, width, height);    // 填充矩形 
ctx.strokeText(text, x, y);           // 描边文字 
 
// 路径绘制 
ctx.beginPath();
ctx.arc(x, y, radius, startAngle, endAngle); // 圆弧 
ctx.lineTo(x, y);                     // 路径连线 
ctx.closePath();
```
 
图像处理 
```javascript 
ctx.drawImage(image, dx, dy);         // 绘制图像 
const imageData = ctx.getImageData(x, y, w, h); // 获取像素数据 
ctx.putImageData(imageData, x, y);    // 写入像素数据 
```
 
变换与合成 
```javascript 
ctx.rotate(angle);                    // 旋转画布 
ctx.globalCompositeOperation = 'multiply'; // 混合模式 
ctx.filter = 'blur(5px)';             // 滤镜效果 
```
 
---
 
四、浏览器兼容性 
 
| 浏览器          | 2D支持 | WebGL支持 | OffscreenCanvas | 备注                  |
|-----------------|--------|-----------|-----------------|-----------------------|
| Chrome 90+      | ✅     | ✅        | ✅              | 完整性能优化          |
| Firefox 85+     | ✅     | ✅        | ✅              | 支持WebGL 2.0         |
| Safari 15+      | ✅     | ✅        | ⚠️部分         | iOS性能限制           |
| Edge 90+        | ✅     | ✅        | ✅              | 基于Chromium          |
| IE11            | ⚠️受限| ❌        | ❌             | 不支持WebGL           |
 
---
 
五、代码示例大全 
 
1. 基础绘制 
```html 
<canvas id="myCanvas" width="400" height="300"></canvas>
 
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
 
  // 绘制渐变矩形 
  const gradient = ctx.createLinearGradient(0, 0, 400, 0);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(1, 'blue');
  ctx.fillStyle = gradient;
  ctx.fillRect(50, 50, 300, 200);
</script>
```
 
2. 动画实现 
```javascript 
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 更新绘制逻辑 
  requestAnimationFrame(animate);
}
animate();
```
 
3. 图像处理 
```javascript 
const img = new Image();
img.src = 'photo.jpg';
img.onload = () => {
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // 应用灰度滤镜 
  for (let i = 0; i < imageData.data.length; i += 4) {
    const avg = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;
    imageData.data[i] = avg;
    imageData.data[i+1] = avg;
    imageData.data[i+2] = avg;
  }
  ctx.putImageData(imageData, 0, 0);
};
```
 
---
 
六、性能优化 
 
1. 高频优化技巧 
- 使用`willReadFrequently`属性声明：
  ```javascript 
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  ```
- 启用硬件加速：
  ```css 
  canvas {
    transform: translateZ(0);
  }
  ```
 
2. 内存管理 
```javascript 
// 释放资源 
canvas.width = canvas.width;  // 清除画布 
ctx.clearRect(0, 0, canvas.width, canvas.height);
```
 
---
 
七、安全防护 
 
1. 跨域限制 
```javascript 
const img = new Image();
img.crossOrigin = "anonymous";  // 启用CORS 
img.src = "https://cross-origin.com/image.jpg";
```
 
2. 内容安全策略 
```http 
Content-Security-Policy: script-src 'self'; img-src data:
```
 
---
 
八、最佳实践 
 
推荐做法 
✅ 优先使用`requestAnimationFrame`实现动画  
✅ 对静态内容使用缓存机制  
✅ 为交互元素添加Hit区域检测  
✅ 使用Web Worker处理复杂计算  
 
应避免 
❌ 在动画循环中进行DOM操作  
❌ 频繁创建渐变/模式对象  
❌ 忽略设备像素比（DPR）适配  
 
---
 
九、可访问性指南 
 
1. ARIA增强 
```html 
<canvas 
  id="chart" 
  role="img" 
  aria-label="2025年度销售趋势柱状图"
></canvas>
```
 
2. 备用内容 
```html 
<canvas>
  <p>此浏览器不支持Canvas，请查看<a href="static-chart.png">静态图表</a></p>
</canvas>
```
 
---
 
十、扩展应用 
 
1. 物理引擎集成 
```javascript 
// 使用Matter.js示例 
const engine = Matter.Engine.create();
const render = Matter.Render.create({
  canvas: document.getElementById('canvas'),
  engine: engine 
});
Matter.Engine.run(engine);
Matter.Render.run(render);
```
 
2. 手写识别 
```javascript 
canvas.addEventListener('pointermove', (e) => {
  if (e.buttons) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});
```
 
---
 
十一、常见问题解决 
 
| 现象                 | 解决方案                |
|----------------------|-------------------------|
| 绘制内容模糊         | 根据设备像素比缩放canvas尺寸 |
| 内存占用过高         | 及时清除未使用的Image对象   |
| 跨域图像污染         | 配置`crossOrigin`属性并确保服务器CORS支持 |
| 滚动性能差           | 使用`position: fixed`定位canvas |
 
---
 
十二、调试工具 
 
1. Chrome DevTools：  
   - 使用Canvas Inspector分析绘制调用  
   - 通过Performance面板监控帧率  
 
2. Firefox Canvas Debugger：  
   - 安装Canvas Debugger扩展进行逐帧调试  
 
---
 
十三、相关框架推荐 
 
| 框架名称       | 类型        | 官网                     |
|----------------|-------------|--------------------------|
| Fabric.js      | 2D图形库    | http://fabricjs.com      |
| Three.js       | WebGL引擎   | https://threejs.org      |
| Konva.js       | 交互层库    | https://konvajs.org      |
| Chart.js       | 图表库      | https://www.chartjs.org  |
 
---
 
通过合理应用`<canvas>`标签，您可以：  
✅ 实现高性能图形渲染  
✅ 创建丰富的交互体验  
✅ 处理复杂视觉计算  
✅ 构建跨平台图形应用