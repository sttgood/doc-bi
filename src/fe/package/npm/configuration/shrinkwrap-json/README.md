---
title: shrinkwrap.json
article: false
dir:
  link: true
---

## 描述

`npm-shrinkwrap.json` 是 [`npm shrinkwrap`](https://npm.nodejs.cn/cli/v11/commands/npm-shrinkwrap) 创建的文件。它与 `package-lock.json` 相同，但有一个主要警告：与 `package-lock.json` 不同，发布包时可能会包含 `npm-shrinkwrap.json`。

`npm-shrinkwrap.json` 的推荐用例是通过注册表上的发布过程部署的应用：例如，用于全局安装或 `devDependencies` 的守护进程和命令行工具。强烈建议库作者发布此文件，因为这会阻止终端用户控制传递依赖更新。

如果 `package-lock.json` 和 `npm-shrinkwrap.json` 都存在于包根目录中，则 `npm-shrinkwrap.json` 将优先于 `package-lock.json` 文件。

有关 `npm-shrinkwrap.json` 文件格式的完整详细信息和说明，请参阅 [package-lock.json](https://npm.nodejs.cn/cli/v11/configuring-npm/package-lock-json) 的手册页。
