---
title: npm prune
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm prune [[<@scope>/]<pkg>...]
```

## 描述

此命令删除 "extraneous" 包。如果提供了包名称，则仅删除与提供的名称之一匹配的包。

无关的包是那些存在于 `node_modules` 文件夹中的包，它们没有被列为任何包的依赖列表。

如果指定了 `--omit=dev` 标志或 `NODE_ENV` 环境变量设置为 `production`，则此命令将删除你的 `devDependencies` 中指定的包。

如果使用 `--dry-run` 标志，则实际上不会进行任何更改。

如果使用 `--json` 标志，则 `npm prune` 所做的更改（或将使用 `--dry-run` 所做的更改）将打印为 JSON 对象。

在正常操作中，无关的模块会被自动修剪，因此你只需要带有 `--production` 标志的此命令。然而，在现实世界中，操作并不总是 "normal"。当发生崩溃或错误时，此命令可以帮助清理任何产生的垃圾。

## 配置

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



### `dry-run`

- 默认值：false
- 类型：布尔值

表示你不希望 npm 进行任何更改，并且它应该只报告它会做的事情。这可以传递到任何修改本地安装的命令中，例如 `install`、`update`、`dedupe`、`uninstall` 以及 `pack` 和 `publish`。

注意：其他网络相关命令不支持此功能，例如 `dist-tags`、`owner` 等。



### `json`

- 默认值：false
- 类型：布尔值

是否输出 JSON 数据，而不是正常输出。

- 在 `npm pkg set` 中，它可以使用 JSON.parse() 解析集合值，然后再将它们保存到你的 `package.json`。

并非所有 npm 命令都支持。



### `foreground-scripts`

- 默认值：`false` 除非使用 `npm pack` 或 `npm publish` 时默认为 `true`
- 类型：布尔值

在前台进程中运行已安装包的所有构建脚本（即 `preinstall`、`install` 和 `postinstall`）脚本，与主 npm 进程共享标准输入、输出和错误。

请注意，这通常会使安装运行速度变慢，并且噪音更大，但对调试很有用。



### `ignore-scripts`

- 默认值：false
- 类型：布尔值

如果为 true，npm 不会运行 package.json 文件中指定的脚本。

请注意，如果设置了 `ignore-scripts`，则明确旨在运行特定脚本的命令（例如 `npm start`、`npm stop`、`npm restart`、`npm test` 和 `npm run-script`）仍将运行其预期的脚本，但它们不会运行任何前置或后置脚本。



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
