---
title: pnpm prune
article: false
dir:
  order: 9
  link: true
---

```bash
pnpm prune
```

移除不需要的软件包。

## 配置项

### --prod

删除在 `devDependencies` 中指定的包。

### --no-optional

删除在 `optionalDependencies` 中指定的包。

警告

prune 命令目前不支持在 monorepo 上递归执行。 要仅在 monorepo 中安装生产依赖关系， `node_modules` 文件夹可以被删除，然后通过 `pnpm install --prod` 重新安装。