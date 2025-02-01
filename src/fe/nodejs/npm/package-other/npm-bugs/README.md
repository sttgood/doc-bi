---
title: npm bugs
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm bugs [<pkgname> [<pkgname> ...]]
alias: issues
```

## 描述

此命令尝试猜测包的错误跟踪 URL 或支持电子邮件的 `mailto` URL 的可能位置，然后尝试使用 [`--browser` 配置](https://npm.nodejs.cn/cli/v11/using-npm/config#browser) 参数打开它。如果没有提供包名，它将在当前文件夹中搜索 `package.json` 并使用 `name` 属性。

## 配置

### `browser`

- 默认值：OS X:`"open"`，Windows：`"start"`、其他：`"xdg-open"`
- 类型：空值、布尔值或字符串

npm 命令调用以打开网站的浏览器。

设置为 `false` 以抑制浏览器行为，而是将 url 打印到终端。

设置为 `true` 以使用默认系统 URL 打开器。

### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。

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

### `workspaces`

- 默认值：null
- 类型：空值或布尔值

设置为 true 可在所有已配置工作区的上下文中运行该命令。

显式将此设置为 false 将导致像 `install` 这样的命令完全忽略工作区。未明确设置时：

- 在 `node_modules` 树上运行的命令（安装、更新等）会将工作区链接到 `node_modules` 文件夹。* 执行其他操作（测试、执行、发布等）的命令将在根项目上运行，除非在 `workspace` 配置中指定了一个或多个工作区。

此值不会导出到子进程的环境中。

### `include-workspace-root`

- 默认值：false
- 类型：布尔值

为命令启用工作区时包括工作区根。

当为 false 时，通过 `workspace` 配置指定单个工作区，或通过 `workspaces` 标志指定所有工作区，将导致 npm 仅在指定的工作区上运行，而不是在根项目上运行。

此值不会导出到子进程的环境中。
