---
title: pnpm why
article: false
dir:
  order: 4
  link: true
---

```bash
pnpm why
```

显示依赖于指定包的所有包。

注意

如果依赖关系树的结果（结束叶）超过 10 个，则输出将被截断为 10 个结束叶。

这使得输出更具可读性并避免内存问题。

## 配置项

### --recursive, -r

显示子目录下每个包中指定包的依赖关系树，或在工作空间内执行时显示每个工作空间包中指定包的依赖关系树。

### --json

以 JSON 格式显示信息。

### --long

输出详细信息。

### --parseable

显示可解析的输出而不是树形视图。

### --global, -g

列出全局安装目录中的包而不是当前项目中的包。

### --prod, -P

仅显示在 `dependencies` 中软件包的依赖树。

### --dev, -D

仅显示在 `devDependencies` 中的包依赖关系树。

### --depth \<number\>

仅显示特定深度内的依赖关系。

### --only-projects

仅显示同时也在工作区内的依赖项。

### --exclude-peers

从结果中排除对等依赖关系（但不忽略对等依赖关系的依赖关系）。

### --filter <package_selector>