---
title: npm exec
article: false
order: 3
---

## 概要

`npm exec`（通常缩写为 `npmx`）是 npm 7.0.0 版本引入的一个命令，它提供了一种方式来执行 Node.js 包中的命令行工具。`npm exec` 的功能与 `npx` 类似，但它们之间存在一些关键区别和不同的使用场景。

```bash
npm exec -- <pkg>[@<version>] [args...]npm exec --package=<pkg>[@<version>] -- <cmd> [args...]npm exec -c '<cmd> [args...]'npm exec --package=foo -c '<cmd> [args...]'
alias: x
```

## 描述

此命令允许你在与通过 `npm run` 运行类似的上下文中从 npm 包（本地安装或远程获取）运行任意命令。

在没有位置参数或 `--call` 的情况下运行，这允许你在与 `package.json` 脚本运行相同的 shell 环境中交互地运行命令。当标准输入是 TTY 时，CI 环境中不支持交互模式，以防止挂起。

`--package` 选项指定的任何包都将在执行命令的 `PATH` 中提供，以及任何本地安装的包可执行文件。`--package` 选项可以指定多次，以在所有指定包都可用的环境中执行提供的命令。

如果本地项目依赖中不存在任何请求的包，则会打印提示，可以通过提供 `--yes` 或 `--no` 来取消提示。当标准输入不是 TTY 或检测到 CI 环境时，假定为 `--yes`。请求的包被安装到 npm 缓存中的一个文件夹中，该文件夹被添加到执行过程中的 `PATH` 环境变量中。

不带说明符的包名称将与本地项目中存在的任何版本匹配。仅当具有与本地依赖完全相同的名称和版本时，带有说明符的包名称才会被视为匹配。

如果未提供 `-c` 或 `--call` 选项，则使用位置参数生成命令字符串。如果未提供 `--package` 选项，则 npm 将尝试根据以下启发式方法从作为第一个位置参数提供的包说明符中确定可执行文件名称：

- 如果包在 `package.json` 的 `bin` 字段中有一个条目，或者如果所有条目都是同一命令的别名，则将使用该命令。
- 如果包有多个 `bin` 条目，其中一个与 `name` 字段的无范围部分匹配，则将使用该命令。
- 如果这不会导致恰好一个选项（或者因为没有 bin 条目，或者它们都不匹配包的 `name`），那么 `npm exec` 会以错误退出。

要运行指定二进制文件以外的二进制文件，请指定一个或多个 `--package` 选项，这将阻止 npm 从第一个命令参数推断包。

## `npx` 与 `npm exec`

通过 `npx` 二进制文件运行时，必须在任何位置参数之前设置所有标志和选项。通过 `npm exec` 运行时，可以使用双连字符 `--` 标志来禁止 npm 解析应发送到执行命令的开关和选项。

例如：

```
$ npx foo@latest bar --package=@npmcli/foo
```

在这种情况下，npm 将解析 `foo` 包名，并运行以下命令：

```
$ foo bar --package=@npmcli/foo
```

由于 `--package` 选项位于位置参数之后，因此它被视为已执行命令的参数。

相比之下，由于 npm 的参数解析逻辑，运行这个命令是不同的：

```
$ npm exec foo@latest bar --package=@npmcli/foo
```

在这种情况下，npm 会先解析 `--package` 选项，解析 `@npmcli/foo` 包。然后，它将在该上下文中执行以下命令：

```
$ foo@latest bar
```

建议使用双连字符来明确告诉 npm 停止解析命令行选项和开关。因此，以下命令等同于上面的 `npx` 命令：

```
$ npm exec -- foo@latest bar --package=@npmcli/foo
```

## 配置

### [`package`](https://npm.nodejs.cn/cli/v11/commands/npm-exec#package)

- 默认值：
- 类型：字符串（可以设置多次）

为 [`npm exec`](https://npm.nodejs.cn/cli/v11/commands/npm-exec) 安装的一个或多个包

### `call`

- 默认值：""
- 类型：字符串

`npm exec`、`npx` 的可选配套选项，允许指定自定义命令与已安装的包一起运行。



```bash
npm exec --package yo --package generator-node --call "yo node"
```



### [`workspace`](https://npm.nodejs.cn/cli/v11/commands/npm-exec#workspace)

- 默认值：
- 类型：字符串（可以设置多次）

启用在当前项目的已配置工作区的上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。

`workspace` 配置的有效值为：

- 工作区名称
- 工作区目录的路径
- 父工作区目录的路径（将导致选择该文件夹中的所有工作区）

为 `npm init` 命令设置时，可以将其设置为尚不存在的工作区的文件夹，以创建文件夹并将其设置为项目中的全新工作区。

此值不会导出到子进程的环境中。



### [`workspaces`](https://npm.nodejs.cn/cli/v11/commands/npm-exec#workspaces)

- 默认值：null
- 类型：空值或布尔值

设置为 true 可在所有已配置工作区的上下文中运行该命令。

显式将此设置为 false 将导致像 `install` 这样的命令完全忽略工作区。未明确设置时：

- 在 `node_modules` 树上运行的命令（安装、更新等）会将工作区链接到 `node_modules` 文件夹。* 执行其他操作（测试、执行、发布等）的命令将在根项目上运行，除非在 `workspace` 配置中指定了一个或多个工作区。

此值不会导出到子进程的环境中。



### [`include-workspace-root`](https://npm.nodejs.cn/cli/v11/commands/npm-exec#include-workspace-root)

- 默认值：false
- 类型：布尔值

为命令启用工作区时包括工作区根。

当为 false 时，通过 `workspace` 配置指定单个工作区，或通过 `workspaces` 标志指定所有工作区，将导致 npm 仅在指定的工作区上运行，而不是在根项目上运行。

此值不会导出到子进程的环境中。

## 示例

使用提供的参数在本地依赖中运行 `tap` 的版本：



```bash
$ npm exec -- tap --bail test/foo.js
$ npx tap --bail test/foo.js
```

通过指定 `--package` 选项运行名称与包名称匹配的命令以外的命令：



```bash
$ npm exec --package=foo -- bar --bar-argument
# ~ or ~
$ npx --package=foo bar --bar-argument
```

在当前项目的上下文中运行任意 shell 脚本：



```bash
$ npm x -c 'eslint && say "hooray, lint passed"'
$ npx -c 'eslint && say "hooray, lint passed"'
```

## 工作区支持

你可以使用 [`workspace`](https://npm.nodejs.cn/cli/v11/using-npm/config#workspace) 或 [`workspaces`](https://npm.nodejs.cn/cli/v11/using-npm/config#workspaces) 配置，以便在指定工作区的上下文中从 npm 包（本地安装或远程获取）运行任意命令。如果没有提供位置参数或 `--call` 选项，它将在每个配置的工作区的上下文中打开一个交互式子 shell，一次一个。

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

使用 [`workspaces` 配置选项](https://npm.nodejs.cn/cli/v11/using-npm/config#workspace) 时，你可以在每个已配置工作区的上下文中执行包中的任意命令，在本示例中，我们使用 eslint 来检查每个工作区文件夹中找到的任何 js 文件：

```
npm exec --ws -- eslint ./*.js
```

### 过滤工作区

也可以使用 `workspace` 配置以及名称或目录路径在单个工作区中执行命令：

```
npm exec --workspace=a -- eslint ./*.js
```

也可以多次指定 `workspace` 配置，以便在多个工作区的上下文中运行特定脚本。在命令行中为 `workspace` 配置定义值时，也可以使用 `-w` 作为简写，例如：

```
npm exec -w a -w b -- eslint ./*.js
```

最后一个命令将在 `./packages/a` 和 `./packages/b` 文件夹中运行 `eslint` 命令。

## 与旧npx版本的兼容性

`npx` 二进制文件在 npm v7.0.0 中被重写，当时不推荐使用独立的 `npx` 包。`npx` 使用 `npm exec` 命令而不是单独的参数解析器和安装过程，具有一些功能以保持与以前版本中接受的参数的向后兼容性。

这导致其功能发生了一些变化：

- 可以提供任何 `npm` 配置值。
- 为防止错误输入包名称引起的安全和用户体验问题，`npx` 会在安装任何内容之前进行提示。使用 `-y` 或 `--yes` 选项抑制此提示。
- `--no-install` 选项已弃用，并将转换为 `--no`。
- Shell 后备功能已被删除，因为它是不可取的。
- `-p` 参数是 npm 中 `--parseable` 的简写，但 npx 中是 `--package` 的简写。这是维护的，但仅适用于 `npx` 可执行文件。
- `--ignore-existing` 选项被删除。本地安装的 bin 始终存在于执行的进程 `PATH` 中。
- `--npm` 选项被删除。`npx` 将始终使用它附带的 `npm`。
- `--node-arg` 和 `-n` 选项被删除。
- `--always-spawn` 选项是多余的，因此被删除。
- `--shell` 选项已替换为 `--script-shell`，但保留在 `npx` 可执行文件中以实现向后兼容性。

## 关于缓存的说明

当使用指定的包名称时，npm cli 会利用其内部包缓存。你可以使用以下内容更改 cli 使用此缓存的方式和时间。有关缓存如何工作的更多信息，请参阅 [`npm cache`](https://npm.nodejs.cn/cli/v11/commands/npm-cache)。

### prefer-online

强制检查包的时效性，使 cli 立即查找更新，即使包已经在缓存中。

### prefer-offline

绕过包的时效性检查。仍然会从服务器请求丢失的数据。要强制完全离线模式，请使用 `offline`。

### offline

强制完全离线模式。任何未在本地缓存的包都会导致错误。

### 工作区

- 默认值：
- 类型：字符串（可以设置多次）

启用在当前项目的已配置工作区的上下文中运行命令，同时通过仅运行此配置选项定义的工作区进行过滤。

`workspace` 配置的有效值为：

- 工作区名称
- 工作区目录的路径
- 父工作区目录的路径（将导致选择所有嵌套的工作区）

此值不会导出到子进程的环境中。

### workspaces

- 别名：`--ws`
- 类型：布尔值
- 默认值：`false`

在当前项目的所有已配置工作区的上下文中运行脚本。
