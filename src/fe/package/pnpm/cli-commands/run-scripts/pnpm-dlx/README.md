---
title: pnpm dlx
article: false
dir:
  order: 4
  link: true
---
[中文官网](https://pnpm.io/zh/cli/dlx)|[英文官网](https://pnpm.io/cli/dlx)

```bash
pnpm dlx
别名：pnpx 是 pnpm dlx 的别名
```

dlx 是 download and execute（下载并执行）的缩写。从注册源中获取软件包而不将其安装为依赖项，热加载它，并运行它暴露的任何默认命令二进制文件。

例如，若要在任何地方使用`create-react-app` 来初始化一个 react 应用，而不想 在另一个项目下安装它，你可以运行：

```text
pnpm dlx create-react-app ./my-app
```

这将从注册源获取 `create-react-app` 并使用给定的参数运行它。

你还可以指定想使用的软件包的确切版本：

```text
pnpm dlx create-react-app@next ./my-app
```

## 配置项

### --package \<name\>

在运行命令之前要安装的软件包。

示例：

```text
pnpm --package=@pnpm/meta-updater dlx meta-updater --help
pnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help
```

可以为安装提供多个软件包：

```text
pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install
```

### --shell-mode, -c

在 shell 中运行该命令。 在 UNIX 上使用 `/bin/sh`，在 Windows 上使用 `\cmd.exe`。

示例：

```text
pnpm --package cowsay --package lolcatjs -c dlx 'echo "hi pnpm" | cowsay | lolcatjs'
```

### --silent, -s

只打印执行的命令的输出内容。
