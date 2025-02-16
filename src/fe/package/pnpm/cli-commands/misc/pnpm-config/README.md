---
title: pnpm config
article: false
dir:
  order: 13
  link: true
---

```bash
pnpm config
别名：c
```

管理配置文件。

配置文件采用 `INI` 格式。

本地配置文件位于项目根目录中，名为`.npmrc`。

全局配置文件位于以下位置之一：

- 如果设置了 **$XDG_CONFIG_HOME** 环境变量，则为 **$XDG_CONFIG_HOME/pnpm/rc**
- 在 Windows上：**~/AppData/Local/pnpm/config/rc**
- 在 macOS 上：**~/Library/preferences/pnpm/rc**
- 在 Linux上：**~/.config/pnpm/rc**

## 命令

### set \<key\> \<value\>

将配置键设置为提供的值。

### get \<key\>

打印所提供键的配置值。

### delete \<key\>

从配置文件中删除配置键。

### list

显示所有配置设置。

## 配置项

### --global, -g

在全局配置文件中设置配置项。

### --location

当设置为 `project` 时，将使用最接近的 `package.json` 下的 `.npmrc` 文件。

当设置为 `global` 时，性能与设置 `--global` 选项相同。

### --json

以 JSON 格式显示所有的配置设置。