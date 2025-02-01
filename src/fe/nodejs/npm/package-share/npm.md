---
title: npm
article: false
order: 6
---

## npm概述

```shell
npm
```



- 描述：最常用它来发布、发现、安装和开发 node 程序。此命令对工作区无感知。

## 操作模式



npm有两种操作模式：

### 本地模式

- npm 将包安装到当前项目目录，默认为当前工作目录。包安装到 `./node_modules`，bin 安装到 `./node_modules/.bin`。

### 全局模式

- npm 将软件包安装到位于 `$npm_config_prefix/lib/node_modules` 的安装前缀中，bin 安装到 `$npm_config_prefix/bin`。

本地模式是默认设置。在任何命令上使用 `-g` 或 `--global` 以改为在全局模式下运行。

## 开发者用法



如果你使用 npm 开发和发布代码：配置

### `json`

- 制作一个 package.json 文件。见 `package.json`。

### `link`

- 将你当前的工作代码链接到 Node 的路径中，这样你就不必每次进行更改时都重新安装。使用 `npm link` 来执行此操作。

### `install`

- 如果你不需要符号链接，最好安装一些东西。特别是，从注册表安装其他人的代码是通过 `npm install`完成的

### `adduser`

- 创建一个账户或登录。执行此操作时，npm 会将凭据存储在用户配置文件中。

### `publish`

- 使用 `npm publish` 命令将你的代码上传到注册表。

## 配置选项

### 命令行开关

- 使用 `--key val` 设置配置。所有键都有一个值，即使它们是布尔值（配置解析器在解析时不知道选项是什么）。如果你不提供值 (`--key`)，则该选项设置为布尔值 `true`。

### 环境变量

- 通过在环境变量中为名称添加前缀 `npm_config_` 来设置任何配置。例如，`export npm_config_key=val`。

### 用户配置

- `$HOME/.npmrc` 处的文件是一个 ini 格式的配置列表。如果存在，则对其进行解析。如果在 cli 或 env 中设置了 `userconfig` 选项，则将使用该文件。

### 全局配置

- 在 `./etc/npmrc` 找到的文件（如果找到，将解析相对于全局前缀的文件。。如果在 cli、env 或用户配置中设置了`globalconfig`选项，则解析该文件。

### 默认值

- npm 的默认配置选项在 `lib/utils/config/definitions.js` 中定义。这些不得更改。
