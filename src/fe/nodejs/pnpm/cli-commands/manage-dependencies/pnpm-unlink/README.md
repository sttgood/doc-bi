---
title: pnpm unlink
article: false
dir:
  order: 6
  link: true
---

```bash
pnpm unlink
```

取消链接一个系统范围的 package（相对于 [`pnpm link`](https://pnpm.io/zh/cli/link)）。

如果不带参数调用，则当前项目内的所有链接的依赖项会被取消链接。

这类似于 `yarn unlink`，但 pnpm 会在删除外部链接后重新安装依赖项。

提示

如果要删除使用 `pnpm link --global <package>` 建立的链接，则应使用 `pnpm uninstall --global <package>`。 `pnpm unlink` 仅删除当前目录中的链接。

## 配置项

### --recursive, -r

取消链接每个在子目录中找到的包。 在 工作空间中执行时，会取消链接每个在工作空间包中找到的包。

### --filter <package_selector>