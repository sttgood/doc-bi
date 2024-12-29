---
title: <meta>
descripton: 元数据元素
order: 1
article: false
---

[[toc]]

## 概述

:::important meta概述

`<meta>` 元素定义的元数据的类型包括以下几种：

- 如果设置了 [`name`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#name) 属性，`<meta>` 元素提供的是文档级别（*document-level*）的元数据，应用于整个页面。

- 如果设置了 [`http-equiv`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#http-equiv) 属性，`<meta>` 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。

- 如果设置了 [`charset`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#charset) 属性，`<meta>` 元素是一个字符集声明，告诉文档使用哪种字符编码。

- 如果设置了 [`itemprop`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#itemprop) 属性，`<meta>` 元素提供用户定义的元数据。

:::

## 属性

此元素包括全局属性

### `name`

 指定了 meta 元素的类型；说明该元素包含了什么类型的信息。

> `name` 和 `content` 属性可以一起使用，以名 - 值对的方式给文档提供元数据，其中 name 作为元数据的名称，content 作为元数据的值。

### `charset`

该属性声明了文档的字符编码。如果存在该属性，则其值必须是字符串 `"utf-8"` 的不区分 ASCII 大小写的匹配，因为 UTF-8 是 HTML5 文档的唯一有效编码。声明字符编码的 `<meta>` 元素必须完全位于文档的前 1024 个字节内。

### `content`

此属性包含 [`http-equiv`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#http-equiv) 或 [`name`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#name) 属性的值，具体取决于所使用的值。

### `http-equiv`

属性定义了一个编译指示指令。这个属性叫做 `http-equiv(alent)` 是因为所有允许的值都是特定 HTTP 标头的名称，如下：

- `content-security-policy` 允许页面作者定义当前页面的内容策略。内容策略常用来指定允许的服务器源和脚本端点，这有助于防止跨站点脚本攻击。

- `content-type` 声明 MIME 类型和文档的字符编码。如果使用 `content-type` 属性，与之在同一个 `<meta>` 元素中使用的 [`content`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#content) 属性的值必须是 `"text/html; charset=utf-8"`。这相当于一个具有指定 `charset` 属性的 `<meta>` 元素，并对其在文档中的放置位置有相同的限制。

  **注意**：该属性只能用于 MIME 类型为 `text/html` 的文档，不能用于 MIME 类型为 XML 的文档。

- `default-style`设置默认 CSS 样式表组的名称。

- `x-ua-compatible` 如果指定，则 `content` 属性必须具有值 `"IE=edge"`。用户代理必须忽略此指示。

- `refresh` 这个属性指定：

  - 页面重新加载的秒数——仅当 [`content`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#content) 属性包含非负整数时。

  - 页面重定向到指定链接的秒数——仅当 content 属性包含非负整数后跟字符串“`;url=`”和有效的 URL 时。

 **警告：**设置了 `refresh` 值的页面存在时间间隔过短的风险。借助屏幕阅读器等辅助技术进行导航的用户可能无法在自动重定向之前通读和理解页面内容。突然的、未通知的页面内容更新也可能会让视力低下的人迷失方向。

## 总结

**`<meta>`** 元素表示那些不能由其他 HTML 元相关（meta-related）元素表示的元数据信息。`<base>`、`<link>`、`<script>`、`<style>` 或 `<title>`。

| 内容分类         | 元数据内容]。如果 [`itemprop`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/itemprop) 属性存在：流式内容、分段内容 |
| :--------------- | ------------------------------------------------------------ |
| 允许的内容       | 无；这是一个空元素)。                                        |
| 标签省略         | 由于这是一个空元素，所以必须有开始标签并且不能有结束标签。   |
| 允许的父元素     | `<meta charset>`、`<meta http-equiv>`：[`head`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/head) 元素。如果 [`http-equiv`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#http-equiv) 不是编码声明，它也可以放在 [`noscript`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/noscript) 元素中，它本身在一个 `<head>` 元素内部。`<meta name>`：任何可以接受元数据内容的元素。`<meta itemprop>`：任何可以接受元数据内容或流式内容。 |
| 默认的无障碍角色 | 没有相应的角色                                               |
| 允许的无障碍角色 | 没有允许的`角色（role）`                                     |
| DOM 接口         | [`HTMLMetaElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMetaElement) |





