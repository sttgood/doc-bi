---
title: pnpm -r,--recursive
article: false
dir:
  order: 4
  link: true
---

```bash
pnpm -r, --recursive
别名：m、multi、recursive、<command> -r
```

与以下命令一起使用时，在工作区的每个项目中运行命令：

- `install`
- `list`
- `outdated`
- `publish`
- `rebuild`
- `remove`
- `unlink`
- `update`
- `why`

与以下命令一起使用时，会在工作区的每个项目中运行命令，但不包括根项目：

- `exec`
- `run`
- `test`
- `add`

如果你希望在运行脚本时也包含根项目，请将 `include-workspace-root` 设置设为 `true`。

用法示例：

```text
pnpm -r publish
```



## 配置项

### --link-workspace-packages

- 默认值： **false**
- 类型：**true，false，deep**

将 monorepo 工作空间中本地可用的包链接到 `node_modules`，而不是从注册源中重新下载它们。 这模拟了类似于 `yarn workspace` 的功能 。

当设置为 deep 时，本地包也可以链接到子依赖项。

请注意，我们鼓励使用 `npmrc` 代替来进行此设置，去强制所有环境中都有同样的表现。 此选项单独存在，以便您可以在必要时覆盖它。

### --workspace-concurrency

- 默认值：**4**
- 类型：**Number**

设置同时运行的最大任务数。 对于无限并发使用 `Infinity`。

你可以将 `workpace-concurrency` 设置为 `<= 0` ，它将使用主机内核的数量： `max(1, (内核数量) - abs(工作空间的并发数量))`

### --[no-]bail

- 默认值：**true**
- 类型：**Boolean**

如果为 true，则在任务抛出错误时停止。

此配置不会影响退出码（exit code）。 即使使用了 `--no-bail` ，所有任务也都将完成，除非任意的任务执行失败，那么该命令将以非零码（non-zero code）退出。

示例（在每个包中运行测试，如果其中一个包中的测试失败仍继续）：

```sh
pnpm -r --no-bail test
```



### --[no-]sort

- 默认值：**true**
- 类型：**Boolean**

当为 `true` 时，软件包按拓扑进行排序（依赖于依赖项前）。 通过 `--no-sort` 禁用。

示例：

```sh
pnpm -r --no-sort test
```



### --reverse

- 默认值： **false**
- 类型：**Boolean**

当 `true` 时，软件包的顺序会被反转。

```text
pnpm -r --reverse run clean
```



### --filter <package_selector>