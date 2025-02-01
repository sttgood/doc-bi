---
title: npm ci
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm ci
aliases: clean-install, ic, install-clean, isntall-clean
```

## 描述

此命令与 [`npm install`](https://npm.nodejs.cn/cli/v11/commands/npm-install) 类似，不同之处在于它旨在用于自动化环境，例如测试平台、持续集成和部署 - 或任何你希望确保对依赖进行全新安装的情况。

使用 `npm install` 和 `npm ci` 的主要区别是：

- 该项目必须具有现有的 `package-lock.json` 或 `npm-shrinkwrap.json`。
- 如果包锁中的依赖与 `package.json` 中的依赖不匹配，`npm ci` 将退出并出错，而不是更新包锁。
- `npm ci` 一次只能安装整个项目：不能使用此命令添加单个依赖。
- 如果 `node_modules` 已经存在，它将在 `npm ci` 开始安装之前自动删除。
- 它永远不会写入 `package.json` 或任何包锁：安装基本上被冻结了。

注意：如果你通过运行带有可能影响依赖树形状的标志（例如 `--legacy-peer-deps` 或 `--install-links`）的 `npm install` 创建 `package-lock.json` 文件，则必须为 `npm ci` 提供相同的标志，否则你可能会遇到错误。一个简单的方法是运行例如 `npm config set legacy-peer-deps=true --location=project` 并将 `.npmrc` 文件提交到你的 repo。

## 示例

¥Example

确保你有一个包锁和一个最新的安装：



```bash
$ cd ./my/npm/project
$ npm install
added 154 packages in 10s
$ ls | grep package-lock
```

在该项目中运行 `npm ci`

¥Run `npm ci` in that project



```bash
$ npm ci
added 154 packages in 5s
```

将 Travis CI 配置为使用 `npm ci` 而不是 `npm install` 构建：



```bash
# .travis.yml
install:
- npm ci
# keep the npm cache around to speed up installs
cache:
  directories:
  - "$HOME/.npm"
```

## 配置

### `install-strategy`

- 默认值："hoisted"
- 类型："hoisted"、"nested"、"shallow" 或 "linked"

设置在 node_modules 中安装包的策略。提升（默认）：在顶层安装非复制，并在目录结构中根据需要复制。nested:（以前的 --legacy-bundling）就地安装，无需提升。浅层（以前的 --global-style）只在顶层安装直接的 deps。linked:（实验）安装在 node_modules/.store 中，链接到位，未提升。

### `legacy-bundling`

- 默认值：false
- 类型：布尔值
- DEPRECATED:此选项已被 `--install-strategy=nested` 弃用

不要在 `node_modules` 中提升包安装，而是以与它们所依赖的方式相同的方式安装包。这可能会导致非常深的目录结构和重复的软件包安装，因为没有数据去重。设置 `--install-strategy=nested`。



### `global-style`

- 默认值：false
- 类型：布尔值
- DEPRECATED:此选项已被 `--install-strategy=shallow` 弃用

仅在顶层 `node_modules` 中安装直接依赖，但提升更深层次的依赖。设置 `--install-strategy=shallow`。



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



### `strict-peer-deps`

- 默认值：false
- 类型：布尔值

如果设置为 `true`，而 `--legacy-peer-deps` 没有设置，那么任何冲突的 `peerDependencies` 都将被视为安装失败，即使 npm 可以根据非对等依赖合理地猜测出适当的解决方案。

默认情况下，依赖图中的冲突 `peerDependencies` 将使用最近的非对等依赖规范来解决，即使这样做会导致某些包收到超出其包的 `peerDependencies` 对象中设置的范围的对等依赖。

当执行这样的覆盖时，会打印一条警告，解释冲突和涉及的包。如果设置了 `--strict-peer-deps`，则此警告被视为失败。



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



### `audit`

- 默认值：true
- 类型：布尔值

当 "true" 将审计报告与当前 npm 命令一起提交到默认注册表和为范围配置的所有注册表时。有关提交内容的详细信息，请参阅 [`npm audit`](https://npm.nodejs.cn/cli/v11/commands/npm-audit) 的文档。



### `bin-links`

- 默认值：true
- 类型：布尔值

告诉 npm 为包的可执行文件创建符号链接（或 Windows 上的 `.cmd` 垫片）。

设置为 false 使其不执行此操作。这可以用来解决某些文件系统不支持符号链接的事实，即使在表面上是 Unix 系统上也是如此。



### `fund`

- 默认值：true
- 类型：布尔值

当 "true" 在每个 `npm install` 的末尾显示消息时，确认正在寻找资金的依赖的数量。详见 [`npm fund`](https://npm.nodejs.cn/cli/v11/commands/npm-fund)。



### `dry-run`

- 默认值：false
- 类型：布尔值

表示你不希望 npm 进行任何更改，并且它应该只报告它会做的事情。这可以传递到任何修改本地安装的命令中，例如 `install`、`update`、`dedupe`、`uninstall` 以及 `pack` 和 `publish`。

注意：其他网络相关命令不支持此功能，例如 `dist-tags`、`owner` 等。



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
