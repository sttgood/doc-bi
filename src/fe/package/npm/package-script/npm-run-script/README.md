---
title: npm run-script
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm run-script <command> [-- <args>]
aliases: run, rum, urn
```



## 描述

这会从包的 `"scripts"` 对象运行任意命令。如果没有提供 `"command"`，它将列出可用的脚本。

`run[-script]` 由 test、start、restart 和 stop 命令使用，但也可以直接调用。当包中的脚本被打印出来时，它们被分为生命周期（测试、启动、重启）和直接运行的脚本。

任何位置参数都会传递给指定的脚本。使用 `--` 传递以 `--` 为前缀的标志和选项，否则它们会被 npm 解析。

例如：



```bash
npm run test -- --grep="pattern"
```

参数只会传递给 `npm run` 之后指定的脚本，而不是任何 `pre` 或 `post` 脚本。

`env` 脚本是一个特殊的内置命令，可用于列出脚本在运行时可用的环境变量。如果你的包中定义了 "env" 命令，它将优先于内置命令。

除了 shell 预先存在的 `PATH` 之外，`npm run` 还将 `node_modules/.bin` 添加到提供给脚本的 `PATH` 中。本地安装的依赖提供的任何二进制文件都可以在没有 `node_modules/.bin` 前缀的情况下使用。例如，如果你的包中 `tap` 上有一个 `devDependency`，你应该写：



```bash
"scripts": {"test": "tap test/*.js"}
```

代替



```bash
"scripts": {"test": "node_modules/.bin/tap test/*.js"}
```

运行脚本的实际 shell 取决于平台。默认情况下，在类 Unix 系统上是 `/bin/sh` 命令，在 Windows 上是 `cmd.exe`。`/bin/sh` 所指的实际外壳也取决于系统。你可以使用 [`script-shell` 配置] 自定义外壳。

脚本从包文件夹的根目录运行，无论调用 `npm run` 时当前工作目录是什么。如果你希望脚本根据你所在的子目录使用不同的行为，你可以使用 `INIT_CWD` 环境变量，它包含你在运行 `npm run` 时所在的完整路径。

`npm run` 将 `NODE` 环境变量设置为执行 `npm` 的 `node` 可执行文件。

如果你尝试在没有 `node_modules` 目录的情况下运行脚本但它失败了，你将收到运行 `npm install` 的警告，以防你忘记了。



## 工作区支持

你可以使用 [`workspace`] 或 [`workspaces`] 配置，以便在指定工作区的上下文中从包的 `"scripts"` 对象运行任意命令。如果未提供 `"command"`，它将列出每个已配置工作区的可用脚本。

给定一个具有已配置工作区的项目，例如：



```bash
.
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
   +-- b
   |   `-- package.json
   `-- c
       `-- package.json
```

假设工作区配置在根级别 `package.json` 文件中正确设置。例如：



```bash
{
    "workspaces": [ "./packages/*" ]
}
```

并且每个已配置的工作区都有一个已配置的 `test` 脚本，我们可以使用 [`workspaces` 配置] 在所有工作区中运行测试：

```
npm test --workspaces
```

### 过滤工作区

也可以使用 `workspace` 配置以及名称或目录路径在单个工作区中运行脚本：

```
npm test --workspace=a
```

也可以多次指定 `workspace` 配置，以便在多个工作区的上下文中运行特定脚本。在命令行中为 `workspace` 配置定义值时，也可以使用 `-w` 作为简写，例如：

```
npm test -w a -w b
```

最后一条命令将在 `./packages/a` 和 `./packages/b` 包中运行 `test`。



## 配置

### `workspace`

- 默认值：
- 类型：字符串（可以设置多次）

启用在当前项目的已配置工作区的上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。

`workspace` 配置的有效值为：

- 工作区名称
- 工作区目录的路径
- 父工作区目录的路径（将导致选择该文件夹中的所有工作区）

为 `npm init` 命令设置时，可以将其设置为尚不存在的工作区的文件夹，以创建文件夹并将其设置为项目中的全新工作区。

此值不会导出到子进程的环境中。



### `workspaces`

- 默认值：null
- 类型：空值或布尔值

设置为 true 可在所有已配置工作区的上下文中运行该命令。

显式将此设置为 false 将导致像 `install` 这样的命令完全忽略工作区。未明确设置时：

- 在 `node_modules` 树上运行的命令（安装、更新等）会将工作区链接到 `node_modules` 文件夹。* 执行其他操作（测试、执行、发布等）的命令将在根项目上运行，除非在 `workspace` 配置中指定了一个或多个工作区。

此值不会导出到子进程的环境中。



### `include-workspace-root`

- 默认值：false
- 类型：布尔值

为命令启用工作区时包括工作区根。

当为 false 时，通过 `workspace` 配置指定单个工作区，或通过 `workspaces` 标志指定所有工作区，将导致 npm 仅在指定的工作区上运行，而不是在根项目上运行。

此值不会导出到子进程的环境中。



### `if-present`

- 默认值：false
- 类型：布尔值

如果为 true，当为 `package.json` 的 `scripts` 部分中未定义的脚本调用 `run-script` 时，npm 将不会退出并返回错误代码。当需要在脚本存在时选择性地运行脚本并在脚本失败时运行失败时，可以使用此选项。这很有用，例如，在运行可能仅适用于其他通用 CI 设置中的某些构建的脚本时。

此值不会导出到子进程的环境中。



### `ignore-scripts`

- 默认值：false
- 类型：布尔值

如果为 true，npm 不会运行 package.json 文件中指定的脚本。

请注意，如果设置了 `ignore-scripts`，则明确旨在运行特定脚本的命令（例如 `npm start`、`npm stop`、`npm restart`、`npm test` 和 `npm run-script`）仍将运行其预期的脚本，但它们不会运行任何前置或后置脚本。



### `foreground-scripts`

- 默认值：`false` 除非使用 `npm pack` 或 `npm publish` 时默认为 `true`
- 类型：布尔值

在前台进程中运行已安装包的所有构建脚本（即 `preinstall`、`install` 和 `postinstall`）脚本，与主 npm 进程共享标准输入、输出和错误。

请注意，这通常会使安装运行速度变慢，并且噪音更大，但对调试很有用。



### `script-shell`

- 默认值：'/bin/sh' 在 POSIX 系统上，'cmd.exe' 在 Windows 上
- 类型：空值或字符串

用于脚本的 shell 与 `npm exec`、`npm run` 和 `npm init <package-spec>` 命令一起运行。
