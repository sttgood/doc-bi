---
title: 文本处理
description: 段落、标题、列表、强调、引用的处理和规范
article: false
order: 4
---

[[toc]]

内容结构化会使读者的阅读体验更轻松，更愉快。

在 HTML 中，每个段落是通过 [`p`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 元素标签进行定义的，比如下面这样：

```html
<p>我是一个段落，千真万确。</p>
```

每个标题（Heading）都必须被包裹在一个标题元素中：

```html
<h1>我是文章的标题</h1>
```

一共有六种标题元素标签——[h1](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements)、[h2](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements)、[h3](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements)、[h4](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements)、[h5](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements) 和 [h6](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Heading_Elements)。每个元素代表文档中不同级别的内容：`<h1>` 表示主标题，`<h2>` 表示二级子标题，`<h3>` 表示三级子标题，依此类推。

### [编辑结构层次](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#编辑结构层次)

这里举一个例子。在一个故事中，`<h1>` 表示故事的名字，`<h2>` 表示每个章节的标题，`<h3>` 表示每个章节下的子标题，以此类推。

```html
<h1>三国演义</h1>

<p>罗贯中</p>

<h2>第一回 宴桃园豪杰三结义 斩黄巾英雄首立功</h2>

<p>
  话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉……
</p>

<h2>第二回 张翼德怒鞭督邮 何国舅谋诛宦竖</h2>

<p>
  且说董卓字仲颖，陇西临洮人也，官拜河东太守，自来骄傲。当日怠慢了玄德，张飞性发，便欲杀之……
</p>

<h3>却说张飞</h3>

<p>
  却说张飞饮了数杯闷酒，乘马从馆驿前过，见五六十个老人，皆在门前痛哭。飞问其故，众老人答曰：“督邮逼勒县吏，欲害刘公；我等皆来苦告，不得放入，反遭把门人赶打！”……
</p>
```

**通常：**

- 最好只对每个页面**使用一次** `<h1>`——这是顶级标题，所有其他标题位于层次结构中的下方。
- 请确保在层次结构中以正确的顺序使用标题。不要使用 `<h3>` 来表示副标题，后面再跟 `<h2>` 来表示二级副标题——这是没有意义的，会导致奇怪的结果。
- 在现有的六个标题层次中，除非觉得有必要，否则应该争取每页使用不超过三个。有很多层次的文件（例如，深层次的标题层次）会变得笨重，难以浏览。在这种情况下，如果可能的话，建议将内容分散到多个页面。

### 无序列表

- ul~li

```html
<ul>
  <li>豆浆</li>
  <li>油条</li>
  <li>豆汁</li>
  <li>焦圈</li>
</ul>
```

### 有序列表

- ol~li

```html
ol>
  <li>沿这条路走到头</li>
  <li>右转</li>
  <li>直行穿过第一个十字路口</li>
  <li>在第三个十字路口处左转</li>
  <li>继续走 300 米，学校就在你的右手边</li>
</ol>
```

## 强调

强调

`<em>`标签 类似斜体效果。

```html
<p>我<em>非常爱</em>你</p>
```

重点

`<strong>`标签，加粗功能，重点强调。

```html
<p>酒里<strong>有毒</strong></p>
```

### 斜体字、粗体字、下划线]

到目前为止，我们所讨论的元素都有明确的相关语义。[`b`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/b)、[`i`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/i) 和 [`u`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/u) 的情况却有点复杂。它们出现于人们要在文本中使用粗体、斜体、下划线但 CSS 仍然不被完全支持的时期。像这样仅仅影响表象而且没有语义的元素，被称为**表象元素**（presentational elements）并且不应该再被使用。因为正如我们在之前看到的，语义对无障碍、SEO（搜索引擎优化）等非常重要。

HTML5 重新定义了 `<b>`、`<i>` 和 `<u>`，赋予了它们新的但有点令人困惑的语义角色。

最好的经验法则是：只有在没有更合适的元素时，才适合使用 `<b>`、`<i>` 或 `<u>` 来表达传统上用粗体、斜体或下划线表达的意思；而通常情况下是有更合适的元素可供使用的。`<strong>`、`<em>`、`<mark>` 或 `<span>` 可能是更加合适的选择。

始终保持无障碍的开发理念。斜体的概念对使用屏幕阅读器的人或使用拉丁字母以外的书写系统的人没有什么帮助。

- [`i`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/i) 被用来传达传统上用斜体表达的意义：外国文字，分类名称，技术术语，一种思想……
- [`b`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/b) 被用来传达传统上用粗体表达的意义：关键字，产品名称，引导句……
- [`u`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/u) 被用来传达传统上用下划线表达的意义：专有名词，拼写错误……

**备注：**人们强烈地将下划线与超链接联系起来。因此，在网页中，最好只给链接加
