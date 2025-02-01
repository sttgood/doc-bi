---
title: npm whoami
article: false
dir:
  collapsible: false
  link: true
---

## 概要npm whoami

注意：此命令对工作区无感知。

## 描述

显示当前登录用户的 npm 用户名。

如果登录到提供基于令牌的身份验证的注册表，则连接到 `/-/whoami` 注册表端点以查找与令牌关联的用户名，并打印到标准输出。

如果登录到使用基本身份验证的注册表，则只需打印身份验证字符串的 `username` 部分。

## 配置

### [`registry`](https://npm.nodejs.cn/cli/v11/commands/npm-whoami#registry)

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。
