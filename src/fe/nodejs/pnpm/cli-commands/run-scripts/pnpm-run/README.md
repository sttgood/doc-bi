---
title: pnpm run
article: false
dir:
  order: 1
  link: true
---

```
pnpm run
别名: run-script
```

运行在软件包清单文件中定义的脚本。

## 示例

假如你有个 watch 脚本配置在了 `package.json` 中，像这样：

```json
"scripts": {
    "watch": "webpack --watch"
}
```



你现在可以使用 `pnpm run watch` 运行该脚本！ 很简单吧？ 对于那些不喜欢敲键盘而浪费时间的人要注意的另一件事是，所有脚本都会有 pnpm 命令的别名，所以最终 `pnpm run watch` 的简写是 `pnpm watch` （**仅适用于**那些不与已有的 pnpm 命令相同名字的脚本）。

## 运行多个脚本

你可以使用正则表达式来替代脚本名称从而同时运行多个脚本。

```sh
pnpm run "/<regex>/"
```



运行所有以 `watch:` 开头的脚本。

```sh
pnpm run "/^watch:.*/"
```



## 详情

除了 shell 先前存在的 `PATH`， `pnpm run` 也包括在 `PATH` 中的 `node_modules/.bin` 提供的 scripts。 这意味着，只要你安装了一个包，你就可以像常规命令一样在脚本中使用它。 例如，如果你已经安装了 `eslint`，你可以这样写一个脚本：

```json
"lint": "eslint src --fix"
```



即使 `eslint` 没有在你的 shell 中全局安装，它也会运行。

对于工作空间， `<workspace root>/node_modules/.bin` 也会被添加到到 `PATH` 中，因此如果在工作空间根目录中安装了工具，则可以在工作空间中任何软件包的 `scripts` 中调用它。

## 运行环境

pnpm 会自动为执行的脚本创建一些环境变量。 这些环境变量可用于获取有关正在运行的进程的上下文信息。

以下是 pnpm 会创建的环境变量：

- **npm_command** - 包含已执行命令的名称。 如果执行的命令是 `pnpm run`，那么这个变量的值就是“run-script”。

## 配置项

`run` 命令的选项都应被列在脚本名称之前。 脚本名称后列出的选项将传递给执行的脚本。

例如下面这些都将使用 `--silent` 选项运行 pnpm CLI：

```sh
pnpm run --silent watch
pnpm --silent run watch
pnpm --silent watch
```



脚本名称后的任何参数都将添加到执行的脚本中。 所以如果 `watch` 运行 `webpack --watch`，那么这个命令：

```sh
pnpm run watch --no-color
```



将运行：

```sh
webpack --watch --no-color
```



### --recursive, -r

这将从每个包的 "scripts" 对象中运行任意的命令。 如果一个包没有相应的命令，将被跳过。 如果没有任何的包有此命令，该命令将会执行失败。

### --if-present

可以使用 `--if-present` 标志来避免在脚本未定义时以非零退出码退出。 这使你可以在不中断执行链的情况下运行可能未定义的脚本。

### --parallel

完全忽略并发和拓扑排序，在所有匹配的包中立即运行给定的脚本 并输出前缀流。 对于许多包中长时间运行的进程，这是首选标志，例如漫长的构建进程。

### --stream

立即从子进程流式输出，以原始包目录为前缀。 这使得不同包的输出可以交错。

### --aggregate-output

聚合并行运行的子进程的输出，并且仅在子进程完成时打印输出。 它使在运行 `pnpm -r <command>` 时使用 `--parallel` 或 `--workspace-concurrency=<number>` 后读取大日志更容易（尤其是在 CI 上）。 仅支持 `--reporter=append-only`。

### --resume-from <package_name>

从特定项目恢复执行。 如果你正在使用大型工作空间，并且想要在不运行先前项目的情况下从特定项目重新启动构建，那么这可能非常有用。

### --report-summary

将脚本执行的结果记录到 `pnpm-exec-summary.json` 文件中。

`pnpm-exec-summary.json` 文件的示例：

```json
{
  "executionStatus": {
    "/Users/zoltan/src/pnpm/pnpm/cli/command": {
      "status": "passed",
      "duration": 1861.143042
    },
    "/Users/zoltan/src/pnpm/pnpm/cli/common-cli-options-help": {
      "status": "passed",
      "duration": 1865.914958
    }
  }
```



`status` 的可能值为：“passed”、“queued”、“running”。

### --reporter-hide-prefix

从并行运行的子进程的输出中隐藏工作空间前缀，并且仅打印原始输出。 如果你在 CI 上运行并且输出必须采用特定格式而没有任何前缀，则此功能很有用。 仅支持 `--reporter=append-only`。

### --filter <package_selector>

## .npmrc 设置

### enable-pre-post-scripts

- 默认值：**true**
- 类型：**Boolean**

当 `true` 时，pnpm 将自动运行任何前/后脚本。 因此运行 `pnpm foo` 将类似于运行 `pnpm prefoo pnpm foo pnpm postfoo`。

### script-shell

- 默认值： **null**
- 类型：**路径**

使用 `pnpm run` 命令运行脚本所使用的 shell。

例如，在 Windows 系统上强制使用 Git Bash：

```text
pnpm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
```



### shell-emulator

- 默认值： **false**
- 类型：**Boolean**

当为 `true` 时，pnpm 将使用 [类 bash shell](https://www.npmjs.com/package/@yarnpkg/shell) 的 JavaScript 实现来 执行脚本。

该选项简化了跨平台运行脚本。 例如，默认情况下，下述脚本将在非 POSIX 标准兼容系统下运行失败：

```json
"scripts": {
  "test": "NODE_ENV=test node test.js"
}
```



但是，如果 `shell-emulator` 设置为 `true`，它将适用于所有平台。