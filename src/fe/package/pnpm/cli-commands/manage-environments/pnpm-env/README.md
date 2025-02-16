---
title: pnpm env <cmd>
article: false
dir:
  order: 1
  link: true
---

```bash
pnpm env <cmd>
```

管理 Node.js 环境。

:::warning

`pnpm env` 不包含 Corepack 的二进制文件。 如果您想使用 Corepack 安装其他包管理器，则需要单独安装（例如`pnpm add -g corepack`）。

:::

## 命令

### use

安装并使用指定版本的 Node.js

安装 Node.js 的 LTS 版本：

```text
pnpm env use --global lts
```



安装 Node.js v16：

```text
pnpm env use --global 16
```



安装 Node.js 的预发布版本：

```text
pnpm env use --global nightly
pnpm env use --global rc
pnpm env use --global 16.0.0-rc.0
pnpm env use --global rc/14
```



安装最新版本的 Node.js：

```text
pnpm env use --global latest
```



使用其 [代号](https://github.com/nodejs/Release/blob/main/CODENAMES.md) 安装 Node.js 的 LTS 版本：

```text
pnpm env use --global argon
```



### add

安装指定版本的 Node.js，而不将其激活为当前版本。

示例：

```text
pnpm env add --global lts 18 20.0.1
```



### remove, rm

移除指定版本的 Node.js。

用法示例：

```text
pnpm env remove --global 14.0.0
pnpm env remove --global 14.0.0 16.2.3
```



### list, ls

列出本地或远程可用的 Node.js 版本。

打印本地安装的版本：

```text
pnpm env list
```



打印远程可用的 Node.js 版本：

```text
pnpm env list --remote
```



打印远程可用的 Node.js v16 版本：

```text
pnpm env list --remote 16
```



## 配置项

### --global, -g

这些更改是全系统范围的。