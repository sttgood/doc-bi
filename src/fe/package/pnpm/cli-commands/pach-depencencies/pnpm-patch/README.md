---
title: pnpm patch
article: false
dir:
  order: 1
  link: true
---

```bash
pnpm patch <pkg>
```

给软件包添加补丁（灵感来自于 Yarn 中一个类似的命令）。

该命令会将指定的软件包提取到一个可以随意编辑的临时目录中。

完成修改后, 运行 `pnpm patch-commit <path>` (`<path>` 是之前提取的临时目录) 以生成一个补丁文件，并提供 [`patchedDependencies`](https://pnpm.io/zh/package_json#pnpmpatcheddependencies) 字段注册到你项目中的顶层清单文件。

使用方法：

```text
pnpm patch <pkg name>@<version>
```

注意

如果你想更改包的依赖项，请不要使用修补来修改包的 `package.json` 文件。 要覆盖依赖项，请使用 [overrides](https://pnpm.io/zh/package_json#pnpmoverrides) 或 [软件包钩子](https://pnpm.io/zh/pnpmfile#hooksreadpackagepkg-context-pkg--promisepkg)。



## 配置项

### --edit-dir \<dir\>

需要修补的软件包将被解压到此目录。

### --ignore-existing

修补时忽略现有的修补文件。