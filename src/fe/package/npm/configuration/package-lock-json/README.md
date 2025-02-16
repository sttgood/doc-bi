---
title: package-lock.json
article: false
dir:
  link: true
---

## 描述

对于 npm 修改 `node_modules` 树或 `package.json` 的任何操作，都会自动生成 `package-lock.json`。它描述了生成的确切树，以便后续安装能够生成相同的树，而不管中间依赖更新如何。

该文件旨在提交到源存储库中，并用于各种目的：

- 描述依赖树的单一表示，以保证团队成员、部署和持续集成安装完全相同的依赖。
- 为 "time-travel" 的用户提供一种工具，使其无需提交目录本身即可进入 `node_modules` 的先前状态。
- 通过可读的源代码控制差异促进树变化的更大可见性。
- 通过允许 npm 跳过以前安装的包的重复元数据解析来优化安装过程。
- 从 npm v7 开始，lockfiles 包含足够的信息来获得包树的完整图片，减少了读取 `package.json` 文件的需要，并允许显着提高性能。

当 `npm` 创建或更新 `package-lock.json` 时，它将从 `package.json` 推断行结尾和缩进，以便两个文件的格式匹配。

## `package-lock.json` 与 `npm-shrinkwrap.json`

这两个文件具有相同的格式，并且在项目的根目录中执行类似的功能。

不同的是，`package-lock.json` 不能发布，如果在根项目以外的任何地方发现都会被忽略。

相反，[npm-shrinkwrap.json] 允许发布，并从遇到的点定义依赖树。除非部署 CLI 工具或以其他方式使用发布过程来生成生产包，否则不建议这样做。

如果项目的根目录中同时存在 `package-lock.json` 和 `npm-shrinkwrap.json`，则 `npm-shrinkwrap.json` 将优先，而 `package-lock.json` 将被忽略。

## 隐藏的锁文件

为了避免重复处理 `node_modules` 文件夹，从 v7 开始的 npm 使用 `node_modules/.package-lock.json` 中存在的 "hidden" 锁定文件。这包含有关树的信息，如果满足以下条件，则用于代替读取整个 `node_modules` 层次结构：

- 它引用的所有包文件夹都存在于 `node_modules` 层次结构中。
- `node_modules` 层次结构中不存在未在锁定文件中列出的包文件夹。
- 文件的修改时间至少与它引用的所有包文件夹一样新。

也就是说，隐藏的锁定文件只有在作为最新更新包树的一部分创建时才相关。如果另一个 CLI 以任何方式改变了树，这将被检测到，并且隐藏的锁定文件将被忽略。

请注意，可以手动更改包的内容，使包文件夹的修改时间不受影响。例如，如果你将文件添加到 `node_modules/foo/lib/bar.js`，那么 `node_modules/foo` 上的修改时间将不会反映此更改。如果是手动编辑 `node_modules` 中的文件，一般最好删除 `node_modules/.package-lock.json` 中的文件。

由于较旧的 npm 版本忽略了隐藏的锁定文件，因此它不包含 "normal" 锁定文件中存在的向后兼容性功能。也就是说，它是 `lockfileVersion: 3`，而不是 `lockfileVersion: 2`。

## 处理旧的锁文件

当 npm 在包安装过程中检测到来自 npm v6 或更早版本的锁文件时，它会自动更新以从 `node_modules` 树或（在空 `node_modules` 树或非常旧的锁文件格式的情况下）npm 注册表中获取缺失的信息。

## 文件格式

### `name`

这是一个包锁的包的名称。这将匹配 `package.json` 中的内容。

### `version`

这是包锁定的包的版本。这将匹配 `package.json` 中的内容。

### `lockfileVersion`

一个整数版本，从 `1` 开始，带有此文档的版本号，其语义在生成此 `package-lock.json` 时使用。

请注意，npm v7 中的文件格式发生了显着变化，以跟踪原本需要在 `node_modules` 或 npm 注册表中查找的信息。npm v7 生成的锁文件将包含 `lockfileVersion: 2`。

- 没有提供版本：来自 npm v5 之前的 npm 版本的 "ancient" shrinkwrap 文件。
- `1`：npm v5 和 v6 使用的 lockfile 版本。
- `2`：npm v7 和 v8 使用的锁文件版本。向后兼容 v1 锁文件。
- `3`：npm v9 及以上版本使用的锁文件版本。向后兼容 npm v7。

npm 将始终尝试从锁定文件中获取任何数据，即使它不是它旨在支持的版本。

### `packages`

这是一个将包位置映射到包含该包信息的对象的对象。

根项目通常使用 `""` 键列出，所有其他包都列出了它们在根项目文件夹中的相对路径。

包描述符具有以下字段：

- version:`package.json` 中找到的版本
- resolved:实际解析包的地方。对于从注册表中获取的包，这将是一个 tarball 的 url。在 git 依赖的情况下，这将是带有提交 sha 的完整 git url。在链接依赖的情况下，这将是链接目标的位置。`registry.npmjs.org` 是一个神奇的值，意思是 "当前配置的注册表"。
- integrity:在此位置解压缩的工件的 `sha512` 或 `sha1` [标准子资源完整性] 字符串。
- link:一个标志，表明这是一个符号链接。如果存在，则不指定其他字段，因为链接目标也将包含在锁定文件中。
- dev, optional, devOptional:如果包严格属于 `devDependencies` 树，则 `dev` 为真。如果它严格属于 `optionalDependencies` 树，则设置 `optional`。如果它既是 `dev` 依赖又是非开发依赖的 `optional` 依赖，则将设置 `devOptional`。（`dev` 依赖的 `optional` 依赖将同时设置 `dev` 和 `optional`。）
- inBundle:指示包是打包依赖的标志。
- hasInstallScript:指示包具有 `preinstall`、`install` 或 `postinstall` 脚本的标志。
- hasShrinkwrap:指示包具有 `npm-shrinkwrap.json` 文件的标志。
- bin、许可证、引擎、依赖、可选依赖：来自 `package.json` 的字段

### dependencies

支持使用 `lockfileVersion: 1` 的 npm 版本的旧数据。这是包名称到依赖对象的映射。因为对象结构是严格分层的，所以在某些情况下，符号链接依赖很难表示。

如果存在 `packages` 部分，npm v7 会完全忽略此部分，但会保持更新以支持在 npm v6 和 npm v7 之间切换。

依赖对象具有以下字段：

- version:根据包的性质而变化的说明符，可用于获取它的新副本。
  - 打包的依赖：无论来源如何，这是一个纯粹用于提供信息的版本号。
  - 注册表来源：这是一个版本号。（例如，`1.2.3`）
  - git 来源：这是一个带有已解决提交的 git 说明符。（例如，`git+https://example.com/foo/bar#115311855adb0789a0466714ed48a1499ffea97e`）
  - http 压缩包来源：这是压缩包的 URL。（例如，`https://example.com/example-1.3.0.tgz`）
  - 本地压缩包来源：这是 tarball 的文件 URL。（例如 `file:///opt/storage/example-1.3.0.tgz`）
  - 本地链接来源：这是链接的文件 URL。（例如 `file:libs/our-module`）
- integrity:在此位置解压缩的工件的 `sha512` 或 `sha1` [标准子资源完整性] 字符串。对于 git 依赖，这是提交 sha。
- resolved:对于注册表源，这是 tarball 相对于注册表 URL 的路径。如果 tarball URL 与注册表 URL 不在同一台服务器上，那么这是一个完整的 URL。`registry.npmjs.org` 是一个神奇的值，意思是 "当前配置的注册表"。
- bundled:如果为 true，则这是打包的依赖，将由父模块安装。安装时，此模块将在提取阶段从父模块中提取，而不是作为单独的依赖安装。
- dev:如果为真，则此依赖要么是仅顶层模块的开发依赖，要么是一个传递依赖。这对于既是顶层的开发依赖又是顶层非开发依赖的传递依赖的依赖是错误的。
- optional:如果为真，则此依赖要么是仅顶层模块的可选依赖，要么是一个传递依赖。对于既是顶层的可选依赖又是顶层非可选依赖的传递依赖的依赖，这是错误的。
- requires:这是模块名称到版本的映射。这是这个模块需要的所有东西的列表，不管它安装在哪里。版本应该通过正常的匹配规则匹配我们 `dependencies` 或高于我们级别的依赖。
- dependencies:此依赖的依赖，与顶层完全一样。
