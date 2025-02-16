---
title: npm outdated
article: false
order: 4
---

## 概要

```bash
npm outdated [<package-spec> ...]
```

## 描述

此命令将检查注册表以查看当前是否有任何（或特定）已安装的包已过时。

默认情况下，仅显示根项目的直接依赖和配置的工作区的直接依赖。也可以使用 `--all` 查找所有过时的元依赖。

在输出中：

- `wanted` 是满足 `package.json` 中指定的 semver 范围的包的最大版本。如果没有可用的 semver 范围（即你正在运行 `npm outdated --global`，或者该包未包含在 `package.json` 中），则 `wanted` 显示当前安装的版本。
- `latest` 是在注册表中标记为最新的包的版本。在没有特殊配置的情况下运行 `npm publish` 将发布带有 `latest` 的 dist-tag 的包。这可能是也可能不是包的最高版本，或者是最近发布的包版本，这取决于包的开发者如何管理最新的 [dist-tag]。
- `location` 是包在物理树中的位置。
- `depended by` 显示哪个包依赖于显示的依赖
- `package type`（使用 `--long` / `-l` 时）告诉你这个包是 `dependency` 还是 dev/peer/optional 依赖。未包含在 `package.json` 中的包始终标记为 `dependencies`。
- `homepage`（使用 `--long` / `-l` 时）是包的包中包含的 `homepage` 值
- 红色表示有更新的版本符合你的 semver 要求，因此你应该立即更新。
- 黄色表示有高于你的 semver 要求的较新版本（通常是新的主要版本或新的 0.x 次要版本），因此请谨慎操作。



## 示例

```bash
$ npm outdated
Package      Current   Wanted   Latest  Location                  Depended by
glob          5.0.15   5.0.15    6.0.1  node_modules/glob         dependent-package-name
nothingness    0.0.3      git      git  node_modules/nothingness  dependent-package-name
npm            3.5.1    3.5.2    3.5.1  node_modules/npm          dependent-package-name
local-dev      0.0.3   linked   linked  local-dev                 dependent-package-name
once           1.3.2    1.3.3    1.3.3  node_modules/once         dependent-package-name
```

有了这些 `dependencies`：

```json
{
  "glob": "^5.0.15",
  "nothingness": "github:othiym23/nothingness#master",
  "npm": "^3.5.1",
  "once": "^1.3.1"
}
```

需要注意的几点：

- `glob` 需要 `^5`，这会阻止 npm 安装超出 semver 范围的 `glob@6`。
- Git 依赖总是会被重新安装，因为它们是如何指定的。安装的 committish 可能满足依赖说明符（如果它是不可变的，例如提交 SHA），也可能不满足，因此 `npm outdated` 和 `npm update` 必须获取 Git 存储库进行检查。这就是为什么当前重新安装 Git 依赖总是会强制进行新的克隆和安装。
- `npm@3.5.2` 被标记为 "wanted"，但是 "latest" 是 `npm@3.5.1`，因为 npm 使用 dist-tags 来管理它的 `latest` 和 `next` 发布通道。`npm update` 将安装最新版本，但 `npm install npm`（没有 semver 范围）将安装标记为 `latest` 的任何内容。
- `once` 已经过时了。从头开始重新安装 `node_modules` 或运行 `npm update` 将使其符合规范。

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
