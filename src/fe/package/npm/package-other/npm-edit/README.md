---
title: npm edit
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm edit <pkg>[/<subpkg>...]
```

注意：此命令对工作区无感知。

## 描述

在当前项目中选择一个依赖并在默认编辑器中打开包文件夹（或你配置为 npm `editor` 配置的任何内容 - 参见 [`npm-config`](https://npm.nodejs.cn/npm-config)。）

在它被编辑之后，包被重新构建，以便获取编译包中的任何更改。

例如，你可以执行 `npm install connect` 将连接安装到你的包中，然后执行 `npm edit connect` 对本地安装的副本进行一些更改。

## 配置

¥Configuration

### `editor`

- 默认值：EDITOR 或 VISUAL 环境变量，或 Windows 上的 '%SYSTEMROOT%\notepad.exe'，或 Unix 系统上的 'vi'
- 类型：字符串

为 `npm edit` 和 `npm config edit` 运行的命令。
