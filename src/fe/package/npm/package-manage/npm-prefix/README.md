---
title: npm prefix
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm prefix
```

注意：此命令对工作区无感知。



## 描述

将本地前缀打印到标准输出。这是包含 `package.json` 文件或 `node_modules` 目录的最近父目录，除非还指定了 `-g`。

如果指定了 `-g`，这将是全局前缀的值。有关详细信息，请参见 [`npm config`]。



## 示例

```bash
npm prefix
/usr/local/projects/foo
```



```bash
npm prefix -g
/usr/local
```



## 配置

### `global`

- 默认值：false
- 类型：布尔值

在 "global" 模式下运行，以便将包安装到 `prefix` 文件夹而不是当前工作目录。有关行为差异的更多信息，请参见 [文件夹]。

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`
