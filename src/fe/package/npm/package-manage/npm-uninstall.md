---
title: npm uninstall
article: false
order: 2
---

## 概要

```bash
npm uninstall [<@scope>/]<pkg>...
aliases: unlink, remove, rm, r, un
```

## 描述

这将卸载一个包，完全删除代表它安装的所有 npm。

它还会从 `package.json` 中的 `dependencies`、`devDependencies`、`optionalDependencies` 和 `peerDependencies` 对象中删除包。

此外，如果你有 `npm-shrinkwrap.json` 或 `package-lock.json`，npm 也会更新这些文件。

`--no-save` 会告诉 npm 不要从你的 `package.json`、`npm-shrinkwrap.json` 或 `package-lock.json` 文件中删除包。

`--save` 或 `-S` 将告诉 npm 从你的 `package.json`、`npm-shrinkwrap.json` 和 `package-lock.json` 文件中删除该包。这是默认设置，但如果你的 `npmrc` 文件中有例如 `save=false`，你可能需要使用它

在全局模式下（即，将 `-g` 或 `--global` 附加到命令中），它将当前包上下文作为全局包卸载。在这种情况下，`--no-save` 被忽略。

范围是可选的，并遵循 [`scope`](https://npm.nodejs.cn/cli/v11/using-npm/scope) 的通常规则。

## 示例

```bash
npm uninstall sax
```

`sax` 将不再出现在你的 `package.json`、`npm-shrinkwrap.json` 或 `package-lock.json` 文件中。

```bash
npm uninstall lodash --no-save
```

`lodash` 不会从你的 `package.json`、`npm-shrinkwrap.json` 或 `package-lock.json` 文件中删除。

## 配置

### `save`

- 默认值：`true` 除非在使用 `npm update` 时默认为 `false`
- 类型：布尔值

将已安装的包作为依赖保存到 `package.json` 文件中。

与 `npm rm` 命令一起使用时，从 `package.json` 中删除依赖。

如果设置为 `false`，也会阻止写入 `package-lock.json`。

### `global`

- 默认值：false
- 类型：布尔值

在 "global" 模式下运行，以便将包安装到 `prefix` 文件夹而不是当前工作目录。有关行为差异的更多信息，请参见 [文件夹](https://npm.nodejs.cn/cli/v11/configuring-npm/folders)。

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`

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
