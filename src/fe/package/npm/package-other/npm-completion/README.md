---
title: npm completion
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm completion
```

注意：此命令对工作区无感知。

## 描述

在所有 npm 命令中启用制表符补全。

上面的概要将完成加载到你当前的 shell 中。将其添加到你的 ~/.bashrc 或 ~/.zshrc 将使完成在任何地方都可用：

```bash
npm completion >> ~/.bashrc
npm completion >> ~/.zshrc
```

当然，如果你有一个可以为你读取该文件的系统，你当然也可以将 `npm completion` 的输出通过管道传输到诸如 `/usr/local/etc/bash_completion.d/npm` 或 `/etc/bash_completion.d/npm` 之类的文件中。

当环境中定义了 `COMP_CWORD`、`COMP_LINE` 和 `COMP_POINT` 时，`npm completion` 作用于 "管道模式"，并根据参数输出完成。
