---
title: npm root
article: false
dir:
  collapsible: true
  link: true
---

## 概要

```bash
npm root
```

注意：此命令对工作区无感知。



## 描述

将有效的 `node_modules` **文件夹**打印到标准输出。

在使用 `node_modules` 文件夹执行操作的 shell 脚本中使用 npm 很有用。例如：



```bash
#!/bin/bash
global_node_modules="$"
echo "Global packages installed in: ${global_node_modules}"
```



## 配置

### `global`

- 默认值：false
- 类型：布尔值

在 "global" 模式下运行，以便将包安装到 `prefix` 文件夹而不是当前工作目录。有关行为差异的更多信息，请参见 文件夹。

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`
