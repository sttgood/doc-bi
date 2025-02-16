---
title: npx
article: false
order: 7
---

## 概要

```bash
npx -- <pkg>[@<version>] [args...]
npx --package=<pkg>[@<version>] -- <cmd> [args...]
npx -c '<cmd> [args...]'
npx --package=foo -c '<cmd> [args...]'
```

npx是npm自5.2.0版本引入的命令，作为一个npm包执行器，它极大地简化了从npm注册表使用和管理CLI工具的过程

### npx的工作原理

npx在执行时，会按照以下步骤操作：

1. **检查本地项目**：npx首先会在当前项目的node_modules目录中查找所需的npm包。
2. **检查环境变量**：如果本地项目未安装所需包，npx会在环境变量$PATH中查找。
3. **下载并安装**：如果以上两个位置均未找到所需包，npx会从npm注册表下载并安装最新版本的包（或用户指定的版本）。
4. **执行命令**：安装完成后，npx会自动运行包内的可执行文件。
5. **清理**：执行完毕后，npx默认会删除下载的包，避免在本地留下不必要的依赖。如果需要保留依赖包，可以使用--no-cleanup选项。

## 详细描述

此命令允许你在与通过 `npm run` 运行类似的上下文中从 npm 包（本地安装或远程获取）运行任意命令。

`--package`选项指定的任何包都将在执行命令的`PATH`中提供，以及任何本地安装的包可执行文件。`--package`选项可以指定多次，以在所有指定包都可用的环境中执行提供的命令。

如果本地项目依赖中不存在任何请求的包，则将它们安装到npm缓存中的文件夹中，该文件夹在执行过程中添加到`PATH`环境变量中。打印一个提示（可以通过提供 `--yes` 或 `--no` 来抑制）。

不带说明符的包名称将与本地项目中存在的任何版本匹配。仅当具有与本地依赖完全相同的名称和版本时，带有说明符的包名称才会被视为匹配。

如果未提供 `-c` 或 `--call` 选项，则使用位置参数生成命令字符串。如果未提供 `--package` 选项，则 npm 将尝试根据以下启发式方法从作为第一个位置参数提供的包说明符中确定可执行文件名称：

- 如果包在 `package.json` 的 `bin` 字段中有一个条目，或者如果所有条目都是同一命令的别名，则将使用该命令。
- 如果包有多个 `bin` 条目，其中一个与 `name` 字段的无范围部分匹配，则将使用该命令。
- 如果这不会导致恰好一个选项（或者因为没有 bin 条目，或者它们都不匹配包的 `name`），那么 `npm exec` 会以错误退出。

要运行指定二进制文件以外的二进制文件，请指定一个或多个 `--package` 选项，这将阻止 npm 从第一个命令参数推断包。

## `npx`与`npm exec`

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



- **npx**：侧重于执行命令，即使会自动安装模块，但其核心目的是执行某个命令。它提供了更灵活的包管理选项，特别是对于那些不想永久安装在开发环境中的临时的工具。
- **npm**：侧重于安装或卸载模块。它使得安装和管理托管在npm注册表上的依赖项变得非常容易。

## 示例

使用提供的参数在本地依赖中运行 `tap` 的版本：

```bash
$ npm exec -- tap --bail test/foo.js
$ npx         tap --bail test/foo.js
```



通过指定 `--package` 选项运行名称与包名称匹配的命令以外的命令：

```bash
$ npm exec --package=foo -- bar --bar-argument
# ~ or ~
$ npx      --package=foo    bar --bar-argument
```



在当前项目的上下文中运行任意 shell 脚本：

```bash
$ npm x -c 'eslint && say "hooray, lint passed"'
$ npx   -c 'eslint && say "hooray, lint passed"'
```

## 与旧 npx 版本的兼容性

`npx` 二进制文件在 npm v7.0.0 中被重写，当时不推荐使用独立的`npx` 包`npx`使用`npm exec`命令而不是单独的参数解析器和安装过程，具有一些功能以保持与以前版本中接受的参数的向后兼容性。

这导致其功能发生了一些变化：

- 可以提供任何 `npm` 配置值。
- 为防止错误输入包名称引起的安全和用户体验问题，`npx` 会在安装任何内容之前进行提示。使用 `-y` 或 `--yes` 选项抑制此提示。
- `--no-install` 选项已弃用，并将转换为 `--no`。
- Shell 后备功能已被删除，因为它是不可取的。
- `-p` 参数是 npm 中 `--parseable` 的简写，但 npx 中是 `--package` 的简写。这是维护的，但仅适用于 `npx` 可执行文件。
- `--ignore-existing` 选项被删除。本地安装的 bin 始终存在于执行的进程 `PATH` 中。
- `--npm` 选项被删除。`npx` 将始终使用它附带的 `npm`。
- `--node-arg` 和 `-n` 选项已被删除。使用 `NODE_OPTIONS` 代替：e.g., `NODE_OPTIONS="--trace-warnings --trace-exit" npx foo --random=true`
- `--always-spawn` 选项是多余的，因此被删除。
- `--shell` 选项已替换为 `--script-shell`，但保留在 `npx` 可执行文件中以实现向后兼容性。
