---
title: npm publish
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm publish <package-spec>
```

## 描述

将包发布到注册表，以便可以按名称安装。

默认情况下，npm 将发布到公共注册表。这可以通过指定不同的默认注册表或在名称中使用 [`scope`]）来覆盖。

`package` 的解释方式与其他命令（如 `npm install`）相同，可以是：

- a) 包含由 `package.json` 文件描述的程序的文件夹
- b) 一个 gzipped tarball，包含 (a)
- c) 解析为 (b) 的 url
- d) 在注册表上发布的 `<name>@<version>`（参见 `registry`），带有 (c)
- e) 指向 (d) 的 `<name>@<tag>`（见 [`npm dist-tag`）
- f) 具有满足 (e) 的 "latest" 标签的 `<name>`
- g) 解决为 (a) 的 `<git remote url>`

如果指定注册表中已存在包名称和版本组合，则发布将失败。

一旦使用给定名称和版本发布了一个包，该特定名称和版本组合将永远无法再次使用，即使它已被 [`npm unpublish`] 删除。

从 `npm@5` 开始，在发布期间，将在发布期间将 sha1sum 和带有 sha512sum 的完整性字段提交给注册表。后续安装将使用支持的最强算法来验证下载。

与 `--dry-run` 类似，参见 `npm pack`，它计算出要包含的文件并将它们打包到一个 tarball 中以上传到注册表。

## 包中包含的文件

要查看将包含在你的包中的内容，请运行 `npm pack --dry-run`。默认情况下包含所有文件，但以下情况除外：

- 始终包含与包安装和分发相关的某些文件。例如，`package.json`、`README.md`、`LICENSE` 等。

- 如果 `package.json` 中有 "files" 列表，则仅包含指定的文件。（如果指定了目录，那么它们将被递归遍历并包含它们的内容，遵循相同的忽略规则。）

- 如果有 `.gitignore` 或 `.npmignore` 文件，则其中被忽略的文件和所有子目录都将从包中排除。如果两个文件都存在，则忽略 `.gitignore`，只使用 `.npmignore`。

  `.npmignore` 文件跟随 [相同的模式规则] 为 `.gitignore` 文件

- 如果文件与某些模式匹配，则永远不会包含它，除非明确添加到 `package.json` 中的 `"files"` 列表中，或者在 `.npmignore` 或 `.gitignore` 文件中使用 `!` 规则取消忽略。

- 符号链接从不包含在 npm 包中。

有关已发布包中包含的内容以及如何构建包的详细信息，请参阅 `developers`。

有关可以和不能忽略的内容的更多信息，请参阅 `package.json`。

## 配置

### `tag`

- 默认值："latest"
- 类型：字符串

如果你让 npm 安装一个包并且没有告诉它一个特定的版本，那么它会安装指定的标签。

如果没有给出明确的标签，它是添加到 `npm dist-tag add` 命令中指定的 package@version 的标签。

当被 `npm diff` 命令使用时，这是用于获取 tarball 的标签，默认情况下将与本地文件进行比较。

如果在 `npm publish` 命令中使用，这是将添加到提交到注册表的包的标签。

### `access`

- 默认值：'public' 用于新包，现有包不会改变当前级别
- 类型：空值、"restricted" 或 "public"

如果你不希望你的范围包公开可见（和可安装），请设置 `--access=restricted`。

无范围的包不能设置为 `restricted`。

注意：这默认为不更改现有包的当前访问级别。在发布期间指定值 `restricted` 或 `public` 将更改对现有包的访问权限，就像 `npm access set status` 一样。

### `dry-run`

- 默认值：false
- 类型：布尔值

表示你不希望 npm 进行任何更改，并且它应该只报告它会做的事情。这可以传递到任何修改本地安装的命令中，例如 `install`、`update`、`dedupe`、`uninstall` 以及 `pack` 和 `publish`。

注意：其他网络相关命令不支持此功能，例如 `dist-tags`、`owner` 等。

### `otp`

- 默认值：null
- 类型：空值或字符串

这是来自双重身份验证器的一次性密码。使用 `npm access` 发布或更改包权限时需要它。

如果未设置，并且注册表响应失败并询问一次性密码，npm 将在命令行上提示输入一次密码。

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

### `provenance`

- 默认值：false
- 类型：布尔值

从受支持的云 CI/CD 系统发布时，包将公开链接到它的构建和发布位置。

此配置不能用于：`provenance-file`

### `provenance-file`

- 默认值：nul
- 类型：路径

发布时，将使用给定路径的出处包。

此配置不能用于：`provenance`
