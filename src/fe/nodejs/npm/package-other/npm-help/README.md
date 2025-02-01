---
title: npm help
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm help <term> [<terms..>]
alias: hlep
```

注意：此命令对工作区无感知。

## 描述

如果提供了主题，则显示相应的文档页面。

如果主题不存在，或者提供了多个术语，则 npm 将运行 `help-search` 命令来查找匹配项。请注意，如果 `help-search` 找到单个主题，那么它将在该主题上运行 `help`，因此唯一匹配等同于指定主题名称。

## 配置

### `viewer`

- 默认值：Posix 上的 "man"，Windows 上的 "browser"
- 类型：字符串

用于查看帮助内容的程序。

设置为 `"browser"` 以在默认 Web 浏览器中查看 html 帮助内容。
