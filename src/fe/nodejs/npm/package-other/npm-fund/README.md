---
title: npm fund
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm fund [<package-spec>]
```

## 描述

此命令检索有关如何为给定项目的依赖提供资金的信息。如果没有提供包名，它将以树形结构列出所有正在寻找资金的依赖，列出资金的类型和要访问的 url。如果提供了包名，那么它会尝试使用 [`--browser` 配置] 参数打开其资金 url；如果包有多个资金来源，将提示用户通过 `--which` 选项来消除歧义。

该列表将避免重复条目，并将所有共享相同 url 的包堆叠为单个条目。因此，该列表与 `npm ls` 的输出形状不同。

### 示例

## 工作区支持

可以使用 [`workspace` 配置] 选项过滤结果以仅包含单个工作区及其依赖。

### 示例：

下面是一个在配置了工作区 `a` 的项目中运行 `npm fund` 的示例：



```bash
$ npm fund
test-workspaces-fund@1.0.0
+-- https://example.com/a
| | `-- a@1.0.0
| `-- https://example.com/maintainer
|     `-- foo@1.0.0
+-- https://example.com/npmcli-funding
|   `-- @npmcli/test-funding
`-- https://example.com/org
    `-- bar@2.0.0
```

以下是仅按同一项目中的特定工作区 `a` 过滤时的预期结果示例：



```bash
$ npm fund -w a
test-workspaces-fund@1.0.0
`-- https://example.com/a
  | `-- a@1.0.0
  `-- https://example.com/maintainer
      `-- foo@2.0.0
```

## 配置

### `json`

- 默认值：false
- 类型：布尔值

是否输出 JSON 数据，而不是正常输出。

- 在 `npm pkg set` 中，它可以使用 JSON.parse() 解析集合值，然后再将它们保存到你的 `package.json`。

并非所有 npm 命令都支持。

### `browser`

- 默认值：OS X:`"open"`，Windows：`"start"`、其他：`"xdg-open"`
- 类型：空值、布尔值或字符串

npm 命令调用以打开网站的浏览器。

设置为 `false` 以抑制浏览器行为，而是将 url 打印到终端。

设置为 `true` 以使用默认系统 URL 打开器。

### `unicode`

- 默认值：在 Windows 上为 false，在具有 unicode 区域设置的 mac/unix 系统上为 true，如 `LC_ALL`、`LC_CTYPE` 或 `LANG` 环境变量所定义。
- 类型：布尔值

当设置为 true 时，npm 在树输出中使用 unicode 字符。当为 false 时，它使用 ascii 字符而不是 unicode 字形。

### `workspace`

- 默认值：
- 类型：字符串（可以设置多次）

启用在当前项目的已配置工作区的上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。

`workspace` 配置的有效值为：

- 工作区名称
- 工作区目录的路径
- 父工作区目录的路径（将导致选择该文件夹中的所有工作区）

为 `npm init` 命令设置时，可以将其设置为尚不存在的工作区的文件夹，以创建文件夹并将其设置为项目中的全新工作区。

此值不会导出到子进程的环境中。

### `which`

- 默认值：null
- 类型：空值或数字

如果有多个资金来源，打开哪个 1-indexed 来源 URL。
