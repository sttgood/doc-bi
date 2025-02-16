---
title: npm explore
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm explore <pkg> [ -- <command>]
```

注意：此命令对工作区无感知。

## 描述

在指定的已安装包的目录中生成一个子 shell。

如果指定了命令，则它在子 shell 中运行，然后立即终止。

这在 `node_modules` 文件夹中的 git 子模块的情况下特别方便：



```bash
npm explore some-dependency -- git pull origin master
```

请注意，该包不会在之后自动重建，因此如果你进行任何更改，请务必使用 `npm rebuild <pkg>`。

## 配置

### `shell`

- 默认值：SHELL 环境变量，或 Posix 上的 "bash"，或 Windows 上的 "cmd.exe"
- 类型：字符串

为 `npm explore` 命令运行的 shell。
