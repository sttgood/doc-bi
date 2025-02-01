---
title: .npmrc
article: false
dir:
  link: true
---

## 描述

npm 从命令行、环境变量和 `npmrc` 文件获取其配置设置。

`npm config` 命令可用于更新和编辑用户和全局 npmrc 文件的内容。

有关可用配置选项的列表，请参阅 [配置](https://npm.nodejs.cn/cli/v11/using-npm/config)。

## 文件

四个相关文件是：

- per-project config file (`/path/to/my/project/.npmrc`)
- per-user config file (`~/.npmrc`)
- global config file (`$PREFIX/etc/npmrc`)
- npm 内置配置文件 (`/path/to/npm/npmrc`)

所有 npm 配置文件都是 `key = value` 参数的 ini 格式列表。可以使用 `${VARIABLE_NAME}` 替换环境变量。例如：

```bash
cache = ${HOME}/.npm-packages
```

这些文件中的每一个都已加载，并且配置选项按优先级顺序解析。例如，userconfig 文件中的设置将覆盖 globalconfig 文件中的设置。

通过在键名后添加 "[]" 来指定数组值。例如：

```bash
key[] = "first value"
key[] = "second value"
```

### 注释

`.npmrc` 文件中的行以 `;` 或 `#` 字符开头时被解释为注释。`.npmrc` 文件由 [npm/ini](https://github.com/npm/ini) 解析，[npm/ini](https://github.com/npm/ini) 指定此注释语法。

例如：

```bash
# last modified: 01 Jan 2016
; Set a new registry for a scoped package
@myscope:registry=https://mycustomregistry.example.org
```

### 每个项目的配置文件

在项目中本地工作时，项目根目录中的 `.npmrc` 文件（即 `node_modules` 和 `package.json` 的兄弟）将设置特定于该项目的配置值。

请注意，这仅适用于你正在运行 npm 的项目的根目录。当你的模块发布时，它不起作用。例如，你不能发布强制自身全局安装或安装在不同位置的模块。

此外，在全局模式下不会读取此文件，例如在运行 `npm install -g` 时。

### 每个用户的配置文件

`$HOME/.npmrc`（或 `userconfig` 参数，如果在环境或命令行中设置）

### 全局配置文件

`$PREFIX/etc/npmrc`（或 `globalconfig` 参数，如果在上面设置）：此文件是 `key = value` 参数的 ini 文件格式列表。可以如上所述替换环境变量。

### 内置配置文件

```
path/to/npm/itself/npmrc
```

这是一个不可更改的 "builtin" 配置文件，npm 在更新时保持一致。使用 npm 附带的 `./configure` 脚本在此处设置字段。这主要是为了分发维护者以标准和一致的方式覆盖默认配置。

## 认证相关配置

设置 `_auth`、`_authToken`、`username` 和 `_password` 都必须限定在特定注册表范围内。这可确保 `npm` 永远不会将凭据发送到错误的主机。

完整名单是：

- `_auth`（base64 认证字符串）
- `_authToken`（身份验证令牌）
- `username`
- `_password`
- `email`
- `cafile`（证书颁发机构文件的路径）
- `keyfile`（密钥文件的路径）

为了限定这些值的范围，它们必须以 URI 片段为前缀。如果凭证用于对单个主机上的注册表的任何请求，则范围可能类似于 `//registry.npmjs.org/:`。如果必须将其范围限定为主机上的特定路径，则还可以提供该路径，例如 `//my-custom-registry.org/unique/path:`。

```bash
; bad config
_authToken=MYTOKEN

; good config
@myorg:registry=https://somewhere-else.com/myorg
@another:registry=https://somewhere-else.com/another
//registry.npmjs.org/:_authToken=MYTOKEN

; would apply to both @myorg and @another
//somewhere-else.com/:_authToken=MYTOKEN

; would apply only to @myorg
//somewhere-else.com/myorg/:_authToken=MYTOKEN1

; would apply only to @another
//somewhere-else.com/another/:_authToken=MYTOKEN2
```
