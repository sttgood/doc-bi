---
title: pnpm install
article: false
dir:
  order: 2
  link: true
---

```
# pnpm install

别名：i
```

`pnpm install` 用于安装项目的所有依赖项。

在 CI 环境中, 如果存在锁文件但需要更新，那么安装会失败.

在工作空间内，`pnpm install` 会安装所有项目的所有依赖项。 如果你想禁用此行为，请将 `recursive-install` 设置为 `false`。

![img](./assets/pnpm-install.svg)

## 摘要：

| 命令                       | 含义                    |
| -------------------------- | ----------------------- |
| `pnpm i --offline`         | 仅从存储中离线安装      |
| `pnpm i --frozen-lockfile` | 不更新 `pnpm-lock.yaml` |
| `pnpm i --lockfile-only`   | 仅更新 `pnpm-lock.yaml` |

## 配置项

### --force

强制重新安装依赖：重新获取存储中修改的软件包，重新创建由不兼容版本的 pnpm 创建的锁文件和（或）模块目录。 安装所有 optionalDependencies，即使它们不满足当前环境（cpu、os、arch）。

### --offline

- 默认值： **false**
- 类型：**Boolean**

如果为 `true`，pnpm 将仅使用缓存中已有的包。 如果缓存中没有找不到这个包，那么就会安装失败。

### --prefer-offline

- 默认值： **false**
- 类型：**Boolean**

如果为 `true`，将跳过对缓存数据的过期检查，但会从服务器请求缺失的数据。 要强制完全离线模式，请使用 `--offline`。

### --prod, -P

- 默认值： **false**
- 类型：**Boolean**

如果为 `true`，pnpm 将不会安装 `devDependency` 中列出的任何软件包，并将删除已安装的软件包。 如果 `false`，pnpm 将安装 `devDependency` 和 `dependency`中列出的所有软件包。

### --dev, -D

仅安装 `devDependencies` 并且删除 `dependencies` 即使它们已经安装。

### --no-optional

不安装 `optionalDependencies`。

### --lockfile-only

- 默认值： **false**
- 类型：**Boolean**

使用时，只更新 `pnpm-lock.yaml` 和 `package.json`。 不会向 `node_modules` 目录写入任何内容。

### --fix-lockfile

自动修复损坏的锁文件入口。

### --frozen-lockfile

- 默认值：
  - 对于非 CI 环境：**false**
  - 对于 CI 环境：如果存在 lock 文件，则为 **true**
- 类型：**Boolean**

如果设置为 `true`, pnpm 不会生成锁文件，且如果锁文件跟清单文件不同步、锁文件需要更新或不存在锁文件，则会安装失败。

在`CI`环境 中，该设置默认为 `true` 。 以下代码用于检测 CI 环境：

https://github.com/watson/ci-info/blob/44e98cebcdf4403f162195fbcf90b1f69fc6e047/index.js#L54-L61

```js
exports.isCI = !!(
  env.CI || // Travis CI, CircleCI, Cirrus CI, GitLab CI, Appveyor, CodeShip, dsari
  env.CONTINUOUS_INTEGRATION || // Travis CI, Cirrus CI
  env.BUILD_NUMBER || // Jenkins, TeamCity
  env.RUN_ID || // TaskCluster, dsari
  exports.name ||
  false
)
```

### --merge-git-branch-lockfiles

合并所有 Git 分支上的锁文件。

### --reporter=\<name\>

- 默认值：
  - 对于 TTY 标准输出：**default**
  - 对于非 TTY 标准输出：**append-only**
- 类型：**default**, **append-only**, **ndjson**, **silent**

允许你选择向终端输出有关安装进度的调试信息的报告程序。

- **silent** - 不会向控制台记录任何信息，也不包含致命错误
- **default - 标准输出是 TTY 时的默认报告程序
- **append-only** - 始终向末尾追加输出。 不执行任何光标操作
- **ndjson** - 最详细报告. 以 [ndjson](https://github.com/ndjson/ndjson-spec) 格式打印所有日志

如果要更改打印信息的类型，请使用 [loglevel](https://pnpm.io/zh/npmrc#loglevel) 设置。

### --use-store-server

- 默认值： **false**
- 类型：**Boolean**

::: warning

已弃用的功能

在后台启动存储服务器。 存储服务器会在安装完成后持续运行。 如果要停止存储服务器，请运行 `pnpm server stop`

:::

### --shamefully-hoist

- 默认值： **false**
- 类型：**Boolean**

创建一个扁平的 `node_modules` 结构，类似于 `npm` 或 `yarn`。 **警告**：强烈不建议这么做。

### --ignore-scripts

- 默认值： **false**
- 类型：**Boolean**

不执行项目 `package.json` 及其依赖中定义的任何脚本。

### --filter <package_selector>

::: warning

过滤器目前在 v8 默认配置下无法正常工作，你必须将 [dedupe-peer-dependents](https://pnpm.io/zh/npmrc#dedupe-peer-dependents) 隐式设置为 `false` 才能使其正常工作。 有关更多信息和进展，请参阅 [#6300](https://github.com/pnpm/pnpm/issues/6300)。

:::

[阅读更多有关过滤的内容。](https://pnpm.io/zh/filtering)

### --resolution-only

重新进行解析：对于打印出对等依赖问题很有用。