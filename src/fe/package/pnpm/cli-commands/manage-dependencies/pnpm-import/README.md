---
title: pnpm import
article: false
dir:
  order: 7
  link: true
---

# pnpm import

`pnpm import` 从另一个软件包管理器的锁文件生成 `pnpm-lock.yaml`。 支持的源文件：

- `package-lock.json`
- `npm-shrinkwrap.json`
- `yarn.lock`

请注意，如果你有要为其导入依赖项的工作空间，那么在导入之前，你需要在pnpm-workspace.yaml 文件中声明它们。