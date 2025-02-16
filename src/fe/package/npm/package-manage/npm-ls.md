---
title: npm ls
article: false
order: 5
---

## 概要

```bash
npm ls <package-spec>
alias: list
```

## 描述

此命令将以树形结构打印到标准输出中已安装的包的所有版本，以及指定 `--all` 时它们的依赖。

注意：要获得一个给定包为何包含在树中的 "一饮而尽" 视图，请使用 `npm explain`。

位置参数是 `name@version-range` 标识符，它将结果限制为仅指定包的路径。请注意，嵌套包还将显示指定包的路径。例如，在 npm 的源代码树中运行 `npm ls promzard` 将显示：



```bash
npm@11.0.0 /path/to/npm
└─┬ init-package-json@0.0.4
  └── promzard@0.1.5
```

它将打印出无关的、丢失的和无效的包。

如果一个项目为依赖指定了 git url，这些会显示在 `name@version` 之后的括号中，以便用户更容易识别项目的潜在分支。

显示的树是基于包依赖的逻辑依赖树，而不是 `node_modules` 文件夹的物理布局。

以 `ll` 或 `la` 运行时，默认显示扩展信息。

## 配置

### `all`

- 默认值：false
- 类型：布尔值

运行 `npm outdated` 和 `npm ls` 时，设置 `--all` 将显示所有过时或已安装的包，而不仅仅是当前项目直接依赖的包。

### `json`

- 默认值：false
- 类型：布尔值

是否输出 JSON 数据，而不是正常输出。

- 在 `npm pkg set` 中，它可以使用 JSON.parse() 解析集合值，然后再将它们保存到你的 `package.json`。

并非所有 npm 命令都支持。

### `long`

- 默认值：false
- 类型：布尔值

在 `ls`、`search` 和 `help-search` 中显示扩展信息。

### `parseable`

- 默认值：false
- 类型：布尔值

从写入标准输出的命令输出可解析的结果。对于 `npm search`，这将是制表符分隔的表格格式。

### `global`

- 默认值：false
- 类型：布尔值

在 "global" 模式下运行，以便将包安装到 `prefix` 文件夹而不是当前工作目录。有关行为差异的更多信息，请参见 [文件夹]。

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`

### `depth`

- 默认值：如果设置了 `--all`，则为 `Infinity`，否则为 `1`
- 类型：空值或数字

为 `npm ls` 递归包时的深度。

如果未设置，`npm ls` 将仅显示根项目的直接依赖。如果设置了 `--all`，那么 npm 将默认显示所有依赖。

### `omit`

- 默认值：'dev' 如果 `NODE_ENV` 环境变量设置为 'production'，否则为空。
- 类型："dev"、"optional"、"peer"（可多次设置）

要从磁盘上的安装树中省略的依赖类型。

请注意，这些依赖仍会被解析并添加到 `package-lock.json` 或 `npm-shrinkwrap.json` 文件中。它们只是没有物理安装在磁盘上。

如果一个包类型同时出现在 `--include` 和 `--omit` 列表中，那么它将被包括在内。

如果生成的省略列表包含 `'dev'`，则 `NODE_ENV` 环境变量将针对所有生命周期脚本设置为 `'production'`。

### `include`

- 默认值：
- 类型："prod"、"dev"、"optional"、"peer"（可多次设置）

允许定义要安装的依赖类型的选项。

这是 `--omit=<type>` 的倒数。

`--include` 中指定的依赖类型将不会被忽略，无论命令行中指定省略/包含的顺序如何。

### `link`

- 默认值：false
- 类型：布尔值

与 `npm ls` 一起使用，将输出限制为仅链接的那些包。

### `package-lock-only`

- 默认值：false
- 类型：布尔值

如果设置为 true，当前操作将只使用 `package-lock.json`，忽略 `node_modules`。

对于 `update`，这意味着只会更新 `package-lock.json`，而不是检查 `node_modules` 并下载依赖。

对于 `list`，这意味着输出将基于 `package-lock.json` 描述的树，而不是 `node_modules` 的内容。

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

### `install-links`

- 默认值：false
- 类型：布尔值

设置文件时：协议依赖将作为常规依赖打包和安装，而不是创建符号链接。此选项对工作区没有影响。
