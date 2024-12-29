---
title: <link>
descripton: 外部资源链接
order: 1
article: false
---

[[toc]]

## 概述

:::important link概述

`<link>` 元素规定了当前文档与某个外部资源的关系。该元素最常用于链接样式表，此外也可以被用来创建站点图标 。

- `href`：外部链接地址

- `rel`：与本文关系

:::

```
<link href="main.css" rel="stylesheet" />
```

```
<link rel="icon" href="favicon.ico" />
```

## 属性

这个元素包含使用全局属性。

### `href`

此属性指定被链接资源的 URL。URL可以是绝对的，也可以是相对的。

### `rel`

此属性命名链接文档与当前文档的关系。该属性必须是链接类型值的用空格分隔的列表。

### `media`

该属性指定链接资源适用的媒体。其值必须是媒体类型或媒体查询。该属性主要用于链接外部样式表——它允许用户代理选择最适合其运行设备的样式表。

### `type`

这个属性被用于定义链接的内容的类型。这个属性的值应该是类似于 **text/html**、**text/css** 这样的 MIME 类型。该属性的通常用法是定义被引用的样式表类型（如 **text/css**），但由于 CSS 是网络上使用的唯一样式表语言，因此不仅可以省略 `type` 属性，而且现在已成为推荐做法。它还用于 `rel="preload"` 链接类型，以确保浏览器只下载其支持的文件类型。

### `as`

当在 `<link>` 元素上设置了 `rel="preload"` 时，该属性为必填属性；当设置了 [`rel="modulepreload"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/modulepreload)时，该属性为可选属性，否则不应使用。  

它指定了 `<link>` 正在加载的内容类型，这对于匹配请求、应用正确的内容安全策略和设置正确的 [`Accept`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept) 请求标头都是必要的。此外，`rel="preload"` 将其用作请求优先级的信号。下表列出了该属性的有效值及其适用的元素或资源。

| 值       | 可应用于                                                     |
| :------- | :----------------------------------------------------------- |
| audio    | `<audio>` 元素                                               |
| document | `<iframe>` 和 `<frame>` 元素                                 |
| embed    | `<embed>` 元素                                               |
| fetch    | fetch、XHR**备注：**此值需要 `<link>` 包含跨源属性           |
| font     | CSS @font-face**备注：**此值需要 `<link>` 包含跨源属性       |
| image    | 含有 srcset 或 imageset 属性的 `<img>` 和 `<picture>` 元素、SVG `<image>` 元素、CSS `*-image` 规则 |
| object   | `<object>` 元素                                              |
| script   | `<script>` 元素、Worker `importScripts`                      |
| style    | `<link rel=stylesheet>` 元素、CSS `@import`                  |
| track    | `<track>` 元素                                               |
| video    | `<video>` 元素                                               |
| worker   | Worker、SharedWorker                                         |

### `crossorigin`

该枚举属性表示在获取资源时是否必须使用CORS。启用CORS的图像可以在 `canvas` 元素中重复使用，而不会受到*污染*。

允许的值如下：

- `anonymous`会发起一个跨源请求（即包含 `Origin` HTTP 标头），但不会发送任何认证信息（即不发送 cookie、X.509 证书和 HTTP 基本认证信息）。如果服务器没有给出源站凭证（不设置 `Access-Control-Allow-Origin` HTTP 标头），资源就会被污染并限制使用。

- `use-credentials`会发起一个带有认证信息（进行 cookie、X.509 证书和/或 HTTP 基本认证）的跨域请求（即包含 `Origin` HTTP 标头）。如果服务器没有给出源站凭证（不设置 `Access-Control-Allow-Origin` HTTP 标头），资源就会被*污染*并限制使用。

  当不设置此属性时，资源将会不使用 CORS加载（即不发送 `Origin` HTTP 标头），从而无法使用该资源。若设置了非法的值，则视为使用 **anonymous** 枚举关键字。

### `disabled`

仅对于 `rel="stylesheet"` 而言，`disabled` 布尔属性表示是否应加载所述样式表并将其应用于文档。如果在加载 HTML 时指定了`disabled`，则在页面加载过程中不会加载样式表。相反，如果将 `disabled` 属性更改为 `false` 或删除该属性，将按需加载样式表。在 DOM 中设置 `disabled` 属性会导致样式表从文档的 [`Document.styleSheets`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/styleSheets) 列表中删除。

### `fetchpriority`

为获取预加载资源时使用的相对优先级提供提示。允许的值：

- `high`表示相对于其他同类型资源，以高优先级获取。

- `low`表示相对于其他同类型资源，以低优先级获取。

- `auto`默认值：表示自动确定相对于其他同类型资源的取值优先级。

### `hreflang`

此属性指明了被链接资源的语言。其意义仅供参考。。仅当设置了 [`href`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#href) 属性时才应设置该属性。

### `imagesizes`

仅适用于 `rel="preload"` 和 `as="image"`，`imagesizes` 属性具有与 `sizes`属性类似的语法和语义，表示要预载 `img` 元素使用的适当资源，其 `srcset` 和 `sizes` 属性具有相应的值。

### `imagesrcset`

仅适用于 `rel="preload"` 和 `as="image"`，`imagesrcset` 属性具有与 [`srcset`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#srcset) 属性类似的语法和语义，表示要预载 `img` 元素使用的适当资源，其 `srcset` 和 `sizes` 属性具有相应的值。

### `integrity`

包含内联元数据——（你要求浏览器获取的）资源（文件）的以 base64 编码的密码学哈希值。浏览器可以使用这一点来验证所获取的资源是否已被传输且没有遭到意外的修改。该属性只有在指定了 `rel` 属性为 `stylesheet`、`preload` 或 `modulepreload` 时才能指定。



### `referrerpolicy`

一个字符串，表示在获取资源时使用哪个 referrer：

- `no-referrer` 表示将不会发送 [`Referer`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer) 标头。
- `no-referrer-when-downgrade` 表示在不使用 TLS（HTTPS）的情况下导航到源时，不会发送 [`Referer`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer) 标头信息。如果未指定其他策略，这是用户代理的默认行为。
- `origin` 意味着 referrer 网址将是页面的源，大致是协议、主机和端口。
- `origin-when-cross-origin` 这意味着导航到其他来源将仅限于协议、主机和端口，而在同一源上导航将包括 referrer 的路径。
- `unsafe-url` 意味着 referrer 网址将包含源和路径（但不包括片段、密码或用户名）。这种情况是不安全的，因为它可能会将源和路径从受 TLS 保护的资源泄漏到不安全的源。

### `sizes`

这个属性定义了包含相应资源的可视化媒体中的图标的大小。只有在 `rel` 包含 `icon` 或诸如 Apple 的 `apple-touch-icon` 等非标准类型的值时，它才可以存在。它可能具有如下值：`any` 表示图标可以按矢量格式缩放到任意大小，例如 `image/svg+xml`。一个由空白符分隔的尺寸列表。每一个都以 `<像素宽度>x<像素高度>` 或 `<像素宽度>X<像素高度>` 给出。尺寸列表中的每一个尺寸都必须包含在资源里。**备注：** 大多数的图标格式只能存储一个图标。因此绝大多数使用 [`sizes`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link#sizes) 时只包含一个值。微软的 ICO 格式和苹果的 ICNS 格式可以在一个文件中存储多个图标尺寸。ICO 具有更好的浏览器支持，因此如果需要跨浏览器支持，应使用这种格式。

### `title`

`title` 属性在 `<link>` 元素上有特殊的语义。当用于 `<link rel="stylesheet">` 时，它定义了一个默认样式表或备用样式表

该属性明确表示在获取外部资源时应阻止某些操作。它只能在 `rel` 属性包含 `expect` 或 `stylesheet` 关键字时才能使用。要阻止的操作必须是下面列出的以空格分隔的阻止标记列表。`render`：屏幕上的内容渲染被阻止。

:::details  弃用属性

### 非标准属性

- `target` 已弃用

  定义具有已定义链接关系或将显示任何链接资源渲染的框架或窗口名称。

### 已弃用的属性

- `charset` 已弃用

  该属性定义链接资源的字符编码。其值是以空格和/或逗号分隔的字符集列表，如 RFC 2045所定义。默认值为 `iso-8859-1`。**备注：** 要产生与该过时属性相同的效果，请在链接资源上使用 [`Content-Type`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type) HTTP 标头。

- `rev` 已弃用

  此属性的值显示了 `href`属性所定义的当前文档与链接文档的关系。因此，该属性定义了与 rel 属性的值相比的反向关系。该属性的链接类型值类似于 [`rel`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link#rel) 的可能值。**备注：** 你应该使用 `rel` 属性来代替 `rev`，并使用相反的链接类型值。例如，要为 `made` 建立反向链接，应指定 `author`。此外，该属性并不代表“修订（revision）”，因此不得与版本号一起使用，尽管许多网站都会这样滥用该属性。

  :::

## 案例：

### 包含样式表

```html
<link href="style.css" rel="stylesheet" />
```

### 提供替代样式表

你也可以指定替代外部样式表

用户可以从**查看 > 页面样式**菜单中选择要使用的样式表。这样，用户就可以看到一个页面的多个版本。

```html
<link href="default.css" rel="stylesheet" title="默认样式" />
<link href="fancy.css" rel="alternate stylesheet" title="精美样式" />
<link href="basic.css" rel="alternate stylesheet" title="基本样式" />
```

### 图标

你可以在同一页面上包含指向多个不同图标的链接，浏览器将使用 `rel` 和 `sizes` 值作为提示来选择最适合其特定上下文的图标。

```html
<!-- 配备高分辨率 Retina 显示屏的 iPad Pro: -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- 3x 分辨率的 iPhone： -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- 非 Retina iPad、iPad mini，等等： -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- 2x 分辨率的 iPhone 和其他设备： -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- 基本的 favicon -->
<link rel="icon" href="/favicon.ico" />
```

有关为苹果设备的图标选择什么尺寸（`sizes`）的信息，请参阅[苹果关于配置 Web 应用程序的文档和引用的苹果人机界面指南。通常，提供一个大图像（如 192x192）并让浏览器根据需要缩小它就足够了，但你可能想为不同尺寸提供细节级别不同的图像，正如苹果设计指南建议的那样。为较低分辨率提供较小的图标也可以节省带宽。

可能根本不需要提供 `<link>` 元素。例如，浏览器会自动从站点的根目录请求 `/favicon.ico`，苹果设备也会自动请求 `/apple-touch-icon-[size].png`、`/apple-touch-icon.png` 等。但是，提供明确的链接可以防止这些约定发生变化。

### 条件加载资源

你可以在 `media` 属性中提供媒体类型或查询；然后，只有在媒体条件为真时，才会加载此资源。例如：

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />
<link
  href="desktop.css"
  rel="stylesheet"
  media="screen and (min-width: 600px)" />
<link
  href="highres.css"
  rel="stylesheet"
  media="screen and (min-resolution: 300dpi)" />
```

### 样式表加载事件

你能够通过监听发生在样式表上的 `load` 事件知道什么时候样式表加载完毕。同样的，你能够通过监听 `error` 事件检测到是否在加载样式表的过程中出现错误。

```html
<script>
  const stylesheet = document.getElementById("my-stylesheet");

  stylesheet.onload = () => {
    // 做点有意思的事情，样式表已经加载了
  };

  stylesheet.onerror = () => {
    console.log("加载样式表时发生错误！");
  };
</script>
```

**备注：** 一旦加载并解析了样式表及其所有导入内容，并在开始将样式应用到内容之前，`load` 事件就会触发。

### 预加载

你可以在使用 `rel="preload"` 

### 阻止渲染

可以在 `blocking` 属性中包含 `render` 标记；页面的渲染将被阻止，直到资源被获取。例如：

```html
<link blocking="render" rel="stylesheet" href="example.css" crossorigin />
```

## 技术概要

| 内容类型         | 元数据内容。如果使用了 itemprop属性，则为流式内容和短语内容。 |
| :--------------- | ------------------------------------------------------------ |
| 允许的内容       | 无；这是一个空元素。                                         |
| 标签省略         | 必须有开始标签，但不能有结束标签。                           |
| 允许的父元素     | 任何可以接受元数据的元素。如果使用了 itemprop属性，则其父元素可以是任何可接受短语内容的元素。 |
| 隐式 ARIA 角色   | 具有 `href` 属性的 `link`                                    |
| 允许的 ARIA 角色 | 没有允许的 `role`                                            |
| DOM 接口         | `HTMLLinkElement`                                            |
