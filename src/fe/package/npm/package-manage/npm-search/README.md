---
title: npm search
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm search <search term> [<search term> ...]
aliases: find, s, se
```

注意：此命令对工作区无感知。

## 描述

在注册表中搜索与搜索词匹配的包。`npm search` 通过包元数据对注册表中的所有文件执行线性、增量、按词法排序的搜索。如果你的终端支持颜色，它将进一步高亮结果中的匹配项。这可以通过配置项 `color` 禁用

此外，使用与更多搜索词配对的 `--searchopts` 和 `--searchexclude` 选项将包括和排除更多模式。`--searchopts` 和标准搜索词的主要区别在于前者不会在输出中高亮结果，你可以使用它们进行更细粒度的过滤。此外，你可以将这两者都添加到你的配置中以更改默认搜索过滤行为。

搜索还允许在搜索结果中定位维护者，方法是在他们的 npm 用户名前加上 `=`。

如果一个词以 `/` 开头，那么它会被解释为一个正则表达式并支持标准的 JavaScript RegExp 语法。在这种情况下，搜索将忽略尾随的 `/` 。 （请注意，在大多数 shell 中，你必须转义或引用许多正则表达式字符。）



## 配置

### `json`

- 默认值：false
- 类型：布尔值

是否输出 JSON 数据，而不是正常输出。

- 在 `npm pkg set` 中，它可以使用 JSON.parse() 解析集合值，然后再将它们保存到你的 `package.json`。

并非所有 npm 命令都支持。



### `color`

- 默认值：true 除非 NO_COLOR 环境设置为 '0' 以外的值
- 类型："always" 或布尔值

如果为 false，则从不显示颜色。如果 `"always"` 则始终显示颜色。如果为真，则仅打印 tty 文件描述符的颜色代码。



### `parseable`

- 默认值：false
- 类型：布尔值

从写入标准输出的命令输出可解析的结果。对于 `npm search`，这将是制表符分隔的表格格式。



### `description`

- 默认值：true
- 类型：布尔值

显示 `npm search` 中的描述



### `searchlimit`

- 默认值：20
- 类型：数字

限制搜索结果的项目数。完全不适用于旧版搜索。



### `searchopts`

- 默认值：""
- 类型：字符串

始终传递给搜索的空格分隔选项。



### `searchexclude`

- 默认值：""
- 类型：字符串

限制搜索结果的空格分隔选项。



### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。



### `prefer-online`

- 默认值：false
- 类型：布尔值

如果为 true，将强制检查缓存数据的时效性，使 CLI 立即查找更新，即使是新的包数据也是如此。



### `prefer-offline`

- 默认值：false
- 类型：布尔值

如果为 true，将绕过缓存数据的过时检查，但将从服务器请求丢失的数据。要强制完全离线模式，请使用 `--offline`。



### `offline`

- 默认值：false
- 类型：布尔值

强制离线模式：安装期间不会完成任何网络请求。要允许 CLI 填充缺失的缓存数据，请参阅 `--prefer-offline`。
