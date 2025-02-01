---
title: npm config
article: false
order: 8
---

## 概要

```bash
npm config set <key>=<value> [<key>=<value> ...]
npm config get [<key> [<key> ...]]
npm config delete <key> [<key> ...]
npm config list [--json]
npm config edit
npm config fix

alias: c
```

注意：此命令对工作区无感知。

## 描述

npm 从命令行、环境变量、`npmrc` 文件以及在某些情况下从 `package.json` 文件获取其配置设置。

有关 npmrc 文件的更多信息，

有关所涉及机制的更详尽解释，以及可用配置选项的完整列表，

`npm config` 命令可用于更新和编辑用户和全局 npmrc 文件的内容。

## 子命令

Config 支持以下子命令：

### set

```bash
npm config set key=value [key=value...]
npm set key=value [key=value...]
```

将每个配置键设置为提供的值。修改用户配置文件，除非传递 [`location`](https://npm.nodejs.cn/cli/v11/commands/npm-config#location)。

如果省略值，则密钥将从你的配置文件中完全删除。

注意：为了向后兼容，支持 `npm config set key value` 作为 `npm config set key=value` 的别名。



### get

```bash
npm config get [key ...]
npm get [key ...]
```

将配置值回显到标准输出。

如果提供了多个键，则值将以键名作为前缀。

如果未提供任何键，则此命令的行为与 `npm config list` 相同。



### list

```bash
npm config list
```

显示所有配置设置。使用 `-l` 也可以显示默认值。使用 `--json` 以 json 格式显示设置。



### delete

```bash
npm config delete key [key ...]
```

从所有配置文件中删除指定的键。



### edit

```bash
npm config edit
```

在编辑器中打开配置文件。使用 `--global` 标志来编辑全局配置。



### fix

```bash
npm config fix
```

尝试修复无效的配置项。通常这意味着将身份验证配置（即 `_auth`、`_authToken`）附加到配置的 `registry`。



## 配置

### `json`

- 默认值：false
- 类型：布尔值

是否输出 JSON 数据，而不是正常输出。

- 在 `npm pkg set` 中，它可以使用 JSON.parse() 解析集合值，然后再将它们保存到你的 `package.json`。

并非所有 npm 命令都支持。

### `global`

- 默认值：false
- 类型：布尔值

在 "global" 模式下运行，以便将包安装到 `prefix` 文件夹而不是当前工作目录。有关行为差异的更多信息，

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`



### `editor`

- 默认值：EDITOR 或 VISUAL 环境变量，或 Windows 上的 '%SYSTEMROOT%\notepad.exe'，或 Unix 系统上的 'vi'
- 类型：字符串

为 `npm edit` 和 `npm config edit` 运行的命令。



### `location`

- 默认值："user" 除非传递 `--global`，否则也会将此值设置为 "global"
- 类型："global"、"user" 或 "project"

当传递给 `npm config` 时，这指的是要使用的配置文件。

当设置为 "global" 模式时，包将安装到 `prefix` 文件夹而不是当前工作目录。有关行为差异的更多信息，请参见 [文件夹](https://npm.nodejs.cn/cli/v11/configuring-npm/folders)。

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`



### `long`

- 默认值：false
- 类型：布尔值

在 `ls`、`search` 和 `help-search` 中显示扩展信息。
