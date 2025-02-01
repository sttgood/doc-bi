---
title: npm login
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm adduser
alias: add-user
```

注意：此命令对工作区无感知。

## 描述

在指定的注册表中创建一个新用户，并将凭据保存到 `.npmrc` 文件中。如果未指定注册表，将使用默认注册表（参见 `registry`]）。

当你的 `auth-type` 使用 `legacy` 时，用户名、密码和电子邮件将从提示中读取。

## 配置

### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。



### `scope`

- 默认值：当前项目的范围（如果有）或 ""
- 类型：字符串

将操作与范围注册表的作用域相关联。

在登录或退出私有注册表时很有用：

```bash
# log in, linking the scope to the custom registrynpm login --scope=@mycorp --registry=https://registry.mycorp.com
# log out, removing the link and the auth tokennpm logout --scope=@mycorp
```

这将导致 `@mycorp` 映射到注册表，以便将来安装根据模式 `@mycorp/package` 指定的包。

这也将导致 `npm init` 创建一个范围包。



```bash
# accept all defaults, and create a package named "@foo/whatever",
# instead of just named "whatever"
npm init --scope=@foo --yes
```

### `auth-type`

- 默认值："web"
- 类型："legacy" 或 "web"

`login` 使用什么身份验证策略。请注意，如果给出 `otp` 配置，则此值将始终设置为 `legacy`。
