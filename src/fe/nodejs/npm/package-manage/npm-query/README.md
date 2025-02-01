---
title: npm query
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm query <selector>
```

## 描述

`npm query` 命令允许使用 css 选择器来检索依赖对象数组。

## 管道npm查询到其他命令

```bash
# find all dependencies with postinstall scripts & uninstall them
npm query ":attr(scripts, [postinstall])" | jq 'map(.name)|join("\n")' -r | xargs -I {} npm uninstall {}

# find all git dependencies & explain who requires them
npm query ":type(git)" | jq 'map(.name)' | xargs -I {} npm why {}
```



## 扩展用例和查询

```stylus
// all deps

* 
// all direct deps
:root > *

// direct production deps
:root > .prod

// direct development deps
:root > .dev

// any peer dep of a direct deps
:root > * > .peer

// any workspace dep
.workspace

// all workspaces that depend on another workspace
.workspace > .workspace

// all workspaces that have peer deps
.workspace:has(.peer)

// any dep named "lodash"
// equivalent to [name="lodash"]
#lodash

// any deps named "lodash" & within semver range ^"1.2.3"
#lodash@^1.2.3
// equivalent to...
[name="lodash"]:semver(^1.2.3)

// get the hoisted node for a given semver range
#lodash@^1.2.3:not(:deduped)

// querying deps with a specific version
#lodash@2.1.5
// equivalent to...
[name="lodash"][version="2.1.5"]

// has any deps
:has(*)

// deps with no other deps (ie. "leaf" nodes)
:empty

// manually querying git dependencies
[repository^=github:],
[repository^=git:],
[repository^=https://github.com],
[repository^=http://github.com],
[repository^=https://github.com],
[repository^=+git:...]

// querying for all git dependencies
:type(git)

// get production dependencies that aren't also dev deps
.prod:not(.dev)

// get dependencies with specific licenses
[license=MIT], [license=ISC]

// find all packages that have @ruyadorno as a contributor
:attr(contributors, [email=ruyadorno@github.com])
```



## 示例响应输出

- 返回一个依赖对象数组，其中可以包含同一包的多个副本，这些副本可能已链接或已删除，也可能未链接或数据去重



```json
[
  {
    "name": "",
    "version": "",
    "description": "",
    "homepage": "",
    "bugs": {},
    "author": {},
    "license": {},
    "funding": {},
    "files": [],
    "main": "",
    "browser": "",
    "bin": {},
    "man": [],
    "directories": {},
    "repository": {},
    "scripts": {},
    "config": {},
    "dependencies": {},
    "devDependencies": {},
    "optionalDependencies": {},
    "bundledDependencies": {},
    "peerDependencies": {},
    "peerDependenciesMeta": {},
    "engines": {},
    "os": [],
    "cpu": [],
    "workspaces": {},
    "keywords": [],
    ...
  },
  ...
```

## 期待一定数量的结果

`npm query` 的一个常见用途是确保树中某个依赖只有一个版本。对于像依赖 `typescript` 这样的生态系统来说，这种情况尤其常见，其中状态分散在两个不同但名称相同的包中会导致错误。你可以在设置中使用 `--expect-results` 或 `--expect-result-count`，以确保如果你的树看起来不像你想要的那样，npm 将退出并带有退出代码。

```sh
$ npm query '#react' --expect-result-count=1
```

也许你想快速检查是否有任何可以更新的生产依赖：

```sh
$ npm query ':root>:outdated(in-range).prod' --no-expect-results
```



## 仅包锁定模式

如果启用了 package-lock-only，则仅加载包锁（或收缩封装）中的信息。这意味着依赖的 package.json 文件中的信息将不会包含在结果集中（例如描述、主页、引擎）。



## 配置

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



### `package-lock-only`

- 默认值：false
- 类型：布尔值

如果设置为 true，当前操作将只使用 `package-lock.json`，忽略 `node_modules`。

对于 `update`，这意味着只会更新 `package-lock.json`，而不是检查 `node_modules` 并下载依赖。

对于 `list`，这意味着输出将基于 `package-lock.json` 描述的树，而不是 `node_modules` 的内容。



### `expect-results`

- 默认值：null
- 类型：空值或布尔值

告诉 npm 是否期望该命令的结果。可以为 true（期望一些结果）或 false（期望没有结果）。

此配置不能用于：`expect-result-count`



### `expect-result-count`

- 默认值：null
- 类型：空值或数字

告知期望从命令中得到特定数量的结果。

此配置不能用于：`expect-results`
