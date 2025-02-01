---
title: pnpm add
article: false
dir:
  order: 1
  link: true
---

```bash
pnpm add <pkg>
```

安装软件包及其依赖的任何软件包。 默认情况下，任何新软件包都被安装为生产依赖项。

## 摘要：

| 命令                 | 含义                          |
| -------------------- | ----------------------------- |
| `pnpm add sax`       | 保存到 `dependencies`         |
| `pnpm add -D sax`    | 保存到 `devDependencies`      |
| `pnpm add -O sax`    | 保存到 `optionalDependencies` |
| `pnpm add -g sax`    | 安装全局依赖                  |
| `pnpm add sax@next`  | 安装 `next` 标签的版本        |
| `pnpm add sax@3.0.0` | 指定 `3.0.0` 版本             |

## 支持的包地址

### 从 npm 注册源安装

`pnpm add package-name` 默认会从 [npm 源]安装 `package-name` 的最新版本。

如果在工作空间中执行，该命令将首先去检查这个工作空间中的其他项目是否已经使用了这个指定的包。 如果是，已经使用过的版本范围将被安装。

你还可以通过以下方式安装包：

- 标签：`pnpm add express@nightly`
- 版本：`pnpm addexpress@1.0.0`
- 版本范围：`pnpm add express@2 react@">=0.1.0 <0.2.0"`

### 从工作空间安装

请注意，当添加依赖项并在 [工作区]内工作时，软件包 将从配置的源安装，具体取决于是否设置了 [`link-workspace-packages`] ，以及是否使用 [`workspace:range 指令`]。

### 从本地文件系统安装

有两种方法可以从本地文件系统安装：

1. 从 tarball 文件（`.tar`、`.tar.gz` 或 `.tgz`）
2. 从目录

示例：

```sh
pnpm add ./package.tar.gz
pnpm add ./some-directory
```



当你从目录安装时，会在当前项目的`node_modules` 目录中生成一个符号链接，因此这和执行 `pnpm link` 一致。

### 从远程 tarball 中安装

参数必须是一个可访问的 URL，以 "http://" 或 "https://" 开头。

示例：

```sh
pnpm add https://github.com/indexzero/forever/tarball/v0.5.6
```



### 从 Git 存储库安装

```sh
pnpm add <git remote url>
```



从托管的 Git 提供商安装软件包，并使用 Git 克隆它。

你可以通过以下方式从 Git 安装软件包：

- 来自默认分支的最新提交：

```text
pnpm add kevva/is-positive
```



- Git 提交哈希：

```text
pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678
```



- Git 分支：

```text
pnpm add kevva/is-positive#master
```



- 相对于 refs 的 Git 分支：

```text
pnpm add zkochan/is-negative#heads/canary
```



- Git 标签：

```text
pnpm add zkochan/is-negative#2.0.1
```



- v 前缀的 Git 标签：

```text
pnpm add andreineculau/npm-publish-git#v0.0.7
```



#### 使用语义版本从 Git 存储库安装

你可以使用 `semver:` 参数指定要安装的版本（范围）。 示例：

- 严格的语义版本：

```text
pnpm add zkochan/is-negative#semver:1.0.0
```



- v 前缀的语义版本范围：

```text
pnpm add andreineculau/npm-publish-git#semver:v0.0.7
```



- 语义版本范围：

```text
pnpm add kevva/is-positive#semver:^2.0.0
```



- v 前缀的语义版本范围：

```text
pnpm add andreineculau/npm-publish-git#semver:<=v0.0.7
```



#### 从 Git 存储库的子目录安装

你也可以使用 `path:` 参数从 Git 托管的 monorepo 中仅安装子目录。 例如：

```text
pnpm add RexSkz/test-git-subdir-fetch#path:/packages/simple-react-app
```



#### 通过完整 URL 从 Git 存储库安装

如果你想要更明确或使用其他 Git 托管，你可能需要拼出完整的 Git URL：

```text
# git+ssh
pnpm add git+ssh://git@github.com:zkochan/is-negative.git#2.0.1

# https
pnpm add https://github.com/zkochan/is-negative.git#2.0.1
```



#### 使用托管提供商简写从 Git 存储库安装

你可以使用协议简写 `[provider]:` 来表示某些 Git 提供商：

```text
pnpm add github:zkochan/is-negative
pnpm add bitbucket:pnpmjs/git-resolver
pnpm add gitlab:pnpm/git-resolver
```



如果省略 `[provider]:`，则默认为 `github`:。

#### 结合不同参数从 Git 存储库安装

可以使用 `&` 分隔来组合多个参数。 这对于 monorepo 的分叉是有用的：

```text
pnpm add RexSkz/test-git-subdir-fetch.git#beta&path:/packages/simple-react-app
```



从`beta` 分支安装，并仅安装 `/packages/simple-react-app` 子目录。

## 配置项

### --save-prod, -P

将指定的依赖安装为常规的 `dependencies`。

### --save-dev, -D

将指定的依赖安装为 `devDependencies`。

### --save-optional, -O

将指定的依赖安装为 `optionalDependencies`。

### --save-exact, -E

已保存的依赖项将被配置确切版本，而不是使用 pnpm 的默认语义化版本范围运算符。

### --save-peer

使用 `--save-peer` 会把依赖安装为开发依赖，并添加到 `peerDependencies` 中。

### --ignore-workspace-root-check

除非使用 `--ignore-workspace-root-check` 或 `-W` 标记. 否则在在工作空间根目录下添加依赖项时会失败。

例如：`pnpm add debug -w`.

### --global, -g

全局安装软件包。

### --workspace

仅添加在工作空间中找到的依赖项。

### --filter <package_selector>