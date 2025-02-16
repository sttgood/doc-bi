---
title: npm org
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm org set orgname username developer | admin | ownernpm org rm orgname usernamenpm org ls orgname <username>
alias: ogr
```

注意：此命令对工作区无感知。

## 示例

将新开发者添加到组织：

```bash
$ npm org set my-org @mx-smith
```

向组织添加新管理员（或将开发者更改为管理员）：



```bash
$ npm org set my-org @mx-santos admin
```

从组织中删除用户：

```bash
$ npm org rm my-org mx-santos
```

列出组织中的所有用户：

```bash
$ npm org ls my-org
```

以 JSON 格式列出所有用户：

```bash
$ npm org ls my-org --json
```

查看用户在组织中的角色：

```bash
$ npm org ls my-org @mx-santos
```

## 描述

你可以使用 `npm org` 命令来管理和查看组织的用户。它支持添加和删除用户、更改他们的角色、列出他们以及查找特定的用户和他们的角色。

## 配置

### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。



### `otp`

- 默认值：null
- 类型：空值或字符串

这是来自双重身份验证器的一次性密码。使用 `npm access` 发布或更改包权限时需要它。

如果未设置，并且注册表响应失败并询问一次性密码，npm 将在命令行上提示输入一次密码。

### `json`

- 默认值：false
- 类型：布尔值

是否输出 JSON 数据，而不是正常输出。

- 在 `npm pkg set` 中，它可以使用 JSON.parse() 解析集合值，然后再将它们保存到你的 `package.json`。

并非所有 npm 命令都支持。

### `parseable`

- 默认值：false
- 类型：布尔值

从写入标准输出的命令输出可解析的结果。对于 `npm search`，这将是制表符分隔的表格格式。
