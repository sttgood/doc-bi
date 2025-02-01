---
title: npm rebuild
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm rebuild [<package-spec>] ...]
alias: rb
```



## 描述

该命令执行以下操作：

1. 执行生命周期脚本（`preinstall`、`install`、`postinstall`、`prepare`）
2. 根据 bin 链接是否启用来链接 bin

该命令在以下场景中特别有用，包括但不限于：

1. 安装新版本的 node.js，你需要使用更新的二进制文件重新编译所有 C++ 附加组件。
2. 使用 `--ignore-scripts` 和 `--no-bin-links` 进行安装，以明确选择要构建和/或链接 bin 的包。

如果提供了一个或多个包规范，则只有名称和版本与其中一个说明符匹配的包才会被重建。

通常，你不需要运行 `npm rebuild`，因为它已经作为 npm install 的一部分为你完成（除非你使用 `--ignore-scripts` 或 `--no-bin-links` 抑制了这些步骤）。

如果包的根目录中有 `binding.gyp` 文件，则 npm 将使用默认安装钩子：



```bash
"scripts": {
    "install": "node-gyp rebuild"
}
```

如果 `package.json` 有自己的 `install` 或 `preinstall` 脚本，则此默认行为将被抑制。如果包指定 `"gypfile": false`，它也会被抑制



## 配置

### `global`

- 默认值：false
- 类型：布尔值

在 "global" 模式下运行，以便将包安装到 `prefix` 文件夹而不是当前工作目录。有关行为差异的更多信息，请参见 文件夹。

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`



### `bin-links`

- 默认值：true
- 类型：布尔值

告诉 npm 为包的可执行文件创建符号链接（或 Windows 上的 `.cmd` 垫片）。

设置为 false 使其不执行此操作。这可以用来解决某些文件系统不支持符号链接的事实，即使在表面上是 Unix 系统上也是如此。



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
