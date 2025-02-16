---
title: npm restart
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm restart [-- <args>]
```

## 描述

这将重新启动一个项目。相当于运行 `npm run-script restart`。

如果当前项目在 `package.json` 中指定了 `"restart"` 脚本，则将运行以下脚本：

1. prerestart
2. restart
3. postrestart

如果它没有指定 `"restart"` 脚本，但它确实有 `stop` 和/或 `start` 脚本，则将运行以下脚本：

1. prerestart
2. prestop
3. stop
4. poststop
5. prestart
6. start
7. poststart
8. postrestart



## 配置

### `ignore-scripts`

- 默认值：false
- 类型：布尔值

如果为 true，npm 不会运行 package.json 文件中指定的脚本。

请注意，如果设置了 `ignore-scripts`，则明确旨在运行特定脚本的命令（例如 `npm start`、`npm stop`、`npm restart`、`npm test` 和 `npm run-script`）仍将运行其预期的脚本，但它们不会运行任何前置或后置脚本。



### `script-shell`

- 默认值：'/bin/sh' 在 POSIX 系统上，'cmd.exe' 在 Windows 上
- 类型：空值或字符串

用于脚本的 shell 与 `npm exec`、`npm run` 和 `npm init <package-spec>` 命令一起运行。
