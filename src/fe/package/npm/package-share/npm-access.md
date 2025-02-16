---
title: npm access
article: false
order: 8
---

## 概要

```bash
npm access list packages [<user>|<scope>|<scope:team>] [<package>]
npm access list collaborators [<package> [<user>]]
npm access get status [<package>]
npm access set status=public|private [<package>]
npm access set mfa=none|publish|automation [<package>]
npm access grant <read-only|read-write> <scope:team> [<package>]
npm access revoke <scope:team> [<package>]
```

注意：此命令对工作区无感知。



## 描述

用于设置私有包的访问控制。

对于所有子命令，如果没有将包名传递给子命令，`npm access` 将对当前工作目录中的包执行操作。

- `public / restricted（已弃用）`：将包设置为可公开访问或受限制。
- `grant / revoke（已弃用）`：添加或删除用户和团队对包具有只读或读写访问权限的能力。
- `2fa-required / 2fa-not-required（已弃用）`：配置包是否要求发布它的任何人在其账户上启用双重身份验证。
- `ls-packages（已弃用）`：显示用户或团队能够访问的所有包以及访问级别，只读公共包除外（它不会打印整个注册表列表）
- `ls-collaborators（已弃用）`：显示包的所有访问权限。只会显示你至少具有读取权限的包的权限。如果传入 `<user>`，则列表仅过滤到用户恰好属于的团队。
- edit（未实现）



## 详情

`npm access` 始终直接在当前注册表上运行，可以使用 `--registry=<registry url>` 从命令行进行配置。

无范围的包总是公开的。

范围包默认为受限，但你可以使用 `npm publish --access=public` 将它们发布为公共，或者在初始发布后使用 `npm access public` 将其访问权限设置为公共。

你必须具有设置包访问权限的权限：

- 你是无范围或范围包的所有者。
- 你是拥有范围的团队的成员。
- 作为团队成员或直接作为所有者，你已获得包的读写权限。

如果你启用了双重身份验证，系统会提示你提供第二个因素，或者可以使用 `--otp=...` 选项在命令行上指定它。

如果你的账户未付款，则除非你使用 `--access=public`，否则尝试发布范围包将失败并返回 HTTP 402 状态代码（从逻辑上讲）。

团队和团队成员的管理是使用 `npm team` 命令完成的。

## 配置

### `json`

- 默认值：false
- 类型：布尔值

是否输出 JSON 数据，而不是正常输出。

- 在 `npm pkg set` 中，它可以使用 JSON.parse() 解析集合值，然后再将它们保存到你的 `package.json`。

并非所有 npm 命令都支持。



### `otp`

- 默认值：null
- 类型：空值或字符串

这是来自双重身份验证器的一次性密码。使用 `npm access` 发布或更改包权限时需要它。

如果未设置，并且注册表响应失败并询问一次性密码，npm 将在命令行上提示输入一次密码。



### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。

