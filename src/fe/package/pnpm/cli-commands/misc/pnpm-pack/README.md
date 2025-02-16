---
title: pnpm pack
article: false
dir:
  order: 3
  link: true
---

# pnpm pack

从软件包中创建一个 tarball。

## 配置项

### --pack-destination \<dir\>

`pnpm pack` 保存 tarball 的目录。 默认值为当前目录。

### --pack-gzip-level \<level\>

指定自定义压缩级别。

### --json

JSON 格式的日志输出。

## 生命周期

- `prepack`
- `prepare`
- `postpack`