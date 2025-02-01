---
title: npm logout
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm logout
```

注意：此命令对工作区无感知。

## 描述

登录到支持基于令牌的身份验证的注册表时，告诉服务器结束此令牌的会话。这将使令牌在你使用它的任何地方都无效，而不仅仅是当前环境。

当登录到使用用户名和密码身份验证的旧注册表时，这将清除用户配置中的凭据。在这种情况下，它只会影响当前环境。

如果提供了 `--scope`，这将找到连接到该范围的注册表的凭据（如果已设置）。

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
