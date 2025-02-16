---
title: npm deprecate
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm deprecate <package-spec> <message>
```

注意：此命令对工作区无感知。

## 描述

此命令将更新包的 npm 注册表项，向所有尝试安装它的人提供弃用警告。

它适用于 [版本范围](https://semver.npmjs.com/) 以及特定版本，因此你可以执行以下操作：



```bash
npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

传递给此命令的 SemVer 范围被解释为包含预发布版本。例如：



```bash
npm deprecate my-thing@1.x "1.x is no longer supported"
```

在这种情况下，版本 `my-thing@1.0.0-beta.0` 也将被弃用。

你必须是包所有者才能弃用某些东西。请参阅 `owner` 和 `adduser` 帮助主题。

要取消弃用包，请为 `message` 参数指定一个空字符串 (`""`)。请注意，你必须使用不带空格的双引号来格式化空字符串。

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
