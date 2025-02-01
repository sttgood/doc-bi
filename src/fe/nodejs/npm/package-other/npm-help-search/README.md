---
title: npm help-search
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm help-search <text>
```

注意：此命令对工作区无感知。

## 描述

此命令将在 npm markdown 文档文件中搜索提供的术语，然后列出结果，按相关性排序。

如果只找到一个结果，那么它将显示该帮助主题。

如果 `npm help` 的参数不是已知的帮助主题，那么它将调用 `help-search`。很少需要直接调用此命令。

## 配置

### `long`

- 默认值：false
- 类型：布尔值

在 `ls`、`search` 和 `help-search` 中显示扩展信息。
