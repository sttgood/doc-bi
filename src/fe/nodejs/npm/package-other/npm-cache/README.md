---
title: npm cache
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm cache add <package-spec>
npm cache clean [<key>]
npm cache ls [<name>@<version>]
npm cache verify
```

注意：此命令对工作区无感知。

## 描述

用于添加、列出或清理 npm 缓存文件夹。

- add:将指定的包添加到本地缓存。此命令主要供 npm 内部使用，但它可以提供一种将数据显式添加到本地安装缓存的方法。
- clean:删除缓存文件夹中的所有数据。请注意，这通常是不必要的，因为 npm 的缓存是自我修复的并且可以抵抗数据损坏问题。
- verify:验证缓存文件夹的内容，垃圾收集任何不需要的数据，并验证缓存索引和所有缓存数据的完整性。

## 详情

npm 将缓存数据存储在配置的 `cache` 中的一个不透明目录中，名为 `_cacache`。该目录是一个基于 [`cacache`](http://npm.im/cacache) 的内容可寻址缓存，存储所有 http 请求数据以及其他与包相关的数据。该目录主要通过 `pacote` 访问，该库负责从 npm@5 开始获取所有包。

通过缓存的所有数据在插入和提取时都经过完整验证。缓存损坏将触发错误，或向 `pacote` 触发信号，表明必须重新获取数据，这将自动执行。出于这个原因，除了回收磁盘空间之外，永远不需要清除缓存，这就是为什么 `clean` 现在需要 `--force` 运行。

目前没有通过 npm 公开的方法来检查或直接管理此缓存的内容。为了访问它，必须直接使用 `cacache`。

npm 不会自行删除数据：缓存会随着新包的安装而增长。

## 关于缓存设计的说明

npm 缓存严格来说是一个缓存：不应依赖它作为包数据的持久可靠的数据存储。npm 不保证以前缓存的数据以后会可用，并且会自动删除损坏的内容。缓存所做的主要保证是，如果它确实返回数据，那么该数据将完全是插入的数据。

要对现有缓存内容运行离线验证，请使用 `npm cache verify`。

## 配置

### `cache`

- 默认值：Windows：`%LocalAppData%\npm-cache`，Posix：`~/.npm`
- 类型：路径

npm 的缓存目录的位置。
