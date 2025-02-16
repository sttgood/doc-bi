---
title: source
article: false
order:  
---

 
 
 
 
您好，我是由深度求索（DeepSeek）开发的智能助手DeepSeek-R1。以下是关于HTML `<source>`标签的完整技术解析：
 
---
 
一、MDN官方文档 
- 当前文档地址:  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/source  
  （若链接失效，建议通过MDN站内搜索"source"获取最新内容）
 
---
 
二、基础定义与核心作用 
`<source>`标签是HTML的多媒体资源定义标签，用于为`<picture>`、`<audio>`和`<video>`元素提供多个媒体资源选项，使浏览器能根据设备特性选择最优资源加载。
 
核心特征 
- 支持响应式资源加载 
- 提供格式兼容性回退 
- 实现艺术方向(Art Direction)控制 
- 主要应用场景：
  - 响应式图片适配 
  - 多格式音视频支持 
  - 带宽自适应优化 
  - 高清屏幕适配 
 
---
 
三、核心属性与语法结构 
 
1. 关键属性 
| 属性           | 适用父元素        | 说明                                      |
|----------------|-------------------|------------------------------------------|
| `srcset`       | `<picture>`       | 定义图片资源集（支持密度描述符x）        |
| `sizes`        | `<picture>`       | 定义媒体条件与显示尺寸                   |
| `media`        | `<picture>`       | 媒体查询条件（支持CSS媒体查询）          |
| `type`         | 所有父元素        | 指定MIME类型（如image/webp）             |
| `src`          | `<audio>/<video>` | 定义媒体文件路径                         |
| `height`/`width` | `<picture>`     | 资源固有尺寸（HTML5.1新增）              |
 
2. 标准语法结构 
```html 
<!-- 图片资源示例 -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="fallback.jpg" alt="备用图片">
</picture>
 
<!-- 视频资源示例 -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  您的浏览器不支持视频播放 
</video>
```
 
---
 
四、代码示例与最佳实践 
 
1. 基础使用示例 
```html 
<!-- 响应式图片+艺术方向 -->
<picture>
  <!-- 桌面端宽屏 -->
  <source media="(min-width: 1200px)" 
          srcset="banner-large.jpg 1x, 
                  banner-large@2x.jpg 2x">
  <!-- 移动端竖屏 -->
  <source media="(max-width: 767px) and (orientation: portrait)" 
          srcset="banner-mobile.jpg">
  <!-- 默认资源 -->
  <img src="banner-default.jpg" 
       alt="产品展示" 
       loading="lazy">
</picture>
 
<!-- 自适应视频源 -->
<video controls width="640">
  <source src="video.av1.mp4" 
          type="video/mp4; codecs=av01.0.05M.08">
  <source src="video.h264.mp4" 
          type="video/mp4">
  <track kind="subtitles" 
         src="subtitles.vtt" 
         srclang="zh" 
         label="中文">
</video>
```
 
2. 高级应用场景 
```html 
<!-- 带宽自适应流媒体 -->
<video controls>
  <source src="video-low.mp4" 
          type="video/mp4" 
          data-quality="low">
  <source src="video-high.mp4" 
          type="video/mp4" 
          data-quality="high">
</video>
 
<!-- 动态资源加载 -->
<picture id="dynamic-pic">
  <source id="webp-source" 
          srcset="" 
          type="image/webp">
  <img id="fallback-img" 
       src="" 
       alt="动态加载图片">
</picture>
<script>
  function loadImage(url) {
    const webpSource = document.getElementById('webp-source');
    const fallbackImg = document.getElementById('fallback-img');
    webpSource.srcset = `${url}.webp`;
    fallbackImg.src = `${url}.jpg`;
  }
</script>
```
 
---
 
五、样式控制与性能优化 
 
1. 响应式布局方案 
```css 
/* 自适应图片容器 */
picture {
  display: block;
  max-width: 100%;
  height: auto;
}
 
/* 视频容器比例锁定 */
.video-wrapper {
  position: relative;
  padding-top: 56.25%; /* 16:9 */
}
.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
 
2. 资源加载优化 
```html 
<!-- 预加载关键资源 -->
<link rel="preload" href="hero-image.webp" as="image" type="image/webp">
 
<!-- 懒加载非关键图片 -->
<picture>
  <source srcset="lazy-image.webp" 
          type="image/webp" 
          loading="lazy">
  <img src="lazy-image.jpg" 
       alt="次要内容" 
       loading="lazy">
</picture>
```
 
---
 
六、JavaScript交互实践 
 
1. 动态资源切换 
```javascript 
// 根据网络状况切换视频源 
function adaptVideoQuality() {
  const video = document.querySelector('video');
  const connection = navigator.connection || { effectiveType: '4g' };
  
  if (connection.effectiveType === '4g') {
    video.src = 'high-quality.mp4';
  } else {
    video.src = 'low-quality.mp4';
  }
}
 
// 监听源切换事件 
video.addEventListener('loadedmetadata', () => {
  console.log('当前视频源:', video.currentSrc);
});
```
 
---
 
七、浏览器兼容性 
 
| 浏览器/特性       | Chrome | Firefox | Safari | Edge  | IE    |
|-------------------|--------|---------|--------|-------|-------|
| `<picture>`支持   | 38+    | 38+     | 9.1+   | 13+   | 不支持|
| AV1视频格式       | 70+    | 93+     | 16.4+  | 94+   | 不支持|
| WebP图片格式      | 32+    | 65+     | 14+    | 18+   | 不支持|
| `sizes`属性       | 38+    | 38+     | 9.1+   | 13+   | 不支持|
 
---
 
八、最佳实践 
 
1. 格式优化建议 
```html 
<!-- 优先使用现代格式 -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="渐进增强">
</picture>
```
 
2. 可访问性指南 
- 始终包含`<img>`后备内容 
- 为`<video>`/`<audio>`添加文字说明 
- 使用`<track>`添加字幕：
  ```html 
  <video>
    <source src="movie.mp4" type="video/mp4">
    <track kind="captions" 
           src="captions.vtt" 
           srclang="zh" 
           label="中文">
  </video>
  ```
 
---
 
九、实际应用场景 
 
1. 电子商务产品图 
```html 
<picture>
  <!-- 3D展示 -->
  <source media="(hover: hover)" 
          srcset="product-3d.glb" 
          type="model/gltf-binary">
  <!-- 高清展示 -->
  <source media="(min-width: 768px)" 
          srcset="product-hd.jpg 1x, 
                  product-hd@2x.jpg 2x">
  <!-- 移动端优化 -->
  <img src="product-mobile.jpg" 
       alt="产品展示" 
       crossorigin="anonymous">
</picture>
```
 
2. 自适应广告投放 
```html 
<video controls>
  <!-- 根据用户偏好 -->
  <source src="ad-vertical.mp4" 
          media="(orientation: portrait)" 
          type="video/mp4">
  <source src="ad-horizontal.mp4" 
          type="video/mp4">
  <!-- 追踪代码 -->
  <img src="ad-fallback.gif" 
       alt="广告内容"
       onload="trackImpression()">
</video>
```
 
---
 
十、常见问题排查 
 
| 现象                 | 可能原因                     | 解决方案                     |
|----------------------|------------------------------|------------------------------|
| 图片未加载            | `type`MIME类型错误           | 验证服务器MIME配置           |
| 视频无法播放          | 编解码器不支持               | 使用`canPlayType`检测        |
| 响应式失效            | `media`查询条件冲突          | 使用Chrome DevTools设备模式  |
| 资源重复下载          | 缺少`sizes`属性              | 合理设置`sizes`值            |
| 移动端布局偏移        | 未定义`width`/`height`       | 添加固有尺寸属性             |
| 旧浏览器兼容问题      | 缺少传统格式回退             | 确保最后有`<img>`后备        |
 
---
 
如需实现更复杂的媒体加载策略（如自适应比特率流媒体、DRM保护内容等），请提供具体技术需求。