---
title: pnpm dedupe
article: false
dir:
  order: 12
  link: true
---

```bash
pnpm dedupe
```

如果可以使用较新的版本，则执行安装并删除锁文件中的较旧依赖项。

## 配置项

### `--check`

在不安装软件包或编辑锁文件下检查运行 dedupe 是否会导致更改。 如果可能存在更改，则以非零状态代码退出。