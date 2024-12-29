---
title: 矢量图
description: 图片、音频、视屏等在html中的使用
article: false
order: 2
---

## SVG

### 前言

**位图和矢量图：**

- **位图**使用像素网格来定义——位图文件精确包含每个像素的位置和它的色彩信息。流行的 web 位图格式包括 Bitmap（`.bmp`）、PNG（`.png`）、JPEG（`.jpg`），以及 GIF（`.gif`）。
- **矢量图**使用算法来定义——矢量图文件包含了图形和路径的定义，电脑可以根据这些定义计算出当它们在屏幕上渲染时应该呈现的样子。借助 `SVG` 格式，我们可以创造用于 Web 的精彩矢量图形。

### 历史

`W3C`于 20 世纪 90 年代末开始着手 SVG 的工作，但是直至 `Internet Explorer 9` 推出 SVG 支持时，SVG 才变得流行起来。现在所有主流浏览器都支持 SVG。

*可缩放矢量图形*（**SVG**）是一种基于 [XML](https://developer.mozilla.org/zh-CN/docs/Glossary/XML) 语法的二维矢量图形格式。它基本上是像 `HTML` 一样的标记，只是它提供了许多不同的元素来定义要显示在图像中的形状，以及要应用于这些形状的效果。`SVG` 用于标记图形，而不是内容。作为一种`矢量图像格式`，SVG 图形可以无限地缩放，这使其在`响应式设计`中非常有用，因为你可以创建可缩放到任意屏幕大小的界面元素和图形。SVG 还提供了一组有用的工具，例如裁剪、遮罩、滤镜和动画。

SVG 定义了一些用于创建基本图形的元素，如 `circle`和 `rect`，此外 SVG 还提供了一些复杂一些的元素如 `path` 和 `polygon`。更高级的 SVG 特性包括 `feColorMatrix`（使用变换矩阵转换颜色）、`animate`（矢量图形的动画部分）和 `mask`（在图像上层应用蒙版）

### 特点

**`SVG` 优点：**

- 矢量图像中的文本仍然可访问（这也有利于 `SEO`。
- SVG 可以很好地适应样式/脚本，因为图像的每个组件都是可以通过 CSS 或通过 JavaScript 设置样式的元素。HTML 现在允许将 `SVG` 标签**直接嵌入**到 HTML 文档中。

 **`SVG`缺点**

- SVG 非常容易变得复杂，这意味着文件大小会增加；复杂的 SVG 也会占用浏览器很长的处理时间。
- SVG 可能比位图更难创建，具体取决于你尝试创建哪种图像。

在示例中我们创建一个圆和一个矩形：

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

SVG 很容易手工编码。是的，你可以在文本编辑器中手动编写简单的 SVG，但是随着图像复杂度提升，手动编码很快就开始变得非常困难。为了创建 SVG 图像，大多数人使用矢量图形编辑器

## SVG插入到HTML

### img元素

你只需要按照预期的方式在 `src`属性中引用它。你将至少需要 `height` 或 `width` 属性中的一个（或者如果你的 SVG 没有固有的宽高比，则都需要）

```html
<img src="equilateral.svg" alt="等边三角形" height="87px" width="100px" />
```

#### 优点

- 快速且熟悉的图像语法，内置的文本等效内容可通过 `alt` 属性获取。
- 通过将 `<img>` 嵌入到 `a` 元素中，你可以轻松地将图像转换为超链接。
- 浏览器能够缓存 SVG 文件，这意味着在未来使用该图像的页面将加载得更快。

#### 缺点

- 无法使用 JavaScript 操作图像。
- 如果要使用 CSS 控制 SVG 内容，则必须在 SVG 代码中包含内联 CSS 样式。（从 SVG 文件内部调用的外部样式表不起作用）
- 不能用 CSS 伪类来重设图像样式（如 `:focus`）。

### 旧版本浏览器

对于不支持 SVG（IE 8 及更低版本，Android 2.3 及更低版本）的浏览器，你可以用 `src` 属性引用 PNG 或 JPG，并使用 [`srcset`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#srcset) 属性（只有较新的浏览器才能识别）来引用 SVG。在这种情况下，仅支持 SVG 的浏览器会加载 SVG——较旧的浏览器将加载 PNG：

```html
<img src="equilateral.png" alt="等边三角形" srcset="equilateral.svg" />
```

你还可以使用 SVG 作为 CSS 背景图像，如下所示。在下面的代码中，旧版浏览器会加载它们能够理解的 PNG，而较新的浏览器将加载 SVG：

cssCopy to Clipboard

```html
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

与上文所述的 `<img>` 方法一样，使用 CSS 背景图片插入 SVG 意味着 SVG 无法使用 JavaScript 进行操作，并且同样受到相同的 CSS 限制。

如果 SVG 根本没有显示，可能是因为你的服务器设置不正确。

### SVG代码

你还可以在文本编辑器中打开 SVG 文件，复制 SVG 代码，并将其粘贴到 HTML 文档中——这有时称为将 **SVG 内联**或**内联 SVG**。请确保你的 SVG 代码始于 `<svg>` 标签并终于 `</svg>` 标签。以下是一个非常简单的示例，你可以粘贴到文档中：

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### 优点

- 将 SVG 内联会减少 HTTP 请求，可以减少加载时间。
- 你可以为 SVG 元素分配 `class` 和 `id`，并使用 CSS 修改样式，无论是在 SVG 中，还是 HTML 文档中的 CSS 样式规则。实际上，你可以使用任何 SVG 外观属性 作为 CSS 属性。
- 内联 SVG 是唯一可以让你在 SVG 图像上使用 CSS 交互（如 `:focus`）和 CSS 动画的方法（即使在常规样式表中）。
- 你可以通过将 SVG 标记包在 `a` 元素中，使其成为超链接。

#### 缺点

- 这种方法只适用于 SVG 在单个地方使用的情况。多次使用会导致资源密集型维护（resource-intensive maintenance）。
- 额外的 SVG 代码会增加 HTML 文件的大小。
- 浏览器不能像缓存普通图像资源那样缓存内联 SVG，因此包含该图像的页面在加载第一个包含该图像的页面后，加载速度不会更快。
- 你可能会在 `foreignObject` 元素中包含回退，但支持 SVG 的浏览器仍然会下载所有后备图像。你需要考虑仅仅为支持过时的浏览器，而增加额外开销是否真的值得。

### `iframe` 嵌入 SVG

你可以在浏览器中打开 SVG 图像，就像网页一样。因此，使用 `<iframe>` 嵌入 SVG 文档就像我们在

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="Triangle with three unequal sides" />
</iframe>
```

这绝对不是最好的方法：

#### 缺点

- 如你所知，`iframe` 有一个回退机制，如果浏览器不支持 `iframe`，则只会显示回退。
- 此外，除非 SVG 和你当前的网页具有相同的**来源**，否则你不能在主页面上使用 JavaScript 来操纵 SVG。