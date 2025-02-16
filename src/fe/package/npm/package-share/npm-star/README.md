---
title: npm star
article: false
dir:
  collapsible: false
  link: true
---

## 概要

```bash
npm star [<package-spec>...]
```

注意：此命令对工作区无感知。



## 描述

"关注" 一个包意味着你对它有一些兴趣。这是一种模糊的积极方式来表明你在乎。

这是一个布尔值。反复主演没有额外的效果。



## 更多

还有这些额外的命令可以帮助你管理你最喜欢的包：



### 取消关注

你也可以使用 [`npm unstar`] "unstar" 一个包

"取消关注" 是同样的东西，但相反。



### 列出关注

你可以使用 `npm stars` 查看所有已加星标的包



## 配置

### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。



### `unicode`

- 默认值：在 Windows 上为 false，在具有 unicode 区域设置的 mac/unix 系统上为 true，如 `LC_ALL`、`LC_CTYPE` 或 `LANG` 环境变量所定义。
- 类型：布尔值

当设置为 true 时，npm 在树输出中使用 unicode 字符。当为 false 时，它使用 ascii 字符而不是 unicode 字形。



### `otp`

- 默认值：null
- 类型：空值或字符串

这是来自双重身份验证器的一次性密码。使用 `npm access` 发布或更改包权限时需要它。

如果未设置，并且注册表响应失败并询问一次性密码，npm 将在命令行上提示输入一次密码。
