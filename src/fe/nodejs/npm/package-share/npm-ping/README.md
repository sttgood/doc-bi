---
title: npm ping
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm ping
```

注意：此命令对工作区无感知。

## 描述

ping 配置或给定的 npm 注册表并验证身份验证。如果它有效，它将输出如下内容：

```bash
npm notice PING https://registry.npmjs.org/
npm notice PONG 255ms
```

否则你会得到一个错误：

```bash
npm notice PING http://foo.com/
npm ERR! code E404
npm ERR! 404 Not Found - GET http://www.foo.com/-/ping?write=true
```

## 配置

### `registry`

- 默认值："https://registry.npmjs.org/"
- 类型：URL

npm 注册表的基本 URL。
