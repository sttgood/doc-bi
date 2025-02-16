---
title: npm profile
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm profile enable-2fa [auth-only|auth-and-writes]
npm profile disable-2fa
npm profile get [<key>]
npm profile set <key> <value>
```

注意：此命令对工作区无感知。



## 描述

更改注册表上的个人资料信息。请注意，此命令取决于注册表实现，因此第三方注册表可能不支持此接口。

- `npm profile get [<property>]`：显示你的配置文件的所有属性，或一个或多个特定属性。看起来像：



```bash
name: example
email: e@example.com 
two-factor auth: auth-and-writes
fullname: Example User
homepage:
freenode:
twitter:
github:
created: 2015-02-26T01:38:35.892Z
updated: 2017-10-02T21:29:45.922Z
```

- `npm profile set <property> <value>`：设置配置文件属性的值。你可以通过这种方式设置以下属性：电子邮件、全名、主页、freenode、twitter、github
- `npm profile set password`：更改你的密码。这是交互式的，系统会提示你输入当前密码和新密码。如果你启用了双重身份验证，系统还会提示你输入 OTP。
- `npm profile enable-2fa [auth-and-writes|auth-only]`：启用双重身份验证。默认为 `auth-and-writes` 模式。模式是：
  - `auth-only`：登录或更改账户身份验证时需要 OTP。网站和命令行都需要 OTP。
  - `auth-and-writes`：`auth-only` 始终需要 OTP，并且在发布模块、设置 `latest` dist-tag 或通过 `npm access` 和 `npm owner` 更改访问权限时也需要 OTP。
- `npm profile disable-2fa`：禁用双重身份验证。



## 详情

其中一些命令在非 npmjs.com 注册表上可能不可用。

## 配置

### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。



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



### `otp`

- 默认值：null
- 类型：空值或字符串

这是来自双重身份验证器的一次性密码。使用 `npm access` 发布或更改包权限时需要它。

如果未设置，并且注册表响应失败并询问一次性密码，npm 将在命令行上提示输入一次密码。
