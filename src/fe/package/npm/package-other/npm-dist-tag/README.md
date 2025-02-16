---
title: npm dist-tag
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm dist-tag add <package-spec (with version)> [<tag>]npm dist-tag rm <package-spec> <tag>npm dist-tag ls [<package-spec>]
alias: dist-tags
```

## 描述

在包上添加、删除和枚举分发标签：

- add:使用指定的标记标记指定版本的包，如果没有指定，则标记为 [`--tag` 配置](https://npm.nodejs.cn/cli/v11/using-npm/config#tag)。如果你在 auth-and-writes 上有双重身份验证，那么你需要在命令行中使用 `--otp <one-time password>` 包含一次性密码，或者通过基于你的 `authtype` 的第二重流程。
- rm:清除封装中不再使用的标签。如果你在 auth-and-writes 上有双重身份验证，那么你需要在命令行中使用 `--otp <one-time password>` 包含一次性密码，或者通过基于你的 `authtype` 的第二重流程
- ls:显示包的所有 dist-tags，默认为当前前缀中的包。如果未指定，则这是默认操作。

安装包时可以使用标记作为对版本的引用，而不是使用特定的版本号：

```bash
npm install <name>@<tag>
```

安装依赖时，可以指定首选标记版本：

```bash
npm install --tag <tag>
```

（这也适用于解析和安装依赖的任何其他命令，例如 `npm dedupe`、`npm update` 和 `npm audit fix`。）

除非使用 `--tag` 选项，否则发布包会将 `latest` 标记设置为已发布版本。例如，`npm publish --tag=beta`。

默认情况下，`npm install <pkg>`（没有任何 `@<version>` 或 `@<tag>` 说明符）安装 `latest` 标签。

## 目的

标签可用于提供别名而不是版本号。

例如，一个项目可能选择有多个开发流并为每个流使用不同的标签，例如，`stable`、`beta`、`dev`、`canary`。

默认情况下，npm 使用 `latest` 标签来标识包的当前版本，而 `npm install <pkg>`（没有任何 `@<version>` 或 `@<tag>` 说明符）安装 `latest` 标签。通常，项目只使用 `latest` 标签表示稳定版本，而使用其他标签表示不稳定版本，例如 prereleases。

一些项目使用 `next` 标签来标识即将发布的版本。

除了 `latest`，没有任何标签对 npm 本身有任何特殊意义。

## 注意事项

该命令以前称为 `npm tag`，它只创建新标签，因此具有不同的语法。

标签必须与版本号共享一个命名空间，因为它们是在同一个插槽中指定的：`npm install <pkg>@<version>` 对 `npm install <pkg>@<tag>`。

可以解释为有效 semver 范围的标签将被拒绝。例如，`v1.4` 不能用作标签，因为它被 semver 解释为 `>=1.4.0 <1.5.0`。

避免标签出现语义问题的最简单方法是使用不以数字或字母 `v` 开头的标签。

## 配置

### `workspace`

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
