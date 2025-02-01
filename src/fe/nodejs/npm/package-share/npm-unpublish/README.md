---
title: npm unpublish
article: false
dir:
  collapsible: true
  link: true
---

:::tabs

@tab 官方-DOC

## 概要

```bash
npm unpublish [<package-spec>]
```

要了解有关 npm 注册表如何处理取消发布的更多信息，请参阅我们的 [取消发布政策]。

## 警告

如果你的目的是鼓励用户升级，或者你不再想维护一个包，请考虑使用 [`deprecate`] 命令。

## 描述

这将从注册表中删除包版本，删除其条目并删除 tarball。

如果你不是 [登录]，npm 注册表会返回错误。

如果你根本不指定包名称，则将从当前目录的项目中拉取要取消发布的名称和版本。

如果指定包名称但未指定版本，或者删除包的所有版本，则注册表将完全删除根包条目。

即使你取消发布包版本，该特定名称和版本组合也永远无法重复使用。为了再次发布包，你必须使用新的版本号。如果你取消发布整个包，则在 24 小时过去之前，你不得发布该包的任何新版本。

## 配置

### `dry-run`

- 默认值：false
- 类型：布尔值

表示你不希望 npm 进行任何更改，并且它应该只报告它会做的事情。这可以传递到任何修改本地安装的命令中，例如 `install`、`update`、`dedupe`、`uninstall` 以及 `pack` 和 `publish`。

注意：其他网络相关命令不支持此功能，例如 `dist-tags`、`owner` 等。

### `force`

- 默认值：false
- 类型：布尔值

删除了针对不幸的副作用、常见错误、不必要的性能下降和恶意输入的各种保护。

- 允许在全局安装中破坏非 npm 文件。
- 允许 `npm version` 命令在不干净的 git 存储库上工作。
- 允许使用 `npm cache clean` 删除缓存文件夹。
- 允许安装具有 `engines` 声明需要不同版本的 npm 的包。
- 允许安装具有 `engines` 声明需要不同版本 `node` 的包，即使启用了 `--engine-strict`。
- 允许 `npm audit fix` 安装超出你声明的依赖范围的模块（包括 SemVer 的主要更改）。
- 允许取消发布已发布包的所有版本。
- 允许在根项目中安装冲突的 peerDependencies。
- 在 `npm init` 时隐式设置 `--yes`。
- 允许破坏 `npm pkg` 中的现有值
- 允许取消发布整个包（不仅仅是单个版本）。

如果你对自己想要做什么没有明确的想法，强烈建议你不要使用此选项！

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

@tab AI-DOC

`npm unpublish` 是 npm 提供的一个命令，允许包的发布者从 npm 注册表中撤销已发布的包或特定版本。这个命令对于纠正错误、移除不再需要的包或处理其他特殊情况非常有用。然而，使用 `npm unpublish` 时需要谨慎，因为它会影响到依赖该包的其他项目。

### 功能概述

`npm unpublish` 的主要功能是：

- **撤销整个包**：从 npm 注册表中完全移除一个包及其所有版本。
- **撤销特定版本**：仅从 npm 注册表中移除包的某个特定版本。
- **保护用户和生态系统**：通过限制撤销操作的时间窗口（通常是72小时），防止滥用此功能导致生态系统不稳定。

### 使用方法

#### 撤销整个包

要从 npm 注册表中撤销整个包，可以在命令行中运行以下命令：

```bash
npm unpublish <package-name>
```

例如，如果你想撤销名为 `my-package` 的包，可以运行：

```bash
npm unpublish my-package
```

请注意，撤销整个包是一个不可逆的操作，应该非常谨慎地使用。

#### 撤销特定版本

要从 npm 注册表中撤销包的某个特定版本，可以在命令后加上版本号：

```bash
npm unpublish <package-name>@<version>
```

例如，如果你想撤销 `my-package` 包的 `1.0.0` 版本，可以运行：

```bash
npm unpublish my-package@1.0.0
```

#### 强制撤销（不推荐）

如果你确实需要撤销超过72小时的版本，可以通过添加 `--force` 参数来强制执行。但请务必慎重考虑，因为这可能会对依赖该版本的其他项目造成影响：

```bash
npm unpublish <package-name>@<version> --force
```

### 注意事项

- **时间限制**：根据 npm 的政策，默认情况下只能撤销过去72小时内发布的版本。这是为了防止频繁更改破坏生态系统的稳定性。
- **需要登录**：要使用 `npm unpublish` 命令，你需要先登录到 npm。可以通过 `npm login` 命令进行登录。
  
  ```bash
  npm login
  ```

- **权限问题**：确保你有足够的权限来撤销包或其版本。通常只有包的所有者或具有相应权限的团队成员才能执行此操作。
- **网络连接**：`npm unpublish` 需要访问互联网来与 npm 注册表交互，请确保有稳定的网络连接。
- **谨慎使用**：撤销包或版本可能会影响依赖它的其他项目，因此在执行此操作之前，请确保已经充分评估了潜在的影响，并通知相关方。

### 实际应用场景

1. **纠正错误**：如果发布的包或版本存在严重错误，可以通过 `npm unpublish` 快速撤销，然后发布修正后的版本。
2. **移除不再需要的包**：如果有包不再维护或不再需要，可以考虑使用 `npm unpublish` 将其从注册表中移除。
3. **处理特殊事件**：如发现安全漏洞或其他紧急情况时，可能需要立即撤销受影响的包或版本。

### 示例

假设你有一个名为 `my-package` 的包，并且需要撤销某些版本或整个包：

1. **撤销整个包**：
   ```bash
   npm unpublish my-package
   ```

2. **撤销特定版本**：
   ```bash
   npm unpublish my-package@1.0.0
   ```

3. **强制撤销（不推荐）**：
   ```bash
   npm unpublish my-package@1.0.0 --force
   ```

4. **撤销并发布新版本**：
   - 撤销有问题的版本：
     ```bash
     npm unpublish my-package@1.0.0
     ```
   - 发布修正后的版本：
     ```bash
     npm publish
     ```

### 总结

`npm unpublish` 是一个强大但需谨慎使用的命令，它帮助你从 npm 注册表中撤销已发布的包或特定版本。通过合理利用这个命令，你可以显著提升包的安全性和管理效率，确保能够及时纠正错误或处理特殊情况。无论是进行日常维护还是应对紧急事件，掌握 `npm unpublish` 的使用都能让你更加自信和高效地管理工作流程。

### 进一步阅读

如果你想要了解更多关于 `npm unpublish` 的高级用法和技术细节，建议查阅 npm 官方文档和其他相关资源。此外，了解如何结合 CI/CD 流程和自动化脚本来优化包管理和发布过程也是一个重要的步骤，以确保开发和发布的流程尽可能顺畅。

### 相关资源

- [NPM Official Documentation on npm-unpublish](https://docs.npmjs.com/cli/v8/commands/npm-unpublish)
- [Understanding npm unpublish and Its Implications](https://blog.logrocket.com/understanding-npm-unpublish-and-its-implications/)
- [Best Practices for Managing Packages with npm](https://www.freecodecamp.org/news/best-practices-for-managing-packages-with-npm/)

:::
