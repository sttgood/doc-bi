---
title: track
article: false
order:  
---
以下是关于HTML `<track>` 标签的完整技术文档：
 
---
 
HTML `<track>` 标签权威指南 
 
---
 
一、MDN官方文档 
- 中文文档：  
  https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/track  
- 英文文档：  
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track  
  （更新日期：2025年2月MDN最新版本）
 
---
 
二、核心定义与作用 
`<track>` 标签用于为 `<audio>` 或 `<video>` 媒体元素提供外部文本轨道支持，实现以下功能：
- 📌 字幕显示 (Subtitles)
- 📖 文字描述 (Descriptions)
- 📑 章节导航 (Chapters)
- 🔍 元数据关联 (Metadata)
- 📝 歌词同步 (Lyrics)
 
---
 
三、属性全解析 
 
1. 核心属性 
| 属性         | 值类型/示例                          | 说明                                                                 |
|--------------|--------------------------------------|----------------------------------------------------------------------|
| `kind`       | `subtitles`/`captions`/`descriptions`/`chapters`/`metadata` | 定义轨道类型（默认：`subtitles`）               |
| `src`        | URL                                 | 轨道文件地址（必须属性）                                             |
| `srclang`    | 语言代码（如`zh-CN`）               | 轨道文本语言（`kind="subtitles"`时必需）                             |
| `label`      | 字符串（如"简体中文"）              | 用户可见的轨道名称                                                   |
| `default`    | 布尔属性                            | 指定默认启用的轨道（同类型轨道中只能有一个）                         |
 
2. 扩展属性 
| 属性             | 说明                                                                 |
|------------------|----------------------------------------------------------------------|
| `data-*`         | 自定义数据属性                                                      |
| `role`           | ARIA角色（如`role="navigation"`用于章节轨道）                        |
 
---
 
四、WebVTT文件格式 
 
1. 基础结构示例 
```vtt 
WEBVTT 
 
00:00:01.000 --> 00:00:04.500 
<v 张三>你好，欢迎观看本视频 
 
00:00:05.000 --> 00:00:08.000 
这里是第二章开始 
```
 
2. 高级特性 
```vtt 
STYLE 
::cue {
  background-color: rgba(0,0,0,0.7);
  font-family: Arial;
}
 
NOTE 这是注释 
 
00:00:10.000 --> 00:00:15.000 line:80% position:50%
<ruby>漢字<rt>かんじ</rt></ruby>
```
 
---
 
五、代码示例大全 
 
1. 基础用法 
```html 
<video controls width="640">
  <source src="video.mp4" type="video/mp4">
  <track 
    kind="subtitles" 
    src="chinese.vtt" 
    srclang="zh-CN" 
    label="简体中文"
    default 
  >
  <track 
    kind="captions" 
    src="english.vtt" 
    srclang="en" 
    label="English"
  >
</video>
```
 
2. 多语言切换 
```javascript 
const video = document.querySelector('video');
const tracks = video.textTracks;
 
// 切换字幕轨道 
function switchSubtitle(lang) {
  Array.from(tracks).forEach(track => {
    track.mode = track.language === lang ? 'showing' : 'hidden';
  });
}
```
 
3. 章节导航 
```html 
<track 
  kind="chapters" 
  src="chapters.vtt" 
  srclang="en"
  label="视频章节"
>
 
<!-- JavaScript章节处理 -->
<script>
  video.textTracks[0].oncuechange = function() {
    const activeCues = this.activeCues;
    activeCues.forEach(cue => {
      console.log(`当前章节：${cue.text}`);
    });
  };
</script>
```
 
---
 
六、浏览器兼容性 
 
| 浏览器          | 支持版本         | 备注                                  |
|-----------------|------------------|---------------------------------------|
| Chrome          | 23+              | 完整支持WebVTT                       |
| Firefox         | 31+              | 需配置`video.webvtt.enabled`         |
| Safari          | 8+               | iOS 10+ 完整支持                     |
| Edge            | 17+              | 完整支持                             |
| IE11            | ❌               | 不支持                               |
 
---
 
七、可访问性实践 
 
1. ARIA增强 
```html 
<track 
  kind="descriptions" 
  src="audio-desc.vtt" 
  aria-describedby="desc-info"
>
<p id="desc-info" class="visually-hidden">
  本视频包含详细语音描述 
</p>
```
 
2. 屏幕阅读器优化 
```vtt 
00:00:10.000 --> 00:00:15.000 
♪ [轻快的背景音乐] 主持人进入镜头 
```
 
---
 
八、性能优化 
 
1. 按需加载 
```javascript 
// 动态加载字幕 
function loadSubtitle(url) {
  const track = document.createElement('track');
  track.kind = 'subtitles';
  track.src = url;
  track.addEventListener('load', initTrack);
  video.appendChild(track);
}
```
 
2. 缓存策略 
```http 
服务器响应头示例 
Content-Type: text/vtt; charset=utf-8 
Cache-Control: public, max-age=31536000 
```
 
---
 
九、最佳实践 
 
推荐做法 
✅ 为所有视频提供至少一种字幕轨道  
✅ 使用`kind="captions"`包含声音描述  
✅ 为多语言内容设置`srclang`属性  
✅ 实施响应式字幕样式  
 
应避免 
❌ 使用非UTF-8编码的VTT文件  
❌ 在直播流中使用静态VTT文件  
❌ 将敏感信息放在元数据轨道中  
 
---
 
十、SEO优化 
 
1. 结构化数据 
```html 
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "VideoObject",
  "name": "示例视频",
  "caption": "chinese.vtt"
}
</script>
```
 
2. 搜索引擎建议 
- 在字幕中包含关键词的自然表述 
- 为每个语言版本提供独立VTT文件 
- 避免在字幕中使用纯时间码文本 
 
---
 
十一、扩展应用 
 
1. 卡拉OK歌词 
```vtt 
00:00:10.000 --> 00:00:14.000 
<span class="syllable" style="color:#FF0000">今</span>日もいい天気ですね 
```
 
2. 交互式热点 
```vtt 
00:00:20.000 --> 00:00:25.000 
{ "type": "hotspot", "x": "30%", "y": "40%", "action": "showProductInfo(123)" }
```
 
---
 
十二、常见问题解决 
 
| 现象                 | 解决方案                |
|----------------------|-------------------------|
| 字幕不显示           | 检查MIME类型是否为`text/vtt` |
| 时间码不同步         | 使用`HH:MM:SS.mmm`格式   |
| 中文乱码             | 确保文件编码为UTF-8 with BOM |
| 移动端样式失效       | 使用`::cue`伪元素定制样式 |
 
---
 
十三、相关工具推荐 
 
1. WebVTT验证器：  
   https://w3c.github.io/webvtt.js/parser.html 
 
2. 字幕编辑器：  
   - Aegisub（跨平台）
   - Subtitle Edit（Windows）
 
3. 在线生成器：  
   https://subtitletools.com 
 
---
 
通过合理应用`<track>`标签，您可以：  
✅ 提升多媒体内容可访问性  
✅ 增强用户体验  
✅ 支持多语言国际化  
✅ 实现高级交互功能