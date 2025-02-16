---
title: npm token
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm token list
npm token revoke <id|token>
npm token create [--read-only] [--cidr=list]
```

注意：此命令对工作区无感知。



## 描述

这使你可以列出、创建和撤销身份验证令牌。

- `npm token list`：显示所有活动身份验证令牌的表格。你可以将其请求为带有 `--json` 的 JSON 或带有 `--parseable` 的制表符分隔值。



```bash
Read only token npm_1f… with id 7f3134 created 2017-10-21
Publish token npm_af…  with id c03241 created 2017-10-02with IP Whitelist: 192.168.0.1/24
Publish token npm_… with id e0cf92 created 2017-10-02
```

- `npm token create [--read-only] [--cidr=<cidr-ranges>]`：创建一个新的身份验证令牌。它可以是 `--read-only`，或者接受 [CIDR] 范围的列表，以限制使用此令牌。这将提示你输入密码，如果你启用了双重身份验证，则会提示你输入密码。

  目前，cli 无法生成自动化令牌。有关生成自动化令牌的更多信息，请参阅 [文档网站]。

```
Created publish token a73c9572-f1b9-8983-983d-ba3ac3cc913d
```

- `npm token revoke <token|id>`：立即从注册表中删除身份验证令牌。你将无法再使用它。这可以接受完整的令牌（例如你从 `npm token create` 返回的令牌，以及在你的 `.npmrc` 中找到的令牌），以及在 `npm token list` 的可解析或 json 输出中看到的 id。这将不接受在正常 `npm token list` 输出中找到的截断标记。



## 配置

### `read-only`

- 默认值：false
- 类型：布尔值

这用于在使用 `npm token create` 命令配置受限访问令牌时将令牌标记为无法发布。



### `cidr`

- 默认值：null
- 类型：null 或 String（可设置多次）

这是使用 `npm token create` 命令配置受限访问令牌时要使用的 CIDR 地址列表。



### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。



### `otp`

- 默认值：null
- 类型：空值或字符串

这是来自双重身份验证器的一次性密码。使用 `npm access` 发布或更改包权限时需要它。

如果未设置，并且注册表响应失败并询问一次性密码，npm 将在命令行上提示输入一次密码。
