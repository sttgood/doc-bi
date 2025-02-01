---
title: .pnpmfiles.cjs
article: false
---

## .pnpmfile.cjs

pnpm 允许你通过特殊功能（钩子）直接挂钩到安装过程。 钩子可以在名为 `.pnpmfile.cjs` 的文件中声明。

默认情况下， `.pnpmfile.cjs` 应该与锁文件位于同一目录中。 例如，在具有共享锁文件的 [工作空间](https://pnpm.io/zh/workspaces) 中 `.pnpmfile.cjs` 应该位于 monorepo 的根目录中。

## 钩子

### 摘要：

| 钩子函数                                              | 过程                                 | 用途                            |
| ----------------------------------------------------- | ------------------------------------ | ------------------------------- |
| `hooks.readPackage(pkg, context): pkg`                | 在 pnpm 解析依赖的软件清单文件后调用 | 允许你改变依赖的 `package.json` |
| `hooks.afterAllResolved(lockfile, context): lockfile` | 在解析完依赖关系后调用。             | 允许你更改锁文件。              |

### `hooks.readPackage(pkg, context): pkg | Promise<pkg>`

允许你在语法解析之后、依赖解析之前改变依赖项的 `package.json`。 这些突变不会保存到文件系统，但是，它们将影响被解析至锁文件的内容，从而影响哪些包将被安装。

请注意，如果你已经解析好了要修改的依赖项，则需要删除 `pnpm-lock.yaml`。

提示

如果你需要将 `package.json` 的变化保存到文件系统中，你需要使用 `pnpm patch` 命令对 `package.json` 文件进行修补。 例如，如果你想删除依赖项的 `bin` 字段，这可能很有用。

#### 参数

- `pkg` - 包的清单。 来自注册源的响应或 `package.json` 的内容。
- `context` - 步骤的上下文对象。 `#log(msg)` 方法允许你使用该步骤的调试日志。

#### 使用方法

示例 `.pnpmfile.cjs` （更改依赖项的依赖关系）：

```js
function readPackage(pkg, context) {
  // 在从源下载后覆盖 foo@1.x 的清单文件
  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {
    // 替换 bar@x.x.x 为 bar@2.0.0
    pkg.dependencies = {
      ...pkg.dependencies,
      bar: '^2.0.0'
    }
    context.log('bar@1 => bar@2 in dependencies of foo')
  }
  
  // 这将会将所有使用 baz@x.x.x 的包改为使用 baz@1.2.3
  if (pkg.dependencies.baz) {
    pkg.dependencies.baz = '1.2.3';
  }
  
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}
```



#### 已知限制

使用 `readPackage` 从依赖项的清单中删除 `scripts` 字段不会阻止 pnpm 构建依赖项。 构建依赖时，pnpm 从包的存档中读取包的 `package.json`，这不受钩子的影响。 为了忽略包的构建，请使用 [pnpm.neverBuiltDependencies](https://pnpm.io/zh/package_json#pnpmneverbuiltdependencies) 字段。

### `hooks.afterAllResolved(lockfile, context): lockfile | Promise<lockfile>`

允许你在序列化之前更改锁文件的输出。

#### 参数

- `lockfile` - 锁文件的解析对象，序列化为 `pnpm-lock.yaml`。
- `context` - 步骤的上下文对象。 `#log(msg)` 方法允许你使用该步骤的调试日志。

#### 用法示例

.pnpmfile.cjs

```js
function afterAllResolved(lockfile, context) {
  // ...
  return lockfile
}

module.exports = {
  hooks: {
    afterAllResolved
  }
}
```



#### 已知限制

没有 - 任何可以通过修改锁文件达到的功能都可以通过这个函数完成，甚至可以扩展锁文件的功能。

## 相关配置

### ignore-pnpmfile

- 默认值： **false**
- 类型：**Boolean**

`.pnpmfile.cjs` 将被忽略。 想要确保在安装期间没有执行任何脚本的话，和 `--ignore-scripts` 一起使用会比较方便。

### pnpmfile

- 默认值： **.pnpmfile.cjs**
- 类型：**路径**
- 示例： **.pnpm/.pnpmfile.cjs**

本地 pnpmfile 的位置。

### global-pnpmfile

- 默认值： **null**
- 类型：**路径**
- 示例：**~/.pnpm/global_pnpmfile.cjs**

全局 pnpmfile 的位置。 在安装期间，所有项目都会使用全局 pnpmfile 。

::: warning

建议使用本地 pnpmfiles。 仅当在未使用 pnpm 作为主包管理器的项目上使用 pnpm 时，才使用全局 pnpmfile 。

:::