---
title: 文本处理高级
description: 本文中所描述的元素虽然少有人知，但仍然值得去学习
article: false
order: 5
---

## 描述列表

这种列表的目的是标记一组项目及其相关描述，以列表思维处理文本。

描述列表使用与其他列表类型不同的闭合标签——[`dl`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl)；此外，每一项都用 [`dt`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dt)（description term）元素闭合。每个描述都用 [`dd`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dd)（description definition）元素闭合。

```html
<dl>
  <dt>内心独白</dt>
  <dd>
    戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
  </dd>
  <dt>语言独白</dt>
  <dd>
    戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
  </dd>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
</dl>
```

<img src="./assets/image-20241217221744429.png" alt="image-20241217221744429" style="zoom: 33%;" />

**单个术语多个描述**

```html
<dl>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
  <dd>
    写作中，指与当前主题相关的一段内容，通常不适于直接置于内容主线中，因此置于附近的其他位置（通常位于主线内容旁边一个文本框内）。
  </dd>
</dl>
```

## 引用

HTML 也有用于标记引用的特性，至于使用哪个元素标记，取决于你引用的是一块还是一行。

### 块引用

如果一个块级内容（一个段落、多个段落、一个列表等）从其他地方被引用，你应该把它用 [`blockquote`](https://decveloper.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote) 元素包裹起来表示，并且在 [`cite`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote#cite) 属性里用 URL 来指向引用的资源。

```html
<p>这是一个引用</p>
<blockquote cite="http://"stream.com>
    <P>"你是不是不够努力？"</P>
</blockquote>
```

## 行内引用

 <p>我喜欢玩<q cite="http://gamescience.com">黑神话悟空</q></p>

```html
 <p>我喜欢玩<q cite="http://gamescience.com">黑神话悟空</q></p>
```

[`cite`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote#cite) 属性的内容看起来很有用，但不幸的是，浏览器、屏幕阅读器并没有充分利用它。如果不使用 JavaScript 或 CSS 编写自己的解决方案，就没有办法让浏览器显示 `cite` 的内容。如果你想在页面上提供引文的来源，你需要在文本中通过链接或其他适当的方式来提供它。

```html
 <p>我喜欢玩<q cite="http://gamescience.com">黑神话悟空</q></p>
```

> 所有cite的作用呢？

## 缩略语

另一个你在 Web 上看到的相当常见的元素是 [`abbr`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/abbr)——它常被用来包裹一个缩略语或缩写，并且提供缩写的解释。当包括这两种情况时，在第一次使用时提供纯文本的完整扩展，同时用 `<abbr>` 来标记缩写。这为用户代理提供了如何公布/显示内容的提示，同时告知所有用户该缩写的含义。

如果为缩写提供扩展信息的意义不大，而且该缩写或首字母缩写是一个相当简短的术语，则应提供该术语的完整扩展，作为 [`title`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#title) 属性的值：

 <p>我喜欢玩<abbr title="根据西游记改编的动作游戏">黑神话悟空</abbr></p>

```html
 <p>我喜欢玩<abbr title="根据西游记改编的动作游戏">黑神话悟空</abbr></p>
```

## 联系方式

address只有全局属性

<address>
    你可以通过
    <a href="http://www.stt.com">STT</a><br />
    与作者联系。如果你发现了任何错误，请<a href="mailto:webmaster@example.com">联系网站管理员</a
    >。<br />
</address>

```html
<address>
    你可以通过
    <a href="http://www.stt.com">STT</a><br />
    与作者联系。如果你发现了任何错误，请<a href="mailto:webmaster@example.com">联系网站管理员</a
    >。<br />
</address>
```

作用呢

## 上标下标

 <p>水的化学方程式是H<sub>2</sub>O不要写成H<sup>2</sup>O</p>

```html
 <p>水的化学方程式是H<sub>2</sub>O不要写成H<sup>2</sup>O</p>
```

## 标记时间和日期

HTML 还支持将时间和日期标记为可供机器识别的格式的 [`time`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/time) 元素，例如：

<time datetime="2024-12-13">2024-12-13</time>

```html
<time datetime="2024-12-13">2024 年 12 月 13 日</time>
```

为什么需要这样做？因为世界上有许多种书写日期的格式，上边的日期可能被写成：

- 12 December 2024
- 12th  December  2024
- Dec 12 13
- 13/12/2024
- 12/13/2024
- 2024 年 12 月 12 日
- 等等

但是这些不同的格式不容易被电脑识别——假如你想自动抓取页面上所有事件的日期并将它们插入到日历中，[`time`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/time) 元素允许你附上清晰的、可被机器识别的时间或日期来实现这种需求。

- 标准简单日期
  <time datetime="2024-12-13">13 December 2024</time>

```
<time datetime="2024-12-13">13 December 2024</time>
```

- 只包含年份和月份
  <time datetime="2024-12">December 2024</time>

```
<time datetime="2024-12">December 2024</time>
```

- 只包含月份和日期
  <time datetime="12-13">13 December</time>

```
<time datetime="12-13">13 December</time>
```

- 只包含时间，小时和分钟数
  <time datetime="19:30">19:30</time>

```
<time datetime="19:30">19:30</time>
```

- 还可包含秒和毫秒
  <time datetime="19:30:01.856">19:30:01.856</time>

```
<time datetime="19:30:01.856">19:30:01.856</time>
```

- 日期和时间
  <time datetime="2024-12-13T19:30">7.30pm, 13 December 2024</time>

```
<time datetime="2024-12-13T19:30">7.30pm, 13 December 2024</time>
```

- 含有时区偏移值的日期时间
- <time datetime="2024-02-13T19:30+01:00">7.30pm, 13 December 2024 is 8.30pm in China</time>

```

<time datetime="2024-02-13T19:30+01:00">7.30pm, 13 December 2024 is 8.30pm in China</time>
```

- 提及特定周
  <time datetime="2024-W04">The fourth week of 2024</time>

```
<time datetime="2024-W04">The fourth week of 2024</time>
```
