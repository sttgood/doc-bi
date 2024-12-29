---
title: 多媒体处理
description: 图片、音频、视屏等在html中的使用
article: false
order: 1
---

## 图片

```html
<img src="图片.jpg" alt="备选图片信息" [width]="" [height]="" />
```

图片插入使用`<img>`标签，它也是一个空元素。
- `src`：图片地址

- `width,height`：图片宽高，可选

- `alt`：备选信息

  - 用户有视力障碍，需要通过屏幕阅读器来浏览网页。事实上，图片备选描述文本对大多数用户都很有用。

  - 图片不正常显示，他作为显示信息。

  - 这些文字描述可以提供给搜索引擎SEO使用，例如搜索引擎可能会将图片的文字描述和查询条件进行匹配。




:::warning 注意

1.搜索引擎还会读取图像文件名并将其计入 SEO，因此图片名字建议有意义。

2.*未经许可*，*绝不要*将 `src` 属性指向其他网站上的图像。这被称为“热链接（hotlinking）”。大多数人认为这是不道德的，因为这会导致每当有人访问你的页面，都会有另一些不知情的人为图像交付带宽费用。这也导致你无法掌控图像，图像有可能在你不知情的情况下，被删除或替换为尴尬的内容。

:::

## 视频

`<video>`标签实现视屏播放



- `src`: 他与img运作方式完全相同。
- `controls`：controls` 属性来让视频或音频包含浏览器自带的控制界面，或
- `video`元素内的段落叫做**后备内容**，当浏览器不支持 `<video>` 元素的时候，就会显示这段内容。

###  **使用多个播放源以提高兼容性**

不同浏览器对视频/音频格式的支持程度不一样，导致你可能无法播放某些视频/音频。

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>你的浏览器不支持此视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
</video>
```

在这里我们将 `src` 属性从 `<video>` 元素中移除，转而将它放在几个单独的 `source`元素当中，浏览器会检查 `source`元素，并且播放第一个与其自身 codec 相匹配的媒体。WebM 和 MP4 这两种格式在目前已经足够，只要视频支持这两种格式，那么其在大多数平台和浏览器上都能正确播放。

每个 `<source>` 元素都含有 [`type`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/source#type) 属性，这个属性是可选的，但是建议你添加这个属性——它包含了 `<source>` 指定的 MIME 类型，同时浏览器也会通过检查这个属性来迅速的跳过那些不支持的格式。如果你没有添加 `type` 属性，浏览器会尝试加载每一个文件，直到找到一个能正确播放的格式，但是这样会消耗掉大量的时间和资源。

请参考我们的[媒体类型和格式指南](https://developer.mozilla.org/zh-CN/docs/Web/Media/Formats)，以选择最适合你的需求的容器和编解码器，同时查找合适的 MIME 类型以指定每种媒体类型。

### **video完整特性**

```html
<video
  controls
  width="400"
  height="400"
  autoplay
  loop
  muted
  preload="auto"
  poster="poster.png">
  <source src="rabbit320.mp4" type="video/mp4" />
  <source src="rabbit320.webm" type="video/webm" />
  <p>你的浏览器不支持此视频。可点击<a href="rabbit320.mp4">此链接</a>观看</p>
</video>
```

- `autoplay`：这个属性会使音频和视频内容立即播放，即使页面的其他部分还没有加载完全。建议不要在你的网站上自动播放视频（或音频），因为用户可能会反感。

- `loop`：这个属性可以让视频（或者音频）文件在结束时再次开始播放。这个也可能很恼人，同样不建议使用，除非有必要。

- `muted`：这个属性会导致媒体播放时，默认关闭声音。

- `poster`：这个属性指向了一个图像的 URL，这个图像会在视频播放前显示。通常用于粗略的预览或者广告。

- `preload`：这个属性被用来缓冲较大的文件，有三个值可选：

  - `"none"`：不缓冲文件

  - `"auto"`：页面加载后缓存媒体文件

  - `"metadata"`：仅缓冲文件的元数据

## 音频

`audio`标签实现音频播放。


```html
<audio controls>
  <source src="viper.mp3" type="audio/mp3" />
  <source src="viper.ogg" type="audio/ogg" />
  <p>你的浏览器不支持该音频，可点击<a href="viper.mp3">此链接</a>收听。</p>
</audio>
```

因为音频播放器没有视觉部件，它所占用的空间比视频播放器要小（你只需要显示出能控制音频播放的控件）。`<audio>` 元素与 `<video>` 元素的使用方式几乎完全相同，只有一些细微的差别，

- `audio`元素不支持 `width`/`heigth` 属性——由于其并没有视觉部件，也就没有内容要设置 `width`/`height`。
- 它同时也不支持 `poster` 属性——同样，因为没有视觉部件。

除此之外，`<audio>` 元素支持所有 `<video>` 元素的特性。

## 显示视频文本

现在，我们将讨论一个略微先进的概念，这个概念将会十分的有用。许多人不想（或者不能）听到 Web 上的音频/视频内容，至少在某些情况下是这样的，比如：

- 许多人患有听觉障碍（通常来说是很难听清声音的人，或者聋人），他们不能听见音频中的声音。
- 还有一些人无法听音频，因为他们在一个非常嘈杂的环境当中（比如在拥挤的酒吧内恰好赶上了球赛）。
- 在某些环境下播放音频会分散注意力或造成干扰（比如在图书馆或伴侣正在休息时），这种情况下，拥有字幕就显得非常实用了。
- 有一些人他们不会说视频当中的语言，因此他们需要文字记录或者是翻译来帮助他们理解媒体内容。

为这些人提供音频/视频中话语的文字记录，将会对他们有很大的帮助。幸运的是，借助 HTML 视频，我们可以做到这一点。我们只需使用 [WebVTT](https://developer.mozilla.org/zh-CN/docs/Web/API/WebVTT_API) 文件格式和 [`track`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/track) 元素即可。

> **备注：** “转录（transcribe）”是指将视频/音频中说的话记录成文字形式，转录的结果称为“文字记录（transcript）”。

WebVTT 是一个格式，用来编写文本文件，这个文本文件包含了众多的字符串，这些字符串会带有一些元数据，它们可以用来描述这个字符串将会在视频中显示的时间，甚至可以用来描述这些字符串的样式以及定位信息（尽管有限制）。这些字符串叫做 **cue** ，你可以根据不同的需求来显示不同类型的 cue，最常见的如下：

- `subtitles`:外语材料的翻译字幕，来帮助那些听不懂音频中说的什么的人理解音频当中的内容。
- `captions`:同步翻译对白，或是描述一些有重要信息的声音，来帮助那些不能听音频的人理解音频中的内容。
- `定时描述`:由媒体播放器朗读的文本，其向盲人或其他视力受损用户描述重要的视觉内容。

一个典型的 WebVTT 文件如下：

```
WEBVTT

1
00:00:22.230 --> 00:00:24.606
第一段字幕

2
00:00:30.739 --> 00:00:34.074
第二段

…
```

要让其与 HTML 媒体一起显示，你需要做如下工作：

1. 将其保存为 `.vtt` 文件，放在服务器可以提供服务的地方（见下文），例如和 HTML 文件放在同一文件夹。
2. 用 `track`标签链接 `.vtt` 文件，`<track>` 标签需放在 `<audio>` 或 `<video>` 标签当中，同时需要放在所有 `<source>` 标签之后。使用 `kind`属性来指明是 `subtitles`、`captions` 还是 `descriptions`。然后，使用 `srclang` 来告诉浏览器你是用什么语言来编写的 subtitles。最后，添加 `label`，以帮助读者在查找时识别语言。

```html
<video controls>
  <source src="example.mp4" type="video/mp4" />
  <source src="example.webm" type="video/webm" />
  <track kind="subtitles" src="subtitles_es.vtt" srclang="es" label="Spanish" />
</video>
```

为了尝试这种方法，需要在[本地 HTTP 服务器](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server)上托管文件。在浏览器的输出中，会看到一个显示字幕的视频，

更多细节，包括如何添加标签，请阅读[为 HTML 视频添加标题和字幕](https://developer.mozilla.org/zh-CN/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)。在 Github 上可以找到[与本文相关的样例](https://iandevlin.github.io/mdn/video-player-with-captions/)，它们由 Ian Devlin 编写（或者[查看源代码](https://github.com/iandevlin/iandevlin.github.io/tree/master/mdn/video-player-with-captions)）。这个样例使用了 JavaScript 代码，用户借此可以选择不同的字幕。注意，若想要显示字幕，你需要点击“CC”按钮，并且选择某个选项（English、Deutsch 或 Español）。

**备注：** 文本轨道还可以帮助你进行 [SEO](https://developer.mozilla.org/zh-CN/docs/Glossary/SEO)，因为搜索引擎对文字特别感兴趣。搜索引擎甚至可以借助文本轨道直接链接到视频中的某个位置。
